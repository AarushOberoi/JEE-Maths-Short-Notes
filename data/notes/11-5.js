(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-5", short: "Linear Inequalities",
intro: R`<b>Not in the current JEE Main syllabus.</b> Key ideas only. The rules are still used while solving domains and location-of-roots problems.`,
sec: [
["Rules for Inequalities", [
  P(R`Adding or subtracting the same number keeps the sign. Multiplying or dividing by a <b>positive</b> number keeps it; by a <b>negative</b> number <b>reverses</b> it.`),
  P(R`<b>Wavy-curve (sign) method</b> for $\frac{(x - a)(x - b)}{(x - c)} \ge 0$: mark the critical points on a line, start with + on the far right, and alternate signs (a squared factor does not change the sign).`, null, S(s.line(10, 60, 230, 60) + [40, 100, 160, 200].map(x => s.dot(x, 60)).join("") + s.txt(36, 80, "a") + s.txt(96, 80, "b") + s.txt(156, 80, "c") + s.txt(196, 80, "d") + s.path("M10 75 Q25 40 40 60 Q70 90 100 60 Q130 30 160 60 Q180 90 200 60 Q215 35 230 40", 'class="red"') + s.txt(18, 30, "−") + s.txt(65, 30, "+") + s.txt(125, 30, "−") + s.txt(176, 30, "+") + s.txt(212, 30, "−"), 240, 95, "Signs alternate across simple roots")),
  P(R`<b>Modulus</b>: $|x| < a \iff -a < x < a$; $|x| > a \iff x < -a$ or $x > a$ (for $a > 0$).`)
]],
["Inequalities in Two Variables", [
  P(R`$ax + by \le c$ is a <b>half-plane</b>. Draw the line $ax + by = c$ and test a point such as the origin to choose the side.`, null, G({ xl: "x", yl: "y", xr: [-1, 5], yr: [-1, 5], fns: [x => 4 - x, x => 0], fill: [[0, 1, 0, 4]], t: "x + y ≤ 4, x, y ≥ 0" })),
  P(R`A system of inequalities: the solution is the common (overlapping) region of all the half-planes.`)
]]
],
pyq: {}
});
})();
