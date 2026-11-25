(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
const sq = Math.sqrt;
NB.ch({
n: "12-8", short: "Application of Integrals",
intro: R`Area bounded by curves. <b>Always sketch first</b>: find the intersection points, decide which curve is on top (or right), and choose vertical or horizontal strips.`,
sec: [
["Area Under a Curve", [
  P(R`Area between $y = f(x)$, the x-axis and $x = a$, $x = b$: take $|f|$ where the curve goes below the axis.`, R`A = \int_a^b |f(x)|\,dx`, G({ xl: "x", yl: "y", xr: [-0.3, 3.5], yr: [-1.2, 1.4], fns: [Math.sin], fill: [[0, null, 0, Math.PI]], vx: [Math.PI], t: "Area under sin x on [0, π] = 2" })),
  P(R`<b>Horizontal strips</b> (area w.r.t. the y-axis): $A = \int_c^d x\,dy$. Use this when the curves are easier as $x = g(y)$, like $x = ky^2$.`),
  P(R`<b>Standard areas</b>: circle $\pi r^2$; ellipse $\pi ab$; region between $y^2 = 4ax$ and its latus rectum $= \frac83a^2$; between $y^2 = 4ax$ and $x^2 = 4by$: $\frac{16ab}{3}$.`)
]],
["Area Between Two Curves", [
  P(R`Between $y = f(x)$ (upper) and $y = g(x)$ (lower) from $x = a$ to $b$:`, R`A = \int_a^b [f(x) - g(x)]\,dx`, G({ xl: "x", yl: "y", xr: [-0.5, 2.5], yr: [-0.5, 2.5], fns: [x => sq(Math.max(x, 0)) * 1.414, x => x * x / 2], fill: [[0, 1, 0, 2]], t: "upper − lower between the meets", lab: ["y² = 2x", "x² = 2y"] })),
  P(R`If the curves cross inside $[a, b]$, split the integral at the crossing points (or integrate $|f - g|$).`),
  J(R`$\{x^2 - 8x \le y \le -x\}$: the parabola is below the line between their meets $x = 0$ and $x = 7$; area $= \int_0^7(-x - x^2 + 8x)dx = \frac{343}{6}$.`, "2026 · 6 Apr · Shift 2"),
  J(R`Between $x + 3y^2 = 0$ and $x + 4y^2 = 1$: use horizontal strips, $x_{right} - x_{left} = (1 - 4y^2) - (-3y^2) = 1 - y^2$ for $y \in [-1, 1]$.`, "2026 · 4 Apr · Shift 2"),
  J(R`$\{xy \le 27,\ 1 \le y \le x^2\}$: find where $y = x^2$ meets $xy = 27$ ($x = 3$); the region switches boundary there, so split the integral.`, "2026 · 5 Apr · Shift 1"),
  J(R`$\{y \le \pi - |x|,\ y \le |x\sin x|,\ y \ge 0\}$: the figure is symmetric about the y-axis; on $[0, \pi]$ the upper boundary is the smaller of $x\sin x$ and $\pi - x$. Find where they meet ($x = \frac\pi2$).`, "2026 · 4 Apr · Shift 1"),
  J(R`Hyperbola $16x^2 - 9y^2 = 144$ and the line $8x - 3y = 24$: the line passes through the vertex $(3, 0)$; integrate in $y$, with $x = \frac{3}{4}\sqrt{16 + y^2}$ for the hyperbola. The answer has a $\ln 3$ term.`, "2026 · 2 Apr · Shift 2"),
  J(R`Area between $y = x^2$ and $y = \beta x^3$: they meet at $x = 0, \frac1\beta$; area $= \frac{1}{12\beta^3}$. Set it equal to the given value.`, "2026 · 5 Apr · Shift 2"),
  P(R`Area between a curve and its <b>inverse</b> is symmetric about $y = x$: twice the area between the curve and $y = x$.`, null, G({ xl: "x", yl: "y", xr: [-0.2, 1.3], yr: [-0.2, 1.3], fns: [x => x * x, x => sq(Math.max(x, 0)), x => x], fill: [[1, 0, 0, 1]], lab: ["x²", "√x", "y = x"], t: "Area between x² and √x = 1/3" })),
  W(R`Area is always positive. A definite integral can be negative or zero even when the enclosed area is not.`)
]]
],
pyq: {
  pat: [
    [R`Area between a parabola and a line (vertical strips)`, "2026 · 6 Apr · Shift 2"],
    [R`Area between two sideways parabolas (horizontal strips)`, "2026 · 4 Apr · Shift 2"],
    [R`Regions defined by several inequalities (split at crossings)`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Area with a hyperbola (log term in the answer)`, "2026 · 2 Apr · Shift 2"],
    [R`Area as a function of a parameter, then solve for it`, "2026 · 5 Apr · Shift 2; 2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`Area + functional equation (find the curve first)`, R`Area + iterated functions`, R`Area + conics`],
  trap: [R`Check which curve is on top in <b>each</b> sub-interval.`, R`Use symmetry to halve the work, but remember to double back.`],
  mist: [R`Integrating $f - g$ across a crossing point without splitting.`]
}
});
})();
