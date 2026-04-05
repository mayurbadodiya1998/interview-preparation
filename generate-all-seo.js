/**
 * 🚀 Website SEO Generator - Master Script
 * 
 * Converts ALL 125 topic HTML files to static HTML (no JS rendering).
 * Categories: Angular (20), React (20), Node (20), JavaScript (25), DSA (20), Logical (20)
 * 
 * This embeds all 2,213 questions & answers directly in HTML files for optimal SEO.
 * - Removes data-*.js file dependencies
 * - Keeps UI interactivity (search, accordion, sidebar, etc.)
 * - Improves Core Web Vitals and crawlability
 * 
 * Usage: node generate-all-seo.js
 * 
 * Note: This is the main generator. Use this instead of category-specific generators.
 */
'use strict';

const fs   = require('fs');
const path = require('path');
const vm   = require('vm');

const ROOT      = __dirname;
const DATA_DIR  = path.join(ROOT, 'js/data');
const TOPICS_DIR = path.join(ROOT, 'topics');

// ── All categories ────────────────────────────────────────────────────────────
const CATEGORIES = ['angular', 'react', 'node', 'javascript', 'dsa', 'logical'];

// ── Helpers ──────────────────────────────────────────────────────────────────
function escHtml(str) {
    return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;');
}

function buildSidebar(currentId, topics) {
    return topics.map(t => {
        const active = t.id === currentId ? ' active' : '';
        return `                    <li><a class="nav-link${active}" href="${t.id}.html"><i class="${t.icon}"></i><span>${t.title}</span></a></li>`;
    }).join('\n');
}

function buildAccordion(questions) {
    return questions.map((q, i) => {
        const uid      = 'q' + i;
        const expanded = i === 0;
        const qText    = escHtml(q.q || q.question || '');
        const aText    = q.a || q.answer || '';
        return `        <div class="accordion-item">
            <h2 class="accordion-header" id="h_${uid}">
                <button class="accordion-button${expanded ? '' : ' collapsed'}" type="button"
                    data-bs-toggle="collapse" data-bs-target="#c_${uid}"
                    aria-expanded="${expanded}">
                    <span class="question-number">${i + 1}</span>${qText}
                </button>
            </h2>
            <div id="c_${uid}" class="accordion-collapse collapse${expanded ? ' show' : ''}"
                data-bs-parent="#questionsAccordion">
                <div class="accordion-body">${aText}</div>
            </div>
        </div>`;
    }).join('\n');
}

function minimalScript(count) {
    return `    <script>
    (function(){
        // Sidebar toggle
        var sb=document.getElementById('sidebar'),bd=document.getElementById('sidebarBackdrop'),
            tg=document.getElementById('sidebarToggle');
        if(tg)tg.addEventListener('click',function(){sb.classList.add('open');bd.classList.add('show');});
        if(bd)bd.addEventListener('click',function(){sb.classList.remove('open');bd.classList.remove('show');});
        // Back to top
        var btt=document.getElementById('backToTop');
        window.addEventListener('scroll',function(){btt.classList.toggle('show',window.scrollY>400);});
        btt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'});});
        // Search filter
        var acc=document.getElementById('questionsAccordion');
        var totalCount=${count};
        var si=document.getElementById('searchInput');
        if(si){var t=null;si.addEventListener('input',function(){clearTimeout(t);var v=this.value.trim().toLowerCase();
        if(v.length<2){acc.querySelectorAll('.accordion-item').forEach(function(el){el.style.display='';});
        document.getElementById('questionCount').textContent=totalCount+' Questions';return;}
        t=setTimeout(function(){var c=0;acc.querySelectorAll('.accordion-item').forEach(function(el){
        var m=el.textContent.toLowerCase().indexOf(v)!==-1;el.style.display=m?'':'none';if(m)c++;});
        document.getElementById('questionCount').textContent=c+' Questions';},200);});}
    })();
    </script>`;
}

// ── Main ──────────────────────────────────────────────────────────────────────
console.log('🔄 SEO HTML Generator — Processing all categories...\n');

const results = {
    categories: CATEGORIES.length,
    files: 0,
    questions: 0,
    errors: []
};

// Process each category
CATEGORIES.forEach(category => {
    const dataFile = path.join(DATA_DIR, category + '-data.js');
    const categoryDir = path.join(TOPICS_DIR, category);

    if (!fs.existsSync(dataFile)) {
        results.errors.push(`Data file not found: ${category}-data.js`);
        return;
    }

    if (!fs.existsSync(categoryDir)) {
        results.errors.push(`Category directory not found: ${category}/`);
        return;
    }

    // Load data from category-data.js
    const sandbox = { window: {} };
    vm.createContext(sandbox);
    
    try {
        vm.runInContext(fs.readFileSync(dataFile, 'utf8'), sandbox);
    } catch (e) {
        results.errors.push(`Error loading ${category}-data.js: ${e.message}`);
        return;
    }

    // Find the global data variable
    const dataKey = Object.keys(sandbox.window).find(k => k.includes('CATEGORY'));
    const DATA = sandbox.window[dataKey];
    
    if (!DATA || !DATA.topics) {
        results.errors.push(`Invalid data structure in ${category}-data.js`);
        return;
    }

    console.log(`📂 ${category.toUpperCase()}`);
    const topics = DATA.topics;

    // Process each topic
    topics.forEach((topic, topicIndex) => {
        const filePath = path.join(categoryDir, topic.id + '.html');

        if (!fs.existsSync(filePath)) {
            console.log(`   ⚠️   ${topic.id}.html — not found`);
            return;
        }

        let html = fs.readFileSync(filePath, 'utf8');

        // 1. Replace sidebar list contents
        html = html.replace(
            /(<ul class="sidebar-links" id="topicList">)[\s\S]*?(<\/ul>)/,
            `$1\n${buildSidebar(topic.id, topics)}\n                </ul>`
        );

        // 2. Replace empty accordion div with hardcoded content
        html = html.replace(
            /<div class="accordion" id="questionsAccordion"><\/div>/,
            `<div class="accordion" id="questionsAccordion">\n${buildAccordion(topic.questions)}\n        </div>`
        );

        // 3. Update question count badge text
        html = html.replace(
            /(<span[^>]+id="questionCount"[^>]*>)[^<]*(<\/span>)/,
            `$1${topic.questions.length} Questions$2`
        );

        // 4. Remove data-js <script> tag
        const dataFileName = category + '-data.js';
        html = html.replace(
            new RegExp(`\\s*<script src="[^"]*/${dataFileName}"><\/script>\\n?`, 'g'),
            '\n'
        );

        // 5. Replace the large inline <script> block with minimal UI script
        html = html.replace(
            /<script>\s*\(function\(\)\{[\s\S]*?\}\)\(\);\s*<\/script>/,
            minimalScript(topic.questions.length)
        );

        fs.writeFileSync(filePath, html, 'utf8');
        console.log(`   ✅  ${topic.id}.html  (${topic.questions.length}q)`);
        results.files++;
        results.questions += topic.questions.length;
    });
});

// Summary
console.log(`\n${'─'.repeat(60)}`);
console.log(`✅ COMPLETED\n`);
console.log(`   Categories processed: ${results.categories}`);
console.log(`   HTML files updated: ${results.files}`);
console.log(`   Total questions embedded: ${results.questions}`);

if (results.errors.length > 0) {
    console.log(`\n⚠️  Errors encountered:`);
    results.errors.forEach(err => console.log(`   • ${err}`));
}

console.log(`\n📊 All topics now use static HTML for better SEO!\n`);
