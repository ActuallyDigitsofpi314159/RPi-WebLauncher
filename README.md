# RPi WebLauncher

A lightweight, web-first game launcher for Raspberry Pi and similar devices.

You could even run this on a chromebook!


## What this is

RPi WebLauncher is a compact launcher that runs browser programs. The root `index.html` is the portable copy-paste launcher: it loads the shared UI, catalog, and game files from this repository through jsDelivr.

This project is the successor to my previous and now private c-hub.

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

The card catalog, search, filters, credits, and launch behavior update automatically after the changes are pushed to GitHub. Keep original third-party licenses and attribution with every program you add.

## Roadmap
- Add my own small browser games and ports.
- Add other people’s games; with permission.

## Contributing
If you want your game added, feel free to open a discussion and link the game and credits you’d like!
