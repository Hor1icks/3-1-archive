# 3-1 Archive

A subject archive intended to grow beyond its initial CSE-301 DBMS question bank. The current frontend is unchanged. Plain HTML, CSS and JavaScript; no installation or build step is needed.

## Publish using your own GitHub account

1. Create an empty **public** GitHub repository named **3-1-archive**. Leave the initial README, license and .gitignore options unchecked; the files are already supplied here.
2. Open PowerShell in this folder (the folder containing `index.html`).
3. Replace `YOUR NAME`, `YOUR_GITHUB_EMAIL` and `YOUR_USERNAME` below, then run:

```powershell
git init -b main
git config --local user.name "YOUR NAME"
git config --local user.email "YOUR_GITHUB_EMAIL"
git add .
git commit -m "Add 3-1 archive website"
git remote add origin https://github.com/YOUR_USERNAME/3-1-archive.git
git push -u origin main
```

Use an email associated with your GitHub account, or your GitHub-provided no-reply email (shown in GitHub email settings). These local author settings apply only to this repository. Sign in to your own GitHub account when Git asks for authentication.

4. In your repository, open **Settings → Pages**.
5. Set **Source** to **Deploy from a branch**, **Branch** to **main**, and **Folder** to **/(root)**; click **Save**.
6. Your site will be available at `https://YOUR_USERNAME.github.io/3-1-archive/` once publishing finishes.

Upload these files, not the ZIP. `index.html` and `.nojekyll` belong at the repository root. The empty `.nojekyll` file makes GitHub Pages serve the static files directly. Keep `assets`, `data` and `sources` beside `index.html`.

No commits have been created in this package. No remote repository has been created and nothing has been pushed. No co-author trailer, bot account or contributor attribution is included. The commands above create the commit under the identity you specify.

## Publish later updates

After editing files, run from the same folder:

```powershell
git add .
git commit -m "Update archive"
git push
```

GitHub Pages republishes the site after the push. If editing question data, run the sync tool described below before committing. The repository and question data are public when using GitHub Pages on GitHub Free.

## Preview on your computer

Open `index.html` in a modern browser. The question bank loads from a local script, so a server is not required. Some browsers restrict clipboard access or saved-question persistence for files; deployed HTTPS hosting supports these features normally.

For a local server, from this folder run `python -m http.server 8765`, then visit `http://localhost:8765`.

## Included content

- Nine term-final source files: 2016, 2017, 2018, 2019, 2021, source label 2022, 2023, 2024, 2025.
- Six 2026 assessments: Class Test 1, Class Test 2, Class Test 3, Class Test 3 Group B, Midterm 1, and Midterm 1 Group B.
- 78 written question groups, with their scenarios and subparts, plus the two printed 2021 viva allocations.
- Your nine taught chapters and an Others category. RAID, storage topics and data mining are filed under Others.
- Selectable text throughout, including relational schemas, functional dependencies, tables, schedules, and a text hierarchy for the supplied B+ tree figure.

Search `BCNF`, `Boyce-Codd normal form`, or `What questions contained BCNF?` for the same eight complete question groups. Search is case insensitive and recognizes common variants such as ER/E-R/ERD, B+/B⁺, 2PL/two-phase locking, and normalization/normalisation. Combine chapter, topic, multiple years, and assessment filters. Select years using the checkbox menu; no selected years means all years. Search `"BCNF" "deadlock"` to match either quoted term, or `"SQL injection"` to match a whole phrase. Separate quoted terms without commas. Unquoted searches retain their existing keyword behavior. A question can belong to several chapters; the complete parent question remains together in the results.

The bookmark button saves a question in the current browser. Copy link gives a direct link to an expanded question. Filter selections also appear in the URL. No account is needed.

## Source qualifications

- The source file labeled 2022 is headed **2021 (July–August 2021)**. Both labels are disclosed; filtering follows the filename year to keep it separate from the February 2021 paper.
- Class Test 1 has no printed date. Its 2026 year follows the user's description and its inclusion with the dated 2026 assessments.
- The September 24 paper is headed **Class Test 3, Group B**. A handwritten “CT=4” is not used to rename it.
- The 2023 paper refers to Employee/Sales schemas and Figures 5(a), 6(b), and 7(a) that are absent from its supplied DBMS pages. These are explicitly flagged, not invented.
- Incomplete or inconsistent printed material is retained with notes. Statements that students are asked to assess have not been turned into textbook claims or corrected into answers.
- Projection subscripts use bracket notation, e.g. `π[R−S](r)`. Source primary-key underlines in explicitly transcribed schema figures are represented by `[PK]`; `→` denotes the pictured foreign-key reference.
- The two 2021 viva entries contain only marks allocations; no oral questions are supplied.
- Original PDFs are available through each question's source link. They are reference attachments; the question bank itself uses text.

## Edit or extend the bank

The canonical content file is `data/questions.json`. Each entry has a stable `id`, year, assessment, parent question number, title, full `body`, chapter IDs, topic tags, marks, source filename, original page numbers, and source notes. New 2026 entries also carry dates where printed.

Bodies support plain paragraphs, fenced code blocks, and pipe tables. Prefix subparts with `a.`, `b.`, etc. Keep full scenarios and all subparts together. Do not insert raw HTML into the content; it is escaped by the renderer.

After editing JSON, run:

```text
node tools/sync-data.mjs
```

This updates the browser data (`data/questions.js`) and downloadable text export (`data/question-bank.md`). Upload the updated folder to Netlify.

## Validation

```text
node tools/verify.mjs
node tools/verify-interface.mjs
```

The first verifies source coverage, data integrity, table structure, search aliases and deployment files. The second executes the actual interface code against an in-memory DOM to check search, filtering, saving, expanding, copying links, pagination and escaping. Counts are intentionally tied to the delivered source set and should be updated when adding papers.

**Verification limit:** live browser access was blocked by the authoring session's browser policy. Desktop/mobile visual rendering has not been verified in a real browser. The responsive layouts are implemented, and syntax, data and interface-code checks passed.

## Files

- `index.html`, `styles.css`, `app.js`: interface and interaction.
- `search.js`: local search and aliases.
- `data/questions.json`: editable structured content.
- `data/questions.js`: browser-ready content.
- `data/question-bank.md`: complete reusable text bank.
- `sources/`: original-page reference PDFs, loaded only when a source link is opened.
- `tools/`: content synchronization and validation; not required to run the website.
- `netlify.toml`: static-hosting configuration.

## Marks for individual parts

Each card shows a marks breakdown for its lettered parts (or Tasks A/B/C). Expanded questions show allocations beside the relevant part, including nested queries where the source provides a breakdown. Source expressions such as `6+5+5=16` are preserved. The footer explicitly labels the parent total.

Where the source gives only a group total, the parts are labeled as sharing that total; no separate marks are invented. The 23 July 2026 midterm does not print task allocations, and the 3 September class-test normalization question prints only its shared 15-mark total. Source arithmetic discrepancies are explained in the relevant question's notes.

Marks are stored in each question's `partMarks` entries, keyed to its paragraph index. When editing question text, update those indices as needed before running the sync tool.
