(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-10", short: "Vector Algebra",
intro: R`Vectors have magnitude and direction. The <b>dot product</b> gives angles and projections; the <b>cross product</b> gives perpendicular vectors and areas. Triple products give volumes.`,
sec: [
["Basics", [
  P(R`$\vec a = a_1\hat i + a_2\hat j + a_3\hat k$, $|\vec a| = \sqrt{a_1^2 + a_2^2 + a_3^2}$, unit vector $\hat a = \frac{\vec a}{|\vec a|}$. $\vec{AB} = \vec b - \vec a$ (position vectors).`),
  P(R`<b>Triangle / parallelogram law</b>: $\vec{AB} + \vec{BC} = \vec{AC}$.`, null, S(s.arr(20, 120, 140, 120, 'class="blue"') + s.arr(140, 120, 200, 40, 'class="blue"') + s.arr(20, 120, 200, 40, 'class="red"') + s.txt(75, 138, "a") + s.txt(178, 88, "b") + s.txt(90, 70, "a + b"), 220, 145, "Triangle law")),
  P(R`<b>Section formula</b>: the point dividing $\vec a$ and $\vec b$ in $m : n$ is $\frac{m\vec b + n\vec a}{m + n}$.`),
  J(R`$\vec{OP} = 5\vec{OR}$ and $\vec{OQ} = 5\vec{RM}$: write every point's position vector in terms of $\vec a, \vec b$, then $\vec{PM} = \vec m - \vec a$.`, "2026 · 5 Apr · Shift 2"),
  P(R`<b>Collinear</b> vectors: $\vec a = \lambda\vec b$. Three points are collinear if $\vec{AB} \parallel \vec{AC}$.`)
]],
["Dot (Scalar) Product", [
  P(R`$\vec a\cdot\vec b = |\vec a||\vec b|\cos\theta = a_1b_1 + a_2b_2 + a_3b_3$. Perpendicular ⟺ $\vec a\cdot\vec b = 0$.`),
  P(R`<b>Projection</b> of $\vec a$ on $\vec b$: $\frac{\vec a\cdot\vec b}{|\vec b|}$ (scalar); vector projection $\left(\frac{\vec a\cdot\vec b}{|\vec b|^2}\right)\vec b$.`, null, S(s.arr(20, 110, 200, 110) + s.arr(20, 110, 130, 30, 'class="blue"') + s.line(130, 30, 130, 110, 'class="thin" stroke-dasharray="4 3"') + s.line(20, 110, 130, 110, 'class="red" style="stroke-width:3.5"') + s.txt(190, 128, "b") + s.txt(70, 60, "a") + s.txt(55, 128, "projection") + s.arcm(20, 110, 25, 0, 36) + s.txt(48, 102, "θ"), 220, 140, "|a| cos θ along b")),
  P(R`<b>Magnitude identities</b>:`, [R`|\vec a \pm \vec b|^2 = |\vec a|^2 + |\vec b|^2 \pm 2\,\vec a\cdot\vec b`, R`|\vec a + \vec b|^2 + |\vec a - \vec b|^2 = 2(|\vec a|^2 + |\vec b|^2)`]),
  J(R`Max of $3|3\vec a + 2\vec b| + 4|3\vec a - 2\vec b|$ with $|\vec a| = 2$, $|\vec b| = 3$: $|3\vec a \pm 2\vec b|^2 = 72(1 \pm \cos\theta)$, so the magnitudes are $12\cos\frac\theta2$ and $12\sin\frac\theta2$. The expression is $36\cos\frac\theta2 + 48\sin\frac\theta2$, with max $\sqrt{36^2 + 48^2} = 60$.`, "2026 · 2 Apr · Shift 1"),
  J(R`$\vec c = \lambda\vec a + \mu\vec b$ with two dot-product conditions: dot both sides with the given vectors to get two linear equations in λ, μ.`, "2026 · 2 Apr · Shift 2")
]],
["Cross (Vector) Product", [
  P(R`$\vec a\times\vec b = |\vec a||\vec b|\sin\theta\,\hat n$, perpendicular to both (right-hand rule). $\vec b\times\vec a = -\vec a\times\vec b$. Parallel ⟺ $\vec a\times\vec b = \vec 0$.`, R`\vec a\times\vec b = \begin{vmatrix}\hat i&\hat j&\hat k\\a_1&a_2&a_3\\b_1&b_2&b_3\end{vmatrix}`),
  P(R`<b>Areas</b>: parallelogram with sides $\vec a, \vec b$ = $|\vec a\times\vec b|$; triangle = $\frac12|\vec a\times\vec b|$; parallelogram with diagonals $\vec d_1, \vec d_2$ = $\frac12|\vec d_1\times\vec d_2|$.`, null, S(s.path("M20 120 L150 120 L200 40 L70 40Z", 'class="fl"') + s.arr(20, 120, 150, 120) + s.arr(20, 120, 70, 40) + s.txt(85, 138, "a") + s.txt(30, 75, "b") + s.txt(80, 88, "|a × b|"), 220, 145, "Area of a parallelogram")),
  P(R`<b>Lagrange's identity</b>: $|\vec a\times\vec b|^2 + (\vec a\cdot\vec b)^2 = |\vec a|^2|\vec b|^2$.`),
  J(R`Square of the area of a triangle with sides $2\vec a + 3\vec b$ and $\vec a - \vec b$: $(2\vec a + 3\vec b)\times(\vec a - \vec b) = -5\,\vec a\times\vec b$; area $= \frac52|\vec a\times\vec b|$.`, "2026 · 6 Apr · Shift 2"),
  J(R`$\vec r\times\vec a + \vec a\times\vec b = \vec 0$ ⇒ $(\vec r - \vec b)\times\vec a = \vec 0$ ⇒ $\vec r = \vec b + t\vec a$; then $\vec r\cdot\vec a = 0$ fixes $t$.`, "2026 · 5 Apr · Shift 1"),
  J(R`$2(\vec a\times\vec b) + 3(\vec b\times\vec c) = \vec 0$ ⇒ $\vec b\times(3\vec c - 2\vec a) = \vec 0$ ⇒ $3\vec c - 2\vec a = t\vec b$.`, "2026 · 8 Apr · Shift 2"),
  J(R`Unit vectors with $|\hat u\times\hat v| = \frac{\sqrt3}{2}$ (angle 60°) and $\vec A = \lambda\hat u + \hat v + \hat u\times\hat v$: take dot products with $\hat u$, $\hat v$, and $\hat u\times\hat v$ to get λ.`, "2026 · 4 Apr · Shift 2")
]],
["Triple Products", [
  P(R`<b>Scalar triple product</b> $[\vec a\ \vec b\ \vec c] = \vec a\cdot(\vec b\times\vec c)$ = the determinant of components = volume of the parallelepiped. Zero ⟺ coplanar.`, R`[\vec a\ \vec b\ \vec c] = \begin{vmatrix}a_1&a_2&a_3\\b_1&b_2&b_3\\c_1&c_2&c_3\end{vmatrix},\qquad V_{tetra} = \frac16[\vec a\ \vec b\ \vec c]`),
  P(R`<b>Vector triple product</b>:`, R`\vec a\times(\vec b\times\vec c) = (\vec a\cdot\vec c)\vec b - (\vec a\cdot\vec b)\vec c`),
  P(R`$[\vec a\times\vec b\ \ \vec b\times\vec c\ \ \vec c\times\vec a] = [\vec a\ \vec b\ \vec c]^2$.`),
  W(R`$(\vec a\times\vec b)\times\vec c \ne \vec a\times(\vec b\times\vec c)$ in general. Expand with the "BAC − CAB" rule, keeping the brackets in place.`)
]]
],
pyq: {
  pat: [
    [R`Equations like $\vec r\times\vec a = \vec b\times\vec a$ → $\vec r = \vec b + t\vec a$`, "2026 · 5 Apr · Shift 1; 2026 · 8 Apr · Shift 2"],
    [R`Linear combination with dot-product conditions`, "2026 · 2 Apr · Shift 2"],
    [R`Area of a triangle/parallelogram via cross products`, "2026 · 6 Apr · Shift 2"],
    [R`Max of a sum of magnitudes (trig form)`, "2026 · 2 Apr · Shift 1"],
    [R`Position vectors and section ratios`, "2026 · 5 Apr · Shift 2"]
  ],
  combo: [R`Vectors + 3D lines (direction from a cross product)`, R`Vectors + trig (rotation angle, $\tan\theta_k$ sums)`, R`Vectors + max of $a\cos x + b\sin x$`],
  trap: [R`$\vec a\times\vec b = \vec a\times\vec c$ does not give $\vec b = \vec c$; it gives $\vec b - \vec c \parallel \vec a$.`, R`Angle between vectors is in $[0, \pi]$.`],
  mist: [R`Sign errors in the $\hat j$ term of the cross-product determinant.`]
}
});
})();
