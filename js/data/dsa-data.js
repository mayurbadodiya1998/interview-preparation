window.__CATEGORY_dsa__ = {
    category: "dsa",
    label: "DSA",
    icon: "bi-diagram-3-fill",
    topics: [
        {
            id: "arrays",
            title: "Arrays",
            icon: "bi-list-ol",
            questions: [
                {
                    q: "What is an array and how is it stored in memory?",
                    a: `<p>An <strong>array</strong> is a linear data structure that stores elements in <strong>contiguous memory locations</strong>. Each element is accessible via its index in <strong>O(1)</strong> time.</p>
<pre><code>// Declaration
let arr = [10, 20, 30, 40, 50];

// Access by index — O(1)
console.log(arr[2]); // 30
</code></pre>
<p>Arrays are ideal when you need fast random access but can be costly for insertions/deletions in the middle since elements must be shifted.</p>`
                },
                {
                    q: "What are the time complexities of common array operations?",
                    a: `<p>Common array operation complexities:</p>
<ul>
<li><strong>Access by index:</strong> O(1)</li>
<li><strong>Search (unsorted):</strong> O(n)</li>
<li><strong>Search (sorted, binary search):</strong> O(log n)</li>
<li><strong>Insert at end:</strong> O(1) amortized</li>
<li><strong>Insert at beginning/middle:</strong> O(n)</li>
<li><strong>Delete at end:</strong> O(1)</li>
<li><strong>Delete at beginning/middle:</strong> O(n)</li>
</ul>
<p>Insertions and deletions in the middle require <strong>shifting elements</strong>, leading to O(n) time.</p>`
                },
                {
                    q: "How do you solve the Two Sum problem?",
                    a: `<p>The <strong>Two Sum</strong> problem asks: given an array and a target, find two indices whose values sum to the target. Use a <strong>hash map</strong> for O(n) time.</p>
<pre><code>function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i &lt; nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
// twoSum([2,7,11,15], 9) =&gt; [0, 1]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you reverse an array in place?",
                    a: `<p>Use the <strong>two-pointer technique</strong>: swap elements from the start and end, moving inward until the pointers meet.</p>
<pre><code>function reverseArray(arr) {
    let left = 0, right = arr.length - 1;
    while (left &lt; right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}
// reverseArray([1,2,3,4,5]) =&gt; [5,4,3,2,1]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find duplicates in an array?",
                    a: `<p>Use a <strong>Set</strong> to track seen elements. If an element is already in the Set, it is a duplicate.</p>
<pre><code>function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = [];
    for (const num of arr) {
        if (seen.has(num)) {
            duplicates.push(num);
        } else {
            seen.add(num);
        }
    }
    return duplicates;
}
// findDuplicates([1,3,4,2,3,1]) =&gt; [3, 1]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you rotate an array by k positions?",
                    a: `<p>Rotate an array to the right by <strong>k</strong> positions using the <strong>reversal algorithm</strong>: reverse the whole array, then reverse the first k and remaining elements.</p>
<pre><code>function rotateArray(arr, k) {
    k = k % arr.length;
    reverse(arr, 0, arr.length - 1);
    reverse(arr, 0, k - 1);
    reverse(arr, k, arr.length - 1);
    return arr;
}

function reverse(arr, start, end) {
    while (start &lt; end) {
        [arr[start], arr[end]] = [arr[end], arr[start]];
        start++;
        end--;
    }
}
// rotateArray([1,2,3,4,5], 2) =&gt; [4,5,1,2,3]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Explain Kadane's Algorithm for maximum subarray sum.",
                    a: `<p><strong>Kadane's Algorithm</strong> finds the contiguous subarray with the largest sum in O(n) time. It keeps a running sum and resets when it drops below zero.</p>
<pre><code>function maxSubarraySum(arr) {
    let maxSum = arr[0];
    let currentSum = arr[0];
    for (let i = 1; i &lt; arr.length; i++) {
        currentSum = Math.max(arr[i], currentSum + arr[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}
// maxSubarraySum([-2,1,-3,4,-1,2,1,-5,4]) =&gt; 6
</code></pre>
<p><strong>Key idea:</strong> At each position, decide whether to extend the current subarray or start a new one.</p>`
                },
                {
                    q: "How do you merge two sorted arrays into one sorted array?",
                    a: `<p>Use two pointers, one for each array, and compare elements to build the merged result.</p>
<pre><code>function mergeSorted(a, b) {
    const result = [];
    let i = 0, j = 0;
    while (i &lt; a.length &amp;&amp; j &lt; b.length) {
        if (a[i] &lt;= b[j]) {
            result.push(a[i++]);
        } else {
            result.push(b[j++]);
        }
    }
    while (i &lt; a.length) result.push(a[i++]);
    while (j &lt; b.length) result.push(b[j++]);
    return result;
}
// mergeSorted([1,3,5], [2,4,6]) =&gt; [1,2,3,4,5,6]
</code></pre>
<p><strong>Time:</strong> O(n + m) &nbsp;|&nbsp; <strong>Space:</strong> O(n + m)</p>`
                },
                {
                    q: "How do you remove duplicates from a sorted array in place?",
                    a: `<p>Use a <strong>slow/fast pointer</strong> approach. The slow pointer tracks the position of the next unique element.</p>
<pre><code>function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    let slow = 0;
    for (let fast = 1; fast &lt; arr.length; fast++) {
        if (arr[fast] !== arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    return slow + 1; // length of unique portion
}
// removeDuplicates([1,1,2,2,3]) =&gt; 3, arr becomes [1,2,3,...]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you move all zeros to the end of an array?",
                    a: `<p>Use a pointer to track the next non-zero position. Move all non-zero elements forward, then fill the rest with zeros.</p>
<pre><code>function moveZeros(arr) {
    let insertPos = 0;
    for (let i = 0; i &lt; arr.length; i++) {
        if (arr[i] !== 0) {
            [arr[insertPos], arr[i]] = [arr[i], arr[insertPos]];
            insertPos++;
        }
    }
    return arr;
}
// moveZeros([0,1,0,3,12]) =&gt; [1,3,12,0,0]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1). This preserves the relative order of non-zero elements.</p>`
                }
            ]
        },
        {
            id: "strings",
            title: "Strings",
            icon: "bi-fonts",
            questions: [
                {
                    q: "How do you reverse a string?",
                    a: `<p>In JavaScript, strings are immutable, so convert to an array, reverse, and join back.</p>
<pre><code>function reverseString(str) {
    return str.split('').reverse().join('');
}
// reverseString("hello") =&gt; "olleh"

// Two-pointer approach:
function reverseStr(str) {
    const arr = str.split('');
    let l = 0, r = arr.length - 1;
    while (l &lt; r) {
        [arr[l], arr[r]] = [arr[r], arr[l]];
        l++; r--;
    }
    return arr.join('');
}
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you check if a string is a palindrome?",
                    a: `<p>A <strong>palindrome</strong> reads the same forwards and backwards. Compare characters from both ends moving inward.</p>
<pre><code>function isPalindrome(str) {
    str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = str.length - 1;
    while (left &lt; right) {
        if (str[left] !== str[right]) return false;
        left++;
        right--;
    }
    return true;
}
// isPalindrome("racecar") =&gt; true
// isPalindrome("A man, a plan, a canal: Panama") =&gt; true
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) (excluding the cleaned string)</p>`
                },
                {
                    q: "How do you check if two strings are anagrams?",
                    a: `<p>Two strings are <strong>anagrams</strong> if they contain the same characters with the same frequency. Use a frequency map.</p>
<pre><code>function isAnagram(s, t) {
    if (s.length !== t.length) return false;
    const freq = {};
    for (const ch of s) freq[ch] = (freq[ch] || 0) + 1;
    for (const ch of t) {
        if (!freq[ch]) return false;
        freq[ch]--;
    }
    return true;
}
// isAnagram("listen", "silent") =&gt; true
// isAnagram("hello", "world") =&gt; false
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) — at most 26 lowercase letters.</p>`
                },
                {
                    q: "How do you find the first non-repeating character in a string?",
                    a: `<p>Count character frequencies first, then find the first character with a count of 1.</p>
<pre><code>function firstNonRepeating(str) {
    const freq = {};
    for (const ch of str) freq[ch] = (freq[ch] || 0) + 1;
    for (const ch of str) {
        if (freq[ch] === 1) return ch;
    }
    return null;
}
// firstNonRepeating("aabcbd") =&gt; "c"
// firstNonRepeating("aabb") =&gt; null
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) — bounded by character set size.</p>`
                },
                {
                    q: "How do you implement basic string compression?",
                    a: `<p><strong>String compression</strong> replaces consecutive repeated characters with the character and its count (e.g., "aaabbc" → "a3b2c1").</p>
<pre><code>function compress(str) {
    let result = '';
    let count = 1;
    for (let i = 0; i &lt; str.length; i++) {
        if (str[i] === str[i + 1]) {
            count++;
        } else {
            result += str[i] + count;
            count = 1;
        }
    }
    return result.length &lt; str.length ? result : str;
}
// compress("aaabbc") =&gt; "a3b2c1"
// compress("abc") =&gt; "abc" (no compression benefit)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you count vowels in a string?",
                    a: `<p>Iterate through the string and check each character against a set of vowels.</p>
<pre><code>function countVowels(str) {
    const vowels = new Set('aeiouAEIOU');
    let count = 0;
    for (const ch of str) {
        if (vowels.has(ch)) count++;
    }
    return count;
}
// countVowels("Hello World") =&gt; 3
// countVowels("aEiOu") =&gt; 5
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the longest substring without repeating characters?",
                    a: `<p>Use the <strong>sliding window</strong> technique with a Set to track characters in the current window.</p>
<pre><code>function longestUniqueSubstring(s) {
    const set = new Set();
    let left = 0, maxLen = 0;
    for (let right = 0; right &lt; s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left]);
            left++;
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
// longestUniqueSubstring("abcabcbb") =&gt; 3 ("abc")
// longestUniqueSubstring("pwwkew") =&gt; 3 ("wke")
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(min(n, charset))</p>`
                },
                {
                    q: "How do you implement a substring search (indexOf)?",
                    a: `<p>The <strong>naive approach</strong> slides a window of length m over the string of length n and checks for a match at each position.</p>
<pre><code>function findSubstring(text, pattern) {
    for (let i = 0; i &lt;= text.length - pattern.length; i++) {
        let j = 0;
        while (j &lt; pattern.length &amp;&amp; text[i + j] === pattern[j]) {
            j++;
        }
        if (j === pattern.length) return i;
    }
    return -1;
}
// findSubstring("hello world", "world") =&gt; 6
// findSubstring("abcdef", "xyz") =&gt; -1
</code></pre>
<p><strong>Time:</strong> O(n × m) worst case. Optimized algorithms like <strong>KMP</strong> achieve O(n + m).</p>`
                },
                {
                    q: "How do you capitalize the first letter of each word in a string?",
                    a: `<p>Split the string by spaces, capitalize the first character of each word, then join back.</p>
<pre><code>function capitalizeWords(str) {
    return str
        .split(' ')
        .map(word =&gt;
            word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
        )
        .join(' ');
}
// capitalizeWords("hello world foo") =&gt; "Hello World Foo"
// capitalizeWords("javaScript is FUN") =&gt; "Javascript Is Fun"
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the frequency of each character in a string?",
                    a: `<p>Build a <strong>frequency map</strong> by iterating through the string once.</p>
<pre><code>function charFrequency(str) {
    const freq = {};
    for (const ch of str) {
        freq[ch] = (freq[ch] || 0) + 1;
    }
    return freq;
}
// charFrequency("banana")
// =&gt; { b: 1, a: 3, n: 2 }

// To find the most frequent character:
function mostFrequent(str) {
    const freq = charFrequency(str);
    return Object.entries(freq).sort((a, b) =&gt; b[1] - a[1])[0];
}
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(k) where k is the number of unique characters.</p>`
                }
            ]
        },
        {
            id: "linked-lists",
            title: "Linked Lists",
            icon: "bi-link",
            questions: [
                {
                    q: "What is a linked list?",
                    a: `<p>A <strong>linked list</strong> is a linear data structure where each element (node) contains data and a reference (pointer) to the next node. Unlike arrays, elements are not stored in contiguous memory.</p>
<pre><code>class ListNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Create: 1 -&gt; 2 -&gt; 3
const head = new ListNode(1);
head.next = new ListNode(2);
head.next.next = new ListNode(3);
</code></pre>
<p><strong>Advantages:</strong> Dynamic size, efficient insertion/deletion at head. <strong>Disadvantages:</strong> No random access, extra memory for pointers.</p>`
                },
                {
                    q: "What is the difference between singly and doubly linked lists?",
                    a: `<p><strong>Singly linked list:</strong> Each node has a <code>next</code> pointer only. Traversal is one direction.</p>
<p><strong>Doubly linked list:</strong> Each node has both <code>next</code> and <code>prev</code> pointers, allowing bidirectional traversal.</p>
<pre><code>// Singly Linked Node
class SinglyNode {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

// Doubly Linked Node
class DoublyNode {
    constructor(val) {
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
</code></pre>
<ul>
<li><strong>Singly:</strong> Less memory, simpler, but can't traverse backward.</li>
<li><strong>Doubly:</strong> Supports backward traversal, easier deletion of a given node, but uses more memory.</li>
</ul>`
                },
                {
                    q: "How do you insert a node at the head and tail of a linked list?",
                    a: `<p><strong>Insert at head:</strong> Create a new node, point it to the current head, then update head.</p>
<p><strong>Insert at tail:</strong> Traverse to the last node and set its next to the new node.</p>
<pre><code>function insertAtHead(head, val) {
    const newNode = new ListNode(val);
    newNode.next = head;
    return newNode; // new head
}

function insertAtTail(head, val) {
    const newNode = new ListNode(val);
    if (!head) return newNode;
    let curr = head;
    while (curr.next) curr = curr.next;
    curr.next = newNode;
    return head;
}
</code></pre>
<p><strong>Insert at head:</strong> O(1) &nbsp;|&nbsp; <strong>Insert at tail:</strong> O(n) (O(1) if tail pointer is maintained).</p>`
                },
                {
                    q: "How do you delete a node from a linked list?",
                    a: `<p>To delete a node, adjust the previous node's <code>next</code> pointer to skip the target node.</p>
<pre><code>function deleteNode(head, val) {
    if (!head) return null;
    if (head.val === val) return head.next;

    let curr = head;
    while (curr.next &amp;&amp; curr.next.val !== val) {
        curr = curr.next;
    }
    if (curr.next) {
        curr.next = curr.next.next;
    }
    return head;
}
// List: 1-&gt;2-&gt;3-&gt;4, delete 3
// Result: 1-&gt;2-&gt;4
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you reverse a linked list?",
                    a: `<p>Use three pointers: <strong>prev</strong>, <strong>curr</strong>, and <strong>next</strong>. Iterate through the list, reversing each pointer.</p>
<pre><code>function reverseList(head) {
    let prev = null;
    let curr = head;
    while (curr) {
        const next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }
    return prev; // new head
}
// 1-&gt;2-&gt;3-&gt;4 becomes 4-&gt;3-&gt;2-&gt;1
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1). This is one of the most common interview questions.</p>`
                },
                {
                    q: "How do you detect a cycle in a linked list using Floyd's algorithm?",
                    a: `<p><strong>Floyd's Cycle Detection</strong> (Tortoise and Hare) uses two pointers: slow moves 1 step, fast moves 2 steps. If they meet, a cycle exists.</p>
<pre><code>function hasCycle(head) {
    let slow = head, fast = head;
    while (fast &amp;&amp; fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) return true;
    }
    return false;
}
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1). To find the <strong>cycle start</strong>, after detecting the cycle, reset one pointer to head and advance both by 1 step until they meet again.</p>`
                },
                {
                    q: "How do you find the middle of a linked list?",
                    a: `<p>Use the <strong>slow and fast pointer</strong> technique. When fast reaches the end, slow is at the middle.</p>
