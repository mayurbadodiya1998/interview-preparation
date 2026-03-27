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
                    a: `<p><strong>var</strong> is function-scoped and hoisted. <strong>let</strong> is block-scoped and not accessible before declaration. <strong>const</strong> is block-scoped and must be initialized at declaration — it cannot be reassigned.</p>
<pre><code>var a = 1;   // function-scoped, hoisted
let b = 2;   // block-scoped, TDZ applies
const c = 3; // block-scoped, cannot reassign

if (true) {
  var x = 10;   // accessible outside block
  let y = 20;   // NOT accessible outside block
}
console.log(x); // 10
console.log(y); // ReferenceError</code></pre>`
                },
                {
                    q: "What are the primitive data types in JavaScript?",
                    a: `<p>JavaScript has 7 primitive types: <strong>string</strong>, <strong>number</strong>, <strong>boolean</strong>, <strong>undefined</strong>, <strong>null</strong>, <strong>symbol</strong>, and <strong>bigint</strong>. Primitives are immutable and compared by value.</p>
<pre><code>typeof "hello"    // "string"
typeof 42         // "number"
typeof true       // "boolean"
typeof undefined  // "undefined"
typeof null       // "object" (historical bug)
typeof Symbol()   // "symbol"
typeof 10n        // "bigint"</code></pre>`
                },
                {
                    q: "How does the typeof operator work and what are its quirks?",
                    a: `<p><code>typeof</code> returns a string indicating the type of the operand. It has a well-known quirk: <code>typeof null</code> returns <code>"object"</code> instead of <code>"null"</code>. Also, <code>typeof</code> on an undeclared variable returns <code>"undefined"</code> instead of throwing.</p>
<pre><code>typeof undefined   // "undefined"
typeof null        // "object" (bug)
typeof NaN         // "number"
typeof function(){} // "function"
typeof []          // "object"
typeof undeclared  // "undefined" (no error)</code></pre>`
                },
                {
                    q: "What is the difference between null and undefined?",
                    a: `<p><strong>undefined</strong> means a variable has been declared but not assigned a value. <strong>null</strong> is an intentional assignment representing "no value." They are loosely equal but not strictly equal.</p>
<pre><code>let a;
console.log(a);        // undefined
let b = null;
console.log(b);        // null

console.log(null == undefined);  // true
console.log(null === undefined); // false
console.log(typeof null);       // "object"
console.log(typeof undefined);  // "undefined"</code></pre>`
                },
                {
                    q: "What is NaN and how do you check for it?",
                    a: `<p><strong>NaN</strong> stands for "Not-a-Number" but its type is <code>number</code>. It is the only value in JavaScript that is not equal to itself. Use <code>Number.isNaN()</code> for reliable checking — the global <code>isNaN()</code> coerces its argument first.</p>
<pre><code>console.log(typeof NaN);       // "number"
console.log(NaN === NaN);      // false
console.log(NaN == NaN);       // false

console.log(isNaN("hello"));        // true (coerces string)
console.log(Number.isNaN("hello")); // false (strict check)
console.log(Number.isNaN(NaN));     // true</code></pre>`
                },
                {
                    q: "What is BigInt and when would you use it?",
                    a: `<p><strong>BigInt</strong> allows representation of integers larger than <code>Number.MAX_SAFE_INTEGER</code> (2^53 - 1). Create one by appending <code>n</code> to an integer or using <code>BigInt()</code>. BigInt cannot be mixed with regular numbers in arithmetic without explicit conversion.</p>
<pre><code>const big = 9007199254740993n;
const also = BigInt("9007199254740993");

console.log(big + 1n);      // 9007199254740994n
// console.log(big + 1);    // TypeError: Cannot mix BigInt and other types
console.log(big + BigInt(1)); // 9007199254740994n
console.log(typeof big);     // "bigint"</code></pre>`
                },
                {
                    q: "What is Symbol and what is it used for?",
                    a: `<p><strong>Symbol</strong> creates a unique, immutable identifier. Symbols are often used as object property keys to avoid name collisions. <code>Symbol.for()</code> creates shared symbols in a global registry.</p>
<pre><code>const s1 = Symbol("id");
const s2 = Symbol("id");
console.log(s1 === s2); // false (always unique)

const obj = { [s1]: "value" };
console.log(obj[s1]); // "value"

// Global registry
const g1 = Symbol.for("app.id");
const g2 = Symbol.for("app.id");
console.log(g1 === g2); // true</code></pre>`
                },
                {
                    q: "How do you reliably check the type of a value in JavaScript?",
                    a: `<p>Use <code>typeof</code> for primitives, <code>Array.isArray()</code> for arrays, <code>instanceof</code> for class instances, and <code>Object.prototype.toString.call()</code> for the most reliable check across all types.</p>
<pre><code>typeof "str"            // "string"
Array.isArray([1, 2])   // true
new Date() instanceof Date // true

// Most reliable approach
Object.prototype.toString.call(null)      // "[object Null]"
Object.prototype.toString.call([])        // "[object Array]"
Object.prototype.toString.call(new Date()) // "[object Date]"</code></pre>`
                },
                {
                    q: "Why can you modify properties of a const object?",
                    a: `<p><code>const</code> prevents reassignment of the variable binding, not mutation of the value. Objects and arrays assigned to <code>const</code> can still have their contents modified. Use <code>Object.freeze()</code> for shallow immutability.</p>
<pre><code>const obj = { name: "Alice" };
obj.name = "Bob";   // Allowed — mutating the object
// obj = {};        // TypeError — reassigning the binding

const arr = [1, 2, 3];
arr.push(4);         // Allowed
// arr = [];         // TypeError

const frozen = Object.freeze({ x: 1 });
frozen.x = 2;       // Silently fails (strict mode: TypeError)
console.log(frozen.x); // 1</code></pre>`
                },
                {
                    q: "How does type conversion (coercion) work in JavaScript?",
                    a: `<p>JavaScript performs <strong>implicit coercion</strong> automatically (e.g., in <code>==</code> or <code>+</code>) and supports <strong>explicit conversion</strong> via <code>String()</code>, <code>Number()</code>, <code>Boolean()</code>. The <code>+</code> operator prefers string concatenation when one operand is a string.</p>
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
parseInt("10px") // 10</code></pre>`
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
                    a: `<p><strong>Function declarations</strong> are hoisted entirely — you can call them before they appear in code. <strong>Function expressions</strong> assign a function to a variable and are not hoisted (the variable is hoisted but is undefined until assignment).</p>
<pre><code>// Declaration — hoisted
greet(); // "Hello"
function greet() { return "Hello"; }

// Expression — NOT hoisted
// sayHi(); // TypeError: sayHi is not a function
const sayHi = function() { return "Hi"; };
sayHi(); // "Hi"</code></pre>`
                },
                {
                    q: "How do arrow functions differ from regular functions?",
                    a: `<p>Arrow functions have a shorter syntax, do not have their own <code>this</code> (they inherit from the enclosing scope), cannot be used as constructors, and do not have the <code>arguments</code> object.</p>
<pre><code>const obj = {
  name: "Alice",
  regular: function() { return this.name; },   // "Alice"
  arrow: () =&gt; this.name                        // undefined (inherits outer this)
};

// No arguments object
const fn = (...args) =&gt; args; // use rest params instead

// Cannot use as constructor
// const F = () =&gt; {};
// new F(); // TypeError</code></pre>`
                },
                {
                    q: "What is an IIFE (Immediately Invoked Function Expression)?",
                    a: `<p>An <strong>IIFE</strong> is a function that is defined and executed immediately. It creates a private scope, preventing variable pollution of the outer scope. Common in module patterns before ES6 modules.</p>
<pre><code>(function() {
  const secret = "hidden";
  console.log(secret); // "hidden"
})();
// console.log(secret); // ReferenceError

// With parameters
const result = (function(x, y) {
  return x + y;
})(3, 4);
console.log(result); // 7</code></pre>`
                },
                {
                    q: "How does the scope chain work in JavaScript?",
                    a: `<p>When a variable is referenced, JavaScript looks it up in the current scope first, then moves outward through each enclosing scope until it reaches the global scope. This chain of scopes is called the <strong>scope chain</strong>.</p>
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
outer();</code></pre>`
                },
                {
                    q: "How do default parameters work in JavaScript?",
                    a: `<p>Default parameters allow you to set fallback values when arguments are <code>undefined</code> or not provided. They are evaluated at call time and can reference earlier parameters.</p>
<pre><code>function greet(name = "World", greeting = "Hello") {
  return \`\${greeting}, \${name}!\`;
}
greet();            // "Hello, World!"
greet("Alice");     // "Hello, Alice!"

// Can reference earlier params
function calc(a, b = a * 2) {
  return a + b;
}
calc(3);    // 9 (b defaults to 6)
calc(3, 5); // 8</code></pre>`
                },
                {
                    q: "What are rest parameters and how do they work?",
                    a: `<p><strong>Rest parameters</strong> (<code>...args</code>) collect all remaining arguments into a real array. Unlike the <code>arguments</code> object, rest parameters are a true <code>Array</code> with all array methods. They must be the last parameter.</p>
<pre><code>function sum(...numbers) {
  return numbers.reduce((acc, n) =&gt; acc + n, 0);
}
sum(1, 2, 3); // 6

function log(level, ...messages) {
  messages.forEach(msg =&gt; console.log(\`[\${level}] \${msg}\`));
}
log("INFO", "Start", "Processing");
// [INFO] Start
// [INFO] Processing</code></pre>`
                },
                {
                    q: "How does function hoisting work?",
                    a: `<p>Function <strong>declarations</strong> are fully hoisted — both the name and the body are available before the declaration line. Function <strong>expressions</strong> and <strong>arrow functions</strong> assigned to <code>let</code>/<code>const</code> are in the TDZ until their line is reached.</p>
<pre><code>// Declaration — fully hoisted
console.log(add(2, 3)); // 5
function add(a, b) { return a + b; }

// Expression with var — variable hoisted as undefined
// console.log(sub(5, 2)); // TypeError: sub is not a function
var sub = function(a, b) { return a - b; };

// Expression with const — TDZ
// console.log(mul(2, 3)); // ReferenceError
const mul = (a, b) =&gt; a * b;</code></pre>`
                },
                {
                    q: "What are callbacks and how are they used?",
                    a: `<p>A <strong>callback</strong> is a function passed as an argument to another function, to be invoked later. Callbacks enable asynchronous patterns and are fundamental to event handling, array methods, and Node.js APIs.</p>
<pre><code>function fetchData(callback) {
  setTimeout(() =&gt; {
    callback(null, { id: 1, name: "Alice" });
  }, 1000);
}

fetchData((err, data) =&gt; {
  if (err) return console.error(err);
  console.log(data); // { id: 1, name: "Alice" }
});

// Array callback
[1, 2, 3].map(n =&gt; n * 2); // [2, 4, 6]</code></pre>`
                },
                {
                    q: "What are higher-order functions?",
                    a: `<p>A <strong>higher-order function</strong> either takes a function as an argument, returns a function, or both. Common examples include <code>map</code>, <code>filter</code>, <code>reduce</code>, and custom function factories.</p>
<pre><code>// Takes a function
[1, 2, 3].filter(n =&gt; n &gt; 1); // [2, 3]

// Returns a function
function multiplier(factor) {
  return (num) =&gt; num * factor;
}
const double = multiplier(2);
console.log(double(5)); // 10

// Both
function compose(f, g) {
  return (x) =&gt; f(g(x));
}
const addOneThenDouble = compose(double, x =&gt; x + 1);
console.log(addOneThenDouble(3)); // 8</code></pre>`
                },
                {
                    q: "What is a pure function?",
                    a: `<p>A <strong>pure function</strong> always returns the same output for the same inputs and has no side effects (no mutation of external state, no I/O). Pure functions are predictable, testable, and easy to reason about.</p>
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

// Pure version
function addItemPure(arr, item) {
  return [...arr, item]; // returns new array
}</code></pre>`
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
                    a: `<p>A <strong>closure</strong> is a function that retains access to the variables of its outer (enclosing) scope, even after the outer function has returned. Every function in JavaScript forms a closure over the scope in which it was created.</p>
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
                    a: `<p>Closures are commonly used to create function factories — functions that generate customized functions based on parameters.</p>
<pre><code>function createGreeter(greeting) {
  return function(name) {
    return \`\${greeting}, \${name}!\`;
  };
}

const hello = createGreeter("Hello");
const hola = createGreeter("Hola");

console.log(hello("Alice")); // "Hello, Alice!"
console.log(hola("Bob"));    // "Hola, Bob!"</code></pre>`
                },
                {
                    q: "What is the classic closure problem with loops?",
                    a: `<p>Using <code>var</code> in a loop with asynchronous callbacks causes all callbacks to share the same variable. Since <code>var</code> is function-scoped, the loop variable has its final value by the time callbacks execute. Fix this with <code>let</code> (block-scoped) or an IIFE.</p>
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
                    a: `<p>Closures allow you to emulate private variables by enclosing data within a function scope, exposing only controlled access through returned methods.</p>
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
                    a: `<p>The <strong>module pattern</strong> uses an IIFE and closures to create a private scope with public methods. It was a popular way to organize code before ES6 modules.</p>
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
// console.log(result); // ReferenceError</code></pre>`
                },
                {
                    q: "How do closures affect memory?",
                    a: `<p>Closures keep references to outer scope variables alive, preventing garbage collection as long as the closure exists. This can lead to <strong>memory leaks</strong> if closures unintentionally retain large objects or DOM references. Set references to <code>null</code> when no longer needed.</p>
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
                    a: `<p>A counter closure encapsulates a count variable and returns functions to manipulate it, keeping the count private and persistent across calls.</p>
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
                    a: `<p><strong>Debounce</strong> delays a function call until a specified time has passed without further invocations. Closures hold the timer reference between calls.</p>
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
                    a: `<p>Closures allow event handlers to access variables from their enclosing scope, enabling stateful behavior without global variables.</p>
<pre><code>function setupButton(buttonId, message) {
  const button = document.getElementById(buttonId);
  let clickCount = 0;

  button.addEventListener("click", function() {
    clickCount++;
    console.log(\`\${message} — clicked \${clickCount} times\`);
  });
  // The handler closes over message and clickCount
}

setupButton("btn1", "Save");
setupButton("btn2", "Delete");
// Each button maintains its own clickCount</code></pre>`
                },
                {
                    q: "How do closures enable data encapsulation?",
                    a: `<p>Closures encapsulate data by restricting direct access to variables, exposing only controlled interfaces. This enforces invariants and prevents unintended modifications.</p>
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
// stack.items — undefined (encapsulated)</code></pre>`
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
                    a: `<p>Every JavaScript object has an internal <code>[[Prototype]]</code> link to another object. When accessing a property, the engine searches the object first, then its prototype, then the prototype's prototype, until it reaches <code>null</code>. This linked series is the <strong>prototype chain</strong>.</p>
<pre><code>const animal = { eats: true };
const dog = Object.create(animal);
dog.barks = true;

console.log(dog.barks); // true (own property)
console.log(dog.eats);  // true (found on prototype)
console.log(dog.flies); // undefined (not in chain)</code></pre>`
                },
                {
                    q: "What is __proto__ and how does it relate to prototype?",
                    a: `<p><code>__proto__</code> is the accessor property on objects that points to their prototype. <code>prototype</code> is a property on constructor functions used to set the <code>__proto__</code> of instances. Use <code>Object.getPrototypeOf()</code> instead of <code>__proto__</code> in modern code.</p>
<pre><code>function Person(name) { this.name = name; }
Person.prototype.greet = function() { return "Hi, " + this.name; };

const p = new Person("Alice");
console.log(p.__proto__ === Person.prototype);        // true
console.log(Object.getPrototypeOf(p) === Person.prototype); // true
console.log(p.greet()); // "Hi, Alice"</code></pre>`
                },
                {
                    q: "How does Object.create() work?",
                    a: `<p><code>Object.create(proto)</code> creates a new object with its <code>[[Prototype]]</code> set to the given object. It enables prototypal inheritance without using constructors or classes.</p>
<pre><code>const vehicle = {
  start() { return \`\${this.type} started\`; }
};

const car = Object.create(vehicle);
car.type = "Car";
console.log(car.start()); // "Car started"

// Create with property descriptors
const bike = Object.create(vehicle, {
  type: { value: "Bike", writable: true }
});
console.log(bike.start()); // "Bike started"</code></pre>`
                },
                {
                    q: "How does ES6 class syntax work?",
                    a: `<p>ES6 <code>class</code> is syntactic sugar over prototype-based inheritance. It provides a cleaner syntax for constructors, methods, static members, and getters/setters, but under the hood uses prototypes.</p>
<pre><code>class Animal {
  constructor(name) {
    this.name = name;
  }
  speak() {
    return \`\${this.name} makes a sound\`;
  }
  static create(name) {
    return new Animal(name);
  }
}

const a = new Animal("Dog");
console.log(a.speak());        // "Dog makes a sound"
console.log(typeof Animal);   // "function" (still a function)</code></pre>`
                },
                {
                    q: "How does extends work for class inheritance?",
                    a: `<p><code>extends</code> creates a subclass that inherits from a parent class. The child class can override methods and add new ones. The prototype chain is set up automatically.</p>
<pre><code>class Animal {
  constructor(name) { this.name = name; }
  speak() { return \`\${this.name} makes a sound\`; }
}

class Dog extends Animal {
  speak() { return \`\${this.name} barks\`; }
  fetch(item) { return \`\${this.name} fetches \${item}\`; }
}

const d = new Dog("Rex");
console.log(d.speak());       // "Rex barks"
console.log(d.fetch("ball")); // "Rex fetches ball"
console.log(d instanceof Animal); // true</code></pre>`
                },
                {
                    q: "What does the super keyword do?",
                    a: `<p><code>super()</code> calls the parent class constructor — required in a child constructor before using <code>this</code>. <code>super.method()</code> calls a parent method by name, allowing you to extend rather than fully override behavior.</p>
<pre><code>class Shape {
  constructor(color) { this.color = color; }
  describe() { return \`A \${this.color} shape\`; }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color); // must call before using this
    this.radius = radius;
  }
  describe() {
    return \`\${super.describe()} with radius \${this.radius}\`;
  }
}

const c = new Circle("red", 5);
console.log(c.describe()); // "A red shape with radius 5"</code></pre>`
                },
                {
                    q: "How does the instanceof operator work?",
                    a: `<p><code>instanceof</code> checks whether an object's prototype chain includes the <code>prototype</code> property of a constructor. It walks up the chain and returns <code>true</code> if found.</p>
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
                    a: `<p><code>hasOwnProperty()</code> returns <code>true</code> only if the property exists directly on the object, not inherited through the prototype chain. It is essential for distinguishing own vs inherited properties, especially in <code>for...in</code> loops.</p>
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
                    a: `<p><strong>Mixins</strong> allow you to add functionality from multiple sources to a class since JavaScript only supports single inheritance. Use <code>Object.assign()</code> to copy methods onto a class prototype.</p>
<pre><code>const Serializable = {
  serialize() { return JSON.stringify(this); }
};

const Loggable = {
  log() { console.log(\`[\${this.constructor.name}]\`, this); }
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
                    a: `<p><strong>Classical inheritance</strong> (Java, C++) uses classes as blueprints to create instances. <strong>Prototypal inheritance</strong> (JavaScript) has objects that directly inherit from other objects — there are no true classes, only objects linked via prototype chains. ES6 <code>class</code> is syntax sugar over prototypal inheritance.</p>
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
// Person.prototype.greet exists on the prototype</code></pre>`
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
                    a: `<p>A <strong>Promise</strong> is an object representing the eventual completion or failure of an asynchronous operation. It provides a cleaner alternative to nested callbacks for handling async code.</p>
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
                    a: `<p>A Promise is always in one of three states: <strong>pending</strong> (initial state, neither fulfilled nor rejected), <strong>fulfilled</strong> (operation completed successfully), or <strong>rejected</strong> (operation failed). Once settled (fulfilled or rejected), it cannot change state.</p>
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
                    a: `<p><code>then()</code> handles fulfilled values, <code>catch()</code> handles rejections, and <code>finally()</code> runs regardless of the outcome. Each returns a new Promise, enabling chaining.</p>
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
                    a: `<p><code>Promise.all()</code> takes an array of promises and returns a single promise that resolves with an array of all results when every promise fulfills. It <strong>rejects immediately</strong> if any single promise rejects.</p>
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
                    a: `<p><code>Promise.race()</code> returns a promise that settles as soon as the <strong>first</strong> promise settles (fulfills or rejects). Useful for timeouts or picking the fastest response.</p>
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
  .catch(err =&gt; console.log(err)); // "Timeout!" if too slow</code></pre>`
                },
                {
                    q: "What does Promise.allSettled() do?",
                    a: `<p><code>Promise.allSettled()</code> waits for all promises to settle (fulfill or reject) and returns an array of result objects with <code>status</code> ("fulfilled" or "rejected") and <code>value</code> or <code>reason</code>. It never short-circuits.</p>
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
                    a: `<p>Each <code>then()</code> returns a new Promise, so you can chain multiple <code>then()</code> calls. The return value of one <code>then</code> becomes the input of the next. Returning a Promise in <code>then</code> will be awaited automatically.</p>
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
                    a: `<p>Use the <code>Promise</code> constructor with an executor function that receives <code>resolve</code> and <code>reject</code> callbacks. Call <code>resolve</code> for success or <code>reject</code> for failure.</p>
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
                    a: `<p>Always add a <code>.catch()</code> at the end of a chain to handle any rejected promise in the chain. Errors propagate down the chain until caught. Unhandled rejections trigger <code>unhandledrejection</code> events.</p>
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
                    a: `<p><code>Promise.any()</code> resolves with the first <strong>fulfilled</strong> promise, ignoring rejections. It only rejects if <strong>all</strong> promises reject (with an <code>AggregateError</code>). <code>Promise.race()</code> settles with the first promise to settle, whether fulfilled or rejected.</p>
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
});</code></pre>`
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
                    a: `<p>The <code>async</code> keyword before a function declaration makes it return a <strong>Promise</strong> automatically. If the function returns a value, it is wrapped in <code>Promise.resolve()</code>. If it throws, the error is wrapped in <code>Promise.reject()</code>.</p>
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
                    a: `<p><code>await</code> pauses execution of an <code>async</code> function until the Promise settles. It unwraps the resolved value. If the Promise rejects, <code>await</code> throws the rejection reason. It can only be used inside <code>async</code> functions (or at the top level in ES modules).</p>
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
                    a: `<p>Use <code>try/catch</code> blocks around <code>await</code> expressions to handle rejections. You can also chain <code>.catch()</code> on the returned Promise. For granular handling, wrap individual <code>await</code> calls in separate try/catch blocks.</p>
<pre><code>async function loadUser(id) {
  try {
    const response = await fetch(\`/api/users/\${id}\`);
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
                    a: `<p><strong>Sequential</strong>: each <code>await</code> runs one after another. <strong>Parallel</strong>: start all operations first, then <code>await</code> them together with <code>Promise.all()</code>. Parallel is faster when operations are independent.</p>
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
                    a: `<p>An <strong>async IIFE</strong> is an immediately invoked async function expression. It's useful for using <code>await</code> at the top level in environments that don't support top-level await (CommonJS scripts, older Node.js).</p>
<pre><code>(async () =&gt; {
  try {
    const data = await fetch("/api/config");
    const config = await data.json();
    console.log("Config loaded:", config);
  } catch (err) {
    console.error("Failed:", err);
  }
})();

// Also useful for inline async logic
const result = await (async () =&gt; {
  const a = await getA();
  const b = await getB();
  return a + b;
})();</code></pre>`
                },
                {
                    q: "What is top-level await?",
                    a: `<p><strong>Top-level await</strong> allows using <code>await</code> outside of async functions at the module top level (in ES modules). The module loading waits until the awaited promise settles.</p>
<pre><code>// In an ES module (.mjs or type="module")
const response = await fetch("/api/config");
const config = await response.json();

export default config;

// Importing modules with top-level await
// The importing module waits for config to resolve
// import config from "./config.mjs";</code></pre>`
                },
                {
                    q: "How do you convert callback-based functions to async/await?",
                    a: `<p>Wrap the callback-based function in a Promise using <code>new Promise()</code>, then use <code>async/await</code> with it. Node.js also provides <code>util.promisify()</code> for automatic conversion of Node-style callbacks.</p>
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
const data = await readFileAsync("./data.txt", "utf8");</code></pre>`
                },
                {
                    q: "What are common mistakes with async/await?",
                    a: `<p>Common mistakes include: forgetting to <code>await</code> a promise, using <code>await</code> in a <code>forEach</code> (doesn't work as expected), not handling errors, and using sequential <code>await</code> when parallel is better.</p>
<pre><code>// Mistake 1: Forgetting await
async function bad() {
  const data = fetch("/api"); // Missing await! data is a Promise
}

// Mistake 2: await in forEach (doesn't wait)
items.forEach(async (item) =&gt; {
  await processItem(item); // iterations don't wait for each other
});
// Fix: use for...of
for (const item of items) {
  await processItem(item);
}

// Mistake 3: Unnecessary await
return await somePromise(); // "return await" is redundant
return somePromise();       // just return the promise</code></pre>`
                },
                {
                    q: "What is for-await-of and when do you use it?",
                    a: `<p><code>for await...of</code> iterates over <strong>async iterables</strong> — objects that produce promises on each iteration. It is used for consuming async generators, readable streams, or any async iterable.</p>
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
}</code></pre>`
                },
                {
                    q: "How does error propagation work in async/await?",
                    a: `<p>When an <code>await</code>ed promise rejects, it throws an exception in the async function. If uncaught, the async function's returned promise rejects. Errors propagate up through the call chain until caught with <code>try/catch</code> or <code>.catch()</code>.</p>
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
    return "fallback";
  }
}</code></pre>`
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
                    a: `<p>The <strong>event loop</strong> continuously checks if the call stack is empty. When empty, it picks the next task from the <strong>microtask queue</strong> first (Promises, queueMicrotask), then the <strong>macrotask queue</strong> (setTimeout, setInterval, I/O). This cycle repeats indefinitely.</p>
<pre><code>// Execution order:
console.log("1");                        // Sync → call stack
setTimeout(() =&gt; console.log("2"), 0);   // Macrotask queue
Promise.resolve().then(() =&gt; console.log("3")); // Microtask queue
console.log("4");                        // Sync → call stack

// Output: 1, 4, 3, 2</code></pre>`
                },
                {
                    q: "What is the call stack?",
                    a: `<p>The <strong>call stack</strong> is a LIFO (Last In, First Out) data structure that tracks function execution. When a function is called, it's pushed onto the stack; when it returns, it's popped off. JavaScript is single-threaded, so only one call stack exists.</p>
<pre><code>function third()  { console.log("third"); }
function second() { third(); }
function first()  { second(); }
first();

// Call stack progression:
// 1. first()   → push first
// 2. second()  → push second
// 3. third()   → push third
// 4. console.log → push, execute, pop
// 5. third returns → pop third
// 6. second returns → pop second
// 7. first returns → pop first</code></pre>`
                },
                {
                    q: "What is the task queue (macrotask queue)?",
                    a: `<p>The <strong>task queue</strong> (macrotask queue) holds callbacks from Web APIs like <code>setTimeout</code>, <code>setInterval</code>, I/O, and UI events. After the call stack empties and all microtasks are processed, the event loop picks <strong>one</strong> macrotask to execute.</p>
<pre><code>console.log("Start");

setTimeout(() =&gt; console.log("Timeout 1"), 0);
setTimeout(() =&gt; console.log("Timeout 2"), 0);

console.log("End");

// Output:
// "Start"
// "End"
// "Timeout 1"
// "Timeout 2"
// (macrotasks processed one at a time, in order)</code></pre>`
                },
                {
                    q: "What are microtasks and how do they differ from macrotasks?",
                    a: `<p><strong>Microtasks</strong> (Promise callbacks, queueMicrotask, MutationObserver) have higher priority than <strong>macrotasks</strong> (setTimeout, setInterval, I/O). All microtasks are drained before the next macrotask runs — even new microtasks queued during microtask processing.</p>
<pre><code>setTimeout(() =&gt; console.log("macro"), 0);
Promise.resolve().then(() =&gt; console.log("micro 1"));
Promise.resolve().then(() =&gt; {
  console.log("micro 2");
  Promise.resolve().then(() =&gt; console.log("micro 3"));
});

// Output: micro 1, micro 2, micro 3, macro
// All microtasks (including newly added) run before macro</code></pre>`
                },
                {
                    q: "Why does setTimeout(..., 0) not execute immediately?",
                    a: `<p><code>setTimeout(fn, 0)</code> doesn't run immediately because the callback is placed in the macrotask queue and only executes after the current call stack empties and all microtasks are processed. The minimum delay is also clamped to ~4ms in nested calls.</p>
<pre><code>console.log("A");
setTimeout(() =&gt; console.log("B"), 0);
console.log("C");

// Output: A, C, B
// "B" waits until stack clears even though delay is 0

// The 0ms is not guaranteed — it means "as soon as possible"
// after current execution and microtasks complete</code></pre>`
                },
                {
                    q: "What is the execution order of Promises vs setTimeout?",
                    a: `<p>Promise callbacks (<code>.then</code>) go to the <strong>microtask queue</strong> while <code>setTimeout</code> callbacks go to the <strong>macrotask queue</strong>. Microtasks always run before macrotasks, so Promise callbacks execute first.</p>
<pre><code>console.log("1");

setTimeout(() =&gt; console.log("2"), 0);

Promise.resolve()
  .then(() =&gt; console.log("3"))
  .then(() =&gt; console.log("4"));

console.log("5");

// Output: 1, 5, 3, 4, 2
// Sync first, then microtasks (Promise), then macrotasks (setTimeout)</code></pre>`
                },
                {
                    q: "How does requestAnimationFrame fit into the event loop?",
                    a: `<p><code>requestAnimationFrame()</code> schedules a callback before the next browser repaint, typically at 60fps (~16.7ms intervals). It runs after microtasks but before the next macrotask, positioned between microtask processing and the paint step.</p>
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
}</code></pre>`
                },
                {
                    q: "What happens when you block the event loop?",
                    a: `<p>Since JavaScript is single-threaded, long-running synchronous code <strong>blocks</strong> the event loop — freezing the UI, preventing events, and stopping callbacks from executing. Avoid heavy computations on the main thread; use Web Workers or break work into chunks.</p>
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
}</code></pre>`
                },
                {
                    q: "Predict the output of the following code:",
                    a: `<p>A classic event loop interview question testing understanding of sync code, microtasks, and macrotasks.</p>
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
// "inner timeout" — macrotask (queued during microtask)</code></pre>`
                },
                {
                    q: "What is queueMicrotask() and how does it work?",
                    a: `<p><code>queueMicrotask()</code> schedules a function to run in the microtask queue, similar to <code>Promise.resolve().then(fn)</code> but more explicit and efficient. Use it when you need code to run after the current task but before rendering or macrotasks.</p>
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
}</code></pre>`
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
                    a: `<p><code>let</code>/<code>const</code> are block-scoped; <code>var</code> is function-scoped. <code>let</code>/<code>const</code> have a <strong>Temporal Dead Zone</strong> (TDZ) — they can't be accessed before declaration. <code>var</code> is hoisted with <code>undefined</code>.</p>
<pre><code>// Block scoping
{ let a = 1; const b = 2; var c = 3; }
// console.log(a); // ReferenceError
// console.log(b); // ReferenceError
console.log(c);    // 3

// TDZ
console.log(x); // undefined (var hoisted)
var x = 5;
// console.log(y); // ReferenceError (TDZ)
let y = 5;</code></pre>`
                },
                {
                    q: "How do template literals work?",
                    a: `<p>Template literals use backticks and support <strong>string interpolation</strong> with <code>\${expression}</code>, <strong>multi-line strings</strong>, and <strong>tagged templates</strong> for custom string processing.</p>
<pre><code>const name = "Alice";
const age = 30;

// Interpolation
const greeting = \`Hello, \${name}! You are \${age} years old.\`;

// Multi-line
const html = \`
  &lt;div&gt;
    &lt;h1&gt;\${name}&lt;/h1&gt;
  &lt;/div&gt;
\`;

// Tagged template
function highlight(strings, ...values) {
  return strings.reduce((result, str, i) =&gt;
    \`\${result}\${str}&lt;b&gt;\${values[i] || ""}&lt;/b&gt;\`, "");
}
highlight\`\${name} is \${age}\`; // "&lt;b&gt;Alice&lt;/b&gt; is &lt;b&gt;30&lt;/b&gt;"</code></pre>`
                },
                {
                    q: "How does destructuring work in JavaScript?",
                    a: `<p><strong>Destructuring</strong> extracts values from arrays or properties from objects into distinct variables. It supports defaults, renaming, nested extraction, and rest elements.</p>
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
  return \`\${name}, \${age}\`;
}</code></pre>`
                },
                {
                    q: "What is the spread operator and how is it used?",
                    a: `<p>The <strong>spread operator</strong> (<code>...</code>) expands iterables into individual elements. It is used for copying arrays/objects, merging, passing arguments, and converting iterables to arrays.</p>
<pre><code>// Arrays
const arr = [1, 2, 3];
const copy = [...arr];          // [1, 2, 3]
const merged = [...arr, 4, 5];  // [1, 2, 3, 4, 5]

// Objects
const obj = { a: 1, b: 2 };
const extended = { ...obj, c: 3 };     // { a: 1, b: 2, c: 3 }
const overridden = { ...obj, b: 99 };  // { a: 1, b: 99 }

// Function arguments
Math.max(...arr); // 3</code></pre>`
                },
                {
                    q: "What are Map and Set in JavaScript?",
                    a: `<p><strong>Map</strong> stores key-value pairs where keys can be any type (unlike plain objects). <strong>Set</strong> stores unique values of any type. Both maintain insertion order and have a <code>size</code> property.</p>
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
console.log(set.size);      // 4</code></pre>`
                },
                {
                    q: "What are WeakMap and WeakSet?",
                    a: `<p><strong>WeakMap</strong> and <strong>WeakSet</strong> hold <em>weak</em> references to objects, allowing garbage collection of entries when there are no other references. Keys must be objects. They are not iterable and have no <code>size</code> property.</p>
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
// Use case: store private data associated with objects</code></pre>`
                },
                {
                    q: "How does for...of differ from for...in?",
                    a: `<p><code>for...of</code> iterates over <strong>iterable values</strong> (arrays, strings, Maps, Sets). <code>for...in</code> iterates over <strong>enumerable property keys</strong> of an object, including inherited ones. Use <code>for...of</code> for arrays and <code>for...in</code> for object properties.</p>
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
// "x" 1, "y" 2</code></pre>`
                },
                {
                    q: "What is Symbol and what are well-known Symbols?",
                    a: `<p><strong>Symbol</strong> creates a unique primitive value. <strong>Well-known Symbols</strong> are built-in symbols that define object behavior, like <code>Symbol.iterator</code> (making objects iterable) and <code>Symbol.toPrimitive</code> (custom type conversion).</p>
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
console.log([...range]); // [1, 2, 3, 4, 5]</code></pre>`
                },
                {
                    q: "How does optional chaining (?.) work?",
                    a: `<p><strong>Optional chaining</strong> (<code>?.</code>) short-circuits to <code>undefined</code> if the left side is <code>null</code> or <code>undefined</code>, instead of throwing a TypeError. It works with properties, methods, and bracket notation.</p>
<pre><code>const user = {
  name: "Alice",
  address: { city: "NYC" }
};

console.log(user.address?.city);     // "NYC"
console.log(user.phone?.number);     // undefined (no error)
console.log(user.greet?.());         // undefined (method)
console.log(user.tags?.[0]);         // undefined (bracket)

// Without optional chaining:
// user.phone.number → TypeError: Cannot read property of undefined</code></pre>`
                },
                {
                    q: "What is the nullish coalescing operator (??)?",
                    a: `<p>The <strong>nullish coalescing operator</strong> (<code>??</code>) returns the right-hand operand only if the left is <code>null</code> or <code>undefined</code>. Unlike <code>||</code>, it does not treat <code>0</code>, <code>""</code>, or <code>false</code> as fallback triggers.</p>
<pre><code>const a = null ?? "default";    // "default"
const b = undefined ?? "default"; // "default"
const c = 0 ?? "default";       // 0 (kept!)
const d = "" ?? "default";      // "" (kept!)
const e = false ?? "default";   // false (kept!)

// Compare with ||
const f = 0 || "default";       // "default" (0 is falsy)
const g = "" || "default";      // "default" ("" is falsy)

// Combine with optional chaining
const city = user?.address?.city ?? "Unknown";</code></pre>`
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
                    a: `<p><code>map()</code> creates a <strong>new array</strong> by calling a function on every element of the original array. It does not mutate the original array and always returns an array of the same length.</p>
<pre><code>const numbers = [1, 2, 3, 4];
const doubled = numbers.map(n =&gt; n * 2);
console.log(doubled); // [2, 4, 6, 8]

// With index
const indexed = ["a", "b", "c"].map((val, i) =&gt; \`\${i}:\${val}\`);
console.log(indexed); // ["0:a", "1:b", "2:c"]

// Transforming objects
const users = [{ name: "Alice" }, { name: "Bob" }];
const names = users.map(u =&gt; u.name);
console.log(names); // ["Alice", "Bob"]</code></pre>`
                },
                {
                    q: "How does Array.prototype.filter() work?",
                    a: `<p><code>filter()</code> creates a <strong>new array</strong> containing only elements that pass the test function (return truthy). It does not mutate the original and may return a shorter array.</p>
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
console.log(truthy); // ["hello", 42]</code></pre>`
                },
                {
                    q: "How does Array.prototype.reduce() work?",
                    a: `<p><code>reduce()</code> executes a reducer function on each element, accumulating a single result. It takes a callback <code>(accumulator, currentValue, index, array)</code> and an optional initial value.</p>
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
// { fruit: ["apple", "banana"], veggie: ["carrot"] }</code></pre>`
                },
                {
                    q: "How do find() and findIndex() work?",
                    a: `<p><code>find()</code> returns the <strong>first element</strong> that satisfies the test function, or <code>undefined</code>. <code>findIndex()</code> returns the <strong>index</strong> of the first match, or <code>-1</code>. Both stop searching after the first match.</p>
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
console.log(missing); // undefined</code></pre>`
                },
                {
                    q: "How do some() and every() work?",
                    a: `<p><code>some()</code> returns <code>true</code> if <strong>at least one</strong> element passes the test. <code>every()</code> returns <code>true</code> only if <strong>all</strong> elements pass. Both short-circuit for performance.</p>
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
const anyVerified = users.some(u =&gt; u.verified);  // true</code></pre>`
                },
                {
                    q: "How do flat() and flatMap() work?",
                    a: `<p><code>flat(depth)</code> flattens nested arrays to the specified depth (default 1). <code>flatMap()</code> maps each element then flattens the result by one level — equivalent to <code>map().flat(1)</code> but more efficient.</p>
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
// [2, 6] — odd numbers doubled, evens removed</code></pre>`
                },
                {
                    q: "How does Array.from() work?",
                    a: `<p><code>Array.from()</code> creates a new array from an array-like or iterable object. It accepts an optional map function as the second argument, letting you transform elements during creation.</p>
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
// [1, 2, 3, 4, 5]</code></pre>`
                },
                {
                    q: "How does Array.prototype.sort() work and what are its gotchas?",
                    a: `<p><code>sort()</code> sorts in place and mutates the array. By default it converts elements to <strong>strings</strong> and sorts by UTF-16 code units, which gives wrong results for numbers. Always pass a comparator for numeric sorting.</p>
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
// [1, 2, 3] (original unchanged)</code></pre>`
                },
                {
                    q: "What is the difference between forEach() and map()?",
                    a: `<p><code>forEach()</code> executes a function for each element but returns <code>undefined</code> — it's for side effects. <code>map()</code> returns a <strong>new array</strong> of transformed values. You cannot <code>break</code> out of either; use <code>for...of</code> if you need early exit.</p>
<pre><code>const nums = [1, 2, 3];

// forEach — side effects, returns undefined
const result1 = nums.forEach(n =&gt; console.log(n));
console.log(result1); // undefined

// map — transformation, returns new array
const result2 = nums.map(n =&gt; n * 2);
console.log(result2); // [2, 4, 6]

// Anti-pattern: using map for side effects
nums.map(n =&gt; console.log(n)); // Works but wasteful — use forEach

// Anti-pattern: using forEach to build array — use map instead</code></pre>`
                },
                {
                    q: "How does Array.prototype.includes() work?",
                    a: `<p><code>includes()</code> returns <code>true</code> if the array contains the specified value, using <strong>SameValueZero</strong> comparison (similar to <code>===</code> but treats <code>NaN</code> as equal to itself). It accepts an optional start index.</p>
<pre><code>const arr = [1, 2, 3, NaN];

console.log(arr.includes(2));     // true
console.log(arr.includes(4));     // false
console.log(arr.includes(NaN));   // true (unlike indexOf)

// indexOf fails with NaN
console.log(arr.indexOf(NaN));    // -1 (can't find it)

// With start index
console.log(arr.includes(1, 1));  // false (search from index 1)

// Replaces common pattern
// Before: arr.indexOf(val) !== -1
// After:  arr.includes(val)</code></pre>`
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
                    a: `<p>These static methods return arrays of an object's own enumerable properties: <code>keys()</code> returns property names, <code>values()</code> returns values, and <code>entries()</code> returns <code>[key, value]</code> pairs.</p>
<pre><code>const user = { name: "Alice", age: 30, role: "admin" };

Object.keys(user);    // ["name", "age", "role"]
Object.values(user);  // ["Alice", 30, "admin"]
Object.entries(user); // [["name","Alice"], ["age",30], ["role","admin"]]

// Iterate with entries
for (const [key, val] of Object.entries(user)) {
  console.log(\`\${key}: \${val}\`);
}

// Convert to Map
const map = new Map(Object.entries(user));</code></pre>`
                },
                {
                    q: "How does Object.assign() work?",
                    a: `<p><code>Object.assign(target, ...sources)</code> copies all enumerable own properties from source objects to the target. It mutates the target, performs a <strong>shallow</strong> copy, and later sources override earlier ones.</p>
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
console.log(original.data.x); // 99 (shared reference!)</code></pre>`
                },
                {
                    q: "What do Object.freeze() and Object.seal() do?",
                    a: `<p><code>Object.freeze()</code> makes an object fully immutable — no adding, removing, or modifying properties. <code>Object.seal()</code> prevents adding/removing properties but allows modifying existing ones. Both are <strong>shallow</strong>.</p>
<pre><code>// freeze — fully immutable
const frozen = Object.freeze({ x: 1, y: 2 });
frozen.x = 99;       // silently fails (throws in strict mode)
frozen.z = 3;        // silently fails
console.log(frozen); // { x: 1, y: 2 }

// seal — can modify, can't add/remove
const sealed = Object.seal({ x: 1, y: 2 });
sealed.x = 99;       // allowed
sealed.z = 3;        // silently fails
delete sealed.x;     // silently fails
console.log(sealed); // { x: 99, y: 2 }

console.log(Object.isFrozen(frozen)); // true
console.log(Object.isSealed(sealed)); // true</code></pre>`
                },
                {
                    q: "How does Object.defineProperty() work?",
                    a: `<p><code>Object.defineProperty()</code> defines or modifies a property with fine-grained control over its behavior via a <strong>descriptor</strong>: <code>value</code>, <code>writable</code>, <code>enumerable</code>, <code>configurable</code>, or getter/setter.</p>
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
console.log(obj.upper); // "ALICE"</code></pre>`
                },
                {
                    q: "How does the spread operator work with objects?",
                    a: `<p>The spread operator (<code>...</code>) creates a <strong>shallow copy</strong> of an object's own enumerable properties. Later properties override earlier ones. It does not copy prototype properties.</p>
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
console.log(original.nested.x); // 99 (shared ref!)</code></pre>`
                },
                {
                    q: "What are computed property names?",
                    a: `<p><strong>Computed property names</strong> allow you to use expressions as property keys inside object literals by wrapping them in square brackets <code>[]</code>.</p>
<pre><code>const key = "name";
const obj = { [key]: "Alice" };
console.log(obj.name); // "Alice"

// Dynamic keys
const prefix = "user";
const data = {
  [\`\${prefix}Name\`]: "Bob",
  [\`\${prefix}Age\`]: 25
};
console.log(data.userName); // "Bob"

// With Symbol
const id = Symbol("id");
const item = { [id]: 123 };
console.log(item[id]); // 123

// In methods
const action = "get";
const api = { [\`\${action}User\`]() { return "user data"; } };
api.getUser(); // "user data"</code></pre>`
                },
                {
                    q: "How does Object.is() differ from === ?",
                    a: `<p><code>Object.is()</code> performs <strong>SameValue</strong> comparison, similar to <code>===</code> but with two differences: <code>Object.is(NaN, NaN)</code> is <code>true</code>, and <code>Object.is(+0, -0)</code> is <code>false</code>.</p>
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
}</code></pre>`
                },
                {
                    q: "How does Object.fromEntries() work?",
                    a: `<p><code>Object.fromEntries()</code> transforms an iterable of <code>[key, value]</code> pairs into an object. It is the reverse of <code>Object.entries()</code> and is useful for converting Maps or transforming entries.</p>
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
console.log(doubled); // { apple: 3, banana: 1.5 }</code></pre>`
                },
                {
                    q: "What are property descriptors in JavaScript?",
                    a: `<p>Every property has a <strong>descriptor</strong> with attributes: <code>value</code>, <code>writable</code>, <code>enumerable</code>, <code>configurable</code> for data properties; or <code>get</code>, <code>set</code> for accessor properties. Use <code>Object.getOwnPropertyDescriptor()</code> to inspect them.</p>
<pre><code>const obj = { name: "Alice" };

console.log(Object.getOwnPropertyDescriptor(obj, "name"));
// { value: "Alice", writable: true, enumerable: true, configurable: true }

// Properties created with defineProperty default to false
Object.defineProperty(obj, "id", { value: 1 });
console.log(Object.getOwnPropertyDescriptor(obj, "id"));
// { value: 1, writable: false, enumerable: false, configurable: false }

// Get all descriptors
console.log(Object.getOwnPropertyDescriptors(obj));
// { name: { ... }, id: { ... } }</code></pre>`
                },
                {
                    q: "What is the difference between shallow copy and deep copy?",
                    a: `<p>A <strong>shallow copy</strong> duplicates top-level properties but shares references to nested objects. A <strong>deep copy</strong> recursively copies all levels, creating fully independent objects. Use <code>structuredClone()</code> for deep copying.</p>
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
// but NOT: functions, DOM nodes, or Symbol properties</code></pre>`
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
                    a: `<p><code>querySelector</code> returns the <strong>first</strong> element matching a CSS selector. <code>querySelectorAll</code> returns a static <code>NodeList</code> of all matches. Both accept any valid CSS selector.</p>
<pre><code>const el = document.querySelector('.card');       // first .card
const all = document.querySelectorAll('.card');    // all .card elements

// NodeList is NOT a live collection
document.querySelectorAll('p').forEach(p =&gt; {
  p.style.color = 'blue';
});

// By ID, attribute, nested
document.querySelector('#app');
document.querySelector('[data-role="admin"]');
document.querySelector('ul &gt; li:first-child');</code></pre>`
                },
                {
                    q: "How do you create and insert DOM elements?",
                    a: `<p>Use <code>document.createElement()</code> to create an element, set its properties, then insert it with <code>appendChild</code>, <code>append</code>, <code>prepend</code>, <code>before</code>, <code>after</code>, or <code>insertAdjacentElement</code>.</p>
<pre><code>const div = document.createElement('div');
div.textContent = 'Hello';
div.classList.add('greeting');

document.body.appendChild(div);       // add as last child
parent.prepend(div);                  // add as first child
sibling.after(div);                   // add after sibling

// insertAdjacentHTML — no element creation needed
el.insertAdjacentHTML('beforeend', '&lt;p&gt;New&lt;/p&gt;');</code></pre>`
                },
                {
                    q: "How does addEventListener work and how do you remove listeners?",
                    a: `<p><code>addEventListener</code> attaches an event handler without overwriting existing handlers. Pass the same function reference to <code>removeEventListener</code> to detach it. The third argument controls capture/options.</p>
<pre><code>function handleClick(e) {
  console.log('Clicked', e.target);
}

btn.addEventListener('click', handleClick);
btn.removeEventListener('click', handleClick);

// Options object
btn.addEventListener('click', handleClick, {
  once: true,      // auto-remove after first call
  capture: false,  // bubbling phase (default)
  passive: true    // won't call preventDefault
});</code></pre>`
                },
                {
                    q: "What is event delegation and why is it useful?",
                    a: `<p><strong>Event delegation</strong> attaches a single listener to a parent element instead of one per child. It leverages event bubbling — when a child is clicked, the event bubbles up to the parent where the handler checks <code>e.target</code>.</p>
<pre><code>// Instead of adding listener to every &lt;li&gt;
document.querySelector('ul').addEventListener('click', (e) =&gt; {
  if (e.target.matches('li')) {
    console.log('Clicked:', e.target.textContent);
  }
});

// Benefits:
// 1. Works for dynamically added elements
// 2. Uses less memory (one handler vs many)
// 3. No need to rebind when DOM changes</code></pre>`
                },
                {
                    q: "What is the difference between event bubbling and capturing?",
                    a: `<p>Events travel in two phases: <strong>capturing</strong> (top → target) and <strong>bubbling</strong> (target → top). By default, listeners fire during bubbling. Set <code>capture: true</code> to listen during the capturing phase. <code>e.stopPropagation()</code> stops further propagation.</p>
<pre><code>// Bubbling (default)
child.addEventListener('click', () =&gt; console.log('child'));
parent.addEventListener('click', () =&gt; console.log('parent'));
// Click child → "child" then "parent"

// Capturing
parent.addEventListener('click', () =&gt; console.log('parent'), true);
// Click child → "parent" then "child"

// Stop propagation
child.addEventListener('click', (e) =&gt; {
  e.stopPropagation(); // parent handler won't fire
});</code></pre>`
                },
                {
                    q: "How do classList methods work?",
                    a: `<p><code>classList</code> provides methods to manipulate an element's CSS classes: <code>add</code>, <code>remove</code>, <code>toggle</code>, <code>contains</code>, and <code>replace</code>. It's preferred over directly setting <code>className</code>.</p>
<pre><code>const el = document.querySelector('.box');

el.classList.add('active', 'visible');
el.classList.remove('hidden');
el.classList.toggle('open');           // add if absent, remove if present
el.classList.contains('active');       // true
el.classList.replace('old', 'new');

// toggle with condition
el.classList.toggle('dark', isDarkMode); // add if true, remove if false

// Iterate classes
el.classList.forEach(cls =&gt; console.log(cls));</code></pre>`
                },
                {
                    q: "How do you use the dataset property for custom data attributes?",
                    a: `<p>HTML <code>data-*</code> attributes are accessible via the <code>dataset</code> property. Attribute names are converted from kebab-case to camelCase. Values are always strings.</p>
<pre><code>// &lt;div id="user" data-user-id="42" data-role="admin"&gt;

const el = document.getElementById('user');
console.log(el.dataset.userId);  // "42"
console.log(el.dataset.role);    // "admin"

// Set data attributes
el.dataset.status = 'active';
// Renders: data-status="active"

// Delete
delete el.dataset.role;

// In CSS: [data-role="admin"] { color: red; }</code></pre>`
                },
                {
                    q: "What is the difference between innerHTML, textContent, and innerText?",
                    a: `<p><code>innerHTML</code> gets/sets HTML markup (parses tags). <code>textContent</code> gets/sets raw text (ignores tags, includes hidden text). <code>innerText</code> returns visible text only, triggering reflow. Prefer <code>textContent</code> for plain text — <code>innerHTML</code> can create XSS vulnerabilities with user input.</p>
<pre><code>el.innerHTML = '&lt;b&gt;Bold&lt;/b&gt;';    // renders bold text
el.textContent = '&lt;b&gt;Bold&lt;/b&gt;';  // shows literal "&lt;b&gt;Bold&lt;/b&gt;"

// Security: never do this with user input!
// el.innerHTML = userInput;  // XSS risk!

// Safe alternative
el.textContent = userInput;  // always safe

// innerText vs textContent
// &lt;p&gt;Hello &lt;span style="display:none"&gt;hidden&lt;/span&gt;&lt;/p&gt;
el.textContent; // "Hello hidden"
el.innerText;   // "Hello" (respects CSS visibility)</code></pre>`
                },
                {
                    q: "What is a DocumentFragment and when should you use it?",
                    a: `<p>A <code>DocumentFragment</code> is a lightweight container that holds DOM nodes without being part of the live DOM tree. Appending a fragment inserts all its children in a single operation, avoiding multiple reflows.</p>
<pre><code>const fragment = document.createDocumentFragment();

for (let i = 0; i &lt; 1000; i++) {
  const li = document.createElement('li');
  li.textContent = 'Item ' + i;
  fragment.appendChild(li);  // no reflow yet
}

document.querySelector('ul').appendChild(fragment);
// Single reflow — all 1000 items inserted at once

// Without fragment: 1000 separate reflows
// With fragment: 1 reflow → much faster</code></pre>`
                },
                {
                    q: "What is MutationObserver and how do you use it?",
                    a: `<p><code>MutationObserver</code> watches for changes in the DOM tree — attribute modifications, child additions/removals, or text content changes. It replaces the deprecated Mutation Events and is asynchronous (batches mutations).</p>
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
observer.disconnect();</code></pre>`
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
                    a: `<p><code>try</code> wraps code that may throw. <code>catch</code> handles the error. <code>finally</code> always runs regardless of success or failure — useful for cleanup. You can omit <code>catch</code> if <code>finally</code> is present.</p>
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
}</code></pre>`
                },
                {
                    q: "How do you create custom Error classes?",
                    a: `<p>Extend the built-in <code>Error</code> class to create custom errors with specific names and additional properties. This enables targeted <code>catch</code> handling via <code>instanceof</code>.</p>
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

try {
  throw new ValidationError('email', 'Invalid email');
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(e.field); // "email"
  }
}</code></pre>`
                },
                {
                    q: "What are the built-in Error types in JavaScript?",
                    a: `<p>JavaScript has several built-in error types: <code>TypeError</code> (wrong type), <code>ReferenceError</code> (undeclared variable), <code>SyntaxError</code> (invalid syntax), <code>RangeError</code> (out of range), <code>URIError</code>, and <code>EvalError</code>.</p>
<pre><code>// TypeError — wrong type or method on wrong value
null.toString();       // TypeError
undefined.map(x =&gt; x); // TypeError

// ReferenceError — variable not declared
console.log(foo);      // ReferenceError

// SyntaxError — invalid code (caught at parse time)
// eval('if(');         // SyntaxError

// RangeError — value out of valid range
new Array(-1);         // RangeError
(1).toFixed(200);      // RangeError</code></pre>`
                },
                {
                    q: "How does the throw statement work?",
                    a: `<p><code>throw</code> stops execution and passes control to the nearest <code>catch</code>. You can throw any value, but throwing <code>Error</code> objects is best practice because they include a stack trace.</p>
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
}</code></pre>`
                },
                {
                    q: "How do you handle errors in async/await code?",
                    a: `<p>Wrap <code>await</code> calls in <code>try/catch</code>. For multiple independent async operations, use <code>Promise.allSettled</code> to avoid short-circuiting. Unhandled rejections in async functions become unhandled promise rejections.</p>
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
results.forEach(r =&gt; {
  if (r.status === 'fulfilled') console.log(r.value);
  else console.log('Failed:', r.reason);
});</code></pre>`
                },
                {
                    q: "How does window.onerror work for global error handling?",
                    a: `<p><code>window.onerror</code> is a global handler for uncaught runtime errors. It receives the message, source file, line, column, and error object. Return <code>true</code> to suppress the default browser error logging.</p>
<pre><code>window.onerror = function(message, source, line, col, error) {
  console.log('Error:', message);
  console.log('Source:', source + ':' + line + ':' + col);
  console.log('Stack:', error?.stack);

  // Send to error tracking service
  sendToService({ message, source, line, col, stack: error?.stack });

  return true;  // suppress default console error
};

// Note: does NOT catch promise rejections
// Use 'unhandledrejection' for those</code></pre>`
                },
                {
                    q: "How do you handle unhandled promise rejections?",
                    a: `<p>Listen for the <code>unhandledrejection</code> event on <code>window</code> to catch promise rejections that have no <code>.catch()</code> handler. This is essential for logging errors that would otherwise be silently swallowed.</p>
<pre><code>window.addEventListener('unhandledrejection', (event) =&gt; {
  console.error('Unhandled rejection:', event.reason);

  // Prevent default browser warning
  event.preventDefault();

  // Log to error service
  logError(event.reason);
});

// This rejection will be caught by the handler above
Promise.reject(new Error('Oops'));

// This will NOT trigger it (has .catch)
Promise.reject(new Error('Handled')).catch(e =&gt; {});</code></pre>`
                },
                {
                    q: "How do you read and use error stack traces?",
                    a: `<p>The <code>stack</code> property of an <code>Error</code> contains a string with the call stack at the point the error was created. It shows function names, file paths, and line numbers — essential for debugging.</p>
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
console.log(trace.stack); // stack at creation point</code></pre>`
                },
                {
                    q: "How does error propagation work through the call stack?",
                    a: `<p>When an error is thrown, JavaScript unwinds the call stack looking for a <code>catch</code> block. If none is found, it becomes an uncaught error. Each function in the chain has a chance to catch, handle, or rethrow the error.</p>
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
  try { low(); }
  catch (e) {
    logError(e);
    throw e; // let caller handle too
  }
}</code></pre>`
                },
                {
                    q: "What are best practices for error handling in JavaScript?",
                    a: `<p>Always throw <code>Error</code> objects (not strings), use specific error types, handle errors close to the source, don't swallow errors silently, and set up global handlers as a safety net.</p>
<pre><code>// ❌ Bad: throwing strings
throw 'something failed';

// ✅ Good: throw Error objects
throw new Error('something failed');

// ❌ Bad: empty catch (swallowing errors)
try { riskyCall(); } catch (e) {}

// ✅ Good: log or rethrow
try { riskyCall(); }
catch (e) { console.error(e); throw e; }

// ✅ Use specific error types
if (!user) throw new NotFoundError('User');
if (!email.includes('@')) throw new ValidationError('email');

// ✅ Global safety net
window.onerror = (msg) =&gt; logService.send(msg);
window.addEventListener('unhandledrejection', (e) =&gt; {
  logService.send(e.reason);
});</code></pre>`
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
                    a: `<p>Use a <strong>regex literal</strong> (<code>/pattern/flags</code>) or the <code>RegExp</code> constructor. Literals are compiled at load time; the constructor allows dynamic patterns from variables.</p>
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
/abc/u;   // unicode</code></pre>`
                },
                {
                    q: "What is the difference between test, exec, and match?",
                    a: `<p><code>test()</code> returns a boolean. <code>exec()</code> returns a detailed match array with index and groups. <code>match()</code> is a string method — without <code>g</code> flag it works like <code>exec</code>, with <code>g</code> it returns all matches.</p>
<pre><code>const re = /(\d{4})-(\d{2})/;
const str = '2024-03 and 2025-06';

re.test(str);        // true
re.exec(str);        // ["2024-03", "2024", "03", index: 0]

str.match(re);       // ["2024-03", "2024", "03"] (first match)
str.match(/\d{4}-\d{2}/g); // ["2024-03", "2025-06"] (all matches)

// matchAll — iterator of all detailed matches
for (const m of str.matchAll(/(\d{4})-(\d{2})/g)) {
  console.log(m[1], m[2]); // "2024","03" then "2025","06"
}</code></pre>`
                },
                {
                    q: "How do you validate an email address with regex?",
                    a: `<p>A practical email regex checks for characters before <code>@</code>, a domain, and a TLD. No regex can fully validate per RFC 5322, but a reasonable pattern covers most real-world addresses.</p>
<pre><code>// Practical email validation
const emailRe = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

emailRe.test('user@example.com');    // true
emailRe.test('a.b+tag@sub.co.uk');   // true
emailRe.test('missing@.com');         // false
emailRe.test('@no-local.com');        // false

// For production, prefer built-in validation
// &lt;input type="email"&gt; handles most cases
// Or use a well-tested library for strict validation</code></pre>`
                },
                {
                    q: "What are character classes and quantifiers in regex?",
                    a: `<p><strong>Character classes</strong> match a set of characters: <code>\\d</code> (digit), <code>\\w</code> (word char), <code>\\s</code> (whitespace), <code>[abc]</code> (custom set). <strong>Quantifiers</strong> specify how many: <code>*</code> (0+), <code>+</code> (1+), <code>?</code> (0 or 1), <code>{n,m}</code> (range).</p>
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
/\\d+/.exec('abc123');   // ["123"] (one or more digits)</code></pre>`
                },
                {
                    q: "How do capturing groups and non-capturing groups work?",
                    a: `<p><strong>Capturing groups</strong> <code>(pattern)</code> capture the matched text for back-references. <strong>Non-capturing groups</strong> <code>(?:pattern)</code> group without capturing, improving performance when you don't need the match.</p>
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
/(?:cat|dog)s/.test('dogs');  // true</code></pre>`
                },
                {
                    q: "What are lookahead and lookbehind assertions?",
                    a: `<p><strong>Lookahead</strong> <code>(?=...)</code> asserts what follows without consuming it. <strong>Lookbehind</strong> <code>(?&lt;=...)</code> asserts what precedes. Negative versions use <code>!</code> instead of <code>=</code>. These are zero-width — they don't include the matched text.</p>
<pre><code>// Positive lookahead — followed by
'100px'.match(/\\d+(?=px)/);     // ["100"]

// Negative lookahead — NOT followed by
'100em'.match(/\\d+(?!px)/);     // ["100"]

// Positive lookbehind — preceded by
'$50'.match(/(?&lt;=\\$)\\d+/);      // ["50"]

// Negative lookbehind — NOT preceded by
'€50'.match(/(?&lt;!\\$)\\d+/);      // ["50"]

// Password: at least one digit and one uppercase
/(?=.*\\d)(?=.*[A-Z]).{8,}/.test('Pass1234'); // true</code></pre>`
                },
                {
                    q: "How do you use replace with regex?",
                    a: `<p><code>String.replace()</code> with a regex can use <strong>capture group references</strong> (<code>$1</code>, <code>$2</code>) in the replacement string, or a <strong>callback function</strong> for dynamic replacements. Use the <code>g</code> flag to replace all occurrences.</p>
<pre><code>// Simple replace
'hello world'.replace(/world/, 'JS');  // "hello JS"

// Global replace
'aabba'.replace(/a/g, 'x');  // "xxbbx"

// Using capture groups
'2024-03-15'.replace(/(\\d{4})-(\\d{2})-(\\d{2})/, '$2/$3/$1');
// "03/15/2024"

// Callback function
'hello'.replace(/./g, (char, i) =&gt; {
  return i % 2 === 0 ? char.toUpperCase() : char;
}); // "HeLlO"

// replaceAll (ES2021) — no g flag needed
'aabba'.replaceAll('a', 'x'); // "xxbbx"</code></pre>`
                },
                {
                    q: "What do the different regex flags do?",
                    a: `<p>Flags modify how the pattern is matched: <code>g</code> (global), <code>i</code> (case-insensitive), <code>m</code> (multiline), <code>s</code> (dotAll), <code>u</code> (unicode), <code>d</code> (indices), <code>v</code> (unicodeSets).</p>
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
/a(b)/d.exec('ab');     // includes .indices property</code></pre>`
                },
                {
                    q: "What are named capturing groups?",
                    a: `<p><strong>Named groups</strong> use <code>(?&lt;name&gt;pattern)</code> syntax to assign names to captures, making regex more readable. Access them via <code>match.groups.name</code> or <code>$&lt;name&gt;</code> in replacements.</p>
<pre><code>const dateRe = /(?&lt;year&gt;\\d{4})-(?&lt;month&gt;\\d{2})-(?&lt;day&gt;\\d{2})/;
const match = dateRe.exec('2024-03-15');

console.log(match.groups.year);  // "2024"
console.log(match.groups.month); // "03"
console.log(match.groups.day);   // "15"

// Named groups in replace
'2024-03-15'.replace(dateRe, '$&lt;day&gt;/$&lt;month&gt;/$&lt;year&gt;');
// "15/03/2024"

// Destructuring
const { groups: { year, month, day } } = dateRe.exec('2024-03-15');
console.log(year, month, day); // "2024" "03" "15"</code></pre>`
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
                    a: `<p>The <strong>Singleton</strong> ensures only one instance of a class exists. In JavaScript, modules are singletons by default. You can also use a class with a static instance check.</p>
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
export const db = new Database('localhost');</code></pre>`
                },
                {
                    q: "How does the Observer (Pub/Sub) pattern work?",
                    a: `<p>The <strong>Observer</strong> pattern lets objects subscribe to events and get notified when they occur. A subject maintains a list of observers and calls them when state changes.</p>
<pre><code>class EventEmitter {
  #events = {};

  on(event, fn) {
    (this.#events[event] ??= []).push(fn);
    return () =&gt; this.off(event, fn); // unsubscribe
  }

  off(event, fn) {
    this.#events[event] = this.#events[event]?.filter(f =&gt; f !== fn);
  }

  emit(event, ...args) {
    this.#events[event]?.forEach(fn =&gt; fn(...args));
  }
}

const bus = new EventEmitter();
const unsub = bus.on('msg', (data) =&gt; console.log(data));
bus.emit('msg', 'Hello'); // "Hello"
unsub(); // unsubscribe</code></pre>`
                },
                {
                    q: "What is the Factory pattern?",
                    a: `<p>The <strong>Factory</strong> pattern encapsulates object creation logic, returning different types/instances based on input without exposing the construction details to the caller.</p>
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
console.log(v1.type); // "car"</code></pre>`
                },
                {
                    q: "What is the Module pattern?",
                    a: `<p>The <strong>Module</strong> pattern uses closures (or ES modules) to encapsulate private state, exposing only a public API. It prevents global namespace pollution and enforces information hiding.</p>
<pre><code>// IIFE Module pattern
const Counter = (() =&gt; {
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
export const increment = () =&gt; ++count;
export const getCount = () =&gt; count;</code></pre>`
                },
                {
                    q: "How does the Strategy pattern work?",
                    a: `<p>The <strong>Strategy</strong> pattern defines a family of interchangeable algorithms and lets the client choose which one to use at runtime. In JavaScript, functions as first-class citizens make this pattern natural.</p>
<pre><code>const strategies = {
  add: (a, b) =&gt; a + b,
  subtract: (a, b) =&gt; a - b,
  multiply: (a, b) =&gt; a * b
};

function calculate(strategy, a, b) {
  if (!strategies[strategy]) throw new Error('Unknown strategy');
  return strategies[strategy](a, b);
}

calculate('add', 5, 3);      // 8
calculate('multiply', 5, 3); // 15

// Validation strategies
const validators = {
  email: (v) =&gt; /^[^@]+@[^@]+$/.test(v),
  minLength: (v) =&gt; v.length &gt;= 8
};

validators.email('a@b.com'); // true</code></pre>`
                },
                {
                    q: "What is the Decorator pattern?",
                    a: `<p>The <strong>Decorator</strong> pattern wraps an object to extend its behavior without modifying the original. In JavaScript, higher-order functions naturally serve as decorators.</p>
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
}</code></pre>`
                },
                {
                    q: "How does the Proxy pattern work in JavaScript?",
                    a: `<p>The <strong>Proxy</strong> pattern intercepts operations on an object (get, set, delete, etc.). JavaScript's built-in <code>Proxy</code> object provides native support for this pattern with customizable traps.</p>
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
console.log(data.z);  // logs "Accessing: z", returns "default"</code></pre>`
                },
                {
                    q: "What is the Iterator pattern?",
                    a: `<p>The <strong>Iterator</strong> pattern provides a standard way to traverse a collection. JavaScript uses the <code>Symbol.iterator</code> protocol — any object with a <code>[Symbol.iterator]</code> method is iterable and works with <code>for...of</code>.</p>
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
        return current &lt;= end
          ? { value: current++, done: false }
          : { done: true };
      }
    };
  }
}

for (const n of new Range(1, 5)) {
  console.log(n); // 1, 2, 3, 4, 5
}
console.log([...new Range(1, 3)]); // [1, 2, 3]</code></pre>`
                },
                {
                    q: "What is the Mediator pattern?",
                    a: `<p>The <strong>Mediator</strong> centralizes communication between objects so they don't reference each other directly. Components communicate through the mediator, reducing tight coupling.</p>
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
      this.#users.forEach((user, name) =&gt; {
        if (name !== from) user.receive(message, from);
      });
    }
  }
}

class User {
  constructor(name) { this.name = name; }
  send(msg, to) { this.room.send(msg, this.name, to); }
  receive(msg, from) { console.log(from + ': ' + msg); }
}</code></pre>`
                },
                {
                    q: "What is the Revealing Module pattern?",
                    a: `<p>The <strong>Revealing Module</strong> pattern defines all functions privately, then returns an object that maps public names to private functions. This makes the public API explicit and easy to read.</p>
<pre><code>const UserService = (() =&gt; {
  const users = [];

  function addUser(name) {
    users.push({ name, id: users.length + 1 });
  }

  function getUser(id) {
    return users.find(u =&gt; u.id === id);
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
UserService.count();   // 1</code></pre>`
                }
            ]
        },
        {
            id: "memory-management",
            title: "Memory Management",
            icon: "bi-memory",
            questions: [
                {
                    q: "How does garbage collection work in JavaScript?",
                    a: `<p>JavaScript uses <strong>automatic garbage collection</strong>. The engine periodically finds objects that are no longer reachable from the root (global object, current call stack) and frees their memory. You cannot trigger GC manually.</p>
<pre><code>function createData() {
  const obj = { data: new Array(1000) };
  return obj.data; // obj is unreachable after return
}
// obj is garbage collected, but obj.data survives via reference

let ref = createData();
ref = null; // now the array is also unreachable → GC can collect it

// Reachability is key:
// - Global variables → always reachable
// - Local variables → reachable during function execution
// - Closures → keep outer variables alive</code></pre>`
                },
                {
                    q: "What is the mark-and-sweep algorithm?",
                    a: `<p><strong>Mark-and-sweep</strong> is the primary GC algorithm in modern engines. It starts from roots (global, stack), marks all reachable objects, then sweeps (frees) unmarked ones. Modern engines use generational GC for efficiency.</p>
<pre><code>// Phase 1: Mark — traverse from roots
// Global → obj1 → obj2 (both marked as reachable)

// Phase 2: Sweep — free unmarked objects
// Any object not marked is collected

// Generational GC (V8):
// - Young generation: new objects, collected frequently
// - Old generation: survived objects, collected less often

// Reference counting (older approach) fails with cycles:
let a = {};
let b = {};
a.ref = b;
b.ref = a;
a = null;
b = null;
// Mark-and-sweep handles this — both unreachable from root</code></pre>`
                },
                {
                    q: "What are common causes of memory leaks?",
                    a: `<p>Memory leaks occur when objects remain referenced unintentionally: forgotten timers, detached DOM nodes, closures holding large scopes, global variables, and growing collections that are never cleaned up.</p>
<pre><code>// 1. Forgotten timers
const id = setInterval(() =&gt; {
  doSomething(); // keeps running forever
}, 1000);
// Fix: clearInterval(id) when done

// 2. Event listeners not removed
element.addEventListener('click', handler);
// Fix: element.removeEventListener('click', handler)

// 3. Accidental globals
function leak() {
  leaked = 'oops'; // no let/const → global variable
}

// 4. Growing arrays/maps never cleared
const cache = [];
function addToCache(item) {
  cache.push(item); // grows forever
}</code></pre>`
                },
                {
                    q: "What is WeakRef and when would you use it?",
                    a: `<p><code>WeakRef</code> holds a weak reference to an object — it doesn't prevent garbage collection. Use it when you want to observe an object but don't want to keep it alive. Access the value with <code>.deref()</code>, which returns <code>undefined</code> if collected.</p>
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

// Common with FinalizationRegistry
const registry = new FinalizationRegistry((id) =&gt; {
  console.log('Collected:', id);
});
registry.register(target, 'myObject');</code></pre>`
                },
                {
                    q: "How can WeakMap be used for caching?",
                    a: `<p><code>WeakMap</code> holds keys weakly — when the key object is garbage collected, its entry is automatically removed. Perfect for caching computed data associated with objects without preventing their collection.</p>
<pre><code>const cache = new WeakMap();

function expensiveCompute(obj) {
  if (cache.has(obj)) return cache.get(obj);

  const result = /* heavy computation */ obj.data * 2;
  cache.set(obj, result);
  return result;
}

let item = { data: 42 };
expensiveCompute(item); // computes and caches
expensiveCompute(item); // returns cached result

item = null;
// Cache entry for item is automatically cleaned up by GC

// WeakMap vs Map for caching:
// Map: keeps keys alive → memory leak potential
// WeakMap: lets keys be collected → no leak</code></pre>`
                },
                {
                    q: "How do closures cause memory leaks?",
                    a: `<p>Closures retain references to their outer scope's variables. If a closure references a large object or is long-lived (e.g., event handler), that object stays in memory even if no longer needed.</p>
<pre><code>function createHandler() {
  const largeData = new Array(1000000).fill('x');

  // This closure keeps largeData alive
  return function handler() {
    console.log(largeData.length);
  };
}

const fn = createHandler();
// largeData cannot be GC'd as long as fn exists

// Fix: null out unneeded references
function createBetterHandler() {
  let largeData = new Array(1000000).fill('x');
  const length = largeData.length; // extract what you need
  largeData = null; // release the large array

  return function handler() {
    console.log(length);
  };
}</code></pre>`
                },
                {
                    q: "What are DOM-related memory leaks?",
                    a: `<p>DOM leaks happen when JavaScript references removed DOM elements. Even after removing an element from the DOM tree, if a JS variable still points to it, the element (and its subtree) cannot be garbage collected.</p>
<pre><code>// Leak: reference to removed element
const btn = document.getElementById('myBtn');
document.body.removeChild(btn);
// btn variable still holds reference → element stays in memory

// Fix: null out the reference
let element = document.getElementById('myBtn');
element.remove();
element = null; // now GC can collect it

// Listeners on removed elements
const card = document.querySelector('.card');
card.addEventListener('click', handler);
card.remove();
// Fix: remove listener first
card.removeEventListener('click', handler);
card.remove();</code></pre>`
                },
                {
                    q: "What is a detached DOM tree?",
                    a: `<p>A <strong>detached DOM tree</strong> is a subtree of DOM nodes that has been removed from the document but is still referenced by JavaScript. It lurks in memory and is a common source of leaks in SPAs.</p>
<pre><code>// Creating a detached DOM tree
let container = document.createElement('div');
for (let i = 0; i &lt; 100; i++) {
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
// Memory tab → Take heap snapshot
// Filter by "Detached" to find leaked DOM nodes</code></pre>`
                },
                {
                    q: "How do you profile memory usage in the browser?",
                    a: `<p>Use Chrome DevTools <strong>Memory</strong> tab for heap snapshots, allocation timelines, and allocation sampling. The <strong>Performance</strong> tab shows memory over time. Compare snapshots to find leaks.</p>
<pre><code>// Performance API for basic monitoring
console.log(performance.memory);
// { usedJSHeapSize, totalJSHeapSize, jsHeapSizeLimit }

// DevTools workflow:
// 1. Memory tab → Take Heap Snapshot (baseline)
// 2. Perform the leaking action
// 3. Take another snapshot
// 4. Compare snapshots → "Comparison" view
// 5. Look for objects that grew unexpectedly

// Allocation timeline:
// Records allocations over time
// Blue bars = allocated, gray = freed
// Persistent blue bars = potential leak

// Mark timeline for correlation
console.timeStamp('Action started');
// ... perform action ...
console.timeStamp('Action ended');</code></pre>`
                },
                {
                    q: "What are best practices for managing memory?",
                    a: `<p>Minimize global variables, clean up timers and listeners, use weak references for caches, avoid detached DOM nodes, null out large references, and profile regularly in development.</p>
<pre><code>// 1. Clean up in component lifecycle
class Component {
  init() {
    this.timer = setInterval(this.update, 1000);
    this.handler = (e) =&gt; this.onClick(e);
    document.addEventListener('click', this.handler);
  }
  destroy() {
    clearInterval(this.timer);
    document.removeEventListener('click', this.handler);
  }
}

// 2. Use WeakMap/WeakSet for metadata
const metadata = new WeakMap();
metadata.set(domNode, { clicks: 0 });

// 3. Limit cache size
class LRUCache {
  #map = new Map();
  #max;
  constructor(max = 100) { this.#max = max; }
  set(k, v) {
    this.#map.delete(k);
    this.#map.set(k, v);
    if (this.#map.size &gt; this.#max)
      this.#map.delete(this.#map.keys().next().value);
  }
}</code></pre>`
                }
            ]
        },
        {
            id: "modules-js",
            title: "Modules",
            icon: "bi-box-seam",
            questions: [
                {
                    q: "How do import and export work in ES modules?",
                    a: `<p>ES modules use <code>export</code> to expose values and <code>import</code> to consume them. Modules are strict mode by default, have their own scope, and are evaluated once (singleton). Use <code>type="module"</code> in script tags.</p>
<pre><code>// math.js
export function add(a, b) { return a + b; }
export const PI = 3.14159;

// app.js
import { add, PI } from './math.js';
console.log(add(2, 3)); // 5
console.log(PI);         // 3.14159

// In HTML
&lt;script type="module" src="app.js"&gt;&lt;/script&gt;

// Modules are:
// - Strict mode by default
// - Evaluated once (cached)
// - Deferred by default (like defer attribute)</code></pre>`
                },
                {
                    q: "What is the difference between default and named exports?",
                    a: `<p><strong>Named exports</strong> require matching names on import (can be renamed with <code>as</code>). <strong>Default export</strong> allows any import name. A module can have one default export and many named exports.</p>
<pre><code>// Named exports
export const name = 'Alice';
export function greet() { return 'Hi'; }

import { name, greet } from './user.js';
import { name as userName } from './user.js';  // rename

// Default export
export default class User { }

import User from './user.js';       // any name works
import MyUser from './user.js';     // same thing

// Mix both
export default class User { }
export const role = 'admin';

import User, { role } from './user.js';</code></pre>`
                },
                {
                    q: "How does dynamic import() work?",
                    a: `<p><code>import()</code> returns a promise that resolves to the module object. It enables <strong>code splitting</strong> and <strong>lazy loading</strong> — modules are only fetched when needed, reducing initial load time.</p>
<pre><code>// Dynamic import — returns a Promise
const module = await import('./heavy-module.js');
module.doSomething();

// Conditional loading
if (needsChart) {
  const { Chart } = await import('./chart.js');
  new Chart(canvas);
}

// Route-based code splitting
const routes = {
  '/dashboard': () =&gt; import('./pages/dashboard.js'),
  '/settings': () =&gt; import('./pages/settings.js')
};

async function navigate(path) {
  const module = await routes[path]();
  module.render();
}</code></pre>`
                },
                {
                    q: "What is CommonJS and how does it differ from ES modules?",
                    a: `<p><strong>CommonJS</strong> (CJS) uses <code>require()</code> and <code>module.exports</code>. It's synchronous and used in Node.js. <strong>ES modules</strong> (ESM) use <code>import/export</code>, are asynchronous, and support static analysis for tree shaking.</p>
<pre><code>// CommonJS (Node.js)
const fs = require('fs');
module.exports = { readFile: fs.readFile };
module.exports.helper = () =&gt; {};

// ES Modules
import fs from 'fs';
export { readFile } from 'fs';

// Key differences:
// CJS: synchronous, dynamic, copies values
// ESM: async, static, live bindings

// CJS: require can be conditional
if (condition) { const m = require('./mod'); }

// ESM: import must be top-level (use import() for dynamic)
// if (condition) { import ... }  ← SyntaxError</code></pre>`
                },
                {
                    q: "What role do bundlers play with modules?",
                    a: `<p>Bundlers (Webpack, Vite, Rollup, esbuild) resolve module imports, combine files into optimized bundles, and handle transformations. They enable tree shaking, code splitting, and support various module formats.</p>
<pre><code>// Without bundler: many HTTP requests
// &lt;script type="module" src="a.js"&gt;  → imports b.js → imports c.js
// 3 separate network requests

// With bundler: single optimized file
// a.js + b.js + c.js → bundle.js (one request)

// Bundler features:
// - Tree shaking: remove unused exports
// - Code splitting: separate chunks loaded on demand
// - Minification: smaller file sizes
// - Transpilation: modern JS → compatible JS
// - Asset handling: import CSS, images, etc.

// Vite uses native ESM in dev (fast)
// and Rollup for production builds (optimized)</code></pre>`
                },
                {
                    q: "How do circular dependencies work in modules?",
                    a: `<p>Circular dependencies occur when module A imports B and B imports A. ES modules handle this via <strong>live bindings</strong> — imports are references, not copies. However, values may be <code>undefined</code> if accessed before initialization.</p>
<pre><code>// a.js
import { b } from './b.js';
export const a = 'A';
console.log(b); // "B" (already initialized)

// b.js
import { a } from './a.js';
export const b = 'B';
console.log(a); // undefined! (a.js hasn't finished)

// Execution order: b.js runs first (imported by a.js)
// At that point, a.js hasn't exported 'a' yet

// Fix: use functions (defer access)
// b.js
import { getA } from './a.js';
export const b = 'B';
// Access later: getA() returns "A"

// a.js
export const a = 'A';
export function getA() { return a; }</code></pre>`
                },
                {
                    q: "How does re-exporting work?",
                    a: `<p><strong>Re-exporting</strong> lets a module forward exports from other modules, creating a clean public API from an <code>index.js</code> barrel file. Use <code>export { } from</code> syntax.</p>
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

// Re-export everything
export * from './math.js';

// Rename on re-export
export { add as sum } from './math.js';</code></pre>`
                },
                {
                    q: "What is import.meta?",
                    a: `<p><code>import.meta</code> is an object containing metadata about the current module. The most common property is <code>import.meta.url</code> — the full URL of the module file. It's only available in ES modules.</p>
<pre><code>// Get current module URL
console.log(import.meta.url);
// "file:///project/src/app.js" or "https://example.com/app.js"

// Resolve relative paths
const dataUrl = new URL('./data.json', import.meta.url);
const response = await fetch(dataUrl);

// Vite-specific
import.meta.env.MODE;          // "development" or "production"
import.meta.env.VITE_API_URL;  // custom env variable
import.meta.hot;               // HMR API

// Node.js
import.meta.dirname;  // like __dirname (Node 21+)
import.meta.filename; // like __filename (Node 21+)</code></pre>`
                },
                {
                    q: "What is tree shaking?",
                    a: `<p><strong>Tree shaking</strong> is a dead-code elimination technique used by bundlers. It analyzes ES module <code>import/export</code> statements statically and removes unused exports from the final bundle.</p>
<pre><code>// utils.js
export function used() { return 'I am used'; }
export function unused() { return 'I am not used'; }

// app.js
import { used } from './utils.js';
console.log(used());

// After tree shaking: unused() is removed from bundle

// Requirements for tree shaking:
// 1. ES module syntax (import/export)
// 2. No side effects in modules
// 3. Static imports (not dynamic require())

// Mark package as side-effect-free in package.json
// { "sideEffects": false }

// Or specify files with side effects
// { "sideEffects": ["./src/polyfills.js", "*.css"] }</code></pre>`
                },
                {
                    q: "How do you handle module loading errors?",
                    a: `<p>Static imports fail at load time and can't be caught with try/catch. Dynamic <code>import()</code> returns a promise, so you can use <code>.catch()</code> or <code>try/catch</code> with <code>await</code> to handle loading failures gracefully.</p>
<pre><code>// Dynamic import — error handling
try {
  const mod = await import('./optional-feature.js');
  mod.init();
} catch (e) {
  console.warn('Feature not available:', e.message);
  // Fallback behavior
}

// Promise-based
import('./analytics.js')
  .then(m =&gt; m.track('pageview'))
  .catch(() =&gt; console.warn('Analytics unavailable'));

// Fallback pattern
async function loadModule(primary, fallback) {
  try {
    return await import(primary);
  } catch {
    return await import(fallback);
  }
}

const charts = await loadModule('./fancy-charts.js', './basic-charts.js');</code></pre>`
                }
            ]
        },
        {
            id: "this-keyword",
            title: "this Keyword",
            icon: "bi-cursor-text",
            questions: [
                {
                    q: "What does 'this' refer to in the global context?",
                    a: `<p>In the global context, <code>this</code> refers to the <strong>global object</strong>: <code>window</code> in browsers, <code>globalThis</code> universally. In strict mode at the top level of a module, <code>this</code> is <code>undefined</code>.</p>
<pre><code>// Browser (non-strict)
console.log(this === window); // true

// globalThis — works everywhere
console.log(globalThis);
// window in browser, global in Node.js

// Strict mode (module)
'use strict';
console.log(this); // undefined (at top level)

// ES module
// this is undefined at top level of a module
&lt;script type="module"&gt;
  console.log(this); // undefined
&lt;/script&gt;</code></pre>`
                },
                {
                    q: "How does 'this' work inside a regular function?",
                    a: `<p>In a regular function, <code>this</code> depends on <em>how</em> the function is called. In non-strict mode, standalone calls set <code>this</code> to the global object. In strict mode, <code>this</code> is <code>undefined</code>.</p>
<pre><code>function showThis() {
  console.log(this);
}

showThis();           // window (non-strict) or undefined (strict)

// 'this' is determined at call time
const obj = { fn: showThis };
obj.fn();             // obj (called as method)

// Same function, different 'this'
const fn = obj.fn;
fn();                 // window or undefined (standalone call)</code></pre>`
                },
                {
                    q: "How does 'this' work in object methods?",
                    a: `<p>When a function is called as a method of an object (<code>obj.method()</code>), <code>this</code> refers to the object before the dot. The binding depends on the call site, not where the function was defined.</p>
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

// Nested object
const app = {
  user: {
    name: 'Bob',
    getName() { return this.name; }
  }
};
app.user.getName(); // "Bob" — this = app.user (not app)</code></pre>`
                },
                {
                    q: "How does 'this' work in arrow functions?",
                    a: `<p>Arrow functions do <strong>not</strong> have their own <code>this</code>. They inherit <code>this</code> from the enclosing lexical scope at the time they are defined. This cannot be changed by <code>call</code>, <code>apply</code>, or <code>bind</code>.</p>
<pre><code>const obj = {
  name: 'Alice',
  regular() { return this.name; },         // "Alice"
  arrow: () =&gt; this.name,                  // undefined (outer this)
  delayed() {
    setTimeout(() =&gt; {
      console.log(this.name);              // "Alice" — arrow inherits
    }, 100);
    setTimeout(function() {
      console.log(this.name);              // undefined — own this
    }, 100);
  }
};

// Cannot rebind arrow function's this
const arrow = () =&gt; this;
arrow.call({ a: 1 }); // still outer this, not { a: 1 }</code></pre>`
                },
                {
                    q: "How do call, apply, and bind set 'this'?",
                    a: `<p><code>call</code> and <code>apply</code> invoke the function immediately with a specified <code>this</code>. <code>bind</code> returns a new function with <code>this</code> permanently set. <code>call</code> takes individual args; <code>apply</code> takes an array.</p>
<pre><code>function greet(greeting, punct) {
  return greeting + ', ' + this.name + punct;
}

const user = { name: 'Alice' };

// call — individual arguments
greet.call(user, 'Hello', '!');   // "Hello, Alice!"

// apply — array of arguments
greet.apply(user, ['Hi', '.']);   // "Hi, Alice."

// bind — returns new function
const bound = greet.bind(user, 'Hey');
bound('?');  // "Hey, Alice?"

// bind is permanent — can't rebind
bound.call({ name: 'Bob' }, '!'); // still "Hey, Alice!"</code></pre>`
                },
                {
                    q: "How does 'this' work inside a class?",
                    a: `<p>In class methods, <code>this</code> refers to the instance. However, if a method is extracted and called standalone, <code>this</code> is lost. Use arrow functions in class fields or <code>bind</code> in the constructor to fix it.</p>
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
  greetArrow = () =&gt; 'Hi, ' + this.name;
}

const u = new User('Alice');
u.greet();          // "Hi, Alice"

const fn = u.greet;
fn();               // TypeError or "Hi, undefined" — this lost

const fn2 = u.greetArrow;
fn2();              // "Hi, Alice" — arrow keeps this</code></pre>`
                },
                {
                    q: "How does 'this' work in event handlers?",
                    a: `<p>In DOM event handlers added via <code>addEventListener</code>, <code>this</code> refers to the element the listener is attached to. Arrow functions inherit the outer <code>this</code> instead.</p>
<pre><code>const btn = document.querySelector('button');

// Regular function — this = element
btn.addEventListener('click', function(e) {
  console.log(this);          // &lt;button&gt; element
  console.log(this === e.currentTarget); // true
});

// Arrow function — this = outer scope
btn.addEventListener('click', (e) =&gt; {
  console.log(this);          // window or outer this
  console.log(e.currentTarget); // use this instead for element
});

// Inline handler
// &lt;button onclick="console.log(this)"&gt; → the button element</code></pre>`
                },
                {
                    q: "What is explicit binding in JavaScript?",
                    a: `<p><strong>Explicit binding</strong> means manually setting <code>this</code> using <code>call</code>, <code>apply</code>, or <code>bind</code>. It takes precedence over implicit binding (method calls) but not over <code>new</code>.</p>
<pre><code>function identify() {
  return this.name;
}

const alice = { name: 'Alice' };
const bob = { name: 'Bob' };

// Explicit binding overrides implicit
identify.call(alice);   // "Alice"
identify.call(bob);     // "Bob"

// Binding precedence (highest to lowest):
// 1. new keyword
// 2. Explicit: call / apply / bind
// 3. Implicit: obj.method()
// 4. Default: global / undefined

const bound = identify.bind(alice);
const obj = { name: 'Obj', fn: bound };
obj.fn(); // "Alice" — bind wins over implicit</code></pre>`
                },
                {
                    q: "How does 'this' work with the new keyword?",
                    a: `<p>When a function is called with <code>new</code>, JavaScript creates a fresh object, sets <code>this</code> to that object, executes the constructor, and returns <code>this</code> (unless the constructor explicitly returns an object).</p>
<pre><code>function Person(name) {
  // 'new' does: this = {}
  this.name = name;
  // implicitly returns this
}

const p = new Person('Alice');
console.log(p.name); // "Alice"

// new overrides bind
const BoundPerson = Person.bind({ name: 'Ignored' });
const p2 = new BoundPerson('Bob');
console.log(p2.name); // "Bob" — new wins

// If constructor returns an object
function Weird() {
  this.a = 1;
  return { b: 2 }; // this is discarded
}
new Weird(); // { b: 2 }, not { a: 1 }</code></pre>`
                },
                {
                    q: "What is 'lost this' and how do you fix it?",
                    a: `<p><strong>Lost this</strong> happens when a method is passed as a callback or assigned to a variable — the implicit binding to the object is broken. Common in <code>setTimeout</code>, event handlers, and array methods.</p>
<pre><code>class Timer {
  constructor() {
    this.seconds = 0;
  }

  start() {
    // ❌ 'this' is lost in callback
    setInterval(function() {
      this.seconds++; // TypeError or NaN
    }, 1000);

    // ✅ Fix 1: arrow function
    setInterval(() =&gt; {
      this.seconds++; // works — inherits this
    }, 1000);

    // ✅ Fix 2: bind
    setInterval(function() {
      this.seconds++;
    }.bind(this), 1000);

    // ✅ Fix 3: store reference
    const self = this;
    setInterval(function() {
      self.seconds++;
    }, 1000);
  }
}</code></pre>`
                }
            ]
        },
        {
            id: "hoisting-scope",
            title: "Hoisting & TDZ",
            icon: "bi-arrow-up-circle",
            questions: [
                {
                    q: "How does var hoisting work?",
                    a: `<p><code>var</code> declarations are hoisted to the top of their function scope — the variable exists from the start but its value is <code>undefined</code> until the assignment line executes.</p>
<pre><code>console.log(x); // undefined (not ReferenceError)
var x = 5;
console.log(x); // 5

// Equivalent to:
var x;            // declaration hoisted
console.log(x);   // undefined
x = 5;            // assignment stays in place
console.log(x);   // 5

// Function-scoped, not block-scoped
if (true) {
  var y = 10;
}
console.log(y);   // 10 (leaked out of block)</code></pre>`
                },
                {
                    q: "How does function hoisting work?",
                    a: `<p><strong>Function declarations</strong> are fully hoisted — both the name and the body are available before the declaration line. <strong>Function expressions</strong> follow variable hoisting rules (only the variable is hoisted).</p>
<pre><code>// Function declaration — fully hoisted
greet(); // "Hello" — works before declaration
function greet() { return 'Hello'; }

// Function expression (var) — partially hoisted
// sayHi(); // TypeError: sayHi is not a function
var sayHi = function() { return 'Hi'; };

// Function expression (const) — not hoisted at all
// sayBye(); // ReferenceError: Cannot access before init
const sayBye = function() { return 'Bye'; };

// Declaration overrides var in hoisting
var fn = 'string';
function fn() { return 'function'; }
console.log(typeof fn); // "string" (var assignment runs last)</code></pre>`
                },
                {
                    q: "What is the Temporal Dead Zone (TDZ)?",
                    a: `<p>The <strong>TDZ</strong> is the zone between the start of a block and the <code>let</code>/<code>const</code> declaration where the variable exists but cannot be accessed. Accessing it throws a <code>ReferenceError</code>.</p>
<pre><code>// TDZ starts at block opening
{
  // TDZ for 'x' starts here
  // console.log(x); // ReferenceError: Cannot access 'x' before init
  let x = 10;        // TDZ ends here
  console.log(x);    // 10
}

// var has no TDZ
console.log(y); // undefined (hoisted, no TDZ)
var y = 20;

// TDZ in function params
function test(a = b, b = 1) { }
// test(); // ReferenceError: b is in TDZ when a's default runs

// typeof doesn't save you
// typeof undeclaredVar;  // "undefined" — safe
// typeof tdzVar;         // ReferenceError if let/const exists
let tdzVar = 1;</code></pre>`
                },
                {
                    q: "Are class declarations hoisted?",
                    a: `<p>Class declarations are hoisted but <strong>not initialized</strong> — they are in the TDZ until the declaration is reached. This means you cannot use a class before declaring it, unlike function declarations.</p>
<pre><code>// const p = new Person('Alice'); // ReferenceError: TDZ

class Person {
  constructor(name) { this.name = name; }
}

const p = new Person('Alice'); // works after declaration

// Class expressions follow the same rules
// const p2 = new Animal(); // ReferenceError
const Animal = class {
  constructor(type) { this.type = type; }
};

// Compare with function declarations
const f = new Foo(); // works! Function declarations are fully hoisted
function Foo() { this.x = 1; }</code></pre>`
                },
                {
                    q: "What is the hoisting order when var and function declarations coexist?",
                    a: `<p>Function declarations are hoisted <strong>above</strong> var declarations. If both share a name, the function wins initially, but a var assignment at runtime will overwrite it.</p>
<pre><code>console.log(typeof foo); // "function" — function hoisted above var

var foo = 'string';
function foo() { return 'function'; }

console.log(typeof foo); // "string" — var assignment ran

// Hoisting order equivalent:
// function foo() { return 'function'; }  ← hoisted first
// var foo; ← hoisted but ignored (foo already exists)
// console.log(typeof foo); // "function"
// foo = 'string'; ← assignment overrides
// console.log(typeof foo); // "string"

// Multiple function declarations: last one wins
function bar() { return 1; }
function bar() { return 2; }
console.log(bar()); // 2</code></pre>`
                },
                {
                    q: "How do function expressions behave with hoisting?",
                    a: `<p>Function expressions are <strong>not hoisted</strong> as functions. The variable is hoisted per its declaration type (<code>var</code> → undefined, <code>let/const</code> → TDZ), but the function value isn't assigned until runtime.</p>
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
// myFunc(); // ReferenceError — name only available inside

// Arrow functions follow the same rules
// arrowFn(); // ReferenceError
const arrowFn = () =&gt; 'arrow';</code></pre>`
                },
                {
                    q: "How does block scope work with let and const?",
                    a: `<p><code>let</code> and <code>const</code> are <strong>block-scoped</strong> — they only exist within the nearest <code>{}</code> block. This includes <code>if</code>, <code>for</code>, <code>while</code>, and standalone blocks. <code>var</code> ignores block scope.</p>
<pre><code>if (true) {
  var a = 1;    // function-scoped → leaks out
  let b = 2;    // block-scoped → stays inside
  const c = 3;  // block-scoped → stays inside
}
console.log(a); // 1
// console.log(b); // ReferenceError
// console.log(c); // ReferenceError

// For loop — classic problem
for (var i = 0; i &lt; 3; i++) {
  setTimeout(() =&gt; console.log(i), 0); // 3, 3, 3
}
for (let j = 0; j &lt; 3; j++) {
  setTimeout(() =&gt; console.log(j), 0); // 0, 1, 2
}
// let creates a new binding per iteration</code></pre>`
                },
                {
                    q: "How does global scope differ between var and let/const?",
                    a: `<p><code>var</code> at the top level creates a property on the global object (<code>window</code>). <code>let</code> and <code>const</code> at the top level do not — they exist in a separate declarative environment.</p>
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

// This is why let/const are safer — no accidental
// global object pollution</code></pre>`
                },
                {
                    q: "What will this code output? (Hoisting quiz)",
                    a: `<p>These output prediction questions test your understanding of hoisting, TDZ, scope, and execution order.</p>
<pre><code>// Question 1
var a = 1;
function foo() {
  console.log(a); // undefined — local 'a' is hoisted
  var a = 2;
  console.log(a); // 2
}
foo();

// Question 2
console.log(typeof x); // "function" — function hoisted above var
var x = 1;
function x() {}
console.log(typeof x); // "number" — assignment ran

// Question 3
let y = 1;
if (true) {
  // console.log(y); // ReferenceError — TDZ (block has its own y)
  let y = 2;
  console.log(y);    // 2
}
console.log(y);       // 1 — outer y</code></pre>`
                },
                {
                    q: "What are best practices for variable declarations and hoisting?",
                    a: `<p>Use <code>const</code> by default, <code>let</code> when reassignment is needed, avoid <code>var</code>. Declare variables at the top of their scope. Use function declarations for named functions that need hoisting; otherwise use <code>const</code> with arrow functions.</p>
<pre><code>// ✅ const by default
const MAX_RETRIES = 3;
const users = [];
const getUser = (id) =&gt; users.find(u =&gt; u.id === id);

// ✅ let only when reassignment needed
let count = 0;
for (let i = 0; i &lt; 10; i++) count += i;

// ❌ Avoid var
// var x = 1; // function-scoped, hoisted, goes on window

// ✅ Declare at top of scope
function process(items) {
  const results = [];   // declared at top
  let total = 0;        // declared at top

  for (const item of items) {
    total += item.value;
    results.push(item.name);
  }
  return { results, total };
}</code></pre>`
                }
            ]
        },
        {
            id: "spread-rest-destructuring",
            title: "Spread, Rest & Destructuring",
            icon: "bi-three-dots",
            questions: [
                {
                    q: "How does the spread operator work with arrays?",
                    a: `<p>The <strong>spread</strong> operator (<code>...</code>) expands an iterable into individual elements. Use it to copy arrays, merge arrays, convert iterables, and pass array items as function arguments.</p>
<pre><code>// Copy array (shallow)
const original = [1, 2, 3];
const copy = [...original];

// Merge arrays
const merged = [...[1, 2], ...[3, 4]]; // [1, 2, 3, 4]

// Add elements
const withExtra = [0, ...original, 4]; // [0, 1, 2, 3, 4]

// Convert iterable to array
const chars = [...'hello']; // ['h', 'e', 'l', 'l', 'o']
const unique = [...new Set([1, 1, 2])]; // [1, 2]

// Function arguments
const nums = [3, 1, 2];
Math.max(...nums); // 3</code></pre>`
                },
                {
                    q: "How does the spread operator work with objects?",
                    a: `<p>Object spread copies own enumerable properties into a new object. Later properties override earlier ones. It's a <strong>shallow</strong> copy — nested objects are still shared references.</p>
<pre><code>// Copy object (shallow)
const user = { name: 'Alice', age: 30 };
const copy = { ...user };

// Merge objects (later wins)
const defaults = { theme: 'light', lang: 'en' };
const prefs = { theme: 'dark' };
const config = { ...defaults, ...prefs };
// { theme: 'dark', lang: 'en' }

// Add/override properties
const updated = { ...user, age: 31, role: 'admin' };
// { name: 'Alice', age: 31, role: 'admin' }

// Shallow copy caveat
const nested = { a: { b: 1 } };
const clone = { ...nested };
clone.a.b = 99;
console.log(nested.a.b); // 99 — shared reference!</code></pre>`
                },
                {
                    q: "How do rest parameters work in functions?",
                    a: `<p><strong>Rest parameters</strong> (<code>...args</code>) collect remaining arguments into a real array. They must be the last parameter. Unlike the <code>arguments</code> object, rest params are a proper array with all array methods.</p>
<pre><code>function sum(...numbers) {
  return numbers.reduce((a, b) =&gt; a + b, 0);
}
sum(1, 2, 3); // 6

// With leading parameters
function log(level, ...messages) {
  messages.forEach(m =&gt; console.log('[' + level + ']', m));
}
log('INFO', 'started', 'ready');

// Rest vs arguments
function oldWay() {
  // arguments is array-like, not a real array
  const args = Array.from(arguments);
}

function newWay(...args) {
  // args is a real array
  args.map(a =&gt; a * 2); // works directly
}</code></pre>`
                },
                {
                    q: "How does array destructuring work?",
                    a: `<p><strong>Array destructuring</strong> extracts values by position into variables. Use commas to skip elements, rest syntax for remaining items, and defaults for missing values.</p>
<pre><code>const [a, b, c] = [1, 2, 3];
console.log(a, b, c); // 1 2 3

// Skip elements
const [first, , third] = [10, 20, 30];
console.log(first, third); // 10 30

// Rest element
const [head, ...tail] = [1, 2, 3, 4];
console.log(head); // 1
console.log(tail); // [2, 3, 4]

// Default values
const [x = 0, y = 0] = [42];
console.log(x, y); // 42, 0

// From functions
const [min, max] = [1, 5, 3].sort((a, b) =&gt; a - b);

// From regex
const [, year, month] = '2024-03'.match(/(\d{4})-(\d{2})/);</code></pre>`
                },
                {
                    q: "How does object destructuring work?",
                    a: `<p><strong>Object destructuring</strong> extracts properties by name into variables. It supports renaming, default values, and computed property names.</p>
<pre><code>const user = { name: 'Alice', age: 30, role: 'admin' };

// Basic
const { name, age } = user;
console.log(name, age); // "Alice" 30

// Rename
const { name: userName, role: userRole } = user;
console.log(userName); // "Alice"

// Default values
const { name: n, score = 0 } = user;
console.log(score); // 0 (not in object)

// Rest
const { name: nm, ...rest } = user;
console.log(rest); // { age: 30, role: "admin" }

// Computed property
const key = 'name';
const { [key]: value } = user;
console.log(value); // "Alice"</code></pre>`
                },
                {
                    q: "How does nested destructuring work?",
                    a: `<p><strong>Nested destructuring</strong> extracts values from deeply nested structures in a single statement. You can combine object and array destructuring at any level.</p>
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
console.log(name1, name2); // "Bob" "Eve"</code></pre>`
                },
                {
                    q: "How do default values work in destructuring?",
                    a: `<p><strong>Default values</strong> apply when the destructured value is <code>undefined</code>. They work with both array and object destructuring and can reference previously destructured variables.</p>
<pre><code>// Object defaults
const { x = 10, y = 20, z = 30 } = { x: 1, y: 2 };
console.log(x, y, z); // 1, 2, 30

// Only undefined triggers defaults, not null
const { a = 'default' } = { a: null };
console.log(a); // null (not "default")

const { b = 'default' } = { b: undefined };
console.log(b); // "default"

// Default with rename
const { name: n = 'Anonymous' } = {};
console.log(n); // "Anonymous"

// Default can reference other destructured values
const { width = 100, height = width } = { width: 50 };
console.log(width, height); // 50, 50</code></pre>`
                },
                {
                    q: "How do you rename variables during destructuring?",
                    a: `<p>Use <code>{ original: newName }</code> to assign a destructured property to a differently named variable. You can combine renaming with defaults.</p>
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

// Common in imports
const { readFile: read, writeFile: write } = require('fs');</code></pre>`
                },
                {
                    q: "How does destructuring work in function parameters?",
                    a: `<p>Destructuring function parameters extracts values directly in the signature, making it clear what properties a function expects. Common for options objects.</p>
<pre><code>// Object parameter destructuring
function createUser({ name, age, role = 'user' }) {
  return { name, age, role };
}
createUser({ name: 'Alice', age: 30 });

// With defaults for the whole parameter
function connect({ host = 'localhost', port = 3000 } = {}) {
  console.log(host + ':' + port);
}
connect();           // "localhost:3000"
connect({ port: 8080 }); // "localhost:8080"

// Array parameter destructuring
function first([head]) { return head; }
first([1, 2, 3]); // 1

// Nested
function getCity({ address: { city } }) { return city; }
getCity({ address: { city: 'NYC' } }); // "NYC"</code></pre>`
                },
                {
                    q: "How do you swap variables using destructuring?",
                    a: `<p>Array destructuring enables elegant <strong>variable swapping</strong> without a temporary variable. This also works with array elements and object properties.</p>
<pre><code>// Swap two variables
let a = 1, b = 2;
[a, b] = [b, a];
console.log(a, b); // 2, 1

// Swap three variables
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
b = temp;</code></pre>`
                }
            ]
        },
        {
            id: "type-coercion",
            title: "Type Coercion & Equality",
            icon: "bi-arrow-left-right",
            questions: [
                {
                    q: "What is the difference between == and ===?",
                    a: `<p><code>==</code> (loose equality) performs <strong>type coercion</strong> before comparing — it converts operands to the same type. <code>===</code> (strict equality) compares both value and type with <strong>no coercion</strong>. Always prefer <code>===</code>.</p>
<pre><code>// Loose equality — coerces types
1 == '1'          // true (string → number)
true == 1         // true (boolean → number)
null == undefined // true (special rule)
'' == false       // true (both → 0)

// Strict equality — no coercion
1 === '1'          // false
true === 1         // false
null === undefined // false
'' === false       // false

// Always use ===
if (value === null) { }
if (typeof x === 'number') { }</code></pre>`
                },
                {
                    q: "How does implicit type coercion work?",
                    a: `<p><strong>Implicit coercion</strong> happens automatically when operators or statements expect a specific type. The <code>+</code> operator prefers strings; <code>-</code>, <code>*</code>, <code>/</code> prefer numbers; <code>if</code> expects booleans.</p>
<pre><code>// String coercion (+ with a string)
'5' + 3       // "53" (number → string)
'5' + true    // "5true"
'5' + null    // "5null"

// Number coercion (-, *, /, comparison)
'5' - 3       // 2  (string → number)
'6' * '2'     // 12
true + 1      // 2  (true → 1)
false + 1     // 1  (false → 0)
null + 5      // 5  (null → 0)

// Boolean coercion (if, &&, ||, !)
if ('hello') { } // true (non-empty string)
if (0) { }       // false
!!'text'         // true (double negation → boolean)</code></pre>`
                },
                {
                    q: "How does explicit type conversion work?",
                    a: `<p><strong>Explicit conversion</strong> uses built-in functions: <code>String()</code>, <code>Number()</code>, <code>Boolean()</code>, <code>parseInt()</code>, <code>parseFloat()</code>. These are clearer and safer than relying on implicit coercion.</p>
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
parseInt('10px');  // 10
parseFloat('3.14em'); // 3.14

// To Boolean
Boolean(0);         // false
Boolean('');        // false
Boolean(null);      // false
Boolean('hello');   // true
Boolean(42);        // true
Boolean([]);        // true (arrays are truthy!)</code></pre>`
                },
                {
                    q: "What are truthy and falsy values?",
                    a: `<p><strong>Falsy</strong> values evaluate to <code>false</code> in a boolean context: <code>false</code>, <code>0</code>, <code>-0</code>, <code>0n</code>, <code>""</code>, <code>null</code>, <code>undefined</code>, <code>NaN</code>. Everything else is <strong>truthy</strong> — including empty arrays and objects.</p>
<pre><code>// All falsy values
if (false) { }
if (0) { }
if ('') { }
if (null) { }
if (undefined) { }
if (NaN) { }

// Surprising truthy values
if ([]) { }           // true!  (empty array)
if ({}) { }           // true!  (empty object)
if ('0') { }          // true!  (non-empty string)
if ('false') { }      // true!  (non-empty string)
if (new Boolean(false)) { } // true! (object wrapper)

// Use !! to check truthiness
!![]    // true
!!0     // false
!!null  // false</code></pre>`
                },
                {
                    q: "How does Boolean() conversion work?",
                    a: `<p><code>Boolean()</code> converts any value to <code>true</code> or <code>false</code>. Only the 8 falsy values convert to <code>false</code>; everything else is <code>true</code>. Commonly used for explicit boolean checks.</p>
<pre><code>// Boolean() vs !!
Boolean('')       // false
!!''              // false (equivalent)

// Filtering truthy values
const mixed = [0, 1, '', 'hello', null, true, undefined];
const truthy = mixed.filter(Boolean);
// [1, 'hello', true]

// In conditional contexts
const name = '';
if (Boolean(name)) {
  // won't execute
}

// Gotcha: Boolean objects are always truthy
const b = new Boolean(false);
if (b) {
  console.log('This runs!'); // Boolean object is truthy
}
if (b.valueOf()) {
  // This does NOT run
}</code></pre>`
                },
                {
                    q: "How does Number() conversion work with different types?",
                    a: `<p><code>Number()</code> converts values to numbers following specific rules. Empty string and null become <code>0</code>, undefined becomes <code>NaN</code>, booleans become <code>0</code>/<code>1</code>, and non-numeric strings become <code>NaN</code>.</p>
<pre><code>Number('42')        // 42
Number('3.14')      // 3.14
Number('')          // 0
Number(' ')         // 0 (whitespace only)
Number('hello')     // NaN
Number('12abc')     // NaN (partial = NaN)

Number(true)        // 1
Number(false)       // 0
Number(null)        // 0
Number(undefined)   // NaN

// vs parseInt/parseFloat (more lenient)
parseInt('12abc')   // 12 (parses until non-digit)
Number('12abc')     // NaN (rejects entirely)

// Unary + operator (shorthand for Number())
+'42'    // 42
+true    // 1
+null    // 0
+''      // 0</code></pre>`
                },
                {
                    q: "How does String() conversion work?",
                    a: `<p><code>String()</code> converts any value to its string representation. It's safer than <code>.toString()</code> because it works on <code>null</code> and <code>undefined</code> without throwing errors.</p>
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
\`value: \${n}\`    // "value: 42"

// Concatenation converts too
'' + 42           // "42"
'' + null         // "null"</code></pre>`
                },
                {
                    q: "What are the comparison rules in JavaScript?",
                    a: `<p>Comparison operators (<code>&lt;</code>, <code>&gt;</code>, <code>&lt;=</code>, <code>&gt;=</code>) coerce operands. String comparison is lexicographic (char by char). If either operand is a number, strings are converted to numbers.</p>
<pre><code>// Number comparison
5 &gt; 3          // true
5 &gt; '3'        // true (string → number)

// String comparison (lexicographic by char code)
'b' &gt; 'a'      // true
'banana' &gt; 'apple' // true
'10' &gt; '9'     // false! ('1' &lt; '9' in char codes)

// Mixed types — numeric conversion
null &gt; 0       // false (null → 0)
null == 0      // false (special rule: null only == undefined)
null &gt;= 0      // true  (null → 0)

// NaN comparisons — always false
NaN &gt; 0        // false
NaN &lt; 0        // false
NaN == NaN     // false

// Object comparison (uses valueOf/toString)
[1] &gt; [0]      // true ("[1]" vs "[0]" → 1 vs 0)</code></pre>`
                },
                {
                    q: "Why does [] == false evaluate to true?",
                    a: `<p>This is one of JavaScript's most confusing coercions. <code>[]</code> is truthy, but <code>[] == false</code> is <code>true</code> due to the abstract equality algorithm: both sides are converted to numbers — <code>[]</code> → <code>""</code> → <code>0</code>, <code>false</code> → <code>0</code>.</p>
<pre><code>// Step-by-step coercion of [] == false
// 1. false → 0 (boolean to number)
// 2. [] == 0
// 3. [].toString() → "" (object to primitive)
// 4. "" == 0
// 5. Number("") → 0
// 6. 0 == 0 → true!

[] == false   // true
[] == true    // false ([] → 0, true → 1, 0 != 1)

// But [] is truthy!
if ([]) { console.log('truthy!'); } // runs!

// More confusing cases
[] == ![]           // true!  (![] = false, then [] == false)
'' == false         // true  ('' → 0, false → 0)
' \t\n' == 0        // true  (whitespace string → 0)

// Solution: always use ===
[] === false  // false — clear and predictable</code></pre>`
                },
                {
                    q: "What is NaN and how does it behave in comparisons?",
                    a: `<p><code>NaN</code> ("Not-a-Number") is unique: it's not equal to anything, <strong>including itself</strong>. Use <code>Number.isNaN()</code> for reliable checks. <code>NaN</code> with any arithmetic yields <code>NaN</code>.</p>
<pre><code>// NaN is never equal to anything
NaN === NaN    // false
NaN == NaN     // false
NaN !== NaN    // true — the ONLY value where this is true

// Checking for NaN
Number.isNaN(NaN);       // true (strict — recommended)
Number.isNaN('hello');   // false

isNaN('hello');          // true (coerces first — unreliable)
isNaN(undefined);        // true (buggy behavior)

// Producing NaN
0 / 0           // NaN
parseInt('abc')  // NaN
Math.sqrt(-1)   // NaN
undefined + 1   // NaN

// NaN propagates
NaN + 5         // NaN
NaN &gt; 0         // false
NaN &lt; 0         // false
NaN == 0        // false</code></pre>`
                }
            ]
        }
    ]
};
