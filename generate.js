/**
 * InterviewPrep — Site Generator
 * Run: node generate.js
 * Creates all pages, topics, data files, sitemap
 */
const fs = require('fs');
const path = require('path');

const ROOT = __dirname;
const SITE = 'https://coddingquestionhub.com';

// ─── Category & Topic Definitions ────────────────────────────
const CATEGORIES = {
    angular: {
        label: 'Angular',
        icon: 'bi-bootstrap',
        color: '#dd0031',
        iconBg: 'fi-angular',
        ctaClass: 'cta-angular',
        metaHub: 'Top Angular interview questions and answers for 2026. Master components, RxJS, routing, forms, signals, and 20 essential Angular topics with code examples.',
        topics: [
            { id:'components', title:'Components', icon:'bi-box', desc:'Top 15 Angular Components interview questions with code examples. Master component architecture, lifecycle, templates and best practices.' },
            { id:'data-binding', title:'Data Binding', icon:'bi-link-45deg', desc:'Angular Data Binding interview questions covering interpolation, property binding, event binding & two-way binding with examples.' },
            { id:'directives', title:'Directives', icon:'bi-signpost-split', desc:'Angular Directives interview questions on structural, attribute & custom directives with practical code examples.' },
            { id:'pipes', title:'Pipes', icon:'bi-funnel', desc:'Angular Pipes interview questions and answers. Learn built-in pipes, custom pipes, pure vs impure pipes with examples.' },
            { id:'services-dependency-injection', title:'Services & Dependency Injection', icon:'bi-gear', desc:'Angular Services and DI interview questions. Master dependency injection, providers, and service patterns.' },
            { id:'routing', title:'Routing', icon:'bi-signpost-2', desc:'Angular Routing interview questions covering lazy loading, route guards, resolvers, child routes and navigation.' },
            { id:'template-driven-forms', title:'Template-Driven Forms', icon:'bi-ui-checks', desc:'Angular Template-Driven Forms interview questions on ngModel, validation, form submission and best practices.' },
            { id:'reactive-forms', title:'Reactive Forms', icon:'bi-input-cursor-text', desc:'Angular Reactive Forms interview questions on FormControl, FormGroup, FormArray, validators and dynamic forms.' },
            { id:'http-client', title:'HTTP Client', icon:'bi-cloud-arrow-down', desc:'Angular HttpClient interview questions covering GET, POST, interceptors, error handling and API integration.' },
            { id:'observables-rxjs', title:'Observables & RxJS', icon:'bi-arrow-repeat', desc:'RxJS and Observables interview questions for Angular. Learn operators, subjects, subscriptions and reactive patterns.' },
            { id:'lifecycle-hooks', title:'Lifecycle Hooks', icon:'bi-recycle', desc:'Angular Lifecycle Hooks interview questions on ngOnInit, ngOnChanges, ngOnDestroy and all lifecycle events.' },
            { id:'modules', title:'Modules', icon:'bi-grid-3x3-gap', desc:'Angular NgModules interview questions covering feature modules, shared modules, lazy loading and module architecture.' },
            { id:'change-detection', title:'Change Detection', icon:'bi-eye', desc:'Angular Change Detection interview questions. Master Default vs OnPush strategies, zones, and optimization.' },
            { id:'guards-resolvers', title:'Guards & Resolvers', icon:'bi-shield-lock', desc:'Angular Route Guards and Resolvers interview questions on CanActivate, CanDeactivate, auth guards and data resolvers.' },
            { id:'interceptors', title:'Interceptors', icon:'bi-funnel-fill', desc:'Angular HTTP Interceptors interview questions on authentication tokens, logging, error handling and request modification.' },
            { id:'decorators', title:'Decorators', icon:'bi-at', desc:'Angular Decorators interview questions covering @Component, @Injectable, @Input, @Output, @ViewChild and custom decorators.' },
            { id:'standalone-components', title:'Standalone Components', icon:'bi-box-seam', desc:'Angular Standalone Components interview questions. Learn module-free components, imports, and migration strategies.' },
            { id:'signals', title:'Signals', icon:'bi-broadcast', desc:'Angular Signals interview questions on signal(), computed(), effect() and reactive state management in Angular 17+.' },
            { id:'testing', title:'Testing', icon:'bi-bug', desc:'Angular Testing interview questions on Jasmine, Karma, TestBed, component testing, service testing and e2e testing.' },
            { id:'performance-optimization', title:'Performance', icon:'bi-speedometer2', desc:'Angular Performance Optimization interview questions on lazy loading, OnPush, trackBy, AOT, tree shaking.' }
        ]
    },
    react: {
        label: 'React',
        icon: 'bi-infinity',
        color: '#61dafb',
        iconBg: 'fi-react',
        ctaClass: 'cta-react',
        metaHub: 'Top React interview questions and answers for 2026. Master hooks, state management, virtual DOM, and 20 essential React topics with code examples.',
        topics: [
            { id:'components-jsx', title:'Components & JSX', icon:'bi-box', desc:'React Components and JSX interview questions. Learn functional components, class components, JSX syntax and best practices.' },
            { id:'props-state', title:'Props & State', icon:'bi-diagram-3', desc:'React Props and State interview questions. Master data flow, state management, immutability and component communication.' },
            { id:'hooks-usestate-useeffect', title:'Hooks — useState & useEffect', icon:'bi-hook', desc:'React Hooks interview questions on useState, useEffect, dependency arrays, cleanup functions and hook rules.' },
            { id:'context-api', title:'Context API', icon:'bi-share', desc:'React Context API interview questions covering createContext, useContext, providers, and avoiding prop drilling.' },
            { id:'react-router', title:'React Router', icon:'bi-signpost-2', desc:'React Router interview questions on routing, navigation, dynamic routes, nested routes and route protection.' },
            { id:'forms-controlled-components', title:'Forms & Controlled Components', icon:'bi-input-cursor-text', desc:'React Forms interview questions covering controlled vs uncontrolled components, form handling and validation.' },
            { id:'redux-state-management', title:'Redux & State Management', icon:'bi-diagram-2', desc:'Redux interview questions covering store, actions, reducers, middleware, Redux Toolkit and state management patterns.' },
            { id:'usereducer-usememo', title:'useReducer & useMemo', icon:'bi-lightning', desc:'React useReducer and useMemo interview questions on complex state, memoization, useCallback and optimization.' },
            { id:'custom-hooks', title:'Custom Hooks', icon:'bi-puzzle', desc:'React Custom Hooks interview questions on creating reusable hooks, hook patterns, and shared logic extraction.' },
            { id:'higher-order-components', title:'Higher-Order Components', icon:'bi-layers', desc:'React HOC interview questions on component composition, code reuse patterns, and wrapper components.' },
            { id:'render-props', title:'Render Props & Patterns', icon:'bi-braces', desc:'React Render Props interview questions covering render prop pattern, component composition, and design patterns.' },
            { id:'error-boundaries', title:'Error Boundaries', icon:'bi-exclamation-triangle', desc:'React Error Boundaries interview questions on error handling, componentDidCatch, fallback UI and error recovery.' },
            { id:'refs-useref', title:'Refs & useRef', icon:'bi-cursor', desc:'React Refs and useRef interview questions on DOM access, persisting values, forwarding refs and callback refs.' },
            { id:'portals', title:'Portals', icon:'bi-door-open', desc:'React Portals interview questions covering createPortal, modal dialogs, tooltips and rendering outside parent DOM.' },
            { id:'suspense-lazy-loading', title:'Suspense & Lazy Loading', icon:'bi-hourglass-split', desc:'React Suspense and lazy loading interview questions on code splitting, React.lazy, dynamic imports and loading states.' },
            { id:'virtual-dom', title:'Virtual DOM & Reconciliation', icon:'bi-tree', desc:'React Virtual DOM interview questions on reconciliation algorithm, diffing, keys, fiber architecture and rendering.' },
            { id:'event-handling', title:'Event Handling', icon:'bi-mouse', desc:'React Event Handling interview questions on synthetic events, event delegation, handling patterns and event system.' },
            { id:'performance-optimization', title:'Performance Optimization', icon:'bi-speedometer2', desc:'React Performance interview questions on React.memo, useMemo, useCallback, code splitting and profiling.' },
            { id:'testing', title:'Testing', icon:'bi-bug', desc:'React Testing interview questions on Jest, React Testing Library, component testing, hooks testing and mocking.' },
            { id:'server-components-ssr', title:'Server Components & SSR', icon:'bi-server', desc:'React Server Components and SSR interview questions on Next.js, hydration, streaming and server rendering.' }
        ]
    },
    node: {
        label: 'Node.js',
        icon: 'bi-hdd-network',
        color: '#339933',
        iconBg: 'fi-node',
        ctaClass: 'cta-node',
        metaHub: 'Top Node.js interview questions and answers for 2026. Master event loop, Express, streams, authentication, and 20 essential Node.js topics.',
        topics: [
            { id:'node-fundamentals', title:'Node.js Fundamentals', icon:'bi-cpu', desc:'Node.js Fundamentals interview questions on V8 engine, event-driven architecture, global objects and core concepts.' },
            { id:'event-loop', title:'Event Loop', icon:'bi-arrow-repeat', desc:'Node.js Event Loop interview questions covering phases, microtasks, macrotasks, nextTick and async behavior.' },
            { id:'modules-system', title:'Modules System', icon:'bi-grid-3x3-gap', desc:'Node.js Modules interview questions on CommonJS, ES Modules, require vs import, module caching and resolution.' },
            { id:'express-basics', title:'Express.js Basics', icon:'bi-hdd-rack', desc:'Express.js interview questions on routing, middleware, request/response, template engines and app structure.' },
            { id:'middleware', title:'Middleware', icon:'bi-funnel', desc:'Express Middleware interview questions on custom middleware, error handling, third-party middleware and middleware chain.' },
            { id:'rest-api-design', title:'REST API Design', icon:'bi-diagram-3', desc:'REST API design interview questions on HTTP methods, status codes, versioning, pagination and API best practices.' },
            { id:'error-handling', title:'Error Handling', icon:'bi-exclamation-triangle', desc:'Node.js Error Handling interview questions on try-catch, error-first callbacks, unhandled rejections and error types.' },
            { id:'file-system', title:'File System', icon:'bi-folder', desc:'Node.js File System interview questions on fs module, reading, writing, streams, path module and file operations.' },
            { id:'streams-buffers', title:'Streams & Buffers', icon:'bi-water', desc:'Node.js Streams and Buffers interview questions on readable, writable, transform streams, piping and backpressure.' },
            { id:'authentication-jwt', title:'Authentication & JWT', icon:'bi-shield-lock', desc:'Node.js Authentication interview questions on JWT, sessions, OAuth, bcrypt, passport.js and security.' },
            { id:'database-integration', title:'Database Integration', icon:'bi-database', desc:'Node.js Database interview questions on MongoDB, PostgreSQL, Mongoose, Sequelize, connection pooling and ORM.' },
            { id:'websockets', title:'WebSockets', icon:'bi-chat-dots', desc:'Node.js WebSocket interview questions on Socket.io, real-time communication, rooms, namespaces and events.' },
            { id:'cluster-worker-threads', title:'Cluster & Worker Threads', icon:'bi-cpu-fill', desc:'Node.js Cluster and Worker Threads interview questions on multi-processing, thread pool and scaling.' },
            { id:'npm-package-management', title:'NPM & Package Management', icon:'bi-box-seam', desc:'NPM interview questions on package.json, versioning, scripts, publishing, npx and dependency management.' },
            { id:'security', title:'Security', icon:'bi-lock', desc:'Node.js Security interview questions on XSS, CSRF, SQL injection, helmet, rate limiting and security headers.' },
            { id:'caching', title:'Caching', icon:'bi-lightning', desc:'Node.js Caching interview questions on Redis, in-memory cache, HTTP caching, CDN and cache invalidation strategies.' },
            { id:'microservices', title:'Microservices', icon:'bi-diagram-2', desc:'Node.js Microservices interview questions on architecture, message queues, API gateway, service discovery and patterns.' },
            { id:'testing', title:'Testing', icon:'bi-bug', desc:'Node.js Testing interview questions on Jest, Mocha, Chai, Supertest, unit testing, integration testing and TDD.' },
            { id:'logging-monitoring', title:'Logging & Monitoring', icon:'bi-journal-text', desc:'Node.js Logging interview questions on Winston, Morgan, log levels, monitoring, health checks and debugging.' },
            { id:'async-patterns', title:'Async Patterns', icon:'bi-arrow-left-right', desc:'Node.js Async Patterns interview questions on callbacks, promises, async/await, parallel execution and error handling.' }
        ]
    },
    javascript: {
        label: 'JavaScript',
        icon: 'bi-filetype-js',
        color: '#f7df1e',
        iconBg: 'fi-javascript',
        ctaClass: 'cta-javascript',
        metaHub: 'Top JavaScript interview questions and answers for 2026. Master closures, promises, prototypes, ES6+, and 20 essential JavaScript topics.',
        topics: [
            { id:'variables-data-types', title:'Variables & Data Types', icon:'bi-braces', desc:'JavaScript Variables and Data Types interview questions on var, let, const, primitives, objects and type checking.' },
            { id:'functions-scope', title:'Functions & Scope', icon:'bi-code-square', desc:'JavaScript Functions and Scope interview questions on declarations, expressions, arrow functions, scope chain and IIFE.' },
            { id:'closures', title:'Closures', icon:'bi-lock-fill', desc:'JavaScript Closures interview questions on lexical scope, closure patterns, memory, practical use cases and examples.' },
            { id:'prototypes-inheritance', title:'Prototypes & Inheritance', icon:'bi-diagram-3', desc:'JavaScript Prototype interview questions on prototype chain, inheritance, Object.create, classes and patterns.' },
            { id:'promises', title:'Promises', icon:'bi-hourglass-split', desc:'JavaScript Promises interview questions on Promise API, chaining, error handling, Promise.all, race and allSettled.' },
            { id:'async-await', title:'Async/Await', icon:'bi-lightning', desc:'JavaScript Async/Await interview questions on async functions, error handling, parallel execution and patterns.' },
            { id:'event-loop', title:'Event Loop', icon:'bi-arrow-repeat', desc:'JavaScript Event Loop interview questions on call stack, task queue, microtasks, macrotasks and execution order.' },
            { id:'es6-features', title:'ES6+ Features', icon:'bi-stars', desc:'ES6+ Features interview questions on destructuring, spread, template literals, modules, symbols and iterators.' },
            { id:'array-methods', title:'Array Methods', icon:'bi-list-ol', desc:'JavaScript Array Methods interview questions on map, filter, reduce, find, sort, flat and array manipulation.' },
            { id:'object-methods', title:'Object Methods', icon:'bi-braces-asterisk', desc:'JavaScript Object Methods interview questions on keys, values, entries, assign, freeze, seal and property descriptors.' },
            { id:'dom-manipulation', title:'DOM Manipulation', icon:'bi-window', desc:'DOM Manipulation interview questions on selectors, events, event delegation, DOM traversal and manipulation methods.' },
            { id:'error-handling', title:'Error Handling', icon:'bi-exclamation-triangle', desc:'JavaScript Error Handling interview questions on try-catch, custom errors, error types and error propagation.' },
            { id:'regular-expressions', title:'Regular Expressions', icon:'bi-regex', desc:'JavaScript RegExp interview questions on patterns, flags, methods, groups, lookaheads and common regex patterns.' },
            { id:'design-patterns', title:'Design Patterns', icon:'bi-grid', desc:'JavaScript Design Patterns interview questions on singleton, observer, factory, module, strategy and MVC patterns.' },
            { id:'memory-management', title:'Memory Management', icon:'bi-memory', desc:'JavaScript Memory Management interview questions on garbage collection, memory leaks, WeakRef and optimization.' },
            { id:'modules-js', title:'Modules', icon:'bi-box-seam', desc:'JavaScript Modules interview questions on ES Modules, CommonJS, import/export, dynamic imports and module patterns.' },
            { id:'this-keyword', title:'this Keyword', icon:'bi-cursor-text', desc:'JavaScript this keyword interview questions on binding rules, call, apply, bind, arrow functions and context.' },
            { id:'hoisting-scope', title:'Hoisting & TDZ', icon:'bi-arrow-up-circle', desc:'JavaScript Hoisting interview questions on variable hoisting, function hoisting, temporal dead zone and let/const.' },
            { id:'spread-rest-destructuring', title:'Spread, Rest & Destructuring', icon:'bi-three-dots', desc:'JavaScript spread/rest operator and destructuring interview questions with array and object examples.' },
            { id:'type-coercion', title:'Type Coercion & Equality', icon:'bi-arrow-left-right', desc:'JavaScript Type Coercion interview questions on == vs ===, implicit conversion, truthy/falsy and comparison rules.' },
            { id:'iterators-generators', title:'Iterators & Generators', icon:'bi-arrow-repeat', desc:'JavaScript Iterators and Generators interview questions on Symbol.iterator, yield, for...of, custom iterables and lazy evaluation.' },
            { id:'proxy-reflect', title:'Proxy & Reflect', icon:'bi-shield-check', desc:'JavaScript Proxy and Reflect interview questions on traps, handler methods, meta-programming, validation and observation patterns.' },
            { id:'web-apis-storage', title:'Web APIs & Storage', icon:'bi-hdd', desc:'JavaScript Web APIs and Storage interview questions on localStorage, sessionStorage, IndexedDB, cookies and Fetch API.' },
            { id:'sets-maps', title:'Sets & Maps', icon:'bi-collection', desc:'JavaScript Set and Map interview questions on WeakSet, WeakMap, unique values, key-value pairs and iteration.' },
            { id:'date-timers', title:'Date & Timers', icon:'bi-clock', desc:'JavaScript Date and Timers interview questions on setTimeout, setInterval, requestAnimationFrame, Date object and Intl API.' }
        ]
    },
    dsa: {
        label: 'DSA',
        icon: 'bi-diagram-3-fill',
        color: '#8b5cf6',
        iconBg: 'fi-dsa',
        ctaClass: 'cta-dsa',
        metaHub: 'Top Data Structures and Algorithms interview questions for 2026. Master arrays, trees, graphs, dynamic programming, and 20 essential DSA topics.',
        topics: [
            { id:'arrays', title:'Arrays', icon:'bi-list-ol', desc:'Array interview questions and problems with solutions. Master array manipulation, searching, sorting and optimization.' },
            { id:'strings', title:'Strings', icon:'bi-fonts', desc:'String interview questions and problems. Master string manipulation, pattern matching, anagrams and common algorithms.' },
            { id:'linked-lists', title:'Linked Lists', icon:'bi-link', desc:'Linked List interview questions on singly, doubly, circular lists. Reversal, cycle detection and merge operations.' },
            { id:'stacks', title:'Stacks', icon:'bi-stack', desc:'Stack interview questions on implementation, applications, balanced parentheses, min stack and stack-based algorithms.' },
            { id:'queues', title:'Queues', icon:'bi-collection', desc:'Queue interview questions on implementation, circular queue, priority queue, deque and BFS applications.' },
            { id:'hash-tables', title:'Hash Tables', icon:'bi-hash', desc:'Hash Table interview questions on hashing, collision handling, hash maps, hash sets and practical applications.' },
            { id:'trees', title:'Trees', icon:'bi-tree-fill', desc:'Tree interview questions on binary trees, traversals, height, diameter, LCA and tree construction problems.' },
            { id:'binary-search-trees', title:'Binary Search Trees', icon:'bi-tree', desc:'BST interview questions on insertion, deletion, search, validation, balancing and BST-specific algorithms.' },
            { id:'heaps', title:'Heaps', icon:'bi-triangle', desc:'Heap interview questions on min heap, max heap, heapify, priority queue, top-K problems and heap sort.' },
            { id:'graphs', title:'Graphs', icon:'bi-share-fill', desc:'Graph interview questions on BFS, DFS, shortest path, cycle detection, topological sort and graph representations.' },
            { id:'sorting-algorithms', title:'Sorting Algorithms', icon:'bi-sort-down', desc:'Sorting algorithm interview questions on quicksort, mergesort, heapsort, counting sort and time complexity analysis.' },
            { id:'searching-algorithms', title:'Searching Algorithms', icon:'bi-search', desc:'Searching algorithm interview questions on binary search, linear search, search variations and optimization.' },
            { id:'dynamic-programming', title:'Dynamic Programming', icon:'bi-table', desc:'Dynamic Programming interview questions on memoization, tabulation, classic DP problems and optimization techniques.' },
            { id:'recursion', title:'Recursion', icon:'bi-recycle', desc:'Recursion interview questions on base cases, recursive thinking, tail recursion, backtracking and tree recursion.' },
            { id:'greedy-algorithms', title:'Greedy Algorithms', icon:'bi-trophy', desc:'Greedy algorithm interview questions on activity selection, huffman coding, fractional knapsack and greedy strategy.' },
            { id:'backtracking', title:'Backtracking', icon:'bi-arrow-return-left', desc:'Backtracking interview questions on N-Queens, sudoku solver, permutations, combinations and constraint satisfaction.' },
            { id:'two-pointers', title:'Two Pointers', icon:'bi-arrows-expand', desc:'Two Pointers technique interview questions on sorted arrays, pair sum, container problems and sliding window.' },
            { id:'sliding-window', title:'Sliding Window', icon:'bi-window-stack', desc:'Sliding Window interview questions on fixed and variable window, substring problems and window optimization.' },
            { id:'bit-manipulation', title:'Bit Manipulation', icon:'bi-toggles', desc:'Bit Manipulation interview questions on bitwise operators, bit tricks, counting bits and XOR applications.' },
            { id:'time-space-complexity', title:'Time & Space Complexity', icon:'bi-speedometer2', desc:'Big O notation interview questions on time complexity, space complexity, amortized analysis and optimization.' }
        ]
    },
    logical: {
        label: 'Logical Reasoning',
        icon: 'bi-lightbulb',
        color: '#f59e0b',
        iconBg: 'fi-logical',
        ctaClass: 'cta-logical',
        metaHub: 'Top Logical Reasoning and coding puzzle interview questions for 2026. Master pattern printing, number series, brain teasers and problem solving.',
        topics: [
            { id:'pattern-printing', title:'Pattern Printing', icon:'bi-grid-3x3', desc:'Pattern printing interview questions on star patterns, number patterns, pyramid patterns and matrix patterns.' },
            { id:'number-series', title:'Number Series & Math', icon:'bi-123', desc:'Number series and mathematical interview questions on Fibonacci, prime numbers, factorial and number theory.' },
            { id:'array-logic', title:'Array Logic Problems', icon:'bi-list-ol', desc:'Array logic interview questions on rotation, rearrangement, missing numbers and array manipulation puzzles.' },
            { id:'string-logic', title:'String Logic Problems', icon:'bi-fonts', desc:'String logic interview questions on palindromes, anagrams, string reversal and character frequency.' },
            { id:'mathematical-puzzles', title:'Mathematical Puzzles', icon:'bi-calculator', desc:'Mathematical puzzle interview questions on probability, number theory, arithmetic puzzles and logic problems.' },
            { id:'matrix-problems', title:'Matrix Problems', icon:'bi-grid', desc:'Matrix problem interview questions on rotation, spiral traversal, path finding and matrix manipulation.' },
            { id:'recursion-puzzles', title:'Recursion Puzzles', icon:'bi-recycle', desc:'Recursion puzzle interview questions on Tower of Hanoi, power set, permutations and recursive thinking.' },
            { id:'sorting-searching-logic', title:'Sorting & Searching Logic', icon:'bi-sort-alpha-down', desc:'Sorting and searching logic interview questions on custom sorting, search algorithms and optimization puzzles.' },
            { id:'output-prediction', title:'Output Prediction', icon:'bi-terminal', desc:'JavaScript output prediction interview questions on hoisting, closures, async behavior and tricky JS concepts.' },
            { id:'debugging-challenges', title:'Debugging Challenges', icon:'bi-bug', desc:'Debugging challenge interview questions on finding bugs, fixing code, understanding error messages and debugging.' },
            { id:'algorithm-design', title:'Algorithm Design', icon:'bi-gear', desc:'Algorithm design interview questions on problem decomposition, algorithm selection, optimization and implementation.' },
            { id:'problem-solving', title:'Problem Solving Strategies', icon:'bi-lightbulb-fill', desc:'Problem solving strategy interview questions on approaching problems, breaking down complexity and communication.' },
            { id:'bitwise-operations', title:'Bitwise Operations', icon:'bi-toggles', desc:'Bitwise operation interview questions on XOR tricks, bit counting, power of two and binary manipulation.' },
            { id:'linked-list-puzzles', title:'Linked List Puzzles', icon:'bi-link-45deg', desc:'Linked list puzzle interview questions on reversal, middle element, loop detection and merge problems.' },
            { id:'stack-queue-puzzles', title:'Stack & Queue Puzzles', icon:'bi-stack', desc:'Stack and queue puzzle interview questions on bracket matching, next greater element and queue using stacks.' },
            { id:'tree-graph-puzzles', title:'Tree & Graph Puzzles', icon:'bi-tree-fill', desc:'Tree and graph puzzle interview questions on traversal, path finding, BST validation and graph coloring.' },
            { id:'dp-puzzles', title:'DP Puzzles', icon:'bi-table', desc:'Dynamic programming puzzle interview questions on coin change, longest subsequence, knapsack and grid problems.' },
            { id:'optimization-puzzles', title:'Optimization Puzzles', icon:'bi-speedometer2', desc:'Optimization puzzle interview questions on water trapping, stock trading, meeting rooms and greedy solutions.' },
            { id:'brain-teasers', title:'Brain Teasers', icon:'bi-puzzle', desc:'Brain teaser interview questions on logic puzzles, estimation problems, lateral thinking and creative solutions.' },
            { id:'coding-challenges', title:'Coding Challenges', icon:'bi-code-slash', desc:'Coding challenge interview questions on fizzbuzz, palindrome, fibonacci, string manipulation and classic problems.' }
        ]
    }
};

