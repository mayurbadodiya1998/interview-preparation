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
                    a: `<strong>Node.js</strong> is a JavaScript runtime built on <strong>Chrome's V8 engine</strong> that allows running JavaScript on the server side.
It uses an <strong>event-driven, non-blocking I/O model</strong> that makes it lightweight and efficient for building scalable network applications.
Node.js excels at handling concurrent connections with high throughput, making it ideal for real-time apps and API servers.
<pre><code>// Node.js provides server-side APIs
const fs = require('fs');
const http = require('http');

http.createServer((req, res) =&gt; {
  res.end('Hello from Node.js');
}).listen(3000);</code></pre>
Unlike browser JavaScript, Node.js has no <strong>DOM</strong> or <strong>window</strong> object but provides access to the file system, network, and OS-level APIs.
It ships with built-in modules like <code>fs</code>, <code>http</code>, <code>path</code>, and <code>crypto</code> for server-side development.`
                },
                {
                    q: "What is the difference between require() and import in Node.js?",
                    a: `<code>require()</code> is the <strong>CommonJS module system</strong> built into Node.js, while <code>import</code> is the <strong>ES Module</strong> syntax.
CommonJS has been the default module system since Node.js was created, whereas ES Modules were added in Node.js 12 with full support from version 14.
The two systems differ in how they load, parse, and resolve modules at runtime.
<pre><code>// CommonJS
const express = require('express');

// ES Modules (requires "type": "module" in package.json)
import express from 'express';</code></pre>
<code>require()</code> is <strong>synchronous</strong> and can be called conditionally, while <code>import</code> is <strong>statically analyzed</strong> and supports tree-shaking.
ES Modules use strict mode by default and have their own scoping rules compared to CommonJS.`
                },
                {
                    q: "What is the purpose of package.json in a Node.js project?",
                    a: `<code>package.json</code> is the <strong>manifest file</strong> that holds metadata, dependencies, and scripts for a Node.js project.
It defines the project's name, version, entry point, and lists both <strong>production</strong> and <strong>development dependencies</strong>.
The <code>scripts</code> section allows defining custom commands that can be executed with <code>npm run</code>.
<pre><code>{
  "name": "my-app",
  "version": "1.0.0",
  "scripts": { "start": "node index.js" },
  "dependencies": { "express": "^4.18.2" }
}</code></pre>
It is created via <code>npm init</code> and is essential for <strong>dependency management</strong>, versioning, and defining runnable scripts.
The <code>package-lock.json</code> file works alongside it to lock exact dependency versions for reproducible installs.`
                },
                {
                    q: "What is the global object in Node.js?",
                    a: `In Node.js the <strong>global object</strong> is <code>global</code>, equivalent to <code>window</code> in browsers. It holds globally accessible variables and functions.
Since Node.js 12, <code>globalThis</code> provides a <strong>universal reference</strong> that works consistently across Node.js and browser environments.
Common global utilities like <code>console</code>, <code>setTimeout</code>, and <code>Buffer</code> are available without requiring any module.
<pre><code>console.log(global === globalThis); // true

global.myVar = 'accessible everywhere';
console.log(global.myVar); // 'accessible everywhere'</code></pre>
Variables declared with <code>const</code>, <code>let</code>, or <code>var</code> in a module are <strong>scoped to that module</strong> and are not added to <code>global</code>.
Polluting the global namespace is discouraged as it can lead to naming collisions and hard-to-trace bugs.`
                },
                {
                    q: "What is the difference between process.nextTick() and setImmediate()?",
                    a: `<code>process.nextTick()</code> fires before any I/O events in the current iteration, while <code>setImmediate()</code> fires in the <strong>check phase</strong> of the next event loop iteration.
The <strong>nextTick queue</strong> is processed after the current operation completes but before the event loop continues, giving it the highest priority among async callbacks.
This distinction is critical for understanding <strong>callback scheduling order</strong> in Node.js applications.
<pre><code>setImmediate(() =&gt; console.log('setImmediate'));
process.nextTick(() =&gt; console.log('nextTick'));
// Output:
// nextTick
// setImmediate</code></pre>
<code>process.nextTick()</code> has <strong>higher priority</strong> and can starve I/O if used recursively, so use it sparingly.
Prefer <code>setImmediate()</code> for deferring non-critical work to allow I/O events to be processed.`
                },
                {
                    q: "What are environment variables and how do you access them in Node.js?",
                    a: `<strong>Environment variables</strong> are key-value pairs set outside the application that configure its behavior at runtime.
They are accessed via the <code>process.env</code> object, which contains all environment variables available to the current process.
This approach keeps <strong>sensitive configuration</strong> like API keys and database credentials out of source code.
<pre><code>// Set: PORT=3000 node app.js
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

console.log(\&#96;Server running on port \${port}\&#96;);</code></pre>
Use the <strong>dotenv</strong> package to load variables from a <code>.env</code> file during development.
Never commit secrets to source control — add <code>.env</code> to your <code>.gitignore</code> file.`
                },
                {
                    q: "What is the V8 engine and why is it important for Node.js?",
                    a: `<strong>V8</strong> is Google's open-source JavaScript engine written in C++ that compiles JavaScript directly to <strong>native machine code</strong> for fast execution.
It powers both Google Chrome and Node.js, providing the core JavaScript execution environment.
V8's architecture includes an interpreter called <strong>Ignition</strong> and an optimizing compiler called <strong>TurboFan</strong> that work together for peak performance.
<ul>
<li><strong>JIT Compilation</strong> — compiles JS to machine code at runtime, not interpreted line by line</li>
<li><strong>Garbage Collection</strong> — automatic memory management via generational GC with mark-and-sweep</li>
<li><strong>ES Standards</strong> — supports modern ECMAScript features natively without transpilation</li>
</ul>
Node.js wraps V8 with <strong>libuv</strong> to add asynchronous I/O capabilities, making it possible to build high-performance server applications.
Without V8's speed, Node.js would not be competitive as a server-side runtime.`
                },
                {
                    q: "How does Node.js handle concurrency if it is single-threaded?",
                    a: `Node.js uses a <strong>single-threaded event loop</strong> with non-blocking I/O to handle concurrency efficiently.
Heavy I/O operations are offloaded to the operating system or a <strong>thread pool</strong> managed by <strong>libuv</strong>, keeping the main thread free.
This architecture allows Node.js to handle thousands of concurrent connections without the overhead of creating a new thread for each one.
<pre><code>const fs = require('fs');

// Non-blocking — callback fires when done
fs.readFile('data.txt', 'utf8', (err, data) =&gt; {
  console.log(data);
});
console.log('This runs first');</code></pre>
CPU-intensive tasks can block the event loop and should be offloaded to <strong>Worker Threads</strong> or child processes.
For heavy computation, consider using <code>worker_threads</code> module or a separate microservice to keep the main loop responsive.`
                },
                {
                    q: "What is the purpose of the process object in Node.js?",
                    a: `The <code>process</code> object is a <strong>global object</strong> that provides information and control over the current Node.js process.
It exposes properties like <code>process.pid</code>, <code>process.argv</code>, and <code>process.env</code> for accessing runtime details.
The <code>process</code> object also acts as an <strong>EventEmitter</strong>, allowing you to listen for process-level events like exit and uncaught exceptions.
<pre><code>console.log(process.pid);       // Process ID
console.log(process.argv);      // Command-line arguments
console.log(process.cwd());     // Current working directory
console.log(process.version);   // Node.js version

process.on('exit', (code) =&gt; {
  console.log('Exiting with code:', code);
});</code></pre>
It emits events like <code>uncaughtException</code> and <code>unhandledRejection</code> for global error handling.
Methods like <code>process.exit()</code>, <code>process.kill()</code>, and <code>process.memoryUsage()</code> provide direct process control.`
                },
                {
                    q: "What is the difference between Node.js and Deno?",
                    a: `<strong>Deno</strong> is a modern JavaScript/TypeScript runtime created by Node.js's original author, Ryan Dahl, to address Node's design shortcomings.
It was built from the ground up with <strong>security</strong>, modern standards, and developer experience as top priorities.
While both runtimes use the <strong>V8 engine</strong>, they differ significantly in their module systems, security models, and tooling.
<ul>
<li><strong>Security</strong> — Deno is secure by default; requires explicit permission flags for file, network, and env access</li>
<li><strong>TypeScript</strong> — built-in TypeScript support without extra configuration or build steps</li>
<li><strong>Modules</strong> — uses URL-based ES Modules instead of <code>node_modules</code></li>
<li><strong>Standard Library</strong> — ships a reviewed standard library with tested utilities</li>
</ul>
Node.js has a vastly <strong>larger ecosystem</strong> and community, making it the more common choice for production applications.
Deno has been gaining adoption and recently added Node.js compatibility layers to ease migration.`
                },
                {
                    q: "What is the REPL in Node.js and how is it used?",
                    a: `<strong>REPL</strong> stands for <strong>Read-Eval-Print Loop</strong>, an interactive shell that comes built into Node.js for quick experimentation.
It reads user input, evaluates it as JavaScript, prints the result, and loops back for more input.
You can launch it by simply typing <code>node</code> in your terminal without any arguments.
<pre><code>// In terminal, type 'node' to start REPL
> 2 + 3
5
> const greet = name =&gt; \&#96;Hello, \${name}\&#96;;
> greet('Node')
'Hello, Node'
> .help    // shows available REPL commands
> .exit    // exits the REPL</code></pre>
The REPL supports <strong>tab completion</strong>, multi-line expressions, and special dot commands like <code>.load</code> and <code>.save</code>.
It is particularly useful for testing small code snippets, exploring APIs, and debugging logic quickly.`
                },
                {
                    q: "What is the difference between __dirname and __filename in Node.js?",
                    a: `<code>__dirname</code> returns the <strong>absolute path of the directory</strong> containing the currently executing script, while <code>__filename</code> returns the absolute path including the file name.
These are <strong>module-scoped variables</strong> available in CommonJS modules but not in ES Modules by default.
They are commonly used to construct file paths relative to the current module location.
<pre><code>console.log(__dirname);   // /home/user/project/src
console.log(__filename);  // /home/user/project/src/app.js

// Common use: resolve a path relative to current file
const path = require('path');
const configPath = path.join(__dirname, 'config', 'db.json');</code></pre>
In <strong>ES Modules</strong>, you can replicate this behavior using <code>import.meta.url</code> with the <code>url</code> module.
Always use <code>path.join()</code> or <code>path.resolve()</code> instead of string concatenation to ensure cross-platform compatibility.`
                },
                {
                    q: "What are Node.js timers and how do they work?",
                    a: `Node.js provides several <strong>timer functions</strong> for scheduling code execution: <code>setTimeout</code>, <code>setInterval</code>, and <code>setImmediate</code>.
These timers are not part of the V8 engine but are implemented by the <strong>Node.js runtime</strong> using libuv.
Each timer type is processed in a specific <strong>phase of the event loop</strong>, affecting when callbacks actually execute.
<pre><code>// Executes once after 1 second
const timeout = setTimeout(() =&gt; console.log('once'), 1000);

// Executes every 2 seconds
const interval = setInterval(() =&gt; console.log('repeat'), 2000);

// Cancel timers
clearTimeout(timeout);
clearInterval(interval);

// Executes in the check phase of the event loop
setImmediate(() =&gt; console.log('immediate'));</code></pre>
Timer callbacks are <strong>not guaranteed</strong> to fire at the exact specified time; they fire as soon as possible after the delay has elapsed.
Use <code>timer.unref()</code> to prevent a timer from keeping the Node.js process alive when it is the only active event.`
                },
                {
                    q: "What is the Buffer class in Node.js?",
                    a: `The <strong>Buffer</strong> class in Node.js is used to handle <strong>raw binary data</strong> directly in memory, outside the V8 heap.
Buffers are essential when working with streams, file I/O, network protocols, and any operation involving binary data.
They represent fixed-size chunks of memory and are similar to arrays of integers but correspond to raw memory allocations.
<pre><code>// Create buffers
const buf1 = Buffer.from('Hello Node.js');
const buf2 = Buffer.alloc(10);        // 10 zero-filled bytes
const buf3 = Buffer.allocUnsafe(10);   // 10 uninitialized bytes (faster)

console.log(buf1.toString());          // 'Hello Node.js'
console.log(buf1.length);             // 13
console.log(buf1.toJSON());           // { type: 'Buffer', data: [...] }</code></pre>
<code>Buffer.alloc()</code> is <strong>safer</strong> as it zero-fills memory, while <code>Buffer.allocUnsafe()</code> is faster but may contain old data.
Buffers are commonly used with <strong>streams</strong> for efficient processing of large files and network data.`
                },
                {
                    q: "How do you handle command-line arguments in Node.js?",
                    a: `Command-line arguments in Node.js are accessed through the <code>process.argv</code> array, which contains the full command used to launch the process.
The first element is the <strong>path to the Node.js executable</strong>, the second is the path to the script file, and the rest are user-provided arguments.
For complex argument parsing, libraries like <strong>yargs</strong> or <strong>commander</strong> provide structured option handling.
<pre><code>// Run: node app.js --name John --port 3000
console.log(process.argv);
// ['/usr/bin/node', '/app/app.js', '--name', 'John', '--port', '3000']

// Simple argument parsing
const args = process.argv.slice(2);
console.log(args); // ['--name', 'John', '--port', '3000']

// Using Node.js 18+ built-in parseArgs
const { parseArgs } = require('node:util');
const { values } = parseArgs({
  options: { name: { type: 'string' }, port: { type: 'string' } }
});
console.log(values.name); // 'John'</code></pre>
Node.js 18 introduced <code>util.parseArgs()</code> as a <strong>built-in alternative</strong> to third-party argument parsing libraries.
Always validate and sanitize command-line inputs before using them in your application logic.`
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
                    a: `The <strong>event loop</strong> is the core mechanism that allows Node.js to perform <strong>non-blocking I/O</strong> despite being single-threaded.
It works by offloading operations to the system kernel or thread pool and processing their callbacks when they complete.
The event loop continuously checks for pending work and executes callbacks in a <strong>specific phase order</strong>.
<pre><code>// Phases: timers → pending → idle → poll → check → close
setTimeout(() =&gt; console.log('timer'), 0);
setImmediate(() =&gt; console.log('immediate'));
process.nextTick(() =&gt; console.log('nextTick'));
// nextTick → timer/immediate (order may vary)</code></pre>
Each iteration (tick) processes callbacks from its phases in order: <strong>timers</strong>, I/O callbacks, idle, poll, check, and close callbacks.
Microtasks like <code>process.nextTick()</code> and resolved promises are processed between each phase transition.`
                },
                {
                    q: "What are the different phases of the event loop?",
                    a: `The event loop consists of <strong>six main phases</strong> executed in a specific order during each iteration.
Understanding these phases is essential for predicting the execution order of asynchronous callbacks.
Each phase has a <strong>FIFO queue</strong> of callbacks to execute, and the loop processes them until the queue is empty or the maximum limit is reached.
<ul>
<li><strong>Timers</strong> — executes <code>setTimeout</code> and <code>setInterval</code> callbacks whose threshold has elapsed</li>
<li><strong>Pending Callbacks</strong> — executes I/O callbacks deferred from the previous loop iteration</li>
<li><strong>Idle/Prepare</strong> — internal use only by Node.js internals</li>
<li><strong>Poll</strong> — retrieves new I/O events and executes I/O-related callbacks</li>
<li><strong>Check</strong> — executes <code>setImmediate()</code> callbacks immediately after poll</li>
<li><strong>Close Callbacks</strong> — executes close event callbacks like <code>socket.on('close')</code></li>
</ul>
Between each phase, Node.js processes the <strong>microtask queue</strong> including <code>process.nextTick()</code> and resolved promise callbacks.
This inter-phase processing ensures microtasks always have higher priority than macrotasks.`
                },
                {
                    q: "What is the difference between the microtask queue and the macrotask queue?",
                    a: `<strong>Microtasks</strong> (promises, <code>process.nextTick</code>) have higher priority and are drained completely before the event loop moves to the next macrotask.
<strong>Macrotasks</strong> include <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code>, and I/O callbacks that are processed one at a time per loop iteration.
The microtask queue is always fully emptied before any macrotask callback is invoked.
<pre><code>setTimeout(() =&gt; console.log('1: timeout'), 0);
Promise.resolve().then(() =&gt; console.log('2: promise'));
process.nextTick(() =&gt; console.log('3: nextTick'));
// Output: 3: nextTick → 2: promise → 1: timeout</code></pre>
<code>process.nextTick</code> runs before promise microtasks in the microtask queue ordering.
Excessive microtasks can <strong>starve the macrotask queue</strong>, causing timers and I/O callbacks to be delayed indefinitely.`
                },
                {
                    q: "How does setTimeout with 0ms delay actually work in Node.js?",
                    a: `<code>setTimeout(fn, 0)</code> does <strong>not execute immediately</strong> even though the delay is zero.
The callback is placed in the <strong>timers phase</strong> and runs only after the current synchronous code completes and all microtasks are drained.
This behavior makes <code>setTimeout(fn, 0)</code> useful for deferring execution to the next event loop iteration.
<pre><code>console.log('start');
setTimeout(() =&gt; console.log('timeout'), 0);
Promise.resolve().then(() =&gt; console.log('promise'));
console.log('end');
// start → end → promise → timeout</code></pre>
The minimum delay is internally clamped to <strong>1ms</strong>, so <code>setTimeout(fn, 0)</code> is equivalent to <code>setTimeout(fn, 1)</code>.
The actual execution time depends on event loop load and the number of preceding callbacks in the timer queue.`
                },
                {
                    q: "What happens if you block the event loop?",
                    a: `Blocking the event loop prevents Node.js from processing <strong>any other callbacks</strong>, timers, or I/O events, making the server completely unresponsive.
All incoming requests will queue up and eventually time out, causing a <strong>denial of service</strong> for all connected clients.
Common blocking operations include synchronous file reads, CPU-heavy computations, and tight loops without yielding.
<pre><code>// BAD: blocks the event loop
app.get('/heavy', (req, res) =&gt; {
  let sum = 0;
  for (let i = 0; i &lt; 1e10; i++) sum += i;
  res.send(\&#96;Sum: \${sum}\&#96;);
});

// GOOD: offload to a worker thread
const { Worker } = require('worker_threads');</code></pre>
Avoid <strong>synchronous operations</strong> and CPU-heavy computations on the main thread at all costs.
Use <strong>worker threads</strong>, child processes, or external task queues to handle computationally expensive work.`
                },
                {
                    q: "How do Promises interact with the event loop?",
                    a: `Promise callbacks (<code>.then</code>, <code>.catch</code>, <code>.finally</code>) are placed in the <strong>microtask queue</strong>, which has higher priority than macrotasks.
The microtask queue is processed after the current synchronous operation completes but <strong>before the event loop continues</strong> to the next phase.
This means promise chains resolve quickly without waiting for timers or I/O callbacks.
<pre><code>console.log('A');
setTimeout(() =&gt; console.log('B'), 0);
Promise.resolve()
  .then(() =&gt; console.log('C'))
  .then(() =&gt; console.log('D'));
console.log('E');
// A → E → C → D → B</code></pre>
All pending microtasks are <strong>drained completely</strong> before any macrotask runs, ensuring promise continuations are prioritized.
Nested promise chains create additional microtasks that are also processed before moving to the next phase.`
                },
                {
                    q: "What is libuv and what role does it play in Node.js?",
                    a: `<strong>libuv</strong> is a multi-platform C library that provides Node.js with its <strong>event loop</strong>, asynchronous I/O, and cross-platform abstraction layer.
It was originally developed for Node.js but is now used by other projects like Julia and Luvit.
libuv handles the interaction between Node.js and the operating system's async I/O primitives.
<ul>
<li><strong>Thread Pool</strong> — default 4 threads for DNS lookups, file system operations, and crypto computations</li>
<li><strong>Event Loop</strong> — implements the multi-phase loop that drives all async behavior in Node.js</li>
<li><strong>Async I/O</strong> — uses epoll (Linux), kqueue (macOS), and IOCP (Windows) for platform-specific efficiency</li>
</ul>
You can adjust the thread pool size via the <code>UV_THREADPOOL_SIZE</code> environment variable, supporting up to <strong>1024 threads</strong>.
Increasing the pool size can improve throughput for applications with heavy file system or DNS operations.`
                },
                {
                    q: "What is the purpose of setImmediate() in the event loop?",
                    a: `<code>setImmediate()</code> schedules a callback to execute in the <strong>check phase</strong> of the event loop, immediately after the poll phase completes.
It is designed to execute code after the current poll phase finishes processing I/O events.
This makes it ideal for deferring work that should happen after I/O without adding unnecessary delay.
<pre><code>const fs = require('fs');

fs.readFile('file.txt', () =&gt; {
  setTimeout(() =&gt; console.log('timeout'), 0);
  setImmediate(() =&gt; console.log('immediate'));
});
// Inside I/O callback: immediate always runs first</code></pre>
Within an I/O cycle, <code>setImmediate</code> <strong>always fires before</strong> <code>setTimeout(fn, 0)</code> due to phase ordering.
Outside an I/O callback, the execution order between <code>setImmediate</code> and <code>setTimeout(fn, 0)</code> is <strong>non-deterministic</strong>.`
                },
                {
                    q: "How can you monitor event loop lag in a Node.js application?",
                    a: `<strong>Event loop lag</strong> measures how long the loop is blocked and unable to process new callbacks.
High lag indicates CPU-bound operations or blocking code that prevents the event loop from running efficiently.
Monitoring lag is critical for maintaining <strong>application responsiveness</strong> in production environments.
<pre><code>// Simple lag detection
let lastCheck = Date.now();
setInterval(() =&gt; {
  const now = Date.now();
  const lag = now - lastCheck - 1000;
  console.log(\&#96;Event loop lag: \${lag}ms\&#96;);
  lastCheck = now;
}, 1000);

// Or use: require('perf_hooks').monitorEventLoopDelay()</code></pre>
Libraries like <strong>clinic.js</strong> and <strong>prom-client</strong> provide production-grade event loop monitoring and metrics.
The <code>perf_hooks</code> module offers a built-in <code>monitorEventLoopDelay()</code> API for precise histogram-based lag measurement.`
                },
                {
                    q: "What is the thread pool in Node.js and when is it used?",
                    a: `Node.js uses a <strong>libuv thread pool</strong> with a default of 4 threads for operations that cannot be handled asynchronously by the OS kernel.
The thread pool handles <strong>file system operations</strong>, DNS lookups via <code>dns.lookup()</code>, and CPU-intensive crypto functions.
Network I/O does not use the thread pool — it is handled directly by the OS kernel's async mechanisms.
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
Set <code>UV_THREADPOOL_SIZE</code> environment variable (up to <strong>1024</strong>) to increase pool size for I/O-heavy applications.
Note that <code>dns.resolve()</code> uses the OS network stack directly and does not consume a thread pool slot.`
                },
                {
                    q: "What is the difference between queueMicrotask() and process.nextTick()?",
                    a: `Both <code>queueMicrotask()</code> and <code>process.nextTick()</code> schedule callbacks in the <strong>microtask queue</strong>, but they have different priorities.
<code>process.nextTick()</code> callbacks are processed <strong>before</strong> promise microtasks and <code>queueMicrotask()</code> callbacks.
<code>queueMicrotask()</code> is a <strong>web-standard API</strong> that behaves consistently across Node.js and browser environments.
<pre><code>queueMicrotask(() =&gt; console.log('1: queueMicrotask'));
process.nextTick(() =&gt; console.log('2: nextTick'));
Promise.resolve().then(() =&gt; console.log('3: promise'));
// Output:
// 2: nextTick
// 1: queueMicrotask
// 3: promise</code></pre>
Prefer <code>queueMicrotask()</code> for <strong>cross-platform compatibility</strong> when writing isomorphic code.
Use <code>process.nextTick()</code> only when you specifically need the callback to run before all other microtasks.`
                },
                {
                    q: "How does the poll phase work in the event loop?",
                    a: `The <strong>poll phase</strong> is the most important phase of the event loop where Node.js waits for and processes new I/O events.
It has two main functions: calculating how long it should <strong>block and poll</strong> for I/O, and processing events in the <strong>poll queue</strong>.
When the event loop enters the poll phase with no timers scheduled, it will either process callbacks or wait for new I/O events.
<pre><code>const fs = require('fs');

// This callback is processed during the poll phase
fs.readFile('file.txt', (err, data) =&gt; {
  console.log('File read complete');  // Runs in poll phase
  
  // This runs in check phase (after poll)
  setImmediate(() =&gt; console.log('Immediate after I/O'));
  
  // This runs in next timers phase
  setTimeout(() =&gt; console.log('Timer after I/O'), 0);
});</code></pre>
If the poll queue is empty and there are <code>setImmediate()</code> callbacks, the loop moves to the <strong>check phase</strong>.
If no <code>setImmediate()</code> is scheduled, the loop <strong>blocks in poll</strong> waiting for new callbacks until a timer threshold is reached.`
                },
                {
                    q: "What is the execution order of async operations in Node.js?",
                    a: `Understanding <strong>async execution order</strong> is critical for debugging timing issues in Node.js applications.
The priority from highest to lowest is: <strong>synchronous code</strong>, then <code>process.nextTick</code>, then promise microtasks, then macrotasks.
Each category is fully drained before moving to the next, ensuring predictable ordering within each level.
<pre><code>console.log('1: sync');

setTimeout(() =&gt; console.log('2: setTimeout'), 0);
setImmediate(() =&gt; console.log('3: setImmediate'));

Promise.resolve().then(() =&gt; console.log('4: promise'));
process.nextTick(() =&gt; console.log('5: nextTick'));

console.log('6: sync');
// Output: 1 \u2192 6 \u2192 5 \u2192 4 \u2192 2 \u2192 3</code></pre>
<strong>Synchronous code</strong> always runs first, followed by the nextTick queue, then promise microtasks, and finally macrotasks.
The order between <code>setTimeout(fn, 0)</code> and <code>setImmediate</code> is non-deterministic outside an I/O callback.`
                },
                {
                    q: "How do you avoid starving the event loop with recursive async calls?",
                    a: `Recursive calls to <code>process.nextTick()</code> can <strong>starve the event loop</strong> because the nextTick queue is completely drained before moving to any other phase.
This means I/O callbacks, timers, and other macrotasks will never get a chance to execute if nextTick keeps adding to its own queue.
The solution is to use <code>setImmediate()</code> instead, which schedules work in the <strong>check phase</strong> and allows other phases to run.
<pre><code>// BAD: starves the event loop
function recursiveNextTick() {
  process.nextTick(recursiveNextTick);
}

// GOOD: allows I/O between iterations
function recursiveImmediate() {
  setImmediate(recursiveImmediate);
}

// GOOD: use setImmediate for recursive patterns
function processItems(items) {
  if (items.length === 0) return;
  processItem(items[0]);
  setImmediate(() =&gt; processItems(items.slice(1)));
}</code></pre>
The same principle applies to <strong>recursive promise chains</strong> \u2014 they can also starve macrotasks if they resolve synchronously.
Always use <code>setImmediate()</code> or <code>setTimeout(fn, 0)</code> for recursive async patterns to give the event loop breathing room.`
                },
                {
                    q: "What is the relationship between the event loop and Worker Threads?",
                    a: `<strong>Worker Threads</strong> run in separate threads with their <strong>own event loops</strong>, V8 instances, and memory spaces.
They communicate with the main thread through <strong>message passing</strong> using <code>postMessage()</code> and <code>parentPort.on('message')</code>.
This allows CPU-intensive work to run in parallel without blocking the main event loop.
<pre><code>const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on('message', (result) =&gt; {
    console.log('Result from worker:', result);
  });
  worker.postMessage({ num: 1000000 });
} else {
  parentPort.on('message', ({ num }) =&gt; {
    let sum = 0;
    for (let i = 0; i &lt; num; i++) sum += i;
    parentPort.postMessage(sum);
  });
}</code></pre>
Each worker thread has its own <strong>event loop</strong>, so blocking operations in a worker do not affect the main thread.
Use <code>SharedArrayBuffer</code> and <code>Atomics</code> for <strong>zero-copy data sharing</strong> between threads when performance is critical.`
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
                    a: `<strong>CommonJS</strong> uses <code>require()</code> to load modules and <code>module.exports</code> to expose functionality from a file.
Each file in Node.js is treated as a <strong>separate module</strong> with its own scope, preventing variable name collisions.
Modules are wrapped internally in a function that provides <code>exports</code>, <code>require</code>, <code>module</code>, <code>__filename</code>, and <code>__dirname</code>.
<pre><code>// math.js
module.exports.add = (a, b) =&gt; a + b;
module.exports.subtract = (a, b) =&gt; a - b;

// app.js
const { add, subtract } = require('./math');
console.log(add(2, 3)); // 5</code></pre>
Modules are loaded <strong>synchronously</strong> and cached after the first <code>require()</code> call, so subsequent imports return the same instance.
This caching mechanism ensures that module code is executed only once regardless of how many times it is required.`
                },
                {
                    q: "What is the difference between module.exports and exports?",
                    a: `<code>exports</code> is a <strong>shorthand reference</strong> to <code>module.exports</code> — both point to the same object initially.
However, <strong>reassigning</strong> <code>exports</code> directly breaks this reference and does not affect what the module actually exports.
This is a common source of confusion and bugs for developers new to the CommonJS module system.
<pre><code>// Works — adding properties
exports.greet = () =&gt; 'Hello';

// BROKEN — reassigning exports does nothing
exports = { greet: () =&gt; 'Hello' };

// Correct — reassign module.exports instead
module.exports = { greet: () =&gt; 'Hello' };</code></pre>
Always use <code>module.exports</code> when exporting a single function, class, or replacing the <strong>entire export object</strong>.
Use <code>exports.property</code> only when adding individual named exports to the existing exports object.`
                },
                {
                    q: "How do ES Modules work in Node.js?",
                    a: `<strong>ES Modules</strong> use <code>import</code>/<code>export</code> syntax and are the modern standard for JavaScript module management.
Enable them by setting <code>"type": "module"</code> in <code>package.json</code> or by using the <code>.mjs</code> file extension.
ES Modules offer several advantages over CommonJS including <strong>static analysis</strong>, tree-shaking, and top-level await support.
<pre><code>// utils.mjs
export const greet = (name) =&gt; \&#96;Hello, \${name}\&#96;;
export default class Logger { log(msg) { console.log(msg); } }

// app.mjs
import Logger, { greet } from './utils.mjs';
const logger = new Logger();
logger.log(greet('World'));</code></pre>
ES Modules are loaded <strong>asynchronously</strong> and support <code>top-level await</code>, allowing async initialization at the module level.
Unlike CommonJS, ES Module imports are <strong>live bindings</strong> — they reflect the current value from the exporting module.`
                },
                {
                    q: "What is the module resolution algorithm in Node.js?",
                    a: `When you call <code>require('module')</code>, Node.js resolves the module using a <strong>specific search order</strong> that prioritizes core modules.
The resolution algorithm first checks built-in modules, then file paths, and finally searches <code>node_modules</code> directories.
Understanding this algorithm helps debug common "<strong>cannot find module</strong>" errors.
<ul>
<li><strong>Core modules</strong> — built-in modules like <code>fs</code>, <code>path</code> are checked first and always win</li>
<li><strong>File modules</strong> — paths starting with <code>./</code>, <code>../</code>, or <code>/</code> resolve to exact files</li>
<li><strong>node_modules</strong> — searches <code>node_modules</code> folders up the directory tree to the root</li>
</ul>
<pre><code>require('./myModule');
// Checks: myModule.js → myModule.json → myModule/index.js</code></pre>
For folder modules, Node.js looks at the <code>main</code> field in <code>package.json</code> or defaults to <code>index.js</code>.
ES Modules use a similar but stricter algorithm that requires <strong>file extensions</strong> and does not support <code>index.js</code> fallback by default.`
                },
                {
                    q: "What is module caching and how does it work?",
                    a: `Node.js <strong>caches modules</strong> after the first <code>require()</code> call, storing the result in an internal cache keyed by the resolved file path.
Subsequent calls to <code>require()</code> for the same module return the <strong>cached exports object</strong> without re-executing the module code.
This means all consumers of a module share the <strong>same instance</strong>, enabling the singleton pattern naturally.
<pre><code>// counter.js
let count = 0;
module.exports = { increment: () =&gt; ++count, getCount: () =&gt; count };

// app.js
const c1 = require('./counter');
const c2 = require('./counter');
c1.increment();
console.log(c2.getCount()); // 1 — same instance</code></pre>
The cache is stored in <code>require.cache</code> and you can delete entries to force re-loading a module.
Clearing the cache is rarely recommended in production as it can cause <strong>inconsistent state</strong> and memory leaks.`
                },
                {
                    q: "What are circular dependencies and how does Node.js handle them?",
                    a: `<strong>Circular dependencies</strong> occur when module A requires module B and module B requires module A, creating a dependency cycle.
Node.js handles this gracefully by returning a <strong>partially loaded export</strong> instead of throwing an error or entering an infinite loop.
The module that is required second will only see the exports that were defined before the circular require statement.
<pre><code>// a.js
exports.loaded = false;
const b = require('./b');
exports.loaded = true;

// b.js
const a = require('./a');
console.log(a.loaded); // false — partial export</code></pre>
Circular dependencies can lead to <strong>subtle bugs</strong> because the partially loaded module may be missing expected properties.
Refactor shared logic into a <strong>third module</strong> to break the cycle and avoid circular dependency issues.`
                },
                {
                    q: "How do you create and publish an npm package?",
                    a: `Creating an npm package involves initializing a project, writing your module code, and publishing it to the <strong>npm registry</strong>.
Each package needs a unique name, a valid <code>package.json</code>, and proper entry point configuration.
Use <strong>semantic versioning</strong> (semver) to communicate the nature of changes in each release.
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
                    a: `<code>dependencies</code> are packages required at <strong>runtime</strong> in production, while <code>devDependencies</code> are only needed during development.
Development dependencies typically include testing frameworks, linters, build tools, and type definitions.
This separation allows production deployments to install only the packages necessary for the application to run.
<pre><code>npm install express            # → dependencies
npm install jest --save-dev    # → devDependencies

// package.json
{
  "dependencies": { "express": "^4.18.0" },
  "devDependencies": { "jest": "^29.0.0" }
}</code></pre>
Run <code>npm install --production</code> or set <code>NODE_ENV=production</code> to skip devDependencies during deployment.
There is also <code>peerDependencies</code> for plugins that expect the host project to provide a specific package version.`
                },
                {
                    q: "What are Node.js built-in modules and name some important ones?",
                    a: `<strong>Built-in (core) modules</strong> ship with Node.js and require no installation from npm.
They are loaded by name without a path prefix and are always prioritized over third-party modules with the same name.
Node.js 16+ also supports the <code>node:</code> prefix (e.g., <code>require('node:fs')</code>) for explicit core module imports.
<pre><code>const fs = require('fs');        // File system operations
const path = require('path');    // Path manipulation
const http = require('http');    // HTTP server/client
const os = require('os');        // Operating system info
const crypto = require('crypto');// Cryptographic functions
const events = require('events');// Event emitter</code></pre>
Other important modules include <code>url</code>, <code>querystring</code>, <code>util</code>, <code>stream</code>, <code>child_process</code>, and <code>cluster</code>.
The <code>node:</code> protocol prefix is recommended for clarity and to avoid conflicts with npm packages of the same name.`
                },
                {
                    q: "What is the purpose of package-lock.json?",
                    a: `<code>package-lock.json</code> locks the <strong>exact dependency tree</strong> so every install produces identical <code>node_modules</code> across all environments.
It records the precise version, download URL, and integrity hash of every installed package and its transitive dependencies.
This ensures <strong>reproducible builds</strong> and eliminates the "works on my machine" problem caused by version ranges.
<pre><code>// package.json — allows range
"express": "^4.18.0"

// package-lock.json — locks exact version
"express": {
  "version": "4.18.2",
  "resolved": "https://registry.npmjs.org/express/-/express-4.18.2.tgz",
  "integrity": "sha512-..."
}</code></pre>
Always commit <code>package-lock.json</code> to version control to ensure consistent installs across your team.
Use <code>npm ci</code> in CI/CD pipelines for <strong>clean, deterministic installs</strong> based on the lock file.`
                },
                {
                    q: "What is the module wrapper function in Node.js?",
                    a: `Before a module's code is executed, Node.js wraps it in a <strong>module wrapper function</strong> that provides module-scoped variables.
This wrapper is why variables declared in a module are <strong>not global</strong> and why <code>require</code>, <code>exports</code>, and <code>__dirname</code> are available.
Understanding the wrapper explains the scoping behavior that makes Node.js modules self-contained.
<pre><code>// Node.js internally wraps your code like this:
(function(exports, require, module, __filename, __dirname) {
  // Your module code actually lives here
  const myVar = 'scoped to this module';
  module.exports = { myVar };
});

// This is why top-level variables don't leak to global scope</code></pre>
The wrapper provides five arguments: <code>exports</code>, <code>require</code>, <code>module</code>, <code>__filename</code>, and <code>__dirname</code>.
This is a <strong>CommonJS-specific</strong> behavior \u2014 ES Modules use a different mechanism with static import/export declarations.`
                },
                {
                    q: "How do you use dynamic imports in Node.js?",
                    a: `<strong>Dynamic imports</strong> use the <code>import()</code> function to load modules at runtime, returning a promise that resolves to the module.
Unlike static <code>import</code> statements, dynamic imports can be used <strong>conditionally</strong> and inside functions or blocks.
They work in both CommonJS and ES Module contexts, making them versatile for lazy-loading and code splitting.
<pre><code>// Dynamic import in CommonJS
async function loadModule() {
  const { readFile } = await import('node:fs/promises');
  const data = await readFile('config.json', 'utf8');
  return JSON.parse(data);
}

// Conditional dynamic import
const db = process.env.DB === 'mongo'
  ? await import('./mongo-driver.js')
  : await import('./postgres-driver.js');</code></pre>
Dynamic imports are especially useful for <strong>optional dependencies</strong> that may not be installed in all environments.
They also enable <strong>lazy loading</strong> of heavy modules to improve application startup time.`
                },
                {
                    q: "What are Node.js subpath exports and imports in package.json?",
                    a: `<strong>Subpath exports</strong> (the <code>exports</code> field in package.json) control which modules consumers can access from your package.
This feature replaces the older <code>main</code> field and provides fine-grained control over your package's <strong>public API</strong>.
It also supports <strong>conditional exports</strong> for providing different entry points for CommonJS and ES Module consumers.
<pre><code>// package.json
{
  "name": "my-lib",
  "exports": {
    ".": "./src/index.js",
    "./utils": "./src/utils.js",
    "./types": "./src/types.d.ts"
  }
}

// Consumer can now import:
import { main } from 'my-lib';         // maps to ./src/index.js
import { helper } from 'my-lib/utils'; // maps to ./src/utils.js</code></pre>
Paths not listed in <code>exports</code> are <strong>not accessible</strong> to consumers, effectively creating a private internal structure.
Use <strong>conditional exports</strong> with <code>import</code> and <code>require</code> keys to support both module systems simultaneously.`
                },
                {
                    q: "How do you use the node: protocol prefix for built-in modules?",
                    a: `The <code>node:</code> protocol prefix explicitly identifies a module as a <strong>Node.js built-in</strong>, preventing confusion with npm packages.
Introduced in Node.js 14.18 and recommended from Node.js 16+, it ensures you always import the <strong>core module</strong> regardless of installed packages.
This is particularly important because an npm package could have the same name as a built-in module.
<pre><code>// Without prefix (ambiguous)
const fs = require('fs');           // Could be overridden by npm package

// With node: prefix (explicit and safe)
const fs = require('node:fs');
const path = require('node:path');
const { readFile } = require('node:fs/promises');

// ES Module style
import { createServer } from 'node:http';
import { join } from 'node:path';</code></pre>
Some newer built-in modules like <code>node:test</code> are <strong>only available</strong> with the <code>node:</code> prefix.
Using the prefix is considered a <strong>best practice</strong> for clarity and to future-proof your code against naming conflicts.`
                },
                {
                    q: "What is the difference between require.resolve() and require()?",
                    a: `<code>require.resolve()</code> returns the <strong>resolved file path</strong> of a module without actually loading or executing it.
This is useful for checking if a module exists, finding its location, or passing its path to other functions.
Unlike <code>require()</code>, it does not execute the module code or add it to the module cache.
<pre><code>// Returns the full path without loading the module
const modulePath = require.resolve('express');
console.log(modulePath);
// '/project/node_modules/express/index.js'

// Check if a module exists
function moduleExists(name) {
  try {
    require.resolve(name);
    return true;
  } catch {
    return false;
  }
}

console.log(moduleExists('express')); // true
console.log(moduleExists('nonexistent')); // false</code></pre>
<code>require.resolve()</code> follows the same <strong>module resolution algorithm</strong> as <code>require()</code> including checking <code>node_modules</code>.
It throws a <code>MODULE_NOT_FOUND</code> error if the module cannot be found, which can be caught for <strong>optional dependency</strong> patterns.`
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
                    a: `<strong>Express.js</strong> is a minimal and flexible Node.js web framework that provides a robust set of features for building web and API applications.
It simplifies common server tasks like <strong>routing</strong>, middleware management, and HTTP request/response handling.
Express is unopinionated, leaving architectural decisions to the developer while providing essential building blocks.
<pre><code>const express = require('express');
const app = express();

app.get('/', (req, res) =&gt; {
  res.send('Hello World');
});

app.listen(3000, () =&gt; console.log('Server on port 3000'));</code></pre>
It is popular due to its simplicity, massive <strong>middleware ecosystem</strong>, and being the de facto standard for Node.js web servers.
Frameworks like <strong>NestJS</strong>, <strong>Sails</strong>, and <strong>LoopBack</strong> are built on top of Express, extending its functionality.`
                },
                {
                    q: "How do you define routes in Express?",
                    a: `Routes are defined using <strong>HTTP method functions</strong> on the app object, matching a path pattern to a handler function.
Express supports all standard HTTP methods including <code>GET</code>, <code>POST</code>, <code>PUT</code>, <code>PATCH</code>, and <code>DELETE</code>.
Route parameters are defined using <strong>colon syntax</strong> (e.g., <code>:id</code>) and accessed through <code>req.params</code>.
<pre><code>app.get('/users', (req, res) =&gt; res.json(users));
app.post('/users', (req, res) =&gt; { /* create user */ });
app.put('/users/:id', (req, res) =&gt; { /* update user */ });
app.delete('/users/:id', (req, res) =&gt; { /* delete user */ });

// Route parameters
app.get('/users/:id', (req, res) =&gt; {
  res.json({ userId: req.params.id });
});</code></pre>
Use <code>app.all()</code> to handle all HTTP methods and <code>app.route()</code> to chain methods for the same path.
Routes are matched in the <strong>order they are defined</strong>, so place more specific routes before generic ones.`
                },
                {
                    q: "What is the difference between req.params, req.query, and req.body?",
                    a: `These three objects extract data from <strong>different parts</strong> of an HTTP request in Express.
<code>req.params</code> captures values from <strong>URL path segments</strong>, <code>req.query</code> parses the query string, and <code>req.body</code> contains the parsed request payload.
Understanding which to use depends on where the data is sent by the client.
<pre><code>// GET /users/42?sort=name
app.get('/users/:id', (req, res) =&gt; {
  req.params.id;   // '42' — from URL path parameter
  req.query.sort;  // 'name' — from query string
});

// POST /users with JSON body
app.post('/users', express.json(), (req, res) =&gt; {
  req.body.name;   // from request body (needs body parser)
});</code></pre>
<code>req.params</code> comes from route segments, <code>req.query</code> from the <strong>query string</strong>, and <code>req.body</code> from the parsed request payload.
<code>req.body</code> requires a <strong>body-parsing middleware</strong> like <code>express.json()</code> or <code>express.urlencoded()</code> to be populated.`
                },
                {
                    q: "How do you serve static files in Express?",
                    a: `Use the built-in <code>express.static()</code> middleware to serve files like images, CSS, and JavaScript from a <strong>designated directory</strong>.
This middleware maps URL paths to file system paths and handles <strong>Content-Type headers</strong> automatically based on file extensions.
Multiple static directories can be configured, and they are checked in the order they are registered.
<pre><code>// Serve files from 'public' folder
app.use(express.static('public'));

// With a virtual path prefix
app.use('/assets', express.static('public'));

// Multiple static directories
app.use(express.static('public'));
app.use(express.static('uploads'));</code></pre>
Files are resolved relative to the directory from which you launch Node — use <code>path.join(__dirname, 'public')</code> for <strong>absolute paths</strong>.
For production, consider using a <strong>reverse proxy</strong> like Nginx to serve static files for better performance.`
                },
                {
                    q: "What is the Express Router and how do you use it?",
                    a: `<code>express.Router()</code> creates <strong>modular, mountable route handlers</strong> that act as mini-applications with their own middleware and routes.
Routers help organize large applications by grouping related routes into <strong>separate files</strong> and mounting them under a common prefix.
Each router instance is a complete middleware and routing system, sometimes called a "mini-app".
<pre><code>// routes/users.js
const router = require('express').Router();
router.get('/', (req, res) =&gt; res.json(users));
router.get('/:id', (req, res) =&gt; res.json(user));
module.exports = router;

// app.js
const userRoutes = require('./routes/users');
app.use('/api/users', userRoutes);</code></pre>
Routers support their own <strong>middleware stacks</strong>, so route-specific middleware can be applied within the router file.
This pattern scales well for large applications with many resource types and keeps the main <code>app.js</code> clean.`
                },
                {
                    q: "How do you handle form data and JSON in Express?",
                    a: `Express provides <strong>built-in middleware</strong> to parse incoming request bodies for both JSON and URL-encoded form data.
Prior to Express 4.16, the external <code>body-parser</code> package was required, but now parsing is built into Express itself.
These middleware functions must be registered <strong>before route handlers</strong> that need to access <code>req.body</code>.
<pre><code>// Parse JSON bodies
app.use(express.json());

// Parse URL-encoded form data
app.use(express.urlencoded({ extended: true }));

app.post('/submit', (req, res) =&gt; {
  console.log(req.body); // parsed body data
  res.json({ received: req.body });
});</code></pre>
For file uploads, use the <strong>multer</strong> middleware which handles <code>multipart/form-data</code> encoding.
The <code>extended: true</code> option uses the <code>qs</code> library for rich object and array parsing in form data.`
                },
                {
                    q: "How do you set response status codes and headers in Express?",
                    a: `Use <code>res.status()</code> to set <strong>HTTP status codes</strong> and <code>res.set()</code> or <code>res.header()</code> to set custom response headers.
These methods are <strong>chainable</strong>, allowing you to set the status and send the response in a single expression.
Express also provides convenience methods like <code>res.redirect()</code> for common response patterns.
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
Methods like <code>res.json()</code>, <code>res.send()</code>, and <code>res.sendFile()</code> automatically set appropriate <strong>Content-Type</strong> headers.
Always set the correct status code — using <code>200</code> for errors confuses clients and breaks proper error handling.`
                },
                {
                    q: "What is app.use() in Express and how does it work?",
                    a: `<code>app.use()</code> mounts <strong>middleware functions</strong> that execute for every incoming request matching the specified path.
If no path is provided, the middleware runs for <strong>all requests</strong>, making it ideal for logging, authentication, and body parsing.
Middleware registered with <code>app.use()</code> runs in the <strong>order it is defined</strong>, so registration order matters.
<pre><code>// Runs for ALL requests
app.use((req, res, next) =&gt; {
  console.log(\&#96;\${req.method} \${req.url}\&#96;);
  next();
});

// Runs only for /api/* routes
app.use('/api', authMiddleware);

// Mount a router
app.use('/api/users', userRouter);</code></pre>
Always call <code>next()</code> to pass control to the <strong>next handler</strong> in the chain, or the request will hang.
Use path-specific <code>app.use()</code> to apply middleware only to certain route groups, improving performance and security.`
                },
                {
                    q: "How do you handle template engines in Express?",
                    a: `Express supports <strong>template engines</strong> like EJS, Pug, and Handlebars for server-side HTML rendering.
Configure the engine using <code>app.set('view engine', ...)</code> and specify the views directory for template files.
Template engines allow embedding <strong>dynamic data</strong> into HTML pages before sending them to the client.
<pre><code>// Setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// views/index.ejs
// &lt;h1&gt;Hello &lt;%= name %&gt;&lt;/h1&gt;

app.get('/', (req, res) =&gt; {
  res.render('index', { name: 'World' });
});</code></pre>
Install the engine package (e.g., <code>npm i ejs</code>) and place templates in the <strong>views directory</strong>.
Express automatically calls the engine's render function and sends the resulting HTML in the response.`
                },
                {
                    q: "How do you enable CORS in an Express application?",
                    a: `Use the <strong>cors</strong> middleware package to enable <strong>Cross-Origin Resource Sharing</strong> for your API.
CORS headers tell browsers which cross-origin requests are allowed, which is essential when your frontend and backend are on different domains.
Without proper CORS configuration, browsers will block requests from different origins for security reasons.
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
Configure <code>origin</code>, <code>methods</code>, and <code>allowedHeaders</code> based on your <strong>security requirements</strong>.
For production, always specify exact allowed origins instead of using <code>*</code> to prevent unauthorized cross-origin access.`
                },
                {
                    q: "How do you handle 404 and error responses in Express?",
                    a: `Express handles <strong>404 errors</strong> by adding a catch-all middleware after all route definitions that responds when no route matches.
Error-handling middleware requires <strong>four parameters</strong> (err, req, res, next) and is placed at the end of the middleware stack.
This pattern ensures all unhandled requests and thrown errors are caught and responded to gracefully.
<pre><code>// Regular routes first
app.get('/users', (req, res) =&gt; res.json(users));

// 404 handler — catches unmatched routes
app.use((req, res) =&gt; {
  res.status(404).json({ error: 'Route not found' });
});

// Error handler — catches thrown errors
app.use((err, req, res, next) =&gt; {
  console.error(err.stack);
  res.status(err.status || 500).json({ error: err.message });
});</code></pre>
The 404 handler must be registered <strong>after all routes</strong> but before the error handler.
In the error handler, always set an appropriate <strong>status code</strong> and avoid exposing internal error details in production.`
                },
                {
                    q: "What is the difference between res.send(), res.json(), and res.end()?",
                    a: `These three methods end the response cycle but differ in how they handle the <strong>response body and headers</strong>.
<code>res.send()</code> is the most versatile, auto-detecting the content type from the argument type.
<code>res.json()</code> always serializes the payload as JSON, and <code>res.end()</code> sends no body.
<pre><code>// res.send() — auto-sets Content-Type based on argument
res.send('Hello');             // text/html
res.send({ name: 'Alice' });  // application/json
res.send(Buffer.from('data'));// application/octet-stream

// res.json() — always JSON with application/json header
res.json({ name: 'Alice' });
res.json(null);               // sends "null"

// res.end() — ends response with no body
res.status(204).end();</code></pre>
<code>res.json()</code> also handles <strong>special characters</strong> by escaping them and supports JSON replacer and spaces settings.
Prefer <code>res.json()</code> for API responses and <code>res.send()</code> for HTML or mixed content responses.`
                },
                {
                    q: "How do you implement route grouping and versioning in Express?",
                    a: `Route grouping uses <strong>Express Router</strong> instances mounted under version-specific prefixes for API versioning.
This approach keeps different API versions organized in <strong>separate modules</strong> and allows gradual deprecation of older versions.
It is the most common pattern for maintaining backward compatibility while evolving your API.
<pre><code>// routes/v1/users.js
const v1Router = require('express').Router();
v1Router.get('/users', (req, res) =&gt; res.json({ version: 1, users }));

// routes/v2/users.js
const v2Router = require('express').Router();
v2Router.get('/users', (req, res) =&gt; res.json({ version: 2, users, meta: {} }));

// app.js — mount versioned routers
app.use('/api/v1', v1Router);
app.use('/api/v2', v2Router);</code></pre>
Alternative versioning strategies include <strong>header-based</strong> (Accept header) and <strong>query parameter</strong> versioning.
Always provide clear documentation about which versions are supported and their <strong>deprecation timeline</strong>.`
                },
                {
                    q: "How do you gracefully shut down an Express server?",
                    a: `<strong>Graceful shutdown</strong> ensures all in-flight requests complete before the server closes and resources are cleaned up.
This prevents data corruption, broken responses, and connection leaks when deploying new versions or restarting the server.
Listen for <code>SIGTERM</code> and <code>SIGINT</code> signals to trigger the shutdown process.
<pre><code>const server = app.listen(3000, () =&gt; console.log('Running'));

function gracefulShutdown(signal) {
  console.log(\&#96;Received \${signal}. Shutting down gracefully...\&#96;);
  server.close(() =&gt; {
    console.log('HTTP server closed');
    // Close database connections, flush logs, etc.
    mongoose.connection.close(false, () =&gt; {
      console.log('DB connection closed');
      process.exit(0);
    });
  });

  // Force shutdown after timeout
  setTimeout(() =&gt; process.exit(1), 10000);
}

process.on('SIGTERM', () =&gt; gracefulShutdown('SIGTERM'));
process.on('SIGINT', () =&gt; gracefulShutdown('SIGINT'));</code></pre>
<code>server.close()</code> stops accepting new connections but allows <strong>existing requests to finish</strong>.
Set a <strong>timeout</strong> to force shutdown if requests take too long, preventing the process from hanging indefinitely.`
                },
                {
                    q: "What are Express application settings and how do you configure them?",
                    a: `Express application settings are configured using <code>app.set()</code> and retrieved with <code>app.get()</code> to control framework behavior.
These settings control features like <strong>view rendering</strong>, JSON formatting, proxy trust, and case sensitivity in routing.
Some settings are specific to Express while others can be used as a simple <strong>key-value configuration store</strong>.
<pre><code>// Built-in settings
app.set('view engine', 'ejs');
app.set('views', './templates');
app.set('json spaces', 2);          // Pretty-print JSON
app.set('trust proxy', true);        // Trust X-Forwarded-* headers
app.set('case sensitive routing', true);

// Disable powered-by header (security)
app.disable('x-powered-by');

// Check settings
console.log(app.get('env'));         // 'development' or 'production'
console.log(app.get('view engine')); // 'ejs'</code></pre>
Disabling <code>x-powered-by</code> is a <strong>security best practice</strong> as it hides the server technology from attackers.
Set <code>trust proxy</code> when behind a <strong>reverse proxy</strong> like Nginx to correctly resolve client IP addresses and protocol.`
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
                    a: `<strong>Middleware functions</strong> have access to the request object, response object, and the <code>next</code> function in the application's request-response cycle.
They can execute code, <strong>modify req/res objects</strong>, end the request-response cycle, or pass control to the next middleware.
Middleware is the backbone of Express applications, handling everything from parsing to authentication to error handling.
<pre><code>const logger = (req, res, next) =&gt; {
  console.log(\&#96;\${req.method} \${req.url}\&#96;);
  next(); // pass to next middleware
};

app.use(logger);
app.get('/', (req, res) =&gt; res.send('Home'));</code></pre>
Middleware executes in the <strong>order it is defined</strong>, forming a chain that each request passes through.
Forgetting to call <code>next()</code> will cause the request to <strong>hang</strong> and eventually time out.`
                },
                {
                    q: "What are the different types of middleware in Express?",
                    a: `Express has <strong>five types</strong> of middleware, each serving a specific purpose in the request-response pipeline.
Understanding these types helps you organize middleware correctly and apply best practices for each scenario.
Each type has a specific use case and registration pattern in the Express application.
<ul>
<li><strong>Application-level</strong> — bound to <code>app</code> via <code>app.use()</code> or <code>app.METHOD()</code></li>
<li><strong>Router-level</strong> — bound to <code>express.Router()</code> for modular route groups</li>
<li><strong>Error-handling</strong> — takes four arguments <code>(err, req, res, next)</code> for error processing</li>
<li><strong>Built-in</strong> — <code>express.json()</code>, <code>express.static()</code>, <code>express.urlencoded()</code></li>
<li><strong>Third-party</strong> — packages like <code>cors</code>, <code>helmet</code>, <code>morgan</code></li>
</ul>
Combining these middleware types creates a robust <strong>request processing pipeline</strong> for your application.
Third-party middleware extends Express with community-built solutions for common web development needs.`
                },
                {
                    q: "How do you create custom middleware in Express?",
                    a: `Custom middleware is a function that receives <code>req</code>, <code>res</code>, and <code>next</code> parameters for processing requests.
You can <strong>modify the request object</strong>, validate incoming data, check authentication, or add custom logic before reaching the route handler.
This pattern allows you to extract common functionality into reusable middleware functions.
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
});</code></pre>
Custom middleware can be applied <strong>globally</strong> with <code>app.use()</code> or to specific routes as inline middleware.
Always handle both the success and error paths to prevent request leaks and unhandled edge cases.`
                },
                {
                    q: "What is the next() function and what happens if you don't call it?",
                    a: `<code>next()</code> passes control to the <strong>next middleware</strong> in the stack, continuing the request-response cycle.
If you don't call it and don't send a response, the request will <strong>hang indefinitely</strong> and eventually time out.
You can also pass an error to <code>next(error)</code> to skip directly to the error-handling middleware.
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
Call <code>next('route')</code> to skip remaining middleware in the current route and jump to the <strong>next matching route</strong>.
Never call <code>next()</code> after sending a response — this causes the "headers already sent" error.`
                },
                {
                    q: "How does error-handling middleware work in Express?",
                    a: `Error-handling middleware has a special signature with <strong>four parameters</strong>: <code>(err, req, res, next)</code>.
Express recognizes this four-argument signature and <strong>routes errors</strong> to these handlers when <code>next(err)</code> is called.
This centralized error handling prevents error-handling code from being scattered across every route handler.
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
Define error handlers <strong>after all other</strong> middleware and routes so they catch errors from every source.
You can chain multiple error handlers for different error types like validation errors, auth errors, and server errors.`
                },
                {
                    q: "What is the middleware execution order and why does it matter?",
                    a: `Middleware executes in the <strong>exact order</strong> it is registered with <code>app.use()</code>, forming a sequential processing pipeline.
The order determines which middleware processes the request first, and incorrect ordering is a common source of bugs.
A typical Express application follows a specific middleware ordering pattern for proper request processing.
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
Placing middleware in the <strong>wrong order</strong> can cause parsing failures, missing authentication, or skipped logging.
Body parsers must come before routes, and error handlers must always be <strong>registered last</strong>.`
                },
                {
                    q: "What are some commonly used third-party middleware packages?",
                    a: `The Express ecosystem has a rich collection of <strong>third-party middleware</strong> packages that add essential features.
These packages follow the middleware pattern and can be installed via npm, then mounted with <code>app.use()</code>.
Using battle-tested middleware saves development time and provides <strong>production-ready</strong> implementations.
<ul>
<li><strong>helmet</strong> — sets security-related HTTP headers to protect against common attacks</li>
<li><strong>cors</strong> — enables Cross-Origin Resource Sharing for API access</li>
<li><strong>morgan</strong> — HTTP request logger with configurable output formats</li>
<li><strong>compression</strong> — gzip/deflate response compression for faster transfers</li>
<li><strong>express-rate-limit</strong> — rate limiting for API abuse prevention</li>
<li><strong>multer</strong> — handles multipart/form-data for file uploads</li>
</ul>
<pre><code>const helmet = require('helmet');
const morgan = require('morgan');
app.use(helmet());
app.use(morgan('combined'));</code></pre>
Always review middleware packages for security vulnerabilities and keep them updated.`
                },
                {
                    q: "How do you apply middleware to specific routes only?",
                    a: `Middleware can be applied to <strong>specific routes</strong> by passing it as an argument before the route handler function.
You can also use <code>app.use()</code> with a <strong>path prefix</strong> to apply middleware to all routes under that path.
Router-level middleware using <code>router.use()</code> scopes middleware to all routes within that router.
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
This pattern allows <strong>public routes</strong> to skip authentication while protecting private endpoints.
Multiple middleware functions can be chained for a single route, executing from left to right.`
                },
                {
                    q: "How do you implement rate limiting middleware?",
                    a: `<strong>Rate limiting</strong> restricts the number of requests a client can make within a time window, protecting against abuse and DDoS attacks.
It tracks requests by IP address or API key and returns a <code>429 Too Many Requests</code> status when the limit is exceeded.
This is essential for <strong>public APIs</strong> and authentication endpoints that are common targets for brute-force attacks.
<pre><code>const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                  // 100 requests per window
  message: { error: 'Too many requests, try again later' },
  standardHeaders: true,
  legacyHeaders: false
});

app.use('/api', limiter);</code></pre>
For production with multiple server instances, use a store like <strong>rate-limit-redis</strong> to share state across servers.
Consider setting different rate limits for different endpoints — stricter for login, more generous for data fetching.`
                },
                {
                    q: "How do you create configurable middleware using factory functions?",
                    a: `A <strong>middleware factory</strong> is a function that returns a middleware function, allowing you to customize behavior through options.
This pattern is called a <strong>closure-based factory</strong> and is used by virtually all third-party middleware packages.
It makes middleware reusable across different parts of your application with different configurations.
<pre><code>function requestLogger(options = {}) {
  const { format = 'short' } = options;
  return (req, res, next) =&gt; {
    if (format === 'short') {
      console.log(\&#96;\${req.method} \${req.url}\&#96;);
    } else {
      console.log(\&#96;\${req.method} \${req.url} - \${req.ip}\&#96;);
    }
    next();
  };
}

app.use(requestLogger({ format: 'detailed' }));</code></pre>
This pattern is used by packages like <code>cors(options)</code>, <code>morgan(format)</code>, and <code>rateLimit(config)</code>.
The outer function captures the <strong>configuration</strong> in a closure, making it available to every request handled by the middleware.`
                },
                {
                    q: "How do you handle async errors in Express middleware?",
                    a: `Express does not natively catch errors thrown inside <strong>async middleware</strong> or promise-based handlers.
Unhandled promise rejections will crash the process or silently fail instead of reaching the error handler.
You need to explicitly catch async errors and pass them to <code>next()</code> or use a wrapper utility.
<pre><code>// Problem: async errors are NOT caught by Express
app.get('/data', async (req, res) =&gt; {
  const data = await fetchData(); // If this throws, Express won't catch it
  res.json(data);
});

// Solution 1: try-catch
app.get('/data', async (req, res, next) =&gt; {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (err) {
    next(err);
  }
});

// Solution 2: wrapper function
const asyncHandler = (fn) =&gt; (req, res, next) =&gt;
  Promise.resolve(fn(req, res, next)).catch(next);

app.get('/data', asyncHandler(async (req, res) =&gt; {
  const data = await fetchData();
  res.json(data);
}));</code></pre>
The <strong>asyncHandler wrapper</strong> pattern eliminates repetitive try-catch blocks across all async routes.
Express 5 (upcoming) will natively handle async errors without requiring a wrapper.`
                },
                {
                    q: "What is the difference between app.use() and app.all()?",
                    a: `<code>app.use()</code> matches any route that <strong>starts with</strong> the specified path, while <code>app.all()</code> requires an <strong>exact path match</strong>.
<code>app.use()</code> is primarily for mounting middleware, whereas <code>app.all()</code> is for defining route handlers that respond to all HTTP methods.
This difference in path matching behavior is subtle but important for correct middleware application.
<pre><code>// app.use() — matches /api, /api/users, /api/anything
app.use('/api', (req, res, next) =&gt; {
  console.log('Matches any path starting with /api');
  next();
});

// app.all() — matches ONLY /api exactly
app.all('/api', (req, res) =&gt; {
  console.log('Only matches /api exactly');
  res.send('API root');
});

// app.all with pattern — matches /api/users for any HTTP method
app.all('/api/users', (req, res) =&gt; {
  res.json({ method: req.method });
});</code></pre>
Use <code>app.use()</code> for <strong>middleware</strong> that should apply to a family of routes under a prefix.
Use <code>app.all()</code> for <strong>route handlers</strong> that need to respond to every HTTP method on a specific path.`
                },
                {
                    q: "How do you implement request validation middleware?",
                    a: `<strong>Request validation middleware</strong> checks incoming data against defined rules before the request reaches the route handler.
Libraries like <strong>Joi</strong>, <strong>express-validator</strong>, and <strong>zod</strong> provide schema-based validation with detailed error messages.
Validation should happen early in the middleware chain to reject invalid requests before any business logic executes.
<pre><code>const Joi = require('joi');

function validate(schema) {
  return (req, res, next) =&gt; {
    const { error } = schema.validate(req.body, { abortEarly: false });
    if (error) {
      return res.status(400).json({
        errors: error.details.map(d =&gt; d.message)
      });
    }
    next();
  };
}

const userSchema = Joi.object({
  name: Joi.string().min(2).required(),
  email: Joi.string().email().required(),
  age: Joi.number().min(18)
});

app.post('/users', validate(userSchema), createUser);</code></pre>
The <strong>factory pattern</strong> allows the same validation middleware to be reused with different schemas for different routes.
Always validate on the server side even if client-side validation exists \u2014 client validation can be easily bypassed.`
                },
                {
                    q: "How do you implement response time tracking middleware?",
                    a: `<strong>Response time tracking</strong> middleware measures how long each request takes to process, which is essential for performance monitoring.
It works by recording the start time when the request arrives and calculating the duration when the response finishes.
The <code>res.on('finish')</code> event fires when the response has been fully sent to the client.
<pre><code>function responseTime(req, res, next) {
  const start = process.hrtime.bigint();

  res.on('finish', () =&gt; {
    const end = process.hrtime.bigint();
    const duration = Number(end - start) / 1e6; // Convert to ms
    console.log(\&#96;\${req.method} \${req.url} - \${duration.toFixed(2)}ms - \${res.statusCode}\&#96;);
  });

  next();
}

app.use(responseTime);

// Or use the response-time package
const responseTimeLib = require('response-time');
app.use(responseTimeLib((req, res, time) =&gt; {
  res.setHeader('X-Response-Time', \&#96;\${time.toFixed(2)}ms\&#96;);
}));</code></pre>
<code>process.hrtime.bigint()</code> provides <strong>nanosecond precision</strong> timing for accurate performance measurement.
Combine with a <strong>metrics system</strong> like Prometheus or StatsD to visualize response time trends over time.`
                },
                {
                    q: "How do you implement conditional middleware in Express?",
                    a: `<strong>Conditional middleware</strong> executes only when certain conditions are met, skipping processing for requests that don't need it.
This pattern improves performance by avoiding unnecessary middleware execution for routes that don't require it.
Common conditions include checking the request method, content type, environment, or custom flags.
<pre><code>// Skip middleware based on condition
function unless(middleware, ...paths) {
  return (req, res, next) =&gt; {
    if (paths.some(path =&gt; req.path.startsWith(path))) {
      return next(); // Skip middleware
    }
    middleware(req, res, next);
  };
}

// Apply auth to all routes EXCEPT /login and /register
app.use(unless(authenticate, '/login', '/register', '/public'));

// Environment-based middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Content-type based
app.use((req, res, next) =&gt; {
  if (req.is('application/json')) {
    express.json()(req, res, next);
  } else {
    next();
  }
});</code></pre>
The <strong>unless pattern</strong> is commonly used to exclude public routes from authentication middleware.
Packages like <code>express-unless</code> provide ready-made conditional middleware helpers with flexible matching options.`
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
                    a: `<strong>REST</strong> (Representational State Transfer) is an architectural style for designing networked applications with predictable, scalable APIs.
It defines a set of constraints that ensure APIs are <strong>stateless</strong>, resource-oriented, and use standard HTTP semantics.
Following REST principles makes APIs intuitive for developers and interoperable across different clients and platforms.
<ul>
<li><strong>Stateless</strong> — each request contains all needed information; no server-side sessions</li>
<li><strong>Resource-based</strong> — URLs represent resources (nouns), not actions (verbs)</li>
<li><strong>HTTP methods</strong> — use GET, POST, PUT, PATCH, DELETE for CRUD operations</li>
<li><strong>Uniform interface</strong> — consistent URL patterns and response formats across endpoints</li>
</ul>
<pre><code>GET    /api/users       // List users
POST   /api/users       // Create user
GET    /api/users/:id   // Get one user
PUT    /api/users/:id   // Replace user
DELETE /api/users/:id   // Delete user</code></pre>
Resources should use <strong>plural nouns</strong> in URLs and nest related resources logically.
Consistent API design reduces the learning curve for consumers and improves developer experience.`
                },
                {
                    q: "How do you structure a REST API project in Node.js?",
                    a: `A well-organized REST API separates concerns into <strong>distinct layers</strong>, each with a clear responsibility.
This architecture follows the <strong>MVC-like pattern</strong> with additional service and middleware layers for better separation.
Good project structure makes code maintainable, testable, and easier for team members to navigate.
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
<strong>Controllers</strong> handle HTTP concerns, <strong>services</strong> contain business logic, and <strong>models</strong> define data schemas.
This separation allows unit testing services independently from HTTP-specific code.`
                },
                {
                    q: "How do you implement pagination in a REST API?",
                    a: `<strong>Pagination</strong> limits the amount of data returned per request, preventing performance issues when dealing with large datasets.
It uses query parameters like <code>page</code> and <code>limit</code> to control which subset of results is returned.
Always include <strong>pagination metadata</strong> in the response so clients know how to navigate through the full result set.
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
For large datasets, <strong>cursor-based pagination</strong> using the last item's ID is more efficient than offset-based pagination.
Always set a <strong>maximum limit</strong> to prevent clients from requesting excessively large result sets.`
                },
                {
                    q: "What are HTTP status codes and which ones should a REST API use?",
                    a: `<strong>HTTP status codes</strong> communicate the result of a request to the client using standardized numeric codes.
Using the correct status code is fundamental to REST API design and helps clients handle responses programmatically.
Codes are grouped into five classes: <strong>1xx</strong> informational, <strong>2xx</strong> success, <strong>3xx</strong> redirection, <strong>4xx</strong> client error, <strong>5xx</strong> server error.
<ul>
<li><strong>200 OK</strong> — successful GET, PUT, PATCH requests</li>
<li><strong>201 Created</strong> — successful POST that creates a new resource</li>
<li><strong>204 No Content</strong> — successful DELETE with no response body</li>
<li><strong>400 Bad Request</strong> — invalid input or validation error</li>
<li><strong>401 Unauthorized</strong> — missing or invalid authentication credentials</li>
<li><strong>403 Forbidden</strong> — authenticated but lacking permission for the action</li>
<li><strong>404 Not Found</strong> — requested resource does not exist</li>
<li><strong>409 Conflict</strong> — duplicate resource or state conflict</li>
<li><strong>500 Internal Server Error</strong> — unhandled server error</li>
</ul>
Always return appropriate status codes to help clients handle responses correctly and implement proper error recovery.
Avoid using <code>200</code> for error responses — this breaks client-side error handling and API contracts.`
                },
                {
                    q: "How do you implement input validation in a REST API?",
                    a: `Use a validation library like <strong>Joi</strong> or <strong>express-validator</strong> to validate incoming request data before processing.
Validation ensures data integrity, prevents injection attacks, and provides <strong>meaningful error messages</strong> to API consumers.
Always validate on the <strong>server side</strong> regardless of client-side validation, as client checks can be easily bypassed.
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
Return <strong>400 Bad Request</strong> with descriptive error messages so clients can fix their input.
Extract validation into reusable middleware functions to keep route handlers clean and focused on business logic.`
                },
                {
                    q: "What is API versioning and how do you implement it?",
                    a: `<strong>API versioning</strong> allows you to make breaking changes without affecting existing clients who depend on the current contract.
There are several versioning strategies, each with different trade-offs for discoverability and implementation complexity.
URL-based versioning is the <strong>simplest and most widely adopted</strong> approach in the Node.js ecosystem.
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
Maintain older versions for a defined period and communicate the <strong>deprecation timeline</strong> to clients.
Always document version differences and provide <strong>migration guides</strong> when introducing breaking changes.`
                },
                {
                    q: "How do you handle filtering and sorting in a REST API?",
                    a: `Use <strong>query parameters</strong> to let clients filter and sort results dynamically based on their needs.
Filtering narrows the result set by field values, while sorting controls the order of returned items.
Always <strong>whitelist allowed fields</strong> for both filtering and sorting to prevent data exposure and injection attacks.
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
Prefix sort fields with <code>-</code> for <strong>descending order</strong> (e.g., <code>-price</code> for highest first).
Combine filtering with pagination to prevent returning unbounded result sets.`
                },
                {
                    q: "What is HATEOAS and how does it apply to REST APIs?",
                    a: `<strong>HATEOAS</strong> (Hypermedia as the Engine of Application State) means API responses include links to related resources and available actions.
It is the highest level of REST maturity (Level 3 of the Richardson Maturity Model) and makes APIs <strong>self-discoverable</strong>.
Clients navigate the API by following links rather than constructing URLs, reducing coupling between client and server.
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
HATEOAS makes APIs <strong>self-documenting</strong> and allows clients to discover actions dynamically without hardcoding URLs.
While powerful, full HATEOAS implementation adds complexity and is often simplified to include only essential navigation links.`
                },
                {
                    q: "How do you implement search functionality in a REST API?",
                    a: `Implement search using <strong>query parameters</strong> with text matching or full-text search capabilities for finding resources.
For simple searches, use database regex or LIKE queries. For complex searches, integrate a <strong>dedicated search engine</strong>.
Always sanitize and limit search input to prevent <strong>injection attacks</strong> and excessive resource consumption.
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
For advanced search needs, integrate <strong>Elasticsearch</strong> or <strong>Algolia</strong> for fast full-text search with relevance scoring.
Support field-specific searches and combine search with pagination for handling large result sets.`
                },
                {
                    q: "How do you document a REST API?",
                    a: `Use <strong>OpenAPI/Swagger</strong> to create interactive, standardized API documentation that stays in sync with your code.
Swagger generates a live UI where developers can explore endpoints, view schemas, and <strong>test requests</strong> directly.
API documentation should include endpoint descriptions, request/response schemas, authentication details, and example payloads.
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
Swagger UI provides a live, testable interface at <code>/docs</code> for exploring your API interactively.
Keep documentation <strong>updated alongside code changes</strong> — outdated docs are worse than no docs at all.`
                },
                {
                    q: "What is the difference between PUT and PATCH in REST APIs?",
                    a: `<strong>PUT</strong> replaces the entire resource with the provided data, while <strong>PATCH</strong> applies a partial update to specific fields.
PUT requires the client to send the <strong>complete resource</strong> representation, and missing fields are set to null or defaults.
PATCH is more efficient for updating individual fields and reduces the risk of accidentally overwriting data.
<pre><code>// PUT — replaces entire resource (all fields required)
app.put('/api/users/:id', async (req, res) =&gt; {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    req.body,           // Must contain ALL fields
    { new: true, overwrite: true }
  );
  res.json(user);
});

// PATCH — partial update (only changed fields)
app.patch('/api/users/:id', async (req, res) =&gt; {
  const user = await User.findByIdAndUpdate(
    req.params.id,
    { $set: req.body }, // Only updates provided fields
    { new: true }
  );
  res.json(user);
});</code></pre>
PUT is <strong>idempotent</strong> — calling it multiple times with the same data produces the same result.
Use PATCH for most update operations in practice, as clients rarely want to resend the entire resource.`
                },
                {
                    q: "How do you handle nested resources in REST API URLs?",
                    a: `<strong>Nested resources</strong> represent parent-child relationships in the URL structure, reflecting the data hierarchy.
The URL path should read naturally and indicate the <strong>ownership relationship</strong> between resources.
Avoid nesting more than two levels deep to keep URLs manageable and prevent tight coupling.
<pre><code>// Nested routes for related resources
app.get('/api/users/:userId/posts', getUserPosts);
app.get('/api/users/:userId/posts/:postId', getSpecificPost);
app.post('/api/users/:userId/posts', createUserPost);

// Implementation
app.get('/api/users/:userId/posts', async (req, res) =&gt; {
  const posts = await Post.find({ author: req.params.userId });
  res.json(posts);
});

// Alternative: flat routes with query filters
app.get('/api/posts?author=userId', getPostsByAuthor);</code></pre>
For deeply nested resources, prefer <strong>flat routes with query parameters</strong> over deeply nested URL paths.
Each resource should also be accessible at its own <strong>top-level endpoint</strong> (e.g., <code>/api/posts/:id</code>) for direct access.`
                },
                {
                    q: "How do you implement bulk operations in a REST API?",
                    a: `<strong>Bulk operations</strong> allow clients to create, update, or delete multiple resources in a single request.
They improve performance by reducing the number of HTTP round trips and enabling <strong>database batch operations</strong>.
Design bulk endpoints carefully with proper error handling for partial success scenarios.
<pre><code>// Bulk create
app.post('/api/users/bulk', async (req, res) =&gt; {
  const { users } = req.body;
  const results = await User.insertMany(users, { ordered: false });
  res.status(201).json({ created: results.length });
});

// Bulk update
app.patch('/api/users/bulk', async (req, res) =&gt; {
  const { updates } = req.body; // [{ id, changes }]
  const results = await Promise.allSettled(
    updates.map(({ id, changes }) =&gt;
      User.findByIdAndUpdate(id, changes, { new: true })
    )
  );
  res.json({
    succeeded: results.filter(r =&gt; r.status === 'fulfilled').length,
    failed: results.filter(r =&gt; r.status === 'rejected').length
  });
});</code></pre>
Report <strong>partial success</strong> clearly in the response, including which items succeeded and which failed.
Set reasonable <strong>batch size limits</strong> to prevent timeout and memory issues on the server.`
                },
                {
                    q: "What is idempotency and why is it important in REST APIs?",
                    a: `<strong>Idempotency</strong> means making the same request multiple times produces the same result as making it once.
This property is crucial for <strong>safe retries</strong> — if a network failure occurs, clients can resend the request without causing duplicates.
GET, PUT, DELETE, and HEAD are idempotent by design, while POST is not idempotent.
<pre><code>// Idempotent: PUT always sets the same value
app.put('/api/users/1', handler);
// Call 1: sets name to "Alice" → 200
// Call 2: sets name to "Alice" → 200 (same result)

// NOT idempotent: POST creates a new resource each time
app.post('/api/users', handler);
// Call 1: creates user → 201
// Call 2: creates ANOTHER user → 201 (different result)

// Making POST idempotent with idempotency keys
app.post('/api/payments', async (req, res) =&gt; {
  const idempotencyKey = req.headers['idempotency-key'];
  const existing = await Payment.findOne({ idempotencyKey });
  if (existing) return res.json(existing); // Return cached result
  const payment = await processPayment(req.body);
  await Payment.create({ ...payment, idempotencyKey });
  res.status(201).json(payment);
});</code></pre>
Use <strong>idempotency keys</strong> (unique client-generated IDs) to make POST requests safe to retry.
Payment APIs and financial operations should always implement idempotency to prevent <strong>duplicate transactions</strong>.`
                },
                {
                    q: "How do you implement rate limiting per user in a REST API?",
                    a: `<strong>Per-user rate limiting</strong> restricts API usage based on the authenticated user or API key rather than just IP address.
This is more accurate than IP-based limiting because multiple users may share an IP (corporate networks) or one user may use multiple IPs.
Implement different rate tiers for different <strong>subscription levels</strong> or user roles.
<pre><code>const rateLimit = require('express-rate-limit');

// Key generator based on user or API key
const apiLimiter = rateLimit({
  windowMs: 60 * 1000, // 1 minute
  max: (req) =&gt; {
    if (req.user?.plan === 'premium') return 1000;
    if (req.user?.plan === 'basic') return 100;
    return 20; // anonymous
  },
  keyGenerator: (req) =&gt; {
    return req.user?.id || req.headers['x-api-key'] || req.ip;
  },
  standardHeaders: true,
  message: { error: 'Rate limit exceeded', retryAfter: '60s' }
});

app.use('/api', authenticate, apiLimiter);</code></pre>
Return <strong>rate limit headers</strong> (<code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>) so clients can track their usage.
Use <strong>Redis</strong> as the backing store for consistent rate limiting across multiple server instances.`
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
                    a: `Express uses a <strong>centralized error-handling middleware</strong> with four parameters to catch and process errors from all routes.
This pattern consolidates error handling into a single location, keeping route handlers clean and focused on business logic.
Errors are forwarded to the handler by calling <code>next(err)</code> from any middleware or route in the chain.
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
Always pass errors to <code>next(err)</code> so they reach the error handler instead of crashing the process.
Never expose detailed error messages or stack traces to <strong>clients in production</strong>.`
                },
                {
                    q: "What is the difference between operational and programmer errors?",
                    a: `<strong>Operational errors</strong> are expected runtime problems like invalid input or network failures that can be handled gracefully.
<strong>Programmer errors</strong> are bugs in the code such as typos, null references, or logic errors that need to be fixed in the codebase.
Distinguishing between these two types is critical for deciding whether to recover gracefully or restart the process.
<ul>
<li><strong>Operational</strong> — handle gracefully with proper status codes and user-friendly messages</li>
<li><strong>Programmer</strong> — fix the code; crash and restart the process if necessary</li>
</ul>
<pre><code>// Operational — handle it
if (!user) return res.status(404).json({ error: 'User not found' });

// Programmer — bug, should not happen
const name = user.profile.name; // TypeError if user is null</code></pre>
Use <strong>custom error classes</strong> with an <code>isOperational</code> flag to distinguish between the two types in your error handler.
Programmer errors indicate corrupted state and the process should be restarted using a process manager like <strong>PM2</strong>.`
                },
                {
                    q: "How do you create custom error classes in Node.js?",
                    a: `Extend the built-in <code>Error</code> class to create <strong>custom error types</strong> with additional properties like status codes.
Custom errors allow your error handler to distinguish between different error types and respond with <strong>appropriate HTTP codes</strong>.
The <code>isOperational</code> flag helps determine whether the error is a recoverable runtime issue or a programming bug.
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
    super(\&#96;\${resource} not found\&#96;, 404);
  }
}

// Usage
throw new NotFoundError('User');</code></pre>
This lets your error handler distinguish <strong>operational errors</strong> from unexpected bugs using the <code>isOperational</code> flag.
<code>Error.captureStackTrace</code> ensures the stack trace points to where the error was created, not the Error constructor.`
                },
                {
                    q: "How do you handle uncaught exceptions and unhandled rejections?",
                    a: `Use <strong>process-level event handlers</strong> to catch errors that escape try/catch blocks and prevent silent crashes.
These events indicate serious issues — <code>uncaughtException</code> means synchronous code threw without a handler, and <code>unhandledRejection</code> means a promise rejected without a <code>.catch()</code>.
Your handler should log the error, clean up resources, and restart the process to avoid <strong>corrupted state</strong>.
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
Log the error details and clean up resources before exiting the process.
Use a process manager like <strong>PM2</strong> to automatically restart the process after it exits.`
                },
                {
                    q: "How do you handle async errors in Express without try/catch in every route?",
                    a: `Create a <strong>wrapper function</strong> that catches async errors and forwards them to the error handler automatically.
This eliminates the need for repetitive <code>try/catch</code> blocks in every async route handler.
The wrapper wraps the route handler in a <code>Promise.resolve()</code> and attaches a <code>.catch(next)</code> for forwarding errors.
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
This pattern keeps route handlers clean while ensuring all async errors reach the <strong>centralized error handler</strong>.
Popular packages like <code>express-async-errors</code> provide this behavior automatically without a wrapper function.`
                },
                {
                    q: "How do you implement graceful shutdown in a Node.js server?",
                    a: `<strong>Graceful shutdown</strong> ensures all in-flight requests complete and resources are properly cleaned up before the process exits.
This prevents broken responses, data corruption, and connection leaks during deployments or server restarts.
Listen for termination signals and close the server, database connections, and other resources in order.
<pre><code>const server = app.listen(3000);

function shutdown(signal) {
  console.log(\&#96;\${signal} received. Shutting down gracefully...\&#96;);
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
process.on('SIGINT', () =&gt; shutdown('SIGINT'));</code></pre>
<code>server.close()</code> stops accepting <strong>new connections</strong> while allowing existing requests to complete.
Set a <strong>timeout</strong> to force exit if requests take too long, preventing the process from hanging indefinitely.`
                },
                {
                    q: "What is the purpose of the express-async-errors package?",
                    a: `<code>express-async-errors</code> patches Express to automatically catch errors from <strong>async route handlers</strong> without needing a wrapper function.
It works by monkey-patching Express's internal <code>Layer.handle</code> method to wrap async functions with error catching.
This is the simplest approach — just require the package once and all async errors are forwarded automatically.
<pre><code>require('express-async-errors'); // Just require it — no setup

app.get('/users', async (req, res) =&gt; {
  const users = await User.find(); // If this throws,
  res.json(users);                  // error goes to handler
});

// Errors are automatically forwarded here
app.use((err, req, res, next) =&gt; {
  res.status(500).json({ error: err.message });
});</code></pre>
This eliminates the need for writing a custom <code>asyncHandler</code> wrapper utility.
<strong>Express 5</strong> (upcoming) will handle async errors natively, making this package unnecessary in the future.`
                },
                {
                    q: "How do you log errors effectively in a Node.js production application?",
                    a: `Use a <strong>structured logging library</strong> like <strong>Winston</strong> or <strong>Pino</strong> for production-grade error logging with severity levels and multiple transports.
Structured logs output JSON format, making them easy to parse, search, and analyze in log aggregation tools.
Never expose <strong>stack traces</strong> or internal error details to clients — log them server-side for debugging.
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
Include <strong>contextual information</strong> like request URL, user ID, and timestamp in every error log entry.
Integrate with services like <strong>Datadog</strong>, <strong>Sentry</strong>, or <strong>ELK Stack</strong> for centralized log management and alerting.`
                },
                {
                    q: "How do you handle 404 Not Found errors in Express?",
                    a: `Add a <strong>catch-all middleware</strong> after all route definitions to handle requests that don't match any defined route.
This middleware sits between your routes and the error handler, catching any request that falls through.
The 404 response should include the <strong>requested URL</strong> and HTTP method to help with debugging.
<pre><code>// All routes defined above...
app.use('/api/users', userRouter);
app.use('/api/products', productRouter);

// 404 handler — placed after all routes
app.use((req, res, next) =&gt; {
  res.status(404).json({
    error: 'Not Found',
    message: \&#96;Route \${req.method} \${req.url} not found\&#96;,
    status: 404
  });
});

// Error handler — placed last
app.use((err, req, res, next) =&gt; { ... });</code></pre>
This middleware catches any request that wasn't handled by <strong>previous routes or middleware</strong>.
For HTML applications, you can render a custom 404 page instead of returning JSON.`
                },
                {
                    q: "How do you validate and handle errors for MongoDB/Mongoose operations?",
                    a: `<strong>Mongoose</strong> provides built-in validation and emits specific error types that can be handled in your centralized error middleware.
Each error type maps to a specific <strong>HTTP status code</strong>, allowing you to return meaningful responses to API consumers.
Handling database errors separately ensures proper feedback for validation failures, duplicates, and invalid IDs.
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
Map database errors to appropriate HTTP status codes for <strong>meaningful client responses</strong>.
Consider creating helper functions or middleware that automatically maps common database errors to REST responses.`
                },
                {
                    q: "How do you implement error boundaries for different parts of an application?",
                    a: `<strong>Error boundaries</strong> isolate failures in different parts of the application so one failing component doesn't crash everything.
In Express, this is achieved by mounting separate error handlers on different <strong>router instances</strong>.
Each router can have its own error handler that processes errors specific to that domain.
<pre><code>// API router with its own error handler
const apiRouter = express.Router();
apiRouter.get('/users', asyncHandler(getUsers));
apiRouter.use((err, req, res, next) =&gt; {
  res.status(err.status || 500).json({ error: err.message });
});

// Web router with its own error handler
const webRouter = express.Router();
webRouter.get('/', renderHome);
webRouter.use((err, req, res, next) =&gt; {
  res.status(500).render('error', { message: err.message });
});

app.use('/api', apiRouter);
app.use('/', webRouter);</code></pre>
API errors return <strong>JSON responses</strong> while web errors render <strong>HTML error pages</strong>.
This separation ensures each part of the application handles errors in the format its consumers expect.`
                },
                {
                    q: "How do you implement retry logic for transient errors?",
                    a: `<strong>Retry logic</strong> automatically retries operations that fail due to temporary issues like network timeouts or database connection drops.
Use <strong>exponential backoff</strong> to increase the delay between retries, preventing overwhelming a recovering service.
Only retry <strong>transient errors</strong> — retrying permanent failures like 404s wastes resources.
<pre><code>async function withRetry(fn, options = {}) {
  const { retries = 3, delay = 1000, backoff = 2 } = options;
  
  for (let attempt = 1; attempt &lt;= retries; attempt++) {
    try {
      return await fn();
    } catch (err) {
      if (attempt === retries) throw err;
      
      const isTransient = err.code === 'ECONNRESET' ||
                          err.code === 'ETIMEDOUT' ||
                          err.status === 503;
      if (!isTransient) throw err;
      
      const waitTime = delay * Math.pow(backoff, attempt - 1);
      console.log(\&#96;Retry \${attempt}/\${retries} after \${waitTime}ms\&#96;);
      await new Promise(r =&gt; setTimeout(r, waitTime));
    }
  }
}

// Usage
const data = await withRetry(() =&gt; fetchFromAPI('/data'));</code></pre>
Add <strong>jitter</strong> (random variation) to backoff delays to prevent thundering herd problems.
Set a maximum number of retries and a maximum total timeout to prevent infinite retry loops.`
                },
                {
                    q: "How do you handle errors in event emitters?",
                    a: `<strong>EventEmitter</strong> errors must be handled explicitly — if an <code>error</code> event is emitted without a listener, Node.js crashes the process.
This is by design to prevent silent failures, but it means every EventEmitter should have an <code>error</code> event handler.
Use <code>emitter.on('error', handler)</code> to catch and handle errors from any EventEmitter-based object.
<pre><code>const EventEmitter = require('events');
const emitter = new EventEmitter();

// MUST add error handler — without it, error events crash the process
emitter.on('error', (err) =&gt; {
  console.error('Emitter error:', err.message);
});

emitter.emit('error', new Error('Something failed'));

// Streams are EventEmitters — handle their errors too
const stream = fs.createReadStream('missing-file.txt');
stream.on('error', (err) =&gt; {
  console.error('Stream error:', err.message);
});

// Using captureRejections for async event handlers
const emitter2 = new EventEmitter({ captureRejections: true });
emitter2[Symbol.for('nodejs.rejection')] = (err) =&gt; {
  console.error('Async rejection:', err);
};</code></pre>
Always attach <strong>error listeners</strong> to streams, sockets, database connections, and any EventEmitter.
Node.js 12+ supports <code>captureRejections</code> option to handle rejected promises in async event handlers.`
                },
                {
                    q: "How do you implement circuit breaker pattern for error handling?",
                    a: `The <strong>circuit breaker pattern</strong> prevents an application from repeatedly calling a failing service, allowing it time to recover.
It tracks failures and <strong>opens the circuit</strong> after a threshold, immediately rejecting requests instead of waiting for timeouts.
After a cooldown period, the circuit enters a <strong>half-open state</strong> to test if the service has recovered.
<pre><code>class CircuitBreaker {
  constructor(fn, options = {}) {
    this.fn = fn;
    this.failures = 0;
    this.threshold = options.threshold || 5;
    this.timeout = options.timeout || 30000;
    this.state = 'CLOSED';
    this.nextAttempt = 0;
  }

  async call(...args) {
    if (this.state === 'OPEN') {
      if (Date.now() &lt; this.nextAttempt) {
        throw new Error('Circuit breaker is OPEN');
      }
      this.state = 'HALF-OPEN';
    }
    try {
      const result = await this.fn(...args);
      this.reset();
      return result;
    } catch (err) {
      this.failures++;
      if (this.failures &gt;= this.threshold) {
        this.state = 'OPEN';
        this.nextAttempt = Date.now() + this.timeout;
      }
      throw err;
    }
  }

  reset() { this.failures = 0; this.state = 'CLOSED'; }
}

const apiBreaker = new CircuitBreaker(fetchExternalAPI);
const data = await apiBreaker.call('/endpoint');</code></pre>
Use libraries like <strong>opossum</strong> for production-ready circuit breakers with monitoring and fallback support.
Combine circuit breakers with <strong>retry logic</strong> for a robust fault-tolerance strategy.`
                },
                {
                    q: "How do you handle errors in child processes?",
                    a: `<strong>Child processes</strong> run in separate OS processes and communicate errors through events and exit codes.
The <code>error</code> event fires when the process fails to spawn, and the <code>exit</code> event provides the <strong>exit code</strong> for determining success or failure.
Always handle both <code>error</code> and <code>exit</code> events to avoid unhandled errors and zombie processes.
<pre><code>const { exec, spawn } = require('child_process');

// exec — captures error in callback
exec('npm test', (error, stdout, stderr) =&gt; {
  if (error) {
    console.error('Exit code:', error.code);
    console.error('stderr:', stderr);
    return;
  }
  console.log('stdout:', stdout);
});

// spawn — event-based error handling
const child = spawn('node', ['worker.js']);

child.on('error', (err) =&gt; {
  console.error('Failed to start process:', err.message);
});

child.stderr.on('data', (data) =&gt; {
  console.error('Worker error:', data.toString());
});

child.on('exit', (code, signal) =&gt; {
  if (code !== 0) console.error(\&#96;Process exited with code \${code}\&#96;);
});</code></pre>
An <strong>exit code of 0</strong> indicates success, while any non-zero code indicates an error.
Use <code>stderr</code> stream to capture error output from the child process for logging and debugging.`
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
                    a: `The <code>fs</code> module provides both <strong>asynchronous</strong> and <strong>synchronous</strong> methods for reading files from the file system.
The promise-based API (<code>fs.promises</code>) is the preferred approach for modern Node.js applications.
Always specify the encoding parameter to get a <strong>string</strong> instead of a raw Buffer object.
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
Always use the <strong>async version</strong> in servers to avoid blocking the event loop.
For large files, use <strong>streams</strong> instead of reading the entire file into memory at once.`
                },
                {
                    q: "How do you write files in Node.js?",
                    a: `Use <code>fs.writeFile()</code> to <strong>create or overwrite</strong> a file and <code>fs.appendFile()</code> to add content to an existing file.
Both methods accept an encoding parameter and support callback-based, promise-based, and synchronous variants.
File writing is one of the most common operations in Node.js for logging, data persistence, and configuration management.
<pre><code>const fs = require('fs').promises;

// Write (creates or overwrites)
await fs.writeFile('output.txt', 'Hello World', 'utf8');

// Append to existing file
await fs.appendFile('log.txt', 'New entry\\n', 'utf8');

// Write JSON
const data = { name: 'Alice', age: 30 };
await fs.writeFile('data.json', JSON.stringify(data, null, 2));</code></pre>
Use <code>{ flag: 'wx' }</code> with writeFile to <strong>fail if the file already exists</strong>, preventing accidental overwrites.
For high-frequency writes, consider using <strong>streams</strong> instead to avoid repeatedly opening and closing the file.`
                },
                {
                    q: "How do you work with directories in Node.js?",
                    a: `The <code>fs</code> module provides methods for <strong>creating, reading, and removing</strong> directories in the file system.
The <code>recursive</code> option in <code>mkdir</code> creates all parent directories if they don't exist, similar to <code>mkdir -p</code>.
Reading directories with <code>withFileTypes</code> option returns <strong>Dirent objects</strong> with methods to check file types.
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
await fs.rm('old-dir', { recursive: true, force: true });</code></pre>
Use <code>fs.rm()</code> with <code>{ recursive: true }</code> for removing directories with contents (Node.js 14+).
The <code>force</code> option prevents errors when the directory doesn't exist.`
                },
                {
                    q: "What is the path module and how do you use it?",
                    a: `The <code>path</code> module provides utilities for working with file and directory paths in a <strong>cross-platform</strong> way.
It handles differences between Windows (<code>\\</code>) and POSIX (<code>/</code>) path separators automatically.
Always use <code>path</code> methods instead of string concatenation to ensure paths work correctly across operating systems.
<pre><code>const path = require('path');

path.join('src', 'utils', 'index.js');   // 'src/utils/index.js'
path.resolve('src', 'app.js');            // '/full/path/src/app.js'
path.basename('/src/app.js');             // 'app.js'
path.dirname('/src/utils/index.js');      // '/src/utils'
path.extname('app.min.js');               // '.js'
path.parse('/src/app.js');
// { root:'/', dir:'/src', base:'app.js', ext:'.js', name:'app' }</code></pre>
Use <code>path.join()</code> for combining path segments and <code>path.resolve()</code> for creating <strong>absolute paths</strong>.
<code>path.parse()</code> is useful for extracting individual components like the file name, extension, and directory.`
                },
                {
                    q: "How do you watch for file changes in Node.js?",
                    a: `Use <code>fs.watch()</code> to monitor files or directories for changes in <strong>real time</strong>, triggering callbacks on modifications.
The API reports <code>rename</code> and <code>change</code> events, useful for implementing <strong>hot reloading</strong> and file synchronization.
The built-in <code>fs.watch</code> can be unreliable across platforms, so production use typically requires a third-party library.
<pre><code>const fs = require('fs');

// Watch a single file
fs.watch('config.json', (eventType, filename) =&gt; {
  console.log(\&#96;\${filename} changed: \${eventType}\&#96;);
});

// Watch a directory recursively
fs.watch('src', { recursive: true }, (event, filename) =&gt; {
  console.log(\&#96;\${event}: \${filename}\&#96;);
});

// Using chokidar (more reliable)
const chokidar = require('chokidar');
chokidar.watch('src').on('change', (path) =&gt; {
  console.log(\&#96;File changed: \${path}\&#96;);
});</code></pre>
Use <strong>chokidar</strong> for production file watching as it handles platform differences and provides a more reliable API.
Chokidar also supports <strong>glob patterns</strong>, ignored paths, and debouncing for batch changes.`
                },
                {
                    q: "How do you check if a file or directory exists?",
                    a: `Use <code>fs.access()</code> or <code>fs.stat()</code> to check file existence — the deprecated <code>fs.exists()</code> should not be used.
<code>fs.access()</code> checks if the file is accessible with specific permissions, while <code>fs.stat()</code> returns detailed <strong>file metadata</strong>.
The recommended approach is <strong>EAFP</strong> (Easier to Ask Forgiveness than Permission) — try the operation and handle the error.
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
Prefer trying the operation and handling the error over checking existence first, to avoid <strong>race conditions</strong>.
<code>fs.stat()</code> also provides <strong>timestamps</strong> like <code>mtime</code> (modified), <code>ctime</code> (changed), and <code>birthtime</code> (created).`
                },
                {
                    q: "How do you copy, move, and rename files in Node.js?",
                    a: `The <code>fs</code> module provides dedicated methods for <strong>file operations</strong> like copying, renaming, moving, and deleting.
These methods support both callback-based and promise-based APIs for flexibility in different coding styles.
File operations are commonly used in build scripts, data processing pipelines, and content management systems.
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
For cross-device moves, <strong>copy then delete</strong> the original, since <code>rename()</code> doesn't work across different file systems.
<code>fs.cp()</code> (Node.js 16+) copies directories recursively, replacing the need for third-party packages like <code>fs-extra</code>.`
                },
                {
                    q: "How do you handle file permissions in Node.js?",
                    a: `Use <code>fs.chmod()</code> to change file permissions and <code>fs.stat()</code> to read them, using <strong>octal notation</strong> for permission values.
Permissions control who can <strong>read, write, and execute</strong> files — critical for security-sensitive files like private keys.
Node.js follows the POSIX permission model used by Linux and macOS.
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
On Windows, only the <strong>writable attribute</strong> is supported — other permission bits are ignored.
Use <code>0o600</code> for private files and <code>0o644</code> for world-readable files as common permission patterns.`
                },
                {
                    q: "How do you read and write JSON files in Node.js?",
                    a: `Read JSON files with <code>fs.readFile</code> + <code>JSON.parse</code> and write with <code>JSON.stringify</code> + <code>fs.writeFile</code>.
This is the standard pattern for <strong>configuration files</strong>, data persistence, and settings management in Node.js.
Always use <strong>try/catch</strong> around <code>JSON.parse()</code> to handle malformed JSON files gracefully.
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
Using <code>require('./data.json')</code> automatically parses JSON but <strong>caches it</strong> — changes won't be reflected without cache clearing.
For large JSON files, consider using <strong>streaming JSON parsers</strong> like <code>JSONStream</code> to avoid loading the entire file into memory.`
                },
                {
                    q: "How do you create temporary files and directories in Node.js?",
                    a: `Use <code>fs.mkdtemp()</code> to create unique <strong>temporary directories</strong> and <code>os.tmpdir()</code> to get the system temp path.
Temporary files are essential for processing uploads, generating exports, running tests, and storing intermediate data.
Always <strong>clean up</strong> temporary files when done to prevent disk space exhaustion.
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
Use <code>try/finally</code> or process exit handlers to ensure <strong>cleanup always happens</strong>, even if errors occur.
The random suffix in <code>mkdtemp</code> prevents collisions when multiple processes create temp directories simultaneously.`
                },
                {
                    q: "How do you recursively traverse a directory tree in Node.js?",
                    a: `<strong>Recursive directory traversal</strong> visits every file and subdirectory in a directory tree, useful for search, builds, and batch processing.
Node.js 18.17+ provides <code>fs.readdir</code> with the <code>recursive</code> option, but older versions require manual recursion.
This pattern is commonly used in build tools, file search utilities, and code analysis scripts.
<pre><code>const fs = require('fs').promises;
const path = require('path');

// Node.js 18.17+ — built-in recursive readdir
const files = await fs.readdir('src', { recursive: true });

// Manual recursive traversal (works in all versions)
async function walkDir(dir) {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...await walkDir(fullPath));
    } else {
      files.push(fullPath);
    }
  }
  return files;
}

const allFiles = await walkDir('./src');
console.log(allFiles); // ['src/index.js', 'src/utils/helper.js']</code></pre>
For large directory trees, consider using <strong>streams</strong> or generators to avoid loading all paths into memory.
Libraries like <strong>glob</strong> and <strong>fast-glob</strong> provide pattern-based file matching with built-in recursion.`
                },
                {
                    q: "How do you handle file uploads in a Node.js server?",
                    a: `<strong>File uploads</strong> use <code>multipart/form-data</code> encoding and require specialized middleware to parse the incoming data.
The <strong>multer</strong> package is the most popular middleware for handling file uploads in Express applications.
It provides control over file size limits, allowed file types, and <strong>storage destinations</strong>.
<pre><code>const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) =&gt; cb(null, 'uploads/'),
  filename: (req, file, cb) =&gt; {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB limit
  fileFilter: (req, file, cb) =&gt; {
    const allowed = ['image/jpeg', 'image/png', 'image/gif'];
    cb(null, allowed.includes(file.mimetype));
  }
});

app.post('/upload', upload.single('avatar'), (req, res) =&gt; {
  res.json({ file: req.file.filename });
});</code></pre>
Always validate <strong>file types</strong> and set <strong>size limits</strong> to prevent malicious uploads and storage abuse.
For cloud deployments, use <code>multer-s3</code> to upload directly to <strong>S3</strong> without saving to local disk.`
                },
                {
                    q: "How do you use the fs/promises API in modern Node.js?",
                    a: `The <code>fs/promises</code> API provides <strong>promise-based</strong> versions of all file system methods, enabling clean async/await syntax.
Introduced in Node.js 10 and stabilized in Node.js 14, it is the <strong>recommended approach</strong> for all new code.
It eliminates callback nesting and integrates naturally with modern error handling patterns.
<pre><code>// Import the promises API directly
const fs = require('node:fs/promises');

async function processFile(filePath) {
  try {
    // Read file
    const content = await fs.readFile(filePath, 'utf8');
    
    // Process content
    const processed = content.toUpperCase();
    
    // Write result
    await fs.writeFile('output.txt', processed);
    
    // Get file info
    const stats = await fs.stat('output.txt');
    console.log('Written:', stats.size, 'bytes');
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.error('File not found:', filePath);
    } else {
      throw err;
    }
  }
}</code></pre>
Common error codes include <strong>ENOENT</strong> (not found), <strong>EACCES</strong> (permission denied), and <strong>EEXIST</strong> (already exists).
The <code>node:</code> prefix (<code>node:fs/promises</code>) is recommended for clarity in Node.js 16+.`
                },
                {
                    q: "How do you use file descriptors in Node.js?",
                    a: `<strong>File descriptors</strong> are low-level numeric identifiers for open files, providing fine-grained control over read/write operations.
The <code>fs.open()</code> method returns a file handle that supports <strong>positioned reads and writes</strong> within the file.
File descriptors are useful when you need to read specific portions of a file or perform multiple operations efficiently.
<pre><code>const fs = require('node:fs/promises');

async function partialRead(filePath) {
  const handle = await fs.open(filePath, 'r');
  try {
    // Read 100 bytes starting at position 50
    const buffer = Buffer.alloc(100);
    const { bytesRead } = await handle.read(buffer, 0, 100, 50);
    console.log('Read', bytesRead, 'bytes:', buffer.toString('utf8', 0, bytesRead));
    
    // Get file stats through handle
    const stats = await handle.stat();
    console.log('File size:', stats.size);
  } finally {
    await handle.close(); // Always close the handle
  }
}

// Using file handle for efficient writes
const writeHandle = await fs.open('output.txt', 'w');
await writeHandle.write('Hello ');
await writeHandle.write('World');
await writeHandle.close();</code></pre>
Always close file handles in a <code>finally</code> block to prevent <strong>file descriptor leaks</strong>.
Open file descriptors count against the system limit \u2014 leaking them can cause <strong>EMFILE</strong> (too many open files) errors.`
                },
                {
                    q: "What is the difference between fs.readFile() and fs.createReadStream()?",
                    a: `<code>fs.readFile()</code> reads the <strong>entire file into memory</strong> at once, while <code>fs.createReadStream()</code> reads it in chunks using a stream.
For small files (under a few MB), <code>readFile</code> is simpler and more convenient to use.
For large files, streams are <strong>essential</strong> to avoid exhausting available memory and crashing the process.
<pre><code>const fs = require('fs');

// readFile — loads entire file into memory
// Good for small files (&lt; 10MB)
const data = await fs.promises.readFile('small.json', 'utf8');

// createReadStream — processes in chunks
// Essential for large files
const stream = fs.createReadStream('large-video.mp4');
let totalBytes = 0;
stream.on('data', (chunk) =&gt; {
  totalBytes += chunk.length;
  // Process chunk without loading entire file
});
stream.on('end', () =&gt; console.log('Total:', totalBytes));

// Stream to HTTP response (very efficient)
app.get('/download', (req, res) =&gt; {
  fs.createReadStream('large-file.zip').pipe(res);
});</code></pre>
Use <code>readFile</code> for config files, templates, and small data files under <strong>10MB</strong>.
Use <code>createReadStream</code> for large files, file downloads, and any scenario where memory efficiency matters.`
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
                    a: `<strong>Streams</strong> are objects that let you read or write data piece by piece (chunks) instead of loading everything into memory at once.
They follow an <strong>event-driven architecture</strong> and are fundamental to Node.js I/O operations.
The difference between loading an entire file and streaming it is critical for memory-efficient applications.
<pre><code>const fs = require('fs');

// Without streams — loads entire file into memory
const data = fs.readFileSync('large-file.txt');

// With streams — processes in chunks
const stream = fs.createReadStream('large-file.txt');
stream.on('data', (chunk) =&gt; console.log(chunk.length));
stream.on('end', () =&gt; console.log('Done'));</code></pre>
Streams are essential for handling <strong>large files</strong>, network data, and real-time processing without exhausting memory.
They also enable <strong>composability</strong> — multiple streams can be chained together to build complex data processing pipelines.`
                },
                {
                    q: "What are the four types of streams in Node.js?",
                    a: `Node.js has four fundamental stream types:
<ul>
<li><strong>Readable</strong> — source of data (e.g., <code>fs.createReadStream</code>, <code>http.IncomingMessage</code>)</li>
<li><strong>Writable</strong> — destination for data (e.g., <code>fs.createWriteStream</code>, <code>http.ServerResponse</code>)</li>
<li><strong>Duplex</strong> — both readable and writable (e.g., TCP sockets)</li>
<li><strong>Transform</strong> — duplex stream that modifies data passing through (e.g., <code>zlib.createGzip</code>)</li>
</ul>
Here is an example of a <strong>Transform</strong> stream that converts chunks to uppercase:
<pre><code>const { Transform } = require('stream');
const upperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});</code></pre>
Each stream type extends <code>EventEmitter</code> and emits events like <strong>data</strong>, <strong>end</strong>, <strong>error</strong>, and <strong>finish</strong>.`
                },
                {
                    q: "How does the pipe() method work with streams?",
                    a: `<code>pipe()</code> connects a <strong>readable stream</strong> to a <strong>writable stream</strong>, handling data flow and backpressure automatically.
It returns the destination stream, which enables <strong>chaining</strong> multiple pipe calls together.
This pattern is used extensively for file processing, compression, and HTTP responses.
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
The main limitation of <code>pipe()</code> is that it does <strong>not forward errors</strong> through the chain.
Use <code>pipeline()</code> from the <code>stream</code> module for proper error handling and cleanup.`
                },
                {
                    q: "What is backpressure in streams and how is it handled?",
                    a: `<strong>Backpressure</strong> occurs when a writable stream cannot process data as fast as the readable stream produces it.
Without proper handling, data accumulates in memory and can cause the process to <strong>run out of memory</strong>.
Manual backpressure handling involves pausing the readable stream and listening for the <strong>drain</strong> event.
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
Using <code>pipe()</code> or <code>pipeline()</code> handles backpressure <strong>automatically</strong> behind the scenes.
Manual handling is only needed when you process chunks with custom logic between the read and write operations.`
                },
                {
                    q: "What is a Buffer in Node.js?",
                    a: `A <strong>Buffer</strong> is a fixed-size chunk of memory allocated outside the V8 heap, used to handle raw binary data like files, network packets, and images.
Buffers were introduced because JavaScript originally had no mechanism for reading or manipulating <strong>binary data</strong>.
They provide methods for creating, reading, writing, and comparing byte sequences.
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
Buffers represent binary data and can be converted to strings with <code>.toString(encoding)</code>.
Supported encodings include <strong>utf8</strong>, <strong>base64</strong>, <strong>hex</strong>, and <strong>ascii</strong>.`
                },
                {
                    q: "How do you use the pipeline() function for stream error handling?",
                    a: `<code>stream.pipeline()</code> connects streams and provides <strong>proper error handling and cleanup</strong>, unlike <code>pipe()</code>.
If any stream in the pipeline errors, all streams are <strong>automatically destroyed</strong> to prevent memory leaks.
The promise-based version from <code>stream/promises</code> integrates cleanly with async/await.
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
Always prefer <code>pipeline()</code> over <code>.pipe()</code> in production code.
It handles <strong>backpressure</strong>, <strong>error propagation</strong>, and <strong>stream cleanup</strong> all in one utility.`
                },
                {
                    q: "How do you create a custom Readable stream?",
                    a: `Custom <strong>Readable streams</strong> are created by extending the <code>Readable</code> class and implementing the <code>_read()</code> method.
The <code>_read()</code> method is called automatically when the consumer needs more data from the stream.
You push data into the internal buffer using <code>this.push()</code> and signal the end with <code>this.push(null)</code>.
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
Pushing <code>null</code> signals the <strong>end of the stream</strong> and triggers the <code>end</code> event.
The <code>highWaterMark</code> option controls the internal buffer size and affects when <code>_read()</code> is called.`
                },
                {
                    q: "How do you create a Transform stream?",
                    a: `<strong>Transform streams</strong> modify data as it passes through by implementing the <code>_transform()</code> method.
Each chunk is processed and optionally pushed downstream using <code>this.push()</code> or the <code>callback</code>.
Setting <code>objectMode: true</code> allows the stream to pass JavaScript objects instead of strings or Buffers.
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
The <code>_flush()</code> method can be implemented to push remaining data when the stream ends.
Transform streams are ideal for <strong>data conversion</strong>, <strong>filtering</strong>, and <strong>aggregation</strong> in processing pipelines.`
                },
                {
                    q: "How do you stream data in an HTTP response?",
                    a: `Piping a readable stream directly to the HTTP <strong>response object</strong> efficiently sends large files or generated data.
The response object in Express (and raw HTTP) is a <strong>writable stream</strong>, so it works seamlessly with <code>pipe()</code>.
This approach avoids loading entire files into memory before sending them to the client.
<pre><code>const fs = require('fs');
const path = require('path');

app.get('/download/:file', (req, res) =&gt; {
  const filePath = path.join(__dirname, 'files', req.params.file);
  const stat = fs.statSync(filePath);

  res.set({
    'Content-Type': 'application/octet-stream',
    'Content-Length': stat.size,
    'Content-Disposition': \&#96;attachment; filename="\${req.params.file}"\&#96;
  });

  fs.createReadStream(filePath).pipe(res);
});

// Stream JSON array
app.get('/users', (req, res) =&gt; {
  const cursor = User.find().cursor();
  cursor.pipe(new JSONArrayTransform()).pipe(res);
});</code></pre>
Streaming is especially important for <strong>video</strong>, <strong>audio</strong>, and large file downloads.
Always set appropriate headers like <code>Content-Type</code> and <code>Content-Disposition</code> before piping.`
                },
                {
                    q: "What is the difference between Buffer.alloc() and Buffer.allocUnsafe()?",
                    a: `<code>Buffer.alloc()</code> creates a <strong>zero-filled buffer</strong> (safe), while <code>Buffer.allocUnsafe()</code> skips initialization for better performance but may contain old memory data.
The key difference is <strong>security vs. speed</strong> — uninitialized buffers can leak sensitive data from previous memory allocations.
Always prefer <code>alloc()</code> unless you have a specific performance reason and immediately overwrite the entire buffer.
<pre><code>// Safe — filled with zeros
const safe = Buffer.alloc(10);
console.log(safe); // &lt;Buffer 00 00 00 00 00 00 00 00 00 00&gt;

// Unsafe — may contain old data, faster
const unsafe = Buffer.allocUnsafe(10);
// Must fill before reading to avoid data leaks
unsafe.fill(0);

// From existing data (always safe)
const buf = Buffer.from('Hello World');</code></pre>
Use <code>Buffer.alloc()</code> by default for <strong>security</strong>.
Only use <code>allocUnsafe()</code> when performance is critical and you immediately overwrite the entire buffer contents.`
                },
                {
                    q: "How do you use async iterators with streams in Node.js?",
                    a: `<strong>Async iterators</strong> provide a modern, clean way to consume readable streams using <code>for await...of</code> loops.
Every readable stream in Node.js implements the <strong>async iterable protocol</strong> since Node.js 10.
This approach simplifies stream consumption by eliminating manual event listener management.
<pre><code>const fs = require('fs');
const readline = require('readline');

// Async iteration over a readable stream
async function processFile(filePath) {
  const stream = fs.createReadStream(filePath, { encoding: 'utf8' });
  
  for await (const chunk of stream) {
    console.log('Chunk:', chunk.length, 'bytes');
  }
  console.log('Stream finished');
}

// Line-by-line reading with readline
async function readLines(filePath) {
  const rl = readline.createInterface({
    input: fs.createReadStream(filePath),
    crlfDelay: Infinity
  });
  
  let lineNum = 0;
  for await (const line of rl) {
    lineNum++;
    console.log(lineNum + ':', line);
  }
}</code></pre>
Async iterators handle <strong>backpressure</strong> automatically — the stream pauses while the loop body executes.
Errors thrown inside the loop will properly destroy the stream and release resources.`
                },
                {
                    q: "What is the highWaterMark option in streams?",
                    a: `The <strong>highWaterMark</strong> option sets the maximum number of bytes (or objects in object mode) that a stream will buffer internally.
It acts as a <strong>threshold</strong> — when the buffer fills to this level, the stream signals backpressure.
The default is <strong>16KB</strong> for byte streams and <strong>16 objects</strong> for object mode streams.
<pre><code>const fs = require('fs');
const { Readable } = require('stream');

// Custom highWaterMark for reading large files
const stream = fs.createReadStream('large.log', {
  highWaterMark: 64 * 1024  // 64KB chunks instead of default 16KB
});

// Object mode stream with custom highWaterMark
const objectStream = new Readable({
  objectMode: true,
  highWaterMark: 100,  // Buffer up to 100 objects
  read() {}
});

// Writable stream — write() returns false when buffer is full
const writable = fs.createWriteStream('output.txt', {
  highWaterMark: 32 * 1024  // 32KB write buffer
});

const canWrite = writable.write(data);
if (!canWrite) {
  // Buffer full, wait for drain event
  await new Promise(resolve => writable.once('drain', resolve));
}</code></pre>
A higher value uses more <strong>memory</strong> but reduces the number of I/O operations.
A lower value reduces memory usage but increases the frequency of read/write system calls.`
                },
                {
                    q: "How do you implement a Writable stream in Node.js?",
                    a: `Custom <strong>Writable streams</strong> are created by extending the <code>Writable</code> class and implementing the <code>_write()</code> method.
The <code>_write()</code> method receives each chunk and must call the <code>callback</code> when processing is complete.
The optional <code>_final()</code> method runs before the stream closes, useful for flushing remaining data.
<pre><code>const { Writable } = require('stream');

class DatabaseWriter extends Writable {
  constructor(db) {
    super({ objectMode: true });
    this.db = db;
    this.batch = [];
  }
  
  _write(record, encoding, callback) {
    this.batch.push(record);
    if (this.batch.length >= 100) {
      this.db.insertMany(this.batch)
        .then(() => { this.batch = []; callback(); })
        .catch(callback);
    } else {
      callback();
    }
  }
  
  _final(callback) {
    // Flush remaining records
    if (this.batch.length > 0) {
      this.db.insertMany(this.batch)
        .then(() => callback())
        .catch(callback);
    } else {
      callback();
    }
  }
}

const writer = new DatabaseWriter(db);
dataStream.pipe(writer);</code></pre>
Passing an error to the <code>callback</code> signals a stream error and triggers the <strong>error</strong> event.
The <code>_writev()</code> method can be implemented to handle <strong>multiple chunks</strong> at once for batch processing.`
                },
                {
                    q: "How do you use the Readable.from() utility to create streams from iterables?",
                    a: `<code>Readable.from()</code> creates a readable stream from any <strong>iterable</strong> or <strong>async iterable</strong>, including arrays, generators, and async generators.
It provides a convenient way to convert existing data sources into streams without creating a custom class.
This utility was added in Node.js 12 and is commonly used for testing and data transformation.
<pre><code>const { Readable } = require('stream');
const { pipeline } = require('stream/promises');
const fs = require('fs');

// From an array
const arrayStream = Readable.from(['hello\\n', 'world\\n']);
arrayStream.pipe(process.stdout);

// From a generator function
function* generateNumbers(max) {
  for (let i = 0; i <= max; i++) {
    yield i + '\\n';
  }
}
Readable.from(generateNumbers(5)).pipe(process.stdout);

// From an async generator (e.g., paginated API)
async function* fetchPages(url) {
  let page = 1;
  while (true) {
    const res = await fetch(url + '?page=' + page);
    const data = await res.json();
    if (data.length === 0) break;
    yield JSON.stringify(data) + '\\n';
    page++;
  }
}

await pipeline(
  Readable.from(fetchPages('https://api.example.com/items')),
  fs.createWriteStream('all-items.json')
);</code></pre>
<code>Readable.from()</code> automatically wraps each yielded value as a stream chunk.
Async generators are especially powerful for streaming <strong>paginated API results</strong> or database cursors.`
                },
                {
                    q: "How do you use the stream.compose() method to build stream pipelines?",
                    a: `<code>stream.compose()</code> combines multiple <strong>Transform</strong> and <strong>Duplex</strong> streams into a single composite stream.
Introduced in Node.js 16, it creates a reusable pipeline that behaves as a single transform stream.
This enables building <strong>modular</strong> data processing stages that can be composed together.
<pre><code>const { compose } = require('stream');
const { Transform } = require('stream');

// Individual transform stages
const parseCSV = new Transform({
  objectMode: true,
  transform(chunk, enc, cb) {
    const fields = chunk.toString().trim().split(',');
    cb(null, { name: fields[0], age: Number(fields[1]) });
  }
});

const filterAdults = new Transform({
  objectMode: true,
  transform(obj, enc, cb) {
    if (obj.age >= 18) cb(null, obj);
    else cb(); // Skip minors
  }
});

const toJSON = new Transform({
  objectMode: true,
  transform(obj, enc, cb) {
    cb(null, JSON.stringify(obj) + '\\n');
  }
});

// Compose into a single reusable stream
const processCSV = compose(parseCSV, filterAdults, toJSON);

// Use the composed stream in a pipeline
fs.createReadStream('people.csv')
  .pipe(processCSV)
  .pipe(fs.createWriteStream('adults.json'));</code></pre>
Composed streams <strong>propagate errors</strong> and handle backpressure across all stages automatically.
This pattern promotes <strong>separation of concerns</strong> by encapsulating each processing step in its own transform.`
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
                    a: `<strong>JWT (JSON Web Token)</strong> is a compact, self-contained token format used for securely transmitting information between parties as a JSON object.
It consists of three parts: <strong>Header</strong> (algorithm), <strong>Payload</strong> (claims/data), and <strong>Signature</strong> (verification).
JWTs are <strong>stateless</strong> — no server-side session storage is needed, making them ideal for distributed systems.
<pre><code>// JWT structure: header.payload.signature
// eyJhbGciOiJIUzI1NiJ9.eyJ1c2VySWQiOjF9.signature

const jwt = require('jsonwebtoken');

// Create token
const token = jwt.sign({ userId: 1 }, 'secret', { expiresIn: '1h' });

// Verify token
const decoded = jwt.verify(token, 'secret');
console.log(decoded.userId); // 1</code></pre>
The header specifies the signing algorithm, the payload contains the <strong>claims</strong>, and the signature ensures integrity.
JWTs are commonly used for <strong>authentication</strong>, <strong>authorization</strong>, and <strong>information exchange</strong> in web applications.`
                },
                {
                    q: "How do you implement user registration with password hashing?",
                    a: `Use <strong>bcrypt</strong> to hash passwords before storing them — never store plaintext passwords in any database.
Bcrypt generates a unique <strong>salt</strong> per hash automatically, preventing rainbow table attacks.
A salt round value of <strong>10-12</strong> provides a good balance between security and performance.
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
Higher salt rounds increase computation time <strong>exponentially</strong>, making brute-force attacks prohibitively expensive.
Always validate password strength on the server side before hashing.`
                },
                {
                    q: "How do you implement login and token generation?",
                    a: `Verify user credentials against stored <strong>hashed passwords</strong> and issue a JWT on successful authentication.
Return the <strong>same error message</strong> for wrong email or password to prevent user enumeration attacks.
Store the JWT secret in <strong>environment variables</strong> — never hardcode it in source code.
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
The <code>expiresIn</code> claim ensures tokens become invalid after the specified duration.
Include only <strong>essential data</strong> in the payload — user ID and role, never passwords or sensitive information.`
                },
                {
                    q: "How do you create authentication middleware to protect routes?",
                    a: `Authentication middleware extracts the JWT from the <strong>Authorization header</strong>, verifies it, and attaches the decoded user to the request object.
It follows the <strong>Bearer token</strong> scheme — the header format is <code>Authorization: Bearer &lt;token&gt;</code>.
Protected routes are shielded by adding this middleware before the route handler.
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
});</code></pre>
The middleware catches both <strong>invalid</strong> and <strong>expired</strong> tokens with the same error handler.
Attaching the decoded token to <code>req.user</code> makes user data available to all subsequent middleware and route handlers.`
                },
                {
                    q: "How do you implement role-based access control (RBAC)?",
                    a: `<strong>Role-based access control</strong> restricts endpoint access based on user roles encoded in the JWT payload.
The <code>authorize</code> middleware checks the user's role after authentication and returns <strong>403 Forbidden</strong> if unauthorized.
It uses a <strong>closure</strong> to accept a variable list of allowed roles, making it highly reusable.
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
Encode the user's role in the JWT payload during login for <strong>stateless</strong> authorization checks.
For complex permission systems, use a permissions array or a library like <strong>casl</strong>.`
                },
                {
                    q: "What are refresh tokens and how do you implement them?",
                    a: `<strong>Refresh tokens</strong> are long-lived tokens used to obtain new access tokens without requiring re-login.
They improve security by keeping <strong>access token lifetimes short</strong> (typically 15 minutes) while maintaining user sessions.
Refresh tokens must be stored securely in the database and validated on each use.
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
});</code></pre>
Implement <strong>refresh token rotation</strong> — issue a new refresh token with each access token refresh.
Delete all stored refresh tokens when a user logs out or changes their password.`
                },
                {
                    q: "How do you implement OAuth 2.0 / social login with Passport.js?",
                    a: `<strong>Passport.js</strong> is authentication middleware that supports 500+ strategies including Google, GitHub, and Facebook OAuth.
It abstracts the OAuth flow into a <strong>strategy pattern</strong> where each provider has its own strategy module.
After authentication, you typically generate a JWT for subsequent API requests.
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
  res.redirect(\&#96;/dashboard?token=\${token}\&#96;);
});</code></pre>
Store the OAuth <strong>client ID and secret</strong> in environment variables, never in source code.
Use <code>passport.serializeUser()</code> and <code>passport.deserializeUser()</code> for session-based authentication.`
                },
                {
                    q: "How do you securely store and manage JWT secrets?",
                    a: `JWT secrets must be <strong>strong</strong>, <strong>unique</strong>, and stored securely — never hardcoded in source code.
Use cryptographically random strings of at least <strong>256 bits</strong> for signing keys.
In production environments, use a <strong>secrets manager</strong> like AWS Secrets Manager or HashiCorp Vault.
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
                    a: `Since JWTs are <strong>stateless</strong>, you cannot invalidate them directly on the server side.
The most common approach is <strong>token blacklisting</strong> using a fast in-memory store like Redis.
The blacklisted token is stored with a TTL matching its remaining expiration time.
<pre><code>// Token blacklist using Redis
const redis = require('redis');
const client = redis.createClient();

app.post('/logout', authenticate, async (req, res) =&gt; {
  const token = req.headers.authorization.split(' ')[1];
  const decoded = jwt.decode(token);
  const ttl = decoded.exp - Math.floor(Date.now() / 1000);

  // Blacklist token until it expires
  await client.setEx(\&#96;blacklist:\${token}\&#96;, ttl, 'true');
  res.json({ message: 'Logged out' });
});

// Check blacklist in auth middleware
const isBlacklisted = await client.get(\&#96;blacklist:\${token}\&#96;);
if (isBlacklisted) return res.status(401).json({ error: 'Token revoked' });</code></pre>
Alternatives include using <strong>short-lived tokens</strong> with refresh token rotation.
For critical security, invalidate all user tokens by incrementing a <strong>token version</strong> stored in the database.`
                },
                {
                    q: "What are common JWT security best practices?",
                    a: `Follow these practices to keep JWT-based authentication <strong>secure</strong>:
<ul>
<li><strong>Short expiration</strong> — access tokens should expire in 15-30 minutes</li>
<li><strong>HTTPS only</strong> — never transmit tokens over unencrypted connections</li>
<li><strong>Strong secrets</strong> — use at least 256-bit random secrets</li>
<li><strong>Validate claims</strong> — always check <code>exp</code>, <code>iss</code>, and <code>aud</code> claims</li>
<li><strong>Minimal payload</strong> — store only essential data (user ID, role), never passwords</li>
<li><strong>Use RS256</strong> — prefer asymmetric signing for distributed systems</li>
</ul>
Here is how to set issuer and audience claims during token creation:
<pre><code>const token = jwt.sign(payload, secret, {
  expiresIn: '15m',
  issuer: 'myapp.com',
  audience: 'myapp-client'
});</code></pre>
Always verify these claims on the server to prevent tokens from being used across <strong>different applications</strong>.
Consider using <strong>RS256</strong> (asymmetric) instead of HS256 for microservice architectures where multiple services verify tokens.`
                },
                {
                    q: "How do you implement multi-factor authentication (MFA) in Node.js?",
                    a: `<strong>Multi-factor authentication</strong> adds an extra security layer by requiring a second verification step after password login.
The most common approach uses <strong>TOTP (Time-based One-Time Password)</strong> which generates 6-digit codes that refresh every 30 seconds.
Libraries like <code>speakeasy</code> and <code>otplib</code> handle TOTP generation and verification.
<pre><code>const speakeasy = require('speakeasy');
const QRCode = require('qrcode');

// Generate secret during MFA setup
app.post('/mfa/setup', authenticate, async (req, res) =&gt; {
  const secret = speakeasy.generateSecret({
    name: 'MyApp (' + req.user.email + ')'
  });
  
  // Store secret in user record
  await User.updateOne(
    { _id: req.user.id },
    { mfaSecret: secret.base32, mfaEnabled: false }
  );
  
  // Generate QR code for authenticator app
  const qrUrl = await QRCode.toDataURL(secret.otpauth_url);
  res.json({ qrCode: qrUrl, secret: secret.base32 });
});

// Verify MFA code during login
app.post('/mfa/verify', async (req, res) =&gt; {
  const { token, tempToken } = req.body;
  const user = jwt.verify(tempToken, process.env.JWT_SECRET);
  
  const verified = speakeasy.totp.verify({
    secret: user.mfaSecret,
    encoding: 'base32',
    token,
    window: 1 // Allow 1 step tolerance
  });
  
  if (!verified) return res.status(401).json({ error: 'Invalid code' });
  const accessToken = jwt.sign({ userId: user.id }, process.env.JWT_SECRET);
  res.json({ accessToken });
});</code></pre>
Always provide <strong>backup codes</strong> during MFA setup in case the user loses their authenticator device.
Store the MFA secret <strong>encrypted</strong> in the database, not in plaintext.`
                },
                {
                    q: "How do you implement API key authentication in Node.js?",
                    a: `<strong>API key authentication</strong> is simpler than JWT and commonly used for server-to-server communication and third-party API access.
Keys are typically sent via the <code>x-api-key</code> header or as a query parameter.
Each key should be <strong>hashed</strong> before storage, just like passwords, to prevent exposure in case of a data breach.
<pre><code>const crypto = require('crypto');

// Generate API key
function generateApiKey() {
  return crypto.randomBytes(32).toString('hex');
}

// Hash for storage (never store plaintext)
function hashApiKey(key) {
  return crypto.createHash('sha256').update(key).digest('hex');
}

// API key middleware
const apiKeyAuth = async (req, res, next) =&gt; {
  const key = req.headers['x-api-key'];
  if (!key) return res.status(401).json({ error: 'API key required' });
  
  const hashedKey = hashApiKey(key);
  const apiKey = await ApiKey.findOne({ keyHash: hashedKey, active: true });
  
  if (!apiKey) return res.status(401).json({ error: 'Invalid API key' });
  
  req.apiClient = apiKey.clientName;
  next();
};

app.get('/api/data', apiKeyAuth, (req, res) =&gt; {
  res.json({ client: req.apiClient, data: [] });
});</code></pre>
Implement <strong>rate limiting</strong> per API key to prevent abuse.\nAllow users to <strong>revoke and regenerate</strong> keys through the application.`
                },
                {
                    q: "How do you handle CSRF protection in Node.js applications?",
                    a: `<strong>CSRF (Cross-Site Request Forgery)</strong> attacks trick authenticated users into making unwanted requests to your application.
Protection involves generating a unique <strong>CSRF token</strong> per session and validating it with every state-changing request.
The <code>csurf</code> middleware (or modern alternatives like <code>csrf-csrf</code>) handles token generation and validation.
<pre><code>const { doubleCsrf } = require('csrf-csrf');

const { doubleCsrfProtection, generateToken } = doubleCsrf({
  getSecret: () =&gt; process.env.CSRF_SECRET,
  cookieName: '__csrf',
  cookieOptions: {
    httpOnly: true,
    sameSite: 'strict',
    secure: process.env.NODE_ENV === 'production'
  }
});

// Apply CSRF protection
app.use(doubleCsrfProtection);

// Provide token to client
app.get('/csrf-token', (req, res) =&gt; {
  res.json({ token: generateToken(req, res) });
});

// Protected route — token validated automatically
app.post('/transfer', (req, res) =&gt; {
  // CSRF token already validated by middleware
  processTransfer(req.body);
});</code></pre>
Use <strong>SameSite cookies</strong> as an additional defense layer against CSRF.\nFor SPAs using JWT, CSRF is less of a concern if tokens are stored in <strong>memory</strong> rather than cookies.`
                },
                {
                    q: "How do you implement session-based authentication in Express?",
                    a: `<strong>Session-based authentication</strong> stores user state on the server, with the client holding only a <strong>session ID</strong> cookie.
This approach is stateful and well-suited for <strong>server-rendered</strong> applications and traditional web apps.
The <code>express-session</code> middleware handles session creation, storage, and cookie management.
<pre><code>const session = require('express-session');
const RedisStore = require('connect-redis').default;
const redis = require('redis');

const redisClient = redis.createClient();

app.use(session({
  store: new RedisStore({ client: redisClient }),
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    sameSite: 'strict'
  }
}));

app.post('/login', async (req, res) =&gt; {
  const user = await verifyCredentials(req.body);
  req.session.userId = user.id;
  req.session.role = user.role;
  res.json({ message: 'Logged in' });
});

app.post('/logout', (req, res) =&gt; {
  req.session.destroy(() =&gt; res.json({ message: 'Logged out' }));
});</code></pre>
Use a <strong>production session store</strong> like Redis or MongoDB \u2014 the default in-memory store leaks memory and does not scale.\nAlways set <code>httpOnly</code>, <code>secure</code>, and <code>sameSite</code> on session cookies for security.`
                },
                {
                    q: "What is the difference between symmetric and asymmetric JWT signing?",
                    a: `<strong>Symmetric signing</strong> (HS256) uses the same secret key to both sign and verify tokens, while <strong>asymmetric signing</strong> (RS256) uses a private key to sign and a public key to verify.
Symmetric signing is simpler but requires sharing the secret with every service that verifies tokens.
Asymmetric signing is ideal for <strong>microservices</strong> \u2014 only the auth service needs the private key, while all other services use the public key.
<pre><code>const fs = require('fs');
const jwt = require('jsonwebtoken');

// Symmetric (HS256) — same secret for sign and verify
const hsToken = jwt.sign({ userId: 1 }, 'shared-secret', { algorithm: 'HS256' });
jwt.verify(hsToken, 'shared-secret');

// Asymmetric (RS256) — private key to sign, public key to verify
const privateKey = fs.readFileSync('private.pem');
const publicKey = fs.readFileSync('public.pem');

const rsToken = jwt.sign({ userId: 1 }, privateKey, { algorithm: 'RS256' });
const decoded = jwt.verify(rsToken, publicKey);

// Generate RSA keys:
// openssl genrsa -out private.pem 2048
// openssl rsa -in private.pem -pubout -out public.pem</code></pre>
Choose <strong>HS256</strong> for simple applications where one server handles both signing and verification.\nChoose <strong>RS256</strong> for distributed systems, API gateways, and third-party token verification.`
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
                    a: `Use the official <strong>mongodb</strong> driver or <strong>Mongoose</strong> ODM to connect to MongoDB from Node.js.
Mongoose provides a higher-level abstraction with <strong>schemas</strong>, <strong>validation</strong>, and <strong>middleware</strong> built in.
Always handle connection events and use environment variables for connection strings.
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
Never hardcode database credentials in source code — use <strong>environment variables</strong> or a secrets manager.
Implement <strong>reconnection logic</strong> as Mongoose automatically attempts to reconnect on disconnection.`
                },
                {
                    q: "What is a Mongoose schema and model?",
                    a: `A <strong>schema</strong> defines the structure and validation rules for documents, while a <strong>model</strong> is a constructor compiled from a schema that provides CRUD methods.
Schemas support <strong>validators</strong>, <strong>virtuals</strong>, <strong>middleware</strong> (hooks), and instance/static methods.
This separation allows you to encapsulate data logic and business rules at the model layer.
<pre><code>const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name:  { type: String, required: true },
  email: { type: String, required: true, unique: true },
  age:   { type: Number, min: 0 },
  role:  { type: String, enum: ['user', 'admin'], default: 'user' },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);</code></pre>
The <code>mongoose.model()</code> call compiles the schema into a model and maps it to a <strong>MongoDB collection</strong>.
Mongoose automatically pluralizes and lowercases the model name for the collection name (e.g., 'User' → 'users').`
                },
                {
                    q: "How do you perform CRUD operations with Mongoose?",
                    a: `<strong>Mongoose models</strong> provide methods for Create, Read, Update, and Delete operations on MongoDB collections.
These methods return <strong>promises</strong> and can be used with async/await for clean, readable code.
Each method maps directly to underlying MongoDB operations with additional Mongoose features.
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
Use <code>{ new: true }</code> in update operations to return the <strong>modified document</strong> instead of the original.
Use <code>{ runValidators: true }</code> to ensure schema validations are applied during updates.`
                },
                {
                    q: "How do you use PostgreSQL with Node.js using the pg library?",
                    a: `The <strong>pg</strong> (node-postgres) library provides a client for connecting to PostgreSQL databases.
It supports <strong>connection pooling</strong>, parameterized queries, and both callback and promise-based APIs.
Always use <strong>parameterized queries</strong> (<code>$1</code>, <code>$2</code>) to prevent SQL injection attacks.
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
Never concatenate user input directly into query strings — this creates <strong>SQL injection</strong> vulnerabilities.
The <code>Pool</code> class manages connections automatically, borrowing and returning them as needed.`
                },
                {
                    q: "What is Sequelize ORM and how do you define a model?",
                    a: `<strong>Sequelize</strong> is a promise-based ORM for SQL databases (PostgreSQL, MySQL, SQLite, MSSQL) that maps tables to JavaScript classes.
It provides <strong>associations</strong>, <strong>migrations</strong>, and <strong>query builders</strong> for complex SQL operations.
Models are defined using <code>sequelize.define()</code> with column types and constraints.
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
Use <code>sequelize.sync({ alter: true })</code> during development to update tables without dropping data.
In production, always use <strong>migrations</strong> instead of <code>sync()</code> to manage schema changes safely.`
                },
                {
                    q: "What is connection pooling and why is it important?",
                    a: `<strong>Connection pooling</strong> maintains a cache of database connections that are reused across requests, avoiding the overhead of creating a new connection for every query.
Without pooling, each request opens and closes a connection, causing <strong>latency spikes</strong> under high load.
The pool manages connection lifecycle, including borrowing, returning, and health checking.
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
Always call <code>client.release()</code> in a <code>finally</code> block to prevent <strong>connection leaks</strong>.
Set the <code>max</code> pool size based on your database's connection limit and expected concurrency.`
                },
                {
                    q: "How does database indexing improve query performance?",
                    a: `<strong>Indexes</strong> create efficient data structures (B-trees) that allow the database to find rows without scanning the entire table.
Without indexes, the database performs a <strong>full collection/table scan</strong> for every query, which is extremely slow on large datasets.
Index frequently queried fields and fields used in WHERE, ORDER BY, and JOIN clauses.
<pre><code>// MongoDB — create index with Mongoose
userSchema.index({ email: 1 });           // Single field
userSchema.index({ name: 1, age: -1 });   // Compound index
userSchema.index({ email: 1 }, { unique: true });

// PostgreSQL — create index via SQL
await pool.query('CREATE INDEX idx_users_email ON users (email)');
await pool.query('CREATE UNIQUE INDEX idx_users_username ON users (username)');</code></pre>
Over-indexing <strong>slows down writes</strong> because every insert and update must also update all indexes.
Use <code>explain()</code> to analyze query execution plans and verify that indexes are being used.`
                },
                {
                    q: "How do you handle database transactions in Node.js?",
                    a: `<strong>Transactions</strong> group multiple operations into an atomic unit — all succeed or all roll back.
They ensure <strong>data consistency</strong> for operations like fund transfers, order processing, and multi-table updates.
Both PostgreSQL (pg) and MongoDB (Mongoose) support transactions with similar patterns.
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
}</code></pre>
MongoDB transactions require a <strong>replica set</strong> — they are not available on standalone instances.
Always use <code>finally</code> blocks to release connections and end sessions regardless of success or failure.`
                },
                {
                    q: "What are database migrations and how do you manage them?",
                    a: `<strong>Migrations</strong> are version-controlled scripts that modify the database schema incrementally, allowing teams to track and apply changes consistently.
Each migration has an <code>up</code> method (apply change) and a <code>down</code> method (revert change).
Migrations ensure every environment (dev, staging, production) has the <strong>same schema</strong>.
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
Never modify a migration that has <strong>already been applied</strong> — create a new migration instead.
Commit migration files to version control alongside the application code.`
                },
                {
                    q: "How do you optimize database queries in Node.js?",
                    a: `Query optimization reduces <strong>response times</strong> and <strong>database load</strong> by minimizing data transfer and computation.
Apply these strategies to avoid common performance pitfalls in database-heavy applications.
Always measure query performance with <code>explain()</code> before and after optimizations.
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
Always <strong>index filtered fields</strong> and avoid fetching unnecessary data from the database.
Batch operations where possible and use <strong>cursor-based pagination</strong> for large datasets.`
                },
                {
                    q: "How do you implement data validation at the database layer in Mongoose?",
                    a: `<strong>Mongoose validators</strong> enforce data integrity at the schema level before documents are saved to MongoDB.
Built-in validators include <code>required</code>, <code>min</code>, <code>max</code>, <code>enum</code>, <code>match</code>, and <code>minlength</code>/<code>maxlength</code>.
Custom validators allow complex business rules to be enforced directly in the schema definition.
<pre><code>const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Product name is required'],
    trim: true,
    minlength: [2, 'Name must be at least 2 characters']
  },
  price: {
    type: Number,
    required: true,
    min: [0, 'Price cannot be negative'],
    validate: {
      validator: (v) =&gt; v === Math.round(v * 100) / 100,
      message: 'Price must have at most 2 decimal places'
    }
  },
  email: {
    type: String,
    match: [/^\\S+@\\S+\\.\\S+$/, 'Please enter a valid email']
  },
  status: {
    type: String,
    enum: {
      values: ['active', 'inactive', 'archived'],
      message: '{VALUE} is not a valid status'
    }
  }
});

// Validation errors are caught in try/catch
try {
  await Product.create({ name: '', price: -5 });
} catch (err) {
  console.log(err.errors); // Validation error details
}</code></pre>
Validation runs automatically on <code>save()</code> and <code>create()</code> but is skipped on <code>update()</code> unless <code>runValidators: true</code> is set.
Combine schema validation with <strong>application-level validation</strong> (like Joi or Zod) for defense in depth.`
                },
                {
                    q: "How do you implement database seeding in Node.js?",
                    a: `<strong>Database seeding</strong> populates a database with initial or test data, useful for development, testing, and demo environments.
Seed scripts should be <strong>idempotent</strong> \u2014 running them multiple times produces the same result without duplicating data.
Organize seed data in structured files and run them through a dedicated script.
<pre><code>// seeds/users.js
const mongoose = require('mongoose');
const User = require('../models/User');

const users = [
  { name: 'Admin', email: 'admin@app.com', role: 'admin' },
  { name: 'Alice', email: 'alice@app.com', role: 'user' },
  { name: 'Bob', email: 'bob@app.com', role: 'user' }
];

async function seedUsers() {
  await mongoose.connect(process.env.MONGO_URI);
  
  // Clear existing data (only in dev/test)
  await User.deleteMany({});
  
  // Insert seed data with hashed passwords
  const bcrypt = require('bcrypt');
  const seeded = await Promise.all(
    users.map(async (u) =&gt; ({
      ...u,
      password: await bcrypt.hash('password123', 10)
    }))
  );
  
  await User.insertMany(seeded);
  console.log('Seeded', seeded.length, 'users');
  await mongoose.disconnect();
}

seedUsers();</code></pre>
Add a seed command to <code>package.json</code>: <code>"seed": "node seeds/users.js"</code>.
Never run seed scripts with <code>deleteMany()</code> against <strong>production databases</strong>.`
                },
                {
                    q: "How do you implement soft deletes in a Node.js database?",
                    a: `<strong>Soft deletes</strong> mark records as deleted without actually removing them from the database, preserving data for auditing and recovery.
This is implemented by adding a <code>deletedAt</code> timestamp field and filtering queries to exclude soft-deleted records.
Mongoose middleware (hooks) can automatically apply the filter to all queries.
<pre><code>const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  deletedAt: { type: Date, default: null }
});

// Middleware to exclude soft-deleted records from all queries
userSchema.pre(/^find/, function() {
  this.where({ deletedAt: null });
});

// Soft delete method
userSchema.methods.softDelete = function() {
  this.deletedAt = new Date();
  return this.save();
};

// Restore method
userSchema.methods.restore = function() {
  this.deletedAt = null;
  return this.save();
};

const User = mongoose.model('User', userSchema);

// Usage
await user.softDelete(); // Sets deletedAt timestamp
await User.find({}); // Automatically excludes soft-deleted

// Query including soft-deleted (for admin)
await User.find({}).setOptions({ includeDeleted: true });</code></pre>
Soft deletes are essential for <strong>compliance</strong> (GDPR data retention) and <strong>audit trails</strong>.
Consider adding a <code>deletedBy</code> field to track who performed the deletion.`
                },
                {
                    q: "How do you implement database connection health checks in Node.js?",
                    a: `<strong>Health checks</strong> verify that the database connection is alive and responsive, critical for load balancers and container orchestration.
Expose a dedicated <code>/health</code> endpoint that tests the actual database connection, not just the application status.
Include response time measurements to detect degraded performance before failures occur.
<pre><code>// Health check endpoint
app.get('/health', async (req, res) =&gt; {
  const checks = {};
  
  // MongoDB check
  try {
    const start = Date.now();
    await mongoose.connection.db.admin().ping();
    checks.mongodb = {
      status: 'healthy',
      responseTime: Date.now() - start + 'ms'
    };
  } catch (err) {
    checks.mongodb = { status: 'unhealthy', error: err.message };
  }
  
  // PostgreSQL check
  try {
    const start = Date.now();
    await pool.query('SELECT 1');
    checks.postgres = {
      status: 'healthy',
      responseTime: Date.now() - start + 'ms',
      activeConnections: pool.totalCount,
      idleConnections: pool.idleCount
    };
  } catch (err) {
    checks.postgres = { status: 'unhealthy', error: err.message };
  }
  
  const allHealthy = Object.values(checks).every(c =&gt; c.status === 'healthy');
  res.status(allHealthy ? 200 : 503).json({ status: allHealthy ? 'ok' : 'degraded', checks });
});</code></pre>
Return <strong>HTTP 503</strong> when the database is unreachable so load balancers can route traffic to healthy instances.
Monitor connection pool metrics like <strong>active count</strong>, <strong>idle count</strong>, and <strong>wait queue</strong> to detect pool exhaustion.`
                },
                {
                    q: "How do you use Prisma ORM with Node.js?",
                    a: `<strong>Prisma</strong> is a modern, type-safe ORM that generates a client from a schema file and provides excellent TypeScript support.
It uses a declarative <strong>schema language</strong> to define models and relationships, then generates query methods automatically.
Prisma supports PostgreSQL, MySQL, SQLite, MongoDB, and SQL Server.
<pre><code>// prisma/schema.prisma
// datasource db {
//   provider = "postgresql"
//   url      = env("DATABASE_URL")
// }
// model User {
//   id    Int     @id @default(autoincrement())
//   name  String
//   email String  @unique
//   posts Post[]
// }

// After running: npx prisma generate
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Create
const user = await prisma.user.create({
  data: { name: 'Alice', email: 'alice@example.com' }
});

// Read with relations
const userWithPosts = await prisma.user.findUnique({
  where: { email: 'alice@example.com' },
  include: { posts: true }
});

// Update
await prisma.user.update({
  where: { id: 1 },
  data: { name: 'Alice Smith' }
});

// Transaction
await prisma.$transaction([
  prisma.account.update({ where: { id: 1 }, data: { balance: { decrement: 100 } } }),
  prisma.account.update({ where: { id: 2 }, data: { balance: { increment: 100 } } })
]);</code></pre>
Run <code>npx prisma migrate dev</code> to create and apply <strong>database migrations</strong> from schema changes.
Prisma's generated client provides <strong>auto-completion</strong> and <strong>type safety</strong> for all database operations.`
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
                    a: `<strong>WebSockets</strong> provide a persistent, full-duplex communication channel over a single TCP connection, unlike HTTP's request-response model.
The WebSocket handshake starts as a regular HTTP request and then <strong>upgrades</strong> to the WebSocket protocol.
This persistent connection eliminates the overhead of repeatedly establishing new connections.
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
Use WebSockets for <strong>real-time features</strong> like chat, live feeds, gaming, and collaborative editing.`
                },
                {
                    q: "How do you set up Socket.io in a Node.js application?",
                    a: `<strong>Socket.io</strong> is a library that enables real-time, bidirectional communication with automatic fallbacks for older browsers.
It wraps WebSockets and provides additional features like <strong>rooms</strong>, <strong>namespaces</strong>, and <strong>automatic reconnection</strong>.
The setup involves creating an HTTP server and attaching Socket.io to it.
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
The client connects by including the Socket.io client library:
<pre><code>// Client (HTML)
&lt;script src="/socket.io/socket.io.js"&gt;&lt;/script&gt;
&lt;script&gt;
  const socket = io();
&lt;/script&gt;</code></pre>
Socket.io automatically serves the client-side library from the <code>/socket.io/socket.io.js</code> path.`
                },
                {
                    q: "How do you emit and listen to events with Socket.io?",
                    a: `Socket.io uses an <strong>event-driven model</strong> where <code>emit()</code> sends events and <code>on()</code> listens for them.
Events can carry any serializable data — strings, objects, arrays, and even <strong>binary buffers</strong>.
Socket.io also supports <strong>acknowledgment callbacks</strong> for request-response patterns.
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
Custom events can have any name and support <strong>multiple arguments</strong>.
Use acknowledgments when you need confirmation that the server processed an event successfully.`
                },
                {
                    q: "What are Socket.io rooms and how do you use them?",
                    a: `<strong>Rooms</strong> are arbitrary channels that sockets can join and leave, allowing you to broadcast events to a <strong>subset of connected clients</strong>.
Each socket automatically joins a room identified by its own <code>socket.id</code>.
Rooms are commonly used for chat channels, game lobbies, and <strong>multi-tenant applications</strong>.
<pre><code>io.on('connection', (socket) =&gt; {
  // Join a room
  socket.on('join room', (roomName) =&gt; {
    socket.join(roomName);
    socket.to(roomName).emit('notification', \&#96;\${socket.id} joined \${roomName}\&#96;);
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
Use <code>socket.to(room)</code> to broadcast to everyone <strong>except</strong> the sender.
Use <code>io.to(room)</code> to broadcast to <strong>all</strong> clients in the room including the sender.`
                },
                {
                    q: "What are Socket.io namespaces?",
                    a: `<strong>Namespaces</strong> allow you to split the logic of your application over a single shared connection.
Each namespace has its own <strong>event handlers</strong>, <strong>rooms</strong>, and <strong>middleware</strong>.
Namespaces are useful for separating concerns like chat, notifications, and admin functionality.
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
Multiple namespaces share the same <strong>underlying WebSocket connection</strong>, minimizing resource usage.
Apply namespace-level middleware for <strong>authentication</strong> checks specific to each namespace.`
                },
                {
                    q: "How do you broadcast messages to all connected clients?",
                    a: `<strong>Broadcasting</strong> sends an event to all connected sockets. Socket.io provides several methods depending on the target audience.
Use <code>socket.broadcast.emit()</code> to send to everyone <strong>except</strong> the sender.
Use <code>io.emit()</code> to send to <strong>all</strong> clients including the sender.
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
Use <code>io.emit()</code> for <strong>global announcements</strong> like user counts or system messages.
Use <code>socket.broadcast</code> when the sender should not receive its own event, like typing indicators.`
                },
                {
                    q: "How do you handle reconnection in Socket.io?",
                    a: `Socket.io has built-in <strong>reconnection logic</strong> on the client side with configurable parameters.
It automatically tries to reconnect with <strong>exponential backoff</strong> when the connection drops.
The client emits events for each reconnection stage, allowing you to update the UI accordingly.
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
On the server, implement <strong>session recovery</strong> by storing user state so reconnected clients can resume seamlessly.
Use the <code>disconnect</code> reason to distinguish between intentional disconnects and network failures.`
                },
                {
                    q: "How do you scale Socket.io across multiple servers with Redis?",
                    a: `By default, Socket.io only works on a <strong>single server</strong> because events are stored in memory.
To scale across multiple processes or servers, use the <strong>Redis adapter</strong> to share events via Redis pub/sub.
This ensures that broadcasts reach all connected clients regardless of which server they are connected to.
<pre><code>const { Server } = require('socket.io');
const { createAdapter } = require('@socket.io/redis-adapter');
const { createClient } = require('redis');

const pubClient = createClient({ url: 'redis://localhost:6379' });
const subClient = pubClient.duplicate();

await Promise.all([pubClient.connect(), subClient.connect()]);

const io = new Server(server);
io.adapter(createAdapter(pubClient, subClient));

// Now events are broadcast across all servers via Redis pub/sub</code></pre>
Combine with a load balancer that supports <strong>sticky sessions</strong> so the WebSocket handshake completes on the same server.
Alternatively, use WebSocket-aware routing at the load balancer level.`
                },
                {
                    q: "How do you send and receive binary data with WebSockets?",
                    a: `Socket.io supports sending <strong>binary data</strong> (Buffers, ArrayBuffers, Blobs) alongside or instead of JSON data.
Binary support is automatic — Socket.io detects binary content and handles serialization transparently.
This is useful for <strong>file transfers</strong>, image sharing, and audio/video streaming.
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
});</code></pre>
For large files, consider <strong>chunked transfers</strong> to avoid blocking the connection.
Combine binary data with metadata objects for structured file handling.`
                },
                {
                    q: "How do you build a basic real-time chat application with Socket.io?",
                    a: `A real-time chat application combines Socket.io events with <strong>rooms</strong> and <strong>broadcasting</strong> to deliver instant messaging.
Key features include joining rooms, sending messages, showing <strong>typing indicators</strong>, and announcing join/leave events.
The server manages all message routing while clients handle UI updates.
<pre><code>// Server
io.on('connection', (socket) =&gt; {
  socket.on('join', (username) =&gt; {
    socket.username = username;
    socket.join('general');
    socket.to('general').emit('system', \&#96;\${username} joined the chat\&#96;);
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
    io.to('general').emit('system', \&#96;\${socket.username} left the chat\&#96;);
  });
});</code></pre>
On the client, listen for <code>chat message</code> events and append them to the UI.
Use <code>typing</code> events to show real-time indicator feedback to other users.`
                },
                {
                    q: "How do you implement WebSocket authentication with Socket.io?",
                    a: `<strong>Socket.io middleware</strong> can intercept the connection handshake to verify authentication before allowing access.
The client sends a <strong>JWT token</strong> or session cookie during the connection, and the server validates it.
Unauthenticated connections are rejected before any events are exchanged.
<pre><code>// Server — authentication middleware
io.use((socket, next) =&gt; {
  const token = socket.handshake.auth.token;
  if (!token) return next(new Error('Authentication required'));
  
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    socket.user = decoded;
    next();
  } catch (err) {
    next(new Error('Invalid token'));
  }
});

io.on('connection', (socket) =&gt; {
  console.log('Authenticated user:', socket.user.userId);
  socket.join('user:' + socket.user.userId);
});

// Client — send token during connection
const socket = io('http://localhost:3000', {
  auth: { token: localStorage.getItem('jwt') }
});

socket.on('connect_error', (err) =&gt; {
  console.log('Auth failed:', err.message);
});</code></pre>
Namespace-level middleware allows <strong>different authentication</strong> for different namespaces.
Never trust client-sent data without server-side validation, even on authenticated connections.`
                },
                {
                    q: "How do you implement rate limiting for WebSocket events?",
                    a: `<strong>Rate limiting</strong> prevents clients from flooding the server with events, protecting against abuse and DoS attacks.
Unlike HTTP rate limiting, WebSocket rate limiting must track events <strong>per socket</strong> rather than per IP.
Implement a simple token bucket or sliding window counter per event type.
<pre><code>function createRateLimiter(maxEvents, windowMs) {
  const clients = new Map();
  
  return (socket, eventName) =&gt; {
    const key = socket.id + ':' + eventName;
    const now = Date.now();
    
    if (!clients.has(key)) {
      clients.set(key, []);
    }
    
    const timestamps = clients.get(key).filter(t =&gt; now - t &lt; windowMs);
    
    if (timestamps.length &gt;= maxEvents) {
      socket.emit('error', { message: 'Rate limit exceeded' });
      return false;
    }
    
    timestamps.push(now);
    clients.set(key, timestamps);
    return true;
  };
}

const limiter = createRateLimiter(10, 1000); // 10 events per second

io.on('connection', (socket) =&gt; {
  socket.on('chat message', (msg) =&gt; {
    if (!limiter(socket, 'chat message')) return;
    io.emit('chat message', msg);
  });
});</code></pre>
Clean up rate limit data when sockets <strong>disconnect</strong> to prevent memory leaks.
Consider different limits for different event types based on their expected frequency.`
                },
                {
                    q: "How do you implement presence tracking with Socket.io?",
                    a: `<strong>Presence tracking</strong> monitors which users are currently online and broadcasts their status to other clients.
This feature is essential for chat applications, collaborative tools, and <strong>live dashboards</strong>.
Maintain a server-side map of connected users and broadcast updates on connect/disconnect.
<pre><code>const onlineUsers = new Map();

io.on('connection', (socket) =&gt; {
  socket.on('go online', (userData) =&gt; {
    onlineUsers.set(socket.id, {
      userId: userData.userId,
      username: userData.username,
      connectedAt: new Date()
    });
    
    // Broadcast updated user list to all clients
    io.emit('users online', Array.from(onlineUsers.values()));
  });
  
  socket.on('disconnect', () =&gt; {
    onlineUsers.delete(socket.id);
    io.emit('users online', Array.from(onlineUsers.values()));
  });
  
  // Send current online users to newly connected client
  socket.emit('users online', Array.from(onlineUsers.values()));
});

// Client
socket.emit('go online', { userId: 1, username: 'Alice' });
socket.on('users online', (users) =&gt; {
  console.log('Online:', users.map(u =&gt; u.username));
});</code></pre>
For <strong>multi-server</strong> deployments, store presence data in Redis instead of an in-memory Map.
Add a <strong>heartbeat</strong> mechanism to detect and clean up stale connections.`
                },
                {
                    q: "What is the native WebSocket API in Node.js and how does it differ from Socket.io?",
                    a: `The native <strong>ws</strong> library provides a lightweight WebSocket implementation without the additional features of Socket.io.
It follows the <strong>WebSocket protocol (RFC 6455)</strong> directly, with no automatic reconnection, rooms, or fallback transports.
Choose <code>ws</code> for maximum performance and minimal overhead, Socket.io for developer convenience.
<pre><code>// Server with 'ws' library
const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) =&gt; {
  console.log('Client connected');
  
  ws.on('message', (data) =&gt; {
    const message = JSON.parse(data);
    
    // Broadcast to all clients
    wss.clients.forEach((client) =&gt; {
      if (client.readyState === WebSocket.OPEN) {
        client.send(JSON.stringify(message));
      }
    });
  });
  
  ws.on('close', () =&gt; console.log('Client disconnected'));
});

// Client (browser native API)
const ws = new WebSocket('ws://localhost:8080');
ws.onmessage = (event) =&gt; console.log(JSON.parse(event.data));
ws.send(JSON.stringify({ type: 'chat', text: 'Hello' }));</code></pre>
The <code>ws</code> library is significantly <strong>faster</strong> and uses less memory than Socket.io.
Socket.io adds <strong>rooms</strong>, <strong>namespaces</strong>, <strong>automatic reconnection</strong>, and <strong>HTTP long-polling fallback</strong> on top of WebSockets.`
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
                    a: `The <strong>cluster</strong> module allows you to create child processes (workers) that share the same server port, enabling <strong>multi-core utilization</strong>.
Each worker runs in its own process with its own <strong>V8 instance</strong> and memory, providing true parallelism.
The primary process manages the workers and can automatically restart them if they crash.
<pre><code>const cluster = require('cluster');
const os = require('os');
const http = require('http');

if (cluster.isPrimary) {
  const cpus = os.cpus().length;
  console.log(\&#96;Primary \${process.pid} forking \${cpus} workers\&#96;);
  for (let i = 0; i &lt; cpus; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) =&gt; {
    console.log(\&#96;Worker \${worker.process.pid} died, restarting...\&#96;);
    cluster.fork();
  });
} else {
  http.createServer((req, res) =&gt; {
    res.end(\&#96;Handled by worker \${process.pid}\&#96;);
  }).listen(3000);
}</code></pre>
The cluster module is the simplest way to scale a Node.js application across <strong>all CPU cores</strong>.
For production workloads, consider using <strong>PM2</strong> which provides cluster management with additional features.`
                },
                {
                    q: "What are worker_threads and when should you use them?",
                    a: `<strong>worker_threads</strong> allow you to run JavaScript in parallel threads within a single process, sharing memory when needed.
Unlike the cluster module, worker threads share the same process and can use <strong>SharedArrayBuffer</strong> for efficient data sharing.
Use worker threads for <strong>CPU-intensive tasks</strong> like image processing, cryptography, and data parsing.
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
Worker threads prevent CPU-intensive operations from <strong>blocking the event loop</strong>.
For I/O-bound tasks, stick with the regular async model — worker threads add unnecessary overhead.`
                },
                {
                    q: "What is the difference between fork and spawn in child_process?",
                    a: `<code>spawn()</code> launches a new process with a given command, while <code>fork()</code> is a special case of <code>spawn()</code> that creates a new <strong>Node.js process</strong> with a built-in IPC channel.
<ul>
<li><strong>spawn</strong> — streams I/O, for any command, no IPC by default</li>
<li><strong>fork</strong> — Node.js only, built-in IPC, higher memory overhead</li>
</ul>
Here is how each method is used to run processes:
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
Use <code>spawn</code> for running external commands or when you need <strong>streaming output</strong>.
Use <code>fork</code> when you need to run Node.js code with <strong>inter-process communication</strong>.`
                },
                {
                    q: "How does inter-process communication (IPC) work in Node.js?",
                    a: `<strong>IPC</strong> allows the primary process and child/worker processes to exchange messages using <code>send()</code> and the <code>message</code> event.
Messages are serialized using the <strong>structured clone algorithm</strong>, supporting objects, arrays, and typed arrays.
However, <strong>functions</strong> and <strong>class instances</strong> cannot be sent via IPC.
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
For large data transfers, consider using <strong>SharedArrayBuffer</strong> with worker threads to avoid serialization overhead.
IPC is the standard pattern for distributing work across child processes and collecting results.`
                },
                {
                    q: "How does load balancing work with the cluster module?",
                    a: `Node.js cluster uses a <strong>round-robin</strong> approach (default on all platforms except Windows) where the primary process accepts connections and distributes them to workers evenly.
On Windows, the operating system handles distribution instead of the Node.js primary process.
You can monitor worker health by sending periodic <strong>heartbeat messages</strong> via IPC.
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
For more control over distribution, use an external load balancer like <strong>Nginx</strong>.
Combine cluster load balancing with <strong>health checks</strong> to automatically restart unresponsive workers.`
                },
                {
                    q: "What is SharedArrayBuffer and how is it used with worker threads?",
                    a: `<strong>SharedArrayBuffer</strong> allows multiple threads to read and write the same memory, enabling efficient data sharing without copying.
Unlike regular message passing which serializes data, shared memory provides <strong>zero-copy</strong> communication.
Use <code>Atomics</code> methods for <strong>thread-safe</strong> operations to prevent race conditions.
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
Without <code>Atomics</code>, concurrent writes cause <strong>race conditions</strong> and unpredictable results.
SharedArrayBuffer is ideal for <strong>high-performance computing</strong> scenarios like image processing and scientific calculations.`
                },
                {
                    q: "What is PM2 and how does it help manage Node.js processes?",
                    a: `<strong>PM2</strong> is a production process manager for Node.js that provides clustering, monitoring, log management, and automatic restarts.
It simplifies running Node.js in <strong>cluster mode</strong> without writing any cluster code yourself.
PM2 auto-restarts crashed processes and can be configured to start on system boot.
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
Use <code>pm2 reload</code> for <strong>zero-downtime deployments</strong> — it restarts workers one at a time.
Configure <code>pm2 startup</code> to automatically launch your app when the server reboots.`
                },
                {
                    q: "What is the difference between child_process exec and spawn?",
                    a: `<code>exec()</code> <strong>buffers the entire output</strong> and returns it in a callback, while <code>spawn()</code> <strong>streams output</strong> in real-time via events.
<ul>
<li><strong>exec</strong> — spawns a shell, has a max buffer size (default ~1MB)</li>
<li><strong>spawn</strong> — no shell by default, no buffer limit, more efficient for large outputs</li>
</ul>
Here is how each method handles process execution:
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
Use <code>exec</code> for simple commands with small output like checking versions or listing files.
Use <code>spawn</code> for long-running processes, large data streams, and when you need <strong>real-time output</strong>.`
                },
                {
                    q: "How does the libuv thread pool size affect Node.js performance?",
                    a: `The <strong>libuv thread pool</strong> handles file system operations, DNS lookups (<code>dns.lookup</code>), and crypto operations.
Its default size is <strong>4 threads</strong>, which can become a bottleneck for I/O-heavy applications.
Increase the pool size via the <code>UV_THREADPOOL_SIZE</code> environment variable (set before requiring any modules).
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
    console.log(\&#96;Hash \${i} complete\&#96;);
  });
}</code></pre>
The maximum pool size is <strong>1024 threads</strong>, but too many threads waste memory and context-switching overhead.
Profile your application under realistic load to find the <strong>optimal pool size</strong>.`
                },
                {
                    q: "How do you implement horizontal scaling for a Node.js application?",
                    a: `<strong>Horizontal scaling</strong> runs multiple instances of your app across processes or servers, distributing load with a reverse proxy or load balancer.
This approach enables handling more concurrent requests than a single process can manage.
Ensure your app is <strong>stateless</strong> — store sessions in Redis, not in memory — so any instance can handle any request.
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
Each scaling approach has trade-offs between <strong>simplicity</strong> and <strong>control</strong>.
For cloud deployments, use container orchestration tools like <strong>Kubernetes</strong> for automatic scaling based on load.`
                },
                {
                    q: "How do you implement a worker thread pool in Node.js?",
                    a: `A <strong>worker thread pool</strong> maintains a fixed number of reusable threads to process CPU-intensive tasks without creating new threads per request.
This avoids the overhead of creating and destroying threads repeatedly and limits resource consumption.
The pool distributes tasks to available workers and queues excess work until a worker becomes free.
<pre><code>const { Worker } = require('worker_threads');
const os = require('os');

class WorkerPool {
  constructor(workerScript, poolSize = os.cpus().length) {
    this.workers = [];
    this.queue = [];
    
    for (let i = 0; i &lt; poolSize; i++) {
      this.workers.push({ worker: new Worker(workerScript), busy: false });
    }
  }
  
  runTask(data) {
    return new Promise((resolve, reject) =&gt; {
      const available = this.workers.find(w =&gt; !w.busy);
      
      if (available) {
        this._execute(available, data, resolve, reject);
      } else {
        this.queue.push({ data, resolve, reject });
      }
    });
  }
  
  _execute(workerInfo, data, resolve, reject) {
    workerInfo.busy = true;
    workerInfo.worker.postMessage(data);
    
    workerInfo.worker.once('message', (result) =&gt; {
      workerInfo.busy = false;
      resolve(result);
      
      if (this.queue.length &gt; 0) {
        const next = this.queue.shift();
        this._execute(workerInfo, next.data, next.resolve, next.reject);
      }
    });
    
    workerInfo.worker.once('error', reject);
  }
}

const pool = new WorkerPool('./hash-worker.js', 4);
const result = await pool.runTask({ password: 'secret' });</code></pre>
Production-ready pool implementations like <strong>piscina</strong> and <strong>workerpool</strong> handle edge cases like worker crashes and timeouts.
Size the pool based on the number of <strong>CPU cores</strong> available for compute-bound tasks.`
                },
                {
                    q: "How do you implement graceful shutdown with cluster workers?",
                    a: `<strong>Graceful shutdown</strong> allows workers to finish processing active requests before terminating, preventing data loss and connection errors.
The primary process sends a signal to workers, and each worker stops accepting new connections while completing in-flight requests.
This is critical for <strong>zero-downtime deployments</strong> and maintenance windows.
<pre><code>const cluster = require('cluster');

if (cluster.isPrimary) {
  // Fork workers
  for (let i = 0; i &lt; 4; i++) cluster.fork();
  
  // Graceful shutdown handler
  process.on('SIGTERM', () =&gt; {
    console.log('Primary received SIGTERM, shutting down workers...');
    
    for (const id in cluster.workers) {
      cluster.workers[id].send('shutdown');
    }
    
    // Force kill after timeout
    setTimeout(() =&gt; {
      console.log('Force killing remaining workers');
      process.exit(1);
    }, 30000);
  });
} else {
  const server = require('./server');
  
  process.on('message', (msg) =&gt; {
    if (msg === 'shutdown') {
      console.log('Worker ' + process.pid + ' shutting down...');
      
      // Stop accepting new connections
      server.close(() =&gt; {
        console.log('Worker ' + process.pid + ' closed cleanly');
        process.exit(0);
      });
    }
  });
}</code></pre>
Set a reasonable <strong>timeout</strong> (e.g., 30 seconds) and force-kill workers that do not exit in time.
Close database connections and flush logs during shutdown to prevent data corruption.`
                },
                {
                    q: "How do you use MessageChannel for direct communication between worker threads?",
                    a: `<strong>MessageChannel</strong> creates a pair of connected ports that allow two worker threads to communicate directly, bypassing the main thread.
This is useful when workers need to exchange data or coordinate without routing through the parent.
Each channel has two ports \u2014 <code>port1</code> and <code>port2</code> \u2014 that form a bidirectional communication link.
<pre><code>const { Worker, MessageChannel } = require('worker_threads');

// Create two workers that communicate directly
const worker1 = new Worker('./processor.js');
const worker2 = new Worker('./aggregator.js');

// Create a direct channel between them
const { port1, port2 } = new MessageChannel();

// Transfer ports to workers (transfers ownership)
worker1.postMessage({ port: port1 }, [port1]);
worker2.postMessage({ port: port2 }, [port2]);

// processor.js
const { parentPort } = require('worker_threads');
parentPort.once('message', ({ port }) =&gt; {
  // Send data directly to aggregator
  port.postMessage({ processed: [1, 2, 3] });
  port.on('message', (msg) =&gt; console.log('From aggregator:', msg));
});

// aggregator.js
const { parentPort } = require('worker_threads');
parentPort.once('message', ({ port }) =&gt; {
  port.on('message', (data) =&gt; {
    const sum = data.processed.reduce((a, b) =&gt; a + b, 0);
    port.postMessage({ total: sum });
  });
});</code></pre>
Ports must be <strong>transferred</strong> (not cloned) by including them in the transfer list.\nDirect channels reduce latency by eliminating the main thread as a <strong>communication bottleneck</strong>.`
                },
                {
                    q: "How do you monitor and debug worker threads and child processes?",
                    a: `<strong>Monitoring</strong> worker threads and child processes involves tracking their health, performance, and error states.\nUse event listeners for <code>error</code>, <code>exit</code>, and <code>message</code> events to detect problems early.\nImplement <strong>heartbeat patterns</strong> to detect stalled or unresponsive workers.\n<pre><code>const { Worker } = require('worker_threads');

function createMonitoredWorker(script, data) {
  const worker = new Worker(script, { workerData: data });
  
  const stats = {
    startTime: Date.now(),
    messagesReceived: 0,
    lastHeartbeat: Date.now()
  };
  
  // Track messages
  worker.on('message', (msg) =&gt; {
    stats.messagesReceived++;
    if (msg.type === 'heartbeat') {
      stats.lastHeartbeat = Date.now();
    }
  });
  
  // Monitor for errors
  worker.on('error', (err) =&gt; {
    console.error('Worker error:', err.message);
    console.error('Stack:', err.stack);
  });
  
  // Track exits
  worker.on('exit', (code) =&gt; {
    const runtime = (Date.now() - stats.startTime) / 1000;
    console.log('Exit code:', code, 'Runtime:', runtime + 's');
    if (code !== 0) {
      console.log('Restarting worker...');
      createMonitoredWorker(script, data);
    }
  });
  
  // Detect stalled workers
  setInterval(() =&gt; {
    if (Date.now() - stats.lastHeartbeat &gt; 10000) {
      console.log('Worker stalled, terminating...');
      worker.terminate();
    }
  }, 5000);
  
  return worker;
}</code></pre>
Use the <code>--inspect</code> flag with <code>worker.resourceLimits</code> to set <strong>memory limits</strong> on individual workers.
Log worker metrics to your monitoring system for <strong>production observability</strong>.`
                },
                {
                    q: "What is the difference between cluster module and worker_threads?",
                    a: `The <strong>cluster module</strong> creates multiple processes, each with its own memory space, while <strong>worker_threads</strong> run in the same process and can share memory.
<ul>
<li><strong>Cluster</strong> \u2014 separate processes, separate V8 heaps, share server ports, higher memory overhead</li>
<li><strong>Worker threads</strong> \u2014 same process, can share memory (SharedArrayBuffer), lower overhead, no port sharing</li>
</ul>
Each approach is suited for different use cases:
<pre><code>// Cluster — best for scaling HTTP servers across CPU cores
const cluster = require('cluster');
if (cluster.isPrimary) {
  for (let i = 0; i &lt; 4; i++) cluster.fork();
} else {
  app.listen(3000); // All workers share port 3000
}

// Worker threads — best for CPU-intensive tasks
const { Worker } = require('worker_threads');
app.post('/process-image', async (req, res) =&gt; {
  const worker = new Worker('./image-processor.js', {
    workerData: { image: req.body.image }
  });
  worker.on('message', (result) =&gt; res.json(result));
});</code></pre>
Use <strong>cluster</strong> to handle more HTTP requests by running multiple server instances.
Use <strong>worker_threads</strong> to offload CPU-intensive work without blocking the main event loop.`
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
                    a: `<code>package.json</code> contains <strong>metadata and configuration</strong> for your Node.js project.
The <code>name</code> and <code>version</code> fields are required, while <code>main</code> defines the entry point.
The <code>scripts</code> field defines runnable commands via <code>npm run</code>.
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
The <code>engines</code> field specifies which Node.js versions your project supports.
Use the <code>files</code> field or <code>.npmignore</code> to control which files are included when <strong>publishing</strong> to npm.`
                },
                {
                    q: "What is the difference between dependencies and devDependencies?",
                    a: `<code>dependencies</code> are packages required at <strong>runtime</strong>, while <code>devDependencies</code> are only needed during development.
Runtime dependencies include frameworks and libraries your application needs to function.
Dev dependencies include testing frameworks, linters, and build tools.
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
In production, run <code>npm install --production</code> or set <code>NODE_ENV=production</code> to skip devDependencies.
This reduces the install footprint and <strong>attack surface</strong> in production environments.`
                },
                {
                    q: "How does semantic versioning (semver) work in npm?",
                    a: `Semver uses a <strong>MAJOR.MINOR.PATCH</strong> format where each number has a specific meaning.
The caret (<code>^</code>) is the default range specifier, allowing minor and patch updates.
The tilde (<code>~</code>) is more conservative, allowing only <strong>patch-level</strong> updates.
<pre><code>// MAJOR — breaking changes
// MINOR — new features, backward-compatible
// PATCH — bug fixes, backward-compatible

// Range specifiers in package.json
"express": "4.18.2"    // Exact version only
"express": "^4.18.2"   // &gt;=4.18.2 &lt;5.0.0  (caret — default)
"express": "~4.18.2"   // &gt;=4.18.2 &lt;4.19.0 (tilde — patch only)
"express": "&gt;=4.0.0"   // Any version 4 or above
"express": "*"          // Any version</code></pre>
Use <code>^</code> for most dependencies where you trust the library to follow semver correctly.
Use exact versions or <code>~</code> for critical dependencies where even minor updates could cause issues.`
                },
                {
                    q: "What is package-lock.json and why is it important?",
                    a: `<code>package-lock.json</code> records the <strong>exact version</strong> of every installed dependency and its sub-dependencies, ensuring deterministic installs.
Without it, different machines may install different versions, leading to hard-to-debug inconsistencies.
<ul>
<li>Always commit <code>package-lock.json</code> to version control</li>
<li>Use <code>npm ci</code> in CI/CD for clean, reproducible installs</li>
<li>Never manually edit the lock file</li>
</ul>
Here is how the lock file pins exact versions:
<pre><code>// package.json — specifies a range
"lodash": "^4.17.0"

// package-lock.json — locks exact version + integrity hash
"lodash": {
  "version": "4.17.21",
  "resolved": "https://registry.npmjs.org/lodash/-/lodash-4.17.21.tgz",
  "integrity": "sha512-..."
}</code></pre>
Use <code>npm ci</code> instead of <code>npm install</code> in CI/CD pipelines for <strong>faster, reproducible</strong> builds.
The integrity hash verifies that the downloaded package has not been <strong>tampered with</strong>.`
                },
                {
                    q: "What is npx and how does it differ from npm?",
                    a: `<strong>npx</strong> executes npm packages without installing them globally, and comes bundled with npm 5.2+.
It checks local <code>node_modules/.bin</code> first, then downloads the package temporarily if not found.
This is ideal for <strong>one-off commands</strong>, project scaffolding, and running specific package versions.
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
Using <code>npx</code> prevents polluting the global installation with packages you only need once.
It also ensures you always run the <strong>latest version</strong> of scaffolding tools like <code>create-react-app</code>.`
                },
                {
                    q: "How do you create and use npm scripts?",
                    a: `npm scripts are defined in <code>package.json</code> and run via <code>npm run &lt;script&gt;</code>.
Special scripts like <code>start</code> and <code>test</code> can be run without the <code>run</code> keyword.
<code>pre</code> and <code>post</code> hooks run automatically before and after their corresponding script.
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
Use <code>&&</code> to chain commands sequentially within a single script.
Npm scripts have access to <code>node_modules/.bin</code> in the PATH, so you can run locally installed tools directly.`
                },
                {
                    q: "How do you use npm audit to find and fix vulnerabilities?",
                    a: `<code>npm audit</code> scans your dependency tree for known <strong>security vulnerabilities</strong> and suggests fixes.
It reports severity levels: <strong>low</strong>, <strong>moderate</strong>, <strong>high</strong>, and <strong>critical</strong> with remediation advice.
Run it regularly and integrate it into your CI/CD pipeline.
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
Address <strong>critical</strong> and <strong>high</strong> vulnerabilities immediately.
Use <code>npm audit signatures</code> to verify package provenance and detect supply chain attacks.`
                },
                {
                    q: "How do you publish your own npm package?",
                    a: `Publishing an npm package involves creating an account on npmjs.com, preparing your package, and running <code>npm publish</code>.
Use the <code>files</code> field in package.json or <code>.npmignore</code> to control which files are included.
Test locally with <code>npm link</code> and preview contents with <code>npm pack</code> before publishing.
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
The <code>npm version</code> command updates package.json and creates a <strong>git tag</strong> automatically.
Use <strong>scoped packages</strong> (<code>@org/name</code>) for organization-specific or private packages.`
                },
                {
                    q: "What are npm workspaces and how do you use them?",
                    a: `<strong>Workspaces</strong> allow you to manage multiple packages within a single repository (monorepo), sharing dependencies and enabling cross-references.
They hoist shared dependencies to the root <code>node_modules</code>, reducing <strong>duplication</strong> and disk usage.
Workspaces are configured in the root <code>package.json</code> with a glob pattern.
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
Use the <code>-w</code> flag to target commands at <strong>specific workspaces</strong>.
Workspaces automatically symlink local packages, enabling seamless cross-package imports.`
                },
                {
                    q: "What are peerDependencies and when should you use them?",
                    a: `<strong>peerDependencies</strong> specify packages that your library expects to be installed by the consuming project, avoiding duplicate versions.
They are used by <strong>plugins</strong> and <strong>libraries</strong> that integrate with a host package like React, Angular, or Express.
npm 7+ auto-installs peer dependencies, while npm 3-6 only issued warnings.
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
Common examples: React components need <code>react</code>, Babel plugins need <code>@babel/core</code>, Express middleware needs <code>express</code>.`
                },
                {
                    q: "What is the difference between npm, yarn, and pnpm?",
                    a: `<strong>npm</strong>, <strong>yarn</strong>, and <strong>pnpm</strong> are all package managers for Node.js with different approaches to dependency management.
npm is the default package manager that ships with Node.js, yarn was created by Facebook for faster installs, and pnpm uses a content-addressable store for disk efficiency.
Each has distinct advantages depending on project requirements and team preferences.
<pre><code>// npm — default, ships with Node.js
npm install
npm install express
npm ci  // Clean install from lock file

// yarn — faster installs, workspaces pioneer
yarn
yarn add express
yarn install --frozen-lockfile

// pnpm — disk-efficient, strict dependency resolution
pnpm install
pnpm add express
pnpm install --frozen-lockfile

// Lock files
// npm  → package-lock.json
// yarn → yarn.lock
// pnpm → pnpm-lock.yaml</code></pre>
<strong>pnpm</strong> is the most disk-efficient because it uses hard links from a global store instead of copying files.
<strong>yarn</strong> pioneered workspaces and plug'n'play (zero-installs), while <strong>npm</strong> has the broadest compatibility.`
                },
                {
                    q: "How do you manage environment-specific configurations in Node.js?",
                    a: `<strong>Environment-specific configuration</strong> allows different settings for development, staging, and production environments.
The <code>dotenv</code> package loads variables from <code>.env</code> files into <code>process.env</code> for local development.
Never commit <code>.env</code> files to version control \u2014 use <code>.env.example</code> as a template.
<pre><code>// .env file (never committed)
NODE_ENV=development
PORT=3000
DB_URL=mongodb://localhost:27017/mydb
JWT_SECRET=dev-secret-key

// .env.example (committed to git)
NODE_ENV=
PORT=
DB_URL=
JWT_SECRET=

// config.js
require('dotenv').config();

const config = {
  port: process.env.PORT || 3000,
  db: process.env.DB_URL,
  jwt: process.env.JWT_SECRET,
  isProduction: process.env.NODE_ENV === 'production'
};

module.exports = config;</code></pre>
Use a validation library like <strong>envalid</strong> or <strong>joi</strong> to validate required environment variables at startup.
In production, set environment variables through your hosting platform, <strong>not</strong> through .env files.`
                },
                {
                    q: "How do you handle npm package deprecation and updates?",
                    a: `Package <strong>deprecation</strong> signals that a package should no longer be used and is typically replaced by a newer alternative.
Use <code>npm outdated</code> to check for available updates and <code>npm update</code> to apply patch/minor updates.
Major version updates require manual intervention as they may contain <strong>breaking changes</strong>.
<pre><code># Check for outdated packages
npm outdated

# Output:
# Package    Current  Wanted  Latest  Location
# express    4.17.1   4.18.2  5.0.0   my-app
# lodash     4.17.20  4.17.21 4.17.21 my-app

# Apply safe updates (within semver range)
npm update

# Update a specific package to latest
npm install express@latest

# Check for deprecated packages
npm ls 2>&1 | grep -i deprecated

# Deprecate your own package
npm deprecate my-package@1.0.0 "Use my-package@2.0.0 instead"

# Interactive update tool
npx npm-check-updates -i</code></pre>
Use <strong>npm-check-updates</strong> (<code>ncu</code>) for interactive major version updates.
Always run tests after updating dependencies to catch <strong>breaking changes</strong> early.`
                },
                {
                    q: "How does npm link work for local package development?",
                    a: `<code>npm link</code> creates a <strong>symbolic link</strong> between a local package in development and a project that consumes it.
This enables testing changes to a library in real-time without publishing to npm after every change.
It works in two steps: link the package globally, then link it into the consuming project.
<pre><code># Step 1: In the library directory
cd ~/projects/my-utils
npm link
# Creates a global symlink: global/node_modules/my-utils → ~/projects/my-utils

# Step 2: In the consuming project
cd ~/projects/my-app
npm link my-utils
# Creates: my-app/node_modules/my-utils → global/node_modules/my-utils → ~/projects/my-utils

# Now changes in my-utils are immediately reflected in my-app

# To unlink when done
cd ~/projects/my-app
npm unlink my-utils
npm install  # Restore the published version

# Alternative: use file protocol in package.json
{
  "dependencies": {
    "my-utils": "file:../my-utils"
  }
}</code></pre>
The <code>file:</code> protocol is simpler for <strong>monorepo</strong> setups and does not require global linking.
Remember to <strong>unlink</strong> before deploying to ensure the published version is used in production.`
                },
                {
                    q: "What are npm overrides and how do you resolve dependency conflicts?",
                    a: `<strong>npm overrides</strong> allow you to force a specific version of a transitive dependency, useful for fixing vulnerabilities or resolving conflicts.
They replace the dependency version that a package would normally install with the version you specify.
This feature was introduced in <strong>npm 8.3</strong> and is configured in package.json.
<pre><code>// package.json — force a specific version of a transitive dependency
{
  "overrides": {
    // Force all instances of lodash to 4.17.21
    "lodash": "4.17.21",
    
    // Override only within a specific package
    "express": {
      "qs": "6.11.0"
    },
    
    // Use the same version as your direct dependency
    "react": "$react"
  }
}

// Check for duplicate/conflicting packages
npm ls lodash
# Shows all versions of lodash in the dependency tree

// Deduplicate packages
npm dedupe

// Clean install after overrides
rm -rf node_modules package-lock.json
npm install</code></pre>
Use overrides sparingly \u2014 they can cause <strong>compatibility issues</strong> if the overridden package is not truly compatible.
Run <code>npm ls &lt;package&gt;</code> to visualize the dependency tree and identify where conflicts originate.`
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
                    a: `<strong>XSS attacks</strong> inject malicious scripts into web pages viewed by other users.
Prevention involves <strong>sanitizing output</strong>, escaping dynamic content, and setting proper security headers.
Use the <code>xss</code> library to clean user input and <code>helmet</code> for Content-Security-Policy headers.
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
Use <strong>Content-Security-Policy</strong> headers to restrict which scripts can execute on the page.
Never insert untrusted data into HTML, JavaScript, or CSS without proper <strong>context-aware escaping</strong>.`
                },
                {
                    q: "What are CSRF tokens and how do you implement them?",
                    a: `<strong>CSRF (Cross-Site Request Forgery)</strong> tricks authenticated users into making unintended requests to your application.
CSRF tokens ensure requests originate from <strong>your own site</strong> by validating a unique token per session.
The token is embedded in forms as a hidden field and validated on every state-changing request.
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
Also use the <code>SameSite</code> cookie attribute for additional protection.
Check the <code>Origin</code> and <code>Referer</code> headers as a <strong>defense-in-depth</strong> measure.`
                },
                {
                    q: "How do you prevent SQL injection in Node.js?",
                    a: `<strong>SQL injection</strong> occurs when user input is concatenated directly into SQL queries, allowing attackers to execute arbitrary SQL.
Always use <strong>parameterized queries</strong> or an ORM to safely handle user input.
Never build queries with string concatenation or template literals using untrusted data.
<pre><code>const { Pool } = require('pg');
const pool = new Pool();

// BAD — vulnerable to SQL injection
const bad = \&#96;SELECT * FROM users WHERE name = '\${userInput}'\&#96;;

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
Parameterized queries separate <strong>SQL logic</strong> from <strong>data values</strong>, making injection impossible.
Use prepared statements or ORM query builders for all database interactions.`
                },
                {
                    q: "What is helmet.js and what security headers does it set?",
                    a: `<strong>helmet.js</strong> is an Express middleware that sets various HTTP security headers to protect against common web vulnerabilities.
It is a simple one-line addition that significantly improves your application's <strong>security posture</strong>.
Always use helmet in production applications.
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
Customize the <strong>Content-Security-Policy</strong> to match your application's resource requirements.
The <code>frameguard</code> option prevents your site from being embedded in iframes, blocking <strong>clickjacking</strong> attacks.`
                },
                {
                    q: "How do you implement rate limiting in a Node.js API?",
                    a: `<strong>Rate limiting</strong> restricts the number of requests a client can make in a time window, protecting against brute-force attacks and abuse.
The <code>express-rate-limit</code> middleware makes it easy to apply limits globally or to specific routes.
Apply stricter limits to <strong>authentication routes</strong> to prevent credential stuffing attacks.
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
In production, use a <strong>Redis-based store</strong> (<code>rate-limit-redis</code>) so limits are shared across multiple server instances.
Return <code>Retry-After</code> headers to inform clients when they can retry.`
                },
                {
                    q: "How do you sanitize user input in Node.js?",
                    a: `<strong>Input sanitization</strong> removes or escapes dangerous characters from user-provided data to prevent injection attacks.
The <code>express-validator</code> library provides both validation and sanitization in a single middleware chain.
Always validate on the server side even if client-side validation exists — <strong>never trust user input</strong>.
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
Use <code>express-mongo-sanitize</code> to prevent <strong>NoSQL injection</strong> by stripping MongoDB operators from input.
Combine server-side validation with <strong>schema validation</strong> at the database layer for defense in depth.`
                },
                {
                    q: "How do you set up HTTPS and TLS in a Node.js application?",
                    a: `<strong>HTTPS</strong> encrypts data in transit using TLS certificates, preventing eavesdropping and man-in-the-middle attacks.
You can use Node's built-in <code>https</code> module or terminate TLS at a reverse proxy like Nginx.
In production, terminating TLS at the reverse proxy provides <strong>better performance</strong>.
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
  res.writeHead(301, { Location: \&#96;https://\${req.headers.host}\${req.url}\&#96; });
  res.end();
}).listen(80);</code></pre>
Use <strong>Let's Encrypt</strong> for free, automated TLS certificates.
Always redirect HTTP to HTTPS and set <strong>HSTS headers</strong> to enforce HTTPS for all future visits.`
                },
                {
                    q: "How do you configure CORS in an Express application?",
                    a: `<strong>CORS (Cross-Origin Resource Sharing)</strong> controls which domains can access your API from a browser.
Configure it with the <code>cors</code> middleware, specifying <strong>allowed origins</strong>, methods, and headers.
Never use <code>origin: '*'</code> with <code>credentials: true</code> — always whitelist trusted origins in production.
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
The <code>maxAge</code> option reduces preflight request overhead by caching the CORS response.
Use <strong>per-route CORS</strong> when only specific endpoints need cross-origin access.`
                },
                {
                    q: "How should you manage environment variables and secrets?",
                    a: `Store sensitive data like <strong>API keys</strong>, <strong>database passwords</strong>, and <strong>tokens</strong> in environment variables, never in source code.
Use the <code>dotenv</code> package to load variables from <code>.env</code> files during development.
Validate all required environment variables at <strong>startup</strong> to fail fast if configuration is missing.
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
    console.error(\&#96;Missing required env var: \${key}\&#96;);
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
                    a: `Regularly <strong>audit and update</strong> dependencies to patch known security vulnerabilities.
Run <code>npm audit</code> in CI/CD pipelines and fail builds on <strong>high/critical</strong> severity issues.
Use automated tools like <strong>Dependabot</strong>, <strong>Snyk</strong>, or <strong>Renovate</strong> for continuous vulnerability monitoring.
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
Security is an <strong>ongoing process</strong> — schedule regular dependency reviews and subscribe to security advisories.`
                },
                {
                    q: "How do you prevent NoSQL injection in MongoDB applications?",
                    a: `<strong>NoSQL injection</strong> exploits MongoDB query operators like <code>$gt</code>, <code>$ne</code>, and <code>$regex</code> in user input to bypass authentication or extract data.
Attackers send JSON objects instead of strings, causing queries to behave unexpectedly.
Use <code>express-mongo-sanitize</code> and strict schema validation to prevent these attacks.
<pre><code>// Vulnerable login — attacker sends { "$ne": "" } as password
app.post('/login', async (req, res) =&gt; {
  // If req.body.password = { "$ne": "" }
  // This matches ANY user with a non-empty password
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password  // DANGEROUS
  });
});

