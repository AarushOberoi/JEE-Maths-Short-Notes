(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-9", short: "Differential Equations",
intro: R`Identify the <b>type</b> first: variable separable, homogeneous, or linear. Each type has a fixed method. Then use the initial condition to fix the constant.`,
sec: [
["Order, Degree & Formation", [
  P(R`<b>Order</b> = highest derivative present. <b>Degree</b> = power of the highest derivative after making the equation polynomial in derivatives (undefined if a derivative is inside sin, e, log, …).`),
  P(R`<b>Formation</b>: a family with $n$ arbitrary constants gives a DE of order $n$: differentiate $n$ times and eliminate the constants.`),
  P(R`Solution curves: the general solution is a <b>family</b>; the initial condition picks one curve.`, null, G({ xl: "x", yl: "y", xr: [-2, 2], yr: [-1, 4], fns: [x => x * x, x => x * x + 1, x => x * x + 2, x => x * x - 0.5], t: "dy/dx = 2x: y = x² + C" }))
]],
["Variable Separable", [
  P(R`$\frac{dy}{dx} = f(x)g(y)$ ⇒ $\int\frac{dy}{g(y)} = \int f(x)\,dx + C$.`, null, G({ xl: "x", yl: "y", xr: [-2, 2], yr: [0, 6], fns: [x => Math.exp(x), x => 2 * Math.exp(x), x => 0.5 * Math.exp(x)], t: "dy/dx = y: y = Ceˣ" })),
  J(R`$dy = y(2 + \ln x)dx$: $\ln y = 2x + x\ln x - x + C$; use $y(1) = e$ to find $C$.`, "2026 · 2 Apr · Shift 1"),
  J(R`$\frac{dy}{dx} = (1 + x + x^2)(1 - y + y^2)$: separate; $\int\frac{dy}{y^2 - y + 1} = \frac{2}{\sqrt3}\tan^{-1}\frac{2y - 1}{\sqrt3}$.`, "2026 · 4 Apr · Shift 1"),
  J(R`$(1 + \sin x)\frac{dy}{dx} + (y + 1)\cos x = 0$: $\frac{dy}{y + 1} = -\frac{\cos x}{1 + \sin x}dx$ ⇒ $(y + 1)(1 + \sin x) = C$.`, "2026 · 2 Apr · Shift 1"),
  P(R`<b>Reducible</b>: $\frac{dy}{dx} = f(ax + by + c)$ → put $t = ax + by + c$.`)
]],
["Homogeneous Equations", [
  P(R`$\frac{dy}{dx} = F\left(\frac yx\right)$ (numerator and denominator of the same degree). Put $y = vx$:`, R`v + x\frac{dv}{dx} = F(v)\ \Rightarrow\ \int\frac{dv}{F(v) - v} = \int\frac{dx}{x}`),
  J(R`$x\sin\frac yx\,dy = (y\sin\frac yx - x)dx$: put $y = vx$, giving $\sin v\,dv = -\frac{dx}{x}$, so $\cos\frac yx = \ln x + C$.`, "2026 · 5 Apr · Shift 1"),
  J(R`$2y^2\frac{dx}{dy} - 2xy + x^2 = 0$: homogeneous in the form $\frac{dx}{dy} = F\left(\frac xy\right)$; put $x = vy$.`, "2026 · 2 Apr · Shift 2"),
  W(R`Check homogeneity by replacing $x, y$ with $\lambda x, \lambda y$: $F$ must not change.`)
]],
["Linear Differential Equations", [
  P(R`$\frac{dy}{dx} + P(x)\,y = Q(x)$. <b>Integrating factor</b> and solution:`, [R`\text{I.F.} = e^{\int P\,dx},\qquad y\cdot\text{I.F.} = \int Q\cdot\text{I.F.}\,dx + C`], G({ xl: "x", yl: "y", xr: [0, 4], yr: [-0.2, 3], fns: [x => 1 + 1.5 * Math.exp(-x), x => 1 + 0.5 * Math.exp(-x), x => 1 - 0.8 * Math.exp(-x), x => 1], lab: ["", "", "", "y = 1"], t: "y′ + y = 1: y = 1 + Ce⁻ˣ" })),
  P(R`Linear in $x$: $\frac{dx}{dy} + P(y)\,x = Q(y)$, I.F. $= e^{\int P\,dy}$.`),
  P(R`<b>Bernoulli</b>: $\frac{dy}{dx} + Py = Qy^n$ → divide by $y^n$ and put $t = y^{1-n}$; it becomes linear.`),
  J(R`$\frac{dy}{dx} + \frac{6x^2 + (3x^2 + 2x^3 + 4)e^{-2x}}{(x^3 + 2)(2 + e^{-2x})}y = 2 + e^{-2x}$: split $P = \frac{3x^2}{x^3 + 2} + \frac{2e^{-2x}}{2 + e^{-2x}}$, so I.F. $= \frac{x^3 + 2}{2 + e^{-2x}}$ and the right side becomes $\int(x^3 + 2)\,dx$.`, "2026 · 4 Apr · Shift 2"),
  J(R`$(\tan x)^{1/2}dy = (\sec^3x - (\tan x)^{3/2}y)dx$: divide by $\sqrt{\tan x}$ to get $\frac{dy}{dx} + (\tan x)\,y = \frac{\sec^3x}{\sqrt{\tan x}}$; I.F. $= \sec x$.`, "2026 · 5 Apr · Shift 2"),
  J(R`$x\sqrt{1 - x^2}\,dy + (y\sqrt{1 - x^2} - x\cos^{-1}x)dx = 0$: linear, $\frac{dy}{dx} + \frac yx = \frac{\cos^{-1}x}{\sqrt{1 - x^2}}$, I.F. $= x$; the limit at $x \to 1^-$ fixes $C$.`, "2026 · 8 Apr · Shift 2"),
  J(R`Integral equations ($x^2g(x) = \int_1^x(t^2f(t) - tg(t))dt$): differentiate with the Leibniz rule to get a linear DE, and get the initial value by putting $x = 1$.`, "2026 · 6 Apr · Shift 2"),
  W(R`Bring the equation to the exact form $\frac{dy}{dx} + Py = Q$ (coefficient of $\frac{dy}{dx}$ = 1) before computing the I.F.`)
]]
],
pyq: {
  pat: [
    [R`Linear DE with a tricky integrating factor`, "2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Homogeneous DE (also in $\frac{dx}{dy}$ form)`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 1"],
    [R`Variable separable with a given point on the curve`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1"],
    [R`DE from an integral equation (Leibniz rule)`, "2026 · 6 Apr · Shift 2"]
  ],
  combo: [R`DE + circle (value from the solution becomes a radius condition)`, R`DE + functional equation`, R`DE + limits (condition at a limit point)`],
  trap: [R`$\int\frac{dx}{x} = \ln|x|$; with $x > 0$ given, drop the modulus safely.`, R`If $y$ appears non-linearly, the equation may still be linear (or Bernoulli) in $x$: try writing it with $\frac{dx}{dy}$.`],
  mist: [R`Using $e^{\int P}$ before dividing by the coefficient of $\frac{dy}{dx}$.`]
}
});
})();
