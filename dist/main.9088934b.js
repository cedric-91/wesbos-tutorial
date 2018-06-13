// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

// eslint-disable-next-line no-global-assign
parcelRequire = (function (modules, cache, entry) {
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

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports);
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

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  // Override the current require with this new one
  return newRequire;
})({10:[function(require,module,exports) {
var bundleURL = null;
function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp):\/\/[^)\n]+/g);
    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],9:[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function () {
    link.remove();
  };
  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":10}],4:[function(require,module,exports) {

        var reloadCSS = require('_css_loader');
        module.hot.dispose(reloadCSS);
        module.hot.accept(reloadCSS);
      
},{"_css_loader":9}],5:[function(require,module,exports) {
// Select all the list on the page and convert to an array
var items = Array.from(document.querySelectorAll('[data-time]'));

// Filter for only the elements that contain the word 'flexbox'
var filtered = items.filter(function (item) {
  return item.textContent.includes('Flexbox');
})
// map down to a list of time strings
.map(function (item) {
  return item.dataset.time;
}) // data-time
// map to an array of seconds
.map(function (timecode) {
  var parts = timecode.split(':').map(function (part) {
    return parseFloat(part);
  }); // Convert to a number
  return parts[0] * 60 + parts[1];
})
// Reduce to get total
.reduce(function (runningTotal, seconds) {
  return runningTotal + seconds;
}, 0);
},{}],6:[function(require,module,exports) {
var ages = [14, 32, 60, 40, 68, 90];

var number = ages.map(function (age) {
  return age * 2;
}); // Map creates a new array

var checkAge = ages.filter(function (age) {
  return age <= 14;
}); // Creates a new array that checks the given value

// Filter number that is greater then '70'
var numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
var filterNumber = numbers.filter(function (numberFilter) {
  return numberFilter > 70;
});

// Songs
var songs = {
  name: 'All eyez on me',
  artist: 'Tupac',
  featuring: 'Biggie Smalls'
};

var markup = '\n  <li>' + songs.name + ' - ' + songs.artist + ' ' + (songs.featuring ? '(ft ' + songs.featuring + ')' : '') + '</li>\n';

var html = document.querySelector('.songs');

html.innerHTML = markup;

// Books
var booksContainer = document.querySelector('.books-container');

var books = [{
  title: 'Book1',
  pages: 182,
  author: ['Jhon Doe', 'Lucas Frederick'],
  publisher: 'Sony',
  ratings: .5
}, {
  title: 'Book2',
  pages: 230,
  author: ['Cedric Siewe'],
  publisher: 'Sony',
  ratings: .8
}, {
  title: 'Book3',
  pages: 80,
  author: ['Jhon Doe', 'Lucas Frederick'],
  publisher: 'Virgin'
}];

var output = '';

var displayBooks = function displayBooks() {
  books.forEach(function (book) {
    output += '\n      <h2 class="books__title">' + book.title + '</h2>\n      <span class="books__page">' + book.pages + '</span>\n      <span class="books__author">' + book.author + '</span>\n      <span class="books__publisher">' + book.publisher + '</span>\n      ' + (book.ratings ? '<span class="books__ratings">' + book.ratings + '</span>' : '') + '\n    ';
  });

  return booksContainer.innerHTML = output;
};

displayBooks();
},{}],16:[function(require,module,exports) {
module.exports = {
  mainBanner: [{
    img: '//images.pexels.com/photos/459225/pexels-photo-459225.jpeg?cs=srgb&dl=daylight-environment-forest-459225.jpg&fm=jpg',
    title: 'Mountains',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempore, magnam maiores fugafugiat possimus itaque autem repellendus inventore adipisci.'
  }, {
    img: '//images.pexels.com/photos/210243/pexels-photo-210243.jpeg?cs=srgb&dl=autumn-beautiful-city-210243.jpg&fm=jpg',
    title: 'Adventure',
    subTitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempore, magnam maiores fuga fugiat possimus itaque autem repellendus inventore adipisci.'
  }, {
    img: '//images.pexels.com/photos/7919/pexels-photo.jpg?cs=srgb&dl=cc0-desktop-backgrounds-fog-7919.jpg&fm=jpg',
    title: 'Third Image',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur tempore, magnam maiores fuga fugiat possimus itaque autem repellendus inventore adipisci.'
  }]
};
},{}],13:[function(require,module,exports) {
'use strict';

var _mainBanner = require('../content/main-banner');

var _mainBanner2 = _interopRequireDefault(_mainBanner);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mainBanner = document.querySelector('.main-banner');
var output = '';

var displayBanners = function displayBanners() {
  _mainBanner2.default.mainBanner.forEach(function (banner) {
    output += '\n      <div class="main-banner__wrapper">\n        <img class="main-banner__img" src="' + banner.img + '">\n        <h1 class="main-banner__title">' + banner.title + '</h1>\n        ' + (banner.subTitle ? '<h2 class="main-banner__sub-title">' + banner.subTitle + '</h2>' : '') + '\n        <p>' + banner.text + '</p>\n      </div>\n    ';
  });

  return mainBanner.innerHTML = output;
};
displayBanners();
},{"../content/main-banner":16}],2:[function(require,module,exports) {
'use strict';

require('./scss/styles.scss');

require('./js/module-1');

require('./js/module-2');

require('./js/main-banner');
},{"./scss/styles.scss":4,"./js/module-1":5,"./js/module-2":6,"./js/main-banner":13}],14:[function(require,module,exports) {

var OVERLAY_ID = '__parcel__error__overlay__';

var global = (1, eval)('this');
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

var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = '' || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + '63549' + '/');
  ws.onmessage = function (event) {
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      data.assets.forEach(function (asset) {
        hmrApply(global.parcelRequire, asset);
      });

      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          hmrAccept(global.parcelRequire, asset.id);
        }
      });
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
  overlay.id = OVERLAY_ID;

  // html encode message and stack trace
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
        parents.push(+k);
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

function hmrAccept(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAccept(bundle.parent, id);
  }

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

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAccept(global.parcelRequire, id);
  });
}
},{}]},{},[14,2])
//# sourceMappingURL=/main.9088934b.map