<pre><code>function findMiddle(head) {
    let slow = head, fast = head;
    while (fast &amp;&amp; fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow;
}
// 1-&gt;2-&gt;3-&gt;4-&gt;5 =&gt; middle is 3
// 1-&gt;2-&gt;3-&gt;4 =&gt; middle is 3 (second of two middles)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you merge two sorted linked lists?",
                    a: `<p>Use a <strong>dummy node</strong> and compare values from both lists, appending the smaller node each time.</p>
<pre><code>function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let tail = dummy;
    while (l1 &amp;&amp; l2) {
        if (l1.val &lt;= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    tail.next = l1 || l2;
    return dummy.next;
}
</code></pre>
<p><strong>Time:</strong> O(n + m) &nbsp;|&nbsp; <strong>Space:</strong> O(1) — we reuse existing nodes.</p>`
                },
                {
                    q: "How do you remove the nth node from the end of a linked list?",
                    a: `<p>Use the <strong>two-pointer gap technique</strong>: advance the fast pointer n steps ahead, then move both until fast reaches the end.</p>
<pre><code>function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let fast = dummy, slow = dummy;

    for (let i = 0; i &lt;= n; i++) fast = fast.next;

    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next;
    return dummy.next;
}
// 1-&gt;2-&gt;3-&gt;4-&gt;5, n=2 =&gt; 1-&gt;2-&gt;3-&gt;5
</code></pre>
<p><strong>Time:</strong> O(n) in a single pass &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "When should you use a linked list vs an array?",
                    a: `<p>Choose based on the access and mutation patterns:</p>
<ul>
<li><strong>Use arrays when:</strong> You need fast random access (O(1) by index), data size is known, or cache performance matters.</li>
<li><strong>Use linked lists when:</strong> You need frequent insertions/deletions at the head or middle, size is unpredictable, or you want to avoid resizing overhead.</li>
</ul>
<table>
<tr><th>Operation</th><th>Array</th><th>Linked List</th></tr>
<tr><td>Access by index</td><td>O(1)</td><td>O(n)</td></tr>
<tr><td>Insert at head</td><td>O(n)</td><td>O(1)</td></tr>
<tr><td>Insert at tail</td><td>O(1)*</td><td>O(n) / O(1)**</td></tr>
<tr><td>Delete at head</td><td>O(n)</td><td>O(1)</td></tr>
</table>
<p>* Amortized &nbsp;|&nbsp; ** With tail pointer</p>`
                }
            ]
        },
        {
            id: "stacks",
            title: "Stacks",
            icon: "bi-stack",
            questions: [
                {
                    q: "What is a stack and what are its key operations?",
                    a: `<p>A <strong>stack</strong> is a <strong>LIFO</strong> (Last In, First Out) data structure. The last element added is the first one removed.</p>
<ul>
<li><strong>push(item):</strong> Add to top — O(1)</li>
<li><strong>pop():</strong> Remove from top — O(1)</li>
<li><strong>peek()/top():</strong> View top without removing — O(1)</li>
<li><strong>isEmpty():</strong> Check if empty — O(1)</li>
</ul>
<pre><code>const stack = [];
stack.push(1); // [1]
stack.push(2); // [1, 2]
stack.push(3); // [1, 2, 3]
stack.pop();   // 3, stack = [1, 2]
stack[stack.length - 1]; // peek =&gt; 2
</code></pre>`
                },
                {
                    q: "How do you implement a stack using a linked list vs an array?",
                    a: `<p><strong>Array-based stack:</strong> Use push/pop at the end of the array. Simple and cache-friendly.</p>
<p><strong>Linked-list-based stack:</strong> Push/pop at the head. No capacity limits and always O(1).</p>
<pre><code>// Linked List Stack
class Stack {
    constructor() { this.top = null; this.size = 0; }

    push(val) {
        const node = { val, next: this.top };
        this.top = node;
        this.size++;
    }

    pop() {
        if (!this.top) return null;
        const val = this.top.val;
        this.top = this.top.next;
        this.size--;
        return val;
    }

    peek() { return this.top ? this.top.val : null; }
}
</code></pre>
<p>Array is usually preferred in practice for its simplicity and better cache locality.</p>`
                },
                {
                    q: "How do you check for balanced parentheses using a stack?",
                    a: `<p>Push opening brackets onto the stack. For each closing bracket, check that the stack's top has the matching opening bracket.</p>
<pre><code>function isBalanced(str) {
    const stack = [];
    const map = { ')': '(', ']': '[', '}': '{' };
    for (const ch of str) {
        if ('([{'.includes(ch)) {
            stack.push(ch);
        } else if (')]}'.includes(ch)) {
            if (stack.pop() !== map[ch]) return false;
        }
    }
    return stack.length === 0;
}
// isBalanced("({[]})") =&gt; true
// isBalanced("([)]") =&gt; false
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you design a Min Stack that supports getMin in O(1)?",
                    a: `<p>Maintain a parallel stack that tracks the minimum at each level. Every push/pop keeps the min stack in sync.</p>
<pre><code>class MinStack {
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    push(val) {
        this.stack.push(val);
        const min = this.minStack.length === 0
            ? val
            : Math.min(val, this.getMin());
        this.minStack.push(min);
    }

    pop() {
        this.stack.pop();
        this.minStack.pop();
    }

    top() { return this.stack[this.stack.length - 1]; }
    getMin() { return this.minStack[this.minStack.length - 1]; }
}
</code></pre>
<p>All operations are <strong>O(1)</strong> time. Space is O(n) for the auxiliary min stack.</p>`
                },
                {
                    q: "How do you evaluate a postfix (Reverse Polish Notation) expression?",
                    a: `<p>Use a stack: push operands, and when you encounter an operator, pop two operands, apply the operator, and push the result.</p>
<pre><code>function evalPostfix(tokens) {
    const stack = [];
    for (const token of tokens) {
        if ('+-*/'.includes(token)) {
            const b = stack.pop();
            const a = stack.pop();
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else stack.push(Math.trunc(a / b));
        } else {
            stack.push(Number(token));
        }
    }
    return stack.pop();
}
// evalPostfix(["2","1","+","3","*"]) =&gt; 9
// Explanation: ((2+1)*3) = 9
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the next greater element using a stack?",
                    a: `<p>Traverse from right to left. Use a stack to keep track of elements. For each element, pop smaller values off the stack — the top is the next greater element.</p>
<pre><code>function nextGreaterElement(arr) {
    const result = new Array(arr.length).fill(-1);
    const stack = [];
    for (let i = arr.length - 1; i &gt;= 0; i--) {
        while (stack.length &amp;&amp; stack[stack.length - 1] &lt;= arr[i]) {
            stack.pop();
        }
        if (stack.length) result[i] = stack[stack.length - 1];
        stack.push(arr[i]);
    }
    return result;
}
// nextGreaterElement([4, 5, 2, 25]) =&gt; [5, 25, 25, -1]
</code></pre>
<p><strong>Time:</strong> O(n) — each element is pushed/popped at most once &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you solve the Stock Span problem using a stack?",
                    a: `<p>The <strong>stock span</strong> on day i is the number of consecutive previous days where the price was ≤ price[i]. Use a stack of indices.</p>
<pre><code>function stockSpan(prices) {
    const span = [];
    const stack = []; // stores indices
    for (let i = 0; i &lt; prices.length; i++) {
        while (stack.length &amp;&amp; prices[stack[stack.length - 1]] &lt;= prices[i]) {
            stack.pop();
        }
        span.push(stack.length === 0 ? i + 1 : i - stack[stack.length - 1]);
        stack.push(i);
    }
    return span;
}
// stockSpan([100, 80, 60, 70, 60, 75, 85])
// =&gt; [1, 1, 1, 2, 1, 4, 6]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you sort a stack using only another stack?",
                    a: `<p>Use a temporary stack. Pop from the input stack and insert into the temp stack in sorted order.</p>
<pre><code>function sortStack(stack) {
    const temp = [];
    while (stack.length) {
        const curr = stack.pop();
        while (temp.length &amp;&amp; temp[temp.length - 1] &gt; curr) {
            stack.push(temp.pop());
        }
        temp.push(curr);
    }
    return temp;
}
// sortStack([34, 3, 31, 98, 92, 23])
// =&gt; [3, 23, 31, 34, 92, 98]
</code></pre>
<p><strong>Time:</strong> O(n²) worst case &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you implement two stacks in one array?",
                    a: `<p>Use one stack growing from the <strong>start</strong> and the other from the <strong>end</strong> of the array.</p>
<pre><code>class TwoStacks {
    constructor(size) {
        this.arr = new Array(size);
        this.top1 = -1;
        this.top2 = size;
    }

    push1(val) {
        if (this.top1 + 1 &lt; this.top2) this.arr[++this.top1] = val;
    }

    push2(val) {
        if (this.top1 + 1 &lt; this.top2) this.arr[--this.top2] = val;
    }

    pop1() {
        return this.top1 &gt;= 0 ? this.arr[this.top1--] : null;
    }

    pop2() {
        return this.top2 &lt; this.arr.length ? this.arr[this.top2++] : null;
    }
}
</code></pre>
<p>This efficiently shares space between both stacks. Overflow only occurs when the total elements exceed the array size.</p>`
                },
                {
                    q: "How are stacks used to implement undo operations?",
                    a: `<p>Each action is pushed onto the stack. <strong>Undo</strong> pops the last action and reverts it. A <strong>redo</strong> stack can store undone actions.</p>
<pre><code>class UndoManager {
    constructor() {
        this.undoStack = [];
        this.redoStack = [];
        this.state = '';
    }

    execute(action) {
        this.undoStack.push(this.state);
        this.state = action(this.state);
        this.redoStack = []; // clear redo on new action
    }

    undo() {
        if (!this.undoStack.length) return;
        this.redoStack.push(this.state);
        this.state = this.undoStack.pop();
    }

    redo() {
        if (!this.redoStack.length) return;
        this.undoStack.push(this.state);
        this.state = this.redoStack.pop();
    }
}
</code></pre>
<p>This pattern is used in text editors, drawing apps, and many software applications.</p>`
                }
            ]
        },
        {
            id: "queues",
            title: "Queues",
            icon: "bi-collection",
            questions: [
                {
                    q: "What is a queue and what are its key operations?",
                    a: `<p>A <strong>queue</strong> is a <strong>FIFO</strong> (First In, First Out) data structure. Elements are added at the rear and removed from the front.</p>
<ul>
<li><strong>enqueue(item):</strong> Add to rear — O(1)</li>
<li><strong>dequeue():</strong> Remove from front — O(1)</li>
<li><strong>front()/peek():</strong> View front element — O(1)</li>
<li><strong>isEmpty():</strong> Check if empty — O(1)</li>
</ul>
<pre><code>// Simple queue using array (dequeue is O(n) with shift)
const queue = [];
queue.push(1);  // enqueue
queue.push(2);
queue.shift();  // dequeue =&gt; 1
</code></pre>
<p>For optimal O(1) operations, use a linked list or circular array implementation.</p>`
                },
                {
                    q: "How do you implement a queue using an array?",
                    a: `<p>Track <code>front</code> and <code>rear</code> indices. Enqueue at rear, dequeue from front. Use modular arithmetic for circular behavior to avoid wasting space.</p>
<pre><code>class ArrayQueue {
    constructor(capacity) {
        this.items = new Array(capacity);
        this.front = 0;
        this.rear = 0;
        this.size = 0;
        this.capacity = capacity;
    }

    enqueue(val) {
        if (this.size === this.capacity) return false;
        this.items[this.rear] = val;
        this.rear = (this.rear + 1) % this.capacity;
        this.size++;
        return true;
    }

    dequeue() {
        if (this.size === 0) return null;
        const val = this.items[this.front];
        this.front = (this.front + 1) % this.capacity;
        this.size--;
        return val;
    }
}
</code></pre>
<p>This gives <strong>O(1)</strong> enqueue and dequeue without wasting space.</p>`
                },
                {
                    q: "What is a circular queue and why is it useful?",
                    a: `<p>A <strong>circular queue</strong> wraps the rear index back to the start when it reaches the end of the array, reusing freed spaces from dequeue operations.</p>
<pre><code>class CircularQueue {
    constructor(k) {
        this.queue = new Array(k);
        this.head = -1;
        this.tail = -1;
        this.size = k;
    }

    enqueue(val) {
        if (this.isFull()) return false;
        if (this.isEmpty()) this.head = 0;
        this.tail = (this.tail + 1) % this.size;
        this.queue[this.tail] = val;
        return true;
    }

    dequeue() {
        if (this.isEmpty()) return false;
        if (this.head === this.tail) { this.head = -1; this.tail = -1; }
        else this.head = (this.head + 1) % this.size;
        return true;
    }

    isEmpty() { return this.head === -1; }
    isFull() { return (this.tail + 1) % this.size === this.head; }
}
</code></pre>
<p>Used in <strong>CPU scheduling</strong>, <strong>buffer management</strong>, and <strong>traffic systems</strong>.</p>`
                },
                {
                    q: "What is a priority queue and how does it differ from a regular queue?",
                    a: `<p>A <strong>priority queue</strong> serves elements based on <strong>priority</strong> rather than insertion order. Higher priority elements are dequeued first.</p>
<ul>
<li>Typically implemented with a <strong>heap</strong> for O(log n) insert and extract.</li>
<li>Used in Dijkstra's algorithm, task scheduling, and Huffman coding.</li>
</ul>
<pre><code>// Simple priority queue (not optimal — use a heap for production)
class PriorityQueue {
    constructor() { this.items = []; }

    enqueue(val, priority) {
        this.items.push({ val, priority });
        this.items.sort((a, b) =&gt; a.priority - b.priority);
    }

    dequeue() {
        return this.items.shift();
    }
}
// pq.enqueue("low", 3);
// pq.enqueue("high", 1);
// pq.dequeue() =&gt; { val: "high", priority: 1 }
</code></pre>
<p>The sort-based approach is O(n log n) per enqueue. A proper <strong>min-heap</strong> achieves O(log n).</p>`
                },
                {
                    q: "How is a queue used in BFS (Breadth-First Search)?",
                    a: `<p>BFS explores a graph level by level using a <strong>queue</strong>. Enqueue the start node, then dequeue and enqueue its unvisited neighbors.</p>
<pre><code>function bfs(graph, start) {
    const visited = new Set([start]);
    const queue = [start];
    const result = [];

    while (queue.length) {
        const node = queue.shift();
        result.push(node);
        for (const neighbor of graph[node]) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return result;
}
// graph = { A:['B','C'], B:['D'], C:['E'], D:[], E:[] }
// bfs(graph, 'A') =&gt; ['A','B','C','D','E']
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How do you implement a queue using two stacks?",
                    a: `<p>Use <strong>stack1</strong> for enqueue and <strong>stack2</strong> for dequeue. When stack2 is empty, transfer all elements from stack1 to stack2 (reversing the order).</p>
<pre><code>class QueueFromStacks {
    constructor() {
        this.stack1 = [];  // for push
        this.stack2 = [];  // for pop
    }

    enqueue(val) {
        this.stack1.push(val);
    }

    dequeue() {
        if (!this.stack2.length) {
            while (this.stack1.length) {
                this.stack2.push(this.stack1.pop());
            }
        }
        return this.stack2.pop();
    }
}
// q.enqueue(1); q.enqueue(2); q.enqueue(3);
// q.dequeue() =&gt; 1 (FIFO order)
</code></pre>
<p><strong>Amortized O(1)</strong> per operation. Each element is moved at most twice.</p>`
                },
                {
                    q: "What is a deque (double-ended queue)?",
                    a: `<p>A <strong>deque</strong> supports insertion and deletion at <strong>both ends</strong> in O(1) time.</p>
<pre><code>class Deque {
    constructor() { this.items = []; }

    addFront(val)  { this.items.unshift(val); }
    addRear(val)   { this.items.push(val); }
    removeFront()  { return this.items.shift(); }
    removeRear()   { return this.items.pop(); }
    peekFront()    { return this.items[0]; }
    peekRear()     { return this.items[this.items.length - 1]; }
    isEmpty()      { return this.items.length === 0; }
}
</code></pre>
<ul>
<li><strong>Use cases:</strong> Sliding window maximum, palindrome checking, work-stealing algorithms.</li>
<li>Note: JavaScript's <code>unshift</code>/<code>shift</code> are O(n). For true O(1), use a doubly linked list.</li>
</ul>`
                },
                {
                    q: "How do you solve the sliding window maximum problem using a deque?",
                    a: `<p>Use a <strong>deque</strong> that stores indices. Keep elements in decreasing order; the front always has the max for the current window.</p>
<pre><code>function maxSlidingWindow(nums, k) {
    const deque = [];
    const result = [];
    for (let i = 0; i &lt; nums.length; i++) {
        // Remove indices outside the window
        if (deque.length &amp;&amp; deque[0] &lt; i - k + 1) deque.shift();
        // Remove smaller elements from back
        while (deque.length &amp;&amp; nums[deque[deque.length - 1]] &lt; nums[i]) {
            deque.pop();
        }
        deque.push(i);
        if (i &gt;= k - 1) result.push(nums[deque[0]]);
    }
    return result;
}
// maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)
// =&gt; [3,3,5,5,6,7]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How do you find the first non-repeating character in a stream?",
                    a: `<p>Use a <strong>queue</strong> and a <strong>frequency map</strong>. Enqueue each character; dequeue from front while it has count &gt; 1.</p>
<pre><code>function firstNonRepeatingStream(stream) {
    const freq = {};
    const queue = [];
    const results = [];

    for (const ch of stream) {
        freq[ch] = (freq[ch] || 0) + 1;
        queue.push(ch);

        while (queue.length &amp;&amp; freq[queue[0]] &gt; 1) {
            queue.shift();
        }
        results.push(queue.length ? queue[0] : null);
    }
    return results;
}
// firstNonRepeatingStream("aabcbc")
// =&gt; ['a', null, 'b', 'b', 'c', null]
</code></pre>
<p><strong>Time:</strong> O(n) amortized &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you generate binary numbers from 1 to n using a queue?",
                    a: `<p>Start with "1" in the queue. For each number, dequeue it, then enqueue it + "0" and it + "1".</p>
<pre><code>function generateBinary(n) {
    const result = [];
    const queue = ["1"];
    for (let i = 0; i &lt; n; i++) {
        const front = queue.shift();
        result.push(front);
        queue.push(front + "0");
        queue.push(front + "1");
    }
    return result;
}
// generateBinary(5) =&gt; ["1","10","11","100","101"]
// generateBinary(8) =&gt; ["1","10","11","100","101","110","111","1000"]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n). This elegantly uses the queue's FIFO property to generate numbers in order.</p>`
                }
            ]
        },
        {
            id: "hash-tables",
            title: "Hash Tables",
            icon: "bi-hash",
            questions: [
                {
                    q: "What is a hash table and how does it work?",
                    a: `<p>A <strong>hash table</strong> (hash map) stores key-value pairs. A <strong>hash function</strong> maps keys to array indices (buckets) for fast lookups.</p>
<pre><code>// Concept:
// key → hashFunction(key) → index → store value at index

// JavaScript's Map is a built-in hash table:
const map = new Map();
map.set("name", "Alice");   // O(1)
map.get("name");             // "Alice" — O(1)
map.has("name");             // true — O(1)
map.delete("name");          // O(1)
</code></pre>
<p><strong>Average time complexity:</strong> O(1) for insert, lookup, and delete. Worst case O(n) with many collisions.</p>`
                },
                {
                    q: "What makes a good hash function?",
                    a: `<p>A good hash function should:</p>
<ul>
<li><strong>Deterministic:</strong> Same key always produces the same hash.</li>
<li><strong>Uniform distribution:</strong> Keys spread evenly across buckets to minimize collisions.</li>
<li><strong>Fast computation:</strong> O(1) for fixed-length keys.</li>
<li><strong>Minimize collisions:</strong> Different keys should ideally produce different hashes.</li>
</ul>
<pre><code>// Simple hash function for strings
function simpleHash(key, tableSize) {
    let hash = 0;
    for (let i = 0; i &lt; key.length; i++) {
        hash = (hash * 31 + key.charCodeAt(i)) % tableSize;
    }
    return hash;
}
// simpleHash("hello", 100) =&gt; some index 0-99
</code></pre>
<p>Multiplying by a prime (31) helps distribute keys more uniformly.</p>`
                },
                {
                    q: "How are hash collisions handled (chaining vs open addressing)?",
                    a: `<p><strong>Chaining:</strong> Each bucket holds a linked list. Colliding keys are stored in the same bucket's list.</p>
<p><strong>Open Addressing:</strong> On collision, probe for the next available slot (linear probing, quadratic probing, or double hashing).</p>
<pre><code>// Chaining example
class HashTableChaining {
    constructor(size = 53) {
        this.table = new Array(size).fill(null).map(() =&gt; []);
    }
    _hash(key) {
        let h = 0;
        for (const ch of String(key)) h = (h * 31 + ch.charCodeAt(0)) % this.table.length;
        return h;
    }
    set(key, val) {
        const idx = this._hash(key);
        const existing = this.table[idx].find(p =&gt; p[0] === key);
        if (existing) existing[1] = val;
        else this.table[idx].push([key, val]);
    }
    get(key) {
        const pair = this.table[this._hash(key)].find(p =&gt; p[0] === key);
        return pair ? pair[1] : undefined;
    }
}
</code></pre>
<p><strong>Chaining</strong> is simpler; <strong>open addressing</strong> has better cache performance.</p>`
                },
                {
                    q: "What are the time complexities of HashMap operations?",
                    a: `<p>Hash map (hash table) operation complexities:</p>
<ul>
<li><strong>Insert (set):</strong> O(1) average, O(n) worst case</li>
<li><strong>Lookup (get):</strong> O(1) average, O(n) worst case</li>
<li><strong>Delete:</strong> O(1) average, O(n) worst case</li>
<li><strong>Space:</strong> O(n)</li>
</ul>
<p>Worst case occurs when all keys hash to the same bucket. A good hash function and a proper <strong>load factor</strong> (typically &lt; 0.75) keep operations near O(1).</p>
<pre><code>// Load factor = number of entries / number of buckets
// When load factor exceeds threshold, the table is resized
// (usually doubled) and all entries are rehashed.
</code></pre>
<p>JavaScript's <code>Map</code> and <code>Object</code> handle this automatically.</p>`
                },
                {
                    q: "How do you solve Two Sum using a hash map?",
                    a: `<p>Store each number's index in a hash map. For each element, check if <code>target - num</code> already exists in the map.</p>
<pre><code>function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i &lt; nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}
// twoSum([2, 7, 11, 15], 9) =&gt; [0, 1]
// twoSum([3, 3], 6) =&gt; [0, 1]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n). Much better than the brute-force O(n²) approach.</p>`
                },
                {
                    q: "How do you group anagrams using a hash map?",
                    a: `<p>Use sorted characters as the key. All anagrams produce the same sorted key.</p>
<pre><code>function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }
    return Array.from(map.values());
}
// groupAnagrams(["eat","tea","tan","ate","nat","bat"])
// =&gt; [["eat","tea","ate"], ["tan","nat"], ["bat"]]
</code></pre>
<p><strong>Time:</strong> O(n × k log k) where k is the max string length &nbsp;|&nbsp; <strong>Space:</strong> O(n × k)</p>`
                },
                {
                    q: "How do you find the first duplicate in an array using a hash set?",
                    a: `<p>Iterate through the array and add each element to a set. The first element already in the set is the first duplicate.</p>
<pre><code>function firstDuplicate(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) return num;
        seen.add(num);
    }
    return -1; // no duplicate
}
// firstDuplicate([2, 1, 3, 5, 3, 2]) =&gt; 3
// firstDuplicate([1, 2, 3]) =&gt; -1
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you count the frequency of elements using a hash map?",
                    a: `<p>Iterate through the collection and increment counts in a Map (or object).</p>
<pre><code>function countFrequency(arr) {
    const freq = new Map();
    for (const item of arr) {
        freq.set(item, (freq.get(item) || 0) + 1);
    }
    return freq;
}
// countFrequency([1,2,2,3,3,3])
// =&gt; Map { 1 =&gt; 1, 2 =&gt; 2, 3 =&gt; 3 }

// Find element with highest frequency:
function mostFrequent(arr) {
    const freq = countFrequency(arr);
    let maxItem, maxCount = 0;
    for (const [item, count] of freq) {
        if (count &gt; maxCount) { maxCount = count; maxItem = item; }
    }
    return maxItem;
}
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(k) where k is the number of unique elements.</p>`
                },
                {
                    q: "How do you find the intersection of two arrays using a hash set?",
                    a: `<p>Put the first array into a Set, then filter the second array to keep only elements present in the Set.</p>
<pre><code>function intersection(arr1, arr2) {
    const set = new Set(arr1);
    return [...new Set(arr2.filter(x =&gt; set.has(x)))];
}
// intersection([1,2,2,1], [2,2]) =&gt; [2]
// intersection([4,9,5], [9,4,9,8,4]) =&gt; [9, 4]

// For intersection with duplicates:
function intersect(arr1, arr2) {
    const map = new Map();
    for (const n of arr1) map.set(n, (map.get(n) || 0) + 1);
    const result = [];
    for (const n of arr2) {
        if (map.get(n) &gt; 0) { result.push(n); map.set(n, map.get(n) - 1); }
    }
    return result;
}
</code></pre>
<p><strong>Time:</strong> O(n + m) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "What is an LRU Cache and how does it work conceptually?",
                    a: `<p>An <strong>LRU (Least Recently Used) Cache</strong> evicts the least recently accessed item when capacity is full. It combines a <strong>hash map</strong> (for O(1) lookup) and a <strong>doubly linked list</strong> (for O(1) insertion/removal).</p>
<pre><code>class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = new Map();
    }

    get(key) {
        if (!this.cache.has(key)) return -1;
        const val = this.cache.get(key);
        this.cache.delete(key);     // remove
        this.cache.set(key, val);   // re-insert (most recent)
        return val;
    }

    put(key, value) {
        if (this.cache.has(key)) this.cache.delete(key);
        this.cache.set(key, value);
        if (this.cache.size &gt; this.capacity) {
            // Delete the least recently used (first inserted)
            const oldest = this.cache.keys().next().value;
            this.cache.delete(oldest);
        }
    }
}
</code></pre>
<p>JavaScript's <code>Map</code> preserves insertion order, making this implementation simple. All operations are <strong>O(1)</strong>.</p>`
                }
            ]
        },
        {
            id: "trees",
            title: "Trees",
            icon: "bi-tree-fill",
            questions: [
                {
                    q: "What is a tree data structure?",
                    a: `<p>A <strong>tree</strong> is a hierarchical data structure consisting of <strong>nodes</strong> connected by <strong>edges</strong>. It has a <strong>root</strong> node, and each node can have zero or more <strong>children</strong>.</p>
<ul>
<li><strong>Root:</strong> The topmost node with no parent.</li>
<li><strong>Leaf:</strong> A node with no children.</li>
<li><strong>Height:</strong> Longest path from root to a leaf.</li>
<li><strong>Depth:</strong> Distance from root to a given node.</li>
</ul>
<pre><code>class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
</code></pre>
<p>Trees are used in file systems, DOM, compilers (AST), databases (B-trees), and more.</p>`
                },
                {
                    q: "What is a binary tree?",
                    a: `<p>A <strong>binary tree</strong> is a tree where each node has <strong>at most two children</strong>: left and right.</p>
<ul>
<li><strong>Full binary tree:</strong> Every node has 0 or 2 children.</li>
<li><strong>Complete binary tree:</strong> All levels filled except possibly the last, which is filled from left to right.</li>
<li><strong>Perfect binary tree:</strong> All internal nodes have 2 children and all leaves are at the same level.</li>
</ul>
<pre><code>//       1
//      / \\
//     2   3
//    / \\
//   4   5
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
</code></pre>
<p>A perfect binary tree of height h has <strong>2^(h+1) - 1</strong> nodes.</p>`
                },
                {
                    q: "What are inorder, preorder, and postorder tree traversals?",
                    a: `<p>Three DFS traversal orders for binary trees:</p>
<ul>
<li><strong>Inorder (Left, Root, Right):</strong> Gives sorted order for BSTs.</li>
<li><strong>Preorder (Root, Left, Right):</strong> Used to copy/serialize a tree.</li>
<li><strong>Postorder (Left, Right, Root):</strong> Used to delete a tree (children first).</li>
</ul>
<pre><code>function inorder(node, result = []) {
    if (!node) return result;
    inorder(node.left, result);
    result.push(node.val);
    inorder(node.right, result);
    return result;
}

function preorder(node, result = []) {
    if (!node) return result;
    result.push(node.val);
    preorder(node.left, result);
    preorder(node.right, result);
    return result;
}

function postorder(node, result = []) {
    if (!node) return result;
    postorder(node.left, result);
    postorder(node.right, result);
    result.push(node.val);
    return result;
}
</code></pre>
<p>All three are <strong>O(n)</strong> time and <strong>O(h)</strong> space (recursion stack).</p>`
                },
                {
                    q: "How does level order traversal (BFS) work on a tree?",
                    a: `<p><strong>Level order traversal</strong> visits nodes level by level using a <strong>queue</strong>.</p>
<pre><code>function levelOrder(root) {
    if (!root) return [];
    const result = [];
    const queue = [root];

    while (queue.length) {
        const levelSize = queue.length;
        const level = [];
        for (let i = 0; i &lt; levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}
//       1
//      / \\
//     2   3
//    / \\
//   4   5
// =&gt; [[1], [2, 3], [4, 5]]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(w) where w is the maximum width of the tree.</p>`
                },
                {
                    q: "How do you find the height of a binary tree?",
                    a: `<p>The <strong>height</strong> is the number of edges on the longest path from root to a leaf. Use recursion: the height is 1 + max(left height, right height).</p>
<pre><code>function treeHeight(node) {
    if (!node) return -1; // -1 for edge count, 0 for node count
    return 1 + Math.max(treeHeight(node.left), treeHeight(node.right));
}

// Alternative: return 0 if null (counts nodes on longest path)
function maxDepth(node) {
    if (!node) return 0;
    return 1 + Math.max(maxDepth(node.left), maxDepth(node.right));
}
//       1
//      / \\
//     2   3
//    /
//   4
// treeHeight =&gt; 2 (edges), maxDepth =&gt; 3 (nodes)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h) recursion stack.</p>`
                },
                {
                    q: "How do you count the total number of nodes in a binary tree?",
                    a: `<p>Recursively count: 1 (current node) + count of left subtree + count of right subtree.</p>
<pre><code>function countNodes(node) {
    if (!node) return 0;
    return 1 + countNodes(node.left) + countNodes(node.right);
}

// Count leaf nodes only:
function countLeaves(node) {
    if (!node) return 0;
    if (!node.left &amp;&amp; !node.right) return 1;
    return countLeaves(node.left) + countLeaves(node.right);
}
//       1
//      / \\
//     2   3
//    / \\
//   4   5
// countNodes =&gt; 5, countLeaves =&gt; 3 (nodes 3, 4, 5)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you check if a binary tree is balanced?",
                    a: `<p>A tree is <strong>balanced</strong> if for every node, the height difference between left and right subtrees is at most 1.</p>
<pre><code>function isBalanced(node) {
    function checkHeight(node) {
        if (!node) return 0;
        const left = checkHeight(node.left);
        if (left === -1) return -1;
        const right = checkHeight(node.right);
        if (right === -1) return -1;
        if (Math.abs(left - right) &gt; 1) return -1;
        return 1 + Math.max(left, right);
    }
    return checkHeight(node) !== -1;
}
// Balanced:    Unbalanced:
//     1            1
//    / \\            \\
//   2   3            2
//                     \\
//                      3
</code></pre>
<p><strong>Time:</strong> O(n) — each node visited once &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you create a mirror (invert) of a binary tree?",
                    a: `<p>Swap the left and right children of every node recursively.</p>
<pre><code>function invertTree(node) {
    if (!node) return null;
    const temp = node.left;
    node.left = node.right;
    node.right = temp;
    invertTree(node.left);
    invertTree(node.right);
    return node;
}
// Before:       After:
//     1            1
//    / \\          / \\
//   2   3        3   2
//  / \\          / \\
// 4   5        5   4
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h). This is a classic interview question famously associated with Homebrew creator Max Howell.</p>`
                },
                {
                    q: "How do you find the diameter of a binary tree?",
                    a: `<p>The <strong>diameter</strong> is the longest path between any two nodes (number of edges). It may or may not pass through the root.</p>
<pre><code>function diameterOfBinaryTree(root) {
    let diameter = 0;

    function height(node) {
        if (!node) return 0;
        const left = height(node.left);
        const right = height(node.right);
        diameter = Math.max(diameter, left + right);
        return 1 + Math.max(left, right);
    }

    height(root);
    return diameter;
}
//       1
//      / \\
//     2   3
//    / \\
//   4   5
// Diameter = 3 (path: 4-&gt;2-&gt;1-&gt;3 or 5-&gt;2-&gt;1-&gt;3)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you find the Lowest Common Ancestor (LCA) of two nodes?",
                    a: `<p>The <strong>LCA</strong> of nodes p and q is the deepest node that is an ancestor of both. If a node finds p on one side and q on the other, it is the LCA.</p>
<pre><code>function lowestCommonAncestor(root, p, q) {
    if (!root || root === p || root === q) return root;
    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);
    if (left &amp;&amp; right) return root; // p and q on different sides
    return left || right;
}
//       3
//      / \\
//     5   1
//    / \\
//   6   2
// LCA(5, 1) = 3
// LCA(6, 2) = 5
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h). For BSTs, you can optimize by comparing values to avoid visiting all nodes.</p>`
                }
            ]
        },
        {
            id: "binary-search-trees",
            title: "Binary Search Trees",
            icon: "bi-tree",
            questions: [
                {
                    q: "What is a Binary Search Tree (BST)?",
                    a: `<p>A <strong>BST</strong> is a binary tree where for every node:</p>
<ul>
<li>All values in the <strong>left subtree</strong> are <strong>less than</strong> the node's value.</li>
<li>All values in the <strong>right subtree</strong> are <strong>greater than</strong> the node's value.</li>
</ul>
<pre><code>//       8
//      / \\
//     3   10
//    / \\    \\
//   1   6    14
//      / \\
//     4   7

// Inorder traversal gives sorted order:
// 1, 3, 4, 6, 7, 8, 10, 14
</code></pre>
<p>This property enables efficient <strong>O(log n)</strong> search, insert, and delete on average (O(n) worst case for skewed trees).</p>`
                },
                {
                    q: "How do you search for a value in a BST?",
                    a: `<p>Compare the target with the current node. Go left if smaller, right if larger. Repeat until found or null.</p>
<pre><code>function searchBST(root, target) {
    if (!root) return null;
    if (target === root.val) return root;
    if (target &lt; root.val) return searchBST(root.left, target);
    return searchBST(root.right, target);
}

// Iterative version:
function searchBSTIterative(root, target) {
    while (root &amp;&amp; root.val !== target) {
        root = target &lt; root.val ? root.left : root.right;
    }
    return root;
}
</code></pre>
<p><strong>Time:</strong> O(h) where h is the height — O(log n) for balanced, O(n) for skewed.</p>`
                },
                {
                    q: "How do you insert a value into a BST?",
                    a: `<p>Navigate the tree like a search. When you reach a null position, insert the new node there.</p>
<pre><code>function insertBST(root, val) {
    if (!root) return new TreeNode(val);
    if (val &lt; root.val) {
        root.left = insertBST(root.left, val);
    } else {
        root.right = insertBST(root.right, val);
    }
    return root;
}

// Insert 5 into:
//     8            8
//    / \\   =&gt;    / \\
//   3   10      3   10
//              / \\
//             ?   6
//                /
//               5   (new node)
</code></pre>
<p><strong>Time:</strong> O(h) &nbsp;|&nbsp; <strong>Space:</strong> O(h) for recursive, O(1) for iterative.</p>`
                },
                {
                    q: "How do you delete a node from a BST?",
                    a: `<p>Three cases when deleting a node:</p>
<ul>
<li><strong>Leaf node:</strong> Simply remove it.</li>
<li><strong>One child:</strong> Replace with the child.</li>
<li><strong>Two children:</strong> Replace with the <strong>inorder successor</strong> (smallest in right subtree) or inorder predecessor.</li>
</ul>
<pre><code>function deleteBST(root, val) {
    if (!root) return null;
    if (val &lt; root.val) root.left = deleteBST(root.left, val);
    else if (val &gt; root.val) root.right = deleteBST(root.right, val);
    else {
        if (!root.left) return root.right;
        if (!root.right) return root.left;
        // Two children: find inorder successor
        let successor = root.right;
        while (successor.left) successor = successor.left;
        root.val = successor.val;
        root.right = deleteBST(root.right, successor.val);
    }
    return root;
}
</code></pre>
<p><strong>Time:</strong> O(h) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you validate if a binary tree is a valid BST?",
                    a: `<p>Check that each node's value falls within a valid range (min, max). The range narrows as you traverse.</p>
<pre><code>function isValidBST(node, min = -Infinity, max = Infinity) {
    if (!node) return true;
    if (node.val &lt;= min || node.val &gt;= max) return false;
    return isValidBST(node.left, min, node.val) &amp;&amp;
           isValidBST(node.right, node.val, max);
}

// OR use inorder traversal — it should produce sorted order:
function isValidBSTInorder(root) {
    let prev = -Infinity;
    function inorder(node) {
        if (!node) return true;
        if (!inorder(node.left)) return false;
        if (node.val &lt;= prev) return false;
        prev = node.val;
        return inorder(node.right);
    }
    return inorder(root);
}
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you find the inorder successor in a BST?",
                    a: `<p>The <strong>inorder successor</strong> is the node with the smallest value greater than the given node.</p>
<ul>
<li><strong>If right subtree exists:</strong> The successor is the leftmost node in the right subtree.</li>
<li><strong>If no right subtree:</strong> Traverse from root, tracking the last node where you went left.</li>
</ul>
<pre><code>function inorderSuccessor(root, target) {
    // Case 1: right subtree exists
    if (target.right) {
        let node = target.right;
        while (node.left) node = node.left;
        return node;
    }
    // Case 2: go up — find nearest ancestor for which target is in left subtree
    let successor = null;
    let curr = root;
    while (curr) {
        if (target.val &lt; curr.val) {
            successor = curr;
            curr = curr.left;
        } else {
            curr = curr.right;
        }
    }
    return successor;
}
</code></pre>
<p><strong>Time:</strong> O(h) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the kth smallest element in a BST?",
                    a: `<p>Perform an <strong>inorder traversal</strong> (which visits nodes in sorted order) and return the kth element.</p>
<pre><code>function kthSmallest(root, k) {
    let count = 0;
    let result = null;

    function inorder(node) {
        if (!node || result !== null) return;
        inorder(node.left);
        count++;
        if (count === k) { result = node.val; return; }
        inorder(node.right);
    }

    inorder(root);
    return result;
}
//       5
//      / \\
//     3   6
//    / \\
//   2   4
// kthSmallest(root, 3) =&gt; 4
</code></pre>
<p><strong>Time:</strong> O(h + k) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you convert a sorted array to a balanced BST?",
                    a: `<p>Use the middle element as root, and recursively build left and right subtrees from the two halves.</p>
<pre><code>function sortedArrayToBST(nums) {
    if (nums.length === 0) return null;

    function build(left, right) {
        if (left &gt; right) return null;
        const mid = Math.floor((left + right) / 2);
        const node = new TreeNode(nums[mid]);
        node.left = build(left, mid - 1);
        node.right = build(mid + 1, right);
        return node;
    }

    return build(0, nums.length - 1);
}
// [1,2,3,4,5,6,7] =&gt;
//       4
//      / \\
//     2   6
//    / \\ / \\
//   1  3 5  7
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(log n) recursion stack. The resulting tree is height-balanced.</p>`
                },
                {
                    q: "When should you use a BST vs a hash table?",
                    a: `<p>Both support efficient lookup, but they serve different needs:</p>
<ul>
<li><strong>BST advantages:</strong> Maintains sorted order, supports range queries, finds min/max in O(h), in-order traversal gives sorted output.</li>
<li><strong>Hash table advantages:</strong> O(1) average lookup/insert/delete (vs O(log n) for balanced BST), simpler for key-value storage.</li>
</ul>
<table>
<tr><th>Feature</th><th>BST (Balanced)</th><th>Hash Table</th></tr>
<tr><td>Search</td><td>O(log n)</td><td>O(1) avg</td></tr>
<tr><td>Insert</td><td>O(log n)</td><td>O(1) avg</td></tr>
<tr><td>Sorted order</td><td>Yes</td><td>No</td></tr>
<tr><td>Range queries</td><td>Efficient</td><td>Not supported</td></tr>
<tr><td>Min/Max</td><td>O(log n)</td><td>O(n)</td></tr>
</table>
<p>Use a <strong>BST</strong> when order matters; use a <strong>hash table</strong> when speed is the priority.</p>`
                },
                {
                    q: "What are self-balancing BSTs like AVL and Red-Black trees?",
                    a: `<p>Self-balancing BSTs automatically maintain O(log n) height after insertions and deletions.</p>
<ul>
<li><strong>AVL Tree:</strong> Strictly balanced — height difference between left/right subtrees is at most 1. Uses <strong>rotations</strong> (left, right, left-right, right-left) to rebalance. Faster lookups.</li>
<li><strong>Red-Black Tree:</strong> Each node is red or black with specific coloring rules. Less strictly balanced than AVL but fewer rotations on insert/delete. Used in Java's TreeMap, C++ std::map.</li>
</ul>
<pre><code>// AVL Rotation concept (Right Rotation):
//     y          x
//    / \\        / \\
//   x   C  =&gt;  A   y
//  / \\            / \\
// A   B          B   C

// All operations guaranteed O(log n):
// Search: O(log n)
// Insert: O(log n) + O(1) rotations (AVL: max 2)
// Delete: O(log n) + O(log n) rotations (AVL)
</code></pre>
<p>In practice, most languages provide balanced BST implementations in their standard libraries.</p>`
                }
            ]
        },
        {
            id: "heaps",
            title: "Heaps",
            icon: "bi-triangle",
            questions: [
                {
                    q: "What is a heap data structure?",
                    a: `<p>A <strong>heap</strong> is a complete binary tree that satisfies the <strong>heap property</strong>:</p>
<ul>
<li><strong>Min-Heap:</strong> Parent ≤ children (root is the minimum).</li>
<li><strong>Max-Heap:</strong> Parent ≥ children (root is the maximum).</li>
</ul>
<p>Heaps are typically stored as <strong>arrays</strong> for efficiency:</p>
<pre><code>// Array representation:
// Parent of i: Math.floor((i - 1) / 2)
// Left child of i: 2 * i + 1
// Right child of i: 2 * i + 2

// Min-Heap example:
//       1
//      / \\
//     3   5
//    / \\
//   7   9
// Array: [1, 3, 5, 7, 9]
</code></pre>
<p>Key operations: <strong>insert</strong> O(log n), <strong>extract min/max</strong> O(log n), <strong>peek</strong> O(1).</p>`
                },
                {
                    q: "What is the difference between a min-heap and a max-heap?",
                    a: `<p><strong>Min-Heap:</strong> The smallest element is always at the root. Every parent is ≤ its children.</p>
<p><strong>Max-Heap:</strong> The largest element is always at the root. Every parent is ≥ its children.</p>
<pre><code>// Min-Heap:        Max-Heap:
//     1                9
//    / \\              / \\
//   3   5            7   5
//  / \\              / \\
// 7   9            1   3

// Use min-heap when you need quick access to the smallest element.
// Use max-heap when you need quick access to the largest element.
</code></pre>
<ul>
<li><strong>Min-heap use cases:</strong> Dijkstra's algorithm, merge K sorted lists, scheduling.</li>
<li><strong>Max-heap use cases:</strong> Priority queues, finding top-K elements, heap sort.</li>
</ul>`
                },
                {
                    q: "How do insert and extract operations work in a heap?",
                    a: `<p><strong>Insert:</strong> Add element at the end, then <strong>bubble up</strong> (swap with parent while heap property is violated).</p>
<p><strong>Extract:</strong> Remove root, move last element to root, then <strong>bubble down</strong> (swap with smaller/larger child).</p>
<pre><code>class MinHeap {
    constructor() { this.heap = []; }

    insert(val) {
        this.heap.push(val);
        this._bubbleUp(this.heap.length - 1);
    }

    extractMin() {
        const min = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length) { this.heap[0] = last; this._bubbleDown(0); }
        return min;
    }

    _bubbleUp(i) {
        while (i &gt; 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.heap[parent] &lt;= this.heap[i]) break;
            [this.heap[parent], this.heap[i]] = [this.heap[i], this.heap[parent]];
            i = parent;
        }
    }

    _bubbleDown(i) {
        const n = this.heap.length;
        while (2 * i + 1 &lt; n) {
            let smallest = 2 * i + 1;
            if (smallest + 1 &lt; n &amp;&amp; this.heap[smallest + 1] &lt; this.heap[smallest]) smallest++;
            if (this.heap[i] &lt;= this.heap[smallest]) break;
            [this.heap[i], this.heap[smallest]] = [this.heap[smallest], this.heap[i]];
            i = smallest;
        }
    }
}
</code></pre>`
                },
                {
                    q: "What is heapify and how does it work?",
                    a: `<p><strong>Heapify</strong> converts an unordered array into a valid heap. It works by calling <strong>bubble down</strong> on all non-leaf nodes from bottom to top.</p>
