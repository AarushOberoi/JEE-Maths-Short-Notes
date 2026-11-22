# ∑ JEE Maths Short Notes

Chapter-wise **JEE Main Mathematics short notes** with JEE Main PYQ (previous year question) focus points, covering the Class 11 and Class 12 syllabus.

🔗 **Read online:** https://jeemathsshortnotes.aarushoberoi.workers.dev

---

## ✨ Features

- **Chapter-wise notes** for Class 11 and Class 12 Maths
- **JEE Main PYQ focus points** in each chapter
- **Weightage tags** on every chapter: Low, Medium, High or Very high, so you know where to spend your time
- **"Not in JEE Main syllabus" labels** so you can skip chapters that aren't examined
- **Revision tracker** (*Revised X / 25 chapters*) to mark chapters as done
- **Light and dark theme** toggle
- **Beautifully typeset maths** rendered with KaTeX
- **Single-page app** with hash-based routing (e.g. `/#/c/11-4`), so every chapter has its own shareable link
- **Mobile-friendly** with a collapsible chapter menu
- **No sign-up, no backend**, just open and revise

## 📚 Chapters

### Class 11

| # | Chapter | JEE Main weightage |
| - | ------- | ------------------ |
| 1 | Sets | Low |
| 2 | Relations and Functions | Medium |
| 3 | Trigonometric Functions | High |
| 4 | Complex Numbers and Quadratic Equations | Very high |
| 5 | Linear Inequalities | Not in JEE Main syllabus |
| 6 | Permutations and Combinations | High |
| 7 | Binomial Theorem | High |
| 8 | Sequences and Series | Very high |
| 9 | Straight Lines | High |
| 10 | Conic Sections | Very high |
| 11 | Introduction to Three Dimensional Geometry | Low |
| 12 | Limits and Derivatives | Medium |
| 13 | Statistics | High |
| 14 | Probability | Medium |

### Class 12

| # | Chapter | JEE Main weightage |
| - | ------- | ------------------ |
| 1 | Relations and Functions | High |
| 2 | Inverse Trigonometric Functions | Medium |
| 3 | Matrices | High |
| 4 | Determinants | High |
| 5 | Continuity and Differentiability | Medium |
| 6 | Application of Derivatives | High |
| 7 | Integrals | Very high |
| 8 | Application of Integrals | High |
| 9 | Differential Equations | High |
| 10 | Vector Algebra | High |
| 11 | Three Dimensional Geometry | Very high |
| 12 | Linear Programming | Not in JEE Main syllabus |
| 13 | Probability | High |

## 🗂️ Project Structure

```
JEE-Maths-Short-Notes/
├── index.html                 # App shell
├── css/                       # Stylesheets
├── js/                        # App logic (routing, rendering, revision tracker)
├── data/                      # Chapter notes content
├── ajax:libs:KaTeX:0.16.9/    # KaTeX (maths rendering)
├── s:inter:v20/               # Inter font files
├── css2                       # Font stylesheet
└── README.md
```

## 🚀 Run Locally

No build tools needed. Clone the repo and serve the folder with any static server:

```bash
git clone https://github.com/AarushOberoi/JEE-Maths-Short-Notes.git
cd JEE-Maths-Short-Notes

# Option 1: Python
python -m http.server 8000

# Option 2: Node
npx serve .
```

Then open `http://localhost:8000`.

## ☁️ Deployment

Deployed as static assets on **Cloudflare Workers**:

```bash
npx wrangler deploy
```

## 🛠️ Built With

- HTML / CSS / JavaScript
- [KaTeX](https://katex.org/) for maths typesetting
- [Inter](https://rsms.me/inter/) typeface
- Cloudflare Workers (hosting)

## 🤝 Contributing

Found a typo or a wrong formula? Contributions are welcome:

1. Fork the repository
2. Create a branch: `git checkout -b fix/chapter-name`
3. Commit your changes and open a pull request

## ⚠️ Disclaimer

These are unofficial study notes. Chapter weightage labels are indicative, based on JEE Main trends. Always cross-check with your textbooks and the official NTA syllabus.

## 👤 Author

Made by [Aarush Oberoi](https://github.com/AarushOberoi)
