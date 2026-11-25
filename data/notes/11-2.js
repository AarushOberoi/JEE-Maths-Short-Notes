(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-2", short: "Relations and Functions",
intro: R`A <b>function</b> is a rule that gives <b>exactly one</b> output for each input. Most JEE questions ask for a <b>domain</b>, a <b>range</b>, or the graph of a standard function.`,
sec: [
["Relations & Functions: Basics", [
  P(R`<b>Relation</b> from A to B: any subset of $A \times B$. Number of relations $= 2^{mn}$ for $n(A) = m$, $n(B) = n$.`),
  P(R`<b>Function</b> $f : A \to B$: every element of A has exactly one image. A = <b>domain</b>, B = <b>co-domain</b>, set of images = <b>range</b> $\subseteq$ B.`, R`\text{number of functions } A \to B = n^m`),
  P(R`<b>Vertical line test</b>: a curve is the graph of a function if every vertical line cuts it at most once.`, null, S(s.axes(30, 110, 10, 200, 135, 10) + s.ell(110, 70, 45, 35) + s.line(110, 20, 110, 125, 'class="red" stroke-dasharray="4 3"') + s.dot(110, 35) + s.dot(110, 105) + s.txt(118, 30, "2 points ⇒ not a function"), 220, 140, "A circle is not a function of x")),
  P(R`<b>Algebra of functions</b> (on the common domain): $(f \pm g)(x)$, $(fg)(x)$, and $(f/g)(x)$ where $g(x) \ne 0$.`)
]],
["Domain & Range: Working Rules", [
  T(["Expression", "Condition for the domain"], [[R`$\frac{1}{g(x)}$`, R`$g(x) \ne 0$`], [R`$\sqrt{g(x)}$`, R`$g(x) \ge 0$`], [R`$\log_a g(x)$`, R`$g(x) > 0$, $a > 0$, $a \ne 1$`], [R`$\sin^{-1} g$, $\cos^{-1} g$`, R`$-1 \le g(x) \le 1$`], [R`$\tan^{-1}g$, $\cot^{-1}g$`, R`all real $g$`], [R`$\sec^{-1}g$, $\csc^{-1}g$`, R`$|g(x)| \ge 1$`]]),
  P(R`<b>Range method</b>: put $y = f(x)$, solve for $x$ in terms of $y$, and find the $y$ for which $x$ is real and in the domain. For $y = \frac{ax^2 + bx + c}{px^2 + qx + r}$, cross-multiply and use <b>discriminant ≥ 0</b> in $x$.`),
  P(R`<b>Log inequalities</b>: for base $0 < a < 1$ the inequality <b>flips</b>:`, R`\log_a g(x) \ge 0 \iff \begin{cases} g(x) \ge 1 & a > 1 \\ 0 < g(x) \le 1 & 0 < a < 1 \end{cases}`),
  J(R`Domain of $\sqrt{\log_{0.6}|g(x)|}$: base < 1, so you need $0 < |g(x)| \le 1$. Solve as a modulus inequality and collect the intervals carefully, including isolated points.`, "2026 · 2 Apr · Shift 1"),
  J(R`Range of a rational function $\frac{2x^2 - 3x + 2}{3x^2 + x + 3}$: use the discriminant in $x$. A range smaller than $\mathbb R$ means the function is <b>not onto</b>; equal values at two points means it is <b>not one-one</b>.`, "2026 · 6 Apr · Shift 2"),
  W(R`Always find the domain <b>before</b> simplifying. $f(x) = \frac{x^2 - 1}{x - 1}$ is not the same function as $x + 1$ (domain excludes $x = 1$).`)
]],
["Standard Functions & Graphs", [
  GR("Polynomial, modulus, reciprocal", [
    { xl: "x", yl: "y", xr: [-3, 3], yr: [-1, 4], fns: [x => x * x], t: "y = x²: range [0, ∞)" },
    { xl: "x", yl: "y", xr: [-3, 3], yr: [-1, 3], fns: [x => Math.abs(x)], t: "y = |x|" },
    { xl: "x", yl: "y", xr: [-3, 3], yr: [-3, 3], fns: [x => Math.abs(x) < 0.05 ? NaN : 1 / x], t: "y = 1/x: x ≠ 0" }]),
  GR("Exponential & logarithm (inverses of each other)", [
    { xl: "x", yl: "y", xr: [-3, 3], yr: [-1, 5], fns: [x => Math.exp(x), x => Math.exp(-x)], lab: ["eˣ", "e⁻ˣ"], t: "y = aˣ: range (0, ∞)" },
    { xl: "x", yl: "y", xr: [-1, 5], yr: [-3, 3], fns: [x => x > 0 ? Math.log(x) : NaN, x => x > 0 ? -Math.log(x) : NaN], lab: ["ln x", "log of base < 1"], t: "y = logₐx: domain (0, ∞)" }]),
  GR("Greatest integer, fractional part, signum", [
    { xl: "x", yl: "y", xr: [-2.5, 2.5], yr: [-3, 3], fns: [x => Math.abs(x - Math.round(x)) < 0.02 ? NaN : Math.floor(x)], t: "[x]: steps, jumps at integers" },
    { xl: "x", yl: "y", xr: [-2.5, 2.5], yr: [-0.5, 1.5], fns: [x => Math.abs(x - Math.round(x)) < 0.02 ? NaN : x - Math.floor(x)], t: "{x} = x − [x] ∈ [0, 1)" },
    { xl: "x", yl: "y", xr: [-2.5, 2.5], yr: [-1.5, 1.5], fns: [x => Math.abs(x) < 0.03 ? NaN : Math.sign(x)], pts: [[0, 0, ""]], t: "sgn x" }]),
  P(R`<b>Greatest integer function</b> $[x]$ = greatest integer ≤ $x$. Key facts:`, [R`x - 1 < [x] \le x,\qquad [x + n] = [x] + n\ (n \in \mathbb Z)`, R`[x] + [-x] = \begin{cases} 0 & x \in \mathbb Z \\ -1 & x \notin \mathbb Z \end{cases}`]),
  J(R`GIF inside another function (e.g. $\cos^{-1}\frac{4x + 2[x]}{3}$): split $x$ into intervals $[n, n+1)$, replace $[x]$ by $n$, and solve each piece.`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Even</b> $f(-x) = f(x)$ (symmetric about the y-axis); <b>odd</b> $f(-x) = -f(x)$ (symmetric about the origin). Every function = even part + odd part: $\frac{f(x) + f(-x)}{2} + \frac{f(x) - f(-x)}{2}$.`),
  P(R`<b>Periodic</b>: $f(x + T) = f(x)$. Period of $\sin x$, $\cos x$ is $2\pi$; of $\tan x$, $|\sin x|$ is $\pi$; of $\{x\}$ is 1. Period of $f(ax + b)$ = $T/|a|$.`)
]],
["Functional Equations", [
  P(R`Standard forms and their solutions (for continuous / differentiable $f$):`),
  T(["Equation", "Solution"], [[R`$f(x + y) = f(x) + f(y)$`, R`$f(x) = kx$`], [R`$f(x + y) = f(x)f(y)$`, R`$f(x) = a^x$ (or 0)`], [R`$f(xy) = f(x) + f(y)$`, R`$f(x) = k\log x$`], [R`$f(xy) = f(x)f(y)$`, R`$f(x) = x^n$ (or 0, 1)`], [R`$f(x)f(\frac1x) = f(x) + f(\frac1x)$`, R`$f(x) = 1 \pm x^n$`]]),
  P(R`<b>Method</b>: put $x = y = 0$ to get $f(0)$; put $y = 1$ or $y = -x$; or differentiate with respect to one variable using the given derivative value.`),
  J(R`$f(x + y) = f(x) + 2y^2 + y + \alpha xy$ with $f(0)$ and $f(1)$ given: substitute $x = 0$ to get $f(y)$ directly as a quadratic, then use symmetry in $x, y$ to find $\alpha$.`, "2026 · 4 Apr · Shift 2"),
  J(R`$f\left(\frac{x + y}{3}\right) = \frac{f(x) + f(y)}{3}$ with $f'(0) = 3$: differentiate (or put $y = 0$) to get $f(x) = 3x$; then optimise $3 + e^x f(x)$.`, "2026 · 5 Apr · Shift 1")
]]
],
pyq: {
  pat: [
    [R`Domain of a composite expression (log, root, modulus, GIF, inverse trig)`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1"],
    [R`Functional equation → find $f(x)$ → evaluate a sum or optimise`, "2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 1; 2026 · 8 Apr · Shift 2"],
    [R`One-one / onto check for a rational function via its range`, "2026 · 6 Apr · Shift 2"],
    [R`Log equations with variable bases: solve, then reject roots outside the domain`, "2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`Functional equation + series sum $\sum f(n)$`, R`Functional equation + maxima/minima`, R`Domain + modulus inequality`],
  trap: [R`In $\log_{x+1}(\dots)$ the base needs $x + 1 > 0$ and $x + 1 \ne 1$.`, R`$[x + y] \ne [x] + [y]$ in general.`],
  mist: [R`Not flipping the inequality for a log base between 0 and 1.`, R`Missing isolated points (like $\{b\}$) in a domain answer.`]
}
});
})();