// ─── HTML Templates ──────────────────────────────────────────

function navbarHtml(basePath) {
    var items = Object.entries(CATEGORIES).map(function([key, cat]) {
        return `<li><a class="dropdown-item fw-500" href="${basePath}pages/${key}.html">` +
            `<i class="bi ${cat.icon} me-2"></i>${cat.label}</a></li>`;
    }).join('\n                            ');

    return `<nav class="navbar navbar-expand-lg sticky-top" id="mainNavbar">
        <div class="container-fluid px-3 px-lg-4">
            <a class="navbar-brand fw-bold d-flex align-items-center gap-2" href="${basePath}index.html">
                <span class="brand-icon"><i class="bi bi-braces-asterisk"></i></span>
                <span>Interview<span class="brand-accent">Prep</span></span>
            </a>
            <button class="navbar-toggler border-0 shadow-none" type="button"
                    data-bs-toggle="collapse" data-bs-target="#navbarContent">
                <i class="bi bi-list fs-3 text-white"></i>
            </button>
            <div class="collapse navbar-collapse" id="navbarContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-3">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle fw-500" href="#" role="button"
                           data-bs-toggle="dropdown">
                            <i class="bi bi-layers me-1"></i> Choose Category
                        </a>
                        <ul class="dropdown-menu">
                            ${items}
                        </ul>
                    </li>
                </ul>
                <div class="search-wrap">
                    <i class="bi bi-search search-icon"></i>
                    <input class="form-control search-input" type="search"
                           placeholder="Search questions..." id="searchInput">
                </div>
            </div>
        </div>
    </nav>`;
}

