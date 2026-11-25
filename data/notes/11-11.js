(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-11", short: "Introduction to Three Dimensional Geometry",
intro: R`The basics of space coordinates. These formulas are the base for <b>Three Dimensional Geometry</b> (Class 12), where most JEE 3D questions come from.`,
sec: [
["Coordinates in Space", [
  P(R`Three mutually perpendicular axes divide space into <b>8 octants</b>. A point is $(x, y, z)$. On the x-axis $y = z = 0$; in the xy-plane $z = 0$.`, null, S(s.arr(80, 100, 200, 100) + s.arr(80, 100, 80, 10) + s.arr(80, 100, 25, 140) + s.txt(190, 115, "y") + s.txt(86, 18, "z") + s.txt(18, 135, "x") + s.dot(150, 60) + s.txt(155, 55, "P(x, y, z)") + s.line(150, 60, 150, 120, 'class="thin" stroke-dasharray="4 3"') + s.line(150, 120, 115, 120, 'class="thin" stroke-dasharray="4 3"') + s.line(150, 120, 185, 100, 'class="thin" stroke-dasharray="4 3"'), 220, 150, "Right-handed axes")),
  P(R`The foot of the perpendicular from $(x, y, z)$ to the xy-plane is $(x, y, 0)$; to the x-axis is $(x, 0, 0)$. The distance from the x-axis is $\sqrt{y^2 + z^2}$.`)
]],
["Distance & Section Formula", [
  P(R`<b>Distance</b> between two points:`, R`PQ = \sqrt{(x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2}`, S(s.path("M40 50 L150 50 L190 20 L80 20Z", 'class="thin"') + s.path("M40 130 L150 130 L190 100 L80 100Z", 'class="thin"') + s.line(40, 50, 40, 130, 'class="thin"') + s.line(150, 50, 150, 130, 'class="thin"') + s.line(190, 20, 190, 100, 'class="thin"') + s.line(80, 20, 80, 100, 'class="thin" stroke-dasharray="4 3"') + s.line(40, 130, 190, 20, 'class="red"') + s.lab(40, 130, "P") + s.lab(190, 20, "Q") + s.txt(80, 145, "Δx") + s.txt(196, 65, "Δz") + s.txt(168, 125, "Δy"), 230, 150, "PQ = body diagonal of the box")),
  P(R`<b>Section formula</b> (ratio $m : n$, internal):`, R`\left(\frac{mx_2 + nx_1}{m + n},\ \frac{my_2 + ny_1}{m + n},\ \frac{mz_2 + nz_1}{m + n}\right)`),
  P(R`<b>Centroid</b> of a triangle: average of the three vertices. Of a tetrahedron: average of the four vertices.`),
  P(R`The ratio in which a plane like the xy-plane ($z = 0$) divides PQ: $-\frac{z_1}{z_2}$ (set the z-coordinate of the section point to 0).`),
  J(R`Two lines meeting <b>on the xy-plane</b>: put $z = 0$ in both lines to get their points there, then equate.`, "2026 · 2 Apr · Shift 1"),
  W(R`Collinearity in 3D: check that one point divides the other two in some ratio, or that $\vec{AB} \parallel \vec{AC}$. A zero area is not enough unless you compute it with the cross product.`)
]]
],
pyq: {
  pat: [[R`Point where a line meets a coordinate plane`, "2026 · 2 Apr · Shift 1"]],
  combo: [R`Basics used inside Class 12 3D: foot of perpendicular, image, distances`],
  trap: [R`Distance from an axis is not the coordinate; it is the root of the other two squares.`],
  mist: [R`Mixing up the ratio sign for external division.`]
}
});
})();
