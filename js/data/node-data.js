window.__CATEGORY_node__ = {
    category: "node",
    label: "Node.js",
    icon: "bi-hdd-network",
    topics: [
        {
            id: "node-fundamentals",
            title: "Node.js Fundamentals",
            icon: "bi-cpu",
            questions: [
                {
                    q: "What is Node.js and how does it differ from browser JavaScript?",
                    a: `<p>Node.js is a JavaScript runtime built on Chrome's V8 engine that allows running JavaScript on the server side.</p>
<pre><code>// Node.js provides server-side APIs
const fs = require('fs');
const http = require('http');

http.createServer((req, res) =&gt; {
  res.end('Hello from Node.js');
}).listen(3000);</code></pre>
<p>Unlike browser JS, Node.js has no DOM or window object but provides access to the file system, network, and OS-level APIs.</p>`
                },
                {
                    q: "What is the difference between require() and import in Node.js?",
                    a: `<p><code>require()</code> is the CommonJS module system built into Node.js, while <code>import</code> is the ES Module syntax.</p>
<pre><code>// CommonJS
const express = require('express');

// ES Modules (requires "type": "module" in package.json)
import express from 'express';</code></pre>
<p><code>require()</code> is synchronous and dynamic, while <code>import</code> is statically analyzed and supports tree-shaking.</p>`
                },
                {
                    q: "What is the purpose of package.json in a Node.js project?",
                    a: `<p><code>package.json</code> is the manifest file that holds metadata, dependencies, and scripts for a Node.js project.</p>
<pre><code>{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": { "start": "node index.js" },
  "dependencies": { "express": "^4.18.2" }
}</code></pre>
<p>It is created via <code>npm init</code> and is essential for dependency management, versioning, and defining runnable scripts.</p>`
                },
                {
                    q: "What is the global object in Node.js?",
                    a: `<p>In Node.js the global object is <code>global</code> (equivalent to <code>window</code> in browsers). It holds globally accessible variables and functions.</p>
<pre><code>console.log(global === globalThis); // true

global.myVar = 'accessible everywhere';
console.log(global.myVar); // 'accessible everywhere'</code></pre>
<p>However, variables declared with <code>const</code>, <code>let</code>, or <code>var</code> in a module are scoped to that module, not added to <code>global</code>.</p>`
                },
                {
                    q: "What is the difference between process.nextTick() and setImmediate()?",
                    a: `<p><code>process.nextTick()</code> fires before any I/O events in the current iteration, while <code>setImmediate()</code> fires in the next iteration of the event loop.</p>
<pre><code>setImmediate(() =&gt; console.log('setImmediate'));
process.nextTick(() =&gt; console.log('nextTick'));
// Output:
// nextTick
// setImmediate</code></pre>
<p><code>process.nextTick()</code> has higher priority and can starve I/O if used recursively. Prefer <code>setImmediate()</code> for deferring non-critical work.</p>`
                },
                {
                    q: "What are environment variables and how do you access them in Node.js?",
                    a: `<p>Environment variables are key-value pairs set outside the application that configure its behavior. They are accessed via <code>process.env</code>.</p>
<pre><code>// Set: PORT=3000 node app.js
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

console.log(\`Server running on port \${port}\`);</code></pre>
<p>Use the <strong>dotenv</strong> package to load variables from a <code>.env</code> file during development. Never commit secrets to source control.</p>`
                },
                {
                    q: "What is the V8 engine and why is it important for Node.js?",
                    a: `<p>V8 is Google's open-source JavaScript engine written in C++ that compiles JavaScript to native machine code for fast execution.</p>
<ul>
<li><strong>JIT Compilation</strong> — compiles JS to machine code at runtime, not interpreted</li>
<li><strong>Garbage Collection</strong> — automatic memory management via generational GC</li>
<li><strong>ES Standards</strong> — supports modern ECMAScript features natively</li>
</ul>
<p>Node.js wraps V8 with <strong>libuv</strong> to add asynchronous I/O, making it possible to build high-performance server applications.</p>`
                },
                {
                    q: "How does Node.js handle concurrency if it is single-threaded?",
                    a: `<p>Node.js uses a single-threaded event loop with non-blocking I/O. Heavy I/O operations are offloaded to the OS or a thread pool managed by <strong>libuv</strong>.</p>
<pre><code>const fs = require('fs');

// Non-blocking — callback fires when done
fs.readFile('data.txt', 'utf8', (err, data) =&gt; {
  console.log(data);
});
console.log('This runs first');</code></pre>
<p>CPU-intensive tasks can block the loop; use <strong>Worker Threads</strong> or child processes for heavy computation.</p>`
                },
                {
                    q: "What is the purpose of the process object in Node.js?",
                    a: `<p>The <code>process</code> object is a global that provides information and control over the current Node.js process.</p>
<pre><code>console.log(process.pid);       // Process ID
console.log(process.argv);      // Command-line arguments
console.log(process.cwd());     // Current working directory
console.log(process.version);   // Node.js version

process.on('exit', (code) =&gt; {
  console.log('Exiting with code:', code);
});</code></pre>
<p>It also emits events like <code>uncaughtException</code> and <code>unhandledRejection</code> for error handling.</p>`
                },
                {
                    q: "What is the difference between Node.js and Deno?",
                    a: `<p>Deno is a modern JavaScript/TypeScript runtime created by Node.js's original author to address Node's design shortcomings.</p>
<ul>
<li><strong>Security</strong> — Deno is secure by default; requires explicit permission flags for file, network, and env access</li>
<li><strong>TypeScript</strong> — built-in TypeScript support without extra configuration</li>
<li><strong>Modules</strong> — uses URL-based ES Modules instead of <code>node_modules</code></li>
<li><strong>Standard Library</strong> — ships a reviewed standard library</li>
</ul>
<p>Node.js has a vastly larger ecosystem and community, making it the more common choice for production applications.</p>`
                }
            ]
        },
        {
            id: "event-loop",
            title: "Event Loop",
            icon: "bi-arrow-repeat",
            questions: [
                {
                    q: "What is the Node.js event loop and how does it work?",
                    a: `<p>The event loop is the mechanism that allows Node.js to perform non-blocking I/O by offloading operations to the system kernel or thread pool and processing callbacks when they complete.</p>
<pre><code>// Phases: timers → pending → idle → poll → check → close
setTimeout(() =&gt; console.log('timer'), 0);
setImmediate(() =&gt; console.log('immediate'));
process.nextTick(() =&gt; console.log('nextTick'));
// nextTick → timer/immediate (order may vary)</code></pre>
<p>Each iteration (tick) processes callbacks from its phases in order: timers, I/O callbacks, idle, poll, check, and close callbacks.</p>`
                },
                {
                    q: "What are the different phases of the event loop?",
                    a: `<p>The event loop consists of six main phases executed in order:</p>
<ul>
<li><strong>Timers</strong> — executes <code>setTimeout</code> and <code>setInterval</code> callbacks</li>
<li><strong>Pending Callbacks</strong> — executes I/O callbacks deferred from the previous loop</li>
<li><strong>Idle/Prepare</strong> — internal use only</li>
<li><strong>Poll</strong> — retrieves new I/O events; executes I/O-related callbacks</li>
<li><strong>Check</strong> — executes <code>setImmediate()</code> callbacks</li>
<li><strong>Close Callbacks</strong> — executes close event callbacks like <code>socket.on('close')</code></li>
</ul>
<p>Between each phase, Node.js checks for <code>process.nextTick()</code> and resolved promise microtasks.</p>`
                },
                {
                    q: "What is the difference between the microtask queue and the macrotask queue?",
                    a: `<p>Microtasks (promises, <code>process.nextTick</code>) have higher priority and are drained completely before the event loop moves to the next macrotask (setTimeout, setInterval, I/O).</p>
<pre><code>setTimeout(() =&gt; console.log('1: timeout'), 0);
Promise.resolve().then(() =&gt; console.log('2: promise'));
process.nextTick(() =&gt; console.log('3: nextTick'));
// Output: 3: nextTick → 2: promise → 1: timeout</code></pre>
<p><code>process.nextTick</code> runs before promise microtasks. Excessive microtasks can starve the macrotask queue.</p>`
                },
                {
                    q: "How does setTimeout with 0ms delay actually work in Node.js?",
                    a: `<p><code>setTimeout(fn, 0)</code> does not execute immediately. The callback is placed in the <strong>timers</strong> phase and runs only after the current phase and all microtasks complete.</p>
<pre><code>console.log('start');
setTimeout(() =&gt; console.log('timeout'), 0);
Promise.resolve().then(() =&gt; console.log('promise'));
console.log('end');
// start → end → promise → timeout</code></pre>
<p>The minimum delay is clamped to 1ms internally. The actual execution time depends on event loop load and preceding callbacks.</p>`
                },
                {
                    q: "What happens if you block the event loop?",
                    a: `<p>Blocking the event loop prevents Node.js from processing any other callbacks, timers, or I/O events, making the server unresponsive.</p>
<pre><code>// BAD: blocks the event loop
app.get('/heavy', (req, res) =&gt; {
  let sum = 0;
  for (let i = 0; i &lt; 1e10; i++) sum += i;
  res.send(\`Sum: \${sum}\`);
});

// GOOD: offload to a worker thread
const { Worker } = require('worker_threads');</code></pre>
<p>Avoid synchronous operations and CPU-heavy computations on the main thread. Use worker threads, child processes, or task queues instead.</p>`
                },
                {
                    q: "How do Promises interact with the event loop?",
                    a: `<p>Promise callbacks (<code>.then</code>, <code>.catch</code>, <code>.finally</code>) are placed in the <strong>microtask queue</strong>, which is processed after the current operation completes but before the event loop continues to the next phase.</p>
<pre><code>console.log('A');
setTimeout(() =&gt; console.log('B'), 0);
Promise.resolve()
  .then(() =&gt; console.log('C'))
  .then(() =&gt; console.log('D'));
console.log('E');
// A → E → C → D → B</code></pre>
<p>All pending microtasks are drained before any macrotask runs, ensuring promise chains resolve quickly.</p>`
                },
                {
                    q: "What is libuv and what role does it play in Node.js?",
                    a: `<p><strong>libuv</strong> is a C library that provides Node.js with its event loop, asynchronous I/O, and cross-platform abstraction layer.</p>
<ul>
<li><strong>Thread Pool</strong> — default 4 threads for DNS, file system, and crypto operations</li>
<li><strong>Event Loop</strong> — implements the multi-phase loop that drives async behavior</li>
<li><strong>Async I/O</strong> — uses epoll (Linux), kqueue (macOS), IOCP (Windows)</li>
</ul>
<p>You can adjust the thread pool size via <code>UV_THREADPOOL_SIZE</code> environment variable (max 1024).</p>`
                },
                {
                    q: "What is the purpose of setImmediate() in the event loop?",
                    a: `<p><code>setImmediate()</code> schedules a callback to execute in the <strong>check phase</strong> of the event loop, after the poll phase completes.</p>
<pre><code>const fs = require('fs');

fs.readFile('file.txt', () =&gt; {
  setTimeout(() =&gt; console.log('timeout'), 0);
  setImmediate(() =&gt; console.log('immediate'));
});
// Inside I/O callback: immediate always runs first</code></pre>
<p>Within an I/O cycle, <code>setImmediate</code> always fires before <code>setTimeout(fn, 0)</code>. Outside I/O, the order is non-deterministic.</p>`
                },
                {
                    q: "How can you monitor event loop lag in a Node.js application?",
                    a: `<p>Event loop lag measures how long the loop is blocked. You can monitor it using timers or dedicated libraries.</p>
<pre><code>// Simple lag detection
let lastCheck = Date.now();
setInterval(() =&gt; {
  const now = Date.now();
  const lag = now - lastCheck - 1000;
  console.log(\`Event loop lag: \${lag}ms\`);
  lastCheck = now;
}, 1000);

// Or use: require('perf_hooks').monitorEventLoopDelay()</code></pre>
<p>Libraries like <strong>clinic.js</strong> and <strong>prom-client</strong> provide production-grade event loop monitoring and metrics.</p>`
                },
                {
                    q: "What is the thread pool in Node.js and when is it used?",
                    a: `<p>Node.js uses a libuv thread pool (default 4 threads) for operations that cannot be handled asynchronously by the OS kernel.</p>
<pre><code>// These use the thread pool:
const fs = require('fs');
const crypto = require('crypto');
const dns = require('dns');

// File system operations
fs.readFile('data.txt', callback);
// CPU-intensive crypto
crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', callback);
// dns.lookup (not dns.resolve)
dns.lookup('example.com', callback);</code></pre>
<p>Set <code>UV_THREADPOOL_SIZE</code> (up to 1024) to increase pool size for I/O-heavy applications.</p>`
                }
            ]
        },
        {
            id: "modules-system",
            title: "Modules System",
            icon: "bi-grid-3x3-gap",
            questions: [
                {
                    q: "How does the CommonJS module system work in Node.js?",
                    a: `<p>CommonJS uses <code>require()</code> to load modules and <code>module.exports</code> to expose functionality. Each file is treated as a separate module.</p>
<pre><code>// math.js
module.exports.add = (a, b) =&gt; a + b;
module.exports.subtract = (a, b) =&gt; a - b;

// app.js
const { add, subtract } = require('./math');
console.log(add(2, 3)); // 5</code></pre>
<p>Modules are loaded synchronously and cached after the first <code>require()</code> call, so subsequent imports return the same instance.</p>`
                },
                {
                    q: "What is the difference between module.exports and exports?",
                    a: `<p><code>exports</code> is a shorthand reference to <code>module.exports</code>. Both point to the same object initially, but reassigning <code>exports</code> breaks the reference.</p>
<pre><code>// Works — adding properties
exports.greet = () =&gt; 'Hello';

// BROKEN — reassigning exports does nothing
exports = { greet: () =&gt; 'Hello' };

// Correct — reassign module.exports instead
module.exports = { greet: () =&gt; 'Hello' };</code></pre>
<p>Always use <code>module.exports</code> when exporting a single function, class, or replacing the entire export object.</p>`
                },
                {
                    q: "How do ES Modules work in Node.js?",
                    a: `<p>ES Modules use <code>import</code>/<code>export</code> syntax. Enable them by setting <code>"type": "module"</code> in package.json or using the <code>.mjs</code> extension.</p>
<pre><code>// utils.mjs
export const greet = (name) =&gt; \`Hello, \${name}\`;
export default class Logger { log(msg) { console.log(msg); } }

// app.mjs
import Logger, { greet } from './utils.mjs';
const logger = new Logger();
logger.log(greet('World'));</code></pre>
<p>ES Modules are loaded asynchronously and support top-level <code>await</code>, static analysis, and tree-shaking.</p>`
                },
                {
                    q: "What is the module resolution algorithm in Node.js?",
                    a: `<p>When you call <code>require('module')</code>, Node.js resolves the module using a specific search order:</p>
<ul>
<li><strong>Core modules</strong> — built-in modules like <code>fs</code>, <code>path</code> are checked first</li>
<li><strong>File modules</strong> — paths starting with <code>./</code> or <code>/</code> resolve to exact files</li>
<li><strong>node_modules</strong> — searches <code>node_modules</code> folders up the directory tree</li>
</ul>
<pre><code>require('./myModule');
// Checks: myModule.js → myModule.json → myModule/index.js</code></pre>
<p>For folder modules, Node.js looks at the <code>main</code> field in <code>package.json</code> or defaults to <code>index.js</code>.</p>`
                },
                {
                    q: "What is module caching and how does it work?",
                    a: `<p>Node.js caches modules after the first <code>require()</code> call. Subsequent calls return the cached <code>module.exports</code> object without re-executing the file.</p>
<pre><code>// counter.js
let count = 0;
module.exports = { increment: () =&gt; ++count, getCount: () =&gt; count };

// app.js
const c1 = require('./counter');
const c2 = require('./counter');
c1.increment();
console.log(c2.getCount()); // 1 — same instance</code></pre>
<p>The cache is stored in <code>require.cache</code>. You can delete entries to force re-loading, but this is rarely recommended in production.</p>`
                },
                {
                    q: "What are circular dependencies and how does Node.js handle them?",
                    a: `<p>Circular dependencies occur when module A requires module B and module B requires module A. Node.js handles this by returning a <strong>partially loaded</strong> export.</p>
<pre><code>// a.js
exports.loaded = false;
const b = require('./b');
exports.loaded = true;

// b.js
const a = require('./a');
console.log(a.loaded); // false — partial export</code></pre>
<p>Node.js does not throw an error but returns whatever has been exported so far. Refactor shared logic into a third module to avoid circular issues.</p>`
                },
                {
                    q: "How do you create and publish an npm package?",
                    a: `<p>Initialize a package, write your code, and publish it to the npm registry.</p>
<pre><code>npm init -y                    # Create package.json
# Write your module code
npm login                      # Authenticate
npm publish                    # Publish to registry
npm version patch              # Bump version
npm publish                    # Publish update</code></pre>
<ul>
<li>Set <code>"main"</code> to your entry point and <code>"files"</code> to control what gets published</li>
<li>Add a <code>.npmignore</code> or use the <code>files</code> whitelist in package.json</li>
<li>Use scoped names like <code>@scope/package</code> for organization packages</li>
</ul>`
                },
                {
                    q: "What is the difference between dependencies and devDependencies?",
                    a: `<p><code>dependencies</code> are packages required at runtime, while <code>devDependencies</code> are only needed during development (testing, building, linting).</p>
<pre><code>npm install express            # → dependencies
npm install jest --save-dev    # → devDependencies

// package.json
{
  "dependencies": { "express": "^4.18.0" },
  "devDependencies": { "jest": "^29.0.0" }
}</code></pre>
<p>When deploying, run <code>npm install --production</code> to skip devDependencies and reduce the install size.</p>`
                },
                {
                    q: "What are Node.js built-in modules and name some important ones?",
                    a: `<p>Built-in (core) modules ship with Node.js and require no installation. They are loaded by name without a path prefix.</p>
<pre><code>const fs = require('fs');        // File system operations
const path = require('path');    // Path manipulation
const http = require('http');    // HTTP server/client
const os = require('os');        // Operating system info
const crypto = require('crypto');// Cryptographic functions
const events = require('events');// Event emitter</code></pre>
<p>Other key modules include <code>url</code>, <code>querystring</code>, <code>util</code>, <code>stream</code>, <code>child_process</code>, and <code>cluster</code>.</p>`
                },
                {
                    q: "What is the purpose of package-lock.json?",
                    a: `<p><code>package-lock.json</code> locks the exact dependency tree so every install produces identical <code>node_modules</code> across environments.</p>
<pre><code>// package.json — allows range
"express": "^4.18.0"

// package-lock.json — locks exact version
"express": {
  "version": "4.18.2",
  "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
  "integrity": "sha512-..."
}</code></pre>
<p>Always commit <code>package-lock.json</code> to version control. Use <code>npm ci</code> in CI/CD pipelines for clean, reproducible installs.</p>`
                }
            ]
        },
        {
            id: "express-basics",
            title: "Express.js Basics",
            icon: "bi-hdd-rack",
            questions: [
                {
                    q: "What is Express.js and why is it popular?",
                    a: `<p>Express.js is a minimal and flexible Node.js web framework that provides a robust set of features for building web and API applications.</p>
<pre><code>const express = require('express');
const app = express();

app.get('/', (req, res) =&gt; {
  res.send('Hello World');
});

app.listen(3000, () =&gt; console.log('Server on port 3000'));</code></pre>
<p>It is popular due to its simplicity, large middleware ecosystem, and being the de facto standard for Node.js web servers.</p>`
                },
                {
                    q: "How do you define routes in Express?",
                    a: `<p>Routes are defined using HTTP method functions on the app object, matching a path pattern and handler function.</p>
<pre><code>app.get('/users', (req, res) =&gt; res.json(users));
app.post('/users', (req, res) =&gt; { /* create user */ });
app.put('/users/:id', (req, res) =&gt; { /* update user */ });
app.delete('/users/:id', (req, res) =&gt; { /* delete user */ });

// Route parameters
app.get('/users/:id', (req, res) =&gt; {
  res.json({ userId: req.params.id });
});</code></pre>
<p>Use <code>app.all()</code> to handle all HTTP methods and <code>app.route()</code> to chain methods for the same path.</p>`
                },
                {
                    q: "What is the difference between req.params, req.query, and req.body?",
                    a: `<p>These three objects extract data from different parts of an HTTP request.</p>
<pre><code>// GET /users/42?sort=name
app.get('/users/:id', (req, res) =&gt; {
  req.params.id;   // '42' — from URL path parameter
  req.query.sort;  // 'name' — from query string
});

// POST /users with JSON body
app.post('/users', express.json(), (req, res) =&gt; {
  req.body.name;   // from request body (needs body parser)
});</code></pre>
<p><code>req.params</code> comes from route segments, <code>req.query</code> from the query string, and <code>req.body</code> from the parsed request payload.</p>`
                },
                {
                    q: "How do you serve static files in Express?",
                    a: `<p>Use the built-in <code>express.static()</code> middleware to serve files like images, CSS, and JavaScript from a directory.</p>
<pre><code>// Serve files from 'public' folder
app.use(express.static('public'));

// With a virtual path prefix
app.use('/assets', express.static('public'));

// Multiple static directories
app.use(express.static('public'));
app.use(express.static('uploads'));</code></pre>
<p>Files are resolved relative to the directory from which you launch Node. Use <code>path.join(__dirname, 'public')</code> for absolute paths.</p>`
                },
                {
                    q: "What is the Express Router and how do you use it?",
                    a: `<p><code>express.Router()</code> creates modular, mountable route handlers. Each router acts as a mini-application with its own middleware and routes.</p>
<pre><code>// routes/users.js
const router = require('express').Router();
router.get('/', (req, res) =&gt; res.json(users));
router.get('/:id', (req, res) =&gt; res.json(user));
module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);</code></pre>
<p>Routers help organize large applications by grouping related routes into separate files and mounting them under a common prefix.</p>`
                },
                {
                    q: "How do you handle form data and JSON in Express?",
                    a: `<p>Express provides built-in middleware to parse incoming request bodies.</p>
<pre><code>// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) =&gt; {
  console.log(req.body); // parsed body data
  res.json({ received: req.body });
});</code></pre>
<p>For file uploads, use <strong>multer</strong> middleware. The <code>extended: true</code> option uses the <code>qs</code> library for rich object parsing.</p>`
                },
                {
                    q: "How do you set response status codes and headers in Express?",
                    a: `<p>Use <code>res.status()</code> to set HTTP status codes and <code>res.set()</code> or <code>res.header()</code> to set response headers.</p>
<pre><code>app.post('/users', (req, res) =&gt; {
  res.status(201).json({ id: 1, name: 'Alice' });
});

app.get('/data', (req, res) =&gt; {
  res.set('Cache-Control', 'no-store');
  res.set('X-Custom-Header', 'value');
  res.json({ data: [] });
});

app.get('/old-page', (req, res) =&gt; {
  res.redirect(301, '/new-page');
});</code></pre>
<p>Methods like <code>res.json()</code>, <code>res.send()</code>, and <code>res.sendFile()</code> automatically set appropriate Content-Type headers.</p>`
                },
                {
                    q: "What is app.use() in Express and how does it work?",
                    a: `<p><code>app.use()</code> mounts middleware functions that execute for every incoming request matching the specified path (or all paths if none is given).</p>
<pre><code>// Runs for ALL requests
app.use((req, res, next) =&gt; {
  console.log(\`\${req.method} \${req.url}\`);
  next();
});

// Runs only for /api/* routes
app.use('/api', authMiddleware);

// Mount a router
app.use('/api/users', userRouter);</code></pre>
<p>Middleware registered with <code>app.use()</code> runs in the order it is defined. Always call <code>next()</code> to pass control to the next handler.</p>`
                },
                {
                    q: "How do you handle template engines in Express?",
                    a: `<p>Express supports template engines like EJS, Pug, and Handlebars for server-side HTML rendering.</p>
<pre><code>// Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// views/index.ejs
// &lt;h1&gt;Hello &lt;%= name %&gt;&lt;/h1&gt;

app.get('/', (req, res) =&gt; {
  res.render('index', { name: 'World' });
});</code></pre>
<p>Install the engine package (e.g., <code>npm i ejs</code>) and place templates in the views directory. Express automatically calls the engine's render function.</p>`
                },
                {
                    q: "How do you enable CORS in an Express application?",
                    a: `<p>Use the <strong>cors</strong> middleware package to enable Cross-Origin Resource Sharing for your API.</p>
<pre><code>const cors = require('cors');

// Allow all origins
app.use(cors());

// Restrict to specific origins
app.use(cors({
  origin: 'https://myapp.com',
  methods: ['GET', 'POST'],
  credentials: true
}));

// Per-route CORS
app.get('/public', cors(), (req, res) =&gt; { ... });</code></pre>
<p>CORS headers tell browsers which cross-origin requests are allowed. Configure <code>origin</code>, <code>methods</code>, and <code>allowedHeaders</code> based on your security requirements.</p>`
                }
            ]
        },
        {
            id: "middleware",
            title: "Middleware",
            icon: "bi-funnel",
            questions: [
                {
                    q: "What is middleware in Express and how does it work?",
                    a: `<p>Middleware functions are functions that have access to the request, response, and the <code>next</code> function. They can modify req/res, end the cycle, or pass control forward.</p>
<pre><code>const logger = (req, res, next) =&gt; {
  console.log(\`\${req.method} \${req.url}\`);
  next(); // pass to next middleware
};

app.use(logger);
app.get('/', (req, res) =&gt; res.send('Home'));</code></pre>
<p>Middleware executes in the order it is defined. Forgetting to call <code>next()</code> will hang the request.</p>`
                },
                {
                    q: "What are the different types of middleware in Express?",
                    a: `<p>Express has five types of middleware:</p>
<ul>
<li><strong>Application-level</strong> — bound to <code>app</code> via <code>app.use()</code> or <code>app.METHOD()</code></li>
<li><strong>Router-level</strong> — bound to <code>express.Router()</code></li>
<li><strong>Error-handling</strong> — takes four arguments <code>(err, req, res, next)</code></li>
<li><strong>Built-in</strong> — <code>express.json()</code>, <code>express.static()</code>, <code>express.urlencoded()</code></li>
<li><strong>Third-party</strong> — packages like <code>cors</code>, <code>helmet</code>, <code>morgan</code></li>
</ul>
<p>Each type serves a specific purpose in the request-response pipeline.</p>`
                },
                {
                    q: "How do you create custom middleware in Express?",
                    a: `<p>Custom middleware is a function that receives <code>req</code>, <code>res</code>, and <code>next</code>. You can modify the request, validate data, or add custom logic.</p>
<pre><code>// Authentication middleware
const authenticate = (req, res, next) =&gt; {
  const token = req.headers.authorization;
  if (!token) return res.status(401).json({ error: 'No token' });
  try {
    req.user = verifyToken(token);
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
};

app.get('/profile', authenticate, (req, res) =&gt; {
  res.json(req.user);
});</code></pre>`
                },
                {
                    q: "What is the next() function and what happens if you don't call it?",
                    a: `<p><code>next()</code> passes control to the next middleware in the stack. If you don't call it, the request will hang and eventually time out.</p>
<pre><code>// Correct — calls next()
app.use((req, res, next) =&gt; {
  req.requestTime = Date.now();
  next();
});

// Ends the cycle — no next() needed
app.use((req, res, next) =&gt; {
  res.send('Response sent');
});

// Skip to error handler
app.use((req, res, next) =&gt; {
  next(new Error('Something broke'));
});</code></pre>
<p>Call <code>next('route')</code> to skip remaining middleware in the current route and jump to the next matching route.</p>`
                },
                {
                    q: "How does error-handling middleware work in Express?",
                    a: `<p>Error-handling middleware has <strong>four parameters</strong>: <code>(err, req, res, next)</code>. Express recognizes this signature and routes errors to it.</p>
<pre><code>// Trigger an error
app.get('/fail', (req, res, next) =&gt; {
  next(new Error('Something went wrong'));
});

// Error handler — must have 4 params
app.use((err, req, res, next) =&gt; {
  console.error(err.stack);
  res.status(err.status || 500).json({
    error: err.message
  });
});</code></pre>
<p>Define error handlers <strong>after</strong> all other middleware and routes. You can chain multiple error handlers for different error types.</p>`
                },
                {
                    q: "What is the middleware execution order and why does it matter?",
                    a: `<p>Middleware executes in the exact order it is registered. The order determines which middleware processes the request first.</p>
<pre><code>// 1. Parse body first
app.use(express.json());

// 2. Then log
app.use(morgan('dev'));

// 3. Then authenticate
app.use('/api', authMiddleware);

// 4. Then routes
app.use('/api/users', userRouter);

// 5. 404 handler (after all routes)
app.use((req, res) =&gt; res.status(404).json({ error: 'Not found' }));

// 6. Error handler last
app.use((err, req, res, next) =&gt; { ... });</code></pre>
<p>Placing middleware in the wrong order can cause parsing failures, missing authentication, or skipped logging.</p>`
                },
                {
                    q: "What are some commonly used third-party middleware packages?",
                    a: `<p>Popular Express middleware packages that add essential features:</p>
<ul>
<li><strong>helmet</strong> — sets security-related HTTP headers</li>
<li><strong>cors</strong> — enables Cross-Origin Resource Sharing</li>
<li><strong>morgan</strong> — HTTP request logger</li>
<li><strong>compression</strong> — gzip/deflate response compression</li>
<li><strong>express-rate-limit</strong> — rate limiting for APIs</li>
<li><strong>multer</strong> — handles multipart/form-data (file uploads)</li>
</ul>
<pre><code>const helmet = require('helmet');
const morgan = require('morgan');
app.use(helmet());
app.use(morgan('combined'));</code></pre>`
                },
                {
                    q: "How do you apply middleware to specific routes only?",
                    a: `<p>You can apply middleware to specific routes by passing it as an argument before the route handler or using <code>app.use()</code> with a path.</p>
<pre><code>// Single route middleware
app.get('/admin', authenticate, adminOnly, (req, res) =&gt; {
  res.json({ admin: true });
});

// Path-specific middleware
app.use('/api', rateLimiter);

// Router-level middleware
const router = express.Router();
router.use(authenticate);
router.get('/profile', getProfile);
app.use('/user', router);</code></pre>
<p>This allows public routes to skip authentication while protecting private endpoints.</p>`
                },
                {
                    q: "How do you implement rate limiting middleware?",
                    a: `<p>Rate limiting restricts the number of requests a client can make within a time window, protecting against abuse and DDoS attacks.</p>
<pre><code>const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                  // 100 requests per window
  message: { error: 'Too many requests, try again later' },
  standardHeaders: true,
  legacyHeaders: false
});

app.use('/api', limiter);</code></pre>
<p>For production, use a store like <strong>rate-limit-redis</strong> to share state across multiple server instances.</p>`
                },
                {
                    q: "How do you create configurable middleware using factory functions?",
                    a: `<p>A middleware factory is a function that returns a middleware function, allowing you to customize behavior through options.</p>
<pre><code>function requestLogger(options = {}) {
  const { format = 'short' } = options;
  return (req, res, next) =&gt; {
    if (format === 'short') {
      console.log(\`\${req.method} \${req.url}\`);
    } else {
      console.log(\`\${req.method} \${req.url} - \${req.ip}\`);
    }
    next();
  };
}

app.use(requestLogger({ format: 'detailed' }));</code></pre>
<p>This pattern is used by most third-party middleware like <code>cors(options)</code> and <code>morgan(format)</code>.</p>`
                }
            ]
        },
        {
            id: "rest-api-design",
            title: "REST API Design",
            icon: "bi-diagram-3",
            questions: [
                {
                    q: "What are the key principles of RESTful API design?",
                    a: `<p>REST (Representational State Transfer) follows these core principles:</p>
<ul>
<li><strong>Stateless</strong> — each request contains all needed information; no server-side sessions</li>
<li><strong>Resource-based</strong> — URLs represent resources (nouns), not actions</li>
<li><strong>HTTP methods</strong> — use GET, POST, PUT, PATCH, DELETE for operations</li>
<li><strong>Uniform interface</strong> — consistent URL patterns and response formats</li>
</ul>
<pre><code>GET    /api/users       // List users
POST   /api/users       // Create user
GET    /api/users/:id   // Get one user
PUT    /api/users/:id   // Replace user
DELETE /api/users/:id   // Delete user</code></pre>`
                },
                {
                    q: "How do you structure a REST API project in Node.js?",
                    a: `<p>A well-organized REST API separates concerns into layers:</p>
<pre><code>project/
├── src/
│   ├── controllers/    // Request handlers
│   │   └── userController.js
│   ├── routes/         // Route definitions
│   │   └── userRoutes.js
│   ├── models/         // Data models
│   │   └── User.js
│   ├── middleware/     // Custom middleware
│   │   └── auth.js
│   ├── services/      // Business logic
│   │   └── userService.js
│   └── app.js         // Express setup
├── package.json
└── .env</code></pre>
<p>This <strong>MVC-like pattern</strong> keeps code maintainable and testable as the application grows.</p>`
                },
                {
                    q: "How do you implement pagination in a REST API?",
                    a: `<p>Pagination limits the amount of data returned per request using query parameters for page and limit.</p>
<pre><code>// GET /api/users?page=2&limit=10
app.get('/api/users', async (req, res) =&gt; {
  const page = parseInt(req.query.page) || 1;
  const limit = parseInt(req.query.limit) || 10;
  const skip = (page - 1) * limit;

  const users = await User.find().skip(skip).limit(limit);
  const total = await User.countDocuments();

  res.json({
    data: users,
    pagination: { page, limit, total, pages: Math.ceil(total / limit) }
  });
});</code></pre>
<p>Include pagination metadata in the response so clients know how to navigate through results.</p>`
                },
                {
                    q: "What are HTTP status codes and which ones should a REST API use?",
                    a: `<p>HTTP status codes communicate the result of a request. Key codes for REST APIs:</p>
<ul>
<li><strong>200 OK</strong> — successful GET, PUT, PATCH</li>
<li><strong>201 Created</strong> — successful POST that creates a resource</li>
<li><strong>204 No Content</strong> — successful DELETE</li>
<li><strong>400 Bad Request</strong> — invalid input or validation error</li>
<li><strong>401 Unauthorized</strong> — missing or invalid authentication</li>
<li><strong>403 Forbidden</strong> — authenticated but lacking permission</li>
<li><strong>404 Not Found</strong> — resource does not exist</li>
<li><strong>409 Conflict</strong> — duplicate resource or state conflict</li>
<li><strong>500 Internal Server Error</strong> — unhandled server error</li>
</ul>
<p>Always return appropriate status codes to help clients handle responses correctly.</p>`
                },
                {
                    q: "How do you implement input validation in a REST API?",
                    a: `<p>Use a validation library like <strong>Joi</strong> or <strong>express-validator</strong> to validate incoming request data before processing.</p>
<pre><code>const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).max(120)
});

app.post('/api/users', (req, res) =&gt; {
  const { error, value } = userSchema.validate(req.body);
  if (error) return res.status(400).json({ error: error.details[0].message });
  // proceed with validated data
});</code></pre>
<p>Always validate on the server side regardless of client-side validation. Never trust user input.</p>`
                },
                {
                    q: "What is API versioning and how do you implement it?",
                    a: `<p>API versioning allows you to make breaking changes without affecting existing clients. Common strategies:</p>
<pre><code>// URL versioning (most common)
app.use('/api/v1/users', v1UserRouter);
app.use('/api/v2/users', v2UserRouter);

// Header versioning
app.use('/api/users', (req, res, next) =&gt; {
  const version = req.headers['api-version'] || '1';
  req.apiVersion = version;
  next();
});

// Query parameter
// GET /api/users?version=2</code></pre>
<p>URL-based versioning is the simplest and most widely adopted approach. Maintain older versions until clients migrate.</p>`
                },
                {
                    q: "How do you handle filtering and sorting in a REST API?",
                    a: `<p>Use query parameters to let clients filter and sort results dynamically.</p>
<pre><code>// GET /api/products?category=electronics&minPrice=100&sort=-price
app.get('/api/products', async (req, res) =&gt; {
  const { category, minPrice, sort } = req.query;
  const filter = {};
  if (category) filter.category = category;
  if (minPrice) filter.price = { $gte: Number(minPrice) };

  const sortObj = {};
  if (sort) {
    const field = sort.replace('-', '');
    sortObj[field] = sort.startsWith('-') ? -1 : 1;
  }

  const products = await Product.find(filter).sort(sortObj);
  res.json(products);
});</code></pre>
<p>Prefix sort fields with <code>-</code> for descending order. Whitelist allowed filter/sort fields to prevent injection.</p>`
                },
                {
                    q: "What is HATEOAS and how does it apply to REST APIs?",
                    a: `<p>HATEOAS (Hypermedia as the Engine of Application State) means API responses include links to related resources and available actions.</p>
<pre><code>// Response with HATEOAS links
{
  "id": 42,
  "name": "Alice",
  "email": "alice@example.com",
  "links": [
    { "rel": "self", "href": "/api/users/42", "method": "GET" },
    { "rel": "update", "href": "/api/users/42", "method": "PUT" },
    { "rel": "delete", "href": "/api/users/42", "method": "DELETE" },
    { "rel": "orders", "href": "/api/users/42/orders", "method": "GET" }
  ]
}</code></pre>
<p>HATEOAS makes APIs self-documenting and allows clients to discover actions dynamically without hardcoding URLs.</p>`
                },
                {
                    q: "How do you implement search functionality in a REST API?",
                    a: `<p>Implement search using query parameters with text matching or full-text search capabilities.</p>
<pre><code>// GET /api/users/search?q=alice&fields=name,email
app.get('/api/users/search', async (req, res) =&gt; {
  const { q, fields } = req.query;
  if (!q) return res.status(400).json({ error: 'Query required' });

  // MongoDB text search
  const results = await User.find(
    { $text: { $search: q } },
    { score: { $meta: 'textScore' } }
  ).sort({ score: { $meta: 'textScore' } });

  res.json({ results, count: results.length });
});</code></pre>
<p>For advanced search, integrate <strong>Elasticsearch</strong> or <strong>Algolia</strong>. Always sanitize and limit search input.</p>`
                },
                {
                    q: "How do you document a REST API?",
                    a: `<p>Use <strong>OpenAPI/Swagger</strong> to create interactive, standardized API documentation.</p>
<pre><code>const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

/**
 * @openapi
 * /api/users:
 *   get:
 *     summary: List all users
 *     responses:
 *       200:
 *         description: Array of users
 */
app.get('/api/users', getUsers);

const specs = swaggerJsdoc(options);
app.use('/docs', swaggerUi.serve, swaggerUi.setup(specs));</code></pre>
<p>Swagger UI provides a live, testable interface at <code>/docs</code>. Keep documentation updated alongside code changes.</p>`
                }
            ]
        },
        {
            id: "error-handling",
            title: "Error Handling",
            icon: "bi-exclamation-triangle",
            questions: [
                {
                    q: "How do you handle errors in Express applications?",
                    a: `<p>Express uses a centralized error-handling middleware with four parameters to catch and process errors from all routes.</p>
<pre><code>// Route that throws
app.get('/data', async (req, res, next) =&gt; {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (err) {
    next(err); // forward to error handler
  }
});

// Centralized error handler
app.use((err, req, res, next) =&gt; {
  const status = err.status || 500;
  res.status(status).json({ error: err.message });
});</code></pre>
<p>Always pass errors to <code>next(err)</code> so they reach the error handler instead of crashing the process.</p>`
                },
                {
                    q: "What is the difference between operational and programmer errors?",
                    a: `<p><strong>Operational errors</strong> are expected runtime problems (invalid input, network failure). <strong>Programmer errors</strong> are bugs in the code (typos, null references).</p>
<ul>
<li><strong>Operational</strong> — handle gracefully with proper status codes and messages</li>
<li><strong>Programmer</strong> — fix the code; crash and restart if necessary</li>
</ul>
<pre><code>// Operational — handle it
if (!user) return res.status(404).json({ error: 'User not found' });

// Programmer — bug, should not happen
const name = user.profile.name; // TypeError if user is null</code></pre>
<p>Use custom error classes to distinguish between the two types in your error handler.</p>`
                },
                {
                    q: "How do you create custom error classes in Node.js?",
                    a: `<p>Extend the built-in <code>Error</code> class to create custom errors with additional properties like status codes.</p>
<pre><code>class AppError extends Error {
  constructor(message, statusCode) {
    super(message);
    this.statusCode = statusCode;
    this.isOperational = true;
    Error.captureStackTrace(this, this.constructor);
  }
}

class NotFoundError extends AppError {
  constructor(resource) {
    super(\`\${resource} not found\`, 404);
  }
}

// Usage
throw new NotFoundError('User');</code></pre>
<p>This lets your error handler distinguish operational errors from unexpected bugs using the <code>isOperational</code> flag.</p>`
                },
                {
                    q: "How do you handle uncaught exceptions and unhandled rejections?",
                    a: `<p>Use process-level event handlers to catch errors that escape try/catch blocks and prevent silent crashes.</p>
<pre><code>process.on('uncaughtException', (err) =&gt; {
  console.error('Uncaught Exception:', err);
  process.exit(1); // Must exit — state may be corrupt
});

process.on('unhandledRejection', (reason, promise) =&gt; {
  console.error('Unhandled Rejection:', reason);
  // Optionally exit or log and continue
});

// Graceful shutdown
process.on('SIGTERM', () =&gt; {
  server.close(() =&gt; process.exit(0));
});</code></pre>
<p>Log the error, clean up resources, and restart the process. Use a process manager like <strong>PM2</strong> for automatic restarts.</p>`
                },
                {
                    q: "How do you handle async errors in Express without try/catch in every route?",
                    a: `<p>Create a wrapper function that catches async errors and forwards them to the error handler automatically.</p>
<pre><code>// Async error wrapper
const asyncHandler = (fn) =&gt; (req, res, next) =&gt;
  Promise.resolve(fn(req, res, next)).catch(next);

// Use it on routes — no try/catch needed
app.get('/users', asyncHandler(async (req, res) =&gt; {
  const users = await User.find();
  res.json(users);
}));

app.get('/users/:id', asyncHandler(async (req, res) =&gt; {
  const user = await User.findById(req.params.id);
  if (!user) throw new NotFoundError('User');
  res.json(user);
}));</code></pre>
<p>This pattern eliminates repetitive try/catch blocks while ensuring all async errors are properly handled.</p>`
                },
                {
                    q: "How do you implement graceful shutdown in a Node.js server?",
                    a: `<p>Graceful shutdown ensures in-flight requests complete and resources are cleaned up before the process exits.</p>
<pre><code>const server = app.listen(3000);

function shutdown(signal) {
  console.log(\`\${signal} received. Shutting down gracefully...\`);
  server.close(() =&gt; {
    console.log('HTTP server closed');
    // Close DB connections, flush logs, etc.
    mongoose.connection.close(false, () =&gt; {
      process.exit(0);
    });
  });
  // Force exit after 10s
  setTimeout(() =&gt; process.exit(1), 10000);
}

process.on('SIGTERM', () =&gt; shutdown('SIGTERM'));
process.on('SIGINT', () =&gt; shutdown('SIGINT'));</code></pre>`
                },
                {
                    q: "What is the purpose of the express-async-errors package?",
                    a: `<p><code>express-async-errors</code> patches Express to automatically catch errors from async route handlers without needing a wrapper function.</p>
<pre><code>require('express-async-errors'); // Just require it — no setup

app.get('/users', async (req, res) =&gt; {
  const users = await User.find(); // If this throws,
  res.json(users);                  // error goes to handler
});

// Errors are automatically forwarded here
app.use((err, req, res, next) =&gt; {
  res.status(500).json({ error: err.message });
});</code></pre>
<p>This package monkey-patches Express's <code>Layer.handle</code> to wrap async functions. It's simpler than writing a custom <code>asyncHandler</code> utility.</p>`
                },
                {
                    q: "How do you log errors effectively in a Node.js production application?",
                    a: `<p>Use a structured logging library like <strong>Winston</strong> or <strong>Pino</strong> for production-grade error logging with levels and transports.</p>
<pre><code>const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// Error middleware
app.use((err, req, res, next) =&gt; {
  logger.error({ message: err.message, stack: err.stack, url: req.url });
  res.status(500).json({ error: 'Internal server error' });
});</code></pre>
<p>Never expose stack traces or internal details to clients in production. Log them server-side for debugging.</p>`
                },
                {
                    q: "How do you handle 404 Not Found errors in Express?",
                    a: `<p>Add a catch-all middleware <strong>after</strong> all route definitions to handle requests that don't match any route.</p>
<pre><code>// All routes defined above...
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

// 404 handler — placed after all routes
app.use((req, res, next) =&gt; {
  res.status(404).json({
    error: 'Not Found',
    message: \`Route \${req.method} \${req.url} not found\`,
    status: 404
  });
});

// Error handler — placed last
app.use((err, req, res, next) =&gt; { ... });</code></pre>
<p>This middleware catches any request that wasn't handled by previous routes or middleware.</p>`
                },
                {
                    q: "How do you validate and handle errors for MongoDB/Mongoose operations?",
                    a: `<p>Mongoose provides built-in validation and emits specific error types that you can handle in your error middleware.</p>
<pre><code>app.use((err, req, res, next) =&gt; {
  // Mongoose validation error
  if (err.name === 'ValidationError') {
    const errors = Object.values(err.errors).map(e =&gt; e.message);
    return res.status(400).json({ errors });
  }
  // Duplicate key error
  if (err.code === 11000) {
    return res.status(409).json({ error: 'Duplicate entry' });
  }
  // Invalid ObjectId
  if (err.name === 'CastError') {
    return res.status(400).json({ error: 'Invalid ID format' });
  }
  res.status(500).json({ error: 'Server error' });
});</code></pre>
<p>Map database errors to appropriate HTTP status codes for meaningful client responses.</p>`
                }
            ]
        },
        {
            id: "file-system",
            title: "File System",
            icon: "bi-folder",
            questions: [
                {
                    q: "How do you read files in Node.js?",
                    a: `<p>The <code>fs</code> module provides both asynchronous and synchronous methods for reading files.</p>
<pre><code>const fs = require('fs');
const fsPromises = require('fs').promises;

// Callback-based
fs.readFile('data.txt', 'utf8', (err, data) =&gt; {
  if (err) throw err;
  console.log(data);
});

// Promise-based (preferred)
const data = await fsPromises.readFile('data.txt', 'utf8');

// Synchronous (blocks event loop)
const data = fs.readFileSync('data.txt', 'utf8');</code></pre>
<p>Always use the async version in servers to avoid blocking the event loop. Specify encoding to get a string instead of a Buffer.</p>`
                },
                {
                    q: "How do you write files in Node.js?",
                    a: `<p>Use <code>fs.writeFile()</code> to create or overwrite a file and <code>fs.appendFile()</code> to add content to an existing file.</p>
<pre><code>const fs = require('fs').promises;

// Write (creates or overwrites)
await fs.writeFile('output.txt', 'Hello World', 'utf8');

// Append to existing file
await fs.appendFile('log.txt', 'New entry\\n', 'utf8');

// Write JSON
const data = { name: 'Alice', age: 30 };
await fs.writeFile('data.json', JSON.stringify(data, null, 2));</code></pre>
<p>Use <code>{ flag: 'wx' }</code> with writeFile to fail if the file already exists, preventing accidental overwrites.</p>`
                },
                {
                    q: "How do you work with directories in Node.js?",
                    a: `<p>The <code>fs</code> module provides methods for creating, reading, and removing directories.</p>
<pre><code>const fs = require('fs').promises;

// Create directory (recursive creates parent dirs)
await fs.mkdir('path/to/dir', { recursive: true });

// Read directory contents
const files = await fs.readdir('src');
console.log(files); // ['index.js', 'utils.js']

// Read with file types
const entries = await fs.readdir('src', { withFileTypes: true });
entries.forEach(e =&gt; console.log(e.name, e.isDirectory()));

// Remove directory
await fs.rmdir('old-dir');
await fs.rm('old-dir', { recursive: true, force: true });</code></pre>`
                },
                {
                    q: "What is the path module and how do you use it?",
                    a: `<p>The <code>path</code> module provides utilities for working with file and directory paths in a cross-platform way.</p>
<pre><code>const path = require('path');

path.join('src', 'utils', 'index.js');   // 'src/utils/index.js'
path.resolve('src', 'app.js');            // '/full/path/src/app.js'
path.basename('/src/app.js');             // 'app.js'
path.dirname('/src/utils/index.js');      // '/src/utils'
path.extname('app.min.js');               // '.js'
path.parse('/src/app.js');
// { root:'/', dir:'/src', base:'app.js', ext:'.js', name:'app' }</code></pre>
<p>Always use <code>path.join()</code> instead of string concatenation to handle OS-specific path separators correctly.</p>`
                },
                {
                    q: "How do you watch for file changes in Node.js?",
                    a: `<p>Use <code>fs.watch()</code> to monitor files or directories for changes in real time.</p>
<pre><code>const fs = require('fs');

// Watch a single file
fs.watch('config.json', (eventType, filename) =&gt; {
  console.log(\`\${filename} changed: \${eventType}\`);
});

// Watch a directory recursively
fs.watch('src', { recursive: true }, (event, filename) =&gt; {
  console.log(\`\${event}: \${filename}\`);
});

// Using chokidar (more reliable)
const chokidar = require('chokidar');
chokidar.watch('src').on('change', (path) =&gt; {
  console.log(\`File changed: \${path}\`);
});</code></pre>
<p>The built-in <code>fs.watch</code> can be unreliable across platforms. Use <strong>chokidar</strong> for production file watching.</p>`
                },
                {
                    q: "How do you check if a file or directory exists?",
                    a: `<p>Use <code>fs.access()</code> or <code>fs.stat()</code> to check file existence. The deprecated <code>fs.exists()</code> should not be used.</p>
<pre><code>const fs = require('fs').promises;

// Check existence with access
try {
  await fs.access('config.json');
  console.log('File exists');
} catch {
  console.log('File does not exist');
}

// Get file details with stat
const stats = await fs.stat('data.txt');
console.log(stats.isFile());       // true
console.log(stats.isDirectory());  // false
console.log(stats.size);           // size in bytes</code></pre>
<p>Prefer trying the operation and handling the error (EAFP) over checking existence first, to avoid race conditions.</p>`
                },
                {
                    q: "How do you copy, move, and rename files in Node.js?",
                    a: `<p>The <code>fs</code> module provides methods for file operations like copying, renaming, and moving.</p>
<pre><code>const fs = require('fs').promises;

// Copy a file
await fs.copyFile('source.txt', 'dest.txt');

// Rename or move a file
await fs.rename('old-name.txt', 'new-name.txt');
await fs.rename('file.txt', 'archive/file.txt'); // move

// Copy directory recursively (Node 16+)
await fs.cp('src', 'backup', { recursive: true });

// Delete a file
await fs.unlink('temp.txt');</code></pre>
<p>For cross-device moves, copy the file then delete the original, since <code>rename()</code> does not work across different file systems.</p>`
                },
                {
                    q: "How do you handle file permissions in Node.js?",
                    a: `<p>Use <code>fs.chmod()</code> to change permissions and <code>fs.stat()</code> to read them. Permissions use octal notation.</p>
<pre><code>const fs = require('fs').promises;

// Set permissions (owner: rwx, group: rx, others: r)
await fs.chmod('script.sh', 0o754);

// Read permissions
const stats = await fs.stat('script.sh');
console.log(stats.mode.toString(8)); // e.g., '100754'

// Create file with specific permissions
await fs.writeFile('secret.txt', 'data', { mode: 0o600 });

// Change ownership (requires root)
await fs.chown('file.txt', uid, gid);</code></pre>
<p>On Windows, only the writable attribute is supported. Use <code>0o600</code> for private files and <code>0o644</code> for readable files.</p>`
                },
                {
                    q: "How do you read and write JSON files in Node.js?",
                    a: `<p>Read JSON files with <code>fs.readFile</code> + <code>JSON.parse</code> and write with <code>JSON.stringify</code> + <code>fs.writeFile</code>.</p>
<pre><code>const fs = require('fs').promises;

// Read JSON
async function readJSON(filePath) {
  const raw = await fs.readFile(filePath, 'utf8');
  return JSON.parse(raw);
}

// Write JSON (with pretty-printing)
async function writeJSON(filePath, data) {
  await fs.writeFile(filePath, JSON.stringify(data, null, 2));
}

// Usage
const config = await readJSON('config.json');
config.port = 4000;
await writeJSON('config.json', config);</code></pre>
<p>For <code>require('./data.json')</code>, Node.js automatically parses JSON but caches it — changes won't be reflected without cache clearing.</p>`
                },
                {
                    q: "How do you create temporary files and directories in Node.js?",
                    a: `<p>Use <code>fs.mkdtemp()</code> to create unique temporary directories and <code>os.tmpdir()</code> for the system temp path.</p>
<pre><code>const fs = require('fs').promises;
const os = require('os');
const path = require('path');

// Create a unique temp directory
const tmpDir = await fs.mkdtemp(
  path.join(os.tmpdir(), 'myapp-')
);
console.log(tmpDir); // /tmp/myapp-AbCdEf

// Write temp file
const tmpFile = path.join(tmpDir, 'data.txt');
await fs.writeFile(tmpFile, 'temporary data');

// Cleanup when done
await fs.rm(tmpDir, { recursive: true, force: true });</code></pre>
<p>Always clean up temporary files when done. Use try/finally or process exit handlers to ensure cleanup happens.</p>`
                }
            ]
        },
        {
            id: "streams-buffers",
            title: "Streams & Buffers",
            icon: "bi-water",
            questions: [
                {
                    q: "What are Streams in Node.js and why are they useful?",
                    a: `<p>Streams are objects that let you read or write data piece by piece (chunks) instead of loading everything into memory at once.</p>
<pre><code>const fs = require('fs');

// Without streams — loads entire file into memory
const data = fs.readFileSync('large-file.txt');

// With streams — processes in chunks
const stream = fs.createReadStream('large-file.txt');
stream.on('data', (chunk) =&gt; console.log(chunk.length));
stream.on('end', () =&gt; console.log('Done'));</code></pre>
<p>Streams are essential for handling large files, network data, and real-time processing without exhausting memory.</p>`
                },
                {
                    q: "What are the four types of streams in Node.js?",
                    a: `<p>Node.js has four fundamental stream types:</p>
<ul>
<li><strong>Readable</strong> — source of data (e.g., <code>fs.createReadStream</code>, <code>http.IncomingMessage</code>)</li>
<li><strong>Writable</strong> — destination for data (e.g., <code>fs.createWriteStream</code>, <code>http.ServerResponse</code>)</li>
<li><strong>Duplex</strong> — both readable and writable (e.g., TCP sockets)</li>
<li><strong>Transform</strong> — duplex stream that modifies data passing through (e.g., <code>zlib.createGzip</code>)</li>
</ul>
<pre><code>const { Transform } = require('stream');
const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});</code></pre>`
                },
                {
                    q: "How does the pipe() method work with streams?",
                    a: `<p><code>pipe()</code> connects a readable stream to a writable stream, handling data flow and backpressure automatically.</p>
<pre><code>const fs = require('fs');
const zlib = require('zlib');

// Simple pipe: read → write
fs.createReadStream('input.txt')
  .pipe(fs.createWriteStream('output.txt'));

// Chained pipes: read → gzip → write
fs.createReadStream('data.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('data.txt.gz'));

// Pipe to HTTP response
app.get('/file', (req, res) =&gt; {
  fs.createReadStream('large.pdf').pipe(res);
});</code></pre>
<p><code>pipe()</code> returns the destination stream, enabling chaining. Use <code>pipeline()</code> from <code>stream</code> module for better error handling.</p>`
                },
                {
                    q: "What is backpressure in streams and how is it handled?",
                    a: `<p>Backpressure occurs when a writable stream cannot process data as fast as the readable stream produces it.</p>
<pre><code>const readable = fs.createReadStream('large-file.txt');
const writable = fs.createWriteStream('output.txt');

readable.on('data', (chunk) =&gt; {
  const canContinue = writable.write(chunk);
  if (!canContinue) {
    readable.pause(); // Stop reading until drain
  }
});

writable.on('drain', () =&gt; {
  readable.resume(); // Resume reading
});</code></pre>
<p>Using <code>pipe()</code> or <code>pipeline()</code> handles backpressure automatically. Manual handling requires listening for <code>drain</code> events.</p>`
                },
                {
                    q: "What is a Buffer in Node.js?",
                    a: `<p>A Buffer is a fixed-size chunk of memory allocated outside the V8 heap, used to handle raw binary data like files, network packets, and images.</p>
<pre><code>// Create buffers
const buf1 = Buffer.from('Hello');
const buf2 = Buffer.alloc(10);          // 10 zero-filled bytes
const buf3 = Buffer.from([72, 101]);    // from byte array

// Read/write
console.log(buf1.toString());           // 'Hello'
console.log(buf1.length);               // 5
console.log(buf1[0]);                   // 72 (ASCII 'H')

// Compare
buf1.equals(Buffer.from('Hello'));      // true</code></pre>
<p>Buffers represent binary data. Convert to strings with <code>.toString(encoding)</code> using encodings like <code>utf8</code>, <code>base64</code>, or <code>hex</code>.</p>`
                },
                {
                    q: "How do you use the pipeline() function for stream error handling?",
                    a: `<p><code>stream.pipeline()</code> connects streams and provides proper error handling and cleanup, unlike <code>pipe()</code>.</p>
<pre><code>const { pipeline } = require('stream/promises');
const fs = require('fs');
const zlib = require('zlib');

// Promise-based pipeline
async function compress(input, output) {
  await pipeline(
    fs.createReadStream(input),
    zlib.createGzip(),
    fs.createWriteStream(output)
  );
  console.log('Compression complete');
}

compress('data.txt', 'data.txt.gz')
  .catch(err =&gt; console.error('Pipeline failed:', err));</code></pre>
<p><code>pipeline()</code> destroys all streams if any stream errors, preventing memory leaks. Always prefer it over <code>.pipe()</code>.</p>`
                },
                {
                    q: "How do you create a custom Readable stream?",
                    a: `<p>Extend the <code>Readable</code> class and implement the <code>_read()</code> method to push data into the stream.</p>
<pre><code>const { Readable } = require('stream');

class Counter extends Readable {
  constructor(max) {
    super();
    this.current = 0;
    this.max = max;
  }
  _read() {
    if (this.current &lt;= this.max) {
      this.push(String(this.current++) + '\\n');
    } else {
      this.push(null); // Signal end of stream
    }
  }
}

const counter = new Counter(5);
counter.pipe(process.stdout); // 0 1 2 3 4 5</code></pre>
<p>Push <code>null</code> to signal the end of the stream. The <code>_read()</code> method is called automatically when the consumer needs more data.</p>`
                },
                {
                    q: "How do you create a Transform stream?",
                    a: `<p>Transform streams modify data as it passes through. Implement the <code>_transform()</code> method to process each chunk.</p>
<pre><code>const { Transform } = require('stream');

class CSVToJSON extends Transform {
  constructor() {
    super({ objectMode: true });
    this.headers = null;
  }
  _transform(chunk, encoding, callback) {
    const line = chunk.toString().trim();
    if (!this.headers) {
      this.headers = line.split(',');
    } else {
      const values = line.split(',');
      const obj = {};
      this.headers.forEach((h, i) =&gt; obj[h] = values[i]);
      this.push(JSON.stringify(obj) + '\\n');
    }
    callback();
  }
}</code></pre>
<p>Use <code>objectMode: true</code> to pass JavaScript objects instead of strings/Buffers between streams.</p>`
                },
                {
                    q: "How do you stream data in an HTTP response?",
                    a: `<p>Pipe a readable stream directly to the HTTP response object to efficiently send large files or generated data.</p>
<pre><code>const fs = require('fs');
const path = require('path');

app.get('/download/:file', (req, res) =&gt; {
  const filePath = path.join(__dirname, 'files', req.params.file);
  const stat = fs.statSync(filePath);

  res.set({
    'Content-Type': 'application/octet-stream',
    'Content-Length': stat.size,
    'Content-Disposition': \`attachment; filename="\${req.params.file}"\`
  });

  fs.createReadStream(filePath).pipe(res);
});

// Stream JSON array
app.get('/users', (req, res) =&gt; {
  const cursor = User.find().cursor();
  cursor.pipe(new JSONArrayTransform()).pipe(res);
});</code></pre>`
                },
                {
                    q: "What is the difference between Buffer.alloc() and Buffer.allocUnsafe()?",
                    a: `<p><code>Buffer.alloc()</code> creates a zero-filled buffer (safe), while <code>Buffer.allocUnsafe()</code> skips initialization for better performance but may contain old memory data.</p>
<pre><code>// Safe — filled with zeros
const safe = Buffer.alloc(10);
console.log(safe); // &lt;Buffer 00 00 00 00 00 00 00 00 00 00&gt;

// Unsafe — may contain old data, faster
const unsafe = Buffer.allocUnsafe(10);
// Must fill before reading to avoid data leaks
unsafe.fill(0);

// From existing data (always safe)
const buf = Buffer.from('Hello World');</code></pre>
<p>Use <code>Buffer.alloc()</code> by default. Only use <code>allocUnsafe()</code> when performance is critical and you immediately overwrite the entire buffer.</p>`
                }
            ]
        },
        {
            id: "authentication-jwt",
            title: "Authentication & JWT",
            icon: "bi-shield-lock",
            questions: [
                {
                    q: "What is JWT and how does it work?",
                    a: `<p>JWT (JSON Web Token) is a compact, self-contained token format used for securely transmitting information between parties as a JSON object.</p>
<pre><code>// JWT structure: header.payload.signature
// eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.signature

const jwt = require('jsonwebtoken');

// Create token
const token = jwt.sign({ userId: 1 }, 'secret', { expiresIn: '1h' });

// Verify token
const decoded = jwt.verify(token, 'secret');
console.log(decoded.userId); // 1</code></pre>
<p>JWTs have three parts: <strong>Header</strong> (algorithm), <strong>Payload</strong> (claims/data), and <strong>Signature</strong> (verification). They are stateless — no server-side session needed.</p>`
                },
                {
                    q: "How do you implement user registration with password hashing?",
                    a: `<p>Use <strong>bcrypt</strong> to hash passwords before storing them. Never store plaintext passwords.</p>
<pre><code>const bcrypt = require('bcrypt');

app.post('/register', async (req, res) =&gt; {
  const { email, password } = req.body;

  // Hash password with salt rounds
  const hashedPassword = await bcrypt.hash(password, 12);

  const user = await User.create({
    email,
    password: hashedPassword
  });

  res.status(201).json({ id: user.id, email: user.email });
});</code></pre>
<p>Use at least 10-12 salt rounds. <strong>bcrypt</strong> generates a unique salt per hash automatically, preventing rainbow table attacks.</p>`
                },
                {
                    q: "How do you implement login and token generation?",
                    a: `<p>Verify user credentials against stored hashed passwords and issue a JWT on successful authentication.</p>
<pre><code>app.post('/login', async (req, res) =&gt; {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign(
    { userId: user.id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );

  res.json({ token, user: { id: user.id, email: user.email } });
});</code></pre>
<p>Store the JWT secret in environment variables. Return the same error for wrong email or password to prevent user enumeration.</p>`
                },
                {
                    q: "How do you create authentication middleware to protect routes?",
                    a: `<p>Create middleware that extracts, verifies the JWT, and attaches the decoded user to the request object.</p>
<pre><code>const authenticate = (req, res, next) =&gt; {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }

  const token = authHeader.split(' ')[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid or expired token' });
  }
};

app.get('/profile', authenticate, (req, res) =&gt; {
  res.json({ userId: req.user.userId });
});</code></pre>`
                },
                {
                    q: "How do you implement role-based access control (RBAC)?",
                    a: `<p>Create middleware that checks user roles after authentication to restrict access to specific endpoints.</p>
<pre><code>const authorize = (...roles) =&gt; {
  return (req, res, next) =&gt; {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
};

// Usage — chain authenticate then authorize
app.delete('/users/:id',
  authenticate,
  authorize('admin'),
  deleteUser
);

app.get('/dashboard',
  authenticate,
  authorize('admin', 'manager'),
  getDashboard
);</code></pre>
<p>Encode the user's role in the JWT payload during login. For complex permissions, use a permissions array or a library like <strong>casl</strong>.</p>`
                },
                {
                    q: "What are refresh tokens and how do you implement them?",
                    a: `<p>Refresh tokens are long-lived tokens used to obtain new access tokens without requiring re-login. They improve security by keeping access token lifetimes short.</p>
<pre><code>app.post('/login', async (req, res) =&gt; {
  // After verifying credentials...
  const accessToken = jwt.sign({ userId }, secret, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ userId }, refreshSecret, { expiresIn: '7d' });

  await saveRefreshToken(userId, refreshToken); // Store in DB
  res.json({ accessToken, refreshToken });
});

app.post('/refresh', async (req, res) =&gt; {
  const { refreshToken } = req.body;
  const decoded = jwt.verify(refreshToken, refreshSecret);
  const stored = await findRefreshToken(decoded.userId, refreshToken);
  if (!stored) return res.status(401).json({ error: 'Invalid refresh token' });

  const newAccessToken = jwt.sign({ userId: decoded.userId }, secret, { expiresIn: '15m' });
  res.json({ accessToken: newAccessToken });
});</code></pre>`
                },
                {
                    q: "How do you implement OAuth 2.0 / social login with Passport.js?",
                    a: `<p><strong>Passport.js</strong> is authentication middleware that supports 500+ strategies including Google, GitHub, and Facebook OAuth.</p>
<pre><code>const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: '/auth/google/callback'
  },
  async (accessToken, refreshToken, profile, done) =&gt; {
    let user = await User.findOne({ googleId: profile.id });
    if (!user) user = await User.create({ googleId: profile.id, name: profile.displayName });
    done(null, user);
  }
));

app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));
app.get('/auth/google/callback', passport.authenticate('google'), (req, res) =&gt; {
  const token = generateJWT(req.user);
  res.redirect(\`/dashboard?token=\${token}\`);
});</code></pre>`
                },
                {
                    q: "How do you securely store and manage JWT secrets?",
                    a: `<p>JWT secrets must be strong, unique, and stored securely — never hardcoded in source code.</p>
<pre><code>// Generate a strong secret
const crypto = require('crypto');
const secret = crypto.randomBytes(64).toString('hex');

// Store in environment variables
// .env file (never commit this)
JWT_SECRET=your_generated_secret_here
JWT_REFRESH_SECRET=another_strong_secret

// Access in code
const token = jwt.sign(payload, process.env.JWT_SECRET);</code></pre>
<ul>
<li>Use different secrets for access and refresh tokens</li>
<li>Rotate secrets periodically with a grace period for old tokens</li>
<li>In production, use a secrets manager (AWS Secrets Manager, Vault)</li>
</ul>`
                },
                {
                    q: "How do you implement logout with JWT?",
                    a: `<p>Since JWTs are stateless, you cannot invalidate them directly. Common approaches include token blacklisting and short expiration times.</p>
<pre><code>// Token blacklist using Redis
const redis = require('redis');
const client = redis.createClient();

app.post('/logout', authenticate, async (req, res) =&gt; {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.decode(token);
  const ttl = decoded.exp - Math.floor(Date.now() / 1000);

  // Blacklist token until it expires
  await client.setEx(\`blacklist:\${token}\`, ttl, 'true');
  res.json({ message: 'Logged out' });
});

// Check blacklist in auth middleware
const isBlacklisted = await client.get(\`blacklist:\${token}\`);
if (isBlacklisted) return res.status(401).json({ error: 'Token revoked' });</code></pre>`
                },
                {
                    q: "What are common JWT security best practices?",
                    a: `<p>Follow these practices to keep JWT-based authentication secure:</p>
<ul>
<li><strong>Short expiration</strong> — access tokens should expire in 15-30 minutes</li>
<li><strong>HTTPS only</strong> — never transmit tokens over unencrypted connections</li>
<li><strong>Strong secrets</strong> — use at least 256-bit random secrets</li>
<li><strong>Validate claims</strong> — always check <code>exp</code>, <code>iss</code>, and <code>aud</code> claims</li>
<li><strong>Minimal payload</strong> — store only essential data (user ID, role), never passwords</li>
<li><strong>Use RS256</strong> — prefer asymmetric signing for distributed systems</li>
</ul>
<pre><code>const token = jwt.sign(payload, secret, {
  expiresIn: '15m',
  issuer: 'myapp.com',
  audience: 'myapp-client'
});</code></pre>`
                }
            ]
        },
        {
            id: "database-integration",
            title: "Database Integration",
            icon: "bi-database",
            questions: [
                {
                    q: "How do you connect to MongoDB from a Node.js application?",
                    a: `<p>Use the official <strong>mongodb</strong> driver or <strong>Mongoose</strong> ODM to connect to MongoDB from Node.js.</p>
<pre><code>const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/mydb', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () =&gt; {
  console.log('Connected to MongoDB');
});

mongoose.connection.on('error', (err) =&gt; {
  console.error('Connection error:', err);
});</code></pre>
<p>Always handle connection errors and use environment variables for the connection string. Never hardcode credentials.</p>`
                },
                {
                    q: "What is a Mongoose schema and model?",
                    a: `<p>A <strong>schema</strong> defines the structure and validation rules for documents. A <strong>model</strong> is a constructor compiled from a schema that provides CRUD methods.</p>
<pre><code>const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age:   { type: Number, min: 0 },
  role:  { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);</code></pre>
<p>Schemas support validators, virtuals, middleware (hooks), and instance/static methods for encapsulating logic.</p>`
                },
                {
                    q: "How do you perform CRUD operations with Mongoose?",
                    a: `<p>Mongoose models provide methods for Create, Read, Update, and Delete operations on MongoDB collections.</p>
<pre><code>// Create
const user = await User.create({ name: 'Alice', email: 'alice@example.com' });

// Read
const all   = await User.find({});
const one   = await User.findById(id);
const query = await User.find({ role: 'admin' }).limit(10);

// Update
await User.findByIdAndUpdate(id, { name: 'Bob' }, { new: true });

// Delete
await User.findByIdAndDelete(id);</code></pre>
<p>Use <code>{ new: true }</code> in update operations to return the modified document instead of the original.</p>`
                },
                {
                    q: "How do you use PostgreSQL with Node.js using the pg library?",
                    a: `<p>The <strong>pg</strong> (node-postgres) library provides a client for connecting to PostgreSQL databases.</p>
<pre><code>const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  user: 'admin',
  password: process.env.DB_PASSWORD
});

const result = await pool.query(
  'SELECT * FROM users WHERE id = $1',
  [userId]
);
console.log(result.rows);</code></pre>
<p>Always use <strong>parameterized queries</strong> (<code>$1</code>, <code>$2</code>) to prevent SQL injection. Never concatenate user input into query strings.</p>`
                },
                {
                    q: "What is Sequelize ORM and how do you define a model?",
                    a: `<p><strong>Sequelize</strong> is a promise-based ORM for SQL databases (PostgreSQL, MySQL, SQLite, MSSQL) that maps tables to JavaScript classes.</p>
<pre><code>const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('mydb', 'user', 'pass', {
  host: 'localhost',
  dialect: 'postgres'
});

const User = sequelize.define('User', {
  name:  { type: DataTypes.STRING, allowNull: false },
  email: { type: DataTypes.STRING, unique: true },
  age:   { type: DataTypes.INTEGER }
});

await sequelize.sync(); // Create tables</code></pre>
<p>Sequelize provides associations (<code>hasMany</code>, <code>belongsTo</code>), migrations, and query builders for complex SQL operations.</p>`
                },
                {
                    q: "What is connection pooling and why is it important?",
                    a: `<p>Connection pooling maintains a cache of database connections that are reused across requests, avoiding the overhead of creating a new connection for every query.</p>
<pre><code>const { Pool } = require('pg');

const pool = new Pool({
  max: 20,              // Maximum connections in pool
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

// Connections are borrowed and returned automatically
const res = await pool.query('SELECT NOW()');

// For transactions, explicitly acquire a client
const client = await pool.connect();
try {
  await client.query('BEGIN');
  // ... queries
  await client.query('COMMIT');
} finally {
  client.release(); // Return to pool
}</code></pre>
<p>Without pooling, each request opens and closes a connection, causing latency spikes under high load.</p>`
                },
                {
                    q: "How does database indexing improve query performance?",
                    a: `<p>Indexes create efficient data structures (B-trees) that allow the database to find rows without scanning the entire table.</p>
<pre><code>// MongoDB — create index with Mongoose
userSchema.index({ email: 1 });           // Single field
userSchema.index({ name: 1, age: -1 });   // Compound index
userSchema.index({ email: 1 }, { unique: true });

// PostgreSQL — create index via SQL
await pool.query('CREATE INDEX idx_users_email ON users (email)');
await pool.query('CREATE UNIQUE INDEX idx_users_username ON users (username)');</code></pre>
<p>Index frequently queried fields and fields used in WHERE, ORDER BY, and JOIN clauses. Over-indexing slows writes.</p>`
                },
                {
                    q: "How do you handle database transactions in Node.js?",
                    a: `<p>Transactions group multiple operations into an atomic unit — all succeed or all roll back.</p>
<pre><code>// PostgreSQL with pg
const client = await pool.connect();
try {
  await client.query('BEGIN');
  await client.query('UPDATE accounts SET balance = balance - $1 WHERE id = $2', [100, fromId]);
  await client.query('UPDATE accounts SET balance = balance + $1 WHERE id = $2', [100, toId]);
  await client.query('COMMIT');
} catch (e) {
  await client.query('ROLLBACK');
  throw e;
} finally {
  client.release();
}

// Mongoose transactions
const session = await mongoose.startSession();
session.startTransaction();
try {
  await Account.updateOne({ _id: fromId }, { $inc: { balance: -100 } }, { session });
  await Account.updateOne({ _id: toId }, { $inc: { balance: 100 } }, { session });
  await session.commitTransaction();
} catch (e) {
  await session.abortTransaction();
  throw e;
}</code></pre>`
                },
                {
                    q: "What are database migrations and how do you manage them?",
                    a: `<p>Migrations are version-controlled scripts that modify the database schema incrementally, allowing teams to track and apply changes consistently.</p>
<pre><code>// Sequelize CLI migration
npx sequelize-cli migration:generate --name add-users-table

// Generated migration file
module.exports = {
  up: async (queryInterface, Sequelize) =&gt; {
    await queryInterface.createTable('Users', {
      id:    { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
      name:  { type: Sequelize.STRING, allowNull: false },
      email: { type: Sequelize.STRING, unique: true }
    });
  },
  down: async (queryInterface) =&gt; {
    await queryInterface.dropTable('Users');
  }
};

// Run migrations
npx sequelize-cli db:migrate</code></pre>
<p>Migrations ensure every environment (dev, staging, production) has the same schema. Never modify a migration that has already been applied.</p>`
                },
                {
                    q: "How do you optimize database queries in Node.js?",
                    a: `<p>Query optimization reduces response times and database load. Apply these strategies:</p>
<pre><code>// 1. Select only needed fields
const users = await User.find({}).select('name email');

// 2. Use pagination
const page = await User.find({})
  .skip((pageNum - 1) * pageSize)
  .limit(pageSize);

// 3. Use lean() for read-only queries (Mongoose)
const docs = await User.find({}).lean(); // Returns plain objects

// 4. Use explain() to analyze query plans
const plan = await User.find({ email: 'a@b.com' }).explain('executionStats');

// 5. Avoid N+1 queries — use populate or JOIN
const orders = await Order.find({}).populate('user');</code></pre>
<p>Always index filtered fields, avoid fetching unnecessary data, and batch operations where possible.</p>`
                }
            ]
        },
        {
            id: "websockets",
            title: "WebSockets",
            icon: "bi-chat-dots",
            questions: [
                {
                    q: "What are WebSockets and how do they differ from HTTP?",
                    a: `<p>WebSockets provide a persistent, full-duplex communication channel over a single TCP connection, unlike HTTP's request-response model.</p>
<pre><code>// HTTP: client sends request → server responds → connection closes
// WebSocket: connection stays open, both sides can send data anytime

// WebSocket handshake starts as HTTP, then upgrades
GET /chat HTTP/1.1
Upgrade: websocket
Connection: Upgrade</code></pre>
<ul>
<li><strong>HTTP</strong> — stateless, half-duplex, new connection per request</li>
<li><strong>WebSocket</strong> — stateful, full-duplex, persistent connection</li>
</ul>
<p>Use WebSockets for real-time features like chat, live feeds, gaming, and collaborative editing.</p>`
                },
                {
                    q: "How do you set up Socket.io in a Node.js application?",
                    a: `<p><strong>Socket.io</strong> is a library that enables real-time, bidirectional communication with automatic fallbacks for older browsers.</p>
<pre><code>// Server
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = new Server(server);

io.on('connection', (socket) =&gt; {
  console.log('User connected:', socket.id);

  socket.on('disconnect', () =&gt; {
    console.log('User disconnected:', socket.id);
  });
});

server.listen(3000);</code></pre>
<pre><code>// Client (HTML)
&lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;
&lt;script&gt;
  const socket = io();
&lt;/script&gt;</code></pre>`
                },
                {
                    q: "How do you emit and listen to events with Socket.io?",
                    a: `<p>Socket.io uses an event-driven model. Use <code>emit()</code> to send events and <code>on()</code> to listen for them.</p>
<pre><code>// Server
io.on('connection', (socket) =&gt; {
  // Listen for client event
  socket.on('chat message', (msg) =&gt; {
    console.log('Received:', msg);
    // Send back to the sender
    socket.emit('chat message', { text: msg, from: 'server' });
  });

  // Send event with acknowledgment
  socket.emit('welcome', 'Hello!', (response) =&gt; {
    console.log('Client acknowledged:', response);
  });
});

// Client
socket.emit('chat message', 'Hi there!');
socket.on('chat message', (data) =&gt; {
  console.log(data.text);
});</code></pre>
<p>Events can carry any serializable data — strings, objects, arrays, and even binary buffers.</p>`
                },
                {
                    q: "What are Socket.io rooms and how do you use them?",
                    a: `<p>Rooms are arbitrary channels that sockets can join and leave. They allow you to broadcast events to a subset of connected clients.</p>
<pre><code>io.on('connection', (socket) =&gt; {
  // Join a room
  socket.on('join room', (roomName) =&gt; {
    socket.join(roomName);
    socket.to(roomName).emit('notification', \`\${socket.id} joined \${roomName}\`);
  });

  // Send message to a room
  socket.on('room message', ({ room, message }) =&gt; {
    io.to(room).emit('room message', { message, from: socket.id });
  });

  // Leave a room
  socket.on('leave room', (roomName) =&gt; {
    socket.leave(roomName);
  });
});</code></pre>
<p>Each socket automatically joins a room identified by its own <code>socket.id</code>. Use rooms for chat channels, game lobbies, or multi-tenant apps.</p>`
                },
                {
                    q: "What are Socket.io namespaces?",
                    a: `<p>Namespaces allow you to split the logic of your application over a single shared connection. Each namespace has its own event handlers and rooms.</p>
<pre><code>// Server — create namespaces
const chatNsp = io.of('/chat');
const adminNsp = io.of('/admin');

chatNsp.on('connection', (socket) =&gt; {
  console.log('Chat user connected');
  socket.on('message', (msg) =&gt; {
    chatNsp.emit('message', msg);
  });
});

adminNsp.on('connection', (socket) =&gt; {
  console.log('Admin connected');
});

// Client — connect to a namespace
const chatSocket  = io('/chat');
const adminSocket = io('/admin');</code></pre>
<p>Namespaces are useful for separating concerns (chat, notifications, admin) while minimizing the number of underlying connections.</p>`
                },
                {
                    q: "How do you broadcast messages to all connected clients?",
                    a: `<p>Broadcasting sends an event to all connected sockets except the sender. Use <code>socket.broadcast.emit()</code> or <code>io.emit()</code> for all clients.</p>
<pre><code>io.on('connection', (socket) =&gt; {
  // To all clients EXCEPT the sender
  socket.broadcast.emit('user joined', socket.id);

  // To ALL clients INCLUDING the sender
  io.emit('active users', io.engine.clientsCount);

  // To all clients in a room EXCEPT the sender
  socket.to('room1').emit('room event', data);

  // To all clients in a room INCLUDING the sender
  io.in('room1').emit('room event', data);
});</code></pre>
<p>Use <code>io.emit()</code> for global announcements and <code>socket.broadcast</code> when the sender should not receive its own event.</p>`
                },
                {
                    q: "How do you handle reconnection in Socket.io?",
                    a: `<p>Socket.io has built-in reconnection logic on the client side. It automatically tries to reconnect with exponential backoff when the connection drops.</p>
<pre><code>// Client-side configuration
const socket = io('http://localhost:3000', {
  reconnection: true,
  reconnectionAttempts: 10,
  reconnectionDelay: 1000,        // Start with 1s
  reconnectionDelayMax: 5000,     // Max 5s between attempts
  timeout: 20000                  // Connection timeout
});

socket.on('connect', ()    =&gt; console.log('Connected'));
socket.on('disconnect', (reason) =&gt; console.log('Disconnected:', reason));
socket.on('reconnect', (attempt) =&gt; console.log('Reconnected after', attempt, 'attempts'));
socket.on('reconnect_error', (err) =&gt; console.log('Reconnection error:', err));</code></pre>
<p>On the server, implement session recovery by storing user state so reconnected clients can resume seamlessly.</p>`
                },
                {
                    q: "How do you scale Socket.io across multiple servers with Redis?",
                    a: `<p>By default, Socket.io only works on a single server. To scale across multiple processes or servers, use the <strong>Redis adapter</strong> to share events.</p>
<pre><code>const { Server } = require('socket.io');
const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

await Promise.all([pubClient.connect(), subClient.connect()]);

const io = new Server(server);
io.adapter(createAdapter(pubClient, subClient));

// Now events are broadcast across all servers via Redis pub/sub</code></pre>
<p>Combine with a load balancer that supports sticky sessions (or use WebSocket-aware routing) so the handshake completes on the same server.</p>`
                },
                {
                    q: "How do you send and receive binary data with WebSockets?",
                    a: `<p>Socket.io supports sending binary data (Buffers, ArrayBuffers, Blobs) alongside or instead of JSON data.</p>
<pre><code>// Server — sending a file as binary
const fs = require('fs');

socket.on('request file', (filename) =&gt; {
  const data = fs.readFileSync(filename);
  socket.emit('file data', { name: filename, buffer: data });
});

// Client — receiving binary
socket.on('file data', ({ name, buffer }) =&gt; {
  const blob = new Blob([buffer]);
  const url  = URL.createObjectURL(blob);
  console.log('Received file:', name, url);
});

// Client — sending binary
const fileInput = document.getElementById('file');
fileInput.addEventListener('change', (e) =&gt; {
  const file = e.target.files[0];
  socket.emit('upload', { name: file.name, data: file });
});</code></pre>`
                },
                {
                    q: "How do you build a basic real-time chat application with Socket.io?",
                    a: `<p>A real-time chat combines Socket.io events with rooms and broadcasting to deliver instant messaging.</p>
<pre><code>// Server
io.on('connection', (socket) =&gt; {
  socket.on('join', (username) =&gt; {
    socket.username = username;
    socket.join('general');
    socket.to('general').emit('system', \`\${username} joined the chat\`);
  });

  socket.on('chat message', (msg) =&gt; {
    io.to('general').emit('chat message', {
      user: socket.username,
      text: msg,
      time: new Date().toISOString()
    });
  });

  socket.on('typing', () =&gt; {
    socket.to('general').emit('typing', socket.username);
  });

  socket.on('disconnect', () =&gt; {
    io.to('general').emit('system', \`\${socket.username} left the chat\`);
  });
});</code></pre>
<p>On the client, listen for <code>chat message</code> events and append them to the UI. Use <code>typing</code> events to show indicator feedback.</p>`
                }
            ]
        },
        {
            id: "cluster-worker-threads",
            title: "Cluster & Workers",
            icon: "bi-cpu-fill",
            questions: [
                {
                    q: "What is the cluster module in Node.js?",
                    a: `<p>The <strong>cluster</strong> module allows you to create child processes (workers) that share the same server port, enabling multi-core utilization.</p>
<pre><code>const cluster = require('cluster');
const os = require('os');
const http = require('http');

if (cluster.isPrimary) {
  const cpus = os.cpus().length;
  console.log(\`Primary \${process.pid} forking \${cpus} workers\`);
  for (let i = 0; i &lt; cpus; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) =&gt; {
    console.log(\`Worker \${worker.process.pid} died, restarting...\`);
    cluster.fork();
  });
} else {
  http.createServer((req, res) =&gt; {
    res.end(\`Handled by worker \${process.pid}\`);
  }).listen(3000);
}</code></pre>
<p>Each worker runs in its own process with its own V8 instance and memory, providing true parallelism on multi-core systems.</p>`
                },
                {
                    q: "What are worker_threads and when should you use them?",
                    a: `<p><strong>worker_threads</strong> allow you to run JavaScript in parallel threads within a single process, sharing memory when needed.</p>
<pre><code>// main.js
const { Worker } = require('worker_threads');

const worker = new Worker('./heavy-task.js', {
  workerData: { iterations: 1e8 }
});

worker.on('message', (result) =&gt; {
  console.log('Result:', result);
});

worker.on('error', (err) =&gt; console.error(err));
worker.on('exit', (code) =&gt; console.log('Exited with code:', code));

// heavy-task.js
const { workerData, parentPort } = require('worker_threads');
let sum = 0;
for (let i = 0; i &lt; workerData.iterations; i++) sum += i;
parentPort.postMessage(sum);</code></pre>
<p>Use worker threads for CPU-intensive tasks (image processing, crypto, parsing) that would block the event loop.</p>`
                },
                {
                    q: "What is the difference between fork and spawn in child_process?",
                    a: `<p><code>spawn()</code> launches a new process with a given command, while <code>fork()</code> is a special case of <code>spawn()</code> that creates a new Node.js process with a built-in IPC channel.</p>
<pre><code>const { spawn, fork } = require('child_process');

// spawn — run any command
const ls = spawn('ls', ['-la']);
ls.stdout.on('data', (data) =&gt; console.log(data.toString()));

// fork — run a Node.js script with IPC
const child = fork('./worker.js');
child.send({ task: 'compute' });
child.on('message', (result) =&gt; {
  console.log('Worker result:', result);
});</code></pre>
<ul>
<li><strong>spawn</strong> — streams I/O, for any command, no IPC by default</li>
<li><strong>fork</strong> — Node.js only, built-in IPC, higher memory overhead</li>
</ul>`
                },
                {
                    q: "How does inter-process communication (IPC) work in Node.js?",
                    a: `<p>IPC allows the primary process and child/worker processes to exchange messages using <code>send()</code> and the <code>message</code> event.</p>
<pre><code>// primary.js
const { fork } = require('child_process');
const child = fork('./child.js');

child.send({ type: 'START', data: [1, 2, 3] });

child.on('message', (msg) =&gt; {
  console.log('From child:', msg);
});

// child.js
process.on('message', (msg) =&gt; {
  if (msg.type === 'START') {
    const result = msg.data.reduce((a, b) =&gt; a + b, 0);
    process.send({ type: 'RESULT', value: result });
  }
});</code></pre>
<p>IPC messages are serialized with structured clone, so you can send objects, arrays, and typed arrays but not functions or class instances.</p>`
                },
                {
                    q: "How does load balancing work with the cluster module?",
                    a: `<p>Node.js cluster uses a <strong>round-robin</strong> approach (default on all platforms except Windows) where the primary process accepts connections and distributes them to workers evenly.</p>
<pre><code>const cluster = require('cluster');
const os = require('os');

if (cluster.isPrimary) {
  // Round-robin scheduling (default)
  cluster.schedulingPolicy = cluster.SCHED_RR;

  for (let i = 0; i &lt; os.cpus().length; i++) {
    cluster.fork();
  }

  // Monitor worker health
  setInterval(() =&gt; {
    for (const id in cluster.workers) {
      cluster.workers[id].send('health-check');
    }
  }, 30000);
} else {
  require('./server'); // Each worker runs the server
}</code></pre>
<p>On Windows, the OS handles distribution. You can also use an external load balancer like Nginx for more control.</p>`
                },
                {
                    q: "What is SharedArrayBuffer and how is it used with worker threads?",
                    a: `<p><strong>SharedArrayBuffer</strong> allows multiple threads to read and write the same memory, enabling efficient data sharing without copying.</p>
<pre><code>// main.js
const { Worker } = require('worker_threads');

const shared = new SharedArrayBuffer(4); // 4 bytes
const arr = new Int32Array(shared);
arr[0] = 0;

const worker = new Worker('./worker.js', {
  workerData: { shared }
});

worker.on('exit', () =&gt; {
  console.log('Counter:', arr[0]); // Modified by worker
});

// worker.js
const { workerData } = require('worker_threads');
const arr = new Int32Array(workerData.shared);
Atomics.add(arr, 0, 100); // Thread-safe increment</code></pre>
<p>Use <code>Atomics</code> methods for thread-safe operations. Without atomics, concurrent writes cause race conditions.</p>`
                },
                {
                    q: "What is PM2 and how does it help manage Node.js processes?",
                    a: `<p><strong>PM2</strong> is a production process manager for Node.js that provides clustering, monitoring, log management, and automatic restarts.</p>
<pre><code># Start with cluster mode (all CPU cores)
pm2 start app.js -i max

# Common commands
pm2 list                  # List all processes
pm2 logs                  # View logs
pm2 monit                 # Real-time monitoring
pm2 restart app           # Restart app
pm2 reload app            # Zero-downtime reload
pm2 stop app              # Stop app
pm2 delete app            # Remove from PM2

# Ecosystem file (ecosystem.config.js)
module.exports = {
  apps: [{
    name: 'my-app',
    script: 'app.js',
    instances: 'max',
    exec_mode: 'cluster',
    env: { NODE_ENV: 'production' }
  }]
};</code></pre>
<p>PM2 auto-restarts crashed processes and can be configured to start on system boot with <code>pm2 startup</code>.</p>`
                },
                {
                    q: "What is the difference between child_process exec and spawn?",
                    a: `<p><code>exec()</code> buffers the entire output and returns it in a callback, while <code>spawn()</code> streams output in real-time via events.</p>
<pre><code>const { exec, spawn } = require('child_process');

// exec — buffers output, good for small results
exec('ls -la', (error, stdout, stderr) =&gt; {
  if (error) throw error;
  console.log(stdout);
});

// spawn — streams output, good for large data or long-running
const child = spawn('find', ['.', '-name', '*.js']);
child.stdout.on('data', (data) =&gt; {
  console.log('Found:', data.toString());
});
child.on('close', (code) =&gt; {
  console.log('Exited with code:', code);
});</code></pre>
<ul>
<li><strong>exec</strong> — spawns a shell, has a max buffer size (default ~1MB)</li>
<li><strong>spawn</strong> — no shell by default, no buffer limit, more efficient for large outputs</li>
</ul>`
                },
                {
                    q: "How does the libuv thread pool size affect Node.js performance?",
                    a: `<p>The libuv thread pool handles file system operations, DNS lookups (<code>dns.lookup</code>), and crypto. Its default size is 4 threads.</p>
<pre><code>// Check default pool size
console.log('Default pool size: 4');

// Increase pool size via environment variable
// Set BEFORE requiring any modules
process.env.UV_THREADPOOL_SIZE = 16;

// Or set when starting the process
// UV_THREADPOOL_SIZE=16 node app.js

const crypto = require('crypto');

// Each pbkdf2 call uses a thread pool thread
for (let i = 0; i &lt; 8; i++) {
  crypto.pbkdf2('password', 'salt', 100000, 64, 'sha512', () =&gt; {
    console.log(\`Hash \${i} complete\`);
  });
}</code></pre>
<p>If your app performs many concurrent I/O or crypto operations, increase the pool size (max 1024). Too many threads waste memory; profile to find the sweet spot.</p>`
                },
                {
                    q: "How do you implement horizontal scaling for a Node.js application?",
                    a: `<p>Horizontal scaling runs multiple instances of your app across processes or servers, distributing load with a reverse proxy or load balancer.</p>
<pre><code>// 1. Cluster module — multi-process on one server
const cluster = require('cluster');
if (cluster.isPrimary) {
  for (let i = 0; i &lt; 4; i++) cluster.fork();
}

// 2. PM2 cluster mode
// pm2 start app.js -i max

// 3. Nginx load balancer (nginx.conf)
upstream node_app {
    server 127.0.0.1:3001;
    server 127.0.0.1:3002;
    server 127.0.0.1:3003;
}
server {
    listen 80;
    location / {
        proxy_pass http://node_app;
    }
}

// 4. Docker + orchestration
// docker-compose scale app=4</code></pre>
<p>Ensure your app is <strong>stateless</strong> — store sessions in Redis, not in memory — so any instance can handle any request.</p>`
                }
            ]
        },
        {
            id: "npm-package-management",
            title: "NPM & Packages",
            icon: "bi-box-seam",
            questions: [
                {
                    q: "What are the important fields in package.json?",
                    a: `<p><code>package.json</code> contains metadata and configuration for your Node.js project. Key fields include:</p>
<pre><code>{
  "name": "my-app",
  "version": "1.0.0",
  "description": "A sample Node.js app",
  "main": "index.js",
  "scripts": {
    "start": "node index.js",
    "dev": "nodemon index.js",
    "test": "jest"
  },
  "keywords": ["node", "api"],
  "author": "John Doe",
  "license": "MIT",
  "engines": { "node": "&gt;=18.0.0" },
  "repository": { "type": "git", "url": "https://github.com/user/repo" }
}</code></pre>
<p><code>name</code> and <code>version</code> are required. <code>main</code> defines the entry point, and <code>scripts</code> define runnable commands via <code>npm run</code>.</p>`
                },
                {
                    q: "What is the difference between dependencies and devDependencies?",
                    a: `<p><code>dependencies</code> are packages required at runtime, while <code>devDependencies</code> are only needed during development.</p>
<pre><code>// Add a runtime dependency
npm install express

// Add a dev-only dependency
npm install --save-dev jest eslint

// package.json
{
  "dependencies": {
    "express": "^4.18.2"
  },
  "devDependencies": {
    "jest": "^29.7.0",
    "eslint": "^8.50.0"
  }
}</code></pre>
<p>In production, run <code>npm install --production</code> or set <code>NODE_ENV=production</code> to skip devDependencies and reduce the install footprint.</p>`
                },
                {
                    q: "How does semantic versioning (semver) work in npm?",
                    a: `<p>Semver uses a <strong>MAJOR.MINOR.PATCH</strong> format. npm uses range specifiers to control which versions are acceptable.</p>
<pre><code>// MAJOR — breaking changes
// MINOR — new features, backward-compatible
// PATCH — bug fixes, backward-compatible

// Range specifiers in package.json
"express": "4.18.2"    // Exact version only
"express": "^4.18.2"   // &gt;=4.18.2 &lt;5.0.0  (caret — default)
"express": "~4.18.2"   // &gt;=4.18.2 &lt;4.19.0 (tilde — patch only)
"express": "&gt;=4.0.0"   // Any version 4 or above
"express": "*"          // Any version</code></pre>
<p>The caret (<code>^</code>) is the default and allows minor and patch updates. Use tilde (<code>~</code>) for more conservative patch-only updates.</p>`
                },
                {
                    q: "What is package-lock.json and why is it important?",
                    a: `<p><code>package-lock.json</code> records the exact version of every installed dependency and its sub-dependencies, ensuring deterministic installs.</p>
<pre><code>// package.json — specifies a range
"lodash": "^4.17.0"

// package-lock.json — locks exact version + integrity hash
"lodash": {
  "version": "4.17.21",
  "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
  "integrity": "sha512-..."
}</code></pre>
<ul>
<li>Always commit <code>package-lock.json</code> to version control</li>
<li>Use <code>npm ci</code> in CI/CD for clean, reproducible installs</li>
<li>Never manually edit the lock file</li>
</ul>
<p>Without it, different machines may install different versions, leading to hard-to-debug inconsistencies.</p>`
                },
                {
                    q: "What is npx and how does it differ from npm?",
                    a: `<p><strong>npx</strong> executes npm packages without installing them globally. It comes bundled with npm 5.2+.</p>
<pre><code>// Run a package without installing
npx create-react-app my-app
npx cowsay "Hello!"

// Run a specific version
npx node@18 --version

// Run a locally installed binary
npx jest --watch
// equivalent to: ./node_modules/.bin/jest --watch

// Compare with npm
npm install -g create-react-app  // Installs globally
create-react-app my-app          // Then run</code></pre>
<p><code>npx</code> checks local <code>node_modules/.bin</code> first, then downloads temporarily if not found. Great for one-off commands and project scaffolding.</p>`
                },
                {
                    q: "How do you create and use npm scripts?",
                    a: `<p>npm scripts are defined in <code>package.json</code> and run via <code>npm run &lt;script&gt;</code>. Special scripts like <code>start</code> and <code>test</code> omit <code>run</code>.</p>
<pre><code>{
  "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js",
    "build": "tsc",
    "test": "jest --coverage",
    "lint": "eslint src/",
    "prestart": "npm run build",
    "posttest": "npm run lint"
  }
}

// Run scripts
npm start              // Special — no 'run' needed
npm test               // Special — no 'run' needed
npm run dev            // Custom scripts need 'run'
npm run build</code></pre>
<p><code>pre</code> and <code>post</code> hooks run automatically before and after their corresponding script. Use <code>&amp;&amp;</code> to chain commands.</p>`
                },
                {
                    q: "How do you use npm audit to find and fix vulnerabilities?",
                    a: `<p><code>npm audit</code> scans your dependency tree for known security vulnerabilities and suggests fixes.</p>
<pre><code># Check for vulnerabilities
npm audit

# Output shows:
# Severity: low, moderate, high, critical
# Package, dependency path, and advisory details

# Automatically fix compatible vulnerabilities
npm audit fix

# Force fix (may include breaking changes)
npm audit fix --force

# Get a JSON report
npm audit --json

# Only show high/critical
npm audit --audit-level=high</code></pre>
<p>Run <code>npm audit</code> regularly and in CI pipelines. Address critical and high vulnerabilities immediately. Use <code>npm audit signatures</code> to verify package provenance.</p>`
                },
                {
                    q: "How do you publish your own npm package?",
                    a: `<p>Create an account on npmjs.com, prepare your package, and publish it to the registry.</p>
<pre><code># 1. Login to npm
npm login

# 2. Initialize package
npm init
# Set name, version, description, main, etc.

# 3. Add a .npmignore or use "files" in package.json
{
  "files": ["dist/", "README.md"]
}

# 4. Publish
npm publish

# 5. Publish scoped package (e.g., @myorg/mypackage)
npm publish --access public

# 6. Update version and republish
npm version patch   # 1.0.0 → 1.0.1
npm version minor   # 1.0.0 → 1.1.0
npm version major   # 1.0.0 → 2.0.0
npm publish</code></pre>
<p>Test locally with <code>npm link</code> before publishing. Use <code>npm pack</code> to preview the package contents.</p>`
                },
                {
                    q: "What are npm workspaces and how do you use them?",
                    a: `<p>Workspaces allow you to manage multiple packages within a single repository (monorepo), sharing dependencies and enabling cross-references.</p>
<pre><code>// Root package.json
{
  "name": "my-monorepo",
  "workspaces": ["packages/*"]
}

// Directory structure
my-monorepo/
├── package.json
├── packages/
│   ├── shared/
│   │   └── package.json   // { "name": "@my/shared" }
│   ├── api/
│   │   └── package.json   // depends on "@my/shared"
│   └── web/
│       └── package.json

// Install all workspace dependencies
npm install

// Run script in a specific workspace
npm run build -w packages/api

// Add a dependency to a workspace
npm install lodash -w packages/shared</code></pre>
<p>Workspaces hoist shared dependencies to the root <code>node_modules</code>, reducing duplication and disk usage.</p>`
                },
                {
                    q: "What are peerDependencies and when should you use them?",
                    a: `<p><strong>peerDependencies</strong> specify packages that your library expects to be installed by the consuming project, avoiding duplicate versions.</p>
<pre><code>// A React component library's package.json
{
  "name": "my-react-components",
  "peerDependencies": {
    "react": "^17.0.0 || ^18.0.0",
    "react-dom": "^17.0.0 || ^18.0.0"
  },
  "devDependencies": {
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  }
}</code></pre>
<ul>
<li>Use peerDependencies for <strong>plugins</strong> or <strong>libraries</strong> that integrate with a host package</li>
<li>The host project must install the peer dependency itself</li>
<li>npm 7+ auto-installs peer dependencies; npm 3-6 only warned</li>
</ul>
<p>Common examples: React components need <code>react</code>, Babel plugins need <code>@babel/core</code>, Express middleware needs <code>express</code>.</p>`
                }
            ]
        },
        {
            id: "security",
            title: "Security",
            icon: "bi-lock",
            questions: [
                {
                    q: "How do you prevent Cross-Site Scripting (XSS) attacks in Node.js?",
                    a: `<p>XSS attacks inject malicious scripts into web pages viewed by other users. Prevent them by sanitizing output and setting proper headers.</p>
<pre><code>const express = require('express');
const xss = require('xss');
const helmet = require('helmet');

const app = express();
app.use(helmet()); // Sets security headers including CSP

// Sanitize user input before rendering
app.post('/comment', (req, res) =&gt; {
  const safeComment = xss(req.body.comment);
  // Store safeComment, not raw input
});

// In templates — always escape output
// EJS: &lt;%= userInput %&gt; (escaped)
// NEVER: &lt;%- userInput %&gt; (unescaped) with untrusted data</code></pre>
<p>Use Content-Security-Policy headers, escape all dynamic content, and never insert untrusted data into HTML without sanitization.</p>`
                },
                {
                    q: "What are CSRF tokens and how do you implement them?",
                    a: `<p>CSRF (Cross-Site Request Forgery) tricks users into making unintended requests. CSRF tokens ensure requests originate from your own site.</p>
<pre><code>const express = require('express');
const crypto = require('crypto');

// Generate CSRF token
function generateToken() {
  return crypto.randomBytes(32).toString('hex');
}

// Middleware to set and validate CSRF token
app.use((req, res, next) =&gt; {
  if (req.method === 'GET') {
    req.session.csrfToken = generateToken();
    res.locals.csrfToken = req.session.csrfToken;
  } else {
    const token = req.body._csrf || req.headers['x-csrf-token'];
    if (token !== req.session.csrfToken) {
      return res.status(403).json({ error: 'Invalid CSRF token' });
    }
  }
  next();
});

// In forms: &lt;input type="hidden" name="_csrf" value="&lt;%= csrfToken %&gt;"&gt;</code></pre>
<p>Also use <code>SameSite</code> cookie attribute and check the <code>Origin</code>/<code>Referer</code> headers for additional protection.</p>`
                },
                {
                    q: "How do you prevent SQL injection in Node.js?",
                    a: `<p>SQL injection occurs when user input is concatenated directly into SQL queries. Always use <strong>parameterized queries</strong> or an ORM.</p>
<pre><code>const { Pool } = require('pg');
const pool = new Pool();

// BAD — vulnerable to SQL injection
const bad = \`SELECT * FROM users WHERE name = '\${userInput}'\`;

// GOOD — parameterized query
const result = await pool.query(
  'SELECT * FROM users WHERE name = $1 AND age = $2',
  [userName, userAge]
);

// GOOD — using Sequelize ORM
const user = await User.findOne({
  where: { name: userName }  // Automatically parameterized
});

// GOOD — Mongoose (NoSQL) with schema validation
const user = await User.findOne({ email: req.body.email });</code></pre>
<p>Never build queries with string concatenation or template literals using user input. Use prepared statements or ORM query builders.</p>`
                },
                {
                    q: "What is helmet.js and what security headers does it set?",
                    a: `<p><strong>helmet.js</strong> is an Express middleware that sets various HTTP security headers to protect against common web vulnerabilities.</p>
<pre><code>const helmet = require('helmet');
app.use(helmet());

// Helmet sets these headers by default:
// Content-Security-Policy — controls resource loading
// X-Content-Type-Options: nosniff — prevents MIME sniffing
// X-Frame-Options: SAMEORIGIN — prevents clickjacking
// X-XSS-Protection: 0 — disables buggy browser XSS filter
// Strict-Transport-Security — enforces HTTPS
// X-DNS-Prefetch-Control — controls DNS prefetching
// X-Permitted-Cross-Domain-Policies — restricts Adobe Flash/PDF

// Customize specific headers
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "trusted-cdn.com"]
    }
  },
  frameguard: { action: 'deny' }
}));</code></pre>
<p>Always use helmet in production. It is a simple one-line addition that significantly improves your application's security posture.</p>`
                },
                {
                    q: "How do you implement rate limiting in a Node.js API?",
                    a: `<p>Rate limiting restricts the number of requests a client can make in a time window, protecting against brute-force attacks and abuse.</p>
<pre><code>const rateLimit = require('express-rate-limit');

// General API rate limiter
const apiLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,  // 15 minutes
  max: 100,                   // 100 requests per window
  message: { error: 'Too many requests, try again later' },
  standardHeaders: true,
  legacyHeaders: false
});
app.use('/api/', apiLimiter);

// Stricter limiter for auth routes
const authLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: { error: 'Too many login attempts' }
});
app.use('/api/login', authLimiter);</code></pre>
<p>In production, use a Redis-based store (<code>rate-limit-redis</code>) so limits are shared across multiple server instances.</p>`
                },
                {
                    q: "How do you sanitize user input in Node.js?",
                    a: `<p>Input sanitization removes or escapes dangerous characters from user-provided data to prevent injection attacks.</p>
<pre><code>const { body, validationResult } = require('express-validator');

app.post('/register',
  body('email').isEmail().normalizeEmail(),
  body('name').trim().escape().isLength({ min: 2, max: 50 }),
  body('age').isInt({ min: 0, max: 150 }),
  body('website').optional().isURL(),
  (req, res) =&gt; {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // Input is now validated and sanitized
  }
);

// For MongoDB — sanitize to prevent NoSQL injection
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize()); // Removes $ and . from req.body/query</code></pre>
<p>Always validate on the server side even if client-side validation exists. Never trust user input.</p>`
                },
                {
                    q: "How do you set up HTTPS and TLS in a Node.js application?",
                    a: `<p>HTTPS encrypts data in transit using TLS certificates. You can use Node's built-in <code>https</code> module or terminate TLS at a reverse proxy.</p>
<pre><code>const https = require('https');
const fs = require('fs');
const express = require('express');

const app = express();

const options = {
  key:  fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
  ca:   fs.readFileSync('ca-cert.pem') // Optional CA chain
};

https.createServer(options, app).listen(443, () =&gt; {
  console.log('HTTPS server running on port 443');
});

// Redirect HTTP to HTTPS
const http = require('http');
http.createServer((req, res) =&gt; {
  res.writeHead(301, { Location: \`https://\${req.headers.host}\${req.url}\` });
  res.end();
}).listen(80);</code></pre>
<p>In production, terminate TLS at Nginx or a cloud load balancer for better performance. Use Let's Encrypt for free certificates.</p>`
                },
                {
                    q: "How do you configure CORS in an Express application?",
                    a: `<p>CORS (Cross-Origin Resource Sharing) controls which domains can access your API. Configure it with the <code>cors</code> middleware.</p>
<pre><code>const cors = require('cors');

// Allow all origins (development only)
app.use(cors());

// Allow specific origins (production)
const corsOptions = {
  origin: ['https://myapp.com', 'https://admin.myapp.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,   // Allow cookies
  maxAge: 86400         // Cache preflight for 24 hours
};
app.use(cors(corsOptions));

// Per-route CORS
app.get('/api/public', cors(), (req, res) =&gt; {
  res.json({ data: 'accessible from anywhere' });
});</code></pre>
<p>Never use <code>origin: '*'</code> with <code>credentials: true</code>. Always whitelist trusted origins in production.</p>`
                },
                {
                    q: "How should you manage environment variables and secrets?",
                    a: `<p>Store sensitive data (API keys, database passwords, tokens) in environment variables, never in source code.</p>
<pre><code>// .env file (add to .gitignore!)
DATABASE_URL=mongodb://localhost:27017/mydb
JWT_SECRET=your-256-bit-secret
API_KEY=sk-abc123

// Load with dotenv
require('dotenv').config();

const dbUrl  = process.env.DATABASE_URL;
const secret = process.env.JWT_SECRET;

// Validate required env vars at startup
const required = ['DATABASE_URL', 'JWT_SECRET', 'API_KEY'];
for (const key of required) {
  if (!process.env[key]) {
    console.error(\`Missing required env var: \${key}\`);
    process.exit(1);
  }
}</code></pre>
<ul>
<li>Never commit <code>.env</code> files to version control</li>
<li>Use different secrets per environment (dev, staging, production)</li>
<li>In production, use a secrets manager (AWS Secrets Manager, Vault)</li>
</ul>`
                },
                {
                    q: "How do you handle dependency vulnerabilities in Node.js?",
                    a: `<p>Regularly audit and update dependencies to patch known security vulnerabilities.</p>
<pre><code># Check for vulnerabilities
npm audit

# Fix automatically (compatible updates)
npm audit fix

# Check for outdated packages
npm outdated

# Update packages
npm update

# Update a specific package to latest
npm install lodash@latest

# Use Snyk for deeper analysis
npx snyk test
npx snyk monitor</code></pre>
<ul>
<li>Run <code>npm audit</code> in CI/CD pipelines and fail on high/critical</li>
<li>Use tools like <strong>Dependabot</strong>, <strong>Snyk</strong>, or <strong>Renovate</strong> for automated PRs</li>
<li>Pin exact versions in production with <code>npm ci</code> and <code>package-lock.json</code></li>
<li>Avoid packages with no maintenance or very few downloads</li>
</ul>
<p>Security is an ongoing process. Schedule regular dependency reviews and subscribe to security advisories.</p>`
                }
            ]
        },
        {
            id: "caching",
            title: "Caching",
            icon: "bi-lightning",
            questions: [
                {
                    q: "What is Redis and how do you use it with Node.js?",
                    a: `<p><strong>Redis</strong> is an in-memory data store used as a cache, message broker, and session store. Use the <code>redis</code> package to connect from Node.js.</p>
<pre><code>const { createClient } = require('redis');

const client = createClient({ url: 'redis://localhost:6379' });
client.on('error', (err) =&gt; console.error('Redis error:', err));

await client.connect();

// Store and retrieve data
await client.set('name', 'Alice');
const name = await client.get('name');
console.log(name); // 'Alice'

// Store JSON
await client.set('user:1', JSON.stringify({ name: 'Alice', age: 30 }));
const user = JSON.parse(await client.get('user:1'));</code></pre>
<p>Redis is extremely fast (sub-millisecond reads) because all data is stored in memory. Use it to reduce database load and speed up responses.</p>`
                },
                {
                    q: "How do you use Redis GET, SET, and DEL commands in Node.js?",
                    a: `<p>These are the fundamental Redis commands for storing, retrieving, and removing key-value data.</p>
<pre><code>const { createClient } = require('redis');
const client = createClient();
await client.connect();

// SET — store a value
await client.set('counter', '0');
await client.set('greeting', 'Hello World');

// GET — retrieve a value
const val = await client.get('counter'); // '0'

// DEL — delete one or more keys
await client.del('counter');
await client.del(['key1', 'key2', 'key3']);

// INCR/DECR — atomic increment/decrement
await client.set('visits', '0');
await client.incr('visits');  // 1
await client.incrBy('visits', 5); // 6

// EXISTS — check if key exists
const exists = await client.exists('greeting'); // 1 or 0

// KEYS — find matching keys (avoid in production)
const keys = await client.keys('user:*');</code></pre>`
                },
                {
                    q: "How do you set TTL (time to live) for cache expiry in Redis?",
                    a: `<p>TTL automatically deletes keys after a specified duration, preventing stale data and managing memory.</p>
<pre><code>const client = createClient();
await client.connect();

// Set with expiry in seconds
await client.setEx('session:abc', 3600, 'user-data'); // Expires in 1 hour

// Set with expiry in milliseconds
await client.pSetEx('temp', 5000, 'short-lived'); // 5 seconds

// Set expiry on existing key
await client.set('token', 'abc123');
await client.expire('token', 900); // 15 minutes

// Check remaining TTL
const ttl = await client.ttl('session:abc'); // Seconds remaining
const pttl = await client.pTTL('session:abc'); // Milliseconds remaining

// Remove expiry (make persistent)
await client.persist('token');

// SET with NX (only if not exists) + EX (expiry)
await client.set('lock:resource', 'owner', {
  NX: true,   // Only set if key doesn't exist
  EX: 30      // Expire in 30 seconds
});</code></pre>`
                },
                {
                    q: "What is the cache-aside pattern and how do you implement it?",
                    a: `<p>The <strong>cache-aside</strong> (lazy-loading) pattern checks the cache first; on a miss, it loads from the database and stores the result in the cache.</p>
<pre><code>async function getUser(userId) {
  const cacheKey = \`user:\${userId}\`;

  // 1. Check cache first
  const cached = await redisClient.get(cacheKey);
  if (cached) {
    console.log('Cache hit');
    return JSON.parse(cached);
  }

  // 2. Cache miss — fetch from database
  console.log('Cache miss');
  const user = await db.query('SELECT * FROM users WHERE id = $1', [userId]);

  // 3. Store in cache with TTL
  await redisClient.setEx(cacheKey, 3600, JSON.stringify(user.rows[0]));

  return user.rows[0];
}

// Invalidate cache on update
async function updateUser(userId, data) {
  await db.query('UPDATE users SET name = $1 WHERE id = $2', [data.name, userId]);
  await redisClient.del(\`user:\${userId}\`); // Invalidate cache
}</code></pre>
<p>This pattern is simple and works well for read-heavy workloads. Data can become stale until the TTL expires or the cache is explicitly invalidated.</p>`
                },
                {
                    q: "How do HTTP Cache-Control headers work in Node.js?",
                    a: `<p><code>Cache-Control</code> headers tell browsers and CDNs how to cache HTTP responses, reducing server load and improving latency.</p>
<pre><code>const express = require('express');
const app = express();

// Static assets — cache for 1 year
app.use('/static', express.static('public', {
  maxAge: '1y',
  immutable: true
}));

// API response — no cache
app.get('/api/user', (req, res) =&gt; {
  res.set('Cache-Control', 'no-store');
  res.json(userData);
});

// API response — cache for 5 minutes, revalidate
app.get('/api/products', (req, res) =&gt; {
  res.set('Cache-Control', 'public, max-age=300, must-revalidate');
  res.json(products);
});

// Private data — only browser cache, not CDN
app.get('/api/profile', (req, res) =&gt; {
  res.set('Cache-Control', 'private, max-age=60');
  res.json(profile);
});</code></pre>
<p>Use <code>public</code> for CDN-cacheable content, <code>private</code> for user-specific data, and <code>no-store</code> for sensitive data.</p>`
                },
                {
                    q: "What is an ETag and how does it enable conditional requests?",
                    a: `<p>An <strong>ETag</strong> (Entity Tag) is a hash of the response content. The client sends it back on subsequent requests to check if the data has changed.</p>
<pre><code>const crypto = require('crypto');

app.get('/api/data', (req, res) =&gt; {
  const data = JSON.stringify(getLatestData());
  const etag = crypto.createHash('md5').update(data).digest('hex');

  // Check if client's cached version matches
  if (req.headers['if-none-match'] === etag) {
    return res.status(304).end(); // Not Modified
  }

  res.set('ETag', etag);
  res.set('Cache-Control', 'public, max-age=0, must-revalidate');
  res.json(JSON.parse(data));
});

// Express has built-in ETag support
app.set('etag', 'strong'); // or 'weak'</code></pre>
<p>ETags save bandwidth by returning 304 (Not Modified) when content hasn't changed, avoiding resending the full response body.</p>`
                },
                {
                    q: "What is the difference between write-through and write-behind caching?",
                    a: `<p>Both strategies keep the cache in sync with the database on writes but differ in <strong>when</strong> the database is updated.</p>
<pre><code>// WRITE-THROUGH: write to cache AND database simultaneously
async function writeThrough(key, value) {
  // Both happen before returning
  await db.query('UPDATE items SET data = $1 WHERE key = $2', [value, key]);
  await redisClient.set(key, JSON.stringify(value));
  // Consistent but slower writes
}

// WRITE-BEHIND (write-back): write to cache, async update DB later
async function writeBehind(key, value) {
  await redisClient.set(key, JSON.stringify(value));
  // Queue database update for later
  await messageQueue.send('db-sync', { key, value });
  // Faster writes but risk of data loss
}</code></pre>
<ul>
<li><strong>Write-through</strong> — consistent, higher write latency</li>
<li><strong>Write-behind</strong> — fast writes, risk of data loss if cache fails before DB sync</li>
</ul>`
                },
                {
                    q: "How do you use Redis as a session store in Express?",
                    a: `<p>Storing sessions in Redis allows them to persist across server restarts and be shared across multiple instances.</p>
<pre><code>const session = require('express-session');
const RedisStore = require('connect-redis').default;
const { createClient } = require('redis');

const redisClient = createClient({ url: 'redis://localhost:6379' });
await redisClient.connect();

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: true,      // HTTPS only
    httpOnly: true,     // No JS access
    maxAge: 86400000,   // 24 hours
    sameSite: 'strict'
  }
}));

// Use sessions
app.post('/login', (req, res) =&gt; {
  req.session.userId = user.id;
  res.json({ message: 'Logged in' });
});</code></pre>
<p>Redis-backed sessions scale across multiple servers and survive process restarts, unlike in-memory sessions.</p>`
                },
                {
                    q: "What are cache invalidation strategies?",
                    a: `<p>Cache invalidation ensures stale data is removed or refreshed. It is one of the hardest problems in caching.</p>
<pre><code>// 1. TTL-based — data expires automatically
await redisClient.setEx('product:1', 300, data); // 5 min

// 2. Event-driven — invalidate on write
async function updateProduct(id, data) {
  await db.updateProduct(id, data);
  await redisClient.del(\`product:\${id}\`);     // Delete cached item
  await redisClient.del('products:list');       // Delete related list
}

// 3. Pattern-based — delete matching keys
async function clearUserCache(userId) {
  const keys = await redisClient.keys(\`user:\${userId}:*\`);
  if (keys.length) await redisClient.del(keys);
}

// 4. Versioned keys — change key on update
const version = await redisClient.incr('product:1:version');
const key = \`product:1:v\${version}\`;
await redisClient.setEx(key, 3600, data);</code></pre>
<p>Prefer explicit invalidation on writes over TTL alone. Combine both for a robust strategy: TTL as a safety net and event-driven invalidation for freshness.</p>`
                },
                {
                    q: "What is the difference between in-memory caching and distributed caching?",
                    a: `<p><strong>In-memory</strong> caching stores data in the application process, while <strong>distributed</strong> caching (Redis, Memcached) uses a shared external store.</p>
<pre><code>// In-memory cache (simple Map)
const cache = new Map();

function getFromMemory(key, fetchFn, ttlMs = 60000) {
  const entry = cache.get(key);
  if (entry &amp;&amp; Date.now() - entry.time &lt; ttlMs) {
    return entry.value;
  }
  const value = fetchFn();
  cache.set(key, { value, time: Date.now() });
  return value;
}

// Or use a library like node-cache
const NodeCache = require('node-cache');
const myCache = new NodeCache({ stdTTL: 600 }); // 10 min default
myCache.set('key', 'value');
myCache.get('key');</code></pre>
<ul>
<li><strong>In-memory</strong> — fastest, but per-process and lost on restart</li>
<li><strong>Distributed (Redis)</strong> — shared across instances, persists across restarts, slight network latency</li>
</ul>
<p>Use in-memory for hot, small datasets; use Redis for shared state and larger caches.</p>`
                }
            ]
        },
        {
            id: "microservices",
            title: "Microservices",
            icon: "bi-diagram-2",
            questions: [
                {
                    q: "What is the difference between monolithic and microservices architecture?",
                    a: `<p>A <strong>monolith</strong> is a single deployable unit containing all features, while <strong>microservices</strong> split the application into small, independently deployable services.</p>
<pre><code>// Monolith — single Express app handles everything
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
app.use('/products', productsRouter);
app.use('/payments', paymentsRouter);

// Microservices — separate services
// user-service    → localhost:3001
// order-service   → localhost:3002
// product-service → localhost:3003
// payment-service → localhost:3004</code></pre>
<ul>
<li><strong>Monolith</strong> — simpler to develop and deploy, harder to scale individual parts</li>
<li><strong>Microservices</strong> — independent scaling and deployment, but adds complexity (networking, data consistency)</li>
</ul>
<p>Start with a monolith and extract microservices only when you have clear scaling or team-ownership boundaries.</p>`
                },
                {
                    q: "What is an API gateway and why is it used in microservices?",
                    a: `<p>An <strong>API gateway</strong> is a single entry point that routes requests to the appropriate microservice, handling cross-cutting concerns.</p>
<pre><code>const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// Route requests to microservices
app.use('/api/users', createProxyMiddleware({
  target: 'http://user-service:3001',
  changeOrigin: true
}));

app.use('/api/orders', createProxyMiddleware({
  target: 'http://order-service:3002',
  changeOrigin: true
}));

app.use('/api/products', createProxyMiddleware({
  target: 'http://product-service:3003',
  changeOrigin: true
}));

app.listen(3000); // Gateway listens on single port</code></pre>
<p>The gateway handles authentication, rate limiting, logging, and load balancing so individual services don't have to. Popular options include <strong>Kong</strong>, <strong>Express Gateway</strong>, and <strong>AWS API Gateway</strong>.</p>`
                },
                {
                    q: "What is service discovery in microservices?",
                    a: `<p><strong>Service discovery</strong> allows microservices to find and communicate with each other dynamically, without hardcoded addresses.</p>
<pre><code>// Simple registry pattern
class ServiceRegistry {
  constructor() { this.services = new Map(); }

  register(name, host, port) {
    if (!this.services.has(name)) this.services.set(name, []);
    this.services.get(name).push({ host, port, timestamp: Date.now() });
  }

  discover(name) {
    const instances = this.services.get(name) || [];
    // Simple round-robin load balancing
    return instances[Math.floor(Math.random() * instances.length)];
  }

  heartbeat(name, host, port) {
    this.register(name, host, port); // Refresh timestamp
  }
}

// Each service registers itself on startup
// GET /discover/:service returns available instances</code></pre>
<p>Production tools include <strong>Consul</strong>, <strong>Eureka</strong>, and <strong>Kubernetes DNS</strong>, which provide health checking, load balancing, and DNS-based discovery.</p>`
                },
                {
                    q: "How do message queues like RabbitMQ work with Node.js?",
                    a: `<p>Message queues enable asynchronous communication between services. Producers send messages, consumers process them independently.</p>
<pre><code>const amqp = require('amqplib');

// Producer — send order event
async function sendOrder(order) {
  const conn = await amqp.connect('amqp://localhost');
  const channel = await conn.createChannel();
  const queue = 'order_queue';

  await channel.assertQueue(queue, { durable: true });
  channel.sendToQueue(queue, Buffer.from(JSON.stringify(order)), {
    persistent: true
  });
  console.log('Order sent:', order.id);
}

// Consumer — process orders
async function processOrders() {
  const conn = await amqp.connect('amqp://localhost');
  const channel = await conn.createChannel();
  const queue = 'order_queue';

  await channel.assertQueue(queue, { durable: true });
  channel.prefetch(1); // Process one at a time

  channel.consume(queue, (msg) =&gt; {
    const order = JSON.parse(msg.content.toString());
    console.log('Processing order:', order.id);
    channel.ack(msg); // Acknowledge completion
  });
}</code></pre>
<p>Message queues provide decoupling, reliability (persistent messages survive restarts), and load leveling during traffic spikes.</p>`
                },
                {
                    q: "What is the circuit breaker pattern?",
                    a: `<p>The <strong>circuit breaker</strong> pattern prevents cascading failures by stopping requests to a failing service and providing a fallback.</p>
<pre><code>class CircuitBreaker {
  constructor(fn, { threshold = 5, timeout = 30000 } = {}) {
    this.fn = fn;
    this.state = 'CLOSED';     // CLOSED → OPEN → HALF_OPEN
    this.failures = 0;
    this.threshold = threshold;
    this.timeout = timeout;
  }

  async call(...args) {
    if (this.state === 'OPEN') {
      throw new Error('Circuit is OPEN — service unavailable');
    }
    try {
      const result = await this.fn(...args);
      this.onSuccess();
      return result;
    } catch (err) {
      this.onFailure();
      throw err;
    }
  }

  onSuccess() { this.failures = 0; this.state = 'CLOSED'; }

  onFailure() {
    this.failures++;
    if (this.failures &gt;= this.threshold) {
      this.state = 'OPEN';
      setTimeout(() =&gt; { this.state = 'HALF_OPEN'; }, this.timeout);
    }
  }
}

const breaker = new CircuitBreaker(fetchUserService);
const user = await breaker.call(userId);</code></pre>
<p>Use libraries like <strong>opossum</strong> for production-ready circuit breakers with metrics, fallbacks, and event hooks.</p>`
                },
                {
                    q: "What is event-driven architecture in microservices?",
                    a: `<p>Event-driven architecture uses events to communicate between services instead of direct HTTP calls, promoting loose coupling and scalability.</p>
<pre><code>const EventEmitter = require('events');

// Event bus (in production, use Redis Pub/Sub or Kafka)
class EventBus extends EventEmitter {}
const eventBus = new EventBus();

// Order service — publishes event
function createOrder(order) {
  saveToDatabase(order);
  eventBus.emit('order.created', {
    orderId: order.id,
    userId: order.userId,
    total: order.total,
    timestamp: new Date().toISOString()
  });
}

// Email service — subscribes to event
eventBus.on('order.created', (event) =&gt; {
  sendConfirmationEmail(event.userId, event.orderId);
});

// Inventory service — subscribes to same event
eventBus.on('order.created', (event) =&gt; {
  reserveInventory(event.orderId);
});</code></pre>
<p>Services don't know about each other — they only publish and subscribe to events. This makes it easy to add new consumers without modifying producers.</p>`
                },
                {
                    q: "How do you use Docker with a Node.js microservice?",
                    a: `<p>Docker packages your Node.js service and its dependencies into a container that runs consistently across environments.</p>
<pre><code># Dockerfile
FROM node:20-alpine

WORKDIR /app

# Install dependencies first (caching layer)
COPY package*.json ./
RUN npm ci --production

# Copy application code
COPY . .

EXPOSE 3000

# Run as non-root user
USER node

CMD ["node", "server.js"]</code></pre>
<pre><code># docker-compose.yml
version: '3.8'
services:
  user-service:
    build: ./user-service
    ports: ["3001:3000"]
    environment:
      - DATABASE_URL=mongodb://mongo:27017/users

  order-service:
    build: ./order-service
    ports: ["3002:3000"]

  mongo:
    image: mongo:7
    volumes:
      - mongo-data:/data/db

volumes:
  mongo-data:</code></pre>
<p>Use multi-stage builds to reduce image size and <code>.dockerignore</code> to exclude <code>node_modules</code>, <code>.git</code>, and test files.</p>`
                },
                {
                    q: "What is gRPC and how do you use it in Node.js?",
                    a: `<p><strong>gRPC</strong> is a high-performance RPC framework using Protocol Buffers for serialization and HTTP/2 for transport.</p>
<pre><code>// user.proto — define the service contract
syntax = "proto3";
service UserService {
  rpc GetUser (UserRequest) returns (UserResponse);
}
message UserRequest { string id = 1; }
message UserResponse { string id = 1; string name = 2; string email = 3; }

// Server
const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');

const packageDef = protoLoader.loadSync('user.proto');
const proto = grpc.loadPackageDefinition(packageDef);

const server = new grpc.Server();
server.addService(proto.UserService.service, {
  GetUser: (call, callback) =&gt; {
    callback(null, { id: call.request.id, name: 'Alice', email: 'alice@example.com' });
  }
});
server.bindAsync('0.0.0.0:50051', grpc.ServerCredentials.createInsecure(), () =&gt; {
  server.start();
});</code></pre>
<p>gRPC is much faster than REST/JSON for service-to-service communication. It supports streaming, bidirectional communication, and auto-generated client SDKs.</p>`
                },
                {
                    q: "What is the saga pattern for distributed transactions?",
                    a: `<p>The <strong>saga pattern</strong> manages distributed transactions across microservices using a sequence of local transactions with compensating actions for rollback.</p>
<pre><code>// Order saga — orchestrator pattern
class OrderSaga {
  async execute(orderData) {
    try {
      // Step 1: Create order
      const order = await orderService.create(orderData);

      // Step 2: Reserve inventory
      await inventoryService.reserve(order.items);

      // Step 3: Process payment
      await paymentService.charge(order.userId, order.total);

      // Step 4: Confirm order
      await orderService.confirm(order.id);
    } catch (error) {
      // Compensating transactions (rollback)
      await this.compensate(order, error);
    }
  }

  async compensate(order, error) {
    await paymentService.refund(order.id).catch(() =&gt; {});
    await inventoryService.release(order.items).catch(() =&gt; {});
    await orderService.cancel(order.id).catch(() =&gt; {});
    throw error;
  }
}</code></pre>
<p>Each step has a compensating action. If step 3 fails, steps 2 and 1 are rolled back. Use orchestration (central coordinator) or choreography (event-driven) approaches.</p>`
                },
                {
                    q: "How do you implement health check endpoints in microservices?",
                    a: `<p>Health checks allow load balancers and orchestrators to monitor service availability and route traffic only to healthy instances.</p>
<pre><code>app.get('/health', (req, res) =&gt; {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

// Detailed readiness check
app.get('/health/ready', async (req, res) =&gt; {
  const checks = {};
  try {
    // Check database connection
    await db.query('SELECT 1');
    checks.database = 'ok';
  } catch (e) {
    checks.database = 'fail';
  }
  try {
    // Check Redis connection
    await redisClient.ping();
    checks.redis = 'ok';
  } catch (e) {
    checks.redis = 'fail';
  }

  const healthy = Object.values(checks).every(s =&gt; s === 'ok');
  res.status(healthy ? 200 : 503).json({
    status: healthy ? 'ok' : 'degraded',
    checks,
    timestamp: new Date().toISOString()
  });
});</code></pre>
<p>Provide a <strong>liveness</strong> endpoint (is the process running?) and a <strong>readiness</strong> endpoint (can it handle requests?). Kubernetes uses both to manage pod lifecycle.</p>`
                }
            ]
        },
        {
            id: "testing",
            title: "Testing",
            icon: "bi-bug",
            questions: [
                {
                    q: "How do you set up Jest for testing a Node.js application?",
                    a: `<p><strong>Jest</strong> is a popular testing framework with built-in assertions, mocking, and code coverage.</p>
<pre><code># Install Jest
npm install --save-dev jest

# package.json
{
  "scripts": {
    "test": "jest",
    "test:watch": "jest --watch",
    "test:coverage": "jest --coverage"
  },
  "jest": {
    "testEnvironment": "node",
    "coverageDirectory": "coverage",
    "collectCoverageFrom": ["src/**/*.js"]
  }
}

# Create test file: math.test.js
const { add } = require('./math');

test('adds 1 + 2 to equal 3', () =&gt; {
  expect(add(1, 2)).toBe(3);
});

# Run tests
npm test</code></pre>
<p>Jest auto-discovers files matching <code>*.test.js</code> or <code>*.spec.js</code> and files in a <code>__tests__</code> directory.</p>`
                },
                {
                    q: "How do you structure tests with describe, it, and expect?",
                    a: `<p><code>describe</code> groups related tests, <code>it</code> (or <code>test</code>) defines individual test cases, and <code>expect</code> makes assertions.</p>
<pre><code>const UserService = require('./userService');

describe('UserService', () =&gt; {
  let service;

  beforeEach(() =&gt; {
    service = new UserService();
  });

  afterEach(() =&gt; {
    jest.restoreAllMocks();
  });

  describe('createUser', () =&gt; {
    it('should create a user with valid data', () =&gt; {
      const user = service.createUser({ name: 'Alice', email: 'a@b.com' });
      expect(user).toBeDefined();
      expect(user.name).toBe('Alice');
      expect(user.email).toContain('@');
    });

    it('should throw if name is missing', () =&gt; {
      expect(() =&gt; service.createUser({ email: 'a@b.com' }))
        .toThrow('Name is required');
    });
  });
});</code></pre>
<p>Common matchers: <code>toBe</code>, <code>toEqual</code>, <code>toBeDefined</code>, <code>toBeNull</code>, <code>toBeTruthy</code>, <code>toContain</code>, <code>toThrow</code>, <code>toHaveLength</code>.</p>`
                },
                {
                    q: "How do you mock dependencies with jest.mock?",
                    a: `<p><code>jest.mock()</code> replaces a module with a mock implementation, isolating the unit under test from its dependencies.</p>
<pre><code>// userService.js
const db = require('./database');
class UserService {
  async getUser(id) {
    return db.findById(id);
  }
}

// userService.test.js
jest.mock('./database'); // Auto-mock all exports
const db = require('./database');
const UserService = require('./userService');

describe('UserService', () =&gt; {
  it('should return user from database', async () =&gt; {
    const mockUser = { id: 1, name: 'Alice' };
    db.findById.mockResolvedValue(mockUser);

    const service = new UserService();
    const user = await service.getUser(1);

    expect(user).toEqual(mockUser);
    expect(db.findById).toHaveBeenCalledWith(1);
    expect(db.findById).toHaveBeenCalledTimes(1);
  });
});</code></pre>
<p>Use <code>mockResolvedValue</code> for async mocks, <code>mockReturnValue</code> for sync, and <code>mockImplementation</code> for custom behavior.</p>`
                },
                {
                    q: "How do you test HTTP endpoints with Supertest?",
                    a: `<p><strong>Supertest</strong> makes HTTP assertions against an Express app without starting a server.</p>
<pre><code>const request = require('supertest');
const app = require('./app'); // Export your Express app

describe('GET /api/users', () =&gt; {
  it('should return all users', async () =&gt; {
    const res = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body).toBeInstanceOf(Array);
  });

  it('should create a user', async () =&gt; {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Alice', email: 'alice@example.com' })
      .expect(201);

    expect(res.body.name).toBe('Alice');
  });

  it('should return 404 for missing user', async () =&gt; {
    await request(app)
      .get('/api/users/999')
      .expect(404);
  });
});</code></pre>
<p>Export <code>app</code> without calling <code>app.listen()</code> in your app file so Supertest can manage the server lifecycle.</p>`
                },
                {
                    q: "How do you test asynchronous code with Jest?",
                    a: `<p>Jest supports several patterns for testing async code: async/await, returning promises, and done callbacks.</p>
<pre><code>// Async/await (recommended)
it('fetches user data', async () =&gt; {
  const data = await fetchUser(1);
  expect(data.name).toBe('Alice');
});

// Returning a promise
it('fetches user data', () =&gt; {
  return fetchUser(1).then(data =&gt; {
    expect(data.name).toBe('Alice');
  });
});

// Testing rejected promises
it('throws on invalid ID', async () =&gt; {
  await expect(fetchUser(-1)).rejects.toThrow('Invalid ID');
});

// Testing with done callback
it('calls callback with data', (done) =&gt; {
  fetchUserCallback(1, (err, data) =&gt; {
    expect(err).toBeNull();
    expect(data.name).toBe('Alice');
    done();
  });
});

// Timers
jest.useFakeTimers();
it('delays execution', () =&gt; {
  const fn = jest.fn();
  setTimeout(fn, 1000);
  jest.advanceTimersByTime(1000);
  expect(fn).toHaveBeenCalled();
});</code></pre>`
                },
                {
                    q: "How do you measure code coverage with Jest?",
                    a: `<p>Jest has built-in code coverage powered by Istanbul. It reports which lines, branches, functions, and statements are tested.</p>
<pre><code># Run tests with coverage
npx jest --coverage

# Coverage output:
# ----------|---------|----------|---------|---------|
# File      | % Stmts | % Branch | % Funcs | % Lines |
# ----------|---------|----------|---------|---------|
# All files |   85.71 |       80 |     100 |   85.71 |
#  math.js  |   85.71 |       80 |     100 |   85.71 |
# ----------|---------|----------|---------|---------|

# Configure in package.json
{
  "jest": {
    "collectCoverage": true,
    "coverageThreshold": {
      "global": {
        "branches": 80,
        "functions": 80,
        "lines": 80,
        "statements": 80
      }
    }
  }
}</code></pre>
<p>Coverage reports are generated in the <code>coverage/</code> directory (HTML, LCOV, JSON). Set thresholds to enforce minimum coverage in CI.</p>`
                },
                {
                    q: "What are test fixtures and how do you use them?",
                    a: `<p>Test fixtures are predefined data or state used to set up reproducible test conditions.</p>
<pre><code>// fixtures/users.js
module.exports = {
  validUser: {
    name: 'Alice',
    email: 'alice@example.com',
    age: 30
  },
  invalidUser: {
    name: '',
    email: 'bad-email'
  },
  users: [
    { id: 1, name: 'Alice', role: 'admin' },
    { id: 2, name: 'Bob', role: 'user' }
  ]
};

// In tests
const { validUser, invalidUser, users } = require('./fixtures/users');

describe('UserService', () =&gt; {
  beforeEach(async () =&gt; {
    await db.collection('users').insertMany(users); // Seed data
  });

  afterEach(async () =&gt; {
    await db.collection('users').deleteMany({}); // Clean up
  });

  it('should create a valid user', async () =&gt; {
    const result = await service.create(validUser);
    expect(result.name).toBe(validUser.name);
  });
});</code></pre>`
                },
                {
                    q: "How do you use sinon for stubs and spies in Node.js testing?",
                    a: `<p><strong>Sinon</strong> provides standalone spies, stubs, and mocks that work with any testing framework.</p>
<pre><code>const sinon = require('sinon');
const UserService = require('./userService');
const db = require('./database');

describe('UserService', () =&gt; {
  afterEach(() =&gt; sinon.restore()); // Clean up all stubs/spies

  // Spy — observes calls without changing behavior
  it('should call save', () =&gt; {
    const spy = sinon.spy(db, 'save');
    service.createUser({ name: 'Alice' });
    expect(spy.calledOnce).toBe(true);
    expect(spy.calledWith({ name: 'Alice' })).toBe(true);
  });

  // Stub — replaces behavior
  it('should return mock user', () =&gt; {
    const stub = sinon.stub(db, 'findById').returns({ id: 1, name: 'Alice' });
    const user = service.getUser(1);
    expect(user.name).toBe('Alice');
  });

  // Stub async
  it('should handle async', async () =&gt; {
    sinon.stub(db, 'findById').resolves({ id: 1, name: 'Alice' });
    const user = await service.getUser(1);
    expect(user.name).toBe('Alice');
  });
});</code></pre>`
                },
                {
                    q: "What is Test-Driven Development (TDD) and how do you apply it?",
                    a: `<p><strong>TDD</strong> follows a Red-Green-Refactor cycle: write a failing test first, make it pass with minimal code, then refactor.</p>
<pre><code>// Step 1: RED — write a failing test
describe('Calculator', () =&gt; {
  it('should add two numbers', () =&gt; {
    const calc = new Calculator();
    expect(calc.add(2, 3)).toBe(5);
  });
});
// ✗ ReferenceError: Calculator is not defined

// Step 2: GREEN — make it pass
class Calculator {
  add(a, b) { return a + b; }
}
// ✓ Test passes

// Step 3: REFACTOR — improve without changing behavior
// Add more tests and iterate
it('should handle negative numbers', () =&gt; {
  expect(calc.add(-1, -2)).toBe(-3);
});

it('should handle zero', () =&gt; {
  expect(calc.add(0, 5)).toBe(5);
});</code></pre>
<ul>
<li><strong>Red</strong> — write the test, watch it fail</li>
<li><strong>Green</strong> — write the simplest code to pass</li>
<li><strong>Refactor</strong> — clean up, remove duplication</li>
</ul>
<p>TDD leads to well-tested, modular code and helps clarify requirements before implementation.</p>`
                },
                {
                    q: "What is the difference between integration tests and unit tests?",
                    a: `<p><strong>Unit tests</strong> test individual functions or classes in isolation, while <strong>integration tests</strong> verify that multiple components work together correctly.</p>
<pre><code>// UNIT TEST — isolated with mocks
describe('UserService.getUser', () =&gt; {
  it('should return user by ID', async () =&gt; {
    const mockDb = { findById: jest.fn().mockResolvedValue({ id: 1, name: 'Alice' }) };
    const service = new UserService(mockDb);
    const user = await service.getUser(1);
    expect(user.name).toBe('Alice');
  });
});

// INTEGRATION TEST — real dependencies
describe('POST /api/users', () =&gt; {
  beforeAll(async () =&gt; {
    await db.connect(); // Real database
  });

  afterAll(async () =&gt; {
    await db.disconnect();
  });

  it('should create user in database', async () =&gt; {
    const res = await request(app)
      .post('/api/users')
      .send({ name: 'Alice', email: 'alice@test.com' });
    expect(res.status).toBe(201);

    // Verify in actual database
    const user = await db.collection('users').findOne({ email: 'alice@test.com' });
    expect(user).toBeDefined();
  });
});</code></pre>
<p>Aim for many fast unit tests (70-80%) and fewer integration tests (20-30%) that cover critical paths and component boundaries.</p>`
                }
            ]
        },
        {
            id: "logging-monitoring",
            title: "Logging & Monitoring",
            icon: "bi-journal-text",
            questions: [
                {
                    q: "How do you set up Winston logger in a Node.js application?",
                    a: `<p><strong>Winston</strong> is the most popular logging library for Node.js, supporting multiple transports, log levels, and formats.</p>
<pre><code>const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' })
  ]
});

// In development, also log to console
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

logger.info('Server started', { port: 3000 });
logger.error('Database connection failed', { error: err.message });</code></pre>
<p>Winston supports custom transports for sending logs to external services like Elasticsearch, Datadog, or CloudWatch.</p>`
                },
                {
                    q: "What are log levels and how do you use them effectively?",
                    a: `<p>Log levels indicate the severity of a message. Winston uses npm-style levels from highest to lowest priority.</p>
<pre><code>const logger = winston.createLogger({
  levels: {
    error: 0,   // Application errors that need immediate attention
    warn: 1,    // Warning conditions that might cause issues
    info: 2,    // General informational messages
    http: 3,    // HTTP request logging
    verbose: 4, // Detailed informational messages
    debug: 5,   // Debug information for development
    silly: 6    // Most verbose level
  },
  level: process.env.LOG_LEVEL || 'info'
});

// Usage
logger.error('Payment processing failed', { orderId, error: err.message });
logger.warn('API rate limit approaching', { remaining: 10 });
logger.info('User registered', { userId: user.id });
logger.debug('Query executed', { sql: query, duration: '45ms' });</code></pre>
<p>Set the level via environment variables. Use <code>info</code> in production and <code>debug</code> in development. Only messages at or above the configured level are logged.</p>`
                },
                {
                    q: "How do you log HTTP requests with Morgan?",
                    a: `<p><strong>Morgan</strong> is an HTTP request logger middleware for Express that logs request details like method, URL, status, and response time.</p>
<pre><code>const morgan = require('morgan');
const express = require('express');
const app = express();

// Predefined formats
app.use(morgan('dev'));       // Colored, concise for dev
app.use(morgan('combined'));  // Apache combined format for production
app.use(morgan('tiny'));      // Minimal output

// Custom format
app.use(morgan(':method :url :status :res[content-length] - :response-time ms'));

// Write to file
const fs = require('fs');
const accessLog = fs.createWriteStream('access.log', { flags: 'a' });
app.use(morgan('combined', { stream: accessLog }));

// Integrate with Winston
app.use(morgan('combined', {
  stream: { write: (message) =&gt; logger.http(message.trim()) }
}));</code></pre>
<p>Use <code>dev</code> format during development and <code>combined</code> in production. Skip logging for health checks with the <code>skip</code> option.</p>`
                },
                {
                    q: "What are structured logs and why are they important?",
                    a: `<p>Structured logging uses a consistent format (usually JSON) instead of plain text, making logs machine-parseable and searchable.</p>
<pre><code>// BAD — unstructured plain text
console.log('User alice@example.com logged in from 192.168.1.1');

// GOOD — structured JSON
logger.info('User login', {
  event: 'auth.login',
  userId: '12345',
  email: 'alice@example.com',
  ip: '192.168.1.1',
  userAgent: req.headers['user-agent'],
  timestamp: new Date().toISOString()
});

// Output: {"level":"info","message":"User login","event":"auth.login",
// "userId":"12345","email":"alice@example.com","ip":"192.168.1.1",
// "timestamp":"2025-01-15T10:30:00.000Z"}

// Easily searchable in log aggregators
// e.g., search: event="auth.login" AND userId="12345"</code></pre>
<p>Structured logs integrates seamlessly with <strong>ELK Stack</strong>, <strong>Datadog</strong>, and <strong>CloudWatch</strong> for filtering, alerting, and dashboards.</p>`
                },
                {
                    q: "What is the debug module and how do you use it?",
                    a: `<p>The <strong>debug</strong> module provides a lightweight, namespace-based logging utility that can be toggled via environment variables.</p>
<pre><code>// app.js
const debug = require('debug');

const dbDebug  = debug('app:db');
const httpDebug = debug('app:http');
const authDebug = debug('app:auth');

dbDebug('Connected to database');       // app:db Connected to database
httpDebug('GET /api/users 200 45ms');   // app:http GET /api/users 200 45ms
authDebug('Token verified for user 1'); // app:auth Token verified for user 1

// Enable specific namespaces via env var:
// DEBUG=app:db,app:auth node app.js
// DEBUG=app:* node app.js          (all app namespaces)
// DEBUG=* node app.js              (everything)</code></pre>
<p>The debug module produces zero output unless enabled, making it perfect for library development. Express and many npm packages use it internally.</p>`
                },
                {
                    q: "How do you implement a health check endpoint?",
                    a: `<p>Health check endpoints let monitoring tools and load balancers verify that your service is running and can handle requests.</p>
<pre><code>// Basic liveness check
app.get('/health', (req, res) =&gt; {
  res.status(200).json({
    status: 'ok',
    uptime: process.uptime(),
    timestamp: new Date().toISOString()
  });
});

// Detailed readiness check with dependency verification
app.get('/health/ready', async (req, res) =&gt; {
  const health = { status: 'ok', checks: {} };
  let statusCode = 200;

  try {
    await mongoose.connection.db.admin().ping();
    health.checks.database = 'ok';
  } catch (e) {
    health.checks.database = 'fail';
    health.status = 'degraded';
    statusCode = 503;
  }

  try {
    await redisClient.ping();
    health.checks.cache = 'ok';
  } catch (e) {
    health.checks.cache = 'fail';
    health.status = 'degraded';
    statusCode = 503;
  }

  health.memory = process.memoryUsage();
  res.status(statusCode).json(health);
});</code></pre>`
                },
                {
                    q: "How do you profile memory usage in a Node.js application?",
                    a: `<p>Use <code>process.memoryUsage()</code> and V8 heap statistics to monitor and profile memory consumption.</p>
<pre><code>// Basic memory usage
const mem = process.memoryUsage();
console.log({
  rss:       \`\${(mem.rss / 1024 / 1024).toFixed(2)} MB\`,       // Total memory
  heapTotal: \`\${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB\`, // V8 heap allocated
  heapUsed:  \`\${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB\`,  // V8 heap used
  external:  \`\${(mem.external / 1024 / 1024).toFixed(2)} MB\`   // C++ objects
});

// Track memory over time
setInterval(() =&gt; {
  const { heapUsed } = process.memoryUsage();
  logger.info('Memory', { heapMB: (heapUsed / 1024 / 1024).toFixed(2) });
}, 30000);

// Generate heap snapshot for debugging leaks
const v8 = require('v8');
const fs = require('fs');
const snapshot = v8.writeHeapSnapshot();
console.log('Heap snapshot written to:', snapshot);

// Use --inspect flag for Chrome DevTools profiling
// node --inspect app.js</code></pre>
<p>Watch for steadily increasing <code>heapUsed</code> — it indicates a memory leak. Use Chrome DevTools or <strong>clinic.js</strong> for detailed analysis.</p>`
                },
                {
                    q: "How do you profile CPU usage in a Node.js application?",
                    a: `<p>CPU profiling identifies performance bottlenecks by recording which functions consume the most processing time.</p>
<pre><code>// Method 1: Built-in profiler
// node --prof app.js
// node --prof-process isolate-0x*.log &gt; profile.txt

// Method 2: V8 inspector (connect Chrome DevTools)
// node --inspect app.js

// Method 3: Programmatic with perf_hooks
const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((list) =&gt; {
  list.getEntries().forEach((entry) =&gt; {
    logger.info(\`\${entry.name}: \${entry.duration.toFixed(2)}ms\`);
  });
});
obs.observe({ entryTypes: ['measure'] });

performance.mark('start');
// ... code to profile ...
performance.mark('end');
performance.measure('operation', 'start', 'end');

// Method 4: Clinic.js
// npx clinic doctor -- node app.js
// npx clinic flame -- node app.js</code></pre>
<p>Focus on hot paths and functions with high self-time. Use <strong>clinic flame</strong> to generate flame graphs for visual analysis.</p>`
                },
                {
                    q: "What are performance hooks in Node.js?",
                    a: `<p>The <code>perf_hooks</code> module provides APIs to measure and observe the performance of your application at a granular level.</p>
<pre><code>const { performance, PerformanceObserver } = require('perf_hooks');

// Measure function execution time
function timedOperation() {
  performance.mark('op-start');
  // ... expensive operation ...
  performance.mark('op-end');
  performance.measure('Operation', 'op-start', 'op-end');
}

// Observe measurements
const obs = new PerformanceObserver((list) =&gt; {
  for (const entry of list.getEntries()) {
    console.log(\`\${entry.name}: \${entry.duration.toFixed(2)}ms\`);
  }
});
obs.observe({ entryTypes: ['measure', 'function'] });

// Wrap a function to auto-measure
const wrapped = performance.timerify(myExpensiveFunction);
wrapped(); // Automatically recorded

// Monitor event loop delay
const { monitorEventLoopDelay } = require('perf_hooks');
const h = monitorEventLoopDelay({ resolution: 20 });
h.enable();
setTimeout(() =&gt; {
  console.log('Event loop delay (ms):', {
    min: h.min / 1e6,
    max: h.max / 1e6,
    mean: h.mean / 1e6,
    p99: h.percentile(99) / 1e6
  });
}, 5000);</code></pre>`
                },
                {
                    q: "How do you integrate error tracking services with Node.js?",
                    a: `<p>Error tracking services like <strong>Sentry</strong> automatically capture, aggregate, and alert on errors in production.</p>
<pre><code>const Sentry = require('@sentry/node');

Sentry.init({
  dsn: process.env.SENTRY_DSN,
  environment: process.env.NODE_ENV,
  tracesSampleRate: 0.1 // 10% of transactions for performance
});

// Express integration
const express = require('express');
const app = express();

// Sentry request handler (must be first middleware)
app.use(Sentry.Handlers.requestHandler());

app.get('/api/data', async (req, res) =&gt; {
  // Errors are auto-captured
  const data = await riskyOperation();
  res.json(data);
});

// Sentry error handler (must be before other error handlers)
app.use(Sentry.Handlers.errorHandler());

// Manual error capture
try {
  await processPayment(order);
} catch (err) {
  Sentry.captureException(err);
  Sentry.captureMessage('Payment failed', { extra: { orderId: order.id } });
}</code></pre>
<p>Sentry provides stack traces, breadcrumbs, user context, and release tracking. Alternatives include <strong>Bugsnag</strong>, <strong>Rollbar</strong>, and <strong>Datadog APM</strong>.</p>`
                }
            ]
        },
        {
            id: "async-patterns",
            title: "Async Patterns",
            icon: "bi-arrow-left-right",
            questions: [
                {
                    q: "What is the callback pattern in Node.js?",
                    a: `<p>The callback pattern is Node.js's original async mechanism. Functions accept a callback as the last argument, called with <code>(error, result)</code>.</p>
<pre><code>const fs = require('fs');

// Error-first callback pattern
fs.readFile('data.txt', 'utf8', (err, data) =&gt; {
  if (err) {
    console.error('Error reading file:', err);
    return;
  }
  console.log('File contents:', data);
});

// Custom function with callback pattern
function fetchUser(id, callback) {
  setTimeout(() =&gt; {
    if (!id) return callback(new Error('ID is required'));
    callback(null, { id, name: 'Alice' });
  }, 100);
}

fetchUser(1, (err, user) =&gt; {
  if (err) return console.error(err);
  console.log(user);
});</code></pre>
<p>The first argument is always the error (or <code>null</code> on success). This convention is called the <strong>error-first callback</strong> pattern.</p>`
                },
                {
                    q: "What is callback hell and how do you avoid it?",
                    a: `<p>Callback hell (pyramid of doom) occurs when nested callbacks make code deeply indented and hard to read.</p>
<pre><code>// CALLBACK HELL
getUser(1, (err, user) =&gt; {
  getOrders(user.id, (err, orders) =&gt; {
    getOrderDetails(orders[0].id, (err, details) =&gt; {
      getShipping(details.shippingId, (err, shipping) =&gt; {
        console.log(shipping); // 4 levels deep!
      });
    });
  });
});

// SOLUTION 1: Named functions
function handleShipping(err, shipping) { console.log(shipping); }
function handleDetails(err, details) { getShipping(details.shippingId, handleShipping); }
function handleOrders(err, orders) { getOrderDetails(orders[0].id, handleDetails); }
getUser(1, (err, user) =&gt; getOrders(user.id, handleOrders));

// SOLUTION 2: Promises
getUser(1)
  .then(user =&gt; getOrders(user.id))
  .then(orders =&gt; getOrderDetails(orders[0].id))
  .then(details =&gt; getShipping(details.shippingId))
  .then(shipping =&gt; console.log(shipping))
  .catch(err =&gt; console.error(err));

// SOLUTION 3: async/await
const user = await getUser(1);
const orders = await getOrders(user.id);
const details = await getOrderDetails(orders[0].id);
const shipping = await getShipping(details.shippingId);</code></pre>`
                },
                {
                    q: "How do you create a Promise in Node.js?",
                    a: `<p>A <strong>Promise</strong> represents an asynchronous operation that will eventually resolve with a value or reject with an error.</p>
<pre><code>// Create a promise
function readFileAsync(path) {
  return new Promise((resolve, reject) =&gt; {
    const fs = require('fs');
    fs.readFile(path, 'utf8', (err, data) =&gt; {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

// Use the promise
readFileAsync('data.txt')
  .then(data =&gt; console.log(data))
  .catch(err =&gt; console.error(err));

// Promise states:
// Pending  → initial state
// Fulfilled → resolved with a value
// Rejected  → rejected with an error

// Shorthand for resolved/rejected promises
const resolved = Promise.resolve('value');
const rejected = Promise.reject(new Error('fail'));</code></pre>
<p>Once settled (fulfilled or rejected), a promise's state cannot change. Promises provide a cleaner alternative to callbacks.</p>`
                },
                {
                    q: "What is the difference between Promise.all, allSettled, race, and any?",
                    a: `<p>These static methods handle multiple promises concurrently with different resolution strategies.</p>
<pre><code>const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.reject('error');

// Promise.all — resolves when ALL succeed, rejects on FIRST failure
const all = await Promise.all([p1, p2]);     // [1, 2]
// await Promise.all([p1, p3]);              // throws 'error'

// Promise.allSettled — waits for ALL to settle (never rejects)
const settled = await Promise.allSettled([p1, p2, p3]);
// [{ status:'fulfilled', value:1 }, { status:'fulfilled', value:2 },
//  { status:'rejected', reason:'error' }]

// Promise.race — resolves/rejects with the FIRST to settle
const race = await Promise.race([
  fetch('/api/fast'),
  new Promise((_, reject) =&gt; setTimeout(() =&gt; reject('timeout'), 5000))
]);

// Promise.any — resolves with the FIRST to SUCCEED
const any = await Promise.any([p3, p1, p2]); // 1 (ignores p3 rejection)
// Rejects only if ALL reject (AggregateError)</code></pre>`
                },
                {
                    q: "How do async/await work in Node.js?",
                    a: `<p><code>async/await</code> is syntactic sugar over Promises that makes asynchronous code look and behave like synchronous code.</p>
<pre><code>// async function always returns a Promise
async function getUser(id) {
  const response = await fetch(\`/api/users/\${id}\`);
  const user = await response.json();
  return user; // Wrapped in Promise.resolve()
}

// Equivalent with promises
function getUser(id) {
  return fetch(\`/api/users/\${id}\`)
    .then(response =&gt; response.json());
}

// Sequential execution
async function loadData() {
  const user = await getUser(1);      // Waits for this
  const orders = await getOrders(1);  // Then this
  return { user, orders };
}

// Top-level await (ES modules only)
const config = await loadConfig();</code></pre>
<p><code>await</code> pauses execution of the async function until the promise settles. The event loop continues processing other tasks while waiting.</p>`
                },
                {
                    q: "How do you handle errors with try-catch in async/await?",
                    a: `<p>Use <code>try-catch</code> blocks to handle rejected promises when using async/await.</p>
<pre><code>// Basic error handling
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error(\`HTTP \${response.status}\`);
    return await response.json();
  } catch (error) {
    console.error('Fetch failed:', error.message);
    throw error; // Re-throw if caller should handle it
  }
}

// Handle multiple operations
async function processOrder(orderId) {
  try {
    const order = await getOrder(orderId);
    const payment = await processPayment(order);
    await sendConfirmation(order, payment);
  } catch (error) {
    if (error.code === 'PAYMENT_FAILED') {
      await cancelOrder(orderId);
    }
    logger.error('Order processing failed', { orderId, error: error.message });
  } finally {
    // Runs whether success or failure
    await releaseResources();
  }
}

// Catch at the call site
const data = await fetchData().catch(err =&gt; defaultData);</code></pre>`
                },
                {
                    q: "How do you run async operations in parallel?",
                    a: `<p>Use <code>Promise.all()</code> to run independent async operations simultaneously instead of sequentially.</p>
<pre><code>// SEQUENTIAL — slow (total = sum of all durations)
async function sequential() {
  const users    = await fetchUsers();    // 200ms
  const products = await fetchProducts(); // 300ms
  const orders   = await fetchOrders();   // 250ms
  // Total: ~750ms
}

// PARALLEL — fast (total = max duration)
async function parallel() {
  const [users, products, orders] = await Promise.all([
    fetchUsers(),    // 200ms
    fetchProducts(), // 300ms
    fetchOrders()    // 250ms
  ]);
  // Total: ~300ms
}

// Parallel with error handling
async function parallelSafe() {
  const results = await Promise.allSettled([
    fetchUsers(),
    fetchProducts(),
    fetchOrders()
  ]);
  const succeeded = results
    .filter(r =&gt; r.status === 'fulfilled')
    .map(r =&gt; r.value);
}</code></pre>
<p>Only parallelize <strong>independent</strong> operations. If operation B depends on the result of A, they must be sequential.</p>`
                },
                {
                    q: "What are async iterators and how does for-await-of work?",
                    a: `<p>Async iterators allow you to consume asynchronous data sources one item at a time using <code>for await...of</code> loops.</p>
<pre><code>// Consuming a readable stream
const fs = require('fs');

async function processFile(path) {
  const stream = fs.createReadStream(path, { encoding: 'utf8' });
  for await (const chunk of stream) {
    console.log('Chunk:', chunk.length, 'bytes');
  }
}

// Custom async generator
async function* fetchPages(url) {
  let page = 1;
  while (true) {
    const res = await fetch(\`\${url}?page=\${page}\`);
    const data = await res.json();
    if (data.length === 0) break;
    yield data;
    page++;
  }
}

// Consume the async generator
for await (const pageData of fetchPages('/api/items')) {
  console.log('Got page with', pageData.length, 'items');
}</code></pre>
<p>Async iterators are ideal for paginated APIs, streaming data, and processing large datasets without loading everything into memory.</p>`
                },
                {
                    q: "How does the EventEmitter pattern work in Node.js?",
                    a: `<p>The <strong>EventEmitter</strong> pattern allows objects to emit named events and register listeners to respond to them.</p>
<pre><code>const EventEmitter = require('events');

class OrderService extends EventEmitter {
  createOrder(data) {
    const order = { id: Date.now(), ...data };
    this.emit('order:created', order);
    return order;
  }

  cancelOrder(id) {
    this.emit('order:cancelled', { id });
  }
}

const service = new OrderService();

// Register listeners
service.on('order:created', (order) =&gt; {
  console.log('Send confirmation email for order', order.id);
});

service.on('order:created', (order) =&gt; {
  console.log('Update inventory for order', order.id);
});

// Listen once
service.once('order:cancelled', (data) =&gt; {
  console.log('Order cancelled:', data.id);
});

// Error handling
service.on('error', (err) =&gt; {
  console.error('Service error:', err);
});

service.createOrder({ product: 'Widget', qty: 2 });</code></pre>
<p>Many Node.js core modules (streams, HTTP, fs) extend EventEmitter. Always listen for the <code>error</code> event to prevent uncaught exceptions.</p>`
                },
                {
                    q: "How do you convert callback-based functions to Promises with promisify?",
                    a: `<p>Node.js provides <code>util.promisify()</code> to convert callback-based functions into promise-returning functions.</p>
<pre><code>const util = require('util');
const fs = require('fs');
const dns = require('dns');

// Promisify individual functions
const readFile = util.promisify(fs.readFile);
const lookup   = util.promisify(dns.lookup);

// Now use with async/await
async function main() {
  const data = await readFile('config.json', 'utf8');
  const { address } = await lookup('example.com');
  console.log(data, address);
}

// fs.promises — already promisified
const fsp = require('fs').promises;
const data = await fsp.readFile('config.json', 'utf8');
await fsp.writeFile('output.txt', 'Hello');

// Custom promisify for non-standard callbacks
function customAsync(arg) {
  return new Promise((resolve, reject) =&gt; {
    legacyFunction(arg, (result, error) =&gt; {
      if (error) reject(error);
      else resolve(result);
    });
  });
}</code></pre>
<p>Most Node.js core modules now offer a <code>.promises</code> API (e.g., <code>fs.promises</code>, <code>dns.promises</code>), making <code>util.promisify</code> less necessary for built-ins.</p>`
                }
            ]
        }
    ]
};
