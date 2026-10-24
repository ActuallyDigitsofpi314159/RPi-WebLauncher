# Dash Parkour standalone build

`dashparkour.html` is the self-contained offline game. The editable sources are
`lib/promise-polyfill.js`, `lib/processing-dash.js`, `lib/ka-exporter.js`, and
`games/dashparkour-program.js`.

After editing a source, run `npm run build:dashparkour` to transpile the bundle
to ES5 syntax and regenerate the embedded LZSS payload. Run
`npm run check:dashparkour` to verify the ES5 source rules and payload
freshness. The build shows decompression progress before starting the game.
