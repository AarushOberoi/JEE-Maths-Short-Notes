(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-13", short: "Probability",
intro: R`Conditional probability, independence, <b>total probability</b> and <b>Bayes' theorem</b>, and random variables with the binomial distribution.`,
sec: [
["Conditional Probability & Independence", [
  P(R`<b>Conditional probability</b> of A given B ($P(B) > 0$), and the multiplication theorem:`, [R`P(A|B) = \frac{P(A \cap B)}{P(B)}`, R`P(A \cap B) = P(A)\,P(B|A)`], S(s.venn("AB"), 220, 130, "Given B: the sample space shrinks to B")),
  P(R`<b>Independent events</b>: $P(A \cap B) = P(A)P(B)$. Then A′ and B, A and B′, A′ and B′ are also independent.`),
  W(R`Mutually exclusive ≠ independent. Two exclusive events with non-zero probabilities are always <b>dependent</b>.`),
  P(R`$P(\text{at least one of } n \text{ independent events}) = 1 - \prod(1 - P(A_i))$.`)
]],
["Total Probability & Bayes' Theorem", [
  P(R`If $E_1, \dots, E_n$ partition S (mutually exclusive, exhaustive), then for any event A:`, [R`P(A) = \sum_i P(E_i)\,P(A|E_i)`, R`P(E_i|A) = \frac{P(E_i)\,P(A|E_i)}{\sum_j P(E_j)\,P(A|E_j)}`], S(s.line(30, 75, 100, 30) + s.line(30, 75, 100, 75) + s.line(30, 75, 100, 120) + s.line(100, 30, 180, 30, 'class="red"') + s.line(100, 75, 180, 75, 'class="red"') + s.line(100, 120, 180, 120, 'class="red"') + s.txt(105, 25, "E₁") + s.txt(105, 70, "E₂") + s.txt(105, 115, "E₃") + s.txt(185, 34, "A") + s.txt(185, 79, "A") + s.txt(185, 124, "A") + s.txt(45, 40, "P(Eᵢ)") + s.txt(125, 48, "P(A|Eᵢ)"), 210, 135, "Tree: multiply along a branch, add the branches")),
  J(R`Captain A (0.6) or B (0.4) chosen; P(win | A) = 0.8, P(win | B) = 0.7: total probability $= 0.6(0.8) + 0.4(0.7) = 0.76$.`, "2026 · 5 Apr · Shift 2"),
  J(R`Bus/scooter/car with given lateness probabilities; given "late", P(bus) = $\frac{\frac25\cdot\frac15}{\frac25\cdot\frac15 + \frac15\cdot\frac13 + \frac25\cdot\frac14}$.`, "2026 · 8 Apr · Shift 2"),
  J(R`Letter from KANPUR or ANANTPUR with "AN" visible: P(AN | KANPUR) = $\frac15$ (5 consecutive pairs, one is AN); P(AN | ANANTPUR) = $\frac27$ (7 pairs, two are AN). Apply Bayes with priors $\frac12$ each.`, "2026 · 5 Apr · Shift 1")
]],
["Random Variables & Binomial Distribution", [
  P(R`A <b>random variable</b> X assigns a number to each outcome. Its probability distribution: $P(X = x_i) = p_i$, $\sum p_i = 1$.`, [R`\text{Mean } \mu = E(X) = \sum x_ip_i,\qquad \text{Var}(X) = \sum x_i^2p_i - \mu^2`]),
  P(R`<b>Binomial distribution</b> B(n, p): $n$ independent trials, success probability $p$, $q = 1 - p$:`, [R`P(X = r) = {}^nC_r\,p^rq^{n-r}`, R`\text{mean} = np,\qquad \text{variance} = npq`], G({ xl: "r", yl: "P", xr: [-0.5, 8.5], yr: [0, 0.3], fns: [], pts: [0, 1, 2, 3, 4, 5, 6, 7, 8].map(r => { const c = [1, 8, 28, 56, 70, 56, 28, 8, 1][r]; return [r, c / 256, ""]; }), t: "B(8, ½): symmetric, peak at r = 4" })),
  P(R`<b>Most likely value</b> (mode) of B(n, p): the integer(s) in $[(n + 1)p - 1,\ (n + 1)p]$.`),
  W(R`"At least one success" = $1 - q^n$. To have this ≥ a value, solve for the smallest $n$ with logs or trial.`)
]]
],
pyq: {
  pat: [
    [R`Bayes' theorem with 2–3 causes`, "2026 · 5 Apr · Shift 1; 2026 · 8 Apr · Shift 2"],
    [R`Total probability (tree diagram)`, "2026 · 5 Apr · Shift 2"],
    [R`Binomial probabilities, mean and variance`, ""],
    [R`Independent events: at least one / exactly one`, ""]
  ],
  combo: [R`Probability + P&C`, R`Probability + words/letters (Bayes with letter pairs)`, R`Binomial + statistics (mean/variance)`],
  trap: [R`In Bayes, the denominator is the <b>total</b> probability of the observed event.`, R`Count consecutive pairs of letters correctly (n letters → n − 1 pairs).`],
  mist: [R`Confusing $P(A|B)$ with $P(B|A)$.`]
}
});
})();