// Fix 1: Sanitize input
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize()); // Strips $ and . from input

// Fix 2: Explicit type casting
app.post('/login', async (req, res) =&gt; {
  const email = String(req.body.email);
  const password = String(req.body.password);
  const user = await User.findOne({ email });
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Fix 3: Schema-level validation
const userSchema = new mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, required: true }
});</code></pre>
Always <strong>cast input to expected types</strong> before using it in queries.
Never pass raw <code>req.body</code> or <code>req.query</code> directly to database queries.`
                },
                {
                    q: "How do you implement Content Security Policy (CSP) in Node.js?",
                    a: `<strong>Content Security Policy</strong> is an HTTP header that tells browsers which sources of content are allowed to execute.
CSP is one of the most effective defenses against <strong>XSS attacks</strong> because it prevents inline scripts and unauthorized resource loading.
Configure it through <code>helmet</code> or set the header directly.
<pre><code>const helmet = require('helmet');

app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "cdn.example.com"],
    styleSrc: ["'self'", "'unsafe-inline'"],
    imgSrc: ["'self'", "data:", "images.example.com"],
    connectSrc: ["'self'", "api.example.com"],
    fontSrc: ["'self'", "fonts.googleapis.com"],
    objectSrc: ["'none'"],
    frameAncestors: ["'none'"],
    upgradeInsecureRequests: []
  }
}));

