(function () {
const { R, P, B, J, W, D, T, L, G, S, GR } = NB, s = NB.svg;
NB.ch({
n: "12-3", short: "Matrices",
intro: R`A matrix is a rectangular array. JEE tests <b>matrix algebra</b> (products, powers, transpose), special matrices, and <b>adjoint / inverse</b> properties (with Determinants).`,
sec: [
["Types & Algebra", [
  P(R`Order $m \times n$: $m$ rows, $n$ columns. Square, diagonal, scalar, identity $I$, zero $O$, upper/lower triangular.`),
  P(R`<b>Product</b> $AB$ exists when columns of A = rows of B; $(AB)_{ij} = \sum_k a_{ik}b_{kj}$. In general $AB \ne BA$, and $AB = O$ does not mean $A = O$ or $B = O$.`, null, S(s.rect(15, 30, 60, 60, 'class="thin"') + s.rect(15, 50, 60, 18, 'class="fl"') + s.rect(95, 30, 60, 60, 'class="thin"') + s.rect(118, 30, 18, 60, 'class="fl2"') + s.rect(175, 30, 40, 40, 'class="thin"') + s.dot(195, 58) + s.txt(30, 22, "A: row i") + s.txt(105, 22, "B: col j") + s.txt(170, 100, "(AB)ᵢⱼ"), 230, 110, "row × column")),
  P(R`<b>Transpose</b>: $(A^T)_{ij} = a_{ji}$, $(AB)^T = B^TA^T$, $(A^T)^T = A$.`, null, S(s.rect(20, 20, 90, 90, 'class="thin"') + s.line(20, 20, 110, 110, 'class="red" stroke-dasharray="4 3"') + s.txt(70, 45, "a₁₂") + s.txt(30, 85, "a₂₁") + s.path("M78 52 Q95 80 50 82", 'class="thin"') + s.txt(125, 60, "Aᵀ: reflect in") + s.txt(125, 78, "the main diagonal"), 230, 125, "(Aᵀ)ᵢⱼ = aⱼᵢ")),
  P(R`<b>Symmetric</b> $A^T = A$; <b>skew-symmetric</b> $A^T = -A$ (diagonal entries 0). Every square matrix = symmetric + skew: $A = \frac{A + A^T}{2} + \frac{A - A^T}{2}$.`),
  L([R`<b>Orthogonal</b>: $AA^T = I$. <b>Idempotent</b>: $A^2 = A$. <b>Involutory</b>: $A^2 = I$. <b>Nilpotent</b>: $A^k = O$.`, R`<b>Trace</b>: $\text{tr}(A + B) = \text{tr}A + \text{tr}B$, $\text{tr}(AB) = \text{tr}(BA)$.`]),
  P(R`<b>Columns from products</b>: $A\begin{bmatrix}1\\0\\0\end{bmatrix}$ is the first column of A. $A^T e_i$ gives the $i$-th row.`),
  J(R`$M e_1$, $M e_2$, $M e_3$ (or sums like $M(e_1 + e_3)$) are given: read off the columns of M, then solve $MX = B$.`, "2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2")
]],
["Powers & Matrix Polynomials", [
  P(R`<b>Powers</b>: find $A^2, A^3$ and spot the pattern, or write $A = I + N$ with $N$ nilpotent and expand by the binomial theorem (allowed since $I$ commutes with $N$).`, R`(I + N)^n = I + nN + \frac{n(n - 1)}{2}N^2\quad(\text{if } N^3 = O)`),
  J(R`$A = \begin{bmatrix}1&0&0\\3&1&0\\9&3&1\end{bmatrix} = I + N$ with $N^3 = O$; then $A^{99} = I + 99N + \frac{99\cdot98}{2}N^2$.`, "2026 · 6 Apr · Shift 2"),
  P(R`<b>Cayley–Hamilton</b>: every square matrix satisfies its characteristic equation $|A - \lambda I| = 0$. For a 2×2 matrix: $A^2 - (\text{tr}A)A + |A|I = O$.`),
  J(R`$A^2 - 4A + I = O$ for $A = \begin{bmatrix}1&2\\1&\alpha\end{bmatrix}$: compare with Cayley–Hamilton, so $\text{tr}A = 4$ and $|A| = 1$, giving α directly.`, "2026 · 2 Apr · Shift 1"),
  J(R`2×2 matrices with entries in $\{0, \dots, 4\}$, $A^2 - 4A + 3I = O$ and trace 4: either $A = I$ or $3I$ (scalars), or $\text{tr}A = 4$, $|A| = 3$. Count the integer matrices.`, "2026 · 4 Apr · Shift 1"),
  P(R`<b>Eigenvalue-type</b>: $|A - \alpha I| = 0$ is a cubic in α for a 3×3 matrix. The sum of its roots = tr A and the product = |A|.`),
  J(R`$\det(A - \alpha I) = 0$: largest root α; then use it as data for a circle. Expand carefully, or guess a root and factor.`, "2026 · 4 Apr · Shift 2")
]],
["Adjoint & Inverse", [
  P(R`$A\,\text{adj}A = \text{adj}A\,A = |A|I$, so for $|A| \ne 0$:`, R`A^{-1} = \frac{\text{adj}A}{|A|}`),
  P(R`For a 2×2 matrix, swap the diagonal and negate the off-diagonal:`, R`\begin{bmatrix}a&b\\c&d\end{bmatrix}^{-1} = \frac{1}{ad - bc}\begin{bmatrix}d&-b\\-c&a\end{bmatrix}`),
  P(R`<b>Properties</b> (A of order $n$):`, [R`|\text{adj}A| = |A|^{n-1},\qquad \text{adj}(\text{adj}A) = |A|^{n-2}A`, R`|kA| = k^n|A|,\quad \text{adj}(kA) = k^{n-1}\text{adj}A,\quad \text{adj}(AB) = \text{adj}B\,\text{adj}A`, R`(AB)^{-1} = B^{-1}A^{-1},\quad (A^{-1})^T = (A^T)^{-1}`]),
  J(R`$\text{adj}(\text{adj}(2(\text{adj}A)^{-1}))$: work outward with the rules; $(\text{adj}A)^{-1} = \frac{A}{|A|}$ and $\text{adj}(\text{adj}M) = |M|M$ for $n = 3$.`, "2026 · 4 Apr · Shift 1"),
  J(R`$PA = B$ and $AQ = B$ ⇒ $P = BA^{-1}$, $Q = A^{-1}B$; trace of $2(P + Q)$.`, "2026 · 2 Apr · Shift 2"),
  W(R`$|\text{adj}(A^2 + A)|$: factor $A^2 + A = A(A + I)$, then $|\text{adj}M| = |M|^2$ for 3×3.`)
]]
],
pyq: {
  pat: [
    [R`Matrix polynomial / Cayley–Hamilton to find entries`, "2026 · 2 Apr · Shift 1; 2026 · 4 Apr · Shift 1"],
    [R`Nested adjoint / inverse determinant chains`, "2026 · 4 Apr · Shift 1; 2026 · 5 Apr · Shift 1; 2026 · 8 Apr · Shift 2"],
    [R`Recover a matrix from products with unit vectors`, "2026 · 5 Apr · Shift 1; 2026 · 5 Apr · Shift 2"],
    [R`High powers via $I + N$`, "2026 · 6 Apr · Shift 2"]
  ],
  combo: [R`Matrices + determinants (almost always)`, R`Matrices + counting (entries from a set)`, R`Matrices + conics (eigenvalue → circle)`],
  trap: [R`$(A + B)^2 \ne A^2 + 2AB + B^2$ unless $AB = BA$.`, R`$|kA| = k^n|A|$, not $k|A|$.`],
  mist: [R`Writing $(AB)^T = A^TB^T$.`]
}
});
})();
