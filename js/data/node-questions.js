/**
 * Node.js Interview Questions Data
 * Organized by topic — each topic has 20+ questions.
 */

const NODE_DATA = {
    framework: "node",
    label: "Node.js",
    icon: "bi-hdd-network",
    topics: [
        /* ====================================================
           1. Node.js Fundamentals
           ==================================================== */
        {
            id: "node-fundamentals",
            title: "Node.js Fundamentals",
            icon: "bi-cpu",
            questions: [
                {
                    q: "What is Node.js?",
                    a: `<p><strong>Node.js</strong> is an open-source, cross-platform runtime environment that executes JavaScript code outside a browser. It is built on Chrome's <strong>V8 JavaScript engine</strong> and uses an <strong>event-driven, non-blocking I/O</strong> model, making it efficient for building scalable network applications.</p>`
                },
                {
                    q: "What is the V8 engine?",
                    a: `<p>V8 is Google's open-source high-performance JavaScript and WebAssembly engine, written in C++. It compiles JavaScript directly to <strong>native machine code</strong> using JIT (Just-In-Time) compilation rather than interpreting it, which makes Node.js extremely fast.</p>`
                },
                {
                    q: "Explain the Event Loop in Node.js.",
                    a: `<p>The event loop is the mechanism that allows Node.js to perform non-blocking I/O operations despite being single-threaded. It has six phases:</p>
<ol>
<li><strong>Timers</strong>: Executes callbacks scheduled by <code>setTimeout()</code> and <code>setInterval()</code>.</li>
<li><strong>Pending callbacks</strong>: Executes I/O callbacks deferred to the next loop.</li>
<li><strong>Idle, prepare</strong>: Internal use only.</li>
<li><strong>Poll</strong>: Retrieves new I/O events; executes I/O-related callbacks.</li>
<li><strong>Check</strong>: <code>setImmediate()</code> callbacks are invoked here.</li>
<li><strong>Close callbacks</strong>: e.g., <code>socket.on('close', ...)</code>.</li>
</ol>
<p>Between each phase, Node.js checks for <code>process.nextTick()</code> and microtask (Promise) callbacks.</p>`
                },
                {
                    q: "What is the difference between Node.js and browser JavaScript?",
                    a: `<ul>
<li>Node.js has no <code>window</code> or <code>document</code> objects; the browser does.</li>
<li>Node.js provides <code>global</code> as the global object (or <code>globalThis</code>).</li>
<li>Node.js has access to the file system (<code>fs</code>), networking (<code>net</code>, <code>http</code>), and OS-level APIs.</li>
<li>Node.js uses <strong>CommonJS</strong> (<code>require</code>) and supports ES Modules (<code>import</code>). Browsers use ES Modules.</li>
<li>Node.js can act as a <strong>server</strong>; the browser is a client environment.</li>
</ul>`
                },
                {
                    q: "What is the difference between require() and import?",
                    a: `<p><code>require()</code> is the <strong>CommonJS</strong> module system — it is synchronous and can be called conditionally:</p>
<pre><code>const fs = require('fs');
if (condition) {
  const extra = require('./extra');
}</code></pre>
<p><code>import</code> is the <strong>ES Module</strong> system — it is static (hoisted to the top) and supports tree-shaking:</p>
<pre><code>import fs from 'fs';
import { readFile } from 'fs/promises';</code></pre>
<p>To use ES Modules in Node.js, set <code>"type": "module"</code> in <code>package.json</code> or use the <code>.mjs</code> extension.</p>`
                },
                {
                    q: "What are Globals in Node.js?",
                    a: `<p>Node.js provides several global objects and functions available without importing:</p>
<ul>
<li><code>global</code> / <code>globalThis</code> — the global object.</li>
<li><code>__dirname</code> — directory name of the current module.</li>
<li><code>__filename</code> — filename of the current module.</li>
<li><code>process</code> — provides info and control over the current Node.js process.</li>
<li><code>Buffer</code> — for handling binary data.</li>
<li><code>console</code>, <code>setTimeout</code>, <code>setInterval</code>, <code>setImmediate</code>.</li>
<li><code>require()</code>, <code>module</code>, <code>exports</code> (CommonJS only).</li>
</ul>`
                },
                {
                    q: "What is the process object in Node.js?",
                    a: `<p>The <code>process</code> object is a global that provides information about and control over the current Node.js process. Key properties/methods:</p>
<ul>
<li><code>process.env</code> — environment variables.</li>
<li><code>process.argv</code> — command-line arguments.</li>
<li><code>process.pid</code> — process ID.</li>
<li><code>process.cwd()</code> — current working directory.</li>
<li><code>process.exit(code)</code> — exit with a status code.</li>
<li><code>process.nextTick(fn)</code> — schedule a callback before the next event loop phase.</li>
<li><code>process.memoryUsage()</code> — memory consumption details.</li>
</ul>`
                },
                {
                    q: "What is the difference between process.nextTick() and setImmediate()?",
                    a: `<p><code>process.nextTick()</code> executes the callback <strong>before</strong> the event loop continues to the next phase (microtask queue). <code>setImmediate()</code> executes the callback in the <strong>check phase</strong> of the next event loop iteration.</p>
<pre><code>process.nextTick(() => console.log('nextTick'));  // runs first
setImmediate(() => console.log('setImmediate'));   // runs after
console.log('synchronous');                       // runs before both

// Output: synchronous → nextTick → setImmediate</code></pre>`
                },
                {
                    q: "What is the purpose of package.json?",
                    a: `<p><code>package.json</code> is the manifest file for a Node.js project. It contains:</p>
<ul>
<li><strong>name, version</strong>: Project identity.</li>
<li><strong>scripts</strong>: Custom commands (<code>npm start</code>, <code>npm test</code>).</li>
<li><strong>dependencies</strong>: Production packages.</li>
<li><strong>devDependencies</strong>: Development-only packages.</li>
<li><strong>main / module</strong>: Entry point files.</li>
<li><strong>engines</strong>: Node.js version requirements.</li>
<li><strong>type</strong>: <code>"module"</code> for ES Modules, <code>"commonjs"</code> (default).</li>
</ul>`
                },
                {
                    q: "What is NPM and what are its key commands?",
                    a: `<p>NPM (Node Package Manager) is the default package manager for Node.js. Key commands:</p>
<pre><code>npm init -y             # Initialize a project
npm install express     # Install a package
npm install -D nodemon  # Install as dev dependency
npm uninstall express   # Remove a package
npm update              # Update packages
npm run dev             # Run a custom script
npm ls                  # List installed packages
npm audit               # Check for vulnerabilities
npm publish             # Publish a package</code></pre>`
                },
                {
                    q: "What is the difference between dependencies and devDependencies?",
                    a: `<p><strong>dependencies</strong> are packages needed to run the application in production (e.g., Express, Mongoose). They are installed with <code>npm install package-name</code>.</p>
<p><strong>devDependencies</strong> are packages needed only during development (e.g., Jest, ESLint, Nodemon). They are installed with <code>npm install -D package-name</code> and are not included in production builds.</p>`
                },
                {
                    q: "What is the Node.js module system?",
                    a: `<p>Node.js uses a module system to organize code into reusable files. Each file is its own module. Node.js supports two module systems:</p>
<p><strong>CommonJS (CJS)</strong>:</p>
<pre><code>// exporting
module.exports = { greet };
// importing
const { greet } = require('./utils');</code></pre>
<p><strong>ES Modules (ESM)</strong>:</p>
<pre><code>// exporting
export function greet() {}
// importing
import { greet } from './utils.js';</code></pre>`
                },
                {
                    q: "What are Callbacks in Node.js?",
                    a: `<p>A callback is a function passed as an argument to another function, to be executed after an asynchronous operation completes. Node.js follows the <strong>error-first callback</strong> pattern:</p>
<pre><code>const fs = require('fs');

fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) {
    console.error('Error:', err);
    return;
  }
  console.log(data);
});</code></pre>
<p>The first parameter is always the error (or <code>null</code> if no error).</p>`
                },
                {
                    q: "What is Callback Hell and how do you avoid it?",
                    a: `<p>Callback hell (pyramid of doom) occurs when multiple asynchronous callbacks are nested deeply:</p>
<pre><code>getData(function(a) {
  getMoreData(a, function(b) {
    getMoreData(b, function(c) {
      // deeply nested...
    });
  });
});</code></pre>
<p>Solutions:</p>
<ul>
<li><strong>Promises</strong>: Chain <code>.then()</code> calls.</li>
<li><strong>async/await</strong>: Write asynchronous code that looks synchronous.</li>
<li><strong>Modularization</strong>: Break callbacks into named functions.</li>
<li><strong>Libraries</strong>: Use <code>async.js</code> for control flow.</li>
</ul>`
                },
                {
                    q: "What are Promises in Node.js?",
                    a: `<p>A Promise represents the eventual completion or failure of an asynchronous operation. It has three states:</p>
<ul>
<li><strong>Pending</strong>: Initial state.</li>
<li><strong>Fulfilled</strong>: Operation completed successfully.</li>
<li><strong>Rejected</strong>: Operation failed.</li>
</ul>
<pre><code>const readFileAsync = (path) => {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf8', (err, data) => {
      if (err) reject(err);
      else resolve(data);
    });
  });
};

readFileAsync('file.txt')
  .then(data => console.log(data))
  .catch(err => console.error(err));</code></pre>`
                },
                {
                    q: "Explain async/await in Node.js.",
                    a: `<p><code>async/await</code> is syntactic sugar over Promises that makes asynchronous code look synchronous:</p>
<pre><code>async function processFile() {
  try {
    const data = await fs.promises.readFile('file.txt', 'utf8');
    const result = await processData(data);
    console.log(result);
  } catch (err) {
    console.error('Error:', err);
  }
}

processFile();</code></pre>
<p>Key points: <code>async</code> functions always return a Promise. <code>await</code> pauses execution until the Promise settles.</p>`
                },
                {
                    q: "What is the Buffer class in Node.js?",
                    a: `<p>The <code>Buffer</code> class is used to handle raw binary data directly. It is useful for dealing with TCP streams, file system operations, and other contexts where raw bytes are used:</p>
<pre><code>// Create a buffer
const buf1 = Buffer.alloc(10);            // 10 zero-filled bytes
const buf2 = Buffer.from('Hello');        // from string
const buf3 = Buffer.from([72, 101, 108]); // from array

// Operations
buf2.toString();       // 'Hello'
buf2.length;           // 5
buf2.toJSON();         // { type: 'Buffer', data: [...] }
Buffer.concat([buf2, buf3]); // merge buffers</code></pre>`
                },
                {
                    q: "What are environment variables and how do you use them in Node.js?",
                    a: `<p>Environment variables are key-value pairs set outside the code that configure behavior. Access them via <code>process.env</code>:</p>
<pre><code>// Setting (terminal)
// Windows: set PORT=3000
// Linux/Mac: export PORT=3000

// Reading in code
const port = process.env.PORT || 3000;
const dbUrl = process.env.DATABASE_URL;

// Using dotenv package
require('dotenv').config();
// reads from .env file:
// PORT=3000
// DATABASE_URL=mongodb://localhost/mydb</code></pre>`
                },
                {
                    q: "What is the difference between synchronous and asynchronous methods in Node.js?",
                    a: `<p><strong>Synchronous</strong> methods block the event loop until the operation completes:</p>
<pre><code>const data = fs.readFileSync('file.txt', 'utf8'); // blocks</code></pre>
<p><strong>Asynchronous</strong> methods use callbacks, Promises, or async/await and don't block:</p>
<pre><code>fs.readFile('file.txt', 'utf8', (err, data) => {}); // non-blocking
const data = await fs.promises.readFile('file.txt', 'utf8'); // non-blocking</code></pre>
<p>Always prefer asynchronous methods in production servers to maintain responsiveness.</p>`
                },
                {
                    q: "What is the EventEmitter class?",
                    a: `<p><code>EventEmitter</code> is a core class in the <code>events</code> module that facilitates communication between objects using the observer pattern:</p>
<pre><code>const EventEmitter = require('events');
const emitter = new EventEmitter();

// Listen for an event
emitter.on('orderPlaced', (order) => {
  console.log('Order received:', order.id);
});

// Emit an event
emitter.emit('orderPlaced', { id: 1, item: 'Book' });

// Listen once
emitter.once('init', () => console.log('Initialized'));

// Remove listener
emitter.removeListener('orderPlaced', handler);</code></pre>
<p>Many Node.js core modules (HTTP, Streams, fs) extend EventEmitter.</p>`
                }
            ]
        },

        /* ====================================================
           2. Modules & File System
           ==================================================== */
        {
            id: "modules-filesystem",
            title: "Modules & File System",
            icon: "bi-folder2-open",
            questions: [
                {
                    q: "How does the require() function work internally?",
                    a: `<p>When you call <code>require()</code>, Node.js performs these steps:</p>
<ol>
<li><strong>Resolve</strong>: Find the absolute path of the module.</li>
<li><strong>Load</strong>: Read the file contents based on extension (.js, .json, .node).</li>
<li><strong>Wrap</strong>: Wrap the code in a function: <code>(function(exports, require, module, __filename, __dirname) { ... })</code></li>
<li><strong>Execute</strong>: Run the wrapped function.</li>
<li><strong>Cache</strong>: Cache the module so subsequent <code>require()</code> calls return the same object.</li>
</ol>`
                },
                {
                    q: "What is module caching in Node.js?",
                    a: `<p>When a module is loaded for the first time, Node.js caches it in <code>require.cache</code>. Subsequent calls to <code>require()</code> for the same module return the <strong>cached version</strong> instead of re-executing the file.</p>
<pre><code>// Check cache
console.log(require.cache);

// Clear cache for a specific module
delete require.cache[require.resolve('./myModule')];</code></pre>
<p>This means module-level variables persist across requires — a module is essentially a <strong>singleton</strong>.</p>`
                },
                {
                    q: "What is the path module and its key methods?",
                    a: `<p>The <code>path</code> module provides utilities for working with file and directory paths:</p>
<pre><code>const path = require('path');

path.join('/users', 'john', 'docs');    // '/users/john/docs'
path.resolve('src', 'index.js');        // absolute path
path.basename('/foo/bar/baz.js');       // 'baz.js'
path.dirname('/foo/bar/baz.js');        // '/foo/bar'
path.extname('index.html');            // '.html'
path.parse('/foo/bar/baz.js');         // { root, dir, base, ext, name }
path.isAbsolute('/foo');               // true</code></pre>`
                },
                {
                    q: "How do you read and write files in Node.js?",
                    a: `<p>Use the <code>fs</code> module for file operations:</p>
<pre><code>const fs = require('fs');
const fsp = require('fs/promises');

// Async with callback
fs.readFile('input.txt', 'utf8', (err, data) => {});
fs.writeFile('output.txt', 'Hello', (err) => {});

// Async with Promises
const data = await fsp.readFile('input.txt', 'utf8');
await fsp.writeFile('output.txt', 'Hello');

// Sync (use sparingly)
const data = fs.readFileSync('input.txt', 'utf8');
fs.writeFileSync('output.txt', 'Hello');

// Append
fs.appendFile('log.txt', 'New log entry\\n', (err) => {});</code></pre>`
                },
                {
                    q: "What are the different ways to handle file operations asynchronously?",
                    a: `<p>Node.js offers three approaches:</p>
<p><strong>1. Callbacks:</strong></p>
<pre><code>fs.readFile('file.txt', 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
});</code></pre>
<p><strong>2. Promises (fs/promises):</strong></p>
<pre><code>const fsp = require('fs/promises');
fsp.readFile('file.txt', 'utf8')
  .then(data => console.log(data))
  .catch(err => console.error(err));</code></pre>
<p><strong>3. async/await:</strong></p>
<pre><code>async function read() {
  const data = await fsp.readFile('file.txt', 'utf8');
  console.log(data);
}</code></pre>`
                },
                {
                    q: "What are file descriptors in Node.js?",
                    a: `<p>A file descriptor is a numeric identifier assigned by the OS when a file is opened. Node.js uses them for low-level file operations:</p>
<pre><code>const fs = require('fs');

fs.open('file.txt', 'r', (err, fd) => {
  // fd is the file descriptor
  const buffer = Buffer.alloc(100);
  fs.read(fd, buffer, 0, 100, 0, (err, bytesRead, buf) => {
    console.log(buf.toString('utf8', 0, bytesRead));
    fs.close(fd, (err) => {}); // always close!
  });
});</code></pre>
<p>Flags: <code>'r'</code> (read), <code>'w'</code> (write), <code>'a'</code> (append), <code>'r+'</code> (read+write).</p>`
                },
                {
                    q: "How do you watch for file changes in Node.js?",
                    a: `<p>Use <code>fs.watch()</code> or <code>fs.watchFile()</code>:</p>
<pre><code>// fs.watch — uses OS file system events (preferred)
fs.watch('file.txt', (eventType, filename) => {
  console.log(eventType, filename); // 'change' or 'rename'
});

// fs.watchFile — polls the file (cross-platform reliable)
fs.watchFile('file.txt', { interval: 1000 }, (curr, prev) => {
  console.log('Modified:', curr.mtime);
});

// For production, use chokidar (handles edge cases)
const chokidar = require('chokidar');
chokidar.watch('.').on('all', (event, path) => {
  console.log(event, path);
});</code></pre>`
                },
                {
                    q: "How do you create and manage directories in Node.js?",
                    a: `<p>Use the <code>fs</code> module for directory operations:</p>
<pre><code>const fsp = require('fs/promises');

// Create directory
await fsp.mkdir('newDir');
await fsp.mkdir('path/to/nested', { recursive: true });

// Read directory contents
const files = await fsp.readdir('myDir');
const entries = await fsp.readdir('myDir', { withFileTypes: true });

// Check if directory exists
const exists = fs.existsSync('myDir');

// Remove directory
await fsp.rmdir('emptyDir');
await fsp.rm('dirWithFiles', { recursive: true, force: true });

// Get file/dir info
const stats = await fsp.stat('myDir');
console.log(stats.isDirectory()); // true</code></pre>`
                },
                {
                    q: "What is the os module in Node.js?",
                    a: `<p>The <code>os</code> module provides operating system-related utility methods:</p>
<pre><code>const os = require('os');

os.platform();     // 'win32', 'linux', 'darwin'
os.arch();         // 'x64', 'arm64'
os.cpus();         // CPU core info
os.totalmem();     // Total system memory
os.freemem();      // Free system memory
os.homedir();      // User's home directory
os.hostname();     // Machine hostname
os.tmpdir();       // Temp directory
os.networkInterfaces(); // Network interfaces
os.uptime();       // System uptime in seconds
os.EOL;            // Line ending ('\\n' or '\\r\\n')</code></pre>`
                },
                {
                    q: "How do you handle file uploads in Node.js?",
                    a: `<p>Use middleware like <code>multer</code> with Express for handling multipart/form-data:</p>
<pre><code>const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const uniqueName = Date.now() + '-' + file.originalname;
    cb(null, uniqueName);
  }
});

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
  fileFilter: (req, file, cb) => {
    const allowed = ['image/jpeg', 'image/png'];
    cb(null, allowed.includes(file.mimetype));
  }
});

app.post('/upload', upload.single('avatar'), (req, res) => {
  res.json({ file: req.file });
});</code></pre>`
                },
                {
                    q: "What is the url module in Node.js?",
                    a: `<p>The <code>url</code> module provides utilities for URL resolution and parsing:</p>
<pre><code>// Modern WHATWG URL API (preferred)
const myUrl = new URL('https://example.com:8080/path?name=john#section');

myUrl.hostname;    // 'example.com'
myUrl.port;        // '8080'
myUrl.pathname;    // '/path'
myUrl.searchParams.get('name'); // 'john'
myUrl.hash;        // '#section'
myUrl.origin;      // 'https://example.com:8080'

// Construct URLs safely
const apiUrl = new URL('/api/users', 'https://example.com');
apiUrl.searchParams.append('page', '2');</code></pre>`
                },
                {
                    q: "What are Worker Threads in Node.js?",
                    a: `<p>Worker Threads allow running JavaScript in parallel on multiple threads, useful for CPU-intensive tasks:</p>
<pre><code>const { Worker, isMainThread, parentPort } = require('worker_threads');

if (isMainThread) {
  const worker = new Worker(__filename);
  worker.on('message', (msg) => console.log('Result:', msg));
  worker.postMessage('start');
} else {
  parentPort.on('message', (msg) => {
    // CPU-intensive work here
    const result = heavyComputation();
    parentPort.postMessage(result);
  });
}</code></pre>
<p>Unlike child processes, worker threads share memory via <code>SharedArrayBuffer</code>.</p>`
                },
                {
                    q: "What is the child_process module?",
                    a: `<p>The <code>child_process</code> module lets you spawn new processes. It provides four methods:</p>
<pre><code>const { exec, execFile, spawn, fork } = require('child_process');

// exec — runs a shell command, buffers output
exec('ls -la', (err, stdout, stderr) => {});

// execFile — runs a command without a shell (safer)
execFile('node', ['script.js'], (err, stdout) => {});

// spawn — streams I/O (for large output)
const child = spawn('node', ['script.js']);
child.stdout.on('data', (data) => {});

// fork — spawns a new Node.js process with IPC
const child = fork('worker.js');
child.send({ type: 'start' });
child.on('message', (msg) => {});</code></pre>`
                },
                {
                    q: "How does Node.js handle errors?",
                    a: `<p>Node.js uses several error-handling patterns:</p>
<pre><code>// 1. Error-first callbacks
fs.readFile('x', (err, data) => {
  if (err) return console.error(err);
});

// 2. try/catch with async/await
try {
  const data = await readFileAsync('x');
} catch (err) {
  console.error(err);
}

// 3. Promise .catch()
readFileAsync('x').catch(err => console.error(err));

// 4. EventEmitter 'error' event
server.on('error', (err) => console.error(err));

// 5. Uncaught exceptions (last resort)
process.on('uncaughtException', (err) => {
  console.error('Uncaught:', err);
  process.exit(1);
});

// 6. Unhandled promise rejections
process.on('unhandledRejection', (reason) => {
  console.error('Unhandled:', reason);
});</code></pre>`
                },
                {
                    q: "What is the cluster module in Node.js?",
                    a: `<p>The <code>cluster</code> module creates child processes (workers) that share the same server port, utilizing multiple CPU cores:</p>
<pre><code>const cluster = require('cluster');
const os = require('os');

if (cluster.isPrimary) {
  const numCPUs = os.cpus().length;
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on('exit', (worker) => {
    console.log('Worker died, restarting...');
    cluster.fork();
  });
} else {
  const http = require('http');
  http.createServer((req, res) => {
    res.end('Hello from worker ' + process.pid);
  }).listen(3000);
}</code></pre>`
                },
                {
                    q: "What is libuv and what role does it play in Node.js?",
                    a: `<p><code>libuv</code> is a C library that provides Node.js with its <strong>asynchronous I/O</strong> capabilities. It powers:</p>
<ul>
<li>The <strong>event loop</strong> implementation.</li>
<li><strong>Thread pool</strong> (default 4 threads) for file system operations, DNS lookups, and other blocking tasks.</li>
<li>Non-blocking <strong>network I/O</strong> using OS-specific mechanisms (epoll on Linux, kqueue on macOS, IOCP on Windows).</li>
<li>Signal handling and child process management.</li>
</ul>
<p>You can change the thread pool size: <code>process.env.UV_THREADPOOL_SIZE = 8;</code></p>`
                },
                {
                    q: "What are the different types of timers in Node.js?",
                    a: `<p>Node.js provides several timer functions:</p>
<pre><code>// Execute once after delay
const id = setTimeout(() => {}, 1000);
clearTimeout(id);

// Execute repeatedly
const id = setInterval(() => {}, 1000);
clearInterval(id);

// Execute in the check phase (after I/O)
const id = setImmediate(() => {});
clearImmediate(id);

// Execute before the next event loop phase
process.nextTick(() => {});</code></pre>
<p>Priority order: <code>process.nextTick</code> > microtasks (Promises) > <code>setTimeout/setInterval</code> > <code>setImmediate</code>.</p>`
                },
                {
                    q: "What is the crypto module used for?",
                    a: `<p>The <code>crypto</code> module provides cryptographic functionality:</p>
<pre><code>const crypto = require('crypto');

// Hashing
const hash = crypto.createHash('sha256')
  .update('password')
  .digest('hex');

// HMAC
const hmac = crypto.createHmac('sha256', 'secret')
  .update('message')
  .digest('hex');

// Random bytes
const token = crypto.randomBytes(32).toString('hex');

// UUID
const uuid = crypto.randomUUID();

// Encrypt / Decrypt (AES-256-GCM)
const cipher = crypto.createCipheriv('aes-256-gcm', key, iv);
const encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');</code></pre>`
                },
                {
                    q: "How does garbage collection work in Node.js?",
                    a: `<p>Node.js uses V8's garbage collector which divides the heap into generations:</p>
<ul>
<li><strong>Young Generation (Scavenger)</strong>: Short-lived objects. Uses a semi-space allocation strategy; objects surviving two GC cycles are promoted.</li>
<li><strong>Old Generation (Mark-Sweep-Compact)</strong>: Long-lived objects. Uses mark-and-sweep to identify unreachable objects, then compacts memory.</li>
</ul>
<p>You can monitor memory usage with <code>process.memoryUsage()</code> and trigger GC with <code>--expose-gc</code> flag for debugging. Tools like <code>--inspect</code> and Chrome DevTools help identify memory leaks.</p>`
                }
            ]
        },

        /* ====================================================
           3. Express.js & HTTP
           ==================================================== */
        {
            id: "express-http",
            title: "Express.js & HTTP",
            icon: "bi-globe",
            questions: [
                {
                    q: "What is Express.js?",
                    a: `<p>Express.js is a minimal, flexible <strong>web application framework</strong> for Node.js. It provides a robust set of features for building web and API applications:</p>
<pre><code>const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server running on port 3000');
});</code></pre>
<p>It is the most popular Node.js framework, often called the "de facto standard" for Node.js web servers.</p>`
                },
                {
                    q: "What is middleware in Express.js?",
                    a: `<p>Middleware functions have access to the request (<code>req</code>), response (<code>res</code>), and the <code>next</code> function. They execute sequentially and can:</p>
<ul>
<li>Execute code.</li>
<li>Modify <code>req</code> and <code>res</code> objects.</li>
<li>End the request-response cycle.</li>
<li>Call <code>next()</code> to pass control to the next middleware.</li>
</ul>
<pre><code>// Custom middleware
const logger = (req, res, next) => {
  console.log(req.method, req.url, Date.now());
  next();
};

app.use(logger);

// Built-in middleware
app.use(express.json());     // Parse JSON bodies
app.use(express.static('public')); // Serve static files</code></pre>`
                },
                {
                    q: "What are the different types of middleware in Express?",
                    a: `<ul>
<li><strong>Application-level</strong>: <code>app.use()</code>, <code>app.get()</code>, etc.</li>
<li><strong>Router-level</strong>: <code>router.use()</code> — works like app-level but bound to a Router instance.</li>
<li><strong>Error-handling</strong>: Has four parameters: <code>(err, req, res, next)</code>.</li>
<li><strong>Built-in</strong>: <code>express.json()</code>, <code>express.urlencoded()</code>, <code>express.static()</code>.</li>
<li><strong>Third-party</strong>: <code>cors</code>, <code>helmet</code>, <code>morgan</code>, <code>compression</code>.</li>
</ul>
<pre><code>// Error handling middleware (must be defined last)
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong' });
});</code></pre>`
                },
                {
                    q: "How do you handle routing in Express?",
                    a: `<p>Express supports route methods corresponding to HTTP methods:</p>
<pre><code>// Basic routes
app.get('/users', getUsers);
app.post('/users', createUser);
app.put('/users/:id', updateUser);
app.delete('/users/:id', deleteUser);

// Route parameters
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
});

// Query strings: /search?q=node
app.get('/search', (req, res) => {
  const query = req.query.q;
});

// Router for modular routes
const router = express.Router();
router.get('/', getUsers);
router.post('/', createUser);
app.use('/api/users', router);</code></pre>`
                },
                {
                    q: "What is the difference between app.use() and app.get()?",
                    a: `<p><code>app.use()</code> matches <strong>all HTTP methods</strong> and matches paths that <strong>start with</strong> the given path. <code>app.get()</code> matches only <strong>GET requests</strong> and requires an <strong>exact path match</strong>:</p>
<pre><code>// Matches GET, POST, PUT, DELETE etc. for /api and /api/*
app.use('/api', middleware);

// Matches only GET requests to exactly /api
app.get('/api', handler);

// app.use without a path — matches ALL requests
app.use(express.json());</code></pre>`
                },
                {
                    q: "How do you serve static files in Express?",
                    a: `<p>Use the built-in <code>express.static</code> middleware:</p>
<pre><code>// Serve files from 'public' directory
app.use(express.static('public'));
// Access: http://localhost:3000/images/logo.png

// With a virtual prefix
app.use('/assets', express.static('public'));
// Access: http://localhost:3000/assets/images/logo.png

// Multiple directories
app.use(express.static('public'));
app.use(express.static('uploads'));

// With options
app.use(express.static('public', {
  maxAge: '1d',
  index: 'index.html',
  dotfiles: 'deny'
}));</code></pre>`
                },
                {
                    q: "How do you handle errors in Express?",
                    a: `<p>Express has a specific pattern for error handling:</p>
<pre><code>// Synchronous errors are caught automatically
app.get('/sync', (req, res) => {
  throw new Error('Sync error'); // caught by Express
});

// Async errors must be passed to next()
app.get('/async', async (req, res, next) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (err) {
    next(err); // pass to error handler
  }
});

// Error handling middleware (4 params)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({
    error: err.message,
    stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
  });
});</code></pre>`
                },
                {
                    q: "What is CORS and how do you handle it in Express?",
                    a: `<p>CORS (Cross-Origin Resource Sharing) is a security mechanism that restricts HTTP requests from different origins. Handle it with the <code>cors</code> package:</p>
<pre><code>const cors = require('cors');

// Allow all origins
app.use(cors());

// Allow specific origins
app.use(cors({
  origin: ['https://example.com', 'https://app.example.com'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
}));

// Per-route CORS
app.get('/api/public', cors(), handler);</code></pre>`
                },
                {
                    q: "How do you create a RESTful API with Express?",
                    a: `<p>REST APIs follow conventions for URL structure and HTTP methods:</p>
<pre><code>const router = express.Router();

// GET    /api/posts       → List all posts
router.get('/', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

// GET    /api/posts/:id   → Get single post
router.get('/:id', async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: 'Not found' });
  res.json(post);
});

// POST   /api/posts       → Create post
router.post('/', async (req, res) => {
  const post = await Post.create(req.body);
  res.status(201).json(post);
});

// PUT    /api/posts/:id   → Update post
// DELETE /api/posts/:id   → Delete post

app.use('/api/posts', router);</code></pre>`
                },
                {
                    q: "What is the HTTP module in Node.js?",
                    a: `<p>The <code>http</code> module allows Node.js to create HTTP servers and make HTTP requests without Express:</p>
<pre><code>const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello World' }));
});

server.listen(3000);

// Making HTTP requests
http.get('http://api.example.com/data', (res) => {
  let data = '';
  res.on('data', chunk => data += chunk);
  res.on('end', () => console.log(JSON.parse(data)));
});</code></pre>`
                },
                {
                    q: "What is request validation and how do you implement it?",
                    a: `<p>Request validation ensures incoming data meets expected formats. Use libraries like <code>joi</code> or <code>express-validator</code>:</p>
<pre><code>// Using Joi
const Joi = require('joi');

const userSchema = Joi.object({
  name: Joi.string().min(2).max(50).required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(18).max(120)
});

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

app.post('/users', validate(userSchema), createUser);</code></pre>`
                },
                {
                    q: "What is rate limiting and how do you implement it?",
                    a: `<p>Rate limiting restricts the number of requests a client can make in a time window. Use <code>express-rate-limit</code>:</p>
<pre><code>const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100,                 // 100 requests per window
  message: { error: 'Too many requests, try again later' },
  standardHeaders: true,
  legacyHeaders: false
});

// Apply to all routes
app.use(limiter);

// Or specific routes
app.use('/api/', limiter);</code></pre>`
                },
                {
                    q: "What is helmet.js and why use it?",
                    a: `<p><code>helmet</code> is a middleware that sets various HTTP security headers:</p>
<pre><code>const helmet = require('helmet');
app.use(helmet());

// It sets headers like:
// Content-Security-Policy
// X-Content-Type-Options: nosniff
// X-Frame-Options: DENY
// Strict-Transport-Security
// X-XSS-Protection

// Custom configuration
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "cdn.example.com"]
    }
  },
  crossOriginEmbedderPolicy: false
}));</code></pre>`
                },
                {
                    q: "What are HTTP status codes? List the important ones.",
                    a: `<ul>
<li><strong>2xx Success</strong>: 200 OK, 201 Created, 204 No Content</li>
<li><strong>3xx Redirection</strong>: 301 Moved Permanently, 302 Found, 304 Not Modified</li>
<li><strong>4xx Client Error</strong>: 400 Bad Request, 401 Unauthorized, 403 Forbidden, 404 Not Found, 409 Conflict, 422 Unprocessable Entity, 429 Too Many Requests</li>
<li><strong>5xx Server Error</strong>: 500 Internal Server Error, 502 Bad Gateway, 503 Service Unavailable, 504 Gateway Timeout</li>
</ul>
<pre><code>res.status(200).json({ data });
res.status(201).json({ created: true });
res.status(400).json({ error: 'Bad request' });
res.status(404).json({ error: 'Not found' });</code></pre>`
                },
                {
                    q: "How do you implement request logging in Express?",
                    a: `<p>Use the <code>morgan</code> middleware for HTTP request logging:</p>
<pre><code>const morgan = require('morgan');

// Predefined formats
app.use(morgan('dev'));      // colored console output
app.use(morgan('combined')); // Apache-style logs

// Custom format
app.use(morgan(':method :url :status :response-time ms'));

// Log to a file
const fs = require('fs');
const accessLog = fs.createWriteStream('./access.log', { flags: 'a' });
app.use(morgan('combined', { stream: accessLog }));</code></pre>`
                },
                {
                    q: "What is body parsing in Express?",
                    a: `<p>Body parsing extracts data from the request body. Express 4.16+ has built-in parsers:</p>
<pre><code>// Parse JSON bodies (Content-Type: application/json)
app.use(express.json({ limit: '10mb' }));

// Parse URL-encoded bodies (Content-Type: application/x-www-form-urlencoded)
app.use(express.urlencoded({ extended: true }));

// Using parsed body
app.post('/api/users', (req, res) => {
  const { name, email } = req.body;
  // name and email are available
});</code></pre>
<p><code>extended: true</code> uses <code>qs</code> library (supports nested objects); <code>false</code> uses <code>querystring</code>.</p>`
                },
                {
                    q: "How do you handle file downloads in Express?",
                    a: `<p>Express provides several methods for sending files:</p>
<pre><code>// Send a file (inline, displayed in browser)
app.get('/view', (req, res) => {
  res.sendFile(path.join(__dirname, 'files', 'report.pdf'));
});

// Download a file (prompts save dialog)
app.get('/download', (req, res) => {
  res.download(path.join(__dirname, 'files', 'report.pdf'), 'my-report.pdf');
});

// Stream large files
app.get('/stream', (req, res) => {
  const stream = fs.createReadStream('large-file.zip');
  res.set('Content-Type', 'application/zip');
  stream.pipe(res);
});</code></pre>`
                },
                {
                    q: "What is Express Router and how do you modularize routes?",
                    a: `<p>Express Router creates modular, mountable route handlers:</p>
<pre><code>// routes/users.js
const router = require('express').Router();

router.get('/', getAllUsers);
router.get('/:id', getUserById);
router.post('/', createUser);

module.exports = router;

// routes/products.js
const router = require('express').Router();
router.get('/', getAllProducts);
module.exports = router;

// app.js
const userRoutes = require('./routes/users');
const productRoutes = require('./routes/products');

app.use('/api/users', userRoutes);
app.use('/api/products', productRoutes);</code></pre>`
                },
                {
                    q: "How do you implement response compression in Express?",
                    a: `<p>Use the <code>compression</code> middleware to gzip responses:</p>
<pre><code>const compression = require('compression');

app.use(compression({
  level: 6,              // compression level (0-9)
  threshold: 1024,       // min size to compress (bytes)
  filter: (req, res) => {
    if (req.headers['x-no-compression']) return false;
    return compression.filter(req, res);
  }
}));

// Responses are now automatically compressed
app.get('/api/large-data', (req, res) => {
  res.json(largeDataSet); // automatically gzipped
});</code></pre>`
                },
                {
                    q: "What are template engines in Express?",
                    a: `<p>Template engines generate HTML on the server by combining templates with data. Popular engines include EJS, Pug, and Handlebars:</p>
<pre><code>// Setup (EJS)
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Render a template
app.get('/profile', (req, res) => {
  res.render('profile', {
    title: 'User Profile',
    user: { name: 'John', age: 30 }
  });
});

// views/profile.ejs
// &lt;h1&gt;&lt;%= user.name %&gt;&lt;/h1&gt;
// &lt;p&gt;Age: &lt;%= user.age %&gt;&lt;/p&gt;</code></pre>`
                }
            ]
        },

        /* ====================================================
           4. Streams & Buffers
           ==================================================== */
        {
            id: "streams-buffers",
            title: "Streams & Buffers",
            icon: "bi-water",
            questions: [
                {
                    q: "What are Streams in Node.js?",
                    a: `<p>Streams are objects that let you read or write data continuously. They handle data piece by piece, without loading everything into memory. There are four types:</p>
<ul>
<li><strong>Readable</strong>: Read data from (e.g., <code>fs.createReadStream</code>, <code>http.IncomingMessage</code>).</li>
<li><strong>Writable</strong>: Write data to (e.g., <code>fs.createWriteStream</code>, <code>http.ServerResponse</code>).</li>
<li><strong>Duplex</strong>: Both readable and writable (e.g., TCP sockets).</li>
<li><strong>Transform</strong>: Duplex stream that modifies data as it passes through (e.g., <code>zlib.createGzip</code>).</li>
</ul>`
                },
                {
                    q: "How do you use Readable and Writable streams?",
                    a: `<pre><code>const fs = require('fs');

// Readable stream
const readStream = fs.createReadStream('input.txt', {
  encoding: 'utf8',
  highWaterMark: 64 * 1024 // 64KB chunks
});

readStream.on('data', (chunk) => console.log(chunk));
readStream.on('end', () => console.log('Done reading'));
readStream.on('error', (err) => console.error(err));

// Writable stream
const writeStream = fs.createWriteStream('output.txt');

writeStream.write('Hello ');
writeStream.write('World');
writeStream.end(); // signal no more data

writeStream.on('finish', () => console.log('Done writing'));</code></pre>`
                },
                {
                    q: "What is the pipe() method?",
                    a: `<p><code>pipe()</code> connects a Readable stream to a Writable stream, automatically handling data flow and backpressure:</p>
<pre><code>const fs = require('fs');

// Copy a file using pipe
fs.createReadStream('source.txt')
  .pipe(fs.createWriteStream('dest.txt'));

// Chain multiple transforms
fs.createReadStream('file.txt')
  .pipe(zlib.createGzip())
  .pipe(fs.createWriteStream('file.txt.gz'));

// Using pipeline (recommended — handles errors)
const { pipeline } = require('stream');

pipeline(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('output.gz'),
  (err) => {
    if (err) console.error('Pipeline failed:', err);
    else console.log('Pipeline succeeded');
  }
);</code></pre>`
                },
                {
                    q: "What is backpressure in streams?",
                    a: `<p>Backpressure occurs when the writable stream cannot process data as fast as the readable stream produces it. Node.js handles this automatically with <code>pipe()</code>, but you need to handle it manually with events:</p>
<pre><code>const readable = fs.createReadStream('large-file');
const writable = fs.createWriteStream('output');

readable.on('data', (chunk) => {
  const canContinue = writable.write(chunk);
  if (!canContinue) {
    readable.pause(); // stop reading
  }
});

writable.on('drain', () => {
  readable.resume(); // resume reading
});</code></pre>
<p>Using <code>pipe()</code> or <code>pipeline()</code> handles backpressure automatically.</p>`
                },
                {
                    q: "How do you create a custom Transform stream?",
                    a: `<pre><code>const { Transform } = require('stream');

class UpperCaseTransform extends Transform {
  _transform(chunk, encoding, callback) {
    this.push(chunk.toString().toUpperCase());
    callback();
  }
}

// Usage
fs.createReadStream('input.txt')
  .pipe(new UpperCaseTransform())
  .pipe(fs.createWriteStream('output.txt'));

// Using simplified constructor
const toUpperCase = new Transform({
  transform(chunk, encoding, callback) {
    callback(null, chunk.toString().toUpperCase());
  }
});</code></pre>`
                },
                {
                    q: "What is the difference between flowing and paused modes in Readable streams?",
                    a: `<p>Readable streams operate in two modes:</p>
<p><strong>Flowing mode</strong>: Data is read automatically and emitted via events as fast as possible:</p>
<pre><code>readable.on('data', (chunk) => {
  // stream is in flowing mode
});</code></pre>
<p><strong>Paused mode</strong>: Data is read explicitly by calling <code>read()</code>:</p>
<pre><code>readable.on('readable', () => {
  let chunk;
  while ((chunk = readable.read()) !== null) {
    process.stdout.write(chunk);
  }
});</code></pre>
<p>You switch to flowing mode by adding a <code>'data'</code> listener, calling <code>resume()</code>, or piping. Use <code>pause()</code> to switch back.</p>`
                },
                {
                    q: "How do you use streams for HTTP responses?",
                    a: `<p>Streaming HTTP responses is efficient for large files:</p>
<pre><code>const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  if (req.url === '/video') {
    const stat = fs.statSync('video.mp4');
    res.writeHead(200, {
      'Content-Type': 'video/mp4',
      'Content-Length': stat.size
    });
    fs.createReadStream('video.mp4').pipe(res);
  }
});

// Express equivalent
app.get('/download', (req, res) => {
  const stream = fs.createReadStream('large-file.zip');
  stream.pipe(res);
});</code></pre>`
                },
                {
                    q: "What is the stream.Readable.from() method?",
                    a: `<p><code>Readable.from()</code> creates a readable stream from an iterable (array, generator, async generator):</p>
<pre><code>const { Readable } = require('stream');

// From array
const stream = Readable.from(['Hello', ' ', 'World']);

// From async generator
async function* generate() {
  yield 'chunk 1';
  yield 'chunk 2';
  yield 'chunk 3';
}

const asyncStream = Readable.from(generate());
asyncStream.on('data', (chunk) => console.log(chunk));</code></pre>`
                },
                {
                    q: "What is the difference between Buffer.alloc() and Buffer.allocUnsafe()?",
                    a: `<p><code>Buffer.alloc(size)</code> creates a zero-filled buffer — it's <strong>safe</strong> because old data is cleared:</p>
<pre><code>const safe = Buffer.alloc(10); // all zeros</code></pre>
<p><code>Buffer.allocUnsafe(size)</code> allocates memory without clearing it — it's <strong>faster</strong> but may contain old sensitive data:</p>
<pre><code>const unsafe = Buffer.allocUnsafe(10); // may contain old data
unsafe.fill(0); // manually clear for safety</code></pre>
<p>Use <code>Buffer.alloc()</code> unless you know you'll overwrite all bytes immediately.</p>`
                },
                {
                    q: "How do you compress and decompress data using streams?",
                    a: `<p>Use the <code>zlib</code> module for compression:</p>
<pre><code>const zlib = require('zlib');
const fs = require('fs');
const { pipeline } = require('stream');

// Compress
pipeline(
  fs.createReadStream('input.txt'),
  zlib.createGzip(),
  fs.createWriteStream('input.txt.gz'),
  (err) => console.log(err || 'Compressed!')
);

// Decompress
pipeline(
  fs.createReadStream('input.txt.gz'),
  zlib.createGunzip(),
  fs.createWriteStream('output.txt'),
  (err) => console.log(err || 'Decompressed!')
);</code></pre>`
                },
                {
                    q: "What are object mode streams?",
                    a: `<p>By default, streams work with <code>Buffer</code> or <code>string</code> data. Object mode allows streams to work with any JavaScript value:</p>
<pre><code>const { Transform } = require('stream');

const parseJSON = new Transform({
  objectMode: true,
  transform(chunk, encoding, callback) {
    try {
      const obj = JSON.parse(chunk);
      callback(null, obj);
    } catch (err) {
      callback(err);
    }
  }
});

// Now the stream emits objects instead of buffers
parseJSON.on('data', (obj) => {
  console.log(obj.name); // works with objects
});</code></pre>`
                },
                {
                    q: "How do you handle stream errors properly?",
                    a: `<p>Always listen for <code>'error'</code> events on streams. Unhandled errors crash the process:</p>
<pre><code>// Individual error handling
const readable = fs.createReadStream('file.txt');
readable.on('error', (err) => console.error('Read error:', err));

const writable = fs.createWriteStream('out.txt');
writable.on('error', (err) => console.error('Write error:', err));

readable.pipe(writable);

// Better: use pipeline() — handles errors in all streams
const { pipeline } = require('stream/promises');

async function processFile() {
  try {
    await pipeline(
      fs.createReadStream('input.txt'),
      transformStream,
      fs.createWriteStream('output.txt')
    );
    console.log('Done');
  } catch (err) {
    console.error('Pipeline error:', err);
  }
}</code></pre>`
                },
                {
                    q: "What are highWaterMark and its impact on streams?",
                    a: `<p><code>highWaterMark</code> is the internal buffer size threshold (in bytes for binary, objects for objectMode). It controls:</p>
<ul>
<li>How much data a Readable stream buffers before pausing.</li>
<li>How much data a Writable stream buffers before <code>write()</code> returns <code>false</code>.</li>
</ul>
<pre><code>// Default: 16KB (16384 bytes) for fs streams
const stream = fs.createReadStream('file.txt', {
  highWaterMark: 64 * 1024 // 64KB chunks
});

// For object mode, default is 16 objects
const objectStream = new Readable({
  objectMode: true,
  highWaterMark: 100 // buffer up to 100 objects
});</code></pre>`
                },
                {
                    q: "How do you use the stream/promises API?",
                    a: `<p>Node.js 15+ provides promise-based versions of stream utilities:</p>
<pre><code>const { pipeline, finished } = require('stream/promises');
const fs = require('fs');

// pipeline with async/await
async function compress() {
  await pipeline(
    fs.createReadStream('input.txt'),
    zlib.createGzip(),
    fs.createWriteStream('input.txt.gz')
  );
  console.log('Compression complete');
}

// Wait for a stream to finish
async function waitForStream() {
  const writable = fs.createWriteStream('output.txt');
  writable.write('data');
  writable.end();
  await finished(writable);
  console.log('Stream finished');
}</code></pre>`
                },
                {
                    q: "How do you read a stream into a string or buffer?",
                    a: `<p>Collect all chunks from a readable stream:</p>
<pre><code>// Using async iteration (Node.js 10+)
async function streamToString(stream) {
  const chunks = [];
  for await (const chunk of stream) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString('utf8');
}

// Usage
const stream = fs.createReadStream('file.txt');
const content = await streamToString(stream);

// Using events
function streamToBuffer(stream) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    stream.on('data', (chunk) => chunks.push(chunk));
    stream.on('end', () => resolve(Buffer.concat(chunks)));
    stream.on('error', reject);
  });
}</code></pre>`
                },
                {
                    q: "What is a PassThrough stream?",
                    a: `<p>A <code>PassThrough</code> stream is a Transform stream that passes data through without modification. It's useful for:</p>
<pre><code>const { PassThrough } = require('stream');

// Tee: split a stream into two destinations
const passthrough = new PassThrough();
const writeStream = fs.createWriteStream('copy.txt');

const readable = fs.createReadStream('original.txt');
readable.pipe(passthrough);
readable.pipe(writeStream);

passthrough.on('data', (chunk) => {
  console.log('Also processing:', chunk.length, 'bytes');
});

// Useful for monitoring data flow, logging, or
// creating a proxy between streams</code></pre>`
                },
                {
                    q: "How do you implement a Duplex stream?",
                    a: `<p>A Duplex stream is both readable and writable (independently). The read and write sides operate separately:</p>
<pre><code>const { Duplex } = require('stream');

class MyDuplex extends Duplex {
  constructor(options) {
    super(options);
    this.data = ['hello', 'world', null];
    this.index = 0;
  }

  _read(size) {
    this.push(this.data[this.index++]);
  }

  _write(chunk, encoding, callback) {
    console.log('Received:', chunk.toString());
    callback();
  }
}

const duplex = new MyDuplex();
duplex.on('data', (chunk) => console.log('Read:', chunk.toString()));
duplex.write('test input');</code></pre>
<p>TCP sockets are a real-world example of Duplex streams.</p>`
                },
                {
                    q: "What is the Web Streams API in Node.js?",
                    a: `<p>Node.js 18+ supports the WHATWG Web Streams API, which is cross-compatible with browsers:</p>
<pre><code>// ReadableStream
const readable = new ReadableStream({
  start(controller) {
    controller.enqueue('Hello');
    controller.enqueue('World');
    controller.close();
  }
});

const reader = readable.getReader();
const { value, done } = await reader.read();

// TransformStream
const transform = new TransformStream({
  transform(chunk, controller) {
    controller.enqueue(chunk.toUpperCase());
  }
});

// Conversion between Node.js and Web Streams
const { Readable } = require('stream');
const webStream = Readable.toWeb(nodeReadable);
const nodeStream = Readable.fromWeb(webReadable);</code></pre>`
                },
                {
                    q: "How do you handle CSV files using streams?",
                    a: `<p>Process large CSV files efficiently using streams and a transform:</p>
<pre><code>const { Transform } = require('stream');
const fs = require('fs');
const { pipeline } = require('stream/promises');

class CSVParser extends Transform {
  constructor() {
    super({ objectMode: true });
    this.headers = null;
    this.buffer = '';
  }

  _transform(chunk, encoding, callback) {
    this.buffer += chunk.toString();
    const lines = this.buffer.split('\\n');
    this.buffer = lines.pop(); // keep incomplete line

    for (const line of lines) {
      if (!this.headers) {
        this.headers = line.split(',');
      } else {
        const values = line.split(',');
        const obj = {};
        this.headers.forEach((h, i) => obj[h.trim()] = values[i]?.trim());
        this.push(obj);
      }
    }
    callback();
  }
}

const parser = new CSVParser();
fs.createReadStream('data.csv')
  .pipe(parser)
  .on('data', (row) => console.log(row));</code></pre>`
                }
            ]
        },

        /* ====================================================
           5. Database & Authentication
           ==================================================== */
        {
            id: "database-auth",
            title: "Database & Authentication",
            icon: "bi-database",
            questions: [
                {
                    q: "How do you connect to MongoDB using Mongoose?",
                    a: `<p>Mongoose is an ODM (Object Data Modeling) library for MongoDB and Node.js:</p>
<pre><code>const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('Connection error:', err);
    process.exit(1);
  }
}

// Define a schema and model
const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, unique: true },
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model('User', userSchema);</code></pre>`
                },
                {
                    q: "What is the difference between SQL and NoSQL databases?",
                    a: `<table class="table table-sm">
<tr><th>Feature</th><th>SQL</th><th>NoSQL</th></tr>
<tr><td>Structure</td><td>Tables with rows and columns</td><td>Documents, key-value, graph, column</td></tr>
<tr><td>Schema</td><td>Fixed, predefined</td><td>Dynamic, flexible</td></tr>
<tr><td>Scaling</td><td>Vertical (scale up)</td><td>Horizontal (scale out)</td></tr>
<tr><td>Relationships</td><td>Joins</td><td>Embedded/Referenced documents</td></tr>
<tr><td>ACID</td><td>Full support</td><td>Varies by database</td></tr>
<tr><td>Examples</td><td>MySQL, PostgreSQL, SQLite</td><td>MongoDB, Redis, Cassandra</td></tr>
</table>
<p>Choose SQL for complex queries and strong consistency. Choose NoSQL for flexibility and horizontal scaling.</p>`
                },
                {
                    q: "How do you perform CRUD operations with Mongoose?",
                    a: `<pre><code>// CREATE
const user = await User.create({ name: 'John', email: 'john@test.com' });
// or
const user = new User({ name: 'John' });
await user.save();

// READ
const users = await User.find();                    // all
const user = await User.findById(id);               // by ID
const user = await User.findOne({ email: 'x@y.com' }); // one match
const users = await User.find({ age: { $gte: 18 } }); // with query

// UPDATE
await User.findByIdAndUpdate(id, { name: 'Jane' }, { new: true });
await User.updateMany({ active: false }, { archived: true });

// DELETE
await User.findByIdAndDelete(id);
await User.deleteMany({ archived: true });</code></pre>`
                },
                {
                    q: "What is JWT authentication and how do you implement it?",
                    a: `<p>JWT (JSON Web Token) is a stateless authentication mechanism. It consists of three parts: Header, Payload, and Signature.</p>
<pre><code>const jwt = require('jsonwebtoken');

// Generate token
const generateToken = (user) => {
  return jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: '24h' }
  );
};

// Verify middleware
const auth = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
};

app.get('/protected', auth, (req, res) => {
  res.json({ user: req.user });
});</code></pre>`
                },
                {
                    q: "How do you hash passwords in Node.js?",
                    a: `<p>Use <code>bcrypt</code> to securely hash passwords:</p>
<pre><code>const bcrypt = require('bcrypt');

// Hash a password
const hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
};

// Compare password with hash
const comparePassword = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};

// Usage in signup
app.post('/signup', async (req, res) => {
  const hashedPassword = await hashPassword(req.body.password);
  const user = await User.create({
    email: req.body.email,
    password: hashedPassword
  });
});

// Usage in login
app.post('/login', async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  const valid = await comparePassword(req.body.password, user.password);
  if (!valid) return res.status(401).json({ error: 'Invalid credentials' });
  const token = generateToken(user);
  res.json({ token });
});</code></pre>`
                },
                {
                    q: "How do you connect to PostgreSQL in Node.js?",
                    a: `<p>Use the <code>pg</code> (node-postgres) library:</p>
<pre><code>const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
  user: 'admin',
  password: process.env.DB_PASSWORD,
  max: 20 // connection pool size
});

// Query
const result = await pool.query('SELECT * FROM users WHERE id = $1', [userId]);
console.log(result.rows);

// Transaction
const client = await pool.connect();
try {
  await client.query('BEGIN');
  await client.query('INSERT INTO orders VALUES($1, $2)', [id, total]);
  await client.query('UPDATE inventory SET qty = qty - $1', [qty]);
  await client.query('COMMIT');
} catch (err) {
  await client.query('ROLLBACK');
  throw err;
} finally {
  client.release();
}</code></pre>`
                },
                {
                    q: "What is an ORM and what ORMs are popular in Node.js?",
                    a: `<p>An ORM (Object-Relational Mapping) maps database tables to JavaScript objects, providing a higher-level API for database operations:</p>
<ul>
<li><strong>Prisma</strong>: Modern ORM with type safety, migrations, and a visual editor.</li>
<li><strong>Sequelize</strong>: Mature ORM supporting PostgreSQL, MySQL, SQLite, MSSQL.</li>
<li><strong>TypeORM</strong>: TypeScript-first ORM with Active Record and Data Mapper patterns.</li>
<li><strong>Drizzle</strong>: Lightweight, type-safe ORM with SQL-like API.</li>
<li><strong>Mongoose</strong>: ODM for MongoDB (technically not an ORM, but serves a similar role).</li>
</ul>
<pre><code>// Prisma example
const users = await prisma.user.findMany({
  where: { age: { gte: 18 } },
  include: { posts: true }
});</code></pre>`
                },
                {
                    q: "What are database indexes and why are they important?",
                    a: `<p>Indexes are data structures that improve the speed of read operations on a database. Without indexes, the database scans every document/row.</p>
<pre><code>// MongoDB (Mongoose)
userSchema.index({ email: 1 });           // single field
userSchema.index({ firstName: 1, lastName: 1 }); // compound
userSchema.index({ email: 1 }, { unique: true }); // unique

// SQL
// CREATE INDEX idx_email ON users(email);
// CREATE UNIQUE INDEX idx_email ON users(email);</code></pre>
<p>Trade-offs: Indexes speed up reads but slow down writes (inserts/updates) and consume storage space. Only index fields you frequently query on.</p>`
                },
                {
                    q: "What is connection pooling?",
                    a: `<p>Connection pooling maintains a cache of database connections that can be reused, avoiding the overhead of creating a new connection for each request:</p>
<pre><code>// pg (PostgreSQL)
const pool = new Pool({
  max: 20,           // max connections
  idleTimeoutMillis: 30000,
  connectionTimeoutMillis: 2000
});

// Mongoose (MongoDB)
mongoose.connect(uri, {
  maxPoolSize: 10,
  minPoolSize: 2,
  serverSelectionTimeoutMS: 5000
});</code></pre>
<p>Benefits: Reduced latency, better resource management, ability to handle more concurrent requests.</p>`
                },
                {
                    q: "How do you implement role-based access control (RBAC)?",
                    a: `<p>RBAC restricts access based on user roles:</p>
<pre><code>// Middleware to check roles
const authorize = (...roles) => {
  return (req, res, next) => {
    if (!req.user) {
      return res.status(401).json({ error: 'Not authenticated' });
    }
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ error: 'Insufficient permissions' });
    }
    next();
  };
};

// Usage
app.get('/admin/users', auth, authorize('admin'), getUsers);
app.put('/posts/:id', auth, authorize('admin', 'editor'), updatePost);
app.get('/profile', auth, authorize('admin', 'editor', 'user'), getProfile);</code></pre>`
                },
                {
                    q: "What is OAuth 2.0 and how does it work?",
                    a: `<p>OAuth 2.0 is an authorization framework that lets third-party apps access user data without sharing passwords. The flow:</p>
<ol>
<li>User clicks "Login with Google" on your app.</li>
<li>Your app redirects to Google's authorization server.</li>
<li>User grants permission.</li>
<li>Google redirects back with an <strong>authorization code</strong>.</li>
<li>Your server exchanges the code for an <strong>access token</strong>.</li>
<li>Your server uses the token to access user data from Google's API.</li>
</ol>
<p>In Node.js, use <code>passport.js</code> with strategies like <code>passport-google-oauth20</code>.</p>`
                },
                {
                    q: "What are database migrations?",
                    a: `<p>Migrations are version-controlled changes to the database schema. They allow teams to evolve the schema safely:</p>
<pre><code>// Using Knex.js
exports.up = function(knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id');
    table.string('name').notNullable();
    table.string('email').unique();
    table.timestamps(true, true);
  });
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};

// Commands
// npx knex migrate:make create_users
// npx knex migrate:latest
// npx knex migrate:rollback</code></pre>`
                },
                {
                    q: "How do you implement session-based authentication?",
                    a: `<p>Sessions store user data server-side, identified by a session ID in a cookie:</p>
<pre><code>const session = require('express-session');
const MongoStore = require('connect-mongo');

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
  store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict'
  }
}));

// Login
app.post('/login', async (req, res) => {
  const user = await authenticate(req.body);
  req.session.userId = user._id;
  res.json({ message: 'Logged in' });
});

// Auth check middleware
const isAuth = (req, res, next) => {
  if (!req.session.userId) return res.status(401).end();
  next();
};</code></pre>`
                },
                {
                    q: "What is Redis and how is it used with Node.js?",
                    a: `<p>Redis is an in-memory data store used for caching, session management, and pub/sub messaging:</p>
<pre><code>const Redis = require('ioredis');
const redis = new Redis({ host: 'localhost', port: 6379 });

// Basic operations
await redis.set('key', 'value');
await redis.set('key', 'value', 'EX', 3600); // expire in 1 hour
const val = await redis.get('key');

// Caching middleware
const cache = (duration) => async (req, res, next) => {
  const key = 'cache:' + req.originalUrl;
  const cached = await redis.get(key);
  if (cached) return res.json(JSON.parse(cached));

  res.sendResponse = res.json;
  res.json = (body) => {
    redis.set(key, JSON.stringify(body), 'EX', duration);
    res.sendResponse(body);
  };
  next();
};

app.get('/api/products', cache(300), getProducts);</code></pre>`
                },
                {
                    q: "What is data validation at the database level?",
                    a: `<p>Database-level validation ensures data integrity regardless of how data is inserted:</p>
<pre><code>// Mongoose schema validation
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    minlength: [2, 'Name must be at least 2 characters'],
    maxlength: [50, 'Name cannot exceed 50 characters'],
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    match: [/\\S+@\\S+\\.\\S+/, 'Invalid email']
  },
  age: {
    type: Number,
    min: [0, 'Age cannot be negative'],
    max: [150, 'Age seems unrealistic']
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'editor'],
    default: 'user'
  }
});</code></pre>`
                },
                {
                    q: "How do you implement refresh tokens?",
                    a: `<p>Refresh tokens allow obtaining new access tokens without re-authentication:</p>
<pre><code>// Login — issue both tokens
app.post('/login', async (req, res) => {
  const user = await authenticate(req.body);

  const accessToken = jwt.sign({ id: user._id }, ACCESS_SECRET, { expiresIn: '15m' });
  const refreshToken = jwt.sign({ id: user._id }, REFRESH_SECRET, { expiresIn: '7d' });

  // Store refresh token in DB
  await Token.create({ token: refreshToken, userId: user._id });

  res.json({ accessToken, refreshToken });
});

// Refresh endpoint
app.post('/refresh', async (req, res) => {
  const { refreshToken } = req.body;
  const stored = await Token.findOne({ token: refreshToken });
  if (!stored) return res.status(403).json({ error: 'Invalid token' });

  const decoded = jwt.verify(refreshToken, REFRESH_SECRET);
  const newAccessToken = jwt.sign({ id: decoded.id }, ACCESS_SECRET, { expiresIn: '15m' });

  res.json({ accessToken: newAccessToken });
});</code></pre>`
                },
                {
                    q: "What is database seeding?",
                    a: `<p>Seeding populates the database with initial or test data:</p>
<pre><code>// seed.js
const mongoose = require('mongoose');
const User = require('./models/User');

const users = [
  { name: 'Admin', email: 'admin@test.com', role: 'admin' },
  { name: 'John', email: 'john@test.com', role: 'user' },
  { name: 'Jane', email: 'jane@test.com', role: 'editor' }
];

async function seed() {
  await mongoose.connect(process.env.MONGO_URI);
  await User.deleteMany({});
  await User.insertMany(users);
  console.log('Database seeded!');
  process.exit();
}

seed();

// package.json
// "scripts": { "seed": "node seed.js" }</code></pre>`
                },
                {
                    q: "How do you handle database transactions in MongoDB?",
                    a: `<p>MongoDB supports multi-document transactions (requires replica set):</p>
<pre><code>const session = await mongoose.startSession();
session.startTransaction();

try {
  const order = await Order.create([{
    userId, items, total
  }], { session });

  await Product.updateMany(
    { _id: { $in: itemIds } },
    { $inc: { stock: -1 } },
    { session }
  );

  await User.findByIdAndUpdate(userId,
    { $push: { orders: order[0]._id } },
    { session }
  );

  await session.commitTransaction();
  res.json({ order: order[0] });
} catch (err) {
  await session.abortTransaction();
  res.status(500).json({ error: 'Transaction failed' });
} finally {
  session.endSession();
}</code></pre>`
                },
                {
                    q: "What is SQL injection and how do you prevent it in Node.js?",
                    a: `<p>SQL injection occurs when untrusted input is inserted directly into SQL queries. Prevention:</p>
<pre><code>// VULNERABLE — never do this!
const query = "SELECT * FROM users WHERE id = " + req.params.id;

// SAFE — parameterized queries
// pg (PostgreSQL)
const result = await pool.query(
  'SELECT * FROM users WHERE id = $1',
  [req.params.id]
);

// mysql2
const [rows] = await connection.execute(
  'SELECT * FROM users WHERE email = ?',
  [req.body.email]
);

// Sequelize ORM (auto-parameterized)
const user = await User.findOne({
  where: { email: req.body.email }
});

// Prisma (auto-parameterized)
const user = await prisma.user.findUnique({
  where: { email: req.body.email }
});</code></pre>`
                }
            ]
        },

        /* ====================================================
           6. Testing & Debugging
           ==================================================== */
        {
            id: "testing-debugging",
            title: "Testing & Debugging",
            icon: "bi-bug",
            questions: [
                {
                    q: "What testing frameworks are popular in Node.js?",
                    a: `<ul>
<li><strong>Jest</strong>: All-in-one testing framework by Facebook with built-in assertions, mocking, and code coverage.</li>
<li><strong>Mocha</strong>: Flexible test runner; usually paired with Chai (assertions) and Sinon (mocking).</li>
<li><strong>Vitest</strong>: Fast, Vite-powered test runner with Jest-compatible API.</li>
<li><strong>Node.js built-in test runner</strong>: Available since Node.js 18 via <code>node:test</code> module.</li>
<li><strong>Supertest</strong>: HTTP assertion library for testing Express routes.</li>
</ul>
<pre><code>// Jest example
describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});</code></pre>`
                },
                {
                    q: "How do you write unit tests for Express routes?",
                    a: `<p>Use <code>supertest</code> to test Express routes without starting the server:</p>
<pre><code>const request = require('supertest');
const app = require('../app');

describe('GET /api/users', () => {
  it('should return all users', async () => {
    const res = await request(app)
      .get('/api/users')
      .expect('Content-Type', /json/)
      .expect(200);

    expect(res.body).toBeInstanceOf(Array);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should return 404 for invalid user', async () => {
    await request(app)
      .get('/api/users/invalid-id')
      .expect(404);
  });
});</code></pre>`
                },
                {
                    q: "What is mocking and how do you use it in tests?",
                    a: `<p>Mocking replaces real implementations with controlled substitutes for testing:</p>
<pre><code>// Jest mocking
jest.mock('../services/userService');
const userService = require('../services/userService');

test('should get user by ID', async () => {
  const mockUser = { id: 1, name: 'John' };
  userService.findById.mockResolvedValue(mockUser);

  const result = await userService.findById(1);
  expect(result).toEqual(mockUser);
  expect(userService.findById).toHaveBeenCalledWith(1);
});

// Spy on existing methods
const spy = jest.spyOn(console, 'log');
myFunction();
expect(spy).toHaveBeenCalledWith('expected output');
spy.mockRestore();</code></pre>`
                },
                {
                    q: "How do you debug a Node.js application?",
                    a: `<p>Multiple debugging approaches:</p>
<pre><code>// 1. console methods
console.log(variable);
console.dir(obj, { depth: null });
console.table(array);
console.time('label'); // ... console.timeEnd('label');

// 2. Built-in debugger
node --inspect app.js         // Chrome DevTools
node --inspect-brk app.js     // Break on first line

// 3. VS Code debugging — launch.json
{
  "type": "node",
  "request": "launch",
  "name": "Debug App",
  "program": "\${workspaceFolder}/app.js"
}

// 4. debugger statement
function problematicFn() {
  debugger; // Execution pauses here
  // ... code
}</code></pre>`
                },
                {
                    q: "What is code coverage and how do you measure it?",
                    a: `<p>Code coverage measures what percentage of your code is executed during tests:</p>
<pre><code>// Jest (built-in)
npx jest --coverage

// NYC/Istanbul with Mocha
npx nyc mocha

// Coverage types:
// - Statement: % of statements executed
// - Branch: % of if/else branches taken
// - Function: % of functions called
// - Line: % of lines executed

// package.json
{
  "scripts": {
    "test": "jest",
    "test:coverage": "jest --coverage --coverageThreshold='{\"global\":{\"branches\":80,\"functions\":80,\"lines\":80}}'"
  }
}</code></pre>`
                },
                {
                    q: "What is integration testing vs unit testing?",
                    a: `<p><strong>Unit testing</strong>: Tests individual functions/modules in isolation with mocked dependencies. Fast, focused, many tests.</p>
<p><strong>Integration testing</strong>: Tests how multiple modules work together (e.g., API route → service → database). Slower but catches interaction bugs.</p>
<pre><code>// Unit test (mocked DB)
test('createUser calls save', async () => {
  const mockSave = jest.fn().mockResolvedValue({ id: 1 });
  User.prototype.save = mockSave;
  await createUser({ name: 'John' });
  expect(mockSave).toHaveBeenCalled();
});

// Integration test (real DB)
test('POST /api/users creates a user', async () => {
  const res = await request(app)
    .post('/api/users')
    .send({ name: 'John', email: 'john@test.com' });
  expect(res.status).toBe(201);
  const user = await User.findOne({ email: 'john@test.com' });
  expect(user).toBeTruthy();
});</code></pre>`
                },
                {
                    q: "How do you handle memory leaks in Node.js?",
                    a: `<p>Common causes and detection:</p>
<ul>
<li><strong>Global variables</strong> that grow unbounded.</li>
<li><strong>Forgotten event listeners</strong> — not removing listeners.</li>
<li><strong>Closures</strong> holding references to large objects.</li>
<li><strong>Caches</strong> without eviction policies.</li>
</ul>
<pre><code>// Detection
console.log(process.memoryUsage());
// { rss, heapTotal, heapUsed, external, arrayBuffers }

// Using --inspect with Chrome DevTools
node --inspect app.js
// Take heap snapshots and compare

// Programmatic monitoring
setInterval(() => {
  const used = process.memoryUsage().heapUsed / 1024 / 1024;
  console.log(\`Memory: \${Math.round(used * 100) / 100} MB\`);
}, 30000);

// Prevention: Remove listeners
emitter.removeListener('event', handler);
emitter.removeAllListeners('event');</code></pre>`
                },
                {
                    q: "What is load testing and what tools can you use?",
                    a: `<p>Load testing simulates multiple concurrent users to measure performance under stress:</p>
<ul>
<li><strong>Artillery</strong>: YAML-based load testing tool for Node.js.</li>
<li><strong>k6</strong>: Modern load testing tool with JavaScript scripting.</li>
<li><strong>autocannon</strong>: Fast HTTP benchmarking tool for Node.js.</li>
<li><strong>Apache JMeter</strong>: Enterprise-grade testing tool.</li>
</ul>
<pre><code>// autocannon
npx autocannon -c 100 -d 30 http://localhost:3000/api/users
// -c: connections, -d: duration in seconds

// Artillery config.yml
config:
  target: "http://localhost:3000"
  phases:
    - duration: 60
      arrivalRate: 10
scenarios:
  - flow:
      - get:
          url: "/api/users"</code></pre>`
                },
                {
                    q: "How do you test asynchronous code?",
                    a: `<pre><code>// Using async/await (recommended)
test('fetches user data', async () => {
  const data = await fetchUser(1);
  expect(data.name).toBe('John');
});

// Using done callback
test('callback test', (done) => {
  fetchUser(1, (err, data) => {
    expect(data.name).toBe('John');
    done();
  });
});

// Testing rejected promises
test('throws on invalid ID', async () => {
  await expect(fetchUser(-1)).rejects.toThrow('Invalid ID');
});

// Testing setTimeout
jest.useFakeTimers();
test('delayed function', () => {
  const callback = jest.fn();
  delayedCall(callback, 1000);
  jest.advanceTimersByTime(1000);
  expect(callback).toHaveBeenCalled();
});</code></pre>`
                },
                {
                    q: "What is test-driven development (TDD)?",
                    a: `<p>TDD is a development approach where tests are written <strong>before</strong> the implementation code. The cycle:</p>
<ol>
<li><strong>Red</strong>: Write a failing test that defines the expected behavior.</li>
<li><strong>Green</strong>: Write the minimum code to make the test pass.</li>
<li><strong>Refactor</strong>: Improve code quality while keeping tests passing.</li>
</ol>
<pre><code>// Step 1: Red — write failing test
test('calculates total with tax', () => {
  expect(calculateTotal(100, 0.1)).toBe(110);
});

// Step 2: Green — implement
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}

// Step 3: Refactor (if needed)
// Repeat the cycle for next feature</code></pre>
<p>Benefits: Better design, high test coverage, fewer bugs, documentation through tests.</p>`
                },
                {
                    q: "How do you use environment-specific configurations for tests?",
                    a: `<p>Separate configurations ensure tests don't affect production data:</p>
<pre><code>// .env.test
NODE_ENV=test
DATABASE_URL=mongodb://localhost/myapp_test
JWT_SECRET=test-secret

// jest.config.js
module.exports = {
  setupFiles: ['dotenv/config'],
  testEnvironment: 'node'
};

// setup.js — global test setup
beforeAll(async () => {
  await mongoose.connect(process.env.DATABASE_URL);
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.disconnect();
});

afterEach(async () => {
  const collections = mongoose.connection.collections;
  for (const key in collections) {
    await collections[key].deleteMany({});
  }
});</code></pre>`
                },
                {
                    q: "What is end-to-end (E2E) testing?",
                    a: `<p>E2E testing validates the entire application flow from the user's perspective:</p>
<ul>
<li><strong>Cypress</strong>: Browser-based E2E testing with great DX.</li>
<li><strong>Playwright</strong>: Multi-browser E2E testing by Microsoft.</li>
<li><strong>Puppeteer</strong>: Headless Chrome automation by Google.</li>
</ul>
<pre><code>// Playwright example
const { test, expect } = require('@playwright/test');

test('user can login and see dashboard', async ({ page }) => {
  await page.goto('http://localhost:3000/login');
  await page.fill('#email', 'user@test.com');
  await page.fill('#password', 'password123');
  await page.click('button[type="submit"]');

  await expect(page).toHaveURL('/dashboard');
  await expect(page.locator('h1')).toHaveText('Welcome');
});</code></pre>`
                },
                {
                    q: "How do you set up continuous integration (CI) for Node.js?",
                    a: `<p>CI automatically runs tests when code is pushed. Example with GitHub Actions:</p>
<pre><code># .github/workflows/ci.yml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - uses: actions/checkout@v4
      - name: Use Node.js
        uses: actions/setup-node@v4
        with:
          node-version: \${{ matrix.node-version }}
          cache: 'npm'
      - run: npm ci
      - run: npm test
      - run: npm run lint</code></pre>`
                },
                {
                    q: "What are snapshot tests?",
                    a: `<p>Snapshot tests capture the output of a function or component and compare it against a stored snapshot:</p>
<pre><code>// Jest snapshot test
test('user object matches snapshot', () => {
  const user = createUser('John', 'john@test.com');
  expect(user).toMatchSnapshot();
});

// First run: creates __snapshots__ file
// Subsequent runs: compares output with stored snapshot

// Inline snapshots
test('generates greeting', () => {
  expect(greet('John')).toMatchInlineSnapshot(
    \`"Hello, John! Welcome aboard."\`
  );
});

// Update snapshots when intentional changes are made
// npx jest --updateSnapshot</code></pre>`
                },
                {
                    q: "How do you profile Node.js application performance?",
                    a: `<p>Multiple profiling tools and techniques:</p>
<pre><code>// 1. Built-in profiler
node --prof app.js
// Process the output:
node --prof-process isolate-*.log > processed.txt

// 2. Chrome DevTools
node --inspect app.js
// Open chrome://inspect → Profiler tab

// 3. clinic.js (comprehensive)
npx clinic doctor -- node app.js
npx clinic flame -- node app.js   // flame graphs
npx clinic bubbleprof -- node app.js // async profiling

// 4. console.time
console.time('db-query');
await db.query(sql);
console.timeEnd('db-query'); // db-query: 42.123ms

// 5. Performance hooks
const { performance, PerformanceObserver } = require('perf_hooks');
performance.mark('start');
// ... operation
performance.mark('end');
performance.measure('operation', 'start', 'end');</code></pre>`
                },
                {
                    q: "What are test doubles (stubs, spies, fakes, mocks)?",
                    a: `<ul>
<li><strong>Spy</strong>: Wraps a real function, recording calls without changing behavior.</li>
<li><strong>Stub</strong>: Replaces a function with a controlled implementation.</li>
<li><strong>Mock</strong>: Like a stub with built-in expectations about how it should be called.</li>
<li><strong>Fake</strong>: A working implementation that takes shortcuts (e.g., in-memory database).</li>
</ul>
<pre><code>// Jest examples
// Spy
const spy = jest.spyOn(service, 'findUser');

// Stub
jest.spyOn(service, 'findUser').mockReturnValue({ name: 'John' });

// Mock
const mockFn = jest.fn().mockImplementation((id) => ({ id, name: 'John' }));

// Fake
class FakeUserRepository {
  constructor() { this.users = []; }
  save(user) { this.users.push(user); return user; }
  find(id) { return this.users.find(u => u.id === id); }
}</code></pre>`
                },
                {
                    q: "How do you test WebSocket connections?",
                    a: `<p>Test WebSocket servers using client libraries in your test suite:</p>
<pre><code>const { Server } = require('socket.io');
const { io: Client } = require('socket.io-client');

describe('WebSocket', () => {
  let server, clientSocket, serverSocket;

  beforeAll((done) => {
    const httpServer = require('http').createServer();
    server = new Server(httpServer);
    httpServer.listen(() => {
      const port = httpServer.address().port;
      clientSocket = Client(\`http://localhost:\${port}\`);
      server.on('connection', (socket) => {
        serverSocket = socket;
      });
      clientSocket.on('connect', done);
    });
  });

  afterAll(() => {
    server.close();
    clientSocket.close();
  });

  test('should receive message', (done) => {
    clientSocket.on('greeting', (msg) => {
      expect(msg).toBe('Hello');
      done();
    });
    serverSocket.emit('greeting', 'Hello');
  });
});</code></pre>`
                }
            ]
        },

        /* ====================================================
           7. Security & Performance
           ==================================================== */
        {
            id: "security-performance",
            title: "Security & Performance",
            icon: "bi-shield-lock",
            questions: [
                {
                    q: "What are the common security threats in Node.js applications?",
                    a: `<ul>
<li><strong>Injection attacks</strong>: SQL injection, NoSQL injection, command injection.</li>
<li><strong>XSS (Cross-Site Scripting)</strong>: Injecting malicious scripts.</li>
<li><strong>CSRF (Cross-Site Request Forgery)</strong>: Unauthorized actions on behalf of users.</li>
<li><strong>Broken authentication</strong>: Weak passwords, session hijacking.</li>
<li><strong>Sensitive data exposure</strong>: Leaking secrets, unencrypted data.</li>
<li><strong>Prototype pollution</strong>: Modifying Object.prototype.</li>
<li><strong>ReDoS</strong>: Regular expression denial of service.</li>
<li><strong>Directory traversal</strong>: Accessing files outside intended directories.</li>
<li><strong>Dependency vulnerabilities</strong>: Outdated packages with known CVEs.</li>
</ul>`
                },
                {
                    q: "How do you prevent XSS attacks in Node.js?",
                    a: `<p>Cross-Site Scripting prevention strategies:</p>
<pre><code>// 1. Escape output (use template engines that auto-escape)
// EJS: &lt;%= userInput %&gt; (escaped)
// EJS: &lt;%- userInput %&gt; (raw — dangerous!)

// 2. Use helmet.js for security headers
const helmet = require('helmet');
app.use(helmet());

// 3. Sanitize input
const sanitizeHtml = require('sanitize-html');
const clean = sanitizeHtml(userInput, {
  allowedTags: ['b', 'i', 'em', 'strong'],
  allowedAttributes: {}
});

// 4. Content Security Policy
app.use(helmet.contentSecurityPolicy({
  directives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'"],
    styleSrc: ["'self'", "'unsafe-inline'"]
  }
}));

// 5. Set HttpOnly cookies
res.cookie('token', value, { httpOnly: true, secure: true });</code></pre>`
                },
                {
                    q: "How do you secure environment variables and secrets?",
                    a: `<ul>
<li>Never commit <code>.env</code> files — add to <code>.gitignore</code>.</li>
<li>Use <code>dotenv</code> for local development.</li>
<li>Use cloud secret managers in production (AWS Secrets Manager, Azure Key Vault, HashiCorp Vault).</li>
<li>Set environment variables in CI/CD pipelines.</li>
<li>Rotate secrets regularly.</li>
</ul>
<pre><code>// .gitignore
.env
.env.local
.env.production

// .env.example (commit this — no real values)
DATABASE_URL=your_database_url_here
JWT_SECRET=your_jwt_secret_here
API_KEY=your_api_key_here

// config.js — validate required env vars at startup
const required = ['DATABASE_URL', 'JWT_SECRET'];
for (const key of required) {
  if (!process.env[key]) {
    throw new Error(\`Missing env var: \${key}\`);
  }
}</code></pre>`
                },
                {
                    q: "What is HTTPS and how do you set it up in Node.js?",
                    a: `<p>HTTPS encrypts communication between client and server using TLS/SSL:</p>
<pre><code>const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('private-key.pem'),
  cert: fs.readFileSync('certificate.pem'),
  ca: fs.readFileSync('ca-certificate.pem') // optional
};

const server = https.createServer(options, app);
server.listen(443);

// Redirect HTTP to HTTPS
const http = require('http');
http.createServer((req, res) => {
  res.writeHead(301, { Location: 'https://' + req.headers.host + req.url });
  res.end();
}).listen(80);

// In production, use a reverse proxy (nginx) or
// platforms like Heroku/Vercel that handle TLS.</code></pre>`
                },
                {
                    q: "How do you prevent NoSQL injection?",
                    a: `<p>NoSQL injection exploits query operators in MongoDB:</p>
<pre><code>// VULNERABLE
app.post('/login', async (req, res) => {
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password // { "$ne": "" } bypasses auth!
  });
});

// SAFE — validate and sanitize input
const mongoSanitize = require('express-mongo-sanitize');
app.use(mongoSanitize()); // strips $ and . from req.body/params/query

// SAFE — explicit type checking
app.post('/login', async (req, res) => {
  if (typeof req.body.email !== 'string' ||
      typeof req.body.password !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  // ... proceed with authentication
});</code></pre>`
                },
                {
                    q: "What is CSRF and how do you prevent it?",
                    a: `<p>CSRF tricks authenticated users into making unintended requests. Prevention:</p>
<pre><code>const csrf = require('csurf');
const cookieParser = require('cookie-parser');

app.use(cookieParser());
app.use(csrf({ cookie: true }));

// Send token to client
app.get('/form', (req, res) => {
  res.render('form', { csrfToken: req.csrfToken() });
});

// Template includes token
// &lt;input type="hidden" name="_csrf" value="&lt;%= csrfToken %&gt;"&gt;

// Other prevention methods:
// 1. SameSite cookies
res.cookie('session', value, { sameSite: 'strict' });

// 2. Check Origin/Referer headers
// 3. Use custom headers (X-Requested-With)
// 4. Double-submit cookie pattern</code></pre>`
                },
                {
                    q: "How do you implement caching for better performance?",
                    a: `<p>Caching strategies for Node.js applications:</p>
<pre><code>// 1. In-memory cache (simple)
const NodeCache = require('node-cache');
const cache = new NodeCache({ stdTTL: 300 }); // 5 min TTL

app.get('/api/data', (req, res) => {
  const cached = cache.get('data');
  if (cached) return res.json(cached);

  const data = await expensiveQuery();
  cache.set('data', data);
  res.json(data);
});

// 2. Redis cache (distributed)
// (see Redis question above)

// 3. HTTP caching headers
app.get('/api/static-data', (req, res) => {
  res.set('Cache-Control', 'public, max-age=3600'); // 1 hour
  res.json(data);
});

// 4. CDN caching for static assets
app.use(express.static('public', { maxAge: '7d' }));</code></pre>`
                },
                {
                    q: "How do you handle process management in production?",
                    a: `<p>Use process managers to keep Node.js apps running reliably:</p>
<pre><code>// PM2 — most popular process manager
npm install -g pm2

pm2 start app.js               // start
pm2 start app.js -i max        // cluster mode (all CPUs)
pm2 list                        // list processes
pm2 logs                        // view logs
pm2 monit                       // monitor dashboard
pm2 restart app                 // restart
pm2 stop app                    // stop
pm2 delete app                  // remove
pm2 startup                     // auto-start on boot
pm2 save                        // save process list

// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'my-api',
    script: 'app.js',
    instances: 'max',
    exec_mode: 'cluster',
    env_production: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
};</code></pre>`
                },
                {
                    q: "What is prototype pollution and how do you prevent it?",
                    a: `<p>Prototype pollution occurs when an attacker modifies <code>Object.prototype</code>, affecting all objects:</p>
<pre><code>// Vulnerable merge function
function merge(target, source) {
  for (const key in source) {
    target[key] = source[key]; // dangerous!
  }
}

// Attack
merge({}, JSON.parse('{"__proto__":{"isAdmin":true}}'));
console.log({}.isAdmin); // true — all objects affected!

// Prevention:
// 1. Use Object.create(null) for lookup objects
const map = Object.create(null);

// 2. Validate keys
const dangerous = ['__proto__', 'constructor', 'prototype'];
if (dangerous.includes(key)) return;

// 3. Use Map instead of plain objects
const safeMap = new Map();

// 4. Object.freeze(Object.prototype)
// 5. Use libraries that handle this (lodash 4.17.21+)</code></pre>`
                },
                {
                    q: "How do you optimize Node.js application performance?",
                    a: `<ul>
<li><strong>Use async operations</strong> — never block the event loop.</li>
<li><strong>Cluster mode</strong> — utilize all CPU cores.</li>
<li><strong>Caching</strong> — Redis or in-memory for frequent queries.</li>
<li><strong>Database indexing</strong> — index frequently queried fields.</li>
<li><strong>Connection pooling</strong> — reuse database connections.</li>
<li><strong>Compression</strong> — gzip responses with <code>compression</code> middleware.</li>
<li><strong>Stream large data</strong> — don't load entire files into memory.</li>
<li><strong>Use reverse proxy</strong> — nginx for static files, load balancing, SSL.</li>
<li><strong>Minimize dependencies</strong> — audit and remove unused packages.</li>
<li><strong>Use HTTP/2</strong> — multiplexed connections, server push.</li>
<li><strong>Worker threads</strong> — offload CPU-intensive tasks.</li>
</ul>`
                },
                {
                    q: "What is the --max-old-space-size flag?",
                    a: `<p>This V8 flag sets the maximum size of the old generation heap (in MB). By default, V8 limits heap size to ~1.5GB on 64-bit systems:</p>
<pre><code>// Increase to 4GB
node --max-old-space-size=4096 app.js

// Set via environment variable
NODE_OPTIONS="--max-old-space-size=4096" node app.js

// In package.json
{
  "scripts": {
    "start": "node --max-old-space-size=4096 server.js"
  }
}</code></pre>
<p>Increase this when processing large datasets or if you get "JavaScript heap out of memory" errors. But also investigate memory leaks if the default size isn't sufficient.</p>`
                },
                {
                    q: "How do you implement API versioning?",
                    a: `<p>API versioning ensures backward compatibility when making breaking changes:</p>
<pre><code>// 1. URL path versioning (most common)
app.use('/api/v1/users', usersV1Router);
app.use('/api/v2/users', usersV2Router);

// 2. Header versioning
app.use('/api/users', (req, res, next) => {
  const version = req.headers['api-version'] || '1';
  req.apiVersion = version;
  next();
});

// 3. Query parameter
// GET /api/users?version=2

// Organize routes
// routes/v1/users.js
// routes/v2/users.js
const v1 = require('./routes/v1');
const v2 = require('./routes/v2');
app.use('/api/v1', v1);
app.use('/api/v2', v2);</code></pre>`
                },
                {
                    q: "How do you handle graceful shutdown in Node.js?",
                    a: `<p>Graceful shutdown completes in-flight requests before exiting:</p>
<pre><code>const server = app.listen(3000);

function gracefulShutdown(signal) {
  console.log(\`Received \${signal}. Shutting down gracefully...\`);

  server.close(() => {
    console.log('HTTP server closed');

    // Close database connections
    mongoose.connection.close(false, () => {
      console.log('MongoDB connection closed');
      process.exit(0);
    });
  });

  // Force close after timeout
  setTimeout(() => {
    console.error('Forced shutdown');
    process.exit(1);
  }, 30000);
}

process.on('SIGTERM', () => gracefulShutdown('SIGTERM'));
process.on('SIGINT', () => gracefulShutdown('SIGINT'));</code></pre>`
                },
                {
                    q: "What are HTTP security headers and which ones should you set?",
                    a: `<p>Security headers instruct browsers on how to handle your content:</p>
<pre><code>// Using helmet.js (sets all recommended headers)
app.use(helmet());

// Key headers:
// Strict-Transport-Security: forces HTTPS
// X-Content-Type-Options: nosniff — prevents MIME type sniffing
// X-Frame-Options: DENY — prevents clickjacking
// Content-Security-Policy — controls resource loading
// X-XSS-Protection — legacy XSS filter
// Referrer-Policy — controls referrer information
// Permissions-Policy — controls browser features

// Manual setting
app.use((req, res, next) => {
  res.setHeader('X-Content-Type-Options', 'nosniff');
  res.setHeader('X-Frame-Options', 'DENY');
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
  next();
});</code></pre>`
                },
                {
                    q: "How do you prevent denial-of-service (DoS) attacks?",
                    a: `<ul>
<li><strong>Rate limiting</strong>: Restrict requests per IP/user.</li>
<li><strong>Request size limits</strong>: <code>express.json({ limit: '10kb' })</code>.</li>
<li><strong>Timeout requests</strong>: <code>server.timeout = 30000</code>.</li>
<li><strong>Use a reverse proxy</strong>: nginx with rate limiting and connection limits.</li>
<li><strong>Validate input</strong>: Reject oversized or malformed payloads early.</li>
<li><strong>Use a CDN/WAF</strong>: Cloudflare, AWS WAF.</li>
<li><strong>Avoid ReDoS</strong>: Test regular expressions for catastrophic backtracking.</li>
</ul>
<pre><code>// Slow loris protection via timeout
server.headersTimeout = 60000;
server.requestTimeout = 30000;

// Payload size limit
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ limit: '10kb', extended: true }));</code></pre>`
                },
                {
                    q: "What is input validation and sanitization?",
                    a: `<p>Validation ensures data meets requirements. Sanitization cleans/transforms data:</p>
<pre><code>const { body, validationResult } = require('express-validator');

app.post('/register',
  body('email').isEmail().normalizeEmail(),
  body('password').isLength({ min: 8 })
    .matches(/[A-Z]/).withMessage('Must have uppercase')
    .matches(/[0-9]/).withMessage('Must have number'),
  body('name').trim().escape().isLength({ min: 2, max: 50 }),
  body('age').optional().isInt({ min: 0, max: 150 }),

  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    // proceed with sanitized data
  }
);</code></pre>`
                },
                {
                    q: "How do you audit and manage dependency vulnerabilities?",
                    a: `<pre><code>// Built-in npm audit
npm audit                    // check for vulnerabilities
npm audit fix                // auto-fix compatible updates
npm audit fix --force        // fix with breaking changes (careful!)

// Lock file
npm ci                       // install from lock file (CI use)
package-lock.json            // commit this file

// Check outdated packages
npm outdated

// Tools
npx snyk test                // Snyk vulnerability scanner
npx npm-check-updates        // find newer versions
npx depcheck                 // find unused dependencies

// package.json — pin versions for stability
"dependencies": {
  "express": "4.18.2"        // exact version
  // vs "express": "^4.18.2" // range (default)
}

// Automate with GitHub Dependabot or Renovate</code></pre>`
                }
            ]
        }
    ]
};
