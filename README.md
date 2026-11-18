# Thesis progress log

A simple, static progress page for my PhD guides. It has four tabs: Overview, Daily log, Documents and Reading.

**Note:** GitHub Pages sites are public. Anyone with the link can read this page, so keep the log high level. Documents are **not** stored here. They live in a Google Drive folder shared only with my guides.

## Files

| File | What it is | How often you edit it |
|---|---|---|
| `index.html` | The page layout and design | Rarely |
| `data.js` | All the content: log, documents, reading list, overview | Daily |
| `README.md` | These instructions | Never |

## One-time setup (about 10 minutes)

1. Sign in at github.com and click **New repository**.
2. Give it a name, e.g. `thesis-progress`. Select **Public**, then click **Create repository**.
3. Click **uploading an existing file**, drag in `index.html`, `data.js` and `README.md`, then click **Commit changes**.
4. Go to **Settings → Pages**. Under *Build and deployment*, set **Source** to *Deploy from a branch*, choose **main** and **/(root)**, then click **Save**.
5. Wait a minute or two, then refresh the Pages settings. The site address appears at the top, for example `https://<your-username>.github.io/thesis-progress/`.
6. Open it in a private or incognito window to check that it loads.

## Google Drive setup (one time)

1. Create a folder in Drive (e.g. *Thesis – shared with guides*) and upload the documents.
2. Share the **folder** with each guide's email address as **Viewer** (or **Commenter**). Keep *General access* set to **Restricted**. Do **not** use "Anyone with the link", because the link is visible on a public page.
3. For each file, click **Share → Copy link** and paste it into that document's `link` field in `data.js`.

## Daily update (2–3 minutes)

1. In the repository, open `data.js` and click the pencil icon (**Edit**).
2. Copy the topmost log entry, from `{` down to `},`, paste it directly above itself, and change the date and text.
3. Click **Commit changes**. The site updates within a minute or two.

Alternatively, send the day's notes to Claude in the project and paste back the updated `data.js`.

Tab links can be shared directly: `…/#log`, `…/#documents`, `…/#reading`.
