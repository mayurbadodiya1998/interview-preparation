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
                },
                {
                    q: "How do you find the maximum product subarray?",
                    a: `<p>Track both the <strong>maximum and minimum</strong> product ending at each position because a negative × negative can become the largest product.</p>
<pre><code>function maxProduct(nums) {
    let maxProd = nums[0], minProd = nums[0], result = nums[0];
    for (let i = 1; i &lt; nums.length; i++) {
        const candidates = [nums[i], maxProd * nums[i], minProd * nums[i]];
        maxProd = Math.max(...candidates);
        minProd = Math.min(...candidates);
        result = Math.max(result, maxProd);
    }
    return result;
}
// Input:  [2, 3, -2, 4]   =&gt; Output: 6  (subarray [2,3])
// Input:  [-2, 0, -1]     =&gt; Output: 0
// Input:  [-2, 3, -4]     =&gt; Output: 24 (entire array)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)<br>
<strong>Key insight:</strong> Always track both max and min because a <strong>negative times a negative</strong> flips to positive.</p>`
                },
                {
                    q: "How do you find the missing number in an array of 0 to n?",
                    a: `<p>Use the <strong>sum formula</strong>: expected sum of 0..n is n*(n+1)/2. Subtract the actual sum to get the missing value.</p>
<pre><code>function missingNumber(nums) {
    const n = nums.length;
    const expected = n * (n + 1) / 2;
    const actual = nums.reduce((sum, x) =&gt; sum + x, 0);
    return expected - actual;
}
// Input:  [3, 0, 1]       =&gt; Output: 2
// Input:  [0, 1]          =&gt; Output: 2
// Input:  [9,6,4,2,3,5,7,0,1] =&gt; Output: 8
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)<br>
<strong>Alternative:</strong> XOR all indices 0..n with all array values — the missing number is the only one without a pair.</p>`
                },
                {
                    q: "How do you find the maximum sum of two non-overlapping subarrays?",
                    a: `<p>Precompute prefix max sums from left and suffix max sums from right, then combine at each split point.</p>
<pre><code>function maxSumTwoNoOverlap(nums, L, M) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i &lt; n; i++) prefix[i + 1] = prefix[i] + nums[i];

    const sum = (i, len) =&gt; prefix[i + len] - prefix[i];

    let res = 0, maxL = 0, maxM = 0;
    for (let i = L + M; i &lt;= n; i++) {
        maxL = Math.max(maxL, sum(i - L - M, L));
        maxM = Math.max(maxM, sum(i - L - M, M));
        res = Math.max(res, maxL + sum(i - M, M), maxM + sum(i - L, L));
    }
    return res;
}
// Input: nums=[0,6,5,2,2,5,1,9,4], L=1, M=2 =&gt; Output: 20
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find all pairs in an array that sum to a target?",
                    a: `<p>Use a <strong>Set</strong> to track seen numbers. For each element check if its complement exists.</p>
<pre><code>function findAllPairs(arr, target) {
    const seen = new Set();
    const pairs = [];
    for (const num of arr) {
        const comp = target - num;
        if (seen.has(comp)) {
            pairs.push([comp, num]);
        }
        seen.add(num);
    }
    return pairs;
}
// Input: arr=[1,2,3,4,5,6], target=7  =&gt; Output: [[1,6],[2,5],[3,4]]
// Input: arr=[1,5,3,3,3],   target=6  =&gt; Output: [[3,3]]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)<br>
<strong>Note:</strong> For <strong>unique pairs only</strong>, avoid adding a pair twice by storing visited complements.</p>`
                },
                {
                    q: "How do you sort an array of 0s, 1s, and 2s (Dutch National Flag)?",
                    a: `<p>Use three pointers: <code>low</code>, <code>mid</code>, <code>high</code>. The <code>mid</code> pointer walks forward — place 0s before <code>low</code>, 2s after <code>high</code>.</p>
<pre><code>function sortColors(arr) {
    let low = 0, mid = 0, high = arr.length - 1;
    while (mid &lt;= high) {
        if (arr[mid] === 0) {
            [arr[low], arr[mid]] = [arr[mid], arr[low]];
            low++; mid++;
        } else if (arr[mid] === 1) {
            mid++;
        } else {
            [arr[mid], arr[high]] = [arr[high], arr[mid]];
            high--;
        }
    }
    return arr;
}
// Input:  [2, 0, 2, 1, 1, 0]  =&gt; Output: [0, 0, 1, 1, 2, 2]
// Input:  [2, 0, 1]           =&gt; Output: [0, 1, 2]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) — single pass, no extra storage</p>`
                },
                {
                    q: "How do you find the longest consecutive sequence in an unsorted array?",
                    a: `<p>Put all numbers into a <strong>Set</strong>. For each number that is the <strong>start of a sequence</strong> (num-1 not in set), count how far the sequence extends.</p>
<pre><code>function longestConsecutive(nums) {
    const set = new Set(nums);
    let best = 0;
    for (const num of set) {
        if (!set.has(num - 1)) { // start of a sequence
            let cur = num, streak = 1;
            while (set.has(cur + 1)) { cur++; streak++; }
            best = Math.max(best, streak);
        }
    }
    return best;
}
// Input:  [100,4,200,1,3,2]  =&gt; Output: 4  (sequence: 1,2,3,4)
// Input:  [0,3,7,2,5,8,4,6,0,1] =&gt; Output: 9
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the majority element (appears more than n/2 times)?",
                    a: `<p>Use the <strong>Boyer-Moore Voting Algorithm</strong>. Cancel out pairs of different elements — the majority element remains.</p>
<pre><code>function majorityElement(nums) {
    let candidate = null, count = 0;
    for (const num of nums) {
        if (count === 0) candidate = num;
        count += (num === candidate) ? 1 : -1;
    }
    return candidate;
}
// Input:  [3, 2, 3]                   =&gt; Output: 3
// Input:  [2, 2, 1, 1, 1, 2, 2]       =&gt; Output: 2
// Input:  [6, 5, 5]                   =&gt; Output: 5
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)<br>
<strong>Key insight:</strong> If majority element exists, it can never be fully cancelled out by minority elements.</p>`
                },
                {
                    q: "How do you find the intersection of two arrays?",
                    a: `<p>Convert the first array to a Set, then check each element of the second array against it.</p>
<pre><code>function intersection(a, b) {
    const setA = new Set(a);
    return [...new Set(b.filter(x =&gt; setA.has(x)))];
}
// Input:  a=[1,2,2,1], b=[2,2]     =&gt; Output: [2]
// Input:  a=[4,9,5],   b=[9,4,9,8,4] =&gt; Output: [4,9]

// For intersection WITH duplicates (each appearing min times):
function intersectWithDups(a, b) {
    const freq = {};
    for (const x of a) freq[x] = (freq[x] || 0) + 1;
    const res = [];
    for (const x of b) {
        if (freq[x] &gt; 0) { res.push(x); freq[x]--; }
    }
    return res;
}
// Input:  a=[1,2,2,1], b=[2,2]   =&gt; Output: [2,2]
</code></pre>
<p><strong>Time:</strong> O(n + m) &nbsp;|&nbsp; <strong>Space:</strong> O(min(n, m))</p>`
                },
                {
                    q: "How do you find the product of array except self without division?",
                    a: `<p>Build a <strong>prefix products</strong> array and a <strong>suffix products</strong> array. The answer for each index is prefix[i] × suffix[i].</p>
