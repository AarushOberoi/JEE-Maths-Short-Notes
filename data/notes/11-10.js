(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
const sq = Math.sqrt;
NB.ch({
n: "11-10", short: "Conic Sections",
intro: R`Circle, parabola, ellipse and hyperbola: the <b>highest-weightage</b> part of coordinate geometry. For each, know the standard form, focus, directrix, latus rectum and the parametric point.`,
sec: [
["Circle", [
  P(R`<b>Standard</b> and <b>general</b> forms:`, [R`(x - h)^2 + (y - k)^2 = r^2`, [R`x^2 + y^2 + 2gx + 2fy + c = 0`, R`\text{centre } (-g, -f),\ r = \sqrt{g^2 + f^2 - c}`]], G({ xl: "x", yl: "y", xr: [-1, 5], yr: [-1, 4], fns: [], par: [{ f: t => [2 + 1.5 * Math.cos(t), 1.5 + 1.5 * Math.sin(t)], a: 0, b: 6.3 }], pts: [[2, 1.5, "(h, k)"]], t: "(x − h)² + (y − k)² = r²", w: 220 })),
  P(R`<b>Diameter form</b> with end-points $(x_1, y_1)$, $(x_2, y_2)$: $(x - x_1)(x - x_2) + (y - y_1)(y - y_2) = 0$.`),
  P(R`<b>Intercepts</b> on the axes: $2\sqrt{g^2 - c}$ on the x-axis and $2\sqrt{f^2 - c}$ on the y-axis. Touches the x-axis ⟺ $g^2 = c$.`),
  J(R`Circle with centre in the 1st quadrant, touching one axis and cutting <b>equal intercepts</b> (or "meeting the axes at exactly three points"): write the centre as $(r, k)$ or $(h, r)$ and use the intercept formula.`, "2026 · 2 Apr · Shift 1; 2026 · 6 Apr · Shift 2"),
  P(R`<b>Chord length</b>: if $p$ = distance of the centre from the line, chord $= 2\sqrt{r^2 - p^2}$. Line touches the circle ⟺ $p = r$.`, null, S(s.circ(110, 75, 55) + s.line(40, 110, 190, 95, 'class="red"') + s.dot(110, 75) + s.line(110, 75, 113, 103, 'class="thin" stroke-dasharray="4 3"') + s.txt(115, 92, "p") + s.line(110, 75, 160, 98, 'class="thin"') + s.txt(140, 80, "r"), 220, 140, "half-chord = √(r² − p²)")),
  P(R`<b>Tangent</b> at $(x_1, y_1)$: $T = 0$, i.e. $xx_1 + yy_1 + g(x + x_1) + f(y + y_1) + c = 0$. <b>Chord with mid-point</b> $(x_1, y_1)$: $T = S_1$. Tangent with slope $m$ to $x^2 + y^2 = a^2$: $y = mx \pm a\sqrt{1 + m^2}$.`),
  J(R`Two chords from a point on a circle <b>bisected by the y-axis</b>: the mid-point is $(0, t)$, and the chord with that mid-point passes through the point. Real distinct $t$ gives the condition; Vieta's formulas give the mid-point of RS.`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Two circles</b> with centre distance $d$: separate $d > r_1 + r_2$ (4 common tangents), touch externally $d = r_1 + r_2$ (3), intersect $|r_1 - r_2| < d < r_1 + r_2$ (2), touch internally $d = |r_1 - r_2|$ (1), one inside $d < |r_1 - r_2|$ (0).`),
  P(R`<b>Orthogonal circles</b>: $2g_1g_2 + 2f_1f_2 = c_1 + c_2$. Family through the meet of circle $S$ and line $L$: $S + \lambda L = 0$.`),
  J(R`Chord AB subtending a right angle at the origin: <b>homogenise</b> the circle with the line ($lx + my = 1$), set coefficient of $x^2$ + coefficient of $y^2$ = 0, then find the locus.`, "2026 · 8 Apr · Shift 2")
]],
["Parabola", [
  P(R`$y^2 = 4ax$: vertex $(0, 0)$, focus $(a, 0)$, directrix $x = -a$, latus rectum $4a$, parametric point $(at^2, 2at)$.`, null, G({ xl: "x", yl: "y", xr: [-1.5, 4], yr: [-3, 3], fns: [x => x >= 0 ? 2 * sq(x) : NaN, x => x >= 0 ? -2 * sq(x) : NaN], vx: [-1, 1], pts: [[1, 0, "S(a, 0)"], [1, 2, ""], [1, -2, ""]], t: "y² = 4ax: directrix x = −a, LR through S" })),
  T(["Equation", "Focus", "Directrix", "Axis"], [[R`$y^2 = 4ax$`, "(a, 0)", "x = −a", "y = 0"], [R`$y^2 = -4ax$`, "(−a, 0)", "x = a", "y = 0"], [R`$x^2 = 4ay$`, "(0, a)", "y = −a", "x = 0"], [R`$x^2 = -4ay$`, "(0, −a)", "y = a", "x = 0"]]),
  P(R`<b>Focal distance</b> of $(x, y)$ on $y^2 = 4ax$ is $x + a$. <b>Focal chord</b> through $t_1, t_2$: $t_1t_2 = -1$. Tangent at $t$: $ty = x + at^2$. Tangent with slope $m$: $y = mx + \frac am$.`),
  P(R`Chord joining $t_1, t_2$: $2x - (t_1 + t_2)y + 2at_1t_2 = 0$. Normal at $t$: $y = -tx + 2at + at^3$.`),
  J(R`Chords OP and OQ from the vertex with $OP \perp OQ$: $t_1t_2 = -4$. The chord PQ always passes through $(4a, 0)$; the locus of the mid-point of PQ is another parabola.`, "2026 · 8 Apr · Shift 2"),
  J(R`Right-angled triangle inscribed in $y^2 = 16x$ with the right angle at a fixed point B: the hypotenuse AC passes through a fixed point; find the locus of the centroid by eliminating the parameter.`, "2026 · 4 Apr · Shift 2"),
  P(R`<b>Shifted parabola</b> $x^2 + 6x + y + 13 = 0$: complete the square to get $(x + 3)^2 = -(y + 4)$, vertex $(-3, -4)$.`)
]],
["Ellipse", [
  P(R`$\frac{x^2}{a^2} + \frac{y^2}{b^2} = 1$, $a > b$:`, [R`b^2 = a^2(1 - e^2)`, R`\text{foci } (\pm ae, 0)`, R`\text{directrices } x = \pm\frac ae`, R`\text{latus rectum} = \frac{2b^2}{a},\qquad SP + S'P = 2a`], G({ xl: "x", yl: "y", xr: [-3.5, 3.5], yr: [-2.2, 2.2], fns: [], par: [{ f: t => [3 * Math.cos(t), 2 * Math.sin(t)], a: 0, b: 6.3 }], pts: [[2.236, 0, "S"], [-2.236, 0, "S′"]], vx: [4.02, -4.02], t: "x²/9 + y²/4 = 1", w: 260 })),
  P(R`If $b > a$ the major axis is along the y-axis: $a^2 = b^2(1 - e^2)$, foci $(0, \pm be)$, latus rectum $\frac{2a^2}{b}$.`),
  J(R`Ellipse with $a < b$ through a given point and given $e$: use $a^2 = b^2(1 - e^2)$ (major axis along y), then LR $= \frac{2a^2}{b}$.`, "2026 · 2 Apr · Shift 1"),
  P(R`<b>Parametric point</b> $(a\cos\theta, b\sin\theta)$. Tangent at $\theta$: $\frac{x\cos\theta}{a} + \frac{y\sin\theta}{b} = 1$. Tangent with slope $m$: $y = mx \pm\sqrt{a^2m^2 + b^2}$.`),
  P(R`<b>Focal distances</b>: $SP = a - ex$, $S'P = a + ex$. Chord with mid-point $(h, k)$: $T = S_1$.`),
  J(R`Locus of the mid-point of focal chords: chord with mid-point $(h, k)$ is $T = S_1$; make it pass through the focus $(ae, 0)$.`, "2026 · 6 Apr · Shift 2"),
  J(R`Ellipse and parabola sharing a <b>latus rectum</b>: the ends $(ae, \pm\frac{b^2}{a})$ of the ellipse LR equal $(k, \pm2k)$ of the parabola, giving $\frac{b^2}{a} = 2ae$, i.e. $1 - e^2 = 2e$.`, "2026 · 4 Apr · Shift 1"),
  J(R`Locus of B when the circle on AB as diameter touches a fixed circle internally: the sum of distances from two fixed points is constant, so B moves on an <b>ellipse</b>.`, "2026 · 2 Apr · Shift 2")
]],
["Hyperbola", [
  P(R`$\frac{x^2}{a^2} - \frac{y^2}{b^2} = 1$:`, [R`b^2 = a^2(e^2 - 1)`, R`\text{foci } (\pm ae, 0)`, R`\text{directrices } x = \pm\frac ae`, [R`\text{latus rectum} = \frac{2b^2}{a}`, R`|SP - S'P| = 2a`, R`\text{asymptotes } y = \pm\frac bax`]], G({ xl: "x", yl: "y", xr: [-4, 4], yr: [-3, 3], fns: [x => Math.abs(x) >= 1.5 ? sq(x * x / 2.25 - 1) : NaN, x => Math.abs(x) >= 1.5 ? -sq(x * x / 2.25 - 1) : NaN, x => x / 1.5, x => -x / 1.5], lab: ["hyperbola", "", "asymptotes", ""], t: "x²/a² − y²/b² = 1", w: 260 })),
  P(R`<b>Distance between foci</b> $= 2ae$, <b>between directrices</b> $= \frac{2a}{e}$. Their product is $4a^2$.`),
  J(R`Foci 6 apart and directrices $\frac83$ apart: $2ae = 6$, $\frac{2a}{e} = \frac83$ ⇒ $a^2 = 4$, $e = \frac32$. Then use the area of ΔAOB for the chord $x = \alpha$.`, "2026 · 4 Apr · Shift 2"),
  P(R`<b>Rectangular hyperbola</b> $xy = c^2$: $e = \sqrt2$, parametric point $(ct, \frac ct)$. Chord with mid-point $(h, k)$: $\frac xh + \frac yk = 2$.`),
  J(R`$xy = 12$ with chord PQ having a given mid-point: with $P(ct_1, c/t_1)$ and $Q(ct_2, c/t_2)$, the mid-point gives $t_1 + t_2$ and $\frac{1}{t_1} + \frac{1}{t_2}$; then area of ΔOPQ = $\frac12|x_1y_2 - x_2y_1|$.`, "2026 · 2 Apr · Shift 2"),
  P(R`Parametric point $(a\sec\theta, b\tan\theta)$. Tangent with slope $m$: $y = mx \pm\sqrt{a^2m^2 - b^2}$. Conjugate hyperbola: $\frac{x^2}{a^2} - \frac{y^2}{b^2} = -1$, and $\frac{1}{e_1^2} + \frac{1}{e_2^2} = 1$.`),
  W(R`Hyperbola with vertical transverse axis (foci on a vertical line such as $(3, 5), (3, -4)$): then $a$ is along y. Find $2ae$ from the foci and $e$ from the given equation (take $e > 1$).`)
]],
["Quick Comparison", [
  T(["", "Parabola", "Ellipse", "Hyperbola"], [["e", "= 1", "< 1", "> 1"], ["relation", "—", R`$b^2 = a^2(1 - e^2)$`, R`$b^2 = a^2(e^2 - 1)$`], ["latus rectum", "4a", R`$2b^2/a$`, R`$2b^2/a$`], ["tangent, slope m", R`$y = mx + \frac am$`, R`$c^2 = a^2m^2 + b^2$`, R`$c^2 = a^2m^2 - b^2$`], ["parametric", R`$(at^2, 2at)$`, R`$(a\cos\theta, b\sin\theta)$`, R`$(a\sec\theta, b\tan\theta)$`]])
]]
],
pyq: {
  pat: [
    [R`Ellipse/hyperbola from given e, foci, directrices → latus rectum or area`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 1; 2026 · 6 Apr · Shift 2"],
    [R`Locus of a mid-point or centroid on a parabola / ellipse`, "2026 · 4 Apr · Shift 2; 2026 · 6 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Circle: intercepts, chord length, touching the axes`, "2026 · 2 Apr · Shift 1; 2026 · 6 Apr · Shift 2"],
    [R`Chord with a given mid-point ($T = S_1$)`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1"],
    [R`Max/min distance between a point on a circle and a fixed point`, "2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2"]
  ],
  combo: [R`Conics + locus`, R`Circle + straight lines (perpendicular lines, chord on a line)`, R`Ellipse + hyperbola in one question`, R`Hyperbola + area under curves (Application of Integrals)`, R`Circle + determinants / eigenvalue-type conditions`],
  trap: [R`$a < b$ in an ellipse flips the major axis.`, R`For a circle "touching the x-axis", the radius = |y-coordinate of the centre|.`, R`$e$ of a hyperbola must be > 1; reject the other root.`],
  mist: [R`Using $b^2 = a^2(1 - e^2)$ for a hyperbola.`, R`Forgetting to complete the square for shifted conics.`]
}
});
})();