// Or set manually
app.use((req, res, next) =&gt; {
  res.setHeader(
    'Content-Security-Policy',
    "default-src 'self'; script-src 'self' cdn.example.com"
  );
  next();
});</code></pre>
Start with <code>Content-Security-Policy-Report-Only</code> to test policies without blocking resources.
Use <strong>nonce-based</strong> or <strong>hash-based</strong> CSP for inline scripts instead of <code>'unsafe-inline'</code>.`
                },
                {
                    q: "How do you secure cookies in a Node.js application?",
                    a: `<strong>Secure cookie configuration</strong> prevents session hijacking, cross-site attacks, and unauthorized access.
Set multiple cookie attributes to enforce strict security boundaries.
Each attribute addresses a different attack vector.
<pre><code>app.use(session({
  secret: process.env.SESSION_SECRET,
  cookie: {
    httpOnly: true,      // Prevents JavaScript access (XSS protection)
    secure: true,        // Only sent over HTTPS
    sameSite: 'strict',  // Prevents CSRF attacks
    maxAge: 3600000,     // 1 hour expiry
    domain: '.myapp.com',
    path: '/'
  }
}));

// For individual cookies
res.cookie('token', value, {
  httpOnly: true,
  secure: process.env.NODE_ENV === 'production',
  sameSite: 'lax',
  maxAge: 24 * 60 * 60 * 1000,
  signed: true  // Detect tampering with cookie-parser secret
});