<pre><code>function productExceptSelf(nums) {
    const n = nums.length;
    const result = new Array(n).fill(1);
    // Left pass — prefix products
    let left = 1;
    for (let i = 0; i &lt; n; i++) {
        result[i] = left;
        left *= nums[i];
    }
    // Right pass — multiply suffix products
    let right = 1;
    for (let i = n - 1; i &gt;= 0; i--) {
        result[i] *= right;
        right *= nums[i];
    }
    return result;
}
// Input:  [1, 2, 3, 4]  =&gt; Output: [24, 12, 8, 6]
// Input:  [-1, 1, 0,-3,3] =&gt; Output: [0, 0, 9, 0, 0]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) extra (output array not counted)</p>`
                },
                {
                    q: "How do you find the smallest positive missing integer?",
                    a: `<p>Use the array itself as a hash map: place each number x at index x-1 if 1 ≤ x ≤ n. Then the first index where arr[i] ≠ i+1 gives the answer.</p>
<pre><code>function firstMissingPositive(nums) {
    const n = nums.length;
    // Place each number in its correct position
    for (let i = 0; i &lt; n; i++) {
        while (nums[i] &gt; 0 &amp;&amp; nums[i] &lt;= n &amp;&amp; nums[nums[i] - 1] !== nums[i]) {
            [nums[nums[i] - 1], nums[i]] = [nums[i], nums[nums[i] - 1]];
        }
    }
    for (let i = 0; i &lt; n; i++) {
        if (nums[i] !== i + 1) return i + 1;
    }
    return n + 1;
}
// Input:  [1, 2, 0]       =&gt; Output: 3
// Input:  [3, 4, -1, 1]   =&gt; Output: 2
// Input:  [7, 8, 9, 11]   =&gt; Output: 1
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) — uses the input array in place</p>`
                },
                {
                    q: "How do you find the subarray with sum equal to a given target (with negatives)?",
                    a: `<p>Use a <strong>prefix sum + hash map</strong>. At each index store the prefix sum. If <code>prefixSum - target</code> was seen before, a valid subarray exists.</p>
<pre><code>function subarraySum(nums, target) {
    const map = new Map([[0, 1]]); // prefix sum =&gt; count
    let sum = 0, count = 0;
    for (const num of nums) {
        sum += num;
        count += (map.get(sum - target) || 0);
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}
// Input: nums=[1,1,1], target=2     =&gt; Output: 2 (indices [0,1] and [1,2])
// Input: nums=[1,2,3], target=3     =&gt; Output: 2 ([1,2] and [3])
// Input: nums=[-1,-1,1], target=-1  =&gt; Output: 2
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)<br>
<strong>The trick:</strong> <code>prefixSum[j] - prefixSum[i] = target</code> means subarray from i+1 to j sums to target.</p>`
                },
                {
                    q: "How do you check if an array is sorted and rotated?",
                    a: `<p>A sorted and rotated array has <strong>at most one descent</strong> (place where arr[i] &gt; arr[i+1]). Count descents — if count &gt; 1 it is not sorted+rotated.</p>
<pre><code>function isSortedRotated(arr) {
    const n = arr.length;
    let descents = 0;
    for (let i = 0; i &lt; n; i++) {
        if (arr[i] &gt; arr[(i + 1) % n]) descents++;
        if (descents &gt; 1) return false;
    }
    return true;
}
// Input:  [3, 4, 5, 1, 2]  =&gt; Output: true  (one descent: 5→1)
// Input:  [2, 1, 3, 4]     =&gt; Output: false (two descents)
// Input:  [1, 2, 3]        =&gt; Output: true  (zero descents — already sorted)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you rearrange an array such that positive and negative numbers alternate?",
                    a: `<p>Separate positives and negatives into two lists, then interleave them. Remaining elements go at the end.</p>
<pre><code>function rearrange(arr) {
    const pos = arr.filter(x =&gt; x &gt;= 0);
    const neg = arr.filter(x =&gt; x &lt; 0);
    const result = [];
    let i = 0, j = 0;
    while (i &lt; pos.length &amp;&amp; j &lt; neg.length) {
        result.push(pos[i++]);
        result.push(neg[j++]);
    }
    while (i &lt; pos.length) result.push(pos[i++]);
    while (j &lt; neg.length) result.push(neg[j++]);
    return result;
}
// Input:  [1, 2, -3, -1, -2, 3]  =&gt; Output: [1, -3, 2, -1, 3, -2]
// Input:  [-5, -2, 5, 2, 4, 7]   =&gt; Output: [5, -5, 2, -2, 4, 7]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find all triplets in an array that sum to zero (3Sum)?",
                    a: `<p>Sort the array. Fix one element, then use <strong>two pointers</strong> on the rest to find pairs that sum to its negative.</p>
<pre><code>function threeSum(nums) {
    nums.sort((a, b) =&gt; a - b);
    const result = [];
    for (let i = 0; i &lt; nums.length - 2; i++) {
        if (i &gt; 0 &amp;&amp; nums[i] === nums[i - 1]) continue; // skip duplicates
        let left = i + 1, right = nums.length - 1;
        while (left &lt; right) {
            const sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                while (left &lt; right &amp;&amp; nums[left] === nums[left + 1]) left++;
                while (left &lt; right &amp;&amp; nums[right] === nums[right - 1]) right--;
                left++; right--;
            } else if (sum &lt; 0) left++;
            else right--;
        }
    }
    return result;
}
// Input:  [-1, 0, 1, 2, -1, -4]  =&gt; Output: [[-1,-1,2],[-1,0,1]]
// Input:  [0, 0, 0]               =&gt; Output: [[0,0,0]]
</code></pre>
<p><strong>Time:</strong> O(n²) &nbsp;|&nbsp; <strong>Space:</strong> O(1) extra</p>`
                },
                {
                    q: "How do you find the minimum and maximum element simultaneously?",
                    a: `<p>Process elements in <strong>pairs</strong>: compare the two with each other first, then update global min/max. This uses only <strong>3n/2 - 2</strong> comparisons instead of the naive 2n.</p>
<pre><code>function minMax(arr) {
    let min = Infinity, max = -Infinity;
    let i = 0;
    if (arr.length % 2 !== 0) {
        min = max = arr[0];
        i = 1;
    }
    while (i &lt; arr.length) {
        const [lo, hi] = arr[i] &lt; arr[i + 1]
            ? [arr[i], arr[i + 1]] : [arr[i + 1], arr[i]];
        min = Math.min(min, lo);
        max = Math.max(max, hi);
        i += 2;
    }
    return { min, max };
}
// Input:  [3, 5, 1, 8, 2, 7]  =&gt; Output: { min: 1, max: 8 }
// Input:  [9]                  =&gt; Output: { min: 9, max: 9 }
</code></pre>
<p><strong>Comparisons:</strong> ~3n/2 (pairs trick) vs ~2n (naive) &nbsp;|&nbsp; <strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
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
                },
                {
                    q: "How do you find the longest substring without repeating characters?",
                    a: `<p>Use the <strong>sliding window</strong> pattern with a Map to track the last index of each character. Shrink the left boundary when a repeat is found.</p>
<pre><code>function lengthOfLongestSubstring(s) {
    const map = new Map();
    let left = 0, best = 0;
    for (let right = 0; right &lt; s.length; right++) {
        if (map.has(s[right]) &amp;&amp; map.get(s[right]) &gt;= left) {
            left = map.get(s[right]) + 1;
        }
        map.set(s[right], right);
        best = Math.max(best, right - left + 1);
    }
    return best;
}
// Input: "abcabcbb"  =&gt; Output: 3  (window "abc")
// Input: "bbbbb"     =&gt; Output: 1  (window "b")
// Input: "pwwkew"    =&gt; Output: 3  (window "wke")
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(min(n, charset))</p>`
                },
                {
                    q: "How do you check if parentheses in a string are balanced?",
                    a: `<p>Use a <strong>stack</strong>. Push opening brackets; on a closing bracket, check the top of the stack for a match.</p>
<pre><code>function isValid(s) {
    const stack = [];
    const pairs = { ')': '(', ']': '[', '}': '{' };
    for (const ch of s) {
        if ('([{'.includes(ch)) {
            stack.push(ch);
        } else {
            if (stack.pop() !== pairs[ch]) return false;
        }
    }
    return stack.length === 0;
}
// Input: "()"       =&gt; Output: true
// Input: "()[]{}"   =&gt; Output: true
// Input: "(]"       =&gt; Output: false
// Input: "([)]"     =&gt; Output: false
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find all permutations of a string?",
                    a: `<p>Use <strong>backtracking</strong>: fix one character at a time and recursively permute the rest. Swap characters in place to avoid extra space.</p>
<pre><code>function permutations(str) {
    const result = [];
    function backtrack(arr, start) {
        if (start === arr.length) {
            result.push(arr.join(''));
            return;
        }
        for (let i = start; i &lt; arr.length; i++) {
            [arr[start], arr[i]] = [arr[i], arr[start]]; // swap
            backtrack(arr, start + 1);
            [arr[start], arr[i]] = [arr[i], arr[start]]; // undo swap
        }
    }
    backtrack(str.split(''), 0);
    return result;
}
// Input: "abc"  =&gt; Output: ["abc","acb","bac","bca","cab","cba"]
// Input: "ab"   =&gt; Output: ["ab","ba"]
</code></pre>
<p><strong>Time:</strong> O(n! × n) &nbsp;|&nbsp; <strong>Space:</strong> O(n) recursion depth</p>`
                },
                {
                    q: "How do you implement the strStr (find needle in haystack) problem?",
                    a: `<p>A clean O(n×m) brute force works well for interviews. For production, use <strong>KMP algorithm</strong> for O(n+m).</p>
<pre><code>// Brute force
function strStr(haystack, needle) {
    if (!needle) return 0;
    for (let i = 0; i &lt;= haystack.length - needle.length; i++) {
        if (haystack.slice(i, i + needle.length) === needle) return i;
    }
    return -1;
}
// Input: haystack="hello", needle="ll"   =&gt; Output: 2
// Input: haystack="aaaaa", needle="bba"  =&gt; Output: -1
// Input: haystack="sadbutsad", needle="sad" =&gt; Output: 0
</code></pre>
<p><strong>Brute force:</strong> O(n×m) time | <strong>KMP:</strong> O(n+m) time</p>`
                },
                {
                    q: "How do you count and say — generate the nth term?",
                    a: `<p>Each term describes the previous one: count consecutive identical digits and write count+digit pairs.</p>
<pre><code>function countAndSay(n) {
    let result = "1";
    for (let i = 1; i &lt; n; i++) {
        let next = '';
        let j = 0;
        while (j &lt; result.length) {
            const ch = result[j];
            let count = 0;
            while (j &lt; result.length &amp;&amp; result[j] === ch) { j++; count++; }
            next += count + ch;
        }
        result = next;
    }
    return result;
}
// Input: n=1  =&gt; Output: "1"
// Input: n=2  =&gt; Output: "11"          (one 1)
// Input: n=4  =&gt; Output: "1211"        (one 1, one 2, two 1s)
</code></pre>
<p><strong>Time:</strong> O(n × m) where m is avg string length &nbsp;|&nbsp; <strong>Space:</strong> O(m)</p>`
                },
                {
                    q: "How do you find the longest palindromic substring?",
                    a: `<p>Use <strong>expand around center</strong>: for each character (and each pair), expand outward while characters match. Track the longest expansion.</p>
<pre><code>function longestPalindrome(s) {
    let start = 0, maxLen = 1;
    function expand(l, r) {
        while (l &gt;= 0 &amp;&amp; r &lt; s.length &amp;&amp; s[l] === s[r]) { l--; r++; }
        if (r - l - 1 &gt; maxLen) { start = l + 1; maxLen = r - l - 1; }
    }
    for (let i = 0; i &lt; s.length; i++) {
        expand(i, i);     // odd length
        expand(i, i + 1); // even length
    }
    return s.substring(start, start + maxLen);
}
// Input: "babad"   =&gt; Output: "bab" (or "aba")
// Input: "cbbd"    =&gt; Output: "bb"
// Input: "racecar" =&gt; Output: "racecar"
</code></pre>
<p><strong>Time:</strong> O(n²) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you check if a string matches a pattern using wildcards (* and ?)?",
                    a: `<p>Use <strong>dynamic programming</strong>. <code>dp[i][j]</code> is true if pattern[0..j-1] matches string[0..i-1]. Handle <code>*</code> (zero or more chars) and <code>?</code> (any single char).</p>
<pre><code>function isMatch(s, p) {
    const m = s.length, n = p.length;
    const dp = Array.from({length: m+1}, () =&gt; new Array(n+1).fill(false));
    dp[0][0] = true;
    for (let j = 1; j &lt;= n; j++) dp[0][j] = p[j-1] === '*' &amp;&amp; dp[0][j-1];
    for (let i = 1; i &lt;= m; i++) {
        for (let j = 1; j &lt;= n; j++) {
            if (p[j-1] === '*') dp[i][j] = dp[i-1][j] || dp[i][j-1];
            else dp[i][j] = (p[j-1] === '?' || p[j-1] === s[i-1]) &amp;&amp; dp[i-1][j-1];
        }
    }
    return dp[m][n];
}
// Input: s="aa",  p="a"   =&gt; Output: false
// Input: s="aa",  p="*"   =&gt; Output: true
// Input: s="adceb", p="*a*b" =&gt; Output: true
</code></pre>
<p><strong>Time:</strong> O(m×n) &nbsp;|&nbsp; <strong>Space:</strong> O(m×n)</p>`
                },
                {
                    q: "How do you group anagrams together?",
                    a: `<p>Sort each word to get its canonical form, then group words with the same sorted form using a Map.</p>
<pre><code>function groupAnagrams(strs) {
    const map = new Map();
    for (const str of strs) {
        const key = str.split('').sort().join('');
        if (!map.has(key)) map.set(key, []);
        map.get(key).push(str);
    }
    return [...map.values()];
}
// Input:  ["eat","tea","tan","ate","nat","bat"]
// Output: [["eat","tea","ate"],["tan","nat"],["bat"]]

// Input:  [""]        =&gt; Output: [[""]]
// Input:  ["a"]       =&gt; Output: [["a"]]
</code></pre>
<p><strong>Time:</strong> O(n × k × log k) where k is max word length &nbsp;|&nbsp; <strong>Space:</strong> O(n × k)</p>`
                },
                {
                    q: "How do you convert a string of Roman numerals to an integer?",
                    a: `<p>Process from right to left. If the current value is less than the value to its right, subtract it; otherwise add it.</p>
<pre><code>function romanToInt(s) {
    const val = { I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    let result = 0;
    for (let i = 0; i &lt; s.length; i++) {
        const curr = val[s[i]], next = val[s[i + 1]];
        if (next &amp;&amp; curr &lt; next) result -= curr;
        else result += curr;
    }
    return result;
}
// Input: "III"     =&gt; Output: 3
// Input: "IV"      =&gt; Output: 4   (I before V = subtract)
// Input: "MCMXCIV" =&gt; Output: 1994
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the minimum window substring containing all characters of a target?",
                    a: `<p>Use a <strong>sliding window</strong> with two frequency maps: required characters vs window characters. Expand right until all covered, then shrink left.</p>
<pre><code>function minWindow(s, t) {
    const need = {}, window = {};
    for (const c of t) need[c] = (need[c] || 0) + 1;
    let have = 0, required = Object.keys(need).length;
    let left = 0, res = '', minLen = Infinity;
    for (let right = 0; right &lt; s.length; right++) {
        const c = s[right];
        window[c] = (window[c] || 0) + 1;
        if (need[c] &amp;&amp; window[c] === need[c]) have++;
        while (have === required) {
            if (right - left + 1 &lt; minLen) {
                minLen = right - left + 1;
                res = s.slice(left, right + 1);
            }
            window[s[left]]--;
            if (need[s[left]] &amp;&amp; window[s[left]] &lt; need[s[left]]) have--;
            left++;
        }
    }
    return res;
}
// Input: s="ADOBECODEBANC", t="ABC"  =&gt; Output: "BANC"
// Input: s="a", t="a"               =&gt; Output: "a"
</code></pre>
<p><strong>Time:</strong> O(n + m) &nbsp;|&nbsp; <strong>Space:</strong> O(n + m)</p>`
                },
                {
                    q: "How do you check if a string is a valid number?",
                    a: `<p>Validate structure: optional sign, digits, optional decimal point with digits, optional exponent with sign and digits.</p>
<pre><code>function isNumber(s) {
    s = s.trim();
    // Regex approach — covers all valid cases
    return /^[+-]?(\d+\.?\d*|\.\d+)([eE][+-]?\d+)?$/.test(s);
}
// Manual flag approach:
function isNumberManual(s) {
    let seenDigit = false, seenDot = false, seenE = false;
    s = s.trim();
    for (let i = 0; i &lt; s.length; i++) {
        const c = s[i];
        if ('0' &lt;= c &amp;&amp; c &lt;= '9') seenDigit = true;
        else if (c === '.') { if (seenDot || seenE) return false; seenDot = true; }
        else if (c === 'e' || c === 'E') { if (seenE || !seenDigit) return false; seenE = true; seenDigit = false; }
        else if (c === '+' || c === '-') { if (i !== 0 &amp;&amp; s[i-1] !== 'e' &amp;&amp; s[i-1] !== 'E') return false; }
        else return false;
    }
    return seenDigit;
}
// Input: "2"      =&gt; Output: true
// Input: "0089"   =&gt; Output: true
// Input: "e3"     =&gt; Output: false
// Input: "1e"     =&gt; Output: false
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the longest common prefix of an array of strings?",
                    a: `<p>Use <strong>vertical scanning</strong>: compare character by character column-wise across all strings. Stop at the first mismatch.</p>
<pre><code>function longestCommonPrefix(strs) {
    if (!strs.length) return '';
    for (let i = 0; i &lt; strs[0].length; i++) {
        const ch = strs[0][i];
        for (let j = 1; j &lt; strs.length; j++) {
            if (i &gt;= strs[j].length || strs[j][i] !== ch) {
                return strs[0].slice(0, i);
            }
        }
    }
    return strs[0];
}
// Input: ["flower","flow","flight"]   =&gt; Output: "fl"
// Input: ["dog","racecar","car"]      =&gt; Output: ""
// Input: ["interview","internet","intercept"] =&gt; Output: "inter"
</code></pre>
<p><strong>Time:</strong> O(n × m) where m is shortest string length &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you reverse words in a sentence?",
                    a: `<p>Split by spaces, reverse the array, then join. Handle multiple spaces and leading/trailing whitespace.</p>
<pre><code>function reverseWords(s) {
    return s.trim().split(/\s+/).reverse().join(' ');
}
// Input: "the sky is blue"   =&gt; Output: "blue is sky the"
// Input: "  hello world  "   =&gt; Output: "world hello"
// Input: "a good   example"  =&gt; Output: "example good a"

// In-place without split (for interview challenge):
function reverseWordsInPlace(s) {
    const arr = s.trim().split(/\s+/);
    let l = 0, r = arr.length - 1;
    while (l &lt; r) { [arr[l], arr[r]] = [arr[r], arr[l]]; l++; r--; }
    return arr.join(' ');
}
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you implement a basic calculator for +, -, with parentheses?",
                    a: `<p>Use a <strong>stack</strong> to save state when entering parentheses. Track current number and sign as you scan.</p>
<pre><code>function calculate(s) {
    const stack = [];
    let num = 0, sign = 1, result = 0;
    for (const ch of s) {
        if (ch &gt;= '0' &amp;&amp; ch &lt;= '9') {
            num = num * 10 + Number(ch);
        } else if (ch === '+' || ch === '-') {
            result += sign * num;
            num = 0;
            sign = ch === '+' ? 1 : -1;
        } else if (ch === '(') {
            stack.push(result, sign); // save state
            result = 0; sign = 1;
        } else if (ch === ')') {
            result += sign * num;
            num = 0;
            result *= stack.pop(); // apply saved sign
            result += stack.pop(); // restore saved result
        }
    }
    return result + sign * num;
}
// Input: "1 + 1"        =&gt; Output: 2
// Input: " 2-1 + 2 "   =&gt; Output: 3
// Input: "(1+(4+5+2)-3)+(6+8)" =&gt; Output: 23
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
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
                },
                {
                    q: "How do you find the middle node of a linked list?",
                    a: `<p>Use the <strong>slow and fast pointer</strong> technique. Slow moves one step, fast moves two steps. When fast reaches the end, slow is at the middle.</p>
<pre><code>function findMiddle(head) {
    let slow = head, fast = head;
    while (fast &amp;&amp; fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }
    return slow; // middle node
}
// Input: 1 -&gt; 2 -&gt; 3 -&gt; 4 -&gt; 5   =&gt; Output: node 3
// Input: 1 -&gt; 2 -&gt; 3 -&gt; 4        =&gt; Output: node 3 (second middle)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you detect and find the start of a cycle in a linked list?",
                    a: `<p>Use <strong>Floyd's cycle detection</strong>. Phase 1: slow &amp; fast pointers meet inside the cycle. Phase 2: reset one pointer to head — they meet at the cycle start.</p>
<pre><code>function detectCycleStart(head) {
    let slow = head, fast = head;
    // Phase 1: detect cycle
    while (fast &amp;&amp; fast.next) {
        slow = slow.next;
        fast = fast.next.next;
        if (slow === fast) break;
    }
    if (!fast || !fast.next) return null; // no cycle
    // Phase 2: find start
    slow = head;
    while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow; // cycle start node
}
// Input: 3 -&gt; 2 -&gt; 0 -&gt; -4 (tail connects to node 2)  =&gt; Output: node 2
// Input: 1 -&gt; 2 (tail connects to node 1)               =&gt; Output: node 1
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you merge two sorted linked lists?",
                    a: `<p>Use a <strong>dummy head</strong> node and compare the current nodes of both lists, advancing the smaller one each time.</p>
<pre><code>function mergeTwoLists(l1, l2) {
    const dummy = { next: null };
    let curr = dummy;
    while (l1 &amp;&amp; l2) {
        if (l1.val &lt;= l2.val) { curr.next = l1; l1 = l1.next; }
        else                  { curr.next = l2; l2 = l2.next; }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
}
// Input: 1-&gt;2-&gt;4, 1-&gt;3-&gt;4   =&gt; Output: 1-&gt;1-&gt;2-&gt;3-&gt;4-&gt;4
// Input: [], 0               =&gt; Output: 0
</code></pre>
<p><strong>Time:</strong> O(n + m) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the nth node from the end of a linked list?",
                    a: `<p>Use two pointers. Advance the fast pointer n steps ahead, then move both until fast reaches the end. Slow is now at the nth-from-end node.</p>
<pre><code>function removeNthFromEnd(head, n) {
    const dummy = { next: head };
    let fast = dummy, slow = dummy;
    for (let i = 0; i &lt;= n; i++) fast = fast.next;
    while (fast) {
        fast = fast.next;
        slow = slow.next;
    }
    slow.next = slow.next.next; // remove nth from end
    return dummy.next;
}
// Input: 1-&gt;2-&gt;3-&gt;4-&gt;5, n=2  =&gt; Output: 1-&gt;2-&gt;3-&gt;5
// Input: 1, n=1               =&gt; Output: []
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you check if a linked list is a palindrome?",
                    a: `<p>Find the middle (slow/fast pointers), reverse the second half, then compare both halves from outside in.</p>
<pre><code>function isPalindrome(head) {
    // 1. Find middle
    let slow = head, fast = head;
    while (fast &amp;&amp; fast.next) { slow = slow.next; fast = fast.next.next; }
    // 2. Reverse second half
    let prev = null, curr = slow;
    while (curr) { const tmp = curr.next; curr.next = prev; prev = curr; curr = tmp; }
    // 3. Compare
    let left = head, right = prev;
    while (right) {
        if (left.val !== right.val) return false;
        left = left.next; right = right.next;
    }
    return true;
}
// Input: 1-&gt;2-&gt;2-&gt;1   =&gt; Output: true
// Input: 1-&gt;2          =&gt; Output: false
// Input: 1-&gt;2-&gt;3-&gt;2-&gt;1 =&gt; Output: true
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you rotate a linked list to the right by k places?",
                    a: `<p>Connect the tail to the head to form a circle. The new tail is at position (length - k % length - 1). Break the circle there.</p>
<pre><code>function rotateRight(head, k) {
    if (!head || !head.next || k === 0) return head;
    let tail = head, len = 1;
    while (tail.next) { tail = tail.next; len++; }
    tail.next = head; // make circular
    const steps = len - (k % len);
    let newTail = head;
    for (let i = 1; i &lt; steps; i++) newTail = newTail.next;
    const newHead = newTail.next;
    newTail.next = null;
    return newHead;
}
// Input: 1-&gt;2-&gt;3-&gt;4-&gt;5, k=2  =&gt; Output: 4-&gt;5-&gt;1-&gt;2-&gt;3
// Input: 0-&gt;1-&gt;2, k=4         =&gt; Output: 2-&gt;0-&gt;1
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you add two numbers represented as linked lists?",
                    a: `<p>Digits are stored in <strong>reverse order</strong>. Traverse both lists simultaneously, sum digits plus carry, and build the result list.</p>
<pre><code>function addTwoNumbers(l1, l2) {
    const dummy = { next: null };
    let curr = dummy, carry = 0;
    while (l1 || l2 || carry) {
        const sum = (l1?.val || 0) + (l2?.val || 0) + carry;
        carry = Math.floor(sum / 10);
        curr.next = { val: sum % 10, next: null };
        curr = curr.next;
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }
    return dummy.next;
}
// Input: (2-&gt;4-&gt;3) + (5-&gt;6-&gt;4) [342 + 465]  =&gt; Output: 7-&gt;0-&gt;8 [807]
// Input: (0) + (0)                             =&gt; Output: 0
</code></pre>
<p><strong>Time:</strong> O(max(n, m)) &nbsp;|&nbsp; <strong>Space:</strong> O(max(n, m) + 1) for result</p>`
                },
                {
                    q: "How do you remove duplicates from a sorted linked list?",
                    a: `<p>Traverse the list; whenever <code>curr.val === curr.next.val</code>, skip the next node by rewiring pointers.</p>
<pre><code>function deleteDuplicates(head) {
    let curr = head;
    while (curr &amp;&amp; curr.next) {
        if (curr.val === curr.next.val) {
            curr.next = curr.next.next; // skip duplicate
        } else {
            curr = curr.next;
        }
    }
    return head;
}
// Input: 1-&gt;1-&gt;2         =&gt; Output: 1-&gt;2
// Input: 1-&gt;1-&gt;2-&gt;3-&gt;3   =&gt; Output: 1-&gt;2-&gt;3
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the intersection point of two linked lists?",
                    a: `<p>Use two pointers. When pointer A reaches the end of list A, redirect it to head of list B, and vice versa. They meet at the intersection (or both reach null if no intersection).</p>
<pre><code>function getIntersectionNode(headA, headB) {
    let a = headA, b = headB;
    while (a !== b) {
        a = a ? a.next : headB;
        b = b ? b.next : headA;
    }
    return a; // intersection node or null
}
// List A: 4-&gt;1-&gt;8-&gt;4-&gt;5
// List B: 5-&gt;6-&gt;1-&gt;8-&gt;4-&gt;5   =&gt; Output: node with value 8
</code></pre>
<p><strong>Time:</strong> O(n + m) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you flatten a multilevel doubly linked list?",
                    a: `<p>Use a <strong>stack</strong>. When a node has a child, push the next node onto the stack and continue down the child. When next is null, pop from the stack.</p>
<pre><code>function flatten(head) {
    if (!head) return head;
    const stack = [];
    let curr = head;
    while (curr) {
        if (curr.child) {
            if (curr.next) stack.push(curr.next);
            curr.next = curr.child;
            curr.child.prev = curr;
            curr.child = null;
        }
        if (!curr.next &amp;&amp; stack.length) {
            const next = stack.pop();
            curr.next = next;
            next.prev = curr;
        }
        curr = curr.next;
    }
    return head;
}
// Input:  1 - 2 - 3 - 4 (3 has child 7 - 8 - 9)
// Output: 1 - 2 - 3 - 7 - 8 - 9 - 4
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(depth)</p>`
                },
                {
                    q: "How do you sort a linked list using merge sort?",
                    a: `<p><strong>Merge sort</strong> is ideal for linked lists (unlike quicksort which needs random access). Split at the middle using slow/fast pointers, recursively sort halves, then merge.</p>
<pre><code>function sortList(head) {
    if (!head || !head.next) return head;
    // Find middle and split
    let slow = head, fast = head.next;
    while (fast &amp;&amp; fast.next) { slow = slow.next; fast = fast.next.next; }
    const mid = slow.next;
    slow.next = null; // split
    // Recurse and merge
    return merge(sortList(head), sortList(mid));
}
function merge(l1, l2) {
    const dummy = {};
    let curr = dummy;
    while (l1 &amp;&amp; l2) {
        if (l1.val &lt;= l2.val) { curr.next = l1; l1 = l1.next; }
        else { curr.next = l2; l2 = l2.next; }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
}
// Input: 4-&gt;2-&gt;1-&gt;3   =&gt; Output: 1-&gt;2-&gt;3-&gt;4
// Input: -1-&gt;5-&gt;3-&gt;4-&gt;0 =&gt; Output: -1-&gt;0-&gt;3-&gt;4-&gt;5
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(log n) recursion stack</p>`
                },
                {
                    q: "How do you copy a linked list with random pointers?",
                    a: `<p>Use a <strong>Map</strong> from original nodes to their clones. First pass: create all clones. Second pass: wire <code>next</code> and <code>random</code> pointers using the map.</p>
<pre><code>function copyRandomList(head) {
    if (!head) return null;
    const map = new Map();
    let curr = head;
    // Pass 1: create all clone nodes
    while (curr) { map.set(curr, { val: curr.val, next: null, random: null }); curr = curr.next; }
    // Pass 2: wire pointers
    curr = head;
    while (curr) {
        if (curr.next)   map.get(curr).next   = map.get(curr.next);
        if (curr.random) map.get(curr).random = map.get(curr.random);
        curr = curr.next;
    }
    return map.get(head);
}
// Input: [[7,null],[13,0],[11,4],[10,2],[1,0]]
// Output: deep copy with same structure
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you swap nodes in pairs in a linked list?",
                    a: `<p>Iteratively swap every two adjacent nodes. Use a <strong>dummy head</strong> to handle edge cases. Rewire the three pointer connections per pair.</p>
<pre><code>function swapPairs(head) {
    const dummy = { next: head };
    let prev = dummy;
    while (prev.next &amp;&amp; prev.next.next) {
        const a = prev.next;
        const b = prev.next.next;
        prev.next = b;
        a.next = b.next;
        b.next = a;
        prev = a; // a is now behind b in the new order
    }
    return dummy.next;
}
// Input: 1-&gt;2-&gt;3-&gt;4   =&gt; Output: 2-&gt;1-&gt;4-&gt;3
// Input: 1-&gt;2-&gt;3       =&gt; Output: 2-&gt;1-&gt;3
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you reorder a linked list (L0 → Ln → L1 → Ln-1 → ...)?",
                    a: `<p>Three steps: (1) find the middle, (2) reverse the second half, (3) interleave both halves.</p>
<pre><code>function reorderList(head) {
    // 1. Find middle
    let slow = head, fast = head;
    while (fast.next &amp;&amp; fast.next.next) { slow = slow.next; fast = fast.next.next; }
    // 2. Reverse second half
    let prev = null, curr = slow.next;
    slow.next = null;
    while (curr) { const tmp = curr.next; curr.next = prev; prev = curr; curr = tmp; }
    // 3. Merge
    let l1 = head, l2 = prev;
    while (l2) {
        const tmp1 = l1.next, tmp2 = l2.next;
        l1.next = l2; l2.next = tmp1;
        l1 = tmp1; l2 = tmp2;
    }
}
// Input: 1-&gt;2-&gt;3-&gt;4       =&gt; Output: 1-&gt;4-&gt;2-&gt;3
// Input: 1-&gt;2-&gt;3-&gt;4-&gt;5    =&gt; Output: 1-&gt;5-&gt;2-&gt;4-&gt;3
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
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
                },
                {
                    q: "How do you evaluate a postfix (Reverse Polish Notation) expression?",
                    a: `<p>Use a <strong>stack</strong>. Push numbers; on an operator, pop two numbers, apply the operator, push the result.</p>
<pre><code>function evalRPN(tokens) {
    const stack = [];
    for (const token of tokens) {
        if (['+','-','*','/'].includes(token)) {
            const b = stack.pop(), a = stack.pop();
            if (token === '+') stack.push(a + b);
            else if (token === '-') stack.push(a - b);
            else if (token === '*') stack.push(a * b);
            else stack.push(Math.trunc(a / b)); // truncate toward zero
        } else {
            stack.push(Number(token));
        }
    }
    return stack[0];
}
// Input: ["2","1","+","3","*"]         =&gt; Output: 9   ((2+1)*3)
// Input: ["4","13","5","/","+"]        =&gt; Output: 6   (4+(13/5))
// Input: ["10","6","9","3","+","-11","*","/","*","17","+","5","+"]
//                                      =&gt; Output: 22
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the largest rectangle in a histogram?",
                    a: `<p>Use a <strong>monotonic increasing stack</strong>. Push indices; when a shorter bar is found, pop and compute areas using the popped bar as the shortest. Track running max.</p>
<pre><code>function largestRectangleArea(heights) {
    const stack = [];
    heights.push(0); // sentinel to flush stack
    let maxArea = 0;
    for (let i = 0; i &lt; heights.length; i++) {
        while (stack.length &amp;&amp; heights[stack[stack.length-1]] &gt; heights[i]) {
            const h = heights[stack.pop()];
            const w = stack.length ? i - stack[stack.length-1] - 1 : i;
            maxArea = Math.max(maxArea, h * w);
        }
        stack.push(i);
    }
    return maxArea;
}
// Input: [2,1,5,6,2,3]   =&gt; Output: 10  (bars 5 and 6, width 2)
// Input: [2,4]            =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you implement a min stack that supports getMin() in O(1)?",
                    a: `<p>Use <strong>two stacks</strong>: a main stack and a min stack. The min stack always tracks the minimum at each level.</p>
<pre><code>class MinStack {
    constructor() { this.stack = []; this.minStack = []; }
    push(val) {
        this.stack.push(val);
        const min = this.minStack.length
            ? Math.min(val, this.minStack[this.minStack.length-1])
            : val;
        this.minStack.push(min);
    }
    pop() { this.stack.pop(); this.minStack.pop(); }
    top() { return this.stack[this.stack.length-1]; }
    getMin() { return this.minStack[this.minStack.length-1]; }
}
// After push(-2), push(0), push(-3): getMin() =&gt; -3
// After pop(): getMin() =&gt; -2
</code></pre>
<p><strong>Time:</strong> O(1) for all ops &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you generate all valid combinations of n pairs of parentheses?",
                    a: `<p>Use <strong>backtracking</strong>: track open and close counts. Add <code>(</code> if open &lt; n, add <code>)</code> if close &lt; open.</p>
<pre><code>function generateParenthesis(n) {
    const result = [];
    function backtrack(s, open, close) {
        if (s.length === 2 * n) { result.push(s); return; }
        if (open &lt; n)     backtrack(s + '(', open + 1, close);
        if (close &lt; open) backtrack(s + ')', open, close + 1);
    }
    backtrack('', 0, 0);
    return result;
}
// Input: n=1   =&gt; Output: ["()"]
// Input: n=2   =&gt; Output: ["(())","()()"]
// Input: n=3   =&gt; Output: ["((()))","(()())","(())()","()(())","()()()"]
</code></pre>
<p><strong>Time:</strong> O(4ⁿ / √n) Catalan number &nbsp;|&nbsp; <strong>Space:</strong> O(n) recursion depth</p>`
                },
                {
                    q: "How do you decode a string (e.g., '3[a2[bc]]' → 'abcbcabcbcabcbc')?",
                    a: `<p>Use a <strong>stack</strong> to save the current string and multiplier before each <code>[</code>. On <code>]</code>, pop and repeat the inner string.</p>
<pre><code>function decodeString(s) {
    const numStack = [], strStack = [];
    let currStr = '', currNum = 0;
    for (const ch of s) {
        if (ch &gt;= '0' &amp;&amp; ch &lt;= '9') {
            currNum = currNum * 10 + Number(ch);
        } else if (ch === '[') {
            numStack.push(currNum); strStack.push(currStr);
            currNum = 0; currStr = '';
        } else if (ch === ']') {
            const times = numStack.pop();
            currStr = strStack.pop() + currStr.repeat(times);
        } else {
            currStr += ch;
        }
    }
    return currStr;
}
// Input: "3[a]2[bc]"      =&gt; Output: "aaabcbc"
// Input: "3[a2[c]]"       =&gt; Output: "accaccacc"
// Input: "2[abc]3[cd]ef"  =&gt; Output: "abcabccdcdcdef"
</code></pre>
<p><strong>Time:</strong> O(n × max_k) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the next greater element for each element in an array?",
                    a: `<p>Use a <strong>monotonic decreasing stack</strong>. Iterate the array; when a larger element is found, it becomes the "next greater" for all smaller elements waiting in the stack.</p>
<pre><code>function nextGreaterElement(nums) {
    const result = new Array(nums.length).fill(-1);
    const stack = []; // stores indices
    for (let i = 0; i &lt; nums.length; i++) {
        while (stack.length &amp;&amp; nums[stack[stack.length-1]] &lt; nums[i]) {
            result[stack.pop()] = nums[i];
        }
        stack.push(i);
    }
    return result;
}
// Input: [2,1,2,4,3]   =&gt; Output: [4,2,4,-1,-1]
// Input: [1,3,2,4]     =&gt; Output: [3,4,4,-1]
</code></pre>
<p><strong>Time:</strong> O(n) — each element is pushed/popped at most once &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you implement a stack using two queues?",
                    a: `<p>For each push, enqueue to queue2, then drain queue1 into queue2, then swap q1 and q2. This ensures the newest element is always at the front of q1.</p>
<pre><code>class MyStack {
    constructor() { this.q1 = []; this.q2 = []; }
    push(x) {
        this.q2.push(x);
        while (this.q1.length) this.q2.push(this.q1.shift());
        [this.q1, this.q2] = [this.q2, this.q1];
    }
    pop() { return this.q1.shift(); }
    top() { return this.q1[0]; }
    empty() { return this.q1.length === 0; }
}
// push(1), push(2): top() =&gt; 2 (LIFO order)
// pop() =&gt; 2; top() =&gt; 1
</code></pre>
<p><strong>Time:</strong> push O(n), pop O(1) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you remove all adjacent duplicates from a string using a stack?",
                    a: `<p>Use a <strong>stack</strong>. For each character, if it matches the top of the stack, pop (cancel both); otherwise push. The stack contains the result when done.</p>
<pre><code>function removeDuplicates(s) {
    const stack = [];
    for (const ch of s) {
        if (stack.length &amp;&amp; stack[stack.length-1] === ch) {
            stack.pop(); // cancel pair
        } else {
            stack.push(ch);
        }
    }
    return stack.join('');
}
// Input: "abbaca"   =&gt; Output: "ca"   (ab -&gt; a, bb -&gt; "", ac -&gt; ac, aa -&gt; c)
// Input: "azxxzy"   =&gt; Output: "ay"
// Input: "aaa"      =&gt; Output: "a"
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the daily temperatures — days to wait for a warmer day?",
                    a: `<p>Use a <strong>monotonic decreasing stack</strong> of indices. When a warmer temperature is found, resolve all waiting days from the stack by computing the gap.</p>
<pre><code>function dailyTemperatures(temperatures) {
    const result = new Array(temperatures.length).fill(0);
    const stack = []; // monotonic decreasing stack of indices
    for (let i = 0; i &lt; temperatures.length; i++) {
        while (stack.length &amp;&amp; temperatures[stack[stack.length-1]] &lt; temperatures[i]) {
            const idx = stack.pop();
            result[idx] = i - idx;
        }
        stack.push(i);
    }
    return result;
}
// Input: [73,74,75,71,69,72,76,73]  =&gt; Output: [1,1,4,2,1,1,0,0]
// Input: [30,40,50,60]              =&gt; Output: [1,1,1,0]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you simplify a Unix file path (e.g., '/a/./b/../../c/' → '/c')?",
                    a: `<p>Split by <code>/</code> and use a <strong>stack</strong>. Push directory names; for <code>..</code>, pop; ignore <code>.</code> and empty strings. Join with <code>/</code>.</p>
<pre><code>function simplifyPath(path) {
    const stack = [];
    for (const part of path.split('/')) {
        if (part === '..') { if (stack.length) stack.pop(); }
        else if (part &amp;&amp; part !== '.') stack.push(part);
    }
    return '/' + stack.join('/');
}
// Input: "/home/"                =&gt; Output: "/home"
// Input: "/../"                  =&gt; Output: "/"
// Input: "/a/./b/../../c/"       =&gt; Output: "/c"
// Input: "/a//b////c/d//././/.." =&gt; Output: "/a/b/c"
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you perform an iterative in-order traversal of a binary tree using a stack?",
                    a: `<p>Simulate the recursive call stack. Push left children until null, process node, then move right — repeatedly.</p>
<pre><code>function inorderTraversal(root) {
    const result = [], stack = [];
    let curr = root;
    while (curr || stack.length) {
        while (curr) { stack.push(curr); curr = curr.left; }
        curr = stack.pop();
        result.push(curr.val);   // visit
        curr = curr.right;
    }
    return result;
}
// Input tree:  2
//             / \
//            1   3
// Output: [1, 2, 3]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h) where h is tree height</p>`
                },
                {
                    q: "How do you trap rain water between bars (stack approach)?",
                    a: `<p>Use a <strong>stack</strong> to track bars. When a taller bar is found, water can be trapped between it and the bar at the second-to-top of the stack.</p>
<pre><code>function trap(height) {
    const stack = [];
    let water = 0;
    for (let i = 0; i &lt; height.length; i++) {
        while (stack.length &amp;&amp; height[stack[stack.length-1]] &lt; height[i]) {
            const bottom = stack.pop();
            if (!stack.length) break;
            const left = stack[stack.length-1];
            const h = Math.min(height[left], height[i]) - height[bottom];
            water += h * (i - left - 1);
        }
        stack.push(i);
    }
    return water;
}
// Input: [0,1,0,2,1,0,1,3,2,1,2,1]   =&gt; Output: 6
// Input: [4,2,0,3,2,5]               =&gt; Output: 9
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you check if a sequence of push and pop operations on a stack is valid?",
                    a: `<p>Simulate: push elements in order and whenever the stack top equals the next expected pop value, pop it. At the end, the stack should be empty.</p>
<pre><code>function validateStackSequences(pushed, popped) {
    const stack = [];
    let j = 0; // pointer into popped
    for (const val of pushed) {
        stack.push(val);
        while (stack.length &amp;&amp; stack[stack.length-1] === popped[j]) {
            stack.pop(); j++;
        }
    }
    return stack.length === 0;
}
// Input: pushed=[1,2,3,4,5], popped=[4,5,3,2,1]   =&gt; Output: true
// Input: pushed=[1,2,3,4,5], popped=[4,3,5,1,2]   =&gt; Output: false
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you implement a browser history system using stacks?",
                    a: `<p>Use two stacks: <strong>back</strong> and <strong>forward</strong>. Visit clears the forward stack and pushes to back. Back/forward swap between stacks.</p>
<pre><code>class BrowserHistory {
    constructor(homepage) {
        this.back = [homepage];
        this.forward = [];
    }
    visit(url) {
        this.back.push(url);
        this.forward = []; // clear forward history
    }
    goBack(steps) {
        while (steps-- &gt; 0 &amp;&amp; this.back.length &gt; 1) {
            this.forward.push(this.back.pop());
        }
        return this.back[this.back.length - 1];
    }
    goForward(steps) {
        while (steps-- &gt; 0 &amp;&amp; this.forward.length) {
            this.back.push(this.forward.pop());
        }
        return this.back[this.back.length - 1];
    }
}
// start("leetcode.com"); visit("google.com"); visit("facebook.com")
// goBack(1) =&gt; "google.com"
// goForward(1) =&gt; "facebook.com"
</code></pre>
<p><strong>Time:</strong> O(steps) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
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
                },
                {
                    q: "How do you implement a queue using two stacks?",
                    a: `<p>Use an <strong>input stack</strong> and an <strong>output stack</strong>. Enqueue goes to input; dequeue lazily moves all elements from input to output, reversing order (FIFO).</p>
<pre><code>class MyQueue {
    constructor() { this.inbox = []; this.outbox = []; }
    push(x) { this.inbox.push(x); }
    pop() {
        this._refill();
        return this.outbox.pop();
    }
    peek() {
        this._refill();
        return this.outbox[this.outbox.length - 1];
    }
    empty() { return !this.inbox.length &amp;&amp; !this.outbox.length; }
    _refill() {
        if (!this.outbox.length)
            while (this.inbox.length) this.outbox.push(this.inbox.pop());
    }
}
// push(1), push(2), peek() =&gt; 1, pop() =&gt; 1, empty() =&gt; false
</code></pre>
<p><strong>Amortized Time:</strong> O(1) per operation &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you design a circular queue (ring buffer)?",
                    a: `<p>Use a fixed-size array with <strong>head</strong>, <strong>tail</strong>, and <strong>count</strong> variables. Wrap indices with modulus.</p>
<pre><code>class CircularQueue {
    constructor(k) { this.q = new Array(k); this.k = k; this.head = 0; this.tail = 0; this.count = 0; }
    enQueue(val) {
        if (this.isFull()) return false;
        this.q[this.tail] = val;
        this.tail = (this.tail + 1) % this.k;
        this.count++;
        return true;
    }
    deQueue() {
        if (this.isEmpty()) return false;
        this.head = (this.head + 1) % this.k;
        this.count--;
        return true;
    }
    Front() { return this.isEmpty() ? -1 : this.q[this.head]; }
    Rear()  { return this.isEmpty() ? -1 : this.q[(this.tail - 1 + this.k) % this.k]; }
    isEmpty() { return this.count === 0; }
    isFull()  { return this.count === this.k; }
}
// new CircularQueue(3): enQueue(1)=T, enQueue(2)=T, enQueue(3)=T
// enQueue(4)=false (full), Rear()=3, deQueue()=T, enQueue(4)=T
</code></pre>
<p><strong>Time:</strong> O(1) for all ops &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How do you perform level-order traversal (BFS) of a binary tree?",
                    a: `<p>Use a <strong>queue</strong> (FIFO). Start with root, process nodes level by level: dequeue, visit, enqueue children.</p>
<pre><code>function levelOrder(root) {
    if (!root) return [];
    const result = [], queue = [root];
    while (queue.length) {
        const levelSize = queue.length;
        const level = [];
        for (let i = 0; i &lt; levelSize; i++) {
            const node = queue.shift();
            level.push(node.val);
            if (node.left)  queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}
// Tree:   3
//        / \
//       9  20
//          / \
//         15   7
// Output: [[3],[9,20],[15,7]]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(w) where w is max width</p>`
                },
                {
                    q: "How do you find the shortest path in an unweighted grid using BFS?",
                    a: `<p>BFS guarantees the shortest path in unweighted graphs. Enqueue (row, col, steps), mark cells visited immediately upon enqueueing to avoid revisiting.</p>
<pre><code>function shortestPath(grid, start, end) {
    const rows = grid.length, cols = grid[0].length;
    const visited = Array.from({length: rows}, () =&gt; new Array(cols).fill(false));
    const queue = [[...start, 0]]; // [row, col, steps]
    visited[start[0]][start[1]] = true;
    const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
    while (queue.length) {
        const [r, c, steps] = queue.shift();
        if (r === end[0] &amp;&amp; c === end[1]) return steps;
        for (const [dr, dc] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr &gt;= 0 &amp;&amp; nr &lt; rows &amp;&amp; nc &gt;= 0 &amp;&amp; nc &lt; cols
                &amp;&amp; !visited[nr][nc] &amp;&amp; grid[nr][nc] !== 1) {
                visited[nr][nc] = true;
                queue.push([nr, nc, steps + 1]);
            }
        }
    }
    return -1; // no path
}
// Grid 0=open 1=wall: [[0,0,0],[1,1,0],[0,0,0]]
// start=[0,0], end=[2,2]  =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(rows × cols) &nbsp;|&nbsp; <strong>Space:</strong> O(rows × cols)</p>`
                },
                {
                    q: "How do you implement a sliding window maximum using a deque?",
                    a: `<p>Use a <strong>monotonic decreasing deque</strong> of indices. Remove indices that fall outside the window (from front), and remove smaller elements (from back). Front always holds the max.</p>
<pre><code>function maxSlidingWindow(nums, k) {
    const deque = [], result = [];
    for (let i = 0; i &lt; nums.length; i++) {
        // Remove out-of-window indices
        while (deque.length &amp;&amp; deque[0] &lt; i - k + 1) deque.shift();
        // Remove smaller elements
        while (deque.length &amp;&amp; nums[deque[deque.length-1]] &lt; nums[i]) deque.pop();
        deque.push(i);
        if (i &gt;= k - 1) result.push(nums[deque[0]]);
    }
    return result;
}
// Input: nums=[1,3,-1,-3,5,3,6,7], k=3   =&gt; Output: [3,3,5,5,6,7]
// Input: nums=[1], k=1                    =&gt; Output: [1]
</code></pre>
<p><strong>Time:</strong> O(n) — each element pushed/popped at most once &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How do you find the first non-repeating character in a stream using a queue?",
                    a: `<p>Use a <strong>queue</strong> and a frequency map. Queue holds candidates in order. On each query, pop from the front while the front character has frequency &gt; 1.</p>
<pre><code>function firstNonRepeating(stream) {
    const freq = {}, order = [];
    const result = [];
    for (const ch of stream) {
        freq[ch] = (freq[ch] || 0) + 1;
        order.push(ch);
        while (order.length &amp;&amp; freq[order[0]] &gt; 1) order.shift();
        result.push(order.length ? order[0] : '#');
    }
    return result;
}
// Input: "aabc"  =&gt; Output: ["a","#","b","b"]
// Input: "aababc" =&gt; Output: ["a","#","b","b","b","c"]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you implement task scheduling with cooldown using a queue?",
                    a: `<p>Use a <strong>max-heap</strong> (priority queue) for frequencies and a cooldown queue. At each time unit, use the most frequent available task.</p>
<pre><code>function leastInterval(tasks, n) {
    const freq = {};
    for (const t of tasks) freq[t] = (freq[t] || 0) + 1;
    // MaxHeap simulation using sorted array (simplified)
    let heap = Object.values(freq).sort((a, b) =&gt; b - a);
    let time = 0;
    const cooldown = []; // [freq, availableAt]
    while (heap.length || cooldown.length) {
        time++;
        if (heap.length) {
            const top = heap.shift() - 1;
            if (top &gt; 0) cooldown.push([top, time + n]);
        }
        // Re-add tasks that have cooled down
        if (cooldown.length &amp;&amp; cooldown[0][1] === time) {
            heap.push(cooldown.shift()[0]);
            heap.sort((a, b) =&gt; b - a);
        }
    }
    return time;
}
// Input: tasks=["A","A","A","B","B","B"], n=2  =&gt; Output: 8
// Input: tasks=["A","A","A","B","B","B"], n=0  =&gt; Output: 6
</code></pre>
<p><strong>Time:</strong> Approximately O(n log k) &nbsp;|&nbsp; <strong>Space:</strong> O(k) where k is unique tasks</p>`
                },
                {
                    q: "How do you connect next right pointers in a perfect binary tree using a queue?",
                    a: `<p>Process each node: if it has a left child, connect <code>left.next = right</code>. If it has a <code>next</code> sibling, connect <code>right.next = next.left</code>. Traverse level by level.</p>
<pre><code>function connect(root) {
    if (!root) return null;
    const queue = [root];
    while (queue.length) {
        const size = queue.length;
        for (let i = 0; i &lt; size; i++) {
            const node = queue.shift();
            if (i &lt; size - 1) node.next = queue[0]; // link within level
            if (node.left)  queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
    }
    return root;
}
// Perfect tree:   1
//               /   \
//              2     3
//             / \   / \
//            4  5  6   7
// After connect: 1-&gt;null, 2-&gt;3-&gt;null, 4-&gt;5-&gt;6-&gt;7-&gt;null
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(w) max queue width</p>`
                },
                {
                    q: "How do you find all nodes at distance K from a target node in a binary tree?",
                    a: `<p>Convert the tree to an undirected graph (track parents), then do a <strong>BFS</strong> from the target node to distance K.</p>
<pre><code>function distanceK(root, target, k) {
    const graph = new Map();
    // Build adjacency list including parent edges
    function buildGraph(node, parent) {
        if (!node) return;
        if (!graph.has(node.val)) graph.set(node.val, []);
        if (parent) {
            graph.get(node.val).push(parent.val);
            graph.get(parent.val).push(node.val);
        }
        buildGraph(node.left, node);
        buildGraph(node.right, node);
    }
    // Add all nodes to graph first
    function init(node) {
        if (!node) return;
        graph.set(node.val, []);
        init(node.left); init(node.right);
    }
    init(root); buildGraph(root, null);
    // BFS from target
    const visited = new Set([target.val]);
    let queue = [target.val];
    for (let dist = 0; dist &lt; k; dist++) {
        const next = [];
        for (const n of queue)
            for (const nb of (graph.get(n) || []))
                if (!visited.has(nb)) { visited.add(nb); next.push(nb); }
        queue = next;
    }
    return queue;
}
// Target node=5, k=2 =&gt; nodes at distance 2 from 5 = [7, 4, 1]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the maximum width of a binary tree level by level?",
                    a: `<p>Use BFS with <strong>node indices</strong>. Assign each node an index (left child = 2i, right child = 2i+1). Width at each level = last_index - first_index + 1.</p>
<pre><code>function widthOfBinaryTree(root) {
    if (!root) return 0;
    let maxWidth = 0;
    let queue = [[root, 0n]]; // [node, index] using BigInt for large trees
    while (queue.length) {
        const size = queue.length;
        const firstIdx = queue[0][1];
        const next = [];
        for (let i = 0; i &lt; size; i++) {
            const [node, idx] = queue[i];
            const relIdx = idx - firstIdx; // normalize to avoid overflow
            if (node.left)  next.push([node.left,  relIdx * 2n]);
            if (node.right) next.push([node.right, relIdx * 2n + 1n]);
        }
        maxWidth = Math.max(maxWidth, Number(queue[size-1][1] - queue[0][1]) + 1);
        queue = next;
    }
    return maxWidth;
}
// Balanced tree depth 3  =&gt; Output: 4 (bottom level)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(w) max level width</p>`
                },
                {
                    q: "How do you design a hit counter for the past 5 minutes using a queue?",
                    a: `<p>Use a <strong>queue</strong> storing timestamps. On each hit, add timestamp. On getHits, remove timestamps older than 5 minutes ago, then return queue size.</p>
<pre><code>class HitCounter {
    constructor() { this.hits = []; }
    hit(timestamp) {
        this.hits.push(timestamp);
    }
    getHits(timestamp) {
        // Remove hits older than 300 seconds
        while (this.hits.length &amp;&amp; this.hits[0] &lt;= timestamp - 300) {
            this.hits.shift();
        }
        return this.hits.length;
    }
}
// hit(1),hit(2),hit(3),getHits(4)=3
// hit(300),getHits(300)=4
// getHits(301)=3  (hit at t=1 expired)
</code></pre>
<p><strong>Time:</strong> O(1) amortized for hit, O(n) worst case for getHits &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you print a binary tree in zigzag / spiral level order?",
                    a: `<p>Use BFS level by level. Alternate reversing the level array using a <strong>boolean flag</strong> (left-to-right vs right-to-left).</p>
<pre><code>function zigzagLevelOrder(root) {
    if (!root) return [];
    const result = [];
    let queue = [root], leftToRight = true;
    while (queue.length) {
        const size = queue.length;
        const level = [];
        const next = [];
        for (let i = 0; i &lt; size; i++) {
            const node = queue[i];
            level.push(node.val);
            if (node.left)  next.push(node.left);
            if (node.right) next.push(node.right);
        }
        result.push(leftToRight ? level : [...level].reverse());
        leftToRight = !leftToRight;
        queue = next;
    }
    return result;
}
// Tree:   3
//        / \
//       9  20
//          / \
//         15   7
// Output: [[3],[20,9],[15,7]]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(w) max level width</p>`
                },
                {
                    q: "How do you find the number of islands using BFS?",
                    a: `<p>Iterate the grid. When a <code>'1'</code> is found, trigger a <strong>BFS</strong> to mark all connected land cells as visited. Count how many times BFS is triggered.</p>
<pre><code>function numIslands(grid) {
    let count = 0;
    const rows = grid.length, cols = grid[0].length;
    for (let r = 0; r &lt; rows; r++) {
        for (let c = 0; c &lt; cols; c++) {
            if (grid[r][c] === '1') {
                count++;
                const queue = [[r, c]];
                grid[r][c] = '0'; // mark visited
                while (queue.length) {
                    const [row, col] = queue.shift();
                    for (const [dr, dc] of [[0,1],[0,-1],[1,0],[-1,0]]) {
                        const nr = row+dr, nc = col+dc;
                        if (nr &gt;= 0 &amp;&amp; nr &lt; rows &amp;&amp; nc &gt;= 0 &amp;&amp; nc &lt; cols &amp;&amp; grid[nr][nc] === '1') {
                            grid[nr][nc] = '0';
                            queue.push([nr, nc]);
                        }
                    }
                }
            }
        }
    }
    return count;
}
// Input: [["1","1","0"],["1","0","0"],["0","0","1"]]  =&gt; Output: 2
// Input: [["1","1","1"],["0","1","0"],["1","1","1"]]  =&gt; Output: 1
</code></pre>
<p><strong>Time:</strong> O(rows × cols) &nbsp;|&nbsp; <strong>Space:</strong> O(min(rows, cols))</p>`
                },
                {
                    q: "How do you find the minimum number of steps to reach the end of a knight tour on a chess board?",
                    a: `<p>Use <strong>BFS</strong> with all 8 possible knight moves. BFS guarantees minimum steps since all moves have equal cost.</p>
<pre><code>function minKnightMoves(x, y) {
    // Work in positive quadrant due to symmetry
    x = Math.abs(x); y = Math.abs(y);
    const moves = [[1,2],[2,1],[2,-1],[1,-2],[-1,-2],[-2,-1],[-2,1],[-1,2]];
    const visited = new Set(['0,0']);
    let queue = [[0, 0, 0]]; // [row, col, steps]
    while (queue.length) {
        const [r, c, steps] = queue.shift();
        if (r === x &amp;&amp; c === y) return steps;
        for (const [dr, dc] of moves) {
            const nr = r + dr, nc = c + dc;
            // Prune: stay within reasonable bounds
            if (nr &gt;= -2 &amp;&amp; nc &gt;= -2 &amp;&amp; !visited.has(nr + ',' + nc)) {
                visited.add(nr + ',' + nc);
                queue.push([nr, nc, steps + 1]);
            }
        }
    }
}
// Input: x=2, y=1   =&gt; Output: 1  (one knight move)
// Input: x=5, y=5   =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(max(x,y)²) &nbsp;|&nbsp; <strong>Space:</strong> O(max(x,y)²)</p>`
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
                },
                {
                    q: "How do you find two numbers in an array that sum to a target? (Two Sum)",
                    a: `<p>Use a <strong>hash map</strong> to store each number's complement (target - num). For each element, check if it already exists in the map.</p>
<pre><code>function twoSum(nums, target) {
    const map = new Map(); // value -&gt; index
    for (let i = 0; i &lt; nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) return [map.get(complement), i];
        map.set(nums[i], i);
    }
    return [];
}
// Input: nums=[2,7,11,15], target=9   =&gt; Output: [0,1]
// Input: nums=[3,2,4], target=6       =&gt; Output: [1,2]
// Input: nums=[3,3], target=6         =&gt; Output: [0,1]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find all subarrays with sum equal to k using a hash map?",
                    a: `<p>Use a <strong>prefix sum</strong> hash map. Count occurrences of (prefixSum - k) as you scan: each match means a subarray ending here sums to k.</p>
<pre><code>function subarraySum(nums, k) {
    const map = new Map([[0, 1]]); // prefixSum -&gt; count
    let sum = 0, count = 0;
    for (const num of nums) {
        sum += num;
        count += map.get(sum - k) || 0;
        map.set(sum, (map.get(sum) || 0) + 1);
    }
    return count;
}
// Input: nums=[1,1,1], k=2       =&gt; Output: 2
// Input: nums=[1,2,3], k=3       =&gt; Output: 2   ([1,2] and [3])
// Input: nums=[-1,-1,1], k=0     =&gt; Output: 1
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you check if any permutation of a string is a palindrome?",
                    a: `<p>A string can form a palindrome if <strong>at most one character</strong> has an odd frequency. Use a Set to toggle character presence.</p>
<pre><code>function canPermutePalindrome(s) {
    const set = new Set();
    for (const ch of s) {
        if (set.has(ch)) set.delete(ch); // even count: remove
        else set.add(ch);               // odd count: add
    }
    return set.size &lt;= 1; // at most one odd-frequency char
}
// Input: "aab"       =&gt; Output: true  ("aba" is palindrome)
// Input: "code"      =&gt; Output: false
// Input: "carerac"   =&gt; Output: true  ("racecar")
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(k) unique chars</p>`
                },
                {
                    q: "How do you find the longest consecutive sequence in an array?",
                    a: `<p>Put all numbers in a <strong>Set</strong>. Only start counting from elements where <code>num - 1</code> is NOT in the set (start of a sequence). Track the longest streak.</p>
<pre><code>function longestConsecutive(nums) {
    const set = new Set(nums);
    let best = 0;
    for (const num of set) {
        if (!set.has(num - 1)) { // start of a sequence
            let len = 1;
            while (set.has(num + len)) len++;
            best = Math.max(best, len);
        }
    }
    return best;
}
// Input: [100,4,200,1,3,2]     =&gt; Output: 4   (1,2,3,4)
// Input: [0,3,7,2,5,8,4,6,0,1] =&gt; Output: 9
// Input: []                    =&gt; Output: 0
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the first duplicate (earliest second occurrence) in an array?",
                    a: `<p>Use a <strong>Set</strong> and scan left to right. The first number already in the set is the answer.</p>
<pre><code>function firstDuplicate(arr) {
    const seen = new Set();
    for (const num of arr) {
        if (seen.has(num)) return num;
        seen.add(num);
    }
    return -1;
}
// Input: [2,1,3,5,3,2]   =&gt; Output: 3  (3 appears at index 2 and 4)
// Input: [2,4,3,5,1]     =&gt; Output: -1 (no duplicates)
// Input: [1,1]           =&gt; Output: 1
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you count the frequency of each word in a sentence?",
                    a: `<p>Split the string on whitespace, then use a <strong>Map</strong> to tally each word's count.</p>
<pre><code>function wordFrequency(sentence) {
    const freq = new Map();
    for (const word of sentence.toLowerCase().split(/\s+/)) {
        freq.set(word, (freq.get(word) || 0) + 1);
    }
    return freq;
}
// Input: "the sky is blue the sky"
// Output: Map { 'the' =&gt; 2, 'sky' =&gt; 2, 'is' =&gt; 1, 'blue' =&gt; 1 }

// Input: "hello world hello"
// Output: Map { 'hello' =&gt; 2, 'world' =&gt; 1 }
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(k) unique words</p>`
                },
                {
                    q: "How do you find duplicate files with the same content using a hash map?",
                    a: `<p>Parse each path, extract content, and use a <strong>Map from content to list of paths</strong>. Return groups with 2+ paths.</p>
<pre><code>function findDuplicate(paths) {
    const map = new Map();
    for (const path of paths) {
        const parts = path.split(' ');
        const dir = parts[0];
        for (let i = 1; i &lt; parts.length; i++) {
            const bracketIdx = parts[i].indexOf('(');
            const filename = parts[i].slice(0, bracketIdx);
            const content  = parts[i].slice(bracketIdx + 1, parts[i].length - 1);
            const fullPath = dir + '/' + filename;
            if (!map.has(content)) map.set(content, []);
            map.get(content).push(fullPath);
        }
    }
    return [...map.values()].filter(group =&gt; group.length &gt; 1);
}
// Input: ["root/a 1.txt(abcd) 2.txt(efgh)", "root/b 4.txt(abcd)"]
// Output: [["root/a/1.txt","root/b/4.txt"]]
</code></pre>
<p><strong>Time:</strong> O(n × m) average &nbsp;|&nbsp; <strong>Space:</strong> O(n × m)</p>`
                },
                {
                    q: "How do you find all unique quadruplets (4Sum) that sum to a target?",
                    a: `<p>Sort the array, then use two outer loops + <strong>two-pointer technique</strong> for the inner pair. Use a Set to deduplicate results easily.</p>
<pre><code>function fourSum(nums, target) {
    nums.sort((a, b) =&gt; a - b);
    const result = [];
    for (let i = 0; i &lt; nums.length - 3; i++) {
        if (i &gt; 0 &amp;&amp; nums[i] === nums[i-1]) continue; // skip duplicates
        for (let j = i + 1; j &lt; nums.length - 2; j++) {
            if (j &gt; i+1 &amp;&amp; nums[j] === nums[j-1]) continue;
            let l = j + 1, r = nums.length - 1;
            while (l &lt; r) {
                const sum = nums[i] + nums[j] + nums[l] + nums[r];
                if (sum === target) {
                    result.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (l &lt; r &amp;&amp; nums[l] === nums[l+1]) l++;
                    while (l &lt; r &amp;&amp; nums[r] === nums[r-1]) r--;
                    l++; r--;
                } else if (sum &lt; target) l++;
                else r--;
            }
        }
    }
    return result;
}
// Input: nums=[1,0,-1,0,-2,2], target=0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
</code></pre>
<p><strong>Time:</strong> O(n³) &nbsp;|&nbsp; <strong>Space:</strong> O(1) excluding output</p>`
                },
                {
                    q: "How do you implement a hash map from scratch (without using built-ins)?",
                    a: `<p>Use an array of buckets with <strong>separate chaining</strong> (linked list or array per bucket). The hash function maps a key to a bucket index.</p>
<pre><code>class HashMap {
    constructor(size = 1000) {
        this.buckets = new Array(size).fill(null).map(() =&gt; []);
        this.size = size;
    }
    _hash(key) {
        let hash = 0;
        for (const ch of String(key)) hash = (hash * 31 + ch.charCodeAt(0)) % this.size;
        return hash;
    }
    set(key, value) {
        const bucket = this.buckets[this._hash(key)];
        const pair = bucket.find(p =&gt; p[0] === key);
        if (pair) pair[1] = value;
        else bucket.push([key, value]);
    }
    get(key) {
        const pair = this.buckets[this._hash(key)].find(p =&gt; p[0] === key);
        return pair ? pair[1] : undefined;
    }
    delete(key) {
        const idx = this._hash(key);
        this.buckets[idx] = this.buckets[idx].filter(p =&gt; p[0] !== key);
    }
}
// set("a",1), set("b",2), get("a") =&gt; 1, delete("a"), get("a") =&gt; undefined
</code></pre>
<p><strong>Average Time:</strong> O(1) per op | <strong>Worst (all collide):</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the most frequent element in an array?",
                    a: `<p>Build a frequency map, then either find the max in O(n) or use a <strong>bucket sort</strong> approach for a full frequency ranking.</p>
<pre><code>function topKFrequent(nums, k) {
    const freq = new Map();
    for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
    // Bucket sort: index = frequency
    const buckets = new Array(nums.length + 1).fill(null).map(() =&gt; []);
    for (const [num, count] of freq) buckets[count].push(num);
    const result = [];
    for (let i = buckets.length - 1; i &gt;= 0 &amp;&amp; result.length &lt; k; i--) {
        result.push(...buckets[i]);
    }
    return result.slice(0, k);
}
// Input: nums=[1,1,1,2,2,3], k=2   =&gt; Output: [1,2]
// Input: nums=[1], k=1             =&gt; Output: [1]
</code></pre>
<p><strong>Time:</strong> O(n) bucket sort &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you detect if a graph has a cycle using a visited set?",
                    a: `<p>For an undirected graph, use DFS with a <strong>visited set</strong>. If you visit a node that's already in the current path (recursion stack), a cycle exists.</p>
<pre><code>function hasCycle(numNodes, edges) {
    const adj = Array.from({length: numNodes}, () =&gt; []);
    for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }
    const visited = new Set();
    function dfs(node, parent) {
        visited.add(node);
        for (const neighbor of adj[node]) {
            if (!visited.has(neighbor)) {
                if (dfs(neighbor, node)) return true;
            } else if (neighbor !== parent) {
                return true; // back edge = cycle
            }
        }
        return false;
    }
    for (let i = 0; i &lt; numNodes; i++) {
        if (!visited.has(i) &amp;&amp; dfs(i, -1)) return true;
    }
    return false;
}
// Input: 4 nodes, edges=[[0,1],[1,2],[2,3],[3,0]]  =&gt; Output: true
// Input: 4 nodes, edges=[[0,1],[0,2],[1,3]]         =&gt; Output: false
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How do you find the minimum number of transactions to settle debts?",
                    a: `<p>Calculate net balance for each person using a map. Then greedily match the person with maximum debt against the person with maximum credit.</p>
<pre><code>function minTransfers(transactions) {
    const balance = new Map();
    for (const [from, to, amount] of transactions) {
        balance.set(from, (balance.get(from) || 0) - amount);
        balance.set(to,   (balance.get(to)   || 0) + amount);
    }
    const debts = [...balance.values()].filter(v =&gt; v !== 0);
    function settle(k) {
        while (k &lt; debts.length &amp;&amp; debts[k] === 0) k++;
        if (k === debts.length) return 0;
        let min = Infinity;
        for (let i = k + 1; i &lt; debts.length; i++) {
            if (debts[k] * debts[i] &lt; 0) { // opposite signs
                debts[i] += debts[k];
                min = Math.min(min, 1 + settle(k + 1));
                debts[i] -= debts[k]; // backtrack
            }
        }
        return min;
    }
    return settle(0);
}
// Input: [[0,1,10],[2,0,5]]     =&gt; Output: 2
// Input: [[0,1,10],[1,0,1],[1,2,5],[2,0,5]] =&gt; Output: 1
</code></pre>
<p><strong>Time:</strong> O(n!) worst case &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you compute the number of distinct substrings using a hash set?",
                    a: `<p>Generate all substrings and insert them into a <strong>Set</strong> to automatically deduplicate. Return the set's size.</p>
<pre><code>function countDistinctSubstrings(s) {
    const set = new Set();
    for (let i = 0; i &lt; s.length; i++) {
        for (let j = i + 1; j &lt;= s.length; j++) {
            set.add(s.slice(i, j));
        }
    }
    return set.size;
}
// Input: "abc"   =&gt; Output: 6  ("a","b","c","ab","bc","abc")
// Input: "aaa"   =&gt; Output: 3  ("a","aa","aaa")
// Input: "abab"  =&gt; Output: 7
</code></pre>
<p><strong>Time:</strong> O(n³) due to string creation &nbsp;|&nbsp; <strong>Space:</strong> O(n²)</p>
<p>For larger inputs, use <strong>Trie</strong> or <strong>Suffix Array</strong> for O(n²) or O(n log n).</p>`
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
                },
                {
                    q: "How do you find the diameter of a binary tree?",
                    a: `<p>The diameter is the longest path between any two nodes. At each node, the <strong>diameter passing through it</strong> = left_height + right_height. Track the global max.</p>
<pre><code>function diameterOfBinaryTree(root) {
    let maxDia = 0;
    function height(node) {
        if (!node) return 0;
        const left = height(node.left);
        const right = height(node.right);
        maxDia = Math.max(maxDia, left + right); // path through this node
        return 1 + Math.max(left, right);
    }
    height(root);
    return maxDia;
}
// Tree:    1
//         / \
//        2   3
//       / \
//      4   5
// Output: 3  (path: 4-&gt;2-&gt;1-&gt;3 or 5-&gt;2-&gt;1-&gt;3, length = 3 edges)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you check if two trees are the same?",
                    a: `<p>Recursively compare: both null = same, one null = different, both present = compare values and recursively compare all children.</p>
<pre><code>function isSameTree(p, q) {
    if (!p &amp;&amp; !q) return true;
    if (!p || !q) return false;
    return p.val === q.val
        &amp;&amp; isSameTree(p.left, q.left)
        &amp;&amp; isSameTree(p.right, q.right);
}
// Both trees same structure and values =&gt; true
// Structural difference               =&gt; false
// Same structure but different values  =&gt; false
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you check if one tree is a subtree of another?",
                    a: `<p>At each node of the main tree, check if the subtree rooted there is the same as the given subtree using <code>isSameTree</code>.</p>
<pre><code>function isSubtree(root, subRoot) {
    if (!root) return false;
    if (isSameTree(root, subRoot)) return true;
    return isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
}
function isSameTree(p, q) {
    if (!p &amp;&amp; !q) return true;
    if (!p || !q || p.val !== q.val) return false;
    return isSameTree(p.left, q.left) &amp;&amp; isSameTree(p.right, q.right);
}
// Main tree contains subRoot structure =&gt; true
// subRoot not found anywhere           =&gt; false
</code></pre>
<p><strong>Time:</strong> O(m × n) worst case &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you find the maximum path sum in a binary tree?",
                    a: `<p>At each node, the max path through it = left_gain + right_gain + node.val. Only include a subtree's contribution if it's positive. Track global max.</p>
<pre><code>function maxPathSum(root) {
    let maxSum = -Infinity;
    function gain(node) {
        if (!node) return 0;
        const leftGain  = Math.max(gain(node.left), 0);
        const rightGain = Math.max(gain(node.right), 0);
        maxSum = Math.max(maxSum, node.val + leftGain + rightGain);
        return node.val + Math.max(leftGain, rightGain); // only one branch!
    }
    gain(root);
    return maxSum;
}
// Tree: -10 with children 9 and 20(left:15, right:7)
// Output: 42  (path: 15-&gt;20-&gt;7)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you serialize and deserialize a binary tree?",
                    a: `<p>Serialize using pre-order DFS, encode null nodes as <code>#</code>. Deserialize by rebuilding pre-order, consuming tokens from a queue.</p>
<pre><code>function serialize(root) {
    const result = [];
    function dfs(node) {
        if (!node) { result.push('#'); return; }
        result.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }
    dfs(root);
    return result.join(',');
}
function deserialize(data) {
    const tokens = data.split(',');
    let i = 0;
    function build() {
        if (tokens[i] === '#') { i++; return null; }
        const node = { val: Number(tokens[i++]) };
        node.left  = build();
        node.right = build();
        return node;
    }
    return build();
}
// Tree 1,2,3 serializes to "1,2,#,#,3,#,#"
// Deserializing "1,2,#,#,3,#,#" =&gt; restores original tree
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you count good nodes in a binary tree?",
                    a: `<p>A node is <strong>good</strong> if no value in the path from root to it is greater than it. Do a DFS tracking the max value seen so far on the path.</p>
<pre><code>function goodNodes(root) {
    function dfs(node, maxSoFar) {
        if (!node) return 0;
        const isGood = node.val &gt;= maxSoFar ? 1 : 0;
        const newMax = Math.max(maxSoFar, node.val);
        return isGood + dfs(node.left, newMax) + dfs(node.right, newMax);
    }
    return dfs(root, -Infinity);
}
// Tree: 3, left=1(left=3), right=4(left=1, right=5)
// Good nodes: 3, 3, 4, 5 =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you construct a binary tree from pre-order and in-order traversals?",
                    a: `<p>The first element in pre-order is the root. Find it in in-order to split left/right subtrees. Recursively build each subtree.</p>
<pre><code>function buildTree(preorder, inorder) {
    const inMap = new Map(inorder.map((v, i) =&gt; [v, i]));
    function build(preL, preR, inL, inR) {
        if (preL &gt; preR) return null;
        const rootVal = preorder[preL];
        const inIdx = inMap.get(rootVal);
        const leftSize = inIdx - inL;
        const node = { val: rootVal };
        node.left  = build(preL+1, preL+leftSize, inL, inIdx-1);
        node.right = build(preL+leftSize+1, preR, inIdx+1, inR);
        return node;
    }
    return build(0, preorder.length-1, 0, inorder.length-1);
}
// preorder=[3,9,20,15,7], inorder=[9,3,15,20,7]
// =&gt; Builds: 3(left=9, right=20(left=15, right=7))
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find all root-to-leaf paths that sum to a target?",
                    a: `<p>Use DFS. Track path and remaining sum. At each leaf, if remaining equals node.val, save the path.</p>
<pre><code>function pathSum(root, target) {
    const result = [];
    function dfs(node, remaining, path) {
        if (!node) return;
        path.push(node.val);
        if (!node.left &amp;&amp; !node.right &amp;&amp; remaining === node.val) {
            result.push([...path]);
        }
        dfs(node.left,  remaining - node.val, path);
        dfs(node.right, remaining - node.val, path);
        path.pop(); // backtrack
    }
    dfs(root, target, []);
    return result;
}
// Tree: 5(4(11(7,2)), 8(13,4(5,1))), target=22
// Output: [[5,4,11,2],[5,8,4,5]]
</code></pre>
<p><strong>Time:</strong> O(n²) worst case (copying paths) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you flatten a binary tree to a linked list (in place)?",
                    a: `<p>Use the <strong>Morris traversal</strong> trick: for each node that has a left child, find the rightmost node of the left subtree, attach the right child there, then move left to right.</p>
<pre><code>function flatten(root) {
    let curr = root;
    while (curr) {
        if (curr.left) {
            // Find rightmost of left subtree
            let rightmost = curr.left;
            while (rightmost.right) rightmost = rightmost.right;
            // Re-wire
            rightmost.right = curr.right;
            curr.right = curr.left;
            curr.left = null;
        }
        curr = curr.right;
    }
}
// Tree: 1(2(3,4), 5(null,6))
// After flatten: 1-&gt;2-&gt;3-&gt;4-&gt;5-&gt;6 (all right pointers)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) no recursion stack</p>`
                },
                {
                    q: "How do you find the right side view of a binary tree?",
                    a: `<p>Use BFS level by level and take the <strong>last node of each level</strong>, or use DFS tracking depth and only recording the first visit at each depth from the right.</p>
<pre><code>function rightSideView(root) {
    if (!root) return [];
    const result = [];
    let queue = [root];
    while (queue.length) {
        result.push(queue[queue.length-1].val); // rightmost at level
        const next = [];
        for (const node of queue) {
            if (node.left)  next.push(node.left);
            if (node.right) next.push(node.right);
        }
        queue = next;
    }
    return result;
}
// Tree:   1
//        / \
//       2   3
//        \    \
//         5    4
// Output: [1, 3, 4]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(w) max level width</p>`
                },
                {
                    q: "How do you check if a binary tree is symmetric (mirror of itself)?",
                    a: `<p>Recursively compare the left and right subtrees as mirrors: outer values match and inner subtrees are mirror reflections of each other.</p>
<pre><code>function isSymmetric(root) {
    function isMirror(left, right) {
        if (!left &amp;&amp; !right) return true;
        if (!left || !right) return false;
        return left.val === right.val
            &amp;&amp; isMirror(left.left,  right.right)
            &amp;&amp; isMirror(left.right, right.left);
    }
    return isMirror(root?.left, root?.right);
}
// Symmetric tree:   1
//                  / \
//                 2   2
//                / \ / \
//               3  4 4  3   =&gt; Output: true
// Asymmetric: 1(2(null,3), 2(null,3)) =&gt; false
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you find all paths from root to leaf in a binary tree?",
                    a: `<p>Use DFS backtracking. Maintain a <code>path</code> array; push on entry, pop on exit. When a leaf is reached, record the current path.</p>
<pre><code>function binaryTreePaths(root) {
    const result = [];
    function dfs(node, path) {
        if (!node) return;
        path.push(node.val);
        if (!node.left &amp;&amp; !node.right) {
            result.push(path.join('-&gt;'));
        }
        dfs(node.left,  path);
        dfs(node.right, path);
        path.pop(); // backtrack
    }
    dfs(root, []);
    return result;
}
// Tree:  1
//       / \
//      2   3
//       \
//        5
// Output: ["1-&gt;2-&gt;5", "1-&gt;3"]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find all nodes at a given depth (level) in a binary tree?",
                    a: `<p>Use BFS and stop at the desired depth, OR use DFS passing the current depth; collect node values when depth matches.</p>
<pre><code>function nodesAtDepth(root, targetDepth) {
    const result = [];
    function dfs(node, depth) {
        if (!node) return;
        if (depth === targetDepth) { result.push(node.val); return; }
        dfs(node.left,  depth + 1);
        dfs(node.right, depth + 1);
    }
    dfs(root, 0);
    return result;
}
// Tree:    1          depth 0
//         / \
//        2   3        depth 1
//       / \
//      4   5          depth 2
// nodesAtDepth(root, 2) =&gt; [4, 5]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you calculate the sum of all nodes in a binary tree?",
                    a: `<p>Recursively sum: <code>nodeSum = node.val + sum(left) + sum(right)</code>. Base case: null node returns 0.</p>
<pre><code>function treeSum(root) {
    if (!root) return 0;
    return root.val + treeSum(root.left) + treeSum(root.right);
}

// Iterative BFS version:
function treeSumBFS(root) {
    if (!root) return 0;
    let sum = 0;
    const queue = [root];
    while (queue.length) {
        const node = queue.shift();
        sum += node.val;
        if (node.left)  queue.push(node.left);
        if (node.right) queue.push(node.right);
    }
    return sum;
}
// Tree: 1(left=2, right=3(left=4, right=5))
// Output: 15
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h) for DFS, O(w) for BFS</p>`
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
                },
                {
                    q: "How do you find the kth smallest element in a BST?",
                    a: `<p>In-order traversal of a BST produces values in <strong>sorted ascending order</strong>. Simply return the kth value visited.</p>
<pre><code>function kthSmallest(root, k) {
    let count = 0, result = null;
    function inorder(node) {
        if (!node || result !== null) return;
        inorder(node.left);
        if (++count === k) { result = node.val; return; }
        inorder(node.right);
    }
    inorder(root);
    return result;
}
// BST: 3(1(null,2), 4), k=1  =&gt; Output: 1  (smallest)
// BST: 5(3(2,4), 6), k=3      =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(H + k) where H is height &nbsp;|&nbsp; <strong>Space:</strong> O(H)</p>`
                },
                {
                    q: "How do you recover a BST where two nodes were accidentally swapped?",
                    a: `<p>Perform in-order traversal. In a valid BST in-order is sorted — the two swapped nodes will appear as anomalies (first: prev > curr; second: last such curr). Swap their values back.</p>
<pre><code>function recoverTree(root) {
    let first = null, second = null, prev = null;
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        if (prev &amp;&amp; prev.val &gt; node.val) {
            if (!first) first = prev; // first anomaly
            second = node;            // always update second
        }
        prev = node;
        inorder(node.right);
    }
    inorder(root);
    [first.val, second.val] = [second.val, first.val]; // swap back
}
// BST with 3 and 1 swapped: [3,1] &lt;- should be [1,3]
// After recover: BST is valid again
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you convert a sorted array to a height-balanced BST?",
                    a: `<p>Use divide and conquer. The middle element becomes the root; recursively build left and right subtrees from the two halves.</p>
<pre><code>function sortedArrayToBST(nums) {
    function build(left, right) {
        if (left &gt; right) return null;
        const mid = Math.floor((left + right) / 2);
        const node = { val: nums[mid] };
        node.left  = build(left, mid - 1);
        node.right = build(mid + 1, right);
        return node;
    }
    return build(0, nums.length - 1);
}
// Input: [-10,-3,0,5,9]
// Output: balanced BST with root=0, left=-3(-10), right=9(5)
// Input: [1,3]  =&gt; root=1(null, 3) or root=3(1, null) both valid
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(log n) stack, O(n) output</p>`
                },
                {
                    q: "How do you validate that a binary tree is a valid BST?",
                    a: `<p>Pass min/max bounds down the recursion. At each node, its value must be strictly within the allowed range, which narrows as you go deeper.</p>
<pre><code>function isValidBST(root, min = -Infinity, max = Infinity) {
    if (!root) return true;
    if (root.val &lt;= min || root.val &gt;= max) return false;
    return isValidBST(root.left,  min,      root.val)
        &amp;&amp; isValidBST(root.right, root.val, max);
}
// Valid BST:   2(1, 3)             =&gt; true
// Invalid:     5(1, 4(3,6))        =&gt; false (4 &lt; 5 but right child)
// Edge case:   2(2, null)          =&gt; false (equal not allowed)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you find the inorder successor of a node in a BST?",
                    a: `<p>The inorder successor is the <strong>leftmost node in the right subtree</strong> (if it exists), or the closest ancestor for which the target is in the left subtree.</p>
<pre><code>function inorderSuccessor(root, p) {
    let successor = null;
    while (root) {
        if (p.val &lt; root.val) {
            successor = root; // candidate: current node
            root = root.left; // try to find closer
        } else {
            root = root.right; // p is in right subtree
        }
    }
    return successor;
}
// BST: 5(3(2,4), 6)
// inorderSuccessor(node_3) =&gt; node_4
// inorderSuccessor(node_4) =&gt; node_5
// inorderSuccessor(node_6) =&gt; null (no successor)
</code></pre>
<p><strong>Time:</strong> O(h) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the range sum in a BST (sum of values within [low, high])?",
                    a: `<p>Use BST properties to prune subtrees: skip the left subtree if current &lt; low, skip the right if current &gt; high. Otherwise sum and recurse both.</p>
<pre><code>function rangeSumBST(root, low, high) {
    if (!root) return 0;
    if (root.val &lt; low)  return rangeSumBST(root.right, low, high);
    if (root.val &gt; high) return rangeSumBST(root.left,  low, high);
    return root.val
        + rangeSumBST(root.left,  low, high)
        + rangeSumBST(root.right, low, high);
}
// BST: 10(5(3,7), 15(13,18))
// rangeSumBST(root, 7, 15) =&gt; Output: 32  (7 + 10 + 15)
// rangeSumBST(root, 6, 10) =&gt; Output: 17  (7 + 10)
</code></pre>
<p><strong>Time:</strong> O(n) worst, O(log n + k) average with pruning &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you delete a node from a BST?",
                    a: `<p>Three cases: (1) <strong>No children</strong> — remove directly. (2) <strong>One child</strong> — replace with child. (3) <strong>Two children</strong> — replace value with in-order successor (leftmost of right subtree), then delete successor.</p>
<pre><code>function deleteNode(root, key) {
    if (!root) return null;
    if (key &lt; root.val) {
        root.left  = deleteNode(root.left,  key);
    } else if (key &gt; root.val) {
        root.right = deleteNode(root.right, key);
    } else {
        // Found node to delete
        if (!root.left)  return root.right;
        if (!root.right) return root.left;
        // Two children: find inorder successor
        let minNode = root.right;
        while (minNode.left) minNode = minNode.left;
        root.val   = minNode.val;
        root.right = deleteNode(root.right, minNode.val);
    }
    return root;
}
// BST: 5(3(2,4), 6), delete 3 =&gt; 5(4(2), 6)
</code></pre>
<p><strong>Time:</strong> O(h) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you find the lowest common ancestor (LCA) in a BST?",
                    a: `<p>Use BST ordering: if both p and q are less than current, go left; if both greater, go right; otherwise current is the LCA.</p>
<pre><code>function lowestCommonAncestorBST(root, p, q) {
    while (root) {
        if (p.val &lt; root.val &amp;&amp; q.val &lt; root.val) {
            root = root.left;
        } else if (p.val &gt; root.val &amp;&amp; q.val &gt; root.val) {
            root = root.right;
        } else {
            return root; // split point = LCA
        }
    }
    return null;
}
// BST: 6(2(0,4(3,5)), 8(7,9))
// LCA(2, 8) =&gt; node 6
// LCA(2, 4) =&gt; node 2
</code></pre>
<p><strong>Time:</strong> O(h) &nbsp;|&nbsp; <strong>Space:</strong> O(1) iterative</p>`
                },
                {
                    q: "How do you trim a BST to values within a given range [low, high]?",
                    a: `<p>Recursively: if current < low, return trimmed right subtree. If current > high, return trimmed left subtree. Otherwise trim both children.</p>
<pre><code>function trimBST(root, low, high) {
    if (!root) return null;
    if (root.val &lt; low)  return trimBST(root.right, low, high);
    if (root.val &gt; high) return trimBST(root.left,  low, high);
    root.left  = trimBST(root.left,  low, high);
    root.right = trimBST(root.right, low, high);
    return root;
}
// BST: 3(0(null,2(1)),4), low=1, high=3
// Output trimmed tree: 3(2(1), null)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you convert a BST to a sorted doubly linked list?",
                    a: `<p>In-order traversal builds the nodes in sorted order. Maintain a <code>prev</code> pointer to link each node to the previous as a doubly linked list.</p>
<pre><code>function treeToDoublyList(root) {
    if (!root) return null;
    let head = null, prev = null;
    function inorder(node) {
        if (!node) return;
        inorder(node.left);
        if (prev) { prev.right = node; node.left = prev; }
        else head = node; // leftmost node = head
        prev = node;
        inorder(node.right);
    }
    inorder(root);
    // Make circular
    prev.right = head; head.left = prev;
    return head;
}
// BST: 4(2(1,3), 5)
// Output: 1 &lt;-&gt; 2 &lt;-&gt; 3 &lt;-&gt; 4 &lt;-&gt; 5 (circular)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(h)</p>`
                },
                {
                    q: "How do you count the number of BSTs that can be formed with n nodes?",
                    a: `<p>This equals the <strong>nth Catalan number</strong>: C(n) = ΣC(i-1)×C(n-i) for i from 1 to n, with C(0)=C(1)=1.</p>
<pre><code>function numTrees(n) {
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; dp[1] = 1;
    for (let i = 2; i &lt;= n; i++) {
        for (let j = 1; j &lt;= i; j++) {
            dp[i] += dp[j - 1] * dp[i - j]; // j as root
        }
    }
    return dp[n];
}
// Input: n=3  =&gt; Output: 5
// Input: n=4  =&gt; Output: 14
// Input: n=1  =&gt; Output: 1
</code></pre>
<p><strong>Time:</strong> O(n²) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the floor and ceiling of a value in a BST?",
                    a: `<p><strong>Floor</strong>: largest BST value ≤ target. <strong>Ceiling</strong>: smallest BST value ≥ target. Both use BST ordering to navigate and track candidate values.</p>
<pre><code>function floorInBST(root, target) {
    let floor = null;
    while (root) {
        if (root.val === target) return root.val;
        if (root.val &lt; target) { floor = root.val; root = root.right; }
        else root = root.left;
    }
    return floor;
}
function ceilingInBST(root, target) {
    let ceil = null;
    while (root) {
        if (root.val === target) return root.val;
        if (root.val &gt; target) { ceil = root.val; root = root.left; }
        else root = root.right;
    }
    return ceil;
}
// BST: 8(4(2,6), 10), target=5
// floorInBST =&gt; 4    ceilingInBST =&gt; 6
</code></pre>
<p><strong>Time:</strong> O(h) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
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
                },
                {
                    q: "How do you find the kth largest element using a min-heap?",
                    a: `<p>Maintain a <strong>min-heap of size k</strong>. For each element, add it and if heap exceeds k, remove the minimum. The heap's root is the kth largest.</p>
<pre><code>// Using a simulated min-heap via sorted array (JavaScript has no native heap)
function findKthLargest(nums, k) {
    // Simple approach: sort descending
    nums.sort((a, b) =&gt; b - a);
    return nums[k - 1];
}
// With a real MinHeap:
function findKthLargestHeap(nums, k) {
    const heap = new MinHeap();
    for (const num of nums) {
        heap.insert(num);
        if (heap.size() &gt; k) heap.extractMin(); // keep only k largest
    }
    return heap.peek(); // min of the k largest = kth largest
}
// Input: nums=[3,2,1,5,6,4], k=2   =&gt; Output: 5
// Input: nums=[3,2,3,1,2,4,5,5,6], k=4 =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(n log k) &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How do you merge k sorted arrays using a min-heap?",
                    a: `<p>Push the first element of each array into a <strong>min-heap</strong> along with its array index and element index. Pop the minimum, add to result, then push the next element from the same array.</p>
<pre><code>function mergeKSortedArrays(arrays) {
    // Min-heap stores [value, arrayIndex, elementIndex]
    const heap = []; 
    const result = [];
    // Initialize: push first element of each array
    for (let i = 0; i &lt; arrays.length; i++) {
        if (arrays[i].length) heap.push([arrays[i][0], i, 0]);
    }
    heap.sort((a, b) =&gt; a[0] - b[0]); // initial sort
    while (heap.length) {
        const [val, ai, ei] = heap.shift(); // extract min
        result.push(val);
        if (ei + 1 &lt; arrays[ai].length) {
            // Insert next element, then re-sort (heap operation)
            heap.push([arrays[ai][ei + 1], ai, ei + 1]);
            heap.sort((a, b) =&gt; a[0] - b[0]);
        }
    }
    return result;
}
// Input: [[1,4,7],[2,5,8],[3,6,9]]  =&gt; Output: [1,2,3,4,5,6,7,8,9]
// Input: [[1,2],[3,4],[5]]          =&gt; Output: [1,2,3,4,5]
</code></pre>
<p><strong>Time:</strong> O(n log k) with proper heap &nbsp;|&nbsp; <strong>Space:</strong> O(k) for the heap</p>`
                },
                {
                    q: "How do you implement Dijkstra's shortest path algorithm using a min-heap?",
                    a: `<p>Use a <strong>priority queue (min-heap)</strong> keyed by distance. Start from source, greedily explore the closest unvisited node and relax edges.</p>
<pre><code>function dijkstra(graph, src) {
    // graph: adjacency list { node: [[neighbor, weight], ...] }
    const dist = {};
    for (const node in graph) dist[node] = Infinity;
    dist[src] = 0;
    // Min-heap: [distance, node]
    const pq = [[0, src]]; // simulate with sorted array
    while (pq.length) {
        pq.sort((a, b) =&gt; a[0] - b[0]);
        const [d, u] = pq.shift();
        if (d &gt; dist[u]) continue; // stale entry
        for (const [v, weight] of (graph[u] || [])) {
            if (dist[u] + weight &lt; dist[v]) {
                dist[v] = dist[u] + weight;
                pq.push([dist[v], v]);
            }
        }
    }
    return dist;
}
// Graph: A-&gt;B(1), A-&gt;C(4), B-&gt;C(2), B-&gt;D(5), C-&gt;D(1)
// dijkstra(graph, "A")  =&gt; {A:0, B:1, C:3, D:4}
</code></pre>
<p><strong>Time:</strong> O((V + E) log V) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How do you find the top K frequent elements using a heap?",
                    a: `<p>Build a frequency map, then use a <strong>min-heap of size k</strong>. Push each (freq, element) pair; when size exceeds k, extract the minimum. Result is the top k.</p>
<pre><code>function topKFrequentHeap(nums, k) {
    const freq = new Map();
    for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
    // Sort by frequency, take top k
    return [...freq.entries()]
        .sort((a, b) =&gt; b[1] - a[1])
        .slice(0, k)
        .map(([num]) =&gt; num);
}
// Input: nums=[1,1,1,2,2,3], k=2   =&gt; Output: [1,2]
// Input: nums=[4,4,4,3,3,2,1], k=3  =&gt; Output: [4,3,2]
</code></pre>
<p><strong>Time:</strong> O(n log k) with a proper heap, O(n log n) with sort &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you reorganize a string so that no two adjacent characters are the same?",
                    a: `<p>Greedy using a <strong>max-heap</strong> by frequency. Always pick the most frequent character that isn't the same as the last placed character.</p>
<pre><code>function reorganizeString(s) {
    const freq = {};
    for (const c of s) freq[c] = (freq[c] || 0) + 1;
    // Sort by frequency descending (simulate max-heap)
    const entries = Object.entries(freq).sort((a, b) =&gt; b[1] - a[1]);
    const result = [];
    while (entries[0] &amp;&amp; entries[0][1] &gt; 0) {
        // Place most frequent
        const [c1, f1] = entries[0];
        if (result[result.length-1] === c1) {
            if (!entries[1] || entries[1][1] === 0) return ''; // impossible
            const [c2, f2] = entries[1];
            result.push(c2);
            entries[1] = [c2, f2 - 1];
        } else {
            result.push(c1);
            entries[0] = [c1, f1 - 1];
        }
        entries.sort((a, b) =&gt; b[1] - a[1]); // re-sort after update
    }
    return result.join('');
}
// Input: "aab"    =&gt; Output: "aba"
// Input: "aaab"   =&gt; Output: ""   (impossible)
// Input: "aabb"   =&gt; Output: "abab"
</code></pre>
<p><strong>Time:</strong> O(n log k) &nbsp;|&nbsp; <strong>Space:</strong> O(k) unique chars</p>`
                },
                {
                    q: "How do you find the K closest points to the origin?",
                    a: `<p>Use a <strong>max-heap of size k</strong>. For each point, compute squared distance; if it's smaller than the heap's max, replace it. Final heap contains the k closest.</p>
<pre><code>function kClosest(points, k) {
    // Sort by squared Euclidean distance
    points.sort((a, b) =&gt; (a[0]**2 + a[1]**2) - (b[0]**2 + b[1]**2));
    return points.slice(0, k);
}
// With proper max-heap of size k (O(n log k)):
// Keep heap of k smallest; each new point evicts the largest if smaller
// Input: [[1,3],[-2,2]], k=1   =&gt; Output: [[-2,2]]  (dist=8 vs dist=10)
// Input: [[3,3],[5,-1],[-2,4]], k=2 =&gt; Output: [[3,3],[-2,4]]
</code></pre>
<p><strong>Time:</strong> O(n log k) heap / O(n log n) sort &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How do you schedule exams (or jobs) with deadlines to maximize profit?",
                    a: `<p>Sort jobs by profit descending. Use a <strong>min-heap of size = deadline</strong>. Greedily add profitable jobs, evicting the least profitable if the heap is full.</p>
<pre><code>function jobScheduling(jobs) {
    // jobs: [[startTime, endTime, profit]]
    // Sort by end time
    jobs.sort((a, b) =&gt; a[1] - b[1]);
    const dp = [[0, 0]]; // [endTime, maxProfit]
    for (const [start, end, profit] of jobs) {
        // Find last job that ends before start (binary search)
        let lo = 0, hi = dp.length - 1;
        while (lo &lt; hi) {
            const mid = Math.ceil((lo + hi) / 2);
            if (dp[mid][0] &lt;= start) lo = mid; else hi = mid - 1;
        }
        const newProfit = dp[lo][1] + profit;
        if (newProfit &gt; dp[dp.length-1][1]) {
            dp.push([end, newProfit]);
        }
    }
    return dp[dp.length-1][1];
}
// jobs=[[1,2,50],[3,5,20],[6,19,100],[2,100,200]]  =&gt; Output: 250
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you perform a heap sort?",
                    a: `<p>Build a <strong>max-heap</strong> in-place (heapify), then repeatedly extract the max to the end of the array. The array becomes sorted.</p>
<pre><code>function heapSort(arr) {
    const n = arr.length;
    // Build max-heap (heapify from last non-leaf to root)
    for (let i = Math.floor(n / 2) - 1; i &gt;= 0; i--) heapify(arr, n, i);
    // Extract elements one by one
    for (let i = n - 1; i &gt; 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]; // move max to end
        heapify(arr, i, 0); // restore heap for remaining elements
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
// Input: [12,11,13,5,6,7]   =&gt; Output: [5,6,7,11,12,13]
// Input: [4,10,3,5,1]       =&gt; Output: [1,3,4,5,10]
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) in-place</p>`
                },
                {
                    q: "How do you find the kth smallest element in a sorted matrix using a heap?",
                    a: `<p>Push (value, row, col) for the first element of each row into a <strong>min-heap</strong>. Pop the min k times; each time push the next element in the same row.</p>
<pre><code>function kthSmallestMatrix(matrix, k) {
    const n = matrix.length;
    // Min-heap: [value, row, col]
    const heap = matrix.map((row, r) =&gt; [row[0], r, 0]);
    heap.sort((a, b) =&gt; a[0] - b[0]);
    let result = 0;
    for (let i = 0; i &lt; k; i++) {
        heap.sort((a, b) =&gt; a[0] - b[0]);
        const [val, r, c] = heap.shift();
        result = val;
        if (c + 1 &lt; n) heap.push([matrix[r][c + 1], r, c + 1]);
    }
    return result;
}
// Matrix: [[1,5,9],[10,11,13],[12,13,15]], k=8  =&gt; Output: 13
// Matrix: [[-5]], k=1                           =&gt; Output: -5
</code></pre>
<p><strong>Time:</strong> O(k log n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How does a priority queue differ from a regular queue, and when do you use it?",
                    a: `<p>A <strong>priority queue</strong> dequeues the highest (or lowest) priority element first, unlike a regular queue that dequeues in insertion order (FIFO).</p>
<ul>
<li><strong>Use cases:</strong> Dijkstra's algorithm, A* search, Huffman coding, task scheduling, event simulation</li>
<li><strong>Implementation:</strong> Binary heap (most common), Fibonacci heap, sorted array</li>
</ul>
<pre><code>// JavaScript simulation of a Min Priority Queue
class PriorityQueue {
    constructor() { this.heap = []; }
    push(val, priority) {
        this.heap.push({ val, priority });
        this.heap.sort((a, b) =&gt; a.priority - b.priority);
    }
    pop() { return this.heap.shift(); }
    peek() { return this.heap[0]; }
    size() { return this.heap.length; }
}
const pq = new PriorityQueue();
pq.push("low", 5); pq.push("high", 1); pq.push("medium", 3);
pq.pop().val  // =&gt; "high"  (priority 1 = highest)
</code></pre>
<p><strong>Time:</strong> O(log n) push/pop with binary heap &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you compute the minimum cost to connect all ropes?",
                    a: `<p>Always connect the two shortest ropes. Use a <strong>min-heap</strong>: extract two minimums, compute their sum (cost), insert the sum back.</p>
<pre><code>function connectRopes(ropes) {
    // Simulate min-heap with sort
    ropes.sort((a, b) =&gt; a - b);
    let totalCost = 0;
    while (ropes.length &gt; 1) {
        ropes.sort((a, b) =&gt; a - b); // ensure sorted after each insert
        const first  = ropes.shift();
        const second = ropes.shift();
        const combined = first + second;
        totalCost += combined;
        ropes.push(combined);
    }
    return totalCost;
}
// Input: [4, 3, 2, 6]   =&gt; Output: 29
//   (2+3=5, cost=5), (4+5=9, cost=14), (6+9=15, cost=29)
// Input: [1, 2, 3, 4, 5] =&gt; Output: 33
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) (modifies input array)</p>`
                },
                {
                    q: "How do you check if a sequence of numbers can be divided into consecutive subsequences of length 3+?",
                    a: `<p>Use two Maps: <code>freq</code> (remaining counts) and <code>end</code> (open subsequences that can be extended). Greedily extend existing sequences before creating new ones.</p>
<pre><code>function isPossible(nums) {
    const freq = new Map(), end = new Map();
    for (const n of nums) freq.set(n, (freq.get(n) || 0) + 1);
    for (const n of nums) {
        if (!freq.get(n)) continue; // already used
        if (end.get(n) &gt; 0) {
            // Extend existing sequence ending at n-1
            end.set(n, (end.get(n) || 0) - 1);
            end.set(n + 1, (end.get(n + 1) || 0) + 1);
        } else if (freq.get(n + 1) &gt; 0 &amp;&amp; freq.get(n + 2) &gt; 0) {
            // Start new sequence n, n+1, n+2
            freq.set(n + 1, freq.get(n + 1) - 1);
            freq.set(n + 2, freq.get(n + 2) - 1);
            end.set(n + 3, (end.get(n + 3) || 0) + 1);
        } else return false;
        freq.set(n, freq.get(n) - 1);
    }
    return true;
}
// Input: [1,2,3,3,4,5]    =&gt; Output: true  ([1,2,3] and [3,4,5])
// Input: [1,2,3,3,4,4,5,5] =&gt; Output: true
// Input: [1,2,3,4,4,5]    =&gt; Output: false
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
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
                },
                {
                    q: "How do you find all connected components in an undirected graph?",
                    a: `<p>Iterate over all nodes. For each unvisited node, launch a <strong>BFS/DFS</strong> to visit all reachable nodes, marking them visited. Each launch = one component.</p>
<pre><code>function connectedComponents(n, edges) {
    const adj = Array.from({length: n}, () =&gt; []);
    for (const [u, v] of edges) { adj[u].push(v); adj[v].push(u); }
    const visited = new Array(n).fill(false);
    let components = 0;
    function dfs(node) {
        visited[node] = true;
        for (const nb of adj[node]) if (!visited[nb]) dfs(nb);
    }
    for (let i = 0; i &lt; n; i++) {
        if (!visited[i]) { components++; dfs(i); }
    }
    return components;
}
// Input: n=5, edges=[[0,1],[1,2],[3,4]]  =&gt; Output: 2
// Input: n=5, edges=[[0,1],[0,2],[3,4]]  =&gt; Output: 2  ({0,1,2} and {3,4})
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How do you find a topological sort of a directed acyclic graph (DAG)?",
                    a: `<p>Use <strong>Kahn's algorithm</strong> (BFS): compute in-degrees, start with all zero-in-degree nodes, process and reduce neighbors' in-degrees. An alternative is DFS post-order.</p>
<pre><code>function topologicalSort(numCourses, prerequisites) {
    const adj = Array.from({length: numCourses}, () =&gt; []);
    const inDegree = new Array(numCourses).fill(0);
    for (const [a, b] of prerequisites) { adj[b].push(a); inDegree[a]++; }
    const queue = [];
    for (let i = 0; i &lt; numCourses; i++) if (inDegree[i] === 0) queue.push(i);
    const order = [];
    while (queue.length) {
        const node = queue.shift();
        order.push(node);
        for (const nb of adj[node]) {
            if (--inDegree[nb] === 0) queue.push(nb);
        }
    }
    return order.length === numCourses ? order : []; // empty = cycle
}
// Input: n=4, edges=[[1,0],[2,0],[3,1],[3,2]]  =&gt; Output: [0,1,2,3] or [0,2,1,3]
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V + E)</p>`
                },
                {
                    q: "How do you detect a cycle in a directed graph?",
                    a: `<p>Use DFS with three states: <strong>unvisited (0)</strong>, <strong>in-progress/gray (1)</strong>, <strong>done/black (2)</strong>. A back edge to a gray node indicates a cycle.</p>
<pre><code>function hasCycleDirected(n, edges) {
    const adj = Array.from({length: n}, () =&gt; []);
    for (const [u, v] of edges) adj[u].push(v);
    const state = new Array(n).fill(0); // 0=unvisited,1=gray,2=black
    function dfs(node) {
        state[node] = 1;
        for (const nb of adj[node]) {
            if (state[nb] === 1) return true;  // back edge = cycle
            if (state[nb] === 0 &amp;&amp; dfs(nb)) return true;
        }
        state[node] = 2;
        return false;
    }
    for (let i = 0; i &lt; n; i++) if (state[i] === 0 &amp;&amp; dfs(i)) return true;
    return false;
}
// Input: n=4, edges=[[0,1],[1,2],[2,3],[3,1]]  =&gt; Output: true  (cycle 1-2-3)
// Input: n=4, edges=[[0,1],[0,2],[1,3]]         =&gt; Output: false
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How do you find the shortest path in a weighted graph? (Bellman-Ford)",
                    a: `<p><strong>Bellman-Ford</strong> handles negative weights (unlike Dijkstra). Relax all edges V-1 times. A Vth relaxation means a negative cycle exists.</p>
<pre><code>function bellmanFord(n, edges, src) {
    // edges: [[u, v, weight], ...]
    const dist = new Array(n).fill(Infinity);
    dist[src] = 0;
    for (let i = 0; i &lt; n - 1; i++) {
        for (const [u, v, w] of edges) {
            if (dist[u] !== Infinity &amp;&amp; dist[u] + w &lt; dist[v]) {
                dist[v] = dist[u] + w;
            }
        }
    }
    // Check for negative cycles
    for (const [u, v, w] of edges) {
        if (dist[u] !== Infinity &amp;&amp; dist[u] + w &lt; dist[v]) {
            return null; // negative cycle detected
        }
    }
    return dist;
}
// Input: n=5, src=0, edges=[[0,1,-1],[0,2,4],[1,2,3],[1,3,2],[1,4,2],[3,2,5],[3,1,1],[4,3,-3]]
// Output: [0,-1,2,-2,1]
</code></pre>
<p><strong>Time:</strong> O(V × E) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How do you find the minimum spanning tree? (Kruskal's Algorithm)",
                    a: `<p>Sort edges by weight. Use <strong>Union-Find</strong>: greedily add the cheapest edge that doesn't form a cycle. Stop when V-1 edges are added.</p>
<pre><code>function kruskal(n, edges) {
    edges.sort((a, b) =&gt; a[2] - b[2]); // sort by weight
    const parent = Array.from({length: n}, (_, i) =&gt; i);
    function find(x) { return parent[x] === x ? x : (parent[x] = find(parent[x])); }
    function union(x, y) {
        const px = find(x), py = find(y);
        if (px === py) return false; // would form cycle
        parent[px] = py;
        return true;
    }
    let mstCost = 0, edgesUsed = 0;
    for (const [u, v, w] of edges) {
        if (union(u, v)) { mstCost += w; edgesUsed++; }
        if (edgesUsed === n - 1) break;
    }
    return edgesUsed === n - 1 ? mstCost : -1; // -1 if not fully connected
}
// 4 nodes: edges=[[0,1,1],[0,2,4],[1,2,2],[1,3,5],[2,3,3]]
// MST: edges (0,1),(1,2),(2,3) cost = 1+2+3 = 6
</code></pre>
<p><strong>Time:</strong> O(E log E) for sorting &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How do you clone a graph?",
                    a: `<p>Use DFS/BFS with a <strong>hash map</strong> from original node → cloned node. For each unvisited node, create a clone and recursively clone its neighbors.</p>
<pre><code>function cloneGraph(node) {
    if (!node) return null;
    const visited = new Map();
    function dfs(curr) {
        if (visited.has(curr)) return visited.get(curr);
        const clone = { val: curr.val, neighbors: [] };
        visited.set(curr, clone);
        for (const nb of curr.neighbors) {
            clone.neighbors.push(dfs(nb));
        }
        return clone;
    }
    return dfs(node);
}
// Input: node 1 with neighbors [2,4], node 2 with [1,3], etc.
// Output: deep copy of the entire graph
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How do you find bridges (critical connections) in a network?",
                    a: `<p>Use <strong>Tarjan's bridge-finding algorithm</strong>. Track discovery time and low values. An edge (u,v) is a bridge if low[v] &gt; disc[u] (v cannot reach u or earlier without going through u-v).</p>
<pre><code>function criticalConnections(n, connections) {
    const adj = Array.from({length: n}, () =&gt; []);
    for (const [u, v] of connections) { adj[u].push(v); adj[v].push(u); }
    const disc = new Array(n).fill(-1);
    const low  = new Array(n).fill(-1);
    const bridges = [];
    let timer = 0;
    function dfs(node, parent) {
        disc[node] = low[node] = timer++;
        for (const nb of adj[node]) {
            if (disc[nb] === -1) {
                dfs(nb, node);
                low[node] = Math.min(low[node], low[nb]);
                if (low[nb] &gt; disc[node]) bridges.push([node, nb]);
            } else if (nb !== parent) {
                low[node] = Math.min(low[node], disc[nb]);
            }
        }
    }
    for (let i = 0; i &lt; n; i++) if (disc[i] === -1) dfs(i, -1);
    return bridges;
}
// Input: n=4, connections=[[0,1],[1,2],[2,0],[1,3]]  =&gt; Output: [[1,3]]
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V)</p>`
                },
                {
                    q: "How does Union-Find (Disjoint Set Union) work?",
                    a: `<p><strong>Union-Find</strong> efficiently tracks which elements belong to the same set. Two key operations: <code>find</code> (with path compression) and <code>union</code> (with rank).</p>
<pre><code>class UnionFind {
    constructor(n) {
        this.parent = Array.from({length: n}, (_, i) =&gt; i);
        this.rank = new Array(n).fill(0);
    }
    find(x) {
        if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]); // path compression
        return this.parent[x];
    }
    union(x, y) {
        const px = this.find(x), py = this.find(y);
        if (px === py) return false;
        if (this.rank[px] &lt; this.rank[py]) this.parent[px] = py;
        else if (this.rank[px] &gt; this.rank[py]) this.parent[py] = px;
        else { this.parent[py] = px; this.rank[px]++; }
        return true;
    }
}
// UF(5): union(0,1), union(1,2) =&gt; find(0)===find(2) is true
// union(3,4): find(0)!==find(3) (different components)
</code></pre>
<p><strong>Time:</strong> O(α(n)) per operation (inverse Ackermann, nearly O(1)) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the number of provinces (groups of connected cities)?",
                    a: `<p>Treat as connected components. Use DFS or <strong>Union-Find</strong>: merge connected cities. Count distinct roots at the end.</p>
<pre><code>function findCircleNum(isConnected) {
    const n = isConnected.length;
    const visited = new Array(n).fill(false);
    function dfs(i) {
        visited[i] = true;
        for (let j = 0; j &lt; n; j++) {
            if (isConnected[i][j] === 1 &amp;&amp; !visited[j]) dfs(j);
        }
    }
    let provinces = 0;
    for (let i = 0; i &lt; n; i++) {
        if (!visited[i]) { provinces++; dfs(i); }
    }
    return provinces;
}
// Input: [[1,1,0],[1,1,0],[0,0,1]]  =&gt; Output: 2  ({0,1} and {2})
// Input: [[1,0,0],[0,1,0],[0,0,1]]  =&gt; Output: 3  (all separate)
</code></pre>
<p><strong>Time:</strong> O(n²) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find all strongly connected components (Kosaraju's algorithm)?",
                    a: `<p>Two-pass DFS. Pass 1: run DFS on original graph, push nodes to stack in finish order. Pass 2: process nodes from stack on the <strong>transposed graph</strong>.</p>
