# RPi WebLauncher

A lightweight, web-first game launcher for Raspberry Pi and similar devices.

You could even run this on a chromebook!


## What this is

RPi WebLauncher is a compact launcher that runs browser programs. The root `index.html` is the portable copy-paste launcher: it loads the shared UI, catalog, and game files from this repository through jsDelivr.

This project is the successor to my previous and now private c-hub.

The launcher source code is available under the MIT License. Programs and
artwork included in the catalog may have different licenses and remain the
property of their respective creators.

## How it works
1. Copy the root `index.html` or download it from the repository.
2. Open it on your Pi, Chromebook, or desktop browser.
3. Pick a program in the library. The launcher fetches its HTML and streams it into a dedicated `about:blank` window; the program's additional assets load from their CDN as needed.

## Features
- Portable single-file launcher; no local server or build step required.
- Shared assets are loaded from jsDelivr.
- Responsive library UI styled after the Digits & Kineto website.
- Search (press `/` to jump to it), category tabs, sorting, and grid/list views.
- Favorites and a "Continue playing" row, remembered in the browser's `localStorage`.
- Programs launch in dedicated `about:blank` windows. The launcher streams HTML responses into the window so GitHub CDN pages run even when served with a plain-text MIME type, without holding a second full HTML string in memory.
- Program scripts run with the launcher's origin and can access its browser storage. The launcher clears the legacy shared GPT Luna key, and GPT Luna now keeps its API key only in that program window's `sessionStorage`.
- Optimized for lightweight hardware and minimal overhead.
- Low-power mode (on by default, toggle in the header) injects a small shim
  into each program before its own scripts run: it renders at 1x pixel density,
  disables WebGL antialiasing, and closes the previous program window when you
  open another so only one program holds memory at a time. Animal Crossing
  additionally renders at the GameCube's native 640x480 instead of 1920x1440
  and skips `preserveDrawingBuffer` unless a display filter is enabled.
- GPT Luna uses the OpenAI API and requires your own API key; it does not run local WebGPU models.
- Catalog entries link to their source repositories and show estimated performance ratings.
- Web-Ports cards use upstream icons where available and generated title icons as a fallback.

The Web-Ports catalog adds 53 pages from the public `web-ports`
organization repositories, including multiple games from repositories that
contain more than one entry page. The organization currently has 70 public
repositories; after applying the 20 requested exclusions, 50 remain. One
otherwise eligible repository (`castle-crashers`) currently has no game files.
Each port's HTML is streamed into an `about:blank` window from jsDelivr's
GitHub CDN rather than copied into this repository; relative resources load
from the same upstream repository. Game downloads vary substantially;
some Unity ports require hundreds of megabytes. Performance ratings are rough
estimates, not measured benchmarks.

Animal Crossing (GameCube) requires a USA GAFE01 Rev 0 disc image, which is not
included. The upstream page hides its ROM picker and automatically loads split
disc-image files, leaving a "LOADING..." banner while processing them. The
launcher disables that automatic download and restores the picker so players
can select their own disc image.

GPT Luna keeps the API key in that program window's `sessionStorage`; closing
the window clears it. The key is sent directly from the browser to OpenAI, so
use a restricted key and avoid entering it on shared devices. Revoke the key
from your OpenAI account when it is no longer needed.

## Adding a program

1. Add a self-contained HTML file to `games/`.
2. Add its cover to `assets/`.
3. Add one object to the `GAMES` array inside `games.js` with its title, category, rating, description, cover image, file path, and creator credit.

## Local preview

Run a static server from the repository root, then open `http://localhost:8000`:

```powershell
py -m http.server 8000
```

The preview loads the launcher files from the local checkout. Playing Web-Ports
games still requires an internet connection and fetches their HTML and assets
from upstream repositories. Program scripts share the launcher's origin and
browser storage while running in the popup.

The portable launcher is pinned to a commit so jsDelivr cannot serve an older
`main` snapshot. When publishing a new launcher build, update
`window.RPI_CDN_REVISION` in `index.html` to the commit containing the build.
Keep original third-party licenses and attribution with every program you add.

## Third-party licenses

The following included programs are distributed under the Apache License,
Version 2.0 (SPDX identifier: `Apache-2.0`):

- **GUST** — created by Nautilus Labs.
- **EaglerLite/Eaglercraft** — created by PlanetDoge.

A copy of the Apache 2.0 license is included at
[`LICENSES/APACHE-2.0.txt`](LICENSES/APACHE-2.0.txt). This repository's MIT
license applies to the launcher source code only; it does not replace or
override the licenses of included programs, artwork, libraries, or fonts.

The added Web-Ports entries are credited to the
[web-ports organization](https://github.com/web-ports), with a link to each
source repository on its card. The game ports and original games remain the
property of their respective creators; check the upstream repositories for
their license and attribution terms.

For redistribution, retain the relevant creator credits, license text, and
any `NOTICE` files supplied by the original project. Check each program's
repository for additional attribution or trademark requirements.

## Roadmap
- Add my own small browser games and ports.
- Add other people’s games; with permission.

## Contributing
If you want your game added, feel free to open a discussion and link the game and credits you’d like!
