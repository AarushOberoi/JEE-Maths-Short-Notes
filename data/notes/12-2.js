(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
const asin = Math.asin, acos = Math.acos, atan = Math.atan;
NB.ch({
n: "12-2", short: "Inverse Trigonometric Functions",
intro: R`Trig functions are made one-one by restricting them to a <b>principal branch</b>. Every ITF question is about the principal value range and a handful of identities.`,
sec: [
["Domains & Principal Ranges", [
  T(["Function", "Domain", "Principal range"], [[R`$\sin^{-1}x$`, "[−1, 1]", "[−π/2, π/2]"], [R`$\cos^{-1}x$`, "[−1, 1]", "[0, π]"], [R`$\tan^{-1}x$`, "ℝ", "(−π/2, π/2)"], [R`$\cot^{-1}x$`, "ℝ", "(0, π)"], [R`$\sec^{-1}x$`, "|x| ≥ 1", "[0, π] − {π/2}"], [R`$\csc^{-1}x$`, "|x| ≥ 1", "[−π/2, π/2] − {0}"]]),
  GR("Graphs", [
    { xl: "x", yl: "y", xr: [-1.5, 1.5], yr: [-2, 2], fns: [x => Math.abs(x) <= 1 ? asin(x) : NaN], hy: [Math.PI / 2, -Math.PI / 2], t: "sin⁻¹x" },
    { xl: "x", yl: "y", xr: [-1.5, 1.5], yr: [-0.5, 3.5], fns: [x => Math.abs(x) <= 1 ? acos(x) : NaN], hy: [Math.PI], t: "cos⁻¹x" },
    { xl: "x", yl: "y", xr: [-6, 6], yr: [-2, 2], fns: [atan], hy: [Math.PI / 2, -Math.PI / 2], t: "tan⁻¹x" }]),
  J(R`$\alpha = 3\sin^{-1}\frac{6}{11}$: since $\frac{6}{11} > \frac12$, $\sin^{-1}\frac{6}{11} > \frac\pi6$, so $\alpha > \frac\pi2$ and $\cos\alpha < 0$. Compare each value with the standard angles to fix the sign.`, "2026 · 8 Apr · Shift 2")
]],
["Properties & Identities", [
  P(R`<b>Self-adjusting</b>: $\sin(\sin^{-1}x) = x$ for $x \in [-1, 1]$; but $\sin^{-1}(\sin x) = x$ <b>only</b> for $x \in [-\frac\pi2, \frac\pi2]$.`, null, G({ xl: "x", yl: "y", xr: [-7, 7], yr: [-2, 2], fns: [x => asin(Math.sin(x))], t: "sin⁻¹(sin x): zig-zag" })),
  P(R`<b>Negative arguments</b>: $\sin^{-1}(-x) = -\sin^{-1}x$, $\tan^{-1}(-x) = -\tan^{-1}x$, but $\cos^{-1}(-x) = \pi - \cos^{-1}x$, $\cot^{-1}(-x) = \pi - \cot^{-1}x$.`),
  P(R`<b>Complementary pairs</b>:`, R`\sin^{-1}x + \cos^{-1}x = \tan^{-1}x + \cot^{-1}x = \sec^{-1}x + \csc^{-1}x = \frac\pi2`),
  P(R`<b>Reciprocal</b>: $\tan^{-1}\frac1x = \cot^{-1}x$ for $x > 0$, and $= \cot^{-1}x - \pi$ for $x < 0$.`),
  P(R`<b>Sum of tan⁻¹</b>:`, [R`\tan^{-1}x + \tan^{-1}y = \tan^{-1}\frac{x + y}{1 - xy}\quad(xy < 1)`, R`\tan^{-1}x - \tan^{-1}y = \tan^{-1}\frac{x - y}{1 + xy}`]),
  P(R`<b>Double-angle forms</b> ($|x| \le 1$ where needed):`, [R`2\tan^{-1}x = \sin^{-1}\frac{2x}{1 + x^2} = \cos^{-1}\frac{1 - x^2}{1 + x^2} = \tan^{-1}\frac{2x}{1 - x^2}`]),
  P(R`<b>Triangle method</b>: to convert one ITF to another, draw a right triangle. E.g. $\tan^{-1}(x\sqrt2) = \theta$ gives $\sin\theta = \frac{x\sqrt2}{\sqrt{1 + 2x^2}}$.`, null, S(s.tri([[30, 120], [190, 120], [190, 30]]) + s.txt(105, 138, "1") + s.txt(196, 80, "x√2") + s.txt(85, 65, "√(1 + 2x²)") + s.arcm(30, 120, 22, 0, 29) + s.txt(58, 114, "θ"), 230, 145, "tan θ = x√2")),
  J(R`$\sin(\tan^{-1}(x\sqrt2)) = \cot(\sin^{-1}\sqrt{1 - x^2})$: convert both sides with triangles, then solve the algebraic equation.`, "2026 · 6 Apr · Shift 2")
]],
["Telescoping & Simplification", [
  P(R`<b>Telescoping</b>: write each term as a difference using $\tan^{-1}\frac{a - b}{1 + ab} = \tan^{-1}a - \tan^{-1}b$.`, R`\tan^{-1}\frac{1}{1 + r(r + 1)} = \tan^{-1}(r + 1) - \tan^{-1}r`),
  J(R`$\sum_{p=1}^{11}\tan^{-1}\frac{2^{p-1}}{1 + 2^{2p-1}}$: the term is $\tan^{-1}2^p - \tan^{-1}2^{p-1}$, so the sum is $\tan^{-1}2^{11} - \tan^{-1}1$.`, "2026 · 5 Apr · Shift 1"),
  J(R`$\cot^{-1}(1 + x + x^2) = \tan^{-1}\frac{1}{1 + x(x + 1)} = \tan^{-1}(x + 1) - \tan^{-1}x$; this turns an integral into two easy integrals.`, "2026 · 4 Apr · Shift 2"),
  P(R`<b>Simplify before differentiating</b>: e.g. $\tan^{-1}\frac{3\cos x - 4\sin x}{4\cos x + 3\sin x} = \tan^{-1}\frac34 - x$ (divide by $4\cos x$), and $\tan^{-1}\frac{x}{1 + \sqrt{1 - x^2}} = \frac12\sin^{-1}x$ (put $x = \sin\theta$).`),
  J(R`$y = \tan^{-1}\frac{3\cos x - 4\sin x}{4\cos x + 3\sin x} + 2\tan^{-1}\frac{x}{1 + \sqrt{1 - x^2}}$ simplifies to $\tan^{-1}\frac34 - x + \sin^{-1}x$, so $\frac{dy}{dx} = -1 + \frac{1}{\sqrt{1 - x^2}}$.`, "2026 · 4 Apr · Shift 1"),
  W(R`When you substitute $x = \tan\theta$ or $\sin\theta$, check that θ stays in the principal range for the given $x$-interval; otherwise add or subtract π.`)
]]
],
pyq: {
  pat: [
    [R`Telescoping sums of $\tan^{-1}$`, "2026 · 5 Apr · Shift 1"],
    [R`Simplify an ITF expression before differentiating / integrating`, "2026 · 4 Apr · Shift 1; 2026 · 4 Apr · Shift 2"],
    [R`Converting between ITFs with a triangle`, "2026 · 6 Apr · Shift 2"],
    [R`Sign / size of principal values`, "2026 · 8 Apr · Shift 2"],
    [R`Domain with $\cos^{-1}$ of an expression containing $[x]$`, "2026 · 4 Apr · Shift 1"]
  ],
  combo: [R`ITF + definite integration`, R`ITF + differentiation`, R`ITF + domain (GIF)`],
  trap: [R`$\cos^{-1}(\cos x) = x$ only for $x \in [0, \pi]$.`, R`$\tan^{-1}x + \tan^{-1}y$ needs $+\pi$ when $x, y > 0$ and $xy > 1$.`],
  mist: [R`Using $\sin^{-1}(\sin x) = x$ outside the principal range.`]
}
});
})();
