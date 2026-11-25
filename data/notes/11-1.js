(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "11-1", short: "Sets",
intro: R`A set is a <b>well-defined</b> collection of distinct objects. Sets are rarely asked alone; they set up counting, relations and probability questions.`,
sec: [
["Representation & Types of Sets", [
  P(R`<b>Roster form</b>: list the elements, e.g. $\{2, 4, 6\}$. <b>Set-builder form</b>: state the rule, e.g. $\{x : x = 2n,\ n \in \mathbb N,\ n \le 3\}$. Order and repetition do not matter.`),
  L([R`<b>Empty set</b> $\phi = \{\}$ has no element. $\{\phi\}$ is <b>not</b> empty: it has one element.`, R`<b>Finite / infinite</b> sets; <b>equal sets</b> have exactly the same elements; <b>equivalent sets</b> have the same number of elements.`, R`<b>Subset</b> $A \subseteq B$: every element of A is in B. $\phi$ and A are subsets of every A. <b>Proper subset</b> $A \subset B$, $A \ne B$.`, R`<b>Universal set</b> U contains all sets under discussion.`]),
  P(R`<b>Intervals</b> are subsets of $\mathbb R$:`, [R`(a, b) = \{x : a < x < b\}`, R`[a, b] = \{x : a \le x \le b\}`, R`[a, b) = \{x : a \le x < b\}`], G({ xl: "x", yl: "", xr: [-1, 7], yr: [-1, 1], fns: [], pts: [[1, 0, "a"], [5, 0, "b"]], vx: [1, 5], t: "[a, b]: both ends included" })),
  P(R`<b>Power set</b> P(A) = set of all subsets of A. If $n(A) = n$:`, [R`n(P(A)) = 2^n,\qquad \text{proper subsets} = 2^n - 1,\qquad \text{non-empty proper subsets} = 2^n - 2`]),
  W(R`$\phi \in P(A)$ always, so $P(\phi) = \{\phi\}$ has one element and $P(P(\phi))$ has 2.`)
]],
["Operations on Sets (Venn Diagrams)", [
  P(R`<b>Union</b> $A \cup B$: elements in A <i>or</i> B.`, null, S(s.venn("U"), 220, 130, "A ∪ B")),
  P(R`<b>Intersection</b> $A \cap B$: elements in both. If $A \cap B = \phi$, A and B are <b>disjoint</b>.`, null, S(s.venn("AB"), 220, 130, "A ∩ B")),
  P(R`<b>Difference</b> $A - B = A \cap B'$: elements in A but not in B.`, null, S(s.venn("A-B"), 220, 130, "A − B")),
  P(R`<b>Complement</b> $A' = U - A$. <b>Symmetric difference</b> $A \Delta B = (A - B) \cup (B - A)$.`, null, S(s.venn("D"), 220, 130, "A Δ B")),
  P(R`<b>Laws</b>: commutative, associative, distributive $A \cup (B \cap C) = (A \cup B) \cap (A \cup C)$, and <b>De Morgan's laws</b>:`, [R`(A \cup B)' = A' \cap B'`, R`(A \cap B)' = A' \cup B'`], S(s.venn("C"), 220, 130, "(A ∪ B)′ = A′ ∩ B′")),
  L([R`$A - (B \cup C) = (A - B) \cap (A - C)$, $\ A - (B \cap C) = (A - B) \cup (A - C)$`, R`$A \cup A' = U$, $A \cap A' = \phi$, $(A')' = A$`, R`$A \subseteq B \iff B' \subseteq A' \iff A \cap B = A \iff A \cup B = B$`])
]],
["Counting with Sets", [
  P(R`<b>Inclusion–exclusion</b> for two and three sets:`, [R`n(A \cup B) = n(A) + n(B) - n(A \cap B)`, R`n(A \cup B \cup C) = \sum n(A) - \sum n(A \cap B) + n(A \cap B \cap C)`]),
  P(R`Useful pieces: only A = $n(A) - n(A \cap B)$; exactly one of A, B = $n(A) + n(B) - 2n(A \cap B)$; neither = $n(U) - n(A \cup B)$.`),
  P(R`<b>Cartesian product</b> $A \times B = \{(a, b) : a \in A, b \in B\}$, $n(A \times B) = n(A)\,n(B)$. Number of relations from A to B = $2^{n(A)n(B)}$.`),
  J(R`Sets usually appear inside other topics: the <b>common terms of two A.P.s</b> form an A.P. whose difference is the LCM of the two differences. Count terms of $A \cap B$, then apply the extra condition (divisible by 3, etc.).`, "2026 · 2 Apr · Shift 1"),
  W(R`Max/min of $n(A \cap B)$: $\max = \min(n(A), n(B))$, $\min = \max(0,\ n(A) + n(B) - n(U))$.`)
]]
],
pyq: {
  pat: [
    [R`Common terms of two A.P.s (A ∩ B) with an extra divisibility condition`, "2026 · 2 Apr · Shift 1"],
    [R`Inclusion–exclusion for "at least one / exactly one / none" counts`, ""],
    [R`Number of subsets / power set elements, $2^n$`, ""]
  ],
  combo: [R`Sets + A.P. (common terms)`, R`Sets + probability (events as sets)`, R`Sets + relations (subsets of A × A)`],
  trap: [R`$\phi$ and $\{\phi\}$ are different.`, R`$A - B \ne B - A$ in general.`],
  mist: [R`Forgetting to subtract $n(A \cap B \cap C)$ correctly in three-set counting.`]
}
});
})();