<pre><code>function heapify(arr) {
    const n = arr.length;
    // Start from last non-leaf node
    for (let i = Math.floor(n / 2) - 1; i &gt;= 0; i--) {
        bubbleDown(arr, i, n);
    }
    return arr;
}

function bubbleDown(arr, i, n) {
    while (2 * i + 1 &lt; n) {
        let smallest = 2 * i + 1;
        if (smallest + 1 &lt; n &amp;&amp; arr[smallest + 1] &lt; arr[smallest]) smallest++;
        if (arr[i] &lt;= arr[smallest]) break;
        [arr[i], arr[smallest]] = [arr[smallest], arr[i]];
        i = smallest;
    }
}
// heapify([9, 5, 7, 1, 3]) =&gt; [1, 3, 7, 9, 5]
</code></pre>
<p><strong>Time:</strong> O(n) — not O(n log n)! Most nodes are near the bottom and require few swaps.</p>`
                },
                {
                    q: "How does heap sort work?",
                    a: `<p><strong>Heap Sort</strong> builds a max-heap, then repeatedly extracts the maximum and places it at the end.</p>
<pre><code>function heapSort(arr) {
    const n = arr.length;

    // Build max-heap
    for (let i = Math.floor(n / 2) - 1; i &gt;= 0; i--) {
        maxHeapify(arr, i, n);
    }

    // Extract elements one by one
    for (let i = n - 1; i &gt; 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // move max to end
        maxHeapify(arr, 0, i); // re-heapify reduced heap
    }
    return arr;
}

