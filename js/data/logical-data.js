window.__CATEGORY_logical__ = {
  category: "logical",
  label: "Logical Reasoning",
  icon: "bi-lightbulb",
  topics: [
    {
      id: "pattern-printing",
      title: "Pattern Printing",
      icon: "bi-grid-3x3",
      questions: [
        {
          q: "Print a star pyramid of height n.",
          a: `<p>Loop rows 1..n, print (n-row) spaces then (2*row-1) stars.</p>
<pre><code>function pyramid(n) {
  for (let i = 1; i &lt;= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
}</code></pre>`
        },
        {
          q: "Print an inverted star pyramid of height n.",
          a: `<p>Start from row n down to 1, printing increasing spaces and decreasing stars.</p>
<pre><code>function invertedPyramid(n) {
  for (let i = n; i &gt;= 1; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
}</code></pre>`
        },
        {
          q: "Print a diamond pattern of height n (odd).",
          a: `<p>Combine a pyramid (top half) and an inverted pyramid (bottom half), skipping the middle row once.</p>
<pre><code>function diamond(n) {
  let half = Math.ceil(n / 2);
  for (let i = 1; i &lt;= half; i++)
    console.log(' '.repeat(half - i) + '*'.repeat(2 * i - 1));
  for (let i = half - 1; i &gt;= 1; i--)
    console.log(' '.repeat(half - i) + '*'.repeat(2 * i - 1));
}</code></pre>`
        },
        {
          q: "Print a number triangle where row i contains numbers 1 to i.",
          a: `<p>For each row i (1..n), print numbers 1 through i separated by spaces.</p>
<pre><code>function numberTriangle(n) {
  for (let i = 1; i &lt;= n; i++) {
    let row = '';
    for (let j = 1; j &lt;= i; j++) row += j + ' ';
    console.log(row.trim());
  }
}</code></pre>`
        },
        {
          q: "Print Floyd's Triangle for n rows.",
          a: `<p>Floyd's Triangle uses consecutive natural numbers, filling each row with one more element than the previous.</p>
<pre><code>function floyds(n) {
  let num = 1;
  for (let i = 1; i &lt;= n; i++) {
    let row = '';
    for (let j = 1; j &lt;= i; j++) row += (num++) + ' ';
    console.log(row.trim());
  }
}</code></pre>`
        },
        {
          q: "Print a hollow square of size n.",
          a: `<p>Print stars on the border (first/last row, first/last column) and spaces inside.</p>
<pre><code>function hollowSquare(n) {
  for (let i = 0; i &lt; n; i++) {
    let row = '';
    for (let j = 0; j &lt; n; j++)
      row += (i === 0 || i === n-1 || j === 0 || j === n-1) ? '* ' : '  ';
    console.log(row);
  }
}</code></pre>`
        },
        {
          q: "Print a right-angled triangle of stars with height n.",
          a: `<p>Row i has i stars, left-aligned.</p>
<pre><code>function rightTriangle(n) {
  for (let i = 1; i &lt;= n; i++) {
    console.log('*'.repeat(i));
  }
}</code></pre>`
        },
        {
          q: "Print a zigzag pattern across n columns and 3 rows.",
          a: `<p>Place stars at positions that follow a zigzag wave across columns.</p>
<pre><code>function zigzag(n) {
  for (let row = 0; row &lt; 3; row++) {
    let line = '';
    for (let col = 0; col &lt; n; col++) {
      let mod = col % 4;
      line += ((mod === row) || (mod === 2 && row === 0)) ? '* ' : '  ';
    }
    console.log(line);
  }
}</code></pre>`
        },
        {
          q: "Print a character pattern where row i prints letters A to the i-th letter.",
          a: `<p>Use <code>String.fromCharCode(65 + j)</code> to convert index to letter.</p>
<pre><code>function charPattern(n) {
  for (let i = 0; i &lt; n; i++) {
    let row = '';
    for (let j = 0; j &lt;= i; j++)
      row += String.fromCharCode(65 + j) + ' ';
    console.log(row.trim());
  }
}</code></pre>`
        },
        {
          q: "Print Pascal's Triangle for n rows.",
          a: `<p>Each element is the sum of the two elements above it. Use a 2D array or compute using combinations.</p>
<pre><code>function pascals(n) {
  let tri = [];
  for (let i = 0; i &lt; n; i++) {
    tri[i] = [1];
    for (let j = 1; j &lt; i; j++)
      tri[i][j] = tri[i-1][j-1] + tri[i-1][j];
    tri[i][i] = 1;
    console.log(' '.repeat(n - i) + tri[i].join(' '));
  }
}</code></pre>`
        }
      ]
    },
    {
      id: "number-series",
      title: "Number Series & Math",
      icon: "bi-123",
      questions: [
        {
          q: "Generate the first n Fibonacci numbers.",
          a: `<p>Start with 0 and 1; each subsequent number is the sum of the previous two.</p>
<pre><code>function fibonacci(n) {
  let a = 0, b = 1, res = [a, b];
  for (let i = 2; i &lt; n; i++) { [a, b] = [b, a + b]; res.push(b); }
  return res;
}</code></pre>`
        },
        {
          q: "Check if a number is prime.",
          a: `<p>A prime is greater than 1 and divisible only by 1 and itself. Check divisors up to its square root.</p>
<pre><code>function isPrime(n) {
  if (n &lt; 2) return false;
  for (let i = 2; i &lt;= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return true;
}</code></pre>`
        },
        {
          q: "Compute the factorial of n.",
          a: `<p>Factorial of n is the product of all positive integers up to n. Base case: 0! = 1.</p>
<pre><code>function factorial(n) {
  if (n &lt;= 1) return 1;
  return n * factorial(n - 1);
}</code></pre>`
        },
        {
          q: "Find the GCD of two numbers.",
          a: `<p>Use the Euclidean algorithm: repeatedly replace the larger number with the remainder until one becomes 0.</p>
<pre><code>function gcd(a, b) {
  while (b) { [a, b] = [b, a % b]; }
  return a;
}</code></pre>`
        },
        {
          q: "Check if a number is an Armstrong number.",
          a: `<p>An Armstrong number equals the sum of its digits each raised to the power of the digit count.</p>
<pre><code>function isArmstrong(n) {
  let digits = String(n).split('');
  let len = digits.length;
  let sum = digits.reduce((s, d) =&gt; s + Math.pow(+d, len), 0);
  return sum === n;
}</code></pre>`
        },
        {
          q: "Check if a number is a palindrome.",
          a: `<p>Reverse the number and compare it to the original. Negative numbers are not palindromes.</p>
<pre><code>function isPalindromeNum(n) {
  if (n &lt; 0) return false;
  let str = String(n);
  return str === str.split('').reverse().join('');
}</code></pre>`
        },
        {
          q: "Find the sum of digits of a number.",
          a: `<p>Repeatedly extract the last digit with modulo 10 and add it to a running sum.</p>
<pre><code>function sumDigits(n) {
  let sum = 0;
  n = Math.abs(n);
  while (n &gt; 0) { sum += n % 10; n = Math.floor(n / 10); }
  return sum;
}</code></pre>`
        },
        {
          q: "Reverse an integer.",
          a: `<p>Extract digits from the end and build the reversed number. Preserve the sign.</p>
<pre><code>function reverseInt(n) {
  let sign = Math.sign(n), rev = 0;
  n = Math.abs(n);
  while (n &gt; 0) { rev = rev * 10 + n % 10; n = Math.floor(n / 10); }
  return rev * sign;
}</code></pre>`
        },
        {
          q: "Check if a number is a perfect number.",
          a: `<p>A perfect number equals the sum of its proper divisors (excluding itself). Example: 6 = 1+2+3.</p>
<pre><code>function isPerfect(n) {
  if (n &lt; 2) return false;
  let sum = 1;
  for (let i = 2; i &lt;= Math.sqrt(n); i++)
    if (n % i === 0) sum += i + n / i;
  return sum === n;
}</code></pre>`
        },
        {
          q: "Check if a number is a power of two.",
          a: `<p>A power of two has exactly one bit set. Use the bitwise trick: <code>n &amp; (n - 1)</code> equals 0 for powers of two.</p>
<pre><code>function isPowerOfTwo(n) {
  return n &gt; 0 &amp;&amp; (n &amp; (n - 1)) === 0;
}</code></pre>`
        }
      ]
    },
    {
      id: "array-logic",
      title: "Array Logic Problems",
      icon: "bi-list-ol",
      questions: [
        {
          q: "Find the missing number in an array of 1 to n.",
          a: `<p>The expected sum of 1..n is <code>n*(n+1)/2</code>. Subtract the actual sum to find the missing number.</p>
<pre><code>function missingNumber(arr, n) {
  let expected = n * (n + 1) / 2;
  let actual = arr.reduce((a, b) =&gt; a + b, 0);
  return expected - actual;
}</code></pre>`
        },
        {
          q: "Rotate an array to the right by k positions.",
          a: `<p>Slice the last k elements and prepend them. Use modulo to handle k &gt; length.</p>
<pre><code>function rotateRight(arr, k) {
  k = k % arr.length;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}</code></pre>`
        },
        {
          q: "Find the first duplicate in an array.",
          a: `<p>Use a Set to track seen values. The first value already in the set is the duplicate.</p>
<pre><code>function firstDuplicate(arr) {
  let seen = new Set();
  for (let val of arr) {
    if (seen.has(val)) return val;
    seen.add(val);
  }
  return -1;
}</code></pre>`
        },
        {
          q: "Two Sum: find indices of two numbers that add up to a target.",
          a: `<p>Use a Map to store each number's index. For each element, check if <code>target - num</code> exists in the map.</p>
<pre><code>function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i &lt; nums.length; i++) {
    let comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp), i];
    map.set(nums[i], i);
  }
}</code></pre>`
        },
        {
          q: "Find the maximum subarray sum (Kadane's Algorithm).",
          a: `<p>Track the current sum and reset it when it drops below zero. Keep a running max.</p>
<pre><code>function maxSubarray(arr) {
  let max = arr[0], cur = arr[0];
  for (let i = 1; i &lt; arr.length; i++) {
    cur = Math.max(arr[i], cur + arr[i]);
    max = Math.max(max, cur);
  }
  return max;
}</code></pre>`
        },
        {
          q: "Merge two sorted arrays into one sorted array.",
          a: `<p>Use two pointers, comparing elements from each array and pushing the smaller one.</p>
<pre><code>function mergeSorted(a, b) {
  let res = [], i = 0, j = 0;
  while (i &lt; a.length &amp;&amp; j &lt; b.length)
    res.push(a[i] &lt; b[j] ? a[i++] : b[j++]);
  return [...res, ...a.slice(i), ...b.slice(j)];
}</code></pre>`
        },
        {
          q: "Move all zeros in an array to the end while maintaining order.",
          a: `<p>Use a write pointer to place non-zero elements, then fill the rest with zeros.</p>
<pre><code>function moveZeros(arr) {
  let pos = 0;
  for (let i = 0; i &lt; arr.length; i++)
    if (arr[i] !== 0) arr[pos++] = arr[i];
  while (pos &lt; arr.length) arr[pos++] = 0;
  return arr;
}</code></pre>`
        },
        {
          q: "Find the second largest element in an array.",
          a: `<p>Track the largest and second largest in a single pass through the array.</p>
<pre><code>function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (let val of arr) {
    if (val &gt; first) { second = first; first = val; }
    else if (val &gt; second &amp;&amp; val !== first) second = val;
  }
  return second;
}</code></pre>`
        },
        {
          q: "Count the frequency of each element in an array.",
          a: `<p>Use a Map or plain object to tally occurrences of each element.</p>
<pre><code>function frequency(arr) {
  let map = {};
  for (let val of arr) map[val] = (map[val] || 0) + 1;
  return map;
}
// frequency([1,2,2,3]) =&gt; {1:1, 2:2, 3:1}</code></pre>`
        },
        {
          q: "Find the intersection of two arrays.",
          a: `<p>Convert one array to a Set, then filter the other to include only values present in that Set.</p>
<pre><code>function intersection(a, b) {
  let setA = new Set(a);
  return [...new Set(b.filter(v =&gt; setA.has(v)))];
}
// intersection([1,2,3],[2,3,4]) =&gt; [2,3]</code></pre>`
        }
      ]
    },
    {
      id: "output-prediction",
      title: "Output Prediction",
      icon: "bi-terminal",
      questions: [
        {
          q: "What is the output of a classic closure-in-loop using var?",
          a: `<p>With <code>var</code>, the variable is shared across iterations. All callbacks reference the final value.</p>
<pre><code>for (var i = 0; i &lt; 3; i++) {
  setTimeout(function() { console.log(i); }, 0);
}
// Output: 3, 3, 3
// Fix: use let instead of var, or wrap in an IIFE.</code></pre>`
        },
        {
          q: "What does hoisting do with var declarations?",
          a: `<p><code>var</code> declarations are hoisted to the top of their scope but initialized as <code>undefined</code>.</p>
<pre><code>console.log(x); // undefined (not ReferenceError)
var x = 5;
console.log(x); // 5
// The declaration is hoisted, but the assignment stays in place.</code></pre>`
        },
        {
          q: "Predict the order of setTimeout(0) vs synchronous code.",
          a: `<p>Synchronous code runs first. <code>setTimeout</code> callbacks go to the task queue and execute after the call stack is empty.</p>
<pre><code>console.log('A');
setTimeout(() =&gt; console.log('B'), 0);
console.log('C');
// Output: A, C, B</code></pre>`
        },
        {
          q: "What is the execution order of a Promise vs setTimeout?",
          a: `<p>Promise callbacks (microtasks) run before setTimeout callbacks (macrotasks).</p>
<pre><code>setTimeout(() =&gt; console.log('timeout'), 0);
Promise.resolve().then(() =&gt; console.log('promise'));
console.log('sync');
// Output: sync, promise, timeout</code></pre>`
        },
        {
          q: "What is typeof null?",
          a: `<p><code>typeof null</code> returns <code>"object"</code>. This is a well-known JavaScript bug from the first implementation that was never fixed for backward compatibility.</p>
<pre><code>console.log(typeof null);      // "object"
console.log(typeof undefined); // "undefined"
console.log(null === undefined); // false</code></pre>`
        },
        {
          q: "Predict the result of == with type coercion.",
          a: `<p>The <code>==</code> operator coerces types before comparing. Use <code>===</code> to avoid surprises.</p>
<pre><code>console.log(0 == '');     // true  (both coerce to 0)
console.log(0 == '0');    // true
console.log('' == '0');   // false (string comparison)
console.log(false == '0');// true  (both become 0)
console.log(null == undefined); // true (special rule)</code></pre>`
        },
        {
          q: "What is the result of NaN === NaN?",
          a: `<p><code>NaN</code> is the only value in JavaScript that is not equal to itself.</p>
<pre><code>console.log(NaN === NaN);       // false
console.log(Number.isNaN(NaN)); // true
console.log(isNaN('hello'));    // true (coerces to NaN first)
console.log(Number.isNaN('hello')); // false (no coercion)</code></pre>`
        },
        {
          q: "What happens when you use delete on a variable vs a property?",
          a: `<p><code>delete</code> removes object properties but cannot delete variables declared with var/let/const.</p>
<pre><code>var a = 1;
delete a;
console.log(a); // 1 (not deleted)

let obj = { x: 10 };
delete obj.x;
console.log(obj.x); // undefined (deleted)</code></pre>`
        },
        {
          q: "What does the comma operator return?",
          a: `<p>The comma operator evaluates all expressions left to right and returns the value of the last one.</p>
<pre><code>let x = (1, 2, 3);
console.log(x); // 3

let y = (console.log('a'), console.log('b'), 42);
// logs: a, b
console.log(y); // 42</code></pre>`
        },
        {
          q: "Predict the output of pre-increment vs post-increment.",
          a: `<p>Pre-increment (<code>++x</code>) increments then returns. Post-increment (<code>x++</code>) returns then increments.</p>
<pre><code>let a = 5;
console.log(a++); // 5 (returns old value, a is now 6)
console.log(++a); // 7 (increments first, a is now 7)
console.log(a);   // 7</code></pre>`
        }
      ]
    },
    {
      id: "coding-challenges",
      title: "Coding Challenges",
      icon: "bi-code-slash",
      questions: [
        {
          q: "Implement FizzBuzz for numbers 1 to n.",
          a: `<p>Print "Fizz" for multiples of 3, "Buzz" for 5, "FizzBuzz" for both, otherwise the number.</p>
<pre><code>function fizzBuzz(n) {
  for (let i = 1; i &lt;= n; i++) {
    let out = '';
    if (i % 3 === 0) out += 'Fizz';
    if (i % 5 === 0) out += 'Buzz';
    console.log(out || i);
  }
}</code></pre>`
        },
        {
          q: "Reverse an integer without converting to string.",
          a: `<p>Extract digits using modulo and build the reversed number mathematically.</p>
<pre><code>function reverseInt(n) {
  let rev = 0, sign = Math.sign(n);
  n = Math.abs(n);
  while (n &gt; 0) { rev = rev * 10 + n % 10; n = Math.floor(n / 10); }
  return rev * sign;
}</code></pre>`
        },
        {
          q: "Check if a string of parentheses is valid.",
          a: `<p>Use a stack. Push opening brackets, pop on closing brackets, and verify the match.</p>
<pre><code>function isValid(s) {
  let stack = [], map = { ')':'(', ']':'[', '}':'{' };
  for (let ch of s) {
    if ('([{'.includes(ch)) stack.push(ch);
    else if (stack.pop() !== map[ch]) return false;
  }
  return stack.length === 0;
}</code></pre>`
        },
        {
          q: "Convert a Roman numeral string to an integer.",
          a: `<p>Map each character to its value. If a smaller value precedes a larger one, subtract it; otherwise add it.</p>
<pre><code>function romanToInt(s) {
  let map = {I:1,V:5,X:10,L:50,C:100,D:500,M:1000};
  let res = 0;
  for (let i = 0; i &lt; s.length; i++)
    res += (map[s[i]] &lt; map[s[i+1]]) ? -map[s[i]] : map[s[i]];
  return res;
}</code></pre>`
        },
        {
          q: "Count the number of primes less than n (Sieve of Eratosthenes).",
          a: `<p>Create a boolean array, mark multiples of each prime as non-prime, then count remaining trues.</p>
<pre><code>function countPrimes(n) {
  let sieve = new Array(n).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i &lt; n; i++)
    if (sieve[i]) for (let j = i*i; j &lt; n; j += i) sieve[j] = false;
  return sieve.filter(Boolean).length;
}</code></pre>`
        },
        {
          q: "Find the longest common prefix among an array of strings.",
          a: `<p>Sort the array, then compare only the first and last strings character by character.</p>
<pre><code>function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  strs.sort();
  let first = strs[0], last = strs[strs.length - 1], i = 0;
  while (i &lt; first.length &amp;&amp; first[i] === last[i]) i++;
  return first.slice(0, i);
}</code></pre>`
        },
        {
          q: "Check if two strings are isomorphic.",
          a: `<p>Two strings are isomorphic if characters in one can be mapped one-to-one to characters in the other.</p>
<pre><code>function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  let mapS = {}, mapT = {};
  for (let i = 0; i &lt; s.length; i++) {
    if ((mapS[s[i]] || t[i]) !== t[i]) return false;
    if ((mapT[t[i]] || s[i]) !== s[i]) return false;
    mapS[s[i]] = t[i]; mapT[t[i]] = s[i];
  }
  return true;
}</code></pre>`
        },
        {
          q: "Determine if a number is a happy number.",
          a: `<p>Replace the number by the sum of squares of its digits repeatedly. If it reaches 1 it is happy; use a Set to detect cycles.</p>
<pre><code>function isHappy(n) {
  let seen = new Set();
  while (n !== 1 &amp;&amp; !seen.has(n)) {
    seen.add(n);
    n = String(n).split('').reduce((s, d) =&gt; s + d * d, 0);
  }
  return n === 1;
}</code></pre>`
        },
        {
          q: "Check if a number is a power of three.",
          a: `<p>Repeatedly divide by 3. If the result reaches 1, it is a power of three.</p>
<pre><code>function isPowerOfThree(n) {
  if (n &lt; 1) return false;
  while (n % 3 === 0) n /= 3;
  return n === 1;
}</code></pre>`
        },
        {
          q: "Check if a string is a palindrome (ignoring non-alphanumeric characters).",
          a: `<p>Strip non-alphanumeric characters, lowercase, then compare with its reverse.</p>
<pre><code>function isPalindrome(s) {
  let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}
// isPalindrome("A man, a plan, a canal: Panama") =&gt; true</code></pre>`
        }
      ]
    },
    {
      id: "string-logic",
      title: "String Logic Problems",
      icon: "bi-fonts",
      questions: [
        {
          q: "Reverse a string without using built-in reverse.",
          a: `<p>Iterate from the end of the string and build a new string character by character.</p>
<pre><code>function reverseStr(s) {
  let result = '';
  for (let i = s.length - 1; i &gt;= 0; i--) result += s[i];
  return result;
}</code></pre>`
        },
        {
          q: "Check if a string is a palindrome.",
          a: `<p>Compare the string with its reverse. Normalize case for case-insensitive checks.</p>
<pre><code>function isPalindrome(s) {
  let low = s.toLowerCase();
  return low === low.split('').reverse().join('');
}</code></pre>`
        },
        {
          q: "Check if two strings are anagrams.",
          a: `<p>Sort both strings and compare, or use a frequency map.</p>
<pre><code>function isAnagram(a, b) {
  let sort = s =&gt; s.toLowerCase().split('').sort().join('');
  return sort(a) === sort(b);
}</code></pre>`
        },
        {
          q: "Count the number of vowels in a string.",
          a: `<p>Use a regex or loop through characters checking against the vowel set.</p>
<pre><code>function countVowels(s) {
  return (s.match(/[aeiou]/gi) || []).length;
}</code></pre>`
        },
        {
          q: "Find the first non-repeating character in a string.",
          a: `<p>Build a frequency map, then find the first character with count 1.</p>
<pre><code>function firstNonRepeating(s) {
  let freq = {};
  for (let c of s) freq[c] = (freq[c] || 0) + 1;
  for (let c of s) if (freq[c] === 1) return c;
  return null;
}</code></pre>`
        },
        {
          q: "Find the longest word in a sentence.",
          a: `<p>Split by spaces and reduce to find the word with the greatest length.</p>
<pre><code>function longestWord(s) {
  return s.split(' ').reduce((a, b) =&gt; a.length &gt;= b.length ? a : b);
}</code></pre>`
        },
        {
          q: "Capitalize the first letter of every word.",
          a: `<p>Split by spaces, capitalize each word's first character, then rejoin.</p>
<pre><code>function capitalizeWords(s) {
  return s.split(' ').map(w =&gt; w[0].toUpperCase() + w.slice(1)).join(' ');
}</code></pre>`
        },
        {
          q: "Remove duplicate characters from a string.",
          a: `<p>Use a Set to track seen characters and build a result with unique ones only.</p>
<pre><code>function removeDuplicates(s) {
  return [...new Set(s)].join('');
}</code></pre>`
        },
        {
          q: "Compress a string using counts of repeated characters.",
          a: `<p>Walk through the string counting consecutive repeats and build the compressed form.</p>
<pre><code>function compress(s) {
  let res = '', count = 1;
  for (let i = 1; i &lt;= s.length; i++) {
    if (s[i] === s[i - 1]) { count++; }
    else { res += s[i - 1] + (count &gt; 1 ? count : ''); count = 1; }
  }
  return res;
}</code></pre>`
        },
        {
          q: "Find the frequency of each character in a string.",
          a: `<p>Use an object to count occurrences of each character.</p>
<pre><code>function charFrequency(s) {
  let freq = {};
  for (let c of s) freq[c] = (freq[c] || 0) + 1;
  return freq;
}
// charFrequency("hello") =&gt; {h:1, e:1, l:2, o:1}</code></pre>`
        }
      ]
    },
    {
      id: "mathematical-puzzles",
      title: "Mathematical Puzzles",
      icon: "bi-calculator",
      questions: [
        {
          q: "Explain the Water Jug Problem (3L and 5L jugs, measure 4L).",
          a: `<p>Fill the 5L jug, pour into 3L jug leaving 2L. Empty the 3L, pour 2L into it. Fill 5L again, pour into 3L (which has 2L) leaving exactly 4L in the 5L jug.</p>`
        },
        {
          q: "Explain the Egg Drop Problem concept.",
          a: `<p>Given n eggs and k floors, find the minimum number of trials to determine the critical floor. Use DP: <code>dp[e][f] = 1 + min(max(dp[e-1][x-1], dp[e][f-x]))</code> for all x from 1 to f.</p>`
        },
        {
          q: "Find the minimum coins needed to make a given amount.",
          a: `<p>Use DP: build an array where <code>dp[i]</code> is the min coins for amount i.</p>
<pre><code>function coinChange(coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let c of coins)
    for (let i = c; i &lt;= amount; i++)
      dp[i] = Math.min(dp[i], dp[i - c] + 1);
  return dp[amount] === Infinity ? -1 : dp[amount];
}</code></pre>`
        },
        {
          q: "How many ways can you climb n stairs taking 1 or 2 steps at a time?",
          a: `<p>This is the Fibonacci sequence. <code>ways(n) = ways(n-1) + ways(n-2)</code>.</p>
<pre><code>function climbStairs(n) {
  let a = 1, b = 1;
  for (let i = 2; i &lt;= n; i++) [a, b] = [b, a + b];
  return b;
}</code></pre>`
        },
        {
          q: "How many moves does it take to solve Tower of Hanoi with n disks?",
          a: `<p>The minimum moves required is <code>2^n - 1</code>. For 3 disks: 7 moves, for 4 disks: 15 moves.</p>
<pre><code>function hanoiMoves(n) {
  return Math.pow(2, n) - 1;
}</code></pre>`
        },
        {
          q: "Explain the Josephus Problem.",
          a: `<p>N people in a circle, every k-th person is eliminated. Find the survivor position using the recurrence: <code>J(1)=0, J(n)=(J(n-1)+k)%n</code>.</p>
<pre><code>function josephus(n, k) {
  let pos = 0;
  for (let i = 2; i &lt;= n; i++) pos = (pos + k) % i;
  return pos + 1; // 1-indexed
}</code></pre>`
        },
        {
          q: "How do you check if a matrix is a magic square?",
          a: `<p>All rows, columns, and both diagonals must sum to <code>n*(n*n+1)/2</code>.</p>
<pre><code>function isMagicSquare(m) {
  let n = m.length, target = n * (n * n + 1) / 2;
  for (let i = 0; i &lt; n; i++) {
    if (m[i].reduce((a, b) =&gt; a + b) !== target) return false;
    if (m.reduce((s, r) =&gt; s + r[i], 0) !== target) return false;
  }
  return true;
}</code></pre>`
        },
        {
          q: "Explain the Birthday Paradox.",
          a: `<p>In a group of 23 people, there is a ~50% chance two share a birthday. The probability of no match drops as: <code>P = (365/365)*(364/365)*...*(343/365)</code>, and 1 - P &gt; 0.5.</p>`
        },
        {
          q: "Explain the Monty Hall Problem.",
          a: `<p>Three doors: one has a prize. You pick one, the host opens a losing door. Switching wins 2/3 of the time because your initial pick had only 1/3 chance. Switching effectively gives you the combined probability of the other two doors.</p>`
        },
        {
          q: "In a room of n people, how many handshakes occur if everyone shakes hands once?",
          a: `<p>Each pair shakes hands once: <code>n*(n-1)/2</code>.</p>
<pre><code>function handshakes(n) {
  return n * (n - 1) / 2;
}
// 10 people =&gt; 45 handshakes</code></pre>`
        }
      ]
    },
    {
      id: "matrix-problems",
      title: "Matrix Problems",
      icon: "bi-grid",
      questions: [
        {
          q: "Rotate a matrix 90 degrees clockwise.",
          a: `<p>Transpose the matrix then reverse each row.</p>
<pre><code>function rotate90(m) {
  let n = m.length;
  for (let i = 0; i &lt; n; i++)
    for (let j = i; j &lt; n; j++) [m[i][j], m[j][i]] = [m[j][i], m[i][j]];
  m.forEach(row =&gt; row.reverse());
  return m;
}</code></pre>`
        },
        {
          q: "Print a matrix in spiral order.",
          a: `<p>Use four boundaries (top, bottom, left, right) and shrink them as you traverse each layer.</p>
<pre><code>function spiralOrder(m) {
  let res = [], t = 0, b = m.length - 1, l = 0, r = m[0].length - 1;
  while (t &lt;= b &amp;&amp; l &lt;= r) {
    for (let i = l; i &lt;= r; i++) res.push(m[t][i]); t++;
    for (let i = t; i &lt;= b; i++) res.push(m[i][r]); r--;
    if (t &lt;= b) { for (let i = r; i &gt;= l; i--) res.push(m[b][i]); b--; }
    if (l &lt;= r) { for (let i = b; i &gt;= t; i--) res.push(m[i][l]); l++; }
  }
  return res;
}</code></pre>`
        },
        {
          q: "Transpose a matrix.",
          a: `<p>Swap rows and columns: element at (i,j) goes to (j,i).</p>
<pre><code>function transpose(m) {
  return m[0].map((_, j) =&gt; m.map(row =&gt; row[j]));
}</code></pre>`
        },
        {
          q: "Find the sum of both diagonals of a square matrix.",
          a: `<p>Primary diagonal: indices (i,i). Secondary diagonal: indices (i, n-1-i). Subtract the center if n is odd.</p>
<pre><code>function diagonalSum(m) {
  let n = m.length, sum = 0;
  for (let i = 0; i &lt; n; i++) sum += m[i][i] + m[i][n - 1 - i];
  if (n % 2) sum -= m[Math.floor(n/2)][Math.floor(n/2)];
  return sum;
}</code></pre>`
        },
        {
          q: "Search for a value in a row-wise and column-wise sorted matrix.",
          a: `<p>Start from the top-right corner. If target is smaller go left, if larger go down. O(m+n) time.</p>
<pre><code>function searchMatrix(m, target) {
  let r = 0, c = m[0].length - 1;
  while (r &lt; m.length &amp;&amp; c &gt;= 0) {
    if (m[r][c] === target) return [r, c];
    m[r][c] &gt; target ? c-- : r++;
  }
  return null;
}</code></pre>`
        },
        {
          q: "Set every row and column to zero if it contains a zero.",
          a: `<p>First pass: record which rows and columns have zeros. Second pass: set those rows and columns to zero.</p>
<pre><code>function zeroMatrix(m) {
  let rows = new Set(), cols = new Set();
  for (let i = 0; i &lt; m.length; i++)
    for (let j = 0; j &lt; m[0].length; j++)
      if (m[i][j] === 0) { rows.add(i); cols.add(j); }
  for (let i = 0; i &lt; m.length; i++)
    for (let j = 0; j &lt; m[0].length; j++)
      if (rows.has(i) || cols.has(j)) m[i][j] = 0;
  return m;
}</code></pre>`
        },
        {
          q: "Print the boundary elements of a matrix.",
          a: `<p>Print the first row, last column (skip first), last row reversed (skip last), and first column reversed (skip both ends).</p>
<pre><code>function boundaryTraversal(m) {
  let res = [], rows = m.length, cols = m[0].length;
  for (let j = 0; j &lt; cols; j++) res.push(m[0][j]);
  for (let i = 1; i &lt; rows; i++) res.push(m[i][cols - 1]);
  if (rows &gt; 1) for (let j = cols - 2; j &gt;= 0; j--) res.push(m[rows-1][j]);
  if (cols &gt; 1) for (let i = rows - 2; i &gt; 0; i--) res.push(m[i][0]);
  return res;
}</code></pre>`
        },
        {
          q: "Find the saddle point in a matrix.",
          a: `<p>A saddle point is the minimum in its row and maximum in its column.</p>
<pre><code>function saddlePoint(m) {
  for (let i = 0; i &lt; m.length; i++) {
    let minVal = Math.min(...m[i]);
    let j = m[i].indexOf(minVal);
    let colMax = Math.max(...m.map(r =&gt; r[j]));
    if (minVal === colMax) return [i, j, minVal];
  }
  return null;
}</code></pre>`
        },
        {
          q: "Multiply two matrices.",
          a: `<p>Element (i,j) of the result is the dot product of row i of A and column j of B.</p>
<pre><code>function multiply(a, b) {
  let res = Array.from({length: a.length}, () =&gt; Array(b[0].length).fill(0));
  for (let i = 0; i &lt; a.length; i++)
    for (let j = 0; j &lt; b[0].length; j++)
      for (let k = 0; k &lt; b.length; k++) res[i][j] += a[i][k] * b[k][j];
  return res;
}</code></pre>`
        },
        {
          q: "Set matrix zeroes in-place using O(1) extra space.",
          a: `<p>Use the first row and column as markers. Track whether the first row/col themselves need zeroing.</p>
<pre><code>function setZeroes(m) {
  let firstRow = false, firstCol = false;
  for (let i = 0; i &lt; m.length; i++)
    for (let j = 0; j &lt; m[0].length; j++)
      if (m[i][j] === 0) {
        if (i === 0) firstRow = true;
        if (j === 0) firstCol = true;
        m[i][0] = 0; m[0][j] = 0;
      }
  for (let i = 1; i &lt; m.length; i++)
    for (let j = 1; j &lt; m[0].length; j++)
      if (m[i][0] === 0 || m[0][j] === 0) m[i][j] = 0;
  if (firstRow) m[0].fill(0);
  if (firstCol) for (let i = 0; i &lt; m.length; i++) m[i][0] = 0;
}</code></pre>`
        }
      ]
    },
    {
      id: "recursion-puzzles",
      title: "Recursion Puzzles",
      icon: "bi-recycle",
      questions: [
        {
          q: "Find the sum of first n natural numbers using recursion.",
          a: `<p>Base case: n = 0 returns 0. Recursive: n + sum(n-1).</p>
<pre><code>function sumN(n) {
  if (n &lt;= 0) return 0;
  return n + sumN(n - 1);
}</code></pre>`
        },
        {
          q: "Implement a power function using recursion.",
          a: `<p>Base case: exponent 0 returns 1. Recursive: base * power(base, exp-1). Optimize with fast exponentiation.</p>
<pre><code>function power(base, exp) {
  if (exp === 0) return 1;
  if (exp % 2 === 0) { let half = power(base, exp / 2); return half * half; }
  return base * power(base, exp - 1);
}</code></pre>`
        },
        {
          q: "Count the digits of a number using recursion.",
          a: `<p>Base case: number &lt; 10 returns 1. Recursive: 1 + countDigits(Math.floor(n/10)).</p>
<pre><code>function countDigits(n) {
  n = Math.abs(n);
  if (n &lt; 10) return 1;
  return 1 + countDigits(Math.floor(n / 10));
}</code></pre>`
        },
        {
          q: "Reverse a string using recursion.",
          a: `<p>Base case: empty or single char returns itself. Recursive: last char + reverse of the rest.</p>
<pre><code>function reverseStr(s) {
  if (s.length &lt;= 1) return s;
  return s[s.length - 1] + reverseStr(s.slice(0, -1));
}</code></pre>`
        },
        {
          q: "Check if a string is a palindrome using recursion.",
          a: `<p>Compare first and last characters. If they match, recurse on the substring without them.</p>
<pre><code>function isPalinRec(s) {
  if (s.length &lt;= 1) return true;
  if (s[0] !== s[s.length - 1]) return false;
  return isPalinRec(s.slice(1, -1));
}</code></pre>`
        },
        {
          q: "Convert a binary number to decimal using recursion.",
          a: `<p>Process the last digit times the current power of 2, then recurse on the remaining digits.</p>
<pre><code>function binToDec(bin, pos = 0) {
  if (bin === 0) return 0;
  return (bin % 10) * Math.pow(2, pos) + binToDec(Math.floor(bin / 10), pos + 1);
}</code></pre>`
        },
        {
          q: "Print numbers 1 to N without using any loop.",
          a: `<p>Use recursion: print from 1 by calling the function first then printing, or print then recurse.</p>
<pre><code>function print1ToN(n) {
  if (n &lt; 1) return;
  print1ToN(n - 1);
  console.log(n);
}</code></pre>`
        },
        {
          q: "Find the sum of an array using recursion.",
          a: `<p>Base case: empty array returns 0. Recursive: first element + sum of the rest.</p>
<pre><code>function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}</code></pre>`
        },
        {
          q: "Find the GCD of two numbers using recursion.",
          a: `<p>Euclidean algorithm: GCD(a, b) = GCD(b, a % b). Base case: b = 0 returns a.</p>
<pre><code>function gcd(a, b) {
  if (b === 0) return a;
  return gcd(b, a % b);
}</code></pre>`
        },
        {
          q: "Compare iterative vs recursive Fibonacci and explain the difference.",
          a: `<p>Recursive Fibonacci has O(2^n) time due to repeated subproblems. Iterative is O(n) with O(1) space.</p>
<pre><code>// Recursive (slow)
function fibRec(n) { return n &lt;= 1 ? n : fibRec(n-1) + fibRec(n-2); }
// Iterative (fast)
function fibIter(n) {
  let a = 0, b = 1;
  for (let i = 2; i &lt;= n; i++) [a, b] = [b, a + b];
  return b;
}</code></pre>`
        }
      ]
    },
    {
      id: "sorting-searching-logic",
      title: "Sorting & Searching Logic",
      icon: "bi-sort-alpha-down",
      questions: [
        {
          q: "Find the kth largest element in an unsorted array.",
          a: `<p>Sort descending and pick index k-1, or use a min-heap of size k for better performance.</p>
<pre><code>function kthLargest(arr, k) {
  arr.sort((a, b) =&gt; b - a);
  return arr[k - 1];
}</code></pre>`
        },
        {
          q: "Merge two sorted arrays into one sorted array.",
          a: `<p>Use two pointers comparing elements from each array.</p>
<pre><code>function mergeSorted(a, b) {
  let res = [], i = 0, j = 0;
  while (i &lt; a.length &amp;&amp; j &lt; b.length)
    res.push(a[i] &lt;= b[j] ? a[i++] : b[j++]);
  return [...res, ...a.slice(i), ...b.slice(j)];
}</code></pre>`
        },
        {
          q: "Implement binary search.",
          a: `<p>Compare the target to the middle element. Narrow the search to the left or right half accordingly.</p>
<pre><code>function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo &lt;= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] &lt; target ? lo = mid + 1 : hi = mid - 1;
  }
  return -1;
}</code></pre>`
        },
        {
          q: "Find a peak element in an array.",
          a: `<p>An element is a peak if it is greater than its neighbors. Use binary search for O(log n).</p>
<pre><code>function findPeak(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo &lt; hi) {
    let mid = Math.floor((lo + hi) / 2);
    arr[mid] &lt; arr[mid + 1] ? lo = mid + 1 : hi = mid;
  }
  return lo;
}</code></pre>`
        },
        {
          q: "Search in a rotated sorted array.",
          a: `<p>Use modified binary search. Determine which half is sorted, then decide which half to search.</p>
<pre><code>function searchRotated(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo &lt;= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[lo] &lt;= arr[mid]) {
      target &gt;= arr[lo] &amp;&amp; target &lt; arr[mid] ? hi = mid - 1 : lo = mid + 1;
    } else {
      target &gt; arr[mid] &amp;&amp; target &lt;= arr[hi] ? lo = mid + 1 : hi = mid - 1;
    }
  }
  return -1;
}</code></pre>`
        },
        {
          q: "Count occurrences of a number in a sorted array.",
          a: `<p>Use binary search to find the first and last position. Count = last - first + 1.</p>
<pre><code>function countOccurrences(arr, target) {
  function bound(isFirst) {
    let lo = 0, hi = arr.length - 1, res = -1;
    while (lo &lt;= hi) {
      let mid = Math.floor((lo + hi) / 2);
      if (arr[mid] === target) { res = mid; isFirst ? hi = mid - 1 : lo = mid + 1; }
      else arr[mid] &lt; target ? lo = mid + 1 : hi = mid - 1;
    }
    return res;
  }
  let f = bound(true), l = bound(false);
  return f === -1 ? 0 : l - f + 1;
}</code></pre>`
        },
        {
          q: "Find the integer square root of a number using binary search.",
          a: `<p>Binary search between 0 and n. Check if mid*mid equals n.</p>
<pre><code>function mySqrt(n) {
  let lo = 0, hi = n, ans = 0;
  while (lo &lt;= hi) {
    let mid = Math.floor((lo + hi) / 2);
    if (mid * mid &lt;= n) { ans = mid; lo = mid + 1; }
    else hi = mid - 1;
  }
  return ans;
}</code></pre>`
        },
        {
          q: "Find the first bad version in a sequence of versions.",
          a: `<p>Binary search: if mid is bad, search left; otherwise search right. Minimizes API calls.</p>
<pre><code>function firstBadVersion(n, isBad) {
  let lo = 1, hi = n;
  while (lo &lt; hi) {
    let mid = Math.floor((lo + hi) / 2);
    isBad(mid) ? hi = mid : lo = mid + 1;
  }
  return lo;
}</code></pre>`
        },
        {
          q: "Find the minimum element in a rotated sorted array.",
          a: `<p>Use binary search. If mid &gt; right, minimum is in the right half; otherwise in the left half.</p>
<pre><code>function findMin(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo &lt; hi) {
    let mid = Math.floor((lo + hi) / 2);
    arr[mid] &gt; arr[hi] ? lo = mid + 1 : hi = mid;
  }
  return arr[lo];
}</code></pre>`
        },
        {
          q: "Find the median of two sorted arrays.",
          a: `<p>Use binary search on the smaller array to partition both arrays such that left elements &lt;= right elements. O(log(min(m,n))).</p>
<pre><code>function findMedian(a, b) {
  if (a.length &gt; b.length) [a, b] = [b, a];
  let m = a.length, n = b.length, lo = 0, hi = m;
  while (lo &lt;= hi) {
    let i = Math.floor((lo + hi) / 2), j = Math.floor((m + n + 1) / 2) - i;
    let lA = i === 0 ? -Infinity : a[i-1], rA = i === m ? Infinity : a[i];
    let lB = j === 0 ? -Infinity : b[j-1], rB = j === n ? Infinity : b[j];
    if (lA &lt;= rB &amp;&amp; lB &lt;= rA) {
      let total = m + n;
      return total % 2 ? Math.max(lA, lB) : (Math.max(lA, lB) + Math.min(rA, rB)) / 2;
    }
    lA &gt; rB ? hi = i - 1 : lo = i + 1;
  }
}</code></pre>`
        }
      ]
    },
    {
      id: "debugging-challenges",
      title: "Debugging Challenges",
      icon: "bi-bug",
      questions: [
        {
          q: "What is an off-by-one error and how do you fix it?",
          a: `<p>Off-by-one errors occur when loop bounds are one too many or too few. Fix by verifying whether boundaries should use <code>&lt;</code> vs <code>&lt;=</code> and testing with edge cases like n=0 and n=1.</p>`
        },
        {
          q: "How do you debug an infinite loop?",
          a: `<p>Check that the loop variable is being modified and moving toward the termination condition. Add a counter or use <code>console.log</code> to trace iterations. Ensure while-loop conditions eventually become false.</p>`
        },
        {
          q: "How do you fix an 'undefined is not a function' error?",
          a: `<p>This means you are calling something that is not a function. Check: is the variable initialized? Is the method name spelled correctly? Is the object the right type? Use <code>typeof</code> to verify before calling.</p>`
        },
        {
          q: "How do you debug an async/await related bug?",
          a: `<p>Ensure every async function call has <code>await</code>. Missing await causes the function to return a Promise instead of the resolved value. Use try/catch for error handling in async functions.</p>
<pre><code>// Bug: missing await
let data = fetchData(); // Promise, not data!
// Fix:
let data = await fetchData();</code></pre>`
        },
        {
          q: "How do you fix a scope-related bug?",
          a: `<p>Use <code>let</code>/<code>const</code> instead of <code>var</code> to avoid hoisting issues. Check that variables are declared in the correct scope. Common in loops where <code>var</code> shares the same reference.</p>
<pre><code>// Bug with var
for (var i = 0; i &lt; 3; i++) setTimeout(() =&gt; console.log(i), 100); // 3,3,3
// Fix with let
for (let i = 0; i &lt; 3; i++) setTimeout(() =&gt; console.log(i), 100); // 0,1,2</code></pre>`
        },
        {
          q: "How does type coercion cause bugs?",
          a: `<p>JavaScript's loose equality <code>==</code> performs type coercion, leading to unexpected results. Always use <code>===</code> for strict comparison.</p>
<pre><code>// Bugs from coercion
0 == ''     // true (unexpected!)
null == undefined // true
// Fix: use strict equality
0 === ''    // false (correct)</code></pre>`
        },
        {
          q: "What happens when a function is missing a return statement?",
          a: `<p>The function returns <code>undefined</code> by default. This is a common bug in functions with conditional returns where one branch forgets to return a value.</p>
<pre><code>// Bug: missing return
function isEven(n) { if (n % 2 === 0) return true; /* no else return */ }
isEven(3); // undefined
// Fix:
function isEven(n) { return n % 2 === 0; }</code></pre>`
        },
        {
          q: "How can using the wrong operator cause bugs?",
          a: `<p>Common mistakes: <code>=</code> (assignment) vs <code>===</code> (comparison), <code>&amp;&amp;</code> vs <code>||</code>, <code>+</code> for string concatenation vs addition. Always double-check operator usage.</p>
<pre><code>// Bug: assignment instead of comparison
if (x = 5) { } // always true, assigns 5 to x
// Fix:
if (x === 5) { }</code></pre>`
        },
        {
          q: "How do mutation bugs occur and how do you prevent them?",
          a: `<p>Passing objects/arrays to functions and modifying them changes the original. Use spread or structuredClone to avoid unintended mutation.</p>
<pre><code>// Bug: mutating original
function addItem(arr, item) { arr.push(item); return arr; }
// Fix: create a copy
function addItem(arr, item) { return [...arr, item]; }</code></pre>`
        },
        {
          q: "How can callback execution order cause bugs?",
          a: `<p>Callbacks may execute in unexpected order if mixing sync and async. Use Promises or async/await for predictable execution order.</p>
<pre><code>// Unpredictable order
console.log('1');
setTimeout(() =&gt; console.log('2'), 0);
console.log('3');
// Output: 1, 3, 2 (not 1, 2, 3)</code></pre>`
        }
      ]
    },
    {
      id: "algorithm-design",
      title: "Algorithm Design",
      icon: "bi-gear",
      questions: [
        {
          q: "How should you approach a new problem?",
          a: `<p>1. Understand the problem and constraints. 2. Work through examples by hand. 3. Identify the pattern or data structure. 4. Start with a brute force solution. 5. Optimize step by step.</p>`
        },
        {
          q: "Why start with brute force first?",
          a: `<p>Brute force ensures correctness and establishes a baseline. It helps you understand the problem fully before optimizing. You can then identify bottlenecks and improve specific parts.</p>`
        },
        {
          q: "How do you optimize a brute force solution step by step?",
          a: `<p>Identify repeated work (memoize it), reduce nested loops (use hash maps), sort data if it enables binary search, and consider space-time tradeoffs. Each optimization should reduce time or space complexity.</p>`
        },
        {
          q: "How do you identify the right data structure for a problem?",
          a: `<p>Need fast lookup? Use a hash map. Need ordering? Use a sorted array or BST. Need FIFO? Queue. Need LIFO? Stack. Need priorities? Heap. Need relationships? Graph.</p>`
        },
        {
          q: "How do you recognize common algorithmic patterns?",
          a: `<p>Two pointers: sorted arrays. Sliding window: subarrays/substrings. BFS/DFS: trees/graphs. DP: overlapping subproblems with optimal substructure. Greedy: local optimal leads to global optimal.</p>`
        },
        {
          q: "How do you evaluate time/space tradeoffs?",
          a: `<p>Caching or precomputation uses more space but saves time. In-place algorithms save space but may increase time. Choose based on constraints: if memory is limited, prefer space-efficient; if speed is critical, trade space for time.</p>`
        },
        {
          q: "Explain the divide and conquer approach.",
          a: `<p>Break the problem into smaller subproblems, solve each recursively, and combine the results. Examples: merge sort (divide array, sort halves, merge), binary search (halve the search space).</p>`
        },
        {
          q: "How do you recognize when to use a sliding window?",
          a: `<p>Use sliding window when the problem asks for a contiguous subarray/substring meeting some condition (max sum of size k, smallest subarray with sum &gt;= target, longest substring without repeats).</p>`
        },
        {
          q: "When should you use greedy vs dynamic programming?",
          a: `<p>Use greedy when making the locally optimal choice at each step leads to the global optimum (e.g., activity selection). Use DP when choices have overlapping subproblems and optimal substructure (e.g., knapsack, coin change).</p>`
        },
        {
          q: "How should you communicate your approach during an interview?",
          a: `<p>1. Restate the problem. 2. Discuss examples and edge cases. 3. Explain your approach before coding. 4. State the time/space complexity. 5. Walk through your code with an example. Be thinking out loud throughout.</p>`
        }
      ]
    },
    {
      id: "problem-solving",
      title: "Problem Solving Strategies",
      icon: "bi-lightbulb-fill",
      questions: [
        {
          q: "Why is understanding the problem the most critical step?",
          a: `<p>Misunderstanding the problem leads to solving the wrong thing. Read carefully, identify inputs/outputs, clarify ambiguities, and restate the problem in your own words before starting.</p>`
        },
        {
          q: "How do you identify constraints in a problem?",
          a: `<p>Look at input size (determines acceptable complexity), value ranges (overflow risk), edge cases (empty inputs, single elements), and special conditions (sorted, unique, connected). Constraints guide your algorithm choice.</p>`
        },
        {
          q: "Why should you walk through examples before coding?",
          a: `<p>Examples help you verify your understanding, discover patterns, and catch edge cases. Work through at least one normal case and one edge case by hand to build intuition for the solution.</p>`
        },
        {
          q: "How do you consider edge cases effectively?",
          a: `<p>Check: empty input, single element, all same values, maximum/minimum values, negative numbers, already sorted, reverse sorted, duplicates, and null/undefined inputs.</p>`
        },
        {
          q: "How do you choose the right approach for a problem?",
          a: `<p>Match the problem characteristics to known patterns: contiguous subarray → sliding window, pairs in sorted data → two pointers, shortest path → BFS, optimization with choices → DP or greedy.</p>`
        },
        {
          q: "Why is writing pseudocode helpful before real code?",
          a: `<p>Pseudocode lets you focus on logic without syntax distractions. It is easier to modify, helps catch logical errors early, and serves as a roadmap for your implementation.</p>`
        },
        {
          q: "What is the best way to translate pseudocode into code?",
          a: `<p>Convert each pseudocode line into real syntax. Start with the function signature, then implement the main logic, handle edge cases, and add helper functions as needed.</p>`
        },
        {
          q: "How should you test your solution with examples?",
          a: `<p>Test with: the given examples, edge cases (empty, single, max size), special cases (duplicates, negatives), and stress tests. Trace through your code line by line with each test case.</p>`
        },
        {
          q: "When and how should you optimize your solution?",
          a: `<p>Optimize after you have a correct solution. Look for: unnecessary iterations, redundant computations (memoize), better data structures (hash map instead of nested loop), and mathematical shortcuts.</p>`
        },
        {
          q: "Why is communicating your thinking important during problem solving?",
          a: `<p>It shows your reasoning process, helps the interviewer follow along, allows them to give hints, and demonstrates collaboration skills. Think out loud: state what you are considering and why you choose or reject approaches.</p>`
        }
      ]
    },
    {
      id: "bitwise-operations",
      title: "Bitwise Operations",
      icon: "bi-toggles",
      questions: [
        {
          q: "Explain AND, OR, and XOR bitwise operations.",
          a: `<p>AND (<code>&amp;</code>): both bits 1 → 1. OR (<code>|</code>): either bit 1 → 1. XOR (<code>^</code>): bits differ → 1.</p>
<pre><code>console.log(5 &amp; 3);  // 1  (101 &amp; 011 = 001)
console.log(5 | 3);  // 7  (101 | 011 = 111)
console.log(5 ^ 3);  // 6  (101 ^ 011 = 110)</code></pre>`
        },
        {
          q: "Explain left shift and right shift operations.",
          a: `<p>Left shift (<code>&lt;&lt;</code>) multiplies by 2^n. Right shift (<code>&gt;&gt;</code>) divides by 2^n (integer division).</p>
<pre><code>console.log(5 &lt;&lt; 1); // 10 (multiply by 2)
console.log(5 &lt;&lt; 2); // 20 (multiply by 4)
console.log(20 &gt;&gt; 1); // 10 (divide by 2)
console.log(20 &gt;&gt; 2); // 5  (divide by 4)</code></pre>`
        },
        {
          q: "Check if a number is even or odd using bitwise operation.",
          a: `<p>The last bit of an odd number is 1. Use AND with 1 to check.</p>
<pre><code>function isEven(n) {
  return (n &amp; 1) === 0;
}
// isEven(4) =&gt; true, isEven(7) =&gt; false</code></pre>`
        },
        {
          q: "Swap two numbers without using a temporary variable.",
          a: `<p>Use XOR: a^=b, b^=a, a^=b. Each XOR cancels one value and replaces it.</p>
<pre><code>function swap(a, b) {
  a = a ^ b;
  b = a ^ b; // b now has original a
  a = a ^ b; // a now has original b
  return [a, b];
}</code></pre>`
        },
        {
          q: "Check if a number is a power of 2 using bitwise operation.",
          a: `<p>A power of 2 has exactly one set bit. <code>n &amp; (n-1)</code> clears the lowest set bit; if result is 0, it is a power of 2.</p>
<pre><code>function isPowerOf2(n) {
  return n &gt; 0 &amp;&amp; (n &amp; (n - 1)) === 0;
}</code></pre>`
        },
        {
          q: "Count the number of set bits (1s) in a number.",
          a: `<p>Use Brian Kernighan's algorithm: <code>n &amp; (n-1)</code> removes the lowest set bit each iteration.</p>
<pre><code>function countSetBits(n) {
  let count = 0;
  while (n) { n &amp;= (n - 1); count++; }
  return count;
}
// countSetBits(13) =&gt; 3 (1101 has three 1s)</code></pre>`
        },
        {
          q: "Toggle a specific bit in a number.",
          a: `<p>XOR with a mask that has 1 at the target position: <code>n ^ (1 &lt;&lt; pos)</code>.</p>
<pre><code>function toggleBit(n, pos) {
  return n ^ (1 &lt;&lt; pos);
}
// toggleBit(5, 1) =&gt; 7 (101 ^ 010 = 111)</code></pre>`
        },
        {
          q: "Find the missing number in an array using XOR.",
          a: `<p>XOR all numbers 1..n with all elements in the array. Duplicates cancel out, leaving the missing number.</p>
<pre><code>function findMissing(arr, n) {
  let xor = 0;
  for (let i = 1; i &lt;= n; i++) xor ^= i;
  for (let val of arr) xor ^= val;
  return xor;
}
// findMissing([1,2,4,5], 5) =&gt; 3</code></pre>`
        },
        {
          q: "Multiply a number by 2 using bitwise operation.",
          a: `<p>Left shift by 1 is equivalent to multiplying by 2.</p>
<pre><code>function multiplyBy2(n) {
  return n &lt;&lt; 1;
}
// multiplyBy2(7) =&gt; 14</code></pre>`
        },
        {
          q: "Check if a specific bit is set in a number.",
          a: `<p>AND the number with a mask having 1 at the target position. Non-zero means the bit is set.</p>
<pre><code>function isBitSet(n, pos) {
  return (n &amp; (1 &lt;&lt; pos)) !== 0;
}
// isBitSet(5, 2) =&gt; true (bit 2 of 101 is 1)</code></pre>`
        }
      ]
    },
    {
      id: "linked-list-puzzles",
      title: "Linked List Puzzles",
      icon: "bi-link-45deg",
      questions: [
        {
          q: "How do you reverse a linked list?",
          a: `<p>Iterate through the list, reversing each node's next pointer. Track previous, current, and next nodes.</p>
<pre><code>function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}</code></pre>`
        },
        {
          q: "How do you detect a cycle in a linked list?",
          a: `<p>Use Floyd's cycle detection: a slow pointer moves one step, a fast pointer moves two. If they meet, there is a cycle.</p>
<pre><code>function hasCycle(head) {
  let slow = head, fast = head;
  while (fast &amp;&amp; fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}</code></pre>`
        },
        {
          q: "How do you find the middle node of a linked list?",
          a: `<p>Use slow and fast pointers. When fast reaches the end, slow is at the middle.</p>
<pre><code>function findMiddle(head) {
  let slow = head, fast = head;
  while (fast &amp;&amp; fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}</code></pre>`
        },
        {
          q: "How do you merge two sorted linked lists?",
          a: `<p>Use a dummy head. Compare nodes from both lists, appending the smaller one each time.</p>
<pre><code>function mergeLists(l1, l2) {
  let dummy = {next: null}, curr = dummy;
  while (l1 &amp;&amp; l2) {
    if (l1.val &lt;= l2.val) { curr.next = l1; l1 = l1.next; }
    else { curr.next = l2; l2 = l2.next; }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
}</code></pre>`
        },
        {
          q: "How do you remove the nth node from the end?",
          a: `<p>Use two pointers separated by n nodes. When the leading pointer reaches the end, the trailing pointer is at the target.</p>
<pre><code>function removeNthFromEnd(head, n) {
  let dummy = {next: head}, first = dummy, second = dummy;
  for (let i = 0; i &lt;= n; i++) first = first.next;
  while (first) { first = first.next; second = second.next; }
  second.next = second.next.next;
  return dummy.next;
}</code></pre>`
        },
        {
          q: "How do you find the intersection point of two linked lists?",
          a: `<p>Use two pointers starting at each head. When one reaches the end, redirect to the other head. They meet at the intersection.</p>
<pre><code>function getIntersection(headA, headB) {
  let a = headA, b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
}</code></pre>`
        },
        {
          q: "How do you check if a linked list is a palindrome?",
          a: `<p>Find the middle, reverse the second half, then compare both halves node by node.</p>
<pre><code>function isPalindrome(head) {
  let slow = head, fast = head, prev = null;
  while (fast &amp;&amp; fast.next) {
    fast = fast.next.next;
    let next = slow.next;
    slow.next = prev; prev = slow; slow = next;
  }
  if (fast) slow = slow.next; // odd length
  while (prev &amp;&amp; slow) {
    if (prev.val !== slow.val) return false;
    prev = prev.next; slow = slow.next;
  }
  return true;
}</code></pre>`
        },
        {
          q: "How do you remove duplicates from a sorted linked list?",
          a: `<p>Compare each node with its next. If values match, skip the next node.</p>
<pre><code>function removeDuplicates(head) {
  let curr = head;
  while (curr &amp;&amp; curr.next) {
    if (curr.val === curr.next.val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return head;
}</code></pre>`
        },
        {
          q: "How do you add two numbers represented as linked lists?",
          a: `<p>Traverse both lists simultaneously, adding digits and tracking carry. Create new nodes for each sum digit.</p>
<pre><code>function addTwoNumbers(l1, l2) {
  let dummy = {next: null}, curr = dummy, carry = 0;
  while (l1 || l2 || carry) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + carry;
    carry = Math.floor(sum / 10);
    curr.next = {val: sum % 10, next: null};
    curr = curr.next;
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return dummy.next;
}</code></pre>`
        },
        {
          q: "How do you flatten a multilevel doubly linked list?",
          a: `<p>Use a stack or recursion. When a node has a child, process the child list first (DFS), then continue with next.</p>
<pre><code>function flatten(head) {
  let curr = head;
  while (curr) {
    if (curr.child) {
      let next = curr.next, child = curr.child;
      curr.next = child; child.prev = curr; curr.child = null;
      let tail = child;
      while (tail.next) tail = tail.next;
      tail.next = next;
      if (next) next.prev = tail;
    }
    curr = curr.next;
  }
  return head;
}</code></pre>`
        }
      ]
    },
    {
      id: "stack-queue-puzzles",
      title: "Stack & Queue Puzzles",
      icon: "bi-stack",
      questions: [
        {
          q: "How do you check if parentheses are valid?",
          a: `<p>Use a stack. Push opening brackets, pop on closing brackets and check for a match. Stack must be empty at the end.</p>
<pre><code>function isValid(s) {
  let stack = [], map = {')':'(', ']':'[', '}':'{'};
  for (let c of s) {
    if ('([{'.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}</code></pre>`
        },
        {
          q: "How do you design a stack that supports getMin in O(1)?",
          a: `<p>Maintain a second stack that tracks the minimum. Push the current min onto it whenever you push a value.</p>
<pre><code>class MinStack {
  constructor() { this.stack = []; this.minStack = []; }
  push(val) {
    this.stack.push(val);
    this.minStack.push(Math.min(val, this.getMin() ?? Infinity));
  }
  pop() { this.stack.pop(); this.minStack.pop(); }
  top() { return this.stack[this.stack.length - 1]; }
  getMin() { return this.minStack[this.minStack.length - 1]; }
}</code></pre>`
        },
        {
          q: "Find the next greater element for each element in an array.",
          a: `<p>Use a stack to track elements waiting for a greater element. Pop when a greater element is found.</p>
<pre><code>function nextGreater(arr) {
  let res = Array(arr.length).fill(-1), stack = [];
  for (let i = 0; i &lt; arr.length; i++) {
    while (stack.length &amp;&amp; arr[stack[stack.length-1]] &lt; arr[i])
      res[stack.pop()] = arr[i];
    stack.push(i);
  }
  return res;
}</code></pre>`
        },
        {
          q: "How do you implement a queue using two stacks?",
          a: `<p>Use one stack for enqueue, another for dequeue. Transfer elements when the dequeue stack is empty.</p>
<pre><code>class QueueFromStacks {
  constructor() { this.s1 = []; this.s2 = []; }
  enqueue(val) { this.s1.push(val); }
  dequeue() {
    if (!this.s2.length) while (this.s1.length) this.s2.push(this.s1.pop());
    return this.s2.pop();
  }
}</code></pre>`
        },
        {
          q: "How do you implement a stack using two queues?",
          a: `<p>On push, enqueue to q2, then move all from q1 to q2, then swap q1 and q2. Pop from q1.</p>
<pre><code>class StackFromQueues {
  constructor() { this.q1 = []; this.q2 = []; }
  push(val) {
    this.q2.push(val);
    while (this.q1.length) this.q2.push(this.q1.shift());
    [this.q1, this.q2] = [this.q2, this.q1];
  }
  pop() { return this.q1.shift(); }
}</code></pre>`
        },
        {
          q: "How do you evaluate a postfix (reverse Polish) expression?",
          a: `<p>Use a stack. Push operands; when an operator appears, pop two values, apply the operator, and push the result.</p>
<pre><code>function evalPostfix(tokens) {
  let stack = [];
  for (let t of tokens) {
    if ('+-*/'.includes(t)) {
      let b = stack.pop(), a = stack.pop();
      if (t === '+') stack.push(a + b);
      else if (t === '-') stack.push(a - b);
      else if (t === '*') stack.push(a * b);
      else stack.push(Math.trunc(a / b));
    } else stack.push(Number(t));
  }
  return stack[0];
}</code></pre>`
        },
        {
          q: "How do you sort a stack using only another stack?",
          a: `<p>Pop from the original, find the right position in the temp stack by moving elements back, then push in order.</p>
<pre><code>function sortStack(stack) {
  let temp = [];
  while (stack.length) {
    let val = stack.pop();
    while (temp.length &amp;&amp; temp[temp.length-1] &gt; val) stack.push(temp.pop());
    temp.push(val);
  }
  return temp;
}</code></pre>`
        },
        {
          q: "How do you solve the Stock Span problem?",
          a: `<p>For each day, find how many consecutive previous days had price &lt;= today. Use a stack storing indices.</p>
<pre><code>function stockSpan(prices) {
  let span = [], stack = [];
  for (let i = 0; i &lt; prices.length; i++) {
    while (stack.length &amp;&amp; prices[stack[stack.length-1]] &lt;= prices[i]) stack.pop();
    span.push(stack.length ? i - stack[stack.length-1] : i + 1);
    stack.push(i);
  }
  return span;
}</code></pre>`
        },
        {
          q: "Find the largest rectangle in a histogram.",
          a: `<p>Use a stack to track bar indices. When a shorter bar is found, calculate areas for taller bars that can no longer extend.</p>
<pre><code>function largestRectangle(heights) {
  let stack = [], max = 0;
  heights.push(0);
  for (let i = 0; i &lt; heights.length; i++) {
    while (stack.length &amp;&amp; heights[stack[stack.length-1]] &gt; heights[i]) {
      let h = heights[stack.pop()];
      let w = stack.length ? i - stack[stack.length-1] - 1 : i;
      max = Math.max(max, h * w);
    }
    stack.push(i);
  }
  return max;
}</code></pre>`
        },
        {
          q: "Explain the concept of an LRU Cache.",
          a: `<p>Least Recently Used cache evicts the least recently accessed item when full. Use a Map (insertion-ordered) for O(1) get and put.</p>
<pre><code>class LRU {
  constructor(cap) { this.cap = cap; this.map = new Map(); }
  get(key) {
    if (!this.map.has(key)) return -1;
    let val = this.map.get(key);
    this.map.delete(key); this.map.set(key, val);
    return val;
  }
  put(key, val) {
    this.map.delete(key);
    this.map.set(key, val);
    if (this.map.size &gt; this.cap) this.map.delete(this.map.keys().next().value);
  }
}</code></pre>`
        }
      ]
    },
    {
      id: "tree-graph-puzzles",
      title: "Tree & Graph Puzzles",
      icon: "bi-tree-fill",
      questions: [
        {
          q: "Find the maximum depth of a binary tree.",
          a: `<p>Recursively find the depth of left and right subtrees and return the max plus one.</p>
<pre><code>function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}</code></pre>`
        },
        {
          q: "Perform level order traversal of a binary tree.",
          a: `<p>Use a queue (BFS). Process all nodes at the current level before moving to the next.</p>
<pre><code>function levelOrder(root) {
  if (!root) return [];
  let queue = [root], result = [];
  while (queue.length) {
    let level = [], size = queue.length;
    for (let i = 0; i &lt; size; i++) {
      let node = queue.shift();
      level.push(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
  }
  return result;
}</code></pre>`
        },
        {
          q: "Check if a binary tree is symmetric.",
          a: `<p>A tree is symmetric if the left subtree is a mirror of the right subtree. Compare corresponding nodes recursively.</p>
<pre><code>function isSymmetric(root) {
  function mirror(a, b) {
    if (!a &amp;&amp; !b) return true;
    if (!a || !b) return false;
    return a.val === b.val &amp;&amp; mirror(a.left, b.right) &amp;&amp; mirror(a.right, b.left);
  }
  return mirror(root, root);
}</code></pre>`
        },
        {
          q: "Determine if a root-to-leaf path with a given sum exists.",
          a: `<p>Subtract the node value from the target at each step. At a leaf, check if the remaining sum is zero.</p>
<pre><code>function hasPathSum(root, sum) {
  if (!root) return false;
  if (!root.left &amp;&amp; !root.right) return sum === root.val;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}</code></pre>`
        },
        {
          q: "Invert a binary tree.",
          a: `<p>Swap the left and right children of every node recursively.</p>
<pre><code>function invertTree(root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}</code></pre>`
        },
        {
          q: "Validate if a tree is a valid BST.",
          a: `<p>Each node must be within a valid range. Recursively check with updated min/max bounds.</p>
<pre><code>function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val &lt;= min || root.val &gt;= max) return false;
  return isValidBST(root.left, min, root.val) &amp;&amp; isValidBST(root.right, root.val, max);
}</code></pre>`
        },
        {
          q: "Find the lowest common ancestor of two nodes in a binary tree.",
          a: `<p>If the current node matches either target, return it. Recurse left and right. If both return non-null, current is the LCA.</p>
<pre><code>function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left &amp;&amp; right) return root;
  return left || right;
}</code></pre>`
        },
        {
          q: "Find the diameter of a binary tree.",
          a: `<p>The diameter is the longest path between any two nodes. At each node, it is the sum of left and right depths.</p>
<pre><code>function diameter(root) {
  let max = 0;
  function depth(node) {
    if (!node) return 0;
    let l = depth(node.left), r = depth(node.right);
    max = Math.max(max, l + r);
    return 1 + Math.max(l, r);
  }
  depth(root);
  return max;
}</code></pre>`
        },
        {
          q: "Explain the concept of serializing and deserializing a binary tree.",
          a: `<p>Serialize converts a tree to a string (e.g., preorder with null markers). Deserialize reconstructs the tree from that string. This enables saving and transmitting tree structures.</p>
<pre><code>// Concept: "1,2,null,null,3,4,null,null,5,null,null"
// Preorder traversal with null markers for missing children
// Deserialize by reading values in order and recursively building nodes</code></pre>`
        },
        {
          q: "Explain the concept of counting islands in a grid (Number of Islands).",
          a: `<p>Treat the grid as a graph. For each unvisited land cell, run DFS/BFS to mark all connected land cells as visited. Each DFS/BFS call counts as one island.</p>
<pre><code>function numIslands(grid) {
  let count = 0;
  function dfs(i, j) {
    if (i &lt; 0 || j &lt; 0 || i &gt;= grid.length || j &gt;= grid[0].length || grid[i][j] === '0') return;
    grid[i][j] = '0';
    dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1);
  }
  for (let i = 0; i &lt; grid.length; i++)
    for (let j = 0; j &lt; grid[0].length; j++)
      if (grid[i][j] === '1') { count++; dfs(i, j); }
  return count;
}</code></pre>`
        }
      ]
    },
    {
      id: "dp-puzzles",
      title: "DP Puzzles",
      icon: "bi-table",
      questions: [
        {
          q: "Solve the Climbing Stairs problem using DP.",
          a: `<p>Ways to reach step n = ways(n-1) + ways(n-2). This is Fibonacci. Use bottom-up DP for O(n) time, O(1) space.</p>
<pre><code>function climbStairs(n) {
  let a = 1, b = 1;
  for (let i = 2; i &lt;= n; i++) [a, b] = [b, a + b];
  return b;
}</code></pre>`
        },
        {
          q: "Solve the House Robber problem.",
          a: `<p>Cannot rob adjacent houses. For each house, choose max of robbing it (+ dp[i-2]) or skipping it (dp[i-1]).</p>
<pre><code>function rob(nums) {
  let prev2 = 0, prev1 = 0;
  for (let n of nums) {
    let curr = Math.max(prev1, prev2 + n);
    prev2 = prev1; prev1 = curr;
  }
  return prev1;
}</code></pre>`
        },
        {
          q: "Solve the Coin Change problem (minimum coins).",
          a: `<p>DP array where dp[i] = min coins to make amount i. For each coin, update dp[i] = min(dp[i], dp[i-coin]+1).</p>
<pre><code>function coinChange(coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let c of coins)
    for (let i = c; i &lt;= amount; i++)
      dp[i] = Math.min(dp[i], dp[i - c] + 1);
  return dp[amount] === Infinity ? -1 : dp[amount];
}</code></pre>`
        },
        {
          q: "Find the longest palindromic substring.",
          a: `<p>Expand from each character (and between characters) outward while characters match. Track the longest found.</p>
<pre><code>function longestPalindrome(s) {
  let start = 0, maxLen = 1;
  function expand(l, r) {
    while (l &gt;= 0 &amp;&amp; r &lt; s.length &amp;&amp; s[l] === s[r]) { l--; r++; }
    if (r - l - 1 &gt; maxLen) { start = l + 1; maxLen = r - l - 1; }
  }
  for (let i = 0; i &lt; s.length; i++) { expand(i, i); expand(i, i + 1); }
  return s.substring(start, start + maxLen);
}</code></pre>`
        },
        {
          q: "Find the maximum subarray sum (Kadane's Algorithm).",
          a: `<p>Track current sum and reset when it goes negative. Keep a running maximum.</p>
<pre><code>function maxSubArray(nums) {
  let max = nums[0], cur = nums[0];
  for (let i = 1; i &lt; nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    max = Math.max(max, cur);
  }
  return max;
}</code></pre>`
        },
        {
          q: "Count unique paths in a grid from top-left to bottom-right.",
          a: `<p>Only move right or down. dp[i][j] = dp[i-1][j] + dp[i][j-1]. First row and column are all 1s.</p>
<pre><code>function uniquePaths(m, n) {
  let dp = Array.from({length: m}, () =&gt; Array(n).fill(1));
  for (let i = 1; i &lt; m; i++)
    for (let j = 1; j &lt; n; j++)
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
  return dp[m-1][n-1];
}</code></pre>`
        },
        {
          q: "Explain the Word Break problem concept.",
          a: `<p>Given a string and a dictionary, determine if the string can be segmented into dictionary words. Use DP: dp[i] is true if s[0..i-1] can be segmented.</p>
<pre><code>function wordBreak(s, dict) {
  let set = new Set(dict), dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i &lt;= s.length; i++)
    for (let j = 0; j &lt; i; j++)
      if (dp[j] &amp;&amp; set.has(s.substring(j, i))) { dp[i] = true; break; }
  return dp[s.length];
}</code></pre>`
        },
        {
          q: "Solve the Decode Ways problem.",
          a: `<p>A digit string can be decoded into letters (1=A, 26=Z). dp[i] = ways to decode s[0..i-1]. Check single digit and two-digit decodings.</p>
<pre><code>function numDecodings(s) {
  if (s[0] === '0') return 0;
  let n = s.length, dp = Array(n + 1).fill(0);
  dp[0] = 1; dp[1] = 1;
  for (let i = 2; i &lt;= n; i++) {
    if (s[i-1] !== '0') dp[i] += dp[i-1];
    let two = parseInt(s.substring(i-2, i));
    if (two &gt;= 10 &amp;&amp; two &lt;= 26) dp[i] += dp[i-2];
  }
  return dp[n];
}</code></pre>`
        },
        {
          q: "Find the longest common subsequence of two strings.",
          a: `<p>Use a 2D DP table. If characters match, dp[i][j] = dp[i-1][j-1]+1. Otherwise, max of skipping either character.</p>
<pre><code>function lcs(a, b) {
  let m = a.length, n = b.length;
  let dp = Array.from({length: m+1}, () =&gt; Array(n+1).fill(0));
  for (let i = 1; i &lt;= m; i++)
    for (let j = 1; j &lt;= n; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);
  return dp[m][n];
}</code></pre>`
        },
        {
          q: "Find the minimum path sum in a grid.",
          a: `<p>Move only right or down. dp[i][j] = grid[i][j] + min(dp[i-1][j], dp[i][j-1]).</p>
<pre><code>function minPathSum(grid) {
  let m = grid.length, n = grid[0].length;
  for (let i = 0; i &lt; m; i++)
    for (let j = 0; j &lt; n; j++) {
      if (i === 0 &amp;&amp; j === 0) continue;
      let top = i &gt; 0 ? grid[i-1][j] : Infinity;
      let left = j &gt; 0 ? grid[i][j-1] : Infinity;
      grid[i][j] += Math.min(top, left);
    }
  return grid[m-1][n-1];
}</code></pre>`
        }
      ]
    },
    {
      id: "optimization-puzzles",
      title: "Optimization Puzzles",
      icon: "bi-speedometer2",
      questions: [
        {
          q: "Best time to buy and sell stock (one transaction).",
          a: `<p>Track the minimum price seen so far and the maximum profit at each step.</p>
<pre><code>function maxProfit(prices) {
  let min = Infinity, profit = 0;
  for (let p of prices) {
    min = Math.min(min, p);
    profit = Math.max(profit, p - min);
  }
  return profit;
}</code></pre>`
        },
        {
          q: "Container with most water.",
          a: `<p>Use two pointers at the ends. Area = min(height[l], height[r]) * (r - l). Move the shorter pointer inward.</p>
<pre><code>function maxArea(height) {
  let l = 0, r = height.length - 1, max = 0;
  while (l &lt; r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
    height[l] &lt; height[r] ? l++ : r--;
  }
  return max;
}</code></pre>`
        },
        {
          q: "Trapping rain water.",
          a: `<p>For each position, water trapped = min(maxLeft, maxRight) - height. Use two pointers with left/right max tracking.</p>
<pre><code>function trap(height) {
  let l = 0, r = height.length - 1, lMax = 0, rMax = 0, water = 0;
  while (l &lt; r) {
    if (height[l] &lt; height[r]) {
      height[l] &gt;= lMax ? lMax = height[l] : water += lMax - height[l];
      l++;
    } else {
      height[r] &gt;= rMax ? rMax = height[r] : water += rMax - height[r];
      r--;
    }
  }
  return water;
}</code></pre>`
        },
        {
          q: "Can you reach the last index in the Jump Game?",
          a: `<p>Track the farthest index reachable. If current index exceeds it, return false.</p>
<pre><code>function canJump(nums) {
  let farthest = 0;
  for (let i = 0; i &lt; nums.length; i++) {
    if (i &gt; farthest) return false;
    farthest = Math.max(farthest, i + nums[i]);
  }
  return true;
}</code></pre>`
        },
        {
          q: "Can you complete the circuit in the Gas Station problem?",
          a: `<p>If total gas &gt;= total cost, a solution exists. Track the running surplus; reset the start when it goes negative.</p>
<pre><code>function canCompleteCircuit(gas, cost) {
  let total = 0, tank = 0, start = 0;
  for (let i = 0; i &lt; gas.length; i++) {
    let diff = gas[i] - cost[i];
    total += diff; tank += diff;
    if (tank &lt; 0) { start = i + 1; tank = 0; }
  }
  return total &gt;= 0 ? start : -1;
}</code></pre>`
        },
        {
          q: "Explain the Meeting Rooms concept (can a person attend all meetings).",
          a: `<p>Sort intervals by start time. If any meeting starts before the previous one ends, there is a conflict. For counting rooms needed, use a min-heap on end times.</p>
<pre><code>function canAttendAll(intervals) {
  intervals.sort((a, b) =&gt; a[0] - b[0]);
  for (let i = 1; i &lt; intervals.length; i++)
    if (intervals[i][0] &lt; intervals[i-1][1]) return false;
  return true;
}</code></pre>`
        },
        {
          q: "Merge overlapping intervals.",
          a: `<p>Sort by start time. If the current interval overlaps the last merged one, extend the end. Otherwise, add a new interval.</p>
<pre><code>function merge(intervals) {
  intervals.sort((a, b) =&gt; a[0] - b[0]);
  let res = [intervals[0]];
  for (let i = 1; i &lt; intervals.length; i++) {
    let last = res[res.length - 1];
    if (intervals[i][0] &lt;= last[1]) last[1] = Math.max(last[1], intervals[i][1]);
    else res.push(intervals[i]);
  }
  return res;
}</code></pre>`
        },
        {
          q: "Explain the Task Scheduler concept.",
          a: `<p>Given tasks with a cooldown period n, find the minimum time to complete all. The most frequent task determines the frame. Idle slots are filled by other tasks.</p>
<pre><code>function leastInterval(tasks, n) {
  let freq = Array(26).fill(0);
  for (let t of tasks) freq[t.charCodeAt(0) - 65]++;
  freq.sort((a, b) =&gt; b - a);
  let maxF = freq[0] - 1, idle = maxF * n;
  for (let i = 1; i &lt; 26 &amp;&amp; freq[i] &gt; 0; i++)
    idle -= Math.min(maxF, freq[i]);
  return Math.max(tasks.length, tasks.length + idle);
}</code></pre>`
        },
        {
          q: "Find the maximum in each sliding window of size k.",
          a: `<p>Use a deque storing indices. Remove indices outside the window and smaller elements from the back.</p>
<pre><code>function maxSlidingWindow(nums, k) {
  let deque = [], res = [];
  for (let i = 0; i &lt; nums.length; i++) {
    while (deque.length &amp;&amp; deque[0] &lt; i - k + 1) deque.shift();
    while (deque.length &amp;&amp; nums[deque[deque.length-1]] &lt; nums[i]) deque.pop();
    deque.push(i);
    if (i &gt;= k - 1) res.push(nums[deque[0]]);
  }
  return res;
}</code></pre>`
        },
        {
          q: "Find the minimum in a rotated sorted array.",
          a: `<p>Use binary search. Compare mid with the right end to determine which half contains the minimum.</p>
<pre><code>function findMin(nums) {
  let lo = 0, hi = nums.length - 1;
  while (lo &lt; hi) {
    let mid = Math.floor((lo + hi) / 2);
    nums[mid] &gt; nums[hi] ? lo = mid + 1 : hi = mid;
  }
  return nums[lo];
}</code></pre>`
        }
      ]
    },
    {
      id: "brain-teasers",
      title: "Brain Teasers",
      icon: "bi-puzzle",
      questions: [
        {
          q: "25 horses, 5 tracks: find the top 3 fastest in minimum races.",
          a: `<p>Race all 25 horses in groups of 5 (5 races). Race the 5 group winners (1 race). The overall winner is #1. For #2 and #3, race: 2nd and 3rd from the winner's group, 1st and 2nd from the runner-up's group, and 1st from the 3rd place group (1 race). Total: <strong>7 races</strong>.</p>`
        },
        {
          q: "8 balls, one heavier: find it in minimum weighings.",
          a: `<p>Divide into groups of 3, 3, 2. Weigh the two groups of 3. If balanced, the heavy ball is in the group of 2 (one more weighing). If unbalanced, take the heavier group of 3 and weigh two of them. Total: <strong>2 weighings</strong>.</p>`
        },
        {
          q: "100 doors: all closed, toggle every i-th door for i=1..100. Which remain open?",
          a: `<p>A door is toggled once for each of its divisors. Doors with an odd number of divisors stay open. Only perfect squares have odd divisors. So doors 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 remain open (<strong>10 doors</strong>).</p>`
        },
        {
          q: "Explain the Prisoner Hat Puzzle (black and white hats in a line).",
          a: `<p>100 prisoners in a line, each wearing a black or white hat. Starting from the back, each guesses their own hat color. Strategy: the last person says "black" if they see an odd number of black hats. Each subsequent person tracks parity to deduce their own hat. This guarantees <strong>99 correct</strong> (the first is 50/50).</p>`
        },
        {
          q: "Solve the River Crossing puzzle (farmer, fox, chicken, grain).",
          a: `<p>The farmer must transport all across. Fox eats chicken if left alone; chicken eats grain. Steps: 1) Take chicken across. 2) Return alone. 3) Take fox across. 4) Bring chicken back. 5) Take grain across. 6) Return alone. 7) Take chicken across.</p>`
        },
        {
          q: "Gold bar, 7 days: pay a worker daily with exactly 2 cuts.",
          a: `<p>Cut the bar into pieces of 1, 2, and 4 segments. Day 1: give 1. Day 2: give 2, take back 1. Day 3: give 1 + 2. Day 4: give 4, take back 1 + 2. Continue using exchange to always total the correct day amount.</p>`
        },
        {
          q: "Two ropes that each take 1 hour to burn (non-uniform): measure 45 minutes.",
          a: `<p>Light rope 1 from both ends and rope 2 from one end simultaneously. Rope 1 burns out in 30 minutes. At that moment, light the other end of rope 2. It will burn out in 15 more minutes. Total: <strong>45 minutes</strong>.</p>`
        },
        {
          q: "Explain the Blue Eyes Island puzzle.",
          a: `<p>N people with blue eyes on an island. Each can see others but not themselves. A visitor says "at least one has blue eyes." If N=1, that person leaves night 1. If N=2, both see one blue-eyed person and wait; when the other doesn't leave night 1, they deduce their own eyes are blue and both leave night 2. By induction, all N leave on night N.</p>`
        },
        {
          q: "Two eggs, 100 floors: find the critical floor in minimum drops.",
          a: `<p>Use the first egg to narrow the range in decreasing intervals. Start at floor 14, then 27 (14+13), then 39 (27+12), etc. Each time the first egg breaks, use the second egg linearly. This minimizes worst case to <strong>14 drops</strong>.</p>`
        },
        {
          q: "1000 wine bottles, one poisoned: find it with minimum prisoners.",
          a: `<p>Use binary representation. 10 prisoners can identify the bottle since 2^10 = 1024 &gt; 1000. Assign each bottle a 10-bit binary number. Each prisoner drinks from bottles where their bit position is 1. The pattern of deaths reveals the binary number of the poisoned bottle.</p>`
        }
      ]
    }
  ]
};
