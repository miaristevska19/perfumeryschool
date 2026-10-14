# Perfumery Portfolio

A one-page, story-driven portfolio for a perfumery traineeship application.

## Folder structure

```
perfumery-portfolio/
├── index.html        ← the page (all your text lives here)
├── css/
│   └── style.css     ← colours, fonts, layout
├── js/
│   └── main.js       ← scroll animations
├── images/           ← put your vision-board photos here
└── README.md         ← this file
```

## 1. Personalise it

Open `index.html` in VS Code and search for `✏️ EDIT`. Each of those comments marks a block to rewrite:

- Chapter I: your first scent memory and how it started
- Chapter II: your 5 countries (with a scent for each) and 4 languages
- Chapter III: why perfumery
- Chapter IV: your perfume name, story, notes and vision board
- Chapter V: your top 3 favourite perfumes
- Your name (search "Your Name", "Y.N." and "your first name") and your email (search "YOUR-EMAIL")
- Epilogue: LinkedIn link (or delete that button)

### Vision board pictures
Save your photos in the `images/` folder and name them `vision-1.jpg` … `vision-6.jpg`
(or change the file names in `index.html`). Until a picture exists, a coloured tile shows instead.
Tip: keep each image under ~500 KB so the page loads fast.

### Colours
All colours are at the top of `css/style.css` under `:root`. Change them there once and the whole site updates.

## 2. Preview on your computer

Double-click `index.html`, or in VS Code install the **Live Server** extension and click "Go Live".

## 3. Publish with GitHub Pages

1. Create a new repository on github.com (e.g. `perfumery-portfolio`), set to **Public**.
2. Upload the **contents** of this folder (so `index.html` is at the top level of the repo, not inside a subfolder). On the repo page: **Add file → Upload files**, drag everything in, then **Commit changes**.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, branch **main**, folder **/ (root)**, then **Save**.
5. Wait 1–2 minutes. Your site will be live at `https://YOUR-USERNAME.github.io/perfumery-portfolio/`.

Every time you edit a file and commit it, the site updates by itself.

## Troubleshooting

- **Blank page / 404:** `index.html` must be in the repo root, and the file name must be lowercase.
- **No styling:** check that the `css/` and `js/` folders were uploaded with their files.
- **Image not showing:** file names are case-sensitive on GitHub (`Vision-1.JPG` ≠ `vision-1.jpg`).
