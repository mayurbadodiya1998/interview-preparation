/**
 * ⏮️  Revert CSS Changes
 * Removes embedded CSS from all HTML files
 * Restores external CSS link approach
 * Run: node revert-css.js
 */
'use strict';

const fs   = require('fs');
const path = require('path');

const ROOT       = __dirname;
const TOPICS_DIR = path.join(ROOT, 'topics');

const cssLink = `<link rel="stylesheet" href="../../css/styles.css">`;

console.log(`⏮️  Reverting to external CSS approach...\n`);

let count = 0;
let errors = [];

// Process all HTML files in topics directory
function walkDir(dir) {
    const files = fs.readdirSync(dir);
    
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            walkDir(fullPath);
        } else if (file.endsWith('.html')) {
            let html = fs.readFileSync(fullPath, 'utf8');
            
            // Remove embedded <style> tag
            html = html.replace(
                /<style>[\s\S]*?<\/style>\s*/,
                ''
            );
            
            // Add back external CSS link if not present
            if (!html.includes('href="../../css/styles.css"')) {
                html = html.replace(
                    /(<link href="https:\/\/cdn\.jsdelivr\.net\/npm\/bootstrap-icons[^>]*>)/,
                    `$1\n    ${cssLink}`
                );
            }
            
            fs.writeFileSync(fullPath, html, 'utf8');
            count++;
            
            const category = path.basename(path.dirname(fullPath));
            const topicName = path.basename(fullPath, '.html');
            console.log(`  ✅  ${category}/${topicName}.html`);
        }
    });
}

walkDir(TOPICS_DIR);

console.log(`\n${'─'.repeat(60)}`);
console.log(`✅ REVERTED\n`);
console.log(`   HTML files updated: ${count}`);
console.log(`   CSS approach: External file (../../css/styles.css)\n`);
console.log(`📝 Note: Files now use external CSS link`);
console.log(`   Deploy with Netlify using HTTP server\n`);
