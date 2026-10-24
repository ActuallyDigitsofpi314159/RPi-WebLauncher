#!/usr/bin/env node
const fs = require('node:fs');
const path = require('node:path');
const babel = require('@babel/core');
const presetEnv = require('@babel/preset-env');

const root = path.join(__dirname, '..');
const htmlPath = path.join(root, 'dashparkour.html');
const programPath = path.join(root, 'games', 'dashparkour-program.js');
const checkOnly = process.argv.includes('--check');
const sourcePaths = [
  path.join(root, 'lib', 'promise-polyfill.js'),
  path.join(root, 'lib', 'processing-dash.js'),
  path.join(root, 'lib', 'ka-exporter.js'),
  programPath,
];

function read(pathname) {
  return fs.readFileSync(pathname, 'utf8').replace(/\r\n/g, '\n').trimEnd();
}

function assertES5(source, filename) {
  const ast = babel.parseSync(source, {
    babelrc: false,
    configFile: false,
    sourceType: 'script',
    filename,
  });
  const modernTypes = new Set([
    'ArrowFunctionExpression', 'ArrayPattern', 'AwaitExpression', 'BigIntLiteral',
    'ClassDeclaration', 'ClassExpression', 'ClassMethod', 'ClassPrivateMethod',
    'ClassPrivateProperty', 'ClassProperty', 'DynamicImport', 'ForOfStatement',
    'ImportDeclaration', 'ImportExpression', 'MetaProperty',
    'ObjectPattern', 'OptionalCallExpression', 'OptionalMemberExpression',
    'PrivateName', 'RestElement', 'SpreadElement', 'TaggedTemplateExpression',
    'TemplateLiteral', 'YieldExpression',
  ]);
  const modernMethods = new Set([
    'at', 'endsWith', 'find', 'findIndex', 'flat', 'flatMap', 'includes',
    'padEnd', 'padStart', 'replaceAll', 'startsWith', 'trimEnd', 'trimStart',
  ]);
  const stack = [ast];
  while (stack.length) {
    const node = stack.pop();
    if (!node || typeof node !== 'object') continue;
    if (modernTypes.has(node.type) ||
        (node.type === 'ObjectMethod' && node.kind !== 'get' && node.kind !== 'set') ||
        (node.type === 'VariableDeclaration' && node.kind !== 'var') ||
        (node.type === 'ObjectProperty' && (node.shorthand || node.computed || node.method)) ||
        ((node.type === 'FunctionDeclaration' || node.type === 'FunctionExpression') && (node.generator || node.async)) ||
        (node.type === 'RegExpLiteral' && /[uy]/.test(node.flags || ''))) {
      throw new Error(`${filename} contains non-ES5 syntax: ${node.type || node.kind}`);
    }
    if (node.type === 'CallExpression' &&
        node.callee.type === 'MemberExpression' &&
        !node.callee.computed &&
        modernMethods.has(node.callee.property.name)) {
      throw new Error(`${filename} uses a non-ES5 method: ${node.callee.property.name}`);
    }
    Object.keys(node).forEach(key => {
      const value = node[key];
      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          if (value[i] && typeof value[i] === 'object') stack.push(value[i]);
        }
      } else if (value && typeof value === 'object' && typeof value.type === 'string') {
        stack.push(value);
      }
    });
  }
}

function transpileSource(pathname) {
  const original = read(pathname);
  if (checkOnly) assertES5(original, pathname);
  const result = babel.transformSync(original, {
    babelrc: false,
    configFile: false,
    sourceType: 'script',
    filename: pathname,
    comments: true,
    compact: false,
    presets: [[presetEnv, { targets: { ie: '11' }, modules: false }]],
  });
  const code = result.code.replace(/\r\n/g, '\n').trimEnd();
  assertES5(code, pathname);
  if (!checkOnly && original !== code) fs.writeFileSync(pathname, code + '\n');
  return code;
}