function maxHeapify(arr, i, n) {
    while (2 * i + 1 &lt; n) {
        let largest = 2 * i + 1;
        if (largest + 1 &lt; n &amp;&amp; arr[largest + 1] &gt; arr[largest]) largest++;
        if (arr[i] &gt;= arr[largest]) break;
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        i = largest;
    }
}
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) in-place. Not stable.</p>`
                },
                {
                    q: "How do you find the kth largest element using a heap?",
                    a: `<p>Use a <strong>min-heap of size k</strong>. The root of this heap will be the kth largest element.</p>
<pre><code>function kthLargest(nums, k) {
    const minHeap = new MinHeap();
    for (const num of nums) {
        minHeap.insert(num);
        if (minHeap.size() &gt; k) {
            minHeap.extractMin(); // remove smallest
        }
    }
    return minHeap.peek(); // kth largest
}
// kthLargest([3,2,1,5,6,4], 2) =&gt; 5
// kthLargest([3,2,3,1,2,4,5,5,6], 4) =&gt; 4
</code></pre>
<p><strong>Time:</strong> O(n log k) &nbsp;|&nbsp; <strong>Space:</strong> O(k). Better than sorting when k ≪ n.</p>`
                },
                {
                    q: "How do you merge K sorted lists using a heap?",
                    a: `<p>Insert the head of each list into a <strong>min-heap</strong>. Extract the minimum, add it to the result, and insert the next element from that list.</p>
<pre><code>function mergeKSorted(lists) {
    const minHeap = new MinHeap(); // stores {val, listIdx, elemIdx}
    // Initialize with first element of each list
    for (let i = 0; i &lt; lists.length; i++) {
        if (lists[i].length) {
            minHeap.insert({ val: lists[i][0], listIdx: i, elemIdx: 0 });
        }
    }

    const result = [];
    while (minHeap.size() &gt; 0) {
        const { val, listIdx, elemIdx } = minHeap.extractMin();
        result.push(val);
        if (elemIdx + 1 &lt; lists[listIdx].length) {
            minHeap.insert({
                val: lists[listIdx][elemIdx + 1],
                listIdx,
                elemIdx: elemIdx + 1
            });
        }
    }
    return result;
}
</code></pre>
<p><strong>Time:</strong> O(N log k) where N = total elements, k = number of lists &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How is a priority queue implemented with a heap?",
                    a: `<p>A <strong>priority queue</strong> is an abstract data type typically implemented using a <strong>heap</strong> for efficient operations.</p>
<pre><code>class PriorityQueue {
    constructor(compareFn = (a, b) =&gt; a - b) {
        this.heap = [];
        this.compare = compareFn;
    }

    enqueue(val) {
        this.heap.push(val);
        let i = this.heap.length - 1;
        while (i &gt; 0) {
            const parent = Math.floor((i - 1) / 2);
            if (this.compare(this.heap[i], this.heap[parent]) &gt;= 0) break;
            [this.heap[i], this.heap[parent]] = [this.heap[parent], this.heap[i]];
            i = parent;
        }
    }

    dequeue() {
        const top = this.heap[0];
        const last = this.heap.pop();
        if (this.heap.length) { this.heap[0] = last; this._siftDown(0); }
        return top;
    }

    _siftDown(i) { /* same as bubbleDown */ }
    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
}
</code></pre>
<p><strong>Enqueue:</strong> O(log n) &nbsp;|&nbsp; <strong>Dequeue:</strong> O(log n) &nbsp;|&nbsp; <strong>Peek:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the top K most frequent elements?",
                    a: `<p>Count frequencies with a hash map, then use a <strong>min-heap of size K</strong> to track the top K frequent elements.</p>
<pre><code>function topKFrequent(nums, k) {
    // Step 1: Count frequencies
    const freq = new Map();
    for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);

    // Step 2: Use bucket sort (alternative to heap)
    const buckets = new Array(nums.length + 1).fill(null).map(() =&gt; []);
    for (const [num, count] of freq) {
        buckets[count].push(num);
    }

    // Step 3: Collect top K from highest frequency buckets
    const result = [];
    for (let i = buckets.length - 1; i &gt;= 0 &amp;&amp; result.length &lt; k; i--) {
        result.push(...buckets[i]);
    }
    return result.slice(0, k);
}
// topKFrequent([1,1,1,2,2,3], 2) =&gt; [1, 2]
</code></pre>
<p><strong>Time:</strong> O(n) with bucket sort &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How does finding the median from a data stream work conceptually?",
                    a: `<p>Use two heaps: a <strong>max-heap</strong> for the lower half and a <strong>min-heap</strong> for the upper half. The median is derived from the tops of the heaps.</p>
<pre><code>class MedianFinder {
    constructor() {
        this.maxHeap = new MaxHeap(); // lower half
        this.minHeap = new MinHeap(); // upper half
    }

    addNum(num) {
        this.maxHeap.insert(num);
        // Ensure max-heap's top &lt;= min-heap's top
        this.minHeap.insert(this.maxHeap.extractMax());
        // Balance sizes (maxHeap can have at most 1 more)
        if (this.minHeap.size() &gt; this.maxHeap.size()) {
            this.maxHeap.insert(this.minHeap.extractMin());
        }
    }

    findMedian() {
        if (this.maxHeap.size() &gt; this.minHeap.size()) {
            return this.maxHeap.peek();
        }
        return (this.maxHeap.peek() + this.minHeap.peek()) / 2;
    }
}
// addNum(1), addNum(2) =&gt; median = 1.5
// addNum(3) =&gt; median = 2
</code></pre>
<p><strong>addNum:</strong> O(log n) &nbsp;|&nbsp; <strong>findMedian:</strong> O(1)</p>`
                }
            ]
        },
        {
            id: "graphs",
            title: "Graphs",
            icon: "bi-share-fill",
            questions: [
                {
                    q: "What is a graph data structure?",
                    a: `<p>A <strong>graph</strong> consists of <strong>vertices</strong> (nodes) and <strong>edges</strong> (connections between nodes). Graphs model relationships and networks.</p>
<ul>
<li><strong>Directed graph:</strong> Edges have a direction (A → B).</li>
<li><strong>Undirected graph:</strong> Edges have no direction (A — B).</li>
<li><strong>Weighted graph:</strong> Edges have associated weights/costs.</li>
<li><strong>Cyclic/Acyclic:</strong> Whether the graph contains cycles.</li>
</ul>
<pre><code>// Adjacency list representation:
const graph = {
    A: ['B', 'C'],
    B: ['A', 'D'],
    C: ['A', 'D'],
    D: ['B', 'C']
};
</code></pre>
<p>Used in social networks, maps/navigation, dependency resolution, and web crawling.</p>`
                },
                {
                    q: "What is the difference between adjacency list and adjacency matrix?",
                    a: `<p><strong>Adjacency List:</strong> Each vertex stores a list of its neighbors. Space-efficient for sparse graphs.</p>
<p><strong>Adjacency Matrix:</strong> A 2D array where matrix[i][j] = 1 if there is an edge from i to j. Fast edge lookup.</p>
<pre><code>// Adjacency List:
const adjList = { 0: [1, 2], 1: [0, 3], 2: [0], 3: [1] };

// Adjacency Matrix:
const adjMatrix = [
    [0, 1, 1, 0],  // 0 connects to 1, 2
    [1, 0, 0, 1],  // 1 connects to 0, 3
    [1, 0, 0, 0],  // 2 connects to 0
    [0, 1, 0, 0]   // 3 connects to 1
];
</code></pre>
<ul>
<li><strong>List — Space:</strong> O(V + E), <strong>Edge lookup:</strong> O(degree)</li>
<li><strong>Matrix — Space:</strong> O(V²), <strong>Edge lookup:</strong> O(1)</li>
</ul>
<p>Use <strong>list</strong> for sparse graphs, <strong>matrix</strong> for dense graphs or when you need fast edge checks.</p>`
                },
                {
                    q: "How does Breadth-First Search (BFS) work on a graph?",
                    a: `<p><strong>BFS</strong> explores a graph level by level using a <strong>queue</strong>. It finds the shortest path in unweighted graphs.</p>
<pre><code>function bfs(graph, start) {
    const visited = new Set([start]);
    const queue = [start];
    const order = [];

    while (queue.length) {
        const node = queue.shift();
        order.push(node);
        for (const neighbor of (graph[node] || [])) {
            if (!visited.has(neighbor)) {
                visited.add(neighbor);
                queue.push(neighbor);
            }
        }
    }
    return order;
}
// graph = { A:['B','C'], B:['D'], C:['D','E'], D:[], E:[] }
// bfs(graph, 'A') =&gt; ['A','B','C','D','E']
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How does Depth-First Search (DFS) work on a graph?",
                    a: `<p><strong>DFS</strong> explores as deep as possible along each branch before backtracking. It uses a <strong>stack</strong> (or recursion).</p>
<pre><code>// Recursive DFS
function dfs(graph, node, visited = new Set()) {
    visited.add(node);
    const result = [node];
    for (const neighbor of (graph[node] || [])) {
        if (!visited.has(neighbor)) {
            result.push(...dfs(graph, neighbor, visited));
        }
    }
    return result;
}

// Iterative DFS
function dfsIterative(graph, start) {
    const visited = new Set();
    const stack = [start];
    const result = [];
    while (stack.length) {
        const node = stack.pop();
        if (visited.has(node)) continue;
        visited.add(node);
        result.push(node);
        for (const neighbor of (graph[node] || [])) {
            stack.push(neighbor);
        }
    }
    return result;
}
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V). DFS is used for cycle detection, topological sorting, and path finding.</p>`
                },
                {
                    q: "How do you detect a cycle in an undirected graph?",
                    a: `<p>Use <strong>DFS</strong>: if you visit a neighbor that is already visited and is not the parent of the current node, a cycle exists.</p>
<pre><code>function hasCycleUndirected(graph, numNodes) {
    const visited = new Set();

    function dfs(node, parent) {
        visited.add(node);
        for (const neighbor of (graph[node] || [])) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, node)) return true;
            } else if (neighbor !== parent) {
                return true; // cycle found
            }
        }
        return false;
    }

    // Check all components
    for (let i = 0; i &lt; numNodes; i++) {
        if (!visited.has(i)) {
            if (dfs(i, -1)) return true;
        }
    }
    return false;
}
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V). Alternatively, use <strong>Union-Find</strong> for cycle detection.</p>`
                },
                {
                    q: "How do you detect a cycle in a directed graph?",
                    a: `<p>Use DFS with three states: <strong>unvisited</strong>, <strong>in-progress</strong> (on current path), and <strong>completed</strong>. If you revisit an in-progress node, there is a cycle.</p>
