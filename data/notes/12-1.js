(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-1", short: "Relations and Functions",
intro: R`Types of relations (reflexive, symmetric, transitive, equivalence) and types of functions (one-one, onto). JEE questions are mostly <b>counting</b> and <b>checking</b> these properties.`,
sec: [
["Types of Relations", [
  P(R`For a relation R on a set A:`),
  T(["Type", "Condition"], [["Reflexive", R`$(a, a) \in R$ for <b>every</b> $a \in A$`], ["Symmetric", R`$(a, b) \in R \Rightarrow (b, a) \in R$`], ["Transitive", R`$(a, b), (b, c) \in R \Rightarrow (a, c) \in R$`], ["Equivalence", "reflexive + symmetric + transitive"], ["Antisymmetric", R`$(a, b), (b, a) \in R \Rightarrow a = b$`]]),
  P(R`An <b>equivalence relation</b> splits A into disjoint <b>equivalence classes</b>; e.g. congruence mod $n$ gives $n$ classes.`, null, S(s.ell(110, 70, 100, 58) + s.line(70, 15, 85, 125, 'class="thin"') + s.line(140, 15, 130, 125, 'class="thin"') + s.txt(35, 75, "[0]") + s.txt(100, 75, "[1]") + s.txt(165, 75, "[2]"), 220, 140, "Classes of 'mod 3' on ℤ")),
  P(R`<b>Counting</b> on a set with $n$ elements:`, [R`\text{relations} = 2^{n^2},\quad \text{reflexive} = 2^{n^2 - n},\quad \text{symmetric} = 2^{\frac{n(n+1)}{2}}`]),
  J(R`Relation on $\{-2, -1, 0, 1, 2\}$ with $1 + ab > 0$: list pairs by sign of $ab$; it is reflexive and symmetric but check transitivity with a counter-example like $(-1, 0), (0, 1)$.`, "2026 · 8 Apr · Shift 2"),
  J(R`Number of elements of a relation on $A \times A$ like "$x$ divides $z$ and $y \le w$": the two conditions are independent, so count (pairs with $x | z$) × (pairs with $y \le w$).`, "2026 · 2 Apr · Shift 2"),
  J(R`Minimum pairs to add to make R transitive: list the chains $(a, b), (b, c)$ that need $(a, c)$, add them, and repeat until nothing new is needed.`, "2026 · 6 Apr · Shift 2"),
  W(R`A relation can be symmetric and transitive but not reflexive (e.g. the empty relation). $\phi$ on a non-empty set is symmetric and transitive, not reflexive.`)
]],
["Types of Functions", [
  P(R`<b>One-one (injective)</b>: $f(x_1) = f(x_2) \Rightarrow x_1 = x_2$; every horizontal line cuts the graph at most once. A strictly monotonic function is one-one.`),
  GR("Horizontal line test", [
    { xl: "x", yl: "y", xr: [-2, 2], yr: [-3, 3], fns: [x => x * x * x, x => 1], t: "x³: one-one" },
    { xl: "x", yl: "y", xr: [-2, 2], yr: [-1, 4], fns: [x => x * x, x => 1.5], pts: [[-1.225, 1.5, ""], [1.225, 1.5, ""]], t: "x²: many-one" }]),
  P(R`<b>Onto (surjective)</b>: range = co-domain. <b>Bijective</b> = one-one + onto. Only bijections have inverses.`),
  T(["From A (m) to B (n)", "Number"], [["all functions", R`$n^m$`], ["one-one ($m \le n$)", R`$ {}^nP_m$`], ["onto ($m \ge n$)", R`$n^m - {}^nC_1(n - 1)^m + {}^nC_2(n - 2)^m - \cdots$`], ["bijections ($m = n$)", R`$n!$`]]),
  J(R`Functions $\{1, 2, 3, 4\} \to \{a, b, c\}$ that are <b>not onto</b> $= 3^4 - (\text{onto}) = 81 - 36 = 45$.`, "2026 · 4 Apr · Shift 1"),
  J(R`One-one $f : A \to A$ with conditions like $f(1) \ge 3$, $f(3) \le 4$, $f(2) + f(3) = 5$: fix the most restricted values first (list possible $(f(2), f(3))$), then arrange the rest.`, "2026 · 5 Apr · Shift 1")
]],
["Composition & Inverse", [
  P(R`$(g \circ f)(x) = g(f(x))$, defined when range of $f \subseteq$ domain of $g$. In general $g \circ f \ne f \circ g$.`),
  P(R`<b>Inverse</b>: $f^{-1}(y) = x \iff f(x) = y$. The graph of $f^{-1}$ is the mirror image of $f$ in $y = x$.`, null, G({ xl: "x", yl: "y", xr: [-1, 4], yr: [-1, 4], fns: [x => Math.exp(x) - 1, x => x > -1 ? Math.log(x + 1) : NaN, x => x], lab: ["f", "f⁻¹", "y = x"], t: "f and f⁻¹ are reflections in y = x" })),
  P(R`$(g \circ f)^{-1} = f^{-1}\circ g^{-1}$; $f \circ f^{-1} = I$.`),
  J(R`For an <b>increasing</b> $f$, the solutions of $f(x) = f^{-1}(x)$ lie on $y = x$: solve $f(x) = x$. For $f(x) = (x - 1)^4 + 1$ on $[1, \infty)$, this gives $x = 1, 2$.`, "2026 · 4 Apr · Shift 2"),
  J(R`Iterating $f(x) = \frac{x - 1}{x + 1}$: $f^2(x) = -\frac1x$, $f^4(x) = x$, so the iterates repeat with period 4.`, "2026 · 8 Apr · Shift 2"),
  J(R`Discontinuities of $g\circ f$ for piecewise $f, g$: check where $f$ jumps, and where $f(x)$ crosses the break point of $g$.`, "2026 · 6 Apr · Shift 2")
]]
],
pyq: {
  pat: [
    [R`Count elements of a relation / check reflexive, symmetric, transitive`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Minimum pairs to add for transitivity / equivalence`, "2026 · 6 Apr · Shift 2"],
    [R`Number of onto / not-onto / one-one functions with conditions`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`$f(x) = f^{-1}(x)$ and iterated compositions`, "2026 · 4 Apr · Shift 2; 2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`Relations + P&C counting`, R`Composition + continuity`, R`Iterated functions + area`],
  trap: [R`Reflexive needs <b>every</b> $(a, a)$, not just some.`, R`$f(x) = f^{-1}(x)$ ⇒ $f(x) = x$ only for increasing $f$.`],
  mist: [R`Counting onto functions by $n^m$ minus one term only (inclusion–exclusion needs all terms).`]
}
});
})();
