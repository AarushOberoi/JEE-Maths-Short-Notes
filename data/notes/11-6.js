(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-6", short: "Permutations and Combinations",
intro: R`Count <b>without listing</b>. Decide first: does order matter (arrangement) or not (selection)? Then use the multiplication principle and the right standard result.`,
sec: [
["Fundamental Principle of Counting", [
  P(R`<b>Multiplication</b>: if one job can be done in $m$ ways and then another in $n$ ways, both together in $m \times n$ ways ("AND"). <b>Addition</b>: either one of two exclusive jobs in $m + n$ ways ("OR").`),
  P(R`$n! = 1 \cdot 2 \cdots n$, $0! = 1$.`, [R`{}^nP_r = \frac{n!}{(n - r)!}\quad(\text{arrangements}),\qquad {}^nC_r = \frac{n!}{r!(n - r)!}\quad(\text{selections})`, R`{}^nP_r = r!\cdot{}^nC_r`]),
  P(R`<b>Properties of</b> $ {}^nC_r$:`, [R`{}^nC_r = {}^nC_{n-r},\qquad {}^nC_r + {}^nC_{r-1} = {}^{n+1}C_r`, R`{}^nC_x = {}^nC_y \Rightarrow x = y \text{ or } x + y = n`, R`\frac{{}^nC_r}{{}^nC_{r-1}} = \frac{n - r + 1}{r}`])
]],
["Arrangements", [
  T(["Situation", "Number of ways"], [["n distinct objects in a row", R`$n!$`], ["r of n distinct, repetition allowed", R`$n^r$`], ["n objects, p alike of one kind, q of another…", R`$\frac{n!}{p!\,q!\cdots}$`], ["n distinct objects in a circle", R`$(n - 1)!$`], ["necklace / garland (flip allowed)", R`$\frac{(n - 1)!}{2}$`]]),
  S(s.circ(70, 70, 45) + [0, 1, 2, 3, 4, 5].map(k => s.dot(70 + 45 * Math.cos(k * Math.PI / 3), 70 - 45 * Math.sin(k * Math.PI / 3), 4)).join("") + s.lab(115, 70, "fix one") + s.txt(135, 40, "rotations are the same") + s.txt(135, 58, "⇒ (n − 1)!"), 240, 140, "Circular arrangement"),
  P(R`<b>Together</b>: tie the group into one unit, arrange the units, then arrange inside the group. <b>Not together</b> = total − together. <b>No two together</b>: arrange the others first, then place them in the gaps.`, null, S(["B", "B", "B", "B"].map((b, i) => s.block(28 + i * 48, 40, 26, 26, b)).join("") + [14, 62, 110, 158, 206].map(x => s.txt(x, 32, "^", 'class="red"')).join("") + s.txt(30, 95, "5 gaps for the girls: ⁵P₃ ways"), 240, 105, "Gap method (no two together)")),
  J(R`"All girls <b>not together</b>" ≠ "no two girls together". Not all together = $7! - 5!\,3!$ for 4 boys and 3 girls.`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Rank of a word</b> in dictionary order: for each position, count the words starting with smaller letters, then add 1 at the end.`),
  P(R`<b>Using all of a set of digits at least once</b>: use inclusion–exclusion (like onto functions) or split into cases by the repeated digits.`, R`\text{7-digit numbers using each of 5 digits} = \sum \frac{7!}{\text{repeats}!}\ \text{over the cases (3,1,1,1,1) and (2,2,1,1,1)}`),
  J(R`7-digit numbers from 1, 2, 3, 5, 7 with every digit used: case one digit thrice: $5 \cdot \frac{7!}{3!}$; case two digits twice: $ {}^5C_2 \cdot \frac{7!}{2!2!}$. Add them.`, "2026 · 2 Apr · Shift 1")
]],
["Selections", [
  P(R`<b>At least / at most</b>: split into cases or use the complement. "At least two of each colour" from 5 blue, 6 yellow, 4 red with 8 balls: list the colour distributions (2,2,4), (2,3,3), … and add the products of $ {}^nC_r$.`, null, null),
  J(R`8 balls with at least two of each colour: identical-looking cases are easy to miss; list all $(b, y, r)$ with $b + y + r = 8$, each ≥ 2 and within the limits.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Geometry counts</b>: from $n$ points with no three collinear, lines = $ {}^nC_2$, triangles = $ {}^nC_3$. A polygon with $n$ sides has $ {}^nC_2 - n$ diagonals.`, null, S(s.path("M110 15 L170 45 L170 105 L110 135 L50 105 L50 45Z") + s.tri([[110, 15], [170, 105], [50, 105]], 'class="red" style="fill:none"') + s.line(110, 15, 110, 135, 'class="thin" stroke-dasharray="4 3"'), 220, 150, "Triangles from vertices of a polygon: ⁿC₃")),
  J(R`$P_n$ = triangles from an $n$-gon = $ {}^nC_3$, so $P_{n+1} - P_n = {}^nC_2 = 66 \Rightarrow n = 12$.`, "2026 · 2 Apr · Shift 2"),
  P(R`Selecting from <b>identical</b> objects: $p$ alike of one kind, $q$ of another: number of selections (at least one) $= (p + 1)(q + 1) - 1$.`)
]],
["Distribution & Integer Solutions", [
  P(R`<b>Identical objects into distinct boxes</b> (beggar's method): non-negative solutions of $x_1 + x_2 + \cdots + x_r = n$:`, [R`{}^{n + r - 1}C_{r - 1}\ \ (x_i \ge 0),\qquad {}^{n - 1}C_{r - 1}\ \ (x_i \ge 1)`]),
  J(R`Non-negative solutions of $a + b + 2c = 22$: fix $c = 0, 1, \dots, 11$; then $a + b = 22 - 2c$ has $23 - 2c$ solutions. Sum them.`, "2026 · 4 Apr · Shift 2"),
  P(R`<b>Distinct objects into distinct boxes, none empty</b> (onto functions from n to r):`, R`r^n - {}^rC_1(r - 1)^n + {}^rC_2(r - 2)^n - \cdots`),
  J(R`4 different books into 3 different bags, none empty: $3^4 - 3 \cdot 2^4 + 3 \cdot 1^4 = 36$.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Derangements</b> (no object in its own place): $D_n = n!\left(1 - \frac1{1!} + \frac1{2!} - \cdots + \frac{(-1)^n}{n!}\right)$. $D_2 = 1$, $D_3 = 2$, $D_4 = 9$, $D_5 = 44$.`),
  P(R`<b>Series wins</b> ("first to win 5"): the winner wins the last game. A wins in $5 + k$ games ($k$ = B's wins, $0 \le k \le 4$) in $ {}^{4+k}C_k$ ways.`),
  J(R`A wins the series of "first to 5": total ways $= \sum_{k=0}^{4}{}^{4+k}C_4 = {}^9C_5 = 126$ (hockey-stick identity).`, "2026 · 5 Apr · Shift 1"),
  W(R`Lift / floor problems: decide who is identical and who is distinct. People are distinct: choosing <b>which</b> people get off together matters ($ {}^9C_4$), and the floors chosen must be distinct.`)
]]
],
pyq: {
  pat: [
    [R`Numbers formed with each given digit used at least once`, "2026 · 2 Apr · Shift 1"],
    [R`Triangles / diagonals from polygon vertices`, "2026 · 2 Apr · Shift 2"],
    [R`Queue / arrangement with "not together" conditions`, "2026 · 4 Apr · Shift 1"],
    [R`Integer solutions of linear equations with coefficients`, "2026 · 4 Apr · Shift 2"],
    [R`Selection with "at least k of each type"`, "2026 · 5 Apr · Shift 2"],
    [R`Distribution into non-empty boxes, lift problems`, "2026 · 6 Apr · Shift 2; 2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`P&C + probability (most probability questions are counting)`, R`P&C + binomial identities (hockey-stick)`, R`P&C + relations/functions (number of onto functions)`],
  trap: [R`"Not all together" vs "no two together" are different.`, R`Circular arrangements of identical-looking seats vs numbered seats.`],
  mist: [R`Double counting when cases overlap; prefer complement or inclusion–exclusion.`, R`Forgetting that a number cannot start with 0.`]
}
});
})();
