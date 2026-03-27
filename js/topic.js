/**
 * InterviewPrep — Topic Page Renderer
 * Reads data-category & data-topic from #app, renders sidebar + questions + nav
 */
(function () {
    'use strict';

    var app = document.getElementById('app');
    if (!app) return;

    var category = app.getAttribute('data-category');
    var topicId  = app.getAttribute('data-topic');

    // DATA is set globally by the category data script
    var DATA = window.__TOPIC_DATA__;
    if (!DATA) return;

    var topics = DATA.topics;
    var currentIndex = -1;
    for (var i = 0; i < topics.length; i++) {
        if (topics[i].id === topicId) { currentIndex = i; break; }
    }
    if (currentIndex === -1) return;

    var topic = topics[currentIndex];
    var basePath = '../../topics/' + category + '/';
    var categoryPagePath = '../../pages/' + category + '.html';

    document.body.className = 'theme-' + category;

    // Build sidebar
    var sidebarHtml = '';
    topics.forEach(function (t, idx) {
        var active = idx === currentIndex ? ' active' : '';
        sidebarHtml += '<li><a class="nav-link' + active + '" href="' + basePath + t.id + '.html">' +
            '<i class="bi ' + t.icon + '"></i><span>' + t.title + '</span>' +
            '<span class="topic-count badge bg-secondary rounded-pill">' + t.questions.length + '</span></a></li>';
    });
    document.getElementById('topicList').innerHTML = sidebarHtml;

    // Breadcrumb
    document.getElementById('breadcrumb').innerHTML =
        '<a href="../../index.html">Home</a><span class="sep">/</span>' +
        '<a href="' + categoryPagePath + '">' + DATA.label + '</a><span class="sep">/</span>' +
        '<span class="current">' + topic.title + '</span>';

    // Title
    document.getElementById('topicTitle').textContent = topic.title;
    document.getElementById('questionCount').textContent = topic.questions.length + ' Questions';

    // Render questions
    var acc = document.getElementById('questionsAccordion');
    var html = '';
    topic.questions.forEach(function (q, i) {
        var uid = 'q' + i;
        var expanded = i === 0;
        html += '<div class="accordion-item">' +
            '<h2 class="accordion-header" id="h_' + uid + '">' +
            '<button class="accordion-button' + (expanded ? '' : ' collapsed') + '" type="button" ' +
            'data-bs-toggle="collapse" data-bs-target="#c_' + uid + '" aria-expanded="' + expanded + '">' +
            '<span class="question-number">' + (i + 1) + '</span>' + esc(q.q) +
            '</button></h2>' +
            '<div id="c_' + uid + '" class="accordion-collapse collapse' + (expanded ? ' show' : '') + '" ' +
            'data-bs-parent="#questionsAccordion">' +
            '<div class="accordion-body">' + q.a + '</div></div></div>';
    });
    acc.innerHTML = html;

    // Next / Previous
    var navEl = document.getElementById('topicNav');
    var navHtml = '';
    if (currentIndex > 0) {
        var prev = topics[currentIndex - 1];
        navHtml += '<a class="topic-nav-btn prev" href="' + basePath + prev.id + '.html">' +
            '<span class="label"><i class="bi bi-arrow-left me-1"></i> Previous</span>' +
            '<span class="title">' + esc(prev.title) + '</span></a>';
    }
    if (currentIndex < topics.length - 1) {
        var next = topics[currentIndex + 1];
        navHtml += '<a class="topic-nav-btn next" href="' + basePath + next.id + '.html">' +
            '<span class="label">Next <i class="bi bi-arrow-right ms-1"></i></span>' +
            '<span class="title">' + esc(next.title) + '</span></a>';
    }
    navEl.innerHTML = navHtml;

    // Mobile sidebar toggle
    var sidebar = document.getElementById('sidebar');
    var backdrop = document.getElementById('sidebarBackdrop');
    var toggle = document.getElementById('sidebarToggle');
    if (toggle) toggle.addEventListener('click', function () {
        sidebar.classList.add('open'); backdrop.classList.add('show');
    });
    if (backdrop) backdrop.addEventListener('click', function () {
        sidebar.classList.remove('open'); backdrop.classList.remove('show');
    });

    // Back to top
    var btt = document.getElementById('backToTop');
    window.addEventListener('scroll', function () { btt.classList.toggle('show', window.scrollY > 400); });
    btt.addEventListener('click', function () { window.scrollTo({ top: 0, behavior: 'smooth' }); });

    // Search
    var searchInput = document.getElementById('searchInput');
    if (searchInput) {
        var timer = null;
        searchInput.addEventListener('input', function () {
            clearTimeout(timer);
            var q = this.value.trim().toLowerCase();
            if (q.length < 2) { resetAccordionVisibility(); return; }
            timer = setTimeout(function () { filterQuestions(q); }, 200);
        });
    }

    function filterQuestions(query) {
        var items = acc.querySelectorAll('.accordion-item');
        var count = 0;
        items.forEach(function (item) {
            var text = item.textContent.toLowerCase();
            var match = text.indexOf(query) !== -1;
            item.style.display = match ? '' : 'none';
            if (match) count++;
        });
        document.getElementById('questionCount').textContent = count + ' Questions';
    }

    function resetAccordionVisibility() {
        acc.querySelectorAll('.accordion-item').forEach(function (item) { item.style.display = ''; });
        document.getElementById('questionCount').textContent = topic.questions.length + ' Questions';
    }

    function esc(s) {
        var d = document.createElement('div');
        d.appendChild(document.createTextNode(s));
        return d.innerHTML;
    }
})();
