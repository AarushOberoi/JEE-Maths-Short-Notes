(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-11", short: "Three Dimensional Geometry",
intro: R`Lines in space: direction cosines, equations of a line, angle between lines, <b>foot of perpendicular / image</b> and <b>shortest distance</b>. The most-asked chapter in the April 2026 papers.`,
sec: [
["Direction Cosines & Ratios", [
  P(R`If a line makes angles α, β, γ with the axes, its <b>direction cosines</b> are $l = \cos\alpha$, $m = \cos\beta$, $n = \cos\gamma$, with $l^2 + m^2 + n^2 = 1$. <b>Direction ratios</b> $a, b, c$ are any multiples of them.`, [[R`l = \frac{a}{\sqrt{a^2 + b^2 + c^2}},\ \dots`, R`\text{d.r.s of } PQ:\ (x_2 - x_1, y_2 - y_1, z_2 - z_1)`]], S(s.arr(70, 110, 200, 110) + s.arr(70, 110, 70, 10) + s.arr(70, 110, 20, 145) + s.arr(70, 110, 160, 45, 'class="red"') + s.arcm(70, 110, 30, 0, 36) + s.txt(103, 102, "β") + s.arcm(70, 110, 22, 36, 90) + s.txt(82, 80, "γ") + s.txt(190, 125, "y") + s.txt(76, 18, "z") + s.txt(14, 140, "x") + s.txt(140, 38, "line"), 220, 150, "Angles with the axes (α with x)")),
  P(R`<b>Angle between two lines</b> with d.r.s $(a_1, b_1, c_1)$ and $(a_2, b_2, c_2)$:`, R`\cos\theta = \frac{|a_1a_2 + b_1b_2 + c_1c_2|}{\sqrt{a_1^2 + b_1^2 + c_1^2}\sqrt{a_2^2 + b_2^2 + c_2^2}}`),
  P(R`Perpendicular ⟺ $a_1a_2 + b_1b_2 + c_1c_2 = 0$; parallel ⟺ $\frac{a_1}{a_2} = \frac{b_1}{b_2} = \frac{c_1}{c_2}$. A direction perpendicular to two lines is the <b>cross product</b> of their directions.`)
]],
["Equation of a Line", [
  P(R`Through point $\vec a$, parallel to $\vec b$:`, [R`\vec r = \vec a + \lambda\vec b`, R`\frac{x - x_1}{a} = \frac{y - y_1}{b} = \frac{z - z_1}{c} = \lambda`], S(s.arr(20, 130, 80, 30) + s.line(40, 120, 210, 40, 'class="blue"') + s.lab(70, 106, "A(a)") + s.arr(110, 87, 160, 63, 'class="red"') + s.txt(140, 55, "b") + s.lab(180, 54, "P(r)") + s.txt(30, 20, "z"), 220, 140, "r = a + λb")),
  P(R`<b>General point</b> on the line: $(x_1 + a\lambda,\ y_1 + b\lambda,\ z_1 + c\lambda)$. Almost every 3D problem starts by writing this point.`),
  P(R`Through two points: $\frac{x - x_1}{x_2 - x_1} = \frac{y - y_1}{y_2 - y_1} = \frac{z - z_1}{z_2 - z_1}$.`),
  J(R`Line through a point, perpendicular to two given vectors: direction = their cross product. Then the foot of the perpendicular from the origin uses the general point.`, "2026 · 2 Apr · Shift 1"),
  J(R`Line through the origin perpendicular to two lines: direction = cross product of their directions. Then find its meet with one line, and a point on the other at a given distance.`, "2026 · 8 Apr · Shift 2")
]],
["Foot of Perpendicular, Image & Distance from a Line", [
  P(R`<b>Foot of perpendicular</b> from P to the line: take the general point Q, and set $\vec{PQ}\cdot\vec b = 0$ to find λ.`, null, S(s.line(15, 120, 215, 60, 'class="blue"') + s.lab(95, 25, "P") + s.lab(123, 88, "Q (foot)") + s.line(95, 25, 123, 88, 'class="red"') + s.line(123, 88, 151, 151, 'class="thin" stroke-dasharray="4 3"') + s.lab(151, 151, "P′"), 230, 165, "Foot Q and image P′ = 2Q − P")),
  P(R`<b>Image</b> P′ of P in the line: Q is the mid-point of PP′, so $P' = 2Q - P$. <b>Distance</b> of P from the line $= |PQ|$, or:`, R`d = \frac{|\vec{AP}\times\vec b|}{|\vec b|}`),
  J(R`Image of a point in a line given in coordinates with unknowns: write the image as $2Q - P$; equate coordinates to the given expression and solve for α.`, "2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 2"),
  J(R`Square of the distance of a point from a line: foot of perpendicular, then distance. Faster: $|\vec{AP}|^2 - \left(\frac{\vec{AP}\cdot\vec b}{|\vec b|}\right)^2$.`, "2026 · 5 Apr · Shift 1"),
  J(R`Distance of a point from a line <b>measured along another line</b>: move from the point along the given direction (general point of that line), find where it meets the first line, then measure.`, "2026 · 4 Apr · Shift 1"),
  J(R`Mid-point of P and its foot A given: A = 2M − P; A lies on the line and $\vec{PA}\cdot\vec b = 0$.`, "2026 · 2 Apr · Shift 2")
]],
["Intersecting & Skew Lines", [
  P(R`<b>Intersection</b>: equate the general points of the two lines; solve two coordinates for λ, μ and check the third.`),
  J(R`Intersection of $\vec r = (\hat i + \hat j - \hat k) + \lambda(a\hat i - \hat j)$ and $\vec r = (4\hat i - \hat k) + \mu(2\hat i + a\hat k)$: equate components, solve, and then the distance from the origin.`, "2026 · 5 Apr · Shift 1"),
  P(R`<b>Skew lines</b>: neither parallel nor intersecting. <b>Shortest distance</b> along the common perpendicular:`, R`SD = \frac{|(\vec a_2 - \vec a_1)\cdot(\vec b_1\times\vec b_2)|}{|\vec b_1\times\vec b_2|}`, S(s.line(15, 40, 205, 70, 'class="blue"') + s.line(15, 140, 205, 105) + s.line(110, 55, 110, 122, 'class="red"') + s.txt(115, 92, "SD", 'class="red"') + s.txt(190, 62, "L₁") + s.txt(190, 122, "L₂"), 220, 150, "Common perpendicular")),
  P(R`Lines are <b>coplanar (intersect)</b> ⟺ $(\vec a_2 - \vec a_1)\cdot(\vec b_1\times\vec b_2) = 0$.`),
  P(R`<b>Parallel lines</b> ($\vec b_1 = \vec b_2 = \vec b$):`, R`d = \frac{|(\vec a_2 - \vec a_1)\times\vec b|}{|\vec b|}`),
  J(R`Shortest distance between two lines (symmetric or vector form) is asked in almost every session. Compute $\vec b_1\times\vec b_2$ carefully once and reuse it.`, "2026 · 4 Apr · Shift 2; 2026 · 6 Apr · Shift 2"),
  J(R`Distance between two <b>parallel</b> lines after finding unknowns from a foot of perpendicular: use the parallel-lines formula, not the skew formula (its denominator is 0).`, "2026 · 8 Apr · Shift 2"),
  J(R`A line with given d.r.s meets two lines at P and Q: write P, Q as general points; $\vec{PQ} \parallel$ the given d.r.s gives λ, μ.`, "2026 · 4 Apr · Shift 1"),
  J(R`P, Q on a line at distance 6 from R: the general point at distance 6 gives a quadratic in λ; its two roots are P and Q. Then the centroid of PQR.`, "2026 · 5 Apr · Shift 2"),
  W(R`Before applying the SD formula, check that the lines are not parallel. If $\vec b_1\times\vec b_2 = \vec 0$, use the parallel-line formula.`)
]]
],
pyq: {
  pat: [
    [R`Shortest distance between skew / parallel lines`, "2026 · 4 Apr · Shift 2; 2026 · 6 Apr · Shift 2; 2026 · 8 Apr · Shift 2"],
    [R`Foot of perpendicular / image of a point in a line`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 2; 2026 · 6 Apr · Shift 2"],
    [R`Distance of a point from a line (and along another line)`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Point of intersection of two lines`, "2026 · 2 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Line perpendicular to two given directions (cross product)`, "2026 · 2 Apr · Shift 1; 2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`3D + vectors (cross product, areas of parallelograms from images)`, R`3D + quadratic (two points at a fixed distance)`, R`3D + centroid of a triangle`],
  trap: [R`Direction ratios are not unique; direction cosines are (up to sign).`, R`For a line through two points, the d.r.s are the difference of the points, not the points themselves.`],
  mist: [R`Using the skew-line SD formula for parallel lines.`, R`Forgetting to check the third equation when finding an intersection.`]
}
});
})();