// Use cookie-parser with a secret for signed cookies
const cookieParser = require('cookie-parser');
app.use(cookieParser(process.env.COOKIE_SECRET));</code></pre>
<strong>httpOnly</strong> prevents XSS from stealing cookies via <code>document.cookie</code>.
<strong>sameSite: 'strict'</strong> blocks cookies from being sent on cross-site requests, preventing CSRF.`
                },
                {
                    q: "How do you implement request payload size limits in Express?",
                    a: `<strong>Payload size limits</strong> prevent denial-of-service attacks where attackers send extremely large request bodies to exhaust server memory.
Express's built-in <code>express.json()</code> and <code>express.urlencoded()</code> middleware accept a <code>limit</code> option.
Set different limits based on the expected content type and endpoint purpose.
<pre><code>const express = require('express');
const app = express();

// Global payload limits
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

// Per-route limits for file uploads
app.post('/upload',
  express.json({ limit: '50mb' }),
  (req, res) =&gt; {
    // Handle large upload
  }
);

// Raw body limit for webhooks
app.post('/webhook',
  express.raw({ type: 'application/json', limit: '1mb' }),
  (req, res) =&gt; {
    const payload = JSON.parse(req.body);
  }
);

// Custom error handler for payload too large
app.use((err, req, res, next) =&gt; {
  if (err.type === 'entity.too.large') {
    return res.status(413).json({ error: 'Payload too large' });
  }
  next(err);
});</code></pre>
The default limit is <strong>100kb</strong> which is reasonable for most JSON APIs.
Set <strong>aggressive limits</strong> on public-facing endpoints and higher limits only where needed (e.g., file uploads).`
                },
                {
                    q: "How do you protect against HTTP parameter pollution in Node.js?",
                    a: `<strong>HTTP Parameter Pollution (HPP)</strong> occurs when attackers send multiple values for the same query parameter to bypass validation or cause unexpected behavior.
