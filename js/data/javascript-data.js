window.__CATEGORY_javascript__ = {
    category: "javascript",
    label: "JavaScript",
    icon: "bi-filetype-js",
    topics: [
        {
            id: "variables-data-types",
            title: "Variables & Data Types",
            icon: "bi-braces",
            questions: [
                {
                    q: "What are the differences between var, let, and const?",
                    a: `<strong>var</strong> is function-scoped and gets hoisted to the top of its function. <strong>let</strong> is block-scoped and sits in the <strong>Temporal Dead Zone (TDZ)</strong> until its declaration is reached.

<strong>const</strong> is also block-scoped and must be initialized at declaration — it cannot be reassigned after that. However, const objects and arrays can still be mutated.

In modern JavaScript, <strong>let</strong> and <strong>const</strong> are preferred over <strong>var</strong> because they prevent accidental variable leaks outside of blocks.

Here is how each keyword behaves with block scoping:
<pre><code>var a = 1;   // function-scoped, hoisted
let b = 2;   // block-scoped, TDZ applies
const c = 3; // block-scoped, cannot reassign

if (true) {
  var x = 10;   // accessible outside block
  let y = 20;   // NOT accessible outside block
}
console.log(x); // 10
console.log(y); // ReferenceError</code></pre>

Use <strong>const</strong> by default for values that won't be reassigned. Use <strong>let</strong> only when you need to reassign the variable later.

Avoid <strong>var</strong> in modern code because its function scoping and hoisting behavior leads to confusing bugs.`
                },
                {
                    q: "What are the primitive data types in JavaScript?",
                    a: `JavaScript has <strong>7 primitive types</strong>: <strong>string</strong>, <strong>number</strong>, <strong>boolean</strong>, <strong>undefined</strong>, <strong>null</strong>, <strong>symbol</strong>, and <strong>bigint</strong>.

Primitives are <strong>immutable</strong> — you cannot change the value itself, only reassign the variable. They are compared <strong>by value</strong>, not by reference.

Everything that is not a primitive is an <strong>object</strong> — including arrays, functions, dates, and regular expressions.

Here is how <code>typeof</code> identifies each primitive:
<pre><code>typeof "hello"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" (historical bug)
typeof Symbol()   // "symbol"
typeof 10n        // "bigint"</code></pre>

Note that <code>typeof null</code> returns <strong>"object"</strong> — this is a well-known bug from the first version of JavaScript that was never fixed for backwards compatibility.

Primitives are automatically <strong>wrapped in objects</strong> temporarily when you call methods on them (like <code>"hello".toUpperCase()</code>), a process called <strong>autoboxing</strong>.`
                },
                {
                    q: "How does the typeof operator work and what are its quirks?",
                    a: `The <code>typeof</code> operator returns a <strong>string</strong> indicating the type of the operand. It is safe to use on undeclared variables — it returns <strong>"undefined"</strong> instead of throwing a ReferenceError.

The most well-known quirk is that <code>typeof null</code> returns <strong>"object"</strong> instead of <strong>"null"</strong>. This is a bug from JavaScript's first implementation that was never fixed.

Another quirk is that <code>typeof NaN</code> returns <strong>"number"</strong> even though NaN stands for "Not a Number".

Here are all the possible return values of typeof:
<pre><code>typeof undefined   // "undefined"
typeof null        // "object" (bug)
typeof NaN         // "number"
typeof function(){} // "function"
typeof []          // "object"
typeof undeclared  // "undefined" (no error)</code></pre>

For reliable type checking, use <code>Object.prototype.toString.call(value)</code> which returns strings like <strong>"[object Array]"</strong> and <strong>"[object Null]"</strong>.

Use <code>Array.isArray()</code> to check for arrays since <code>typeof []</code> returns "object".`
                },
                {
                    q: "What is the difference between null and undefined?",
                    a: `<strong>undefined</strong> means a variable has been declared but not yet assigned a value. JavaScript automatically sets uninitialized variables, missing function parameters, and missing object properties to undefined.

<strong>null</strong> is an intentional assignment that explicitly represents "no value" or "empty." Developers use null to signify that a variable should have no value on purpose.

They are <strong>loosely equal</strong> (<code>==</code>) but <strong>not strictly equal</strong> (<code>===</code>) because they are different types.

Here is how they compare:
<pre><code>let a;
console.log(a);        // undefined
let b = null;
console.log(b);        // null

console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(typeof null);       // "object"
console.log(typeof undefined);  // "undefined"</code></pre>

Use <strong>null</strong> when you want to explicitly clear a value or indicate "no data." Let JavaScript assign <strong>undefined</strong> naturally — don't manually set variables to undefined.

In APIs and database queries, <strong>null</strong> often represents missing data while <strong>undefined</strong> means the field was never set.`
                },
                {
                    q: "What is NaN and how do you check for it?",
                    a: `<strong>NaN</strong> stands for "Not-a-Number" but surprisingly its type is <strong>"number"</strong>. It is produced when a mathematical operation fails, like dividing zero by zero or parsing a non-numeric string.

NaN is the <strong>only value in JavaScript that is not equal to itself</strong> — both <code>NaN === NaN</code> and <code>NaN == NaN</code> return false.

Always use <strong>Number.isNaN()</strong> for reliable checking. The global <code>isNaN()</code> is unreliable because it coerces its argument to a number first.

Here is the difference between the two checking methods:
<pre><code>console.log(typeof NaN);       // "number"
console.log(NaN === NaN);      // false
console.log(NaN == NaN);       // false

console.log(isNaN("hello"));        // true (coerces string)
console.log(Number.isNaN("hello")); // false (strict check)
console.log(Number.isNaN(NaN));     // true</code></pre>

The global <code>isNaN("hello")</code> returns true because it first converts "hello" to a number (which gives NaN), then checks if the result is NaN.

<strong>Number.isNaN()</strong> does not coerce — it only returns true if the actual value passed to it is NaN.`
                },
                {
                    q: "What is BigInt and when would you use it?",
                    a: `<strong>BigInt</strong> allows representation of integers larger than <strong>Number.MAX_SAFE_INTEGER</strong> (2^53 - 1). Regular JavaScript numbers lose precision above this limit.

You can create a BigInt by appending <strong>n</strong> to an integer literal or by calling <code>BigInt()</code>. BigInts cannot be mixed with regular numbers in arithmetic operations without explicit conversion.

BigInt is useful for cryptography, working with large database IDs, and financial calculations that need exact precision.

Here is how BigInt works:
<pre><code>const big = 9007199254740993n;
const also = BigInt("9007199254740993");

console.log(big + 1n);      // 9007199254740994n
// console.log(big + 1);    // TypeError: Cannot mix BigInt and other types
console.log(big + BigInt(1)); // 9007199254740994n
console.log(typeof big);     // "bigint"</code></pre>

BigInt cannot be used with <code>Math</code> methods and cannot represent decimal numbers — it is only for <strong>whole integers</strong>.

When comparing, BigInt and Number can be loosely equal (<code>1n == 1</code> is true) but not strictly equal (<code>1n === 1</code> is false).`
                },
                {
                    q: "What is Symbol and what is it used for?",
                    a: `<strong>Symbol</strong> creates a unique, immutable identifier that is guaranteed to be different from every other symbol, even if they share the same description.

Symbols are primarily used as <strong>object property keys</strong> to avoid name collisions, especially in libraries and frameworks that extend objects without conflicting with existing properties.

<code>Symbol.for()</code> creates <strong>shared symbols</strong> that can be accessed globally using a key string, unlike regular symbols which are always unique.

Here is how symbols work as unique identifiers:
<pre><code>const s1 = Symbol("id");
const s2 = Symbol("id");
console.log(s1 === s2); // false (always unique)

const obj = { [s1]: "value" };
console.log(obj[s1]); // "value"

// Global registry
const g1 = Symbol.for("app.id");
const g2 = Symbol.for("app.id");
console.log(g1 === g2); // true</code></pre>

Symbol properties are <strong>not enumerable</strong> by default — they don't show up in <code>for...in</code> loops or <code>Object.keys()</code>. Use <code>Object.getOwnPropertySymbols()</code> to list them.

JavaScript has built-in <strong>well-known symbols</strong> like <code>Symbol.iterator</code>, <code>Symbol.toPrimitive</code>, and <code>Symbol.hasInstance</code> that customize object behavior.`
                },
                {
                    q: "How do you reliably check the type of a value in JavaScript?",
                    a: `Use <code>typeof</code> for <strong>primitives</strong>, <code>Array.isArray()</code> for <strong>arrays</strong>, <code>instanceof</code> for <strong>class instances</strong>, and <code>Object.prototype.toString.call()</code> for the <strong>most reliable</strong> check across all types.

The <code>typeof</code> operator fails for null (returns "object") and arrays (returns "object"). The <code>instanceof</code> operator checks the prototype chain.

<code>Object.prototype.toString.call()</code> is the gold standard because it returns a unique string for every type including null, arrays, dates, and regex.

Here are the different type-checking approaches:
<pre><code>typeof "str"            // "string"
Array.isArray([1, 2])   // true
new Date() instanceof Date // true

// Most reliable approach
Object.prototype.toString.call(null)      // "[object Null]"
Object.prototype.toString.call([])        // "[object Array]"
Object.prototype.toString.call(new Date()) // "[object Date]"</code></pre>

The <strong>instanceof</strong> operator does not work across different execution contexts (e.g., iframes) because each context has its own constructor.

For production code, prefer <code>Array.isArray()</code> for arrays and <code>typeof</code> for primitives — only use <code>toString.call()</code> when you need to distinguish between complex types.`
                },
                {
                    q: "Why can you modify properties of a const object?",
                    a: `<code>const</code> prevents <strong>reassignment of the variable binding</strong>, not mutation of the value it holds. When you use const with an object, the variable always points to the same object, but the object's properties can be changed freely.

The same applies to arrays — you can push, pop, and modify elements of a const array, but you cannot assign a new array to the variable.

To make an object truly immutable, use <strong>Object.freeze()</strong>. Note that freeze is <strong>shallow</strong> — nested objects can still be modified.

Here is const behavior with objects and arrays:
<pre><code>const obj = { name: "Alice" };
obj.name = "Bob";   // Allowed — mutating the object
// obj = {};        // TypeError — reassigning the binding

const arr = [1, 2, 3];
arr.push(4);         // Allowed
// arr = [];         // TypeError

const frozen = Object.freeze({ x: 1 });
frozen.x = 2;       // Silently fails (strict mode: TypeError)
console.log(frozen.x); // 1</code></pre>

For <strong>deep immutability</strong>, you need to recursively freeze all nested objects, or use libraries like <strong>Immer</strong> or <strong>Immutable.js</strong>.

In interviews, explain that const protects the <strong>binding</strong> (the arrow from variable name to memory location), not the <strong>contents</strong> of that memory.`
                },
                {
                    q: "How does type conversion (coercion) work in JavaScript?",
                    a: `JavaScript has two types of coercion: <strong>implicit coercion</strong> (automatic, done by the engine) and <strong>explicit conversion</strong> (manual, using functions like <code>Number()</code>, <code>String()</code>, <code>Boolean()</code>).

The <strong>+</strong> operator prefers string concatenation when one operand is a string. Other arithmetic operators (<code>-</code>, <code>*</code>, <code>/</code>) always convert to numbers.

The <code>==</code> operator performs type coercion before comparing, while <code>===</code> does not — this is why <strong>strict equality</strong> is always recommended.

Here are examples of both implicit and explicit coercion:
<pre><code>// Implicit coercion
"5" + 3       // "53" (string concat)
"5" - 3       // 2   (numeric)
true + 1      // 2
"" == false   // true

// Explicit conversion
Number("42")   // 42
String(123)    // "123"
Boolean(0)     // false
Boolean("hi")  // true
parseInt("10px") // 10</code></pre>

There are only <strong>6 falsy values</strong> in JavaScript: <code>false</code>, <code>0</code>, <code>""</code> (empty string), <code>null</code>, <code>undefined</code>, and <code>NaN</code>. Everything else is truthy.

<code>parseInt()</code> and <code>parseFloat()</code> parse from left to right and stop at the first non-numeric character, making them more lenient than <code>Number()</code>.`
                },
                {
                    q: "What is the difference between pass by value and pass by reference?",
                    a: `<strong>Primitives</strong> are passed <strong>by value</strong> — a copy of the value is made, so changes inside a function don't affect the original. <strong>Objects</strong> are passed <strong>by reference</strong> — the function receives a reference to the same object in memory.

This means when you modify an object property inside a function, the change is visible outside. But if you reassign the entire object parameter to a new object, it does not affect the original.

Understanding this distinction is crucial for avoiding unexpected mutations in your code.

Here is how value vs reference passing works:
<pre><code>// Pass by value (primitives)
let a = 10;
function change(x) { x = 20; }
change(a);
console.log(a); // 10 — unchanged

// Pass by reference (objects)
let obj = { name: "Alice" };
function modify(o) { o.name = "Bob"; }
modify(obj);
console.log(obj.name); // "Bob" — changed!

// Reassigning doesn't affect original
function replace(o) { o = { name: "Charlie" }; }
replace(obj);
console.log(obj.name); // "Bob" — still Bob</code></pre>

When you reassign a parameter inside a function, you are only changing the local reference — the original variable still points to the same object.

To prevent mutations, create a <strong>copy</strong> of the object using spread syntax (<code>{...obj}</code>) or <code>structuredClone()</code> for deep copies.`
                },
                {
                    q: "What are truthy and falsy values in JavaScript?",
                    a: `Every value in JavaScript can be converted to a boolean. Values that convert to <strong>false</strong> are called <strong>falsy</strong>, and values that convert to <strong>true</strong> are called <strong>truthy</strong>.

There are exactly <strong>6 falsy values</strong>: <code>false</code>, <code>0</code> (and <code>-0</code>), <code>""</code> (empty string), <code>null</code>, <code>undefined</code>, and <code>NaN</code>. Everything else is truthy.

Surprisingly, empty arrays <code>[]</code>, empty objects <code>{}</code>, and the string <code>"0"</code> are all <strong>truthy</strong> — this catches many beginners off guard.

Here is how truthy and falsy values behave:
<pre><code>// Falsy values
Boolean(false)     // false
Boolean(0)         // false
Boolean("")        // false
Boolean(null)      // false
Boolean(undefined) // false
Boolean(NaN)       // false

// Truthy values (surprising ones)
Boolean([])        // true — empty array is truthy!
Boolean({})        // true — empty object is truthy!
Boolean("0")       // true — non-empty string
Boolean("false")   // true — non-empty string
Boolean(-1)        // true — non-zero number
Boolean(Infinity)  // true</code></pre>

Truthy/falsy values are used in <strong>if conditions</strong>, <strong>logical operators</strong> (<code>&&</code>, <code>||</code>), and the <strong>ternary operator</strong>.

Use <strong>double negation</strong> (<code>!!value</code>) as a shorthand to convert any value to its boolean equivalent.`
                },
                {
                    q: "What is the difference between == and === operators?",
                    a: `<strong>==</strong> (loose equality) performs <strong>type coercion</strong> before comparing — it converts both values to a common type first. <strong>===</strong> (strict equality) does <strong>no coercion</strong> — values must be the same type and the same value to be equal.

The loose equality rules are complex and can lead to surprising results. For example, <code>"" == false</code> is true because both coerce to zero.

In professional JavaScript development, <strong>always use <code>===</code></strong> unless you specifically need type coercion (common only for null checks).

Here are some surprising comparisons:
<pre><code>// Loose equality (==) — with coercion
"5" == 5       // true (string coerced to number)
"" == false    // true (both become 0)
null == undefined // true (special rule)
0 == false     // true (false becomes 0)
"" == 0        // true (both become 0)

// Strict equality (===) — no coercion
"5" === 5      // false (different types)
"" === false   // false
null === undefined // false
0 === false    // false

// The only useful == check
value == null  // true for null AND undefined</code></pre>

The <code>null == undefined</code> check is the <strong>one case</strong> where loose equality is actually useful — it lets you check for both null and undefined in a single comparison.

ESLint's <strong>eqeqeq</strong> rule enforces strict equality throughout your codebase and is enabled in most professional configurations.`
                },
                {
                    q: "What is the difference between shallow copy and deep copy?",
                    a: `A <strong>shallow copy</strong> creates a new object but only copies the top-level properties. If a property contains an object or array, only the <strong>reference</strong> is copied, so the nested data is shared between both copies.

A <strong>deep copy</strong> recursively copies all levels of nesting, creating completely independent objects with no shared references.

Shallow copies are fast and sufficient for flat objects. Deep copies are needed when you have nested objects that should be independently modifiable.

Here is how to create both types of copies:
<pre><code>const original = { name: "Alice", address: { city: "NYC" } };

// Shallow copy methods
const shallow1 = { ...original };
const shallow2 = Object.assign({}, original);

shallow1.name = "Bob";
console.log(original.name); // "Alice" — primitive copied

shallow1.address.city = "LA";
console.log(original.address.city); // "LA" — nested object shared!

// Deep copy methods
const deep1 = structuredClone(original);    // Modern (recommended)
const deep2 = JSON.parse(JSON.stringify(original)); // Classic

deep1.address.city = "Chicago";
console.log(original.address.city); // "LA" — independent copy</code></pre>

<strong>structuredClone()</strong> is the modern recommended approach — it handles circular references, Dates, Maps, Sets, and more. Available in all modern browsers and Node.js 17+.

<code>JSON.parse(JSON.stringify())</code> fails with <strong>functions</strong>, <strong>undefined</strong>, <strong>Dates</strong> (converted to strings), <strong>RegExp</strong>, and <strong>circular references</strong>.`
                },
                {
                    q: "What is optional chaining (?.) and how does it work?",
                    a: `<strong>Optional chaining</strong> (<code>?.</code>) safely accesses deeply nested properties without throwing an error if an intermediate property is <strong>null</strong> or <strong>undefined</strong>. It short-circuits and returns <code>undefined</code> instead of throwing a TypeError.

Before optional chaining, you had to write verbose checks like <code>user && user.address && user.address.city</code>. Now you can write <code>user?.address?.city</code>.

It works with property access, array indexing, and function calls. Combined with <strong>nullish coalescing</strong> (<code>??</code>), it provides elegant default values.

Here is optional chaining in action:
<pre><code>const user = { name: "Alice", address: null };

// Without optional chaining — verbose and error-prone
const city1 = user && user.address && user.address.city;

// With optional chaining — clean and safe
const city2 = user?.address?.city; // undefined (no error)

// With arrays
const arr = null;
console.log(arr?.[0]); // undefined

// With function calls
const obj = {};
console.log(obj.someMethod?.()); // undefined

// Combined with nullish coalescing for defaults
const city = user?.address?.city ?? "Unknown";
console.log(city); // "Unknown"</code></pre>

Optional chaining only checks for <strong>null</strong> and <strong>undefined</strong> — it does NOT short-circuit for other falsy values like <code>0</code>, <code>""</code>, or <code>false</code>.

Don't overuse optional chaining on every property — if a value should always exist, let it throw so you can catch the bug early.`
                },
                {
                    q: "What is nullish coalescing (??) and how is it different from ||?",
                    a: `The <strong>nullish coalescing operator</strong> (<code>??</code>) returns the right-hand operand only when the left-hand side is <strong>null</strong> or <strong>undefined</strong>. The <strong>logical OR</strong> (<code>||</code>) returns the right-hand side for <strong>any falsy value</strong>.

This is important because <code>||</code> treats <code>0</code>, <code>""</code>, and <code>false</code> as falsy and replaces them with the default — which is often not what you want.

Use <code>??</code> when you want to provide a default only for null/undefined, and <code>||</code> when you want to replace all falsy values.

Here is the key difference:
<pre><code>// || replaces ALL falsy values
0 || 10         // 10 (0 is falsy)
"" || "default" // "default" (empty string is falsy)
false || true   // true (false is falsy)

// ?? replaces ONLY null and undefined
0 ?? 10         // 0 (0 is not null/undefined)
"" ?? "default" // "" (empty string is not null/undefined)
false ?? true   // false (false is not null/undefined)
null ?? 10      // 10
undefined ?? 10 // 10

// Practical example
function getConfig(options) {
  const timeout = options.timeout ?? 3000;  // 0 is valid
  const retries = options.retries ?? 3;     // 0 means no retries
}</code></pre>

Use <code>??</code> for configuration values where <strong>0</strong>, <strong>empty string</strong>, or <strong>false</strong> are meaningful values that should not be replaced.

You cannot mix <code>??</code> with <code>&&</code> or <code>||</code> without parentheses — JavaScript requires explicit grouping to avoid ambiguity.`
                },
                {
                    q: "What is the difference between Object.freeze(), Object.seal(), and Object.preventExtensions()?",
                    a: `These three methods provide different levels of <strong>object immutability</strong>. <strong>Object.freeze()</strong> is the most restrictive, <strong>Object.seal()</strong> is in between, and <strong>Object.preventExtensions()</strong> is the least restrictive.

<strong>Object.preventExtensions()</strong> stops new properties from being added but allows modification and deletion of existing properties. <strong>Object.seal()</strong> prevents adding AND deleting properties but allows modification. <strong>Object.freeze()</strong> prevents all changes.

All three are <strong>shallow</strong> — nested objects are not affected. You need to recursively apply them for deep immutability.

Here is how each method works:
<pre><code>// Object.preventExtensions — no new properties
const obj1 = { a: 1 };
Object.preventExtensions(obj1);
obj1.a = 2;      // Allowed — modify existing
delete obj1.a;   // Allowed — delete existing
obj1.b = 3;      // Silently fails (strict: TypeError)

// Object.seal — no add/delete, can modify
const obj2 = { a: 1 };
Object.seal(obj2);
obj2.a = 2;      // Allowed — modify existing
delete obj2.a;   // Silently fails
obj2.b = 3;      // Silently fails

// Object.freeze — no changes at all
const obj3 = { a: 1 };
Object.freeze(obj3);
obj3.a = 2;      // Silently fails
delete obj3.a;   // Silently fails
obj3.b = 3;      // Silently fails

// Check status
Object.isExtensible(obj1); // false
Object.isSealed(obj2);     // true
Object.isFrozen(obj3);     // true</code></pre>

In <strong>strict mode</strong>, all silently failing operations throw <strong>TypeError</strong> instead, making it easier to catch mistakes.

For truly immutable data structures, consider libraries like <strong>Immer</strong> or the <strong>structuredClone()</strong> + freeze pattern.`
                },
                {
                    q: "What is the difference between primitive wrapper objects and primitives?",
                    a: `When you call a method on a primitive like <code>"hello".toUpperCase()</code>, JavaScript temporarily wraps it in a <strong>wrapper object</strong> (like <code>new String("hello")</code>), calls the method, and then discards the wrapper. This is called <strong>autoboxing</strong>.

You can also explicitly create wrapper objects using <code>new String()</code>, <code>new Number()</code>, or <code>new Boolean()</code>, but this is <strong>strongly discouraged</strong> because they create objects, not primitives.

Wrapper objects behave differently from primitives in comparisons — <code>new String("hello") === "hello"</code> is false because one is an object and the other is a primitive.

Here is how autoboxing and wrapper objects work:
<pre><code>// Autoboxing — JS temporarily wraps primitives
"hello".toUpperCase();  // JavaScript does: new String("hello").toUpperCase()
(42).toFixed(2);        // JavaScript does: new Number(42).toFixed(2)

// DON'T use constructor wrappers
const strObj = new String("hello");
const strPrim = "hello";

console.log(typeof strObj);   // "object"
console.log(typeof strPrim);  // "string"
console.log(strObj === strPrim); // false!

// Wrapper objects are truthy!
const boolObj = new Boolean(false);
if (boolObj) {
  console.log("This runs!"); // Because objects are truthy
}</code></pre>

Never use <code>new String()</code>, <code>new Number()</code>, or <code>new Boolean()</code> — use the primitive values directly or the conversion functions without <code>new</code>.

The difference between <code>String("42")</code> (conversion function, returns primitive) and <code>new String("42")</code> (constructor, returns object) is critical.`
                },
                {
                    q: "What are template literals and tagged templates?",
                    a: `<strong>Template literals</strong> use backticks (<code>\&#96;\&#96;</code>) instead of quotes and support <strong>string interpolation</strong> with <code>\${expression}</code>, <strong>multi-line strings</strong>, and <strong>tagged templates</strong>.

Interpolation can contain any JavaScript expression — variables, function calls, arithmetic, and even ternary operators.

<strong>Tagged templates</strong> allow you to process template literals with a function, giving you access to the string parts and interpolated values separately. This is used in libraries like <strong>styled-components</strong> and <strong>GraphQL</strong>.

Here is how template literals and tagged templates work:
<pre><code>const name = "Alice";
const age = 30;

// String interpolation
const greeting = \&#96;Hello, \${name}! You are \${age} years old.\&#96;;

// Multi-line strings
const html = \&#96;
  &lt;div&gt;
    &lt;h1&gt;\${name}&lt;/h1&gt;
    &lt;p&gt;Age: \${age}&lt;/p&gt;
  &lt;/div&gt;
\&#96;;

// Expressions inside interpolation
const msg = \&#96;Status: \${age >= 18 ? "adult" : "minor"}\&#96;;

// Tagged template
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =&gt;
    result + str + (values[i] ? \&#96;<b>\${values[i]}</b>\&#96; : ""), "");
}
const output = highlight\&#96;Name: \${name}, Age: \${age}\&#96;;
// "Name: <b>Alice</b>, Age: <b>30</b>"</code></pre>

Tagged templates receive the string parts as an array and the interpolated values as separate arguments, allowing custom string processing.

The <code>String.raw</code> built-in tag returns the raw string without processing escape sequences — useful for regex patterns and file paths.`
                },
                {
                    q: "What is the difference between value types and reference types?",
                    a: `<strong>Value types</strong> (primitives) are stored directly in the variable's memory location. <strong>Reference types</strong> (objects, arrays, functions) are stored in the heap, and the variable holds a <strong>pointer</strong> (reference) to that heap location.

When you copy a value type, you get an <strong>independent copy</strong>. When you copy a reference type, both variables point to the <strong>same object</strong> in memory — changes through one variable are visible through the other.

This is why comparing two objects with identical contents using <code>===</code> returns false — they are different objects in memory.

Here is how value and reference types differ:
<pre><code>// Value types — independent copies
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 — unchanged

// Reference types — shared reference
let obj1 = { x: 1 };
let obj2 = obj1;
obj2.x = 2;
console.log(obj1.x); // 2 — changed!

// Object comparison
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false — different references
console.log(arr1 === arr1); // true — same reference

// To compare by content, use JSON or deep comparison
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true</code></pre>

For <strong>deep content comparison</strong>, use <code>JSON.stringify()</code> for simple cases or libraries like <strong>Lodash's isEqual()</strong> for complex objects with circular references.

Understanding value vs reference types explains many common bugs — especially when passing objects to functions or storing them in arrays.`
                },
                {
                    q: "How do you convert between different data types in JavaScript?",
                    a: `JavaScript provides several ways to convert between types: <strong>explicit conversion</strong> using constructor functions, and various <strong>shorthand tricks</strong> that many developers use in practice.

<strong>Number()</strong> is strict — it returns NaN for anything that is not a valid number. <strong>parseInt()</strong> and <strong>parseFloat()</strong> are lenient — they parse as much as they can from the start of the string.

<strong>String()</strong> converts any value to a string, including null and undefined. The <code>toString()</code> method throws on null and undefined.

Here are all the common conversion methods:
<pre><code>// To Number
Number("42")       // 42
Number("")         // 0
Number(true)       // 1
Number(null)       // 0
Number(undefined)  // NaN
Number("hello")    // NaN
parseInt("42px")   // 42 — stops at non-numeric
parseFloat("3.14") // 3.14
+"42"              // 42 — unary plus shorthand

// To String
String(42)         // "42"
String(null)       // "null"
String(undefined)  // "undefined"
(42).toString()    // "42"
42 + ""            // "42" — concat shorthand
(255).toString(16) // "ff" — base conversion

// To Boolean
Boolean(0)         // false
Boolean("")        // false
Boolean(null)      // false
Boolean("hello")   // true
Boolean([])        // true — empty array is truthy!
!!42               // true — double negation shorthand</code></pre>

The <strong>unary plus</strong> (<code>+value</code>) is the shortest way to convert to a number, and <strong>double negation</strong> (<code>!!value</code>) is the shortest way to convert to a boolean.

Be careful with <code>Number("")</code> returning 0 and <code>Number(null)</code> returning 0 — these can be unexpected in practice.`
                }
            ]
        },
        {
            id: "functions-scope",
            title: "Functions & Scope",
            icon: "bi-code-square",
            questions: [
                {
                    q: "What is the difference between function declarations and function expressions?",
                    a: `<strong>Function declarations</strong> are hoisted entirely — you can call them before they appear in code. <strong>Function expressions</strong> assign a function to a variable and are not hoisted — the variable is hoisted but remains <strong>undefined</strong> until the assignment line.

Function declarations use the <code>function</code> keyword as a statement, while function expressions assign a function to a variable. Named function expressions also have a name that is only accessible inside the function body.

This hoisting difference affects code organization — declarations let you call functions before defining them, while expressions enforce a top-down execution order.

Here is how declarations and expressions behave differently:
<pre><code>// Declaration — fully hoisted
greet(); // "Hello"
function greet() { return "Hello"; }

// Expression — NOT hoisted
// sayHi(); // TypeError: sayHi is not a function
const sayHi = function() { return "Hi"; };
sayHi(); // "Hi"

// Named function expression
const factorial = function fact(n) {
  return n <= 1 ? 1 : n * fact(n - 1); // fact is accessible inside
};
// fact(5); // ReferenceError — fact not accessible outside</code></pre>

Function declarations are preferred when you want to define utility functions that can be called from anywhere in the same scope.

Function expressions are useful when you need to conditionally assign functions or pass them as arguments to other functions.`
                },
                {
                    q: "How do arrow functions differ from regular functions?",
                    a: `<strong>Arrow functions</strong> have a shorter syntax and several key differences from regular functions. They do not have their own <code>this</code> — they <strong>inherit this</strong> from the enclosing lexical scope. They also cannot be used as <strong>constructors</strong> with <code>new</code>.

Arrow functions lack the <code>arguments</code> object — you must use <strong>rest parameters</strong> (<code>...args</code>) instead. They also cannot be used as <strong>generator functions</strong> and do not have a <code>prototype</code> property.

The lexical <code>this</code> binding is the most important difference. Regular functions get their <code>this</code> based on how they are called, while arrow functions always use the <code>this</code> from where they were defined.

Here are the key differences:
<pre><code>const obj = {
  name: "Alice",
  regular: function() { return this.name; },   // "Alice"
  arrow: () =&gt; this.name                        // undefined (inherits outer this)
};

// No arguments object
const fn = (...args) =&gt; args; // use rest params instead

// Cannot use as constructor
// const F = () =&gt; {};
// new F(); // TypeError

// Implicit return for single expressions
const double = x =&gt; x * 2;
const getObj = () =&gt; ({ key: "value" }); // wrap object in parens</code></pre>

Use arrow functions for <strong>callbacks</strong>, <strong>array methods</strong>, and anywhere you want to preserve the outer <code>this</code> context.

Avoid arrow functions as <strong>object methods</strong> or <strong>event handlers</strong> where you need <code>this</code> to refer to the calling object or element.`
                },
                {
                    q: "What is an IIFE (Immediately Invoked Function Expression)?",
                    a: `An <strong>IIFE</strong> (Immediately Invoked Function Expression) is a function that is defined and executed <strong>immediately</strong> at the point of creation. It creates a <strong>private scope</strong>, preventing variable pollution of the outer scope.

IIFEs were essential before ES6 modules — they were the primary way to create isolated scopes and implement the <strong>module pattern</strong>. They are still useful for one-time initialization code.

You can create an IIFE by wrapping a function expression in parentheses and immediately invoking it. Both <code>(function(){})()</code> and <code>(function(){}())</code> syntaxes work.

Here is how IIFEs work:
<pre><code>(function() {
  const secret = "hidden";
  console.log(secret); // "hidden"
})();
// console.log(secret); // ReferenceError

// With parameters
const result = (function(x, y) {
  return x + y;
})(3, 4);
console.log(result); // 7

// Arrow function IIFE
const value = (() =&gt; {
  const config = { debug: true };
  return config;
})();</code></pre>

IIFEs are still useful for <strong>async initialization</strong> — you can use <code>(async () =&gt; { await setup(); })()</code> to run async code at the top level in environments that don't support top-level await.

With ES6 <strong>block scoping</strong> (<code>let</code>/<code>const</code>) and <strong>modules</strong>, the need for IIFEs has decreased significantly.`
                },
                {
                    q: "How does the scope chain work in JavaScript?",
                    a: `When a variable is referenced, JavaScript looks it up in the <strong>current scope</strong> first, then moves outward through each enclosing scope until it reaches the <strong>global scope</strong>. This linked series of scopes is called the <strong>scope chain</strong>.

The scope chain is determined <strong>lexically</strong> — based on where functions are written in the code, not where they are called from. This is why JavaScript has <strong>lexical scoping</strong> (also called static scoping).

If a variable is not found in any scope in the chain, a <strong>ReferenceError</strong> is thrown. Each function creates a new scope that has access to all outer scopes.

Here is how the scope chain resolves variables:
<pre><code>const global = "G";

function outer() {
  const outerVar = "O";
  function inner() {
    const innerVar = "I";
    console.log(innerVar);  // "I" — found in own scope
    console.log(outerVar);  // "O" — found in outer scope
    console.log(global);    // "G" — found in global scope
  }
  inner();
}
outer();

// Variable shadowing
const x = "outer";
function demo() {
  const x = "inner"; // shadows the outer x
  console.log(x);    // "inner"
}
demo();
console.log(x); // "outer" — not affected</code></pre>

<strong>Variable shadowing</strong> occurs when an inner scope declares a variable with the same name as an outer scope — the inner variable takes precedence within that scope.

The scope chain is fixed at function creation time (not call time), which is why closures work — they retain access to their original scope chain.`
                },
                {
                    q: "How do default parameters work in JavaScript?",
                    a: `<strong>Default parameters</strong> allow you to set fallback values when arguments are <code>undefined</code> or not provided. They are evaluated <strong>at call time</strong>, not at function definition time.

Default parameters can reference <strong>earlier parameters</strong> in the parameter list, and they can even be the result of <strong>function calls</strong>. Only <code>undefined</code> triggers the default — passing <code>null</code> does NOT.

Default parameters have their own scope — they can access outer variables but not variables declared in the function body.

Here is how default parameters work:
<pre><code>function greet(name = "World", greeting = "Hello") {
  return \&#96;\${greeting}, \${name}!\&#96;;
}
greet();            // "Hello, World!"
greet("Alice");     // "Hello, Alice!"

// Can reference earlier params
function calc(a, b = a * 2) {
  return a + b;
}
calc(3);    // 9 (b defaults to 6)
calc(3, 5); // 8

// null does NOT trigger default
function test(x = 10) { return x; }
test(undefined); // 10 — default used
test(null);      // null — default NOT used
test(0);         // 0 — default NOT used</code></pre>

Default values are evaluated <strong>lazily</strong> — they are only computed when needed, which means function calls in defaults are only executed if the argument is missing.

Before ES6, the common pattern was <code>param = param || defaultValue</code>, but this incorrectly treats <code>0</code>, <code>""</code>, and <code>false</code> as missing values.`
                },
                {
                    q: "What are rest parameters and how do they work?",
                    a: `<strong>Rest parameters</strong> (<code>...args</code>) collect all remaining arguments into a <strong>real array</strong>. Unlike the legacy <code>arguments</code> object, rest parameters are a true <code>Array</code> instance with all array methods available.

Rest parameters must be the <strong>last parameter</strong> in the function signature. You can have named parameters before the rest parameter to capture specific arguments.

The <code>arguments</code> object is array-like but NOT a real array — it lacks methods like <code>map</code>, <code>filter</code>, and <code>reduce</code>. Rest parameters solve this problem cleanly.

Here is how rest parameters work:
<pre><code>function sum(...numbers) {
  return numbers.reduce((acc, n) =&gt; acc + n, 0);
}
sum(1, 2, 3); // 6

function log(level, ...messages) {
  messages.forEach(msg =&gt; console.log(\&#96;[\${level}] \${msg}\&#96;));
}
log("INFO", "Start", "Processing");
// [INFO] Start
// [INFO] Processing

// Rest vs arguments
function demo(...args) {
  console.log(Array.isArray(args));      // true
  console.log(Array.isArray(arguments)); // false
}</code></pre>

Rest parameters work in <strong>arrow functions</strong>, but the <code>arguments</code> object does not — this is another reason to prefer rest parameters.

You can also use rest parameters in <strong>destructuring</strong>: <code>const [first, ...rest] = [1, 2, 3]</code> gives <code>first = 1</code> and <code>rest = [2, 3]</code>.`
                },
                {
                    q: "How does function hoisting work?",
                    a: `Function <strong>declarations</strong> are fully hoisted — both the name and the function body are available before the declaration line. Function <strong>expressions</strong> and <strong>arrow functions</strong> assigned to <code>let</code>/<code>const</code> are in the <strong>Temporal Dead Zone</strong> (TDZ) until their declaration is reached.

With <code>var</code>, the variable name is hoisted as <code>undefined</code>, so calling it before assignment gives a <strong>TypeError</strong> (not a ReferenceError) because <code>undefined</code> is not callable.

This hoisting behavior means function declarations can be called from anywhere within their scope, while expressions enforce a declaration-before-use pattern.

Here are the three hoisting scenarios:
<pre><code>// Declaration — fully hoisted
console.log(add(2, 3)); // 5
function add(a, b) { return a + b; }

// Expression with var — variable hoisted as undefined
// console.log(sub(5, 2)); // TypeError: sub is not a function
var sub = function(a, b) { return a - b; };

// Expression with const — TDZ
// console.log(mul(2, 3)); // ReferenceError
const mul = (a, b) =&gt; a * b;

// Only declarations hoist in blocks (non-strict)
if (true) {
  function blockFn() { return "block"; }
}
// blockFn() behavior varies by engine in non-strict mode</code></pre>

In <strong>strict mode</strong>, function declarations inside blocks are scoped to that block and not hoisted to the enclosing function.

Best practice: declare all functions before using them, regardless of hoisting, to make code more readable and predictable.`
                },
                {
                    q: "What are callbacks and how are they used?",
                    a: `A <strong>callback</strong> is a function passed as an argument to another function, to be invoked later — either synchronously or asynchronously. Callbacks are fundamental to JavaScript's <strong>event-driven</strong> and <strong>asynchronous</strong> programming model.

Callbacks enable patterns like event handling, array iteration methods, and Node.js-style asynchronous operations. The Node.js convention uses <strong>error-first callbacks</strong> where the first parameter is always the error.

The main drawback of callbacks is <strong>callback hell</strong> — deeply nested callbacks that make code hard to read and maintain. This led to the adoption of <strong>Promises</strong> and <strong>async/await</strong>.

Here is how callbacks are used:
<pre><code>// Asynchronous callback
function fetchData(callback) {
  setTimeout(() =&gt; {
    callback(null, { id: 1, name: "Alice" });
  }, 1000);
}

fetchData((err, data) =&gt; {
  if (err) return console.error(err);
  console.log(data); // { id: 1, name: "Alice" }
});

// Synchronous callback (array methods)
[1, 2, 3].map(n =&gt; n * 2); // [2, 4, 6]

// Callback hell example
getUser(id, (err, user) =&gt; {
  getOrders(user.id, (err, orders) =&gt; {
    getItems(orders[0].id, (err, items) =&gt; {
      // deeply nested — hard to read
    });
  });
});</code></pre>

The <strong>error-first callback</strong> pattern (<code>callback(err, result)</code>) is a Node.js convention that ensures errors are always handled before processing results.

Modern JavaScript prefers <strong>Promises</strong> and <strong>async/await</strong> over callbacks for asynchronous code, but callbacks are still used in event handlers and array methods.`
                },
                {
                    q: "What are higher-order functions?",
                    a: `A <strong>higher-order function</strong> is a function that either takes one or more <strong>functions as arguments</strong>, <strong>returns a function</strong>, or both. This is possible because functions in JavaScript are <strong>first-class citizens</strong> — they can be assigned to variables, passed around, and returned.

Common built-in higher-order functions include <code>map</code>, <code>filter</code>, <code>reduce</code>, <code>forEach</code>, <code>sort</code>, and <code>setTimeout</code>. They are a cornerstone of <strong>functional programming</strong> in JavaScript.

Higher-order functions promote <strong>code reuse</strong> and <strong>composition</strong> — you can create specialized functions by combining simpler ones.

Here are examples of higher-order functions:
<pre><code>// Takes a function as argument
[1, 2, 3].filter(n =&gt; n &gt; 1); // [2, 3]

// Returns a function (function factory)
function multiplier(factor) {
  return (num) =&gt; num * factor;
}
const double = multiplier(2);
console.log(double(5)); // 10

// Both — takes and returns functions
function compose(f, g) {
  return (x) =&gt; f(g(x));
}
const addOneThenDouble = compose(double, x =&gt; x + 1);
console.log(addOneThenDouble(3)); // 8

// Practical: creating validators
function minLength(min) {
  return (str) =&gt; str.length >= min;
}
const isLongEnough = minLength(8);
console.log(isLongEnough("password123")); // true</code></pre>

Higher-order functions enable powerful patterns like <strong>currying</strong>, <strong>partial application</strong>, and <strong>function composition</strong>.

<strong>Array methods</strong> like <code>map</code>, <code>filter</code>, and <code>reduce</code> are the most commonly used higher-order functions in everyday JavaScript development.`
                },
                {
                    q: "What is a pure function?",
                    a: `A <strong>pure function</strong> always returns the <strong>same output</strong> for the same inputs and has <strong>no side effects</strong>. Side effects include mutating external state, modifying input arguments, making API calls, writing to the DOM, or logging to the console.

Pure functions are <strong>predictable</strong>, <strong>testable</strong>, and easy to reason about. They are the foundation of <strong>functional programming</strong> and are essential for state management libraries like <strong>Redux</strong>.

An <strong>impure function</strong> depends on or modifies state outside its scope, making its behavior unpredictable and harder to test. Converting impure functions to pure ones is a common refactoring technique.

Here is the difference between pure and impure functions:
<pre><code>// Pure — same input, same output, no side effects
function add(a, b) {
  return a + b;
}

// Impure — depends on external state
let count = 0;
function increment() {
  return ++count; // modifies external variable
}

// Impure — side effect (mutation)
function addItem(arr, item) {
  arr.push(item); // mutates input
  return arr;
}

// Pure version — returns new array
function addItemPure(arr, item) {
  return [...arr, item]; // no mutation
}

// Pure — no dependency on external state
function formatName(first, last) {
  return \&#96;\${first} \${last}\&#96;;
}</code></pre>

<strong>Redux reducers</strong> must be pure functions — they take the current state and an action, and return a new state without mutating the original.

Methods like <code>map</code>, <code>filter</code>, and <code>reduce</code> are pure (they return new arrays), while <code>push</code>, <code>sort</code>, and <code>splice</code> are impure (they mutate the original array).`
                },
                {
                    q: "What is currying in JavaScript?",
                    a: `<strong>Currying</strong> transforms a function with multiple arguments into a sequence of functions, each taking a <strong>single argument</strong>. Instead of <code>f(a, b, c)</code>, you call <code>f(a)(b)(c)</code>.

Currying enables <strong>partial application</strong> — you can create specialized functions by fixing some arguments upfront. This is extremely useful for creating reusable utility functions.

Many functional programming libraries like <strong>Lodash</strong> and <strong>Ramda</strong> provide automatic currying utilities.

Here is how currying works:
<pre><code>// Regular function
function add(a, b) { return a + b; }

// Curried version
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}
const add5 = curriedAdd(5);
console.log(add5(3)); // 8

// Generic curry function
function curry(fn) {
  return function curried(...args) {
    if (args.length >= fn.length) {
      return fn.apply(this, args);
    }
    return function(...args2) {
      return curried.apply(this, args.concat(args2));
    };
  };
}

const curriedSum = curry((a, b, c) =&gt; a + b + c);
console.log(curriedSum(1)(2)(3));   // 6
console.log(curriedSum(1, 2)(3));   // 6
console.log(curriedSum(1)(2, 3));   // 6</code></pre>

Currying is different from <strong>partial application</strong> — currying always produces unary functions, while partial application fixes some arguments and may return a function taking multiple remaining arguments.

Common use cases include <strong>event handlers</strong>, <strong>configuration functions</strong>, and <strong>data transformation pipelines</strong>.`
                },
                {
                    q: "What is the arguments object and how does it differ from rest parameters?",
                    a: `The <strong>arguments</strong> object is an <strong>array-like object</strong> available inside all non-arrow functions. It contains all the arguments passed to the function, regardless of the number of declared parameters.

Unlike rest parameters, <code>arguments</code> is NOT a real array — it lacks array methods like <code>map</code>, <code>filter</code>, and <code>reduce</code>. You must convert it to an array first using <code>Array.from()</code> or spread syntax.

The <code>arguments</code> object is NOT available in <strong>arrow functions</strong> — they inherit the outer function's <code>arguments</code> if any. This is a key reason to prefer rest parameters in modern code.

Here is how arguments and rest parameters compare:
<pre><code>// arguments object (old way)
function oldSum() {
  console.log(typeof arguments); // "object"
  console.log(Array.isArray(arguments)); // false
  return Array.from(arguments).reduce((a, b) =&gt; a + b, 0);
}
oldSum(1, 2, 3); // 6

// Rest parameters (modern way)
function newSum(...nums) {
  console.log(Array.isArray(nums)); // true
  return nums.reduce((a, b) =&gt; a + b, 0);
}
newSum(1, 2, 3); // 6

// arguments in arrow functions — NOT available
const arrowFn = () =&gt; {
  // console.log(arguments); // ReferenceError or outer arguments
};

// arguments.callee (deprecated, forbidden in strict mode)
// function fact(n) { return n <= 1 ? 1 : n * arguments.callee(n-1); }</code></pre>

<strong>Rest parameters</strong> are always preferred over the <code>arguments</code> object in modern JavaScript — they are cleaner, work in arrow functions, and provide a real array.

The <code>arguments</code> object has a special property <code>arguments.callee</code> that refers to the current function — but it is <strong>deprecated</strong> and forbidden in strict mode.`
                },
                {
                    q: "What is the difference between call(), apply(), and bind()?",
                    a: `<strong>call()</strong>, <strong>apply()</strong>, and <strong>bind()</strong> are methods available on all functions that allow you to explicitly set the <code>this</code> context. They differ in how they handle arguments and when the function is executed.

<code>call()</code> invokes the function immediately with arguments passed <strong>individually</strong>. <code>apply()</code> also invokes immediately but takes arguments as an <strong>array</strong>. <code>bind()</code> does NOT invoke — it returns a <strong>new function</strong> with <code>this</code> permanently bound.

A helpful mnemonic: <strong>C</strong>all = <strong>C</strong>ommas (individual args), <strong>A</strong>pply = <strong>A</strong>rray (array args), <strong>B</strong>ind = <strong>B</strong>ound (returns new function).

Here is how each method works:
<pre><code>function greet(greeting, punct) {
  return greeting + ", " + this.name + punct;
}

const user = { name: "Alice" };

// call — individual arguments, executes immediately
greet.call(user, "Hello", "!");    // "Hello, Alice!"

// apply — array of arguments, executes immediately
greet.apply(user, ["Hello", "!"]);  // "Hello, Alice!"

// bind — returns new function, does NOT execute
const boundGreet = greet.bind(user, "Hi");
boundGreet("?"); // "Hi, Alice?"

// Practical: borrowing methods
const nums = { 0: "a", 1: "b", length: 2 };
const arr = Array.prototype.slice.call(nums); // ["a", "b"]</code></pre>

<strong>bind()</strong> is commonly used in React class components to bind event handlers: <code>this.handleClick = this.handleClick.bind(this)</code>.

With the spread operator, you can often replace <code>apply()</code>: <code>Math.max(...arr)</code> instead of <code>Math.max.apply(null, arr)</code>.`
                },
                {
                    q: "What is function composition and how do you implement it?",
                    a: `<strong>Function composition</strong> is the process of combining two or more functions to produce a new function. The output of one function becomes the input of the next. It is a core concept in <strong>functional programming</strong>.

Composition reads from <strong>right to left</strong> — <code>compose(f, g)</code> means \"first apply g, then apply f.\" The alternative <strong>pipe</strong> reads left to right, which many developers find more intuitive.

Composition works best with <strong>pure functions</strong> that take a single argument and return a single value.

Here is how to implement composition:
<pre><code>// Simple compose (right to left)
const compose = (...fns) =&gt;
  (x) =&gt; fns.reduceRight((acc, fn) =&gt; fn(acc), x);

// Pipe (left to right)
const pipe = (...fns) =&gt;
  (x) =&gt; fns.reduce((acc, fn) =&gt; fn(acc), x);

// Helper functions
const double = x =&gt; x * 2;
const addOne = x =&gt; x + 1;
const square = x =&gt; x * x;

// Compose: square(addOne(double(3)))
const transform = compose(square, addOne, double);
console.log(transform(3)); // 49 — double(3)=6, addOne(6)=7, square(7)=49

// Pipe: same functions, left to right
const pipeline = pipe(double, addOne, square);
console.log(pipeline(3)); // 49 — same result</code></pre>

Function composition promotes <strong>code reuse</strong> — small utility functions can be combined into complex transformations without creating intermediate variables.

Libraries like <strong>Ramda</strong> and <strong>Lodash/fp</strong> provide optimized <code>compose</code> and <code>pipe</code> functions with additional features like automatic currying.`
                },
                {
                    q: "What are generator functions and how do they work?",
                    a: `<strong>Generator functions</strong> are special functions declared with <code>function*</code> that can <strong>pause and resume</strong> execution using the <code>yield</code> keyword. They return a <strong>Generator object</strong> that conforms to both the iterator and iterable protocols.

Each call to <code>next()</code> on the generator executes until the next <code>yield</code>, returning an object with <code>value</code> and <code>done</code> properties. You can also pass values back into the generator via <code>next(value)</code>.

Generators are useful for <strong>lazy evaluation</strong>, <strong>infinite sequences</strong>, implementing custom iterators, and managing <strong>asynchronous flow</strong> (used by libraries like Redux-Saga).

Here is how generator functions work:
<pre><code>function* counter(start = 0) {
  while (true) {
    const reset = yield start++;
    if (reset) start = 0;
  }
}

const gen = counter(1);
console.log(gen.next());       // { value: 1, done: false }
console.log(gen.next());       // { value: 2, done: false }
console.log(gen.next(true));   // { value: 0, done: false } — reset!

// Finite generator
function* range(start, end) {
  for (let i = start; i &lt;= end; i++) {
    yield i;
  }
}

// Use with for...of
for (const num of range(1, 5)) {
  console.log(num); // 1, 2, 3, 4, 5
}

// Spread into array
const nums = [...range(1, 5)]; // [1, 2, 3, 4, 5]</code></pre>

<code>yield*</code> delegates to another generator or iterable: <code>yield* [1, 2, 3]</code> yields each element individually.

Generators enable <strong>lazy evaluation</strong> — values are computed only when requested, making them memory-efficient for large or infinite sequences.`
                },
                {
                    q: "What is recursion and when should you use it?",
                    a: `<strong>Recursion</strong> is when a function calls itself to solve a problem by breaking it into smaller subproblems. Every recursive function needs a <strong>base case</strong> (stopping condition) and a <strong>recursive case</strong> that moves toward the base case.

Recursion is ideal for problems with <strong>hierarchical</strong> or <strong>tree-like structures</strong> — traversing nested objects, DOM trees, file systems, and mathematical sequences like factorials and Fibonacci.

The main risk is <strong>stack overflow</strong> — each recursive call adds a frame to the call stack. For deep recursion, consider converting to an <strong>iterative</strong> approach or using <strong>tail call optimization</strong> (limited browser support).

Here is how recursion works:
<pre><code>// Factorial with base case
function factorial(n) {
  if (n &lt;= 1) return 1;      // base case
  return n * factorial(n - 1); // recursive case
}
console.log(factorial(5)); // 120

// Deep flatten nested arrays
function flatten(arr) {
  return arr.reduce((acc, item) =&gt;
    Array.isArray(item)
      ? acc.concat(flatten(item))
      : acc.concat(item), []);
}
console.log(flatten([1, [2, [3, [4]]]])); // [1, 2, 3, 4]

// Traverse nested object
function findValue(obj, key) {
  if (obj[key] !== undefined) return obj[key];
  for (const k of Object.keys(obj)) {
    if (typeof obj[k] === \"object\" &amp;&amp; obj[k] !== null) {
      const result = findValue(obj[k], key);
      if (result !== undefined) return result;
    }
  }
}</code></pre>

<strong>Tail call optimization</strong> (TCO) reuses the current stack frame for tail-recursive calls, preventing stack overflow — but it is only implemented in <strong>Safari</strong> currently.

For very deep recursion, convert to an <strong>iterative approach</strong> using an explicit stack (array) to avoid stack overflow issues.`
                },
                {
                    q: "What is memoization and how do you implement it?",
                    a: `<strong>Memoization</strong> is a performance optimization technique that <strong>caches</strong> the results of expensive function calls and returns the cached result for repeated inputs. It trades <strong>memory for speed</strong>.

Memoization works best with <strong>pure functions</strong> — functions that always return the same output for the same input. It is commonly used for recursive algorithms like Fibonacci, factorial, and dynamic programming solutions.

A memoized function stores results in a <strong>cache</strong> (usually a Map or object) keyed by the function arguments. Subsequent calls with the same arguments return instantly from the cache.

Here is how to implement memoization:
<pre><code>// Generic memoize function
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Without memoization — exponential time
function fib(n) {
  if (n &lt;= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

// With memoization — linear time
const memoFib = memoize(function(n) {
  if (n &lt;= 1) return n;
  return memoFib(n - 1) + memoFib(n - 2);
});

console.log(memoFib(50)); // 12586269025 — instant!
// fib(50) would take forever without memoization</code></pre>

Be careful with <strong>cache size</strong> — memoizing functions with many unique inputs can consume significant memory. Consider adding a <strong>max size</strong> or <strong>TTL</strong> (time-to-live) to the cache.

<strong>React.memo()</strong> and <strong>useMemo()</strong> are React-specific memoization tools that prevent unnecessary re-renders and recalculations.`
                },
                {
                    q: "What is the difference between function scope and block scope?",
                    a: `<strong>Function scope</strong> means a variable is accessible anywhere within the function where it is declared, regardless of block boundaries. <strong>Block scope</strong> means a variable is only accessible within the block (<code>{}</code>) where it is declared.

<code>var</code> creates <strong>function-scoped</strong> variables — they ignore block boundaries and are accessible throughout the function. <code>let</code> and <code>const</code> create <strong>block-scoped</strong> variables — they are confined to the nearest enclosing block.

Block scope is generally preferred because it reduces the risk of accidental variable leaks and makes code easier to understand.

Here is the key difference:
<pre><code>// Function scope (var)
function demo() {
  if (true) {
    var x = 10; // accessible throughout the function
  }
  console.log(x); // 10 — var ignores block boundaries
}

// Block scope (let/const)
function demo2() {
  if (true) {
    let y = 20;   // only accessible in this block
    const z = 30; // only accessible in this block
  }
  // console.log(y); // ReferenceError
  // console.log(z); // ReferenceError
}

// Loop scoping difference
for (var i = 0; i &lt; 3; i++) {}
console.log(i); // 3 — var leaks out of the loop

for (let j = 0; j &lt; 3; j++) {}
// console.log(j); // ReferenceError — let stays in loop</code></pre>

<strong>Block scope</strong> with <code>let</code>/<code>const</code> is the modern standard — <code>var</code> is considered legacy and should be avoided in new code.

Each iteration of a <code>for</code> loop with <code>let</code> gets its own block scope, which is why closures work correctly with <code>let</code> in loops but not with <code>var</code>.`
                },
                {
                    q: "What is a closure over a loop variable and how do you fix it?",
                    a: `When you create functions inside a loop using <code>var</code>, all functions share the <strong>same variable</strong> because <code>var</code> is function-scoped. By the time the functions execute, the loop variable has its <strong>final value</strong>.

This is one of the most common JavaScript interview questions and a classic source of bugs. The fix is to use <code>let</code> (block-scoped), an <code>IIFE</code>, or <code>forEach</code> instead.

Understanding this problem demonstrates knowledge of <strong>closures</strong>, <strong>scope</strong>, and <strong>asynchronous execution</strong>.

Here is the problem and its solutions:
<pre><code>// Problem: var shares one variable across all iterations
for (var i = 0; i &lt; 3; i++) {
  setTimeout(() =&gt; console.log(i), 100);
}
// Output: 3, 3, 3 — all see final value of i

// Fix 1: Use let (creates new scope per iteration)
for (let i = 0; i &lt; 3; i++) {
  setTimeout(() =&gt; console.log(i), 100);
}
// Output: 0, 1, 2

// Fix 2: IIFE (creates new scope manually)
for (var i = 0; i &lt; 3; i++) {
  (function(j) {
    setTimeout(() =&gt; console.log(j), 100);
  })(i);
}
// Output: 0, 1, 2

// Fix 3: forEach (each callback has its own scope)
[0, 1, 2].forEach(i =&gt; {
  setTimeout(() =&gt; console.log(i), 100);
});
// Output: 0, 1, 2</code></pre>

The <code>let</code> fix works because each loop iteration creates a <strong>new block scope</strong> with its own copy of the variable.

This pattern appears in many variations — event handlers, async operations, and any situation where functions are created inside loops.`
                },
                {
                    q: "What is a thunk in JavaScript?",
                    a: `A <strong>thunk</strong> is a function that wraps an expression to <strong>delay its evaluation</strong>. Instead of computing a value immediately, a thunk returns a function that computes the value when called.

Thunks are used for <strong>lazy evaluation</strong>, <strong>deferred computation</strong>, and in middleware patterns like <strong>Redux-Thunk</strong> where they wrap async logic in a function that receives <code>dispatch</code>.

In the context of Redux, a thunk is a function that returns another function — the inner function receives <code>dispatch</code> and <code>getState</code> as arguments.

Here is how thunks work:
<pre><code>// Basic thunk — delays computation
const add = (a, b) =&gt; a + b;
const thunk = () =&gt; add(3, 4); // not computed yet
console.log(thunk()); // 7 — computed when called

// Lazy evaluation
function lazyValue(computation) {
  let cached = null;
  return () =&gt; {
    if (cached === null) cached = computation();
    return cached;
  };
}
const expensive = lazyValue(() =&gt; {
  console.log(\"Computing...\");
  return 42;
});
expensive(); // \"Computing...\" then 42
expensive(); // 42 — cached, no recomputation

// Redux-Thunk pattern
function fetchUser(id) {
  return async (dispatch) =&gt; {
    dispatch({ type: "LOADING" });
    const user = await fetch("/api/users/" + id);
    dispatch({ type: "LOADED", payload: await user.json() });
  };
}</code></pre>

<strong>Redux-Thunk</strong> middleware intercepts thunks (functions) dispatched to the store, calling them with <code>dispatch</code> and <code>getState</code> instead of passing them to reducers.

Thunks are a simpler alternative to <strong>Redux-Saga</strong> (generators) for handling async actions in Redux applications.`
                }
            ]
        },
        {
            id: "closures",
            title: "Closures",
            icon: "bi-lock-fill",
            questions: [
                {
                    q: "What is a closure in JavaScript?",
                    a: `A <strong>closure</strong> is a function that retains access to the variables of its outer (enclosing) scope, even after the outer function has returned. Every function in JavaScript forms a closure over the scope in which it was created.

<pre><code>function outer() {
  const message = "Hello";
  function inner() {
    console.log(message); // accesses outer variable
  }
  return inner;
}

const fn = outer();
fn(); // "Hello" — inner still has access to message</code></pre>`
                },
                {
                    q: "Give a practical example of closures.",
                    a: `Closures are commonly used to create function factories — functions that generate customized functions based on parameters.

<pre><code>function createGreeter(greeting) {
  return function(name) {
    return \&#96;\${greeting}, \${name}!\&#96;;
  };
}

const hello = createGreeter("Hello");
const hola = createGreeter("Hola");

console.log(hello("Alice")); // "Hello, Alice!"
console.log(hola("Bob"));    // "Hola, Bob!"</code></pre>`
                },
                {
                    q: "What is the classic closure problem with loops?",
                    a: `Using <code>var</code> in a loop with asynchronous callbacks causes all callbacks to share the same variable. Since <code>var</code> is function-scoped, the loop variable has its final value by the time callbacks execute. Fix this with <code>let</code> (block-scoped) or an IIFE.

<pre><code>// Problem with var
for (var i = 0; i &lt; 3; i++) {
  setTimeout(() =&gt; console.log(i), 100);
}
// Output: 3, 3, 3

// Fix with let
for (let i = 0; i &lt; 3; i++) {
  setTimeout(() =&gt; console.log(i), 100);
}
// Output: 0, 1, 2

// Fix with IIFE
for (var i = 0; i &lt; 3; i++) {
  (function(j) {
    setTimeout(() =&gt; console.log(j), 100);
  })(i);
}
// Output: 0, 1, 2</code></pre>`
                },
                {
                    q: "How can closures create private variables?",
                    a: `Closures allow you to emulate private variables by enclosing data within a function scope, exposing only controlled access through returned methods.

<pre><code>function createPerson(name) {
  let _age = 0; // private

  return {
    getName: () =&gt; name,
    getAge: () =&gt; _age,
    setAge: (age) =&gt; {
      if (age &gt;= 0) _age = age;
    }
  };
}

const person = createPerson("Alice");
person.setAge(30);
console.log(person.getAge()); // 30
console.log(person._age);    // undefined (private)</code></pre>`
                },
                {
                    q: "What is the module pattern using closures?",
                    a: `The <strong>module pattern</strong> uses an IIFE and closures to create a <strong>private scope</strong> with <strong>public methods</strong>. It was the standard way to organize JavaScript code before ES6 modules were introduced.

The IIFE executes immediately and returns an object containing only the methods that should be publicly accessible. Internal variables remain private within the closure.

The module pattern supports <strong>method chaining</strong> by returning <code>this</code> from methods, making the API fluent and expressive.

Here is the module pattern in action:
<pre><code>const Calculator = (function() {
  let result = 0; // private

  return {
    add(n) { result += n; return this; },
    subtract(n) { result -= n; return this; },
    getResult() { return result; },
    reset() { result = 0; return this; }
  };
})();

Calculator.add(10).subtract(3).add(5);
console.log(Calculator.getResult()); // 12
// console.log(result); // ReferenceError — private!

// Revealing module pattern
const Logger = (function() {
  const logs = [];
  function log(msg) { logs.push(msg); }
  function getLogs() { return [...logs]; }
  function clear() { logs.length = 0; }
  
  return { log, getLogs, clear }; // reveal public API
})();</code></pre>

The <strong>Revealing Module Pattern</strong> is a variation where all functions are defined privately, and only references to public methods are returned — making it clearer which methods are public.

With ES6 modules (<code>import</code>/<code>export</code>), the module pattern is less common but still used in <strong>legacy codebases</strong> and <strong>browser scripts</strong> without a build system.`
                },
                {
                    q: "How do closures affect memory?",
                    a: `Closures keep references to outer scope variables alive, preventing garbage collection as long as the closure exists. This can lead to <strong>memory leaks</strong> if closures unintentionally retain large objects or DOM references. Set references to <code>null</code> when no longer needed.

<pre><code>function createHandler() {
  const largeData = new Array(1000000).fill("x");
  // largeData is retained in memory while handler exists
  return function() {
    console.log(largeData.length);
  };
}

let handler = createHandler();
handler(); // 1000000
handler = null; // Now largeData can be garbage collected</code></pre>`
                },
                {
                    q: "How do you create a counter using closures?",
                    a: `A counter closure encapsulates a count variable and returns functions to manipulate it, keeping the count private and persistent across calls.

<pre><code>function createCounter(initial = 0) {
  let count = initial;
  return {
    increment: () =&gt; ++count,
    decrement: () =&gt; --count,
    getCount: () =&gt; count,
    reset: () =&gt; { count = initial; return count; }
  };
}

const counter = createCounter(0);
counter.increment(); // 1
counter.increment(); // 2
counter.decrement(); // 1
console.log(counter.getCount()); // 1</code></pre>`
                },
                {
                    q: "How do closures help implement debounce?",
                    a: `<strong>Debounce</strong> delays a function call until a specified time has passed without further invocations. Closures hold the timer reference between calls.

<pre><code>function debounce(fn, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() =&gt; {
      fn.apply(this, args);
    }, delay);
  };
}

const search = debounce((query) =&gt; {
  console.log("Searching:", query);
}, 300);

search("h");
search("he");
search("hel"); // Only this triggers after 300ms</code></pre>`
                },
                {
                    q: "How are closures used in event handlers?",
                    a: `Closures allow event handlers to access variables from their enclosing scope, enabling stateful behavior without global variables.

<pre><code>function setupButton(buttonId, message) {
  const button = document.getElementById(buttonId);
  let clickCount = 0;

  button.addEventListener("click", function() {
    clickCount++;
    console.log(\&#96;\${message} — clicked \${clickCount} times\&#96;);
  });
  // The handler closes over message and clickCount
}

setupButton("btn1", "Save");
setupButton("btn2", "Delete");
// Each button maintains its own clickCount</code></pre>`
                },
                {
                    q: "How do closures enable data encapsulation?",
                    a: `Closures encapsulate data by restricting <strong>direct access</strong> to variables and exposing only <strong>controlled interfaces</strong>. This enforces <strong>invariants</strong> and prevents unintended modifications.

Data encapsulation through closures follows the <strong>principle of least privilege</strong> — external code can only interact with data through the approved public methods.

This pattern is JavaScript's equivalent of <strong>private fields</strong> in other programming languages. It is used extensively in libraries, state management, and API design.

Here is data encapsulation using closures:
<pre><code>function createStack() {
  const items = []; // private

  return {
    push(item) { items.push(item); },
    pop() { return items.pop(); },
    peek() { return items[items.length - 1]; },
    size() { return items.length; },
    isEmpty() { return items.length === 0; }
  };
}

const stack = createStack();
stack.push("a");
stack.push("b");
console.log(stack.peek()); // "b"
console.log(stack.size()); // 2
// stack.items — undefined (encapsulated)

// Users cannot break invariants
// stack.items = []; // Cannot directly reset
// stack.items.length = -1; // Cannot corrupt state</code></pre>

Encapsulation ensures that the internal <strong>data structure</strong> cannot be corrupted by external code — all modifications go through validated methods.

ES2022 introduced <strong>private class fields</strong> (<code>#field</code>) as a language-level alternative, but closure-based encapsulation remains common in functional programming patterns.`
                },
                {
                    q: "How do closures implement throttle?",
                    a: `<strong>Throttle</strong> ensures a function runs at most <strong>once per specified time interval</strong>, regardless of how many times it is called. Unlike debounce (which waits for inactivity), throttle guarantees <strong>regular execution</strong>.

Closures store both the <strong>timer reference</strong> and a <strong>flag</strong> to track whether the function can be called. The flag is reset after the interval passes.

Throttling is ideal for events that fire continuously like <strong>scroll</strong>, <strong>resize</strong>, and <strong>mousemove</strong> — where you want periodic updates rather than waiting for the event to stop.

Here is a throttle implementation using closures:
<pre><code>function throttle(fn, limit) {
  let inThrottle = false;
  return function(...args) {
    if (!inThrottle) {
      fn.apply(this, args);
      inThrottle = true;
      setTimeout(() =&gt; inThrottle = false, limit);
    }
  };
}

const handleScroll = throttle(() =&gt; {
  console.log("Scroll position:", window.scrollY);
}, 200);

window.addEventListener("scroll", handleScroll);
// Fires at most once every 200ms during scrolling

// Leading + trailing throttle
function throttleAdvanced(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}</code></pre>

<strong>Debounce</strong> waits for the user to stop, while <strong>throttle</strong> runs at regular intervals — choose based on whether you need the final value (debounce) or regular updates (throttle).

Lodash provides both <code>_.debounce()</code> and <code>_.throttle()</code> with additional options like leading/trailing edge execution.`
                },
                {
                    q: "What is partial application and how does it use closures?",
                    a: `<strong>Partial application</strong> creates a new function by fixing (pre-filling) some arguments of an existing function. The returned function takes the <strong>remaining arguments</strong> when called. Closures store the pre-filled arguments.

Unlike currying (which always produces unary functions), partial application can fix <strong>any number</strong> of arguments and return a function that accepts the rest.

JavaScript's <code>bind()</code> method provides built-in partial application — the first argument sets <code>this</code>, and subsequent arguments are pre-filled.

Here is how partial application works:
<pre><code>// Custom partial application
function partial(fn, ...presetArgs) {
  return function(...laterArgs) {
    return fn(...presetArgs, ...laterArgs);
  };
}

function greet(greeting, name, punct) {
  return greeting + ", " + name + punct;
}

const sayHello = partial(greet, "Hello");
console.log(sayHello("Alice", "!")); // "Hello, Alice!"

const sayHelloToAlice = partial(greet, "Hello", "Alice");
console.log(sayHelloToAlice("?")); // "Hello, Alice?"

// Using bind() for partial application
const log = console.log.bind(console, "[APP]");
log("Started");  // "[APP] Started"
log("Error!");   // "[APP] Error!"

// Practical: API request helpers
function request(method, url, data) { /* ... */ }
const get = partial(request, "GET");
const post = partial(request, "POST");</code></pre>

Partial application is useful for creating <strong>specialized functions</strong> from general ones — like creating <code>get</code> and <code>post</code> from a general <code>request</code> function.

The closure retains the pre-filled arguments in memory, so they are available when the returned function is eventually called.`
                },
                {
                    q: "How do closures work with async/await?",
                    a: `Closures work naturally with <strong>async/await</strong> — an async function closes over variables from its enclosing scope just like any other function. The closed-over variables remain accessible throughout the async operation.

This is particularly useful for maintaining <strong>request context</strong> (like user IDs, tokens, or configuration) across async operations without passing them through every function call.

Be careful with closures in loops with async operations — the same closure-over-loop-variable issues apply as with synchronous code.

Here is how closures interact with async/await:
<pre><code>// Closure retains context through async operations
function createFetcher(baseUrl) {
  return async function(endpoint) {
    const response = await fetch(baseUrl + endpoint);
    return response.json();
  };
}

const api = createFetcher("https://api.example.com");
const users = await api("/users");
const posts = await api("/posts");

// Closure in async loop — use for...of, not forEach
async function processItems(items) {
  const results = [];
  for (const item of items) {
    const result = await processItem(item);
    results.push(result); // results array from closure
  }
  return results;
}

// Retry pattern using closures
function createRetry(fn, maxRetries = 3) {
  return async function(...args) {
    let lastError;
    for (let i = 0; i &lt; maxRetries; i++) {
      try { return await fn(...args); }
      catch (e) { lastError = e; }
    }
    throw lastError;
  };
}</code></pre>

The <strong>retry pattern</strong> uses closures to retain the original function and the retry configuration, creating a resilient wrapper around any async operation.

When using closures with <code>Promise.all()</code> or <code>Promise.allSettled()</code>, each promise callback creates its own closure with independent state.`
                },
                {
                    q: "What is the difference between closure and scope?",
                    a: `<strong>Scope</strong> defines where variables are accessible in your code — it is a <strong>compile-time concept</strong> determined by where code is written. <strong>Closure</strong> is a <strong>runtime mechanism</strong> where a function retains access to its outer scope's variables even after the outer function has returned.

Every function has a scope (the variables it can access). A closure is created when a function is defined inside another function and references the outer function's variables.

Scope is about <strong>visibility</strong> — where variables can be seen. Closure is about <strong>persistence</strong> — keeping variables alive beyond their normal lifetime.

Here is how scope and closure differ:
<pre><code>// Scope — variables are accessible within their scope
function demo() {
  const x = 10; // x is in demo's scope
  console.log(x);
}
// console.log(x); // ReferenceError — x not in this scope

// Closure — function retains access to outer scope
function makeCounter() {
  let count = 0; // count's scope is makeCounter
  return function() {
    return ++count; // closure keeps count alive!
  };
}

const counter = makeCounter();
// makeCounter has returned, but count persists
console.log(counter()); // 1
console.log(counter()); // 2

// Without closure — no persistence
function noClose() {
  let count = 0;
  count++;
  console.log(count); // always 1
}
noClose(); // 1
noClose(); // 1 — count is recreated each time</code></pre>

Think of <strong>scope</strong> as the "rules" for variable access, and <strong>closure</strong> as the "mechanism" that preserves those variables beyond the outer function's execution.

Closures happen automatically in JavaScript — you don't need to explicitly create them. Any inner function that references outer variables forms a closure.`
                },
                {
                    q: "How do closures work with setTimeout and setInterval?",
                    a: `When you use <code>setTimeout</code> or <code>setInterval</code>, the callback function forms a <strong>closure</strong> over the variables in its enclosing scope. The callback executes later, but it retains access to those variables at the time of execution (not creation).

This is important because the variable values may have <strong>changed</strong> by the time the callback runs — especially in loops. The closure captures the <strong>reference</strong> to the variable, not a snapshot of its value.

Understanding this behavior is critical for working with <strong>animations</strong>, <strong>polling</strong>, <strong>retry logic</strong>, and any time-delayed operations.

Here is how closures interact with timers:
<pre><code>// Closure captures reference, not value
let message = "Hello";
setTimeout(() =&gt; {
  console.log(message); // "Changed" — captures reference
}, 1000);
message = "Changed"; // modified before timeout fires

// Using closure for sequential delays
for (let i = 0; i &lt; 5; i++) {
  setTimeout(() =&gt; console.log(i), i * 1000);
}
// Prints 0, 1, 2, 3, 4 at 1-second intervals

// Closure for cancellable interval
function createPoller(fn, interval) {
  let id;
  return {
    start() { id = setInterval(fn, interval); },
    stop() { clearInterval(id); }
  };
}

const poller = createPoller(() =&gt; console.log("tick"), 1000);
poller.start();
setTimeout(() =&gt; poller.stop(), 5000); // stops after 5 seconds</code></pre>

Always clear timers when they are no longer needed — especially <code>setInterval</code> — to prevent memory leaks from closures retaining references to DOM elements or large data.

In React, remember to clear timers in <strong>useEffect cleanup</strong> functions to prevent memory leaks when components unmount.`
                },
                {
                    q: "What is a closure trap and how do you avoid it?",
                    a: `A <strong>closure trap</strong> occurs when a closure captures a variable by <strong>reference</strong> rather than by <strong>value</strong>, leading to unexpected behavior. The most common trap is in loops where all closures share the same variable.

Closure traps also happen with <strong>stale closures</strong> in React — when a useEffect or event handler captures an outdated value of state or props because the closure was created before the value changed.

Other traps include accidentally retaining <strong>large objects</strong> in memory and creating closures over <strong>mutable variables</strong> that change unexpectedly.

Here are common closure traps and fixes:
<pre><code>// Trap 1: Loop variable sharing
const functions = [];
for (var i = 0; i &lt; 3; i++) {
  functions.push(() =&gt; i);
}
console.log(functions.map(f =&gt; f())); // [3, 3, 3] — trap!

// Fix: use let
for (let i = 0; i &lt; 3; i++) {
  functions.push(() =&gt; i);
}

// Trap 2: Stale closure in React
function Component() {
  const [count, setCount] = useState(0);
  
  useEffect(() =&gt; {
    const id = setInterval(() =&gt; {
      // count is stale — always 0!
      setCount(count + 1);
    }, 1000);
    return () =&gt; clearInterval(id);
  }, []); // empty deps = stale closure

  // Fix: use functional update
  useEffect(() =&gt; {
    const id = setInterval(() =&gt; {
      setCount(prev =&gt; prev + 1); // always fresh
    }, 1000);
    return () =&gt; clearInterval(id);
  }, []);
}</code></pre>

In React, use <strong>functional state updates</strong> (<code>setState(prev =&gt; ...)</code>) to avoid stale closures, or add the variable to the <strong>dependency array</strong>.

The rule of thumb: if your closure uses a variable that changes over time, make sure you are getting the <strong>current value</strong> and not a stale snapshot.`
                },
                {
                    q: "How do closures enable the once() utility function?",
                    a: `The <strong>once()</strong> utility ensures a function is called at most <strong>one time</strong> — subsequent calls return the result of the first invocation. Closures store a flag and the cached result between calls.

This pattern is useful for <strong>initialization</strong> code, <strong>database connections</strong>, <strong>API setup</strong>, and any operation that should only happen once regardless of how many times the function is called.

The closure retains both the <strong>hasRun</strong> flag and the <strong>cached result</strong>, making subsequent calls essentially free.

Here is how to implement once():
<pre><code>function once(fn) {
  let hasRun = false;
  let result;
  return function(...args) {
    if (!hasRun) {
      result = fn.apply(this, args);
      hasRun = true;
    }
    return result;
  };
}

const initialize = once(() =&gt; {
  console.log("Initializing...");
  return { ready: true };
});

console.log(initialize()); // "Initializing..." then { ready: true }
console.log(initialize()); // { ready: true } — no re-initialization
console.log(initialize()); // { ready: true } — cached result

// Practical: one-time event handler
const handleFirstClick = once((e) =&gt; {
  console.log("First click at:", e.clientX, e.clientY);
});
button.addEventListener("click", handleFirstClick);</code></pre>

Lodash provides <code>_.once()</code> with the same behavior. Some DOM APIs also have a native once option: <code>el.addEventListener('click', fn, { once: true })</code>.

The <strong>once pattern</strong> is a form of memoization where the cache key is simply "has the function been called before."`
                },
                {
                    q: "How are closures used in iterators and generators?",
                    a: `Closures power <strong>custom iterators</strong> by maintaining the current <strong>position</strong> and <strong>state</strong> between calls to <code>next()</code>. Each call to <code>next()</code> uses the closure to remember where it left off.

Before generators, closures were the only way to create iterators in JavaScript. The closure stores the internal index or state that tracks which element to return next.

Understanding this connection helps you appreciate how <strong>generators</strong> are syntactic sugar over closure-based state machines.

Here is how closures create iterators:
<pre><code>// Closure-based iterator
function createRangeIterator(start, end) {
  let current = start;
  return {
    next() {
      if (current &lt;= end) {
        return { value: current++, done: false };
      }
      return { value: undefined, done: true };
    }
  };
}

const iter = createRangeIterator(1, 3);
console.log(iter.next()); // { value: 1, done: false }
console.log(iter.next()); // { value: 2, done: false }
console.log(iter.next()); // { value: 3, done: false }
console.log(iter.next()); // { value: undefined, done: true }

// Make it iterable (works with for...of)
function createRange(start, end) {
  return {
    [Symbol.iterator]() {
      let current = start;
      return {
        next() {
          return current &lt;= end
            ? { value: current++, done: false }
            : { done: true };
        }
      };
    }
  };
}

for (const n of createRange(1, 5)) {
  console.log(n); // 1, 2, 3, 4, 5
}</code></pre>

The <code>[Symbol.iterator]()</code> method makes the object work with <code>for...of</code>, <strong>spread syntax</strong>, and <strong>destructuring</strong>.

<strong>Generator functions</strong> (<code>function*</code>) provide a cleaner syntax for the same pattern — they automatically manage the state that closures handle manually.`
                },
                {
                    q: "How do closures work with the Singleton pattern?",
                    a: `The <strong>Singleton pattern</strong> ensures a class or object has only <strong>one instance</strong> throughout the application. Closures store the single instance privately, preventing external code from creating additional instances.

This pattern is commonly used for <strong>configuration objects</strong>, <strong>database connections</strong>, <strong>logging services</strong>, and <strong>application state</strong> managers.

The closure keeps the instance variable private — external code can only access the instance through the <code>getInstance()</code> method.

Here is the Singleton pattern using closures:
<pre><code>const Database = (function() {
  let instance;

  function createInstance() {
    return {
      host: "localhost",
      port: 5432,
      query(sql) { console.log("Executing:", sql); }
    };
  }

  return {
    getInstance() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

const db1 = Database.getInstance();
const db2 = Database.getInstance();
console.log(db1 === db2); // true — same instance!

// Practical: app configuration
const Config = (function() {
  let settings = {};
  return {
    set(key, value) { settings[key] = value; },
    get(key) { return settings[key]; },
    getAll() { return { ...settings }; }
  };
})();

Config.set("theme", "dark");
Config.get("theme"); // "dark"</code></pre>

The Singleton pattern ensures <strong>consistent state</strong> across the entire application — every part of the code gets the same instance with the same data.

With ES6 modules, singletons are simpler — a module is evaluated once and cached, so exporting an object from a module creates a natural singleton.`
                }
            ]
        },
        {
            id: "prototypes-inheritance",
            title: "Prototypes & Inheritance",
            icon: "bi-diagram-3",
            questions: [
                {
                    q: "What is the prototype chain in JavaScript?",
                    a: `Every JavaScript object has an internal <strong>[[Prototype]]</strong> link to another object. When accessing a property, the engine searches the object first, then its prototype, then the prototype's prototype, until it reaches <code>null</code>.

This linked series of objects is called the <strong>prototype chain</strong>. It is the fundamental mechanism behind <strong>inheritance</strong> in JavaScript — objects can share behavior through their prototype chain.

All objects ultimately inherit from <strong>Object.prototype</strong>, which has <code>null</code> as its prototype — this is the end of every prototype chain.

Here is how the prototype chain works:
<pre><code>const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // true (own property)
console.log(dog.eats);  // true (found on prototype)
console.log(dog.flies); // undefined (not in chain)

// Chain: dog -> animal -> Object.prototype -> null
console.log(Object.getPrototypeOf(dog) === animal); // true
console.log(Object.getPrototypeOf(animal) === Object.prototype); // true
console.log(Object.getPrototypeOf(Object.prototype)); // null</code></pre>

Property lookup traverses the chain from the object upward — the first match is returned. If no match is found in the entire chain, <code>undefined</code> is returned.

Setting a property always creates it on the object itself (not on the prototype), even if a property with the same name exists higher in the chain.`
                },
                {
                    q: "What is __proto__ and how does it relate to prototype?",
                    a: `<code>__proto__</code> is the <strong>accessor property</strong> on every object that points to its prototype. <code>prototype</code> is a property on <strong>constructor functions</strong> that is used to set the <code>__proto__</code> of instances created with <code>new</code>.

These two are often confused. Every function has a <code>prototype</code> property (used when called with <code>new</code>), and every object has a <code>__proto__</code> property (pointing to its prototype).

In modern code, use <strong>Object.getPrototypeOf()</strong> instead of <code>__proto__</code> because <code>__proto__</code> is a legacy feature that may not be supported in all environments.

Here is how they relate:
<pre><code>function Person(name) { this.name = name; }
Person.prototype.greet = function() { return "Hi, " + this.name; };

const p = new Person("Alice");
console.log(p.__proto__ === Person.prototype);        // true
console.log(Object.getPrototypeOf(p) === Person.prototype); // true
console.log(p.greet()); // "Hi, Alice"

// prototype is only on functions
console.log(typeof Person.prototype); // "object"
console.log(typeof p.prototype);      // "undefined" — p is not a function</code></pre>

When you call <code>new Person()</code>, JavaScript creates a new object and sets its <code>__proto__</code> to <code>Person.prototype</code>, then executes the constructor with <code>this</code> bound to the new object.

Use <strong>Object.setPrototypeOf()</strong> to change an object's prototype, but be aware this is a slow operation that should be avoided in performance-critical code.`
                },
                {
                    q: "How does Object.create() work?",
                    a: `<strong>Object.create(proto)</strong> creates a new object with its <code>[[Prototype]]</code> set to the specified object. It enables <strong>prototypal inheritance</strong> without using constructors or the <code>class</code> keyword.

The second optional argument accepts <strong>property descriptors</strong> that define properties on the new object with fine-grained control over writability, enumerability, and configurability.

<code>Object.create(null)</code> creates an object with <strong>no prototype at all</strong> — useful for creating clean dictionaries without inherited methods like <code>toString</code> or <code>hasOwnProperty</code>.

Here is how Object.create() works:
<pre><code>const vehicle = {
  start() { return this.type + " started"; }
};

const car = Object.create(vehicle);
car.type = "Car";
console.log(car.start()); // "Car started"

// Create with property descriptors
const bike = Object.create(vehicle, {
  type: { value: "Bike", writable: true, enumerable: true }
});
console.log(bike.start()); // "Bike started"

// Null prototype — clean dictionary
const dict = Object.create(null);
dict.key = "value";
console.log(dict.toString); // undefined — no inherited methods</code></pre>

<code>Object.create()</code> is the purest form of prototypal inheritance — it directly links objects without constructor functions or class syntax.

Use <code>Object.create(null)</code> when you need a plain key-value store without risk of prototype pollution attacks.`
                },
                {
                    q: "How does ES6 class syntax work?",
                    a: `ES6 <code>class</code> is <strong>syntactic sugar</strong> over prototype-based inheritance. Under the hood, classes are still constructor functions with prototypes — but they provide a much cleaner syntax for defining constructors, methods, static members, and getters/setters.

Classes support <strong>constructor methods</strong>, <strong>instance methods</strong>, <strong>static methods</strong>, <strong>getters/setters</strong>, and <strong>private fields</strong> (with <code>#</code> prefix in ES2022). Unlike function declarations, classes are <strong>not hoisted</strong>.

Classes must be called with <code>new</code> — calling them without <code>new</code> throws a TypeError, unlike constructor functions which silently run in the global scope.

Here is how classes work:
<pre><code>class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return this.name + " makes a sound";
  }
  static create(name) {
    return new Animal(name);
  }
  get info() {
    return "Animal: " + this.name;
  }
}

const a = new Animal("Dog");
console.log(a.speak());        // "Dog makes a sound"
console.log(a.info);           // "Animal: Dog"
console.log(typeof Animal);    // "function" (still a function!)
console.log(Animal.create("Cat").name); // "Cat"</code></pre>

Class methods are defined on <code>Class.prototype</code>, so all instances share the same method references — just like adding methods to a constructor function's prototype.

<strong>Static methods</strong> belong to the class itself, not to instances — they are called on the class directly (like <code>Array.isArray()</code> or <code>Object.keys()</code>).`
                },
                {
                    q: "How does extends work for class inheritance?",
                    a: `The <code>extends</code> keyword creates a <strong>subclass</strong> that inherits from a parent class. The child class inherits all methods and can <strong>override</strong> them or add new ones. The prototype chain is set up automatically.

When a child class defines a method with the same name as a parent method, the child's method <strong>overrides</strong> the parent's. You can still access the parent method using <code>super.methodName()</code>.

JavaScript only supports <strong>single inheritance</strong> — a class can only extend one parent class. For multiple inheritance, use <strong>mixins</strong> instead.

Here is how class inheritance works:
<pre><code>class Animal {
  constructor(name) { this.name = name; }
  speak() { return this.name + " makes a sound"; }
}

class Dog extends Animal {
  speak() { return this.name + " barks"; }
  fetch(item) { return this.name + " fetches " + item; }
}

const d = new Dog("Rex");
console.log(d.speak());       // "Rex barks" (overridden)
console.log(d.fetch("ball")); // "Rex fetches ball"
console.log(d instanceof Animal); // true
console.log(d instanceof Dog);    // true

// Prototype chain: d -> Dog.prototype -> Animal.prototype -> Object.prototype</code></pre>

The <code>instanceof</code> operator checks the entire prototype chain — a Dog instance is also an instance of Animal and Object.

You can extend <strong>built-in classes</strong> too: <code>class MyArray extends Array { }</code> creates a custom array class with additional methods.`
                },
                {
                    q: "What does the super keyword do?",
                    a: `<code>super()</code> calls the parent class constructor — required in a child constructor before using <code>this</code>. <code>super.method()</code> calls a parent method by name, allowing you to extend rather than fully override behavior.

<pre><code>class Shape {
  constructor(color) { this.color = color; }
  describe() { return \&#96;A \${this.color} shape\&#96;; }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color); // must call before using this
    this.radius = radius;
  }
  describe() {
    return \&#96;\${super.describe()} with radius \${this.radius}\&#96;;
  }
}

const c = new Circle("red", 5);
console.log(c.describe()); // "A red shape with radius 5"</code></pre>`
                },
                {
                    q: "How does the instanceof operator work?",
                    a: `<code>instanceof</code> checks whether an object's prototype chain includes the <code>prototype</code> property of a constructor. It walks up the chain and returns <code>true</code> if found.

<pre><code>class Animal {}
class Dog extends Animal {}

const d = new Dog();
console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true
console.log(d instanceof Object); // true

// Works with constructor functions too
function Cat() {}
const c = new Cat();
console.log(c instanceof Cat); // true</code></pre>`
                },
                {
                    q: "What is hasOwnProperty and why is it important?",
                    a: `<code>hasOwnProperty()</code> returns <code>true</code> only if the property exists directly on the object, not inherited through the prototype chain. It is essential for distinguishing own vs inherited properties, especially in <code>for...in</code> loops.

<pre><code>const parent = { inherited: true };
const child = Object.create(parent);
child.own = true;

console.log(child.hasOwnProperty("own"));       // true
console.log(child.hasOwnProperty("inherited")); // false
console.log("inherited" in child);              // true

for (const key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(key); // Only "own"
  }
}</code></pre>`
                },
                {
                    q: "What are mixins and how do you implement them?",
                    a: `<strong>Mixins</strong> allow you to add functionality from multiple sources to a class since JavaScript only supports single inheritance. Use <code>Object.assign()</code> to copy methods onto a class prototype.

<pre><code>const Serializable = {
  serialize() { return JSON.stringify(this); }
};

const Loggable = {
  log() { console.log(\&#96;[\${this.constructor.name}]\&#96;, this); }
};

class User {
  constructor(name) { this.name = name; }
}

Object.assign(User.prototype, Serializable, Loggable);

const user = new User("Alice");
console.log(user.serialize()); // '{"name":"Alice"}'
user.log(); // [User] User { name: "Alice" }</code></pre>`
                },
                {
                    q: "What is the difference between prototypal and classical inheritance?",
                    a: `<strong>Classical inheritance</strong> (Java, C++) uses classes as blueprints to create instances — classes define the structure, and instances are copies of that structure. <strong>Prototypal inheritance</strong> (JavaScript) has objects that directly inherit from other objects through prototype links.

In JavaScript, there are no true classes — ES6 <code>class</code> syntax is <strong>syntactic sugar</strong> over prototype-based inheritance. Objects are linked to other objects, not instantiated from class blueprints.

Prototypal inheritance is more <strong>flexible</strong> — you can add or modify prototype methods at runtime, and objects can delegate behavior to any other object.

Here is the comparison:
<pre><code>// Prototypal — objects inherit from objects
const proto = {
  greet() { return "Hello from " + this.name; }
};
const obj = Object.create(proto);
obj.name = "Alice";
obj.greet(); // "Hello from Alice"

// Class syntax (prototypal under the hood)
class Person {
  constructor(name) { this.name = name; }
  greet() { return "Hello from " + this.name; }
}
// Person.prototype.greet exists on the prototype

// Dynamic modification (prototypal advantage)
proto.farewell = function() { return "Bye from " + this.name; };
obj.farewell(); // "Bye from Alice" — works immediately!</code></pre>

Prototypal inheritance uses a <strong>delegation</strong> model — objects don't copy methods from their prototypes, they <strong>delegate</strong> method calls up the chain.

Most modern JavaScript code uses <strong>class syntax</strong> for familiarity, but understanding prototypes is essential for debugging and advanced patterns.`
                },
                {
                    q: "What are private class fields and methods?",
                    a: `ES2022 introduced <strong>private class fields</strong> using the <code>#</code> prefix. Private fields and methods are only accessible <strong>within the class body</strong> — any access from outside throws a SyntaxError.

Before private fields, developers used closures, WeakMaps, or naming conventions (underscore prefix) to simulate privacy. The <code>#</code> syntax provides true language-level privacy.

Private fields are <strong>not inherited</strong> by subclasses and cannot be accessed even through the prototype chain or reflection APIs.

Here is how private class fields work:
<pre><code>class BankAccount {
  #balance = 0;  // private field
  #pin;          // private field

  constructor(pin, initialBalance = 0) {
    this.#pin = pin;
    this.#balance = initialBalance;
  }

  #validatePin(pin) {  // private method
    return pin === this.#pin;
  }

  deposit(amount) {
    if (amount > 0) this.#balance += amount;
  }

  withdraw(amount, pin) {
    if (this.#validatePin(pin) && amount <= this.#balance) {
      this.#balance -= amount;
      return amount;
    }
    return 0;
  }

  get balance() { return this.#balance; }
}

const account = new BankAccount("1234", 100);
account.deposit(50);
console.log(account.balance); // 150
// account.#balance; // SyntaxError: Private field</code></pre>

Private fields use a <strong>hard privacy</strong> model — even subclasses, debuggers, and <code>Object.keys()</code>/<code>Reflect</code> cannot access them.

Use private fields for data that should never be exposed, and use closures or WeakMaps for compatibility with older environments.`
                },
                {
                    q: "What are static methods and properties in classes?",
                    a: `<strong>Static methods and properties</strong> belong to the <strong>class itself</strong>, not to instances. They are called on the class directly and are commonly used for utility functions, factory methods, and constants.

Static methods cannot access <code>this</code> referring to an instance — inside a static method, <code>this</code> refers to the <strong>class constructor</strong> itself.

Static members are inherited by subclasses — a child class can call static methods defined on its parent class.

Here is how static members work:
<pre><code>class MathHelper {
  static PI = 3.14159;  // static property

  static square(x) { return x * x; }  // static method
  static cube(x) { return x * x * x; }

  static isEven(n) { return n % 2 === 0; }
}

console.log(MathHelper.PI);          // 3.14159
console.log(MathHelper.square(5));   // 25
console.log(MathHelper.isEven(4));   // true

// Cannot use on instances
const helper = new MathHelper();
// helper.square(5);  // TypeError: helper.square is not a function

// Static factory method
class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  static createAdmin(name) {
    return new User(name, "admin");
  }
  static createGuest() {
    return new User("Guest", "guest");
  }
}</code></pre>

Common examples of static methods in built-in classes include <code>Array.isArray()</code>, <code>Object.keys()</code>, <code>Number.parseInt()</code>, and <code>JSON.parse()</code>.

The <strong>factory pattern</strong> with static methods is a clean way to create instances with different configurations without exposing complex constructor logic.`
                },
                {
                    q: "What are getters and setters in JavaScript?",
                    a: `<strong>Getters</strong> and <strong>setters</strong> are special methods that allow you to define computed properties — they look like regular property access but execute custom logic behind the scenes.

<code>get</code> defines a method called when the property is <strong>read</strong>. <code>set</code> defines a method called when the property is <strong>assigned</strong>. Together, they enable <strong>validation</strong>, <strong>computed values</strong>, and <strong>lazy initialization</strong>.

Getters and setters work in both <strong>object literals</strong> and <strong>class definitions</strong>. They appear as regular properties to external code.

Here is how getters and setters work:
<pre><code>class Temperature {
  #celsius;

  constructor(celsius) {
    this.#celsius = celsius;
  }

  get fahrenheit() {
    return this.#celsius * 9/5 + 32;  // computed property
  }

  set fahrenheit(f) {
    this.#celsius = (f - 32) * 5/9;
  }

  get celsius() { return this.#celsius; }

  set celsius(c) {
    if (c < -273.15) throw new Error("Below absolute zero!");
    this.#celsius = c;
  }
}

const temp = new Temperature(100);
console.log(temp.fahrenheit); // 212 (getter)
temp.fahrenheit = 32;         // setter
console.log(temp.celsius);    // 0

// In object literals
const user = {
  firstName: "John",
  lastName: "Doe",
  get fullName() { return this.firstName + " " + this.lastName; },
  set fullName(name) {
    [this.firstName, this.lastName] = name.split(" ");
  }
};</code></pre>

Getters are useful for <strong>computed properties</strong> that derive from other data — like <code>fullName</code> from <code>firstName</code> and <code>lastName</code>.

Setters provide a natural place for <strong>validation logic</strong> — you can reject invalid values before they are stored.`
                },
                {
                    q: "How does property descriptor work in JavaScript?",
                    a: `Every property in JavaScript has a <strong>property descriptor</strong> that defines its behavior. Descriptors control whether a property is <strong>writable</strong>, <strong>enumerable</strong>, and <strong>configurable</strong>.

<strong>Data descriptors</strong> have <code>value</code> and <code>writable</code>. <strong>Accessor descriptors</strong> have <code>get</code> and <code>set</code>. Both types share <code>enumerable</code> and <code>configurable</code>.

<code>Object.defineProperty()</code> lets you create properties with custom descriptors, giving fine-grained control over property behavior.

Here is how property descriptors work:
<pre><code>const obj = {};

// Define a non-writable, non-enumerable property
Object.defineProperty(obj, "id", {
  value: 42,
  writable: false,      // cannot be changed
  enumerable: false,    // hidden from for...in and Object.keys
  configurable: false   // cannot be deleted or reconfigured
});

console.log(obj.id);     // 42
obj.id = 100;            // silently fails (strict mode: TypeError)
console.log(obj.id);     // 42

// Get descriptor
const desc = Object.getOwnPropertyDescriptor(obj, "id");
console.log(desc);
// { value: 42, writable: false, enumerable: false, configurable: false }

// Define multiple properties
Object.defineProperties(obj, {
  name: { value: "Alice", writable: true, enumerable: true },
  age:  { value: 30, writable: true, enumerable: true }
});</code></pre>

Properties created with regular assignment have all descriptor flags set to <code>true</code>. Properties created with <code>Object.defineProperty()</code> default all flags to <strong>false</strong>.

Understanding descriptors is key to understanding <code>Object.freeze()</code>, <code>Object.seal()</code>, and how libraries create non-enumerable utility methods.`
                },
                {
                    q: "What is the new keyword and what happens when you use it?",
                    a: `The <code>new</code> keyword creates a new instance of a constructor function or class. It performs four steps internally that set up the object and its prototype chain.

Step 1: Create a new empty object. Step 2: Set the object's <code>[[Prototype]]</code> to the constructor's <code>prototype</code>. Step 3: Execute the constructor with <code>this</code> bound to the new object. Step 4: Return the object (unless the constructor returns a different object).

If the constructor explicitly returns an object, that object is used instead. If it returns a primitive, the primitive is ignored and the new object is returned.

Here is what new does step by step:
<pre><code>function Person(name) {
  // Step 3: this = new object
  this.name = name;
  // Step 4: return this (implicit)
}
Person.prototype.greet = function() {
  return "Hi, " + this.name;
};

const p = new Person("Alice");
// Step 1: {} created
// Step 2: {}.__proto__ = Person.prototype
// Step 3: this.name = "Alice"
// Step 4: return { name: "Alice" }

console.log(p.greet()); // "Hi, Alice"

// What new does (manual implementation)
function myNew(Constructor, ...args) {
  const obj = Object.create(Constructor.prototype); // Steps 1-2
  const result = Constructor.apply(obj, args);      // Step 3
  return result instanceof Object ? result : obj;   // Step 4
}

const p2 = myNew(Person, "Bob");
console.log(p2.greet()); // "Hi, Bob"</code></pre>

Calling a constructor <strong>without new</strong> executes it as a regular function — <code>this</code> points to the global object (or undefined in strict mode), leading to bugs.

ES6 classes <strong>enforce</strong> the use of <code>new</code> — calling a class without <code>new</code> throws a TypeError, preventing this common mistake.`
                },
                {
                    q: "What is prototype pollution and how do you prevent it?",
                    a: `<strong>Prototype pollution</strong> is a security vulnerability where an attacker modifies <code>Object.prototype</code> (or another prototype), affecting <strong>all objects</strong> that inherit from it. This can lead to property injection, denial of service, or remote code execution.

It typically happens when user input is used to set properties on objects without validation — especially through functions that recursively merge objects or set nested properties using string paths.

This is a serious security concern listed in the <strong>OWASP Top 10</strong> and has affected major libraries like Lodash and jQuery.

Here is how prototype pollution works and how to prevent it:
<pre><code>// Vulnerable: recursive merge without checks
function merge(target, source) {
  for (const key in source) {
    if (typeof source[key] === "object") {
      target[key] = target[key] || {};
      merge(target[key], source[key]);
    } else {
      target[key] = source[key];
    }
  }
}

// Attack
const malicious = JSON.parse('{\"__proto__\":{\"isAdmin\":true}}');
merge({}, malicious);
console.log({}.isAdmin); // true — ALL objects affected!

// Prevention 1: Check for dangerous keys
function safeMerge(target, source) {
  for (const key of Object.keys(source)) {
    if (key === "__proto__" || key === "constructor" || key === "prototype") {
      continue; // skip dangerous keys
    }
    target[key] = source[key];
  }
}

// Prevention 2: Use Object.create(null) for dictionaries
const safe = Object.create(null);
// No prototype chain to pollute</code></pre>

Always <strong>validate property names</strong> from user input — reject <code>__proto__</code>, <code>constructor</code>, and <code>prototype</code> keys.

Use <code>Object.create(null)</code> for data dictionaries, <code>Map</code> for key-value stores, and <code>Object.freeze(Object.prototype)</code> in sensitive environments.`
                },
                {
                    q: "How do you check if an object is an instance of a specific class?",
                    a: `JavaScript provides several ways to check an object's type — each with different strengths. <strong>instanceof</strong> checks the prototype chain, <strong>constructor</strong> checks the constructor function, and <strong>Symbol.toStringTag</strong> allows custom type strings.

<code>instanceof</code> is the most common approach but fails across <strong>different execution contexts</strong> (iframes, workers). <code>constructor</code> can be overwritten. Custom type checking methods are most reliable.

For built-in types, use dedicated methods like <code>Array.isArray()</code>, <code>Number.isFinite()</code>, and <code>typeof</code> for primitives.

Here are the different type-checking approaches:
<pre><code>class Animal {}
class Dog extends Animal {}
const d = new Dog();

// instanceof — checks prototype chain
console.log(d instanceof Dog);    // true
console.log(d instanceof Animal); // true

// constructor property
console.log(d.constructor === Dog);    // true
console.log(d.constructor === Animal); // false

// Object.prototype.toString
console.log(Object.prototype.toString.call(d)); // "[object Object]"

// Custom toString tag
class Cat {
  get [Symbol.toStringTag]() { return "Cat"; }
}
const c = new Cat();
console.log(Object.prototype.toString.call(c)); // "[object Cat]"

// Type checking utilities
const isType = (obj, type) =&gt; obj?.constructor === type;
console.log(isType(d, Dog));    // true
console.log(isType([], Array)); // true</code></pre>

For cross-frame type checking, use <strong>duck typing</strong> — check for the presence of specific methods or properties rather than relying on <code>instanceof</code>.

The <strong>Symbol.toStringTag</strong> property customizes the string returned by <code>Object.prototype.toString.call()</code> — useful for creating identifiable custom types.`
                },
                {
                    q: "What is method overriding in JavaScript?",
                    a: `<strong>Method overriding</strong> occurs when a child class defines a method with the <strong>same name</strong> as a method in the parent class. The child's version takes precedence when called on child instances.

You can call the parent's overridden method using <code>super.methodName()</code> — this allows you to <strong>extend</strong> the parent's behavior rather than completely replacing it.

Method overriding works because JavaScript looks up methods starting from the object itself, then moves up the prototype chain. The first match is used.

Here is how method overriding works:
<pre><code>class Shape {
  area() { return 0; }
  describe() { return "I am a shape"; }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() { return this.width * this.height; } // override
  describe() {
    return super.describe() + " (rectangle " + this.width + "x" + this.height + ")";
  }
}

class Square extends Rectangle {
  constructor(side) {
    super(side, side);
  }
  describe() {
    return super.describe() + " — actually a square!";
  }
}

const sq = new Square(5);
console.log(sq.area());     // 25
console.log(sq.describe()); // "I am a shape (rectangle 5x5) — actually a square!"</code></pre>

The <strong>super</strong> keyword creates a chain of method calls up the prototype hierarchy — this is how you can build behavior incrementally.

Method overriding is the basis for <strong>polymorphism</strong> — different classes can share the same method name but implement different behavior.`
                },
                {
                    q: "How does Object.assign() work with prototypes?",
                    a: `<strong>Object.assign()</strong> copies only <strong>own enumerable properties</strong> from source objects to a target object. It does NOT copy properties from the prototype chain, and it does NOT set up prototype links.

This is important to understand — <code>Object.assign()</code> performs a <strong>shallow copy</strong> of property values, including methods. The copied methods become own properties of the target, not linked through the prototype.

<code>Object.assign()</code> is commonly used for <strong>mixing in</strong> behavior, <strong>cloning objects</strong>, and <strong>merging configuration</strong>.

Here is how Object.assign() interacts with prototypes:
<pre><code>const proto = { inherited: true };
const source = Object.create(proto);
source.own = "mine";

const target = {};
Object.assign(target, source);
console.log(target.own);       // "mine" — copied
console.log(target.inherited); // undefined — NOT copied!

// Copying methods
const mixin = {
  serialize() { return JSON.stringify(this); },
  clone() { return Object.assign({}, this); }
};

class User {
  constructor(name) { this.name = name; }
}
Object.assign(User.prototype, mixin);

const user = new User("Alice");
console.log(user.serialize()); // '{"name":"Alice"}'
const copy = user.clone();
console.log(copy.name); // "Alice"

// Object.assign does shallow copy
const deep = { nested: { a: 1 } };
const shallowCopy = Object.assign({}, deep);
shallowCopy.nested.a = 2;
console.log(deep.nested.a); // 2 — shared reference!</code></pre>

For <strong>deep cloning</strong>, use <code>structuredClone()</code> instead of <code>Object.assign()</code>. For prototype-aware copying, use <code>Object.create(Object.getPrototypeOf(obj))</code> combined with <code>Object.assign()</code>.

<code>Object.assign()</code> triggers <strong>setters</strong> on the target object, while <code>Object.defineProperties()</code> does not — this can lead to different behavior.`
                },
                {
                    q: "What is the constructor property and why does it matter?",
                    a: `Every function's <code>prototype</code> has a <strong>constructor</strong> property that points back to the function itself. Instances inherit this property, so you can use <code>obj.constructor</code> to identify what created an object.

The constructor property is automatically set up when a function is declared, but it can be accidentally <strong>lost</strong> when you replace the entire prototype object — this is a common mistake.

Understanding the constructor property helps with <strong>dynamic instance creation</strong>, <strong>type checking</strong>, and debugging.

Here is how the constructor property works:
<pre><code>function Person(name) { this.name = name; }
const p = new Person("Alice");
console.log(p.constructor === Person); // true
console.log(p.constructor.name);       // "Person"

// Creating another instance dynamically
const p2 = new p.constructor("Bob");
console.log(p2.name); // "Bob"

// BUG: Replacing prototype loses constructor
function Animal(name) { this.name = name; }
Animal.prototype = {
  speak() { return this.name + " speaks"; }
};
const a = new Animal("Dog");
console.log(a.constructor === Animal); // false!
console.log(a.constructor === Object); // true — inherited from Object

// Fix: restore constructor
Animal.prototype = {
  constructor: Animal,  // restore it
  speak() { return this.name + " speaks"; }
};</code></pre>

Always restore the <code>constructor</code> property when replacing a prototype object, or use <code>Object.assign()</code> to add methods instead of replacing the entire prototype.

ES6 classes handle this automatically — the <code>constructor</code> property is always correctly set on the class prototype.`
                }
            ]
        },
        {
            id: "promises",
            title: "Promises",
            icon: "bi-hourglass-split",
            questions: [
                {
                    q: "What is a Promise in JavaScript?",
                    a: `A <strong>Promise</strong> is an object representing the eventual completion or failure of an asynchronous operation. It provides a cleaner alternative to nested callbacks for handling async code.

<pre><code>const promise = new Promise((resolve, reject) =&gt; {
  const success = true;
  if (success) {
    resolve("Data loaded");
  } else {
    reject("Error occurred");
  }
});

promise
  .then(result =&gt; console.log(result))   // "Data loaded"
  .catch(error =&gt; console.error(error));</code></pre>`
                },
                {
                    q: "What are the three states of a Promise?",
                    a: `A Promise is always in one of three states: <strong>pending</strong> (initial state, neither fulfilled nor rejected), <strong>fulfilled</strong> (operation completed successfully), or <strong>rejected</strong> (operation failed). Once settled (fulfilled or rejected), it cannot change state.

<pre><code>// Pending → Fulfilled
const p1 = new Promise(resolve =&gt; {
  setTimeout(() =&gt; resolve("done"), 1000);
});

// Pending → Rejected
const p2 = new Promise((_, reject) =&gt; {
  setTimeout(() =&gt; reject("error"), 1000);
});

// Already settled — cannot change
const p3 = new Promise(resolve =&gt; {
  resolve("first");
  resolve("second"); // ignored
});</code></pre>`
                },
                {
                    q: "How do then(), catch(), and finally() work?",
                    a: `<code>then()</code> handles fulfilled values, <code>catch()</code> handles rejections, and <code>finally()</code> runs regardless of the outcome. Each returns a new Promise, enabling chaining.

<pre><code>fetch("/api/data")
  .then(response =&gt; response.json())   // handle success
  .then(data =&gt; console.log(data))
  .catch(err =&gt; console.error(err))    // handle any error
  .finally(() =&gt; {
    console.log("Cleanup");            // always runs
  });

// catch is shorthand for .then(null, onRejected)
promise.then(null, err =&gt; console.error(err));
// same as
promise.catch(err =&gt; console.error(err));</code></pre>`
                },
                {
                    q: "How does Promise.all() work?",
                    a: `<code>Promise.all()</code> takes an array of promises and returns a single promise that resolves with an array of all results when every promise fulfills. It <strong>rejects immediately</strong> if any single promise rejects.

<pre><code>const p1 = Promise.resolve(1);
const p2 = Promise.resolve(2);
const p3 = Promise.resolve(3);

Promise.all([p1, p2, p3])
  .then(results =&gt; console.log(results)); // [1, 2, 3]

// Fails fast on rejection
const pErr = Promise.reject("Error!");
Promise.all([p1, pErr, p3])
  .catch(err =&gt; console.log(err)); // "Error!"</code></pre>`
                },
                {
                    q: "What is Promise.race() and when is it useful?",
                    a: `<strong>Promise.race()</strong> returns a promise that settles as soon as the <strong>first promise settles</strong> — whether it fulfills or rejects. It is useful for implementing <strong>timeouts</strong>, picking the <strong>fastest response</strong>, or racing between cache and network.

Unlike <code>Promise.any()</code> which ignores rejections, <code>Promise.race()</code> settles with the first result regardless of whether it is a fulfillment or rejection.

The remaining promises continue executing — <code>Promise.race()</code> does not cancel them. You need <strong>AbortController</strong> to actually cancel slower operations.

Here is how Promise.race() works:
<pre><code>function timeout(ms) {
  return new Promise((_, reject) =&gt;
    setTimeout(() =&gt; reject("Timeout!"), ms)
  );
}

Promise.race([
  fetch("/api/data"),
  timeout(5000)
])
  .then(response =&gt; console.log("Got response"))
  .catch(err =&gt; console.log(err)); // "Timeout!" if too slow

// First response wins
Promise.race([
  fetch("https://api1.example.com/data"),
  fetch("https://api2.example.com/data")
]).then(fastest =&gt; console.log("Fastest responded"));</code></pre>

<code>Promise.race([])</code> with an empty array returns a Promise that <strong>never settles</strong> — it stays pending forever.

The timeout pattern with <code>Promise.race()</code> is one of the most common use cases — it prevents requests from hanging indefinitely.`
                },
                {
                    q: "What does Promise.allSettled() do?",
                    a: `<code>Promise.allSettled()</code> waits for all promises to settle (fulfill or reject) and returns an array of result objects with <code>status</code> ("fulfilled" or "rejected") and <code>value</code> or <code>reason</code>. It never short-circuits.

<pre><code>const promises = [
  Promise.resolve("OK"),
  Promise.reject("Fail"),
  Promise.resolve("Done")
];

Promise.allSettled(promises).then(results =&gt; {
  console.log(results);
  // [
  //   { status: "fulfilled", value: "OK" },
  //   { status: "rejected",  reason: "Fail" },
  //   { status: "fulfilled", value: "Done" }
  // ]
});</code></pre>`
                },
                {
                    q: "How does Promise chaining work?",
                    a: `Each <code>then()</code> returns a new Promise, so you can chain multiple <code>then()</code> calls. The return value of one <code>then</code> becomes the input of the next. Returning a Promise in <code>then</code> will be awaited automatically.

<pre><code>Promise.resolve(1)
  .then(val =&gt; val + 1)      // returns 2
  .then(val =&gt; val * 3)      // returns 6
  .then(val =&gt; {
    console.log(val);         // 6
    return Promise.resolve(val + 4); // return a Promise
  })
  .then(val =&gt; console.log(val)); // 10</code></pre>`
                },
                {
                    q: "How do you create a Promise from scratch?",
                    a: `Use the <code>Promise</code> constructor with an executor function that receives <code>resolve</code> and <code>reject</code> callbacks. Call <code>resolve</code> for success or <code>reject</code> for failure.

<pre><code>function delay(ms) {
  return new Promise(resolve =&gt; setTimeout(resolve, ms));
}

function readFileAsync(path) {
  return new Promise((resolve, reject) =&gt; {
    fs.readFile(path, "utf8", (err, data) =&gt; {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

delay(1000).then(() =&gt; console.log("1 second passed"));</code></pre>`
                },
                {
                    q: "How should you handle errors in Promises?",
                    a: `Always add a <code>.catch()</code> at the end of a chain to handle any rejected promise in the chain. Errors propagate down the chain until caught. Unhandled rejections trigger <code>unhandledrejection</code> events.

<pre><code>fetchUser()
  .then(user =&gt; fetchOrders(user.id))
  .then(orders =&gt; processOrders(orders))
  .catch(err =&gt; {
    // Catches errors from any step above
    console.error("Pipeline failed:", err);
  });

// Handling specific errors
promise.catch(err =&gt; {
  if (err instanceof NetworkError) {
    retry();
  } else {
    throw err; // re-throw unhandled errors
  }
});</code></pre>`
                },
                {
                    q: "What is Promise.any() and how does it differ from Promise.race()?",
                    a: `<strong>Promise.any()</strong> resolves with the first <strong>fulfilled</strong> promise, ignoring rejections. It only rejects if <strong>all</strong> promises reject, throwing an <code>AggregateError</code> containing all rejection reasons.

<code>Promise.race()</code> settles with the first promise to settle (fulfilled or rejected). <code>Promise.any()</code> only cares about the first <strong>success</strong> — it keeps waiting even if some promises reject.

Use <code>Promise.any()</code> when you want the fastest successful result. Use <code>Promise.race()</code> when you want the fastest result regardless.

Here is how Promise.any() works:
<pre><code>const promises = [
  Promise.reject("Error 1"),
  Promise.resolve("Success"),
  Promise.reject("Error 2")
];

Promise.any(promises)
  .then(val =&gt; console.log(val)); // "Success"

// All rejected
Promise.any([
  Promise.reject("E1"),
  Promise.reject("E2")
]).catch(err =&gt; {
  console.log(err instanceof AggregateError); // true
  console.log(err.errors); // ["E1", "E2"]
});

// Practical: fastest mirror
Promise.any([
  fetch("https://mirror1.example.com/data"),
  fetch("https://mirror2.example.com/data"),
  fetch("https://mirror3.example.com/data")
]).then(fastest =&gt; console.log("Got data"));</code></pre>

<code>Promise.any()</code> was introduced in <strong>ES2021</strong>. <code>AggregateError</code> is a new error type that wraps multiple errors.

Summary: <strong>all()</strong> = all succeed, <strong>allSettled()</strong> = wait for all, <strong>race()</strong> = first to settle, <strong>any()</strong> = first to succeed.`
                },
                {
                    q: "How do you implement a retry mechanism with Promises?",
                    a: `A <strong>retry mechanism</strong> automatically reattempts a failed operation a specified number of times before giving up. Promises make this pattern clean and composable.

This is essential for network requests that may fail due to transient errors like timeouts, rate limiting, or temporary server issues.

You can add <strong>exponential backoff</strong> — increasing the delay between retries — to avoid overwhelming the server.

Here is how to implement retry with Promises:
<pre><code>function retry(fn, maxRetries = 3, delay = 1000) {
  return new Promise((resolve, reject) =&gt; {
    function attempt(retriesLeft) {
      fn()
        .then(resolve)
        .catch(err =&gt; {
          if (retriesLeft <= 0) {
            reject(err);
          } else {
            console.log("Retrying... " + retriesLeft + " left");
            setTimeout(() =&gt; attempt(retriesLeft - 1), delay);
          }
        });
    }
    attempt(maxRetries);
  });
}

// Usage
retry(() =&gt; fetch("/api/data"), 3, 2000)
  .then(res =&gt; res.json())
  .then(data =&gt; console.log(data))
  .catch(err =&gt; console.error("All retries failed:", err));

// With exponential backoff
function retryWithBackoff(fn, retries = 3) {
  return fn().catch(err =&gt; {
    if (retries <= 0) throw err;
    const delay = Math.pow(2, 3 - retries) * 1000;
    return new Promise(r =&gt; setTimeout(r, delay))
      .then(() =&gt; retryWithBackoff(fn, retries - 1));
  });
}</code></pre>

<strong>Exponential backoff</strong> doubles the delay with each retry (1s, 2s, 4s, 8s...) to prevent overwhelming a struggling server.

Add <strong>jitter</strong> (random delay variation) to prevent multiple clients from retrying at exactly the same time.`
                },
                {
                    q: "How do you implement Promise.all() from scratch?",
                    a: `Implementing <code>Promise.all()</code> manually demonstrates understanding of how Promises compose. You need to track the number of resolved promises and maintain result order.

The key challenge is maintaining the <strong>input order</strong> in results even though promises may resolve in any order. Use the array index to place results correctly.

You must also handle the case where any single promise rejects — the returned promise should reject immediately with that reason.

Here is a manual implementation:
<pre><code>function myPromiseAll(promises) {
  return new Promise((resolve, reject) =&gt; {
    const results = [];
    let completed = 0;
    const promiseArray = Array.from(promises);

    if (promiseArray.length === 0) {
      resolve([]);
      return;
    }

    promiseArray.forEach((promise, index) =&gt; {
      Promise.resolve(promise)
        .then(value =&gt; {
          results[index] = value;  // maintain order
          completed++;
          if (completed === promiseArray.length) {
            resolve(results);
          }
        })
        .catch(reject);  // reject immediately on any failure
    });
  });
}

// Test
myPromiseAll([
  Promise.resolve(1),
  new Promise(r =&gt; setTimeout(() =&gt; r(2), 100)),
  Promise.resolve(3)
]).then(results =&gt; console.log(results)); // [1, 2, 3]</code></pre>

<code>Promise.resolve(promise)</code> wraps non-Promise values, ensuring the implementation handles mixed arrays of Promises and regular values.

This is a popular interview question — practice implementing <code>Promise.race()</code>, <code>Promise.allSettled()</code>, and <code>Promise.any()</code> using the same pattern.`
                },
                {
                    q: "What is the difference between microtasks and macrotasks?",
                    a: `JavaScript uses two types of task queues: <strong>microtask queue</strong> (Promise callbacks, queueMicrotask) and <strong>macrotask queue</strong> (setTimeout, setInterval, I/O). Microtasks have <strong>higher priority</strong> and run before the next macrotask.

After each macrotask completes, the engine processes <strong>all pending microtasks</strong> before moving to the next macrotask. This means Promise callbacks always execute before setTimeout callbacks, even with a 0ms delay.

Understanding this priority difference is crucial for predicting execution order in complex async code.

Here is the execution order:
<pre><code>console.log("1. Synchronous");

setTimeout(() =&gt; console.log("4. Macrotask (setTimeout)"), 0);

Promise.resolve().then(() =&gt; console.log("2. Microtask (Promise)"));

queueMicrotask(() =&gt; console.log("3. Microtask (queueMicrotask)"));

console.log("1.5 Synchronous");

// Output order:
// 1. Synchronous
// 1.5 Synchronous
// 2. Microtask (Promise)
// 3. Microtask (queueMicrotask)
// 4. Macrotask (setTimeout)

// Nested microtasks
Promise.resolve().then(() =&gt; {
  console.log("Micro 1");
  Promise.resolve().then(() =&gt; console.log("Micro 2"));
});
setTimeout(() =&gt; console.log("Macro"), 0);
// Micro 1, Micro 2, Macro</code></pre>

<strong>Microtasks</strong> include: Promise callbacks (.then/.catch/.finally), queueMicrotask(), MutationObserver.

<strong>Macrotasks</strong> include: setTimeout, setInterval, setImmediate (Node.js), requestAnimationFrame, I/O operations.`
                },
                {
                    q: "How do you cancel a Promise?",
                    a: `Promises themselves <strong>cannot be cancelled</strong> — once created, they will settle eventually. However, you can use the <strong>AbortController</strong> API to cancel the underlying operation (like fetch) and reject the Promise.

<code>AbortController</code> provides an <code>AbortSignal</code> that can be passed to APIs that support cancellation. When <code>abort()</code> is called, the signal triggers and the API rejects with an <code>AbortError</code>.

You can also create cancellable Promise wrappers that check a cancelled flag before resolving.

Here is how to cancel asynchronous operations:
<pre><code>// Using AbortController with fetch
const controller = new AbortController();
const signal = controller.signal;

fetch("/api/data", { signal })
  .then(res =&gt; res.json())
  .then(data =&gt; console.log(data))
  .catch(err =&gt; {
    if (err.name === "AbortError") {
      console.log("Request cancelled");
    }
  });

// Cancel after 5 seconds
setTimeout(() =&gt; controller.abort(), 5000);

// Custom cancellable Promise
function cancellable(promise) {
  let cancelled = false;
  const wrappedPromise = new Promise((resolve, reject) =&gt; {
    promise.then(
      val =&gt; cancelled ? reject({ cancelled: true }) : resolve(val),
      err =&gt; cancelled ? reject({ cancelled: true }) : reject(err)
    );
  });
  wrappedPromise.cancel = () =&gt; { cancelled = true; };
  return wrappedPromise;
}</code></pre>

<strong>AbortController</strong> is the standard way to cancel fetch requests, event listeners, and other DOM APIs that support signals.

In React, use AbortController in <code>useEffect</code> cleanup to cancel in-flight requests when a component unmounts.`
                },
                {
                    q: "How do you promisify a callback-based function?",
                    a: `<strong>Promisification</strong> converts a callback-based function into one that returns a Promise. This bridges the gap between older callback APIs and modern async/await code.

The pattern wraps the callback function in a <code>new Promise()</code>, calling <code>resolve</code> for success and <code>reject</code> for errors. Node.js provides <code>util.promisify()</code> for automatic conversion.

This is especially useful when working with <strong>Node.js core modules</strong> (fs, crypto, dns) and older third-party libraries that use callbacks.

Here is how to promisify functions:
<pre><code>// Manual promisification
function promisify(fn) {
  return function(...args) {
    return new Promise((resolve, reject) =&gt; {
      fn(...args, (err, result) =&gt; {
        if (err) reject(err);
        else resolve(result);
      });
    });
  };
}

// Usage with Node.js fs
const readFile = promisify(fs.readFile);
const data = await readFile("./config.json", "utf8");

// Node.js built-in util.promisify
const { promisify } = require("util");
const readFileAsync = promisify(fs.readFile);
const statAsync = promisify(fs.stat);

// Promisify all methods in an object
function promisifyAll(obj) {
  const result = {};
  for (const key of Object.keys(obj)) {
    if (typeof obj[key] === "function") {
      result[key + "Async"] = promisify(obj[key].bind(obj));
    }
  }
  return result;
}</code></pre>

<code>util.promisify()</code> assumes the callback follows the <strong>Node.js convention</strong>: <code>callback(error, result)</code> — error-first with a single result.

Modern Node.js provides <strong>Promise-based APIs</strong> directly: <code>fs.promises.readFile()</code>, <code>dns.promises.lookup()</code>, etc.`
                },
                {
                    q: "What is Promise.withResolvers() and how does it work?",
                    a: `<strong>Promise.withResolvers()</strong> is an ES2024 method that returns an object containing a new <code>Promise</code> along with its <code>resolve</code> and <code>reject</code> functions. It simplifies the common pattern of extracting resolve/reject from the executor.

Before this method, developers had to use a workaround with outer variables to access resolve/reject outside the executor function. <code>Promise.withResolvers()</code> makes this pattern explicit and clean.

This is useful when you need to resolve or reject a Promise from <strong>outside</strong> the executor — such as in event handlers, WebSocket messages, or inter-component communication.

Here is how Promise.withResolvers() works:
<pre><code>// Old pattern — extracting resolve/reject
let resolve, reject;
const promise = new Promise((res, rej) =&gt; {
  resolve = res;
  reject = rej;
});

// New pattern with Promise.withResolvers()
const { promise: p, resolve: res, reject: rej } = Promise.withResolvers();

// Practical: waiting for an event
function waitForEvent(element, eventName) {
  const { promise, resolve } = Promise.withResolvers();
  element.addEventListener(eventName, resolve, { once: true });
  return promise;
}

const clickEvent = await waitForEvent(button, "click");

// Practical: request-response matching
const pending = new Map();
function sendRequest(id, data) {
  const { promise, resolve, reject } = Promise.withResolvers();
  pending.set(id, { resolve, reject });
  socket.send(JSON.stringify({ id, data }));
  return promise;
}</code></pre>

<code>Promise.withResolvers()</code> is essentially a shortcut for the "deferred" pattern that has been used in libraries for years.

This method works with any subclass of Promise — if you call it on a custom Promise subclass, it uses that class's constructor.`
                }
            ]
        },
        {
            id: "async-await",
            title: "Async/Await",
            icon: "bi-lightning",
            questions: [
                {
                    q: "What does the async keyword do?",
                    a: `The <code>async</code> keyword before a function declaration makes it return a <strong>Promise</strong> automatically. If the function returns a value, it is wrapped in <code>Promise.resolve()</code>. If it throws, the error is wrapped in <code>Promise.reject()</code>.

<pre><code>async function greet() {
  return "Hello";
}
// Equivalent to:
// function greet() { return Promise.resolve("Hello"); }

greet().then(msg =&gt; console.log(msg)); // "Hello"

async function fail() {
  throw new Error("Oops");
}
fail().catch(err =&gt; console.error(err.message)); // "Oops"</code></pre>`
                },
                {
                    q: "How does await work?",
                    a: `<code>await</code> pauses execution of an <code>async</code> function until the Promise settles. It unwraps the resolved value. If the Promise rejects, <code>await</code> throws the rejection reason. It can only be used inside <code>async</code> functions (or at the top level in ES modules).

<pre><code>async function fetchData() {
  const response = await fetch("/api/data");
  const data = await response.json();
  console.log(data);
  return data;
}

// await unwraps the resolved value
async function example() {
  const value = await Promise.resolve(42);
  console.log(value); // 42
}</code></pre>`
                },
                {
                    q: "How do you handle errors with async/await?",
                    a: `Use <code>try/catch</code> blocks around <code>await</code> expressions to handle rejections. You can also chain <code>.catch()</code> on the returned Promise. For granular handling, wrap individual <code>await</code> calls in separate try/catch blocks.

<pre><code>async function loadUser(id) {
  try {
    const response = await fetch(\&#96;/api/users/\${id}\&#96;);
    if (!response.ok) throw new Error("Not found");
    return await response.json();
  } catch (err) {
    console.error("Failed to load user:", err.message);
    return null;
  }
}

// Or catch at call site
loadUser(1).catch(err =&gt; console.error(err));</code></pre>`
                },
                {
                    q: "How do you run async operations in parallel vs sequentially?",
                    a: `<strong>Sequential</strong>: each <code>await</code> runs one after another. <strong>Parallel</strong>: start all operations first, then <code>await</code> them together with <code>Promise.all()</code>. Parallel is faster when operations are independent.

<pre><code>// Sequential — slow (one after another)
async function sequential() {
  const a = await fetch("/api/a"); // waits...
  const b = await fetch("/api/b"); // then waits...
}

// Parallel — fast (concurrent)
async function parallel() {
  const [a, b] = await Promise.all([
    fetch("/api/a"),
    fetch("/api/b")
  ]);
}

// Start in parallel, await separately
async function parallelAlt() {
  const pA = fetch("/api/a");
  const pB = fetch("/api/b");
  const a = await pA;
  const b = await pB;
}</code></pre>`
                },
                {
                    q: "What is an async IIFE and when would you use it?",
                    a: `An <strong>async IIFE</strong> (Immediately Invoked Function Expression) is an async function that is defined and executed immediately. It allows using <code>await</code> at the top level in environments that don't support top-level await.

Async IIFEs are useful in <strong>CommonJS scripts</strong>, <strong>older Node.js</strong> versions, and any context where top-level await is not available. They provide a quick way to bootstrap async initialization.

The pattern wraps your async code in an arrow function prefixed with <code>async</code> and immediately invokes it.

Here is how async IIFEs work:
<pre><code>(async () =&gt; {
  try {
    const data = await fetch("/api/config");
    const config = await data.json();
    console.log("Config loaded:", config);
  } catch (err) {
    console.error("Failed:", err);
  }
})();

// Inline async computation
const result = await (async () =&gt; {
  const a = await getA();
  const b = await getB();
  return a + b;
})();

// Initialization pattern
(async () =&gt; {
  await connectToDatabase();
  await loadConfiguration();
  startServer();
})();</code></pre>

With ES modules supporting <strong>top-level await</strong>, async IIFEs are less needed in modern module-based code.

Async IIFEs are also useful for running async code in <strong>script tags</strong> and <strong>browser console</strong>.`
                },
                {
                    q: "What is top-level await?",
                    a: `<strong>Top-level await</strong> allows using <code>await</code> outside of async functions at the <strong>module top level</strong>. The module waits for the Promise to settle before continuing to execute, and importing modules also wait.

This works only in <strong>ES modules</strong> (<code>.mjs</code> files or <code>type="module"</code> scripts). It does NOT work in CommonJS (<code>require()</code>) or regular scripts.

Top-level await is useful for <strong>dynamic imports</strong>, <strong>loading configuration</strong>, and <strong>initializing resources</strong> before the module is available.

Here is how top-level await works:
<pre><code>// In an ES module (.mjs or type="module")
const response = await fetch("/api/config");
const config = await response.json();

export default config;

// Dynamic import based on condition
const locale = navigator.language;
const strings = await import("./i18n/" + locale + ".js");

// Conditional module loading
let db;
if (usePostgres) {
  db = await import("pg");
} else {
  db = await import("mysql");
}

// Fallback pattern
let data;
try {
  data = await fetch("/api/main");
} catch {
  data = await fetch("/api/fallback");
}</code></pre>

Top-level await makes the module <strong>asynchronous</strong> — any module that imports it will also wait for the async operations to complete.

Be cautious with top-level await — it can <strong>delay module loading</strong> and affect application startup time if the awaited operations are slow.`
                },
                {
                    q: "How do you convert callback-based functions to async/await?",
                    a: `Wrap the callback-based function in a <code>new Promise()</code>, then use <code>async/await</code> with the Promise version. Node.js also provides <strong>util.promisify()</strong> for automatic conversion of Node-style callbacks.

This technique is called <strong>promisification</strong> and is essential for integrating older callback APIs with modern async/await code.

Node.js also provides <strong>callback-free alternatives</strong> in the <code>fs.promises</code>, <code>dns.promises</code>, and <code>stream.promises</code> namespaces.

Here is how to convert callbacks to async/await:
<pre><code>// Manual conversion
function readFile(path) {
  return new Promise((resolve, reject) =&gt; {
    fs.readFile(path, "utf8", (err, data) =&gt; {
      if (err) reject(err);
      else resolve(data);
    });
  });
}

async function main() {
  const content = await readFile("./data.txt");
  console.log(content);
}

// Using util.promisify (Node.js)
const readFileAsync = require("util").promisify(fs.readFile);
const data = await readFileAsync("./data.txt", "utf8");

// Modern Node.js — built-in promises API
const { readFile } = require("fs").promises;
const content = await readFile("./data.txt", "utf8");</code></pre>

<code>util.promisify()</code> expects the callback to follow the <strong>error-first</strong> pattern: <code>callback(err, result)</code>.

For functions that don't follow the error-first pattern, you need to write a <strong>manual wrapper</strong> using <code>new Promise()</code>.`
                },
                {
                    q: "What are common mistakes with async/await?",
                    a: `The most common mistakes include: <strong>forgetting to await</strong> a Promise, using <code>await</code> in <code>forEach</code> (which doesn't work as expected), not handling errors, and using <strong>sequential await</strong> when parallel would be faster.

Another common mistake is <strong>unnecessary await</strong> in return statements — <code>return await promise</code> is redundant because async functions already wrap return values in Promises.

Understanding these pitfalls prevents subtle bugs that are hard to debug in production.

Here are the most common mistakes:
<pre><code>// Mistake 1: Forgetting await
async function bad() {
  const data = fetch("/api"); // Missing await! data is a Promise
  console.log(data); // Promise {&lt;pending&gt;}
}

// Mistake 2: await in forEach (doesn't wait!)
items.forEach(async (item) =&gt; {
  await processItem(item); // iterations don't wait for each other
});
// Fix: use for...of
for (const item of items) {
  await processItem(item); // truly sequential
}
// Or Promise.all for parallel
await Promise.all(items.map(item =&gt; processItem(item)));

// Mistake 3: Unnecessary return await
async function redundant() {
  return await somePromise(); // "return await" is redundant
  return somePromise();       // just return the promise
}
// Exception: return await IS needed inside try/catch
async function needed() {
  try {
    return await riskyOperation(); // needed to catch errors!
  } catch (e) {
    return fallback();
  }
}</code></pre>

<code>return await</code> IS needed inside <strong>try/catch</strong> — without <code>await</code>, the error would escape the try block entirely.

Use ESLint rule <strong>no-return-await</strong> to catch unnecessary <code>return await</code> usage, but configure it to allow inside try blocks.`
                },
                {
                    q: "What is for-await-of and when do you use it?",
                    a: `<code>for await...of</code> iterates over <strong>async iterables</strong> — objects that produce Promises on each iteration. It is used for consuming <strong>async generators</strong>, <strong>readable streams</strong>, and any async iterable.

Each iteration <strong>awaits</strong> the Promise produced by the iterable's <code>next()</code> method before proceeding to the next iteration. This makes it perfect for processing data streams.

It can also iterate over regular (synchronous) iterables that contain Promises, awaiting each one.

Here is how for-await-of works:
<pre><code>async function* generateItems() {
  yield await fetchItem(1);
  yield await fetchItem(2);
  yield await fetchItem(3);
}

async function processAll() {
  for await (const item of generateItems()) {
    console.log(item);
  }
}

// Iterating over chunks from a stream
async function readStream(stream) {
  for await (const chunk of stream) {
    process(chunk);
  }
}

// Iterating over array of Promises
const promises = [
  fetch("/api/1").then(r =&gt; r.json()),
  fetch("/api/2").then(r =&gt; r.json()),
  fetch("/api/3").then(r =&gt; r.json())
];

for await (const result of promises) {
  console.log(result); // processed in order
}</code></pre>

Unlike <code>Promise.all()</code>, <code>for await...of</code> processes results <strong>one at a time as they resolve</strong>, which is more memory-efficient for large datasets.

Be aware that iterating over an array of Promises with <code>for await...of</code> starts all Promises at once but processes results in <strong>array order</strong>, not resolution order.`
                },
                {
                    q: "How does error propagation work in async/await?",
                    a: `When an <code>await</code>ed Promise rejects, it throws an <strong>exception</strong> in the async function. If uncaught, the async function's returned Promise rejects. Errors propagate up through the call chain until caught with <code>try/catch</code> or <code>.catch()</code>.

This behavior mirrors <strong>synchronous exception propagation</strong> — errors bubble up through the call stack until a handler catches them. This makes async/await error handling intuitive.

You can catch errors at any level — close to the source for specific recovery, or at the top level for general error reporting.

Here is how errors propagate through async functions:
<pre><code>async function step1() { throw new Error("Step 1 failed"); }
async function step2() { await step1(); } // error propagates
async function step3() { await step2(); } // error propagates

// Caught at the top level
step3().catch(err =&gt; console.error(err.message)); // "Step 1 failed"

// Or with try/catch anywhere in the chain
async function step2Safe() {
  try {
    await step1();
  } catch (err) {
    console.error("Caught:", err.message);
    return "fallback"; // recovery value
  }
}

// Multiple error sources
async function pipeline() {
  try {
    const user = await fetchUser();     // might throw
    const orders = await fetchOrders(); // might throw
    return processOrders(orders);       // might throw
  } catch (err) {
    // Catches error from ANY of the above steps
    logError(err);
  }
}</code></pre>

If an async function's error is not caught by <code>try/catch</code> or <code>.catch()</code>, it becomes an <strong>unhandled rejection</strong> — detected by the <code>unhandledrejection</code> event.

In Node.js, unhandled rejections will <strong>crash the process</strong> by default (since Node.js 15+), making proper error handling essential.`
                },
                {
                    q: "How do you implement async iteration patterns?",
                    a: `<strong>Async iteration</strong> processes items one at a time or in controlled batches. Choosing the right pattern — sequential, parallel, or batched — depends on your requirements and resource constraints.

<strong>Sequential</strong> processes one item at a time, maintaining order. <strong>Parallel</strong> runs all items concurrently. <strong>Batched</strong> runs a limited number concurrently (like a semaphore).

Batch processing is important for avoiding <strong>rate limits</strong>, <strong>memory issues</strong>, and <strong>connection exhaustion</strong> when processing many items.

Here are common async iteration patterns:
<pre><code>// Sequential — one at a time, ordered
async function processSequential(items) {
  const results = [];
  for (const item of items) {
    results.push(await processItem(item));
  }
  return results;
}

// Parallel — all at once
async function processParallel(items) {
  return Promise.all(items.map(item =&gt; processItem(item)));
}

// Batched — limited concurrency
async function processBatched(items, batchSize = 5) {
  const results = [];
  for (let i = 0; i &lt; items.length; i += batchSize) {
    const batch = items.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(item =&gt; processItem(item))
    );
    results.push(...batchResults);
  }
  return results;
}

// Usage
await processSequential([1, 2, 3, 4, 5]);  // safe, ordered
await processParallel([1, 2, 3, 4, 5]);    // fast, unordered
await processBatched([1, 2, 3, 4, 5], 2);  // balanced</code></pre>

<strong>Batched processing</strong> is the recommended pattern for production code — it balances speed with resource protection.

For more advanced concurrency control, use libraries like <strong>p-limit</strong> or <strong>p-queue</strong> that provide configurable concurrency pools.`
                },
                {
                    q: "What is the difference between async/await and Promises?",
                    a: `<strong>async/await</strong> and <strong>Promises</strong> solve the same problem — managing asynchronous operations. Async/await is <strong>syntactic sugar</strong> over Promises that makes async code look and behave like synchronous code.

The key difference is readability: Promise chains use <code>.then()</code> and <code>.catch()</code> method chaining, while async/await uses familiar <code>try/catch</code> blocks and sequential-looking code.

Both use the same underlying mechanism — async/await compiles down to Promise chains internally.

Here is the same operation written both ways:
<pre><code>// Promise chain approach
function getUser(id) {
  return fetch("/api/users/" + id)
    .then(res =&gt; res.json())
    .then(user =&gt; fetch("/api/orders/" + user.id))
    .then(res =&gt; res.json())
    .catch(err =&gt; console.error(err));
}

// async/await approach — same logic, cleaner syntax
async function getUser(id) {
  try {
    const res = await fetch("/api/users/" + id);
    const user = await res.json();
    const orderRes = await fetch("/api/orders/" + user.id);
    return await orderRes.json();
  } catch (err) {
    console.error(err);
  }
}

// Conditional logic is much cleaner with async/await
async function fetchData(useCache) {
  const data = useCache ? await getFromCache() : await getFromAPI();
  return data;
}
// The Promise version of this would be much more complex</code></pre>

Use <strong>async/await</strong> for sequential operations and complex control flow. Use <strong>Promise.all()</strong> for parallel operations.

You can freely mix both styles — async functions return Promises, so they work with <code>.then()</code> and can be used with <code>Promise.all()</code>.`
                }
            ]
        },
        {
            id: "event-loop",
            title: "Event Loop",
            icon: "bi-arrow-repeat",
            questions: [
                {
                    q: "How does the JavaScript event loop work?",
                    a: `The <strong>event loop</strong> is the mechanism that allows JavaScript to perform non-blocking operations despite being single-threaded. It continuously checks if the <strong>call stack</strong> is empty. When the call stack is empty, it picks the next task from the <strong>microtask queue</strong> first (Promises, queueMicrotask), then the <strong>macrotask queue</strong> (setTimeout, setInterval, I/O). This cycle of checking and executing repeats indefinitely, ensuring asynchronous code runs in the correct order.

<pre><code>// Execution order:
console.log("1");                        // Sync — call stack
setTimeout(() =&gt; console.log("2"), 0);   // Macrotask queue
Promise.resolve().then(() =&gt; console.log("3")); // Microtask queue
console.log("4");                        // Sync — call stack

// Output: 1, 4, 3, 2</code></pre>

Synchronous code runs first on the call stack, then all <strong>microtasks</strong> are drained, and finally one <strong>macrotask</strong> is picked up. This priority order is why Promise callbacks always execute before setTimeout callbacks.`
                },
                {
                    q: "What is the call stack?",
                    a: `The <strong>call stack</strong> is a LIFO (Last In, First Out) data structure that tracks function execution in JavaScript. When a function is called, a new <strong>execution context</strong> is created and pushed onto the stack. When the function returns, its context is popped off. Since JavaScript is <strong>single-threaded</strong>, there is only one call stack, which means only one piece of code can execute at a time.

<pre><code>function third()  { console.log("third"); }
function second() { third(); }
function first()  { second(); }
first();

// Call stack progression:
// 1. first()   — push first
// 2. second()  — push second
// 3. third()   — push third
// 4. console.log — push, execute, pop
// 5. third returns — pop third
// 6. second returns — pop second
// 7. first returns — pop first</code></pre>

If the call stack grows too deep (e.g., infinite recursion), JavaScript throws a <strong>RangeError: Maximum call stack size exceeded</strong>. Understanding the call stack is essential for debugging and understanding how synchronous code executes.`
                },
                {
                    q: "What is the task queue (macrotask queue)?",
                    a: `The <strong>task queue</strong> (also called the macrotask queue) holds callbacks from Web APIs like <strong>setTimeout</strong>, <strong>setInterval</strong>, I/O operations, and UI events. After the call stack empties and all microtasks are processed, the event loop picks <strong>one</strong> macrotask from the front of the queue to execute. Each macrotask gets its own turn — between macrotasks, the browser can repaint the UI.

<pre><code>console.log("Start");

setTimeout(() =&gt; console.log("Timeout 1"), 0);
setTimeout(() =&gt; console.log("Timeout 2"), 0);

console.log("End");

// Output:
// "Start"
// "End"
// "Timeout 1"
// "Timeout 2"
// (macrotasks processed one at a time, in order)</code></pre>

Macrotasks are processed one at a time in FIFO order. Between each macrotask, the event loop checks for <strong>microtasks</strong> and processes all of them before picking the next macrotask. This ensures Promise callbacks always run promptly.`
                },
                {
                    q: "What are microtasks and how do they differ from macrotasks?",
                    a: `<strong>Microtasks</strong> include Promise callbacks, queueMicrotask, and MutationObserver callbacks. <strong>Macrotasks</strong> include setTimeout, setInterval, I/O, and UI rendering. The key difference is <strong>priority</strong> — all microtasks in the queue are drained completely before the event loop picks the next macrotask. Even new microtasks added during microtask processing are executed in the same cycle.

<pre><code>setTimeout(() =&gt; console.log("macro"), 0);
Promise.resolve().then(() =&gt; console.log("micro 1"));
Promise.resolve().then(() =&gt; {
  console.log("micro 2");
  Promise.resolve().then(() =&gt; console.log("micro 3"));
});

// Output: micro 1, micro 2, micro 3, macro
// All microtasks (including newly added) run before macro</code></pre>

This means if microtasks keep adding more microtasks, they can <strong>starve macrotasks</strong> and block UI rendering. Always be careful not to create infinite microtask loops as they will freeze the browser.`
                },
                {
                    q: "Why does setTimeout(..., 0) not execute immediately?",
                    a: `<strong>setTimeout(fn, 0)</strong> does not run immediately because the callback is placed in the <strong>macrotask queue</strong>, not on the call stack. It only executes after the current call stack is completely empty and all microtasks have been processed. Additionally, browsers clamp the minimum delay to approximately <strong>4ms</strong> for nested setTimeout calls (after 5 levels of nesting). The 0ms delay simply means "as soon as possible" — not instant.

<pre><code>console.log("A");
setTimeout(() =&gt; console.log("B"), 0);
console.log("C");

// Output: A, C, B
// "B" waits until stack clears even though delay is 0

// The 0ms is not guaranteed — it means "as soon as possible"
// after current execution and microtasks complete</code></pre>

This behavior is commonly used to <strong>defer execution</strong> to the next event loop iteration, allowing the current synchronous code and any pending microtasks to finish first. It is useful for breaking up long-running tasks.`
                },
                {
                    q: "What is the execution order of Promises vs setTimeout?",
                    a: `Promise callbacks (<strong>.then()</strong>) are placed in the <strong>microtask queue</strong> while setTimeout callbacks go to the <strong>macrotask queue</strong>. Since the event loop always drains all microtasks before picking the next macrotask, Promise callbacks always execute before setTimeout callbacks when both are scheduled in the same synchronous block. This is a fundamental rule of JavaScript's event loop.

<pre><code>console.log("1");

setTimeout(() =&gt; console.log("2"), 0);

Promise.resolve()
  .then(() =&gt; console.log("3"))
  .then(() =&gt; console.log("4"));

console.log("5");

// Output: 1, 5, 3, 4, 2
// Sync first, then microtasks (Promise), then macrotasks (setTimeout)</code></pre>

Even with a 0ms delay on setTimeout, the Promise callbacks run first because <strong>microtasks have higher priority</strong>. This ordering is consistent across all modern browsers and Node.js environments.`
                },
                {
                    q: "How does requestAnimationFrame fit into the event loop?",
                    a: `<strong>requestAnimationFrame()</strong> schedules a callback to run before the next browser repaint, typically at 60fps (~16.7ms intervals). It runs after microtasks but is positioned between microtask processing and the paint step in the rendering pipeline. Unlike setTimeout, rAF is synchronized with the browser's refresh rate, making it ideal for smooth animations. The browser automatically pauses rAF callbacks when the tab is inactive to save resources.

<pre><code>console.log("sync");

requestAnimationFrame(() =&gt; console.log("rAF"));
setTimeout(() =&gt; console.log("timeout"), 0);
Promise.resolve().then(() =&gt; console.log("promise"));

// Typical output: sync, promise, rAF, timeout
// (rAF timing depends on the browser's paint cycle)

// Use for smooth animations
function animate() {
  element.style.left = position + "px";
  position++;
  if (position &lt; 300) requestAnimationFrame(animate);
}</code></pre>

Always prefer <strong>requestAnimationFrame</strong> over setTimeout for animations. It provides smoother animations because it is synced with the display's refresh rate and avoids unnecessary frame calculations when the page is not visible.`
                },
                {
                    q: "What happens when you block the event loop?",
                    a: `Since JavaScript is <strong>single-threaded</strong>, long-running synchronous code blocks the event loop completely. This means the UI freezes, user events are not processed, setTimeout and setInterval callbacks are delayed, and the page becomes unresponsive. The browser may even show a "page unresponsive" dialog. To avoid blocking, you should offload heavy computations to <strong>Web Workers</strong> or break work into smaller chunks using setTimeout or requestAnimationFrame.

<pre><code>// This blocks the event loop for ~5 seconds
function blockingTask() {
  const start = Date.now();
  while (Date.now() - start &lt; 5000) {} // busy wait
  console.log("Done");
}

// setTimeout callback delayed until blockingTask finishes
setTimeout(() =&gt; console.log("Timeout"), 100);
blockingTask(); // UI frozen for 5 seconds

// Fix: use Web Worker or chunk work
function yieldToEventLoop(tasks) {
  if (tasks.length === 0) return;
  const task = tasks.shift();
  task();
  setTimeout(() =&gt; yieldToEventLoop(tasks), 0);
}</code></pre>

The chunking approach uses <strong>setTimeout</strong> to yield control back to the event loop between tasks, allowing the browser to process UI events and repaint. For CPU-intensive work, <strong>Web Workers</strong> are the preferred solution.`
                },
                {
                    q: "Predict the output of the following code:",
                    a: `This is a classic event loop interview question that tests your understanding of <strong>synchronous execution</strong>, <strong>microtasks</strong>, and <strong>macrotasks</strong>. The key is to follow the execution order: synchronous code runs first, then all microtasks are drained, then one macrotask is executed, and the cycle repeats. Pay attention to when new tasks are queued during microtask processing.

<pre><code>console.log("start");

setTimeout(() =&gt; console.log("timeout"), 0);

Promise.resolve()
  .then(() =&gt; {
    console.log("promise1");
    setTimeout(() =&gt; console.log("inner timeout"), 0);
  })
  .then(() =&gt; console.log("promise2"));

console.log("end");

// Output:
// "start"       — sync
// "end"         — sync
// "promise1"    — microtask
// "promise2"    — microtask (chained)
// "timeout"     — macrotask (queued first)
// "inner timeout" — macrotask (queued during microtask)</code></pre>

Notice that "inner timeout" runs last even though it was scheduled during the first microtask. This is because setTimeout always places its callback in the <strong>macrotask queue</strong>, and the "timeout" callback was already queued before it.`
                },
                {
                    q: "What is queueMicrotask() and how does it work?",
                    a: `<strong>queueMicrotask()</strong> is a global function that schedules a callback to run in the <strong>microtask queue</strong>, similar to Promise.resolve().then(fn) but more explicit and slightly more efficient. It is the recommended way to schedule microtasks when you do not need Promise semantics. Use it when you need code to run after the current synchronous task completes but before any macrotasks or rendering.

<pre><code>console.log("1");

queueMicrotask(() =&gt; console.log("2"));
setTimeout(() =&gt; console.log("3"), 0);
queueMicrotask(() =&gt; console.log("4"));

console.log("5");

// Output: 1, 5, 2, 4, 3
// Microtasks (queueMicrotask) run before macrotasks (setTimeout)

// Use case: batch DOM updates
let needsUpdate = false;
function scheduleUpdate() {
  if (!needsUpdate) {
    needsUpdate = true;
    queueMicrotask(() =&gt; { flushUpdates(); needsUpdate = false; });
  }
}</code></pre>

The batching pattern shown above is useful for <strong>coalescing multiple synchronous state changes</strong> into a single update. This avoids redundant DOM operations and is a common pattern in UI frameworks like React and Vue.`
                },
                {
                    q: "What is the difference between setTimeout and setInterval in the event loop?",
                    a: `<strong>setTimeout</strong> schedules a callback to run once after a specified delay, while <strong>setInterval</strong> schedules a callback to run repeatedly at the specified interval. Both place their callbacks in the macrotask queue. However, setInterval can cause problems if the callback takes longer than the interval — callbacks can stack up or be skipped depending on the browser implementation.

<pre><code>// setTimeout — runs once after delay
setTimeout(() =&gt; console.log("Once"), 1000);

// setInterval — runs repeatedly
let count = 0;
const id = setInterval(() =&gt; {
  count++;
  console.log("Tick:", count);
  if (count === 3) clearInterval(id);
}, 1000);
// Output: Tick: 1, Tick: 2, Tick: 3

// Better approach: recursive setTimeout for consistent intervals
function reliableInterval(fn, delay) {
  function tick() {
    fn();
    setTimeout(tick, delay);
  }
  setTimeout(tick, delay);
}</code></pre>

Using <strong>recursive setTimeout</strong> instead of setInterval guarantees a consistent delay between the end of one callback and the start of the next. With setInterval, the delay is measured from the start of each callback, which can lead to overlapping executions.`
                },
                {
                    q: "What is the Node.js event loop and how does it differ from the browser event loop?",
                    a: `The <strong>Node.js event loop</strong> is based on libuv and has multiple phases, unlike the browser's simpler two-queue model. Node.js processes tasks in a specific order: <strong>timers</strong>, <strong>pending callbacks</strong>, <strong>idle/prepare</strong>, <strong>poll</strong>, <strong>check</strong>, and <strong>close callbacks</strong>. Each phase has its own FIFO queue of callbacks. The browser event loop has just microtask and macrotask queues plus the rendering pipeline.

<pre><code>// Node.js specific: process.nextTick vs queueMicrotask
process.nextTick(() =&gt; console.log("nextTick"));
queueMicrotask(() =&gt; console.log("microtask"));
setTimeout(() =&gt; console.log("timeout"), 0);
setImmediate(() =&gt; console.log("immediate"));

// Output in Node.js:
// "nextTick"   — nextTick queue (highest priority)
// "microtask"  — microtask queue
// "timeout"    — timers phase
// "immediate"  — check phase

// Node.js event loop phases:
// 1. Timers (setTimeout, setInterval)
// 2. Pending callbacks (I/O callbacks)
// 3. Idle, prepare (internal)
// 4. Poll (incoming connections, data)
// 5. Check (setImmediate)
// 6. Close callbacks (socket.on("close"))</code></pre>

In Node.js, <strong>process.nextTick()</strong> has even higher priority than microtasks — it runs before any other microtask. The <strong>setImmediate()</strong> function is Node.js specific and runs in the check phase after I/O polling.`
                },
                {
                    q: "What is process.nextTick() and how does it differ from queueMicrotask()?",
                    a: `<strong>process.nextTick()</strong> is a Node.js-specific function that schedules a callback to run before any other microtask or I/O event. It has the <strong>highest priority</strong> among all async operations. <strong>queueMicrotask()</strong> runs after nextTick but before macrotasks. The key difference is priority — nextTick callbacks are processed from a separate queue that is drained before the microtask queue.

<pre><code>// Priority order demonstration
Promise.resolve().then(() =&gt; console.log("promise"));
queueMicrotask(() =&gt; console.log("microtask"));
process.nextTick(() =&gt; console.log("nextTick"));

// Output:
// "nextTick"   — highest priority
// "promise"    — microtask queue
// "microtask"  — microtask queue

// Danger: recursive nextTick can starve I/O
function starvation() {
  process.nextTick(starvation); // never yields to I/O!
}

// Safe alternative: use setImmediate for I/O-friendly deferral
function safe() {
  setImmediate(safe); // allows I/O between callbacks
}</code></pre>

Be cautious with recursive <strong>process.nextTick()</strong> calls as they can starve I/O operations. The microtask queue and nextTick queue are fully drained before the event loop continues, so infinite recursion in either will block everything.`
                },
                {
                    q: "What is the MutationObserver and where does it fit in the event loop?",
                    a: `<strong>MutationObserver</strong> is a Web API that watches for changes in the DOM tree and fires callbacks as <strong>microtasks</strong>. This means MutationObserver callbacks run with the same priority as Promise callbacks — after the current synchronous code but before any macrotasks or rendering. It replaced the older Mutation Events API which used macrotasks and was much slower.

<pre><code>const target = document.getElementById("myElement");

const observer = new MutationObserver((mutations) =&gt; {
  mutations.forEach((mutation) =&gt; {
    console.log("DOM changed:", mutation.type);
    console.log("Added:", mutation.addedNodes.length);
    console.log("Removed:", mutation.removedNodes.length);
  });
});

// Configure and start observing
observer.observe(target, {
  childList: true,     // watch for added/removed children
  attributes: true,    // watch for attribute changes
  subtree: true,       // watch entire subtree
  characterData: true  // watch for text content changes
});

// Later: stop observing
observer.disconnect();</code></pre>

MutationObserver batches multiple DOM changes into a single callback, making it very efficient. Since it runs as a <strong>microtask</strong>, you are guaranteed to see DOM changes before the browser repaints, which allows you to make additional modifications without causing visual flicker.`
                },
                {
                    q: "How do Web Workers interact with the event loop?",
                    a: `<strong>Web Workers</strong> run JavaScript in a separate background thread with their own event loop, independent of the main thread. They do not have access to the DOM and communicate with the main thread through a <strong>message passing</strong> system using postMessage() and the onmessage event handler. Messages are serialized using the structured clone algorithm and placed in the receiving thread's macrotask queue.

<pre><code>// main.js — main thread
const worker = new Worker("worker.js");

worker.postMessage({ data: [1, 2, 3, 4, 5] });

worker.onmessage = (event) =&gt; {
  console.log("Result from worker:", event.data);
};

worker.onerror = (error) =&gt; {
  console.error("Worker error:", error.message);
};

// worker.js — separate thread with own event loop
self.onmessage = (event) =&gt; {
  const numbers = event.data.data;
  // Heavy computation without blocking main thread
  const sum = numbers.reduce((a, b) =&gt; a + b, 0);
  self.postMessage(sum);
};</code></pre>

Each Worker has its own <strong>call stack, event loop, and memory space</strong>. This means heavy computations in a Worker do not block the main thread's event loop, keeping the UI responsive. However, data transfer between threads involves serialization which can be slow for large objects — use <strong>Transferable objects</strong> for better performance.`
                },
                {
                    q: "What is the difference between synchronous and asynchronous code in the event loop context?",
                    a: `<strong>Synchronous code</strong> runs directly on the call stack and blocks execution until it completes. <strong>Asynchronous code</strong> is delegated to Web APIs (browser) or libuv (Node.js), and when the async operation finishes, the callback is placed in the appropriate queue (microtask or macrotask) to be picked up by the event loop. JavaScript itself is single-threaded, but the runtime environment provides multithreaded capabilities for async operations.

<pre><code>// Synchronous — blocks the call stack
console.log("A");
const result = heavyComputation(); // blocks until done
console.log("B");
// Order: A, (wait...), B

// Asynchronous — does not block
console.log("A");
fetch("/api/data")
  .then(response =&gt; response.json())
  .then(data =&gt; console.log("Data:", data));
console.log("B");
// Order: A, B, (later...) Data: ...

// Common async patterns
// 1. Callbacks — setTimeout, event listeners
// 2. Promises — .then() / .catch()
// 3. Async/Await — syntactic sugar over Promises
// 4. Event emitters — Node.js pattern</code></pre>

The event loop bridges the gap between JavaScript's <strong>single-threaded</strong> execution model and the underlying multithreaded environment. While your JavaScript code runs on one thread, the browser or Node.js can handle network requests, file I/O, and timers on separate threads.`
                },
                {
                    q: "What are the phases of the browser rendering pipeline in relation to the event loop?",
                    a: `The browser's <strong>rendering pipeline</strong> is interleaved with the event loop. After processing a macrotask and draining the microtask queue, the browser may run the rendering pipeline which includes: <strong>Style calculation</strong> (computing CSS styles), <strong>Layout</strong> (calculating element positions and sizes), <strong>Paint</strong> (drawing pixels), and <strong>Compositing</strong> (combining layers). The browser aims to do this at 60fps (~16.7ms per frame), but rendering only occurs if there are visual changes.

<pre><code>// The event loop iteration with rendering:
// 1. Pick one macrotask from queue
// 2. Execute it on the call stack
// 3. Drain ALL microtasks
// 4. If ~16.7ms has passed since last render:
//    a. Run requestAnimationFrame callbacks
//    b. Style calculation
//    c. Layout
//    d. Paint
//    e. Composite
// 5. Go to step 1

// Forced synchronous layout (layout thrashing)
// BAD — triggers layout multiple times
for (let i = 0; i &lt; 100; i++) {
  const height = element.offsetHeight; // forces layout
  element.style.height = height + 1 + "px"; // invalidates layout
}

// GOOD — batch reads and writes separately
const height = element.offsetHeight; // single read
for (let i = 0; i &lt; 100; i++) {
  element.style.height = height + i + "px"; // batch writes
}</code></pre>

Avoid <strong>layout thrashing</strong> (forced synchronous layout) by batching DOM reads before writes. Reading layout properties like offsetHeight or getBoundingClientRect forces the browser to recalculate layout immediately. Tools like <strong>requestAnimationFrame</strong> help organize DOM updates efficiently.`
                },
                {
                    q: "What is the Structured Clone Algorithm used in message passing?",
                    a: `The <strong>Structured Clone Algorithm</strong> is used to serialize and deserialize objects when passing data between different execution contexts such as Web Workers, postMessage between windows, IndexedDB storage, and the History API. It can clone most JavaScript types including objects, arrays, Maps, Sets, Dates, RegExps, Blobs, and ArrayBuffers. However, it <strong>cannot clone</strong> functions, DOM nodes, Error objects, or property descriptors.

<pre><code>// Structured clone with Web Worker
const worker = new Worker("worker.js");
const data = {
  name: "John",
  scores: [90, 85, 92],
  metadata: new Map([["key", "value"]]),
  date: new Date(),
  pattern: /test/gi
};
worker.postMessage(data); // all types cloned correctly

// Manual structured clone (ES2022+)
const clone = structuredClone(data);
clone.scores.push(100); // does not affect original

// What CANNOT be cloned:
// Functions, Symbols, DOM nodes, WeakMap, WeakSet
// Property getters/setters, prototype chain

// Transferable objects — zero-copy transfer
const buffer = new ArrayBuffer(1024);
worker.postMessage(buffer, [buffer]);
// buffer is now empty in main thread (transferred, not copied)</code></pre>

For large data, use <strong>Transferable objects</strong> (ArrayBuffer, MessagePort, OffscreenCanvas) to transfer ownership instead of copying. This is a zero-copy operation that is much faster than cloning but makes the original reference unusable.`
                },
                {
                    q: "How do you debug event loop issues and identify performance bottlenecks?",
                    a: `Debugging event loop issues requires understanding where time is being spent. Use the browser's <strong>Performance tab</strong> to record and analyze task execution, identify long tasks (over 50ms), and visualize the rendering pipeline. The <strong>Performance.now()</strong> API provides high-resolution timestamps for measuring code execution time. Chrome DevTools also marks long tasks with red corners in the Performance panel.

<pre><code>// Measure execution time
const start = performance.now();
expensiveOperation();
const duration = performance.now() - start;
console.log("Took " + duration.toFixed(2) + "ms");

// Using Performance Observer to detect long tasks
const observer = new PerformanceObserver((list) =&gt; {
  for (const entry of list.getEntries()) {
    if (entry.duration &gt; 50) {
      console.warn("Long task detected:", entry.duration + "ms");
    }
  }
});
observer.observe({ entryTypes: ["longtask"] });

// Break up long tasks
async function processLargeArray(items) {
  const CHUNK_SIZE = 100;
  for (let i = 0; i &lt; items.length; i += CHUNK_SIZE) {
    const chunk = items.slice(i, i + CHUNK_SIZE);
    processChunk(chunk);
    // Yield to event loop between chunks
    await new Promise(resolve =&gt; setTimeout(resolve, 0));
  }
}</code></pre>

The <strong>Long Tasks API</strong> helps identify tasks that take more than 50ms and could cause jank. Breaking long tasks into smaller chunks with setTimeout or requestIdleCallback allows the browser to handle user input and rendering between chunks, keeping the application responsive.`
                },
                {
                    q: "What is requestIdleCallback and when should you use it?",
                    a: `<strong>requestIdleCallback()</strong> schedules a callback to run during the browser's idle periods — time gaps when the event loop has no pending tasks and the next frame is not yet due. It is ideal for <strong>low-priority</strong> work like analytics, prefetching, or background data processing. The callback receives a deadline object that tells you how much idle time remains in the current frame.

<pre><code>// Basic usage with deadline
requestIdleCallback((deadline) =&gt; {
  while (deadline.timeRemaining() &gt; 0) {
    // Do low-priority work while there is idle time
    processNextItem();
  }
  // If more work remains, schedule another idle callback
  if (hasMoreWork()) {
    requestIdleCallback(processWork);
  }
});

// With timeout — ensures callback runs within specified time
requestIdleCallback(doWork, { timeout: 2000 });
// Will run during idle time OR after 2 seconds (whichever first)

// Priority comparison:
// 1. Sync code (call stack)
// 2. Microtasks (Promise, queueMicrotask)
// 3. requestAnimationFrame (before paint)
// 4. Macrotasks (setTimeout, events)
// 5. requestIdleCallback (idle time only)</code></pre>

Never perform DOM mutations inside <strong>requestIdleCallback</strong> because it runs outside the rendering cycle. Instead, collect the changes and apply them in a <strong>requestAnimationFrame</strong> callback. Note that requestIdleCallback is not available in all browsers — Safari added support only recently.`
                }
            ]
        },
        {
            id: "es6-features",
            title: "ES6+ Features",
            icon: "bi-stars",
            questions: [
                {
                    q: "What are the key differences between let/const and var?",
                    a: `<strong>let</strong> and <strong>const</strong> are block-scoped, meaning they are only accessible within the nearest enclosing curly braces. <strong>var</strong> is function-scoped and accessible throughout the entire function. let and const have a <strong>Temporal Dead Zone (TDZ)</strong> — they cannot be accessed before their declaration line, causing a ReferenceError. var is hoisted to the top of its scope and initialized with undefined, so it can be used before its declaration without errors.

<pre><code>// Block scoping
{ let a = 1; const b = 2; var c = 3; }
// console.log(a); // ReferenceError
// console.log(b); // ReferenceError
console.log(c);    // 3

// TDZ
console.log(x); // undefined (var hoisted)
var x = 5;
// console.log(y); // ReferenceError (TDZ)
let y = 5;</code></pre>

Use <strong>const</strong> by default for values that should not be reassigned, <strong>let</strong> when reassignment is needed, and avoid <strong>var</strong> in modern code. Note that const only prevents reassignment of the variable binding — object properties and array elements can still be modified.`
                },
                {
                    q: "How do template literals work?",
                    a: `Template literals use backticks and support <strong>string interpolation</strong> with <code>\${expression}</code>, <strong>multi-line strings</strong>, and <strong>tagged templates</strong> for custom string processing.

<pre><code>const name = "Alice";
const age = 30;

// Interpolation
const greeting = \&#96;Hello, \${name}! You are \${age} years old.\&#96;;

// Multi-line
const html = \&#96;
  &lt;div&gt;
    &lt;h1&gt;\${name}&lt;/h1&gt;
  &lt;/div&gt;
\&#96;;

// Tagged template
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =&gt;
    \&#96;\${result}\${str}&lt;b&gt;\${values[i] || ""}&lt;/b&gt;\&#96;, "");
}
highlight\&#96;\${name} is \${age}\&#96;; // "&lt;b&gt;Alice&lt;/b&gt; is &lt;b&gt;30&lt;/b&gt;"</code></pre>`
                },
                {
                    q: "How does destructuring work in JavaScript?",
                    a: `<strong>Destructuring</strong> is a syntax that extracts values from arrays or properties from objects into distinct variables in a single statement. It supports <strong>default values</strong> for missing properties, <strong>renaming</strong> variables, <strong>nested extraction</strong> for deeply nested structures, and <strong>rest elements</strong> to collect remaining items. Destructuring works in variable declarations, function parameters, and assignment expressions.

<pre><code>// Array destructuring
const [a, b, ...rest] = [1, 2, 3, 4];
// a=1, b=2, rest=[3,4]

// Object destructuring
const { name, age, role = "user" } = { name: "Alice", age: 30 };
// name="Alice", age=30, role="user" (default)

// Renaming
const { name: userName } = { name: "Bob" };
// userName="Bob"

// Nested
const { address: { city } } = { address: { city: "NYC" } };
// city="NYC"

// Function parameters
function greet({ name, age }) {
  return name + ", " + age;
}</code></pre>

Destructuring makes code more readable and eliminates the need for multiple variable assignments. It is especially useful in <strong>function parameters</strong> to extract only the needed properties from configuration objects, and in <strong>import statements</strong> to selectively import module exports.`
                },
                {
                    q: "What is the spread operator and how is it used?",
                    a: `The <strong>spread operator</strong> (...) expands iterables (arrays, strings, objects) into individual elements. It is used for <strong>copying</strong> arrays and objects (shallow copy), <strong>merging</strong> multiple arrays or objects together, <strong>passing array elements</strong> as individual function arguments, and <strong>converting</strong> iterables to arrays. The spread operator creates a new reference, making it useful for immutable data patterns.

<pre><code>// Arrays
const arr = [1, 2, 3];
const copy = [...arr];          // [1, 2, 3]
const merged = [...arr, 4, 5];  // [1, 2, 3, 4, 5]

// Objects
const obj = { a: 1, b: 2 };
const extended = { ...obj, c: 3 };     // { a: 1, b: 2, c: 3 }
const overridden = { ...obj, b: 99 };  // { a: 1, b: 99 }

// Function arguments
Math.max(...arr); // 3</code></pre>

The spread operator performs a <strong>shallow copy</strong>, meaning nested objects and arrays still share the same reference. For deep copying, use <strong>structuredClone()</strong> or JSON.parse(JSON.stringify()). When spreading objects, later properties override earlier ones with the same key.`
                },
                {
                    q: "What are Map and Set in JavaScript?",
                    a: `<strong>Map</strong> is a collection of key-value pairs where keys can be <strong>any type</strong> including objects, functions, and primitives — unlike plain objects where keys are always strings or symbols. <strong>Set</strong> is a collection that stores only <strong>unique values</strong> of any type, automatically removing duplicates. Both Map and Set maintain <strong>insertion order</strong> and provide a size property, making them more predictable than plain objects for collection operations.

<pre><code>// Map
const map = new Map();
map.set("name", "Alice");
map.set(42, "number key");
map.set(true, "boolean key");
console.log(map.get(42));    // "number key"
console.log(map.size);      // 3

// Set
const set = new Set([1, 2, 2, 3, 3]);
console.log([...set]);       // [1, 2, 3] (duplicates removed)
set.add(4);
console.log(set.has(2));     // true
console.log(set.size);      // 4</code></pre>

Map is preferred over plain objects when you need <strong>non-string keys</strong>, need to know the exact number of entries, or need guaranteed iteration order. Set is commonly used for <strong>removing duplicates</strong> from arrays and for fast membership checks with O(1) lookup time.`
                },
                {
                    q: "What are WeakMap and WeakSet?",
                    a: `<strong>WeakMap</strong> and <strong>WeakSet</strong> are specialized collections that hold <strong>weak references</strong> to objects, allowing entries to be garbage collected when there are no other references to the key (WeakMap) or value (WeakSet). Keys in WeakMap and values in WeakSet must be <strong>objects</strong> — primitives are not allowed. They are <strong>not iterable</strong> and have no size property, making them unsuitable for general-purpose collection use but ideal for metadata storage.

<pre><code>// WeakMap — keys must be objects
const wm = new WeakMap();
let obj = { name: "Alice" };
wm.set(obj, "metadata");
console.log(wm.get(obj)); // "metadata"
obj = null; // entry can be garbage collected

// WeakSet — values must be objects
const ws = new WeakSet();
let elem = document.querySelector("#btn");
ws.add(elem);
console.log(ws.has(elem)); // true

// Use case: track visited objects without preventing GC
// Use case: store private data associated with objects</code></pre>

WeakMap is commonly used to <strong>associate private data</strong> with DOM elements or class instances without preventing garbage collection. WeakSet is useful for <strong>tracking objects</strong> (e.g., marking visited nodes in a graph traversal) without creating memory leaks.`
                },
                {
                    q: "How does for...of differ from for...in?",
                    a: `<strong>for...of</strong> iterates over the <strong>values</strong> of iterable objects like arrays, strings, Maps, Sets, and generators. <strong>for...in</strong> iterates over the <strong>enumerable property keys</strong> (names) of an object, including inherited properties from the prototype chain. As a general rule, use for...of for arrays and iterables, and for...in for object properties. Using for...in on arrays is discouraged because it iterates string indices and may include inherited properties.

<pre><code>const arr = ["a", "b", "c"];

// for...of — iterates values
for (const val of arr) console.log(val);
// "a", "b", "c"

// for...in — iterates keys (indices for arrays)
for (const key in arr) console.log(key);
// "0", "1", "2"

// for...of with Map
const map = new Map([["x", 1], ["y", 2]]);
for (const [key, val] of map) console.log(key, val);
// "x" 1, "y" 2</code></pre>

for...of works with any object that implements the <strong>Symbol.iterator</strong> protocol. Plain objects are not iterable by default, so for...of will throw a TypeError on them. Use <strong>Object.entries()</strong> to make object key-value pairs iterable with for...of.`
                },
                {
                    q: "What is Symbol and what are well-known Symbols?",
                    a: `<strong>Symbol</strong> is a primitive data type that creates a guaranteed <strong>unique identifier</strong>. Every Symbol() call returns a distinct value, even if given the same description. <strong>Well-known Symbols</strong> are built-in symbols provided by JavaScript that allow you to customize object behavior. The most important ones are <strong>Symbol.iterator</strong> (making objects iterable), <strong>Symbol.toPrimitive</strong> (custom type conversion), and <strong>Symbol.hasInstance</strong> (customizing instanceof behavior).

<pre><code>// Custom iterator
const range = {
  from: 1, to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        return current &lt;= last
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
};
console.log([...range]); // [1, 2, 3, 4, 5]</code></pre>

Symbols are not enumerable in for...in loops or Object.keys(), making them useful for <strong>hidden properties</strong> that do not interfere with normal object operations. Use <strong>Symbol.for()</strong> to create globally shared symbols that can be accessed by key across different parts of your application.`
                },
                {
                    q: "How does optional chaining (?.) work?",
                    a: `<strong>Optional chaining</strong> (?.) is an operator that short-circuits and returns <strong>undefined</strong> if the value before ?. is null or undefined, instead of throwing a TypeError. It works with <strong>property access</strong> (obj?.prop), <strong>method calls</strong> (obj?.method()), and <strong>bracket notation</strong> (obj?.[expr]). This eliminates the need for verbose null-checking chains and makes code much cleaner when accessing deeply nested properties.

<pre><code>const user = {
  name: "Alice",
  address: { city: "NYC" }
};

console.log(user.address?.city);     // "NYC"
console.log(user.phone?.number);     // undefined (no error)
console.log(user.greet?.());         // undefined (method)
console.log(user.tags?.[0]);         // undefined (bracket)

// Without optional chaining:
// user.phone.number — TypeError: Cannot read property of undefined</code></pre>

Optional chaining only checks for <strong>null</strong> and <strong>undefined</strong> — it does not short-circuit on other falsy values like 0, false, or empty string. It is commonly combined with the <strong>nullish coalescing operator</strong> (??) to provide default values.`
                },
                {
                    q: "What is the nullish coalescing operator (??)?",
                    a: `The <strong>nullish coalescing operator</strong> (??) returns the right-hand operand only when the left-hand operand is <strong>null</strong> or <strong>undefined</strong>. This is different from the logical OR operator (||) which returns the right-hand operand for any <strong>falsy</strong> value including 0, empty string, false, and NaN. The ?? operator is especially useful when 0, empty string, or false are valid values that should not be replaced by a default.

<pre><code>const a = null ?? "default";    // "default"
const b = undefined ?? "default"; // "default"
const c = 0 ?? "default";       // 0 (kept!)
const d = "" ?? "default";      // "" (kept!)
const e = false ?? "default";   // false (kept!)

// Compare with ||
const f = 0 || "default";       // "default" (0 is falsy)
const g = "" || "default";      // "default" ("" is falsy)

// Combine with optional chaining
const city = user?.address?.city ?? "Unknown";</code></pre>

The ?? operator cannot be directly combined with && or || without parentheses — JavaScript requires explicit grouping to avoid ambiguity. Use <strong>??=</strong> (nullish coalescing assignment) to assign a default value only if the variable is currently null or undefined.`
                },
                {
                    q: "What are arrow functions and how do they differ from regular functions?",
                    a: `<strong>Arrow functions</strong> provide a shorter syntax for writing function expressions using the => syntax. They have several key differences from regular functions: they do not have their own <strong>this</strong> binding (they inherit this from the enclosing lexical scope), they cannot be used as <strong>constructors</strong> (no new keyword), they do not have the <strong>arguments</strong> object, and they cannot be used as <strong>generator functions</strong>. These differences make arrow functions ideal for callbacks and functional programming patterns.

<pre><code>// Syntax variations
const add = (a, b) =&gt; a + b;           // implicit return
const square = x =&gt; x * x;             // single param, no parens
const greet = () =&gt; "Hello!";          // no params
const getObj = () =&gt; ({ key: "val" }); // return object literal

// this binding difference
const obj = {
  name: "Alice",
  regular: function() { return this.name; },
  arrow: () =&gt; this.name // inherits outer this (window/undefined)
};
console.log(obj.regular()); // "Alice"
console.log(obj.arrow());   // undefined (not obj's this)

// Arrow in callbacks preserves outer this
function Timer() {
  this.seconds = 0;
  setInterval(() =&gt; this.seconds++, 1000); // this = Timer instance
}</code></pre>

Because arrow functions inherit <strong>this</strong> from their surrounding scope, they are perfect for callbacks inside methods, event handlers in classes, and array method chains. However, avoid using them as object methods or when you need access to the arguments object.`
                },
                {
                    q: "What are default parameters in ES6?",
                    a: `<strong>Default parameters</strong> allow you to specify fallback values for function parameters when no argument is passed or when <strong>undefined</strong> is passed. Default values are evaluated at call time (not at function definition time), which means you can use expressions, function calls, or even reference earlier parameters as defaults. This replaced the older pattern of using || for default values, which had issues with falsy values.

<pre><code>// Basic defaults
function greet(name = "Guest", greeting = "Hello") {
  return greeting + ", " + name + "!";
}
greet();            // "Hello, Guest!"
greet("Alice");     // "Hello, Alice!"
greet("Bob", "Hi"); // "Hi, Bob!"

// Expressions as defaults
function createId(prefix = "id", num = Math.random()) {
  return prefix + "_" + num;
}

// Reference earlier parameters
function createElement(tag, content, className = tag + "-default") {
  return { tag, content, className };
}
createElement("div", "Hello"); // { tag: "div", content: "Hello", className: "div-default" }

// Only undefined triggers default (not null, 0, "")
function test(val = "default") { return val; }
test(undefined); // "default"
test(null);      // null (not replaced)
test(0);         // 0 (not replaced)</code></pre>

Default parameters work with <strong>destructuring</strong> for powerful patterns like function configuration objects. Note that only <strong>undefined</strong> triggers defaults — null, 0, false, and empty string are all valid values that will not be replaced.`
                },
                {
                    q: "What are rest parameters and how do they work?",
                    a: `<strong>Rest parameters</strong> (...args) collect all remaining arguments into a real <strong>Array</strong> instance. Unlike the legacy arguments object, rest parameters provide a true array with all array methods available. Rest parameters must be the last parameter in the function definition. They replaced the need for the arguments object in most use cases and work in both regular and arrow functions.

<pre><code>// Collect remaining arguments
function sum(first, ...rest) {
  console.log(first);  // 1
  console.log(rest);   // [2, 3, 4, 5]
  return rest.reduce((total, n) =&gt; total + n, first);
}
sum(1, 2, 3, 4, 5); // 15

// Rest vs arguments object
function oldWay() {
  // arguments is array-like, not a real array
  const args = Array.from(arguments);
  return args.join(", ");
}

function newWay(...args) {
  // args is a real Array
  return args.join(", ");
}

// Rest in destructuring
const [head, ...tail] = [1, 2, 3, 4];
// head = 1, tail = [2, 3, 4]

const { name, ...others } = { name: "Alice", age: 30, role: "dev" };
// name = "Alice", others = { age: 30, role: "dev" }</code></pre>

Rest parameters create a cleaner API than the arguments object because they are <strong>explicitly named</strong>, work with arrow functions, and provide a real Array. The arguments object is still available in regular functions but is discouraged in modern JavaScript.`
                },
                {
                    q: "What are JavaScript classes and how do they work?",
                    a: `<strong>Classes</strong> in JavaScript are syntactic sugar over the existing prototype-based inheritance. They provide a cleaner syntax for creating constructor functions and setting up the prototype chain. A class has a <strong>constructor</strong> method for initialization, <strong>instance methods</strong> added to the prototype, <strong>static methods</strong> on the class itself, and <strong>getter/setter</strong> accessors. Classes support <strong>extends</strong> for inheritance and <strong>super</strong> to call parent methods.

<pre><code>class Animal {
  constructor(name) {
    this.name = name;
  }

  speak() {
    return this.name + " makes a sound";
  }

  static create(name) {
    return new Animal(name);
  }

  get info() {
    return "Animal: " + this.name;
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // must call super before using this
    this.breed = breed;
  }

  speak() {
    return this.name + " barks";
  }
}

const dog = new Dog("Rex", "Labrador");
console.log(dog.speak()); // "Rex barks"
console.log(dog.info);    // "Animal: Rex"</code></pre>

Classes are not hoisted like function declarations — you must define a class before using it. Modern JavaScript also supports <strong>private fields</strong> (#field), <strong>private methods</strong> (#method()), and <strong>static initialization blocks</strong> (static {}) for more encapsulation.`
                },
                {
                    q: "What are private class fields and methods in JavaScript?",
                    a: `<strong>Private class fields</strong> use the # prefix to make properties and methods truly private — they cannot be accessed or modified from outside the class. Before this feature, developers used conventions (underscore prefix) or closures to simulate privacy. Private fields provide <strong>hard privacy</strong> enforced by the language itself, unlike TypeScript's private keyword which is only compile-time enforcement.

<pre><code>class BankAccount {
  #balance = 0;        // private field
  #owner;              // private field

  constructor(owner, initialBalance) {
    this.#owner = owner;
    this.#balance = initialBalance;
  }

  #validate(amount) {  // private method
    return amount &gt; 0 &amp;&amp; amount &lt;= this.#balance;
  }

  withdraw(amount) {
    if (this.#validate(amount)) {
      this.#balance -= amount;
      return amount;
    }
    return 0;
  }

  get balance() {
    return this.#balance;
  }
}

const account = new BankAccount("Alice", 1000);
console.log(account.balance);    // 1000
account.withdraw(200);
// account.#balance;  // SyntaxError: Private field
// account.#validate; // SyntaxError: Private method</code></pre>

Private fields are truly private — they are not accessible through reflection, Object.keys(), JSON.stringify(), or even using bracket notation. Use <strong>static #field</strong> for private static properties shared across all instances of the class.`
                },
                {
                    q: "What are iterators and generators in JavaScript?",
                    a: `An <strong>iterator</strong> is any object that implements the <strong>iterator protocol</strong> by having a next() method that returns objects with value and done properties. A <strong>generator</strong> is a special function declared with function* that can be paused and resumed using the <strong>yield</strong> keyword. Generators automatically implement the iterator protocol, making them the easiest way to create custom iterables. They are lazy — values are computed only when requested.

<pre><code>// Generator function
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}

const fib = fibonacci();
console.log(fib.next()); // { value: 0, done: false }
console.log(fib.next()); // { value: 1, done: false }
console.log(fib.next()); // { value: 1, done: false }
console.log(fib.next()); // { value: 2, done: false }

// Generator for range
function* range(start, end, step = 1) {
  for (let i = start; i &lt;= end; i += step) {
    yield i;
  }
}

console.log([...range(1, 5)]);    // [1, 2, 3, 4, 5]
console.log([...range(0, 10, 2)]); // [0, 2, 4, 6, 8, 10]

// yield* delegates to another generator
function* concat(...iterables) {
  for (const it of iterables) yield* it;
}
console.log([...concat([1, 2], [3, 4])]); // [1, 2, 3, 4]</code></pre>

Generators are powerful for <strong>lazy evaluation</strong>, infinite sequences, asynchronous iteration, and implementing complex iteration patterns. The <strong>yield*</strong> expression delegates to another iterable or generator. Generators can also receive values via next(value), enabling two-way communication.`
                },
                {
                    q: "What are Proxy and Reflect in JavaScript?",
                    a: `<strong>Proxy</strong> creates a wrapper around an object that intercepts and customizes fundamental operations like property access, assignment, function invocation, and more using <strong>handler traps</strong>. <strong>Reflect</strong> provides static methods that mirror the Proxy traps, giving you a clean way to perform the default behavior. Together, they enable powerful patterns like validation, logging, access control, and reactive programming.

<pre><code>// Validation proxy
const validator = {
  set(target, prop, value) {
    if (prop === "age" &amp;&amp; typeof value !== "number") {
      throw new TypeError("Age must be a number");
    }
    if (prop === "age" &amp;&amp; (value &lt; 0 || value &gt; 150)) {
      throw new RangeError("Invalid age");
    }
    return Reflect.set(target, prop, value);
  },
  get(target, prop) {
    if (!(prop in target)) {
      throw new ReferenceError("Property " + prop + " does not exist");
    }
    return Reflect.get(target, prop);
  }
};

const person = new Proxy({}, validator);
person.age = 25;     // OK
// person.age = "old"; // TypeError: Age must be a number
// person.age = -5;    // RangeError: Invalid age

// Logging proxy
function createLogger(obj) {
  return new Proxy(obj, {
    get(target, prop) {
      console.log("GET " + String(prop));
      return Reflect.get(target, prop);
    },
    set(target, prop, value) {
      console.log("SET " + String(prop) + " = " + value);
      return Reflect.set(target, prop, value);
    }
  });
}</code></pre>

Proxy is used in frameworks like <strong>Vue 3</strong> for reactivity and <strong>MobX</strong> for observable state. Common traps include get, set, has (in operator), deleteProperty, apply (function calls), and construct (new operator). Always use Reflect methods inside traps for correct default behavior.`
                },
                {
                    q: "What are tagged template literals and how are they used?",
                    a: `<strong>Tagged templates</strong> allow you to process template literal strings through a function. The tag function receives the string segments as an array and the interpolated values as separate arguments. This enables powerful use cases like <strong>SQL sanitization</strong>, <strong>internationalization</strong>, <strong>CSS-in-JS</strong> (styled-components), and <strong>custom DSLs</strong>. The raw string content is available via strings.raw, which includes escape sequences unprocessed.

<pre><code>// Safe HTML escaping
function safeHTML(strings, ...values) {
  const escaped = values.map(val =&gt;
    String(val)
      .replace(/&amp;/g, "&amp;amp;")
      .replace(/&lt;/g, "&amp;lt;")
      .replace(/&gt;/g, "&amp;gt;")
  );
  return strings.reduce((result, str, i) =&gt;
    result + str + (escaped[i] || ""), "");
}

const userInput = "&lt;script&gt;alert('xss')&lt;/script&gt;";
const safe = safeHTML\&#96;User said: \${userInput}\&#96;;
// "User said: &amp;lt;script&amp;gt;alert('xss')&amp;lt;/script&amp;gt;"

// Styled-components pattern
function css(strings, ...values) {
  return strings.reduce((result, str, i) =&gt;
    result + str + (values[i] || ""), "");
}

const color = "red";
const styles = css\&#96;
  .button {
    background: \${color};
    padding: 10px;
  }
\&#96;;</code></pre>

Tagged templates are the foundation of <strong>styled-components</strong>, <strong>lit-html</strong>, and <strong>graphql-tag</strong> libraries. The strings array has a special <strong>raw</strong> property that preserves backslashes and escape sequences, useful for building regex or file paths.`
                },
                {
                    q: "What are the latest ES2022 and ES2023 features?",
                    a: `Recent ECMAScript versions introduced several important features. <strong>ES2022</strong> brought class fields, private methods, top-level await, Object.hasOwn(), Array.at(), and error cause. <strong>ES2023</strong> added array methods that return new copies instead of mutating, Hashbang grammar, and WeakRef improvements. These features modernize JavaScript and solve long-standing issues in the language.

<pre><code>// Array.at() — negative indexing (ES2022)
const arr = [1, 2, 3, 4, 5];
console.log(arr.at(-1));  // 5 (last element)
console.log(arr.at(-2));  // 4

// Object.hasOwn() — safer hasOwnProperty (ES2022)
const obj = { name: "Alice" };
console.log(Object.hasOwn(obj, "name"));      // true
console.log(Object.hasOwn(obj, "toString"));  // false

// Error cause (ES2022)
try {
  connectToDatabase();
} catch (err) {
  throw new Error("Connection failed", { cause: err });
}

// Array copy methods (ES2023) — non-mutating
const sorted = arr.toSorted((a, b) =&gt; b - a);  // [5, 4, 3, 2, 1]
const reversed = arr.toReversed();               // [5, 4, 3, 2, 1]
const spliced = arr.toSpliced(1, 1, 99);         // [1, 99, 3, 4, 5]
const changed = arr.with(0, 100);                // [100, 2, 3, 4, 5]
// Original arr is unchanged: [1, 2, 3, 4, 5]

// structuredClone (ES2022) — deep copy
const deep = structuredClone({ a: { b: [1, 2] } });</code></pre>

The <strong>toSorted()</strong>, <strong>toReversed()</strong>, <strong>toSpliced()</strong>, and <strong>with()</strong> methods are immutable alternatives to sort(), reverse(), splice(), and bracket assignment. They return new arrays without modifying the original, making them perfect for React state updates and functional programming.`
                }
            ]
        },
        {
            id: "array-methods",
            title: "Array Methods",
            icon: "bi-list-ol",
            questions: [
                {
                    q: "How does Array.prototype.map() work?",
                    a: `<strong>map()</strong> creates a <strong>new array</strong> by calling a provided callback function on every element of the original array. It does not mutate the original array and always returns an array of the same length. The callback receives three arguments: the <strong>current element</strong>, the <strong>index</strong>, and the <strong>original array</strong>. map() is one of the most commonly used array methods in JavaScript, especially for transforming data in React components.

<pre><code>const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n =&gt; n * 2);
console.log(doubled); // [2, 4, 6, 8]

// With index
const indexed = ["a", "b", "c"].map((val, i) =&gt; i + ":" + val);
console.log(indexed); // ["0:a", "1:b", "2:c"]

// Transforming objects
const users = [{ name: "Alice" }, { name: "Bob" }];
const names = users.map(u =&gt; u.name);
console.log(names); // ["Alice", "Bob"]</code></pre>

map() should be used only for <strong>transformation</strong> — when you need a new array of transformed values. If you just need side effects, use <strong>forEach()</strong> instead. Never ignore the return value of map() as it is wasteful to create an unused array.`
                },
                {
                    q: "How does Array.prototype.filter() work?",
                    a: `<strong>filter()</strong> creates a <strong>new array</strong> containing only the elements that pass a test function (return a truthy value). It does not mutate the original array and may return an array shorter than the original, or even an empty array if no elements match. The callback receives the same three arguments as map(): current element, index, and the original array.

<pre><code>const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(n =&gt; n % 2 === 0);
console.log(evens); // [2, 4, 6]

// Filter objects
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Carol", active: true }
];
const active = users.filter(u =&gt; u.active);
console.log(active); // [{ name: "Alice", ... }, { name: "Carol", ... }]

// Remove falsy values
const mixed = [0, "hello", null, 42, "", undefined];
const truthy = mixed.filter(Boolean);
console.log(truthy); // ["hello", 42]</code></pre>

Passing <strong>Boolean</strong> as the callback is a common trick to remove all falsy values (null, undefined, 0, "", false, NaN) from an array. filter() is often chained with map() to first select elements and then transform them.`
                },
                {
                    q: "How does Array.prototype.reduce() work?",
                    a: `<strong>reduce()</strong> executes a <strong>reducer function</strong> on each element of the array, accumulating a single result value. The callback receives four arguments: <strong>accumulator</strong> (the running total), <strong>currentValue</strong>, <strong>index</strong>, and <strong>array</strong>. The second argument to reduce() is the <strong>initial value</strong> for the accumulator. Always provide an initial value to avoid unexpected behavior with empty arrays and mixed types.

<pre><code>const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, n) =&gt; acc + n, 0);
console.log(sum); // 10

// Group by property
const items = [
  { type: "fruit", name: "apple" },
  { type: "veggie", name: "carrot" },
  { type: "fruit", name: "banana" }
];
const grouped = items.reduce((acc, item) =&gt; {
  (acc[item.type] ??= []).push(item.name);
  return acc;
}, {});
// { fruit: ["apple", "banana"], veggie: ["carrot"] }</code></pre>

reduce() is very versatile — it can implement map, filter, groupBy, flatten, and many other operations. However, for readability, prefer <strong>dedicated methods</strong> (map, filter) when they exist. Use reduce() for <strong>aggregation</strong> tasks like summing, grouping, or building complex objects.`
                },
                {
                    q: "How do find() and findIndex() work?",
                    a: `<strong>find()</strong> returns the <strong>first element</strong> in the array that satisfies the provided test function, or <strong>undefined</strong> if no element matches. <strong>findIndex()</strong> returns the <strong>index</strong> of the first matching element, or <strong>-1</strong> if none is found. Both methods stop iterating as soon as a match is found, making them more efficient than filter() when you only need one result. ES2023 added <strong>findLast()</strong> and <strong>findLastIndex()</strong> which search from the end.

<pre><code>const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Carol" }
];

const user = users.find(u =&gt; u.id === 2);
console.log(user); // { id: 2, name: "Bob" }

const index = users.findIndex(u =&gt; u.id === 2);
console.log(index); // 1

const missing = users.find(u =&gt; u.id === 99);
console.log(missing); // undefined</code></pre>

find() returns a <strong>reference</strong> to the original object, not a copy. Modifying the returned object will modify the array element. Use <strong>findLast()</strong> and <strong>findLastIndex()</strong> when you need the last match instead of the first.`
                },
                {
                    q: "How do some() and every() work?",
                    a: `<strong>some()</strong> returns true if <strong>at least one</strong> element in the array passes the test function. <strong>every()</strong> returns true only if <strong>all</strong> elements pass the test. Both methods <strong>short-circuit</strong> for performance — some() stops at the first truthy result, every() stops at the first falsy result. On an empty array, some() returns false and every() returns true (vacuous truth).

<pre><code>const numbers = [1, 2, 3, 4, 5];

console.log(numbers.some(n =&gt; n &gt; 4));  // true
console.log(numbers.some(n =&gt; n &gt; 10)); // false

console.log(numbers.every(n =&gt; n &gt; 0));  // true
console.log(numbers.every(n =&gt; n &gt; 3));  // false

// Practical use
const users = [
  { name: "Alice", verified: true },
  { name: "Bob", verified: false }
];
const allVerified = users.every(u =&gt; u.verified); // false
const anyVerified = users.some(u =&gt; u.verified);  // true</code></pre>

some() and every() are more readable than using filter().length > 0 or filter().length === arr.length for boolean checks. They are also more <strong>performant</strong> because they stop iterating as soon as the answer is determined.`
                },
                {
                    q: "How do flat() and flatMap() work?",
                    a: `<strong>flat(depth)</strong> creates a new array with all sub-array elements concatenated into it recursively up to the specified depth (default 1). <strong>flatMap()</strong> first maps each element using a mapping function, then flattens the result by one level — it is equivalent to calling map() followed by flat(1) but is more efficient. Use Infinity as the depth argument to completely flatten deeply nested arrays.

<pre><code>// flat()
const nested = [1, [2, 3], [4, [5, 6]]];
console.log(nested.flat());    // [1, 2, 3, 4, [5, 6]]
console.log(nested.flat(2));   // [1, 2, 3, 4, 5, 6]
console.log(nested.flat(Infinity)); // [1, 2, 3, 4, 5, 6]

// flatMap()
const sentences = ["hello world", "foo bar"];
const words = sentences.flatMap(s =&gt; s.split(" "));
console.log(words); // ["hello", "world", "foo", "bar"]

// Filtering and mapping in one step
const nums = [1, 2, 3];
nums.flatMap(n =&gt; n % 2 ? [n * 2] : []);
// [2, 6] — odd numbers doubled, evens removed</code></pre>

flatMap() is particularly useful for <strong>one-to-many transformations</strong> where each element can produce zero, one, or multiple results. Return an empty array [] to filter out elements, a single-element array [value] to map, or a multi-element array to expand.`
                },
                {
                    q: "How does Array.from() work?",
                    a: `<strong>Array.from()</strong> creates a new Array instance from an <strong>array-like object</strong> (with a length property and indexed elements) or an <strong>iterable object</strong> (like strings, Maps, Sets, NodeLists). It accepts an optional <strong>map function</strong> as the second argument, allowing you to transform elements during creation. This is more efficient than creating an array first and then mapping it.

<pre><code>// From a string
Array.from("hello"); // ["h", "e", "l", "l", "o"]

// From a NodeList
const divs = Array.from(document.querySelectorAll("div"));

// From a Set
Array.from(new Set([1, 2, 2, 3])); // [1, 2, 3]

// With map function
Array.from({ length: 5 }, (_, i) =&gt; i * 2);
// [0, 2, 4, 6, 8]

// Generate range
Array.from({ length: 5 }, (_, i) =&gt; i + 1);
// [1, 2, 3, 4, 5]</code></pre>

The pattern Array.from({ length: n }, mapFn) is a powerful way to generate arrays of any length with computed values. It is more readable than new Array(n).fill().map() and works in all modern browsers. Use it to create <strong>ranges</strong>, <strong>grids</strong>, and other structured data.`
                },
                {
                    q: "How does Array.prototype.sort() work and what are its gotchas?",
                    a: `<strong>sort()</strong> sorts an array <strong>in place</strong> and returns the mutated array. By default, it converts elements to <strong>strings</strong> and sorts by UTF-16 code units, which gives incorrect results for numbers. Always pass a <strong>comparator function</strong> for numeric sorting. The comparator returns a negative number if a should come before b, positive if after, and 0 if equal. The sort algorithm is not guaranteed to be stable in older engines, but ES2019 requires stable sorting.

<pre><code>// Default (string) sort — wrong for numbers!
[10, 9, 2, 21].sort();
// [10, 2, 21, 9] — sorted as strings!

// Numeric sort
[10, 9, 2, 21].sort((a, b) =&gt; a - b);
// [2, 9, 10, 21]

// Sort objects
const users = [
  { name: "Charlie" },
  { name: "Alice" },
  { name: "Bob" }
];
users.sort((a, b) =&gt; a.name.localeCompare(b.name));
// [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]

// Non-mutating sort (ES2023)
const sorted = [3, 1, 2].toSorted((a, b) =&gt; a - b);
// [1, 2, 3] (original unchanged)</code></pre>

Use <strong>localeCompare()</strong> for proper string sorting that handles international characters correctly. For immutable sorting (important in React), use <strong>toSorted()</strong> from ES2023 or spread first: [...arr].sort().`
                },
                {
                    q: "What is the difference between forEach() and map()?",
                    a: `<strong>forEach()</strong> executes a function for each element but always returns <strong>undefined</strong> — it is designed for side effects like logging, DOM updates, or API calls. <strong>map()</strong> returns a <strong>new array</strong> of transformed values — it is designed for data transformation. You cannot break out of either method; use <strong>for...of</strong> or a regular for loop if you need early termination.

<pre><code>const nums = [1, 2, 3];

// forEach — side effects, returns undefined
const result1 = nums.forEach(n =&gt; console.log(n));
console.log(result1); // undefined

// map — transformation, returns new array
const result2 = nums.map(n =&gt; n * 2);
console.log(result2); // [2, 4, 6]

// Anti-pattern: using map for side effects
nums.map(n =&gt; console.log(n)); // Works but wasteful — use forEach

// Anti-pattern: using forEach to build array — use map instead</code></pre>

Choose <strong>map()</strong> when you need a transformed array, and <strong>forEach()</strong> when you need to perform actions with each element. If you are not using the return value of map(), you should switch to forEach() to make your intent clear.`
                },
                {
                    q: "How does Array.prototype.includes() work?",
                    a: `<strong>includes()</strong> returns true if the array contains the specified value, using <strong>SameValueZero</strong> comparison which is similar to strict equality (===) but correctly handles NaN (treats NaN as equal to itself). It accepts an optional second argument for the <strong>start index</strong> from which to begin searching. includes() replaced the older pattern of indexOf(val) !== -1 which could not find NaN values.

<pre><code>const arr = [1, 2, 3, NaN];

console.log(arr.includes(2));     // true
console.log(arr.includes(4));     // false
console.log(arr.includes(NaN));   // true (unlike indexOf)

// indexOf fails with NaN
console.log(arr.indexOf(NaN));    // -1 (cannot find it)

// With start index
console.log(arr.includes(1, 1));  // false (search from index 1)

// Replaces common pattern
// Before: arr.indexOf(val) !== -1
// After:  arr.includes(val)</code></pre>

Use <strong>includes()</strong> for simple membership checks and <strong>indexOf()</strong> when you need the actual index position. For complex conditions, use <strong>find()</strong> or <strong>some()</strong> instead. includes() works with strings too — "hello".includes("ell") returns true.`
                },
                {
                    q: "How do splice() and slice() differ?",
                    a: `<strong>splice()</strong> <strong>mutates</strong> the original array by adding, removing, or replacing elements at a specified index and returns the removed elements. <strong>slice()</strong> returns a <strong>shallow copy</strong> of a portion of the array without modifying the original. This is one of the most commonly confused pairs of array methods. Remember: splice = modify in place, slice = copy a section.

<pre><code>const arr = [1, 2, 3, 4, 5];

// slice(start, end) — does NOT mutate
const sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]
console.log(arr);    // [1, 2, 3, 4, 5] (unchanged)

// splice(start, deleteCount, ...items) — MUTATES
const removed = arr.splice(1, 2, 10, 20);
console.log(removed); // [2, 3] (removed elements)
console.log(arr);      // [1, 10, 20, 4, 5] (modified!)

// Common use cases
const arr2 = [1, 2, 3, 4, 5];
arr2.splice(2, 0, 99);  // insert 99 at index 2
// [1, 2, 99, 3, 4, 5]

arr2.splice(-1, 1);     // remove last element
// [1, 2, 99, 3, 4]

// Non-mutating alternative (ES2023)
const result = arr2.toSpliced(1, 1, 100);
// result: [1, 100, 99, 3, 4] — arr2 unchanged</code></pre>

Use <strong>toSpliced()</strong> (ES2023) when you need splice-like behavior without mutation. For React state updates, always create new arrays using slice() or toSpliced() instead of mutating with splice().`
                },
                {
                    q: "How do push(), pop(), shift(), and unshift() work?",
                    a: `These four methods <strong>mutate</strong> the original array by adding or removing elements from either end. <strong>push()</strong> adds to the <strong>end</strong> and returns the new length. <strong>pop()</strong> removes from the <strong>end</strong> and returns the removed element. <strong>unshift()</strong> adds to the <strong>beginning</strong> and returns the new length. <strong>shift()</strong> removes from the <strong>beginning</strong> and returns the removed element.

<pre><code>const arr = [2, 3, 4];

// End operations
arr.push(5);       // returns 4, arr = [2, 3, 4, 5]
arr.push(6, 7);    // returns 6, arr = [2, 3, 4, 5, 6, 7]
arr.pop();         // returns 7, arr = [2, 3, 4, 5, 6]

// Beginning operations
arr.unshift(1);    // returns 6, arr = [1, 2, 3, 4, 5, 6]
arr.unshift(-1, 0); // returns 8, arr = [-1, 0, 1, 2, 3, 4, 5, 6]
arr.shift();       // returns -1, arr = [0, 1, 2, 3, 4, 5, 6]

// Performance note:
// push/pop are O(1) — fast
// shift/unshift are O(n) — slower (reindex all elements)

// Immutable alternatives
const newArr = [...arr, 8];    // like push
const newArr2 = [0, ...arr];   // like unshift
const newArr3 = arr.slice(0, -1); // like pop
const newArr4 = arr.slice(1);    // like shift</code></pre>

<strong>push()</strong> and <strong>pop()</strong> operate at O(1) time complexity because they only affect the end. <strong>shift()</strong> and <strong>unshift()</strong> are O(n) because all remaining elements must be re-indexed. Use spread syntax for immutable alternatives in React.`
                },
                {
                    q: "How does Array.prototype.concat() work?",
                    a: `<strong>concat()</strong> merges two or more arrays or values into a <strong>new array</strong> without mutating the originals. It performs a <strong>shallow copy</strong> of elements — objects are copied by reference, not cloned. concat() can accept both arrays and individual values as arguments. In modern JavaScript, the spread operator [...arr1, ...arr2] is often preferred for its cleaner syntax.

<pre><code>const arr1 = [1, 2];
const arr2 = [3, 4];
const arr3 = [5, 6];

// Merge arrays
const merged = arr1.concat(arr2);
console.log(merged); // [1, 2, 3, 4]

// Multiple arrays
const all = arr1.concat(arr2, arr3);
console.log(all); // [1, 2, 3, 4, 5, 6]

// Mix arrays and values
const mixed = arr1.concat(3, [4, 5]);
console.log(mixed); // [1, 2, 3, 4, 5]

// Originals unchanged
console.log(arr1); // [1, 2]

// Spread alternative (modern)
const merged2 = [...arr1, ...arr2, ...arr3];

// Shallow copy caveat
const objs = [{ a: 1 }];
const copy = objs.concat();
copy[0].a = 99;
console.log(objs[0].a); // 99 (same reference!)</code></pre>

concat() with no arguments creates a <strong>shallow copy</strong> of the array, similar to slice() or [...arr]. For deep copying arrays of objects, use <strong>structuredClone()</strong>. The spread operator is preferred in modern code for its readability.`
                },
                {
                    q: "How does Array.prototype.join() work?",
                    a: `<strong>join()</strong> creates and returns a <strong>string</strong> by concatenating all array elements, separated by the specified <strong>separator string</strong>. The default separator is a comma. If an element is undefined, null, or an empty array, it is converted to an empty string. join() is the inverse of String.prototype.split() — you can round-trip between arrays and strings using these two methods.

<pre><code>const arr = ["Hello", "World", "JS"];

console.log(arr.join());     // "Hello,World,JS" (default comma)
console.log(arr.join(" "));  // "Hello World JS"
console.log(arr.join("-"));  // "Hello-World-JS"
console.log(arr.join(""));   // "HelloWorldJS"

// Building strings
const path = ["users", "alice", "posts"].join("/");
console.log(path); // "users/alice/posts"

// With special values
[1, null, undefined, 2].join("-"); // "1---2"

// Round-trip with split
const str = "a,b,c";
const parts = str.split(",");  // ["a", "b", "c"]
const back = parts.join(",");  // "a,b,c"

// Building CSV
const headers = ["Name", "Age", "City"];
const row = ["Alice", 30, "NYC"];
console.log(headers.join(",") + "\\n" + row.join(","));</code></pre>

join() is useful for building <strong>file paths</strong>, <strong>CSS class names</strong>, <strong>CSV data</strong>, and <strong>URL segments</strong>. It is more efficient than using string concatenation in a loop because it creates only one string.`
                },
                {
                    q: "What is the difference between Array.isArray() and instanceof Array?",
                    a: `<strong>Array.isArray()</strong> is the recommended way to check if a value is an array because it works correctly across different execution contexts (iframes, windows, realms). <strong>instanceof Array</strong> can fail when the array comes from a different frame or window because each frame has its own Array constructor. Array.isArray() also returns false for array-like objects like arguments and NodeList, which are not true arrays.

<pre><code>// Basic checks
console.log(Array.isArray([1, 2, 3]));  // true
console.log(Array.isArray("hello"));    // false
console.log(Array.isArray({ length: 3 })); // false

// instanceof can fail across frames
// iframe.contentWindow.Array !== window.Array
const iframeArray = iframe.contentWindow.eval("[]");
console.log(iframeArray instanceof Array);    // false!
console.log(Array.isArray(iframeArray));      // true

// Array-like objects are NOT arrays
function test() {
  console.log(Array.isArray(arguments));  // false
  console.log(arguments instanceof Array); // false
}

const nodeList = document.querySelectorAll("div");
console.log(Array.isArray(nodeList)); // false

// typeof is useless for arrays
console.log(typeof []);    // "object"
console.log(typeof null);  // "object"</code></pre>

Always use <strong>Array.isArray()</strong> for type checking — never typeof (returns "object") or instanceof (fails cross-realm). For checking if something is iterable (but not necessarily an array), check for <strong>Symbol.iterator</strong> property.`
                },
                {
                    q: "How do indexOf() and lastIndexOf() work?",
                    a: `<strong>indexOf()</strong> returns the <strong>first index</strong> at which a given element is found, or -1 if not found. <strong>lastIndexOf()</strong> returns the <strong>last index</strong> at which the element is found, searching backwards. Both use <strong>strict equality</strong> (===) for comparison, which means they cannot find NaN values. They both accept an optional second argument for the starting search position.

<pre><code>const arr = [1, 2, 3, 2, 1];

console.log(arr.indexOf(2));      // 1 (first occurrence)
console.log(arr.lastIndexOf(2));  // 3 (last occurrence)
console.log(arr.indexOf(99));     // -1 (not found)

// With start index
console.log(arr.indexOf(2, 2));   // 3 (search from index 2)

// Cannot find NaN
console.log([NaN].indexOf(NaN));  // -1 (use includes instead)

// Common patterns
// Check existence (old way)
if (arr.indexOf(3) !== -1) {
  console.log("Found");
}

// Remove element by value
const idx = arr.indexOf(3);
if (idx !== -1) arr.splice(idx, 1);

// Find all occurrences
function findAllIndices(arr, val) {
  const indices = [];
  let idx = arr.indexOf(val);
  while (idx !== -1) {
    indices.push(idx);
    idx = arr.indexOf(val, idx + 1);
  }
  return indices;
}
console.log(findAllIndices([1, 2, 3, 2, 1], 2)); // [1, 3]</code></pre>

Prefer <strong>includes()</strong> for simple existence checks and <strong>findIndex()</strong> for complex conditions. indexOf() is still useful when you need the <strong>actual index position</strong> for operations like splice().`
                },
                {
                    q: "How does Array.prototype.fill() work?",
                    a: `<strong>fill()</strong> changes all elements in an array to a <strong>static value</strong> from a start index (default 0) to an end index (default array.length). It <strong>mutates</strong> the original array and returns the modified array. fill() is commonly used to initialize arrays with a specific value. However, when filling with objects, each index gets the <strong>same reference</strong>, not a new copy.

<pre><code>// Basic fill
const arr = [1, 2, 3, 4, 5];
arr.fill(0);
console.log(arr); // [0, 0, 0, 0, 0]

// With start and end
const arr2 = [1, 2, 3, 4, 5];
arr2.fill(9, 1, 3);
console.log(arr2); // [1, 9, 9, 4, 5]

// Create array of specific size
const zeros = new Array(5).fill(0);
console.log(zeros); // [0, 0, 0, 0, 0]

// WARNING: Object references are shared!
const grid = new Array(3).fill([]);
grid[0].push(1);
console.log(grid); // [[1], [1], [1]] — all same reference!

// Correct way for objects
const correctGrid = Array.from({ length: 3 }, () =&gt; []);
correctGrid[0].push(1);
console.log(correctGrid); // [[1], [], []] — independent arrays</code></pre>

The <strong>shared reference trap</strong> is a common mistake. When filling with objects or arrays, use <strong>Array.from()</strong> with a map function to create independent instances. fill() only works with <strong>static values</strong> — it does not call the value as a factory function.`
                },
                {
                    q: "What are the new immutable array methods in ES2023?",
                    a: `ES2023 introduced four new array methods that return <strong>new arrays</strong> instead of mutating the original: <strong>toSorted()</strong>, <strong>toReversed()</strong>, <strong>toSpliced()</strong>, and <strong>with()</strong>. These are immutable versions of sort(), reverse(), splice(), and bracket assignment. They are especially valuable in <strong>React</strong> and other frameworks where state immutability is required.

<pre><code>const arr = [3, 1, 4, 1, 5];

// toSorted() — immutable sort
const sorted = arr.toSorted((a, b) =&gt; a - b);
console.log(sorted); // [1, 1, 3, 4, 5]
console.log(arr);    // [3, 1, 4, 1, 5] (unchanged)

// toReversed() — immutable reverse
const reversed = arr.toReversed();
console.log(reversed); // [5, 1, 4, 1, 3]

// toSpliced() — immutable splice
const spliced = arr.toSpliced(1, 2, 99);
console.log(spliced); // [3, 99, 1, 5]

// with() — immutable index assignment
const changed = arr.with(0, 100);
console.log(changed); // [100, 1, 4, 1, 5]

// Chaining immutable operations
const result = arr
  .toSorted((a, b) =&gt; a - b)
  .toReversed()
  .with(0, 999);
console.log(result); // [999, 4, 3, 1, 1]</code></pre>

These methods solve the long-standing problem of <strong>accidental mutation</strong> in JavaScript. Before ES2023, developers had to use [...arr].sort() or structuredClone(arr).reverse() to avoid mutating state. These new methods make immutable array operations clean and chainable.`
                },
                {
                    q: "How does Array.prototype.reduceRight() work?",
                    a: `<strong>reduceRight()</strong> works exactly like reduce() but processes elements from <strong>right to left</strong> (last to first). This is useful when the order of processing matters, such as function composition, right-to-left string building, or working with nested structures. Like reduce(), it takes a callback and an optional initial value.

<pre><code>// Right-to-left reduction
const arr = [[1, 2], [3, 4], [5, 6]];
const flattened = arr.reduceRight((acc, val) =&gt; acc.concat(val), []);
console.log(flattened); // [5, 6, 3, 4, 1, 2]

// Function composition (right to left)
const compose = (...fns) =&gt;
  fns.reduceRight((composed, fn) =&gt; (...args) =&gt; fn(composed(...args)));

const add10 = x =&gt; x + 10;
const multiply2 = x =&gt; x * 2;
const subtract5 = x =&gt; x - 5;

const transform = compose(add10, multiply2, subtract5);
console.log(transform(10)); // add10(multiply2(subtract5(10)))
// subtract5(10) = 5, multiply2(5) = 10, add10(10) = 20

// Building nested structure
const sections = ["a", "b", "c"];
const nested = sections.reduceRight((child, section) =&gt; {
  return { name: section, child };
}, null);
// { name: "a", child: { name: "b", child: { name: "c", child: null } } }</code></pre>

reduceRight() is commonly used for <strong>function composition</strong> where you want to apply functions from right to left, similar to mathematical notation f(g(h(x))). For left-to-right composition (pipe), use regular <strong>reduce()</strong>.`
                },
                {
                    q: "How do you chain array methods effectively?",
                    a: `<strong>Method chaining</strong> is the practice of calling multiple array methods in sequence, where each method returns a new array that the next method operates on. The most common chain is <strong>filter().map()</strong> for selecting and transforming data. While chaining is readable, be aware that each step creates an intermediate array, which can impact performance for very large arrays.

<pre><code>const users = [
  { name: "Alice", age: 28, active: true },
  { name: "Bob", age: 35, active: false },
  { name: "Carol", age: 22, active: true },
  { name: "Dave", age: 40, active: true }
];

// Filter, map, sort chain
const result = users
  .filter(u =&gt; u.active)
  .map(u =&gt; ({ name: u.name, age: u.age }))
  .sort((a, b) =&gt; a.age - b.age)
  .map(u =&gt; u.name + " (" + u.age + ")");
// ["Carol (22)", "Alice (28)", "Dave (40)"]

// Using reduce to do filter + map in one pass
const optimized = users.reduce((acc, u) =&gt; {
  if (u.active) acc.push(u.name);
  return acc;
}, []);
// ["Alice", "Carol", "Dave"]

// Using flatMap for filter + map
const names = users.flatMap(u =&gt;
  u.active ? [u.name] : []
);
// ["Alice", "Carol", "Dave"]</code></pre>

For <strong>performance-critical</strong> code processing millions of items, consider using reduce() or a for loop to avoid creating intermediate arrays. For most applications, the readability of chained methods outweighs the minor performance cost.`
                }
            ]
        },
        {
            id: "object-methods",
            title: "Object Methods",
            icon: "bi-braces-asterisk",
            questions: [
                {
                    q: "How do Object.keys(), Object.values(), and Object.entries() work?",
                    a: `These three static methods return arrays of an object's own <strong>enumerable properties</strong>. <strong>Object.keys()</strong> returns an array of property names (strings). <strong>Object.values()</strong> returns an array of property values. <strong>Object.entries()</strong> returns an array of [key, value] pairs. All three skip inherited properties and non-enumerable properties. They maintain insertion order for string keys.

<pre><code>const user = { name: "Alice", age: 30, role: "admin" };

Object.keys(user);    // ["name", "age", "role"]
Object.values(user);  // ["Alice", 30, "admin"]
Object.entries(user); // [["name","Alice"], ["age",30], ["role","admin"]]

// Iterate with entries
for (const [key, val] of Object.entries(user)) {
  console.log(key + ": " + val);
}

// Convert to Map
const map = new Map(Object.entries(user));</code></pre>

Object.entries() is the most versatile of the three because you can use it with <strong>for...of</strong>, <strong>Map constructor</strong>, and <strong>destructuring</strong>. To convert back from entries to an object, use <strong>Object.fromEntries()</strong>.`
                },
                {
                    q: "How does Object.assign() work?",
                    a: `<strong>Object.assign(target, ...sources)</strong> copies all <strong>enumerable own properties</strong> from one or more source objects to the target object and returns the modified target. It <strong>mutates the target</strong>, performs a <strong>shallow copy</strong>, and later sources override earlier ones for properties with the same key. To avoid mutating an existing object, pass an empty object {} as the target.

<pre><code>const target = { a: 1 };
const source = { b: 2, c: 3 };
Object.assign(target, source);
console.log(target); // { a: 1, b: 2, c: 3 }

// Merging (creates new object)
const merged = Object.assign({}, { a: 1 }, { b: 2 }, { a: 99 });
console.log(merged); // { a: 99, b: 2 }

// Shallow copy — nested objects are shared
const original = { data: { x: 1 } };
const copy = Object.assign({}, original);
copy.data.x = 99;
console.log(original.data.x); // 99 (shared reference!)</code></pre>

In modern JavaScript, the <strong>spread operator</strong> ({ ...obj }) is preferred over Object.assign() for creating new objects because it is more readable. Object.assign() is still useful when you need to <strong>mutate an existing target object</strong> or when working with dynamic source objects.`
                },
                {
                    q: "What do Object.freeze() and Object.seal() do?",
                    a: `<strong>Object.freeze()</strong> makes an object completely immutable — no adding, removing, or modifying properties. <strong>Object.seal()</strong> prevents adding or removing properties but allows <strong>modifying existing property values</strong>. Both operations are <strong>shallow</strong> — nested objects are not affected and can still be modified. In strict mode, attempting to violate these restrictions throws a TypeError.

<pre><code>// freeze — fully immutable
const frozen = Object.freeze({ x: 1, y: 2 });
frozen.x = 99;       // silently fails (throws in strict mode)
frozen.z = 3;        // silently fails
console.log(frozen); // { x: 1, y: 2 }

// seal — can modify, cannot add/remove
const sealed = Object.seal({ x: 1, y: 2 });
sealed.x = 99;       // allowed
sealed.z = 3;        // silently fails
delete sealed.x;     // silently fails
console.log(sealed); // { x: 99, y: 2 }

console.log(Object.isFrozen(frozen)); // true
console.log(Object.isSealed(sealed)); // true</code></pre>

To deeply freeze an object (including nested objects), you need to recursively call Object.freeze() on all nested objects. <strong>Object.isFrozen()</strong>, <strong>Object.isSealed()</strong>, and <strong>Object.isExtensible()</strong> check the current state of an object.`
                },
                {
                    q: "How does Object.defineProperty() work?",
                    a: `<strong>Object.defineProperty()</strong> defines a new property or modifies an existing property on an object with fine-grained control over its behavior via a <strong>property descriptor</strong>. Data descriptors have value, writable, enumerable, and configurable attributes. Accessor descriptors have get and set functions instead of value and writable. Properties created with defineProperty default to <strong>false</strong> for all boolean attributes.

<pre><code>const obj = {};

Object.defineProperty(obj, "name", {
  value: "Alice",
  writable: false,      // cannot change value
  enumerable: true,     // shows in for...in / Object.keys
  configurable: false   // cannot delete or reconfigure
});

obj.name = "Bob"; // silently fails
console.log(obj.name); // "Alice"

// Getter/Setter
Object.defineProperty(obj, "upper", {
  get() { return this.name.toUpperCase(); },
  enumerable: true,
  configurable: true
});
console.log(obj.upper); // "ALICE"</code></pre>

Use <strong>Object.defineProperties()</strong> to define multiple properties at once. defineProperty is used internally by frameworks for <strong>reactive data binding</strong> (Vue 2 uses it extensively) and for creating properties that cannot be accidentally overwritten or enumerated.`
                },
                {
                    q: "How does the spread operator work with objects?",
                    a: `The <strong>spread operator</strong> (...) creates a <strong>shallow copy</strong> of an object's own enumerable properties into a new object. When multiple objects are spread, later properties override earlier ones with the same key. It does not copy <strong>prototype properties</strong> or non-enumerable properties. The spread operator is the modern replacement for Object.assign() when creating new objects.

<pre><code>const defaults = { theme: "light", lang: "en", debug: false };
const userPrefs = { theme: "dark", lang: "fr" };

// Merge with overrides
const config = { ...defaults, ...userPrefs };
console.log(config);
// { theme: "dark", lang: "fr", debug: false }

// Add/override specific properties
const updated = { ...config, debug: true, version: 2 };

// Shallow copy
const original = { nested: { x: 1 } };
const copy = { ...original };
copy.nested.x = 99;
console.log(original.nested.x); // 99 (shared ref!)</code></pre>

The spread operator is essential for <strong>immutable state updates</strong> in React. Remember that it only creates a shallow copy — for nested objects, you need to spread at each level or use <strong>structuredClone()</strong> for a deep copy.`
                },
                {
                    q: "What are computed property names?",
                    a: `<strong>Computed property names</strong> allow you to use any JavaScript expression as a property key inside object literals by wrapping the expression in <strong>square brackets []</strong>. This enables dynamic property keys based on variables, function results, template literals, or any computed value. They work in object literals, destructuring patterns, and class definitions.

<pre><code>const key = "name";
const obj = { [key]: "Alice" };
console.log(obj.name); // "Alice"

// Dynamic keys
const prefix = "user";
const data = {
  [prefix + "Name"]: "Bob",
  [prefix + "Age"]: 25
};
console.log(data.userName); // "Bob"

// With Symbol
const id = Symbol("id");
const item = { [id]: 123 };
console.log(item[id]); // 123

// In methods
const action = "get";
const api = { [action + "User"]() { return "user data"; } };
api.getUser(); // "user data"</code></pre>

Computed property names are useful for <strong>dynamic object construction</strong>, creating objects from variable keys, and defining methods with dynamic names. They are commonly used with <strong>Symbols</strong> to create unique non-string property keys.`
                },
                {
                    q: "How does Object.is() differ from === ?",
                    a: `<strong>Object.is()</strong> performs <strong>SameValue</strong> comparison, which is almost identical to strict equality (===) but handles two edge cases differently. First, <strong>Object.is(NaN, NaN)</strong> returns true (=== returns false). Second, <strong>Object.is(+0, -0)</strong> returns false (=== returns true). For all other values, Object.is() behaves exactly like ===. It is used internally by React for state comparison.

<pre><code>// Same as ===
Object.is(1, 1);           // true
Object.is("a", "a");       // true
Object.is(null, null);     // true

// Different from ===
Object.is(NaN, NaN);       // true  (=== gives false)
Object.is(+0, -0);         // false (=== gives true)

NaN === NaN;                // false
+0 === -0;                  // true

// Use case: reliable equality check
function sameValue(a, b) {
  return Object.is(a, b);
}</code></pre>

Object.is() is used by React's <strong>useState</strong> and <strong>useMemo</strong> hooks to determine if state has changed. Understanding its behavior with NaN and signed zeros helps explain why certain React re-renders do or do not occur.`
                },
                {
                    q: "How does Object.fromEntries() work?",
                    a: `<strong>Object.fromEntries()</strong> transforms an iterable of <strong>[key, value] pairs</strong> into a plain object. It is the reverse operation of Object.entries(). It works with arrays of pairs, Map objects, and any other iterable that yields two-element arrays. This method is especially useful for transforming object properties through a functional pipeline.

<pre><code>// From entries array
const entries = [["name", "Alice"], ["age", 30]];
const obj = Object.fromEntries(entries);
console.log(obj); // { name: "Alice", age: 30 }

// From Map
const map = new Map([["x", 1], ["y", 2]]);
const fromMap = Object.fromEntries(map);
console.log(fromMap); // { x: 1, y: 2 }

// Transform object values
const prices = { apple: 1.5, banana: 0.75 };
const doubled = Object.fromEntries(
  Object.entries(prices).map(([k, v]) =&gt; [k, v * 2])
);
console.log(doubled); // { apple: 3, banana: 1.5 }</code></pre>

The <strong>entries-transform-fromEntries</strong> pattern is a powerful way to implement map, filter, and other transformations on objects. You can filter properties, rename keys, or transform values using this pipeline approach.`
                },
                {
                    q: "What are property descriptors in JavaScript?",
                    a: `Every property in JavaScript has an associated <strong>property descriptor</strong> that defines its behavior. <strong>Data descriptors</strong> have value, writable, enumerable, and configurable attributes. <strong>Accessor descriptors</strong> have get, set, enumerable, and configurable attributes. Properties created with literal syntax default to true for all boolean attributes, while properties created with defineProperty default to <strong>false</strong>.

<pre><code>const obj = { name: "Alice" };

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// { value: "Alice", writable: true, enumerable: true, configurable: true }

// Properties created with defineProperty default to false
Object.defineProperty(obj, "id", { value: 1 });
console.log(Object.getOwnPropertyDescriptor(obj, "id"));
// { value: 1, writable: false, enumerable: false, configurable: false }

// Get all descriptors
console.log(Object.getOwnPropertyDescriptors(obj));
// { name: { ... }, id: { ... } }</code></pre>

<strong>Object.getOwnPropertyDescriptors()</strong> is useful for creating exact copies of objects including getters and setters, which Object.assign() and spread cannot preserve. Understanding descriptors is essential for working with Object.defineProperty(), Object.freeze(), and other property configuration methods.`
                },
                {
                    q: "What is the difference between shallow copy and deep copy?",
                    a: `A <strong>shallow copy</strong> duplicates only the top-level properties — nested objects and arrays still share the same <strong>references</strong> as the original. A <strong>deep copy</strong> recursively copies all levels, creating fully independent objects with no shared references. Understanding this difference is crucial for avoiding bugs when modifying copied objects, especially in state management.

<pre><code>const original = { a: 1, nested: { b: 2 } };

// Shallow copy — nested is shared
const shallow = { ...original };
shallow.nested.b = 99;
console.log(original.nested.b); // 99 (affected!)

// Deep copy with structuredClone (modern)
const deep = structuredClone(original);
deep.nested.b = 42;
console.log(original.nested.b); // 99 (unaffected)

// Deep copy with JSON (limited — no functions, Date, etc.)
const jsonCopy = JSON.parse(JSON.stringify(original));

// structuredClone handles: Date, Map, Set, ArrayBuffer, etc.
// but NOT: functions, DOM nodes, or Symbol properties</code></pre>

<strong>structuredClone()</strong> is the recommended way to deep copy in modern JavaScript. The JSON method loses functions, undefined values, Dates (become strings), RegExp, and Map/Set. For simple objects without special types, JSON works fine.`
                },
                {
                    q: "How does Object.create() work?",
                    a: `<strong>Object.create()</strong> creates a new object with the specified object as its <strong>prototype</strong>. It optionally accepts a second argument of property descriptors. This is the purest form of prototype-based inheritance in JavaScript. Passing null creates an object with <strong>no prototype</strong> — it will not have toString(), hasOwnProperty(), or any other Object.prototype methods.

<pre><code>// Create with prototype
const animal = {
  speak() { return this.name + " speaks"; }
};

const dog = Object.create(animal);
dog.name = "Rex";
console.log(dog.speak()); // "Rex speaks"
console.log(Object.getPrototypeOf(dog) === animal); // true

// With property descriptors
const cat = Object.create(animal, {
  name: { value: "Whiskers", writable: true, enumerable: true }
});

// Null prototype — no inherited methods
const dict = Object.create(null);
dict.key = "value";
console.log(dict.toString); // undefined (no prototype!)

// Useful for safe dictionaries (no prototype pollution)
const safeMap = Object.create(null);
safeMap["__proto__"] = "safe"; // just a normal property</code></pre>

Object.create(null) is used to create <strong>prototype-pollution-safe</strong> dictionaries. Regular objects inherit methods like toString and constructor from Object.prototype, which can cause unexpected behavior when used as look-up tables.`
                },
                {
                    q: "What is Object.hasOwn() and how does it improve on hasOwnProperty()?",
                    a: `<strong>Object.hasOwn(obj, prop)</strong> is a static method (ES2022) that checks if an object has the specified property as its <strong>own</strong> (not inherited) property. It replaces the older <strong>obj.hasOwnProperty(prop)</strong> pattern which has two weaknesses: it fails on objects created with Object.create(null) (no prototype), and it can be shadowed by a custom hasOwnProperty property.

<pre><code>const user = { name: "Alice", age: 30 };

// Object.hasOwn() — recommended (ES2022)
console.log(Object.hasOwn(user, "name"));      // true
console.log(Object.hasOwn(user, "toString"));  // false (inherited)

// Old way — hasOwnProperty
console.log(user.hasOwnProperty("name")); // true

// Problem 1: fails on null-prototype objects
const dict = Object.create(null);
dict.key = "value";
// dict.hasOwnProperty("key"); // TypeError!
console.log(Object.hasOwn(dict, "key")); // true (works!)

// Problem 2: can be shadowed
const dangerous = { hasOwnProperty: () =&gt; false };
console.log(dangerous.hasOwnProperty("hasOwnProperty")); // false (wrong!)
console.log(Object.hasOwn(dangerous, "hasOwnProperty")); // true (correct)</code></pre>

Always prefer <strong>Object.hasOwn()</strong> over hasOwnProperty() in modern code. If you need to support older browsers, use <strong>Object.prototype.hasOwnProperty.call(obj, prop)</strong> as a safe alternative — this cannot be shadowed.`
                },
                {
                    q: "How do getters and setters work in objects?",
                    a: `<strong>Getters</strong> and <strong>setters</strong> are special methods that intercept property access and assignment. A getter is called when reading a property value, and a setter is called when assigning to it. They look like regular properties to the caller but execute code behind the scenes. This allows you to add validation, computed values, and side effects to property operations.

<pre><code>const person = {
  firstName: "John",
  lastName: "Doe",

  // Getter — computed property
  get fullName() {
    return this.firstName + " " + this.lastName;
  },

  // Setter — with validation
  set fullName(value) {
    const parts = value.split(" ");
    if (parts.length !== 2) throw new Error("Need first and last name");
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(person.fullName); // "John Doe" (calls getter)
person.fullName = "Jane Smith"; // calls setter
console.log(person.firstName); // "Jane"

// In classes
class Temperature {
  #celsius = 0;

  get fahrenheit() {
    return this.#celsius * 9/5 + 32;
  }

  set fahrenheit(f) {
    this.#celsius = (f - 32) * 5/9;
  }
}</code></pre>

Getters and setters provide <strong>encapsulation</strong> — they allow you to change internal implementation without changing the public API. They are also useful for <strong>lazy computation</strong>, <strong>validation</strong>, <strong>logging</strong>, and <strong>derived values</strong>.`
                },
                {
                    q: "How do you iterate over object properties?",
                    a: `There are several ways to iterate over object properties, each with different behavior regarding <strong>inherited</strong> and <strong>non-enumerable</strong> properties. <strong>for...in</strong> iterates all enumerable properties including inherited ones. <strong>Object.keys()</strong> returns only own enumerable string keys. <strong>Object.getOwnPropertyNames()</strong> returns all own properties including non-enumerable ones. <strong>Reflect.ownKeys()</strong> returns all own keys including Symbols.

<pre><code>const parent = { inherited: true };
const obj = Object.create(parent);
obj.name = "Alice";
Object.defineProperty(obj, "hidden", {
  value: 42,
  enumerable: false
});
obj[Symbol("id")] = 1;

// for...in — own + inherited enumerable
for (const key in obj) console.log(key);
// "name", "inherited"

// Object.keys() — own enumerable only
console.log(Object.keys(obj)); // ["name"]

// Object.getOwnPropertyNames() — own string keys (incl. non-enum)
console.log(Object.getOwnPropertyNames(obj)); // ["name", "hidden"]

// Reflect.ownKeys() — all own keys including Symbols
console.log(Reflect.ownKeys(obj));
// ["name", "hidden", Symbol(id)]

// Object.entries() for key-value iteration
for (const [key, val] of Object.entries(obj)) {
  console.log(key + ": " + val); // "name: Alice"
}</code></pre>

Use <strong>Object.keys()</strong> or <strong>Object.entries()</strong> for most cases. Use <strong>for...in</strong> with hasOwnProperty check only when you explicitly need inherited properties. Use <strong>Reflect.ownKeys()</strong> when you need to access Symbol properties.`
                },
                {
                    q: "What is Object.groupBy() and how does it work?",
                    a: `<strong>Object.groupBy()</strong> is a new static method (ES2024) that groups elements of an iterable based on a callback function's return value. It returns a <strong>null-prototype object</strong> where each key is a group name and each value is an array of items in that group. This replaces the common reduce-based grouping pattern with a cleaner built-in method.

<pre><code>const products = [
  { name: "Apple", category: "fruit", price: 1.5 },
  { name: "Banana", category: "fruit", price: 0.75 },
  { name: "Carrot", category: "veggie", price: 1.0 },
  { name: "Broccoli", category: "veggie", price: 2.0 }
];

// Group by category
const grouped = Object.groupBy(products, p =&gt; p.category);
console.log(grouped.fruit);
// [{ name: "Apple", ... }, { name: "Banana", ... }]
console.log(grouped.veggie);
// [{ name: "Carrot", ... }, { name: "Broccoli", ... }]

// Group by computed value
const byPrice = Object.groupBy(products, p =&gt;
  p.price &gt; 1 ? "expensive" : "cheap"
);

// Old way with reduce
const oldGrouped = products.reduce((acc, p) =&gt; {
  (acc[p.category] ??= []).push(p);
  return acc;
}, {});</code></pre>

Object.groupBy() returns a <strong>null-prototype object</strong> (no inherited properties), making it safe to use as a dictionary. Use <strong>Map.groupBy()</strong> when you need non-string keys. Both methods are significantly more readable than the reduce-based pattern.`
                },
                {
                    q: "How does JSON.stringify() handle different value types?",
                    a: `<strong>JSON.stringify()</strong> converts a JavaScript value to a JSON string. It handles most primitive types and plain objects, but has specific behavior for special values. <strong>undefined</strong>, <strong>functions</strong>, and <strong>Symbols</strong> are omitted from objects or converted to null in arrays. <strong>NaN</strong> and <strong>Infinity</strong> become null. <strong>Date</strong> objects are converted to ISO strings. It accepts a <strong>replacer</strong> and a <strong>space</strong> argument for customization.

<pre><code>// Special value handling
JSON.stringify(undefined);   // undefined (not valid JSON)
JSON.stringify(null);        // "null"
JSON.stringify(NaN);         // "null"
JSON.stringify(Infinity);    // "null"

// Objects — functions and undefined are omitted
JSON.stringify({
  name: "Alice",
  fn: function() {},
  undef: undefined,
  sym: Symbol()
});
// '{"name":"Alice"}' — fn, undef, sym are dropped

// Arrays — become null
JSON.stringify([1, undefined, NaN, function() {}]);
// '[1,null,null,null]'

// Replacer function
JSON.stringify({ a: 1, b: 2, c: 3 }, (key, val) =&gt; {
  return val &gt; 1 ? val : undefined; // omit values &lt;= 1
}); // '{"b":2,"c":3}'

// Pretty print with spaces
JSON.stringify({ a: 1, b: { c: 2 } }, null, 2);

// Custom toJSON method
const obj = {
  data: "secret",
  toJSON() { return { redacted: true }; }
};
JSON.stringify(obj); // '{"redacted":true}'</code></pre>

Define a <strong>toJSON()</strong> method on your objects to customize serialization. Be aware that JSON.stringify() creates <strong>circular reference errors</strong> — use a replacer function or a library to handle circular objects.`
                },
                {
                    q: "What is the difference between Object.keys() and Reflect.ownKeys()?",
                    a: `<strong>Object.keys()</strong> returns only <strong>own enumerable string-keyed</strong> properties. <strong>Reflect.ownKeys()</strong> returns <strong>all own property keys</strong> including non-enumerable properties and Symbol keys. The order of Reflect.ownKeys() follows a specific algorithm: integer indices first (in numeric order), then string keys (in creation order), then Symbols (in creation order).

<pre><code>const obj = {};
Object.defineProperty(obj, "hidden", {
  value: 1, enumerable: false
});
obj.visible = 2;
obj[Symbol("sym")] = 3;
obj[1] = "one";
obj[0] = "zero";

// Object.keys() — own enumerable strings only
console.log(Object.keys(obj));
// ["0", "1", "visible"]

// Reflect.ownKeys() — everything
console.log(Reflect.ownKeys(obj));
// ["0", "1", "hidden", "visible", Symbol(sym)]

// Other methods for comparison:
// Object.getOwnPropertyNames() — all own strings (incl non-enum)
console.log(Object.getOwnPropertyNames(obj));
// ["0", "1", "hidden", "visible"]

// Object.getOwnPropertySymbols() — only Symbols
console.log(Object.getOwnPropertySymbols(obj));
// [Symbol(sym)]</code></pre>

Use <strong>Object.keys()</strong> for normal iteration, <strong>Reflect.ownKeys()</strong> for complete property inspection (useful in debugging and metaprogramming), and <strong>Object.getOwnPropertySymbols()</strong> when specifically looking for Symbol-keyed properties.`
                },
                {
                    q: "How does Object.preventExtensions() work?",
                    a: `<strong>Object.preventExtensions()</strong> prevents new properties from being added to an object, but allows existing properties to be <strong>modified</strong> and <strong>deleted</strong>. It is the least restrictive of the three immutability methods: preventExtensions (no new props) < seal (no new/delete props) < freeze (no changes at all). Like seal and freeze, it is a <strong>shallow</strong> operation.

<pre><code>const obj = { x: 1, y: 2 };

Object.preventExtensions(obj);

// Can modify existing
obj.x = 99;
console.log(obj.x); // 99

// Can delete existing
delete obj.y;
console.log(obj.y); // undefined

// Cannot add new
obj.z = 3; // silently fails (throws in strict mode)
console.log(obj.z); // undefined

// Check status
console.log(Object.isExtensible(obj)); // false

// Comparison table:
// Method              | Add | Delete | Modify
// preventExtensions   |  No |  Yes   |  Yes
// seal                |  No |  No    |  Yes
// freeze              |  No |  No    |  No</code></pre>

These three methods form an <strong>immutability hierarchy</strong>. A frozen object is also sealed, and a sealed object is also non-extensible. Use preventExtensions() when you want to lock down the structure but still allow value changes.`
                },
                {
                    q: "What are shorthand property and method syntax in ES6 objects?",
                    a: `ES6 introduced several shorthand syntaxes for object literals. <strong>Property shorthand</strong> lets you omit the value when the variable name matches the property name. <strong>Method shorthand</strong> lets you omit the function keyword and colon for methods. <strong>Computed property names</strong> use square brackets for dynamic keys. These make object creation more concise and readable.

<pre><code>const name = "Alice";
const age = 30;

// Property shorthand (ES6)
const user = { name, age };
// Equivalent to: { name: name, age: age }

// Method shorthand (ES6)
const calc = {
  add(a, b) { return a + b; },
  subtract(a, b) { return a - b; }
};
// Equivalent to: { add: function(a, b) { ... } }

// Combined in practice
function createUser(name, role) {
  return {
    name,
    role,
    greet() {
      return "Hi, I am " + this.name;
    },
    get upperName() {
      return this.name.toUpperCase();
    }
  };
}

// Destructuring with shorthand
function processUser({ name, age, role = "user" }) {
  return { name, age, role };
}</code></pre>

Shorthand syntax is widely used in modern JavaScript and frameworks. It reduces boilerplate while maintaining readability. <strong>Method shorthand</strong> functions have access to super, unlike regular function properties, making them suitable for object inheritance patterns.`
                }
            ]
        },
        {
            id: "dom-manipulation",
            title: "DOM Manipulation",
            icon: "bi-window",
            questions: [
                {
                    q: "How do querySelector and querySelectorAll work?",
                    a: `<strong>querySelector()</strong> returns the <strong>first</strong> element that matches a CSS selector, or null if no match is found. <strong>querySelectorAll()</strong> returns a <strong>static NodeList</strong> of all matching elements. Both methods accept any valid CSS selector string including complex selectors with combinators, pseudo-classes, and attribute selectors. The NodeList returned by querySelectorAll is static — it does not update when the DOM changes.

<pre><code>const el = document.querySelector('.card');       // first .card
const all = document.querySelectorAll('.card');    // all .card elements

// NodeList is NOT a live collection
document.querySelectorAll('p').forEach(p =&gt; {
  p.style.color = 'blue';
});

// By ID, attribute, nested
document.querySelector('#app');
document.querySelector('[data-role="admin"]');
document.querySelector('ul &gt; li:first-child');</code></pre>

querySelector and querySelectorAll can also be called on <strong>any element</strong>, not just document, to search within a specific subtree. They are the modern replacement for older methods like getElementById() and getElementsByClassName().`
                },
                {
                    q: "How do you create and insert DOM elements?",
                    a: `Use <strong>document.createElement()</strong> to create a new element, then set its properties and content. Insert it into the DOM using methods like <strong>appendChild()</strong>, <strong>append()</strong>, <strong>prepend()</strong>, <strong>before()</strong>, <strong>after()</strong>, or <strong>insertAdjacentElement()</strong>. The newer methods (append, prepend, before, after) accept multiple arguments and text strings, while appendChild only accepts a single Node.

<pre><code>const div = document.createElement('div');
div.textContent = 'Hello';
div.classList.add('greeting');

document.body.appendChild(div);       // add as last child
parent.prepend(div);                  // add as first child
sibling.after(div);                   // add after sibling

// insertAdjacentHTML — no element creation needed
el.insertAdjacentHTML('beforeend', '&lt;p&gt;New&lt;/p&gt;');</code></pre>

For inserting HTML strings, <strong>insertAdjacentHTML()</strong> is more efficient than innerHTML because it does not reparse existing content. Its positions are: 'beforebegin', 'afterbegin', 'beforeend', 'afterend'. Be cautious with user-provided HTML to avoid <strong>XSS vulnerabilities</strong>.`
                },
                {
                    q: "How does addEventListener work and how do you remove listeners?",
                    a: `<strong>addEventListener()</strong> attaches an event handler to an element without overwriting existing handlers. You can add multiple handlers for the same event. To remove a handler, call <strong>removeEventListener()</strong> with the <strong>exact same function reference</strong> — anonymous functions cannot be removed. The third argument is an options object or a boolean for the capture phase.

<pre><code>function handleClick(e) {
  console.log('Clicked', e.target);
}

btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);

// Options object
btn.addEventListener('click', handleClick, {
  once: true,      // auto-remove after first call
  capture: false,  // bubbling phase (default)
  passive: true    // will not call preventDefault
});</code></pre>

The <strong>once: true</strong> option is useful for one-time actions like initialization or first-click tracking. The <strong>passive: true</strong> option improves scroll performance by telling the browser the handler will not call preventDefault(). Use <strong>AbortController</strong> for modern event cleanup.`
                },
                {
                    q: "What is event delegation and why is it useful?",
                    a: `<strong>Event delegation</strong> is a pattern where you attach a single event listener to a <strong>parent element</strong> instead of individual listeners on each child. It leverages <strong>event bubbling</strong> — when a child is clicked, the event bubbles up to the parent where the handler checks <strong>e.target</strong> to determine which child was clicked. This pattern is memory efficient, works with dynamically added elements, and simplifies event management.

<pre><code>// Instead of adding listener to every &lt;li&gt;
document.querySelector('ul').addEventListener('click', (e) =&gt; {
  if (e.target.matches('li')) {
    console.log('Clicked:', e.target.textContent);
  }
});

// Benefits:
// 1. Works for dynamically added elements
// 2. Uses less memory (one handler vs many)
// 3. No need to rebind when DOM changes</code></pre>

Event delegation is essential in applications with <strong>dynamic content</strong> like todo lists, tables, or infinite scroll feeds. Use <strong>e.target.closest()</strong> instead of e.target.matches() when the click target might be a child of the element you are looking for.`
                },
                {
                    q: "What is the difference between event bubbling and capturing?",
                    a: `Events travel through the DOM in three phases: <strong>capturing phase</strong> (from window down to the target), <strong>target phase</strong> (at the target element), and <strong>bubbling phase</strong> (from target back up to window). By default, event listeners fire during the <strong>bubbling phase</strong>. Set capture: true (or pass true as the third argument) to listen during the capturing phase. Use <strong>e.stopPropagation()</strong> to stop the event from traveling further.

<pre><code>// Bubbling (default)
child.addEventListener('click', () =&gt; console.log('child'));
parent.addEventListener('click', () =&gt; console.log('parent'));
// Click child: "child" then "parent"

// Capturing
parent.addEventListener('click', () =&gt; console.log('parent'), true);
// Click child: "parent" then "child"

// Stop propagation
child.addEventListener('click', (e) =&gt; {
  e.stopPropagation(); // parent handler will not fire
});</code></pre>

<strong>e.stopPropagation()</strong> stops the event from propagating to other elements. <strong>e.stopImmediatePropagation()</strong> also prevents other handlers on the same element from firing. Use <strong>e.preventDefault()</strong> to prevent the default browser action (like form submission or link navigation).`
                },
                {
                    q: "How do classList methods work?",
                    a: `The <strong>classList</strong> property provides methods to manipulate an element's CSS classes: <strong>add()</strong> adds one or more classes, <strong>remove()</strong> removes classes, <strong>toggle()</strong> adds or removes a class, <strong>contains()</strong> checks for a class, and <strong>replace()</strong> swaps one class for another. classList is preferred over directly setting className because it does not overwrite existing classes.

<pre><code>const el = document.querySelector('.box');

el.classList.add('active', 'visible');
el.classList.remove('hidden');
el.classList.toggle('open');           // add if absent, remove if present
el.classList.contains('active');       // true
el.classList.replace('old', 'new');

// toggle with condition
el.classList.toggle('dark', isDarkMode); // add if true, remove if false

// Iterate classes
el.classList.forEach(cls =&gt; console.log(cls));</code></pre>

The <strong>toggle()</strong> method with a second boolean argument is particularly useful for conditional class application. classList returns a live <strong>DOMTokenList</strong> that updates automatically when classes change.`
                },
                {
                    q: "How do you use the dataset property for custom data attributes?",
                    a: `HTML <strong>data-*</strong> attributes store custom data on elements and are accessible via the element's <strong>dataset</strong> property in JavaScript. Attribute names are automatically converted from <strong>kebab-case</strong> (data-user-id) to <strong>camelCase</strong> (dataset.userId). All values are stored and returned as strings — you need to parse numbers explicitly. Dataset attributes are also accessible via CSS attribute selectors.

<pre><code>// &lt;div id="user" data-user-id="42" data-role="admin"&gt;

const el = document.getElementById('user');
console.log(el.dataset.userId);  // "42"
console.log(el.dataset.role);    // "admin"

// Set data attributes
el.dataset.status = 'active';
// Renders: data-status="active"

// Delete
delete el.dataset.role;

// In CSS: [data-role="admin"] { color: red; }</code></pre>

Dataset is commonly used to pass data from <strong>HTML to JavaScript</strong> in server-rendered pages, to store <strong>configuration</strong> on elements, and for <strong>event delegation</strong> where you need to identify which element was clicked. Values are always strings — use parseInt() or JSON.parse() for other types.`
                },
                {
                    q: "What is the difference between innerHTML, textContent, and innerText?",
                    a: `<strong>innerHTML</strong> gets or sets the HTML markup of an element (parses and renders tags). <strong>textContent</strong> gets or sets the raw text content (ignores tags, includes hidden text). <strong>innerText</strong> returns only <strong>visible text</strong>, respecting CSS and triggering reflow. For setting plain text, always use textContent — setting innerHTML with user input creates <strong>XSS vulnerabilities</strong>.

<pre><code>el.innerHTML = '&lt;b&gt;Bold&lt;/b&gt;';    // renders bold text
el.textContent = '&lt;b&gt;Bold&lt;/b&gt;';  // shows literal "&lt;b&gt;Bold&lt;/b&gt;"

// Security: never do this with user input!
// el.innerHTML = userInput;  // XSS risk!

// Safe alternative
el.textContent = userInput;  // always safe

// innerText vs textContent
// &lt;p&gt;Hello &lt;span style="display:none"&gt;hidden&lt;/span&gt;&lt;/p&gt;
el.textContent; // "Hello hidden"
el.innerText;   // "Hello" (respects CSS visibility)</code></pre>

<strong>textContent</strong> is faster than innerText because it does not trigger layout recalculation. Use textContent for reading all text content, innerText for visible text only, and innerHTML only when you need to set HTML from <strong>trusted sources</strong>.`
                },
                {
                    q: "What is a DocumentFragment and when should you use it?",
                    a: `A <strong>DocumentFragment</strong> is a lightweight, minimal document object that serves as a temporary container for DOM nodes. It exists only in memory and is not part of the live DOM tree. When you append a DocumentFragment to the DOM, all its children are inserted in a <strong>single operation</strong>, triggering only one reflow instead of one per element. This makes it ideal for batch DOM insertions.

<pre><code>const fragment = document.createDocumentFragment();

for (let i = 0; i &lt; 1000; i++) {
  const li = document.createElement('li');
  li.textContent = 'Item ' + i;
  fragment.appendChild(li);  // no reflow yet
}

document.querySelector('ul').appendChild(fragment);
// Single reflow — all 1000 items inserted at once

// Without fragment: 1000 separate reflows
// With fragment: 1 reflow — much faster</code></pre>

After appending, the DocumentFragment becomes <strong>empty</strong> — its children are moved to the DOM, not copied. For simple HTML insertion, <strong>insertAdjacentHTML()</strong> can be more convenient, but DocumentFragment is better for complex element creation with event listeners.`
                },
                {
                    q: "What is MutationObserver and how do you use it?",
                    a: `<strong>MutationObserver</strong> watches for changes in the DOM tree — attribute modifications, child node additions/removals, and text content changes. It replaces the deprecated Mutation Events and is <strong>asynchronous</strong> — it batches mutations and delivers them as microtasks. This makes it much more efficient than the old synchronous events. Configure it with an observe() call specifying which types of changes to watch.

<pre><code>const observer = new MutationObserver((mutations) =&gt; {
  mutations.forEach(m =&gt; {
    console.log(m.type, m.target);
  });
});

observer.observe(document.getElementById('app'), {
  childList: true,    // watch child additions/removals
  attributes: true,   // watch attribute changes
  subtree: true,      // watch all descendants
  characterData: true // watch text content changes
});

// Stop observing
observer.disconnect();</code></pre>

MutationObserver is used by frameworks like <strong>Angular</strong> (zone.js) and accessibility tools to detect DOM changes. Use <strong>observer.takeRecords()</strong> to get pending mutations synchronously before disconnecting, ensuring no changes are missed.`
                },
                {
                    q: "How do you traverse the DOM using parent, child, and sibling properties?",
                    a: `The DOM provides several properties for <strong>traversing nodes</strong> in the document tree. <strong>parentNode</strong> and <strong>parentElement</strong> move up, <strong>children</strong> and <strong>childNodes</strong> move down, and <strong>nextElementSibling</strong> / <strong>previousElementSibling</strong> move sideways. These properties let you navigate without querying the entire document.

<pre><code>const item = document.querySelector('.item');

// Moving up
console.log(item.parentNode);        // parent node (any node type)
console.log(item.parentElement);     // parent element only
console.log(item.closest('.list'));   // nearest ancestor matching selector

// Moving down
console.log(item.children);            // HTMLCollection of child elements
console.log(item.childNodes);          // NodeList including text nodes
console.log(item.firstElementChild);   // first child element
console.log(item.lastElementChild);    // last child element

// Moving sideways
console.log(item.nextElementSibling);      // next sibling element
console.log(item.previousElementSibling);  // previous sibling element

// Walking all children
for (const child of item.children) {
  console.log(child.tagName);
}</code></pre>

Note that <strong>childNodes</strong> includes text nodes and comments, while <strong>children</strong> returns only element nodes. Use <strong>closest()</strong> for ancestor lookup — it walks up the tree and returns the first element matching the given CSS selector, or null if none is found.`
                },
                {
                    q: "What is the difference between event.preventDefault() and event.stopPropagation()?",
                    a: `<strong>event.preventDefault()</strong> stops the browser's default action for that event (like navigating on link click or submitting a form), while <strong>event.stopPropagation()</strong> stops the event from bubbling up to parent elements. They serve completely different purposes and can be used together when needed.

<pre><code>// preventDefault — stops default browser behavior
document.querySelector('a').addEventListener('click', (e) => {
  e.preventDefault(); // link will NOT navigate
  console.log('Link clicked but navigation prevented');
});

// stopPropagation — stops event from reaching parent handlers
document.querySelector('.child').addEventListener('click', (e) => {
  e.stopPropagation(); // parent click handler will NOT fire
  console.log('Child clicked');
});

document.querySelector('.parent').addEventListener('click', () => {
  console.log('Parent clicked'); // never fires if child stops propagation
});

// stopImmediatePropagation — also stops other handlers on same element
document.querySelector('.btn').addEventListener('click', (e) => {
  e.stopImmediatePropagation();
  console.log('First handler'); // only this runs
});
document.querySelector('.btn').addEventListener('click', () => {
  console.log('Second handler'); // never fires
});</code></pre>

Use <strong>event.stopImmediatePropagation()</strong> when you want to prevent other handlers on the <strong>same element</strong> from firing as well. Avoid overusing stopPropagation as it can break event delegation patterns and make debugging harder — prefer checking event.target instead.`
                },
                {
                    q: "How do you create and dispatch custom events in JavaScript?",
                    a: `<strong>Custom events</strong> allow you to define your own event types beyond the built-in DOM events. Create them with the <strong>CustomEvent</strong> constructor and dispatch them using <strong>element.dispatchEvent()</strong>. You can pass data through the <strong>detail</strong> property, making custom events perfect for component communication.

<pre><code>// Creating a custom event with data
const event = new CustomEvent('user-login', {
  detail: { username: 'john', role: 'admin' },
  bubbles: true,      // event will bubble up
  cancelable: true,    // can be prevented
  composed: true       // crosses shadow DOM boundary
});

// Listening for the custom event
document.addEventListener('user-login', (e) => {
  console.log('User:', e.detail.username);  // "john"
  console.log('Role:', e.detail.role);      // "admin"
});

// Dispatching the event
document.dispatchEvent(event);

// Practical example — notify parent of state change
class CartWidget {
  addItem(item) {
    this.items.push(item);
    this.element.dispatchEvent(new CustomEvent('cart-updated', {
      detail: { count: this.items.length, item },
      bubbles: true
    }));
  }
}</code></pre>

Custom events follow the same bubbling and capturing rules as native events. Set <strong>bubbles: true</strong> if you want parent elements to catch the event. The <strong>composed</strong> option is important when working with <strong>Shadow DOM</strong> — it allows events to cross shadow boundaries.`
                },
                {
                    q: "What is the IntersectionObserver API and how is it used?",
                    a: `<strong>IntersectionObserver</strong> asynchronously watches for changes in the intersection of a target element with an ancestor element or the viewport. It is commonly used for <strong>lazy loading images</strong>, <strong>infinite scrolling</strong>, and <strong>triggering animations</strong> when elements come into view. It replaces expensive scroll event listeners with a performant callback-based approach.

<pre><code>// Basic usage — detect when element enters viewport
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log(entry.target.id, 'is visible');
      console.log('Visibility ratio:', entry.intersectionRatio);
    }
  });
}, {
  root: null,          // null = viewport
  rootMargin: '0px',   // margin around root
  threshold: [0, 0.5, 1.0]  // trigger at 0%, 50%, 100% visibility
});

observer.observe(document.querySelector('#section1'));

// Lazy loading images
const imgObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const img = entry.target;
      img.src = img.dataset.src;   // load actual image
      imgObserver.unobserve(img);  // stop watching once loaded
    }
  });
}, { rootMargin: '200px' });  // start loading 200px before visible

document.querySelectorAll('img[data-src]').forEach(img => {
  imgObserver.observe(img);
});</code></pre>

The <strong>rootMargin</strong> option lets you trigger callbacks before the element actually enters the viewport — useful for preloading content. Always call <strong>unobserve()</strong> for one-time observations like lazy loading to avoid unnecessary callbacks and memory leaks.`
                },
                {
                    q: "How does cloneNode() work and what is the difference between shallow and deep cloning?",
                    a: `<strong>cloneNode()</strong> creates a copy of a DOM node. When called with <strong>false</strong> (or no argument), it performs a <strong>shallow clone</strong> — copying only the node itself with its attributes. When called with <strong>true</strong>, it performs a <strong>deep clone</strong> — copying the node and all its descendants including text content and child elements.

<pre><code>const original = document.querySelector('.card');

// Shallow clone — only the element itself (no children)
const shallow = original.cloneNode(false);
console.log(shallow.children.length); // 0
console.log(shallow.className);       // "card" (attributes copied)

// Deep clone — element + all descendants
const deep = original.cloneNode(true);
console.log(deep.children.length);    // same as original
console.log(deep.innerHTML);          // same content as original

// Cloned nodes are NOT in the DOM until appended
document.querySelector('.container').appendChild(deep);

// Important: IDs are also cloned — must update to avoid duplicates
deep.id = 'card-copy';

// Event listeners are NOT cloned
original.addEventListener('click', handler);
const clone = original.cloneNode(true);
// clone does NOT have the click handler</code></pre>

Key things to remember: <strong>cloneNode does not copy event listeners</strong> — you must reattach them manually. Cloned elements with <strong>id</strong> attributes will create duplicate IDs in the document, which is invalid HTML. The <strong>importNode()</strong> method works similarly but is used for importing nodes from other documents.`
                },
                {
                    q: "What is the difference between window and document objects?",
                    a: `The <strong>window</strong> object represents the browser window and is the <strong>global object</strong> in browser JavaScript — all global variables and functions are properties of window. The <strong>document</strong> object is a property of window and represents the <strong>HTML document</strong> loaded in the window. Think of window as the container and document as the content.

<pre><code>// Window — browser window and global scope
console.log(window.innerWidth);     // viewport width
console.log(window.innerHeight);    // viewport height
console.log(window.location.href);  // current URL
console.log(window.navigator);     // browser info
window.alert('Hello');              // browser dialog
window.setTimeout(fn, 1000);       // timer

// Global variables are window properties
var x = 10;
console.log(window.x); // 10 (var only, not let/const)

// Document — the HTML document
console.log(document.title);           // page title
console.log(document.URL);            // document URL
console.log(document.readyState);     // loading state
document.querySelector('.el');         // find elements
document.createElement('div');         // create elements

// Window events vs Document events
window.addEventListener('resize', () => console.log('resized'));
window.addEventListener('scroll', () => console.log('scrolled'));
document.addEventListener('DOMContentLoaded', () => console.log('DOM ready'));
document.addEventListener('click', () => console.log('clicked'));</code></pre>

The <strong>document</strong> is available after the HTML is parsed, while certain <strong>window</strong> properties like <strong>innerWidth</strong> are available even before the document finishes loading. Events like <strong>resize</strong> and <strong>scroll</strong> belong to window, while DOM-related events like <strong>DOMContentLoaded</strong> belong to document.`
                },
                {
                    q: "How do you get computed styles and dimensions of an element?",
                    a: `<strong>getComputedStyle()</strong> returns the final, computed values of all CSS properties on an element after all stylesheets and inline styles have been applied. For dimensions, <strong>getBoundingClientRect()</strong> returns an element's size and position relative to the viewport. These methods are essential for dynamic layout calculations.

<pre><code>const el = document.querySelector('.box');

// getComputedStyle — all resolved CSS values
const styles = window.getComputedStyle(el);
console.log(styles.color);           // "rgb(255, 0, 0)"
console.log(styles.fontSize);        // "16px"
console.log(styles.display);         // "block"
console.log(styles.marginTop);       // "10px"

// Pseudo-element styles
const before = window.getComputedStyle(el, '::before');
console.log(before.content);         // computed content value

// getBoundingClientRect — size and position
const rect = el.getBoundingClientRect();
console.log(rect.width, rect.height);  // element dimensions
console.log(rect.top, rect.left);      // position from viewport
console.log(rect.x, rect.y);          // same as top/left

// Element dimension properties
console.log(el.offsetWidth);    // width + padding + border
console.log(el.clientWidth);    // width + padding (no border)
console.log(el.scrollWidth);    // total scrollable width
console.log(el.offsetTop);     // distance from offset parent</code></pre>

<strong>getComputedStyle</strong> returns read-only values — you cannot set styles through it. Use <strong>element.style</strong> to set inline styles. Reading computed styles or dimensions triggers a <strong>layout reflow</strong>, so batch these reads together and avoid mixing reads and writes in a loop for better performance.`
                },
                {
                    q: "What is the Shadow DOM and how does it provide encapsulation?",
                    a: `The <strong>Shadow DOM</strong> provides DOM and CSS <strong>encapsulation</strong> by attaching a hidden, separate DOM tree to an element. Styles defined inside a shadow tree do not leak out, and external styles do not penetrate in. This is the foundation of <strong>Web Components</strong> and is used by native elements like <strong>&lt;input&gt;</strong> and <strong>&lt;video&gt;</strong>.

<pre><code>// Creating a shadow DOM
const host = document.querySelector('#my-widget');
const shadow = host.attachShadow({ mode: 'open' });

// Add content to shadow DOM
shadow.innerHTML = ' + "'<style>p { color: red; }</style><p>Shadow content</p>'" + ';

// This style ONLY affects the shadow DOM paragraph
// External p { color: blue } will NOT affect it

// mode: "open" vs "closed"
// open — shadow root accessible via element.shadowRoot
console.log(host.shadowRoot); // ShadowRoot object

// closed — shadowRoot returns null (true encapsulation)
const closed = host.attachShadow({ mode: 'closed' });
console.log(host.shadowRoot); // null

// Slots — project light DOM content into shadow DOM
shadow.innerHTML = ' + "'<slot name=" + '"header"' + "></slot><slot></slot>'" + ';
// In light DOM: <span slot="header">Title</span>

// Styling from outside with CSS custom properties
shadow.innerHTML = ' + "'<style>p { color: var(--text-color, black); }</style><p>Styled</p>'" + ';
// Host page: #my-widget { --text-color: blue; }</code></pre>

Shadow DOM elements are invisible to <strong>document.querySelector</strong> — you must query within the shadow root itself. CSS custom properties (<strong>CSS variables</strong>) are the primary way to style shadow DOM content from outside. The <strong>::part()</strong> pseudo-element also allows external styling of specifically exposed parts.`
                },
                {
                    q: "How do you handle DOM manipulation performance and avoid layout thrashing?",
                    a: `<strong>Layout thrashing</strong> occurs when you repeatedly read and write DOM properties in a loop, forcing the browser to recalculate layout on every read. To avoid it, <strong>batch all reads together</strong>, then <strong>batch all writes together</strong>. Use <strong>DocumentFragment</strong>, <strong>requestAnimationFrame</strong>, and CSS classes instead of individual style changes.

<pre><code>// BAD — layout thrashing (read-write-read-write)
const items = document.querySelectorAll('.item');
items.forEach(item => {
  const height = item.offsetHeight;    // READ (forces layout)
  item.style.height = height + 10 + 'px'; // WRITE (invalidates layout)
  // next read forces layout recalculation again!
});

// GOOD — batch reads, then batch writes
const heights = [];
items.forEach(item => heights.push(item.offsetHeight)); // all READS
items.forEach((item, i) => {
  item.style.height = heights[i] + 10 + 'px';          // all WRITES
});

// GOOD — use requestAnimationFrame for visual updates
function animate() {
  element.style.transform = ' + "'translateX(' + position + 'px)'" + ';
  requestAnimationFrame(animate);
}
requestAnimationFrame(animate);

// GOOD — use DocumentFragment for bulk inserts
const fragment = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
  const li = document.createElement('li');
  li.textContent = 'Item ' + i;
  fragment.appendChild(li);
}
list.appendChild(fragment); // single reflow

// GOOD — toggle CSS class instead of multiple style changes
element.classList.add('active'); // one reflow vs many</code></pre>

Other performance tips: use <strong>display: none</strong> during bulk updates (removes element from layout), prefer <strong>transform</strong> and <strong>opacity</strong> for animations (compositor-only properties), and use <strong>will-change</strong> CSS property to hint the browser about upcoming changes. The <strong>fastdom</strong> library can help manage read-write batching automatically.`
                },
                {
                    q: "What is the ResizeObserver API and when would you use it?",
                    a: `<strong>ResizeObserver</strong> watches for changes in an element's dimensions and fires a callback when the element is resized. Unlike the <strong>window resize</strong> event, it tracks individual elements and detects size changes caused by CSS, content changes, or layout shifts — not just viewport resizing.

<pre><code>// Basic usage
const observer = new ResizeObserver((entries) => {
  for (const entry of entries) {
    const { width, height } = entry.contentRect;
    console.log('Element resized:', width, 'x', height);

    // Access different box models
    console.log('Border box:', entry.borderBoxSize[0].inlineSize);
    console.log('Content box:', entry.contentBoxSize[0].inlineSize);
  }
});

// Observe one or more elements
observer.observe(document.querySelector('.panel'));
observer.observe(document.querySelector('.sidebar'));

// Practical example — responsive component
const container = document.querySelector('.card-grid');
const resizeObs = new ResizeObserver((entries) => {
  const width = entries[0].contentRect.width;
  if (width < 400) {
    container.classList.add('compact');
  } else {
    container.classList.remove('compact');
  }
});
resizeObs.observe(container);

// Cleanup
observer.unobserve(element);  // stop watching one element
observer.disconnect();         // stop watching all elements</code></pre>

ResizeObserver is commonly used for <strong>container queries</strong> (before CSS container queries existed), responsive charts, and components that adapt to their container size rather than the viewport. It avoids the performance cost of polling element dimensions or listening to the global <strong>window resize</strong> event for element-level changes.`
                }
            ]
        },
        {
            id: "error-handling",
            title: "Error Handling",
            icon: "bi-exclamation-triangle",
            questions: [
                {
                    q: "How does try/catch/finally work?",
                    a: `The <strong>try/catch/finally</strong> statement handles runtime errors gracefully. The <strong>try</strong> block wraps code that may throw an error. The <strong>catch</strong> block receives the error object and handles it. The <strong>finally</strong> block always executes regardless of success or failure — making it ideal for cleanup tasks like closing connections.

<pre><code>try {
  const data = JSON.parse(invalidJson);
} catch (error) {
  console.error('Parse failed:', error.message);
} finally {
  console.log('Always runs');
}

// finally runs even with return
function getData() {
  try {
    return 'data';
  } finally {
    console.log('Cleanup'); // runs before return
  }
}

// try/finally without catch
function lockAndProcess() {
  lock.acquire();
  try {
    processData(); // if this throws, finally still runs
  } finally {
    lock.release(); // always release the lock
  }
}

// Nested try/catch
try {
  try {
    throw new Error('inner');
  } catch (e) {
    console.log('Inner catch:', e.message);
    throw e; // rethrow to outer
  }
} catch (e) {
  console.log('Outer catch:', e.message);
}</code></pre>

You can omit <strong>catch</strong> if <strong>finally</strong> is present, but you cannot omit both. The <strong>finally</strong> block runs even if the try or catch block contains a <strong>return</strong>, <strong>break</strong>, or <strong>continue</strong> statement — it always gets the last word before control leaves the statement.`
                },
                {
                    q: "How do you create custom Error classes?",
                    a: `Creating <strong>custom Error classes</strong> by extending the built-in <strong>Error</strong> class lets you define specific error types with meaningful names and additional properties. This enables targeted error handling using <strong>instanceof</strong> checks in catch blocks, making your error handling more precise and maintainable.

<pre><code>class ValidationError extends Error {
  constructor(field, message) {
    super(message);
    this.name = 'ValidationError';
    this.field = field;
  }
}

class NotFoundError extends Error {
  constructor(resource) {
    super(resource + ' not found');
    this.name = 'NotFoundError';
    this.status = 404;
  }
}

class AuthError extends Error {
  constructor(message) {
    super(message);
    this.name = 'AuthError';
    this.status = 401;
  }
}

try {
  throw new ValidationError('email', 'Invalid email');
} catch (e) {
  if (e instanceof ValidationError) {
    console.log('Field:', e.field); // "email"
  } else if (e instanceof NotFoundError) {
    console.log('Status:', e.status);
  } else {
    throw e; // rethrow unknown errors
  }
}</code></pre>

Always set <strong>this.name</strong> in the constructor to match the class name — this ensures stack traces and error logs display the correct error type. Custom errors preserve the <strong>stack trace</strong> automatically through the <strong>super()</strong> call. Use specific error types for different failure categories rather than generic Error objects.`
                },
                {
                    q: "What are the built-in Error types in JavaScript?",
                    a: `JavaScript provides several <strong>built-in Error types</strong> that represent different categories of runtime problems. <strong>TypeError</strong> occurs when a value is not the expected type, <strong>ReferenceError</strong> when accessing an undeclared variable, <strong>SyntaxError</strong> for invalid code, and <strong>RangeError</strong> when a value falls outside an allowed range.

<pre><code>// TypeError — wrong type or calling non-function
null.toString();           // TypeError
undefined.map(x => x);    // TypeError
(42).toUpperCase();        // TypeError

// ReferenceError — variable not declared
console.log(foo);          // ReferenceError: foo is not defined

// SyntaxError — invalid code (caught at parse time)
// eval('if(');             // SyntaxError: Unexpected end of input

// RangeError — value out of valid range
new Array(-1);             // RangeError: Invalid array length
(1).toFixed(200);          // RangeError

// URIError — malformed URI
decodeURIComponent('%');   // URIError

// All error types share common properties
try {
  null.method();
} catch (e) {
  console.log(e.name);    // "TypeError"
  console.log(e.message); // "Cannot read properties of null"
  console.log(e.stack);   // full stack trace
}</code></pre>

<strong>SyntaxError</strong> is unique because it is typically caught at parse time — the script won't run at all unless the syntax error is inside <strong>eval()</strong> or <strong>new Function()</strong>. The <strong>EvalError</strong> type exists for historical reasons but is rarely encountered in modern JavaScript.`
                },
                {
                    q: "How does the throw statement work?",
                    a: `The <strong>throw</strong> statement stops normal execution and passes control to the nearest <strong>catch</strong> block in the call stack. You can throw any value, but throwing <strong>Error objects</strong> is best practice because they include a stack trace, error name, and message — essential for debugging.

<pre><code>// Throw an Error object (recommended)
throw new Error('Something went wrong');

// Throw custom error
throw new ValidationError('age', 'Must be positive');

// You can throw anything (not recommended)
throw 'error string';
throw 404;
throw { code: 'INVALID' };

// Rethrow after logging
try {
  riskyOperation();
} catch (e) {
  console.error(e);
  throw e;  // rethrow for caller to handle
}

// Conditional throwing
function divide(a, b) {
  if (b === 0) throw new RangeError('Division by zero');
  return a / b;
}

// throw is an expression in some contexts
const value = data ?? (() => { throw new Error('No data'); })();</code></pre>

Always throw <strong>Error instances</strong> rather than primitive values — strings and numbers lack stack traces, making debugging extremely difficult. When rethrowing errors, consider wrapping them in a new error with additional context using the <strong>cause</strong> property: <strong>throw new Error('Load failed', { cause: originalError })</strong>.`
                },
                {
                    q: "How do you handle errors in async/await code?",
                    a: `Wrap <strong>await</strong> calls in <strong>try/catch</strong> to handle errors in async functions. For multiple independent async operations, use <strong>Promise.allSettled</strong> to avoid short-circuiting on the first failure. Unhandled rejections in async functions become <strong>unhandled promise rejections</strong> if not caught.

<pre><code>async function fetchUser(id) {
  try {
    const res = await fetch('/api/user/' + id);
    if (!res.ok) throw new Error('HTTP ' + res.status);
    return await res.json();
  } catch (error) {
    console.error('Fetch failed:', error);
    return null;
  }
}

// Multiple independent calls
const results = await Promise.allSettled([
  fetchUser(1),
  fetchUser(2)
]);
results.forEach(r => {
  if (r.status === 'fulfilled') console.log(r.value);
  else console.log('Failed:', r.reason);
});

// Error cause chaining (ES2022)
async function loadProfile(id) {
  try {
    return await fetchUser(id);
  } catch (err) {
    throw new Error('Profile load failed', { cause: err });
  }
}</code></pre>

When using <strong>Promise.all()</strong>, a single rejection rejects the entire batch — use <strong>Promise.allSettled()</strong> when you want all results regardless of individual failures. The <strong>cause</strong> property (ES2022) lets you chain errors to preserve the original failure context while adding higher-level meaning.`
                },
                {
                    q: "How does window.onerror work for global error handling?",
                    a: `<strong>window.onerror</strong> is a global handler that catches uncaught runtime errors across your entire application. It receives five arguments: the error message, source file URL, line number, column number, and the error object itself. Returning <strong>true</strong> suppresses the default browser error logging in the console.

<pre><code>window.onerror = function(message, source, line, col, error) {
  console.log('Error:', message);
  console.log('Source:', source + ':' + line + ':' + col);
  console.log('Stack:', error?.stack);

  // Send to error tracking service
  sendToService({ message, source, line, col, stack: error?.stack });

  return true;  // suppress default console error
};

// Modern alternative — addEventListener
window.addEventListener('error', (event) => {
  console.log('Error:', event.message);
  console.log('File:', event.filename);
  console.log('Line:', event.lineno);
  event.preventDefault(); // suppress default
});

// Note: does NOT catch promise rejections
// Use 'unhandledrejection' for those

// Also does NOT catch errors in async callbacks
// or cross-origin script errors (unless CORS headers set)</code></pre>

The <strong>window.onerror</strong> handler should be set as early as possible in your application — ideally in the <strong>&lt;head&gt;</strong> section before other scripts. Note that cross-origin scripts only report "Script error" unless the script tag has <strong>crossorigin="anonymous"</strong> and the server sends appropriate CORS headers.`
                },
                {
                    q: "How do you handle unhandled promise rejections?",
                    a: `The <strong>unhandledrejection</strong> event fires on the window object when a Promise is rejected and no <strong>.catch()</strong> handler is attached. This is essential for catching errors that would otherwise be silently swallowed, especially in complex async workflows where a rejection handler might be accidentally omitted.

<pre><code>window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled rejection:', event.reason);

  // Prevent default browser warning
  event.preventDefault();

  // Log to error service
  logError(event.reason);
});

// This rejection will be caught by the handler above
Promise.reject(new Error('Oops'));

// This will NOT trigger it (has .catch)
Promise.reject(new Error('Handled')).catch(e => {});

// rejectionhandled — fires when a rejection is later handled
window.addEventListener('rejectionhandled', (event) => {
  console.log('Rejection was handled late:', event.reason);
});

// Node.js equivalent
process.on('unhandledRejection', (reason, promise) => {
  console.error('Unhandled rejection:', reason);
});</code></pre>

In <strong>Node.js</strong>, unhandled promise rejections will terminate the process by default (since Node 15+). The <strong>rejectionhandled</strong> event is the companion to <strong>unhandledrejection</strong> — it fires when a previously unhandled rejection later gets a handler attached, which can happen with delayed .catch() calls.`
                },
                {
                    q: "How do you read and use error stack traces?",
                    a: `The <strong>stack</strong> property of an Error object contains a string showing the call stack at the point the error was created. It displays function names, file paths, and line numbers — forming a trail from the error back to its origin. This is the most important tool for <strong>debugging runtime errors</strong>.

<pre><code>function c() { throw new Error('fail'); }
function b() { c(); }
function a() { b(); }

try {
  a();
} catch (e) {
  console.log(e.stack);
  // Error: fail
  //   at c (script.js:1)
  //   at b (script.js:2)
  //   at a (script.js:3)
}

// Capture stack without throwing
const trace = new Error('debug');
console.log(trace.stack); // stack at creation point

// Custom stack trace starting point (V8)
function apiFunction() {
  const err = new Error('API Error');
  Error.captureStackTrace(err, apiFunction);
  throw err; // stack starts from caller, not apiFunction
}

// Stack trace with async code
async function fetchData() {
  const response = await fetch('/api');
  throw new Error('parse error');
  // stack shows async call chain
}</code></pre>

Stack traces read <strong>bottom to top</strong> — the deepest function (where the error occurred) is at the top. <strong>Error.captureStackTrace()</strong> (V8 engines) lets you control where the stack trace starts, which is useful in libraries to hide internal implementation details from the trace.`
                },
                {
                    q: "How does error propagation work through the call stack?",
                    a: `When an error is thrown, JavaScript <strong>unwinds the call stack</strong> looking for a catch block. Each function in the chain exits immediately as control moves upward. If no catch block is found anywhere in the stack, the error becomes an <strong>uncaught exception</strong> and reaches the global error handler.

<pre><code>function low() {
  throw new Error('disk full');
}

function mid() {
  // Not caught here — propagates up
  low();
}

function high() {
  try {
    mid();
  } catch (e) {
    console.log('Caught:', e.message); // "disk full"
  }
}

high(); // Error thrown in low(), caught in high()

// Partial handling + rethrow
function process() {
  try {
    low();
  } catch (e) {
    logError(e);     // handle partially (log it)
    throw e;         // let caller handle too
  }
}

// Error wrapping — add context while preserving original
function loadConfig() {
  try {
    readFile('config.json');
  } catch (e) {
    throw new Error('Config load failed', { cause: e });
  }
}</code></pre>

The <strong>cause</strong> property (ES2022) enables error wrapping — you catch a low-level error, wrap it in a higher-level error with additional context, and rethrow. This preserves the original error chain while making error messages more meaningful at each abstraction layer.`
                },
                {
                    q: "What are best practices for error handling in JavaScript?",
                    a: `Always throw <strong>Error objects</strong> (not strings or numbers), use <strong>specific error types</strong> for different failure categories, handle errors as close to the source as possible, never silently swallow errors with empty catch blocks, and set up <strong>global handlers</strong> as a safety net for anything that slips through.

<pre><code>// Bad: throwing strings
throw 'something failed';

// Good: throw Error objects
throw new Error('something failed');

// Bad: empty catch (swallowing errors)
try { riskyCall(); } catch (e) {}

// Good: log or rethrow
try { riskyCall(); }
catch (e) { console.error(e); throw e; }

// Good: Use specific error types
if (!user) throw new NotFoundError('User');
if (!email.includes('@')) throw new ValidationError('email');

// Good: Error cause for context
try {
  await fetchData();
} catch (e) {
  throw new Error('Data load failed', { cause: e });
}

// Good: Global safety net
window.onerror = (msg) => logService.send(msg);
window.addEventListener('unhandledrejection', (e) => {
  logService.send(e.reason);
});</code></pre>

Additional best practices: use <strong>Error.cause</strong> (ES2022) to chain errors and preserve context, prefer <strong>async/await with try/catch</strong> over .catch() chains for readability, always validate data at system boundaries (API inputs, file reads), and use a centralized error reporting service in production to catch issues early.`
                },
                {
                    q: "What is the Error.cause property and how does it work?",
                    a: `The <strong>Error.cause</strong> property (ES2022) allows you to chain errors by attaching the original error to a new, higher-level error. This preserves the full error chain while adding meaningful context at each layer. Pass it as the second argument to the Error constructor using <strong>{ cause: originalError }</strong>.

<pre><code>// Basic error cause chaining
async function fetchJSON(url) {
  try {
    const response = await fetch(url);
    return await response.json();
  } catch (err) {
    throw new Error('Failed to fetch JSON from ' + url, { cause: err });
  }
}

// Multi-level error chain
async function loadUserProfile(id) {
  try {
    return await fetchJSON('/api/users/' + id);
  } catch (err) {
    throw new Error('Profile load failed for user ' + id, { cause: err });
  }
}

// Inspecting the cause chain
try {
  await loadUserProfile(42);
} catch (err) {
  console.log(err.message);        // "Profile load failed for user 42"
  console.log(err.cause.message);  // "Failed to fetch JSON from /api/users/42"
  console.log(err.cause.cause);    // Original TypeError or network error
}</code></pre>

Error cause creates a <strong>linked chain</strong> of errors similar to Java's exception chaining. Each level adds context about what operation failed, while the deepest cause reveals the root problem. This is invaluable for debugging complex async workflows where errors pass through multiple layers.`
                },
                {
                    q: "How do you handle errors in Promise chains?",
                    a: `In Promise chains, errors are handled using <strong>.catch()</strong> which catches any rejection or thrown error from preceding <strong>.then()</strong> handlers. A single .catch() at the end of the chain handles errors from all previous steps. You can also recover from errors and continue the chain.

<pre><code>// Single catch at the end
fetch('/api/data')
  .then(res => res.json())
  .then(data => processData(data))
  .then(result => displayResult(result))
  .catch(err => console.error('Something failed:', err));

// Mid-chain recovery
fetch('/api/primary')
  .then(res => res.json())
  .catch(err => {
    console.warn('Primary failed, trying fallback');
    return fetch('/api/fallback').then(r => r.json());
  })
  .then(data => console.log('Got data:', data))
  .catch(err => console.error('Both failed:', err));

// .then() with reject handler vs .catch()
promise.then(onSuccess, onError);  // onError only catches promise rejection
promise.then(onSuccess).catch(onError); // catches both rejection AND onSuccess errors</code></pre>

The key difference between <strong>.then(success, error)</strong> and <strong>.then(success).catch(error)</strong> is that the second form also catches errors thrown inside the success handler. Always prefer <strong>.catch()</strong> at the end of chains for comprehensive error handling.`
                },
                {
                    q: "What is the difference between operational and programmer errors?",
                    a: `<strong>Operational errors</strong> are expected runtime problems like network failures, invalid user input, or file-not-found — these should be handled gracefully. <strong>Programmer errors</strong> are bugs in the code like calling a function with wrong arguments or accessing properties on null — these should be fixed, not caught and hidden.

<pre><code>// Operational errors — handle gracefully
try {
  const data = await fetch('/api/data');
  if (!data.ok) {
    // Expected failure — show user-friendly message
    showError('Server is temporarily unavailable');
  }
} catch (networkErr) {
  showError('Please check your internet connection');
}

// Programmer errors — fix the code, don't catch
// These indicate bugs:
// - TypeError: Cannot read properties of undefined
// - RangeError: Invalid array length
// - Passing wrong argument types

// Bad: hiding programmer errors
try {
  const result = processData(null); // bug: null should not be passed
} catch (e) {
  // Silently swallowing a bug!
  return defaultValue;
}

// Good: validate at boundaries, let bugs crash
function processData(data) {
  if (!data) throw new TypeError('data is required'); // fail fast
  return data.map(item => item.value);
}</code></pre>

The general rule: <strong>handle operational errors</strong> (retry, fallback, user message) and <strong>let programmer errors crash</strong> with clear error messages so they get noticed and fixed. Catching programmer errors silently leads to hidden bugs and unpredictable behavior.`
                },
                {
                    q: "How do you implement an error boundary pattern in JavaScript?",
                    a: `An <strong>error boundary</strong> is a pattern that wraps a section of code to catch and handle errors without crashing the entire application. While React has built-in error boundaries, you can implement similar patterns in vanilla JavaScript using try/catch wrappers around critical code sections.

<pre><code>// Function wrapper error boundary
function errorBoundary(fn, fallback) {
  return function(...args) {
    try {
      return fn.apply(this, args);
    } catch (error) {
      console.error('Error caught by boundary:', error);
      return typeof fallback === 'function' ? fallback(error) : fallback;
    }
  };
}

// Usage
const safeParseJSON = errorBoundary(JSON.parse, null);
safeParseJSON('invalid');  // null (instead of throwing)
safeParseJSON('{"a":1}');  // { a: 1 }

// Async error boundary
function asyncBoundary(fn, fallback) {
  return async function(...args) {
    try {
      return await fn.apply(this, args);
    } catch (error) {
      console.error('Async error:', error);
      return typeof fallback === 'function' ? fallback(error) : fallback;
    }
  };
}

// Widget isolation
function renderWidget(name, renderFn) {
  try {
    renderFn();
  } catch (e) {
    console.error(name + ' failed:', e);
    document.getElementById(name).textContent = 'Widget unavailable';
  }
}</code></pre>

Error boundaries are especially useful in <strong>modular applications</strong> where one component's failure should not bring down the entire page. Each independent widget or feature can be wrapped in its own boundary, allowing the rest of the application to continue functioning normally.`
                },
                {
                    q: "How does optional catch binding work?",
                    a: `<strong>Optional catch binding</strong> (ES2019) allows you to omit the error parameter in a catch block when you do not need to reference the error. This produces cleaner code when you only care that an error occurred, not what the error was.

<pre><code>// Before ES2019 — parameter required even if unused
try {
  JSON.parse(input);
} catch (unusedError) {
  return defaultValue;
}

// ES2019+ — parameter is optional
try {
  JSON.parse(input);
} catch {
  return defaultValue;
}

// Common use cases

// Feature detection
let supportsFeature = false;
try {
  supportsFeature = typeof SharedArrayBuffer !== 'undefined';
} catch {
  // Not available in this environment
}

// Silent fallback when error details don't matter
function tryParseInt(str) {
  try {
    return parseInt(str, 10);
  } catch {
    return 0;
  }
}</code></pre>

Use optional catch binding when the error object is <strong>truly not needed</strong> — for example, in feature detection, fallback logic, or cleanup code. If you might need to log or rethrow the error, always keep the parameter to preserve access to the error details.`
                },
                {
                    q: "What is the AggregateError and when is it used?",
                    a: `<strong>AggregateError</strong> (ES2021) wraps multiple errors into a single error object. It is primarily thrown by <strong>Promise.any()</strong> when all promises reject, but you can also create it manually to group related errors from batch operations.

<pre><code>// Promise.any — throws AggregateError when all reject
try {
  const result = await Promise.any([
    fetch('https://primary.api/data'),
    fetch('https://backup.api/data'),
    fetch('https://fallback.api/data')
  ]);
} catch (err) {
  console.log(err instanceof AggregateError); // true
  console.log(err.message);  // "All promises were rejected"
  console.log(err.errors);   // array of individual errors
  err.errors.forEach((e, i) => {
    console.log('Error ' + i + ':', e.message);
  });
}

// Manual AggregateError for batch validation
function validateForm(fields) {
  const errors = [];
  if (!fields.name) errors.push(new Error('Name required'));
  if (!fields.email) errors.push(new Error('Email required'));
  if (!fields.age || fields.age < 0) errors.push(new Error('Invalid age'));

  if (errors.length > 0) {
    throw new AggregateError(errors, 'Form validation failed');
  }
}</code></pre>

<strong>AggregateError</strong> extends Error and has an <strong>errors</strong> property containing the array of individual error objects. This is useful for batch operations like form validation, parallel API calls, or any scenario where multiple things can fail independently and you want to report all failures at once.`
                },
                {
                    q: "How do you implement retry logic for error-prone operations?",
                    a: `<strong>Retry logic</strong> automatically re-attempts a failed operation a specified number of times with optional delays between attempts. This is essential for handling transient errors like <strong>network timeouts</strong>, <strong>rate limiting</strong>, and <strong>temporary server unavailability</strong>.

<pre><code>// Basic retry with exponential backoff
async function retry(fn, maxRetries = 3, baseDelay = 1000) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries) throw error;

      const delay = baseDelay * Math.pow(2, attempt - 1);
      console.log('Attempt ' + attempt + ' failed, retrying in ' + delay + 'ms');
      await new Promise(resolve => setTimeout(resolve, delay));
    }
  }
}

// Usage
const data = await retry(() => fetch('/api/data').then(r => r.json()));

// Retry with condition — only retry certain errors
async function retryIf(fn, shouldRetry, maxRetries = 3) {
  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      return await fn();
    } catch (error) {
      if (attempt === maxRetries || !shouldRetry(error)) throw error;
      await new Promise(r => setTimeout(r, 1000 * attempt));
    }
  }
}

// Only retry on network errors, not 4xx
await retryIf(
  () => fetchData(),
  (err) => err.status >= 500 || err.message === 'Failed to fetch'
);</code></pre>

<strong>Exponential backoff</strong> (doubling the delay each retry) prevents overwhelming a struggling server. Add <strong>jitter</strong> (random variation) to avoid thundering herd problems where many clients retry simultaneously. Set a reasonable <strong>maxRetries</strong> limit to prevent infinite loops.`
                },
                {
                    q: "How do you handle errors in generators and iterators?",
                    a: `Generators have a <strong>throw()</strong> method that injects an error into the generator at the point where it last yielded. The generator can catch this error internally with try/catch, or let it propagate up to the caller if not caught.

<pre><code>function* dataProcessor() {
  while (true) {
    try {
      const data = yield 'waiting for data';
      console.log('Processing:', data);
    } catch (error) {
      console.error('Error in generator:', error.message);
      // Can recover and continue, or rethrow
    }
  }
}

const gen = dataProcessor();
gen.next();                              // start generator
gen.next('batch1');                      // "Processing: batch1"
gen.throw(new Error('Invalid data'));    // "Error in generator: Invalid data"
gen.next('batch2');                      // continues: "Processing: batch2"

// return() — force generator to finish
gen.return('done');                      // { value: 'done', done: true }

// Async generator error handling
async function* fetchPages(urls) {
  for (const url of urls) {
    try {
      const res = await fetch(url);
      yield await res.json();
    } catch (err) {
      yield { error: err.message, url };
    }
  }
}</code></pre>

The <strong>generator.return(value)</strong> method forces the generator to complete, triggering any finally blocks inside it. When using <strong>for...of</strong> loops with generators, an unhandled error inside the generator will propagate to the loop and terminate iteration.`
                },
                {
                    q: "How do you implement a global error logging service?",
                    a: `A <strong>global error logging service</strong> centralizes error collection by combining <strong>window.onerror</strong>, <strong>unhandledrejection</strong>, and a reporting mechanism. This captures both synchronous and asynchronous errors across the entire application and sends them to a backend for monitoring.

<pre><code>class ErrorLogger {
  constructor(endpoint) {
    this.endpoint = endpoint;
    this.queue = [];
    this.init();
  }

  init() {
    // Catch synchronous errors
    window.onerror = (msg, source, line, col, error) => {
      this.log({ type: 'error', msg, source, line, col, stack: error?.stack });
      return true;
    };

    // Catch unhandled promise rejections
    window.addEventListener('unhandledrejection', (event) => {
      this.log({ type: 'rejection', reason: String(event.reason) });
    });

    // Flush queue periodically
    setInterval(() => this.flush(), 5000);
    window.addEventListener('beforeunload', () => this.flush());
  }

  log(errorData) {
    this.queue.push({
      ...errorData,
      timestamp: Date.now(),
      url: window.location.href,
      userAgent: navigator.userAgent
    });
  }

  flush() {
    if (this.queue.length === 0) return;
    const batch = this.queue.splice(0);
    navigator.sendBeacon(this.endpoint, JSON.stringify(batch));
  }
}

const logger = new ErrorLogger('/api/errors');</code></pre>

Use <strong>navigator.sendBeacon()</strong> for sending error data because it works even during page unload — unlike fetch, it guarantees delivery when the user navigates away. <strong>Batch errors</strong> to avoid overwhelming the server, and include context like the current URL, timestamp, and user agent to make debugging easier.`
                },
                {
                    q: "What is structured error handling with Error subclasses?",
                    a: `<strong>Structured error handling</strong> uses a hierarchy of custom Error subclasses to categorize errors by domain and severity. This enables precise error handling where different types of failures trigger different recovery strategies, rather than treating all errors the same way.

<pre><code>// Base application error
class AppError extends Error {
  constructor(message, statusCode = 500) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.isOperational = true;
  }
}

// Specific error types
class NotFoundError extends AppError {
  constructor(resource) {
    super(resource + ' not found', 404);
  }
}

class ValidationError extends AppError {
  constructor(field, detail) {
    super('Validation failed: ' + detail, 400);
    this.field = field;
  }
}

class AuthError extends AppError {
  constructor(message = 'Unauthorized') {
    super(message, 401);
  }
}

// Centralized error handler
function handleError(err) {
  if (err instanceof ValidationError) {
    showFieldError(err.field, err.message);
  } else if (err instanceof NotFoundError) {
    showNotFoundPage();
  } else if (err instanceof AuthError) {
    redirectToLogin();
  } else {
    // Unknown error — log and show generic message
    console.error('Unexpected error:', err);
    showGenericError();
  }
}</code></pre>

The <strong>isOperational</strong> flag distinguishes expected errors from unexpected bugs — operational errors are handled gracefully while non-operational errors may require a process restart in server environments. Using <strong>this.constructor.name</strong> for the error name ensures it automatically matches the class name without manual assignment.`
                }
            ]
        },
        {
            id: "regular-expressions",
            title: "Regular Expressions",
            icon: "bi-regex",
            questions: [
                {
                    q: "How do you create a regular expression in JavaScript?",
                    a: `There are two ways to create a regular expression in JavaScript. A <strong>regex literal</strong> uses forward slashes like <strong>/pattern/flags</strong> and is compiled at load time. The <strong>RegExp constructor</strong> takes a string pattern and is useful when you need to build patterns dynamically from variables.

<pre><code>// Literal — preferred for static patterns
const re1 = /hello/i;

// Constructor — for dynamic patterns
const word = 'hello';
const re2 = new RegExp(word, 'i');

// With flags
/abc/g;   // global — find all matches
/abc/i;   // case-insensitive
/abc/m;   // multiline (^ and $ match line boundaries)
/abc/s;   // dotAll (. matches newlines)
/abc/u;   // unicode

// Dynamic pattern with special chars — must escape
const userInput = 'price: $10';
// Use an escape function before creating RegExp from user input
const dynamicRe = new RegExp(escapeRegex(userInput));</code></pre>

Regex literals are preferred for <strong>static patterns</strong> because they are validated at parse time and have better performance. Use the <strong>RegExp constructor</strong> only when the pattern needs to be built dynamically, and remember to <strong>double-escape</strong> backslashes in constructor strings since they go through string parsing first.`
                },
                {
                    q: "What is the difference between test, exec, and match?",
                    a: `These are the three main methods for working with regex matches. <strong>test()</strong> returns a simple boolean indicating if a match exists. <strong>exec()</strong> returns a detailed match array including captured groups and the match index. <strong>match()</strong> is a String method that behaves differently depending on the <strong>g</strong> flag.

<pre><code>const re = /(\d{4})-(\d{2})/;
const str = '2024-03 and 2025-06';

re.test(str);        // true
re.exec(str);        // ["2024-03", "2024", "03", index: 0]

str.match(re);       // ["2024-03", "2024", "03"] (first match)
str.match(/\d{4}-\d{2}/g); // ["2024-03", "2025-06"] (all matches)

// matchAll — iterator of all detailed matches
for (const m of str.matchAll(/(\d{4})-(\d{2})/g)) {
  console.log(m[1], m[2]); // "2024","03" then "2025","06"
}

// search() — returns index of first match
str.search(/\d{4}/);  // 0
str.search(/xyz/);    // -1 (not found)

// split() with regex
'one, two,  three'.split(/,\s*/); // ["one", "two", "three"]</code></pre>

Use <strong>test()</strong> when you only need a yes/no answer, <strong>exec()</strong> when you need detailed match info with groups, and <strong>matchAll()</strong> (ES2020) when you need all matches with full detail. Note that <strong>exec()</strong> with the <strong>g</strong> flag is stateful — it advances <strong>lastIndex</strong> on each call.`
                },
                {
                    q: "How do you validate an email address with regex?",
                    a: `A practical email regex checks for valid characters before the <strong>@</strong> symbol, a domain name after it, and a top-level domain (TLD) at the end. No single regex can fully validate email addresses per the RFC 5322 specification, but a reasonable pattern covers the vast majority of real-world email formats.

<pre><code>// Practical email validation
const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailRe.test('user@example.com');    // true
emailRe.test('a.b+tag@sub.co.uk');   // true
emailRe.test('missing@.com');         // false
emailRe.test('@no-local.com');        // false

// For production, prefer built-in validation
// <input type="email"> handles most cases
// Or use a well-tested library for strict validation

// Other common validations
const phoneRe = /^\+?[1-9]\d{1,14}$/;         // E.164 format
const urlRe = /^https?:\/\/[^\s/$.?#].[^\s]*$/; // basic URL
const hexColorRe = /^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;</code></pre>

For production applications, rely on the <strong>HTML5 input type="email"</strong> validation or a well-tested validation library rather than writing your own regex. The true RFC-compliant email regex is extremely complex and impractical for most use cases.`
                },
                {
                    q: "What are character classes and quantifiers in regex?",
                    a: `<strong>Character classes</strong> define a set of characters to match at a single position. Built-in classes include <strong>\\d</strong> (digit), <strong>\\w</strong> (word character), <strong>\\s</strong> (whitespace), and custom sets like <strong>[abc]</strong>. <strong>Quantifiers</strong> specify how many times a pattern should repeat: <strong>*</strong> (0 or more), <strong>+</strong> (1 or more), <strong>?</strong> (0 or 1), and <strong>{n,m}</strong> (range).

<pre><code>// Character classes
/\\d/.test('9');         // true (digit)
/\\w+/.test('hello');    // true (word characters)
/\\s/.test(' ');         // true (whitespace)
/[aeiou]/.test('e');    // true (vowel)
/[^0-9]/.test('a');     // true (NOT a digit)

// Quantifiers
/a{3}/.test('aaa');     // true (exactly 3)
/a{2,4}/.test('aaa');   // true (2 to 4)
/colou?r/.test('color'); // true (u is optional)
/\\d+/.exec('abc123');   // ["123"] (one or more digits)

// Greedy vs Lazy quantifiers
'<b>bold</b>'.match(/<.*>/);   // ["<b>bold</b>"] greedy
'<b>bold</b>'.match(/<.*?>/);  // ["<b>"] lazy (minimal match)</code></pre>

By default, quantifiers are <strong>greedy</strong> — they match as much as possible. Adding <strong>?</strong> after a quantifier makes it <strong>lazy</strong> (non-greedy), matching as little as possible. The negated character class <strong>[^...]</strong> matches any character NOT in the set, which is often more precise than lazy quantifiers.`
                },
                {
                    q: "How do capturing groups and non-capturing groups work?",
                    a: `<strong>Capturing groups</strong> use parentheses <strong>(pattern)</strong> to capture the matched text, which can then be accessed via back-references or the match result array. <strong>Non-capturing groups</strong> use <strong>(?:pattern)</strong> to group patterns for alternation or quantification without capturing, which improves performance when you do not need the matched text.

<pre><code>// Capturing groups
const match = /(\w+)@(\w+)\.(\w+)/.exec('user@site.com');
// match[1] = "user", match[2] = "site", match[3] = "com"

// Non-capturing group — groups but doesn't capture
/(?:https?):\/\/(\w+)/.exec('https://example');
// match[1] = "example" (only one capture)

// Back-reference
/(\\w+) \\1/.test('hello hello');  // true (\\1 = first captured group)

// Alternation in group
/(?:cat|dog)s/.test('cats');  // true
/(?:cat|dog)s/.test('dogs');  // true

// Practical: extract parts of a URL
const urlRe = /^(https?):\/\/([^/]+)(\/.*)?$/;
const parts = urlRe.exec('https://example.com/path');
// parts[1] = "https", parts[2] = "example.com", parts[3] = "/path"</code></pre>

Use <strong>non-capturing groups</strong> when you only need grouping for logical structure (like alternation) but do not need to reference the matched text. This keeps the match result array cleaner and slightly improves regex engine performance in complex patterns.`
                },
                {
                    q: "What are lookahead and lookbehind assertions?",
                    a: `<strong>Lookahead</strong> and <strong>lookbehind</strong> assertions are zero-width patterns that check what comes before or after a position without consuming any characters. <strong>Positive lookahead</strong> <strong>(?=...)</strong> asserts what follows, <strong>negative lookahead</strong> <strong>(?!...)</strong> asserts what does NOT follow. <strong>Lookbehind</strong> uses <strong>(?&lt;=...)</strong> and <strong>(?&lt;!...)</strong> for what precedes.

<pre><code>// Positive lookahead — followed by
'100px'.match(/\\d+(?=px)/);     // ["100"]

// Negative lookahead — NOT followed by
'100em'.match(/\\d+(?!px)/);     // ["100"]

// Positive lookbehind — preceded by
'$50'.match(/(?&lt;=\\$)\\d+/);      // ["50"]

// Negative lookbehind — NOT preceded by
'€50'.match(/(?&lt;!\\$)\\d+/);      // ["50"]

// Password: at least one digit and one uppercase
/(?=.*\\d)(?=.*[A-Z]).{8,}/.test('Pass1234'); // true

// Add commas to numbers using lookahead
'1234567'.replace(/\\B(?=(\d{3})+(?!\d))/g, ',');
// "1,234,567"</code></pre>

Lookaheads and lookbehinds are <strong>zero-width</strong> — they assert a condition at a position but do not consume characters or advance the match position. This makes them perfect for <strong>password validation</strong> (multiple conditions at the same position) and <strong>number formatting</strong>. Lookbehind support was added in ES2018.`
                },
                {
                    q: "How do you use replace with regex?",
                    a: `The <strong>String.replace()</strong> method combined with regex is powerful for text transformations. You can reference <strong>capture groups</strong> in the replacement string using <strong>$1</strong>, <strong>$2</strong>, etc., or pass a <strong>callback function</strong> for dynamic replacements. Use the <strong>g</strong> flag to replace all occurrences, not just the first.

<pre><code>// Simple replace
'hello world'.replace(/world/, 'JS');  // "hello JS"

// Global replace
'aabba'.replace(/a/g, 'x');  // "xxbbx"

// Using capture groups
'2024-03-15'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$2/$3/$1');
// "03/15/2024"

// Callback function
'hello'.replace(/./g, (char, i) => {
  return i % 2 === 0 ? char.toUpperCase() : char;
}); // "HeLlO"

// replaceAll (ES2021) — no g flag needed
'aabba'.replaceAll('a', 'x'); // "xxbbx"

// Named group references in replacement
'2024-03-15'.replace(
  /(?<year>\\d{4})-(?<month>\\d{2})-(?<day>\\d{2})/,
  '$<month>/$<day>/$<year>'
); // "03/15/2024"</code></pre>

The callback function receives the full match, each captured group, the match offset, and the original string as parameters. Use <strong>replaceAll()</strong> (ES2021) as a cleaner alternative to <strong>replace()</strong> with the <strong>g</strong> flag for simple string replacements.`
                },
                {
                    q: "What do the different regex flags do?",
                    a: `Regex flags modify how the pattern engine operates. The most common are <strong>g</strong> (global — find all matches), <strong>i</strong> (case-insensitive), <strong>m</strong> (multiline — anchors match line boundaries), and <strong>s</strong> (dotAll — dot matches newlines). Newer flags include <strong>u</strong> (unicode), <strong>d</strong> (indices), and <strong>v</strong> (unicodeSets).

<pre><code>// g — find all matches, not just the first
'abab'.match(/a/g);    // ["a", "a"]

// i — case-insensitive
/hello/i.test('Hello'); // true

// m — ^ and $ match line boundaries
'line1\\nline2'.match(/^line/gm); // ["line", "line"]

// s — dot matches newline
/a.b/s.test('a\\nb');    // true (without s: false)

// u — proper unicode support
/\\u{1F600}/u.test('😀'); // true

// d — match indices
/a(b)/.exec('ab');      // no indices
/a(b)/d.exec('ab');     // includes .indices property

// Combining flags
/pattern/gims;  // global, case-insensitive, multiline, dotAll</code></pre>

The <strong>u</strong> (unicode) flag enables proper handling of Unicode characters beyond the Basic Multilingual Plane (like emoji). The <strong>d</strong> (hasIndices) flag adds start and end positions for each captured group in the match result. Always use the <strong>u</strong> flag when working with international text.`
                },
                {
                    q: "What are named capturing groups?",
                    a: `<strong>Named capturing groups</strong> use the syntax <strong>(?&lt;name&gt;pattern)</strong> to assign meaningful names to captured groups, making regex results much more readable than numeric indices. Access named captures via <strong>match.groups.name</strong> in code or <strong>$&lt;name&gt;</strong> in replacement strings.

<pre><code>const dateRe = /(?&lt;year&gt;\\d{4})-(?&lt;month&gt;\\d{2})-(?&lt;day&gt;\\d{2})/;
const match = dateRe.exec('2024-03-15');

console.log(match.groups.year);  // "2024"
console.log(match.groups.month); // "03"
console.log(match.groups.day);   // "15"

// Named groups in replace
'2024-03-15'.replace(dateRe, '$&lt;day&gt;/$&lt;month&gt;/$&lt;year&gt;');
// "15/03/2024"

// Destructuring named groups
const { groups: { year, month, day } } = dateRe.exec('2024-03-15');
console.log(year, month, day); // "2024" "03" "15"

// Named back-reference
/(?<word>\\w+) \\k<word>/.test('hello hello'); // true
// \\k<word> references the named group</code></pre>

Named groups are especially useful for <strong>complex patterns</strong> where numbered references like <strong>$1</strong> and <strong>$2</strong> become confusing. They make the regex self-documenting and the code that processes matches easier to understand. Named groups can be combined with destructuring for clean variable extraction.`
                },
                {
                    q: "How do you use regex for string splitting and tokenizing?",
                    a: `The <strong>String.split()</strong> method accepts a regex pattern to split strings on complex delimiters. This is commonly used for <strong>tokenizing</strong> text, parsing CSV data, or splitting on multiple delimiter types simultaneously.

<pre><code>// Split on multiple delimiters
'one, two; three  four'.split(/[,;\\s]+/);
// ["one", "two", "three", "four"]

// Split and keep the delimiter (capturing group)
'hello123world456end'.split(/(\\d+)/);
// ["hello", "123", "world", "456", "end"]

// Tokenize simple expressions
'3 + 5 * 2 - 1'.split(/\\s*([+\\-*/])\\s*/);
// ["3", "+", "5", "*", "2", "-", "1"]

// Parse CSV line (handles quoted values)
const csvLine = 'name,"city, state",age';
const csvRe = /,(?=(?:[^"]*"[^"]*")*[^"]*$)/;
csvLine.split(csvRe); // ["name", '"city, state"', "age"]

// Limit splits
'a-b-c-d'.split(/-/, 2); // ["a", "b"]</code></pre>

When the regex contains a <strong>capturing group</strong>, the captured delimiters are included in the result array. This is useful when you need to preserve the separators, like when tokenizing mathematical expressions. Use the second argument of <strong>split()</strong> to limit the number of result pieces.`
                },
                {
                    q: "What is the lastIndex property and how does it affect regex?",
                    a: `The <strong>lastIndex</strong> property tracks where the regex engine will start its next search when using the <strong>g</strong> (global) or <strong>y</strong> (sticky) flag. After each successful match, <strong>lastIndex</strong> is updated to the position after the match. This makes regex with the g flag <strong>stateful</strong>, which can cause unexpected behavior if reused.

<pre><code>const re = /\\d+/g;

// exec advances lastIndex on each call
re.exec('abc 123 def 456');  // ["123"], lastIndex = 7
re.exec('abc 123 def 456');  // ["456"], lastIndex = 15
re.exec('abc 123 def 456');  // null, lastIndex = 0

// Common bug: reusing regex with g flag
const re2 = /hello/g;
re2.test('hello world');  // true, lastIndex = 5
re2.test('hello world');  // false! starts from index 5

// Fix: reset lastIndex
re2.lastIndex = 0;
re2.test('hello world');  // true again

// Sticky flag (y) — must match at exactly lastIndex
const sticky = /\\d+/y;
sticky.lastIndex = 4;
sticky.exec('abc 123'); // ["123"] — match at index 4
sticky.exec('abc 123'); // null — no match at index 7</code></pre>

The <strong>y</strong> (sticky) flag is stricter than <strong>g</strong> — it requires the match to occur exactly at <strong>lastIndex</strong>, not just anywhere after it. Always <strong>reset lastIndex to 0</strong> before reusing a global regex, or create a new regex instance each time. Using <strong>matchAll()</strong> or <strong>match()</strong> avoids this issue entirely.`
                },
                {
                    q: "How do you escape special characters in regex?",
                    a: `Special characters in regex like <strong>. * + ? ^ $ { } ( ) | [ ] \\</strong> have special meanings and must be <strong>escaped with a backslash</strong> to match them literally. When building patterns dynamically from user input, you must escape these characters to prevent regex injection or syntax errors.

<pre><code>// Special chars need escaping to match literally
/1\\.5/.test('1.5');     // true (escaped dot)
/1.5/.test('1X5');       // true (unescaped dot matches any char)

/\\$10/.test('$10');      // true (escaped dollar sign)
/\\(hello\\)/.test('(hello)'); // true

// Escape function for dynamic patterns
function escapeRegex(str) {
  // Replaces each special regex char with a backslash prefix
  var specials = /[.\\*+?^$|(){}[\\]\\\\-]/g;
  return str.replace(specials, '\\\\$&');
}

// Usage with user input
const userSearch = 'price: $10.00 (USD)';
const escaped = escapeRegex(userSearch);
const re = new RegExp(escaped);
re.test('The price: $10.00 (USD) is final'); // true

// Without escaping, special chars cause errors or wrong matches
// new RegExp('$10.00');  // matches "10X00" at end of string</code></pre>

Always use an <strong>escape function</strong> when building regex patterns from user input or dynamic strings. Without escaping, characters like <strong>.</strong> will match any character, <strong>$</strong> will match end-of-string, and unmatched parentheses will throw a <strong>SyntaxError</strong>.`
                },
                {
                    q: "How do you use regex for input validation patterns?",
                    a: `Regular expressions are widely used for validating user input like phone numbers, passwords, credit cards, and dates. Combine <strong>anchors</strong> (<strong>^</strong> and <strong>$</strong>) to ensure the entire string matches, and use <strong>lookaheads</strong> to enforce multiple conditions simultaneously without consuming characters.

<pre><code>// Password validation — multiple conditions
const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[!@#$%]).{8,}$/;
passwordRe.test('Str0ng!Pass');  // true
passwordRe.test('weakpass');      // false

// Phone number (international format)
const phoneRe = /^\\+?[1-9]\\d{1,14}$/;
phoneRe.test('+919876543210');  // true

// Date format (YYYY-MM-DD)
const dateRe = /^\\d{4}-(0[1-9]|1[0-2])-(0[1-9]|[12]\\d|3[01])$/;
dateRe.test('2024-03-15');  // true
dateRe.test('2024-13-01');  // false

// IP address
const ipRe = /^((25[0-5]|2[0-4]\\d|[01]?\\d\\d?)\\.){3}(25[0-5]|2[0-4]\\d|[01]?\\d\\d?)$/;
ipRe.test('192.168.1.1');   // true
ipRe.test('256.1.1.1');     // false

// Username (alphanumeric, 3-16 chars)
const usernameRe = /^[a-zA-Z0-9_]{3,16}$/;</code></pre>

Always use <strong>^</strong> (start) and <strong>$</strong> (end) anchors for validation to ensure the <strong>entire string</strong> matches the pattern, not just a substring. For complex validations, consider combining simple regex checks with JavaScript logic for better readability and maintainability.`
                },
                {
                    q: "What are atomic groups and possessive quantifiers?",
                    a: `While JavaScript does not natively support <strong>atomic groups</strong> or <strong>possessive quantifiers</strong>, understanding them helps explain <strong>catastrophic backtracking</strong> — a performance issue where the regex engine tries exponentially many combinations. You can simulate atomic behavior using lookaheads in some cases.

<pre><code>// Catastrophic backtracking example
// This regex is very slow on non-matching input:
// /^(a+)+$/.test('aaaaaaaaaaaaaaaaX')
// The engine tries every possible way to split the a's

// Safe alternative — avoid nested quantifiers
/^a+$/.test('aaaaaaaaaaaaaaaaX'); // fast — single quantifier

// Other problematic patterns:
// /(a|b)*$/ on "aaaaaaaX"
// /(a+b)+$/ on "aaaaaaaX"

// Prevention strategies:
// 1. Avoid nested quantifiers: (a+)+ → a+
// 2. Use specific character classes: .* → [^\\n]*
// 3. Make patterns more specific
// 4. Use possessive quantifiers in other languages: a++

// Atomic group simulation with lookahead
// (?=(pattern))\\1 — captures in lookahead, then matches
/(?=(a+))\\1b/.test('aaab'); // works like atomic group</code></pre>

<strong>Catastrophic backtracking</strong> most commonly occurs with <strong>nested quantifiers</strong> like <strong>(a+)+</strong> or alternation combined with quantifiers. To avoid it, prefer specific character classes over <strong>.</strong>, avoid nesting quantifiers unnecessarily, and test your regex with both matching and non-matching inputs to verify performance.`
                },
                {
                    q: "How do you use regex with Unicode text?",
                    a: `The <strong>u</strong> (unicode) flag enables proper handling of Unicode characters including emoji, Chinese characters, and other multi-byte symbols. Without the <strong>u</strong> flag, JavaScript treats strings as sequences of 16-bit code units, which can cause incorrect matches for characters outside the Basic Multilingual Plane.

<pre><code>// Without u flag — broken Unicode handling
/^.$/.test('😀');      // false (emoji is 2 code units)
/^..$/.test('😀');     // true (treated as 2 chars)

// With u flag — correct Unicode handling
/^.$/u.test('😀');     // true (emoji is 1 character)

// Unicode property escapes (requires u flag)
/\\p{Letter}/u.test('ñ');     // true (any letter)
/\\p{Number}/u.test('①');    // true (any number)
/\\p{Emoji}/u.test('🎉');    // true
/\\p{Script=Han}/u.test('中'); // true (Chinese characters)

// Unicode-aware word boundary
/\\b\\w+\\b/u;  // correct word boundaries with unicode

// v flag (ES2024) — extends unicode support
/[\\p{Letter}&&[^\\p{Script=Latin}]]/v; // set intersection
/[\\p{Emoji}--[😀]]/v;  // set subtraction</code></pre>

Always use the <strong>u</strong> flag when working with <strong>international text</strong> or emoji. The <strong>v</strong> (unicodeSets) flag (ES2024) adds set operations like <strong>intersection</strong> (&&) and <strong>subtraction</strong> (--) within character classes, enabling more precise Unicode matching patterns.`
                },
                {
                    q: "What are common regex patterns used in web development?",
                    a: `Web developers frequently use regex for <strong>data extraction</strong>, <strong>text transformation</strong>, and <strong>input sanitization</strong>. Here are some of the most commonly used patterns for everyday web development tasks like parsing URLs, cleaning user input, and extracting data from strings.

<pre><code>// Extract all URLs from text
const urlRe = /https?:\\/\\/[^\\s<>]+/g;
text.match(urlRe);

// Remove HTML tags
const stripTags = /<[^>]*>/g;
'<p>Hello <b>World</b></p>'.replace(stripTags, '');
// "Hello World"

// Trim whitespace (beyond String.trim)
str.replace(/^\\s+|\\s+$/g, '');        // trim both ends
str.replace(/\\s+/g, ' ');              // collapse whitespace

// Extract hashtags
'#hello world #coding'.match(/#\\w+/g);  // ["#hello", "#coding"]

// camelCase to kebab-case
'camelCaseText'.replace(/([A-Z])/g, '-$1').toLowerCase();
// "camel-case-text"

// Mask sensitive data
'Card: 4532-1234-5678-9012'.replace(/(\\d{4}-){3}/, '****-****-****-');
// "Card: ****-****-****-9012"

// Validate hex color
/^#([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/.test('#FF00FF'); // true</code></pre>

When stripping HTML tags, note that regex is <strong>not a proper HTML parser</strong> — for complex HTML manipulation, use <strong>DOMParser</strong> or a library. For simple sanitization of user-generated text, regex works well. Always prefer <strong>dedicated validation libraries</strong> for security-critical input validation.`
                }
            ]
        },
        {
            id: "design-patterns",
            title: "Design Patterns",
            icon: "bi-grid",
            questions: [
                {
                    q: "What is the Singleton pattern in JavaScript?",
                    a: `The <strong>Singleton</strong> pattern ensures that only one instance of a class exists throughout the entire application. In JavaScript, <strong>ES modules are singletons by default</strong> — each module is evaluated once and cached. You can also implement Singleton using a class with a <strong>static instance check</strong> in the constructor.

<pre><code>class Database {
  static #instance;

  constructor(url) {
    if (Database.#instance) return Database.#instance;
    this.url = url;
    Database.#instance = this;
  }
}

const db1 = new Database('localhost');
const db2 = new Database('remote');
console.log(db1 === db2);  // true
console.log(db2.url);      // "localhost"

// Module singleton (simplest approach)
// db.js
export const db = new Database('localhost');
// Every file that imports db gets the same instance</code></pre>

The Singleton pattern is useful for <strong>shared resources</strong> like database connections, configuration objects, or logging services. In modern JavaScript, using an <strong>ES module export</strong> is the simplest and most idiomatic way to create a singleton — no class gymnastics needed.`
                },
                {
                    q: "How does the Observer (Pub/Sub) pattern work?",
                    a: `The <strong>Observer pattern</strong> (also called Pub/Sub) allows objects to <strong>subscribe</strong> to events and get notified when those events occur. A <strong>subject</strong> maintains a list of observer callbacks and invokes them when state changes. This decouples the event producer from consumers, enabling flexible communication.

<pre><code>class EventEmitter {
  #events = {};

  on(event, fn) {
    (this.#events[event] ??= []).push(fn);
    return () => this.off(event, fn); // unsubscribe
  }

  off(event, fn) {
    this.#events[event] = this.#events[event]?.filter(f => f !== fn);
  }

  emit(event, ...args) {
    this.#events[event]?.forEach(fn => fn(...args));
  }
}

const bus = new EventEmitter();
const unsub = bus.on('msg', (data) => console.log(data));
bus.emit('msg', 'Hello'); // "Hello"
unsub(); // unsubscribe</code></pre>

The Observer pattern is the foundation of <strong>event-driven programming</strong> in JavaScript. It is used by the DOM event system, Node.js EventEmitter, RxJS Observables, and state management libraries like Redux. Returning an <strong>unsubscribe function</strong> from the subscribe method is a clean pattern for managing listener lifecycles.`
                },
                {
                    q: "What is the Factory pattern?",
                    a: `The <strong>Factory pattern</strong> encapsulates object creation logic, returning different types or configurations based on input parameters without exposing the construction details to the caller. This centralizes the creation logic, making it easy to add new types without modifying the consuming code.

<pre><code>class Car {
  constructor(make) { this.type = 'car'; this.make = make; }
}
class Truck {
  constructor(make) { this.type = 'truck'; this.make = make; }
}

function createVehicle(type, make) {
  switch (type) {
    case 'car':   return new Car(make);
    case 'truck': return new Truck(make);
    default: throw new Error('Unknown type: ' + type);
  }
}

const v1 = createVehicle('car', 'Toyota');
const v2 = createVehicle('truck', 'Ford');
console.log(v1.type); // "car"

// Factory with configuration object
function createButton({ text, variant = 'primary', size = 'md' }) {
  const btn = document.createElement('button');
  btn.textContent = text;
  btn.className = variant + ' ' + size;
  return btn;
}</code></pre>

The Factory pattern is widely used in frameworks — React's <strong>createElement()</strong>, Angular's <strong>component factories</strong>, and Express's <strong>middleware creation</strong> are all examples. It promotes the <strong>Open/Closed Principle</strong> — the factory is open for extension (new types) but closed for modification.`
                },
                {
                    q: "What is the Module pattern?",
                    a: `The <strong>Module pattern</strong> uses closures or ES modules to <strong>encapsulate private state</strong>, exposing only a public API to the outside world. It prevents global namespace pollution and enforces information hiding — private variables and functions cannot be accessed or modified from outside.

<pre><code>// IIFE Module pattern
const Counter = (() => {
  let count = 0; // private

  return {
    increment() { return ++count; },
    decrement() { return --count; },
    getCount()  { return count; }
  };
})();

Counter.increment(); // 1
Counter.increment(); // 2
Counter.getCount();  // 2
// Counter.count;    // undefined — private

// ES Module equivalent (counter.js)
let count = 0;
export const increment = () => ++count;
export const getCount = () => count;</code></pre>

The IIFE-based Module pattern was the standard before ES modules, but it is still useful in environments where modules are not available. <strong>ES modules</strong> provide the same encapsulation natively — each module file has its own scope, and only exported values are accessible from outside.`
                },
                {
                    q: "How does the Strategy pattern work?",
                    a: `The <strong>Strategy pattern</strong> defines a family of interchangeable algorithms and lets the client choose which one to use at runtime. In JavaScript, functions are first-class citizens, making this pattern incredibly natural — strategies are simply <strong>functions stored in an object</strong> or passed as arguments.

<pre><code>const strategies = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  multiply: (a, b) => a * b
};

function calculate(strategy, a, b) {
  if (!strategies[strategy]) throw new Error('Unknown strategy');
  return strategies[strategy](a, b);
}

calculate('add', 5, 3);      // 8
calculate('multiply', 5, 3); // 15

// Validation strategies
const validators = {
  email: (v) => /^[^@]+@[^@]+$/.test(v),
  minLength: (v) => v.length >= 8,
  hasNumber: (v) => /\\d/.test(v)
};

function validate(value, rules) {
  return rules.every(rule => validators[rule](value));
}
validate('test@email.com', ['email']); // true</code></pre>

The Strategy pattern eliminates complex <strong>if/else or switch chains</strong> by mapping each case to a function. Adding new strategies requires no modification to existing code — just add a new entry to the strategies object. This follows the <strong>Open/Closed Principle</strong> perfectly.`
                },
                {
                    q: "What is the Decorator pattern?",
                    a: `The <strong>Decorator pattern</strong> wraps an object or function to extend its behavior without modifying the original. In JavaScript, <strong>higher-order functions</strong> naturally serve as decorators — they take a function as input and return an enhanced version with additional functionality like logging, timing, or caching.

<pre><code>// Function decorator — add logging
function withLogging(fn) {
  return function(...args) {
    console.log('Calling', fn.name, args);
    const result = fn.apply(this, args);
    console.log('Result:', result);
    return result;
  };
}

function add(a, b) { return a + b; }
const loggedAdd = withLogging(add);
loggedAdd(2, 3); // logs args and result, returns 5

// Decorator that adds timing
function withTiming(fn) {
  return function(...args) {
    const start = performance.now();
    const result = fn.apply(this, args);
    console.log(fn.name + ': ' + (performance.now() - start) + 'ms');
    return result;
  };
}

// Composing multiple decorators
const enhancedAdd = withTiming(withLogging(add));
enhancedAdd(2, 3); // logs + times</code></pre>

Decorators are widely used in frameworks — Angular uses them extensively (<strong>@Component</strong>, <strong>@Injectable</strong>), and the TC39 <strong>decorators proposal</strong> (Stage 3) brings native decorator syntax to JavaScript classes. The <strong>fn.apply(this, args)</strong> pattern preserves the original function's context.`
                },
                {
                    q: "How does the Proxy pattern work in JavaScript?",
                    a: `The <strong>Proxy pattern</strong> intercepts operations on an object such as property access, assignment, and deletion. JavaScript's built-in <strong>Proxy</strong> object provides native support with customizable <strong>traps</strong> — handler functions that intercept fundamental operations and let you add validation, logging, or custom behavior.

<pre><code>const handler = {
  get(target, prop) {
    console.log('Accessing:', prop);
    return prop in target ? target[prop] : 'default';
  },
  set(target, prop, value) {
    if (typeof value !== 'number') throw new TypeError('Numbers only');
    target[prop] = value;
    return true;
  }
};

const data = new Proxy({}, handler);
data.x = 42;          // OK
// data.y = 'hello';  // TypeError: Numbers only
console.log(data.x);  // logs "Accessing: x", returns 42
console.log(data.z);  // logs "Accessing: z", returns "default"

// Reactive data with Proxy
function reactive(obj, onChange) {
  return new Proxy(obj, {
    set(target, prop, value) {
      target[prop] = value;
      onChange(prop, value);
      return true;
    }
  });
}</code></pre>

JavaScript Proxy supports <strong>13 trap types</strong> including get, set, has, deleteProperty, apply, and construct. Frameworks like <strong>Vue 3</strong> use Proxy for reactivity. Use <strong>Reflect</strong> methods inside traps to perform the default operation while adding custom behavior.`
                },
                {
                    q: "What is the Iterator pattern?",
                    a: `The <strong>Iterator pattern</strong> provides a standard way to traverse a collection sequentially without exposing its underlying structure. JavaScript uses the <strong>Symbol.iterator protocol</strong> — any object with a <strong>[Symbol.iterator]()</strong> method is iterable and works with <strong>for...of</strong>, spread syntax, and destructuring.

<pre><code>class Range {
  constructor(start, end) {
    this.start = start;
    this.end = end;
  }

  [Symbol.iterator]() {
    let current = this.start;
    const end = this.end;
    return {
      next() {
        return current <= end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
}

for (const n of new Range(1, 5)) {
  console.log(n); // 1, 2, 3, 4, 5
}
console.log([...new Range(1, 3)]); // [1, 2, 3]

// Destructuring with iterables
const [first, second] = new Range(10, 20);
console.log(first, second); // 10, 11</code></pre>

Built-in iterables include <strong>Arrays</strong>, <strong>Strings</strong>, <strong>Maps</strong>, <strong>Sets</strong>, and <strong>NodeLists</strong>. The iterator protocol returns objects with <strong>{ value, done }</strong> — when done is true, iteration stops. Implementing Symbol.iterator lets your custom objects work with all JavaScript iteration features.`
                },
                {
                    q: "What is the Mediator pattern?",
                    a: `The <strong>Mediator pattern</strong> centralizes communication between multiple objects so they do not reference each other directly. Instead, all components communicate through a single <strong>mediator object</strong>, reducing tight coupling and making it easier to modify individual components independently.

<pre><code>class ChatRoom {
  #users = new Map();

  join(user) {
    this.#users.set(user.name, user);
    user.room = this;
  }

  send(message, from, to) {
    if (to) {
      // Direct message
      this.#users.get(to)?.receive(message, from);
    } else {
      // Broadcast
      this.#users.forEach((user, name) => {
        if (name !== from) user.receive(message, from);
      });
    }
  }
}

class User {
  constructor(name) { this.name = name; }
  send(msg, to) { this.room.send(msg, this.name, to); }
  receive(msg, from) { console.log(from + ': ' + msg); }
}

const room = new ChatRoom();
const alice = new User('Alice');
const bob = new User('Bob');
room.join(alice);
room.join(bob);
alice.send('Hello!'); // Bob receives: "Alice: Hello!"</code></pre>

The Mediator pattern is commonly seen in <strong>form validation</strong> (form mediates between fields), <strong>chat systems</strong>, and <strong>air traffic control</strong> analogies. It trades direct object-to-object communication for centralized control, making the system easier to understand but creating a potential single point of complexity.`
                },
                {
                    q: "What is the Revealing Module pattern?",
                    a: `The <strong>Revealing Module pattern</strong> is a variation of the Module pattern where all functions and variables are defined privately, then an object literal is returned that <strong>maps public names to private functions</strong>. This makes the public API explicit, clearly showing what is exposed while keeping everything else private.

<pre><code>const UserService = (() => {
  const users = [];

  function addUser(name) {
    users.push({ name, id: users.length + 1 });
  }

  function getUser(id) {
    return users.find(u => u.id === id);
  }

  function getCount() {
    return users.length;
  }

  // Only expose what's needed
  return {
    add: addUser,
    get: getUser,
    count: getCount
    // users array stays private
  };
})();

UserService.add('Alice');
UserService.get(1);    // { name: "Alice", id: 1 }
UserService.count();   // 1
// UserService.users   // undefined — private</code></pre>

The Revealing Module pattern improves readability over the standard Module pattern by placing all logic in private functions and revealing only a clean API. The downside is that public methods cannot be overridden from outside since they reference private functions directly.`
                },
                {
                    q: "What is the Command pattern?",
                    a: `The <strong>Command pattern</strong> encapsulates a request as an object, allowing you to parameterize operations, queue them, log them, or support <strong>undo/redo</strong> functionality. Each command object contains all the information needed to execute the action and optionally reverse it.

<pre><code>class Command {
  execute() { throw new Error('Must implement execute'); }
  undo() { throw new Error('Must implement undo'); }
}

class AddTextCommand extends Command {
  constructor(editor, text) {
    super();
    this.editor = editor;
    this.text = text;
  }
  execute() { this.editor.content += this.text; }
  undo() { this.editor.content = this.editor.content.slice(0, -this.text.length); }
}

class Editor {
  content = '';
  history = [];

  executeCommand(command) {
    command.execute();
    this.history.push(command);
  }

  undo() {
    const command = this.history.pop();
    command?.undo();
  }
}

const editor = new Editor();
editor.executeCommand(new AddTextCommand(editor, 'Hello '));
editor.executeCommand(new AddTextCommand(editor, 'World'));
console.log(editor.content); // "Hello World"
editor.undo();
console.log(editor.content); // "Hello "</code></pre>

The Command pattern is the foundation of <strong>undo/redo systems</strong> in text editors, drawing applications, and transaction processing. By storing commands as objects, you can serialize them, queue them for batch execution, or transmit them over a network for collaborative editing.`
                },
                {
                    q: "What is the Builder pattern in JavaScript?",
                    a: `The <strong>Builder pattern</strong> constructs complex objects step by step using a <strong>fluent interface</strong> with method chaining. Instead of passing many parameters to a constructor, the builder provides descriptive methods for each configuration option, making object creation more readable and flexible.

<pre><code>class QueryBuilder {
  #table = '';
  #conditions = [];
  #columns = ['*'];
  #limit = null;
  #orderBy = null;

  from(table) { this.#table = table; return this; }
  select(...cols) { this.#columns = cols; return this; }
  where(condition) { this.#conditions.push(condition); return this; }
  limitTo(n) { this.#limit = n; return this; }
  orderBy(col) { this.#orderBy = col; return this; }

  build() {
    let query = 'SELECT ' + this.#columns.join(', ');
    query += ' FROM ' + this.#table;
    if (this.#conditions.length) {
      query += ' WHERE ' + this.#conditions.join(' AND ');
    }
    if (this.#orderBy) query += ' ORDER BY ' + this.#orderBy;
    if (this.#limit) query += ' LIMIT ' + this.#limit;
    return query;
  }
}

const query = new QueryBuilder()
  .from('users')
  .select('name', 'email')
  .where('age > 18')
  .where('active = true')
  .orderBy('name')
  .limitTo(10)
  .build();</code></pre>

The Builder pattern is commonly used in <strong>query builders</strong>, <strong>configuration objects</strong>, and <strong>HTTP request libraries</strong>. Each method returns <strong>this</strong> to enable chaining. The pattern is especially valuable when an object has many optional parameters that would make a constructor call confusing.`
                },
                {
                    q: "What is the Adapter pattern?",
                    a: `The <strong>Adapter pattern</strong> converts the interface of one object into an interface that another object expects. It acts as a bridge between two incompatible interfaces, enabling them to work together without modifying either side. This is common when integrating third-party libraries.

<pre><code>// Old analytics API
class OldAnalytics {
  trackEvent(category, action, label) {
    console.log('Old:', category, action, label);
  }
}

// New analytics API
class NewAnalytics {
  track(event) {
    console.log('New:', event.name, event.data);
  }
}

// Adapter — makes old API work with new interface
class AnalyticsAdapter {
  constructor(newAnalytics) {
    this.analytics = newAnalytics;
  }

  trackEvent(category, action, label) {
    this.analytics.track({
      name: category + '.' + action,
      data: { label }
    });
  }
}

// Usage — same old interface, new implementation
const adapter = new AnalyticsAdapter(new NewAnalytics());
adapter.trackEvent('button', 'click', 'signup');
// "New: button.click { label: 'signup' }"</code></pre>

The Adapter pattern is heavily used when <strong>migrating between libraries</strong> or API versions — wrap the new implementation in an adapter that preserves the old interface, then gradually update call sites. This enables incremental migration without breaking existing code.`
                },
                {
                    q: "What is the Memoization pattern?",
                    a: `<strong>Memoization</strong> is an optimization pattern that caches the results of expensive function calls based on their arguments. When the same arguments are passed again, the cached result is returned instantly instead of recomputing. This trades memory for speed and is ideal for <strong>pure functions</strong> with deterministic outputs.

<pre><code>// Generic memoize function
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    cache.set(key, result);
    return result;
  };
}

// Usage — expensive computation
function fibonacci(n) {
  if (n <= 1) return n;
  return fibonacci(n - 1) + fibonacci(n - 2);
}

const memoFib = memoize(fibonacci);
memoFib(40); // fast on repeated calls

// Memoize with size limit
function memoizeWithLimit(fn, maxSize = 100) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) return cache.get(key);
    const result = fn.apply(this, args);
    if (cache.size >= maxSize) {
      cache.delete(cache.keys().next().value);
    }
    cache.set(key, result);
    return result;
  };
}</code></pre>

Memoization works best with <strong>pure functions</strong> — functions that always return the same output for the same input and have no side effects. Be careful with <strong>large argument spaces</strong> or object arguments, as the cache can grow unbounded. Consider adding a <strong>size limit</strong> or using <strong>WeakMap</strong> for object keys.`
                },
                {
                    q: "What is the Facade pattern?",
                    a: `The <strong>Facade pattern</strong> provides a simplified, unified interface to a complex subsystem of classes or APIs. It hides the internal complexity and presents a clean, easy-to-use API to the client. This reduces the learning curve and coupling between the client and the subsystem.

<pre><code>// Complex subsystem classes
class AudioPlayer { play(file) { console.log('Playing:', file); } }
class VideoDecoder { decode(codec) { return 'decoded-' + codec; } }
class SubtitleLoader { load(lang) { return 'subs-' + lang; } }
class ScreenRenderer { render(data) { console.log('Rendering:', data); } }

// Facade — simple interface to complex subsystem
class MediaPlayerFacade {
  constructor() {
    this.audio = new AudioPlayer();
    this.decoder = new VideoDecoder();
    this.subtitles = new SubtitleLoader();
    this.renderer = new ScreenRenderer();
  }

  playMovie(file, lang = 'en') {
    const decoded = this.decoder.decode('h264');
    const subs = this.subtitles.load(lang);
    this.renderer.render(decoded);
    this.audio.play(file);
    return { decoded, subs };
  }
}

// Client uses simple interface
const player = new MediaPlayerFacade();
player.playMovie('movie.mp4', 'en');
// Internally coordinates 4 different subsystems</code></pre>

The Facade pattern is everywhere in JavaScript — <strong>jQuery</strong> is a facade over the DOM API, <strong>Axios</strong> is a facade over XMLHttpRequest/fetch, and <strong>ORMs</strong> are facades over database drivers. It does not prevent direct access to the subsystem, it simply provides a convenient default interface.`
                },
                {
                    q: "What is the Chain of Responsibility pattern?",
                    a: `The <strong>Chain of Responsibility</strong> pattern passes a request along a chain of handlers until one handles it. Each handler decides whether to process the request or pass it to the next handler. This is the pattern behind <strong>Express.js middleware</strong> and DOM event propagation.

<pre><code>// Middleware-style chain (like Express)
class MiddlewareChain {
  #middlewares = [];

  use(fn) {
    this.#middlewares.push(fn);
    return this;
  }

  execute(context) {
    let index = 0;
    const next = () => {
      if (index < this.#middlewares.length) {
        this.#middlewares[index++](context, next);
      }
    };
    next();
  }
}

const chain = new MiddlewareChain();

// Add handlers
chain.use((ctx, next) => {
  ctx.startTime = Date.now();
  next(); // pass to next handler
});

chain.use((ctx, next) => {
  if (!ctx.auth) {
    ctx.error = 'Unauthorized';
    return; // stop chain
  }
  next();
});

chain.use((ctx, next) => {
  console.log('Processing request');
  ctx.result = 'Done';
});

chain.execute({ auth: true });</code></pre>

Express.js middleware is the most well-known implementation of this pattern in JavaScript. Each middleware function receives <strong>req</strong>, <strong>res</strong>, and <strong>next</strong> — calling <strong>next()</strong> passes control to the next middleware. This enables clean separation of concerns like logging, authentication, and request handling.`
                },
                {
                    q: "What is the Flyweight pattern?",
                    a: `The <strong>Flyweight pattern</strong> minimizes memory usage by sharing common data across many similar objects. Instead of each object storing its own copy of shared data, a <strong>flyweight factory</strong> returns shared instances. Only the unique (extrinsic) data is stored per object.

<pre><code>// Without Flyweight — each icon stores duplicate data
// 10,000 map markers each with a full icon image = huge memory

// With Flyweight — shared icon instances
class MapIconFactory {
  static #icons = new Map();

  static getIcon(type) {
    if (!this.#icons.has(type)) {
      // Expensive: load image, create canvas, etc.
      this.#icons.set(type, {
        type,
        image: loadImage(type + '.png'),
        size: { w: 32, h: 32 }
      });
    }
    return this.#icons.get(type);
  }
}

class MapMarker {
  constructor(lat, lng, type) {
    this.lat = lat;           // extrinsic (unique per marker)
    this.lng = lng;           // extrinsic
    this.icon = MapIconFactory.getIcon(type); // shared flyweight
  }
}

// 10,000 markers but only ~5 icon objects
const markers = locations.map(loc =>
  new MapMarker(loc.lat, loc.lng, loc.type)
);
console.log(MapIconFactory.count); // ~5 (restaurant, hotel, gas, etc.)</code></pre>

The Flyweight pattern is useful when you have <strong>thousands of similar objects</strong> that share significant amounts of data. Common examples include text editors (character formatting objects), game engines (sprite/texture sharing), and map applications (shared icon resources).`
                },
                {
                    q: "What is the State pattern?",
                    a: `The <strong>State pattern</strong> allows an object to change its behavior when its internal state changes, as if the object changed its class. Each state is represented as a separate object with its own behavior, and the context object delegates actions to the current state.

<pre><code>// Traffic light example
const states = {
  green: {
    color: 'green',
    next() { return states.yellow; },
    action() { return 'Go'; }
  },
  yellow: {
    color: 'yellow',
    next() { return states.red; },
    action() { return 'Slow down'; }
  },
  red: {
    color: 'red',
    next() { return states.green; },
    action() { return 'Stop'; }
  }
};

class TrafficLight {
  constructor() {
    this.state = states.green;
  }

  change() {
    this.state = this.state.next();
  }

  getInstruction() {
    return this.state.action();
  }
}

const light = new TrafficLight();
console.log(light.getInstruction()); // "Go"
light.change();
console.log(light.getInstruction()); // "Slow down"
light.change();
console.log(light.getInstruction()); // "Stop"</code></pre>

The State pattern eliminates complex <strong>if/else or switch statements</strong> that check the current state. Each state object encapsulates its own behavior and transition logic. This is widely used in <strong>UI components</strong> (loading/error/success states), <strong>game development</strong>, and <strong>workflow engines</strong>.`
                },
                {
                    q: "What is the Composition over Inheritance principle?",
                    a: `<strong>Composition over Inheritance</strong> favors building objects by combining smaller, focused behaviors rather than inheriting from a deep class hierarchy. In JavaScript, this is achieved through <strong>mixins</strong>, <strong>object spread</strong>, or <strong>function composition</strong> — assembling functionality from independent pieces.

<pre><code>// Inheritance approach — rigid hierarchy
class Animal { eat() { return 'eating'; } }
class FlyingAnimal extends Animal { fly() { return 'flying'; } }
class SwimmingAnimal extends Animal { swim() { return 'swimming'; } }
// Problem: Duck needs both fly() and swim()!

// Composition approach — flexible mixins
const canEat = (obj) => ({ ...obj, eat: () => 'eating' });
const canFly = (obj) => ({ ...obj, fly: () => 'flying' });
const canSwim = (obj) => ({ ...obj, swim: () => 'swimming' });

const duck = canSwim(canFly(canEat({ name: 'Duck' })));
duck.eat();  // "eating"
duck.fly();  // "flying"
duck.swim(); // "swimming"

// Using Object.assign for class-based composition
const Serializable = (superclass) => class extends superclass {
  serialize() { return JSON.stringify(this); }
};

const Validatable = (superclass) => class extends superclass {
  validate() { return Object.keys(this).length > 0; }
};

class User extends Serializable(Validatable(class {})) {
  constructor(name) { super(); this.name = name; }
}</code></pre>

JavaScript's <strong>prototypal nature</strong> makes composition more natural than in class-based languages. The mixin pattern using functions is particularly powerful — each mixin adds focused behavior without creating a rigid hierarchy. React's shift from class components to <strong>hooks</strong> is a prominent example of composition over inheritance.`
                }
            ]
        },
        {
            id: "memory-management",
            title: "Memory Management",
            icon: "bi-memory",
            questions: [
                {
                    question: "How does garbage collection work in JavaScript?",
                    answer: `JavaScript uses <strong>automatic garbage collection</strong> to manage memory. The engine periodically identifies objects that are no longer <strong>reachable</strong> from root references (the global object, current call stack, and active closures) and frees their memory. You cannot trigger garbage collection manually — the engine decides when and how to run it.

<pre><code>function createData() {
  const obj = { data: new Array(1000) };
  return obj.data; // obj is unreachable after return
}
// obj is garbage collected, but obj.data survives via reference

let ref = createData();
ref = null; // now the array is also unreachable — GC can collect it

// Reachability is key:
// - Global variables — always reachable
// - Local variables — reachable during function execution
// - Closures — keep outer variables alive
// - DOM references — keep elements in memory</code></pre>

The concept of <strong>reachability</strong> is central to garbage collection. An object is reachable if it can be accessed through any chain of references starting from a root. Once all paths to an object are severed, it becomes eligible for collection. Modern engines like V8 use sophisticated algorithms to make GC pauses nearly imperceptible.`
                },
                {
                    question: "What is the mark-and-sweep algorithm?",
                    answer: `<strong>Mark-and-sweep</strong> is the primary garbage collection algorithm used by all modern JavaScript engines. It works in two phases: first it <strong>marks</strong> all objects reachable from root references by traversing the object graph, then it <strong>sweeps</strong> through memory and frees any objects that were not marked. Modern engines enhance this with <strong>generational GC</strong> for better performance.

<pre><code>// Phase 1: Mark — traverse from roots
// Global -> obj1 -> obj2 (both marked as reachable)

// Phase 2: Sweep — free unmarked objects
// Any object not marked is collected

// Generational GC (V8):
// - Young generation: new objects, collected frequently (Scavenge)
// - Old generation: survived objects, collected less often (Mark-Compact)

// Reference counting (older approach) fails with cycles:
let a = {};
let b = {};
a.ref = b;
b.ref = a;
a = null;
b = null;
// Mark-and-sweep handles this — both unreachable from root
// Reference counting would keep them alive (count never reaches 0)</code></pre>

V8's <strong>generational hypothesis</strong> assumes most objects die young. New objects go to the <strong>young generation</strong> (small, fast to scan), and those that survive multiple collections are promoted to the <strong>old generation</strong>. This optimization makes GC much more efficient since only a small portion of memory needs frequent scanning.`
                },
                {
                    question: "What are common causes of memory leaks?",
                    answer: `Memory leaks occur when objects stay referenced unintentionally, preventing garbage collection. The most common causes are <strong>forgotten timers</strong>, <strong>event listeners not removed</strong>, <strong>accidental global variables</strong>, <strong>detached DOM nodes</strong>, and <strong>growing collections</strong> that are never cleaned up.

<pre><code>// 1. Forgotten timers
const id = setInterval(() => {
  doSomething(); // keeps running and referencing scope forever
}, 1000);
// Fix: clearInterval(id) when done

// 2. Event listeners not removed
element.addEventListener('click', handler);
// Fix: element.removeEventListener('click', handler)

// 3. Accidental globals
function leak() {
  leaked = 'oops'; // no let/const — becomes global variable
}

// 4. Growing arrays/maps never cleared
const cache = [];
function addToCache(item) {
  cache.push(item); // grows forever with no limit
}

// 5. Closures holding large scope
function createLeak() {
  const bigData = new Array(1000000);
  return () => console.log(bigData.length); // holds bigData forever
}</code></pre>

In <strong>Single Page Applications</strong>, memory leaks accumulate over time as users navigate between views without page refreshes. Each leaked timer, listener, or DOM reference compounds. Use browser DevTools <strong>Memory tab</strong> to take heap snapshots and compare them to identify growing objects.`
                },
                {
                    question: "What is WeakRef and when would you use it?",
                    answer: `<strong>WeakRef</strong> holds a weak reference to an object — it does not prevent garbage collection. Use it when you want to <strong>observe or cache</strong> an object without keeping it alive. Access the value with <strong>.deref()</strong>, which returns <strong>undefined</strong> if the object has been collected.

<pre><code>let target = { name: 'data', payload: new Array(10000) };
const weak = new WeakRef(target);

console.log(weak.deref()?.name); // "data"

target = null; // now eligible for GC

// Later — may or may not be collected
const obj = weak.deref();
if (obj) {
  console.log('Still alive:', obj.name);
} else {
  console.log('Garbage collected');
}

// FinalizationRegistry — cleanup callback when object is collected
const registry = new FinalizationRegistry((id) => {
  console.log('Collected:', id);
  // Clean up external resources associated with id
});
registry.register(target, 'resource-123');</code></pre>

<strong>WeakRef</strong> should be used sparingly — the spec warns that GC timing is unpredictable and implementation-dependent. Common use cases include <strong>caches</strong> that automatically evict entries, <strong>observer patterns</strong> where you do not want to prevent observed objects from being collected, and <strong>FinalizationRegistry</strong> for cleanup of external resources.`
                },
                {
                    question: "How can WeakMap be used for caching?",
                    answer: `<strong>WeakMap</strong> holds keys weakly — when the key object is garbage collected, its cache entry is <strong>automatically removed</strong>. This makes it perfect for caching computed data associated with objects without creating memory leaks, since the cache size naturally shrinks as objects are no longer used.

<pre><code>const cache = new WeakMap();

function expensiveCompute(obj) {
  if (cache.has(obj)) return cache.get(obj);

  const result = obj.data * 2; // heavy computation
  cache.set(obj, result);
  return result;
}

let item = { data: 42 };
expensiveCompute(item); // computes and caches
expensiveCompute(item); // returns cached result instantly

item = null;
// Cache entry for item is automatically cleaned up by GC

// WeakMap vs Map for caching:
// Map: keeps keys alive — memory leak potential
// WeakMap: lets keys be collected — no leak

// Practical: store private data for DOM elements
const elementData = new WeakMap();
function track(element) {
  elementData.set(element, { clicks: 0, visible: true });
}
// When element is removed from DOM and dereferenced, data is freed</code></pre>

<strong>WeakMap</strong> only accepts objects as keys (not primitives) and is not iterable — you cannot list its entries. This is by design since entries may disappear at any time due to GC. Use <strong>Map</strong> when you need to iterate over entries or use primitive keys; use <strong>WeakMap</strong> when keys are objects whose lifecycle you do not control.`
                },
                {
                    question: "How do closures cause memory leaks?",
                    answer: `Closures retain references to their <strong>outer scope's variables</strong> for as long as the closure exists. If a closure captures a reference to a large object and the closure is long-lived (stored in an event handler, timer, or global variable), that large object stays in memory even if no longer needed elsewhere.

<pre><code>function createHandler() {
  const largeData = new Array(1000000).fill('x');

  // This closure keeps largeData alive
  return function handler() {
    console.log(largeData.length);
  };
}

const fn = createHandler();
// largeData cannot be GC'd as long as fn exists

// Fix: extract only what you need, then release the large object
function createBetterHandler() {
  let largeData = new Array(1000000).fill('x');
  const length = largeData.length; // extract what you need
  largeData = null; // release the large array

  return function handler() {
    console.log(length); // only keeps the number, not the array
  };
}</code></pre>

Modern engines like V8 perform <strong>scope analysis</strong> and may optimize away variables not actually referenced by the closure. However, using <strong>eval()</strong> or <strong>debugger</strong> inside a closure prevents this optimization, forcing the entire scope to be retained. Always <strong>null out</strong> large references you no longer need inside closures.`
                },
                {
                    question: "What are DOM-related memory leaks?",
                    answer: `DOM memory leaks happen when JavaScript holds <strong>references to removed DOM elements</strong>. Even after removing an element from the document tree, if a JavaScript variable still points to it, the element and its entire subtree cannot be garbage collected. This is especially problematic in SPAs where DOM elements are frequently created and destroyed.

<pre><code>// Leak: reference to removed element
const btn = document.getElementById('myBtn');
document.body.removeChild(btn);
// btn variable still holds reference — element stays in memory

// Fix: null out the reference
let element = document.getElementById('myBtn');
element.remove();
element = null; // now GC can collect it

// Listeners on removed elements
const card = document.querySelector('.card');
card.addEventListener('click', handler);
card.remove();
// Fix: remove listener before or after removal, null reference
card.removeEventListener('click', handler);

// Using AbortController for easy cleanup
const controller = new AbortController();
element.addEventListener('click', handler, { signal: controller.signal });
// Later: controller.abort(); // removes all listeners at once</code></pre>

<strong>AbortController</strong> provides a modern way to clean up multiple event listeners at once. Pass its signal to addEventListener, and when you call <strong>controller.abort()</strong>, all associated listeners are removed automatically. This prevents the common mistake of forgetting to remove individual listeners.`
                },
                {
                    question: "What is a detached DOM tree?",
                    answer: `A <strong>detached DOM tree</strong> is a subtree of DOM nodes that has been removed from the document but is still referenced by JavaScript code. These orphaned trees lurk in memory invisibly and are one of the most common sources of memory leaks in <strong>Single Page Applications</strong>.

<pre><code>// Creating a detached DOM tree
let container = document.createElement('div');
for (let i = 0; i < 100; i++) {
  container.appendChild(document.createElement('span'));
}
// container is never appended to document = detached tree

// In SPAs — component unmount without cleanup
class Widget {
  constructor() {
    this.el = document.createElement('div');
    document.body.appendChild(this.el);
  }
  destroy() {
    this.el.remove();
    this.el = null; // release reference!
  }
}

// Detect in DevTools:
// Memory tab -> Take heap snapshot
// Filter by "Detached" to find leaked DOM nodes
// Look for "Detached HTMLDivElement" etc.</code></pre>

A single reference to any node in a detached tree keeps the <strong>entire tree</strong> alive. Even referencing a child span inside a removed container prevents the whole container and all its children from being collected. Always <strong>null out</strong> all JavaScript references to DOM elements when they are removed from the page.`
                },
                {
                    question: "How do you profile memory usage in the browser?",
                    answer: `Chrome DevTools provides three main tools for memory profiling: <strong>Heap Snapshot</strong> shows all objects in memory at a point in time, <strong>Allocation Timeline</strong> records allocations over time, and <strong>Allocation Sampling</strong> provides low-overhead profiling for production. The <strong>Performance tab</strong> shows memory trends alongside CPU activity.

<pre><code>// Performance API for basic monitoring
console.log(performance.memory);
// { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit }

// DevTools workflow for finding leaks:
// 1. Memory tab -> Take Heap Snapshot (baseline)
// 2. Perform the suspected leaking action
// 3. Take another snapshot
// 4. Compare snapshots -> "Comparison" view
// 5. Look for objects that grew unexpectedly

// Allocation timeline:
// Records allocations over time
// Blue bars = allocated, gray = freed
// Persistent blue bars = potential leak

// Mark timeline for correlation
console.timeStamp('Action started');
// ... perform action ...
console.timeStamp('Action ended');

// Force garbage collection in DevTools (for testing)
// Click the trash can icon in Performance/Memory tab</code></pre>

The <strong>three-snapshot technique</strong> is effective: take snapshot 1 (baseline), perform action, take snapshot 2, perform same action again, take snapshot 3. Objects in snapshot 3 not in snapshot 1 that also appeared in snapshot 2 are likely leaks. Use the <strong>Retainers</strong> panel to find what is keeping leaked objects alive.`
                },
                {
                    question: "What are best practices for managing memory?",
                    answer: `Minimize global variables, <strong>clean up timers and event listeners</strong> in component lifecycle methods, use <strong>weak references</strong> for caches, avoid detached DOM nodes, null out large references when done, and <strong>profile regularly</strong> during development to catch leaks early.

<pre><code>// 1. Clean up in component lifecycle
class Component {
  init() {
    this.timer = setInterval(this.update, 1000);
    this.controller = new AbortController();
    document.addEventListener('click', this.onClick, {
      signal: this.controller.signal
    });
  }
  destroy() {
    clearInterval(this.timer);
    this.controller.abort(); // removes all listeners
  }
}

// 2. Use WeakMap/WeakSet for metadata
const metadata = new WeakMap();
metadata.set(domNode, { clicks: 0 });

// 3. Limit cache size with LRU
class LRUCache {
  #map = new Map();
  #max;
  constructor(max = 100) { this.#max = max; }
  get(k) {
    const v = this.#map.get(k);
    if (v !== undefined) { this.#map.delete(k); this.#map.set(k, v); }
    return v;
  }
  set(k, v) {
    this.#map.delete(k);
    this.#map.set(k, v);
    if (this.#map.size > this.#max)
      this.#map.delete(this.#map.keys().next().value);
  }
}</code></pre>

In <strong>frameworks like React and Angular</strong>, always clean up in the appropriate lifecycle method (useEffect return function, ngOnDestroy). Use <strong>AbortController</strong> for batch listener cleanup, <strong>WeakMap</strong> for object-keyed caches, and <strong>LRU caches</strong> with size limits for string-keyed caches.`
                },
                {
                    question: "What is the FinalizationRegistry API?",
                    answer: `<strong>FinalizationRegistry</strong> lets you register a callback that fires when a registered object is garbage collected. This is useful for cleaning up <strong>external resources</strong> (file handles, network connections, WebGL buffers) that are associated with JavaScript objects but managed outside the GC.

<pre><code>// Create a registry with a cleanup callback
const registry = new FinalizationRegistry((heldValue) => {
  console.log('Object collected, cleaning up:', heldValue);
  // Close file handle, release buffer, etc.
  externalResources.release(heldValue);
});

// Register an object with a held value for cleanup
let obj = { name: 'resource' };
registry.register(obj, 'resource-id-123');
// When obj is GC'd, callback fires with 'resource-id-123'

obj = null; // eligible for GC — callback will fire eventually

// Unregister if cleanup is done manually
const token = {};
registry.register(obj, 'cleanup-data', token);
// Later, if you clean up manually:
registry.unregister(token); // prevent callback from firing</code></pre>

<strong>FinalizationRegistry</strong> callbacks are not guaranteed to fire promptly or at all — the spec only says they may be called. Never rely on them for critical cleanup. Use them as a <strong>safety net</strong> alongside explicit cleanup methods. The third argument to <strong>register()</strong> is an unregister token for canceling the registration.`
                },
                {
                    question: "How does memory work differently in Web Workers?",
                    answer: `<strong>Web Workers</strong> run in separate threads with their own <strong>isolated memory heap</strong>. They cannot share JavaScript objects with the main thread — data is communicated via <strong>postMessage()</strong>, which copies data using the structured clone algorithm. <strong>SharedArrayBuffer</strong> is the exception, allowing true shared memory.

<pre><code>// Worker has its own heap — no shared objects
const worker = new Worker('worker.js');

// Data is COPIED via structured clone (not shared)
worker.postMessage({ data: [1, 2, 3] }); // clone sent to worker
// Original array is not affected by worker's changes

// Transferable objects — move ownership (zero-copy)
const buffer = new ArrayBuffer(1024);
worker.postMessage(buffer, [buffer]); // transferred, not copied
console.log(buffer.byteLength); // 0 — ownership moved to worker

// SharedArrayBuffer — true shared memory
const shared = new SharedArrayBuffer(1024);
const view = new Int32Array(shared);
worker.postMessage(shared);
// Both threads see the same memory
// Use Atomics for thread-safe operations
Atomics.add(view, 0, 1); // thread-safe increment</code></pre>

<strong>Transferable objects</strong> (ArrayBuffer, MessagePort, ImageBitmap) can be moved between threads with zero-copy overhead using the transfer list. The original reference becomes empty after transfer. <strong>SharedArrayBuffer</strong> enables real shared memory but requires <strong>Atomics</strong> for synchronization to prevent race conditions.`
                },
                {
                    question: "What is the difference between shallow and deep copy in terms of memory?",
                    answer: `A <strong>shallow copy</strong> duplicates the top-level structure but shares nested object references, meaning changes to nested objects affect both copies. A <strong>deep copy</strong> recursively duplicates every nested object, creating completely independent copies. Each approach has different <strong>memory implications</strong>.

<pre><code>// Shallow copy — shared nested references
const original = { a: 1, nested: { b: 2 } };
const shallow = { ...original };
shallow.a = 99;           // does NOT affect original
shallow.nested.b = 99;    // DOES affect original!
console.log(original.nested.b); // 99

// Deep copy methods
// 1. structuredClone (modern, recommended)
const deep = structuredClone(original);
deep.nested.b = 100;
console.log(original.nested.b); // 99 — independent

// 2. JSON parse/stringify (limited — no functions, Date, etc.)
const jsonDeep = JSON.parse(JSON.stringify(original));

// Memory implications:
// Shallow: less memory, shared references
// Deep: more memory, no shared references
// Choose based on whether mutation isolation is needed

// structuredClone handles:
// - Nested objects, arrays, Maps, Sets
// - Date, RegExp, Blob, File, ArrayBuffer
// Does NOT handle: functions, DOM nodes, symbols</code></pre>

Use <strong>structuredClone()</strong> (available in all modern browsers and Node 17+) for deep copies — it handles circular references and many built-in types correctly. For simple flat objects, <strong>spread syntax</strong> or <strong>Object.assign()</strong> is sufficient and more memory-efficient.`
                },
                {
                    question: "How do ArrayBuffer and TypedArrays manage memory?",
                    answer: `<strong>ArrayBuffer</strong> allocates a fixed-size block of raw binary memory. <strong>TypedArrays</strong> (Int32Array, Float64Array, Uint8Array, etc.) provide views into that buffer for reading and writing data in specific numeric formats. This gives JavaScript <strong>low-level memory control</strong> similar to C arrays.

<pre><code>// Allocate 16 bytes of raw memory
const buffer = new ArrayBuffer(16);
console.log(buffer.byteLength); // 16

// Create typed views into the same buffer
const int32 = new Int32Array(buffer);   // 4 elements (4 bytes each)
const uint8 = new Uint8Array(buffer);   // 16 elements (1 byte each)

int32[0] = 42;
console.log(uint8[0]); // 42 — same underlying memory!

// Direct allocation with TypedArray
const floats = new Float64Array(1000); // 8000 bytes
floats[0] = 3.14;

// DataView for mixed types
const view = new DataView(buffer);
view.setInt16(0, 256, true);   // little-endian
view.setFloat32(4, 3.14, true);

// Practical use: reading binary file data
const response = await fetch('image.png');
const arrayBuffer = await response.arrayBuffer();
const bytes = new Uint8Array(arrayBuffer);</code></pre>

ArrayBuffers are used for <strong>WebGL</strong>, <strong>WebAudio</strong>, <strong>file processing</strong>, <strong>WebSockets</strong> (binary mode), and <strong>SharedArrayBuffer</strong> for concurrent programming. Unlike regular arrays, TypedArrays have fixed sizes and fixed element types, providing predictable memory layout and better performance for numeric computation.`
                },
                {
                    question: "How does the V8 engine optimize memory allocation?",
                    answer: `V8 uses several memory optimization strategies including <strong>hidden classes</strong> (shapes) for object layout, <strong>inline caching</strong> for property access, <strong>generational garbage collection</strong>, and <strong>pointer compression</strong>. Understanding these internals helps you write code that cooperates with V8's optimizations rather than fighting them.

<pre><code>// Hidden classes — V8 tracks object shape
// Objects with same property order share a hidden class
const a = { x: 1, y: 2 };  // shape: {x, y}
const b = { x: 3, y: 4 };  // same shape — optimized!
const c = { y: 1, x: 2 };  // different order = different shape!

// Monomorphic vs polymorphic function calls
function getX(obj) { return obj.x; }
getX({ x: 1 });        // monomorphic — fast (one shape)
getX({ x: 1, y: 2 });  // polymorphic — slower (multiple shapes)

// V8 memory layout:
// - Young generation (semi-space): 1-8 MB, fast allocation
// - Old generation: larger, mark-sweep-compact
// - Large object space: objects > 512KB
// - Code space: compiled functions

// Tips for V8-friendly code:
// 1. Initialize all properties in constructor
// 2. Don't add/delete properties after creation
// 3. Use consistent object shapes
// 4. Avoid sparse arrays</code></pre>

V8's <strong>hidden classes</strong> (also called Maps or Shapes) enable fast property access by caching the memory offset for each property. Objects with identical property names added in the same order share a hidden class. Dynamically adding or deleting properties creates new hidden classes, <strong>deoptimizing</strong> property access for those objects.`
                },
                {
                    question: "What are memory-efficient data structures in JavaScript?",
                    answer: `Choosing the right data structure significantly impacts memory usage. <strong>TypedArrays</strong> use far less memory than regular arrays for numeric data, <strong>Sets</strong> are more efficient than arrays for membership checks, and <strong>WeakMap/WeakSet</strong> prevent memory leaks by allowing automatic cleanup.

<pre><code>// TypedArray vs Array for numbers
const regularArr = new Array(1000000).fill(0);     // ~8MB (boxed numbers)
const typedArr = new Int32Array(1000000);           // ~4MB (raw 32-bit)
const smallTyped = new Uint8Array(1000000);         // ~1MB (raw 8-bit)

// Set vs Array for lookups
const arr = [1, 2, 3, /* ... 10000 items */];
arr.includes(9999); // O(n) scan

const set = new Set(arr);
set.has(9999); // O(1) lookup

// Map vs Object for dynamic keys
// Map: more memory-efficient for frequent add/delete
// Object: more memory-efficient for static known keys

// BitSet for boolean flags (extremely compact)
class BitSet {
  constructor(size) { this.data = new Uint32Array(Math.ceil(size / 32)); }
  set(i) { this.data[i >> 5] |= (1 << (i & 31)); }
  get(i) { return (this.data[i >> 5] >> (i & 31)) & 1; }
}
// 1 million booleans in ~125KB vs ~8MB for boolean array</code></pre>

For large datasets, consider <strong>streaming</strong> data through generators rather than loading everything into memory. <strong>Pagination</strong>, <strong>virtual scrolling</strong>, and <strong>lazy loading</strong> are also essential patterns for keeping memory usage low in web applications that display large amounts of data.`
                },
                {
                    question: "How do you detect and fix memory leaks in Node.js?",
                    answer: `Node.js provides <strong>process.memoryUsage()</strong> for basic monitoring and supports V8's <strong>heap snapshot</strong> API for detailed analysis. The <strong>--inspect</strong> flag enables Chrome DevTools connection for visual profiling. Growing <strong>heapUsed</strong> over repeated operations indicates a leak.

<pre><code>// Basic memory monitoring
console.log(process.memoryUsage());
// {
//   rss: 30000000,        // resident set size (total)
//   heapTotal: 7000000,   // V8 heap allocated
//   heapUsed: 5000000,    // V8 heap actually used
//   external: 1000000,    // C++ objects bound to JS
//   arrayBuffers: 500000  // ArrayBuffer memory
// }

// Detect leaks with periodic logging
setInterval(() => {
  const { heapUsed } = process.memoryUsage();
  console.log('Heap:', (heapUsed / 1024 / 1024).toFixed(2), 'MB');
}, 5000);

// Use --inspect for Chrome DevTools
// node --inspect server.js
// Open chrome://inspect in Chrome

// Heap snapshot programmatically
const v8 = require('v8');
const fs = require('fs');
const snapshotStream = v8.writeHeapSnapshot();
console.log('Snapshot written to:', snapshotStream);

// Trigger manual GC for testing (requires --expose-gc flag)
// node --expose-gc script.js
// global.gc();</code></pre>

Common Node.js-specific leaks include <strong>unclosed database connections</strong>, <strong>growing event listener lists</strong>, <strong>unbounded caches</strong>, and <strong>streams not properly destroyed</strong>. Use tools like <strong>clinic.js</strong> or <strong>0x</strong> for production-grade memory profiling and flamegraph analysis.`
                },
                {
                    question: "What is the structured clone algorithm?",
                    answer: `The <strong>structured clone algorithm</strong> is the mechanism used by JavaScript to deep-copy complex objects. It is used internally by <strong>structuredClone()</strong>, <strong>postMessage()</strong>, <strong>IndexedDB</strong>, and <strong>history.pushState()</strong>. It handles circular references, nested objects, and many built-in types that JSON cannot.

<pre><code>// structuredClone — the public API for structured cloning
const original = {
  date: new Date(),
  regex: /hello/gi,
  map: new Map([['key', 'value']]),
  set: new Set([1, 2, 3]),
  buffer: new ArrayBuffer(8),
  nested: { deep: { value: 42 } }
};

const clone = structuredClone(original);
clone.nested.deep.value = 99;
console.log(original.nested.deep.value); // 42 — independent copy

// Handles circular references
const circular = { name: 'self' };
circular.self = circular;
const cloned = structuredClone(circular); // works!

// NOT supported:
// - Functions
// - DOM nodes
// - Symbols
// - Property descriptors (getters/setters)
// - Prototype chain
// structuredClone(() => {}); // DataCloneError</code></pre>

<strong>structuredClone()</strong> is the modern replacement for the <strong>JSON.parse(JSON.stringify())</strong> hack. Unlike JSON, it correctly handles <strong>Date</strong>, <strong>RegExp</strong>, <strong>Map</strong>, <strong>Set</strong>, <strong>ArrayBuffer</strong>, <strong>Blob</strong>, <strong>File</strong>, and <strong>circular references</strong>. It is available in all modern browsers and Node.js 17+.`
                },
                {
                    question: "How do you manage memory in large-scale web applications?",
                    answer: `Large-scale web applications require a <strong>memory management strategy</strong> that includes component lifecycle cleanup, bounded caches, lazy loading, virtual scrolling for long lists, and regular profiling. Frameworks help with cleanup but cannot prevent all leaks — developers must understand the underlying patterns.

<pre><code>// 1. Component cleanup pattern
class AppView {
  #subscriptions = [];
  #controller = new AbortController();

  mount() {
    // Track all subscriptions for cleanup
    this.#subscriptions.push(
      store.subscribe('update', this.onUpdate)
    );
    window.addEventListener('resize', this.onResize, {
      signal: this.#controller.signal
    });
  }

  unmount() {
    this.#subscriptions.forEach(unsub => unsub());
    this.#subscriptions = [];
    this.#controller.abort(); // removes all DOM listeners
  }
}

// 2. Object pool for frequently created/destroyed objects
class ObjectPool {
  #pool = [];
  acquire() { return this.#pool.pop() || this.create(); }
  release(obj) { this.reset(obj); this.#pool.push(obj); }
  create() { return { x: 0, y: 0, active: false }; }
  reset(obj) { obj.x = 0; obj.y = 0; obj.active = false; }
}

// 3. Virtual scrolling — only render visible items
// Instead of 10,000 DOM nodes, render ~20 visible ones
// Libraries: react-window, @angular/cdk virtual-scroll</code></pre>

The <strong>object pool</strong> pattern reuses objects instead of creating and garbage-collecting them repeatedly — useful in animations, games, and particle systems where thousands of objects are created per frame. <strong>Virtual scrolling</strong> keeps DOM node count constant regardless of list size, dramatically reducing memory for large datasets.`
                }
            ]
        },
        {
            id: "modules-js",
            title: "Modules",
            icon: "bi-box-seam",
            questions: [
                {
                    question: "How do import and export work in ES modules?",
                    answer: `ES modules use <strong>export</strong> to expose values and <strong>import</strong> to consume them. Modules run in <strong>strict mode</strong> by default, have their own scope, and are evaluated only once (singleton). In the browser, you must use <strong>type="module"</strong> on the script tag.

<pre><code>// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14159;

// app.js
import { add, PI } from './math.js';
console.log(add(2, 3)); // 5
console.log(PI);         // 3.14159

// In HTML
// script type="module" src="app.js"

// Modules are:
// - Strict mode by default
// - Evaluated once (cached / singleton)
// - Deferred by default (like defer attribute)
// - Have their own scope (no global pollution)
// - Support top-level await</code></pre>

ES modules are the <strong>standard module system</strong> for JavaScript, supported in all modern browsers and Node.js 14+. Unlike scripts, modules do not pollute the global scope — each module has its own top-level variables. Modules are also <strong>fetched with CORS</strong> in browsers, requiring proper server headers.`
                },
                {
                    question: "What is the difference between default and named exports?",
                    answer: `<strong>Named exports</strong> require matching names on import (can be renamed with <strong>as</strong>). A <strong>default export</strong> allows any import name since there is only one per module. A module can have one default export and many named exports simultaneously.

<pre><code>// Named exports
export const name = 'Alice';
export function greet() { return 'Hi'; }

import { name, greet } from './user.js';
import { name as userName } from './user.js';  // rename

// Default export
export default class User { }

import User from './user.js';       // any name works
import MyUser from './user.js';     // same default, different name

// Mix both
export default class User { }
export const role = 'admin';

import User, { role } from './user.js';

// Exporting a value as default after declaration
const config = { debug: false };
export default config;</code></pre>

Use <strong>named exports</strong> when a module has multiple related utilities — they enable <strong>tree shaking</strong> and provide clear, discoverable API names. Use <strong>default exports</strong> for the primary export of a module (like a class or component). Many style guides prefer named exports for better refactoring support and IDE auto-import.`
                },
                {
                    question: "How does dynamic import() work?",
                    answer: `<strong>import()</strong> returns a promise that resolves to the module object. It enables <strong>code splitting</strong> and <strong>lazy loading</strong> — modules are only fetched and executed when needed, reducing initial bundle size and improving load time.

<pre><code>// Dynamic import returns a Promise
const module = await import('./heavy-module.js');
module.doSomething();

// Conditional loading
if (needsChart) {
  const { Chart } = await import('./chart.js');
  new Chart(canvas);
}

// Route-based code splitting
const routes = {
  '/dashboard': () => import('./pages/dashboard.js'),
  '/settings': () => import('./pages/settings.js')
};

async function navigate(path) {
  const module = await routes[path]();
  module.render();
}

// Error handling
try {
  const mod = await import('./optional.js');
} catch (e) {
  console.warn('Module not available');
}</code></pre>

Unlike static <strong>import</strong> declarations, dynamic <strong>import()</strong> can be used anywhere — inside conditionals, loops, event handlers, and even regular scripts (not just modules). Bundlers like Webpack and Vite recognize import() calls and automatically create separate <strong>chunks</strong> for code splitting.`
                },
                {
                    question: "What is CommonJS and how does it differ from ES modules?",
                    answer: `<strong>CommonJS</strong> (CJS) uses <strong>require()</strong> and <strong>module.exports</strong> for synchronous module loading, primarily in Node.js. <strong>ES modules</strong> (ESM) use <strong>import/export</strong>, support async loading, static analysis, and tree shaking. ESM is the modern standard replacing CJS.

<pre><code>// CommonJS (Node.js traditional)
const fs = require('fs');
module.exports = { readFile: fs.readFile };
module.exports.helper = function() {};

// ES Modules (modern standard)
import fs from 'fs';
export { readFile } from 'fs';

// Key differences:
// CJS: synchronous loading, dynamic, copies values
// ESM: async-compatible, static structure, live bindings

// CJS: require can be conditional
if (condition) { const m = require('./mod'); }

// ESM: import must be top-level
// if (condition) { import ... }  // SyntaxError
// Use import() for dynamic loading instead

// CJS: module.exports can be reassigned at any time
// ESM: exports are determined at parse time (not runtime)</code></pre>

In Node.js, use <strong>.mjs</strong> extension or set <strong>"type": "module"</strong> in package.json to use ESM. CJS and ESM can interoperate but with caveats — you can <strong>import</strong> CJS modules from ESM, but <strong>require()</strong> cannot load ESM modules synchronously. The ecosystem is gradually migrating to ESM.`
                },
                {
                    question: "What role do bundlers play with modules?",
                    answer: `Bundlers like <strong>Webpack</strong>, <strong>Vite</strong>, <strong>Rollup</strong>, and <strong>esbuild</strong> resolve module import graphs, combine files into optimized bundles, and apply transformations. They enable <strong>tree shaking</strong>, <strong>code splitting</strong>, <strong>minification</strong>, and support various module formats.

<pre><code>// Without bundler: many HTTP requests
// script type="module" src="a.js" loads b.js loads c.js
// 3+ separate network requests (each module is a request)

// With bundler: single optimized file
// a.js + b.js + c.js = bundle.js (one request)

// Bundler capabilities:
// - Tree shaking: remove unused exports
// - Code splitting: separate chunks loaded on demand
// - Minification: smaller file sizes
// - Transpilation: modern JS to compatible JS
// - Asset handling: import CSS, images, JSON
// - Hot Module Replacement (HMR): live updates in dev

// Vite uses native ESM in dev (instant startup)
// and Rollup for production builds (optimized output)

// Webpack uses a module map and runtime loader
// esbuild is written in Go (extremely fast)</code></pre>

Modern bundlers have moved toward <strong>zero-config</strong> setups. <strong>Vite</strong> leverages native browser ESM during development for instant startup, only bundling for production. <strong>Rollup</strong> produces the smallest bundles through excellent tree shaking. <strong>esbuild</strong> prioritizes speed with parallel Go-based compilation.`
                },
                {
                    question: "How do circular dependencies work in modules?",
                    answer: `Circular dependencies occur when module A imports B and B imports A. ES modules handle this through <strong>live bindings</strong> — imports are references to the original bindings, not copies. However, values may be <strong>undefined</strong> if accessed before they are initialized during module evaluation.

<pre><code>// a.js
import { b } from './b.js';
export const a = 'A';
console.log(b); // "B" (already initialized by the time a.js runs)

// b.js
import { a } from './a.js';
export const b = 'B';
console.log(a); // undefined! (a.js hasn't finished executing)

// Execution order: b.js evaluates first (imported by a.js)
// At that point, a.js hasn't assigned 'a' yet

// Fix: use functions to defer access
// b.js
import { getA } from './a.js';
export const b = 'B';
// Access later: getA() returns "A"

// a.js
export const a = 'A';
export function getA() { return a; }

// Best practice: restructure to avoid circular deps
// Extract shared code into a third module</code></pre>

Circular dependencies are a <strong>code smell</strong> that usually indicates poor module boundaries. The best fix is to extract the shared dependency into a separate module that both can import. When unavoidable, use <strong>function calls</strong> (not direct value access) to defer access until all modules have initialized.`
                },
                {
                    question: "How does re-exporting work?",
                    answer: `<strong>Re-exporting</strong> lets a module forward exports from other modules, creating a clean public API. This pattern is commonly used in <strong>barrel files</strong> (index.js) that aggregate exports from multiple files into a single import path.

<pre><code>// utils/math.js
export function add(a, b) { return a + b; }

// utils/string.js
export function capitalize(s) { return s[0].toUpperCase() + s.slice(1); }

// utils/index.js — barrel file
export { add } from './math.js';
export { capitalize } from './string.js';
export { default as Helper } from './helper.js';

// Now consumers use a single import path
import { add, capitalize, Helper } from './utils/index.js';

// Re-export everything from a module
export * from './math.js';

// Rename on re-export
export { add as sum } from './math.js';

// Re-export default as named
export { default as MathHelper } from './math-helper.js';</code></pre>

Barrel files simplify imports for consumers but can hurt <strong>tree shaking</strong> if the bundler cannot eliminate unused re-exports. Some projects use <strong>direct imports</strong> (import from the specific file) in performance-critical scenarios to ensure optimal tree shaking.`
                },
                {
                    question: "What is import.meta?",
                    answer: `<strong>import.meta</strong> is a special object containing metadata about the current module. The most widely supported property is <strong>import.meta.url</strong> — the full URL of the module file. It is only available inside ES modules, not regular scripts.

<pre><code>// Get current module URL
console.log(import.meta.url);
// "file:///project/src/app.js" or "https://example.com/app.js"

// Resolve relative paths
const dataUrl = new URL('./data.json', import.meta.url);
const response = await fetch(dataUrl);

// Vite-specific properties
// import.meta.env.MODE        — "development" or "production"
// import.meta.env.VITE_API_URL — custom env variable
// import.meta.hot              — HMR API

// Node.js (v21+)
// import.meta.dirname  — equivalent to __dirname
// import.meta.filename — equivalent to __filename

// Node.js (older versions)
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);</code></pre>

<strong>import.meta</strong> is extensible by the host environment. Bundlers like Vite add <strong>import.meta.env</strong> for environment variables and <strong>import.meta.hot</strong> for Hot Module Replacement. Node.js recently added <strong>import.meta.dirname</strong> and <strong>import.meta.filename</strong> as replacements for the CJS <strong>__dirname</strong> and <strong>__filename</strong>.`
                },
                {
                    question: "What is tree shaking?",
                    answer: `<strong>Tree shaking</strong> is a dead-code elimination technique that removes unused exports from the final bundle. It works by analyzing the static structure of ES module <strong>import/export</strong> statements at build time — only code that is actually imported gets included.

<pre><code>// utils.js
export function used() { return 'I am used'; }
export function unused() { return 'I am not used'; }

// app.js
import { used } from './utils.js';
console.log(used());

// After tree shaking: unused() is removed from bundle

// Requirements for effective tree shaking:
// 1. ES module syntax (import/export, not require)
// 2. No side effects in module top-level code
// 3. Static imports (not dynamic require())
// 4. Pure function calls (no hidden state changes)

// Mark package as side-effect-free in package.json
// { "sideEffects": false }

// Or specify files WITH side effects
// { "sideEffects": ["./src/polyfills.js", "*.css"] }

// Side effects prevent tree shaking:
// import './global-styles.css';  // side effect — must keep</code></pre>

Tree shaking only works with <strong>ES modules</strong> because their import/export structure is determined at parse time (statically analyzable). <strong>CommonJS require()</strong> is dynamic and cannot be tree-shaken. Mark your library as <strong>side-effect-free</strong> in package.json to help bundlers aggressively remove unused code.`
                },
                {
                    question: "How do you handle module loading errors?",
                    answer: `Static <strong>import</strong> declarations fail at load time and halt module evaluation — they cannot be caught with try/catch. Dynamic <strong>import()</strong> returns a promise, so you can handle failures gracefully using <strong>.catch()</strong> or <strong>try/catch</strong> with <strong>await</strong>.

<pre><code>// Dynamic import with error handling
try {
  const mod = await import('./optional-feature.js');
  mod.init();
} catch (e) {
  console.warn('Feature not available:', e.message);
  // Provide fallback behavior
}

// Promise-based
import('./analytics.js')
  .then(m => m.track('pageview'))
  .catch(() => console.warn('Analytics unavailable'));

// Fallback pattern — try primary, fall back to alternative
async function loadModule(primary, fallback) {
  try {
    return await import(primary);
  } catch {
    return await import(fallback);
  }
}

const charts = await loadModule('./fancy-charts.js', './basic-charts.js');</code></pre>

Static import failures (like a 404 or syntax error in the imported module) cause the <strong>entire module graph</strong> to fail loading. For optional features or progressive enhancement, always use <strong>dynamic import()</strong> with error handling so your application can gracefully degrade.`
                },
                {
                    question: "What are module namespaces and how do you use them?",
                    answer: `A <strong>module namespace object</strong> is created when you use <strong>import * as name</strong>. It bundles all named exports from a module into a single object, making it easy to access everything through a namespace without listing individual imports.

<pre><code>// math.js
export const PI = 3.14159;
export function add(a, b) { return a + b; }
export function multiply(a, b) { return a * b; }

// Import entire module as namespace
import * as math from './math.js';

console.log(math.PI);           // 3.14159
console.log(math.add(2, 3));    // 5
console.log(math.multiply(4, 5)); // 20

// Namespace is a frozen object — cannot modify
// math.PI = 0;  // TypeError in strict mode

// Default export is available as .default
import * as mod from './module-with-default.js';
console.log(mod.default); // the default export

// Useful for utilities with many exports
import * as validators from './validators.js';
if (validators.isEmail(input)) { }
if (validators.isPhone(input)) { }</code></pre>

Module namespaces are <strong>live</strong> — if the exporting module updates a binding, the namespace reflects the change. They are also <strong>not iterable</strong> with for...of but you can use <strong>Object.keys()</strong> or <strong>Object.entries()</strong> to inspect their contents. Namespace imports may prevent tree shaking in some bundlers.`
                },
                {
                    question: "What is top-level await in ES modules?",
                    answer: `<strong>Top-level await</strong> allows you to use <strong>await</strong> at the module's top level without wrapping it in an async function. The module's evaluation pauses until the awaited promise resolves, and any module that imports it will wait for it to complete.

<pre><code>// config.js — top-level await
const response = await fetch('/api/config');
export const config = await response.json();
// Importing modules wait for this to resolve

// db.js — async initialization
const connection = await connectToDatabase();
export { connection };

// app.js — these run after config.js resolves
import { config } from './config.js';
console.log(config.apiUrl); // guaranteed to be loaded

// Conditional async loading
const features = await import(
  navigator.language.startsWith('ja')
    ? './i18n/ja.js'
    : './i18n/en.js'
);

// Error handling still applies
// If the awaited promise rejects, the module fails to load
// and all importing modules fail too</code></pre>

Top-level await is supported in <strong>ES modules only</strong> (not CommonJS or regular scripts). It blocks the evaluation of the current module and all modules that depend on it. Use it sparingly — overuse can create <strong>loading waterfalls</strong> where modules load sequentially instead of in parallel.`
                },
                {
                    question: "How do you structure modules in a large project?",
                    answer: `Large projects benefit from a clear <strong>module architecture</strong>: group files by feature or domain, use barrel files (index.js) for clean public APIs, keep modules focused on a single responsibility, and establish clear dependency direction to avoid circular imports.

<pre><code>// Feature-based structure (recommended)
// src/
//   auth/
//     index.js          — public API (barrel file)
//     auth.service.js
//     auth.utils.js
//     login.component.js
//   users/
//     index.js
//     users.service.js
//     user.model.js
//   shared/
//     index.js
//     http.js
//     validators.js

// auth/index.js — barrel file
export { AuthService } from './auth.service.js';
export { login, logout } from './auth.utils.js';
// Internals are NOT exported

// Consumer imports from the barrel
import { AuthService, login } from './auth/index.js';

// Dependency rules:
// - Features import from shared/ — OK
// - shared/ never imports from features — correct
// - Features should not import from each other's internals
// - Use dependency injection for cross-feature communication</code></pre>

Follow the <strong>Dependency Rule</strong>: dependencies should point inward toward shared/core modules, never outward toward feature modules. This creates a clear hierarchy and prevents circular dependencies. Use <strong>barrel files</strong> to define the public API of each feature folder.`
                },
                {
                    question: "What are module side effects and why do they matter?",
                    answer: `A <strong>side effect</strong> in a module is code that runs at import time and affects something outside the module — like modifying globals, registering polyfills, or appending to the DOM. Side effects prevent <strong>tree shaking</strong> because the bundler cannot safely remove the import even if no exports are used.

<pre><code>// Module WITH side effects — runs code at import time
// polyfill.js
if (!Array.prototype.flat) {
  Array.prototype.flat = function() { /* ... */ };
}
// Just importing this file modifies Array.prototype
import './polyfill.js'; // side effect — must not be tree-shaken

// Module WITHOUT side effects — pure exports
// utils.js
export function add(a, b) { return a + b; }
export function subtract(a, b) { return a - b; }
// Safe to remove unused exports

// CSS imports are side effects
import './styles.css'; // modifies page appearance

// Tell bundler in package.json:
// { "sideEffects": false }           — no side effects anywhere
// { "sideEffects": ["*.css", "polyfill.js"] } — only these files

// Side effect in module scope (avoid when possible)
let counter = 0;
export function increment() { return ++counter; }
// This module has state — considered a side effect</code></pre>

When building a <strong>library</strong>, marking it as side-effect-free in package.json allows bundlers to aggressively tree-shake unused exports. If your module must have side effects (polyfills, CSS), list them explicitly so the bundler knows not to remove those imports.`
                },
                {
                    question: "How does module resolution work in Node.js?",
                    answer: `Node.js resolves module specifiers using a specific algorithm: <strong>relative paths</strong> (./file) resolve to files, <strong>bare specifiers</strong> (lodash) look in node_modules directories walking up the filesystem, and <strong>built-in modules</strong> (fs, path) resolve to Node.js internals. ESM adds the <strong>exports</strong> field in package.json for explicit entry points.

<pre><code>// Relative imports — resolve to files
import { helper } from './utils.js';  // ./utils.js
import config from '../config.js';    // ../config.js

// Bare specifiers — node_modules lookup
import lodash from 'lodash';
// Searches: ./node_modules/lodash, ../node_modules/lodash, etc.

// Resolution order for require('foo'):
// 1. Built-in module? (fs, path, http) — use it
// 2. Starts with ./ or ../ or /? — resolve as file/directory
// 3. Look in node_modules/ (walk up directory tree)

// Package.json "exports" field (modern)
// { "exports": { ".": "./src/index.js", "./utils": "./src/utils.js" } }
import pkg from 'my-lib';        // resolves to "./src/index.js"
import utils from 'my-lib/utils'; // resolves to "./src/utils.js"

// Conditional exports
// { "exports": { "import": "./esm/index.js", "require": "./cjs/index.js" } }</code></pre>

The <strong>exports</strong> field in package.json is the modern way to define entry points. It replaces the <strong>main</strong> field and supports <strong>conditional exports</strong> — different entry points for ESM vs CJS, browser vs Node.js, development vs production. It also <strong>encapsulates</strong> the package, preventing imports of internal files not listed in exports.`
                },
                {
                    question: "What are Import Maps and how do they work?",
                    answer: `<strong>Import Maps</strong> are a browser feature that lets you control how module specifiers are resolved — mapping bare specifiers (like "lodash") to URLs without needing a bundler. They are defined in a <strong>script type="importmap"</strong> tag in HTML.

<pre><code>// In HTML — define import map before any module scripts
// script type="importmap"
// {
//   "imports": {
//     "lodash": "https://cdn.jsdelivr.net/npm/lodash-es/lodash.js",
//     "react": "/vendor/react.js",
//     "utils/": "./src/utils/"
//   }
// }

// Now bare specifiers work in the browser!
import _ from 'lodash';          // resolves to CDN URL
import React from 'react';      // resolves to /vendor/react.js
import { add } from 'utils/math.js'; // resolves to ./src/utils/math.js

// Scoped remapping
// {
//   "imports": { "lodash": "/vendor/lodash-v4.js" },
//   "scopes": {
//     "/legacy/": { "lodash": "/vendor/lodash-v3.js" }
//   }
// }
// Modules in /legacy/ use lodash v3, others use v4</code></pre>

Import Maps are supported in <strong>all modern browsers</strong> and are available in <strong>Deno</strong> natively. They enable running ES modules in the browser without any build step — useful for prototyping, small projects, and progressive enhancement. For production, bundlers still provide better optimization through tree shaking and minification.`
                },
                {
                    question: "How do you test modules effectively?",
                    answer: `Testing modules requires <strong>mocking dependencies</strong> to isolate the module under test. Modern test frameworks provide built-in module mocking through <strong>jest.mock()</strong>, <strong>vi.mock()</strong> (Vitest), or dependency injection patterns. Keep modules <strong>pure</strong> and small for easier testing.

<pre><code>// user.service.js
import { fetchUser } from './api.js';
export async function getUser(id) {
  const user = await fetchUser(id);
  return { ...user, displayName: user.firstName + ' ' + user.lastName };
}

// user.service.test.js (Vitest/Jest)
import { describe, it, expect, vi } from 'vitest';
import { getUser } from './user.service.js';

// Mock the dependency
vi.mock('./api.js', () => ({
  fetchUser: vi.fn().mockResolvedValue({
    firstName: 'Alice', lastName: 'Smith'
  })
}));

describe('getUser', () => {
  it('creates display name', async () => {
    const user = await getUser(1);
    expect(user.displayName).toBe('Alice Smith');
  });
});

// Dependency injection pattern (no mocking needed)
export function createUserService(api) {
  return {
    async getUser(id) {
      const user = await api.fetchUser(id);
      return { ...user, displayName: user.firstName + ' ' + user.lastName };
    }
  };
}</code></pre>

The <strong>dependency injection</strong> pattern makes modules testable without framework-specific mocking tools. Pass dependencies as parameters instead of importing them directly. This also improves reusability and makes the dependency graph explicit.`
                },
                {
                    question: "What are the differences between script and module in the browser?",
                    answer: `Scripts and modules differ in <strong>scope</strong>, <strong>loading behavior</strong>, <strong>strict mode</strong>, and <strong>feature support</strong>. Scripts share the global scope and execute synchronously by default, while modules have isolated scope, are deferred automatically, and support import/export syntax.

<pre><code>// Classic script
// script src="app.js"
// - Shares global scope (var creates window properties)
// - Executes synchronously (blocks parsing)
// - No import/export support
// - this === window at top level
// - Can be loaded cross-origin without CORS

// Module script
// script type="module" src="app.js"
// - Own scope (variables don't leak to window)
// - Deferred by default (like adding defer attribute)
// - import/export syntax available
// - Strict mode by default
// - this === undefined at top level
// - Fetched with CORS (requires proper headers)
// - Executed only once even if included multiple times

// Inline modules
// script type="module"
//   import { add } from './math.js';
//   console.log(add(1, 2)); // works inline too

// nomodule fallback for older browsers
// script nomodule src="legacy-bundle.js"
// Only runs in browsers that DON'T support modules</code></pre>

The <strong>nomodule</strong> attribute provides a clean fallback pattern: modern browsers ignore scripts with nomodule (they use the module version), while older browsers ignore type="module" scripts and load the nomodule fallback. This enables <strong>differential serving</strong> — smaller modern bundles for capable browsers.`
                }
            ]
        },
        {
            id: "this-keyword",
            title: "this Keyword",
            icon: "bi-cursor-text",
            questions: [
                {
                    question: "What does 'this' refer to in the global context?",
                    answer: `In the global context (outside any function), <strong>this</strong> refers to the <strong>global object</strong> — <strong>window</strong> in browsers and <strong>globalThis</strong> universally. In strict mode at the module level, <strong>this</strong> is <strong>undefined</strong>. Understanding the global context is the foundation for all other this behaviors.

<pre><code>// Browser (non-strict)
console.log(this === window); // true

// globalThis — works everywhere (ES2020)
console.log(globalThis);
// window in browser, global in Node.js

// Strict mode (top-level)
'use strict';
console.log(this); // undefined (at top level in strict mode)

// ES module — always strict
// script type="module"
//   console.log(this); // undefined

// var declarations create window properties
var x = 10;
console.log(window.x);  // 10
console.log(this.x);    // 10 (in non-strict global)</code></pre>

In <strong>Node.js</strong>, the top-level <strong>this</strong> in a CommonJS module refers to <strong>module.exports</strong> (not the global object). In an ES module, top-level this is <strong>undefined</strong>. Use <strong>globalThis</strong> (ES2020) for a universal reference to the global object across all environments.`
                },
                {
                    question: "How does 'this' work inside a regular function?",
                    answer: `In a regular function, <strong>this</strong> is determined by <strong>how the function is called</strong>, not where it is defined. In non-strict mode, a standalone function call sets this to the global object. In strict mode, this is <strong>undefined</strong>.

<pre><code>function showThis() {
  console.log(this);
}

showThis();           // window (non-strict) or undefined (strict)

// 'this' is determined at call time
const obj = { fn: showThis };
obj.fn();             // obj (called as method)

// Same function, different 'this'
const fn = obj.fn;
fn();                 // window or undefined (standalone call)

// Strict mode
'use strict';
function strictFn() {
  console.log(this); // undefined — not window
}
strictFn();</code></pre>

This is called <strong>implicit binding</strong> — the object before the dot determines this. When there is no dot (standalone call), this falls back to the <strong>default binding</strong>: the global object in sloppy mode or undefined in strict mode. This dynamic behavior is unique to regular functions — arrow functions behave differently.`
                },
                {
                    question: "How does 'this' work in object methods?",
                    answer: `When a function is called as a method of an object (<strong>obj.method()</strong>), <strong>this</strong> refers to the object before the dot. The binding depends entirely on the <strong>call site</strong> — not where the function was defined. This is why extracting a method loses its this binding.

<pre><code>const user = {
  name: 'Alice',
  greet() {
    return 'Hi, ' + this.name;
  }
};

user.greet();  // "Hi, Alice" — this = user

// Method extraction loses 'this'
const greet = user.greet;
greet();       // "Hi, undefined" — this = window/undefined

// Nested object — this = immediate caller
const app = {
  user: {
    name: 'Bob',
    getName() { return this.name; }
  }
};
app.user.getName(); // "Bob" — this = app.user (NOT app)

// Passing method as callback also loses 'this'
setTimeout(user.greet, 100); // "Hi, undefined"</code></pre>

The most important rule is: <strong>this is set by the call site, not the definition site</strong>. The object immediately before the dot becomes this. When you pass a method as a callback (setTimeout, addEventListener, array methods), the <strong>dot binding is lost</strong> — use bind(), arrow functions, or store a reference to fix it.`
                },
                {
                    question: "How does 'this' work in arrow functions?",
                    answer: `Arrow functions do <strong>not have their own this</strong>. They capture this from the <strong>enclosing lexical scope</strong> at the time they are defined. This cannot be changed by <strong>call</strong>, <strong>apply</strong>, or <strong>bind</strong> — the lexical this is permanent.

<pre><code>const obj = {
  name: 'Alice',
  regular() { return this.name; },         // "Alice"
  arrow: () => this.name,                  // undefined (outer this)
  delayed() {
    setTimeout(() => {
      console.log(this.name);              // "Alice" — arrow inherits
    }, 100);
    setTimeout(function() {
      console.log(this.name);              // undefined — own this
    }, 100);
  }
};

// Cannot rebind arrow function's this
const arrow = () => this;
arrow.call({ a: 1 }); // still outer this, not { a: 1 }

// Arrow as method — usually wrong
const broken = {
  name: 'Bob',
  getName: () => this.name  // undefined — this is from outer scope
};

// Arrow in constructor — works perfectly
class Timer {
  constructor() { this.seconds = 0; }
  start() {
    setInterval(() => this.seconds++, 1000); // this = instance
  }
}</code></pre>

Arrow functions are <strong>ideal for callbacks</strong> where you want to preserve the outer this — setTimeout handlers, array methods, promise chains. They are <strong>not suitable for object methods</strong> or prototype methods because they capture the wrong this (typically window or undefined).`
                },
                {
                    question: "How do call, apply, and bind set 'this'?",
                    answer: `<strong>call</strong> and <strong>apply</strong> invoke the function immediately with a specified this. <strong>bind</strong> returns a new function with this permanently set. The difference between call and apply is how arguments are passed — call takes individual arguments, apply takes an array.

<pre><code>function greet(greeting, punct) {
  return greeting + ', ' + this.name + punct;
}

const user = { name: 'Alice' };

// call — individual arguments
greet.call(user, 'Hello', '!');   // "Hello, Alice!"

// apply — array of arguments
greet.apply(user, ['Hi', '.']);   // "Hi, Alice."

// bind — returns new function with permanent this
const bound = greet.bind(user, 'Hey');
bound('?');  // "Hey, Alice?"

// bind is permanent — cannot rebind
bound.call({ name: 'Bob' }, '!'); // still "Hey, Alice!"

// Practical: borrowing array methods
const nodeList = document.querySelectorAll('div');
const arr = Array.prototype.slice.call(nodeList);

// Modern alternative to apply for spreading args
const numbers = [3, 1, 4, 1, 5];
Math.max.apply(null, numbers);  // 5
Math.max(...numbers);           // 5 (modern spread)</code></pre>

<strong>bind()</strong> is commonly used to fix this in callbacks — for example <strong>this.handleClick.bind(this)</strong> in React class components. Remember that <strong>bind</strong> creates a new function each time, so bind once (in the constructor) rather than in render methods to avoid unnecessary re-renders.`
                },
                {
                    question: "How does 'this' work inside a class?",
                    answer: `In class methods, <strong>this</strong> refers to the class instance. However, if a method is extracted and called standalone, this is lost. Two common fixes are <strong>arrow function class fields</strong> and <strong>bind in the constructor</strong>.

<pre><code>class User {
  constructor(name) {
    this.name = name;
    // Option 1: bind in constructor
    this.greetBound = this.greet.bind(this);
  }

  greet() {
    return 'Hi, ' + this.name;
  }

  // Option 2: arrow function class field
  greetArrow = () => 'Hi, ' + this.name;
}

const u = new User('Alice');
u.greet();          // "Hi, Alice"

const fn = u.greet;
fn();               // TypeError or "Hi, undefined" — this lost

const fn2 = u.greetArrow;
fn2();              // "Hi, Alice" — arrow keeps this

// Static methods — this = class itself
class MathHelper {
  static create() {
    return new this(); // this = MathHelper class
  }
}</code></pre>

Arrow function class fields create a <strong>new function per instance</strong> (stored on the instance, not the prototype), which uses slightly more memory. Prototype methods with <strong>bind in the constructor</strong> have the same memory cost. For most applications the difference is negligible — use whichever style your team prefers.`
                },
                {
                    question: "How does 'this' work in event handlers?",
                    answer: `In DOM event handlers added via <strong>addEventListener</strong>, this refers to the <strong>element the listener is attached to</strong> (same as event.currentTarget). Arrow functions inherit the outer this instead, so use event.currentTarget to access the element.

<pre><code>const btn = document.querySelector('button');

// Regular function — this = element
btn.addEventListener('click', function(e) {
  console.log(this);          // button element
  console.log(this === e.currentTarget); // true
});

// Arrow function — this = outer scope (NOT the element)
btn.addEventListener('click', (e) => {
  console.log(this);            // window or outer this
  console.log(e.currentTarget); // use this for element
});

// Class method as handler
class App {
  constructor() {
    this.count = 0;
    btn.addEventListener('click', this.handleClick.bind(this));
    // or use arrow: (e) => this.handleClick(e)
  }
  handleClick() {
    this.count++; // this = App instance (bound)
  }
}</code></pre>

When using <strong>event delegation</strong>, this refers to the element the listener was attached to (the parent), not the element that triggered the event. Use <strong>event.target</strong> to get the actual clicked element and <strong>event.currentTarget</strong> (same as this) to get the listener's element.`
                },
                {
                    question: "What is explicit binding in JavaScript?",
                    answer: `<strong>Explicit binding</strong> means manually setting this using <strong>call</strong>, <strong>apply</strong>, or <strong>bind</strong>. It takes precedence over implicit binding (method calls) but is overridden by the <strong>new</strong> keyword. This is part of the <strong>this binding precedence rules</strong>.

<pre><code>function identify() {
  return this.name;
}

const alice = { name: 'Alice' };
const bob = { name: 'Bob' };

// Explicit binding overrides implicit
identify.call(alice);   // "Alice"
identify.call(bob);     // "Bob"

// Binding precedence (highest to lowest):
// 1. new keyword — creates new object
// 2. Explicit: call / apply / bind
// 3. Implicit: obj.method()
// 4. Default: global / undefined

const bound = identify.bind(alice);
const obj = { name: 'Obj', fn: bound };
obj.fn(); // "Alice" — bind wins over implicit

// Passing null/undefined to call/apply
// Non-strict: this = global object
// Strict: this = null/undefined (as passed)
function log() { console.log(this); }
log.call(null); // window (non-strict) or null (strict)</code></pre>

The <strong>binding precedence</strong> is crucial for predicting this behavior: new > explicit (call/apply/bind) > implicit (dot notation) > default (global/undefined). When multiple rules apply, the highest-precedence rule wins.`
                },
                {
                    question: "How does 'this' work with the new keyword?",
                    answer: `When a function is called with <strong>new</strong>, JavaScript creates a fresh empty object, sets <strong>this</strong> to that object, links its prototype, executes the constructor body, and returns <strong>this</strong> (unless the constructor explicitly returns a different object).

<pre><code>function Person(name) {
  // new does: this = {} (linked to Person.prototype)
  this.name = name;
  // implicitly returns this
}

const p = new Person('Alice');
console.log(p.name); // "Alice"

// new overrides bind
const BoundPerson = Person.bind({ name: 'Ignored' });
const p2 = new BoundPerson('Bob');
console.log(p2.name); // "Bob" — new wins over bind

// If constructor returns a primitive — ignored
function Foo() {
  this.a = 1;
  return 42; // ignored — this is returned
}
new Foo(); // { a: 1 }

// If constructor returns an object — this is discarded
function Bar() {
  this.a = 1;
  return { b: 2 }; // this is discarded
}
new Bar(); // { b: 2 }, not { a: 1 }</code></pre>

The <strong>new</strong> keyword has the highest binding precedence — it overrides even <strong>bind()</strong>. This is why you cannot use <strong>call/apply</strong> with new (it is a syntax error), but <strong>bind</strong> works and the new binding takes precedence. Arrow functions cannot be used with new — they throw a TypeError.`
                },
                {
                    question: "What is 'lost this' and how do you fix it?",
                    answer: `<strong>Lost this</strong> happens when a method is passed as a callback or assigned to a variable — the implicit binding to the object is broken. This is one of the most common bugs in JavaScript, especially in <strong>setTimeout</strong>, <strong>event handlers</strong>, and <strong>array methods</strong>.

<pre><code>class Timer {
  constructor() {
    this.seconds = 0;
  }

  start() {
    // Problem: 'this' is lost in callback
    setInterval(function() {
      this.seconds++; // TypeError or NaN
    }, 1000);

    // Fix 1: arrow function (most common)
    setInterval(() => {
      this.seconds++; // works — inherits this
    }, 1000);

    // Fix 2: bind
    setInterval(function() {
      this.seconds++;
    }.bind(this), 1000);

    // Fix 3: store reference (older pattern)
    const self = this;
    setInterval(function() {
      self.seconds++;
    }, 1000);
  }
}

// Fix 4: arrow function class field
class Button {
  label = 'Click me';
  handleClick = () => console.log(this.label);
  // Always safe to pass as callback
}</code></pre>

The <strong>arrow function</strong> fix is the most popular modern solution. It captures this from the enclosing scope, making it immune to how the function is called later. In <strong>React</strong>, arrow function class fields eliminate the need for constructor binding entirely.`
                },
                {
                    question: "How does 'this' work in nested functions?",
                    answer: `Nested regular functions create their own <strong>this</strong> binding — they do not inherit this from the outer function. This is a common source of confusion. Arrow functions solve this because they inherit this from the enclosing scope.

<pre><code>const person = {
  name: 'Alice',
  friends: ['Bob', 'Charlie'],
  
  showFriends() {
    // this = person (method call)
    
    // Problem: nested function has its own this
    this.friends.forEach(function(friend) {
      console.log(this.name + ' knows ' + friend);
      // this = undefined (strict) or window
    });
    
    // Fix: arrow function inherits this
    this.friends.forEach((friend) => {
      console.log(this.name + ' knows ' + friend);
      // this = person (inherited from showFriends)
    });
    
    // Alternative: pass thisArg parameter
    this.friends.forEach(function(friend) {
      console.log(this.name + ' knows ' + friend);
    }, this); // second argument to forEach sets this
  }
};</code></pre>

Many array methods (<strong>forEach</strong>, <strong>map</strong>, <strong>filter</strong>, <strong>every</strong>, <strong>some</strong>) accept an optional <strong>thisArg</strong> as their second argument. However, using <strong>arrow functions</strong> is the cleaner and more common solution since it works everywhere, not just in methods that accept thisArg.`
                },
                {
                    question: "What is the globalThis property?",
                    answer: `<strong>globalThis</strong> (ES2020) provides a universal way to access the global object across all JavaScript environments. Previously, getting the global object required different code for browsers (<strong>window</strong>), Node.js (<strong>global</strong>), Web Workers (<strong>self</strong>), and other environments.

<pre><code>// Works everywhere — browser, Node.js, Web Workers
console.log(globalThis);

// Previously required environment detection
const getGlobal = () => {
  if (typeof window !== 'undefined') return window;
  if (typeof global !== 'undefined') return global;
  if (typeof self !== 'undefined') return self;
  throw new Error('No global object found');
};

// Now just use globalThis
globalThis.myFlag = true;

// Useful for feature detection
if (typeof globalThis.fetch === 'function') {
  // fetch is available
}

// globalThis === window  (in browser)
// globalThis === global  (in Node.js)
// globalThis === self    (in Web Worker)</code></pre>

<strong>globalThis</strong> is especially useful for <strong>isomorphic/universal code</strong> that runs in both browser and server environments. While adding properties to globalThis is possible, it creates global state — prefer module-scoped variables or dependency injection instead.`
                },
                {
                    question: "How does 'this' work in getter and setter methods?",
                    answer: `In <strong>getter</strong> and <strong>setter</strong> methods defined with <strong>get</strong> and <strong>set</strong> keywords, <strong>this</strong> refers to the object that owns the property. They work like regular methods for this binding — the object before the dot determines this.

<pre><code>const user = {
  firstName: 'Alice',
  lastName: 'Smith',
  
  get fullName() {
    return this.firstName + ' ' + this.lastName;
  },
  
  set fullName(value) {
    const parts = value.split(' ');
    this.firstName = parts[0];
    this.lastName = parts[1];
  }
};

console.log(user.fullName);   // "Alice Smith" — this = user
user.fullName = 'Bob Jones';
console.log(user.firstName);  // "Bob"

// Class getters/setters — same behavior
class Circle {
  #radius;
  constructor(r) { this.#radius = r; }
  
  get area() {
    return Math.PI * this.#radius ** 2; // this = instance
  }
  
  get diameter() {
    return this.#radius * 2;
  }
  
  set radius(r) {
    if (r < 0) throw new Error('Negative radius');
    this.#radius = r;
  }
}</code></pre>

Getters and setters are invoked like property access (<strong>obj.prop</strong>) — there are no parentheses. Despite the syntax difference, this behaves the same as regular methods. They cannot be arrow functions — the <strong>get</strong> and <strong>set</strong> keywords require regular function syntax.`
                },
                {
                    question: "How does 'this' work with Proxy objects?",
                    answer: `When methods are accessed through a <strong>Proxy</strong>, this inside the method refers to the <strong>Proxy object</strong>, not the original target. This can cause issues with private fields and internal slots that expect the original object.

<pre><code>const target = {
  name: 'Alice',
  greet() {
    return 'Hi, ' + this.name;
  }
};

const proxy = new Proxy(target, {
  get(target, prop, receiver) {
    console.log('Accessed:', prop);
    return Reflect.get(target, prop, receiver);
  }
});

proxy.greet(); // "Hi, Alice"
// this inside greet() is the proxy
// But proxy.name triggers the get trap → works

// Problem with private fields
class Secret {
  #value = 42;
  getValue() { return this.#value; }
}

const secret = new Secret();
const secretProxy = new Proxy(secret, {});
// secretProxy.getValue();
// TypeError: Cannot read private member from proxy
// Fix: bind methods to original target in the get trap</code></pre>

To fix private field issues with Proxies, bind methods to the original target inside the <strong>get trap</strong>: if the property is a function, return <strong>target[prop].bind(target)</strong>. This ensures this inside the method refers to the actual object, not the Proxy.`
                },
                {
                    question: "How do you determine 'this' in any situation? (Summary rules)",
                    answer: `Determining this follows a simple <strong>priority system</strong>. Check these rules in order — the first matching rule determines this. This mental model covers every possible scenario in JavaScript.

<pre><code>// Rule 1: new keyword — this = new empty object
function Foo() { console.log(this); }
new Foo(); // {} (new object)

// Rule 2: Explicit binding (call/apply/bind) — this = specified
function bar() { console.log(this); }
bar.call({ x: 1 }); // { x: 1 }

// Rule 3: Implicit binding (method call) — this = object before dot
const obj = { fn() { console.log(this); } };
obj.fn(); // obj

// Rule 4: Default — this = global (sloppy) or undefined (strict)
function baz() { console.log(this); }
baz(); // window or undefined

// Special: Arrow functions — SKIP all rules above
// Use this from enclosing lexical scope (where defined)
const outer = {
  method() {
    const arrow = () => console.log(this);
    arrow(); // outer (inherited, ignores call site)
  }
};

// Quick cheat sheet:
// new?        → new object
// call/apply/bind? → specified object
// obj.method()? → obj
// standalone?  → global/undefined
// arrow?       → lexical (outer) this</code></pre>

This <strong>priority-based approach</strong> makes this predictable: new > explicit > implicit > default. Arrow functions are the exception — they completely ignore these rules and always use the lexical this. When debugging this issues, check the <strong>call site</strong> and apply these rules in order.`
                }
            ]
        },
        {
            id: "hoisting-scope",
            title: "Hoisting & TDZ",
            icon: "bi-arrow-up-circle",
            questions: [
                {
                    question: "How does var hoisting work?",
                    answer: `<strong>var</strong> declarations are hoisted to the top of their <strong>function scope</strong> — the variable exists from the start of the function but its value is <strong>undefined</strong> until the assignment line executes. This means you can reference a var variable before its declaration without getting a ReferenceError.

<pre><code>console.log(x); // undefined (not ReferenceError)
var x = 5;
console.log(x); // 5

// What the engine actually does:
var x;            // declaration hoisted to top
console.log(x);   // undefined
x = 5;            // assignment stays in place
console.log(x);   // 5

// var is function-scoped, NOT block-scoped
if (true) {
  var y = 10;
}
console.log(y);   // 10 (leaked out of the if block)

// var in a loop
for (var i = 0; i < 3; i++) {}
console.log(i); // 3 (leaked out of the loop)</code></pre>

<strong>var</strong> hoisting was a common source of bugs in early JavaScript. Variables declared inside blocks (if, for, while) are accessible outside those blocks because var is scoped to the nearest <strong>function</strong>, not the nearest block. This is one of the main reasons <strong>let</strong> and <strong>const</strong> were introduced in ES6.`
                },
                {
                    question: "How does function hoisting work?",
                    answer: `<strong>Function declarations</strong> are <strong>fully hoisted</strong> — both the name and the entire function body are available before the declaration line. <strong>Function expressions</strong> follow variable hoisting rules — only the variable name is hoisted, not the function value.

<pre><code>// Function declaration — fully hoisted
greet(); // "Hello" — works before declaration
function greet() { return 'Hello'; }

// Function expression with var — partially hoisted
// sayHi(); // TypeError: sayHi is not a function
var sayHi = function() { return 'Hi'; };

// Function expression with const — not accessible at all
// sayBye(); // ReferenceError: Cannot access before initialization
const sayBye = function() { return 'Bye'; };

// Declaration overrides var in hoisting
var fn = 'string';
function fn() { return 'function'; }
console.log(typeof fn); // "string" (var assignment runs last)

// Multiple function declarations — last one wins
function bar() { return 1; }
function bar() { return 2; }
console.log(bar()); // 2</code></pre>

Function declarations are the only construct in JavaScript that is <strong>completely hoisted</strong> — both declaration and definition. This allows <strong>mutual recursion</strong> (function A calls B, function B calls A) without worrying about declaration order. Function expressions are preferred in modern code for more predictable behavior.`
                },
                {
                    question: "What is the Temporal Dead Zone (TDZ)?",
                    answer: `The <strong>Temporal Dead Zone (TDZ)</strong> is the region between the start of a block and the <strong>let</strong>/<strong>const</strong> declaration where the variable exists in the scope but <strong>cannot be accessed</strong>. Any attempt to read or write the variable in the TDZ throws a <strong>ReferenceError</strong>.

<pre><code>// TDZ starts at block opening
{
  // TDZ for 'x' starts here
  // console.log(x); // ReferenceError: Cannot access 'x' before init
  let x = 10;        // TDZ ends here
  console.log(x);    // 10
}

// var has NO TDZ — just undefined
console.log(y); // undefined (hoisted, no TDZ)
var y = 20;

// TDZ in function default parameters
function test(a = b, b = 1) { }
// test(); // ReferenceError: b is in TDZ when a's default runs

// typeof does NOT save you from TDZ
// typeof undeclaredVar;  // "undefined" — safe for undeclared
// typeof tdzVar;         // ReferenceError — let/const in scope
let tdzVar = 1;

// TDZ even applies in same line
// const a = a; // ReferenceError: a is in TDZ during its init</code></pre>

The TDZ exists because <strong>let</strong> and <strong>const</strong> are hoisted (the engine knows they exist in the scope) but are <strong>not initialized</strong> until the declaration is reached. This design catches bugs early — accessing a variable before its declaration is almost always a mistake. The TDZ is enforced at <strong>runtime</strong>, not compile time.`
                },
                {
                    question: "Are class declarations hoisted?",
                    answer: `Class declarations are <strong>hoisted but not initialized</strong> — they are in the TDZ until the declaration is reached. You cannot use a class before declaring it, unlike function declarations which are fully hoisted with their body.

<pre><code>// const p = new Person('Alice'); // ReferenceError: TDZ

class Person {
  constructor(name) { this.name = name; }
}

const p = new Person('Alice'); // works after declaration

// Class expressions follow the same rules
// const p2 = new Animal(); // ReferenceError (TDZ)
const Animal = class {
  constructor(type) { this.type = type; }
};

// Compare with function declarations
const f = new Foo(); // works! Function declarations are fully hoisted
function Foo() { this.x = 1; }

// Class extends also subject to TDZ
// class Dog extends Animal {} // ReferenceError if Animal not defined yet
class Animal2 {}
class Dog extends Animal2 {} // works</code></pre>

This behavior is intentional — classes often depend on their <strong>extends</strong> clause being evaluated at the right time. If classes were fully hoisted, the extends value might not be available yet. The TDZ ensures that classes are only used after they and their parent classes are fully defined.`
                },
                {
                    question: "What is the hoisting order when var and function declarations coexist?",
                    answer: `Function declarations are hoisted <strong>above</strong> var declarations. If both share a name, the function wins initially during hoisting, but a var assignment at runtime will <strong>overwrite</strong> it. Understanding this order is critical for output prediction questions.

<pre><code>console.log(typeof foo); // "function" — function hoisted above var

var foo = 'string';
function foo() { return 'function'; }

console.log(typeof foo); // "string" — var assignment ran

// What the engine does (hoisting order):
// function foo() { return 'function'; }  // hoisted first
// var foo; // hoisted but IGNORED (foo already exists)
// console.log(typeof foo); // "function"
// foo = 'string'; // assignment overrides at runtime
// console.log(typeof foo); // "string"

// Multiple function declarations — last one wins
function bar() { return 1; }
function bar() { return 2; }
console.log(bar()); // 2

// In non-strict mode, block-scoped function declarations
// have complex hoisting behavior (avoid this pattern)
if (true) {
  function baz() { return 'inside'; }
}
// baz() behavior varies between engines — avoid!</code></pre>

The key insight is that <strong>hoisting moves declarations</strong>, not assignments. The function declaration moves its entire body to the top, while var only moves the declaration (not the assignment). At runtime, the assignment <strong>foo = 'string'</strong> overwrites the hoisted function.`
                },
                {
                    question: "How do function expressions behave with hoisting?",
                    answer: `Function expressions are <strong>not hoisted as functions</strong>. The variable is hoisted according to its declaration type — <strong>var</strong> gives undefined, <strong>let/const</strong> puts it in the TDZ — but the function value is not assigned until the runtime reaches that line.

<pre><code>// var function expression — variable hoisted as undefined
console.log(sayHi);  // undefined
// sayHi();           // TypeError: sayHi is not a function
var sayHi = function() { return 'Hi'; };
sayHi();              // "Hi" — works after assignment

// const function expression — TDZ
// console.log(greet); // ReferenceError
const greet = function() { return 'Hello'; };

// Named function expression
var fn = function myFunc() { return 'named'; };
// myFunc(); // ReferenceError — name only scoped inside itself
fn();        // works

// Arrow functions follow the same rules as expressions
// arrowFn(); // ReferenceError (const in TDZ)
const arrowFn = () => 'arrow';

// Immediately Invoked Function Expression (IIFE)
const result = (function() { return 42; })();
// No hoisting issue — executed immediately</code></pre>

The distinction between function declarations and expressions matters for code organization. <strong>Function declarations</strong> can be called before they appear in code (useful for readability — put main logic first, helper functions later). <strong>Function expressions</strong> enforce top-down order — you must define before use.`
                },
                {
                    question: "How does block scope work with let and const?",
                    answer: `<strong>let</strong> and <strong>const</strong> are <strong>block-scoped</strong> — they only exist within the nearest curly braces <strong>{}</strong>. This includes if blocks, for loops, while blocks, and standalone blocks. <strong>var</strong> ignores block scope entirely and uses function scope.

<pre><code>if (true) {
  var a = 1;    // function-scoped — leaks out
  let b = 2;    // block-scoped — stays inside
  const c = 3;  // block-scoped — stays inside
}
console.log(a); // 1
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// Classic for-loop problem
for (var i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 0); // 3, 3, 3
}
for (let j = 0; j < 3; j++) {
  setTimeout(() => console.log(j), 0); // 0, 1, 2
}
// let creates a NEW binding per iteration

// Standalone block for scoping
{
  const temp = computeSomething();
  // use temp here
}
// temp is not accessible outside the block</code></pre>

The <strong>for-loop with let</strong> creates a fresh variable binding for each iteration — this is why closures inside the loop capture the correct value. With <strong>var</strong>, there is only one variable shared across all iterations, so closures all see the final value. This was one of the most common JavaScript interview questions before let became standard.`
                },
                {
                    question: "How does global scope differ between var and let/const?",
                    answer: `<strong>var</strong> and <strong>function declarations</strong> at the top level create properties on the <strong>global object</strong> (window in browsers). <strong>let</strong> and <strong>const</strong> at the top level exist in a separate <strong>declarative environment record</strong> — they are accessible as variables but do not pollute the global object.

<pre><code>var globalVar = 'hello';
let globalLet = 'world';
const globalConst = '!';

console.log(window.globalVar);   // "hello" — on window
console.log(window.globalLet);   // undefined — NOT on window
console.log(window.globalConst); // undefined — NOT on window

// Both are accessible as variables
console.log(globalVar);   // "hello"
console.log(globalLet);   // "world"

// Function declarations also go on window
function foo() {}
console.log(window.foo);  // function foo

// This matters for third-party script conflicts
var jQuery = 'mine';       // overwrites window.jQuery!
let myLib = 'safe';        // does NOT go on window

// globalThis properties
globalThis.sharedValue = 42; // explicitly setting global property</code></pre>

This is why <strong>let and const are safer</strong> for top-level declarations — they cannot accidentally overwrite global object properties or conflict with third-party libraries. In <strong>ES modules</strong>, even var does not create window properties because modules have their own scope.`
                },
                {
                    question: "What will this code output? (Hoisting quiz)",
                    answer: `Output prediction questions test your understanding of <strong>hoisting</strong>, <strong>TDZ</strong>, <strong>scope</strong>, and <strong>execution order</strong>. Walk through each example step by step, applying hoisting rules before reading the code top to bottom.

<pre><code>// Question 1: var hoisting inside function
var a = 1;
function foo() {
  console.log(a); // undefined — local 'a' is hoisted (shadows global)
  var a = 2;
  console.log(a); // 2
}
foo();

// Question 2: function vs var hoisting
console.log(typeof x); // "function" — function hoisted above var
var x = 1;
function x() {}
console.log(typeof x); // "number" — assignment ran

// Question 3: TDZ with let
let y = 1;
if (true) {
  // console.log(y); // ReferenceError — TDZ (block's own y)
  let y = 2;
  console.log(y);    // 2
}
console.log(y);       // 1 — outer y unaffected

// Question 4: function expression
console.log(typeof f); // "undefined" (var hoisted)
var f = function() {};
console.log(typeof f); // "function"</code></pre>

The key technique is to <strong>mentally rearrange</strong> the code: move function declarations to the top, then var declarations (as undefined), then execute top to bottom. For let/const, identify the TDZ boundaries. Remember that <strong>var inside a block</strong> still hoists to the function scope, potentially shadowing outer variables.`
                },
                {
                    question: "What are best practices for variable declarations and hoisting?",
                    answer: `Use <strong>const</strong> by default, <strong>let</strong> when reassignment is needed, and avoid <strong>var</strong> entirely. Declare variables at the top of their scope for readability. Use function declarations for named functions that benefit from hoisting; use const with arrow functions for everything else.

<pre><code>// const by default
const MAX_RETRIES = 3;
const users = [];
const getUser = (id) => users.find(u => u.id === id);

// let only when reassignment is needed
let count = 0;
for (let i = 0; i < 10; i++) count += i;

// Avoid var — function-scoped, hoisted, goes on window
// var x = 1; // DON'T

// Declare at top of scope for clarity
function process(items) {
  const results = [];   // declared at top
  let total = 0;        // declared at top

  for (const item of items) {
    total += item.value;
    results.push(item.name);
  }
  return { results, total };
}

// Use const for objects and arrays (reference is constant)
const config = { debug: false };
config.debug = true; // OK — mutating content, not reference</code></pre>

<strong>ESLint rules</strong> like <strong>no-var</strong>, <strong>prefer-const</strong>, and <strong>no-use-before-define</strong> enforce these practices automatically. Most modern style guides (Airbnb, Standard, Google) prohibit var and recommend const by default. This eliminates hoisting surprises and makes code more predictable.`
                },
                {
                    question: "How does hoisting work inside try/catch blocks?",
                    answer: `The <strong>catch</strong> parameter is block-scoped to the catch block. Variables declared with <strong>var</strong> inside try/catch are hoisted to the enclosing function scope as usual. <strong>let/const</strong> inside try/catch are block-scoped to their respective block.

<pre><code>// var inside try/catch — hoisted to function scope
function example() {
  try {
    var x = 1;
    throw new Error('test');
  } catch (err) {
    var y = 2;
    console.log(x); // 1 — var hoisted to function scope
    console.log(err.message); // "test"
  }
  console.log(x); // 1 — accessible outside try
  console.log(y); // 2 — accessible outside catch
  // console.log(err); // ReferenceError — catch param is block-scoped
}

// let/const — block-scoped
try {
  let a = 1;
  const b = 2;
} catch (e) {
  let c = 3;
}
// a, b, c, e — all inaccessible here

// Common pattern: declare outside, assign inside
let result;
try {
  result = riskyOperation();
} catch (e) {
  result = defaultValue;
}
console.log(result); // accessible here</code></pre>

The <strong>catch parameter</strong> (e or err) has been block-scoped since ES3 — it was one of the earliest examples of block scoping in JavaScript, long before let and const. In modern JavaScript (ES2019+), you can omit the catch parameter entirely if you do not need it: <strong>catch { }</strong>.`
                },
                {
                    question: "How does hoisting interact with closures?",
                    answer: `When closures capture <strong>hoisted var</strong> variables, they all share the same variable binding — leading to the classic loop closure bug. With <strong>let</strong>, each iteration creates a new binding, so closures capture independent values.

<pre><code>// Classic closure + hoisting bug
function createFunctions() {
  var funcs = [];
  for (var i = 0; i < 3; i++) {
    funcs.push(function() { return i; });
  }
  return funcs;
}
const fns = createFunctions();
console.log(fns[0]()); // 3 — all share same i
console.log(fns[1]()); // 3
console.log(fns[2]()); // 3

// Fix 1: Use let (creates new binding per iteration)
function createFixed() {
  const funcs = [];
  for (let i = 0; i < 3; i++) {
    funcs.push(function() { return i; });
  }
  return funcs;
}
const fixed = createFixed();
console.log(fixed[0]()); // 0
console.log(fixed[1]()); // 1
console.log(fixed[2]()); // 2

// Fix 2: IIFE (pre-ES6 solution)
for (var j = 0; j < 3; j++) {
  (function(captured) {
    funcs.push(function() { return captured; });
  })(j);
}</code></pre>

This is one of the most frequently asked JavaScript interview questions. The root cause is that <strong>var</strong> creates one variable for the entire function, and all closures reference that same variable. By the time the closures execute, the loop has finished and the variable holds the final value. <strong>let</strong> solves this elegantly by creating a fresh binding per iteration.`
                },
                {
                    question: "What is variable shadowing and how does it relate to scope?",
                    answer: `<strong>Variable shadowing</strong> occurs when a variable in an inner scope has the same name as one in an outer scope. The inner variable <strong>shadows</strong> (hides) the outer one within its scope — the outer variable is not affected and is still accessible outside the inner scope.

<pre><code>let x = 'outer';

function example() {
  let x = 'inner'; // shadows outer x
  console.log(x);  // "inner"
}

example();
console.log(x); // "outer" — not affected

// Shadowing in blocks
const name = 'Alice';
{
  const name = 'Bob'; // shadows outer name
  console.log(name);  // "Bob"
}
console.log(name);     // "Alice"

// var cannot shadow let in same function scope
let y = 1;
// { var y = 2; } // SyntaxError: y has already been declared

// But let CAN shadow let in nested blocks
let z = 1;
{
  let z = 2; // different binding, OK
  console.log(z); // 2
}
console.log(z); // 1

// Parameter shadowing
const value = 'global';
function test(value) {
  console.log(value); // parameter value, not global
}</code></pre>

While shadowing is valid JavaScript, it can make code <strong>harder to read</strong>. ESLint's <strong>no-shadow</strong> rule can warn about shadowed variables. Intentional shadowing is acceptable in small scopes (like loop variables), but avoid it in larger functions where it can cause confusion about which variable is being referenced.`
                },
                {
                    question: "How does the scope chain work in JavaScript?",
                    answer: `The <strong>scope chain</strong> is the mechanism JavaScript uses to resolve variable references. When a variable is accessed, the engine looks in the <strong>current scope</strong> first, then each <strong>outer scope</strong> in order, up to the <strong>global scope</strong>. If not found anywhere, it throws a ReferenceError.

<pre><code>const global = 'I am global';

function outer() {
  const outerVar = 'I am outer';
  
  function middle() {
    const middleVar = 'I am middle';
    
    function inner() {
      const innerVar = 'I am inner';
      
      // Scope chain: inner -> middle -> outer -> global
      console.log(innerVar);   // found in inner scope
      console.log(middleVar);  // found in middle scope
      console.log(outerVar);   // found in outer scope
      console.log(global);     // found in global scope
    }
    inner();
  }
  middle();
}
outer();

// Scope chain is determined at DEFINITION time (lexical)
function create() {
  const x = 10;
  return function() { return x; }; // x from create's scope
}
const fn = create();
const x = 20; // different x — does not affect fn
console.log(fn()); // 10 — uses lexical scope chain</code></pre>

The scope chain is <strong>lexical</strong> (static) — it is determined by where functions are written in the source code, not where they are called. This is fundamentally different from <strong>this</strong>, which is determined dynamically at the call site. Closures work because the scope chain preserves references to outer variables even after the outer function has returned.`
                }
            ]
        },
        {
            id: "spread-rest-destructuring",
            title: "Spread, Rest & Destructuring",
            icon: "bi-three-dots",
            questions: [
                {
                    question: "How does the spread operator work with arrays?",
                    answer: `The <strong>spread operator</strong> (<strong>...</strong>) expands an iterable into individual elements. Use it to <strong>copy arrays</strong>, <strong>merge arrays</strong>, <strong>convert iterables</strong> to arrays, and <strong>pass array items as function arguments</strong>. The copy is always shallow.

<pre><code>// Copy array (shallow)
const original = [1, 2, 3];
const copy = [...original];

// Merge arrays
const merged = [...[1, 2], ...[3, 4]]; // [1, 2, 3, 4]

// Add elements at specific positions
const withExtra = [0, ...original, 4]; // [0, 1, 2, 3, 4]

// Convert iterable to array
const chars = [...'hello']; // ['h', 'e', 'l', 'l', 'o']
const unique = [...new Set([1, 1, 2])]; // [1, 2]

// Function arguments
const nums = [3, 1, 2];
Math.max(...nums); // 3

// Convert NodeList to array
const divs = [...document.querySelectorAll('div')];</code></pre>

Spread creates a <strong>shallow copy</strong> — nested objects and arrays are still shared references. For deep copies, use <strong>structuredClone()</strong>. The spread operator works with any <strong>iterable</strong> (arrays, strings, Sets, Maps, generators), not just arrays.`
                },
                {
                    question: "How does the spread operator work with objects?",
                    answer: `Object spread copies <strong>own enumerable properties</strong> into a new object. Later properties override earlier ones with the same key. It creates a <strong>shallow copy</strong> — nested objects are still shared references between the original and the copy.

<pre><code>// Copy object (shallow)
const user = { name: 'Alice', age: 30 };
const copy = { ...user };

// Merge objects (later properties win)
const defaults = { theme: 'light', lang: 'en' };
const prefs = { theme: 'dark' };
const config = { ...defaults, ...prefs };
// { theme: 'dark', lang: 'en' }

// Add or override properties
const updated = { ...user, age: 31, role: 'admin' };
// { name: 'Alice', age: 31, role: 'admin' }

// Shallow copy caveat
const nested = { a: { b: 1 } };
const clone = { ...nested };
clone.a.b = 99;
console.log(nested.a.b); // 99 — shared reference!

// Spread only copies own enumerable properties
// Prototype properties and non-enumerable properties are excluded</code></pre>

Object spread is commonly used for <strong>immutable updates</strong> in state management (React, Redux). The pattern <strong>{ ...state, key: newValue }</strong> creates a new object with one property changed. Remember that <strong>order matters</strong> — properties spread later override earlier ones with the same key.`
                },
                {
                    question: "How do rest parameters work in functions?",
                    answer: `<strong>Rest parameters</strong> (<strong>...args</strong>) collect remaining arguments into a <strong>real array</strong>. They must be the <strong>last parameter</strong> in the function signature. Unlike the legacy <strong>arguments</strong> object, rest parameters are a proper Array with all array methods available.

<pre><code>function sum(...numbers) {
  return numbers.reduce((a, b) => a + b, 0);
}
sum(1, 2, 3); // 6

// With leading parameters
function log(level, ...messages) {
  messages.forEach(m => console.log('[' + level + ']', m));
}
log('INFO', 'started', 'ready');
// [INFO] started
// [INFO] ready

// Rest vs arguments
function oldWay() {
  // arguments is array-like, not a real array
  const args = Array.from(arguments);
  // No arrow function support for arguments
}

function newWay(...args) {
  // args is a real array
  args.map(a => a * 2); // works directly
  args.filter(a => a > 0); // all array methods work
}

// Rest must be last
// function bad(...rest, last) {} // SyntaxError</code></pre>

Rest parameters replaced the <strong>arguments</strong> object in modern JavaScript. Key advantages: rest params are a real Array (no conversion needed), work with arrow functions (arguments does not), can collect a subset of arguments, and clearly signal the function's intent in the signature.`
                },
                {
                    question: "How does array destructuring work?",
                    answer: `<strong>Array destructuring</strong> extracts values by <strong>position</strong> into variables. Use commas to skip elements, rest syntax to collect remaining items, and default values for missing elements. It works with any iterable, not just arrays.

<pre><code>const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// Skip elements with commas
const [first, , third] = [10, 20, 30];
console.log(first, third); // 10 30

// Rest element collects remaining
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

// Default values for missing elements
const [x = 0, y = 0] = [42];
console.log(x, y); // 42, 0

// From function return values
function getRange() { return [1, 10]; }
const [min, max] = getRange();

// From regex match groups
const [, year, month] = '2024-03'.match(/(\d{4})-(\d{2})/);
console.log(year, month); // "2024" "03"

// Works with any iterable
const [firstChar] = 'hello'; // "h"
const [firstItem] = new Set([10, 20]); // 10</code></pre>

Array destructuring is particularly useful for <strong>function return values</strong> (returning multiple values as an array), <strong>regex match results</strong>, and <strong>swapping variables</strong>. The rest element must be the last element in the pattern — you cannot have elements after it.`
                },
                {
                    question: "How does object destructuring work?",
                    answer: `<strong>Object destructuring</strong> extracts properties by <strong>name</strong> into variables. It supports renaming with colons, default values for missing properties, rest syntax for remaining properties, and computed property names.

<pre><code>const user = { name: 'Alice', age: 30, role: 'admin' };

// Basic destructuring
const { name, age } = user;
console.log(name, age); // "Alice" 30

// Rename variables
const { name: userName, role: userRole } = user;
console.log(userName); // "Alice"

// Default values
const { name: n, score = 0 } = user;
console.log(score); // 0 (not in object)

// Rest — collect remaining properties
const { name: nm, ...rest } = user;
console.log(rest); // { age: 30, role: "admin" }

// Computed property names
const key = 'name';
const { [key]: value } = user;
console.log(value); // "Alice"

// Destructuring from existing variables (note the parentheses)
let a, b;
({ a, b } = { a: 1, b: 2 }); // parentheses needed!</code></pre>

Object destructuring is the foundation of <strong>named parameters</strong> in JavaScript. Instead of remembering argument order, functions can accept an options object and destructure it. The <strong>rest syntax</strong> (...rest) is useful for extracting specific properties while forwarding all others — a common pattern in React for component props.`
                },
                {
                    question: "How does nested destructuring work?",
                    answer: `<strong>Nested destructuring</strong> extracts values from deeply nested structures in a single statement. You can combine object and array destructuring at any depth level. Be careful — if an intermediate property is undefined, it will throw a TypeError.

<pre><code>const data = {
  user: {
    name: 'Alice',
    address: { city: 'NYC', zip: '10001' }
  },
  scores: [95, 88, 72]
};

// Nested object destructuring
const { user: { name, address: { city } } } = data;
console.log(name, city); // "Alice" "NYC"

// Nested array
const { scores: [first, ...others] } = data;
console.log(first);  // 95
console.log(others); // [88, 72]

// Array of objects
const people = [{ name: 'Bob' }, { name: 'Eve' }];
const [{ name: name1 }, { name: name2 }] = people;
console.log(name1, name2); // "Bob" "Eve"

// Safe nested destructuring with defaults
const { user: { phone = 'N/A' } = {} } = data;
console.log(phone); // "N/A"

// Very deep nesting (use sparingly)
const { a: { b: { c: { d } } } } = { a: { b: { c: { d: 42 } } } };
console.log(d); // 42</code></pre>

While nested destructuring is powerful, deeply nested patterns become <strong>hard to read</strong>. If you are destructuring more than 2-3 levels deep, consider extracting intermediate variables instead. Also note that <strong>the parent variable is not created</strong> — in <strong>{ user: { name } }</strong>, only name is declared, not user.`
                },
                {
                    question: "How do default values work in destructuring?",
                    answer: `<strong>Default values</strong> are used when the destructured value is <strong>undefined</strong> (not null, not 0, not empty string). They work with both array and object destructuring and can reference previously destructured variables.

<pre><code>// Object defaults
const { x = 10, y = 20, z = 30 } = { x: 1, y: 2 };
console.log(x, y, z); // 1, 2, 30

// Only undefined triggers defaults — NOT null
const { a = 'default' } = { a: null };
console.log(a); // null (NOT "default")

const { b = 'default' } = { b: undefined };
console.log(b); // "default"

// Default with rename
const { name: n = 'Anonymous' } = {};
console.log(n); // "Anonymous"

// Default can reference other destructured values
const { width = 100, height = width } = { width: 50 };
console.log(width, height); // 50, 50

// Default with function call (only called if needed)
const { value = expensiveComputation() } = { value: 42 };
// expensiveComputation() is NOT called — value exists

// Array defaults
const [first = 'none', second = 'none'] = ['hello'];
console.log(first, second); // "hello", "none"</code></pre>

Defaults are <strong>lazily evaluated</strong> — if the value is present, the default expression is never executed. This is important for defaults that involve function calls or complex computations. Note that <strong>null is not undefined</strong> — assigning null to a property will NOT trigger the default value.`
                },
                {
                    question: "How do you rename variables during destructuring?",
                    answer: `Use the syntax <strong>{ original: newName }</strong> to assign a destructured property to a differently named variable. You can combine renaming with default values using <strong>{ original: newName = defaultValue }</strong>. This is essential for properties with names that conflict with existing variables or reserved words.

<pre><code>const response = {
  data: { user_name: 'Alice', is_active: true },
  status_code: 200
};

// Rename to camelCase
const {
  data: { user_name: userName, is_active: isActive },
  status_code: statusCode
} = response;

console.log(userName);   // "Alice"
console.log(isActive);   // true
console.log(statusCode); // 200

// Rename with default
const { color: bg = 'white' } = {};
console.log(bg); // "white"

// Rename from reserved words or special names
const { class: className, for: htmlFor } = element.attributes;

// Multiple properties to same prefix
const { width: w, height: h, depth: d } = dimensions;</code></pre>

Renaming is especially useful when working with <strong>API responses</strong> that use snake_case — you can convert to camelCase during destructuring. The syntax reads as "take property <strong>original</strong> and assign it to variable <strong>newName</strong>." The colon here does not mean type annotation — it means "rename to."`
                },
                {
                    question: "How does destructuring work in function parameters?",
                    answer: `Destructuring function parameters extracts values directly in the signature, making it immediately clear what properties a function expects. This pattern is extremely common for <strong>options objects</strong> and the preferred way to handle functions with many optional parameters.

<pre><code>// Object parameter destructuring
function createUser({ name, age, role = 'user' }) {
  return { name, age, role };
}
createUser({ name: 'Alice', age: 30 });

// With full default for the entire parameter
function connect({ host = 'localhost', port = 3000 } = {}) {
  console.log(host + ':' + port);
}
connect();              // "localhost:3000"
connect({ port: 8080 }); // "localhost:8080"

// Array parameter destructuring
function first([head]) { return head; }
first([1, 2, 3]); // 1

// Nested destructuring in parameters
function getCity({ address: { city } }) { return city; }
getCity({ address: { city: 'NYC' } }); // "NYC"

// Rest in parameters
function logAll({ name, ...rest }) {
  console.log(name);
  console.log(rest); // everything except name
}</code></pre>

The <strong>= {}</strong> default after the destructuring pattern is critical — without it, calling <strong>connect()</strong> with no arguments throws a TypeError because you cannot destructure undefined. This two-level defaulting (default for the whole parameter, plus defaults for individual properties) is the standard pattern.`
                },
                {
                    question: "How do you swap variables using destructuring?",
                    answer: `Array destructuring enables elegant <strong>variable swapping</strong> without a temporary variable. This is cleaner and more readable than the classic three-line swap pattern. It also works for swapping array elements and rotating multiple values.

<pre><code>// Swap two variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// Swap three variables (rotate)
let x = 'a', y = 'b', z = 'c';
[x, y, z] = [z, x, y];
console.log(x, y, z); // "c", "a", "b"

// Swap array elements
const arr = [1, 2, 3, 4];
[arr[0], arr[3]] = [arr[3], arr[0]];
console.log(arr); // [4, 2, 3, 1]

// Without destructuring (old way)
let temp = a;
a = b;
b = temp;

// Swap in sorting algorithms
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++)
    for (let j = 0; j < arr.length - 1 - i; j++)
      if (arr[j] > arr[j + 1])
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
  return arr;
}</code></pre>

The destructuring swap works because the <strong>right side is evaluated first</strong> (creating a temporary array), then the left side assigns the values. This is syntactic sugar — the engine still uses temporary storage internally. It is widely used in sorting algorithms and state management.`
                },
                {
                    question: "What is the difference between spread and rest syntax?",
                    answer: `<strong>Spread</strong> and <strong>rest</strong> use the same <strong>...</strong> syntax but in opposite directions. <strong>Spread</strong> expands elements (unpacking), while <strong>rest</strong> collects elements (packing). The context determines which operation is performed.

<pre><code>// SPREAD — expands/unpacks elements
const arr = [1, 2, 3];
console.log(...arr);        // 1 2 3 (expanded)
const copy = [...arr];      // [1, 2, 3] (spread into new array)
Math.max(...arr);           // 3 (spread as arguments)

const obj = { a: 1 };
const clone = { ...obj };   // { a: 1 } (spread into new object)

// REST — collects/packs elements
function sum(...nums) {     // rest parameter (collects arguments)
  return nums.reduce((a, b) => a + b, 0);
}

const [first, ...remaining] = [1, 2, 3, 4];
// first = 1, remaining = [2, 3, 4] (rest element)

const { name, ...others } = { name: 'A', age: 1, role: 'B' };
// name = 'A', others = { age: 1, role: 'B' } (rest properties)

// Quick rule:
// Left side of = or in parameters → REST (collecting)
// Right side of = or in arguments → SPREAD (expanding)</code></pre>

A simple way to remember: if <strong>...</strong> appears where <strong>values are expected</strong> (right side of assignment, function arguments), it is <strong>spread</strong>. If it appears where <strong>names are expected</strong> (left side of assignment, function parameters), it is <strong>rest</strong>. Rest must always be the last element.`
                },
                {
                    question: "How do you use destructuring with iterators and generators?",
                    answer: `Destructuring works with any <strong>iterable</strong> — not just arrays and objects. This includes <strong>strings</strong>, <strong>Maps</strong>, <strong>Sets</strong>, <strong>generators</strong>, and any object implementing the <strong>Symbol.iterator</strong> protocol.

<pre><code>// String destructuring
const [a, b, c] = 'ABC';
console.log(a, b, c); // "A" "B" "C"

// Map destructuring
const map = new Map([['name', 'Alice'], ['age', 30]]);
for (const [key, value] of map) {
  console.log(key, value);
}
// "name" "Alice"
// "age" 30

// Set destructuring
const [first, second] = new Set([10, 20, 30]);
console.log(first, second); // 10 20

// Generator destructuring
function* fibonacci() {
  let a = 0, b = 1;
  while (true) {
    yield a;
    [a, b] = [b, a + b];
  }
}
const [f1, f2, f3, f4, f5] = fibonacci();
console.log(f1, f2, f3, f4, f5); // 0 1 1 2 3

// Custom iterable
const range = {
  *[Symbol.iterator]() {
    for (let i = 1; i <= 5; i++) yield i;
  }
};
const [x, y, ...rest] = range; // x=1, y=2, rest=[3,4,5]</code></pre>

Destructuring with <strong>generators</strong> only consumes as many values as you request — the generator pauses after yielding the last needed value. This is <strong>lazy evaluation</strong> — useful for extracting a few values from an infinite sequence without computing the whole thing.`
                },
                {
                    question: "How do you clone and merge objects deeply with spread?",
                    answer: `Spread operator creates <strong>shallow copies</strong> only. For deep cloning, use <strong>structuredClone()</strong> (modern) or <strong>JSON.parse(JSON.stringify())</strong> (legacy). For deep merging, you need a recursive utility function since spread only merges at the top level.

<pre><code>// Shallow merge with spread (top-level only)
const defaults = { theme: 'light', fonts: { body: 'Arial', heading: 'Georgia' } };
const custom = { theme: 'dark', fonts: { body: 'Helvetica' } };

const shallow = { ...defaults, ...custom };
// { theme: 'dark', fonts: { body: 'Helvetica' } }
// fonts.heading is LOST — entire fonts object was replaced

// Deep merge utility
function deepMerge(target, source) {
  const result = { ...target };
  for (const key of Object.keys(source)) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      result[key] = source[key];
    }
  }
  return result;
}

const deep = deepMerge(defaults, custom);
// { theme: 'dark', fonts: { body: 'Helvetica', heading: 'Georgia' } }

// Deep clone with structuredClone
const cloned = structuredClone(defaults);
cloned.fonts.body = 'Comic Sans';
console.log(defaults.fonts.body); // "Arial" — independent</code></pre>

<strong>structuredClone()</strong> handles circular references, Date, RegExp, Map, Set, and ArrayBuffer correctly. <strong>JSON.parse(JSON.stringify())</strong> loses functions, undefined values, Dates (become strings), and fails on circular references. For deep merging in production, consider libraries like <strong>lodash.merge</strong>.`
                },
                {
                    question: "How do you use spread with function calls?",
                    answer: `Spread in function calls <strong>expands an array</strong> (or any iterable) into individual arguments. This replaces the old <strong>Function.prototype.apply()</strong> pattern and works with <strong>new</strong> as well — something apply could never do.

<pre><code>// Spread as function arguments
const numbers = [3, 1, 4, 1, 5];
Math.max(...numbers);  // 5
Math.min(...numbers);  // 1

// Replaces apply
// Old: Math.max.apply(null, numbers)
// New: Math.max(...numbers)

// Multiple spreads in one call
const first = [1, 2];
const second = [3, 4];
console.log(...first, ...second); // 1 2 3 4

// With new — spread works, apply does not
const dateArgs = [2024, 0, 15]; // Jan 15, 2024
const date = new Date(...dateArgs);
// new Date.apply(null, dateArgs) — does NOT work

// Spread string into console.log
console.log(...'hello'); // h e l l o

// Pass Map entries as arguments
function showEntry(key, value) {
  console.log(key + ': ' + value);
}
const entries = new Map([['name', 'Alice']]);
for (const entry of entries) {
  showEntry(...entry); // "name: Alice"
}</code></pre>

Spread in function calls is syntactically cleaner than <strong>apply</strong> and has two major advantages: it works with <strong>new</strong> (constructors), and you can <strong>mix spread with regular arguments</strong>: fn(a, ...arr, b). With apply, you could only pass one array.`
                },
                {
                    question: "What are common destructuring patterns in React?",
                    answer: `Destructuring is heavily used in <strong>React</strong> for props, state, hooks, and context. Understanding these patterns is essential for reading and writing React code effectively.

<pre><code>// Props destructuring
function UserCard({ name, age, role = 'user', ...rest }) {
  // rest contains all other props (className, style, etc.)
  return '<div>' + name + '</div>';
}

// useState destructuring
const [count, setCount] = useState(0);
const [isOpen, setIsOpen] = useState(false);

// useReducer
const [state, dispatch] = useReducer(reducer, initialState);

// Custom hook returning object
function useUser(id) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  return { user, loading };
}
const { user, loading } = useUser(1);

// Context destructuring
const { theme, toggleTheme } = useContext(ThemeContext);

// Event object destructuring
function handleChange({ target: { name, value } }) {
  setForm(prev => ({ ...prev, [name]: value }));
}

// Spread props to child components
function Button({ children, ...rest }) {
  return '<button ' + '...rest>' + children + '</button>';
}</code></pre>

The <strong>spread props</strong> pattern (<strong>...rest</strong>) is used to forward all unhandled props to a child element. This is the foundation of <strong>wrapper components</strong> in React — extract the props you need, spread the rest to the underlying DOM element or child component.`
                }
            ]
        },
        {
            id: "type-coercion",
            title: "Type Coercion & Equality",
            icon: "bi-arrow-left-right",
            questions: [
                {
                    question: "What is the difference between == and ===?",
                    answer: `<strong>==</strong> (loose equality) performs <strong>type coercion</strong> before comparing — it converts operands to the same type. <strong>===</strong> (strict equality) compares both value and type with <strong>no coercion</strong>. Always prefer === to avoid unexpected type conversion surprises.

<pre><code>// Loose equality — coerces types
1 == '1'          // true (string converted to number)
true == 1         // true (boolean converted to number)
null == undefined // true (special rule)
'' == false       // true (both convert to 0)

// Strict equality — no coercion
1 === '1'          // false (different types)
true === 1         // false
null === undefined // false
'' === false       // false

// Always use ===
if (value === null) { }
if (typeof x === 'number') { }

// Only safe use of == is null checking
if (value == null) { } // checks for both null AND undefined
// Equivalent to: if (value === null || value === undefined)</code></pre>

The <strong>only acceptable use of ==</strong> in modern JavaScript is <strong>value == null</strong>, which conveniently checks for both null and undefined in one comparison. For everything else, use <strong>===</strong> to avoid the complex and often surprising type coercion rules of loose equality.`
                },
                {
                    question: "How does implicit type coercion work?",
                    answer: `<strong>Implicit coercion</strong> happens automatically when operators or language constructs expect a specific type. The <strong>+</strong> operator prefers strings (concatenation), while <strong>-</strong>, <strong>*</strong>, <strong>/</strong> prefer numbers. Conditional contexts (<strong>if</strong>, <strong>&&</strong>, <strong>||</strong>) coerce to boolean.

<pre><code>// String coercion (+ with a string operand)
'5' + 3       // "53" (number converted to string)
'5' + true    // "5true"
'5' + null    // "5null"

// Number coercion (-, *, /, comparison)
'5' - 3       // 2  (string converted to number)
'6' * '2'     // 12
true + 1      // 2  (true converts to 1)
false + 1     // 1  (false converts to 0)
null + 5      // 5  (null converts to 0)

// Boolean coercion (if, &&, ||, !, ternary)
if ('hello') { } // true (non-empty string is truthy)
if (0) { }       // false
!!'text'         // true (double negation converts to boolean)

// Unary + operator forces number conversion
+'42'    // 42
+true    // 1
+''      // 0</code></pre>

The <strong>+</strong> operator is the most confusing — if <strong>either</strong> operand is a string, it performs string concatenation. All other arithmetic operators (<strong>-</strong>, <strong>*</strong>, <strong>/</strong>, <strong>%</strong>) always convert to numbers. Understanding this asymmetry is key to predicting coercion behavior in interview questions.`
                },
                {
                    question: "How does explicit type conversion work?",
                    answer: `<strong>Explicit conversion</strong> uses built-in functions to intentionally convert types: <strong>String()</strong>, <strong>Number()</strong>, <strong>Boolean()</strong>, <strong>parseInt()</strong>, and <strong>parseFloat()</strong>. These are clearer and more predictable than relying on implicit coercion.

<pre><code>// To String
String(123);       // "123"
String(true);      // "true"
String(null);      // "null"
(123).toString();  // "123"

// To Number
Number('42');      // 42
Number('');        // 0
Number('hello');   // NaN
Number(true);      // 1
Number(null);      // 0
Number(undefined); // NaN
parseInt('10px');  // 10 (parses until non-digit)
parseFloat('3.14em'); // 3.14

// To Boolean
Boolean(0);         // false
Boolean('');        // false
Boolean(null);      // false
Boolean('hello');   // true
Boolean(42);        // true
Boolean([]);        // true (arrays are truthy!)

// parseInt with radix (always specify base)
parseInt('0xFF', 16);  // 255
parseInt('111', 2);    // 7 (binary)</code></pre>

Always pass a <strong>radix</strong> (base) to <strong>parseInt()</strong> — without it, older engines could interpret leading zeros as octal. <strong>Number()</strong> is stricter than parseInt — it rejects partial numbers like '12abc' (returns NaN), while parseInt parses what it can (returns 12).`
                },
                {
                    question: "What are truthy and falsy values?",
                    answer: `There are exactly <strong>8 falsy values</strong> in JavaScript that evaluate to false in a boolean context: <strong>false</strong>, <strong>0</strong>, <strong>-0</strong>, <strong>0n</strong> (BigInt zero), <strong>""</strong> (empty string), <strong>null</strong>, <strong>undefined</strong>, and <strong>NaN</strong>. Everything else is <strong>truthy</strong> — including empty arrays, empty objects, and the string "false".

<pre><code>// All 8 falsy values
if (false) { }
if (0) { }
if (-0) { }
if (0n) { }
if ('') { }
if (null) { }
if (undefined) { }
if (NaN) { }

// Surprisingly truthy values
if ([]) { }           // true!  (empty array)
if ({}) { }           // true!  (empty object)
if ('0') { }          // true!  (non-empty string)
if ('false') { }      // true!  (non-empty string)
if (new Boolean(false)) { } // true! (object wrapper)
if (-1) { }           // true!  (non-zero number)
if (Infinity) { }     // true!

// Use !! to check truthiness
!![]    // true
!!0     // false
!!null  // false</code></pre>

The most common interview trap is <strong>empty arrays and objects being truthy</strong>. To check if an array is empty, use <strong>arr.length === 0</strong>, not <strong>!arr</strong>. Similarly, check objects with <strong>Object.keys(obj).length === 0</strong>. The <strong>document.all</strong> object is a historical oddity — it is falsy despite being an object.`
                },
                {
                    question: "How does Boolean() conversion work?",
                    answer: `<strong>Boolean()</strong> converts any value to <strong>true</strong> or <strong>false</strong>. Only the 8 falsy values convert to false; everything else converts to true. The <strong>!!</strong> (double negation) operator is a shorthand that produces the same result.

<pre><code>// Boolean() vs !! — equivalent
Boolean('')       // false
!!''              // false

// Practical: filtering truthy values
const mixed = [0, 1, '', 'hello', null, true, undefined];
const truthy = mixed.filter(Boolean);
// [1, 'hello', true]

// Conditional contexts use Boolean() implicitly
const name = '';
if (name) {
  // won't execute — Boolean('') is false
}

// Gotcha: Boolean objects are always truthy!
const b = new Boolean(false);
if (b) {
  console.log('This runs!'); // Boolean OBJECT is truthy
}
if (b.valueOf()) {
  // This does NOT run — valueOf() returns the primitive
}

// Nullish vs falsy — important distinction
const port = 0;
const result1 = port || 3000;  // 3000 (0 is falsy)
const result2 = port ?? 3000;  // 0 (0 is not nullish)</code></pre>

<strong>Boolean()</strong> as a callback to <strong>filter()</strong> is an elegant pattern for removing falsy values from arrays. Be aware of the difference between <strong>falsy</strong> (|| operator) and <strong>nullish</strong> (?? operator) — 0, '', and false are falsy but not nullish. Use <strong>??</strong> when 0 or '' are valid values.`
                },
                {
                    question: "How does Number() conversion work with different types?",
                    answer: `<strong>Number()</strong> converts values to numbers following specific rules. Empty strings and null become <strong>0</strong>, undefined becomes <strong>NaN</strong>, booleans become <strong>0/1</strong>, and non-numeric strings become <strong>NaN</strong>. Understanding these rules is essential for predicting coercion behavior.

<pre><code>Number('42')        // 42
Number('3.14')      // 3.14
Number('')          // 0
Number(' ')         // 0 (whitespace only)
Number('hello')     // NaN
Number('12abc')     // NaN (entire string must be numeric)

Number(true)        // 1
Number(false)       // 0
Number(null)        // 0
Number(undefined)   // NaN

// parseInt/parseFloat are more lenient
parseInt('12abc')   // 12 (parses until non-digit)
Number('12abc')     // NaN (rejects entirely)

// Unary + is shorthand for Number()
+'42'    // 42
+true    // 1
+null    // 0
+''      // 0

// Objects use valueOf() then toString()
Number([])          // 0    ([].toString() = '' which is 0)
Number([5])         // 5    ([5].toString() = '5')
Number([1,2])       // NaN  ([1,2].toString() = '1,2')</code></pre>

The key gotcha is the difference between <strong>null (becomes 0)</strong> and <strong>undefined (becomes NaN)</strong>. Arrays are converted via their <strong>toString()</strong> method first: an empty array becomes an empty string (which becomes 0), a single-element array becomes that element's string, and multi-element arrays become NaN.`
                },
                {
                    question: "How does String() conversion work?",
                    answer: `<strong>String()</strong> converts any value to its string representation. It is safer than <strong>.toString()</strong> because it works on <strong>null</strong> and <strong>undefined</strong> without throwing. Template literals also perform string conversion implicitly.

<pre><code>String(123)       // "123"
String(true)      // "true"
String(false)     // "false"
String(null)      // "null"
String(undefined) // "undefined"
String(NaN)       // "NaN"
String([1,2,3])   // "1,2,3"
String({})        // "[object Object]"

// toString() throws on null/undefined
// null.toString()  // TypeError!
String(null)       // "null" — safe

// Template literals also convert
const n = 42;
const str = 'value: ' + n;  // "value: 42"

// Concatenation converts too
'' + 42           // "42"
'' + null         // "null"
'' + undefined    // "undefined"

// Objects: toString() and valueOf()
const obj = {
  toString() { return 'custom'; }
};
String(obj); // "custom"</code></pre>

Objects are converted to strings using the <strong>Symbol.toPrimitive</strong> method if defined, then <strong>toString()</strong>, then <strong>valueOf()</strong>. The default <strong>toString()</strong> returns <strong>"[object Object]"</strong>. You can customize this by implementing toString() on your objects or classes.`
                },
                {
                    question: "What are the comparison rules in JavaScript?",
                    answer: `Comparison operators (<strong>&lt;</strong>, <strong>&gt;</strong>, <strong>&lt;=</strong>, <strong>&gt;=</strong>) perform type coercion. <strong>String comparison</strong> is lexicographic (character by character using Unicode code points). If either operand is a number, strings are converted to numbers. <strong>null</strong> and <strong>undefined</strong> have special rules.

<pre><code>// Number comparison
5 > 3          // true
5 > '3'        // true (string converted to number)

// String comparison (lexicographic by Unicode code point)
'b' > 'a'      // true
'banana' > 'apple' // true
'10' > '9'     // false! ('1' < '9' in char codes)

// Mixed types — numeric conversion
null > 0       // false (null converts to 0, but special rule)
null == 0      // false (null only == undefined)
null >= 0      // true  (null converts to 0)

// NaN comparisons — ALWAYS false
NaN > 0        // false
NaN < 0        // false
NaN == NaN     // false
NaN >= NaN     // false

// Object comparison — uses valueOf/toString
[1] > [0]      // true (converts to "1" and "0", then to 1 and 0)

// undefined comparisons
undefined > 0  // false (NaN > 0)
undefined < 0  // false (NaN < 0)
undefined == 0 // false</code></pre>

The <strong>null comparison paradox</strong> is a classic interview question: <strong>null == 0</strong> is false (null only equals undefined), but <strong>null >= 0</strong> is true (null converts to 0 for relational comparison). This inconsistency exists because == and >= use different coercion algorithms.`
                },
                {
                    question: "Why does [] == false evaluate to true?",
                    answer: `This is one of JavaScript's most confusing coercions. <strong>[]</strong> is truthy by itself, but <strong>[] == false</strong> evaluates to <strong>true</strong> because the abstract equality algorithm converts both sides to numbers: <strong>[]</strong> becomes <strong>""</strong> becomes <strong>0</strong>, and <strong>false</strong> becomes <strong>0</strong>.

<pre><code>// Step-by-step coercion of [] == false
// 1. false converts to 0 (boolean to number)
// 2. [] == 0
// 3. [].toString() gives "" (object to primitive)
// 4. "" == 0
// 5. Number("") gives 0
// 6. 0 == 0 is true!

[] == false   // true
[] == true    // false ([] becomes 0, true becomes 1, 0 != 1)

// But [] is truthy!
if ([]) { console.log('truthy!'); } // runs!

// More confusing cases
[] == ![]           // true!  (![] = false, then [] == false)
'' == false         // true  ('' becomes 0, false becomes 0)
' \t\n' == 0        // true  (whitespace string becomes 0)

// Solution: always use ===
[] === false  // false — clear and predictable
'' === false  // false
0 === false   // false</code></pre>

The <strong>== algorithm</strong> follows these steps: if types differ, convert booleans to numbers first, then convert objects to primitives (using toString/valueOf), then convert strings to numbers. This multi-step process creates unintuitive results. Using <strong>===</strong> eliminates all of this complexity.`
                },
                {
                    question: "What is NaN and how does it behave in comparisons?",
                    answer: `<strong>NaN</strong> ("Not-a-Number") is the only value in JavaScript that is <strong>not equal to itself</strong>. It represents an invalid numeric result. Use <strong>Number.isNaN()</strong> for reliable detection — the global <strong>isNaN()</strong> function coerces its argument first, giving misleading results.

<pre><code>// NaN is NEVER equal to anything, including itself
NaN === NaN    // false
NaN == NaN     // false
NaN !== NaN    // true — the ONLY value where x !== x is true

// Reliable check: Number.isNaN()
Number.isNaN(NaN);       // true
Number.isNaN('hello');   // false (correct — 'hello' is not NaN)

// Unreliable: global isNaN() (coerces first)
isNaN('hello');          // true (coerces to Number('hello') = NaN)
isNaN(undefined);        // true (buggy — undefined is not NaN)

// Operations that produce NaN
0 / 0           // NaN
parseInt('abc')  // NaN
Math.sqrt(-1)   // NaN
undefined + 1   // NaN
Number('xyz')   // NaN

// NaN propagates through all arithmetic
NaN + 5         // NaN
NaN * 10        // NaN

// NaN in comparisons — always false
NaN > 0     // false
NaN < 0     // false
NaN >= NaN  // false</code></pre>

You can also detect NaN using the self-inequality trick: <strong>x !== x</strong> is true only when x is NaN. The <strong>Object.is()</strong> method correctly identifies NaN: <strong>Object.is(NaN, NaN)</strong> returns true. It also distinguishes +0 and -0, unlike ===.`
                },
                {
                    question: "How does Object.is() differ from === ?",
                    answer: `<strong>Object.is()</strong> is the most precise equality check in JavaScript. It behaves like <strong>===</strong> except for two cases: <strong>NaN === NaN</strong> is false but <strong>Object.is(NaN, NaN)</strong> is true, and <strong>+0 === -0</strong> is true but <strong>Object.is(+0, -0)</strong> is false.

<pre><code>// Object.is() vs === — same in most cases
Object.is(1, 1);           // true
Object.is('hello', 'hello'); // true
Object.is(null, null);     // true
Object.is(undefined, undefined); // true

// Difference 1: NaN
NaN === NaN;               // false
Object.is(NaN, NaN);       // true  — correct!

// Difference 2: +0 vs -0
+0 === -0;                 // true
Object.is(+0, -0);         // false — distinguishes them!

// When does -0 matter?
-0 === 0;                  // true (=== treats them as equal)
1 / -0;                    // -Infinity
1 / +0;                    // Infinity
// Math operations can produce -0
Math.round(-0.1);          // -0
-1 * 0;                    // -0

// Object.is() is used internally by:
// - Array.prototype.includes() for NaN detection
// - Map and Set for key comparison
[NaN].includes(NaN);       // true (uses Object.is internally)
[NaN].indexOf(NaN);        // -1 (uses === internally)</code></pre>

<strong>Object.is()</strong> implements the <strong>SameValue</strong> algorithm from the spec. Use it when you need to reliably compare values that might be NaN or distinguish between +0 and -0. For everyday comparisons, <strong>===</strong> is sufficient and more readable.`
                },
                {
                    question: "How does the + operator handle type coercion?",
                    answer: `The <strong>+</strong> operator is JavaScript's most overloaded operator — it performs <strong>addition</strong> when both operands are numbers, and <strong>concatenation</strong> when either operand is a string. If operands are neither, they are converted using <strong>ToPrimitive</strong>.

<pre><code>// Number + Number = addition
5 + 3       // 8

// String + anything = concatenation
'5' + 3     // "53"
3 + '5'     // "35"
'a' + true  // "atrue"

// The tricky cases
1 + 2 + '3'   // "33" (left-to-right: 1+2=3, then 3+'3'="33")
'1' + 2 + 3   // "123" (left-to-right: '1'+2="12", then "12"+3="123")

// Objects use ToPrimitive
[] + []      // "" (both become "" via toString)
[] + {}      // "[object Object]"
{} + []      // 0 (in console, {} is parsed as empty block)

// Unary + converts to number
+'5'         // 5
+true        // 1
+[]          // 0
+{}          // NaN

// Date objects prefer toString for +
const d = new Date();
d + 1;   // "Mon Jan 15 2024 10:30:00 GMT+00001" (string concat)
+d;      // 1705312200000 (milliseconds — unary forces number)</code></pre>

The <strong>ToPrimitive</strong> algorithm first calls <strong>Symbol.toPrimitive</strong> if defined, then <strong>valueOf()</strong> for numeric hint, or <strong>toString()</strong> for string hint. Arrays call <strong>toString()</strong> which joins elements with commas. Understanding ToPrimitive is key to predicting <strong>[] + {}</strong> and similar trick questions.`
                },
                {
                    question: "How do logical operators handle coercion?",
                    answer: `Logical operators <strong>&&</strong>, <strong>||</strong>, and <strong>??</strong> do not necessarily return booleans — they return one of their <strong>operand values</strong>. <strong>||</strong> returns the first truthy value, <strong>&&</strong> returns the first falsy value, and <strong>??</strong> returns the first non-nullish value.

<pre><code>// || returns first TRUTHY value (or last value)
0 || 'default'       // "default" (0 is falsy)
'' || 'fallback'     // "fallback"
'hello' || 'world'   // "hello" (first is truthy)
null || undefined || 'last' // "last"

// && returns first FALSY value (or last value)
1 && 'hello'         // "hello" (1 is truthy, returns last)
0 && 'hello'         // 0 (0 is falsy, short-circuits)
'a' && 'b' && 'c'   // "c" (all truthy, returns last)

// ?? returns first NON-NULLISH value
0 ?? 'default'       // 0 (0 is not null/undefined)
'' ?? 'default'      // "" (empty string is not nullish)
null ?? 'default'    // "default"
undefined ?? 42      // 42

// Practical differences: || vs ??
const port = 0;
port || 3000;   // 3000 (0 is falsy — WRONG if 0 is valid)
port ?? 3000;   // 0 (0 is not nullish — CORRECT)

// Short-circuit evaluation
false && expensiveCall(); // expensiveCall never runs
true || expensiveCall();  // expensiveCall never runs</code></pre>

The <strong>nullish coalescing operator ??</strong> (ES2020) is specifically designed for default values where <strong>0</strong>, <strong>""</strong>, and <strong>false</strong> are valid inputs. It only falls through on <strong>null</strong> or <strong>undefined</strong>. Use <strong>||</strong> when any falsy value should trigger the default, <strong>??</strong> when only null/undefined should.`
                },
                {
                    question: "How does Symbol.toPrimitive work?",
                    answer: `<strong>Symbol.toPrimitive</strong> is a method that controls how an object is converted to a primitive value. It receives a <strong>hint</strong> ("number", "string", or "default") indicating the preferred type for the conversion context.

<pre><code>const money = {
  amount: 100,
  currency: 'USD',
  
  [Symbol.toPrimitive](hint) {
    if (hint === 'number') return this.amount;
    if (hint === 'string') return this.amount + ' ' + this.currency;
    return this.amount; // default hint
  }
};

// Number context
+money;           // 100 (hint: "number")
money * 2;        // 200 (hint: "number")

// String context  
String(money);    // "100 USD" (hint: "string")

// Default context (== and +)
money + 50;       // 150 (hint: "default")
money == 100;     // true (hint: "default")

// Without Symbol.toPrimitive, the engine uses:
// For number hint: valueOf() then toString()
// For string hint: toString() then valueOf()
const obj = {
  valueOf() { return 42; },
  toString() { return 'forty-two'; }
};
+obj;          // 42 (valueOf called for number hint)
String(obj);   // "forty-two" (toString called for string hint)</code></pre>

<strong>Symbol.toPrimitive</strong> gives complete control over type coercion for your objects. It is used by <strong>Date</strong> objects internally — that is why <strong>+new Date()</strong> returns milliseconds (number hint) while <strong>String(new Date())</strong> returns a readable date string. If you implement this method, valueOf() and toString() are ignored for coercion.`
                },
                {
                    question: "How does optional chaining interact with coercion?",
                    answer: `<strong>Optional chaining</strong> (<strong>?.</strong>) short-circuits to <strong>undefined</strong> when it encounters null or undefined — not false, 0, or empty string. This undefined value then participates in any subsequent coercion. Combine with <strong>??</strong> for safe defaults.

<pre><code>const user = { profile: { name: 'Alice' } };

// Optional chaining returns undefined for missing paths
user.address?.city;          // undefined (no address property)
user.profile?.name;          // "Alice"
user.getAddress?.();         // undefined (method doesn't exist)

// Coercion of undefined result
user.address?.city + '';     // "undefined" (string concat)
+user.address?.city;         // NaN (Number(undefined) = NaN)

// Safe pattern: optional chaining + nullish coalescing
const city = user.address?.city ?? 'Unknown';  // "Unknown"
const age = user.profile?.age ?? 0;            // 0

// Works with arrays
const arr = null;
arr?.[0];     // undefined (not TypeError)
arr?.length;  // undefined

// Nested optional chaining
const value = obj?.a?.b?.c ?? 'default';

// Short-circuiting — no further evaluation
null?.prop.subprop; // undefined (does not try to access .subprop)

// Cannot use for assignment
// user?.name = 'Bob';  // SyntaxError</code></pre>

The combination of <strong>?.</strong> and <strong>??</strong> is the modern alternative to lengthy null-checking chains. Before ES2020, you would write <strong>user && user.profile && user.profile.name || 'default'</strong>. Now it is simply <strong>user?.profile?.name ?? 'default'</strong>. Optional chaining checks for null/undefined only — it does not check for 0, '', or false.`
                },
                {
                    question: "What are common coercion interview trick questions?",
                    answer: `These trick questions test deep understanding of JavaScript's type coercion rules. Walk through each one step by step using the coercion algorithm — first convert booleans, then objects to primitives, then compare or operate.

<pre><code>// Classic trick questions
true + true + true       // 3 (1 + 1 + 1)
true - true              // 0 (1 - 1)
[] + []                  // "" (both toString to "")
[] + {}                  // "[object Object]"
{} + []                  // 0 (in console: {} is empty block, +[] = 0)
!!"false"                // true (non-empty string is truthy)
!!""                     // false
!!0                      // false
!!null                   // false
!!undefined              // false
!!NaN                    // false

// More tricky coercions
'2' + 1                 // "21"
'2' - 1                 // 1
null + 1                // 1 (null becomes 0)
undefined + 1           // NaN
'5' + - + - + - + 3     // "5-3" (unary operators: -(-(-3)) = -3)

// Type of results
typeof NaN               // "number" (NaN is technically a number)
typeof null              // "object" (historical bug)
typeof undefined         // "undefined"
typeof []                // "object" (arrays are objects)

// Equality tricks
false == '0'             // true (false=0, '0'=0)
false == ''              // true (false=0, ''=0)
'' == 0                  // true
'0' == ''                // false (both strings, not equal)</code></pre>

The best strategy for these questions is to <strong>memorize the 8 falsy values</strong>, remember that <strong>+</strong> prefers strings while other operators prefer numbers, and walk through the conversion steps methodically. In real code, <strong>avoid relying on coercion</strong> — use explicit conversion and strict equality.`
                }
            ]
        },
        {
            id: "iterators-generators",
            title: "Iterators & Generators",
            icon: "bi-arrow-repeat",
            questions: [
                {
                    q: "What is an iterator in JavaScript?",
                    a: `An <strong>iterator</strong> is any object that follows the <strong>iterator protocol</strong> — it has a <code>next()</code> method that returns an object with two properties: <code>value</code> (the current value) and <code>done</code> (a boolean that is <code>true</code> when iteration is finished).

Iterators allow you to go through a sequence of values one at a time. Arrays, strings, Maps, Sets, and many other built-in objects already have built-in iterators.

You can create a custom iterator by returning a <code>next()</code> function from an object. This is useful when you want to generate values one by one instead of creating a full array upfront.

Here is a simple custom iterator example:
<pre><code>function makeCounter(start, end) {
  let current = start;
  return {
    next() {
      if (current <= end) {
        return { value: current++, done: false };
      }
      return { value: undefined, done: true };
    }
  };
}

const counter = makeCounter(1, 3);
console.log(counter.next()); // { value: 1, done: false }
console.log(counter.next()); // { value: 2, done: false }
console.log(counter.next()); // { value: 3, done: false }
console.log(counter.next()); // { value: undefined, done: true }</code></pre>

Once <code>done</code> is <code>true</code>, the iterator is finished. Calling <code>next()</code> again will keep returning <code>{ value: undefined, done: true }</code>.

Iterators are the foundation that powers <code>for...of</code> loops, spread syntax, and destructuring behind the scenes.`
                },
                {
                    q: "What is the iterable protocol?",
                    a: `An object is <strong>iterable</strong> if it has a method with the key <code>Symbol.iterator</code> that returns an iterator. This is called the <strong>iterable protocol</strong>.

Built-in iterables in JavaScript include <strong>Arrays</strong>, <strong>Strings</strong>, <strong>Maps</strong>, <strong>Sets</strong>, and <strong>TypedArrays</strong>. Plain objects (<code>{}</code>) are NOT iterable by default.

When you use <code>for...of</code>, JavaScript calls <code>Symbol.iterator</code> automatically and gets the iterator from it.

Here is how the iterable protocol works:
<pre><code>const arr = [10, 20, 30];
const iter = arr[Symbol.iterator](); // get iterator

console.log(iter.next()); // { value: 10, done: false }
console.log(iter.next()); // { value: 20, done: false }
console.log(iter.next()); // { value: 30, done: false }
console.log(iter.next()); // { value: undefined, done: true }

// A plain object is NOT iterable
const obj = { a: 1 };
// for (const x of obj) {} // TypeError: obj is not iterable</code></pre>

You can make any object iterable by adding a <code>[Symbol.iterator]</code> method to it that returns an iterator object.

This protocol is what allows <code>for...of</code>, spread (<code>...</code>), and destructuring (<code>const [a, b] = iterable</code>) to work with custom objects.`
                },
                {
                    q: "What is a generator function?",
                    a: `A <strong>generator function</strong> is declared with <code>function*</code> and can <strong>pause and resume</strong> its execution using the <code>yield</code> keyword. It returns a <strong>generator object</strong> that is both an iterator and an iterable.

Each time you call <code>next()</code> on a generator, it runs until the next <code>yield</code>, returns the yielded value, and pauses. The function's local variables are kept alive between pauses.

Generators are great for producing sequences of values lazily — only computing the next value when asked, instead of creating a full array upfront.

Here is a basic generator function:
<pre><code>function* counter() {
  console.log('Start');
  yield 1;
  console.log('After 1');
  yield 2;
  console.log('After 2');
  yield 3;
}

const gen = counter();
console.log(gen.next()); // "Start"  { value: 1, done: false }
console.log(gen.next()); // "After 1"  { value: 2, done: false }
console.log(gen.next()); // "After 2"  { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }</code></pre>

The generator function body does NOT run when you call <code>counter()</code>. It only runs when you call <code>next()</code> for the first time.

Generators are useful for implementing <strong>infinite sequences</strong>, custom iterables, and async-like control flow with libraries like Redux-Saga.`
                },
                {
                    q: "How does the yield keyword work?",
                    a: `<code>yield</code> pauses the generator function and sends a value back to the caller. When <code>next()</code> is called again, execution resumes right after the <code>yield</code> statement.

You can also pass a value <strong>into</strong> the generator via <code>next(value)</code>. That value becomes the result of the <code>yield</code> expression inside the generator.

This two-way communication makes generators very powerful for writing state machines and coroutines.

Here is how yield sends and receives values:
<pre><code>function* dialog() {
  const name = yield 'What is your name?';
  const city = yield \&#96;Hello \${name}! Where are you from?\&#96;;
  return \&#96;\${name} is from \${city}.\&#96;;
}

const gen = dialog();
console.log(gen.next().value);        // "What is your name?"
console.log(gen.next('Alice').value); // "Hello Alice! Where are you from?"
console.log(gen.next('Paris').value); // "Alice is from Paris."</code></pre>

The first <code>next()</code> call starts the generator and runs until the first <code>yield</code>. Values passed to the <strong>first</strong> <code>next()</code> call are always ignored since there is no <code>yield</code> to receive it yet.

<code>yield*</code> (with asterisk) delegates to another iterable or generator, allowing you to compose generators together.`
                },
                {
                    q: "What is yield* and how does it work?",
                    a: `<code>yield*</code> delegates execution to another iterable or generator. It yields each value from the inner iterable one by one, as if those <code>yield</code> statements were written in the outer generator.

This is useful for composing generators together or for iterating over nested structures in a flat way.

The <code>yield*</code> expression evaluates to the <strong>return value</strong> of the delegated generator (the value produced by its <code>return</code> statement).

Here is how yield* works:
<pre><code>function* inner() {
  yield 'a';
  yield 'b';
  return 'done-inner';
}

function* outer() {
  yield 1;
  const result = yield* inner(); // delegates to inner
  console.log(result);            // "done-inner"
  yield 2;
}

for (const val of outer()) {
  console.log(val); // 1, 'a', 'b', 2
}</code></pre>

Notice that the <code>return</code> value of <code>inner()</code> ("done-inner") is not yielded to the <code>for...of</code> loop — it becomes the value of the <code>yield*</code> expression inside <code>outer()</code>.

<code>yield*</code> also works with any iterable like arrays: <code>yield* [1, 2, 3]</code> yields 1, then 2, then 3.`
                },
                {
                    q: "How do you create an infinite sequence with a generator?",
                    a: `Generators are perfect for <strong>infinite sequences</strong> because they produce values <strong>lazily</strong> — one at a time, only when asked. A regular function cannot return an infinite sequence without running forever or using all memory.

Just write a <code>while(true)</code> loop with <code>yield</code> inside the generator. The infinite loop doesn't run continuously — it pauses at each <code>yield</code> and waits for the next <code>next()</code> call.

This pattern is used for things like ID generators, infinite Fibonacci sequences, and paginated data fetching.

Here is an infinite number generator:
<pre><code>function* infiniteNumbers(start = 0) {
  let n = start;
  while (true) {
    yield n++;
  }
}

const nums = infiniteNumbers(1);
console.log(nums.next().value); // 1
console.log(nums.next().value); // 2
console.log(nums.next().value); // 3

// Use take() helper to get first N values
function take(gen, n) {
  const result = [];
  for (const val of gen) {
    result.push(val);
    if (result.length >= n) break;
  }
  return result;
}
console.log(take(infiniteNumbers(5), 4)); // [5, 6, 7, 8]</code></pre>

Always use <code>break</code> or a limit when iterating infinite generators with <code>for...of</code> to avoid an infinite loop.

Infinite generators are memory-efficient because they never store the full sequence — they only keep the current value and state.`
                },
                {
                    q: "What is the difference between for...of and for...in?",
                    a: `<code>for...of</code> iterates over the <strong>values</strong> of an iterable object (arrays, strings, Maps, Sets, generators). <code>for...in</code> iterates over the <strong>enumerable property keys</strong> of an object.

Use <code>for...of</code> for arrays and other iterables. Use <code>for...in</code> only for plain objects when you need to loop through keys — but be careful, it also picks up inherited properties.

For arrays, <code>for...in</code> is almost always the wrong choice because it iterates over indices as strings and can pick up prototype methods if they are enumerable.

Here is the difference between the two:
<pre><code>const arr = ['a', 'b', 'c'];

for (const val of arr) {
  console.log(val); // 'a', 'b', 'c'  (values)
}

for (const key in arr) {
  console.log(key); // '0', '1', '2'  (string keys!)
}

const obj = { x: 1, y: 2 };
for (const key in obj) {
  console.log(key, obj[key]); // 'x' 1, 'y' 2
}

// for...of on a string iterates characters
for (const ch of 'hi') {
  console.log(ch); // 'h', 'i'
}</code></pre>

When using <code>for...in</code> on objects, add <code>if (obj.hasOwnProperty(key))</code> to skip inherited properties.

<code>for...of</code> cannot be used on plain objects by default because they do not implement <code>Symbol.iterator</code>.`
                },
                {
                    q: "How can you make a plain object iterable?",
                    a: `You make a plain object iterable by adding a <code>[Symbol.iterator]</code> method that returns an iterator. The iterator must have a <code>next()</code> method returning <code>{ value, done }</code>.

Once you add this method, the object works with <code>for...of</code>, spread, and destructuring just like built-in iterables.

A common approach is to use a generator function as the <code>[Symbol.iterator]</code> method, which makes the code much shorter.

Here is how to make an object iterable:
<pre><code>const range = {
  from: 1,
  to: 5,
  [Symbol.iterator]() {
    let current = this.from;
    const last = this.to;
    return {
      next() {
        if (current <= last) {
          return { value: current++, done: false };
        }
        return { value: undefined, done: true };
      }
    };
  }
};

for (const num of range) {
  console.log(num); // 1, 2, 3, 4, 5
}

console.log([...range]); // [1, 2, 3, 4, 5]</code></pre>

The <code>[Symbol.iterator]</code> method is called once at the start of iteration, and the returned iterator object is used throughout.

You can also write it as a generator: <code>[Symbol.iterator]: function*() { for (let i = this.from; i <= this.to; i++) yield i; }</code>.`
                },
                {
                    q: "What is a generator used for in real-world code?",
                    a: `Generators are used in several real-world scenarios: <strong>lazy evaluation</strong> (produce values only when needed), <strong>infinite sequences</strong> (IDs, counters), <strong>async control flow</strong> (libraries like co and Redux-Saga), and <strong>custom iterables</strong> for complex data structures.

Redux-Saga is probably the most well-known real-world use — it uses generators to write async side effects in a synchronous-looking style.

You can also use generators to implement <strong>pipelines</strong> where data flows through a series of transformations without building intermediate arrays.

Here are some real-world use cases:
<pre><code>// 1. Unique ID generator
function* idGenerator() {
  let id = 1;
  while (true) yield id++;
}
const nextId = idGenerator();
console.log(nextId.next().value); // 1
console.log(nextId.next().value); // 2

// 2. Pagination (lazy loading)
function* paginate(data, size) {
  for (let i = 0; i < data.length; i += size) {
    yield data.slice(i, i + size);
  }
}
const pages = paginate([1,2,3,4,5,6,7], 3);
console.log(pages.next().value); // [1, 2, 3]
console.log(pages.next().value); // [4, 5, 6]

// 3. Flatten nested arrays
function* flatten(arr) {
  for (const item of arr) {
    if (Array.isArray(item)) yield* flatten(item);
    else yield item;
  }
}
console.log([...flatten([1,[2,[3]],4])]); // [1,2,3,4]</code></pre>

Generators shine when you want to decouple <strong>value production</strong> from <strong>value consumption</strong>.

For most everyday code, <code>async/await</code> has replaced generator-based async patterns, but generators are still essential for lazy sequences and custom iterables.`
                },
                {
                    q: "How do generators relate to async/await?",
                    a: `<code>async/await</code> was actually <strong>inspired by generators</strong>. Before async/await existed, developers used generators with a helper library (like <code>co</code>) to write async code in a synchronous style.

When an <code>async</code> function hits <code>await</code>, it pauses just like <code>yield</code> in a generator. The JavaScript engine internally uses a similar mechanism to suspend and resume execution.

The key difference is that <code>await</code> only works with Promises and is built directly into the language, while generators are general-purpose and need a runner function to handle Promises.

Here is the similarity between them:
<pre><code>// Using generators for async (old way, needs a runner)
function* fetchUser() {
  const user = yield fetch('/api/user').then(r => r.json());
  console.log(user);
}

// Using async/await (modern, built-in)
async function fetchUser() {
  const user = await fetch('/api/user').then(r => r.json());
  console.log(user);
}

// Both pause execution and resume when the value is ready
// async/await is syntactic sugar for generator + promise runner</code></pre>

Think of <code>async function</code> as a generator that automatically handles Promises — the engine creates a hidden promise runner for you.

Understanding generators helps you understand <strong>how async/await works internally</strong>, which is useful for advanced debugging and understanding JavaScript's concurrency model.`
                },
                {
                    q: "What is the return() method on a generator?",
                    a: `Calling <code>gen.return(value)</code> on a generator <strong>terminates</strong> it immediately and returns <code>{ value: value, done: true }</code>. Once terminated, the generator cannot produce more values.

This is useful for <strong>early cleanup</strong> — for example, stopping an infinite generator or releasing resources when you no longer need the generator.

If the generator has a <code>try...finally</code> block, the <code>finally</code> code runs before the generator is terminated when you call <code>return()</code>.

Here is how return() works:
<pre><code>function* counter() {
  try {
    let i = 0;
    while (true) yield i++;
  } finally {
    console.log('Cleanup!');
  }
}

const gen = counter();
console.log(gen.next().value);    // 0
console.log(gen.next().value);    // 1
console.log(gen.return(99));      // "Cleanup!"  { value: 99, done: true }
console.log(gen.next());          // { value: undefined, done: true }</code></pre>

After <code>return()</code> is called, all subsequent <code>next()</code> calls return <code>{ value: undefined, done: true }</code>.

The <code>for...of</code> loop automatically calls <code>return()</code> on the iterator when you <code>break</code> out of the loop early.`
                },
                {
                    q: "What is the throw() method on a generator?",
                    a: `Calling <code>gen.throw(error)</code> injects an error into the generator at the point where it is paused. If the generator has a <code>try...catch</code> block around the <code>yield</code>, the error is caught inside the generator.

If there is no <code>try...catch</code>, the error propagates out to the caller. Either way, the generator is <strong>terminated</strong> after an uncaught error.

This allows the external code to signal errors to the generator, which is useful in async patterns.

Here is how throw() works:
<pre><code>function* process() {
  try {
    const value = yield 'ready';
    yield 'processed: ' + value;
  } catch (err) {
    yield 'caught: ' + err.message;
  }
}

const gen = process();
console.log(gen.next().value);          // "ready"
console.log(gen.throw(new Error('oops')).value); // "caught: oops"
console.log(gen.next().value);          // undefined (done)</code></pre>

If you call <code>throw()</code> before the first <code>next()</code>, the error is thrown at the very beginning of the generator body.

The <code>throw()</code> method is mainly used by async runners to forward Promise rejections into the generator as thrown errors.`
                },
                {
                    q: "How does for...of work with generators?",
                    a: `<code>for...of</code> works with generators because generators are <strong>both iterators and iterables</strong>. When you call a generator function, the returned generator object has a <code>[Symbol.iterator]</code> method that returns itself.

The <code>for...of</code> loop calls <code>next()</code> automatically until <code>done</code> is <code>true</code>. It only uses the <code>value</code> property — it never uses the final return value (when <code>done: true</code>).

You can also use <strong>spread</strong>, <strong>destructuring</strong>, and <code>Array.from()</code> with generators because they all use the iterable protocol internally.

Here is how for...of works with generators:
<pre><code>function* fruits() {
  yield 'apple';
  yield 'banana';
  yield 'cherry';
  return 'done'; // NOT included in for...of
}

for (const fruit of fruits()) {
  console.log(fruit); // 'apple', 'banana', 'cherry'
  // Note: 'done' is NOT logged
}

// Spread also works
const arr = [...fruits()]; // ['apple', 'banana', 'cherry']

// Destructuring works too
const [first, second] = fruits();
console.log(first, second); // 'apple' 'banana'</code></pre>

The final <code>return</code> value of a generator is <strong>ignored</strong> by <code>for...of</code> and spread — only yielded values are collected.

When <code>break</code> is used inside a <code>for...of</code>, JavaScript calls <code>gen.return()</code> automatically to cleanly terminate the generator.`
                },
                {
                    q: "What is a lazy evaluation and how do generators enable it?",
                    a: `<strong>Lazy evaluation</strong> means computing values <strong>only when they are actually needed</strong>, not all at once. Generators are the main tool for lazy evaluation in JavaScript because they pause after each <code>yield</code> and don't compute the next value until asked.

In contrast, a regular function like <code>Array.map()</code> is <strong>eager</strong> — it processes every item immediately and creates a full result array in memory.

Lazy evaluation is important when dealing with large datasets, infinite sequences, or expensive computations where you may not need all values.

Here is a comparison of eager vs lazy:
<pre><code>// Eager — processes ALL items immediately
const doubled = [1, 2, 3, 4, 5].map(x => x * 2);
// Full array [2,4,6,8,10] created even if you only need first 2

// Lazy — computes one at a time
function* lazyDouble(arr) {
  for (const x of arr) {
    yield x * 2;
  }
}

const gen = lazyDouble([1, 2, 3, 4, 5]);
console.log(gen.next().value); // 2  (only computed first item)
console.log(gen.next().value); // 4  (only computed second item)
// Items 3, 4, 5 never touched

// Real benefit: large arrays or streams
function* readLines(text) {
  for (const line of text.split('\n')) {
    yield line; // process one line at a time
  }
}</code></pre>

Lazy evaluation avoids unnecessary computation and reduces memory usage, especially when processing large data sources like files or API streams.

The downside is that lazy code can be harder to debug and test because values are computed at unpredictable times.`
                },
                {
                    q: "How do you use generators for async iteration?",
                    a: `<strong>Async generators</strong> (declared with <code>async function*</code>) combine generators and async/await. They yield Promises (or values resolved from Promises) and are consumed with <code>for await...of</code>.

This is perfect for reading data from streams, paginated APIs, or any source that delivers data asynchronously over time.

The <code>for await...of</code> loop automatically awaits each yielded Promise before moving to the next iteration.

Here is an async generator example:
<pre><code>async function* fetchPages(baseUrl) {
  let page = 1;
  while (true) {
    const res = await fetch(\&#96;\${baseUrl}?page=\${page}\&#96;);
    const data = await res.json();
    if (data.length === 0) return; // no more pages
    yield data;
    page++;
  }
}

// Consume with for await...of
async function loadAll() {
  for await (const page of fetchPages('/api/items')) {
    console.log('Got page:', page);
    // process page...
  }
}

// Simulated async generator
async function* delay() {
  for (let i = 1; i <= 3; i++) {
    await new Promise(r => setTimeout(r, 500));
    yield i;
  }
}
(async () => {
  for await (const n of delay()) console.log(n); // 1, 2, 3
})();</code></pre>

Async generators are the cleanest way to handle <strong>async data streams</strong> in JavaScript without complex callback chains or consuming all data at once.

The <code>Symbol.asyncIterator</code> is the async version of <code>Symbol.iterator</code> — objects can implement it to work with <code>for await...of</code>.`
                },
                {
                    q: "What is the difference between an iterator and a generator?",
                    a: `An <strong>iterator</strong> is any object that has a <code>next()</code> method following the iterator protocol. A <strong>generator</strong> is a special function (declared with <code>function*</code>) that <strong>automatically creates</strong> an iterator for you.

Generators are essentially a shorthand for creating iterators. Writing a generator function is much shorter and clearer than manually creating an iterator object with a <code>next()</code> method.

Every generator is an iterator, but not every iterator is a generator — you can write iterators manually without using generator syntax.

Here is the comparison:
<pre><code>// Manual iterator (verbose)
function makeRange(start, end) {
  let current = start;
  return {
    next() {
      return current <= end
        ? { value: current++, done: false }
        : { value: undefined, done: true };
    },
    [Symbol.iterator]() { return this; } // also iterable
  };
}

// Generator (concise, same result)
function* makeRangeGen(start, end) {
  for (let i = start; i <= end; i++) {
    yield i;
  }
}

// Both work the same way
for (const n of makeRange(1, 3)) console.log(n);     // 1 2 3
for (const n of makeRangeGen(1, 3)) console.log(n);  // 1 2 3</code></pre>

Generators also automatically handle the <code>[Symbol.iterator]</code> method — the generator object returns itself from <code>[Symbol.iterator]</code>, making it both an iterator and an iterable.

Use generators whenever you need a custom iterator — they are much easier to write and read than manual iterator objects.`
                }
            ]
        },
        {
            id: "proxy-reflect",
            title: "Proxy & Reflect",
            icon: "bi-shield-check",
            questions: [
                {
                    q: "What is a Proxy in JavaScript?",
                    a: `A <strong>Proxy</strong> wraps another object (called the <strong>target</strong>) and intercepts operations on it — like reading properties, writing values, calling functions, and more. You define what happens during these operations using <strong>handler traps</strong>.

A Proxy is created with <code>new Proxy(target, handler)</code>. The handler is an object whose methods (called traps) override default behavior. If a trap is not defined, the operation passes through to the target normally.

Proxies are used for validation, logging, default values, reactive data systems (like Vue 3's reactivity), and access control.

Here is a simple Proxy example:
<pre><code>const person = { name: 'Alice', age: 30 };

const proxy = new Proxy(person, {
  get(target, key) {
    console.log(\&#96;Getting \${key}\&#96;);
    return target[key];
  },
  set(target, key, value) {
    if (key === 'age' && value < 0) {
      throw new Error('Age cannot be negative');
    }
    target[key] = value;
    return true; // required: indicate success
  }
});

console.log(proxy.name); // "Getting name"  "Alice"
proxy.age = 25;          // works fine
proxy.age = -1;          // Error: Age cannot be negative</code></pre>

The <code>set</code> trap must return <code>true</code> to indicate the assignment succeeded. Returning <code>false</code> (or nothing) in strict mode throws a <code>TypeError</code>.

Proxy is one of the most powerful meta-programming features in JavaScript — it lets you define custom behavior for fundamental operations.`
                },
                {
                    q: "What are Proxy traps?",
                    a: `<strong>Proxy traps</strong> are the methods in the handler object that intercept operations. Each trap corresponds to a specific JavaScript operation. If a trap is not defined, the operation falls through to the target normally.

The most commonly used traps are <code>get</code>, <code>set</code>, <code>has</code>, <code>deleteProperty</code>, and <code>apply</code>. There are 13 traps in total.

Each trap receives the <strong>target</strong> as its first argument, which is the original object being proxied.

Here are the key traps:
<pre><code>const handler = {
  get(target, key) {},          // intercepts property read
  set(target, key, value) {},   // intercepts property write
  has(target, key) {},          // intercepts "in" operator
  deleteProperty(target, key) {},// intercepts delete
  apply(target, thisArg, args) {},// intercepts function calls
  construct(target, args) {},   // intercepts new keyword
  ownKeys(target) {},           // intercepts Object.keys()
  getPrototypeOf(target) {},    // intercepts Object.getPrototypeOf()
  defineProperty(target, key, desc) {},
  getOwnPropertyDescriptor(target, key) {},
};

// has trap example
const allowed = new Proxy({a:1, b:2}, {
  has(target, key) {
    return key in target && key !== 'b'; // hide 'b'
  }
});
console.log('a' in allowed); // true
console.log('b' in allowed); // false (hidden)</code></pre>

Not defining a trap means the default behavior happens. You only need to define traps for the operations you want to intercept.

The <code>apply</code> and <code>construct</code> traps only work when the proxy target is a <strong>function</strong>.`
                },
                {
                    q: "What is Reflect in JavaScript?",
                    a: `<strong>Reflect</strong> is a built-in object that provides methods corresponding to JavaScript's fundamental operations — the same operations that Proxy traps intercept. It was designed to work hand-in-hand with Proxy.

<code>Reflect</code> methods always return predictable values (booleans, values) instead of throwing errors, making them easier to use than the original operators.

Inside Proxy traps, it is best practice to call the corresponding <code>Reflect</code> method to perform the default behavior. This ensures you do not accidentally break invariants.

Here is how Reflect is used with Proxy:
<pre><code>const proxy = new Proxy({}, {
  get(target, key, receiver) {
    console.log(\&#96;Reading \${key}\&#96;);
    return Reflect.get(target, key, receiver); // default behavior
  },
  set(target, key, value, receiver) {
    console.log(\&#96;Setting \${key} = \${value}\&#96;);
    return Reflect.set(target, key, value, receiver);
  }
});

proxy.x = 10; // "Setting x = 10"
proxy.x;      // "Reading x"

// Reflect methods mirror Proxy traps 1:1
Reflect.get(obj, 'key')         // like obj.key
Reflect.set(obj, 'key', val)    // like obj.key = val
Reflect.has(obj, 'key')        // like 'key' in obj
Reflect.deleteProperty(obj,'k') // like delete obj.k</code></pre>

Using <code>Reflect</code> inside traps is important when dealing with inheritance — it correctly handles the <code>receiver</code> argument which tracks the original proxy object.

<code>Reflect</code> also makes it easy to check if an operation succeeded without using try/catch: <code>Reflect.set()</code> returns <code>true</code> on success.`
                },
                {
                    q: "How do you use a Proxy for input validation?",
                    a: `The <code>set</code> trap is perfect for <strong>input validation</strong>. You intercept every property assignment, validate the value, and either allow it or throw an error. This keeps validation logic in one place instead of scattered everywhere.

The Proxy acts as a transparent wrapper — code using the object doesn't change, but all assignments are validated automatically.

This pattern is used in form validation libraries, data models, and typed object systems.

Here is a validation proxy:
<pre><code>function createValidator(target, validators) {
  return new Proxy(target, {
    set(obj, key, value) {
      if (validators[key]) {
        const error = validators[key](value);
        if (error) throw new TypeError(\&#96;\${key}: \${error}\&#96;);
      }
      obj[key] = value;
      return true;
    }
  });
}

const user = createValidator({}, {
  name: v => typeof v !== 'string' ? 'must be a string' : null,
  age: v => (typeof v !== 'number' || v < 0 || v > 150)
    ? 'must be a number 0-150' : null
});

user.name = 'Alice'; // OK
user.age = 25;       // OK
user.age = -5;       // TypeError: age: must be a number 0-150
user.name = 42;      // TypeError: name: must be a string</code></pre>

You can also use the <code>get</code> trap to return default values when properties are accessed that don't exist — useful for config objects.

Validation proxies are especially useful when building APIs or libraries where you want to give clear error messages for wrong usage.`
                },
                {
                    q: "How does Vue 3 use Proxy for reactivity?",
                    a: `Vue 3's reactivity system uses <strong>Proxy</strong> to detect when reactive data is read or written. When you read a property, Vue tracks which component depends on it (<strong>dependency tracking</strong>). When you write to a property, Vue <strong>triggers updates</strong> for all dependents.

This is why you don't need to call special methods to update state in Vue 3 — the Proxy intercepts plain JavaScript assignments and automatically notifies the system.

Vue 2 used <code>Object.defineProperty</code> which had limitations (couldn.t detect new properties or array index mutations). Proxy solves both problems.

Here is a simplified version of Vue's reactivity:
<pre><code>function reactive(obj) {
  const subscribers = new Map();

  return new Proxy(obj, {
    get(target, key) {
      // Track: "component X reads key"
      if (!subscribers.has(key)) subscribers.set(key, new Set());
      // (In real Vue, the current effect is tracked here)
      return target[key];
    },
    set(target, key, value) {
      target[key] = value;
      // Trigger: notify all subscribers of key
      if (subscribers.has(key)) {
        subscribers.get(key).forEach(fn => fn());
      }
      return true;
    }
  });
}

const state = reactive({ count: 0 });
state.count; // reading triggers dependency tracking
state.count = 1; // writing triggers updates</code></pre>

Unlike Vue 2, Proxy-based reactivity works on <strong>any property access</strong>, including new properties added after the object is created and array index assignments.

The <code>Reflect</code> object is used inside Vue's traps to ensure correct behavior with inheritance and prototype chains.`
                },
                {
                    q: "What is the difference between Proxy and Object.defineProperty?",
                    a: `<code>Object.defineProperty</code> lets you intercept <code>get</code> and <code>set</code> operations on a <strong>specific property</strong>. <strong>Proxy</strong> intercepts <strong>all operations</strong> on an entire object through 13 different traps.

Key limitations of <code>Object.defineProperty</code>: it cannot detect <strong>new property additions</strong>, cannot intercept <strong>array length changes</strong>, and must be applied property-by-property. Proxy solves all these problems.

<code>Object.defineProperty</code> is still useful for simple cases (like getters/setters) because it has slightly less overhead than a full Proxy.

Here is a comparison:
<pre><code>// Object.defineProperty — per-property, limited
const obj1 = { _x: 0 };
Object.defineProperty(obj1, 'x', {
  get() { return this._x; },
  set(v) { this._x = v * 2; }
});
obj1.x = 5;
console.log(obj1.x); // 10

// Proxy — whole object, full control
const obj2 = {};
const proxy = new Proxy(obj2, {
  set(target, key, value) {
    target[key] = value * 2; // double all values
    return true;
  }
});
proxy.x = 5;
proxy.y = 3; // catches ALL properties
console.log(proxy.x); // 10
console.log(proxy.y); // 6

// Proxy can detect new properties
proxy.newProp = 7; // works!
// Object.defineProperty must be applied to newProp separately</code></pre>

Proxy requires a modern browser or Node.js — it cannot be polyfilled (unlike many other ES6 features) because it does fundamental operator interception.

Vue 2 used <code>Object.defineProperty</code> and had to patch arrays manually. Vue 3 switched to Proxy to eliminate these edge cases.`
                },
                {
                    q: "How do you create a read-only object using Proxy?",
                    a: `Use the <code>set</code> and <code>deleteProperty</code> traps in a Proxy to intercept write operations and throw an error. This makes the object <strong>effectively read-only</strong> — all reads pass through normally, but any write throws.

Unlike <code>Object.freeze()</code>, a Proxy-based read-only wrapper can give <strong>custom error messages</strong> and can be applied to nested objects recursively.

This pattern is useful for config objects, constants, and frozen API responses.

Here is a read-only proxy:
<pre><code>function readOnly(target) {
  return new Proxy(target, {
    set(_, key) {
      throw new TypeError(\&#96;Cannot set "\${key}" — object is read-only\&#96;);
    },
    deleteProperty(_, key) {
      throw new TypeError(\&#96;Cannot delete "\${key}" — object is read-only\&#96;);
    }
  });
}

const config = readOnly({ host: 'localhost', port: 3000 });
console.log(config.host); // "localhost" (read works)
config.host = 'example';  // TypeError: Cannot set "host"
delete config.port;        // TypeError: Cannot delete "port"

// Deep read-only (recursive)
function deepReadOnly(target) {
  return new Proxy(target, {
    get(obj, key) {
      const val = obj[key];
      return typeof val === 'object' && val !== null
        ? deepReadOnly(val)
        : val;
    },
    set() { throw new TypeError('Read-only'); }
  });
}</code></pre>

Note that <code>Object.freeze()</code> is simpler for most cases, but it is <strong>shallow</strong> — nested objects are not frozen. A deep read-only Proxy solves this.

The Proxy approach also lets you freeze objects that were created elsewhere without modifying them directly.`
                },
                {
                    q: "What is Reflect.ownKeys() and how is it different from Object.keys()?",
                    a: `<code>Reflect.ownKeys()</code> returns <strong>all own property keys</strong> of an object — including <strong>symbols</strong> and <strong>non-enumerable</strong> properties. It combines <code>Object.getOwnPropertyNames()</code> and <code>Object.getOwnPropertySymbols()</code>.

<code>Object.keys()</code> only returns <strong>own enumerable string keys</strong> — it skips symbol keys and non-enumerable properties.

Use <code>Reflect.ownKeys()</code> when you need a complete picture of everything on an object, without filtering by enumerability or type.

Here is the comparison:
<pre><code>const sym = Symbol('id');
const obj = Object.defineProperties({ [sym]: 'symVal' }, {
  visible: { value: 1, enumerable: true },
  hidden: { value: 2, enumerable: false }
});

console.log(Object.keys(obj));
// ['visible']  — only enumerable string keys

console.log(Object.getOwnPropertyNames(obj));
// ['visible', 'hidden']  — all string keys (enumerable or not)

console.log(Object.getOwnPropertySymbols(obj));
// [Symbol(id)]  — only symbol keys

console.log(Reflect.ownKeys(obj));
// ['visible', 'hidden', Symbol(id)]  — everything!</code></pre>

<code>Reflect.ownKeys()</code> is particularly useful inside the <code>ownKeys</code> Proxy trap to control which keys are visible to operations like <code>Object.keys()</code> or <code>for...in</code>.

The order of results from <code>Reflect.ownKeys()</code> is: integer-like string keys first (sorted numerically), then other string keys (in insertion order), then symbol keys (in insertion order).`
                },
                {
                    q: "How do you use Proxy to log all property accesses?",
                    a: `Use the <code>get</code> trap to intercept every property read on an object. Log the key being accessed, then use <code>Reflect.get()</code> to return the actual value so the object behaves normally.

This is a common debugging technique — you can temporarily wrap an object with a logging proxy to see exactly what code is reading from it.

You can also track <strong>write access</strong> using the <code>set</code> trap and <strong>function calls</strong> using the <code>apply</code> trap.

Here is a logging proxy:
<pre><code>function withLogging(target, label = 'obj') {
  return new Proxy(target, {
    get(obj, key, receiver) {
      const val = Reflect.get(obj, key, receiver);
      if (typeof val === 'function') {
        console.log(\&#96;Called: \${label}.\${String(key)}()\&#96;);
        return val.bind(obj); // preserve 'this'
      }
      console.log(\&#96;Read: \${label}.\${String(key)} = \${val}\&#96;);
      return val;
    },
    set(obj, key, value, receiver) {
      console.log(\&#96;Write: \${label}.\${String(key)} = \${value}\&#96;);
      return Reflect.set(obj, key, value, receiver);
    }
  });
}

const user = withLogging({ name: 'Alice', greet() { return 'hi'; } }, 'user');
user.name;     // "Read: user.name = Alice"
user.name = 'Bob'; // "Write: user.name = Bob"
user.greet();  // "Called: user.greet()"</code></pre>

Remember to use <code>Reflect.get(target, key, <strong>receiver</strong>)</code> — passing the receiver ensures prototype-based properties (like getters) work correctly.

This pattern is also used in testing and mocking libraries to spy on method calls.`
                },
                {
                    q: "Can a Proxy be revoked?",
                    a: `Yes. <code>Proxy.revocable(target, handler)</code> creates a proxy that can be <strong>permanently disabled</strong>. It returns an object with two properties: <code>proxy</code> (the proxy object) and <code>revoke</code> (a function that kills the proxy).

After calling <code>revoke()</code>, any operation on the proxy throws a <code>TypeError</code>. This is useful for <strong>time-limited access</strong> — give someone a proxy, then revoke it when access should end.

Revocable proxies are used in security-sensitive code to ensure objects cannot be accessed after a certain point.

Here is how revocable proxies work:
<pre><code>const obj = { secret: 'hidden data' };
const { proxy, revoke } = Proxy.revocable(obj, {
  get(target, key) {
    return target[key];
  }
});

console.log(proxy.secret); // "hidden data"

// Later, revoke access
revoke();

try {
  console.log(proxy.secret); // TypeError: Cannot perform 'get' on revoked proxy
} catch (e) {
  console.log(e.message);
}

// After revoking, the proxy is permanently disabled
// revoke() is safe to call multiple times (no error)</code></pre>

Once revoked, the proxy cannot be un-revoked — it is permanently disabled.

Revocable proxies are part of the capability-based security model — pass a proxy instead of the actual object, and revoke access when done.`
                },
                {
                    q: "What is the apply trap in Proxy?",
                    a: `The <code>apply</code> trap intercepts <strong>function calls</strong>. It triggers when the proxied function is called directly, via <code>call()</code>, or via <code>apply()</code>. It receives the target function, <code>this</code> context, and the arguments array.

This lets you wrap functions with logging, memoization, access control, or argument validation — all transparently.

The target of a Proxy with an <code>apply</code> trap must be a <strong>callable object</strong> (a function).

Here is the apply trap in action:
<pre><code>function multiply(a, b) { return a * b; }

const proxiedMultiply = new Proxy(multiply, {
  apply(target, thisArg, args) {
    console.log(\&#96;Called with args: \${args}\&#96;);
    const result = Reflect.apply(target, thisArg, args);
    console.log(\&#96;Result: \${result}\&#96;);
    return result;
  }
});

proxiedMultiply(3, 4);
// "Called with args: 3,4"
// "Result: 12"

// Works with call() and apply() too
proxiedMultiply.call(null, 5, 6);  // "Called with args: 5,6"
proxiedMultiply.apply(null, [7,8]); // "Called with args: 7,8"

// Memoization using apply trap
function memoize(fn) {
  const cache = new Map();
  return new Proxy(fn, {
    apply(target, thisArg, args) {
      const key = JSON.stringify(args);
      if (cache.has(key)) return cache.get(key);
      const result = Reflect.apply(target, thisArg, args);
      cache.set(key, result);
      return result;
    }
  });
}</code></pre>

The <code>construct</code> trap is similar to <code>apply</code> but intercepts the <code>new</code> keyword. It is useful for logging constructor calls or transforming the returned object.

Apply-trapped proxies are used in testing frameworks to create spy functions that record how they were called.`
                },
                {
                    q: "What limitations does Proxy have?",
                    a: `While Proxy is powerful, it has some important limitations. First, Proxy <strong>cannot be polyfilled</strong> — unlike most ES6 features, there is no way to fully emulate it in older browsers. Second, a Proxy <strong>does not fool strict identity checks</strong> — <code>proxy !== target</code>, so code that stores references to the original object and checks identity will not see Proxy behavior.

Also, some built-in objects with <strong>internal slots</strong> (like <code>Map</code>, <code>Set</code>, <code>Date</code>) cannot be properly proxied in all scenarios because their methods access internal slots directly, bypassing the proxy.

Performance is also a concern — every intercepted operation adds overhead, so Proxy should not be used for performance-critical hot paths.

Here are the key limitations:
<pre><code>// 1. Not polyfillable — no Babel transform works for Proxy
// Must use modern browsers/Node.js (no IE support)

// 2. Identity issue
const obj = {};
const proxy = new Proxy(obj, {});
console.log(proxy === obj); // false
// Code that stores &#96;obj&#96; still uses original

// 3. Built-ins with internal slots
const map = new Map();
const mapProxy = new Proxy(map, {});
// mapProxy.set('key', 'val'); // TypeError in some environments
// Map methods use internal [[MapData]] slot, not accessible via proxy

// Workaround for built-ins:
const safeMapProxy = new Proxy(map, {
  get(target, key) {
    const val = Reflect.get(target, key);
    return typeof val === 'function' ? val.bind(target) : val;
  }
});
safeMapProxy.set('key', 'val'); // now works</code></pre>

The workaround for built-ins with internal slots is to bind methods to the original target in the <code>get</code> trap.

Despite limitations, Proxy is one of the most unique meta-programming features in JavaScript — no other language feature can intercept operators like <code>in</code>, <code>delete</code>, and <code>new</code> at runtime.`
                },
                {
                    q: "How do you use Proxy to add default values?",
                    a: `The <code>get</code> trap lets you return a <strong>default value</strong> when a property does not exist on the target, instead of returning <code>undefined</code>. This is useful for config objects, sparse arrays, and optional-with-default patterns.

The key check is <code>key in target</code> — if the key exists, return the actual value; otherwise return the default.

This is similar to Python's <code>collections.defaultdict</code>.

Here is a default-value proxy:
<pre><code>function withDefaults(target, defaults) {
  return new Proxy(target, {
    get(obj, key) {
      return key in obj ? obj[key] : defaults[key];
    }
  });
}

const config = withDefaults(
  { port: 8080 },        // actual values
  { host: 'localhost', port: 3000, debug: false } // defaults
);

console.log(config.port);  // 8080  (own value)
console.log(config.host);  // "localhost" (default)
console.log(config.debug); // false (default)

// Default object factory
function defaultDict(defaultFactory) {
  return new Proxy({}, {
    get(target, key) {
      if (!(key in target)) {
        target[key] = defaultFactory();
      }
      return target[key];
    }
  });
}
const counter = defaultDict(() => 0);
counter.apples++;
counter.apples++;
counter.bananas++;
console.log(counter.apples);  // 2
console.log(counter.bananas); // 1</code></pre>

The default value proxy is transparent — code does not need to know about defaults. It just reads properties normally.

Use <code>Reflect.get(target, key, receiver)</code> in the get trap when the target might have prototype getters to ensure correct behavior.`
                },
                {
                    q: "What is meta-programming in JavaScript?",
                    a: `<strong>Meta-programming</strong> means writing code that operates on other code — reading, modifying, or controlling how code behaves at runtime. JavaScript supports meta-programming through <strong>Proxy</strong>, <strong>Reflect</strong>, <strong>Symbol</strong>, and <strong>property descriptors</strong>.

With meta-programming you can intercept property access, customize how objects behave with operators, define custom iteration behavior, and change how objects convert to strings or numbers.

This is different from regular programming (writing logic to process data) — meta-programming writes logic about the code itself.

Here is a summary of meta-programming tools:
<pre><code>// 1. Proxy — intercept object operations
const proxy = new Proxy(obj, handler);

// 2. Reflect — perform default object operations
Reflect.get(obj, 'key');
Reflect.set(obj, 'key', value);

// 3. Symbol — customize built-in behaviors
class MyArray {
  [Symbol.iterator]() { /* custom iteration */ }
  get [Symbol.toStringTag]() { return 'MyArray'; }
}
console.log(Object.prototype.toString.call(new MyArray()));
// "[object MyArray]"

// 4. Property descriptors — define property behavior
Object.defineProperty(obj, 'x', {
  get() { return this._x; },
  set(v) { this._x = v * 2; },
  enumerable: true,
  configurable: false
});</code></pre>

Meta-programming is powerful but should be used <strong>carefully</strong> — it can make code hard to understand and debug because normal assumptions about how objects work no longer apply.

Frameworks like Vue, MobX, and Immer use meta-programming internally so that developers can write simple, natural JavaScript while the framework handles complexity behind the scenes.`
                }
            ]
        },
        {
            id: "web-apis-storage",
            title: "Web APIs & Storage",
            icon: "bi-hdd",
            questions: [
                {
                    q: "What is localStorage and how is it different from sessionStorage?",
                    a: `<strong>localStorage</strong> stores data that <strong>persists forever</strong> (until manually cleared). <strong>sessionStorage</strong> stores data only for the <strong>current browser tab session</strong> — it is cleared when the tab is closed.

Both APIs store data as <strong>key-value pairs of strings</strong>, have a limit of about <strong>5–10 MB</strong> per origin, and are <strong>synchronous</strong> (which can slow down the main thread for large operations).

Neither is sent to the server automatically — unlike cookies. Both are restricted to the same origin (protocol + domain + port).

Here is how they compare:
<pre><code>// localStorage — persists across sessions
localStorage.setItem('username', 'Alice');
const name = localStorage.getItem('username'); // 'Alice'
localStorage.removeItem('username');
localStorage.clear(); // remove all items

// sessionStorage — cleared when tab closes
sessionStorage.setItem('tempData', JSON.stringify({ step: 1 }));
const data = JSON.parse(sessionStorage.getItem('tempData'));
console.log(data.step); // 1

// Storage event (fires in OTHER tabs for localStorage changes)
window.addEventListener('storage', (e) => {
  console.log(\&#96;\${e.key} changed from \${e.oldValue} to \${e.newValue}\&#96;);
});</code></pre>

Always use <strong>JSON.stringify/parse</strong> to store and retrieve objects, since storage only accepts strings.

One key difference: <code>sessionStorage</code> is per-tab, so two tabs to the same site have <strong>separate</strong> sessionStorage. <code>localStorage</code> is shared across all tabs of the same origin.`
                },
                {
                    q: "What are cookies and how do they differ from Web Storage?",
                    a: `<strong>Cookies</strong> are small text strings stored by the browser and <strong>automatically sent to the server</strong> with every HTTP request to the matching domain. Web Storage (localStorage/sessionStorage) is <strong>never sent to the server</strong>.

Cookies have a size limit of about <strong>4 KB</strong> per cookie, support <strong>expiry dates</strong>, can be restricted to HTTPS with the <code>Secure</code> flag, and can be protected from JavaScript with <code>HttpOnly</code>.

Web Storage has a larger limit (~5 MB) but no built-in expiry and is only accessible from JavaScript.

Here is how to work with cookies:
<pre><code>// Set a cookie (expires in 7 days)
document.cookie = 'user=Alice; max-age=604800; path=/';

// Set a secure, httpOnly cookie (server side only — can't set HttpOnly from JS)
// Set-Cookie: token=abc; HttpOnly; Secure; SameSite=Strict

// Read cookies (returns all cookies as one string)
console.log(document.cookie); // "user=Alice; theme=dark"

// Parse cookies
function getCookie(name) {
  return document.cookie
    .split('; ')
    .find(c => c.startsWith(name + '='))
    ?.split('=')[1];
}

// Delete a cookie (set max-age to 0)
document.cookie = 'user=; max-age=0; path=/';</code></pre>

<code>HttpOnly</code> cookies cannot be read by JavaScript — they are only sent in HTTP headers. This protects against XSS attacks stealing session tokens.

The <code>SameSite=Strict</code> attribute prevents cookies from being sent on cross-site requests, protecting against CSRF attacks.`
                },
                {
                    q: "What is IndexedDB and when would you use it?",
                    a: `<strong>IndexedDB</strong> is a browser-based <strong>NoSQL database</strong> built into the browser. It can store large amounts of structured data (files, blobs, JSON objects) — up to hundreds of MB depending on the browser and device.

Unlike localStorage, IndexedDB is <strong>asynchronous</strong> (uses events or Promises), supports <strong>transactions</strong>, and can store complex objects with <strong>indexes</strong> for fast querying.

Use IndexedDB for offline-capable web apps, caching large datasets, or storing files locally in the browser.

Here is a basic IndexedDB example:
<pre><code>// Open (or create) a database
const request = indexedDB.open('MyDB', 1);

request.onupgradeneeded = (e) => {
  const db = e.target.result;
  // Create an object store (like a table)
  const store = db.createObjectStore('users', { keyPath: 'id' });
  store.createIndex('by_name', 'name', { unique: false });
};

request.onsuccess = (e) => {
  const db = e.target.result;

  // Write data
  const tx = db.transaction('users', 'readwrite');
  const store = tx.objectStore('users');
  store.add({ id: 1, name: 'Alice', age: 30 });

  // Read data
  const getReq = store.get(1);
  getReq.onsuccess = () => console.log(getReq.result);
};</code></pre>

Modern libraries like <strong>idb</strong> (from Jake Archibald) wrap IndexedDB in a clean Promise-based API, making it much easier to work with.

IndexedDB is the right choice when you need structured, queryable, large-scale local storage for offline-first web applications like PWAs.`
                },
                {
                    q: "What is the Fetch API and how does it work?",
                    a: `The <strong>Fetch API</strong> is the modern way to make HTTP requests in JavaScript. It returns a <strong>Promise</strong> that resolves to a <code>Response</code> object. You then call methods like <code>.json()</code>, <code>.text()</code>, or <code>.blob()</code> to read the response body (also returns a Promise).

One important thing: Fetch only <strong>rejects</strong> on network errors. HTTP error codes like 404 or 500 do NOT reject — you must check <code>response.ok</code> manually.

Fetch replaces the older <code>XMLHttpRequest</code> with a cleaner, Promise-based interface.

Here is how Fetch works:
<pre><code>// Basic GET request
const res = await fetch('https://api.example.com/users');
if (!res.ok) throw new Error(\&#96;HTTP error: \${res.status}\&#96;);
const data = await res.json(); // parse JSON body

// POST request
const response = await fetch('/api/users', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ name: 'Alice', age: 30 })
});

// Handling errors properly
async function fetchData(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(\&#96;Status: \${res.status}\&#96;);
    return await res.json();
  } catch (err) {
    console.error('Fetch failed:', err);
  }
}</code></pre>

After calling <code>res.json()</code> or <code>res.text()</code>, the response body is consumed and cannot be read again. If you need it twice, clone the response first with <code>res.clone()</code>.

Fetch supports <strong>AbortController</strong> for cancelling requests — useful for search-as-you-type patterns where each keystroke should cancel the previous request.`
                },
                {
                    q: "How do you cancel a Fetch request?",
                    a: `Use <strong>AbortController</strong> to cancel fetch requests. Create an <code>AbortController</code>, pass its <code>signal</code> to the fetch options, then call <code>controller.abort()</code> to cancel.

When aborted, the fetch Promise rejects with an <code>AbortError</code>. Always check <code>err.name === 'AbortError'</code> to distinguish cancellation from real network errors.

This pattern is essential for search inputs, infinite scroll, and any scenario where a new request should cancel the previous one.

Here is how to cancel a fetch:
<pre><code>let controller = null;

async function search(query) {
  // Cancel previous request
  if (controller) controller.abort();
  controller = new AbortController();

  try {
    const res = await fetch(\&#96;/api/search?q=\${query}\&#96;, {
      signal: controller.signal
    });
    const data = await res.json();
    return data;
  } catch (err) {
    if (err.name === 'AbortError') {
      console.log('Search cancelled');
      return null;
    }
    throw err; // real error, re-throw
  }
}

// Each keystroke cancels the previous search
input.addEventListener('input', (e) => search(e.target.value));

// Also works for timeouts
const timeoutCtrl = new AbortController();
setTimeout(() => timeoutCtrl.abort(), 5000); // 5 second timeout
fetch('/slow-api', { signal: timeoutCtrl.signal });</code></pre>

In modern environments you can also use <code>AbortSignal.timeout(5000)</code> directly — it creates a signal that auto-aborts after 5 seconds, without needing a separate AbortController.

AbortController also works with the Web Streams API, EventListeners, and any API that accepts a signal.`
                },
                {
                    q: "What is the Web Storage API's storage event?",
                    a: `The <code>storage</code> event fires on the <code>window</code> object when <strong>localStorage changes in another tab or window</strong> of the same origin. It does NOT fire in the tab that made the change — only in other tabs.

The event object has: <code>key</code> (changed key), <code>oldValue</code>, <code>newValue</code>, <code>url</code> (page that changed it), and <code>storageArea</code> (the storage object).

This is useful for synchronizing state across multiple open tabs without a server.

Here is how the storage event works:
<pre><code>// Tab A: listen for storage changes from other tabs
window.addEventListener('storage', (e) => {
  if (e.key === 'theme') {
    document.body.className = e.newValue; // sync theme change
    console.log(\&#96;Theme changed to \${e.newValue} in another tab\&#96;);
  }
  if (e.key === null) {
    // localStorage.clear() was called
    console.log('All storage was cleared');
  }
});

// Tab B: changing localStorage triggers the event in Tab A
localStorage.setItem('theme', 'dark');   // Tab A gets notified
localStorage.setItem('theme', 'light');  // Tab A gets notified again
localStorage.removeItem('theme');        // newValue is null in event

// Note: sessionStorage does NOT fire storage events
// because it cannot be shared between tabs</code></pre>

The storage event only fires for <strong>actual changes</strong> — setting a key to the same value it already has will NOT fire the event.

This event is the basis for simple cross-tab communication. For more complex needs, use the <strong>BroadcastChannel API</strong> which can send any structured data to all tabs.`
                },
                {
                    q: "What is the Cache API and how does it relate to Service Workers?",
                    a: `The <strong>Cache API</strong> lets JavaScript store and retrieve HTTP request/response pairs. It is primarily used from <strong>Service Workers</strong> to cache network resources so the app works <strong>offline</strong>.

Unlike localStorage, the Cache API stores full HTTP responses (not just strings), is asynchronous, and integrates with <code>fetch</code> naturally.

Service Workers intercept all fetch requests and can serve responses from cache, enabling offline support and faster loading times.

Here is how the Cache API works:
<pre><code>// In a Service Worker
const CACHE_NAME = 'my-app-v1';

// Cache during install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll([
        '/',
        '/styles.css',
        '/app.js'
      ]);
    })
  );
});

// Serve from cache during fetch
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => {
      return cached || fetch(event.request); // cache-first strategy
    })
  );
});

// From regular page code
const cache = await caches.open('my-cache');
await cache.put('/api/data', new Response(JSON.stringify({a:1})));
const resp = await cache.match('/api/data');
const data = await resp.json();</code></pre>

Common caching strategies include <strong>cache-first</strong> (use cache, fallback to network), <strong>network-first</strong> (try network, fallback to cache), and <strong>stale-while-revalidate</strong> (serve from cache, update in background).

Service Workers + Cache API are the foundation of <strong>Progressive Web Apps (PWAs)</strong>.`
                },
                {
                    q: "What is the BroadcastChannel API?",
                    a: `The <strong>BroadcastChannel API</strong> lets different browser contexts (tabs, windows, iframes) of the same origin <strong>communicate with each other</strong> by sending messages. It is simpler than the <code>storage</code> event for cross-tab messaging.

All contexts that subscribe to the same channel name receive messages posted to it. Unlike the storage event, messages go to <strong>all tabs including the sender</strong> unless you handle that yourself.

It is great for syncing login/logout state, broadcasting notifications, or coordinating data updates across tabs.

Here is how BroadcastChannel works:
<pre><code>// Works in all open tabs on the same origin
const channel = new BroadcastChannel('app-sync');

// Tab A: Listen for messages
channel.onmessage = (event) => {
  console.log('Received:', event.data);
  if (event.data.type === 'logout') {
    // Redirect all tabs to login page
    window.location.href = '/login';
  }
};

// Tab B: Send a message to all other tabs
channel.postMessage({ type: 'logout', userId: 123 });

// Send complex data
channel.postMessage({
  type: 'cart-updated',
  items: [{ id: 1, qty: 2 }]
});

// Clean up when done
channel.close();</code></pre>

BroadcastChannel supports any <strong>structured-cloneable data</strong> — objects, arrays, Blobs, etc. You are not limited to strings like with the storage event.

When you close a channel with <code>channel.close()</code>, it stops receiving messages. Creating a new channel with the same name creates a new subscription.`
                },
                {
                    q: "What is the Geolocation API?",
                    a: `The <strong>Geolocation API</strong> lets web applications access the device's geographic location (latitude and longitude). It always requires <strong>explicit user permission</strong> — the browser asks the user before sharing location.

<code>navigator.geolocation.getCurrentPosition()</code> gets the current position once. <code>watchPosition()</code> watches the position continuously and calls the callback whenever it changes.

Both methods take a success callback, an optional error callback, and optional options.

Here is how the Geolocation API works:
<pre><code>// One-time location
navigator.geolocation.getCurrentPosition(
  (pos) => {
    const { latitude, longitude, accuracy } = pos.coords;
    console.log(\&#96;Lat: \${latitude}, Lng: \${longitude}\&#96;);
    console.log(\&#96;Accuracy: \${accuracy} meters\&#96;);
  },
  (err) => {
    if (err.code === 1) console.log('Permission denied');
    if (err.code === 2) console.log('Position unavailable');
    if (err.code === 3) console.log('Timeout');
  },
  { enableHighAccuracy: true, timeout: 5000 }
);

// Watch position (for tracking movement)
const watchId = navigator.geolocation.watchPosition(
  (pos) => console.log('New position:', pos.coords),
  (err) => console.error(err)
);

// Stop watching
navigator.geolocation.clearWatch(watchId);

// Check support
if ('geolocation' in navigator) {
  console.log('Geolocation supported');
}</code></pre>

The Geolocation API only works on <strong>HTTPS</strong> pages (or localhost) in modern browsers.

<code>enableHighAccuracy: true</code> asks for GPS-level accuracy on mobile devices, but this uses more battery. The default is to use Wi-Fi/cell tower triangulation, which is faster and uses less power.`
                },
                {
                    q: "What is the Web Workers API?",
                    a: `<strong>Web Workers</strong> let you run JavaScript in a <strong>background thread</strong> separate from the main (UI) thread. This prevents heavy computation from blocking the UI and making the page unresponsive.

Workers communicate with the main thread via <strong>message passing</strong> — <code>postMessage()</code> sends data and the <code>message</code> event receives it. Data is <strong>copied</strong> (not shared) between threads.

Workers cannot access the DOM, <code>window</code>, or <code>document</code> — only the Worker API, <code>fetch</code>, <code>setTimeout</code>, and a few other Web APIs.

Here is a basic Web Worker example:
<pre><code>// main.js — create worker
const worker = new Worker('worker.js');

// Send data to worker
worker.postMessage({ action: 'sort', data: [3, 1, 4, 1, 5] });

// Receive result from worker
worker.onmessage = (e) => {
  console.log('Sorted:', e.data); // [1, 1, 3, 4, 5]
};

worker.onerror = (e) => console.error('Worker error:', e);

// Terminate the worker when done
worker.terminate();

// worker.js — runs in background thread
self.onmessage = (e) => {
  if (e.data.action === 'sort') {
    const sorted = [...e.data.data].sort((a, b) => a - b);
    self.postMessage(sorted); // send result back
  }
};</code></pre>

For even better performance, use <code>Transferable objects</code> (like ArrayBuffer) with <code>postMessage(data, [transfer])</code> — the data is <strong>transferred</strong> (not copied), which is much faster for large data.

<strong>Shared Workers</strong> can be shared between multiple tabs of the same origin, while regular workers are exclusive to one page.`
                },
                {
                    q: "What is the Intersection Observer API?",
                    a: `The <strong>Intersection Observer API</strong> watches whether elements are visible in the viewport (or within another element). It fires a callback when an element enters or leaves the visible area.

This replaces expensive scroll event listeners that recalculate positions on every scroll event. Intersection Observer is <strong>asynchronous</strong> and runs off the main thread, making it very efficient.

Common uses: lazy loading images, infinite scroll, animating elements when they appear, analytics tracking (did the user see this element?).

Here is how it works:
<pre><code>const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      // Element is visible
      entry.target.classList.add('visible');
      console.log('Visible:', entry.target.id);

      // For lazy loading: stop observing after load
      observer.unobserve(entry.target);
    }
  });
}, {
  root: null,          // null = viewport
  rootMargin: '0px',  // expand/shrink boundary
  threshold: 0.5       // 50% visible triggers callback
});

// Observe multiple elements
document.querySelectorAll('.lazy-img').forEach(img => {
  observer.observe(img);
});

// threshold can be an array
const observer2 = new IntersectionObserver(callback, {
  threshold: [0, 0.25, 0.5, 0.75, 1.0]
  // fires at each 25% visibility change
});</code></pre>

<code>threshold: 0</code> fires as soon as any pixel of the element is visible. <code>threshold: 1.0</code> fires only when the entire element is visible.

<code>rootMargin</code> adjusts the detection boundary — a positive value starts detecting elements before they enter the viewport (useful for preloading images slightly ahead of scroll).`
                },
                {
                    q: "What is the MutationObserver API?",
                    a: `<strong>MutationObserver</strong> watches for changes to the DOM tree — attribute changes, added/removed nodes, and text content changes. It fires a callback with a list of all changes that occurred.

It replaces the older DOM mutation events (like <code>DOMNodeInserted</code>) which were synchronous and slow.

MutationObserver is used in frameworks to detect DOM changes, in libraries that patch third-party DOM, and for watching dynamically loaded content.

Here is how MutationObserver works:
<pre><code>const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.type === 'childList') {
      console.log('Children added:', mutation.addedNodes);
      console.log('Children removed:', mutation.removedNodes);
    }
    if (mutation.type === 'attributes') {
      console.log(\&#96;Attribute "\${mutation.attributeName}" changed\&#96;);
    }
    if (mutation.type === 'characterData') {
      console.log('Text changed');
    }
  });
});

const target = document.getElementById('myDiv');

// Start observing
observer.observe(target, {
  childList: true,     // watch for added/removed child nodes
  attributes: true,   // watch for attribute changes
  subtree: true,       // watch all descendants too
  characterData: true  // watch for text changes
});

// Stop observing
observer.disconnect();</code></pre>

Mutations are delivered as a <strong>batch</strong> — if multiple changes happen synchronously, they are all reported together in one callback invocation.

MutationObserver is used by tools like <strong>Grammarly</strong> (to watch for new text fields), <strong>ad blockers</strong> (to detect and remove ads), and framework <strong>hydration</strong> scripts.`
                },
                {
                    q: "What is the ResizeObserver API?",
                    a: `<strong>ResizeObserver</strong> watches an element and fires a callback whenever its <strong>size changes</strong> (width or height). Unlike listening to <code>window.resize</code>, it tracks individual elements, not just the window.

This is essential for <strong>responsive components</strong> — when a container that holds your component changes size, you can re-render or adjust layout accordingly.

It reports <code>contentBoxSize</code> (size without padding) and <code>borderBoxSize</code> (size with padding and border).

Here is how ResizeObserver works:
<pre><code>const observer = new ResizeObserver((entries) => {
  entries.forEach((entry) => {
    const { width, height } = entry.contentRect;
    console.log(\&#96;Resized to \${width}px x \${height}px\&#96;);

    // Adjust layout based on size
    const el = entry.target;
    if (width < 400) {
      el.classList.add('compact');
    } else {
      el.classList.remove('compact');
    }
  });
});

// Observe an element
observer.observe(document.querySelector('.chart-container'));

// Stop observing
observer.unobserve(document.querySelector('.chart-container'));
observer.disconnect(); // stop all observations

// borderBoxSize (includes padding + border)
const borderObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.borderBoxSize) {
      const size = entry.borderBoxSize[0];
      console.log(\&#96;Border box: \${size.inlineSize} x \${size.blockSize}\&#96;);
    }
  }
});</code></pre>

<code>contentRect</code> gives width and height in CSS pixels. For more details, use <code>contentBoxSize</code> and <code>borderBoxSize</code> (both are arrays to handle multi-column layouts).

ResizeObserver is much more efficient than polling element size with <code>setInterval</code> and avoids the pitfall of resize loops (it batches observations to prevent infinite feedback).`
                },
                {
                    q: "What is the Clipboard API?",
                    a: `The <strong>Clipboard API</strong> lets you programmatically read from and write to the system clipboard. The modern API is Promise-based and requires <strong>user permission</strong> for reading.

Writing to the clipboard is generally allowed without permission (triggered by user action). Reading requires explicit permission from the user.

This replaces the old <code>document.execCommand('copy')</code> approach, which is deprecated.

Here is how the Clipboard API works:
<pre><code>// Write text to clipboard (requires user gesture)
async function copyToClipboard(text) {
  try {
    await navigator.clipboard.writeText(text);
    console.log('Copied!');
  } catch (err) {
    console.error('Copy failed:', err);
  }
}

// Read text from clipboard (requires permission)
async function readFromClipboard() {
  try {
    const text = await navigator.clipboard.readText();
    console.log('Clipboard:', text);
  } catch (err) {
    if (err.name === 'NotAllowedError') {
      console.log('Permission denied');
    }
  }
}

// Copy rich content (HTML + plain text)
async function copyRich(htmlContent, plainText) {
  await navigator.clipboard.write([
    new ClipboardItem({
      'text/html': new Blob([htmlContent], { type: 'text/html' }),
      'text/plain': new Blob([plainText], { type: 'text/plain' })
    })
  ]);
}

// Button click handler
document.querySelector('#copyBtn').addEventListener('click', () => {
  copyToClipboard('Hello World!');
});</code></pre>

The Clipboard API only works on <strong>HTTPS</strong> pages. On HTTP, <code>navigator.clipboard</code> is <code>undefined</code>.

<code>ClipboardItem</code> allows copying rich content in multiple formats at once — the OS picks the best format when pasting into different apps.`
                }
            ]
        },
        {
            id: "sets-maps",
            title: "Sets & Maps",
            icon: "bi-collection",
            questions: [
                {
                    q: "What is a Set in JavaScript?",
                    a: `A <strong>Set</strong> is a collection of <strong>unique values</strong> — it never holds duplicates. If you add a value that already exists, the Set simply ignores it. Sets can hold any type of value: primitives or objects.

Sets remember <strong>insertion order</strong> and are iterable (you can use <code>for...of</code> with them). They are useful for removing duplicates from an array, tracking visited items, and membership checks.

The main methods are <code>add()</code>, <code>has()</code>, <code>delete()</code>, <code>clear()</code>, and the <code>size</code> property (not <code>length</code>).

Here is how Set works:
<pre><code>const set = new Set([1, 2, 3, 2, 1]); // duplicates removed
console.log(set.size);   // 3
console.log(set);        // Set { 1, 2, 3 }

set.add(4);
set.add(2); // ignored — already exists
console.log(set.has(3)); // true
console.log(set.has(9)); // false

set.delete(1);
console.log(set.size);   // 3

// Remove duplicates from array
const arr = [1, 2, 2, 3, 3, 4];
const unique = [...new Set(arr)];
console.log(unique); // [1, 2, 3, 4]

// Iteration
for (const val of set) {
  console.log(val); // values in insertion order
}</code></pre>

Sets use <strong>SameValueZero</strong> comparison — similar to <code>===</code> but treats <code>+0</code> and <code>-0</code> as equal and <code>NaN</code> as equal to <code>NaN</code>.

Unlike arrays, Sets don't have a built-in <code>indexOf</code> or <code>includes</code> method — use <code>has()</code> instead, which is faster than searching an array.`
                },
                {
                    q: "What is a Map in JavaScript?",
                    a: `A <strong>Map</strong> is a collection of <strong>key-value pairs</strong> where <strong>any value can be a key</strong> — including objects, functions, and NaN. This is different from plain objects where keys must be strings or symbols.

Maps preserve <strong>insertion order</strong>, have a <code>size</code> property, and are directly iterable. They are often more efficient than objects for frequent additions and lookups.

The main methods are <code>set()</code>, <code>get()</code>, <code>has()</code>, <code>delete()</code>, and <code>clear()</code>.

Here is how Map works:
<pre><code>const map = new Map();

// Any type as key
map.set('string', 1);
map.set(42, 'number key');
map.set(true, 'boolean key');
const objKey = { id: 1 };
map.set(objKey, 'object key');

console.log(map.get('string'));   // 1
console.log(map.get(objKey));     // 'object key'
console.log(map.has(42));         // true
console.log(map.size);            // 4

map.delete(42);
console.log(map.size);            // 3

// Initialize from array of pairs
const map2 = new Map([
  ['name', 'Alice'],
  ['age', 30]
]);

// Iterate
for (const [key, value] of map2) {
  console.log(\&#96;\${key}: \${value}\&#96;);
}</code></pre>

Convert a Map to a plain object: <code>Object.fromEntries(map)</code>. Convert a plain object to a Map: <code>new Map(Object.entries(obj))</code>.

Maps are better than objects when: keys are not strings, key order matters, frequent add/delete operations happen, or you need to store metadata about objects.`
                },
                {
                    q: "What is the difference between Map and a plain object?",
                    a: `Plain objects only allow <strong>string or symbol keys</strong>. Maps allow <strong>any value</strong> as a key — objects, arrays, functions, NaN, and primitives of any type. This is the most fundamental difference.

Objects have a prototype chain — they inherit properties like <code>toString</code> and <code>constructor</code>. Maps have no inherited keys, so there are no accidental key collisions with built-in property names.

Maps have a <code>size</code> property (O(1) lookup), while getting an object's key count requires <code>Object.keys(obj).length</code>.

Here is a direct comparison:
<pre><code>// Object keys: only strings/symbols
const obj = {};
obj[1] = 'a';     // key becomes string '1'
obj[{}] = 'b';   // key becomes '[object Object]'
console.log(Object.keys(obj)); // ['1', '[object Object]']

// Map keys: any type
const map = new Map();
map.set(1, 'a');    // key is number 1
map.set({}, 'b');  // key is the actual object reference
map.set(NaN, 'c'); // even NaN works as key

// Prototype collision in object
const safe = {};
safe['constructor'] = 'oops'; // shadows Object.constructor!
// Map has no such issue:
const safeMap = new Map();
safeMap.set('constructor', 'safe'); // no problem

// Performance: Maps are faster for frequent add/delete
// Objects are faster for fixed keys with lots of accesses</code></pre>

Use a <strong>plain object</strong> when: keys are static strings, you need JSON serialization, or you need to pass to code expecting a normal object.

Use a <strong>Map</strong> when: keys are not strings, you need to know the count quickly, or you add/remove keys frequently.`
                },
                {
                    q: "What is a WeakSet?",
                    a: `A <strong>WeakSet</strong> is like a Set, but it can only hold <strong>objects</strong> (no primitives), and it holds them <strong>weakly</strong>. If an object in a WeakSet has no other references, it can be garbage collected — the WeakSet does not prevent that.

WeakSets are <strong>not iterable</strong> — you cannot loop over them or see their contents. They only support <code>add()</code>, <code>has()</code>, and <code>delete()</code>.

The main use case is tracking objects without preventing garbage collection — for example, marking which DOM nodes have been processed.

Here is how WeakSet works:
<pre><code>const processed = new WeakSet();

function process(element) {
  if (processed.has(element)) {
    console.log('Already processed');
    return;
  }
  // do work...
  processed.add(element);
  console.log('Processed');
}

const div = document.createElement('div');
process(div); // "Processed"
process(div); // "Already processed"

// When div is removed from DOM and no references remain,
// it can be garbage collected — WeakSet won't hold it alive

// WeakSet does NOT allow primitives
const ws = new WeakSet();
// ws.add(1); // TypeError: Invalid value used in weak set
ws.add({ id: 1 }); // OK

// Not iterable
// for (const item of ws) {} // TypeError</code></pre>

WeakSet is not a replacement for Set — it is specifically for the memory-sensitive use case where you need to associate metadata with objects without affecting their lifetime.

WeakSets automatically remove entries when the referenced object is garbage collected, avoiding memory leaks.`
                },
                {
                    q: "What is a WeakMap?",
                    a: `A <strong>WeakMap</strong> is like a Map, but keys must be <strong>objects</strong>, and the references are <strong>weak</strong> — if the key object has no other references, it and its value are garbage collected automatically.

WeakMaps are not iterable and have no <code>size</code> property. They only support <code>get()</code>, <code>set()</code>, <code>has()</code>, and <code>delete()</code>.

The key use case is associating private data or metadata with objects without preventing those objects from being garbage collected.

Here is how WeakMap works:
<pre><code>// Private data pattern using WeakMap
const privateData = new WeakMap();

class Person {
  constructor(name, age) {
    // Store private data keyed by the instance
    privateData.set(this, { name, age });
  }
  getName() {
    return privateData.get(this).name;
  }
  getAge() {
    return privateData.get(this).age;
  }
}

const alice = new Person('Alice', 30);
console.log(alice.getName()); // 'Alice'
// privateData.get(alice) — can only be accessed from class

// DOM node metadata (no memory leak)
const cache = new WeakMap();
function getOrCreate(node) {
  if (!cache.has(node)) {
    cache.set(node, { clicks: 0 });
  }
  return cache.get(node);
}
// When the DOM node is removed, its entry is cleaned up automatically</code></pre>

WeakMap is perfect for the <strong>private fields</strong> pattern — external code cannot access the WeakMap without a reference to the key object AND the WeakMap itself.

This is also how JavaScript class private fields (<code>#field</code>) effectively work under the hood in some implementations.`
                },
                {
                    q: "How do you iterate over a Map?",
                    a: `Maps have three built-in iterator methods: <code>map.keys()</code> (returns keys), <code>map.values()</code> (returns values), and <code>map.entries()</code> (returns <code>[key, value]</code> pairs). They also work directly with <code>for...of</code> which uses <code>entries()</code> by default.

Maps also have a <code>forEach()</code> method like arrays, with a slightly different argument order: <code>callback(value, key, map)</code>.

All iteration happens in <strong>insertion order</strong>.

Here are all the ways to iterate a Map:
<pre><code>const map = new Map([
  ['one', 1],
  ['two', 2],
  ['three', 3]
]);

// 1. for...of with destructuring (most common)
for (const [key, value] of map) {
  console.log(\&#96;\${key} = \${value}\&#96;);
}

// 2. forEach (note: value comes before key)
map.forEach((value, key) => {
  console.log(\&#96;\${key}: \${value}\&#96;);
});

// 3. keys(), values(), entries()
console.log([...map.keys()]);   // ['one', 'two', 'three']
console.log([...map.values()]); // [1, 2, 3]
console.log([...map.entries()]); // [['one',1],['two',2],['three',3]]

// 4. Spread into array of pairs
const pairs = [...map]; // same as [...map.entries()]</code></pre>

Note: in <code>forEach(callback)</code>, the callback receives <code>(value, key)</code> — value first, key second. This is opposite of what you might expect, but it is consistent with the Array forEach convention.

Iterating a Map is <strong>always in insertion order</strong>, which is a guarantee. Plain object key order is more complex and depends on key type.`
                },
                {
                    q: "How do you use Set for set operations (union, intersection, difference)?",
                    a: `JavaScript's <code>Set</code> does not have built-in methods for union, intersection, and difference, but they are easy to compute using spread and filtering.

<strong>Union</strong>: all unique elements from both sets. <strong>Intersection</strong>: elements that exist in both sets. <strong>Difference</strong>: elements in one set but not the other.

In modern JavaScript (ES2025+), Sets are getting built-in methods like <code>union()</code>, <code>intersection()</code>, <code>difference()</code>, and <code>symmetricDifference()</code> — check browser support before using them.

Here is how to implement set operations:
<pre><code>const a = new Set([1, 2, 3, 4]);
const b = new Set([3, 4, 5, 6]);

// Union: all items from both
const union = new Set([...a, ...b]);
console.log([...union]); // [1, 2, 3, 4, 5, 6]

// Intersection: only items in both
const intersection = new Set([...a].filter(x => b.has(x)));
console.log([...intersection]); // [3, 4]

// Difference (a - b): items in a but not b
const difference = new Set([...a].filter(x => !b.has(x)));
console.log([...difference]); // [1, 2]

// Symmetric difference: in one but not both
const symDiff = new Set(
  [...a, ...b].filter(x => !(a.has(x) && b.has(x)))
);
console.log([...symDiff]); // [1, 2, 5, 6]

// Is subset? (is a a subset of b?)
const isSubset = [...a].every(x => b.has(x));
console.log(isSubset); // false</code></pre>

Using <code>set.has(x)</code> is O(1) — much faster than <code>array.includes(x)</code> which is O(n). When doing intersection on large datasets, using a Set for membership checks is significantly faster.

These operations are useful in permissions systems, tag filtering, and comparing collections.`
                },
                {
                    q: "When should you use Map instead of a plain object?",
                    a: `Use <strong>Map</strong> when: you need <strong>non-string keys</strong> (like objects or numbers), you frequently add and remove keys, you need guaranteed iteration order, you need to know the count quickly via <code>size</code>, or you want no risk of prototype property collisions.

Use a <strong>plain object</strong> when: keys are static strings you know at compile time, you need JSON serialization (Map cannot be directly serialized), or you pass data to APIs expecting plain objects.

A common mistake is using an object when the keys are dynamic user-provided strings — this opens up prototype pollution attacks. Map is safer in such cases.

Here are the key decision points:
<pre><code>// Use Map when key type varies
const registry = new Map();
const btn = document.querySelector('button');
registry.set(btn, { clickCount: 0 });    // DOM node as key
registry.set(Symbol('unique'), 'data'); // Symbol key

// Use Map for dynamic keys (avoid prototype pollution)
// RISKY with object:
const obj = {};
obj['__proto__'] = { isAdmin: true }; // prototype pollution!
// SAFE with Map:
const map = new Map();
map.set('__proto__', 'harmless'); // just a normal string key

// Use plain object for structured data
const user = { name: 'Alice', age: 30 }; // clearly a data object
JSON.stringify(user); // works easily

// Map for frequency counting (common interview question)
function charFrequency(str) {
  const freq = new Map();
  for (const ch of str) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  return freq;
}
console.log(charFrequency('hello')); // Map { h:1, e:1, l:2, o:1 }</code></pre>

The character frequency pattern is very common in coding interviews. Maps make it clean and easy to read.

For small, fixed-shape data structures (config, user object), plain objects are simpler and more readable. Save Maps for dynamic collections.`
                },
                {
                    q: "How do Map and Set handle equality of keys/values?",
                    a: `Both Map and Set use <strong>SameValueZero</strong> algorithm for equality — it is similar to <code>===</code> with two exceptions: <code>NaN === NaN</code> is considered <strong>true</strong>, and <code>+0</code> and <code>-0</code> are considered <strong>equal</strong>.

This means you cannot have two entries with key <code>NaN</code> in a Map (it is treated as the same key). Similarly, a Set will not add <code>NaN</code> twice.

For <strong>objects</strong>, equality is by <strong>reference</strong> — two different objects with the same contents are considered different keys.

Here is SameValueZero in action:
<pre><code>// NaN handling
const set = new Set();
set.add(NaN);
set.add(NaN); // same as first, not added
console.log(set.size); // 1

const map = new Map();
map.set(NaN, 'found');
console.log(map.get(NaN)); // 'found'

// -0 and +0 treated as equal
set.add(+0);
set.add(-0); // treated as same as +0
console.log(set.size); // 2 (NaN and 0)

// Objects use reference equality
const obj1 = { id: 1 };
const obj2 = { id: 1 }; // same content but different reference
const objSet = new Set([obj1, obj2]);
console.log(objSet.size); // 2 — they are different objects!

const objMap = new Map();
objMap.set(obj1, 'first');
objMap.set(obj2, 'second'); // different key
console.log(objMap.size);   // 2</code></pre>

If you need to use objects as Map/Set keys and treat them as equal based on content, you would need to use a string representation as the key (like <code>JSON.stringify(obj)</code>) or a custom data structure.

This reference-equality behavior is why you often see patterns like <code>map.set(someObject, metadata)</code> — the object itself is a unique key tied to that specific instance.`
                },
                {
                    q: "How do you convert between Map and Array?",
                    a: `You can convert a Map to an array using <strong>spread</strong> (<code>[...map]</code>) or <code>Array.from(map)</code>. By default this gives an array of <code>[key, value]</code> pairs. Use <code>[...map.keys()]</code> or <code>[...map.values()]</code> for just keys or values.

Go the other way (array to Map) using <code>new Map(arrayOfPairs)</code> — the array must be an array of <code>[key, value]</code> pairs.

You can also convert a plain object to a Map via <code>Object.entries()</code>, and a Map back to an object with <code>Object.fromEntries()</code>.

Here is all the conversion methods:
<pre><code>const map = new Map([['a', 1], ['b', 2], ['c', 3]]);

// Map → Array of pairs
const pairs = [...map];         // [['a',1],['b',2],['c',3]]
const samePairs = Array.from(map); // same result

// Map → keys array
const keys = [...map.keys()];   // ['a', 'b', 'c']

// Map → values array
const vals = [...map.values()]; // [1, 2, 3]

// Array of pairs → Map
const map2 = new Map(pairs);

// Plain object → Map
const obj = { x: 10, y: 20 };
const fromObj = new Map(Object.entries(obj));
console.log(fromObj.get('x')); // 10

// Map → plain object
const backToObj = Object.fromEntries(map);
console.log(backToObj); // { a: 1, b: 2, c: 3 }

// JSON (Map → JSON requires conversion)
const json = JSON.stringify(Object.fromEntries(map));
const fromJson = new Map(Object.entries(JSON.parse(json)));</code></pre>

JSON does not natively support Maps — you must convert to an object first. This means Maps with non-string keys cannot be perfectly round-tripped through JSON.

The <code>Array.from(map)</code> method also accepts a mapping function as a second argument: <code>Array.from(map, ([k, v]) => v * 2)</code>.`
                },
                {
                    q: "What is the difference between Set and Array?",
                    a: `The main difference is that <strong>Sets only store unique values</strong>, while arrays can store duplicates. Sets also do not have <strong>index-based access</strong> — you cannot do <code>set[0]</code>. Arrays have a rich set of methods (map, filter, reduce) that Sets do not have natively.

Sets are much faster for <strong>membership checks</strong> (<code>has()</code> is O(1)) compared to arrays (<code>includes()</code> is O(n)). This makes Sets ideal for lookup tables and deduplication.

When you need ordered, indexed data with full array methods: use an array. When you need uniqueness and fast membership testing: use a Set.

Here is a comparison:
<pre><code>// Array: duplicates allowed, index access
const arr = [1, 2, 2, 3];
console.log(arr[0]);       // 1 (index access)
console.log(arr.includes(2)); // true (O(n))
arr.push(2);               // [1, 2, 2, 3, 2]

// Set: no duplicates, no index
const set = new Set([1, 2, 2, 3]);
// set[0]         — undefined (no index access)
console.log(set.has(2));   // true (O(1))
set.add(2);                // ignored, already exists

// Performance comparison (large dataset)
const bigArr = Array.from({length: 100000}, (_, i) => i);
const bigSet = new Set(bigArr);

console.time('array'); bigArr.includes(99999); console.timeEnd('array'); // slower
console.time('set');   bigSet.has(99999);  console.timeEnd('set');   // faster

// Set → Array when you need array methods
const setArr = [...set];
const doubled = setArr.map(x => x * 2); // [2, 4, 6]</code></pre>

Sets do not support array methods like <code>map</code>, <code>filter</code>, or <code>reduce</code> directly. Convert to array first, then use those methods.

For frequency counting (how many times each value appears), you need an array or Map — a Set only tells you if a value exists, not how many times.`
                },
                {
                    q: "How do WeakMap and WeakSet differ from Map and Set in terms of memory?",
                    a: `<strong>WeakMap</strong> and <strong>WeakSet</strong> hold <strong>weak references</strong> to their objects. This means the garbage collector can collect those objects even if they are still in the WeakMap/WeakSet — the weak reference does not count as "being in use."

Regular <strong>Map</strong> and <strong>Set</strong> hold <strong>strong references</strong> — as long as your Map/Set is alive, all objects stored in it stay in memory even if nothing else references them. This can cause <strong>memory leaks</strong> if you store DOM elements or objects that get removed elsewhere but remain in the Map.

WeakMap/WeakSet solve this memory leak problem at the cost of not being iterable.

Here is the memory difference:
<pre><code>// Memory LEAK risk with Map
const cache = new Map();
function process(element) {
  cache.set(element, { result: 'computed' });
}
// Even after DOM element is removed, cache keeps it alive!
// The element cannot be garbage collected.

// Safe with WeakMap — no memory leak
const safeCache = new WeakMap();
function safeProcess(element) {
  safeCache.set(element, { result: 'computed' });
}
// When element is removed from DOM,
// garbage collector can collect it + its WeakMap entry

// Demonstration of the difference
let obj = { data: 'large data' };
const regular = new Map([[obj, 'value']]);
const weak = new WeakMap([[obj, 'value']]);

obj = null; // remove strong reference

// regular Map still holds obj — cannot be GC'd
// WeakMap allows GC to collect obj if nothing else holds it</code></pre>

The trade-off is that WeakMap/WeakSet are <strong>not iterable</strong> and have no <code>size</code> property. You cannot see what is inside them — you can only check for specific keys.

Always use WeakMap when you are associating data with DOM elements or other objects whose lifetime you do not control, to prevent memory leaks.`
                },
                {
                    q: "How do you get the size of a Map vs an Object?",
                    a: `A Map has a built-in <strong><code>size</code> property</strong> that gives you the count in constant time O(1). Getting the size of a plain object requires <code>Object.keys(obj).length</code>, which creates a new array and is O(n).

For large collections that change frequently, Map's <code>size</code> is significantly more efficient since it is updated automatically with each <code>set()</code> and <code>delete()</code> call.

This is one of the practical performance reasons to prefer Map over Object for dynamic key collections.

Here is the comparison:
<pre><code>// Map has instant size
const map = new Map([['a', 1], ['b', 2], ['c', 3]]);
console.log(map.size); // 3 — O(1)

map.set('d', 4);
console.log(map.size); // 4 — automatically updated

map.delete('a');
console.log(map.size); // 3 — automatically updated

// Object requires creating a new array
const obj = { a: 1, b: 2, c: 3 };
console.log(Object.keys(obj).length);   // 3 — O(n), creates array
console.log(Object.values(obj).length); // 3 — same cost

// For Set
const set = new Set([1, 2, 3, 4]);
console.log(set.size); // 4 — O(1)

// Note: 'size' not 'length' for Map and Set
// Arrays use 'length', Maps/Sets use 'size'</code></pre>

Remember: <code>Object.keys()</code> only counts <strong>enumerable own properties</strong>. If you have non-enumerable properties, they won't be counted. Map's <code>size</code> counts everything.

The <code>size</code> property of Map and Set is read-only — you cannot set it directly.`
                },
                {
                    q: "How do you sort a Map by its values?",
                    a: `Maps do not have a built-in sort method. To sort a Map by values, convert it to an array of pairs, sort the array, then create a new Map from the sorted array.

Since Maps keep <strong>insertion order</strong>, a Map created from a sorted array will iterate in that sorted order.

This pattern is commonly used in coding interviews when counting frequencies and then sorting results.

Here is how to sort a Map by values:
<pre><code>const wordCount = new Map([
  ['banana', 3],
  ['apple', 7],
  ['cherry', 1],
  ['date', 5]
]);

// Sort by value (ascending)
const sortedAsc = new Map(
  [...wordCount].sort((a, b) => a[1] - b[1])
);
console.log([...sortedAsc]);
// [['cherry',1],['banana',3],['date',5],['apple',7]]

// Sort by value (descending)
const sortedDesc = new Map(
  [...wordCount].sort((a, b) => b[1] - a[1])
);
console.log([...sortedDesc.keys()]);
// ['apple','date','banana','cherry']

// Sort by key (alphabetically)
const sortedByKey = new Map(
  [...wordCount].sort((a, b) => a[0].localeCompare(b[0]))
);

// Common pattern: character frequency sorted by count
function topChars(str) {
  const freq = new Map();
  for (const ch of str) freq.set(ch, (freq.get(ch) || 0) + 1);
  return [...freq].sort((a, b) => b[1] - a[1]);
}
console.log(topChars('hello')); // [['l',2],['h',1],['e',1],['o',1]]</code></pre>

The spread <code>[...map]</code> converts the Map to an array of <code>[key, value]</code> pairs, which can then be sorted using the standard array <code>sort()</code> method.

The resulting sorted array is wrapped in <code>new Map()</code> to restore it as an iterable Map with defined order.`
                }
            ]
        },
        {
            id: "date-timers",
            title: "Date & Timers",
            icon: "bi-clock",
            questions: [
                {
                    q: "How do you create and work with dates in JavaScript?",
                    a: `The <strong><code>Date</code></strong> object is used to work with dates and times in JavaScript. You can create a Date using <code>new Date()</code> for the current time, or pass a date string, timestamp (milliseconds since epoch), or individual year/month/day values.

Months in JavaScript's Date are <strong>zero-indexed</strong> (0 = January, 11 = December) — this is a common source of off-by-one bugs.

The Date object stores time as <strong>Unix timestamp</strong> — milliseconds since January 1, 1970 UTC (the "epoch").

Here is how to create and read dates:
<pre><code>// Current date and time
const now = new Date();
console.log(now); // current date/time

// From timestamp (milliseconds since epoch)
const fromTs = new Date(0); // Jan 1, 1970 UTC
const ts = new Date(1700000000000); // a specific moment

// From string (timezone affects result — be careful!)
const d1 = new Date('2024-01-15');
const d2 = new Date('2024-01-15T09:30:00');

// From parts: new Date(year, monthIndex, day, hours, min, sec)
const d3 = new Date(2024, 0, 15); // Jan 15, 2024 (month is 0!)
const d4 = new Date(2024, 11, 25); // Dec 25, 2024

// Get individual components
const d = new Date('2024-06-15T14:30:00');
console.log(d.getFullYear()); // 2024
console.log(d.getMonth());    // 5 (June is 5!)
console.log(d.getDate());     // 15 (day of month)
console.log(d.getDay());      // day of week (0=Sun, 6=Sat)
console.log(d.getHours());    // 14
console.log(d.getTime());     // milliseconds since epoch</code></pre>

<code>getDate()</code> returns the <strong>day of the month</strong> (1–31). <code>getDay()</code> returns the <strong>day of the week</strong> (0–6). These are frequently confused.

For serious date manipulation in production code, use a library like <strong>date-fns</strong> or <strong>Luxon</strong> which handle timezones, locale, and formatting much better than the built-in Date object.`
                },
                {
                    q: "What is setTimeout and how does it work?",
                    a: `<code>setTimeout(callback, delay)</code> schedules a function to run <strong>at least</strong> <code>delay</code> milliseconds later. It is not exact — if the main thread is busy, the callback waits in the task queue until the call stack is empty.

It returns a <strong>timer ID</strong> that you can use with <code>clearTimeout(id)</code> to cancel the timer before it fires.

A delay of <code>0</code> does not run immediately — it schedules the callback to run after the current call stack finishes and any pending microtasks are processed.

Here is how setTimeout works:
<pre><code>// Basic usage
const id = setTimeout(() => {
  console.log('Runs after 1 second');
}, 1000);

// Cancel before it fires
clearTimeout(id);

// setTimeout with 0 delay — still asynchronous!
console.log('1');
setTimeout(() => console.log('3'), 0); // schedules for later
console.log('2');
// Output: 1, 2, 3  (not 1, 3, 2)

// Passing arguments to the callback
setTimeout((name, greeting) => {
  console.log(\&#96;\${greeting}, \${name}!\&#96;);
}, 500, 'Alice', 'Hello'); // extra args after delay

// Recursive setTimeout (more reliable than setInterval)
function poll() {
  fetchData().then(data => {
    processData(data);
    setTimeout(poll, 1000); // schedule next after work is done
  });
}</code></pre>

The minimum delay in browsers is typically <strong>4ms</strong> (enforced after 5 nested calls). Setting <code>0</code> effectively means "as soon as possible after current synchronous code."

In Node.js, <code>setImmediate()</code> runs after the current event loop iteration, which is similar to but different from <code>setTimeout(fn, 0)</code>.`
                },
                {
                    q: "What is setInterval and when should you avoid it?",
                    a: `<code>setInterval(callback, delay)</code> repeatedly calls the callback about every <code>delay</code> milliseconds. It returns an ID you can pass to <code>clearInterval(id)</code> to stop it.

The problem with <code>setInterval</code> is that it <strong>does not wait</strong> for the previous callback to finish. If your callback takes longer than the interval, multiple callbacks can pile up. This is called <strong>interval drift</strong>.

For reliable repeating tasks, prefer <strong>recursive setTimeout</strong> — it schedules the next call only after the current one finishes.

Here is setInterval and its alternatives:
<pre><code>// Basic setInterval
const id = setInterval(() => {
  console.log('Runs every second');
}, 1000);

// Stop after 5 seconds
setTimeout(() => clearInterval(id), 5000);

// PROBLEM: interval fires even if previous call is still running
setInterval(async () => {
  await fetch('/slow-api'); // takes 2 seconds
  console.log('done');
}, 1000); // fires every second, but fetch takes 2s — overlap!

// BETTER: recursive setTimeout waits for completion
function repeat() {
  fetch('/slow-api').then(() => {
    console.log('done');
    setTimeout(repeat, 1000); // schedule next AFTER done
  });
}
repeat();

// setInterval countdown
let count = 5;
const countdown = setInterval(() => {
  console.log(count--);
  if (count < 0) clearInterval(countdown);
}, 1000);</code></pre>

Always store the interval ID and call <code>clearInterval</code> when done — forgetting to clear intervals is a common cause of memory leaks in SPAs where components get destroyed but intervals keep running.

In React, clear intervals in the <code>useEffect</code> cleanup function; in Angular, clear them in <code>ngOnDestroy</code>.`
                },
                {
                    q: "What is requestAnimationFrame?",
                    a: `<code>requestAnimationFrame(callback)</code> schedules a function to run <strong>before the next screen repaint</strong> — typically about 60 times per second (matching the display's refresh rate). It is the correct way to build smooth animations.

Unlike <code>setInterval</code>, rAF automatically <strong>pauses when the tab is hidden</strong> to save battery, and it syncs with the actual display refresh rate rather than a fixed time interval.

The callback receives a <strong>DOMHighResTimeStamp</strong> argument with the current time in milliseconds.

Here is how requestAnimationFrame works:
<pre><code>// Basic animation loop
function animate(timestamp) {
  // Move element based on time elapsed
  const progress = timestamp / 10;
  element.style.transform = \&#96;translateX(\${progress % 500}px)\&#96;;

  // Schedule next frame
  requestAnimationFrame(animate);
}

const id = requestAnimationFrame(animate); // start

// Cancel animation
cancelAnimationFrame(id);

// Smooth fade-in animation
function fadeIn(element, duration = 1000) {
  const start = performance.now();
  function step(now) {
    const elapsed = now - start;
    element.style.opacity = Math.min(elapsed / duration, 1);
    if (elapsed < duration) {
      requestAnimationFrame(step); // continue until done
    }
  }
  requestAnimationFrame(step);
}

fadeIn(document.querySelector('.box'));</code></pre>

Use <code>performance.now()</code> (not <code>Date.now()</code>) inside rAF for high-precision timing — it gives sub-millisecond accuracy.

Never use <code>setInterval</code> for animations — it can cause dropped frames and janky movement. <code>requestAnimationFrame</code> is always the right choice for visual animations.`
                },
                {
                    q: "What is Date.now() and how is it different from new Date()?",
                    a: `<code>Date.now()</code> is a <strong>static method</strong> that returns the current time as a number — milliseconds since the Unix epoch (January 1, 1970 UTC). It is faster than <code>new Date().getTime()</code> because it does not create a Date object.

<code>new Date()</code> creates a <strong>Date object</strong> with methods for reading/formatting the date. When you only need a timestamp for timing or comparisons, <code>Date.now()</code> is simpler and cheaper.

For even higher precision timing (sub-millisecond), use <code>performance.now()</code>.

Here is the comparison:
<pre><code>// Date.now() — just a number, fast
const t1 = Date.now();
console.log(typeof t1); // "number"
console.log(t1);        // e.g. 1700000000000

// new Date() — full object with methods
const d = new Date();
console.log(d.getTime()); // same timestamp number
console.log(d.toISOString()); // "2024-01-15T09:30:00.000Z"

// Measure execution time
const start = Date.now();
// ... do some work ...
const elapsed = Date.now() - start;
console.log(\&#96;Took \${elapsed}ms\&#96;);

// Even better: performance.now() for precision
const perfStart = performance.now();
// ... work ...
const perfElapsed = performance.now() - perfStart;
console.log(\&#96;Took \${perfElapsed.toFixed(3)}ms\&#96;);

// Compare dates
const date1 = new Date('2024-01-01');
const date2 = new Date('2024-06-15');
const diff = date2 - date1; // automatic valueOf() → timestamp
console.log(\&#96;\${diff / (1000 * 60 * 60 * 24)} days\&#96;);</code></pre>

When you subtract two Date objects or compare them, JavaScript automatically calls <code>.valueOf()</code> which returns the timestamp number — that's why <code>date2 - date1</code> works.

<code>performance.now()</code> is better for measuring code performance because it is not affected by system clock changes (NTP adjustments, DST, etc.).`
                },
                {
                    q: "How do you format dates in JavaScript?",
                    a: `JavaScript has several built-in ways to format dates. The <strong>Intl.DateTimeFormat</strong> API is the most powerful — it handles localization, different calendar systems, and full format customization. Simpler methods like <code>toLocaleDateString()</code> and <code>toISOString()</code> cover common cases.

For production code, libraries like <strong>date-fns</strong> or <strong>Luxon</strong> provide cleaner formatting with timezone support.

<code>toISOString()</code> always returns a standardized format that is safe for storing and comparing dates.

Here are the main formatting methods:
<pre><code>const d = new Date('2024-06-15T14:30:00');

// Simple built-in methods
console.log(d.toISOString());       // "2024-06-15T14:30:00.000Z" (UTC)
console.log(d.toLocaleDateString()); // "6/15/2024" (locale-dependent)
console.log(d.toLocaleTimeString()); // "2:30:00 PM"
console.log(d.toLocaleString());     // "6/15/2024, 2:30:00 PM"

// Intl.DateTimeFormat (powerful, locale-aware)
const fmt = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
  weekday: 'long'
});
console.log(fmt.format(d)); // "Saturday, June 15, 2024"

// Different locale
new Intl.DateTimeFormat('de-DE').format(d); // "15.6.2024"
new Intl.DateTimeFormat('ja-JP').format(d); // "2024/6/15"

// With time
new Intl.DateTimeFormat('en-US', {
  dateStyle: 'medium',
  timeStyle: 'short',
  timeZone: 'America/New_York'
}).format(d); // "Jun 15, 2024, 10:30 AM"</code></pre>

<code>toISOString()</code> always outputs in UTC (Z timezone). If your date was created in local time, the ISO string will show a different time than what you set.

When working with multiple timezones, always store dates as UTC timestamps and convert to local time only when displaying to users.`
                },
                {
                    q: "What is the difference between UTC and local time in JavaScript?",
                    a: `JavaScript Date objects internally store time as <strong>UTC milliseconds</strong> since the Unix epoch. When you display a date, it converts to the <strong>browser's local timezone</strong> unless you explicitly request UTC.

Methods like <code>getHours()</code> return <strong>local time</strong>. Their UTC counterparts like <code>getUTCHours()</code> return time in UTC. This difference causes bugs when code runs in different timezones.

The golden rule is: store and compare dates as UTC timestamps; display them in local time using the Intl API.

Here is the UTC vs local difference:
<pre><code>// This creates a date at midnight UTC on Jan 15, 2024
const d = new Date('2024-01-15'); // ISO without time = UTC midnight

// In UTC-5 timezone (New York), this shows as Jan 14!
console.log(d.getDate());     // 14 (local time = Jan 14 at 7pm)
console.log(d.getUTCDate());  // 15 (UTC time = Jan 15 at 0am)

// To avoid timezone confusion, include time in string
const safe = new Date('2024-01-15T00:00:00'); // local midnight
const safeUtc = new Date('2024-01-15T00:00:00Z'); // UTC midnight

// UTC methods
const now = new Date();
console.log(now.getHours());     // local hours
console.log(now.getUTCHours());  // UTC hours

// Get timezone offset in minutes
console.log(now.getTimezoneOffset()); // e.g. 300 for UTC-5
// Negative = ahead of UTC, positive = behind UTC

// Display in specific timezone
new Intl.DateTimeFormat('en-US', {
  timeZone: 'America/New_York',
  dateStyle: 'short',
  timeStyle: 'short'
}).format(now);</code></pre>

Date strings without a timezone (like <code>"2024-01-15T09:00:00"</code>) are interpreted as <strong>local time</strong>. Strings ending in <code>Z</code> or with <code>+00:00</code> are UTC.

This timezone subtlety is one of the most common sources of date-related bugs in JavaScript — especially for date-only values (without times).`
                },
                {
                    q: "How do you calculate the difference between two dates?",
                    a: `Subtracting two Date objects gives the difference in <strong>milliseconds</strong>. Divide by the appropriate number to convert to seconds, minutes, hours, or days.

JavaScript's Date arithmetic is straightforward for simple cases. For complex calculations (months between dates, business days, etc.), use a date library.

Always be careful about daylight saving time (DST) transitions — a "day" is not always exactly 24 hours due to DST changes.

Here is how to calculate date differences:
<pre><code>const start = new Date('2024-01-01');
const end = new Date('2024-03-15');

const diffMs = end - start; // milliseconds
const diffSec = diffMs / 1000;
const diffMin = diffMs / (1000 * 60);
const diffHours = diffMs / (1000 * 60 * 60);
const diffDays = diffMs / (1000 * 60 * 60 * 24);

console.log(\&#96;\${Math.floor(diffDays)} days\&#96;); // 74 days

// Age calculator
function getAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
console.log(getAge(new Date('1990-06-15'))); // e.g. 34

// Days until a future date
function daysUntil(date) {
  const now = new Date();
  const diffMs = date - now;
  return Math.ceil(diffMs / (1000 * 60 * 60 * 24));
}
console.log(daysUntil(new Date('2025-01-01'))); // days until new year</code></pre>

<code>Math.ceil()</code> rounds up to get the number of full days remaining. Use <code>Math.floor()</code> to get complete days elapsed.

The age calculation adjusts for whether the birthday has occurred yet this year — without this check, the age would be off by one for part of the year.`
                },
                {
                    q: "What is debouncing and throttling?",
                    a: `<strong>Debouncing</strong> delays a function's execution until after a user has <strong>stopped doing something</strong> for a set time period. Each new event resets the timer. Use it for search inputs — you only want to fetch results after the user stops typing.

<strong>Throttling</strong> limits how often a function can fire — it ensures the function runs at most once per specified time interval regardless of how many times it is triggered. Use it for scroll and resize events.

Both use <code>setTimeout</code>/<code>clearTimeout</code> internally to control execution timing.

Here are implementations of both:
<pre><code>// DEBOUNCE — waits until user stops
function debounce(fn, delay) {
  let timer;
  return function(...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

const searchInput = document.querySelector('#search');
const handleSearch = debounce((e) => {
  fetch(\&#96;/api/search?q=\${e.target.value}\&#96;); // only fires after 300ms pause
}, 300);
searchInput.addEventListener('input', handleSearch);

// THROTTLE — fires at most once per interval
function throttle(fn, limit) {
  let lastCall = 0;
  return function(...args) {
    const now = Date.now();
    if (now - lastCall >= limit) {
      lastCall = now;
      return fn.apply(this, args);
    }
  };
}

const handleScroll = throttle(() => {
  console.log('Scroll position:', window.scrollY);
}, 100); // fires at most every 100ms
window.addEventListener('scroll', handleScroll);</code></pre>

Think of it this way: <strong>debounce</strong> = "wait until calm," <strong>throttle</strong> = "fire regularly but not too fast."

Both Lodash and Underscore.js have well-tested <code>debounce</code> and <code>throttle</code> implementations — prefer using them in production to avoid edge cases.`
                },
                {
                    q: "How does JavaScript handle timer delays accurately?",
                    a: `JavaScript timers (<code>setTimeout</code>, <code>setInterval</code>) are <strong>not precise</strong>. The delay parameter is a <strong>minimum</strong> — the actual callback may run later if the main thread is busy.

In browsers, nested timers (more than 5 levels deep) are clamped to a minimum of <strong>4ms</strong>. Tabs that are backgrounded may have timers clamped to <strong>1000ms</strong> to save battery.

For precise timing, use <code>performance.now()</code> inside the callback to measure actual elapsed time and adjust behavior accordingly.

Here is how timer inaccuracy shows up:
<pre><code>// Timer may not fire exactly on time
const start = performance.now();
setTimeout(() => {
  const actual = performance.now() - start;
  console.log(\&#96;Expected 100ms, got \${actual.toFixed(2)}ms\&#96;);
  // Could be 102ms, 105ms, etc. depending on CPU load
}, 100);

// Self-correcting interval (adjusts for drift)
function accurateInterval(fn, delay) {
  let expected = Date.now() + delay;
  function step() {
    const drift = Date.now() - expected;
    fn();
    expected += delay;
    setTimeout(step, Math.max(0, delay - drift)); // compensate
  }
  setTimeout(step, delay);
}

// Use performance.now() for high-precision measurement
let last = performance.now();
function loop(now) {
  const delta = now - last;
  last = now;
  console.log(\&#96;Frame took \${delta.toFixed(2)}ms\&#96;);
  requestAnimationFrame(loop); // rAF is more accurate for animation
}</code></pre>

The <strong>minimum 4ms clamping</strong> applies after 5 nested <code>setTimeout</code> calls. This prevents infinite fast-firing timers from spinning the CPU.

<code>requestAnimationFrame</code> is more reliable for animations than <code>setInterval</code> because it syncs with the actual display refresh and is not affected by the 4ms clamp.`
                },
                {
                    q: "What is the Intl API in JavaScript?",
                    a: `The <strong>Intl</strong> (Internationalization) API provides locale-aware formatting for dates, numbers, currencies, and string sorting. It uses the host system's locale data and the CLDR (Unicode Common Locale Data Repository).

Key classes: <code>Intl.DateTimeFormat</code> (dates/times), <code>Intl.NumberFormat</code> (numbers/currency), <code>Intl.Collator</code> (string comparison), and <code>Intl.RelativeTimeFormat</code> (relative time like "2 days ago").

The Intl API supports hundreds of locales and is much better than manually writing formatting code.

Here is how the Intl API works:
<pre><code>// Format numbers
const numFmt = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD'
});
console.log(numFmt.format(1234567.89)); // "$1,234,567.89"

new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR' })
  .format(1234.56); // "1.234,56 €"

// Relative time ("2 days ago")
const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
console.log(rtf.format(-1, 'day'));  // "yesterday"
console.log(rtf.format(-3, 'day'));  // "3 days ago"
console.log(rtf.format(2, 'week')); // "in 2 weeks"

// Locale-aware string sorting
const fruits = ['banana', 'Äpfel', 'cherry'];
const sorted = fruits.sort(new Intl.Collator('de').compare);

// List formatting
const listFmt = new Intl.ListFormat('en', { style: 'long', type: 'conjunction' });
console.log(listFmt.format(['Alice', 'Bob', 'Charlie']));
// "Alice, Bob, and Charlie"</code></pre>

The Intl API is available in all modern browsers and Node.js. Always prefer it over manual formatting — it handles edge cases like RTL languages, different numeral systems, and unusual date formats automatically.

<code>Intl.RelativeTimeFormat</code> is extremely useful for social media-style timestamps ("posted 3 hours ago") without needing a third-party library.`
                },
                {
                    q: "How do you handle timers in cleanup functions?",
                    a: `Always <strong>clear timers</strong> when a component unmounts or a module is destroyed. Not clearing timers is one of the most common memory leaks in JavaScript — the timer keeps firing and may reference state or elements that no longer exist.

In <strong>React</strong>, return a cleanup function from <code>useEffect</code> that calls <code>clearTimeout</code> or <code>clearInterval</code>. In <strong>Angular</strong>, clear timers in <code>ngOnDestroy</code>. In <strong>plain JavaScript</strong>, clear them when you are done with the component.

This also applies to <code>requestAnimationFrame</code> — always call <code>cancelAnimationFrame</code> when stopping animations.

Here is proper timer cleanup:
<pre><code>// React cleanup example
useEffect(() => {
  const timer = setTimeout(() => {
    setMessage('Welcome back!');
  }, 3000);

  // Cleanup runs when component unmounts
  return () => clearTimeout(timer);
}, []);

// setInterval cleanup
useEffect(() => {
  const interval = setInterval(() => {
    setCount(c => c + 1);
  }, 1000);

  return () => clearInterval(interval);
}, []);

// requestAnimationFrame cleanup
useEffect(() => {
  let rafId;
  function loop() {
    draw();
    rafId = requestAnimationFrame(loop);
  }
  rafId = requestAnimationFrame(loop);
  return () => cancelAnimationFrame(rafId);
}, []);

// Vanilla JS (e.g., in a web component)
class MyComponent extends HTMLElement {
  connectedCallback() {
    this.timer = setInterval(() => this.update(), 1000);
  }
  disconnectedCallback() {
    clearInterval(this.timer); // always clean up!
  }
}</code></pre>

Forgetting to clear intervals in React SPAs is especially dangerous — when a user navigates away, the component unmounts but the interval keeps calling <code>setState</code> on an unmounted component, causing "Can't perform a React state update on an unmounted component" warnings.

Always think of timers as resources that need to be <strong>explicitly freed</strong>, just like closing a file or database connection.`
                },
                {
                    q: "What is queueMicrotask() and how is it different from setTimeout?",
                    a: `<code>queueMicrotask(callback)</code> schedules a function to run as a <strong>microtask</strong> — after the current JavaScript finishes and before the next macro-task (like a timer or I/O callback). This is the same queue used by resolved Promises.

<code>setTimeout(fn, 0)</code> schedules a <strong>macro-task</strong> which always runs after all pending microtasks. This means <code>queueMicrotask</code> callbacks run before <code>setTimeout</code> callbacks even with a 0 delay.

Use <code>queueMicrotask</code> when you need to defer work until after the current synchronous code, but before any timers or I/O.

Here is the execution order:
<pre><code>console.log('1 - sync');

setTimeout(() => console.log('4 - setTimeout(0)'), 0);

Promise.resolve().then(() => console.log('3 - promise'));

queueMicrotask(() => console.log('2 - queueMicrotask'));

console.log('5 - sync end');

// Wait -- the output order:
// 1 - sync
// 5 - sync end
// 2 - queueMicrotask     ← microtask queue
// 3 - promise            ← also microtask queue
// 4 - setTimeout(0)      ← macro-task queue

// Use case: batching DOM updates
function batchUpdate() {
  changes.push(newChange);
  if (changes.length === 1) {
    // Schedule one flush after all sync changes are queued
    queueMicrotask(() => {
      applyAllChanges(changes);
      changes = [];
    });
  }
}</code></pre>

<code>queueMicrotask</code> is available in all modern browsers and Node.js 11+. It is preferred over <code>Promise.resolve().then()</code> for scheduling microtasks because it communicates intent more clearly.

Microtasks are processed until the queue is empty before yielding to the next macro-task — so be careful not to create infinite microtask loops.`
                },
                {
                    q: "How do you add and subtract dates in JavaScript?",
                    a: `JavaScript's Date object does not have built-in add/subtract methods, but you can manipulate dates by using the get/set methods or by adding/subtracting milliseconds from a timestamp.

The safest approach is to use the <code>set*</code> methods (like <code>setDate()</code>, <code>setMonth()</code>) which correctly handle <strong>overflow</strong> — for example, adding 1 month to January 31st naturally moves to February 28th or 29th.

For complex date arithmetic, use <strong>date-fns</strong> or <strong>Luxon</strong> to avoid edge cases.

Here is how to add and subtract dates:
<pre><code>// Add days using setDate (handles month overflow)
const d = new Date('2024-01-30');
d.setDate(d.getDate() + 5); // add 5 days
console.log(d.toDateString()); // "Sat Feb 03 2024" (wrapped to Feb)

// Add months
const d2 = new Date('2024-01-15');
d2.setMonth(d2.getMonth() + 3); // add 3 months
console.log(d2.toDateString()); // "Mon Apr 15 2024"

// Add hours using milliseconds
const d3 = new Date();
const inTwoHours = new Date(d3.getTime() + 2 * 60 * 60 * 1000);

// Non-destructive add (creates new Date)
function addDays(date, days) {
  const result = new Date(date);
  result.setDate(result.getDate() + days);
  return result;
}

const tomorrow = addDays(new Date(), 1);
const nextWeek = addDays(new Date(), 7);
const lastWeek = addDays(new Date(), -7); // subtract uses negative

console.log(tomorrow.toDateString());
console.log(nextWeek.toDateString());</code></pre>

Always create a <strong>copy</strong> of the date before modifying it (<code>new Date(originalDate)</code>) unless you want to mutate the original. Date's <code>set*</code> methods mutate in place.

Adding months can produce unexpected results when the source day doesn't exist in the target month. For example, adding 1 month to March 31 gives May 1 (not April 30) — date-fns handles this more predictably.`
                }
            ]
        }
    ]
};
