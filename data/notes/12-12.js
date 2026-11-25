(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-12", short: "Linear Programming",
intro: R`<b>Not in the current JEE Main syllabus.</b> Key ideas only, for reference.`,
sec: [
["Linear Programming Problems", [
  P(R`Maximise or minimise a linear <b>objective function</b> $Z = ax + by$ subject to linear <b>constraints</b> and $x, y \ge 0$.`),
  P(R`The constraints give the <b>feasible region</b> (a convex polygon). <b>Corner point method</b>: the optimum value occurs at a corner (vertex) of the feasible region.`, null, G({ xl: "x", yl: "y", xr: [-0.5, 6], yr: [-0.5, 6], fns: [x => 5 - x, x => 8 - 2 * x, x => x <= 4 ? Math.max(0, Math.min(5 - x, 8 - 2 * x)) : NaN], fill: [[2, null, 0, 4]], lab: ["x + y = 5", "2x + y = 8", "boundary"], pts: [[0, 0, "O"], [3, 2, "corner"], [0, 5, ""], [4, 0, ""]], t: "x + y ≤ 5, 2x + y ≤ 8, x, y ≥ 0" })),
  P(R`For an <b>unbounded</b> region, a max/min may not exist: check with the half-plane $ax + by > M$ (or $< m$).`),
  T(["Step", "What to do"], [["1", "Draw each constraint line and shade the allowed side"], ["2", "Find the corner points of the common region"], ["3", "Evaluate Z at each corner; pick the largest/smallest"]])
]]
],
pyq: {}
});
})();