function headHtml(title, description, basePath) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="${description}">
    <meta name="keywords" content="interview questions, coding interview, web developer interview, ${title}">
    <meta name="author" content="InterviewPrep">
    <meta name="robots" content="index, follow">
    <meta property="og:type" content="website">
    <meta property="og:title" content="${title} | InterviewPrep">
    <meta property="og:description" content="${description}">
    <title>${title} | InterviewPrep 2026</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Fira+Code:wght@400;500&display=swap" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" rel="stylesheet">
    <link rel="stylesheet" href="${basePath}css/styles.css">
    <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8957020141286926" crossorigin="anonymous"></script>
</head>`;
}

// ─── Generate Hub Pages ──────────────────────────────────────

function generateHubPage(catKey, cat) {
    var basePath = '../';
    var topicCards = cat.topics.map(function(t, i) {
        return `        <a href="../topics/${catKey}/${t.id}.html" class="topic-card">
            <div class="topic-card-icon ${cat.iconBg}"><i class="bi ${t.icon}"></i></div>
            <div class="topic-card-body">
                <h3>${t.title}</h3>
                <p>15 Interview Questions</p>
            </div>
            <span class="badge rounded-pill bg-secondary">15</span>
        </a>`;
    }).join('\n');

    return `${headHtml(cat.label + ' Interview Questions', cat.metaHub, basePath)}
