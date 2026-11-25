(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-5", short: "Continuity and Differentiability",
intro: R`Continuity = no break in the graph; differentiability = no sharp corner. Then the full toolkit of differentiation: chain rule, implicit, logarithmic, parametric and second derivatives.`,
sec: [
["Continuity", [
  P(R`$f$ is <b>continuous at $a$</b> if LHL = RHL = $f(a)$.`, R`\lim_{x \to a^-}f(x) = \lim_{x \to a^+}f(x) = f(a)`),
  GR("Kinds of discontinuity", [
    { xl: "x", yl: "y", xr: [-2, 2], yr: [-1, 3], fns: [x => Math.abs(x) < 0.04 ? NaN : x * x + 0.5], pts: [[0, 2, "f(0)"]], t: "removable (hole)" },
    { xl: "x", yl: "y", xr: [-2, 2], yr: [-2, 2], fns: [x => Math.abs(x) < 0.03 ? NaN : (x < 0 ? -1 : 1)], t: "jump" },
    { xl: "x", yl: "y", xr: [-2, 2], yr: [-4, 4], fns: [x => Math.abs(x) < 0.12 ? NaN : 1 / x], t: "infinite" }]),
  P(R`Sums, products, quotients (denominator ≠ 0) and compositions of continuous functions are continuous. Polynomials, $\sin, \cos, e^x$ are continuous everywhere; $\ln x$ for $x > 0$.`),
  P(R`<b>Greatest integer function</b>: $[g(x)]$ can be discontinuous only where $g(x)$ is an <b>integer</b> (and $g$ crosses it). Count those points in the interval.`),
  J(R`$[x^2 - x - \frac12]$ on $[2, 4]$: $g(x) = x^2 - x - \frac12$ increases from 1.5 to 11.5, so it passes through the integers 2, 3, …, 11: one discontinuity at each.`, "2026 · 2 Apr · Shift 2"),
  J(R`Continuity at $x = \frac\pi2$ for $\frac{b(1 - \sin x)}{(\pi - 2x)^2}$: put $x = \frac\pi2 + h$; $1 - \cos h \approx \frac{h^2}{2}$ and $(\pi - 2x)^2 = 4h^2$, so the limit is $\frac b8$.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Intermediate value theorem</b>: if $f$ is continuous on $[a, b]$ and $f(a)f(b) < 0$, then $f(c) = 0$ for some $c \in (a, b)$.`)
]],
["Differentiability", [
  P(R`$f$ is differentiable at $a$ if LHD = RHD (finite). Differentiable ⇒ continuous, but <b>not</b> conversely ($|x|$ at 0).`, [R`\text{LHD} = \lim_{h \to 0}\frac{f(a - h) - f(a)}{-h}`, R`\text{RHD} = \lim_{h \to 0}\frac{f(a + h) - f(a)}{h}`], G({ xl: "x", yl: "y", xr: [-2, 2], yr: [-0.5, 2], fns: [x => Math.abs(x)], pts: [[0, 0, "corner"]], t: "|x|: continuous, not differentiable at 0" })),
  P(R`Non-differentiable points: <b>corners</b> (modulus of a function crossing zero with non-zero slope), <b>vertical tangents</b>, and <b>discontinuities</b>.`),
  P(R`$|f(x)|$ is non-differentiable where $f(x) = 0$ with $f'(x) \ne 0$ (a simple root). At a repeated root, e.g. $|x^2|$, it is smooth.`),
  P(R`$\max\{f, g\}$ and $\min\{f, g\}$: possible corners where $f = g$ (the graphs cross).`, null, G({ xl: "x", yl: "y", xr: [-1, 3], yr: [-2, 10], fns: [x => Math.max(6 * x, 2 + 3 * x * x)], t: "max{6x, 2 + 3x²}: corners where they cross" })),
  J(R`$\max\{6x, 2 + 3x^2\} + |x - 1|\cos|x^2 - \frac14|$ on $(-\pi, \pi)$: corners where $6x = 2 + 3x^2$; $|x - 1|$ gives a corner at $x = 1$ unless the cosine factor is 0 there. Check each candidate separately.`, "2026 · 4 Apr · Shift 1"),
  J(R`$g(x) = f(|x|) + |f(x)|$ with a piecewise $f$: check $x = 0$ (where $|x|$ and the pieces switch) and the zeros of $f$ (where $|f|$ may corner).`, "2026 · 4 Apr · Shift 2"),
  J(R`$e^{\sin|x|} - |x|$: at $x = 0$ both one-sided derivatives are $1 - 1 = 0$, so the two corners cancel and $f$ is differentiable there. Then check the sign of $f'$ on the given interval.`, "2026 · 8 Apr · Shift 2"),
  W(R`A product $|x - a|\,g(x)$ is differentiable at $a$ if $g(a) = 0$.`)
]],
["Differentiation Techniques", [
  P(R`<b>Chain rule</b>: $\frac{d}{dx}f(g(x)) = f'(g(x))\,g'(x)$.`),
  T(["f(x)", "f′(x)", "f(x)", "f′(x)"], [[R`$\sin^{-1}x$`, R`$\frac{1}{\sqrt{1 - x^2}}$`, R`$\cos^{-1}x$`, R`$-\frac{1}{\sqrt{1 - x^2}}$`], [R`$\tan^{-1}x$`, R`$\frac{1}{1 + x^2}$`, R`$\cot^{-1}x$`, R`$-\frac{1}{1 + x^2}$`], [R`$\sec^{-1}x$`, R`$\frac{1}{|x|\sqrt{x^2 - 1}}$`, R`$\csc^{-1}x$`, R`$-\frac{1}{|x|\sqrt{x^2 - 1}}$`]]),
  P(R`<b>Implicit</b>: differentiate both sides treating $y$ as $y(x)$, then solve for $\frac{dy}{dx}$. <b>Logarithmic</b>: for $u^v$ or long products, take $\ln$ first.`, R`\frac{d}{dx}u^v = u^v\left(v'\ln u + \frac{v\,u'}{u}\right)`),
  P(R`<b>Parametric</b>: $\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$ and`, R`\frac{d^2y}{dx^2} = \frac{d}{dt}\left(\frac{dy}{dx}\right)\cdot\frac{dt}{dx}`),
  P(R`<b>Leibniz rule</b> for integrals with variable limits:`, R`\frac{d}{dx}\int_{a(x)}^{b(x)}f(t)\,dt = f(b(x))\,b'(x) - f(a(x))\,a'(x)`),
  W(R`$\frac{d^2y}{dx^2} \ne \frac{d^2y/dt^2}{d^2x/dt^2}$ for parametric curves.`)
]]
],
pyq: {
  pat: [
    [R`Points of discontinuity of $[g(x)]$ on an interval`, "2026 · 2 Apr · Shift 2"],
    [R`Non-differentiable points of max/min/modulus combinations`, "2026 · 4 Apr · Shift 1; 2026 · 4 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Constants from continuity at a point`, "2026 · 8 Apr · Shift 2"],
    [R`Discontinuities of a composite piecewise function`, "2026 · 6 Apr · Shift 2"]
  ],
  combo: [R`Continuity + definite integral`, R`Differentiability + monotonicity`, R`Composition of functions + continuity`],
  trap: [R`$[g(x)]$ is continuous at a point where $g$ touches an integer from above only on the appropriate side; draw it.`, R`Endpoints of a closed interval only need one-sided continuity.`],
  mist: [R`Concluding differentiability from continuity.`]
}
});
})();
