(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-6", short: "Application of Derivatives",
intro: R`The derivative as a <b>rate</b> and a <b>slope</b>: rate of change, tangents and normals, increasing/decreasing functions, and maxima/minima.`,
sec: [
["Rate of Change, Tangents & Normals", [
  P(R`$\frac{dy}{dx}$ = rate of change of $y$ w.r.t. $x$. Related rates: differentiate the relation w.r.t. time, e.g. $\frac{dV}{dt} = 4\pi r^2\frac{dr}{dt}$ for a sphere.`),
  P(R`At $(x_1, y_1)$ with slope $m = f'(x_1)$:`, [R`\text{tangent: } y - y_1 = m(x - x_1)`, R`\text{normal: } y - y_1 = -\frac1m(x - x_1)`], S(s.axes(20, 125, 10, 210, 135, 10) + s.path("M25 120 Q110 115 200 30", 'class="blue"') + s.lab(130, 92, "P") + s.line(60, 125, 200, 60, 'class="red"') + s.line(110, 50, 150, 135, 'class="thin" stroke-dasharray="4 3"') + s.txt(178, 58, "tangent") + s.txt(150, 125, "normal"), 220, 140, "Tangent and normal at P")),
  P(R`Horizontal tangent: $f'(x) = 0$. Vertical tangent: $\frac{dx}{dy} = 0$.`)
]],
["Increasing & Decreasing Functions", [
  P(R`On an interval: $f' > 0$ ⇒ strictly increasing; $f' < 0$ ⇒ strictly decreasing. ($f' \ge 0$ with equality only at isolated points still gives strictly increasing.)`, null, G({ xl: "x", yl: "y", xr: [-2.5, 2.5], yr: [-3, 3], fns: [x => x * x * x - 3 * x], pts: [[-1, 2, "max"], [1, -2, "min"]], t: "y = x³ − 3x: ↑, ↓, ↑" })),
  J(R`$f'' = g''$ everywhere ⇒ $f' - g'$ is constant ⇒ $f - g$ is linear, $f(x) - g(x) = ax + b$. Use the given values to find $a, b$.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Monotonic</b> functions are one-one. To compare values like $f(2)$ and $f(3)$, use monotonicity instead of computing.`),
  J(R`$f$ strictly <b>decreasing</b> and positive: $f(A) > f(B) \iff A < B$. Used to decide which axis of an ellipse $\frac{x^2}{f(\cdot)} + \frac{y^2}{f(\cdot)} = 1$ is the major one.`, "2026 · 8 Apr · Shift 2")
]],
["Maxima & Minima", [
  P(R`<b>Critical points</b>: $f'(x) = 0$ or $f'$ does not exist. <b>First derivative test</b>: $f'$ changes + to − ⇒ local max; − to + ⇒ local min.`),
  P(R`<b>Second derivative test</b>: $f'(c) = 0$ and $f''(c) < 0$ ⇒ max; $f''(c) > 0$ ⇒ min; $f''(c) = 0$ ⇒ test fails.`),
  P(R`<b>Absolute max/min</b> on $[a, b]$: compare $f$ at the critical points and at the end-points $a, b$.`, null, G({ xl: "x", yl: "y", xr: [0, 3.3], yr: [-1.2, 1.2], fns: [x => Math.sin(2 * x)], vx: [0.3, 3], pts: [[0.785, 1, "abs max"], [2.356, -1, "abs min"]], t: "Check end-points too" })),
  J(R`Critical points of $\left|\frac{\sin x}{x}\right|$ on $(-2\pi, 2\pi)$: include points where the derivative is 0 ($\tan x = x$ roots) <b>and</b> where it does not exist (zeros of $\sin x$, i.e. corners of the modulus).`, "2026 · 2 Apr · Shift 1"),
  J(R`Polynomial of degree 5 with extrema at $\pm1$ and $\lim\frac{f(x)}{x^3} = -5$: the limit forces $f = ax^5 + cx^4 + bx^3$ with $b = -5$ (no lower terms); $f'(1) = f'(-1) = 0$ then gives $c = 0$, $a = 3$.`, "2026 · 2 Apr · Shift 2"),
  J(R`$\max 16\sin\frac x2\cos^3\frac x2$ on $[0, \pi]$: put $\theta = \frac x2$, differentiate, get $\tan^2\theta = \frac13$, i.e. $\theta = \frac\pi6$.`, "2026 · 4 Apr · Shift 2"),
  J(R`$f(x) = f'(x)\,f''(x)$ for a polynomial: compare degrees, $n = (n - 1) + (n - 2)$, so $n = 3$; then match coefficients.`, "2026 · 4 Apr · Shift 1"),
  J(R`Max − min of $f(x) = \int_0^x(t^2 + 2t + 3)dt$ on $[1, \alpha]$: $f' = x^2 + 2x + 3 > 0$, so $f$ is increasing; max at α, min at 1.`, "2026 · 6 Apr · Shift 2"),
  P(R`<b>Useful optimisation facts</b>: for a fixed perimeter the square has maximum area; a rectangle in a circle of radius $r$ has max area $2r^2$; for $x > 0$, $x + \frac{a}{x} \ge 2\sqrt a$.`),
  W(R`A critical point where $f'$ does not exist (a corner) can still be a max or min. Do not drop it.`)
]]
],
pyq: {
  pat: [
    [R`Build a polynomial from extrema and a limit condition`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1"],
    [R`Count critical points (including non-differentiable points)`, "2026 · 2 Apr · Shift 1"],
    [R`Maximum of a trig product`, "2026 · 4 Apr · Shift 2"],
    [R`Monotonic integral function: max − min on an interval`, "2026 · 6 Apr · Shift 2"],
    [R`Minimum of a function after solving a functional equation`, "2026 · 5 Apr · Shift 1"]
  ],
  combo: [R`AOD + limits`, R`AOD + definite integral (Leibniz)`, R`AOD + matrices (singular matrix gives the interval)`, R`AOD + conics (decreasing function decides the major axis)`],
  trap: [R`Global extrema need the end-points.`, R`$f'(c) = 0$ does not guarantee an extremum ($x^3$ at 0).`],
  mist: [R`Ignoring points where $f'$ is undefined.`]
}
});
})();