<body>
    ${navbarHtml(basePath)}
    <div class="content-area" style="max-width:1100px;margin:0 auto;">
        <div class="breadcrumb-nav">
            <a href="../index.html">Home</a><span class="sep">/</span>
            <span class="current">${cat.label}</span>
        </div>
        <div class="hub-header">
            <h1><i class="bi ${cat.icon} me-2"></i>${cat.label} Interview Questions</h1>
            <p>${cat.metaHub}</p>
        </div>
        <div class="topic-grid">
${topicCards}
        </div>
        <div class="seo-block">
            <h2><i class="bi bi-info-circle me-2"></i>About ${cat.label} Interview Preparation</h2>
            <p>This section covers ${cat.topics.length} essential ${cat.label} topics with 15 carefully curated interview questions each. Each topic includes detailed explanations and practical code examples to help you prepare for your next interview. Click on any topic above to start practicing.</p>
        </div>
        <footer class="app-footer">
            <p>&copy; 2026 InterviewPrep &mdash; Your Complete Interview Preparation Platform</p>
        </footer>
    </div>
    <button class="btn-totop" id="backToTop"><i class="bi bi-chevron-up"></i></button>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script>
        var btt=document.getElementById('backToTop');
        window.addEventListener('scroll',function(){btt.classList.toggle('show',window.scrollY>400)});
        btt.addEventListener('click',function(){window.scrollTo({top:0,behavior:'smooth'})});
    </script>
