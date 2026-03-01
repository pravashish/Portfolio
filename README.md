# Portfolio — Data Engineer

A clean, single-file developer portfolio built with plain HTML/CSS/JS.
No frameworks. No build step. Deployable directly to GitHub Pages.

## Project Structure

```
portfolio/
├── index.html            # The portfolio UI (auto-renders from data.js)
├── data.js               # Your content — edit this file to update the site
├── update_portfolio.py   # Script to auto-fill data.js from your resume
└── README.md
```

## Quickstart

### Option 1 — Edit manually
Open `data.js` and replace the placeholder text with your real info.
Then open `index.html` in your browser.

### Option 2 — Auto-fill from your resume
Drop your resume into this folder, then run:

```bash
pip install pdfplumber python-docx   # one-time setup
python update_portfolio.py resume.pdf
```

Supported formats: `.pdf`, `.docx`, `.txt`

The script extracts:
- Name, title, location
- Email, LinkedIn, GitHub, Medium, LeetCode, Twitter, Kaggle (including embedded hyperlinks)
- Skills grouped by category
- Work experience with bullet points
- Projects with tags and links
- Summary/bio paragraphs

After running, refresh `index.html` in your browser to see the result.
Review `data.js` and tweak anything the parser missed.

## Deploying to GitHub Pages

See the deployment steps in the section below.
