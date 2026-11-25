(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-13", short: "Statistics",
intro: R`Central tendency (mean, median, mode) and dispersion (mean deviation, variance, SD). JEE almost always gives <b>sums</b> like $\sum x_i$, $\sum x_i^2$ and asks you to recover a missing value.`,
sec: [
["Mean, Median, Mode", [
  P(R`<b>Mean</b> of ungrouped / grouped data ($x_i$ = class mark for grouped data):`, [R`\bar x = \frac{\sum x_i}{n},\qquad \bar x = \frac{\sum f_ix_i}{\sum f_i}`], S(s.axes(20, 120, 10, 215, 130, 10, "class", "f") + [[30, 20], [60, 55], [90, 85], [120, 60], [150, 30], [180, 12]].map(([x, h]) => s.rect(x, 120 - h, 28, h, 'class="fl"')).join("") + s.line(105, 20, 105, 120, 'class="red" stroke-dasharray="4 3"') + s.txt(108, 28, "mean", 'class="red"'), 220, 135, "Grouped data: class marks × frequencies")),
  P(R`<b>Median</b>: middle value after arranging. For grouped data with $N = \sum f$:`, R`\text{Median} = l + \frac{\frac N2 - C}{f}\times h`),
  P(R`<b>Mode</b> (grouped): $l + \frac{f_1 - f_0}{2f_1 - f_0 - f_2}\times h$. Empirical relation: Mode = 3 Median − 2 Mean.`),
  J(R`Missing frequency from a given mean of grouped data: write $\frac{\sum f_ix_i}{\sum f_i} = $ given mean with class marks 7.5, 12.5, …; you get an equation in $k$.`, "2026 · 2 Apr · Shift 1"),
  J(R`Data with frequencies $ {}^nC_r$ and values $r(r - 1)$: use $\sum r(r - 1){}^nC_r = n(n - 1)2^{n-2}$ and $\sum{}^nC_r = 2^n$ to get the mean, then $n$, then the median.`, "2026 · 5 Apr · Shift 2")
]],
["Dispersion", [
  P(R`<b>Mean deviation</b> about a central value $A$ (mean or median). It is least about the median.`, R`MD(A) = \frac{\sum f_i|x_i - A|}{\sum f_i}`, S(s.line(10, 60, 210, 60) + [25, 60, 95, 150, 195].map(x => s.dot(x, 60)).join("") + s.line(110, 30, 110, 90, 'class="red"') + s.txt(104, 25, "A", 'class="red"') + [25, 60, 95, 150, 195].map((x, i) => s.line(x, 72 + i * 5, 110, 72 + i * 5, 'class="thin"')).join("") + s.txt(40, 118, "MD = average of |xᵢ − A|"), 220, 125, "Distances from the centre")),
  J(R`Mean deviation about the <b>mean</b> from a frequency table: find $\bar x$ first, then $\sum f_i|x_i - \bar x|$.`, "2026 · 5 Apr · Shift 1"),
  J(R`Mean deviation about the <b>median</b> with unknowns: arrange the data in order, identify the median position, then use the MD condition.`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Variance and standard deviation</b>:`, [R`\sigma^2 = \frac{\sum x_i^2}{n} - \bar x^2 = \frac{\sum f_ix_i^2}{N} - \bar x^2,\qquad \sigma = \sqrt{\sigma^2}`]),
  P(R`<b>Change of origin and scale</b>: if $y_i = ax_i + b$, then $\bar y = a\bar x + b$ and $\sigma_y = |a|\sigma_x$. Adding a constant does <b>not</b> change the variance.`, null, G({ xl: "x", yl: "f", xr: [-4, 8], yr: [0, 1.2], fns: [x => Math.exp(-x * x / 2), x => Math.exp(-(x - 4) * (x - 4) / 8)], lab: ["small σ", "shifted, larger σ"], t: "Spread = dispersion" })),
  J(R`Given $\sum(x_i + 2)^2$ and $\sum(x_i - 1)^2$: subtract them to get $\sum x_i$, then get $\sum x_i^2$, then σ.`, "2026 · 4 Apr · Shift 2"),
  J(R`Mean and variance with the sums of the first $n - 1$ observations given: write $\sum x = n\bar x$ and $\sum x^2 = n(\sigma^2 + \bar x^2)$; the last observation links the two equations.`, "2026 · 2 Apr · Shift 2"),
  J(R`Mean and variance known with two unknown observations α, β: get $\alpha + \beta$ from the mean and $\alpha^2 + \beta^2$ from the variance, then form the required quadratic.`, "2026 · 6 Apr · Shift 2"),
  P(R`<b>Combined variance</b> of two groups ($n_1, \bar x_1, \sigma_1$) and ($n_2, \bar x_2, \sigma_2$):`, R`\sigma^2 = \frac{n_1\sigma_1^2 + n_2\sigma_2^2}{n_1 + n_2} + \frac{n_1n_2(\bar x_1 - \bar x_2)^2}{(n_1 + n_2)^2}`),
  J(R`4 observations (mean 1, variance 13) and 6 observations (mean 2, variance 1): use the combined-variance formula, or add up $\sum x^2 = n(\sigma^2 + \bar x^2)$ for each group.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Coefficient of variation</b> $= \frac{\sigma}{\bar x}\times 100$. Lower CV = more consistent.`),
  W(R`Variance of the first $n$ natural numbers is $\frac{n^2 - 1}{12}$. If a value was copied wrongly, correct $\sum x$ and $\sum x^2$ <b>both</b> before recomputing.`)
]]
],
pyq: {
  pat: [
    [R`Recover $\sum x$, $\sum x^2$ from shifted sums; find σ`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 2"],
    [R`Mean / variance with unknown observations → quadratic`, "2026 · 6 Apr · Shift 2"],
    [R`Mean deviation about mean or median`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1"],
    [R`Combined variance of two groups`, "2026 · 8 Apr · Shift 2"],
    [R`Grouped data: missing frequency from the mean`, "2026 · 2 Apr · Shift 1"]
  ],
  combo: [R`Statistics + binomial coefficients`, R`Statistics + quadratic equations`],
  trap: [R`Variance uses $\bar x^2$ of the <b>same</b> data; do not mix the old and new means.`, R`MD about the median: order the data first.`],
  mist: [R`Using $\sum(x_i - \bar x)^2/(n - 1)$; JEE uses division by $n$.`]
}
});
})();