</body>
</html>`;
}

// ─── Generate Topic Pages ────────────────────────────────────

function generateTopicPage(catKey, cat, topicIndex) {
    var topic = cat.topics[topicIndex];
    var basePath = '../../';
    var title = topic.title + ' — ' + cat.label + ' Interview Questions';

    // Sidebar links
    var sidebarLinks = cat.topics.map(function(t, i) {
        var active = i === topicIndex ? ' active' : '';
        return `                    <li><a class="nav-link${active}" href="${t.id}.html">` +
            `<i class="bi ${t.icon}"></i><span>${t.title}</span></a></li>`;
    }).join('\n');

    // Next/Prev
    var navBtns = '';
    if (topicIndex > 0) {
        var prev = cat.topics[topicIndex - 1];
        navBtns += `            <a class="topic-nav-btn prev" href="${prev.id}.html">
                <span class="label"><i class="bi bi-arrow-left me-1"></i> Previous</span>
                <span class="title">${prev.title}</span>
            </a>\n`;
    }
    if (topicIndex < cat.topics.length - 1) {
        var next = cat.topics[topicIndex + 1];
        navBtns += `            <a class="topic-nav-btn next" href="${next.id}.html">
                <span class="label">Next <i class="bi bi-arrow-right ms-1"></i></span>
                <span class="title">${next.title}</span>
            </a>`;
    }

    return `${headHtml(title, topic.desc, basePath)}