The <code>hpp</code> middleware selects the last value for each parameter, preventing array injection.
This is important because Express parses duplicate parameters as arrays by default.
<pre><code>const hpp = require('hpp');

// Without HPP: ?sort=name&sort=DROP TABLE users
// req.query.sort = ['name', 'DROP TABLE users']

// With HPP: picks the last value
app.use(hpp());
// req.query.sort = 'DROP TABLE users'

// Whitelist parameters that should allow arrays
app.use(hpp({
  whitelist: ['tags', 'categories', 'ids']
}));
// ?tags=js&tags=node → req.query.tags = ['js', 'node'] (allowed)
// ?sort=name&sort=malicious → req.query.sort = 'malicious' (last wins)

// Manual protection without middleware
app.get('/search', (req, res) =&gt; {
  const sort = Array.isArray(req.query.sort)
    ? req.query.sort[req.query.sort.length - 1]
    : req.query.sort;
});</code></pre>
Always <strong>whitelist</strong> parameters that legitimately accept multiple values.
Combine HPP with <strong>input validation</strong> to ensure parameter values are safe regardless of count.`
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
                    a: `<strong>Redis</strong> is an in-memory data store used as a cache, message broker, and session store.

Use the <code>redis</code> package to connect from Node.js. Redis supports strings, hashes, lists, sets, and sorted sets as data types.

