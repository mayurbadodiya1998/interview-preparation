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
          a: `<p>A star pyramid is a centered triangle pattern where each row i has <strong>(2*i - 1)</strong> stars and <strong>(n - i)</strong> leading spaces for alignment.</p>
<p>Loop from row 1 to n and compute the spaces and star count per row using the row index.</p>
<p>This is the most fundamental pattern problem — master it and all centered patterns become easy.</p>
<pre><code>function pyramid(n) {
  for (let i = 1; i &lt;= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
}
// Input: n=4 =&gt; Output:
//    *
//   ***
//  *****
// *******
// Input: n=3 =&gt; Output:
//   *
//  ***
// *****</code></pre>
<p><strong>Total stars</strong> in an n-row pyramid = n&sup2; (sum of first n odd numbers: 1+3+5+...+(2n-1)).</p>
<p>Key formula: spaces = <code>n - row</code>, stars = <code>2 * row - 1</code>. Memorize this pair for all centered patterns.</p>`
        },
        {
          q: "Print an inverted star pyramid of height n.",
          a: `<p>An inverted pyramid starts with the widest row (2n-1 stars) at the top and narrows to a single star at the bottom.</p>
<p>Loop from n down to 1: for row i, print <strong>(n - i)</strong> leading spaces and <strong>(2*i - 1)</strong> stars.</p>
<p>This is the mirror image of the regular pyramid — both use the same formula but in opposite loop directions.</p>
<pre><code>function invertedPyramid(n) {
  for (let i = n; i &gt;= 1; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
}
// Input: n=4 =&gt; Output:
// *******
//  *****
//   ***
//    *
// Input: n=3 =&gt; Output:
// *****
//  ***
//   *</code></pre>
<p><strong>Key change:</strong> Loop direction reversed from <code>1 to n</code> to <code>n to 1</code> — that's the only difference from the regular pyramid.</p>
<p>Combining pyramid and inverted pyramid gives the <strong>diamond pattern</strong> — two patterns in one.</p>`
        },
        {
          q: "Print a diamond pattern of height n (odd).",
          a: `<p>A diamond combines a top pyramid and a bottom inverted pyramid, sharing the single widest middle row.</p>
<p>Compute half = Math.ceil(n/2), print the top pyramid up to half rows, then the bottom from half-1 down to 1.</p>
<p>The second loop starts at half-1 to avoid repeating the center row — a key boundary detail.</p>
<pre><code>function diamond(n) {
  let half = Math.ceil(n / 2);
  for (let i = 1; i &lt;= half; i++)
    console.log(' '.repeat(half - i) + '*'.repeat(2 * i - 1));
  for (let i = half - 1; i &gt;= 1; i--)
    console.log(' '.repeat(half - i) + '*'.repeat(2 * i - 1));
}
// Input: n=5 =&gt; Output:
//   *
//  ***
// *****
//  ***
//   *
// Input: n=3 =&gt; Output:
//  *
// ***
//  *</code></pre>
<p><strong>Total rows</strong> = 2*half - 1. <strong>Math.ceil</strong> handles both even and odd n gracefully.</p>
<p>The diamond pattern is built on the pyramid pattern — understand one and the other follows naturally.</p>`
        },
        {
          q: "Print a number triangle where row i contains numbers 1 to i.",
          a: `<p>A number triangle prints the numbers 1 through i on row i — it's the numeric counterpart of the star right triangle.</p>
<p>Outer loop controls the row (1 to n); inner loop runs from 1 to i, building each row as a space-separated string.</p>
<p>Use <code>row.trim()</code> to remove the trailing space after the last number on each row.</p>
<pre><code>function numberTriangle(n) {
  for (let i = 1; i &lt;= n; i++) {
    let row = '';
    for (let j = 1; j &lt;= i; j++) row += j + ' ';
    console.log(row.trim());
  }
}
// Input: n=4 =&gt; Output:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// Input: n=2 =&gt; Output:
// 1
// 1 2</code></pre>
<p><strong>Variation:</strong> To print row number repeated (row 3 = "3 3 3"), replace <code>j</code> with <code>i</code> in the inner loop.</p>
<p>Total numbers = 1+2+...+n = <strong>n*(n+1)/2</strong> (triangular numbers).</p>`
        },
        {
          q: "Print Floyd's Triangle for n rows.",
          a: `<p>Floyd's Triangle fills rows with consecutive natural numbers: row 1 has 1 number, row 2 has 2, row 3 has 3, and so on.</p>
<p>The key: a counter <code>num</code> starts at 1 and increments continuously across ALL cells of ALL rows, independent of the loop variables.</p>
<p>The outer counter variable persisting across rows is a classic nested loop pattern worth memorizing.</p>
<pre><code>function floyds(n) {
  let num = 1;
  for (let i = 1; i &lt;= n; i++) {
    let row = '';
    for (let j = 1; j &lt;= i; j++) row += (num++) + ' ';
    console.log(row.trim());
  }
}
// Input: n=4 =&gt; Output:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// Input: n=3 =&gt; Output:
// 1
// 2 3
// 4 5 6</code></pre>
<p><strong>Total numbers</strong> in n rows = n*(n+1)/2. Row k starts at number <strong>k*(k-1)/2 + 1</strong>.</p>
<p>Notice <code>num</code> is declared OUTSIDE both loops — this is what makes it persist and continue incrementing across all rows.</p>`
        },
        {
          q: "Print a hollow square of size n.",
          a: `<p>A hollow square prints stars only on its four borders — the first row, last row, first column, and last column — leaving the interior empty.</p>
<p>For each cell (i, j), print a star if it's on any border: <code>i===0 || i===n-1 || j===0 || j===n-1</code>. Otherwise print spaces.</p>
<p>This introduces the concept of <strong>boundary condition checking</strong> in 2D nested loops.</p>
<pre><code>function hollowSquare(n) {
  for (let i = 0; i &lt; n; i++) {
    let row = '';
    for (let j = 0; j &lt; n; j++)
      row += (i === 0 || i === n-1 || j === 0 || j === n-1) ? '* ' : '  ';
    console.log(row);
  }
}
// Input: n=4 =&gt; Output:
// * * * *
// *     *
// *     *
// * * * *
// Input: n=3 =&gt; Output:
// * * *
// *   *
// * * *</code></pre>
<p><strong>Hollow area</strong> = (n-2)&sup2; for n&gt;2 (the interior not printed). For n=1 or n=2, the entire square is filled.</p>
<p>Apply the same boundary logic to triangles and diamonds for hollow variants of those patterns.</p>`
        },
        {
          q: "Print a right-angled triangle of stars with height n.",
          a: `<p>A right-angled triangle is the simplest star pattern: row i has exactly i stars, left-aligned with no leading spaces.</p>
<p>A single loop from 1 to n, printing <code>'*'.repeat(i)</code> for each row, is all you need.</p>
<p>This is usually the first pattern problem introduced since it requires only a single loop with no nesting.</p>
<pre><code>function rightTriangle(n) {
  for (let i = 1; i &lt;= n; i++) {
    console.log('*'.repeat(i));
  }
}
// Input: n=5 =&gt; Output:
// *
// **
// ***
// ****
// *****
// Input: n=3 =&gt; Output:
// *
// **
// ***</code></pre>
<p><strong>Inverted version:</strong> change the loop to <code>for (let i = n; i &gt;= 1; i--)</code> — just one character change reverses the triangle.</p>
<p>For a <strong>mirrored right triangle</strong>, pad each row: <code>' '.repeat(n-i) + '*'.repeat(i)</code>.</p>`
        },
        {
          q: "Print a zigzag pattern across n columns and 3 rows.",
          a: `<p>A zigzag pattern places a single star per column at varying row positions creating a diagonal wave effect across a 3-row grid.</p>
<p>For each column, compute <code>col % 4</code>. Stars appear in row 0 at mod 0, row 1 at mod 1, row 2 at mod 2, and row 0 again at mod 3 — creating the wave cycle.</p>
<p>This teaches modular arithmetic for generating periodic patterns without explicit wave functions.</p>
<pre><code>function zigzag(n) {
  for (let row = 0; row &lt; 3; row++) {
    let line = '';
    for (let col = 0; col &lt; n; col++) {
      let mod = col % 4;
      line += ((mod === row) || (mod === 2 && row === 0)) ? '* ' : '  ';
    }
    console.log(line);
  }
}
// Input: n=9 =&gt; Output:
// *       *       *
//   *   *   *   *
//     *       *</code></pre>
<p><strong>Period = 4 columns</strong> per complete wave cycle. The pattern repeats every 4 columns across the output.</p>
<p>Zigzag patterns appear in the classic <strong>ZigZag Conversion</strong> LeetCode problem used in string encoding algorithms.</p>`
        },
        {
          q: "Print a character pattern where row i prints letters A to the i-th letter.",
          a: `<p>In this pattern, row 0 prints 'A', row 1 prints 'A B', row 2 prints 'A B C', and so on — increasing by one letter each row.</p>
<p>Use <code>String.fromCharCode(65 + j)</code> to convert a zero-based index j into the corresponding uppercase letter (A=65 in ASCII).</p>
<p>This combines nested loop structure with ASCII character arithmetic — a foundational technique for letter-based patterns.</p>
<pre><code>function charPattern(n) {
  for (let i = 0; i &lt; n; i++) {
    let row = '';
    for (let j = 0; j &lt;= i; j++)
      row += String.fromCharCode(65 + j) + ' ';
    console.log(row.trim());
  }
}
// Input: n=4 =&gt; Output:
// A
// A B
// A B C
// A B C D
// Input: n=3 =&gt; Output:
// A
// A B
// A B C</code></pre>
<p><strong>ASCII values:</strong> A=65, Z=90. Lowercase letters start at 97. Adjust the base to print lowercase.</p>
<p><strong>Variation:</strong> Print the current row's own letter repeated row-times: row 3 = 'C C C' by using <code>i</code> as both the character index and loop count.</p>`
        },
        {
          q: "Print Pascal's Triangle for n rows.",
          a: `<p>Pascal's Triangle is a triangular array where each element equals the sum of the two elements directly above it on the previous row.</p>
<p>Build it using a 2D array: every row starts and ends with 1, and each inner element is <strong>tri[i-1][j-1] + tri[i-1][j]</strong>.</p>
<p>This is foundational in combinatorics — row k contains binomial coefficients C(k,0), C(k,1), ..., C(k,k).</p>
<pre><code>function pascals(n) {
  let tri = [];
  for (let i = 0; i &lt; n; i++) {
    tri[i] = [1];
    for (let j = 1; j &lt; i; j++)
      tri[i][j] = tri[i-1][j-1] + tri[i-1][j];
    tri[i][i] = 1;
    console.log(' '.repeat(n - i) + tri[i].join(' '));
  }
}
// Input: n=5 =&gt; Output:
//     1
//    1 1
//   1 2 1
//  1 3 3 1
// 1 4 6 4 1</code></pre>
<p><strong>Row k sum</strong> = 2<sup>k</sup> — each row's sum is double the previous row.</p>
<p>Pascal's Triangle encodes Fibonacci numbers (diagonal sums), powers of 2 (row sums), and powers of 11 (row concatenation).</p>`
        },
        {
          q: "Print a butterfly pattern of height n.",
          a: `<p>A butterfly pattern is symmetric: stars appear on both left and right sides of each row, with spaces in the middle creating a wing effect.</p>
<p>For the top half (rows 1 to n): print i stars, then 2*(n-i) spaces, then i stars. The bottom half mirrors the top upward.</p>
<p>This combines left star count, middle space count, and right star count in each row.</p>
<pre><code>function butterfly(n) {
  for (let i = 1; i &lt;= n; i++) {
    let s = '*'.repeat(i), sp = ' '.repeat(2 * (n - i));
    console.log(s + sp + s);
  }
  for (let i = n - 1; i &gt;= 1; i--) {
    let s = '*'.repeat(i), sp = ' '.repeat(2 * (n - i));
    console.log(s + sp + s);
  }
}
// Input: n=4 =&gt; Output:
// *      *
// **    **
// ***  ***
// ********
// ***  ***
// **    **
// *      *</code></pre>
<p><strong>Total rows</strong> = 2n - 1. The middle row has 2n stars (fully filled with no spaces).</p>
<p>Middle row spaces = 0 when i = n — that's when both halves touch and form the widest row.</p>`
        },
        {
          q: "Print a sandglass (hourglass) pattern of height n.",
          a: `<p>A sandglass starts with the widest row at the top (2n-1 stars), narrows to a single star in the middle, then expands back to the widest row at the bottom.</p>
<p>First half: loop from n down to 1 with increasing leading spaces and decreasing stars. Second half: loop from 2 back up to n with decreasing spaces and increasing stars.</p>
<p>The middle single star is printed once when the first loop completes at i=1.</p>
<pre><code>function sandglass(n) {
  for (let i = n; i &gt;= 1; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
  for (let i = 2; i &lt;= n; i++) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
}
// Input: n=4 =&gt; Output:
// *******
//  *****
//   ***
//    *
//   ***
//  *****
// *******</code></pre>
<p><strong>Total rows</strong> = 2n - 1. Second loop starts at i=2 to avoid repeating the middle single-star row.</p>
<p>Think of it as a diamond rotated 90° — both share the same two-loop structure.</p>`
        },
        {
          q: "Print a hollow triangle of height n.",
          a: `<p>A hollow triangle prints stars only on the three edges: the first column (left side), the hypotenuse (right side where j=i), and the base (last row).</p>
<p>For the first and last rows, print all stars. For middle rows, print a star at the start and end only, filling the interior with spaces.</p>
<p>This teaches conditional output in nested loops — printing stars only at boundary positions.</p>
<pre><code>function hollowTriangle(n) {
  for (let i = 1; i &lt;= n; i++) {
    if (i === 1) {
      console.log('*');
    } else if (i === n) {
      console.log('*'.repeat(n));
    } else {
      console.log('*' + ' '.repeat(i - 2) + '*');
    }
  }
}
// Input: n=5 =&gt; Output:
// *
// * *
// *   *
// *     *
// *****</code></pre>
<p><strong>Middle rows</strong> have exactly 2 stars with (i-2) spaces between them. No padding needed — left-aligned.</p>
<p>For a centered hollow triangle, add <code>' '.repeat(n-i)</code> at the start of each line.</p>`
        },
        {
          q: "Print a staircase (right-aligned) of height n.",
          a: `<p>A right-aligned staircase places row i's stars flush against the right margin, with (n-i) spaces on the left.</p>
<p>This is the opposite of the left-aligned right triangle — the staircase "climbs" from bottom-left to top-right.</p>
<p>Use <code>' '.repeat(n - i) + '#'.repeat(i)</code> for each row.</p>
<pre><code>function staircase(n) {
  for (let i = 1; i &lt;= n; i++) {
    console.log(' '.repeat(n - i) + '#'.repeat(i));
  }
}
// Input: n=4 =&gt; Output:
//    #
//   ##
//  ###
// ####
// Input: n=5 =&gt; Output:
//     #
//    ##
//   ###
//  ####
// #####</code></pre>
<p><strong>Row i</strong> has exactly (n-i) leading spaces and i hash symbols.</p>
<p>This is a classic HackerRank warm-up that tests understanding of <strong>right-justification with string padding</strong>.</p>`
        },
        {
          q: "Print a cross (X) pattern in an n×n grid.",
          a: `<p>An X pattern places stars on the main diagonal (where row index = column index) and the anti-diagonal (where row + col = n - 1).</p>
<p>For each cell (i, j), print a star if <code>i === j</code> (main diagonal) OR <code>i + j === n - 1</code> (anti-diagonal); otherwise print a space.</p>
<p>This pattern teaches <strong>diagonal index arithmetic</strong> in 2D grid traversal.</p>
<pre><code>function crossPattern(n) {
  for (let i = 0; i &lt; n; i++) {
    let row = '';
    for (let j = 0; j &lt; n; j++) {
      row += (i === j || i + j === n - 1) ? '* ' : '  ';
    }
    console.log(row);
  }
}
// Input: n=5 =&gt; Output:
// *       *
//   *   *
//     *
//   *   *
// *       *</code></pre>
<p><strong>Main diagonal:</strong> i === j. <strong>Anti-diagonal:</strong> i + j === n - 1. Center cell satisfies both for odd n.</p>
<p>For even n there is no single center cell — the two diagonals pass through 2n-1 distinct cells total.</p>`
        },
        {
          q: "Print a multiplication table up to n×n.",
          a: `<p>A multiplication table is an n×n grid where cell (i, j) holds the product of row i and column j.</p>
<p>Use two nested loops — outer for rows 1 to n, inner for columns 1 to n — and format each product for alignment using <code>padStart</code>.</p>
<p>Understanding multiplication table layout is a precursor to matrix operations in linear algebra and programming.</p>
<pre><code>function multiTable(n) {
  for (let i = 1; i &lt;= n; i++) {
    let row = '';
    for (let j = 1; j &lt;= n; j++) {
      row += String(i * j).padStart(4);
    }
    console.log(row);
  }
}
// Input: n=3 =&gt; Output:
//    1   2   3
//    2   4   6
//    3   6   9
// Input: n=4 =&gt; Output (row 4):    4   8  12  16</code></pre>
<p><strong><code>padStart(4)</code></strong> reserves 4 characters per number, keeping all columns aligned regardless of digit count.</p>
<p>For n=9, the max value is 81 (2 digits), so <code>padStart(3)</code> would be sufficient.</p>`
        },
        {
          q: "Print a wave pattern across columns using row positioning.",
          a: `<p>A wave pattern places exactly one star per column at a varying row height, creating a smooth up-down cycling effect across the grid.</p>
<p>For each column, compute its height position using <code>col % (2 * (rows - 1))</code>. If the phase is less than rows, use it directly; otherwise use the mirrored value.</p>
<p>This combines modular arithmetic with grid row-by-row printing.</p>
<pre><code>function wave(cols, rows) {
  let h = [];
  for (let c = 0; c &lt; cols; c++) {
    let p = c % (2 * (rows - 1));
    h.push(p &lt; rows ? p : 2 * (rows - 1) - p);
  }
  for (let r = 0; r &lt; rows; r++) {
    let line = '';
    for (let c = 0; c &lt; cols; c++)
      line += h[c] === r ? '* ' : '  ';
    console.log(line);
  }
}
// Input: cols=10, rows=3 =&gt; Output:
// *           *           *
//   *       *   *       *
//     *   *       *   *</code></pre>
<p><strong>Period</strong> = 2*(rows-1) columns per complete up-down cycle.</p>
<p>Wave patterns appear in signal processing visualization and <strong>zigzag string encoding problems</strong> in LeetCode.</p>`
        },
        {
          q: "Print a checkerboard pattern in an n×n grid.",
          a: `<p>A checkerboard alternates between two characters based on the parity of (row + column): even positions get one symbol, odd positions get another.</p>
<p>For each cell (i, j): if (i + j) is even print '#', otherwise print '.'.</p>
<p>This pattern is used as a base for many chess/board game visualizations.</p>
<pre><code>function checkerboard(n) {
  for (let i = 0; i &lt; n; i++) {
    let row = '';
    for (let j = 0; j &lt; n; j++) {
      row += (i + j) % 2 === 0 ? '# ' : '. ';
    }
    console.log(row);
  }
}
// Input: n=4 =&gt; Output:
// # . # .
// . # . #
// # . # .
// . # . #
// Input: n=3 =&gt; Output:
// # . #
// . # .
// # . #</code></pre>
<p><strong>Parity rule:</strong> (i + j) % 2 === 0 → one character; otherwise → the other.</p>
<p>A checkerboard has a symmetry property: rotating 90° produces a shifted pattern of the same type.</p>`
        },
        {
          q: "Print a number border (spiral clockwise) for an n×n matrix.",
          a: `<p>A number border fills only the boundary of an n×n matrix with sequential numbers in clockwise order, leaving the interior empty.</p>
<p>Traverse: top row L→R, right column T→B (skip corner), bottom row R→L (skip corner), left column B→T (skip corners).</p>
<p>This is the foundation of the <strong>spiral matrix</strong> problem in competitive programming and interviews.</p>
<pre><code>function numberBorder(n) {
  let mat = Array.from({length: n}, () =&gt; Array(n).fill(' '));
  let num = 1;
  for (let j = 0; j &lt; n; j++) mat[0][j] = num++;
  for (let i = 1; i &lt; n; i++) mat[i][n-1] = num++;
  for (let j = n-2; j &gt;= 0; j--) mat[n-1][j] = num++;
  for (let i = n-2; i &gt; 0; i--) mat[i][0] = num++;
  mat.forEach(row =&gt; console.log(row.map(v =&gt; String(v).padStart(3)).join('')));
}
// Input: n=4 =&gt; Output:
//   1  2  3  4
//  12        5
//  11        6
//  10  9  8  7</code></pre>
<p><strong>Border count</strong> for n×n = 4*(n-1). The perimeter formula gives the total sequential numbers to place.</p>
<p>For a full spiral (multiple rings), repeat the same process recursively for shrinking inner matrices.</p>`
        },
        {
          q: "Print an inverted right triangle (stars decreasing per row).",
          a: `<p>An inverted right triangle starts with n stars on the first row and decreases by one star per row until row n has just 1 star.</p>
<p>Simply loop from n down to 1, printing <code>'*'.repeat(i)</code> stars per row — no leading spaces needed.</p>
<p>This is the complement of the standard right triangle and reinforces downward-counting loop patterns.</p>
<pre><code>function invertedRight(n) {
  for (let i = n; i &gt;= 1; i--) {
    console.log('*'.repeat(i));
  }
}
// Input: n=5 =&gt; Output:
// *****
// ****
// ***
// **
// *
// Input: n=3 =&gt; Output:
// ***
// **
// *</code></pre>
<p><strong>Total stars</strong> = 1 + 2 + ... + n = n*(n+1)/2 (triangular number).</p>
<p>Combine with the right triangle to create a <strong>bowtie/arrow pattern</strong> pointing left when viewed sideways.</p>`
        },
        {
          q: "Print a alphabet pattern where each row repeats the row's letter.",
          a: `<p>In this pattern, row 1 has 'A' once, row 2 has 'B' twice, row 3 has 'C' three times, and so on up to n rows.</p>
<p>For row i (1-indexed): the letter is <code>String.fromCharCode(64 + i)</code> and it's repeated i times.</p>
<p>This combines ASCII arithmetic with the number-of-repetitions equaling the row index.</p>
<pre><code>function alphaRepeat(n) {
  for (let i = 1; i &lt;= n; i++) {
    let ch = String.fromCharCode(64 + i);
    console.log((ch + ' ').repeat(i).trim());
  }
}
// Input: n=4 =&gt; Output:
// A
// B B
// C C C
// D D D D
// Input: n=5 =&gt; Output (row 5): E E E E E</code></pre>
<p><strong>ASCII mapping:</strong> A=65, so <code>charCodeAt(64 + i)</code> gives A for i=1, B for i=2, etc.</p>
<p>Variation: print the <strong>same letter across all rows</strong> but repeat it row-number times: useful for histogram-style patterns.</p>`
        },
        {
          q: "Print a mirrored number triangle (decreasing from i to 1 per row).",
          a: `<p>In this reversed number triangle, row i shows the numbers from i down to 1 instead of 1 up to i.</p>
<p>For each row i, run an inner loop from i down to 1, appending each number to the row string.</p>
<p>This is the mirror of the standard number triangle and tests downward inner loop logic.</p>
<pre><code>function mirrorNumberTri(n) {
  for (let i = 1; i &lt;= n; i++) {
    let row = '';
    for (let j = i; j &gt;= 1; j--) row += j + ' ';
    console.log(row.trim());
  }
}
// Input: n=4 =&gt; Output:
// 1
// 2 1
// 3 2 1
// 4 3 2 1
// Input: n=5 =&gt; Output (row 5): 5 4 3 2 1</code></pre>
<p><strong>Inner loop direction:</strong> starts at <code>i</code> and decrements to 1 — the reverse of the standard triangle.</p>
<p>Combine this with the standard triangle to create a <strong>symmetrical diamond number pattern</strong>.</p>`
        },
        {
          q: "Print a growing/shrinking star sequence (star, then no star per row).",
          a: `<p>In this pattern, row i shows i stars increasing from the left AND a mirrored matching count from the right, with stars expanding and contracting.</p>
<p>Top half: rows 1 to n, increasing stars. Bottom half: rows n-1 down to 1, decreasing stars. Unlike the butterfly, no spaces in the middle.</p>
<p>This creates an arrowhead or chevron-like pattern pointing to the right when rotated.</p>
<pre><code>function growShrink(n) {
  for (let i = 1; i &lt;= n; i++) console.log('*'.repeat(i));
  for (let i = n - 1; i &gt;= 1; i--) console.log('*'.repeat(i));
}
// Input: n=4 =&gt; Output:
// *
// **
// ***
// ****
// ***
// **
// *</code></pre>
<p><strong>Total rows</strong> = 2n - 1. The peak row with n stars appears exactly once.</p>
<p>When printed sideways this is an arrow pointing right — a common pattern interview question.</p>`
        },
        {
          q: "Print a spiral matrix filled with numbers 1 to n×n.",
          a: `<p>A spiral matrix fills an n×n grid with sequential numbers 1 through n×n by traversing the boundary layers clockwise inward.</p>
<p>Use four boundaries (top, bottom, left, right) that shrink after each pass: fill top row L→R, right column T→B, bottom row R→L, left column B→T, then move all boundaries inward.</p>
<p>This is an interview favorite that tests boundary management and directional traversal.</p>
<pre><code>function spiralMatrix(n) {
  let mat = Array.from({length: n}, () =&gt; Array(n).fill(0));
  let top = 0, bottom = n-1, left = 0, right = n-1, num = 1;
  while (top &lt;= bottom &amp;&amp; left &lt;= right) {
    for (let i = left; i &lt;= right; i++) mat[top][i] = num++;
    top++;
    for (let i = top; i &lt;= bottom; i++) mat[i][right] = num++;
    right--;
    if (top &lt;= bottom) for (let i = right; i &gt;= left; i--) mat[bottom][i] = num++;
    bottom--;
    if (left &lt;= right) for (let i = bottom; i &gt;= top; i--) mat[i][left] = num++;
    left++;
  }
  mat.forEach(row =&gt; console.log(row.map(v =&gt; String(v).padStart(3)).join('')));
}
// Input: n=3 =&gt; Output:
//   1  2  3
//   8  9  4
//   7  6  5</code></pre>
<p><strong>Total numbers</strong> = n×n. The algorithm fills exactly 4*(n-1) cells in each outer ring.</p>
<p>Spiral matrix traversal is a classic algorithm that appears in Google, Amazon, and Microsoft interviews.</p>`
        },
        {
          q: "Print a heart shape pattern using stars.",
          a: `<p>A heart pattern can be approximated in ASCII using rows of stars: a wide top with two bumps, narrowing to a point at the bottom.</p>
<p>The top portion has two arcs (each about n/2 wide) separated by a gap, then rows expand and finally converge to a point in the lower half.</p>
<p>While the exact shape varies by implementation, this pattern tests complex conditional star placement.</p>
<pre><code>function heart(n) {
  // Top half: two bumps
  for (let i = n / 4; i &lt;= n / 2; i++) {
    let row = ' '.repeat(n / 2 - i);
    row += '*'.repeat(2 * i - 1) + '  ' + '*'.repeat(2 * i - 1);
    console.log(row);
  }
  // Bottom half: pyramid narrowing to point
  for (let i = n; i &gt;= 1; i--) {
    console.log(' '.repeat(n - i) + '*'.repeat(2 * i - 1));
  }
}
// Input: n=8 =&gt; Output (approximate heart):
//   ***  ***
//  *****  *****
// *******  *******
// ***************
//  *************
//   ***********
//    *********
//      *****
//       ***
//        *</code></pre>
<p>The exact appearance depends on terminal width and character aspect ratio. Adjust spacing for best visual result.</p>
<p>Heart patterns are popular in creative coding challenges and demonstrate mastery of <strong>multi-region conditional patterns</strong>.</p>`
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
          a: `<p>The Fibonacci sequence starts with 0 and 1, where every subsequent number is the sum of the two preceding numbers: 0, 1, 1, 2, 3, 5, 8, 13, 21...</p>
<p>Maintain two variables a and b, destructure-swap them each iteration: <code>[a, b] = [b, a + b]</code>.</p>
<p>The iterative approach is O(n) time and O(1) extra space, far superior to the naive recursive O(2ⁿ) approach.</p>
<pre><code>function fibonacci(n) {
  let a = 0, b = 1, res = [a, b];
  for (let i = 2; i &lt; n; i++) { [a, b] = [b, a + b]; res.push(b); }
  return res;
}
// Input: 6   =&gt; Output: [0,1,1,2,3,5]
// Input: 8   =&gt; Output: [0,1,1,2,3,5,8,13]
// Input: 1   =&gt; Output: [0,1] (returns first 2 by init)</code></pre>
<p><strong>Ratio property:</strong> consecutive Fibonacci numbers approach the <strong>Golden Ratio</strong> φ ≈ 1.6180339...</p>
<p>Fibonacci numbers appear in nature (flower petals, shells, leaf patterns) and in algorithm analysis.</p>`
        },
        {
          q: "Check if a number is prime.",
          a: `<p>A prime number is greater than 1 and has no divisors other than 1 and itself: 2, 3, 5, 7, 11, 13...</p>
<p>Only check divisors up to <strong>√n</strong> — if n had a factor larger than √n, its pair would be smaller than √n and already found.</p>
<p>Handle special cases: 2 is the only even prime; all other even numbers and multiples of 3 can be eliminated fast.</p>
<pre><code>function isPrime(n) {
  if (n &lt; 2) return false;
  for (let i = 2; i &lt;= Math.sqrt(n); i++)
    if (n % i === 0) return false;
  return true;
}
// Input: 2   =&gt; Output: true
// Input: 17  =&gt; Output: true
// Input: 25  =&gt; Output: false (5×5)
// Input: 1   =&gt; Output: false (not prime by definition)</code></pre>
<p><strong>Optimization:</strong> After checking 2 and 3, only test <code>6k ± 1</code> candidates to skip 2/3 of checks.</p>
<p>Time: O(√n). For large n, use <strong>Miller-Rabin primality test</strong> for probabilistic O(k log² n) checking.</p>`
        },
        {
          q: "Compute the factorial of n.",
          a: `<p>The factorial of n (written n!) is the product of all positive integers from 1 to n: n! = 1 × 2 × 3 × ... × n.</p>
<p>Base case: <strong>0! = 1</strong> (by convention) and <strong>1! = 1</strong>. For negative n, factorial is undefined.</p>
<p>Both recursive and iterative implementations are common; iterative avoids stack overflow for large n.</p>
<pre><code>function factorial(n) {
  if (n &lt;= 1) return 1;
  return n * factorial(n - 1);
}
// Iterative version:
function factIter(n) {
  let result = 1;
  for (let i = 2; i &lt;= n; i++) result *= i;
  return result;
}
// Input: 0   =&gt; Output: 1
// Input: 5   =&gt; Output: 120  (1×2×3×4×5)
// Input: 10  =&gt; Output: 3628800</code></pre>
<p><strong>Growth rate:</strong> factorial grows faster than exponential. 20! = 2,432,902,008,176,640,000 — needs BigInt for n&gt;18.</p>
<p>Factorial appears in permutations (n!), combinations (n!/k!(n-k)!), and Taylor series expansions.</p>`
        },
        {
          q: "Find the GCD of two numbers.",
          a: `<p>The Greatest Common Divisor (GCD) is the largest number that divides both a and b without remainder. GCD(12,8) = 4.</p>
<p>The <strong>Euclidean Algorithm</strong>: replace (a, b) with (b, a % b) repeatedly until b = 0. The remaining value in a is the GCD.</p>
<p>This runs in O(log(min(a,b))) time — one of the oldest and most efficient algorithms, dating back to 300 BCE.</p>
<pre><code>function gcd(a, b) {
  while (b) { [a, b] = [b, a % b]; }
  return a;
}
// Recursive version:
function gcdRec(a, b) { return b === 0 ? a : gcdRec(b, a % b); }
// Input: 12, 8    =&gt; Output: 4
// Input: 48, 18   =&gt; Output: 6
// Input: 100, 75  =&gt; Output: 25</code></pre>
<p><strong>GCD property:</strong> GCD(a, b) = GCD(b, a%b). Proof: any divisor of a and b also divides a%b.</p>
<p>GCD is used in fraction simplification, cryptography (RSA), and scheduling problems.</p>`
        },
        {
          q: "Check if a number is an Armstrong number.",
          a: `<p>An Armstrong (narcissistic) number equals the sum of its digits each raised to the power of the total number of digits.</p>
<p>For 153: 3 digits, so check 1³ + 5³ + 3³ = 1 + 125 + 27 = 153 ✓. Each digit is raised to the SAME power (total digits).</p>
<p>Convert n to string to count digits and extract each digit easily using split and reduce.</p>
<pre><code>function isArmstrong(n) {
  let digits = String(n).split('');
  let len = digits.length;
  let sum = digits.reduce((s, d) =&gt; s + Math.pow(+d, len), 0);
  return sum === n;
}
// Input: 153  =&gt; Output: true  (1³+5³+3³=153)
// Input: 370  =&gt; Output: true  (3³+7³+0³=370)
// Input: 9474 =&gt; Output: true  (9⁴+4⁴+7⁴+4⁴=9474)
// Input: 123  =&gt; Output: false</code></pre>
<p><strong>3-digit Armstrong numbers:</strong> 153, 370, 371, 407. Single digits (0-9) are all Armstrong numbers.</p>
<p>There are <strong>finitely many</strong> Armstrong numbers in base 10 — 89 total, the largest is 115132219018763992565095597973971522401.</p>`
        },
        {
          q: "Check if a number is a palindrome.",
          a: `<p>A palindromic number reads the same forwards and backwards: 121, 1331, 12321 are examples. Negative numbers are not palindromes.</p>
<p>The simplest approach: convert to string and compare with its reverse. Alternatively, reverse mathematically without string conversion.</p>
<p>The mathematical reversal is more memory-efficient and handles leading zeros naturally (e.g., 100 reversed = 001 = 1 ≠ 100).</p>
<pre><code>function isPalindromeNum(n) {
  if (n &lt; 0) return false;
  let str = String(n);
  return str === str.split('').reverse().join('');
}
// Mathematical reversal:
function isPalindromeNumMath(n) {
  if (n &lt; 0) return false;
  let original = n, rev = 0;
  while (n &gt; 0) { rev = rev * 10 + n % 10; n = Math.floor(n / 10); }
  return rev === original;
}
// Input: 121   =&gt; Output: true
// Input: 1221  =&gt; Output: true
// Input: 123   =&gt; Output: false</code></pre>
<p><strong>Trick:</strong> Only need to reverse half the number and compare with the other half for O(log n / 2) time.</p>
<p>All single-digit numbers are palindromes. Numbers ending in 0 (except 0 itself) are never palindromes.</p>`
        },
        {
          q: "Find the sum of digits of a number.",
          a: `<p>The digit sum adds all individual digits together: digits of 9537 → 9+5+3+7 = 24.</p>
<p>The iterative approach extracts each digit using <code>n % 10</code> and removes it using <code>Math.floor(n / 10)</code>.</p>
<p>For negative numbers, use <code>Math.abs(n)</code> first since negative sign is not a digit.</p>
<pre><code>function sumDigits(n) {
  let sum = 0;
  n = Math.abs(n);
  while (n &gt; 0) { sum += n % 10; n = Math.floor(n / 10); }
  return sum;
}
// String version: +d converts '5' =&gt; 5
function sumDigitsStr(n) {
  return String(Math.abs(n)).split('').reduce((s, d) =&gt; s + +d, 0);
}
// Input: 9537  =&gt; Output: 24  (9+5+3+7)
// Input: 0     =&gt; Output: 0
// Input: -123  =&gt; Output: 6   (1+2+3)</code></pre>
<p><strong>Divisibility rule:</strong> a number is divisible by 9 if and only if its digit sum is divisible by 9.</p>
<p>Repeated digit summing until single digit = <strong>digital root</strong>, which can be computed in O(1) using modulo 9.</p>`
        },
        {
          q: "Reverse an integer.",
          a: `<p>Reversing an integer extracts digits from the right end one by one and builds the reversed number from left to right.</p>
<p>Use <code>n % 10</code> to get the last digit, multiply rev by 10 and add it, then remove the last digit: <code>n = Math.floor(n / 10)</code>.</p>
<p>Preserve the sign separately with <code>Math.sign(n)</code> and work with absolute value to simplify the loop.</p>
<pre><code>function reverseInt(n) {
  let sign = Math.sign(n), rev = 0;
  n = Math.abs(n);
  while (n &gt; 0) { rev = rev * 10 + n % 10; n = Math.floor(n / 10); }
  return rev * sign;
}
// Input: 1234   =&gt; Output: 4321
// Input: -567   =&gt; Output: -765
// Input: 1000   =&gt; Output: 1 (leading zeros dropped)
// Input: 0      =&gt; Output: 0</code></pre>
<p><strong>Overflow check:</strong> If reversed &gt; 2³¹-1 or &lt; -2³¹, return 0 (important for 32-bit integer constraints in LeetCode).</p>
<p>Numbers ending in 0 lose trailing zeros when reversed: 100 → 1. This is expected behavior.</p>`
        },
        {
          q: "Check if a number is a perfect number.",
          a: `<p>A perfect number equals the sum of all its <strong>proper divisors</strong> (all divisors except itself). The first perfect number is 6 = 1+2+3.</p>
<p>Efficiently find all divisors up to √n: for each divisor i, add both i and n/i to the sum (handling the case when i = √n to avoid double-counting).</p>
<p>Start the sum at 1 (which is always a proper divisor of any n ≥ 2) and check divisors from 2 to √n.</p>
<pre><code>function isPerfect(n) {
  if (n &lt; 2) return false;
  let sum = 1;
  for (let i = 2; i &lt;= Math.sqrt(n); i++)
    if (n % i === 0) sum += i + (i !== n/i ? n/i : 0);
  return sum === n;
}
// Input: 1     =&gt; Output: false
// Input: 6     =&gt; Output: true  (1+2+3=6)
// Input: 28    =&gt; Output: true  (1+2+4+7+14=28)
// Input: 496   =&gt; Output: true  (sum of divisors = 496)</code></pre>
<p><strong>All known perfect numbers</strong>: 6, 28, 496, 8128, 33550336, 8589869056... (extremely rare).</p>
<p>All even perfect numbers have the form 2<sup>p-1</sup>(2<sup>p</sup>-1) where (2<sup>p</sup>-1) is a Mersenne prime. No odd perfect number has ever been found.</p>`
        },
        {
          q: "Check if a number is a power of two.",
          a: `<p>A power of two in binary has exactly <strong>one bit set</strong> to 1 (e.g., 1=0001, 2=0010, 4=0100, 8=1000).</p>
<p>The bitwise trick: <code>n &amp; (n - 1)</code> turns off the lowest set bit. If the result is 0, exactly one bit was set, meaning n is a power of two.</p>
<p>Also check n &gt; 0 since the trick gives false positive for n=0.</p>
<pre><code>function isPowerOfTwo(n) {
  return n &gt; 0 &amp;&amp; (n &amp; (n - 1)) === 0;
}
// Input: 1   =&gt; Output: true  (2^0)
// Input: 16  =&gt; Output: true  (2^4 = 10000 in binary)
// Input: 18  =&gt; Output: false (10010 — two bits set)</code></pre>
<p><strong>Binary of powers of 2:</strong> 1, 10, 100, 1000 — always a single 1 followed by zeros.</p>
<p>This trick also checks for powers of any number if generalized with repeated division.</p>`
        },
        {
          q: "Find the LCM of two numbers.",
          a: `<p>The Least Common Multiple (LCM) of two numbers is the smallest positive integer divisible by both.</p>
<p>The efficient formula uses GCD: <strong>LCM(a, b) = (a * b) / GCD(a, b)</strong>. First find GCD using the Euclidean algorithm, then apply this formula.</p>
<p>Never compute LCM by brute-force iteration — always use the GCD-based formula for efficiency.</p>
<pre><code>function gcd(a, b) { return b === 0 ? a : gcd(b, a % b); }
function lcm(a, b) { return (a * b) / gcd(a, b); }
// Input: a=4, b=6    =&gt; Output: 12 (4*6/2=12)
// Input: a=12, b=18  =&gt; Output: 36 (12*18/6=36)
// Input: a=7, b=5    =&gt; Output: 35 (coprime: LCM = product)</code></pre>
<p><strong>LCM(a,b) * GCD(a,b) = a * b</strong> — always true, useful for verification.</p>
<p>For multiple numbers: LCM(a,b,c) = LCM(LCM(a,b), c). Reduce using the pair formula repeatedly.</p>`
        },
        {
          q: "Find the digital root of a number.",
          a: `<p>The digital root is obtained by repeatedly summing digits until a single digit remains. For 493 → 4+9+3=16 → 1+6=7, so digital root = 7.</p>
<p>The mathematical shortcut: digital root = 1 + (n - 1) % 9, handling edge case n=0.</p>
<p>This is useful in divisibility checks and cast out nines verification.</p>
<pre><code>function digitalRoot(n) {
  if (n === 0) return 0;
  return 1 + (n - 1) % 9;
}
// Iterative version:
function digitalRootIter(n) {
  while (n &gt;= 10) {
    n = String(n).split('').reduce((s, d) =&gt; s + +d, 0);
  }
  return n;
}
// Input: 493  =&gt; Output: 7  (4+9+3=16 → 1+6=7)
// Input: 9    =&gt; Output: 9
// Input: 0    =&gt; Output: 0</code></pre>
<p><strong>Pattern:</strong> digital root of n = n % 9 for n&gt;0, with 9 instead of 0 when n is divisible by 9.</p>
<p>Digital roots are used in <strong>checksum verification</strong> for credit card numbers and ISBN codes.</p>`
        },
        {
          q: "Check if a number is a Harshad (Niven) number.",
          a: `<p>A Harshad number is divisible by the sum of its own digits. For example, 18 is Harshad because 1+8=9 and 18%9=0.</p>
<p>Compute the digit sum, then check if n % digitSum === 0.</p>
<p>Harshad means "joy-giving" in Sanskrit — these numbers have a special divisibility property.</p>
<pre><code>function isHarshad(n) {
  let sum = String(n).split('').reduce((s, d) =&gt; s + +d, 0);
  return n % sum === 0;
}
// Input: 18  =&gt; Output: true  (1+8=9, 18%9=0)
// Input: 21  =&gt; Output: true  (2+1=3, 21%3=0)
// Input: 19  =&gt; Output: false (1+9=10, 19%10=9)</code></pre>
<p><strong>All single digits</strong> (1-9) are Harshad numbers since digit sum = n and n%n = 0.</p>
<p>Related: a <strong>super-Harshad</strong> number remains Harshad when its digit sum itself is also Harshad.</p>`
        },
        {
          q: "Determine if a number is a strong number.",
          a: `<p>A strong number equals the sum of the factorials of its digits. For example, 145 = 1! + 4! + 5! = 1 + 24 + 120 = 145.</p>
<p>Break the number into digits, compute factorial of each, and check if their sum equals the original number.</p>
<p>Precomputing factorials 0! to 9! in an array speeds up the checking for large inputs.</p>
<pre><code>function isStrong(n) {
  const fact = [1, 1, 2, 6, 24, 120, 720, 5040, 40320, 362880];
  let sum = String(n).split('').reduce((s, d) =&gt; s + fact[+d], 0);
  return sum === n;
}
// Input: 1   =&gt; Output: true  (1! = 1)
// Input: 2   =&gt; Output: true  (2! = 2)
// Input: 145 =&gt; Output: true  (1!+4!+5! = 1+24+120 = 145)
// Input: 123 =&gt; Output: false (1!+2!+3! = 1+2+6 = 9 ≠ 123)</code></pre>
<p>There are <strong>only 4 strong numbers</strong>: 1, 2, 145, and 40585.</p>
<p>Also called <strong>factorions</strong>. Factorial sum for 10+ digit numbers always stays small, so all factorions are known.</p>`
        },
        {
          q: "Check if a number is a perfect square.",
          a: `<p>A perfect square is a number that is the square of an integer: 1, 4, 9, 16, 25, etc.</p>
<p>Compute the integer square root via Math.sqrt, round it, and check if the square equals n. Use <code>Math.round</code> to avoid floating point errors.</p>
<p>Floating point check: <code>Math.sqrt(n) % 1 === 0</code> can fail for large numbers due to precision loss.</p>
<pre><code>function isPerfectSquare(n) {
  if (n &lt; 0) return false;
  let sqrt = Math.round(Math.sqrt(n));
  return sqrt * sqrt === n;
}
// Input: 25  =&gt; Output: true  (√25 = 5)
// Input: 36  =&gt; Output: true  (√36 = 6)
// Input: 14  =&gt; Output: false (√14 ≈ 3.74)
// Input: 0   =&gt; Output: true  (0 = 0²)</code></pre>
<p><strong>Safer check:</strong> compute isqrt via binary search for very large numbers to avoid floating-point issues.</p>
<p>Perfect squares have an <strong>odd number of divisors</strong> — this helps verify them without computation.</p>`
        },
        {
          q: "Check if a number is a triangular number.",
          a: `<p>Triangular numbers are formed by the formula <strong>n*(n+1)/2</strong>: 1, 3, 6, 10, 15, 21, 28...</p>
<p>To check if x is triangular, solve n*(n+1)/2 = x → 8x+1 must be a perfect square. If √(8x+1) is an integer, x is triangular.</p>
<p>This mathematical trick avoids iteration and runs in O(1) time.</p>
<pre><code>function isTriangular(x) {
  let disc = 8 * x + 1;
  let sqrt = Math.round(Math.sqrt(disc));
  return sqrt * sqrt === disc;
}
// Input: 1   =&gt; Output: true  (T1 = 1)
// Input: 10  =&gt; Output: true  (T4 = 10 = 1+2+3+4)
// Input: 21  =&gt; Output: true  (T6 = 21)
// Input: 5   =&gt; Output: false</code></pre>
<p><strong>Formula:</strong> n-th triangular number = 1+2+3+...+n = n*(n+1)/2.</p>
<p>Triangular numbers appear in combinatorics as the count of handshakes or pair combinations: C(n+1, 2).</p>`
        },
        {
          q: "Find the nth prime number.",
          a: `<p>The nth prime is the n-th number in the sequence 2, 3, 5, 7, 11, 13, 17...</p>
<p>Iterate numbers starting from 2, check each for primality using trial division up to √candidate, count primes until you reach the nth one.</p>
<p>For small n use the simple approach; for large n use the Sieve of Eratosthenes with an estimated upper bound.</p>
<pre><code>function nthPrime(n) {
  let count = 0, num = 1;
  while (count &lt; n) {
    num++;
    let isPrime = true;
    for (let i = 2; i &lt;= Math.sqrt(num); i++) {
      if (num % i === 0) { isPrime = false; break; }
    }
    if (isPrime) count++;
  }
  return num;
}
// Input: 1   =&gt; Output: 2
// Input: 5   =&gt; Output: 11
// Input: 10  =&gt; Output: 29</code></pre>
<p><strong>Time:</strong> O(n * √n) for simple approach. Use Sieve for O(n log log n) when n is large.</p>
<p>The prime counting function π(n) ≈ n/ln(n) — so the nth prime is approximately n*ln(n).</p>`
        },
        {
          q: "Generate a Collatz sequence starting from n.",
          a: `<p>The Collatz conjecture: start with any positive integer. If even → divide by 2; if odd → multiply by 3 and add 1. The sequence always eventually reaches 1.</p>
<p>Generate the sequence by applying the rule until n = 1. The conjecture has never been proven but no counterexample has been found.</p>
<p>The Collatz sequence is a famous unsolved problem — it's easy to understand but mathematically deep.</p>
<pre><code>function collatz(n) {
  let seq = [n];
  while (n !== 1) {
    n = n % 2 === 0 ? n / 2 : 3 * n + 1;
    seq.push(n);
  }
  return seq;
}
// Input: 6   =&gt; Output: [6,3,10,5,16,8,4,2,1]  (length=9)
// Input: 27  =&gt; Output: length 112 (longest for small numbers)
// Input: 1   =&gt; Output: [1]</code></pre>
<p><strong>Conjecture:</strong> every positive integer eventually reaches 1. Verified up to 2<sup>68</sup> but unproven.</p>
<p>For interview purposes, the key test cases are n=1 (already done) and very large n with long sequences.</p>`
        },
        {
          q: "Count the number of digits in an integer.",
          a: `<p>Counting digits in a number n can be done by repeatedly dividing by 10 and counting iterations, or using the mathematical formula <code>Math.floor(Math.log10(n)) + 1</code>.</p>
<p>The string conversion approach <code>String(Math.abs(n)).length</code> is the simplest but slightly slower due to allocation.</p>
<p>Handle edge case: n = 0 has 1 digit; negative numbers have the same digit count as their absolute value.</p>
<pre><code>function countDigits(n) {
  if (n === 0) return 1;
  n = Math.abs(n);
  let count = 0;
  while (n &gt; 0) { n = Math.floor(n / 10); count++; }
  return count;
}
// Math-based (O(1)):
function countDigitsMath(n) {
  return n === 0 ? 1 : Math.floor(Math.log10(Math.abs(n))) + 1;
}
// Input: 0     =&gt; Output: 1
// Input: 12345 =&gt; Output: 5
// Input: -987  =&gt; Output: 3</code></pre>
<p><strong>Math formula:</strong> ⌊log₁₀(n)⌋ + 1. This runs in O(1) vs O(log n) for the iterative approach.</p>
<p>The digit count determines padding width for formatted output in multiplication tables and matrices.</p>`
        },
        {
          q: "Check if a number is an automorphic number.",
          a: `<p>An automorphic number is one whose square ends with the number itself. For example, 5² = 25 (ends with 5), 6² = 36 (ends with 6), 76² = 5776 (ends with 76).</p>
<p>Square n and check if the last digits of n² match n — use modulo by 10^(number of digits in n).</p>
<p>Also called <strong>trimorphic numbers</strong> or automorphs, these have applications in modular arithmetic.</p>
<pre><code>function isAutomorphic(n) {
  let square = n * n;
  let digits = String(n).length;
  return square % Math.pow(10, digits) === n;
}
// Input: 5    =&gt; Output: true  (5²=25, 25%10=5)
// Input: 6    =&gt; Output: true  (6²=36, 36%10=6)
// Input: 25   =&gt; Output: true  (25²=625, 625%100=25)
// Input: 76   =&gt; Output: true  (76²=5776, 5776%100=76)
// Input: 7    =&gt; Output: false (7²=49, 49%10=9≠7)</code></pre>
<p>The automorphic property is preserved under squaring: 5→25→625→390625 — all end in 625 (automorphic).</p>
<p><strong>Known automorphs</strong> modulo 10^k: ...0, 1, 5, 6, 25, 76, 376, 625, 9376, 90625...</p>`
        },
        {
          q: "Find the sum of all prime numbers up to n (prime summation).",
          a: `<p>To find the sum of all primes ≤ n, first generate all primes using the Sieve of Eratosthenes, then sum them.</p>
<p>The sieve marks composites efficiently: start by marking multiples of each prime from 2 upward, skipping those already marked.</p>
<p>Combining the sieve with reduction is O(n log log n) — optimal for prime summation up to large n.</p>
<pre><code>function sumPrimes(n) {
  let sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i &lt;= n; i++)
    if (sieve[i]) for (let j = i*i; j &lt;= n; j += i) sieve[j] = false;
  return sieve.reduce((sum, isPrime, num) =&gt; isPrime ? sum + num : sum, 0);
}
// Input: 10  =&gt; Output: 17  (2+3+5+7=17)
// Input: 20  =&gt; Output: 77  (2+3+5+7+11+13+17+19=77)
// Input: 5   =&gt; Output: 10  (2+3+5=10)</code></pre>
<p><strong>Sieve time:</strong> O(n log log n). <strong>Space:</strong> O(n) for the boolean array.</p>
<p>The sum of primes up to n grows approximately as n²/(2 ln n) by the prime counting function.</p>`
        },
        {
          q: "Check if a number is a Disarium number.",
          a: `<p>A Disarium number equals the sum of its digits each raised to the power of their position (1-indexed from left). For example, 89 = 8¹ + 9² = 8 + 81 = 89.</p>
<p>Convert the number to a string to easily access each digit and its index, then compute the positional power sum.</p>
<p>This is similar to Armstrong numbers but uses POSITION as the exponent instead of the total digit count.</p>
<pre><code>function isDisarium(n) {
  let str = String(n);
  let sum = str.split('').reduce((s, d, i) =&gt; s + Math.pow(+d, i + 1), 0);
  return sum === n;
}
// Input: 89   =&gt; Output: true  (8^1 + 9^2 = 8+81 = 89)
// Input: 175  =&gt; Output: true  (1^1 + 7^2 + 5^3 = 1+49+125 = 175)
// Input: 135  =&gt; Output: true  (1^1 + 3^2 + 5^3 = 1+9+125 = 135)
// Input: 123  =&gt; Output: false (1+9+27 = 37 ≠ 123)</code></pre>
<p><strong>Known Disarium numbers:</strong> 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 89, 135, 175, 518, 598, 1306.</p>
<p>The key difference from Armstrong: Disarium uses <strong>index as exponent</strong>; Armstrong uses <strong>total digit count</strong>.</p>`
        },
        {
          q: "Find twin primes up to n.",
          a: `<p>Twin primes are pairs of prime numbers that differ by exactly 2: (3,5), (5,7), (11,13), (17,19), (29,31), etc.</p>
<p>Generate all primes up to n using the sieve, then scan consecutive primes checking if their difference is 2.</p>
<p>Twin prime conjecture states there are infinitely many twin prime pairs, but this remains unproven.</p>
<pre><code>function twinPrimes(n) {
  let sieve = new Array(n + 1).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i &lt;= n; i++)
    if (sieve[i]) for (let j = i*i; j &lt;= n; j += i) sieve[j] = false;
  let pairs = [];
  for (let i = 2; i &lt; n; i++)
    if (sieve[i] &amp;&amp; sieve[i + 2]) pairs.push([i, i + 2]);
  return pairs;
}
// Input: 20  =&gt; Output: [[3,5],[5,7],[11,13],[17,19]]
// Input: 30  =&gt; Output: [[3,5],[5,7],[11,13],[17,19],[29,31]]</code></pre>
<p><strong>Largest known</strong> twin prime (2024): 2996863034895 × 2<sup>1290000</sup> ± 1, with 388,342 digits each.</p>
<p>All twin primes greater than 3 are of the form (6n-1, 6n+1) — useful for optimizing the search.</p>`
        },
        {
          q: "Generate numbers in a given range that are abundant, deficient, or perfect.",
          a: `<p>Based on sum of proper divisors (all divisors excluding n itself): a number is <strong>abundant</strong> if divisor sum &gt; n, <strong>deficient</strong> if &lt; n, or <strong>perfect</strong> if = n.</p>
<p>For each number, compute the sum of all divisors up to √n using paired divisor logic (i and n/i), then classify.</p>
<p>This is a great warmup problem for proving correct divisor enumeration logic.</p>
<pre><code>function classify(n) {
  let sum = 1;
  for (let i = 2; i &lt;= Math.sqrt(n); i++)
    if (n % i === 0) sum += i + (i !== n/i ? n/i : 0);
  if (sum === n) return 'perfect';
  return sum &gt; n ? 'abundant' : 'deficient';
}
// Input: 6   =&gt; Output: "perfect"   (1+2+3=6)
// Input: 12  =&gt; Output: "abundant"  (1+2+3+4+6=16 &gt; 12)
// Input: 8   =&gt; Output: "deficient" (1+2+4=7 &lt; 8)</code></pre>
<p>The only known <strong>perfect numbers</strong> less than 10<sup>20</sup> are: 6, 28, 496, 8128, 33550336...</p>
<p>All even perfect numbers follow the Euler-Euclid theorem: P = 2<sup>p-1</sup>(2<sup>p</sup>-1) where (2<sup>p</sup>-1) is a Mersenne prime.</p>`
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
          a: `<p>Given an array containing n-1 elements from 1 to n with one missing, find the missing number.</p>
<p>The expected sum of 1 to n is <strong>n*(n+1)/2</strong>. Subtract the actual array sum to find the gap.</p>
<p>This mathematical trick runs in O(n) time and O(1) space — no need for sorting or a Set.</p>
<pre><code>function missingNumber(arr, n) {
  let expected = n * (n + 1) / 2;
  let actual = arr.reduce((a, b) =&gt; a + b, 0);
  return expected - actual;
}
// Input: [1,2,4,5], n=5   =&gt; Output: 3  (15-12=3)
// Input: [3,1,2], n=4     =&gt; Output: 4  (10-6=4)
// Input: [1], n=2          =&gt; Output: 2</code></pre>
<p><strong>XOR alternative:</strong> XOR all numbers 1..n with all array elements — duplicates cancel, leaving the missing number.</p>
<p>XOR approach avoids overflow risk for very large n since addition could overflow a 32-bit integer.</p>`
        },
        {
          q: "Rotate an array to the right by k positions.",
          a: `<p>Rotating an array right by k moves the last k elements to the front while shifting the rest to the right.</p>
<p>Use slice: take <code>arr.slice(-k)</code> for the tail, then <code>arr.slice(0, -k)</code> for the head. Use <code>k % arr.length</code> to handle rotations larger than the array size.</p>
<p>The spread approach creates a new array — for in-place rotation, use the <strong>reverse-reverse-reverse trick</strong> in O(1) extra space.</p>
<pre><code>function rotateRight(arr, k) {
  k = k % arr.length;
  if (k === 0) return arr;
  return [...arr.slice(-k), ...arr.slice(0, -k)];
}
// Input: [1,2,3,4,5], k=2   =&gt; Output: [4,5,1,2,3]
// Input: [1,2,3], k=1        =&gt; Output: [3,1,2]
// Input: [1,2,3], k=4        =&gt; Output: [3,1,2] (k%3=1)</code></pre>
<p><strong>In-place O(1) space:</strong> reverse all → reverse first k → reverse remaining (3 reverse operations).</p>
<p>Always apply <code>k = k % n</code> first — rotating by n is a no-op, and k can be larger than the array.</p>`
        },
        {
          q: "Find the first duplicate in an array.",
          a: `<p>A duplicate is an element that appears more than once. The first duplicate is the one whose second occurrence comes earliest in the array.</p>
<p>Use a Set to track seen values. The first time you encounter a value already in the Set, that's the first duplicate.</p>
<p>This O(n) approach with O(n) space is better than the O(n²) nested loop comparison approach.</p>
<pre><code>function firstDuplicate(arr) {
  let seen = new Set();
  for (let val of arr) {
    if (seen.has(val)) return val;
    seen.add(val);
  }
  return -1;
}
// Input: [2,1,3,5,3,2]   =&gt; Output: 3  (first repeat)
// Input: [1,2,3,4]        =&gt; Output: -1 (no duplicate)
// Input: [1,1,2,3]        =&gt; Output: 1</code></pre>
<p><strong>Note:</strong> "First duplicate" means the element whose 2nd occurrence comes first — not the smallest duplicate.</p>
<p>If values are in range [1..n], use the array itself as a hash by negating visited indices in O(1) space.</p>`
        },
        {
          q: "Two Sum: find indices of two numbers that add up to a target.",
          a: `<p>Two Sum is a classic hash map problem: for each number, check if its complement (target - num) has already been seen.</p>
<p>Store each element in a Map with its index as value. When the complement is found in the Map, return both indices immediately.</p>
<p>This O(n) hash map approach is far better than the O(n²) brute force of checking all pairs.</p>
<pre><code>function twoSum(nums, target) {
  let map = new Map();
  for (let i = 0; i &lt; nums.length; i++) {
    let comp = target - nums[i];
    if (map.has(comp)) return [map.get(comp), i];
    map.set(nums[i], i);
  }
  return null;
}
// Input: [2,7,11,15], target=9   =&gt; Output: [0,1] (2+7=9)
// Input: [3,2,4], target=6       =&gt; Output: [1,2] (2+4=6)
// Input: [3,3], target=6         =&gt; Output: [0,1]</code></pre>
<p><strong>Time:</strong> O(n). <strong>Space:</strong> O(n) for the Map. Each element is processed exactly once.</p>
<p>The Map stores values as keys and indices as values — reversed from the array structure for fast complement lookup.</p>`
        },
        {
          q: "Find the maximum subarray sum (Kadane's Algorithm).",
          a: `<p>Kadane's Algorithm finds the contiguous subarray with the largest sum in O(n) time and O(1) space.</p>
<p>Track two values: <code>cur</code> (current running sum) and <code>max</code> (best seen so far). At each element: extend or restart the current subarray, then update max.</p>
<p>The key insight: if the current sum becomes negative, it's always better to start fresh from the next element.</p>
<pre><code>function maxSubarray(arr) {
  let max = arr[0], cur = arr[0];
  for (let i = 1; i &lt; arr.length; i++) {
    cur = Math.max(arr[i], cur + arr[i]);
    max = Math.max(max, cur);
  }
  return max;
}
// Input: [-2,1,-3,4,-1,2,1,-5,4]  =&gt; Output: 6  ([4,-1,2,1])
// Input: [1]                       =&gt; Output: 1
// Input: [-1,-2,-3]                =&gt; Output: -1 (all negative)</code></pre>
<p><strong>Time:</strong> O(n). <strong>Space:</strong> O(1). Handles all-negative arrays correctly (returns the least negative element).</p>
<p>To also return the actual subarray, track start/end indices when cur resets and when max updates.</p>`
        },
        {
          q: "Merge two sorted arrays into one sorted array.",
          a: `<p>Given two sorted arrays, merge them into a single sorted array without using built-in sort on the combined array.</p>
<p>Use two pointers starting at the beginning of each array. Compare elements at both pointers, push the smaller one into the result, and advance that pointer.</p>
<p>After the while loop, one array may have remaining elements — append them directly since they're already sorted.</p>
<pre><code>function mergeSorted(a, b) {
  let res = [], i = 0, j = 0;
  while (i &lt; a.length &amp;&amp; j &lt; b.length)
    res.push(a[i] &lt; b[j] ? a[i++] : b[j++]);
  return [...res, ...a.slice(i), ...b.slice(j)];
}
// Input: [1,3,5], [2,4,6]   =&gt; Output: [1,2,3,4,5,6]
// Input: [1,2], [3,4]        =&gt; Output: [1,2,3,4]
// Input: [], [1,2,3]         =&gt; Output: [1,2,3]</code></pre>
<p><strong>Time:</strong> O(n + m). <strong>Space:</strong> O(n + m) for the result array.</p>
<p>This two-pointer merge is the core subroutine of <strong>merge sort</strong> and external sorting algorithms.</p>`
        },
        {
          q: "Move all zeros in an array to the end while maintaining order.",
          a: `<p>Rearrange the array so all non-zero elements appear first (in original order) and all zeros are pushed to the end.</p>
<p>Use a write pointer <code>pos</code>: copy each non-zero element to position pos and advance pos. Then fill from pos to the end with zeros.</p>
<p>This in-place approach is O(n) time and O(1) space — no extra array needed.</p>
<pre><code>function moveZeros(arr) {
  let pos = 0;
  for (let i = 0; i &lt; arr.length; i++)
    if (arr[i] !== 0) arr[pos++] = arr[i];
  while (pos &lt; arr.length) arr[pos++] = 0;
  return arr;
}
// Input: [0,1,0,3,12]   =&gt; Output: [1,3,12,0,0]
// Input: [1,0,0,2,3]    =&gt; Output: [1,2,3,0,0]
// Input: [0,0,0]         =&gt; Output: [0,0,0]</code></pre>
<p><strong>Two-pointer variation:</strong> swap arr[i] with arr[pos] to avoid overwriting zeros — preserves relative order too.</p>
<p>The relative order of <strong>non-zero elements is preserved</strong> — this distinguishes it from simple partitioning.</p>`
        },
        {
          q: "Find the second largest element in an array.",
          a: `<p>Find the second largest distinct element in a single pass by tracking two maximums simultaneously.</p>
<p>Maintain <code>first</code> and <code>second</code> maximums. When a new element exceeds first, update both. When it's between first and second (and distinct from first), update only second.</p>
<p>A single traversal is optimal — no sorting or partial sort needed.</p>
<pre><code>function secondLargest(arr) {
  let first = -Infinity, second = -Infinity;
  for (let val of arr) {
    if (val &gt; first) { second = first; first = val; }
    else if (val &gt; second &amp;&amp; val !== first) second = val;
  }
  return second === -Infinity ? null : second;
}
// Input: [3,1,4,1,5,9,2,6]   =&gt; Output: 6
// Input: [5,5,5]               =&gt; Output: null (all same)
// Input: [1,2]                 =&gt; Output: 1</code></pre>
<p><strong>Time:</strong> O(n). <strong>Space:</strong> O(1). Check <code>val !== first</code> to ensure the second largest is genuinely distinct.</p>
<p>Variation: if duplicates count separately ("second occurrence largest"), remove the <code>val !== first</code> check.</p>`
        },
        {
          q: "Count the frequency of each element in an array.",
          a: `<p>Frequency counting records how many times each unique value appears in an array — a fundamental technique for solving many array problems.</p>
<p>Use a plain object or a Map: for each element, check if a count already exists and increment it, or initialize it to 1.</p>
<p>This is the foundation for problems like finding the majority element, top-k frequent elements, and anagram checking.</p>
<pre><code>function frequency(arr) {
  let map = {};
  for (let val of arr) map[val] = (map[val] || 0) + 1;
  return map;
}
// Using Map for non-string keys:
function frequencyMap(arr) {
  let map = new Map();
  for (let val of arr) map.set(val, (map.get(val) || 0) + 1);
  return map;
}
// Input: [1,2,2,3,3,3]   =&gt; Output: {1:1, 2:2, 3:3}
// Input: ['a','b','a']   =&gt; Output: {a:2, b:1}</code></pre>
<p><strong>Time:</strong> O(n). <strong>Space:</strong> O(k) where k is the number of unique values.</p>
<p>The <code>(map[val] || 0) + 1</code> idiom handles the first occurrence cleanly without an if-else check.</p>`
        },
        {
          q: "Find the intersection of two arrays.",
          a: `<p>The intersection of two arrays contains elements that appear in both — without duplicates in the result.</p>
<p>Convert the first array to a Set for O(1) lookup, then filter the second array keeping only values present in the Set.</p>
<p>Wrap the result in another Set to remove duplicates that might appear multiple times in array b.</p>
<pre><code>function intersection(a, b) {
  let setA = new Set(a);
  return [...new Set(b.filter(v =&gt; setA.has(v)))];
}
// Input: [1,2,3], [2,3,4]     =&gt; Output: [2,3]
// Input: [1,2,2,3], [2,2,4]   =&gt; Output: [2]  (deduped)
// Input: [1,2], [3,4]          =&gt; Output: []</code></pre>
<p><strong>Time:</strong> O(n + m) where n and m are the array lengths. <strong>Space:</strong> O(n) for the Set.</p>
<p>For sorted arrays, use the <strong>two-pointer approach</strong> for O(n+m) time without extra space.</p>`
        },
        {
          q: "Find the union of two arrays (no duplicates).",
          a: `<p>The union of two arrays contains all unique elements from both arrays combined.</p>
<p>The simplest approach: merge both arrays and pass them to a Set constructor, which automatically removes duplicates.</p>
<p>This leverages JavaScript's Set data structure which stores only unique values.</p>
<pre><code>function union(a, b) {
  return [...new Set([...a, ...b])];
}
// Input: [1,2,3], [3,4,5]    =&gt; Output: [1,2,3,4,5]
// Input: [1,1,2], [2,3,3]    =&gt; Output: [1,2,3]
// Input: [1,2], []            =&gt; Output: [1,2]</code></pre>
<p><strong>Time:</strong> O(n + m). <strong>Space:</strong> O(n + m) for the Set and spread arrays.</p>
<p>For finding only elements in one array but NOT the other, use Set difference: <code>a.filter(x =&gt; !setB.has(x))</code>.</p>`
        },
        {
          q: "Find the majority element (appears more than n/2 times).",
          a: `<p>The majority element appears more than n/2 times in the array. <strong>Boyer-Moore Voting Algorithm</strong> finds it in O(n) time and O(1) space.</p>
<p>Maintain a candidate and a count: increment count if the current element matches candidate; otherwise decrement. When count reaches 0, update the candidate.</p>
<p>The key insight: if an element appears more than n/2 times, it will "survive" all cancellations and remain as the final candidate.</p>
<pre><code>function majorityElement(nums) {
  let candidate = nums[0], count = 1;
  for (let i = 1; i &lt; nums.length; i++) {
    if (count === 0) { candidate = nums[i]; count = 1; }
    else if (nums[i] === candidate) count++;
    else count--;
  }
  return candidate;
}
// Input: [3,2,3]              =&gt; Output: 3
// Input: [2,2,1,1,1,2,2]      =&gt; Output: 2
// Input: [1]                   =&gt; Output: 1</code></pre>
<p><strong>Boyer-Moore:</strong> O(n) time, O(1) space — optimal. Assumes majority element always exists.</p>
<p>If majority existence is not guaranteed, verify the candidate by counting its occurrences after the algorithm.</p>`
        },
        {
          q: "Sort an array of 0s, 1s, and 2s in-place (Dutch National Flag).",
          a: `<p>The Dutch National Flag problem partitions an array of 0s, 1s, and 2s into three sections without using extra space.</p>
<p>Use three pointers: <code>low</code> (next position for 0), <code>mid</code> (current element), <code>high</code> (next position for 2). Swap elements into correct regions while mid &lt;= high.</p>
<p>This achieves a single O(n) pass with no extra space, unlike counting sort which requires two passes.</p>
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
// Input: [2,0,2,1,1,0]   =&gt; Output: [0,0,1,1,2,2]
// Input: [2,0,1]          =&gt; Output: [0,1,2]</code></pre>
<p><strong>Three pointers:</strong> low tracks 0-boundary, high tracks 2-boundary, mid scans. After swap with high, don't increment mid.</p>
<p>This algorithm generalizes to sorting arrays with k distinct values using k-1 pointers.</p>`
        },
        {
          q: "Find the product of array except self (no division).",
          a: `<p>For each position i, compute the product of all elements except nums[i] WITHOUT using division. This handles zeros correctly.</p>
<p>Two-pass approach: left pass fills a prefix products array; right pass multiplies each position by its suffix product.</p>
<p>This runs in O(n) time and O(1) extra space (not counting the output array).</p>
<pre><code>function productExceptSelf(nums) {
  let n = nums.length, result = Array(n).fill(1);
  let left = 1;
  for (let i = 0; i &lt; n; i++) { result[i] = left; left *= nums[i]; }
  let right = 1;
  for (let i = n - 1; i &gt;= 0; i--) { result[i] *= right; right *= nums[i]; }
  return result;
}
// Input: [1,2,3,4]       =&gt; Output: [24,12,8,6]
// Input: [2,3,4,5]       =&gt; Output: [60,40,30,24]
// Input: [-1,1,0,-3,3]   =&gt; Output: [0,0,9,0,0]</code></pre>
<p><strong>Left pass:</strong> result[i] = product of all elements to the LEFT of i.</p>
<p><strong>Right pass:</strong> multiplies each result[i] by the product of all elements to the RIGHT of i.</p>`
        },
        {
          q: "Find the equilibrium index of an array.",
          a: `<p>An equilibrium index is a position where the sum of elements to its left equals the sum of elements to its right.</p>
<p>Compute the total sum, then traverse the array maintaining a left sum. At each index i: right sum = total - leftSum - nums[i]. If leftSum === rightSum, i is the equilibrium index.</p>
<p>This single-pass approach avoids recomputing sums from scratch at each position.</p>
<pre><code>function equilibrium(nums) {
  let total = nums.reduce((s, n) =&gt; s + n, 0), leftSum = 0;
  for (let i = 0; i &lt; nums.length; i++) {
    let rightSum = total - leftSum - nums[i];
    if (leftSum === rightSum) return i;
    leftSum += nums[i];
  }
  return -1;
}
// Input: [1,7,3,6,5,6]   =&gt; Output: 3  (leftSum=11, rightSum=11)
// Input: [1,2,3]          =&gt; Output: -1 (no equilibrium)
// Input: [2,4,2]          =&gt; Output: 1  (leftSum=2, rightSum=2)</code></pre>
<p><strong>Time:</strong> O(n). <strong>Space:</strong> O(1). The total sum is computed first, then subtracted during traversal.</p>
<p>Multiple equilibrium points can exist — return first found or modify to return all indices.</p>`
        },
        {
          q: "Remove duplicates from a sorted array in-place.",
          a: `<p>Given a sorted array, remove duplicates such that each element appears only once, returning the new length.</p>
<p>Use a write pointer <code>k</code> starting at 1. For each element from index 1, if it differs from the previous unique element, write it to position k and increment k.</p>
<p>The in-place constraint means no extra arrays — just overwriting duplicates with the next unique value.</p>
<pre><code>function removeDuplicates(nums) {
  if (nums.length === 0) return 0;
  let k = 1;
  for (let i = 1; i &lt; nums.length; i++) {
    if (nums[i] !== nums[i - 1]) nums[k++] = nums[i];
  }
  return k;
}
// Input: [1,1,2,3,3,4]    =&gt; Output: 4, array=[1,2,3,4,...]
// Input: [0,0,1,1,1,2]    =&gt; Output: 3, array=[0,1,2,...]
// Input: [1]               =&gt; Output: 1</code></pre>
<p><strong>Two-pointer pattern:</strong> slow pointer k tracks write position; fast pointer i scans the array.</p>
<p>Variation: allow at most k duplicates by changing the comparison to <code>nums[i] !== nums[k-2]</code>.</p>`
        },
        {
          q: "Find all leaders in an array (greater than all elements to its right).",
          a: `<p>An element is a leader if it's greater than all elements to its right. The rightmost element is always a leader.</p>
<p>Traverse right to left, maintaining the maximum seen so far. An element is a leader if it's greater than or equal to the current max.</p>
<p>This single right-to-left pass avoids comparing each element with all elements to its right (brute O(n²)).</p>
<pre><code>function findLeaders(arr) {
  let leaders = [], maxRight = arr[arr.length - 1];
  leaders.push(maxRight);
  for (let i = arr.length - 2; i &gt;= 0; i--) {
    if (arr[i] &gt; maxRight) {
      maxRight = arr[i];
      leaders.push(arr[i]);
    }
  }
  return leaders.reverse();
}
// Input: [16,17,4,3,5,2]   =&gt; Output: [17,5,2]
// Input: [1,2,3,4,5]        =&gt; Output: [5]  (only rightmost)
// Input: [5,4,3,2,1]        =&gt; Output: [5,4,3,2,1] (all leaders)</code></pre>
<p><strong>Time:</strong> O(n). <strong>Space:</strong> O(n) for result (O(1) extra if we just print).</p>
<p>The rightmost element is the <strong>guaranteed leader</strong>. Traverse right to left and update max to find others.</p>`
        },
        {
          q: "Find a pair with a given sum in a sorted array (two-pointer approach).",
          a: `<p>In a sorted array, use two pointers — one at the start, one at the end — to find a pair that sums to target in O(n) time.</p>
<p>If the sum equals target: return the pair. If less: move left pointer right to increase sum. If greater: move right pointer left to decrease sum.</p>
<p>The sorted property is essential — unsorted arrays require a hash set approach.</p>
<pre><code>function twoSumSorted(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left &lt; right) {
    let sum = arr[left] + arr[right];
    if (sum === target) return [left, right];
    else if (sum &lt; target) left++;
    else right--;
  }
  return null;
}
// Input: [1,2,3,4,6], target=6    =&gt; Output: [1,3] (indices 2+4=6)
// Input: [2,7,11,15], target=9    =&gt; Output: [0,1] (2+7=9)
// Input: [1,3,5,7], target=12     =&gt; Output: [2,3] (5+7=12)</code></pre>
<p><strong>Time:</strong> O(n). Two pointers converge toward each other — each step eliminates one element from consideration.</p>
<p>Works for exactly 2 elements. For 3-sum extend with an outer loop (O(n²)) to fix one element and two-sum the rest.</p>`
        },
        {
          q: "Check if a triplet with zero sum exists in an array.",
          a: `<p>Find three elements a, b, c in an array such that a + b + c = 0. This is the classic 3Sum problem.</p>
<p>Sort the array. For each element a at index i, use two pointers (left=i+1, right=end) to find b and c such that b+c = -a.</p>
<p>Sorting enables the two-pointer technique and also makes it easy to skip duplicate triplets.</p>
<pre><code>function threeSum(nums) {
  nums.sort((a, b) =&gt; a - b);
  let result = [];
  for (let i = 0; i &lt; nums.length - 2; i++) {
    if (i &gt; 0 &amp;&amp; nums[i] === nums[i-1]) continue; // skip dups
    let lo = i + 1, hi = nums.length - 1;
    while (lo &lt; hi) {
      let sum = nums[i] + nums[lo] + nums[hi];
      if (sum === 0) { result.push([nums[i],nums[lo],nums[hi]]); lo++; hi--; }
      else if (sum &lt; 0) lo++;
      else hi--;
    }
  }
  return result;
}
// Input: [-1,0,1,2,-1,4]  =&gt; Output: [[-1,-1,2],[-1,0,1]]
// Input: [0,0,0]           =&gt; Output: [[0,0,0]]
// Input: [1,2,3]           =&gt; Output: []</code></pre>
<p><strong>Time:</strong> O(n²). <strong>Space:</strong> O(1) ignoring output. Sort + two-pointer is optimal for this problem.</p>
<p>Skip duplicate elements after processing each index to avoid duplicate triplets in the result.</p>`
        },
        {
          q: "Find the maximum sum of k consecutive elements (sliding window).",
          a: `<p>Find the subarray of exactly k consecutive elements with the maximum sum, using the sliding window technique.</p>
<p>Compute the sum of the first k elements as the initial window. Then slide: add the next element and remove the first element of the previous window. Track the maximum.</p>
<p>The sliding window avoids recomputing sums from scratch at each position, reducing O(n*k) to O(n).</p>
<pre><code>function maxSumK(nums, k) {
  let windowSum = nums.slice(0, k).reduce((a, b) =&gt; a + b, 0);
  let max = windowSum;
  for (let i = k; i &lt; nums.length; i++) {
    windowSum += nums[i] - nums[i - k];
    max = Math.max(max, windowSum);
  }
  return max;
}
// Input: [2,3,4,1,5], k=3    =&gt; Output: 10 ([3,4,1+5]... actually [2,3,4]=9 vs [4,1,5]=10)
// Input: [1,4,2,10,23,3], k=4 =&gt; Output: 39 ([4,2,10,23])
// Input: [1,2,3,4,5], k=2     =&gt; Output: 9  ([4,5])</code></pre>
<p><strong>Window slide:</strong> <code>windowSum += nums[i] - nums[i-k]</code> adds new element to window and removes oldest.</p>
<p>This fixed-size sliding window pattern is the simplest variant — variable size windows are used for other constraints.</p>`
        },
        {
          q: "Flatten a nested array to any depth.",
          a: `<p>A nested array like [[1,[2]],3] needs flattening to [1,2,3]. JavaScript provides Array.flat(depth) but the recursive approach is educational.</p>
<p>Use recursion: for each element, if it's an array recurse deeper and spread/concat the result; otherwise push the element directly.</p>
<p>The depth parameter controls how many levels of nesting to flatten — Infinity flattens completely.</p>
<pre><code>function flatten(arr, depth = Infinity) {
  let result = [];
  for (let item of arr) {
    if (Array.isArray(item) &amp;&amp; depth &gt; 0)
      result.push(...flatten(item, depth - 1));
    else result.push(item);
  }
  return result;
}
// Input: [1,[2,3],[4,[5,6]]]   =&gt; Output: [1,2,3,4,5,6]
// Input: [1,[2,[3,[4]]]], d=2  =&gt; Output: [1,2,3,[4]]
// Built-in: [1,[2]].flat(Infinity) =&gt; [1,2]</code></pre>
<p><strong>Array.flat(n)</strong> is built-in from ES2019. For n=1 it's a shallow flatten; for Infinity it's fully recursive.</p>
<p>Common in data processing pipelines where nested structures need to be collapsed before further operations.</p>`
        },
        {
          q: "Find the minimum length subarray with sum greater than or equal to target.",
          a: `<p>Find the shortest contiguous subarray whose sum is ≥ target. This uses a variable-size sliding window.</p>
<p>Expand the window by moving the right pointer. When sum ≥ target, try shrinking from the left while still meeting the condition. Track the minimum length at each valid window.</p>
<p>This two-pointer sliding window approach is O(n) linear time — far better than the O(n²) brute force approach.</p>
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
// Input: target=7, [2,3,1,2,4,3]    =&gt; Output: 2 ([4,3])
// Input: target=4, [1,4,4]           =&gt; Output: 1 ([4])
// Input: target=11, [1,1,1,1,1,1,1]  =&gt; Output: 0 (impossible)</code></pre>
<p><strong>Time:</strong> O(n) — each element is added and removed from the window at most once.</p>
<p>The inner while loop may run multiple times for a single right position but the total left movements across all iterations is still O(n).</p>`
        },
        {
          q: "Find the longest subarray with equal number of 0s and 1s.",
          a: `<p>Given a binary array (0s and 1s), find the length of the longest subarray with equal counts of 0 and 1.</p>
<p>Replace 0s with -1s. The problem becomes: find the longest subarray with sum = 0. Use a prefix sum hash map: store the first occurrence of each prefix sum.</p>
<p>When the same prefix sum appears again, the subarray between those indices has sum 0 (equal 0s and 1s).</p>
<pre><code>function findMaxLength(nums) {
  let count = 0, maxLen = 0;
  let map = new Map([[0, -1]]); // sum 0 at index -1
  for (let i = 0; i &lt; nums.length; i++) {
    count += nums[i] === 1 ? 1 : -1;
    if (map.has(count)) maxLen = Math.max(maxLen, i - map.get(count));
    else map.set(count, i);
  }
  return maxLen;
}
// Input: [0,1]           =&gt; Output: 2
// Input: [0,1,0]         =&gt; Output: 2
// Input: [0,0,1,0,0,0,1,1] =&gt; Output: 6</code></pre>
<p><strong>Key trick:</strong> map 0→-1 so equal 0s and 1s gives a net sum of 0. Initialize map with {0: -1} for subarrays starting at index 0.</p>
<p>This prefix sum pattern generalizes to find longest subarray with target sum difference between two value types.</p>`
        },
        {
          q: "Find all pairs in an array with a given difference k.",
          a: `<p>Find all pairs (a, b) in an array where |a - b| = k. The pairs can appear in any order.</p>
<p>Use a Set for O(1) lookup. For each element x, check if x+k or x-k exists in the set. This finds both orientations efficiently.</p>
<p>This O(n) approach avoids the O(n²) nested loop comparison of all pairs.</p>
<pre><code>function findPairs(nums, k) {
  let set = new Set(nums), pairs = [];
  let seen = new Set();
  for (let x of nums) {
    if (!seen.has(x) &amp;&amp; set.has(x + k)) {
      pairs.push([x, x + k]);
      seen.add(x);
    }
  }
  return pairs;
}
// Input: [1,7,5,9,2,12,3], k=2  =&gt; Output: [[1,3],[7,9],[5,7],[3,5]]
// Input: [1,2,3,4,5], k=1        =&gt; Output: [[1,2],[2,3],[3,4],[4,5]]
// Input: [1,3,1,5,4], k=0         =&gt; Output: [[1,1]] (duplicate pair)</code></pre>
<p><strong>For k=0</strong>: finding pairs with difference 0 means finding duplicates. The <code>seen</code> Set prevents counting the same pair multiple times.</p>
<p>Sort + two-pointer also works in O(n log n) and handles k=0 naturally without extra bookkeeping.</p>`
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
          a: `<p>This is the most famous JavaScript closure pitfall. When using <code>var</code> in a for loop, only ONE variable <code>i</code> is created for the entire loop — all closures capture the same reference.</p>
<p>By the time the setTimeout callbacks execute, the loop has already finished and <code>i</code> equals 3 (the exit condition).</p>
<p>Two clean fixes exist: use <code>let</code> (creates a new binding per iteration) or use an IIFE to capture the current value in a new scope.</p>
<pre><code>// With var — all callbacks share one 'i'
for (var i = 0; i &lt; 3; i++) {
  setTimeout(function() { console.log(i); }, 0);
}
// Output: 3, 3, 3 (all three print 3)

// Fix 1: let (new binding per iteration)
for (let i = 0; i &lt; 3; i++) {
  setTimeout(() =&gt; console.log(i), 0); // 0, 1, 2 ✓
}

// Fix 2: IIFE to capture current i
for (var i = 0; i &lt; 3; i++) {
  ((n) =&gt; setTimeout(() =&gt; console.log(n), 0))(i); // 0, 1, 2 ✓
}</code></pre>
<p><strong>Root cause:</strong> <code>var</code> is function-scoped, not block-scoped — the loop body doesn't create a new scope.</p>
<p>This is one of the main reasons <code>let</code> was introduced in ES6 — to enable proper block scoping in loops.</p>`
        },
        {
          q: "What does hoisting do with var declarations?",
          a: `<p>JavaScript's hoisting mechanism moves <code>var</code> declarations to the top of their containing function (or global scope), but NOT the assignments. The variable exists from the start of the scope but holds <code>undefined</code> until the assignment line is reached.</p>
<p><code>let</code> and <code>const</code> are also hoisted but remain in a <strong>Temporal Dead Zone (TDZ)</strong> — accessing them before declaration throws a ReferenceError.</p>
<p>Function declarations are hoisted completely (including the body), while function expressions follow var/let/const hoisting rules.</p>
<pre><code>// var: hoisted, initialized as undefined
console.log(x); // undefined (no error)
var x = 5;
console.log(x); // 5

// let: hoisted but in TDZ
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 10;

// Function declaration: fully hoisted
greet(); // "Hello!" (works!)
function greet() { console.log("Hello!"); }</code></pre>
<p><strong>TDZ (Temporal Dead Zone):</strong> the period between entering scope and the variable's declaration where let/const throw if accessed.</p>
<p>Avoid relying on hoisting — declare variables at the top of their scope for clarity and predictability.</p>`
        },
        {
          q: "Predict the order of setTimeout(0) vs synchronous code.",
          a: `<p>JavaScript is single-threaded with an event loop. The call stack must be completely empty before any callback from the task queue can run.</p>
<p><code>setTimeout(fn, 0)</code> means "schedule fn as soon as possible" but it STILL goes through the macro-task queue and can never run before all synchronous code finishes.</p>
<p>This is why Node.js heavy synchronous computation blocks all I/O — the event loop can't process callbacks mid-computation.</p>
<pre><code>console.log('A');          // 1st: synchronous
setTimeout(() =&gt; console.log('B'), 0); // scheduled to task queue
console.log('C');          // 2nd: still synchronous
// Output: A, C, B

// Even with delay 0, B runs last:
// Call stack: [A, C] -&gt; empty -&gt; event loop -&gt; B

// setTimeout minimum delay is ~4ms in browsers (0 rounds up to ~1ms in Node)</code></pre>
<p><strong>Zero delay</strong> does NOT mean immediate execution — it means "queue this to run after the current call stack clears".</p>
<p>The actual minimum delay for nested setTimeouts in browsers is 4ms (per the HTML spec), not truly zero.</p>`
        },
        {
          q: "What is the execution order of a Promise vs setTimeout?",
          a: `<p>The event loop has TWO queues: the <strong>microtask queue</strong> (Promises, MutationObserver, queueMicrotask) and the <strong>macrotask queue</strong> (setTimeout, setInterval, I/O). Microtasks always have priority.</p>
<p>After each macrotask, ALL pending microtasks are processed before the next macrotask. This means a chain of Promise .then() calls all execute before any setTimeout callback.</p>
<p>Understanding this ordering prevents subtle bugs in async code and explains why certain patterns work or don't work.</p>
<pre><code>setTimeout(() =&gt; console.log('4 timeout'), 0);
Promise.resolve().then(() =&gt; console.log('2 promise1'));
Promise.resolve().then(() =&gt; console.log('3 promise2'));
console.log('1 sync');
// Output order:
// 1 sync   (call stack)
// 2 promise1 (microtask queue, empties before macrotask)
// 3 promise2 (still in microtask queue)
// 4 timeout  (macrotask — runs after microtasks are drained)</code></pre>
<p><strong>Microtask queue drains completely</strong> after each synchronous block and after each macrotask, before the next macrotask starts.</p>
<p>If microtasks keep adding more microtasks, the macrotask queue (setTimeout) can starve indefinitely.</p>`
        },
        {
          q: "What is typeof null?",
          a: `<p><code>typeof null === "object"</code> is one of JavaScript's oldest bugs. In the original JavaScript implementation, values were stored with type tags, and the null pointer (0x00) was mistakenly identified as an object.</p>
<p>The fix was proposed (returning "null") but rejected because it would break millions of existing websites. So it remains for backward compatibility.</p>
<p>To correctly check for null, always use strict equality <code>=== null</code> instead of typeof.</p>
<pre><code>console.log(typeof null);       // "object" — BUG in JS!
console.log(typeof undefined);  // "undefined"
console.log(null === undefined); // false (different types)
console.log(null == undefined);  // true (loose equality quirk)

// Correct null check:
const val = null;
if (val === null) console.log('it is null'); // correct
if (!val) console.log('falsy');              // also catches 0, "", false</code></pre>
<p><strong>Never use <code>typeof x === "null"</code></strong> — that's wrong. Use <code>x === null</code> for null checks.</p>
<p>Both null and undefined are falsy values and loosely equal to each other, but strictly unequal.</p>`
        },
        {
          q: "Predict the result of == with type coercion.",
          a: `<p>JavaScript's loose equality <code>==</code> applies Abstract Equality Comparison which coerces operands to compatible types before comparing. The rules are complex and non-intuitive.</p>
<p>Key coercion rules: if one side is a number and the other is a string, the string is converted to a number. Boolean values are converted to numbers (true→1, false→0) first. null == undefined is a special case that returns true.</p>
<p>Always use <code>===</code> (strict equality) in production code — it never coerces types and is predictable.</p>
<pre><code>console.log(0 == '');      // true  ('' converts to 0)
console.log(0 == '0');     // true  ('0' converts to 0)
console.log('' == '0');    // false (both strings, different)
console.log(false == '0'); // true  (false→0, '0'→0)
console.log(null == undefined);  // true (special rule only)
console.log(null == 0);    // false (null only == undefined)
console.log([] == false);  // true  ([].toString()=''→0, false→0)</code></pre>
<p><strong>The null == undefined special case:</strong> they are only loosely equal to each other, not to 0, false, or ''.</p>
<p>The == coercion rules follow the ECMAScript spec's Abstract Equality Comparison algorithm — memorizing all cases is impractical. Use === always.</p>`
        },
        {
          q: "What is the result of NaN === NaN?",
          a: `<p>NaN (Not a Number) is the only value in JavaScript — and indeed in IEEE 754 floating point — that is NOT equal to itself. This is specified in the standard to allow detecting "computation failed" results.</p>
<p>This means <code>x !== x</code> is ONLY true when x is NaN — a useful check before Number.isNaN was available.</p>
<p>Use <code>Number.isNaN()</code> over the older global <code>isNaN()</code> — the global version coerces strings to numbers first, causing false positives.</p>
<pre><code>console.log(NaN === NaN);           // false (NaN ≠ NaN by spec!)
console.log(NaN == NaN);            // false (even loose equality)
console.log(Number.isNaN(NaN));     // true (correct)
console.log(Number.isNaN('hello')); // false (no coercion)
console.log(isNaN('hello'));        // true (coerces: BAD!)

// Old trick before Number.isNaN:
const isNaNTrick = x =&gt; x !== x; // true only for NaN
console.log(isNaNTrick(NaN)); // true</code></pre>
<p><strong>Number.isNaN</strong> is the reliable check: it only returns true for actual NaN values, not string coercions.</p>
<p>NaN arises from: 0/0, Math.sqrt(-1), parseInt('abc'), NaN + 5 — any operation with NaN propagates NaN.</p>`
        },
        {
          q: "What happens when you use delete on a variable vs a property?",
          a: `<p>The <code>delete</code> operator removes properties from objects. It returns <code>true</code> on success (or for non-existent properties), and <code>false</code> only for non-configurable properties.</p>
<p>Variables declared with <code>var</code>, <code>let</code>, <code>const</code>, or function names CANNOT be deleted — delete silently returns true but the variable remains.</p>
<p>Only undeclared properties set directly on the global object (implicit globals) CAN be deleted.</p>
<pre><code>// Cannot delete declared variables
var a = 1;
console.log(delete a);  // true (lies! but a still exists)
console.log(a);         // 1 (not deleted)

// CAN delete object properties
const obj = { x: 10, y: 20 };
console.log(delete obj.x); // true
console.log(obj.x);        // undefined (deleted)
console.log(obj);          // {y: 20}

// Cannot delete non-configurable properties:
delete Math.PI; // false (non-configurable, strict mode throws)</code></pre>
<p><strong>delete</strong> returns true even when it can't delete a variable — it's not reliable as an existence check.</p>
<p>After deletion, accessing the property returns <code>undefined</code>. The property key is completely removed (unlike setting to undefined).</p>`
        },
        {
          q: "What does the comma operator return?",
          a: `<p>The comma operator (not to be confused with commas in arrays or function parameters) evaluates each operand from LEFT to RIGHT, and returns the value of the LAST operand. All side effects still occur.</p>
<p>It has the lowest precedence of all operators. Parentheses are often required to distinguish it from array/param commas.</p>
<p>Practical use: for loops with multiple update expressions, or obscure code golf patterns. Rarely used in modern code.</p>
<pre><code>let x = (1, 2, 3);
console.log(x); // 3 (last value returned)

let y = (console.log('a'), console.log('b'), 42);
// logs: 'a' then 'b' (side effects happen)
console.log(y); // 42

// Common use: for loop with multiple increments
for (let i = 0, j = 10; i &lt; 5; i++, j--) {
  console.log(i, j); // 0,10  1,9  2,8  3,7  4,6
}</code></pre>
<p><strong>The comma operator</strong> evaluates ALL expressions (side effects happen) but discards all values except the last.</p>
<p>The for loop update expression <code>i++, j--</code> is the most common legitimate use of the comma operator.</p>`
        },
        {
          q: "Predict the output of pre-increment vs post-increment.",
          a: `<p>JavaScript has two increment operators: pre-increment <code>++x</code> increments FIRST then returns the new value; post-increment <code>x++</code> returns the CURRENT value THEN increments.</p>
<p>The same distinction applies to decrement: <code>--x</code> (pre) vs <code>x--</code> (post).</p>
<p>Pre vs post increment is a common source of subtle bugs, especially in complex expressions and loop conditions.</p>
<pre><code>let a = 5;
console.log(a++); // 5 (returns 5 first, a becomes 6)
console.log(++a); // 7 (a becomes 7 first, then returns 7)
console.log(a);   // 7
// Dangerous: let x = 5; let y = x++ + ++x; // 5 + 7 = 12 (not 12!)
// Actual: x++ returns 5 (x=6), then ++x makes x=7 and returns 7. y = 5+7=12</code></pre>
<p><strong>Key rule:</strong> <code>++x</code> = increment first, use incremented value. <code>x++</code> = use current value, increment after.</p>
<p>Avoid mixing pre/post increment in complex expressions — it makes code hard to reason about.</p>`
        },
        {
          q: "What is the output when a function is called before its declaration (function hoisting)?",
          a: `<p>Function declarations are fully hoisted — both the declaration AND the definition move to the top of their scope, so they can be called before they appear in code.</p>
<p>Function expressions (const/let/var) are NOT fully hoisted — only the variable declaration is hoisted, not the assignment.</p>
<p>This difference is crucial: calling an expression variable before assignment throws a TypeError or ReferenceError.</p>
<pre><code>// Function declaration: hoisted fully
sayHi(); // "Hi!" — works before declaration
function sayHi() { console.log("Hi!"); }

// Function expression: NOT hoisted
greet(); // TypeError: greet is not a function
var greet = function() { console.log("Hello!"); };

// const/let: ReferenceError (temporal dead zone)
// hi(); // ReferenceError
// const hi = () =&gt; "hi";</code></pre>
<p><strong>Function declarations are hoisted completely</strong> (both name and body). var function expressions: the var name is hoisted as undefined.</p>
<p>Prefer <code>const</code> arrow functions — predictable behavior with no hoisting surprises.</p>`
        },
        {
          q: "What is the output when using typeof on undeclared variables?",
          a: `<p>Using typeof on an undeclared variable does NOT throw a ReferenceError — it returns the string "undefined". This is unique to typeof.</p>
<p>This safe behavior makes typeof useful for checking if optional dependencies or globals exist before using them.</p>
<p>All other operations on undeclared variables DO throw ReferenceError.</p>
<pre><code>console.log(typeof undeclaredVar); // "undefined" (no error!)
console.log(typeof null);          // "object" (known JS bug)
console.log(typeof undefined);     // "undefined"
console.log(typeof 42);            // "number"
console.log(typeof "hi");          // "string"
console.log(typeof true);          // "boolean"
console.log(typeof function(){});  // "function"
console.log(typeof {});            // "object"
console.log(typeof []);            // "object" (arrays too!)
console.log(typeof Symbol());      // "symbol"</code></pre>
<p><strong>Arrays and null</strong> both return "object" — use <code>Array.isArray()</code> and strict equality for those instead.</p>
<p>For robust type checking use <code>Object.prototype.toString.call(val)</code> which distinguishes all types.</p>`
        },
        {
          q: "What does the spread operator do to a primitive vs object?",
          a: `<p>The spread operator <code>...</code> creates a shallow copy of arrays/objects. For primitives it expands them as individual arguments or array elements.</p>
<p>Shallow copy means nested objects/arrays are still shared by reference — modifying them affects both copies.</p>
<p>For a deep copy, use <code>structuredClone()</code>, <code>JSON.parse(JSON.stringify())</code>, or recursive cloning.</p>
<pre><code>// Array spread: shallow copy
const a = [1,2,3], b = [...a];
b.push(4);
console.log(a); // [1,2,3] — unaffected

// Object spread: shallow copy
const obj = {x:1, nested:{y:2}};
const copy = {...obj};
copy.nested.y = 99;
console.log(obj.nested.y); // 99 (MUTATED — shallow!)

// Function arguments
Math.max(...[3,1,4,1,5]); // 5 (same as Math.max(3,1,4,1,5))</code></pre>
<p><strong>Shallow copy:</strong> top-level properties are duplicated, but nested objects share the same reference.</p>
<p>Spread is NOT deep cloning — this trips up many developers when they modify "copies" and see the original change.</p>`
        },
        {
          q: "What is the output of Promise chaining with multiple .then() calls?",
          a: `<p>Promise .then() returns a new Promise. Returning a value from .then() wraps it in a resolved Promise automatically. Throwing inside .then() rejects the chain.</p>
<p>Each .then() receives the return value of the previous .then(), enabling sequential async operations without nesting.</p>
<p>Understanding Promise chaining is essential for writing clean asynchronous JavaScript.</p>
<pre><code>Promise.resolve(1)
  .then(x =&gt; x + 1)       // receives 1, returns 2
  .then(x =&gt; x * 2)       // receives 2, returns 4
  .then(x =&gt; console.log(x)); // outputs: 4

// Short-circuit on rejection:
Promise.resolve(1)
  .then(x =&gt; { throw new Error('fail'); })
  .then(x =&gt; console.log('skipped'))    // skipped
  .catch(e =&gt; console.log(e.message));  // "fail"</code></pre>
<p><strong>Each .then()</strong> receives the return value of the previous handler. Returning undefined gives the next handler <code>undefined</code>.</p>
<p>A rejection skips all .then() handlers until the nearest .catch(). After .catch(), the chain continues as resolved.</p>`
        },
        {
          q: "What is the value of 'this' inside different function types?",
          a: `<p>The value of <code>this</code> in JavaScript depends on HOW a function is called, not where it's defined — except for arrow functions which inherit <code>this</code> lexically.</p>
<p>Arrow functions do NOT have their own <code>this</code>. They capture <code>this</code> from the surrounding scope at definition time.</p>
<p>Understanding <code>this</code> context is one of the most important JavaScript concepts for writing correct OOP code.</p>
<pre><code>const obj = {
  name: 'Alice',
  regular: function() { return this.name; },  // obj.name = 'Alice'
  arrow: () =&gt; this.name,   // window.name (outer this, not obj)
};
console.log(obj.regular()); // "Alice"
console.log(obj.arrow());   // undefined (window.name)

// Losing context:
const fn = obj.regular;
fn(); // undefined (this = window/global in strict mode error)
fn.call(obj); // "Alice" (explicit this via call)</code></pre>
<p><strong>Arrow function this:</strong> fixed at definition time (lexical). <strong>Regular function this:</strong> determined at call time.</p>
<p>Use <code>.bind(this)</code>, <code>.call(this)</code>, or arrow functions to control what <code>this</code> evaluates to.</p>`
        },
        {
          q: "What is the output of short-circuit evaluation with && and ||?",
          a: `<p>JavaScript's <code>&amp;&amp;</code> and <code>||</code> do NOT just return true/false — they return the actual OPERAND VALUES that determined the result (short-circuit evaluation).</p>
<p><code>&amp;&amp;</code> returns the first FALSY value, or the LAST value if all are truthy. <code>||</code> returns the first TRUTHY value, or the LAST value if all are falsy.</p>
<p>This behavior is heavily used in JSX default props, conditional rendering, and default parameter patterns.</p>
<pre><code>console.log(1 &amp;&amp; 2 &amp;&amp; 3);    // 3  (all truthy, last value)
console.log(1 &amp;&amp; 0 &amp;&amp; 3);    // 0  (first falsy)
console.log(0 || '' || 'hi'); // "hi" (first truthy)
console.log(0 || '' || false);// false (last value, all falsy)

// Practical usage:
let name = user &amp;&amp; user.name; // safe property access
let val = input || 'default'; // default value fallback</code></pre>
<p><strong>&amp;&amp; short-circuits</strong> on falsy — second operand is NOT evaluated if first is falsy.</p>
<p><strong>|| short-circuits</strong> on truthy. Use <code>??</code> (nullish coalescing) to only default on null/undefined (not 0 or '').</p>`
        },
        {
          q: "What is the output of Object.assign vs spread for merging objects?",
          a: `<p>Both <code>Object.assign(target, ...sources)</code> and the spread operator <code>{...obj1, ...obj2}</code> merge objects shallowly with later properties overwriting earlier ones.</p>
<p>Key difference: Object.assign MUTATES the target object. Spread creates a new object. Both are shallow.</p>
<p>For React state updates and immutable patterns, always prefer spread to avoid accidentally mutating existing objects.</p>
<pre><code>const a = {x: 1, y: 2};
const b = {y: 3, z: 4};

// Spread (new object, a unchanged)
const c = {...a, ...b};
console.log(c); // {x:1, y:3, z:4}
console.log(a); // {x:1, y:2} unchanged

// Object.assign (mutates first arg!)
const d = Object.assign({}, a, b);
console.log(d); // {x:1, y:3, z:4}
Object.assign(a, b); // MUTATES a!
console.log(a); // {x:1, y:3, z:4}</code></pre>
<p><strong>Prefer spread</strong> for most cases since it doesn't mutate existing objects.</p>
<p>Both are <strong>shallow</strong> — nested objects share references. For deep merge use libraries like Lodash <code>_.merge()</code>.</p>`
        },
        {
          q: "What is the output of Array destructuring with default values and rest?",
          a: `<p>Array destructuring extracts values by position. Default values activate when the extracted value is undefined. Rest collects remaining items.</p>
<p>Destructuring is cleaner than manual index access and allows renaming, defaults, and selective extraction in one step.</p>
<p>Be careful: destructuring binds to undefined positions (beyond array length) as undefined, not as index-out-of-bounds errors.</p>
<pre><code>const [a, b, c = 10] = [1, 2];
console.log(a, b, c); // 1 2 10 (default c=10 since undefined)

const [x, , y] = [1, 2, 3]; // skip index 1
console.log(x, y);     // 1 3

const [first, ...rest] = [1, 2, 3, 4];
console.log(first); // 1
console.log(rest);  // [2, 3, 4]

// Swap without temp variable:
let p = 5, q = 10;
[p, q] = [q, p];
console.log(p, q); // 10 5</code></pre>
<p><strong>Default activates only for undefined</strong> — not for null, 0, or false values (which are valid falsy values).</p>
<p>The swap pattern <code>[a, b] = [b, a]</code> is idiomatic ES6 and avoids needing a temporary variable.</p>`
        },
        {
          q: "What happens with implicit return in arrow functions?",
          a: `<p>Arrow functions with a single expression (no curly braces) implicitly return that expression. Adding curly braces requires an explicit return statement.</p>
<p>This concise syntax is common in map/filter/reduce callbacks but can be confused with object literal shorthand.</p>
<p>A common mistake: using <code>{}</code> thinking it's an implicit return of an object, but it's treated as a function body.</p>
<pre><code>const double = x =&gt; x * 2;        // implicit return
console.log(double(5));              // 10

const add = (a, b) =&gt; a + b;       // implicit return
console.log(add(3, 4));              // 7

// Return object literal: must wrap in ()
const makeObj = x =&gt; ({ value: x }); // OK
const buggy = x =&gt; { value: x };     // undefined! (block body, no return)

console.log(makeObj(5)); // {value: 5}
console.log(buggy(5));   // undefined</code></pre>
<p><strong>Rule:</strong> omit braces = implicit return. With braces = function body requiring explicit return.</p>
<p>Wrap object literals in parentheses <code>( {} )</code> to distinguish them from function bodies when using implicit return.</p>`
        },
        {
          q: "What is the output of nullish coalescing (??) vs logical OR (||)?",
          a: `<p>The nullish coalescing operator <code>??</code> returns the right-hand side only when the left is <code>null</code> or <code>undefined</code> — NOT for other falsy values like 0, '', or false.</p>
<p>Logical OR <code>||</code> returns the right-hand side for ANY falsy value, which causes unintended behavior when 0 or empty string are valid user inputs.</p>
<p><code>??</code> was introduced in ES2020 specifically to handle the "0 is a valid value" scenario that <code>||</code> gets wrong.</p>
<pre><code>const a = 0 || 'default';    // "default" (wrong! 0 is valid)
const b = 0 ?? 'default';    // 0 (correct! 0 is not null/undefined)

const c = '' || 'fallback';  // "fallback" (bad for empty strings)
const d = '' ?? 'fallback';  // '' (empty string preserved)

const e = null ?? 'use me';  // "use me" (expected)
const f = undefined ?? 'use me'; // "use me" (expected)</code></pre>
<p><strong>Use ??</strong> when 0, false, or empty string are valid values that should not trigger the fallback.</p>
<p>Combine with optional chaining: <code>user?.name ?? 'Guest'</code> safely handles undefined users.</p>`
        },
        {
          q: "What is the output of a generator function (function*)? ",
          a: `<p>Generator functions return an iterator. They pause execution at each <code>yield</code> keyword and resume when <code>.next()</code> is called, remembering their state between calls.</p>
<p>Each <code>.next()</code> call returns an object <code>{ value, done }</code>. When done is true, the generator is exhausted.</p>
<p>Generators enable lazy sequence generation and are useful for infinite sequences, async control flow, and pipelines.</p>
<pre><code>function* counter() {
  yield 1;
  yield 2;
  yield 3;
}
const gen = counter();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: undefined, done: true}

// for...of consumes generators automatically:
for (const x of counter()) console.log(x); // 1, 2, 3</code></pre>
<p><strong>Generators are lazy</strong> — values are computed on demand, not all at once. Perfect for infinite sequences.</p>
<p>Can pass values INTO generators via <code>gen.next(value)</code> — the value becomes the result of the previous yield expression.</p>`
        },
        {
          q: "Predict output: event loop with Promise, setTimeout, and sync code.",
          a: `<p>The JavaScript event loop has two queues: the <strong>microtask queue</strong> (Promises, queueMicrotask) and the <strong>macrotask queue</strong> (setTimeout, setInterval). Microtasks always drain completely before any macrotask runs.</p>
<p>Order of execution: synchronous code → microtasks → next macrotask → microtasks → next macrotask...</p>
<p>This ordering is critical for understanding how async code interleaves with synchronous code.</p>
<pre><code>console.log('1 sync');
setTimeout(() =&gt; console.log('4 timeout'), 0);
Promise.resolve().then(() =&gt; console.log('2 promise'));
queueMicrotask(() =&gt; console.log('3 microtask'));
console.log('1b sync');
// Output order:
// 1 sync
// 1b sync
// 2 promise
// 3 microtask
// 4 timeout</code></pre>
<p><strong>Priority:</strong> Call stack &gt; Microtasks (Promises) &gt; Macrotasks (setTimeout). Microtasks drain before any macrotask runs.</p>
<p>Even <code>setTimeout(fn, 0)</code> runs AFTER all pending microtasks — "zero delay" just means "add to macrotask queue as soon as possible".</p>`
        },
        {
          q: "What is the output of using 'in' operator vs 'hasOwnProperty'?",
          a: `<p>The <code>in</code> operator checks if a property exists anywhere in the prototype chain. <code>hasOwnProperty</code> checks ONLY the object's own properties, not inherited ones.</p>
<p>This distinction matters when working with objects that inherit from prototypes or when iterating with for...in loops.</p>
<p>Always use <code>hasOwnProperty</code> in for...in loops to avoid accidentally processing prototype properties.</p>
<pre><code>function Animal(name) { this.name = name; }
Animal.prototype.type = 'animal';
const dog = new Animal('Rex');

console.log('name' in dog);                    // true (own)
console.log('type' in dog);                    // true (prototype)
console.log(dog.hasOwnProperty('name'));       // true
console.log(dog.hasOwnProperty('type'));       // false!

// for...in includes prototype properties:
for (let key in dog) {
  if (dog.hasOwnProperty(key)) console.log(key); // only "name"
}</code></pre>
<p><strong>Rule of thumb:</strong> use <code>hasOwnProperty</code> in for...in loops to skip inherited properties.</p>
<p>Modern alternative: <code>Object.keys(obj)</code> and <code>Object.hasOwn(obj, key)</code> only return/check own properties.</p>`
        },
        {
          q: "What is Symbol and what makes it unique?",
          a: `<p>A Symbol is a primitive data type introduced in ES6. Every Symbol value created with <code>Symbol()</code> is <strong>guaranteed to be unique</strong> — even two Symbols with the same description are not equal.</p>
<p>Symbols are used as unique property keys to avoid name collisions between libraries or to create "private-like" properties on objects.</p>
<p>Symbols are not iterable in for...in or Object.keys() — they're intentionally "hidden" unless you use Object.getOwnPropertySymbols().</p>
<pre><code>const s1 = Symbol('id');
const s2 = Symbol('id');
console.log(s1 === s2); // false! Each symbol is unique

const obj = { [s1]: 123 };
console.log(obj[s1]);   // 123 (symbol as key)
console.log(Object.keys(obj)); // [] (symbols hidden!)

// Well-known symbols:
class Collection {
  [Symbol.iterator]() { /* makes object iterable */ }
}</code></pre>
<p><strong>Symbol uniqueness</strong> is guaranteed — <code>Symbol('x') !== Symbol('x')</code> always. No equality without the reference.</p>
<p>Used for object property keys to prevent accidental property collisions in large codebases or when extending others' objects.</p>`
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
          a: `<p>FizzBuzz is the classic beginner interview filter: print each number from 1 to n, but replace multiples of 3 with "Fizz", multiples of 5 with "Buzz", and multiples of both with "FizzBuzz".</p>
<p>The key is to check divisibility by BOTH first (15 = 3×5), then 3 alone, then 5 alone. Order matters: check FizzBuzz before Fizz and Buzz.</p>
<p>A clean trick: build the output string by concatenating "Fizz" and "Buzz" conditionally, then use the empty string default.</p>
<pre><code>function fizzBuzz(n) {
  for (let i = 1; i &lt;= n; i++) {
    let out = '';
    if (i % 3 === 0) out += 'Fizz';
    if (i % 5 === 0) out += 'Buzz';
    console.log(out || i); // if out is empty, print number
  }
}
// fizzBuzz(15): 1,2,Fizz,4,Buzz,Fizz,7,8,Fizz,Buzz,11,Fizz,13,14,FizzBuzz</code></pre>
<p><strong>Building the string:</strong> append 'Fizz' if %3===0, append 'Buzz' if %5===0. Both conditions checked independently, so 15 gets 'FizzBuzz' automatically.</p>
<p>Common mistakes: using <code>else if</code> chains or checking %15 first (unnecessary) — the string-building approach handles all cases cleanly.</p>`
        },
        {
          q: "Reverse an integer without converting to string.",
          a: `<p>To reverse an integer mathematically: extract the last digit using <code>n % 10</code>, add it to the reversed number (shift existing digits left by multiplying by 10), then remove the last digit from n using integer division.</p>
<p>Handle negative numbers by preserving the sign separately and working with the absolute value.</p>
<p>This tests pure math skills without string conversion tricks and tests integer overflow awareness.</p>
<pre><code>function reverseInt(n) {
  let rev = 0, sign = Math.sign(n);
  n = Math.abs(n);
  while (n &gt; 0) {
    rev = rev * 10 + n % 10; // extract last digit and build reverse
    n = Math.floor(n / 10);  // remove last digit
  }
  return rev * sign;
}
// reverseInt(123)  =&gt; 321
// reverseInt(-456) =&gt; -654
// reverseInt(120)  =&gt; 21 (leading zeros dropped)</code></pre>
<p><strong>Handle the sign first</strong> — work with Math.abs(n) and multiply result by Math.sign(n) at the end.</p>
<p>In languages with 32-bit integers, check for overflow after each step. In JS, numbers are 64-bit floats so overflow is less of a concern.</p>`
        },
        {
          q: "Check if a string of parentheses is valid.",
          a: `<p>Use a stack data structure. Iterate the string: push opening brackets, pop on closing brackets and verify the popped value is the matching opening bracket.</p>
<p>If the stack is empty when trying to pop (more closing than opening) or the popped bracket doesn't match, return false immediately.</p>
<p>At the end, the stack must be empty — any remaining items represent unclosed brackets.</p>
<pre><code>function isValid(s) {
  const stack = [], map = { ')': '(', ']': '[', '}': '{' };
  for (const ch of s) {
    if ('([{'.includes(ch)) {
      stack.push(ch);
    } else if (stack.pop() !== map[ch]) {
      return false; // mismatched or empty stack
    }
  }
  return stack.length === 0; // unclosed brackets check
}
// isValid("()[]{}")  =&gt; true
// isValid("([)]")    =&gt; false
// isValid("{[]}")    =&gt; true</code></pre>
<p><strong>Stack-based O(n) solution</strong> handles all three bracket types simultaneously without nested conditions.</p>
<p>Edge cases: empty string (return true), single bracket (return false), all closing brackets (stack.pop() returns undefined !== map[ch]).</p>`
        },
        {
          q: "Convert a Roman numeral string to an integer.",
          a: `<p>Roman numerals use additive notation, but when a smaller value precedes a larger one (like IV=4, IX=9), the smaller is subtracted. This is the key rule.</p>
<p>Build a lookup map of character to value. Iterate the string: if the current value is less than the NEXT value, subtract it; otherwise add it.</p>
<p>The 6 subtractive cases are: IV(4), IX(9), XL(40), XC(90), CD(400), CM(900).</p>
<pre><code>function romanToInt(s) {
  const map = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000};
  let result = 0;
  for (let i = 0; i &lt; s.length; i++) {
    const curr = map[s[i]], next = map[s[i+1]];
    result += (curr &lt; next) ? -curr : curr;
  }
  return result;
}
// romanToInt("III")   =&gt; 3
// romanToInt("LVIII") =&gt; 58
// romanToInt("MCMXCIV") =&gt; 1994</code></pre>
<p><strong>Subtractive rule:</strong> if current symbol &lt; next symbol, subtract current; otherwise add it.</p>
<p>The reverse is also a common interview question: integer to Roman numeral — use a greedy approach from largest to smallest value.</p>`
        },
        {
          q: "Count the number of primes less than n (Sieve of Eratosthenes).",
          a: `<p>The Sieve of Eratosthenes efficiently finds all primes up to n. Start with a boolean array of all true. For each prime p starting at 2, mark all its multiples as composite.</p>
<p>Optimization: only check up to √n for outer loop (if p has a composite less than p², it's already been marked by a smaller prime). Start marking at p², not 2p.</p>
<p>Time complexity O(n log log n) — one of the most efficient algorithms for prime generation.</p>
<pre><code>function countPrimes(n) {
  const sieve = new Array(n).fill(true);
  sieve[0] = sieve[1] = false;
  for (let i = 2; i * i &lt; n; i++) {
    if (sieve[i]) {
      for (let j = i * i; j &lt; n; j += i) {
        sieve[j] = false; // mark multiples of i as composite
      }
    }
  }
  return sieve.filter(Boolean).length;
}
// countPrimes(10) =&gt; 4  (2,3,5,7)
// countPrimes(20) =&gt; 8  (2,3,5,7,11,13,17,19)</code></pre>
<p><strong>Start inner loop at i*i</strong> (not 2*i) — all smaller multiples of i were already marked by earlier primes.</p>
<p>For each prime p, its first unmarked multiple is p² because p×2, p×3...p×(p-1) were already marked by 2, 3...p-1.</p>`
        },
        {
          q: "Find the longest common prefix among an array of strings.",
          a: `<p>After sorting the array lexicographically, only the FIRST and LAST strings need to be compared — they represent the most different pair, so their common prefix is the common prefix of ALL strings.</p>
<p>Compare character by character while they match. Return the matching portion.</p>
<p>Alternative: horizontal scanning — start with first string as prefix, reduce it by comparing with each subsequent string until it matches.</p>
<pre><code>function longestCommonPrefix(strs) {
  if (!strs.length) return '';
  strs.sort(); // lexicographic sort
  const first = strs[0], last = strs[strs.length - 1];
  let i = 0;
  while (i &lt; first.length &amp;&amp; first[i] === last[i]) i++;
  return first.slice(0, i);
}
// longestCommonPrefix(["flower","flow","flight"]) =&gt; "fl"
// longestCommonPrefix(["dog","racecar","car"]) =&gt; ""</code></pre>
<p><strong>Sort then compare extremes</strong> — O(n log n) for sorting but then O(m) for comparison where m = LCP length.</p>
<p>The horizontal scanning approach is O(S) where S is total characters — better if array is large but sorting overhead is undesirable.</p>`
        },
        {
          q: "Check if two strings are isomorphic.",
          a: `<p>Two strings are isomorphic if there exists a one-to-one mapping between their characters. "egg" and "add" are isomorphic (e→a, g→d), but "foo" and "bar" are not (o maps to both a and r).</p>
<p>Use TWO maps: one from s to t, one from t to s. Bidirectional mapping ensures the mapping is truly one-to-one (bijective).</p>
<p>A single map only ensures s→t is consistent but doesn't catch two s-characters mapping to the same t-character ("ab"↔"aa" would pass with one map).</p>
<pre><code>function isIsomorphic(s, t) {
  if (s.length !== t.length) return false;
  const mapS = {}, mapT = {};
  for (let i = 0; i &lt; s.length; i++) {
    const sc = s[i], tc = t[i];
    if (mapS[sc] !== undefined &amp;&amp; mapS[sc] !== tc) return false;
    if (mapT[tc] !== undefined &amp;&amp; mapT[tc] !== sc) return false;
    mapS[sc] = tc;
    mapT[tc] = sc;
  }
  return true;
}
// isIsomorphic("egg", "add")  =&gt; true  (e=a, g=d)
// isIsomorphic("foo", "bar")  =&gt; false (o can't map to both a and r)
// isIsomorphic("ab", "aa")   =&gt; false (a and b both map to a)</code></pre>
<p><strong>Bidirectional mapping needed</strong> to catch cases where multiple source characters map to the same target character.</p>
<p>Alternative: transform both strings to a canonical form (index of first occurrence) and compare: "egg"→"011", "add"→"011" (equal ∴ isomorphic).</p>`
        },
        {
          q: "Determine if a number is a happy number.",
          a: `<p>A happy number eventually reaches 1 when repeatedly replaced by the sum of squares of its digits. Unhappy numbers cycle indefinitely (famously always passing through 4).</p>
<p>Use Floyd's cycle detection (fast/slow pointer) or a Set to detect if a cycle exists (unhappy), or if we reach 1 (happy).</p>
<p>For the Set approach: if we see a number we've seen before, it's an unhappy cycle — return false.</p>
<pre><code>function isHappy(n) {
  const sumSquares = n =&gt;
    String(n).split('').reduce((s, d) =&gt; s + Number(d) ** 2, 0);
  
  const seen = new Set();
  while (n !== 1) {
    if (seen.has(n)) return false; // cycle detected
    seen.add(n);
    n = sumSquares(n);
  }
  return true;
}
// isHappy(19) =&gt; true  (1²+9²=82 → 8²+2²=68 →...=1)
// isHappy(2)  =&gt; false (enters cycle)</code></pre>
<p><strong>Unhappy numbers always cycle through 4</strong> — an alternative early-exit: <code>if (n === 4) return false</code> instead of using a Set.</p>
<p>Floyd's cycle detection: use two pointers (slow moves 1 step, fast moves 2 steps). They meet only if there's a cycle. If fast reaches 1, number is happy.</p>`
        },
        {
          q: "Check if a number is a power of three.",
          a: `<p>Approach 1 (loop): repeatedly divide by 3 and check if the result reaches exactly 1. If remainder is ever non-zero, it's not a power of 3. O(log n) time.</p>
<p>Approach 2 (math): the largest power of 3 in 32-bit int range is 3^19 = 1,162,261,467. Any power of 3 MUST divide this number evenly.</p>
<p>Approach 3: log base 3 check — but floating-point precision issues make this unreliable without rounding.</p>
<pre><code>// Loop approach: O(log n)
function isPowerOfThree(n) {
  if (n &lt; 1) return false;
  while (n % 3 === 0) n /= 3;
  return n === 1;
}

// Math trick: O(1)
function isPowerOfThreeO1(n) {
  return n &gt; 0 &amp;&amp; 1162261467 % n === 0; // 3^19 mod n
}
// isPowerOfThree(9)  =&gt; true  (3^2)
// isPowerOfThree(27) =&gt; true  (3^3)
// isPowerOfThree(45) =&gt; false</code></pre>
<p><strong>The O(1) math trick</strong> works specifically for base 3 (a prime number) — the max value in range is divisible ONLY by powers of that prime.</p>
<p>This exact same pattern works for isPowerOfTwo: <code>n &gt; 0 &amp;&amp; (n &amp; (n-1)) === 0</code> (bitwise trick — only one bit set).</p>`
        },
        {
          q: "Check if a string is a palindrome (ignoring non-alphanumeric characters).",
          a: `<p>A palindrome reads the same forwards and backwards. When ignoring punctuation/spaces, first strip all non-alphanumeric characters and normalize to lowercase before comparing.</p>
<p>The two-pointer approach is memory-efficient: start from both ends and work inward, comparing characters.</p>
<p>This is a classic interview question testing string manipulation and the understanding of palindrome definition.</p>
<pre><code>function isPalindrome(s) {
  let cleaned = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  return cleaned === cleaned.split('').reverse().join('');
}
// isPalindrome("A man, a plan, a canal: Panama") =&gt; true
// isPalindrome("race a car") =&gt; false

// Two-pointer O(1) space approach:
function isPalindromePointers(s) {
  let l = 0, r = s.length - 1;
  while (l &lt; r) {
    while (l &lt; r &amp;&amp; !/[a-z0-9]/i.test(s[l])) l++;
    while (l &lt; r &amp;&amp; !/[a-z0-9]/i.test(s[r])) r--;
    if (s[l].toLowerCase() !== s[r].toLowerCase()) return false;
    l++; r--;
  }
  return true;
}</code></pre>
<p><strong>The regex approach</strong> is clean but uses O(n) extra space for the cleaned string.</p>
<p>Two-pointer avoids creating a new string, giving O(1) space complexity while maintaining O(n) time.</p>`
        },
        {
          q: "Find the two numbers that sum to a target (Two Sum).",
          a: `<p>The naive approach is O(n²) with nested loops. The optimal solution uses a hash map to store seen values, reducing it to O(n) time.</p>
<p>For each element, check if its complement (target - element) already exists in the map. If yes, return the indices. If no, store the element and its index.</p>
<p>This one-pass hash map approach is the canonical example of trading space for time complexity.</p>
<pre><code>function twoSum(nums, target) {
  const seen = new Map();
  for (let i = 0; i &lt; nums.length; i++) {
    const complement = target - nums[i];
    if (seen.has(complement)) return [seen.get(complement), i];
    seen.set(nums[i], i);
  }
  return []; // no solution
}
// twoSum([2,7,11,15], 9) =&gt; [0,1] (2+7=9)
// twoSum([3,2,4], 6)    =&gt; [1,2] (2+4=6)</code></pre>
<p><strong>Time O(n), Space O(n)</strong> using hash map vs Time O(n²), Space O(1) using nested loops.</p>
<p>For a sorted array, use the two-pointer technique: O(n) time and O(1) space without a hash map.</p>`
        },
        {
          q: "Find duplicate number in array of n+1 integers (range 1 to n).",
          a: `<p>Floyd's cycle detection (tortoise and hare) algorithm finds the duplicate without modifying the array and using O(1) extra space.</p>
<p>Treat the array as a linked list where each value points to the next index. The duplicate creates a cycle. The cycle's entrance is the duplicate.</p>
<p>Alternative: XOR all indices and values — extra O(n) space hash set approach is simpler to understand.</p>
<pre><code>function findDuplicate(nums) {
  // Floyd's cycle detection
  let slow = nums[0], fast = nums[0];
  do {
    slow = nums[slow];
    fast = nums[nums[fast]];
  } while (slow !== fast);
  slow = nums[0];
  while (slow !== fast) {
    slow = nums[slow];
    fast = nums[fast];
  }
  return slow;
}
// findDuplicate([1,3,4,2,2]) =&gt; 2
// findDuplicate([3,1,3,4,2]) =&gt; 3</code></pre>
<p><strong>Time O(n), Space O(1)</strong> with Floyd's algorithm — no array modification, no extra space.</p>
<p>Simple O(n) space: use a Set, return when adding a duplicate: <code>if (seen.has(n)) return n; seen.add(n);</code></p>`
        },
        {
          q: "Implement a function to check if a number is prime.",
          a: `<p>A prime number is only divisible by 1 and itself. For efficient checking, only test divisors up to the square root — if n has a factor > √n, it must also have one < √n.</p>
<p>Special cases: numbers ≤ 1 are not prime. 2 and 3 are prime. Eliminate multiples of 2 and 3 early, then check 6k±1 candidates.</p>
<p>For checking many numbers, use the Sieve of Eratosthenes (O(n log log n)) instead of individual checks.</p>
<pre><code>function isPrime(n) {
  if (n &lt;= 1) return false;
  if (n &lt;= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i &lt;= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}
// isPrime(2)   =&gt; true
// isPrime(17)  =&gt; true
// isPrime(100) =&gt; false</code></pre>
<p><strong>Time O(√n)</strong> by checking only up to the square root. The 6k±1 optimization skips multiples of 2 and 3.</p>
<p>All primes > 3 are of the form 6k±1 — this reduces the number of iterations by ~3x compared to checking all odd numbers.</p>`
        },
        {
          q: "Rotate an array by k positions.",
          a: `<p>Rotating an array right by k puts the last k elements at the front. The triple-reverse technique does this in-place in O(n) time and O(1) space.</p>
<p>Normalize k by modding with array length to handle k > n efficiently (k=n+1 is same as k=1).</p>
<p>Alternative O(n) space approach: copy last k elements to front — simpler but uses extra memory.</p>
<pre><code>function rotate(nums, k) {
  k = k % nums.length;
  if (k === 0) return nums;
  const reverse = (arr, l, r) =&gt; {
    while (l &lt; r) { [arr[l], arr[r]] = [arr[r], arr[l]]; l++; r--; }
  };
  reverse(nums, 0, nums.length - 1); // reverse all
  reverse(nums, 0, k - 1);           // reverse first k
  reverse(nums, k, nums.length - 1); // reverse rest
  return nums;
}
// rotate([1,2,3,4,5,6,7], 3) =&gt; [5,6,7,1,2,3,4]</code></pre>
<p><strong>Triple reverse trick:</strong> reverse all → reverse first k → reverse remaining. Results in right rotation by k.</p>
<p>For left rotation by k: <code>rotate(arr, n - k)</code> where n is array length.</p>`
        },
        {
          q: "Find the missing number in array [1..n].",
          a: `<p>The sum of first n natural numbers is n*(n+1)/2. Subtract the actual array sum to find the missing number — O(n) time, O(1) space, no sorting needed.</p>
<p>XOR approach also works: XOR all indices 1..n with all array values — the result is the missing number (duplicate XOR values cancel).</p>
<p>Both approaches handle the problem in one pass without extra space.</p>
<pre><code>// Approach 1: Math (sum formula)
function missingNumber(nums) {
  const n = nums.length;
  const expected = n * (n + 1) / 2;
  return expected - nums.reduce((a, b) =&gt; a + b, 0);
}

// Approach 2: XOR
function missingNumberXOR(nums) {
  let result = nums.length;
  for (let i = 0; i &lt; nums.length; i++) result ^= i ^ nums[i];
  return result;
}
// missingNumber([3,0,1]) =&gt; 2
// missingNumber([9,6,4,2,3,5,7,0,1]) =&gt; 8</code></pre>
<p><strong>Math approach can overflow</strong> for very large n with 32-bit integers. XOR approach avoids this.</p>
<p>XOR works because: a XOR a = 0, a XOR 0 = a, and XOR is commutative/associative.</p>`
        },
        {
          q: "Find intersection of two arrays.",
          a: `<p>Use a Set for O(n) lookup. Convert the first array to a Set, then filter the second array keeping elements present in the Set.</p>
<p>Handle duplicates based on requirements: if unique intersection use Set, if include duplicates use frequency maps.</p>
<p>For sorted arrays, the two-pointer technique gives O(n+m) time with O(1) extra space.</p>
<pre><code>// Unique values intersection
function intersection(nums1, nums2) {
  const set = new Set(nums1);
  return [...new Set(nums2.filter(n =&gt; set.has(n)))];
}

// With duplicates (frequency map)
function intersectWithDups(nums1, nums2) {
  const freq = {};
  for (const n of nums1) freq[n] = (freq[n] || 0) + 1;
  return nums2.filter(n =&gt; {
    if (freq[n] &gt; 0) { freq[n]--; return true; }
    return false;
  });
}
// intersectWithDups([1,2,2,1],[2,2]) =&gt; [2,2]</code></pre>
<p><strong>Time O(n+m)</strong> with hash map approach. If arrays are pre-sorted, two pointers give O(1) extra space.</p>
<p>Ask the interviewer: output unique values only? or include duplicates? This changes the algorithm significantly.</p>`
        },
        {
          q: "Find maximum product subarray.",
          a: `<p>Unlike max-sum subarray (Kadane's), we need to track BOTH max and min products because a negative times a negative becomes positive — the minimum can flip to maximum.</p>
<p>At each step, the current max product is the maximum of: current element alone, max*element, min*element (in case of sign flip).</p>
<p>This is one level harder than max-sum subarray and tests understanding of how negatives interact.</p>
<pre><code>function maxProduct(nums) {
  let maxProd = nums[0], minProd = nums[0], result = nums[0];
  for (let i = 1; i &lt; nums.length; i++) {
    if (nums[i] &lt; 0) [maxProd, minProd] = [minProd, maxProd];
    maxProd = Math.max(nums[i], maxProd * nums[i]);
    minProd = Math.min(nums[i], minProd * nums[i]);
    result = Math.max(result, maxProd);
  }
  return result;
}
// maxProduct([2,3,-2,4])  =&gt; 6  (subarray [2,3])
// maxProduct([-2,0,-1])   =&gt; 0</code></pre>
<p><strong>Track both max and min</strong> so when we encounter a negative number, we swap them (negative flips the sign).</p>
<p>Time O(n), Space O(1) — single pass through the array maintaining just two rolling values.</p>`
        },
        {
          q: "Implement binary search on a sorted array.",
          a: `<p>Binary search divides the search space in half at each step by comparing the target with the middle element. This gives O(log n) time vs O(n) for linear search.</p>
<p>Tricky part: correct mid calculation and boundary updates (left = mid+1, right = mid-1) to avoid infinite loops.</p>
<p>Be careful with integer overflow: use <code>mid = left + Math.floor((right - left) / 2)</code> instead of <code>(left + right) / 2</code> in languages with fixed-size integers.</p>
<pre><code>function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left &lt;= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] &lt; target) left = mid + 1;
    else right = mid - 1;
  }
  return -1; // not found
}
// binarySearch([1,3,5,7,9,11], 7) =&gt; 3
// binarySearch([1,3,5,7,9,11], 6) =&gt; -1</code></pre>
<p><strong>Time O(log n)</strong> — doubles the searchable range with each element; 1 billion items need ~30 comparisons.</p>
<p>Common mistakes: off-by-one errors in boundaries, forgetting to update both left AND right in the correct direction.</p>`
        },
        {
          q: "Generate all subsets (power set) of an array.",
          a: `<p>Each element has 2 choices: include or exclude. For n elements there are 2^n subsets. Using bit manipulation, represent each subset as a bitmask from 0 to 2^n - 1.</p>
<p>Alternatively, use recursive backtracking: start with empty set, add current element and recurse, then remove and recurse.</p>
<p>The iterative approach is often preferred in interviews for its clarity and O(n·2^n) time complexity which matches the size of the output.</p>
<pre><code>function subsets(nums) {
  const result = [[]];
  for (const num of nums) {
    const len = result.length;
    for (let i = 0; i &lt; len; i++) result.push([...result[i], num]);
  }
  return result;
}
// subsets([1,2,3]) =&gt; [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 2^3 = 8 subsets total</code></pre>
<p><strong>Time O(n·2^n)</strong> — we generate 2^n subsets each taking O(n) to copy. Space is the same O(n·2^n).</p>
<p>For duplicate elements, sort first and skip duplicates to avoid generating duplicate subsets.</p>`
        },
        {
          q: "Find longest palindromic substring.",
          a: `<p>Expand-around-center: for each character (and each gap between characters), expand outward as long as characters match. Track the longest expansion found.</p>
<p>There are 2n-1 centers (n character centers + n-1 gap centers for even palindromes). Each expansion is O(n) worst case, giving O(n²) total.</p>
<p>The optimal Manacher's algorithm solves this in O(n) but is complex. For interviews, O(n²) expand-around-center is usually acceptable.</p>
<pre><code>function longestPalindrome(s) {
  let start = 0, maxLen = 1;
  function expand(l, r) {
    while (l &gt;= 0 &amp;&amp; r &lt; s.length &amp;&amp; s[l] === s[r]) { l--; r++; }
    return r - l - 1; // length of palindrome found
  }
  for (let i = 0; i &lt; s.length; i++) {
    const len1 = expand(i, i);   // odd palindromes
    const len2 = expand(i, i+1); // even palindromes
    const maxL = Math.max(len1, len2);
    if (maxL &gt; maxLen) {
      maxLen = maxL;
      start = i - Math.floor((maxL - 1) / 2);
    }
  }
  return s.substring(start, start + maxLen);
}
// longestPalindrome("babad") =&gt; "bab"
// longestPalindrome("cbbd")  =&gt; "bb"</code></pre>
<p><strong>Two types of palindromes:</strong> odd-length (single center character) and even-length (between two characters).</p>
<p>Expand-around-center is intuitive and O(n²) — better than O(n³) brute force checking all substrings.</p>`
        },
        {
          q: "Count valid parentheses combinations for n pairs.",
          a: `<p>Use backtracking: track open and close counts. Add '(' if open < n, add ')' if close < open. When close === n, save the combination.</p>
<p>Valid combinations equal the Catalan number C(n) = C(2n,n)/(n+1). For n=3: 5 combinations.</p>
<p>This is a classic backtracking/DFS problem that tests recursive thinking and constraint propagation.</p>
<pre><code>function generateParentheses(n) {
  const result = [];
  function backtrack(s, open, close) {
    if (s.length === 2 * n) { result.push(s); return; }
    if (open &lt; n)     backtrack(s + '(', open + 1, close);
    if (close &lt; open) backtrack(s + ')', open, close + 1);
  }
  backtrack('', 0, 0);
  return result;
}
// generateParentheses(3) =&gt;
// ["((()))","(()())","(())()","()(())","()()()"]</code></pre>
<p><strong>Constraint: close &lt; open</strong> ensures we never add a ')' before its matching '(', maintaining validity.</p>
<p>Result count follows Catalan numbers: C(1)=1, C(2)=2, C(3)=5, C(4)=14, C(5)=42.</p>`
        },
        {
          q: "Merge two sorted arrays into one sorted array.",
          a: `<p>Use two pointers, one for each array. Compare current elements from both, insert the smaller one, advance that pointer. After one array exhausts, append remainders of the other.</p>
<p>This is the merge step of MergeSort. Understanding it deeply makes implementing merge sort straightforward.</p>
<p>For in-place merge (like LeetCode 88), fill from the BACK — compare from the end and place larger elements last to avoid overwriting.</p>
<pre><code>function mergeSorted(arr1, arr2) {
  let i = 0, j = 0, result = [];
  while (i &lt; arr1.length &amp;&amp; j &lt; arr2.length) {
    if (arr1[i] &lt;= arr2[j]) result.push(arr1[i++]);
    else result.push(arr2[j++]);
  }
  return result.concat(arr1.slice(i), arr2.slice(j));
}
// mergeSorted([1,3,5,7],[2,4,6,8]) =&gt; [1,2,3,4,5,6,7,8]</code></pre>
<p><strong>Time O(n+m), Space O(n+m)</strong> for a new array. In-place LeetCode-88 variant is O(1) space.</p>
<p>Key insight: merge works more efficiently than sorting combined array because both inputs are already sorted.</p>`
        },
        {
          q: "Check if a string has balanced brackets.",
          a: `<p>Use a stack. Map each closing bracket to its expected opening bracket. Push opening brackets; on closing bracket, pop and verify it matches. Return true only if stack is empty at end.</p>
<p>This handles nested brackets of mixed types: {[()]} is valid, {[(])} is not.</p>
<p>Common extensions: count minimum insertions/deletions to balance, or find minimum removal of invalid brackets.</p>
<pre><code>function isBalanced(s) {
  const stack = [];
  const match = { ')': '(', ']': '[', '}': '{' };
  for (const ch of s) {
    if ('([{'.includes(ch)) {
      stack.push(ch);
    } else if (')]}'.includes(ch)) {
      if (stack.pop() !== match[ch]) return false;
    }
  }
  return stack.length === 0;
}
// isBalanced("{[()]}") =&gt; true
// isBalanced("{[(])}") =&gt; false
// isBalanced("((()") =&gt;  false (unclosed)</code></pre>
<p><strong>Stack.length === 0 check</strong> at end catches unclosed opening brackets (e.g., "(((").</p>
<p>Characters that aren't brackets are ignored — the algorithm only tracks bracket pairs.</p>`
        },
        {
          q: "Find kth largest element in array.",
          a: `<p>QuickSelect is the optimal algorithm: partition (like QuickSort) and recurse only into the partition containing the kth element. Average O(n), worst O(n²).</p>
<p>Using a min-heap of size k: maintain k largest elements, the heap root is the kth largest. O(n log k) time.</p>
<p>Sort then index costs O(n log n) — fine for small arrays but not for streaming or huge datasets.</p>
<pre><code>// Min-heap approach: O(n log k)
function findKthLargest(nums, k) {
  // Sort-based (interview acceptable): O(n log n)
  return nums.sort((a, b) =&gt; b - a)[k - 1];
}

// Better: QuickSelect O(n) average
function quickSelect(nums, k) {
  const pivot = nums[Math.floor(Math.random() * nums.length)];
  const large  = nums.filter(x =&gt; x &gt; pivot);
  const equal  = nums.filter(x =&gt; x === pivot);
  const small  = nums.filter(x =&gt; x &lt; pivot);
  if (k &lt;= large.length)  return quickSelect(large, k);
  if (k &lt;= large.length + equal.length) return pivot;
  return quickSelect(small, k - large.length - equal.length);
}
// findKthLargest([3,2,1,5,6,4], 2) =&gt; 5
// findKthLargest([3,2,3,1,2,4,5,5,6], 4) =&gt; 4</code></pre>
<p><strong>QuickSelect average O(n)</strong> — best general approach. Randomized pivot avoids worst-case O(n²).</p>
<p>For streaming data where n is unknown: min-heap of size k gives O(n log k) and works online.</p>`
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
          a: `<p>Reversing a string manually tests basic string traversal. The most direct way is iterating from the last index to the first and concatenating each character.</p>
<p>A more efficient approach uses the two-pointer technique: swap characters from both ends moving toward the center — works in-place for character arrays.</p>
<p>In JavaScript strings are immutable, so we must build a new string or convert to array first.</p>
<pre><code>// Method 1: iterate backward
function reverseStr(s) {
  let result = '';
  for (let i = s.length - 1; i &gt;= 0; i--) result += s[i];
  return result;
}

// Method 2: two-pointer on array (in-place)
function reverseInPlace(arr) {
  let l = 0, r = arr.length - 1;
  while (l &lt; r) { [arr[l], arr[r]] = [arr[r], arr[l]]; l++; r--; }
  return arr;
}
// reverseStr("hello")      =&gt; "olleh"
// reverseStr("javascript") =&gt; "tpircSavaj"</code></pre>
<p><strong>String concatenation</strong> in a loop creates O(n²) intermediate strings. Converting to array first and using join is O(n).</p>
<p>The two-pointer swap approach is preferred in languages with mutable string types (C++, Java char[]). In JS use array conversion.</p>`
        },
        {
          q: "Check if a string is a palindrome.",
          a: `<p>A palindrome reads the same forwards and backwards (e.g., "racecar", "level"). The simplest check: compare the string with its reverse.</p>
<p>The two-pointer approach is O(1) extra space: use pointers at both ends, move toward center comparing characters. Stop when they meet or mismatch.</p>
<p>For real-world palindrome problems, also handle case-insensitivity and ignore non-alphanumeric characters.</p>
<pre><code>// Method 1: reverse comparison
function isPalindrome(s) {
  const low = s.toLowerCase();
  return low === low.split('').reverse().join('');
}

// Method 2: two-pointer (no extra space)
function isPalindromeTP(s) {
  s = s.toLowerCase();
  let l = 0, r = s.length - 1;
  while (l &lt; r) {
    if (s[l] !== s[r]) return false;
    l++; r--;
  }
  return true;
}
// isPalindrome("racecar") =&gt; true
// isPalindrome("hello")   =&gt; false</code></pre>
<p><strong>Two-pointer is O(1) space</strong> and O(n/2) comparisons (stops at the midpoint).</p>
<p>Even-length palindromes ("abba") and odd-length ("aba") both work with the same two-pointer logic.</p>`
        },
        {
          q: "Check if two strings are anagrams.",
          a: `<p>Two strings are anagrams if they contain the same characters with the same frequencies, just in different order ("listen" and "silent" are anagrams).</p>
<p>Approach 1: sort both strings and compare — O(n log n). Approach 2: character frequency map — O(n). For constraints requiring O(n), use the frequency map.</p>
<p>Always check lengths first — different lengths are immediately not anagrams.</p>
<pre><code>// Sort approach: O(n log n)
function isAnagram(a, b) {
  const sort = s =&gt; s.toLowerCase().split('').sort().join('');
  return a.length === b.length &amp;&amp; sort(a) === sort(b);
}

// Frequency map: O(n) time, O(1) space (fixed alphabet)
function isAnagramFast(a, b) {
  if (a.length !== b.length) return false;
  const count = Array(26).fill(0);
  for (let i = 0; i &lt; a.length; i++) {
    count[a.charCodeAt(i) - 97]++;
    count[b.charCodeAt(i) - 97]--;
  }
  return count.every(v =&gt; v === 0);
}
// isAnagram("listen", "silent") =&gt; true
// isAnagram("hello",  "world")  =&gt; false</code></pre>
<p><strong>Frequency map is O(n)</strong> vs O(n log n) for sorting. For large strings or performance-critical code, frequency map is preferred.</p>
<p>Unicode support: plain charCode approach only works for ASCII. For full Unicode, use a Map instead of a fixed-size array.</p>`
        },
        {
          q: "Count the number of vowels in a string.",
          a: `<p>Vowels in English are a, e, i, o, u (and sometimes y). To count them, use regex to match all vowel characters globally, or loop through checking a Set membership.</p>
<p>The regex approach is concise and handles both upper and lower case with the <code>gi</code> flags. The loop approach is more readable for beginners.</p>
<p>Counting vowels is often a foundation of more complex string problems like finding the longest vowel substring.</p>
<pre><code>// Regex approach
function countVowels(s) {
  return (s.match(/[aeiou]/gi) || []).length;
}

// Loop approach (explicit)
function countVowelsLoop(s) {
  const vowels = new Set('aeiouAEIOU');
  let count = 0;
  for (const c of s) if (vowels.has(c)) count++;
  return count;
}
// countVowels("Hello World") =&gt; 3 (e, o, o)
// countVowels("bcdfg")       =&gt; 0
// countVowels("Beautiful")   =&gt; 5</code></pre>
<p><strong>regex <code>.match().length</code></strong> returns null if no matches — always use <code>|| []</code> as fallback to avoid TypeError.</p>
<p>For finding vowels vs consonants ratio or extracting only vowels, the loop approach with Set is more flexible.</p>`
        },
        {
          q: "Find the first non-repeating character in a string.",
          a: `<p>Build a frequency map in one pass, then do a second pass to find the first character with count exactly 1. Two passes, O(n) total time.</p>
<p>This maintains the original ORDER of characters — we return the first one that appears only once.</p>
<p>A one-pass Set/array approach stores order too: add to Set (first seen), move to separate Set (seen twice). Return first in first-seen Set that's not in double-seen.</p>
<pre><code>function firstNonRepeating(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1; // count all
  for (const c of s) if (freq[c] === 1) return c;   // first count-1
  return null; // all characters repeat
}
// firstNonRepeating("aabbcde") =&gt; "c"
// firstNonRepeating("aabb")    =&gt; null
// firstNonRepeating("leetcode") =&gt; "l"</code></pre>
<p><strong>Two-pass approach</strong> is clean and O(n) — first pass counts, second pass finds first non-repeat in original order.</p>
<p>Amazon/Google interview variant: streaming version where characters arrive one at a time and you must always return the current first non-repeating.</p>`
        },
        {
          q: "Find the longest word in a sentence.",
          a: `<p>Split the sentence by spaces (or whitespace) to get individual words, then find the word with maximum length using reduce or Math.max on the lengths array.</p>
<p>The reduce approach is clean and O(n) — compare each word length, keep the longer one as the accumulator.</p>
<p>Handle edge cases: empty string, multiple spaces between words (use regex split), punctuation attached to words.</p>
<pre><code>function longestWord(s) {
  return s.split(/\s+/).reduce((a, b) =&gt; a.length &gt;= b.length ? a : b);
}

// If you need all longest words (in case of ties):
function allLongestWords(s) {
  const words = s.split(/\s+/);
  const maxLen = Math.max(...words.map(w =&gt; w.length));
  return words.filter(w =&gt; w.length === maxLen);
}
// longestWord("The quick brown fox") =&gt; "quick"
// longestWord("I love JavaScript")   =&gt; "JavaScript"</code></pre>
<p><strong>Use <code>/\s+/</code> regex</strong> (not just ' ') to handle multiple consecutive spaces correctly.</p>
<p>If multiple words share the maximum length, the reduce approach returns the FIRST one (due to >= comparison).</p>`
        },
        {
          q: "Capitalize the first letter of every word.",
          a: `<p>Split the string by spaces, transform each word by uppercasing its first character and keeping the rest unchanged, then join back with spaces.</p>
<p>This is called "Title Case" formatting. The two-step split-map-join pattern is clean and idiomatic JavaScript.</p>
<p>Consider edge cases: empty words from multiple spaces (filter them), words that are already capitalized, all-uppercase words.</p>
<pre><code>function capitalizeWords(s) {
  return s.split(' ')
    .map(w =&gt; w ? w[0].toUpperCase() + w.slice(1) : w)
    .join(' ');
}

// Using regex (single expression):
function capitalizeRegex(s) {
  return s.replace(/\b\w/g, c =&gt; c.toUpperCase());
}
// capitalizeWords("hello world") =&gt; "Hello World"
// capitalizeWords("the quick brown fox") =&gt; "The Quick Brown Fox"</code></pre>
<p><strong><code>\b\w</code> regex</strong> matches word boundaries followed by a word character — handles all word separators, not just spaces.</p>
<p>Note: <code>.slice(1)</code> preserves rest of word unchanged. Using <code>.toLowerCase()</code> first ensures only the first letter is capitalized.</p>`
        },
        {
          q: "Remove duplicate characters from a string.",
          a: `<p>The ES6 Set automatically stores only unique values. Converting a string to a Set via spread/Array.from removes duplicate characters while preserving insertion order (first occurrence only).</p>
<p>This is idiomatic modern JavaScript. For older environments or explicit character order control, use a seen-object approach.</p>
<p>The result preserves the FIRST occurrence of each character in original order.</p>
<pre><code>// ES6 Set approach (idiomatic)
function removeDuplicates(s) {
  return [...new Set(s)].join('');
}

// Explicit approach (same result)
function removeDupsExplicit(s) {
  const seen = new Set();
  let result = '';
  for (const c of s) {
    if (!seen.has(c)) { seen.add(c); result += c; }
  }
  return result;
}
// removeDuplicates("aabbccdde")  =&gt; "abcde"
// removeDuplicates("hello")      =&gt; "helo"
// removeDuplicates("programming") =&gt; "progamin"</code></pre>
<p><strong>Set preserves insertion order</strong> in JavaScript — first occurrence is kept, subsequent duplicates are dropped.</p>
<p>If the order doesn't matter, sorting first then removing consecutive duplicates is another option (but changes order).</p>`
        },
        {
          q: "Compress a string using counts of repeated characters.",
          a: `<p>Run-length encoding (RLE): scan left to right counting consecutive identical characters. When a new character is encountered, emit the previous character + count (omit count if 1).</p>
<p>This is a simple lossless compression technique — effective only when strings have many consecutive repeats.</p>
<p>Common variant: only return the compressed form if shorter than original; otherwise return original.</p>
<pre><code>function compress(s) {
  let result = '', count = 1;
  for (let i = 1; i &lt;= s.length; i++) {
    if (i &lt; s.length &amp;&amp; s[i] === s[i - 1]) {
      count++;
    } else {
      result += s[i - 1] + (count &gt; 1 ? count : '');
      count = 1;
    }
  }
  return result.length &lt; s.length ? result : s;
}
// compress("aabcccdddd") =&gt; "a2bc3d4"
// compress("abcd")       =&gt; "abcd" (no compression benefit)
// compress("aaabbb")     =&gt; "a3b3"</code></pre>
<p><strong>Loop to length (inclusive)</strong> — the <code>i &lt;= s.length</code> condition ensures the LAST group is emitted.</p>
<p>The comparison <code>result.length &lt; s.length</code> at the end implements the "only compress if beneficial" requirement.</p>`
        },
        {
          q: "Find the frequency of each character in a string.",
          a: `<p>A frequency map (object or Map) counts how many times each character appears. This is the foundation for many string problems: anagram detection, most frequent character, etc.</p>
<p>After building the map, convert to entries for sorting or filtering. Use Object.entries() with array methods.</p>
<p>ES6 Map preserves insertion order and handles all character types (including emoji) better than plain objects.</p>
<pre><code>function charFrequency(s) {
  const freq = {};
  for (const c of s) freq[c] = (freq[c] || 0) + 1;
  return freq;
}
// charFrequency("hello") =&gt; {h:1, e:1, l:2, o:1}

// Most frequent character:
function mostFrequent(s) {
  const freq = charFrequency(s);
  return Object.entries(freq).sort(([,a],[,b]) =&gt; b - a)[0][0];
}
// mostFrequent("aabbbcccc") =&gt; "c"</code></pre>
<p><strong>Frequency maps</strong> are useful for anagram checks: two strings are anagrams if their frequency maps are identical.</p>
<p>For character frequency problems, consider if spaces/punctuation should be included — often they should be excluded first.</p>`
        },
        {
          q: "Find the longest substring without repeating characters.",
          a: `<p>Use the sliding window technique with a Set tracking characters in the current window. Expand the right pointer; when a duplicate is found, shrink from the left until the duplicate is removed.</p>
<p>The window always contains unique characters. Track the maximum window size seen. This is a classic O(n) sliding window pattern.</p>
<p>Alternative: store character index in a Map for O(1) jumps when encountering duplicates.</p>
<pre><code>function lengthOfLongestSubstring(s) {
  let set = new Set(), l = 0, maxLen = 0;
  for (let r = 0; r &lt; s.length; r++) {
    while (set.has(s[r])) set.delete(s[l++]); // shrink window
    set.add(s[r]);
    maxLen = Math.max(maxLen, r - l + 1);
  }
  return maxLen;
}
// lengthOfLongestSubstring("abcabcbb") =&gt; 3 ("abc")
// lengthOfLongestSubstring("bbbbb")   =&gt; 1 ("b")
// lengthOfLongestSubstring("pwwkew")  =&gt; 3 ("wke")</code></pre>
<p><strong>Sliding window</strong> gives O(n) time and O(min(m,n)) space where m is the character set size.</p>
<p>The Map-based variant skips directly: when s[r] is in map at index i, jump l to max(l, i+1) — avoids repeated deletions.</p>`
        },
        {
          q: "Find all permutations of a string.",
          a: `<p>Use backtracking: swap the current character with each remaining character, recurse, then swap back (restore state). When the index reaches the end, save the current permutation.</p>
<p>A string of n unique characters has n! permutations. Handling duplicates requires sorting and skipping already-used characters.</p>
<p>Iterative approach: start with first character, insert it at every position of each existing permutation.</p>
<pre><code>function permutations(str) {
  const result = [];
  function backtrack(arr, start) {
    if (start === arr.length) { result.push(arr.join('')); return; }
    for (let i = start; i &lt; arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]]; // swap
      backtrack(arr, start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // undo swap
    }
  }
  backtrack(str.split(''), 0);
  return result;
}
// permutations("abc") =&gt; ["abc","acb","bac","bca","cba","cab"] (3!=6)</code></pre>
<p><strong>Time O(n! * n)</strong> — n! permutations each taking O(n) to copy. This is unavoidable since the output itself is that large.</p>
<p>For large strings, generating all permutations is impractical. Next permutation (lexicographic) is a better approach for some problems.</p>`
        },
        {
          q: "Check if one string is a rotation of another.",
          a: `<p>A clever trick: if s2 is a rotation of s1, then s2 must appear as a substring in s1+s1. This works because concatenating s1 with itself contains all possible rotations of s1.</p>
<p>First verify lengths are equal, then use includes() or KMP search for the concatenation approach.</p>
<p>Example: "rotation" of "abcde" — "cdeab" appears in "abcdeabcde".</p>
<pre><code>function isRotation(s1, s2) {
  if (s1.length !== s2.length) return false;
  return (s1 + s1).includes(s2);
}
// isRotation("abcde", "cdeab") =&gt; true  ("cdeab" in "abcdeabcde")
// isRotation("abcde", "abced") =&gt; false (different characters rearranged)</code></pre>
<p><strong>One includes() check</strong> replaces the need to try all rotation positions. O(n) time with efficient string search.</p>
<p>This works because s1+s1 contains EVERY possible rotation of s1 as a substring.</p>`
        },
        {
          q: "Count and say: generate the nth term of the count-and-say sequence.",
          a: `<p>Start with "1". Each subsequent term describes the previous term by counting consecutive groups of digits. "1" → "11" (one 1) → "21" (two 1s) → "1211" (one 2, one 1).</p>
<p>To build each term: scan previous term, count consecutive identical digits, then append count + digit to result.</p>
<p>This is an iterative string generation problem — no math formula, just string processing.</p>
<pre><code>function countAndSay(n) {
  let result = '1';
  for (let i = 1; i &lt; n; i++) {
    let next = '', count = 1;
    for (let j = 1; j &lt;= result.length; j++) {
      if (j &lt; result.length &amp;&amp; result[j] === result[j-1]) {
        count++;
      } else {
        next += count + result[j-1];
        count = 1;
      }
    }
    result = next;
  }
  return result;
}
// countAndSay(1) =&gt; "1"
// countAndSay(4) =&gt; "1211"
// countAndSay(5) =&gt; "111221"</code></pre>
<p><strong>Sequence:</strong> 1 → 11 → 21 → 1211 → 111221 → 312211 → ...</p>
<p>This sequence only ever contains 1s, 2s, and 3s — no run of identical digits can exceed 3.</p>`
        },
        {
          q: "Find the minimum window substring containing all characters of pattern.",
          a: `<p>Sliding window with two frequency maps: one for the pattern (required) and one for the current window. Track how many pattern characters are fully satisfied (have count ≥ required).</p>
<p>Expand right until window is valid (all pattern chars covered), then shrink from left to find minimum valid window. Track minimum seen so far.</p>
<p>This hard sliding window pattern appears in many interview problems requiring "minimum window" solutions.</p>
<pre><code>function minWindow(s, t) {
  const need = {}, window = {};
  for (const c of t) need[c] = (need[c] || 0) + 1;
  let have = 0, required = Object.keys(need).length;
  let l = 0, minLen = Infinity, result = '';
  for (let r = 0; r &lt; s.length; r++) {
    const c = s[r];
    window[c] = (window[c] || 0) + 1;
    if (need[c] &amp;&amp; window[c] === need[c]) have++;
    while (have === required) {
      if (r - l + 1 &lt; minLen) { minLen = r - l + 1; result = s.slice(l, r+1); }
      window[s[l]]--;
      if (need[s[l]] &amp;&amp; window[s[l]] &lt; need[s[l]]) have--;
      l++;
    }
  }
  return result;
}
// minWindow("ADOBECODEBANC", "ABC") =&gt; "BANC"</code></pre>
<p><strong>Time O(|s|+|t|)</strong> — each character is visited at most twice (once by r, once by l).</p>
<p>Track <code>have</code> (satisfied char types) vs <code>required</code> (total char types in pattern) to efficiently determine window validity.</p>`
        },
        {
          q: "Group anagrams from an array of strings.",
          a: `<p>Group strings that are anagrams of each other. Key insight: anagrams produce the same string when sorted. Use sorted string as the map key to group anagrams together.</p>
<p>Build a Map where each key is the sorted version of a string. Push each original string into its group. Return all values.</p>
<p>Alternative key: character frequency array (better for unicode) — concatenate as "a2b1..." style string.</p>
<pre><code>function groupAnagrams(strs) {
  const map = new Map();
  for (const s of strs) {
    const key = s.split('').sort().join('');
    if (!map.has(key)) map.set(key, []);
    map.get(key).push(s);
  }
  return [...map.values()];
}
// groupAnagrams(["eat","tea","tan","ate","nat","bat"])
// =&gt; [["eat","tea","ate"],["tan","nat"],["bat"]]</code></pre>
<p><strong>Sorted string as key</strong> is O(k log k) per string where k is string length. Total: O(n * k log k).</p>
<p>Character count key (26-element array stringified) gives O(n * k) total — faster for long strings with small alphabets.</p>`
        },
        {
          q: "Implement strStr() — find needle in haystack.",
          a: `<p>Find the first index of needle in haystack. Return -1 if not found. This is the indexOf / substring search problem.</p>
<p>Naive O(n*m) approach: try starting at each position in haystack, check if needle matches. Works for most cases.</p>
<p>KMP (Knuth-Morris-Pratt) gives O(n+m) by pre-computing a failure function to skip re-comparing known matches.</p>
<pre><code>// Naive approach: O(n*m)
function strStr(haystack, needle) {
  if (!needle) return 0;
  for (let i = 0; i &lt;= haystack.length - needle.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) return i;
  }
  return -1;
}
// OR built-in:
// haystack.indexOf(needle)

// strStr("hello", "ll")   =&gt; 2
// strStr("aaaaa", "bba")  =&gt; -1
// strStr("", "")          =&gt; 0</code></pre>
<p><strong>Built-in <code>indexOf</code></strong> is optimized and should be used in production. Implement manually only when explicitly required.</p>
<p>For pattern matching with wildcards or regex, use different algorithms (like Rabin-Karp or Aho-Corasick).</p>`
        },
        {
          q: "Convert string to integer (atoi).",
          a: `<p>Implement parseInt-like parsing: skip leading whitespace, handle optional sign (+/-), read digits until non-digit, clamp to 32-bit integer range.</p>
<p>This problem is often about careful edge case handling rather than algorithm complexity.</p>
<p>Common edge cases: leading/trailing spaces, sign character, non-digit characters mid-number, overflow.</p>
<pre><code>function myAtoi(s) {
  s = s.trimStart();
  if (!s) return 0;
  let sign = 1, i = 0, result = 0;
  const INT_MAX = 2**31 - 1, INT_MIN = -(2**31);
  if (s[0] === '-') { sign = -1; i++; }
  else if (s[0] === '+') i++;
  while (i &lt; s.length &amp;&amp; s[i] &gt;= '0' &amp;&amp; s[i] &lt;= '9') {
    result = result * 10 + Number(s[i++]);
    if (result * sign &gt; INT_MAX) return INT_MAX;
    if (result * sign &lt; INT_MIN) return INT_MIN;
  }
  return result * sign;
}
// myAtoi("   -42")      =&gt; -42
// myAtoi("4193 words")  =&gt; 4193
// myAtoi("words 987")   =&gt; 0</code></pre>
<p><strong>Stop on first non-digit</strong> after leading whitespace and sign — don't skip non-digits mid-number.</p>
<p>Clamp to [-2³¹, 2³¹-1] range, checking overflow DURING digit accumulation to avoid JavaScript large integer issues.</p>`
        },
        {
          q: "Reverse words in a sentence.",
          a: `<p>Split the string by spaces, reverse the array of words, and rejoin. Handle multiple spaces by filtering empty strings from split.</p>
<p>For in-place reversal (C-style): reverse the entire string first, then reverse each word individually.</p>
<p>Be aware of edge cases: leading/trailing spaces, multiple consecutive spaces between words.</p>
<pre><code>function reverseWords(s) {
  return s.trim().split(/\s+/).reverse().join(' ');
}
// reverseWords("the sky is blue") =&gt; "blue is sky the"
// reverseWords("  hello world  ") =&gt; "world hello"
// reverseWords("a good  example") =&gt; "example good a"

// In-place double-reverse approach (no split):
// 1. Reverse entire string: "eulb si yks eht"
// 2. Reverse each word:     "blue is sky the"</code></pre>
<p><strong><code>/\s+/</code> regex</strong> handles multiple spaces between words and the <code>.trim()</code> removes leading/trailing.</p>
<p>The double-reverse in-place approach is useful for fixed-size character arrays (like in C/C++) where extra space is not allowed.</p>`
        },
        {
          q: "Find all occurrences of a pattern in a text using sliding window.",
          a: `<p>Find every starting index where a pattern occurs in a text. The naive approach checks every position. Rabin-Karp uses rolling hash for O(n+m) expected time.</p>
<p>For fixed-size patterns, sliding window with character frequency comparison gives O(n) time — reuse the count from the previous position.</p>
<p>This is the foundation of grep, code editors' Find functions, and DNA sequence matching.</p>
<pre><code>// Find all anagram occurrences of pattern in string
function findAllOccurrences(s, p) {
  const result = [], need = Array(26).fill(0), window = Array(26).fill(0);
  const a = 'a'.charCodeAt(0);
  for (const c of p) need[c.charCodeAt(0) - a]++;
  for (let i = 0; i &lt; s.length; i++) {
    window[s[i].charCodeAt(0) - a]++;
    if (i &gt;= p.length) window[s[i-p.length].charCodeAt(0) - a]--;
    if (window.every((v, j) =&gt; v === need[j])) result.push(i - p.length + 1);
  }
  return result;
}
// findAllOccurrences("cbaebabacd", "abc") =&gt; [0, 6]</code></pre>
<p><strong>Sliding window with frequency arrays</strong> gives O(n) by avoiding recount from scratch for each position.</p>
<p>This pattern (find all anagram positions) is LeetCode #438 and a common sliding window interview question.</p>`
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
          a: `<p>The Water Jug Problem is a classic puzzle: given two unmarked jugs of capacity 3L and 5L, measure exactly 4L using only fill, empty, and pour-between operations.</p>
<p>Steps: fill 5L → pour into 3L (2L left in 5L) → empty 3L → pour 2L into 3L → fill 5L again → pour 1L into 3L (fills it) → exactly 4L remains in 5L.</p>
<p>This models BFS on state space where each state is (amount_in_jug1, amount_in_jug2). Any amount divisible by GCD(3,5)=1 is achievable.</p>
<pre><code>// State transitions from (0,0):
// Fill 5L:          (0,0) =&gt; (0,5)
// Pour 5L into 3L:  (0,5) =&gt; (3,2)
// Empty 3L:         (3,2) =&gt; (0,2)
// Pour into 3L:     (0,2) =&gt; (2,0)
// Fill 5L:          (2,0) =&gt; (2,5)
// Pour 5L into 3L:  (2,5) =&gt; (3,4) target achieved!
// 5L jug now has 4L ✓</code></pre>
<p><strong>BFS approach</strong> finds the shortest sequence of operations by exploring all reachable states level by level.</p>
<p>Mathematical insight: any target amount k is achievable if and only if GCD(3,5) divides k. Since GCD(3,5)=1, any 0-5L amount is measurable.</p>`
        },
        {
          q: "Explain the Egg Drop Problem concept.",
          a: `<p>Classic DP puzzle: given n eggs and k floors, find the MINIMUM worst-case trials needed to determine the critical floor where eggs first break.</p>
<p>When you drop from floor x: if it breaks, search below with n-1 eggs; if not, search above with n eggs. Minimize worst case over all floor choices.</p>
<p>DP recurrence: dp[eggs][floors] = 1 + min(x from 1..floors) max(dp[eggs-1][x-1], dp[eggs][floors-x]).</p>
<pre><code>function eggDrop(eggs, floors) {
  if (eggs === 1 || floors &lt;= 1) return floors;
  const dp = Array.from({length: eggs+1}, () =&gt; Array(floors+1).fill(0));
  for (let f = 1; f &lt;= floors; f++) dp[1][f] = f; // 1 egg: linear
  for (let e = 2; e &lt;= eggs; e++) {
    for (let f = 1; f &lt;= floors; f++) {
      dp[e][f] = Infinity;
      for (let x = 1; x &lt;= f; x++) {
        dp[e][f] = Math.min(dp[e][f], 1 + Math.max(dp[e-1][x-1], dp[e][f-x]));
      }
    }
  }
  return dp[eggs][floors];
}
// eggDrop(2, 10) =&gt; 4 (worst case 4 trials)</code></pre>
<p><strong>1 egg:</strong> must try every floor from 1 (linear O(k)). 2 eggs: triangular number strategy. More eggs approach O(log k).</p>
<p>Famous variant: 2 eggs, 100 floors — optimal first drop at floor 14 (triangular number strategy gives ceil(√200) ≈ 14).</p>`
        },
        {
          q: "Find the minimum coins needed to make a given amount.",
          a: `<p>Classic unbounded knapsack DP problem. dp[i] = minimum coins to make amount i. For each coin denomination, update all amounts from coin-value to target.</p>
<p>Greedy (always take largest coin) does NOT work for all denomination sets. DP is the correct general solution.</p>
<p>Time O(amount * coins), Space O(amount). Initialize dp[0]=0, rest as Infinity (unreachable), then build up.</p>
<pre><code>function coinChange(coins, amount) {
  const dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (const c of coins) {
    for (let i = c; i &lt;= amount; i++) {
      dp[i] = Math.min(dp[i], dp[i - c] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
}
// coinChange([1,5,6,9], 11) =&gt; 2 (5+6)
// coinChange([2], 3)         =&gt; -1 (impossible)
// coinChange([1,2,5], 11)    =&gt; 3 (5+5+1)</code></pre>
<p><strong>Bottom-up DP:</strong> coin in outer loop enables unbounded use (same coin multiple times). Amount in inner loop from coin upward.</p>
<p>Greedy works ONLY for canonical systems (US coins: 25,10,5,1). For arbitrary coins, always use DP.</p>`
        },
        {
          q: "How many ways can you climb n stairs taking 1 or 2 steps at a time?",
          a: `<p>Classic Fibonacci DP: to reach stair n, you came from n-1 (1 step) or n-2 (2 steps). Total ways = ways(n-1) + ways(n-2).</p>
<p>Base cases: ways(1) = 1, ways(2) = 2 (either 1+1 or 2). These match shifted Fibonacci numbers.</p>
<p>Only two previous values needed at any point — O(1) space solution using rolling variables.</p>
<pre><code>function climbStairs(n) {
  if (n &lt;= 2) return n;
  let a = 1, b = 2;
  for (let i = 3; i &lt;= n; i++) [a, b] = [b, a + b];
  return b;
}
// climbStairs(1) =&gt; 1
// climbStairs(2) =&gt; 2  (1+1 or 2)
// climbStairs(4) =&gt; 5  (five sequences)
// climbStairs(5) =&gt; 8</code></pre>
<p><strong>Fibonacci connection:</strong> climbStairs(n) = Fibonacci(n+1). The counts (1,2,3,5,8,13...) are Fibonacci numbers shifted by one position.</p>
<p>Generalization: with steps 1,2,3... the recurrence is f(n) = f(n-1)+f(n-2)+...+f(n-k) for k step sizes (tribonacci if k=3).</p>`
        },
        {
          q: "How many moves does it take to solve Tower of Hanoi with n disks?",
          a: `<p>Tower of Hanoi: move n disks from source to target using auxiliary peg. Never place larger disk on smaller. Recurrence: T(n) = 2*T(n-1) + 1 (move n-1 disks twice, plus 1 for largest). T(n) = 2^n - 1.</p>
<p>The recursive solution is elegant: move top n-1 disks to auxiliary, move largest to target, move n-1 back from auxiliary to target.</p>
<p>This demonstrates how recursion can elegantly express algorithms that are very difficult to implement iteratively.</p>
<pre><code>function hanoiMoves(n) {
  return Math.pow(2, n) - 1;
}
// hanoiMoves(3)  =&gt; 7
// hanoiMoves(10) =&gt; 1023

function hanoi(n, from, to, aux) {
  if (n === 0) return;
  hanoi(n-1, from, aux, to); // move top n-1 to aux
  console.log('Move disk', n, from, '-&gt;', to);
  hanoi(n-1, aux, to, from); // move n-1 from aux to target
}
// hanoi(3, 'A', 'C', 'B') prints 7 moves</code></pre>
<p><strong>T(n) = 2^n - 1:</strong> each additional disk DOUBLES moves plus 1. Adding just 1 disk to n doubles the total work.</p>
<p>For 64 disks: 2^64-1 ≈ 18.4 quintillion moves. At 1 move/second = ~585 billion years — longer than the universe's age.</p>`
        },
        {
          q: "Explain the Josephus Problem.",
          a: `<p>N people in a circle, numbered 1 to N. Count k people clockwise, eliminate every k-th person. Continue until one survivor remains. Find the survivor's position.</p>
<p>Mathematical recurrence (0-indexed): J(1,k)=0; J(n,k)=(J(n-1,k)+k)%n. Add 1 at end to get 1-indexed position.</p>
<p>Historically linked to Flavius Josephus who allegedly used this math to be the last survivor of a group of 41 people using k=3.</p>
<pre><code>function josephus(n, k) {
  let pos = 0; // 0-indexed position of survivor
  for (let i = 2; i &lt;= n; i++) pos = (pos + k) % i;
  return pos + 1; // convert to 1-indexed
}
// josephus(7, 2)  =&gt; 7
// josephus(10, 3) =&gt; 4
// josephus(6, 2)  =&gt; 5</code></pre>
<p><strong>O(n) time, O(1) space</strong> using the recurrence. Far better than O(n*k) brute force simulation with a circular array.</p>
<p>For k=2, there's a binary trick: J(n) = 2L + 1 where n = 2^m + L and 0 ≤ L &lt; 2^m (shift highest bit left, set LSB).</p>`
        },
        {
          q: "How do you check if a matrix is a magic square?",
          a: `<p>A magic square of order n has every row, column, and both main diagonals sum to the same value: the magic constant = n*(n²+1)/2.</p>
<p>Complete validation also verifies the grid contains each integer 1 to n² exactly once.</p>
<p>Famous magic squares: the 3×3 Lo Shu square (magic constant=15), Albrecht Dürer's 4×4 Melencholia I square (magic constant=34).</p>
<pre><code>function isMagicSquare(m) {
  const n = m.length;
  const target = n * (n * n + 1) / 2;
  for (let i = 0; i &lt; n; i++) {
    if (m[i].reduce((a, b) =&gt; a + b) !== target) return false;
    if (m.reduce((s, r) =&gt; s + r[i], 0) !== target) return false;
  }
  if (m.reduce((s, r, i) =&gt; s + r[i], 0) !== target) return false;
  if (m.reduce((s, r, i) =&gt; s + r[n-1-i], 0) !== target) return false;
  return true;
}
// 3x3: [[2,7,6],[9,5,1],[4,3,8]] =&gt; true (all sums = 15)</code></pre>
<p><strong>Magic constant for n×n = n*(n²+1)/2:</strong> for 3×3 = 15, 4×4 = 34, 5×5 = 65.</p>
<p>Only odd-order and doubly-even (4k×4k) methods exist for constructing magic squares. Singly-even (6×6, 10×10) require special algorithms.</p>`
        },
        {
          q: "Explain the Birthday Paradox.",
          a: `<p>In a room of just 23 people, the probability that two share a birthday is ~50.7%. This is far higher than intuition suggests because we're asking about ANY pair, not a specific pair.</p>
<p>Calculate P(no shared birthday) = 365/365 × 364/365 × ... × 343/365. P(shared) = 1 - P(no shared).</p>
<p>With 23 people there are C(23,2) = 253 possible pairs. Each pair has a 1/365 chance of matching. These combine for ~50% probability.</p>
<pre><code>function birthdayProbability(n) {
  let prob = 1.0;
  for (let i = 0; i &lt; n; i++) prob *= (365 - i) / 365;
  return 1 - prob;
}
// birthdayProbability(23) =&gt; 0.507 (50.7%)
// birthdayProbability(50) =&gt; 0.970
// birthdayProbability(70) =&gt; 0.999</code></pre>
<p><strong>Key insight:</strong> 253 pairs each with ~0.27% collision probability compound to >50% overall. Shared birthday is "pairwise" not "with you".</p>
<p>Practical application in CS: hash collision probability, probability of UUID clash in distributed systems (birthday attack in cryptography).</p>`
        },
        {
          q: "Explain the Monty Hall Problem.",
          a: `<p>Game show puzzle: 3 doors, one hides a car, two hide goats. You pick a door. The host (who knows all) opens a different door revealing a goat. Should you switch your pick?</p>
<p>YES — ALWAYS switch. Switching wins 2/3 of the time. Your original pick had only 1/3 probability. The host's action concentrates the other 2/3 probability onto the remaining door.</p>
<p>When you initially picked wrong (2/3 chance), the host is forced to reveal the other goat, leaving the car in the remaining door — switching wins. When right (1/3 chance), switching loses.</p>
<pre><code>// Verification by simulation:
function montySimulation(trials) {
  let switchWins = 0;
  for (let i = 0; i &lt; trials; i++) {
    const car = Math.floor(Math.random() * 3);
    const pick = Math.floor(Math.random() * 3);
    // Switching wins whenever initial pick was wrong:
    if (pick !== car) switchWins++;
  }
  return switchWins / trials; // approaches 0.667
}
// montySimulation(100000) =&gt; ~0.667</code></pre>
<p><strong>Switching wins when initial guess was wrong</strong> (2/3 of time). Staying wins when initial guess was right (1/3 of time).</p>
<p>Counter-intuitive because we think two remaining doors means 50/50 — but the host's action is not random (they always show a goat), which gives information.</p>`
        },
        {
          q: "In a room of n people, how many handshakes occur if everyone shakes hands once?",
          a: `<p>When n people each shake hands once with every other person, we need to count the number of unique pairs. Each handshake involves 2 people, and we want combinations (order doesn't matter).</p>
<p>Using combination formula C(n,2) = n*(n-1)/2. This is also the sum of the arithmetic series: (n-1) + (n-2) + ... + 1 = n*(n-1)/2.</p>
<p>This pattern appears in many network/graph problems: number of edges in a complete graph K_n also equals n*(n-1)/2.</p>
<pre><code>function handshakes(n) {
  return n * (n - 1) / 2;
}
// handshakes(2)  =&gt; 1
// handshakes(5)  =&gt; 10
// handshakes(10) =&gt; 45
// handshakes(100)=&gt; 4950</code></pre>
<p><strong>Formula C(n,2) = n*(n-1)/2</strong> counts unique pairs. Grows quadratically — doubling n quadruples handshakes.</p>
<p>Application: in a tournament where every team plays every other team once, the number of games is also n*(n-1)/2.</p>`
        },
        {
          q: "Calculate GCD and LCM of two numbers.",
          a: `<p>GCD (Greatest Common Divisor) using Euclidean algorithm: gcd(a,b) = gcd(b, a%b), base case gcd(a,0) = a. LCM (Least Common Multiple) uses the relation: LCM = (a * b) / GCD.</p>
<p>The Euclidean algorithm is one of the oldest algorithms, dating back 300 BC. It's O(log min(a,b)) time.</p>
<p>GCD and LCM are foundational for fraction simplification, scheduling problems, and number theory.</p>
<pre><code>function gcd(a, b) {
  return b === 0 ? a : gcd(b, a % b);
}
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}
// gcd(48, 18) =&gt; 6  (48=6*8, 18=6*3)
// lcm(4, 6)   =&gt; 12 (smallest multiple of both 4 and 6)
// gcd(100, 75)=&gt; 25
// lcm(12, 15) =&gt; 60</code></pre>
<p><strong>Euclidean algorithm:</strong> repeatedly replace larger with (larger mod smaller) until remainder is 0. Final non-zero value is GCD.</p>
<p>Compute LCM as <code>(a/gcd)*b</code> (not <code>a*b/gcd</code>) to avoid potential integer overflow in languages with bounded integers.</p>`
        },
        {
          q: "Find all prime factors of a number.",
          a: `<p>Trial division: divide by 2 (remove all even factors), then try odd divisors from 3 up to √n. Any remaining value > 1 is a prime factor itself.</p>
<p>Only need to check up to √n because if n = a*b and a > √n, then b < √n (so b would already have been found).</p>
<p>Prime factorization is unique per the Fundamental Theorem of Arithmetic — every integer > 1 has exactly one factorization.</p>
<pre><code>function primeFactors(n) {
  const factors = [];
  while (n % 2 === 0) { factors.push(2); n /= 2; }
  for (let i = 3; i * i &lt;= n; i += 2) {
    while (n % i === 0) { factors.push(i); n /= i; }
  }
  if (n &gt; 1) factors.push(n); // remaining prime factor
  return factors;
}
// primeFactors(12)  =&gt; [2, 2, 3]    (12 = 2² × 3)
// primeFactors(315) =&gt; [3, 3, 5, 7] (315 = 3² × 5 × 7)
// primeFactors(13)  =&gt; [13]         (prime itself)</code></pre>
<p><strong>Handle 2 separately</strong> then only iterate odd numbers (i+=2) — this halves the iterations needed.</p>
<p>After the loop, if n > 1, the remaining n is a prime factor (it couldn't be divided by anything up to √original_n).</p>`
        },
        {
          q: "Check if a number is a perfect square without sqrt().",
          a: `<p>Binary search for the square root in range [1, n]. At each step check mid*mid against n. This gives O(log n) time without floating-point sqrt.</p>
<p>Alternative: Newton's method converges faster — x_next = (x + n/x) / 2. Iterate until stable.</p>
<p>Bit manipulation: perfect squares always have an odd number of factor pairs. Also, for any n, count consecutively subtract odd numbers (1,3,5...) — reach 0 if perfect square.</p>
<pre><code>function isPerfectSquare(n) {
  if (n &lt; 1) return false;
  let left = 1, right = n;
  while (left &lt;= right) {
    const mid = Math.floor((left + right) / 2);
    const sq = mid * mid;
    if (sq === n) return true;
    if (sq &lt; n) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}
// isPerfectSquare(16) =&gt; true  (4²)
// isPerfectSquare(14) =&gt; false
// isPerfectSquare(1)  =&gt; true  (1²)</code></pre>
<p><strong>Binary search approach:</strong> O(log n) time and O(1) space. Avoids floating-point precision issues of Math.sqrt().</p>
<p>The odd-number subtraction trick: 1, 1+3=4, 4+5=9, 9+7=16... — subtract consecutive odds, perfect squares reach exactly 0.</p>`
        },
        {
          q: "Compute Pascal's triangle up to n rows.",
          a: `<p>Pascal's triangle: each row starts and ends with 1, and each interior element is the sum of the two elements above it. Row k contains the binomial coefficients C(k,0), C(k,1), ..., C(k,k).</p>
<p>Build iteratively: start with [1], then generate each row from the previous by summing adjacent elements and padding 1s at ends.</p>
<p>Pascal's triangle encodes many number theory patterns: Fibonacci numbers (diagonal sums), powers of 2 (row sums), Sierpinski triangle (odd numbers).</p>
<pre><code>function pascalTriangle(n) {
  const result = [];
  for (let i = 0; i &lt; n; i++) {
    const row = [1];
    for (let j = 1; j &lt; i; j++) {
      row.push(result[i-1][j-1] + result[i-1][j]);
    }
    if (i &gt; 0) row.push(1);
    result.push(row);
  }
  return result;
}
// pascalTriangle(5):
// [1]
// [1,1]
// [1,2,1]
// [1,3,3,1]
// [1,4,6,4,1]</code></pre>
<p><strong>Row i has i+1 elements.</strong> Row sums are powers of 2 (row 0: 2⁰=1, row 1: 2¹=2, row 4: 2⁴=16).</p>
<p>C(n,r) = Pascal's row n, element r. C(5,2) = 10 is at row 5 (0-indexed), position 2.</p>`
        },
        {
          q: "Solve the Fibonacci sequence with memoization.",
          a: `<p>Naive recursive Fibonacci is O(2^n) — exponential! Each subproblem is recomputed many times. Memoization caches results, making it O(n) time and O(n) space.</p>
<p>Bottom-up DP (iterative) achieves O(n) time and O(1) space — even better by using only two variables.</p>
<p>Matrix exponentiation can solve Fibonacci in O(log n) for very large n, but is rarely needed in interviews.</p>
<pre><code>// Memoized recursion: O(n) time, O(n) space
function fibMemo(n, memo = {}) {
  if (n &lt;= 1) return n;
  if (memo[n]) return memo[n];
  return memo[n] = fibMemo(n-1, memo) + fibMemo(n-2, memo);
}

// Iterative O(1) space:
function fibIterative(n) {
  let a = 0, b = 1;
  for (let i = 2; i &lt;= n; i++) [a, b] = [b, a + b];
  return n === 0 ? a : b;
}
// fib(10) =&gt; 55
// fib(20) =&gt; 6765</code></pre>
<p><strong>Memoization = top-down DP:</strong> recursive but cache results. Tabulation = bottom-up DP: iterative, even more efficient.</p>
<p>Fibonacci numbers grow exponentially (~φⁿ/√5 where φ≈1.618). fib(50) already exceeds 10 billion.</p>`
        },
        {
          q: "Count ways to reach the nth stair with steps 1, 2, or 3.",
          a: `<p>Extension of the classic stair problem: with 3 possible step sizes (1, 2, 3), each step count is the sum of the previous three: ways(n) = ways(n-1) + ways(n-2) + ways(n-3).</p>
<p>Base cases: ways(0) = 1 (staying at ground), ways(1) = 1, ways(2) = 2. This is the "tribonacci" sequence.</p>
<p>The pattern generalizes: for k step sizes, sum the last k terms.</p>
<pre><code>function climbStairs3(n) {
  if (n &lt;= 1) return 1;
  if (n === 2) return 2;
  let a = 1, b = 1, c = 2;
  for (let i = 3; i &lt;= n; i++) {
    [a, b, c] = [b, c, a + b + c];
  }
  return c;
}
// climbStairs3(3) =&gt; 4  (1+1+1, 1+2, 2+1, 3)
// climbStairs3(4) =&gt; 7
// climbStairs3(5) =&gt; 13</code></pre>
<p><strong>Recurrence: f(n) = f(n-1) + f(n-2) + f(n-3)</strong> with base cases f(0)=1, f(1)=1, f(2)=2.</p>
<p>This is "tribonacci" — generalized Fibonacci. Each term is the sum of the previous 3 instead of 2.</p>`
        },
        {
          q: "Find the power of a number efficiently (fast exponentiation).",
          a: `<p>Naive approach multiplies n times (O(n)). Fast exponentiation (Exponentiation by Squaring) is O(log n) by halving the exponent at each step.</p>
<p>Key insight: x^n = (x^(n/2))² for even n. For odd n: x^n = x * x^(n-1). This halves the problem each time.</p>
<p>Used in cryptography (modular exponentiation), matrix exponentiation, and competitive programming.</p>
<pre><code>function fastPow(base, exp) {
  if (exp === 0) return 1;
  if (exp &lt; 0) return 1 / fastPow(base, -exp);
  if (exp % 2 === 0) {
    const half = fastPow(base, exp / 2);
    return half * half; // reuse result!
  }
  return base * fastPow(base, exp - 1);
}
// fastPow(2, 10) =&gt; 1024 (only 4 multiplications vs 10 naive)
// fastPow(3, 0)  =&gt; 1
// fastPow(2, -3) =&gt; 0.125</code></pre>
<p><strong>Reuse half result:</strong> <code>const half = fastPow(base, exp/2); return half * half</code> — avoids computing the half-exponent twice.</p>
<p>Iterative version uses bit manipulation on the exponent to process each bit O(log n) — more cache-friendly than recursion.</p>`
        },
        {
          q: "Solve: given n lines on a plane, what's the max number of intersection points?",
          a: `<p>Any two distinct non-parallel, non-coincident lines intersect exactly once. The maximum occurs when no two lines are parallel and no three lines meet at a single point.</p>
<p>With n lines, choose any 2 for an intersection: C(n,2) = n*(n-1)/2 maximum intersections possible.</p>
<p>This combinatorics question tests the connection between geometry and combinations.</p>
<pre><code>function maxIntersections(n) {
  return n * (n - 1) / 2;
}
// 1 line   =&gt; 0 intersections (no pair)
// 2 lines  =&gt; 1 intersection
// 3 lines  =&gt; 3 intersections (C(3,2)=3)
// 4 lines  =&gt; 6 intersections (C(4,2)=6)
// 10 lines =&gt; 45 intersections
// Same formula as handshakes!</code></pre>
<p><strong>Same formula as handshakes</strong> C(n,2) = n*(n-1)/2 — every combinatorics problem about pairing n items follows this.</p>
<p>If some lines are parallel or concurrent (3+ through one point), subtract those impossibilities from the maximum.</p>`
        },
        {
          q: "Sum of digits of a factorial (digit sum problem).",
          a: `<p>For large factorials like 100!, compute the factorial as a BigInt or array of digits, then sum all digits. Simple digit sum formula doesn't apply to factorials.</p>
<p>The digit sum of a number relates to its remainder when divided by 9 (digital root). But factorial digit sums don't have a simple closed form.</p>
<p>However: if the question is just "sum of all digits in n!", compute big factorial then extract digits.</p>
<pre><code>function factorialDigitSum(n) {
  let factorial = BigInt(1);
  for (let i = 2; i &lt;= n; i++) factorial *= BigInt(i);
  return factorial.toString().split('').reduce((s, d) =&gt; s + Number(d), 0);
}
// factorialDigitSum(10) =&gt; 27  (10! = 3628800, 3+6+2+8+8+0+0)
// factorialDigitSum(20) =&gt; 54
// factorialDigitSum(100)=&gt; 648</code></pre>
<p><strong>Use BigInt</strong> for large factorials — regular numbers lose precision beyond 2^53 (about 15 significant digits).</p>
<p>100! has 158 digits; 1000! has 2568 digits. BigInt handles this, but performance degrades for very large n.</p>`
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
          a: `<p>In-place rotation: first TRANSPOSE (swap m[i][j] with m[j][i] for j>i), then REVERSE each row. This achieves clockwise rotation without extra space.</p>
<p>Understanding WHY it works: transposing reflects over the main diagonal, then reversing each row adjusts orientation from anti-clockwise to clockwise.</p>
<p>For counter-clockwise rotation, reverse each row FIRST, then transpose (swap the order).</p>
<pre><code>function rotate90(m) {
  const n = m.length;
  // Step 1: Transpose (swap upper and lower triangles)
  for (let i = 0; i &lt; n; i++)
    for (let j = i; j &lt; n; j++)
      [m[i][j], m[j][i]] = [m[j][i], m[i][j]];
  // Step 2: Reverse each row
  m.forEach(row =&gt; row.reverse());
  return m;
}
// [[1,2,3],[4,5,6],[7,8,9]]
// After transpose: [[1,4,7],[2,5,8],[3,6,9]]
// After reverse rows: [[7,4,1],[8,5,2],[9,6,3]] ✓</code></pre>
<p><strong>Clockwise: transpose then reverse rows.</strong> Counter-clockwise: reverse rows then transpose (swap order).</p>
<p>This O(n²) time, O(1) space solution is the standard in-place matrix rotation algorithm.</p>`
        },
        {
          q: "Print a matrix in spiral order.",
          a: `<p>Traverse the matrix layer by layer from outside in. Maintain four boundaries: top, bottom, left, right. After each direction, shrink the corresponding boundary.</p>
<p>Four traversals per layer: right along top row, down along right column, left along bottom row, up along left column. Repeat until boundaries cross.</p>
<p>The boundary checks <code>if (t &lt;= b)</code> and <code>if (l &lt;= r)</code> before bottom-left and left-bottom traversals prevent double-printing in non-square matrices.</p>
<pre><code>function spiralOrder(m) {
  const res = [], dirs = [];
  let t = 0, b = m.length-1, l = 0, r = m[0].length-1;
  while (t &lt;= b &amp;&amp; l &lt;= r) {
    for (let i = l; i &lt;= r; i++) res.push(m[t][i]); t++; // top row
    for (let i = t; i &lt;= b; i++) res.push(m[i][r]); r--; // right col
    if (t &lt;= b) { for (let i = r; i &gt;= l; i--) res.push(m[b][i]); b--; } // bottom row
    if (l &lt;= r) { for (let i = b; i &gt;= t; i--) res.push(m[i][l]); l++; } // left col
  }
  return res;
}
// 3x3: [[1,2,3],[4,5,6],[7,8,9]] =&gt; [1,2,3,6,9,8,7,4,5]</code></pre>
<p><strong>Boundary shrinks</strong> after each side is traversed. The 4-direction order is: RIGHT, DOWN, LEFT, UP.</p>
<p>Works for any m×n matrix, not just square. The boundary checks prevent elements being double-counted in single-row or single-column matrices.</p>`
        },
        {
          q: "Transpose a matrix.",
          a: `<p>Transposing reflects the matrix over its main diagonal: element at (i,j) moves to (j,i). The rows become columns and columns become rows.</p>
<p>For an m×n matrix, the transpose is n×m. Square matrices can be transposed in-place; non-square requires a new matrix.</p>
<p>Transposing is a key step in many algorithms: matrix multiplication, solving linear systems, and the rotate-90° algorithm.</p>
<pre><code>// Non-square matrix transpose: O(m*n)
function transpose(m) {
  return m[0].map((_, j) =&gt; m.map(row =&gt; row[j]));
}

// OR with explicit loops:
function transposeExplicit(m) {
  const rows = m.length, cols = m[0].length;
  const result = Array.from({length: cols}, () =&gt; Array(rows));
  for (let i = 0; i &lt; rows; i++)
    for (let j = 0; j &lt; cols; j++)
      result[j][i] = m[i][j];
  return result;
}
// [[1,2,3],[4,5,6]] =&gt; [[1,4],[2,5],[3,6]]</code></pre>
<p><strong>In-place (square only):</strong> swap m[i][j] and m[j][i] for j>i. Non-square requires a new array.</p>
<p>The map-based solution is elegant: for each column index j, create a new row by mapping all rows at that column.</p>`
        },
        {
          q: "Find the sum of both diagonals of a square matrix.",
          a: `<p>Primary diagonal elements are at indices (i,i) where i goes 0 to n-1. Secondary (anti-) diagonal elements are at (i, n-1-i). Both can be summed in a single pass.</p>
<p>For odd-sized matrices, the center element (n/2, n/2) appears in BOTH diagonals — subtract it once to avoid double-counting.</p>
<p>This is a common matrix interview question. Time O(n), Space O(1).</p>
<pre><code>function diagonalSum(m) {
  const n = m.length;
  let sum = 0;
  for (let i = 0; i &lt; n; i++) {
    sum += m[i][i];          // primary diagonal
    sum += m[i][n - 1 - i]; // secondary diagonal
  }
  if (n % 2) sum -= m[Math.floor(n/2)][Math.floor(n/2)]; // center counted twice
  return sum;
}
// [[1,2,3],[4,5,6],[7,8,9]] =&gt; 1+5+9 + 3+5+7 - 5 = 25
// [[1,2],[3,4]]             =&gt; (1+4) + (2+3) = 10 (no center)</code></pre>
<p><strong>Subtract center once</strong> for odd n: the center is at (n//2, n//2) and sits on BOTH diagonals simultaneously.</p>
<p>n=4: no center element needing correction. n=3: center (1,1) used by both diagonals. n=5: center (2,2) used by both.</p>`
        },
        {
          q: "Search for a value in a row-wise and column-wise sorted matrix.",
          a: `<p>For a matrix where each row is sorted left-to-right and each column sorted top-to-bottom, start from the TOP-RIGHT corner. This position has a unique property: it's the maximum of its row and minimum of its column.</p>
<p>If target &lt; current: move LEFT (current is too big for this row). If target &gt; current: move DOWN (current is too small for this column). Each comparison eliminates one row or column.</p>
<p>Time O(m+n) — much better than O(mn) brute force or O(mn log(mn)) with sorting.</p>
<pre><code>function searchMatrix(m, target) {
  let r = 0, c = m[0].length - 1; // start top-right
  while (r &lt; m.length &amp;&amp; c &gt;= 0) {
    if (m[r][c] === target) return [r, c]; // found
    if (m[r][c] &gt; target) c--;  // too big, go left
    else r++;                    // too small, go down
  }
  return null; // not found
}
// [[1,4,7],[2,5,8],[3,6,9]], target=5 =&gt; [1,1]
// [[1,4,7],[2,5,8],[3,6,9]], target=10 =&gt; null</code></pre>
<p><strong>Top-right corner is key:</strong> it's max of row (can eliminate row when too small) and min of column (can eliminate col when too big).</p>
<p>Starting from top-left wouldn't work: if target > m[0][0], we don't know whether to go right or down.</p>`
        },
        {
          q: "Set every row and column to zero if it contains a zero.",
          a: `<p>Two-pass approach with O(m+n) extra space: first scan the matrix recording which rows and columns contain zeros. Second pass sets those rows and columns to zero.</p>
<p>Don't set zeros during the first pass! Setting zeros would corrupt the matrix and cause false positives in subsequent scans.</p>
<p>The O(1) space version uses the first row and column as markers (shown separately). This Set-based version is clearer to understand.</p>
<pre><code>function zeroMatrix(m) {
  const zeroRows = new Set(), zeroCols = new Set();
  // Pass 1: find which rows and cols have zeros
  for (let i = 0; i &lt; m.length; i++)
    for (let j = 0; j &lt; m[0].length; j++)
      if (m[i][j] === 0) { zeroRows.add(i); zeroCols.add(j); }
  // Pass 2: zero out the flagged rows and columns
  for (let i = 0; i &lt; m.length; i++)
    for (let j = 0; j &lt; m[0].length; j++)
      if (zeroRows.has(i) || zeroCols.has(j)) m[i][j] = 0;
  return m;
}
// [[1,1,1],[1,0,1],[1,1,1]] =&gt; [[1,0,1],[0,0,0],[1,0,1]]</code></pre>
<p><strong>Two separate passes are required:</strong> if we zero during scan, we create false positives in rows/columns that originally had no zeros.</p>
<p>Space: O(m+n) for the Sets. For O(1) space, use the matrix's first row and column as flag arrays.</p>`
        },
        {
          q: "Print the boundary elements of a matrix.",
          a: `<p>Boundary elements form the outer ring: first row, last column, last row (reversed), first column (reversed). For a 1x1 matrix, just the single element. For 1-row or 1-col, handle carefully to avoid double-printing.</p>
<p>Traverse: right along row 0, down along last column (skip row 0), left along last row (skip last col), up along first column (skip first and last rows).</p>
<p>This is similar to the spiral order first layer — same four directions, print once.</p>
<pre><code>function boundaryTraversal(m) {
  const res = [], rows = m.length, cols = m[0].length;
  for (let j = 0; j &lt; cols; j++) res.push(m[0][j]);            // top row
  for (let i = 1; i &lt; rows; i++) res.push(m[i][cols - 1]);    // right col
  if (rows &gt; 1) for (let j = cols-2; j &gt;= 0; j--) res.push(m[rows-1][j]); // bottom row
  if (cols &gt; 1) for (let i = rows-2; i &gt; 0; i--) res.push(m[i][0]);       // left col
  return res;
}
// [[1,2,3],[4,5,6],[7,8,9]] =&gt; [1,2,3,6,9,8,7,4]</code></pre>
<p><strong>Guards on rows and cols</strong> prevent double-printing corners in 1-row or 1-column matrices.</p>
<p>For a 3×3 matrix: top(1,2,3) + right(6,9) + bottom(8,7) + left(4) = outer 8 elements.</p>`
        },
        {
          q: "Find the saddle point in a matrix.",
          a: `<p>A saddle point is an element that is the <strong>minimum in its row</strong> AND the <strong>maximum in its column</strong>. Named after the saddle shape which has a minimum in one direction and maximum in the other.</p>
<p>For each row, find the minimum value and its column position. Then check if that column-position element is the max of its column.</p>
<p>Saddle points don't always exist. When they do, they represent equilibrium points in game theory (minimax theorem).</p>
<pre><code>function saddlePoint(m) {
  for (let i = 0; i &lt; m.length; i++) {
    const minVal = Math.min(...m[i]);        // row minimum
    const j = m[i].indexOf(minVal);          // column of row-min
    const colMax = Math.max(...m.map(r =&gt; r[j])); // max of that column
    if (minVal === colMax) return { row: i, col: j, value: minVal };
  }
  return null; // no saddle point
}
// [[3,4,2],[1,5,3],[4,2,0]] =&gt; saddle at (2,2) value=0? Let's verify...
// [[3,1,6],[2,5,4]] =&gt; row0 min=1(col1), col1 max=max(1,5)=5≠1 =&gt; no saddle</code></pre>
<p><strong>A matrix can have at most one saddle point</strong> (if it exists in a matrix with distinct elements).</p>
<p>In game theory, saddle points represent optimal strategies in zero-sum games where no player benefits from changing strategy.</p>`
        },
        {
          q: "Multiply two matrices.",
          a: `<p>Matrix multiplication C = A × B requires A to be m×k and B to be k×n. Result C is m×n. Element C[i][j] = dot product of row i of A with column j of B.</p>
<p>Three nested loops: outer two iterate result position (i,j), inner loop k computes the dot product by summing products of A[i][k] * B[k][j].</p>
<p>Standard algorithm is O(m*k*n). Strassen's algorithm reduces to O(n^2.81) — practical for very large matrices.</p>
<pre><code>function multiply(a, b) {
  const m = a.length, k = a[0].length, n = b[0].length;
  const res = Array.from({length: m}, () =&gt; Array(n).fill(0));
  for (let i = 0; i &lt; m; i++)
    for (let j = 0; j &lt; n; j++)
      for (let p = 0; p &lt; k; p++)
        res[i][j] += a[i][p] * b[p][j];
  return res;
}
// [[1,2],[3,4]] x [[5,6],[7,8]] =&gt; [[19,22],[43,50]]</code></pre>
<p><strong>Prerequisite:</strong> number of columns in A must equal number of rows in B. Result dimensions: (rows of A) × (cols of B).</p>
<p>Matrix multiplication is NOT commutative: A×B ≠ B×A in general. But it IS associative: (A×B)×C = A×(B×C).</p>`
        },
        {
          q: "Set matrix zeroes in-place using O(1) extra space.",
          a: `<p>The challenge is zeroing rows/columns without using O(m+n) extra space to track which rows/columns contain zeros.</p>
<p>Solution: use the first row and first column as markers. Scan the matrix and mark zero positions in the first row/column. Then apply zeros based on those markers.</p>
<p>Track separately whether the first row and first column themselves need to be zeroed — because they serve a dual purpose as markers.</p>
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
}</code></pre>
<p><strong>Two-pass approach:</strong> first pass marks, second pass zeroes. O(1) extra space (only two booleans).</p>
<p>The order matters: apply the body zeroes (using markers) BEFORE zeroing the first row/column (the markers themselves).</p>`
        },
        {
          q: "Rotate a matrix 90 degrees clockwise.",
          a: `<p>In-place 90° clockwise rotation: first transpose the matrix (swap m[i][j] with m[j][i]), then reverse each row.</p>
<p>Transposing flips the matrix along its main diagonal. Reversing each row then converts a counter-clockwise rotation into clockwise.</p>
<p>This is O(n²) time and O(1) space — no extra matrix needed.</p>
<pre><code>function rotate90(m) {
  const n = m.length;
  // Step 1: Transpose (swap i,j with j,i)
  for (let i = 0; i &lt; n; i++)
    for (let j = i + 1; j &lt; n; j++)
      [m[i][j], m[j][i]] = [m[j][i], m[i][j]];
  // Step 2: Reverse each row
  m.forEach(row =&gt; row.reverse());
  return m;
}
// [[1,2,3],[4,5,6],[7,8,9]] =&gt; [[7,4,1],[8,5,2],[9,6,3]]</code></pre>
<p><strong>Anti-clockwise rotation:</strong> reverse each row first, THEN transpose (swap steps).</p>
<p>180° rotation: either apply 90° twice, or reverse entire matrix then reverse each row.</p>`
        },
        {
          q: "Print a matrix in spiral order.",
          a: `<p>Use four boundary variables (top, bottom, left, right) that shrink as each layer is traversed: right along top, down along right, left along bottom, up along left.</p>
<p>After each direction, shrink the corresponding boundary. Check that boundaries haven't crossed before each traversal direction to handle non-square matrices.</p>
<p>This peels off one "ring" of the matrix at a time, working inward.</p>
<pre><code>function spiralOrder(m) {
  const res = [];
  let t = 0, b = m.length - 1, l = 0, r = m[0].length - 1;
  while (t &lt;= b &amp;&amp; l &lt;= r) {
    for (let i = l; i &lt;= r; i++) res.push(m[t][i]); t++;
    for (let i = t; i &lt;= b; i++) res.push(m[i][r]); r--;
    if (t &lt;= b) { for (let i = r; i &gt;= l; i--) res.push(m[b][i]); b--; }
    if (l &lt;= r) { for (let i = b; i &gt;= t; i--) res.push(m[i][l]); l++; }
  }
  return res;
}
// [[1,2,3],[4,5,6],[7,8,9]] =&gt; [1,2,3,6,9,8,7,4,5]</code></pre>
<p><strong>Boundary checks</strong> after top++ and right-- prevent double-printing middle row/column in non-square matrices.</p>
<p>This pattern generalizes to any m×n matrix, not just square ones.</p>`
        },
        {
          q: "Find the number of islands in a binary matrix.",
          a: `<p>An island is a group of connected 1s (horizontally and vertically adjacent). Use DFS/BFS: when a '1' is found, increment count and flood-fill all connected 1s to 0 (to mark as visited).</p>
<p>This is a classic graph connectivity problem on a grid — same pattern as connected components in an undirected graph.</p>
<p>Time O(m*n) — each cell is visited at most once. Space O(m*n) in worst case for the recursion stack.</p>
<pre><code>function numIslands(grid) {
  if (!grid.length) return 0;
  let count = 0;
  function dfs(i, j) {
    if (i &lt; 0 || i &gt;= grid.length || j &lt; 0 || j &gt;= grid[0].length) return;
    if (grid[i][j] !== '1') return;
    grid[i][j] = '0'; // mark visited
    dfs(i+1,j); dfs(i-1,j); dfs(i,j+1); dfs(i,j-1);
  }
  for (let i = 0; i &lt; grid.length; i++)
    for (let j = 0; j &lt; grid[0].length; j++)
      if (grid[i][j] === '1') { count++; dfs(i, j); }
  return count;
}
// [["1","1","0"],["0","1","0"],["0","0","1"]] =&gt; 2</code></pre>
<p><strong>Flood-fill marks visited cells</strong> by changing '1' to '0' — no extra visited array needed.</p>
<p>For immutable input, use a separate visited boolean array or Union-Find instead of modifying the grid.</p>`
        },
        {
          q: "Find all paths from top-left to bottom-right of a matrix.",
          a: `<p>In a matrix where you can only move RIGHT or DOWN, there are exactly C(m+n-2, m-1) unique paths. Enumerate them using DFS/backtracking.</p>
<p>At each cell, try going right (if possible) and going down (if possible). When reaching (m-1, n-1), add the current path to results.</p>
<p>Path count grows exponentially — for large matrices, just count paths (DP) rather than enumerate them.</p>
<pre><code>function allPaths(grid) {
  const m = grid.length, n = grid[0].length, paths = [];
  function dfs(i, j, path) {
    if (i === m-1 &amp;&amp; j === n-1) { paths.push([...path, grid[i][j]]); return; }
    path.push(grid[i][j]);
    if (i + 1 &lt; m) dfs(i+1, j, path);
    if (j + 1 &lt; n) dfs(i, j+1, path);
    path.pop(); // backtrack
  }
  dfs(0, 0, []);
  return paths;
}
// 2x2 grid: paths from (0,0) to (1,1) — 2 paths
// 3x3 grid: 6 paths (C(4,2)=6)</code></pre>
<p><strong>Backtrack after each recursion</strong> (path.pop()) to restore state — classic backtracking pattern.</p>
<p>For just counting paths (not enumerating): DP with dp[i][j] = dp[i-1][j] + dp[i][j-1]. O(n²) time, O(1) space.</p>`
        },
        {
          q: "Find the maximum sum path in a matrix from top-left to bottom-right.",
          a: `<p>At each cell, you can move right or down. Use DP: dp[i][j] = max sum to reach (i,j) = grid[i][j] + max(dp[i-1][j], dp[i][j-1]).</p>
<p>Fill the first row (can only come from left) and first column (can only come from above) as base cases, then fill remaining cells.</p>
<p>This is the classic path DP problem — foundation for many interview questions about grid navigation.</p>
<pre><code>function maxSumPath(grid) {
  const m = grid.length, n = grid[0].length;
  const dp = Array.from({length: m}, (_, i) =&gt;
    Array.from({length: n}, (_, j) =&gt; grid[i][j]));
  for (let i = 1; i &lt; m; i++) dp[i][0] += dp[i-1][0];
  for (let j = 1; j &lt; n; j++) dp[0][j] += dp[0][j-1];
  for (let i = 1; i &lt; m; i++)
    for (let j = 1; j &lt; n; j++)
      dp[i][j] += Math.max(dp[i-1][j], dp[i][j-1]);
  return dp[m-1][n-1];
}
// [[1,3,1],[1,5,1],[4,2,1]] =&gt; 12 (path 1→3→5→1→1)</code></pre>
<p><strong>DP recurrence:</strong> dp[i][j] = grid[i][j] + max(coming from above, coming from left).</p>
<p>Reconstruct the actual path by tracing back from dp[m-1][n-1] — at each step go to whichever neighbor had the larger dp value.</p>`
        },
        {
          q: "Search in a rotated sorted matrix.",
          a: `<p>A row-sorted matrix where each row's first element is greater than the previous row's last can be treated as a 1D sorted array. Use binary search by mapping 1D index to 2D coordinates.</p>
<p>Map mid = (left+right)/2 to row = mid/n and col = mid%n where n is the number of columns.</p>
<p>This gives true O(log(m*n)) binary search on a matrix.</p>
<pre><code>function searchMatrix(matrix, target) {
  if (!matrix.length) return false;
  const m = matrix.length, n = matrix[0].length;
  let left = 0, right = m * n - 1;
  while (left &lt;= right) {
    const mid = Math.floor((left + right) / 2);
    const val = matrix[Math.floor(mid / n)][mid % n];
    if (val === target) return true;
    if (val &lt; target) left = mid + 1;
    else right = mid - 1;
  }
  return false;
}
// matrix=[[1,3,5,7],[10,11,16,20],[23,30,34,60]], target=3 =&gt; true</code></pre>
<p><strong>Key mapping:</strong> <code>row = Math.floor(mid/n), col = mid%n</code> converts 1D binary search index to 2D matrix position.</p>
<p>This only works for matrices where rows are individually sorted AND the first element of each row > last element of previous row.</p>`
        },
        {
          q: "Find the minimum cost to fill a grid path.",
          a: `<p>In a weighted grid where each cell has a cost, find the path from top-left to bottom-right with minimum total cost. Moving right or down only.</p>
<p>DP: dp[i][j] = minimum cost to reach cell (i,j) = grid[i][j] + min(dp[i-1][j], dp[i][j-1]).</p>
<p>This is "Minimum Path Sum" (LeetCode 64) — the cost variant of the max-sum/count-paths grid problems.</p>
<pre><code>function minPathSum(grid) {
  const m = grid.length, n = grid[0].length;
  for (let i = 0; i &lt; m; i++)
    for (let j = 0; j &lt; n; j++) {
      if (i === 0 &amp;&amp; j === 0) continue;
      const fromTop  = i &gt; 0 ? grid[i-1][j] : Infinity;
      const fromLeft = j &gt; 0 ? grid[i][j-1] : Infinity;
      grid[i][j] += Math.min(fromTop, fromLeft);
    }
  return grid[m-1][n-1];
}
// [[1,3,1],[1,5,1],[4,2,1]] =&gt; 7 (1+3+1+1+1)</code></pre>
<p><strong>Modifies grid in-place</strong> to save space. Copy the grid first if original must be preserved.</p>
<p>For graphs with arbitrary movement (not just right/down), use Dijkstra's algorithm with a priority queue instead.</p>`
        },
        {
          q: "Count the number of unique paths in a grid with obstacles.",
          a: `<p>Standard unique paths DP, modified: if a cell contains an obstacle (1), set dp[i][j] = 0 (can't reach that cell). Otherwise use the normal recurrence.</p>
<p>Base case: if start or end has an obstacle, return 0 immediately.</p>
<p>This is the "Unique Paths II" problem — same DP as before but with blocked cells.</p>
<pre><code>function uniquePathsWithObstacles(grid) {
  const m = grid.length, n = grid[0].length;
  if (grid[0][0] === 1 || grid[m-1][n-1] === 1) return 0;
  const dp = Array.from({length: m}, () =&gt; Array(n).fill(0));
  dp[0][0] = 1;
  for (let i = 0; i &lt; m; i++)
    for (let j = 0; j &lt; n; j++) {
      if (i === 0 &amp;&amp; j === 0) continue;
      if (grid[i][j] === 1) { dp[i][j] = 0; continue; }
      dp[i][j] = (i &gt; 0 ? dp[i-1][j] : 0) + (j &gt; 0 ? dp[i][j-1] : 0);
    }
  return dp[m-1][n-1];
}
// [[0,0,0],[0,1,0],[0,0,0]] =&gt; 2 (obstacle blocks one path)</code></pre>
<p><strong>Obstacle = dp value 0</strong> naturally blocks paths through that cell from contributing to subsequent calculations.</p>
<p>Space can be optimized to O(n) using a 1D DP array since each row only depends on the previous row.</p>`
        },
        {
          q: "Flatten a 2D matrix to a 1D array in row-major order.",
          a: `<p>Row-major order: elements are read left-to-right, top-to-bottom. Flattening converts a 2D array to a 1D array following this order.</p>
<p>In JavaScript, Array.flat() handles this in one line. For arbitrary depth nesting, use Infinity as the argument.</p>
<p>The element at position (i, j) in an m×n matrix maps to 1D index i*n + j — useful for implementing 2D arrays in languages without native 2D support.</p>
<pre><code>// Modern approach:
function flattenMatrix(matrix) {
  return matrix.flat();
}

// Manual approach (row-major):
function flattenManual(matrix) {
  const result = [];
  for (const row of matrix)
    for (const val of row)
      result.push(val);
  return result;
}
// [[1,2,3],[4,5,6],[7,8,9]] =&gt; [1,2,3,4,5,6,7,8,9]

// 1D index to 2D: row = Math.floor(idx/n), col = idx % n
// 2D to 1D: idx = row * n + col</code></pre>
<p><strong>Row-major order</strong> (C/JS) vs column-major order (Fortran/MATLAB) differ in which dimension varies fastest.</p>
<p>The 2D-to-1D index formula <code>i*n+j</code> is essential knowledge for implementing matrix operations efficiently in typed arrays.</p>`
        },
        {
          q: "Find the longest increasing path in a matrix.",
          a: `<p>DFS with memoization: from each cell, try all 4 directions and take the longest path. Cache results to avoid recomputing.</p>
<p>Since we can only move to strictly increasing cells, there are no cycles — the graph is a DAG, so memoization is valid.</p>
<p>Time O(m*n) with memoization — each cell computed exactly once. Without memoization: O(4^(m*n)) in worst case.</p>
<pre><code>function longestIncreasingPath(matrix) {
  const m = matrix.length, n = matrix[0].length;
  const memo = Array.from({length: m}, () =&gt; Array(n).fill(0));
  const dirs = [[0,1],[0,-1],[1,0],[-1,0]];
  function dfs(i, j) {
    if (memo[i][j]) return memo[i][j];
    memo[i][j] = 1;
    for (const [di, dj] of dirs) {
      const ni = i + di, nj = j + dj;
      if (ni &gt;= 0 &amp;&amp; ni &lt; m &amp;&amp; nj &gt;= 0 &amp;&amp; nj &lt; n &amp;&amp; matrix[ni][nj] &gt; matrix[i][j])
        memo[i][j] = Math.max(memo[i][j], 1 + dfs(ni, nj));
    }
    return memo[i][j];
  }
  let max = 0;
  for (let i = 0; i &lt; m; i++)
    for (let j = 0; j &lt; n; j++)
      max = Math.max(max, dfs(i, j));
  return max;
}
// [[9,9,4],[6,6,8],[2,1,1]] =&gt; 4 (path 1,2,6,9)</code></pre>
<p><strong>Check matrix[ni][nj] &gt; matrix[i][j]</strong> (strictly greater) ensures we only move to larger values — prevents cycles.</p>
<p>Memoization gives huge speedup: without it, paths from high-value cells would be recomputed for every starting point.</p>`
        },
        {
          q: "Check if a given matrix is symmetric.",
          a: `<p>A matrix is symmetric if it equals its own transpose: m[i][j] === m[j][i] for all i, j. Only square matrices can be symmetric.</p>
<p>Check only the upper triangle (i &lt; j) against the lower triangle — no need to check the diagonal (always equal to itself) or both sides.</p>
<p>Symmetric matrices arise in many applications: adjacency matrices of undirected graphs, covariance matrices in statistics.</p>
<pre><code>function isSymmetric(m) {
  const n = m.length;
  if (m.some(row =&gt; row.length !== n)) return false; // must be square
  for (let i = 0; i &lt; n; i++)
    for (let j = i + 1; j &lt; n; j++)
      if (m[i][j] !== m[j][i]) return false;
  return true;
}
// [[1,2,3],[2,5,4],[3,4,7]] =&gt; true
// [[1,2,3],[2,5,4],[3,5,7]] =&gt; false (m[1][2]=4, m[2][1]=5)</code></pre>
<p><strong>Only check j &gt; i</strong> — the upper triangle. Checking j &lt; i would be redundant (testing swapped pairs already checked).</p>
<p>An undirected graph with n vertices has a symmetric adjacency matrix — each edge (u,v) appears in both m[u][v] and m[v][u].</p>`
        },
        {
          q: "Find Pascal's triangle as a 2D matrix.",
          a: `<p>Pascal's triangle in matrix form: row i contains Binomial coefficients C(i,0), C(i,1), ..., C(i,i). Each interior element is the sum of the two elements above it.</p>
<p>Generate iteratively: row 0 is [1], each subsequent row starts and ends with 1, and interior elements sum from the row above.</p>
<p>Pascal's triangle contains many patterns: row sums are powers of 2, Fibonacci appears diagonally, Sierpinski triangle emerges from odd numbers.</p>
<pre><code>function generatePascal(numRows) {
  const triangle = [];
  for (let i = 0; i &lt; numRows; i++) {
    const row = [1];
    const prev = triangle[i - 1] || [];
    for (let j = 1; j &lt; i; j++) row.push(prev[j-1] + prev[j]);
    if (i &gt; 0) row.push(1);
    triangle.push(row);
  }
  return triangle;
}
// generatePascal(5) =&gt;
// [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]</code></pre>
<p><strong>Access any element:</strong> triangle[row][col] = C(row, col) = row! / (col! * (row-col)!).</p>
<p>Row 0 has 1 element, row 1 has 2, row n has n+1. Total elements in first n rows: n*(n+1)/2.</p>`
        },
        {
          q: "Find the maximum element in each row and column.",
          a: `<p>For row maxima: iterate each row and use Math.max with spread. For column maxima: transpose then do row maxima, or use a reduce over all rows for each column index.</p>
<p>Finding both row and column maxima is useful in saddle point detection and game theory matrix problems.</p>
<p>Time O(m*n) for both operations — each cell is visited once or twice.</p>
<pre><code>function rowAndColMaxima(matrix) {
  const rowMax = matrix.map(row =&gt; Math.max(...row));
  const n = matrix[0].length;
  const colMax = Array.from({length: n}, (_, j) =&gt;
    Math.max(...matrix.map(row =&gt; row[j]))
  );
  return { rowMax, colMax };
}
// [[1,5,2],[3,4,6],[7,2,1]] =&gt;
// rowMax: [5,6,7]
// colMax: [7,5,6]</code></pre>
<p><strong>Math.max(...row)</strong> spreads the array as arguments. For very large rows (>100k elements), use reduce to avoid stack overflow from excessive arguments.</p>
<p>A saddle point is where an element is both the row minimum AND column maximum — exists at their intersection.</p>`
        },
        {
          q: "Implement a sparse matrix and its operations.",
          a: `<p>A sparse matrix has mostly zero entries. Storing it as a full 2D array wastes memory. Use a dictionary/map storing only non-zero entries as {row,col: value} pairs.</p>
<p>For matrix-vector multiplication with a sparse matrix, only iterate the non-zero entries — dramatically faster than iterating all m*n cells.</p>
<p>Real-world sparse matrices appear in graph adjacency, finite element methods, and machine learning (bag-of-words, recommendation systems).</p>
<pre><code>class SparseMatrix {
  constructor(rows, cols) {
    this.rows = rows; this.cols = cols;
    this.data = new Map(); // key: "r,c" =&gt; value
  }
  set(r, c, val) {
    if (val !== 0) this.data.set(\`\${r},\${c}\`, val);
    else this.data.delete(\`\${r},\${c}\`); // remove zeros
  }
  get(r, c) { return this.data.get(\`\${r},\${c}\`) || 0; }
  
  // Multiply by dense vector
  multiply(vec) {
    const result = Array(this.rows).fill(0);
    for (const [key, val] of this.data) {
      const [r, c] = key.split(',').map(Number);
      result[r] += val * vec[c];
    }
    return result;
  }
}
// 1000x1000 matrix with 100 non-zeros: O(100) multiply vs O(10^6)</code></pre>
<p><strong>Sparse representation saves memory:</strong> O(nnz) space where nnz is number of non-zero elements, vs O(m*n) for dense.</p>
<p>CSR (Compressed Sparse Row) format is even more efficient for sequential row access, used in NumPy/SciPy.</p>`
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
          a: `<p>Define a base case: when n is 0 (or less), return 0. Otherwise, return n added to the result of the function called with n-1. This "unwinds" the problem down to the base case.</p>
<p>The call stack builds up n+1 frames, each holding a pending addition. When n=0 is reached, the stack unwinds: 1+2+3+...+n.</p>
<p>Formula n*(n+1)/2 gives the same result in O(1) — recursion here is for illustration, not efficiency.</p>
<pre><code>function sumN(n) {
  if (n &lt;= 0) return 0;       // base case
  return n + sumN(n - 1);    // recursive case
}
// sumN(5) =&gt; 5+4+3+2+1+0 = 15
// Call stack: sumN(5)-&gt;sumN(4)-&gt;sumN(3)-&gt;sumN(2)-&gt;sumN(1)-&gt;sumN(0)</code></pre>
<p><strong>Stack depth = n:</strong> For large n (like 100000), this causes a stack overflow. Iterative or tail-call optimized versions should be used for large inputs.</p>
<p>Tail call optimization (TCO): pass an accumulator argument to allow optimizing compilers to reuse the stack frame. JS engines rarely implement TCO.</p>`
        },
        {
          q: "Implement a power function using recursion.",
          a: `<p>Naive recursion: base * power(base, exp-1) repeats n times — O(n). Fast exponentiation cuts this to O(log n) by squaring: if exp is even, compute half = power(base, exp/2), return half*half.</p>
<p>This halves the problem size each time, giving log n recursive calls. The same technique powers cryptography and modular arithmetic.</p>
<p>Handle edge cases: exp=0 returns 1 (any number^0=1), negative exponents return 1/power(base, -exp).</p>
<pre><code>function power(base, exp) {
  if (exp === 0) return 1;
  if (exp &lt; 0) return 1 / power(base, -exp);
  if (exp % 2 === 0) {
    const half = power(base, exp / 2);
    return half * half;          // O(log n)
  }
  return base * power(base, exp - 1); // odd: reduce to even
}
// power(2, 10) =&gt; 1024 in only 4 recursive calls!</code></pre>
<p><strong>Fast exponentiation (binary exponentiation):</strong> O(log n) calls instead of O(n) — crucial for computing e.g. 2^1000000.</p>
<p>Note: <code>half * half</code> stores the result in a variable — computing power(base, exp/2) twice would negate the O(log n) benefit.</p>`
        },
        {
          q: "Count the digits of a number using recursion.",
          a: `<p>Each recursive call removes one digit by dividing by 10. When the number is less than 10, only one digit remains — that's the base case returning 1.</p>
<p>Handle negative numbers by taking absolute value first. Handle 0 as a special case (0 has 1 digit).</p>
<p>Non-recursive: Math.floor(Math.log10(Math.abs(n))) + 1 works too, but recursion nicely illustrates the idea.</p>
<pre><code>function countDigits(n) {
  n = Math.abs(n);
  if (n === 0) return 1;        // edge case: 0 has 1 digit
  if (n &lt; 10) return 1;         // base case: single digit
  return 1 + countDigits(Math.floor(n / 10));
}
// countDigits(12345) =&gt; 5
// countDigits(-999)  =&gt; 3
// countDigits(0)     =&gt; 1</code></pre>
<p><strong>Integer division strips last digit:</strong> Math.floor(n/10) removes the rightmost digit each call (e.g., 12345 → 1234 → 123 → 12 → 1).</p>
<p>String shortcut: n.toString().length gives the same result, but recursion builds intuition for the divide-and-reduce pattern.</p>`
        },
        {
          q: "Reverse a string using recursion.",
          a: `<p>Take the last character and concatenate the reversed version of everything except that character. When only one (or zero) characters remain, return as-is.</p>
<p>Alternatively: take the first character and append it AFTER the reversed rest. Both approaches build the reversed string character by character.</p>
<p>JavaScript strings are immutable, so each concatenation creates a new string — total O(n²) operations. Array reverse or array join approach is more efficient.</p>
<pre><code>function reverseStr(s) {
  if (s.length &lt;= 1) return s;
  return s[s.length - 1] + reverseStr(s.slice(0, -1));
}
// reverseStr("hello") =&gt; "olleh"
// Call chain: "o" + rev("hell") =&gt; "o"+"l"+rev("hel") =&gt; ...

// Two-pointer iterative (O(n) time):
function reverseStrIter(s) {
  return s.split('').reverse().join('');
}</code></pre>
<p><strong>Recursive string reverse is O(n²)</strong> due to string concatenation and slicing at each level — fine for small strings and learning, inefficient for production.</p>
<p>The two-pointer approach (swapping chars from both ends) is O(n) and doesn't create intermediate strings.</p>`
        },
        {
          q: "Check if a string is a palindrome using recursion.",
          a: `<p>A palindrome reads the same forwards and backwards. Recursively: if first and last characters match, the string is a palindrome if and only if the inner substring (without those characters) is also a palindrome.</p>
<p>Base cases: empty string and single character are always palindromes. Early return false when first and last don't match — no need to recurse deeper.</p>
<p>Common pre-processing: lowercase and remove non-alphanumeric characters before checking (e.g., "A man, a plan, a canal: Panama").</p>
<pre><code>function isPalinRec(s) {
  if (s.length &lt;= 1) return true;                // base cases
  if (s[0] !== s[s.length - 1]) return false;    // early exit
  return isPalinRec(s.slice(1, -1));              // recurse inward
}
// isPalinRec("racecar") =&gt; true
// isPalinRec("hello")   =&gt; false
// isPalinRec("a")       =&gt; true</code></pre>
<p><strong>Two-pointer approach avoids slice overhead:</strong> pass lo/hi indices instead of slicing strings — O(n) time, O(n) space (stack) vs O(n²) with slicing.</p>
<p>For practical use, <code>s === s.split('').reverse().join('')</code> is the clearest one-liner in JavaScript.</p>`
        },
        {
          q: "Convert a binary number to decimal using recursion.",
          a: `<p>Each binary digit represents a power of 2. Process from the least significant digit (rightmost): extract with mod 10, multiply by 2^position, recurse to next digit.</p>
<p>Alternative: process from the most significant digit using string representation — each level doubles the accumulated value and adds the current digit.</p>
<p>parseInt('1010', 2) = 10 — JavaScript has a built-in, but implementing it recursively builds strong fundamentals.</p>
<pre><code>// Process from LSB (using number arithmetic)
function binToDec(bin, pos = 0) {
  if (bin === 0) return 0;
  return (bin % 10) * Math.pow(2, pos) + binToDec(Math.floor(bin / 10), pos + 1);
}
// bin=1101: 1*1 + 0*2 + 1*4 + 1*8 = 13

// Process from MSB (using string)
function binToDecStr(s, i = 0) {
  if (i === s.length) return 0;
  return parseInt(s[i]) * Math.pow(2, s.length - 1 - i) + binToDecStr(s, i + 1);
}
// binToDecStr("1101") =&gt; 13</code></pre>
<p><strong>Bit-shifting approach:</strong> accumulate with <code>result = result * 2 + bit</code> scan left-to-right — simpler and avoids Math.pow.</p>
<p>parseInt with radix 2 is O(n) and handles all edge cases. The recursive version is purely for practice.</p>`
        },
        {
          q: "Print numbers 1 to N without using any loop.",
          a: `<p>Recursion replaces loops — call the function for a smaller input, let it complete, then do your work (or vice versa for reverse order). The call stack acts as the loop counter.</p>
<p>Order matters: call FIRST then print to get 1→N (ascending). Print FIRST then call to get N→1 (descending).</p>
<p>Beyond printing numbers, this pattern applies to traversals, processing sequences, and any "do this N times" operation without explicit loops.</p>
<pre><code>// Print 1 to N (ascending: recurse first, print after)
function print1ToN(n) {
  if (n &lt; 1) return;           // base case
  print1ToN(n - 1);            // go to smallest first
  console.log(n);              // print on the way back up
}
// print1ToN(5) outputs: 1 2 3 4 5

// Print N to 1 (descending: print first, recurse after)
function printNTo1(n) {
  if (n &lt; 1) return;
  console.log(n);              // print first
  printNTo1(n - 1);            // then recurse down
}
// printNTo1(5) outputs: 5 4 3 2 1</code></pre>
<p><strong>Ascending vs descending:</strong> the only difference is whether you print before or after the recursive call — a key insight for all recursive output problems.</p>
<p>This also works for generating sequences, building strings in specific orders, and implementing undo/redo-style operations.</p>`
        },
        {
          q: "Find the sum of an array using recursion.",
          a: `<p>The recursive insight: sum of an array = first element + sum of the remaining elements. Keep reducing the array until it's empty (base case returning 0).</p>
<p>This is the pattern underlying many array operations: reduce them to a smaller subproblem by handling one element at a time.</p>
<p>Using arr.slice(1) creates a new array each call — O(n) per call, O(n²) total. Passing an index is much more efficient.</p>
<pre><code>// Slice-based (simple but O(n²))
function sumArray(arr) {
  if (arr.length === 0) return 0;
  return arr[0] + sumArray(arr.slice(1));
}

// Index-based (O(n) time, no extra arrays)
function sumArrayIdx(arr, i = 0) {
  if (i === arr.length) return 0;
  return arr[i] + sumArrayIdx(arr, i + 1);
}
// sumArrayIdx([1,2,3,4,5]) =&gt; 15</code></pre>
<p><strong>Always prefer the index-based approach</strong> for performance — same recursion depth O(n) but avoids O(n) slice operations at each level.</p>
<p>Array methods: arr.reduce((sum, x) =&gt; sum + x, 0) is the idiomatic JavaScript way. Recursion builds understanding of what reduce does internally.</p>`
        },
        {
          q: "Find the GCD of two numbers using recursion.",
          a: `<p>The Euclidean algorithm: GCD(a, b) = GCD(b, a mod b). This works because any common divisor of a and b also divides their remainder (a mod b). Repeat until remainder is 0.</p>
<p>It's one of the oldest algorithms (dating to 300 BCE) and runs in O(log min(a,b)) — very efficient. The number of steps is bounded by the Fibonacci sequence.</p>
<p>LCM(a, b) = a * b / GCD(a, b) — use GCD to compute LCM efficiently.</p>
<pre><code>function gcd(a, b) {
  if (b === 0) return a;      // base case: GCD(a, 0) = a
  return gcd(b, a % b);      // recursive: GCD(a,b) = GCD(b, a%b)
}
// gcd(48, 18) =&gt; gcd(18,12) =&gt; gcd(12,6) =&gt; gcd(6,0) =&gt; 6
// gcd(100, 75) =&gt; gcd(75,25) =&gt; gcd(25,0) =&gt; 25

function lcm(a, b) {
  return (a / gcd(a, b)) * b;  // avoid overflow vs a*b/gcd
}</code></pre>
<p><strong>Tail recursive:</strong> the recursive call is the last operation — ideal for tail call optimization. Can be easily converted to iteration.</p>
<p>Extended Euclidean algorithm also returns x, y such that ax + by = gcd(a,b) — used in modular inverse and cryptography.</p>`
        },
        {
          q: "Compare iterative vs recursive Fibonacci and explain the difference.",
          a: `<p>Recursive Fibonacci is elegant but extremely inefficient — it has O(2^n) time complexity because it recalculates the same subproblems many times. For fib(50), this means trillions of calls!</p>
<p>Iterative Fibonacci uses just two variables and a loop — O(n) time, O(1) space. Memoized recursion is O(n) time and O(n) space but uses the recursive structure.</p>
<p>This comparison perfectly illustrates why "clever" recursive code can be dangerously slow and why thinking about time complexity matters.</p>
<pre><code>// Recursive: O(2^n) time, O(n) stack space
function fibRec(n) {
  return n &lt;= 1 ? n : fibRec(n-1) + fibRec(n-2);
}
// fibRec(40) makes ~300 million calls!

// Iterative: O(n) time, O(1) space
function fibIter(n) {
  let a = 0, b = 1;
  for (let i = 2; i &lt;= n; i++) [a, b] = [b, a + b];
  return n === 0 ? a : b;
}
// fibIter(40) = 102334155 (instant)</code></pre>
<p><strong>Memoization bridges the gap:</strong> add a cache to recursion to get O(n) time with the recursive style.</p>
<p>Golden ratio formula: fib(n) ≈ φⁿ/√5 where φ=1.618... — but floating-point imprecision makes exact computation impossible for large n.</p>`
        },
        {
          q: "Solve N-Queens problem using recursion and backtracking.",
          a: `<p>Place N queens on an N×N chessboard so no two queens attack each other. Use backtracking: try placing a queen in each column of the current row; if it's safe, recurse to the next row; if not, backtrack.</p>
<p>Track attacked positions using three sets: columns, left-diagonals (row-col), right-diagonals (row+col).</p>
<p>N-Queens is the classic backtracking problem demonstrating constraint propagation and state-space search.</p>
<pre><code>function solveNQueens(n) {
  const result = [], queens = Array(n).fill(-1);
  const cols = new Set(), d1 = new Set(), d2 = new Set();
  function bt(row) {
    if (row === n) {
      result.push(queens.map((c, r) =&gt; '.'.repeat(c) + 'Q' + '.'.repeat(n-c-1)));
      return;
    }
    for (let col = 0; col &lt; n; col++) {
      if (cols.has(col) || d1.has(row-col) || d2.has(row+col)) continue;
      cols.add(col); d1.add(row-col); d2.add(row+col); queens[row] = col;
      bt(row + 1);
      cols.delete(col); d1.delete(row-col); d2.delete(row+col);
    }
  }
  bt(0);
  return result;
}
// solveNQueens(4) =&gt; 2 solutions</code></pre>
<p><strong>Diagonal check trick:</strong> cells on the same left-diagonal share (row-col), same right-diagonal share (row+col).</p>
<p>N=8 has 92 solutions, N=12 has 14,200. Count grows super-exponentially but backtracking makes it tractable.</p>`
        },
        {
          q: "Generate all subsets using recursion (power set).",
          a: `<p>For each element, make a binary choice: include it or exclude it. This gives 2^n subsets. Recursively build all subsets by branching at each element.</p>
<p>Alternatively, treat subset index 0 to 2^n-1 as a bitmask where each bit decides include/exclude.</p>
<p>Backtracking version: add current subset to results, then try adding each remaining element.</p>
<pre><code>function subsets(nums) {
  const result = [];
  function bt(start, current) {
    result.push([...current]);
    for (let i = start; i &lt; nums.length; i++) {
      current.push(nums[i]);
      bt(i + 1, current);
      current.pop(); // backtrack
    }
  }
  bt(0, []);
  return result;
}
// subsets([1,2,3]) =&gt; [[],[1],[1,2],[1,2,3],[1,3],[2],[2,3],[3]]</code></pre>
<p><strong>Push current BEFORE recursing</strong> — this captures subsets of each length (empty set at the start).</p>
<p>For duplicate elements: sort first, then skip nums[i] === nums[i-1] when i > start to avoid duplicate subsets.</p>`
        },
        {
          q: "Solve the Sudoku puzzle using backtracking.",
          a: `<p>Fill empty cells (0) one by one. For each cell, try digits 1-9. If a digit is valid (not in same row, column, or 3×3 box), place it and recurse. If recursion fails, backtrack and try next digit.</p>
<p>This constraint satisfaction approach prunes the search space heavily — most invalid placements are caught early.</p>
<p>Sudoku is the ideal backtracking practice problem: clear constraints, finite domain, unique solution (usually).</p>
<pre><code>function solveSudoku(board) {
  function isValid(r, c, num) {
    const box = val =&gt; board[Math.floor(r/3)*3+Math.floor(val/3)][Math.floor(c/3)*3+val%3];
    for (let i = 0; i &lt; 9; i++) {
      if (board[r][i] == num || board[i][c] == num || box(i) == num) return false;
    }
    return true;
  }
  function solve() {
    for (let r = 0; r &lt; 9; r++) for (let c = 0; c &lt; 9; c++) {
      if (board[r][c] !== '.') continue;
      for (let d = 1; d &lt;= 9; d++) {
        if (!isValid(r, c, d)) continue;
        board[r][c] = String(d);
        if (solve()) return true;
        board[r][c] = '.'; // backtrack
      }
      return false; // no valid digit found
    }
    return true; // all cells filled
  }
  solve();
}</code></pre>
<p><strong>Key backtracking pattern:</strong> place value, recurse, always restore ('.' back) on failure.</p>
<p>Optimization: use sets for rows/cols/boxes instead of scanning — O(1) validity check instead of O(9) scan per digit trial.</p>`
        },
        {
          q: "Find all permutations of a string using recursion.",
          a: `<p>Swap the current character with each character from current position to end, recurse for the next position, then swap back (restore). When position reaches end, save the permutation.</p>
<p>Time O(n! * n) — unavoidable since there are n! permutations each requiring O(n) to record. Space O(n) for recursion depth.</p>
<p>Classic backtracking with the swap-swap-back pattern to generate all n! orderings.</p>
<pre><code>function permutations(str) {
  const result = [], arr = str.split('');
  function bt(start) {
    if (start === arr.length) { result.push(arr.join('')); return; }
    for (let i = start; i &lt; arr.length; i++) {
      [arr[start], arr[i]] = [arr[i], arr[start]]; // swap
      bt(start + 1);
      [arr[start], arr[i]] = [arr[i], arr[start]]; // undo swap (backtrack)
    }
  }
  bt(0);
  return result;
}
// permutations("abc") =&gt; ["abc","acb","bac","bca","cba","cab"]</code></pre>
<p><strong>Avoiding duplicates:</strong> sort first and add <code>if (i > start && arr[i] === arr[start]) continue</code> to skip duplicate characters.</p>
<p>For "aab": without dedup you get 6 permutations, with dedup you get 3 unique: "aab","aba","baa".</p>`
        },
        {
          q: "Implement depth-first search (DFS) using recursion.",
          a: `<p>DFS explores as deep as possible along each branch before backtracking. Recursive implementation uses the call stack naturally — each recursive call goes one level deeper into the graph/tree.</p>
<p>Mark nodes as visited before recursing to prevent infinite loops in graphs with cycles.</p>
<p>DFS is used for: topological sort, cycle detection, strongly connected components, maze solving, and graph connectivity.</p>
<pre><code>// DFS on adjacency list graph
function dfs(graph, start) {
  const visited = new Set(), result = [];
  function explore(node) {
    if (visited.has(node)) return;
    visited.add(node);
    result.push(node);
    for (const neighbor of graph[node] || []) explore(neighbor);
  }
  explore(start);
  return result;
}
// graph = {0:[1,2], 1:[0,3], 2:[0], 3:[1]}
// dfs(graph, 0) =&gt; [0, 1, 3, 2] (order may vary)</code></pre>
<p><strong>DFS visits nodes depth-first</strong> — goes as deep as possible along one path before exploring siblings.</p>
<p>For trees (no cycles), the visited set is unnecessary. For graphs with cycles, it's essential to prevent infinite recursion.</p>`
        },
        {
          q: "Implement the Merge Sort algorithm recursively.",
          a: `<p>Merge sort: divide the array in half, recursively sort each half, then merge the two sorted halves. The merge step is key — two sorted arrays can be merged in O(n) using two pointers.</p>
<p>Guaranteed O(n log n) time in all cases (unlike QuickSort which is O(n²) worst case). Stable sort — maintains relative order of equal elements.</p>
<p>Excellent for linked lists and external sorting (when data doesn't fit in memory).</p>
<pre><code>function mergeSort(arr) {
  if (arr.length &lt;= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid));
  const merged = [];
  let i = 0, j = 0;
  while (i &lt; left.length &amp;&amp; j &lt; right.length)
    merged.push(left[i] &lt;= right[j] ? left[i++] : right[j++]);
  return [...merged, ...left.slice(i), ...right.slice(j)];
}
// mergeSort([5,2,8,1,9,3]) =&gt; [1,2,3,5,8,9]</code></pre>
<p><strong>Guaranteed O(n log n)</strong> — log n levels of recursion, each level doing O(n) total work in merge.</p>
<p>Space O(n) for the merged arrays (can't be done in O(1) without complex in-place merging tricks).</p>`
        },
        {
          q: "Calculate the depth of a binary tree using recursion.",
          a: `<p>The depth (height) of a binary tree is the number of nodes along the longest path from root to leaf. Recursively: 1 + max(depth(left), depth(right)). Empty tree has depth 0.</p>
<p>This is one of the simplest and most elegant recursive tree algorithms — perfectly illustrates how tree problems decompose into subproblems.</p>
<p>Used in: checking balanced BST, calculating tree diameter, solving range-of-vision problems.</p>
<pre><code>function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}
// Balanced tree [1,[2,[4,null,null],[5,null,null]],[3,[6,null,null],null]]:
// maxDepth =&gt; 3
// Skewed tree (like linked list): maxDepth =&gt; n</code></pre>
<p><strong>Elegant recursive structure:</strong> height = 1 (current node) + max(left height, right height).</p>
<p>Iterative version uses BFS with a queue, counting levels. Both are O(n) time and O(n) space.</p>`
        },
        {
          q: "Find all combinations that sum to a target (Combination Sum).",
          a: `<p>Backtracking: at each step, try including the current candidate (can reuse it in unbounded variant), recurse, then exclude it. When remaining sum reaches 0, record the combination.</p>
<p>Pruning: if current element > remaining sum, skip remaining candidates (assuming sorted array).</p>
<p>This covers the "combination sum" family of problems — one of the most common backtracking interview questions.</p>
<pre><code>function combinationSum(candidates, target) {
  candidates.sort((a, b) =&gt; a - b);
  const result = [];
  function bt(start, remaining, path) {
    if (remaining === 0) { result.push([...path]); return; }
    for (let i = start; i &lt; candidates.length; i++) {
      if (candidates[i] &gt; remaining) break; // pruning
      path.push(candidates[i]);
      bt(i, remaining - candidates[i], path); // i (not i+1) allows reuse
      path.pop(); // backtrack
    }
  }
  bt(0, target, []);
  return result;
}
// combinationSum([2,3,6,7], 7) =&gt; [[2,2,3],[7]]</code></pre>
<p><strong>Pass i (not i+1)</strong> to allow reusing the same element. Pass i+1 for combinations without repetition.</p>
<p>For unique combinations (each number used exactly once), sort and add <code>if (i > start && candidates[i] === candidates[i-1]) continue</code>.</p>`
        },
        {
          q: "Solve the coin change problem using recursion with memoization.",
          a: `<p>Top-down DP via memoization: recursively try each coin, subtract from amount, memoize results to avoid redundant work. Cache maps amount → min coins.</p>
<p>Without memoization, complexity is O(coins^amount) — exponential. WITH memoization it's O(amount * coins) — polynomial.</p>
<p>This exemplifies the difference between pure recursion and dynamic programming (memoized recursion).</p>
<pre><code>function coinChangeMemo(coins, amount) {
  const memo = new Map();
  function dp(remaining) {
    if (remaining === 0) return 0;
    if (remaining &lt; 0) return -1;
    if (memo.has(remaining)) return memo.get(remaining);
    let min = Infinity;
    for (const coin of coins) {
      const result = dp(remaining - coin);
      if (result !== -1) min = Math.min(min, result + 1);
    }
    const ans = min === Infinity ? -1 : min;
    memo.set(remaining, ans);
    return ans;
  }
  return dp(amount);
}
// coinChangeMemo([1,5,11], 15) =&gt; 3 (11+3*1 or 5+5+5?)</code></pre>
<p><strong>memo.set() before return</strong> caches results so identical subproblems aren't solved more than once.</p>
<p>Top-down (memoized recursion) and bottom-up DP produce the same result. Bottom-up often has better cache performance.</p>`
        },
        {
          q: "Flatten a nested array using recursion.",
          a: `<p>Check each element: if it's an array, recursively flatten it; if not, add it to the result. This handles arbitrary nesting depth.</p>
<p>ES2019+ has Array.flat(Infinity) built-in for this. The recursive implementation is great for understanding recursion and type checking.</p>
<p>Handle the base case carefully: check if each element is an array (Array.isArray) before recursing.</p>
<pre><code>function flatten(arr) {
  return arr.reduce((result, item) =&gt; {
    return result.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}
// flatten([1,[2,[3,[4]],5],6]) =&gt; [1,2,3,4,5,6]

// With depth limit:
function flattenDepth(arr, depth = Infinity) {
  if (depth === 0) return arr.slice();
  return arr.reduce((res, x) =&gt;
    res.concat(Array.isArray(x) ? flattenDepth(x, depth-1) : x), []);
}
// arr.flat(1) =&gt; [1,[2,[3,[4]]],5,6]  (one level only)</code></pre>
<p><strong>Array.isArray(item)</strong> is the correct check — typeof would return "object" for both arrays and plain objects.</p>
<p>For performance on very deep nesting, iterative approaches using a stack avoid potential call stack overflow.</p>`
        },
        {
          q: "Check if a binary tree is balanced using recursion.",
          a: `<p>A balanced binary tree has no node where left and right subtree heights differ by more than 1. Efficient check: return the height if balanced, -1 (sentinel) if not.</p>
<p>Naive approach: check balance at each node separately — O(n log n). Optimized: compute height and check balance in one pass — O(n).</p>
<p>Useful for AVL trees and checking if a BST needs rebalancing after modifications.</p>
<pre><code>function isBalanced(root) {
  function height(node) {
    if (!node) return 0;
    const lh = height(node.left);
    const rh = height(node.right);
    if (lh === -1 || rh === -1) return -1; // propagate imbalance
    if (Math.abs(lh - rh) &gt; 1) return -1; // this node is unbalanced
    return 1 + Math.max(lh, rh);
  }
  return height(root) !== -1;
}
// Balanced [1,2,3,4,5] =&gt; true
// Skewed [1,2,null,3,null,4] =&gt; false</code></pre>
<p><strong>Return -1 as sentinel</strong> for imbalance — once detected, it propagates up through all ancestor calls immediately.</p>
<p>Using -1 as sentinel avoids needing a separate boolean flag, keeping the function clean and single-purpose.</p>`
        },
        {
          q: "Generate all valid IP addresses from a string of digits.",
          a: `<p>An IPv4 address has 4 parts, each a number from 0-255. Backtrack: try placing dots after 1, 2, or 3 digits from each position. Validate each segment (no leading zeros except "0", value ≤ 255).</p>
<p>Exactly 3 dots must be placed. When 4 segments exist and all digits are used, save the IP.</p>
<p>A classic backtracking problem with string segmentation and validation.</p>
<pre><code>function restoreIpAddresses(s) {
  const result = [];
  function bt(start, parts) {
    if (parts.length === 4) {
      if (start === s.length) result.push(parts.join('.'));
      return;
    }
    for (let len = 1; len &lt;= 3; len++) {
      if (start + len &gt; s.length) break;
      const seg = s.slice(start, start + len);
      if (seg.length &gt; 1 &amp;&amp; seg[0] === '0') break; // no leading zeros
      if (parseInt(seg) &gt; 255) break;
      parts.push(seg);
      bt(start + len, parts);
      parts.pop();
    }
  }
  bt(0, []);
  return result;
}
// restoreIpAddresses("25525511135") =&gt; ["255.255.11.135","255.255.111.35"]</code></pre>
<p><strong>Early termination:</strong> break (not continue) when segment exceeds 255 — since we're iterating lengths in order (1,2,3), longer segments will only be larger.</p>
<p>Valid IP strings have 4-12 characters (1.1.1.1 to 255.255.255.255). Can prune upfront if string length is outside this range.</p>`
        },
        {
          q: "Implement a recursive solution for the Rat in a Maze problem.",
          a: `<p>Find a path from (0,0) to (n-1,n-1) in a grid where 1 = passable cell, 0 = wall. Backtrack: try each direction, mark cell as visited, recurse, unmark if recursion fails.</p>
<p>Can provide all paths (backtracking) or just check if one exists (simpler DFS).</p>
<p>This is the foundation of maze-solving algorithms used in games, robotics, and network routing.</p>
<pre><code>function ratMaze(maze, n) {
  const sol = Array.from({length: n}, () =&gt; Array(n).fill(0));
  const dirs = [[0,1],[1,0],[0,-1],[-1,0]];
  function solve(r, c) {
    if (r === n-1 &amp;&amp; c === n-1) { sol[r][c] = 1; return true; }
    if (r &lt; 0 || r &gt;= n || c &lt; 0 || c &gt;= n) return false;
    if (maze[r][c] === 0 || sol[r][c] === 1) return false;
    sol[r][c] = 1; // mark path
    for (const [dr, dc] of dirs) if (solve(r+dr, c+dc)) return true;
    sol[r][c] = 0; // backtrack (unmark)
    return false;
  }
  return solve(0, 0) ? sol : null;
}
// Returns solution matrix or null if no path exists</code></pre>
<p><strong>sol[r][c] = 1 marks, sol[r][c] = 0 unmarks</strong> — the classic backtracking "mark and unmark" pattern.</p>
<p>Check <code>sol[r][c] === 1</code> to avoid revisiting cells already in the current path (prevents cycles).</p>`
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
          a: `<p>Sorting approach: sort descending (O(n log n)) and return index k-1. Min-heap of size k approach: maintain a heap of the k largest seen so far — root is always the kth largest. O(n log k) time.</p>
<p>QuickSelect (partition-based): like QuickSort but recurse only on the side containing the kth position. Average O(n), worst O(n²). Most efficient on average.</p>
<p>For streaming data where you can't store all elements, the min-heap of size k is the standard approach.</p>
<pre><code>// Sorting approach: O(n log n)
function kthLargest(arr, k) {
  arr.sort((a, b) =&gt; b - a);
  return arr[k - 1];
}

// QuickSelect: O(n) average
function kthLargestQS(arr, k) {
  const target = arr.length - k; // kth largest = (n-k)th smallest
  function select(lo, hi) {
    const pivot = arr[hi];
    let i = lo;
    for (let j = lo; j &lt; hi; j++) if (arr[j] &lt;= pivot) [arr[i], arr[j]] = [arr[j], arr[i++]];
    [arr[i], arr[hi]] = [arr[hi], arr[i]];
    if (i === target) return arr[i];
    return i &lt; target ? select(i + 1, hi) : select(lo, i - 1);
  }
  return select(0, arr.length - 1);
}
// kthLargest([3,2,1,5,6,4], 2) =&gt; 5</code></pre>
<p><strong>QuickSelect partition:</strong> exactly like QuickSort but only recurse on the partition containing the target index. Expected O(n) average case.</p>
<p>Built-in sort is simplest and usually fast enough. Use QuickSelect when performance is critical and extra O(log n) overhead matters.</p>`
        },
        {
          q: "Merge two sorted arrays into one sorted array.",
          a: `<p>Two-pointer technique: maintain a pointer for each sorted array. Compare the current elements, push the smaller one to the result, advance that pointer. Append any remaining elements at the end.</p>
<p>O(m+n) time and space — optimal since every element must be examined and placed at least once.</p>
<p>This merge step is the core of Merge Sort and also used in merging k sorted lists (use a min-heap for k-way merge).</p>
<pre><code>function mergeSorted(a, b) {
  let res = [], i = 0, j = 0;
  while (i &lt; a.length &amp;&amp; j &lt; b.length)
    res.push(a[i] &lt;= b[j] ? a[i++] : b[j++]);
  return [...res, ...a.slice(i), ...b.slice(j)];
}
// mergeSorted([1,3,5],[2,4,6]) =&gt; [1,2,3,4,5,6]
// mergeSorted([1,2],[3,4,5]) =&gt; [1,2,3,4,5]</code></pre>
<p><strong>Append remaining elements</strong> with spread — when one array is exhausted, the remaining other array is already sorted and can be appended directly.</p>
<p>In-place merge of two sorted arrays in O(n) space is trivial. In-place with O(1) space is complex (requires block-swap or gap method).</p>`
        },
        {
          q: "Implement binary search.",
          a: `<p>Binary search cuts the search space in half with each comparison. Requires a sorted array. Use lo=0, hi=n-1, mid=(lo+hi)/2. If arr[mid]===target return mid; if too small, search right; if too large, search left.</p>
<p>O(log n) time — each iteration halves the range. Searching 1 billion elements requires at most 30 comparisons!</p>
<p>Common pitfall: integer overflow in mid calculation. Use <code>lo + Math.floor((hi-lo)/2)</code> instead of <code>Math.floor((lo+hi)/2)</code> in languages with integer overflow.</p>
<pre><code>function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo &lt;= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (arr[mid] === target) return mid;
    arr[mid] &lt; target ? lo = mid + 1 : hi = mid - 1;
  }
  return -1; // not found
}
// binarySearch([1,3,5,7,9,11], 7) =&gt; 3 (index)
// binarySearch([1,3,5,7,9,11], 6) =&gt; -1</code></pre>
<p><strong>Loop condition is lo &lt;= hi</strong> (not lo &lt; hi) — ensures we check the remaining single element when lo === hi.</p>
<p>Template: when looking for the first/last position, use lo &lt; hi with hi=mid or lo=mid+1 patterns (lower/upper bound variants).</p>`
        },
        {
          q: "Find a peak element in an array.",
          a: `<p>A peak element is greater than both its neighbors (boundary elements are considered greater than their imaginary out-of-bounds neighbors). At least one peak always exists.</p>
<p>Linear scan O(n): find first element where arr[i] > arr[i+1]. Binary search O(log n): if arr[mid] &lt; arr[mid+1], peak must be in right half (ascending side); otherwise left half.</p>
<p>This works because if the slope is positive (arr[mid] &lt; arr[mid+1]), a peak MUST exist in the right portion — it can't slope up forever.</p>
<pre><code>function findPeak(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo &lt; hi) {
    const mid = Math.floor((lo + hi) / 2);
    arr[mid] &lt; arr[mid + 1] ? lo = mid + 1 : hi = mid;
  }
  return lo; // returns INDEX of peak, arr[lo] is peak value
}
// findPeak([1,2,3,1]) =&gt; 2 (index, value 3)
// findPeak([3,4,3,2,1]) =&gt; 1 (index, value 4)</code></pre>
<p><strong>Binary search guarantee:</strong> going toward the higher neighbor always leads to a peak — if arr[mid] &lt; arr[mid+1], right half MUST have a peak.</p>
<p>For 2D matrix peak: find peak in middle column, then compare with neighbors to decide which row to recurse on — O(n log m).</p>`
        },
        {
          q: "Search in a rotated sorted array.",
          a: `<p>A rotated sorted array has one sorted half and one that wraps around. Modified binary search: first identify which half is sorted, then determine if the target lies within that sorted half.</p>
<p>If arr[lo] &lt;= arr[mid]: left half is sorted. Check if target is in [arr[lo], arr[mid]). Otherwise search right. Reverse logic for right half.</p>
<p>Handles rotation by checking which half is linearly sorted before deciding the search direction.</p>
<pre><code>function searchRotated(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo &lt;= hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (arr[mid] === target) return mid;
    if (arr[lo] &lt;= arr[mid]) { // left half is sorted
      target &gt;= arr[lo] &amp;&amp; target &lt; arr[mid] ? hi = mid - 1 : lo = mid + 1;
    } else {                   // right half is sorted
      target &gt; arr[mid] &amp;&amp; target &lt;= arr[hi] ? lo = mid + 1 : hi = mid - 1;
    }
  }
  return -1;
}
// searchRotated([4,5,6,7,0,1,2], 0) =&gt; 4</code></pre>
<p><strong>Identify the sorted half first:</strong> compare arr[lo] with arr[mid]. If arr[lo] ≤ arr[mid], left half is sorted. Then check if target lies in that sorted range.</p>
<p>For duplicates: <code>arr[lo] === arr[mid]</code> is ambiguous (both halves could be sorted). Must advance lo++ — worst case degrades to O(n).</p>`
        },
        {
          q: "Count occurrences of a number in a sorted array.",
          a: `<p>Use binary search to find the leftmost (first) position of target, then the rightmost (last) position. Count = last - first + 1. Two binary searches = O(2 log n) = O(log n).</p>
<p>Left bound: when arr[mid] === target, move hi to mid-1 to search for earlier occurrence. Right bound: when arr[mid] === target, move lo to mid+1.</p>
<p>Linear scan O(n) is simpler but binary search is O(log n) — crucial for large sorted datasets.</p>
<pre><code>function countOccurrences(arr, target) {
  function bound(isFirst) {
    let lo = 0, hi = arr.length - 1, res = -1;
    while (lo &lt;= hi) {
      const mid = Math.floor((lo + hi) / 2);
      if (arr[mid] === target) {
        res = mid;
        isFirst ? hi = mid - 1 : lo = mid + 1; // push left or right
      } else arr[mid] &lt; target ? lo = mid + 1 : hi = mid - 1;
    }
    return res;
  }
  const f = bound(true), l = bound(false);
  return f === -1 ? 0 : l - f + 1;
}
// countOccurrences([1,2,2,2,3,4], 2) =&gt; 3 (indices 1,2,3)</code></pre>
<p><strong>Left bound:</strong> when equal, record and continue LEFT (hi=mid-1). <strong>Right bound:</strong> when equal, record and continue RIGHT (lo=mid+1).</p>
<p>The same bound functions also solve "first occurrence" and "last occurrence" queries — building blocks for many binary search problems.</p>`
        },
        {
          q: "Find the integer square root of a number using binary search.",
          a: `<p>Binary search in range [0, n]: find the largest integer mid such that mid*mid &lt;= n. Track the answer in a variable and continue searching right until the condition fails.</p>
<p>This is the "find the last valid answer" binary search template — update the answer when condition holds, then continue optimizing.</p>
<p>Newton's method converges even faster (quadratic convergence) but binary search is simpler and guaranteed O(log n).</p>
<pre><code>function mySqrt(n) {
  if (n &lt; 2) return n;
  let lo = 1, hi = Math.floor(n / 2), ans = 1;
  while (lo &lt;= hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    if (mid * mid &lt;= n) { ans = mid; lo = mid + 1; } // record and search right
    else hi = mid - 1;
  }
  return ans;
}
// mySqrt(16) =&gt; 4, mySqrt(17) =&gt; 4 (floor), mySqrt(0) =&gt; 0</code></pre>
<p><strong>Search upper half only:</strong> sqrt(n) &lt;= n/2 for n &gt;= 2, so hi = Math.floor(n/2) is a tighter bound that halves the initial search space.</p>
<p>For exact square root check: verify ans*ans === n after finding ans. Use BigInt for large numbers to avoid floating-point issues.</p>`
        },
        {
          q: "Find the first bad version in a sequence of versions.",
          a: `<p>Binary search: if version mid is bad, the first bad version is at mid or earlier (search left); if good, it's after mid (search right). When lo === hi, we've found it.</p>
<p>Using lo &lt; hi (not lo &lt;= hi) with hi=mid when bad prevents overshooting the answer. When the loop exits, lo === hi === first bad version.</p>
<p>This minimizes API calls — log n calls instead of n calls for linear scan. Real-world analogy: git bisect for finding a breaking commit.</p>
<pre><code>function firstBadVersion(n, isBad) {
  let lo = 1, hi = n;
  while (lo &lt; hi) {
    const mid = lo + Math.floor((hi - lo) / 2);
    isBad(mid) ? hi = mid : lo = mid + 1;
    // bad: first bad is at mid or left (hi=mid)
    // good: first bad is after mid (lo=mid+1)
  }
  return lo; // lo === hi is the answer
}
// versions [G,G,B,B,B], n=5 =&gt; firstBadVersion(5) =&gt; 3</code></pre>
<p><strong>hi=mid (not mid-1)</strong> when mid is bad — we can't exclude mid as a candidate. Loop exits when lo===hi, which is the first bad version.</p>
<p>This pattern (search for leftmost valid position) is also used for: first time something is true in an ordered predicate, lower bound insertion point.</p>`
        },
        {
          q: "Find the minimum element in a rotated sorted array.",
          a: `<p>The minimum element is the only element that is smaller than its previous element (the rotation point). Binary search: compare arr[mid] with arr[hi] to determine which half contains the minimum.</p>
<p>If arr[mid] &gt; arr[hi]: right half has the wrap-around, minimum is in right half (lo = mid+1). Otherwise minimum is in left half including mid (hi = mid).</p>
<p>This runs in O(log n). For sorted (non-rotated) arrays, mid &lt;= hi always, hi keeps shrinking to index 0 — correct minimum.</p>
<pre><code>function findMin(arr) {
  let lo = 0, hi = arr.length - 1;
  while (lo &lt; hi) {
    const mid = Math.floor((lo + hi) / 2);
    arr[mid] &gt; arr[hi] ? lo = mid + 1 : hi = mid;
    // arr[mid] &gt; arr[hi]: min is in right half (rotation in right)
    // arr[mid] &lt;= arr[hi]: min is in left half including mid
  }
  return arr[lo]; // or return lo for index
}
// findMin([3,4,5,1,2]) =&gt; 1
// findMin([4,5,6,7,0,1,2]) =&gt; 0</code></pre>
<p><strong>Compare with hi, not lo</strong> — comparing arr[mid] with arr[hi] reliably identifies which side has the rotation wrap-around.</p>
<p>If duplicates present (arr[mid] === arr[hi]): can't determine which side, must do hi-- and try again — degrades to O(n) worst case.</p>`
        },
        {
          q: "Find the median of two sorted arrays.",
          a: `<p>Binary search on the smaller array to find the correct partition point where all left elements are ≤ all right elements across both arrays.</p>
<p>For each partition i in array A, the partition j in B is determined automatically: j = (m+n+1)/2 - i. Check cross-conditions: lA ≤ rB and lB ≤ rA.</p>
<p>This achieves O(log(min(m,n))) — much better than merging both arrays and finding the middle O(m+n).</p>
<pre><code>function findMedian(a, b) {
  if (a.length &gt; b.length) [a, b] = [b, a]; // binary search on smaller
  let m = a.length, n = b.length, lo = 0, hi = m;
  while (lo &lt;= hi) {
    let i = Math.floor((lo + hi) / 2);
    let j = Math.floor((m + n + 1) / 2) - i;
    let lA = i === 0 ? -Infinity : a[i-1], rA = i === m ? Infinity : a[i];
    let lB = j === 0 ? -Infinity : b[j-1], rB = j === n ? Infinity : b[j];
    if (lA &lt;= rB &amp;&amp; lB &lt;= rA) {
      let total = m + n;
      return total % 2 ? Math.max(lA, lB) : (Math.max(lA, lB) + Math.min(rA, rB)) / 2;
    }
    lA &gt; rB ? hi = i - 1 : lo = i + 1;
  }
}
// findMedian([1,3],[2]) =&gt; 2
// findMedian([1,2],[3,4]) =&gt; 2.5</code></pre>
<p><strong>Correct partition check:</strong> lA ≤ rB AND lB ≤ rA ensures the partition is valid. Use ±Infinity for edge partitions.</p>
<p>The "combined left half" max is Math.max(lA, lB), the "right half" min is Math.min(rA, rB) — median of even-length total is their average.</p>`
        },
        {
          q: "Find the number of inversions in an array.",
          a: `<p>An inversion is a pair (i, j) where i &lt; j but arr[i] &gt; arr[j]. Brute force O(n²): count all pairs. Efficient O(n log n): count inversions during merge sort — whenever a right element merges before a left element, that's mid-left inversions.</p>
<p>Inversion count measures how "unsorted" an array is. Zero inversions = sorted, n(n-1)/2 inversions = reverse sorted.</p>
<p>The merge-sort approach is elegant: while merging, if right[j] &lt; left[i], all remaining left elements (mid-i of them) form inversions with right[j].</p>
<pre><code>function countInversions(arr) {
  let count = 0;
  function mergeSort(a) {
    if (a.length &lt;= 1) return a;
    const mid = Math.floor(a.length / 2);
    const left = mergeSort(a.slice(0, mid));
    const right = mergeSort(a.slice(mid));
    const merged = [];
    let i = 0, j = 0;
    while (i &lt; left.length &amp;&amp; j &lt; right.length) {
      if (left[i] &lt;= right[j]) merged.push(left[i++]);
      else { merged.push(right[j++]); count += left.length - i; } // inversions!
    }
    return [...merged, ...left.slice(i), ...right.slice(j)];
  }
  mergeSort(arr);
  return count;
}
// countInversions([2,4,1,3,5]) =&gt; 3 (pairs: (2,1),(4,1),(4,3))</code></pre>
<p><strong>count += left.length - i</strong> — when right[j] wins, ALL remaining left elements are larger than it (since left is sorted), forming (left.length - i) inversions at once.</p>
<p>Used in competitive programming, measuring similarity between rankings, and detecting nearly-sorted arrays for adaptive sorting.</p>`
        },
        {
          q: "Implement QuickSort and explain its time complexity.",
          a: `<p>Pick a pivot, partition the array so all elements smaller than pivot go left and larger go right. Recursively sort each partition. The partitioning step is the heart of QuickSort.</p>
<p>Average O(n log n), worst case O(n²) when pivot is always min/max (e.g., sorted array with first-element pivot). Randomized pivot selection avoids worst case in practice.</p>
<p>QuickSort is typically faster than MergeSort in practice due to better cache performance and lower constant factors.</p>
<pre><code>function quickSort(arr, lo = 0, hi = arr.length - 1) {
  if (lo &gt;= hi) return;
  // Lomuto partition: last element as pivot
  let pivot = arr[hi], i = lo;
  for (let j = lo; j &lt; hi; j++)
    if (arr[j] &lt;= pivot) [arr[i], arr[j]] = [arr[j], arr[i++]];
  [arr[i], arr[hi]] = [arr[hi], arr[i]]; // place pivot
  quickSort(arr, lo, i - 1);
  quickSort(arr, i + 1, hi);
}
// quickSort([3,1,4,1,5,9,2,6]) =&gt; [1,1,2,3,4,5,6,9]</code></pre>
<p><strong>Randomized pivot:</strong> swap a random element to position hi before partitioning to avoid worst-case O(n²) on sorted input.</p>
<p>3-way partition (Dutch National Flag) handles duplicates efficiently — equal elements are placed in their final position during partition, not re-sorted.</p>`
        },
        {
          q: "Find the two elements in an array that sum to a target.",
          a: `<p>Two-pointer approach on a SORTED array: start with left=0, right=n-1. If sum matches, done. If sum &lt; target, increment left. If sum &gt; target, decrement right.</p>
<p>This works because the array is sorted — moving left pointer increases sum, moving right decreases it. O(n) after sorting, O(n log n) overall.</p>
<p>HashMap approach: O(n) time, O(n) space — check if (target - num) exists in map for each element.</p>
<pre><code>// Two-pointer O(n log n) time, O(1) space
function twoSum(arr, target) {
  arr.sort((a, b) =&gt; a - b);
  let lo = 0, hi = arr.length - 1;
  while (lo &lt; hi) {
    const sum = arr[lo] + arr[hi];
    if (sum === target) return [arr[lo], arr[hi]];
    sum &lt; target ? lo++ : hi--;
  }
  return null;
}
// twoSum([2,7,11,15], 9) =&gt; [2,7]

// HashMap O(n) time, O(n) space
function twoSumMap(arr, target) {
  const map = new Map();
  for (let i = 0; i &lt; arr.length; i++) {
    const complement = target - arr[i];
    if (map.has(complement)) return [map.get(complement), i]; // return indices
    map.set(arr[i], i);
  }
}</code></pre>
<p><strong>Two-pointer requires a sorted array</strong>. HashMap approach works on unsorted arrays and returns original indices.</p>
<p>For all pairs (not just first match), use nested loops or collect all solutions during the sweep.</p>`
        },
        {
          q: "Implement counting sort.",
          a: `<p>Counting sort works for non-negative integers in a known range [0, k]. Count occurrences of each value, convert counts to positions, then output in sorted order. O(n + k) time and space.</p>
<p>Non-comparison-based — can beat the O(n log n) lower bound for comparison-based sorts when the value range k is small relative to n.</p>
<p>Stable version: accumulate prefix sums for counts, iterate input backwards to place elements — preserves relative order of equal elements.</p>
<pre><code>function countingSort(arr, maxVal) {
  const count = Array(maxVal + 1).fill(0);
  for (const n of arr) count[n]++;
  // Prefix sum (stable sort)
  for (let i = 1; i &lt;= maxVal; i++) count[i] += count[i-1];
  const output = Array(arr.length);
  for (let i = arr.length - 1; i &gt;= 0; i--) {
    output[--count[arr[i]]] = arr[i];
  }
  return output;
}
// countingSort([4,2,2,8,3,3,1], 8) =&gt; [1,2,2,3,3,4,8]</code></pre>
<p><strong>Best when k = O(n):</strong> if the max value is much larger than n, the count array wastes memory and time.</p>
<p>Radix sort uses counting sort as a subroutine on each digit, achieving O(d*(n+k)) for d-digit numbers — excellent for large integer arrays.</p>`
        },
        {
          q: "Search for a word in a 2D grid (word search).",
          a: `<p>For each cell, start DFS/backtracking if the first character matches. At each step, try all 4 directions. Mark cells as visited and unmark on backtrack.</p>
<p>This is a grid backtracking problem — exhaustive search with pruning (stop if current path can't possibly form the word).</p>
<p>Time O(m*n*4^L) where L is word length. Very slow for long words, but pruning on character mismatch makes it fast in practice.</p>
<pre><code>function wordSearch(board, word) {
  const m = board.length, n = board[0].length;
  function dfs(r, c, k) {
    if (k === word.length) return true;
    if (r &lt; 0 || r &gt;= m || c &lt; 0 || c &gt;= n) return false;
    if (board[r][c] !== word[k]) return false;
    const tmp = board[r][c];
    board[r][c] = '#'; // mark visited
    const found = dfs(r+1,c,k+1)||dfs(r-1,c,k+1)||dfs(r,c+1,k+1)||dfs(r,c-1,k+1);
    board[r][c] = tmp; // unmark (backtrack)
    return found;
  }
  for (let r = 0; r &lt; m; r++)
    for (let c = 0; c &lt; n; c++)
      if (dfs(r, c, 0)) return true;
  return false;
}
// board=[["A","B"],["C","D"]] word="AB" =&gt; true</code></pre>
<p><strong>Temporarily mark with '#'</strong> to indicate visited — restore the original character on backtrack to allow other paths to use that cell.</p>
<p>Optimization: check if the word's character frequency exceeds the board's to prune early before even starting DFS.</p>`
        },
        {
          q: "Find the longest consecutive sequence in an unsorted array.",
          a: `<p>Add all numbers to a Set. For each number that is the START of a sequence (num-1 not in set), count how long the consecutive run extends. O(n) time, O(n) space.</p>
<p>The key insight: only start counting from numbers where num-1 is NOT in the set, avoiding redundant counting from mid-sequence.</p>
<p>Sorting approach is O(n log n). The HashSet approach achieves O(n) by eliminating the need to sort.</p>
<pre><code>function longestConsecutive(nums) {
  const set = new Set(nums);
  let maxLen = 0;
  for (const num of set) {
    if (!set.has(num - 1)) { // start of sequence
      let current = num, len = 1;
      while (set.has(current + 1)) { current++; len++; }
      maxLen = Math.max(maxLen, len);
    }
  }
  return maxLen;
}
// longestConsecutive([100,4,200,1,3,2]) =&gt; 4 (sequence: 1,2,3,4)</code></pre>
<p><strong>Only start from sequence beginnings</strong> — ensures each element is visited at most twice O(n) total despite the while loop.</p>
<p>Classic problem showing that a hash set can replace sorting for specific types of order-related queries.</p>`
        },
        {
          q: "Find the kth smallest element in a BST.",
          a: `<p>In-order traversal of a BST produces elements in sorted order (ascending). The kth element visited in in-order is the kth smallest.</p>
<p>Iterative in-order with early termination: traverse left subtree first, then root (decrement counter), then right. Stop when counter reaches 0.</p>
<p>If k is frequently queried, augment BST nodes with subtree size to find kth element in O(log n) without traversal.</p>
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
// BST: [3,1,4,null,2] =&gt; kthSmallest(root, 2) =&gt; 2
// In-order: 1,2,3,4 -&gt; 2nd = 2</code></pre>
<p><strong>In-order BST traversal = sorted order</strong> — kth element = kth smallest. Early return once found avoids unnecessary traversal.</p>
<p>Augmented BST nodes with left-subtree size enable O(log n) kth-smallest queries, useful when the tree is queried many times.</p>`
        },
        {
          q: "Find the intersection of two sorted arrays.",
          a: `<p>Two-pointer approach: start at beginning of both arrays. Advance the pointer of the smaller element. When equal, record the intersection element and advance both.</p>
<p>O(m+n) time, O(1) space (excluding output). This is optimal since you must examine all elements at least once.</p>
<p>For unsorted arrays: use a Set. Insert all elements of arr1 into set, then filter arr2 elements that are in the set.</p>
<pre><code>function intersection(a, b) {
  const result = [];
  let i = 0, j = 0;
  while (i &lt; a.length &amp;&amp; j &lt; b.length) {
    if (a[i] === b[j]) {
      if (!result.length || result[result.length-1] !== a[i])
        result.push(a[i]); // avoid duplicates
      i++; j++;
    } else if (a[i] &lt; b[j]) i++;
    else j++;
  }
  return result;
}
// intersection([1,2,2,3,5],[2,2,4,5]) =&gt; [2,5]</code></pre>
<p><strong>Two-pointer works only on sorted arrays</strong> — both pointers advance together when equal, independently when unequal.</p>
<p>For multiple arrays: intersect pairs sequentially. First intersect A∩B, then result∩C, etc. Result size shrinks with each step.</p>`
        },
        {
          q: "Find the missing number in range 1 to N.",
          a: `<p>Mathematical approach: expected sum = n*(n+1)/2. Subtract actual sum from expected. The difference is the missing number. O(n) time, O(1) space.</p>
<p>XOR approach: XOR all numbers 1 to n, then XOR all array elements. Duplicate XOR-pairs cancel out leaving the missing number.</p>
<p>Binary search approach works on sorted arrays only: check if arr[mid] = mid+1 (1-indexed). If mismatch, missing is in left half; else right half.</p>
<pre><code>// Sum formula: O(n) time, O(1) space
function missingNumber(arr, n) {
  const expected = (n * (n + 1)) / 2;
  return expected - arr.reduce((sum, x) =&gt; sum + x, 0);
}
// missingNumber([3,1,2,5], 5) =&gt; 4

// XOR approach: works without overflow risk
function missingXOR(arr, n) {
  let xor = 0;
  for (let i = 1; i &lt;= n; i++) xor ^= i;
  for (const num of arr) xor ^= num;
  return xor;
}
// Each pair of equal numbers XOR to 0, leaving only the missing one</code></pre>
<p><strong>Sum formula can overflow</strong> for very large n in some languages (JavaScript handles BigInt, but sum formula is usually fine).</p>
<p>XOR approach is elegant and handles overflow-safe operations — pairs cancel: x^x=0, 0^x=x, so the unpaired missing number remains.</p>`
        },
        {
          q: "Find the next greater element for each array element.",
          a: `<p>Monotonic stack approach: traverse right-to-left, maintaining a stack of "candidates for next greater". For each element, pop all elements smaller than it. The new stack top (if any) is its next greater element.</p>
<p>Stack always holds elements in decreasing order — the monotone invariant ensures O(n) total operations (each element pushed and popped at most once).</p>
<p>If no greater element exists to the right, next greater = -1.</p>
<pre><code>function nextGreater(arr) {
  const result = Array(arr.length).fill(-1);
  const stack = []; // stores indices
  for (let i = arr.length - 1; i &gt;= 0; i--) {
    while (stack.length &amp;&amp; arr[stack[stack.length-1]] &lt;= arr[i])
      stack.pop(); // remove smaller elements
    if (stack.length) result[i] = arr[stack[stack.length-1]];
    stack.push(i);
  }
  return result;
}
// nextGreater([2,1,2,4,3]) =&gt; [4,2,4,-1,-1]</code></pre>
<p><strong>Monotonic stack:</strong> stack maintains decreasing order. Each element is pushed/popped once — total O(n) despite the nested while loop.</p>
<p>Circular array variant: traverse 2n indices (mod n) to handle wrapping — the same candidate can appear as next greater after wrapping around.</p>`
        },
        {
          q: "Sort an array of 0s, 1s, and 2s (Dutch National Flag problem).",
          a: `<p>Three-pointer approach: lo=0 (boundary of 0s), mid=0 (current element), hi=n-1 (boundary of 2s). Walk mid pointer forward, swapping 0s to lo and 2s to hi.</p>
<p>When arr[mid]=0: swap with lo and advance both. When arr[mid]=2: swap with hi and decrement hi (don't advance mid, re-check). When arr[mid]=1: just advance mid.</p>
<p>One pass, O(n) time, O(1) space. Generalizes to sorting k distinct values but requires k-1 passes.</p>
<pre><code>function sortColors(arr) {
  let lo = 0, mid = 0, hi = arr.length - 1;
  while (mid &lt;= hi) {
    if (arr[mid] === 0) {
      [arr[lo], arr[mid]] = [arr[mid], arr[lo]];
      lo++; mid++;
    } else if (arr[mid] === 2) {
      [arr[mid], arr[hi]] = [arr[hi], arr[mid]];
      hi--; // don't advance mid, re-examine swapped element
    } else mid++;
  }
}
// sortColors([2,0,2,1,1,0]) =&gt; [0,0,1,1,2,2]</code></pre>
<p><strong>Don't advance mid when swapping with hi</strong> — the element that moved to arr[mid] from the right was unseen; it might be 0, 1, or 2.</p>
<p>Named after Dijkstra's description using Dutch flag colors (red, white, blue = 0, 1, 2). Foundation for 3-way QuickSort.</p>`
        },
        {
          q: "Find the minimum number of platforms needed at a train station.",
          a: `<p>Sort arrival and departure times separately. Use two pointers to simulate time progression. When the next event is an arrival, platforms needed increases; when departure, it decreases.</p>
<p>Track the maximum simultaneous overlap across all intervals — this is the minimum platforms required.</p>
<p>Classic "meeting rooms" / "interval scheduling" problem. Same logic applies to scheduling problems in OS and calendar apps.</p>
<pre><code>function minPlatforms(arrivals, departures) {
  arrivals.sort((a, b) =&gt; a - b);
  departures.sort((a, b) =&gt; a - b);
  let platforms = 0, maxPlatforms = 0;
  let i = 0, j = 0;
  while (i &lt; arrivals.length) {
    if (arrivals[i] &lt; departures[j]) {
      platforms++; i++;          // new train arrives
    } else {
      platforms--; j++;          // a train departs
    }
    maxPlatforms = Math.max(maxPlatforms, platforms);
  }
  return maxPlatforms;
}
// arrivals=[9,9,10,11] departures=[10,12,15,11] =&gt; 3</code></pre>
<p><strong>Key insight:</strong> sort arrivals and departures independently — treat them as separate event streams merged in time order.</p>
<p>If arrivals[i] === departures[j], count departure first (train leaving frees a platform before the new train needs one).</p>`
        },
        {
          q: "Find all triplets in an array that sum to zero (3Sum).",
          a: `<p>Sort the array. For each element (fix it as the first element), use two pointers on the remaining elements to find pairs that sum to its negative.</p>
<p>Skip duplicates to avoid duplicate triplets in the result. If arr[i] > 0, break early — no three positive numbers sum to zero.</p>
<p>O(n²) after sorting. Better than naive O(n³) brute force. This is a direct extension of the 2Sum two-pointer approach.</p>
<pre><code>function threeSum(nums) {
  nums.sort((a, b) =&gt; a - b);
  const result = [];
  for (let i = 0; i &lt; nums.length - 2; i++) {
    if (nums[i] &gt; 0) break;           // no valid triplet possible
    if (i &gt; 0 &amp;&amp; nums[i] === nums[i-1]) continue; // skip duplicate firsts
    let lo = i + 1, hi = nums.length - 1;
    while (lo &lt; hi) {
      const sum = nums[i] + nums[lo] + nums[hi];
      if (sum === 0) {
        result.push([nums[i], nums[lo++], nums[hi--]]);
        while (lo &lt; hi &amp;&amp; nums[lo] === nums[lo-1]) lo++; // skip duplicates
        while (lo &lt; hi &amp;&amp; nums[hi] === nums[hi+1]) hi--;
      } else sum &lt; 0 ? lo++ : hi--;
    }
  }
  return result;
}
// threeSum([-1,0,1,2,-1,-4]) =&gt; [[-1,-1,2],[-1,0,1]]</code></pre>
<p><strong>Skip duplicate outer elements</strong> with <code>i > 0 && nums[i] === nums[i-1]</code>. Skip inner duplicates after finding a valid triplet.</p>
<p>4Sum follows the same pattern: fix two elements with nested loops, then use two pointers for the remaining two — O(n³) overall.</p>`
        },
        {
          q: "Find the smallest positive integer missing from an unsorted array.",
          a: `<p>Place each positive integer in its "correct" index (value v at index v-1) using index-as-hash trick. Then scan for the first index where arr[i] !== i+1: that's the missing positive.</p>
<p>This cyclic sort / index-placement approach is O(n) time, O(1) extra space — elegant because the array itself serves as the hash map.</p>
<p>The answer is always in range [1, n+1] for an n-element array — so we only need to look at indices 0 to n-1.</p>
<pre><code>function firstMissingPositive(nums) {
  const n = nums.length;
  // Phase 1: place each value v at index v-1 if 1 &lt;= v &lt;= n
  for (let i = 0; i &lt; n; i++) {
    while (nums[i] &gt; 0 &amp;&amp; nums[i] &lt;= n &amp;&amp; nums[nums[i]-1] !== nums[i])
      [nums[i], nums[nums[i]-1]] = [nums[nums[i]-1], nums[i]];
  }
  // Phase 2: find first mismatch
  for (let i = 0; i &lt; n; i++)
    if (nums[i] !== i + 1) return i + 1;
  return n + 1; // all 1..n present
}
// firstMissingPositive([3,4,-1,1]) =&gt; 2
// firstMissingPositive([1,2,0])     =&gt; 3</code></pre>
<p><strong>Cyclic sort pattern:</strong> while nums[i] != i+1 and the target slot holds a different value, keep swapping. Integers outside [1,n] are ignored.</p>
<p>The while loop may look O(n²) but each element is placed in its correct position at most once — total O(n) swaps across all iterations.</p>`
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
          a: `<p>Off-by-one errors (OBOEs) are among the most common bugs: your loop runs one iteration too many or too few, or you access index n when you should access n-1.</p>
<p>The key question: should your boundary condition use &lt; or &lt;=, should array index start at 0 or 1, and should you process the last element or stop before it?</p>
<p>Test with edge cases n=0 and n=1 immediately — OBOEs usually reveal themselves at boundaries before they appear in larger inputs.</p>
<pre><code>// Off-by-one in loop (common)
for (let i = 0; i &lt;= arr.length; i++) // bug: should be i &lt; arr.length
  console.log(arr[i]);               // arr[arr.length] is undefined!

// Off-by-one in slice
const first3 = arr.slice(0, 3);  // indices 0,1,2 (NOT including 3)

// Classic: count elements in range [a, b]
const count = b - a + 1; // +1 to include BOTH endpoints

// Verify boundary: does this iterate 3 times for arr=[1,2,3]?
for (let i = 0; i &lt; 3; i++) { /* i = 0, 1, 2 ✓ */ }</code></pre>
<p><strong>Fix checklist:</strong> draw the first and last iteration explicitly. Does the loop body execute the right number of times? Does the last iteration access a valid index?</p>
<p>Defensive technique: replace magic numbers with arr.length, str.length, etc. Use meaningful variable names like <code>lastIdx</code> or <code>endExclusive</code> to communicate intent.</p>`
        },
        {
          q: "How do you debug an infinite loop?",
          a: `<p>An infinite loop runs forever because the termination condition is never reached. This freezes the browser/process and causes high CPU usage. The loop variable isn't being modified, or the condition is always true.</p>
<p>Add a counter with a max limit, use console.log to print the loop variable each iteration, or use DevTools debugger to pause and step through the loop.</p>
<p>In browser: DevTools → Sources → Pause button. In Node.js: use --inspect flag with Chrome DevTools.</p>
<pre><code>// Infinite loop: loop variable not changing
let i = 0;
while (i &lt; 10) {
  console.log(i); // forgot i++, loops forever!
}
// Fix: ensure termination condition advances
while (i &lt; 10) { console.log(i); i++; }

// Infinite loop: wrong comparison
for (let i = 10; i &gt; 0; i++) // bug: i++ grows forever
  console.log(i);
// Fix:
for (let i = 10; i &gt; 0; i--) // decrement toward 0
  console.log(i);

// Safety counter for debugging
let guard = 0;
while (condition) {
  if (++guard &gt; 10000) { console.error('Infinite loop!'); break; }
  // ...loop body
}</code></pre>
<p><strong>Always verify:</strong> is the loop variable moving toward the termination condition? Each iteration MUST change state in a way that eventually makes the condition false.</p>
<p>for...of and .forEach() cannot infinite loop (they naturally terminate). while and for loops with custom conditions are the most common culprits.</p>`
        },
        {
          q: "How do you fix an 'undefined is not a function' error?",
          a: `<p>This TypeError means you're trying to call something that isn't a callable function. The variable exists but holds undefined, null, a string, a number, or a plain object — not a function.</p>
<p>Common causes: typo in method name, calling a property instead of a method, accessing the wrong variable, or a function that returns undefined being chained.</p>
<p>Use typeof to verify before calling, check the variable value with console.log, and verify the API you're using is correct.</p>
<pre><code>// Common causes:
const obj = { greet: 'hello' };
obj.greet();          // TypeError: obj.greet is not a function (it's a string!)

const arr = [1, 2, 3];
arr.find(x =&gt; x &gt; 1);
arr.finds(x =&gt; x &gt; 1); // TypeError: arr.finds is not a function (typo!)

// Fix: verify with typeof
if (typeof fn === 'function') fn();

// Check method existence
if (arr.customMethod) arr.customMethod();

// Check chain return value
const result = getUser(); // maybe returns undefined!
result?.process();        // safe with optional chaining</code></pre>
<p><strong>Debug immediately:</strong> console.log the variable and its type before the failing line. <code>typeof x</code> reveals its type; compare to what you expected.</p>
<p>Prototype chain: calling Array methods on a non-array (e.g., an array-like object) throws this error. Use Array.from() or Array.isArray() to validate first.</p>`
        },
        {
          q: "How do you debug an async/await related bug?",
          a: `<p>Async/await bugs are usually subtle: missing await (returns Promise instead of value), forgotten async keyword (await in non-async function), not handling rejections (silent failures), or incorrect error propagation.</p>
<p>Add console.log before and after await to trace execution flow. Wrap in try/catch to surface errors that would otherwise be silently swallowed.</p>
<p>Always verify that async functions are properly awaited by their callers — calling async fn() without await gives you a Promise object, not the resolved value.</p>
<pre><code>// Bug 1: missing await
async function getUser() {
  const data = fetchData();           // Promise, not data!
  console.log(data.name);            // undefined
}
// Fix:
async function getUser() {
  const data = await fetchData();     // resolved value
  console.log(data.name);            // correct!
}

// Bug 2: missing async keyword
function process() {
  const result = await compute(); // SyntaxError!
}
// Fix: add async
async function process() {
  const result = await compute();
}

// Bug 3: unhandled rejection
async function run() {
  await riskyOp();  // if this throws, error is silent!
}
// Fix:
async function run() {
  try { await riskyOp(); }
  catch(e) { console.error('Failed:', e); }
}</code></pre>
<p><strong>Unhandled Promise rejection detection:</strong> add <code>window.addEventListener('unhandledrejection', e =&gt; console.error(e))</code> globally to catch missed Promise errors.</p>
<p>async/await is syntactic sugar over Promises. When debugging, you can rewrite as .then().catch() chains to understand the exact async flow.</p>`
        },
        {
          q: "How do you fix a scope-related bug?",
          a: `<p>Scope bugs occur when a variable is not accessible where you expect, or when a variable in an outer scope is accidentally modified. Most are caused by using var (function scope) when you need let/const (block scope).</p>
<p>Classic: closures in loops using var — all callbacks share the same variable reference. Using let creates a new binding per iteration.</p>
<p>Use strict mode ('use strict') to catch undeclared variable usage. Use const by default, let only when reassignment is needed, avoid var entirely.</p>
<pre><code>// Var hoisting / loop bug
for (var i = 0; i &lt; 3; i++)
  setTimeout(() =&gt; console.log(i), 100); // prints 3, 3, 3
// Fix: let creates a new i per iteration
for (let i = 0; i &lt; 3; i++)
  setTimeout(() =&gt; console.log(i), 100); // prints 0, 1, 2

// Accidental global variable (in non-strict mode)
function process() {
  result = 42; // forgot 'const'! Creates global variable!
}
// Fix:
function process() {
  const result = 42;
}

// Variable shadowing confusion
const x = 10;
function fn() {
  const x = 20; // shadows outer x, doesn't modify it
  return x;     // returns 20
}</code></pre>
<p><strong>const by default:</strong> JavaScript's const and let are block-scoped. If let vs const causes confusion, console.log the variable's value at declaration and at usage points.</p>
<p>Hoisting: var declarations are hoisted to the top of their function scope (but NOT initialized). Accessing before assignment gives undefined, not a ReferenceError.</p>`
        },
        {
          q: "How does type coercion cause bugs?",
          a: `<p>JavaScript's implicit type coercion converts values to compatible types during operations. This creates surprising behavior when comparing, concatenating, or doing arithmetic with mixed types.</p>
<p>Loose equality (==) performs coercion: 0 == '' is true, null == undefined is true. Strict equality (===) never coerces — use it by default.</p>
<p>The + operator is especially tricky: '5' + 3 = '53' (string concatenation), but '5' - 3 = 2 (numeric subtraction). Use parseInt/parseFloat to be explicit about numeric conversion.</p>
<pre><code>// Coercion surprises
console.log(0 == '');         // true (both falsy, coerced)
console.log(0 == '0');        // true (string '0' coerces to 0)
console.log('' == '0');       // false (!)
console.log(null == undefined); // true (special case)

// Arithmetic coercion
console.log('5' + 3);    // '53' (string concat)
console.log('5' - 3);    // 2    (numeric)
console.log(+'5');        // 5    (unary + coerces to number)
console.log(!!'');        // false (double negation to boolean)

// Fix: always use ===
console.log(0 === '');   // false (correct)
console.log(0 === 0);    // true  (correct)</code></pre>
<p><strong>Always use ===</strong> for comparisons. ESLint rule <code>eqeqeq</code> enforces this automatically. The only valid use of == is <code>x == null</code> to check for both null AND undefined.</p>
<p>Boolean coercion: empty string, 0, null, undefined, NaN, and false are falsy. Everything else (including empty array [] and empty object {}) is truthy.</p>`
        },
        {
          q: "What happens when a function is missing a return statement?",
          a: `<p>In JavaScript, every function that doesn't explicitly return a value returns undefined. This is a silent bug — no error is thrown, but callers receive undefined where they expected a value.</p>
<p>Most dangerous in functions with conditional logic, where one code path returns normally but another path falls through without a return statement.</p>
<p>Functions used for side effects are fine without return. But any function whose return value is used by a caller MUST return a value on every code path.</p>
<pre><code>// Bug: conditional return missing the 'else' case
function getDiscount(user) {
  if (user.isPremium) return 0.20;
  // else: falls through, returns undefined!
}
const discount = getDiscount(regularUser);
const price = 100 * (1 - discount); // 100 * (1 - undefined) = NaN!

// Fix: return on all paths
function getDiscount(user) {
  return user.isPremium ? 0.20 : 0.05;
}

// Arrow function without curly braces returns implicitly:
const add = (a, b) =&gt; a + b;    // implicit return
const broken = (a, b) =&gt; { a + b; } // no return! returns undefined</code></pre>
<p><strong>Arrow function pitfall:</strong> braces {} require an explicit return. Without braces, the expression is returned implicitly. <code>() =&gt; { return x; }</code> vs <code>() =&gt; x</code>.</p>
<p>Static analysis tools (ESLint rule: <code>consistent-return</code>) catch missing returns in functions that sometimes return a value. TypeScript will error on missing returns in typed functions.</p>`
        },
        {
          q: "How can using the wrong operator cause bugs?",
          a: `<p>JavaScript has many operators with similar appearance but very different behavior. The most dangerous wrong-operator bugs are often syntactically valid, so the engine doesn't catch them — the logic is just wrong.</p>
<p>Assignment (=) vs equality (===) is the most common; using = inside an if condition always evaluates to truthy (unless assigning 0/null/undefined). Strict equality checks both value AND type.</p>
<p>Logical &&/|| are short-circuit operators. Nullish coalescing (??) is often more appropriate than || when checking for null/undefined specifically.</p>
<pre><code>// Assignment in condition (usually a bug)
if (x = 5) { }    // always true (assigns 5 to x)
if (x === 5) { }  // comparison (correct)

// || vs ?? for defaults
const volume = userSetting || 50; // bug if userSetting is 0!
const volume = userSetting ?? 50; // correct: only for null/undefined

// &amp; vs &amp;&amp;
if (a &amp; b) { }   // bitwise AND (treats as integers)
if (a &amp;&amp; b) { }  // logical AND (short-circuits)

// String + vs number +
'5' + 3 = '53';  // string concat (wrong if expecting sum)
+('5') + 3 = 8;  // force numeric (correct)</code></pre>
<p><strong>Enable 'no-cond-assign' ESLint rule</strong> to automatically catch accidental assignments inside conditions. Most linters report this as a warning.</p>
<p>Nullish coalescing (??) only treats null/undefined as missing values. Logical OR (||) also treats 0, '', and false as missing — which causes bugs when those are intentional values.</p>`
        },
        {
          q: "How do mutation bugs occur and how do you prevent them?",
          a: `<p>Objects and arrays are passed by REFERENCE in JavaScript. Modifying them inside a function changes the original outside the function. This creates action-at-a-distance bugs that are hard to trace.</p>
<p>The fix is immutability: create a copy before modifying. Shallow copy with spread ({...obj} or [...arr]) works for one level. For nested objects, use structuredClone() or deep copy libraries.</p>
<p>Mutation bugs are especially severe in React (don't mutate state directly) and Redux (always return new objects from reducers).</p>
<pre><code>// Mutation bug
function addItem(arr, item) {
  arr.push(item);  // MUTATES original array!
  return arr;
}
const original = [1, 2, 3];
addItem(original, 4);
console.log(original); // [1, 2, 3, 4] — original changed!

// Fix: return a new array
function addItem(arr, item) { return [...arr, item]; }

// Object mutation bug
function setDefault(config) {
  config.timeout = config.timeout || 3000; // modifies original!
}
// Fix:
function setDefault(config) {
  return { ...config, timeout: config.timeout ?? 3000 };
}

// Deep clone for nested structures
const deepCopy = structuredClone(original); // ES2022, handles nested</code></pre>
<p><strong>Spread creates a shallow copy:</strong> for nested objects, inner objects are still shared. Use structuredClone() or JSON.parse(JSON.stringify(obj)) for deep clones.</p>
<p>Immutability patterns: const prevents reassignment but NOT mutation of object contents. Object.freeze() prevents property mutation (shallow only).</p>`
        },
        {
          q: "How can callback execution order cause bugs?",
          a: `<p>Callbacks execute when their triggering condition completes (timer, event, IO). If you mix synchronous and asynchronous code expecting top-to-bottom order, you will get surprising results.</p>
<p>setTimeout with delay 0 still runs AFTER all synchronous code completes — it's placed in the task queue, not executed immediately.</p>
<p>Solution: use Promises and async/await to express sequential async operations clearly without callback order confusion.</p>
<pre><code>// Unexpected order with callbacks
console.log('1');
setTimeout(() =&gt; console.log('2'), 0); // queued, runs last
console.log('3');
// Output: 1, 3, 2 (not 1, 2, 3)

// Fix: use async/await for sequential operations
async function run() {
  console.log('1');
  await someAsyncTask(); // properly awaited
  console.log('2');      // runs after task completes
  console.log('3');
}</code></pre>
<p><strong>Event loop rule:</strong> setTimeout callback goes to the task queue. It only executes after the current call stack is empty and all microtasks (Promises) are resolved.</p>
<p>For coordinating multiple async operations, use Promise.all() (parallel) or sequential await chains to enforce the intended order.</p>`
        },
        {
          q: "How do you debug a memory leak in JavaScript?",
          a: `<p>Memory leaks occur when objects are no longer needed but still referenced, preventing garbage collection. Common sources: global variables, forgotten event listeners, closures holding references, and detached DOM nodes.</p>
<p>Use browser DevTools Memory tab: take heap snapshots, compare before/after, look for growing allocations. Record heap allocation timeline to spot repeated growth.</p>
<p>Prevention is key: clean up event listeners, use WeakMap/WeakSet for non-essential references, avoid accidental global variables.</p>
<pre><code>// Common leak: event listener not removed
function addListener() {
  const data = new Array(1000000).fill('leak');
  document.addEventListener('click', () =&gt; console.log(data)); // holds data!
}
// Fix: remove listener when done
const handler = () =&gt; console.log(data);
document.addEventListener('click', handler);
// later:
document.removeEventListener('click', handler);</code></pre>
<p><strong>WeakRef and FinalizationRegistry</strong> (ES2021) allow holding weak references that don't prevent garbage collection — useful for caches.</p>
<p>Node.js: use <code>--inspect</code> flag with Chrome DevTools or the <code>heapdump</code> module to take heap snapshots and identify growing memory.</p>`
        },
        {
          q: "What is a race condition and how do you prevent it?",
          a: `<p>A race condition occurs when the behavior of code depends on the timing/order of asynchronous operations, yielding different results on different runs. Classic example: read-modify-write operations on shared state without synchronization.</p>
<p>In JavaScript's single-threaded model, race conditions happen with async operations — two async calls both read a value, modify it, and write back, with the second overwriting the first's change.</p>
<p>Prevention: ensure async operations that depend on each other are properly sequenced with await, or use atomic operations/optimistic locking patterns.</p>
<pre><code>// Race condition: concurrent increments
let counter = 0;
async function increment() {
  const current = counter;        // both reads happen before either write
  await delay(10);
  counter = current + 1;          // second write overwrites first!
}
increment(); increment();
// counter ends up as 1, not 2

// Fix: use sequential operations
async function safeIncrement() {
  await lock.acquire();           // ensure exclusive access
  counter++;
  lock.release();
}</code></pre>
<p><strong>In JS single-threaded environments:</strong> race conditions occur between async operations (await points). Within a synchronous block, no race conditions are possible.</p>
<p>For shared resources across Web Workers, use SharedArrayBuffer with Atomics for proper synchronization.</p>`
        },
        {
          q: "How do you debug a 'Maximum call stack size exceeded' error?",
          a: `<p>This is a stack overflow — infinite or excessively deep recursion. Every function call adds a frame to the call stack; when the limit is exceeded, this error is thrown.</p>
<p>Common causes: missing base case in recursion, mutual recursion without termination, circular data structures, or excessively deep data (deeply nested JSON).</p>
<p>Fix: verify base case is correct and reachable, convert deep recursion to iteration, or use trampolining for tail-recursive functions.</p>
<pre><code>// Stack overflow: missing base case
function factorial(n) {
  return n * factorial(n - 1); // never stops! (missing if n === 0 return 1)
}

// Fix: add base case
function factorial(n) {
  if (n &lt;= 1) return 1;        // base case
  return n * factorial(n - 1);
}

// Iterative: no stack overflow risk
function factorialIter(n) {
  let result = 1;
  for (let i = 2; i &lt;= n; i++) result *= i;
  return result;
}</code></pre>
<p><strong>Debug tip:</strong> print n at the start of your recursive function — if it's growing instead of shrinking toward the base case, you've found the bug.</p>
<p>Node.js default stack depth is ~15,000 frames. Use <code>--stack-size=65536</code> flag to increase it temporarily for debugging.</p>`
        },
        {
          q: "What causes 'Cannot read property of undefined' errors?",
          a: `<p>Attempting to access a property on undefined (or null) throws this error. Common when: data is not yet loaded (async), an array/object is empty, a function returns undefined unexpectedly, or incorrect chaining.</p>
<p>Optional chaining (?.) prevents the error by short-circuiting to undefined instead of throwing. For older code, use explicit null checks.</p>
<p>Destructuring with defaults is another clean prevention pattern: const { name = 'default' } = user ?? {}.</p>
<pre><code>// Bug: accessing property of undefined
const user = null;
console.log(user.name); // TypeError!

// Fix 1: explicit check
if (user) console.log(user.name);

// Fix 2: optional chaining
console.log(user?.name);        // undefined (no throw)
console.log(user?.address?.city); // safe deep access

// Fix 3: nullish coalescing
const name = user?.name ?? 'Anonymous';</code></pre>
<p><strong>Optional chaining (?.):</strong> if the left side is null/undefined, short-circuits to undefined instead of throwing. Available in ES2020+.</p>
<p>Always validate API responses — network data can have missing fields. Use schema validation (Zod, Joi) for robust data validation at boundaries.</p>`
        },
        {
          q: "How do you use console methods effectively for debugging?",
          a: `<p>Beyond console.log, JavaScript provides console.table (for arrays/objects), console.group/groupEnd (for hierarchical output), console.time/timeEnd (for performance measurement), and console.trace (for call stack output).</p>
<p>console.error and console.warn provide semantic meaning and different visual styling in DevTools. console.assert is useful for quick assertions during debugging.</p>
<p>For production code, remove or disable console statements — they impact performance and expose internal details.</p>
<pre><code>// Table output for arrays
console.table([{name:'Alice',age:30},{name:'Bob',age:25}]);

// Timing code blocks
console.time('sort');
arr.sort(); // time this operation
console.timeEnd('sort');  // prints: sort: 2.341ms

// Call stack trace
function deep() { console.trace('called from:'); }

// Conditional assertion
console.assert(arr.length &gt; 0, 'Array should not be empty!');

// Group related logs
console.group('User data');
console.log('Name:', user.name);
console.log('Age:', user.age);
console.groupEnd();</code></pre>
<p><strong>console.time/timeEnd</strong> pairs measure exact execution time of code blocks — far more precise than Date.now() calls for micro-benchmarks.</p>
<p>DevTools debugger with breakpoints is superior to console.log for complex bugs — inspect variable state at any execution point without code modification.</p>`
        },
        {
          q: "How do you handle and debug Promises that silently fail?",
          a: `<p>Unhandled Promise rejections silently swallow errors in old Node.js versions and some browsers. Always attach .catch() or use try/catch with async/await. Check that all Promise chains are properly terminated.</p>
<p>In Node.js, listen for the 'unhandledRejection' event. In browsers, use window.addEventListener('unhandledrejection', ...) to catch missed Promise errors globally.</p>
<p>The most common mistake: <code>async function</code> called without <code>await</code> — the returned Promise is ignored and rejections disappear.</p>
<pre><code>// Silent failure
fetch('/api/data')
  .then(r =&gt; r.json())
  .then(handleData); // no .catch()!

// Fix: always handle rejections
fetch('/api/data')
  .then(r =&gt; r.json())
  .then(handleData)
  .catch(err =&gt; console.error('Fetch failed:', err));

// Or with async/await
async function loadData() {
  try {
    const r = await fetch('/api/data');
    return await r.json();
  } catch (err) {
    console.error('Failed:', err);
    throw err; // re-throw after logging
  }
}</code></pre>
<p><strong>Never lose errors:</strong> always terminate Promise chains with .catch(). Consider a global catch for unhandled rejections in production for logging.</p>
<p>Promise.allSettled() (ES2020) is preferable to Promise.all() when you want all results regardless of failures — won't throw on first rejection.</p>`
        },
        {
          q: "How do you identify and fix performance bugs?",
          a: `<p>Performance bugs are often algorithmic (O(n²) instead of O(n log n)), structural (re-rendering entire UI for small changes), or implementation-level (inefficient DOM queries, blocking operations on main thread).</p>
<p>Profile first: use browser DevTools Performance tab to identify the slowest operations. CPU profiles show which functions take the most time.</p>
<p>Common fixes: memoize expensive calculations, debounce/throttle event handlers, use virtual DOM or incremental rendering, replace nested loops with hash maps.</p>
<pre><code>// Performance bug: O(n²) intersection
function intersect(a, b) {
  return a.filter(x =&gt; b.includes(x)); // b.includes is O(n) → total O(n²)
}

// Fix: O(n) with Set
function intersectFast(a, b) {
  const setB = new Set(b);     // O(n) to build
  return a.filter(x =&gt; setB.has(x)); // O(1) lookup → total O(n)
}

// Debounce: limit how often a function runs
function debounce(fn, delay) {
  let timer;
  return (...args) =&gt; { clearTimeout(timer); timer = setTimeout(() =&gt; fn(...args), delay); };
}</code></pre>
<p><strong>Measure before and after</strong> any optimization — confirm the improvement is real and significant before committing the change.</p>
<p>React performance: use React.memo, useMemo, useCallback to prevent unnecessary re-renders. Check with React DevTools Profiler to see which components render unnecessarily.</p>`
        },
        {
          q: "How do you debug issues with 'this' context in JavaScript?",
          a: `<p>The value of <code>this</code> depends on HOW a function is called, not where it's defined. Arrow functions capture <code>this</code> from their enclosing scope at definition time — they never have their own <code>this</code>.</p>
<p>Common bug: passing a method as a callback loses its original <code>this</code> context. Fix with .bind(), arrow function wrapper, or storing a reference.</p>
<p>Use strict mode to catch accidental global <code>this</code> usage — in strict mode, standalone function calls have <code>this === undefined</code> instead of the global object.</p>
<pre><code>class Timer {
  constructor() { this.count = 0; }
  // Bug: this.count is undefined in callback
  start() { setInterval(function() { this.count++; }, 1000); }
  // Fix 1: arrow function (lexical this)
  startFixed() { setInterval(() =&gt; { this.count++; }, 1000); }
  // Fix 2: bind
  startBind() { setInterval(function() { this.count++; }.bind(this), 1000); }
}

// Also: method detachment
const obj = { value: 42, get() { return this.value; } };
const fn = obj.get; // detached!
fn(); // undefined (this = global/undefined in strict)</code></pre>
<p><strong>Arrow functions are the modern solution</strong> — they capture <code>this</code> lexically. Avoid using regular functions as callbacks on class methods.</p>
<p>Use console.log(this) at the start of any suspected function to immediately see what <code>this</code> is at that point — the fastest debugging technique.</p>`
        },
        {
          q: "How do you handle and debug circular references?",
          a: `<p>Circular references occur when object A references B, and B references A (directly or through a chain). They cause stack overflows in recursive algorithms, errors in JSON.stringify, and memory leaks in manual reference counting systems.</p>
<p>JSON.stringify throws "Converting circular structure to JSON." WeakMap-based serializers or replacer functions can handle this.</p>
<p>In recursive algorithms, track visited nodes — if you encounter a visited node, you've found a cycle.</p>
<pre><code>// Circular reference
const a = {};
const b = { a };
a.b = b; // circular!

// JSON.stringify will throw
// JSON.stringify(a); // TypeError: circular structure

// Fix: safe serializer with replacer
function safeJSON(obj) {
  const seen = new WeakSet();
  return JSON.stringify(obj, (key, value) =&gt; {
    if (typeof value === 'object' &amp;&amp; value !== null) {
      if (seen.has(value)) return '[Circular]';
      seen.add(value);
    }
    return value;
  });
}

// Cycle detection in graphs
function hasCycle(graph, start) {
  const visiting = new Set(), visited = new Set();
  function dfs(node) {
    if (visiting.has(node)) return true; // cycle found
    if (visited.has(node)) return false;
    visiting.add(node);
    for (const nb of graph[node] || []) if (dfs(nb)) return true;
    visiting.delete(node); visited.add(node);
    return false;
  }
  return dfs(start);
}</code></pre>
<p><strong>Three-color DFS</strong> for cycle detection: white (unvisited), gray (in current path), black (fully visited). Gray → gray edge means a cycle.</p>
<p>WeakMap/WeakSet are ideal for tracking visited objects during serialization — they don't prevent garbage collection of objects that are otherwise unreachable.</p>`
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
          a: `<p>Start by reading the problem statement twice — once to understand the overall goal, once to extract specific constraints and requirements. Misunderstanding costs far more time than reading carefully.</p>
<p>Follow this sequence: (1) Understand problem + constraints, (2) Work examples by hand, (3) Identify the pattern, (4) Brute force first, (5) Optimize step by step.</p>
<p>Never start coding without a clear plan. Even 5 minutes of thinking upfront saves 30 minutes of debugging later.</p>
<pre><code>// Problem-solving framework:
// 1. Clarify: "Is the input sorted? Can there be negatives? What's the max n?"
// 2. Examples: trace input=[1,2,3] manually
// 3. Pattern: "This looks like a sliding window problem"
// 4. Brute force: "O(n²) nested loop"
// 5. Optimize: "Can I eliminate the inner loop with a hash map? O(n)"
// 6. Code with meaningful variable names
// 7. Test: normal case, edge cases, stress test</code></pre>
<p><strong>Constraints reveal the algorithm:</strong> n=10 → brute force OK, n=1000 → O(n²) OK, n=10^6 → need O(n log n) or O(n), n=10^9 → need O(log n) or O(1).</p>
<p>Ask before coding: are there duplicates? Can I modify the input? Is there additional memory available? These answers often dramatically change the approach.</p>`
        },
        {
          q: "Why start with brute force first?",
          a: `<p>Brute force guarantees correctness. Once you have a correct slow solution, you have something to compare against when testing your optimized version. A working brute force is better than a broken optimization.</p>
<p>Brute force also reveals WHY it's slow: which operations are repeated, where the bottlenecks are, and what data structures would help. You can't optimize intelligently without understanding the problem fully.</p>
<p>In interviews, stating "I'll start with brute force O(n²) which I can optimize" scores better than jumping to an incorrect optimization.</p>
<pre><code>// Brute force: two sum O(n²)
function twoSumBrute(arr, target) {
  for (let i = 0; i &lt; arr.length; i++)
    for (let j = i+1; j &lt; arr.length; j++)
      if (arr[i] + arr[j] === target) return [i, j];
}
// Identify bottleneck: inner loop checks arr[j] === target-arr[i]
// Optimization: pre-store arr[j] values in a hash map for O(1) lookup
function twoSumOpt(arr, target) {
  const map = new Map();
  for (let i = 0; i &lt; arr.length; i++) {
    if (map.has(target - arr[i])) return [map.get(target - arr[i]), i];
    map.set(arr[i], i);
  }
}</code></pre>
<p><strong>Brute force reveals the inner loop pattern</strong> — seeing <code>arr[i] + arr[j] === target</code> directly shows that storing the complement in a hash map eliminates the inner loop.</p>
<p>Start simple, make it work, then make it fast. This principle applies to production engineering too — premature optimization is the root of all evil.</p>`
        },
        {
          q: "How do you optimize a brute force solution step by step?",
          a: `<p>Optimization hierarchy: (1) Remove repeated work with memoization/caching, (2) Use better data structures to reduce lookup time, (3) Sort data to enable binary search, (4) Apply algorithmic patterns (sliding window, two pointers), (5) Use mathematical properties.</p>
<p>Each optimization should demonstrably reduce time or space complexity. Moving from O(n²) to O(n log n) or O(n) is significant. Moving from O(n) to O(n - 1) is noise.</p>
<p>Think in terms of what operations are most expensive and what data structures can replace them.</p>
<pre><code>// Step 1: Brute force - O(n²) for finding duplicate
for (let i = 0; i &lt; n; i++)
  for (let j = i+1; j &lt; n; j++)
    if (arr[i] === arr[j]) return arr[i]; // O(n) inner comparison

// Step 2: Identify bottleneck - inner loop does O(n) membership check
// Optimization: use Set for O(1) membership
const seen = new Set();
for (const x of arr) {
  if (seen.has(x)) return x; // O(1) instead of O(n)
  seen.add(x);
}  // Total: O(n) time, O(n) space</code></pre>
<p><strong>Hash map/set replacement is the most common optimization:</strong> any O(n) linear search in an inner loop can often be replaced with O(1) hash lookup.</p>
<p>Two-pointer technique eliminates an entire O(n) sweep when the array is sorted. Sliding window avoids recomputing window sums by incrementally updating.</p>`
        },
        {
          q: "How do you identify the right data structure for a problem?",
          a: `<p>Match operations you need to perform with data structures that do them in O(1) or O(log n). The bottleneck in your brute force is often an O(n) operation that a better structure can do faster.</p>
<p>Key mapping: fast lookup → HashMap. Ordered data → sorted array/BST. FIFO → Queue. LIFO → Stack. Priority → Heap. Connectivity → Graph. Prefix → Trie. Range queries → Segment Tree.</p>
<p>Ask: what operations does this problem need most frequently? Then choose the data structure that makes those operations fastest.</p>
<pre><code>// Choose based on dominant operation:

// "Find if element exists" =&gt; Set (O(1) lookup)
const set = new Set([1, 2, 3]);
set.has(2); // O(1)

// "Map key to value" =&gt; Map/HashMap (O(1))
const map = new Map();
map.set('key', 'value');

// "Get min/max repeatedly" =&gt; Heap (O(log n) insert/extract)
// Min heap: always gives smallest element

// "Range sum queries" =&gt; Prefix Sum Array
const prefix = [0]; // prefix[i] = sum of arr[0..i-1]
for (const x of arr) prefix.push(prefix.at(-1) + x);
const rangeSum = (l, r) =&gt; prefix[r+1] - prefix[l]; // O(1) query</code></pre>
<p><strong>Prefix sum array</strong> transforms O(n) range sum queries to O(1) at the cost of O(n) preprocessing — ideal when the same range is queried multiple times.</p>
<p>When multiple data structures are needed, compose them: HashMap + Doubly Linked List for LRU cache, HashMap + Heap for top-k elements, etc.</p>`
        },
        {
          q: "How do you recognize common algorithmic patterns?",
          a: `<p>Patterns are reusable algorithm templates that apply to many different problems. Recognizing a pattern lets you skip from problem to solution in seconds instead of reinventing from scratch.</p>
<p>Most commonly tested patterns: Two Pointers (sorted arrays, pairs), Sliding Window (contiguous subarrays), BFS/DFS (graphs/trees), DP (optimization with choices), Binary Search (sorted/monotonic spaces), Backtracking (generate all combinations).</p>
<p>Practice mapping problem descriptions to pattern keywords. When you see "contiguous" + "sum/length" → sliding window. When you see "shortest path" → BFS.</p>
<pre><code>// Pattern recognition keywords:
// "contiguous subarray" + "sum/length" =&gt; sliding window
// "sorted array" + "pair/triplet" =&gt; two pointers
// "min steps / shortest path" =&gt; BFS
// "all combinations / generate all" =&gt; backtracking
// "overlapping subproblems" =&gt; DP / memoization
// "sorted + search" =&gt; binary search
// "connected components / reachability" =&gt; DFS/BFS on graph
// "prefix / suffix" =&gt; prefix sum or suffix array
// "next greater element" =&gt; monotonic stack</code></pre>
<p><strong>Pattern matching is a skill, not knowledge</strong> — it must be developed through practice. After solving 100+ problems, pattern recognition becomes intuitive and fast.</p>
<p>Hybrid problems combine two patterns (e.g., binary search + sliding window, BFS + DP). Recognize each component separately, then combine.</p>`
        },
        {
          q: "How do you evaluate time/space tradeoffs?",
          a: `<p>Most algorithmic optimizations are time-space tradeoffs: caching/memoization uses O(n) extra space to convert O(n) repeated work into O(1) lookups. Prefix sums trade O(n) preprocessing space for O(1) queries.</p>
<p>Evaluate based on problem constraints: if memory is scarce (embedded systems, large n), prefer O(1) space even if time is worse. If speed is critical (real-time systems), trade space for time.</p>
<p>Typical tradeoff analysis: is the bottleneck time or space? Can we precompute? Is data static or dynamic?</p>
<pre><code>// Time-space tradeoff examples:

// O(n) space for O(1) time:
const isPrime = new Array(N).fill(true); // Sieve: check in O(1)
// vs checking primality from scratch: O(sqrt(n)) per number

// HashMap eliminates O(n) scan:
const freq = new Map();
for (const x of arr) freq.set(x, (freq.get(x)||0) + 1);
// Now freq lookup is O(1) instead of scanning arr each time

// Prefix sum: O(n) preprocess for O(1) range queries
const prefix = [0, ...arr].map((_, i, a) =&gt; a.slice(0,i+1).reduce((s,x)=&gt;s+x,0))
// vs O(n) per query without prefix sum</code></pre>
<p><strong>Space is usually cheaper than time</strong> in modern systems. Unless memory is explicitly constrained, prefer faster algorithms that use more space.</p>
<p>In distributed systems, space-time tradeoffs also include network bandwidth: caching reduces server roundtrips (time) at the cost of stale data risk (correctness tradeoff).</p>`
        },
        {
          q: "Explain the divide and conquer approach.",
          a: `<p>Divide and conquer: (1) Divide the problem into non-overlapping subproblems, (2) Conquer each subproblem recursively, (3) Combine results. The subproblems are INDEPENDENT (unlike DP where they overlap).</p>
<p>Classic examples: Merge Sort (divide array, sort halves, merge), Quick Sort (partition + recurse), Binary Search (halve the search space), Matrix multiplication (Strassen's), FFT.</p>
<p>Time complexity: T(n) = aT(n/b) + f(n). Use Master Theorem to solve: if f(n) = O(n^c), compare c with log_b(a) to determine which dominates.</p>
<pre><code>// Merge Sort: classic divide and conquer
function mergeSort(arr) {
  if (arr.length &lt;= 1) return arr;         // base case
  const mid = arr.length &gt;&gt; 1;
  const left = mergeSort(arr.slice(0, mid));  // divide
  const right = mergeSort(arr.slice(mid));     // conquer
  return merge(left, right);                    // combine
}
// Recurrence: T(n) = 2T(n/2) + O(n)
// Master Theorem: a=2, b=2, f(n)=O(n): log_b(a)=1, f(n)=O(n^1) =&gt; T(n)=O(n log n)

// Binary Search: halve each step
// T(n) = T(n/2) + O(1) =&gt; T(n) = O(log n)</code></pre>
<p><strong>Key distinction from DP:</strong> divide-and-conquer subproblems don't overlap (no memoization needed). If they overlap, DP/memoization is more efficient.</p>
<p>Closest pair of points (Shamos-Hoey), counting inversions, and the Karatsuba multiplication algorithm are classic divide-and-conquer examples beyond sorting.</p>`
        },
        {
          q: "How do you recognize when to use a sliding window?",
          a: `<p>Use sliding window for problems that ask for the maximum/minimum/count of CONTIGUOUS subarrays or substrings meeting some condition. The "window" represents the current subarray being considered.</p>
<p>Fixed-size window: slide one position at a time (add right element, remove left element). Variable-size window: expand when condition not met, shrink when condition violated.</p>
<p>Keywords that suggest sliding window: "subarray of length k", "longest substring without", "smallest subarray with sum >=", "maximum sum window".</p>
<pre><code>// Fixed window: max sum of k consecutive elements
function maxSumK(arr, k) {
  let sum = arr.slice(0, k).reduce((a, b) =&gt; a + b);
  let max = sum;
  for (let i = k; i &lt; arr.length; i++) {
    sum += arr[i] - arr[i - k];  // slide: add right, remove left
    max = Math.max(max, sum);
  }
  return max;
}

// Variable window: longest substring with at most k distinct chars
function longestSubstringK(s, k) {
  const freq = new Map();
  let result = 0;
  for (let l = 0, r = 0; r &lt; s.length; r++) {
    freq.set(s[r], (freq.get(s[r])||0) + 1);  // expand right
    while (freq.size &gt; k) {                    // shrink left
      freq.set(s[l], freq.get(s[l]) - 1);
      if (!freq.get(s[l])) freq.delete(s[l]);
      l++;
    }
    result = Math.max(result, r - l + 1);
  }
  return result;
}</code></pre>
<p><strong>Sliding window eliminates recomputation:</strong> O(1) update (add right, remove left) vs O(k) full recomputation each step. Reduces O(n*k) brute force to O(n).</p>
<p>When expanding the window, update the condition. When shrinking, update to restore the invariant. The invariant is what the window satisfies at all times.</p>`
        },
        {
          q: "When should you use greedy vs dynamic programming?",
          a: `<p>Greedy: make the locally optimal choice at each step, never reconsider. Works when local optimum always leads to global optimum. Easy to implement but only correct for specific problem structures.</p>
<p>DP: when choices at each step affect future options (overlapping subproblems) AND the optimal solution can be built from optimal sub-solutions (optimal substructure). More powerful but more complex.</p>
<p>Greedy fails when a locally good choice locks you into a globally bad solution. Prove greedy correctness using exchange argument: show no swap of greedy choice for any other choice can improve the result.</p>
<pre><code>// Greedy: activity selection (interval scheduling)
// Sort by end time, always pick next non-overlapping activity
function maxActivities(intervals) {
  intervals.sort((a, b) =&gt; a[1] - b[1]); // sort by end time
  const result = [intervals[0]];
  for (let i = 1; i &lt; intervals.length; i++)
    if (intervals[i][0] &gt;= result.at(-1)[1]) result.push(intervals[i]);
  return result.length;
}

// DP: 0/1 Knapsack (greedy fails here!)
// items can't be fractional, greedy by value/weight ratio is not optimal
function knapsack(weights, values, W) {
  const dp = Array(W + 1).fill(0);
  for (let i = 0; i &lt; weights.length; i++)
    for (let w = W; w &gt;= weights[i]; w--) // backwards to avoid reuse
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
  return dp[W];
}</code></pre>
<p><strong>Quick test:</strong> try greedy first. If you can't prove it's always optimal, or you find a counterexample, use DP instead.</p>
<p>Coin change is NOT greedy (unless coins are specially structured like US currency). Fractional knapsack IS greedy (sort by value/weight ratio). Know which variant each problem uses.</p>`
        },
        {
          q: "How should you communicate your approach during an interview?",
          a: `<p>Interviewers evaluate your communication as much as your code. Talk before, during, and after writing. Announce your approach before starting, explain each decision as you code, and summarize complexity when done.</p>
<p>If you get stuck, say what you've tried and why it doesn't work. Asking clarifying questions shows maturity and is expected in real engineering discussions.</p>
<p>A mediocre solution communicated excellently often beats a perfect solution delivered in silence.</p>
<pre><code>// Good interview communication pattern:
// 1. "I understand we need to find..."
// 2. "A brute force approach would be O(n²)..."
// 3. "I can optimize this with a hash map to O(n)..."
// 4. "Let me walk through an example: input=[1,2,3]..."
// 5. "Here's my implementation..."
// 6. "Time: O(n), Space: O(n)"
// 7. "Edge cases: empty array, single element, duplicates..."</code></pre>
<p><strong>Think out loud throughout:</strong> narrate what you're writing. An interviewer can redirect you if you're going wrong — but only if they know what you're thinking.</p>
<p>After coding, proactively mention what you would improve with more time: better error handling, additional test cases, or alternative approaches.</p>`
        },
        {
          q: "Design an algorithm to find the longest palindromic substring.",
          a: `<p>Expand around center: for each character, try expanding outward while both ends match. Do this for both odd-length (single center) and even-length (pair center) palindromes. O(n²) time, O(1) space.</p>
<p>Manacher's algorithm achieves O(n) by reusing previously computed palindrome radii, but the expand-around-center approach is far simpler to implement correctly.</p>
<p>Dynamic programming approach: dp[i][j] = true if s[i..j] is a palindrome. Fill bottom-up by length. O(n²) time and space.</p>
<pre><code>function longestPalindrome(s) {
  let start = 0, maxLen = 1;
  function expand(l, r) {
    while (l &gt;= 0 &amp;&amp; r &lt; s.length &amp;&amp; s[l] === s[r]) { l--; r++; }
    if (r - l - 1 &gt; maxLen) { maxLen = r - l - 1; start = l + 1; }
  }
  for (let i = 0; i &lt; s.length; i++) {
    expand(i, i);     // odd length: center at i
    expand(i, i + 1); // even length: center between i and i+1
  }
  return s.slice(start, start + maxLen);
}
// longestPalindrome("babad") =&gt; "bab"
// longestPalindrome("cbbd") =&gt; "bb"</code></pre>
<p><strong>Expand from center:</strong> the inner while loop naturally terminates when characters don't match — no need to validate palindrome separately.</p>
<p>Common interview follow-up: count total palindromic substrings. Same expand-around-center: count every valid expansion instead of tracking maximum.</p>`
        },
        {
          q: "Design an algorithm to find all anagrams of a pattern in a string.",
          a: `<p>Sliding window approach: maintain a window of size p.length. Track character frequency counts for both the window and the pattern. When counts match, the window is an anagram.</p>
<p>Updating the window: when sliding, decrement count of outgoing character (remove from left) and increment count of incoming character (add from right).</p>
<p>O(n) time, O(26) = O(1) space for lowercase letters. Much better than the O(n*k) brute force of checking every substring.</p>
<pre><code>function findAnagrams(s, p) {
  const result = [], need = new Array(26).fill(0);
  for (const c of p) need[c.charCodeAt(0) - 97]++;
  let window = [...need], have = 0, total = 26;
  for (let i = 0; i &lt; s.length; i++) {
    // simplify: use a 'matches' count approach
    if (i &gt;= p.length) {
      // slide window
    }
  }
  // Cleaner version with Map:
  const pCount = {}, wCount = {};
  for (const c of p) pCount[c] = (pCount[c] || 0) + 1;
  let formed = 0, required = Object.keys(pCount).length;
  for (let l = 0, r = 0; r &lt; s.length; r++) {
    wCount[s[r]] = (wCount[s[r]] || 0) + 1;
    if (pCount[s[r]] &amp;&amp; wCount[s[r]] === pCount[s[r]]) formed++;
    if (r - l + 1 === p.length) {
      if (formed === required) result.push(l);
      if (pCount[s[l]] &amp;&amp; wCount[s[l]] === pCount[s[l]]) formed--;
      wCount[s[l]]--;
      l++;
    }
  }
  return result;
}
// findAnagrams("cbaebabacd", "abc") =&gt; [0, 6]</code></pre>
<p><strong>Fixed-size sliding window:</strong> window size = p.length is constant. Only slide when window reaches full size.</p>
<p>'formed' tracks how many characters have matching exact counts. When formed === required, the window is a valid anagram.</p>`
        },
        {
          q: "Design a rate limiter algorithm.",
          a: `<p>Token bucket: maintain a count of tokens replenished at a fixed rate. Each request consumes a token. Allows bursts up to bucket capacity. Sliding window log: record timestamps, reject if more than limit in [now-window, now].</p>
<p>Fixed window counter is simplest (reset count every time period) but allows double the requests at window boundaries. Sliding window fixes this.</p>
<p>For distributed systems, use Redis INCR with TTL for atomic token counting across servers.</p>
<pre><code>// Token Bucket rate limiter
class RateLimiter {
  constructor(capacity, refillRate) {
    this.capacity = capacity;
    this.tokens = capacity;
    this.refillRate = refillRate; // tokens per ms
    this.lastRefill = Date.now();
  }
  allowRequest() {
    const now = Date.now();
    const elapsed = now - this.lastRefill;
    this.tokens = Math.min(this.capacity, this.tokens + elapsed * this.refillRate);
    this.lastRefill = now;
    if (this.tokens &gt;= 1) { this.tokens--; return true; }
    return false;
  }
}
// new RateLimiter(10, 1/1000) allows 10 burst + 1 per second</code></pre>
<p><strong>Token bucket allows bursts</strong> up to capacity while maintaining the average rate. Ideal for APIs that need to handle traffic spikes gracefully.</p>
<p>Sliding window log is most accurate (no boundary burst) but uses O(rate) memory per user to store timestamps.</p>`
        },
        {
          q: "Design an algorithm to solve the jump game problem.",
          a: `<p>Jump Game I (can you reach the end?): Track the maximum index reachable so far. At each position i, update max_reach = max(max_reach, i + nums[i]). If i > max_reach, we're stuck.</p>
<p>Greedy insight: at each position, we only care about the farthest we can reach, not which path got us there. This makes greedy optimal here.</p>
<p>Jump Game II (minimum jumps): always jump to the farthest reachable position in the current window. O(n) greedy.</p>
<pre><code>// Jump Game I: can reach end?
function canJump(nums) {
  let maxReach = 0;
  for (let i = 0; i &lt; nums.length; i++) {
    if (i &gt; maxReach) return false;  // stuck
    maxReach = Math.max(maxReach, i + nums[i]);
  }
  return true;
}
// canJump([2,3,1,1,4]) =&gt; true
// canJump([3,2,1,0,4]) =&gt; false

// Jump Game II: minimum jumps
function minJumps(nums) {
  let jumps = 0, curEnd = 0, farthest = 0;
  for (let i = 0; i &lt; nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === curEnd) { jumps++; curEnd = farthest; }
  }
  return jumps;
}</code></pre>
<p><strong>Greedy works here</strong> because reaching position i+k is never worse than reaching i+k-1 first. Always extend to farthest reachable.</p>
<p>DP approach is O(n²): dp[i] = true if reachable. Greedy is O(n). Both are correct; greedy is preferred.</p>`
        },
        {
          q: "Design an algorithm to detect and remove cycle in a linked list.",
          a: `<p>Use Floyd's algorithm to detect the cycle. Then find the cycle start: reset one pointer to head, advance both at speed 1. They meet at the cycle start.</p>
<p>Mathematical proof: if meeting point is k steps from cycle start, head is also k steps from cycle start (by the cycle math). So advancing both at speed 1 makes them meet at the start.</p>
<p>Remove cycle: find node just before cycle start (prev pointer), set prev.next = null.</p>
<pre><code>function detectCycle(head) {
  let slow = head, fast = head;
  while (fast &amp;&amp; fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // Cycle exists! Find start.
      let ptr = head;
      while (ptr !== slow) { ptr = ptr.next; slow = slow.next; }
      return ptr; // cycle start node
    }
  }
  return null; // no cycle
}

function removeCycle(head) {
  const start = detectCycle(head);
  if (!start) return head;
  let curr = start;
  while (curr.next !== start) curr = curr.next; // find node just before start
  curr.next = null; // break cycle
  return head;
}</code></pre>
<p><strong>Phase 1:</strong> detect cycle with fast/slow. <strong>Phase 2:</strong> reset one to head, advance both at speed 1 — they meet at cycle start.</p>
<p>This runs in O(n) time, O(1) space. The HashSet approach is simpler (store visited nodes) but uses O(n) space.</p>`
        },
        {
          q: "Design an algorithm to find the longest increasing subsequence.",
          a: `<p>DP approach: dp[i] = length of LIS ending at index i. For each i, check all j &lt; i where nums[j] &lt; nums[i]. dp[i] = max(dp[j]) + 1. Answer = max(dp). O(n²) time.</p>
<p>Binary search approach: maintain a 'tails' array where tails[i] is the smallest tail element of all increasing subsequences of length i+1. Replace with binary search. O(n log n).</p>
<p>The O(n log n) approach doesn't reconstruct the actual subsequence easily — use patience sorting visualization to understand it.</p>
<pre><code>// O(n²) DP
function lisDP(nums) {
  const dp = Array(nums.length).fill(1);
  for (let i = 1; i &lt; nums.length; i++)
    for (let j = 0; j &lt; i; j++)
      if (nums[j] &lt; nums[i]) dp[i] = Math.max(dp[i], dp[j] + 1);
  return Math.max(...dp);
}

// O(n log n) binary search
function lis(nums) {
  const tails = [];
  for (const n of nums) {
    let lo = 0, hi = tails.length;
    while (lo &lt; hi) {
      const mid = (lo + hi) &gt;&gt; 1;
      tails[mid] &lt; n ? lo = mid + 1 : hi = mid;
    }
    tails[lo] = n;
  }
  return tails.length;
}
// lis([10,9,2,5,3,7,101,18]) =&gt; 4 ([2,3,7,101])</code></pre>
<p><strong>Patience sorting intuition:</strong> maintain piles where each pile top is &gt;= incoming card. Place on leftmost pile where top &gt;= card. Number of piles = LIS length.</p>
<p>LIS has applications in diff algorithms, minimum edit distance, and analyzing temporal data sequences.</p>`
        },
        {
          q: "Design a consistent hashing algorithm.",
          a: `<p>Consistent hashing maps both nodes (servers) and keys to positions on a virtual ring (0 to 2^32-1). A key is assigned to the first node clockwise from it on the ring.</p>
<p>When a node is added/removed, only keys between the new node and its predecessor need to be moved — far fewer than rehashing everything. Critical for distributed caching and databases.</p>
<p>Virtual nodes (vnodes): each physical node has k virtual positions on the ring for better load distribution. Used in Cassandra, DynamoDB, and Memcached.</p>
<pre><code>class ConsistentHash {
  constructor(replicas = 100) {
    this.replicas = replicas;
    this.ring = new Map(); // hash position =&gt; server
    this.sortedKeys = [];
  }
  addServer(server) {
    for (let i = 0; i &lt; this.replicas; i++) {
      const hash = this.hash(server + ':' + i);
      this.ring.set(hash, server);
      this.sortedKeys.push(hash);
    }
    this.sortedKeys.sort((a, b) =&gt; a - b);
  }
  getServer(key) {
    const hash = this.hash(key);
    const pos = this.sortedKeys.findIndex(k =&gt; k &gt;= hash);
    const idx = pos === -1 ? 0 : pos;
    return this.ring.get(this.sortedKeys[idx]);
  }
  hash(key) { /* FNV or murmur hash */ return /* ... */ 0; }
}</code></pre>
<p><strong>Only k/n keys migrate</strong> when adding a node (where k=total keys, n=nodes). Traditional modulo hashing moves almost all keys when node count changes.</p>
<p>Real implementations use sortedContainers (tree map) for O(log n) server lookup instead of sorted array with binary search.</p>`
        },
        {
          q: "Design an algorithm to implement a task scheduler.",
          a: `<p>CPU task scheduler with cooldown n: after each task, the same task cannot run for n units. Use a greedy priority queue: always schedule the most frequent remaining task that isn't on cooldown.</p>
<p>Key insight: if the most frequent task has frequency f, the minimum time is at least (f-1)*(n+1) + count_of_tasks_with_max_freq.</p>
<p>This is a classic greedy scheduling problem with applications in OS scheduling, API rate limiting by task type, and job queues.</p>
<pre><code>function leastInterval(tasks, n) {
  const freq = new Array(26).fill(0);
  for (const t of tasks) freq[t.charCodeAt(0) - 65]++;
  const maxFreq = Math.max(...freq);
  const maxCount = freq.filter(f =&gt; f === maxFreq).length;
  // Minimum slots = either formula result or actual task count
  return Math.max(tasks.length, (maxFreq - 1) * (n + 1) + maxCount);
}
// leastInterval(["A","A","A","B","B","B"], 2) =&gt; 8
// Sequence: A B _ A B _ A B (or A B C A B C A B)

// Simulation approach (shows actual schedule):
// Use max-heap by frequency, cooldown queue per task</code></pre>
<p><strong>Mathematical formula:</strong> (maxFreq-1)*(n+1)+maxCount gives minimum slots needed. The max with tasks.length handles the case where cooldown doesn't constrain.</p>
<p>For actual scheduling (not just counting), use a max-heap (priority queue) with a cooldown queue. Pop most frequent, execute, wait n cycles, re-enqueue.</p>`
        },
        {
          q: "Design an algorithm to find all strongly connected components.",
          a: `<p>Kosaraju's algorithm (two-pass DFS): (1) Run DFS on original graph, record finish times. (2) Transpose the graph (reverse all edges). (3) Run DFS in reverse finish-time order on transposed graph — each DFS tree is an SCC.</p>
<p>Tarjan's algorithm does it in one pass using discovery times and low-link values, detecting SCCs as DFS completes subtrees.</p>
<p>SCCs are used in: social network analysis (finding tight-knit communities), map routing (bidirectional components), and compiler analysis (detecting circular dependencies).</p>
<pre><code>// Kosaraju's Algorithm
function kosaraju(graph, n) {
  const visited = new Array(n).fill(false), order = [];
  // Pass 1: DFS to get finish order
  function dfs1(v) {
    visited[v] = true;
    for (const u of graph[v] || []) if (!visited[u]) dfs1(u);
    order.push(v);
  }
  for (let i = 0; i &lt; n; i++) if (!visited[i]) dfs1(i);
  // Build transposed graph
  const tGraph = Array.from({length: n}, () =&gt; []);
  for (let v = 0; v &lt; n; v++) for (const u of graph[v] || []) tGraph[u].push(v);
  // Pass 2: DFS in reverse finish order on transposed
  const component = new Array(n).fill(-1);
  let comp = 0;
  function dfs2(v, c) {
    component[v] = c;
    for (const u of tGraph[v]) if (component[u] === -1) dfs2(u, c);
  }
  while (order.length) {
    const v = order.pop();
    if (component[v] === -1) { dfs2(v, comp++); }
  }
  return { count: comp, component };
}</code></pre>
<p><strong>Two key insight:</strong> finishing late in DFS means being "reachable from many" places. Reversing edges swaps sources and sinks — only truly bidirectional components survive.</p>
<p>Tarjan's is slightly more efficient (single DFS) using a stack and low-link values. Both are O(V+E).</p>`
        },
        {
          q: "Design an algorithm to serialize and deserialize a binary tree.",
          a: `<p>Serialization: BFS or DFS with null markers. BFS produces level-order representation [1,2,3,null,null,4,5]. DFS preorder is simpler to deserialize recursively.</p>
<p>Key insight for DFS deserialization: preorder traversal visits root first — when deserializing, read root, then recursively rebuild left and right subtrees from the remaining string.</p>
<p>This is the same format LeetCode uses for tree representation.</p>
<pre><code>// Preorder DFS serialize/deserialize
function serialize(root) {
  if (!root) return 'null';
  return root.val + ',' + serialize(root.left) + ',' + serialize(root.right);
}
function deserialize(data) {
  const vals = data.split(','), iter = [0];
  function build() {
    const val = vals[iter[0]++];
    if (val === 'null') return null;
    const node = { val: parseInt(val), left: null, right: null };
    node.left = build();
    node.right = build();
    return node;
  }
  return build();
}
// serialize([1,2,3,null,null,4,5]) =&gt; "1,2,null,null,3,4,null,null,5,null,null"
// deserialize that string =&gt; original tree</code></pre>
<p><strong>Preorder + null markers uniquely identify the tree structure</strong> — unlike inorder alone which is ambiguous. Deserialization uses a global index to consume tokens sequentially.</p>
<p>BFS serialization creates more compact output for complete trees. Preorder is better for sparse trees. Both are O(n) time and space.</p>`
        },
        {
          q: "Design an LRU (Least Recently Used) cache.",
          a: `<p>LRU cache evicts the least recently used item when at capacity. Need O(1) get and put. Solution: combine a HashMap (O(1) access) with a Doubly Linked List (O(1) move to front/remove from back).</p>
<p>HashMap stores key → {node reference}. DLL tracks usage order: most recent at head, least recent at tail. On access, move node to head. When full, remove tail node.</p>
<p>JavaScript's Map preserves insertion order and allows O(1) delete and re-insert, making it a clean LRU implementation.</p>
<pre><code>class LRUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // maintains insertion order for LRU
  }
  get(key) {
    if (!this.cache.has(key)) return -1;
    const val = this.cache.get(key);
    this.cache.delete(key);       // remove and re-insert to mark as recent
    this.cache.set(key, val);
    return val;
  }
  put(key, value) {
    if (this.cache.has(key)) this.cache.delete(key);
    this.cache.set(key, value);
    if (this.cache.size &gt; this.capacity) {
      const oldest = this.cache.keys().next().value; // first key = oldest
      this.cache.delete(oldest);
    }
  }
}
// const lru = new LRUCache(2);
// lru.put(1,1); lru.put(2,2); lru.get(1); lru.put(3,3);
// lru.get(2) =&gt; -1 (evicted)</code></pre>
<p><strong>JavaScript Map insertion order trick:</strong> delete + re-insert moves a key to the "most recently used" end. The first key in the Map is always the LRU candidate.</p>
<p>Traditional implementation: HashMap + Doubly Linked List with sentinel head and tail nodes. O(1) all operations, used in OS page replacement and browser/CDN caches.</p>`
        },
        {
          q: "Design an algorithm to validate a sequence of brackets.",
          a: `<p>Stack approach: push opening brackets, pop when closing bracket matches the top. String is valid if stack is empty at end and every closing bracket matches the most recent opening.</p>
<p>The key insight: brackets must be closed in LIFO order — the most recently opened bracket must be closed first. This is exactly what a stack models.</p>
<p>Extended to expressions: validate mathematical expressions with nested parentheses for balanced structure.</p>
<pre><code>function isValid(s) {
  const stack = [];
  const map = { ')': '(', '}': '{', ']': '[' };
  for (const c of s) {
    if ('([{'.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}
// isValid("()[]{}") =&gt; true
// isValid("([)]")   =&gt; false
// isValid("{[]}")   =&gt; true

// Extended: minimum bracket removals
function minRemove(s) {
  const stack = [], remove = new Set();
  for (let i = 0; i &lt; s.length; i++) {
    if (s[i] === '(') stack.push(i);
    else if (s[i] === ')') {
      stack.length ? stack.pop() : remove.add(i);
    }
  }
  stack.forEach(i =&gt; remove.add(i));
  return s.split('').filter((_, i) =&gt; !remove.has(i)).join('');
}</code></pre>
<p><strong>Map-based matching:</strong> store closing→opening pairs in a Map for clean O(1) lookup, handling any number of bracket types without if/else chains.</p>
<p>Follow-up: generate all valid bracket combinations of n pairs — use backtracking with open/close counters. Generate n=3: ["((()))","(()())","(())()","()(())","()()()"].</p>`
        },
        {
          q: "Design an algorithm to find the maximum sum subarray of a specific length.",
          a: `<p>Fixed-length sliding window: compute sum of first k elements, then slide by adding the next element and removing the leftmost. Track maximum sum seen.</p>
<p>O(n) time, O(1) space. Far better than O(n*k) brute force that recomputes each window sum from scratch.</p>
<p>This is the simplest sliding window problem — foundation for all variable-window and complex sliding window problems.</p>
<pre><code>function maxSumSubarray(arr, k) {
  if (arr.length &lt; k) return null;
  // Calculate first window sum
  let windowSum = arr.slice(0, k).reduce((s, x) =&gt; s + x, 0);
  let maxSum = windowSum;
  // Slide the window
  for (let i = k; i &lt; arr.length; i++) {
    windowSum += arr[i] - arr[i - k]; // add right, remove left
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum;
}
// maxSumSubarray([2,1,5,1,3,2], 3) =&gt; 9 (subarray [5,1,3])
// maxSumSubarray([2,3,4,1,5], 2) =&gt; 7 (subarray [3,4])

// Return the actual subarray:
function maxSumSubarrayFull(arr, k) {
  let windowSum = arr.slice(0, k).reduce((s, x) =&gt; s + x, 0);
  let maxSum = windowSum, start = 0;
  for (let i = k; i &lt; arr.length; i++) {
    windowSum += arr[i] - arr[i - k];
    if (windowSum &gt; maxSum) { maxSum = windowSum; start = i - k + 1; }
  }
  return arr.slice(start, start + k);
}</code></pre>
<p><strong>Sliding window update rule:</strong> newSum = prevSum + arr[rightEdge] - arr[leftEdge]. This single O(1) operation replaces a full O(k) sum recalculation.</p>
<p>Variable-length windows (e.g., smallest subarray with sum ≥ target) use two pointers that move independently, expanding or shrinking as needed.</p>`
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
          a: `<p>Solving the wrong problem perfectly is worse than solving the right problem imperfectly. Misunderstanding the goal, inputs, or constraints leads to wasted effort — you build the wrong thing.</p>
<p>Before writing a single line of code: read the problem twice, identify inputs/outputs, note constraints (size, range, uniqueness), and clarify ambiguities. Restate in your own words to verify understanding.</p>
<p>In real engineering, requirements are often unclear. Asking clarifying questions is a professional skill — not a sign of weakness.</p>
<pre><code>// Questions to ask before solving:
// "What is the expected input format? [1,2,3] or a linked list?"
// "Can there be negative numbers?"
// "Can the array be empty or have one element?"
// "Is the array sorted or unsorted?"
// "Should I return index or value?"
// "Can I modify the input array in place?"
// "What should I return if there's no valid answer?"
// "Can n be 0?"

// Proper problem statement from constraints:
// n = 10^5 =&gt; need O(n log n) or better
// values in [1, 10^9] =&gt; might need BigInt for products
// values can be negative =&gt; sum formula-based approaches may not work</code></pre>
<p><strong>Constraints reveal the algorithm:</strong> input size n tells you what time complexity is acceptable. Value range tells you if overflow is a concern. Sorted tells you if binary search is applicable.</p>
<p>Always verify your understanding with at least two examples before coding. Pick one normal case and one edge case to make sure your interpretation is correct.</p>`
        },
        {
          q: "How do you identify constraints in a problem?",
          a: `<p>Constraints are the boundaries of valid input — they define your algorithm's requirements. Look for: n (input size), value ranges, uniqueness guarantees, sortedness, types, and special conditions.</p>
<p>Map constraints to complexity requirements: n=10 allows O(2^n), n=1000 allows O(n²), n=10^6 requires O(n) or O(n log n), n=10^9 requires O(log n) or O(1). Choose your algorithm accordingly.</p>
<p>Missing constraints often lead to bugs: assuming no negatives when negatives are possible, or assuming unique values when duplicates exist.</p>
<pre><code>// Constraint mapping:
// n &lt;= 20:        O(2^n) backtracking OK
// n &lt;= 1,000:     O(n²) OK
// n &lt;= 100,000:   Need O(n log n) or O(n)
// n &lt;= 10^9:      Need O(log n) or O(1)

// Value range concerns:
const values_up_to_1e9 = true;
// n * n could overflow 32-bit: use BigInt or be careful

// Uniqueness constraints:
// "distinct values" =&gt; no need to handle duplicates
// "may contain duplicates" =&gt; dedup or carefully handle

// Sorted constraints:
// "array is sorted" =&gt; binary search is viable
// "return sorted output" =&gt; consider maintaining sorted order</code></pre>
<p><strong>Read every word of the problem statement:</strong> "non-negative", "distinct", "contiguous" — these each affect the approach significantly.</p>
<p>Constraints also tell you when to worry about overflow. For values up to 10^9, products of two values can reach 10^18 which overflows 32-bit integers (JavaScript uses 64-bit floats so it's safer, but know the limits).</p>`
        },
        {
          q: "Why should you walk through examples before coding?",
          a: `<p>Working through examples manually before coding builds intuition for the pattern, catches misunderstandings early, and reveals edge cases you'd never think of abstractly. Your brain finds patterns from concrete data better than from abstract descriptions.</p>
<p>Use at least 2 examples: one moderately complex (shows the general case) and one edge case (empty, single element, or all-same values).</p>
<p>Trace through the expected algorithm mentally. If you can't trace it, you can't code it correctly.</p>
<pre><code>// Problem: find maximum subarray sum
// Trace with arr=[−2,1,−3,4,−1,2,1,−5,4]:
//
// Index:   0  1  2  3  4  5  6  7  8
// Value:  -2  1 -3  4 -1  2  1 -5  4
//
// Track: currentSum, maxSum
// i=0: cur = max(-2, -2) = -2, max = -2
// i=1: cur = max(1, -2+1) = 1, max = 1
// i=2: cur = max(-3, 1-3) = -2, max = 1
// i=3: cur = max(4, -2+4) = 4, max = 4
// i=4: cur = max(-1, 4-1) = 3, max = 4
// i=5: cur = max(2, 3+2) = 5, max = 5
// i=6: cur = max(1, 5+1) = 6, max = 6
// Answer: 6 ([4,-1,2,1])</code></pre>
<p><strong>Tracing reveals the pattern:</strong> manually working through Kadane's algorithm on this example makes the logic obvious. Without tracing, the formula max(arr[i], cur+arr[i]) seems arbitrary.</p>
<p>Trace your solution on a DIFFERENT example after coding to verify it's correct — don't reuse the exact input you designed it for.</p>`
        },
        {
          q: "How do you consider edge cases effectively?",
          a: `<p>Edge cases are boundary conditions where behavior might be unexpected or incorrect. Most algorithms that work correctly for large inputs fail at the boundaries.</p>
<p>Standard edge case checklist: empty input ([], '', null, 0), single element ([x], n=1), all-same values ([5,5,5]), maximum size, minimum/negative values, duplicates, already sorted, reverse sorted.</p>
<p>For tree problems: null root, single node, linear chain (degenerate). For linked lists: empty list, single node, cycle. For strings: empty, single char, all-same chars.</p>
<pre><code>// Edge case testing template:
function myAlgorithm(arr) {
  // Edge case 1: empty input
  if (!arr || arr.length === 0) return 0; // or null, or []
  // Edge case 2: single element (often returns trivially)
  if (arr.length === 1) return arr[0];
  // Main algorithm...
}

// Test checklist after implementation:
// myAlgorithm([])         // empty
// myAlgorithm([5])        // single
// myAlgorithm([1,1,1])    // all same
// myAlgorithm([1,2,3])    // already sorted
// myAlgorithm([3,2,1])    // reverse sorted
// myAlgorithm([-1,-2,3])  // negatives
// myAlgorithm([1,1,2,2])  // duplicates</code></pre>
<p><strong>Build an edge case checklist you always run through</strong> — makes edge case testing a discipline rather than something you do when prompted.</p>
<p>In interviews, proactively listing edge cases shows thoroughness. "I'd also want to test this with an empty array and with all negative numbers." This demonstrates professional engineering mindset.</p>`
        },
        {
          q: "How do you choose the right approach for a problem?",
          a: `<p>Match problem characteristics to known patterns. Building this intuition requires learning which patterns solve which types of problems, and practicing until recognition is rapid.</p>
<p>Decision tree: need minimum/maximum of something? Try greedy or DP. Counting paths or arrangements? Try DP. Finding elements in sorted data? Try binary search. Shortest path? Try BFS.</p>
<p>Pattern recognition is the #1 skill that separates experienced from inexperienced problem solvers. It comes from deliberate practice across many problem types.</p>
<pre><code>// Problem type → Algorithm matching:
//
// "Contiguous subarray" (sum/length)  → Sliding Window
// "Pair/triplet with sum"              → Two Pointers (sorted) or HashMap
// "Shortest/fewest steps"              → BFS
// "All paths/all combinations"         → DFS + Backtracking
// "Maximum/minimum of something"       → DP or Greedy
// "Sorted array + search"              → Binary Search
// "Count subsets"                      → DP (subset sum variant)
// "Cycle in graph"                     → DFS with visited/in-progress sets
// "Top K elements"                     → Heap
// "Range sum queries"                  → Prefix Sum
// "Anagram/permutation check"          → Frequency Map</code></pre>
<p><strong>When in doubt, start with the simplest approach</strong> that might work, then optimize if too slow. Don't over-engineer the first attempt.</p>
<p>Hybrid approach: recognize when a problem is a combination of two patterns. "K closest elements to target in sorted array" = binary search (find starting position) + sliding window (expand to k elements).</p>`
        },
        {
          q: "Why is writing pseudocode helpful before real code?",
          a: `<p>Pseudocode is implementation-language-agnostic, letting you focus on the LOGIC without worrying about syntax. Mistakes in pseudocode are instant to fix. Mistakes in code take much longer to debug.</p>
<p>It also serves as in-code documentation: well-written pseudocode become the comments in your final implementation. The pseudocode steps become the function structure.</p>
<p>For interviews especially: thinking in pseudocode means you can explain your approach naturally before touching the keyboard.</p>
<pre><code>// Pseudocode for max subarray sum:
// function maxSubarray(arr):
//   maxSoFar = -infinity
//   maxEndingHere = 0
//   for each number in arr:
//     maxEndingHere = max(number, maxEndingHere + number)
//     maxSoFar = max(maxSoFar, maxEndingHere)
//   return maxSoFar

// Direct translation to JavaScript:
function maxSubarray(arr) {
  let maxSoFar = -Infinity;
  let maxEndingHere = 0;
  for (const num of arr) {
    maxEndingHere = Math.max(num, maxEndingHere + num);
    maxSoFar = Math.max(maxSoFar, maxEndingHere);
  }
  return maxSoFar;
}</code></pre>
<p><strong>Pseudocode = blueprint, code = construction</strong>. You wouldn't start building a house without a blueprint. Same principle applies to algorithms.</p>
<p>Protip: keep pseudocode as comments in your code. This makes your code self-documenting and helps you stay on track when coding each step.</p>`
        },
        {
          q: "What is the best way to translate pseudocode into code?",
          a: `<p>Translate line by line, keeping pseudocode as comments. Start with the function signature, handle the base/edge cases first, then implement the main logic. Compile mentally as you write each line.</p>
<p>Break complex pseudocode steps into helper functions. This keeps the main function readable and each helper individually testable.</p>
<p>Don't try to write perfect code the first time — get it working first, then clean it up. Premature optimization during the translation phase introduces bugs.</p>
<pre><code>// Pseudocode:
// function twoSum(arr, target):
//   map = empty dictionary
//   for i, num in arr:
//     complement = target - num
//     if complement in map: return [map[complement], i]
//     map[num] = i

// Step 1: function signature
function twoSum(arr, target) {
  // Step 2: initialize data structure
  const map = new Map();
  // Step 3: main loop
  for (let i = 0; i &lt; arr.length; i++) {
    const complement = target - arr[i];
    // Step 4: check condition
    if (map.has(complement)) return [map.get(complement), i];
    // Step 5: update data structure
    map.set(arr[i], i);
  }
  return null; // edge case: no solution
}</code></pre>
<p><strong>Each pseudocode line becomes at most 1-3 lines of code</strong>. If a translation is getting complex, refactor the pseudocode to be more specific first.</p>
<p>After translating each section, mentally trace through with the simplest valid input to verify correctness before moving to the next section.</p>`
        },
        {
          q: "How should you test your solution with examples?",
          a: `<p>Testing validates that your solution is correct. Run through: the given example, a new example you expect to work, an edge case that might break things, and a case where the answer is different from what you initially expected.</p>
<p>Trace through line by line for at least one input — don't just assume it works after writing. This is especially important in interviews where running code isn't always possible.</p>
<p>For recursive functions, trace the call stack. For DP, trace the dp table values. For sorting, trace the state of the array after each step.</p>
<pre><code>// Testing binary search:
function binarySearch(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo &lt;= hi) {
    const mid = (lo + hi) &gt;&gt; 1;
    if (arr[mid] === target) return mid;
    arr[mid] &lt; target ? lo = mid + 1 : hi = mid - 1;
  }
  return -1;
}
// Test 1: normal case
// arr=[1,3,5,7,9], target=5
// lo=0,hi=4,mid=2: arr[2]=5===5 =&gt; return 2 ✓

// Test 2: not found
// arr=[1,3,5,7,9], target=6
// lo=0,hi=4,mid=2: arr[2]=5&lt;6, lo=3
// lo=3,hi=4,mid=3: arr[3]=7&gt;6, hi=2
// lo=3&gt;hi=2: return -1 ✓

// Test 3: edge (single element)
// arr=[5], target=5: lo=0,hi=0,mid=0: arr[0]=5 =&gt; return 0 ✓</code></pre>
<p><strong>Step-by-step tracing catches pointer/index bugs</strong> (off-by-one, wrong update direction) that look correct visually but fail on specific inputs.</p>
<p>For complex algorithms, create a simple test harness: const tests = [{input:[], expected:0},{input:[1],expected:1},...]. Run all tests and compare automatically.</p>`
        },
        {
          q: "When and how should you optimize your solution?",
          a: `<p>Optimize AFTER you have a correct solution. Never optimize a program that doesn't work first. Premature optimization introduces complexity and bugs before you've verified correctness.</p>
<p>Optimization target: identify the bottleneck first. Is it the time complexity of the main loop? An inner loop that could use a hash map? Redundant computation that could be memoized?</p>
<p>State the current complexity, identify the bottleneck, explain your optimization, then implement. Run the same test cases on the optimized version to verify it's still correct.</p>
<pre><code>// Optimizing step by step:
// 1. Brute force: O(n²)
function containsDuplicate_brute(arr) {
  for (let i = 0; i &lt; arr.length; i++)
    for (let j = i+1; j &lt; arr.length; j++)
      if (arr[i] === arr[j]) return true;
  return false;
}

// 2. Identify bottleneck: inner loop is O(n) lookup
// 3. Optimization: use Set for O(1) lookup
function containsDuplicate(arr) {
  const seen = new Set();
  for (const x of arr) {
    if (seen.has(x)) return true;
    seen.add(x);
  }
  return false;
}
// O(n²) =&gt; O(n) time, O(1) =&gt; O(n) space
// Verify: runs correctly on same test cases</code></pre>
<p><strong>Optimization hierarchy by impact:</strong> (1) Change algorithm class (O(n²)→O(n log n)), (2) Change data structure for O(n)→O(1) operations, (3) Reduce constant factors (avoid function calls, cache-friendly access).</p>
<p>In interviews, discuss the tradeoffs: "This O(n) space optimization makes the code faster but uses more memory. Is that acceptable given the constraints?"</p>`
        },
        {
          q: "Why is communicating your thinking important during problem solving?",
          a: `<p>Problem-solving communication demonstrates that you can work collaboratively on complex technical challenges — a core engineering skill. Your interviewer needs to understand your thought process to assess your engineering judgment, not just your final answer.</p>
<p>Thinking out loud allows your interviewer to give you hints if you're stuck, correct misconceptions early, and learn about your reasoning even if your solution isn't perfect.</p>
<p>Many interviewers explicitly say: a candidate who communicates well with a suboptimal solution is preferred over a silent candidate with a perfect one.</p>
<pre><code>// Good communication pattern during problem solving:
// "I see this is asking for the minimum path sum..."
// "My initial thought is DFS, but that might be O(2^n)..."
// "I notice there could be overlapping subproblems here..."
// "So I'll use DP with a 2D array..."
// "My base case is when we reach the bottom-right cell..."
// "Let me trace through: grid=[[1,3,1],[1,5,1],[4,2,1]]..."
// "Time O(m*n), space O(m*n), but I can reduce to O(n) with rolling array"</code></pre>
<p><strong>Structure your communication:</strong> state the problem, your approach, complexity, and edge cases \u2014 in that order. This mirrors how professional engineers design systems.</p>
<p>For take-home or live coding interviews: add code comments that explain WHY (not what) each section does. Comments show you think about code readability.</p>`
        },
        {
          q: "How do you use the two-pointer technique effectively?",
          a: `<p>Two pointers work by maintaining two indices that move based on conditions, eliminating the need for nested loops. Requires either a sorted array or a naturally ordered structure.</p>
<p>Patterns: left+right converging (sum problems, palindrome check), same-direction moving (sliding window, fast-slow), anchor+runner (removing duplicates).</p>
<p>O(n) time from a single pass instead of O(n²) nested. The key invariant: what does each pointer represent and how does moving each pointer bring you closer to the solution?</p>
<pre><code>// Two sum (sorted array)
function twoSum(arr, target) {
  let lo = 0, hi = arr.length - 1;
  while (lo &lt; hi) {
    const sum = arr[lo] + arr[hi];
    if (sum === target) return [lo, hi];
    sum &lt; target ? lo++ : hi--;
  }
  return null;
}

// Remove duplicates from sorted array (in-place)
function removeDups(arr) {
  let write = 1; // write pointer
  for (let read = 1; read &lt; arr.length; read++) // read pointer
    if (arr[read] !== arr[read-1]) arr[write++] = arr[read];
  return write; // new length
}
// arr=[1,1,2,3,3] =&gt; [1,2,3,...], returns 3</code></pre>
<p><strong>Sort first when needed:</strong> two pointers require ordered structure. If unsorted, sorting is O(n log n) but still better than O(n²) brute force.</p>
<p>Three-sum: fix one element, then use two pointers on the rest. Four-sum: fix two elements with nested loops, two pointers on the rest.</p>`
        },
        {
          q: "How do you apply dynamic programming to interval scheduling?",
          a: `<p>Weighted interval scheduling: each job has a start, end, and profit. Select non-overlapping jobs to maximize total profit. Sort by end time. DP[i] = max profit using jobs 1..i.</p>
<p>For each job i: either skip it (dp[i] = dp[i-1]) or take it and add to the best compatible job (last job j that ends before job i starts).</p>
<p>Finding the latest compatible job uses binary search on end times — O(log n) per job, total O(n log n).</p>
<pre><code>function weightedIntervalScheduling(jobs) {
  // jobs = [[start, end, profit], ...]
  jobs.sort((a, b) =&gt; a[1] - b[1]); // sort by end time
  const ends = jobs.map(j =&gt; j[1]);
  const dp = new Array(jobs.length + 1).fill(0);
  for (let i = 1; i &lt;= jobs.length; i++) {
    const [start, end, profit] = jobs[i-1];
    // Binary search: find last job that ends &lt;= start
    let lo = 0, hi = i - 1, compat = 0;
    while (lo &lt;= hi) {
      const mid = (lo + hi) &gt;&gt; 1;
      ends[mid] &lt;= start ? (compat = mid + 1, lo = mid + 1) : hi = mid - 1;
    }
    dp[i] = Math.max(dp[i-1], profit + dp[compat]);
  }
  return dp[jobs.length];
}
// jobs=[[0,3,3],[2,5,4],[4,6,2],[6,8,5]] =&gt; 8 (jobs 0+3 or 1+3)</code></pre>
<p><strong>dp[i] = max(dp[i-1], profit[i] + dp[lastCompatible(i)])</strong> — include or skip. Binary search on sorted end times makes finding lastCompatible O(log n).</p>
<p>Simpler but related: 0/1 knapsack maps directly to interval scheduling. Activity selection (unweighted, maximize count) is solvable with greedy alone.</p>`
        },
        {
          q: "How do you approach problems involving graphs?",
          a: `<p>First determine the graph type: directed/undirected, weighted/unweighted, cyclic/acyclic, connected/disconnected. The type determines the appropriate algorithm.</p>
<p>Build an adjacency list representation (most common). Choose BFS for shortest path in unweighted graphs, Dijkstra for weighted non-negative, DFS for connectivity, topological sort for DAGs.</p>
<p>Represent cities as nodes, roads as edges. Social networks, dependency graphs, state machines — all can be modeled as graphs.</p>
<pre><code>// Build adjacency list from edge list
function buildGraph(n, edges) {\n  const graph = Array.from({length: n}, () =&gt; []);\n  for (const [u, v] of edges) {\n    graph[u].push(v);\n    graph[v].push(u); // undirected\n  }\n  return graph;\n}\n\n// BFS: shortest path in unweighted graph\nfunction bfs(graph, start, end) {\n  const queue = [[start, 0]], visited = new Set([start]);\n  while (queue.length) {\n    const [node, dist] = queue.shift();\n    if (node === end) return dist;\n    for (const nb of graph[node]) {\n      if (!visited.has(nb)) { visited.add(nb); queue.push([nb, dist+1]); }\n    }\n  }\n  return -1; // unreachable\n}</code></pre>
<p><strong>BFS gives shortest path</strong> in unweighted graphs because it explores level by level. DFS is simpler but doesn't guarantee shortest path.</p>
<p>When asked for "minimum steps", "fewest moves", or "shortest path" — default to BFS. When asked for "all paths", "exists a path", or "cycle detection" — default to DFS.</p>`
        },
        {
          q: "How do you design a solution for string manipulation problems?",
          a: `<p>String problems often have multiple approaches: brute force O(n²) using nested loops + string concatenation, O(n) using hash maps for frequency counting, or O(n log n) with sorting.</p>
<p>Key operations: character frequency counting, palindrome checking, anagram detection, pattern matching, and transformation. Most have efficient O(n) solutions with hash maps or two pointers.</p>
<p>JavaScript strings are immutable — avoid building strings in loops with += (O(n²)). Use array + join instead (O(n)).</p>
<pre><code>// Character frequency: O(n)\nfunction charFreq(s) {\n  const freq = {};\n  for (const c of s) freq[c] = (freq[c] || 0) + 1;\n  return freq;\n}\n\n// Anagram check: O(n)\nfunction isAnagram(s, t) {\n  if (s.length !== t.length) return false;\n  const freq = charFreq(s);\n  for (const c of t) {\n    if (!freq[c]) return false;\n    freq[c]--;\n  }\n  return true;\n}\n\n// Efficient string building: O(n)\nconst parts = [];\nfor (let i = 0; i &lt; n; i++) parts.push(someChar);\nconst result = parts.join(''); // NOT result += char each time!</code></pre>
<p><strong>map.set / object frequency pattern</strong> is the most versatile tool for string problems — character frequency underlies anagrams, permutations, and substrings.</p>
<p>For complex patterns (regex), use the built-in RegExp. For competitive/interview problems, implement manually to demonstrate understanding of the underlying algorithm.</p>`
        },
        {
          q: "How do you solve problems involving binary search on answers?",
          a: `<p>Binary search on the answer is a powerful technique: instead of searching for a specific value in a sorted array, you binary search over the answer space itself. \"Can we achieve X?\" is a yes/no predicate.</p>
<p>If the predicate is monotone (answers go from false to true or vice versa as X increases), binary search finds the boundary. Common for: minimum time, maximum capacity, smallest/largest feasible value.</p>
<p>Template: lo = minimum possible answer, hi = maximum, check if mid is feasible. Converge to the boundary.</p>
<pre><code>// Example: koko eating bananas (minimum eating speed)\nfunction minEatingSpeed(piles, h) {\n  let lo = 1, hi = Math.max(...piles);\n  function canFinish(speed) {\n    return piles.reduce((t, p) =&gt; t + Math.ceil(p/speed), 0) &lt;= h;\n  }\n  while (lo &lt; hi) {\n    const mid = (lo + hi) &gt;&gt; 1;\n    canFinish(mid) ? hi = mid : lo = mid + 1; // find minimum valid speed\n  }\n  return lo;\n}\n// piles=[3,6,7,11], h=8 =&gt; 4 (minimum speed to finish in h hours)</code></pre>
<p><strong>Identify the predicate:</strong> restating the problem as \"is X feasible?\" reveals whether binary search on the answer applies. If the predicate is monotone, you can binary search.</p>
<p>Similar problems: capacity to ship packages, split array largest sum, minimum days to make bouquets. All use binary search on the answer with a feasibility check.</p>`
        },
        {
          q: "How do you implement topological sort?",
          a: `<p>Topological sort orders nodes in a DAG (Directed Acyclic Graph) such that for every edge u→v, u comes before v. Used for dependency resolution: build systems, course prerequisites, task scheduling.</p>\n<p>Kahn's algorithm (BFS): start with nodes having in-degree 0, process them, decrement neighbors' in-degrees, add new 0-in-degree nodes to queue.</p>\n<p>DFS approach: process a node's dependencies recursively, then add the node to the result. Reverse the result for topological order.</p>\n<pre><code>// Kahn's algorithm: O(V+E)\nfunction topoSort(n, edges) {\n  const inDeg = Array(n).fill(0);\n  const graph = Array.from({length:n}, ()=>[]);\n  for (const [u,v] of edges) { graph[u].push(v); inDeg[v]++; }\n  const queue = [];\n  for (let i = 0; i &lt; n; i++) if (inDeg[i] === 0) queue.push(i);\n  const result = [];\n  while (queue.length) {\n    const node = queue.shift();\n    result.push(node);\n    for (const nb of graph[node])\n      if (--inDeg[nb] === 0) queue.push(nb);\n  }\n  return result.length === n ? result : []; // empty = cycle detected\n}\n// edges=[[0,1],[0,2],[1,3],[2,3]] =&gt; [0,1,2,3] or [0,2,1,3]</code></pre>
<p><strong>Cycle detection:</strong> if result.length !== n after Kahn's, a cycle exists (not all nodes processed). Topological sort is only possible on DAGs.</p>
<p>Course Schedule problems on LeetCode are essentially topological sort. Build prerequisites as edges, check for cycles, or return sorted order.</p>`
        },
        {
          q: "How do you analyze and improve space complexity?",
          a: `<p>Space complexity includes: input space, auxiliary space (extra data structures), and stack space (recursion depth). Usually auxiliary space is what we optimize.</p>\n<p>Common reductions: DP 2D table → rolling array (O(m*n) → O(n)), DFS recursion → iterative stack (O(h) where h is height → explicit stack), output array reuse (modify input in-place).</p>\n<p>Trading space for time usually increases space. Trading time for space usually means recalculating things (slower). Be explicit about which you're doing.</p>\n<pre><code>// 2D DP table: O(m*n) space\nconst dp = Array.from({length:m}, ()=&gt;Array(n).fill(0));\n// dp[i][j] depends only on dp[i-1][j] and dp[i][j-1]\n\n// Rolling array: O(n) space (only keep previous row)\nlet prev = Array(n).fill(0), curr = Array(n).fill(0);\nfor (let i = 0; i &lt; m; i++) {\n  for (let j = 0; j &lt; n; j++)\n    curr[j] = prev[j-1] + prev[j]; // use prev row\n  [prev, curr] = [curr, prev]; // swap\n}\n\n// Recursion depth to stack: O(n) to O(n) but avoids call stack\nfunction iterativeDFS(root) {\n  const stack = [root];\n  while (stack.length) {\n    const node = stack.pop();\n    if (node.right) stack.push(node.right);\n    if (node.left) stack.push(node.left);\n  }\n}</code></pre>
<p><strong>Rolling array optimization:</strong> works whenever DP[i] only depends on DP[i-1]. Reduces spatial complexity from O(n²) to O(n) for many classic DP problems.</p>
<p>Stack space from recursion is O(depth) — for balanced trees this is O(log n), for unbalanced it's O(n). Use iterative approaches for production code on untrusted data.</p>`
        },
        {
          q: "How do you solve problems involving permutations and combinations?",
          a: `<p>Permutations (order matters): n! total for n distinct items. Use backtracking with swap-back or position selection. Common in: anagram generation, arrangement problems.</p>\n<p>Combinations (order doesn't matter): C(n,k) = n!/(k!(n-k)!) subsets of size k. Use backtracking with a start index to avoid repetition and skip previously used elements.</p>\n<p>Key difference in code: for permutations, iterate from current start to end and swap; for combinations, iterate with start index always increasing.</p>\n<pre><code>// Permutations: O(n! * n)\nfunction permute(nums) {\n  const result = [];\n  function bt(start) {\n    if (start === nums.length) { result.push([...nums]); return; }\n    for (let i = start; i &lt; nums.length; i++) {\n      [nums[start], nums[i]] = [nums[i], nums[start]]; // swap\n      bt(start + 1);\n      [nums[start], nums[i]] = [nums[i], nums[start]]; // undo\n    }\n  }\n  bt(0);\n  return result;\n}\n\n// Combinations: O(C(n,k) * k)\nfunction combine(n, k) {\n  const result = [];\n  function bt(start, current) {\n    if (current.length === k) { result.push([...current]); return; }\n    for (let i = start; i &lt;= n; i++) {\n      current.push(i);\n      bt(i + 1, current); // i+1: no reuse, increasing order\n      current.pop();\n    }\n  }\n  bt(1, []);\n  return result;\n}</code></pre>
<p><strong>The difference:</strong> permutations loop from start and SWAP (all positions considered), combinations loop from start and PUSH (always increasing, no reuse).</p>\n<p>For combinations with repetition: use bt(i, current) instead of bt(i+1, current) to allow reusing the same element.</p>`
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
          a: `<p>Bitwise operations work on individual binary bits of integers. AND, OR, and XOR each compare corresponding bits of two numbers and produce a result bit based on a truth table.</p>
<p>AND (both 1 → 1): useful for masking bits, checking if a bit is set, or extracting specific bit fields. OR (either 1 → 1): setting specific bits to 1. XOR (bits differ → 1): toggling bits, swapping values, finding differences.</p>
<p>These operations are O(1) and extremely fast — implemented in single CPU instructions. Much faster than multiplication/division for specific operations.</p>
<pre><code>// AND: 1 only if BOTH bits are 1
console.log(5 &amp; 3);  // 1  (101 &amp; 011 = 001)
// Use: clear bits, check if bit is set
console.log(7 &amp; 0xF); // 7 (keep lower 4 bits - mask)

// OR: 1 if EITHER bit is 1
console.log(5 | 3);  // 7  (101 | 011 = 111)
// Use: set specific bits
console.log(4 | 1);  // 5 (100 | 001 = 101)

// XOR: 1 if bits DIFFER
console.log(5 ^ 3);  // 6  (101 ^ 011 = 110)
// Key property: a^a=0, a^0=a, XOR is reversible!
console.log(6 ^ 3);  // 5  (reversing: 110 ^ 011 = 101)</code></pre>
<p><strong>XOR is reversible:</strong> a^b^b = a. This property is used for cryptography (one-time pad), error correction, and finding missing/duplicate elements.</p>
<p>NOT (~): flips all bits. In JavaScript (32-bit signed), ~n = -(n+1). ~5 = -6. Useful for creating inverse masks: ~(1&lt;&lt;pos) has all bits set except position pos.</p>`
        },
        {
          q: "Explain left shift and right shift operations.",
          a: `<p>Left shift (<<): moves all bits left by n positions, filling with zeros on the right. Equivalent to multiplying by 2^n. Each position shift doubles the value.</p>
<p>Signed right shift (>>): moves all bits right by n positions, filling with the sign bit. Equivalent to dividing by 2^n (floor for positive, ceiling for negative in magnitude).</p>
<p>Unsigned right shift (>>>): always fills with 0 from the left, ignoring sign. Use this for treating numbers as unsigned 32-bit integers in JavaScript.</p>
<pre><code>// Left shift: multiply by powers of 2
console.log(1 &lt;&lt; 0);  // 1
console.log(1 &lt;&lt; 1);  // 2
console.log(1 &lt;&lt; 2);  // 4
console.log(5 &lt;&lt; 1);  // 10 (multiply by 2)
console.log(5 &lt;&lt; 2);  // 20 (multiply by 4)

// Signed right shift: integer divide by powers of 2
console.log(20 &gt;&gt; 1); // 10 (divide by 2)
console.log(20 &gt;&gt; 2); // 5  (divide by 4)
console.log(-8 &gt;&gt; 1); // -4 (sign bit preserved!)

// Unsigned right shift:
console.log(-1 &gt;&gt;&gt; 0); // 4294967295 (all 32 bits set = max uint32)
console.log(-1 &gt;&gt; 0);  // -1 (sign bit preserved)</code></pre>
<p><strong>Fast power-of-2 operations:</strong> x &lt;&lt; n is faster than Math.pow(2,n) and n * Math.pow(2,k). Used in hash functions, low-level algorithms, and memory addressing.</p>
<p>Common interview trick: mid = lo + ((hi - lo) >> 1) is safer than (lo+hi)/2 — avoids integer overflow risk in languages with fixed-width integers.</p>`
        },
        {
          q: "Check if a number is even or odd using bitwise operation.",
          a: `<p>The least significant bit (LSB, bit 0) determines parity: if bit 0 is 1, the number is odd; if 0, it's even. AND with 1 to extract this bit.</p>
<p>This is faster than n % 2 because it's a single bitwise AND operation vs division. Modern CPUs often optimize % 2 similarly, but the bitwise version expresses intent clearly.</p>
<p>Knowing that odd/even correlates with the LSB is fundamental for many bit manipulation patterns.</p>
<pre><code>function isEven(n) { return (n &amp; 1) === 0; }
function isOdd(n)  { return (n &amp; 1) === 1; }

// Examples:
console.log(4 &amp; 1); // 0 =&gt; even (100 &amp; 001 = 000)
console.log(7 &amp; 1); // 1 =&gt; odd  (111 &amp; 001 = 001)
console.log(0 &amp; 1); // 0 =&gt; even
console.log(-3 &amp; 1); // 1 =&gt; odd (works for negatives too: two's complement)

// Branchless even/odd check:
console.log(!!(n &amp; 1) ? 'odd' : 'even');</code></pre>
<p><strong>Works for negative numbers:</strong> in two's complement representation, the LSB still correctly identifies even/odd for negative integers (e.g., -3 in binary ...11111101, LSB=1, odd).</p>
<p>LSB patterns appear frequently: checking if numbers in a loop are even (for batch processing), determining which half of a binary partition a number belongs to, etc.</p>`
        },
        {
          q: "Swap two numbers without using a temporary variable.",
          a: `<p>XOR-swap uses the reversibility of XOR: a^b^b = a. Three XOR operations exchange two values without any extra memory. Works for integers of the same bit-width.</p>
<p>Steps: a^=b makes a = a^b; b^=a makes b = (a^b)^b = a (original); a^=b makes a = (a^b)^a = b (original).</p>
<p>Caveat: XOR-swap fails when a and b are the same variable or reference the same memory location — 3 XORed with itself gives 0.</p>
<pre><code>// XOR swap
function swapXOR(a, b) {
  a = a ^ b; // a now holds a XOR b
  b = a ^ b; // b = (a^b)^b = a (original a)
  a = a ^ b; // a = (a^b)^a = b (original b)
  return [a, b];
}
// swapXOR(5, 3) =&gt; [3, 5] ✓
// swapXOR(7, 7) =&gt; [0, 0] ✗ (bug when same value AND same reference!)

// ES6 destructuring swap (cleaner and safe):
let x = 5, y = 3;
[x, y] = [y, x]; // swap (no temp variable needed in JS)

// Arithmetic swap (can overflow): a+=b; b=a-b; a-=b;</code></pre>
<p><strong>XOR-swap is historically used in low-level code</strong> (embedded, assembly) where temporary variables are expensive. Modern CPUs handle register swapping efficiently anyway.</p>
<p>In JavaScript, destructuring swap [a,b]=[b,a] is cleaner, safer, and more readable. Use XOR-swap only when demonstrating bit manipulation knowledge.</p>`
        },
        {
          q: "Check if a number is a power of 2 using bitwise operation.",
          a: `<p>A power of 2 has exactly ONE bit set in binary (1, 10, 100, 1000...). n &amp; (n-1) clears the lowest set bit. For a power of 2, this makes the result zero.</p>
<p>n-1 for a power of 2 gives all 1s below the single set bit (e.g., 8-1=7: 1000-1=0111). ANDing these gives 0.</p>
<p>Always check n > 0 first — 0 is not a power of 2 but 0 &amp; (0-1) = 0 would incorrectly pass the test.</p>
<pre><code>function isPowerOf2(n) {
  return n &gt; 0 &amp;&amp; (n &amp; (n - 1)) === 0;
}
// isPowerOf2(1)  =&gt; true  (1 = 0001, n-1=0000, AND=0)
// isPowerOf2(2)  =&gt; true  (2 = 0010, n-1=0001, AND=0)
// isPowerOf2(4)  =&gt; true  (4 = 0100, n-1=0011, AND=0)
// isPowerOf2(6)  =&gt; false (6 = 0110, n-1=0101, AND=0100 ≠ 0)
// isPowerOf2(0)  =&gt; false (0 fails first condition n&gt;0)
// isPowerOf2(-8) =&gt; false (negative numbers aren't powers of 2 here)</code></pre>
<p><strong>n &amp; (n-1) clears the lowest set bit</strong> — this is the key primitive for counting set bits (Brian Kernighan) and detecting exactly-one-set-bit (power of 2).</p>
<p>Related: power of 4 has its one set bit at an even position. Check: isPowerOf2(n) &amp;&amp; (n &amp; 0xAAAAAAAA) === 0 (bits at odd positions only for powers of 4).</p>`
        },
        {
          q: "Count the number of set bits (1s) in a number.",
          a: `<p>Brian Kernighan's algorithm: n &amp; (n-1) clears the lowest set bit each iteration. Count iterations until n becomes 0. Time = O(number of set bits), not O(32).</p>
<p>Naive approach: check each bit with n &amp; 1 and shift. O(32) always. Kernighan's is faster when set bits are sparse (few 1s).</p>
<p>Lookup table approach: precompute popcount for all 8-bit values (256 entries), sum four lookups for 32-bit number. O(1) per query after O(256) preprocessing.</p>
<pre><code>// Brian Kernighan: O(set bits count)
function countSetBits(n) {
  let count = 0;
  while (n) {
    n &amp;= (n - 1); // remove lowest set bit
    count++;
  }
  return count;
}
// countSetBits(13) =&gt; 3 (1101 has three 1s)
// Steps: 1101 → 1100 (removed bit0) → 1000 (removed bit2) → 0000 (removed bit3), count=3

// Naive approach (always O(32)):
function countBitsNaive(n) {
  let count = 0;
  while (n) { if (n &amp; 1) count++; n &gt;&gt;&gt;= 1; }
  return count;
}</code></pre>
<p><strong>n &amp; (n-1) strips the lowest set bit in O(1)</strong> — this elegant one-liner is used in Kernighan's counting, power-of-2 checking, and many bit manipulation patterns.</p>
<p>In C/C++: __builtin_popcount(n) uses a hardware instruction (POPCNT) for O(1) direct hardware computation. In JS: no direct equivalent, but the bit patterns are the same.</p>`
        },
        {
          q: "Toggle a specific bit in a number.",
          a: `<p>XOR with a mask that has 1 at the target position. XOR with 1 flips the bit (0→1, 1→0) while XOR with 0 preserves it. This is why XOR is the toggle operator.</p>
<p>Bit position n means 2^n in decimal. Use 1 &lt;&lt; pos to create the mask for position pos (0-indexed from right).</p>
<p>Toggling is useful in bitmasked state flags (toggle feature on/off), LED display patterns, and bitmask DP state transitions.</p>
<pre><code>function toggleBit(n, pos) {
  return n ^ (1 &lt;&lt; pos);
}
// toggleBit(5, 1) =&gt; 7  (101 ^ 010 = 111, bit 1 was 0 → 1)
// toggleBit(5, 0) =&gt; 4  (101 ^ 001 = 100, bit 0 was 1 → 0)
// toggleBit(5, 2) =&gt; 1  (101 ^ 100 = 001, bit 2 was 1 → 0)

// Summary of all single-bit operations:
const mask = 1 &lt;&lt; pos;
const check  = (n &amp; mask) !== 0;  // is this bit set?
const setB   = n | mask;           // set this bit to 1
const clear  = n &amp; ~mask;          // clear this bit to 0
const toggle = n ^ mask;           // toggle this bit</code></pre>
<p><strong>XOR = toggle operator:</strong> x^1 flips bit, x^0 preserves bit. This is different from AND (clear) and OR (set). All three are needed for complete bit manipulation.</p>
<p>Combined operations example: toggle bits 0 and 2 in n=5: n ^ (1|4) = n ^ 5 = 5^5=0. Applying the same mask twice restores the original (toggle twice = no change).</p>`
        },
        {
          q: "Find the missing number in an array using XOR.",
          a: `<p>XOR has the property that x^x=0 and x^0=x. XOR all expected values 1..n, then XOR all array elements. Paired values cancel out, leaving the single missing value.</p>
<p>This is O(n) time and O(1) space — better than the sum formula (which can overflow), equal in simplicity. Both methods are valid and often seen in interview answers.</p>
<p>The XOR approach works because duplicates cancel: each number from 1 to n XORed with itself (from the array) leaves 0. The missing number has no pair to cancel with.</p>
<pre><code>function findMissing(arr, n) {
  let xor = 0;
  for (let i = 1; i &lt;= n; i++) xor ^= i;      // XOR all 1..n
  for (const val of arr) xor ^= val;            // XOR all array elements
  return xor;                                    // remaining = missing number
}
// findMissing([1,2,4,5], 5) =&gt; 3
// Process: 1^2^3^4^5 ^ 1^2^4^5 = 3 (paired values cancel: 1^1=0, etc.)

// Alternative: sum formula O(n), O(1) space
function findMissingSum(arr, n) {
  return (n * (n + 1)) / 2 - arr.reduce((s,x) =&gt; s+x, 0);
}</code></pre>
<p><strong>XOR approach is overflow-safe</strong> — in fixed-width integer languages, the sum n*(n+1)/2 can overflow but XOR never does (it's bitwise, not arithmetic).</p>
<p>Extension: if there are TWO missing numbers (not one), the XOR approach extends: XOR gives a^b, use set-bit partitioning to find a and b separately.</p>`
        },
        {
          q: "Multiply a number by 2 using bitwise operation.",
          a: `<p>Left-shifting by 1 position multiplies by 2. This works because shifting binary digits left is equivalent to multiplying by the base (2 in binary), just as shifting decimal digits left multiplies by 10.</p>
<p>More generally, n &lt;&lt; k = n * 2^k. Right-shift n >> k = Math.floor(n / 2^k). These are the fastest integer multiply/divide operations.</p>
<p>Used in: hash functions, memory alignment calculations, converting between byte sizes, and anywhere you need fast power-of-2 arithmetic.</p>
<pre><code>function multiplyBy2(n) { return n &lt;&lt; 1; }    // n * 2
function multiplyBy4(n) { return n &lt;&lt; 2; }    // n * 4
function multiplyBy8(n) { return n &lt;&lt; 3; }    // n * 8
function divideBy2(n)   { return n &gt;&gt; 1; }    // Math.floor(n/2)
function divideBy4(n)   { return n &gt;&gt; 2; }    // Math.floor(n/4)

// Combine: multiply by non-power-of-2 (e.g., multiply by 6 = 4+2)
function multiplyBy6(n) { return (n &lt;&lt; 2) + (n &lt;&lt; 1); }

// Negate (two's complement): flip bits + add 1
function negate(n) { return ~n + 1; }
console.log(negate(5));  // -5
console.log(negate(-5)); // 5</code></pre>
<p><strong>Bit-shift arithmetic for arbitrary multipliers:</strong> any multiplication can be expressed as sum-of-shifts. Compilers already do this optimization for powers of 2.</p>
<p>Watch for overflow: left shift can lose bits. For 32-bit integers in JavaScript, shifting beyond 31 causes unexpected behavior. Use BigInt for large numbers.</p>`
        },
        {
          q: "Check if a specific bit is set in a number.",
          a: `<p>Create a mask with only the target bit set: 1 &lt;&lt; pos. AND the number with this mask — if the result is non-zero (truthy), the bit at position pos is 1.</p>
<p>Bit positions are 0-indexed from the right (LSB = position 0). For n=5 (binary 101): bit 0 is 1, bit 1 is 0, bit 2 is 1.</p>
<p>This pattern is the foundation: check, set, clear, and toggle bits all use (1 &lt;&lt; pos) as the mask.</p>
<pre><code>function isBitSet(n, pos) {
  return (n &amp; (1 &lt;&lt; pos)) !== 0;
}
// isBitSet(5, 0) =&gt; true  (101 bit 0 = 1)
// isBitSet(5, 1) =&gt; false (101 bit 1 = 0)
// isBitSet(5, 2) =&gt; true  (101 bit 2 = 1)

// Set a bit: n | (1 &lt;&lt; pos)
// Clear a bit: n &amp; ~(1 &lt;&lt; pos)
// Toggle a bit: n ^ (1 &lt;&lt; pos)</code></pre>
<p><strong>Four bit operations:</strong> check (AND), set (OR), clear (AND NOT), toggle (XOR). These four cover all single-bit manipulation needs.</p>
<p>~(1 &lt;&lt; pos) creates a mask with all bits 1 EXCEPT position pos. ANDing with it clears that bit while leaving all others unchanged.</p>`
        },
        {
          q: "Find the two non-repeating elements in an array where all others appear twice.",
          a: `<p>XOR all elements: the result = a^b (the two unique numbers, since all pairs cancel). Then find a set bit in a^b (the lowest set bit: a^b &amp; -(a^b)). This bit is 1 in one of a or b but not the other.</p>
<p>Use this bit to partition elements into two groups and XOR each group independently — each group's XOR gives one of the two unique elements.</p>
<p>This elegant solution uses O(1) space and O(n) time — no sorting or hash maps needed.</p>
<pre><code>function twoNonRepeating(arr) {
  let xor = 0;
  for (const n of arr) xor ^= n;  // xor = a^b
  // Get rightmost set bit (differs between a and b)
  const diffBit = xor &amp; (-xor);   // isolate lowest set bit
  let a = 0, b = 0;
  for (const n of arr) {
    if (n &amp; diffBit) a ^= n;       // group with diffBit set
    else b ^= n;                    // group without diffBit
  }
  return [a, b];
}
// twoNonRepeating([1,2,3,4,2,3]) =&gt; [1,4] (order may vary)</code></pre>
<p><strong>Lowest set bit trick:</strong> n &amp; (-n) isolates the rightmost 1 bit. -n in two's complement flips all bits and adds 1, so only the rightmost set bit survives the AND.</p>
<p>Extension: if three numbers don't repeat, use bit counting (count each bit position, take modulo 3) — pure XOR no longer works for three uniques.</p>`
        },
        {
          q: "Find the position of the rightmost set bit.",
          a: `<p>The rightmost set bit is the lowest-order bit that is 1. Use n &amp; (-n) to isolate it, then take log base 2 or count trailing zeros to get its position.</p>
<p>n &amp; (n-1) clears the lowest set bit. So n XOR (n&(n-1)) gives only the lowest set bit in one operation.</p>
<p>This is a building block for many bit manipulation problems, including counting set bits (Brian Kernighan) and XOR-based partitioning.</p>
<pre><code>// Method 1: n &amp; (-n) isolates rightmost set bit
function rightmostSetBit(n) {
  const bit = n &amp; (-n);
  return Math.log2(bit); // position (0-indexed)
}
// rightmostSetBit(12) =&gt; 2 (12=1100, rightmost 1 is bit 2)
// rightmostSetBit(8)  =&gt; 3 (8=1000, rightmost 1 is bit 3)

// Method 2: count trailing zeros
function trailingZeros(n) {
  if (n === 0) return -1;
  let pos = 0;
  while ((n &amp; 1) === 0) { n &gt;&gt;&gt;= 1; pos++; }
  return pos;
}
// trailingZeros(12) =&gt; 2 (12 = ...1100)</code></pre>
<p><strong>n &amp; (-n) is the fastest single-expression approach</strong> — two's complement makes -n have all trailing zeros flipped to zero and the first 1 preserved.</p>
<p>Modern CPUs have a CTZ (count trailing zeros) hardware instruction. In competitive programming, __builtin_ctz(n) in C++ or Number.prototype.toString based methods in JS achieve similar speed.</p>`
        },
        {
          q: "Implement integer addition without using the + operator.",
          a: `<p>Use XOR for sum without carry, AND for the carry bits, and shift carry left by 1. Repeat until carry becomes 0. This mirrors how binary addition works at the hardware level.</p>
<p>XOR gives the sum of bits without carry (like adding binary digits independently). AND &amp; left shift gives the carry that needs to propagate to the next bit.</p>
<p>This requires multiple iterations as carries can cascade left — like how 999+1=1000 requires multiple carries.</p>
<pre><code>function addWithoutPlus(a, b) {
  while (b !== 0) {
    const carry = (a &amp; b) &lt;&lt; 1;  // bits where both are 1 = carry
    a = a ^ b;                      // sum without carry
    b = carry;                       // carry to add in next iteration
  }
  return a;
}
// addWithoutPlus(5, 3) =&gt; 8
// Step 1: carry=(101&amp;011)&lt;&lt;1=010&lt;&lt;1=100, a=101^011=110, b=100
// Step 2: carry=(110&amp;100)&lt;&lt;1=100&lt;&lt;1=1000, a=110^100=010, b=1000
// Step 3: carry=(010&amp;1000)&lt;&lt;1=0, a=010^1000=1010=10, b=0 =&gt; 10 \u2713</code></pre>
<p><strong>XOR = sum without carry, AND = carry positions</strong> — these are the two fundamental binary addition operations implemented in hardware adder circuits.</p>
<p>In JavaScript, << on signed 32-bit integers may cause issues for very large numbers. Use BigInt for arbitrary precision or be mindful of 32-bit overflow.</p>`
        },
        {
          q: "Reverse the bits of a 32-bit unsigned integer.",
          a: `<p>Extract the LSB of n, shift it into the result from the MSB position. Repeat 32 times. Alternative: split into bytes, reverse each byte's bits (can use lookup table), then swap byte positions.</p>
<p>For JavaScript: numbers are 64-bit floats but bitwise ops treat them as signed 32-bit integers. Use >>> 0 for unsigned treatment.</p>
<p>Used in data compression, cryptography, digital signal processing, and implementing endian conversion.</p>
<pre><code>function reverseBits(n) {
  let result = 0;
  for (let i = 0; i &lt; 32; i++) {
    result = (result &lt;&lt; 1) | (n &amp; 1); // shift result left, add LSB of n
    n &gt;&gt;&gt;= 1;                            // shift n right (unsigned)
  }
  return result &gt;&gt;&gt; 0; // ensure unsigned 32-bit
}
// reverseBits(0b00000010100101000001111010011100)
//           =&gt; 0b00111001011110000010100101000000
//           =&gt; 964176192

// More explicit:
// n=43261596=0b00000010100101000001111010011100
// reversed =  0b00111001011110000010100101000000</code></pre>
<p><strong>>>> operator</strong> is unsigned right shift in JavaScript. Use n &gt;&gt;&gt;= 1 to ensure 0 is shifted in from the left, not the sign bit.</p>
<p>Optimization: if the same n is reversed multiple times, cache using a Map. For competitive programming, precompute all 256 reversed-byte values in a lookup table.</p>`
        },
        {
          q: "Determine if two integers have opposite signs using bitwise operators.",
          a: `<p>The sign bit (MSB) is 1 for negative numbers, 0 for positive. XOR the sign bits of both numbers: if result is 1, they have opposite signs.</p>
<p>The sign bit is bit 31 for 32-bit integers. XOR (a, b) has bit 31 set if and only if one of a or b (but not both) is negative.</p>
<p>Handles edge cases: 0 is treated as positive. In JavaScript, use >>> for unsigned treatment since >> would propagate the sign bit.</p>
<pre><code>function hasOppositeSigns(a, b) {
  return (a ^ b) &lt; 0;
}
// In JS, if (a^b)'s sign bit is 1 (i.e., result is negative), opposite signs
// hasOppositeSigns(-1, 5) =&gt; true  (-1 XOR 5 has MSB=1)
// hasOppositeSigns(3, 5)  =&gt; false (both positive, XOR MSB=0)
// hasOppositeSigns(0, -5) =&gt; true

// Explicit version:
function hasOppositeSigns2(a, b) {
  return ((a ^ b) &gt;&gt;&gt; 31) === 1; // check bit 31
}
// &gt;&gt;&gt; 31 shifts the sign bit to position 0 for clean comparison</code></pre>
<p><strong>XOR sign bit check:</strong> positive XOR negative = negative (MSB differs), positive XOR positive = positive. Single operation, no conditional needed.</p>
<p>Real-world use: graphics programming checks if line intersection crosses sign boundary for clipping algorithms. Optimized for inner loops where avoiding branches improves CPU pipeline efficiency.</p>`
        },
        {
          q: "Compute XOR of all numbers from 1 to N efficiently.",
          a: `<p>Pattern in XOR(1..n): repeat every 4 numbers. XOR(1..n) = n if n%4==0, 1 if n%4==1, n+1 if n%4==2, 0 if n%4==3. O(1) solution without looping.</p>
<p>This pattern emerges because XOR of 4 consecutive numbers starting at a multiple of 4 always equals 0: 4^5^6^7 = 0, 8^9^10^11 = 0, etc.</p>
<p>Crucial for range XOR queries: XOR(l..r) = XOR(1..r) ^ XOR(1..l-1) using this O(1) formula.</p>
<pre><code>function xorUpToN(n) {
  switch (n % 4) {
    case 0: return n;
    case 1: return 1;
    case 2: return n + 1;
    case 3: return 0;
  }
}
// xorUpToN(4) =&gt; 4 (1^2^3^4=4)
// xorUpToN(5) =&gt; 1 (1^2^3^4^5=1)
// xorUpToN(6) =&gt; 7 (1^2^3^4^5^6=7)
// xorUpToN(7) =&gt; 0 (1^2^3^4^5^6^7=0)

// Range XOR (l to r):
function rangeXOR(l, r) {
  return xorUpToN(r) ^ xorUpToN(l - 1);
}
// rangeXOR(3, 5) =&gt; 3^4^5 = 2</code></pre>
<p><strong>O(1) formula using mod 4 pattern:</strong> avoids O(n) loop entirely for prefix XOR. Range XOR query follows the same prefix XOR approach as prefix sum.</p>
<p>Used in competitive programming to answer multiple XOR range queries efficiently after O(1) preprocessing.</p>`
        },
        {
          q: "Find the original array from XOR array (difference array using XOR).",
          a: `<p>Given an XOR array where arr[i] = original[i] ^ original[i+1], recover original. With n-1 XOR differences and the first element, XOR-prefix-scan recovers each element.</p>
<p>XOR has the property that a^b^b = a, so XOR-ing back along the chain reverses the XOR encoding.</p>
<p>A broader application: XOR-based difference arrays are used in cryptography and error correction codes.</p>
<pre><code>function decode(encodedArr, first) {
  const original = [first];
  for (let i = 0; i &lt; encodedArr.length; i++) {
    original.push(original[i] ^ encodedArr[i]);
  }
  return original;
}
// encoded = [1^2, 2^3, 3^4] = [3, 1, 7], first=1
// decode([3,1,7], 1) =&gt; [1, 1^3=2, 2^1=3, 3^7=4] =&gt; [1,2,3,4]
// Verify: 1^2=3 \u2713, 2^3=1 \u2713, 3^4=7 \u2713

// Reconstruct even-indexed first element from full XOR array:
// Given encoded is XOR of consecutive pairs, use XOR(1..n) relationships</code></pre>
<p><strong>XOR-decoding prefix scan:</strong> each element is the XOR of the previous element and the encoded difference. Simple iterative scan recovers the entire array.</p>
<p>This is essentially running XOR on the "derivative" array (like undoing differentiation). XOR of XOR = identity, which makes the recovery clean.</p>`
        },
        {
          q: "Count numbers in range [L, R] with odd number of set bits.",
          a: `<p>For each number in [L, R], count set bits and check if odd. Or more efficiently, use the XOR pattern: numbers 0..n with odd set bits follow a predictable pattern (half of all numbers for large ranges).</p>
<p>Brian Kernighan counting + scanning is O((R-L+1) * log(maxValue)). For very large ranges, prefix counting with pattern observation is O(log n).</p>
<p>A number has odd set bits iff its population count (popcount) is odd — equivalent to the XOR of its bits being 1.</p>
<pre><code>function countOddBits(n) {
  // Count of numbers [0..n] with odd number of set bits
  let count = 0;
  for (let i = 0; i &lt;= n; i++) {\n    let bits = i, setBits = 0;\n    while (bits) { bits &amp;= bits-1; setBits++; }\n    if (setBits % 2 === 1) count++;\n  }\n  return count;\n}\n\n// Efficient: using XOR parity pattern\nfunction hasOddSetBits(n) {\n  // Check if n has odd popcount\n  let x = n;\n  x ^= x &gt;&gt; 16; x ^= x &gt;&gt; 8; x ^= x &gt;&gt; 4;\n  x ^= x &gt;&gt; 2; x ^= x &gt;&gt; 1;\n  return (x &amp; 1) === 1; // parity of all bits\n}\n// hasOddSetBits(7) =&gt; false (7=111, 3 bits, 3%2=1... wait, true)\n// hasOddSetBits(5) =&gt; false (5=101, 2 bits set)</code></pre>\n<p><strong>Parity XOR reduction:</strong> XOR all bits together gives the parity. Fold the 32-bit number by XOR-ing its two halves repeatedly until a single bit remains.</p>\n<p>Lookup table approach: precompute parity for all 8-bit values (256 entries), then combine parities for each 8-bit chunk of the number using XOR.</p>`
        },
        {
          q: "Generate all possible subsets using bit manipulation.",
          a: `<p>For n elements, there are 2^n subsets. Each number from 0 to 2^n-1 is a bitmask where bit i being 1 means element i is included in the subset.</p>\n<p>This approach directly maps binary representation to subset membership — no recursion needed. O(2^n * n) time to generate all subsets.</p>\n<p>More memory-efficient than recursive backtracking for listing all subsets, as no call stack is used.</p>\n<pre><code>function allSubsets(arr) {\n  const n = arr.length;\n  const result = [];\n  for (let mask = 0; mask &lt; (1 &lt;&lt; n); mask++) {\n    const subset = [];\n    for (let i = 0; i &lt; n; i++) {\n      if (mask &amp; (1 &lt;&lt; i)) subset.push(arr[i]); // bit i is set\n    }\n    result.push(subset);\n  }\n  return result;\n}\n// allSubsets([1,2,3]) generates all 8 subsets:\n// mask=0 (000): []\n// mask=1 (001): [1]\n// mask=2 (010): [2]\n// mask=3 (011): [1,2]\n// mask=4 (100): [3]\n// mask=5 (101): [1,3]\n// mask=6 (110): [2,3]\n// mask=7 (111): [1,2,3]</code></pre>\n<p><strong>Bitmask to subset mapping:</strong> bit i = 1 means include arr[i]. This pattern is used in: DP on subsets (TSP, set cover), game theory (bitmask DP), and combinatorial optimization.</p>\n<p>Bitmask DP: for subset-sum variant problems, use dp[mask] = best value achievable using the elements in the mask. Iterate over all 2^n subsets.</p>`
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
          a: `<p>Reversing a linked list requires changing each node's <code>next</code> pointer to point to its predecessor instead of its successor.</p>
<p>Use three pointers: <code>prev</code> (starts null), <code>curr</code> (starts at head), and <code>next</code> (saved before overwriting). In each iteration, redirect <code>curr.next</code> to <code>prev</code>, then advance all three pointers.</p>
<p>When <code>curr</code> becomes null, <code>prev</code> is the new head of the reversed list.</p>
<p>This runs in O(n) time and O(1) space — no extra data structure is needed.</p>
<pre><code>function reverseList(head) {
  let prev = null, curr = head;
  while (curr) {
    let next = curr.next;
    curr.next = prev;
    prev = curr;
    curr = next;
  }
  return prev;
}</code></pre>
<p><strong>Three-pointer technique:</strong> Always save <code>curr.next</code> before overwriting it — failing to do so loses the reference to the rest of the list.</p>
<p>A recursive reversal is also common: reverse the tail, then make the last node of the tail point back to the current node.</p>`
        },
        {
          q: "How do you detect a cycle in a linked list?",
          a: `<p>A cycle in a linked list means some node's <code>next</code> pointer points back to a previously visited node, causing infinite traversal.</p>
<p>Floyd's cycle detection algorithm (tortoise and hare) uses two pointers: slow (one step) and fast (two steps). If they ever point to the same node, a cycle exists.</p>
<p>If fast reaches null or fast.next is null, the list is finite with no cycle.</p>
<p>This runs in O(n) time and O(1) space — far better than storing visited nodes in a Set (O(n) space).</p>
<pre><code>function hasCycle(head) {
  let slow = head, fast = head;
  while (fast &amp;&amp; fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) return true;
  }
  return false;
}</code></pre>
<p><strong>Floyd's algorithm:</strong> The fast pointer gains one step on the slow pointer per iteration; if a cycle exists, it will inevitably lap the slow pointer.</p>
<p>To find where the cycle starts, reset one pointer to head after meeting and advance both at speed 1 — they meet at the cycle entry node.</p>`
        },
        {
          q: "How do you find the middle node of a linked list?",
          a: `<p>Finding the middle without knowing the list length requires a two-pointer technique to avoid two full traversals.</p>
<p>The slow pointer advances one step at a time while the fast pointer advances two steps. When the fast pointer reaches the end, the slow pointer is at the middle.</p>
<p>For an even-length list, the slow pointer lands on the second of the two middle nodes — this is the convention in most problems (e.g., merge sort splitting).</p>
<p>This technique runs in O(n) time with a single pass and O(1) space.</p>
<pre><code>function findMiddle(head) {
  let slow = head, fast = head;
  while (fast &amp;&amp; fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
}</code></pre>
<p><strong>Slow/fast pointer:</strong> The fast pointer moves twice as fast, so when it finishes the list, the slow pointer has covered exactly half the distance.</p>
<p>When used for splitting in merge sort, set <code>fast = head.next</code> to ensure slow stops at the first middle node for even-length lists.</p>`
        },
        {
          q: "How do you merge two sorted linked lists?",
          a: `<p>Merging two sorted linked lists is similar to the merge step in merge sort — pick the smaller head from each list at every step.</p>
<p>Use a dummy node as the head of the result list. Compare the current nodes of both lists, attach the smaller one to the result, and advance that list's pointer.</p>
<p>When one list is exhausted, attach the remaining nodes of the other list directly (they are already sorted).</p>
<p>This runs in O(n + m) time and O(1) extra space since no new nodes are created — only pointers are rewired.</p>
<pre><code>function mergeLists(l1, l2) {
  let dummy = {next: null}, curr = dummy;
  while (l1 &amp;&amp; l2) {
    if (l1.val &lt;= l2.val) { curr.next = l1; l1 = l1.next; }
    else { curr.next = l2; l2 = l2.next; }
    curr = curr.next;
  }
  curr.next = l1 || l2;
  return dummy.next;
}</code></pre>
<p><strong>Dummy head pattern:</strong> A dummy node eliminates special-casing for the first node insertion and keeps the loop logic uniform throughout.</p>
<p>The recursive version returns the smaller head and recursively merges the remaining — elegant but uses O(n) stack space for deeply nested calls.</p>`
        },
        {
          q: "How do you remove the nth node from the end?",
          a: `<p>Without knowing the list length, removing the nth node from the end requires either two passes or a two-pointer approach in one pass.</p>
<p>Use two pointers starting at a dummy node. Advance the first pointer n+1 steps ahead, then advance both until the first pointer reaches null — the second pointer is then just before the target node.</p>
<p>Using a dummy node before the head handles edge cases like removing the first node (n equals list length).</p>
<p>This runs in O(n) time with a single pass and O(1) extra space.</p>
<pre><code>function removeNthFromEnd(head, n) {
  let dummy = {next: head}, first = dummy, second = dummy;
  for (let i = 0; i &lt;= n; i++) first = first.next;
  while (first) { first = first.next; second = second.next; }
  second.next = second.next.next;
  return dummy.next;
}</code></pre>
<p><strong>Gap pointer technique:</strong> Keeping exactly n+1 steps between the two pointers ensures the trailing pointer lands at the node just before the target when the leader hits null.</p>
<p>The dummy node is essential for deleting the head node — without it you would need a separate if-branch to handle that case.</p>`
        },
        {
          q: "How do you find the intersection point of two linked lists?",
          a: `<p>Two linked lists may share a common tail. The intersection point is the node where they merge into a single path.</p>
<p>Use two pointers, one starting at each head. When pointer A reaches null, redirect it to headB; when pointer B reaches null, redirect it to headA.</p>
<p>Both pointers now travel the same total distance (lenA + lenB), so they meet at the intersection node on the second pass — or both reach null if there is no intersection.</p>
<p>This runs in O(n + m) time and O(1) space with no need to know list lengths upfront.</p>
<pre><code>function getIntersection(headA, headB) {
  let a = headA, b = headB;
  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }
  return a;
}</code></pre>
<p><strong>Cross-traversal trick:</strong> By switching to the other list's head when reaching null, both pointers equalize their total path lengths and converge at the intersection.</p>
<p>If the lists do not intersect, both pointers become null simultaneously, and the loop exits — returning null correctly.</p>`
        },
        {
          q: "How do you check if a linked list is a palindrome?",
          a: `<p>A linked list is a palindrome if it reads the same forwards and backwards — equivalent to comparing the first and second halves after reversing one.</p>
<p>Step 1: find the middle node using slow/fast pointers. Step 2: reverse the second half in-place. Step 3: compare the first and second halves node by node.</p>
<p>After comparison, restore the list by reversing the second half again if you need to preserve the original structure.</p>
<p>This runs in O(n) time and O(1) space — the key is reversing in-place rather than using an array or stack.</p>
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
}</code></pre>
<p><strong>Reverse second half in-place:</strong> This avoids using O(n) extra space from storing values in an array or stack.</p>
<p>For production code, always restore the list after checking — modifying the structure can cause bugs in code that holds references to specific nodes.</p>`
        },
        {
          q: "How do you remove duplicates from a sorted linked list?",
          a: `<p>In a sorted linked list, duplicate values are adjacent, making it possible to detect and remove them in a single O(n) pass without extra memory.</p>
<p>Traverse the list with one pointer. Whenever the current node's value equals the next node's value, skip the next node by setting <code>curr.next = curr.next.next</code>.</p>
<p>If values differ, advance the pointer. Repeat until the end of the list.</p>
<p>This is O(n) time and O(1) space — no hash set needed because the sorted order guarantees all duplicates are consecutive.</p>
<pre><code>function removeDuplicates(head) {
  let curr = head;
  while (curr &amp;&amp; curr.next) {
    if (curr.val === curr.next.val) curr.next = curr.next.next;
    else curr = curr.next;
  }
  return head;
}</code></pre>
<p><strong>Don't advance on skip:</strong> When you skip a node, stay at <code>curr</code> and check <code>curr.next</code> again — there may be multiple consecutive duplicates to remove.</p>
<p>For unsorted lists, use a Set to track seen values; for sorted lists this single-pointer approach is always preferred.</p>`
        },
        {
          q: "How do you add two numbers represented as linked lists?",
          a: `<p>When numbers are stored as linked lists with the least significant digit first, addition follows the same column-by-column process as manual arithmetic.</p>
<p>Traverse both lists simultaneously. At each position, sum the two digits (or 0 if one list is shorter) plus any carry from the previous position.</p>
<p>The new digit is <code>sum % 10</code> and the new carry is <code>Math.floor(sum / 10)</code>. Continue until both lists are exhausted and carry is 0.</p>
<p>The loop condition <code>l1 || l2 || carry</code> handles lists of different lengths and a final carry-over digit.</p>
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
}</code></pre>
<p><strong>Include carry in loop condition:</strong> Even after both lists are exhausted, a remaining carry (e.g., 5+5=10) generates one more output node — do not exit early.</p>
<p>If digits are stored most-significant-first (reversed order), reverse both lists first, perform the addition, then reverse the result.</p>`
        },
        {
          q: "How do you flatten a multilevel doubly linked list?",
          a: `<p>A multilevel doubly linked list has nodes with a <code>child</code> pointer that can lead to a separate sublist at a deeper level.</p>
<p>Use an iterative inline DFS: when you encounter a node with a child, splice the child sublist between the current node and its next sibling.</p>
<p>Steps: save <code>curr.next</code>, link <code>curr.next = curr.child</code>, set <code>curr.child = null</code>, find the tail of the child list, then connect that tail to the saved next.</p>
<p>This runs in O(n) time and O(1) extra space since no auxiliary stack is needed.</p>
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
}</code></pre>
<p><strong>Inline splicing:</strong> Inserting the child list directly avoids needing a separate stack and keeps the algorithm O(1) space.</p>
<p>After flattening, all <code>child</code> fields are null and the result is a standard doubly linked list — verify this in tests.</p>`
        },
        {
          q: "How do you copy a linked list with random pointers?",
          a: `<p>Each node has a <code>next</code> pointer and a <code>random</code> pointer which can point to any node or null, making direct copying non-trivial.</p>
<p>Use a HashMap: first pass creates a copy of every node stored in a map (original → copy), second pass assigns <code>next</code> and <code>random</code> on each copy using map lookups.</p>
<p>An O(1) space alternative interleaves copied nodes directly into the original list, sets random pointers, then separates the two lists back.</p>
<p>The HashMap approach is cleaner and runs in O(n) time and O(n) space.</p>
<pre><code>function copyRandomList(head) {
  if (!head) return null;
  let map = new Map();
  let curr = head;
  while (curr) { map.set(curr, { val: curr.val, next: null, random: null }); curr = curr.next; }
  curr = head;
  while (curr) {
    if (curr.next) map.get(curr).next = map.get(curr.next);
    if (curr.random) map.get(curr).random = map.get(curr.random);
    curr = curr.next;
  }
  return map.get(head);
}</code></pre>
<p><strong>Two-pass HashMap:</strong> First pass clones all nodes; second pass wires <code>next</code> and <code>random</code> using map lookups in O(1) per node.</p>
<p>The interleaving O(1) space technique embeds copies between originals temporarily — it's trickier but eliminates the extra map allocation.</p>`
        },
        {
          q: "How do you sort a linked list?",
          a: `<p>Merge sort is ideal for linked lists because it does not require random access and runs in O(n log n) time with O(log n) stack space.</p>
<p>Split the list into two halves using the slow/fast pointer technique, recursively sort each half, then merge the two sorted halves.</p>
<p>Quick sort is less suited for linked lists because pivot-based partitioning with pointers leads to worse cache performance.</p>
<p>Bottom-up merge sort achieves O(1) space by iterating with increasing merge sizes (1, 2, 4, ...) without recursion.</p>
<pre><code>function sortList(head) {
  if (!head || !head.next) return head;
  let slow = head, fast = head.next;
  while (fast &amp;&amp; fast.next) { slow = slow.next; fast = fast.next.next; }
  let mid = slow.next; slow.next = null;
  let left = sortList(head), right = sortList(mid);
  let dummy = {next: null}, curr = dummy;
  while (left &amp;&amp; right) {
    if (left.val &lt;= right.val) { curr.next = left; left = left.next; }
    else { curr.next = right; right = right.next; }
    curr = curr.next;
  }
  curr.next = left || right;
  return dummy.next;
}</code></pre>
<p><strong>Merge sort on lists:</strong> Split at the middle (slow/fast), sort recursively, and merge — all pointer operations, no array indexing needed.</p>
<p>For nearly sorted lists, insertion sort can outperform merge sort in practice due to lower constant overhead.</p>`
        },
        {
          q: "How do you reorder a linked list (L0→Ln→L1→Ln-1→...)?",
          a: `<p>The reorder interleaves the beginning and end of the list, requiring three steps: find the middle, reverse the second half, then merge the two halves alternately.</p>
<p>Find the middle using slow/fast pointers, reverse the second half in place, then interleave nodes from the first and reversed second halves.</p>
<p>This runs in O(n) time and O(1) extra space — no additional arrays or data structures are needed.</p>
<p>Edge cases: single or two-node lists do not require reordering and should be returned as-is.</p>
<pre><code>function reorderList(head) {
  if (!head || !head.next) return;
  let slow = head, fast = head;
  while (fast.next &amp;&amp; fast.next.next) { slow = slow.next; fast = fast.next.next; }
  let prev = null, curr = slow.next; slow.next = null;
  while (curr) { let next = curr.next; curr.next = prev; prev = curr; curr = next; }
  let first = head, second = prev;
  while (second) {
    let n1 = first.next, n2 = second.next;
    first.next = second; second.next = n1;
    first = n1; second = n2;
  }
}</code></pre>
<p><strong>Three-step pattern:</strong> Find middle → reverse second half → interleave — each step is a classic linked list operation combined into one solution.</p>
<p>The merge step must stop when <code>second</code> is null; the first half may have one extra node for odd-length lists, which is handled automatically.</p>`
        },
        {
          q: "How do you reverse a linked list in groups of k?",
          a: `<p>Reverse every k consecutive nodes as a group; if fewer than k nodes remain at the end, leave them as-is.</p>
<p>For each group, count k nodes, reverse those k nodes, then recursively process the remaining list and attach it to the group's tail.</p>
<p>The time complexity is O(n) and space complexity is O(n/k) due to recursion. An iterative approach achieves O(1) space.</p>
<p>Edge cases: if the list length is not divisible by k, the last partial group stays in its original order.</p>
<pre><code>function reverseKGroup(head, k) {
  let curr = head, count = 0;
  while (curr &amp;&amp; count &lt; k) { curr = curr.next; count++; }
  if (count &lt; k) return head;
  let prev = null; curr = head;
  for (let i = 0; i &lt; k; i++) {
    let next = curr.next;
    curr.next = prev; prev = curr; curr = next;
  }
  head.next = reverseKGroup(curr, k);
  return prev;
}</code></pre>
<p><strong>Count before reversing:</strong> Always verify k nodes are available before reversing; do not modify the remaining partial group.</p>
<p>The iterative version uses extra pointers to track group start, end, and connection to the previous group — useful when stack depth is a concern.</p>`
        },
        {
          q: "How do you detect the start of a cycle in a linked list?",
          a: `<p>Floyd's cycle detection finds whether a cycle exists, but finding the cycle start requires one more step.</p>
<p>Once slow and fast pointers meet inside the cycle, reset one pointer to the head. Move both one step at a time — they will meet at the cycle start.</p>
<p>Mathematical proof: the distance from head to cycle start equals the distance from the meeting point to cycle start when traveling forward — both pointers meet at the entry node.</p>
<p>This algorithm runs in O(n) time and O(1) space.</p>
<pre><code>function detectCycleStart(head) {
  let slow = head, fast = head;
  while (fast &amp;&amp; fast.next) {
    slow = slow.next; fast = fast.next.next;
    if (slow === fast) {
      slow = head;
      while (slow !== fast) { slow = slow.next; fast = fast.next; }
      return slow;
    }
  }
  return null;
}</code></pre>
<p><strong>Two-phase Floyd's:</strong> Phase 1 detects the cycle; phase 2 finds the entry point by resetting one pointer to head and advancing both at speed 1.</p>
<p>If the function returns null, the list has no cycle — always handle the no-cycle case before using the returned node.</p>`
        },
        {
          q: "How do you rotate a linked list by k places?",
          a: `<p>Rotating right by k means the last k nodes move to the front; rotating left by k means the first k nodes move to the end.</p>
<p>First find the list length and normalize k (k = k % length). Then find the new tail at position (length - k - 1) from the head and the new head at position (length - k).</p>
<p>Connect the old tail to the old head to form a circle, then break the circle at the new tail to get the rotated list.</p>
<p>If k is 0 or equals the list length, no rotation is needed.</p>
<pre><code>function rotateRight(head, k) {
  if (!head || !head.next || k === 0) return head;
  let tail = head, len = 1;
  while (tail.next) { tail = tail.next; len++; }
  k = k % len;
  if (k === 0) return head;
  tail.next = head; // make circular
  let newTail = head;
  for (let i = 0; i &lt; len - k - 1; i++) newTail = newTail.next;
  let newHead = newTail.next;
  newTail.next = null;
  return newHead;
}</code></pre>
<p><strong>Circular trick:</strong> Temporarily connecting tail to head lets you traverse to the new break point without edge-case handling for wrapping.</p>
<p>Always normalize k with modulo before computing positions — without it, you may traverse far beyond the list length unnecessarily.</p>`
        },
        {
          q: "How do you delete a node in a linked list given only that node?",
          a: `<p>When you only have a reference to the node to delete (not the previous node or head), you cannot follow the standard approach of relinking the predecessor.</p>
<p>Instead, copy the value of the next node into the current node, then skip the next node by setting <code>node.next = node.next.next</code>.</p>
<p>This effectively deletes the node by replacing its value with its successor's value and removing the successor from the list.</p>
<p>This approach only works if the node is not the tail — the problem guarantees this constraint in most interview settings.</p>
<pre><code>function deleteNode(node) {
  node.val = node.next.val;
  node.next = node.next.next;
}</code></pre>
<p><strong>Value copy trick:</strong> Since you cannot access the predecessor, copy the next node's value and unlink the next node — effectively "deleting" the current position.</p>
<p>This does not work on the last node; if called on a tail node, you would need access to the predecessor to properly remove it.</p>`
        },
        {
          q: "How do you find pairs with a given sum in a doubly linked list?",
          a: `<p>A sorted doubly linked list allows the two-pointer technique: one pointer starts at the head (smallest) and one at the tail (largest).</p>
<p>If the sum of both pointers equals the target, record the pair and move both inward. If the sum is less, move the left pointer right; if greater, move the right pointer left.</p>
<p>This runs in O(n) time and O(1) space, much better than the O(n²) brute force approach.</p>
<p>The doubly linked list's backward pointer makes it easy to traverse from the tail toward the head without reversing the list.</p>
<pre><code>function findPairs(head, target) {
  let tail = head;
  while (tail.next) tail = tail.next;
  let result = [], left = head, right = tail;
  while (left !== right &amp;&amp; left.prev !== right) {
    let sum = left.val + right.val;
    if (sum === target) { result.push([left.val, right.val]); left = left.next; right = right.prev; }
    else if (sum &lt; target) left = left.next;
    else right = right.prev;
  }
  return result;
}</code></pre>
<p><strong>Two-pointer on doubly linked list:</strong> The bidirectional nature of DLL allows the same O(n) two-pointer technique used on sorted arrays.</p>
<p>The loop termination condition must account for lists with an even number of nodes (pointers pass each other) and odd (pointers meet at the same node).</p>`
        },
        {
          q: "How do you partition a linked list around a value x?",
          a: `<p>Rearrange the list so all nodes with values less than x come before nodes with values greater than or equal to x, maintaining relative order.</p>
<p>Use two dummy-headed sublists: one for nodes less than x, one for nodes greater than or equal to x. Traverse the list once, appending each node to the appropriate sublist.</p>
<p>At the end, connect the tail of the less-than list to the head of the greater-or-equal list to form the partitioned result.</p>
<p>This is O(n) time and O(1) extra space (only 4 additional pointers are used).</p>
<pre><code>function partition(head, x) {
  let lessHead = {next: null}, greaterHead = {next: null};
  let less = lessHead, greater = greaterHead;
  let curr = head;
  while (curr) {
    if (curr.val &lt; x) { less.next = curr; less = less.next; }
    else { greater.next = curr; greater = greater.next; }
    curr = curr.next;
  }
  greater.next = null;
  less.next = greaterHead.next;
  return lessHead.next;
}</code></pre>
<p><strong>Dual sublist approach:</strong> Two dummy headers let you build both partitions simultaneously in a single pass, then join them — no extra memory beyond constant pointers.</p>
<p>Always set <code>greater.next = null</code> after the loop to avoid a cycle if the last node originally pointed to a node now in the less-than partition.</p>`
        },
        {
          q: "How do you swap adjacent nodes in a linked list?",
          a: `<p>Swap every pair of adjacent nodes, not just their values — this is required when nodes are immutable by value but not by reference.</p>
<p>Use a dummy head to handle the edge case of the first pair. For each pair, rewire the three pointers: previous node's next, first node's next, and second node's next.</p>
<p>Recursively: swap the first two nodes, then recursively swap the rest and attach the result to the first node's next.</p>
<p>Both iterative and recursive approaches are O(n) time; the iterative approach uses O(1) space while recursion uses O(n/2) stack space.</p>
<pre><code>function swapPairs(head) {
  let dummy = {next: head}, prev = dummy;
  while (prev.next &amp;&amp; prev.next.next) {
    let a = prev.next, b = prev.next.next;
    prev.next = b;
    a.next = b.next;
    b.next = a;
    prev = a;
  }
  return dummy.next;
}</code></pre>
<p><strong>Dummy head pattern:</strong> Using a dummy node before the head eliminates special-casing for the first pair and keeps the loop uniform throughout the list.</p>
<p>After each swap, advance <code>prev</code> to the second node of the pair (which is now the trailing node) so it points to the start of the next pair.</p>`
        },
        {
          q: "How do you find the length of the cycle in a linked list?",
          a: `<p>First, use Floyd's cycle detection to find the meeting point of slow and fast pointers inside the cycle.</p>
<p>Once the meeting point is known, keep one pointer fixed and advance the other until it returns to the same node, counting the steps.</p>
<p>The count gives the exact length of the cycle in O(n) time and O(1) space.</p>
<p>If the list has no cycle, the function returns 0 — always check for cycle existence before measuring length.</p>
<pre><code>function cycleLength(head) {
  let slow = head, fast = head;
  while (fast &amp;&amp; fast.next) {
    slow = slow.next; fast = fast.next.next;
    if (slow === fast) {
      let count = 1, curr = slow.next;
      while (curr !== slow) { curr = curr.next; count++; }
      return count;
    }
  }
  return 0;
}</code></pre>
<p><strong>Post-detection counting:</strong> After Floyd's meeting point is found, traversing the cycle once from that point directly gives the cycle length in one additional O(cycle) pass.</p>
<p>Cycle length is useful for further operations such as finding the cycle start (set pointers cycle-length apart from head) or memory leak detection.</p>`
        },
        {
          q: "How do you convert a BST to a sorted doubly linked list?",
          a: `<p>An in-order traversal of a BST visits nodes in sorted order, which maps naturally to a sorted doubly linked list.</p>
<p>During in-order traversal, maintain a <code>prev</code> pointer. For each visited node, set <code>prev.right = curr</code> and <code>curr.left = prev</code> (using left/right as prev/next pointers).</p>
<p>After the full traversal, connect the head and tail to make it circular, or leave them as null-terminated for a non-circular DLL.</p>
<p>This converts the BST in O(n) time in-place without any extra data structure.</p>
<pre><code>function treeToDoublyList(root) {
  if (!root) return null;
  let head = null, prev = null;
  function inorder(node) {
    if (!node) return;
    inorder(node.left);
    if (prev) { prev.right = node; node.left = prev; }
    else head = node;
    prev = node;
    inorder(node.right);
  }
  inorder(root);
  head.left = prev; prev.right = head; // circular
  return head;
}</code></pre>
<p><strong>In-place in-order wiring:</strong> Reuse the tree's left and right pointers as DLL prev and next pointers — no new nodes or memory allocation needed.</p>
<p>Making the list circular (head.left = tail, tail.right = head) is a common interview follow-up — ensure both ends are connected.</p>`
        },
        {
          q: "How do you check if two numbers sum to a target in a sorted doubly linked list?",
          a: `<p>A sorted doubly linked list can be searched for a pair with a given sum using two pointers — one at the start and one at the end — similar to the two-sum on a sorted array.</p>
<p>Move the left pointer right if the sum is too small, move the right pointer left if the sum is too large, and return true if an exact match is found.</p>
<p>This requires traversal to the tail first to get the right pointer, adding one O(n) pass before the O(n) search pass.</p>
<p>The overall complexity is O(n) time and O(1) space — no hash set or sorting needed.</p>
<pre><code>function hasPairWithSum(head, target) {
  if (!head) return false;
  let left = head, right = head;
  while (right.next) right = right.next;
  while (left !== right &amp;&amp; right.next !== left) {
    let sum = left.val + right.val;
    if (sum === target) return true;
    if (sum &lt; target) left = left.next;
    else right = right.prev;
  }
  return false;
}</code></pre>
<p><strong>Two-pointer on DLL:</strong> The backward prev pointer eliminates the need to reverse the list or use extra memory compared to a singly linked list approach.</p>
<p>Always advance the pointers after a match if you want to find all pairs, not just detect existence — otherwise the loop becomes infinite at the match position.</p>`
        },
        {
          q: "How do you remove duplicates from an unsorted linked list?",
          a: `<p>Unlike a sorted list where duplicates are adjacent, an unsorted list requires tracking all seen values, typically with a hash set.</p>
<p>Traverse the list with a <code>Set</code>. For each node, if its value is already in the set, unlink it from the list. Otherwise, add it to the set and advance.</p>
<p>This runs in O(n) time and O(n) space for the hash set. If O(1) space is required, use a nested loop (runner pointer) at O(n²) time cost.</p>
<p>Always use a previous pointer to unlink nodes — you cannot unlink a node without a reference to the node before it.</p>
<pre><code>function removeDuplicatesUnsorted(head) {
  let seen = new Set(), curr = head, prev = null;
  while (curr) {
    if (seen.has(curr.val)) {
      prev.next = curr.next;
    } else {
      seen.add(curr.val);
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
}</code></pre>
<p><strong>Hash Set approach:</strong> O(n) time by storing all seen values — trade-off is O(n) space; justified when time performance is the priority.</p>
<p>The O(1) space "runner" technique uses a nested loop where the outer pointer fixes a node and the inner pointer removes all subsequent duplicates of that value.</p>`
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
          a: `<p>Parentheses, brackets, and braces are valid when every opening symbol has a matching closing symbol in the correct nested order.</p>
<p>Use a stack. Push each opening character. When a closing character is encountered, pop the stack and verify the popped character is the matching opener.</p>
<p>If the stack is empty when trying to pop (extra closing bracket) or non-empty at the end (unclosed brackets), the string is invalid.</p>
<p>This runs in O(n) time and O(n) space in the worst case (all opening brackets).</p>
<pre><code>function isValid(s) {
  let stack = [], map = {')':'(', ']':'[', '}':'{'};
  for (let c of s) {
    if ('([{'.includes(c)) stack.push(c);
    else if (stack.pop() !== map[c]) return false;
  }
  return stack.length === 0;
}</code></pre>
<p><strong>Map closing to opening:</strong> The lookup map lets you match any closing bracket to its expected opener in O(1), keeping the loop condition clean.</p>
<p><code>stack.pop()</code> on an empty stack returns <code>undefined</code>, which will never equal any opener — this handles the "extra close bracket" edge case automatically.</p>`
        },
        {
          q: "How do you design a stack that supports getMin in O(1)?",
          a: `<p>A regular stack only supports top, push, and pop — querying the minimum requires a full scan in O(n). The MinStack achieves O(1) minimum access with an auxiliary tracking stack.</p>
<p>Maintain a second <code>minStack</code> that mirrors the main stack. On each push, compute the new minimum (min of the value and the current minStack top) and push it to minStack.</p>
<p>On pop, pop both stacks simultaneously so <code>minStack</code> always reflects the minimum of everything currently in the main stack.</p>
<p>All four operations (push, pop, top, getMin) are O(1) because there is no iteration.</p>
<pre><code>class MinStack {
  constructor() { this.stack = []; this.minStack = []; }
  push(val) {
    this.stack.push(val);
    this.minStack.push(Math.min(val, this.getMin() ?? Infinity));
  }
  pop() { this.stack.pop(); this.minStack.pop(); }
  top() { return this.stack[this.stack.length - 1]; }
  getMin() { return this.minStack[this.minStack.length - 1]; }
}</code></pre>
<p><strong>Mirror minimum stack:</strong> Each position in minStack tells you "what is the minimum in the main stack at this depth?" — popping both keeps the invariant intact.</p>
<p>Space is O(n) for the auxiliary stack. An optimization stores only changed minimums with counts to reduce space for repeated values.</p>`
        },
        {
          q: "Find the next greater element for each element in an array.",
          a: `<p>For each element in an array, find the first element to its right that is strictly greater than it. If none exists, the answer is -1.</p>
<p>Use a monotonic decreasing stack storing indices. For each new element, pop all indices from the stack whose values are less than the current element — those elements found their answer.</p>
<p>Elements that remain in the stack by the end of the loop never found a greater element to their right, so they keep the default -1.</p>
<p>This runs in O(n) time — each element is pushed and popped at most once.</p>
<pre><code>function nextGreater(arr) {
  let res = Array(arr.length).fill(-1), stack = [];
  for (let i = 0; i &lt; arr.length; i++) {
    while (stack.length &amp;&amp; arr[stack[stack.length-1]] &lt; arr[i])
      res[stack.pop()] = arr[i];
    stack.push(i);
  }
  return res;
}</code></pre>
<p><strong>Store indices, not values:</strong> Keeping indices on the stack lets you directly set the result array at the correct position when an element is resolved.</p>
<p>For a circular array variant, iterate through 2n indices with modulo to allow elements near the end to "see" elements at the beginning.</p>`
        },
        {
          q: "How do you implement a queue using two stacks?",
          a: `<p>A queue is FIFO (first in, first out) while a stack is LIFO (last in, first out). Two stacks can simulate a queue by reversing the order via a double reversal.</p>
<p>Use stack S1 for enqueue. When dequeuing, if S2 is empty, transfer all elements from S1 to S2 (reversing their order). Then pop from S2, which is now in FIFO order.</p>
<p>Elements are transferred lazily — only when S2 is empty — making the amortized cost of dequeue O(1) even though individual operations may take O(n).</p>
<p>Enqueue is always O(1) worst case; dequeue is O(n) worst case but O(1) amortized.</p>
<pre><code>class QueueFromStacks {
  constructor() { this.s1 = []; this.s2 = []; }
  enqueue(val) { this.s1.push(val); }
  dequeue() {
    if (!this.s2.length) while (this.s1.length) this.s2.push(this.s1.pop());
    return this.s2.pop();
  }
}</code></pre>
<p><strong>Lazy transfer:</strong> Only move S1 to S2 when S2 is empty — this batching is what makes the amortized O(1) dequeue possible.</p>
<p>Peek is implemented identically to dequeue but without popping — return <code>this.s2[this.s2.length-1]</code> after the same lazy transfer.</p>`
        },
        {
          q: "How do you implement a stack using two queues?",
          a: `<p>A stack is LIFO while a queue is FIFO. Implementing a stack with queues requires ensuring the most recently pushed element is always at the front of the active queue.</p>
<p>On push: enqueue the new element into Q2, then transfer all of Q1 into Q2 (so the new element is at the back, but all old elements are behind it), then swap Q1 and Q2 references.</p>
<p>After each push, Q1 holds elements in stack order (newest to oldest), so pop and peek just remove/view the front of Q1.</p>
<p>Push is O(n); pop is O(1). An alternative makes push O(1) and pop O(n) by transferring on dequeue.</p>
<pre><code>class StackFromQueues {
  constructor() { this.q1 = []; this.q2 = []; }
  push(val) {
    this.q2.push(val);
    while (this.q1.length) this.q2.push(this.q1.shift());
    [this.q1, this.q2] = [this.q2, this.q1];
  }
  pop() { return this.q1.shift(); }
}</code></pre>
<p><strong>Reverse on push:</strong> Transferring existing Q1 elements after the new element into Q2 puts the new element first in a fresh Q1 after the swap — maintaining LIFO order.</p>
<p>Swapping references with destructuring avoids copying and makes the operation O(1) for the swap itself, only paying O(n) for the queue transfer.</p>`
        },
        {
          q: "How do you evaluate a postfix (reverse Polish) expression?",
          a: `<p>Postfix (Reverse Polish Notation) places operators after their operands: <code>3 4 +</code> equals 7. It eliminates the need for parentheses and operator precedence rules.</p>
<p>Use a stack. Scan left to right: if the token is a number, push it. If it is an operator, pop two operands, apply the operator, and push the result.</p>
<p>The two operands must be popped in the correct order: the last-pushed operand is the right operand (<code>b</code>), and the one before it is the left operand (<code>a</code>).</p>
<p>This runs in O(n) time and O(n) space for the stack, and handles all arithmetic expressions without needing recursion.</p>
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
}</code></pre>
<p><strong>Pop order matters:</strong> The last pushed value is the right operand (b) and the one before it is the left operand (a) — reversing them would produce wrong results for non-commutative operators.</p>
<p>Use <code>Math.trunc</code> for division to match the expected behavior of integer truncation toward zero as specified in most RPN problems.</p>`
        },
        {
          q: "How do you sort a stack using only another stack?",
          a: `<p>Without random access, sorting a stack requires O(n²) time using only another stack as auxiliary storage.</p>
<p>Repeatedly pick the top element from the original stack and insert it into the correct position in the temp stack by moving elements back to the original temporarily.</p>
<p>When inserting a value into temp: if temp's top is greater, move it back to the original stack, insert the value, then restore those moved elements.</p>
<p>This resembles insertion sort — O(n²) time but only O(n) extra space (one auxiliary stack).</p>
<pre><code>function sortStack(stack) {
  let temp = [];
  while (stack.length) {
    let val = stack.pop();
    while (temp.length &amp;&amp; temp[temp.length-1] &gt; val) stack.push(temp.pop());
    temp.push(val);
  }
  return temp;
}</code></pre>
<p><strong>Insertion sort analogy:</strong> The inner while loop moves elements back to maintain sorted order in temp — each outer iteration places one element in its correct sorted position.</p>
<p>The resulting temp stack has the smallest element at the top (ascending from top to bottom). Reverse the logic to sort descending.</p>`
        },
        {
          q: "How do you solve the Stock Span problem?",
          a: `<p>The stock span for a given day is the number of consecutive days before it (including itself) where the price was less than or equal to today's price.</p>
<p>Use a monotonic decreasing stack storing indices. For each day, pop all days that have lower or equal prices — they cannot block the span further.</p>
<p>The span is either the current index plus one (stack empty, all previous days are covered) or the difference between current and the top remaining index.</p>
<p>This is an O(n) solution — each index is pushed and popped at most once, so the total work across all days is O(n).</p>
<pre><code>function stockSpan(prices) {
  let span = [], stack = [];
  for (let i = 0; i &lt; prices.length; i++) {
    while (stack.length &amp;&amp; prices[stack[stack.length-1]] &lt;= prices[i]) stack.pop();
    span.push(stack.length ? i - stack[stack.length-1] : i + 1);
    stack.push(i);
  }
  return span;
}</code></pre>
<p><strong>Stack stores indices that block span:</strong> Only days with strictly higher prices remain on the stack, as they are the barriers that define the span boundary.</p>
<p>This is equivalent to finding the "previous greater element" for each day, which is a canonical monotonic stack problem pattern.</p>`
        },
        {
          q: "Find the largest rectangle in a histogram.",
          a: `<p>Given a histogram (array of bar heights), find the largest rectangle that can be formed using contiguous bars.</p>
<p>Use a monotonic increasing stack. When a bar shorter than the top of the stack is found, the top bar can no longer extend to the right — calculate its area using the current index and the new top of the stack as width boundaries.</p>
<p>Append a sentinel value of 0 to force all remaining bars to be processed at the end of the array.</p>
<p>Each bar is pushed and popped exactly once — O(n) time and O(n) space for the stack.</p>
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
}</code></pre>
<p><strong>Width calculation:</strong> When popping index <code>k</code>, the width of the rectangle is <code>i - stack.top - 1</code> — the space between the new stack top (first bar shorter than height[k]) and the current position.</p>
<p>The same technique is used in "Maximal Rectangle in a Binary Matrix" by treating each row as a histogram and applying this algorithm row by row.</p>`
        },
        {
          q: "Explain the concept of an LRU Cache.",
          a: `<p>An LRU (Least Recently Used) cache stores a limited number of items. When it is full and a new item is added, the least recently accessed item is evicted first.</p>
<p>JavaScript's <code>Map</code> maintains insertion order, which makes it ideal for an LRU cache: deletion and re-insertion of an accessed key moves it to the "most recent" end.</p>
<p>When the map exceeds capacity, evict by deleting <code>map.keys().next().value</code> — the oldest key at the front of the insertion order.</p>
<p>Both <code>get</code> and <code>put</code> operations run in O(1) time due to Map's hash-based lookups.</p>
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
}</code></pre>
<p><strong>Map insertion order:</strong> JavaScript's Map iterates keys in insertion order — re-inserting on access promotes the key to most-recent, making eviction of the oldest trivial.</p>
<p>In production systems, LRU caches are used for database query results, DNS lookups, and web page caches to reduce expensive recomputations.</p>`
        },
        {
          q: "How do you decode a string with nested repetition patterns?",
          a: `<p>Encoded strings like <code>"3[a2[bc]]"</code> represent <code>"abcbcabcbcabcbc"</code> — each integer before brackets is a repetition count for the enclosed string.</p>
<p>Use a stack to handle nesting. When you encounter a <code>[</code>, push the current string and current count onto stacks and reset them. When you encounter a <code>]</code>, pop and repeat the current string by the saved count, then prepend the saved string.</p>
<p>This handles arbitrary nesting depth because the stack naturally tracks the parent context at each level.</p>
<p>Time complexity is O(maxRepetition × n) in the worst case; space is O(n) for the stack.</p>
<pre><code>function decodeString(s) {
  let stack = [], curr = '', k = 0;
  for (let c of s) {
    if (c &gt;= '0' &amp;&amp; c &lt;= '9') {
      k = k * 10 + Number(c);
    } else if (c === '[') {
      stack.push([curr, k]); curr = ''; k = 0;
    } else if (c === ']') {
      let [prev, count] = stack.pop();
      curr = prev + curr.repeat(count);
    } else curr += c;
  }
  return curr;
}</code></pre>
<p><strong>Stack for nested context:</strong> Push (current string, count) before entering a bracket, pop and multiply after closing — this handles any depth of nesting.</p>
<p>Multi-digit numbers like <code>12[a]</code> are handled by <code>k = k * 10 + digit</code> before each <code>[</code> is encountered.</p>`
        },
        {
          q: "How do you remove k digits to form the smallest number?",
          a: `<p>Given a number string and k deletions, remove exactly k digits to make the resulting number as small as possible while maintaining digit order.</p>
<p>Use a monotonic increasing stack. For each digit, pop larger digits from the stack while k &gt; 0 (remove them). Push the current digit and continue. After processing, remove remaining digits from the stack end if k &gt; 0.</p>
<p>Strip leading zeros from the result. If the result is empty, return "0".</p>
<p>This runs in O(n) time and O(n) space for the stack.</p>
<pre><code>function removeKdigits(num, k) {
  let stack = [];
  for (let d of num) {
    while (k &gt; 0 &amp;&amp; stack.length &amp;&amp; stack[stack.length-1] &gt; d) {
      stack.pop(); k--;
    }
    stack.push(d);
  }
  while (k-- &gt; 0) stack.pop();
  let result = stack.join('').replace(/^0+/, '');
  return result || '0';
}</code></pre>
<p><strong>Monotonic stack greed:</strong> Always remove larger digits earlier in the number when a smaller digit appears — this greedy choice minimizes the leading value of the number.</p>
<p>The final <code>while k-- &gt; 0</code> handles cases where no removals were triggered during processing (e.g., sorted ascending input like "12345").</p>`
        },
        {
          q: "How do you solve the Daily Temperatures problem?",
          a: `<p>For each day, find how many days until a warmer temperature. A brute force O(n²) approach checks all future days for each day.</p>
<p>Use a monotonic decreasing stack. Push indices onto the stack. When a temperature is warmer than the top of the stack, the top found its answer: current index minus stack top index.</p>
<p>Pop the top and continue comparing — one index may resolve multiple stacked days in one pass.</p>
<p>This runs in O(n) time and O(n) space for the stack.</p>
<pre><code>function dailyTemperatures(temps) {
  let res = Array(temps.length).fill(0), stack = [];
  for (let i = 0; i &lt; temps.length; i++) {
    while (stack.length &amp;&amp; temps[stack[stack.length-1]] &lt; temps[i]) {
      let idx = stack.pop();
      res[idx] = i - idx;
    }
    stack.push(i);
  }
  return res;
}</code></pre>
<p><strong>Monotonic stack for "next greater":</strong> Storing indices (not values) on the stack lets you compute the distance directly as <code>currentIndex - poppedIndex</code>.</p>
<p>Temperatures that never find a warmer day remain as 0 in the result — they stay on the stack throughout and are never popped.</p>`
        },
        {
          q: "How do you validate a stack sequence of push and pop operations?",
          a: `<p>Given a push sequence and a pop sequence, determine if the pop sequence could result from some sequence of push and pop operations on a stack.</p>
<p>Simulate the operations: push elements in order from the push sequence, then pop from the top of the simulated stack whenever it matches the next element in the pop sequence.</p>
<p>After processing all pushes, if the stack is empty, the pop sequence is valid. If elements remain, it is not achievable.</p>
<p>This runs in O(n) time and O(n) space for the simulation stack.</p>
<pre><code>function validateStackSequences(pushed, popped) {
  let stack = [], j = 0;
  for (let val of pushed) {
    stack.push(val);
    while (stack.length &amp;&amp; stack[stack.length-1] === popped[j]) {
      stack.pop(); j++;
    }
  }
  return stack.length === 0;
}</code></pre>
<p><strong>Greedy simulation:</strong> Pop eagerly whenever the stack top matches the next pop target — any delay in popping would only block future operations.</p>
<p>A non-empty stack at the end means some pushed elements never matched their expected pop position, proving the sequence is invalid.</p>`
        },
        {
          q: "How do you design a browser history with back and forward navigation?",
          a: `<p>Browser history requires navigating to new pages, going back, and going forward. This maps naturally to two stacks: one for back history and one for forward history.</p>
<p>When visiting a new page: push the current page to the back stack, clear the forward stack, and update the current page. Pressing back: push current to forward, pop from back. Pressing forward: push current to back, pop from forward.</p>
<p>Clearing forward history on new navigation matches real browser behavior — you cannot go "forward" to pages you have not visited in the current path.</p>
<p>All operations (visit, back, forward) are O(1) amortized with stacks.</p>
<pre><code>class BrowserHistory {
  constructor(homepage) { this.back = []; this.forward = []; this.curr = homepage; }
  visit(url) { this.back.push(this.curr); this.curr = url; this.forward = []; }
  goBack() {
    if (!this.back.length) return this.curr;
    this.forward.push(this.curr); this.curr = this.back.pop(); return this.curr;
  }
  goForward() {
    if (!this.forward.length) return this.curr;
    this.back.push(this.curr); this.curr = this.forward.pop(); return this.curr;
  }
}</code></pre>
<p><strong>Two-stack model:</strong> Back stack holds history; forward stack holds future pages. Visiting clears future — this is standard browser UX behavior.</p>
<p>An alternative doubly linked list approach also works but stacks are simpler and avoid pointer management for this use case.</p>`
        },
        {
          q: "How do you implement a basic calculator with +, -, and parentheses?",
          a: `<p>A basic calculator must handle addition, subtraction, and nested parentheses. Operator precedence is not needed here since only + and - are involved.</p>
<p>Use a stack to save (current result, current sign) when entering parentheses. Restore them when closing. Iterate character by character, updating the running result.</p>
<p>Each digit may extend a multi-digit number (multiply current number by 10). Apply sign and reset the number buffer when a +/- or ) is encountered.</p>
<p>This runs in O(n) time and O(n) space for the stack depth proportional to nesting depth.</p>
<pre><code>function calculate(s) {
  let stack = [], res = 0, num = 0, sign = 1;
  for (let c of s) {
    if (c &gt;= '0' &amp;&amp; c &lt;= '9') {
      num = num * 10 + Number(c);
    } else if (c === '+') { res += sign * num; num = 0; sign = 1; }
    else if (c === '-') { res += sign * num; num = 0; sign = -1; }
    else if (c === '(') { stack.push(res, sign); res = 0; sign = 1; }
    else if (c === ')') {
      res += sign * num; num = 0;
      res *= stack.pop(); // sign before (
      res += stack.pop(); // result before (
    }
  }
  return res + sign * num;
}</code></pre>
<p><strong>Stack for parentheses context:</strong> Push the accumulated result and sign before entering <code>(</code>; on <code>)</code>, finalize the inner expression and add it to the outer context.</p>
<p>Multi-digit numbers require <code>num = num * 10 + digit</code>; flush <code>num</code> to <code>res</code> at every operator and at the final return.</p>`
        },
        {
          q: "How do you remove all adjacent duplicates in a string?",
          a: `<p>Adjacent duplicate removal is a classic stack problem: repeatedly remove pairs of identical adjacent characters until no more remain.</p>
<p>Iterate through the string. If the top of the stack equals the current character, pop it (they cancel out). Otherwise, push the current character.</p>
<p>The stack naturally handles cascading removals: removing a pair may expose a new pair at the top of the stack which is immediately resolved in the next iteration.</p>
<p>This runs in O(n) time and O(n) space for the stack (worst case no duplicates).</p>
<pre><code>function removeDuplicates(s) {
  let stack = [];
  for (let c of s) {
    if (stack.length &amp;&amp; stack[stack.length-1] === c) stack.pop();
    else stack.push(c);
  }
  return stack.join('');
}</code></pre>
<p><strong>Stack cancellation:</strong> The stack acts as the "processed" output; each character either extends the output or cancels with its predecessor — one pass is sufficient.</p>
<p>For the variant "remove k adjacent duplicates", track both character and count on the stack and pop when count reaches k.</p>`
        },
        {
          q: "How do you find the median from a data stream?",
          a: `<p>As numbers arrive one at a time, you need to find the median at any point. A sorted array would require O(n) insertion; the optimal approach uses two heaps.</p>
<p>Maintain a max-heap for the lower half and a min-heap for the upper half. After each insertion, balance so heaps differ in size by at most 1. The median is either the top of the larger heap or the average of both tops.</p>
<p>JavaScript does not have a built-in heap, so simulate with a sorted array for small inputs or implement a heap class. Conceptually the approach is O(log n) per insert.</p>
<p>This is the optimal solution: O(log n) insert and O(1) median query.</p>
<pre><code>// Concept: two heaps maintain lower and upper halves
// maxHeap (lower half): always &lt;= minHeap (upper half)
// Balance: |maxHeap.size - minHeap.size| &lt;= 1
// Median: maxHeap.top if odd total, else (maxHeap.top + minHeap.top) / 2

// After each insert:
// 1. Push to maxHeap, then move maxHeap.top to minHeap
// 2. If minHeap.size &gt; maxHeap.size, move minHeap.top to maxHeap</code></pre>
<p><strong>Two-heap invariant:</strong> The max-heap's top is always the largest element of the smaller half — maintaining this invariant gives O(1) median access at all times.</p>
<p>This pattern extends to "sliding window median" where expired elements must be lazily removed from heaps using a deletion map.</p>`
        },
        {
          q: "How do you evaluate a prefix (Polish notation) expression?",
          a: `<p>In prefix (Polish) notation, operators come before their operands (e.g., <code>+ 3 4</code> = 7). Unlike postfix, you process from right to left using a stack.</p>
<p>Traverse the expression right to left. If the token is a number, push it. If it is an operator, pop two operands, apply the operator, and push the result.</p>
<p>The key difference from postfix: in postfix you process left to right and pop for operators; in prefix you process right to left and get the same stack behavior.</p>
<p>Both run in O(n) time and O(n) space.</p>
<pre><code>function evalPrefix(tokens) {
  let stack = [];
  for (let i = tokens.length - 1; i &gt;= 0; i--) {
    let t = tokens[i];
    if ('+-*/'.includes(t)) {
      let a = stack.pop(), b = stack.pop();
      if (t === '+') stack.push(a + b);
      else if (t === '-') stack.push(a - b);
      else if (t === '*') stack.push(a * b);
      else stack.push(Math.trunc(a / b));
    } else stack.push(Number(t));
  }
  return stack[0];
}</code></pre>
<p><strong>Right-to-left for prefix:</strong> Processing from the end ensures operands are on the stack when the operator is encountered, mirroring the left-to-right behavior for postfix.</p>
<p>For interactive evaluation (streaming input), a recursive descent parser is more natural than a stack-based right-to-left scan.</p>`
        },
        {
          q: "How do you design a circular deque (double-ended queue)?",
          a: `<p>A deque allows insertions and deletions from both the front and back in O(1) time, combining the functionality of a stack and a queue.</p>
<p>Implement with a fixed-size array using front and rear pointers. Wrap indices with modulo arithmetic to reuse space when pointers reach the array ends.</p>
<p>Track the current size to distinguish between full and empty states (both conditions would otherwise have front === rear).</p>
<p>All operations (insertFront, insertLast, deleteFront, deleteLast, getFront, getLast) are O(1).</p>
<pre><code>class MyCircularDeque {
  constructor(k) { this.buf = Array(k); this.cap = k; this.front = 0; this.rear = 0; this.size = 0; }
  insertFront(v) {
    if (this.size === this.cap) return false;
    this.front = (this.front - 1 + this.cap) % this.cap;
    this.buf[this.front] = v; this.size++; return true;
  }
  insertLast(v) {
    if (this.size === this.cap) return false;
    this.buf[this.rear] = v; this.rear = (this.rear + 1) % this.cap; this.size++; return true;
  }
  deleteFront() {
    if (!this.size) return false;
    this.front = (this.front + 1) % this.cap; this.size--; return true;
  }
  deleteLast() {
    if (!this.size) return false;
    this.rear = (this.rear - 1 + this.cap) % this.cap; this.size--; return true;
  }
  getFront() { return this.size ? this.buf[this.front] : -1; }
  getRear() { return this.size ? this.buf[(this.rear - 1 + this.cap) % this.cap] : -1; }
  isEmpty() { return this.size === 0; }
  isFull() { return this.size === this.cap; }
}</code></pre>
<p><strong>Separate size counter:</strong> Tracking size explicitly avoids the ambiguity between empty and full states that arises when using only front/rear pointers on a circular buffer.</p>
<p>Deques are used in sliding window maximum problems, palindrome checking algorithms, and task scheduling systems.</p>`
        },
        {
          q: "How do you simplify a Unix file path?",
          a: `<p>A Unix file path may contain <code>.</code> (current directory), <code>..</code> (parent directory), and multiple slashes that need to be simplified.</p>
<p>Split the path by <code>/</code>, then process each component: ignore empty strings and single dots, pop the stack for <code>..</code> (if non-empty), and push valid directory names.</p>
<p>The resulting stack, joined with <code>/</code> and prefixed with <code>/</code>, gives the canonical simplified path.</p>
<p>This runs in O(n) time and O(n) space.</p>
<pre><code>function simplifyPath(path) {
  let parts = path.split('/'), stack = [];
  for (let p of parts) {
    if (!p || p === '.') continue;
    if (p === '..') stack.pop();
    else stack.push(p);
  }
  return '/' + stack.join('/');
}</code></pre>
<p><strong>Stack as directory hierarchy:</strong> Each valid directory name goes onto the stack; <code>..</code> pops the most recent directory — this mirrors filesystem navigation exactly.</p>
<p>Handle root edge case: popping an empty stack for <code>..</code> at the root level is a no-op since you cannot go above the root directory.</p>`
        },
        {
          q: "How do you find the minimum number of operations to make brackets valid?",
          a: `<p>A string of brackets is valid if every open bracket has a matching close bracket in the correct order. The goal is to find the minimum additions needed to balance the string.</p>
<p>Track two counters: <code>open</code> (unmatched open brackets) and <code>close</code> (unmatched close brackets). For each <code>(</code> increment open; for each <code>)</code> either match an open (decrement) or increment close.</p>
<p>At the end, the answer is <code>open + close</code> — each represents a bracket that must be added on the opposite side.</p>
<p>This runs in O(n) time and O(1) space with just two counters.</p>
<pre><code>function minAddToMakeValid(s) {
  let open = 0, close = 0;
  for (let c of s) {
    if (c === '(') open++;
    else if (open &gt; 0) open--;
    else close++;
  }
  return open + close;
}</code></pre>
<p><strong>Two-counter approach:</strong> <code>close</code> counts <code>)</code> with no matching <code>(</code> to the left; <code>open</code> counts <code>(</code> with no matching <code>)</code> to the right.</p>
<p>The same problem can be solved with a single stack, but two counters are both simpler and more space-efficient.</p>`
        },
        {
          q: "How do you implement a min-stack supporting push, pop, top, and getMin in O(1)?",
          a: `<p>A standard stack has O(1) push and pop but O(n) minimum lookup. The min-stack augments each operation to maintain the current minimum in O(1).</p>
<p>Maintain a parallel <code>minStack</code>. On every push, compute <code>Math.min(val, current min)</code> and push that to <code>minStack</code>. On every pop, also pop <code>minStack</code>.</p>
<p>This means the top of <code>minStack</code> always holds the minimum of all elements currently in the main stack.</p>
<p>Both stacks stay in sync — they grow and shrink together, guaranteeing O(1) for all four operations.</p>
<pre><code>class MinStack {
  constructor() { this.stack = []; this.minStack = []; }
  push(val) {
    this.stack.push(val);
    let minVal = this.minStack.length ? Math.min(val, this.minStack[this.minStack.length-1]) : val;
    this.minStack.push(minVal);
  }
  pop() { this.stack.pop(); this.minStack.pop(); }
  top() { return this.stack[this.stack.length-1]; }
  getMin() { return this.minStack[this.minStack.length-1]; }
}</code></pre>
<p><strong>Parallel tracking:</strong> Rather than searching the stack for the minimum on each call, pre-compute and store the running minimum at each level of the stack.</p>
<p>An optimization stores only when the new minimum changes (using <code>&lt;=</code> comparisons) — reduces minStack size but complicates pop logic slightly.</p>`
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
          a: `<p>The maximum depth (height) of a binary tree is the number of nodes along the longest path from the root to a leaf node.</p>
<p>The depth of a node is 1 plus the maximum depth of its two subtrees. A null node has depth 0 — this is the base case of the recursion.</p>
<p>This is a classic post-order DFS: process both subtrees first, then compute the result for the current node.</p>
<p>Time complexity is O(n) since every node is visited once; space is O(h) for the recursion stack where h is the tree height.</p>
<pre><code>function maxDepth(root) {
  if (!root) return 0;
  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
}</code></pre>
<p><strong>Post-order computation:</strong> The result at each node depends on its children's results, so children must be processed before the parent — defining the post-order nature.</p>
<p>An iterative BFS approach also works: the number of levels (queue drain iterations) equals the maximum depth.</p>`
        },
        {
          q: "Perform level order traversal of a binary tree.",
          a: `<p>Level order traversal (BFS) visits all nodes at depth d before any node at depth d+1, processing the tree left-to-right, layer by layer.</p>
<p>Use a queue. Start by enqueuing the root. For each level, determine the queue size, dequeue exactly that many nodes (the current level), and enqueue their children for the next level.</p>
<p>The snapshot of queue size at the start of each iteration isolates exactly one level of nodes.</p>
<p>Time complexity is O(n) since every node is enqueued and dequeued exactly once; space is O(w) where w is the maximum width.</p>
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
}</code></pre>
<p><strong>Size snapshot per level:</strong> Capturing <code>queue.length</code> before the inner loop ensures only nodes from the current level are processed, regardless of how many children are added.</p>
<p>Level order traversal is the foundation for many tree problems: zigzag traversal, finding level averages, right side view, and more.</p>`
        },
        {
          q: "Check if a binary tree is symmetric.",
          a: `<p>A binary tree is symmetric (a mirror of itself) if the left subtree is a mirror reflection of the right subtree around the root.</p>
<p>Recursively compare corresponding node pairs: the root's left child with the root's right child, the left-left with right-right, and the left-right with right-left.</p>
<p>Two subtrees are mirrors if both are null (symmetric), one is null and the other is not (asymmetric), or their values differ (asymmetric).</p>
<p>Time complexity is O(n) and space is O(h) for the recursion stack.</p>
<pre><code>function isSymmetric(root) {
  function mirror(a, b) {
    if (!a &amp;&amp; !b) return true;
    if (!a || !b) return false;
    return a.val === b.val &amp;&amp; mirror(a.left, b.right) &amp;&amp; mirror(a.right, b.left);
  }
  return mirror(root, root);
}</code></pre>
<p><strong>Cross-comparison:</strong> Instead of comparing left with left and right with right, compare left with right subtrees at each level — this captures the mirror property.</p>
<p>An iterative BFS version uses a queue of pairs: each iteration dequeues two nodes and checks their values and enqueues their children in mirror order.</p>`
        },
        {
          q: "Determine if a root-to-leaf path with a given sum exists.",
          a: `<p>A root-to-leaf path sum is the sum of all node values along a path from the root down to a leaf (a node with no children).</p>
<p>Use DFS. At each node, subtract the node's value from the target sum. At a leaf node, check if the remaining sum is zero — if so, a matching path was found.</p>
<p>Null nodes return false immediately — if you reach null without finding a leaf match, that path did not work out.</p>
<p>The recursion depth is O(h) and time complexity is O(n) in the worst case (balanced tree visits all nodes).</p>
<pre><code>function hasPathSum(root, sum) {
  if (!root) return false;
  if (!root.left &amp;&amp; !root.right) return sum === root.val;
  return hasPathSum(root.left, sum - root.val) || hasPathSum(root.right, sum - root.val);
}</code></pre>
<p><strong>Check at leaf, not just null:</strong> Test <code>sum === root.val</code> only when the node is a leaf — checking at null would count sums along internal paths that do not reach a leaf.</p>
<p>To collect all such paths (not just detect existence), use a DFS variant that tracks the current path array and adds it to results when the sum matches at a leaf.</p>`
        },
        {
          q: "Invert a binary tree.",
          a: `<p>Inverting (mirroring) a binary tree produces its mirror image by swapping the left and right children of every node throughout the tree.</p>
<p>Recursively invert the left and right subtrees first, then swap the two subtree references at the current node. The base case is a null node which returns null.</p>
<p>Note the order: you can swap children before or after recursing — both produce the correct result because the swap and recursion are independent operations.</p>
<p>Time complexity is O(n) and space is O(h) for the call stack, or O(n) for a completely skewed tree.</p>
<pre><code>function invertTree(root) {
  if (!root) return null;
  [root.left, root.right] = [invertTree(root.right), invertTree(root.left)];
  return root;
}</code></pre>
<p><strong>Destructured swap:</strong> Using array destructuring for the swap is clean and evaluates both right-side expressions before assigning — avoiding the need for a temporary variable.</p>
<p>This is the famous "Google interview" problem popularized on Twitter. The iterative BFS version processes nodes level by level, swapping children for each dequeued node.</p>`
        },
        {
          q: "Validate if a tree is a valid BST.",
          a: `<p>A valid BST requires every node to satisfy: all nodes in its left subtree must have smaller values, and all nodes in its right subtree must have larger values — not just its direct children.</p>
<p>Pass a valid range (min, max) to each recursive call. The root starts with (-Infinity, Infinity). When recursing left, update the max to the current node's value. When recursing right, update the min.</p>
<p>A common mistake is only comparing a node to its immediate parent — this misses cases like a right subtree node being smaller than the root.</p>
<p>Time complexity is O(n) and space is O(h).</p>
<pre><code>function isValidBST(root, min = -Infinity, max = Infinity) {
  if (!root) return true;
  if (root.val &lt;= min || root.val &gt;= max) return false;
  return isValidBST(root.left, min, root.val) &amp;&amp; isValidBST(root.right, root.val, max);
}</code></pre>
<p><strong>Range propagation:</strong> Passing min/max bounds narrows the valid range at each level — this enforces the global BST property, not just the local parent-child constraint.</p>
<p>An alternative approach: in-order traversal of a valid BST produces a strictly increasing sequence, so validate that no in-order value is less than or equal to the previous.</p>`
        },
        {
          q: "Find the lowest common ancestor of two nodes in a binary tree.",
          a: `<p>The lowest common ancestor (LCA) of two nodes p and q is the deepest node that has both p and q as descendants (including the node itself).</p>
<p>In a standard binary tree (not necessarily BST), use recursive DFS. If the current node is p or q, return it. Recurse left and right. If both sides return non-null, the current node is the LCA.</p>
<p>If only one side returns non-null, both p and q are in that subtree, so bubble up that result.</p>
<p>This runs in O(n) time and O(h) space for the recursion stack.</p>
<pre><code>function lowestCommonAncestor(root, p, q) {
  if (!root || root === p || root === q) return root;
  let left = lowestCommonAncestor(root.left, p, q);
  let right = lowestCommonAncestor(root.right, p, q);
  if (left &amp;&amp; right) return root;
  return left || right;
}</code></pre>
<p><strong>Both sides non-null means current is LCA:</strong> If the left subtree returns p and the right subtree returns q (or vice versa), the current node is the meeting point for both nodes.</p>
<p>For a BST, LCA is simpler: if both p and q are less than the current node, go left; if both are greater, go right; otherwise, the current node is the LCA.</p>`
        },
        {
          q: "Find the diameter of a binary tree.",
          a: `<p>The diameter of a binary tree is the length of the longest path between any two nodes, measured in number of edges. The path does not need to pass through the root.</p>
<p>At each node, the longest path through that node is the sum of the depths (heights) of its left and right subtrees. Track the global maximum across all nodes.</p>
<p>Use DFS that returns the depth of each subtree. Update the global max at each node with <code>left + right</code>, but return only <code>1 + max(left, right)</code> to the parent.</p>
<p>This O(n) single-pass DFS avoids the O(n²) brute force that recomputes height separately for each node.</p>
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
}</code></pre>
<p><strong>Update global max, return single branch:</strong> The diameter update at each node uses both branches (l + r), but the returned value uses only the longer branch to extend the path to the parent.</p>
<p>The diameter value is in edges (l + r), not nodes. To count in nodes, return l + r + 1 for the path through the current node.</p>`
        },
        {
          q: "Explain the concept of serializing and deserializing a binary tree.",
          a: `<p>Serialization converts a tree into a string representation that can be stored or transmitted. Deserialization reconstructs the exact tree from that string.</p>
<p>Use preorder traversal (root → left → right) with null markers for missing children. Each node value is separated by a delimiter, and null nodes are recorded as a special token (e.g., "null" or "#").</p>
<p>Deserialization uses the same preorder sequence: read values one by one from a queue and recursively build nodes, treating the null token as the signal to stop recursion.</p>
<p>This ensures a unique representation: the preorder + null-markers combination fully reconstructs the tree without ambiguity.</p>
<pre><code>// Concept: "1,2,null,null,3,4,null,null,5,null,null"
// Preorder traversal with null markers for missing children
// Deserialize by reading values in order and recursively building nodes</code></pre>
<p><strong>Preorder with null markers:</strong> Level-order (BFS) serialization also works and is more compact, but preorder is simpler to implement and perfectly reversible.</p>
<p>This technique is used in database storage of hierarchical data, inter-process communication of tree structures, and deep copying complex tree objects.</p>`
        },
        {
          q: "Explain the concept of counting islands in a grid (Number of Islands).",
          a: `<p>The Number of Islands problem treats a binary grid as a graph where land cells ('1') are nodes and edges connect adjacent land cells (up, down, left, right).</p>
<p>For each unvisited land cell, run DFS or BFS to mark all connected land cells as visited. Each DFS/BFS call represents one distinct island, so increment the counter once per call.</p>
<p>Marking cells as '0' (or using a visited boolean array) during traversal prevents counting the same island multiple times.</p>
<p>Time complexity is O(m × n) and space is O(m × n) in the worst case for the DFS recursion stack.</p>
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
}</code></pre>
<p><strong>Mark-and-count:</strong> Overwriting visited land cells with '0' uses the grid itself as the visited array, avoiding extra O(m × n) space.</p>
<p>BFS (iterative with a queue) is preferred over DFS for very large grids to avoid stack overflow from deep recursion.</p>`
        },
        {
          q: "How do you perform binary tree zigzag level order traversal?",
          a: `<p>Zigzag level order traversal visits nodes level by level, alternating between left-to-right and right-to-left direction on each level.</p>
<p>Use standard BFS with a queue. For each level, process all nodes and store their values. Alternate the insertion direction: push to the end for even levels, push to the front for odd levels.</p>
<p>A direction flag toggled each level controls whether values are inserted normally or reversed.</p>
<p>Time complexity is O(n) since every node is visited once; space is O(n) for the queue and result arrays.</p>
<pre><code>function zigzagLevelOrder(root) {
  if (!root) return [];
  let queue = [root], result = [], leftToRight = true;
  while (queue.length) {
    let size = queue.length, level = [];
    for (let i = 0; i &lt; size; i++) {
      let node = queue.shift();
      if (leftToRight) level.push(node.val); else level.unshift(node.val);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    result.push(level);
    leftToRight = !leftToRight;
  }
  return result;
}</code></pre>
<p><strong>Direction toggle:</strong> A boolean flag flipped each level avoids reversing the array afterward — inserting at front or back achieves the zigzag order in-place.</p>
<p>A deque-based approach can further optimize by avoiding <code>unshift</code> (O(n)) by appending/prepending with O(1) deque ops.</p>`
        },
        {
          q: "How do you find all paths from root to leaves in a binary tree?",
          a: `<p>A root-to-leaf path passes through every level from the root down to a node with no children. Collecting all such paths is a classic DFS problem.</p>
<p>Perform DFS, maintaining the current path as an array. At each node, add its value to the path. When a leaf is reached, record a copy of the path. Backtrack by removing the node value after recursion returns.</p>
<p>Backtracking is essential — without it, the path array would accumulate values from sibling subtrees incorrectly.</p>
<p>Time complexity is O(n) for visiting all nodes; space is O(h) for the recursion stack where h is the tree height.</p>
<pre><code>function binaryTreePaths(root) {
  let result = [];
  function dfs(node, path) {
    if (!node) return;
    path.push(node.val);
    if (!node.left &amp;&amp; !node.right) result.push([...path]);
    dfs(node.left, path);
    dfs(node.right, path);
    path.pop(); // backtrack
  }
  dfs(root, []);
  return result;
}</code></pre>
<p><strong>Backtrack with pop:</strong> Adding and then removing the current node from the path restores state after returning from a subtree — the same backtracking pattern used in permutation and combination problems.</p>
<p>Storing <code>[...path]</code> (a copy) rather than <code>path</code> (a reference) is critical — all paths would point to the same mutating array otherwise.</p>`
        },
        {
          q: "How do you check if two binary trees are identical?",
          a: `<p>Two binary trees are identical if they have the same structure and every corresponding node has the same value.</p>
<p>Use recursive DFS. At each step, check: both null (match), one null (mismatch), different values (mismatch). If both are non-null and values match, recurse into both left and right subtrees.</p>
<p>The recursion naturally handles trees of different sizes — mismatched null/non-null at any level immediately returns false.</p>
<p>This runs in O(min(n, m)) time where n and m are the sizes of the two trees.</p>
<pre><code>function isSameTree(p, q) {
  if (!p &amp;&amp; !q) return true;
  if (!p || !q) return false;
  if (p.val !== q.val) return false;
  return isSameTree(p.left, q.left) &amp;&amp; isSameTree(p.right, q.right);
}</code></pre>
<p><strong>Base cases first:</strong> Check null conditions before accessing <code>.val</code> to avoid null reference errors — this is the standard pattern for recursive tree comparisons.</p>
<p>An iterative BFS version pushes corresponding node pairs onto a queue and compares them level by level — useful when stack depth is a concern.</p>`
        },
        {
          q: "How do you construct a binary tree from preorder and inorder traversals?",
          a: `<p>Preorder traversal gives you the root first, then left subtree, then right subtree. Inorder gives left subtree, then root, then right subtree.</p>
<p>The first element of preorder is always the root. Find that root in the inorder array to determine the sizes of the left and right subtrees. Recurse with the appropriate slices of both arrays.</p>
<p>Using a HashMap for inorder index lookups avoids O(n) linear search per call, reducing total time from O(n²) to O(n).</p>
<p>This is a divide-and-conquer approach running in O(n) time with the HashMap optimization.</p>
<pre><code>function buildTree(preorder, inorder) {
  let map = new Map();
  inorder.forEach((v, i) =&gt; map.set(v, i));
  let preIdx = 0;
  function build(left, right) {
    if (left &gt; right) return null;
    let rootVal = preorder[preIdx++];
    let node = { val: rootVal, left: null, right: null };
    let idx = map.get(rootVal);
    node.left = build(left, idx - 1);
    node.right = build(idx + 1, right);
    return node;
  }
  return build(0, inorder.length - 1);
}</code></pre>
<p><strong>HashMap for O(1) root lookup:</strong> Pre-building the inorder index map eliminates the O(n) linear search per call and reduces the overall complexity to O(n).</p>
<p>A similar algorithm works for postorder + inorder: the last element of postorder is the root, and you build right subtree before left.</p>`
        },
        {
          q: "How do you find the maximum path sum in a binary tree?",
          a: `<p>A path in a binary tree connects any node to any other node without repeating. The path can go through the root but doesn't have to — it may exist entirely within a subtree.</p>
<p>Use DFS where each recursive call returns the maximum "gain" from a node downward (single-branch path). At each node, compute the local maximum (left + right + node.val) and update the global maximum.</p>
<p>Negative branches contribute negatively, so use <code>Math.max(0, gain)</code> to ignore branches with negative sums.</p>
<p>This runs in O(n) time and O(h) space for the recursion stack.</p>
<pre><code>function maxPathSum(root) {
  let max = -Infinity;
  function gain(node) {
    if (!node) return 0;
    let left = Math.max(0, gain(node.left));
    let right = Math.max(0, gain(node.right));
    max = Math.max(max, left + right + node.val);
    return node.val + Math.max(left, right);
  }
  gain(root);
  return max;
}</code></pre>
<p><strong>Gain vs path distinction:</strong> The returned value is the single-direction gain (used by the parent), while the local path value (left + right + val) is computed separately for the global maximum update.</p>
<p>The global max must be initialized to <code>-Infinity</code>, not 0, because all nodes could be negative, and the answer must include at least one node.</p>`
        },
        {
          q: "How do you find the kth smallest element in a BST?",
          a: `<p>In a BST, inorder traversal (left → node → right) visits nodes in ascending sorted order. The kth node visited during inorder traversal is the kth smallest element.</p>
<p>Perform inorder DFS, decrementing a counter k each time a node is visited. When k reaches 0, record the current node's value and stop further traversal.</p>
<p>An iterative inorder traversal with an explicit stack is preferred for early termination without relying on exception handling or flags.</p>
<p>Time complexity is O(h + k) where h is the tree height; space is O(h) for the stack.</p>
<pre><code>function kthSmallest(root, k) {
  let stack = [], curr = root;
  while (curr || stack.length) {
    while (curr) { stack.push(curr); curr = curr.left; }
    curr = stack.pop();
    if (--k === 0) return curr.val;
    curr = curr.right;
  }
}</code></pre>
<p><strong>Iterative inorder for early exit:</strong> The iterative version can stop immediately when k reaches 0 without visiting remaining nodes, whereas recursive DFS requires flag checks to short-circuit.</p>
<p>Augmenting the BST with subtree sizes (order-statistic tree) allows O(log n) kth smallest queries — useful when this query runs frequently with insertions/deletions.</p>`
        },
        {
          q: "How do you detect a cycle in a directed graph using DFS?",
          a: `<p>A cycle in a directed graph means there exists a path from a node back to itself following directed edges. Undirected cycle detection uses a different algorithm.</p>
<p>Use DFS with two sets: visited (all nodes ever visited) and recursionStack (nodes in the current DFS path). A cycle is detected when a neighbor is already in the recursion stack.</p>
<p>After fully exploring a node, remove it from the recursion stack but keep it in visited to avoid reprocessing.</p>
<p>Time complexity is O(V + E) where V is vertices and E is edges.</p>
<pre><code>function hasCycle(V, adj) {
  let visited = new Set(), recStack = new Set();
  function dfs(node) {
    visited.add(node); recStack.add(node);
    for (let neighbor of (adj[node] || [])) {
      if (!visited.has(neighbor) &amp;&amp; dfs(neighbor)) return true;
      if (recStack.has(neighbor)) return true;
    }
    recStack.delete(node);
    return false;
  }
  for (let i = 0; i &lt; V; i++)
    if (!visited.has(i) &amp;&amp; dfs(i)) return true;
  return false;
}</code></pre>
<p><strong>Recursion stack tracks the current path:</strong> A back edge (neighbor in recStack) means there is a path from the neighbor to the current node, forming a cycle in the directed graph.</p>
<p>For undirected graphs, simpler logic applies: if a neighbor is already visited and is not the parent node, a cycle exists.</p>`
        },
        {
          q: "How do you perform topological sort on a directed acyclic graph?",
          a: `<p>Topological sort orders vertices of a DAG such that for every directed edge u → v, u comes before v. It is used in task scheduling, dependency resolution, and build systems.</p>
<p>DFS-based approach: perform DFS on all nodes; when a node is fully processed (all descendants visited), push it to a stack. The stack's reverse order (or popping order) is the topological order.</p>
<p>Kahn's algorithm (BFS-based) processes nodes with in-degree 0 first. It naturally detects cycles if not all nodes are processed.</p>
<p>Both run in O(V + E) time.</p>
<pre><code>function topoSort(V, adj) {
  let visited = new Set(), stack = [];
  function dfs(node) {
    visited.add(node);
    for (let nb of (adj[node] || [])) if (!visited.has(nb)) dfs(nb);
    stack.push(node);
  }
  for (let i = 0; i &lt; V; i++) if (!visited.has(i)) dfs(i);
  return stack.reverse();
}</code></pre>
<p><strong>Post-order push:</strong> Pushing a node after all its descendants are processed ensures it appears before all nodes that depend on it when the stack is reversed.</p>
<p>Kahn's algorithm is preferred for cycle detection since nodes with a cycle never reach in-degree 0 and remain unprocessed — the count of processed nodes will be less than V.</p>`
        },
        {
          q: "How do you find the shortest path in a weighted graph (Dijkstra's)?",
          a: `<p>Dijkstra's algorithm finds the shortest path from a source node to all other nodes in a graph with non-negative edge weights.</p>
<p>Use a priority queue (min-heap). Initialize all distances as Infinity, set the source to 0. Repeatedly extract the node with the smallest current distance and relax its neighbors.</p>
<p>Relaxation: if <code>dist[u] + weight(u, v) &lt; dist[v]</code>, update <code>dist[v]</code> and push to the priority queue.</p>
<p>With a binary heap, time complexity is O((V + E) log V). Without a heap, it is O(V²) but simpler to implement.</p>
<pre><code>function dijkstra(graph, src) {
  let dist = {}, visited = new Set();
  for (let node in graph) dist[node] = Infinity;
  dist[src] = 0;
  let pq = [[0, src]]; // [distance, node]
  while (pq.length) {
    pq.sort((a, b) =&gt; a[0] - b[0]);
    let [d, u] = pq.shift();
    if (visited.has(u)) continue;
    visited.add(u);
    for (let [v, w] of (graph[u] || [])) {
      if (d + w &lt; dist[v]) { dist[v] = d + w; pq.push([dist[v], v]); }
    }
  }
  return dist;
}</code></pre>
<p><strong>Greedy shortest path:</strong> Always processing the node with the smallest known distance guarantees that when a node is finalized (added to visited), its distance is optimal.</p>
<p>Dijkstra fails with negative edge weights — use Bellman-Ford instead which handles negative weights in O(VE) time.</p>`
        },
        {
          q: "How do you check if a graph is bipartite?",
          a: `<p>A bipartite graph can have its vertices divided into two sets such that every edge connects a vertex in one set to a vertex in the other. Equivalently, a graph is bipartite if and only if it contains no odd-length cycles.</p>
<p>Use BFS or DFS to color the graph with two colors. Start with any node as color 0. For each neighbor, assign the opposite color. If a neighbor already has the same color as the current node, the graph is not bipartite.</p>
<p>This check must be performed for all connected components (in case the graph is disconnected).</p>
<p>Time complexity is O(V + E).</p>
<pre><code>function isBipartite(graph) {
  let color = Array(graph.length).fill(-1);
  for (let start = 0; start &lt; graph.length; start++) {
    if (color[start] !== -1) continue;
    let queue = [start]; color[start] = 0;
    while (queue.length) {
      let node = queue.shift();
      for (let nb of graph[node]) {
        if (color[nb] === -1) { color[nb] = 1 - color[node]; queue.push(nb); }
        else if (color[nb] === color[node]) return false;
      }
    }
  }
  return true;
}</code></pre>
<p><strong>Two-coloring check:</strong> Any node with the same color as its neighbor proves an odd-length cycle exists — bipartite and odd cycles are mutually exclusive.</p>
<p>Bipartite checking is used in matching problems (e.g., job assignments), social network analysis, and scheduling with conflict constraints.</p>`
        },
        {
          q: "How do you find the number of connected components in an undirected graph?",
          a: `<p>In an undirected graph, a connected component is a maximal set of nodes where every node is reachable from every other node via edges.</p>
<p>Use DFS or BFS starting from each unvisited node. Each new DFS/BFS call from an unvisited starting node represents a new connected component.</p>
<p>Union-Find (Disjoint Set Union) is an alternative that efficiently handles dynamic edge additions with near-O(1) per operation.</p>
<p>Time complexity is O(V + E) with DFS/BFS.</p>
<pre><code>function countComponents(n, edges) {
  let adj = Array.from({length: n}, () =&gt; []);
  for (let [u, v] of edges) { adj[u].push(v); adj[v].push(u); }
  let visited = new Set(), count = 0;
  function dfs(node) {
    visited.add(node);
    for (let nb of adj[node]) if (!visited.has(nb)) dfs(nb);
  }
  for (let i = 0; i &lt; n; i++) { if (!visited.has(i)) { count++; dfs(i); } }
  return count;
}</code></pre>
<p><strong>One DFS per component:</strong> Each unvisited node that triggers a new DFS call is in an unexplored component — the count of such calls equals the number of components.</p>
<p>Union-Find is preferred when you need to dynamically count components as edges are added, since it handles this incrementally with path compression and union by rank.</p>`
        },
        {
          q: "How do you solve the Word Ladder problem?",
          a: `<p>Word Ladder asks for the shortest sequence of words from a start word to an end word where each step changes exactly one letter and every intermediate word must be in a dictionary.</p>
<p>Use BFS to find the shortest path. From each word, generate all possible one-letter variations and check if they exist in the word set. Visit each word at most once.</p>
<p>Removing words from the set as they are visited prevents revisiting and ensures each word is on the shortest path only.</p>
<p>Time complexity is O(M² × N) where M is word length and N is dictionary size; generating variations is the bottleneck.</p>
<pre><code>function ladderLength(beginWord, endWord, wordList) {
  let set = new Set(wordList), queue = [[beginWord, 1]];
  while (queue.length) {
    let [word, steps] = queue.shift();
    for (let i = 0; i &lt; word.length; i++) {
      for (let c = 97; c &lt;= 122; c++) {
        let next = word.slice(0, i) + String.fromCharCode(c) + word.slice(i+1);
        if (next === endWord) return steps + 1;
        if (set.has(next)) { set.delete(next); queue.push([next, steps+1]); }
      }
    }
  }
  return 0;
}</code></pre>
<p><strong>BFS for shortest path:</strong> BFS guarantees the minimum number of steps since it explores all paths of length k before any path of length k+1.</p>
<p>Bidirectional BFS from both start and end can halve the search space, offering significant speedup for large dictionaries.</p>`
        },
        {
          q: "How do you check if a binary tree is height-balanced?",
          a: `<p>A height-balanced binary tree has the property that for every node, the heights of its left and right subtrees differ by at most 1.</p>
<p>Use a post-order DFS that returns the height of each subtree. If any subtree is unbalanced (height -1 as sentinel), propagate -1 upward without further computation.</p>
<p>This runs in O(n) with a single pass — the naive approach that recomputes height separately is O(n²).</p>
<p>The -1 sentinel value signals an imbalance; the root returns -1 if any subtree is imbalanced, otherwise returns its actual height.</p>
<pre><code>function isBalanced(root) {
  function height(node) {
    if (!node) return 0;
    let l = height(node.left), r = height(node.right);
    if (l === -1 || r === -1 || Math.abs(l - r) &gt; 1) return -1;
    return 1 + Math.max(l, r);
  }
  return height(root) !== -1;
}</code></pre>
<p><strong>-1 sentinel for early termination:</strong> Returning -1 from an unbalanced subtree short-circuits all ancestor computations without needing a separate flag variable.</p>
<p>AVL trees maintain this balance invariant on every insertion/deletion through rotations, guaranteeing O(log n) for all operations.</p>`
        },
        {
          q: "How do you find all ancestors of a node in a binary tree?",
          a: `<p>The ancestors of a target node are all nodes on the path from the root to that target node, excluding the target itself.</p>
<p>Use DFS. At each node, recurse into left and right subtrees. If either subtree finds the target, include the current node in the ancestors path and return true to propagate up.</p>
<p>The path is built during the return phase of recursion — nodes are added as the successful path unwinds upward through the call stack.</p>
<p>This runs in O(n) time and O(h) space for the recursion stack where h is the tree height.</p>
<pre><code>function findAncestors(root, target) {
  let ancestors = [];
  function dfs(node) {
    if (!node) return false;
    if (node.val === target) return true;
    if (dfs(node.left) || dfs(node.right)) {
      ancestors.push(node.val);
      return true;
    }
    return false;
  }
  dfs(root);
  return ancestors.reverse(); // root-to-parent order
}</code></pre>
<p><strong>Return-phase accumulation:</strong> Nodes are added to the ancestor list as the DFS unwinds upward — naturally giving them in reverse order (leaf's parent first to root last).</p>
<p>This same DFS pattern is used in LCA (Lowest Common Ancestor) problems, where you check whether both left and right subtrees return true for different targets.</p>`
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
          a: `<p>You can climb 1 or 2 steps at a time. The number of distinct ways to reach step n equals ways(n-1) plus ways(n-2) — a Fibonacci recurrence.</p>
<p>Base cases: ways(1) = 1 (only one step); ways(2) = 2 (either 1+1 or 2). Build up from these using bottom-up DP.</p>
<p>Use two rolling variables instead of an array to achieve O(1) space — only the two previous values are ever needed.</p>
<p>This runs in O(n) time and O(1) space.</p>
<pre><code>function climbStairs(n) {
  let a = 1, b = 1;
  for (let i = 2; i &lt;= n; i++) [a, b] = [b, a + b];
  return b;
}</code></pre>
<p><strong>Fibonacci pattern:</strong> Climbing stairs is exactly Fibonacci shifted by one — recognizing this lets you apply matrix exponentiation for O(log n) if n is extremely large.</p>
<p>Generalize to k steps by summing the last k DP values at each position using a sliding window sum — this keeps time O(n) regardless of k.</p>`
        },
        {
          q: "Solve the House Robber problem.",
          a: `<p>You cannot rob two adjacent houses. For each house, decide: rob it (add its value to the profit two positions back) or skip it (keep the profit from the previous position).</p>
<p>The recurrence is: <code>dp[i] = max(dp[i-1], dp[i-2] + nums[i])</code>.</p>
<p>Only the two previous DP values are needed at any point, so use two variables for O(1) space instead of a full array.</p>
<p>This runs in O(n) time and O(1) space.</p>
<pre><code>function rob(nums) {
  let prev2 = 0, prev1 = 0;
  for (let n of nums) {
    let curr = Math.max(prev1, prev2 + n);
    prev2 = prev1; prev1 = curr;
  }
  return prev1;
}</code></pre>
<p><strong>Two-variable rolling DP:</strong> <code>prev2</code> holds dp[i-2] and <code>prev1</code> holds dp[i-1]; update both each iteration to maintain the recurrence without an array.</p>
<p>House Robber II (circular array) splits into two subproblems: rob houses 0..(n-2) and rob houses 1..(n-1), then take the maximum of both results.</p>`
        },
        {
          q: "Solve the Coin Change problem (minimum coins).",
          a: `<p>Given coin denominations and a target amount, find the minimum number of coins needed. Coins can be reused any number of times (unbounded Knapsack variant).</p>
<p>Define <code>dp[i]</code> as the minimum coins to make amount i. Initialize all cells to Infinity except <code>dp[0] = 0</code> (zero coins for amount zero).</p>
<p>For each coin c, update all amounts from c to target: <code>dp[i] = min(dp[i], dp[i-c] + 1)</code>. Forward traversal allows the same coin to be reused.</p>
<p>Time complexity is O(amount * coins) and space is O(amount).</p>
<pre><code>function coinChange(coins, amount) {
  let dp = Array(amount + 1).fill(Infinity);
  dp[0] = 0;
  for (let c of coins)
    for (let i = c; i &lt;= amount; i++)
      dp[i] = Math.min(dp[i], dp[i - c] + 1);
  return dp[amount] === Infinity ? -1 : dp[amount];
}</code></pre>
<p><strong>Forward traversal for unbounded:</strong> Iterating i from low to high lets the same coin be counted multiple times — reverse it to get 0/1 Knapsack behavior.</p>
<p>Return -1 if <code>dp[amount]</code> remains Infinity — it means the target amount cannot be formed with any combination of the given coins.</p>`
        },
        {
          q: "Find the longest palindromic substring.",
          a: `<p>A palindrome reads the same forwards and backwards. The expand-from-center technique checks palindromes efficiently without scanning all substrings.</p>
<p>For each character, expand outward from that character (odd-length center) and the gap to its right (even-length center) as long as characters match.</p>
<p>Track the start index and maximum length found; update when a longer palindrome is discovered during expansion.</p>
<p>This runs in O(n) time for each center and O(n) centers: overall O(n\u00b2) time with O(1) space.</p>
<pre><code>function longestPalindrome(s) {
  let start = 0, maxLen = 1;
  function expand(l, r) {
    while (l &gt;= 0 &amp;&amp; r &lt; s.length &amp;&amp; s[l] === s[r]) { l--; r++; }
    if (r - l - 1 &gt; maxLen) { start = l + 1; maxLen = r - l - 1; }
  }
  for (let i = 0; i &lt; s.length; i++) { expand(i, i); expand(i, i + 1); }
  return s.substring(start, start + maxLen);
}</code></pre>
<p><strong>Two center types:</strong> Call expand for both <code>(i, i)</code> (odd-length) and <code>(i, i+1)</code> (even-length) at each position to cover all possible palindromes.</p>
<p>Manacher's algorithm solves this in O(n) using previously computed results but is significantly harder to implement — the expand approach is preferred in interview settings.</p>`
        },
        {
          q: "Find the maximum subarray sum (Kadane's Algorithm).",
          a: `<p>Kadane's Algorithm finds the subarray with the maximum sum in O(n) by making a greedy decision at each element.</p>
<p>For each element, decide whether to extend the existing subarray or start a new one: <code>cur = max(num, cur + num)</code>. A negative running sum means starting fresh is always better.</p>
<p>Track the global maximum alongside the current running sum — update it whenever <code>cur</code> exceeds it.</p>
<p>This runs in O(n) time and O(1) space, compared to O(n\u00b2) or O(n\u00b3) for brute force approaches.</p>
<pre><code>function maxSubArray(nums) {
  let max = nums[0], cur = nums[0];
  for (let i = 1; i &lt; nums.length; i++) {
    cur = Math.max(nums[i], cur + nums[i]);
    max = Math.max(max, cur);
  }
  return max;
}</code></pre>
<p><strong>Greedy at each step:</strong> <code>Math.max(num, cur + num)</code> embodies the entire algorithm — if the current sum is negative, adding the current element still results in a suboptimal start, so restart.</p>
<p>To also return the indices of the maximum subarray, track when <code>cur</code> resets (new start candidate) and when <code>max</code> is updated (record end index and the candidate start).</p>`
        },
        {
          q: "Count unique paths in a grid from top-left to bottom-right.",
          a: `<p>Moving only right or down in an m x n grid, the number of unique paths to any cell equals the paths from above plus the paths from the left.</p>
<p>The first row and column each have exactly one path (all-right or all-down), forming the base cases. For every other cell: <code>dp[i][j] = dp[i-1][j] + dp[i][j-1]</code>.</p>
<p>A 1D DP array of length n can replace the 2D array: update in-place as you scan each row, since only the current and previous row values are ever needed.</p>
<p>This runs in O(m x n) time and can be reduced to O(n) space.</p>
<pre><code>function uniquePaths(m, n) {
  let dp = Array.from({length: m}, () =&gt; Array(n).fill(1));
  for (let i = 1; i &lt; m; i++)
    for (let j = 1; j &lt; n; j++)
      dp[i][j] = dp[i-1][j] + dp[i][j-1];
  return dp[m-1][n-1];
}</code></pre>
<p><strong>Initialize first row and column to 1:</strong> There is exactly one path to any cell in the first row (only move right) or first column (only move down) — these are the DP base cases.</p>
<p>The combinatorial closed form C(m+n-2, m-1) computes the same answer directly in O(m+n) time, useful when m and n are very large.</p>`
        },
        {
          q: "Explain the Word Break problem concept.",
          a: `<p>Word Break asks whether a string can be segmented into a space-separated sequence of dictionary words. Each portion must be a valid word in the given dictionary.</p>
<p>Use 1D DP: <code>dp[i]</code> is true if <code>s[0..i-1]</code> can be segmented. For each index i, check all split points j where <code>dp[j]</code> is true and <code>s[j..i-1]</code> is in the dictionary Set.</p>
<p>Using a Set for the dictionary gives O(1) word lookup, making the overall time O(n\u00b2) where n is the string length.</p>
<p>Space complexity is O(n) for the DP array plus O(dict size) for the Set.</p>
<pre><code>function wordBreak(s, dict) {
  let set = new Set(dict), dp = Array(s.length + 1).fill(false);
  dp[0] = true;
  for (let i = 1; i &lt;= s.length; i++)
    for (let j = 0; j &lt; i; j++)
      if (dp[j] &amp;&amp; set.has(s.substring(j, i))) { dp[i] = true; break; }
  return dp[s.length];
}</code></pre>
<p><strong>Early break on match:</strong> Once <code>dp[i]</code> is set to true, exit the inner loop immediately — additional j values cannot change the result and skipping them saves time.</p>
<p>Word Break II (returning all segmentations) stores all valid split points instead of a boolean and reconstructs paths through backtracking or memoized DFS.</p>`
        },
        {
          q: "Solve the Decode Ways problem.",
          a: `<p>A digit string encodes letters: '1' = 'A', '2' = 'B', ..., '26' = 'Z'. Count all distinct ways to decode the entire string.</p>
<p>Use DP where <code>dp[i]</code> is the count of ways to decode the first i digits. At each position check: if the single digit s[i-1] is valid (1-9), add <code>dp[i-1]</code>; if the two-digit number s[i-2..i-1] is 10-26, add <code>dp[i-2]</code>.</p>
<p>Special case: leading zeros are invalid; '0' alone has no mapping and makes <code>dp[i] = 0</code> if not part of 10 or 20.</p>
<p>This runs in O(n) time and O(n) space.</p>
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
}</code></pre>
<p><strong>Zero handling:</strong> A '0' cannot be decoded alone (no letter maps to 0); it must be part of '10' or '20'. Any other two-digit starting with 0 (like '06') is invalid.</p>
<p>Space can be reduced to O(1) by using two variables <code>prev1</code> and <code>prev2</code> instead of the array since only the last two DP values are ever needed.</p>`
        },
        {
          q: "Find the longest common subsequence of two strings.",
          a: `<p>A subsequence preserves character order but not necessarily contiguity. The Longest Common Subsequence (LCS) is the longest sequence appearing in both strings as a subsequence.</p>
<p>Define <code>dp[i][j]</code> as the LCS length for the first i characters of string a and first j of string b. If characters match, extend the diagonal: <code>dp[i-1][j-1] + 1</code>. Otherwise, take the max of skipping one character from either string.</p>
<p>The final answer is in <code>dp[m][n]</code>. To reconstruct the actual subsequence, trace back through the table following diagonal moves for matches.</p>
<p>This runs in O(m × n) time and space, reducible to O(min(m, n)) with the rolling row technique.</p>
<pre><code>function lcs(a, b) {
  let m = a.length, n = b.length;
  let dp = Array.from({length: m+1}, () =&gt; Array(n+1).fill(0));
  for (let i = 1; i &lt;= m; i++)
    for (let j = 1; j &lt;= n; j++)
      dp[i][j] = a[i-1] === b[j-1] ? dp[i-1][j-1] + 1 : Math.max(dp[i-1][j], dp[i][j-1]);
  return dp[m][n];
}</code></pre>
<p><strong>Diagonal extension on match:</strong> When characters match, the LCS grows from the previous diagonal state — not from skipping one character, since that would not use both matched characters.</p>
<p>LCS is the foundation for diff algorithms (git diff), DNA sequence alignment, and the related edit distance problem which also counts insertions and deletions.</p>`
        },
        {
          q: "Find the minimum path sum in a grid.",
          a: `<p>Given a grid of non-negative integers, find the path from top-left to bottom-right (moving only right or down) that minimizes the total sum.</p>
<p>Use DP where <code>dp[i][j]</code> holds the minimum sum to reach cell (i, j). For the first row and column, there is only one direction to come from. For other cells, take the minimum of top and left neighbors.</p>
<p>The DP can be done in-place on the original grid to save O(m × n) space.</p>
<p>This runs in O(m × n) time and O(1) extra space when modifying the grid in-place.</p>
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
}</code></pre>
<p><strong>In-place DP:</strong> Updating the grid itself eliminates the need for a separate dp array — the original grid cell values serve as the cumulative cost so far.</p>
<p>For paths with obstacles (cells set to -1 or blocked), add a check to treat blocked cells as Infinity so they are never selected as part of the minimum path.</p>`
        },
        {
          q: "How do you solve the Edit Distance problem?",
          a: `<p>Edit distance (Levenshtein distance) is the minimum number of insertions, deletions, or substitutions needed to transform one string into another.</p>
<p>Define <code>dp[i][j]</code> as the edit distance between the first i characters of word1 and first j characters of word2. If characters match, <code>dp[i][j] = dp[i-1][j-1]</code>. Otherwise, take 1 + min of three operations (insert, delete, replace).</p>
<p>The base cases are: empty first string requires i insertions; empty second string requires j deletions.</p>
<p>This runs in O(m × n) time and O(m × n) space, reducible to O(min(m, n)) by using only two rows.</p>
<pre><code>function minDistance(word1, word2) {
  let m = word1.length, n = word2.length;
  let dp = Array.from({length: m+1}, (_, i) =&gt; Array.from({length: n+1}, (_, j) =&gt; i || j));
  for (let i = 1; i &lt;= m; i++)
    for (let j = 1; j &lt;= n; j++) {
      if (word1[i-1] === word2[j-1]) dp[i][j] = dp[i-1][j-1];
      else dp[i][j] = 1 + Math.min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]);
    }
  return dp[m][n];
}</code></pre>
<p><strong>Three operations:</strong> Delete from word1 = <code>dp[i-1][j]+1</code>; insert into word1 = <code>dp[i][j-1]+1</code>; replace = <code>dp[i-1][j-1]+1</code>. Always take the minimum.</p>
<p>Edit distance is used in spell checkers, DNA sequence alignment, diff tools, and natural language processing for fuzzy string matching.</p>`
        },
        {
          q: "How do you solve the 0/1 Knapsack problem?",
          a: `<p>In the 0/1 Knapsack problem, given items with weights and values and a capacity limit, find the maximum total value that can fit in the knapsack without exceeding capacity. Each item can be included at most once.</p>
<p>Define <code>dp[i][w]</code> as the maximum value using the first i items with capacity w. For each item, either skip it (<code>dp[i-1][w]</code>) or include it (<code>dp[i-1][w-weight[i]] + value[i]</code>) if it fits.</p>
<p>A 1D DP array traversed in reverse achieves O(capacity) space instead of O(n × capacity).</p>
<p>This runs in O(n × capacity) time (pseudo-polynomial).</p>
<pre><code>function knapsack(weights, values, capacity) {
  let dp = Array(capacity + 1).fill(0);
  for (let i = 0; i &lt; weights.length; i++)
    for (let w = capacity; w &gt;= weights[i]; w--)
      dp[w] = Math.max(dp[w], dp[w - weights[i]] + values[i]);
  return dp[capacity];
}</code></pre>
<p><strong>Reverse traversal for 0/1:</strong> Processing weights from high to low prevents an item from being counted more than once — it ensures we use the previous item row's values.</p>
<p>Unbounded knapsack (each item can be used multiple times) uses the same array but traversed forward, allowing repeated inclusion of the same item.</p>`
        },
        {
          q: "How do you solve the Partition Equal Subset Sum problem?",
          a: `<p>Determine if an array can be partitioned into two subsets with equal sums. This is equivalent to checking if there is a subset with sum equal to totalSum / 2.</p>
<p>If the total sum is odd, partition is immediately impossible. Otherwise, use a 1D boolean DP array where <code>dp[j]</code> is true if sum j is achievable from the elements processed so far.</p>
<p>For each element, iterate the DP array in reverse (like 0/1 Knapsack) setting <code>dp[j] = dp[j] || dp[j - num]</code>.</p>
<p>This runs in O(n × target) time and O(target) space.</p>
<pre><code>function canPartition(nums) {
  let total = nums.reduce((a, b) =&gt; a + b, 0);
  if (total % 2 !== 0) return false;
  let target = total / 2, dp = Array(target + 1).fill(false);
  dp[0] = true;
  for (let num of nums)
    for (let j = target; j &gt;= num; j--)
      dp[j] = dp[j] || dp[j - num];
  return dp[target];
}</code></pre>
<p><strong>Subset sum reframing:</strong> Equal partition reduces to "can we find a subset summing to totalSum/2?" — a classic 0/1 knapsack boolean variant.</p>
<p>Early exit optimization: if <code>dp[target]</code> becomes true during processing, return immediately without completing all remaining iterations.</p>`
        },
        {
          q: "How do you find the longest increasing subsequence (LIS)?",
          a: `<p>The Longest Increasing Subsequence (LIS) is the length of the longest subsequence where each element is strictly greater than the previous.</p>
<p>DP approach: <code>dp[i]</code> = LIS ending at index i. For each i, check all j &lt; i where <code>nums[j] &lt; nums[i]</code> and set <code>dp[i] = max(dp[i], dp[j] + 1)</code>. This is O(n²).</p>
<p>Patience sorting with binary search achieves O(n log n): maintain a DP "tails" array where <code>tails[i]</code> is the smallest possible tail value for all increasing subsequences of length i+1.</p>
<p>An element extends the LIS if greater than all tails or replaces the first tail that is greater than it (binary search).</p>
<pre><code>function lengthOfLIS(nums) {
  let tails = [];
  for (let num of nums) {
    let lo = 0, hi = tails.length;
    while (lo &lt; hi) {
      let mid = (lo + hi) &gt;&gt; 1;
      tails[mid] &lt; num ? lo = mid + 1 : hi = mid;
    }
    tails[lo] = num;
  }
  return tails.length;
}</code></pre>
<p><strong>Patience sort tails:</strong> The length of the tails array equals the LIS length. <code>tails</code> is always sorted, enabling binary search for O(log n) per element.</p>
<p>Note: the tails array does not give a valid subsequence directly — to reconstruct the actual LIS, use the O(n²) DP approach with parent pointer tracking.</p>`
        },
        {
          q: "How do you count subsets with a given sum?",
          a: `<p>Count the number of subsets of an array that sum to exactly a target value. Unlike checking existence (partition problem), here you count all such subsets.</p>
<p>Define <code>dp[j]</code> as the count of subsets that sum to j. Initialize <code>dp[0] = 1</code> (empty subset sums to 0). For each number, iterate j in reverse and add <code>dp[j - num]</code> to <code>dp[j]</code>.</p>
<p>This is a counting variant of 0/1 Knapsack — additive instead of max.</p>
<p>Time complexity is O(n × target) and space is O(target).</p>
<pre><code>function countSubsets(nums, target) {
  let dp = Array(target + 1).fill(0);
  dp[0] = 1;
  for (let num of nums)
    for (let j = target; j &gt;= num; j--)
      dp[j] += dp[j - num];
  return dp[target];
}</code></pre>
<p><strong>Additive knapsack:</strong> Replace <code>Math.max</code> with <code>+=</code> to count all valid combinations instead of finding the optimal one.</p>
<p>This pattern applies to many counting problems: number of ways to make change, number of ways to tile a board, and various combinatorial DP problems.</p>`
        },
        {
          q: "How do you find the maximum product subarray?",
          a: `<p>Unlike maximum sum subarray, a negative number can flip the sign and make a large negative become a large positive when multiplied by another negative.</p>
<p>Track both the maximum and minimum product ending at the current position. The minimum may become the new maximum if the current element is negative.</p>
<p>Update both simultaneously: <code>maxProd = max(num, maxSoFar * num, minSoFar * num)</code> and similarly for <code>minProd</code>.</p>
<p>This runs in O(n) time and O(1) space.</p>
<pre><code>function maxProduct(nums) {
  let max = nums[0], curMax = nums[0], curMin = nums[0];
  for (let i = 1; i &lt; nums.length; i++) {
    let num = nums[i];
    let tempMax = Math.max(num, curMax * num, curMin * num);
    curMin = Math.min(num, curMax * num, curMin * num);
    curMax = tempMax;
    max = Math.max(max, curMax);
  }
  return max;
}</code></pre>
<p><strong>Track min and max simultaneously:</strong> A negative element swaps the roles of min and max — the previous minimum (most negative) becomes the basis for the new maximum after multiplication.</p>
<p>A zero in the array resets both curMax and curMin to the current element — products straddle zeros cannot be extended from the previous subarray.</p>`
        },
        {
          q: "How do you solve the Buy and Sell Stock with Cooldown problem?",
          a: `<p>After selling a stock, you must wait one day before buying again (cooldown). Find the maximum profit across any number of transactions under this constraint.</p>
<p>Use three states: <code>held</code> (holding stock), <code>sold</code> (just sold, next day is cooldown), <code>rest</code> (resting, not holding, not in cooldown). Define transitions between states.</p>
<p>At each day: <code>held = max(held, rest - price)</code>; <code>sold = held_prev + price</code>; <code>rest = max(rest, sold_prev)</code>.</p>
<p>This runs in O(n) time and O(1) space — only three state variables are needed.</p>
<pre><code>function maxProfit(prices) {
  let held = -Infinity, sold = 0, rest = 0;
  for (let price of prices) {
    let prevHeld = held, prevSold = sold;
    held = Math.max(held, rest - price);
    sold = prevHeld + price;
    rest = Math.max(rest, prevSold);
  }
  return Math.max(sold, rest);
}</code></pre>
<p><strong>State machine DP:</strong> Model the problem as transitions between states (held/sold/rest) rather than a table — O(1) space captures all needed history in three variables.</p>
<p>The final answer is <code>max(sold, rest)</code> because ending in a cooldown (sold) or idle (rest) state both give valid final profits, while ending held is suboptimal.</p>`
        },
        {
          q: "How do you solve the Distinct Subsequences problem?",
          a: `<p>Count the number of distinct ways to form string t as a subsequence of string s. Characters can be skipped in s but must appear in the same relative order.</p>
<p>Define <code>dp[i][j]</code> as the number of ways to form <code>t[0..j-1]</code> from <code>s[0..i-1]</code>. If <code>s[i-1] === t[j-1]</code>, we either use this character (<code>dp[i-1][j-1]</code>) or skip it (<code>dp[i-1][j]</code>). Otherwise, we must skip: <code>dp[i][j] = dp[i-1][j]</code>.</p>
<p>Base case: <code>dp[i][0] = 1</code> for all i — empty t can always be formed (by selecting nothing).</p>
<p>This runs in O(m × n) time and can be reduced to O(n) space using a single row.</p>
<pre><code>function numDistinct(s, t) {
  let m = s.length, n = t.length;
  let dp = Array(n + 1).fill(0); dp[0] = 1;
  for (let i = 1; i &lt;= m; i++)
    for (let j = n; j &gt;= 1; j--)
      if (s[i-1] === t[j-1]) dp[j] += dp[j-1];
  return dp[n];
}</code></pre>
<p><strong>Reverse iteration for 1D DP:</strong> Traversing j backwards prevents reusing the current row's values for the current i, correctly implementing the 2D recurrence.</p>
<p>This problem is a harder variant of the LCS problem — instead of finding the length, you count every distinct matching subsequence.</p>`
        },
        {
          q: "How do you solve the Interleaving String problem?",
          a: `<p>Given strings s1, s2, and s3, check if s3 is formed by interleaving s1 and s2 while maintaining the relative order of characters from each.</p>
<p>Define <code>dp[i][j]</code> as true if <code>s3[0..i+j-1]</code> can be formed by interleaving <code>s1[0..i-1]</code> and <code>s2[0..j-1]</code>.</p>
<p>Transitions: <code>dp[i][j]</code> is true if <code>(dp[i-1][j] &amp;&amp; s1[i-1]===s3[i+j-1])</code> or <code>(dp[i][j-1] &amp;&amp; s2[j-1]===s3[i+j-1])</code>.</p>
<p>If s1.length + s2.length ≠ s3.length, return false immediately.</p>
<pre><code>function isInterleave(s1, s2, s3) {
  let m = s1.length, n = s2.length;
  if (m + n !== s3.length) return false;
  let dp = Array(n + 1).fill(false); dp[0] = true;
  for (let j = 1; j &lt;= n; j++) dp[j] = dp[j-1] &amp;&amp; s2[j-1] === s3[j-1];
  for (let i = 1; i &lt;= m; i++) {
    dp[0] = dp[0] &amp;&amp; s1[i-1] === s3[i-1];
    for (let j = 1; j &lt;= n; j++)
      dp[j] = (dp[j] &amp;&amp; s1[i-1] === s3[i+j-1]) || (dp[j-1] &amp;&amp; s2[j-1] === s3[i+j-1]);
  }
  return dp[n];
}</code></pre>
<p><strong>Two-source DP:</strong> The <code>i+j-1</code> index into s3 is the key insight — at position (i,j), you are checking the character at position i+j in the combined output.</p>
<p>This problem requires O(m × n) state but only O(n) space using the rolling array technique shown above.</p>`
        },
        {
          q: "How do you find the minimum number of palindrome partitions?",
          a: `<p>Partition a string into the fewest pieces so that every piece is a palindrome. This combines palindrome checking with DP for minimum cuts.</p>
<p>Pre-compute a 2D boolean table: <code>isPalin[i][j]</code> is true if <code>s[i..j]</code> is a palindrome. Then use a 1D DP: <code>dp[i]</code> = minimum cuts for <code>s[0..i]</code>.</p>
<p>For each i, if <code>s[0..i]</code> is a palindrome, <code>dp[i] = 0</code>. Otherwise, <code>dp[i] = min(dp[j] + 1)</code> for all j where <code>s[j+1..i]</code> is a palindrome.</p>
<p>This runs in O(n²) time and O(n²) space for the palindrome table.</p>
<pre><code>function minCut(s) {
  let n = s.length;
  let isPalin = Array.from({length: n}, () =&gt; Array(n).fill(false));
  for (let i = n - 1; i &gt;= 0; i--)
    for (let j = i; j &lt; n; j++)
      isPalin[i][j] = s[i] === s[j] &amp;&amp; (j - i &lt;= 2 || isPalin[i+1][j-1]);
  let dp = Array(n).fill(0);
  for (let i = 1; i &lt; n; i++) {
    if (isPalin[0][i]) { dp[i] = 0; continue; }
    dp[i] = i; // max cuts = i
    for (let j = 1; j &lt;= i; j++)
      if (isPalin[j][i]) dp[i] = Math.min(dp[i], dp[j-1] + 1);
  }
  return dp[n-1];
}</code></pre>
<p><strong>Pre-compute palindrome table:</strong> Building the O(n²) palindrome table upfront makes each cut decision O(1) lookup, overall reducing what would be O(n³) to O(n²).</p>
<p>The number of cuts is one less than the number of parts — the answer is <code>dp[n-1]</code> which counts cuts, not the number of palindrome pieces.</p>`
        },
        {
          q: "How do you find the number of ways to decode a string (advanced)?",
          a: `<p>A digit string can be decoded into letters: '1' → 'A', ..., '26' → 'Z'. Count all possible decodings. Leading zeros and '00' configurations are invalid.</p>
<p>Use 1D DP: <code>dp[i]</code> = number of ways to decode the first i characters. At each position, check if the single digit (i-1) is valid (1-9) and if the two-digit number (i-2 to i-1) is valid (10-26).</p>
<p>Leading zeros (like '06') are invalid — only '10' and '20' are valid two-digit decodings that start with a digit followed by 0.</p>
<p>This runs in O(n) time and O(n) space, reducible to O(1) with two variables.</p>
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
}</code></pre>
<p><strong>Validate both single and double digit:</strong> A single digit of '0' contributes 0 ways (invalid alone); a two-digit value must be 10-26 to be valid — '27' through '99' only decode as two separate digits.</p>
<p>Use O(1) space optimization: only <code>dp[i-1]</code> and <code>dp[i-2]</code> are needed, so replace the array with two variables updated each iteration.</p>`
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
          a: `<p>You can buy once and sell once. To maximize profit, buy at the lowest price and sell at the highest price that comes after the buy date.</p>
<p>Traverse the prices once, tracking the minimum price seen so far. At each step, compute the potential profit if selling today and update the global maximum profit.</p>
<p>Updating the minimum and maximum in a single pass avoids nested loops, reducing brute force O(n\u00b2) to O(n).</p>
<p>This runs in O(n) time and O(1) space.</p>
<pre><code>function maxProfit(prices) {
  let min = Infinity, profit = 0;
  for (let p of prices) {
    min = Math.min(min, p);
    profit = Math.max(profit, p - min);
  }
  return profit;
}</code></pre>
<p><strong>Single-pass min tracking:</strong> You never need to look backward — the minimum price so far combined with today's price gives the best possible profit for any sell date up to today.</p>
<p>For multiple transactions (unlimited buys/sells), greedy works: add up all positive differences between consecutive days. For at most k transactions, use DP with state <code>dp[k][day]</code>.</p>`
        },
        {
          q: "Container with most water.",
          a: `<p>Given vertical lines at positions 0..n-1 with given heights, find two lines that form a container holding the most water. Water height = min(left, right); width = distance between the two lines.</p>
<p>Use two pointers starting at the leftmost and rightmost positions. Calculate area = min(height[l], height[r]) * (r - l). Move the pointer with the shorter height inward.</p>
<p>Moving the shorter line gives the only chance of finding a higher container — moving the taller line can only decrease or maintain the width with the same or lower height.</p>
<p>This runs in O(n) time and O(1) space.</p>
<pre><code>function maxArea(height) {
  let l = 0, r = height.length - 1, max = 0;
  while (l &lt; r) {
    max = Math.max(max, Math.min(height[l], height[r]) * (r - l));
    height[l] &lt; height[r] ? l++ : r--;
  }
  return max;
}</code></pre>
<p><strong>Move shorter pointer:</strong> The area is always limited by the shorter line. Moving it inward is the only way to possibly find a line tall enough to increase the area despite decreasing width.</p>
<p>This two-pointer pattern applies whenever you are optimizing a function over pairs (i, j) where i and j can narrow inward based on a comparison result.</p>`
        },
        {
          q: "Trapping rain water.",
          a: `<p>Rain water trapped at each position equals the shorter of the maximum heights to its left and right, minus the current bar's height.</p>
<p>The optimal two-pointer approach maintains <code>lMax</code> (max height seen from the left) and <code>rMax</code> (max height from the right). Process the side with the lower max first since that side's water is determined.</p>
<p>If <code>height[l] &lt;= height[r]</code>, the left side is the limiting factor; water at l is guaranteed to be <code>lMax - height[l]</code> if <code>height[l] &lt; lMax</code>.</p>
<p>This runs in O(n) time and O(1) space — unlike the O(n) space precomputed left/right max arrays approach.</p>
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
}</code></pre>
<p><strong>Process lower side first:</strong> Processing the side with the smaller max guarantees we know the exact maximum boundary on that side — the other side is always at least as tall.</p>
<p>The O(n) space solution precomputes <code>leftMax[i]</code> and <code>rightMax[i]</code> arrays, which is easier to understand and verify, though less space-efficient.</p>`
        },
        {
          q: "Can you reach the last index in the Jump Game?",
          a: `<p>Each element specifies the maximum number of positions you can jump forward from that index. Determine if you can reach the last index from the first.</p>
<p>Track the farthest position reachable at any point. If you ever reach a position beyond the farthest reachable (i.e., a "dead zone"), return false immediately.</p>
<p>If you can always reach or pass position i, the farthest updates to include positions reachable from i: <code>farthest = max(farthest, i + nums[i])</code>.</p>
<p>This runs in O(n) time and O(1) space.</p>
<pre><code>function canJump(nums) {
  let farthest = 0;
  for (let i = 0; i &lt; nums.length; i++) {
    if (i &gt; farthest) return false;
    farthest = Math.max(farthest, i + nums[i]);
  }
  return true;
}</code></pre>
<p><strong>Farthest reachable tracking:</strong> A single variable <code>farthest</code> replaces the need for a visited array — if i &gt; farthest, the position is unreachable regardless of previous jumps.</p>
<p>Jump Game II extends this to count minimum jumps — use a greedy BFS where each "level" represents one jump and extend the level boundary when you cross the current end.</p>`
        },
        {
          q: "Can you complete the circuit in the Gas Station problem?",
          a: `<p>At each gas station you gain gas[i] and spend cost[i] to reach the next station. Find the starting station that allows completing the full circle, or return -1.</p>
<p>If total gas &lt; total cost across all stations, the trip is impossible regardless of the starting point. Otherwise, a unique valid start exists.</p>
<p>Track running tank surplus. Whenever it goes negative, all starting points from the current "start" through the current station are invalid — reset start to i+1.</p>
<p>This runs in O(n) time and O(1) space with a single pass.</p>
<pre><code>function canCompleteCircuit(gas, cost) {
  let total = 0, tank = 0, start = 0;
  for (let i = 0; i &lt; gas.length; i++) {
    let diff = gas[i] - cost[i];
    total += diff; tank += diff;
    if (tank &lt; 0) { start = i + 1; tank = 0; }
  }
  return total &gt;= 0 ? start : -1;
}</code></pre>
<p><strong>Greedy start reset:</strong> A negative tank means no starting point within the current segment can work — the segment deficit must be overcome by a later segment, so start moves forward.</p>
<p>The total gas check is the key insight: if you can accumulate a non-negative total surplus, the greedily-found start is guaranteed to be a valid solution.</p>`
        },
        {
          q: "Explain the Meeting Rooms concept (can a person attend all meetings).",
          a: `<p>Given meeting intervals, determine if one person can attend all of them without any overlap. If any two meetings overlap in time, it is impossible.</p>
<p>Sort intervals by start time. Check if any meeting starts before the previous one ends: if <code>intervals[i][0] &lt; intervals[i-1][1]</code>, there is a conflict.</p>
<p>For the variant "minimum meeting rooms needed", use a min-heap of end times: if the next meeting starts before the earliest-ending meeting, it needs a new room. Otherwise, reuse the room of the earliest-ending meeting.</p>
<p>Attendance check runs in O(n log n) for sorting; room count runs in O(n log n) with a heap.</p>
<pre><code>function canAttendAll(intervals) {
  intervals.sort((a, b) =&gt; a[0] - b[0]);
  for (let i = 1; i &lt; intervals.length; i++)
    if (intervals[i][0] &lt; intervals[i-1][1]) return false;
  return true;
}</code></pre>
<p><strong>Sort and single scan:</strong> Sorting by start time makes overlaps immediately detectable — if the next start is before the previous end, a conflict exists.</p>
<p>The min-heap "rooms needed" variant is a classic interview problem: extract the min end time, and if the new meeting starts before it, no room is free — add a room and push both times.</p>`
        },
        {
          q: "Merge overlapping intervals.",
          a: `<p>Given a list of intervals, merge all overlapping or adjacent intervals and return a list of non-overlapping intervals covering the same range.</p>
<p>Sort intervals by start time. Maintain a result list. If the current interval's start &lt;= the last added interval's end, they overlap — extend the last interval's end to the maximum of both ends.</p>
<p>If they do not overlap, append the current interval as a new non-overlapping entry.</p>
<p>This runs in O(n log n) for sorting and O(n) for the merge scan.</p>
<pre><code>function merge(intervals) {
  intervals.sort((a, b) =&gt; a[0] - b[0]);
  let res = [intervals[0]];
  for (let i = 1; i &lt; intervals.length; i++) {
    let last = res[res.length - 1];
    if (intervals[i][0] &lt;= last[1]) last[1] = Math.max(last[1], intervals[i][1]);
    else res.push(intervals[i]);
  }
  return res;
}</code></pre>
<p><strong>Sort then scan:</strong> After sorting, only the immediately previous interval needs to be compared — a non-sorted list would require O(n\u00b2) comparisons to detect all overlaps.</p>
<p>Use <code>Math.max(last[1], current[1])</code> for the end — not just <code>current[1]</code>, since a smaller interval may be completely contained within the previous one.</p>`
        },
        {
          q: "Explain the Task Scheduler concept.",
          a: `<p>Given tasks with a cooldown period n between identical tasks, find the minimum total time (CPU intervals) to complete all tasks in any order.</p>
<p>The bottleneck is the most frequent task. If it appears maxF times, you need at least (maxF - 1) * (n + 1) slots. Other tasks fill the idle slots. The answer is max of this frame and the total task count.</p>
<p>Sort tasks by frequency. The top count determines the number of "frames". Each frame has n+1 slots. Remaining idle slots after filling with other tasks add to the total.</p>
<p>This runs in O(n) time where n is the number of tasks (after sorting the 26 frequency buckets in O(1)).</p>
<pre><code>function leastInterval(tasks, n) {
  let freq = Array(26).fill(0);
  for (let t of tasks) freq[t.charCodeAt(0) - 65]++;
  freq.sort((a, b) =&gt; b - a);
  let maxF = freq[0] - 1, idle = maxF * n;
  for (let i = 1; i &lt; 26 &amp;&amp; freq[i] &gt; 0; i++)
    idle -= Math.min(maxF, freq[i]);
  return Math.max(tasks.length, tasks.length + idle);
}</code></pre>
<p><strong>Idle slot calculation:</strong> Start with maxF * n idle slots and subtract tasks that can fill them. Remaining idle slots add to total time since the CPU must wait during them.</p>
<p>If idle becomes negative after filling with other tasks, no idle time is needed — <code>Math.max(tasks.length, tasks.length + idle)</code> correctly returns just the task count in that case.</p>`
        },
        {
          q: "Find the maximum in each sliding window of size k.",
          a: `<p>The sliding window maximum requires finding the maximum in each contiguous subarray of size k. The brute force O(nk) approach is too slow for large inputs.</p>
<p>Use a deque (double-ended queue) of indices. Maintain the deque as monotonically decreasing by values. Remove indices outside the current window from the front. Remove smaller values from the back when adding a new element.</p>
<p>The front of the deque is always the index of the maximum in the current window.</p>
<p>This runs in O(n) time since each index is added and removed from the deque at most once.</p>
<pre><code>function maxSlidingWindow(nums, k) {
  let deque = [], res = [];
  for (let i = 0; i &lt; nums.length; i++) {
    while (deque.length &amp;&amp; deque[0] &lt; i - k + 1) deque.shift();
    while (deque.length &amp;&amp; nums[deque[deque.length-1]] &lt; nums[i]) deque.pop();
    deque.push(i);
    if (i &gt;= k - 1) res.push(nums[deque[0]]);
  }
  return res;
}</code></pre>
<p><strong>Monotonic deque:</strong> Keeping values in decreasing order from front to back ensures the front is always the maximum. Smaller values behind the new element will never be the maximum while the new element is in the window.</p>
<p>Start collecting results only when i &gt;= k-1 (first complete window). Earlier indices are "warming up" the deque with partially filled windows.</p>`
        },
        {
          q: "Find the minimum in a rotated sorted array.",
          a: `<p>A rotated sorted array was originally sorted but then shifted at some pivot — for example [4,5,6,7,0,1,2] was originally [0,1,2,4,5,6,7].</p>
<p>Use binary search. Compare mid with the right boundary: if mid &gt; right, the minimum is in the right half. Otherwise, it is in the left half (including mid).</p>
<p>This works because at least one half of the array is always normally sorted, and the minimum is always in the unsorted portion.</p>
<p>This runs in O(log n) time — far better than the O(n) linear scan.</p>
<pre><code>function findMin(nums) {
  let lo = 0, hi = nums.length - 1;
  while (lo &lt; hi) {
    let mid = Math.floor((lo + hi) / 2);
    nums[mid] &gt; nums[hi] ? lo = mid + 1 : hi = mid;
  }
  return nums[lo];
}</code></pre>
<p><strong>Compare to right boundary:</strong> Using nums[mid] vs nums[hi] (not nums[lo]) avoids the ambiguity when lo = mid — always reduces the search space by at least one element.</p>
<p>For the variant "find a target in a rotated sorted array", first determine which half is sorted, then check if the target falls in that sorted half to decide which side to search.</p>`
        },
        {
          q: "How do you find the minimum number of arrows to burst balloons?",
          a: `<p>Balloons are represented as intervals [left, right]. An arrow at position x bursts all balloons where left ≤ x ≤ right. Find the minimum arrows needed to burst all balloons.</p>
<p>Sort by end coordinate. Fire the first arrow at the end of the first balloon. Skip all subsequent balloons whose start ≤ current arrow position. When a balloon starts after the arrow, fire a new arrow at that balloon's end.</p>
<p>This greedy approach fires as late as possible to maximize the number of balloons each arrow can pierce.</p>
<p>This runs in O(n log n) for sorting and O(n) for the scan.</p>
<pre><code>function findMinArrowShots(points) {
  if (!points.length) return 0;
  points.sort((a, b) =&gt; a[1] - b[1]);
  let arrows = 1, end = points[0][1];
  for (let i = 1; i &lt; points.length; i++) {
    if (points[i][0] &gt; end) { arrows++; end = points[i][1]; }
  }
  return arrows;
}</code></pre>
<p><strong>Sort by end, fire at end:</strong> Sorting by end coordinate groups overlapping balloons optimally — the greedy choice of firing at the earliest end maximizes overlap with future balloons.</p>
<p>This is equivalent to the "minimum number of intervals to cover all intervals" problem — a classic interval scheduling greedy pattern.</p>`
        },
        {
          q: "How do you find the minimum number of non-overlapping intervals to remove?",
          a: `<p>Given a set of intervals, find the minimum number to remove so that the remaining intervals do not overlap. Equivalently, maximize the number of non-overlapping intervals you can keep.</p>
<p>Sort intervals by end time. Greedily keep intervals that end earliest (they leave maximum room for future intervals). Count how many intervals you skip — those are the removed ones.</p>
<p>This is identical to the Activity Selection Problem, a foundational greedy algorithm.</p>
<p>This runs in O(n log n) for sorting and O(n) for the greedy scan.</p>
<pre><code>function eraseOverlapIntervals(intervals) {
  if (!intervals.length) return 0;
  intervals.sort((a, b) =&gt; a[1] - b[1]);
  let count = 0, end = intervals[0][1];
  for (let i = 1; i &lt; intervals.length; i++) {
    if (intervals[i][0] &lt; end) count++;
    else end = intervals[i][1];
  }
  return count;
}</code></pre>
<p><strong>Sort by end, keep earliest finish:</strong> The activity selection greedy works because choosing the interval that ends earliest maximizes the remaining timeline for subsequent intervals.</p>
<p>The minimum removals equals total intervals minus the maximum non-overlapping count — you can also compute the latter directly and subtract from n.</p>`
        },
        {
          q: "How do you solve the Jump Game II (minimum jumps) problem?",
          a: `<p>Each element in the array specifies the maximum jump distance from that position. Find the minimum number of jumps to reach the last index.</p>
<p>Use a greedy BFS-like approach. Track the current boundary (farthest reach of the current jump) and the next boundary (farthest reachable from anywhere within the current jump). When you reach the current boundary, increment jumps and update it to the next boundary.</p>
<p>This is equivalent to level-order BFS where each "level" represents one jump reach.</p>
<p>This runs in O(n) time and O(1) space.</p>
<pre><code>function jump(nums) {
  let jumps = 0, currEnd = 0, farthest = 0;
  for (let i = 0; i &lt; nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (i === currEnd) { jumps++; currEnd = farthest; }
  }
  return jumps;
}</code></pre>
<p><strong>Greedy level expansion:</strong> Each time you reach the current jump boundary, you must make another jump — the best choice is to jump to the farthest recorded position.</p>
<p>The loop ends at <code>nums.length - 1</code>, not nums.length, to avoid incrementing jumps unnecessarily after already reaching the last index.</p>`
        },
        {
          q: "How do you solve the Distribute Candy problem (greedy)?",
          a: `<p>Each child must get at least one candy. Children with a higher rating than their neighbor must get more candies than that neighbor. Find the minimum total candies needed.</p>
<p>Use two passes on the ratings array. Forward pass: give more candy than the left neighbor whenever the rating is higher. Backward pass: ensure right-to-left constraint is satisfied by taking the max of current candy and right+1.</p>
<p>Two passes are necessary because satisfying the left constraint can violate the right constraint and vice versa.</p>
<p>This runs in O(n) time and O(n) space for the candy array.</p>
<pre><code>function candy(ratings) {
  let n = ratings.length, candies = Array(n).fill(1);
  for (let i = 1; i &lt; n; i++)
    if (ratings[i] &gt; ratings[i-1]) candies[i] = candies[i-1] + 1;
  for (let i = n - 2; i &gt;= 0; i--)
    if (ratings[i] &gt; ratings[i+1]) candies[i] = Math.max(candies[i], candies[i+1] + 1);
  return candies.reduce((a, b) =&gt; a + b, 0);
}</code></pre>
<p><strong>Two-pass approach:</strong> The forward pass fixes left constraints and the backward pass fixes right constraints — taking max in the backward pass preserves already-satisfied left constraints.</p>
<p>A one-pass O(1) space solution exists using peak/valley analysis, but the two-pass approach is clearer and easier to implement correctly in interviews.</p>`
        },
        {
          q: "How do you solve the Partition Labels problem?",
          a: `<p>Given a string, partition it into as many parts as possible so that each letter appears in at most one part. Find the sizes of all such partitions.</p>
<p>Use a greedy approach: record the last occurrence of each character. For the current partition, track the farthest last occurrence of any character seen so far. When the current index reaches this farthest point, the partition ends there.</p>
<p>This ensures letters that appear later force the current partition to extend — a greedy max-reach strategy.</p>
<p>This runs in O(n) time and O(1) space (the last-occurrence map is always at most 26 entries).</p>
<pre><code>function partitionLabels(s) {
  let last = {};
  for (let i = 0; i &lt; s.length; i++) last[s[i]] = i;
  let result = [], start = 0, end = 0;
  for (let i = 0; i &lt; s.length; i++) {
    end = Math.max(end, last[s[i]]);
    if (i === end) { result.push(end - start + 1); start = i + 1; }
  }
  return result;
}</code></pre>
<p><strong>Last occurrence boundary:</strong> As you scan, extending <code>end</code> to the farthest last-occurrence of any character guarantees no character in the current partition appears in a later one.</p>
<p>This is a single-scan greedy algorithm — no sorting needed, just two O(n) passes: one to build the last-occurrence map and one to determine partition boundaries.</p>`
        },
        {
          q: "How do you solve the Car Fleet problem?",
          a: `<p>Cars are driving toward a destination. Each car has a position and speed. Cars merge into a fleet when a faster car catches up to a slower one. Find the number of fleets that arrive.</p>
<p>Cars driving to the same destination are best analyzed in reverse order of position (closest to destination first). Calculate the time each car would take to arrive. A car merges into the fleet ahead if it arrives earlier than or at the same time.</p>
<p>Use a stack (or count variable). If the current car takes more time than the top of the stack, it forms a new fleet.</p>
<p>This runs in O(n log n) for sorting and O(n) for the stack scan.</p>
<pre><code>function carFleet(target, position, speed) {
  let n = position.length;
  let cars = position.map((p, i) =&gt; [p, speed[i]]);
  cars.sort((a, b) =&gt; b[0] - a[0]);
  let stack = [], fleets = 0;
  for (let [pos, spd] of cars) {
    let time = (target - pos) / spd;
    if (!stack.length || time &gt; stack[stack.length-1]) { stack.push(time); fleets++; }
  }
  return fleets;
}</code></pre>
<p><strong>Sort by position descending:</strong> Processing cars closest to the destination first determines which cars can catch up before reaching it vs which form their own fleet.</p>
<p>A car forms a new fleet only if its arrival time is strictly greater than the leading car's time — equal or less means it catches up and merges.</p>`
        },
        {
          q: "How do you solve the Gas Station problem?",
          a: `<p>Given gas stations in a circle, each with available gas and associated cost, find the starting station (if one exists) that allows completing the full circle.</p>
<p>If the total gas is less than the total cost, no solution exists. Otherwise, a solution is guaranteed. Use a greedy approach: traverse stations tracking running surplus. When the surplus goes negative, the starting point must be after the current station.</p>
<p>The running surplus going negative means no starting point from the current segment works.</p>
<p>This runs in O(n) time and O(1) space.</p>
<pre><code>function canCompleteCircuit(gas, cost) {
  let total = 0, tank = 0, start = 0;
  for (let i = 0; i &lt; gas.length; i++) {
    let diff = gas[i] - cost[i];
    total += diff; tank += diff;
    if (tank &lt; 0) { start = i + 1; tank = 0; }
  }
  return total &gt;= 0 ? start : -1;
}</code></pre>
<p><strong>Greedy start reset:</strong> When the tank goes negative, all starting points from the initial start to the current station are invalid — the next valid candidate must be i+1.</p>
<p>The total gas check guarantees that if total ≥ 0, the greedy start found is the unique valid answer — there is always exactly one or zero solutions.</p>`
        },
        {
          q: "How do you find the score of a matrix after row/column flips?",
          a: `<p>To maximize the sum after flipping rows and columns, treat each row as a binary number and maximize the total binary value. This is a greedy problem — each decision is locally optimal.</p>
<p>First, flip any row whose first bit is 0 (making the most significant bit 1 maximizes value). Then for each column, flip it if more than half the values are 0 (maximizing the column's contribution).</p>
<p>Row flips take priority because the most significant bit contributes more than all other bits combined.</p>
<p>This runs in O(m × n) time and O(1) extra space.</p>
<pre><code>function matrixScore(grid) {
  let m = grid.length, n = grid[0].length;
  for (let i = 0; i &lt; m; i++)
    if (grid[i][0] === 0) for (let j = 0; j &lt; n; j++) grid[i][j] ^= 1;
  let score = 0;
  for (let j = 0; j &lt; n; j++) {
    let ones = grid.reduce((sum, row) =&gt; sum + row[j], 0);
    score += Math.max(ones, m - ones) * (1 &lt;&lt; (n - 1 - j));
  }
  return score;
}</code></pre>
<p><strong>Greedily maximize each column:</strong> After fixing row-0 to all 1s, decide per column whether more 1s or 0s contribute more value — single-column flips are independent decisions.</p>
<p>The value of column j is <code>2^(n-1-j)</code>; multiplying by <code>max(ones, m-ones)</code> gives the maximum column contribution regardless of whether you flip it.</p>`
        },
        {
          q: "How do you find the minimum number of platforms needed for a railway station?",
          a: `<p>Given arrival and departure times of trains, find the minimum number of platforms required so no train has to wait. This is an interval scheduling resource problem.</p>
<p>Sort arrivals and departures separately. Use two pointers. When the next arrival is before the next departure, a new platform is needed. When an arrival is after a departure, a platform is freed.</p>
<p>Track the current platforms in use and update the maximum seen at any point.</p>
<p>This runs in O(n log n) for sorting and O(n) for the two-pointer scan.</p>
<pre><code>function findPlatforms(arrivals, departures) {
  arrivals.sort((a, b) =&gt; a - b);
  departures.sort((a, b) =&gt; a - b);
  let platforms = 0, maxPlatforms = 0, i = 0, j = 0;
  while (i &lt; arrivals.length) {
    if (arrivals[i] &lt;= departures[j]) { platforms++; i++; }
    else { platforms--; j++; }
    maxPlatforms = Math.max(maxPlatforms, platforms);
  }
  return maxPlatforms;
}</code></pre>
<p><strong>Merge-sorted two-pointer:</strong> Sorting arrivals and departures independently and processing them together in time order simulates events as they happen at the station.</p>
<p>This problem is equivalent to "maximum number of overlapping intervals at any point in time" — a classic interval problem with real-world scheduling applications.</p>`
        },
        {
          q: "How do you count the minimum steps to reach end of array?",
          a: `<p>In the Jump Game variant (minimum jumps), you need the minimum number of jumps to reach the last position. The greedy BFS approach works in O(n) without DP.</p>
<p>Think of positions reachable from position i as the "frontier" of jump j. Extend the frontier greedily to the maximum reachable position. Each frontier extension counts as one more jump.</p>
<p>The key invariant: when you cross the current jump boundary, you must commit to a jump and the new boundary is the farthest position you have found.</p>
<p>This runs in O(n) time and O(1) space.</p>
<pre><code>function minJumps(nums) {
  let jumps = 0, currEnd = 0, farthest = 0;
  for (let i = 0; i &lt; nums.length - 1; i++) {
    farthest = Math.max(farthest, i + nums[i]);
    if (farthest &gt;= nums.length - 1) return jumps + 1;
    if (i === currEnd) { jumps++; currEnd = farthest; }
  }
  return jumps;
}</code></pre>
<p><strong>Early termination:</strong> If the farthest reachable position already covers the last index, return immediately without processing remaining positions.</p>
<p>If <code>currEnd</code> is never updated beyond a certain point, it means the last index is unreachable — handle this by checking if jumps stay 0 with nums.length &gt; 1 as a reachability guard.</p>`
        },
        {
          q: "How do you solve the Assign Cookies problem?",
          a: `<p>Each child has a greed factor (minimum cookie size they need to be content). Each cookie has a size. Find the maximum number of children you can content using the available cookies.</p>
<p>Sort both arrays. Use two pointers. Try to assign the smallest available cookie that satisfies the greediest unsatisfied child — assigning a larger cookie than necessary would waste it.</p>
<p>Actually, greedily assign the smallest sufficient cookie to the child with the smallest greed factor — sort both and match from smallest to smallest.</p>
<p>This runs in O(n log n + m log m) for sorting and O(n + m) for the two-pointer scan.</p>
<pre><code>function findContentChildren(greed, cookies) {
  greed.sort((a, b) =&gt; a - b);
  cookies.sort((a, b) =&gt; a - b);
  let child = 0, cookie = 0;
  while (child &lt; greed.length &amp;&amp; cookie &lt; cookies.length) {
    if (cookies[cookie] &gt;= greed[child]) child++;
    cookie++;
  }
  return child;
}</code></pre>
<p><strong>Two-pointer on sorted arrays:</strong> Matching smallest greed to smallest sufficient cookie is optimal — a smaller cookie can satisfy a less greedy child, leaving larger cookies for greedier children.</p>
<p>This is a canonical greedy matching problem: whenever the greedy choice (smallest sufficient) is locally optimal in sorted order, the globally optimal solution is achieved.</p>`
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
          a: `<p>You have 25 horses and can race exactly 5 at a time. You have no timer and only know the relative order within each race. Find the top 3 fastest horses using the fewest total races.</p>
<p>Phase 1 (5 races): race all 25 in 5 groups of 5. The slowest 3 from each group are eliminated — leaving 5 group winners.</p>
<p>Phase 2 (1 race): race the 5 group winners. The last two are eliminated along with their groups. The winner is #1 overall.</p>
<p>Phase 3 (1 race): race 5 remaining candidates — 2nd and 3rd from the champion's group, 1st and 2nd from the runner-up's group, and 1st from the 3rd-place group. The top two are 2nd and 3rd overall. Total: <strong>7 races</strong>.</p>
<pre><code>// Phase 1 (5 races): eliminate bottom 3 from each group
// Phase 2 (race 6): race group winners, determine 1st, eliminate 2 groups
// Phase 3 (race 7): race 5 remaining candidates for 2nd and 3rd place
// Total: 7 races minimum</code></pre>
<p><strong>7 is optimal:</strong> After race 6, only 5 candidates remain viable for 2nd and 3rd — you need one more race to compare them. Fewer than 7 races cannot resolve all 3 positions.</p>
<p>The elimination logic relies on transitivity: if A beats B and B beats C, A cannot be 2nd or 3rd only if something even faster exists — phase 3 resolves all remaining ambiguities.</p>`
        },
        {
          q: "8 balls, one heavier: find it in minimum weighings.",
          a: `<p>You have 8 identical-looking balls and a balance scale. One ball is slightly heavier than the rest. Find it using the fewest weighings.</p>
<p>Divide into three groups: 3, 3, and 2 balls. Weigh the two groups of 3 against each other.</p>
<p>If balanced: the heavy ball is in the pair of 2. Weigh one against the other — the heavier one is it. Total: 2 weighings.</p>
<p>If unbalanced: take the 3 balls from the heavier side. Weigh 2 of those 3. If balanced, the unweighed one is heavy; if not, the heavier side is. Total: still 2 weighings.</p>
<pre><code>// Step 1: Weigh group A (3) vs group B (3)
// Balanced: heavy is in group C (2), weigh them
// Unbalanced: take heavier group (3), weigh 2 of them</code></pre>
<p><strong>Ternary decision tree:</strong> Each balance weighing has 3 outcomes (left heavy, right heavy, balanced). Two weighings give 3² = 9 outcomes — sufficient to identify 1 of 8 balls.</p>
<p>For n balls, minimum weighings = ceil(log3(n)). With 27 balls, 3 weighings suffice; with 3 balls, just 1 weighing identifies the heavy one.</p>`
        },
        {
          q: "100 doors: all closed, toggle every i-th door for i=1..100. Which remain open?",
          a: `<p>100 doors are initially closed. In pass i (for i = 1 to 100), you toggle every ith door. After all 100 passes, which doors are open?</p>
<p>Door n is toggled exactly once for each divisor of n. A door ends up open if it was toggled an odd number of times — meaning n must have an odd number of divisors.</p>
<p>Most integers have divisors in pairs (d and n/d). Only perfect squares break this: their square root is its own pair, resulting in an odd divisor count.</p>
<p>Perfect squares up to 100: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 — exactly <strong>10 doors</strong> remain open.</p>
<pre><code>// Open doors = perfect squares <= 100
// 1, 4, 9, 16, 25, 36, 49, 64, 81, 100 (count: 10)
// Door n is open iff n has an odd number of divisors
// n has odd divisors iff n is a perfect square</code></pre>
<p><strong>Divisors pair up:</strong> For non-square n, each divisor d has a distinct partner n/d — the two toggles cancel. For perfect squares, sqrt(n) is unpaired, leaving an odd count.</p>
<p>This puzzle illustrates that mathematical structure (perfect squares) can emerge from an apparently mechanical process — a useful example for teaching number theory.</p>`
        },
        {
          q: "Explain the Prisoner Hat Puzzle (black and white hats in a line).",
          a: `<p>100 prisoners stand in a line, each wearing a randomly assigned black or white hat. Each prisoner can see all hats in front but not their own. Starting from the back, each must guess their own hat color aloud. Maximize correct guesses.</p>
<p>The last prisoner (who sees all 99 hats in front) announces a color encoding parity: say black if they see an odd count of black hats, white if even.</p>
<p>Each subsequent prisoner tracks the parity from what they heard and what they see, and deduces their own hat color by comparing expected vs actual parity.</p>
<p>This guarantees <strong>99 correct guesses</strong> with certainty. The last prisoner has a 50/50 chance since they encode information rather than guess their actual hat.</p>
<pre><code>// Last person: say black if odd black seen, white if even (parity signal)
// Person k: count black hats ahead + adjust for heard guesses
// If parity matches expected: hat is white; else: hat is black
// Result: 99 certain + 1 random = minimum 99 correct</code></pre>
<p><strong>Parity encoding:</strong> The last prisoner transmits one bit of global information (parity) for free, enabling all 99 others to determine their hat color with certainty.</p>
<p>For k colors, use mod k arithmetic: the last prisoner announces a value such that (sum of all hat values) mod k equals 0, and each person deduces their hat by subtraction.</p>`
        },
        {
          q: "Solve the River Crossing puzzle (farmer, fox, chicken, grain).",
          a: `<p>A farmer must cross a river with a fox, a chicken, and a bag of grain. The boat holds only the farmer plus one item. Left alone: fox eats chicken; chicken eats grain.</p>
<p>The chicken is the constrained item — it cannot be left with either the fox or the grain. The non-obvious solution requires the farmer to bring the chicken back midway.</p>
<p>Steps: 1) Take chicken across. 2) Return alone. 3) Take fox across. 4) Bring chicken back. 5) Take grain across. 6) Return alone. 7) Take chicken across.</p>
<p>A symmetric alternative: take grain instead of fox in step 3 (then bring grain back and take fox in a different order). Both solutions use 7 crossings.</p>
<pre><code>// Trip 1: Farmer + Chicken -> other side
// Trip 2: Farmer <- alone
// Trip 3: Farmer + Fox -> other side
// Trip 4: Farmer + Chicken <- return  (key insight!)
// Trip 5: Farmer + Grain -> other side
// Trip 6: Farmer <- alone
// Trip 7: Farmer + Chicken -> other side</code></pre>
<p><strong>Bring chicken back:</strong> Trip 4 is the counterintuitive step — bringing the chicken back prevents any unsafe pairing while transporting fox and grain separately.</p>
<p>State-space search (BFS over all configurations) can solve all such puzzles algorithmically, handling any number of objects with arbitrary conflict constraints.</p>`
        },
        {
          q: "Gold bar, 7 days: pay a worker daily with exactly 2 cuts.",
          a: `<p>You have a 7-unit gold bar and a worker who must be paid 1 unit per day for 7 days. You can make exactly 2 cuts. How do you pay exactly each day?</p>
<p>Cut the bar into pieces of 1, 2, and 4 units (powers of 2). These three pieces can represent any integer from 1 to 7 via binary exchange.</p>
<p>Day 1: give 1. Day 2: give 2, take back 1. Day 3: give 1+2. Day 4: give 4, take back 1+2. Day 5: give 4+1. Day 6: give 4+2, take back 1. Day 7: give 4+2+1.</p>
<p>This uses the same logic as binary representation: 1+2+4 = 7 and any value 1-7 is representable.</p>
<pre><code>// Pieces: 1, 2, 4 units (two cuts)
// Day 1: give 1        | give:1
// Day 2: give 2, get 1 | give:2
// Day 3: give 1        | hold:1+2
// Day 4: give 4, get 2+1 | give:4
// Day 5: give 1        | hold:4+1
// Day 6: give 2, get 1 | hold:4+2
// Day 7: give 1        | total paid: 7</code></pre>
<p><strong>Binary powers strategy:</strong> Cutting at 1, 2, 4 is the only way to cover all 7 values with 2 cuts — these are the minimum cuts needed for binary representation of numbers 1 through 7.</p>
<p>For n days with k cuts, the optimal pieces are 1, 2, 4, ..., 2^(k-1), and the remainder. This greedy doubling covers up to 2^(k+1) - 1 total days.</p>`
        },
        {
          q: "Two ropes that each take 1 hour to burn (non-uniform): measure 45 minutes.",
          a: `<p>You have two ropes, each of which takes exactly 60 minutes to burn completely. However, burning is non-uniform — you cannot simply fold or measure to get 30 minutes. How do you measure exactly 45 minutes?</p>
<p>Light rope 1 from BOTH ends simultaneously, and light rope 2 from ONE end only. Since rope 1 burns from two ends, it finishes in exactly 30 minutes.</p>
<p>When rope 1 is fully burnt (at 30 min mark), light the OTHER end of rope 2. Rope 2 has 30 minutes of burn left, and lighting both ends halves that to 15 minutes.</p>
<p>Total elapsed time: 30 + 15 = <strong>45 minutes</strong>. No physical measurement is needed — just simultaneous lighting events.</p>
<pre><code>// Timeline:
// t=0:    Light rope1 (both ends), rope2 (one end)
// t=30:   Rope1 done. Light rope2 second end.
// t=45:   Rope2 done. Total = 45 minutes.

// Key insight:
// Burning from both ends halves the remaining burn time,
// regardless of non-uniformity.</code></pre>
<p><strong>Core insight:</strong> Lighting a rope from both ends halves whatever burn time remains, so you can create 15-min intervals by splitting 30 minutes.</p>
<p>This puzzle generalizes: with n ropes you can measure any multiple of (60 / 2^n) minutes — each additional rope gives you one more halving step.</p>`
        },
        {
          q: "Explain the Blue Eyes Island puzzle.",
          a: `<p>On an island, N people have blue eyes (and others have non-blue eyes). Everyone can see everyone else's eye color but not their own. No one discusses eye color. A visitor publicly announces: at least one person on this island has blue eyes.</p>
<p>The rule: if anyone ever deduces their own eye color at night, they must leave the island the next morning. Base case — if N=1, that person sees no other blue-eyed people, so they know they must be the one, and leaves on night 1.</p>
<p>For N=2: each person sees 1 blue-eyed person. Night 1, neither leaves (each thinks the other might be the only one). But when neither leaves after night 1, each deduces: the other person saw a blue-eyed person too, so I must also have blue eyes. Both leave on night 2.</p>
<p>By induction: all N blue-eyed people leave on night N. The visitor's statement adds <strong>common knowledge</strong> — everyone now knows that everyone knows that at least one has blue eyes.</p>
<pre><code>// Inductive logic:
// Base: N=1 → leaves night 1
// Inductive step: if N=k all leave on night k,
//   then for N=k+1:
//     each person sees k blue-eyed others and waits k nights
//     when nobody leaves on night k, they deduce they have blue eyes
//     all N=k+1 leave on night k+1

// The visitor created "common knowledge":
// Before: everyone knew, but not everyone knew that everyone knew.
// After: the public announcement makes it universally known.</code></pre>
<p><strong>Common knowledge:</strong> The key is the difference between "everyone knows X" and "everyone knows that everyone knows X." The public announcement escalates individual knowledge to common knowledge, enabling the inductive chain.</p>
<p>This puzzle is a classic example of epistemic logic and game theory — it illustrates how public information with shared observation triggers coordinated action that private information cannot.</p>`
        },
        {
          q: "Two eggs, 100 floors: find the critical floor in minimum drops.",
          a: `<p>You have 2 eggs and a 100-floor building. There is a critical floor F such that eggs survive drops from floors below F but break at F and above. Find F with the minimum number of drops in the worst case.</p>
<p>The naive approach — binary search — uses only 1 egg for halving, which fails because a break leaves you with no egg to continue. You need a strategy that balances the linear scan (second egg) with the jump size (first egg).</p>
<p>Optimal strategy: drop first egg from floor x, then x+(x-1), then x+(x-1)+(x-2), etc. (decreasing intervals). This way, each breakage costs 1 fewer linear step with the second egg, keeping worst case constant.</p>
<p>Solve: x + (x-1) + ... + 1 &gt;= 100 → x(x+1)/2 &gt;= 100 → x = 14. Start at floor 14, then 27, 39, 50, 60, 69, 77, 84, 90, 95, 99, 100. Worst case is exactly <strong>14 drops</strong>.</p>
<pre><code>function eggDrop(n, k) {
  // n = eggs, k = floors
  // dp[i][j] = max floors testable with i eggs and j drops
  const dp = Array.from({length: n + 1}, () => new Array(k + 1).fill(0));
  let m = 0;
  while (dp[n][m] &lt; k) {
    m++;
    for (let i = 1; i &lt;= n; i++) {
      dp[i][m] = dp[i-1][m-1] + dp[i][m-1] + 1;
    }
  }
  return m; // minimum drops needed
}
console.log(eggDrop(2, 100)); // 14</code></pre>
<p><strong>Decreasing intervals:</strong> The insight is that as you use more drops on the first egg, you can afford fewer linear scans — so intervals decrease by 1 each time, giving a triangular number formula x(x+1)/2 &gt;= n.</p>
<p>For the general k-egg, n-floor case, dynamic programming gives O(k·n log n) or O(k·n²) solutions. The two-egg, 100-floor variant is the classic interview form illustrating the tradeoff between binary search and linear fallback.</p>`
        },
        {
          q: "1000 wine bottles, one poisoned: find it with minimum prisoners.",
          a: `<p>Testing each bottle individually would require 1000 prisoners (one per bottle). Binary encoding dramatically reduces this number.</p>
<p>Label each bottle from 1 to 1000 in binary (10 bits). Assign one prisoner per bit position (1 through 10). Each prisoner drinks from all bottles that have a '1' in their assigned bit position.</p>
<p>After 30 days, observe which prisoners die. The pattern of deaths forms a binary number that directly identifies the poisoned bottle.</p>
<p>Since 2^10 = 1024 > 1000, only <strong>10 prisoners</strong> are needed.</p>
<pre><code>// Example: if prisoners 1, 3, 4 die (bits 1, 3, 4 are set)
// Binary: 0b0011010 = bottle number 26 is poisoned
// Bottle 0 is identified if no prisoners die</code></pre>
<p><strong>Binary encoding trick:</strong> Each prisoner's death/survival maps to a bit in the binary representation of the poisoned bottle's number — 10 binary bits covers all 1000 bottles.</p>
<p>This is a classic information theory puzzle: log₂(1000) ≈ 9.97, so at least 10 bits (prisoners) are theoretically necessary, and the binary approach achieves this minimum.</p>`
        },
        {
          q: "Explain the Bridge and Torch puzzle (4 people with 1 torch crossing a bridge).",
          a: `<p>Four people must cross a narrow bridge at night with one torch. Only 2 can cross at a time, and the torch must be carried back for each return trip. Each person has a different speed.</p>
<p>Classic instance: speeds of 1, 2, 5, 10 minutes. Naively pairing fastest with slowest: (1+10) + 1 + (2+5) + 2 = 21 minutes. Optimal: send the two slowest together.</p>
<p>Optimal strategy: 1+2 cross (2 min), 1 returns (1 min), 5+10 cross (10 min), 2 returns (2 min), 1+2 cross (2 min). Total: <strong>17 minutes</strong>.</p>
<p>The key insight is that the two slowest people should always cross together to amortize their high cost over a single crossing.</p>
<pre><code>// Optimal strategy:
// Step 1: Person 1 and 2 cross → 2 min
// Step 2: Person 1 returns → 1 min
// Step 3: Person 5 and 10 cross → 10 min
// Step 4: Person 2 returns → 2 min
// Step 5: Person 1 and 2 cross → 2 min
// Total: 17 minutes</code></pre>
<p><strong>Pair the two slowest:</strong> The dominant cost is the slowest person — pairing the two slowest together means you only pay for the slowest once, not twice.</p>
<p>The general algorithm for n people: repeatedly apply either the "pair two slowest" or "escort one slowest" strategy based on which costs less for the current remaining group.</p>`
        },
        {
          q: "Explain the Monty Hall problem.",
          a: `<p>You are on a game show with three doors. Behind one is a car; behind the others are goats. You pick a door. The host opens a different door revealing a goat. Should you switch your choice?</p>
<p>Counterintuitively, you should always switch. When you first pick, you have a 1/3 chance of being right. After the host reveals a goat, that probability does not increase to 1/2 — rather, the remaining door has a 2/3 probability of having the car.</p>
<p>The host's action is not random — they always open a goat door — which transfers the probability from your original choice to the other door.</p>
<p>Switching wins 2/3 of the time; staying wins only 1/3 of the time.</p>
<pre><code>// Simulation (switch always wins ~66.7% of the time):
// Initial pick: P(car) = 1/3
// Host removes a goat → other remaining door has P(car) = 2/3
// Switching wins when initial pick was WRONG (prob = 2/3)</code></pre>
<p><strong>Bayesian intuition:</strong> The host's additional information (revealing a goat) doesn't help your original door — it concentrates the 2/3 probability onto the single unchosen door.</p>
<p>Run a simulation: simulate 10,000 rounds with "always switch" vs "always stay." Always switch will win approximately 6,667 times vs 3,333 — definitively demonstrating the 2/3 probability.</p>`
        },
        {
          q: "How do you measure exactly 4 liters using a 3-liter and 5-liter jug?",
          a: `<p>Neither jug holds 4 liters directly. The solution uses iterative filling and pouring to reach the target through combinations of 3 and 5.</p>
<p>One approach: Fill the 5L jug. Pour into the 3L jug (3L full, 2L left in 5L). Empty the 3L jug. Pour the remaining 2L into the 3L jug. Fill the 5L jug again. Pour 1L from the 5L jug into the 3L jug (to fill it). Now the 5L jug has exactly <strong>4 liters</strong>.</p>
<p>An alternative: Fill the 3L jug. Pour it into the 5L jug. Fill the 3L jug again. Pour 2L into the 5L jug to fill it. 1L remains in the 3L jug. Empty the 5L jug. Pour the 1L into it. Fill the 3L jug. Pour into the 5L jug. 4 liters are now in the 5L jug.</p>
<pre><code>// Steps: Fill 5L → pour into 3L → empty 3L → pour 2L into 3L
// → fill 5L → pour 1L into 3L (to fill it) → 5L has 4L</code></pre>
<p><strong>Water jug problems are graph search:</strong> Each state is (3L amount, 5L amount). BFS from (0,0) to any state with 4 finds the shortest sequence of operations.</p>
<p>In general, you can measure any amount that is a multiple of GCD(3, 5) = 1, meaning any integer from 0 to 8 is achievable with these two jugs.</p>`
        },
        {
          q: "Explain the Three Light Switches puzzle.",
          a: `<p>Three switches outside a room control three light bulbs inside. You can flip switches as many times as you want before entering the room — but you can only enter the room once. How do you identify which switch controls which bulb?</p>
<p>Use heat as a second property of bulbs: turn on switch 1 for 10 minutes, turn it off, then turn on switch 2, and enter the room. The lit bulb is controlled by switch 2. The warm-but-unlit bulb was controlled by switch 1. The cold-and-unlit bulb is controlled by switch 3.</p>
<p>This works because incandescent bulbs retain heat after being turned off — exploiting a physical property beyond just on/off state.</p>
<pre><code>// Strategy:
// - Turn switch 1 ON for 10 minutes, then OFF
// - Turn switch 2 ON, then enter the room
// - LIT bulb → switch 2
// - WARM but unlit bulb → switch 1
// - COLD and unlit bulb → switch 3</code></pre>
<p><strong>Use heat as a second channel:</strong> With only on/off states (2 states, 3 unknowns), the puzzle requires exploiting an extra dimension — heat from prior activation differentiates bulb 1 from bulb 3.</p>
<p>With 4 bulbs and one entry, extend: leave switch 1 on 20 min, switch 2 on 10 min, switch 3 on 5 min, switch 4 off. Relative warmth distinguishes all four.</p>`
        },
        {
          q: "Explain the Birthday Paradox.",
          a: `<p>How many people do you need in a room for there to be a 50%+ chance that two share a birthday? The answer is surprisingly small — just 23 people.</p>
<p>Instead of calculating the probability of a match directly, calculate the probability that all n birthdays are different. P(no match) = (365/365) ×(364/365) × (363/365) × ... × ((366-n)/365).</p>
<p>P(no match with 23 people) ≈ 49.3%, so P(at least one match) ≈ 50.7% — just over 50%.</p>
<p>With 70 people, the probability of a shared birthday exceeds 99.9%.</p>
<pre><code>// P(at least one shared birthday with n people)
// = 1 - P(all different)
// = 1 - (365 * 364 * ... * (365-n+1)) / 365^n

function birthdayProbability(n) {
  let p = 1;
  for (let i = 0; i &lt; n; i++) p *= (365 - i) / 365;
  return 1 - p;
}
// birthdayProbability(23) ≈ 0.507</code></pre>
<p><strong>Complement probability:</strong> Calculating "all different" and subtracting from 1 is much simpler than counting all the ways two people might share a birthday.</p>
<p>The paradox arises from human intuition underestimating combinatorial growth — 23 people create C(23, 2) = 253 possible pairs, each with a 1/365 chance of matching.</p>`
        },
        {
          q: "Explain the Josephus problem concept.",
          a: `<p>N people stand in a circle, counting every kth person who is eliminated. Find the last remaining person's position. With k=2, this has an elegant O(n) formula.</p>
<p>For k=2: after eliminating every second person, the position of the survivor after eliminating from n people is <code>J(n) = (J(n-1) + 2) % n</code>, with J(1) = 0 (0-indexed).</p>
<p>The recursive formula comes from the observation that after the second person is eliminated, the problem reduces to n-1 people starting from the third person.</p>
<p>For general k, the recurrence is <code>J(n,k) = (J(n-1,k) + k) % n</code>.</p>
<pre><code>function josephus(n) { // k=2, 0-indexed
  let pos = 0;
  for (let i = 2; i &lt;= n; i++) pos = (pos + 2) % i;
  return pos; // 1-indexed: return pos + 1
}
// josephus(7) = 6 (0-indexed), person 7 survives</code></pre>
<p><strong>Recurrence reduction:</strong> Each elimination reduces the circle size by 1, and the survivor's position shifts by k positions relative to the new circle — the recurrence captures this shift.</p>
<p>The O(n) iterative solution computes the survivor's position bottom-up from the base case J(1,k)=0, avoiding recursive overhead.</p>`
        },
        {
          q: "Explain the Pirates and Gold puzzle.",
          a: `<p>5 pirates rank 1 (most senior) to 5 (least senior). Pirate 1 proposes how to divide 100 gold coins. All pirates vote; if 50%+ approve, the proposal passes. Otherwise Pirate 1 is thrown overboard and Pirate 2 proposes next. What should Pirate 1 propose?</p>
<p>Work backwards using game theory. Pirate 5 alone: keeps 100. Pirate 4 and 5: Pirate 4 proposes (100, 0) and votes yes (50% threshold met). Pirate 3,4,5: Pirate 3 proposes (98, 0, 2) — Pirate 5 prefers 2 over 0 from the 2-pirate scenario.</p>
<p>Continuing backwards, Pirate 1 proposes: (98, 0, 1, 0, 1). Pirates 1, 3, and 5 vote yes (3 of 5 = 60%). Pirate 1 keeps 98 coins.</p>
<pre><code>// Backward induction:
// n=1: (100)
// n=2: (100, 0)  — P1 gets 100
// n=3: (98, 0, 2) — P1 bribes P3 with 2
// n=4: (99, 0, 1, 0) — P1 bribes P3 with 1
// n=5: (98, 0, 1, 0, 1) — P1 bribes P3 and P5</code></pre>
<p><strong>Backward induction:</strong> Solve from the simplest case (1 pirate) backwards — at each step, bribe the minimum number of pirates needed for approval by offering them 1 more than they would get if the current proposer is eliminated.</p>
<p>This puzzle demonstrates that rational, self-interested agents can reach surprising equilibria — Pirate 1, the most powerful, keeps 98% of the gold through pure logic.</p>`
        },
        {
          q: "Explain the Egg Drop problem (optimal strategy).",
          a: `<p>Given e eggs and n floors, find the minimum number of trials in the worst case to determine the critical floor (highest safe floor). Dropping an egg above the critical floor breaks it.</p>
<p>With 2 eggs and 100 floors: try floors 14, 27, 39, 50, 60, 69, 77, 84, 90, 95, 99 (decreasing increments). If the first egg breaks at floor k, scan linearly below from the previous checkpoint. Worst case: <strong>14 trials</strong>.</p>
<p>The diminishing interval strategy ensures the sum of decrements equals 100: k + (k-1) + ... + 1 = k(k+1)/2 ≥ 100, so k = 14.</p>
<p>For e eggs and n floors, the DP solution finds the minimum trials in O(e × n × log n) using binary search optimization.</p>
<pre><code>// 2 eggs, n floors: min trials k satisfies k(k+1)/2 >= n
// k = ceil((-1 + sqrt(1 + 8n)) / 2)
// For n=100: k = 14

// Drop pattern: floor 14, 27, 39, 50, 60, 69, 77, 84, 90, 95, 99
// If egg breaks at 27: check 15-26 linearly (12 more trials max)</code></pre>
<p><strong>Diminishing intervals:</strong> Reducing the search interval by 1 each time the first egg survives balances worst-case trials for linear scan after first egg breaks vs continued higher-floor checks.</p>
<p>With 3 eggs, the minimum is only 5 trials for 100 floors — each additional egg dramatically reduces the required trials by enabling more efficient binary-style search.</p>`
        },
        {
          q: "Explain the Three Ants on a Triangle probability puzzle.",
          a: `<p>Three ants are placed at the corners of an equilateral triangle. Each ant picks a random direction (clockwise or counterclockwise) and walks. What is the probability they all avoid collisions?</p>
<p>Each ant independently chooses clockwise (CW) or counterclockwise (CCW) with equal probability 1/2. A collision occurs when at least two ants travel toward each other.</p>
<p>No collision occurs only when all ants move in the same direction: all CW or all CCW. Probability = (1/2)³ + (1/2)³ = 2/8 = <strong>1/4</strong>.</p>
<p>P(at least one collision) = 1 - 1/4 = 3/4.</p>
<pre><code>// Each ant: P(CW) = 1/2, P(CCW) = 1/2
// Safe combinations: (CW,CW,CW) or (CCW,CCW,CCW)
// P(no collision) = P(all CW) + P(all CCW) = (1/2)^3 + (1/2)^3 = 1/4
// P(collision) = 1 - 1/4 = 3/4</code></pre>
<p><strong>Complement principle:</strong> Count the easy cases (all same direction) rather than all collision scenarios. The complement gives the collision probability directly.</p>
<p>For n ants on a regular n-gon, by the same logic: P(no collision) = 2/(2^n) = 1/(2^(n-1)), since only all-CW or all-CCW avoids collisions among all 2^n combinations.</p>`
        },
        {
          q: "Explain the Two Egg and 100 Floors problem in detail.",
          a: `<p>With exactly 2 eggs and 100 floors, find the minimum worst-case number of trials to determine the highest safe floor from which an egg can be dropped without breaking.</p>
<p>If you break the first egg on floor k, you must then scan floors 1 through k-1 linearly with the second egg. To minimize the worst case, start at floor k, and if it survives, go to floor k + (k-1), then k + (k-1) + (k-2), and so on.</p>
<p>You need the smallest k such that k + (k-1) + ... + 1 = k(k+1)/2 ≥ 100. Solving: k ≥ 13.65, so k = 14. Maximum trials = 14.</p>
<pre><code>// k(k+1)/2 >= 100
// k=13: 91 (not enough)
// k=14: 105 >= 100 ✓
// Drop at: 14, 27, 39, 50, 60, 69, 77, 84, 90, 95, 99
// If first egg breaks at floor f, check f-k+1 to f-1 linearly</code></pre>
<p><strong>Optimal intervals:</strong> Using decreasing intervals (k, k-1, k-2, ...) balances the worst case between "early break" (more linear scan) and "late break" (more jumps) scenarios.</p>
<p>This is a specific case of the general egg drop DP: with more eggs, binary search-like strategies become feasible, drastically reducing the needed trials.</p>`
        },
        {
          q: "Explain the Chessboard and Domino problem.",
          a: `<p>A standard 8×8 chessboard has two opposite corner squares removed. Can you tile the remaining 62 squares using 31 dominoes, each covering exactly two adjacent squares?</p>
<p>The answer is no. A chessboard has alternating black and white squares. Opposite corners are the same color (say, both white). Removing them leaves 30 white and 32 black squares (or vice versa).</p>
<p>Each domino covers exactly one black and one white square. 31 dominoes cover 31 white and 31 black squares. Since the board has an unequal count, tiling is impossible.</p>
<pre><code>// Standard chessboard: 32 white + 32 black squares
// Remove 2 corners (same color): 30 white + 32 black remaining
// Each domino covers 1 white + 1 black
// 31 dominoes → 31 white + 31 black needed
// 31 ≠ 30 → IMPOSSIBLE to tile</code></pre>
<p><strong>Coloring invariant:</strong> Assigning colors to squares and tracking counts creates an invariant that proves impossibility — a common mathematical proof technique for combinatorial puzzles.</p>
<p>Extension: if you remove one white and one black square (any two of opposite colors), tiling IS always possible — this can be proven by constructing an explicit path algorithm through the board.</p>`
        }
      ]
    }
  ]
};