<body class="theme-${catKey}">
    ${navbarHtml(basePath)}
    <div class="app-wrapper">
        <aside class="sidebar" id="sidebar">
            <div class="sidebar-head">
                <h6><i class="bi bi-journal-code me-2"></i>${cat.label} Topics</h6>
            </div>
            <nav>
                <ul class="sidebar-links" id="topicList">
${sidebarLinks}
                </ul>
            </nav>
        </aside>
        <div class="sidebar-backdrop" id="sidebarBackdrop"></div>
        <div class="content-area">
            <div class="mobile-bar d-lg-none">
                <button class="btn btn-sm btn-glass" id="sidebarToggle">
                    <i class="bi bi-layout-sidebar-inset me-1"></i>Topics
                </button>
                <span class="badge rounded-pill bg-secondary">${cat.label}</span>
            </div>
            <div class="breadcrumb-nav" id="breadcrumb">
                <a href="../../index.html">Home</a><span class="sep">/</span>
                <a href="../../pages/${catKey}.html">${cat.label}</a><span class="sep">/</span>
                <span class="current">${topic.title}</span>
            </div>
            <div class="qs-header">
                <h1 class="qs-title" id="topicTitle">${topic.title}</h1>
                <span class="badge qs-badge" id="questionCount">15 Questions</span>
            </div>
            <div class="accordion" id="questionsAccordion"></div>
            <div class="topic-nav" id="topicNav">
