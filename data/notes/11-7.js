(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-7", short: "Binomial Theorem",
intro: R`Expand $(a + b)^n$ for a positive integer $n$. JEE asks for a <b>specific term</b> (general, middle, independent of x) or a <b>sum of binomial coefficients</b>.`,
sec: [
["Expansion & General Term", [
  P(R`<b>Binomial theorem</b> ($n \in \mathbb N$): $n + 1$ terms, powers of $a$ fall and powers of $b$ rise.`, [R`(a + b)^n = \sum_{r=0}^{n}{}^nC_r\,a^{n-r}b^r`, R`T_{r+1} = {}^nC_r\,a^{n-r}\,b^r`]),
  P(R`<b>Pascal's triangle</b>: each entry is the sum of the two above it, $ {}^nC_{r-1} + {}^nC_r = {}^{n+1}C_r$.`, null, S([[1], [1, 1], [1, 2, 1], [1, 3, 3, 1], [1, 4, 6, 4, 1]].map((row, i) => row.map((v, j) => s.txt(110 - i * 18 + j * 36, 22 + i * 24, String(v), 'text-anchor="middle"' + (i === 4 && j === 2 ? ' class="red"' : ""))).join("")).join("") + s.txt(150, 120, "3 + 3 = 6", 'class="red"'), 220, 130, "Pascal's triangle, n = 0 to 4")),
  P(R`<b>Term independent of x</b> in $(px^\alpha + qx^\beta)^n$: write the power of $x$ in $T_{r+1}$ and set it to 0.`, R`\alpha(n - r) + \beta r = 0`),
  J(R`Term independent of x in $\left(9x - \frac{1}{3\sqrt x}\right)^{18}$: power of x is $(18 - r) - \frac r2 = 0 \Rightarrow r = 12$.`, "2026 · 4 Apr · Shift 2"),
  J(R`Coefficient of a power in $(2x^2 + \frac1x)^{10}$ or $(\frac1{x^3} - x^4)^n$: write the general term's power of $x$, set it equal to the required power, then check that $r$ is an integer in $[0, n]$.`, "2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2"),
  P(R`<b>Middle term</b>: $n$ even → one middle term $T_{\frac n2 + 1}$; $n$ odd → two, $T_{\frac{n+1}2}$ and $T_{\frac{n+3}2}$. The middle coefficient is the greatest.`, null, G({ xl: "r", yl: "ⁿCᵣ", xr: [-0.5, 10.5], yr: [0, 270], fns: [], pts: [1, 10, 45, 120, 210, 252, 210, 120, 45, 10, 1].map((c, r) => [r, c, r === 5 ? "max" : ""]), t: "¹⁰Cᵣ: largest in the middle" })),
  P(R`<b>Numerically greatest term</b> in $(1 + x)^n$: find $r$ from $\frac{T_{r+1}}{T_r} = \frac{n - r + 1}{r}|x| \ge 1$.`)
]],
["Sums of Binomial Coefficients", [
  P(R`Put special values of $x$ in $(1 + x)^n = \sum C_r x^r$ (write $C_r$ for $ {}^nC_r$):`, [R`C_0 + C_1 + \cdots + C_n = 2^n`, R`C_0 + C_2 + C_4 + \cdots = C_1 + C_3 + \cdots = 2^{n-1}`]),
  P(R`<b>Differentiate</b> to bring down $r$, <b>integrate</b> to divide by $r + 1$:`, [R`\sum r\,C_r = n2^{n-1},\qquad \sum r^2C_r = n(n + 1)2^{n-2}`, R`\sum \frac{C_r}{r + 1} = \frac{2^{n+1} - 1}{n + 1}`]),
  J(R`Sum like $\frac{2^3}{3}{}^{12}C_2 + \frac{2^5}{5}{}^{12}C_4 + \cdots$: only even $ {}^{12}C_{2k}$ appear, each with $\frac{2^{2k+1}}{2k+1}$, so <b>integrate</b> the even part $\frac{(1 + x)^{12} + (1 - x)^{12}}{2}$ from 0 to 2.`, "2026 · 8 Apr · Shift 2"),
  P(R`<b>Vandermonde</b>: $\sum_r {}^mC_r\,{}^nC_{k-r} = {}^{m+n}C_k$, so $\sum C_r^2 = {}^{2n}C_n$.`),
  P(R`<b>Hockey-stick</b>: $ {}^rC_r + {}^{r+1}C_r + \cdots + {}^nC_r = {}^{n+1}C_{r+1}$.`),
  J(R`Coefficient of $x^3$ in $(1 + x)^3 + (1 + x)^4 + \cdots + (1 + x)^{99}$: $ {}^3C_3 + {}^4C_3 + \cdots + {}^{99}C_3 = {}^{100}C_4$ by the hockey-stick rule.`, "2026 · 4 Apr · Shift 1"),
  J(R`$ {}^{30}C_{30-r} + 3\,{}^{30}C_{31-r} + 3\,{}^{30}C_{32-r} + {}^{30}C_{33-r}$: coefficients 1, 3, 3, 1 mean applying Pascal's rule three times, giving $ {}^{33}C_{\dots}$.`, "2026 · 2 Apr · Shift 2"),
  W(R`Equations like $ {}^{36}C_{r+1} = \frac{6\,{}^{35}C_r}{k^2 - 3}$: use $ {}^{36}C_{r+1} = \frac{36}{r+1}{}^{35}C_r$; then $k^2 - 3$ must divide nicely and be positive. Count integer $k$ (both signs).`)
]],
["Applications", [
  P(R`<b>Remainders</b>: write the base as (multiple of the divisor) ± 1 and expand, e.g. $2^{100} = 2\cdot 8^{33} = 2(9 - 1)^{33}$.`),
  P(R`<b>Approximation</b>: $(1 + x)^n \approx 1 + nx$ for small $|x|$.`),
  P(R`Number of terms in $(a + b + c)^n$ is $ {}^{n+2}C_2$. The coefficient of $a^pb^qc^r$ ($p + q + r = n$) is $\frac{n!}{p!\,q!\,r!}$.`)
]]
],
pyq: {
  pat: [
    [R`Term independent of x / coefficient of a given power`, "2026 · 4 Apr · Shift 2; 2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2"],
    [R`Sum of coefficients using hockey-stick or Pascal's rule`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1"],
    [R`Series of $\frac{C_r}{r+1}$-type terms by integration`, "2026 · 8 Apr · Shift 2"],
    [R`Equations in $ {}^nC_r$ with an integer parameter`, "2026 · 2 Apr · Shift 1"]
  ],
  combo: [R`Binomial + definite integration`, R`Binomial + statistics (mean of data with frequencies $ {}^nC_r$)`],
  trap: [R`$T_{r+1}$, not $T_r$, has $ {}^nC_r$.`, R`Coefficient vs binomial coefficient: include the powers of numbers like $2^r$, $(-1)^r$.`],
  mist: [R`Dropping the sign from $(-1)^r$ for expressions with a minus sign.`]
}
});
})();
