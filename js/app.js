/**
 * InterviewPrep — Main Application Logic
 */
(function () {
    'use strict';

    /* ── Data registry ───────────────────────────────────── */
    var FRAMEWORKS = {
        angular: ANGULAR_DATA,
        node: NODE_DATA
    };

    /* ── State ───────────────────────────────────────────── */
    var currentFramework = null;
    var currentTopicIndex = 0;

    /* ── DOM cache ───────────────────────────────────────── */
    var $ = function (id) { return document.getElementById(id); };

    var topicList          = $('topicList');
    var contentArea        = $('contentArea');
    var welcomeSection     = $('welcomeSection');
    var questionsSection   = $('questionsSection');
    var searchResults      = $('searchResults');
    var searchResultsList  = $('searchResultsList');
    var questionsAccordion = $('questionsAccordion');
    var topicTitle         = $('topicTitle');
    var questionCount      = $('questionCount');
    var searchInput        = $('searchInput');
    var frameworkDropdown   = $('frameworkDropdownLink');
    var frameworkBadge      = $('currentFrameworkBadge');
    var sidebarTitle       = $('sidebarTitle');
    var backToTop          = $('backToTop');
    var sidebar            = $('sidebar');
    var sidebarBackdrop    = $('sidebarBackdrop');
    var sidebarToggle      = $('sidebarToggle');

    /* ── Expose to inline onclick ────────────────────────── */
    window.selectFramework = selectFramework;

    /* ── Sidebar toggle (mobile) ─────────────────────────── */
    function openSidebar()  { sidebar.classList.add('open');  sidebarBackdrop.classList.add('show');  }
    function closeSidebar() { sidebar.classList.remove('open'); sidebarBackdrop.classList.remove('show'); }

    if (sidebarToggle)  sidebarToggle.addEventListener('click', openSidebar);
    if (sidebarBackdrop) sidebarBackdrop.addEventListener('click', closeSidebar);

    /* ── Select framework ────────────────────────────────── */
    function selectFramework(name) {
        var data = FRAMEWORKS[name];
        if (!data) return;

        currentFramework = data;
        currentTopicIndex = 0;

        document.body.className = 'theme-' + name;

        frameworkDropdown.innerHTML =
            '<i class="bi ' + data.icon + ' me-1"></i> ' + data.label;

        frameworkBadge.textContent = data.label;

        sidebarTitle.innerHTML =
            '<i class="bi bi-journal-code me-2"></i>' + data.label + ' Topics';

        renderTopics(data.topics);
        showTopic(0);

        searchInput.value = '';
        hideSearch();
    }

    /* ── Render sidebar topics ───────────────────────────── */
    function renderTopics(topics) {
        topicList.innerHTML = '';

        topics.forEach(function (topic, idx) {
            var li = document.createElement('li');
            var a  = document.createElement('a');
            a.className = 'nav-link' + (idx === 0 ? ' active' : '');
            a.href = '#';
            a.innerHTML =
                '<i class="bi ' + topic.icon + '"></i>' +
                '<span>' + topic.title + '</span>' +
                '<span class="topic-count badge bg-secondary rounded-pill">' +
                topic.questions.length + '</span>';

            a.addEventListener('click', function (e) {
                e.preventDefault();
                showTopic(idx);
                if (window.innerWidth < 992) closeSidebar();
            });

            li.appendChild(a);
            topicList.appendChild(li);
        });
    }

    /* ── Show topic ──────────────────────────────────────── */
    function showTopic(idx) {
        if (!currentFramework) return;
        currentTopicIndex = idx;

        var topic = currentFramework.topics[idx];

        // active link
        var links = topicList.querySelectorAll('.nav-link');
        links.forEach(function (l) { l.classList.remove('active'); });
        if (links[idx]) links[idx].classList.add('active');

        topicTitle.textContent = topic.title;
        questionCount.textContent = topic.questions.length + ' Questions';

        renderQuestions(topic.questions);

        welcomeSection.classList.add('d-none');
        searchResults.classList.add('d-none');
        questionsSection.classList.remove('d-none');

        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    /* ── Render questions ────────────────────────────────── */
    function renderQuestions(questions) {
        questionsAccordion.innerHTML = '';

        questions.forEach(function (q, i) {
            var uid = 'q' + currentTopicIndex + '_' + i;

            var item = document.createElement('div');
            item.className = 'accordion-item';
            item.innerHTML =
                '<h2 class="accordion-header" id="h_' + uid + '">' +
                '<button class="accordion-button' + (i === 0 ? '' : ' collapsed') + '" ' +
                  'type="button" data-bs-toggle="collapse" data-bs-target="#c_' + uid + '" ' +
                  'aria-expanded="' + (i === 0 ? 'true' : 'false') + '">' +
                  '<span class="question-number">' + (i + 1) + '</span>' +
                  esc(q.q) +
                '</button></h2>' +
                '<div id="c_' + uid + '" class="accordion-collapse collapse' + (i === 0 ? ' show' : '') + '" ' +
                  'data-bs-parent="#questionsAccordion">' +
                  '<div class="accordion-body">' + q.a + '</div>' +
                '</div>';

            questionsAccordion.appendChild(item);
        });
    }

    /* ── Search ──────────────────────────────────────────── */
    var timer = null;
    searchInput.addEventListener('input', function () {
        clearTimeout(timer);
        var q = this.value.trim();
        if (q.length < 2) {
            hideSearch();
            if (currentFramework) questionsSection.classList.remove('d-none');
            else                  welcomeSection.classList.remove('d-none');
            return;
        }
        timer = setTimeout(function () { doSearch(q); }, 250);
    });

    function doSearch(query) {
        var low = query.toLowerCase();
        var results = [];
        var fws = currentFramework ? [currentFramework] : Object.values(FRAMEWORKS);

        fws.forEach(function (fw) {
            fw.topics.forEach(function (topic, tIdx) {
                topic.questions.forEach(function (q, qIdx) {
                    var inQ = q.q.toLowerCase().indexOf(low) !== -1;
                    var plain = q.a.replace(/<[^>]*>/g, '').toLowerCase();
                    var inA = plain.indexOf(low) !== -1;
                    if (inQ || inA) {
                        results.push({
                            framework: fw.label,
                            fwKey: fw.framework,
                            topic: topic.title,
                            tIdx: tIdx,
                            qIdx: qIdx,
                            question: q.q,
                            snippet: snippet(plain, low)
                        });
                    }
                });
            });
        });

        showSearch(results, query);
    }

    function snippet(text, q) {
        var i = text.indexOf(q);
        if (i === -1) return text.substring(0, 120) + '...';
        var s = Math.max(0, i - 40);
        var e = Math.min(text.length, i + q.length + 80);
        return (s > 0 ? '...' : '') + text.substring(s, e) + (e < text.length ? '...' : '');
    }

    function showSearch(results, query) {
        welcomeSection.classList.add('d-none');
        questionsSection.classList.add('d-none');
        searchResults.classList.remove('d-none');

        if (!results.length) {
            searchResultsList.innerHTML =
                '<div class="text-center text-muted py-5">' +
                '<i class="bi bi-search display-4 d-block mb-3"></i>' +
                'No results for "<strong>' + esc(query) + '</strong>"</div>';
            return;
        }

        searchResultsList.innerHTML =
            '<p class="text-muted mb-3">Found <strong>' + results.length +
            '</strong> result(s) for "<strong>' + esc(query) + '</strong>"</p>';

        results.forEach(function (r) {
            var div = document.createElement('div');
            div.className = 'search-result-item';
            div.innerHTML =
                '<div class="d-flex align-items-center gap-2 mb-1">' +
                '<span class="badge bg-' + (r.fwKey === 'angular' ? 'danger' : 'success') + '">' +
                  r.framework + '</span>' +
                '<small class="text-muted">' + esc(r.topic) + '</small></div>' +
                '<strong>' + esc(r.question) + '</strong>' +
                '<p class="text-muted small mb-0 mt-1">' + esc(r.snippet) + '</p>';

            div.addEventListener('click', function () {
                selectFramework(r.fwKey);
                showTopic(r.tIdx);
                setTimeout(function () {
                    var el = document.getElementById('c_q' + r.tIdx + '_' + r.qIdx);
                    if (el) {
                        new bootstrap.Collapse(el, { toggle: false }).show();
                        setTimeout(function () {
                            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
                        }, 300);
                    }
                }, 150);
            });

            searchResultsList.appendChild(div);
        });
    }

    function hideSearch() { searchResults.classList.add('d-none'); }

    /* ── Dropdown listeners ──────────────────────────────── */
    document.querySelectorAll('#frameworkDropdown .dropdown-item').forEach(function (item) {
        item.addEventListener('click', function (e) {
            e.preventDefault();
            selectFramework(this.getAttribute('data-framework'));
        });
    });

    /* ── Back to top ─────────────────────────────────────── */
    window.addEventListener('scroll', function () {
        backToTop.classList.toggle('show', window.scrollY > 400);
    });
    backToTop.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    /* ── Keyboard: Ctrl+K / focus search ─────────────────── */
    document.addEventListener('keydown', function (e) {
        if ((e.ctrlKey && e.key === 'k') || (e.key === '/' && e.target.tagName !== 'INPUT')) {
            e.preventDefault();
            searchInput.focus();
        }
        if (e.key === 'Escape') { closeSidebar(); }
    });

    /* ── Hash routing ────────────────────────────────────── */
    function handleHash() {
        var h = location.hash.replace('#', '');
        if (!h) return;
        var parts = h.split('/');
        if (parts[0] && FRAMEWORKS[parts[0]]) {
            selectFramework(parts[0]);
            if (parts[1]) {
                var idx = parseInt(parts[1], 10);
                if (!isNaN(idx) && idx < currentFramework.topics.length) showTopic(idx);
            }
        }
    }
    window.addEventListener('hashchange', handleHash);
    handleHash();

    /* ── Utility ─────────────────────────────────────────── */
    function esc(s) {
        var d = document.createElement('div');
        d.appendChild(document.createTextNode(s));
        return d.innerHTML;
    }

})();
