(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-14", short: "Probability",
intro: R`Classical probability is <b>counting</b>: favourable outcomes ÷ total equally likely outcomes. Events behave like sets.`,
sec: [
["Sample Space & Events", [
  P(R`<b>Sample space</b> S = set of all outcomes. An <b>event</b> is a subset of S. For equally likely outcomes:`, R`P(E) = \frac{n(E)}{n(S)},\qquad 0 \le P(E) \le 1,\qquad P(E') = 1 - P(E)`),
  L([R`<b>Mutually exclusive</b>: $A \cap B = \phi$, so $P(A \cap B) = 0$.`, R`<b>Exhaustive</b>: $A \cup B \cup \cdots = S$.`, R`"A or B" = $A \cup B$; "A and B" = $A \cap B$; "not A" = $A'$.`]),
  P(R`<b>Addition theorem</b>:`, [R`P(A \cup B) = P(A) + P(B) - P(A \cap B)`, R`P(\text{exactly one}) = P(A) + P(B) - 2P(A \cap B)`], S(s.venn("D"), 220, 130, "Exactly one of A, B")),
  P(R`$P(A \cup B \cup C) = \sum P(A) - \sum P(A \cap B) + P(A \cap B \cap C)$. $P(A \cap B') = P(A) - P(A \cap B)$.`)
]],
["Counting-based Problems", [
  P(R`Standard sample spaces: coin tossed $n$ times → $2^n$; die thrown $n$ times → $6^n$; $r$ cards from 52 → $ {}^{52}C_r$.`, null, S(s.grid(30, 15, 155, 140, 25, (x, y) => s.dot(x, y, 2.5)) + [[0, 5], [1, 4], [2, 3], [3, 2], [4, 1], [5, 0]].map(([i, j]) => s.circ(30 + i * 25, 15 + j * 25, 7, 'class="red" style="fill:none"')).join("") + s.txt(165, 80, "sum = 7:") + s.txt(165, 98, "6 of 36"), 230, 150, "Two dice: 36 equally likely pairs")),
  P(R`<b>Exactly $r$ successes</b> in $n$ independent trials with success probability $p$ (binomial):`, R`P(X = r) = {}^nC_r\,p^r(1 - p)^{n-r}`),
  J(R`Coin tossed repeatedly with 10 points per head and 5 per tail, exactly 30 points: add over every toss sequence whose points total 30 (3H; 2H + 2T; 1H + 4T; 6T). A sequence of length $k$ has probability $(\frac12)^k$, and each case has $\frac{k!}{h!\,t!}$ orders.`, "2026 · 2 Apr · Shift 2"),
  J(R`8 tosses with "exactly 4 heads in the first six" and "exactly 3 in the last five": the tosses 4–6 overlap. Fix the number of heads in the overlap and multiply the counts.`, "2026 · 4 Apr · Shift 1"),
  J(R`3 dates from 31 in an increasing A.P.: count pairs (first, last) with an even difference; middle is fixed. Total = $ {}^{31}C_3$.`, "2026 · 4 Apr · Shift 2"),
  J(R`Pairs drawn from 6 blue and 6 green till the bag is empty, each pair mixed: each pair has the blue ball first or second, so $P = \frac{2^6}{^{12}C_6} = \frac{16}{231}$ (or multiply the step-by-step probabilities $\frac{6\cdot 6}{^{12}C_2}\cdot\frac{5\cdot5}{^{10}C_2}\cdots$).`, "2026 · 6 Apr · Shift 2"),
  J(R`Probability that $ax^2 + 2\sqrt2bx + c > 0$ for all $x$ ($a, b, c \in \{1, 2, 3, 4\}$): condition $2b^2 < ac$, total $4^3 = 64$.`, "2026 · 2 Apr · Shift 1"),
  W(R`Make sure the outcomes you count are <b>equally likely</b>. "Sum of two dice = 7" has 6 favourable ordered pairs out of 36, not 3 out of 21.`)
]]
],
pyq: {
  pat: [
    [R`Counting with overlapping conditions on coin tosses`, "2026 · 2 Apr · Shift 2; 2026 · 4 Apr · Shift 1"],
    [R`Probability that a quadratic is always positive`, "2026 · 2 Apr · Shift 1"],
    [R`Selecting numbers that form an A.P.`, "2026 · 4 Apr · Shift 2"],
    [R`Drawing pairs without replacement`, "2026 · 6 Apr · Shift 2"]
  ],
  combo: [R`Probability + quadratic (discriminant)`, R`Probability + A.P.`, R`Probability + P&C`],
  trap: [R`"Without replacement" changes the totals at each step.`, R`Answer often asked as $m + n$ with gcd 1: reduce the fraction fully.`],
  mist: [R`Adding probabilities of events that are not mutually exclusive.`]
}
});
})();
