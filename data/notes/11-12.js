(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-12", short: "Limits and Derivatives",
intro: R`A limit is the value a function <b>approaches</b>. Most limits reduce to a few <b>standard limits</b>, expansions, or L'Hôpital's rule. The derivative is a limit too.`,
sec: [
["Limits: Idea & Algebra", [
  P(R`$\lim_{x \to a}f(x) = L$ exists ⟺ LHL = RHL = L (finite).`, R`\text{LHL} = \lim_{h \to 0}f(a - h),\qquad \text{RHL} = \lim_{h \to 0}f(a + h)`, G({ xl: "x", yl: "y", xr: [-2, 2], yr: [-2, 2], fns: [x => x < 0 ? x - 0.5 : NaN, x => x > 0 ? x + 0.5 : NaN], pts: [[0, -0.5, "LHL"], [0, 0.5, "RHL"]], t: "LHL ≠ RHL ⇒ limit does not exist" })),
  P(R`Limits of sums, products and quotients are the sums, products and quotients of the limits (when they exist and the denominator ≠ 0).`),
  P(R`<b>Indeterminate forms</b>: $\frac00, \frac\infty\infty, 0\cdot\infty, \infty - \infty, 1^\infty, 0^0, \infty^0$. Remove them by factorising, rationalising, standard limits or expansions.`)
]],
["Standard Limits", [
  P(R`<b>Trig and inverse trig</b> ($x$ in radians):`, [R`\lim_{x \to 0}\frac{\sin x}{x} = \lim_{x \to 0}\frac{\tan x}{x} = \lim_{x \to 0}\frac{\sin^{-1}x}{x} = 1`, R`\lim_{x \to 0}\frac{1 - \cos x}{x^2} = \frac12`], G({ xl: "x", yl: "y", xr: [-10, 10], yr: [-0.4, 1.2], fns: [x => Math.abs(x) < 1e-6 ? 1 : Math.sin(x) / x], pts: [[0, 1, "→ 1"]], t: "sin x / x" })),
  P(R`<b>Exponential and log</b>:`, [R`\lim_{x \to 0}\frac{e^x - 1}{x} = 1,\quad \lim_{x \to 0}\frac{a^x - 1}{x} = \ln a,\quad \lim_{x \to 0}\frac{\ln(1 + x)}{x} = 1`, R`\lim_{x \to a}\frac{x^n - a^n}{x - a} = na^{n-1}`]),
  P(R`<b>$1^\infty$ form</b>: if $f \to 1$ and $g \to \infty$:`, R`\lim f(x)^{g(x)} = e^{\lim g(x)\,(f(x) - 1)}`),
  P(R`<b>Expansions</b> near 0 (use for higher-order limits):`, [R`\sin x = x - \frac{x^3}{6} + \cdots,\quad \cos x = 1 - \frac{x^2}{2} + \frac{x^4}{24} - \cdots,\quad \tan x = x + \frac{x^3}{3} + \cdots`, R`e^x = 1 + x + \frac{x^2}{2} + \cdots,\quad \ln(1 + x) = x - \frac{x^2}{2} + \cdots`]),
  P(R`<b>L'Hôpital's rule</b>: for $\frac00$ or $\frac\infty\infty$, $\lim\frac{f}{g} = \lim\frac{f'}{g'}$.`),
  J(R`$\lim_{x \to 2}\frac{\sin(x^3 - 5x^2 + ax + b)}{(\sqrt{x - 1} - 1)\ln(x - 1)} = m$: the denominator behaves like $\frac{(x - 2)^2}{2}$, so the cubic must have a <b>double root</b> at 2 ($p(2) = p'(2) = 0$) to give a finite $m$.`, "2026 · 2 Apr · Shift 1"),
  J(R`$\lim_{x\to0}\frac{1 - \cos(\alpha x)\cos((\alpha + 1)x)\cos((\alpha + 2)x)}{\sin^2((\alpha + 1)x)}$: use $1 - \prod\cos a_ix \approx \frac{x^2}{2}\sum a_i^2$, giving $\frac{\alpha^2 + (\alpha + 1)^2 + (\alpha + 2)^2}{2(\alpha + 1)^2}$.`, "2026 · 5 Apr · Shift 1"),
  J(R`A limit defining a function, $f(x) = \lim_{y\to0}\frac{(1 - \cos xy)\tan xy}{y^3} = \frac{x^3}{2}$; then count the solutions of $f(x) = \sin x$ graphically.`, "2026 · 5 Apr · Shift 2"),
  J(R`$\lim_{x\to2}\frac{\tan(x - 2)(rx^2 + (p - 2)x - 2p)}{(x - 2)^2} = 5$: the quadratic must vanish at $x = 2$ (factor $(x - 2)$), giving relations between $r$ and $p$.`, "2026 · 6 Apr · Shift 2"),
  W(R`For a finite non-zero limit with denominator → 0, the numerator must also → 0. Use this to find unknown constants first.`)
]],
["Derivatives", [
  P(R`<b>Derivative from first principles</b>: the slope of the tangent.`, R`f'(x) = \lim_{h \to 0}\frac{f(x + h) - f(x)}{h}`, S(s.axes(20, 125, 10, 210, 135, 10) + s.path("M25 115 Q120 110 200 20", 'class="blue"') + s.lab(90, 104, "x") + s.lab(160, 60, "x + h") + s.line(40, 125, 200, 30, 'class="red"') + s.txt(150, 120, "secant → tangent"), 220, 140, "Slope of a secant → slope of the tangent")),
  T(["f(x)", "f′(x)", "f(x)", "f′(x)"], [[R`$x^n$`, R`$nx^{n-1}$`, R`$\sin x$`, R`$\cos x$`], [R`$e^x$`, R`$e^x$`, R`$\cos x$`, R`$-\sin x$`], [R`$a^x$`, R`$a^x\ln a$`, R`$\tan x$`, R`$\sec^2x$`], [R`$\ln x$`, R`$\frac1x$`, R`$\sec x$`, R`$\sec x\tan x$`], [R`$\log_a x$`, R`$\frac{1}{x\ln a}$`, R`$\csc x$`, R`$-\csc x\cot x$`]]),
  P(R`<b>Product and quotient rules</b>:`, [R`(uv)' = u'v + uv',\qquad \left(\frac uv\right)' = \frac{u'v - uv'}{v^2}`])
]]
],
pyq: {
  pat: [
    [R`Find constants so that a limit is finite, then the limit value`, "2026 · 2 Apr · Shift 1; 2026 · 6 Apr · Shift 2"],
    [R`Products of cosines / $1 - \cos$ type limits`, "2026 · 5 Apr · Shift 1"],
    [R`Limit that defines a function, then solve an equation with it`, "2026 · 5 Apr · Shift 2"],
    [R`$\lim\frac{f(x)}{x^3}$ condition used to build a polynomial`, "2026 · 2 Apr · Shift 2"]
  ],
  combo: [R`Limits + application of derivatives (polynomial with given extrema)`, R`Limits + quadratic roots location`, R`Limits + continuity (finding constants)`],
  trap: [R`$\sqrt{x - 1} - 1 \approx \frac{x - 2}{2}$ and $\ln(x - 1) \approx x - 2$ near $x = 2$.`, R`$\lim_{x\to0}\frac{\sin x°}{x} = \frac{\pi}{180}$ (degrees!).`],
  mist: [R`Applying L'Hôpital when the form is not $\frac00$ or $\frac\infty\infty$.`, R`Cancelling factors that are zero at the limit point without care for the sign of the side limits.`]
}
});
})();
