(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-4", short: "Complex Numbers and Quadratic Equations",
intro: R`A complex number is a point in the <b>Argand plane</b>. Modulus = distance, argument = angle, so many questions become <b>geometry</b>. Quadratics are about the <b>roots–coefficients</b> relation and the <b>discriminant</b>.`,
sec: [
["Complex Numbers: Algebra", [
  P(R`$z = x + iy$, $i^2 = -1$. $\text{Re}(z) = x$, $\text{Im}(z) = y$. Two complex numbers are equal ⟺ real parts and imaginary parts are equal.`, R`i^{4k} = 1,\quad i^{4k+1} = i,\quad i^{4k+2} = -1,\quad i^{4k+3} = -i`),
  P(R`<b>Conjugate</b> $\bar z = x - iy$:`, [R`z + \bar z = 2\,\text{Re}(z),\quad z - \bar z = 2i\,\text{Im}(z),\quad z\bar z = |z|^2`, R`\overline{z_1 \pm z_2} = \bar z_1 \pm \bar z_2,\quad \overline{z_1z_2} = \bar z_1\bar z_2`]),
  P(R`<b>Division</b>: multiply numerator and denominator by the conjugate of the denominator.`, R`\frac{1}{a + ib} = \frac{a - ib}{a^2 + b^2}`),
  J(R`Equations like $50\left(\frac{2x}{1 + 3i} - \frac{y}{1 - 2i}\right) = 31 + 17i$: rationalise each term, then <b>equate real and imaginary parts</b> to get two linear equations in $x, y$.`, "2026 · 2 Apr · Shift 1"),
  P(R`<b>Square root</b> of $a + ib$: put $(x + iy)^2 = a + ib$, so $x^2 - y^2 = a$ and $x^2 + y^2 = \sqrt{a^2 + b^2}$.`)
]],
["Modulus, Argument & Polar Form", [
  P(R`$|z| = r = \sqrt{x^2 + y^2}$, $\arg z = \theta$ with $\tan\theta = y/x$. <b>Principal argument</b> $\theta \in (-\pi, \pi]$; fix the quadrant from the signs of $x, y$.`, null, S(s.axes(40, 120, 20, 210, 140, 10, "Re", "Im") + s.arr(40, 120, 160, 45, 'class="red"') + s.dot(160, 45) + s.txt(150, 36, "z = x + iy") + s.line(160, 45, 160, 120, 'class="thin" stroke-dasharray="4 3"') + s.txt(165, 88, "y") + s.txt(98, 135, "x") + s.txt(88, 76, "r") + s.arcm(40, 120, 22, 0, 32) + s.txt(66, 114, "θ"), 220, 145, "Argand plane")),
  P(R`<b>Polar / Euler form</b>:`, [R`z = r(\cos\theta + i\sin\theta) = re^{i\theta}`, R`|z_1z_2| = |z_1||z_2|,\qquad \arg(z_1z_2) = \arg z_1 + \arg z_2`, R`\arg\frac{z_1}{z_2} = \arg z_1 - \arg z_2,\qquad \arg\bar z = -\arg z`]),
  P(R`<b>De Moivre's theorem</b>: $(\cos\theta + i\sin\theta)^n = \cos n\theta + i\sin n\theta$. Convert to polar form before raising to powers.`),
  J(R`$\sum z^8$ over the roots of $z^2 + \sqrt6iz - 3 = 0$: find the roots, write them as $re^{i\theta}$, then $z^8 = r^8e^{8i\theta}$.`, "2026 · 6 Apr · Shift 2"),
  P(R`<b>Triangle inequality</b>: $\big||z_1| - |z_2|\big| \le |z_1 \pm z_2| \le |z_1| + |z_2|$. Also $|z_1 + z_2|^2 + |z_1 - z_2|^2 = 2(|z_1|^2 + |z_2|^2)$.`),
  P(R`<b>Cube roots of unity</b>: $1, \omega, \omega^2$ with $\omega = \frac{-1 + i\sqrt3}{2}$:`, R`1 + \omega + \omega^2 = 0,\qquad \omega^3 = 1,\qquad \bar\omega = \omega^2`, null, G({ xl: "Re", yl: "Im", xr: [-1.6, 1.6], yr: [-1.2, 1.2], fns: [], par: [{ f: t => [Math.cos(t), Math.sin(t)], a: 0, b: 6.3 }], pts: [[1, 0, "1"], [-0.5, 0.866, "ω"], [-0.5, -0.866, "ω²"]], t: "1, ω, ω² on the unit circle, 120° apart", w: 230 }))
]],
["Geometry of Complex Numbers (Loci)", [
  T(["Equation", "Locus"], [[R`$|z - z_0| = r$`, "circle, centre $z_0$, radius $r$"], [R`$|z - z_1| = |z - z_2|$`, "perpendicular bisector of $z_1z_2$"], [R`$|z - z_1| + |z - z_2| = 2a > |z_1 - z_2|$`, "ellipse with foci $z_1, z_2$"], [R`$\big||z - z_1| - |z - z_2|\big| = 2a < |z_1 - z_2|$`, "hyperbola"], [R`$\arg\frac{z - z_1}{z - z_2} = \alpha$`, "arc of a circle through $z_1, z_2$"], [R`$\frac{|z - z_1|}{|z - z_2|} = k \ne 1$`, "circle (Apollonius)"]]),
  P(R`<b>Distance between points on two circles</b>: with centres distance $d$ apart and radii $r_1 > r_2$ (one inside the other), $\min = r_1 - r_2 - d$, $\max = r_1 + r_2 + d$.`, null, S(s.circ(110, 75, 65) + s.circ(130, 70, 25, 'class="thin"') + s.dot(110, 75) + s.dot(130, 70) + s.txt(98, 92, "O") + s.line(110, 75, 175, 75, 'class="thin"') + s.txt(148, 90, "r₁") + s.line(130, 70, 155, 70, 'class="red"') + s.txt(160, 66, "r₂"), 220, 150, "C₂ inside C₁")),
  J(R`$C_1 : |z| = r$ and $C_2 : |z - 3 - 4i| = 5$ inside it: $d = 5$, so $\min|z_1 - z_2| = r - 5 - 5 = 2$ gives $r$, then $\max = r + 5 + 5$.`, "2026 · 2 Apr · Shift 2"),
  J(R`$|z - (3 + 5i)| + |z - (5 + 11i)| = 4\sqrt5$ is an <b>ellipse</b> (if $4\sqrt5$ > distance between the foci). Count its intersections with the given circle.`, "2026 · 8 Apr · Shift 2"),
  W(R`$|z + 2| = |z - 2|$ is the <b>imaginary axis</b> (perpendicular bisector of $-2$ and $2$), so $z = iy$. Substitute before using the arg condition.`)
]],
["Quadratic Equations", [
  P(R`$ax^2 + bx + c = 0$ ($a \ne 0$): roots and their relations:`, [R`x = \frac{-b \pm \sqrt{D}}{2a},\quad D = b^2 - 4ac`, R`\alpha + \beta = -\frac ba,\qquad \alpha\beta = \frac ca,\qquad |\alpha - \beta| = \frac{\sqrt D}{|a|}`]),
  P(R`<b>Nature of roots</b> (real coefficients): $D > 0$ real and distinct, $D = 0$ equal, $D < 0$ complex conjugates. Rational coefficients and $D$ a perfect square ⇒ rational roots.`, null, G({ xl: "x", yl: "y", xr: [-3, 3], yr: [-2, 4], fns: [x => x * x - 1, x => x * x, x => x * x + 1], lab: ["D > 0", "D = 0", "D < 0"], t: "y = ax² + bx + c, a > 0" })),
  P(R`<b>Forming an equation</b> with roots α, β: $x^2 - (\alpha + \beta)x + \alpha\beta = 0$. For roots $f(\alpha), f(\beta)$, use symmetric functions:`, R`\alpha^2 + \beta^2 = (\alpha + \beta)^2 - 2\alpha\beta,\qquad \alpha^3 + \beta^3 = (\alpha + \beta)^3 - 3\alpha\beta(\alpha + \beta)`),
  P(R`<b>Sign of the quadratic</b>: $ax^2 + bx + c > 0$ for all real $x$ ⟺ $a > 0$ and $D < 0$. $\le 0$ for all $x$ ⟺ $a < 0$ and $D \le 0$.`),
  J(R`Probability that $ax^2 + 2\sqrt2bx + c > 0\ \forall x$ for $a, b, c \in \{1, 2, 3, 4\}$: the condition is $D < 0 \iff 2b^2 < ac$. Count the triples.`, "2026 · 2 Apr · Shift 1"),
  P(R`<b>Common root</b> of $a_1x^2 + b_1x + c_1 = 0$ and $a_2x^2 + b_2x + c_2 = 0$:`, R`(c_1a_2 - c_2a_1)^2 = (b_1c_2 - b_2c_1)(a_1b_2 - a_2b_1)`),
  P(R`<b>Complex roots in pairs</b>: if the coefficients are real and $1 + i\sqrt2$ is a root, so is $1 - i\sqrt2$. With real coefficients, a cubic with one complex root has its conjugate as another root.`)
]],
["Location of Roots", [
  P(R`For $f(x) = ax^2 + bx + c$ with $a > 0$, both roots lie in an interval when all conditions below hold:`, null, G({ xl: "x", yl: "y", xr: [-0.5, 4.5], yr: [-1.5, 3], fns: [x => (x - 1.3) * (x - 2.7)], vx: [0.5, 3.5], pts: [[0.5, 0, "k₁"], [3.5, 0, "k₂"]], t: "both roots in (k₁, k₂)" })),
  T(["Roots", "Conditions (a > 0)"], [["both > k", R`$D \ge 0$, $-\frac{b}{2a} > k$, $f(k) > 0$`], ["both < k", R`$D \ge 0$, $-\frac{b}{2a} < k$, $f(k) > 0$`], ["k between the roots", R`$f(k) < 0$`], ["both in $(k_1, k_2)$", R`$D \ge 0$, $k_1 < -\frac{b}{2a} < k_2$, $f(k_1) > 0$, $f(k_2) > 0$`], ["exactly one in $(k_1, k_2)$", R`$f(k_1)f(k_2) < 0$`]]),
  J(R`"Both roots positive": $D \ge 0$ (or $> 0$ if distinct), sum $> 0$, product $> 0$. Combine the conditions on λ and count integer values.`, "2026 · 4 Apr · Shift 2"),
  W(R`If the leading coefficient contains the parameter (like $\lambda + 2$), multiply by $a$: use $a\,f(k) > 0$ instead of $f(k) > 0$.`)
]],
["Modulus & Special Equations", [
  P(R`$|a + b| = |a| + |b| \iff ab \ge 0$; $|a - b| = |a| + |b| \iff ab \le 0$.`),
  J(R`$|x^2 + x - 9| = |x| + |x^2 - 9|$: with $a = x$, $b = x^2 - 9$, it holds exactly when $x(x^2 - 9) \ge 0$, i.e. $x \in [-3, 0] \cup [3, \infty)$.`, "2026 · 4 Apr · Shift 1"),
  P(R`Equations reducible to quadratics: put $t = x + \frac1x$, $t = a^x$, $t = |x|$, or $t = \log x$. Always check the range of $t$ (e.g. $|x + \frac1x| \ge 2$, $a^x > 0$).`)
]]
],
pyq: {
  pat: [
    [R`Roots of two related quadratics (A.P./G.P. of roots, shifted roots)`, "2026 · 2 Apr · Shift 2; 2026 · 5 Apr · Shift 2"],
    [R`Complex loci: circle, perpendicular bisector, ellipse; min/max distance`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1; 2026 · 8 Apr · Shift 2"],
    [R`$|z_1|^2 + |z_2|^2$ or $\sum|z - a|^2$ over roots of a quadratic`, "2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 2"],
    [R`Condition on a parameter for both roots positive / in an interval`, "2026 · 4 Apr · Shift 2; 2026 · 6 Apr · Shift 2"],
    [R`Powers of complex roots via polar form`, "2026 · 6 Apr · Shift 2"]
  ],
  combo: [R`Quadratic + probability (D < 0 counting)`, R`Quadratic + G.P. / series`, R`Complex roots of a cubic + definite integral`, R`Quadratic + trig ($\tan A$, $\tan B$ as roots)`],
  trap: [R`For complex-coefficient quadratics, $\alpha + \beta = -a$ and $\alpha\beta = b$ still hold, but the discriminant test does not.`, R`$\arg$ needs the quadrant; $\tan^{-1}(y/x)$ alone is not enough.`],
  mist: [R`Treating $|z_1 - z_2|$ min/max as just the difference of radii (forgetting the centre distance).`, R`Forgetting $a \ne 0$ (the equation must stay quadratic).`]
}
});
})();
