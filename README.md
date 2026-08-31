# APAN/Asi@Connect Leaders Forum (AALF)

A companion website for the [APAN/Asi@Connect Leaders Forum](https://apan.net/apan-asiaconnect-leaders-forum/),
collecting the forum overview and the NREN-related report from each APAN meeting (APAN56–APAN61) as its own page.

## Structure

```
index.html              Home — overview, objectives, participants, report timeline, contact
reports/apan56.html      APAN56 — Colombo, inaugural forum
reports/apan57.html      APAN57
reports/apan58.html      APAN58
reports/apan59.html      APAN59
reports/apan60.html      APAN60
reports/apan61.html      APAN61 — forum renamed AALF
assets/css/style.css    Shared styles
assets/js/network.js    Animated hero node graphic
```

Plain HTML/CSS/JS — no build step. Each report page embeds and links out to the original PDF hosted on apan.net.

## Deploying with GitHub Pages

1. Push this repo to GitHub.
2. In the repo, go to **Settings → Pages**.
3. Under **Build and deployment → Source**, choose **Deploy from a branch**.
4. Under **Branch**, choose `main` and folder `/ (root)`, then **Save**.
5. GitHub gives you a URL like `https://<username>.github.io/<repo-name>/` within a minute or two.

## Editing content

- Report text lives directly in each `reports/apanNN.html` file (`<p class="lede">…</p>`).
- The timeline strip at the top of each report page and in `index.html#reports` is duplicated per page —
  update all pages together if you add a new APAN edition.
