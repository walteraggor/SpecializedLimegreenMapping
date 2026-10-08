# SpecializedLimegreenMapping

A small static web page. It shows an image on a yellow background; clicking the image swaps it for a second image and back again. If an audio file is configured, it plays while the second image is shown.

## Files

| File | Purpose |
| --- | --- |
| `index.html` | The page: heading, image and audio element |
| `script.js` | Click handler that toggles the image (and audio) |
| `style.css` | Page styling |
| `second.svg` | The second image (a placeholder you can replace) |
| `sound.wav` | A short chime that plays with the second image |
| `.replit`, `replit.nix` | Replit configuration |

## Running it

There is no build step.

- **On Replit:** open the project and press Run (or deploy it as a static site).
- **Locally:** serve the folder with any static server, for example `python3 -m http.server 8000`, then open http://localhost:8000.

## Customising

- **Second image:** replace `second.svg`, or change `SECOND_IMAGE` at the top of `script.js` to point at your own file.
- **First image:** it is currently loaded from an external site. Save your own copy in the repo and change `FIRST_IMAGE` in `script.js` and the `src` of `#myImage` in `index.html`.
- **Audio:** replace `sound.wav` with your own sound file, or change the `src` attribute on `<audio id="myAudio">` in `index.html`. Remove the `src` to run the page without sound.