function compress(input) {
  const previous = new Int32Array(input.length);
  const latest = new Map();
  const encoded = [];
  let position = 0;
  let flags = 0;
  let flagPosition = 0;
  let tokens = 0;

  function remember(index) {
    if (index + 2 >= input.length) return;
    const key = input[index] * 65536 + input[index + 1] * 256 + input[index + 2];
    previous[index] = latest.has(key) ? latest.get(key) : -1;
    latest.set(key, index);
  }

  while (position < input.length) {
    if (tokens === 0) {
      flagPosition = encoded.length;
      encoded.push(0);
      flags = 0;
    }

    let bestLength = 0;
    let bestDistance = 0;
    if (position + 2 < input.length) {
      const key = input[position] * 65536 + input[position + 1] * 256 + input[position + 2];
      let candidate = latest.has(key) ? latest.get(key) : -1;
      for (let attempts = 0; candidate >= 0 && position - candidate <= 4096 && attempts < 48; attempts++) {
        let length = 0;
        const maxLength = Math.min(18, input.length - position);
        while (length < maxLength && input[candidate + length] === input[position + length]) length++;
        if (length > bestLength) {
          bestLength = length;
          bestDistance = position - candidate;
          if (length === 18) break;
        }
        candidate = previous[candidate];
      }
    }

    if (bestLength >= 3) {
      const code = (bestDistance - 1) | ((bestLength - 3) << 12);
      encoded.push(code & 255, code >>> 8);
      for (let offset = 0; offset < bestLength; offset++) remember(position + offset);
      position += bestLength;
    } else {
      flags |= 1 << tokens;
      encoded.push(input[position]);
      remember(position++);
    }

    if (++tokens === 8) {
      encoded[flagPosition] = flags;
      tokens = 0;
    }
  }

  if (tokens) encoded[flagPosition] = flags;
  return Uint8Array.from(encoded);
}