<pre><code>function kosarajuSCC(n, edges) {
    const adj  = Array.from({length: n}, () =&gt; []);
    const radj = Array.from({length: n}, () =&gt; []);
    for (const [u, v] of edges) { adj[u].push(v); radj[v].push(u); }
    const visited = new Array(n).fill(false);
    const stack = [];
    function dfs1(u) {
        visited[u] = true;
        for (const v of adj[u]) if (!visited[v]) dfs1(v);
        stack.push(u);
    }
    for (let i = 0; i &lt; n; i++) if (!visited[i]) dfs1(i);
    visited.fill(false);
    let sccCount = 0;
    function dfs2(u) {
        visited[u] = true;
        for (const v of radj[u]) if (!visited[v]) dfs2(v);
    }
    while (stack.length) {
        const node = stack.pop();
        if (!visited[node]) { sccCount++; dfs2(node); }
    }
    return sccCount;
}
// Directed graph with 4 SCCs: each strongly connected cluster counts as 1
</code></pre>
<p><strong>Time:</strong> O(V + E) &nbsp;|&nbsp; <strong>Space:</strong> O(V + E)</p>`
                },
                {
                    q: "How do you solve the word ladder problem? (BFS on implicit graph)",
                    a: `<p>Each word is a node; edges exist between words differing by one letter. Use <strong>BFS</strong> for the shortest path from beginWord to endWord.</p>
