# CodeWithSharu – VTU 2025 Scheme

A responsive, data-driven static website starter for VTU engineering learning resources.

## Run locally
1. Extract the ZIP.
2. Open the `CodeWithSharu` folder in VS Code.
3. Install/enable the Live Server extension.
4. Right-click `index.html` → Open with Live Server.

No build step or package installation is required.

## Current scope
- VTU 2025 Scheme selector.
- CSE and AI&ML branch selectors.
- Semester selector 1–8.
- AI&ML semesters other than semester 3 are intentionally pending.
- Semester 3 shared-data structure and extracted Probability, Distributions and Statistics module topics.
- Initial DDC/CO and OS module topic outlines; verify against complete official subject pages before publishing.
- Other course modules marked pending when the complete source was not verified.
- Module-wise syllabus-derived practice questions (not falsely labelled as previous-year questions).
- Programming examples, Git commands, quiz, theme toggle, mobile navigation.
- Resume/profile placeholder.

## Important syllabus accuracy note
The available source found in the project work is `34cscommsyll.pdf`. The extracted content supports the 3rd-semester Probability, Distributions and Statistics subject and portions of other CSE syllabus pages. The complete AI&ML 3rd-semester PDF was not available for a full subject-by-subject comparison. Therefore:
- The shared 3rd-semester subject mapping is a working structure, not a certification that every CSE subject is identical in AI&ML.
- Verify the AI&ML syllabus PDF before declaring subjects common.
- Do not fill pending semesters by guessing.
- Add verified previous-year question papers before displaying PYQ labels or repetition counts.

## Add syllabus content
Edit `data/common-sem3.js`. Each subject uses:
- `id`, `code`, `name`, `modules`
- each module uses `title` and `topics`
- set `verified: true` only when checked against an official source.
The app automatically renders the modules and topics.

## Publish using GitHub Pages
1. Create a GitHub repository named `codewithsharu` (or another name).
2. Upload all files and folders from this project; keep `index.html` at repository root.
3. Open repository Settings → Pages.
4. Select Deploy from a branch → `main` → `/ (root)` → Save.
5. Wait for deployment and open the generated GitHub Pages URL.

## Before public launch
- Replace the sample profile/resume section with details you approve for publication.
- Replace the example contact address.
- Add official AI&ML syllabus PDF and verify the common semester-3 mapping.
- Complete pending CSE and AI&ML semester records from official PDFs.
- Add question paper sources and answer keys.
- If adding registration, real user accounts require a secure backend/authentication provider; GitHub Pages alone is static hosting and cannot securely store passwords or private student data.
