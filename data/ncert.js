// Chapter list in the exact NCERT order for Class 11 and Class 12 Mathematics.
// id = notes file (data/notes/<id>.js); keys = topic keys in data/pyqs.js; w = JEE Main weightage level.
window.NCERT = [
  { id: "11-1", cls: 11, n: 1, t: "Sets", keys: [], w: 1 },
  { id: "11-2", cls: 11, n: 2, t: "Relations and Functions", keys: ["func"], w: 2 },
  { id: "11-3", cls: 11, n: 3, t: "Trigonometric Functions", keys: ["trig"], w: 3 },
  { id: "11-4", cls: 11, n: 4, t: "Complex Numbers and Quadratic Equations", keys: ["complex", "quad"], w: 4 },
  { id: "11-5", cls: 11, n: 5, t: "Linear Inequalities", keys: [], out: true },
  { id: "11-6", cls: 11, n: 6, t: "Permutations and Combinations", keys: ["pnc"], w: 3 },
  { id: "11-7", cls: 11, n: 7, t: "Binomial Theorem", keys: ["binom"], w: 3 },
  { id: "11-8", cls: 11, n: 8, t: "Sequences and Series", keys: ["seq"], w: 4 },
  { id: "11-9", cls: 11, n: 9, t: "Straight Lines", keys: ["line"], w: 3 },
  { id: "11-10", cls: 11, n: 10, t: "Conic Sections", keys: ["circle", "conic"], w: 4 },
  { id: "11-11", cls: 11, n: 11, t: "Introduction to Three Dimensional Geometry", keys: [], w: 1 },
  { id: "11-12", cls: 11, n: 12, t: "Limits and Derivatives", keys: ["limit"], w: 2 },
  { id: "11-13", cls: 11, n: 13, t: "Statistics", keys: ["stats"], w: 3 },
  { id: "11-14", cls: 11, n: 14, t: "Probability", keys: ["prob11"], w: 2 },
  { id: "12-1", cls: 12, n: 1, t: "Relations and Functions", keys: ["rel"], w: 3 },
  { id: "12-2", cls: 12, n: 2, t: "Inverse Trigonometric Functions", keys: ["itf"], w: 2 },
  { id: "12-3", cls: 12, n: 3, t: "Matrices", keys: ["matrix"], w: 3 },
  { id: "12-4", cls: 12, n: 4, t: "Determinants", keys: ["det"], w: 3 },
  { id: "12-5", cls: 12, n: 5, t: "Continuity and Differentiability", keys: ["cont"], w: 2 },
  { id: "12-6", cls: 12, n: 6, t: "Application of Derivatives", keys: ["aod"], w: 3 },
  { id: "12-7", cls: 12, n: 7, t: "Integrals", keys: ["indef", "defint"], w: 4 },
  { id: "12-8", cls: 12, n: 8, t: "Application of Integrals", keys: ["area"], w: 3 },
  { id: "12-9", cls: 12, n: 9, t: "Differential Equations", keys: ["de"], w: 3 },
  { id: "12-10", cls: 12, n: 10, t: "Vector Algebra", keys: ["vec"], w: 3 },
  { id: "12-11", cls: 12, n: 11, t: "Three Dimensional Geometry", keys: ["3d"], w: 4 },
  { id: "12-12", cls: 12, n: 12, t: "Linear Programming", keys: [], out: true },
  { id: "12-13", cls: 12, n: 13, t: "Probability", keys: ["prob"], w: 3 }
];
window.NCERT.forEach(c => { c.parts = [{ ch: c.id, pyq: 1 }]; });
