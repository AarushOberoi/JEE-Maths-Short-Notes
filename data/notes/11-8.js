(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-8", short: "Sequences and Series",
intro: R`A.P., G.P., the means and the standard sums. The high-scoring skill is <b>telescoping</b>: split the general term into a difference $f(r) - f(r + 1)$.`,
sec: [
["Arithmetic Progression (A.P.)", [
  P(R`Common difference $d$, first term $a$:`, [R`T_n = a + (n - 1)d`, R`S_n = \frac n2[2a + (n - 1)d] = \frac n2(a + l)`], G({ xl: "n", yl: "Tₙ", xr: [0, 7], yr: [0, 34], fns: [], pts: [1, 2, 3, 4, 5, 6].map(n => [n, 2 + 3 * (n - 1), ""]).concat([1, 2, 3, 4, 5].map(n => [n + 0.15, 2 * 2 ** (n - 1), ""])), t: "A.P. 2, 5, 8 … (linear) vs G.P. 2, 4, 8, 16 … (exponential)" })),
  P(R`$T_n = S_n - S_{n-1}$. If $S_n$ is a quadratic in $n$ without a constant term, the sequence is an A.P. with $d = 2 \times$ (coefficient of $n^2$).`),
  J(R`$S_n = 3n^2 + 5n$ gives $T_n = 6n + 2$; then find $\sum T_n^2$ with the standard sums. If $\sum a_k = 6n^3$ (a cubic), $a_k$ is quadratic, not an A.P.`, "2026 · 5 Apr · Shift 1; 2026 · 2 Apr · Shift 1"),
  P(R`<b>Properties</b>: adding/multiplying every term by a constant keeps an A.P. Terms equidistant from the ends have equal sums. Three numbers in A.P.: take $a - d, a, a + d$.`),
  P(R`<b>Arithmetic means</b>: $n$ A.M.s between $a$ and $b$ have $d = \frac{b - a}{n + 1}$; their sum is $n\cdot\frac{a + b}{2}$.`),
  J(R`39 A.M.s between 59 and 159: $d = \frac{100}{40} = 2.5$, and $A_k = 59 + 2.5k$. The mean of $A_{25}, A_{28}, A_{31}, A_{36}$ is $59 + 2.5 \times 30$.`, "2026 · 5 Apr · Shift 2")
]],
["Geometric Progression (G.P.)", [
  P(R`Common ratio $r$:`, [R`T_n = ar^{n-1},\qquad S_n = \frac{a(r^n - 1)}{r - 1}\ (r \ne 1),\qquad S_\infty = \frac{a}{1 - r}\ (|r| < 1)`]),
  P(R`Three numbers in G.P.: $\frac ar, a, ar$. Product of terms equidistant from the ends is constant. <b>Geometric mean</b> of $a, b$: $\sqrt{ab}$; $n$ G.M.s between $a$ and $b$ have $r = (b/a)^{\frac{1}{n+1}}$.`),
  J(R`Roots of two quadratics in G.P.: write them as $a, ar, ar^2, ar^3$; use the sum and product of each pair to find $r$ and the integer coefficients.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Arithmetico-geometric series</b> $a + (a + d)r + (a + 2d)r^2 + \cdots$: multiply by $r$, subtract, and sum the resulting G.P.`, R`S_\infty = \frac{a}{1 - r} + \frac{dr}{(1 - r)^2}\quad(|r| < 1)`)
]],
["Means & Inequalities", [
  P(R`For positive numbers: <b>A.M. ≥ G.M. ≥ H.M.</b>, with equality only when all numbers are equal.`, [R`\frac{a + b}{2} \ge \sqrt{ab} \ge \frac{2ab}{a + b},\qquad G^2 = AH\ (\text{two numbers})`]),
  P(R`<b>Use</b>: minimum of a sum when the product is fixed, or maximum of a product when the sum is fixed. $x + \frac1x \ge 2$ for $x > 0$.`, null, G({ xl: "x", yl: "y", xr: [0, 4], yr: [0, 6], fns: [x => x + 1 / x], pts: [[1, 2, "min 2 at x = 1"]], t: "y = x + 1/x, x > 0" })),
  J(R`Minimum of $f(a)$ from "$(2^{1-a} + 2^{1+a}), f(a), (3^a + 3^{-a})$ are in A.P.": $f(a)$ is their average; each bracket is minimised by A.M. ≥ G.M.`, "2026 · 5 Apr · Shift 2")
]],
["Standard Sums & Telescoping", [
  P(R`<b>Natural numbers</b>:`, [R`\sum n = \frac{n(n + 1)}{2},\quad \sum n^2 = \frac{n(n + 1)(2n + 1)}{6},\quad \sum n^3 = \left[\frac{n(n + 1)}{2}\right]^2`]),
  J(R`$\sum\frac{1^3 + 2^3 + \cdots + n^3}{1 + 3 + \cdots + (2n - 1)} = \sum\frac{n^2(n + 1)^2/4}{n^2} = \frac14\sum(n + 1)^2$. Simplify the general term first.`, "2026 · 2 Apr · Shift 2"),
  J(R`$1 + \frac12(1^2 + 2^2) + \frac13(1^2 + 2^2 + 3^2) + \cdots$: general term $\frac1n\cdot\frac{n(n+1)(2n+1)}{6} = \frac{(n+1)(2n+1)}{6}$.`, "2026 · 6 Apr · Shift 2"),
  P(R`<b>Method of differences</b>: if $T_r = f(r) - f(r + 1)$ then $\sum_{r=1}^{n}T_r = f(1) - f(n + 1)$.`, [R`\frac{1}{r(r + 1)} = \frac1r - \frac{1}{r + 1}`, [R`\frac{1}{r(r + 1)(r + 2)} =`, R`\frac12\left[\frac{1}{r(r + 1)} - \frac{1}{(r + 1)(r + 2)}\right]`]], S(s.txt(5, 30, "(1 − ½) + (½ − ⅓) + (⅓ − ¼) + … + (1/n − 1/(n+1))") + s.line(40, 26, 62, 26, 'class="red"') + s.line(80, 26, 100, 26, 'class="red"') + s.line(118, 26, 138, 26, 'class="red"') + s.line(152, 26, 172, 26, 'class="red"') + s.txt(5, 65, "= 1 − 1/(n + 1)", 'class="red"'), 290, 80, "Middle terms cancel (telescoping)")),
  J(R`$\sum_{n=1}^{10}\frac{528}{n(n + 1)(n + 2)} = 264\left[\frac12 - \frac{1}{11 \cdot 12}\right]$.`, "2026 · 5 Apr · Shift 1"),
  J(R`$\sum\frac{n}{1 + 4n^4}$: factor $1 + 4n^4 = (2n^2 + 2n + 1)(2n^2 - 2n + 1)$; the difference of these factors is $4n$, so $T_n = \frac14\left[\frac{1}{2n^2 - 2n + 1} - \frac{1}{2n^2 + 2n + 1}\right]$.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Series with an alternating pattern</b> (3 + 4 + 8 + 9 + 13 + 14 + …): split into odd-position and even-position terms; each is an A.P.`),
  W(R`When the sum $S_n$ is given, $T_1 = S_1$ but $T_n = S_n - S_{n-1}$ only for $n \ge 2$; check whether the formula also fits $n = 1$.`)
]]
],
pyq: {
  pat: [
    [R`Telescoping sums of rational terms`, "2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2"],
    [R`A.P./G.P. term and sum conditions (find d or r)`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1"],
    [R`Sums built from $\sum n$, $\sum n^2$, $\sum n^3$`, "2026 · 2 Apr · Shift 2; 2026 · 6 Apr · Shift 2"],
    [R`$T_n$ from a given $S_n$`, "2026 · 2 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Arithmetic means between two numbers`, "2026 · 5 Apr · Shift 2"]
  ],
  combo: [R`Series + quadratic roots in A.P./G.P.`, R`Series + logarithms / infinite G.P. sums inside exponents`, R`A.P. + sets (common terms)`, R`A.M. ≥ G.M. + integration`],
  trap: [R`Infinite G.P. needs $|r| < 1$.`, R`Number of terms between two numbers: count both ends correctly.`],
  mist: [R`Using the A.P. sum formula for a non-A.P. sequence.`, R`Splitting into partial fractions with the wrong constant.`]
}
});
})();