<pre><code>function ladderLength(beginWord, endWord, wordList) {
    const wordSet = new Set(wordList);
    if (!wordSet.has(endWord)) return 0;
    const queue = [[beginWord, 1]]; // [word, steps]
    const visited = new Set([beginWord]);
    while (queue.length) {
        const [word, steps] = queue.shift();
        for (let i = 0; i &lt; word.length; i++) {
            for (let c = 97; c &lt;= 122; c++) { // a-z
                const next = word.slice(0, i) + String.fromCharCode(c) + word.slice(i+1);
                if (next === endWord) return steps + 1;
                if (wordSet.has(next) &amp;&amp; !visited.has(next)) {
                    visited.add(next); queue.push([next, steps + 1]);
                }
            }
        }
    }
    return 0;
}
// Input: beginWord="hit", endWord="cog", wordList=["hot","dot","dog","lot","log","cog"]
// Output: 5  (hit-&gt;hot-&gt;dot-&gt;dog-&gt;cog)
</code></pre>
<p><strong>Time:</strong> O(M² × N) where M=word length, N=wordList size &nbsp;|&nbsp; <strong>Space:</strong> O(M² × N)</p>`
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
                },
                {
                    q: "How does counting sort work, and when is it more efficient than comparison-based sorts?",
                    a: `<p><strong>Counting Sort</strong> is non-comparison based. It counts occurrences of each value, builds a prefix-sum array, then places elements at correct positions. Best for small integer ranges.</p>
<pre><code>function countingSort(arr) {
    const max = Math.max(...arr);
    const count = new Array(max + 1).fill(0);
    for (const n of arr) count[n]++;
    // Build prefix sums (cumulative)
    for (let i = 1; i &lt; count.length; i++) count[i] += count[i-1];
    const output = new Array(arr.length);
    for (let i = arr.length - 1; i &gt;= 0; i--) {
        output[--count[arr[i]]] = arr[i];
    }
    return output;
}
// Input: [4,2,2,8,3,3,1]   =&gt; Output: [1,2,2,3,3,4,8]
// Input: [1,0,2,1,0]       =&gt; Output: [0,0,1,1,2]
</code></pre>
<p><strong>Time:</strong> O(n + k) where k = range &nbsp;|&nbsp; <strong>Space:</strong> O(k) — optimal when k = O(n)</p>`
                },
                {
                    q: "How does radix sort work?",
                    a: `<p><strong>Radix Sort</strong> sorts integers digit by digit from least significant to most significant (LSD radix sort), using a stable sort (counting sort) for each digit.</p>
