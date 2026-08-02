# RPi WebLauncher

A lightweight, web-first game launcher for Raspberry Pi and similar devices.

You could even run this on a chromebook!


## What this is

RPi WebLauncher is a compact launcher that runs browser games. The repo provides a tiny index.html you copy-paste to any device; it loads JS and CSS from jsDelivr so the local file stays very small.

This project is the successor to my previous and now private c-hub.

## How it works
1. Place the whole folder on your Pi and open `index.html`.
2. Pick a game in the library.
3. The launcher opens that game's standalone HTML file in a new browser window.

## Features
- Static files only: no build step, server, or dependencies required.
- Premium UI for selecting games.
- Games open in isolated about:blank windows
- Optimized for lightweight hardware and minimal overhead

## Adding a game

1. Add a self-contained HTML file to `games/`.
2. Add one object to `games.js` with its title, genre, rating, description, cover image, and file path.
3. Add a square SVG/PNG cover to `assets/` and point the object's `image` field at it.

The card catalog, search, filters, and launch behavior update automatically. The starter game files are intentionally simple placeholders ready to be replaced with your own games.

## Roadmap
- Add my own small browser games and ports.
- Add other people’s games; with permission.

## Contributing
If you want your game added, feel free to open a discussion and link the game and credits you’d like!
