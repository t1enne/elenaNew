// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
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
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1bEO8":[function(require,module,exports) {
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "4a236f9275d0a351";
module.bundle.HMR_BUNDLE_ID = "635c849b833266ea";
"use strict";
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it;
    if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {
            };
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = o[Symbol.iterator]();
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {
            });
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {
        };
        acceptedAssets = {
        };
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else window.location.reload();
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(window.location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) return true;
    var parents = getParents(module.bundle.root, id); // If no parents, the asset is new. Prevent reloading the page.
    if (!parents.length) return true;
    return parents.some(function(v) {
        return hmrAcceptCheck(v[0], v[1], null);
    });
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {
    };
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"lzYRN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _imagesloaded = require("imagesloaded");
var _imagesloadedDefault = parcelHelpers.interopDefault(_imagesloaded);
var _regeneratorRuntime = require("regenerator-runtime");
var _regeneratorRuntimeDefault = parcelHelpers.interopDefault(_regeneratorRuntime);
// import 'src/assets/img/*'
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
// import anime from 'animejs'
var _locomotiveScroll = require("locomotive-scroll");
var _locomotiveScrollDefault = parcelHelpers.interopDefault(_locomotiveScroll);
var _jpg = require("./src/assets/img/*/*.jpg");
var _jpgDefault = parcelHelpers.interopDefault(_jpg);
var _cursor = require("./src/js/cursor");
var _cursorDefault = parcelHelpers.interopDefault(_cursor);
// import {
// lerp,
// getMousePos
// } from './src/js/utils'
var _about = require("./src/js/About");
var _aboutDefault = parcelHelpers.interopDefault(_about);
var _nav = require("./src/js/Nav");
var _navDefault = parcelHelpers.interopDefault(_nav);
var _works = require("./src/js/Works");
var _worksDefault = parcelHelpers.interopDefault(_works);
var _footer = require("./src/js/Footer");
var _footerDefault = parcelHelpers.interopDefault(_footer);
var _project = require("./src/js/Project");
var _projectDefault = parcelHelpers.interopDefault(_project);
var _loader = require("./src/js/Loader");
var _loaderDefault = parcelHelpers.interopDefault(_loader);
let main = document.querySelector("main");
let projects = {
};
for(const key in _jpgDefault.default)//array of images
projects[key] = Object.values(_jpgDefault.default[key]);
let projectNames = Object.keys(projects);
let scroll, cursor;
window.onhashchange = transition;
let Home = {
    activeTitle: "",
    slidesIndex: 0,
    firstScroll: false,
    slidesLength: 0,
    picturesObj: {
    },
    pictures: [],
    scrolled: 0,
    // prev(vnode) {
    // let projects = document.querySelectorAll('.project-title')
    //
    // let slides = document.querySelectorAll('.slide')
    // let previews = document.querySelectorAll('.preview-slide')
    // let active = document.querySelector('.slide.active')
    // let activePreview = document.querySelector('.preview-slide.active')
    //
    //
    // active.classList.toggle('active')
    // active.classList.toggle('behind')
    // activePreview.classList.toggle('active')
    // activePreview.classList.toggle('behind')
    //
    // animProjectsOut(vnode.state.slidesIndex)
    //
    // if (vnode.state.slidesIndex - 1 === -1) {
    //   vnode.state.slidesIndex = slides.length - 1
    // } else {
    //   vnode.state.slidesIndex -= 1
    // }
    // animProjectsIn(vnode.state.slidesIndex)
    //
    // slides[vnode.state.slidesIndex].classList.toggle('active')
    // previews[vnode.state.slidesIndex].classList.toggle('active')
    //
    // setTimeout(() => {
    //   active.classList.toggle("behind");
    //   activePreview.classList.toggle("behind");
    // }, 1000);
    // },
    // next(vnode) {
    //   let projects = document.querySelectorAll('.project-title')
    //
    //   let slides = document.querySelectorAll('.slide')
    //   let previews = document.querySelectorAll('.preview-slide')
    //   let active = document.querySelector('.slide.active')
    //   let activePreview = document.querySelector('.preview-slide.active')
    //
    //
    //   active.classList.toggle('active')
    //   active.classList.toggle('behind')
    //   activePreview.classList.toggle('active')
    //   activePreview.classList.toggle('behind')
    //
    //   animProjectsOut(vnode.state.slidesIndex)
    //
    //   if (vnode.state.slidesIndex + 1 === slides.length) {
    //     vnode.state.slidesIndex = 0
    //   } else {
    //     vnode.state.slidesIndex += 1
    //   }
    //   animProjectsIn(vnode.state.slidesIndex)
    //
    //   slides[vnode.state.slidesIndex].classList.toggle('active')
    //   previews[vnode.state.slidesIndex].classList.toggle('active')
    //
    //   setTimeout(() => {
    //     active.classList.toggle("behind");
    //     activePreview.classList.toggle("behind");
    //   }, 1000);
    // },
    async oncreate (vnode) {
        // if (scroll != null) scroll.init()
        const loader = await _loaderDefault.default(vnode, scroll);
        scroll = loader.scroll;
        // initialize custom cursor
        cursor = new _cursorDefault.default(document.querySelector("svg.cursor"));
        // back to top listener
        document.querySelector(".footer-nav .btt").onclick = ()=>{
            scroll.scrollTo("top");
        };
    },
    onremove () {
        scroll.destroy();
    },
    view (vnode) {
        // let projectDate = Object.keys(Object.values(projects)[vnode.state.slidesIndex])
        return [
            _mithrilDefault.default(".home-page-wrapper[data-scroll-id=home-section]", _mithrilDefault.default("#main", _mithrilDefault.default(_navDefault.default), _mithrilDefault.default(".title-wrapper[data-scroll][data-scroll-repeat]", _mithrilDefault.default("section.content__item.content__item--home.content__item--current[data-scroll-speed=2][data-scroll]", _mithrilDefault.default(".paragraph-wrapper", _mithrilDefault.default(".content__paragraph[data-splitting][data-scroll]", "Elena Kustova")), _mithrilDefault.default(".paragraph-wrapper", _mithrilDefault.default(".content__paragraph[data-splitting][data-scroll]", "Russian")), _mithrilDefault.default(".paragraph-wrapper", _mithrilDefault.default(".content__paragraph[data-splitting][data-scroll]", "Photographer")), _mithrilDefault.default(".paragraph-wrapper", _mithrilDefault.default(".content__paragraph[data-splitting][data-scroll]", "Based in Italy")))), _mithrilDefault.default(".gallery[data-scroll]", [
                //
                // m('.slides-wrapper',
                // m('.work-selector-wrapper.grid', [
                // m('.preview[data-scroll][data-scroll-speed=2]',
                // [
                // m('.project-index', `${vnode.state.slidesIndex+1} / ${vnode.state.slidesLength}`),
                // m('.preview-slides',
                // projectNames.map((name, i) => {
                // return m(`.preview-slide.${i == 0 ? '.active' : '' }`, {
                // style: `background-image: url(${pics[name][name + '1']});`
                // })
                // })),
                // m('.buttons.space-between', [
                // m('.button.flex.prev', {
                // onclick: () => {
                // vnode.state.prev(vnode)
                // }
                // },
                // m("svg.arrows.arrow-left[xmlns='http://www.w3.org/2000/svg'][width='24'][height='24'][viewBox='0 0 24 24'][fill='none'][stroke='currentColor'][stroke-width='2'][stroke-linecap='round'][stroke-linejoin='round']",
                // [
                // m("line[x1='19'][y1='12'][x2='5'][y2='12']"),
                // m("polyline[points='12 19 5 12 12 5']")
                // ]
                // ), m('.text', 'prev')),
                // m('.button.flex.next', {
                // onclick(e) {
                // vnode.state.next(vnode)
                // }
                // },
                // m('.text', 'next'),
                // m("svg.arrows.arrow-right[xmlns='http://www.w3.org/2000/svg'][width='24'][height='24'][viewBox='0 0 24 24'][fill='none'][stroke='currentColor'][stroke-width='2'][stroke-linecap='round'][stroke-linejoin='round']",
                // [
                // m("line[x1='5'][y1='12'][x2='19'][y2='12']"),
                // m("polyline[points='12 5 19 12 12 19']")
                // ]
                // )
                // )
                // ])
                // ],
                // [
                // m('.project-titles.flex-column', projectNames.map((name, i) => {
                // return m(`h1.project-title.project-${name}[index=${i}]`, projectNames[i])
                // }))
                // ]
                // )
                // ]),
                // m('.slides',
                // m('.work-title-wrapper', [
                // m('p.work-title', `- tbd -`),
                // m('p.explore-project', 'explore')
                // ]),
                // projectNames.map((name, i) => {
                // return m(`.slide${i == 0 ? '.active' : ''}`, m('img', {
                // src: projects[name][0]
                // }))
                // })
                // )
                // ),
                //
                _mithrilDefault.default(".divider[data-scroll][data-scroll-repeat]", _mithrilDefault.default("span.divider-text", "some of my pictures")),
                _mithrilDefault.default(".gallery-pictures-wrapper", projectNames.map((key, i)=>{
                    let url = projects[key][0];
                    let delay = i % 2 === 0 ? ".9" : ".4";
                    // return projects[key].map((url, y) => {
                    return _mithrilDefault.default(".gallery-pic[style=padding-top:-50%]", _mithrilDefault.default(`a.img-wrapper[data-scroll][data-scroll-delay=${delay}][data-scroll-speed=${delay * 4}]`, {
                        onclick () {
                            transition();
                            setTimeout(()=>{
                                _mithrilDefault.default.route.set(`/project/${i}`);
                            }, 1000);
                        },
                        onmouseenter: ()=>{
                            let title = document.querySelector(`.pic-title.title-${i}`);
                            title.classList.remove("hidden");
                            title.classList.add("animated");
                        },
                        onmouseleave: ()=>{
                            let title = document.querySelector(`.pic-title.title-${i}`);
                            title.classList.remove("animated");
                            title.classList.add("hidden");
                        }
                    }, _mithrilDefault.default(`img[title=${key}]`, {
                        src: url
                    }), _mithrilDefault.default(".pic-title-wrapper", _mithrilDefault.default(`.pic-title.title-${key}.title-${i}.hidden`, key))));
                // })
                })), 
            ])), _mithrilDefault.default(_footerDefault.default)), 
        ];
    }
};
_mithrilDefault.default.route(main, "/home", {
    "/home": Home,
    "/about": _aboutDefault.default,
    "/works": _worksDefault.default,
    "/project/:key": _projectDefault.default
});
function transition() {
    document.querySelectorAll(".is-inview").forEach((item)=>{
        item.classList.remove("is-inview");
    });
    // document.querySelector("body").style.backgroundColor = "#d7cca1";
    const body = document.querySelector("body");
    body.classList.remove("dark");
}
exports.transition = transition;
exports.scroll = scroll;
exports.cursor = cursor;
exports.projects = projects;

},{"imagesloaded":"uXwLn","regenerator-runtime":"1EBPE","mithril":"a7UJj","locomotive-scroll":"aJY2w","./src/assets/img/*/*.jpg":"adFF7","./src/js/cursor":"gc278","./src/js/About":"aKONg","./src/js/Nav":"teRhW","./src/js/Works":"i3rOK","./src/js/Footer":"5Grlo","./src/js/Project":"9dd82","./src/js/Loader":"7UblQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"uXwLn":[function(require,module,exports) {
/*!
 * imagesLoaded v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */ (function(window, factory) {
    // universal module definition
    /*global define: false, module: false, require: false */ if (typeof define == 'function' && define.amd) // AMD
    define([
        'ev-emitter/ev-emitter'
    ], function(EvEmitter) {
        return factory(window, EvEmitter);
    });
    else if (typeof module == 'object' && module.exports) // CommonJS
    module.exports = factory(window, require('ev-emitter'));
    else // browser global
    window.imagesLoaded = factory(window, window.EvEmitter);
})(typeof window !== 'undefined' ? window : this, // --------------------------  factory -------------------------- //
function factory(window, EvEmitter) {
    'use strict';
    var $ = window.jQuery;
    var console = window.console;
    // -------------------------- helpers -------------------------- //
    // extend objects
    function extend(a, b) {
        for(var prop in b)a[prop] = b[prop];
        return a;
    }
    var arraySlice = Array.prototype.slice;
    // turn element or nodeList into an array
    function makeArray(obj) {
        if (Array.isArray(obj)) // use object if already an array
        return obj;
        var isArrayLike = typeof obj == 'object' && typeof obj.length == 'number';
        if (isArrayLike) // convert nodeList to array
        return arraySlice.call(obj);
        // array of single index
        return [
            obj
        ];
    }
    // -------------------------- imagesLoaded -------------------------- //
    /**
 * @param {Array, Element, NodeList, String} elem
 * @param {Object or Function} options - if function, use as callback
 * @param {Function} onAlways - callback function
 */ function ImagesLoaded(elem, options, onAlways) {
        // coerce ImagesLoaded() without new, to be new ImagesLoaded()
        if (!(this instanceof ImagesLoaded)) return new ImagesLoaded(elem, options, onAlways);
        // use elem as selector string
        var queryElem = elem;
        if (typeof elem == 'string') queryElem = document.querySelectorAll(elem);
        // bail if bad element
        if (!queryElem) {
            console.error('Bad element for imagesLoaded ' + (queryElem || elem));
            return;
        }
        this.elements = makeArray(queryElem);
        this.options = extend({
        }, this.options);
        // shift arguments if no options set
        if (typeof options == 'function') onAlways = options;
        else extend(this.options, options);
        if (onAlways) this.on('always', onAlways);
        this.getImages();
        if ($) // add jQuery Deferred object
        this.jqDeferred = new $.Deferred();
        // HACK check async to allow time to bind listeners
        setTimeout(this.check.bind(this));
    }
    ImagesLoaded.prototype = Object.create(EvEmitter.prototype);
    ImagesLoaded.prototype.options = {
    };
    ImagesLoaded.prototype.getImages = function() {
        this.images = [];
        // filter & find items if we have an item selector
        this.elements.forEach(this.addElementImages, this);
    };
    /**
 * @param {Node} element
 */ ImagesLoaded.prototype.addElementImages = function(elem) {
        // filter siblings
        if (elem.nodeName == 'IMG') this.addImage(elem);
        // get background image on element
        if (this.options.background === true) this.addElementBackgroundImages(elem);
        // find children
        // no non-element nodes, #143
        var nodeType = elem.nodeType;
        if (!nodeType || !elementNodeTypes[nodeType]) return;
        var childImgs = elem.querySelectorAll('img');
        // concat childElems to filterFound array
        for(var i = 0; i < childImgs.length; i++){
            var img = childImgs[i];
            this.addImage(img);
        }
        // get child background images
        if (typeof this.options.background == 'string') {
            var children = elem.querySelectorAll(this.options.background);
            for(i = 0; i < children.length; i++){
                var child = children[i];
                this.addElementBackgroundImages(child);
            }
        }
    };
    var elementNodeTypes = {
        1: true,
        9: true,
        11: true
    };
    ImagesLoaded.prototype.addElementBackgroundImages = function(elem) {
        var style = getComputedStyle(elem);
        if (!style) // Firefox returns null if in a hidden iframe https://bugzil.la/548397
        return;
        // get url inside url("...")
        var reURL = /url\((['"])?(.*?)\1\)/gi;
        var matches = reURL.exec(style.backgroundImage);
        while(matches !== null){
            var url = matches && matches[2];
            if (url) this.addBackground(url, elem);
            matches = reURL.exec(style.backgroundImage);
        }
    };
    /**
 * @param {Image} img
 */ ImagesLoaded.prototype.addImage = function(img) {
        var loadingImage = new LoadingImage(img);
        this.images.push(loadingImage);
    };
    ImagesLoaded.prototype.addBackground = function(url, elem) {
        var background = new Background(url, elem);
        this.images.push(background);
    };
    ImagesLoaded.prototype.check = function() {
        var _this = this;
        this.progressedCount = 0;
        this.hasAnyBroken = false;
        // complete if no images
        if (!this.images.length) {
            this.complete();
            return;
        }
        function onProgress(image, elem, message) {
            // HACK - Chrome triggers event before object properties have changed. #83
            setTimeout(function() {
                _this.progress(image, elem, message);
            });
        }
        this.images.forEach(function(loadingImage) {
            loadingImage.once('progress', onProgress);
            loadingImage.check();
        });
    };
    ImagesLoaded.prototype.progress = function(image, elem, message) {
        this.progressedCount++;
        this.hasAnyBroken = this.hasAnyBroken || !image.isLoaded;
        // progress event
        this.emitEvent('progress', [
            this,
            image,
            elem
        ]);
        if (this.jqDeferred && this.jqDeferred.notify) this.jqDeferred.notify(this, image);
        // check if completed
        if (this.progressedCount == this.images.length) this.complete();
        if (this.options.debug && console) console.log('progress: ' + message, image, elem);
    };
    ImagesLoaded.prototype.complete = function() {
        var eventName = this.hasAnyBroken ? 'fail' : 'done';
        this.isComplete = true;
        this.emitEvent(eventName, [
            this
        ]);
        this.emitEvent('always', [
            this
        ]);
        if (this.jqDeferred) {
            var jqMethod = this.hasAnyBroken ? 'reject' : 'resolve';
            this.jqDeferred[jqMethod](this);
        }
    };
    // --------------------------  -------------------------- //
    function LoadingImage(img) {
        this.img = img;
    }
    LoadingImage.prototype = Object.create(EvEmitter.prototype);
    LoadingImage.prototype.check = function() {
        // If complete is true and browser supports natural sizes,
        // try to check for image status manually.
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
            // report based on naturalWidth
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            return;
        }
        // If none of the checks above matched, simulate loading on detached element.
        this.proxyImage = new Image();
        this.proxyImage.addEventListener('load', this);
        this.proxyImage.addEventListener('error', this);
        // bind to image as well for Firefox. #191
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        this.proxyImage.src = this.img.src;
    };
    LoadingImage.prototype.getIsImageComplete = function() {
        // check for non-zero, non-undefined naturalWidth
        // fixes Safari+InfiniteScroll+Masonry bug infinite-scroll#671
        return this.img.complete && this.img.naturalWidth;
    };
    LoadingImage.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent('progress', [
            this,
            this.img,
            message
        ]);
    };
    // ----- events ----- //
    // trigger specified handler for event type
    LoadingImage.prototype.handleEvent = function(event) {
        var method = 'on' + event.type;
        if (this[method]) this[method](event);
    };
    LoadingImage.prototype.onload = function() {
        this.confirm(true, 'onload');
        this.unbindEvents();
    };
    LoadingImage.prototype.onerror = function() {
        this.confirm(false, 'onerror');
        this.unbindEvents();
    };
    LoadingImage.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener('load', this);
        this.proxyImage.removeEventListener('error', this);
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
    };
    // -------------------------- Background -------------------------- //
    function Background(url, element) {
        this.url = url;
        this.element = element;
        this.img = new Image();
    }
    // inherit LoadingImage prototype
    Background.prototype = Object.create(LoadingImage.prototype);
    Background.prototype.check = function() {
        this.img.addEventListener('load', this);
        this.img.addEventListener('error', this);
        this.img.src = this.url;
        // check if image is already complete
        var isComplete = this.getIsImageComplete();
        if (isComplete) {
            this.confirm(this.img.naturalWidth !== 0, 'naturalWidth');
            this.unbindEvents();
        }
    };
    Background.prototype.unbindEvents = function() {
        this.img.removeEventListener('load', this);
        this.img.removeEventListener('error', this);
    };
    Background.prototype.confirm = function(isLoaded, message) {
        this.isLoaded = isLoaded;
        this.emitEvent('progress', [
            this,
            this.element,
            message
        ]);
    };
    // -------------------------- jQuery -------------------------- //
    ImagesLoaded.makeJQueryPlugin = function(jQuery) {
        jQuery = jQuery || window.jQuery;
        if (!jQuery) return;
        // set local variable
        $ = jQuery;
        // $().imagesLoaded()
        $.fn.imagesLoaded = function(options, callback) {
            var instance = new ImagesLoaded(this, options, callback);
            return instance.jqDeferred.promise($(this));
        };
    };
    // try making plugin
    ImagesLoaded.makeJQueryPlugin();
    // --------------------------  -------------------------- //
    return ImagesLoaded;
});

},{"ev-emitter":"ckzFK"}],"ckzFK":[function(require,module,exports) {
(function(global, factory) {
    // universal module definition
    /* jshint strict: false */ /* globals define, module, window */ if (typeof define == 'function' && define.amd) // AMD - RequireJS
    define(factory);
    else if (typeof module == 'object' && module.exports) // CommonJS - Browserify, Webpack
    module.exports = factory();
    else // Browser globals
    global.EvEmitter = factory();
})(typeof window != 'undefined' ? window : this, function() {
    "use strict";
    function EvEmitter() {
    }
    var proto = EvEmitter.prototype;
    proto.on = function(eventName, listener) {
        if (!eventName || !listener) return;
        // set events hash
        var events = this._events = this._events || {
        };
        // set listeners array
        var listeners = events[eventName] = events[eventName] || [];
        // only add once
        if (listeners.indexOf(listener) == -1) listeners.push(listener);
        return this;
    };
    proto.once = function(eventName, listener) {
        if (!eventName || !listener) return;
        // add event
        this.on(eventName, listener);
        // set once flag
        // set onceEvents hash
        var onceEvents = this._onceEvents = this._onceEvents || {
        };
        // set onceListeners object
        var onceListeners = onceEvents[eventName] = onceEvents[eventName] || {
        };
        // set flag
        onceListeners[listener] = true;
        return this;
    };
    proto.off = function(eventName, listener) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        var index = listeners.indexOf(listener);
        if (index != -1) listeners.splice(index, 1);
        return this;
    };
    proto.emitEvent = function(eventName, args) {
        var listeners = this._events && this._events[eventName];
        if (!listeners || !listeners.length) return;
        // copy over to avoid interference if .off() in listener
        listeners = listeners.slice(0);
        args = args || [];
        // once stuff
        var onceListeners = this._onceEvents && this._onceEvents[eventName];
        for(var i = 0; i < listeners.length; i++){
            var listener = listeners[i];
            var isOnce = onceListeners && onceListeners[listener];
            if (isOnce) {
                // remove listener
                // remove before trigger to prevent recursion
                this.off(eventName, listener);
                // unset once flag
                delete onceListeners[listener];
            }
            // trigger listener
            listener.apply(this, args);
        }
        return this;
    };
    proto.allOff = function() {
        delete this._events;
        delete this._onceEvents;
    };
    return EvEmitter;
});

},{}],"1EBPE":[function(require,module,exports) {
/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var runtime = function(exports) {
    var Op = Object.prototype;
    var hasOwn = Op.hasOwnProperty;
    var undefined; // More compressible than void 0.
    var $Symbol = typeof Symbol === "function" ? Symbol : {
    };
    var iteratorSymbol = $Symbol.iterator || "@@iterator";
    var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
    var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
    function define(obj, key, value) {
        Object.defineProperty(obj, key, {
            value: value,
            enumerable: true,
            configurable: true,
            writable: true
        });
        return obj[key];
    }
    try {
        // IE 8 has a broken Object.defineProperty that only works on DOM objects.
        define({
        }, "");
    } catch (err) {
        define = function(obj, key, value) {
            return obj[key] = value;
        };
    }
    function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []);
        // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
    }
    exports.wrap = wrap;
    // Try/catch helper to minimize deoptimizations. Returns a completion
    // record like context.tryEntries[i].completion. This interface could
    // have been (and was previously) designed to take a closure to be
    // invoked without arguments, but in all the cases we care about we
    // already have an existing method we want to call, so there's no need
    // to create a new function object. We can even get away with assuming
    // the method takes exactly one argument, since that happens to be true
    // in every case, so we don't have to touch the arguments object. The
    // only additional allocation required is the completion record, which
    // has a stable shape and so hopefully should be cheap to allocate.
    function tryCatch(fn, obj, arg) {
        try {
            return {
                type: "normal",
                arg: fn.call(obj, arg)
            };
        } catch (err) {
            return {
                type: "throw",
                arg: err
            };
        }
    }
    var GenStateSuspendedStart = "suspendedStart";
    var GenStateSuspendedYield = "suspendedYield";
    var GenStateExecuting = "executing";
    var GenStateCompleted = "completed";
    // Returning this object from the innerFn has the same effect as
    // breaking out of the dispatch switch statement.
    var ContinueSentinel = {
    };
    // Dummy constructor functions that we use as the .constructor and
    // .constructor.prototype properties for functions that return Generator
    // objects. For full spec compliance, you may wish to configure your
    // minifier not to mangle the names of these two functions.
    function Generator() {
    }
    function GeneratorFunction() {
    }
    function GeneratorFunctionPrototype() {
    }
    // This is a polyfill for %IteratorPrototype% for environments that
    // don't natively support it.
    var IteratorPrototype = {
    };
    IteratorPrototype[iteratorSymbol] = function() {
        return this;
    };
    var getProto = Object.getPrototypeOf;
    var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
    if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
    var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
    GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
    GeneratorFunctionPrototype.constructor = GeneratorFunction;
    GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction");
    // Helper for defining the .next, .throw, and .return methods of the
    // Iterator interface in terms of a single ._invoke method.
    function defineIteratorMethods(prototype) {
        [
            "next",
            "throw",
            "return"
        ].forEach(function(method) {
            define(prototype, method, function(arg) {
                return this._invoke(method, arg);
            });
        });
    }
    exports.isGeneratorFunction = function(genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
    };
    exports.mark = function(genFun) {
        if (Object.setPrototypeOf) Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        else {
            genFun.__proto__ = GeneratorFunctionPrototype;
            define(genFun, toStringTagSymbol, "GeneratorFunction");
        }
        genFun.prototype = Object.create(Gp);
        return genFun;
    };
    // Within the body of any async function, `await x` is transformed to
    // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
    // `hasOwn.call(value, "__await")` to determine if the yielded value is
    // meant to be awaited.
    exports.awrap = function(arg) {
        return {
            __await: arg
        };
    };
    function AsyncIterator(generator, PromiseImpl) {
        function invoke(method, arg, resolve, reject) {
            var record = tryCatch(generator[method], generator, arg);
            if (record.type === "throw") reject(record.arg);
            else {
                var result = record.arg;
                var value = result.value;
                if (value && typeof value === "object" && hasOwn.call(value, "__await")) return PromiseImpl.resolve(value.__await).then(function(value) {
                    invoke("next", value, resolve, reject);
                }, function(err) {
                    invoke("throw", err, resolve, reject);
                });
                return PromiseImpl.resolve(value).then(function(unwrapped) {
                    // When a yielded Promise is resolved, its final value becomes
                    // the .value of the Promise<{value,done}> result for the
                    // current iteration.
                    result.value = unwrapped;
                    resolve(result);
                }, function(error) {
                    // If a rejected Promise was yielded, throw the rejection back
                    // into the async generator function so it can be handled there.
                    return invoke("throw", error, resolve, reject);
                });
            }
        }
        var previousPromise;
        function enqueue(method, arg) {
            function callInvokeWithMethodAndArg() {
                return new PromiseImpl(function(resolve, reject) {
                    invoke(method, arg, resolve, reject);
                });
            }
            return previousPromise = // If enqueue has been called before, then we want to wait until
            // all previous Promises have been resolved before calling invoke,
            // so that results are always delivered in the correct order. If
            // enqueue has not been called before, then it is important to
            // call invoke immediately, without waiting on a callback to fire,
            // so that the async generator function has the opportunity to do
            // any necessary setup in a predictable way. This predictability
            // is why the Promise constructor synchronously invokes its
            // executor callback, and why async functions synchronously
            // execute code before the first await. Since we implement simple
            // async functions in terms of async generators, it is especially
            // important to get this right, even though it requires care.
            previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
            // invocations of the iterator.
            callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        }
        // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        this._invoke = enqueue;
    }
    defineIteratorMethods(AsyncIterator.prototype);
    AsyncIterator.prototype[asyncIteratorSymbol] = function() {
        return this;
    };
    exports.AsyncIterator = AsyncIterator;
    // Note that simple async functions are implemented on top of
    // AsyncIterator objects; they just return a Promise for the value of
    // the final result produced by the iterator.
    exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
        if (PromiseImpl === void 0) PromiseImpl = Promise;
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
        return exports.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
         : iter.next().then(function(result) {
            return result.done ? result.value : iter.next();
        });
    };
    function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
            if (state === GenStateExecuting) throw new Error("Generator is already running");
            if (state === GenStateCompleted) {
                if (method === "throw") throw arg;
                // Be forgiving, per 25.3.3.3.3 of the spec:
                // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
                return doneResult();
            }
            context.method = method;
            context.arg = arg;
            while(true){
                var delegate = context.delegate;
                if (delegate) {
                    var delegateResult = maybeInvokeDelegate(delegate, context);
                    if (delegateResult) {
                        if (delegateResult === ContinueSentinel) continue;
                        return delegateResult;
                    }
                }
                if (context.method === "next") // Setting context._sent for legacy support of Babel's
                // function.sent implementation.
                context.sent = context._sent = context.arg;
                else if (context.method === "throw") {
                    if (state === GenStateSuspendedStart) {
                        state = GenStateCompleted;
                        throw context.arg;
                    }
                    context.dispatchException(context.arg);
                } else if (context.method === "return") context.abrupt("return", context.arg);
                state = GenStateExecuting;
                var record = tryCatch(innerFn, self, context);
                if (record.type === "normal") {
                    // If an exception is thrown from innerFn, we leave state ===
                    // GenStateExecuting and loop back for another invocation.
                    state = context.done ? GenStateCompleted : GenStateSuspendedYield;
                    if (record.arg === ContinueSentinel) continue;
                    return {
                        value: record.arg,
                        done: context.done
                    };
                } else if (record.type === "throw") {
                    state = GenStateCompleted;
                    // Dispatch the exception by looping back around to the
                    // context.dispatchException(context.arg) call above.
                    context.method = "throw";
                    context.arg = record.arg;
                }
            }
        };
    }
    // Call delegate.iterator[context.method](context.arg) and handle the
    // result, either by returning a { value, done } result from the
    // delegate iterator, or by modifying context.method and context.arg,
    // setting context.delegate to null, and returning the ContinueSentinel.
    function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        if (method === undefined) {
            // A .throw or .return when the delegate iterator has no .throw
            // method always terminates the yield* loop.
            context.delegate = null;
            if (context.method === "throw") {
                // Note: ["return"] must be used for ES3 parsing compatibility.
                if (delegate.iterator["return"]) {
                    // If the delegate iterator has a return method, give it a
                    // chance to clean up.
                    context.method = "return";
                    context.arg = undefined;
                    maybeInvokeDelegate(delegate, context);
                    if (context.method === "throw") // If maybeInvokeDelegate(context) changed context.method from
                    // "return" to "throw", let that override the TypeError below.
                    return ContinueSentinel;
                }
                context.method = "throw";
                context.arg = new TypeError("The iterator does not provide a 'throw' method");
            }
            return ContinueSentinel;
        }
        var record = tryCatch(method, delegate.iterator, context.arg);
        if (record.type === "throw") {
            context.method = "throw";
            context.arg = record.arg;
            context.delegate = null;
            return ContinueSentinel;
        }
        var info = record.arg;
        if (!info) {
            context.method = "throw";
            context.arg = new TypeError("iterator result is not an object");
            context.delegate = null;
            return ContinueSentinel;
        }
        if (info.done) {
            // Assign the result of the finished delegate to the temporary
            // variable specified by delegate.resultName (see delegateYield).
            context[delegate.resultName] = info.value;
            // Resume execution at the desired location (see delegateYield).
            context.next = delegate.nextLoc;
            // If context.method was "throw" but the delegate handled the
            // exception, let the outer generator proceed normally. If
            // context.method was "next", forget context.arg since it has been
            // "consumed" by the delegate iterator. If context.method was
            // "return", allow the original .return call to continue in the
            // outer generator.
            if (context.method !== "return") {
                context.method = "next";
                context.arg = undefined;
            }
        } else // Re-yield the result returned by the delegate method.
        return info;
        // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        context.delegate = null;
        return ContinueSentinel;
    }
    // Define Generator.prototype.{next,throw,return} in terms of the
    // unified ._invoke helper method.
    defineIteratorMethods(Gp);
    define(Gp, toStringTagSymbol, "Generator");
    // A Generator should always return itself as the iterator object when the
    // @@iterator function is called on it. Some browsers' implementations of the
    // iterator prototype chain incorrectly implement this, causing the Generator
    // object to not be returned from this call. This ensures that doesn't happen.
    // See https://github.com/facebook/regenerator/issues/274 for more details.
    Gp[iteratorSymbol] = function() {
        return this;
    };
    Gp.toString = function() {
        return "[object Generator]";
    };
    function pushTryEntry(locs) {
        var entry = {
            tryLoc: locs[0]
        };
        if (1 in locs) entry.catchLoc = locs[1];
        if (2 in locs) {
            entry.finallyLoc = locs[2];
            entry.afterLoc = locs[3];
        }
        this.tryEntries.push(entry);
    }
    function resetTryEntry(entry) {
        var record = entry.completion || {
        };
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
    }
    function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [
            {
                tryLoc: "root"
            }
        ];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
    }
    exports.keys = function(object) {
        var keys = [];
        for(var key in object)keys.push(key);
        keys.reverse();
        // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        return function next() {
            while(keys.length){
                var key = keys.pop();
                if (key in object) {
                    next.value = key;
                    next.done = false;
                    return next;
                }
            }
            // To avoid creating an additional object, we just hang the .value
            // and .done properties off the next function object itself. This
            // also ensures that the minifier will not anonymize the function.
            next.done = true;
            return next;
        };
    };
    function values(iterable) {
        if (iterable) {
            var iteratorMethod = iterable[iteratorSymbol];
            if (iteratorMethod) return iteratorMethod.call(iterable);
            if (typeof iterable.next === "function") return iterable;
            if (!isNaN(iterable.length)) {
                var i = -1, next = function next() {
                    while(++i < iterable.length)if (hasOwn.call(iterable, i)) {
                        next.value = iterable[i];
                        next.done = false;
                        return next;
                    }
                    next.value = undefined;
                    next.done = true;
                    return next;
                };
                return next.next = next;
            }
        }
        // Return an iterator with no values.
        return {
            next: doneResult
        };
    }
    exports.values = values;
    function doneResult() {
        return {
            value: undefined,
            done: true
        };
    }
    Context.prototype = {
        constructor: Context,
        reset: function(skipTempReset) {
            this.prev = 0;
            this.next = 0;
            // Resetting context._sent for legacy support of Babel's
            // function.sent implementation.
            this.sent = this._sent = undefined;
            this.done = false;
            this.delegate = null;
            this.method = "next";
            this.arg = undefined;
            this.tryEntries.forEach(resetTryEntry);
            if (!skipTempReset) {
                for(var name in this)// Not sure about the optimal order of these conditions:
                if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) this[name] = undefined;
            }
        },
        stop: function() {
            this.done = true;
            var rootEntry = this.tryEntries[0];
            var rootRecord = rootEntry.completion;
            if (rootRecord.type === "throw") throw rootRecord.arg;
            return this.rval;
        },
        dispatchException: function(exception) {
            if (this.done) throw exception;
            var context = this;
            function handle(loc, caught) {
                record.type = "throw";
                record.arg = exception;
                context.next = loc;
                if (caught) {
                    // If the dispatched exception was caught by a catch block,
                    // then let that catch block handle the exception normally.
                    context.method = "next";
                    context.arg = undefined;
                }
                return !!caught;
            }
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                var record = entry.completion;
                if (entry.tryLoc === "root") // Exception thrown outside of any try block that could handle
                // it, so set the completion value of the entire function to
                // throw the exception.
                return handle("end");
                if (entry.tryLoc <= this.prev) {
                    var hasCatch = hasOwn.call(entry, "catchLoc");
                    var hasFinally = hasOwn.call(entry, "finallyLoc");
                    if (hasCatch && hasFinally) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                        else if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else if (hasCatch) {
                        if (this.prev < entry.catchLoc) return handle(entry.catchLoc, true);
                    } else if (hasFinally) {
                        if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
                    } else throw new Error("try statement without catch or finally");
                }
            }
        },
        abrupt: function(type, arg) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
                    var finallyEntry = entry;
                    break;
                }
            }
            if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
            var record = finallyEntry ? finallyEntry.completion : {
            };
            record.type = type;
            record.arg = arg;
            if (finallyEntry) {
                this.method = "next";
                this.next = finallyEntry.finallyLoc;
                return ContinueSentinel;
            }
            return this.complete(record);
        },
        complete: function(record, afterLoc) {
            if (record.type === "throw") throw record.arg;
            if (record.type === "break" || record.type === "continue") this.next = record.arg;
            else if (record.type === "return") {
                this.rval = this.arg = record.arg;
                this.method = "return";
                this.next = "end";
            } else if (record.type === "normal" && afterLoc) this.next = afterLoc;
            return ContinueSentinel;
        },
        finish: function(finallyLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.finallyLoc === finallyLoc) {
                    this.complete(entry.completion, entry.afterLoc);
                    resetTryEntry(entry);
                    return ContinueSentinel;
                }
            }
        },
        "catch": function(tryLoc) {
            for(var i = this.tryEntries.length - 1; i >= 0; --i){
                var entry = this.tryEntries[i];
                if (entry.tryLoc === tryLoc) {
                    var record = entry.completion;
                    if (record.type === "throw") {
                        var thrown = record.arg;
                        resetTryEntry(entry);
                    }
                    return thrown;
                }
            }
            // The context.catch method must only be called with a location
            // argument that corresponds to a known catch block.
            throw new Error("illegal catch attempt");
        },
        delegateYield: function(iterable, resultName, nextLoc) {
            this.delegate = {
                iterator: values(iterable),
                resultName: resultName,
                nextLoc: nextLoc
            };
            if (this.method === "next") // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined;
            return ContinueSentinel;
        }
    };
    // Regardless of whether this script is executing as a CommonJS module
    // or not, return the runtime object so that we can declare the variable
    // regeneratorRuntime in the outer scope, which allows this module to be
    // injected easily by `bin/regenerator --include-runtime script.js`.
    return exports;
}(// If this script is executing as a CommonJS module, use module.exports
// as the regeneratorRuntime namespace. Otherwise create a new empty
// object. Either way, the resulting object will be used to initialize
// the regeneratorRuntime variable at the top of this file.
typeof module === "object" ? module.exports : {
});
try {
    regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
    // This module should not be running in strict mode, so the above
    // assignment should always work unless something is misconfigured. Just
    // in case runtime.js accidentally runs in strict mode, we can escape
    // strict mode using a global Function call. This could conceivably fail
    // if a Content Security Policy forbids using Function, but in that case
    // the proper solution is to fix the accidental strict mode problem. If
    // you've misconfigured your bundler to force strict mode and applied a
    // CSP to forbid Function, and you're not willing to fix either of those
    // problems, please detail your unique predicament in a GitHub issue.
    Function("r", "regeneratorRuntime = r")(runtime);
}

},{}],"a7UJj":[function(require,module,exports) {
"use strict";
var hyperscript = require("./hyperscript");
var request = require("./request");
var mountRedraw = require("./mount-redraw");
var m = function m() {
    return hyperscript.apply(this, arguments);
};
m.m = hyperscript;
m.trust = hyperscript.trust;
m.fragment = hyperscript.fragment;
m.mount = mountRedraw.mount;
m.route = require("./route");
m.render = require("./render");
m.redraw = mountRedraw.redraw;
m.request = request.request;
m.jsonp = request.jsonp;
m.parseQueryString = require("./querystring/parse");
m.buildQueryString = require("./querystring/build");
m.parsePathname = require("./pathname/parse");
m.buildPathname = require("./pathname/build");
m.vnode = require("./render/vnode");
m.PromisePolyfill = require("./promise/polyfill");
module.exports = m;

},{"./hyperscript":"amBFY","./request":"7QnjX","./mount-redraw":"3IzBr","./route":"hqfSN","./render":"35aJ6","./querystring/parse":"f2JYz","./querystring/build":"k3mZd","./pathname/parse":"dIkXY","./pathname/build":"3I4yB","./render/vnode":"6srsp","./promise/polyfill":"aBm4J"}],"amBFY":[function(require,module,exports) {
"use strict";
var hyperscript = require("./render/hyperscript");
hyperscript.trust = require("./render/trust");
hyperscript.fragment = require("./render/fragment");
module.exports = hyperscript;

},{"./render/hyperscript":"gVN62","./render/trust":"jgKzo","./render/fragment":"etwKa"}],"gVN62":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
var hyperscriptVnode = require("./hyperscriptVnode");
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g;
var selectorCache = {
};
var hasOwn = {
}.hasOwnProperty;
function isEmpty(object) {
    for(var key in object)if (hasOwn.call(object, key)) return false;
    return true;
}
function compileSelector(selector) {
    var match, tag = "div", classes = [], attrs = {
    };
    while(match = selectorParser.exec(selector)){
        var type = match[1], value = match[2];
        if (type === "" && value !== "") tag = value;
        else if (type === "#") attrs.id = value;
        else if (type === ".") classes.push(value);
        else if (match[3][0] === "[") {
            var attrValue = match[6];
            if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\");
            if (match[4] === "class") classes.push(attrValue);
            else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true;
        }
    }
    if (classes.length > 0) attrs.className = classes.join(" ");
    return selectorCache[selector] = {
        tag: tag,
        attrs: attrs
    };
}
function execSelector(state, vnode) {
    var attrs = vnode.attrs;
    var children = Vnode.normalizeChildren(vnode.children);
    var hasClass = hasOwn.call(attrs, "class");
    var className = hasClass ? attrs.class : attrs.className;
    vnode.tag = state.tag;
    vnode.attrs = null;
    vnode.children = undefined;
    if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
        var newAttrs = {
        };
        for(var key in attrs)if (hasOwn.call(attrs, key)) newAttrs[key] = attrs[key];
        attrs = newAttrs;
    }
    for(var key in state.attrs)if (hasOwn.call(state.attrs, key) && key !== "className" && !hasOwn.call(attrs, key)) attrs[key] = state.attrs[key];
    if (className != null || state.attrs.className != null) attrs.className = className != null ? state.attrs.className != null ? String(state.attrs.className) + " " + String(className) : className : state.attrs.className != null ? state.attrs.className : null;
    if (hasClass) attrs.class = null;
    for(var key in attrs)if (hasOwn.call(attrs, key) && key !== "key") {
        vnode.attrs = attrs;
        break;
    }
    if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") vnode.text = children[0].children;
    else vnode.children = children;
    return vnode;
}
function hyperscript(selector) {
    if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") throw Error("The selector must be either a string or a component.");
    var vnode = hyperscriptVnode.apply(1, arguments);
    if (typeof selector === "string") {
        vnode.children = Vnode.normalizeChildren(vnode.children);
        if (selector !== "[") return execSelector(selectorCache[selector] || compileSelector(selector), vnode);
    }
    vnode.tag = selector;
    return vnode;
}
module.exports = hyperscript;

},{"../render/vnode":"6srsp","./hyperscriptVnode":"3jdrL"}],"6srsp":[function(require,module,exports) {
"use strict";
function Vnode(tag, key, attrs, children, text, dom) {
    return {
        tag: tag,
        key: key,
        attrs: attrs,
        children: children,
        text: text,
        dom: dom,
        domSize: undefined,
        state: undefined,
        events: undefined,
        instance: undefined
    };
}
Vnode.normalize = function(node) {
    if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined);
    if (node == null || typeof node === "boolean") return null;
    if (typeof node === "object") return node;
    return Vnode("#", undefined, undefined, String(node), undefined, undefined);
};
Vnode.normalizeChildren = function(input) {
    var children = [];
    if (input.length) {
        var isKeyed = input[0] != null && input[0].key != null;
        // Note: this is a *very* perf-sensitive check.
        // Fun fact: merging the loop like this is somehow faster than splitting
        // it, noticeably so.
        for(var i = 1; i < input.length; i++){
            if ((input[i] != null && input[i].key != null) !== isKeyed) throw new TypeError("Vnodes must either always have keys or never have keys!");
        }
        for(var i = 0; i < input.length; i++)children[i] = Vnode.normalize(input[i]);
    }
    return children;
};
module.exports = Vnode;

},{}],"3jdrL":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
// Call via `hyperscriptVnode.apply(startOffset, arguments)`
//
// The reason I do it this way, forwarding the arguments and passing the start
// offset in `this`, is so I don't have to create a temporary array in a
// performance-critical path.
//
// In native ES6, I'd instead add a final `...args` parameter to the
// `hyperscript` and `fragment` factories and define this as
// `hyperscriptVnode(...args)`, since modern engines do optimize that away. But
// ES5 (what Mithril requires thanks to IE support) doesn't give me that luxury,
// and engines aren't nearly intelligent enough to do either of these:
//
// 1. Elide the allocation for `[].slice.call(arguments, 1)` when it's passed to
//    another function only to be indexed.
// 2. Elide an `arguments` allocation when it's passed to any function other
//    than `Function.prototype.apply` or `Reflect.apply`.
//
// In ES6, it'd probably look closer to this (I'd need to profile it, though):
// module.exports = function(attrs, ...children) {
//     if (attrs == null || typeof attrs === "object" && attrs.tag == null && !Array.isArray(attrs)) {
//         if (children.length === 1 && Array.isArray(children[0])) children = children[0]
//     } else {
//         children = children.length === 0 && Array.isArray(attrs) ? attrs : [attrs, ...children]
//         attrs = undefined
//     }
//
//     if (attrs == null) attrs = {}
//     return Vnode("", attrs.key, attrs, children)
// }
module.exports = function() {
    var attrs = arguments[this], start = this + 1, children;
    if (attrs == null) attrs = {
    };
    else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
        attrs = {
        };
        start = this;
    }
    if (arguments.length === start + 1) {
        children = arguments[start];
        if (!Array.isArray(children)) children = [
            children
        ];
    } else {
        children = [];
        while(start < arguments.length)children.push(arguments[start++]);
    }
    return Vnode("", attrs.key, attrs, children);
};

},{"../render/vnode":"6srsp"}],"jgKzo":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
module.exports = function(html) {
    if (html == null) html = "";
    return Vnode("<", undefined, undefined, html, undefined, undefined);
};

},{"../render/vnode":"6srsp"}],"etwKa":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
var hyperscriptVnode = require("./hyperscriptVnode");
module.exports = function() {
    var vnode = hyperscriptVnode.apply(0, arguments);
    vnode.tag = "[";
    vnode.children = Vnode.normalizeChildren(vnode.children);
    return vnode;
};

},{"../render/vnode":"6srsp","./hyperscriptVnode":"3jdrL"}],"7QnjX":[function(require,module,exports) {
"use strict";
var PromisePolyfill = require("./promise/promise");
var mountRedraw = require("./mount-redraw");
module.exports = require("./request/request")(window, PromisePolyfill, mountRedraw.redraw);

},{"./promise/promise":"jcHh3","./mount-redraw":"3IzBr","./request/request":"1vd7c"}],"jcHh3":[function(require,module,exports) {
var global = arguments[3];
"use strict";
var PromisePolyfill = require("./polyfill");
if (typeof window !== "undefined") {
    if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill;
    else if (!window.Promise.prototype.finally) window.Promise.prototype.finally = PromisePolyfill.prototype.finally;
    module.exports = window.Promise;
} else if (typeof global !== "undefined") {
    if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill;
    else if (!global.Promise.prototype.finally) global.Promise.prototype.finally = PromisePolyfill.prototype.finally;
    module.exports = global.Promise;
} else module.exports = PromisePolyfill;

},{"./polyfill":"aBm4J"}],"aBm4J":[function(require,module,exports) {
"use strict";
/** @constructor */ var PromisePolyfill = function(executor) {
    if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`");
    if (typeof executor !== "function") throw new TypeError("executor must be a function");
    var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false);
    var instance = self._instance = {
        resolvers: resolvers,
        rejectors: rejectors
    };
    var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
    function handler(list, shouldAbsorb) {
        return function execute(value) {
            var then;
            try {
                if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
                    if (value === self) throw new TypeError("Promise can't be resolved w/ itself");
                    executeOnce(then.bind(value));
                } else callAsync(function() {
                    if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value);
                    for(var i = 0; i < list.length; i++)list[i](value);
                    resolvers.length = 0, rejectors.length = 0;
                    instance.state = shouldAbsorb;
                    instance.retry = function() {
                        execute(value);
                    };
                });
            } catch (e) {
                rejectCurrent(e);
            }
        };
    }
    function executeOnce(then) {
        var runs = 0;
        function run(fn) {
            return function(value) {
                if (runs++ > 0) return;
                fn(value);
            };
        }
        var onerror = run(rejectCurrent);
        try {
            then(run(resolveCurrent), onerror);
        } catch (e) {
            onerror(e);
        }
    }
    executeOnce(executor);
};
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
    var self = this, instance = self._instance;
    function handle(callback, list, next, state) {
        list.push(function(value) {
            if (typeof callback !== "function") next(value);
            else try {
                resolveNext(callback(value));
            } catch (e) {
                if (rejectNext) rejectNext(e);
            }
        });
        if (typeof instance.retry === "function" && state === instance.state) instance.retry();
    }
    var resolveNext, rejectNext;
    var promise = new PromisePolyfill(function(resolve, reject) {
        resolveNext = resolve, rejectNext = reject;
    });
    handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false);
    return promise;
};
PromisePolyfill.prototype.catch = function(onRejection) {
    return this.then(null, onRejection);
};
PromisePolyfill.prototype.finally = function(callback) {
    return this.then(function(value) {
        return PromisePolyfill.resolve(callback()).then(function() {
            return value;
        });
    }, function(reason) {
        return PromisePolyfill.resolve(callback()).then(function() {
            return PromisePolyfill.reject(reason);
        });
    });
};
PromisePolyfill.resolve = function(value) {
    if (value instanceof PromisePolyfill) return value;
    return new PromisePolyfill(function(resolve) {
        resolve(value);
    });
};
PromisePolyfill.reject = function(value) {
    return new PromisePolyfill(function(resolve, reject) {
        reject(value);
    });
};
PromisePolyfill.all = function(list) {
    return new PromisePolyfill(function(resolve, reject) {
        var total = list.length, count = 0, values = [];
        if (list.length === 0) resolve([]);
        else for(var i = 0; i < list.length; i++)(function(i) {
            function consume(value) {
                count++;
                values[i] = value;
                if (count === total) resolve(values);
            }
            if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") list[i].then(consume, reject);
            else consume(list[i]);
        })(i);
    });
};
PromisePolyfill.race = function(list) {
    return new PromisePolyfill(function(resolve, reject) {
        for(var i = 0; i < list.length; i++)list[i].then(resolve, reject);
    });
};
module.exports = PromisePolyfill;

},{}],"3IzBr":[function(require,module,exports) {
"use strict";
var render = require("./render");
module.exports = require("./api/mount-redraw")(render, requestAnimationFrame, console);

},{"./render":"35aJ6","./api/mount-redraw":"4LuTr"}],"35aJ6":[function(require,module,exports) {
"use strict";
module.exports = require("./render/render")(window);

},{"./render/render":"32LcU"}],"32LcU":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
module.exports = function($window) {
    var $doc = $window && $window.document;
    var currentRedraw;
    var nameSpace = {
        svg: "http://www.w3.org/2000/svg",
        math: "http://www.w3.org/1998/Math/MathML"
    };
    function getNameSpace(vnode) {
        return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag];
    }
    //sanity check to discourage people from doing `vnode.state = ...`
    function checkState(vnode, original) {
        if (vnode.state !== original) throw new Error("`vnode.state` must not be modified");
    }
    //Note: the hook is passed as the `this` argument to allow proxying the
    //arguments without requiring a full array allocation to do so. It also
    //takes advantage of the fact the current `vnode` is the first argument in
    //all lifecycle methods.
    function callHook(vnode) {
        var original = vnode.state;
        try {
            return this.apply(original, arguments);
        } finally{
            checkState(vnode, original);
        }
    }
    // IE11 (at least) throws an UnspecifiedError when accessing document.activeElement when
    // inside an iframe. Catch and swallow this error, and heavy-handidly return null.
    function activeElement() {
        try {
            return $doc.activeElement;
        } catch (e) {
            return null;
        }
    }
    //create
    function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
        for(var i = start; i < end; i++){
            var vnode = vnodes[i];
            if (vnode != null) createNode(parent, vnode, hooks, ns, nextSibling);
        }
    }
    function createNode(parent, vnode, hooks, ns, nextSibling) {
        var tag = vnode.tag;
        if (typeof tag === "string") {
            vnode.state = {
            };
            if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
            switch(tag){
                case "#":
                    createText(parent, vnode, nextSibling);
                    break;
                case "<":
                    createHTML(parent, vnode, ns, nextSibling);
                    break;
                case "[":
                    createFragment(parent, vnode, hooks, ns, nextSibling);
                    break;
                default:
                    createElement(parent, vnode, hooks, ns, nextSibling);
            }
        } else createComponent(parent, vnode, hooks, ns, nextSibling);
    }
    function createText(parent, vnode, nextSibling) {
        vnode.dom = $doc.createTextNode(vnode.children);
        insertNode(parent, vnode.dom, nextSibling);
    }
    var possibleParents = {
        caption: "table",
        thead: "table",
        tbody: "table",
        tfoot: "table",
        tr: "tbody",
        th: "tr",
        td: "tr",
        colgroup: "table",
        col: "colgroup"
    };
    function createHTML(parent, vnode, ns, nextSibling) {
        var match = vnode.children.match(/^\s*?<(\w+)/im) || [];
        // not using the proper parent makes the child element(s) vanish.
        //     var div = document.createElement("div")
        //     div.innerHTML = "<td>i</td><td>j</td>"
        //     console.log(div.innerHTML)
        // --> "ij", no <td> in sight.
        var temp = $doc.createElement(possibleParents[match[1]] || "div");
        if (ns === "http://www.w3.org/2000/svg") {
            temp.innerHTML = "<svg xmlns=\"http://www.w3.org/2000/svg\">" + vnode.children + "</svg>";
            temp = temp.firstChild;
        } else temp.innerHTML = vnode.children;
        vnode.dom = temp.firstChild;
        vnode.domSize = temp.childNodes.length;
        // Capture nodes to remove, so we don't confuse them.
        vnode.instance = [];
        var fragment = $doc.createDocumentFragment();
        var child;
        while(child = temp.firstChild){
            vnode.instance.push(child);
            fragment.appendChild(child);
        }
        insertNode(parent, fragment, nextSibling);
    }
    function createFragment(parent, vnode, hooks, ns, nextSibling) {
        var fragment = $doc.createDocumentFragment();
        if (vnode.children != null) {
            var children = vnode.children;
            createNodes(fragment, children, 0, children.length, hooks, null, ns);
        }
        vnode.dom = fragment.firstChild;
        vnode.domSize = fragment.childNodes.length;
        insertNode(parent, fragment, nextSibling);
    }
    function createElement(parent, vnode, hooks, ns, nextSibling) {
        var tag = vnode.tag;
        var attrs = vnode.attrs;
        var is = attrs && attrs.is;
        ns = getNameSpace(vnode) || ns;
        var element = ns ? is ? $doc.createElementNS(ns, tag, {
            is: is
        }) : $doc.createElementNS(ns, tag) : is ? $doc.createElement(tag, {
            is: is
        }) : $doc.createElement(tag);
        vnode.dom = element;
        if (attrs != null) setAttrs(vnode, attrs, ns);
        insertNode(parent, element, nextSibling);
        if (!maybeSetContentEditable(vnode)) {
            if (vnode.text != null) {
                if (vnode.text !== "") element.textContent = vnode.text;
                else vnode.children = [
                    Vnode("#", undefined, undefined, vnode.text, undefined, undefined)
                ];
            }
            if (vnode.children != null) {
                var children = vnode.children;
                createNodes(element, children, 0, children.length, hooks, null, ns);
                if (vnode.tag === "select" && attrs != null) setLateSelectAttrs(vnode, attrs);
            }
        }
    }
    function initComponent(vnode, hooks) {
        var sentinel;
        if (typeof vnode.tag.view === "function") {
            vnode.state = Object.create(vnode.tag);
            sentinel = vnode.state.view;
            if (sentinel.$$reentrantLock$$ != null) return;
            sentinel.$$reentrantLock$$ = true;
        } else {
            vnode.state = void 0;
            sentinel = vnode.tag;
            if (sentinel.$$reentrantLock$$ != null) return;
            sentinel.$$reentrantLock$$ = true;
            vnode.state = vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function" ? new vnode.tag(vnode) : vnode.tag(vnode);
        }
        initLifecycle(vnode.state, vnode, hooks);
        if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks);
        vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
        if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
        sentinel.$$reentrantLock$$ = null;
    }
    function createComponent(parent, vnode, hooks, ns, nextSibling) {
        initComponent(vnode, hooks);
        if (vnode.instance != null) {
            createNode(parent, vnode.instance, hooks, ns, nextSibling);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0;
        } else vnode.domSize = 0;
    }
    //update
    /**
	 * @param {Element|Fragment} parent - the parent element
	 * @param {Vnode[] | null} old - the list of vnodes of the last `render()` call for
	 *                               this part of the tree
	 * @param {Vnode[] | null} vnodes - as above, but for the current `render()` call.
	 * @param {Function[]} hooks - an accumulator of post-render hooks (oncreate/onupdate)
	 * @param {Element | null} nextSibling - the next DOM node if we're dealing with a
	 *                                       fragment that is not the last item in its
	 *                                       parent
	 * @param {'svg' | 'math' | String | null} ns) - the current XML namespace, if any
	 * @returns void
	 */ // This function diffs and patches lists of vnodes, both keyed and unkeyed.
    //
    // We will:
    //
    // 1. describe its general structure
    // 2. focus on the diff algorithm optimizations
    // 3. discuss DOM node operations.
    // ## Overview:
    //
    // The updateNodes() function:
    // - deals with trivial cases
    // - determines whether the lists are keyed or unkeyed based on the first non-null node
    //   of each list.
    // - diffs them and patches the DOM if needed (that's the brunt of the code)
    // - manages the leftovers: after diffing, are there:
    //   - old nodes left to remove?
    // 	 - new nodes to insert?
    // 	 deal with them!
    //
    // The lists are only iterated over once, with an exception for the nodes in `old` that
    // are visited in the fourth part of the diff and in the `removeNodes` loop.
    // ## Diffing
    //
    // Reading https://github.com/localvoid/ivi/blob/ddc09d06abaef45248e6133f7040d00d3c6be853/packages/ivi/src/vdom/implementation.ts#L617-L837
    // may be good for context on longest increasing subsequence-based logic for moving nodes.
    //
    // In order to diff keyed lists, one has to
    //
    // 1) match nodes in both lists, per key, and update them accordingly
    // 2) create the nodes present in the new list, but absent in the old one
    // 3) remove the nodes present in the old list, but absent in the new one
    // 4) figure out what nodes in 1) to move in order to minimize the DOM operations.
    //
    // To achieve 1) one can create a dictionary of keys => index (for the old list), then iterate
    // over the new list and for each new vnode, find the corresponding vnode in the old list using
    // the map.
    // 2) is achieved in the same step: if a new node has no corresponding entry in the map, it is new
    // and must be created.
    // For the removals, we actually remove the nodes that have been updated from the old list.
    // The nodes that remain in that list after 1) and 2) have been performed can be safely removed.
    // The fourth step is a bit more complex and relies on the longest increasing subsequence (LIS)
    // algorithm.
    //
    // the longest increasing subsequence is the list of nodes that can remain in place. Imagine going
    // from `1,2,3,4,5` to `4,5,1,2,3` where the numbers are not necessarily the keys, but the indices
    // corresponding to the keyed nodes in the old list (keyed nodes `e,d,c,b,a` => `b,a,e,d,c` would
    //  match the above lists, for example).
    //
    // In there are two increasing subsequences: `4,5` and `1,2,3`, the latter being the longest. We
    // can update those nodes without moving them, and only call `insertNode` on `4` and `5`.
    //
    // @localvoid adapted the algo to also support node deletions and insertions (the `lis` is actually
    // the longest increasing subsequence *of old nodes still present in the new list*).
    //
    // It is a general algorithm that is fireproof in all circumstances, but it requires the allocation
    // and the construction of a `key => oldIndex` map, and three arrays (one with `newIndex => oldIndex`,
    // the `LIS` and a temporary one to create the LIS).
    //
    // So we cheat where we can: if the tails of the lists are identical, they are guaranteed to be part of
    // the LIS and can be updated without moving them.
    //
    // If two nodes are swapped, they are guaranteed not to be part of the LIS, and must be moved (with
    // the exception of the last node if the list is fully reversed).
    //
    // ## Finding the next sibling.
    //
    // `updateNode()` and `createNode()` expect a nextSibling parameter to perform DOM operations.
    // When the list is being traversed top-down, at any index, the DOM nodes up to the previous
    // vnode reflect the content of the new list, whereas the rest of the DOM nodes reflect the old
    // list. The next sibling must be looked for in the old list using `getNextSibling(... oldStart + 1 ...)`.
    //
    // In the other scenarios (swaps, upwards traversal, map-based diff),
    // the new vnodes list is traversed upwards. The DOM nodes at the bottom of the list reflect the
    // bottom part of the new vnodes list, and we can use the `v.dom`  value of the previous node
    // as the next sibling (cached in the `nextSibling` variable).
    // ## DOM node moves
    //
    // In most scenarios `updateNode()` and `createNode()` perform the DOM operations. However,
    // this is not the case if the node moved (second and fourth part of the diff algo). We move
    // the old DOM nodes before updateNode runs because it enables us to use the cached `nextSibling`
    // variable rather than fetching it using `getNextSibling()`.
    //
    // The fourth part of the diff currently inserts nodes unconditionally, leading to issues
    // like #1791 and #1999. We need to be smarter about those situations where adjascent old
    // nodes remain together in the new list in a way that isn't covered by parts one and
    // three of the diff algo.
    function updateNodes(parent, old, vnodes, hooks, nextSibling, ns) {
        if (old === vnodes || old == null && vnodes == null) return;
        else if (old == null || old.length === 0) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns);
        else if (vnodes == null || vnodes.length === 0) removeNodes(parent, old, 0, old.length);
        else {
            var isOldKeyed = old[0] != null && old[0].key != null;
            var isKeyed = vnodes[0] != null && vnodes[0].key != null;
            var start = 0, oldStart = 0;
            if (!isOldKeyed) while(oldStart < old.length && old[oldStart] == null)oldStart++;
            if (!isKeyed) while(start < vnodes.length && vnodes[start] == null)start++;
            if (isKeyed === null && isOldKeyed == null) return; // both lists are full of nulls
            if (isOldKeyed !== isKeyed) {
                removeNodes(parent, old, oldStart, old.length);
                createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else if (!isKeyed) {
                // Don't index past the end of either list (causes deopts).
                var commonLength = old.length < vnodes.length ? old.length : vnodes.length;
                // Rewind if necessary to the first non-null index on either side.
                // We could alternatively either explicitly create or remove nodes when `start !== oldStart`
                // but that would be optimizing for sparse lists which are more rare than dense ones.
                start = start < oldStart ? start : oldStart;
                for(; start < commonLength; start++){
                    o = old[start];
                    v = vnodes[start];
                    if (o === v || o == null && v == null) continue;
                    else if (o == null) createNode(parent, v, hooks, ns, getNextSibling(old, start + 1, nextSibling));
                    else if (v == null) removeNode(parent, o);
                    else updateNode(parent, o, v, hooks, getNextSibling(old, start + 1, nextSibling), ns);
                }
                if (old.length > commonLength) removeNodes(parent, old, start, old.length);
                if (vnodes.length > commonLength) createNodes(parent, vnodes, start, vnodes.length, hooks, nextSibling, ns);
            } else {
                // keyed diff
                var oldEnd = old.length - 1, end = vnodes.length - 1, map, o, v, oe, ve, topSibling;
                // bottom-up
                while(oldEnd >= oldStart && end >= start){
                    oe = old[oldEnd];
                    ve = vnodes[end];
                    if (oe.key !== ve.key) break;
                    if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldEnd--, end--;
                }
                // top-down
                while(oldEnd >= oldStart && end >= start){
                    o = old[oldStart];
                    v = vnodes[start];
                    if (o.key !== v.key) break;
                    oldStart++, start++;
                    if (o !== v) updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), ns);
                }
                // swaps and list reversals
                while(oldEnd >= oldStart && end >= start){
                    if (start === end) break;
                    if (o.key !== ve.key || oe.key !== v.key) break;
                    topSibling = getNextSibling(old, oldStart, nextSibling);
                    moveNodes(parent, oe, topSibling);
                    if (oe !== v) updateNode(parent, oe, v, hooks, topSibling, ns);
                    if (++start <= --end) moveNodes(parent, o, nextSibling);
                    if (o !== ve) updateNode(parent, o, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldStart++;
                    oldEnd--;
                    oe = old[oldEnd];
                    ve = vnodes[end];
                    o = old[oldStart];
                    v = vnodes[start];
                }
                // bottom up once again
                while(oldEnd >= oldStart && end >= start){
                    if (oe.key !== ve.key) break;
                    if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                    if (ve.dom != null) nextSibling = ve.dom;
                    oldEnd--, end--;
                    oe = old[oldEnd];
                    ve = vnodes[end];
                }
                if (start > end) removeNodes(parent, old, oldStart, oldEnd + 1);
                else if (oldStart > oldEnd) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
                else {
                    // inspired by ivi https://github.com/ivijs/ivi/ by Boris Kaul
                    var originalNextSibling = nextSibling, vnodesLength = end - start + 1, oldIndices = new Array(vnodesLength), li = 0, i = 0, pos = 2147483647, matched = 0, map, lisIndices;
                    for(i = 0; i < vnodesLength; i++)oldIndices[i] = -1;
                    for(i = end; i >= start; i--){
                        if (map == null) map = getKeyMap(old, oldStart, oldEnd + 1);
                        ve = vnodes[i];
                        var oldIndex = map[ve.key];
                        if (oldIndex != null) {
                            pos = oldIndex < pos ? oldIndex : -1 // becomes -1 if nodes were re-ordered
                            ;
                            oldIndices[i - start] = oldIndex;
                            oe = old[oldIndex];
                            old[oldIndex] = null;
                            if (oe !== ve) updateNode(parent, oe, ve, hooks, nextSibling, ns);
                            if (ve.dom != null) nextSibling = ve.dom;
                            matched++;
                        }
                    }
                    nextSibling = originalNextSibling;
                    if (matched !== oldEnd - oldStart + 1) removeNodes(parent, old, oldStart, oldEnd + 1);
                    if (matched === 0) createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns);
                    else {
                        if (pos === -1) {
                            // the indices of the indices of the items that are part of the
                            // longest increasing subsequence in the oldIndices list
                            lisIndices = makeLisIndices(oldIndices);
                            li = lisIndices.length - 1;
                            for(i = end; i >= start; i--){
                                v = vnodes[i];
                                if (oldIndices[i - start] === -1) createNode(parent, v, hooks, ns, nextSibling);
                                else if (lisIndices[li] === i - start) li--;
                                else moveNodes(parent, v, nextSibling);
                                if (v.dom != null) nextSibling = vnodes[i].dom;
                            }
                        } else for(i = end; i >= start; i--){
                            v = vnodes[i];
                            if (oldIndices[i - start] === -1) createNode(parent, v, hooks, ns, nextSibling);
                            if (v.dom != null) nextSibling = vnodes[i].dom;
                        }
                    }
                }
            }
        }
    }
    function updateNode(parent, old, vnode, hooks, nextSibling, ns) {
        var oldTag = old.tag, tag = vnode.tag;
        if (oldTag === tag) {
            vnode.state = old.state;
            vnode.events = old.events;
            if (shouldNotUpdate(vnode, old)) return;
            if (typeof oldTag === "string") {
                if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
                switch(oldTag){
                    case "#":
                        updateText(old, vnode);
                        break;
                    case "<":
                        updateHTML(parent, old, vnode, ns, nextSibling);
                        break;
                    case "[":
                        updateFragment(parent, old, vnode, hooks, nextSibling, ns);
                        break;
                    default:
                        updateElement(old, vnode, hooks, ns);
                }
            } else updateComponent(parent, old, vnode, hooks, nextSibling, ns);
        } else {
            removeNode(parent, old);
            createNode(parent, vnode, hooks, ns, nextSibling);
        }
    }
    function updateText(old, vnode) {
        if (old.children.toString() !== vnode.children.toString()) old.dom.nodeValue = vnode.children;
        vnode.dom = old.dom;
    }
    function updateHTML(parent, old, vnode, ns, nextSibling) {
        if (old.children !== vnode.children) {
            removeHTML(parent, old);
            createHTML(parent, vnode, ns, nextSibling);
        } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
            vnode.instance = old.instance;
        }
    }
    function updateFragment(parent, old, vnode, hooks, nextSibling, ns) {
        updateNodes(parent, old.children, vnode.children, hooks, nextSibling, ns);
        var domSize = 0, children = vnode.children;
        vnode.dom = null;
        if (children != null) {
            for(var i = 0; i < children.length; i++){
                var child = children[i];
                if (child != null && child.dom != null) {
                    if (vnode.dom == null) vnode.dom = child.dom;
                    domSize += child.domSize || 1;
                }
            }
            if (domSize !== 1) vnode.domSize = domSize;
        }
    }
    function updateElement(old, vnode, hooks, ns) {
        var element = vnode.dom = old.dom;
        ns = getNameSpace(vnode) || ns;
        if (vnode.tag === "textarea") {
            if (vnode.attrs == null) vnode.attrs = {
            };
            if (vnode.text != null) {
                vnode.attrs.value = vnode.text //FIXME handle multiple children
                ;
                vnode.text = undefined;
            }
        }
        updateAttrs(vnode, old.attrs, vnode.attrs, ns);
        if (!maybeSetContentEditable(vnode)) {
            if (old.text != null && vnode.text != null && vnode.text !== "") {
                if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text;
            } else {
                if (old.text != null) old.children = [
                    Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)
                ];
                if (vnode.text != null) vnode.children = [
                    Vnode("#", undefined, undefined, vnode.text, undefined, undefined)
                ];
                updateNodes(element, old.children, vnode.children, hooks, null, ns);
            }
        }
    }
    function updateComponent(parent, old, vnode, hooks, nextSibling, ns) {
        vnode.instance = Vnode.normalize(callHook.call(vnode.state.view, vnode));
        if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument");
        updateLifecycle(vnode.state, vnode, hooks);
        if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks);
        if (vnode.instance != null) {
            if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling);
            else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, ns);
            vnode.dom = vnode.instance.dom;
            vnode.domSize = vnode.instance.domSize;
        } else if (old.instance != null) {
            removeNode(parent, old.instance);
            vnode.dom = undefined;
            vnode.domSize = 0;
        } else {
            vnode.dom = old.dom;
            vnode.domSize = old.domSize;
        }
    }
    function getKeyMap(vnodes, start, end) {
        var map = Object.create(null);
        for(; start < end; start++){
            var vnode = vnodes[start];
            if (vnode != null) {
                var key = vnode.key;
                if (key != null) map[key] = start;
            }
        }
        return map;
    }
    // Lifted from ivi https://github.com/ivijs/ivi/
    // takes a list of unique numbers (-1 is special and can
    // occur multiple times) and returns an array with the indices
    // of the items that are part of the longest increasing
    // subsequece
    var lisTemp = [];
    function makeLisIndices(a) {
        var result = [
            0
        ];
        var u = 0, v = 0, i = 0;
        var il = lisTemp.length = a.length;
        for(var i = 0; i < il; i++)lisTemp[i] = a[i];
        for(var i = 0; i < il; ++i){
            if (a[i] === -1) continue;
            var j = result[result.length - 1];
            if (a[j] < a[i]) {
                lisTemp[i] = j;
                result.push(i);
                continue;
            }
            u = 0;
            v = result.length - 1;
            while(u < v){
                // Fast integer average without overflow.
                // eslint-disable-next-line no-bitwise
                var c = (u >>> 1) + (v >>> 1) + (u & v & 1);
                if (a[result[c]] < a[i]) u = c + 1;
                else v = c;
            }
            if (a[i] < a[result[u]]) {
                if (u > 0) lisTemp[i] = result[u - 1];
                result[u] = i;
            }
        }
        u = result.length;
        v = result[u - 1];
        while(u-- > 0){
            result[u] = v;
            v = lisTemp[v];
        }
        lisTemp.length = 0;
        return result;
    }
    function getNextSibling(vnodes, i, nextSibling) {
        for(; i < vnodes.length; i++){
            if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom;
        }
        return nextSibling;
    }
    // This covers a really specific edge case:
    // - Parent node is keyed and contains child
    // - Child is removed, returns unresolved promise in `onbeforeremove`
    // - Parent node is moved in keyed diff
    // - Remaining children still need moved appropriately
    //
    // Ideally, I'd track removed nodes as well, but that introduces a lot more
    // complexity and I'm not exactly interested in doing that.
    function moveNodes(parent, vnode, nextSibling) {
        var frag = $doc.createDocumentFragment();
        moveChildToFrag(parent, frag, vnode);
        insertNode(parent, frag, nextSibling);
    }
    function moveChildToFrag(parent, frag, vnode) {
        // Dodge the recursion overhead in a few of the most common cases.
        while(vnode.dom != null && vnode.dom.parentNode === parent){
            if (typeof vnode.tag !== "string") {
                vnode = vnode.instance;
                if (vnode != null) continue;
            } else if (vnode.tag === "<") for(var i = 0; i < vnode.instance.length; i++)frag.appendChild(vnode.instance[i]);
            else if (vnode.tag !== "[") // Don't recurse for text nodes *or* elements, just fragments
            frag.appendChild(vnode.dom);
            else if (vnode.children.length === 1) {
                vnode = vnode.children[0];
                if (vnode != null) continue;
            } else for(var i = 0; i < vnode.children.length; i++){
                var child = vnode.children[i];
                if (child != null) moveChildToFrag(parent, frag, child);
            }
            break;
        }
    }
    function insertNode(parent, dom, nextSibling) {
        if (nextSibling != null) parent.insertBefore(dom, nextSibling);
        else parent.appendChild(dom);
    }
    function maybeSetContentEditable(vnode) {
        if (vnode.attrs == null || vnode.attrs.contenteditable == null && vnode.attrs.contentEditable == null // property
        ) return false;
        var children = vnode.children;
        if (children != null && children.length === 1 && children[0].tag === "<") {
            var content = children[0].children;
            if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content;
        } else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted");
        return true;
    }
    //remove
    function removeNodes(parent, vnodes, start, end) {
        for(var i = start; i < end; i++){
            var vnode = vnodes[i];
            if (vnode != null) removeNode(parent, vnode);
        }
    }
    function removeNode(parent, vnode) {
        var mask = 0;
        var original = vnode.state;
        var stateResult, attrsResult;
        if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeremove === "function") {
            var result = callHook.call(vnode.state.onbeforeremove, vnode);
            if (result != null && typeof result.then === "function") {
                mask = 1;
                stateResult = result;
            }
        }
        if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
            var result = callHook.call(vnode.attrs.onbeforeremove, vnode);
            if (result != null && typeof result.then === "function") {
                // eslint-disable-next-line no-bitwise
                mask |= 2;
                attrsResult = result;
            }
        }
        checkState(vnode, original);
        // If we can, try to fast-path it and avoid all the overhead of awaiting
        if (!mask) {
            onremove(vnode);
            removeChild(parent, vnode);
        } else {
            if (stateResult != null) {
                var next = function() {
                    // eslint-disable-next-line no-bitwise
                    if (mask & 1) {
                        mask &= 2;
                        if (!mask) reallyRemove();
                    }
                };
                stateResult.then(next, next);
            }
            if (attrsResult != null) {
                var next = function() {
                    // eslint-disable-next-line no-bitwise
                    if (mask & 2) {
                        mask &= 1;
                        if (!mask) reallyRemove();
                    }
                };
                attrsResult.then(next, next);
            }
        }
        function reallyRemove() {
            checkState(vnode, original);
            onremove(vnode);
            removeChild(parent, vnode);
        }
    }
    function removeHTML(parent, vnode) {
        for(var i = 0; i < vnode.instance.length; i++)parent.removeChild(vnode.instance[i]);
    }
    function removeChild(parent, vnode) {
        // Dodge the recursion overhead in a few of the most common cases.
        while(vnode.dom != null && vnode.dom.parentNode === parent){
            if (typeof vnode.tag !== "string") {
                vnode = vnode.instance;
                if (vnode != null) continue;
            } else if (vnode.tag === "<") removeHTML(parent, vnode);
            else {
                if (vnode.tag !== "[") {
                    parent.removeChild(vnode.dom);
                    if (!Array.isArray(vnode.children)) break;
                }
                if (vnode.children.length === 1) {
                    vnode = vnode.children[0];
                    if (vnode != null) continue;
                } else for(var i = 0; i < vnode.children.length; i++){
                    var child = vnode.children[i];
                    if (child != null) removeChild(parent, child);
                }
            }
            break;
        }
    }
    function onremove(vnode) {
        if (typeof vnode.tag !== "string" && typeof vnode.state.onremove === "function") callHook.call(vnode.state.onremove, vnode);
        if (vnode.attrs && typeof vnode.attrs.onremove === "function") callHook.call(vnode.attrs.onremove, vnode);
        if (typeof vnode.tag !== "string") {
            if (vnode.instance != null) onremove(vnode.instance);
        } else {
            var children = vnode.children;
            if (Array.isArray(children)) for(var i = 0; i < children.length; i++){
                var child = children[i];
                if (child != null) onremove(child);
            }
        }
    }
    //attrs
    function setAttrs(vnode, attrs, ns) {
        for(var key in attrs)setAttr(vnode, key, null, attrs[key], ns);
    }
    function setAttr(vnode, key, old, value, ns) {
        if (key === "key" || key === "is" || value == null || isLifecycleMethod(key) || old === value && !isFormAttribute(vnode, key) && typeof value !== "object") return;
        if (key[0] === "o" && key[1] === "n") return updateEvent(vnode, key, value);
        if (key.slice(0, 6) === "xlink:") vnode.dom.setAttributeNS("http://www.w3.org/1999/xlink", key.slice(6), value);
        else if (key === "style") updateStyle(vnode.dom, old, value);
        else if (hasPropertyKey(vnode, key, ns)) {
            if (key === "value") {
                // Only do the coercion if we're actually going to check the value.
                /* eslint-disable no-implicit-coercion */ //setting input[value] to same value by typing on focused element moves cursor to end in Chrome
                if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === "" + value && vnode.dom === activeElement()) return;
                //setting select[value] to same value while having select open blinks select dropdown in Chrome
                if (vnode.tag === "select" && old !== null && vnode.dom.value === "" + value) return;
                //setting option[value] to same value while having select open blinks select dropdown in Chrome
                if (vnode.tag === "option" && old !== null && vnode.dom.value === "" + value) return;
            /* eslint-enable no-implicit-coercion */ }
            // If you assign an input type that is not supported by IE 11 with an assignment expression, an error will occur.
            if (vnode.tag === "input" && key === "type") vnode.dom.setAttribute(key, value);
            else vnode.dom[key] = value;
        } else if (typeof value === "boolean") {
            if (value) vnode.dom.setAttribute(key, "");
            else vnode.dom.removeAttribute(key);
        } else vnode.dom.setAttribute(key === "className" ? "class" : key, value);
    }
    function removeAttr(vnode, key, old, ns) {
        if (key === "key" || key === "is" || old == null || isLifecycleMethod(key)) return;
        if (key[0] === "o" && key[1] === "n" && !isLifecycleMethod(key)) updateEvent(vnode, key, undefined);
        else if (key === "style") updateStyle(vnode.dom, old, null);
        else if (hasPropertyKey(vnode, key, ns) && key !== "className" && !(key === "value" && (vnode.tag === "option" || vnode.tag === "select" && vnode.dom.selectedIndex === -1 && vnode.dom === activeElement())) && !(vnode.tag === "input" && key === "type")) vnode.dom[key] = null;
        else {
            var nsLastIndex = key.indexOf(":");
            if (nsLastIndex !== -1) key = key.slice(nsLastIndex + 1);
            if (old !== false) vnode.dom.removeAttribute(key === "className" ? "class" : key);
        }
    }
    function setLateSelectAttrs(vnode, attrs) {
        if ("value" in attrs) {
            if (attrs.value === null) {
                if (vnode.dom.selectedIndex !== -1) vnode.dom.value = null;
            } else {
                var normalized = "" + attrs.value // eslint-disable-line no-implicit-coercion
                ;
                if (vnode.dom.value !== normalized || vnode.dom.selectedIndex === -1) vnode.dom.value = normalized;
            }
        }
        if ("selectedIndex" in attrs) setAttr(vnode, "selectedIndex", null, attrs.selectedIndex, undefined);
    }
    function updateAttrs(vnode, old, attrs, ns) {
        if (attrs != null) for(var key in attrs)setAttr(vnode, key, old && old[key], attrs[key], ns);
        var val;
        if (old != null) {
            for(var key in old)if ((val = old[key]) != null && (attrs == null || attrs[key] == null)) removeAttr(vnode, key, val, ns);
        }
    }
    function isFormAttribute(vnode, attr) {
        return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === activeElement() || vnode.tag === "option" && vnode.dom.parentNode === $doc.activeElement;
    }
    function isLifecycleMethod(attr) {
        return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate";
    }
    function hasPropertyKey(vnode, key, ns) {
        // Filter out namespaced keys
        return ns === undefined && // If it's a custom element, just keep it.
        (vnode.tag.indexOf("-") > -1 || vnode.attrs != null && vnode.attrs.is || // If it's a normal element, let's try to avoid a few browser bugs.
        key !== "href" && key !== "list" && key !== "form" && key !== "width" && key !== "height" // && key !== "type"
        ) && key in vnode.dom;
    }
    //style
    var uppercaseRegex = /[A-Z]/g;
    function toLowerCase(capital) {
        return "-" + capital.toLowerCase();
    }
    function normalizeKey(key) {
        return key[0] === "-" && key[1] === "-" ? key : key === "cssFloat" ? "float" : key.replace(uppercaseRegex, toLowerCase);
    }
    function updateStyle(element, old, style) {
        if (old === style) ;
        else if (style == null) // New style is missing, just clear it.
        element.style.cssText = "";
        else if (typeof style !== "object") // New style is a string, let engine deal with patching.
        element.style.cssText = style;
        else if (old == null || typeof old !== "object") {
            // `old` is missing or a string, `style` is an object.
            element.style.cssText = "";
            // Add new style properties
            for(var key in style){
                var value = style[key];
                if (value != null) element.style.setProperty(normalizeKey(key), String(value));
            }
        } else {
            // Both old & new are (different) objects.
            // Update style properties that have changed
            for(var key in style){
                var value = style[key];
                if (value != null && (value = String(value)) !== String(old[key])) element.style.setProperty(normalizeKey(key), value);
            }
            // Remove style properties that no longer exist
            for(var key in old)if (old[key] != null && style[key] == null) element.style.removeProperty(normalizeKey(key));
        }
    }
    // Here's an explanation of how this works:
    // 1. The event names are always (by design) prefixed by `on`.
    // 2. The EventListener interface accepts either a function or an object
    //    with a `handleEvent` method.
    // 3. The object does not inherit from `Object.prototype`, to avoid
    //    any potential interference with that (e.g. setters).
    // 4. The event name is remapped to the handler before calling it.
    // 5. In function-based event handlers, `ev.target === this`. We replicate
    //    that below.
    // 6. In function-based event handlers, `return false` prevents the default
    //    action and stops event propagation. We replicate that below.
    function EventDict() {
        // Save this, so the current redraw is correctly tracked.
        this._ = currentRedraw;
    }
    EventDict.prototype = Object.create(null);
    EventDict.prototype.handleEvent = function(ev) {
        var handler = this["on" + ev.type];
        var result;
        if (typeof handler === "function") result = handler.call(ev.currentTarget, ev);
        else if (typeof handler.handleEvent === "function") handler.handleEvent(ev);
        if (this._ && ev.redraw !== false) this._();
        if (result === false) {
            ev.preventDefault();
            ev.stopPropagation();
        }
    };
    //event
    function updateEvent(vnode, key, value) {
        if (vnode.events != null) {
            if (vnode.events[key] === value) return;
            if (value != null && (typeof value === "function" || typeof value === "object")) {
                if (vnode.events[key] == null) vnode.dom.addEventListener(key.slice(2), vnode.events, false);
                vnode.events[key] = value;
            } else {
                if (vnode.events[key] != null) vnode.dom.removeEventListener(key.slice(2), vnode.events, false);
                vnode.events[key] = undefined;
            }
        } else if (value != null && (typeof value === "function" || typeof value === "object")) {
            vnode.events = new EventDict();
            vnode.dom.addEventListener(key.slice(2), vnode.events, false);
            vnode.events[key] = value;
        }
    }
    //lifecycle
    function initLifecycle(source, vnode, hooks) {
        if (typeof source.oninit === "function") callHook.call(source.oninit, vnode);
        if (typeof source.oncreate === "function") hooks.push(callHook.bind(source.oncreate, vnode));
    }
    function updateLifecycle(source, vnode, hooks) {
        if (typeof source.onupdate === "function") hooks.push(callHook.bind(source.onupdate, vnode));
    }
    function shouldNotUpdate(vnode, old) {
        do {
            if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") {
                var force = callHook.call(vnode.attrs.onbeforeupdate, vnode, old);
                if (force !== undefined && !force) break;
            }
            if (typeof vnode.tag !== "string" && typeof vnode.state.onbeforeupdate === "function") {
                var force = callHook.call(vnode.state.onbeforeupdate, vnode, old);
                if (force !== undefined && !force) break;
            }
            return false;
        }while (false) // eslint-disable-line no-constant-condition
        vnode.dom = old.dom;
        vnode.domSize = old.domSize;
        vnode.instance = old.instance;
        // One would think having the actual latest attributes would be ideal,
        // but it doesn't let us properly diff based on our current internal
        // representation. We have to save not only the old DOM info, but also
        // the attributes used to create it, as we diff *that*, not against the
        // DOM directly (with a few exceptions in `setAttr`). And, of course, we
        // need to save the children and text as they are conceptually not
        // unlike special "attributes" internally.
        vnode.attrs = old.attrs;
        vnode.children = old.children;
        vnode.text = old.text;
        return true;
    }
    return function(dom, vnodes, redraw) {
        if (!dom) throw new TypeError("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.");
        var hooks = [];
        var active = activeElement();
        var namespace = dom.namespaceURI;
        // First time rendering into a node clears it out
        if (dom.vnodes == null) dom.textContent = "";
        vnodes = Vnode.normalizeChildren(Array.isArray(vnodes) ? vnodes : [
            vnodes
        ]);
        var prevRedraw = currentRedraw;
        try {
            currentRedraw = typeof redraw === "function" ? redraw : undefined;
            updateNodes(dom, dom.vnodes, vnodes, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace);
        } finally{
            currentRedraw = prevRedraw;
        }
        dom.vnodes = vnodes;
        // `document.activeElement` can return null: https://html.spec.whatwg.org/multipage/interaction.html#dom-document-activeelement
        if (active != null && activeElement() !== active && typeof active.focus === "function") active.focus();
        for(var i = 0; i < hooks.length; i++)hooks[i]();
    };
};

},{"../render/vnode":"6srsp"}],"4LuTr":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
module.exports = function(render, schedule, console) {
    var subscriptions = [];
    var rendering = false;
    var pending = false;
    function sync() {
        if (rendering) throw new Error("Nested m.redraw.sync() call");
        rendering = true;
        for(var i = 0; i < subscriptions.length; i += 2)try {
            render(subscriptions[i], Vnode(subscriptions[i + 1]), redraw);
        } catch (e) {
            console.error(e);
        }
        rendering = false;
    }
    function redraw() {
        if (!pending) {
            pending = true;
            schedule(function() {
                pending = false;
                sync();
            });
        }
    }
    redraw.sync = sync;
    function mount(root, component) {
        if (component != null && component.view == null && typeof component !== "function") throw new TypeError("m.mount(element, component) expects a component, not a vnode");
        var index = subscriptions.indexOf(root);
        if (index >= 0) {
            subscriptions.splice(index, 2);
            render(root, [], redraw);
        }
        if (component != null) {
            subscriptions.push(root, component);
            render(root, Vnode(component), redraw);
        }
    }
    return {
        mount: mount,
        redraw: redraw
    };
};

},{"../render/vnode":"6srsp"}],"1vd7c":[function(require,module,exports) {
"use strict";
var buildPathname = require("../pathname/build");
module.exports = function($window, Promise, oncompletion) {
    var callbackCount = 0;
    function PromiseProxy(executor) {
        return new Promise(executor);
    }
    // In case the global Promise is some userland library's where they rely on
    // `foo instanceof this.constructor`, `this.constructor.resolve(value)`, or
    // similar. Let's *not* break them.
    PromiseProxy.prototype = Promise.prototype;
    PromiseProxy.__proto__ = Promise // eslint-disable-line no-proto
    ;
    function makeRequest(factory) {
        return function(url, args) {
            if (typeof url !== "string") {
                args = url;
                url = url.url;
            } else if (args == null) args = {
            };
            var promise = new Promise(function(resolve, reject) {
                factory(buildPathname(url, args.params), args, function(data) {
                    if (typeof args.type === "function") {
                        if (Array.isArray(data)) for(var i = 0; i < data.length; i++)data[i] = new args.type(data[i]);
                        else data = new args.type(data);
                    }
                    resolve(data);
                }, reject);
            });
            if (args.background === true) return promise;
            var count = 0;
            function complete() {
                if (--count === 0 && typeof oncompletion === "function") oncompletion();
            }
            function wrap(promise) {
                var then = promise.then;
                // Set the constructor, so engines know to not await or resolve
                // this as a native promise. At the time of writing, this is
                // only necessary for V8, but their behavior is the correct
                // behavior per spec. See this spec issue for more details:
                // https://github.com/tc39/ecma262/issues/1577. Also, see the
                // corresponding comment in `request/tests/test-request.js` for
                // a bit more background on the issue at hand.
                promise.constructor = PromiseProxy;
                promise.then = function() {
                    count++;
                    var next = then.apply(promise, arguments);
                    next.then(complete, function(e) {
                        complete();
                        if (count === 0) throw e;
                    });
                    return wrap(next);
                };
                return promise;
            }
            return wrap(promise);
        };
    }
    function hasHeader(args, name) {
        for(var key in args.headers){
            if (({
            }).hasOwnProperty.call(args.headers, key) && name.test(key)) return true;
        }
        return false;
    }
    return {
        request: makeRequest(function(url, args, resolve, reject) {
            var method = args.method != null ? args.method.toUpperCase() : "GET";
            var body = args.body;
            var assumeJSON = (args.serialize == null || args.serialize === JSON.serialize) && !(body instanceof $window.FormData);
            var responseType = args.responseType || (typeof args.extract === "function" ? "" : "json");
            var xhr = new $window.XMLHttpRequest(), aborted = false;
            var original = xhr, replacedAbort;
            var abort = xhr.abort;
            xhr.abort = function() {
                aborted = true;
                abort.call(this);
            };
            xhr.open(method, url, args.async !== false, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined);
            if (assumeJSON && body != null && !hasHeader(args, /^content-type$/i)) xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            if (typeof args.deserialize !== "function" && !hasHeader(args, /^accept$/i)) xhr.setRequestHeader("Accept", "application/json, text/*");
            if (args.withCredentials) xhr.withCredentials = args.withCredentials;
            if (args.timeout) xhr.timeout = args.timeout;
            xhr.responseType = responseType;
            for(var key in args.headers)if (({
            }).hasOwnProperty.call(args.headers, key)) xhr.setRequestHeader(key, args.headers[key]);
            xhr.onreadystatechange = function(ev) {
                // Don't throw errors on xhr.abort().
                if (aborted) return;
                if (ev.target.readyState === 4) try {
                    var success = ev.target.status >= 200 && ev.target.status < 300 || ev.target.status === 304 || /^file:\/\//i.test(url);
                    // When the response type isn't "" or "text",
                    // `xhr.responseText` is the wrong thing to use.
                    // Browsers do the right thing and throw here, and we
                    // should honor that and do the right thing by
                    // preferring `xhr.response` where possible/practical.
                    var response = ev.target.response, message;
                    if (responseType === "json") // For IE and Edge, which don't implement
                    // `responseType: "json"`.
                    {
                        if (!ev.target.responseType && typeof args.extract !== "function") response = JSON.parse(ev.target.responseText);
                    } else if (!responseType || responseType === "text") // Only use this default if it's text. If a parsed
                    // document is needed on old IE and friends (all
                    // unsupported), the user should use a custom
                    // `config` instead. They're already using this at
                    // their own risk.
                    {
                        if (response == null) response = ev.target.responseText;
                    }
                    if (typeof args.extract === "function") {
                        response = args.extract(ev.target, args);
                        success = true;
                    } else if (typeof args.deserialize === "function") response = args.deserialize(response);
                    if (success) resolve(response);
                    else {
                        try {
                            message = ev.target.responseText;
                        } catch (e) {
                            message = response;
                        }
                        var error = new Error(message);
                        error.code = ev.target.status;
                        error.response = response;
                        reject(error);
                    }
                } catch (e) {
                    reject(e);
                }
            };
            if (typeof args.config === "function") {
                xhr = args.config(xhr, args, url) || xhr;
                // Propagate the `abort` to any replacement XHR as well.
                if (xhr !== original) {
                    replacedAbort = xhr.abort;
                    xhr.abort = function() {
                        aborted = true;
                        replacedAbort.call(this);
                    };
                }
            }
            if (body == null) xhr.send();
            else if (typeof args.serialize === "function") xhr.send(args.serialize(body));
            else if (body instanceof $window.FormData) xhr.send(body);
            else xhr.send(JSON.stringify(body));
        }),
        jsonp: makeRequest(function(url, args, resolve, reject) {
            var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 10000000000000000) + "_" + callbackCount++;
            var script = $window.document.createElement("script");
            $window[callbackName] = function(data) {
                delete $window[callbackName];
                script.parentNode.removeChild(script);
                resolve(data);
            };
            script.onerror = function() {
                delete $window[callbackName];
                script.parentNode.removeChild(script);
                reject(new Error("JSONP request failed"));
            };
            script.src = url + (url.indexOf("?") < 0 ? "?" : "&") + encodeURIComponent(args.callbackKey || "callback") + "=" + encodeURIComponent(callbackName);
            $window.document.documentElement.appendChild(script);
        })
    };
};

},{"../pathname/build":"3I4yB"}],"3I4yB":[function(require,module,exports) {
"use strict";
var buildQueryString = require("../querystring/build");
var assign = require("./assign");
// Returns `path` from `template` + `params`
module.exports = function(template, params) {
    if (/:([^\/\.-]+)(\.{3})?:/.test(template)) throw new SyntaxError("Template parameter names *must* be separated");
    if (params == null) return template;
    var queryIndex = template.indexOf("?");
    var hashIndex = template.indexOf("#");
    var queryEnd = hashIndex < 0 ? template.length : hashIndex;
    var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
    var path = template.slice(0, pathEnd);
    var query = {
    };
    assign(query, params);
    var resolved = path.replace(/:([^\/\.-]+)(\.{3})?/g, function(m, key, variadic) {
        delete query[key];
        // If no such parameter exists, don't interpolate it.
        if (params[key] == null) return m;
        // Escape normal parameters, but not variadic ones.
        return variadic ? params[key] : encodeURIComponent(String(params[key]));
    });
    // In case the template substitution adds new query/hash parameters.
    var newQueryIndex = resolved.indexOf("?");
    var newHashIndex = resolved.indexOf("#");
    var newQueryEnd = newHashIndex < 0 ? resolved.length : newHashIndex;
    var newPathEnd = newQueryIndex < 0 ? newQueryEnd : newQueryIndex;
    var result = resolved.slice(0, newPathEnd);
    if (queryIndex >= 0) result += template.slice(queryIndex, queryEnd);
    if (newQueryIndex >= 0) result += (queryIndex < 0 ? "?" : "&") + resolved.slice(newQueryIndex, newQueryEnd);
    var querystring = buildQueryString(query);
    if (querystring) result += (queryIndex < 0 && newQueryIndex < 0 ? "?" : "&") + querystring;
    if (hashIndex >= 0) result += template.slice(hashIndex);
    if (newHashIndex >= 0) result += (hashIndex < 0 ? "" : "&") + resolved.slice(newHashIndex);
    return result;
};

},{"../querystring/build":"k3mZd","./assign":"imdNC"}],"k3mZd":[function(require,module,exports) {
"use strict";
module.exports = function(object) {
    if (Object.prototype.toString.call(object) !== "[object Object]") return "";
    var args = [];
    for(var key in object)destructure(key, object[key]);
    function destructure(key, value) {
        if (Array.isArray(value)) {
            for(var i = 0; i < value.length; i++){
                destructure(key + "[" + i + "]", value[i]);
            }
        } else if (Object.prototype.toString.call(value) === "[object Object]") {
            for(var i in value){
                destructure(key + "[" + i + "]", value[i]);
            }
        } else args.push(encodeURIComponent(key) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""));
    }
    return args.join("&");
};

},{}],"imdNC":[function(require,module,exports) {
"use strict";
module.exports = Object.assign || function(target, source) {
    if (source) Object.keys(source).forEach(function(key) {
        target[key] = source[key];
    });
};

},{}],"hqfSN":[function(require,module,exports) {
"use strict";
var mountRedraw = require("./mount-redraw");
module.exports = require("./api/router")(window, mountRedraw);

},{"./mount-redraw":"3IzBr","./api/router":"cD68c"}],"cD68c":[function(require,module,exports) {
"use strict";
var Vnode = require("../render/vnode");
var m = require("../render/hyperscript");
var Promise = require("../promise/promise");
var buildPathname = require("../pathname/build");
var parsePathname = require("../pathname/parse");
var compileTemplate = require("../pathname/compileTemplate");
var assign = require("../pathname/assign");
var sentinel = {
};
module.exports = function($window, mountRedraw) {
    var fireAsync;
    function setPath(path, data, options) {
        path = buildPathname(path, data);
        if (fireAsync != null) {
            fireAsync();
            var state = options ? options.state : null;
            var title = options ? options.title : null;
            if (options && options.replace) $window.history.replaceState(state, title, route.prefix + path);
            else $window.history.pushState(state, title, route.prefix + path);
        } else $window.location.href = route.prefix + path;
    }
    var currentResolver = sentinel, component, attrs, currentPath, lastUpdate;
    var SKIP = route.SKIP = {
    };
    function route(root, defaultRoute, routes) {
        if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined");
        // 0 = start
        // 1 = init
        // 2 = ready
        var state = 0;
        var compiled = Object.keys(routes).map(function(route) {
            if (route[0] !== "/") throw new SyntaxError("Routes must start with a `/`");
            if (/:([^\/\.-]+)(\.{3})?:/.test(route)) throw new SyntaxError("Route parameter names must be separated with either `/`, `.`, or `-`");
            return {
                route: route,
                component: routes[route],
                check: compileTemplate(route)
            };
        });
        var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout;
        var p = Promise.resolve();
        var scheduled = false;
        var onremove;
        fireAsync = null;
        if (defaultRoute != null) {
            var defaultData = parsePathname(defaultRoute);
            if (!compiled.some(function(i) {
                return i.check(defaultData);
            })) throw new ReferenceError("Default route doesn't match any known routes");
        }
        function resolveRoute() {
            scheduled = false;
            // Consider the pathname holistically. The prefix might even be invalid,
            // but that's not our problem.
            var prefix = $window.location.hash;
            if (route.prefix[0] !== "#") {
                prefix = $window.location.search + prefix;
                if (route.prefix[0] !== "?") {
                    prefix = $window.location.pathname + prefix;
                    if (prefix[0] !== "/") prefix = "/" + prefix;
                }
            }
            // This seemingly useless `.concat()` speeds up the tests quite a bit,
            // since the representation is consistently a relatively poorly
            // optimized cons string.
            var path = prefix.concat().replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent).slice(route.prefix.length);
            var data = parsePathname(path);
            assign(data.params, $window.history.state);
            function fail() {
                if (path === defaultRoute) throw new Error("Could not resolve default route " + defaultRoute);
                setPath(defaultRoute, null, {
                    replace: true
                });
            }
            loop(0);
            function loop(i) {
                // 0 = init
                // 1 = scheduled
                // 2 = done
                for(; i < compiled.length; i++)if (compiled[i].check(data)) {
                    var payload = compiled[i].component;
                    var matchedRoute = compiled[i].route;
                    var localComp = payload;
                    var update = lastUpdate = function(comp) {
                        if (update !== lastUpdate) return;
                        if (comp === SKIP) return loop(i + 1);
                        component = comp != null && (typeof comp.view === "function" || typeof comp === "function") ? comp : "div";
                        attrs = data.params, currentPath = path, lastUpdate = null;
                        currentResolver = payload.render ? payload : null;
                        if (state === 2) mountRedraw.redraw();
                        else {
                            state = 2;
                            mountRedraw.redraw.sync();
                        }
                    };
                    // There's no understating how much I *wish* I could
                    // use `async`/`await` here...
                    if (payload.view || typeof payload === "function") {
                        payload = {
                        };
                        update(localComp);
                    } else if (payload.onmatch) p.then(function() {
                        return payload.onmatch(data.params, path, matchedRoute);
                    }).then(update, fail);
                    else update("div");
                    return;
                }
                fail();
            }
        }
        // Set it unconditionally so `m.route.set` and `m.route.Link` both work,
        // even if neither `pushState` nor `hashchange` are supported. It's
        // cleared if `hashchange` is used, since that makes it automatically
        // async.
        fireAsync = function() {
            if (!scheduled) {
                scheduled = true;
                callAsync(resolveRoute);
            }
        };
        if (typeof $window.history.pushState === "function") {
            onremove = function() {
                $window.removeEventListener("popstate", fireAsync, false);
            };
            $window.addEventListener("popstate", fireAsync, false);
        } else if (route.prefix[0] === "#") {
            fireAsync = null;
            onremove = function() {
                $window.removeEventListener("hashchange", resolveRoute, false);
            };
            $window.addEventListener("hashchange", resolveRoute, false);
        }
        return mountRedraw.mount(root, {
            onbeforeupdate: function() {
                state = state ? 2 : 1;
                return !(!state || sentinel === currentResolver);
            },
            oncreate: resolveRoute,
            onremove: onremove,
            view: function() {
                if (!state || sentinel === currentResolver) return;
                // Wrap in a fragment to preserve existing key semantics
                var vnode = [
                    Vnode(component, attrs.key, attrs)
                ];
                if (currentResolver) vnode = currentResolver.render(vnode[0]);
                return vnode;
            }
        });
    }
    route.set = function(path, data, options) {
        if (lastUpdate != null) {
            options = options || {
            };
            options.replace = true;
        }
        lastUpdate = null;
        setPath(path, data, options);
    };
    route.get = function() {
        return currentPath;
    };
    route.prefix = "#!";
    route.Link = {
        view: function(vnode) {
            var options = vnode.attrs.options;
            // Remove these so they don't get overwritten
            var attrs = {
            }, onclick, href;
            assign(attrs, vnode.attrs);
            // The first two are internal, but the rest are magic attributes
            // that need censored to not screw up rendering.
            attrs.selector = attrs.options = attrs.key = attrs.oninit = attrs.oncreate = attrs.onbeforeupdate = attrs.onupdate = attrs.onbeforeremove = attrs.onremove = null;
            // Do this now so we can get the most current `href` and `disabled`.
            // Those attributes may also be specified in the selector, and we
            // should honor that.
            var child = m(vnode.attrs.selector || "a", attrs, vnode.children);
            // Let's provide a *right* way to disable a route link, rather than
            // letting people screw up accessibility on accident.
            //
            // The attribute is coerced so users don't get surprised over
            // `disabled: 0` resulting in a button that's somehow routable
            // despite being visibly disabled.
            if (child.attrs.disabled = Boolean(child.attrs.disabled)) {
                child.attrs.href = null;
                child.attrs["aria-disabled"] = "true";
                // If you *really* do want to do this on a disabled link, use
                // an `oncreate` hook to add it.
                child.attrs.onclick = null;
            } else {
                onclick = child.attrs.onclick;
                href = child.attrs.href;
                child.attrs.href = route.prefix + href;
                child.attrs.onclick = function(e) {
                    var result;
                    if (typeof onclick === "function") result = onclick.call(e.currentTarget, e);
                    else if (onclick == null || typeof onclick !== "object") ;
                    else if (typeof onclick.handleEvent === "function") onclick.handleEvent(e);
                    // Adapted from React Router's implementation:
                    // https://github.com/ReactTraining/react-router/blob/520a0acd48ae1b066eb0b07d6d4d1790a1d02482/packages/react-router-dom/modules/Link.js
                    //
                    // Try to be flexible and intuitive in how we handle links.
                    // Fun fact: links aren't as obvious to get right as you
                    // would expect. There's a lot more valid ways to click a
                    // link than this, and one might want to not simply click a
                    // link, but right click or command-click it to copy the
                    // link target, etc. Nope, this isn't just for blind people.
                    if (// Skip if `onclick` prevented default
                    result !== false && !e.defaultPrevented && (e.button === 0 || e.which === 0 || e.which === 1) && (!e.currentTarget.target || e.currentTarget.target === "_self") && // No modifier keys
                    !e.ctrlKey && !e.metaKey && !e.shiftKey && !e.altKey) {
                        e.preventDefault();
                        e.redraw = false;
                        route.set(href, null, options);
                    }
                };
            }
            return child;
        }
    };
    route.param = function(key) {
        return attrs && key != null ? attrs[key] : attrs;
    };
    return route;
};

},{"../render/vnode":"6srsp","../render/hyperscript":"gVN62","../promise/promise":"jcHh3","../pathname/build":"3I4yB","../pathname/parse":"dIkXY","../pathname/compileTemplate":"e47NK","../pathname/assign":"imdNC"}],"dIkXY":[function(require,module,exports) {
"use strict";
var parseQueryString = require("../querystring/parse");
// Returns `{path, params}` from `url`
module.exports = function(url) {
    var queryIndex = url.indexOf("?");
    var hashIndex = url.indexOf("#");
    var queryEnd = hashIndex < 0 ? url.length : hashIndex;
    var pathEnd = queryIndex < 0 ? queryEnd : queryIndex;
    var path = url.slice(0, pathEnd).replace(/\/{2,}/g, "/");
    if (!path) path = "/";
    else {
        if (path[0] !== "/") path = "/" + path;
        if (path.length > 1 && path[path.length - 1] === "/") path = path.slice(0, -1);
    }
    return {
        path: path,
        params: queryIndex < 0 ? {
        } : parseQueryString(url.slice(queryIndex + 1, queryEnd))
    };
};

},{"../querystring/parse":"f2JYz"}],"f2JYz":[function(require,module,exports) {
"use strict";
module.exports = function(string) {
    if (string === "" || string == null) return {
    };
    if (string.charAt(0) === "?") string = string.slice(1);
    var entries = string.split("&"), counters = {
    }, data = {
    };
    for(var i = 0; i < entries.length; i++){
        var entry = entries[i].split("=");
        var key = decodeURIComponent(entry[0]);
        var value = entry.length === 2 ? decodeURIComponent(entry[1]) : "";
        if (value === "true") value = true;
        else if (value === "false") value = false;
        var levels = key.split(/\]\[?|\[/);
        var cursor = data;
        if (key.indexOf("[") > -1) levels.pop();
        for(var j = 0; j < levels.length; j++){
            var level = levels[j], nextLevel = levels[j + 1];
            var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10));
            if (level === "") {
                var key = levels.slice(0, j).join();
                if (counters[key] == null) counters[key] = Array.isArray(cursor) ? cursor.length : 0;
                level = counters[key]++;
            } else if (level === "__proto__") break;
            if (j === levels.length - 1) cursor[level] = value;
            else {
                // Read own properties exclusively to disallow indirect
                // prototype pollution
                var desc = Object.getOwnPropertyDescriptor(cursor, level);
                if (desc != null) desc = desc.value;
                if (desc == null) cursor[level] = desc = isNumber ? [] : {
                };
                cursor = desc;
            }
        }
    }
    return data;
};

},{}],"e47NK":[function(require,module,exports) {
"use strict";
var parsePathname = require("./parse");
// Compiles a template into a function that takes a resolved path (without query
// strings) and returns an object containing the template parameters with their
// parsed values. This expects the input of the compiled template to be the
// output of `parsePathname`. Note that it does *not* remove query parameters
// specified in the template.
module.exports = function(template) {
    var templateData = parsePathname(template);
    var templateKeys = Object.keys(templateData.params);
    var keys = [];
    var regexp = new RegExp("^" + templateData.path.replace(// I escape literal text so people can use things like `:file.:ext` or
    // `:lang-:locale` in routes. This is all merged into one pass so I
    // don't also accidentally escape `-` and make it harder to detect it to
    // ban it from template parameters.
    /:([^\/.-]+)(\.{3}|\.(?!\.)|-)?|[\\^$*+.()|\[\]{}]/g, function(m, key, extra) {
        if (key == null) return "\\" + m;
        keys.push({
            k: key,
            r: extra === "..."
        });
        if (extra === "...") return "(.*)";
        if (extra === ".") return "([^/]+)\\.";
        return "([^/]+)" + (extra || "");
    }) + "$");
    return function(data) {
        // First, check the params. Usually, there isn't any, and it's just
        // checking a static set.
        for(var i = 0; i < templateKeys.length; i++){
            if (templateData.params[templateKeys[i]] !== data.params[templateKeys[i]]) return false;
        }
        // If no interpolations exist, let's skip all the ceremony
        if (!keys.length) return regexp.test(data.path);
        var values = regexp.exec(data.path);
        if (values == null) return false;
        for(var i = 0; i < keys.length; i++)data.params[keys[i].k] = keys[i].r ? values[i + 1] : decodeURIComponent(values[i + 1]);
        return true;
    };
};

},{"./parse":"dIkXY"}],"aJY2w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Native", ()=>Native
);
parcelHelpers.export(exports, "Smooth", ()=>Smooth
);
var global = arguments[3];
/* locomotive-scroll v4.1.1 | MIT License | https://github.com/locomotivemtl/locomotive-scroll */ function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(target, props) {
    for(var i = 0; i < props.length; i++){
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
    }
}
function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
}
function _defineProperty(obj, key, value) {
    if (key in obj) Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
    });
    else obj[key] = value;
    return obj;
}
function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);
    if (Object.getOwnPropertySymbols) {
        var symbols = Object.getOwnPropertySymbols(object);
        if (enumerableOnly) symbols = symbols.filter(function(sym) {
            return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
        keys.push.apply(keys, symbols);
    }
    return keys;
}
function _objectSpread2(target) {
    for(var i = 1; i < arguments.length; i++){
        var source = arguments[i] != null ? arguments[i] : {
        };
        if (i % 2) ownKeys(Object(source), true).forEach(function(key) {
            _defineProperty(target, key, source[key]);
        });
        else if (Object.getOwnPropertyDescriptors) Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
        else ownKeys(Object(source)).forEach(function(key) {
            Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
    }
    return target;
}
function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) throw new TypeError("Super expression must either be null or a function");
    subClass.prototype = Object.create(superClass && superClass.prototype, {
        constructor: {
            value: subClass,
            writable: true,
            configurable: true
        }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
}
function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
        return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
}
function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
        o.__proto__ = p;
        return o;
    };
    return _setPrototypeOf(o, p);
}
function _isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    try {
        Date.prototype.toString.call(Reflect.construct(Date, [], function() {
        }));
        return true;
    } catch (e) {
        return false;
    }
}
function _assertThisInitialized(self) {
    if (self === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    return self;
}
function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) return call;
    return _assertThisInitialized(self);
}
function _createSuper(Derived) {
    var hasNativeReflectConstruct = _isNativeReflectConstruct();
    return function _createSuperInternal() {
        var Super = _getPrototypeOf(Derived), result;
        if (hasNativeReflectConstruct) {
            var NewTarget = _getPrototypeOf(this).constructor;
            result = Reflect.construct(Super, arguments, NewTarget);
        } else result = Super.apply(this, arguments);
        return _possibleConstructorReturn(this, result);
    };
}
function _superPropBase(object, property) {
    while(!Object.prototype.hasOwnProperty.call(object, property)){
        object = _getPrototypeOf(object);
        if (object === null) break;
    }
    return object;
}
function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) _get = Reflect.get;
    else _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        if (desc.get) return desc.get.call(receiver);
        return desc.value;
    };
    return _get(target, property, receiver || target);
}
function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}
function _iterableToArrayLimit(arr, i) {
    if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return;
    var _arr = [];
    var _n = true;
    var _d = false;
    var _e = undefined;
    try {
        for(var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true){
            _arr.push(_s.value);
            if (i && _arr.length === i) break;
        }
    } catch (err) {
        _d = true;
        _e = err;
    } finally{
        try {
            if (!_n && _i["return"] != null) _i["return"]();
        } finally{
            if (_d) throw _e;
        }
    }
    return _arr;
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
var defaults = {
    el: document,
    name: 'scroll',
    offset: [
        0,
        0
    ],
    repeat: false,
    smooth: false,
    initPosition: {
        x: 0,
        y: 0
    },
    direction: 'vertical',
    gestureDirection: 'vertical',
    reloadOnContextChange: false,
    lerp: 0.1,
    "class": 'is-inview',
    scrollbarContainer: false,
    scrollbarClass: 'c-scrollbar',
    scrollingClass: 'has-scroll-scrolling',
    draggingClass: 'has-scroll-dragging',
    smoothClass: 'has-scroll-smooth',
    initClass: 'has-scroll-init',
    getSpeed: false,
    getDirection: false,
    scrollFromAnywhere: false,
    multiplier: 1,
    firefoxMultiplier: 50,
    touchMultiplier: 2,
    resetNativeScroll: true,
    tablet: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical',
        breakpoint: 1024
    },
    smartphone: {
        smooth: false,
        direction: 'vertical',
        gestureDirection: 'vertical'
    }
};
var _default = /*#__PURE__*/ function() {
    function _default() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, _default);
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        this.namespace = 'locomotive';
        this.html = document.documentElement;
        this.windowHeight = window.innerHeight;
        this.windowWidth = window.innerWidth;
        this.windowMiddle = {
            x: this.windowWidth / 2,
            y: this.windowHeight / 2
        };
        this.els = {
        };
        this.currentElements = {
        };
        this.listeners = {
        };
        this.hasScrollTicking = false;
        this.hasCallEventSet = false;
        this.checkScroll = this.checkScroll.bind(this);
        this.checkResize = this.checkResize.bind(this);
        this.checkEvent = this.checkEvent.bind(this);
        this.instance = {
            scroll: {
                x: 0,
                y: 0
            },
            limit: {
                x: this.html.offsetWidth,
                y: this.html.offsetHeight
            },
            currentElements: this.currentElements
        };
        if (this.isMobile) {
            if (this.isTablet) this.context = 'tablet';
            else this.context = 'smartphone';
        } else this.context = 'desktop';
        if (this.isMobile) this.direction = this[this.context].direction;
        if (this.direction === 'horizontal') this.directionAxis = 'x';
        else this.directionAxis = 'y';
        if (this.getDirection) this.instance.direction = null;
        if (this.getDirection) this.instance.speed = 0;
        this.html.classList.add(this.initClass);
        window.addEventListener('resize', this.checkResize, false);
    }
    _createClass(_default, [
        {
            key: "init",
            value: function init() {
                this.initEvents();
            }
        },
        {
            key: "checkScroll",
            value: function checkScroll() {
                this.dispatchScroll();
            }
        },
        {
            key: "checkResize",
            value: function checkResize() {
                var _this = this;
                if (!this.resizeTick) {
                    this.resizeTick = true;
                    requestAnimationFrame(function() {
                        _this.resize();
                        _this.resizeTick = false;
                    });
                }
            }
        },
        {
            key: "resize",
            value: function resize() {
            }
        },
        {
            key: "checkContext",
            value: function checkContext() {
                if (!this.reloadOnContextChange) return;
                this.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || this.windowWidth < this.tablet.breakpoint;
                this.isTablet = this.isMobile && this.windowWidth >= this.tablet.breakpoint;
                var oldContext = this.context;
                if (this.isMobile) {
                    if (this.isTablet) this.context = 'tablet';
                    else this.context = 'smartphone';
                } else this.context = 'desktop';
                if (oldContext != this.context) {
                    var oldSmooth = oldContext == 'desktop' ? this.smooth : this[oldContext].smooth;
                    var newSmooth = this.context == 'desktop' ? this.smooth : this[this.context].smooth;
                    if (oldSmooth != newSmooth) window.location.reload();
                }
            }
        },
        {
            key: "initEvents",
            value: function initEvents() {
                var _this2 = this;
                this.scrollToEls = this.el.querySelectorAll("[data-".concat(this.name, "-to]"));
                this.setScrollTo = this.setScrollTo.bind(this);
                this.scrollToEls.forEach(function(el) {
                    el.addEventListener('click', _this2.setScrollTo, false);
                });
            }
        },
        {
            key: "setScrollTo",
            value: function setScrollTo(event) {
                event.preventDefault();
                this.scrollTo(event.currentTarget.getAttribute("data-".concat(this.name, "-href")) || event.currentTarget.getAttribute('href'), {
                    offset: event.currentTarget.getAttribute("data-".concat(this.name, "-offset"))
                });
            }
        },
        {
            key: "addElements",
            value: function addElements() {
            }
        },
        {
            key: "detectElements",
            value: function detectElements(hasCallEventSet) {
                var _this3 = this;
                var scrollTop = this.instance.scroll.y;
                var scrollBottom = scrollTop + this.windowHeight;
                var scrollLeft = this.instance.scroll.x;
                var scrollRight = scrollLeft + this.windowWidth;
                Object.entries(this.els).forEach(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], el = _ref2[1];
                    if (el && (!el.inView || hasCallEventSet)) {
                        if (_this3.direction === 'horizontal') {
                            if (scrollRight >= el.left && scrollLeft < el.right) _this3.setInView(el, i);
                        } else if (scrollBottom >= el.top && scrollTop < el.bottom) _this3.setInView(el, i);
                    }
                    if (el && el.inView) {
                        if (_this3.direction === 'horizontal') {
                            var width = el.right - el.left;
                            el.progress = (_this3.instance.scroll.x - (el.left - _this3.windowWidth)) / (width + _this3.windowWidth);
                            if (scrollRight < el.left || scrollLeft > el.right) _this3.setOutOfView(el, i);
                        } else {
                            var height = el.bottom - el.top;
                            el.progress = (_this3.instance.scroll.y - (el.top - _this3.windowHeight)) / (height + _this3.windowHeight);
                            if (scrollBottom < el.top || scrollTop > el.bottom) _this3.setOutOfView(el, i);
                        }
                    }
                }); // this.els = this.els.filter((current, i) => {
                //     return current !== null;
                // });
                this.hasScrollTicking = false;
            }
        },
        {
            key: "setInView",
            value: function setInView(current, i) {
                this.els[i].inView = true;
                current.el.classList.add(current["class"]);
                this.currentElements[i] = current;
                if (current.call && this.hasCallEventSet) {
                    this.dispatchCall(current, 'enter');
                    if (!current.repeat) this.els[i].call = false;
                } // if (!current.repeat && !current.speed && !current.sticky) {
            //     if (!current.call || current.call && this.hasCallEventSet) {
            //        this.els[i] = null
            //     }
            // }
            }
        },
        {
            key: "setOutOfView",
            value: function setOutOfView(current, i) {
                var _this4 = this;
                // if (current.repeat || current.speed !== undefined) {
                this.els[i].inView = false; // }
                Object.keys(this.currentElements).forEach(function(el) {
                    el === i && delete _this4.currentElements[el];
                });
                if (current.call && this.hasCallEventSet) this.dispatchCall(current, 'exit');
                if (current.repeat) current.el.classList.remove(current["class"]);
            }
        },
        {
            key: "dispatchCall",
            value: function dispatchCall(current, way) {
                this.callWay = way;
                this.callValue = current.call.split(',').map(function(item) {
                    return item.trim();
                });
                this.callObj = current;
                if (this.callValue.length == 1) this.callValue = this.callValue[0];
                var callEvent = new Event(this.namespace + 'call');
                this.el.dispatchEvent(callEvent);
            }
        },
        {
            key: "dispatchScroll",
            value: function dispatchScroll() {
                var scrollEvent = new Event(this.namespace + 'scroll');
                this.el.dispatchEvent(scrollEvent);
            }
        },
        {
            key: "setEvents",
            value: function setEvents(event, func) {
                if (!this.listeners[event]) this.listeners[event] = [];
                var list = this.listeners[event];
                list.push(func);
                if (list.length === 1) this.el.addEventListener(this.namespace + event, this.checkEvent, false);
                if (event === 'call') {
                    this.hasCallEventSet = true;
                    this.detectElements(true);
                }
            }
        },
        {
            key: "unsetEvents",
            value: function unsetEvents(event, func) {
                if (!this.listeners[event]) return;
                var list = this.listeners[event];
                var index = list.indexOf(func);
                if (index < 0) return;
                list.splice(index, 1);
                if (list.index === 0) this.el.removeEventListener(this.namespace + event, this.checkEvent, false);
            }
        },
        {
            key: "checkEvent",
            value: function checkEvent(event) {
                var _this5 = this;
                var name = event.type.replace(this.namespace, '');
                var list = this.listeners[name];
                if (!list || list.length === 0) return;
                list.forEach(function(func) {
                    switch(name){
                        case 'scroll':
                            return func(_this5.instance);
                        case 'call':
                            return func(_this5.callValue, _this5.callWay, _this5.callObj);
                        default:
                            return func();
                    }
                });
            }
        },
        {
            key: "startScroll",
            value: function startScroll() {
            }
        },
        {
            key: "stopScroll",
            value: function stopScroll() {
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.instance.scroll = {
                    x: 0,
                    y: 0
                };
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                var _this6 = this;
                window.removeEventListener('resize', this.checkResize, false);
                Object.keys(this.listeners).forEach(function(event) {
                    _this6.el.removeEventListener(_this6.namespace + event, _this6.checkEvent, false);
                });
                this.listeners = {
                };
                this.scrollToEls.forEach(function(el) {
                    el.removeEventListener('click', _this6.setScrollTo, false);
                });
                this.html.classList.remove(this.initClass);
            }
        }
    ]);
    return _default;
}();
var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {
};
function createCommonjsModule(fn, module) {
    return module = {
        exports: {
        }
    }, fn(module, module.exports), module.exports;
}
var smoothscroll = createCommonjsModule(function(module, exports) {
    (function() {
        // polyfill
        function polyfill() {
            // aliases
            var w = window;
            var d = document;
            // return if scroll behavior is supported and polyfill is not forced
            if ('scrollBehavior' in d.documentElement.style && w.__forceSmoothScrollPolyfill__ !== true) return;
            // globals
            var Element = w.HTMLElement || w.Element;
            var SCROLL_TIME = 468;
            // object gathering original scroll methods
            var original = {
                scroll: w.scroll || w.scrollTo,
                scrollBy: w.scrollBy,
                elementScroll: Element.prototype.scroll || scrollElement,
                scrollIntoView: Element.prototype.scrollIntoView
            };
            // define timing method
            var now = w.performance && w.performance.now ? w.performance.now.bind(w.performance) : Date.now;
            /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */ function isMicrosoftBrowser(userAgent) {
                var userAgentPatterns = [
                    'MSIE ',
                    'Trident/',
                    'Edge/'
                ];
                return new RegExp(userAgentPatterns.join('|')).test(userAgent);
            }
            /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */ var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;
            /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function scrollElement(x, y) {
                this.scrollLeft = x;
                this.scrollTop = y;
            }
            /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */ function ease(k) {
                return 0.5 * (1 - Math.cos(Math.PI * k));
            }
            /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */ function shouldBailOut(firstArg) {
                if (firstArg === null || typeof firstArg !== 'object' || firstArg.behavior === undefined || firstArg.behavior === 'auto' || firstArg.behavior === 'instant') // first argument is not an object/null
                // or behavior is auto, instant or undefined
                return true;
                if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') // first argument is an object and behavior is smooth
                return false;
                // throw error when behavior is not supported
                throw new TypeError('behavior member of ScrollOptions ' + firstArg.behavior + ' is not a valid value for enumeration ScrollBehavior.');
            }
            /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function hasScrollableSpace(el, axis) {
                if (axis === 'Y') return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
                if (axis === 'X') return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
            }
            /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function canOverflow(el, axis) {
                var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];
                return overflowValue === 'auto' || overflowValue === 'scroll';
            }
            /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */ function isScrollable(el) {
                var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
                var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');
                return isScrollableY || isScrollableX;
            }
            /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */ function findScrollableParent(el) {
                while(el !== d.body && isScrollable(el) === false)el = el.parentNode || el.host;
                return el;
            }
            /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */ function step(context) {
                var time = now();
                var value;
                var currentX;
                var currentY;
                var elapsed = (time - context.startTime) / SCROLL_TIME;
                // avoid elapsed times higher than one
                elapsed = elapsed > 1 ? 1 : elapsed;
                // apply easing to elapsed time
                value = ease(elapsed);
                currentX = context.startX + (context.x - context.startX) * value;
                currentY = context.startY + (context.y - context.startY) * value;
                context.method.call(context.scrollable, currentX, currentY);
                // scroll more if we have not reached our destination
                if (currentX !== context.x || currentY !== context.y) w.requestAnimationFrame(step.bind(w, context));
            }
            /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */ function smoothScroll(el, x, y) {
                var scrollable;
                var startX;
                var startY;
                var method;
                var startTime = now();
                // define scroll context
                if (el === d.body) {
                    scrollable = w;
                    startX = w.scrollX || w.pageXOffset;
                    startY = w.scrollY || w.pageYOffset;
                    method = original.scroll;
                } else {
                    scrollable = el;
                    startX = el.scrollLeft;
                    startY = el.scrollTop;
                    method = scrollElement;
                }
                // scroll looping over a frame
                step({
                    scrollable: scrollable,
                    method: method,
                    startTime: startTime,
                    startX: startX,
                    startY: startY,
                    x: x,
                    y: y
                });
            }
            // ORIGINAL METHODS OVERRIDES
            // w.scroll and w.scrollTo
            w.scroll = w.scrollTo = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    original.scroll.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : w.scrollX || w.pageXOffset, // use top prop, second argument if present or fallback to scrollY
                    arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : w.scrollY || w.pageYOffset);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                smoothScroll.call(w, d.body, arguments[0].left !== undefined ? ~~arguments[0].left : w.scrollX || w.pageXOffset, arguments[0].top !== undefined ? ~~arguments[0].top : w.scrollY || w.pageYOffset);
            };
            // w.scrollBy
            w.scrollBy = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0])) {
                    original.scrollBy.call(w, arguments[0].left !== undefined ? arguments[0].left : typeof arguments[0] !== 'object' ? arguments[0] : 0, arguments[0].top !== undefined ? arguments[0].top : arguments[1] !== undefined ? arguments[1] : 0);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                smoothScroll.call(w, d.body, ~~arguments[0].left + (w.scrollX || w.pageXOffset), ~~arguments[0].top + (w.scrollY || w.pageYOffset));
            };
            // Element.prototype.scroll and Element.prototype.scrollTo
            Element.prototype.scroll = Element.prototype.scrollTo = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    // if one number is passed, throw error to match Firefox implementation
                    if (typeof arguments[0] === 'number' && arguments[1] === undefined) throw new SyntaxError('Value could not be converted');
                    original.elementScroll.call(this, // use left prop, first number argument or fallback to scrollLeft
                    arguments[0].left !== undefined ? ~~arguments[0].left : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft, // use top prop, second argument or fallback to scrollTop
                    arguments[0].top !== undefined ? ~~arguments[0].top : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop);
                    return;
                }
                var left = arguments[0].left;
                var top = arguments[0].top;
                // LET THE SMOOTHNESS BEGIN!
                smoothScroll.call(this, this, typeof left === 'undefined' ? this.scrollLeft : ~~left, typeof top === 'undefined' ? this.scrollTop : ~~top);
            };
            // Element.prototype.scrollBy
            Element.prototype.scrollBy = function() {
                // avoid action when no arguments are passed
                if (arguments[0] === undefined) return;
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    original.elementScroll.call(this, arguments[0].left !== undefined ? ~~arguments[0].left + this.scrollLeft : ~~arguments[0] + this.scrollLeft, arguments[0].top !== undefined ? ~~arguments[0].top + this.scrollTop : ~~arguments[1] + this.scrollTop);
                    return;
                }
                this.scroll({
                    left: ~~arguments[0].left + this.scrollLeft,
                    top: ~~arguments[0].top + this.scrollTop,
                    behavior: arguments[0].behavior
                });
            };
            // Element.prototype.scrollIntoView
            Element.prototype.scrollIntoView = function() {
                // avoid smooth behavior if not required
                if (shouldBailOut(arguments[0]) === true) {
                    original.scrollIntoView.call(this, arguments[0] === undefined ? true : arguments[0]);
                    return;
                }
                // LET THE SMOOTHNESS BEGIN!
                var scrollableParent = findScrollableParent(this);
                var parentRects = scrollableParent.getBoundingClientRect();
                var clientRects = this.getBoundingClientRect();
                if (scrollableParent !== d.body) {
                    // reveal element inside parent
                    smoothScroll.call(this, scrollableParent, scrollableParent.scrollLeft + clientRects.left - parentRects.left, scrollableParent.scrollTop + clientRects.top - parentRects.top);
                    // reveal parent in viewport unless is fixed
                    if (w.getComputedStyle(scrollableParent).position !== 'fixed') w.scrollBy({
                        left: parentRects.left,
                        top: parentRects.top,
                        behavior: 'smooth'
                    });
                } else // reveal element in viewport
                w.scrollBy({
                    left: clientRects.left,
                    top: clientRects.top,
                    behavior: 'smooth'
                });
            };
        }
        // commonjs
        module.exports = {
            polyfill: polyfill
        };
    })();
});
var smoothscroll_1 = smoothscroll.polyfill;
var _default$1 = /*#__PURE__*/ function(_Core) {
    _inherits(_default, _Core);
    var _super = _createSuper(_default);
    function _default() {
        var _this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, _default);
        _this = _super.call(this, options);
        if (_this.resetNativeScroll) {
            if (history.scrollRestoration) history.scrollRestoration = 'manual';
            window.scrollTo(0, 0);
        }
        window.addEventListener('scroll', _this.checkScroll, false);
        if (window.smoothscrollPolyfill === undefined) {
            window.smoothscrollPolyfill = smoothscroll;
            window.smoothscrollPolyfill.polyfill();
        }
        return _this;
    }
    _createClass(_default, [
        {
            key: "init",
            value: function init() {
                this.instance.scroll.y = window.pageYOffset;
                this.addElements();
                this.detectElements();
                _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
            }
        },
        {
            key: "checkScroll",
            value: function checkScroll() {
                var _this2 = this;
                _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);
                if (this.getDirection) this.addDirection();
                if (this.getSpeed) {
                    this.addSpeed();
                    this.speedTs = Date.now();
                }
                this.instance.scroll.y = window.pageYOffset;
                if (Object.entries(this.els).length) {
                    if (!this.hasScrollTicking) {
                        requestAnimationFrame(function() {
                            _this2.detectElements();
                        });
                        this.hasScrollTicking = true;
                    }
                }
            }
        },
        {
            key: "addDirection",
            value: function addDirection() {
                if (window.pageYOffset > this.instance.scroll.y) {
                    if (this.instance.direction !== 'down') this.instance.direction = 'down';
                } else if (window.pageYOffset < this.instance.scroll.y) {
                    if (this.instance.direction !== 'up') this.instance.direction = 'up';
                }
            }
        },
        {
            key: "addSpeed",
            value: function addSpeed() {
                if (window.pageYOffset != this.instance.scroll.y) this.instance.speed = (window.pageYOffset - this.instance.scroll.y) / Math.max(1, Date.now() - this.speedTs);
                else this.instance.speed = 0;
            }
        },
        {
            key: "resize",
            value: function resize() {
                if (Object.entries(this.els).length) {
                    this.windowHeight = window.innerHeight;
                    this.updateElements();
                }
            }
        },
        {
            key: "addElements",
            value: function addElements() {
                var _this3 = this;
                this.els = {
                };
                var els = this.el.querySelectorAll('[data-' + this.name + ']');
                els.forEach(function(el, index) {
                    var BCR = el.getBoundingClientRect();
                    var cl = el.dataset[_this3.name + 'Class'] || _this3["class"];
                    var id = typeof el.dataset[_this3.name + 'Id'] === 'string' ? el.dataset[_this3.name + 'Id'] : index;
                    var top;
                    var left;
                    var offset = typeof el.dataset[_this3.name + 'Offset'] === 'string' ? el.dataset[_this3.name + 'Offset'].split(',') : _this3.offset;
                    var repeat = el.dataset[_this3.name + 'Repeat'];
                    var call = el.dataset[_this3.name + 'Call'];
                    var target = el.dataset[_this3.name + 'Target'];
                    var targetEl;
                    if (target !== undefined) targetEl = document.querySelector("".concat(target));
                    else targetEl = el;
                    var targetElBCR = targetEl.getBoundingClientRect();
                    top = targetElBCR.top + _this3.instance.scroll.y;
                    left = targetElBCR.left + _this3.instance.scroll.x;
                    var bottom = top + targetEl.offsetHeight;
                    var right = left + targetEl.offsetWidth;
                    if (repeat == 'false') repeat = false;
                    else if (repeat != undefined) repeat = true;
                    else repeat = _this3.repeat;
                    var relativeOffset = _this3.getRelativeOffset(offset);
                    top = top + relativeOffset[0];
                    bottom = bottom - relativeOffset[1];
                    var mappedEl = {
                        el: el,
                        targetEl: targetEl,
                        id: id,
                        "class": cl,
                        top: top,
                        bottom: bottom,
                        left: left,
                        right: right,
                        offset: offset,
                        progress: 0,
                        repeat: repeat,
                        inView: false,
                        call: call
                    };
                    _this3.els[id] = mappedEl;
                    if (el.classList.contains(cl)) _this3.setInView(_this3.els[id], id);
                });
            }
        },
        {
            key: "updateElements",
            value: function updateElements() {
                var _this4 = this;
                Object.entries(this.els).forEach(function(_ref) {
                    var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], el = _ref2[1];
                    var top = el.targetEl.getBoundingClientRect().top + _this4.instance.scroll.y;
                    var bottom = top + el.targetEl.offsetHeight;
                    var relativeOffset = _this4.getRelativeOffset(el.offset);
                    _this4.els[i].top = top + relativeOffset[0];
                    _this4.els[i].bottom = bottom - relativeOffset[1];
                });
                this.hasScrollTicking = false;
            }
        },
        {
            key: "getRelativeOffset",
            value: function getRelativeOffset(offset) {
                var relativeOffset = [
                    0,
                    0
                ];
                if (offset) {
                    for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                        if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * this.windowHeight / 100);
                        else relativeOffset[i] = parseInt(offset[i]);
                    } else relativeOffset[i] = offset[i];
                }
                return relativeOffset;
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                // Parse options
                var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target
                var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)
                if (typeof target === 'string') {
                    // Selector or boundaries
                    if (target === 'top') target = this.html;
                    else if (target === 'bottom') target = this.html.offsetHeight - window.innerHeight;
                    else {
                        target = document.querySelector(target); // If the query fails, abort
                        if (!target) return;
                    }
                } else if (typeof target === 'number') // Absolute coordinate
                target = parseInt(target);
                else if (target && target.tagName) ;
                else {
                    console.warn('`target` parameter is not valid');
                    return;
                } // We have a target that is not a coordinate yet, get it
                if (typeof target !== 'number') offset = target.getBoundingClientRect().top + offset + this.instance.scroll.y;
                else offset = target + offset;
                var isTargetReached = function isTargetReached() {
                    return parseInt(window.pageYOffset) === parseInt(offset);
                };
                if (callback) {
                    if (isTargetReached()) {
                        callback();
                        return;
                    } else {
                        var onScroll = function onScroll() {
                            if (isTargetReached()) {
                                window.removeEventListener('scroll', onScroll);
                                callback();
                            }
                        };
                        window.addEventListener('scroll', onScroll);
                    }
                }
                window.scrollTo({
                    top: offset,
                    behavior: 'smooth'
                });
            }
        },
        {
            key: "update",
            value: function update() {
                this.addElements();
                this.detectElements();
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);
                window.removeEventListener('scroll', this.checkScroll, false);
            }
        }
    ]);
    return _default;
}(_default);
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/ /* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;
function toObject(val) {
    if (val === null || val === undefined) throw new TypeError('Object.assign cannot be called with null or undefined');
    return Object(val);
}
function shouldUseNative() {
    try {
        if (!Object.assign) return false;
        // Detect buggy property enumeration order in older V8 versions.
        // https://bugs.chromium.org/p/v8/issues/detail?id=4118
        var test1 = "abc"; // eslint-disable-line no-new-wrappers
        test1[5] = 'de';
        if (Object.getOwnPropertyNames(test1)[0] === '5') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test2 = {
        };
        for(var i = 0; i < 10; i++)test2['_' + String.fromCharCode(i)] = i;
        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {
            return test2[n];
        });
        if (order2.join('') !== '0123456789') return false;
        // https://bugs.chromium.org/p/v8/issues/detail?id=3056
        var test3 = {
        };
        'abcdefghijklmnopqrst'.split('').forEach(function(letter) {
            test3[letter] = letter;
        });
        if (Object.keys(Object.assign({
        }, test3)).join('') !== 'abcdefghijklmnopqrst') return false;
        return true;
    } catch (err) {
        // We don't expect any of the above to throw, but better to be safe.
        return false;
    }
}
var objectAssign = shouldUseNative() ? Object.assign : function(target, source) {
    var from;
    var to = toObject(target);
    var symbols;
    for(var s = 1; s < arguments.length; s++){
        from = Object(arguments[s]);
        for(var key in from)if (hasOwnProperty.call(from, key)) to[key] = from[key];
        if (getOwnPropertySymbols) {
            symbols = getOwnPropertySymbols(from);
            for(var i = 0; i < symbols.length; i++)if (propIsEnumerable.call(from, symbols[i])) to[symbols[i]] = from[symbols[i]];
        }
    }
    return to;
};
function E() {
// Keep this empty so it's easier to inherit from
// (via https://github.com/lipsmack from https://github.com/scottcorgan/tiny-emitter/issues/3)
}
E.prototype = {
    on: function(name, callback, ctx) {
        var e = this.e || (this.e = {
        });
        (e[name] || (e[name] = [])).push({
            fn: callback,
            ctx: ctx
        });
        return this;
    },
    once: function(name, callback, ctx) {
        var self = this;
        function listener() {
            self.off(name, listener);
            callback.apply(ctx, arguments);
        }
        listener._ = callback;
        return this.on(name, listener, ctx);
    },
    emit: function(name) {
        var data = [].slice.call(arguments, 1);
        var evtArr = ((this.e || (this.e = {
        }))[name] || []).slice();
        var i = 0;
        var len = evtArr.length;
        for(; i < len; i++)evtArr[i].fn.apply(evtArr[i].ctx, data);
        return this;
    },
    off: function(name, callback) {
        var e = this.e || (this.e = {
        });
        var evts = e[name];
        var liveEvents = [];
        if (evts && callback) {
            for(var i = 0, len = evts.length; i < len; i++)if (evts[i].fn !== callback && evts[i].fn._ !== callback) liveEvents.push(evts[i]);
        }
        // Remove event from queue to prevent memory leak
        // Suggested by https://github.com/lazd
        // Ref: https://github.com/scottcorgan/tiny-emitter/commit/c6ebfaa9bc973b33d110a84a307742b7cf94c953#commitcomment-5024910
        liveEvents.length ? e[name] = liveEvents : delete e[name];
        return this;
    }
};
var tinyEmitter = E;
var lethargy = createCommonjsModule(function(module, exports) {
    // Generated by CoffeeScript 1.9.2
    (function() {
        var root;
        root = exports !== null ? exports : this;
        root.Lethargy = (function() {
            function Lethargy(stability, sensitivity, tolerance, delay) {
                this.stability = stability != null ? Math.abs(stability) : 8;
                this.sensitivity = sensitivity != null ? 1 + Math.abs(sensitivity) : 100;
                this.tolerance = tolerance != null ? 1 + Math.abs(tolerance) : 1.1;
                this.delay = delay != null ? delay : 150;
                this.lastUpDeltas = (function() {
                    var i, ref, results;
                    results = [];
                    for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                    return results;
                }).call(this);
                this.lastDownDeltas = (function() {
                    var i, ref, results;
                    results = [];
                    for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                    return results;
                }).call(this);
                this.deltasTimestamp = (function() {
                    var i, ref, results;
                    results = [];
                    for(i = 1, ref = this.stability * 2; 1 <= ref ? i <= ref : i >= ref; 1 <= ref ? i++ : i--)results.push(null);
                    return results;
                }).call(this);
            }
            Lethargy.prototype.check = function(e) {
                var lastDelta;
                e = e.originalEvent || e;
                if (e.wheelDelta != null) lastDelta = e.wheelDelta;
                else if (e.deltaY != null) lastDelta = e.deltaY * -40;
                else if (e.detail != null || e.detail === 0) lastDelta = e.detail * -40;
                this.deltasTimestamp.push(Date.now());
                this.deltasTimestamp.shift();
                if (lastDelta > 0) {
                    this.lastUpDeltas.push(lastDelta);
                    this.lastUpDeltas.shift();
                    return this.isInertia(1);
                } else {
                    this.lastDownDeltas.push(lastDelta);
                    this.lastDownDeltas.shift();
                    return this.isInertia(-1);
                }
            };
            Lethargy.prototype.isInertia = function(direction) {
                var lastDeltas, lastDeltasNew, lastDeltasOld, newAverage, newSum, oldAverage, oldSum;
                lastDeltas = direction === -1 ? this.lastDownDeltas : this.lastUpDeltas;
                if (lastDeltas[0] === null) return direction;
                if (this.deltasTimestamp[this.stability * 2 - 2] + this.delay > Date.now() && lastDeltas[0] === lastDeltas[this.stability * 2 - 1]) return false;
                lastDeltasOld = lastDeltas.slice(0, this.stability);
                lastDeltasNew = lastDeltas.slice(this.stability, this.stability * 2);
                oldSum = lastDeltasOld.reduce(function(t, s) {
                    return t + s;
                });
                newSum = lastDeltasNew.reduce(function(t, s) {
                    return t + s;
                });
                oldAverage = oldSum / lastDeltasOld.length;
                newAverage = newSum / lastDeltasNew.length;
                if (Math.abs(oldAverage) < Math.abs(newAverage * this.tolerance) && this.sensitivity < Math.abs(newAverage)) return direction;
                else return false;
            };
            Lethargy.prototype.showLastUpDeltas = function() {
                return this.lastUpDeltas;
            };
            Lethargy.prototype.showLastDownDeltas = function() {
                return this.lastDownDeltas;
            };
            return Lethargy;
        })();
    }).call(commonjsGlobal);
});
var support = function getSupport() {
    return {
        hasWheelEvent: 'onwheel' in document,
        hasMouseWheelEvent: 'onmousewheel' in document,
        hasTouch: 'ontouchstart' in window || window.TouchEvent || window.DocumentTouch && document instanceof DocumentTouch,
        hasTouchWin: navigator.msMaxTouchPoints && navigator.msMaxTouchPoints > 1,
        hasPointer: !!window.navigator.msPointerEnabled,
        hasKeyDown: 'onkeydown' in document,
        isFirefox: navigator.userAgent.indexOf('Firefox') > -1
    };
}();
var toString = Object.prototype.toString, hasOwnProperty$1 = Object.prototype.hasOwnProperty;
var bindallStandalone = function(object) {
    if (!object) return console.warn('bindAll requires at least one argument.');
    var functions = Array.prototype.slice.call(arguments, 1);
    if (functions.length === 0) for(var method in object){
        if (hasOwnProperty$1.call(object, method)) {
            if (typeof object[method] == 'function' && toString.call(object[method]) == "[object Function]") functions.push(method);
        }
    }
    for(var i = 0; i < functions.length; i++){
        var f = functions[i];
        object[f] = bind(object[f], object);
    }
};
/*
    Faster bind without specific-case checking. (see https://coderwall.com/p/oi3j3w).
    bindAll is only needed for events binding so no need to make slow fixes for constructor
    or partial application.
*/ function bind(func, context) {
    return function() {
        return func.apply(context, arguments);
    };
}
var Lethargy = lethargy.Lethargy;
var EVT_ID = 'virtualscroll';
var src = VirtualScroll;
var keyCodes = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32
};
function VirtualScroll(options) {
    bindallStandalone(this, '_onWheel', '_onMouseWheel', '_onTouchStart', '_onTouchMove', '_onKeyDown');
    this.el = window;
    if (options && options.el) {
        this.el = options.el;
        delete options.el;
    }
    this.options = objectAssign({
        mouseMultiplier: 1,
        touchMultiplier: 2,
        firefoxMultiplier: 15,
        keyStep: 120,
        preventTouch: false,
        unpreventTouchClass: 'vs-touchmove-allowed',
        limitInertia: false,
        useKeyboard: true,
        useTouch: true
    }, options);
    if (this.options.limitInertia) this._lethargy = new Lethargy();
    this._emitter = new tinyEmitter();
    this._event = {
        y: 0,
        x: 0,
        deltaX: 0,
        deltaY: 0
    };
    this.touchStartX = null;
    this.touchStartY = null;
    this.bodyTouchAction = null;
    if (this.options.passive !== undefined) this.listenerOptions = {
        passive: this.options.passive
    };
}
VirtualScroll.prototype._notify = function(e) {
    var evt = this._event;
    evt.x += evt.deltaX;
    evt.y += evt.deltaY;
    this._emitter.emit(EVT_ID, {
        x: evt.x,
        y: evt.y,
        deltaX: evt.deltaX,
        deltaY: evt.deltaY,
        originalEvent: e
    });
};
VirtualScroll.prototype._onWheel = function(e) {
    var options = this.options;
    if (this._lethargy && this._lethargy.check(e) === false) return;
    var evt = this._event;
    // In Chrome and in Firefox (at least the new one)
    evt.deltaX = e.wheelDeltaX || e.deltaX * -1;
    evt.deltaY = e.wheelDeltaY || e.deltaY * -1;
    // for our purpose deltamode = 1 means user is on a wheel mouse, not touch pad
    // real meaning: https://developer.mozilla.org/en-US/docs/Web/API/WheelEvent#Delta_modes
    if (support.isFirefox && e.deltaMode == 1) {
        evt.deltaX *= options.firefoxMultiplier;
        evt.deltaY *= options.firefoxMultiplier;
    }
    evt.deltaX *= options.mouseMultiplier;
    evt.deltaY *= options.mouseMultiplier;
    this._notify(e);
};
VirtualScroll.prototype._onMouseWheel = function(e) {
    if (this.options.limitInertia && this._lethargy.check(e) === false) return;
    var evt = this._event;
    // In Safari, IE and in Chrome if 'wheel' isn't defined
    evt.deltaX = e.wheelDeltaX ? e.wheelDeltaX : 0;
    evt.deltaY = e.wheelDeltaY ? e.wheelDeltaY : e.wheelDelta;
    this._notify(e);
};
VirtualScroll.prototype._onTouchStart = function(e) {
    var t = e.targetTouches ? e.targetTouches[0] : e;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
};
VirtualScroll.prototype._onTouchMove = function(e) {
    var options = this.options;
    if (options.preventTouch && !e.target.classList.contains(options.unpreventTouchClass)) e.preventDefault();
    var evt = this._event;
    var t = e.targetTouches ? e.targetTouches[0] : e;
    evt.deltaX = (t.pageX - this.touchStartX) * options.touchMultiplier;
    evt.deltaY = (t.pageY - this.touchStartY) * options.touchMultiplier;
    this.touchStartX = t.pageX;
    this.touchStartY = t.pageY;
    this._notify(e);
};
VirtualScroll.prototype._onKeyDown = function(e) {
    var evt = this._event;
    evt.deltaX = evt.deltaY = 0;
    var windowHeight = window.innerHeight - 40;
    switch(e.keyCode){
        case keyCodes.LEFT:
        case keyCodes.UP:
            evt.deltaY = this.options.keyStep;
            break;
        case keyCodes.RIGHT:
        case keyCodes.DOWN:
            evt.deltaY = -this.options.keyStep;
            break;
        case e.shiftKey:
            evt.deltaY = windowHeight;
            break;
        case keyCodes.SPACE:
            evt.deltaY = -windowHeight;
            break;
        default:
            return;
    }
    this._notify(e);
};
VirtualScroll.prototype._bind = function() {
    if (support.hasWheelEvent) this.el.addEventListener('wheel', this._onWheel, this.listenerOptions);
    if (support.hasMouseWheelEvent) this.el.addEventListener('mousewheel', this._onMouseWheel, this.listenerOptions);
    if (support.hasTouch && this.options.useTouch) {
        this.el.addEventListener('touchstart', this._onTouchStart, this.listenerOptions);
        this.el.addEventListener('touchmove', this._onTouchMove, this.listenerOptions);
    }
    if (support.hasPointer && support.hasTouchWin) {
        this.bodyTouchAction = document.body.style.msTouchAction;
        document.body.style.msTouchAction = 'none';
        this.el.addEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.addEventListener('MSPointerMove', this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard) document.addEventListener('keydown', this._onKeyDown);
};
VirtualScroll.prototype._unbind = function() {
    if (support.hasWheelEvent) this.el.removeEventListener('wheel', this._onWheel);
    if (support.hasMouseWheelEvent) this.el.removeEventListener('mousewheel', this._onMouseWheel);
    if (support.hasTouch) {
        this.el.removeEventListener('touchstart', this._onTouchStart);
        this.el.removeEventListener('touchmove', this._onTouchMove);
    }
    if (support.hasPointer && support.hasTouchWin) {
        document.body.style.msTouchAction = this.bodyTouchAction;
        this.el.removeEventListener('MSPointerDown', this._onTouchStart, true);
        this.el.removeEventListener('MSPointerMove', this._onTouchMove, true);
    }
    if (support.hasKeyDown && this.options.useKeyboard) document.removeEventListener('keydown', this._onKeyDown);
};
VirtualScroll.prototype.on = function(cb, ctx) {
    this._emitter.on(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (events && events[EVT_ID] && events[EVT_ID].length === 1) this._bind();
};
VirtualScroll.prototype.off = function(cb, ctx) {
    this._emitter.off(EVT_ID, cb, ctx);
    var events = this._emitter.e;
    if (!events[EVT_ID] || events[EVT_ID].length <= 0) this._unbind();
};
VirtualScroll.prototype.reset = function() {
    var evt = this._event;
    evt.x = 0;
    evt.y = 0;
};
VirtualScroll.prototype.destroy = function() {
    this._emitter.off();
    this._unbind();
};
function lerp(start, end, amt) {
    return (1 - amt) * start + amt * end;
}
function getTranslate(el) {
    var translate = {
    };
    if (!window.getComputedStyle) return;
    var style = getComputedStyle(el);
    var transform = style.transform || style.webkitTransform || style.mozTransform;
    var mat = transform.match(/^matrix3d\((.+)\)$/);
    if (mat) {
        translate.x = mat ? parseFloat(mat[1].split(', ')[12]) : 0;
        translate.y = mat ? parseFloat(mat[1].split(', ')[13]) : 0;
    } else {
        mat = transform.match(/^matrix\((.+)\)$/);
        translate.x = mat ? parseFloat(mat[1].split(', ')[4]) : 0;
        translate.y = mat ? parseFloat(mat[1].split(', ')[5]) : 0;
    }
    return translate;
}
/**
 * Returns an array containing all the parent nodes of the given node
 * @param  {object} node
 * @return {array} parent nodes
 */ function getParents(elem) {
    // Set up a parent array
    var parents = []; // Push each parent element to the array
    for(; elem && elem !== document; elem = elem.parentNode)parents.push(elem);
     // Return our parent array
    return parents;
} // https://gomakethings.com/how-to-get-the-closest-parent-element-with-a-matching-selector-using-vanilla-javascript/
/**
 * https://github.com/gre/bezier-easing
 * BezierEasing - use bezier curve for transition easing function
 * by Gaëtan Renaudeau 2014 - 2015 – MIT License
 */ // These values are established by empiricism with tests (tradeoff: performance VS precision)
var NEWTON_ITERATIONS = 4;
var NEWTON_MIN_SLOPE = 0.001;
var SUBDIVISION_PRECISION = 0.0000001;
var SUBDIVISION_MAX_ITERATIONS = 10;
var kSplineTableSize = 11;
var kSampleStepSize = 1 / (kSplineTableSize - 1);
var float32ArraySupported = typeof Float32Array === 'function';
function A(aA1, aA2) {
    return 1 - 3 * aA2 + 3 * aA1;
}
function B(aA1, aA2) {
    return 3 * aA2 - 6 * aA1;
}
function C(aA1) {
    return 3 * aA1;
}
// Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
function calcBezier(aT, aA1, aA2) {
    return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
}
// Returns dx/dt given t, x1, and x2, or dy/dt given t, y1, and y2.
function getSlope(aT, aA1, aA2) {
    return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
}
function binarySubdivide(aX, aA, aB, mX1, mX2) {
    var currentX, currentT, i = 0;
    do {
        currentT = aA + (aB - aA) / 2;
        currentX = calcBezier(currentT, mX1, mX2) - aX;
        if (currentX > 0) aB = currentT;
        else aA = currentT;
    }while (Math.abs(currentX) > SUBDIVISION_PRECISION && ++i < SUBDIVISION_MAX_ITERATIONS)
    return currentT;
}
function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
    for(var i = 0; i < NEWTON_ITERATIONS; ++i){
        var currentSlope = getSlope(aGuessT, mX1, mX2);
        if (currentSlope === 0) return aGuessT;
        var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
        aGuessT -= currentX / currentSlope;
    }
    return aGuessT;
}
function LinearEasing(x) {
    return x;
}
var src$1 = function bezier(mX1, mY1, mX2, mY2) {
    if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) throw new Error('bezier x values must be in [0, 1] range');
    if (mX1 === mY1 && mX2 === mY2) return LinearEasing;
    // Precompute samples table
    var sampleValues = float32ArraySupported ? new Float32Array(kSplineTableSize) : new Array(kSplineTableSize);
    for(var i = 0; i < kSplineTableSize; ++i)sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
    function getTForX(aX) {
        var intervalStart = 0;
        var currentSample = 1;
        var lastSample = kSplineTableSize - 1;
        for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += kSampleStepSize;
        --currentSample;
        // Interpolate to provide an initial guess for t
        var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
        var guessForT = intervalStart + dist * kSampleStepSize;
        var initialSlope = getSlope(guessForT, mX1, mX2);
        if (initialSlope >= NEWTON_MIN_SLOPE) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
        else if (initialSlope === 0) return guessForT;
        else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
    }
    return function BezierEasing(x) {
        // Because JavaScript number are imprecise, we should guarantee the extremes are right.
        if (x === 0) return 0;
        if (x === 1) return 1;
        return calcBezier(getTForX(x), mY1, mY2);
    };
};
var keyCodes$1 = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    SPACE: 32,
    TAB: 9,
    PAGEUP: 33,
    PAGEDOWN: 34,
    HOME: 36,
    END: 35
};
var _default$2 = /*#__PURE__*/ function(_Core) {
    _inherits(_default, _Core);
    var _super = _createSuper(_default);
    function _default() {
        var _this;
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, _default);
        if (history.scrollRestoration) history.scrollRestoration = 'manual';
        window.scrollTo(0, 0);
        _this = _super.call(this, options);
        if (_this.inertia) _this.lerp = _this.inertia * 0.1;
        _this.isScrolling = false;
        _this.isDraggingScrollbar = false;
        _this.isTicking = false;
        _this.hasScrollTicking = false;
        _this.parallaxElements = {
        };
        _this.stop = false;
        _this.scrollbarContainer = options.scrollbarContainer;
        _this.checkKey = _this.checkKey.bind(_assertThisInitialized(_this));
        window.addEventListener('keydown', _this.checkKey, false);
        return _this;
    }
    _createClass(_default, [
        {
            key: "init",
            value: function init() {
                var _this2 = this;
                this.html.classList.add(this.smoothClass);
                this.html.setAttribute("data-".concat(this.name, "-direction"), this.direction);
                this.instance = _objectSpread2({
                    delta: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    },
                    scroll: {
                        x: this.initPosition.x,
                        y: this.initPosition.y
                    }
                }, this.instance);
                this.vs = new src({
                    el: this.scrollFromAnywhere ? document : this.el,
                    mouseMultiplier: navigator.platform.indexOf('Win') > -1 ? 1 : 0.4,
                    firefoxMultiplier: this.firefoxMultiplier,
                    touchMultiplier: this.touchMultiplier,
                    useKeyboard: false,
                    passive: true
                });
                this.vs.on(function(e) {
                    if (_this2.stop) return;
                    if (!_this2.isDraggingScrollbar) requestAnimationFrame(function() {
                        _this2.updateDelta(e);
                        if (!_this2.isScrolling) _this2.startScrolling();
                    });
                });
                this.setScrollLimit();
                this.initScrollBar();
                this.addSections();
                this.addElements();
                this.checkScroll(true);
                this.transformElements(true, true);
                _get(_getPrototypeOf(_default.prototype), "init", this).call(this);
            }
        },
        {
            key: "setScrollLimit",
            value: function setScrollLimit() {
                this.instance.limit.y = this.el.offsetHeight - this.windowHeight;
                if (this.direction === 'horizontal') {
                    var totalWidth = 0;
                    var nodes = this.el.children;
                    for(var i = 0; i < nodes.length; i++)totalWidth += nodes[i].offsetWidth;
                    this.instance.limit.x = totalWidth - this.windowWidth;
                }
            }
        },
        {
            key: "startScrolling",
            value: function startScrolling() {
                this.startScrollTs = Date.now(); // Record timestamp
                this.isScrolling = true;
                this.checkScroll();
                this.html.classList.add(this.scrollingClass);
            }
        },
        {
            key: "stopScrolling",
            value: function stopScrolling() {
                cancelAnimationFrame(this.checkScrollRaf); // Prevent checkScroll to continue looping
                if (this.scrollToRaf) {
                    cancelAnimationFrame(this.scrollToRaf);
                    this.scrollToRaf = null;
                }
                this.isScrolling = false;
                this.instance.scroll.y = Math.round(this.instance.scroll.y);
                this.html.classList.remove(this.scrollingClass);
            }
        },
        {
            key: "checkKey",
            value: function checkKey(e) {
                var _this3 = this;
                if (this.stop) {
                    // If we are stopped, we don't want any scroll to occur because of a keypress
                    // Prevent tab to scroll to activeElement
                    if (e.keyCode == keyCodes$1.TAB) requestAnimationFrame(function() {
                        // Make sure native scroll is always at top of page
                        _this3.html.scrollTop = 0;
                        document.body.scrollTop = 0;
                        _this3.html.scrollLeft = 0;
                        document.body.scrollLeft = 0;
                    });
                    return;
                }
                switch(e.keyCode){
                    case keyCodes$1.TAB:
                        // Do not remove the RAF
                        // It allows to override the browser's native scrollTo, which is essential
                        requestAnimationFrame(function() {
                            // Make sure native scroll is always at top of page
                            _this3.html.scrollTop = 0;
                            document.body.scrollTop = 0;
                            _this3.html.scrollLeft = 0;
                            document.body.scrollLeft = 0; // Request scrollTo on the focusedElement, putting it at the center of the screen
                            _this3.scrollTo(document.activeElement, {
                                offset: -window.innerHeight / 2
                            });
                        });
                        break;
                    case keyCodes$1.UP:
                        this.instance.delta[this.directionAxis] -= 240;
                        break;
                    case keyCodes$1.DOWN:
                        this.instance.delta[this.directionAxis] += 240;
                        break;
                    case keyCodes$1.PAGEUP:
                        this.instance.delta[this.directionAxis] -= window.innerHeight;
                        break;
                    case keyCodes$1.PAGEDOWN:
                        this.instance.delta[this.directionAxis] += window.innerHeight;
                        break;
                    case keyCodes$1.HOME:
                        this.instance.delta[this.directionAxis] -= this.instance.limit[this.directionAxis];
                        break;
                    case keyCodes$1.END:
                        this.instance.delta[this.directionAxis] += this.instance.limit[this.directionAxis];
                        break;
                    case keyCodes$1.SPACE:
                        if (!(document.activeElement instanceof HTMLInputElement) && !(document.activeElement instanceof HTMLTextAreaElement)) {
                            if (e.shiftKey) this.instance.delta[this.directionAxis] -= window.innerHeight;
                            else this.instance.delta[this.directionAxis] += window.innerHeight;
                        }
                        break;
                    default:
                        return;
                }
                if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
                if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
                this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening
                this.isScrolling = true;
                this.checkScroll();
                this.html.classList.add(this.scrollingClass);
            }
        },
        {
            key: "checkScroll",
            value: function checkScroll() {
                var _this4 = this;
                var forced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
                if (forced || this.isScrolling || this.isDraggingScrollbar) {
                    if (!this.hasScrollTicking) {
                        this.checkScrollRaf = requestAnimationFrame(function() {
                            return _this4.checkScroll();
                        });
                        this.hasScrollTicking = true;
                    }
                    this.updateScroll();
                    var distance = Math.abs(this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]);
                    var timeSinceStart = Date.now() - this.startScrollTs; // Get the time since the scroll was started: the scroll can be stopped again only past 100ms
                    if (!this.animatingScroll && timeSinceStart > 100 && (distance < 0.5 && this.instance.delta[this.directionAxis] != 0 || distance < 0.5 && this.instance.delta[this.directionAxis] == 0)) this.stopScrolling();
                    Object.entries(this.sections).forEach(function(_ref) {
                        var _ref2 = _slicedToArray(_ref, 2), i = _ref2[0], section = _ref2[1];
                        if (section.persistent || _this4.instance.scroll[_this4.directionAxis] > section.offset[_this4.directionAxis] && _this4.instance.scroll[_this4.directionAxis] < section.limit[_this4.directionAxis]) {
                            if (_this4.direction === 'horizontal') _this4.transform(section.el, -_this4.instance.scroll[_this4.directionAxis], 0);
                            else _this4.transform(section.el, 0, -_this4.instance.scroll[_this4.directionAxis]);
                            if (!section.inView) {
                                section.inView = true;
                                section.el.style.opacity = 1;
                                section.el.style.pointerEvents = 'all';
                                section.el.setAttribute("data-".concat(_this4.name, "-section-inview"), '');
                            }
                        } else {
                            if (section.inView || forced) {
                                section.inView = false;
                                section.el.style.opacity = 0;
                                section.el.style.pointerEvents = 'none';
                                section.el.removeAttribute("data-".concat(_this4.name, "-section-inview"));
                            }
                            _this4.transform(section.el, 0, 0);
                        }
                    });
                    if (this.getDirection) this.addDirection();
                    if (this.getSpeed) {
                        this.addSpeed();
                        this.speedTs = Date.now();
                    }
                    this.detectElements();
                    this.transformElements();
                    if (this.hasScrollbar) {
                        var scrollBarTranslation = this.instance.scroll[this.directionAxis] / this.instance.limit[this.directionAxis] * this.scrollBarLimit[this.directionAxis];
                        if (this.direction === 'horizontal') this.transform(this.scrollbarThumb, scrollBarTranslation, 0);
                        else this.transform(this.scrollbarThumb, 0, scrollBarTranslation);
                    }
                    _get(_getPrototypeOf(_default.prototype), "checkScroll", this).call(this);
                    this.hasScrollTicking = false;
                }
            }
        },
        {
            key: "resize",
            value: function resize() {
                this.windowHeight = window.innerHeight;
                this.windowWidth = window.innerWidth;
                this.checkContext();
                this.windowMiddle = {
                    x: this.windowWidth / 2,
                    y: this.windowHeight / 2
                };
                this.update();
            }
        },
        {
            key: "updateDelta",
            value: function updateDelta(e) {
                var delta;
                var gestureDirection = this[this.context] && this[this.context].gestureDirection ? this[this.context].gestureDirection : this.gestureDirection;
                if (gestureDirection === 'both') delta = e.deltaX + e.deltaY;
                else if (gestureDirection === 'vertical') delta = e.deltaY;
                else if (gestureDirection === 'horizontal') delta = e.deltaX;
                else delta = e.deltaY;
                this.instance.delta[this.directionAxis] -= delta * this.multiplier;
                if (this.instance.delta[this.directionAxis] < 0) this.instance.delta[this.directionAxis] = 0;
                if (this.instance.delta[this.directionAxis] > this.instance.limit[this.directionAxis]) this.instance.delta[this.directionAxis] = this.instance.limit[this.directionAxis];
            }
        },
        {
            key: "updateScroll",
            value: function updateScroll(e) {
                if (this.isScrolling || this.isDraggingScrollbar) this.instance.scroll[this.directionAxis] = lerp(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis], this.lerp);
                else {
                    if (this.instance.scroll[this.directionAxis] > this.instance.limit[this.directionAxis]) this.setScroll(this.instance.scroll[this.directionAxis], this.instance.limit[this.directionAxis]);
                    else if (this.instance.scroll.y < 0) this.setScroll(this.instance.scroll[this.directionAxis], 0);
                    else this.setScroll(this.instance.scroll[this.directionAxis], this.instance.delta[this.directionAxis]);
                }
            }
        },
        {
            key: "addDirection",
            value: function addDirection() {
                if (this.instance.delta.y > this.instance.scroll.y) {
                    if (this.instance.direction !== 'down') this.instance.direction = 'down';
                } else if (this.instance.delta.y < this.instance.scroll.y) {
                    if (this.instance.direction !== 'up') this.instance.direction = 'up';
                }
                if (this.instance.delta.x > this.instance.scroll.x) {
                    if (this.instance.direction !== 'right') this.instance.direction = 'right';
                } else if (this.instance.delta.x < this.instance.scroll.x) {
                    if (this.instance.direction !== 'left') this.instance.direction = 'left';
                }
            }
        },
        {
            key: "addSpeed",
            value: function addSpeed() {
                if (this.instance.delta[this.directionAxis] != this.instance.scroll[this.directionAxis]) this.instance.speed = (this.instance.delta[this.directionAxis] - this.instance.scroll[this.directionAxis]) / Math.max(1, Date.now() - this.speedTs);
                else this.instance.speed = 0;
            }
        },
        {
            key: "initScrollBar",
            value: function initScrollBar() {
                this.scrollbar = document.createElement('span');
                this.scrollbarThumb = document.createElement('span');
                this.scrollbar.classList.add("".concat(this.scrollbarClass));
                this.scrollbarThumb.classList.add("".concat(this.scrollbarClass, "_thumb"));
                this.scrollbar.append(this.scrollbarThumb);
                if (this.scrollbarContainer) this.scrollbarContainer.append(this.scrollbar);
                else document.body.append(this.scrollbar);
                 // Scrollbar Events
                this.getScrollBar = this.getScrollBar.bind(this);
                this.releaseScrollBar = this.releaseScrollBar.bind(this);
                this.moveScrollBar = this.moveScrollBar.bind(this);
                this.scrollbarThumb.addEventListener('mousedown', this.getScrollBar);
                window.addEventListener('mouseup', this.releaseScrollBar);
                window.addEventListener('mousemove', this.moveScrollBar); // Set scrollbar values
                this.hasScrollbar = false;
                if (this.direction == 'horizontal') {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                } else {
                    if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                }
                this.hasScrollbar = true;
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
                this.scrollbarHeight = this.scrollbarBCR.height;
                this.scrollbarWidth = this.scrollbarBCR.width;
                if (this.direction === 'horizontal') this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
                else this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                };
            }
        },
        {
            key: "reinitScrollBar",
            value: function reinitScrollBar() {
                this.hasScrollbar = false;
                if (this.direction == 'horizontal') {
                    if (this.instance.limit.x + this.windowWidth <= this.windowWidth) return;
                } else {
                    if (this.instance.limit.y + this.windowHeight <= this.windowHeight) return;
                }
                this.hasScrollbar = true;
                this.scrollbarBCR = this.scrollbar.getBoundingClientRect();
                this.scrollbarHeight = this.scrollbarBCR.height;
                this.scrollbarWidth = this.scrollbarBCR.width;
                if (this.direction === 'horizontal') this.scrollbarThumb.style.width = "".concat(this.scrollbarWidth * this.scrollbarWidth / (this.instance.limit.x + this.scrollbarWidth), "px");
                else this.scrollbarThumb.style.height = "".concat(this.scrollbarHeight * this.scrollbarHeight / (this.instance.limit.y + this.scrollbarHeight), "px");
                this.scrollbarThumbBCR = this.scrollbarThumb.getBoundingClientRect();
                this.scrollBarLimit = {
                    x: this.scrollbarWidth - this.scrollbarThumbBCR.width,
                    y: this.scrollbarHeight - this.scrollbarThumbBCR.height
                };
            }
        },
        {
            key: "destroyScrollBar",
            value: function destroyScrollBar() {
                this.scrollbarThumb.removeEventListener('mousedown', this.getScrollBar);
                window.removeEventListener('mouseup', this.releaseScrollBar);
                window.removeEventListener('mousemove', this.moveScrollBar);
                this.scrollbar.remove();
            }
        },
        {
            key: "getScrollBar",
            value: function getScrollBar(e) {
                this.isDraggingScrollbar = true;
                this.checkScroll();
                this.html.classList.remove(this.scrollingClass);
                this.html.classList.add(this.draggingClass);
            }
        },
        {
            key: "releaseScrollBar",
            value: function releaseScrollBar(e) {
                this.isDraggingScrollbar = false;
                this.html.classList.add(this.scrollingClass);
                this.html.classList.remove(this.draggingClass);
            }
        },
        {
            key: "moveScrollBar",
            value: function moveScrollBar(e) {
                var _this5 = this;
                if (this.isDraggingScrollbar) requestAnimationFrame(function() {
                    var x = (e.clientX - _this5.scrollbarBCR.left) * 100 / _this5.scrollbarWidth * _this5.instance.limit.x / 100;
                    var y = (e.clientY - _this5.scrollbarBCR.top) * 100 / _this5.scrollbarHeight * _this5.instance.limit.y / 100;
                    if (y > 0 && y < _this5.instance.limit.y) _this5.instance.delta.y = y;
                    if (x > 0 && x < _this5.instance.limit.x) _this5.instance.delta.x = x;
                });
            }
        },
        {
            key: "addElements",
            value: function addElements() {
                var _this6 = this;
                this.els = {
                };
                this.parallaxElements = {
                }; // this.sections.forEach((section, y) => {
                var els = this.el.querySelectorAll("[data-".concat(this.name, "]"));
                els.forEach(function(el, index) {
                    // Try and find the target's parent section
                    var targetParents = getParents(el);
                    var section = Object.entries(_this6.sections).map(function(_ref3) {
                        var _ref4 = _slicedToArray(_ref3, 2), key = _ref4[0], section = _ref4[1];
                        return section;
                    }).find(function(section) {
                        return targetParents.includes(section.el);
                    });
                    var cl = el.dataset[_this6.name + 'Class'] || _this6["class"];
                    var id = typeof el.dataset[_this6.name + 'Id'] === 'string' ? el.dataset[_this6.name + 'Id'] : 'el' + index;
                    var top;
                    var left;
                    var repeat = el.dataset[_this6.name + 'Repeat'];
                    var call = el.dataset[_this6.name + 'Call'];
                    var position = el.dataset[_this6.name + 'Position'];
                    var delay = el.dataset[_this6.name + 'Delay'];
                    var direction = el.dataset[_this6.name + 'Direction'];
                    var sticky = typeof el.dataset[_this6.name + 'Sticky'] === 'string';
                    var speed = el.dataset[_this6.name + 'Speed'] ? parseFloat(el.dataset[_this6.name + 'Speed']) / 10 : false;
                    var offset = typeof el.dataset[_this6.name + 'Offset'] === 'string' ? el.dataset[_this6.name + 'Offset'].split(',') : _this6.offset;
                    var target = el.dataset[_this6.name + 'Target'];
                    var targetEl;
                    if (target !== undefined) targetEl = document.querySelector("".concat(target));
                    else targetEl = el;
                    var targetElBCR = targetEl.getBoundingClientRect();
                    if (section === null) {
                        top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
                        left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
                    } else if (!section.inView) {
                        top = targetElBCR.top - getTranslate(section.el).y - getTranslate(targetEl).y;
                        left = targetElBCR.left - getTranslate(section.el).x - getTranslate(targetEl).x;
                    } else {
                        top = targetElBCR.top + _this6.instance.scroll.y - getTranslate(targetEl).y;
                        left = targetElBCR.left + _this6.instance.scroll.x - getTranslate(targetEl).x;
                    }
                    var bottom = top + targetEl.offsetHeight;
                    var right = left + targetEl.offsetWidth;
                    var middle = {
                        x: (right - left) / 2 + left,
                        y: (bottom - top) / 2 + top
                    };
                    if (sticky) {
                        var elBCR = el.getBoundingClientRect();
                        var elTop = elBCR.top;
                        var elLeft = elBCR.left;
                        var elDistance = {
                            x: elLeft - left,
                            y: elTop - top
                        };
                        top += window.innerHeight;
                        left += window.innerWidth;
                        bottom = elTop + targetEl.offsetHeight - el.offsetHeight - elDistance[_this6.directionAxis];
                        right = elLeft + targetEl.offsetWidth - el.offsetWidth - elDistance[_this6.directionAxis];
                        middle = {
                            x: (right - left) / 2 + left,
                            y: (bottom - top) / 2 + top
                        };
                    }
                    if (repeat == 'false') repeat = false;
                    else if (repeat != undefined) repeat = true;
                    else repeat = _this6.repeat;
                    var relativeOffset = [
                        0,
                        0
                    ];
                    if (offset) {
                        if (_this6.direction === 'horizontal') {
                            for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                                if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowWidth / 100);
                                else relativeOffset[i] = parseInt(offset[i]);
                            } else relativeOffset[i] = offset[i];
                            left = left + relativeOffset[0];
                            right = right - relativeOffset[1];
                        } else {
                            for(var i = 0; i < offset.length; i++)if (typeof offset[i] == 'string') {
                                if (offset[i].includes('%')) relativeOffset[i] = parseInt(offset[i].replace('%', '') * _this6.windowHeight / 100);
                                else relativeOffset[i] = parseInt(offset[i]);
                            } else relativeOffset[i] = offset[i];
                            top = top + relativeOffset[0];
                            bottom = bottom - relativeOffset[1];
                        }
                    }
                    var mappedEl = {
                        el: el,
                        id: id,
                        "class": cl,
                        section: section,
                        top: top,
                        middle: middle,
                        bottom: bottom,
                        left: left,
                        right: right,
                        offset: offset,
                        progress: 0,
                        repeat: repeat,
                        inView: false,
                        call: call,
                        speed: speed,
                        delay: delay,
                        position: position,
                        target: targetEl,
                        direction: direction,
                        sticky: sticky
                    };
                    _this6.els[id] = mappedEl;
                    if (el.classList.contains(cl)) _this6.setInView(_this6.els[id], id);
                    if (speed !== false || sticky) _this6.parallaxElements[id] = mappedEl;
                }); // });
            }
        },
        {
            key: "addSections",
            value: function addSections() {
                var _this7 = this;
                this.sections = {
                };
                var sections = this.el.querySelectorAll("[data-".concat(this.name, "-section]"));
                if (sections.length === 0) sections = [
                    this.el
                ];
                sections.forEach(function(section, index) {
                    var id = typeof section.dataset[_this7.name + 'Id'] === 'string' ? section.dataset[_this7.name + 'Id'] : 'section' + index;
                    var sectionBCR = section.getBoundingClientRect();
                    var offset = {
                        x: sectionBCR.left - window.innerWidth * 1.5 - getTranslate(section).x,
                        y: sectionBCR.top - window.innerHeight * 1.5 - getTranslate(section).y
                    };
                    var limit = {
                        x: offset.x + sectionBCR.width + window.innerWidth * 2,
                        y: offset.y + sectionBCR.height + window.innerHeight * 2
                    };
                    var persistent = typeof section.dataset[_this7.name + 'Persistent'] === 'string';
                    section.setAttribute('data-scroll-section-id', id);
                    var mappedSection = {
                        el: section,
                        offset: offset,
                        limit: limit,
                        inView: false,
                        persistent: persistent,
                        id: id
                    };
                    _this7.sections[id] = mappedSection;
                });
            }
        },
        {
            key: "transform",
            value: function transform(element, x, y, delay) {
                var transform;
                if (!delay) transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(x, ",").concat(y, ",0,1)");
                else {
                    var start = getTranslate(element);
                    var lerpX = lerp(start.x, x, delay);
                    var lerpY = lerp(start.y, y, delay);
                    transform = "matrix3d(1,0,0.00,0,0.00,1,0.00,0,0,0,1,0,".concat(lerpX, ",").concat(lerpY, ",0,1)");
                }
                element.style.webkitTransform = transform;
                element.style.msTransform = transform;
                element.style.transform = transform;
            }
        },
        {
            key: "transformElements",
            value: function transformElements(isForced) {
                var _this8 = this;
                var setAllElements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
                var scrollRight = this.instance.scroll.x + this.windowWidth;
                var scrollBottom = this.instance.scroll.y + this.windowHeight;
                var scrollMiddle = {
                    x: this.instance.scroll.x + this.windowMiddle.x,
                    y: this.instance.scroll.y + this.windowMiddle.y
                };
                Object.entries(this.parallaxElements).forEach(function(_ref5) {
                    var _ref6 = _slicedToArray(_ref5, 2), i = _ref6[0], current = _ref6[1];
                    var transformDistance = false;
                    if (isForced) transformDistance = 0;
                    if (current.inView || setAllElements) switch(current.position){
                        case 'top':
                            transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                            break;
                        case 'elementTop':
                            transformDistance = (scrollBottom - current.top) * -current.speed;
                            break;
                        case 'bottom':
                            transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollBottom + _this8.windowHeight) * current.speed;
                            break;
                        case 'left':
                            transformDistance = _this8.instance.scroll[_this8.directionAxis] * -current.speed;
                            break;
                        case 'elementLeft':
                            transformDistance = (scrollRight - current.left) * -current.speed;
                            break;
                        case 'right':
                            transformDistance = (_this8.instance.limit[_this8.directionAxis] - scrollRight + _this8.windowHeight) * current.speed;
                            break;
                        default:
                            transformDistance = (scrollMiddle[_this8.directionAxis] - current.middle[_this8.directionAxis]) * -current.speed;
                            break;
                    }
                    if (current.sticky) {
                        if (current.inView) {
                            if (_this8.direction === 'horizontal') transformDistance = _this8.instance.scroll.x - current.left + window.innerWidth;
                            else transformDistance = _this8.instance.scroll.y - current.top + window.innerHeight;
                        } else if (_this8.direction === 'horizontal') {
                            if (_this8.instance.scroll.x < current.left - window.innerWidth && _this8.instance.scroll.x < current.left - window.innerWidth / 2) transformDistance = 0;
                            else if (_this8.instance.scroll.x > current.right && _this8.instance.scroll.x > current.right + 100) transformDistance = current.right - current.left + window.innerWidth;
                            else transformDistance = false;
                        } else {
                            if (_this8.instance.scroll.y < current.top - window.innerHeight && _this8.instance.scroll.y < current.top - window.innerHeight / 2) transformDistance = 0;
                            else if (_this8.instance.scroll.y > current.bottom && _this8.instance.scroll.y > current.bottom + 100) transformDistance = current.bottom - current.top + window.innerHeight;
                            else transformDistance = false;
                        }
                    }
                    if (transformDistance !== false) {
                        if (current.direction === 'horizontal' || _this8.direction === 'horizontal' && current.direction !== 'vertical') _this8.transform(current.el, transformDistance, 0, isForced ? false : current.delay);
                        else _this8.transform(current.el, 0, transformDistance, isForced ? false : current.delay);
                    }
                });
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target) {
                var _this9 = this;
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {
                };
                // Parse options
                var offset = parseInt(options.offset) || 0; // An offset to apply on top of given `target` or `sourceElem`'s target
                var duration = !isNaN(parseInt(options.duration)) ? parseInt(options.duration) : 1000; // Duration of the scroll animation in milliseconds
                var easing = options.easing || [
                    0.25,
                    0,
                    0.35,
                    1
                ]; // An array of 4 floats between 0 and 1 defining the bezier curve for the animation's easing. See http://greweb.me/bezier-easing-editor/example/
                var disableLerp = options.disableLerp ? true : false; // Lerp effect won't be applied if set to true
                var callback = options.callback ? options.callback : false; // function called when scrollTo completes (note that it won't wait for lerp to stabilize)
                easing = src$1.apply(void 0, _toConsumableArray(easing));
                if (typeof target === 'string') {
                    // Selector or boundaries
                    if (target === 'top') target = 0;
                    else if (target === 'bottom') target = this.instance.limit.y;
                    else if (target === 'left') target = 0;
                    else if (target === 'right') target = this.instance.limit.x;
                    else {
                        target = document.querySelector(target); // If the query fails, abort
                        if (!target) return;
                    }
                } else if (typeof target === 'number') // Absolute coordinate
                target = parseInt(target);
                else if (target && target.tagName) ;
                else {
                    console.warn('`target` parameter is not valid');
                    return;
                } // We have a target that is not a coordinate yet, get it
                if (typeof target !== 'number') {
                    // Verify the given target belongs to this scroll scope
                    var targetInScope = getParents(target).includes(this.el);
                    if (!targetInScope) // If the target isn't inside our main element, abort any action
                    return;
                     // Get target offset from top
                    var targetBCR = target.getBoundingClientRect();
                    var offsetTop = targetBCR.top;
                    var offsetLeft = targetBCR.left; // Try and find the target's parent section
                    var targetParents = getParents(target);
                    var parentSection = targetParents.find(function(candidate) {
                        return Object.entries(_this9.sections) // Get sections associative array as a regular array
                        .map(function(_ref7) {
                            var _ref8 = _slicedToArray(_ref7, 2), key = _ref8[0], section = _ref8[1];
                            return section;
                        }) // map to section only (we dont need the key here)
                        .find(function(section) {
                            return section.el == candidate;
                        }); // finally find the section that matches the candidate
                    });
                    var parentSectionOffset = 0;
                    if (parentSection) parentSectionOffset = getTranslate(parentSection)[this.directionAxis]; // We got a parent section, store it's current offset to remove it later
                    else // if no parent section is found we need to use instance scroll directly
                    parentSectionOffset = -this.instance.scroll[this.directionAxis];
                     // Final value of scroll destination : offsetTop + (optional offset given in options) - (parent's section translate)
                    if (this.direction === 'horizontal') offset = offsetLeft + offset - parentSectionOffset;
                    else offset = offsetTop + offset - parentSectionOffset;
                } else offset = target + offset;
                 // Actual scrollto
                // ==========================================================================
                // Setup
                var scrollStart = parseFloat(this.instance.delta[this.directionAxis]);
                var scrollTarget = Math.max(0, Math.min(offset, this.instance.limit[this.directionAxis])); // Make sure our target is in the scroll boundaries
                var scrollDiff = scrollTarget - scrollStart;
                var render = function render(p) {
                    if (disableLerp) {
                        if (_this9.direction === 'horizontal') _this9.setScroll(scrollStart + scrollDiff * p, _this9.instance.delta.y);
                        else _this9.setScroll(_this9.instance.delta.x, scrollStart + scrollDiff * p);
                    } else _this9.instance.delta[_this9.directionAxis] = scrollStart + scrollDiff * p;
                }; // Prepare the scroll
                this.animatingScroll = true; // This boolean allows to prevent `checkScroll()` from calling `stopScrolling` when the animation is slow (i.e. at the beginning of an EaseIn)
                this.stopScrolling(); // Stop any movement, allows to kill any other `scrollTo` still happening
                this.startScrolling(); // Restart the scroll
                // Start the animation loop
                var start = Date.now();
                var loop = function loop() {
                    var p = (Date.now() - start) / duration; // Animation progress
                    if (p > 1) {
                        // Animation ends
                        render(1);
                        _this9.animatingScroll = false;
                        if (duration == 0) _this9.update();
                        if (callback) callback();
                    } else {
                        _this9.scrollToRaf = requestAnimationFrame(loop);
                        render(easing(p));
                    }
                };
                loop();
            }
        },
        {
            key: "update",
            value: function update() {
                this.setScrollLimit();
                this.addSections();
                this.addElements();
                this.detectElements();
                this.updateScroll();
                this.transformElements(true);
                this.reinitScrollBar();
                this.checkScroll(true);
            }
        },
        {
            key: "startScroll",
            value: function startScroll() {
                this.stop = false;
            }
        },
        {
            key: "stopScroll",
            value: function stopScroll() {
                this.stop = true;
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.instance = _objectSpread2(_objectSpread2({
                }, this.instance), {
                }, {
                    scroll: {
                        x: x,
                        y: y
                    },
                    delta: {
                        x: x,
                        y: y
                    },
                    speed: 0
                });
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                _get(_getPrototypeOf(_default.prototype), "destroy", this).call(this);
                this.stopScrolling();
                this.html.classList.remove(this.smoothClass);
                this.vs.destroy();
                this.destroyScrollBar();
                window.removeEventListener('keydown', this.checkKey, false);
            }
        }
    ]);
    return _default;
}(_default);
var Smooth = /*#__PURE__*/ function() {
    function Smooth() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, Smooth);
        this.options = options; // Override default options with given ones
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        if (!this.smooth && this.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible');
        if (!this.tablet.smooth && this.tablet.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (tablet)');
        if (!this.smartphone.smooth && this.smartphone.direction == 'horizontal') console.warn('🚨 `smooth:false` & `horizontal` direction are not yet compatible (smartphone)');
        this.init();
    }
    _createClass(Smooth, [
        {
            key: "init",
            value: function init() {
                this.options.isMobile = /Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1 || window.innerWidth < this.tablet.breakpoint;
                this.options.isTablet = this.options.isMobile && window.innerWidth >= this.tablet.breakpoint;
                if (this.smooth && !this.options.isMobile || this.tablet.smooth && this.options.isTablet || this.smartphone.smooth && this.options.isMobile && !this.options.isTablet) this.scroll = new _default$2(this.options);
                else this.scroll = new _default$1(this.options);
                this.scroll.init();
                if (window.location.hash) {
                    // Get the hash without the '#' and find the matching element
                    var id = window.location.hash.slice(1, window.location.hash.length);
                    var target = document.getElementById(id); // If found, scroll to the element
                    if (target) this.scroll.scrollTo(target);
                }
            }
        },
        {
            key: "update",
            value: function update() {
                this.scroll.update();
            }
        },
        {
            key: "start",
            value: function start() {
                this.scroll.startScroll();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.scroll.stopScroll();
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target, options) {
                this.scroll.scrollTo(target, options);
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.scroll.setScroll(x, y);
            }
        },
        {
            key: "on",
            value: function on(event, func) {
                this.scroll.setEvents(event, func);
            }
        },
        {
            key: "off",
            value: function off(event, func) {
                this.scroll.unsetEvents(event, func);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.scroll.destroy();
            }
        }
    ]);
    return Smooth;
}();
var Native = /*#__PURE__*/ function() {
    function Native() {
        var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        };
        _classCallCheck(this, Native);
        this.options = options; // Override default options with given ones
        Object.assign(this, defaults, options);
        this.smartphone = defaults.smartphone;
        if (options.smartphone) Object.assign(this.smartphone, options.smartphone);
        this.tablet = defaults.tablet;
        if (options.tablet) Object.assign(this.tablet, options.tablet);
        this.init();
    }
    _createClass(Native, [
        {
            key: "init",
            value: function init() {
                this.scroll = new _default$1(this.options);
                this.scroll.init();
                if (window.location.hash) {
                    // Get the hash without the '#' and find the matching element
                    var id = window.location.hash.slice(1, window.location.hash.length);
                    var target = document.getElementById(id); // If found, scroll to the element
                    if (target) this.scroll.scrollTo(target);
                }
            }
        },
        {
            key: "update",
            value: function update() {
                this.scroll.update();
            }
        },
        {
            key: "start",
            value: function start() {
                this.scroll.startScroll();
            }
        },
        {
            key: "stop",
            value: function stop() {
                this.scroll.stopScroll();
            }
        },
        {
            key: "scrollTo",
            value: function scrollTo(target, options) {
                this.scroll.scrollTo(target, options);
            }
        },
        {
            key: "setScroll",
            value: function setScroll(x, y) {
                this.scroll.setScroll(x, y);
            }
        },
        {
            key: "on",
            value: function on(event, func) {
                this.scroll.setEvents(event, func);
            }
        },
        {
            key: "off",
            value: function off(event, func) {
                this.scroll.unsetEvents(event, func);
            }
        },
        {
            key: "destroy",
            value: function destroy() {
                this.scroll.destroy();
            }
        }
    ]);
    return Native;
}();
exports.default = Smooth;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"ciiiV":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"adFF7":[function(require,module,exports) {
const _temp0 = require("../Anastasia/DSC01812.jpg");
const _temp1 = require("../Anastasia/DSC01910.jpg");
const _temp2 = require("../Anastasia/DSC02013.jpg");
const _temp3 = require("../Anastasia/DSC02154.jpg");
const _temp4 = require("../Anastasia/DSC02205.jpg");
const _temp5 = require("../Anastasia/DSC02276.jpg");
const _temp6 = require("../Anastasia/DSC02278.jpg");
const _temp7 = require("../Anastasia/NastiaDavletshina1.jpg");
const _temp8 = require("../Andrea/DSC01328.jpg");
const _temp9 = require("../Andrea/DSC01521.jpg");
const _temp10 = require("../Andrea/DSC01530.jpg");
const _temp11 = require("../Andrea/pic_10.jpg");
const _temp12 = require("../Andrea/pic_11.jpg");
const _temp13 = require("../Andrea/pic_12.jpg");
const _temp14 = require("../Andrea/pic_13.jpg");
const _temp15 = require("../Andrea/pic_14.jpg");
const _temp16 = require("../Andrea/pic_15.jpg");
const _temp17 = require("../Andrea/pic_9.jpg");
const _temp18 = require("../Arianna/pic_0.jpg");
const _temp19 = require("../Arianna/pic_1.jpg");
const _temp20 = require("../Arianna/pic_10.jpg");
const _temp21 = require("../Arianna/pic_11.jpg");
const _temp22 = require("../Arianna/pic_2.jpg");
const _temp23 = require("../Arianna/pic_3.jpg");
const _temp24 = require("../Arianna/pic_4.jpg");
const _temp25 = require("../Arianna/pic_5.jpg");
const _temp26 = require("../Arianna/pic_6.jpg");
const _temp27 = require("../Arianna/pic_7.jpg");
const _temp28 = require("../Arianna/pic_8.jpg");
const _temp29 = require("../Arianna/pic_9.jpg");
const _temp30 = require("../Inganno/1.jpg");
const _temp31 = require("../Inganno/2.jpg");
const _temp32 = require("../Inganno/3.jpg");
const _temp33 = require("../Inganno/4.jpg");
const _temp34 = require("../Inganno/5.jpg");
const _temp35 = require("../Inganno/6.jpg");
const _temp36 = require("../Inganno/7.jpg");
const _temp37 = require("../Inganno/8.jpg");
const _temp38 = require("../Inganno/9.jpg");
const _temp39 = require("../Inganno/10.jpg");
const _temp40 = require("../Katia/pic_0.jpg");
const _temp41 = require("../Katia/pic_1.jpg");
const _temp42 = require("../Katia/pic_2.jpg");
const _temp43 = require("../Katia/pic_3.jpg");
const _temp44 = require("../Katia/pic_4.jpg");
const _temp45 = require("../Katia/pic_5.jpg");
const _temp46 = require("../Katia/pic_6.jpg");
const _temp47 = require("../Katia/pic_7.jpg");
const _temp48 = require("../Matteo/pic_0.jpg");
const _temp49 = require("../Matteo/pic_1.jpg");
const _temp50 = require("../Matteo/pic_2.jpg");
const _temp51 = require("../Matteo/pic_3.jpg");
const _temp52 = require("../Matteo/pic_4.jpg");
const _temp53 = require("../Matteo/pic_5.jpg");
const _temp54 = require("../Matteo/pic_6.jpg");
const _temp55 = require("../Matteo/pic_7.jpg");
const _temp56 = require("../Matteo/pic_8.jpg");
const _temp57 = require("../Matteo/pic_9.jpg");
const _temp58 = require("../Nastia/DSC07826.jpg");
const _temp59 = require("../Nastia/DSC07836.jpg");
const _temp60 = require("../Nastia/DSC08026.jpg");
const _temp61 = require("../Nastia/DSC08077.jpg");
const _temp62 = require("../Nastia/DSC08167.jpg");
const _temp63 = require("../Nastia/DSC08191.jpg");
const _temp64 = require("../Nastia/DSC08386.jpg");
const _temp65 = require("../Roberta/pic_0.jpg");
const _temp66 = require("../Roberta/pic_1.jpg");
const _temp67 = require("../Roberta/pic_10.jpg");
const _temp68 = require("../Roberta/pic_11.jpg");
const _temp69 = require("../Roberta/pic_12.jpg");
const _temp70 = require("../Roberta/pic_13.jpg");
const _temp71 = require("../Roberta/pic_14.jpg");
const _temp72 = require("../Roberta/pic_2.jpg");
const _temp73 = require("../Roberta/pic_3.jpg");
const _temp74 = require("../Roberta/pic_4.jpg");
const _temp75 = require("../Roberta/pic_5.jpg");
const _temp76 = require("../Roberta/pic_6.jpg");
const _temp77 = require("../Roberta/pic_7.jpg");
const _temp78 = require("../Roberta/pic_8.jpg");
const _temp79 = require("../Roberta/pic_9.jpg");
const _temp80 = require("../Valeria/239645708_913348032586675_3526176268626277941_n.jpg");
const _temp81 = require("../Valeria/239858938_422969359157922_8304902028896030195_n.jpg");
const _temp82 = require("../Valeria/240108310_221163499954226_6077238410015003289_n.jpg");
const _temp83 = require("../Valeria/240108522_986136085294928_4307106541389037811_n.jpg");
const _temp84 = require("../Valeria/240110620_4776111199083747_2956117918730996962_n.jpg");
const _temp85 = require("../Valeria/240453595_245641064230822_139858117910837704_n.jpg");
module.exports = {
    "Anastasia": {
        "DSC01812": _temp0,
        "DSC01910": _temp1,
        "DSC02013": _temp2,
        "DSC02154": _temp3,
        "DSC02205": _temp4,
        "DSC02276": _temp5,
        "DSC02278": _temp6,
        "NastiaDavletshina1": _temp7
    },
    "Andrea": {
        "DSC01328": _temp8,
        "DSC01521": _temp9,
        "DSC01530": _temp10,
        "pic_10": _temp11,
        "pic_11": _temp12,
        "pic_12": _temp13,
        "pic_13": _temp14,
        "pic_14": _temp15,
        "pic_15": _temp16,
        "pic_9": _temp17
    },
    "Arianna": {
        "pic_0": _temp18,
        "pic_1": _temp19,
        "pic_10": _temp20,
        "pic_11": _temp21,
        "pic_2": _temp22,
        "pic_3": _temp23,
        "pic_4": _temp24,
        "pic_5": _temp25,
        "pic_6": _temp26,
        "pic_7": _temp27,
        "pic_8": _temp28,
        "pic_9": _temp29
    },
    "Inganno": {
        "1": _temp30,
        "2": _temp31,
        "3": _temp32,
        "4": _temp33,
        "5": _temp34,
        "6": _temp35,
        "7": _temp36,
        "8": _temp37,
        "9": _temp38,
        "10": _temp39
    },
    "Katia": {
        "pic_0": _temp40,
        "pic_1": _temp41,
        "pic_2": _temp42,
        "pic_3": _temp43,
        "pic_4": _temp44,
        "pic_5": _temp45,
        "pic_6": _temp46,
        "pic_7": _temp47
    },
    "Matteo": {
        "pic_0": _temp48,
        "pic_1": _temp49,
        "pic_2": _temp50,
        "pic_3": _temp51,
        "pic_4": _temp52,
        "pic_5": _temp53,
        "pic_6": _temp54,
        "pic_7": _temp55,
        "pic_8": _temp56,
        "pic_9": _temp57
    },
    "Nastia": {
        "DSC07826": _temp58,
        "DSC07836": _temp59,
        "DSC08026": _temp60,
        "DSC08077": _temp61,
        "DSC08167": _temp62,
        "DSC08191": _temp63,
        "DSC08386": _temp64
    },
    "Roberta": {
        "pic_0": _temp65,
        "pic_1": _temp66,
        "pic_10": _temp67,
        "pic_11": _temp68,
        "pic_12": _temp69,
        "pic_13": _temp70,
        "pic_14": _temp71,
        "pic_2": _temp72,
        "pic_3": _temp73,
        "pic_4": _temp74,
        "pic_5": _temp75,
        "pic_6": _temp76,
        "pic_7": _temp77,
        "pic_8": _temp78,
        "pic_9": _temp79
    },
    "Valeria": {
        "239645708_913348032586675_3526176268626277941_n": _temp80,
        "239858938_422969359157922_8304902028896030195_n": _temp81,
        "240108310_221163499954226_6077238410015003289_n": _temp82,
        "240108522_986136085294928_4307106541389037811_n": _temp83,
        "240110620_4776111199083747_2956117918730996962_n": _temp84,
        "240453595_245641064230822_139858117910837704_n": _temp85
    }
};

},{"../Anastasia/DSC01812.jpg":"27hhp","../Anastasia/DSC01910.jpg":"kL9Y3","../Anastasia/DSC02013.jpg":"kRGo3","../Anastasia/DSC02154.jpg":"lONke","../Anastasia/DSC02205.jpg":"dnibK","../Anastasia/DSC02276.jpg":"kYH8c","../Anastasia/DSC02278.jpg":"iDyhP","../Anastasia/NastiaDavletshina1.jpg":"9XNPE","../Andrea/DSC01328.jpg":"hRoJD","../Andrea/DSC01521.jpg":"kDciS","../Andrea/DSC01530.jpg":"kPZ4W","../Andrea/pic_10.jpg":"cHmim","../Andrea/pic_11.jpg":"hVcrc","../Andrea/pic_12.jpg":"jKlhJ","../Andrea/pic_13.jpg":"jtYtg","../Andrea/pic_14.jpg":"2UESJ","../Andrea/pic_15.jpg":"922HP","../Andrea/pic_9.jpg":"jSfp4","../Arianna/pic_0.jpg":"auLbh","../Arianna/pic_1.jpg":"iAfPt","../Arianna/pic_10.jpg":"aQDpZ","../Arianna/pic_11.jpg":"R6BUR","../Arianna/pic_2.jpg":"3frM6","../Arianna/pic_3.jpg":"efIZZ","../Arianna/pic_4.jpg":"bFr8T","../Arianna/pic_5.jpg":"kk6oK","../Arianna/pic_6.jpg":"jOlOW","../Arianna/pic_7.jpg":"jRqb2","../Arianna/pic_8.jpg":"3ASMb","../Arianna/pic_9.jpg":"9xrLx","../Inganno/1.jpg":"cXFMX","../Inganno/2.jpg":"eYjAi","../Inganno/3.jpg":"dzvRw","../Inganno/4.jpg":"25uYQ","../Inganno/5.jpg":"6xnJd","../Inganno/6.jpg":"4i2K2","../Inganno/7.jpg":"8KeWv","../Inganno/8.jpg":"8BTVQ","../Inganno/9.jpg":"75YVs","../Inganno/10.jpg":"hH93w","../Katia/pic_0.jpg":"brCd4","../Katia/pic_1.jpg":"5k64l","../Katia/pic_2.jpg":"efIsy","../Katia/pic_3.jpg":"8GdmZ","../Katia/pic_4.jpg":"fJf2z","../Katia/pic_5.jpg":"6h9cv","../Katia/pic_6.jpg":"alue5","../Katia/pic_7.jpg":"e6M8v","../Matteo/pic_0.jpg":"gZNPp","../Matteo/pic_1.jpg":"8tQWi","../Matteo/pic_2.jpg":"cDanF","../Matteo/pic_3.jpg":"6knsV","../Matteo/pic_4.jpg":"gwu8n","../Matteo/pic_5.jpg":"fVWwX","../Matteo/pic_6.jpg":"9plNI","../Matteo/pic_7.jpg":"aLqGh","../Matteo/pic_8.jpg":"031sh","../Matteo/pic_9.jpg":"8gMYd","../Nastia/DSC07826.jpg":"9AVLD","../Nastia/DSC07836.jpg":"4gDqK","../Nastia/DSC08026.jpg":"97xVA","../Nastia/DSC08077.jpg":"dT3AH","../Nastia/DSC08167.jpg":"disvw","../Nastia/DSC08191.jpg":"82WXc","../Nastia/DSC08386.jpg":"4xBCp","../Roberta/pic_0.jpg":"7Tv3D","../Roberta/pic_1.jpg":"gZjDs","../Roberta/pic_10.jpg":"8enkX","../Roberta/pic_11.jpg":"bRQEo","../Roberta/pic_12.jpg":"cyTn7","../Roberta/pic_13.jpg":"65oxB","../Roberta/pic_14.jpg":"fTWSL","../Roberta/pic_2.jpg":"e0eqk","../Roberta/pic_3.jpg":"iQ3Fq","../Roberta/pic_4.jpg":"leutP","../Roberta/pic_5.jpg":"eFIuM","../Roberta/pic_6.jpg":"CX81U","../Roberta/pic_7.jpg":"8hJhl","../Roberta/pic_8.jpg":"8oINI","../Roberta/pic_9.jpg":"kmSx4","../Valeria/239645708_913348032586675_3526176268626277941_n.jpg":"kndmW","../Valeria/239858938_422969359157922_8304902028896030195_n.jpg":"4sU58","../Valeria/240108310_221163499954226_6077238410015003289_n.jpg":"etHor","../Valeria/240108522_986136085294928_4307106541389037811_n.jpg":"eMAQg","../Valeria/240110620_4776111199083747_2956117918730996962_n.jpg":"8Vxw5","../Valeria/240453595_245641064230822_139858117910837704_n.jpg":"5mveD"}],"27hhp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC01812.9b457f3b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"chiK4":[function(require,module,exports) {
"use strict";
var bundleURL = {
};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return '/';
}
function getBaseURL(url) {
    return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ('' + url).match(/(https?|file|ftp):\/\/[^/]+/);
    if (!matches) throw new Error('Origin not found');
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"kL9Y3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC01910.abf7c2ed.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"kRGo3":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC02013.b73d0b50.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"lONke":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC02154.2bddf6ee.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"dnibK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC02205.45ea7ced.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"kYH8c":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC02276.69ad461a.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iDyhP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC02278.2b79a0da.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9XNPE":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "NastiaDavletshina1.d1043d66.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hRoJD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC01328.dd143993.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"kDciS":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC01521.aff48e98.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"kPZ4W":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC01530.15ff90da.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"cHmim":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_10.78208dc2.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hVcrc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_11.7999c15d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jKlhJ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_12.d96c8373.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jtYtg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_13.792abaf6.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"2UESJ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_14.02e647ee.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"922HP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_15.4d2b85ca.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jSfp4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_9.b5e5ed7f.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"auLbh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_0.057c2856.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iAfPt":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_1.22f8ed5e.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"aQDpZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_10.2056aeca.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"R6BUR":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_11.329be0bc.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3frM6":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_2.1c9fd381.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"efIZZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_3.d31a86b9.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bFr8T":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_4.94a358fc.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"kk6oK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_5.7a7313ec.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jOlOW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_6.15eeaed4.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"jRqb2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_7.5794c806.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"3ASMb":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_8.e901c4f0.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9xrLx":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_9.224cf7dd.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"cXFMX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "1.6c0475a8.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"eYjAi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "2.d180dbbb.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"dzvRw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "3.5f0d813d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"25uYQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "4.ada9c2a2.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6xnJd":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "5.a20972fd.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"4i2K2":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "6.29ef4fa2.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8KeWv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "7.598d504b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8BTVQ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "8.b17e6f5d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"75YVs":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "9.d2f46422.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"hH93w":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "10.b4f2a28b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"brCd4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_0.ddc8bec4.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"5k64l":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_1.5f736752.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"efIsy":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_2.08001445.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8GdmZ":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_3.2e846be1.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"fJf2z":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_4.593140b9.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6h9cv":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_5.3c24871b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"alue5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_6.1673c9ec.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"e6M8v":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_7.9e58bd7f.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"gZNPp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_0.a494541a.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8tQWi":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_1.5da3eed5.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"cDanF":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_2.1a08d2d7.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"6knsV":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_3.65cb02dd.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"gwu8n":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_4.12ac8484.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"fVWwX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_5.1c0e05ea.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9plNI":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_6.6bb040aa.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"aLqGh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_7.e44544a7.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"031sh":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_8.b90f642b.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8gMYd":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_9.84c1a91f.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"9AVLD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC07826.ba4dfdff.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"4gDqK":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC07836.31c5c297.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"97xVA":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC08026.21eb0ae4.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"dT3AH":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC08077.c2ecdd56.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"disvw":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC08167.2b06d695.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"82WXc":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC08191.1f80abd4.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"4xBCp":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "DSC08386.e4ee8bf9.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"7Tv3D":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_0.ae7e09ba.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"gZjDs":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_1.64790b5e.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8enkX":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_10.57d12a09.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"bRQEo":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_11.6ec8f916.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"cyTn7":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_12.e27fdafb.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"65oxB":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_13.250d15ce.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"fTWSL":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_14.b169344d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"e0eqk":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_2.1103a691.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"iQ3Fq":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_3.a873d067.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"leutP":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_4.5e870878.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"eFIuM":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_5.207feacc.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"CX81U":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_6.f89b9ea3.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8hJhl":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_7.5522e693.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8oINI":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_8.0000ef58.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"kmSx4":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "pic_9.f39145d3.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"kndmW":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "239645708_913348032586675_3526176268626277941_n.451dc16d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"4sU58":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "239858938_422969359157922_8304902028896030195_n.1afa5611.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"etHor":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "240108310_221163499954226_6077238410015003289_n.f8cf644d.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"eMAQg":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "240108522_986136085294928_4307106541389037811_n.f97058dc.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"8Vxw5":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "240110620_4776111199083747_2956117918730996962_n.c6da6197.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"5mveD":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "240453595_245641064230822_139858117910837704_n.697a6fe2.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"gc278":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
var _animejs = require("animejs");
var _animejsDefault = parcelHelpers.interopDefault(_animejs);
// Track the mouse position
let mouse = {
    x: 0,
    y: 0
};
window.addEventListener('mousemove', (ev)=>mouse = _utils.getMousePos(ev)
);
window.addEventListener('touchmove', (ev)=>document.querySelector('.cursor').style.display = 'none'
);
class Cursor {
    constructor(el){
        this.DOM = {
            el: el
        };
        this.DOM.el.style.opacity = 0;
        this.bounds = this.DOM.el.getBoundingClientRect();
        this.renderedStyles = {
            tx: {
                previous: 0,
                current: 0,
                amt: 0.2
            },
            ty: {
                previous: 0,
                current: 0,
                amt: 0.2
            }
        };
        this.onMouseMoveEv = ()=>{
            this.renderedStyles.tx.previous = this.renderedStyles.tx.current = mouse.x - this.bounds.width / 2;
            this.renderedStyles.ty.previous = this.renderedStyles.ty.previous = mouse.y - this.bounds.height / 2;
            _animejsDefault.default({
                targets: this.DOM.el,
                duration: 900,
                ease: 'easeOut',
                opacity: 1
            });
            // gsap.to(this.DOM.el, {duration: 0.9, ease: 'Power3.easeOut', opacity: 1});
            requestAnimationFrame(()=>this.render()
            );
            window.removeEventListener('mousemove', this.onMouseMoveEv);
        };
        window.addEventListener('mousemove', this.onMouseMoveEv);
    }
    render() {
        this.renderedStyles['tx'].current = mouse.x - this.bounds.width / 2;
        this.renderedStyles['ty'].current = mouse.y - this.bounds.height / 2;
        for(const key in this.renderedStyles)this.renderedStyles[key].previous = _utils.lerp(this.renderedStyles[key].previous, this.renderedStyles[key].current, this.renderedStyles[key].amt);
        this.DOM.el.style.transform = `translateX(${this.renderedStyles['tx'].previous}px) translateY(${this.renderedStyles['ty'].previous}px)`;
        this.DOM.el.style.opacity = '1';
        requestAnimationFrame(()=>this.render()
        );
    }
}
exports.default = Cursor;

},{"./utils":"fIYUT","animejs":"bfYip","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"fIYUT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "map", ()=>map
);
parcelHelpers.export(exports, "lerp", ()=>lerp
);
parcelHelpers.export(exports, "clamp", ()=>clamp
);
parcelHelpers.export(exports, "getMousePos", ()=>getMousePos
);
// Map number x from range [a, b] to [c, d]
const map = (x, a, b, c, d)=>(x - a) * (d - c) / (b - a) + c
;
// Linear interpolation
const lerp = (a, b, n)=>(1 - n) * a + n * b
;
const clamp = (num, min, max)=>num <= min ? min : num >= max ? max : num
;
// Gets the mouse position
const getMousePos = (e)=>{
    let posx = 0;
    let posy = 0;
    if (!e) e = window.event;
    if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
    } else if (e.clientX || e.clientY) {
        posx = e.clientX + body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + body.scrollTop + document.documentElement.scrollTop;
    }
    return {
        x: posx,
        y: posy
    };
};

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bfYip":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/*
 * anime.js v3.2.1
 * (c) 2020 Julian Garnier
 * Released under the MIT license
 * animejs.com
 */ // Defaults
var defaultInstanceSettings = {
    update: null,
    begin: null,
    loopBegin: null,
    changeBegin: null,
    change: null,
    changeComplete: null,
    loopComplete: null,
    complete: null,
    loop: 1,
    direction: 'normal',
    autoplay: true,
    timelineOffset: 0
};
var defaultTweenSettings = {
    duration: 1000,
    delay: 0,
    endDelay: 0,
    easing: 'easeOutElastic(1, .5)',
    round: 0
};
var validTransforms = [
    'translateX',
    'translateY',
    'translateZ',
    'rotate',
    'rotateX',
    'rotateY',
    'rotateZ',
    'scale',
    'scaleX',
    'scaleY',
    'scaleZ',
    'skew',
    'skewX',
    'skewY',
    'perspective',
    'matrix',
    'matrix3d'
];
// Caching
var cache = {
    CSS: {
    },
    springs: {
    }
};
// Utils
function minMax(val, min, max) {
    return Math.min(Math.max(val, min), max);
}
function stringContains(str, text) {
    return str.indexOf(text) > -1;
}
function applyArguments(func, args) {
    return func.apply(null, args);
}
var is = {
    arr: function(a) {
        return Array.isArray(a);
    },
    obj: function(a) {
        return stringContains(Object.prototype.toString.call(a), 'Object');
    },
    pth: function(a) {
        return is.obj(a) && a.hasOwnProperty('totalLength');
    },
    svg: function(a) {
        return a instanceof SVGElement;
    },
    inp: function(a) {
        return a instanceof HTMLInputElement;
    },
    dom: function(a) {
        return a.nodeType || is.svg(a);
    },
    str: function(a) {
        return typeof a === 'string';
    },
    fnc: function(a) {
        return typeof a === 'function';
    },
    und: function(a) {
        return typeof a === 'undefined';
    },
    nil: function(a) {
        return is.und(a) || a === null;
    },
    hex: function(a) {
        return /(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(a);
    },
    rgb: function(a) {
        return /^rgb/.test(a);
    },
    hsl: function(a) {
        return /^hsl/.test(a);
    },
    col: function(a) {
        return is.hex(a) || is.rgb(a) || is.hsl(a);
    },
    key: function(a) {
        return !defaultInstanceSettings.hasOwnProperty(a) && !defaultTweenSettings.hasOwnProperty(a) && a !== 'targets' && a !== 'keyframes';
    }
};
// Easings
function parseEasingParameters(string) {
    var match = /\(([^)]+)\)/.exec(string);
    return match ? match[1].split(',').map(function(p) {
        return parseFloat(p);
    }) : [];
}
// Spring solver inspired by Webkit Copyright © 2016 Apple Inc. All rights reserved. https://webkit.org/demos/spring/spring.js
function spring(string, duration) {
    var params = parseEasingParameters(string);
    var mass = minMax(is.und(params[0]) ? 1 : params[0], 0.1, 100);
    var stiffness = minMax(is.und(params[1]) ? 100 : params[1], 0.1, 100);
    var damping = minMax(is.und(params[2]) ? 10 : params[2], 0.1, 100);
    var velocity = minMax(is.und(params[3]) ? 0 : params[3], 0.1, 100);
    var w0 = Math.sqrt(stiffness / mass);
    var zeta = damping / (2 * Math.sqrt(stiffness * mass));
    var wd = zeta < 1 ? w0 * Math.sqrt(1 - zeta * zeta) : 0;
    var a = 1;
    var b = zeta < 1 ? (zeta * w0 + -velocity) / wd : -velocity + w0;
    function solver(t) {
        var progress = duration ? duration * t / 1000 : t;
        if (zeta < 1) progress = Math.exp(-progress * zeta * w0) * (a * Math.cos(wd * progress) + b * Math.sin(wd * progress));
        else progress = (a + b * progress) * Math.exp(-progress * w0);
        if (t === 0 || t === 1) return t;
        return 1 - progress;
    }
    function getDuration() {
        var cached = cache.springs[string];
        if (cached) return cached;
        var frame = 1 / 6;
        var elapsed = 0;
        var rest = 0;
        while(true){
            elapsed += frame;
            if (solver(elapsed) === 1) {
                rest++;
                if (rest >= 16) break;
            } else rest = 0;
        }
        var duration = elapsed * frame * 1000;
        cache.springs[string] = duration;
        return duration;
    }
    return duration ? solver : getDuration;
}
// Basic steps easing implementation https://developer.mozilla.org/fr/docs/Web/CSS/transition-timing-function
function steps(steps) {
    if (steps === void 0) steps = 10;
    return function(t) {
        return Math.ceil(minMax(t, 0.000001, 1) * steps) * (1 / steps);
    };
}
// BezierEasing https://github.com/gre/bezier-easing
var bezier = function() {
    var kSplineTableSize = 11;
    var kSampleStepSize = 1 / (kSplineTableSize - 1);
    function A(aA1, aA2) {
        return 1 - 3 * aA2 + 3 * aA1;
    }
    function B(aA1, aA2) {
        return 3 * aA2 - 6 * aA1;
    }
    function C(aA1) {
        return 3 * aA1;
    }
    function calcBezier(aT, aA1, aA2) {
        return ((A(aA1, aA2) * aT + B(aA1, aA2)) * aT + C(aA1)) * aT;
    }
    function getSlope(aT, aA1, aA2) {
        return 3 * A(aA1, aA2) * aT * aT + 2 * B(aA1, aA2) * aT + C(aA1);
    }
    function binarySubdivide(aX, aA, aB, mX1, mX2) {
        var currentX, currentT, i = 0;
        do {
            currentT = aA + (aB - aA) / 2;
            currentX = calcBezier(currentT, mX1, mX2) - aX;
            if (currentX > 0) aB = currentT;
            else aA = currentT;
        }while (Math.abs(currentX) > 0.0000001 && ++i < 10)
        return currentT;
    }
    function newtonRaphsonIterate(aX, aGuessT, mX1, mX2) {
        for(var i = 0; i < 4; ++i){
            var currentSlope = getSlope(aGuessT, mX1, mX2);
            if (currentSlope === 0) return aGuessT;
            var currentX = calcBezier(aGuessT, mX1, mX2) - aX;
            aGuessT -= currentX / currentSlope;
        }
        return aGuessT;
    }
    function bezier(mX1, mY1, mX2, mY2) {
        if (!(0 <= mX1 && mX1 <= 1 && 0 <= mX2 && mX2 <= 1)) return;
        var sampleValues = new Float32Array(kSplineTableSize);
        if (mX1 !== mY1 || mX2 !== mY2) for(var i = 0; i < kSplineTableSize; ++i)sampleValues[i] = calcBezier(i * kSampleStepSize, mX1, mX2);
        function getTForX(aX) {
            var intervalStart = 0;
            var currentSample = 1;
            var lastSample = kSplineTableSize - 1;
            for(; currentSample !== lastSample && sampleValues[currentSample] <= aX; ++currentSample)intervalStart += kSampleStepSize;
            --currentSample;
            var dist = (aX - sampleValues[currentSample]) / (sampleValues[currentSample + 1] - sampleValues[currentSample]);
            var guessForT = intervalStart + dist * kSampleStepSize;
            var initialSlope = getSlope(guessForT, mX1, mX2);
            if (initialSlope >= 0.001) return newtonRaphsonIterate(aX, guessForT, mX1, mX2);
            else if (initialSlope === 0) return guessForT;
            else return binarySubdivide(aX, intervalStart, intervalStart + kSampleStepSize, mX1, mX2);
        }
        return function(x) {
            if (mX1 === mY1 && mX2 === mY2) return x;
            if (x === 0 || x === 1) return x;
            return calcBezier(getTForX(x), mY1, mY2);
        };
    }
    return bezier;
}();
var penner = function() {
    // Based on jQuery UI's implemenation of easing equations from Robert Penner (http://www.robertpenner.com/easing)
    var eases = {
        linear: function() {
            return function(t) {
                return t;
            };
        }
    };
    var functionEasings = {
        Sine: function() {
            return function(t) {
                return 1 - Math.cos(t * Math.PI / 2);
            };
        },
        Circ: function() {
            return function(t) {
                return 1 - Math.sqrt(1 - t * t);
            };
        },
        Back: function() {
            return function(t) {
                return t * t * (3 * t - 2);
            };
        },
        Bounce: function() {
            return function(t) {
                var pow2, b = 4;
                while(t < ((pow2 = Math.pow(2, --b)) - 1) / 11);
                return 1 / Math.pow(4, 3 - b) - 7.5625 * Math.pow((pow2 * 3 - 2) / 22 - t, 2);
            };
        },
        Elastic: function(amplitude, period) {
            if (amplitude === void 0) amplitude = 1;
            if (period === void 0) period = 0.5;
            var a = minMax(amplitude, 1, 10);
            var p = minMax(period, 0.1, 2);
            return function(t) {
                return t === 0 || t === 1 ? t : -a * Math.pow(2, 10 * (t - 1)) * Math.sin((t - 1 - p / (Math.PI * 2) * Math.asin(1 / a)) * (Math.PI * 2) / p);
            };
        }
    };
    var baseEasings = [
        'Quad',
        'Cubic',
        'Quart',
        'Quint',
        'Expo'
    ];
    baseEasings.forEach(function(name, i) {
        functionEasings[name] = function() {
            return function(t) {
                return Math.pow(t, i + 2);
            };
        };
    });
    Object.keys(functionEasings).forEach(function(name) {
        var easeIn = functionEasings[name];
        eases['easeIn' + name] = easeIn;
        eases['easeOut' + name] = function(a, b) {
            return function(t) {
                return 1 - easeIn(a, b)(1 - t);
            };
        };
        eases['easeInOut' + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? easeIn(a, b)(t * 2) / 2 : 1 - easeIn(a, b)(t * -2 + 2) / 2;
            };
        };
        eases['easeOutIn' + name] = function(a, b) {
            return function(t) {
                return t < 0.5 ? (1 - easeIn(a, b)(1 - t * 2)) / 2 : (easeIn(a, b)(t * 2 - 1) + 1) / 2;
            };
        };
    });
    return eases;
}();
function parseEasings(easing, duration) {
    if (is.fnc(easing)) return easing;
    var name = easing.split('(')[0];
    var ease = penner[name];
    var args = parseEasingParameters(easing);
    switch(name){
        case 'spring':
            return spring(easing, duration);
        case 'cubicBezier':
            return applyArguments(bezier, args);
        case 'steps':
            return applyArguments(steps, args);
        default:
            return applyArguments(ease, args);
    }
}
// Strings
function selectString(str) {
    try {
        var nodes = document.querySelectorAll(str);
        return nodes;
    } catch (e) {
        return;
    }
}
// Arrays
function filterArray(arr, callback) {
    var len = arr.length;
    var thisArg = arguments.length >= 2 ? arguments[1] : void 0;
    var result = [];
    for(var i = 0; i < len; i++)if (i in arr) {
        var val = arr[i];
        if (callback.call(thisArg, val, i, arr)) result.push(val);
    }
    return result;
}
function flattenArray(arr) {
    return arr.reduce(function(a, b) {
        return a.concat(is.arr(b) ? flattenArray(b) : b);
    }, []);
}
function toArray(o) {
    if (is.arr(o)) return o;
    if (is.str(o)) o = selectString(o) || o;
    if (o instanceof NodeList || o instanceof HTMLCollection) return [].slice.call(o);
    return [
        o
    ];
}
function arrayContains(arr, val) {
    return arr.some(function(a) {
        return a === val;
    });
}
// Objects
function cloneObject(o) {
    var clone = {
    };
    for(var p in o)clone[p] = o[p];
    return clone;
}
function replaceObjectProps(o1, o2) {
    var o = cloneObject(o1);
    for(var p in o1)o[p] = o2.hasOwnProperty(p) ? o2[p] : o1[p];
    return o;
}
function mergeObjects(o1, o2) {
    var o = cloneObject(o1);
    for(var p in o2)o[p] = is.und(o1[p]) ? o2[p] : o1[p];
    return o;
}
// Colors
function rgbToRgba(rgbValue) {
    var rgb = /rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(rgbValue);
    return rgb ? "rgba(" + rgb[1] + ",1)" : rgbValue;
}
function hexToRgba(hexValue) {
    var rgx = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
    var hex = hexValue.replace(rgx, function(m, r, g, b) {
        return r + r + g + g + b + b;
    });
    var rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    var r = parseInt(rgb[1], 16);
    var g = parseInt(rgb[2], 16);
    var b = parseInt(rgb[3], 16);
    return "rgba(" + r + "," + g + "," + b + ",1)";
}
function hslToRgba(hslValue) {
    var hsl = /hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(hslValue) || /hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(hslValue);
    var h = parseInt(hsl[1], 10) / 360;
    var s = parseInt(hsl[2], 10) / 100;
    var l = parseInt(hsl[3], 10) / 100;
    var a = hsl[4] || 1;
    function hue2rgb(p, q, t) {
        if (t < 0) t += 1;
        if (t > 1) t -= 1;
        if (t < 1 / 6) return p + (q - p) * 6 * t;
        if (t < 0.5) return q;
        if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
        return p;
    }
    var r, g, b;
    if (s == 0) r = g = b = l;
    else {
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
        var p = 2 * l - q;
        r = hue2rgb(p, q, h + 1 / 3);
        g = hue2rgb(p, q, h);
        b = hue2rgb(p, q, h - 1 / 3);
    }
    return "rgba(" + r * 255 + "," + g * 255 + "," + b * 255 + "," + a + ")";
}
function colorToRgb(val) {
    if (is.rgb(val)) return rgbToRgba(val);
    if (is.hex(val)) return hexToRgba(val);
    if (is.hsl(val)) return hslToRgba(val);
}
// Units
function getUnit(val) {
    var split = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(val);
    if (split) return split[1];
}
function getTransformUnit(propName) {
    if (stringContains(propName, 'translate') || propName === 'perspective') return 'px';
    if (stringContains(propName, 'rotate') || stringContains(propName, 'skew')) return 'deg';
}
// Values
function getFunctionValue(val, animatable) {
    if (!is.fnc(val)) return val;
    return val(animatable.target, animatable.id, animatable.total);
}
function getAttribute(el, prop) {
    return el.getAttribute(prop);
}
function convertPxToUnit(el, value, unit) {
    var valueUnit = getUnit(value);
    if (arrayContains([
        unit,
        'deg',
        'rad',
        'turn'
    ], valueUnit)) return value;
    var cached = cache.CSS[value + unit];
    if (!is.und(cached)) return cached;
    var baseline = 100;
    var tempEl = document.createElement(el.tagName);
    var parentEl = el.parentNode && el.parentNode !== document ? el.parentNode : document.body;
    parentEl.appendChild(tempEl);
    tempEl.style.position = 'absolute';
    tempEl.style.width = baseline + unit;
    var factor = baseline / tempEl.offsetWidth;
    parentEl.removeChild(tempEl);
    var convertedUnit = factor * parseFloat(value);
    cache.CSS[value + unit] = convertedUnit;
    return convertedUnit;
}
function getCSSValue(el, prop, unit) {
    if (prop in el.style) {
        var uppercasePropName = prop.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
        var value = el.style[prop] || getComputedStyle(el).getPropertyValue(uppercasePropName) || '0';
        return unit ? convertPxToUnit(el, value, unit) : value;
    }
}
function getAnimationType(el, prop) {
    if (is.dom(el) && !is.inp(el) && (!is.nil(getAttribute(el, prop)) || is.svg(el) && el[prop])) return 'attribute';
    if (is.dom(el) && arrayContains(validTransforms, prop)) return 'transform';
    if (is.dom(el) && prop !== 'transform' && getCSSValue(el, prop)) return 'css';
    if (el[prop] != null) return 'object';
}
function getElementTransforms(el) {
    if (!is.dom(el)) return;
    var str = el.style.transform || '';
    var reg = /(\w+)\(([^)]*)\)/g;
    var transforms = new Map();
    var m;
    while(m = reg.exec(str))transforms.set(m[1], m[2]);
    return transforms;
}
function getTransformValue(el, propName, animatable, unit) {
    var defaultVal = stringContains(propName, 'scale') ? 1 : 0 + getTransformUnit(propName);
    var value = getElementTransforms(el).get(propName) || defaultVal;
    if (animatable) {
        animatable.transforms.list.set(propName, value);
        animatable.transforms['last'] = propName;
    }
    return unit ? convertPxToUnit(el, value, unit) : value;
}
function getOriginalTargetValue(target, propName, unit, animatable) {
    switch(getAnimationType(target, propName)){
        case 'transform':
            return getTransformValue(target, propName, animatable, unit);
        case 'css':
            return getCSSValue(target, propName, unit);
        case 'attribute':
            return getAttribute(target, propName);
        default:
            return target[propName] || 0;
    }
}
function getRelativeValue(to, from) {
    var operator = /^(\*=|\+=|-=)/.exec(to);
    if (!operator) return to;
    var u = getUnit(to) || 0;
    var x = parseFloat(from);
    var y = parseFloat(to.replace(operator[0], ''));
    switch(operator[0][0]){
        case '+':
            return x + y + u;
        case '-':
            return x - y + u;
        case '*':
            return x * y + u;
    }
}
function validateValue(val, unit) {
    if (is.col(val)) return colorToRgb(val);
    if (/\s/g.test(val)) return val;
    var originalUnit = getUnit(val);
    var unitLess = originalUnit ? val.substr(0, val.length - originalUnit.length) : val;
    if (unit) return unitLess + unit;
    return unitLess;
}
// getTotalLength() equivalent for circle, rect, polyline, polygon and line shapes
// adapted from https://gist.github.com/SebLambla/3e0550c496c236709744
function getDistance(p1, p2) {
    return Math.sqrt(Math.pow(p2.x - p1.x, 2) + Math.pow(p2.y - p1.y, 2));
}
function getCircleLength(el) {
    return Math.PI * 2 * getAttribute(el, 'r');
}
function getRectLength(el) {
    return getAttribute(el, 'width') * 2 + getAttribute(el, 'height') * 2;
}
function getLineLength(el) {
    return getDistance({
        x: getAttribute(el, 'x1'),
        y: getAttribute(el, 'y1')
    }, {
        x: getAttribute(el, 'x2'),
        y: getAttribute(el, 'y2')
    });
}
function getPolylineLength(el) {
    var points = el.points;
    var totalLength = 0;
    var previousPos;
    for(var i = 0; i < points.numberOfItems; i++){
        var currentPos = points.getItem(i);
        if (i > 0) totalLength += getDistance(previousPos, currentPos);
        previousPos = currentPos;
    }
    return totalLength;
}
function getPolygonLength(el) {
    var points = el.points;
    return getPolylineLength(el) + getDistance(points.getItem(points.numberOfItems - 1), points.getItem(0));
}
// Path animation
function getTotalLength(el) {
    if (el.getTotalLength) return el.getTotalLength();
    switch(el.tagName.toLowerCase()){
        case 'circle':
            return getCircleLength(el);
        case 'rect':
            return getRectLength(el);
        case 'line':
            return getLineLength(el);
        case 'polyline':
            return getPolylineLength(el);
        case 'polygon':
            return getPolygonLength(el);
    }
}
function setDashoffset(el) {
    var pathLength = getTotalLength(el);
    el.setAttribute('stroke-dasharray', pathLength);
    return pathLength;
}
// Motion path
function getParentSvgEl(el) {
    var parentEl = el.parentNode;
    while(is.svg(parentEl)){
        if (!is.svg(parentEl.parentNode)) break;
        parentEl = parentEl.parentNode;
    }
    return parentEl;
}
function getParentSvg(pathEl, svgData) {
    var svg = svgData || {
    };
    var parentSvgEl = svg.el || getParentSvgEl(pathEl);
    var rect = parentSvgEl.getBoundingClientRect();
    var viewBoxAttr = getAttribute(parentSvgEl, 'viewBox');
    var width = rect.width;
    var height = rect.height;
    var viewBox = svg.viewBox || (viewBoxAttr ? viewBoxAttr.split(' ') : [
        0,
        0,
        width,
        height
    ]);
    return {
        el: parentSvgEl,
        viewBox: viewBox,
        x: viewBox[0] / 1,
        y: viewBox[1] / 1,
        w: width,
        h: height,
        vW: viewBox[2],
        vH: viewBox[3]
    };
}
function getPath(path, percent) {
    var pathEl = is.str(path) ? selectString(path)[0] : path;
    var p = percent || 100;
    return function(property) {
        return {
            property: property,
            el: pathEl,
            svg: getParentSvg(pathEl),
            totalLength: getTotalLength(pathEl) * (p / 100)
        };
    };
}
function getPathProgress(path, progress, isPathTargetInsideSVG) {
    function point(offset) {
        if (offset === void 0) offset = 0;
        var l = progress + offset >= 1 ? progress + offset : 0;
        return path.el.getPointAtLength(l);
    }
    var svg = getParentSvg(path.el, path.svg);
    var p = point();
    var p0 = point(-1);
    var p1 = point(1);
    var scaleX = isPathTargetInsideSVG ? 1 : svg.w / svg.vW;
    var scaleY = isPathTargetInsideSVG ? 1 : svg.h / svg.vH;
    switch(path.property){
        case 'x':
            return (p.x - svg.x) * scaleX;
        case 'y':
            return (p.y - svg.y) * scaleY;
        case 'angle':
            return Math.atan2(p1.y - p0.y, p1.x - p0.x) * 180 / Math.PI;
    }
}
// Decompose value
function decomposeValue(val, unit) {
    // const rgx = /-?\d*\.?\d+/g; // handles basic numbers
    // const rgx = /[+-]?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var rgx = /[+-]?\d*\.?\d+(?:\.\d+)?(?:[eE][+-]?\d+)?/g; // handles exponents notation
    var value = validateValue(is.pth(val) ? val.totalLength : val, unit) + '';
    return {
        original: value,
        numbers: value.match(rgx) ? value.match(rgx).map(Number) : [
            0
        ],
        strings: is.str(val) || unit ? value.split(rgx) : []
    };
}
// Animatables
function parseTargets(targets) {
    var targetsArray = targets ? flattenArray(is.arr(targets) ? targets.map(toArray) : toArray(targets)) : [];
    return filterArray(targetsArray, function(item, pos, self) {
        return self.indexOf(item) === pos;
    });
}
function getAnimatables(targets) {
    var parsed = parseTargets(targets);
    return parsed.map(function(t, i) {
        return {
            target: t,
            id: i,
            total: parsed.length,
            transforms: {
                list: getElementTransforms(t)
            }
        };
    });
}
// Properties
function normalizePropertyTweens(prop, tweenSettings) {
    var settings = cloneObject(tweenSettings);
    // Override duration if easing is a spring
    if (/^spring/.test(settings.easing)) settings.duration = spring(settings.easing);
    if (is.arr(prop)) {
        var l = prop.length;
        var isFromTo = l === 2 && !is.obj(prop[0]);
        if (!isFromTo) // Duration divided by the number of tweens
        {
            if (!is.fnc(tweenSettings.duration)) settings.duration = tweenSettings.duration / l;
        } else // Transform [from, to] values shorthand to a valid tween value
        prop = {
            value: prop
        };
    }
    var propArray = is.arr(prop) ? prop : [
        prop
    ];
    return propArray.map(function(v, i) {
        var obj = is.obj(v) && !is.pth(v) ? v : {
            value: v
        };
        // Default delay value should only be applied to the first tween
        if (is.und(obj.delay)) obj.delay = !i ? tweenSettings.delay : 0;
        // Default endDelay value should only be applied to the last tween
        if (is.und(obj.endDelay)) obj.endDelay = i === propArray.length - 1 ? tweenSettings.endDelay : 0;
        return obj;
    }).map(function(k) {
        return mergeObjects(k, settings);
    });
}
function flattenKeyframes(keyframes) {
    var propertyNames = filterArray(flattenArray(keyframes.map(function(key) {
        return Object.keys(key);
    })), function(p) {
        return is.key(p);
    }).reduce(function(a, b) {
        if (a.indexOf(b) < 0) a.push(b);
        return a;
    }, []);
    var properties = {
    };
    var loop = function(i) {
        var propName = propertyNames[i];
        properties[propName] = keyframes.map(function(key) {
            var newKey = {
            };
            for(var p in key){
                if (is.key(p)) {
                    if (p == propName) newKey.value = key[p];
                } else newKey[p] = key[p];
            }
            return newKey;
        });
    };
    for(var i = 0; i < propertyNames.length; i++)loop(i);
    return properties;
}
function getProperties(tweenSettings, params) {
    var properties = [];
    var keyframes = params.keyframes;
    if (keyframes) params = mergeObjects(flattenKeyframes(keyframes), params);
    for(var p in params)if (is.key(p)) properties.push({
        name: p,
        tweens: normalizePropertyTweens(params[p], tweenSettings)
    });
    return properties;
}
// Tweens
function normalizeTweenValues(tween, animatable) {
    var t = {
    };
    for(var p in tween){
        var value = getFunctionValue(tween[p], animatable);
        if (is.arr(value)) {
            value = value.map(function(v) {
                return getFunctionValue(v, animatable);
            });
            if (value.length === 1) value = value[0];
        }
        t[p] = value;
    }
    t.duration = parseFloat(t.duration);
    t.delay = parseFloat(t.delay);
    return t;
}
function normalizeTweens(prop, animatable) {
    var previousTween;
    return prop.tweens.map(function(t) {
        var tween = normalizeTweenValues(t, animatable);
        var tweenValue = tween.value;
        var to = is.arr(tweenValue) ? tweenValue[1] : tweenValue;
        var toUnit = getUnit(to);
        var originalValue = getOriginalTargetValue(animatable.target, prop.name, toUnit, animatable);
        var previousValue = previousTween ? previousTween.to.original : originalValue;
        var from = is.arr(tweenValue) ? tweenValue[0] : previousValue;
        var fromUnit = getUnit(from) || getUnit(originalValue);
        var unit = toUnit || fromUnit;
        if (is.und(to)) to = previousValue;
        tween.from = decomposeValue(from, unit);
        tween.to = decomposeValue(getRelativeValue(to, from), unit);
        tween.start = previousTween ? previousTween.end : 0;
        tween.end = tween.start + tween.delay + tween.duration + tween.endDelay;
        tween.easing = parseEasings(tween.easing, tween.duration);
        tween.isPath = is.pth(tweenValue);
        tween.isPathTargetInsideSVG = tween.isPath && is.svg(animatable.target);
        tween.isColor = is.col(tween.from.original);
        if (tween.isColor) tween.round = 1;
        previousTween = tween;
        return tween;
    });
}
// Tween progress
var setProgressValue = {
    css: function(t, p, v) {
        return t.style[p] = v;
    },
    attribute: function(t, p, v) {
        return t.setAttribute(p, v);
    },
    object: function(t, p, v) {
        return t[p] = v;
    },
    transform: function(t, p, v, transforms, manual) {
        transforms.list.set(p, v);
        if (p === transforms.last || manual) {
            var str = '';
            transforms.list.forEach(function(value, prop) {
                str += prop + "(" + value + ") ";
            });
            t.style.transform = str;
        }
    }
};
// Set Value helper
function setTargetsValue(targets, properties) {
    var animatables = getAnimatables(targets);
    animatables.forEach(function(animatable) {
        for(var property in properties){
            var value = getFunctionValue(properties[property], animatable);
            var target = animatable.target;
            var valueUnit = getUnit(value);
            var originalValue = getOriginalTargetValue(target, property, valueUnit, animatable);
            var unit = valueUnit || getUnit(originalValue);
            var to = getRelativeValue(validateValue(value, unit), originalValue);
            var animType = getAnimationType(target, property);
            setProgressValue[animType](target, property, to, animatable.transforms, true);
        }
    });
}
// Animations
function createAnimation(animatable, prop) {
    var animType = getAnimationType(animatable.target, prop.name);
    if (animType) {
        var tweens = normalizeTweens(prop, animatable);
        var lastTween = tweens[tweens.length - 1];
        return {
            type: animType,
            property: prop.name,
            animatable: animatable,
            tweens: tweens,
            duration: lastTween.end,
            delay: tweens[0].delay,
            endDelay: lastTween.endDelay
        };
    }
}
function getAnimations(animatables, properties) {
    return filterArray(flattenArray(animatables.map(function(animatable) {
        return properties.map(function(prop) {
            return createAnimation(animatable, prop);
        });
    })), function(a) {
        return !is.und(a);
    });
}
// Create Instance
function getInstanceTimings(animations, tweenSettings) {
    var animLength = animations.length;
    var getTlOffset = function(anim) {
        return anim.timelineOffset ? anim.timelineOffset : 0;
    };
    var timings = {
    };
    timings.duration = animLength ? Math.max.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.duration;
    })) : tweenSettings.duration;
    timings.delay = animLength ? Math.min.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.delay;
    })) : tweenSettings.delay;
    timings.endDelay = animLength ? timings.duration - Math.max.apply(Math, animations.map(function(anim) {
        return getTlOffset(anim) + anim.duration - anim.endDelay;
    })) : tweenSettings.endDelay;
    return timings;
}
var instanceID = 0;
function createNewInstance(params) {
    var instanceSettings = replaceObjectProps(defaultInstanceSettings, params);
    var tweenSettings = replaceObjectProps(defaultTweenSettings, params);
    var properties = getProperties(tweenSettings, params);
    var animatables = getAnimatables(params.targets);
    var animations = getAnimations(animatables, properties);
    var timings = getInstanceTimings(animations, tweenSettings);
    var id = instanceID;
    instanceID++;
    return mergeObjects(instanceSettings, {
        id: id,
        children: [],
        animatables: animatables,
        animations: animations,
        duration: timings.duration,
        delay: timings.delay,
        endDelay: timings.endDelay
    });
}
// Core
var activeInstances = [];
var engine = function() {
    var raf;
    function play() {
        if (!raf && (!isDocumentHidden() || !anime.suspendWhenDocumentHidden) && activeInstances.length > 0) raf = requestAnimationFrame(step);
    }
    function step(t) {
        // memo on algorithm issue:
        // dangerous iteration over mutable `activeInstances`
        // (that collection may be updated from within callbacks of `tick`-ed animation instances)
        var activeInstancesLength = activeInstances.length;
        var i = 0;
        while(i < activeInstancesLength){
            var activeInstance = activeInstances[i];
            if (!activeInstance.paused) {
                activeInstance.tick(t);
                i++;
            } else {
                activeInstances.splice(i, 1);
                activeInstancesLength--;
            }
        }
        raf = i > 0 ? requestAnimationFrame(step) : undefined;
    }
    function handleVisibilityChange() {
        if (!anime.suspendWhenDocumentHidden) return;
        if (isDocumentHidden()) // suspend ticks
        raf = cancelAnimationFrame(raf);
        else {
            // first adjust animations to consider the time that ticks were suspended
            activeInstances.forEach(function(instance) {
                return instance._onDocumentVisibility();
            });
            engine();
        }
    }
    if (typeof document !== 'undefined') document.addEventListener('visibilitychange', handleVisibilityChange);
    return play;
}();
function isDocumentHidden() {
    return !!document && document.hidden;
}
// Public Instance
function anime(params) {
    if (params === void 0) params = {
    };
    var startTime = 0, lastTime = 0, now = 0;
    var children, childrenLength = 0;
    var resolve = null;
    function makePromise(instance) {
        var promise = window.Promise && new Promise(function(_resolve) {
            return resolve = _resolve;
        });
        instance.finished = promise;
        return promise;
    }
    var instance = createNewInstance(params);
    var promise = makePromise(instance);
    function toggleInstanceDirection() {
        var direction = instance.direction;
        if (direction !== 'alternate') instance.direction = direction !== 'normal' ? 'normal' : 'reverse';
        instance.reversed = !instance.reversed;
        children.forEach(function(child) {
            return child.reversed = instance.reversed;
        });
    }
    function adjustTime(time) {
        return instance.reversed ? instance.duration - time : time;
    }
    function resetTime() {
        startTime = 0;
        lastTime = adjustTime(instance.currentTime) * (1 / anime.speed);
    }
    function seekChild(time, child) {
        if (child) child.seek(time - child.timelineOffset);
    }
    function syncInstanceChildren(time) {
        if (!instance.reversePlayback) for(var i = 0; i < childrenLength; i++)seekChild(time, children[i]);
        else for(var i$1 = childrenLength; i$1--;)seekChild(time, children[i$1]);
    }
    function setAnimationsProgress(insTime) {
        var i = 0;
        var animations = instance.animations;
        var animationsLength = animations.length;
        while(i < animationsLength){
            var anim = animations[i];
            var animatable = anim.animatable;
            var tweens = anim.tweens;
            var tweenLength = tweens.length - 1;
            var tween = tweens[tweenLength];
            // Only check for keyframes if there is more than one tween
            if (tweenLength) tween = filterArray(tweens, function(t) {
                return insTime < t.end;
            })[0] || tween;
            var elapsed = minMax(insTime - tween.start - tween.delay, 0, tween.duration) / tween.duration;
            var eased = isNaN(elapsed) ? 1 : tween.easing(elapsed);
            var strings = tween.to.strings;
            var round = tween.round;
            var numbers = [];
            var toNumbersLength = tween.to.numbers.length;
            var progress = void 0;
            for(var n = 0; n < toNumbersLength; n++){
                var value = void 0;
                var toNumber = tween.to.numbers[n];
                var fromNumber = tween.from.numbers[n] || 0;
                if (!tween.isPath) value = fromNumber + eased * (toNumber - fromNumber);
                else value = getPathProgress(tween.value, eased * toNumber, tween.isPathTargetInsideSVG);
                if (round) {
                    if (!(tween.isColor && n > 2)) value = Math.round(value * round) / round;
                }
                numbers.push(value);
            }
            // Manual Array.reduce for better performances
            var stringsLength = strings.length;
            if (!stringsLength) progress = numbers[0];
            else {
                progress = strings[0];
                for(var s = 0; s < stringsLength; s++){
                    var a = strings[s];
                    var b = strings[s + 1];
                    var n$1 = numbers[s];
                    if (!isNaN(n$1)) {
                        if (!b) progress += n$1 + ' ';
                        else progress += n$1 + b;
                    }
                }
            }
            setProgressValue[anim.type](animatable.target, anim.property, progress, animatable.transforms);
            anim.currentValue = progress;
            i++;
        }
    }
    function setCallback(cb) {
        if (instance[cb] && !instance.passThrough) instance[cb](instance);
    }
    function countIteration() {
        if (instance.remaining && instance.remaining !== true) instance.remaining--;
    }
    function setInstanceProgress(engineTime) {
        var insDuration = instance.duration;
        var insDelay = instance.delay;
        var insEndDelay = insDuration - instance.endDelay;
        var insTime = adjustTime(engineTime);
        instance.progress = minMax(insTime / insDuration * 100, 0, 100);
        instance.reversePlayback = insTime < instance.currentTime;
        if (children) syncInstanceChildren(insTime);
        if (!instance.began && instance.currentTime > 0) {
            instance.began = true;
            setCallback('begin');
        }
        if (!instance.loopBegan && instance.currentTime > 0) {
            instance.loopBegan = true;
            setCallback('loopBegin');
        }
        if (insTime <= insDelay && instance.currentTime !== 0) setAnimationsProgress(0);
        if (insTime >= insEndDelay && instance.currentTime !== insDuration || !insDuration) setAnimationsProgress(insDuration);
        if (insTime > insDelay && insTime < insEndDelay) {
            if (!instance.changeBegan) {
                instance.changeBegan = true;
                instance.changeCompleted = false;
                setCallback('changeBegin');
            }
            setCallback('change');
            setAnimationsProgress(insTime);
        } else if (instance.changeBegan) {
            instance.changeCompleted = true;
            instance.changeBegan = false;
            setCallback('changeComplete');
        }
        instance.currentTime = minMax(insTime, 0, insDuration);
        if (instance.began) setCallback('update');
        if (engineTime >= insDuration) {
            lastTime = 0;
            countIteration();
            if (!instance.remaining) {
                instance.paused = true;
                if (!instance.completed) {
                    instance.completed = true;
                    setCallback('loopComplete');
                    setCallback('complete');
                    if (!instance.passThrough && 'Promise' in window) {
                        resolve();
                        promise = makePromise(instance);
                    }
                }
            } else {
                startTime = now;
                setCallback('loopComplete');
                instance.loopBegan = false;
                if (instance.direction === 'alternate') toggleInstanceDirection();
            }
        }
    }
    instance.reset = function() {
        var direction = instance.direction;
        instance.passThrough = false;
        instance.currentTime = 0;
        instance.progress = 0;
        instance.paused = true;
        instance.began = false;
        instance.loopBegan = false;
        instance.changeBegan = false;
        instance.completed = false;
        instance.changeCompleted = false;
        instance.reversePlayback = false;
        instance.reversed = direction === 'reverse';
        instance.remaining = instance.loop;
        children = instance.children;
        childrenLength = children.length;
        for(var i = childrenLength; i--;)instance.children[i].reset();
        if (instance.reversed && instance.loop !== true || direction === 'alternate' && instance.loop === 1) instance.remaining++;
        setAnimationsProgress(instance.reversed ? instance.duration : 0);
    };
    // internal method (for engine) to adjust animation timings before restoring engine ticks (rAF)
    instance._onDocumentVisibility = resetTime;
    // Set Value helper
    instance.set = function(targets, properties) {
        setTargetsValue(targets, properties);
        return instance;
    };
    instance.tick = function(t) {
        now = t;
        if (!startTime) startTime = now;
        setInstanceProgress((now + (lastTime - startTime)) * anime.speed);
    };
    instance.seek = function(time) {
        setInstanceProgress(adjustTime(time));
    };
    instance.pause = function() {
        instance.paused = true;
        resetTime();
    };
    instance.play = function() {
        if (!instance.paused) return;
        if (instance.completed) instance.reset();
        instance.paused = false;
        activeInstances.push(instance);
        resetTime();
        engine();
    };
    instance.reverse = function() {
        toggleInstanceDirection();
        instance.completed = instance.reversed ? false : true;
        resetTime();
    };
    instance.restart = function() {
        instance.reset();
        instance.play();
    };
    instance.remove = function(targets) {
        var targetsArray = parseTargets(targets);
        removeTargetsFromInstance(targetsArray, instance);
    };
    instance.reset();
    if (instance.autoplay) instance.play();
    return instance;
}
// Remove targets from animation
function removeTargetsFromAnimations(targetsArray, animations) {
    for(var a = animations.length; a--;)if (arrayContains(targetsArray, animations[a].animatable.target)) animations.splice(a, 1);
}
function removeTargetsFromInstance(targetsArray, instance) {
    var animations = instance.animations;
    var children = instance.children;
    removeTargetsFromAnimations(targetsArray, animations);
    for(var c = children.length; c--;){
        var child = children[c];
        var childAnimations = child.animations;
        removeTargetsFromAnimations(targetsArray, childAnimations);
        if (!childAnimations.length && !child.children.length) children.splice(c, 1);
    }
    if (!animations.length && !children.length) instance.pause();
}
function removeTargetsFromActiveInstances(targets) {
    var targetsArray = parseTargets(targets);
    for(var i = activeInstances.length; i--;){
        var instance = activeInstances[i];
        removeTargetsFromInstance(targetsArray, instance);
    }
}
// Stagger helpers
function stagger(val, params) {
    if (params === void 0) params = {
    };
    var direction = params.direction || 'normal';
    var easing = params.easing ? parseEasings(params.easing) : null;
    var grid = params.grid;
    var axis = params.axis;
    var fromIndex = params.from || 0;
    var fromFirst = fromIndex === 'first';
    var fromCenter = fromIndex === 'center';
    var fromLast = fromIndex === 'last';
    var isRange = is.arr(val);
    var val1 = isRange ? parseFloat(val[0]) : parseFloat(val);
    var val2 = isRange ? parseFloat(val[1]) : 0;
    var unit = getUnit(isRange ? val[1] : val) || 0;
    var start = params.start || 0 + (isRange ? val1 : 0);
    var values = [];
    var maxValue = 0;
    return function(el, i, t) {
        if (fromFirst) fromIndex = 0;
        if (fromCenter) fromIndex = (t - 1) / 2;
        if (fromLast) fromIndex = t - 1;
        if (!values.length) {
            for(var index = 0; index < t; index++){
                if (!grid) values.push(Math.abs(fromIndex - index));
                else {
                    var fromX = !fromCenter ? fromIndex % grid[0] : (grid[0] - 1) / 2;
                    var fromY = !fromCenter ? Math.floor(fromIndex / grid[0]) : (grid[1] - 1) / 2;
                    var toX = index % grid[0];
                    var toY = Math.floor(index / grid[0]);
                    var distanceX = fromX - toX;
                    var distanceY = fromY - toY;
                    var value = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
                    if (axis === 'x') value = -distanceX;
                    if (axis === 'y') value = -distanceY;
                    values.push(value);
                }
                maxValue = Math.max.apply(Math, values);
            }
            if (easing) values = values.map(function(val) {
                return easing(val / maxValue) * maxValue;
            });
            if (direction === 'reverse') values = values.map(function(val) {
                return axis ? val < 0 ? val * -1 : -val : Math.abs(maxValue - val);
            });
        }
        var spacing = isRange ? (val2 - val1) / maxValue : val1;
        return start + spacing * (Math.round(values[i] * 100) / 100) + unit;
    };
}
// Timeline
function timeline(params) {
    if (params === void 0) params = {
    };
    var tl = anime(params);
    tl.duration = 0;
    tl.add = function(instanceParams, timelineOffset) {
        var tlIndex = activeInstances.indexOf(tl);
        var children = tl.children;
        if (tlIndex > -1) activeInstances.splice(tlIndex, 1);
        function passThrough(ins) {
            ins.passThrough = true;
        }
        for(var i = 0; i < children.length; i++)passThrough(children[i]);
        var insParams = mergeObjects(instanceParams, replaceObjectProps(defaultTweenSettings, params));
        insParams.targets = insParams.targets || params.targets;
        var tlDuration = tl.duration;
        insParams.autoplay = false;
        insParams.direction = tl.direction;
        insParams.timelineOffset = is.und(timelineOffset) ? tlDuration : getRelativeValue(timelineOffset, tlDuration);
        passThrough(tl);
        tl.seek(insParams.timelineOffset);
        var ins = anime(insParams);
        passThrough(ins);
        children.push(ins);
        var timings = getInstanceTimings(children, params);
        tl.delay = timings.delay;
        tl.endDelay = timings.endDelay;
        tl.duration = timings.duration;
        tl.seek(0);
        tl.reset();
        if (tl.autoplay) tl.play();
        return tl;
    };
    return tl;
}
anime.version = '3.2.1';
anime.speed = 1;
// TODO:#review: naming, documentation
anime.suspendWhenDocumentHidden = true;
anime.running = activeInstances;
anime.remove = removeTargetsFromActiveInstances;
anime.get = getOriginalTargetValue;
anime.set = setTargetsValue;
anime.convertPx = convertPxToUnit;
anime.path = getPath;
anime.setDashoffset = setDashoffset;
anime.stagger = stagger;
anime.timeline = timeline;
anime.easing = parseEasings;
anime.penner = penner;
anime.random = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};
exports.default = anime;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"aKONg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _nav = require("./Nav");
var _navDefault = parcelHelpers.interopDefault(_nav);
var _cursor = require("./cursor");
var _cursorDefault = parcelHelpers.interopDefault(_cursor);
var _footer = require("./Footer");
var _footerDefault = parcelHelpers.interopDefault(_footer);
var _loader = require("./Loader");
var _loaderDefault = parcelHelpers.interopDefault(_loader);
var _appJs = require("../../app.js");
var _mypicJpg = require("../assets/mypic.jpg");
var _mypicJpgDefault = parcelHelpers.interopDefault(_mypicJpg);
var _aboutToml = require("../assets/text/about.toml");
var _commonToml = require("../locales/common.toml");
var _commonTomlDefault = parcelHelpers.interopDefault(_commonToml);
let scroll;
// const title = about.title
const paragraphs = _aboutToml.about.paragraphs;
module.exports = {
    oninit (vnode) {
        vnode.state.lang = localStorage.lang;
    },
    async oncreate (vnode) {
        // select correct language
        if (vnode.state.lang) {
            const opt = document.querySelector(`option[value=${vnode.state.lang}]`);
            opt.selected = true;
        }
        // initialize smoothscroll
        //
        const loader = await _loaderDefault.default(vnode, scroll);
        scroll = loader.scroll;
        document.querySelector(".footer-nav .btt").onclick = ()=>{
            scroll.scrollTo("top");
        };
        if (!_appJs.cursor) new _cursorDefault.default(document.querySelector("svg.cursor"));
    },
    onremove () {
        scroll.destroy();
    },
    view (vnode) {
        vnode.state.title = _commonTomlDefault.default[localStorage.lang].about.title;
        // check width > 768px to apply sticky to picture
        vnode.state.width = window.innerWidth;
        let sticky = vnode.state.width > 768 ? "" : "";
        const lang = vnode.state.lang;
        return _mithrilDefault.default(".about-page-wrapper[data-scroll-container]", _mithrilDefault.default("#main", _mithrilDefault.default(_navDefault.default), _mithrilDefault.default(".content#content[data-scroll]", [
            _mithrilDefault.default(`.picture-wrapper[data-scroll]${sticky}[data-scroll-target=#content]`, _mithrilDefault.default(`img[src=${_mypicJpgDefault.default}]`)),
            _mithrilDefault.default("p.text-wrapper[data-scroll]", _mithrilDefault.default(".title-wrapper[data-scroll]", _mithrilDefault.default("section.content__item.content__item--home.content__item--current[data-scroll][data-scroll-speed=0]", _mithrilDefault.default(".paragraph-wrapper", _mithrilDefault.default(".content__paragraph[data-scroll]", vnode.state.title)))), _mithrilDefault.default(".paragraph-wrapper", paragraphs.map((p)=>{
                return _mithrilDefault.default(".text[data-scroll][data-scroll-speed=3]", _mithrilDefault.default("p", p));
            }))), 
        ])), _mithrilDefault.default(_footerDefault.default));
    }
};

},{"mithril":"a7UJj","./Nav":"teRhW","../../app.js":"lzYRN","../assets/text/about.toml":"fwl0y","./cursor":"gc278","./Footer":"5Grlo","./Loader":"7UblQ","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../assets/mypic.jpg":"8736H","../locales/common.toml":"gpEUq"}],"teRhW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _commonToml = require("../locales/common.toml");
var _commonTomlDefault = parcelHelpers.interopDefault(_commonToml);
var _appJs = require("../../app.js");
function handleLang(lang) {
    let preferredLang = null;
    if (lang) preferredLang = lang;
    else if (localStorage.lang && lang) preferredLang = lang;
    else {
        let language = window.navigator.languages.filter((l)=>{
            l.slice(2);
            if (l === "en") return true;
            else if (l === "ru") return true;
        })[0];
        if (language.length === 0) language = "en";
        preferredLang = language;
    }
    if (localStorage.lang != preferredLang) localStorage.lang = preferredLang;
}
module.exports = {
    oncreate () {
        if (!localStorage.lang) handleLang(null);
    },
    view (vnode) {
        vnode.state.lang = localStorage.lang;
        handleLang(localStorage.lang);
        const { me , works , about  } = _commonTomlDefault.default[vnode.state.lang].nav;
        return _mithrilDefault.default('.nav.space-between#nav[data-scroll][data-scroll-sticky][data-scroll-target=#main]', [
            _mithrilDefault.default('.link-wrapper', _mithrilDefault.default('a.home-link.underlined', {
                onclick () {
                    if (location.hash != '#!/') {
                        _appJs.transition();
                        setTimeout(()=>{
                            _mithrilDefault.default.route.set('/');
                        }, 1000);
                    }
                }
            }, me)),
            _mithrilDefault.default('.link-wrapper', _mithrilDefault.default('a.works-link.underlined', {
                onclick () {
                    if (location.hash != '#!/works') {
                        _appJs.transition();
                        setTimeout(()=>{
                            _mithrilDefault.default.route.set('/works');
                        }, 1000);
                    }
                }
            }, works)),
            _mithrilDefault.default('.link-wrapper', _mithrilDefault.default('a.about-link.underlined', {
                onclick () {
                    if (location.hash != '#!/about') {
                        _appJs.transition();
                        setTimeout(()=>{
                            _mithrilDefault.default.route.set('/about');
                        }, 1000);
                    }
                }
            }, about)),
            _mithrilDefault.default('.link-wrapper', [
                _mithrilDefault.default("label[for='lang']", "lang: "),
                _mithrilDefault.default("select[name='lang'][id='lang'][form='carform']", {
                    onchange (e) {
                        handleLang(e.target.value);
                        vnode.state.lang = e.target.value;
                        document.location.reload();
                    }
                }, [
                    _mithrilDefault.default("option[value='en']", "en"),
                    _mithrilDefault.default("option[value='ru']", "ru")
                ])
            ]), 
        ]);
    }
};

},{"mithril":"a7UJj","../../app.js":"lzYRN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV","../locales/common.toml":"gpEUq"}],"gpEUq":[function(require,module,exports) {
module.exports = {
    "en": {
        "about": {
            "title": "About Me",
            "paragraphs": [
                "Welcome to my website! My name is Elena, a Russian Girl who loves to capture love through pictures",
                "I love to eat, sleep and pet my cats!"
            ]
        },
        "nav": {
            "me": "Elena Kustova",
            "works": "works",
            "about": "about"
        }
    },
    "ru": {
        "about": {
            "title": "Pro Menya",
            "paragraphs": [
                "Welcome to my website! My name is Elena, a Russian Girl who loves to capture love through pictures",
                "I love to eat, sleep and pet my cats!"
            ]
        },
        "nav": {
            "me": "Elena Kustova",
            "works": "raboty",
            "about": "pro menya"
        }
    }
};

},{}],"fwl0y":[function(require,module,exports) {
module.exports = {
    "about": {
        "title": "About Me",
        "paragraphs": [
            "Welcome to my website! My name is Elena, a Russian Girl who loves to capture love through pictures",
            "I love to eat, sleep and pet my cats!"
        ]
    }
};

},{}],"5Grlo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _app = require("../../app");
let vkSvg = {
    view () {
        return _mithrilDefault.default("svg[version='1.1'][id='Layer_1'][xmlns='http://www.w3.org/2000/svg'][xmlns:xlink='http://www.w3.org/1999/xlink'][x='0px'][y='0px'][viewBox='0 0 304.36 304.36'][xml:space='preserve']", {
            "style": {
                "enable-background": "new 0 0 304.36 304.36"
            }
        }, [
            _mithrilDefault.default("g[id='XMLID_1_']", _mithrilDefault.default("path[id='XMLID_807_'][d='M261.945,175.576c10.096,9.857,20.752,19.131,29.807,29.982 c4,4.822,7.787,9.798,10.684,15.394c4.105,7.955,0.387,16.709-6.746,17.184l-44.34-0.02c-11.436,0.949-20.559-3.655-28.23-11.474 c-6.139-6.253-11.824-12.908-17.727-19.372c-2.42-2.642-4.953-5.128-7.979-7.093c-6.053-3.929-11.307-2.726-14.766,3.587 c-3.523,6.421-4.322,13.531-4.668,20.687c-0.475,10.441-3.631,13.186-14.119,13.664c-22.414,1.057-43.686-2.334-63.447-13.641 c-17.422-9.968-30.932-24.04-42.691-39.971C34.828,153.482,17.295,119.395,1.537,84.353C-2.01,76.458,0.584,72.22,9.295,72.07 c14.465-0.281,28.928-0.261,43.41-0.02c5.879,0.086,9.771,3.458,12.041,9.012c7.826,19.243,17.402,37.551,29.422,54.521 c3.201,4.518,6.465,9.036,11.113,12.216c5.142,3.521,9.057,2.354,11.476-3.374c1.535-3.632,2.207-7.544,2.553-11.434 c1.146-13.383,1.297-26.743-0.713-40.079c-1.234-8.323-5.922-13.711-14.227-15.286c-4.238-0.803-3.607-2.38-1.555-4.799 c3.564-4.172,6.916-6.769,13.598-6.769h50.111c7.889,1.557,9.641,5.101,10.721,13.039l0.043,55.663 c-0.086,3.073,1.535,12.192,7.07,14.226c4.43,1.448,7.35-2.096,10.008-4.905c11.998-12.734,20.561-27.783,28.211-43.366 c3.395-6.852,6.314-13.968,9.143-21.078c2.096-5.276,5.385-7.872,11.328-7.757l48.229,0.043c1.43,0,2.877,0.021,4.262,0.258 c8.127,1.385,10.354,4.881,7.844,12.817c-3.955,12.451-11.65,22.827-19.174,33.251c-8.043,11.129-16.645,21.877-24.621,33.072 C252.26,161.544,252.842,166.697,261.945,175.576L261.945,175.576z M261.945,175.576']", {
                "style": {
                    "fill-rule": "evenodd",
                    "clip-rule": "evenodd"
                }
            })),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("g"),
            _mithrilDefault.default("style[xmlns='http://www.w3.org/1999/xhtml'][type='text/css']")
        ]);
    }
};
module.exports = {
    routes: [
        'home',
        'works',
        'about'
    ],
    oncreate () {
        let links = document.querySelectorAll('.footer-nav a');
    // links.forEach(a => {
    // a.addEventListener('mouseenter', () => {
    // if (a.classList.contains('is-inview')) {
    // links.forEach(link => {
    // if (link != a) {
    // link.style.opacity = 0.3
    // }
    // })
    // }
    // })
    // a.addEventListener('mouseleave', () => {
    // links.forEach(link => {
    // link.style.opacity = ''
    // })
    // })
    // })
    },
    view (vnode) {
        return _mithrilDefault.default('.footer[data-scroll]', _mithrilDefault.default('.location.flex-column[data-scroll][data-scroll-speed=2]', _mithrilDefault.default('.name', 'Elena Kustova'), _mithrilDefault.default('.place', 'Perugia - Italy')), _mithrilDefault.default('.contacts.flex[data-scroll][data-scroll-speed=1]', _mithrilDefault.default('.link-mail', _mithrilDefault.default('.link-mail-text', 'Contact me at: '), _mithrilDefault.default('a.mail[href=mailto:kuslena@rambler.ru]', 'kuslena@rambler.ru')), _mithrilDefault.default('.socials', _mithrilDefault.default('.socials-title', 'find me also on:'), _mithrilDefault.default('.links', _mithrilDefault.default('a.insta-link.flex[href=https://instagram.com/misskustova][target=_blank]', _mithrilDefault.default("svg.css-i6dzq1[viewBox='0 0 24 24'][width='24'][height='24'][stroke='currentColor'][stroke-width='2'][fill='none'][stroke-linecap='round'][stroke-linejoin='round']", [
            _mithrilDefault.default("rect[x='2'][y='2'][width='20'][height='20'][rx='5'][ry='5']"),
            _mithrilDefault.default("path[d='M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z']"),
            _mithrilDefault.default("line[x1='17.5'][y1='6.5'][x2='17.51'][y2='6.5']")
        ]), _mithrilDefault.default('.link-text.insta-link-text', ' @misskustova')), _mithrilDefault.default('a.vk-link.flex[href=https://vk.com/id17282149][target=_blank]', _mithrilDefault.default(vkSvg), _mithrilDefault.default('.link-text.vk-link-text', ' Lena Kustova'))))), _mithrilDefault.default(`.footer-nav.flex-column[data-scroll][data-scroll-speed=1][data-scroll-call=hide]`, {
            oncreate (vnode) {
                vnode.dom.addEventListener('hide', ()=>{
                    console.log('hiding nav');
                });
            }
        }, _mithrilDefault.default('a.btt[data-scroll]', _mithrilDefault.default('span', {
            onclick () {
                _mithrilDefault.default.redraw();
            }
        }, 'back to top')), vnode.state.routes.map((route)=>{
            if (location.hash != `#!/${route}`) return _mithrilDefault.default(`a.${route}[data-scroll]`, {
                onclick () {
                    if (location.hash != `#!/${route}`) {
                        _app.transition();
                        setTimeout(()=>{
                            _mithrilDefault.default.route.set(`/${route}`);
                        }, 1000);
                    }
                }
            }, _mithrilDefault.default('span', route));
        })), _mithrilDefault.default('.credits[data-scroll][data-scroll-speed=2]', _mithrilDefault.default('span', 'website credits: '), _mithrilDefault.default('span', 'Nasir Taov')));
    }
};

},{"mithril":"a7UJj","../../app":"lzYRN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"7UblQ":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _imagesloaded = require("imagesloaded");
var _imagesloadedDefault = parcelHelpers.interopDefault(_imagesloaded);
var _locomotiveScroll = require("locomotive-scroll");
var _locomotiveScrollDefault = parcelHelpers.interopDefault(_locomotiveScroll);
var _jpg = require("../assets/img/*/*.jpg");
var _jpgDefault = parcelHelpers.interopDefault(_jpg);
let allSources = [], scroll;
for(const key in _jpgDefault.default)//array of images
allSources = allSources.concat(Object.values(_jpgDefault.default[key]));
let allImages = allSources.map((src)=>{
    let img = document.createElement("img");
    img.src = src;
    return img;
});
function Loader(vnode, scroll, mult) {
    let imagesPromise = new Promise((resolve)=>{
        let images = _imagesloadedDefault.default(allImages);
        if (scroll) scroll.destroy();
        images.on("progress", (instance)=>{
            const len = instance.elements.length;
            const count = instance.progressedCount;
            const perc = Math.round(count * 100 / len);
            document.querySelector(".loader__text").textContent = `${perc}%`;
        });
        images.on("done", ()=>{
            const loader = document.querySelector(".loader");
            loader.classList.add("loaded");
            scroll = new _locomotiveScrollDefault.default({
                el: document.querySelector("main > div"),
                multiplier: mult ? mult : 1,
                smooth: true,
                smartphone: {
                    smooth: true
                }
            });
            scroll.on("scroll", (args)=>{
                const { limit  } = args;
                vnode.state.scrolled = Math.round(args.scroll.y * 100 / limit.y);
            // if (vnode.state.scrolled > 50) {
            // scroll.update();
            // }
            });
            scroll.update();
            return resolve({
                images,
                scroll
            });
        });
    });
    return imagesPromise;
}
exports.default = Loader;

},{"imagesloaded":"uXwLn","locomotive-scroll":"aJY2w","../assets/img/*/*.jpg":"adFF7","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"8736H":[function(require,module,exports) {
module.exports = require('./helpers/bundle-url').getBundleURL('8wTHq') + "mypic.afb71688.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"chiK4"}],"i3rOK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _locomotiveScroll = require("locomotive-scroll");
var _locomotiveScrollDefault = parcelHelpers.interopDefault(_locomotiveScroll);
var _animejs = require("animejs");
var _animejsDefault = parcelHelpers.interopDefault(_animejs);
var _cursor = require("./cursor");
var _cursorDefault = parcelHelpers.interopDefault(_cursor);
var _appJs = require("../../app.js");
var _utils = require("./utils");
var _jpg = require("../assets/img/*/*.jpg");
var _jpgDefault = parcelHelpers.interopDefault(_jpg);
var _nav = require("./Nav");
var _navDefault = parcelHelpers.interopDefault(_nav);
var _loader = require("./Loader");
var _loaderDefault = parcelHelpers.interopDefault(_loader);
var _menuItem = require("./menuItem");
var _menuItemDefault = parcelHelpers.interopDefault(_menuItem);
let projects = {
};
for(const key in _jpgDefault.default)projects[key] = Object.values(_jpgDefault.default[key]);
let scroll;
class Works {
    constructor(){
        this.menuItems = Object.keys(projects);
        // menu item properties that will animate as we move the mouse around the menu
        // we will be using interpolation to achieve smooth animations.
        // the “previous” and “current” values are the values to interpolate.
        // the value applied to the element, this case the image element (this.DOM.reveal) will be a value between these two values at a specific increment.
        // the amt is the amount to interpolate.
        this.animatableProperties = {
            // translationX
            tx: {
                previous: 0,
                current: 0,
                amt: 0.08
            },
            // translationY
            ty: {
                previous: 0,
                current: 0,
                amt: 0.08
            },
            // Rotation angle
            rotation: {
                previous: 0,
                current: 0,
                amt: 0.08
            },
            // CSS filter (blur) value
            blur: {
                previous: 0,
                current: 0,
                amt: 0.08
            }
        };
    // show the menu items (initial animation where each menu item gets revealed)
    }
    // initial animation for revealing the menu items
    showMenuItems() {
        _animejsDefault.default({
            targets: ".menu__item-textinner",
            translateY: [
                "100%",
                "0%"
            ],
            easing: "easeInOutQuad",
            duration: 500,
            delay: _animejsDefault.default.stagger(70)
        });
    }
    async oncreate(vnode) {
        if (!_appJs.cursor) new _cursorDefault.default(document.querySelector("svg.cursor"));
        //show menu items
        const loader = await _loaderDefault.default(vnode);
        scroll = loader.scroll;
        this.showMenuItems();
    }
    onbeforeremove() {
        scroll.destroy();
        _animejsDefault.default({
            targets: ".menu__item-textinner",
            translateY: [
                0,
                100
            ],
            easing: "easeInOutQuad",
            duration: 300,
            delay: _animejsDefault.default.stagger(30)
        });
    }
    view() {
        return _mithrilDefault.default(".works-page-wrapper[data-scroll-container]", _mithrilDefault.default("#main", _mithrilDefault.default(_navDefault.default), _mithrilDefault.default(".menu-items-wrapper", this.menuItems.map((item, index)=>{
            return _mithrilDefault.default(_menuItemDefault.default, {
                item,
                index,
                animProps: this.animatableProperties,
                url: projects[item][0]
            });
        })), _mithrilDefault.default(".divider[data-scroll][data-scroll-repeat][style=padding-bottom: 4rem;]", _mithrilDefault.default("span.divider-text", "and more to come!"))));
    }
}
exports.default = Works;

},{"mithril":"a7UJj","locomotive-scroll":"aJY2w","animejs":"bfYip","./cursor":"gc278","../../app.js":"lzYRN","./utils":"fIYUT","../assets/img/*/*.jpg":"2Q4PR","./Nav":"teRhW","./Loader":"7UblQ","./menuItem":"dsA8U","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"2Q4PR":[function(require,module,exports) {
const _temp0 = require("../Andrea/DSC01328.jpg");
const _temp1 = require("../Andrea/DSC01521.jpg");
const _temp2 = require("../Andrea/DSC01530.jpg");
const _temp3 = require("../Andrea/pic_10.jpg");
const _temp4 = require("../Andrea/pic_11.jpg");
const _temp5 = require("../Andrea/pic_12.jpg");
const _temp6 = require("../Andrea/pic_13.jpg");
const _temp7 = require("../Andrea/pic_14.jpg");
const _temp8 = require("../Andrea/pic_15.jpg");
const _temp9 = require("../Andrea/pic_9.jpg");
const _temp10 = require("../Anastasia/DSC01812.jpg");
const _temp11 = require("../Anastasia/DSC01910.jpg");
const _temp12 = require("../Anastasia/DSC02013.jpg");
const _temp13 = require("../Anastasia/DSC02154.jpg");
const _temp14 = require("../Anastasia/DSC02205.jpg");
const _temp15 = require("../Anastasia/DSC02276.jpg");
const _temp16 = require("../Anastasia/DSC02278.jpg");
const _temp17 = require("../Anastasia/NastiaDavletshina1.jpg");
const _temp18 = require("../Arianna/pic_0.jpg");
const _temp19 = require("../Arianna/pic_1.jpg");
const _temp20 = require("../Arianna/pic_10.jpg");
const _temp21 = require("../Arianna/pic_11.jpg");
const _temp22 = require("../Arianna/pic_2.jpg");
const _temp23 = require("../Arianna/pic_3.jpg");
const _temp24 = require("../Arianna/pic_4.jpg");
const _temp25 = require("../Arianna/pic_5.jpg");
const _temp26 = require("../Arianna/pic_6.jpg");
const _temp27 = require("../Arianna/pic_7.jpg");
const _temp28 = require("../Arianna/pic_8.jpg");
const _temp29 = require("../Arianna/pic_9.jpg");
const _temp30 = require("../Inganno/1.jpg");
const _temp31 = require("../Inganno/2.jpg");
const _temp32 = require("../Inganno/3.jpg");
const _temp33 = require("../Inganno/4.jpg");
const _temp34 = require("../Inganno/5.jpg");
const _temp35 = require("../Inganno/6.jpg");
const _temp36 = require("../Inganno/7.jpg");
const _temp37 = require("../Inganno/8.jpg");
const _temp38 = require("../Inganno/9.jpg");
const _temp39 = require("../Inganno/10.jpg");
const _temp40 = require("../Katia/pic_0.jpg");
const _temp41 = require("../Katia/pic_1.jpg");
const _temp42 = require("../Katia/pic_2.jpg");
const _temp43 = require("../Katia/pic_3.jpg");
const _temp44 = require("../Katia/pic_4.jpg");
const _temp45 = require("../Katia/pic_5.jpg");
const _temp46 = require("../Katia/pic_6.jpg");
const _temp47 = require("../Katia/pic_7.jpg");
const _temp48 = require("../Matteo/pic_0.jpg");
const _temp49 = require("../Matteo/pic_1.jpg");
const _temp50 = require("../Matteo/pic_2.jpg");
const _temp51 = require("../Matteo/pic_3.jpg");
const _temp52 = require("../Matteo/pic_4.jpg");
const _temp53 = require("../Matteo/pic_5.jpg");
const _temp54 = require("../Matteo/pic_6.jpg");
const _temp55 = require("../Matteo/pic_7.jpg");
const _temp56 = require("../Matteo/pic_8.jpg");
const _temp57 = require("../Matteo/pic_9.jpg");
const _temp58 = require("../Nastia/DSC07826.jpg");
const _temp59 = require("../Nastia/DSC07836.jpg");
const _temp60 = require("../Nastia/DSC08026.jpg");
const _temp61 = require("../Nastia/DSC08077.jpg");
const _temp62 = require("../Nastia/DSC08167.jpg");
const _temp63 = require("../Nastia/DSC08191.jpg");
const _temp64 = require("../Nastia/DSC08386.jpg");
const _temp65 = require("../Roberta/pic_0.jpg");
const _temp66 = require("../Roberta/pic_1.jpg");
const _temp67 = require("../Roberta/pic_10.jpg");
const _temp68 = require("../Roberta/pic_11.jpg");
const _temp69 = require("../Roberta/pic_12.jpg");
const _temp70 = require("../Roberta/pic_13.jpg");
const _temp71 = require("../Roberta/pic_14.jpg");
const _temp72 = require("../Roberta/pic_2.jpg");
const _temp73 = require("../Roberta/pic_3.jpg");
const _temp74 = require("../Roberta/pic_4.jpg");
const _temp75 = require("../Roberta/pic_5.jpg");
const _temp76 = require("../Roberta/pic_6.jpg");
const _temp77 = require("../Roberta/pic_7.jpg");
const _temp78 = require("../Roberta/pic_8.jpg");
const _temp79 = require("../Roberta/pic_9.jpg");
const _temp80 = require("../Valeria/239645708_913348032586675_3526176268626277941_n.jpg");
const _temp81 = require("../Valeria/239858938_422969359157922_8304902028896030195_n.jpg");
const _temp82 = require("../Valeria/240108310_221163499954226_6077238410015003289_n.jpg");
const _temp83 = require("../Valeria/240108522_986136085294928_4307106541389037811_n.jpg");
const _temp84 = require("../Valeria/240110620_4776111199083747_2956117918730996962_n.jpg");
const _temp85 = require("../Valeria/240453595_245641064230822_139858117910837704_n.jpg");
module.exports = {
    "Andrea": {
        "DSC01328": _temp0,
        "DSC01521": _temp1,
        "DSC01530": _temp2,
        "pic_10": _temp3,
        "pic_11": _temp4,
        "pic_12": _temp5,
        "pic_13": _temp6,
        "pic_14": _temp7,
        "pic_15": _temp8,
        "pic_9": _temp9
    },
    "Anastasia": {
        "DSC01812": _temp10,
        "DSC01910": _temp11,
        "DSC02013": _temp12,
        "DSC02154": _temp13,
        "DSC02205": _temp14,
        "DSC02276": _temp15,
        "DSC02278": _temp16,
        "NastiaDavletshina1": _temp17
    },
    "Arianna": {
        "pic_0": _temp18,
        "pic_1": _temp19,
        "pic_10": _temp20,
        "pic_11": _temp21,
        "pic_2": _temp22,
        "pic_3": _temp23,
        "pic_4": _temp24,
        "pic_5": _temp25,
        "pic_6": _temp26,
        "pic_7": _temp27,
        "pic_8": _temp28,
        "pic_9": _temp29
    },
    "Inganno": {
        "1": _temp30,
        "2": _temp31,
        "3": _temp32,
        "4": _temp33,
        "5": _temp34,
        "6": _temp35,
        "7": _temp36,
        "8": _temp37,
        "9": _temp38,
        "10": _temp39
    },
    "Katia": {
        "pic_0": _temp40,
        "pic_1": _temp41,
        "pic_2": _temp42,
        "pic_3": _temp43,
        "pic_4": _temp44,
        "pic_5": _temp45,
        "pic_6": _temp46,
        "pic_7": _temp47
    },
    "Matteo": {
        "pic_0": _temp48,
        "pic_1": _temp49,
        "pic_2": _temp50,
        "pic_3": _temp51,
        "pic_4": _temp52,
        "pic_5": _temp53,
        "pic_6": _temp54,
        "pic_7": _temp55,
        "pic_8": _temp56,
        "pic_9": _temp57
    },
    "Nastia": {
        "DSC07826": _temp58,
        "DSC07836": _temp59,
        "DSC08026": _temp60,
        "DSC08077": _temp61,
        "DSC08167": _temp62,
        "DSC08191": _temp63,
        "DSC08386": _temp64
    },
    "Roberta": {
        "pic_0": _temp65,
        "pic_1": _temp66,
        "pic_10": _temp67,
        "pic_11": _temp68,
        "pic_12": _temp69,
        "pic_13": _temp70,
        "pic_14": _temp71,
        "pic_2": _temp72,
        "pic_3": _temp73,
        "pic_4": _temp74,
        "pic_5": _temp75,
        "pic_6": _temp76,
        "pic_7": _temp77,
        "pic_8": _temp78,
        "pic_9": _temp79
    },
    "Valeria": {
        "239645708_913348032586675_3526176268626277941_n": _temp80,
        "239858938_422969359157922_8304902028896030195_n": _temp81,
        "240108310_221163499954226_6077238410015003289_n": _temp82,
        "240108522_986136085294928_4307106541389037811_n": _temp83,
        "240110620_4776111199083747_2956117918730996962_n": _temp84,
        "240453595_245641064230822_139858117910837704_n": _temp85
    }
};

},{"../Andrea/DSC01328.jpg":"hRoJD","../Andrea/DSC01521.jpg":"kDciS","../Andrea/DSC01530.jpg":"kPZ4W","../Andrea/pic_10.jpg":"cHmim","../Andrea/pic_11.jpg":"hVcrc","../Andrea/pic_12.jpg":"jKlhJ","../Andrea/pic_13.jpg":"jtYtg","../Andrea/pic_14.jpg":"2UESJ","../Andrea/pic_15.jpg":"922HP","../Andrea/pic_9.jpg":"jSfp4","../Anastasia/DSC01812.jpg":"27hhp","../Anastasia/DSC01910.jpg":"kL9Y3","../Anastasia/DSC02013.jpg":"kRGo3","../Anastasia/DSC02154.jpg":"lONke","../Anastasia/DSC02205.jpg":"dnibK","../Anastasia/DSC02276.jpg":"kYH8c","../Anastasia/DSC02278.jpg":"iDyhP","../Anastasia/NastiaDavletshina1.jpg":"9XNPE","../Arianna/pic_0.jpg":"auLbh","../Arianna/pic_1.jpg":"iAfPt","../Arianna/pic_10.jpg":"aQDpZ","../Arianna/pic_11.jpg":"R6BUR","../Arianna/pic_2.jpg":"3frM6","../Arianna/pic_3.jpg":"efIZZ","../Arianna/pic_4.jpg":"bFr8T","../Arianna/pic_5.jpg":"kk6oK","../Arianna/pic_6.jpg":"jOlOW","../Arianna/pic_7.jpg":"jRqb2","../Arianna/pic_8.jpg":"3ASMb","../Arianna/pic_9.jpg":"9xrLx","../Inganno/1.jpg":"cXFMX","../Inganno/2.jpg":"eYjAi","../Inganno/3.jpg":"dzvRw","../Inganno/4.jpg":"25uYQ","../Inganno/5.jpg":"6xnJd","../Inganno/6.jpg":"4i2K2","../Inganno/7.jpg":"8KeWv","../Inganno/8.jpg":"8BTVQ","../Inganno/9.jpg":"75YVs","../Inganno/10.jpg":"hH93w","../Katia/pic_0.jpg":"brCd4","../Katia/pic_1.jpg":"5k64l","../Katia/pic_2.jpg":"efIsy","../Katia/pic_3.jpg":"8GdmZ","../Katia/pic_4.jpg":"fJf2z","../Katia/pic_5.jpg":"6h9cv","../Katia/pic_6.jpg":"alue5","../Katia/pic_7.jpg":"e6M8v","../Matteo/pic_0.jpg":"gZNPp","../Matteo/pic_1.jpg":"8tQWi","../Matteo/pic_2.jpg":"cDanF","../Matteo/pic_3.jpg":"6knsV","../Matteo/pic_4.jpg":"gwu8n","../Matteo/pic_5.jpg":"fVWwX","../Matteo/pic_6.jpg":"9plNI","../Matteo/pic_7.jpg":"aLqGh","../Matteo/pic_8.jpg":"031sh","../Matteo/pic_9.jpg":"8gMYd","../Nastia/DSC07826.jpg":"9AVLD","../Nastia/DSC07836.jpg":"4gDqK","../Nastia/DSC08026.jpg":"97xVA","../Nastia/DSC08077.jpg":"dT3AH","../Nastia/DSC08167.jpg":"disvw","../Nastia/DSC08191.jpg":"82WXc","../Nastia/DSC08386.jpg":"4xBCp","../Roberta/pic_0.jpg":"7Tv3D","../Roberta/pic_1.jpg":"gZjDs","../Roberta/pic_10.jpg":"8enkX","../Roberta/pic_11.jpg":"bRQEo","../Roberta/pic_12.jpg":"cyTn7","../Roberta/pic_13.jpg":"65oxB","../Roberta/pic_14.jpg":"fTWSL","../Roberta/pic_2.jpg":"e0eqk","../Roberta/pic_3.jpg":"iQ3Fq","../Roberta/pic_4.jpg":"leutP","../Roberta/pic_5.jpg":"eFIuM","../Roberta/pic_6.jpg":"CX81U","../Roberta/pic_7.jpg":"8hJhl","../Roberta/pic_8.jpg":"8oINI","../Roberta/pic_9.jpg":"kmSx4","../Valeria/239645708_913348032586675_3526176268626277941_n.jpg":"kndmW","../Valeria/239858938_422969359157922_8304902028896030195_n.jpg":"4sU58","../Valeria/240108310_221163499954226_6077238410015003289_n.jpg":"etHor","../Valeria/240108522_986136085294928_4307106541389037811_n.jpg":"eMAQg","../Valeria/240110620_4776111199083747_2956117918730996962_n.jpg":"8Vxw5","../Valeria/240453595_245641064230822_139858117910837704_n.jpg":"5mveD"}],"dsA8U":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _animejs = require("animejs");
var _animejsDefault = parcelHelpers.interopDefault(_animejs);
var _utils = require("./utils");
var _appJs = require("../../app.js");
var _jpg = require("../assets/img/*/*.jpg");
var _jpgDefault = parcelHelpers.interopDefault(_jpg);
// track the mouse position
let mousepos = {
    x: 0,
    y: 0
};
// cache the mouse position
let mousePosCache = mousepos;
let direction = {
    x: mousePosCache.x - mousepos.x,
    y: mousePosCache.y - mousepos.y
};
// update mouse position when moving the mouse
window.addEventListener('mousemove', (ev)=>mousepos = _utils.getMousePos(ev)
);
class MenuItem {
    constructor(vnode){
        this.vnode = vnode;
        this.menuItem = vnode.attrs.item;
        this.index = vnode.attrs.index;
        this.url = vnode.attrs.url;
        this.animProps = vnode.attrs.animProps;
        this.showing = undefined;
        this.hiding = undefined;
    }
    oncreate() {
        this.reveal = this.vnode.dom.querySelector('.hover-reveal');
        this.revealInner = this.vnode.dom.querySelector('.hover-reveal__inner');
        this.revealImage = this.vnode.dom.querySelector('.hover-reveal__img');
        this.initEvents();
    }
    initEvents() {
        this.mouseenterFn = (ev)=>{
            // show the image element
            this.showImage();
            this.firstRAFCycle = true;
            // start the render loop animation (rAF)
            this.loopRender();
        };
        this.mouseleaveFn = ()=>{
            // stop the render loop animation (rAF)
            this.stopRendering();
            // hide the image element
            this.hideImage();
        };
        this.vnode.dom.addEventListener('mouseenter', this.mouseenterFn);
        this.vnode.dom.addEventListener('mouseleave', this.mouseleaveFn);
    }
    showImage() {
        let menuItem = this.vnode.dom;
        let reveal = this.reveal;
        // document.body.style.backgroundColor = 'black';
        this.showing = _animejsDefault.default({
            targets: [
                this.revealInner,
                this.revealImage
            ],
            easing: 'easeOutSine',
            // opacity: 1,
            duration: 250,
            translateX: [
                direction.x < 0 ? '-100%' : '100%',
                '0%'
            ],
            begin (anim) {
                anim.animatables.forEach((item)=>item.target.style.opacity = '1'
                );
                // menuItem.style.zIndex = '10'
                reveal.style.opacity = '1';
            }
        });
    }
    hideImage() {
        let menuItem = this.vnode.dom;
        // menuItem.style.zIndex = '1'
        this.hiding = _animejsDefault.default({
            targets: [
                this.revealInner,
                this.revealImage
            ],
            complete (anim) {
                let reveal = anim.animatables[0].target.parentElement;
                if (this.showing) // document.body.style.backgroundColor = '#d7cca1';
                reveal.style.opacity = '0';
            },
            // opacity: 0,
            duration: 250,
            easing: 'easeOutSine',
            // zIndex: 1,
            translateX: [
                '0%',
                direction.x < 0 ? '100%' : '-100%'
            ]
        });
    }
    // calculate the position/size of both the menu item and reveal element
    calcBounds() {
        this.bounds = {
            el: this.vnode.dom.getBoundingClientRect(),
            reveal: this.reveal.getBoundingClientRect()
        };
    }
    loopRender() {
        if (!this.requestId) this.requestId = requestAnimationFrame(()=>this.render()
        );
    }
    // stop the render loop animation (rAF)
    stopRendering() {
        if (this.requestId) {
            window.cancelAnimationFrame(this.requestId);
            this.requestId = undefined;
        }
    }
    render() {
        this.requestId = undefined;
        if (this.firstRAFCycle) this.calcBounds();
        const mouseDistanceX = _utils.clamp(Math.abs(mousePosCache.x - mousepos.x), 0, 100);
        direction = {
            x: mousePosCache.x - mousepos.x,
            y: mousePosCache.y - mousepos.y
        };
        mousePosCache = {
            x: mousepos.x,
            y: mousepos.y
        };
        this.animProps.tx.current = Math.abs(mousepos.x - this.bounds.el.left) - this.bounds.reveal.width / 2;
        this.animProps.ty.current = Math.abs(mousepos.y - this.bounds.el.top) - this.bounds.reveal.height / 2;
        this.animProps.rotation.current = this.firstRAFCycle ? 0 : _utils.map(mouseDistanceX, 0, 100, 0, direction.x < 0 ? 60 : -60);
        this.animProps.blur.current = this.firstRAFCycle ? 1 : _utils.map(mouseDistanceX, 0, 100, 0, 4);
        this.animProps.tx.previous = this.firstRAFCycle ? this.animProps.tx.current : _utils.lerp(this.animProps.tx.previous, this.animProps.tx.current, this.animProps.tx.amt);
        this.animProps.ty.previous = this.firstRAFCycle ? this.animProps.ty.current : _utils.lerp(this.animProps.ty.previous, this.animProps.ty.current, this.animProps.ty.amt);
        this.animProps.rotation.previous = this.firstRAFCycle ? this.animProps.rotation.current : _utils.lerp(this.animProps.rotation.previous, this.animProps.rotation.current, this.animProps.rotation.amt);
        this.animProps.blur.previous = this.firstRAFCycle ? this.animProps.blur.current : _utils.lerp(this.animProps.blur.previous, this.animProps.blur.current, this.animProps.blur.amt);
        _animejsDefault.default({
            targets: this.reveal,
            translateY: this.animProps.ty.previous - document.querySelector('html').scrollTop,
            translateX: this.animProps.tx.previous,
            rotate: this.animProps.rotation.previous,
            // filter: `blur(${this.animProps.blur.previous}px)`,
            easing: 'easeInOutQuad',
            duration: 0
        });
        this.firstRAFCycle = false;
        this.loopRender();
    }
    view() {
        return _mithrilDefault.default('.link[data-scroll]', {
            href: `project/${this.index}`,
            class: 'menu__item',
            onclick (e) {
                e.preventDefault();
                _appJs.transition();
                setTimeout(()=>{
                    _mithrilDefault.default.route.set(`/${this.getAttribute('href')}`);
                }, 1000);
            }
        }, _mithrilDefault.default('span.menu__item-text', _mithrilDefault.default('span.menu__item-textinner', this.menuItem)), _mithrilDefault.default('span.menu__item-sub', ''), _mithrilDefault.default('.hover-reveal[style=opacity: 0]', _mithrilDefault.default('.hover-reveal__inner[style=overflow:hidden]', _mithrilDefault.default('.hover-reveal__img', {
            style: `background-image: url(${this.url})`
        }))));
    }
}
exports.default = MenuItem;
function cancelAnimation(animation) {
    let activeInstances = _animejsDefault.default.running;
    let index = activeInstances.indexOf(animation);
    activeInstances.splice(index, 1);
}

},{"mithril":"a7UJj","animejs":"bfYip","./utils":"fIYUT","../../app.js":"lzYRN","../assets/img/*/*.jpg":"esZG3","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"esZG3":[function(require,module,exports) {
const _temp0 = require("../Anastasia/DSC01812.jpg");
const _temp1 = require("../Anastasia/DSC01910.jpg");
const _temp2 = require("../Anastasia/DSC02013.jpg");
const _temp3 = require("../Anastasia/DSC02154.jpg");
const _temp4 = require("../Anastasia/DSC02205.jpg");
const _temp5 = require("../Anastasia/DSC02276.jpg");
const _temp6 = require("../Anastasia/DSC02278.jpg");
const _temp7 = require("../Anastasia/NastiaDavletshina1.jpg");
const _temp8 = require("../Arianna/pic_0.jpg");
const _temp9 = require("../Arianna/pic_1.jpg");
const _temp10 = require("../Arianna/pic_10.jpg");
const _temp11 = require("../Arianna/pic_11.jpg");
const _temp12 = require("../Arianna/pic_2.jpg");
const _temp13 = require("../Arianna/pic_3.jpg");
const _temp14 = require("../Arianna/pic_4.jpg");
const _temp15 = require("../Arianna/pic_5.jpg");
const _temp16 = require("../Arianna/pic_6.jpg");
const _temp17 = require("../Arianna/pic_7.jpg");
const _temp18 = require("../Arianna/pic_8.jpg");
const _temp19 = require("../Arianna/pic_9.jpg");
const _temp20 = require("../Andrea/DSC01328.jpg");
const _temp21 = require("../Andrea/DSC01521.jpg");
const _temp22 = require("../Andrea/DSC01530.jpg");
const _temp23 = require("../Andrea/pic_10.jpg");
const _temp24 = require("../Andrea/pic_11.jpg");
const _temp25 = require("../Andrea/pic_12.jpg");
const _temp26 = require("../Andrea/pic_13.jpg");
const _temp27 = require("../Andrea/pic_14.jpg");
const _temp28 = require("../Andrea/pic_15.jpg");
const _temp29 = require("../Andrea/pic_9.jpg");
const _temp30 = require("../Inganno/1.jpg");
const _temp31 = require("../Inganno/2.jpg");
const _temp32 = require("../Inganno/3.jpg");
const _temp33 = require("../Inganno/4.jpg");
const _temp34 = require("../Inganno/5.jpg");
const _temp35 = require("../Inganno/6.jpg");
const _temp36 = require("../Inganno/7.jpg");
const _temp37 = require("../Inganno/8.jpg");
const _temp38 = require("../Inganno/9.jpg");
const _temp39 = require("../Inganno/10.jpg");
const _temp40 = require("../Katia/pic_0.jpg");
const _temp41 = require("../Katia/pic_1.jpg");
const _temp42 = require("../Katia/pic_2.jpg");
const _temp43 = require("../Katia/pic_3.jpg");
const _temp44 = require("../Katia/pic_4.jpg");
const _temp45 = require("../Katia/pic_5.jpg");
const _temp46 = require("../Katia/pic_6.jpg");
const _temp47 = require("../Katia/pic_7.jpg");
const _temp48 = require("../Matteo/pic_0.jpg");
const _temp49 = require("../Matteo/pic_1.jpg");
const _temp50 = require("../Matteo/pic_2.jpg");
const _temp51 = require("../Matteo/pic_3.jpg");
const _temp52 = require("../Matteo/pic_4.jpg");
const _temp53 = require("../Matteo/pic_5.jpg");
const _temp54 = require("../Matteo/pic_6.jpg");
const _temp55 = require("../Matteo/pic_7.jpg");
const _temp56 = require("../Matteo/pic_8.jpg");
const _temp57 = require("../Matteo/pic_9.jpg");
const _temp58 = require("../Nastia/DSC07826.jpg");
const _temp59 = require("../Nastia/DSC07836.jpg");
const _temp60 = require("../Nastia/DSC08026.jpg");
const _temp61 = require("../Nastia/DSC08077.jpg");
const _temp62 = require("../Nastia/DSC08167.jpg");
const _temp63 = require("../Nastia/DSC08191.jpg");
const _temp64 = require("../Nastia/DSC08386.jpg");
const _temp65 = require("../Roberta/pic_0.jpg");
const _temp66 = require("../Roberta/pic_1.jpg");
const _temp67 = require("../Roberta/pic_10.jpg");
const _temp68 = require("../Roberta/pic_11.jpg");
const _temp69 = require("../Roberta/pic_12.jpg");
const _temp70 = require("../Roberta/pic_13.jpg");
const _temp71 = require("../Roberta/pic_14.jpg");
const _temp72 = require("../Roberta/pic_2.jpg");
const _temp73 = require("../Roberta/pic_3.jpg");
const _temp74 = require("../Roberta/pic_4.jpg");
const _temp75 = require("../Roberta/pic_5.jpg");
const _temp76 = require("../Roberta/pic_6.jpg");
const _temp77 = require("../Roberta/pic_7.jpg");
const _temp78 = require("../Roberta/pic_8.jpg");
const _temp79 = require("../Roberta/pic_9.jpg");
const _temp80 = require("../Valeria/239645708_913348032586675_3526176268626277941_n.jpg");
const _temp81 = require("../Valeria/239858938_422969359157922_8304902028896030195_n.jpg");
const _temp82 = require("../Valeria/240108310_221163499954226_6077238410015003289_n.jpg");
const _temp83 = require("../Valeria/240108522_986136085294928_4307106541389037811_n.jpg");
const _temp84 = require("../Valeria/240110620_4776111199083747_2956117918730996962_n.jpg");
const _temp85 = require("../Valeria/240453595_245641064230822_139858117910837704_n.jpg");
module.exports = {
    "Anastasia": {
        "DSC01812": _temp0,
        "DSC01910": _temp1,
        "DSC02013": _temp2,
        "DSC02154": _temp3,
        "DSC02205": _temp4,
        "DSC02276": _temp5,
        "DSC02278": _temp6,
        "NastiaDavletshina1": _temp7
    },
    "Arianna": {
        "pic_0": _temp8,
        "pic_1": _temp9,
        "pic_10": _temp10,
        "pic_11": _temp11,
        "pic_2": _temp12,
        "pic_3": _temp13,
        "pic_4": _temp14,
        "pic_5": _temp15,
        "pic_6": _temp16,
        "pic_7": _temp17,
        "pic_8": _temp18,
        "pic_9": _temp19
    },
    "Andrea": {
        "DSC01328": _temp20,
        "DSC01521": _temp21,
        "DSC01530": _temp22,
        "pic_10": _temp23,
        "pic_11": _temp24,
        "pic_12": _temp25,
        "pic_13": _temp26,
        "pic_14": _temp27,
        "pic_15": _temp28,
        "pic_9": _temp29
    },
    "Inganno": {
        "1": _temp30,
        "2": _temp31,
        "3": _temp32,
        "4": _temp33,
        "5": _temp34,
        "6": _temp35,
        "7": _temp36,
        "8": _temp37,
        "9": _temp38,
        "10": _temp39
    },
    "Katia": {
        "pic_0": _temp40,
        "pic_1": _temp41,
        "pic_2": _temp42,
        "pic_3": _temp43,
        "pic_4": _temp44,
        "pic_5": _temp45,
        "pic_6": _temp46,
        "pic_7": _temp47
    },
    "Matteo": {
        "pic_0": _temp48,
        "pic_1": _temp49,
        "pic_2": _temp50,
        "pic_3": _temp51,
        "pic_4": _temp52,
        "pic_5": _temp53,
        "pic_6": _temp54,
        "pic_7": _temp55,
        "pic_8": _temp56,
        "pic_9": _temp57
    },
    "Nastia": {
        "DSC07826": _temp58,
        "DSC07836": _temp59,
        "DSC08026": _temp60,
        "DSC08077": _temp61,
        "DSC08167": _temp62,
        "DSC08191": _temp63,
        "DSC08386": _temp64
    },
    "Roberta": {
        "pic_0": _temp65,
        "pic_1": _temp66,
        "pic_10": _temp67,
        "pic_11": _temp68,
        "pic_12": _temp69,
        "pic_13": _temp70,
        "pic_14": _temp71,
        "pic_2": _temp72,
        "pic_3": _temp73,
        "pic_4": _temp74,
        "pic_5": _temp75,
        "pic_6": _temp76,
        "pic_7": _temp77,
        "pic_8": _temp78,
        "pic_9": _temp79
    },
    "Valeria": {
        "239645708_913348032586675_3526176268626277941_n": _temp80,
        "239858938_422969359157922_8304902028896030195_n": _temp81,
        "240108310_221163499954226_6077238410015003289_n": _temp82,
        "240108522_986136085294928_4307106541389037811_n": _temp83,
        "240110620_4776111199083747_2956117918730996962_n": _temp84,
        "240453595_245641064230822_139858117910837704_n": _temp85
    }
};

},{"../Anastasia/DSC01812.jpg":"27hhp","../Anastasia/DSC01910.jpg":"kL9Y3","../Anastasia/DSC02013.jpg":"kRGo3","../Anastasia/DSC02154.jpg":"lONke","../Anastasia/DSC02205.jpg":"dnibK","../Anastasia/DSC02276.jpg":"kYH8c","../Anastasia/DSC02278.jpg":"iDyhP","../Anastasia/NastiaDavletshina1.jpg":"9XNPE","../Arianna/pic_0.jpg":"auLbh","../Arianna/pic_1.jpg":"iAfPt","../Arianna/pic_10.jpg":"aQDpZ","../Arianna/pic_11.jpg":"R6BUR","../Arianna/pic_2.jpg":"3frM6","../Arianna/pic_3.jpg":"efIZZ","../Arianna/pic_4.jpg":"bFr8T","../Arianna/pic_5.jpg":"kk6oK","../Arianna/pic_6.jpg":"jOlOW","../Arianna/pic_7.jpg":"jRqb2","../Arianna/pic_8.jpg":"3ASMb","../Arianna/pic_9.jpg":"9xrLx","../Andrea/DSC01328.jpg":"hRoJD","../Andrea/DSC01521.jpg":"kDciS","../Andrea/DSC01530.jpg":"kPZ4W","../Andrea/pic_10.jpg":"cHmim","../Andrea/pic_11.jpg":"hVcrc","../Andrea/pic_12.jpg":"jKlhJ","../Andrea/pic_13.jpg":"jtYtg","../Andrea/pic_14.jpg":"2UESJ","../Andrea/pic_15.jpg":"922HP","../Andrea/pic_9.jpg":"jSfp4","../Inganno/1.jpg":"cXFMX","../Inganno/2.jpg":"eYjAi","../Inganno/3.jpg":"dzvRw","../Inganno/4.jpg":"25uYQ","../Inganno/5.jpg":"6xnJd","../Inganno/6.jpg":"4i2K2","../Inganno/7.jpg":"8KeWv","../Inganno/8.jpg":"8BTVQ","../Inganno/9.jpg":"75YVs","../Inganno/10.jpg":"hH93w","../Katia/pic_0.jpg":"brCd4","../Katia/pic_1.jpg":"5k64l","../Katia/pic_2.jpg":"efIsy","../Katia/pic_3.jpg":"8GdmZ","../Katia/pic_4.jpg":"fJf2z","../Katia/pic_5.jpg":"6h9cv","../Katia/pic_6.jpg":"alue5","../Katia/pic_7.jpg":"e6M8v","../Matteo/pic_0.jpg":"gZNPp","../Matteo/pic_1.jpg":"8tQWi","../Matteo/pic_2.jpg":"cDanF","../Matteo/pic_3.jpg":"6knsV","../Matteo/pic_4.jpg":"gwu8n","../Matteo/pic_5.jpg":"fVWwX","../Matteo/pic_6.jpg":"9plNI","../Matteo/pic_7.jpg":"aLqGh","../Matteo/pic_8.jpg":"031sh","../Matteo/pic_9.jpg":"8gMYd","../Nastia/DSC07826.jpg":"9AVLD","../Nastia/DSC07836.jpg":"4gDqK","../Nastia/DSC08026.jpg":"97xVA","../Nastia/DSC08077.jpg":"dT3AH","../Nastia/DSC08167.jpg":"disvw","../Nastia/DSC08191.jpg":"82WXc","../Nastia/DSC08386.jpg":"4xBCp","../Roberta/pic_0.jpg":"7Tv3D","../Roberta/pic_1.jpg":"gZjDs","../Roberta/pic_10.jpg":"8enkX","../Roberta/pic_11.jpg":"bRQEo","../Roberta/pic_12.jpg":"cyTn7","../Roberta/pic_13.jpg":"65oxB","../Roberta/pic_14.jpg":"fTWSL","../Roberta/pic_2.jpg":"e0eqk","../Roberta/pic_3.jpg":"iQ3Fq","../Roberta/pic_4.jpg":"leutP","../Roberta/pic_5.jpg":"eFIuM","../Roberta/pic_6.jpg":"CX81U","../Roberta/pic_7.jpg":"8hJhl","../Roberta/pic_8.jpg":"8oINI","../Roberta/pic_9.jpg":"kmSx4","../Valeria/239645708_913348032586675_3526176268626277941_n.jpg":"kndmW","../Valeria/239858938_422969359157922_8304902028896030195_n.jpg":"4sU58","../Valeria/240108310_221163499954226_6077238410015003289_n.jpg":"etHor","../Valeria/240108522_986136085294928_4307106541389037811_n.jpg":"eMAQg","../Valeria/240110620_4776111199083747_2956117918730996962_n.jpg":"8Vxw5","../Valeria/240453595_245641064230822_139858117910837704_n.jpg":"5mveD"}],"9dd82":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _animejs = require("animejs");
var _animejsDefault = parcelHelpers.interopDefault(_animejs);
var _imagesloaded = require("imagesloaded");
var _imagesloadedDefault = parcelHelpers.interopDefault(_imagesloaded);
var _nav = require("./Nav");
var _navDefault = parcelHelpers.interopDefault(_nav);
var _appJs = require("../../app.js");
var _locomotiveScroll = require("locomotive-scroll");
var _locomotiveScrollDefault = parcelHelpers.interopDefault(_locomotiveScroll);
var _cursor = require("./cursor");
var _cursorDefault = parcelHelpers.interopDefault(_cursor);
var _roller = require("./Roller");
var _rollerDefault = parcelHelpers.interopDefault(_roller);
var _loader = require("./Loader");
var _loaderDefault = parcelHelpers.interopDefault(_loader);
var _jpg = require("../assets/img/*/*.jpg");
var _jpgDefault = parcelHelpers.interopDefault(_jpg);
let projectNames = [];
for(let key in _jpgDefault.default)projectNames.push(key);
let scroll;
function handleScroll(scroll) {
    const body = document.querySelector("body");
    const nav = document.querySelector("#nav");
    // const shards = document.querySelectorAll(".shard-spacer");
    const bgDark = "#1e1e1e";
    const bgLight = "#d7cca1";
    if (scroll > 85) body.classList.add('dark');
    else body.classList.remove('dark');
}
class Project {
    constructor(){
    }
    oninit(vnode) {
        vnode.state.pictures = Object.values(_jpgDefault.default[projectNames[vnode.attrs.key]]);
        vnode.state.titleArr = projectNames[vnode.attrs.key].split(" ");
        vnode.state.scrolled = 0;
    }
    onremove() {
        scroll.destroy();
    }
    async oncreate(vnode) {
        // initialize smoothscroll
        const loader = await _loaderDefault.default(vnode, scroll, 2);
        scroll = loader.scroll;
        // uncover the shards found in Roller.js
        loader.scroll.on("call", (func)=>{
            if (func === "uncover") document.querySelectorAll(".bg-shard").forEach((e)=>e.classList.add("uncover")
            );
        });
        loader.scroll.on("scroll", (args)=>{
            const { limit , scroll  } = args;
            vnode.state.scrolled = Math.round(scroll.y * 100 / limit.y);
            handleScroll(vnode.state.scrolled);
        });
        setTimeout(()=>{
            loader.scroll.update();
        }, 1000);
        if (!_appJs.cursor) new _cursorDefault.default(document.querySelector("svg.cursor"));
    }
    view(vnode) {
        let next;
        if (parseInt(vnode.attrs.key) + 1 == projectNames.length) next = projectNames[0];
        else next = projectNames[parseInt(vnode.attrs.key) + 1];
        return _mithrilDefault.default(".project-page-wrapper[data-scroll-container]", [
            _mithrilDefault.default("#main", _mithrilDefault.default(_navDefault.default), _mithrilDefault.default(".title-wrapper[data-scroll][data-scroll-repeat]", _mithrilDefault.default("section.content__item.content__item--project.content__item--current[data-scroll][data-scroll-speed=1]", vnode.state.titleArr.map((line)=>{
                return _mithrilDefault.default(".paragraph-wrapper", _mithrilDefault.default(".content__paragraph[data-scroll]", line));
            }))), _mithrilDefault.default(".divider[data-scroll][data-scroll-repeat]", _mithrilDefault.default("span.divider-text", "scroll down")), _mithrilDefault.default(".gallery.grid", vnode.state.pictures.map((pic, i)=>{
                let speed = i % 2 === 0 ? 1 : 4;
                // instead of ${speed} will put 1
                return _mithrilDefault.default(`.img-wrapper[data-scroll][data-scroll-speed=${speed}]`, _mithrilDefault.default(`img[src=${pic}]`));
            })), _mithrilDefault.default(_rollerDefault.default, {
                id: parseInt(vnode.attrs.key),
                nextId: parseInt(vnode.attrs.key) + 1 == projectNames.length ? 0 : parseInt(vnode.attrs.key) + 1,
                next: next,
                nextSrc: Object.values(_jpgDefault.default[next])[0],
                projectNames,
                pics: _jpgDefault.default
            })), 
        ]);
    }
}
exports.default = Project;

},{"mithril":"a7UJj","animejs":"bfYip","imagesloaded":"uXwLn","./Nav":"teRhW","../../app.js":"lzYRN","locomotive-scroll":"aJY2w","./cursor":"gc278","./Roller":"5S4kq","./Loader":"7UblQ","../assets/img/*/*.jpg":"bUf6y","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"5S4kq":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _mithril = require("mithril");
var _mithrilDefault = parcelHelpers.interopDefault(_mithril);
var _animejs = require("animejs");
var _animejsDefault = parcelHelpers.interopDefault(_animejs);
var _app = require("../../app");
function applyToArray(arr, func) {
    arr.forEach((elem)=>{
        func(elem);
    });
}
async function wait(ms) {
    await new Promise((resolve)=>setTimeout(resolve, ms)
    );
}
async function revealer(vnode, projectNames, operator) {
    const shards = document.querySelectorAll(".bg-shard");
    const text = document.querySelector(".next-section__project-text");
    const options = {
        duration: 500,
        easing: "easeInOutQuad",
        delay: _animejsDefault.default.stagger(150)
    };
    let anim = _animejsDefault.default({
        targets: text,
        duration: options.duration * 2,
        // easing: options.easing,
        begin () {
            text.style.opacity = 0;
            shards.forEach((e)=>{
                e.classList.remove("uncover");
            });
        },
        complete () {
            text.style.opacity = 1;
            shards.forEach((e)=>{
                e.classList.add("uncover");
            });
            _mithrilDefault.default.redraw();
        }
    });
    if (operator === "-") {
        vnode.state.id -= 1;
        if (vnode.state.id < 0) vnode.state.id = projectNames.length - 1;
    } else if (operator === "+") {
        vnode.state.id += 1;
        if (vnode.state.id > projectNames.length - 1) vnode.state.id = 0;
    }
    const pr = projectNames[vnode.state.id];
    await wait(options.duration);
    return pr;
}
// async function cardFlip(vnode, projectNames, operator) {
// const fronts = document.querySelectorAll(".bg-shard__front");
// const backs = document.querySelectorAll(".bg-shard__back");
// const text = document.querySelector(".next-section__project-text");
//
// const options = {
// duration: 500,
// easing: "easeInOutQuad",
// delay: anime.stagger(150),
// };
//
// anime({
// targets: text,
// opacity: 0,
// duration: options.duration,
// easing: options.easing,
// });
//
// anime({
// targets: fronts,
// rotateY: 180,
// opacity: 0,
// duration: options.duration,
// easing: options.easing,
// delay: options.delay,
// });
//
// anime({
// targets: backs,
// rotateY: [-180, 0],
// complete: flipCards,
// duration: options.duration,
// easing: options.easing,
// delay: options.delay,
// });
//
// function flipCards() {
// anime({
// targets: text,
// opacity: 1,
// });
//
// anime({
// targets: fronts,
// rotateY: [-180, 0],
// opacity: 1,
// begin: m.redraw,
// duration: options.duration,
// easing: options.easing,
// delay: options.delay,
// });
//
// anime({
// targets: backs,
// rotateY: 180,
// duration: options.duration,
// easing: options.easing,
// delay: options.delay,
// });
// }
//
// if (operator === "-") {
// vnode.state.id -= 1;
// if (vnode.state.id < 0) {
// vnode.state.id = projectNames.length - 1;
// }
// } else if (operator === "+") {
// vnode.state.id += 1;
// if (vnode.state.id > projectNames.length - 1) {
// vnode.state.id = 0;
// }
// }
// const pr = projectNames[vnode.state.id];
// await wait(options.duration);
// return pr;
// }
module.exports = {
    id: null,
    next: null,
    nextPic: null,
    pics: [],
    oninit (vnode) {
    },
    oncreate () {
    },
    view (vnode) {
        let { nextId , next , nextSrc , projectNames , pics  } = JSON.parse(JSON.stringify(vnode.attrs));
        if (!vnode.state.next) vnode.state.next = next;
        if (!vnode.state.id && vnode.state.id != 0) vnode.state.id = nextId;
        const nextPics = Object.values(pics[vnode.state.next]);
        vnode.state.nextPic = nextPics[0];
        return _mithrilDefault.default(".roller[data-scroll][data-scroll-call=uncover]", [
            _mithrilDefault.default(".next-container.grid", _mithrilDefault.default(".next-section.grid", {
                onclick () {
                    _app.transition();
                    setTimeout(()=>{
                        _mithrilDefault.default.route.set(`/project/${vnode.state.id}`);
                    }, 1000);
                }
            }, _mithrilDefault.default(".next-section__img-wrapper", {
            }, _mithrilDefault.default(".bg-shard[data-scroll]", _mithrilDefault.default(".bg-shard-sides", _mithrilDefault.default(".bg-shard__front", {
                style: `background-image: url(${nextPics[0]})`
            }), _mithrilDefault.default(".bg-shard__back"))), // m(".shard-spacer"),
            _mithrilDefault.default(".bg-shard[data-scroll]", _mithrilDefault.default(".bg-shard-sides", _mithrilDefault.default(".bg-shard__front", {
                style: `background-image: url(${nextPics[1]})`
            }), _mithrilDefault.default(".bg-shard__back"))), // m(".shard-spacer"),
            _mithrilDefault.default(".bg-shard[data-scroll]", _mithrilDefault.default(".bg-shard-sides", _mithrilDefault.default(".bg-shard__front", {
                style: `background-image: url(${nextPics[2]})`
            }), _mithrilDefault.default(".bg-shard__back")))), _mithrilDefault.default(".next-section__project-text", vnode.state.next)), _mithrilDefault.default(".low-text.flex", _mithrilDefault.default(".prev", {
                async onclick () {
                    // vnode.state.next = await cardFlip(vnode, projectNames, "-");
                    vnode.state.next = await revealer(vnode, projectNames, "-");
                }
            }, _mithrilDefault.default(".prev__text", "prev")), _mithrilDefault.default(".next", {
                async onclick () {
                    // vnode.state.next = await cardFlip(vnode, projectNames, "+");
                    vnode.state.next = await revealer(vnode, projectNames, '+');
                }
            }, _mithrilDefault.default(".next__text", "next")))), 
        ]);
    }
};

},{"mithril":"a7UJj","animejs":"bfYip","../../app":"lzYRN","@parcel/transformer-js/src/esmodule-helpers.js":"ciiiV"}],"bUf6y":[function(require,module,exports) {
const _temp0 = require("../Anastasia/DSC01812.jpg");
const _temp1 = require("../Anastasia/DSC01910.jpg");
const _temp2 = require("../Anastasia/DSC02013.jpg");
const _temp3 = require("../Anastasia/DSC02154.jpg");
const _temp4 = require("../Anastasia/DSC02205.jpg");
const _temp5 = require("../Anastasia/DSC02276.jpg");
const _temp6 = require("../Anastasia/DSC02278.jpg");
const _temp7 = require("../Anastasia/NastiaDavletshina1.jpg");
const _temp8 = require("../Andrea/DSC01328.jpg");
const _temp9 = require("../Andrea/DSC01521.jpg");
const _temp10 = require("../Andrea/DSC01530.jpg");
const _temp11 = require("../Andrea/pic_10.jpg");
const _temp12 = require("../Andrea/pic_11.jpg");
const _temp13 = require("../Andrea/pic_12.jpg");
const _temp14 = require("../Andrea/pic_13.jpg");
const _temp15 = require("../Andrea/pic_14.jpg");
const _temp16 = require("../Andrea/pic_15.jpg");
const _temp17 = require("../Andrea/pic_9.jpg");
const _temp18 = require("../Arianna/pic_0.jpg");
const _temp19 = require("../Arianna/pic_1.jpg");
const _temp20 = require("../Arianna/pic_10.jpg");
const _temp21 = require("../Arianna/pic_11.jpg");
const _temp22 = require("../Arianna/pic_2.jpg");
const _temp23 = require("../Arianna/pic_3.jpg");
const _temp24 = require("../Arianna/pic_4.jpg");
const _temp25 = require("../Arianna/pic_5.jpg");
const _temp26 = require("../Arianna/pic_6.jpg");
const _temp27 = require("../Arianna/pic_7.jpg");
const _temp28 = require("../Arianna/pic_8.jpg");
const _temp29 = require("../Arianna/pic_9.jpg");
const _temp30 = require("../Inganno/1.jpg");
const _temp31 = require("../Inganno/2.jpg");
const _temp32 = require("../Inganno/3.jpg");
const _temp33 = require("../Inganno/4.jpg");
const _temp34 = require("../Inganno/5.jpg");
const _temp35 = require("../Inganno/6.jpg");
const _temp36 = require("../Inganno/7.jpg");
const _temp37 = require("../Inganno/8.jpg");
const _temp38 = require("../Inganno/9.jpg");
const _temp39 = require("../Inganno/10.jpg");
const _temp40 = require("../Katia/pic_0.jpg");
const _temp41 = require("../Katia/pic_1.jpg");
const _temp42 = require("../Katia/pic_2.jpg");
const _temp43 = require("../Katia/pic_3.jpg");
const _temp44 = require("../Katia/pic_4.jpg");
const _temp45 = require("../Katia/pic_5.jpg");
const _temp46 = require("../Katia/pic_6.jpg");
const _temp47 = require("../Katia/pic_7.jpg");
const _temp48 = require("../Nastia/DSC07826.jpg");
const _temp49 = require("../Nastia/DSC07836.jpg");
const _temp50 = require("../Nastia/DSC08026.jpg");
const _temp51 = require("../Nastia/DSC08077.jpg");
const _temp52 = require("../Nastia/DSC08167.jpg");
const _temp53 = require("../Nastia/DSC08191.jpg");
const _temp54 = require("../Nastia/DSC08386.jpg");
const _temp55 = require("../Matteo/pic_0.jpg");
const _temp56 = require("../Matteo/pic_1.jpg");
const _temp57 = require("../Matteo/pic_2.jpg");
const _temp58 = require("../Matteo/pic_3.jpg");
const _temp59 = require("../Matteo/pic_4.jpg");
const _temp60 = require("../Matteo/pic_5.jpg");
const _temp61 = require("../Matteo/pic_6.jpg");
const _temp62 = require("../Matteo/pic_7.jpg");
const _temp63 = require("../Matteo/pic_8.jpg");
const _temp64 = require("../Matteo/pic_9.jpg");
const _temp65 = require("../Roberta/pic_0.jpg");
const _temp66 = require("../Roberta/pic_1.jpg");
const _temp67 = require("../Roberta/pic_10.jpg");
const _temp68 = require("../Roberta/pic_11.jpg");
const _temp69 = require("../Roberta/pic_12.jpg");
const _temp70 = require("../Roberta/pic_13.jpg");
const _temp71 = require("../Roberta/pic_14.jpg");
const _temp72 = require("../Roberta/pic_2.jpg");
const _temp73 = require("../Roberta/pic_3.jpg");
const _temp74 = require("../Roberta/pic_4.jpg");
const _temp75 = require("../Roberta/pic_5.jpg");
const _temp76 = require("../Roberta/pic_6.jpg");
const _temp77 = require("../Roberta/pic_7.jpg");
const _temp78 = require("../Roberta/pic_8.jpg");
const _temp79 = require("../Roberta/pic_9.jpg");
const _temp80 = require("../Valeria/239645708_913348032586675_3526176268626277941_n.jpg");
const _temp81 = require("../Valeria/239858938_422969359157922_8304902028896030195_n.jpg");
const _temp82 = require("../Valeria/240108310_221163499954226_6077238410015003289_n.jpg");
const _temp83 = require("../Valeria/240108522_986136085294928_4307106541389037811_n.jpg");
const _temp84 = require("../Valeria/240110620_4776111199083747_2956117918730996962_n.jpg");
const _temp85 = require("../Valeria/240453595_245641064230822_139858117910837704_n.jpg");
module.exports = {
    "Anastasia": {
        "DSC01812": _temp0,
        "DSC01910": _temp1,
        "DSC02013": _temp2,
        "DSC02154": _temp3,
        "DSC02205": _temp4,
        "DSC02276": _temp5,
        "DSC02278": _temp6,
        "NastiaDavletshina1": _temp7
    },
    "Andrea": {
        "DSC01328": _temp8,
        "DSC01521": _temp9,
        "DSC01530": _temp10,
        "pic_10": _temp11,
        "pic_11": _temp12,
        "pic_12": _temp13,
        "pic_13": _temp14,
        "pic_14": _temp15,
        "pic_15": _temp16,
        "pic_9": _temp17
    },
    "Arianna": {
        "pic_0": _temp18,
        "pic_1": _temp19,
        "pic_10": _temp20,
        "pic_11": _temp21,
        "pic_2": _temp22,
        "pic_3": _temp23,
        "pic_4": _temp24,
        "pic_5": _temp25,
        "pic_6": _temp26,
        "pic_7": _temp27,
        "pic_8": _temp28,
        "pic_9": _temp29
    },
    "Inganno": {
        "1": _temp30,
        "2": _temp31,
        "3": _temp32,
        "4": _temp33,
        "5": _temp34,
        "6": _temp35,
        "7": _temp36,
        "8": _temp37,
        "9": _temp38,
        "10": _temp39
    },
    "Katia": {
        "pic_0": _temp40,
        "pic_1": _temp41,
        "pic_2": _temp42,
        "pic_3": _temp43,
        "pic_4": _temp44,
        "pic_5": _temp45,
        "pic_6": _temp46,
        "pic_7": _temp47
    },
    "Nastia": {
        "DSC07826": _temp48,
        "DSC07836": _temp49,
        "DSC08026": _temp50,
        "DSC08077": _temp51,
        "DSC08167": _temp52,
        "DSC08191": _temp53,
        "DSC08386": _temp54
    },
    "Matteo": {
        "pic_0": _temp55,
        "pic_1": _temp56,
        "pic_2": _temp57,
        "pic_3": _temp58,
        "pic_4": _temp59,
        "pic_5": _temp60,
        "pic_6": _temp61,
        "pic_7": _temp62,
        "pic_8": _temp63,
        "pic_9": _temp64
    },
    "Roberta": {
        "pic_0": _temp65,
        "pic_1": _temp66,
        "pic_10": _temp67,
        "pic_11": _temp68,
        "pic_12": _temp69,
        "pic_13": _temp70,
        "pic_14": _temp71,
        "pic_2": _temp72,
        "pic_3": _temp73,
        "pic_4": _temp74,
        "pic_5": _temp75,
        "pic_6": _temp76,
        "pic_7": _temp77,
        "pic_8": _temp78,
        "pic_9": _temp79
    },
    "Valeria": {
        "239645708_913348032586675_3526176268626277941_n": _temp80,
        "239858938_422969359157922_8304902028896030195_n": _temp81,
        "240108310_221163499954226_6077238410015003289_n": _temp82,
        "240108522_986136085294928_4307106541389037811_n": _temp83,
        "240110620_4776111199083747_2956117918730996962_n": _temp84,
        "240453595_245641064230822_139858117910837704_n": _temp85
    }
};

},{"../Anastasia/DSC01812.jpg":"27hhp","../Anastasia/DSC01910.jpg":"kL9Y3","../Anastasia/DSC02013.jpg":"kRGo3","../Anastasia/DSC02154.jpg":"lONke","../Anastasia/DSC02205.jpg":"dnibK","../Anastasia/DSC02276.jpg":"kYH8c","../Anastasia/DSC02278.jpg":"iDyhP","../Anastasia/NastiaDavletshina1.jpg":"9XNPE","../Andrea/DSC01328.jpg":"hRoJD","../Andrea/DSC01521.jpg":"kDciS","../Andrea/DSC01530.jpg":"kPZ4W","../Andrea/pic_10.jpg":"cHmim","../Andrea/pic_11.jpg":"hVcrc","../Andrea/pic_12.jpg":"jKlhJ","../Andrea/pic_13.jpg":"jtYtg","../Andrea/pic_14.jpg":"2UESJ","../Andrea/pic_15.jpg":"922HP","../Andrea/pic_9.jpg":"jSfp4","../Arianna/pic_0.jpg":"auLbh","../Arianna/pic_1.jpg":"iAfPt","../Arianna/pic_10.jpg":"aQDpZ","../Arianna/pic_11.jpg":"R6BUR","../Arianna/pic_2.jpg":"3frM6","../Arianna/pic_3.jpg":"efIZZ","../Arianna/pic_4.jpg":"bFr8T","../Arianna/pic_5.jpg":"kk6oK","../Arianna/pic_6.jpg":"jOlOW","../Arianna/pic_7.jpg":"jRqb2","../Arianna/pic_8.jpg":"3ASMb","../Arianna/pic_9.jpg":"9xrLx","../Inganno/1.jpg":"cXFMX","../Inganno/2.jpg":"eYjAi","../Inganno/3.jpg":"dzvRw","../Inganno/4.jpg":"25uYQ","../Inganno/5.jpg":"6xnJd","../Inganno/6.jpg":"4i2K2","../Inganno/7.jpg":"8KeWv","../Inganno/8.jpg":"8BTVQ","../Inganno/9.jpg":"75YVs","../Inganno/10.jpg":"hH93w","../Katia/pic_0.jpg":"brCd4","../Katia/pic_1.jpg":"5k64l","../Katia/pic_2.jpg":"efIsy","../Katia/pic_3.jpg":"8GdmZ","../Katia/pic_4.jpg":"fJf2z","../Katia/pic_5.jpg":"6h9cv","../Katia/pic_6.jpg":"alue5","../Katia/pic_7.jpg":"e6M8v","../Nastia/DSC07826.jpg":"9AVLD","../Nastia/DSC07836.jpg":"4gDqK","../Nastia/DSC08026.jpg":"97xVA","../Nastia/DSC08077.jpg":"dT3AH","../Nastia/DSC08167.jpg":"disvw","../Nastia/DSC08191.jpg":"82WXc","../Nastia/DSC08386.jpg":"4xBCp","../Matteo/pic_0.jpg":"gZNPp","../Matteo/pic_1.jpg":"8tQWi","../Matteo/pic_2.jpg":"cDanF","../Matteo/pic_3.jpg":"6knsV","../Matteo/pic_4.jpg":"gwu8n","../Matteo/pic_5.jpg":"fVWwX","../Matteo/pic_6.jpg":"9plNI","../Matteo/pic_7.jpg":"aLqGh","../Matteo/pic_8.jpg":"031sh","../Matteo/pic_9.jpg":"8gMYd","../Roberta/pic_0.jpg":"7Tv3D","../Roberta/pic_1.jpg":"gZjDs","../Roberta/pic_10.jpg":"8enkX","../Roberta/pic_11.jpg":"bRQEo","../Roberta/pic_12.jpg":"cyTn7","../Roberta/pic_13.jpg":"65oxB","../Roberta/pic_14.jpg":"fTWSL","../Roberta/pic_2.jpg":"e0eqk","../Roberta/pic_3.jpg":"iQ3Fq","../Roberta/pic_4.jpg":"leutP","../Roberta/pic_5.jpg":"eFIuM","../Roberta/pic_6.jpg":"CX81U","../Roberta/pic_7.jpg":"8hJhl","../Roberta/pic_8.jpg":"8oINI","../Roberta/pic_9.jpg":"kmSx4","../Valeria/239645708_913348032586675_3526176268626277941_n.jpg":"kndmW","../Valeria/239858938_422969359157922_8304902028896030195_n.jpg":"4sU58","../Valeria/240108310_221163499954226_6077238410015003289_n.jpg":"etHor","../Valeria/240108522_986136085294928_4307106541389037811_n.jpg":"eMAQg","../Valeria/240110620_4776111199083747_2956117918730996962_n.jpg":"8Vxw5","../Valeria/240453595_245641064230822_139858117910837704_n.jpg":"5mveD"}]},["1bEO8","lzYRN"], "lzYRN", "parcelRequirebcab")

//# sourceMappingURL=index.833266ea.js.map
