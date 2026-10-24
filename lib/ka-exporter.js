function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _regenerator() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/babel/babel/blob/main/packages/babel-helpers/LICENSE */var e,
    t,
    r = "function" == typeof Symbol ? Symbol : {},
    n = r.iterator || "@@iterator",
    o = r.toStringTag || "@@toStringTag";
  function i(r, n, o, i) {
    var c = n && n.prototype instanceof Generator ? n : Generator,
      u = Object.create(c.prototype);
    return _regeneratorDefine2(u, "_invoke", function (r, n, o) {
      var i,
        c,
        u,
        f = 0,
        p = o || [],
        y = !1,
        G = {
          p: 0,
          n: 0,
          v: e,
          a: d,
          f: d.bind(e, 4),
          d: function d(t, r) {
            return i = t, c = 0, u = e, G.n = r, a;
          }
        };
      function d(r, n) {
        for (c = r, u = n, t = 0; !y && f && !o && t < p.length; t++) {
          var o,
            i = p[t],
            d = G.p,
            l = i[2];
          r > 3 ? (o = l === n) && (u = i[(c = i[4]) ? 5 : (c = 3, 3)], i[4] = i[5] = e) : i[0] <= d && ((o = r < 2 && d < i[1]) ? (c = 0, G.v = n, G.n = i[1]) : d < l && (o = r < 3 || i[0] > n || n > l) && (i[4] = r, i[5] = n, G.n = l, c = 0));
        }
        if (o || r > 1) return a;
        throw y = !0, n;
      }
      return function (o, p, l) {
        if (f > 1) throw TypeError("Generator is already running");
        for (y && 1 === p && d(p, l), c = p, u = l; (t = c < 2 ? e : u) || !y;) {
          i || (c ? c < 3 ? (c > 1 && (G.n = -1), d(c, u)) : G.n = u : G.v = u);
          try {
            if (f = 2, i) {
              if (c || (o = "next"), t = i[o]) {
                if (!(t = t.call(i, u))) throw TypeError("iterator result is not an object");
                if (!t.done) return t;
                u = t.value, c < 2 && (c = 0);
              } else 1 === c && (t = i.return) && t.call(i), c < 2 && (u = TypeError("The iterator does not provide a '" + o + "' method"), c = 1);
              i = e;
            } else if ((t = (y = G.n < 0) ? u : r.call(n, G)) !== a) break;
          } catch (t) {
            i = e, c = 1, u = t;
          } finally {
            f = 1;
          }
        }
        return {
          value: t,
          done: y
        };
      };
    }(r, o, i), !0), u;
  }
  var a = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  t = Object.getPrototypeOf;
  var c = [][n] ? t(t([][n]())) : (_regeneratorDefine2(t = {}, n, function () {
      return this;
    }), t),
    u = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(c);
  function f(e) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(e, GeneratorFunctionPrototype) : (e.__proto__ = GeneratorFunctionPrototype, _regeneratorDefine2(e, o, "GeneratorFunction")), e.prototype = Object.create(u), e;
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, _regeneratorDefine2(u, "constructor", GeneratorFunctionPrototype), _regeneratorDefine2(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = "GeneratorFunction", _regeneratorDefine2(GeneratorFunctionPrototype, o, "GeneratorFunction"), _regeneratorDefine2(u), _regeneratorDefine2(u, o, "Generator"), _regeneratorDefine2(u, n, function () {
    return this;
  }), _regeneratorDefine2(u, "toString", function () {
    return "[object Generator]";
  }), (_regenerator = function _regenerator() {
    return {
      w: i,
      m: f
    };
  })();
}
function _regeneratorDefine2(e, r, n, t) {
  var i = Object.defineProperty;
  try {
    i({}, "", {});
  } catch (e) {
    i = 0;
  }
  _regeneratorDefine2 = function _regeneratorDefine(e, r, n, t) {
    function o(r, n) {
      _regeneratorDefine2(e, r, function (e) {
        return this._invoke(r, n, e);
      });
    }
    r ? i ? i(e, r, {
      value: n,
      enumerable: !t,
      configurable: !t,
      writable: !t
    }) : e[r] = n : (o("next", 0), o("throw", 1), o("return", 2));
  }, _regeneratorDefine2(e, r, n, t);
}
function asyncGeneratorStep(n, t, e, r, o, a, c) {
  try {
    var i = n[a](c),
      u = i.value;
  } catch (n) {
    return void e(n);
  }
  i.done ? t(u) : Promise.resolve(u).then(r, o);
}
function _asyncToGenerator(n) {
  return function () {
    var t = this,
      e = arguments;
    return new Promise(function (r, o) {
      var a = n.apply(t, e);
      function _next(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "next", n);
      }
      function _throw(n) {
        asyncGeneratorStep(a, r, o, _next, _throw, "throw", n);
      }
      _next(void 0);
    });
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, e) {
  if ("object" != _typeof(t) || !t) return t;
  var r;
  if ("undefined" != typeof Symbol && void 0 !== (r = t[Symbol.toPrimitive])) {
    var i = r.call(t, e || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === e ? String : Number)(t);
}
/* DASH Parkour exporter fork. Original v1.0.1: https://github.com/Mushy-Avocado/KA-exporter
 * SHA-256: 53890e66763cb3e6e255c69c19fb7c569987747a0790c1bab7cd0057a41f73cf
 * Changes: reuse loaded Processing; observe layout changes; bound the render
 * buffer to the sketch size and fit the display with CSS.
 */
/******************************************************************************

MIT License

Copyright (c) 2023 Mushy Avocado

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

******************************************************************************/
(function () {
  var loadID = Date.now();
  window.currentLoad = loadID;

  // Warn about Firefox - it has poor performance
  (function () {
    var warnedFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') === -1 || localStorage.getItem('warnedFirefox');
    if (!warnedFirefox) {
      alert("This game uses Processing.js, which has poor performance in Firefox. It is strongly recommended you open this in Chrome.");
      localStorage.setItem('warnedFirefox', true);
    }
  })();
  function getFunctionBody(func) {
    if (typeof func === "function") {
      func = func.toString();
    }
    return func.substring(func.indexOf("{") + 1, func.lastIndexOf("}"));
  }
  // Whether a url has a file extension or not.
  function hasFileExtension(source) {
    var a = source.split('/');
    return a[a.length - 1].indexOf('.') !== -1;
  }
  // Caches assets to load before the program starts for preloading
  var assets = function () {
    var cache = {};
    var imageURLs = [],
      soundURLs = [];
    var currentProgress = 0;
    function loadCache() {
      return Promise.all([
      // Load cached image URLs
      new Promise(function (resolve, reject) {
        var index = 0,
          next = function next() {
            currentProgress++;
            if (++index >= imageURLs.length) resolve();
          };
        if (imageURLs.length === 0) return void resolve();
        imageURLs.forEach(function (url) {
          cache[url] = new Image();
          cache[url].crossOrigin = "anonymous";
          cache[url].onload = next;
          cache[url].onerror = next;
          cache[url].src = url;
        });
      }).catch(console.error),
      // Load cached sound URLs
      new Promise(function (resolve, reject) {
        var index = 0,
          next = function next() {
            currentProgress++;
            if (++index >= soundURLs.length) resolve();
          };
        if (soundURLs.length === 0) return void resolve();
        soundURLs.forEach(function (url) {
          cache[url] = new Audio(url);
          cache[url].crossOrigin = "anonymous";
          cache[url].oncanplaythrough = next;
          cache[url].onerror = next;
        });
      }).catch(console.error)]);
    }
    var assetRoot = '/';
    return {
      // Loading progress (between 0-1)
      get progress() {
        return currentProgress / (soundURLs.length + imageURLs.length);
      },
      load: loadCache,
      cache: cache,
      cacheImageURL: function cacheImageURL(url) {
        if (imageURLs.indexOf(url) !== -1) return;
        imageURLs.push(url);
      },
      cacheSoundURL: function cacheSoundURL(url) {
        if (soundURLs.indexOf(url) !== -1) return;
        soundURLs.push(url);
      },
      getImageURL: function getImageURL(source) {
        if (window.location.href.indexOf("kasandbox.org") !== -1) source = "https://cdn.kastatic.org/third_party/javascript-khansrc/live-editor/build/images/" + source + ".png";else if (source.indexOf(assetRoot + 'images') !== 0) source = assetRoot + 'images/' + source;
        if (!hasFileExtension(source)) source += '.png';
        return source;
      },
      getSoundURL: function getSoundURL(source) {
        if (window.location.href.indexOf("kasandbox.org") !== -1) source = "https://cdn.kastatic.org/third_party/javascript-khansrc/live-editor/sounds/" + source;else if (source.indexOf(assetRoot + 'sounds') !== 0) source = assetRoot + 'sounds/' + source;
        if (!hasFileExtension(source)) source += '.mp3';
        return source;
      }
    };
  }();
  var fullscreen = function () {
    function enableFullscreen() {
      if (document.documentElement.reqestFullscreen) {
        document.documentElement.requestFullscreen();
      } else if (document.documentElement.mozRequestFullScreen) {
        document.documentElement.mozRequestFullScreen();
      } else if (document.documentElement.webkitRequestFullscreen) {
        document.documentElement.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      }
    }
    function disableFullscreen() {
      if (document.exitFullScreen) {
        document.exitFullScreen();
      } else if (document.mozExitFullScreen) {
        document.mozExitFullScreen();
      } else if (document.webkitExitFullScreen) {
        document.webkitExitFullScreen();
      }
      if (document.cancelFullScreen) {
        document.cancelFullScreen();
      } else if (document.mozCancelFullScreen) {
        document.mozCancelFullScreen();
      } else if (document.webkitCancelFullScreen) {
        document.webkitCancelFullScreen();
      }
    }
    function isFullscreen() {
      return document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement;
    }
    // Fullscreen toggle
    function toggleFullscreen() {
      if (!isFullscreen()) enableFullscreen();else disableFullscreen();
    }
    return {
      enable: enableFullscreen,
      disable: disableFullscreen,
      toggle: toggleFullscreen
    };
  }();
  // Loaded assets that are ready for PJS to use
  var pjsImages = {},
    pjsSounds = {};
  // Initializes the program to make it load
  window.importerKA = function (processing, canvas) {
    var layout = function (canvas) {
      // Updates the scale of the canvas to fit its parent element
      function updateScaling() {
        var parent = canvas.parentElement;
        var parentRect = parent.getBoundingClientRect();
        var parentWidth = parentRect.right - parentRect.left;
        var parentHeight = parentRect.bottom - parentRect.top;
        var scaleX = parentWidth / canvas.width;
        var scaleY = parentHeight / canvas.height;
        if (!doResize && Math.min(scaleX, scaleY) > 1) {
          canvas.style.scale = 1;
          return;
        }
        canvas.style.scale = Math.min(scaleX, scaleY);
      }
      ;
      return {
        update: function update() {
          updateScaling();
        }
      };
    }(canvas);
    // Subsribe to various events to update the layout.
    screen.orientation.addEventListener("change", layout.update);
    window.addEventListener("resize", layout.update);
    window.addEventListener("load", layout.update);
    // To fix an issue where Processing.js throws an error on mobile and breaks the layout
    window.addEventListener("touchstart", function () {
      return layout.update();
    }, {
      once: true
    });
    // Observe actual layout changes instead of reading/writing CSS every frame.
    // Keep the original per-frame fallback in browsers without ResizeObserver.
    processing.__dashLayoutObserved = typeof window.ResizeObserver === "function";
    if (processing.__dashLayoutObserved) {
      var observer = new ResizeObserver(layout.update);
      observer.observe(canvas.parentElement);
    }
    // Apply defaults
    processing.size(400, 400);
    processing.angleMode = "degrees";
    processing.draw = function () {}; // draw() needs a value for PJS to run it
    var doResize = true;
    var canvasScaleX = 1;
    var canvasScaleY = 1;
    // Tells processing.js what the width and height actually is for certain rendering functions
    function pushSize() {
      processing.width *= canvasScaleX;
      processing.height *= canvasScaleY;
    }
    function popSize() {
      processing.width /= canvasScaleX;
      processing.height /= canvasScaleY;
    }
    // Save old copies of PJS functions
    var old = _defineProperty({
      get: processing.get.bind(processing),
      image: processing.image.bind(processing),
      loadImage: processing.loadImage.bind(processing),
      background: processing.background.bind(processing),
      resetMatrix: processing.resetMatrix.bind(processing),
      filter: processing.filter.bind(processing)
    }, "loadImage", processing.loadImage.bind(processing));
    function snapToIncrement(val, increment) {
      return Math.ceil(val / increment) * increment;
    }
    // Resizes the canvas to render at a higher resolution.
    var resize = function resize(width, height) {
      var scaleIncrement = Math.min(processing.width, processing.height);
      if (!doResize) return;
      width = snapToIncrement(width, scaleIncrement);
      height = snapToIncrement(height, scaleIncrement);
      // DASH uses a 600x600 sketch. Large screens should not multiply its
      // render workload; CSS scales the display and canvasX/Y map input.
      height = Math.min(height, processing.height);
      // Match to the aspect ratio of the canvas
      width = height * (processing.width / processing.height);
      height = height;
      canvas.width = width;
      canvas.height = height;
      canvasScaleX = width / processing.width;
      canvasScaleY = height / processing.height;
      old.resetMatrix();
      processing.scale(canvasScaleX, canvasScaleY);
      layout.update();
    };
    // Size only sets the actual variable "width" and "height". resize() takes care of the rest.
    processing.size = function (w, h) {
      processing.width = w;
      processing.height = h;
      var w = window.parent !== window.top ? document.body.clientWidth : screen.width;
      var h = window.parent !== window.top ? document.body.clientHeight : screen.height;
      var targetW = w;
      var targetH = h;
      resize(targetW, targetH);
      layout.update();
      processing.background(255);
    };
    // Sets the title for the project
    processing.title = function (value) {
      document.title = value;
    };
    // Override loadImage and getImage.
    // Image files should be stored in /images/filePath
    processing.loadImage = processing.getImage = function (source) {
      source = assets.getImageURL(source);
      if (!pjsImages[source]) {
        if (assets.cache[source]) {
          var pimg = new processing.PImage(),
            img = assets.cache[source];
          pimg.fromHTMLImageData(img);
          pimg.loaded = true;
          pjsImages[source] = pimg;
        } else {
          pjsImages[source] = old.loadImage(source);
          pjsImages[source].sourceImg.crossOrigin = "anonymous";
          assets.cacheImageURL(source);
        }
      }
      return pjsImages[source];
    };
    // Override getSound and playSound.
    // Sound files should be stored in /sounds/filePath
    processing.getSound = function (source) {
      source = assets.getSoundURL(source);
      if (!pjsSounds[source]) {
        pjsSounds[source] = assets.cache[source] || new Audio(source);
        pjsSounds[source].audio = pjsSounds[source];
      }
      return pjsSounds[source];
    };
    processing.playSound = function (sound) {
      var volume = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
      sound.volume = volume;
      sound.currentTime = 0;
      sound.play().catch(function (e) {
        console.warn(e);
      });
    };
    // Draws at the correct scale when no width and height are given
    processing.image = function (img, x, y, w, h) {
      if (!w && !h) old.image(img, x, y, img.width / (img.originScaleX || 1), img.height / (img.originScaleY || 1));else old.image(img, x, y, w, h);
    };
    // Captures the correct part of the screen
    processing.get = function () {
      var ret;
      if (arguments.length == 0) ret = old.get(0, 0, canvas.width, canvas.height);else if (arguments.length == 2) ret = old.get(arguments[0] * canvasScaleX, arguments[1] * canvasScaleY);else ret = old.get(arguments[0] * canvasScaleX, arguments[1] * canvasScaleY, arguments[2] * canvasScaleX, arguments[3] * canvasScaleY);
      // Makes sure the images are rendered correctly at a different scale
      ret.originScaleX = canvasScaleX;
      ret.originScaleY = canvasScaleY;
      return ret;
    };
    // Makes sure these render on the whole canvas
    processing.background = function () {
      pushSize();
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      old.background.apply(processing, args);
      popSize();
    };
    processing.filter = function () {
      pushSize();
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      old.filter.apply(processing, args);
      popSize();
    };
    // Makes sure the canvas is still scaled correctly
    processing.resetMatrix = function () {
      old.resetMatrix();
      processing.scale(canvasScaleX, canvasScaleY);
    };
    processing.debug = console.log.bind(console);
    processing.Program = {
      restart: window.location.reload.bind(window),
      assertEqual: console.warn.bind(console)
    };
    // Update mouse coordinates
    window.addEventListener("mousemove", function (e) {
      processing.mouseX = processing.round(processing.canvasX(e.clientX));
      processing.mouseY = processing.round(processing.canvasY(e.clientY));
    });
    // Scales an axis based on the size of the canvas
    // Takes a screen position as input
    processing.canvasX = function (x) {
      var clientRect = canvas.getBoundingClientRect();
      var scaleX = clientRect.width / (processing.width * canvasScaleX);
      return (x - clientRect.left) / (scaleX * canvasScaleX);
    };
    processing.canvasY = function (y) {
      var clientRect = canvas.getBoundingClientRect();
      var scaleY = clientRect.height / (processing.height * canvasScaleY);
      return (y - clientRect.top) / (scaleY * canvasScaleY);
    };
    // Sets/toggles the fullscreen state
    processing.fullscreen = function (bool) {
      if (bool == true) fullscreen.enable();else if (bool == false) fullscreen.disable();else fullscreen.toggle();
    };
    // Disabled scaling the canvas to be fullscreen
    processing.noResize = function () {
      resize(processing.width, processing.height);
      doResize = false;
      layout.update();
    };
    processing.noCursor = function () {
      processing.cursor("none");
    };
    processing.updateLayout = function () {
      return layout.update();
    };
    window.LoopProtector = function () {};
    processing.KAInfiniteLoopSetTimeout = function () {};
    processing.externals = {
      canvas: canvas,
      context: canvas.getContext("2d")
    };
    layout.update();
  };
  var pjsInstanceCount = 0;
  window.runPJS = /*#__PURE__*/function () {
    var _ref = _asyncToGenerator(/*#__PURE__*/_regenerator().m(function _callee(program) {
      var programString, index, pjsLoaded, script;
      return _regenerator().w(function (_context) {
        while (1) switch (_context.n) {
          case 0:
            programString = program.toString(); // Find all getImage() or loadImage() calls to preload before the program starts
            (function () {
              var imageURLs = ["animals/boxer-laying-down", "animals/butterfly", "animals/cat", "animals/collies", "animals/dog_sleeping-puppy", "animals/fox", "animals/kangaroos", "animals/rabbit", "animals/shark", "animals/sleeping-puppy", "creatures/Hopper-Jumping", "avatars/aqualine-sapling", "avatars/aqualine-seed", "avatars/aqualine-seedling", "avatars/aqualine-tree", "avatars/aqualine-ultimate", "avatars/avatar-team", "avatars/cs-hopper-cool", "avatars/cs-hopper-happy", "avatars/cs-hopper-jumping", "avatars/cs-ohnoes", "avatars/cs-winston-baby", "avatars/cs-winston", "avatars/duskpin-sapling", "avatars/duskpin-seed", "avatars/duskpin-seedling", "avatars/duskpin-tree", "avatars/duskpin-ultimate", "avatars/leaf-blue", "avatars/leaf-green", "avatars/leaf-grey", "avatars/leaf-orange", "avatars/leaf-red", "avatars/leaf-yellow", "avatars/leafers-sapling", "avatars/leafers-seed", "avatars/leafers-seedling", "avatars/leafers-tree", "avatars/leafers-ultimate", "avatars/marcimus-orange", "avatars/marcimus-purple", "avatars/marcimus-red", "avatars/marcimus", "avatars/mr-pants-green", "avatars/mr-pants-orange", "avatars/mr-pants-pink", "avatars/mr-pants-purple", "avatars/mr-pants-with-hat", "avatars/mr-pants", "avatars/mr-pink-green", "avatars/mr-pink-orange", "avatars/mr-pink", "avatars/mystery-2", "avatars/old-spice-man-blue", "avatars/old-spice-man", "avatars/orange-juice-squid", "avatars/piceratops-sapling", "avatars/piceratops-seed", "avatars/piceratops-seedling", "avatars/piceratops-tree", "avatars/piceratops-ultimate", "avatars/primosaur-sapling", "avatars/primosaur-seed", "avatars/primosaur-seedling", "avatars/primosaur-tree", "avatars/primosaur-ultimate", "avatars/purple-pi-pink", "avatars/purple-pi-teal", "avatars/purple-pi", "avatars/questionmark", "avatars/robot_female_1", "avatars/robot_female_2", "avatars/robot_female_3", "avatars/robot_male_1", "avatars/robot_male_2", "avatars/robot_male_3", "avatars/spunky-sam-green", "avatars/spunky-sam-orange", "avatars/spunky-sam-red", "avatars/spunky-sam", "avatars/starky-sapling", "avatars/starky-seed", "avatars/starky-seedling", "avatars/starky-tree", "avatars/starky-ultimate", "creatures/BabyWinston", "creatures/Hopper-Cool", "creatures/Hopper-Happy", "creatures/OhNoes-Happy", "creatures/OhNoes-Hmm", "creatures/OhNoes", "creatures/Winston", "cute/Blank", "cute/BrownBlock", "cute/CharacterBoy", "cute/CharacterCatGirl", "cute/CharacterHornGirl", "cute/CharacterPinkGirl", "cute/CharacterPrincessGirl", "cute/ChestClosed", "cute/ChestLid", "cute/ChestOpen", "cute/DirtBlock", "cute/DoorTallClosed", "cute/DoorTallOpen", "cute/EnemyBug", "cute/GemBlue", "cute/GemGreen", "cute/GemOrange", "cute/GrassBlock", "cute/Heart", "cute/Key", "cute/None", "cute/PlainBlock", "cute/RampEast", "cute/RampNorth", "cute/RampSouth", "cute/RampWest", "cute/Rock", "cute/RoofEast", "cute/RoofNorth", "cute/RoofNorthEast", "cute/RoofNorthWest", "cute/RoofSouth", "cute/RoofSouthEast", "cute/RoofSouthWest", "cute/RoofWest", "cute/Selector", "cute/ShadowEast", "cute/ShadowNorth", "cute/ShadowNorthEast", "cute/ShadowNorthWest", "cute/ShadowSideWest", "cute/ShadowSouth", "cute/ShadowSouthEast", "cute/ShadowSouthWest", "cute/ShadowWest", "cute/Star", "cute/StoneBlock", "cute/StoneBlockTall", "cute/TreeShort", "cute/TreeTall", "cute/TreeUgly", "cute/WallBlock", "cute/WallBlockTall", "cute/WaterBlock", "cute/WindowTall", "cute/WoodBlock", "food/berries", "food/brussels-sprouts", "food/coffee-beans", "food/fish_grilled-snapper", "food/grapes", "food/ice-cream", "food/oysters", "food/potato-chips", "food/shish-kebab", "food/tomatoes", "insideout/layer0blur0", "insideout/layer0blur10", "insideout/layer0blur20", "insideout/layer0blur40", "insideout/layer0blur80", "insideout/layer1blur0", "insideout/layer1blur10", "insideout/layer1blur20", "insideout/layer1blur40", "insideout/layer1blur80", "insideout/layer2blur0", "insideout/layer2blur10", "insideout/layer2blur20", "insideout/layer2blur40", "insideout/layer2blur80", "insideout/layer3blur0", "insideout/layer3blur10", "insideout/layer3blur100", "insideout/layer3blur20", "insideout/layer3blur40", "insideout/layer3blur80", "insideout/shot1_layer0blur0", "insideout/shot1_layer0blur10", "insideout/shot1_layer0blur20", "insideout/shot1_layer0blur40", "insideout/shot1_layer0blur80", "insideout/shot1_layer1blur0", "insideout/shot1_layer1blur10", "insideout/shot1_layer1blur20", "insideout/shot1_layer1blur40", "insideout/shot1_layer1blur80", "insideout/shot1_layer2blur0", "insideout/shot1_layer2blur10", "insideout/shot1_layer2blur20", "insideout/shot1_layer2blur40", "insideout/shot1_layer2blur80", "insideout/shot1_layer3blur0", "insideout/shot1_layer3blur10", "insideout/shot1_layer3blur20", "insideout/shot1_layer3blur40", "insideout/shot1_layer3blur80", "insideout/shot1_layer4blur0", "insideout/shot1_layer4blur10", "insideout/shot1_layer4blur20", "insideout/shot1_layer4blur40", "insideout/shot1_layer4blur80", "insideout/shot1_layer5blur0", "insideout/shot1_layer5blur10", "insideout/shot1_layer5blur20", "insideout/shot1_layer5blur40", "insideout/shot1_layer5blur80", "insideout/shot2_layer0blur10", "insideout/shot2_layer0blur20", "insideout/shot2_layer0blur40", "insideout/shot2_layer0blur80", "insideout/shot2_layer1blur10", "insideout/shot2_layer1blur20", "insideout/shot2_layer1blur40", "insideout/shot2_layer1blur80", "insideout/shot2_layer2blur10", "insideout/shot2_layer2blur20", "insideout/shot2_layer2blur40", "insideout/shot2_layer2blur80", "insideout/shot2_layer3blur10", "insideout/shot2_layer3blur20", "insideout/shot2_layer3blur40", "insideout/shot2_layer3blur80", "insideout/shot2_layer4blur10", "insideout/shot2_layer4blur20", "insideout/shot2_layer4blur40", "insideout/shot2_layer4blur80", "landscapes/beach-in-hawaii", "landscapes/beach-waves-at-sunset", "landscapes/beach-waves-at-sunset2", "landscapes/beach-waves-daytime", "landscapes/clouds-from-plane", "landscapes/fields-of-grain", "landscapes/lake-steam-rising", "landscapes/lava", "landscapes/mountain_matterhorn", "landscapes/mountains-and-lake", "landscapes/sand-dunes", "misc/tim-berners-lee", "pixar/Incredibles_a_fill", "pixar/Incredibles_a_fill_wFog", "pixar/Incredibles_a_key", "pixar/Incredibles_a_key_wFog", "pixar/Incredibles_bnc", "pixar/Incredibles_fillExt", "pixar/Incredibles_fillInt", "pixar/Incredibles_fill_wFog", "pixar/Incredibles_kck", "pixar/Incredibles_key", "pixar/Incredibles_key_wFog", "pixar/Incredibles_target", "pixar/army2", "pixar/bing1", "pixar/bing2", "pixar/cars1", "pixar/food1", "pixar/lamp", "pixar/rat_1", "pixar/rat_2", "pixar/rat_3", "scratchpads/colorpicker_hsb_b", "scratchpads/colorpicker_hsb_s", "scratchpads/colorpicker_overlay", "scratchpads/colorpicker_rgb_g", "scratchpads/colorpicker_select", "scratchpads/cool-critter", "scratchpads/error-buddy", "scratchpads/happy-critter", "scratchpads/jumping-critter", "scratchpads/leaf-green", "scratchpads/leaf-orange", "scratchpads/leaf-red", "scratchpads/leaf-yellow", "scratchpads/speech-arrow", "scratchpads/topic-drawing", "scratchpads/topic-user-interaction", "seasonal/father-winston", "seasonal/fireworks-in-sky", "seasonal/fireworks-scattered", "seasonal/gingerbread-house", "seasonal/gingerbread-man", "seasonal/hannukah-menorah", "seasonal/hopper-partying", "seasonal/house-with-lights", "seasonal/reindeer-with-hat", "seasonal/snow-crystal1", "seasonal/snow-crystal3", "seasonal/snownoes", "seasonal/stocking-empty", "seasonal/xmas-ornament-boat", "seasonal/xmas-ornaments", "seasonal/xmas-scene-holly-border", "seasonal/xmas-tree", "space/0", "space/1", "space/2", "space/3", "space/4", "space/5", "space/6", "space/7", "space/8", "space/9", "space/background", "space/beetleship", "space/collisioncircle", "space/girl1", "space/girl2", "space/girl3", "space/girl4", "space/girl5", "space/healthheart", "space/minus", "space/octopus", "space/planet", "space/plus", "space/rocketship", "space/star", "animals/birds_rainbow-lorakeets", "animals/komodo-dragon", "animals/snake_green-tree-boa", "landscapes/beach-sunset", "landscapes/beach-with-palm-trees", "landscapes/fields-of-wine", "landscapes/mountains-in-hawaii", "food/bananas", "food/cake", "food/croissant", "food/fruits", "food/strawberries", "animals/cheetah", "animals/butterfly_monarch", "animals/crocodiles", "animals/dogs_collies", "animals/horse", "animals/penguins", "animals/retriever", "animals/spider", "landscapes/beach-at-dusk", "landscapes/beach", "landscapes/crop-circle", "landscapes/lake", "landscapes/lotus-garden", "landscapes/mountains-sunset", "landscapes/waterfall_niagara-falls", "food/broccoli", "food/chocolates", "food/dumplings", "food/hamburger", "food/mushroom", "food/pasta", "food/potatoes", "food/sushi", "seasonal/fireworks-2015", "seasonal/fireworks-over-harbor", "seasonal/gingerbread-family", "seasonal/gingerbread-houses", "seasonal/hannukah-dreidel", "seasonal/hopper-elfer", "seasonal/hopper-reindeer", "seasonal/reindeer", "seasonal/snow-crystal2", "seasonal/snowy-slope-with-trees", "seasonal/xmas-cookies", "seasonal/xmas-ornament-on-tree", "seasonal/xmas-presents", "seasonal/xmas-tree-with-presents", "seasonal/xmas-wreath", "pixar/army1", "pixar/bedspread", "pixar/bopeep", "pixar/floorplanes", "scratchpads/colorpicker_background", "scratchpads/colorpicker_submit", "scratchpads/colorpicker_rgb_r", "scratchpads/colorpicker_rgb_b", "scratchpads/colorpicker_hsb_h", "scratchpads/colorpicker_hex", "scratchpads/colorpicker_indic", "scratchpads/ui-icons_808080_256x240", "scratchpads/topic-programming-basics", "scratchpads/topic-animation", "scratchpads/select", "seasonal/disco-ball", "misc/boxmodel", "seasonal/snowman", "seasonal/santa-with-bag", "seasonal/penguin-with-presents", "animals/boxer-getting-tan", "animals/boxer-wagging-tongue", "misc/tim-berners-lee-webpage", "seasonal/red-nosed-winston", "avatars/mystery-1", "insideout/shot2_layer0blur0", "insideout/shot2_layer1blur0", "insideout/shot2_layer2blur0", "insideout/shot2_layer4blur0", "insideout/shot2_layer3blur0", "pixar/rat_2", "pixar/luxoball", "pixar/buzz", "pixar/ham"];
              var imageRegex = /\b((load|get)Image)\s*\(\s*(['"])(.*?)\3\s*\)/g;
              var match;
              while ((match = imageRegex.exec(programString)) !== null) {
                if (match[4] && imageURLs.indexOf(match[4]) === -1) {
                  console.log("Preloading image: " + match[4]);
                  assets.cacheImageURL(assets.getImageURL(match[4]));
                }
              }
              imageURLs.forEach(function (url) {
                if (programString.indexOf(url) !== -1) {
                  console.log("Preloading image: " + url);
                  assets.cacheImageURL(assets.getImageURL(url));
                }
              });
            })();
            // Find all getSound() calls to preload
            (function () {
              var rpg = ["battle-magic", "battle-spell", "battle-swing", "coin-jingle", "door-open", "giant-hyah", "giant-no", "giant-yah", "hit-clop", "hit-splat", "hit-thud", "hit-whack", "metal-chime", "metal-clink", "step-heavy", "water-bubble", "water-slosh"];
              var retro = ["boom1", "boom2", "coin", "hit1", "hit2", "jump1", "jump2", "laser1", "laser2", "laser3", "laser4", "rumble", "thruster-short", "thruster-long", "whistle1", "whistle2"];
              var sounds = [];
              var soundRegex = /\b(getSound)\s*\(\s*(['"])(.*?)\2\s*\)/g;
              var match;
              rpg.forEach(function (url) {
                return sounds.push("rpg/" + url);
              });
              retro.forEach(function (url) {
                return sounds.push("retro/" + url);
              });
              while ((match = soundRegex.exec(programString)) !== null) {
                if (match[3] && sounds.indexOf(match[3]) === -1) {
                  console.log("Preloading sound: " + match[3]);
                  assets.cacheSoundURL(assets.getSoundURL(match[3]));
                }
              }
              sounds.forEach(function (url) {
                if (programString.indexOf(url) !== -1) {
                  console.log("Preloading sound: " + url);
                  assets.cacheSoundURL(assets.getSoundURL(url));
                }
              });
            })();
            index = pjsInstanceCount++; // Make sure the correct Processing.js library is loaded
            pjsLoaded = new Promise(function (resolve, reject) {
              var pjsURL = 'https://cdn.jsdelivr.net/gh/Khan/processing-js@master/processing.js';
              if (typeof window.Processing !== "function" && !document.querySelector("script[src='".concat(pjsURL, "']"))) {
                var _script = document.createElement("script");
                _script.src = pjsURL;
                _script.type = "text/javascript";
                _script.onload = function () {
                  console.log("Processing.js library loaded from URL " + pjsURL);
                  resolve();
                };
                document.head.appendChild(_script);
              } else return void resolve();
            });
            _context.n = 1;
            return Promise.all([pjsLoaded, assets.load()]);
          case 1:
            if (!(window.currentLoad !== loadID)) {
              _context.n = 2;
              break;
            }
            return _context.a(2);
          case 2:
            script = document.createElement("script");
            script.innerHTML = "\n\t\tvar __pjsIndex = ".concat(index, ";\n\t\tvar canvas = window.__globalCanvas = document.getElementsByClassName(\"sketch\")[__pjsIndex];\n\t\tif (!canvas) {\n\t\t\tthrow \"KA Exporter: Failed to load sketch: Missing a canvas element in the HTML with an class name of 'sketch'. If you load multiple PJS scripts make sure you have a matching number of canvas tags.\";\n\t\t}\n\t\tvar __processing = processing = new Processing(canvas, proc => {\n\t\t\twindow.importerKA(proc, canvas);\n\t\t});\n\t\tprocessing.strokeCap(processing.ROUND);\n\t\tprocessing.strokeJoin(processing.ROUND);\n\t\tprocessing.background(255, 255, 255);\n\t\tObject.keys(processing).forEach(key => {\n\t\t\tif (!window[key]) {\n\t\t\t\ttry {\n\t\t\t\t\twindow[key] = processing[key];\n\t\t\t\t} catch(e) {\n\n\t\t\t\t}\n\t\t\t}\n\t\t});\n\t\t(function() {\n\t\t\twith (__processing) {\n\t\t\t\tcanvas.addEventListener(\"keydown\", event => {\n\t\t\t\t\tif (event.key === \"F11\") {\n\t\t\t\t\t\tfullscreen();\n\t\t\t\t\t}\n\t\t\t\t});\n\t\t\t\t").concat(getFunctionBody(program), "\n\t\t\t\tif (typeof draw !== \"undefined\") {\n\t\t\t\t    var old = draw;\n    \t\t\t\t\t__processing.draw = function() {\n\t\t\t\t\t\twindow.__frameRate = processing.__frameRate;\n      \t\t\t\t\t\tif (!__processing.__dashLayoutObserved) __processing.updateLayout();\n      \t\t\t\t\t\told.call(__processing);\n      \t\t\t\t\t};\n\t\t\t\t}\n\t\t\t\tconsole.log(\"---Processing sketch sucessfully loaded---\");\n\t\t\t}\n\t\t}).call(__processing);\n\t\t\t\t");
            script.type = "text/javascript";
            document.body.appendChild(script);
          case 3:
            return _context.a(2);
        }
      }, _callee);
    }));
    return function (_x) {
      return _ref.apply(this, arguments);
    };
  }();
  // Credit to Bluebird for their thumbnail script
  // https://www.khanacademy.org/computer-programming/spin-off-of-the-thumbnail-script-20/4798504312684544
  window.parent.html2canvas = function () {
    var thumbnailCanvas = document.createElement("canvas");
    var context = thumbnailCanvas.getContext("2d");
    thumbnailCanvas.width = "600";
    thumbnailCanvas.height = "600";
    if (window.__globalCanvas) {
      context.drawImage(window.__globalCanvas, 0, 0, window.__globalCanvas.width, window.__globalCanvas.height, 0, 0, 600, 600);
      console.log("Saving canvas data from ", window.__globalCanvas);
    } else {
      console.warn("Missing canvas for the KA Project Exporter to save the thumbnail to. Saving blank screen instead.");
    }
    window.top.postMessage(thumbnailCanvas.toDataURL(), "*");
  };
})();
