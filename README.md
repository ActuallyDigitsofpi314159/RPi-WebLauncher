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
3. Pick a program in the library. The launcher opens its CDN-hosted HTML file in a new browser window.

## Features
- Portable single-file launcher; no local server or build step required.
- Shared assets are loaded from jsDelivr.
- Premium UI for selecting games.
- Games open in isolated about:blank windows
- Optimized for lightweight hardware and minimal overhead

## Adding a program

1. Add a self-contained HTML file to `games/`.
2. Add its cover to `assets/`.
3. Add one object to the `GAMES` array inside `games.js` with its title, category, rating, description, cover image, file path, and creator credit.

The portable launcher is pinned to commit `d73db8a3256ad795fe0b6ac0597b921bbb5ffd5a` so jsDelivr cannot serve an older `main` snapshot. When publishing a new launcher build, update `window.RPI_CDN_REVISION` in `index.html` to the new commit hash. Keep original third-party licenses and attribution with every program you add.

## Third-party licenses

The following included programs are distributed under the Apache License,
Version 2.0 (SPDX identifier: `Apache-2.0`):

- **GUST** — created by Nautilus Labs.
- **EaglerLite/Eaglercraft** — created by PlanetDoge.

A copy of the Apache 2.0 license is included at
[`LICENSES/APACHE-2.0.txt`](LICENSES/APACHE-2.0.txt). This repository's MIT
license applies to the launcher source code only; it does not replace or
override the licenses of included programs, artwork, libraries, or fonts.

For redistribution, retain the relevant creator credits, license text, and
any `NOTICE` files supplied by the original project. Check each program's
repository for additional attribution or trademark requirements.

## Roadmap
- Add my own small browser games and ports.
- Add other people’s games; with permission.

## Contributing
If you want your game added, feel free to open a discussion and link the game and credits you’d like!
