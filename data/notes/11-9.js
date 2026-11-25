(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-9", short: "Straight Lines",
intro: R`Coordinates turn geometry into algebra. Know the forms of a line, the distance and angle formulas, and the <b>centres of a triangle</b>.`,
sec: [
["Points: Distance, Section, Area", [
  P(R`<b>Distance</b> and <b>section formula</b> ($P$ divides $AB$ internally in $m : n$):`, [R`AB = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2}`, R`P = \left(\frac{mx_2 + nx_1}{m + n},\ \frac{my_2 + ny_1}{m + n}\right)`], S(s.line(20, 110, 200, 30) + s.lab(20, 110, "A") + s.lab(200, 30, "B") + s.lab(92, 78, "P") + s.txt(50, 105, "m", 'class="red"') + s.txt(150, 62, "n", 'class="red"'), 220, 125, "P divides AB in m : n")),
  P(R`For <b>external</b> division replace $n$ by $-n$. The mid-point is $\left(\frac{x_1 + x_2}{2}, \frac{y_1 + y_2}{2}\right)$.`),
  P(R`<b>Area of a triangle</b> (zero ⟺ collinear points):`, R`\Delta = \frac12\left|x_1(y_2 - y_3) + x_2(y_3 - y_1) + x_3(y_1 - y_2)\right|`)
]],
["Centres of a Triangle", [
  T(["Centre", "Meeting point of", "Coordinates"], [["Centroid G", "medians", R`$\left(\frac{x_1 + x_2 + x_3}{3}, \frac{y_1 + y_2 + y_3}{3}\right)$`], ["Incentre I", "angle bisectors", R`$\left(\frac{ax_1 + bx_2 + cx_3}{a + b + c}, \dots\right)$, $a = BC$ etc.`], ["Circumcentre O", "perpendicular bisectors", "equidistant from the vertices"], ["Orthocentre H", "altitudes", "from two altitude equations"]]),
  P(R`<b>Euler line</b>: O, G, H are collinear and G divides OH in $1 : 2$ ($OG : GH = 1 : 2$). In an <b>equilateral</b> triangle all four centres coincide.`, null, S(s.tri([[30, 125], [200, 125], [80, 20]]) + s.lab(103, 90, "G") + s.lab(115, 104, "O") + s.lab(80, 63, "H") + s.line(80, 63, 115, 104, 'class="red" stroke-dasharray="4 3"'), 220, 135, "Euler line H–G–O")),
  P(R`In a <b>right-angled</b> triangle the orthocentre is the right-angle vertex and the circumcentre is the mid-point of the hypotenuse.`),
  J(R`Triangle given by the mid-points of its sides: the vertices are $A = D_2 + D_3 - D_1$ etc. (each vertex = sum of the two adjacent mid-points − the opposite one). Then apply the incentre formula.`, "2026 · 2 Apr · Shift 1"),
  J(R`Given a vertex, a side mid-point and the centroid: find the other vertices, then the circumcentre (or use $H = 3G - 2O$).`, "2026 · 4 Apr · Shift 1"),
  J(R`Equilateral triangle with vertex $P$ and opposite side on a line: the orthocentre = centroid, at $\frac23$ of the way from $P$ to the foot of the perpendicular.`, "2026 · 5 Apr · Shift 1")
]],
["Equation of a Line", [
  P(R`<b>Slope</b> $m = \tan\theta = \frac{y_2 - y_1}{x_2 - x_1}$. Parallel: $m_1 = m_2$. Perpendicular: $m_1m_2 = -1$.`),
  T(["Form", "Equation"], [["slope–intercept", R`$y = mx + c$`], ["point–slope", R`$y - y_1 = m(x - x_1)$`], ["two-point", R`$y - y_1 = \frac{y_2 - y_1}{x_2 - x_1}(x - x_1)$`], ["intercept", R`$\frac xa + \frac yb = 1$`], ["normal", R`$x\cos\alpha + y\sin\alpha = p$`], ["parametric", R`$x = x_1 + r\cos\theta,\ y = y_1 + r\sin\theta$`]]),
  P(R`The <b>parametric form</b> gives the point at distance $r$ along the line from $(x_1, y_1)$; useful for "distance along a direction".`, null, G({ xl: "x", yl: "y", xr: [-1, 5], yr: [-1, 4], fns: [x => 3 - 0.75 * x], pts: [[0, 3, "b"], [4, 0, "a"]], t: "x/a + y/b = 1" })),
  P(R`<b>Angle between two lines</b>:`, R`\tan\theta = \left|\frac{m_1 - m_2}{1 + m_1m_2}\right|`)
]],
["Distances, Bisectors & Families", [
  P(R`<b>Distance of a point from a line</b> and between <b>parallel lines</b>:`, [R`d = \frac{|ax_1 + by_1 + c|}{\sqrt{a^2 + b^2}},\qquad d = \frac{|c_1 - c_2|}{\sqrt{a^2 + b^2}}`]),
  P(R`<b>Foot of perpendicular</b> $(h, k)$ and <b>image</b> $(h', k')$ of $(x_1, y_1)$ in $ax + by + c = 0$:`, [R`\frac{h - x_1}{a} = \frac{k - y_1}{b} = -\frac{ax_1 + by_1 + c}{a^2 + b^2}`, R`\frac{h' - x_1}{a} = \frac{k' - y_1}{b} = -2\,\frac{ax_1 + by_1 + c}{a^2 + b^2}`], S(s.line(20, 120, 200, 30) + s.lab(60, 30, "P") + s.lab(150, 130, "P′") + s.line(60, 30, 150, 130, 'class="red" stroke-dasharray="4 3"') + s.lab(105, 80, "foot"), 220, 140, "Image in a line (mirror)")),
  J(R`Reflection of rays in a mirror line: the reflected ray passes through the <b>image</b> of the source point in the mirror and the point of incidence.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Angle bisectors</b> of $a_1x + b_1y + c_1 = 0$ and $a_2x + b_2y + c_2 = 0$:`, R`\frac{a_1x + b_1y + c_1}{\sqrt{a_1^2 + b_1^2}} = \pm\frac{a_2x + b_2y + c_2}{\sqrt{a_2^2 + b_2^2}}`),
  P(R`With $c_1, c_2$ of the same sign, the "+" bisector contains the origin; it bisects the <b>obtuse</b> angle if $a_1a_2 + b_1b_2 > 0$, otherwise the acute angle.`),
  J(R`Bisector of the obtuse angle between $x - y = 0$ and $3x + y = 0$ meeting $x + 3 = 0$: by the <b>angle-bisector theorem</b>, the bisector divides the opposite side in the ratio of the adjacent sides.`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Family of lines</b> through the intersection of $L_1 = 0$ and $L_2 = 0$: $L_1 + \lambda L_2 = 0$.`),
  J(R`A line through the meet of two lines cuts the axes at P, Q: let it be $L_1 + \lambda L_2 = 0$, find the intercepts, and eliminate λ to get the locus of the mid-point of PQ.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Concurrency</b> of three lines: the determinant of their coefficients is zero.`, R`\begin{vmatrix} a_1 & b_1 & c_1 \\ a_2 & b_2 & c_2 \\ a_3 & b_3 & c_3 \end{vmatrix} = 0`),
  P(R`<b>Locus</b>: take the moving point as $(h, k)$, write the given condition, eliminate the parameter, then replace $h, k$ by $x, y$.`)
]]
],
pyq: {
  pat: [
    [R`Triangle centres from partial data (mid-points, centroid, a vertex)`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Angle bisectors and ratio of segments`, "2026 · 4 Apr · Shift 1; 2026 · 4 Apr · Shift 2"],
    [R`Image of a point / reflection of a ray`, "2026 · 5 Apr · Shift 2"],
    [R`Locus with a family of lines`, "2026 · 8 Apr · Shift 2"]
  ],
  combo: [R`Lines + circle (centre at the meet of two lines)`, R`Lines + triangle geometry (circumradius, bisector)`, R`Lines + 3D analogues (image in a line)`],
  trap: [R`The incentre uses the <b>opposite</b> side lengths as weights.`, R`$H = 3G - 2O$ (vector form of the Euler line).`],
  mist: [R`Sign errors in the image formula (factor −2, not −1).`, R`Forgetting the ± in the bisector equation.`]
}
});
})();
