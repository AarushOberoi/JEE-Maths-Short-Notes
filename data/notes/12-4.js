(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-4", short: "Determinants",
intro: R`A determinant is a number attached to a square matrix. JEE's favourite: the <b>consistency of a system of linear equations</b> (Cramer's rule). Almost every April 2026 paper had one.`,
sec: [
["Evaluation & Properties", [
  P(R`2×2 and 3×3 (expand along any row/column with signs $(-1)^{i+j}$):`, [R`\begin{vmatrix}a&b\\c&d\end{vmatrix} = ad - bc`, R`\begin{vmatrix}a_1&b_1&c_1\\a_2&b_2&c_2\\a_3&b_3&c_3\end{vmatrix} = a_1(b_2c_3 - b_3c_2) - b_1(a_2c_3 - a_3c_2) + c_1(a_2b_3 - a_3b_2)`]),
  L([R`$|A^T| = |A|$. Swapping two rows changes the sign.`, R`Two identical (or proportional) rows ⇒ determinant = 0.`, R`A common factor of a row can be taken out.`, R`$R_i \to R_i + kR_j$ does not change the value (use it to create zeros).`, R`$|AB| = |A||B|$; $|A^{-1}| = \frac{1}{|A|}$.`]),
  P(R`<b>Minor</b> $M_{ij}$ (delete row $i$, column $j$), <b>cofactor</b> $C_{ij} = (-1)^{i+j}M_{ij}$. Sum of products of a row with its own cofactors = $|A|$; with another row's cofactors = 0.`),
  J(R`Determinant whose entries depend on $n$ and a parameter $k$: do row operations to simplify $f(n)$ first, then sum $\sum f(n)$ with standard formulas.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Area of a triangle</b> with determinants (absolute value):`, R`\Delta = \frac12\left|\begin{matrix}x_1&y_1&1\\x_2&y_2&1\\x_3&y_3&1\end{matrix}\right|`)
]],
["System of Linear Equations", [
  P(R`For $AX = B$ (3 equations), with $\Delta = |A|$ and $\Delta_x, \Delta_y, \Delta_z$ (replace a column by $B$). <b>Cramer's rule</b>: $x = \frac{\Delta_x}{\Delta}$, etc.`),
  T(["Case", "Result"], [[R`$\Delta \ne 0$`, "unique solution (consistent)"], [R`$\Delta = 0$ and at least one of $\Delta_x, \Delta_y, \Delta_z \ne 0$`, "no solution (inconsistent)"], [R`$\Delta = \Delta_x = \Delta_y = \Delta_z = 0$`, "infinitely many solutions or none: check"]]),
  P(R`Geometric view (3 planes): unique point, a common line (infinitely many), or no common point.`, null, S(s.path("M20 40 L120 20 L200 60 L100 80Z", 'class="fl"') + s.path("M20 100 L120 80 L200 120 L100 140Z", 'class="fl2"') + s.path("M70 10 L90 10 L90 150 L70 150Z", 'class="thin"') + s.txt(140, 100, "no common point"), 220, 155, "Parallel planes: inconsistent")),
  P(R`<b>Quick method for "infinitely many"</b>: if the 3rd equation must be a combination $pE_1 + qE_2$, find $p, q$ from two coefficients, then match the rest (including the constant).`),
  GR("Two equations in two unknowns (same idea)", [
    { xl: "x", yl: "y", xr: [-1, 4], yr: [-1, 4], fns: [x => 3 - x, x => x], pts: [[1.5, 1.5, "one point"]], t: "Δ ≠ 0: unique" },
    { xl: "x", yl: "y", xr: [-1, 4], yr: [-1, 4], fns: [x => 3 - x, x => 1.5 - x], t: "parallel: no solution" },
    { xl: "x", yl: "y", xr: [-1, 4], yr: [-1, 4], fns: [x => 3 - x], t: "same line: infinitely many" }]),
  J(R`$x + y + z = 5$, $x + 2y + 3z = 9$, $x + 3y + \lambda z = \mu$ has infinitely many solutions: $E_3 = 2E_2 - E_1$, so $\lambda = 5$, $\mu = 13$.`, "2026 · 4 Apr · Shift 2"),
  J(R`"No solution" (find $\frac\beta\alpha$): set $\Delta = 0$ to get α, then choose β so that some $\Delta_i \ne 0$, i.e. the third equation is not the matching combination.`, "2026 · 2 Apr · Shift 1"),
  J(R`Infinitely many solutions: the point $(a, b)$ found from the conditions lies on a given line. Use the combination method; it avoids four determinants.`, "2026 · 2 Apr · Shift 2; 2026 · 8 Apr · Shift 2"),
  P(R`<b>Homogeneous</b> system $AX = O$: always has $X = O$. It has a <b>non-trivial</b> solution ⟺ $\Delta = 0$.`),
  J(R`Homogeneous system with $\cos 3\theta$, $\cos 2\theta$ entries having a non-trivial solution: $\Delta = 0$ gives a trig equation; sum its roots in $[0, 2\pi]$.`, "2026 · 6 Apr · Shift 2"),
  J(R`Homogeneous system with infinitely many solutions <b>for every</b> $t$: $\Delta(t) = 0$ identically gives $f(t)$ as a polynomial.`, "2026 · 5 Apr · Shift 1"),
  W(R`$\Delta = \Delta_x = \Delta_y = \Delta_z = 0$ does not always mean infinitely many solutions (parallel distinct planes can give all zeros). Check by the combination method.`)
]]
],
pyq: {
  pat: [
    [R`Infinitely many / no solution → find parameters`, "2026 · 2 Apr · Shift 1; 2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Homogeneous system with trig or function entries`, "2026 · 5 Apr · Shift 1; 2026 · 6 Apr · Shift 2"],
    [R`Determinant as a function of n, then a series sum`, "2026 · 5 Apr · Shift 2"]
  ],
  combo: [R`Determinants + trig equations`, R`Determinants + series`, R`Determinants + matrices (adjoint chains)`, R`Singular matrix → parameter → integral bounds`],
  trap: [R`For "no solution" you need $\Delta = 0$ <b>and</b> inconsistency.`, R`A row operation that multiplies a row by k multiplies Δ by k.`],
  mist: [R`Forgetting the alternating sign when expanding along a column.`]
}
});
})();