const loader = String.raw`(function() {
  var screen = document.getElementById("boot-screen");
  var status = document.getElementById("boot-status");
  var detail = document.getElementById("boot-detail");
  var progress = document.getElementById("boot-progress");
  var payloadElement = document.getElementById("game-payload");
  var lengthParts = payloadElement.getAttribute("data-lengths").split(",");
  var lengths = [];
  var total = 0;
  var frame = window.requestAnimationFrame || function(callback) {
    return window.setTimeout(callback, 16);
  };
  var payload = payloadElement.textContent.replace(/^\s+|\s+$/g, "");
  payloadElement.parentNode.removeChild(payloadElement);
  for (var lengthIndex = 0; lengthIndex < lengthParts.length; lengthIndex++) {
    lengths.push(parseInt(lengthParts[lengthIndex], 10));
    total += lengths[lengthIndex];
  }

  function fail(error) {
    if (window.console && window.console.error) window.console.error("DASH Parkour failed to start:", error);
    status.textContent = "Unable to start the offline game.";
    detail.textContent = error && error.message ? error.message : String(error);
    progress.hidden = true;
  }

  function decodeSource(output, start, end, done) {
    var position = start;
    var parts = [];
    var codes = [];

    function flushCodes() {
      if (codes.length) {
        parts.push(String.fromCharCode.apply(null, codes));
        codes = [];
      }
    }

    function decodeChunk() {
      try {
        var work = 0;
        while (position < end && work < 16384) {
          var first = output[position++];
          var codePoint;
          if (first < 128) {
            codePoint = first;
          } else if (first < 224) {
            if (position >= end) throw new Error("Incomplete UTF-8 sequence.");
            codePoint = ((first & 31) << 6) | (output[position++] & 63);
          } else if (first < 240) {
            if (position + 1 >= end) throw new Error("Incomplete UTF-8 sequence.");
            codePoint = ((first & 15) << 12) | ((output[position++] & 63) << 6) | (output[position++] & 63);
          } else {
            if (position + 2 >= end) throw new Error("Incomplete UTF-8 sequence.");
            codePoint = ((first & 7) << 18) | ((output[position++] & 63) << 12) |
              ((output[position++] & 63) << 6) | (output[position++] & 63);
          }

          if (codePoint <= 65535) {
            codes.push(codePoint);
          } else {
            codePoint -= 65536;
            codes.push((codePoint >> 10) + 55296, (codePoint & 1023) + 56320);
          }
          if (codes.length >= 8192) flushCodes();
          work++;
        }
        if (position < end) {
          frame(decodeChunk);
        } else {
          flushCodes();
          done(parts.join(""));
        }
      } catch (error) {
        fail(error);
      }
    }

    frame(decodeChunk);
  }

  function bootScripts(output) {
    var sourceIndex = 0;
    var byteOffset = 0;
    var labels = ["ES5 Promise compatibility", "Processing renderer", "Offline game adapter", "DASH Parkour"];

    function bootNext() {
      if (sourceIndex >= lengths.length) {
        status.textContent = "Starting DASH Parkour...";
        try {
          if (window.__dashParkourBootPromise && typeof window.__dashParkourBootPromise.then === "function") {
            window.__dashParkourBootPromise.then(function() {
              frame(function() {
                if (screen.parentNode) screen.parentNode.removeChild(screen);
              }, fail);
            }, fail);
          } else {
            frame(function() {
              if (screen.parentNode) screen.parentNode.removeChild(screen);
            });
          }
        } catch (error) {
          fail(error);
        }
        return;
      }

      var endOffset = byteOffset + lengths[sourceIndex];
      status.textContent = "Decoding game code — " + (sourceIndex + 1) + " / " + lengths.length;
      detail.textContent = labels[sourceIndex] || "Game code";
      decodeSource(output, byteOffset, endOffset, function(source) {
        try {
          var script = document.createElement("script");
          script.text = source;
          document.body.appendChild(script);
          byteOffset = endOffset;
          sourceIndex++;
          frame(bootNext);
        } catch (error) {
          fail(error);
        }
      });
    }

    bootNext();
  }

  function start() {
    try {
      status.textContent = "Decoding compressed game data...";
      var binary = window.atob(payload);
      var compressed = new Array(binary.length);
      for (var byteIndex = 0; byteIndex < binary.length; byteIndex++) {
        compressed[byteIndex] = binary.charCodeAt(byteIndex);
      }

      var output = new Array(total);
      var inputPosition = 0;
      var outputPosition = 0;
      var flags = 0;
      var tokensLeft = 0;
      var lastReport = 0;

      function decodeChunk() {
        try {
          var work = 0;
          while (outputPosition < total && work < 16384) {
            var previousPosition = outputPosition;
            if (!tokensLeft) {
              if (inputPosition >= compressed.length) throw new Error("Compressed data ended unexpectedly.");
              flags = compressed[inputPosition++];
              tokensLeft = 8;
            }
            if (flags & 1) {
              if (inputPosition >= compressed.length) throw new Error("Compressed literal is incomplete.");
              output[outputPosition++] = compressed[inputPosition++];
            } else {
              if (inputPosition + 1 >= compressed.length) throw new Error("Compressed match is incomplete.");
              var code = compressed[inputPosition++] | (compressed[inputPosition++] << 8);
              var distance = (code & 4095) + 1;
              var matchLength = (code >>> 12) + 3;
              if (distance > outputPosition || outputPosition + matchLength > total) {
                throw new Error("Compressed match is outside the output buffer.");
              }
              for (var matchIndex = 0; matchIndex < matchLength; matchIndex++) {
                output[outputPosition] = output[outputPosition - distance];
                outputPosition++;
              }
            }
            flags >>>= 1;
            tokensLeft--;
            work += outputPosition - previousPosition;
          }

          if (outputPosition - lastReport >= 32768 || outputPosition === total) {
            var percent = Math.floor(outputPosition * 100 / total);
            status.textContent = "Decoding game data — " + percent + "%";
            detail.textContent = outputPosition.toLocaleString() + " / " +
              total.toLocaleString() + " bytes decompressed";
            progress.value = percent;
            lastReport = outputPosition;
          }
          if (outputPosition < total) {
            frame(decodeChunk);
            return;
          }
          if (inputPosition !== compressed.length) {
            throw new Error("Compressed data contains unexpected trailing bytes.");
          }
          bootScripts(output);
        } catch (error) {
          fail(error);
        }
      }

      frame(decodeChunk);
    } catch (error) {
      fail(error);
    }
  }

  frame(start);
})();`;

assertES5(loader, 'boot loader');

