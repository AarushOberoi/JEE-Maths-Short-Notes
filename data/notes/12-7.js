(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-7", short: "Integrals",
intro: R`Indefinite integrals by standard forms, substitution, partial fractions and by parts; definite integrals by their <b>properties</b>. Definite-integral tricks score most of the marks here.`,
sec: [
["Standard Integrals", [
  T(["∫ f(x) dx", "Result", "∫ f(x) dx", "Result"], [[R`$x^n$`, R`$\frac{x^{n+1}}{n + 1}$`, R`$\frac1x$`, R`$\ln|x|$`], [R`$e^x$`, R`$e^x$`, R`$a^x$`, R`$\frac{a^x}{\ln a}$`], [R`$\sin x$`, R`$-\cos x$`, R`$\cos x$`, R`$\sin x$`], [R`$\sec^2x$`, R`$\tan x$`, R`$\csc^2x$`, R`$-\cot x$`], [R`$\tan x$`, R`$\ln|\sec x|$`, R`$\sec x$`, R`$\ln|\sec x + \tan x|$`]]),
  P(R`<b>Special forms</b>:`, [R`\int\frac{dx}{x^2 + a^2} = \frac1a\tan^{-1}\frac xa,\qquad \int\frac{dx}{\sqrt{a^2 - x^2}} = \sin^{-1}\frac xa`, R`\int\frac{dx}{x^2 - a^2} = \frac{1}{2a}\ln\left|\frac{x - a}{x + a}\right|,\qquad \int\frac{dx}{\sqrt{x^2 \pm a^2}} = \ln\left|x + \sqrt{x^2 \pm a^2}\right|`, R`\int\sqrt{a^2 - x^2}\,dx = \frac x2\sqrt{a^2 - x^2} + \frac{a^2}{2}\sin^{-1}\frac xa`]),
  P(R`<b>Linear/quadratic</b>: write the numerator as $A\frac{d}{dx}(\text{denominator}) + B$, then split.`)
]],
["Methods of Integration", [
  P(R`<b>Substitution</b>: if the integrand has $g(x)$ and $g'(x)$, put $t = g(x)$. Trig substitutions: $\sqrt{a^2 - x^2}$ → $x = a\sin\theta$; $x^2 + a^2$ → $x = a\tan\theta$.`),
  P(R`<b>Partial fractions</b>: $\frac{px + q}{(x - a)(x - b)} = \frac{A}{x - a} + \frac{B}{x - b}$; a repeated factor $(x - a)^2$ needs $\frac{A}{x - a} + \frac{B}{(x - a)^2}$.`),
  J(R`$\int\frac{16x + 24}{x^2 + 2x - 15}dx = \int\left(\frac{A}{x + 5} + \frac{B}{x - 3}\right)dx$; the constants make $f(7) = \ln(2^\alpha 3^\beta)$.`, "2026 · 2 Apr · Shift 2"),
  P(R`<b>By parts</b> (choose $u$ by ILATE: Inverse, Log, Algebraic, Trig, Exponential):`, [R`\int u\,v\,dx = u\int v\,dx - \int\left(u'\int v\,dx\right)dx`, R`\int e^x[f(x) + f'(x)]\,dx = e^xf(x) + C`]),
  P(R`$\int\frac{dx}{a\sin^2x + b\cos^2x}$ and similar: divide by $\cos^2x$ and put $t = \tan x$. Powers of $\sec x$: write $\sec^4x = \sec^2x(1 + \tan^2x)$.`),
  J(R`$\int\frac{4 - \csc^2x}{\cos^4x}dx$: divide out to get powers of $\sec^2x$ and $\tan x$; then put $t = \tan x$.`, "2026 · 5 Apr · Shift 1")
]],
["Definite Integrals: Properties", [
  P(R`<b>Fundamental theorem</b>: $\int_a^b f(x)\,dx = F(b) - F(a)$ where $F' = f$. Integral = signed area.`, null, G({ xl: "x", yl: "y", xr: [-0.5, 3.5], yr: [-1.2, 1.5], fns: [x => Math.sin(2 * x) + 0.3], fill: [[0, null, 0.3, 2.9]], t: "∫ₐᵇ f = area above − area below" })),
  P(R`<b>Key properties</b>:`, [R`\int_a^b f(x)\,dx = \int_a^b f(a + b - x)\,dx`, R`\int_{-a}^{a}f(x)\,dx = \begin{cases}2\int_0^a f & f \text{ even}\\ 0 & f \text{ odd}\end{cases}`, R`\int_0^{2a}f(x)\,dx = 2\int_0^a f(x)\,dx \ \text{ if } f(2a - x) = f(x)`]),
  GR("Odd and even functions on [−a, a]", [
    { xl: "x", yl: "y", xr: [-1.5, 1.5], yr: [-1.5, 1.5], fns: [x => x * x * x], fill: [[0, null, -1, 1]], t: "odd: areas cancel → 0" },
    { xl: "x", yl: "y", xr: [-1.5, 1.5], yr: [-0.3, 1.6], fns: [x => x * x], fill: [[0, null, -1, 1]], t: "even: 2 × right half" }]),
  J(R`$\int_{-1}^{1}\frac{x^3 + |x| + 1}{x^2 + 2|x| + 1}dx$: the $x^3$ part is odd and gives 0; the rest is even, so $2\int_0^1\frac{x + 1}{(x + 1)^2}dx = 2\ln 2$.`, "2026 · 6 Apr · Shift 2"),
  P(R`<b>Periodic</b> $f$ with period $T$: $\int_0^{nT}f = n\int_0^Tf$.`, null, G({ xl: "x", yl: "y", xr: [0, 6.4], yr: [0, 1.2], fns: [x => Math.sin(x) ** 4 + Math.cos(x) ** 4], vx: [Math.PI / 2, Math.PI, 3 * Math.PI / 2, 2 * Math.PI], t: "sin⁴x + cos⁴x repeats every π/2" })),
  J(R`$\int_0^{20\pi}(\sin^4x + \cos^4x)dx$: period is $\frac\pi2$, so it is $40\int_0^{\pi/2}(\sin^4x + \cos^4x)dx = 40\cdot\frac{3\pi}{8}$.`, "2026 · 2 Apr · Shift 2"),
  P(R`<b>Wallis</b>: $\int_0^{\pi/2}\sin^nx\,dx = \int_0^{\pi/2}\cos^nx\,dx = \frac{(n - 1)(n - 3)\cdots}{n(n - 2)\cdots}\times\left(\frac\pi2 \text{ if } n \text{ even}\right)$.`),
  P(R`<b>Greatest integer inside</b>: split the range at the points where $[\,\cdot\,]$ changes value.`, null, G({ xl: "x", yl: "y", xr: [-0.2, 3.2], yr: [-0.3, 3.3], fns: [x => Math.abs(x - Math.round(x)) < 0.02 ? NaN : Math.floor(x)], fill: [[0, null, 1.02, 2.98]], vx: [1, 2, 3], t: "∫₀³[x] dx = 0 + 1 + 2 = 3" })),
  J(R`$\int_0^3\frac{e^x + e^{-x}}{[x]!}dx$: split into $[0, 1), [1, 2), [2, 3)$ with $[x]! = 1, 1, 2$.`, "2026 · 2 Apr · Shift 1"),
  J(R`$\int_{-2}^{2}(|\sin x| + [x\sin x])dx$: $x\sin x$ is even and lies in $[0, \max)$; find where it crosses 1 (and 2) to split the GIF.`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>$x \to \frac{a^2}{x}$ substitution</b> for $\int_0^\infty$: e.g. $\int_0^\infty\frac{\ln x}{x^2 + a^2}dx = \frac{\pi}{2a}\ln a$.`),
  J(R`$\int_0^\infty\frac{\ln x}{x^2 + 4}dx$: put $x = \frac4t$; the integral turns into $\frac{\pi}{4}\ln 2$ after adding the two forms.`, "2026 · 5 Apr · Shift 1"),
  J(R`$\int\log_2(x^2 + 4)$ and $\int\sqrt{2^x - 4}$ are integrals of a function and its <b>inverse</b>: $\int_a^bf + \int_{f(a)}^{f(b)}f^{-1} = bf(b) - af(a)$.`, "2026 · 2 Apr · Shift 1")
]],
["Leibniz Rule & Integral Equations", [
  P(R`Differentiate under the integral with variable limits:`, R`\frac{d}{dx}\int_{a(x)}^{b(x)}f(t)\,dt = f(b)\,b' - f(a)\,a'`),
  P(R`If the integrand contains $x$ too (like $\tan(t - x)$), first separate $x$ out of the integrand, then apply the rule.`),
  J(R`$f(x) = \int_1^x f(t)\,dt + (1 - x)(\ln x - 1) + e$: differentiate to get $f' = f + \dots$ (a linear DE), and use $f(1)$ from the original equation.`, "2026 · 5 Apr · Shift 2"),
  J(R`$f(x) = \int_0^x\tan(t - x)\,dt - \int_0^x f(t)\tan t\,dt$: the first integral equals $\ln|\cos x|$ by direct integration; then differentiate twice.`, "2026 · 4 Apr · Shift 2"),
  P(R`<b>Limit of a sum</b>: $\lim_{n\to\infty}\frac1n\sum_{r=1}^{n}f\left(\frac rn\right) = \int_0^1 f(x)\,dx$.`),
  W(R`After a substitution in a definite integral, change the limits too. Never keep the old limits with the new variable.`)
]]
],
pyq: {
  pat: [
    [R`Even/odd split and $a + b - x$ property`, "2026 · 6 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Integrals with the greatest integer function`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1"],
    [R`Periodicity: $\int_0^{n\pi}$ of trig powers`, "2026 · 2 Apr · Shift 2"],
    [R`Integral equations solved with the Leibniz rule`, "2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 2"],
    [R`Function + inverse trick; $x \to a^2/x$ for $\int_0^\infty$`, "2026 · 2 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Partial fractions and trig integrals`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 1"]
  ],
  combo: [R`Integration + ITF ($\cot^{-1}$ as a difference of $\tan^{-1}$)`, R`Integration + complex roots of a cubic`, R`Integration + A.M.–G.M.`, R`Integration + differential equations`, R`Integration + continuity`],
  trap: [R`$\int\frac{dx}{x} = \ln|x|$: keep the modulus.`, R`Odd function trick needs symmetric limits $[-a, a]$.`],
  mist: [R`Forgetting to change the limits in substitution.`, R`Splitting $|f(x)|$ without finding where $f$ changes sign.`]
}
});
})();