<pre><code>function hasCycleDirected(graph, numNodes) {
    const WHITE = 0, GRAY = 1, BLACK = 2;
    const color = new Array(numNodes).fill(WHITE);

    function dfs(node) {
        color[node] = GRAY; // in-progress
        for (const neighbor of (graph[node] || [])) {
            if (color[neighbor] === GRAY) return true; // back edge = cycle
            if (color[neighbor] === WHITE &amp;&amp; dfs(neighbor)) return true;
        }
        color[node] = BLACK; // completed
        return false;
    }

    for (let i = 0; i &lt; numNodes; i++) {
        if (color[i] === WHITE &amp;&amp; dfs(i)) return true;
    }
    return false;
}
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "What is topological sort and when is it used?",
                    a: `<p><strong>Topological sort</strong> orders vertices in a <strong>DAG</strong> (Directed Acyclic Graph) so that for every edge u → v, u appears before v. Used for <strong>task scheduling</strong> and <strong>dependency resolution</strong>.</p>
<pre><code>function topologicalSort(graph, numNodes) {
    const inDegree = new Array(numNodes).fill(0);
    for (const node in graph) {
        for (const neighbor of graph[node]) inDegree[neighbor]++;
    }

    const queue = [];
    for (let i = 0; i &lt; numNodes; i++) {
        if (inDegree[i] === 0) queue.push(i);
    }

    const order = [];
    while (queue.length) {
        const node = queue.shift();
        order.push(node);
        for (const neighbor of (graph[node] || [])) {
            inDegree[neighbor]--;
            if (inDegree[neighbor] === 0) queue.push(neighbor);
        }
    }
    return order.length === numNodes ? order : []; // empty if cycle
}
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V). This is <strong>Kahn's algorithm</strong> (BFS-based).</p>`
                },
                {
                    q: "How does Dijkstra's shortest path algorithm work conceptually?",
                    a: `<p><strong>Dijkstra's algorithm</strong> finds the shortest path from a source to all vertices in a <strong>weighted graph with non-negative edges</strong>. It uses a <strong>priority queue</strong> (min-heap).</p>
<pre><code>function dijkstra(graph, start) {
    const dist = {};
    for (const node in graph) dist[node] = Infinity;
    dist[start] = 0;
    const pq = [[0, start]]; // [distance, node]

    while (pq.length) {
        pq.sort((a, b) =&gt; a[0] - b[0]); // min-heap simulation
        const [d, u] = pq.shift();
        if (d &gt; dist[u]) continue;

        for (const [v, weight] of graph[u]) {
            const newDist = dist[u] + weight;
            if (newDist &lt; dist[v]) {
                dist[v] = newDist;
                pq.push([newDist, v]);
            }
        }
    }
    return dist;
}
// graph = { A: [['B',1],['C',4]], B: [['C',2]], C: [] }
// dijkstra(graph, 'A') =&gt; { A: 0, B: 1, C: 3 }
</code></pre>
<p><strong>Time:</strong> O((V + E) log V) with a proper min-heap &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How do you find connected components in an undirected graph?",
                    a: `<p>Use <strong>DFS</strong> or <strong>BFS</strong> from each unvisited node. Each traversal discovers one connected component.</p>
<pre><code>function connectedComponents(graph, numNodes) {
    const visited = new Set();
    const components = [];

    function dfs(node, component) {
        visited.add(node);
        component.push(node);
        for (const neighbor of (graph[node] || [])) {
            if (!visited.has(neighbor)) dfs(neighbor, component);
        }
    }

    for (let i = 0; i &lt; numNodes; i++) {
        if (!visited.has(i)) {
            const component = [];
            dfs(i, component);
            components.push(component);
        }
    }
    return components;
}
// graph = { 0:[1], 1:[0], 2:[3], 3:[2], 4:[] }
// connectedComponents(graph, 5)
// =&gt; [[0,1], [2,3], [4]]
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "What is the difference between a graph and a tree?",
                    a: `<p>A <strong>tree</strong> is a special type of graph with specific constraints:</p>
<ul>
<li><strong>Tree:</strong> Connected, acyclic, undirected graph with exactly V - 1 edges. Has a root and hierarchical structure.</li>
<li><strong>Graph:</strong> General structure with no restrictions on cycles, connectivity, or edge count.</li>
</ul>
<table>
<tr><th>Property</th><th>Tree</th><th>Graph</th></tr>
<tr><td>Cycles</td><td>No</td><td>Can have</td></tr>
<tr><td>Connectivity</td><td>Always connected</td><td>May be disconnected</td></tr>
<tr><td>Edges</td><td>Exactly V - 1</td><td>Any number</td></tr>
<tr><td>Root</td><td>Yes (one)</td><td>No concept of root</td></tr>
<tr><td>Direction</td><td>Parent → Child</td><td>Directed or undirected</td></tr>
<tr><td>Path</td><td>Unique between nodes</td><td>Multiple paths possible</td></tr>
</table>
<p>Every tree is a graph, but not every graph is a tree.</p>`
                }
            ]
        },
        {
            id: "sorting-algorithms",
            title: "Sorting Algorithms",
            icon: "bi-sort-down",
            questions: [
                {
                    q: "How does Bubble Sort work?",
                    a: `<p><strong>Bubble Sort</strong> repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. The largest element "bubbles" to the end each pass.</p>
<pre><code>function bubbleSort(arr) {
    for (let i = 0; i &lt; arr.length; i++) {
        for (let j = 0; j &lt; arr.length - i - 1; j++) {
            if (arr[j] &gt; arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            }
        }
    }
    return arr;
}
</code></pre>
<p><strong>Time:</strong> O(n&sup2;) &nbsp;|&nbsp; <strong>Space:</strong> O(1) &nbsp;|&nbsp; <strong>Stable:</strong> Yes</p>`
                },
                {
                    q: "How does Selection Sort work?",
                    a: `<p><strong>Selection Sort</strong> divides the array into sorted and unsorted parts. It repeatedly finds the <strong>minimum</strong> element from the unsorted part and places it at the beginning.</p>
<pre><code>function selectionSort(arr) {
    for (let i = 0; i &lt; arr.length; i++) {
        let minIdx = i;
        for (let j = i + 1; j &lt; arr.length; j++) {
            if (arr[j] &lt; arr[minIdx]) minIdx = j;
        }
        [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
    return arr;
}
</code></pre>
<p><strong>Time:</strong> O(n&sup2;) &nbsp;|&nbsp; <strong>Space:</strong> O(1) &nbsp;|&nbsp; <strong>Stable:</strong> No</p>`
                },
                {
                    q: "How does Insertion Sort work?",
                    a: `<p><strong>Insertion Sort</strong> builds the sorted array one element at a time by picking the next element and inserting it into its correct position among the already sorted elements.</p>
<pre><code>function insertionSort(arr) {
    for (let i = 1; i &lt; arr.length; i++) {
        let key = arr[i], j = i - 1;
        while (j &gt;= 0 &amp;&amp; arr[j] &gt; key) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = key;
    }
    return arr;
}
</code></pre>
<p><strong>Time:</strong> O(n&sup2;) worst, O(n) best &nbsp;|&nbsp; <strong>Space:</strong> O(1) &nbsp;|&nbsp; <strong>Stable:</strong> Yes</p>`
                },
                {
                    q: "How does Merge Sort work?",
                    a: `<p><strong>Merge Sort</strong> uses <strong>divide and conquer</strong>: split the array in half recursively, sort each half, then merge the sorted halves back together.</p>
<pre><code>function mergeSort(arr) {
    if (arr.length &lt;= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const left = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(l, r) {
    const res = [];
    let i = 0, j = 0;
    while (i &lt; l.length &amp;&amp; j &lt; r.length)
        res.push(l[i] &lt; r[j] ? l[i++] : r[j++]);
    return [...res, ...l.slice(i), ...r.slice(j)];
}
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(n) &nbsp;|&nbsp; <strong>Stable:</strong> Yes</p>`
                },
                {
                    q: "How does Quick Sort work?",
                    a: `<p><strong>Quick Sort</strong> picks a <strong>pivot</strong>, partitions the array so elements smaller go left and larger go right, then recursively sorts both partitions.</p>
<pre><code>function quickSort(arr, lo = 0, hi = arr.length - 1) {
    if (lo &lt; hi) {
        const pivot = arr[hi];
        let i = lo;
        for (let j = lo; j &lt; hi; j++) {
            if (arr[j] &lt; pivot) {
                [arr[i], arr[j]] = [arr[j], arr[i]];
                i++;
            }
        }
        [arr[i], arr[hi]] = [arr[hi], arr[i]];
        quickSort(arr, lo, i - 1);
        quickSort(arr, i + 1, hi);
    }
    return arr;
}
</code></pre>
<p><strong>Time:</strong> O(n log n) avg, O(n&sup2;) worst &nbsp;|&nbsp; <strong>Space:</strong> O(log n) &nbsp;|&nbsp; <strong>Stable:</strong> No</p>`
                },
                {
                    q: "How does Heap Sort work?",
                    a: `<p><strong>Heap Sort</strong> builds a <strong>max-heap</strong> from the array, then repeatedly extracts the maximum element and places it at the end.</p>
<pre><code>function heapSort(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i &gt;= 0; i--) heapify(arr, n, i);
    for (let i = n - 1; i &gt; 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]];
        heapify(arr, i, 0);
    }
    return arr;
}
function heapify(arr, n, i) {
    let largest = i, l = 2*i+1, r = 2*i+2;
    if (l &lt; n &amp;&amp; arr[l] &gt; arr[largest]) largest = l;
    if (r &lt; n &amp;&amp; arr[r] &gt; arr[largest]) largest = r;
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest], arr[i]];
        heapify(arr, n, largest);
    }
}
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) &nbsp;|&nbsp; <strong>Stable:</strong> No</p>`
                },
                {
                    q: "How does Counting Sort work?",
                    a: `<p><strong>Counting Sort</strong> is a non-comparison sort that counts occurrences of each value and uses the counts to place elements in sorted order. Works for integers in a known range.</p>
<pre><code>function countingSort(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    arr.forEach(v =&gt; count[v]++);
    const result = [];
    count.forEach((c, i) =&gt; {
        for (let j = 0; j &lt; c; j++) result.push(i);
    });
    return result;
}
</code></pre>
<p><strong>Time:</strong> O(n + k) where k = range &nbsp;|&nbsp; <strong>Space:</strong> O(k) &nbsp;|&nbsp; <strong>Stable:</strong> Yes</p>`
                },
                {
                    q: "How does Radix Sort work?",
                    a: `<p><strong>Radix Sort</strong> sorts numbers digit by digit, from the least significant to the most significant, using a stable sort (like counting sort) at each digit level.</p>
<pre><code>function radixSort(arr) {
    const max = Math.max(...arr);
    for (let exp = 1; Math.floor(max / exp) &gt; 0; exp *= 10) {
        const buckets = Array.from({length: 10}, () =&gt; []);
        arr.forEach(n =&gt; buckets[Math.floor(n / exp) % 10].push(n));
        arr = buckets.flat();
    }
    return arr;
}
// radixSort([170, 45, 75, 90, 802, 24, 2, 66])
// =&gt; [2, 24, 45, 66, 75, 90, 170, 802]
</code></pre>
<p><strong>Time:</strong> O(d &middot; (n + k)) where d = digits &nbsp;|&nbsp; <strong>Space:</strong> O(n + k)</p>`
                },
                {
                    q: "How do the time complexities of sorting algorithms compare?",
                    a: `<p>Comparison of common sorting algorithms:</p>
<table>
<tr><th>Algorithm</th><th>Best</th><th>Average</th><th>Worst</th><th>Space</th></tr>
<tr><td>Bubble Sort</td><td>O(n)</td><td>O(n&sup2;)</td><td>O(n&sup2;)</td><td>O(1)</td></tr>
<tr><td>Selection Sort</td><td>O(n&sup2;)</td><td>O(n&sup2;)</td><td>O(n&sup2;)</td><td>O(1)</td></tr>
<tr><td>Insertion Sort</td><td>O(n)</td><td>O(n&sup2;)</td><td>O(n&sup2;)</td><td>O(1)</td></tr>
<tr><td>Merge Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n)</td></tr>
<tr><td>Quick Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n&sup2;)</td><td>O(log n)</td></tr>
<tr><td>Heap Sort</td><td>O(n log n)</td><td>O(n log n)</td><td>O(n log n)</td><td>O(1)</td></tr>
</table>
<p>For most cases, <strong>Quick Sort</strong> is fastest in practice. Use <strong>Merge Sort</strong> when stability is needed.</p>`
                },
                {
                    q: "What does it mean for a sorting algorithm to be stable?",
                    a: `<p>A <strong>stable</strong> sorting algorithm preserves the <strong>relative order</strong> of elements with equal keys. If two elements have the same value, they appear in the same order in the output as in the input.</p>
<pre><code>// Example: sorting by age (stable preserves name order)
// Input:  [{name:"B", age:25}, {name:"A", age:25}]
// Stable: [{name:"B", age:25}, {name:"A", age:25}]
// Unstable may swap B and A
</code></pre>
<p><strong>Stable:</strong> Bubble, Insertion, Merge, Counting, Radix<br><strong>Unstable:</strong> Selection, Quick, Heap</p>`
                }
            ]
        },
        {
            id: "searching-algorithms",
            title: "Searching Algorithms",
            icon: "bi-search",
            questions: [
                {
                    q: "How does Linear Search work?",
                    a: `<p><strong>Linear Search</strong> checks each element sequentially until the target is found or the array ends. Works on <strong>unsorted</strong> arrays.</p>
<pre><code>function linearSearch(arr, target) {
    for (let i = 0; i &lt; arr.length; i++) {
        if (arr[i] === target) return i;
    }
    return -1;
}
// linearSearch([5, 3, 8, 1], 8) =&gt; 2
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How does Binary Search work?",
                    a: `<p><strong>Binary Search</strong> works on <strong>sorted</strong> arrays by repeatedly dividing the search range in half. Compare the target with the middle element and eliminate half the array each step.</p>
<pre><code>function binarySearch(arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo &lt;= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] &lt; target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "What is Binary Search on the answer?",
                    a: `<p><strong>Binary Search on the answer</strong> applies binary search not on an array, but on the <strong>range of possible answers</strong>. You define a condition and binary search for the boundary where it changes.</p>
<pre><code>// Example: find minimum capacity to ship packages in D days
function shipWithinDays(weights, days) {
    let lo = Math.max(...weights);
    let hi = weights.reduce((a, b) =&gt; a + b);
    while (lo &lt; hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (canShip(weights, days, mid)) hi = mid;
        else lo = mid + 1;
    }
    return lo;
}
</code></pre>
<p>This pattern is used when the answer space is monotonic (sorted by feasibility).</p>`
                },
                {
                    q: "How do you search in a rotated sorted array?",
                    a: `<p>A rotated sorted array has two sorted halves. Use <strong>modified binary search</strong>: determine which half is sorted, then check if the target lies in that half.</p>
<pre><code>function searchRotated(arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo &lt;= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === target) return mid;
        if (arr[lo] &lt;= arr[mid]) { // left half sorted
            if (target &gt;= arr[lo] &amp;&amp; target &lt; arr[mid]) hi = mid - 1;
            else lo = mid + 1;
        } else { // right half sorted
            if (target &gt; arr[mid] &amp;&amp; target &lt;= arr[hi]) lo = mid + 1;
            else hi = mid - 1;
        }
    }
    return -1;
}
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find a peak element in an array?",
                    a: `<p>A <strong>peak element</strong> is greater than or equal to its neighbors. Use <strong>binary search</strong>: if the mid element is less than its right neighbor, a peak exists on the right side, and vice versa.</p>
<pre><code>function findPeak(arr) {
    let lo = 0, hi = arr.length - 1;
    while (lo &lt; hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] &lt; arr[mid + 1]) lo = mid + 1;
        else hi = mid;
    }
    return lo; // index of peak
}
// findPeak([1, 3, 20, 4, 1]) =&gt; 2
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the first and last occurrence of an element?",
                    a: `<p>Use <strong>two binary searches</strong>: one biased left to find the first occurrence and one biased right for the last.</p>
<pre><code>function findFirst(arr, target) {
    let lo = 0, hi = arr.length - 1, res = -1;
    while (lo &lt;= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === target) { res = mid; hi = mid - 1; }
        else if (arr[mid] &lt; target) lo = mid + 1;
        else hi = mid - 1;
    }
    return res;
}
function findLast(arr, target) {
    let lo = 0, hi = arr.length - 1, res = -1;
    while (lo &lt;= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === target) { res = mid; lo = mid + 1; }
        else if (arr[mid] &lt; target) lo = mid + 1;
        else hi = mid - 1;
    }
    return res;
}
</code></pre>
<p><strong>Time:</strong> O(log n) each &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find square root using binary search?",
                    a: `<p>Binary search for the largest integer whose square is &le; the target number. Search the range <strong>[0, n]</strong>.</p>
<pre><code>function sqrt(n) {
    let lo = 0, hi = n, ans = 0;
    while (lo &lt;= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (mid * mid &lt;= n) {
            ans = mid;
            lo = mid + 1;
        } else {
            hi = mid - 1;
        }
    }
    return ans;
}
// sqrt(26) =&gt; 5  (5*5=25 &lt;= 26)
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you search a 2D matrix efficiently?",
                    a: `<p>If each row is sorted and the first element of each row is greater than the last of the previous row, treat the 2D matrix as a <strong>flattened sorted array</strong> and apply binary search.</p>
<pre><code>function searchMatrix(matrix, target) {
    const m = matrix.length, n = matrix[0].length;
    let lo = 0, hi = m * n - 1;
    while (lo &lt;= hi) {
        const mid = Math.floor((lo + hi) / 2);
        const val = matrix[Math.floor(mid / n)][mid % n];
        if (val === target) return true;
        else if (val &lt; target) lo = mid + 1;
        else hi = mid - 1;
    }
    return false;
}
</code></pre>
<p><strong>Time:</strong> O(log(m &middot; n)) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "What is Ternary Search?",
                    a: `<p><strong>Ternary Search</strong> divides the search space into <strong>three parts</strong> instead of two. It is useful for finding the maximum or minimum of a <strong>unimodal function</strong>.</p>
<pre><code>function ternarySearch(f, lo, hi) {
    while (hi - lo &gt; 1e-9) {
        const m1 = lo + (hi - lo) / 3;
        const m2 = hi - (hi - lo) / 3;
        if (f(m1) &lt; f(m2)) lo = m1;
        else hi = m2;
    }
    return (lo + hi) / 2;
}
// Finds x where f(x) is maximized in [lo, hi]
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; Slightly slower than binary search in practice due to more comparisons per step.</p>`
                },
                {
                    q: "What is Interpolation Search?",
                    a: `<p><strong>Interpolation Search</strong> improves on binary search for <strong>uniformly distributed</strong> data by estimating the position using the value of the target relative to the range.</p>
<pre><code>function interpolationSearch(arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo &lt;= hi &amp;&amp; target &gt;= arr[lo] &amp;&amp; target &lt;= arr[hi]) {
        const pos = lo + Math.floor(
            ((target - arr[lo]) * (hi - lo)) / (arr[hi] - arr[lo])
        );
        if (arr[pos] === target) return pos;
        if (arr[pos] &lt; target) lo = pos + 1;
        else hi = pos - 1;
    }
    return -1;
}
</code></pre>
<p><strong>Time:</strong> O(log log n) average for uniform data, O(n) worst case &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                }
            ]
        },
        {
            id: "dynamic-programming",
            title: "Dynamic Programming",
            icon: "bi-table",
            questions: [
                {
                    q: "What is Dynamic Programming?",
                    a: `<p><strong>Dynamic Programming (DP)</strong> is an optimization technique that solves problems by breaking them into <strong>overlapping subproblems</strong> and storing their results to avoid redundant computation.</p>
<pre><code>// DP applies when a problem has:
// 1. Optimal substructure — solution built from subproblem solutions
// 2. Overlapping subproblems — same subproblems solved multiple times

// Without DP: fib(5) recalculates fib(3) multiple times
// With DP: store fib(3) once and reuse
</code></pre>
<p>DP transforms exponential-time recursive solutions into <strong>polynomial-time</strong> solutions.</p>`
                },
                {
                    q: "What is the difference between memoization and tabulation?",
                    a: `<p><strong>Memoization</strong> (top-down) uses recursion + cache. <strong>Tabulation</strong> (bottom-up) fills a table iteratively.</p>
<pre><code>// Memoization (top-down)
function fibMemo(n, memo = {}) {
    if (n &lt;= 1) return n;
    if (memo[n]) return memo[n];
    return memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
}

// Tabulation (bottom-up)
function fibTab(n) {
    const dp = [0, 1];
    for (let i = 2; i &lt;= n; i++) dp[i] = dp[i-1] + dp[i-2];
    return dp[n];
}
</code></pre>
<p><strong>Memoization:</strong> easier to write, uses call stack. <strong>Tabulation:</strong> no stack overhead, often more space-efficient.</p>`
                },
                {
                    q: "Solve Fibonacci using DP.",
                    a: `<p>Fibonacci with <strong>O(n)</strong> time and <strong>O(1)</strong> space by keeping only the last two values:</p>
<pre><code>function fibonacci(n) {
    if (n &lt;= 1) return n;
    let prev2 = 0, prev1 = 1;
    for (let i = 2; i &lt;= n; i++) {
        const curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
// fibonacci(10) =&gt; 55
</code></pre>
<p>This is the space-optimized tabulation approach, reducing from O(n) array to O(1) variables.</p>`
                },
                {
                    q: "Solve the Climbing Stairs problem with DP.",
                    a: `<p>You can climb 1 or 2 steps at a time. The number of ways to reach step n equals <strong>fib(n+1)</strong> because each step is reachable from the previous one or two steps.</p>
<pre><code>function climbStairs(n) {
    let a = 1, b = 1;
    for (let i = 2; i &lt;= n; i++) {
        const temp = a + b;
        a = b;
        b = temp;
    }
    return b;
}
// climbStairs(5) =&gt; 8
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Solve the Coin Change problem with DP.",
                    a: `<p>Find the <strong>minimum number of coins</strong> needed to make a given amount. Use tabulation with dp[i] = min coins for amount i.</p>
<pre><code>function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i &lt;= amount; i++) {
        for (const coin of coins) {
            if (coin &lt;= i) dp[i] = Math.min(dp[i], dp[i - coin] + 1);
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
// coinChange([1, 5, 10], 11) =&gt; 2 (10+1)
</code></pre>
<p><strong>Time:</strong> O(amount &times; coins) &nbsp;|&nbsp; <strong>Space:</strong> O(amount)</p>`
                },
                {
                    q: "Solve the Longest Common Subsequence problem.",
                    a: `<p>Find the length of the longest subsequence common to two strings using a 2D DP table.</p>
<pre><code>function lcs(s1, s2) {
    const m = s1.length, n = s2.length;
    const dp = Array.from({length: m+1}, () =&gt; new Array(n+1).fill(0));
    for (let i = 1; i &lt;= m; i++) {
        for (let j = 1; j &lt;= n; j++) {
            if (s1[i-1] === s2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}
// lcs("abcde", "ace") =&gt; 3
</code></pre>
<p><strong>Time:</strong> O(m &times; n) &nbsp;|&nbsp; <strong>Space:</strong> O(m &times; n)</p>`
                },
                {
                    q: "Solve the 0/1 Knapsack problem with DP.",
                    a: `<p>Given items with weights and values, find the maximum value you can carry in a knapsack of capacity W. Each item can be taken <strong>at most once</strong>.</p>
<pre><code>function knapsack(weights, values, W) {
    const n = weights.length;
    const dp = new Array(W + 1).fill(0);
    for (let i = 0; i &lt; n; i++) {
        for (let w = W; w &gt;= weights[i]; w--) {
            dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
        }
    }
    return dp[W];
}
// knapsack([2,3,4], [3,4,5], 5) =&gt; 7
</code></pre>
<p><strong>Time:</strong> O(n &times; W) &nbsp;|&nbsp; <strong>Space:</strong> O(W) with 1D optimization</p>`
                },
                {
                    q: "Solve the Longest Increasing Subsequence problem.",
                    a: `<p>Find the length of the longest strictly increasing subsequence. The O(n log n) approach uses a tails array with binary search.</p>
<pre><code>function lis(arr) {
    const tails = [];
    for (const num of arr) {
        let lo = 0, hi = tails.length;
        while (lo &lt; hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (tails[mid] &lt; num) lo = mid + 1;
            else hi = mid;
        }
        tails[lo] = num;
    }
    return tails.length;
}
// lis([10, 9, 2, 5, 3, 7, 101, 18]) =&gt; 4
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "Solve the Edit Distance problem with DP.",
                    a: `<p><strong>Edit Distance</strong> (Levenshtein distance) finds the minimum operations (insert, delete, replace) to convert one string to another.</p>
<pre><code>function editDistance(s1, s2) {
    const m = s1.length, n = s2.length;
    const dp = Array.from({length: m+1}, (_, i) =&gt;
        Array.from({length: n+1}, (_, j) =&gt; i === 0 ? j : j === 0 ? i : 0)
    );
    for (let i = 1; i &lt;= m; i++) {
        for (let j = 1; j &lt;= n; j++) {
            if (s1[i-1] === s2[j-1]) dp[i][j] = dp[i-1][j-1];
            else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
        }
    }
    return dp[m][n];
}
// editDistance("kitten", "sitting") =&gt; 3
</code></pre>
<p><strong>Time:</strong> O(m &times; n) &nbsp;|&nbsp; <strong>Space:</strong> O(m &times; n)</p>`
                },
                {
                    q: "What is Matrix Chain Multiplication DP?",
                    a: `<p><strong>Matrix Chain Multiplication</strong> finds the optimal way to parenthesize matrix multiplications to minimize total scalar multiplications.</p>
<pre><code>function matrixChain(dims) {
    const n = dims.length - 1;
    const dp = Array.from({length: n}, () =&gt; new Array(n).fill(0));
    for (let len = 2; len &lt;= n; len++) {
        for (let i = 0; i &lt;= n - len; i++) {
            const j = i + len - 1;
            dp[i][j] = Infinity;
            for (let k = i; k &lt; j; k++) {
                const cost = dp[i][k] + dp[k+1][j] + dims[i]*dims[k+1]*dims[j+1];
                dp[i][j] = Math.min(dp[i][j], cost);
            }
        }
    }
    return dp[0][n - 1];
}
// matrixChain([10, 20, 30, 40]) =&gt; 18000
</code></pre>
<p><strong>Time:</strong> O(n&sup3;) &nbsp;|&nbsp; <strong>Space:</strong> O(n&sup2;)</p>`
                }
            ]
        },
        {
            id: "recursion",
            title: "Recursion",
            icon: "bi-recycle",
            questions: [
                {
                    q: "What is recursion?",
                    a: `<p><strong>Recursion</strong> is when a function calls <strong>itself</strong> to solve a smaller instance of the same problem. Every recursive function needs a <strong>base case</strong> to stop the recursion.</p>
<pre><code>function countdown(n) {
    if (n &lt;= 0) return; // base case
    console.log(n);
    countdown(n - 1);   // recursive call
}
// countdown(3) =&gt; 3, 2, 1
</code></pre>
<p>Without a base case, recursion leads to infinite calls and a <strong>stack overflow</strong>.</p>`
                },
                {
                    q: "What is a base case and why is it important?",
                    a: `<p>The <strong>base case</strong> is the condition that stops recursion. It returns a value directly without making another recursive call, preventing infinite recursion.</p>
<pre><code>function sum(n) {
    if (n === 0) return 0;  // base case: stop here
    return n + sum(n - 1);  // recursive case
}
// sum(4) =&gt; 4 + 3 + 2 + 1 + 0 = 10

// Without base case:
// sum(4) -&gt; sum(3) -&gt; sum(2) -&gt; ... forever!
</code></pre>
<p>A good base case is <strong>simple</strong>, <strong>reachable</strong>, and <strong>handles the smallest valid input</strong>.</p>`
                },
                {
                    q: "Write a recursive factorial function.",
                    a: `<p><strong>Factorial</strong>: n! = n &times; (n-1)! with base case 0! = 1.</p>
<pre><code>function factorial(n) {
    if (n &lt;= 1) return 1;     // base case
    return n * factorial(n - 1); // recursive step
}
// factorial(5) =&gt; 5 * 4 * 3 * 2 * 1 = 120

// Call stack: factorial(5)
//   5 * factorial(4)
//     4 * factorial(3)
//       3 * factorial(2)
//         2 * factorial(1) =&gt; 1
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n) due to call stack</p>`
                },
                {
                    q: "Write recursive Fibonacci.",
                    a: `<p>Naive recursive Fibonacci has <strong>exponential</strong> time due to repeated calculations. Add memoization to make it O(n).</p>
<pre><code>// Naive — O(2^n)
function fib(n) {
    if (n &lt;= 1) return n;
    return fib(n - 1) + fib(n - 2);
}

// Memoized — O(n)
function fibMemo(n, memo = {}) {
    if (n &lt;= 1) return n;
    if (memo[n]) return memo[n];
    return memo[n] = fibMemo(n - 1, memo) + fibMemo(n - 2, memo);
}
// fibMemo(10) =&gt; 55
</code></pre>
<p>Memoization caches results of subproblems to avoid redundant work.</p>`
                },
                {
                    q: "Explain the Tower of Hanoi problem recursively.",
                    a: `<p><strong>Tower of Hanoi</strong>: Move n disks from source to target using an auxiliary peg. Move n-1 disks to auxiliary, move the largest to target, then move n-1 from auxiliary to target.</p>
<pre><code>function hanoi(n, from, to, aux) {
    if (n === 1) {
        console.log(from + " -&gt; " + to);
        return;
    }
    hanoi(n - 1, from, aux, to);
    console.log(from + " -&gt; " + to);
    hanoi(n - 1, aux, to, from);
}
// hanoi(3, "A", "C", "B")
// Moves: 2^n - 1 = 7 moves for 3 disks
</code></pre>
<p><strong>Moves:</strong> 2&lt;sup&gt;n&lt;/sup&gt; - 1 &nbsp;|&nbsp; <strong>Time:</strong> O(2&lt;sup&gt;n&lt;/sup&gt;)</p>`
                },
                {
                    q: "Generate the power set of a set using recursion.",
                    a: `<p>The <strong>power set</strong> contains all possible subsets. For each element, either <strong>include</strong> it or <strong>exclude</strong> it.</p>
<pre><code>function powerSet(arr, idx = 0, current = []) {
    if (idx === arr.length) {
        console.log(current);
        return;
    }
    // Include arr[idx]
    powerSet(arr, idx + 1, [...current, arr[idx]]);
    // Exclude arr[idx]
    powerSet(arr, idx + 1, current);
}
// powerSet([1, 2, 3])
// [], [3], [2], [2,3], [1], [1,3], [1,2], [1,2,3]
</code></pre>
<p><strong>Total subsets:</strong> 2&lt;sup&gt;n&lt;/sup&gt; &nbsp;|&nbsp; <strong>Time:</strong> O(2&lt;sup&gt;n&lt;/sup&gt;)</p>`
                },
                {
                    q: "Generate all permutations of a string recursively.",
                    a: `<p>Fix one character at a time and recursively permute the rest. Swap each character into the current position.</p>
<pre><code>function permutations(str, l = 0, r = str.length - 1) {
    if (l === r) { console.log(str); return; }
    const arr = str.split("");
    for (let i = l; i &lt;= r; i++) {
        [arr[l], arr[i]] = [arr[i], arr[l]];
        permutations(arr.join(""), l + 1, r);
        [arr[l], arr[i]] = [arr[i], arr[l]]; // backtrack
    }
}
// permutations("abc") =&gt; abc, acb, bac, bca, cba, cab
</code></pre>
<p><strong>Total:</strong> n! permutations &nbsp;|&nbsp; <strong>Time:</strong> O(n &times; n!)</p>`
                },
                {
                    q: "Implement binary search recursively.",
                    a: `<p>Recursive binary search divides the search range by half on each call. The base case is when the range is empty.</p>
<pre><code>function binarySearchRec(arr, target, lo = 0, hi = arr.length - 1) {
    if (lo &gt; hi) return -1; // base case
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] &lt; target)
        return binarySearchRec(arr, target, mid + 1, hi);
    return binarySearchRec(arr, target, lo, mid - 1);
}
// binarySearchRec([1,3,5,7,9], 7) =&gt; 3
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(log n) due to call stack</p>`
                },
                {
                    q: "Find the sum of an array recursively.",
                    a: `<p>Add the first element to the recursive sum of the rest of the array. Base case: empty array returns 0.</p>
<pre><code>function sumArray(arr, i = 0) {
    if (i === arr.length) return 0;  // base case
    return arr[i] + sumArray(arr, i + 1);
}
// sumArray([1, 2, 3, 4, 5]) =&gt; 15

// Trace: 1 + sumArray([2,3,4,5])
//        1 + 2 + sumArray([3,4,5])
//        1 + 2 + 3 + sumArray([4,5])
//        1 + 2 + 3 + 4 + sumArray([5])
//        1 + 2 + 3 + 4 + 5 + 0 = 15
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n) call stack</p>`
                },
                {
                    q: "Flatten a nested array recursively.",
                    a: `<p>Check each element: if it is an array, recursively flatten it; otherwise, add it to the result.</p>
<pre><code>function flatten(arr) {
    const result = [];
    for (const item of arr) {
        if (Array.isArray(item)) {
            result.push(...flatten(item));
        } else {
            result.push(item);
        }
    }
    return result;
}
// flatten([1, [2, [3, 4], 5], [6, 7]])
// =&gt; [1, 2, 3, 4, 5, 6, 7]
</code></pre>
<p><strong>Time:</strong> O(n) where n = total elements &nbsp;|&nbsp; <strong>Space:</strong> O(d) where d = max depth</p>`
                }
            ]
        },
        {
            id: "greedy-algorithms",
            title: "Greedy Algorithms",
            icon: "bi-trophy",
            questions: [
                {
                    q: "What is a Greedy Algorithm?",
                    a: `<p>A <strong>Greedy Algorithm</strong> makes the <strong>locally optimal choice</strong> at each step, hoping to find the global optimum. It never reconsiders previous choices.</p>
<pre><code>// Greedy works when:
// 1. Greedy choice property — local optimal leads to global optimal
// 2. Optimal substructure — optimal solution contains optimal sub-solutions

// Example: giving change with fewest coins (standard denominations)
// For amount 63 with [25, 10, 5, 1]:
// Take 25, 25 (50), then 10 (60), then 1, 1, 1 (63) =&gt; 6 coins
</code></pre>
<p>Greedy doesn't always work (e.g., coin change with arbitrary denominations may need DP).</p>`
                },
                {
                    q: "Solve the Activity Selection problem.",
                    a: `<p>Select the <strong>maximum number of non-overlapping activities</strong>. Greedy: sort by finish time and always pick the earliest finishing activity.</p>
<pre><code>function activitySelection(start, finish) {
    const n = start.length;
    const activities = start.map((s, i) =&gt; [s, finish[i]])
        .sort((a, b) =&gt; a[1] - b[1]);
    const result = [activities[0]];
    let lastEnd = activities[0][1];
    for (let i = 1; i &lt; n; i++) {
        if (activities[i][0] &gt;= lastEnd) {
            result.push(activities[i]);
            lastEnd = activities[i][1];
        }
    }
    return result;
}
</code></pre>
<p><strong>Time:</strong> O(n log n) for sorting &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "Solve the Fractional Knapsack problem.",
                    a: `<p>Unlike 0/1 knapsack, you can take <strong>fractions of items</strong>. Greedy: sort by value/weight ratio and take items greedily.</p>
<pre><code>function fractionalKnapsack(items, capacity) {
    items.sort((a, b) =&gt; b.value/b.weight - a.value/a.weight);
    let totalValue = 0;
    for (const item of items) {
        if (capacity &gt;= item.weight) {
            totalValue += item.value;
            capacity -= item.weight;
        } else {
            totalValue += (capacity / item.weight) * item.value;
            break;
        }
    }
    return totalValue;
}
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; Greedy works here because we can take fractions.</p>`
                },
                {
                    q: "Solve the Job Sequencing problem.",
                    a: `<p>Given jobs with deadlines and profits, schedule jobs to <strong>maximize profit</strong>. Each job takes one unit of time. Greedy: sort by profit descending and assign to the latest available slot before deadline.</p>
<pre><code>function jobSequencing(jobs) {
    jobs.sort((a, b) =&gt; b.profit - a.profit);
    const maxDeadline = Math.max(...jobs.map(j =&gt; j.deadline));
    const slots = new Array(maxDeadline).fill(null);
    let totalProfit = 0;
    for (const job of jobs) {
        for (let t = job.deadline - 1; t &gt;= 0; t--) {
            if (slots[t] === null) {
                slots[t] = job.id;
                totalProfit += job.profit;
                break;
            }
        }
    }
    return { slots, totalProfit };
}
</code></pre>
<p><strong>Time:</strong> O(n&sup2;) or O(n log n) with union-find</p>`
                },
                {
                    q: "Explain Huffman Coding.",
                    a: `<p><strong>Huffman Coding</strong> is a greedy algorithm for lossless data compression. It assigns shorter codes to more frequent characters using a priority queue (min-heap).</p>
<pre><code>// Algorithm:
// 1. Count frequency of each character
// 2. Create a leaf node for each character
// 3. While more than one node in the queue:
//    a. Extract two nodes with lowest frequency
//    b. Create a new internal node with their sum
//    c. Insert the new node back
// 4. The remaining node is the root

// Example: "aabbbcccc"
// c:4, b:3, a:2
// Tree assigns: c=0, b=10, a=11
// Compressed: fewer bits than fixed-length encoding
</code></pre>
<p><strong>Time:</strong> O(n log n) with heap &nbsp;|&nbsp; Produces <strong>optimal prefix codes</strong>.</p>`
                },
                {
                    q: "Solve the Minimum Coins (greedy) problem.",
                    a: `<p>For <strong>standard coin denominations</strong> (e.g., 1, 5, 10, 25), greedy works: always pick the largest coin that fits.</p>
<pre><code>function minCoinsGreedy(coins, amount) {
    coins.sort((a, b) =&gt; b - a); // sort descending
    let count = 0;
    const used = [];
    for (const coin of coins) {
        while (amount &gt;= coin) {
            amount -= coin;
            used.push(coin);
            count++;
        }
    }
    return { count, used };
}
// minCoinsGreedy([1, 5, 10, 25], 63)
// =&gt; { count: 6, used: [25, 25, 10, 1, 1, 1] }
</code></pre>
<p><strong>Note:</strong> Greedy fails for arbitrary denominations (e.g., [1, 3, 4] for amount 6). Use DP for those cases.</p>`
                },
                {
                    q: "Solve the Maximum Meetings in One Room problem.",
                    a: `<p>Given meeting start and end times, find the <strong>maximum number of meetings</strong> in one room. Same as activity selection: sort by end time and greedily pick non-overlapping meetings.</p>
<pre><code>function maxMeetings(start, end) {
    const meetings = start.map((s, i) =&gt; ({s, e: end[i], idx: i + 1}));
    meetings.sort((a, b) =&gt; a.e - b.e);
    const result = [meetings[0].idx];
    let lastEnd = meetings[0].e;
    for (let i = 1; i &lt; meetings.length; i++) {
        if (meetings[i].s &gt; lastEnd) {
            result.push(meetings[i].idx);
            lastEnd = meetings[i].e;
        }
    }
    return result;
}
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "Solve the Minimum Platforms problem.",
                    a: `<p>Find the <strong>minimum number of platforms</strong> needed at a railway station so no train waits. Sort arrivals and departures separately and use the two-pointer technique.</p>
<pre><code>function minPlatforms(arrivals, departures) {
    arrivals.sort((a, b) =&gt; a - b);
    departures.sort((a, b) =&gt; a - b);
    let platforms = 0, maxPlatforms = 0;
    let i = 0, j = 0;
    while (i &lt; arrivals.length) {
        if (arrivals[i] &lt;= departures[j]) {
            platforms++;
            i++;
        } else {
            platforms--;
            j++;
        }
        maxPlatforms = Math.max(maxPlatforms, platforms);
    }
    return maxPlatforms;
}
// minPlatforms([900,940,950,1100], [910,1200,1120,1130]) =&gt; 3
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Solve the Jump Game problem.",
                    a: `<p>Given an array where each element is the max jump length, determine if you can reach the last index. Greedy: track the <strong>farthest reachable</strong> position.</p>
<pre><code>function canJump(nums) {
    let farthest = 0;
    for (let i = 0; i &lt; nums.length; i++) {
        if (i &gt; farthest) return false;
        farthest = Math.max(farthest, i + nums[i]);
    }
    return true;
}
// canJump([2,3,1,1,4]) =&gt; true
// canJump([3,2,1,0,4]) =&gt; false
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Solve the Gas Station problem.",
                    a: `<p>There are n gas stations in a circle. Find the starting station index to complete the circuit, or return -1. Greedy: if total gas &ge; total cost, a solution exists. Track the current deficit to find the start.</p>
<pre><code>function canCompleteCircuit(gas, cost) {
    let totalSurplus = 0, currentSurplus = 0, start = 0;
    for (let i = 0; i &lt; gas.length; i++) {
        totalSurplus += gas[i] - cost[i];
        currentSurplus += gas[i] - cost[i];
        if (currentSurplus &lt; 0) {
            start = i + 1;
            currentSurplus = 0;
        }
    }
    return totalSurplus &gt;= 0 ? start : -1;
}
// canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]) =&gt; 3
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                }
            ]
        },
        {
            id: "backtracking",
            title: "Backtracking",
            icon: "bi-arrow-return-left",
            questions: [
                {
                    q: "What is Backtracking?",
                    a: `<p><strong>Backtracking</strong> is an algorithmic technique that builds solutions <strong>incrementally</strong>, abandoning a path as soon as it determines the path cannot lead to a valid solution (pruning).</p>
<pre><code>// General backtracking template:
function backtrack(candidate) {
    if (isValid(candidate)) {
        output(candidate);
        return;
    }
    for (const next of getCandidates(candidate)) {
        place(next);
        backtrack(next);
        remove(next); // undo the choice (backtrack)
    }
}
</code></pre>
<p>Backtracking is used for constraint satisfaction problems like N-Queens, Sudoku, and subset generation.</p>`
                },
                {
                    q: "Solve the N-Queens problem.",
                    a: `<p>Place N queens on an N&times;N board so no two queens attack each other. Use backtracking: place queens row by row and check column and diagonal conflicts.</p>
<pre><code>function solveNQueens(n) {
    const result = [], board = [];
    function isSafe(row, col) {
        for (let i = 0; i &lt; row; i++) {
            if (board[i] === col || Math.abs(board[i] - col) === row - i)
                return false;
        }
        return true;
    }
    function solve(row) {
        if (row === n) { result.push([...board]); return; }
        for (let col = 0; col &lt; n; col++) {
            if (isSafe(row, col)) {
                board[row] = col;
                solve(row + 1);
            }
        }
    }
    solve(0);
    return result;
}
</code></pre>
<p><strong>Time:</strong> O(n!) &nbsp;|&nbsp; Explores and prunes invalid placements.</p>`
                },
                {
                    q: "Solve Sudoku using backtracking.",
                    a: `<p>Fill empty cells one by one. For each empty cell, try digits 1-9, check validity, and backtrack if stuck.</p>
<pre><code>function solveSudoku(board) {
    for (let r = 0; r &lt; 9; r++) {
        for (let c = 0; c &lt; 9; c++) {
            if (board[r][c] === 0) {
                for (let num = 1; num &lt;= 9; num++) {
                    if (isValid(board, r, c, num)) {
                        board[r][c] = num;
                        if (solveSudoku(board)) return true;
                        board[r][c] = 0; // backtrack
                    }
                }
                return false; // no valid number found
            }
        }
    }
    return true; // all cells filled
}
</code></pre>
<p><strong>Time:</strong> O(9&lt;sup&gt;(empty cells)&lt;/sup&gt;) worst case, but pruning makes it practical.</p>`
                },
                {
                    q: "Solve the Rat in a Maze problem.",
                    a: `<p>A rat starts at (0,0) and must reach (n-1, n-1) in a maze where 1 = open path and 0 = blocked. The rat can move down or right. Backtrack when blocked.</p>
<pre><code>function ratInMaze(maze) {
    const n = maze.length;
    const path = Array.from({length: n}, () =&gt; new Array(n).fill(0));
    function solve(r, c) {
        if (r === n-1 &amp;&amp; c === n-1 &amp;&amp; maze[r][c] === 1) {
            path[r][c] = 1;
            return true;
        }
        if (r &lt; n &amp;&amp; c &lt; n &amp;&amp; maze[r][c] === 1) {
            path[r][c] = 1;
            if (solve(r + 1, c) || solve(r, c + 1)) return true;
            path[r][c] = 0; // backtrack
        }
        return false;
    }
    solve(0, 0);
    return path;
}
</code></pre>
<p><strong>Time:</strong> O(2&lt;sup&gt;n&sup2;&lt;/sup&gt;) worst &nbsp;|&nbsp; <strong>Space:</strong> O(n&sup2;)</p>`
                },
                {
                    q: "Solve the Word Search problem.",
                    a: `<p>Given a 2D board and a word, check if the word exists by moving to adjacent cells (up/down/left/right). Each cell can be used only once per path.</p>
<pre><code>function wordSearch(board, word) {
    const rows = board.length, cols = board[0].length;
    function dfs(r, c, idx) {
        if (idx === word.length) return true;
        if (r &lt; 0 || r &gt;= rows || c &lt; 0 || c &gt;= cols) return false;
        if (board[r][c] !== word[idx]) return false;
        const temp = board[r][c];
        board[r][c] = "#"; // mark visited
        const found = dfs(r+1,c,idx+1) || dfs(r-1,c,idx+1)
                   || dfs(r,c+1,idx+1) || dfs(r,c-1,idx+1);
        board[r][c] = temp; // backtrack
        return found;
    }
    for (let r = 0; r &lt; rows; r++)
        for (let c = 0; c &lt; cols; c++)
            if (dfs(r, c, 0)) return true;
    return false;
}
</code></pre>
<p><strong>Time:</strong> O(m &times; n &times; 4&lt;sup&gt;L&lt;/sup&gt;) where L = word length</p>`
                },
                {
                    q: "Generate all permutations using backtracking.",
                    a: `<p>Build permutations by choosing each unused element, adding it to the current path, and backtracking after the recursive call.</p>
<pre><code>function permutations(nums) {
    const result = [];
    function backtrack(path, used) {
        if (path.length === nums.length) {
            result.push([...path]);
            return;
        }
        for (let i = 0; i &lt; nums.length; i++) {
            if (used[i]) continue;
            used[i] = true;
            path.push(nums[i]);
            backtrack(path, used);
            path.pop();     // backtrack
            used[i] = false;
        }
    }
    backtrack([], new Array(nums.length).fill(false));
    return result;
}
// permutations([1,2,3]) =&gt; [[1,2,3],[1,3,2],[2,1,3],...]
</code></pre>
<p><strong>Time:</strong> O(n &times; n!) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "Generate all combinations using backtracking.",
                    a: `<p>For combinations of size k from n elements, use a start index to avoid duplicates and backtrack after each choice.</p>
<pre><code>function combinations(n, k) {
    const result = [];
    function backtrack(start, combo) {
        if (combo.length === k) {
            result.push([...combo]);
            return;
        }
        for (let i = start; i &lt;= n; i++) {
            combo.push(i);
            backtrack(i + 1, combo);
            combo.pop(); // backtrack
        }
    }
    backtrack(1, []);
    return result;
}
// combinations(4, 2) =&gt; [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
</code></pre>
<p><strong>Time:</strong> O(C(n, k)) &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "Solve the Subset Sum problem with backtracking.",
                    a: `<p>Find all subsets of an array that sum to a target. Include or exclude each element and prune when the running sum exceeds the target.</p>
<pre><code>function subsetSum(nums, target) {
    const result = [];
    nums.sort((a, b) =&gt; a - b);
    function backtrack(idx, current, sum) {
        if (sum === target) { result.push([...current]); return; }
        for (let i = idx; i &lt; nums.length; i++) {
            if (sum + nums[i] &gt; target) break; // prune
            current.push(nums[i]);
            backtrack(i + 1, current, sum + nums[i]);
            current.pop();
        }
    }
    backtrack(0, [], 0);
    return result;
}
// subsetSum([2, 3, 5, 7], 7) =&gt; [[2,5], [7]]
</code></pre>
<p><strong>Time:</strong> O(2&lt;sup&gt;n&lt;/sup&gt;) worst case &nbsp;|&nbsp; Pruning reduces actual computation.</p>`
                },
                {
                    q: "Solve Letter Combinations of a Phone Number.",
                    a: `<p>Map each digit to letters (like a phone keypad) and generate all possible letter combinations using backtracking.</p>
<pre><code>function letterCombinations(digits) {
    if (!digits) return [];
    const map = { "2":"abc","3":"def","4":"ghi","5":"jkl",
                  "6":"mno","7":"pqrs","8":"tuv","9":"wxyz" };
    const result = [];
    function backtrack(idx, path) {
        if (idx === digits.length) { result.push(path); return; }
        for (const ch of map[digits[idx]]) {
            backtrack(idx + 1, path + ch);
        }
    }
    backtrack(0, "");
    return result;
}
// letterCombinations("23") =&gt; ["ad","ae","af","bd","be","bf","cd","ce","cf"]
</code></pre>
<p><strong>Time:</strong> O(4&lt;sup&gt;n&lt;/sup&gt;) where n = number of digits</p>`
                },
                {
                    q: "Solve Palindrome Partitioning using backtracking.",
                    a: `<p>Partition a string so every substring is a palindrome. Try all possible partitions and backtrack when a substring is not a palindrome.</p>
<pre><code>function palindromePartition(s) {
    const result = [];
    function isPalin(str, l, r) {
        while (l &lt; r) { if (str[l++] !== str[r--]) return false; }
        return true;
    }
    function backtrack(start, parts) {
        if (start === s.length) { result.push([...parts]); return; }
        for (let end = start; end &lt; s.length; end++) {
            if (isPalin(s, start, end)) {
                parts.push(s.slice(start, end + 1));
                backtrack(end + 1, parts);
                parts.pop();
            }
        }
    }
    backtrack(0, []);
    return result;
}
// palindromePartition("aab") =&gt; [["a","a","b"], ["aa","b"]]
</code></pre>
<p><strong>Time:</strong> O(n &times; 2&lt;sup&gt;n&lt;/sup&gt;) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                }
            ]
        },
        {
            id: "two-pointers",
            title: "Two Pointers",
            icon: "bi-arrows-expand",
            questions: [
                {
                    q: "What is the Two Pointer technique?",
                    a: `<p>The <strong>Two Pointer</strong> technique uses two indices that move through the data structure (usually from opposite ends or same direction) to solve problems efficiently, often reducing O(n&sup2;) to O(n).</p>
<pre><code>// Pattern 1: Opposite ends (sorted array)
let left = 0, right = arr.length - 1;
while (left &lt; right) {
    // process arr[left] and arr[right]
    // move left++ or right-- based on condition
}

// Pattern 2: Same direction (fast/slow)
let slow = 0;
for (let fast = 0; fast &lt; arr.length; fast++) {
    // process and advance slow conditionally
}
</code></pre>
<p>Common uses: pair sum, removing duplicates, partitioning, palindrome checking.</p>`
                },
                {
                    q: "Find a pair with a given sum in a sorted array.",
                    a: `<p>Use two pointers at opposite ends. If sum is too small, move left pointer right. If too large, move right pointer left.</p>
<pre><code>function pairWithSum(arr, target) {
    let left = 0, right = arr.length - 1;
    while (left &lt; right) {
        const sum = arr[left] + arr[right];
        if (sum === target) return [left, right];
        if (sum &lt; target) left++;
        else right--;
    }
    return [-1, -1];
}
// pairWithSum([1, 3, 5, 7, 9], 10) =&gt; [0, 4] (1+9)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Remove duplicates from a sorted array in-place.",
                    a: `<p>Use a <strong>slow pointer</strong> to track the position of unique elements and a <strong>fast pointer</strong> to scan through the array.</p>
<pre><code>function removeDuplicates(arr) {
    if (arr.length === 0) return 0;
    let slow = 0;
    for (let fast = 1; fast &lt; arr.length; fast++) {
        if (arr[fast] !== arr[slow]) {
            slow++;
            arr[slow] = arr[fast];
        }
    }
    return slow + 1; // length of unique portion
}
// removeDuplicates([1,1,2,2,3,4,4]) =&gt; 4, arr=[1,2,3,4,...]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Solve the Container With Most Water problem.",
                    a: `<p>Find two lines that together with the x-axis form a container holding the most water. Use two pointers at the ends and move the shorter line inward.</p>
<pre><code>function maxArea(heights) {
    let left = 0, right = heights.length - 1, max = 0;
    while (left &lt; right) {
        const area = Math.min(heights[left], heights[right]) * (right - left);
        max = Math.max(max, area);
        if (heights[left] &lt; heights[right]) left++;
        else right--;
    }
    return max;
}
// maxArea([1,8,6,2,5,4,8,3,7]) =&gt; 49
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Solve the Three Sum problem.",
                    a: `<p>Find all unique triplets that sum to zero. Sort the array, fix one element, and use two pointers for the remaining pair.</p>
<pre><code>function threeSum(nums) {
    nums.sort((a, b) =&gt; a - b);
    const result = [];
    for (let i = 0; i &lt; nums.length - 2; i++) {
        if (i &gt; 0 &amp;&amp; nums[i] === nums[i-1]) continue;
        let lo = i + 1, hi = nums.length - 1;
        while (lo &lt; hi) {
            const sum = nums[i] + nums[lo] + nums[hi];
            if (sum === 0) {
                result.push([nums[i], nums[lo], nums[hi]]);
                while (nums[lo] === nums[lo+1]) lo++;
                while (nums[hi] === nums[hi-1]) hi--;
                lo++; hi--;
            } else if (sum &lt; 0) lo++;
            else hi--;
        }
    }
    return result;
}
</code></pre>
<p><strong>Time:</strong> O(n&sup2;) &nbsp;|&nbsp; <strong>Space:</strong> O(1) excluding output</p>`
                },
                {
                    q: "Solve the Trapping Rain Water problem.",
                    a: `<p>Calculate water trapped between bars. Use two pointers tracking the max height from each side. Water at each position = min(leftMax, rightMax) - height.</p>
<pre><code>function trap(height) {
    let left = 0, right = height.length - 1;
    let leftMax = 0, rightMax = 0, water = 0;
    while (left &lt; right) {
        if (height[left] &lt; height[right]) {
            leftMax = Math.max(leftMax, height[left]);
            water += leftMax - height[left];
            left++;
        } else {
            rightMax = Math.max(rightMax, height[right]);
            water += rightMax - height[right];
            right--;
        }
    }
    return water;
}
// trap([0,1,0,2,1,0,1,3,2,1,2,1]) =&gt; 6
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Sort an array of 0s, 1s, and 2s (Dutch National Flag).",
                    a: `<p>Use <strong>three pointers</strong>: low (boundary of 0s), mid (current), high (boundary of 2s). Process elements and swap into correct regions.</p>
<pre><code>function sortColors(nums) {
    let low = 0, mid = 0, high = nums.length - 1;
    while (mid &lt;= high) {
        if (nums[mid] === 0) {
            [nums[low], nums[mid]] = [nums[mid], nums[low]];
            low++; mid++;
        } else if (nums[mid] === 1) {
            mid++;
        } else {
            [nums[mid], nums[high]] = [nums[high], nums[mid]];
            high--;
        }
    }
    return nums;
}
// sortColors([2,0,2,1,1,0]) =&gt; [0,0,1,1,2,2]
</code></pre>
<p><strong>Time:</strong> O(n) single pass &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Merge two sorted arrays in-place.",
                    a: `<p>Given two sorted arrays where the first has enough space, merge from the <strong>end</strong> using two pointers to avoid shifting elements.</p>
<pre><code>function merge(nums1, m, nums2, n) {
    let i = m - 1, j = n - 1, k = m + n - 1;
    while (i &gt;= 0 &amp;&amp; j &gt;= 0) {
        if (nums1[i] &gt; nums2[j]) nums1[k--] = nums1[i--];
        else nums1[k--] = nums2[j--];
    }
    while (j &gt;= 0) nums1[k--] = nums2[j--];
    return nums1;
}
// nums1 = [1,3,5,0,0,0], m=3
// nums2 = [2,4,6], n=3
// merge =&gt; [1,2,3,4,5,6]
</code></pre>
<p><strong>Time:</strong> O(m + n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Find the intersection of two sorted arrays.",
                    a: `<p>Use two pointers, one for each array. If elements match, add to result and advance both. Otherwise, advance the pointer with the smaller element.</p>
<pre><code>function intersection(a, b) {
    let i = 0, j = 0;
    const result = [];
    while (i &lt; a.length &amp;&amp; j &lt; b.length) {
        if (a[i] === b[j]) {
            result.push(a[i]);
            i++; j++;
        } else if (a[i] &lt; b[j]) {
            i++;
        } else {
            j++;
        }
    }
    return result;
}
// intersection([1,2,3,4], [2,4,6]) =&gt; [2, 4]
</code></pre>
<p><strong>Time:</strong> O(m + n) &nbsp;|&nbsp; <strong>Space:</strong> O(min(m, n))</p>`
                },
                {
                    q: "Check if a string is a valid palindrome using two pointers.",
                    a: `<p>Use two pointers from opposite ends, skip non-alphanumeric characters, and compare in a case-insensitive manner.</p>
<pre><code>function isPalindrome(s) {
    let left = 0, right = s.length - 1;
    while (left &lt; right) {
        while (left &lt; right &amp;&amp; !isAlphaNum(s[left])) left++;
        while (left &lt; right &amp;&amp; !isAlphaNum(s[right])) right--;
        if (s[left].toLowerCase() !== s[right].toLowerCase())
            return false;
        left++;
        right--;
    }
    return true;
}
function isAlphaNum(c) {
    return /[a-zA-Z0-9]/.test(c);
}
// isPalindrome("A man, a plan, a canal: Panama") =&gt; true
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                }
            ]
        },
        {
            id: "sliding-window",
            title: "Sliding Window",
            icon: "bi-window-stack",
            questions: [
                {
                    q: "Find the maximum sum subarray of size k (fixed window).",
                    a: `<p>Use a <strong>fixed-size sliding window</strong>: compute the sum of the first k elements, then slide by adding the next element and removing the first element of the previous window.</p>
<pre><code>function maxSumSubarray(arr, k) {
    let sum = 0, maxSum = 0;
    for (let i = 0; i &lt; k; i++) sum += arr[i];
    maxSum = sum;
    for (let i = k; i &lt; arr.length; i++) {
        sum += arr[i] - arr[i - k];
        maxSum = Math.max(maxSum, sum);
    }
    return maxSum;
}
// maxSumSubarray([2, 1, 5, 1, 3, 2], 3) =&gt; 9
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Find the smallest subarray with sum >= target (variable window).",
                    a: `<p>Use a <strong>variable-size sliding window</strong>: expand the right boundary to increase the sum, and shrink the left boundary when the sum meets the target.</p>
<pre><code>function minSubarrayLen(target, nums) {
    let left = 0, sum = 0, minLen = Infinity;
    for (let right = 0; right &lt; nums.length; right++) {
        sum += nums[right];
        while (sum &gt;= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left++];
        }
    }
    return minLen === Infinity ? 0 : minLen;
}
// minSubarrayLen(7, [2,3,1,2,4,3]) =&gt; 2 (subarray [4,3])
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Find the longest substring without repeating characters.",
                    a: `<p>Use a sliding window with a <strong>Set</strong> to track characters. Expand right, and if a duplicate is found, shrink from the left until no duplicates remain.</p>
<pre><code>function lengthOfLongestSubstring(s) {
    const set = new Set();
    let left = 0, maxLen = 0;
    for (let right = 0; right &lt; s.length; right++) {
        while (set.has(s[right])) {
            set.delete(s[left++]);
        }
        set.add(s[right]);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
// lengthOfLongestSubstring("abcabcbb") =&gt; 3 ("abc")
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(min(n, alphabet))</p>`
                },
                {
                    q: "Find the max consecutive ones with at most k flips.",
                    a: `<p>Sliding window: expand right, count zeros. When zeros exceed k, shrink from the left until zeros &le; k again.</p>
<pre><code>function longestOnes(nums, k) {
    let left = 0, zeros = 0, maxLen = 0;
    for (let right = 0; right &lt; nums.length; right++) {
        if (nums[right] === 0) zeros++;
        while (zeros &gt; k) {
            if (nums[left] === 0) zeros--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
// longestOnes([1,1,0,0,1,1,1,0,1], 2) =&gt; 6
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Solve the Fruits Into Baskets problem.",
                    a: `<p>Find the longest subarray with <strong>at most 2 distinct</strong> elements (fruit types). Use a sliding window with a frequency map.</p>
<pre><code>function totalFruit(fruits) {
    const map = new Map();
    let left = 0, maxLen = 0;
    for (let right = 0; right &lt; fruits.length; right++) {
        map.set(fruits[right], (map.get(fruits[right]) || 0) + 1);
        while (map.size &gt; 2) {
            const f = fruits[left];
            map.set(f, map.get(f) - 1);
            if (map.get(f) === 0) map.delete(f);
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
// totalFruit([1,2,3,2,2]) =&gt; 4
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) (at most 3 keys in map)</p>`
                },
                {
                    q: "Check if a permutation of s1 exists in s2.",
                    a: `<p>Use a fixed window of size s1.length on s2. Track character frequencies and compare with s1 frequencies.</p>
<pre><code>function checkInclusion(s1, s2) {
    if (s1.length &gt; s2.length) return false;
    const count = new Array(26).fill(0);
    for (let i = 0; i &lt; s1.length; i++) {
        count[s1.charCodeAt(i) - 97]++;
        count[s2.charCodeAt(i) - 97]--;
    }
    if (count.every(c =&gt; c === 0)) return true;
    for (let i = s1.length; i &lt; s2.length; i++) {
        count[s2.charCodeAt(i) - 97]--;
        count[s2.charCodeAt(i - s1.length) - 97]++;
        if (count.every(c =&gt; c === 0)) return true;
    }
    return false;
}
// checkInclusion("ab", "eidbaooo") =&gt; true
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Find the minimum window substring containing all characters of t.",
                    a: `<p>Use a variable sliding window with a frequency map. Expand right to include characters, shrink left to find the minimum valid window.</p>
<pre><code>function minWindow(s, t) {
    const need = new Map();
    for (const c of t) need.set(c, (need.get(c) || 0) + 1);
    let left = 0, have = 0, required = need.size;
    let minLen = Infinity, result = "";
    const window = new Map();
    for (let right = 0; right &lt; s.length; right++) {
        const c = s[right];
        window.set(c, (window.get(c) || 0) + 1);
        if (need.has(c) &amp;&amp; window.get(c) === need.get(c)) have++;
        while (have === required) {
            if (right - left + 1 &lt; minLen) {
                minLen = right - left + 1;
                result = s.slice(left, right + 1);
            }
            const d = s[left++];
            window.set(d, window.get(d) - 1);
            if (need.has(d) &amp;&amp; window.get(d) &lt; need.get(d)) have--;
        }
    }
    return result;
}
</code></pre>
<p><strong>Time:</strong> O(m + n) &nbsp;|&nbsp; <strong>Space:</strong> O(m + n)</p>`
                },
                {
                    q: "Solve the Longest Repeating Character Replacement problem.",
                    a: `<p>Find the longest substring where you can replace at most k characters to make all characters the same. Track the count of the most frequent character in the window.</p>
<pre><code>function characterReplacement(s, k) {
    const count = new Array(26).fill(0);
    let left = 0, maxFreq = 0, maxLen = 0;
    for (let right = 0; right &lt; s.length; right++) {
        count[s.charCodeAt(right) - 65]++;
        maxFreq = Math.max(maxFreq, count[s.charCodeAt(right) - 65]);
        while ((right - left + 1) - maxFreq &gt; k) {
            count[s.charCodeAt(left) - 65]--;
            left++;
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
// characterReplacement("AABABBA", 1) =&gt; 4
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Count subarrays with exactly k distinct elements.",
                    a: `<p>Use the trick: <strong>exactly(k) = atMost(k) - atMost(k-1)</strong>. Implement atMost(k) with a sliding window.</p>
<pre><code>function subarraysWithKDistinct(nums, k) {
    return atMost(nums, k) - atMost(nums, k - 1);
}
function atMost(nums, k) {
    const map = new Map();
    let left = 0, count = 0;
    for (let right = 0; right &lt; nums.length; right++) {
        map.set(nums[right], (map.get(nums[right]) || 0) + 1);
        while (map.size &gt; k) {
            const v = nums[left];
            map.set(v, map.get(v) - 1);
            if (map.get(v) === 0) map.delete(v);
            left++;
        }
        count += right - left + 1;
    }
    return count;
}
// subarraysWithKDistinct([1,2,1,2,3], 2) =&gt; 7
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "Solve the Sliding Window Maximum problem.",
                    a: `<p>Find the maximum in each window of size k. Use a <strong>deque</strong> (monotonic decreasing) to track the index of potential maximums efficiently.</p>
<pre><code>function maxSlidingWindow(nums, k) {
    const deque = [], result = [];
    for (let i = 0; i &lt; nums.length; i++) {
        // Remove indices outside the window
        if (deque.length &amp;&amp; deque[0] &lt; i - k + 1) deque.shift();
        // Remove smaller elements from back
        while (deque.length &amp;&amp; nums[deque[deque.length-1]] &lt; nums[i])
            deque.pop();
        deque.push(i);
        if (i &gt;= k - 1) result.push(nums[deque[0]]);
    }
    return result;
}
// maxSlidingWindow([1,3,-1,-3,5,3,6,7], 3)
// =&gt; [3,3,5,5,6,7]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                }
            ]
        },
        {
            id: "bit-manipulation",
            title: "Bit Manipulation",
            icon: "bi-toggles",
            questions: [
                {
                    q: "What are the AND, OR, and XOR bitwise operators?",
                    a: `<p>Bitwise operators work on individual bits of integers:</p>
<pre><code>// AND (&amp;) — both bits must be 1
5 &amp; 3   // 101 &amp; 011 = 001 = 1

// OR (|) — at least one bit must be 1
5 | 3   // 101 | 011 = 111 = 7

// XOR (^) — bits must differ
5 ^ 3   // 101 ^ 011 = 110 = 6

// Key XOR properties:
// a ^ a = 0, a ^ 0 = a, a ^ b ^ a = b
</code></pre>
<p><strong>AND</strong> masks bits, <strong>OR</strong> sets bits, <strong>XOR</strong> toggles bits and detects differences.</p>`
                },
                {
                    q: "How do left shift and right shift work?",
                    a: `<p><strong>Left shift (&lt;&lt;)</strong> multiplies by 2&lt;sup&gt;n&lt;/sup&gt;. <strong>Right shift (&gt;&gt;)</strong> divides by 2&lt;sup&gt;n&lt;/sup&gt; (integer division).</p>
<pre><code>// Left shift: a &lt;&lt; n = a * 2^n
5 &lt;&lt; 1   // 101 -&gt; 1010 = 10
5 &lt;&lt; 2   // 101 -&gt; 10100 = 20

// Right shift: a &gt;&gt; n = Math.floor(a / 2^n)
20 &gt;&gt; 1  // 10100 -&gt; 1010 = 10
20 &gt;&gt; 2  // 10100 -&gt; 101 = 5

// Common use: mid = (lo + hi) &gt;&gt; 1  (same as Math.floor((lo+hi)/2))
</code></pre>
<p>Shifts are faster than multiplication/division and commonly used in low-level optimization.</p>`
                },
                {
                    q: "How do you check if a number is a power of 2?",
                    a: `<p>A power of 2 has exactly <strong>one bit set</strong>. The trick: <code>n &amp; (n - 1)</code> clears the lowest set bit. If the result is 0, it was a power of 2.</p>
<pre><code>function isPowerOfTwo(n) {
    return n &gt; 0 &amp;&amp; (n &amp; (n - 1)) === 0;
}
// 8  = 1000, 7  = 0111 =&gt; 1000 &amp; 0111 = 0 ✓
// 6  = 0110, 5  = 0101 =&gt; 0110 &amp; 0101 = 4 ✗

isPowerOfTwo(16) // true  (10000)
isPowerOfTwo(18) // false (10010)
</code></pre>
<p><strong>Time:</strong> O(1) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you count the number of set bits (Hamming Weight)?",
                    a: `<p>Count how many bits are 1 in a number. Use <code>n &amp; (n - 1)</code> to clear the lowest set bit each iteration.</p>
<pre><code>function countSetBits(n) {
    let count = 0;
    while (n) {
        n &amp;= (n - 1); // clear lowest set bit
        count++;
    }
    return count;
}
// 13 = 1101 =&gt; 3 set bits
// 7  = 0111 =&gt; 3 set bits
// 16 = 10000 =&gt; 1 set bit
countSetBits(13) // 3
</code></pre>
<p><strong>Time:</strong> O(number of set bits) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "Find the single number using XOR.",
                    a: `<p>In an array where every element appears <strong>twice except one</strong>, XOR all elements. Pairs cancel out (a ^ a = 0), leaving the single number.</p>
<pre><code>function singleNumber(nums) {
    let result = 0;
    for (const n of nums) {
        result ^= n;
    }
    return result;
}
// singleNumber([4, 1, 2, 1, 2]) =&gt; 4
// 4^1^2^1^2 = 4^(1^1)^(2^2) = 4^0^0 = 4
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) — no extra data structure needed.</p>`
                },
                {
                    q: "Swap two numbers without a temporary variable.",
                    a: `<p>Use XOR to swap: <code>a ^= b; b ^= a; a ^= b;</code>. This works because XOR is its own inverse.</p>
<pre><code>function swap(a, b) {
    a = a ^ b;  // a now holds a^b
    b = a ^ b;  // b = (a^b)^b = a
    a = a ^ b;  // a = (a^b)^a = b
    return [a, b];
}
// swap(5, 3) =&gt; [3, 5]
// Step by step: a=5(101), b=3(011)
// a = 101^011 = 110 (6)
// b = 110^011 = 101 (5) = original a
// a = 110^101 = 011 (3) = original b
</code></pre>
<p><strong>Note:</strong> In practice, a temporary variable is simpler and preferred. XOR swap fails if a and b are the same reference.</p>`
                },
                {
                    q: "How do you toggle the nth bit of a number?",
                    a: `<p>Use XOR with a mask that has only the nth bit set: <code>n ^ (1 &lt;&lt; pos)</code>.</p>
<pre><code>// Toggle bit at position pos
function toggleBit(n, pos) {
    return n ^ (1 &lt;&lt; pos);
}

// Set bit:   n | (1 &lt;&lt; pos)
// Clear bit: n &amp; ~(1 &lt;&lt; pos)
// Check bit: (n &gt;&gt; pos) &amp; 1

toggleBit(10, 0)  // 1010 ^ 0001 = 1011 (11)
toggleBit(11, 0)  // 1011 ^ 0001 = 1010 (10)
toggleBit(10, 2)  // 1010 ^ 0100 = 1110 (14)
</code></pre>
<p>XOR flips the targeted bit: 0 becomes 1 and 1 becomes 0.</p>`
                },
                {
                    q: "Find two non-repeating elements in an array where all others repeat twice.",
                    a: `<p>XOR all elements to get xor = a ^ b. Find a set bit (the two differ here). Partition elements by that bit to separate a and b.</p>
<pre><code>function findTwoNonRepeating(nums) {
    let xor = 0;
    for (const n of nums) xor ^= n;
    const setBit = xor &amp; (-xor); // lowest set bit
    let a = 0, b = 0;
    for (const n of nums) {
        if (n &amp; setBit) a ^= n;
        else b ^= n;
    }
    return [a, b];
}
// findTwoNonRepeating([1, 2, 3, 1, 2, 5])
// =&gt; [3, 5]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you reverse the bits of an integer?",
                    a: `<p>Process each bit from right to left, building the reversed number by shifting and adding bits.</p>
<pre><code>function reverseBits(n) {
    let result = 0;
    for (let i = 0; i &lt; 32; i++) {
        result = (result &lt;&lt; 1) | (n &amp; 1);
        n &gt;&gt;&gt;= 1;
    }
    return result &gt;&gt;&gt; 0; // unsigned
}
// reverseBits(0b00000000000000000000000000001011)
// =&gt; 0b11010000000000000000000000000000
// = 3489660928
</code></pre>
<p><strong>Time:</strong> O(32) = O(1) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you generate all subsets using bit manipulation?",
                    a: `<p>For n elements, iterate from 0 to 2&lt;sup&gt;n&lt;/sup&gt;-1. Each number represents a subset: bit j set means include element j.</p>
<pre><code>function subsets(arr) {
    const n = arr.length;
    const result = [];
    for (let mask = 0; mask &lt; (1 &lt;&lt; n); mask++) {
        const subset = [];
        for (let j = 0; j &lt; n; j++) {
            if (mask &amp; (1 &lt;&lt; j)) subset.push(arr[j]);
        }
        result.push(subset);
    }
    return result;
}
// subsets([1, 2, 3])
// =&gt; [[], [1], [2], [1,2], [3], [1,3], [2,3], [1,2,3]]
</code></pre>
<p><strong>Total subsets:</strong> 2&lt;sup&gt;n&lt;/sup&gt; &nbsp;|&nbsp; <strong>Time:</strong> O(n &times; 2&lt;sup&gt;n&lt;/sup&gt;)</p>`
                }
            ]
        },
        {
            id: "time-space-complexity",
            title: "Time & Space Complexity",
            icon: "bi-speedometer2",
            questions: [
                {
                    q: "What is Big O notation?",
                    a: `<p><strong>Big O notation</strong> describes the <strong>upper bound</strong> of an algorithm's growth rate as input size increases. It tells us the worst-case performance in terms of time or space.</p>
<pre><code>// Big O expresses how runtime scales with input size n
// O(1)     — constant: doesn't depend on n
// O(log n) — logarithmic: halves problem each step
// O(n)     — linear: one pass through data
// O(n log n) — linearithmic: efficient sorting
// O(n^2)   — quadratic: nested loops
// O(2^n)   — exponential: recursive subsets
</code></pre>
<p>We drop constants and lower-order terms: O(2n + 5) simplifies to O(n).</p>`
                },
                {
                    q: "Give examples of O(1), O(n), and O(log n) algorithms.",
                    a: `<p>Common complexity classes with examples:</p>
<pre><code>// O(1) — Array access, hash map lookup
let x = arr[5]; // constant time

// O(n) — Linear search, single loop
for (let i = 0; i &lt; n; i++) { /* process */ }

// O(log n) — Binary search
function bsearch(arr, target) {
    let lo = 0, hi = arr.length - 1;
    while (lo &lt;= hi) {
        const mid = (lo + hi) &gt;&gt; 1;
        if (arr[mid] === target) return mid;
        if (arr[mid] &lt; target) lo = mid + 1;
        else hi = mid - 1;
    }
}
</code></pre>
<p>O(log n) appears whenever the problem size is <strong>halved</strong> at each step.</p>`
                },
                {
                    q: "Give examples of O(n^2) algorithms.",
                    a: `<p>O(n&sup2;) typically comes from <strong>nested loops</strong> where both iterate over n elements:</p>
<pre><code>// Bubble Sort — nested loops
for (let i = 0; i &lt; n; i++) {
    for (let j = 0; j &lt; n - i - 1; j++) {
        if (arr[j] &gt; arr[j+1])
            [arr[j], arr[j+1]] = [arr[j+1], arr[j]];
    }
}

// Checking all pairs
for (let i = 0; i &lt; n; i++) {
    for (let j = i + 1; j &lt; n; j++) {
        // process pair (i, j)
    }
} // n*(n-1)/2 iterations = O(n^2)
</code></pre>
<p>O(n&sup2;) becomes slow for large inputs. For n=10,000, that is 100 million operations.</p>`
                },
                {
                    q: "What is space complexity?",
                    a: `<p><strong>Space complexity</strong> measures the <strong>extra memory</strong> an algorithm uses relative to input size, excluding the input itself.</p>
<pre><code>// O(1) space — fixed variables
function sum(arr) {
    let total = 0; // only one variable
    for (const x of arr) total += x;
    return total;
}

// O(n) space — new array proportional to input
function double(arr) {
    return arr.map(x =&gt; x * 2); // new array of size n
}

// O(n) space — recursive call stack
function factorial(n) {
    if (n &lt;= 1) return 1;
    return n * factorial(n - 1); // n frames on stack
}
</code></pre>
<p>Consider both <strong>auxiliary space</strong> (extra structures) and <strong>stack space</strong> (recursion depth).</p>`
                },
                {
                    q: "What is amortized analysis?",
                    a: `<p><strong>Amortized analysis</strong> averages the cost of operations over a sequence, even if some individual operations are expensive. The <strong>average cost per operation</strong> is low.</p>
<pre><code>// Dynamic array (like JS Array.push):
// Most pushes: O(1) — just add to end
// Occasionally: O(n) — when array doubles capacity

// Amortized cost of push:
// n pushes, only log(n) doublings
// Total cost: n + 1 + 2 + 4 + ... + n = ~3n
// Amortized per push: O(1)

// Example: push 8 elements
// [_] [_,_] [_,_,_,_] [_,_,_,_,_,_,_,_]
// Copies: 1 + 2 + 4 = 7 copies for 8 pushes
</code></pre>
<p>Amortized O(1) is not the same as O(1): individual operations can still be costly, but the average is constant.</p>`
                },
                {
                    q: "What are best, worst, and average case complexities?",
                    a: `<p>An algorithm can have different performance depending on the input:</p>
<pre><code>// Linear Search example:
// Best case: O(1) — target is the first element
// Worst case: O(n) — target is last or not present
// Average case: O(n/2) = O(n) — target is somewhere in the middle

// Quick Sort example:
// Best case: O(n log n) — balanced partitions
// Worst case: O(n^2) — already sorted, bad pivot
// Average case: O(n log n) — random inputs

// Insertion Sort example:
// Best case: O(n) — already sorted
// Worst case: O(n^2) — reverse sorted
</code></pre>
<p><strong>Big O</strong> usually refers to worst case. Average case analysis often requires probability assumptions about input distribution.</p>`
                },
                {
                    q: "How do you compare algorithms by complexity?",
                    a: `<p>Complexity hierarchy from fastest to slowest growth:</p>
<pre><code>// O(1) &lt; O(log n) &lt; O(n) &lt; O(n log n) &lt; O(n^2) &lt; O(2^n) &lt; O(n!)

// For n = 1000:
// O(1)       = 1 operation
// O(log n)   = ~10 operations
// O(n)       = 1,000 operations
// O(n log n) = ~10,000 operations
// O(n^2)     = 1,000,000 operations
// O(2^n)     = 10^301 — infeasible!
// O(n!)      = even larger
</code></pre>
<p>Always aim for the lowest complexity. O(n log n) sorting is acceptable for most cases. O(n&sup2;) is okay for n &lt; 10,000. O(2&lt;sup&gt;n&lt;/sup&gt;) is only feasible for n &lt; ~25.</p>`
                },
                {
                    q: "How do you analyze the time complexity of recursive algorithms?",
                    a: `<p>Use <strong>recurrence relations</strong> and the <strong>Master Theorem</strong> for divide-and-conquer recurrences of the form T(n) = aT(n/b) + O(n&lt;sup&gt;d&lt;/sup&gt;).</p>
<pre><code>// Binary Search: T(n) = T(n/2) + O(1) =&gt; O(log n)
// Merge Sort:    T(n) = 2T(n/2) + O(n) =&gt; O(n log n)
// Fibonacci (naive): T(n) = T(n-1) + T(n-2) =&gt; O(2^n)

// Master Theorem: T(n) = aT(n/b) + O(n^d)
// If d &lt; log_b(a): O(n^(log_b(a)))
// If d = log_b(a): O(n^d * log n)
// If d &gt; log_b(a): O(n^d)
</code></pre>
<p>For non-standard recurrences, use the <strong>recursion tree</strong> method to sum work at each level.</p>`
                },
                {
                    q: "What is the time complexity of hash map operations?",
                    a: `<p>Hash map (object/Map in JS) operations are <strong>O(1) average</strong> but O(n) worst case due to hash collisions.</p>
<pre><code>const map = new Map();

// Insert — O(1) average
map.set("key", "value");

// Lookup — O(1) average
map.get("key");

// Delete — O(1) average
map.delete("key");

// Check existence — O(1) average
map.has("key");

// Iterate all entries — O(n)
for (const [k, v] of map) { /* ... */ }
</code></pre>
<p>Hash maps are ideal for <strong>frequency counting</strong>, <strong>caching</strong>, and <strong>lookup tables</strong>. The O(1) comes from computing a hash and indexing directly.</p>`
                },
                {
                    q: "Why does binary search give O(log n)?",
                    a: `<p>Binary search <strong>halves</strong> the search space with each comparison. After k steps, the remaining space is n/2&lt;sup&gt;k&lt;/sup&gt;. We stop when n/2&lt;sup&gt;k&lt;/sup&gt; = 1, so k = log&lt;sub&gt;2&lt;/sub&gt;(n).</p>
<pre><code>// n = 1024 elements
// Step 1: 512 remaining
// Step 2: 256 remaining
// Step 3: 128 remaining
// ...
// Step 10: 1 remaining
// log2(1024) = 10 steps

// In general:
// n = 1,000    =&gt; ~10 steps
// n = 1,000,000 =&gt; ~20 steps
// n = 1,000,000,000 =&gt; ~30 steps
</code></pre>
<p>This is why O(log n) is extremely efficient: doubling the input only adds <strong>one extra step</strong>.</p>`
                }
            ]
        }
    ]
};