<pre><code>function radixSort(arr) {
    const max = Math.max(...arr);
    for (let exp = 1; Math.floor(max / exp) &gt; 0; exp *= 10) {
        countingSortByDigit(arr, exp);
    }
    return arr;
}
function countingSortByDigit(arr, exp) {
    const n = arr.length, count = new Array(10).fill(0), output = new Array(n);
    for (const n of arr) count[Math.floor(n / exp) % 10]++;
    for (let i = 1; i &lt; 10; i++) count[i] += count[i-1];
    for (let i = n - 1; i &gt;= 0; i--) {
        const digit = Math.floor(arr[i] / exp) % 10;
        output[--count[digit]] = arr[i];
    }
    for (let i = 0; i &lt; n; i++) arr[i] = output[i];
}
// Input: [170,45,75,90,802,24,2,66]  =&gt; Output: [2,24,45,66,75,90,170,802]
</code></pre>
<p><strong>Time:</strong> O(d × (n + k)) where d=digits, k=radix &nbsp;|&nbsp; <strong>Space:</strong> O(n + k)</p>`
                },
                {
                    q: "How do you implement a randomized QuickSort (QuickSort with random pivot)?",
                    a: `<p>Randomly select the pivot to reduce the chance of hitting worst-case O(n²) on sorted inputs. Expected performance remains O(n log n).</p>
<pre><code>function randomizedQuickSort(arr, lo = 0, hi = arr.length - 1) {
    if (lo &gt;= hi) return arr;
    // Random pivot
    const pivotIdx = Math.floor(Math.random() * (hi - lo + 1)) + lo;
    [arr[pivotIdx], arr[hi]] = [arr[hi], arr[pivotIdx]]; // move to end
    // Partition
    let p = lo;
    for (let i = lo; i &lt; hi; i++) {
        if (arr[i] &lt;= arr[hi]) { [arr[p], arr[i]] = [arr[i], arr[p]]; p++; }
    }
    [arr[p], arr[hi]] = [arr[hi], arr[p]]; // place pivot
    randomizedQuickSort(arr, lo, p - 1);
    randomizedQuickSort(arr, p + 1, hi);
    return arr;
}
// Input: [3,1,4,1,5,9,2,6]  =&gt; Output: [1,1,2,3,4,5,6,9]
</code></pre>
<p><strong>Time:</strong> O(n log n) expected, O(n²) worst &nbsp;|&nbsp; <strong>Space:</strong> O(log n) average</p>`
                },
                {
                    q: "How do you sort a nearly sorted (k-sorted) array efficiently?",
                    a: `<p>Use a <strong>min-heap of size k+1</strong>. For a k-sorted array, each element is at most k positions from its correct position. Slide a window of k+1 through the array.</p>
<pre><code>function sortKSortedArray(arr, k) {
    // Use a simulated min-heap (sorted slice of size k+1)
    const result = [];
    const heap = arr.slice(0, k + 1).sort((a, b) =&gt; a - b);
    for (let i = k + 1; i &lt; arr.length; i++) {
        result.push(heap.shift()); // extract min
        // Insert arr[i] in sorted position
        let j = heap.length;
        while (j &gt; 0 &amp;&amp; heap[j-1] &gt; arr[i]) { heap[j] = heap[j-1]; j--; }
        heap[j] = arr[i];
    }
    while (heap.length) result.push(heap.shift());
    return result;
}
// k=3: [6,5,3,2,8,10,9]  =&gt; Output: [2,3,5,6,8,9,10]
</code></pre>
<p><strong>Time:</strong> O(n log k) &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How do you find the number of inversions in an array (modified merge sort)?",
                    a: `<p>An <strong>inversion</strong> is a pair (i,j) where i &lt; j but arr[i] &gt; arr[j]. Count them during merge sort: when right element is picked before left, all remaining left elements form inversions.</p>
<pre><code>function countInversions(arr) {
    let count = 0;
    function mergeSort(a) {
        if (a.length &lt;= 1) return a;
        const mid = Math.floor(a.length / 2);
        const left  = mergeSort(a.slice(0, mid));
        const right = mergeSort(a.slice(mid));
        const merged = [];
        let i = 0, j = 0;
        while (i &lt; left.length &amp;&amp; j &lt; right.length) {
            if (left[i] &lt;= right[j]) { merged.push(left[i++]); }
            else { count += left.length - i; merged.push(right[j++]); }
        }
        return [...merged, ...left.slice(i), ...right.slice(j)];
    }
    mergeSort(arr);
    return count;
}
// Input: [2,4,1,3,5]   =&gt; Output: 3  ((2,1),(4,1),(4,3))
// Input: [5,4,3,2,1]   =&gt; Output: 10 (all pairs are inversions)
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you sort a list of 0s, 1s, and 2s? (Dutch National Flag)",
                    a: `<p>Use <strong>three pointers</strong>: <code>low</code>, <code>mid</code>, <code>high</code>. Invariant: arr[0..low-1]=0, arr[low..mid-1]=1, arr[high+1..n-1]=2. Process until mid &gt; high.</p>
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
            high--; // don't increment mid (new nums[mid] is unknown)
        }
    }
}
// Input: [2,0,2,1,1,0]   =&gt; Output: [0,0,1,1,2,2]
// Input: [2,0,1]          =&gt; Output: [0,1,2]
</code></pre>
<p><strong>Time:</strong> O(n) — single pass &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the kth largest element in O(n) average using QuickSelect?",
                    a: `<p><strong>QuickSelect</strong> is like QuickSort but only recurses into the side that contains the kth element. Average case O(n) because it avoids sorting both halves.</p>
<pre><code>function quickSelect(nums, k) {
    // kth largest = index (n-k) in sorted order
    function select(arr, lo, hi, target) {
        if (lo === hi) return arr[lo];
        const pivotIdx = Math.floor(Math.random() * (hi - lo + 1)) + lo;
        [arr[pivotIdx], arr[hi]] = [arr[hi], arr[pivotIdx]];
        let p = lo;
        for (let i = lo; i &lt; hi; i++) {
            if (arr[i] &lt;= arr[hi]) { [arr[p], arr[i]] = [arr[i], arr[p]]; p++; }
        }
        [arr[p], arr[hi]] = [arr[hi], arr[p]];
        if (p === target) return arr[p];
        if (p &lt; target) return select(arr, p+1, hi, target);
        return select(arr, lo, p-1, target);
    }
    return select(nums, 0, nums.length-1, nums.length - k);
}
// Input: nums=[3,2,1,5,6,4], k=2  =&gt; Output: 5
// Input: nums=[3,2,3,1,2,4,5,5,6], k=4  =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(n) average, O(n²) worst &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How does Tim Sort work (the sort used in JavaScript and Python)?",
                    a: `<p><strong>TimSort</strong> is a hybrid of <strong>Insertion Sort</strong> and <strong>Merge Sort</strong>. It exploits natural runs (already-sorted sequences) in real-world data for excellent practical performance.</p>
<ul>
<li><strong>Step 1:</strong> Divide array into small chunks (runs, typically 32–64 elements). Sort each with Insertion Sort.</li>
<li><strong>Step 2:</strong> Merge runs using Merge Sort.</li>
<li><strong>Key optimization:</strong> If array is already sorted, TimSort runs in O(n).</li>
</ul>
<pre><code>// TimSort complexity:
// Best:    O(n)       — already sorted / reverse sorted
// Average: O(n log n)
// Worst:   O(n log n)
// Space:   O(n)       — stable, used in Array.prototype.sort()

// In JavaScript, Array.sort() uses TimSort (V8 engine)
[3,1,4,1,5,9,2,6].sort((a,b) =&gt; a-b) // =&gt; [1,1,2,3,4,5,6,9]
</code></pre>
<p>TimSort is <strong>stable</strong> and performs well when data has partially sorted regions (common in real data).</p>`
                },
                {
                    q: "How do you sort an array using only a stack (stack sort)?",
                    a: `<p>Use two stacks: pop from input, insert into sorted output by temporarily moving elements back to input to find the correct position.</p>
