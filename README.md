# MobiusVision Homepage

Static education technology company website. Edit `index.html` for content and
`assets/sass/main.scss` for styles, then rebuild the checked-in CSS:

```sh
npx --yes sass@1.98.0 assets/sass/main.scss assets/css/main.css --style=expanded --no-source-map
```

Preview locally with `python3 -m http.server 4173 --bind 127.0.0.1`.

The social sharing image is rendered from `images/social-preview.html`. After
updating that template, regenerate the PNG with the local server running:

```sh
npx playwright screenshot --browser=chromium --viewport-size="1200,630" --wait-for-timeout=1500 http://127.0.0.1:4173/images/social-preview.html images/og-image.png
```

Product references: [WritingBetter](https://writingbetter.net/),
[SpeakingBetter](https://speakingbetter.net/), [Vovo](https://vovo.ailelab.com/),
and [AILE Lab research](https://ailelab.com/#projects).
