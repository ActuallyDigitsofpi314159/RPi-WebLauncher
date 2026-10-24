This directory contains the Khan Academy Processing.js runtime used by DASH
Parkour, with a specialized 2D `triangle()` implementation that emits the same
Canvas path while reusing its private vertex records. The 3D renderer remains
unchanged. `__dashStyle(out)` provides a read-only renderer style snapshot for
the game's bounded text raster cache.

Upstream source: https://github.com/Khan/processing-js/blob/master/processing.js

The exact downloaded upstream source has SHA-256
`20551f67e3ed9b80aeebaa772913bc00c0b5b4cf92179b09444e1536a2db7e80`.
The unminified fork retains all upstream source and includes comments at each
local change. The upstream MIT license and named authors are retained in
`processing-LICENSE` and `processing-AUTHORS`.

`ka-exporter.js` is a local copy of Mushy Avocado's KA exporter v1.0.1. Its
original MIT notice remains at the top of the file, together with its upstream
hash. The local changes reuse the already-loaded Processing runtime and use
`ResizeObserver` to update canvas layout when its container changes. Browsers
without that API retain the original per-frame layout update.

`promise-polyfill.js` is the MIT-licensed `es6-promise` 4.2.8 automatic
polyfill, included before the exporter so its transpiled asynchronous loading
works in ES5-era browsers. Its license is in `promise-polyfill-LICENSE`.
Exporter string checks use ES5 `indexOf` methods.

`dashparkour.html` contains the Promise polyfill, Processing runtime, exporter,
and game program in an LZSS-compressed Base64 payload so it can be copied and
opened as a standalone file. The editable sources are `promise-polyfill.js`,
`processing-dash.js`, `ka-exporter.js`, and `../games/dashparkour-program.js`.
After changing a source, rebuild the payload
with `npm run build:dashparkour`; Babel transpiles the bundled scripts to ES5
syntax as part of that build, and the check rejects commonly used post-ES5
string/array methods. Verify the sources and payload with
`npm run check:dashparkour`. The page decodes the payload in animation-frame
chunks and shows its progress before starting the game. The launcher catalog does
not include Dash Parkour.
