// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"images/svt-pilot-1.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-1.3321aa63.jpg";
},{}],"images/svt-pilot-2.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-2.48c752f7.jpg";
},{}],"images/svt-pilot-3.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-3.b07eeb95.jpg";
},{}],"images/svt-pilot-4.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-4.2659719b.jpg";
},{}],"images/svt-pilot-5.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-5.240b48d1.jpg";
},{}],"images/svt-pilot-6.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-6.3b93c441.jpg";
},{}],"images/svt-pilot-7.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-7.0890a2ee.jpg";
},{}],"images/svt-pilot-8.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-8.6addabc4.jpg";
},{}],"images/svt-pilot-9.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-9.39fccf5f.jpg";
},{}],"images/svt-pilot-10.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-10.1aca96da.jpg";
},{}],"images/svt-pilot-11.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-11.b9829dc1.jpg";
},{}],"images/svt-pilot-12.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-12.a05031c6.jpg";
},{}],"images/svt-pilot-13.jpg":[function(require,module,exports) {
module.exports = "/svt-pilot-13.200ec595.jpg";
},{}],"index.js":[function(require,module,exports) {
/* Switch Seventeen Player */
document.querySelector(".reload-btn").addEventListener("click", function svtNameReload(event) {
  /* Switch button animation */
  this.classList.add("reload-btn-animation");
  /* Generate random number to switch seventeen player */

  var randomNumber = Math.floor(Math.random() * 13) + 1;
  /* Randomly switch seventeen player */

  for (var i = 0; i <= randomNumber; i++) {
    var svtImage = document.querySelector(".svt-img");
    var svtName = document.querySelector(".svt-name");

    switch (true) {
      case i === 1:
        svtImage.src = require("./images/svt-pilot-1.jpg");
        svtName.textContent = "Choi Seungcheol";
        break;

      case i === 2:
        svtImage.src = require("./images/svt-pilot-2.jpg");
        svtName.textContent = "Yoon Jeonghan";
        break;

      case i === 3:
        svtImage.src = require("./images/svt-pilot-3.jpg");
        svtName.textContent = "Joshua Hong";
        break;

      case i === 4:
        svtImage.src = require("./images/svt-pilot-4.jpg");
        svtName.textContent = "Wen Junhui";
        break;

      case i === 5:
        svtImage.src = require("./images/svt-pilot-5.jpg");
        svtName.textContent = "Kwon Hoshi";
        break;

      case i === 6:
        svtImage.src = require("./images/svt-pilot-6.jpg");
        svtName.textContent = "Jeon Wonwoo";
        break;

      case i === 7:
        svtImage.src = require("./images/svt-pilot-7.jpg");
        svtName.textContent = "Lee Jihoon";
        break;

      case i === 8:
        svtImage.src = require("./images/svt-pilot-8.jpg");
        svtName.textContent = "Xu Minghao";
        break;

      case i == 9:
        svtImage.src = require("./images/svt-pilot-9.jpg");
        svtName.textContent = "Kim Mingyu";
        break;

      case i === 10:
        svtImage.src = require("./images/svt-pilot-10.jpg");
        svtName.textContent = "Lee Dokyeom";
        break;

      case i === 11:
        svtImage.src = require("./images/svt-pilot-11.jpg");
        svtName.textContent = "Boo Seungkwan";
        break;

      case i === 12:
        svtImage.src = require("./images/svt-pilot-12.jpg");
        svtName.textContent = "Vernon Chwe";
        break;

      case i === 13:
        svtImage.src = require("./images/svt-pilot-13.jpg");
        svtName.textContent = "Lee Dino";
        break;

      default:
        svtImage.src = require("./images/svt-pilot-13.jpg");
        svtName.textContent = "Team SVT";
        break;
    }
  }
});
/* Carat's Name Input */

document.querySelector(".rename").addEventListener("click", function caratNameInput() {
  var caratCardName = document.querySelector(".carat-name");
  var getCaratName = prompt("What's your name?");
  caratCardName.textContent = getCaratName; // Code for characters limit on names
});
/* SEVENTEEN (computer) Play */

function seventeenPlay() {
  var svtPlayRandomNum = Math.floor(Math.random() * 3);

  if (svtPlayRandomNum === 0) {
    result("rock");
  } else if (svtPlayRandomNum === 1) {
    result("paper");
  } else {
    result("scissors");
  }
}
/* Global variables for button choices */

/* Not sure about this */


var rockBtn = document.querySelector(".rock-btn");
var paperBtn = document.querySelector(".paper-btn");
var scissorsBtn = document.querySelector(".scissors-btn");
var btnChoices = [rockBtn, paperBtn, scissorsBtn];
var caratCHoice;
btnChoices.forEach(function (btnChoice) {
  return btnChoice.addEventListener("click", function (e) {
    caratChoice = e.target.id;
  });
});

function caratPlay() {
  var svtChoose = seventeenPlay();
  /* Carat choose button */

  var caratPlayRock = document.querySelector(".carat-rock-btn");
  var caratPlayPaper = document.querySelector(".carat-paper-btn");
  var caratPlayScissors = document.querySelector(".carat-scissors-btn");
  /* Seventeen choose button */

  var svtPlayRock = document.querySelector(".svt-rock-btn");
  var svtPlayPaper = document.querySelector(".svt-paper-btn");
  var svtPlayScissors = document.querySelector(".svt-scissors-btn");
}
},{"./images/svt-pilot-1.jpg":"images/svt-pilot-1.jpg","./images/svt-pilot-2.jpg":"images/svt-pilot-2.jpg","./images/svt-pilot-3.jpg":"images/svt-pilot-3.jpg","./images/svt-pilot-4.jpg":"images/svt-pilot-4.jpg","./images/svt-pilot-5.jpg":"images/svt-pilot-5.jpg","./images/svt-pilot-6.jpg":"images/svt-pilot-6.jpg","./images/svt-pilot-7.jpg":"images/svt-pilot-7.jpg","./images/svt-pilot-8.jpg":"images/svt-pilot-8.jpg","./images/svt-pilot-9.jpg":"images/svt-pilot-9.jpg","./images/svt-pilot-10.jpg":"images/svt-pilot-10.jpg","./images/svt-pilot-11.jpg":"images/svt-pilot-11.jpg","./images/svt-pilot-12.jpg":"images/svt-pilot-12.jpg","./images/svt-pilot-13.jpg":"images/svt-pilot-13.jpg"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "39927" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map