It provides sub-millisecond read/write performance because all data is stored in memory, making it ideal for reducing database load and improving response times.

Here's how to connect and perform basic operations:
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

Redis is extremely fast because all data resides in RAM. Use it to cache frequently accessed data, store session information, and implement pub/sub messaging patterns.`
                },
                {
                    q: "How do you use Redis GET, SET, and DEL commands in Node.js?",
                    a: `<strong>GET</strong>, <strong>SET</strong>, and <strong>DEL</strong> are the fundamental Redis commands for storing, retrieving, and removing key-value data.

Redis also provides atomic operations like <strong>INCR/DECR</strong> for counters and <strong>EXISTS</strong> to check key existence.

All values in Redis are stored as strings, so numbers must be parsed when retrieved.

Here are examples of core Redis operations:
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
const keys = await client.keys('user:*');</code></pre>

Avoid using <code>KEYS</code> in production as it scans all keys and blocks the server. Use <code>SCAN</code> for iterating through keys safely.

The <strong>INCR</strong> operation is atomic, making it safe for concurrent access without race conditions.`
                },
                {
                    q: "How do you set TTL (time to live) for cache expiry in Redis?",
                    a: `<strong>TTL (Time to Live)</strong> automatically deletes keys after a specified duration, preventing stale data and managing memory.

You can set expiry at creation time with <strong>setEx</strong> or add expiry to existing keys with <strong>expire</strong>.

TTL returns -1 if the key has no expiry and -2 if the key doesn't exist.

Here are various ways to manage key expiration:
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
});</code></pre>

The <strong>NX + EX</strong> combination is commonly used for distributed locks — the key acts as a lock that automatically releases after the expiry time.

Always set TTLs on cached data to prevent unbounded memory growth.`
                },
                {
                    q: "What is the cache-aside pattern and how do you implement it?",
                    a: `The <strong>cache-aside</strong> (lazy-loading) pattern checks the cache first — on a miss, it loads from the database and stores the result in the cache.

This is the most common caching pattern and works best for <strong>read-heavy workloads</strong> where data doesn't change frequently.

The application code manages both the cache and the database, giving full control over what gets cached and when.