${navBtns}
            </div>
            <footer class="app-footer">
                <p>&copy; 2026 InterviewPrep &mdash; ${cat.label} Interview Questions</p>
            </footer>
        </div>
    </div>
    <button class="btn-totop" id="backToTop"><i class="bi bi-chevron-up"></i></button>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>
    <script src="../../js/data/${catKey}-data.js"></script>
    <script>
    (function(){
        var DATA=window.__CATEGORY_${catKey}__;
        if(!DATA)return;
        var topic=null;
        for(var i=0;i<DATA.topics.length;i++){if(DATA.topics[i].id==='${topic.id}'){topic=DATA.topics[i];break;}}
        if(!topic)return;
        var acc=document.getElementById('questionsAccordion');
        var html='';
        topic.questions.forEach(function(q,i){
            var uid='q'+i,exp=i===0;
            var qText=(q.q||q.question||'');
            var aText=(q.a||q.answer||'');
            html+='<div class="accordion-item">'+
                '<h2 class="accordion-header"><button class="accordion-button'+(exp?'':' collapsed')+'" type="button" '+
                'data-bs-toggle="collapse" data-bs-target="#c_'+uid+'"><span class="question-number">'+(i+1)+'</span>'+
                qText.replace(/</g,'&lt;').replace(/>/g,'&gt;')+'</button></h2>'+
                '<div id="c_'+uid+'" class="accordion-collapse collapse'+(exp?' show':'')+'" data-bs-parent="#questionsAccordion">'+
                '<div class="accordion-body">'+aText+'</div></div></div>';
        });
        acc.innerHTML=html;
        document.getElementById('questionCount').textContent=topic.questions.length+' Questions';
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
        var si=document.getElementById('searchInput');
        if(si){var t=null;si.addEventListener('input',function(){clearTimeout(t);var v=this.value.trim().toLowerCase();
        if(v.length<2){acc.querySelectorAll('.accordion-item').forEach(function(el){el.style.display='';});
        document.getElementById('questionCount').textContent=topic.questions.length+' Questions';return;}
        t=setTimeout(function(){var c=0;acc.querySelectorAll('.accordion-item').forEach(function(el){
        var m=el.textContent.toLowerCase().indexOf(v)!==-1;el.style.display=m?'':'none';if(m)c++;});
        document.getElementById('questionCount').textContent=c+' Questions';},200);});}
    })();
    </script>