function makeShell(html) {
  const scripts = [...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
  if (scripts.length !== 3) throw new Error(`Expected 3 original inline scripts, found ${scripts.length}.`);
  if (fs.existsSync(programPath)) throw new Error('The game source already exists; refusing to overwrite it.');

  let program = scripts[2][1].trim();
  const runCall = /runPJS\(program\);\s*$/;
  if (!runCall.test(program)) throw new Error('The game boot call was not found.');
  program = program.replace(runCall, 'window.__dashParkourBootPromise = runPJS(program);');
  fs.writeFileSync(programPath, program + '\n');

  const first = scripts[0].index;
  const last = scripts[2].index + scripts[2][0].length;
  const style = `<style>
#boot-screen{position:fixed;inset:0;z-index:10;display:grid;place-items:center;padding:24px;background:#090a10;color:#f5f4f0;font:14px system-ui,sans-serif}
#boot-card{width:min(460px,100%);padding:28px;border:1px solid #272a38;border-radius:16px;background:#11131c;box-shadow:0 24px 90px #0009}
#boot-kicker{margin:0 0 12px;color:#b8f279;font:11px monospace;letter-spacing:.18em}
#boot-card h1{margin:0;font-size:24px}
#boot-status{margin:18px 0 8px;color:#f5f4f0}
#boot-progress{display:block;width:100%;height:8px;accent-color:#b8f279}
#boot-detail{min-height:1.5em;margin:10px 0 0;color:#9294a5;font:12px monospace}
</style>
<div id="boot-screen" role="status" aria-live="polite">
  <div id="boot-card">
    <p id="boot-kicker">OFFLINE LZSS BUILD</p>
    <h1>Preparing DASH Parkour</h1>
    <p id="boot-status">Preparing compressed game data...</p>
    <progress id="boot-progress" max="100" value="0"></progress>
    <p id="boot-detail">The game starts after decoding completes.</p>
  </div>
</div>`;
  const replacement = `${style}
<script type="application/x-lzss" id="game-payload"></script>
<script id="game-loader">${loader}</script>`;
  return html.slice(0, first) + replacement + html.slice(last);
}

function updateLoader(html) {
  const pattern = /(<script type="application\/x-lzss" id="game-payload"[^>]*>[\s\S]*?<\/script>\s*)<script(?:\s+id="game-loader")?[^>]*>[\s\S]*?<\/script>/i;
  if (!pattern.test(html)) throw new Error('The compressed payload and boot loader were not found.');
  return html.replace(pattern, `$1<script id="game-loader">${loader}</script>`);
}

function getSources(html) {
  const payload = html.match(/<script type="application\/x-lzss" id="game-payload"[^>]*>[\s\S]*?<\/script>/i);
  if (!payload) html = makeShell(html);
  else html = updateLoader(html);

  const lengths = [];
  const sources = sourcePaths.map(transpileSource);
  const input = Buffer.concat(sources.map(source => {
    const bytes = Buffer.from(source, 'utf8');
    lengths.push(bytes.length);
    return bytes;
  }));
  return { html, input, lengths };
}

function updatePayload(html, compressed, lengths) {
  const encoded = Buffer.from(compressed).toString('base64');
  const element = `<script type="application/x-lzss" id="game-payload" data-lengths="${lengths.join(',')}">${encoded}</script>`;
  const pattern = /<script type="application\/x-lzss" id="game-payload"[^>]*>[\s\S]*?<\/script>/i;
  if (pattern.test(html)) return html.replace(pattern, element);
  throw new Error('The game payload element was not found.');
}

let html = read(htmlPath);
const built = getSources(html);
html = built.html;
const compressed = compress(built.input);
const updated = updatePayload(html, compressed, built.lengths);

if (checkOnly) {
  if (updated !== html) throw new Error('Compressed game payload is out of date. Run node tools/build-dashparkour.cjs.');
  console.log(`PASS: current LZSS payload matches source files (${built.input.length.toLocaleString()} -> ${compressed.length.toLocaleString()} bytes).`);
} else {
  fs.writeFileSync(htmlPath, updated + '\n');
  const finalHtmlSize = Buffer.byteLength(updated, 'utf8');
  console.log(`Built standalone DASH Parkour: ${built.input.length.toLocaleString()} source bytes compressed to ${compressed.length.toLocaleString()} LZSS bytes; HTML is ${finalHtmlSize.toLocaleString()} bytes.`);
}
