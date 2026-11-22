// Notebook helpers used by data/notes/<id>.js files.
// Item builders:
//   P(text, formula?, diagram?)  numbered point; formula = LaTeX string or array of strings (boxed)
//   B(formula, caption?)         boxed formula without a number
//   J(text, ref?)                JEE PYQ insight sticky note (ref = "2024 · 27 Jan · M")
//   W(text)                      warning / common mistake
//   D(title, steps[])            collapsible derivation (steps: text with $..$ or "$$..$$")
//   T(head[], rows[][])          table
//   L(items[])                   bullet list
//   G(plotSpec)                  graph diagram   { xl, yl, xr:[a,b], yr:[a,b], fns:[x=>..], lab:[..], t?, w?, h?,
//                                 fill:[[i, j|null, a, b]], par:[{f:t=>[x,y], a, b}], vx:[x], hy:[y], pts:[[x,y,label]] }
//   S(svgInner, w, h, cap?)      hand sketch diagram (SVG drawn in a w×h box)
(function () {
  const NB = window.NB = { chapters: {} };
  NB.ch = (o) => { NB.chapters[o.n] = o; };
  NB.R = String.raw;
  NB.P = (t, f, d) => ({ k: "P", t, f, d });
  NB.B = (f, cap) => ({ k: "B", f, cap });
  NB.J = (t, ref) => ({ k: "J", t, ref });
  NB.W = (t) => ({ k: "W", t });
  NB.D = (title, steps) => ({ k: "D", title, steps });
  NB.T = (head, rows) => ({ k: "T", head, rows });
  NB.L = (items) => ({ k: "L", items });
  NB.G = (spec) => ({ k: "G", spec });
  NB.GR = (title, specs) => ({ k: "GR", title, specs });
  NB.S = (svg, w, h, cap) => ({ k: "S", svg, w: w || 220, h: h || 160, cap });
  // --- small SVG drawing helpers (strokes use currentColor, fills use CSS vars) ---
  const a = NB.svg = {};
  a.line = (x1, y1, x2, y2, o = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" ${o}/>`;
  a.arr = (x1, y1, x2, y2, o = "") => `<line x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}" marker-end="url(#ah)" ${o}/>`;
  a.txt = (x, y, s, o = "") => `<text x="${x}" y="${y}" ${o}>${s}</text>`;
  a.rect = (x, y, w, h, o = "") => `<rect x="${x}" y="${y}" width="${w}" height="${h}" ${o}/>`;
  a.circ = (x, y, r, o = "") => `<circle cx="${x}" cy="${y}" r="${r}" ${o}/>`;
  a.path = (d, o = "") => `<path d="${d}" ${o}/>`;
  a.dash = 'stroke-dasharray="4 3"';
  a.fill = 'class="fl"';
  a.fill2 = 'class="fl2"';
  a.ground = (x1, x2, y) => `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}"/>` + Array.from({ length: Math.floor((x2 - x1) / 10) }, (_, i) => `<line x1="${x1 + i * 10 + 10}" y1="${y}" x2="${x1 + i * 10}" y2="${y + 7}" class="thin"/>`).join("");

  // --- composite helpers for physics sketches ---
  a.poly = (pts, o = "") => `<polyline points="${pts.map(p => p.join(",")).join(" ")}" ${o}/>`;
  a.ell = (cx, cy, rx, ry, o = "") => `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" ${o}/>`;
  a.dot = (x, y, r = 3) => `<circle cx="${x}" cy="${y}" r="${r}" class="dot"/>`;
  a.block = (x, y, w, h, lab = "") => a.rect(x, y, w, h, 'class="fl"') + (lab ? a.txt(x + w / 2, y + h / 2 + 5, lab, 'text-anchor="middle"') : "");
  a.spring = (x1, y, x2, n = 7, amp = 7) => { const st = (x2 - x1) / (2 * n + 2); let x = x1 + st, d = `M${x1} ${y} L${x} ${y}`; for (let i = 0; i < 2 * n; i++) { x += st; d += ` L${x.toFixed(1)} ${i === 2 * n - 1 ? y : y + (i % 2 ? amp : -amp)}`; } return a.path(d + ` L${x2} ${y}`); };
  a.vspring = (x, y1, y2, n = 7, amp = 7) => { const st = (y2 - y1) / (2 * n + 2); let y = y1 + st, d = `M${x} ${y1} L${x} ${y}`; for (let i = 0; i < 2 * n; i++) { y += st; d += ` L${i === 2 * n - 1 ? x : x + (i % 2 ? amp : -amp)} ${y.toFixed(1)}`; } return a.path(d + ` L${x} ${y2}`); };
  a.res = (x1, y, x2, lab = "") => { const m = (x1 + x2) / 2, w = Math.min(36, (x2 - x1) * .6); return a.line(x1, y, m - w / 2, y) + a.spring(m - w / 2, y, m + w / 2, 3, 6) + a.line(m + w / 2, y, x2, y) + (lab ? a.txt(m, y - 10, lab, 'text-anchor="middle"') : ""); };
  a.vres = (x, y1, y2, lab = "") => { const m = (y1 + y2) / 2, w = Math.min(36, (y2 - y1) * .6); return a.line(x, y1, x, m - w / 2) + a.vspring(x, m - w / 2, m + w / 2, 3, 6) + a.line(x, m + w / 2, x, y2) + (lab ? a.txt(x + 10, m + 4, lab) : ""); };
  a.cell = (x, y, lab = "") => a.line(x - 3, y - 12, x - 3, y + 12, 'style="stroke-width:2.4"') + a.line(x + 3, y - 6, x + 3, y + 6, 'style="stroke-width:3.2"') + (lab ? a.txt(x, y - 16, lab, 'text-anchor="middle"') : "");
  a.cap = (x, y, lab = "") => a.line(x - 4, y - 12, x - 4, y + 12, 'style="stroke-width:2.6"') + a.line(x + 4, y - 12, x + 4, y + 12, 'style="stroke-width:2.6"') + (lab ? a.txt(x, y - 16, lab, 'text-anchor="middle"') : "");
  a.ind = (x1, y, x2, lab = "") => { const n = 4, w = (x2 - x1) / n; let d = `M${x1} ${y}`; for (let i = 0; i < n; i++) d += ` a${w / 2} ${w / 2} 0 0 1 ${w} 0`; return a.path(d) + (lab ? a.txt((x1 + x2) / 2, y - w / 2 - 6, lab, 'text-anchor="middle"') : ""); };
  a.pulley = (x, y, r = 14) => a.circ(x, y, r, 'class="fl2"') + a.dot(x, y, 2.5);
  a.arcm = (cx, cy, r, a1, a2, o = 'class="thin"') => { const p = d => [cx + r * Math.cos(d * Math.PI / 180), cy - r * Math.sin(d * Math.PI / 180)]; const [x1, y1] = p(a1), [x2, y2] = p(a2); return a.path(`M${x1.toFixed(1)} ${y1.toFixed(1)} A${r} ${r} 0 ${Math.abs(a2 - a1) > 180 ? 1 : 0} 0 ${x2.toFixed(1)} ${y2.toFixed(1)}`, o); };
  a.wave = (x1, y, x2, amp, cyc, o = "", ph = 0) => { let d = ""; for (let k = 0; k <= 120; k++) { const x = x1 + (x2 - x1) * k / 120; d += (k ? "L" : "M") + x.toFixed(1) + " " + (y - amp * Math.sin(2 * Math.PI * cyc * k / 120 + ph)).toFixed(1); } return a.path(d, o); };
  a.lens = (x, y, h, concave = false) => concave ? a.path(`M${x - 9} ${y - h} L${x + 9} ${y - h} Q${x + 2} ${y} ${x + 9} ${y + h} L${x - 9} ${y + h} Q${x - 2} ${y} ${x - 9} ${y - h}Z`, 'class="fl2"') : a.path(`M${x} ${y - h} Q${x + 16} ${y} ${x} ${y + h} Q${x - 16} ${y} ${x} ${y - h}Z`, 'class="fl2"');
  a.into = (x, y) => a.circ(x, y, 5, 'class="thin"') + a.line(x - 3, y - 3, x + 3, y + 3, 'class="thin"') + a.line(x - 3, y + 3, x + 3, y - 3, 'class="thin"');
  a.outof = (x, y) => a.circ(x, y, 5, 'class="thin"') + a.dot(x, y, 1.6);
  a.grid = (x1, y1, x2, y2, gap, f) => { let s = ""; for (let x = x1; x <= x2; x += gap) for (let y = y1; y <= y2; y += gap) s += f(x, y); return s; };
  a.hatch = (x1, x2, y) => a.ground(x1, x2, y);
  a.wall = (x, y1, y2) => a.line(x, y1, x, y2) + Array.from({ length: Math.floor((y2 - y1) / 10) }, (_, i) => `<line x1="${x}" y1="${y1 + i * 10}" x2="${x - 7}" y2="${y1 + i * 10 + 10}" class="thin"/>`).join("");
  a.ceil = (x1, x2, y) => a.line(x1, y, x2, y) + Array.from({ length: Math.floor((x2 - x1) / 10) }, (_, i) => `<line x1="${x1 + i * 10}" y1="${y}" x2="${x1 + i * 10 + 10}" y2="${y - 7}" class="thin"/>`).join("");

  // --- maths helpers ---
  a.axes = (ox, oy, x1, x2, y1, y2, xl = "x", yl = "y") => a.arr(x1, oy, x2, oy, 'class="thin"') + a.arr(ox, y1, ox, y2, 'class="thin"') + a.txt(x2 - 8, oy + 14, xl) + a.txt(ox + 6, y2 + 10, yl);
  a.venn = (shade = "", labs = ["A", "B"]) => { // shade: "A", "B", "AB" (∩), "U" (∪), "A-B", "B-A", "D" (symmetric difference), "C" (complement of A∪B)
    const cA = "M40 65 a45 45 0 1 0 90 0 a45 45 0 1 0 -90 0", cB = "M90 65 a45 45 0 1 0 90 0 a45 45 0 1 0 -90 0", lens = "M110 27.6 A45 45 0 0 1 110 102.4 A45 45 0 0 1 110 27.6Z";
    const F = d => `<path d="${d}" class="fl" fill-rule="evenodd" style="stroke:none"/>`;
    const sh = { A: F(cA), B: F(cB), AB: F(lens), U: F(cA) + F(cB), "A-B": F(cA + " " + lens), "B-A": F(cB + " " + lens), D: F(cA + " " + cB), C: F("M5 5 h210 v120 h-210Z") + `<path d="${cA}" style="fill:var(--paper);stroke:none"/><path d="${cB}" style="fill:var(--paper);stroke:none"/>` }[shade] || "";
    return sh + a.rect(5, 5, 210, 120, 'class="thin" style="fill:none"') + a.path(cA, 'style="fill:none"') + a.path(cB, 'style="fill:none"') + a.txt(48, 30, labs[0]) + a.txt(165, 30, labs[1]) + a.txt(12, 20, "U");
  };
  a.tri = (p, o = "") => a.path(`M${p[0][0]} ${p[0][1]} L${p[1][0]} ${p[1][1]} L${p[2][0]} ${p[2][1]}Z`, o);
  a.lab = (x, y, s) => a.dot(x, y) + a.txt(x + 5, y - 5, s);
})();
