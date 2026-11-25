(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-3", short: "Trigonometric Functions",
intro: R`Angles in <b>radians</b>, the unit circle, a small set of identities, and the general solution of equations. Almost every trig question is about <b>reducing</b> an expression with the right identity.`,
sec: [
["Angles & the Unit Circle", [
  P(R`<b>Radian measure</b>: $\theta = \frac{\text{arc}}{\text{radius}}$. $\pi$ rad = 180°, so 1 rad ≈ 57.3°.`, R`\text{radian} = \text{degree} \times \frac{\pi}{180},\qquad l = r\theta`),
  P(R`On the unit circle a point at angle θ is $(\cos\theta, \sin\theta)$. Signs by quadrant: <b>All, Sin, Tan, Cos</b> (positive in I, II, III, IV).`, null, S(s.axes(110, 80, 20, 200, 150, 10) + s.circ(110, 80, 55) + s.line(110, 80, 149, 41, 'class="red"') + s.line(149, 41, 149, 80, 'class="thin" stroke-dasharray="4 3"') + s.dot(149, 41) + s.txt(150, 34, "(cos θ, sin θ)") + s.arcm(110, 80, 16, 0, 45) + s.txt(130, 76, "θ") + s.txt(160, 120, "IV: cos +") + s.txt(30, 30, "II: sin +") + s.txt(152, 22, "") + s.txt(30, 130, "III: tan +") + s.txt(165, 62, "I: all +"), 220, 160, "Unit circle and ASTC signs")),
  T(["θ", "0", "π/6", "π/4", "π/3", "π/2"], [["sin", "0", "1/2", "1/√2", "√3/2", "1"], ["cos", "1", "√3/2", "1/√2", "1/2", "0"], ["tan", "0", "1/√3", "1", "√3", "∞"]]),
  P(R`<b>Allied angles</b>: for $\frac{n\pi}{2} \pm \theta$, the function <b>changes</b> (sin ↔ cos, tan ↔ cot) when $n$ is odd and stays the same when $n$ is even; the sign is that of the original function in the quadrant.`),
  L([R`$\sin 15° = \frac{\sqrt3 - 1}{2\sqrt2}$, $\cos 15° = \frac{\sqrt3 + 1}{2\sqrt2}$, $\tan 15° = 2 - \sqrt3$, $\tan 75° = 2 + \sqrt3$`, R`$\sin 18° = \frac{\sqrt5 - 1}{4}$, $\cos 36° = \frac{\sqrt5 + 1}{4}$`, R`$\tan 22.5° = \sqrt2 - 1$`])
]],
["Graphs of Trigonometric Functions", [
  GR("sin x, cos x, tan x", [
    { xl: "x", yl: "y", xr: [-6.3, 6.3], yr: [-1.5, 1.5], fns: [Math.sin], t: "sin x: period 2π, range [−1, 1]" },
    { xl: "x", yl: "y", xr: [-6.3, 6.3], yr: [-1.5, 1.5], fns: [Math.cos], t: "cos x: period 2π, even" },
    { xl: "x", yl: "y", xr: [-4.7, 4.7], yr: [-4, 4], fns: [x => Math.abs(Math.cos(x)) < 0.06 ? NaN : Math.tan(x)], vx: [-Math.PI / 2, Math.PI / 2], t: "tan x: period π, asymptotes x = ±π/2" }]),
  GR("cosec x, sec x, cot x", [
    { xl: "x", yl: "y", xr: [-6.3, 6.3], yr: [-4, 4], fns: [x => Math.abs(Math.sin(x)) < 0.08 ? NaN : 1 / Math.sin(x)], t: "cosec x: |y| ≥ 1" },
    { xl: "x", yl: "y", xr: [-6.3, 6.3], yr: [-4, 4], fns: [x => Math.abs(Math.cos(x)) < 0.08 ? NaN : 1 / Math.cos(x)], t: "sec x: |y| ≥ 1" },
    { xl: "x", yl: "y", xr: [-4.7, 4.7], yr: [-4, 4], fns: [x => Math.abs(Math.sin(x)) < 0.06 ? NaN : 1 / Math.tan(x)], t: "cot x: period π" }]),
  P(R`<b>Range of</b> $a\sin x + b\cos x + c$: write it as $\sqrt{a^2 + b^2}\sin(x + \alpha) + c$.`, R`-\sqrt{a^2 + b^2} + c \le a\sin x + b\cos x + c \le \sqrt{a^2 + b^2} + c`),
  J(R`Range of an expression like $3\sin^2x + 12\cos x - 3$: rewrite in one function ($\cos x = t \in [-1, 1]$) and find the range of the quadratic on that <b>closed</b> interval, not over all reals.`, "2026 · 5 Apr · Shift 1")
]],
["Identities", [
  P(R`<b>Compound angles</b>:`, [R`\sin(A \pm B) = \sin A\cos B \pm \cos A\sin B`, R`\cos(A \pm B) = \cos A\cos B \mp \sin A\sin B`, R`\tan(A \pm B) = \frac{\tan A \pm \tan B}{1 \mp \tan A\tan B}`]),
  P(R`$\sin(A + B)\sin(A - B) = \sin^2A - \sin^2B$ and $\cos(A + B)\cos(A - B) = \cos^2A - \sin^2B$.`),
  P(R`<b>Multiple angles</b>:`, [R`\sin 2A = 2\sin A\cos A = \frac{2\tan A}{1 + \tan^2A}`, R`\cos 2A = \cos^2A - \sin^2A = 1 - 2\sin^2A = \frac{1 - \tan^2A}{1 + \tan^2A}`, R`\sin 3A = 3\sin A - 4\sin^3A,\quad \cos 3A = 4\cos^3A - 3\cos A`]),
  P(R`<b>Sum ↔ product</b> (C + D form):`, [R`\sin C + \sin D = 2\sin\tfrac{C + D}{2}\cos\tfrac{C - D}{2}`, R`\cos C + \cos D = 2\cos\tfrac{C + D}{2}\cos\tfrac{C - D}{2}`, R`\cos C - \cos D = -2\sin\tfrac{C + D}{2}\sin\tfrac{C - D}{2}`, R`2\sin A\cos B = \sin(A + B) + \sin(A - B)`]),
  P(R`<b>Product of sines/cosines</b>:`, [R`\sin\theta\sin(60° - \theta)\sin(60° + \theta) = \tfrac14\sin 3\theta`, R`\cos\theta\cos 2\theta\cos 4\theta\cdots\cos 2^{n-1}\theta = \frac{\sin 2^n\theta}{2^n\sin\theta}`]),
  J(R`$\sin\frac{\pi}{18}\sin\frac{5\pi}{18}\sin\frac{7\pi}{18}$: write it as $\sin 10°\sin 50°\sin 70°$ = $\sin\theta\sin(60° - \theta)\sin(60° + \theta)$ with θ = 10°, giving $\frac14\sin 30° = \frac18$.`, "2026 · 2 Apr · Shift 1"),
  J(R`<b>Telescoping</b>: $\frac{\sin x}{\cos 3x} = \frac12(\tan 3x - \tan x)$. So $\frac{\sin 3°}{\cos 9°} + \frac{\sin 9°}{\cos 27°} + \frac{\sin 27°}{\cos 81°} = \frac12(\tan 81° - \tan 3°)$.`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Conditional identities</b> (A + B + C = π): $\tan A + \tan B + \tan C = \tan A\tan B\tan C$; $\sin 2A + \sin 2B + \sin 2C = 4\sin A\sin B\sin C$.`),
  W(R`$\cos^8\theta - \sin^8\theta = (\cos^4\theta - \sin^4\theta)(\cos^4\theta + \sin^4\theta) = \cos 2\theta\,(1 - \tfrac12\sin^2 2\theta)$. Factor step by step; never expand.`)
]],
["Trigonometric Equations", [
  P(R`<b>General solutions</b> ($n \in \mathbb Z$):`, [R`\sin\theta = \sin\alpha \Rightarrow \theta = n\pi + (-1)^n\alpha`, R`\cos\theta = \cos\alpha \Rightarrow \theta = 2n\pi \pm \alpha`, R`\tan\theta = \tan\alpha \Rightarrow \theta = n\pi + \alpha`, R`\sin^2\theta = \sin^2\alpha \Rightarrow \theta = n\pi \pm \alpha`]),
  P(R`<b>Counting solutions in an interval</b>: reduce to one function, then count the intersections of $y = $ LHS with $y = $ RHS on the graph.`, null, G({ xl: "x", yl: "y", xr: [-3.3, 3.3], yr: [-1.5, 1.5], fns: [Math.sin, x => 0.5], vx: [-Math.PI, Math.PI], t: "sin x = 1/2 on [−π, π]: 2 solutions" })),
  J(R`$\sin x(\sin x + \cos x) = a$ with $a \in \mathbb Z$: the LHS = $\frac12 + \frac{1}{\sqrt2}\sin(2x - \frac\pi4)$ lies in $[\frac{1 - \sqrt2}{2}, \frac{1 + \sqrt2}{2}]$, so only $a = 0, 1$ are possible. Then count solutions for each.`, "2026 · 2 Apr · Shift 1"),
  J(R`Product = product (like $\cos\theta\cos\frac{5\theta}{2} = \cos 7\theta\cos\frac{7\theta}{2}$): convert both sides to sums with $2\cos A\cos B$; terms cancel and you get $\cos C = \cos D$ or $\sin \cdot \sin = 0$.`, "2026 · 5 Apr · Shift 2"),
  W(R`Squaring both sides or cancelling a common factor like $\cos x$ adds or loses roots. Check every root in the <b>original</b> equation and keep the domain (e.g. $\tan^2\theta \ne 1$) in mind.`)
]]
],
pyq: {
  pat: [
    [R`Number of solutions of a trig equation in a given interval`, "2026 · 2 Apr · Shift 1; 2026 · 5 Apr · Shift 2"],
    [R`Products like $\sin 10°\sin 50°\sin 70°$, telescoping tan sums`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1"],
    [R`Range of a trig expression (quadratic in sin or cos)`, "2026 · 5 Apr · Shift 1"],
    [R`$\tan A$, $\tan B$ as roots of a quadratic → $\tan(A + B)$`, "2026 · 5 Apr · Shift 1"],
    [R`Count of integers $a$ for which an equation like $2(\cos^8\theta - \sin^8\theta)\sec 2\theta = a^2$ has a solution`, "2026 · 2 Apr · Shift 2"]
  ],
  combo: [R`Trig + quadratic equations (roots are $\tan A$, $\tan B$)`, R`Trig + vectors (angle after rotation)`, R`Trig + maxima ($\sin x\cos^3x$ type)`],
  trap: [R`$\sin^2\frac{A + B}{2} = \frac{1 - \cos(A + B)}{2}$ and $\cos(A + B) = \frac{1 - \tan^2}{1 + \tan^2}$ of $\frac{A+B}{2}$; get $\tan(A + B)$ first.`, R`Exclude points where the original expression is undefined ($\sec 2\theta$, $\tan\theta$).`],
  mist: [R`Using degrees in formulas meant for radians (arc length, limits).`, R`Counting endpoints twice when the interval is closed.`]
}
});
})();