<pre><code>function stackSort(arr) {
    const sorted = [];
    while (arr.length) {
        const tmp = arr.pop();
        // Move elements from sorted that are greater than tmp back to arr
        while (sorted.length &amp;&amp; sorted[sorted.length-1] &gt; tmp) {
            arr.push(sorted.pop());
        }
        sorted.push(tmp);
    }
    return sorted; // sorted[0] = min
}
// Input (as stack, top first): [3,1,4,2]  =&gt; Output: [1,2,3,4] (min at top)
// Input: [5,1,3,2,4]                      =&gt; Output: [1,2,3,4,5]
</code></pre>
<p><strong>Time:</strong> O(n²) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you perform external sort for data that doesn't fit in memory?",
                    a: `<p><strong>External Sort</strong> is used when data is too large for RAM. Classic approach: <strong>External Merge Sort</strong>.</p>
<ol>
<li><strong>Divide:</strong> Read chunks that fit in memory, sort each (quicksort), write back as sorted "runs" to disk.</li>
<li><strong>Merge:</strong> Use a k-way merge (with a min-heap) to merge all sorted runs into the final output.</li>
</ol>
<pre><code>// Pseudocode for External Sort:
// Phase 1 — Create sorted runs
for each chunk of data that fits in memory:
    load chunk into RAM
    sort in memory (e.g., quicksort)
    write sorted chunk to disk as "run_i.tmp"

// Phase 2 — k-way merge
open all run files simultaneously
use min-heap: [smallest_value, run_index]
while heap not empty:
    extract min, write to output
    read next element from same run, push to heap
</code></pre>
<p><strong>Complexity:</strong> O(n log n) with O(B) memory buffer | <strong>Passes:</strong> ⌈log_k(n/B)⌉ merge passes where k = number of runs and B = buffer size</p>`
                },
                {
                    q: "How do you implement bucket sort?",
                    a: `<p><strong>Bucket Sort</strong> distributes elements into buckets based on value range, sorts each bucket (insertion sort), then concatenates. Works well for uniformly distributed floats in [0,1).</p>
<pre><code>function bucketSort(arr) {
    const n = arr.length;
    if (!n) return arr;
    // Create n empty buckets
    const buckets = Array.from({length: n}, () =&gt; []);
    const min = Math.min(...arr), max = Math.max(...arr);
    const range = max - min || 1;
    for (const num of arr) {
        const idx = Math.floor(((num - min) / range) * (n - 1));
        buckets[idx].push(num);
    }
    const result = [];
    for (const bucket of buckets) {
        bucket.sort((a, b) =&gt; a - b); // insertion sort for small buckets
        result.push(...bucket);
    }
    return result;
}
// Input: [0.78, 0.17, 0.39, 0.26, 0.72, 0.94]
// Output: [0.17, 0.26, 0.39, 0.72, 0.78, 0.94]
</code></pre>
<p><strong>Time:</strong> O(n + k) average, O(n²) worst &nbsp;|&nbsp; <strong>Space:</strong> O(n + k)</p>`
                },
                {
                    q: "How do you sort a linked list using quicksort?",
                    a: `<p>Pick a <strong>pivot</strong>, partition the list into three sub-lists (less, equal, greater), recursively sort less and greater, then concatenate.</p>
<pre><code>function quickSortLL(head) {
    if (!head || !head.next) return head;
    const pivot = head.val;
    let lessHead = null, lessTail = null;
    let equalHead = null, equalTail = null;
    let greaterHead = null, greaterTail = null;
    let curr = head;
    function append(val, headRef, tailRef) {
        const node = { val, next: null };
        if (!headRef) { headRef = node; tailRef = node; }
        else { tailRef.next = node; tailRef = node; }
        return [headRef, tailRef];
    }
    while (curr) {
        if (curr.val &lt; pivot) [lessHead, lessTail] = append(curr.val, lessHead, lessTail);
        else if (curr.val === pivot) [equalHead, equalTail] = append(curr.val, equalHead, equalTail);
        else [greaterHead, greaterTail] = append(curr.val, greaterHead, greaterTail);
        curr = curr.next;
    }
    const sortedLess    = quickSortLL(lessHead);
    const sortedGreater = quickSortLL(greaterHead);
    if (lessTail) { lessTail.next = equalHead; equalTail.next = sortedGreater; return sortedLess; }
    else { equalTail.next = sortedGreater; return equalHead; }
}
// Input: 4-&gt;2-&gt;8-&gt;1-&gt;3   =&gt; Output: 1-&gt;2-&gt;3-&gt;4-&gt;8
</code></pre>
<p><strong>Time:</strong> O(n log n) average &nbsp;|&nbsp; <strong>Space:</strong> O(log n) stack</p>`
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
                },
                {
                    q: "How do you search in a 2D matrix where each row and column is sorted?",
                    a: `<p>Start from the <strong>top-right corner</strong>. If current > target, move left. If current < target, move down. One step eliminates a full row or column.</p>
<pre><code>function searchMatrix2D(matrix, target) {
    let r = 0, c = matrix[0].length - 1;
    while (r &lt; matrix.length &amp;&amp; c &gt;= 0) {
        if (matrix[r][c] === target) return true;
        else if (matrix[r][c] &gt; target) c--; // trim column
        else r++;                            // trim row
    }
    return false;
}
// Input: [[1,4,7],[2,5,8],[3,6,9]], target=5  =&gt; Output: true
// Input: [[1,4,7],[2,5,8],[3,6,9]], target=4  =&gt; Output: true
// Input: [[1,4],[2,5]], target=3              =&gt; Output: false
</code></pre>
<p><strong>Time:</strong> O(m + n) — at most m+n steps &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the peak element in an array using binary search?",
                    a: `<p>A peak is an element greater than its neighbors. Use binary search: if mid < mid+1, the peak is to the right; otherwise it's to the left (or is mid itself).</p>
<pre><code>function findPeakElement(nums) {
    let lo = 0, hi = nums.length - 1;
    while (lo &lt; hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (nums[mid] &lt; nums[mid + 1]) lo = mid + 1; // upslope → peak right
        else hi = mid;                               // downslope → peak here or left
    }
    return lo;
}
// Input: [1,2,3,1]     =&gt; Output: 2  (index of peak 3)
// Input: [1,2,1,3,5,6,4] =&gt; Output: 5 (index of 6)
// Input: [1]           =&gt; Output: 0
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the first and last position of a target in a sorted array?",
                    a: `<p>Run <strong>two binary searches</strong>: one to find the leftmost occurrence (lower_bound) and one for the rightmost (upper_bound - 1).</p>
<pre><code>function searchRange(nums, target) {
    function lowerBound() {
        let lo = 0, hi = nums.length - 1, result = -1;
        while (lo &lt;= hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (nums[mid] === target) { result = mid; hi = mid - 1; } // keep searching left
            else if (nums[mid] &lt; target) lo = mid + 1;
            else hi = mid - 1;
        }
        return result;
    }
    function upperBound() {
        let lo = 0, hi = nums.length - 1, result = -1;
        while (lo &lt;= hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (nums[mid] === target) { result = mid; lo = mid + 1; } // keep searching right
            else if (nums[mid] &lt; target) lo = mid + 1;
            else hi = mid - 1;
        }
        return result;
    }
    return [lowerBound(), upperBound()];
}
// Input: nums=[5,7,7,8,8,10], target=8  =&gt; Output: [3,4]
// Input: nums=[5,7,7,8,8,10], target=6  =&gt; Output: [-1,-1]
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you search in a rotated sorted array with duplicates?",
                    a: `<p>Extend the no-duplicates approach: when mid == left, increment left to handle the ambiguous case where you can't determine which side is sorted.</p>
<pre><code>function searchInRotatedWithDups(nums, target) {
    let lo = 0, hi = nums.length - 1;
    while (lo &lt;= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (nums[mid] === target) return true;
        // Handle duplicates: can't determine which side is sorted
        if (nums[lo] === nums[mid] &amp;&amp; nums[mid] === nums[hi]) {
            lo++; hi--;
        } else if (nums[lo] &lt;= nums[mid]) { // left half sorted
            if (nums[lo] &lt;= target &amp;&amp; target &lt; nums[mid]) hi = mid - 1;
            else lo = mid + 1;
        } else { // right half sorted
            if (nums[mid] &lt; target &amp;&amp; target &lt;= nums[hi]) lo = mid + 1;
            else hi = mid - 1;
        }
    }
    return false;
}
// Input: nums=[2,5,6,0,0,1,2], target=0  =&gt; Output: true
// Input: nums=[2,5,6,0,0,1,2], target=3  =&gt; Output: false
</code></pre>
<p><strong>Time:</strong> O(log n) average, O(n) worst with many duplicates &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the square root of a number using binary search?",
                    a: `<p>Binary search in the range [0, x]. Find the largest integer m where m² ≤ x. Avoid overflow by using BigInt or checking m ≤ x/m instead of m*m.</p>
<pre><code>function mySqrt(x) {
    if (x &lt; 2) return x;
    let lo = 1, hi = Math.floor(x / 2); // sqrt(x) &lt;= x/2 for x &gt;= 4
    while (lo &lt;= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (mid * mid === x) return mid;
        else if (mid * mid &lt; x) lo = mid + 1;
        else hi = mid - 1;
    }
    return hi; // floor of sqrt
}
// Input: 4    =&gt; Output: 2
// Input: 8    =&gt; Output: 2  (floor of 2.828...)
// Input: 100  =&gt; Output: 10
</code></pre>
<p><strong>Time:</strong> O(log x) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the minimum in a rotated sorted array?",
                    a: `<p>Binary search: the minimum is in the unsorted half. Compare mid with hi to determine which half is sorted and where the rotation point (minimum) is.</p>
<pre><code>function findMin(nums) {
    let lo = 0, hi = nums.length - 1;
    while (lo &lt; hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (nums[mid] &gt; nums[hi]) lo = mid + 1; // min is in right half
        else hi = mid;                           // min is at mid or left
    }
    return nums[lo];
}
// Input: [3,4,5,1,2]      =&gt; Output: 1
// Input: [4,5,6,7,0,1,2]  =&gt; Output: 0
// Input: [1]              =&gt; Output: 1
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you apply binary search to find a threshold (binary search on answer)?",
                    a: `<p>When you need to find the minimum/maximum value satisfying a condition, binary search on the answer space. Define a <code>canAchieve(mid)</code> predicate and narrow the search.</p>
<pre><code>// Example: Koko eating bananas — minimum eating speed to finish in h hours
function minEatingSpeed(piles, h) {
    let lo = 1, hi = Math.max(...piles);
    while (lo &lt; hi) {
        const mid = Math.floor((lo + hi) / 2);
        const hours = piles.reduce((sum, p) =&gt; sum + Math.ceil(p / mid), 0);
        if (hours &lt;= h) hi = mid; // can eat slower
        else lo = mid + 1;        // need to eat faster
    }
    return lo;
}
// Input: piles=[3,6,7,11], h=8   =&gt; Output: 4  (speed 4 bananas/hr)
// Input: piles=[30,11,23,4,20], h=5 =&gt; Output: 30
</code></pre>
<p><strong>Time:</strong> O(n log m) where m = max pile &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you count occurrences of a target in a sorted array using binary search?",
                    a: `<p>Find the first (lower bound) and last (upper bound) positions of the target using two binary searches. Count = last - first + 1.</p>
<pre><code>function countOccurrences(nums, target) {
    function lowerBound(nums, target) {
        let lo = 0, hi = nums.length;
        while (lo &lt; hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (nums[mid] &lt; target) lo = mid + 1; else hi = mid;
        }
        return lo;
    }
    const first = lowerBound(nums, target);
    const last  = lowerBound(nums, target + 1);
    return last - first;
}
// Input: [1,2,2,2,3,4], target=2   =&gt; Output: 3
// Input: [1,3,5,7,9], target=4     =&gt; Output: 0
// Input: [2,2,2,2], target=2       =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you implement an order-statistics tree (find kth element in a sorted stream)?",
                    a: `<p>Maintain a <strong>sorted array</strong> (or BST) with binary search for insertion position using <code>bisect</code>-like logic. The kth element is at index k-1.</p>
<pre><code>class OrderStatistics {
    constructor() { this.sorted = []; }
    insert(val) {
        // Binary search for insertion point
        let lo = 0, hi = this.sorted.length;
        while (lo &lt; hi) {
            const mid = Math.floor((lo + hi) / 2);
            if (this.sorted[mid] &lt; val) lo = mid + 1; else hi = mid;
        }
        this.sorted.splice(lo, 0, val);
    }
    kthSmallest(k) {
        return this.sorted[k - 1];
    }
}
const os = new OrderStatistics();
os.insert(5); os.insert(2); os.insert(8); os.insert(1);
os.kthSmallest(2); // =&gt; 2  (sorted: [1,2,5,8])
os.kthSmallest(3); // =&gt; 5
</code></pre>
<p><strong>Insert Time:</strong> O(n) — splice is O(n) &nbsp;|&nbsp; <strong>Query:</strong> O(1)</p>`
                },
                {
                    q: "How does the exponential search algorithm work?",
                    a: `<p><strong>Exponential Search</strong> first finds a range [2^i, 2^(i+1)) where the target exists (by doubling), then applies binary search within that range. Useful when the array is unbounded.</p>
<pre><code>function exponentialSearch(arr, target) {
    if (arr[0] === target) return 0;
    // Find range: double i until arr[i] >= target  
    let i = 1;
    while (i &lt; arr.length &amp;&amp; arr[i] &lt;= target) i *= 2;
    // Binary search in [i/2, min(i, arr.length-1)]
    let lo = Math.floor(i / 2), hi = Math.min(i, arr.length - 1);
    while (lo &lt;= hi) {
        const mid = Math.floor((lo + hi) / 2);
        if (arr[mid] === target) return mid;
        else if (arr[mid] &lt; target) lo = mid + 1;
        else hi = mid - 1;
    }
    return -1;
}
// Input: [1,2,3,4,5,6,7,8,9,10], target=7  =&gt; Output: 6 (index)
// Input: [1,10,100,1000], target=100         =&gt; Output: 2
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you perform a binary search on a floating point answer?",
                    a: `<p>When the answer is a real number, binary search with a <strong>precision threshold</strong> (epsilon). Iterate until hi - lo &lt; eps.</p>
<pre><code>// Example: find cube root of a number
function cubeRoot(n) {
    let lo = 0, hi = Math.max(1, n);
    const eps = 1e-9;
    while (hi - lo &gt; eps) {
        const mid = (lo + hi) / 2;
        if (mid * mid * mid &lt; n) lo = mid;
        else hi = mid;
    }
    return (lo + hi) / 2;
}
// Input: 27   =&gt; Output: 3.0
// Input: 8    =&gt; Output: 2.0
// Input: 0.5  =&gt; Output: ~0.7937

// Another example: find x such that f(x) = target
// Binary search works on any monotone function f
</code></pre>
<p><strong>Time:</strong> O(log((hi-lo)/eps)) iterations &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the median of two sorted arrays using binary search?",
                    a: `<p>Binary search on the <strong>partition point</strong> of the shorter array. Partition both arrays such that left halves combined have (m+n)/2 elements. Check if the partition is correct.</p>
<pre><code>function findMedianSortedArrays(nums1, nums2) {
    if (nums1.length &gt; nums2.length) return findMedianSortedArrays(nums2, nums1);
    const m = nums1.length, n = nums2.length;
    let lo = 0, hi = m;
    while (lo &lt;= hi) {
        const i = Math.floor((lo + hi) / 2);   // partition in nums1
        const j = Math.floor((m + n + 1) / 2) - i; // partition in nums2
        const maxL1 = i === 0 ? -Infinity : nums1[i-1];
        const minR1 = i === m ?  Infinity : nums1[i];
        const maxL2 = j === 0 ? -Infinity : nums2[j-1];
        const minR2 = j === n ?  Infinity : nums2[j];
        if (maxL1 &lt;= minR2 &amp;&amp; maxL2 &lt;= minR1) {
            if ((m + n) % 2 === 1) return Math.max(maxL1, maxL2);
            return (Math.max(maxL1, maxL2) + Math.min(minR1, minR2)) / 2;
        } else if (maxL1 &gt; minR2) hi = i - 1;
        else lo = i + 1;
    }
}
// Input: nums1=[1,3], nums2=[2]        =&gt; Output: 2.0
// Input: nums1=[1,2], nums2=[3,4]      =&gt; Output: 2.5
</code></pre>
<p><strong>Time:</strong> O(log(min(m,n))) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
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
                },
                {
                    q: "How do you solve the coin change problem using DP?",
                    a: `<p>Build a 1D DP array where <code>dp[i]</code> = minimum coins needed for amount i. For each coin, update all reachable amounts.</p>
<pre><code>function coinChange(coins, amount) {
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i &lt;= amount; i++) {
        for (const coin of coins) {
            if (coin &lt;= i &amp;&amp; dp[i - coin] + 1 &lt; dp[i]) {
                dp[i] = dp[i - coin] + 1;
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}
// Input: coins=[1,5,11], amount=15   =&gt; Output: 3  (5+5+5)
// Input: coins=[2], amount=3         =&gt; Output: -1 (impossible)
// Input: coins=[1,2,5], amount=11    =&gt; Output: 3  (5+5+1)
</code></pre>
<p><strong>Time:</strong> O(amount × coins) &nbsp;|&nbsp; <strong>Space:</strong> O(amount)</p>`
                },
                {
                    q: "How do you solve the 0/1 knapsack problem using DP?",
                    a: `<p>2D DP: <code>dp[i][w]</code> = max value using first i items with weight limit w. Either skip item i or include it (if it fits).</p>
<pre><code>function knapsack(weights, values, capacity) {
    const n = weights.length;
    const dp = Array.from({length: n+1}, () =&gt; new Array(capacity+1).fill(0));
    for (let i = 1; i &lt;= n; i++) {
        for (let w = 0; w &lt;= capacity; w++) {
            dp[i][w] = dp[i-1][w]; // skip item i
            if (weights[i-1] &lt;= w) {
                dp[i][w] = Math.max(dp[i][w], dp[i-1][w - weights[i-1]] + values[i-1]);
            }
        }
    }
    return dp[n][capacity];
}
// weights=[1,3,4,5], values=[1,4,5,7], capacity=7
// Output: 9  (items with weight 3 and 4, values 4+5)
</code></pre>
<p><strong>Time:</strong> O(n × W) &nbsp;|&nbsp; <strong>Space:</strong> O(n × W), can be optimized to O(W)</p>`
                },
                {
                    q: "How do you find the longest common subsequence (LCS)?",
                    a: `<p><code>dp[i][j]</code> = LCS length of text1[0..i-1] and text2[0..j-1]. If characters match, extend from dp[i-1][j-1]; otherwise take max of dp[i-1][j] and dp[i][j-1].</p>
<pre><code>function longestCommonSubsequence(text1, text2) {
    const m = text1.length, n = text2.length;
    const dp = Array.from({length: m+1}, () =&gt; new Array(n+1).fill(0));
    for (let i = 1; i &lt;= m; i++) {
        for (let j = 1; j &lt;= n; j++) {
            if (text1[i-1] === text2[j-1]) dp[i][j] = dp[i-1][j-1] + 1;
            else dp[i][j] = Math.max(dp[i-1][j], dp[i][j-1]);
        }
    }
    return dp[m][n];
}
// Input: text1="abcde", text2="ace"   =&gt; Output: 3  ("ace")
// Input: text1="abc",   text2="abc"   =&gt; Output: 3
// Input: text1="abc",   text2="def"   =&gt; Output: 0
</code></pre>
<p><strong>Time:</strong> O(m × n) &nbsp;|&nbsp; <strong>Space:</strong> O(m × n)</p>`
                },
                {
                    q: "How do you solve the edit distance (Levenshtein distance) problem?",
                    a: `<p><code>dp[i][j]</code> = min operations to convert word1[0..i-1] to word2[0..j-1]. Operations: insert, delete, replace. If chars match: no cost; otherwise 1 + min of three operations.</p>
<pre><code>function minDistance(word1, word2) {
    const m = word1.length, n = word2.length;
    const dp = Array.from({length: m+1}, (_, i) =&gt; Array.from({length: n+1}, (_, j) =&gt; i || j));
    for (let i = 1; i &lt;= m; i++) {
        for (let j = 1; j &lt;= n; j++) {
            if (word1[i-1] === word2[j-1]) dp[i][j] = dp[i-1][j-1];
            else dp[i][j] = 1 + Math.min(
                dp[i-1][j],   // delete from word1
                dp[i][j-1],   // insert into word1
                dp[i-1][j-1]  // replace
            );
        }
    }
    return dp[m][n];
}
// Input: word1="horse", word2="ros"   =&gt; Output: 3
// Input: word1="intention", word2="execution" =&gt; Output: 5
</code></pre>
<p><strong>Time:</strong> O(m × n) &nbsp;|&nbsp; <strong>Space:</strong> O(m × n), can be O(n)</p>`
                },
                {
                    q: "How do you count the number of ways to decode a message?",
                    a: `<p>DP where <code>dp[i]</code> = number of ways to decode s[0..i-1]. Take one digit (valid if non-zero) or two digits (valid if 10-26). Add values from valid positions.</p>
<pre><code>function numDecodings(s) {
    if (!s || s[0] === '0') return 0;
    const n = s.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; dp[1] = 1;
    for (let i = 2; i &lt;= n; i++) {
        const one = Number(s[i-1]);
        const two = Number(s.slice(i-2, i));
        if (one &gt;= 1) dp[i] += dp[i-1]; // single digit
        if (two &gt;= 10 &amp;&amp; two &lt;= 26) dp[i] += dp[i-2]; // two digits
    }
    return dp[n];
}
// Input: "12"    =&gt; Output: 2   ("AB"=1,2 or "L"=12)
// Input: "226"   =&gt; Output: 3   ("BZ","VF","BBF")
// Input: "06"    =&gt; Output: 0   (leading zero, invalid)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n), can be O(1)</p>`
                },
                {
                    q: "How do you solve the longest increasing subsequence (LIS)?",
                    a: `<p>DP: <code>dp[i]</code> = length of LIS ending at index i. For each i, check all j &lt; i where arr[j] &lt; arr[i]. Patience sort / binary search gives O(n log n).</p>
<pre><code>// O(n²) DP:
function lengthOfLIS(nums) {
    const dp = new Array(nums.length).fill(1);
    let best = 1;
    for (let i = 1; i &lt; nums.length; i++) {
        for (let j = 0; j &lt; i; j++) {
            if (nums[j] &lt; nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
        }
        best = Math.max(best, dp[i]);
    }
    return best;
}
// O(n log n) — patience sort with binary search:
function lengthOfLISFast(nums) {
    const tails = [];
    for (const n of nums) {
        let lo = 0, hi = tails.length;
        while (lo &lt; hi) { const m = (lo+hi)>>1; if (tails[m]&lt;n) lo=m+1; else hi=m; }
        tails[lo] = n;
    }
    return tails.length;
}
// Input: [10,9,2,5,3,7,101,18]  =&gt; Output: 4  ([2,3,7,101])
// Input: [0,1,0,3,2,3]          =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(n²) DP | O(n log n) patience sort &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you solve the house robber problem with DP?",
                    a: `<p>At each house, either rob it (prev_prev + current) or skip it (keep prev). No need for 2D DP — two variables suffice.</p>
<pre><code>function rob(nums) {
    let prev2 = 0, prev1 = 0;
    for (const n of nums) {
        const curr = Math.max(prev1, prev2 + n);
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}
// Input: [1,2,3,1]    =&gt; Output: 4  (rob house 1 and 3)
// Input: [2,7,9,3,1]  =&gt; Output: 12 (rob houses 1,3,5)
// Input: [2,1]        =&gt; Output: 2

// Circular variant (House Robber II): run twice
// Once on [0..n-2], once on [1..n-1], take max
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find whether a target sum can be achieved from a set of numbers? (Subset Sum)",
                    a: `<p>DP: <code>dp[j]</code> = can we make sum j using a subset? Iterate backwards to prevent reuse (0/1 knapsack style).</p>
<pre><code>function canPartition(nums) {
    const total = nums.reduce((a, b) =&gt; a + b, 0);
    if (total % 2 !== 0) return false; // odd total can't split evenly
    const target = total / 2;
    const dp = new Array(target + 1).fill(false);
    dp[0] = true;
    for (const num of nums) {
        for (let j = target; j &gt;= num; j--) {
            dp[j] = dp[j] || dp[j - num]; // can add num to reach j
        }
    }
    return dp[target];
}
// Input: [1,5,11,5]   =&gt; Output: true  ([1,5,5] and [11])
// Input: [1,2,3,5]    =&gt; Output: false
// Input: [14,9,8,4,3,2] =&gt; Output: true
</code></pre>
<p><strong>Time:</strong> O(n × target) &nbsp;|&nbsp; <strong>Space:</strong> O(target)</p>`
                },
                {
                    q: "How do you find the longest common substring (contiguous) using DP?",
                    a: `<p>Similar to LCS but reset on mismatch. <code>dp[i][j]</code> = length of longest common substring ending at text1[i-1] and text2[j-1].</p>
<pre><code>function longestCommonSubstring(s1, s2) {
    const m = s1.length, n = s2.length;
    const dp = Array.from({length: m+1}, () =&gt; new Array(n+1).fill(0));
    let maxLen = 0;
    for (let i = 1; i &lt;= m; i++) {
        for (let j = 1; j &lt;= n; j++) {
            if (s1[i-1] === s2[j-1]) {
                dp[i][j] = dp[i-1][j-1] + 1;
                maxLen = Math.max(maxLen, dp[i][j]);
            }
        }
    }
    return maxLen;
}
// Input: s1="ABCBDAB", s2="BDCAB"   =&gt; Output: 2 ("AB" or "BD")
// Input: s1="abcde", s2="abfce"     =&gt; Output: 2 ("ab")
</code></pre>
<p><strong>Time:</strong> O(m × n) &nbsp;|&nbsp; <strong>Space:</strong> O(m × n)</p>`
                },
                {
                    q: "How do you solve the stock buy and sell with at most k transactions? (DP)",
                    a: `<p>DP with states: transaction count and hold/not-hold. <code>dp[k][0]</code> = max profit after k transactions with no stock held. <code>dp[k][1]</code> = max profit holding a stock.</p>
<pre><code>function maxProfit(k, prices) {
    const n = prices.length;
    if (k &gt;= Math.floor(n / 2)) {
        // Unlimited transactions: just take all up-slopes
        let profit = 0;
        for (let i = 1; i &lt; n; i++) profit += Math.max(0, prices[i] - prices[i-1]);
        return profit;
    }
    const dp = Array.from({length: k+1}, () =&gt; [0, -Infinity]);
    for (const price of prices) {
        for (let t = k; t &gt;= 1; t--) {
            dp[t][0] = Math.max(dp[t][0], dp[t][1] + price);    // sell
            dp[t][1] = Math.max(dp[t][1], dp[t-1][0] - price);  // buy
        }
    }
    return dp[k][0];
}
// Input: k=2, prices=[3,2,6,5,0,3]  =&gt; Output: 7  (buy@2 sell@6, buy@0 sell@3)
// Input: k=1, prices=[3,2,6,5,0,3]  =&gt; Output: 4  (buy@2 sell@6)
</code></pre>
<p><strong>Time:</strong> O(n × k) &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How do you solve the palindrome partitioning — minimum cuts?",
                    a: `<p>DP with two passes: precompute a palindrome table, then find minimum cuts needing <code>dp[i]</code> cuts for s[0..i] where s[j+1..i] is a palindrome.</p>
<pre><code>function minCut(s) {
    const n = s.length;
    // isPalin[i][j] = is s[i..j] palindrome?
    const isPalin = Array.from({length: n}, () =&gt; new Array(n).fill(false));
    for (let i = n-1; i &gt;= 0; i--) {
        for (let j = i; j &lt; n; j++) {
            if (s[i] === s[j] &amp;&amp; (j - i &lt;= 2 || isPalin[i+1][j-1])) {
                isPalin[i][j] = true;
            }
        }
    }
    const dp = new Array(n).fill(0).map((_, i) =&gt; i); // worst case: cut every char
    for (let i = 1; i &lt; n; i++) {
        if (isPalin[0][i]) { dp[i] = 0; continue; } // whole prefix is palindrome
        for (let j = 1; j &lt;= i; j++) {
            if (isPalin[j][i]) dp[i] = Math.min(dp[i], dp[j-1] + 1);
        }
    }
    return dp[n-1];
}
// Input: "aab"    =&gt; Output: 1  ("aa" | "b")
// Input: "a"      =&gt; Output: 0  (no cut needed)
// Input: "ab"     =&gt; Output: 1  ("a" | "b")
</code></pre>
<p><strong>Time:</strong> O(n²) &nbsp;|&nbsp; <strong>Space:</strong> O(n²)</p>`
                },
                {
                    q: "How do you solve the word break problem using DP?",
                    a: `<p><code>dp[i]</code> = can s[0..i-1] be segmented using the dictionary? For each i, check all j &lt; i where dp[j] is true and s[j..i-1] is in the word set.</p>
<pre><code>function wordBreak(s, wordDict) {
    const wordSet = new Set(wordDict);
    const dp = new Array(s.length + 1).fill(false);
    dp[0] = true; // empty string
    for (let i = 1; i &lt;= s.length; i++) {
        for (let j = 0; j &lt; i; j++) {
            if (dp[j] &amp;&amp; wordSet.has(s.slice(j, i))) {
                dp[i] = true;
                break; // optimization
            }
        }
    }
    return dp[s.length];
}
// Input: s="leetcode", wordDict=["leet","code"]   =&gt; Output: true
// Input: s="applepenapple", wordDict=["apple","pen"]  =&gt; Output: true
// Input: s="catsandog",   wordDict=["cats","dog","sand","and","cat"] =&gt; Output: false
</code></pre>
<p><strong>Time:</strong> O(n² × m) where m = avg word length &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
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
                },
                {
                    q: "How do you implement Tower of Hanoi recursively?",
                    a: `<p>Move n-1 disks from source to auxiliary (using destination), move the largest disk to destination, then move n-1 disks from auxiliary to destination (using source).</p>
<pre><code>function hanoi(n, from, to, aux) {
    if (n === 0) return;
    hanoi(n - 1, from, aux, to); // move n-1 disks to auxiliary
    console.log("Move disk " + n + " from " + from + " to " + to);
    hanoi(n - 1, aux, to, from); // move n-1 disks from auxiliary to target
}
// Input: n=1 =&gt; Output: "Move disk 1 from A to C"  (1 move)
// Input: n=2 =&gt; Output: 3 moves (A-&gt;B, A-&gt;C, B-&gt;C)
// Input: n=3 =&gt; Output: 7 moves (2^n - 1)
// Input: n=10 =&gt; Output: 1023 moves
</code></pre>
<p><strong>Time:</strong> O(2ⁿ) — minimum moves = 2ⁿ - 1 &nbsp;|&nbsp; <strong>Space:</strong> O(n) recursion depth</p>`
                },
                {
                    q: "How do you implement N-Queens using backtracking recursion?",
                    a: `<p>Place queens row by row. For each row, try each column — only proceed if no existing queen shares the column, or a diagonal.</p>
<pre><code>function solveNQueens(n) {
    const result = [];
    const cols = new Set(), diag1 = new Set(), diag2 = new Set();
    const board = Array.from({length: n}, () =&gt; new Array(n).fill('.'));
    function backtrack(row) {
        if (row === n) {
            result.push(board.map(r =&gt; r.join('')));
            return;
        }
        for (let col = 0; col &lt; n; col++) {
            if (cols.has(col) || diag1.has(row-col) || diag2.has(row+col)) continue;
            board[row][col] = 'Q';
            cols.add(col); diag1.add(row-col); diag2.add(row+col);
            backtrack(row + 1);
            board[row][col] = '.';
            cols.delete(col); diag1.delete(row-col); diag2.delete(row+col);
        }
    }
    backtrack(0);
    return result;
}
// Input: n=4  =&gt; Output: 2 solutions
// Input: n=8  =&gt; Output: 92 solutions
</code></pre>
<p><strong>Time:</strong> O(n!) &nbsp;|&nbsp; <strong>Space:</strong> O(n) for tracking sets</p>`
                },
                {
                    q: "How do you generate all permutations of an array using recursion?",
                    a: `<p>Fix each element at the current position by swapping it with all elements from current to end. Recurse, then unswap (backtrack).</p>
<pre><code>function permutations(nums) {
    const result = [];
    function backtrack(start) {
        if (start === nums.length) { result.push([...nums]); return; }
        for (let i = start; i &lt; nums.length; i++) {
            [nums[start], nums[i]] = [nums[i], nums[start]]; // swap
            backtrack(start + 1);
            [nums[start], nums[i]] = [nums[i], nums[start]]; // unswap
        }
    }
    backtrack(0);
    return result;
}
// Input: [1,2,3]  =&gt; Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,2,1],[3,1,2]]
// Input: [1,2]    =&gt; Output: [[1,2],[2,1]]
// Input: [1]      =&gt; Output: [[1]]
</code></pre>
<p><strong>Time:</strong> O(n! × n) &nbsp;|&nbsp; <strong>Space:</strong> O(n) recursion depth (not counting output)</p>`
                },
                {
                    q: "How do you use recursion to compute the GCD and LCM?",
                    a: `<p><strong>GCD</strong> uses Euclid's algorithm: gcd(a, b) = gcd(b, a mod b). <strong>LCM</strong> = (a × b) / gcd(a, b).</p>
<pre><code>function gcd(a, b) {
    return b === 0 ? a : gcd(b, a % b);
}
function lcm(a, b) {
    return (a / gcd(a, b)) * b; // divide first to avoid overflow
}
// Input: gcd(48, 18)   =&gt; Output: 6
//   (gcd(48,18) = gcd(18,12) = gcd(12,6) = gcd(6,0) = 6)
// Input: gcd(100, 75)  =&gt; Output: 25
// Input: lcm(12, 18)   =&gt; Output: 36
// Input: lcm(4, 6)     =&gt; Output: 12
</code></pre>
<p><strong>Time:</strong> O(log(min(a,b))) — Fibonacci worst case &nbsp;|&nbsp; <strong>Space:</strong> O(log(min(a,b)))</p>`
                },
                {
                    q: "How do you implement binary search recursively?",
                    a: `<p>Recursively narrow the search space by half. Base case: lo &gt; hi (not found) or arr[mid] equals target.</p>
<pre><code>function binarySearchRecursive(arr, target, lo = 0, hi = arr.length - 1) {
    if (lo &gt; hi) return -1; // base case: not found
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] &lt; target) return binarySearchRecursive(arr, target, mid + 1, hi);
    return binarySearchRecursive(arr, target, lo, mid - 1);
}
// Input: [1,3,5,7,9], target=7   =&gt; Output: 3 (index)
// Input: [1,3,5,7,9], target=6   =&gt; Output: -1 (not found)
// Input: [2,4,6,8,10], target=1  =&gt; Output: -1
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(log n) recursion stack</p>`
                },
                {
                    q: "How do you find all subsets of a set using recursion?",
                    a: `<p>For each element, you have two choices: include it or exclude it. Total subsets = 2ⁿ.</p>
<pre><code>function subsets(nums) {
    const result = [];
    function backtrack(start, current) {
        result.push([...current]);
        for (let i = start; i &lt; nums.length; i++) {
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop(); // backtrack
        }
    }
    backtrack(0, []);
    return result;
}
// Input: [1,2,3]
// Output: [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]
// (8 = 2³ subsets)
// Input: [1]   =&gt; Output: [[], [1]]
</code></pre>
<p><strong>Time:</strong> O(2ⁿ × n) &nbsp;|&nbsp; <strong>Space:</strong> O(n) recursion depth</p>`
                },
                {
                    q: "How do you implement merge sort recursively?",
                    a: `<p>Divide the array in half, recursively sort both halves, then merge them. Classic divide-and-conquer with O(n log n) guaranteed.</p>
<pre><code>function mergeSort(arr) {
    if (arr.length &lt;= 1) return arr; // base case
    const mid = Math.floor(arr.length / 2);
    const left  = mergeSort(arr.slice(0, mid));
    const right = mergeSort(arr.slice(mid));
    return merge(left, right);
}
function merge(left, right) {
    const result = [];
    let i = 0, j = 0;
    while (i &lt; left.length &amp;&amp; j &lt; right.length) {
        if (left[i] &lt;= right[j]) result.push(left[i++]);
        else result.push(right[j++]);
    }
    return [...result, ...left.slice(i), ...right.slice(j)];
}
// Input: [38,27,43,3,9,82,10]
// Output: [3,9,10,27,38,43,82]
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(n log n) for call stack + temp arrays</p>`
                },
                {
                    q: "How do you use recursion to compute the power of a number? (Fast exponentiation)",
                    a: `<p>Use <strong>exponentiation by squaring</strong>: x^n = (x^(n/2))² for even n, x × x^(n-1) for odd n. Reduces multiplications from O(n) to O(log n).</p>
<pre><code>function myPow(x, n) {
    if (n &lt; 0) return 1 / myPow(x, -n);
    if (n === 0) return 1;
    if (n % 2 === 0) {
        const half = myPow(x, n / 2);
        return half * half;
    }
    return x * myPow(x, n - 1);
}
// Input: x=2.00, n=10   =&gt; Output: 1024.00
// Input: x=2.10, n=3    =&gt; Output: 9.261
// Input: x=2.00, n=-2   =&gt; Output: 0.25
</code></pre>
<p><strong>Time:</strong> O(log n) &nbsp;|&nbsp; <strong>Space:</strong> O(log n) stack depth</p>`
                },
                {
                    q: "How do you solve the jump game using recursion with memoization?",
                    a: `<p>From each position, try all possible jumps. Memoize: <code>memo[i]</code> = can we reach the end from index i?</p>
<pre><code>function canJump(nums) {
    const memo = new Map();
    function dp(i) {
        if (i &gt;= nums.length - 1) return true;
        if (memo.has(i)) return memo.get(i);
        const maxJump = nums[i];
        for (let j = 1; j &lt;= maxJump; j++) {
            if (dp(i + j)) { memo.set(i, true); return true; }
        }
        memo.set(i, false);
        return false;
    }
    return dp(0);
}
// (Greedy is O(n) but memo recursion shows the principle)
// Input: [2,3,1,1,4]  =&gt; Output: true
// Input: [3,2,1,0,4]  =&gt; Output: false (stuck at index 3)
</code></pre>
<p><strong>Time:</strong> O(n²) with memoization &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the number of unique paths in a grid using recursion?",
                    a: `<p>From (0,0) to (m-1,n-1) moving only right or down. Recursive relation: <code>paths(i,j) = paths(i+1,j) + paths(i,j+1)</code>. Memoize to avoid exponential recomputation.</p>
<pre><code>function uniquePaths(m, n) {
    const memo = new Map();
    function dp(r, c) {
        if (r === m - 1 || c === n - 1) return 1; // base: last row/col
        const key = r + ',' + c;
        if (memo.has(key)) return memo.get(key);
        const result = dp(r + 1, c) + dp(r, c + 1);
        memo.set(key, result);
        return result;
    }
    return dp(0, 0);
}
// Input: m=3, n=7   =&gt; Output: 28
// Input: m=3, n=2   =&gt; Output: 3
// Input: m=1, n=1   =&gt; Output: 1
</code></pre>
<p><strong>Time:</strong> O(m × n) &nbsp;|&nbsp; <strong>Space:</strong> O(m × n)</p>`
                },
                {
                    q: "How do you generate all combinations of k numbers from 1 to n?",
                    a: `<p>Use backtracking: recursively build combinations. At each step, choose the next number (must be greater than the last chosen to avoid duplicates).</p>
<pre><code>function combine(n, k) {
    const result = [];
    function backtrack(start, current) {
        if (current.length === k) { result.push([...current]); return; }
        // Pruning: only go up to n - (k - current.length) + 1
        const limit = n - (k - current.length) + 1;
        for (let i = start; i &lt;= limit; i++) {
            current.push(i);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    backtrack(1, []);
    return result;
}
// Input: n=4, k=2   =&gt; Output: [[1,2],[1,3],[1,4],[2,3],[2,4],[3,4]]
// Input: n=1, k=1   =&gt; Output: [[1]]
</code></pre>
<p><strong>Time:</strong> O(C(n,k) × k) &nbsp;|&nbsp; <strong>Space:</strong> O(k) recursion depth</p>`
                },
                {
                    q: "How do you check if a number is a power of 2 using recursion?",
                    a: `<p>Recursively halve the number. If it reaches 1, it's a power of 2. If it becomes odd before reaching 1, it's not. Alternatively, use bitwise: <code>n &amp; (n-1) === 0</code>.</p>
<pre><code>function isPowerOfTwo(n) {
    if (n &lt;= 0) return false;
    if (n === 1) return true; // base case
    if (n % 2 !== 0) return false; // odd means not a power of 2
    return isPowerOfTwo(n / 2);
}
// Bitwise approach (O(1)):
function isPowerOfTwoBit(n) {
    return n &gt; 0 &amp;&amp; (n &amp; (n - 1)) === 0;
}
// Input: n=1    =&gt; Output: true   (2^0)
// Input: n=16   =&gt; Output: true   (2^4)
// Input: n=3    =&gt; Output: false
// Input: n=218  =&gt; Output: false
</code></pre>
<p><strong>Time:</strong> O(log n) recursive &nbsp;|&nbsp; <strong>Space:</strong> O(log n). Bitwise is O(1) time and O(1) space.</p>`
                },
                {
                    q: "How do you compute Pascal's triangle row using recursion?",
                    a: `<p>Each element C(n,k) = C(n-1,k-1) + C(n-1,k). Use memoization to avoid exponential blowup, or use the formula C(n,k) = C(n,k-1) × (n-k+1)/k.</p>
<pre><code>function getRow(rowIndex) {
    const result = [1];
    for (let k = 1; k &lt;= rowIndex; k++) {
        // C(n,k) = C(n,k-1) * (n-k+1) / k
        result.push(Math.round(result[k-1] * (rowIndex - k + 1) / k));
    }
    return result;
}
// Recursive with memo:
function comb(n, k, memo = {}) {
    if (k === 0 || k === n) return 1;
    const key = n + ',' + k;
    if (key in memo) return memo[key];
    return memo[key] = comb(n-1, k-1, memo) + comb(n-1, k, memo);
}
// Input: rowIndex=3   =&gt; Output: [1,3,3,1]
// Input: rowIndex=4   =&gt; Output: [1,4,6,4,1]
// Input: rowIndex=0   =&gt; Output: [1]
</code></pre>
<p><strong>Time:</strong> O(n) iterative &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
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
                },
                {
                    q: "How do you greedily find the jump game minimum jumps (Jump Game II)?",
                    a: `<p>Greedily extend your reach: track current reach and next farthest reach. Each time you exhaust current reach, increment jump count and advance to next farthest.</p>
<pre><code>function jump(nums) {
    let jumps = 0, currEnd = 0, farthest = 0;
    for (let i = 0; i &lt; nums.length - 1; i++) {
        farthest = Math.max(farthest, i + nums[i]);
        if (i === currEnd) { // reached current boundary
            jumps++;
            currEnd = farthest;
        }
    }
    return jumps;
}
// Input: [2,3,1,1,4]   =&gt; Output: 2  (0-&gt;1-&gt;4 or 0-&gt;4 or ... min=2 jumps)
// Input: [2,3,0,1,4]   =&gt; Output: 2
// Input: [1,2,3]       =&gt; Output: 2  (0-&gt;1-&gt;2)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you solve the meeting rooms II problem greedy? (minimum rooms needed)",
                    a: `<p>Sort meetings by start time. Use a <strong>min-heap</strong> of end times. For each meeting, if it starts after the earliest ending meeting's end, reuse that room. Otherwise, add a room.</p>
<pre><code>function minMeetingRooms(intervals) {
    intervals.sort((a, b) =&gt; a[0] - b[0]);
    const endTimes = []; // simulated min-heap
    for (const [start, end] of intervals) {
        endTimes.sort((a, b) =&gt; a - b);
        if (endTimes.length &amp;&amp; endTimes[0] &lt;= start) {
            endTimes.shift(); // reuse room
        }
        endTimes.push(end); // allocate room
    }
    return endTimes.length;
}
// Input: [[0,30],[5,10],[15,20]]  =&gt; Output: 2
// Input: [[7,10],[2,4]]           =&gt; Output: 1 (no overlap)
// Input: [[1,5],[2,6],[3,7]]      =&gt; Output: 3 (all overlap)
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the minimum number of arrows to burst balloons?",
                    a: `<p>Sort by end position. A single arrow can burst all balloons whose start ≤ current arrow position. Shoot at the end of the first balloon and skip all that overlap.</p>
<pre><code>function findMinArrowShots(points) {
    points.sort((a, b) =&gt; a[1] - b[1]); // sort by end position
    let arrows = 1, arrowPos = points[0][1];
    for (let i = 1; i &lt; points.length; i++) {
        if (points[i][0] &gt; arrowPos) { // balloon starts after last arrow
            arrows++;
            arrowPos = points[i][1]; // shoot at end of this balloon
        }
    }
    return arrows;
}
// Input: [[10,16],[2,8],[1,6],[7,12]]   =&gt; Output: 2
// Input: [[1,2],[3,4],[5,6],[7,8]]      =&gt; Output: 4
// Input: [[1,2],[2,3],[3,4],[4,5]]      =&gt; Output: 2
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you construct the lexicographically largest number from array elements?",
                    a: `<p>Custom sort: compare two numbers a and b by checking which concatenation (ab vs ba) is larger. Use string comparison.</p>
<pre><code>function largestNumber(nums) {
    const sorted = nums.map(String).sort((a, b) =&gt; {
        return (b + a).localeCompare(a + b); // or compare (b+a) vs (a+b)
    });
    // Edge case: all zeros
    if (sorted[0] === '0') return '0';
    return sorted.join('');
}
// Input: [10,2]        =&gt; Output: "210"   (210 &gt; 102)
// Input: [3,30,34,5,9] =&gt; Output: "9534330"
// Input: [0,0]         =&gt; Output: "0"
</code></pre>
<p><strong>Time:</strong> O(n log n × m) where m is average digit length &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the maximum number of events you can attend?",
                    a: `<p>Sort events by end day. Use a greedy approach: for each available day, attend the event ending earliest (use a min-heap of end times).</p>
<pre><code>function maxEvents(events) {
    events.sort((a, b) =&gt; a[0] - b[0]); // sort by start day
    const endHeap = []; // min-heap of end days
    let day = 0, count = 0, i = 0;
    const n = events.length;
    while (i &lt; n || endHeap.length) {
        if (!endHeap.length) day = events[i][0]; // jump to next event start
        // Add all events that start on or before today
        while (i &lt; n &amp;&amp; events[i][0] &lt;= day) {
            endHeap.push(events[i][1]);
            endHeap.sort((a, b) =&gt; a - b);
            i++;
        }
        // Attend earliest-ending available event
        while (endHeap.length &amp;&amp; endHeap[0] &lt; day) endHeap.shift(); // expired
        if (endHeap.length) { endHeap.shift(); count++; }
        day++;
    }
    return count;
}
// Input: [[1,2],[2,3],[3,4]]    =&gt; Output: 3
// Input: [[1,4],[4,4],[2,2],[3,4],[1,1]] =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you distribute cookies greedily to maximize satisfied children?",
                    a: `<p>Sort both children's greed factors and cookie sizes. Use a two-pointer greedy: give the smallest sufficient cookie to the least greedy child.</p>
<pre><code>function findContentChildren(g, s) {
    g.sort((a, b) =&gt; a - b); // greed factors
    s.sort((a, b) =&gt; a - b); // cookie sizes
    let child = 0, cookie = 0;
    while (child &lt; g.length &amp;&amp; cookie &lt; s.length) {
        if (s[cookie] &gt;= g[child]) child++; // cookie satisfies child
        cookie++; // try next cookie either way
    }
    return child; // number of satisfied children
}
// Input: g=[1,2,3], s=[1,1]    =&gt; Output: 1
// Input: g=[1,2], s=[1,2,3]    =&gt; Output: 2
// Input: g=[10,9,8], s=[1,2]   =&gt; Output: 0
</code></pre>
<p><strong>Time:</strong> O(n log n + m log m) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the minimum cost to hire k workers?",
                    a: `<p>Sort workers by ratio (wage/quality). For each worker considered as the highest-paid (sets the ratio), sum the k smallest qualities. Use a max-heap to maintain the k smallest.</p>
<pre><code>function mincostToHireWorkers(quality, wage, k) {
    const workers = quality.map((q, i) =&gt; [wage[i] / q, q]); // [ratio, quality]
    workers.sort((a, b) =&gt; a[0] - b[0]); // sort by ratio
    let totalQ = 0, minCost = Infinity;
    const maxHeap = []; // track k smallest qualities
    for (const [ratio, q] of workers) {
        maxHeap.push(q);
        maxHeap.sort((a, b) =&gt; b - a); // max at front
        totalQ += q;
        if (maxHeap.length &gt; k) totalQ -= maxHeap.shift(); // remove largest quality
        if (maxHeap.length === k) minCost = Math.min(minCost, ratio * totalQ);
    }
    return minCost;
}
// Input: quality=[10,20,5], wage=[70,50,30], k=2  =&gt; Output: 105.00
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How do you find the minimum number of taps to water a garden?",
                    a: `<p>Convert taps to intervals, then apply the <strong>jump game</strong> greedy: find the farthest point reachable from any position in the current window.</p>
<pre><code>function minTaps(n, ranges) {
    const maxReach = new Array(n + 1).fill(0);
    for (let i = 0; i &lt;= n; i++) {
        const left  = Math.max(0, i - ranges[i]);
        const right = Math.min(n, i + ranges[i]);
        maxReach[left] = Math.max(maxReach[left], right);
    }
    let taps = 0, currEnd = 0, farthest = 0;
    for (let i = 0; i &lt;= n; i++) {
        if (i &gt; farthest) return -1; // garden can't be watered
        farthest = Math.max(farthest, maxReach[i]);
        if (i === currEnd &amp;&amp; i &lt; n) { taps++; currEnd = farthest; }
    }
    return taps;
}
// Input: n=5, ranges=[3,4,1,1,0,0]  =&gt; Output: 1  (tap 0 or 1 covers all)
// Input: n=7, ranges=[1,2,1,0,2,1,0,1] =&gt; Output: 3
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you assign tasks to minimize finish time (greedy scheduling)?",
                    a: `<p>To minimize the makespan (max completion time), assign tasks in <strong>non-increasing order of processing time</strong> to processors using the Longest Processing Time (LPT) rule.</p>
<pre><code>function assignTasks(tasks, workers) {
    tasks.sort((a, b) =&gt; b - a); // sort descending
    const loads = new Array(workers).fill(0);
    for (const task of tasks) {
        loads.sort((a, b) =&gt; a - b); // assign to least loaded worker
        loads[0] += task;
    }
    return Math.max(...loads); // makespan
}
// Input: tasks=[3,2,3,2], workers=2   =&gt; Output: 5  (3+2=5 each)
// Input: tasks=[1,2,4,8], workers=2   =&gt; Output: 9  (8+1=9 vs 4+2=6)
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(workers)</p>`
                },
                {
                    q: "How do you maximize profit from stock prices with transaction fee (greedy)?",
                    a: `<p>Track the minimum buy price (adjusted for fee). For each day, if selling now is profitable (price > minBuy), take the profit. Update minBuy greedily.</p>
<pre><code>function maxProfitWithFee(prices, fee) {
    let cash = 0; // profit when not holding stock
    let hold = -prices[0]; // profit when holding stock
    for (let i = 1; i &lt; prices.length; i++) {
        cash = Math.max(cash, hold + prices[i] - fee); // sell today
        hold = Math.max(hold, cash - prices[i]);        // buy today
    }
    return cash;
}
// Input: prices=[1,3,2,8,4,9], fee=2   =&gt; Output: 8
//   (buy@1 sell@8 fee=2 =&gt; profit=5; buy@4 sell@9 fee=2 =&gt; profit=3; total=8)
// Input: prices=[1,3,7,5,10,3], fee=3  =&gt; Output: 6
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you solve the candy distribution problem (greedy, two-pass)?",
                    a: `<p>Give everyone 1 candy. Pass left-to-right: if rating[i] &gt; rating[i-1], give one more than leftNeighbor. Pass right-to-left: if rating[i] &gt; rating[i+1], ensure right side also satisfied.</p>
<pre><code>function candy(ratings) {
    const n = ratings.length;
    const candies = new Array(n).fill(1);
    // Left pass
    for (let i = 1; i &lt; n; i++) {
        if (ratings[i] &gt; ratings[i-1]) candies[i] = candies[i-1] + 1;
    }
    // Right pass
    for (let i = n - 2; i &gt;= 0; i--) {
        if (ratings[i] &gt; ratings[i+1]) candies[i] = Math.max(candies[i], candies[i+1] + 1);
    }
    return candies.reduce((a, b) =&gt; a + b, 0);
}
// Input: [1,0,2]       =&gt; Output: 5  ([2,1,2])
// Input: [1,2,2]       =&gt; Output: 4  ([1,2,1])
// Input: [1,3,2,2,1]   =&gt; Output: 7  ([1,3,1,2,1])
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you solve the fractional knapsack problem greedily?",
                    a: `<p>Compute value-to-weight ratio for each item. Sort by ratio descending. Take as much as possible from the highest-ratio item (fractions allowed).</p>
<pre><code>function fractionalKnapsack(capacity, weights, values) {
    const items = values.map((v, i) =&gt; [v / weights[i], weights[i], v]);
    items.sort((a, b) =&gt; b[0] - a[0]); // sort by ratio descending
    let totalValue = 0;
    for (const [ratio, w, v] of items) {
        if (capacity &gt;= w) {
            totalValue += v;
            capacity -= w;
        } else {
            totalValue += ratio * capacity; // take fraction
            break;
        }
    }
    return totalValue;
}
// Input: capacity=50, weights=[10,20,30], values=[60,100,120]
// Output: 240.0  (all of item 1 and 2, then 2/3 of item 3)
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
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
                },
                {
                    q: "How do you solve the Sudoku board using backtracking?",
                    a: `<p>Try each digit 1-9 in empty cells. Skip if the digit conflicts with the current row, column, or 3×3 box. Backtrack if no valid digit exists.</p>
<pre><code>function solveSudoku(board) {
    function isValid(r, c, num) {
        const boxR = Math.floor(r / 3) * 3, boxC = Math.floor(c / 3) * 3;
        for (let i = 0; i &lt; 9; i++) {
            if (board[r][i] === num) return false;          // same row
            if (board[i][c] === num) return false;          // same col
            if (board[boxR + Math.floor(i/3)][boxC + i%3] === num) return false; // 3x3 box
        }
        return true;
    }
    function solve() {
        for (let r = 0; r &lt; 9; r++) {
            for (let c = 0; c &lt; 9; c++) {
                if (board[r][c] === '.') {
                    for (let d = 1; d &lt;= 9; d++) {
                        const ch = String(d);
                        if (isValid(r, c, ch)) {
                            board[r][c] = ch;
                            if (solve()) return true;
                            board[r][c] = '.'; // backtrack
                        }
                    }
                    return false; // no valid digit
                }
            }
        }
        return true; // all cells filled
    }
    solve();
}
// Input: 9x9 board with some cells filled
// Output: board modified in-place with valid solution
</code></pre>
<p><strong>Time:</strong> O(9^m) where m = empty cells &nbsp;|&nbsp; <strong>Space:</strong> O(m)</p>`
                },
                {
                    q: "How do you find all subsets with duplicates using backtracking?",
                    a: `<p>Sort the array first. In the loop, skip duplicates at the same recursion level (if nums[i] === nums[i-1] and i > start, skip).</p>
<pre><code>function subsetsWithDup(nums) {
    nums.sort((a, b) =&gt; a - b);
    const result = [];
    function backtrack(start, current) {
        result.push([...current]);
        for (let i = start; i &lt; nums.length; i++) {
            // Skip duplicates at the same tree level
            if (i &gt; start &amp;&amp; nums[i] === nums[i-1]) continue;
            current.push(nums[i]);
            backtrack(i + 1, current);
            current.pop();
        }
    }
    backtrack(0, []);
    return result;
}
// Input: [1,2,2]
// Output: [[],[1],[1,2],[1,2,2],[2],[2,2]]  (no duplicate subsets)
</code></pre>
<p><strong>Time:</strong> O(2ⁿ × n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you solve the Rat in a Maze problem using backtracking?",
                    a: `<p>Move right or down (or all 4 directions). At each cell, mark it visited, try all valid moves, then unmark (backtrack) if no path found.</p>
<pre><code>function ratMaze(maze, n) {
    const paths = [];
    const visited = Array.from({length: n}, () =&gt; new Array(n).fill(false));
    const dirs = [[1,0,'D'],[-1,0,'U'],[0,1,'R'],[0,-1,'L']];
    function solve(r, c, path) {
        if (r === n-1 &amp;&amp; c === n-1) { paths.push(path); return; }
        for (const [dr, dc, dir] of dirs) {
            const nr = r + dr, nc = c + dc;
            if (nr &gt;= 0 &amp;&amp; nr &lt; n &amp;&amp; nc &gt;= 0 &amp;&amp; nc &lt; n
                &amp;&amp; maze[nr][nc] === 1 &amp;&amp; !visited[nr][nc]) {
                visited[nr][nc] = true;
                solve(nr, nc, path + dir);
                visited[nr][nc] = false; // backtrack
            }
        }
    }
    if (maze[0][0] === 1) { visited[0][0] = true; solve(0, 0, ''); }
    return paths;
}
// Input: [[1,0,0,0],[1,1,0,1],[0,1,0,0],[0,1,1,1]]
// Output: ["DDRDRR","DRDDRR"]
</code></pre>
<p><strong>Time:</strong> O(4^(n²)) worst &nbsp;|&nbsp; <strong>Space:</strong> O(n²)</p>`
                },
                {
                    q: "How do you find all combinations that sum to a target (with reuse)? (Combination Sum)",
                    a: `<p>Candidates can be reused. At each step, either use the current candidate again (same index) or move to the next. Backtrack by removing the last choice.</p>
<pre><code>function combinationSum(candidates, target) {
    candidates.sort((a, b) =&gt; a - b);
    const result = [];
    function backtrack(start, remaining, current) {
        if (remaining === 0) { result.push([...current]); return; }
        for (let i = start; i &lt; candidates.length; i++) {
            if (candidates[i] &gt; remaining) break; // pruning
            current.push(candidates[i]);
            backtrack(i, remaining - candidates[i], current); // reuse allowed
            current.pop(); // backtrack
        }
    }
    backtrack(0, target, []);
    return result;
}
// Input: candidates=[2,3,6,7], target=7  =&gt; Output: [[2,2,3],[7]]
// Input: candidates=[2,3,5], target=8    =&gt; Output: [[2,2,2,2],[2,3,3],[3,5]]
</code></pre>
<p><strong>Time:</strong> O(n^(target/min)) &nbsp;|&nbsp; <strong>Space:</strong> O(target/min)</p>`
                },
                {
                    q: "How do you generate all valid IP addresses from a string using backtracking?",
                    a: `<p>Try placing dots at 3 positions (splitting into 4 parts). Each part must be 1-3 digits, no leading zeros, and value ≤ 255.</p>
<pre><code>function restoreIpAddresses(s) {
    const result = [];
    function backtrack(start, parts) {
        if (parts.length === 4) {
            if (start === s.length) result.push(parts.join('.'));
            return;
        }
        for (let len = 1; len &lt;= 3; len++) {
            if (start + len &gt; s.length) break;
            const segment = s.slice(start, start + len);
            // No leading zeros, value &lt;= 255
            if (segment.length &gt; 1 &amp;&amp; segment[0] === '0') break;
            if (Number(segment) &gt; 255) break;
            backtrack(start + len, [...parts, segment]);
        }
    }
    backtrack(0, []);
    return result;
}
// Input: "25525511135"  =&gt; Output: ["255.255.11.135","255.255.111.35"]
// Input: "0000"         =&gt; Output: ["0.0.0.0"]
</code></pre>
<p><strong>Time:</strong> O(1) — max 3^4 = 81 combinations &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you solve Boggle (word search in a matrix)?",
                    a: `<p>For each cell, start a DFS. Mark cell visited, try all 8 neighbors that match the next character. Backtrack by unmarking the cell.</p>
<pre><code>function exist(board, word) {
    const rows = board.length, cols = board[0].length;
    function dfs(r, c, idx) {
        if (idx === word.length) return true;
        if (r &lt; 0 || r &gt;= rows || c &lt; 0 || c &gt;= cols || board[r][c] !== word[idx]) return false;
        const tmp = board[r][c];
        board[r][c] = '#'; // mark visited
        const found = dfs(r+1,c,idx+1) || dfs(r-1,c,idx+1)
                   || dfs(r,c+1,idx+1) || dfs(r,c-1,idx+1);
        board[r][c] = tmp; // restore (backtrack)
        return found;
    }
    for (let r = 0; r &lt; rows; r++)
        for (let c = 0; c &lt; cols; c++)
            if (dfs(r, c, 0)) return true;
    return false;
}
// Input: board=[["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word="ABCCED"
// Output: true
</code></pre>
<p><strong>Time:</strong> O(rows × cols × 4^len) &nbsp;|&nbsp; <strong>Space:</strong> O(len)</p>`
                },
                {
                    q: "How do you find all unique permutations with duplicate elements?",
                    a: `<p>Sort the array. Use a <code>used</code> boolean array. Skip a duplicate if its preceding equal element was not used in the current path (prevents same ordering from being generated twice).</p>
<pre><code>function permuteUnique(nums) {
    nums.sort((a, b) =&gt; a - b);
    const result = [], used = new Array(nums.length).fill(false);
    function backtrack(current) {
        if (current.length === nums.length) { result.push([...current]); return; }
        for (let i = 0; i &lt; nums.length; i++) {
            if (used[i]) continue;
            // Skip duplicate: same value used at this position in a previous branch
            if (i &gt; 0 &amp;&amp; nums[i] === nums[i-1] &amp;&amp; !used[i-1]) continue;
            used[i] = true;
            current.push(nums[i]);
            backtrack(current);
            current.pop();
            used[i] = false;
        }
    }
    backtrack([]);
    return result;
}
// Input: [1,1,2]  =&gt; Output: [[1,1,2],[1,2,1],[2,1,1]]
// Input: [1,2,3]  =&gt; Output: 6 permutations (no duplicates)
</code></pre>
<p><strong>Time:</strong> O(n!) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you partition a string into parts such that each letter appears in at most one part?",
                    a: `<p>Find the last occurrence of each character. Greedily extend the current partition's end to cover all characters seen so far. When current position reaches the end, record a part.</p>
<pre><code>function partitionLabels(s) {
    const last = {};
    for (let i = 0; i &lt; s.length; i++) last[s[i]] = i;
    const result = [];
    let start = 0, end = 0;
    for (let i = 0; i &lt; s.length; i++) {
        end = Math.max(end, last[s[i]]); // extend to cover all occurrences
        if (i === end) {
            result.push(end - start + 1);
            start = i + 1;
        }
    }
    return result;
}
// Input: "ababcbacadefegdehijhklij"
// Output: [9,7,8]  ("ababcbaca","defegde","hijhklij")
// Input: "eccbbbbdec"  =&gt; Output: [10]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1) — at most 26 characters</p>`
                },
                {
                    q: "How do you solve the Knight's Tour using backtracking?",
                    a: `<p>Try all 8 knight moves from the current position. Use <strong>Warnsdorff's heuristic</strong> (choose the move with the fewest onward moves) to prune efficiently.</p>
<pre><code>function knightsTour(n) {
    const board = Array.from({length: n}, () =&gt; new Array(n).fill(-1));
    const moves = [[2,1],[1,2],[-1,2],[-2,1],[-2,-1],[-1,-2],[1,-2],[2,-1]];
    board[0][0] = 0;
    function solve(r, c, moveNum) {
        if (moveNum === n * n) return true;
        for (const [dr, dc] of moves) {
            const nr = r + dr, nc = c + dc;
            if (nr &gt;= 0 &amp;&amp; nr &lt; n &amp;&amp; nc &gt;= 0 &amp;&amp; nc &lt; n &amp;&amp; board[nr][nc] === -1) {
                board[nr][nc] = moveNum;
                if (solve(nr, nc, moveNum + 1)) return true;
                board[nr][nc] = -1; // backtrack
            }
        }
        return false;
    }
    return solve(0, 0, 1) ? board : null;
}
// Input: n=5  =&gt; Output: 5x5 board where each cell has a unique move number
// Input: n=8  =&gt; Output: 8x8 complete knight's tour
</code></pre>
<p><strong>Time:</strong> O(8^(n²)) worst, much better with Warnsdorff &nbsp;|&nbsp; <strong>Space:</strong> O(n²)</p>`
                },
                {
                    q: "How do you solve the expression evaluation with operators (+,−,×) using backtracking?",
                    a: `<p>Insert each operator combination between digits. Track accumulated value and the last multiplied term (for correct multiplication precedence).</p>
<pre><code>function addOperators(num, target) {
    const result = [];
    function backtrack(index, path, value, prev) {
        if (index === num.length) {
            if (value === target) result.push(path);
            return;
        }
        for (let len = 1; len &lt;= num.length - index; len++) {
            const str = num.slice(index, index + len);
            if (str.length &gt; 1 &amp;&amp; str[0] === '0') break; // no leading zeros
            const curr = BigInt(str);
            if (index === 0) {
                backtrack(len, str, curr, curr);
            } else {
                backtrack(index + len, path + '+' + str, value + curr, curr);
                backtrack(index + len, path + '-' + str, value - curr, -curr);
                backtrack(index + len, path + '*' + str, value - prev + prev * curr, prev * curr);
            }
        }
    }
    backtrack(0, '', 0n, 0n);
    return result;
}
// Input: num="123", target=6   =&gt; Output: ["1+2+3","1*2*3"]
// Input: num="232", target=8   =&gt; Output: ["2*3+2","2+3*2"]
</code></pre>
<p><strong>Time:</strong> O(4^n × n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find all factor combinations of a number using backtracking?",
                    a: `<p>Recursively find all factors from 2 to sqrt(n). Each factor and the reduced quotient form a pair. Backtrack after recording each valid combination.</p>
<pre><code>function getFactors(n) {
    const result = [];
    function backtrack(n, start, current) {
        if (current.length &gt; 0) result.push([...current, n]);
        for (let f = start; f * f &lt;= n; f++) {
            if (n % f === 0) {
                current.push(f);
                backtrack(n / f, f, current); // recurse with reduced n
                current.pop(); // backtrack
            }
        }
    }
    backtrack(n, 2, []);
    return result;
}
// Input: 12  =&gt; Output: [[2,6],[2,2,3],[3,4]]
// Input: 37  =&gt; Output: []  (prime, no factors)
// Input: 32  =&gt; Output: [[2,16],[2,2,8],[2,2,2,4],[2,2,2,2,2],[4,8]]
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(log n)</p>`
                },
                {
                    q: "How do you remove invalid parentheses to make the string valid with minimum removals?",
                    a: `<p>Use BFS to try removing each bracket. First level where a valid string is found = minimum removals. Use a Set to avoid re-processing duplicates.</p>
<pre><code>function removeInvalidParentheses(s) {
    const isValid = str =&gt; {
        let count = 0;
        for (const c of str) {
            if (c === '(') count++;
            else if (c === ')') { if (--count &lt; 0) return false; }
        }
        return count === 0;
    };
    const result = [], visited = new Set([s]);
    let queue = [s], found = false;
    while (queue.length) {
        const next = [];
        for (const cur of queue) {
            if (isValid(cur)) { result.push(cur); found = true; }
            if (found) continue;
            for (let i = 0; i &lt; cur.length; i++) {
                if (cur[i] !== '(' &amp;&amp; cur[i] !== ')') continue;
                const candidate = cur.slice(0, i) + cur.slice(i + 1);
                if (!visited.has(candidate)) { visited.add(candidate); next.push(candidate); }
            }
        }
        if (found) break;
        queue = next;
    }
    return result.length ? result : [''];
}
// Input: "()())()"   =&gt; Output: ["(())()","()()()"]
// Input: "(a)())()"  =&gt; Output: ["(a())()","(a)()()"]
</code></pre>
<p><strong>Time:</strong> O(n × 2^n) &nbsp;|&nbsp; <strong>Space:</strong> O(n × 2^n)</p>`
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
                },
                {
                    q: "How do you find all triplets summing to zero (3Sum) using two pointers?",
                    a: `<p>Sort the array. Fix one element, then use two pointers on the remainder. Skip duplicate values to avoid duplicate triplets.</p>
<pre><code>function threeSum(nums) {
    nums.sort((a, b) =&gt; a - b);
    const result = [];
    for (let i = 0; i &lt; nums.length - 2; i++) {
        if (i &gt; 0 &amp;&amp; nums[i] === nums[i-1]) continue; // skip duplicate i
        let l = i + 1, r = nums.length - 1;
        while (l &lt; r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                result.push([nums[i], nums[l], nums[r]]);
                while (l &lt; r &amp;&amp; nums[l] === nums[l+1]) l++;
                while (l &lt; r &amp;&amp; nums[r] === nums[r-1]) r--;
                l++; r--;
            } else if (sum &lt; 0) l++;
            else r--;
        }
    }
    return result;
}
// Input: [-1,0,1,2,-1,-4]   =&gt; Output: [[-1,-1,2],[-1,0,1]]
// Input: [0,0,0]            =&gt; Output: [[0,0,0]]
// Input: []                 =&gt; Output: []
</code></pre>
<p><strong>Time:</strong> O(n²) &nbsp;|&nbsp; <strong>Space:</strong> O(1) excluding output</p>`
                },
                {
                    q: "How do you find the container with the most water using two pointers?",
                    a: `<p>Start with left at 0 and right at end. Move the pointer with the shorter height inward (since moving the taller one can only decrease or maintain area).</p>
<pre><code>function maxArea(height) {
    let left = 0, right = height.length - 1, maxWater = 0;
    while (left &lt; right) {
        const h = Math.min(height[left], height[right]);
        const w = right - left;
        maxWater = Math.max(maxWater, h * w);
        if (height[left] &lt; height[right]) left++;
        else right--;
    }
    return maxWater;
}
// Input: [1,8,6,2,5,4,8,3,7]   =&gt; Output: 49  (bars at index 1 and 8)
// Input: [1,1]                 =&gt; Output: 1
// Input: [4,3,2,1,4]           =&gt; Output: 16
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you sort a linked list using two-pointer (finding midpoint) technique?",
                    a: `<p>Use <strong>slow/fast pointers</strong> to find the middle, split the list, recursively sort both halves, then merge. This is merge sort for linked lists.</p>
<pre><code>function sortList(head) {
    if (!head || !head.next) return head;
    // Two pointers to find middle
    let slow = head, fast = head.next;
    while (fast &amp;&amp; fast.next) { slow = slow.next; fast = fast.next.next; }
    const mid = slow.next;
    slow.next = null; // split
    return merge(sortList(head), sortList(mid));
}
function merge(l1, l2) {
    const dummy = {};
    let curr = dummy;
    while (l1 &amp;&amp; l2) {
        if (l1.val &lt;= l2.val) { curr.next = l1; l1 = l1.next; }
        else { curr.next = l2; l2 = l2.next; }
        curr = curr.next;
    }
    curr.next = l1 || l2;
    return dummy.next;
}
// Input: 4-&gt;2-&gt;1-&gt;3   =&gt; Output: 1-&gt;2-&gt;3-&gt;4
// Input: -1-&gt;5-&gt;3-&gt;4-&gt;0 =&gt; Output: -1-&gt;0-&gt;3-&gt;4-&gt;5
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(log n)</p>`
                },
                {
                    q: "How do you remove duplicates from a sorted array in-place using two pointers?",
                    a: `<p>Use a <strong>slow pointer</strong> for the write position and a <strong>fast pointer</strong> for reading. When fast finds a new value, write it to slow's position and advance slow.</p>
<pre><code>function removeDuplicates(nums) {
    let slow = 0;
    for (let fast = 1; fast &lt; nums.length; fast++) {
        if (nums[fast] !== nums[slow]) {
            slow++;
            nums[slow] = nums[fast];
        }
    }
    return slow + 1; // length of unique elements
}
// Input: [1,1,2]         =&gt; Output: 2, nums=[1,2,_]
// Input: [0,0,1,1,1,2,3] =&gt; Output: 4, nums=[0,1,2,3,_,_,_]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the minimum distance between two elements in an array?",
                    a: `<p>Scan the array tracking the last index of each target element. When both have been seen at least once, update minimum distance.</p>
<pre><code>function minDistance(arr, x, y) {
    let lastX = -1, lastY = -1, minDist = Infinity;
    for (let i = 0; i &lt; arr.length; i++) {
        if (arr[i] === x) {
            lastX = i;
            if (lastY !== -1) minDist = Math.min(minDist, Math.abs(lastX - lastY));
        } else if (arr[i] === y) {
            lastY = i;
            if (lastX !== -1) minDist = Math.min(minDist, Math.abs(lastX - lastY));
        }
    }
    return minDist;
}
// Input: [3,5,4,2,6,5,6,6,5,4,8,3], x=3, y=6  =&gt; Output: 4
// Input: [1,2,3,4,5,6,7], x=2, y=6             =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you partition an array around a pivot (two-pointer partition step of quicksort)?",
                    a: `<p>Use the <strong>Lomuto or Hoare partition</strong> scheme. Lomuto uses one pointer from left; Hoare uses two pointers moving opposite directions — more efficient in practice.</p>
<pre><code>// Hoare partition (more efficient, fewer swaps on average)
function hoarePartition(arr, lo, hi) {
    const pivot = arr[Math.floor((lo + hi) / 2)];
    let i = lo - 1, j = hi + 1;
    while (true) {
        do i++; while (arr[i] &lt; pivot);
        do j--; while (arr[j] &gt; pivot);
        if (i &gt;= j) return j; // partition index
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}
// Input: arr=[3,2,1,5,6,4], lo=0, hi=5
// After: elements ≤ pivot on left, &gt; pivot on right
// Lomuto partition ensures pivot is exactly at position p:
// [lo..p-1] &lt;= pivot, arr[p] = pivot, [p+1..hi] &gt; pivot
</code></pre>
<p><strong>Time:</strong> O(n) per call &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the minimum number of operations to make two strings equal?",
                    a: `<p>Use two pointers to linearly check matching prefixes and suffixes. The remaining unmatched middle portions need operations. For more complex edits, see <strong>edit distance</strong> DP.</p>
<pre><code>function minOpsToEqualize(s, t) {
    // Count matching prefix
    let l = 0;
    while (l &lt; s.length &amp;&amp; l &lt; t.length &amp;&amp; s[l] === t[l]) l++;
    // Count matching suffix
    let r1 = s.length - 1, r2 = t.length - 1;
    while (r1 &gt;= l &amp;&amp; r2 &gt;= l &amp;&amp; s[r1] === t[r2]) { r1--; r2--; }
    // Remaining characters that need to change
    const needChange = Math.max(r1 - l + 1, r2 - l + 1);
    return needChange;
}
// Input: s="abc", t="adc"   =&gt; Output: 1  (change 'b' to 'd')
// Input: s="abc", t="xy"    =&gt; Output: 3
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the smallest window containing all distinct characters?",
                    a: `<p>Count distinct characters in the string. Use two pointers to find the <strong>minimum window</strong> that contains all distinct chars. Shrink from left when all are covered, expand right otherwise.</p>
<pre><code>function smallestWindowDistinctChars(s) {
    const distinct = new Set(s).size;
    const freq = new Map();
    let have = 0, left = 0, minLen = Infinity, minStart = 0;
    for (let right = 0; right &lt; s.length; right++) {
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);
        if (freq.get(s[right]) === 1) have++;
        while (have === distinct) {
            if (right - left + 1 &lt; minLen) {
                minLen = right - left + 1;
                minStart = left;
            }
            freq.set(s[left], freq.get(s[left]) - 1);
            if (freq.get(s[left]) === 0) have--;
            left++;
        }
    }
    return minLen === Infinity ? '' : s.slice(minStart, minStart + minLen);
}
// Input: "aabcbcdbca"   =&gt; Output: "dbca"
// Input: "aaab"         =&gt; Output: "ab"
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(k) distinct chars</p>`
                },
                {
                    q: "How do you compress an array by removing elements equal to a value in-place?",
                    a: `<p>Use <strong>slow/fast pointers</strong>. The slow pointer marks the next write position. The fast pointer scans; write elements that are not the target value.</p>
<pre><code>function removeElement(nums, val) {
    let slow = 0;
    for (let fast = 0; fast &lt; nums.length; fast++) {
        if (nums[fast] !== val) {
            nums[slow] = nums[fast];
            slow++;
        }
    }
    return slow; // new length
}
// Input: nums=[3,2,2,3], val=3   =&gt; Output: 2, nums=[2,2,_,_]
// Input: nums=[0,1,2,2,3,0,4,2], val=2 =&gt; Output: 5, nums=[0,1,3,0,4,_,_,_]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you pair elements with target difference using two pointers?",
                    a: `<p>Sort the array. Use two pointers: if the difference equals target, record the pair; if smaller, advance left; if larger, advance right.</p>
<pre><code>function pairsWithDiff(arr, target) {
    arr.sort((a, b) =&gt; a - b);
    const result = [];
    let l = 0, r = 1;
    while (r &lt; arr.length) {
        const diff = arr[r] - arr[l];
        if (diff === target) {
            result.push([arr[l], arr[r]]);
            l++; r++;
        } else if (diff &lt; target) r++;
        else l++;
        if (l === r) r++;
    }
    return result;
}
// Input: arr=[5,20,3,2,50,80], target=78  =&gt; Output: [[2,80]]
// Input: arr=[1,8,30,40,100], target=60   =&gt; Output: [[40,100]]
</code></pre>
<p><strong>Time:</strong> O(n log n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the maximum sum of a subarray (Kadane's algorithm) iteratively?",
                    a: `<p>Maintain current sum: either extend previous subarray or start fresh. Track maximum seen. O(n) single pass with O(1) space.</p>
<pre><code>function maxSubArray(nums) {
    let maxSum = nums[0], currSum = nums[0];
    for (let i = 1; i &lt; nums.length; i++) {
        currSum = Math.max(nums[i], currSum + nums[i]);
        maxSum = Math.max(maxSum, currSum);
    }
    return maxSum;
}
// Input: [-2,1,-3,4,-1,2,1,-5,4]  =&gt; Output: 6  (subarray [4,-1,2,1])
// Input: [1]                       =&gt; Output: 1
// Input: [5,4,-1,7,8]             =&gt; Output: 23
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the starting indices of all anagrams of a pattern in a string?",
                    a: `<p>Use a <strong>fixed-size sliding window</strong> of length p. Compare frequency maps of the window and pattern. Slide by one, updating counts, and record matches.</p>
<pre><code>function findAnagrams(s, p) {
    const result = [];
    const pFreq = new Array(26).fill(0);
    const wFreq = new Array(26).fill(0);
    const A = 'a'.charCodeAt(0);
    for (const c of p) pFreq[c.charCodeAt(0) - A]++;
    for (let i = 0; i &lt; s.length; i++) {
        wFreq[s[i].charCodeAt(0) - A]++;
        if (i &gt;= p.length) wFreq[s[i - p.length].charCodeAt(0) - A]--;
        if (wFreq.join('') === pFreq.join('')) result.push(i - p.length + 1);
    }
    return result;
}
// Input: s="cbaebabacd", p="abc"   =&gt; Output: [0,6]
// Input: s="abab", p="ab"          =&gt; Output: [0,1,2]
</code></pre>
<p><strong>Time:</strong> O(n × 26) ≈ O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the longest subarray with at most K zeros?",
                    a: `<p>Two-pointer sliding window: expand right, count zeros; when count exceeds K, shrink from left until count ≤ K again. Track maximum window length.</p>
<pre><code>function longestOnes(nums, k) {
    let left = 0, zeros = 0, best = 0;
    for (let right = 0; right &lt; nums.length; right++) {
        if (nums[right] === 0) zeros++;
        while (zeros &gt; k) {
            if (nums[left] === 0) zeros--;
            left++;
        }
        best = Math.max(best, right - left + 1);
    }
    return best;
}
// Input: nums=[1,1,1,0,0,0,1,1,1,1,0], k=2  =&gt; Output: 6
// Input: nums=[0,0,1,1,0,0,1,1,1,0,1,1,0,0,0,1,1,1,1], k=3 =&gt; Output: 10
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
                },
                {
                    q: "How do you find the longest repeating character replacement using a sliding window?",
                    a: `<p>Expand the window. Track the most frequent character count in the window. If (window size - max freq) &gt; k, shrink from left.</p>
<pre><code>function characterReplacement(s, k) {
    const freq = {};
    let left = 0, maxFreq = 0, best = 0;
    for (let right = 0; right &lt; s.length; right++) {
        freq[s[right]] = (freq[s[right]] || 0) + 1;
        maxFreq = Math.max(maxFreq, freq[s[right]]);
        // If replacements needed exceed k, shrink window
        if (right - left + 1 - maxFreq &gt; k) {
            freq[s[left]]--;
            left++;
        }
        best = Math.max(best, right - left + 1);
    }
    return best;
}
// Input: s="AABABBA", k=1  =&gt; Output: 4  ("AABA" or "ABBA")
// Input: s="ABAB", k=2     =&gt; Output: 4  (replace both B's or A's)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(26) = O(1)</p>`
                },
                {
                    q: "How do you count the number of distinct substrings of length k with at most j distinct characters?",
                    a: `<p>Use a <strong>sliding window of size k</strong> with a frequency map. Track distinct characters. Count windows where distinct ≤ j.</p>
<pre><code>function countSubstringsAtMostK(s, k, j) {
    const freq = new Map();
    let left = 0, count = 0;
    for (let right = 0; right &lt; s.length; right++) {
        freq.set(s[right], (freq.get(s[right]) || 0) + 1);
        while (freq.size &gt; j) {
            const lc = s[left];
            freq.set(lc, freq.get(lc) - 1);
            if (freq.get(lc) === 0) freq.delete(lc);
            left++;
        }
        // All subarrays ending at right with distinct &lt;= j
        count += right - left + 1;
    }
    return count;
}
// subarrays with exactly k distinct: atMostK(k) - atMostK(k-1)
function subarraysWithExactlyK(s, k) {
    return countSubstringsAtMostK(s, s.length, k)
         - countSubstringsAtMostK(s, s.length, k - 1);
}
// Input: s="araaci", k=2  =&gt; Output: 4 windows with exactly 2 distinct chars
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How do you find the maximum length subarray with equal number of 0s and 1s?",
                    a: `<p>Convert 0s to -1. Now the problem becomes: find the longest subarray with sum 0. Use a <strong>prefix sum + hash map</strong> approach — variable-size sliding window.</p>
<pre><code>function findMaxLength(nums) {
    const map = new Map([[0, -1]]); // prefixSum -&gt; first index
    let sum = 0, maxLen = 0;
    for (let i = 0; i &lt; nums.length; i++) {
        sum += nums[i] === 1 ? 1 : -1; // convert 0 to -1
        if (map.has(sum)) {
            maxLen = Math.max(maxLen, i - map.get(sum));
        } else {
            map.set(sum, i); // only record first occurrence
        }
    }
    return maxLen;
}
// Input: [0,1]           =&gt; Output: 2
// Input: [0,1,0]         =&gt; Output: 2
// Input: [0,0,1,0,0,0,1,1] =&gt; Output: 6
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the number of subarrays with product less than K?",
                    a: `<p>Use a <strong>variable sliding window</strong>. Expand right, multiply. When product >= k, shrink left by dividing. Count windows: each right pointer gives (right - left + 1) valid subarrays.</p>
<pre><code>function numSubarrayProductLessThanK(nums, k) {
    if (k &lt;= 1) return 0;
    let product = 1, left = 0, count = 0;
    for (let right = 0; right &lt; nums.length; right++) {
        product *= nums[right];
        while (product &gt;= k) product /= nums[left++];
        count += right - left + 1;
    }
    return count;
}
// Input: nums=[10,5,2,6], k=100   =&gt; Output: 8
//   Subarrays: [10],[5],[2],[6],[10,5],[5,2],[2,6],[5,2,6]
// Input: nums=[1,2,3], k=0        =&gt; Output: 0
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the minimum window subarray of size at least K with sum >= target?",
                    a: `<p>Use a <strong>deque</strong> to efficiently find the minimum subarray of length ≥ some size with sum ≥ target using prefix sums.</p>
<pre><code>function shortestSubarray(nums, k) {
    const n = nums.length;
    const prefix = new Array(n + 1).fill(0);
    for (let i = 0; i &lt; n; i++) prefix[i + 1] = prefix[i] + nums[i];
    let result = Infinity;
    const deque = []; // stores indices of prefix sum in increasing order
    for (let i = 0; i &lt;= n; i++) {
        // Delete front while subarray sum &gt;= k
        while (deque.length &amp;&amp; prefix[i] - prefix[deque[0]] &gt;= k) {
            result = Math.min(result, i - deque.shift());
        }
        // Maintain increasing deque
        while (deque.length &amp;&amp; prefix[deque[deque.length-1]] &gt;= prefix[i]) {
            deque.pop();
        }
        deque.push(i);
    }
    return result === Infinity ? -1 : result;
}
// Input: nums=[2,-1,2], k=3   =&gt; Output: 3  (whole array)
// Input: nums=[1,2], k=4      =&gt; Output: -1
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you find the number of k-length subarrays with no duplicates?",
                    a: `<p>Use a <strong>fixed-size sliding window</strong> with a frequency map. Maintain a counter of duplicates. A window is valid when duplicates = 0.</p>
<pre><code>function countKLengthNoDup(arr, k) {
    const freq = new Map();
    let dupCount = 0, result = 0;
    for (let i = 0; i &lt; arr.length; i++) {
        // Add right element
        freq.set(arr[i], (freq.get(arr[i]) || 0) + 1);
        if (freq.get(arr[i]) === 2) dupCount++; // new duplicate
        // Shrink from left when window exceeds k
        if (i &gt;= k) {
            if (freq.get(arr[i - k]) === 2) dupCount--;
            freq.set(arr[i - k], freq.get(arr[i - k]) - 1);
        }
        if (i &gt;= k - 1 &amp;&amp; dupCount === 0) result++;
    }
    return result;
}
// Input: arr=[1,2,3,1,2,3], k=3  =&gt; Output: 2  ([1,2,3] at index 0 and 3)
// Input: arr=[2,2,2,2], k=2      =&gt; Output: 0  (all windows have dups)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
                },
                {
                    q: "How do you find the maximum number of vowels in any substring of length k?",
                    a: `<p>Use a <strong>fixed sliding window</strong>. Count vowels in the first k characters, then slide: add the new character's vowel contribution, subtract the removed character's.</p>
<pre><code>function maxVowels(s, k) {
    const vowels = new Set(['a','e','i','o','u']);
    let count = 0;
    for (let i = 0; i &lt; k; i++) if (vowels.has(s[i])) count++;
    let maxCount = count;
    for (let i = k; i &lt; s.length; i++) {
        if (vowels.has(s[i]))   count++;
        if (vowels.has(s[i-k])) count--;
        maxCount = Math.max(maxCount, count);
    }
    return maxCount;
}
// Input: s="abciiidef", k=3   =&gt; Output: 3  (window "iii")
// Input: s="aeiou", k=2       =&gt; Output: 2
// Input: s="leetcode", k=3    =&gt; Output: 2  ("lee" or "eet")
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the maximum points you can obtain from cards using a sliding window?",
                    a: `<p>Take k cards total from either end. The optimal strategy leaves a window of (n-k) cards in the middle untouched. Minimize the middle window sum = maximize remaining sum.</p>
<pre><code>function maxScore(cardPoints, k) {
    const n = cardPoints.length;
    const totalSum = cardPoints.reduce((a, b) =&gt; a + b, 0);
    // Find minimum sum of window of size (n-k)
    let windowSum = 0, minWindowSum = Infinity;
    for (let i = 0; i &lt; n - k; i++) windowSum += cardPoints[i];
    minWindowSum = windowSum;
    for (let i = n - k; i &lt; n; i++) {
        windowSum += cardPoints[i] - cardPoints[i - (n - k)];
        minWindowSum = Math.min(minWindowSum, windowSum);
    }
    return totalSum - minWindowSum;
}
// Input: cardPoints=[1,2,3,4,5,6,1], k=3   =&gt; Output: 12  (6+5+1 from ends)
// Input: cardPoints=[2,2,2], k=2            =&gt; Output: 4
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the minimum size subarray with sum greater than or equal to target?",
                    a: `<p>Variable sliding window: expand right to grow sum, shrink left to minimize length while maintaining sum >= target.</p>
<pre><code>function minSubArrayLen(target, nums) {
    let left = 0, sum = 0, minLen = Infinity;
    for (let right = 0; right &lt; nums.length; right++) {
        sum += nums[right];
        while (sum &gt;= target) {
            minLen = Math.min(minLen, right - left + 1);
            sum -= nums[left++]; // shrink from left
        }
    }
    return minLen === Infinity ? 0 : minLen;
}
// Input: target=7, nums=[2,3,1,2,4,3]   =&gt; Output: 2  ([4,3])
// Input: target=4, nums=[1,4,4]          =&gt; Output: 1  ([4])
// Input: target=11, nums=[1,1,1,1,1,1]  =&gt; Output: 0  (impossible)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the longest subarray with sum at most k?",
                    a: `<p>Variable sliding window: expand right adding elements, shrink from left when sum exceeds k. Track the maximum window length where sum ≤ k.</p>
<pre><code>function longestSubarrayAtMostK(nums, k) {
    let left = 0, sum = 0, maxLen = 0;
    for (let right = 0; right &lt; nums.length; right++) {
        sum += nums[right];
        while (sum &gt; k &amp;&amp; left &lt;= right) {
            sum -= nums[left++];
        }
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}
// Input: nums=[3,1,2,1,1], k=5   =&gt; Output: 4  ([1,2,1,1])
// Input: nums=[4,1,1,2], k=4     =&gt; Output: 3  ([1,1,2])
// Input: nums=[5,5], k=3         =&gt; Output: 0  (no subarray works)
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the minimum number of swaps to group all 1s together?",
                    a: `<p>Count total 1s (= window size). Find the minimum 0s in any window of that size — each 0 is a swap needed to bring a 1 in.</p>
<pre><code>function minSwaps(nums) {
    const ones = nums.reduce((a, b) =&gt; a + b, 0);
    if (ones === 0) return 0;
    // Count 0s in first window of size 'ones'
    let zeros = 0;
    for (let i = 0; i &lt; ones; i++) if (nums[i] === 0) zeros++;
    let minZeros = zeros;
    // Slide window on circular array (duplicate for circular)
    const n = nums.length;
    for (let i = ones; i &lt; n + ones; i++) {
        if (nums[i % n] === 0) zeros++;
        if (nums[(i - ones) % n] === 0) zeros--;
        minZeros = Math.min(minZeros, zeros);
    }
    return minZeros;
}
// Input: [0,1,0,1,1,0,0]  =&gt; Output: 1  (swap one 0 into the window of 3 ones)
// Input: [1,0,1,0,1]      =&gt; Output: 1
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find all permutations of a string that are substrings of another string?",
                    a: `<p>Use a <strong>fixed-size sliding window</strong> of length p. Compare sorted (or frequency map) of window with sorted pattern. Record start index when they match.</p>
<pre><code>function findPermutationIndices(s, p) {
    const result = [];
    if (p.length &gt; s.length) return result;
    const pSorted = p.split('').sort().join('');
    for (let i = 0; i &lt;= s.length - p.length; i++) {
        if (s.slice(i, i + p.length).split('').sort().join('') === pSorted) {
            result.push(i);
        }
    }
    return result;
}
// Optimized O(n) using frequency array (same as findAnagrams):
// Input: s="eidbaooo", p="ab"  =&gt; Output: [3]  ("ba" at index 3)
// Input: s="cbaebabacd", p="abc" =&gt; Output: [0,6]
</code></pre>
<p><strong>Time:</strong> O(n × k log k) naive, O(n) optimized &nbsp;|&nbsp; <strong>Space:</strong> O(k)</p>`
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
                },
                {
                    q: "How do you count set bits (Hamming Weight) of a number?",
                    a: `<p>Use <code>n & (n-1)</code> to clear the lowest set bit repeatedly and count iterations. Alternative: use Brian Kernighan's algorithm.</p>
<pre><code>function hammingWeight(n) {
    let count = 0;
    while (n) {
        n &amp;= (n - 1); // clears the lowest set bit
        count++;
    }
    return count;
}
// Input: n=11 (1011 in binary)  =&gt; Output: 3  (three 1-bits)
// Input: n=128 (10000000)        =&gt; Output: 1
// Input: n=4294967293 (0b11111111111111111111111111111101) =&gt; Output: 31

// Using bit shift:
function countBits(n) {
    let count = 0;
    while (n) { count += n &amp; 1; n &gt;&gt;&gt;= 1; }
    return count;
}
</code></pre>
<p><strong>Time:</strong> O(k) where k is the number of set bits (= O(log n) worst case) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the missing number in an array using XOR?",
                    a: `<p>XOR all numbers 0..n AND all array elements. Paired numbers cancel out; the unpaired one is the missing number.</p>
<pre><code>function missingNumber(nums) {
    let xor = nums.length; // start with n
    for (let i = 0; i &lt; nums.length; i++) {
        xor ^= i ^ nums[i];
    }
    return xor;
}
// Input: [3,0,1]    =&gt; Output: 2
// Input: [0,1]      =&gt; Output: 2
// Input: [9,6,4,2,3,5,7,0,1] =&gt; Output: 8
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>
<p><strong>Alternative:</strong> sum formula: n*(n+1)/2 - sum(nums). XOR avoids potential overflow.</p>`
                },
                {
                    q: "How do you find two non-repeating numbers in an array where all others appear twice?",
                    a: `<p>XOR all elements to get x = a^b. Find any set bit in x (a and b differ there). Split array into two groups by that bit; XOR each group to isolate a and b.</p>
<pre><code>function twoSingleNumbers(nums) {
    let xor = 0;
    for (const n of nums) xor ^= n; // xor = a ^ b
    // Find rightmost set bit (where a and b differ)
    const setBit = xor &amp; (-xor); // isolates lowest set bit
    let a = 0, b = 0;
    for (const n of nums) {
        if (n &amp; setBit) a ^= n; // group with this bit set
        else b ^= n;            // group without this bit
    }
    return [a, b];
}
// Input: [1,2,3,4,1,2]   =&gt; Output: [3,4]
// Input: [2,3,7,9,11,2,3,11] =&gt; Output: [7,9]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you reverse the bits of a 32-bit unsigned integer?",
                    a: `<p>Use a mask. Shift left into result's MSB while shifting right through input's bits. Process all 32 bit positions.</p>
<pre><code>function reverseBits(n) {
    let result = 0;
    for (let i = 0; i &lt; 32; i++) {
        result = (result &lt;&lt; 1) | (n &amp; 1); // add LSB of n to MSB of result
        n &gt;&gt;&gt;= 1; // unsigned right shift
    }
    return result &gt;&gt;&gt; 0; // ensure unsigned 32-bit
}
// Input: 43261596          (binary: 00000010100101000001111010011100)
// Output: 964176192        (binary: 00111001011110000010100101000000)
// Input: 4294967293        (binary: 11111111111111111111111111111101)
// Output: 3221225471       (binary: 10111111111111111111111111111111)
</code></pre>
<p><strong>Time:</strong> O(32) = O(1) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you generate all subsets using bit masking?",
                    a: `<p>For an array of n elements, there are 2ⁿ subsets. Use a bitmask from 0 to 2ⁿ-1; each bit represents whether to include the corresponding element.</p>
<pre><code>function subsets(nums) {
    const n = nums.length;
    const result = [];
    for (let mask = 0; mask &lt; (1 &lt;&lt; n); mask++) {
        const subset = [];
        for (let i = 0; i &lt; n; i++) {
            if (mask &amp; (1 &lt;&lt; i)) subset.push(nums[i]);
        }
        result.push(subset);
    }
    return result;
}
// Input: [1,2,3]  =&gt; Output: 8 subsets (2^3)
// mask=0 (000) =&gt; [], mask=1 (001) =&gt; [1], mask=7 (111) =&gt; [1,2,3]
// Input: [1,2]   =&gt; Output: [[],[1],[2],[1,2]]
</code></pre>
<p><strong>Time:</strong> O(2ⁿ × n) &nbsp;|&nbsp; <strong>Space:</strong> O(n) per subset</p>`
                },
                {
                    q: "How do you compute the single element in a sorted array where every element appears twice except one?",
                    a: `<p>XOR all elements — duplicates cancel out, leaving the single element. For a sorted array, you can also use binary search: at the single element's position, the pair ordering breaks.</p>
<pre><code>// XOR approach (O(n)):
function singleNonDuplicate(nums) {
    return nums.reduce((xor, n) =&gt; xor ^ n, 0);
}
// Binary search on sorted array (O(log n)):
function singleNonDuplicateBSearch(nums) {
    let lo = 0, hi = nums.length - 1;
    while (lo &lt; hi) {
        let mid = Math.floor((lo + hi) / 2);
        if (mid % 2 === 1) mid--; // ensure mid is even
        if (nums[mid] === nums[mid + 1]) lo = mid + 2; // single is on right
        else hi = mid;                                 // single is here or left
    }
    return nums[lo];
}
// Input: [1,1,2,3,3,4,4,8,8]  =&gt; Output: 2
// Input: [3,3,7,7,10,11,11]   =&gt; Output: 10
</code></pre>
<p><strong>Time:</strong> O(log n) binary search &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you swap two numbers without a temporary variable using XOR?",
                    a: `<p>Use the XOR swap trick: <code>a = a^b, b = a^b, a = a^b</code>. Works because XOR is its own inverse. Note: fails if a and b are the same variable/reference.</p>
<pre><code>function xorSwap(a, b) {
    a = a ^ b;
    b = a ^ b; // b = (a^b)^b = a
    a = a ^ b; // a = (a^b)^a = b
    return [a, b];
}
// Input: a=5, b=3   =&gt; Output: a=3, b=5
// Trace: a=5^3=6, b=6^3=5, a=6^5=3 ✓

// Array version (in-place):
function swapInArray(arr, i, j) {
    arr[i] ^= arr[j];
    arr[j] ^= arr[i];
    arr[i] ^= arr[j];
}
</code></pre>
<p><strong>Time:</strong> O(1) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you compute the XOR of integers from 1 to n efficiently?",
                    a: `<p>There's a pattern based on n % 4: the XOR of 1..n cycles through 4 states. Use this O(1) formula instead of iterating.</p>
<pre><code>function xorUpToN(n) {
    switch (n % 4) {
        case 0: return n;      // 4,8,12... =&gt; n itself
        case 1: return 1;      // 1,5,9...  =&gt; 1
        case 2: return n + 1;  // 2,6,10... =&gt; n+1
        case 3: return 0;      // 3,7,11... =&gt; 0
    }
}
// xorRange(l, r) = xorUpToN(r) ^ xorUpToN(l-1)
function xorRange(l, r) { return xorUpToN(r) ^ xorUpToN(l - 1); }

// Input: n=4  =&gt; Output: 4   (1^2^3^4=4)
// Input: n=5  =&gt; Output: 1   (1^2^3^4^5=1)
// Input: n=6  =&gt; Output: 7   (1^2^3^4^5^6=7)
// xorRange(3, 7) = xorUpToN(7)^xorUpToN(2) = 0 ^ 3 = 3
</code></pre>
<p><strong>Time:</strong> O(1) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you check if two integers have opposite signs using bit manipulation?",
                    a: `<p>The sign bit is the MSB (bit 31 in 32-bit integers). XOR the two numbers: if the result's MSB is 1, they have opposite signs.</p>
<pre><code>function oppositeSigns(a, b) {
    return (a ^ b) &lt; 0; // MSB is 1 means different signs
}
// Input: a=4, b=-7   =&gt; Output: true
// Input: a=2, b=4    =&gt; Output: false
// Input: a=-2, b=-4  =&gt; Output: false

// Determine sign of a number:
function isNegative(n) { return (n &gt;&gt;&gt; 31) === 1; }
// Input: -5  =&gt; true, 5 =&gt; false, 0 =&gt; false
</code></pre>
<p><strong>Time:</strong> O(1) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you find the position of the rightmost set bit?",
                    a: `<p>Use <code>n & (-n)</code> to isolate the lowest set bit (returns a power of 2). Take log₂ to find the bit position.</p>
<pre><code>function rightmostSetBit(n) {
    return Math.log2(n &amp; (-n)); // position (0-indexed)
}
// Alternatively, count trailing zeros:
function countTrailingZeros(n) {
    if (n === 0) return 32;
    let pos = 0;
    while ((n &amp; 1) === 0) { n &gt;&gt;&gt;= 1; pos++; }
    return pos;
}
// Input: n=12 (1100)   =&gt; Output: position 2  (bit at index 2 is set)
// Input: n=18 (10010)  =&gt; Output: position 1  (bit at index 1 is set)
// Input: n=64 (1000000) =&gt; Output: position 6
</code></pre>
<p><strong>Time:</strong> O(log n) for trailing zeros &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you compute the number of 1-bits for all numbers from 0 to n?",
                    a: `<p>Use DP with the relation: <code>dp[i] = dp[i >> 1] + (i & 1)</code>. The count for i equals the count for i/2 (right-shifted) plus the last bit.</p>
<pre><code>function countBits(n) {
    const dp = new Array(n + 1).fill(0);
    for (let i = 1; i &lt;= n; i++) {
        dp[i] = dp[i &gt;&gt; 1] + (i &amp; 1);
    }
    return dp;
}
// Input: n=5   =&gt; Output: [0,1,1,2,1,2]
//   0=0, 1=1, 2=1, 3=2, 4=1, 5=2 (count of 1-bits)
// Input: n=2   =&gt; Output: [0,1,1]
// Input: n=0   =&gt; Output: [0]
</code></pre>
<p><strong>Time:</strong> O(n) &nbsp;|&nbsp; <strong>Space:</strong> O(n)</p>`
                },
                {
                    q: "How do you add two numbers without using + or - (bit manipulation)?",
                    a: `<p>XOR gives sum without carry. AND << 1 gives carry. Repeat until no carry remains.</p>
<pre><code>function add(a, b) {
    while (b !== 0) {
        const carry = (a &amp; b) &lt;&lt; 1; // carry bits
        a = a ^ b;                  // sum without carry
        b = carry;
    }
    return a;
}
// Input: a=1, b=1   =&gt; Output: 2
// Input: a=15, b=25 =&gt; Output: 40
// Input: a=7, b=8   =&gt; Output: 15
// Trace for a=3(011), b=5(101):
//   sum=110=6, carry=001&lt;&lt;1=010=2
//   sum=100=4, carry=010=2 (shifted)...
</code></pre>
<p><strong>Time:</strong> O(log(max(a,b))) iterations &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
                },
                {
                    q: "How do you check if a number is a power of 4 using bit manipulation?",
                    a: `<p>A power of 4 must be: (1) a power of 2 (only one set bit), AND (2) the set bit is at an even position (0, 2, 4...). The mask <code>0x55555555</code> has 1s only at even positions.</p>
<pre><code>function isPowerOfFour(n) {
    return n &gt; 0
        &amp;&amp; (n &amp; (n - 1)) === 0   // power of 2: exactly one set bit
        &amp;&amp; (n &amp; 0x55555555) !== 0; // set bit is at even position
}
// Input: 1    =&gt; Output: true  (4^0)
// Input: 16   =&gt; Output: true  (4^2)
// Input: 5    =&gt; Output: false (not a power of 4)
// Input: 2    =&gt; Output: false (power of 2 but not 4)
// 0x55555555 = 01010101...01010101 (even bit positions are 1)
</code></pre>
<p><strong>Time:</strong> O(1) &nbsp;|&nbsp; <strong>Space:</strong> O(1)</p>`
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
                },
                {
                    q: "What is Big O, Big Omega, and Big Theta notation?",
                    a: `<p>These three notations describe <strong>asymptotic bounds</strong> on algorithm complexity:</p>
<pre><code>// Big O — upper bound (worst case ceiling)
// f(n) = O(g(n)) means f grows no faster than g
// Example: n^2 + n = O(n^2)

// Big Omega (Ω) — lower bound (best case floor)
// f(n) = Ω(g(n)) means f grows at least as fast as g
// Example: sorting any comparison-based = Ω(n log n)

// Big Theta (Θ) — tight bound (both upper and lower)
// f(n) = Θ(g(n)) means f grows exactly as fast as g
// Example: merge sort = Θ(n log n) in all cases

// Relationship: Θ(g) ⊂ O(g) and Θ(g) ⊂ Ω(g)
// O(n^2) is also O(n^3) — O gives an upper bound, not exact
</code></pre>
<p>In practice, <strong>Big O is most commonly used</strong> to describe worst-case performance. Theta is more precise but harder to prove.</p>`
                },
                {
                    q: "What is the optimal complexity for comparison-based sorting algorithms?",
                    a: `<p>The theoretical lower bound for comparison-based sorting is <strong>Ω(n log n)</strong>. This is proven via the <strong>decision tree model</strong>.</p>
<pre><code>// Decision tree for sorting n elements:
// Leaves ≥ n! (one for each possible permutation)
// Height of binary tree with n! leaves ≥ log2(n!)
// Stirling's approximation: log2(n!) ≈ n log2(n)
// Therefore: any comparison sort ≥ Ω(n log n)

// Optimal O(n log n) algorithms:
// - Merge Sort: O(n log n) always
// - Heap Sort:  O(n log n) always
// - Quick Sort: O(n log n) average, O(n^2) worst

// Can beat O(n log n) WITHOUT comparisons:
// - Counting Sort: O(n + k) where k = range of values
// - Radix Sort:    O(d * (n + k)) where d = digits
// - Bucket Sort:   O(n + k) average
</code></pre>
<p>Non-comparison sorts can be O(n) by exploiting the structure of the keys, not their ordering relative to each other.</p>`
                },
                {
                    q: "How do you analyze space complexity of recursive algorithms?",
                    a: `<p>Recursive algorithms use the <strong>call stack</strong> implicitly. Each function call adds a frame. Stack depth = max recursion depth = space complexity.</p>
<pre><code>// Linear recursion: O(n) space
function sum(n) {
    if (n === 0) return 0;
    return n + sum(n - 1); // n frames on stack
}

// Tree recursion (Fibonacci): O(n) space (depth of tree)
function fib(n) {
    if (n &lt;= 1) return n;
    return fib(n-1) + fib(n-2); // max depth = n
}
// Note: time is O(2^n) but space is O(n) — only one branch active at a time

// Binary search (recursive): O(log n) space
// Merge sort: O(n) space — O(n) merge arrays + O(log n) stack

// Tail-recursive (with TCO): O(1) space
// Most JS engines don't support TCO; use iterative for O(1) space
</code></pre>
<p><strong>Key insight:</strong> stack space = max depth of recursion, not total nodes visited.</p>`
                },
                {
                    q: "What are common data structure operation complexities?",
                    a: `<p>Know the time complexity of standard operations for each data structure:</p>
<pre><code>// Arrays (dynamic):
// Access: O(1) | Search: O(n) | Insert end: O(1) amortized
// Insert middle: O(n) | Delete middle: O(n)

// Linked List:
// Access: O(n) | Search: O(n) | Insert/Delete at head: O(1)
// Insert/Delete at position: O(n) to traverse

// Stack/Queue:
// Push/Pop/Peek: O(1) (all operations)

// Hash Map (average):
// Get/Set/Delete: O(1) average | O(n) worst (collisions)

// Binary Search Tree (balanced):
// Search/Insert/Delete: O(log n)
// BST unbalanced worst case: O(n)

// Heap:
// Insert: O(log n) | Extract-min/max: O(log n)
// Peek min/max: O(1) | Build heap: O(n)
</code></pre>
<p>Choose data structures based on what operations you need most frequently.</p>`
                },
                {
                    q: "What is the Fibonacci sequence complexity: naive vs memoized vs matrix exponentiation?",
                    a: `<p>Fibonacci is a classic example of how the same problem can have wildly different complexities based on approach:</p>
<pre><code>// Naive recursive: O(2^n) time, O(n) space
function fibNaive(n) {
    if (n &lt;= 1) return n;
    return fibNaive(n-1) + fibNaive(n-2); // exponential branching
}

// Memoization / DP: O(n) time, O(n) space
function fibDP(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n &lt;= 1) return n;
    return memo[n] = fibDP(n-1, memo) + fibDP(n-2, memo);
}

// Bottom-up DP: O(n) time, O(1) space
function fibOptimal(n) {
    let a = 0, b = 1;
    for (let i = 0; i &lt; n; i++) [a, b] = [b, a + b];
    return a;
}

// Matrix exponentiation: O(log n) time, O(log n) stack space
// [[1,1],[1,0]]^n gives [[fib(n+1), fib(n)], [fib(n), fib(n-1)]]

// Input: n=10 =&gt; Output: 55 (all approaches)
// Input: n=50 =&gt; Output: 12586269025
</code></pre>
<p>Each approach is better by orders of magnitude: O(2ⁿ) → O(n) → O(1) space → O(log n) time.</p>`
                },
                {
                    q: "What is the space-time tradeoff?",
                    a: `<p>Often you can reduce <strong>time complexity</strong> by using more <strong>space</strong> (precomputation/caching), and vice versa.</p>
<pre><code>// Problem: check if two elements in array sum to target

// O(n^2) time, O(1) space — brute force
function hasPairBrute(arr, target) {
    for (let i = 0; i &lt; arr.length; i++)
        for (let j = i+1; j &lt; arr.length; j++)
            if (arr[i] + arr[j] === target) return true;
    return false;
}

// O(n) time, O(n) space — hash set tradeoff
function hasPairFast(arr, target) {
    const seen = new Set();
    for (const x of arr) {
        if (seen.has(target - x)) return true;
        seen.add(x);
    }
    return false;
}

// Input: [2,7,11,15], target=9 =&gt; true (2+7)
// Input: [1,3,5,7], target=4   =&gt; true (1+3)
// Input: [1,3,5,7], target=2   =&gt; false
</code></pre>
<p>Other examples: lookup tables, memoization, prefix sums, precomputed hashes — all trade memory for speed.</p>`
                },
                {
                    q: "What is P vs NP and why does it matter?",
                    a: `<p><strong>P</strong> = problems solvable in polynomial time O(n^k). <strong>NP</strong> = problems where a solution can be <strong>verified</strong> in polynomial time. P vs NP asks: if we can quickly verify a solution, can we also quickly find one?</p>
<pre><code>// P problems (efficient solutions exist):
// - Sorting: O(n log n)
// - Shortest path (Dijkstra): O(E log V)
// - Matrix multiplication: O(n^3) or better

// NP problems (no known polynomial algorithm):
// - Traveling Salesman Problem (TSP)
// - 0/1 Knapsack (pseudo-polynomial O(nW) but NP-hard)
// - Subset Sum
// - Graph Coloring
// - SAT (Boolean satisfiability)

// NP-Complete: hardest problems in NP (NP-hard AND in NP)
// If any NP-complete problem has a polynomial solution, P = NP

// Practical implications:
// TSP with n=20: exact = O(n! * n) infeasible
// Use approximation algorithms or heuristics (greedy, genetic algorithms)
</code></pre>
<p>For NP-hard problems, we rely on <strong>approximation algorithms</strong>, <strong>heuristics</strong>, or <strong>exponential algorithms</strong> for small inputs.</p>`
                },
                {
                    q: "How do you find the time complexity of code with nested loops?",
                    a: `<p>Multiply the iterations of each nested loop. Independent loops add; nested loops multiply.</p>
<pre><code>// Single loop: O(n)
for (let i = 0; i &lt; n; i++) { /* O(1) work */ }

// Nested loops: O(n^2)
for (let i = 0; i &lt; n; i++)
    for (let j = 0; j &lt; n; j++) { /* O(1) */ }

// Nested but inner depends on outer: O(n^2)
for (let i = 0; i &lt; n; i++)
    for (let j = 0; j &lt; i; j++) { /* 0+1+2+...+(n-1) = n(n-1)/2 = O(n^2) */ }

// Logarithmic inner loop: O(n log n)
for (let i = 0; i &lt; n; i++)
    for (let j = 1; j &lt; n; j *= 2) { /* O(log n) inner */ }

// Triple nested: O(n^3)
for (let i = 0; i &lt; n; i++)
    for (let j = 0; j &lt; n; j++)
        for (let k = 0; k &lt; n; k++) { /* O(1) */ }

// Two separate loops: O(n + m)
for (let i = 0; i &lt; n; i++) { /* ... */ }
for (let j = 0; j &lt; m; j++) { /* ... */ }
</code></pre>
<p><strong>General rule:</strong> Drop lower-order terms and constant factors. O(3n² + 2n + 5) = O(n²).</p>`
                },
                {
                    q: "What is the difference between BFS and DFS in terms of space complexity?",
                    a: `<p>BFS uses a <strong>queue</strong> that holds up to one entire level at a time. DFS uses a <strong>stack</strong> (or recursion) proportional to depth.</p>
<pre><code>// Tree example with n nodes, height h, branching factor b

// BFS space complexity: O(max width of tree)
// Worst case (balanced tree): O(n/2) = O(n) — last level has ~n/2 nodes
// Best case (skewed tree): O(1)

// DFS space complexity: O(h) — O(log n) balanced, O(n) skewed
// Example: perfectly balanced BST with n=1024
//   BFS queues up to 512 nodes (last level)
//   DFS stack depth = 10 (height = log2(1024))

// Graph BFS: O(V) for visited set
// Graph DFS: O(V) for visited set + O(h) for recursion stack

// Summary:
// Narrow tall tree: BFS better (smaller max width)
// Wide shallow tree: DFS better (smaller max depth)
</code></pre>
<p>In practice, BFS is preferred for <strong>shortest path</strong> problems; DFS for <strong>exhaustive search</strong>, <strong>cycle detection</strong>, and topological sort.</p>`
                },
                {
                    q: "What are common sorting algorithm complexities?",
                    a: `<p>Comparison of standard sorting algorithms by time and space:</p>
<pre><code>// Algorithm     | Best       | Average    | Worst     | Space
// --------------|------------|------------|-----------|-------
// Bubble Sort   | O(n)       | O(n^2)     | O(n^2)    | O(1)
// Selection Sort| O(n^2)     | O(n^2)     | O(n^2)    | O(1)
// Insertion Sort| O(n)       | O(n^2)     | O(n^2)    | O(1)
// Merge Sort    | O(n log n) | O(n log n) | O(n log n)| O(n)
// Quick Sort    | O(n log n) | O(n log n) | O(n^2)    | O(log n)
// Heap Sort     | O(n log n) | O(n log n) | O(n log n)| O(1)
// Counting Sort | O(n + k)   | O(n + k)   | O(n + k)  | O(k)
// Radix Sort    | O(d(n+k))  | O(d(n+k))  | O(d(n+k)) | O(n+k)
// Tim Sort      | O(n)       | O(n log n) | O(n log n)| O(n)

// Key facts:
// - Insertion sort best for small or nearly-sorted arrays
// - Quick sort fastest in practice (cache-friendly), but unstable
// - Merge sort stable BUT requires extra O(n) space
// - Counting/Radix only work for integers with bounded range
</code></pre>
<p>JavaScript's <code>Array.prototype.sort</code> uses TimSort (hybrid of merge sort and insertion sort).</p>`
                },
                {
                    q: "What is tail call optimization and when does it help space complexity?",
                    a: `<p><strong>Tail call optimization (TCO)</strong> occurs when a recursive call is the <strong>last operation</strong> in a function, allowing the engine to reuse the current stack frame instead of adding a new one.</p>
<pre><code>// Normal recursion: O(n) stack space (NOT tail recursive)
function factNormal(n) {
    if (n === 0) return 1;
    return n * factNormal(n - 1); // n* must wait for result
}

// Tail recursion: O(1) stack space WITH TCO
function factTail(n, acc = 1) {
    if (n === 0) return acc;
    return factTail(n - 1, n * acc); // last call — no pending work
}
// factTail(5) → factTail(4,5) → factTail(3,20) → factTail(2,60) → ...

// Fibonacci tail recursive:
function fibTail(n, a = 0, b = 1) {
    if (n === 0) return a;
    return fibTail(n - 1, b, a + b); // tail call
}
// Input: fibTail(10) =&gt; Output: 55
// Input: fibTail(15) =&gt; Output: 610

// JavaScript: TCO is part of ES6 spec but
// only Safari fully implements it.
// Use iterative loops for O(1) stack in most JS environments.
</code></pre>
<p>TCO converts O(n) stack space to O(1) — same benefit as rewriting recursion as iteration.</p>`
                },
                {
                    q: "How do you use prefix sums to answer range queries in O(1)?",
                    a: `<p><strong>Prefix sums</strong> precompute cumulative sums in O(n), then answer range sum queries in O(1). Classic space-time tradeoff.</p>
<pre><code>function buildPrefixSum(arr) {
    const prefix = new Array(arr.length + 1).fill(0);
    for (let i = 0; i &lt; arr.length; i++) {
        prefix[i + 1] = prefix[i] + arr[i];
    }
    return prefix;
}
// prefix[i] = sum of arr[0..i-1]

function rangeSum(prefix, l, r) { // inclusive [l, r]
    return prefix[r + 1] - prefix[l];
}

// Input: arr=[2,3,1,5,4], query (1,3)
//   prefix=[0,2,5,6,11,15]
//   rangeSum(prefix, 1, 3) = prefix[4] - prefix[1] = 11 - 2 = 9 ✓
// Input: arr=[1,2,3,4,5], query (0,4)
//   rangeSum(prefix, 0, 4) = 15 - 0 = 15
// Input: arr=[1,2,3,4,5], query (2,3)
//   rangeSum(prefix, 2, 3) = 10 - 3 = 7
</code></pre>
<p><strong>Build:</strong> O(n) time and space. <strong>Query:</strong> O(1). Also works for 2D prefix sums (image queries).</p>`
                }
            ]
        }
    ]
};