</body>
</html>`;
}

// ─── Generate Sitemap ────────────────────────────────────────

function generateSitemap() {
    var urls = [`    <url><loc>${SITE}/</loc><priority>1.0</priority></url>`];
    Object.entries(CATEGORIES).forEach(function([key, cat]) {
        urls.push(`    <url><loc>${SITE}/pages/${key}.html</loc><priority>0.8</priority></url>`);
        cat.topics.forEach(function(t) {
            urls.push(`    <url><loc>${SITE}/topics/${key}/${t.id}.html</loc><priority>0.6</priority></url>`);
        });
    });
    return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>`;
}

// ─── Execute ─────────────────────────────────────────────────

function mkdirp(dir) {
    fs.mkdirSync(dir, { recursive: true });
}

console.log('Generating InterviewPrep site...\n');

// Hub pages
mkdirp(path.join(ROOT, 'pages'));
Object.entries(CATEGORIES).forEach(function([key, cat]) {
    var file = path.join(ROOT, 'pages', key + '.html');
    fs.writeFileSync(file, generateHubPage(key, cat), 'utf8');
    console.log('  Created: pages/' + key + '.html');
});

// Topic pages
Object.entries(CATEGORIES).forEach(function([key, cat]) {
    var dir = path.join(ROOT, 'topics', key);
    mkdirp(dir);
    cat.topics.forEach(function(topic, idx) {
        var file = path.join(dir, topic.id + '.html');
        fs.writeFileSync(file, generateTopicPage(key, cat, idx), 'utf8');
    });
    console.log('  Created: topics/' + key + '/ (' + cat.topics.length + ' files)');
});

// Sitemap
fs.writeFileSync(path.join(ROOT, 'sitemap.xml'), generateSitemap(), 'utf8');
console.log('  Created: sitemap.xml');

// Robots.txt
fs.writeFileSync(path.join(ROOT, 'robots.txt'), `User-agent: *\nAllow: /\nSitemap: ${SITE}/sitemap.xml\n`, 'utf8');
console.log('  Created: robots.txt');

console.log('\nDone! Generated ' +
    Object.values(CATEGORIES).reduce(function(s, c) { return s + c.topics.length; }, 0) +
    ' topic pages + ' + Object.keys(CATEGORIES).length + ' hub pages.');