Here's a typical implementation with cache invalidation on updates:
<pre><code>async function getUser(userId) {
  const cacheKey = \&#96;user:\${userId}\&#96;;

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
  await redisClient.del(\&#96;user:\${userId}\&#96;); // Invalidate cache
}</code></pre>

Data can become stale until the TTL expires or the cache is explicitly invalidated. Always invalidate on writes to keep data consistent.

Combine TTL expiry with event-driven invalidation for the most robust caching strategy.`
                },
                {
                    q: "How do HTTP Cache-Control headers work in Node.js?",
                    a: `<strong>Cache-Control</strong> headers tell browsers and CDNs how to cache HTTP responses, reducing server load and improving latency.

Key directives include <strong>public</strong> (CDN-cacheable), <strong>private</strong> (browser-only), <strong>no-store</strong> (never cache), and <strong>max-age</strong> (seconds to cache).

The <strong>must-revalidate</strong> directive forces the client to check with the server before using a stale cached response.

Here's how to set Cache-Control headers in Express:
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

Use <code>public</code> for CDN-cacheable content, <code>private</code> for user-specific data, and <code>no-store</code> for sensitive data.

The <strong>immutable</strong> directive tells browsers the resource will never change, preventing unnecessary revalidation requests.`
                },
                {
                    q: "What is an ETag and how does it enable conditional requests?",
                    a: `An <strong>ETag</strong> (Entity Tag) is a hash of the response content. The client sends it back on subsequent requests to check if the data has changed.

When the client sends the cached ETag via the <strong>If-None-Match</strong> header, the server compares it with the current content hash.

If the content hasn't changed, the server returns <strong>304 Not Modified</strong> without the response body, saving bandwidth.

Here's how to implement ETags manually and use Express's built-in support:
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

ETags save bandwidth by avoiding resending unchanged data. <strong>Strong ETags</strong> require byte-for-byte equality, while <strong>weak ETags</strong> (prefixed with W/) allow semantically equivalent content.

Express generates ETags automatically for responses — use <code>app.set('etag', false)</code> to disable them.`
                },
                {
                    q: "What is the difference between write-through and write-behind caching?",
                    a: `Both strategies keep the cache in sync with the database on writes but differ in <strong>when</strong> the database is updated.

<strong>Write-through</strong> updates both cache and database simultaneously before returning to the client, ensuring consistency at the cost of write latency.

<strong>Write-behind</strong> (write-back) updates only the cache immediately and queues the database write for later, providing faster writes but risking data loss.

Here's how each pattern works:
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
<li><strong>Write-through</strong> — consistent, higher write latency, ideal for critical data</li>
<li><strong>Write-behind</strong> — fast writes, risk of data loss if cache fails before DB sync, good for high-throughput writes</li>
</ul>

Choose write-through for financial or critical data where consistency is paramount, and write-behind for analytics or logging where occasional data loss is acceptable.`
                },
                {
                    q: "How do you use Redis as a session store in Express?",
                    a: `Storing sessions in <strong>Redis</strong> allows them to persist across server restarts and be shared across multiple application instances.

The <strong>connect-redis</strong> package integrates Redis with Express's session middleware, replacing the default in-memory store.

Always configure secure cookie options like <strong>httpOnly</strong>, <strong>secure</strong>, and <strong>sameSite</strong> to prevent session hijacking.

Here's a complete Redis session store setup:
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

Redis-backed sessions scale horizontally across multiple servers and survive process restarts, unlike the default in-memory session store.

Set <strong>resave: false</strong> to prevent unnecessary session writes and <strong>saveUninitialized: false</strong> to avoid storing empty sessions.`
                },
                {
                    q: "What are cache invalidation strategies?",
                    a: `<strong>Cache invalidation</strong> ensures stale data is removed or refreshed. It is widely considered one of the hardest problems in computer science.

The main strategies are <strong>TTL-based</strong> (automatic expiry), <strong>event-driven</strong> (invalidate on write), <strong>pattern-based</strong> (delete matching keys), and <strong>versioned keys</strong>.

Combining multiple strategies provides the most robust caching — use TTL as a safety net with event-driven invalidation for freshness.

Here are the four main invalidation strategies:
<pre><code>// 1. TTL-based — data expires automatically
await redisClient.setEx('product:1', 300, data); // 5 min

// 2. Event-driven — invalidate on write
async function updateProduct(id, data) {
  await db.updateProduct(id, data);
  await redisClient.del(\&#96;product:\${id}\&#96;);     // Delete cached item
  await redisClient.del('products:list');       // Delete related list
}

// 3. Pattern-based — delete matching keys
async function clearUserCache(userId) {
  const keys = await redisClient.keys(\&#96;user:\${userId}:*\&#96;);
  if (keys.length) await redisClient.del(keys);
}

// 4. Versioned keys — change key on update
const version = await redisClient.incr('product:1:version');
const key = \&#96;product:1:v\${version}\&#96;;
await redisClient.setEx(key, 3600, data);</code></pre>

Prefer explicit invalidation on writes over TTL alone. Event-driven invalidation ensures immediate freshness while TTL prevents indefinitely stale data.

For pattern-based invalidation in production, use <strong>SCAN</strong> instead of <strong>KEYS</strong> to avoid blocking the Redis server.`
                },
                {
                    q: "What is the difference between in-memory caching and distributed caching?",
                    a: `<strong>In-memory caching</strong> stores data in the application process, while <strong>distributed caching</strong> (Redis, Memcached) uses a shared external store accessible by all instances.

In-memory caches are the fastest option but are limited to a single process and lost on restart. Distributed caches add slight network latency but provide shared state.

For small, hot datasets that don't need sharing, in-memory caching is ideal. For multi-instance deployments, use Redis.

Here's an example of both approaches:
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

Use in-memory for hot, small datasets and use Redis for shared state, larger caches, and multi-server deployments.`
                },
                {
                    q: "How do you implement Redis Pub/Sub for cache invalidation across multiple Node.js instances?",
                    a: `<strong>Redis Pub/Sub</strong> allows multiple Node.js instances to coordinate cache invalidation by broadcasting messages when data changes.

Each instance subscribes to an invalidation channel and clears its local cache when it receives a message. This ensures all instances stay in sync.

The publisher sends invalidation events, and all subscribers (including the publisher itself) react by clearing the relevant cached data.

Here's a complete pub/sub cache invalidation setup:
<pre><code>const { createClient } = require('redis');

// Separate clients for pub and sub (required by Redis)
const publisher = createClient();
const subscriber = createClient();
const cache = new Map(); // Local in-memory cache

await publisher.connect();
await subscriber.connect();

// Subscribe to invalidation channel
await subscriber.subscribe('cache:invalidate', (message) =&gt; {
  const { key, pattern } = JSON.parse(message);
  if (key) {
    cache.delete(key);
    console.log(\&#96;Invalidated key: \${key}\&#96;);
  }
  if (pattern) {
    for (const k of cache.keys()) {
      if (k.startsWith(pattern)) cache.delete(k);
    }
  }
});

// Publish invalidation event on data change
async function updateProduct(id, data) {
  await db.updateProduct(id, data);
  await publisher.publish('cache:invalidate',
    JSON.stringify({ key: \&#96;product:\${id}\&#96; })
  );
}

// Bulk invalidation by pattern
async function clearCategoryCache(categoryId) {
  await publisher.publish('cache:invalidate',
    JSON.stringify({ pattern: \&#96;category:\${categoryId}:\&#96; })
  );
}</code></pre>

Redis requires <strong>separate client connections</strong> for publishing and subscribing — a subscribed client cannot execute other commands.

This pattern combines in-memory speed with distributed consistency across all application instances.`
                },
                {
                    q: "What are Redis data structures like Hashes, Lists, and Sets, and when do you use them for caching?",
                    a: `Redis supports multiple <strong>data structures</strong> beyond simple strings — each optimized for different caching use cases.

<strong>Hashes</strong> store field-value pairs (like objects), <strong>Lists</strong> maintain ordered sequences, <strong>Sets</strong> store unique values, and <strong>Sorted Sets</strong> add scores for ranking.

Choosing the right data structure reduces memory usage and enables atomic operations on structured data.

Here are examples of each data structure:
<pre><code>const client = createClient();
await client.connect();

// HASHES — store object-like data (user profiles)
await client.hSet('user:1', { name: 'Alice', age: '30', role: 'admin' });
const name = await client.hGet('user:1', 'name');
const user = await client.hGetAll('user:1'); // { name, age, role }
await client.hIncrBy('user:1', 'age', 1); // Increment single field

// LISTS — ordered data (recent activity, queues)
await client.lPush('recent:posts', 'post:5'); // Add to front
await client.rPush('queue:emails', JSON.stringify(email)); // Add to back
const recent = await client.lRange('recent:posts', 0, 9); // Get first 10
await client.lTrim('recent:posts', 0, 99); // Keep only 100 items

// SETS — unique values (tags, online users)
await client.sAdd('online:users', 'user:1', 'user:2');
await client.sRem('online:users', 'user:1');
const isOnline = await client.sIsMember('online:users', 'user:2');
const count = await client.sCard('online:users');

// SORTED SETS — ranked data (leaderboards)
await client.zAdd('leaderboard', { score: 100, value: 'player:1' });
await client.zAdd('leaderboard', { score: 250, value: 'player:2' });
const top10 = await client.zRangeWithScores('leaderboard', 0, 9, { REV: true });</code></pre>

<strong>Hashes</strong> are memory-efficient for storing objects — they use less memory than separate string keys for each field.

Use <strong>Sorted Sets</strong> for leaderboards, rate limiting windows, and priority queues where ordering by score is needed.`
                },
                {
                    q: "How do you implement a caching middleware in Express?",
                    a: `A <strong>caching middleware</strong> intercepts requests and returns cached responses when available, bypassing the route handler entirely.

This approach centralizes caching logic, keeping route handlers clean and focused on business logic.

The middleware checks Redis for a cached response, and if found, returns it immediately. On a cache miss, it wraps the <code>res.json</code> method to capture and cache the response.

Here's a reusable caching middleware:
<pre><code>const { createClient } = require('redis');
const client = createClient();
client.connect();

function cacheMiddleware(ttl = 300) {
  return async (req, res, next) =&gt; {
    // Only cache GET requests
    if (req.method !== 'GET') return next();

    const key = \&#96;cache:\${req.originalUrl}\&#96;;

    try {
      const cached = await client.get(key);
      if (cached) {
        return res.json(JSON.parse(cached));
      }

      // Override res.json to cache the response
      const originalJson = res.json.bind(res);
      res.json = async (data) =&gt; {
        await client.setEx(key, ttl, JSON.stringify(data));
        return originalJson(data);
      };

      next();
    } catch (err) {
      console.error('Cache error:', err);
      next(); // Fail open — continue without cache
    }
  };
}

// Usage
app.get('/api/products', cacheMiddleware(600), getProducts);
app.get('/api/users/:id', cacheMiddleware(120), getUser);

// Invalidation helper
async function invalidateCache(pattern) {
  const keys = await client.keys(\&#96;cache:\${pattern}\&#96;);
  if (keys.length) await client.del(keys);
}</code></pre>

The middleware <strong>fails open</strong> — if Redis is unavailable, requests proceed normally without caching rather than returning errors.

Use <code>req.originalUrl</code> as the cache key to include query parameters in the cache lookup.`
                },
                {
                    q: "What is cache stampede (thundering herd) and how do you prevent it?",
                    a: `A <strong>cache stampede</strong> (thundering herd) occurs when a popular cache key expires and many concurrent requests simultaneously hit the database to rebuild the cache.

This can overwhelm the database and cause cascading failures. Prevention strategies include <strong>locking</strong>, <strong>early refresh</strong>, and <strong>stale-while-revalidate</strong>.

The most common solution is a <strong>distributed lock</strong> — only one request rebuilds the cache while others wait or get stale data.

Here are three prevention strategies:
<pre><code>// 1. DISTRIBUTED LOCK — only one request rebuilds cache
async function getWithLock(key, fetchFn, ttl = 300) {
  const cached = await redis.get(key);
  if (cached) return JSON.parse(cached);

  const lockKey = \&#96;lock:\${key}\&#96;;
  const acquired = await redis.set(lockKey, '1', { NX: true, EX: 10 });

  if (acquired) {
    try {
      const data = await fetchFn();
      await redis.setEx(key, ttl, JSON.stringify(data));
      return data;
    } finally {
      await redis.del(lockKey);
    }
  } else {
    // Wait and retry — another process is rebuilding
    await new Promise(r =&gt; setTimeout(r, 100));
    return getWithLock(key, fetchFn, ttl);
  }
}

// 2. EARLY REFRESH — refresh before expiry
async function getWithEarlyRefresh(key, fetchFn, ttl = 300) {
  const cached = await redis.get(key);
  const remainingTtl = await redis.ttl(key);

  if (cached &amp;&amp; remainingTtl &gt; ttl * 0.2) {
    return JSON.parse(cached); // Still fresh enough
  }

  // Refresh in background if getting stale
  if (cached) {
    fetchFn().then(data =&gt;
      redis.setEx(key, ttl, JSON.stringify(data))
    );
    return JSON.parse(cached); // Return stale data immediately
  }

  const data = await fetchFn();
  await redis.setEx(key, ttl, JSON.stringify(data));
  return data;
}

// 3. STALE-WHILE-REVALIDATE — never block on cache miss
async function getStaleWhileRevalidate(key, fetchFn, ttl = 300) {
  const cached = await redis.get(key);
  if (cached) {
    const { data, expiry } = JSON.parse(cached);
    if (Date.now() &gt; expiry) {
      // Expired — refresh in background, return stale
      fetchFn().then(fresh =&gt;
        redis.set(key, JSON.stringify({ data: fresh, expiry: Date.now() + ttl * 1000 }))
      );
    }
    return data;
  }
  const data = await fetchFn();
  await redis.set(key, JSON.stringify({ data, expiry: Date.now() + ttl * 1000 }));
  return data;
}</code></pre>

The <strong>lock approach</strong> prevents duplicate work but adds latency for waiting requests. The <strong>early refresh</strong> approach proactively rebuilds before expiry.

<strong>Stale-while-revalidate</strong> provides the best user experience — it always returns data immediately and refreshes in the background.`
                },
                {
                    q: "How do you implement an LRU cache in Node.js?",
                    a: `An <strong>LRU (Least Recently Used) cache</strong> evicts the least recently accessed items when the cache reaches its maximum size.

This is ideal for in-memory caching where you need to limit memory usage. The most recently accessed items stay cached while rarely accessed ones are evicted.

The <strong>lru-cache</strong> package is the most popular implementation, but you can also build a simple one using a <strong>Map</strong> which maintains insertion order.

Here's both a library-based and custom implementation:
<pre><code>// Using lru-cache package (recommended)
const { LRUCache } = require('lru-cache');

const cache = new LRUCache({
  max: 500,                    // Maximum 500 items
  maxSize: 50 * 1024 * 1024,  // 50MB max memory
  sizeCalculation: (value) =&gt; JSON.stringify(value).length,
  ttl: 1000 * 60 * 5,         // 5 minute TTL
  allowStale: true,            // Return stale data while refreshing
  updateAgeOnGet: true,        // Reset TTL on access
});

cache.set('user:1', { name: 'Alice' });
const user = cache.get('user:1');
cache.has('user:1');  // true
cache.delete('user:1');
cache.clear();

// Custom LRU using Map (maintains insertion order)
class SimpleLRU {
  constructor(maxSize) {
    this.max = maxSize;
    this.cache = new Map();
  }

  get(key) {
    if (!this.cache.has(key)) return undefined;
    const value = this.cache.get(key);
    // Move to end (most recent)
    this.cache.delete(key);
    this.cache.set(key, value);
    return value;
  }

  set(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    // Evict oldest if over limit
    if (this.cache.size &gt; this.max) {
      const oldest = this.cache.keys().next().value;
      this.cache.delete(oldest);
    }
  }
}

const lru = new SimpleLRU(100);
lru.set('key', 'value');
lru.get('key');</code></pre>

JavaScript <strong>Map</strong> preserves insertion order, which makes it suitable for building LRU caches — the first entry is always the oldest.

Use the <strong>lru-cache</strong> library in production for features like TTL, size-based eviction, and stale-while-revalidate support.`
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
                    a: `A <strong>monolith</strong> is a single deployable unit containing all features, while <strong>microservices</strong> split the application into small, independently deployable services.

In a monolith, all modules share the same process, database, and deployment pipeline. Microservices run as separate processes with their own databases.

The choice depends on team size, scaling needs, and operational maturity — microservices add significant operational complexity.

Here's the structural difference:
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

Start with a monolith and extract microservices only when you have clear scaling or team-ownership boundaries. Premature decomposition is a common mistake.`
                },
                {
                    q: "What is an API gateway and why is it used in microservices?",
                    a: `An <strong>API gateway</strong> is a single entry point that routes requests to the appropriate microservice, handling cross-cutting concerns like authentication, rate limiting, and logging.

Instead of clients communicating with each microservice directly, all requests go through the gateway, which provides a unified interface.

The gateway can also handle request aggregation, protocol translation, and response caching.

Here's a basic API gateway using http-proxy-middleware:
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

The gateway handles authentication, rate limiting, logging, and load balancing so individual services don't have to.

Popular API gateway solutions include <strong>Kong</strong>, <strong>Express Gateway</strong>, <strong>AWS API Gateway</strong>, and <strong>Nginx</strong>.`
                },
                {
                    q: "What is service discovery in microservices?",
                    a: `<strong>Service discovery</strong> allows microservices to find and communicate with each other dynamically, without hardcoded addresses.

As services scale up/down or move across hosts, their addresses change. Service discovery provides a registry where services register themselves and look up other services.

There are two approaches — <strong>client-side discovery</strong> (client queries the registry) and <strong>server-side discovery</strong> (load balancer queries the registry).

Here's a simple service registry implementation:
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

Production tools include <strong>Consul</strong>, <strong>Eureka</strong>, and <strong>Kubernetes DNS</strong>, which provide health checking, load balancing, and DNS-based discovery.

Kubernetes handles service discovery automatically through its built-in DNS and Service resources.`
                },
                {
                    q: "How do message queues like RabbitMQ work with Node.js?",
                    a: `<strong>Message queues</strong> enable asynchronous communication between services. Producers send messages to a queue, and consumers process them independently.

This decoupling means the producer doesn't wait for the consumer — messages are persisted in the queue until processed, providing reliability and load leveling.

RabbitMQ uses the <strong>AMQP protocol</strong>, and the <code>amqplib</code> package provides the Node.js client.

Here's a producer-consumer setup with RabbitMQ:
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

Message queues provide <strong>decoupling</strong>, <strong>reliability</strong> (persistent messages survive restarts), and <strong>load leveling</strong> during traffic spikes.

Use <strong>prefetch(1)</strong> to ensure fair distribution of work across multiple consumers and prevent one consumer from being overwhelmed.`
                },
                {
                    q: "What is the circuit breaker pattern?",
                    a: `The <strong>circuit breaker</strong> pattern prevents cascading failures by stopping requests to a failing service and providing a fallback.

It has three states: <strong>CLOSED</strong> (normal operation), <strong>OPEN</strong> (all requests fail immediately), and <strong>HALF_OPEN</strong> (testing if the service recovered).

When failures exceed a threshold, the circuit opens. After a timeout, it enters half-open state to test recovery with a single request.

Here's a circuit breaker implementation:
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
    if (this.failures >= this.threshold) {
      this.state = 'OPEN';
      setTimeout(() =&gt; { this.state = 'HALF_OPEN'; }, this.timeout);
    }
  }
}

const breaker = new CircuitBreaker(fetchUserService);
const user = await breaker.call(userId);</code></pre>

Use libraries like <strong>opossum</strong> for production-ready circuit breakers with metrics, fallbacks, and event hooks.

Circuit breakers are essential in microservices to prevent a single failing service from bringing down the entire system.`
                },
                {
                    q: "What is event-driven architecture in microservices?",
                    a: `<strong>Event-driven architecture</strong> uses events to communicate between services instead of direct HTTP calls, promoting loose coupling and scalability.

Services publish events when something happens (e.g., order created) and other services subscribe to events they care about. Publishers don't know about subscribers.

This pattern makes it easy to add new consumers without modifying producers, enabling independent team development.

Here's an event-driven communication example:
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

In production, use message brokers like <strong>Apache Kafka</strong>, <strong>RabbitMQ</strong>, or <strong>Redis Pub/Sub</strong> instead of in-process EventEmitter.

Event-driven architecture enables eventual consistency and horizontal scaling but requires careful handling of event ordering and idempotency.`
                },
                {
                    q: "How do you use Docker with a Node.js microservice?",
                    a: `<strong>Docker</strong> packages your Node.js service and its dependencies into a container that runs consistently across all environments.

A <strong>Dockerfile</strong> defines the build steps, and <strong>docker-compose</strong> orchestrates multiple services together for local development.

Key best practices include copying <code>package*.json</code> first for layer caching, using <code>npm ci</code> for deterministic installs, and running as a non-root user.

Here's a production-ready Dockerfile and docker-compose setup:
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

Use multi-stage builds to reduce image size and add a <code>.dockerignore</code> file to exclude <code>node_modules</code>, <code>.git</code>, and test files.

Always pin specific Node.js versions in your base image to ensure reproducible builds.`
                },
                {
                    q: "What is gRPC and how do you use it in Node.js?",
                    a: `<strong>gRPC</strong> is a high-performance RPC (Remote Procedure Call) framework using <strong>Protocol Buffers</strong> for serialization and <strong>HTTP/2</strong> for transport.

Unlike REST which uses JSON over HTTP/1.1, gRPC uses binary serialization which is much faster and more compact. It also supports streaming and bidirectional communication.

Service contracts are defined in <code>.proto</code> files, and client/server code is auto-generated from them.

Here's a gRPC service definition and server implementation:
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

gRPC is ideal for <strong>service-to-service communication</strong> within a microservices architecture where performance matters.

It supports four communication patterns: unary, server streaming, client streaming, and bidirectional streaming.`
                },
                {
                    q: "What is the saga pattern for distributed transactions?",
                    a: `The <strong>saga pattern</strong> manages distributed transactions across microservices using a sequence of local transactions with compensating actions for rollback.

Unlike traditional ACID transactions, sagas achieve <strong>eventual consistency</strong> — each service commits its own transaction and publishes an event to trigger the next step.

There are two approaches: <strong>orchestration</strong> (central coordinator controls the flow) and <strong>choreography</strong> (services react to events independently).

Here's an orchestrator-based saga:
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

Each step has a <strong>compensating action</strong>. If step 3 fails, steps 2 and 1 are rolled back in reverse order.

Compensating actions must be <strong>idempotent</strong> — they may be retried if the initial compensation attempt fails.`
                },
                {
                    q: "How do you implement health check endpoints in microservices?",
                    a: `<strong>Health checks</strong> allow load balancers and orchestrators to monitor service availability and route traffic only to healthy instances.

There are two types: <strong>liveness</strong> checks (is the process running?) and <strong>readiness</strong> checks (can it handle requests? are dependencies available?).

Kubernetes uses both to manage pod lifecycle — failing liveness restarts the pod, failing readiness removes it from the load balancer.

Here's a comprehensive health check implementation:
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

Return <strong>200</strong> for healthy and <strong>503</strong> for unhealthy. Include dependency checks in readiness endpoints to prevent routing traffic to instances that can't serve requests.

Keep liveness checks simple and fast — they should only verify the process is responsive, not check external dependencies.`
                },
                {
                    q: "What is the Strangler Fig pattern for migrating from monolith to microservices?",
                    a: `The <strong>Strangler Fig pattern</strong> gradually migrates a monolith to microservices by incrementally replacing specific functionality with new services while keeping the monolith running.

Named after strangler fig trees that grow around host trees, this pattern avoids the risky "big bang" rewrite approach. New features are built as microservices while existing features are migrated one at a time.

A <strong>facade</strong> (typically an API gateway or reverse proxy) routes traffic between the monolith and new services based on the endpoint.

Here's how to implement the strangler pattern:
<pre><code>const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

// NEW: Migrated user service (microservice)
app.use('/api/users', createProxyMiddleware({
  target: 'http://user-service:3001',
  changeOrigin: true
}));

// NEW: Migrated product service (microservice)
app.use('/api/products', createProxyMiddleware({
  target: 'http://product-service:3002',
  changeOrigin: true
}));

// LEGACY: Everything else still goes to the monolith
app.use('/', createProxyMiddleware({
  target: 'http://monolith:3000',
  changeOrigin: true
}));

// Migration steps:
// 1. Identify bounded contexts in the monolith
// 2. Build new microservice for one context
// 3. Route traffic to new service via facade
// 4. Verify correctness (shadow traffic, canary)
// 5. Remove old code from monolith
// 6. Repeat for next context</code></pre>

The key advantage is <strong>zero downtime migration</strong> — users never notice the architectural change because the facade handles routing transparently.

Use <strong>feature flags</strong> and <strong>canary deployments</strong> to gradually shift traffic from the monolith to the new service, allowing easy rollback if issues arise.`
                },
                {
                    q: "What is the CQRS pattern and how does it apply to Node.js microservices?",
                    a: `<strong>CQRS (Command Query Responsibility Segregation)</strong> separates read and write operations into different models, allowing each to be optimized independently.

The <strong>command side</strong> handles writes (create, update, delete) with a normalized data model, while the <strong>query side</strong> handles reads with denormalized, read-optimized views.

This pattern is particularly useful when read and write workloads have very different scaling requirements or data shape needs.

Here's a CQRS implementation:
<pre><code>const express = require('express');

// COMMAND side — handles writes
const commandRouter = express.Router();

commandRouter.post('/orders', async (req, res) =&gt; {
  const order = await db.orders.create(req.body);

  // Publish event for read model sync
  await eventBus.publish('order.created', {
    id: order.id,
    userId: order.userId,
    items: order.items,
    total: order.total,
    createdAt: new Date()
  });

  res.status(201).json({ id: order.id });
});

// QUERY side — handles reads (separate database/model)
const queryRouter = express.Router();

queryRouter.get('/orders/user/:userId', async (req, res) =&gt; {
  // Read from denormalized read model (optimized for this query)
  const orders = await readDb.userOrders.find({
    userId: req.params.userId
  });
  res.json(orders);
});

// Event handler — syncs read model
eventBus.subscribe('order.created', async (event) =&gt; {
  // Build denormalized view for fast reads
  await readDb.userOrders.upsert({
    orderId: event.id,
    userId: event.userId,
    summary: \&#96;Order #\${event.id} - \$\${event.total}\&#96;,
    itemCount: event.items.length,
    createdAt: event.createdAt
  });
});</code></pre>

<strong>CQRS</strong> allows read and write databases to scale independently — use a fast cache or search index for reads and a relational database for writes.

The tradeoff is <strong>eventual consistency</strong> between the write and read models, which must be acceptable for your use case.`
                },
                {
                    q: "How do you implement distributed tracing across Node.js microservices?",
                    a: `<strong>Distributed tracing</strong> tracks a single request as it flows through multiple microservices, creating a complete timeline of the request's journey.

Each service generates <strong>spans</strong> (units of work) that are linked together by a shared <strong>trace ID</strong> propagated through HTTP headers. This enables end-to-end visibility.

Popular tools include <strong>Jaeger</strong>, <strong>Zipkin</strong>, and <strong>OpenTelemetry</strong> (the industry standard for instrumentation).

Here's how to implement distributed tracing with OpenTelemetry:
<pre><code>// tracing.js — initialize tracing (run before app code)
const { NodeTracerProvider } = require('@opentelemetry/sdk-trace-node');
const { SimpleSpanProcessor } = require('@opentelemetry/sdk-trace-base');
const { JaegerExporter } = require('@opentelemetry/exporter-jaeger');
const { HttpInstrumentation } = require('@opentelemetry/instrumentation-http');
const { ExpressInstrumentation } = require('@opentelemetry/instrumentation-express');
const { registerInstrumentations } = require('@opentelemetry/instrumentation');

const provider = new NodeTracerProvider();
provider.addSpanProcessor(new SimpleSpanProcessor(
  new JaegerExporter({ endpoint: 'http://jaeger:14268/api/traces' })
));
provider.register();

registerInstrumentations({
  instrumentations: [
    new HttpInstrumentation(),
    new ExpressInstrumentation(),
  ],
});

// Custom span in business logic
const { trace } = require('@opentelemetry/api');
const tracer = trace.getTracer('order-service');

async function processOrder(order) {
  const span = tracer.startSpan('process-order');
  span.setAttribute('order.id', order.id);
  span.setAttribute('order.total', order.total);

  try {
    await validateOrder(order);
    span.addEvent('order validated');
    await chargePayment(order);
    span.addEvent('payment charged');
    span.setStatus({ code: 1 }); // OK
  } catch (err) {
    span.setStatus({ code: 2, message: err.message }); // ERROR
    throw err;
  } finally {
    span.end();
  }
}</code></pre>

OpenTelemetry <strong>auto-instruments</strong> HTTP and Express, automatically propagating trace context headers between services.

Always add <strong>custom attributes</strong> (like order ID, user ID) to spans for easier debugging and filtering in the tracing UI.`
                },
                {
                    q: "What is the Bulkhead pattern and how does it improve microservice resilience?",
                    a: `The <strong>Bulkhead pattern</strong> isolates different parts of a system into independent resource pools, preventing a failure in one area from consuming all available resources.

Named after ship bulkheads that prevent flooding from spreading, this pattern limits the blast radius of failures by assigning dedicated resources (threads, connections, memory) to each service call.

Combined with <strong>circuit breakers</strong> and <strong>timeouts</strong>, bulkheads form a comprehensive resilience strategy for microservices.

Here's a bulkhead implementation using resource pools:
<pre><code>// Bulkhead with connection pools
class Bulkhead {
  constructor(name, maxConcurrent = 10) {
    this.name = name;
    this.maxConcurrent = maxConcurrent;
    this.active = 0;
    this.queue = [];
  }

  async execute(fn) {
    if (this.active >= this.maxConcurrent) {
      // Queue the request or reject
      return new Promise((resolve, reject) =&gt; {
        this.queue.push({ fn, resolve, reject });
        // Timeout waiting requests
        setTimeout(() =&gt; reject(new Error(
          \&#96;Bulkhead \${this.name}: queue timeout\&#96;
        )), 5000);
      });
    }

    this.active++;
    try {
      return await fn();
    } finally {
      this.active--;
      this.processQueue();
    }
  }

  processQueue() {
    if (this.queue.length &gt; 0 &amp;&amp; this.active &lt; this.maxConcurrent) {
      const { fn, resolve, reject } = this.queue.shift();
      this.execute(fn).then(resolve).catch(reject);
    }
  }
}

// Separate bulkheads per downstream service
const userBulkhead = new Bulkhead('user-service', 20);
const paymentBulkhead = new Bulkhead('payment-service', 10);
const emailBulkhead = new Bulkhead('email-service', 5);

// If payment-service is slow, only its 10 slots are consumed
// user-service and email-service continue with their own pools
app.get('/api/checkout', async (req, res) =&gt; {
  const user = await userBulkhead.execute(() =&gt; fetchUser(req.userId));
  const payment = await paymentBulkhead.execute(() =&gt; processPayment(req.body));
  await emailBulkhead.execute(() =&gt; sendReceipt(user.email));
  res.json({ success: true });
});</code></pre>

Without bulkheads, a slow payment service could exhaust all server connections, making the user service and email service unavailable too.

Size each bulkhead based on the downstream service's capacity and expected latency. <strong>Monitor active counts</strong> to detect saturation early.`
                },
                {
                    q: "How do you handle inter-service communication patterns — synchronous vs asynchronous?",
                    a: `Microservices communicate using two primary patterns: <strong>synchronous</strong> (request-response via HTTP/gRPC) and <strong>asynchronous</strong> (event-driven via message queues).

<strong>Synchronous</strong> communication is simpler but creates tight coupling — the caller waits for a response and fails if the downstream service is unavailable.

<strong>Asynchronous</strong> communication provides better resilience and scalability but introduces eventual consistency and requires message broker infrastructure.

Here's how each pattern works in practice:
<pre><code>// SYNCHRONOUS — HTTP request-response
const axios = require('axios');

async function getOrderWithUser(orderId) {
  const order = await axios.get(\&#96;http://order-service:3002/orders/\${orderId}\&#96;);
  // Synchronous call — blocks until response
  const user = await axios.get(\&#96;http://user-service:3001/users/\${order.data.userId}\&#96;);

  return { ...order.data, user: user.data };
}

// ASYNCHRONOUS — event-driven via message queue
const amqp = require('amqplib');

// Order service publishes event (fire and forget)
async function createOrder(orderData) {
  const order = await db.orders.create(orderData);

  // Publish event — don't wait for consumers
  const channel = await getChannel();
  channel.publish('events', 'order.created',
    Buffer.from(JSON.stringify(order)),
    { persistent: true }
  );

  return order; // Return immediately
}

// Notification service consumes event independently
async function startNotificationConsumer() {
  const channel = await getChannel();
  await channel.assertQueue('notifications');
  await channel.bindQueue('notifications', 'events', 'order.created');

  channel.consume('notifications', async (msg) =&gt; {
    const order = JSON.parse(msg.content.toString());
    await sendOrderConfirmation(order);
    channel.ack(msg);
  });
}

// HYBRID — sync for queries, async for commands
// GET /orders/:id → synchronous (need immediate response)
// POST /orders    → async (publish event, return 202 Accepted)</code></pre>
<ul>
<li><strong>Synchronous</strong> — use for queries where you need an immediate response</li>
<li><strong>Asynchronous</strong> — use for commands, events, and fire-and-forget operations</li>
<li><strong>Hybrid</strong> — combine both based on the specific use case</li>
</ul>

The hybrid approach is most common — use synchronous calls for user-facing reads and asynchronous events for background processing and data synchronization.`
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
                    a: `<strong>Jest</strong> is a popular testing framework with built-in assertions, mocking, and code coverage.

Install it as a dev dependency and configure it in <code>package.json</code> with the <strong>node</strong> test environment for backend testing.

Jest auto-discovers files matching <code>*.test.js</code> or <code>*.spec.js</code> and files in a <code>__tests__</code> directory.

Here's a basic setup and first test:
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

Use <strong>--watch</strong> mode during development to re-run tests automatically when files change.

The <strong>--coverage</strong> flag generates an HTML coverage report in the <code>coverage/</code> directory.`
                },
                {
                    q: "How do you structure tests with describe, it, and expect?",
                    a: `<strong>describe</strong> groups related tests, <strong>it</strong> (or <strong>test</strong>) defines individual test cases, and <strong>expect</strong> makes assertions.

Use <strong>beforeEach/afterEach</strong> for setup and teardown that runs before/after each test, ensuring clean state.

Nest <code>describe</code> blocks to organize tests hierarchically by feature or method being tested.

Here's a well-structured test suite:
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

Common matchers include <code>toBe</code>, <code>toEqual</code>, <code>toBeDefined</code>, <code>toBeNull</code>, <code>toBeTruthy</code>, <code>toContain</code>, <code>toThrow</code>, and <code>toHaveLength</code>.

Always call <strong>jest.restoreAllMocks()</strong> in afterEach to prevent mock leaks between tests.`
                },
                {
                    q: "How do you mock dependencies with jest.mock?",
                    a: `<strong>jest.mock()</strong> replaces a module with a mock implementation, isolating the unit under test from its dependencies.

When you call <code>jest.mock('./module')</code>, Jest auto-mocks all exports of that module. You can then configure return values and track calls.

This ensures your unit tests verify only the logic of the function being tested, not its dependencies.

Here's how to mock a database dependency:
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

Use <strong>mockResolvedValue</strong> for async mocks, <strong>mockReturnValue</strong> for sync, and <strong>mockImplementation</strong> for custom behavior.

Call <code>jest.clearAllMocks()</code> in <code>beforeEach</code> to reset call counts between tests.`
                },
                {
                    q: "How do you test HTTP endpoints with Supertest?",
                    a: `<strong>Supertest</strong> makes HTTP assertions against an Express app without starting a real server.

It provides a fluent API for sending requests, setting headers, and asserting on status codes, content types, and response bodies.

Export your Express <code>app</code> without calling <code>app.listen()</code> so Supertest can manage the server lifecycle internally.

Here's how to test REST API endpoints:
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

Supertest is ideal for <strong>integration testing</strong> of your API layer — it tests the full request/response cycle including middleware, routing, and validation.

You can chain <code>.set()</code> to add headers like authorization tokens for testing protected routes.`
                },
                {
                    q: "How do you test asynchronous code with Jest?",
                    a: `Jest supports several patterns for testing async code: <strong>async/await</strong> (recommended), <strong>returning promises</strong>, and <strong>done callbacks</strong>.

The <code>async/await</code> pattern is the cleanest and most readable. For rejected promises, use <code>rejects.toThrow()</code>.

Jest also provides <strong>fake timers</strong> for testing code that uses <code>setTimeout</code>, <code>setInterval</code>, or <code>Date</code>.

Here are all the async testing patterns:
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
});</code></pre>

Always <code>await</code> your assertions — forgetting to add <code>await</code> or <code>return</code> causes tests to pass even when they should fail.

Use <strong>jest.useFakeTimers()</strong> to control time-dependent code without waiting for real timeouts.`
                },
                {
                    q: "How do you measure code coverage with Jest?",
                    a: `Jest has built-in <strong>code coverage</strong> powered by Istanbul. It reports which lines, branches, functions, and statements are tested.

Run tests with the <strong>--coverage</strong> flag to generate reports in multiple formats including HTML, LCOV, and JSON.

Set <strong>coverage thresholds</strong> in your configuration to enforce minimum coverage requirements in CI/CD pipelines.

Here's how to configure and enforce code coverage:
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

Coverage reports are generated in the <code>coverage/</code> directory. The HTML report provides a visual file-by-file view of covered and uncovered lines.

Focus on <strong>branch coverage</strong> — it's the most meaningful metric, ensuring all conditional paths are tested.`
                },
                {
                    q: "What are test fixtures and how do you use them?",
                    a: `<strong>Test fixtures</strong> are predefined data or state used to set up reproducible test conditions.

Fixtures keep test data centralized and reusable, avoiding duplicate data declarations across test files.

Use <strong>beforeEach</strong> to seed data and <strong>afterEach</strong> to clean up, ensuring each test starts with a known state.

Here's how to organize and use test fixtures:
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
});</code></pre>

For database integration tests, use a <strong>separate test database</strong> that gets reset between test runs.

Factory functions (like <strong>factory-girl</strong> or <strong>fishery</strong>) can generate dynamic fixture data with random values and overrides.`
                },
                {
                    q: "How do you use sinon for stubs and spies in Node.js testing?",
                    a: `<strong>Sinon</strong> provides standalone spies, stubs, and mocks that work with any testing framework.

<strong>Spies</strong> observe function calls without changing behavior. <strong>Stubs</strong> replace functions with custom behavior. <strong>Mocks</strong> combine both with pre-set expectations.

Always call <code>sinon.restore()</code> in afterEach to clean up all stubs and spies between tests.

Here's how to use spies and stubs:
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
});</code></pre>

Sinon is particularly useful when you need fine-grained control over call tracking, sequential return values, or conditional stubbing.

Prefer <strong>Jest's built-in mocking</strong> when using Jest — use Sinon with other frameworks like Mocha or when you need its specific features.`
                },
                {
                    q: "What is Test-Driven Development (TDD) and how do you apply it?",
                    a: `<strong>TDD</strong> follows a <strong>Red-Green-Refactor</strong> cycle: write a failing test first, make it pass with minimal code, then refactor.

This approach ensures every piece of code is tested from the start and helps clarify requirements before implementation.

The discipline of writing tests first leads to more modular, loosely coupled code that's easier to maintain.

Here's the TDD cycle in action:
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

TDD leads to well-tested, modular code and helps catch bugs early. It works best for business logic and algorithmic code.`
                },
                {
                    q: "What is the difference between integration tests and unit tests?",
                    a: `<strong>Unit tests</strong> test individual functions or classes in isolation with mocked dependencies, while <strong>integration tests</strong> verify that multiple components work together correctly using real dependencies.

Unit tests are fast and pinpoint exact failures, while integration tests catch issues in the interaction between components like APIs, databases, and middleware.

The testing pyramid recommends many fast unit tests (70-80%) and fewer integration tests (20-30%) covering critical paths.

Here's the difference in practice:
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

Aim for many fast unit tests that run in milliseconds and fewer integration tests that test component boundaries.

Use <strong>in-memory databases</strong> (like MongoMemoryServer) for integration tests to avoid needing external services.`
                },
                {
                    q: "How do you test middleware functions in Express?",
                    a: `Testing <strong>Express middleware</strong> requires creating mock <code>req</code>, <code>res</code>, and <code>next</code> objects that simulate the Express request-response cycle.

You can test middleware in isolation by calling it directly with mock objects, or test it as part of the full request pipeline using Supertest.

Direct testing is faster and more focused, while Supertest testing validates the middleware works correctly in the full Express context.

Here's how to test middleware both ways:
<pre><code>// authMiddleware.js
function authMiddleware(req, res, next) {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) {
    return res.status(401).json({ error: 'No token provided' });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(403).json({ error: 'Invalid token' });
  }
}

// UNIT TEST — direct testing with mocks
describe('authMiddleware', () =&gt; {
  const mockNext = jest.fn();

  it('should return 401 if no token', () =&gt; {
    const req = { headers: {} };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn()
    };

    authMiddleware(req, res, mockNext);

    expect(res.status).toHaveBeenCalledWith(401);
    expect(mockNext).not.toHaveBeenCalled();
  });

  it('should set req.user and call next with valid token', () =&gt; {
    const token = jwt.sign({ id: 1 }, process.env.JWT_SECRET);
    const req = { headers: { authorization: \&#96;Bearer \${token}\&#96; } };
    const res = { status: jest.fn(), json: jest.fn() };

    authMiddleware(req, res, mockNext);

    expect(req.user).toBeDefined();
    expect(req.user.id).toBe(1);
    expect(mockNext).toHaveBeenCalled();
  });
});

// INTEGRATION TEST — with Supertest
it('should block unauthenticated requests', async () =&gt; {
  await request(app).get('/api/protected').expect(401);
});</code></pre>

Mock <code>res.status()</code> to return <code>this</code> (using <strong>mockReturnThis</strong>) since Express chains <code>res.status().json()</code>.

Test both the happy path (valid input, next called) and error paths (missing token, invalid token, expired token).`
                },
                {
                    q: "How do you use Jest snapshot testing for API responses?",
                    a: `<strong>Snapshot testing</strong> captures the output of a function or API response and compares it against a stored snapshot on subsequent test runs.

When the output changes, the test fails and shows the diff. You can then update the snapshot if the change is intentional.

Snapshots work best for testing response shapes, error messages, and serializable data structures that shouldn't change unexpectedly.

Here's how to use snapshot testing:
<pre><code>const request = require('supertest');
const app = require('./app');

describe('API Snapshots', () =&gt; {
  it('should match user response structure', async () =&gt; {
    const res = await request(app).get('/api/users/1');

    // Inline snapshot — stored in the test file
    expect(res.body).toMatchInlineSnapshot(\&#96;
      {
        "id": 1,
        "name": "Alice",
        "email": "alice@example.com",
        "role": "user"
      }
    \&#96;);
  });

  it('should match error response', async () =&gt; {
    const res = await request(app).get('/api/users/999');

    // File snapshot — stored in __snapshots__/
    expect(res.body).toMatchSnapshot();
  });

  // Property matchers for dynamic values
  it('should match with dynamic fields', async () =&gt; {
    const res = await request(app).post('/api/users')
      .send({ name: 'Alice', email: 'alice@test.com' });

    expect(res.body).toMatchSnapshot({
      id: expect.any(String),           // Dynamic ID
      createdAt: expect.any(String),    // Dynamic timestamp
      name: 'Alice'                     // Exact match
    });
  });
});

// Update snapshots when structure intentionally changes:
// npx jest --updateSnapshot</code></pre>

Use <strong>property matchers</strong> like <code>expect.any(String)</code> for dynamic values (IDs, timestamps) that change between test runs.

Don't over-use snapshots — they're best for catching unintentional changes, not for verifying specific business logic.`
                },
                {
                    q: "How do you set up test databases for integration testing?",
                    a: `<strong>Test databases</strong> provide isolated environments for integration tests, ensuring tests don't affect production data and run reproducibly.

The three main approaches are: <strong>in-memory databases</strong> (fastest), <strong>Docker containers</strong> (most realistic), and <strong>separate test database instances</strong>.

Always clean up test data between tests using <code>beforeEach</code>/<code>afterEach</code> to prevent test interdependence.

Here's how to set up test databases:
<pre><code>// Using MongoMemoryServer (in-memory MongoDB)
const { MongoMemoryServer } = require('mongodb-memory-server');
const mongoose = require('mongoose');

let mongoServer;

beforeAll(async () =&gt; {
  mongoServer = await MongoMemoryServer.create();
  const uri = mongoServer.getUri();
  await mongoose.connect(uri);
});

afterAll(async () =&gt; {
  await mongoose.disconnect();
  await mongoServer.stop();
});

afterEach(async () =&gt; {
  // Clean all collections between tests
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});

// Using environment-based database config
// test.env
// DATABASE_URL=mongodb://localhost:27017/myapp_test

// jest.config.js
module.exports = {
  globalSetup: './test/setup.js',      // Run before all tests
  globalTeardown: './test/teardown.js', // Run after all tests
};

// test/setup.js
module.exports = async () =&gt; {
  process.env.NODE_ENV = 'test';
  process.env.DATABASE_URL = 'mongodb://localhost:27017/myapp_test';
};

// Using Docker for PostgreSQL tests
// docker-compose.test.yml
// services:
//   test-db:
//     image: postgres:15
//     environment:
//       POSTGRES_DB: test_db
//       POSTGRES_PASSWORD: test
//     ports: ["5433:5432"]</code></pre>

<strong>MongoMemoryServer</strong> is the fastest approach — it spins up an in-memory MongoDB instance per test suite with no external dependencies.

For PostgreSQL, use <strong>pg-mem</strong> for in-memory testing or spin up a Docker container for full compatibility.`
                },
                {
                    q: "How do you test error handling and edge cases in Node.js?",
                    a: `Testing <strong>error handling</strong> ensures your application fails gracefully and returns appropriate error responses for invalid inputs, network failures, and unexpected states.

Test both <strong>expected errors</strong> (validation failures, not found) and <strong>unexpected errors</strong> (database crashes, timeouts) to verify your error handling is comprehensive.

Use <code>rejects.toThrow()</code> for async errors, <code>toThrow()</code> for sync errors, and Supertest for HTTP error responses.

Here's a comprehensive error testing approach:
<pre><code>describe('Error Handling', () =&gt; {
  // Test validation errors
  it('should reject invalid email', async () =&gt; {
    await expect(userService.create({ email: 'bad' }))
      .rejects.toThrow('Invalid email format');
  });

  // Test not found errors
  it('should throw NotFoundError for missing user', async () =&gt; {
    await expect(userService.getById('nonexistent'))
      .rejects.toThrow(NotFoundError);
  });

  // Test API error responses
  it('should return 400 for invalid input', async () =&gt; {
    const res = await request(app)
      .post('/api/users')
      .send({ email: 'bad' })
      .expect(400);

    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toContain('email');
  });

  // Test database failure handling
  it('should handle database connection errors', async () =&gt; {
    jest.spyOn(db, 'query').mockRejectedValue(new Error('ECONNREFUSED'));

    const res = await request(app)
      .get('/api/users')
      .expect(500);

    expect(res.body.error).toBe('Internal server error');
  });

  // Test boundary conditions
  it('should handle empty arrays', async () =&gt; {
    db.query.mockResolvedValue([]);
    const res = await request(app).get('/api/users').expect(200);
    expect(res.body).toEqual([]);
  });

  it('should handle null values', () =&gt; {
    expect(() =&gt; processData(null)).toThrow('Data is required');
  });

  it('should handle very large inputs', async () =&gt; {
    const largePayload = { name: 'A'.repeat(10000) };
    await request(app)
      .post('/api/users')
      .send(largePayload)
      .expect(400);
  });
});</code></pre>

Always verify that error responses don't leak sensitive information like stack traces, database queries, or internal paths.

Test <strong>boundary values</strong> — empty strings, null, undefined, zero, negative numbers, and maximum-length inputs.`
                },
                {
                    q: "How do you set up CI/CD testing pipelines for Node.js projects?",
                    a: `<strong>CI/CD pipelines</strong> automatically run tests on every push or pull request, catching bugs before they reach production.

Configure your pipeline to install dependencies, run linting, execute tests with coverage, and optionally deploy on success.

Popular CI/CD platforms include <strong>GitHub Actions</strong>, <strong>GitLab CI</strong>, <strong>Jenkins</strong>, and <strong>CircleCI</strong>.

Here's a GitHub Actions workflow for Node.js testing:
<pre><code># .github/workflows/test.yml
name: Node.js CI

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18, 20, 22]

    services:
      mongodb:
        image: mongo:7
        ports:
          - 27017:27017

    steps:
      - uses: actions/checkout@v4

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'

      - run: npm ci
      - run: npm run lint
      - run: npm test -- --coverage --ci
        env:
          DATABASE_URL: mongodb://localhost:27017/test

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info

# package.json scripts
{
  "scripts": {
    "lint": "eslint src/",
    "test": "jest --forceExit --detectOpenHandles",
    "test:ci": "jest --ci --coverage --maxWorkers=2"
  }
}</code></pre>

Use <strong>--ci</strong> flag with Jest in CI environments — it fails on missing snapshots and provides cleaner output.

Test across multiple Node.js versions using a <strong>matrix strategy</strong> to ensure compatibility. Cache <code>node_modules</code> to speed up pipeline runs.`
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
                    a: `<strong>Winston</strong> is the most popular logging library for Node.js, supporting multiple transports, log levels, and custom formats.

Transports define where logs are sent — files, console, HTTP endpoints, or external services like Elasticsearch.

Combine <strong>timestamp</strong> and <strong>json</strong> formats for structured, machine-parseable log output in production.

Here's a production-ready Winston configuration:
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

Winston supports custom transports for sending logs to external services like <strong>Elasticsearch</strong>, <strong>Datadog</strong>, or <strong>CloudWatch</strong>.

Always pass metadata objects as the second argument to include structured context with each log entry.`
                },
                {
                    q: "What are log levels and how do you use them effectively?",
                    a: `<strong>Log levels</strong> indicate the severity of a message. Winston uses npm-style levels from highest (error) to lowest (silly) priority.

Only messages at or above the configured level are logged. Set the level via <strong>environment variables</strong> to adjust verbosity without code changes.

Use <strong>info</strong> in production and <strong>debug</strong> in development. Reserve <strong>error</strong> for actionable failures that need immediate attention.

Here's how to configure and use log levels:
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

Be consistent with log levels across your application — define team conventions for what constitutes an error vs. a warning.

Never log sensitive data like passwords, tokens, or credit card numbers at any level.`
                },
                {
                    q: "How do you log HTTP requests with Morgan?",
                    a: `<strong>Morgan</strong> is an HTTP request logger middleware for Express that logs request details like method, URL, status code, and response time.

It provides predefined formats (<strong>dev</strong>, <strong>combined</strong>, <strong>tiny</strong>) and supports custom format strings for tailored output.

Integrate Morgan with Winston by redirecting its output stream, combining HTTP logs with application logs in one place.

Here's how to configure Morgan for different environments:
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

Use <strong>dev</strong> format during development for colored, readable output and <strong>combined</strong> in production for comprehensive request logging.

Skip logging for health check endpoints using the <code>skip</code> option: <code>skip: (req) =&gt; req.url === '/health'</code>.`
                },
                {
                    q: "What are structured logs and why are they important?",
                    a: `<strong>Structured logging</strong> uses a consistent format (usually JSON) instead of plain text, making logs machine-parseable and searchable.

Plain text logs are hard to parse and search at scale. Structured logs can be indexed, filtered, and aggregated by log management tools.

Always include contextual fields like <strong>event type</strong>, <strong>user ID</strong>, <strong>request ID</strong>, and <strong>timestamp</strong> with each log entry.

Here's the difference between unstructured and structured logging:
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

Structured logs integrate seamlessly with <strong>ELK Stack</strong> (Elasticsearch, Logstash, Kibana), <strong>Datadog</strong>, and <strong>CloudWatch</strong> for filtering, alerting, and dashboards.

Use consistent field names across all services to enable cross-service log correlation and analysis.`
                },
                {
                    q: "What is the debug module and how do you use it?",
                    a: `The <strong>debug</strong> module provides a lightweight, namespace-based logging utility that can be toggled on/off via environment variables.

It produces <strong>zero output</strong> unless explicitly enabled, making it perfect for library development and optional verbose logging.

Namespaces use colon-separated conventions (e.g., <code>app:db</code>, <code>app:http</code>) and support wildcards for enabling multiple namespaces at once.

Here's how to use the debug module:
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

Express and many npm packages use the debug module internally — set <code>DEBUG=express:*</code> to see Express's internal logging.

Use debug for development diagnostics and Winston/Pino for production logging — they serve different purposes.`
                },
                {
                    q: "How do you implement a health check endpoint?",
                    a: `<strong>Health check endpoints</strong> let monitoring tools and load balancers verify that your service is running and can handle requests.

Provide a simple <strong>liveness</strong> endpoint (is the process alive?) and a detailed <strong>readiness</strong> endpoint (are all dependencies available?).

Include memory usage, uptime, and dependency status in readiness checks to provide comprehensive service health information.

Here's a complete health check implementation:
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
});</code></pre>

Return <strong>200</strong> for healthy and <strong>503</strong> for degraded/unhealthy. Kubernetes uses these endpoints to manage pod lifecycle and routing.

Keep liveness checks lightweight — they should complete within milliseconds and not check external dependencies.`
                },
                {
                    q: "How do you profile memory usage in a Node.js application?",
                    a: `Use <code>process.memoryUsage()</code> and <strong>V8 heap statistics</strong> to monitor and profile memory consumption in your application.

The key metrics are <strong>RSS</strong> (total memory allocated), <strong>heapTotal</strong> (V8 heap size), <strong>heapUsed</strong> (actual heap usage), and <strong>external</strong> (C++ object memory).

Watch for steadily increasing <code>heapUsed</code> — it indicates a memory leak that will eventually crash your application.

Here's how to monitor and debug memory usage:
<pre><code>// Basic memory usage
const mem = process.memoryUsage();
console.log({
  rss:       \&#96;\${(mem.rss / 1024 / 1024).toFixed(2)} MB\&#96;,       // Total memory
  heapTotal: \&#96;\${(mem.heapTotal / 1024 / 1024).toFixed(2)} MB\&#96;, // V8 heap allocated
  heapUsed:  \&#96;\${(mem.heapUsed / 1024 / 1024).toFixed(2)} MB\&#96;,  // V8 heap used
  external:  \&#96;\${(mem.external / 1024 / 1024).toFixed(2)} MB\&#96;   // C++ objects
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

Load the heap snapshot in Chrome DevTools (<strong>Memory tab</strong>) to analyze object retention and find leak sources.

Use <strong>clinic.js</strong> (<code>npx clinic doctor</code>) for automated memory leak detection with visual reports.`
                },
                {
                    q: "How do you profile CPU usage in a Node.js application?",
                    a: `<strong>CPU profiling</strong> identifies performance bottlenecks by recording which functions consume the most processing time.

Node.js provides several built-in profiling methods: the <strong>--prof</strong> flag, <strong>V8 inspector</strong> (Chrome DevTools), and the <strong>perf_hooks</strong> module.

For visual analysis, <strong>flame graphs</strong> show the call stack over time, making it easy to identify hot paths at a glance.

Here are the main CPU profiling approaches:
<pre><code>// Method 1: Built-in profiler
// node --prof app.js
// node --prof-process isolate-0x*.log &gt; profile.txt

// Method 2: V8 inspector (connect Chrome DevTools)
// node --inspect app.js

// Method 3: Programmatic with perf_hooks
const { performance, PerformanceObserver } = require('perf_hooks');

const obs = new PerformanceObserver((list) =&gt; {
  list.getEntries().forEach((entry) =&gt; {
    logger.info(\&#96;\${entry.name}: \${entry.duration.toFixed(2)}ms\&#96;);
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

Focus on functions with high <strong>self-time</strong> (time spent in the function itself, not its callees) as these are the actual bottlenecks.

Use <strong>clinic flame</strong> to generate flame graphs and <strong>clinic doctor</strong> for automated performance diagnostics.`
                },
                {
                    q: "What are performance hooks in Node.js?",
                    a: `The <strong>perf_hooks</strong> module provides APIs to measure and observe application performance at a granular level.

Use <strong>performance.mark()</strong> and <strong>performance.measure()</strong> to time specific code sections, and <strong>PerformanceObserver</strong> to collect measurements.

The <strong>monitorEventLoopDelay()</strong> function tracks event loop latency, which is a key indicator of application responsiveness.

Here's how to use performance hooks:
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
    console.log(\&#96;\${entry.name}: \${entry.duration.toFixed(2)}ms\&#96;);
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
}, 5000);</code></pre>

High event loop delay (p99 above 100ms) indicates the event loop is blocked by synchronous operations, degrading responsiveness.

Use <strong>timerify()</strong> to automatically measure function execution times without modifying the original function code.`
                },
                {
                    q: "How do you integrate error tracking services with Node.js?",
                    a: `Error tracking services like <strong>Sentry</strong> automatically capture, aggregate, and alert on errors in production.

Sentry provides <strong>stack traces</strong>, <strong>breadcrumbs</strong> (events leading up to the error), <strong>user context</strong>, and <strong>release tracking</strong> for comprehensive error debugging.

The Sentry middleware must be the <strong>first</strong> middleware (request handler) and the error handler must come <strong>before</strong> other error handlers.

Here's how to integrate Sentry with Express:
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

Sentry groups similar errors together and tracks their frequency, making it easy to prioritize fixes based on impact.

Alternatives include <strong>Bugsnag</strong>, <strong>Rollbar</strong>, and <strong>Datadog APM</strong> — all provide similar error tracking with different pricing and feature sets.`
                },
                {
                    q: "How do you implement request correlation IDs for distributed logging?",
                    a: `<strong>Correlation IDs</strong> (also called trace IDs or request IDs) are unique identifiers assigned to each incoming request and propagated across all services and log entries.

They enable tracing a single user request through multiple microservices, databases, and message queues in your log aggregation tool.

Generate a unique ID at the API gateway or first service, then pass it via HTTP headers to all downstream services.

Here's how to implement correlation IDs:
<pre><code>const { randomUUID } = require('crypto');
const { AsyncLocalStorage } = require('async_hooks');

// Create async context for request-scoped data
const asyncLocalStorage = new AsyncLocalStorage();

// Middleware to set correlation ID
function correlationMiddleware(req, res, next) {
  const correlationId = req.headers['x-correlation-id'] || randomUUID();
  req.correlationId = correlationId;
  res.set('x-correlation-id', correlationId);

  // Store in async context for access anywhere
  asyncLocalStorage.run({ correlationId }, () =&gt; next());
}

app.use(correlationMiddleware);

// Logger that auto-includes correlation ID
function createLogger() {
  return {
    info: (message, meta = {}) =&gt; {
      const store = asyncLocalStorage.getStore();
      console.log(JSON.stringify({
        level: 'info',
        message,
        correlationId: store?.correlationId,
        timestamp: new Date().toISOString(),
        ...meta
      }));
    },
    error: (message, meta = {}) =&gt; {
      const store = asyncLocalStorage.getStore();
      console.log(JSON.stringify({
        level: 'error',
        message,
        correlationId: store?.correlationId,
        ...meta
      }));
    }
  };
}

// Pass correlation ID to downstream services
async function callDownstreamService(url) {
  const store = asyncLocalStorage.getStore();
  return fetch(url, {
    headers: { 'x-correlation-id': store?.correlationId }
  });
}</code></pre>

<strong>AsyncLocalStorage</strong> makes the correlation ID available throughout the entire request lifecycle without passing it as a parameter through every function.

Search logs by correlation ID to see the complete journey of a request across all services: <code>correlationId="abc-123"</code>.`
                },
                {
                    q: "How do you set up Prometheus metrics for a Node.js application?",
                    a: `<strong>Prometheus</strong> is an open-source monitoring system that collects time-series metrics from your application via HTTP scraping.

The <code>prom-client</code> package provides Node.js instrumentation with built-in collectors for default metrics and support for custom counters, gauges, and histograms.

Expose a <strong>/metrics</strong> endpoint that Prometheus scrapes at regular intervals to collect application metrics.

Here's a comprehensive Prometheus setup:
<pre><code>const express = require('express');
const client = require('prom-client');

const app = express();

// Collect default metrics (CPU, memory, event loop, GC)
client.collectDefaultMetrics({ prefix: 'node_' });

// Custom counter — track total HTTP requests
const httpRequestsTotal = new client.Counter({
  name: 'http_requests_total',
  help: 'Total HTTP requests',
  labelNames: ['method', 'route', 'status']
});

// Custom histogram — track request duration
const httpRequestDuration = new client.Histogram({
  name: 'http_request_duration_seconds',
  help: 'HTTP request duration in seconds',
  labelNames: ['method', 'route', 'status'],
  buckets: [0.01, 0.05, 0.1, 0.5, 1, 2, 5]
});

// Custom gauge — track active connections
const activeConnections = new client.Gauge({
  name: 'active_connections',
  help: 'Number of active connections'
});

// Middleware to record metrics
app.use((req, res, next) =&gt; {
  const end = httpRequestDuration.startTimer();
  activeConnections.inc();

  res.on('finish', () =&gt; {
    const route = req.route?.path || req.path;
    httpRequestsTotal.inc({ method: req.method, route, status: res.statusCode });
    end({ method: req.method, route, status: res.statusCode });
    activeConnections.dec();
  });

  next();
});

// Expose metrics endpoint for Prometheus scraping
app.get('/metrics', async (req, res) =&gt; {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});</code></pre>

Use <strong>histograms</strong> for request durations (to calculate percentiles), <strong>counters</strong> for totals (requests, errors), and <strong>gauges</strong> for current values (connections, queue size).

Pair Prometheus with <strong>Grafana</strong> for visualization dashboards and alerting rules based on metric thresholds.`
                },
                {
                    q: "How do you implement log rotation to manage log file sizes?",
                    a: `<strong>Log rotation</strong> prevents log files from growing indefinitely by archiving old logs and creating new files based on size or time intervals.

Without rotation, log files can fill up disk space and cause application failures. Rotation compresses old logs and optionally deletes the oldest files.

Winston supports log rotation through the <strong>winston-daily-rotate-file</strong> transport, which rotates logs by date and size.

Here's how to configure log rotation:
<pre><code>const winston = require('winston');
require('winston-daily-rotate-file');

// Rotate by date and size
const transport = new winston.transports.DailyRotateFile({
  filename: 'logs/app-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '20m',        // Rotate when file exceeds 20MB
  maxFiles: '14d',       // Keep logs for 14 days
  zippedArchive: true,   // Compress rotated files
  level: 'info'
});

// Error-specific rotation
const errorTransport = new winston.transports.DailyRotateFile({
  filename: 'logs/error-%DATE%.log',
  datePattern: 'YYYY-MM-DD',
  maxSize: '10m',
  maxFiles: '30d',
  zippedArchive: true,
  level: 'error'
});

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [transport, errorTransport]
});

// Listen for rotation events
transport.on('rotate', (oldFilename, newFilename) =&gt; {
  logger.info('Log rotated', { oldFilename, newFilename });
});

// Alternative: OS-level rotation with logrotate (Linux)
// /etc/logrotate.d/nodeapp:
// /var/log/nodeapp/*.log {
//   daily
//   rotate 14
//   compress
//   delaycompress
//   missingok
//   notifempty
//   copytruncate
// }</code></pre>

Use <strong>zippedArchive: true</strong> to compress rotated logs, reducing disk usage by 80-90%.

In containerized environments, prefer logging to <strong>stdout/stderr</strong> and let the container runtime handle log management.`
                },
                {
                    q: "What is Pino and how does it compare to Winston for logging?",
                    a: `<strong>Pino</strong> is a high-performance JSON logger for Node.js that prioritizes speed and low overhead, making it ideal for high-throughput applications.

Pino is significantly faster than Winston because it uses a <strong>worker thread</strong> for log writing and avoids synchronous string formatting in the main thread.

While Winston offers more flexibility with formats and transports, Pino's speed advantage makes it the preferred choice for performance-critical applications.

Here's how to use Pino:
<pre><code>const pino = require('pino');

// Basic setup
const logger = pino({
  level: process.env.LOG_LEVEL || 'info',
  transport: process.env.NODE_ENV !== 'production'
    ? { target: 'pino-pretty', options: { colorize: true } }
    : undefined
});

// Usage — same pattern as Winston
logger.info('Server started');
logger.info({ port: 3000, env: 'production' }, 'Server started');
logger.error({ err, userId }, 'Payment failed');

// Child loggers — add context
const requestLogger = logger.child({ requestId: req.id });
requestLogger.info('Processing request'); // Includes requestId

// Express integration with pino-http
const pinoHttp = require('pino-http');
app.use(pinoHttp({ logger }));

// Benchmark comparison (logs per second):
// pino:    ~150,000 ops/sec
// winston: ~  8,000 ops/sec
// bunyan:  ~  6,000 ops/sec</code></pre>
<ul>
<li><strong>Pino</strong> — fastest, JSON-only output, great for high-throughput production</li>
<li><strong>Winston</strong> — more flexible formats and transports, larger ecosystem, easier customization</li>
</ul>

Use Pino when raw performance matters and Winston when you need flexible formatting, multiple transports, or custom log formats.`
                },
                {
                    q: "How do you monitor Node.js event loop lag and detect performance degradation?",
                    a: `<strong>Event loop lag</strong> measures the delay between when a callback is scheduled and when it actually executes. High lag indicates the event loop is blocked by CPU-intensive work.

Monitoring event loop lag is critical because it directly affects response times. A lag above 100ms means your application is becoming unresponsive.

Use <strong>perf_hooks</strong> for built-in monitoring and combine it with metrics collection for alerting on performance degradation.

Here's how to monitor and alert on event loop health:
<pre><code>const { monitorEventLoopDelay } = require('perf_hooks');

// Monitor event loop delay with 20ms resolution
const histogram = monitorEventLoopDelay({ resolution: 20 });
histogram.enable();

// Periodic check — report metrics every 30 seconds
setInterval(() =&gt; {
  const stats = {
    min: (histogram.min / 1e6).toFixed(2),
    max: (histogram.max / 1e6).toFixed(2),
    mean: (histogram.mean / 1e6).toFixed(2),
    p50: (histogram.percentile(50) / 1e6).toFixed(2),
    p99: (histogram.percentile(99) / 1e6).toFixed(2),
    exceeds: (histogram.exceeds / 1e6).toFixed(2)
  };

  logger.info('Event loop stats (ms)', stats);

  // Alert on high lag
  if (parseFloat(stats.p99) &gt; 100) {
    logger.warn('High event loop lag detected', stats);
  }

  histogram.reset();
}, 30000);

// Simple lag detection using setTimeout
function checkEventLoopLag() {
  const start = process.hrtime.bigint();
  setTimeout(() =&gt; {
    const lag = Number(process.hrtime.bigint() - start) / 1e6 - 1;
    if (lag &gt; 50) {
      logger.warn(\&#96;Event loop lag: \${lag.toFixed(2)}ms\&#96;);
    }
    checkEventLoopLag();
  }, 1);
}
checkEventLoopLag();

// Expose as Prometheus gauge
const eventLoopLag = new client.Gauge({
  name: 'nodejs_eventloop_lag_seconds',
  help: 'Event loop lag in seconds'
});

setInterval(() =&gt; {
  eventLoopLag.set(histogram.mean / 1e9);
}, 10000);</code></pre>

Common causes of event loop lag include <strong>synchronous file I/O</strong>, <strong>JSON.parse/stringify on large objects</strong>, <strong>complex regex matching</strong>, and <strong>CPU-intensive computations</strong>.

Set alerts for p99 lag above 100ms and investigate using <strong>clinic doctor</strong> or <strong>--prof</strong> profiling to identify the blocking code.`
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
                    a: `The <strong>callback pattern</strong> is Node.js's original async mechanism. Functions accept a callback as the last argument, called with <code>(error, result)</code>.

This convention is called the <strong>error-first callback</strong> pattern — the first argument is always the error (or <code>null</code> on success), and subsequent arguments are the results.

Most Node.js core modules (fs, http, dns) originally used this pattern before Promises were introduced.

Here's how the callback pattern works:
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

Always check for errors <strong>before</strong> accessing the result. Forgetting error checks leads to silent failures and hard-to-debug issues.

While callbacks are still used internally, modern Node.js code should prefer <strong>Promises</strong> and <strong>async/await</strong> for better readability.`
                },
                {
                    q: "What is callback hell and how do you avoid it?",
                    a: `<strong>Callback hell</strong> (pyramid of doom) occurs when nested callbacks make code deeply indented, hard to read, and difficult to maintain.

Each async operation depends on the result of the previous one, creating a rightward drift of indentation that's hard to follow and debug.

The three main solutions are <strong>named functions</strong>, <strong>Promises with chaining</strong>, and <strong>async/await</strong> (the modern preferred approach).

Here's callback hell and its solutions:
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
const shipping = await getShipping(details.shippingId);</code></pre>

The <strong>async/await</strong> solution is the cleanest and most readable — it reads like synchronous code while remaining fully asynchronous.

Error handling is also simpler with async/await — use a single <code>try/catch</code> block instead of checking errors in every callback.`
                },
                {
                    q: "How do you create a Promise in Node.js?",
                    a: `A <strong>Promise</strong> represents an asynchronous operation that will eventually resolve with a value or reject with an error.

Promises have three states: <strong>pending</strong> (initial), <strong>fulfilled</strong> (resolved with a value), and <strong>rejected</strong> (failed with an error). Once settled, the state cannot change.

Use the <code>Promise</code> constructor with <code>resolve</code> and <code>reject</code> callbacks to wrap callback-based APIs or create custom async operations.

Here's how to create and use Promises:
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

Promises provide a cleaner alternative to callbacks with built-in error propagation through the <code>.catch()</code> chain.

Always attach a <code>.catch()</code> handler or use <code>try/catch</code> with <code>await</code> — unhandled promise rejections will crash Node.js in future versions.`
                },
                {
                    q: "What is the difference between Promise.all, allSettled, race, and any?",
                    a: `These static methods handle <strong>multiple promises concurrently</strong> with different resolution strategies.

<strong>Promise.all</strong> fails fast on the first rejection, <strong>allSettled</strong> waits for all to complete regardless of outcome, <strong>race</strong> settles with the first to finish, and <strong>any</strong> resolves with the first success.

Choose the right method based on whether you need all results, can tolerate failures, or want the fastest response.

Here's how each method behaves:
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
// Rejects only if ALL reject (AggregateError)</code></pre>

Use <strong>Promise.all</strong> when all results are needed and any failure is fatal. Use <strong>allSettled</strong> when you want partial results.

<strong>Promise.race</strong> is commonly used for implementing timeouts around async operations.`
                },
                {
                    q: "How do async/await work in Node.js?",
                    a: `<strong>async/await</strong> is syntactic sugar over Promises that makes asynchronous code look and behave like synchronous code.

An <code>async</code> function always returns a Promise. The <code>await</code> keyword pauses execution until the awaited Promise settles, but the event loop continues processing other tasks.

This makes async code dramatically more readable compared to promise chains or callbacks.

Here's async/await compared to promise chains:
<pre><code>// async function always returns a Promise
async function getUser(id) {
  const response = await fetch(\&#96;/api/users/\${id}\&#96;);
  const user = await response.json();
  return user; // Wrapped in Promise.resolve()
}

// Equivalent with promises
function getUser(id) {
  return fetch(\&#96;/api/users/\${id}\&#96;)
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

The event loop is <strong>not blocked</strong> while waiting — other requests, timers, and I/O callbacks continue to be processed.

Top-level <code>await</code> is only available in <strong>ES modules</strong> (.mjs files or <code>"type": "module"</code> in package.json).`
                },
                {
                    q: "How do you handle errors with try-catch in async/await?",
                    a: `Use <strong>try-catch</strong> blocks to handle rejected promises when using async/await. This replaces <code>.catch()</code> chains with familiar synchronous-style error handling.

You can catch specific error types and handle them differently. The <strong>finally</strong> block runs regardless of success or failure, ideal for cleanup.

For inline error handling without try-catch, chain <code>.catch()</code> directly on the awaited promise.

Here are common error handling patterns:
<pre><code>// Basic error handling
async function fetchData() {
  try {
    const response = await fetch('/api/data');
    if (!response.ok) throw new Error(\&#96;HTTP \${response.status}\&#96;);
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
const data = await fetchData().catch(err =&gt; defaultData);</code></pre>

Avoid swallowing errors silently — always log or re-throw. If a function can't handle the error meaningfully, let it propagate to the caller.

The <code>.catch()</code> inline pattern is useful for providing default values without a full try-catch block.`
                },
                {
                    q: "How do you run async operations in parallel?",
                    a: `Use <strong>Promise.all()</strong> to run independent async operations simultaneously instead of sequentially, dramatically reducing total execution time.

Sequential execution takes the <strong>sum</strong> of all durations, while parallel execution takes only the <strong>maximum</strong> duration.

Use <strong>Promise.allSettled()</strong> when you want partial results even if some operations fail.

Here's sequential vs parallel execution:
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

Only parallelize <strong>independent</strong> operations. If operation B depends on the result of A, they must be sequential.

Be careful with too many parallel operations — use concurrency limiting (like <code>p-limit</code>) to avoid overwhelming downstream services.`
                },
                {
                    q: "What are async iterators and how does for-await-of work?",
                    a: `<strong>Async iterators</strong> allow you to consume asynchronous data sources one item at a time using <code>for await...of</code> loops.

They are ideal for processing <strong>streams</strong>, <strong>paginated APIs</strong>, and <strong>large datasets</strong> without loading everything into memory at once.

<strong>Async generators</strong> (using <code>async function*</code> and <code>yield</code>) create custom async iterables that produce values over time.

Here's how to use async iterators:
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
    const res = await fetch(\&#96;\${url}?page=\${page}\&#96;);
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

Async iterators are built into Node.js <strong>Readable streams</strong>, making them the cleanest way to process stream data.

Unlike loading all data with <code>Promise.all()</code>, async iterators process items one at a time, keeping memory usage constant regardless of data size.`
                },
                {
                    q: "How does the EventEmitter pattern work in Node.js?",
                    a: `The <strong>EventEmitter</strong> pattern allows objects to emit named events and register listeners to respond to them.

Many Node.js core modules (streams, HTTP, fs) extend EventEmitter. Custom classes can extend it to implement event-driven architectures.

Always listen for the <strong>error</strong> event — unhandled error events cause the process to crash with an uncaught exception.

Here's how to use EventEmitter:
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

Use <strong>on()</strong> for persistent listeners and <strong>once()</strong> for one-time listeners that automatically remove themselves after firing.

By default, Node.js warns if more than 10 listeners are attached to a single event — increase with <code>emitter.setMaxListeners()</code> if needed.`
                },
                {
                    q: "How do you convert callback-based functions to Promises with promisify?",
                    a: `Node.js provides <strong>util.promisify()</strong> to convert callback-based functions into promise-returning functions automatically.

It works with any function that follows the <strong>error-first callback</strong> pattern <code>(err, result)</code> as its last parameter.

Most Node.js core modules now offer a built-in <code>.promises</code> API (e.g., <code>fs.promises</code>), making manual promisification less necessary.

Here's how to use promisify:
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

Prefer the built-in <code>.promises</code> API when available — <code>fs.promises</code>, <code>dns.promises</code>, <code>timers/promises</code>, and <code>stream/promises</code>.

For non-standard callback signatures (where error isn't the first argument), create a manual Promise wrapper instead of using <code>util.promisify</code>.`
                },
                {
                    q: "How do you implement concurrency control to limit parallel async operations?",
                    a: `<strong>Concurrency control</strong> limits the number of async operations running simultaneously, preventing resource exhaustion when processing large batches.

Without limits, running thousands of parallel requests can overwhelm downstream services, exhaust file descriptors, or cause out-of-memory errors.

The <strong>p-limit</strong> library provides a simple API, but you can also build a concurrency limiter using a semaphore pattern.

Here's how to implement concurrency control:
<pre><code>// Using p-limit library
const pLimit = require('p-limit');
const limit = pLimit(5); // Max 5 concurrent operations

const urls = Array.from({ length: 100 }, (_, i) =&gt; \&#96;/api/items/\${i}\&#96;);

// Only 5 fetches run at a time
const results = await Promise.all(
  urls.map(url =&gt; limit(() =&gt; fetch(url).then(r =&gt; r.json())))
);

// Custom concurrency limiter
class ConcurrencyLimiter {
  constructor(maxConcurrent) {
    this.max = maxConcurrent;
    this.active = 0;
    this.queue = [];
  }

  async run(fn) {
    while (this.active >= this.max) {
      await new Promise(resolve =&gt; this.queue.push(resolve));
    }
    this.active++;
    try {
      return await fn();
    } finally {
      this.active--;
      if (this.queue.length > 0) {
        this.queue.shift()();
      }
    }
  }
}

const limiter = new ConcurrencyLimiter(3);
const tasks = urls.map(url =&gt; limiter.run(() =&gt; fetch(url)));
const results = await Promise.all(tasks);

// Batch processing with controlled concurrency
async function processBatch(items, fn, concurrency = 10) {
  const results = [];
  for (let i = 0; i &lt; items.length; i += concurrency) {
    const batch = items.slice(i, i + concurrency);
    const batchResults = await Promise.all(batch.map(fn));
    results.push(...batchResults);
  }
  return results;
}</code></pre>

Choose a concurrency limit based on the downstream service's capacity — database connection pools, API rate limits, and available file descriptors.

The batch processing approach is simpler but less efficient — the limiter approach keeps exactly N operations running at all times.`
                },
                {
                    q: "What is the AbortController and how do you cancel async operations?",
                    a: `<strong>AbortController</strong> provides a standard mechanism to cancel async operations like fetch requests, timers, and custom async tasks.

It creates an <strong>AbortSignal</strong> that can be passed to cancellable operations. When <code>abort()</code> is called, all operations listening to that signal are cancelled.

AbortController is built into Node.js (since v15) and works with <strong>fetch</strong>, <strong>setTimeout</strong>, <strong>streams</strong>, and custom async code.

Here's how to use AbortController:
<pre><code>// Cancel a fetch request
const controller = new AbortController();
const { signal } = controller;

// Set a timeout to auto-cancel
setTimeout(() =&gt; controller.abort(), 5000); // Cancel after 5 seconds

try {
  const response = await fetch('https://api.example.com/data', { signal });
  const data = await response.json();
} catch (err) {
  if (err.name === 'AbortError') {
    console.log('Request was cancelled');
  } else {
    throw err;
  }
}

// Cancel with AbortSignal.timeout() (Node.js 18+)
const response = await fetch(url, {
  signal: AbortSignal.timeout(5000) // Built-in timeout signal
});

// Cancel multiple operations with one controller
const controller = new AbortController();

const [users, orders] = await Promise.all([
  fetch('/api/users', { signal: controller.signal }),
  fetch('/api/orders', { signal: controller.signal })
]);

// Cancels both requests
controller.abort();

// Use with custom async operations
async function longRunningTask(signal) {
  for (let i = 0; i &lt; 1000; i++) {
    if (signal?.aborted) {
      throw new Error('Task cancelled');
    }
    await processItem(i);
  }
}

const ac = new AbortController();
longRunningTask(ac.signal);
setTimeout(() =&gt; ac.abort(), 10000); // Cancel after 10s</code></pre>

<strong>AbortSignal.timeout()</strong> is the simplest way to add timeouts — it creates a signal that auto-aborts after the specified duration.

Always check <code>err.name === 'AbortError'</code> to distinguish cancellation from actual errors in your catch blocks.`
                },
                {
                    q: "What are AbortSignal.any() and AbortSignal.timeout() for composing cancellation signals?",
                    a: `<strong>AbortSignal.any()</strong> combines multiple abort signals into one — it aborts when <strong>any</strong> of the input signals abort. <strong>AbortSignal.timeout()</strong> creates a signal that auto-aborts after a specified duration.

These composition methods enable complex cancellation scenarios like combining user-initiated cancellation with automatic timeouts.

They provide a declarative way to express cancellation rules without manual AbortController management.

Here's how to compose cancellation signals:
<pre><code>// AbortSignal.timeout() — auto-abort after duration
async function fetchWithTimeout(url, ms = 5000) {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(ms)
  });
  return response.json();
}

// AbortSignal.any() — abort on ANY condition (Node.js 20+)
async function fetchWithMultipleCancellations(url) {
  const userCancel = new AbortController();
  const pageUnload = new AbortController();

  // Cancel button handler
  cancelButton.onclick = () =&gt; userCancel.abort();
  // Page navigation handler
  window.onbeforeunload = () =&gt; pageUnload.abort();

  const signal = AbortSignal.any([
    userCancel.signal,          // User clicks cancel
    pageUnload.signal,          // User navigates away
    AbortSignal.timeout(30000)  // 30 second timeout
  ]);

  try {
    const response = await fetch(url, { signal });
    return await response.json();
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Request cancelled:', signal.reason);
    }
    throw err;
  }
}

// Using with async iteration
async function* streamData(url, signal) {
  const response = await fetch(url, { signal });
  const reader = response.body.getReader();

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      yield value;
    }
  } finally {
    reader.releaseLock();
  }
}

// Consume with cancellation
const ac = new AbortController();
for await (const chunk of streamData('/api/stream', ac.signal)) {
  process(chunk);
  if (shouldStop) ac.abort();
}</code></pre>

<strong>AbortSignal.any()</strong> is the async equivalent of <code>Promise.race()</code> for cancellation — the first signal to abort triggers the combined signal.

The <code>signal.reason</code> property tells you why the signal was aborted, helping distinguish between timeout, user cancellation, and other abort causes.`
                },
                {
                    q: "How do you implement retry logic with exponential backoff for async operations?",
                    a: `<strong>Retry with exponential backoff</strong> automatically retries failed operations with increasing delays between attempts, preventing overwhelming a recovering service.

The delay <strong>doubles</strong> with each retry (e.g., 1s, 2s, 4s, 8s), and adding <strong>jitter</strong> (random variation) prevents all clients from retrying simultaneously.

Only retry on <strong>transient errors</strong> (network timeouts, 503 Service Unavailable) — never retry on client errors (400, 401, 404).

Here's a robust retry implementation:
<pre><code>async function retryWithBackoff(fn, options = {}) {
  const {
    maxRetries = 3,
    baseDelay = 1000,
    maxDelay = 30000,
    shouldRetry = (err) =&gt; true
  } = options;

  let lastError;

  for (let attempt = 0; attempt &lt;= maxRetries; attempt++) {
    try {
      return await fn(attempt);
    } catch (err) {
      lastError = err;

      if (attempt === maxRetries || !shouldRetry(err)) {
        throw err;
      }

      // Exponential backoff with jitter
      const delay = Math.min(
        baseDelay * Math.pow(2, attempt) + Math.random() * 1000,
        maxDelay
      );

      console.log(\&#96;Retry \${attempt + 1}/\${maxRetries} after \${delay.toFixed(0)}ms\&#96;);
      await new Promise(resolve =&gt; setTimeout(resolve, delay));
    }
  }

  throw lastError;
}

// Usage — retry HTTP requests
const data = await retryWithBackoff(
  async (attempt) =&gt; {
    const res = await fetch('/api/data');
    if (!res.ok) throw new Error(\&#96;HTTP \${res.status}\&#96;);
    return res.json();
  },
  {
    maxRetries: 3,
    baseDelay: 1000,
    shouldRetry: (err) =&gt; {
      // Only retry on server errors and network failures
      const status = err.message.match(/HTTP (\\d+)/)?.[1];
      return !status || parseInt(status) >= 500;
    }
  }
);

// Usage — retry database operations
const result = await retryWithBackoff(
  () =&gt; db.query('SELECT * FROM users'),
  {
    maxRetries: 5,
    baseDelay: 500,
    shouldRetry: (err) =&gt; err.code === 'ECONNREFUSED' || err.code === 'ETIMEDOUT'
  }
);</code></pre>

Always set a <strong>maximum delay cap</strong> to prevent absurdly long waits. Common caps are 30-60 seconds.

Combine retries with <strong>circuit breakers</strong> — if a service is consistently failing, stop retrying entirely until it recovers.`
                },
                {
                    q: "What is the AsyncLocalStorage API and how does it provide request-scoped context?",
                    a: `<strong>AsyncLocalStorage</strong> (from the <code>async_hooks</code> module) provides a way to store data that flows through async operations without explicitly passing it as parameters.

It creates a <strong>context</strong> that is automatically propagated through the entire chain of async callbacks, promises, and event handlers initiated within that context.

This is essential for request-scoped data like <strong>user identity</strong>, <strong>correlation IDs</strong>, and <strong>transaction contexts</strong> in Express middleware.

Here's how to use AsyncLocalStorage:
<pre><code>const { AsyncLocalStorage } = require('async_hooks');

// Create a store for request context
const requestContext = new AsyncLocalStorage();

// Express middleware — set context per request
function contextMiddleware(req, res, next) {
  const context = {
    requestId: crypto.randomUUID(),
    userId: req.user?.id,
    startTime: Date.now()
  };

  // All async operations within this callback inherit the context
  requestContext.run(context, () =&gt; next());
}

app.use(contextMiddleware);

// Access context anywhere in the request chain — no parameter passing
function getRequestContext() {
  return requestContext.getStore();
}

// In a service layer
async function createOrder(orderData) {
  const ctx = getRequestContext();
  logger.info('Creating order', {
    requestId: ctx?.requestId,
    userId: ctx?.userId
  });
  return db.orders.create(orderData);
}

// In a database layer
async function executeQuery(sql, params) {
  const ctx = getRequestContext();
  const start = Date.now();
  const result = await db.query(sql, params);
  logger.debug('Query executed', {
    requestId: ctx?.requestId,
    sql,
    duration: Date.now() - start
  });
  return result;
}

// Logger that auto-includes context
const contextLogger = {
  info: (msg, meta = {}) =&gt; {
    const ctx = getRequestContext();
    winston.info(msg, {
      ...meta,
      requestId: ctx?.requestId,
      userId: ctx?.userId
    });
  }
};</code></pre>

AsyncLocalStorage is the Node.js equivalent of Java's <strong>ThreadLocal</strong> — it provides async-aware context propagation without modifying function signatures.

Use it sparingly — overusing it creates hidden dependencies. Best used for cross-cutting concerns like logging, tracing, and authentication context.`
                }
            ]
        }
    ]
};
