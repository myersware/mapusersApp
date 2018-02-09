/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/bin/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return keys; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return renderer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StateComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ViewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_mithril___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_mithril__);


var keys = {
  autocomplete: "autocomplete",
  autofocus: "autofocus",
  class: "class",
  className: "class",
  enctype: "enctype",
  formaction: "formaction",
  maxlength: "maxlength",
  minlength: "minlength",
  onblur: "onblur",
  onchange: "onchange",
  onclick: "onclick",
  onfocus: "onfocus",
  oninput: "oninput",
  onkeydown: "onkeydown",
  onkeyup: "onkeyup",
  onmousedown: "onmousedown",
  onmouseout: "onmouseout",
  onmouseover: "onmouseover",
  onmouseup: "onmouseup",
  onscroll: "onscroll",
  onsubmit: "onsubmit",
  ontouchend: "ontouchend",
  ontouchmove: "ontouchmove",
  ontouchstart: "ontouchstart",
  readonly: "readonly",
  tabindex: "tabindex"
};

var renderer = __WEBPACK_IMPORTED_MODULE_0_mithril___default.a;
renderer.displayName = "mithril";

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

var stream$2 = createCommonjsModule(function (module) {
	/* eslint-disable */
	(function () {
		var guid = 0,
		    HALT = {};
		function createStream() {
			function stream() {
				if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);
				return stream._state.value;
			}
			initStream(stream);

			if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0]);

			return stream;
		}
		function initStream(stream) {
			stream.constructor = createStream;
			stream._state = { id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined, unregister: undefined };
			stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream;
			stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf;

			Object.defineProperties(stream, {
				end: { get: function get() {
						if (!stream._state.endStream) {
							var endStream = createStream();
							endStream.map(function (value) {
								if (value === true) {
									unregisterStream(stream);
									endStream._state.unregister = function () {
										unregisterStream(endStream);
									};
								}
								return value;
							});
							stream._state.endStream = endStream;
						}
						return stream._state.endStream;
					} }
			});
		}
		function updateStream(stream, value) {
			updateState(stream, value);
			for (var id in stream._state.deps) {
				updateDependency(stream._state.deps[id], false);
			}if (stream._state.unregister != null) stream._state.unregister();
			finalize(stream);
		}
		function updateState(stream, value) {
			stream._state.value = value;
			stream._state.changed = true;
			if (stream._state.state !== 2) stream._state.state = 1;
		}
		function updateDependency(stream, mustSync) {
			var state = stream._state,
			    parents = state.parents;
			if (parents.length > 0 && parents.every(active) && (mustSync || parents.some(changed))) {
				var value = stream._state.derive();
				if (value === HALT) return false;
				updateState(stream, value);
			}
		}
		function finalize(stream) {
			stream._state.changed = false;
			for (var id in stream._state.deps) {
				stream._state.deps[id]._state.changed = false;
			}
		}

		function combine(fn, streams) {
			if (!streams.every(valid)) throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream");
			return initDependency(createStream(), streams, function () {
				return fn.apply(this, streams.concat([streams.filter(changed)]));
			});
		}

		function initDependency(dep, streams, derive) {
			var state = dep._state;
			state.derive = derive;
			state.parents = streams.filter(notEnded);

			registerDependency(dep, state.parents);
			updateDependency(dep, true);

			return dep;
		}
		function registerDependency(stream, parents) {
			for (var i = 0; i < parents.length; i++) {
				parents[i]._state.deps[stream._state.id] = stream;
				registerDependency(stream, parents[i]._state.parents);
			}
		}
		function unregisterStream(stream) {
			for (var i = 0; i < stream._state.parents.length; i++) {
				var parent = stream._state.parents[i];
				delete parent._state.deps[stream._state.id];
			}
			for (var id in stream._state.deps) {
				var dependent = stream._state.deps[id];
				var index = dependent._state.parents.indexOf(stream);
				if (index > -1) dependent._state.parents.splice(index, 1);
			}
			stream._state.state = 2; //ended
			stream._state.deps = {};
		}

		function map(fn) {
			return combine(function (stream) {
				return fn(stream());
			}, [this]);
		}
		function ap(stream) {
			return combine(function (s1, s2) {
				return s1()(s2());
			}, [stream, this]);
		}
		function valueOf() {
			return this._state.value;
		}
		function toJSON() {
			return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value;
		}

		function valid(stream) {
			return stream._state;
		}
		function active(stream) {
			return stream._state.state === 1;
		}
		function changed(stream) {
			return stream._state.changed;
		}
		function notEnded(stream) {
			return stream._state.state !== 2;
		}

		function merge(streams) {
			return combine(function () {
				return streams.map(function (s) {
					return s();
				});
			}, streams);
		}

		function scan(reducer, seed, stream) {
			var newStream = combine(function (s) {
				return seed = reducer(seed, s._state.value);
			}, [stream]);

			if (newStream._state.state === 0) newStream(seed);

			return newStream;
		}

		function scanMerge(tuples, seed) {
			var streams = tuples.map(function (tuple) {
				var stream = tuple[0];
				if (stream._state.state === 0) stream(undefined);
				return stream;
			});

			var newStream = combine(function () {
				var changed = arguments[arguments.length - 1];

				streams.forEach(function (stream, idx) {
					if (changed.indexOf(stream) > -1) {
						seed = tuples[idx][1](seed, stream._state.value);
					}
				});

				return seed;
			}, streams);

			return newStream;
		}

		createStream["fantasy-land/of"] = createStream;
		createStream.merge = merge;
		createStream.combine = combine;
		createStream.scan = scan;
		createStream.scanMerge = scanMerge;
		createStream.HALT = HALT;

		module["exports"] = createStream;
	})();
});

var stream = stream$2;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var requiresKeys = false;

var StateComponent = function StateComponent(_ref) {
  var _ref$createContent = _ref.createContent,
      createContent = _ref$createContent === undefined ? function () {} : _ref$createContent,
      _ref$createProps = _ref.createProps,
      createProps = _ref$createProps === undefined ? function () {} : _ref$createProps,
      _ref$component = _ref.component,
      component = _ref$component === undefined ? null : _ref$component,
      _ref$getElement = _ref.getElement,
      getElement = _ref$getElement === undefined ? function () {
    return "div";
  } : _ref$getElement,
      _ref$getInitialState = _ref.getInitialState,
      getInitialState = _ref$getInitialState === undefined ? function () {
    return {};
  } : _ref$getInitialState,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === undefined ? function () {} : _ref$onMount,
      _ref$onUnMount = _ref.onUnMount,
      onUnMount = _ref$onUnMount === undefined ? function () {} : _ref$onUnMount,
      _ref$onUpdate = _ref.onUpdate,
      onUpdate = _ref$onUpdate === undefined ? function () {} : _ref$onUpdate,
      _ref$view = _ref.view,
      view = _ref$view === undefined ? null : _ref$view;


  var oninit = function oninit(vnode) {
    var protoState = _extends({}, vnode);
    var initialState = getInitialState(protoState, stream);
    _extends(vnode.state, initialState);
    vnode._mounted = false;

    vnode.state.redrawOnUpdate && vnode.state.redrawOnUpdate.map(function () {
      return vnode._mounted && setTimeout(renderer.redraw);
    });
  };

  var oncreate = function oncreate(vnode) {
    vnode._mounted = true;
    onMount(vnode, { keys: keys });
  };

  var render = function render(vnode) {
    return renderer(component || getElement(vnode), createProps(vnode, { renderer: renderer, requiresKeys: requiresKeys, keys: keys }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, requiresKeys: requiresKeys, keys: keys }), vnode.attrs.after]);
  };

  return {
    view: view ? function (vnode) {
      return view(vnode, { render: render, renderer: renderer });
    } : function (vnode) {
      return render(vnode);
    },
    oninit: oninit,
    oncreate: oncreate,
    onremove: onUnMount,
    onupdate: onUpdate
  };
};

var requiresKeys$1 = false;

var ViewComponent = function ViewComponent(_ref) {
  var _ref$createContent = _ref.createContent,
      createContent = _ref$createContent === undefined ? function () {} : _ref$createContent,
      _ref$createProps = _ref.createProps,
      createProps = _ref$createProps === undefined ? function () {} : _ref$createProps,
      _ref$getElement = _ref.getElement,
      getElement = _ref$getElement === undefined ? function () {
    return "div";
  } : _ref$getElement,
      _ref$component = _ref.component,
      component = _ref$component === undefined ? null : _ref$component,
      _ref$view = _ref.view,
      view = _ref$view === undefined ? null : _ref$view,
      _ref$onMount = _ref.onMount,
      onMount = _ref$onMount === undefined ? function () {} : _ref$onMount,
      _ref$onUnMount = _ref.onUnMount,
      onUnMount = _ref$onUnMount === undefined ? function () {} : _ref$onUnMount;


  var render = function render(vnode) {
    return renderer(component || getElement(vnode), createProps(vnode, { renderer: renderer, requiresKeys: requiresKeys$1, keys: keys }), [vnode.attrs.before, createContent(vnode, { renderer: renderer, requiresKeys: requiresKeys$1, keys: keys }), vnode.attrs.after]);
  };

  return {
    view: view ? function (vnode) {
      return view(vnode, { render: render, renderer: renderer });
    } : function (vnode) {
      return render(vnode);
    },
    oncreate: function oncreate(vnode) {
      return onMount(vnode, { keys: keys });
    },
    onremove: onUnMount
  };
};




/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return getAnimationEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Conditional; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return filterSupportedAttributes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return unpackAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return isTouch; });
/* unused harmony export pointerStartEvent */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return pointerEndEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return pointerStartMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return pointerMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return pointerEndMoveEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Multi; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return show; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return hide; });
/* unused harmony export throttle */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return subscribe; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "p", function() { return unsubscribe; });
/* unused harmony export emit */
var isClient = typeof document !== "undefined";
var isServer = !isClient;

var evts = {
  "animation": "animationend",
  "OAnimation": "oAnimationEnd",
  "MozAnimation": "animationend",
  "WebkitAnimation": "webkitAnimationEnd"
};

var getAnimationEndEvent = function getAnimationEndEvent() {
  if (isClient) {
    var el = document.createElement("fakeelement");
    for (var a in evts) {
      if (el.style[a] !== undefined) {
        return evts[a];
      }
    }
  }
};

var Conditional = {
  view: function view(vnode, _ref) {
    var h = _ref.renderer;

    var attrs = vnode.attrs;
    return attrs.permanent || attrs.show ? h(attrs.instance, attrs) : h("span", { className: attrs.placeholderClassName });
  }
};

Conditional.displayName = "Conditional";

var r = function r(acc, p) {
  return acc[p] = 1, acc;
};

/* 
Separately handled props:
- class
- element
*/

var defaultAttrs = [
// Universal
"key", "style", "href", "id",

// React
"tabIndex",

// Mithril
"tabindex", "oninit", "oncreate", "onupdate", "onbeforeremove", "onremove", "onbeforeupdate"];

var filterSupportedAttributes = function filterSupportedAttributes(attrs) {
  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$add = _ref.add,
      addAttrs = _ref$add === undefined ? [] : _ref$add,
      _ref$remove = _ref.remove,
      removeAttrs = _ref$remove === undefined ? [] : _ref$remove;

  var removeLookup = removeAttrs.reduce(r, {});
  var supported = defaultAttrs.concat(addAttrs).filter(function (item) {
    return !removeLookup[item];
  }).reduce(r, {});
  return Object.keys(attrs).reduce(function (acc, key) {
    return supported[key] ? acc[key] = attrs[key] : null, acc;
  }, {});
};

var unpackAttrs = function unpackAttrs(attrs) {
  return typeof attrs === "function" ? attrs() : attrs;
};

var isTouch = isServer ? false : "ontouchstart" in document.documentElement;

var pointerStartEvent = isTouch ? "click" : "mousedown";

var pointerEndEvent = isTouch ? "click" : "mouseup";

var pointerStartMoveEvent = isTouch ? "touchstart" : "mousedown";

var pointerMoveEvent = isTouch ? "touchmove" : "mousemove";

var pointerEndMoveEvent = isTouch ? "touchend" : "mouseup";

if (isClient) {
  document.querySelector("html").classList.add(isTouch ? "pe-touch" : "pe-no-touch");
}

var listeners = {};

// https://gist.github.com/Eartz/fe651f2fadcc11444549
var throttle = function throttle(func) {
  var s = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.05;
  var context = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : isClient ? window : {};

  var wait = false;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    var later = function later() {
      return func.apply(context, args);
    };
    if (!wait) {
      later();
      wait = true;
      setTimeout(function () {
        return wait = false;
      }, s);
    }
  };
};

var subscribe = function subscribe(eventName, listener, delay) {
  listeners[eventName] = listeners[eventName] || [];
  listeners[eventName].push(delay ? throttle(listener, delay) : listener);
};

var unsubscribe = function unsubscribe(eventName, listener) {
  if (!listeners[eventName]) {
    return;
  }
  var index = listeners[eventName].indexOf(listener);
  if (index > -1) {
    listeners[eventName].splice(index, 1);
  }
};

var emit = function emit(eventName, event) {
  if (!listeners[eventName]) {
    return;
  }
  listeners[eventName].forEach(function (listener) {
    return listener(event);
  });
};

if (isClient) {
  window.addEventListener("resize", function (e) {
    return emit("resize", e);
  });
  window.addEventListener("scroll", function (e) {
    return emit("scroll", e);
  });
  window.addEventListener("keydown", function (e) {
    return emit("keydown", e);
  });
  window.addEventListener(pointerEndEvent, function (e) {
    return emit(pointerEndEvent, e);
  });
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/*
Helper module to manage multiple items of the same component type.
*/

var Multi = function Multi(_ref) {
  var mOptions = _ref.options,
      renderer = _ref.renderer;


  var items = []; // This is shared between all instances of a type (Dialog, Notification, ...)
  var current = void 0;

  var getInitialState = function getInitialState(vnode, createStream) {
    current = createStream(null);
    return {
      current: current,
      redrawOnUpdate: createStream.merge([current])
    };
  };

  /*
  @param e: { id, eventName }
  */
  var onChange = function onChange(e) {
    if (!current) {
      console.error("Cannot set state. Did you set a root element like Dialog to show instances?"); // eslint-disable-line no-console
    }
    current(e.id);
    emit(mOptions.name, e);
  };

  var itemIndex = function itemIndex(id) {
    var item = findItem(id);
    return items.indexOf(item);
  };

  var removeItem = function removeItem(id) {
    var index = itemIndex(id);
    if (index !== -1) {
      items.splice(index, 1);
      onChange({ id: id, name: "removeItem" });
    }
  };

  var replaceItem = function replaceItem(id, newItem) {
    var index = itemIndex(id);
    if (index !== -1) {
      items[index] = newItem;
    }
  };

  var findItem = function findItem(id) {
    // traditional for loop for IE10
    for (var i = 0; i < items.length; i++) {
      if (items[i].instanceId === id) {
        return items[i];
      }
    }
  };

  var next = function next() {
    if (items.length) {
      items[0].show = true;
    }
    onChange({ id: items.length ? items[0].instanceId : null, name: "next" });
  };

  var remove = function remove() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;

    if (mOptions.queue) {
      items.shift();
      next();
    } else {
      removeItem(instanceId);
    }
  };

  var removeAll = function removeAll() {
    items.length = 0;
    onChange({ id: null, name: "removeAll" });
  };

  var setPauseState = function setPauseState(pause, instanceId) {
    var item = findItem(instanceId);
    if (item) {
      item.pause = pause;
      item.unpause = !pause;
      onChange({ id: instanceId, name: pause ? "pause" : "unpause" });
    }
  };

  var createItem = function createItem(itemAttrs, instanceId, spawn) {
    var resolveShow = void 0;
    var resolveHide = void 0;
    var attrs = unpackAttrs(itemAttrs);

    var didShow = function didShow() {
      if (attrs.didShow) {
        attrs.didShow(instanceId);
      }
      onChange({ id: instanceId, name: "didShow" });
      return resolveShow(instanceId);
    };
    var showPromise = new Promise(function (resolve) {
      return resolveShow = resolve;
    });

    var didHide = function didHide() {
      if (attrs.didHide) {
        attrs.didHide(instanceId);
      }
      onChange({ id: instanceId, name: "didHide" });
      remove(instanceId);
      return resolveHide(instanceId);
    };

    var hidePromise = new Promise(function (resolve) {
      return resolveHide = resolve;
    });

    return _extends({}, mOptions, {
      instanceId: instanceId,
      spawn: spawn,
      attrs: itemAttrs,
      show: mOptions.queue ? false : true,
      showPromise: showPromise,
      hidePromise: hidePromise,
      didShow: didShow,
      didHide: didHide
    });
  };

  var count = function count() {
    return items.length;
  };
  var pause = function pause() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;
    return setPauseState(true, instanceId);
  };
  var unpause = function unpause() {
    var instanceId = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : mOptions.defaultId;
    return setPauseState(false, instanceId);
  };

  var show = function show() {
    var attrs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var spawnOpts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    var instanceId = spawnOpts.id || mOptions.defaultId;
    var spawn = spawnOpts.spawn || mOptions.defaultId;
    var item = createItem(attrs, instanceId, spawn);
    onChange({ id: instanceId, name: "show" });
    if (mOptions.queue) {
      items.push(item);
      if (items.length === 1) {
        next();
      }
    } else {
      var storedItem = findItem(instanceId);
      if (!storedItem) {
        items.push(item);
      } else {
        replaceItem(instanceId, item);
      }
    }
    return item.showPromise;
  };

  var hide = function hide() {
    var spawnOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    var instanceId = spawnOpts.id || mOptions.defaultId;
    var item = mOptions.queue && items.length ? items[0] : findItem(instanceId);
    if (item) {
      item.hide = true;
    }
    onChange({ id: instanceId, name: "hide" });
    return item ? item.hidePromise : Promise.resolve(instanceId);
  };

  var clear = removeAll;

  var view = function view(_ref2) {
    var attrs = _ref2.attrs;

    var spawn = attrs.spawn || mOptions.defaultId;
    var candidates = items.filter(function (item) {
      return item.show && item.spawn === spawn;
    });
    if (mOptions.htmlShowClass && isClient && document.documentElement) {
      document.documentElement.classList[candidates.length ? "add" : "remove"](mOptions.htmlShowClass);
    }
    return !candidates.length ? renderer(mOptions.placeholder) // placeholder because we cannot return null
    : renderer(mOptions.holderSelector, {
      className: attrs.position === "container" ? "pe-multiple--container" : "pe-multiple--screen"
    }, candidates.map(function (itemData) {
      return renderer(mOptions.instance, _extends({}, {
        key: itemData.key,
        instanceId: itemData.instanceId,
        transitions: mOptions.transitions,
        holderSelector: mOptions.holderSelector,
        className: mOptions.className,
        showInstance: itemData.show,
        hideInstance: itemData.hide,
        pauseInstance: itemData.pause,
        unpauseInstance: itemData.unpause,
        multipleDidShow: itemData.didShow,
        multipleDidHide: itemData.didHide,
        multipleClear: clear
      }, unpackAttrs(itemData.attrs)));
    }));
  };

  return {
    clear: clear,
    count: count,
    getInitialState: getInitialState,
    hide: hide,
    pause: pause,
    remove: remove,
    show: show,
    unpause: unpause,
    view: view
  };
};

Multi.displayName = "Multi";

/*
Generic show/hide transition module
*/

// defaults
var SHOW_DURATION = .220; // default dialog timing
var HIDE_DURATION = .200; // default dialog timing
var SHOW_DELAY = 0;
var HIDE_DELAY = 0;
var TRANSITION = "both";

// See: transition
var show = function show(opts) {
  return transition(opts, "show");
};

var hide = function hide(opts) {
  return transition(opts, "hide");
};

var getTiming = function getTiming(opts, state, showAttr, hideAttr, defaultShowTiming, defaultHideTiming) {
  var transition = opts.transition || TRANSITION;
  if (transition === "none") {
    return 0;
  } else if (transition === "show" && state === "hide") {
    return 0;
  } else if (transition === "hide" && state === "show") {
    return 0;
  } else {
    // both
    return state === "show" ? opts[showAttr] !== undefined ? opts[showAttr] : defaultShowTiming : opts[hideAttr] !== undefined ? opts[hideAttr] : defaultHideTiming;
  }
};

/*
opts:
- transition
- showDuration
- hideDuration

- state (show, hide)
*/
var getDuration = function getDuration(opts, state) {
  return getTiming(opts, state, "showDuration", "hideDuration", SHOW_DURATION, HIDE_DURATION);
};

/*
opts:
- transition (show, hide, both)
- showDelay
- hideDelay

- state (show, hide)
*/
var getDelay = function getDelay(opts, state) {
  return getTiming(opts, state, "showDelay", "hideDelay", SHOW_DELAY, HIDE_DELAY);
};

/*
opts:
- el
- duration
- delay
- showClass
- beforeShow
- show
- hide
- afterHide
- showDelay
- hideDelay

- state (show, hide)
*/
var transition = function transition(opts, state) {
  var el = opts.el;
  if (!el) {
    return Promise.resolve();
  } else {
    return new Promise(function (resolve) {
      var transitionDuration = getDuration(opts, state) * 1000;
      var delay = getDelay(opts, state) * 1000;
      var style = el.style;
      var beforeTransition = opts.beforeShow && state === "show" ? function () {
        style.transitionDuration = "0ms";
        style.transitionDelay = "0ms";
        opts.beforeShow();
      } : null;

      var afterTransition = opts.afterHide && state === "hide" ? function () {
        return opts.afterHide();
      } : null;

      var applyTransition = function applyTransition() {
        style.transitionDuration = transitionDuration + "ms";
        style.transitionDelay = delay + "ms";

        if (opts.showClass) {
          el.classList[state === "show" ? "add" : "remove"](opts.showClass);
        }
        if (opts.show && typeof opts.show === "function" && state === "show") {
          opts.show();
        }
        if (opts.hide && typeof opts.hide === "function" && state === "hide") {
          opts.hide();
        }
      };

      var doTransition = function doTransition() {
        applyTransition();
        setTimeout(function () {
          if (afterTransition) {
            afterTransition();
          }
          resolve();
        }, transitionDuration + delay);
      };

      var maybeDelayTransition = function maybeDelayTransition() {
        if (transitionDuration === 0) {
          doTransition();
        } else {
          setTimeout(doTransition, 0);
        }
      };

      if (beforeTransition) {
        beforeTransition();
        el.offsetHeight; // force reflow
        setTimeout(function () {
          maybeDelayTransition();
        }, 0);
      } else {
        maybeDelayTransition();
      }
    });
  }
};




/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export componentConfig */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_style__ = __webpack_require__(32);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0_polythene_style__["a"]; });
// Placeholder for custom theme config file
// In your app paths setup, change the current path to your custom config file; see the theme README.

// Example:

// export const componentConfig = {
//     Button: vars => {
//         const mainColor = '#e4521b';
//         const textColor = '#fff';
//         const newVars = Object.assign(
//           {},
//           vars,
//           {
//             border_radius:                        0,
//             color_light_raised_normal_background: mainColor,
//             color_light_raised_normal_text:       textColor,
//             color_dark_raised_normal_background:  mainColor,
//             color_dark_raised_normal_text:        textColor
//           }
//         );
//         return [
//             { '': vars }, // default vars for all pages
//             { '.example-custom-theme ': newVars } // custom vars for this selector
//         ];
//     }
// };

var componentConfig = {};





/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Icon; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_svg__ = __webpack_require__(19);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Icon = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon__["a" /* coreIcon */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon__["a" /* coreIcon */].createProps(vnode, _extends(args, { SVG: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_svg__["a" /* SVG */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon__["a" /* coreIcon */].createContent(vnode, _extends(args, { SVG: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_svg__["a" /* SVG */] }));
  }
}));

Icon.displayName = "Icon";




/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Shadow; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_shadow__ = __webpack_require__(39);



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Shadow = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_shadow__["a" /* coreShadow */]));

Shadow.displayName = "Shadow";




/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(setImmediate, global) {;(function() {
"use strict"
function Vnode(tag, key, attrs0, children, text, dom) {
	return {tag: tag, key: key, attrs: attrs0, children: children, text: text, dom: dom, domSize: undefined, state: undefined, _state: undefined, events: undefined, instance: undefined, skip: false}
}
Vnode.normalize = function(node) {
	if (Array.isArray(node)) return Vnode("[", undefined, undefined, Vnode.normalizeChildren(node), undefined, undefined)
	if (node != null && typeof node !== "object") return Vnode("#", undefined, undefined, node === false ? "" : node, undefined, undefined)
	return node
}
Vnode.normalizeChildren = function normalizeChildren(children) {
	for (var i = 0; i < children.length; i++) {
		children[i] = Vnode.normalize(children[i])
	}
	return children
}
var selectorParser = /(?:(^|#|\.)([^#\.\[\]]+))|(\[(.+?)(?:\s*=\s*("|'|)((?:\\["'\]]|.)*?)\5)?\])/g
var selectorCache = {}
var hasOwn = {}.hasOwnProperty
function isEmpty(object) {
	for (var key in object) if (hasOwn.call(object, key)) return false
	return true
}
function compileSelector(selector) {
	var match, tag = "div", classes = [], attrs = {}
	while (match = selectorParser.exec(selector)) {
		var type = match[1], value = match[2]
		if (type === "" && value !== "") tag = value
		else if (type === "#") attrs.id = value
		else if (type === ".") classes.push(value)
		else if (match[3][0] === "[") {
			var attrValue = match[6]
			if (attrValue) attrValue = attrValue.replace(/\\(["'])/g, "$1").replace(/\\\\/g, "\\")
			if (match[4] === "class") classes.push(attrValue)
			else attrs[match[4]] = attrValue === "" ? attrValue : attrValue || true
		}
	}
	if (classes.length > 0) attrs.className = classes.join(" ")
	return selectorCache[selector] = {tag: tag, attrs: attrs}
}
function execSelector(state, attrs, children) {
	var hasAttrs = false, childList, text
	var className = attrs.className || attrs.class
	if (!isEmpty(state.attrs) && !isEmpty(attrs)) {
		var newAttrs = {}
		for(var key in attrs) {
			if (hasOwn.call(attrs, key)) {
				newAttrs[key] = attrs[key]
			}
		}
		attrs = newAttrs
	}
	for (var key in state.attrs) {
		if (hasOwn.call(state.attrs, key)) {
			attrs[key] = state.attrs[key]
		}
	}
	if (className !== undefined) {
		if (attrs.class !== undefined) {
			attrs.class = undefined
			attrs.className = className
		}
		if (state.attrs.className != null) {
			attrs.className = state.attrs.className + " " + className
		}
	}
	for (var key in attrs) {
		if (hasOwn.call(attrs, key) && key !== "key") {
			hasAttrs = true
			break
		}
	}
	if (Array.isArray(children) && children.length === 1 && children[0] != null && children[0].tag === "#") {
		text = children[0].children
	} else {
		childList = children
	}
	return Vnode(state.tag, attrs.key, hasAttrs ? attrs : undefined, childList, text)
}
function hyperscript(selector) {
	// Because sloppy mode sucks
	var attrs = arguments[1], start = 2, children
	if (selector == null || typeof selector !== "string" && typeof selector !== "function" && typeof selector.view !== "function") {
		throw Error("The selector must be either a string or a component.");
	}
	if (typeof selector === "string") {
		var cached = selectorCache[selector] || compileSelector(selector)
	}
	if (attrs == null) {
		attrs = {}
	} else if (typeof attrs !== "object" || attrs.tag != null || Array.isArray(attrs)) {
		attrs = {}
		start = 1
	}
	if (arguments.length === start + 1) {
		children = arguments[start]
		if (!Array.isArray(children)) children = [children]
	} else {
		children = []
		while (start < arguments.length) children.push(arguments[start++])
	}
	var normalized = Vnode.normalizeChildren(children)
	if (typeof selector === "string") {
		return execSelector(cached, attrs, normalized)
	} else {
		return Vnode(selector, attrs.key, attrs, normalized)
	}
}
hyperscript.trust = function(html) {
	if (html == null) html = ""
	return Vnode("<", undefined, undefined, html, undefined, undefined)
}
hyperscript.fragment = function(attrs1, children) {
	return Vnode("[", attrs1.key, attrs1, Vnode.normalizeChildren(children), undefined, undefined)
}
var m = hyperscript
/** @constructor */
var PromisePolyfill = function(executor) {
	if (!(this instanceof PromisePolyfill)) throw new Error("Promise must be called with `new`")
	if (typeof executor !== "function") throw new TypeError("executor must be a function")
	var self = this, resolvers = [], rejectors = [], resolveCurrent = handler(resolvers, true), rejectCurrent = handler(rejectors, false)
	var instance = self._instance = {resolvers: resolvers, rejectors: rejectors}
	var callAsync = typeof setImmediate === "function" ? setImmediate : setTimeout
	function handler(list, shouldAbsorb) {
		return function execute(value) {
			var then
			try {
				if (shouldAbsorb && value != null && (typeof value === "object" || typeof value === "function") && typeof (then = value.then) === "function") {
					if (value === self) throw new TypeError("Promise can't be resolved w/ itself")
					executeOnce(then.bind(value))
				}
				else {
					callAsync(function() {
						if (!shouldAbsorb && list.length === 0) console.error("Possible unhandled promise rejection:", value)
						for (var i = 0; i < list.length; i++) list[i](value)
						resolvers.length = 0, rejectors.length = 0
						instance.state = shouldAbsorb
						instance.retry = function() {execute(value)}
					})
				}
			}
			catch (e) {
				rejectCurrent(e)
			}
		}
	}
	function executeOnce(then) {
		var runs = 0
		function run(fn) {
			return function(value) {
				if (runs++ > 0) return
				fn(value)
			}
		}
		var onerror = run(rejectCurrent)
		try {then(run(resolveCurrent), onerror)} catch (e) {onerror(e)}
	}
	executeOnce(executor)
}
PromisePolyfill.prototype.then = function(onFulfilled, onRejection) {
	var self = this, instance = self._instance
	function handle(callback, list, next, state) {
		list.push(function(value) {
			if (typeof callback !== "function") next(value)
			else try {resolveNext(callback(value))} catch (e) {if (rejectNext) rejectNext(e)}
		})
		if (typeof instance.retry === "function" && state === instance.state) instance.retry()
	}
	var resolveNext, rejectNext
	var promise = new PromisePolyfill(function(resolve, reject) {resolveNext = resolve, rejectNext = reject})
	handle(onFulfilled, instance.resolvers, resolveNext, true), handle(onRejection, instance.rejectors, rejectNext, false)
	return promise
}
PromisePolyfill.prototype.catch = function(onRejection) {
	return this.then(null, onRejection)
}
PromisePolyfill.resolve = function(value) {
	if (value instanceof PromisePolyfill) return value
	return new PromisePolyfill(function(resolve) {resolve(value)})
}
PromisePolyfill.reject = function(value) {
	return new PromisePolyfill(function(resolve, reject) {reject(value)})
}
PromisePolyfill.all = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		var total = list.length, count = 0, values = []
		if (list.length === 0) resolve([])
		else for (var i = 0; i < list.length; i++) {
			(function(i) {
				function consume(value) {
					count++
					values[i] = value
					if (count === total) resolve(values)
				}
				if (list[i] != null && (typeof list[i] === "object" || typeof list[i] === "function") && typeof list[i].then === "function") {
					list[i].then(consume, reject)
				}
				else consume(list[i])
			})(i)
		}
	})
}
PromisePolyfill.race = function(list) {
	return new PromisePolyfill(function(resolve, reject) {
		for (var i = 0; i < list.length; i++) {
			list[i].then(resolve, reject)
		}
	})
}
if (typeof window !== "undefined") {
	if (typeof window.Promise === "undefined") window.Promise = PromisePolyfill
	var PromisePolyfill = window.Promise
} else if (typeof global !== "undefined") {
	if (typeof global.Promise === "undefined") global.Promise = PromisePolyfill
	var PromisePolyfill = global.Promise
} else {
}
var buildQueryString = function(object) {
	if (Object.prototype.toString.call(object) !== "[object Object]") return ""
	var args = []
	for (var key0 in object) {
		destructure(key0, object[key0])
	}
	return args.join("&")
	function destructure(key0, value) {
		if (Array.isArray(value)) {
			for (var i = 0; i < value.length; i++) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else if (Object.prototype.toString.call(value) === "[object Object]") {
			for (var i in value) {
				destructure(key0 + "[" + i + "]", value[i])
			}
		}
		else args.push(encodeURIComponent(key0) + (value != null && value !== "" ? "=" + encodeURIComponent(value) : ""))
	}
}
var FILE_PROTOCOL_REGEX = new RegExp("^file://", "i")
var _8 = function($window, Promise) {
	var callbackCount = 0
	var oncompletion
	function setCompletionCallback(callback) {oncompletion = callback}
	function finalizer() {
		var count = 0
		function complete() {if (--count === 0 && typeof oncompletion === "function") oncompletion()}
		return function finalize(promise0) {
			var then0 = promise0.then
			promise0.then = function() {
				count++
				var next = then0.apply(promise0, arguments)
				next.then(complete, function(e) {
					complete()
					if (count === 0) throw e
				})
				return finalize(next)
			}
			return promise0
		}
	}
	function normalize(args, extra) {
		if (typeof args === "string") {
			var url = args
			args = extra || {}
			if (args.url == null) args.url = url
		}
		return args
	}
	function request(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			if (args.method == null) args.method = "GET"
			args.method = args.method.toUpperCase()
			var useBody = (args.method === "GET" || args.method === "TRACE") ? false : (typeof args.useBody === "boolean" ? args.useBody : true)
			if (typeof args.serialize !== "function") args.serialize = typeof FormData !== "undefined" && args.data instanceof FormData ? function(value) {return value} : JSON.stringify
			if (typeof args.deserialize !== "function") args.deserialize = deserialize
			if (typeof args.extract !== "function") args.extract = extract
			args.url = interpolate(args.url, args.data)
			if (useBody) args.data = args.serialize(args.data)
			else args.url = assemble(args.url, args.data)
			var xhr = new $window.XMLHttpRequest(),
				aborted = false,
				_abort = xhr.abort
			xhr.abort = function abort() {
				aborted = true
				_abort.call(xhr)
			}
			xhr.open(args.method, args.url, typeof args.async === "boolean" ? args.async : true, typeof args.user === "string" ? args.user : undefined, typeof args.password === "string" ? args.password : undefined)
			if (args.serialize === JSON.stringify && useBody && !(args.headers && args.headers.hasOwnProperty("Content-Type"))) {
				xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8")
			}
			if (args.deserialize === deserialize && !(args.headers && args.headers.hasOwnProperty("Accept"))) {
				xhr.setRequestHeader("Accept", "application/json, text/*")
			}
			if (args.withCredentials) xhr.withCredentials = args.withCredentials
			for (var key in args.headers) if ({}.hasOwnProperty.call(args.headers, key)) {
				xhr.setRequestHeader(key, args.headers[key])
			}
			if (typeof args.config === "function") xhr = args.config(xhr, args) || xhr
			xhr.onreadystatechange = function() {
				// Don't throw errors on xhr.abort().
				if(aborted) return
				if (xhr.readyState === 4) {
					try {
						var response = (args.extract !== extract) ? args.extract(xhr, args) : args.deserialize(args.extract(xhr, args))
						if ((xhr.status >= 200 && xhr.status < 300) || xhr.status === 304 || FILE_PROTOCOL_REGEX.test(args.url)) {
							resolve(cast(args.type, response))
						}
						else {
							var error = new Error(xhr.responseText)
							for (var key in response) error[key] = response[key]
							reject(error)
						}
					}
					catch (e) {
						reject(e)
					}
				}
			}
			if (useBody && (args.data != null)) xhr.send(args.data)
			else xhr.send()
		})
		return args.background === true ? promise0 : finalize(promise0)
	}
	function jsonp(args, extra) {
		var finalize = finalizer()
		args = normalize(args, extra)
		var promise0 = new Promise(function(resolve, reject) {
			var callbackName = args.callbackName || "_mithril_" + Math.round(Math.random() * 1e16) + "_" + callbackCount++
			var script = $window.document.createElement("script")
			$window[callbackName] = function(data) {
				script.parentNode.removeChild(script)
				resolve(cast(args.type, data))
				delete $window[callbackName]
			}
			script.onerror = function() {
				script.parentNode.removeChild(script)
				reject(new Error("JSONP request failed"))
				delete $window[callbackName]
			}
			if (args.data == null) args.data = {}
			args.url = interpolate(args.url, args.data)
			args.data[args.callbackKey || "callback"] = callbackName
			script.src = assemble(args.url, args.data)
			$window.document.documentElement.appendChild(script)
		})
		return args.background === true? promise0 : finalize(promise0)
	}
	function interpolate(url, data) {
		if (data == null) return url
		var tokens = url.match(/:[^\/]+/gi) || []
		for (var i = 0; i < tokens.length; i++) {
			var key = tokens[i].slice(1)
			if (data[key] != null) {
				url = url.replace(tokens[i], data[key])
			}
		}
		return url
	}
	function assemble(url, data) {
		var querystring = buildQueryString(data)
		if (querystring !== "") {
			var prefix = url.indexOf("?") < 0 ? "?" : "&"
			url += prefix + querystring
		}
		return url
	}
	function deserialize(data) {
		try {return data !== "" ? JSON.parse(data) : null}
		catch (e) {throw new Error(data)}
	}
	function extract(xhr) {return xhr.responseText}
	function cast(type0, data) {
		if (typeof type0 === "function") {
			if (Array.isArray(data)) {
				for (var i = 0; i < data.length; i++) {
					data[i] = new type0(data[i])
				}
			}
			else return new type0(data)
		}
		return data
	}
	return {request: request, jsonp: jsonp, setCompletionCallback: setCompletionCallback}
}
var requestService = _8(window, PromisePolyfill)
var coreRenderer = function($window) {
	var $doc = $window.document
	var $emptyFragment = $doc.createDocumentFragment()
	var nameSpace = {
		svg: "http://www.w3.org/2000/svg",
		math: "http://www.w3.org/1998/Math/MathML"
	}
	var onevent
	function setEventCallback(callback) {return onevent = callback}
	function getNameSpace(vnode) {
		return vnode.attrs && vnode.attrs.xmlns || nameSpace[vnode.tag]
	}
	//create
	function createNodes(parent, vnodes, start, end, hooks, nextSibling, ns) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				createNode(parent, vnode, hooks, ns, nextSibling)
			}
		}
	}
	function createNode(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		if (typeof tag === "string") {
			vnode.state = {}
			if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
			switch (tag) {
				case "#": return createText(parent, vnode, nextSibling)
				case "<": return createHTML(parent, vnode, nextSibling)
				case "[": return createFragment(parent, vnode, hooks, ns, nextSibling)
				default: return createElement(parent, vnode, hooks, ns, nextSibling)
			}
		}
		else return createComponent(parent, vnode, hooks, ns, nextSibling)
	}
	function createText(parent, vnode, nextSibling) {
		vnode.dom = $doc.createTextNode(vnode.children)
		insertNode(parent, vnode.dom, nextSibling)
		return vnode.dom
	}
	function createHTML(parent, vnode, nextSibling) {
		var match1 = vnode.children.match(/^\s*?<(\w+)/im) || []
		var parent1 = {caption: "table", thead: "table", tbody: "table", tfoot: "table", tr: "tbody", th: "tr", td: "tr", colgroup: "table", col: "colgroup"}[match1[1]] || "div"
		var temp = $doc.createElement(parent1)
		temp.innerHTML = vnode.children
		vnode.dom = temp.firstChild
		vnode.domSize = temp.childNodes.length
		var fragment = $doc.createDocumentFragment()
		var child
		while (child = temp.firstChild) {
			fragment.appendChild(child)
		}
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createFragment(parent, vnode, hooks, ns, nextSibling) {
		var fragment = $doc.createDocumentFragment()
		if (vnode.children != null) {
			var children = vnode.children
			createNodes(fragment, children, 0, children.length, hooks, null, ns)
		}
		vnode.dom = fragment.firstChild
		vnode.domSize = fragment.childNodes.length
		insertNode(parent, fragment, nextSibling)
		return fragment
	}
	function createElement(parent, vnode, hooks, ns, nextSibling) {
		var tag = vnode.tag
		var attrs2 = vnode.attrs
		var is = attrs2 && attrs2.is
		ns = getNameSpace(vnode) || ns
		var element = ns ?
			is ? $doc.createElementNS(ns, tag, {is: is}) : $doc.createElementNS(ns, tag) :
			is ? $doc.createElement(tag, {is: is}) : $doc.createElement(tag)
		vnode.dom = element
		if (attrs2 != null) {
			setAttrs(vnode, attrs2, ns)
		}
		insertNode(parent, element, nextSibling)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else {
			if (vnode.text != null) {
				if (vnode.text !== "") element.textContent = vnode.text
				else vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			}
			if (vnode.children != null) {
				var children = vnode.children
				createNodes(element, children, 0, children.length, hooks, null, ns)
				setLateAttrs(vnode)
			}
		}
		return element
	}
	function initComponent(vnode, hooks) {
		var sentinel
		if (typeof vnode.tag.view === "function") {
			vnode.state = Object.create(vnode.tag)
			sentinel = vnode.state.view
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
		} else {
			vnode.state = void 0
			sentinel = vnode.tag
			if (sentinel.$$reentrantLock$$ != null) return $emptyFragment
			sentinel.$$reentrantLock$$ = true
			vnode.state = (vnode.tag.prototype != null && typeof vnode.tag.prototype.view === "function") ? new vnode.tag(vnode) : vnode.tag(vnode)
		}
		vnode._state = vnode.state
		if (vnode.attrs != null) initLifecycle(vnode.attrs, vnode, hooks)
		initLifecycle(vnode._state, vnode, hooks)
		vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
		if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
		sentinel.$$reentrantLock$$ = null
	}
	function createComponent(parent, vnode, hooks, ns, nextSibling) {
		initComponent(vnode, hooks)
		if (vnode.instance != null) {
			var element = createNode(parent, vnode.instance, hooks, ns, nextSibling)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.dom != null ? vnode.instance.domSize : 0
			insertNode(parent, element, nextSibling)
			return element
		}
		else {
			vnode.domSize = 0
			return $emptyFragment
		}
	}
	//update
	function updateNodes(parent, old, vnodes, recycling, hooks, nextSibling, ns) {
		if (old === vnodes || old == null && vnodes == null) return
		else if (old == null) createNodes(parent, vnodes, 0, vnodes.length, hooks, nextSibling, ns)
		else if (vnodes == null) removeNodes(old, 0, old.length, vnodes)
		else {
			if (old.length === vnodes.length) {
				var isUnkeyed = false
				for (var i = 0; i < vnodes.length; i++) {
					if (vnodes[i] != null && old[i] != null) {
						isUnkeyed = vnodes[i].key == null && old[i].key == null
						break
					}
				}
				if (isUnkeyed) {
					for (var i = 0; i < old.length; i++) {
						if (old[i] === vnodes[i]) continue
						else if (old[i] == null && vnodes[i] != null) createNode(parent, vnodes[i], hooks, ns, getNextSibling(old, i + 1, nextSibling))
						else if (vnodes[i] == null) removeNodes(old, i, i + 1, vnodes)
						else updateNode(parent, old[i], vnodes[i], hooks, getNextSibling(old, i + 1, nextSibling), recycling, ns)
					}
					return
				}
			}
			recycling = recycling || isRecyclable(old, vnodes)
			if (recycling) {
				var pool = old.pool
				old = old.concat(old.pool)
			}
			var oldStart = 0, start = 0, oldEnd = old.length - 1, end = vnodes.length - 1, map
			while (oldEnd >= oldStart && end >= start) {
				var o = old[oldStart], v = vnodes[start]
				if (o === v && !recycling) oldStart++, start++
				else if (o == null) oldStart++
				else if (v == null) start++
				else if (o.key === v.key) {
					var shouldRecycle = (pool != null && oldStart >= old.length - pool.length) || ((pool == null) && recycling)
					oldStart++, start++
					updateNode(parent, o, v, hooks, getNextSibling(old, oldStart, nextSibling), shouldRecycle, ns)
					if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
				}
				else {
					var o = old[oldEnd]
					if (o === v && !recycling) oldEnd--, start++
					else if (o == null) oldEnd--
					else if (v == null) start++
					else if (o.key === v.key) {
						var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
						updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
						if (recycling || start < end) insertNode(parent, toFragment(o), getNextSibling(old, oldStart, nextSibling))
						oldEnd--, start++
					}
					else break
				}
			}
			while (oldEnd >= oldStart && end >= start) {
				var o = old[oldEnd], v = vnodes[end]
				if (o === v && !recycling) oldEnd--, end--
				else if (o == null) oldEnd--
				else if (v == null) end--
				else if (o.key === v.key) {
					var shouldRecycle = (pool != null && oldEnd >= old.length - pool.length) || ((pool == null) && recycling)
					updateNode(parent, o, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), shouldRecycle, ns)
					if (recycling && o.tag === v.tag) insertNode(parent, toFragment(o), nextSibling)
					if (o.dom != null) nextSibling = o.dom
					oldEnd--, end--
				}
				else {
					if (!map) map = getKeyMap(old, oldEnd)
					if (v != null) {
						var oldIndex = map[v.key]
						if (oldIndex != null) {
							var movable = old[oldIndex]
							var shouldRecycle = (pool != null && oldIndex >= old.length - pool.length) || ((pool == null) && recycling)
							updateNode(parent, movable, v, hooks, getNextSibling(old, oldEnd + 1, nextSibling), recycling, ns)
							insertNode(parent, toFragment(movable), nextSibling)
							old[oldIndex].skip = true
							if (movable.dom != null) nextSibling = movable.dom
						}
						else {
							var dom = createNode(parent, v, hooks, ns, nextSibling)
							nextSibling = dom
						}
					}
					end--
				}
				if (end < start) break
			}
			createNodes(parent, vnodes, start, end + 1, hooks, nextSibling, ns)
			removeNodes(old, oldStart, oldEnd + 1, vnodes)
		}
	}
	function updateNode(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		var oldTag = old.tag, tag = vnode.tag
		if (oldTag === tag) {
			vnode.state = old.state
			vnode._state = old._state
			vnode.events = old.events
			if (!recycling && shouldNotUpdate(vnode, old)) return
			if (typeof oldTag === "string") {
				if (vnode.attrs != null) {
					if (recycling) {
						vnode.state = {}
						initLifecycle(vnode.attrs, vnode, hooks)
					}
					else updateLifecycle(vnode.attrs, vnode, hooks)
				}
				switch (oldTag) {
					case "#": updateText(old, vnode); break
					case "<": updateHTML(parent, old, vnode, nextSibling); break
					case "[": updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns); break
					default: updateElement(old, vnode, recycling, hooks, ns)
				}
			}
			else updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns)
		}
		else {
			removeNode(old, null)
			createNode(parent, vnode, hooks, ns, nextSibling)
		}
	}
	function updateText(old, vnode) {
		if (old.children.toString() !== vnode.children.toString()) {
			old.dom.nodeValue = vnode.children
		}
		vnode.dom = old.dom
	}
	function updateHTML(parent, old, vnode, nextSibling) {
		if (old.children !== vnode.children) {
			toFragment(old)
			createHTML(parent, vnode, nextSibling)
		}
		else vnode.dom = old.dom, vnode.domSize = old.domSize
	}
	function updateFragment(parent, old, vnode, recycling, hooks, nextSibling, ns) {
		updateNodes(parent, old.children, vnode.children, recycling, hooks, nextSibling, ns)
		var domSize = 0, children = vnode.children
		vnode.dom = null
		if (children != null) {
			for (var i = 0; i < children.length; i++) {
				var child = children[i]
				if (child != null && child.dom != null) {
					if (vnode.dom == null) vnode.dom = child.dom
					domSize += child.domSize || 1
				}
			}
			if (domSize !== 1) vnode.domSize = domSize
		}
	}
	function updateElement(old, vnode, recycling, hooks, ns) {
		var element = vnode.dom = old.dom
		ns = getNameSpace(vnode) || ns
		if (vnode.tag === "textarea") {
			if (vnode.attrs == null) vnode.attrs = {}
			if (vnode.text != null) {
				vnode.attrs.value = vnode.text //FIXME handle0 multiple children
				vnode.text = undefined
			}
		}
		updateAttrs(vnode, old.attrs, vnode.attrs, ns)
		if (vnode.attrs != null && vnode.attrs.contenteditable != null) {
			setContentEditable(vnode)
		}
		else if (old.text != null && vnode.text != null && vnode.text !== "") {
			if (old.text.toString() !== vnode.text.toString()) old.dom.firstChild.nodeValue = vnode.text
		}
		else {
			if (old.text != null) old.children = [Vnode("#", undefined, undefined, old.text, undefined, old.dom.firstChild)]
			if (vnode.text != null) vnode.children = [Vnode("#", undefined, undefined, vnode.text, undefined, undefined)]
			updateNodes(element, old.children, vnode.children, recycling, hooks, null, ns)
		}
	}
	function updateComponent(parent, old, vnode, hooks, nextSibling, recycling, ns) {
		if (recycling) {
			initComponent(vnode, hooks)
		} else {
			vnode.instance = Vnode.normalize(vnode._state.view.call(vnode.state, vnode))
			if (vnode.instance === vnode) throw Error("A view cannot return the vnode it received as argument")
			if (vnode.attrs != null) updateLifecycle(vnode.attrs, vnode, hooks)
			updateLifecycle(vnode._state, vnode, hooks)
		}
		if (vnode.instance != null) {
			if (old.instance == null) createNode(parent, vnode.instance, hooks, ns, nextSibling)
			else updateNode(parent, old.instance, vnode.instance, hooks, nextSibling, recycling, ns)
			vnode.dom = vnode.instance.dom
			vnode.domSize = vnode.instance.domSize
		}
		else if (old.instance != null) {
			removeNode(old.instance, null)
			vnode.dom = undefined
			vnode.domSize = 0
		}
		else {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
		}
	}
	function isRecyclable(old, vnodes) {
		if (old.pool != null && Math.abs(old.pool.length - vnodes.length) <= Math.abs(old.length - vnodes.length)) {
			var oldChildrenLength = old[0] && old[0].children && old[0].children.length || 0
			var poolChildrenLength = old.pool[0] && old.pool[0].children && old.pool[0].children.length || 0
			var vnodesChildrenLength = vnodes[0] && vnodes[0].children && vnodes[0].children.length || 0
			if (Math.abs(poolChildrenLength - vnodesChildrenLength) <= Math.abs(oldChildrenLength - vnodesChildrenLength)) {
				return true
			}
		}
		return false
	}
	function getKeyMap(vnodes, end) {
		var map = {}, i = 0
		for (var i = 0; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				var key2 = vnode.key
				if (key2 != null) map[key2] = i
			}
		}
		return map
	}
	function toFragment(vnode) {
		var count0 = vnode.domSize
		if (count0 != null || vnode.dom == null) {
			var fragment = $doc.createDocumentFragment()
			if (count0 > 0) {
				var dom = vnode.dom
				while (--count0) fragment.appendChild(dom.nextSibling)
				fragment.insertBefore(dom, fragment.firstChild)
			}
			return fragment
		}
		else return vnode.dom
	}
	function getNextSibling(vnodes, i, nextSibling) {
		for (; i < vnodes.length; i++) {
			if (vnodes[i] != null && vnodes[i].dom != null) return vnodes[i].dom
		}
		return nextSibling
	}
	function insertNode(parent, dom, nextSibling) {
		if (nextSibling && nextSibling.parentNode) parent.insertBefore(dom, nextSibling)
		else parent.appendChild(dom)
	}
	function setContentEditable(vnode) {
		var children = vnode.children
		if (children != null && children.length === 1 && children[0].tag === "<") {
			var content = children[0].children
			if (vnode.dom.innerHTML !== content) vnode.dom.innerHTML = content
		}
		else if (vnode.text != null || children != null && children.length !== 0) throw new Error("Child node of a contenteditable must be trusted")
	}
	//remove
	function removeNodes(vnodes, start, end, context) {
		for (var i = start; i < end; i++) {
			var vnode = vnodes[i]
			if (vnode != null) {
				if (vnode.skip) vnode.skip = false
				else removeNode(vnode, context)
			}
		}
	}
	function removeNode(vnode, context) {
		var expected = 1, called = 0
		if (vnode.attrs && typeof vnode.attrs.onbeforeremove === "function") {
			var result = vnode.attrs.onbeforeremove.call(vnode.state, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeremove === "function") {
			var result = vnode._state.onbeforeremove.call(vnode.state, vnode)
			if (result != null && typeof result.then === "function") {
				expected++
				result.then(continuation, continuation)
			}
		}
		continuation()
		function continuation() {
			if (++called === expected) {
				onremove(vnode)
				if (vnode.dom) {
					var count0 = vnode.domSize || 1
					if (count0 > 1) {
						var dom = vnode.dom
						while (--count0) {
							removeNodeFromDOM(dom.nextSibling)
						}
					}
					removeNodeFromDOM(vnode.dom)
					if (context != null && vnode.domSize == null && !hasIntegrationMethods(vnode.attrs) && typeof vnode.tag === "string") { //TODO test custom elements
						if (!context.pool) context.pool = [vnode]
						else context.pool.push(vnode)
					}
				}
			}
		}
	}
	function removeNodeFromDOM(node) {
		var parent = node.parentNode
		if (parent != null) parent.removeChild(node)
	}
	function onremove(vnode) {
		if (vnode.attrs && typeof vnode.attrs.onremove === "function") vnode.attrs.onremove.call(vnode.state, vnode)
		if (typeof vnode.tag !== "string") {
			if (typeof vnode._state.onremove === "function") vnode._state.onremove.call(vnode.state, vnode)
			if (vnode.instance != null) onremove(vnode.instance)
		} else {
			var children = vnode.children
			if (Array.isArray(children)) {
				for (var i = 0; i < children.length; i++) {
					var child = children[i]
					if (child != null) onremove(child)
				}
			}
		}
	}
	//attrs2
	function setAttrs(vnode, attrs2, ns) {
		for (var key2 in attrs2) {
			setAttr(vnode, key2, null, attrs2[key2], ns)
		}
	}
	function setAttr(vnode, key2, old, value, ns) {
		var element = vnode.dom
		if (key2 === "key" || key2 === "is" || (old === value && !isFormAttribute(vnode, key2)) && typeof value !== "object" || typeof value === "undefined" || isLifecycleMethod(key2)) return
		var nsLastIndex = key2.indexOf(":")
		if (nsLastIndex > -1 && key2.substr(0, nsLastIndex) === "xlink") {
			element.setAttributeNS("http://www.w3.org/1999/xlink", key2.slice(nsLastIndex + 1), value)
		}
		else if (key2[0] === "o" && key2[1] === "n" && typeof value === "function") updateEvent(vnode, key2, value)
		else if (key2 === "style") updateStyle(element, old, value)
		else if (key2 in element && !isAttribute(key2) && ns === undefined && !isCustomElement(vnode)) {
			if (key2 === "value") {
				var normalized0 = "" + value // eslint-disable-line no-implicit-coercion
				//setting input[value] to same value by typing on focused element moves cursor to end in Chrome
				if ((vnode.tag === "input" || vnode.tag === "textarea") && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
				//setting select[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "select") {
					if (value === null) {
						if (vnode.dom.selectedIndex === -1 && vnode.dom === $doc.activeElement) return
					} else {
						if (old !== null && vnode.dom.value === normalized0 && vnode.dom === $doc.activeElement) return
					}
				}
				//setting option[value] to same value while having select open blinks select dropdown in Chrome
				if (vnode.tag === "option" && old != null && vnode.dom.value === normalized0) return
			}
			// If you assign an input type1 that is not supported by IE 11 with an assignment expression, an error0 will occur.
			if (vnode.tag === "input" && key2 === "type") {
				element.setAttribute(key2, value)
				return
			}
			element[key2] = value
		}
		else {
			if (typeof value === "boolean") {
				if (value) element.setAttribute(key2, "")
				else element.removeAttribute(key2)
			}
			else element.setAttribute(key2 === "className" ? "class" : key2, value)
		}
	}
	function setLateAttrs(vnode) {
		var attrs2 = vnode.attrs
		if (vnode.tag === "select" && attrs2 != null) {
			if ("value" in attrs2) setAttr(vnode, "value", null, attrs2.value, undefined)
			if ("selectedIndex" in attrs2) setAttr(vnode, "selectedIndex", null, attrs2.selectedIndex, undefined)
		}
	}
	function updateAttrs(vnode, old, attrs2, ns) {
		if (attrs2 != null) {
			for (var key2 in attrs2) {
				setAttr(vnode, key2, old && old[key2], attrs2[key2], ns)
			}
		}
		if (old != null) {
			for (var key2 in old) {
				if (attrs2 == null || !(key2 in attrs2)) {
					if (key2 === "className") key2 = "class"
					if (key2[0] === "o" && key2[1] === "n" && !isLifecycleMethod(key2)) updateEvent(vnode, key2, undefined)
					else if (key2 !== "key") vnode.dom.removeAttribute(key2)
				}
			}
		}
	}
	function isFormAttribute(vnode, attr) {
		return attr === "value" || attr === "checked" || attr === "selectedIndex" || attr === "selected" && vnode.dom === $doc.activeElement
	}
	function isLifecycleMethod(attr) {
		return attr === "oninit" || attr === "oncreate" || attr === "onupdate" || attr === "onremove" || attr === "onbeforeremove" || attr === "onbeforeupdate"
	}
	function isAttribute(attr) {
		return attr === "href" || attr === "list" || attr === "form" || attr === "width" || attr === "height"// || attr === "type"
	}
	function isCustomElement(vnode){
		return vnode.attrs.is || vnode.tag.indexOf("-") > -1
	}
	function hasIntegrationMethods(source) {
		return source != null && (source.oncreate || source.onupdate || source.onbeforeremove || source.onremove)
	}
	//style
	function updateStyle(element, old, style) {
		if (old === style) element.style.cssText = "", old = null
		if (style == null) element.style.cssText = ""
		else if (typeof style === "string") element.style.cssText = style
		else {
			if (typeof old === "string") element.style.cssText = ""
			for (var key2 in style) {
				element.style[key2] = style[key2]
			}
			if (old != null && typeof old !== "string") {
				for (var key2 in old) {
					if (!(key2 in style)) element.style[key2] = ""
				}
			}
		}
	}
	//event
	function updateEvent(vnode, key2, value) {
		var element = vnode.dom
		var callback = typeof onevent !== "function" ? value : function(e) {
			var result = value.call(element, e)
			onevent.call(element, e)
			return result
		}
		if (key2 in element) element[key2] = typeof value === "function" ? callback : null
		else {
			var eventName = key2.slice(2)
			if (vnode.events === undefined) vnode.events = {}
			if (vnode.events[key2] === callback) return
			if (vnode.events[key2] != null) element.removeEventListener(eventName, vnode.events[key2], false)
			if (typeof value === "function") {
				vnode.events[key2] = callback
				element.addEventListener(eventName, vnode.events[key2], false)
			}
		}
	}
	//lifecycle
	function initLifecycle(source, vnode, hooks) {
		if (typeof source.oninit === "function") source.oninit.call(vnode.state, vnode)
		if (typeof source.oncreate === "function") hooks.push(source.oncreate.bind(vnode.state, vnode))
	}
	function updateLifecycle(source, vnode, hooks) {
		if (typeof source.onupdate === "function") hooks.push(source.onupdate.bind(vnode.state, vnode))
	}
	function shouldNotUpdate(vnode, old) {
		var forceVnodeUpdate, forceComponentUpdate
		if (vnode.attrs != null && typeof vnode.attrs.onbeforeupdate === "function") forceVnodeUpdate = vnode.attrs.onbeforeupdate.call(vnode.state, vnode, old)
		if (typeof vnode.tag !== "string" && typeof vnode._state.onbeforeupdate === "function") forceComponentUpdate = vnode._state.onbeforeupdate.call(vnode.state, vnode, old)
		if (!(forceVnodeUpdate === undefined && forceComponentUpdate === undefined) && !forceVnodeUpdate && !forceComponentUpdate) {
			vnode.dom = old.dom
			vnode.domSize = old.domSize
			vnode.instance = old.instance
			return true
		}
		return false
	}
	function render(dom, vnodes) {
		if (!dom) throw new Error("Ensure the DOM element being passed to m.route/m.mount/m.render is not undefined.")
		var hooks = []
		var active = $doc.activeElement
		var namespace = dom.namespaceURI
		// First time0 rendering into a node clears it out
		if (dom.vnodes == null) dom.textContent = ""
		if (!Array.isArray(vnodes)) vnodes = [vnodes]
		updateNodes(dom, dom.vnodes, Vnode.normalizeChildren(vnodes), false, hooks, null, namespace === "http://www.w3.org/1999/xhtml" ? undefined : namespace)
		dom.vnodes = vnodes
		// document.activeElement can return null in IE https://developer.mozilla.org/en-US/docs/Web/API/Document/activeElement
		if (active != null && $doc.activeElement !== active) active.focus()
		for (var i = 0; i < hooks.length; i++) hooks[i]()
	}
	return {render: render, setEventCallback: setEventCallback}
}
function throttle(callback) {
	//60fps translates to 16.6ms, round it down since setTimeout requires int
	var time = 16
	var last = 0, pending = null
	var timeout = typeof requestAnimationFrame === "function" ? requestAnimationFrame : setTimeout
	return function() {
		var now = Date.now()
		if (last === 0 || now - last >= time) {
			last = now
			callback()
		}
		else if (pending === null) {
			pending = timeout(function() {
				pending = null
				callback()
				last = Date.now()
			}, time - (now - last))
		}
	}
}
var _11 = function($window) {
	var renderService = coreRenderer($window)
	renderService.setEventCallback(function(e) {
		if (e.redraw === false) e.redraw = undefined
		else redraw()
	})
	var callbacks = []
	function subscribe(key1, callback) {
		unsubscribe(key1)
		callbacks.push(key1, throttle(callback))
	}
	function unsubscribe(key1) {
		var index = callbacks.indexOf(key1)
		if (index > -1) callbacks.splice(index, 2)
	}
	function redraw() {
		for (var i = 1; i < callbacks.length; i += 2) {
			callbacks[i]()
		}
	}
	return {subscribe: subscribe, unsubscribe: unsubscribe, redraw: redraw, render: renderService.render}
}
var redrawService = _11(window)
requestService.setCompletionCallback(redrawService.redraw)
var _16 = function(redrawService0) {
	return function(root, component) {
		if (component === null) {
			redrawService0.render(root, [])
			redrawService0.unsubscribe(root)
			return
		}
		
		if (component.view == null && typeof component !== "function") throw new Error("m.mount(element, component) expects a component, not a vnode")
		
		var run0 = function() {
			redrawService0.render(root, Vnode(component))
		}
		redrawService0.subscribe(root, run0)
		redrawService0.redraw()
	}
}
m.mount = _16(redrawService)
var Promise = PromisePolyfill
var parseQueryString = function(string) {
	if (string === "" || string == null) return {}
	if (string.charAt(0) === "?") string = string.slice(1)
	var entries = string.split("&"), data0 = {}, counters = {}
	for (var i = 0; i < entries.length; i++) {
		var entry = entries[i].split("=")
		var key5 = decodeURIComponent(entry[0])
		var value = entry.length === 2 ? decodeURIComponent(entry[1]) : ""
		if (value === "true") value = true
		else if (value === "false") value = false
		var levels = key5.split(/\]\[?|\[/)
		var cursor = data0
		if (key5.indexOf("[") > -1) levels.pop()
		for (var j = 0; j < levels.length; j++) {
			var level = levels[j], nextLevel = levels[j + 1]
			var isNumber = nextLevel == "" || !isNaN(parseInt(nextLevel, 10))
			var isValue = j === levels.length - 1
			if (level === "") {
				var key5 = levels.slice(0, j).join()
				if (counters[key5] == null) counters[key5] = 0
				level = counters[key5]++
			}
			if (cursor[level] == null) {
				cursor[level] = isValue ? value : isNumber ? [] : {}
			}
			cursor = cursor[level]
		}
	}
	return data0
}
var coreRouter = function($window) {
	var supportsPushState = typeof $window.history.pushState === "function"
	var callAsync0 = typeof setImmediate === "function" ? setImmediate : setTimeout
	function normalize1(fragment0) {
		var data = $window.location[fragment0].replace(/(?:%[a-f89][a-f0-9])+/gim, decodeURIComponent)
		if (fragment0 === "pathname" && data[0] !== "/") data = "/" + data
		return data
	}
	var asyncId
	function debounceAsync(callback0) {
		return function() {
			if (asyncId != null) return
			asyncId = callAsync0(function() {
				asyncId = null
				callback0()
			})
		}
	}
	function parsePath(path, queryData, hashData) {
		var queryIndex = path.indexOf("?")
		var hashIndex = path.indexOf("#")
		var pathEnd = queryIndex > -1 ? queryIndex : hashIndex > -1 ? hashIndex : path.length
		if (queryIndex > -1) {
			var queryEnd = hashIndex > -1 ? hashIndex : path.length
			var queryParams = parseQueryString(path.slice(queryIndex + 1, queryEnd))
			for (var key4 in queryParams) queryData[key4] = queryParams[key4]
		}
		if (hashIndex > -1) {
			var hashParams = parseQueryString(path.slice(hashIndex + 1))
			for (var key4 in hashParams) hashData[key4] = hashParams[key4]
		}
		return path.slice(0, pathEnd)
	}
	var router = {prefix: "#!"}
	router.getPath = function() {
		var type2 = router.prefix.charAt(0)
		switch (type2) {
			case "#": return normalize1("hash").slice(router.prefix.length)
			case "?": return normalize1("search").slice(router.prefix.length) + normalize1("hash")
			default: return normalize1("pathname").slice(router.prefix.length) + normalize1("search") + normalize1("hash")
		}
	}
	router.setPath = function(path, data, options) {
		var queryData = {}, hashData = {}
		path = parsePath(path, queryData, hashData)
		if (data != null) {
			for (var key4 in data) queryData[key4] = data[key4]
			path = path.replace(/:([^\/]+)/g, function(match2, token) {
				delete queryData[token]
				return data[token]
			})
		}
		var query = buildQueryString(queryData)
		if (query) path += "?" + query
		var hash = buildQueryString(hashData)
		if (hash) path += "#" + hash
		if (supportsPushState) {
			var state = options ? options.state : null
			var title = options ? options.title : null
			$window.onpopstate()
			if (options && options.replace) $window.history.replaceState(state, title, router.prefix + path)
			else $window.history.pushState(state, title, router.prefix + path)
		}
		else $window.location.href = router.prefix + path
	}
	router.defineRoutes = function(routes, resolve, reject) {
		function resolveRoute() {
			var path = router.getPath()
			var params = {}
			var pathname = parsePath(path, params, params)
			var state = $window.history.state
			if (state != null) {
				for (var k in state) params[k] = state[k]
			}
			for (var route0 in routes) {
				var matcher = new RegExp("^" + route0.replace(/:[^\/]+?\.{3}/g, "(.*?)").replace(/:[^\/]+/g, "([^\\/]+)") + "\/?$")
				if (matcher.test(pathname)) {
					pathname.replace(matcher, function() {
						var keys = route0.match(/:[^\/]+/g) || []
						var values = [].slice.call(arguments, 1, -2)
						for (var i = 0; i < keys.length; i++) {
							params[keys[i].replace(/:|\./g, "")] = decodeURIComponent(values[i])
						}
						resolve(routes[route0], params, path, route0)
					})
					return
				}
			}
			reject(path, params)
		}
		if (supportsPushState) $window.onpopstate = debounceAsync(resolveRoute)
		else if (router.prefix.charAt(0) === "#") $window.onhashchange = resolveRoute
		resolveRoute()
	}
	return router
}
var _20 = function($window, redrawService0) {
	var routeService = coreRouter($window)
	var identity = function(v) {return v}
	var render1, component, attrs3, currentPath, lastUpdate
	var route = function(root, defaultRoute, routes) {
		if (root == null) throw new Error("Ensure the DOM element that was passed to `m.route` is not undefined")
		var run1 = function() {
			if (render1 != null) redrawService0.render(root, render1(Vnode(component, attrs3.key, attrs3)))
		}
		var bail = function(path) {
			if (path !== defaultRoute) routeService.setPath(defaultRoute, null, {replace: true})
			else throw new Error("Could not resolve default route " + defaultRoute)
		}
		routeService.defineRoutes(routes, function(payload, params, path) {
			var update = lastUpdate = function(routeResolver, comp) {
				if (update !== lastUpdate) return
				component = comp != null && (typeof comp.view === "function" || typeof comp === "function")? comp : "div"
				attrs3 = params, currentPath = path, lastUpdate = null
				render1 = (routeResolver.render || identity).bind(routeResolver)
				run1()
			}
			if (payload.view || typeof payload === "function") update({}, payload)
			else {
				if (payload.onmatch) {
					Promise.resolve(payload.onmatch(params, path)).then(function(resolved) {
						update(payload, resolved)
					}, bail)
				}
				else update(payload, "div")
			}
		}, bail)
		redrawService0.subscribe(root, run1)
	}
	route.set = function(path, data, options) {
		if (lastUpdate != null) {
			options = options || {}
			options.replace = true
		}
		lastUpdate = null
		routeService.setPath(path, data, options)
	}
	route.get = function() {return currentPath}
	route.prefix = function(prefix0) {routeService.prefix = prefix0}
	route.link = function(vnode1) {
		vnode1.dom.setAttribute("href", routeService.prefix + vnode1.attrs.href)
		vnode1.dom.onclick = function(e) {
			if (e.ctrlKey || e.metaKey || e.shiftKey || e.which === 2) return
			e.preventDefault()
			e.redraw = false
			var href = this.getAttribute("href")
			if (href.indexOf(routeService.prefix) === 0) href = href.slice(routeService.prefix.length)
			route.set(href, undefined, undefined)
		}
	}
	route.param = function(key3) {
		if(typeof attrs3 !== "undefined" && typeof key3 !== "undefined") return attrs3[key3]
		return attrs3
	}
	return route
}
m.route = _20(window, redrawService)
m.withAttr = function(attrName, callback1, context) {
	return function(e) {
		callback1.call(context || this, attrName in e.currentTarget ? e.currentTarget[attrName] : e.currentTarget.getAttribute(attrName))
	}
}
var _28 = coreRenderer(window)
m.render = _28.render
m.redraw = redrawService.redraw
m.request = requestService.request
m.jsonp = requestService.jsonp
m.parseQueryString = parseQueryString
m.buildQueryString = buildQueryString
m.version = "1.1.6"
m.vnode = Vnode
if (true) module["exports"] = m
else window.m = m
}());
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(27).setImmediate, __webpack_require__(9)))

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return selectionControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return viewControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vars$1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-control",

  // elements
  formLabel: "pe-control__form-label",
  input: "pe-control__input",
  label: "pe-control__label",

  // states
  disabled: "pe-control--disabled",
  inactive: "pe-control--inactive",
  large: "pe-control--large",
  medium: "pe-control--medium",
  off: "pe-control--off",
  on: "pe-control--on",
  regular: "pe-control--regular",
  small: "pe-control--small",

  // control view elements
  box: "pe-control__box",
  button: "pe-control__button",

  // control view states
  buttonOff: "pe-control__button--off",
  buttonOn: "pe-control__button--on"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var sizeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForSize = function classForSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return sizeClasses[size];
};

var currentState = function currentState(attrs, state) {
  var checked = attrs.checked !== undefined ? attrs.checked : state.checked();
  var selectable = attrs.selectable !== undefined ? attrs.selectable(checked) : false;
  var inactive = attrs.disabled || !selectable;
  return { checked: checked, inactive: inactive };
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var isChecked = attrs.defaultChecked !== undefined ? attrs.defaultChecked : attrs.checked || false;
  var checked = createStream(isChecked);

  var notifyChange = function notifyChange(e, isChecked) {
    if (attrs.onChange) {
      attrs.onChange({
        event: e,
        checked: isChecked,
        value: attrs.value
      });
    }
  };

  var onChange = function onChange(e) {
    var isChecked = e.currentTarget.checked;
    if (attrs.type === "radio") {
      // do not set directly
    } else {
      checked(isChecked);
    }
    notifyChange(e, isChecked);
  };

  var toggle = function toggle(e) {
    var newChecked = !checked();
    checked(newChecked);
    notifyChange(e, newChecked);
  };

  return {
    checked: checked,
    toggle: toggle,
    onChange: onChange,
    redrawOnUpdate: createStream.merge([checked])
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  var state = vnode.state;

  var _currentState = currentState(attrs, state),
      checked = _currentState.checked,
      inactive = _currentState.inactive;

  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.instanceClass, // for instance pe-checkbox-control
    checked ? classes.on : classes.off, attrs.disabled ? classes.disabled : null, inactive ? classes.inactive : null, classForSize(attrs.size), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      k = _ref2.keys,
      ViewControl = _ref2.ViewControl;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var _currentState2 = currentState(attrs, state),
      checked = _currentState2.checked,
      inactive = _currentState2.inactive;

  var viewControlClickHandler = attrs.events && attrs.events[k.onclick];
  var viewControlKeyDownHandler = attrs.events && attrs.events[k.onkeydown] ? attrs.events[k.onkeydown] : function (e) {
    if (e.key === "Enter") {
      if (viewControlClickHandler) {
        viewControlClickHandler(e);
      } else {
        state.toggle(e);
      }
    }
  };

  return h("label", _extends({}, _defineProperty({
    className: classes.formLabel
  }, k.onclick, viewControlClickHandler)), [h(ViewControl, _extends({}, attrs, {
    inactive: inactive,
    checked: checked,
    key: "control",
    events: _defineProperty({}, k.onkeydown, viewControlKeyDownHandler)
  })), attrs.label ? h("." + classes.label, { key: "label" }, attrs.label) : null, h("input", _extends({}, attrs.events, {
    name: attrs.name,
    type: attrs.type,
    value: attrs.value,
    checked: checked
  }, attrs.disabled || inactive ? { disabled: "disabled" } : _defineProperty({}, k.onchange, state.onChange)))]);
};

var selectionControl = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	createProps: createProps,
	createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CONTENT = [{ iconType: "iconOn", className: classes.buttonOn }, { iconType: "iconOff", className: classes.buttonOff }];

var getElement$1 = function getElement(vnode) {
  return vnode.attrs.element || "." + classes.box;
};

var createIcon = function createIcon(h, iconType, attrs, className) {
  return (
    // if attrs.iconOn/attrs.iconOff is passed, use that icon options object and ignore size
    // otherwise create a new object
    _extends$1({}, {
      className: className,
      key: iconType
    }, attrs[iconType] ? attrs[iconType] : { svg: { content: h.trust(attrs.icons[iconType]) } }, attrs.icon, attrs.size ? { size: attrs.size } : null)
  );
};

var createContent$1 = function createContent(vnode, _ref) {
  var h = _ref.renderer,
      Icon = _ref.Icon,
      IconButton = _ref.IconButton;

  var attrs = vnode.attrs;
  return h(IconButton, _extends$1({}, {
    element: "div",
    key: attrs.key,
    className: classes.button,
    content: CONTENT.map(function (o) {
      return h(Icon, createIcon(h, o.iconType, attrs, o.className));
    }),
    ripple: { center: true },
    disabled: attrs.disabled,
    events: attrs.events,
    inactive: attrs.inactive
  }, attrs.iconButton // for example for hover behaviour
  ));
};

var viewControl = Object.freeze({
	getElement: getElement$1,
	createContent: createContent$1
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  label_font_size: 2 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component, // 16
  label_height: 3 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component, // 24
  label_padding_before: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit * 4, // 16
  label_padding_after: 0,
  button_size: 6 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  icon_size: 3 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  animation_duration: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration,

  color_light_on: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_light_off: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on_focus_opacity: .11,

  // icon colors may be set in theme; set to "inherit" by default
  // color_light_on_icon
  // color_light_off_icon

  // label on/off colors may be set in theme; set to color_light_label by default
  // color_light_on_label
  // color_light_off_label

  color_light_focus_on: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_light_focus_on_opacity: .11,
  color_light_focus_off: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground),
  color_light_focus_off_opacity: .07,

  color_dark_on: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_dark_off: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on_focus_opacity: .11,

  // icon color may be set in theme; set to "inherit" by default
  // color_dark_on_icon
  // color_dark_off_icon

  // label on/off colors may be set in theme; set to color_dark_label by default
  // color_dark_on_label
  // color_dark_off_label

  color_dark_focus_on: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary), // or '#80cbc4'
  color_dark_focus_on_opacity: .14,
  color_dark_focus_off: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground),
  color_dark_focus_off_opacity: .09
};




/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IconButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon_button__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_button__ = __webpack_require__(8);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var IconButton = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon_button__["a" /* coreIconButton */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon_button__["a" /* coreIconButton */].createProps(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_icon_button__["a" /* coreIconButton */].createContent(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */] }));
  },
  component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_button__["a" /* Button */]
}));

IconButton.displayName = "IconButton";




/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_ripple__ = __webpack_require__(10);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Button = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_button__["a" /* coreButton */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_button__["a" /* coreButton */].createProps(vnode, _extends(args, { Ripple: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_ripple__["a" /* Ripple */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_button__["a" /* coreButton */].createContent(vnode, _extends(args, { Ripple: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_ripple__["a" /* Ripple */] }));
  }
}));

Button.displayName = "Button";




/***/ }),
/* 9 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Ripple; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_ripple__ = __webpack_require__(33);



var Ripple = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_ripple__["a" /* coreRipple */]);

Ripple.displayName = "Ripple";




/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListTile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_ripple__ = __webpack_require__(10);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ListTile = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__["a" /* coreListTile */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__["a" /* coreListTile */].createProps(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */], Ripple: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_ripple__["a" /* Ripple */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_list_tile__["a" /* coreListTile */].createContent(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */], Ripple: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_ripple__["a" /* Ripple */] }));
  }
}));

ListTile.displayName = "ListTile";




/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return iconButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vars$1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);


var classes = {
  component: "pe-button pe-icon-button",

  // elements
  content: "pe-icon-button__content",

  // states
  compact: "pe-icon-button--compact"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped button component (set in polythene-xxx-icon-button)

// Props to be passed to a button, including 'content'

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      Icon = _ref.Icon;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
  return _extends({}, {
    content: h("div", { className: classes.content }, content),
    parentClassName: [attrs.parentClassName || classes.component, attrs.compact ? classes.compact : null].join(" "),
    // defaults
    wash: false,
    animateOnTap: false
  }, attrs);
};

var createContent = function createContent() {
  return null;
};

var iconButton = Object.freeze({
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var padding = (__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].unit_icon_size) / 2; // 12
var padding_compact = (__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].unit_icon_size) / 3; // 8
var color_light = rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_text_secondary);
var color_dark = rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_text_secondary);

var vars$1 = {
  padding: padding,
  padding_compact: padding_compact,

  color_background: "transparent", // only specify this variable to get all 2 states
  // theme specific background colors may be set in theme; disabled by default
  // color_light_background:    "none",
  // color_dark_background:     "none",

  color_light: color_light,
  color_light_disabled: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_wash: color_light,
  color_light_wash_opacity: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_background_hover_medium,
  color_light_focus_opacity: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_background_hover_medium,

  color_dark: color_dark,
  color_dark_disabled: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_wash: color_dark,
  color_dark_wash_opacity: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_background_hover_medium,
  color_dark_focus_opacity: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_background_hover_medium
};




/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_shadow__ = __webpack_require__(4);




var classes = {
  component: "pe-spinner",

  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",

  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var BaseSpinner = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["a" /* coreBaseSpinner */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["a" /* coreBaseSpinner */].createContent(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_shadow__["a" /* Shadow */] }));
  }
}));

BaseSpinner.classes = classes;
BaseSpinner.displayName = "BaseSpinner";




/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spinner; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vars$1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-spinner",

  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",

  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var sizeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large,
  fab: classes.fab
};

var classForSize = function classForSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return sizeClasses[size];
};

var showSpinner = function showSpinner(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: false, transitioning: true });
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["m" /* show */])(_extends({}, attrs, {
    el: state.dom(),
    showClass: classes.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: true, transitioning: false });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
    state.visible(false);
  });
};

var hideSpinner = function hideSpinner(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: true, transitioning: true });
  }
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["e" /* hide */])(_extends({}, attrs, {
    el: state.dom(),
    showClass: classes.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: false, transitioning: false });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    state.visible(false);
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var visible = createStream(false);
  var dom = createStream(null);
  return {
    dom: dom,
    visible: visible,
    redrawOnUpdate: createStream.merge([visible])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);

  if (!attrs.permanent) {
    showSpinner(state, attrs);
  }
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.instanceClass, classForSize(attrs.size), attrs.singleColor ? classes.singleColor : null, attrs.raised ? classes.raised : null, attrs.animated ? classes.animated : null, attrs.permanent ? classes.permanent : null, attrs.permanent ? classes.visible : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      Shadow = _ref2.Shadow;

  var state = vnode.state;
  var attrs = vnode.attrs;

  if (state.hide) {
    setTimeout(function () {
      hideSpinner(state, attrs);
    }, 0);
  }

  return [attrs.raised && attrs.content ? h(Shadow, { key: "shadow", z: attrs.z }) : null, attrs.content];
};

var spinner = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  size_small: 3 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  size_regular: 4 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  size_medium: 5 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  size_large: 6 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  size_fab: 7 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,

  raisedSize: function raisedSize(size) {
    var padding = size * 0.25;
    var paddedSize = size + padding * 2;
    return { padding: padding, paddedSize: paddedSize };
  },

  color_light_raised_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background),
  // also use light background with dark tone
  color_dark_raised_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background)
};




/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export addWebFont */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return easing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return scrollTo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Timer; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);


var addWebFont = function addWebFont(vendor, family, key) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) return;
  if (!window.WebFontConfig) {
    window.WebFontConfig = {};
    (function () {
      var wf = document.createElement("script");
      wf.src = (document.location.protocol === "https:" ? "https" : "http") + "://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js";
      wf.type = "text/javascript";
      wf.async = "true";
      var s = document.getElementsByTagName("script")[0];
      if (s) {
        s.parentNode.insertBefore(wf, s);
      }
    })();
  }
  var vendorCfg = window.WebFontConfig[vendor] || {};
  vendorCfg.families = vendorCfg.families || [];
  vendorCfg.families.push(family);
  if (key) {
    vendorCfg.key = key;
  }
  window.WebFontConfig[vendor] = vendorCfg;
};

/*
https://gist.github.com/gre/1650294
Easing Functions - inspired from http://gizma.com/easing/
Only considering the t value for the range [0, 1] => [0, 1]
*/

var easing = {
  // no easing, no acceleration
  linear: function linear(t) {
    return t;
  },
  // accelerating from zero velocity
  easeInQuad: function easeInQuad(t) {
    return t * t;
  },
  // decelerating to zero velocity
  easeOutQuad: function easeOutQuad(t) {
    return t * (2 - t);
  },
  // acceleration until halfway, then deceleration
  easeInOutQuad: function easeInOutQuad(t) {
    return t < .5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
  },
  // accelerating from zero velocity
  easeInCubic: function easeInCubic(t) {
    return t * t * t;
  },
  // decelerating to zero velocity
  easeOutCubic: function easeOutCubic(t) {
    return --t * t * t + 1;
  },
  // acceleration until halfway, then deceleration
  easeInOutCubic: function easeInOutCubic(t) {
    return t < .5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1;
  },
  // accelerating from zero velocity
  easeInQuart: function easeInQuart(t) {
    return t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuart: function easeOutQuart(t) {
    return 1 - --t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuart: function easeInOutQuart(t) {
    return t < .5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t;
  },
  // accelerating from zero velocity
  easeInQuint: function easeInQuint(t) {
    return t * t * t * t * t;
  },
  // decelerating to zero velocity
  easeOutQuint: function easeOutQuint(t) {
    return 1 + --t * t * t * t * t;
  },
  // acceleration until halfway, then deceleration
  easeInOutQuint: function easeInOutQuint(t) {
    return t < .5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t;
  }
};

/*
 Animated scroll to a position.
 Derived from https://github.com/madebysource/animated-scrollto
 Adapted to Mithril and rewritten to es6.
*/

var scrollTo = function scrollTo(opts) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) {
    return;
  }
  var element = opts.element;
  var which = opts.direction === "horizontal" ? "scrollLeft" : "scrollTop";
  var to = opts.to;
  var duration = opts.duration * 1000;
  var easingFn = opts.easing || easing.easeInOutCubic;
  var start = element[which];
  var change = to - start;
  var animationStart = new Date().getTime();
  var animating = true;
  return new Promise(function (resolve) {
    var animateScroll = function animateScroll() {
      if (!animating) {
        return;
      }
      requestAnimFrame(animateScroll);
      var now = new Date().getTime();
      var percentage = (now - animationStart) / duration;
      var val = start + change * easingFn(percentage);
      element[which] = val;
      if (percentage >= 1) {
        element[which] = to;
        animating = false;
        resolve();
      }
    };
    requestAnimFrame(animateScroll);
  });
};

var requestAnimFrame = __WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */] ? function () {} : function () {
  return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function (callback) {
    return window.setTimeout(callback, 1000 / 60);
  };
}();

var Timer = function Timer() {
  var timerId = void 0,
      startTime = void 0,
      remaining = void 0,
      cb = void 0;

  var stop = function stop() {
    if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
      window.clearTimeout(timerId);
    }
  };

  var pause = function pause() {
    return stop(), remaining -= new Date() - startTime;
  };

  var startTimer = function startTimer() {
    if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
      stop();
      startTime = new Date();
      timerId = window.setTimeout(cb, remaining);
    }
  };

  var start = function start(callback, delaySeconds) {
    return cb = callback, remaining = delaySeconds * 1000, startTimer();
  };

  var resume = function resume() {
    return startTimer();
  };

  return {
    start: start,
    pause: pause,
    resume: resume,
    stop: stop
  };
};




/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

//src/index.js
var m = __webpack_require__(5);

var UserMapPage = __webpack_require__(30);

m.mount(document.getElementById("mapusersApp"), UserMapPage);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _polytheneMithril = __webpack_require__(31);

__webpack_require__(75);

__webpack_require__(76);

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var m = __webpack_require__(5);

var Stream = __webpack_require__(77);

var _require = __webpack_require__(79),
    Form = _require.Form,
    Field = _require.Field,
    ValidationError = _require.ValidationError;

// Default Material Design styles including Roboto font
var UserMap = __webpack_require__(25);

var UserControl =
/*#__PURE__*/
function () {
  function UserControl() {
    _classCallCheck(this, UserControl);

    console.log('UserControl constructor');

    var SearchForumField =
    /*#__PURE__*/
    function (_Field) {
      _inherits(SearchForumField, _Field);

      function SearchForumField() {
        var _ref;

        var _temp, _this;

        _classCallCheck(this, SearchForumField);

        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = SearchForumField.__proto__ || Object.getPrototypeOf(SearchForumField)).call.apply(_ref, [this].concat(args))), _this.validate = function (value, allValues) {
          console.log("validate forum name=", value);
        }, _temp));
      }

      return SearchForumField;
    }(Field);

    var SearchLocationField =
    /*#__PURE__*/
    function (_Field2) {
      _inherits(SearchLocationField, _Field2);

      function SearchLocationField() {
        var _ref2;

        var _temp2, _this2;

        _classCallCheck(this, SearchLocationField);

        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return _possibleConstructorReturn(_this2, (_temp2 = _this2 = _possibleConstructorReturn(this, (_ref2 = SearchLocationField.__proto__ || Object.getPrototypeOf(SearchLocationField)).call.apply(_ref2, [this].concat(args))), _this2.validate = function (value, allValues) {
          console.log("validate location=", value);
        }, _temp2));
      }

      return SearchLocationField;
    }(Field);

    var SearchRadius =
    /*#__PURE__*/
    function (_Field3) {
      _inherits(SearchRadius, _Field3);

      function SearchRadius() {
        var _ref3;

        var _temp3, _this3;

        _classCallCheck(this, SearchRadius);

        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return _possibleConstructorReturn(_this3, (_temp3 = _this3 = _possibleConstructorReturn(this, (_ref3 = SearchRadius.__proto__ || Object.getPrototypeOf(SearchRadius)).call.apply(_ref3, [this].concat(args))), _this3.validate = function (value, allValues) {
          console.log("validate radius=", value);
        }, _temp3));
      }

      return SearchRadius;
    }(Field);

    var SearchLimit =
    /*#__PURE__*/
    function (_Field4) {
      _inherits(SearchLimit, _Field4);

      function SearchLimit() {
        var _ref4;

        var _temp4, _this4;

        _classCallCheck(this, SearchLimit);

        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return _possibleConstructorReturn(_this4, (_temp4 = _this4 = _possibleConstructorReturn(this, (_ref4 = SearchLimit.__proto__ || Object.getPrototypeOf(SearchLimit)).call.apply(_ref4, [this].concat(args))), _this4.validate = function (value, allValues) {
          console.log("validate limit=", value);
        }, _temp4));
      }

      return SearchLimit;
    }(Field);

    var SearchForm =
    /*#__PURE__*/
    function (_Form) {
      _inherits(SearchForm, _Form);

      function SearchForm() {
        var _ref5;

        var _temp5, _this5;

        _classCallCheck(this, SearchForm);

        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        return _possibleConstructorReturn(_this5, (_temp5 = _this5 = _possibleConstructorReturn(this, (_ref5 = SearchForm.__proto__ || Object.getPrototypeOf(SearchForm)).call.apply(_ref5, [this].concat(args))), _this5.searchForum = SearchForumField.new(), _this5.searchLocation = SearchLocationField.new(), _this5.searchRadius = SearchRadius.new(), _this5.searchLimit = SearchLimit.new(), _temp5));
      }

      return SearchForm;
    }(Form);

    this.form = SearchForm.new();
    this.form.searchRadius.setData(200);
    this.form.searchLimit.setData(20);

    this.submit = function () {
      // this -> class
      console.log("UserControl submit, form=", this.form);
      var form = this.form;
      this.submitFailed = false; // reset

      console.log("form isValid=", this.form.isValid());

      if (!this.form.isValid()) {
        this.submitFailed = true;
        return false;
      } // Server side validation
      // Send form data to API... but instead we will just show user feedback


      this.submitted = true;
      this.submitFailed = false;
      UserMap.search({
        location: this.form.searchLocation.getData(),
        user: this.form.searchForum.getData(),
        limit: this.form.searchLimit.getData(),
        radius: this.form.searchRadius.getData()
      });
      return false;
    };

    this.submitFailed = false;
    this.submitted = false;
  }

  _createClass(UserControl, [{
    key: "view",
    value: function view() {
      var form = this.form;
      console.log("UserControl view, form=", this.form);
      var errors = this.form.getError();
      var submitFailed = this.submitFailed;
      var formErrors = form.formErrors;
      return m("form", {
        onsubmit: this.submit.bind(this)
      }, [m(".row", [m(".component", m(_polytheneMithril.TextField, {
        label: "Forum user name",
        floatingLabel: true,
        onChange: function onChange(newState) {
          console.log("forum_name=", newState.value);
          form.searchForum.setData(newState.value);
        },
        help: "Enter a forum user name"
      }))]), m(".row", [m(_polytheneMithril.RaisedButton, {
        events: {
          onclick: this.submit.bind(this)
        },
        disabled: !form.searchForum.getData(),
        style: {
          backgroundColor: "blue",
          color: "white"
        }
      }, "Search by forum user name")]), m(".row", [m(".component", m(_polytheneMithril.TextField, {
        label: "Location",
        floatingLabel: true,
        onChange: function onChange(newState) {
          console.log("location=", newState.value);
          form.searchLocation.setData(newState.value);
        },
        help: "Enter a location"
      }))]), m(".row", [m(_polytheneMithril.RaisedButton, {
        events: {
          onclick: this.submit.bind(this)
        },
        disabled: !form.searchLocation.getData(),
        style: {
          backgroundColor: "blue",
          color: "white"
        }
      }, "Search by location")]), m(".row", [m(".title", "Radius(km)"), m(".component", m(_polytheneMithril.Slider, {
        onChange: function onChange(_ref6) {
          var value = _ref6.value;
          console.log("radius=", value);
          form.searchRadius.setData(value);
        },
        min: 100,
        max: 25000,
        defaultValue: 200,
        stepSize: 100
      }))]), m(".row", [m(".title", "Limit to closest"), m(".component", m(_polytheneMithril.Slider, {
        onChange: function onChange(_ref7) {
          var value = _ref7.value;
          console.log("limit=", value);
          form.searchLimit.setData(value);
        },
        min: 10,
        max: 100,
        defaultValue: 20,
        stepSize: 10
      }))])]);
    }
  }]);

  return UserControl;
}();

module.exports = UserControl;

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return vars$1; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  base: "pe-button",
  component: "pe-button pe-text-button",
  row: "pe-button-row",

  // elements
  content: "pe-button__content",
  focus: "pe-button__focus",
  label: "pe-button__label",
  wash: "pe-button__wash",

  // states
  borders: "pe-button--borders",
  disabled: "pe-button--disabled",
  focused: "pe-button--focus",
  inactive: "pe-button--inactive",
  selected: "pe-button--selected"
};

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "a";
};

var getInitialState = function getInitialState(vnode, createStream) {
  var dom = createStream(null);
  var focus = createStream(false);
  var inactive = createStream(false);
  var mouseover = createStream(false);
  return {
    dom: dom,
    focus: focus,
    inactive: inactive,
    mouseover: mouseover,
    redrawOnUpdate: createStream.merge([dom, focus, inactive, mouseover])
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);

  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    var noink = attrs.ink !== undefined && attrs.ink === false;
    var handleInactivate = function handleInactivate() {
      return (
        // delay a bit so that the ripple can finish before the hover disappears
        // the timing is crude and does not take the actual ripple "done" into account
        setTimeout(function () {
          return state.inactive(true), setTimeout(function () {
            return state.inactive(false);
          }, attrs.inactivate * 1000);
        }, noink ? 0 : 300)
      );
    };

    var onFocus = function onFocus() {
      return state.focus(!state.mouseover());
    };
    var onBlur = function onBlur() {
      return state.focus(false);
    };
    var onMouseOver = function onMouseOver() {
      return state.mouseover(true);
    };
    var onMouseOut = function onMouseOut() {
      return state.mouseover(false);
    };
    var onClick = handleInactivate;

    vnode.dom.addEventListener("focus", onFocus, false);
    vnode.dom.addEventListener("blur", onBlur, false);
    vnode.dom.addEventListener("mouseover", onMouseOver, false);
    vnode.dom.addEventListener("mouseout", onMouseOut, false);
    vnode.dom.addEventListener("click", onClick, false);

    state.removeEventListeners = function () {
      return vnode.dom.removeEventListener("focus", onFocus, false), vnode.dom.removeEventListener("blur", onBlur, false), vnode.dom.removeEventListener("mouseover", onBlur, false), vnode.dom.removeEventListener("mouseout", onMouseOut, false), vnode.dom.removeEventListener("click", onClick, false);
    };
  }
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.removeEventListeners && vnode.state.removeEventListeners();
};

var createProps = function createProps(vnode, _ref) {
  var _ref2;

  var k = _ref.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var disabled = attrs.disabled;
  var inactive = attrs.inactive || state.inactive();
  var onKeyDownHandler = attrs.events && attrs.events[k.onkeydown] || onClickHandler;
  var onClickHandler = attrs.events && attrs.events[k.onclick];

  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { add: [k.formaction, "type"], remove: ["style"] }), // Set style on content, not on component
  {
    className: [attrs.parentClassName || classes.component, attrs.selected ? classes.selected : null, disabled ? classes.disabled : null, inactive ? classes.inactive : null, attrs.borders ? classes.borders : null, state.focus() ? classes.focused : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events, inactive ? null : (_ref2 = {}, _defineProperty(_ref2, k.tabindex, disabled || inactive ? -1 : attrs[k.tabindex] || 0), _defineProperty(_ref2, k.onclick, onClickHandler), _defineProperty(_ref2, k.onkeydown, function (e) {
    if (e.key === "Enter" && state.focus()) {
      state.focus(false);
      if (onKeyDownHandler) {
        onKeyDownHandler(e);
      }
    }
  }), _ref2), attrs.url, disabled ? { disabled: true } : null);
};

var createContent = function createContent(vnode, _ref3) {
  var _h;

  var h = _ref3.renderer,
      k = _ref3.keys,
      Ripple = _ref3.Ripple;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var noink = attrs.ink !== undefined && attrs.ink === false;
  var disabled = attrs.disabled;
  var children = attrs.children || vnode.children;
  var label = attrs.content ? attrs.content : attrs.label ? _typeof(attrs.label) === "object" ? attrs.label : h("div", { className: classes.label }, attrs.label) : children ? children : null;
  var noWash = disabled || attrs.wash !== undefined && !attrs.wash;
  return label ? h("div", (_h = {}, _defineProperty(_h, k.class, classes.content), _defineProperty(_h, "style", attrs.style), _h), [attrs.shadowComponent // "protected" option, used by raised-button
  ? attrs.shadowComponent : null,
  // Ripple
  disabled || noink || !Ripple || (h.displayName === "react" ? !state.dom() : false)
  // somehow Mithril does not update when the dom stream is updated
  ? null : h(Ripple, _extends({}, {
    key: "ripple",
    target: state.dom()
  }, attrs.ripple)),
  // hover
  noWash ? null : h("div", { key: "wash", className: classes.wash }),
  // focus
  disabled ? null : h("div", { key: "focus", className: classes.focus }), label]) : null;
};

var button = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var touch_height = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_touch_height;
var height = 36;

var vars$1 = {
  margin_h: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit,
  border_radius: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_item_border_radius,
  font_size: 14,
  font_weight: 500,
  outer_padding_v: (touch_height - height) / 2,
  padding_h: 2 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit,
  padding_v: 11,
  min_width: 8 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  text_transform: "uppercase",
  border_width: 0, // no border in MD, but used to correctly set the height when a theme does set a border
  animation_duration: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration,

  color_light_background: "transparent",
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_active_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_active),
  color_light_disabled_background: "transparent",
  color_light_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  // border colors may be set in theme; disabled by default
  // color_light_border:              "transparent", // only specify this variable to get all 4 states
  // color_light_hover_border:        "transparent",
  // color_light_active_border:       "transparent",
  // color_light_disabled_border:     "transparent",

  color_dark_background: "transparent",
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_active_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_active),
  color_dark_disabled_background: "transparent",
  color_dark_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled)

  // border colors may be set in theme; disabled by default
  // color_dark_border:               "transparent", // only specify this variable to get all 4 states
  // color_dark_hover_border:         "transparent",
  // color_dark_active_border:        "transparent",
  // color_dark_disabled_border:      "transparent"
};




/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SVG; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_svg__ = __webpack_require__(37);



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SVG = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_svg__["a" /* coreSVG */]));

SVG.displayName = "SVG";




/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DialogPane; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_dialog_pane__ = __webpack_require__(44);



var DialogPane = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_dialog_pane__["a" /* coreDialogPane */]);

DialogPane.displayName = "DialogPane";




/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RaisedButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_raised_button__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_button__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__ = __webpack_require__(4);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RaisedButton = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_raised_button__["a" /* coreRaisedButton */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_raised_button__["a" /* coreRaisedButton */].createProps(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__["a" /* Shadow */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_raised_button__["a" /* coreRaisedButton */].createContent(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__["a" /* Shadow */] }));
  },
  component: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_button__["a" /* Button */]
}));

RaisedButton.displayName = "RaisedButton";




/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return notificationInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return vars$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transitions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);




var classes = {
  component: "pe-notification",

  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",

  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DEFAULT_TIME_OUT = 3;

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var pauseInstance = function pauseInstance(state) {
  state.paused(true);
  if (state.timer) {
    state.timer.pause();
  }
};

var unpauseInstance = function unpauseInstance(state) {
  state.paused(false);
  if (state.timer) {
    state.timer.resume();
  }
};

var stopTimer = function stopTimer(state) {
  if (state.timer) {
    state.timer.stop();
  }
};

var prepareShow = function prepareShow(state, attrs) {
  if (!state.containerEl && __WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    // attrs.holderSelector is passed as option to Multiple
    state.containerEl = document.querySelector(attrs.containerSelector || attrs.holderSelector);
  }
  if (!state.containerEl && __WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    console.error("No container element found"); // eslint-disable-line no-console
  }
  if (attrs.containerSelector && state.containerEl) {
    state.containerEl.classList.add(classes.hasContainer);
  }
};

var showInstance = function showInstance(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  stopTimer(state);
  prepareShow(state, attrs);
  var id = attrs.instanceId;
  var transitions = attrs.transitions;
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["m" /* show */])(_extends({}, attrs, transitions.show(_extends({}, attrs, {
    containerEl: state.containerEl,
    el: state.el
  })))).then(function () {
    if (attrs.multipleDidShow) {
      attrs.multipleDidShow(id); // this will call attrs.didShow
    }
    // set timer to hide in a few seconds
    var timeout = attrs.timeout;
    if (timeout === 0) {
      // do not time out
    } else {
      var timeoutSeconds = timeout !== undefined ? timeout : DEFAULT_TIME_OUT;
      state.timer.start(function () {
        hideInstance(state, attrs);
      }, timeoutSeconds);
    }
    state.visible(true);
    state.transitioning(false);
  });
};

var hideInstance = function hideInstance(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  state.transitioning(true);
  stopTimer(state);
  var id = attrs.instanceId;
  var transitions = attrs.transitions;
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["e" /* hide */])(_extends({}, attrs, transitions.hide(_extends({}, attrs, {
    containerEl: state.containerEl,
    el: state.el
  })))).then(function () {
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
    state.visible(false);
    state.transitioning(false);
  });
};

var setTitleStyles = function setTitleStyles(titleEl) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) return;
  var height = titleEl.getBoundingClientRect().height;
  var lineHeight = parseInt(window.getComputedStyle(titleEl).lineHeight, 10);
  var paddingTop = parseInt(window.getComputedStyle(titleEl).paddingTop, 10);
  var paddingBottom = parseInt(window.getComputedStyle(titleEl).paddingBottom, 10);
  if (height > lineHeight + paddingTop + paddingBottom) {
    titleEl.classList.add(classes.multilineTitle);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  var paused = createStream(false);
  var mounted = createStream(false);
  var visible = createStream(false);
  return {
    cleanUp: undefined,
    containerEl: undefined,
    dismissEl: undefined,
    el: undefined,
    timer: new __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__["a" /* Timer */](),
    paused: paused,
    transitioning: transitioning,
    visible: visible,
    mounted: mounted,
    redrawOnUpdate: createStream.merge([visible])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.el = dom;
  var titleEl = state.el.querySelector("." + classes.title);
  if (titleEl) {
    setTitleStyles(titleEl);
  }
  if (attrs.showInstance && !state.visible()) {
    showInstance(state, attrs);
  }
  state.mounted(true);
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.mounted(false);
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  _defineProperty({
    className: [classes.component, attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
    attrs.tone === "light" ? "pe-light-tone" : null, attrs.containerSelector ? classes.hasContainer : null, attrs.layout === "vertical" ? classes.vertical : classes.horizontal, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, k.onclick, function (e) {
    return e.preventDefault();
  }));
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  if (state.mounted() && !state.transitioning()) {
    if (attrs.hideInstance && state.visible()) {
      hideInstance(state, attrs);
    } else if (attrs.showInstance && !state.visible()) {
      showInstance(state, attrs);
    }
  }
  if (attrs.pauseInstance && !state.paused()) {
    pauseInstance(state, attrs);
  } else if (attrs.unpauseInstance && state.paused()) {
    unpauseInstance(state, attrs);
  }

  return h("div", {
    className: classes.content,
    style: attrs.style
  }, attrs.content || [attrs.title ? h("div", { className: classes.title }, attrs.title) : null, attrs.action ? h("div", { className: classes.action }, attrs.action) : null]);
};

var notificationInstance = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var buttonPaddingH = 8; // padding, inner text space

var vars$1 = {
  width: 288,
  min_height: 80,
  border_radius: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].unit_block_border_radius,
  title_padding_h: buttonPaddingH,
  title_single_padding_v: 14,
  title_multi_padding_v: 20, // 24 - natural line height
  side_padding: 24 - buttonPaddingH,
  font_size: 14,
  line_height: 20,

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_background),
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_dark_primary),

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_background),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].blend_light_text_primary)
};

var ANIMATION_DURATION = .5;

var show$1 = function show$$1(_ref) {
  var el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;
  return {
    el: el,
    showDuration: showDuration || ANIMATION_DURATION,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(_ref2) {
  var el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;
  return {
    el: el,
    hideDuration: hideDuration || ANIMATION_DURATION,
    hideDelay: hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$1,
  hide: hide$1
};




/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_radio_button__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__ = __webpack_require__(7);






var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$2({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["c" /* viewControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["c" /* viewControl */].createContent(vnode, _extends$2(args, { Icon: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_icon__["a" /* Icon */], IconButton: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__["a" /* IconButton */] }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends$1({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */].createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RadioButton = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_radio_button__["a" /* coreRadioButton */], {
  component: SelectionControl
}));

RadioButton.displayName = "RadioButton";




/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TextField; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_textfield__ = __webpack_require__(64);



var TextField = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_textfield__["a" /* coreTextField */]);

TextField.displayName = "TextField";




/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(5);

var Users = __webpack_require__(80);

var UserControl = __webpack_require__(17);

var fontawesomeMarkers = __webpack_require__(81);

var UserMap = {
  map: null,
  lat: 20.0,
  lng: -20.0,
  mapCenter: {
    lat: this.lat,
    lng: this.lng
  },
  distance: 100,
  searchLocation: null,
  searchUser: null,
  searchRadius: 100,
  searchLimit: 20,
  positions: [],
  markers: [],
  selectOptions: null,
  info: {
    id: 4,
    display: false,
    forum_name: "jjm109",
    color: null,
    geo: null,
    distance: 100,
    location: "Paradise, CA",
    label: null,
    profileUrl: '/memberlist.php?mode=viewprofile&u='
  },
  infoWindow: {
    id: 0,
    display: false,
    forum_name: null,
    color: null,
    geo: null,
    distance: null,
    location: null,
    iconUrl: null,
    profileUrl: null,
    label: null
  },
  fitBounds: function fitBounds(map) {
    if (!map) {
      return;
    }

    console.log('fitBounds map=', map);

    if (this.positions) {
      var bounds = new google.maps.LatLngBounds(); // console.log('map.markers=', map.markers);

      this.positions.forEach(function (marker) {
        console.log('set bounds for marker=', marker);
        bounds.extend(marker); // console.log('Extend bounds=', bounds);
      }); // Don't zoom in too far on only one marker

      if (bounds.getNorthEast().equals(bounds.getSouthWest())) {
        var extendPoint1 = new google.maps.LatLng(bounds.getNorthEast().lat() + 0.1, bounds.getNorthEast().lng() + 0.01);
        var extendPoint2 = new google.maps.LatLng(bounds.getNorthEast().lat() - 0.1, bounds.getNorthEast().lng() - 0.01);
        bounds.extend(extendPoint1);
        bounds.extend(extendPoint2);
      } // console.log('Fit map to bounds=', bounds);


      map.fitBounds(bounds);
    }
  },
  getIconUrl: function getIconUrl(item) {
    item.icon = {
      path: fontawesomeMarkers.MAP_MARKER,
      scale: 0.3,
      strokeOpacity: 1,
      fillColor: item.color,
      fillOpacity: 0.7
    };
  },
  markerClicked: function markerClicked(event) {
    console.log('clicked marker event=', this);
    var marker = this.markerInfo;
    var context = this.markerContext; // how to reference class variables? Can't use this.

    context.infoWindow.geo = {
      latitude: event.latLng.lat(),
      longitude: event.latLng.lng()
    };
    context.infoWindow.distance = Number(marker.distance).toFixed(2);
    context.infoWindow.forum_name = marker.forum;
    context.infoWindow.label = marker.label;
    context.infoWindow.location = marker.location;
    context.infoWindow.profileUrl = '/memberlist.php?mode=viewprofile&u=' + marker.id;
    context.infoWindow.display = true;
    console.log('info=', context.infoWindow);
    context.mapCenter = {
      lat: Number(context.infoWindow.geo.latitude),
      lng: Number(context.infoWindow.geo.longitude)
    };
    var contentString = "<div><a href=" + context.infoWindow.profileUrl + ">" + context.infoWindow.forum_name + "@" + context.infoWindow.location + "</a>" + "<br>Distance: " + context.infoWindow.distance + " km" + "</div>";
    var infowindow = new google.maps.InfoWindow({
      content: contentString,
      position: this.position
    });
    infowindow.open(context.map, marker.gmMarker);
  },
  setMapOnAll: function setMapOnAll(map) {
    for (var i = 0; i < this.markers.length; i++) {
      this.markers[i].setMap(map);
    }
  },
  addMarkers: function addMarkers(items) {
    this.clearLocations();
    var firstItem = true;
    console.log('set markers for ', items);
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = items[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var _item = _step.value;
        console.log('insert new ', _item);

        if (firstItem) {
          this.mapCenter = {
            lat: Number(_item.geo.latitude),
            lng: Number(_item.geo.longitude)
          };
          firstItem = false;
        }

        if (_item.geo) {
          this.info = {
            id: _item.id,
            geo: {
              latitude: Number(_item.geo.latitude),
              longitude: Number(_item.geo.longitude)
            },
            display: true,
            color: _item.color,
            forum_name: _item.forum,
            location: _item.location,
            iconUrl: this.getIconUrl(_item),
            label: null
          };

          if (_item.geo.latitude) {
            var pos = {
              lat: Number(_item.geo.latitude),
              lng: Number(_item.geo.longitude)
            };
            this.positions.push(pos);
            var marker = new google.maps.Marker({
              position: pos,
              icon: _item.icon,
              map: this.map,
              markerInfo: _item,
              markerContext: this
            });
            marker.gmMarker = marker;
            this.markers.push(marker); // add to list

            google.maps.event.addListener(marker, 'click', this.markerClicked);
          }
        } // this.selectOptions.push([item.id, item.forum, item.iconUrl]);
        // this.updateItem(item, true);

      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator.return != null) {
          _iterator.return();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    this.fitBounds(this.map);
  },
  clearLocations: function clearLocations() {
    console.log('clearLocations()');
    this.positions = [];
    this.info = null;
    this.selectOptions = [];
    this.selectOptions.push([0, 'none', '']);
    this.setMapOnAll(null); // clear all markers from map

    this.markers = [];
  },
  doSearchUser: function doSearchUser(attrs) {
    var _this = this;

    console.log("doSearchUser parms=", attrs);
    this.searchErrorMessage = null;
    Users.searchUsers({
      name: attrs.user,
      radius: attrs.radius ? String(attrs.radius) : undefined,
      limit: attrs.limit ? String(attrs.limit) : undefined
    }).then(function (result) {
      console.log("doSearchUser: ", result);

      _this.addMarkers(Users.list);
    });
    /*
    this.http.get(this.loadSearchUser, {params: params, headers: headers})
    .subscribe(
            data => {
                console.log('getUser data=', data);
                this.info = data[0];
                // console.log('home info=', this.info);
                this.searchLocation = this.info.location;
                this.getIconUrl(this.info);
                // this.positions.push({latlng: [Number(this.info.geo.latitude), Number(this.info.geo.longitude)], item: this.info});
                console.log('initial position=', this.positions);
                if (this.info.geo.latitude) {
                    this.mapCenter = {lat: Number(this.info.geo.latitude), lng: Number(this.info.geo.longitude)};
                } else {
                    this.mapCenter = {lat: Number(this.lat), lng: Number(this.lng)};
                }
                console.log('mapCenter=', this.mapCenter);
                this.foundUser = true;
                this.doSearchLocation(this.searchLocation);
            }, (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('doSearchUser client error=', err);
                    this.searchErrorMessage = err['error']['message'];
                    this.foundUser = false;
                  } else {
                      console.log('doSearchUser server error=', err);
                      this.searchErrorMessage = err['error']['message'];
                      this.foundUser = false;
                  }
                });
                */
  },

  /**
   * @param center - either null or an address
   */
  doSearchLocation: function doSearchLocation(center) {
    console.log('reloading from Remote..., center=', center);
    this.searchErrorMessage = null;
    this.clearLocations();
    var items;
    /*
    const headers = new HttpHeaders()
        .set('X-Requested-With', 'XMLHttpRequest')
        .set('responseType', 'json');
    // console.log('added headers=', headers);
    let params = null;
    if (center) {
        params = new HttpParams().set('address', center)
            .set('radius', String(this.searchRadius))
            .set('limit', String(this.searchLimit));
        console.log('reload params=', params);
    }
    this.http.get(this.loadSearchLocation, {params: params, headers: headers})
    .subscribe(
            data => {
                console.log('remote data=', data);
                items = data;
                this.users = items;
                // console.log('load items=', items);
                let firstItem = true;
                for (const item of items) {
                    // console.log('insert new ', item);
                    if (firstItem) {
                        this.mapCenter = {lat: Number(item.geo.latitude), lng: Number(item.geo.longitude)};
                        firstItem = false;
                    }
                    this.getIconUrl(item);
                    this.info = {id: item.id,
                            geo: {latitude: Number(item.geo.latitude),
                                longitude: Number(item.geo.longitude)},
                            display: true,
                            color: item.color,
                            forum_name: item.forum,
                            location: item.location,
                            iconUrl: item.iconUrl,
                            label: null,
                    };
                    if (item.geo.latitude) {
                        this.positions.push({latlng: [Number(item.geo.latitude), Number(item.geo.longitude)], item: item});
                    }
                    this.selectOptions.push([item.id, item.forum, item.iconUrl]);
                    // this.updateItem(item, true);
                }
                // map won't have markers yet, so wait a bit to set bounds
                setTimeout(() => {
                    console.log('Async Task Calling Callback');
                    this.fitBounds(this.map);
                  }, 500);
                // console.log('selectOptions=', this.selectOptions);
            },
            (err: HttpErrorResponse) => {
                if (err.error instanceof Error) {
                    console.log('doSearchUser client error=', err);
                    this.searchErrorMessage = err['error']['message'];
                    this.foundUser = false;
                  } else {
                      console.log('doSearchUser server error=', err);
                      this.searchErrorMessage = err['error']['message'];
                      this.foundUser = false;
                  }
                });
                */
  },
  search: function search(searchParms) {
    console.log("search map parms=", searchParms);
    var opts = {
      center: new google.maps.LatLng(20, -20),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(document.getElementById("user-map"), opts);
    this.map.addListener('center_changed', function () {
      console.log("center_changed");
    });
    this.clearLocations();
    this.searchParms = searchParms; // for use in then statements

    if (searchParms.location) {
      this.doSearchLocation(this.searchParms).bind(this);
    } else if (searchParms.user) {
      this.doSearchUser(this.searchParms).bind(this);
    }
  },
  oncreate: function oncreate(vnode) {
    var _this2 = this;

    console.log('oncreate map');
    var opts = {
      center: new google.maps.LatLng(0, 0),
      zoom: 4,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    this.map = new google.maps.Map(document.getElementById("user-map"), opts);
    this.map.addListener('center_changed', function () {
      console.log("center_changed");
    });
    Users.searchUsers().then(function () {
      _this2.addMarkers(Users.list);
    });
  },
  view: function view(vnode) {
    return m("#user-map", "");
  }
};
module.exports = UserMap;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(16);
__webpack_require__(16);
(function webpackMissingModule() { throw new Error("Cannot find module \"C:\\Users\\myers\\git\\mapusersApp\\bin\\app.js\""); }());


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, window, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, window, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(window, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(28);
// On some exotic environments, it's not clear which object `setimmeidate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9)))

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(9), __webpack_require__(29)))

/***/ }),
/* 29 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var m = __webpack_require__(5);

var UserControl = __webpack_require__(17);

var UserMap = __webpack_require__(25);

var UserMapPage = function () {
  var x = 0;

  function ctrl(vnode) {
    /*...*/
    return;
  }

  function view(vnode) {
    return m("user-map-page", [m("h1", "Forum User Locations"), m("#user-form-div", m(UserControl)), m("#user-map-div", m(UserMap))]);
  }

  return {
    view: view,
    oninit: ctrl
  };
}();

module.exports = UserMapPage;

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "keys", function() { return __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["c"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "renderer", function() { return __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["d"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "StateComponent", function() { return __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ViewComponent", function() { return __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__ = __webpack_require__(8);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_1_polythene_mithril_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_card__ = __webpack_require__(34);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_card__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_checkbox__ = __webpack_require__(40);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Checkbox", function() { return __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_checkbox__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_dialog__ = __webpack_require__(42);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DialogInstance", function() { return __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_dialog__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Dialog", function() { return __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_dialog__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_polythene_mithril_dialog_pane__ = __webpack_require__(20);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "DialogPane", function() { return __WEBPACK_IMPORTED_MODULE_5_polythene_mithril_dialog_pane__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_polythene_mithril_fab__ = __webpack_require__(45);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "FAB", function() { return __WEBPACK_IMPORTED_MODULE_6_polythene_mithril_fab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Icon", function() { return __WEBPACK_IMPORTED_MODULE_7_polythene_mithril_icon__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_polythene_mithril_icon_button__ = __webpack_require__(7);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "IconButton", function() { return __WEBPACK_IMPORTED_MODULE_8_polythene_mithril_icon_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_polythene_mithril_ios_spinner__ = __webpack_require__(48);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "IOSSpinner", function() { return __WEBPACK_IMPORTED_MODULE_9_polythene_mithril_ios_spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_polythene_mithril_list__ = __webpack_require__(50);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "List", function() { return __WEBPACK_IMPORTED_MODULE_10_polythene_mithril_list__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_polythene_mithril_list_tile__ = __webpack_require__(11);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ListTile", function() { return __WEBPACK_IMPORTED_MODULE_11_polythene_mithril_list_tile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_polythene_mithril_material_design_progress_spinner__ = __webpack_require__(52);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignProgressSpinner", function() { return __WEBPACK_IMPORTED_MODULE_12_polythene_mithril_material_design_progress_spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_polythene_mithril_material_design_spinner__ = __webpack_require__(54);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "MaterialDesignSpinner", function() { return __WEBPACK_IMPORTED_MODULE_13_polythene_mithril_material_design_spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_polythene_mithril_menu__ = __webpack_require__(56);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return __WEBPACK_IMPORTED_MODULE_14_polythene_mithril_menu__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_polythene_mithril_notification__ = __webpack_require__(58);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "NotificationInstance", function() { return __WEBPACK_IMPORTED_MODULE_15_polythene_mithril_notification__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Notification", function() { return __WEBPACK_IMPORTED_MODULE_15_polythene_mithril_notification__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_polythene_mithril_radio_button__ = __webpack_require__(23);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RadioButton", function() { return __WEBPACK_IMPORTED_MODULE_16_polythene_mithril_radio_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_polythene_mithril_radio_group__ = __webpack_require__(60);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RadioGroup", function() { return __WEBPACK_IMPORTED_MODULE_17_polythene_mithril_radio_group__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_polythene_mithril_raised_button__ = __webpack_require__(21);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "RaisedButton", function() { return __WEBPACK_IMPORTED_MODULE_18_polythene_mithril_raised_button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_polythene_mithril_ripple__ = __webpack_require__(10);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Ripple", function() { return __WEBPACK_IMPORTED_MODULE_19_polythene_mithril_ripple__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_polythene_mithril_search__ = __webpack_require__(62);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Search", function() { return __WEBPACK_IMPORTED_MODULE_20_polythene_mithril_search__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_polythene_mithril_shadow__ = __webpack_require__(4);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Shadow", function() { return __WEBPACK_IMPORTED_MODULE_21_polythene_mithril_shadow__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_polythene_mithril_slider__ = __webpack_require__(65);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Slider", function() { return __WEBPACK_IMPORTED_MODULE_22_polythene_mithril_slider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_polythene_mithril_snackbar__ = __webpack_require__(67);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SnackbarInstance", function() { return __WEBPACK_IMPORTED_MODULE_23_polythene_mithril_snackbar__["b"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Snackbar", function() { return __WEBPACK_IMPORTED_MODULE_23_polythene_mithril_snackbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24_polythene_mithril_svg__ = __webpack_require__(19);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "SVG", function() { return __WEBPACK_IMPORTED_MODULE_24_polythene_mithril_svg__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25_polythene_mithril_switch__ = __webpack_require__(69);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Switch", function() { return __WEBPACK_IMPORTED_MODULE_25_polythene_mithril_switch__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_polythene_mithril_tabs__ = __webpack_require__(71);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return __WEBPACK_IMPORTED_MODULE_26_polythene_mithril_tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_polythene_mithril_textfield__ = __webpack_require__(24);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "TextField", function() { return __WEBPACK_IMPORTED_MODULE_27_polythene_mithril_textfield__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28_polythene_mithril_toolbar__ = __webpack_require__(73);
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "Toolbar", function() { return __WEBPACK_IMPORTED_MODULE_28_polythene_mithril_toolbar__["a"]; });
/* harmony namespace reexport (by provided) */ __webpack_require__.d(__webpack_exports__, "ToolbarTitle", function() { return __WEBPACK_IMPORTED_MODULE_28_polythene_mithril_toolbar__["b"]; });































/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return vars; });
// Global style variables

var grid_unit = 4;
var grid_unit_component = 8;

var animation_curve_slow_in_fast_out = "cubic-bezier(.4, 0, .2, 1)";
var animation_curve_slow_in_linear_out = "cubic-bezier(0, 0, .2, 1)";
var animation_curve_linear_in_fast_out = "cubic-bezier(.4, 0, 1, 1)";

var vars = {
  // grid
  grid_unit: grid_unit,
  grid_unit_component: grid_unit_component,
  grid_unit_menu: 56,
  grid_unit_icon_button: 6 * grid_unit_component, // 48

  // common sizes
  unit_block_border_radius: 2,
  unit_item_border_radius: 2,
  unit_indent: 72,
  unit_side_padding: 16,

  // buttons
  unit_touch_height: 48,
  unit_icon_size_small: 2 * grid_unit_component, // 16
  unit_icon_size: 3 * grid_unit_component, // 24
  unit_icon_size_medium: 4 * grid_unit_component, // 32
  unit_icon_size_large: 5 * grid_unit_component, // 40

  // screen dimensions
  unit_screen_size_extra_large: 1280,
  unit_screen_size_large: 960,
  unit_screen_size_medium: 480,
  unit_screen_size_small: 320,

  // transitions
  animation_duration: ".18s",
  animation_curve_slow_in_fast_out: animation_curve_slow_in_fast_out,
  animation_curve_slow_in_linear_out: animation_curve_slow_in_linear_out,
  animation_curve_linear_in_fast_out: animation_curve_linear_in_fast_out,
  animation_curve_default: "ease-out",

  // font
  font_weight_light: 300,
  font_weight_normal: 400,
  font_weight_medium: 500,
  font_weight_bold: 700,
  font_size_title: 20,
  line_height: 1.3,

  // base colors
  color_primary: "33, 150, 243", // blue 500
  color_primary_active: "30, 136, 229", // blue 600
  color_primary_dark: "25, 118, 210", // blue 700
  color_primary_faded: "100, 181, 249", // blue 300
  color_primary_foreground: "255, 255, 255",

  color_light_background: "255, 255, 255",
  color_light_foreground: "0, 0, 0",
  color_dark_background: "34, 34, 34",
  color_dark_foreground: "255, 255, 255",

  // blends
  blend_light_text_primary: .87,
  blend_light_text_regular: .73,
  blend_light_text_secondary: .54,
  blend_light_text_tertiary: .40,
  blend_light_text_disabled: .26,
  blend_light_border_light: .11,
  blend_light_background_active: .14,
  blend_light_background_hover: .06,
  blend_light_background_hover_medium: .12, // for the lighter tinted icon buttons
  blend_light_background_disabled: .09,
  blend_light_overlay_background: .3,

  blend_dark_text_primary: 1,
  blend_dark_text_regular: .87,
  blend_dark_text_secondary: .70,
  blend_dark_text_tertiary: .40,
  blend_dark_text_disabled: .26,
  blend_dark_border_light: .10,
  blend_dark_background_active: .14,
  blend_dark_background_hover: .08,
  blend_dark_background_hoverMedium: .12, // for the lighter tinted icon buttons
  blend_dark_background_disabled: .12,
  blend_dark_overlay_background: .3,

  /*
  Breakpoints
  Specs: https://material.io/guidelines/layout/responsive-ui.html#responsive-ui-breakpoints
  Breakbpoint naming: inspiration from
  https://medium.freecodecamp.org/the-100-correct-way-to-do-css-breakpoints-88d6a5ba1862
  */
  breakpoint_for_phone_only: 599, // set max-width  cols: 4,  gutter: 16
  breakpoint_for_tablet_portrait_up: 600, // set min-width  cols: 8,  gutter: 24
  breakpoint_for_tablet_landscape_up: 840, // etc.           cols: 12, gutter: 24
  breakpoint_for_desktop_up: 1280,
  breakpoint_for_big_desktop_up: 1600,
  breakpoint_for_tv_up: 1920,

  // z-index
  z_menu: 1000,
  z_header_container: 2000,
  z_fixed_header_container: 3000,
  z_notification: 4000,
  z_dialog: 5000
};




/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ripple; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var ANIMATION_END_EVENT = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["d" /* getAnimationEndEvent */])();
var DEFAULT_START_OPACITY = 0.2;
var DEFAULT_END_OPACITY = 0.0;
var DEFAULT_START_SCALE = 0.1;
var DEFAULT_END_SCALE = 2.0;
var OPACITY_DECAY_VELOCITY = 0.35;

var addStyleToHead = function addStyleToHead(id, stylesheet) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) return;
  var documentRef = window.document;
  var styleEl = documentRef.createElement("style");
  styleEl.setAttribute("id", id);
  styleEl.appendChild(documentRef.createTextNode(stylesheet));
  documentRef.head.appendChild(styleEl);
};

var removeStyleFromHead = function removeStyleFromHead(id) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) return;
  var el = document.getElementById(id);
  if (el && el.parentNode) {
    el.parentNode.removeChild(el);
  }
};

var animation = (function (_ref) {
  var e = _ref.e,
      id = _ref.id,
      el = _ref.el,
      attrs = _ref.attrs,
      classes = _ref.classes;

  return new Promise(function (resolve) {
    var container = document.createElement("div");
    container.setAttribute("class", classes.mask);
    el.appendChild(container);
    var waves = document.createElement("div");
    waves.setAttribute("class", classes.waves);
    container.appendChild(waves);
    var rect = el.getBoundingClientRect();
    var x = __WEBPACK_IMPORTED_MODULE_0_polythene_core__["h" /* isTouch */] && e.touches ? e.touches[0].pageX : e.clientX;
    var y = __WEBPACK_IMPORTED_MODULE_0_polythene_core__["h" /* isTouch */] && e.touches ? e.touches[0].pageY : e.clientY;
    var w = el.offsetWidth;
    var h = el.offsetHeight;
    var waveRadius = Math.sqrt(w * w + h * h);
    var mx = attrs.center ? rect.left + rect.width / 2 : x;
    var my = attrs.center ? rect.top + rect.height / 2 : y;
    var rx = mx - rect.left - waveRadius / 2;
    var ry = my - rect.top - waveRadius / 2;
    var startOpacity = attrs.startOpacity !== undefined ? attrs.startOpacity : DEFAULT_START_OPACITY;
    var opacityDecayVelocity = attrs.opacityDecayVelocity !== undefined ? attrs.opacityDecayVelocity : OPACITY_DECAY_VELOCITY;
    var endOpacity = attrs.endOpacity || DEFAULT_END_OPACITY;
    var startScale = attrs.startScale || DEFAULT_START_SCALE;
    var endScale = attrs.endScale || DEFAULT_END_SCALE;
    var duration = attrs.duration ? attrs.duration : 1 / opacityDecayVelocity * 0.2;
    var color = window.getComputedStyle(el).color;

    var style = waves.style;
    style.width = style.height = waveRadius + "px";
    style.top = ry + "px";
    style.left = rx + "px";
    style["animation-duration"] = style["-webkit-animation-duration"] = style["-moz-animation-duration"] = style["-o-animation-duration"] = duration + "s";
    style.backgroundColor = color;
    style.opacity = startOpacity;
    style.animationName = id;
    style.animationTimingFunction = attrs.animationTimingFunction || __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_curve_default;

    var rippleStyleSheet = "@keyframes " + id + " {\n      0% {\n        transform:scale(" + startScale + ");\n        opacity: " + startOpacity + "\n      }\n      100% {\n        transform:scale(" + endScale + ");\n        opacity: " + endOpacity + ";\n      }\n    }";
    addStyleToHead(id, rippleStyleSheet);

    var animationDone = function animationDone(evt) {
      removeStyleFromHead(id);
      waves.removeEventListener(ANIMATION_END_EVENT, animationDone, false);
      if (attrs.persistent) {
        style.opacity = endOpacity;
        style.transform = "scale(" + endScale + ")";
      } else {
        waves.classList.remove(classes.wavesAnimating);
        container.removeChild(waves);
        el.removeChild(container);
      }
      resolve(evt);
    };

    waves.addEventListener(ANIMATION_END_EVENT, animationDone, false);
    waves.classList.add(classes.wavesAnimating);
  });
});

var classes = {
  component: "pe-ripple",

  // elements
  mask: "pe-ripple__mask",
  waves: "pe-ripple__waves",

  // states
  unconstrained: "pe-ripple--unconstrained",
  wavesAnimating: "pe-ripple__waves--animating"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var getInitialState = function getInitialState() {
  return {
    animations: {},
    animating: false,
    cleanUp: undefined
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.unconstrained ? classes.unconstrained : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var updateAnimationState = function updateAnimationState(state) {
  return state.animating = Object.keys(state.animations).length > 0;
};

var onMount = function onMount(vnode) {
  if (!vnode.dom && __WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;

  var tap = function tap(e) {
    if (attrs.disabled || !attrs.multi && state.animating) {
      return;
    }
    if (attrs.start) {
      attrs.start(e);
    }
    var id = "ripple_animation_" + new Date().getTime();
    state.animations[id] = animation({ e: e, id: id, el: vnode.dom, attrs: attrs, classes: classes }).then(function (evt) {
      if (attrs.end) {
        attrs.end(evt);
      }
      delete state.animations[id];
      updateAnimationState(state);
    });
    updateAnimationState(state);
  };
  var triggerEl = attrs.target ? attrs.target : vnode.dom && vnode.dom.parentElement;

  triggerEl.addEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["i" /* pointerEndEvent */], tap, false);
  state.cleanUp = function () {
    return triggerEl.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["i" /* pointerEndEvent */], tap, false);
  };
};

var onUnMount = function onUnMount(_ref2) {
  var state = _ref2.state;
  return state.cleanUp && state.cleanUp();
};

var ripple = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	createProps: createProps,
	onMount: onMount,
	onUnMount: onUnMount
});

var vars$1 = {
  color: "inherit" // only specify this variable to get both states
  // color_light:   "inherit",
  // color_dark:    "inherit"
};




/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Card; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_list_tile__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_shadow__ = __webpack_require__(4);






var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardActions = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$1({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__["b" /* coreCardActions */]));

CardActions.displayName = "CardActions";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardMedia = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends$2({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__["c" /* coreCardMedia */]));

CardMedia.displayName = "CardMedia";

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CardPrimary = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$3({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__["d" /* coreCardPrimary */]));

CardPrimary.displayName = "CardPrimary";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Card = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__["a" /* coreCard */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_card__["a" /* coreCard */].createContent(vnode, _extends(args, { CardActions: CardActions, CardMedia: CardMedia, CardPrimary: CardPrimary, Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */], ListTile: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_list_tile__["a" /* ListTile */], Shadow: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_shadow__["a" /* Shadow */] }));
  }
}));

Card.displayName = "Card";




/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return card; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return cardActions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return cardMedia; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return cardPrimary; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-card",

  // elements
  actions: "pe-card__actions",
  any: "pe-card__any",
  content: "pe-card__content",
  header: "pe-card__header",
  headerTitle: "pe-card__header-title",
  media: "pe-card__media",
  mediaDimmer: "pe-card__media__dimmer",
  overlay: "pe-card__overlay",
  overlayContent: "pe-card__overlay__content",
  primary: "pe-card__primary",
  primaryMedia: "pe-card__primary-media",
  subtitle: "pe-card__subtitle",
  text: "pe-card__text",
  title: "pe-card__title",

  // states
  actionsBordered: "pe-card__actions--borders",
  actionsHorizontal: "pe-card__actions--horizontal",
  actionsJustified: "pe-card__actions--justified",
  actionsTight: "pe-card__actions--tight",
  actionsVertical: "pe-card__actions--vertical",
  mediaCropX: "pe-card__media--crop-x",
  mediaCropY: "pe-card__media--crop-y",
  mediaLarge: "pe-card__media--large",
  mediaMedium: "pe-card__media--medium",
  mediaRatioLandscape: "pe-card__media--landscape",
  mediaRatioSquare: "pe-card__media--square",
  mediaRegular: "pe-card__media--regular",
  mediaSmall: "pe-card__media--small",
  overlaySheet: "pe-card__overlay--sheet",
  primaryHasMedia: "pe-card__primary--media",
  primaryTight: "pe-card__primary--tight",
  textTight: "pe-card__text--tight"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createOverlay = function createOverlay(_ref) {
  var dispatcher = _ref.dispatcher,
      attrs = _ref.attrs,
      h = _ref.h,
      k = _ref.k;

  var element = attrs.element || "div";
  var content = attrs.content.map(dispatcher);
  return h("div", {
    key: attrs.key || "card-overlay",
    style: attrs.style,
    className: [classes.overlay, attrs.sheet ? classes.overlaySheet : null, attrs.tone === "light" ? null : "pe-dark-tone", // default dark tone
    attrs.tone === "light" ? "pe-light-tone" : null].join(" ")
  }, [h(element, {
    key: "content",
    className: [classes.overlayContent, attrs.className || attrs[k.class]].join(" ")
  }, content), h("div", {
    key: "dimmer",
    className: classes.mediaDimmer
  })]);
};

var createAny = function createAny(_ref2) {
  var attrs = _ref2.attrs,
      h = _ref2.h,
      k = _ref2.k;

  var element = attrs.element || "div";
  return h(element, _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    key: attrs.key || "card-any",
    className: [classes.any, attrs.tight ? classes.textTight : null, attrs.className || attrs[k.class]].join(" ")
  }), attrs.content);
};

var createText = function createText(_ref3) {
  var attrs = _ref3.attrs,
      h = _ref3.h,
      k = _ref3.k;

  var element = attrs.element || "div";
  return h(element, _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    key: attrs.key || "card-text",
    className: [classes.text, attrs.tight ? classes.textTight : null, attrs.className || attrs[k.class]].join(" ")
  }), attrs.content);
};

var createHeader = function createHeader(_ref4) {
  var attrs = _ref4.attrs,
      h = _ref4.h,
      k = _ref4.k,
      Icon = _ref4.Icon,
      ListTile = _ref4.ListTile;

  return h(ListTile, _extends({}, attrs, {
    key: attrs.key || "card-header",
    className: [classes.header, attrs.className || attrs[k.class]].join(" ")
  }, attrs.icon ? { front: h(Icon, attrs.icon) } : null));
};

var getElement = function getElement(vnode) {
  return vnode.attrs.element || vnode.attrs.url ? "a" : "div";
};

var createProps = function createProps(vnode, _ref5) {
  var k = _ref5.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.url, attrs.events);
};

var createContent = function createContent(vnode, _ref6) {
  var h = _ref6.renderer,
      k = _ref6.keys,
      CardActions = _ref6.CardActions,
      CardMedia = _ref6.CardMedia,
      CardPrimary = _ref6.CardPrimary,
      Icon = _ref6.Icon,
      Shadow = _ref6.Shadow,
      ListTile = _ref6.ListTile;


  var dispatcher = function dispatcher(block) {
    var key = Object.keys(block)[0];
    var attrs = _extends({}, block[key], {
      dispatcher: dispatcher,
      key: key
    });
    switch (key) {
      case "actions":
        return h(CardActions, attrs);
      case "header":
        return createHeader({ attrs: attrs, h: h, k: k, Icon: Icon, ListTile: ListTile });
      case "media":
        return h(CardMedia, attrs);
      case "overlay":
        return createOverlay({ dispatcher: dispatcher, attrs: attrs, h: h, k: k });
      case "primary":
        return h(CardPrimary, attrs);
      case "text":
        return createText({ attrs: attrs, h: h, k: k });
      case "any":
        return createAny({ attrs: attrs, h: h, k: k });
      default:
        throw "Content type \"" + key + "\" does not exist";
    }
  };

  var attrs = vnode.attrs;
  var contents = Array.isArray(attrs.content) ? attrs.content.map(dispatcher) : attrs.content;

  return [h(Shadow, {
    z: attrs.z !== undefined ? attrs.z : 1,
    animated: true,
    key: "shadow"
  }), h("div", {
    className: classes.content,
    key: "content"
  }, contents)];
};

var card = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var buttonClasses = {
  base: "pe-button",
  component: "pe-button pe-text-button",
  row: "pe-button-row",

  // elements
  content: "pe-button__content",
  focus: "pe-button__focus",
  label: "pe-button__label",
  wash: "pe-button__wash",

  // states
  borders: "pe-button--borders",
  disabled: "pe-button--disabled",
  focused: "pe-button--focus",
  inactive: "pe-button--inactive",
  selected: "pe-button--selected"
};

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var actionLayoutClasses = {
  horizontal: classes.actionsHorizontal,
  vertical: classes.actionsVertical,
  justified: classes.actionsJustified
};

var actionClassForLayout = function actionClassForLayout() {
  var layout = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "horizontal";
  return actionLayoutClasses[layout];
};

var createProps$1 = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends$1({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    key: "card-actions",
    className: [classes.actions, attrs.layout !== "vertical" ? buttonClasses.row : null, actionClassForLayout(attrs.layout), attrs.bordered ? classes.actionsBordered : null, attrs.tight ? classes.actionsTight : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent$1 = function createContent(vnode) {
  return vnode.attrs.content;
};

var cardActions = Object.freeze({
	createProps: createProps$1,
	createContent: createContent$1
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var imageRatios = {
  landscape: 16 / 9,
  square: 1
};

var mediaSizeClasses = {
  small: classes.mediaSmall,
  regular: classes.mediaRegular,
  medium: classes.mediaMedium,
  large: classes.mediaLarge
};

var mediaSizeClass = function mediaSizeClass() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return mediaSizeClasses[size];
};

var initImage = function initImage(_ref) {
  var dom = _ref.dom,
      img = _ref.img,
      ratio = _ref.ratio,
      origin = _ref.origin;

  img.onload = function () {
    var naturalRatio = this.naturalWidth / this.naturalHeight;
    // crop-x: crop over x axis
    // crop-y: crop over y axis
    var cropClass = naturalRatio < imageRatios[ratio] ? classes.mediaCropX : classes.mediaCropY;
    img.className = cropClass;

    var containerWidth = dom.clientWidth;
    var containerHeight = dom.clientHeight;

    if (naturalRatio < imageRatios[ratio]) {
      // orient on y axis
      if (origin === "center") {
        var imageHeight = containerWidth / naturalRatio;
        var diff = containerHeight - imageHeight;
        var offset = diff / 2;
        this.style.marginTop = offset + "px";
      } else if (origin === "start") {
        this.style.top = 0;
        this.style.bottom = "auto";
      } else {
        // end
        this.style.top = "auto";
        this.style.bottom = 0;
      }
    } else {
      // orient on x axis
      if (origin === "center") {
        var imageWidth = containerHeight * naturalRatio;
        var _diff = containerWidth - imageWidth;
        var _offset = _diff / 2;
        this.style.marginLeft = _offset + "px";
      } else if (origin === "start") {
        this.style.left = 0;
        this.style.right = "auto";
      } else {
        // end
        this.style.left = "auto";
        this.style.right = 0;
      }
    }
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var attrs = vnode.attrs;
  var ratio = attrs.ratio || "landscape";
  var origin = attrs.origin || "center";
  var dom = vnode.dom;
  var img = dom.querySelector("img");
  initImage({ dom: dom, img: img, ratio: ratio, origin: origin });
};

var createProps$2 = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var attrs = vnode.attrs;
  var ratio = attrs.ratio || "landscape";
  return _extends$2({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    key: "card-media",
    className: [classes.media, mediaSizeClass(attrs.size), ratio === "landscape" ? classes.mediaRatioLandscape : classes.mediaRatioSquare, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent$2 = function createContent(vnode, _ref3) {
  var h = _ref3.renderer;

  var attrs = vnode.attrs;
  var dispatcher = attrs.dispatcher;
  return [_extends$2({}, attrs.content, { key: "content" }), attrs.overlay ? dispatcher({ overlay: attrs.overlay, key: "overlay" }) : h("div", {
    className: classes.mediaDimmer,
    key: "dimmer"
  })];
};

var cardMedia = Object.freeze({
	onMount: onMount,
	createProps: createProps$2,
	createContent: createContent$2
});

var _extends$3 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var createProps$3 = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  var primaryHasMedia = Array.isArray(attrs.content) ? attrs.content.reduce(function (total, current) {
    return Object.keys(current)[0] === "media" ? true : total;
  }, false) : attrs.media || false;
  return _extends$3({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    key: "card-primary",
    className: [classes.primary, attrs.tight ? classes.primaryTight : null, primaryHasMedia ? classes.primaryHasMedia : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent$3 = function createContent(vnode, _ref2) {
  var h = _ref2.renderer;

  var attrs = vnode.attrs;
  var dispatcher = attrs.dispatcher;
  var primaryDispatch = {
    title: function title(pAttrs) {
      return pAttrs.attrs || pAttrs.props ? pAttrs || pAttrs.props : h("div", {
        className: classes.title,
        key: "title",
        style: pAttrs.style
      }, [pAttrs.title, pAttrs.subtitle ? h("div", {
        className: classes.subtitle,
        key: "subtitle"
      }, pAttrs.subtitle) : null]);
    },
    media: function media(pAttrs) {
      return h("div", {
        className: classes.primaryMedia,
        key: "media",
        style: pAttrs.style
      }, dispatcher({ media: pAttrs }));
    },
    actions: function actions(pAttrs) {
      return dispatcher({ actions: pAttrs });
    }
  };

  return Array.isArray(attrs.content) ? attrs.content.map(function (block) {
    var key = Object.keys(block)[0];
    var pAttrs = block[key];
    return primaryDispatch[key] ? primaryDispatch[key](pAttrs) : block;
  }) : [attrs.title ? primaryDispatch.title({
    title: attrs.title,
    subtitle: attrs.subtitle,
    key: "title"
  }) : null, attrs.media ? primaryDispatch.media(attrs.media) : null, attrs.actions ? primaryDispatch.actions(attrs.actions) : null, attrs.content];
};

var cardPrimary = Object.freeze({
	createProps: createProps$3,
	createContent: createContent$3
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var padding_v = 24;
var padding_actions_v = 8;
var actions_button_margin_v = 2;

var vars$1 = {
  image_size_small: 1 * 80,
  image_size_regular: 1.4 * 80,
  image_size_medium: 2 * 80,
  image_size_large: 3 * 80,
  border_radius: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_block_border_radius,
  padding_h: 16,
  offset_small_padding_v: padding_v - 16,
  padding_actions_h: 8,
  title_padding_h: 16,
  title_padding_v: 24,
  tight_title_padding_bottom: 16,
  text_padding_h: 16,
  text_padding_v: 16,
  text_padding_bottom: 24,
  tight_text_padding_bottom: 16,
  subtitle_line_height_padding_bottom: 7,
  text_line_height_padding_top: 6,
  text_line_height_padding_bottom: 7,
  one_line_height_with_icon: 72,
  icon_element_width: 72 - 4,
  one_line_padding_v: 8,
  actions_padding_v: 0,
  actions_button_margin_v: actions_button_margin_v,
  actions_vertical_padding_v: padding_actions_v - actions_button_margin_v,

  color_light_main_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background),
  color_light_title_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_subtitle_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_light_actions_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_overlay_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_overlay_background),

  color_dark_main_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background),
  color_dark_title_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_subtitle_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_regular),
  color_dark_actions_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_overlay_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_overlay_background)
};




/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return icon; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-icon",

  // states
  avatar: "pe-icon--avatar",
  large: "pe-icon--large",
  medium: "pe-icon--medium",
  regular: "pe-icon--regular",
  small: "pe-icon--small"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var sizeClasses = {
  small: classes.small,
  regular: classes.regular,
  medium: classes.medium,
  large: classes.large
};

var classForSize = function classForSize() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return sizeClasses[size];
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, classForSize(attrs.size), attrs.avatar ? classes.avatar : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      SVG = _ref2.SVG;

  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.svg ? h(SVG, attrs.svg) : attrs.src ? h("img", { src: attrs.src }) : attrs.children || vnode.children;
};

var icon = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var vars$1 = {
  size_small: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_icon_size_small,
  size_regular: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_icon_size,
  size_medium: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_icon_size_medium,
  size_large: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_icon_size_large,
  color_light: "currentcolor",
  color_dark: "currentcolor"
};




/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return svg; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);


var classes = {
  component: "pe-svg"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  // Prevent that SVG gets keyboard focus
  var elem = vnode.dom.querySelector("svg");
  if (elem) {
    elem.setAttribute("focusable", "false");
  }
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var svg = Object.freeze({
	getElement: getElement,
	onMount: onMount,
	createProps: createProps,
	createContent: createContent
});

var vars = {
  color_light: "currentcolor",
  color_dark: "currentcolor"
};




/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return listTile; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement() {
  return "div";
}; // because primary or secondary content can be an "a", the container is always defined as "div", and option `element` is passed to primary content

var primaryContent = function primaryContent(h, k, requiresKeys, attrs, children) {
  var url = attrs.keyboardControl ? null : attrs.url;
  var element = attrs.element ? attrs.element : url ? "a" : "div";
  var contentFrontClass = [classes.content, classes.contentFront, attrs.compactFront ? classes.compactFront : null].join(" ");
  var frontComp = attrs.front ? h("div", _extends({}, requiresKeys ? { key: "front" } : null, { className: contentFrontClass }), attrs.front) : attrs.indent ? h("div", _extends({}, requiresKeys ? { key: "front" } : null, { className: contentFrontClass })) : null;
  var hasTabIndex = !attrs.header && attrs.url;
  var props = _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), attrs.events, {
    className: classes.primary,
    style: null
  }, hasTabIndex && _defineProperty({}, k.tabindex, attrs[k.tabindex] || 0), url);
  var content = attrs.content ? attrs.content : [frontComp, h("div", {
    className: classes.content,
    style: attrs.style
  }, [attrs.content ? _extends({}, requiresKeys ? { key: "content" } : null, attrs.content) : children, attrs.title && !attrs.content ? h("div", _extends({}, requiresKeys ? { key: "title" } : null, { className: classes.title }), attrs.title) : null, attrs.subtitle ? h("div", _extends({}, requiresKeys ? { key: "subtitle" } : null, { className: classes.subtitle }), attrs.subtitle) : null, attrs.highSubtitle ? h("div", _extends({}, requiresKeys ? { key: "highSubtitle" } : null, { className: classes.subtitle + " " + classes.highSubtitle }), attrs.highSubtitle) : null, attrs.subContent ? h("div", _extends({}, requiresKeys ? { key: "subContent" } : null, { className: classes.subContent }), attrs.subContent) : null])];
  return h(element, props, content);
};

var secondaryContent = function secondaryContent(h, k, requiresKeys, Icon) {
  var attrs = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {};

  var url = attrs.keyboardControl ? null : attrs.url;
  var element = attrs.element ? attrs.element : url ? "a" : "div";
  var hasTabIndex = attrs.url;
  return h(element, _extends({}, url, {
    className: classes.secondary
  }, requiresKeys ? { key: "secondary" } : null, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), hasTabIndex && _defineProperty({}, k.tabindex, attrs[k.tabindex] || 0)), h("div", { className: classes.content }, [attrs.icon ? h(Icon, attrs.icon) : null, attrs.content ? attrs.content : null]));
};

var createProps = function createProps(vnode, _ref3) {
  var k = _ref3.keys;

  var attrs = vnode.attrs;
  var hasTabIndex = !attrs.header && !attrs.url && !(attrs.secondary && attrs.secondary.url);
  var heightClass = attrs.subtitle ? classes.hasSubtitle : attrs.highSubtitle ? classes.hasHighSubtitle : attrs.front || attrs.indent ? classes.hasFront : null;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { remove: ["tabindex", "tabIndex"] }), // tabindex is set elsewhere
  {
    className: [classes.component, attrs.selected ? classes.selected : null, attrs.disabled ? classes.disabled : null, attrs.sticky ? classes.sticky : null, attrs.compact ? classes.compact : null, attrs.hoverable ? classes.hoverable : null, attrs.selectable ? classes.selectable : null, attrs.highlight ? classes.highlight : null, attrs.header ? classes.header : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, heightClass, attrs.className || attrs[k.class]].join(" ")
  }, hasTabIndex && _defineProperty({}, k.tabindex, attrs[k.tabindex] || 0)
  // events and url are attached to primary content to not interfere with controls
  );
};

var createContent = function createContent(vnode, _ref5) {
  var h = _ref5.renderer,
      requiresKeys = _ref5.requiresKeys,
      k = _ref5.keys,
      Ripple = _ref5.Ripple,
      Icon = _ref5.Icon;

  var attrs = vnode.attrs;
  var primaryAttrs = _extends({}, requiresKeys ? { key: "primary" } : null, attrs);
  delete primaryAttrs.id;
  delete primaryAttrs[k.class];
  return [attrs.ink && !attrs.disabled ? h(Ripple, _extends({}, attrs.ripple, requiresKeys ? { key: "ripple" } : null)) : null, primaryContent(h, k, requiresKeys, primaryAttrs, attrs.children || vnode.children), attrs.secondary ? secondaryContent(h, k, requiresKeys, Icon, attrs.secondary) : null];
};

var listTile = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

// SPECS
//
// heights:
// single line: 48
// single line, dense: 40
// single line, with icon: 48
// single line, with icon, dense: 40
// single line, with avatar: 56
// single line, with avatar, dense: 48
// two-line: 72
// two-line, dense: 60
// three-line: 88
// three-line, dense: 76

var single_height = 48;
var padding = 8;
var single_with_icon_height = 56;

var vars$1 = {
  single_height: single_height,
  single_line_height: single_height - 2 * padding - (2 * 5 + 1),
  single_with_icon_height: single_with_icon_height,
  single_with_icon_line_height: single_with_icon_height - 2 * padding - (2 * 5 + 1),
  padding: 13,
  compact_padding: 9,
  subtitle_line_count: 1,
  has_subtitle_padding: 15,
  high_subtitle_line_count: 2,
  has_high_subtitle_padding: 13,
  front_item_width: 72,
  compact_front_item_width: 64,
  side_padding: 2 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  compact_side_padding: 1 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  font_size_title: 16,
  font_size_subtitle: 14,
  line_height_subtitle: 20,
  font_size_list_header: 14,
  font_size_small: 12,

  color_light_title: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_subtitle: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_info: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_text_disabled: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_list_header: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_secondary: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_selected_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_highlight_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  // background color may be set in theme; disabled by default
  // color_light_background:          "inherit",

  color_dark_title: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_subtitle: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_info: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_text_disabled: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_list_header: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_secondary: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_hover_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_selected_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_hover),
  color_dark_highlight_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_hover)
  // background color may be set in theme; disabled by default
  // color_dark_background:           "inherit",
};




/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return shadow; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-shadow",

  // elements
  bottomShadow: "pe-shadow__bottom",
  topShadow: "pe-shadow__top",

  // states
  animated: "pe-shadow--animated",
  depth_n: "pe-shadow--z-"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.animated && classes.animated, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.children || vnode.children;
  var depthClass = "" + classes.depth_n + Math.min(5, attrs.z !== undefined ? attrs.z : 1);
  return [content, h("div", {
    key: "bottom",
    className: [classes.bottomShadow, depthClass].join(" ")
  }), h("div", {
    key: "top",
    className: [classes.topShadow, depthClass].join(" ")
  })];
};

var shadow = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var vars$1 = {
  transition: "box-shadow " + __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration + " ease-out",

  "shadow-top-z-1": "initial",
  "shadow-bottom-z-1": "0 1px 4px 0 rgba(0, 0, 0, 0.37)",

  "shadow-top-z-2": "0 2px 2px 0 rgba(0, 0, 0, 0.2)",
  "shadow-bottom-z-2": "0 6px 10px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-3": "0 11px 7px 0 rgba(0, 0, 0, 0.19)",
  "shadow-bottom-z-3": "0 13px 25px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-4": "0 14px 12px 0 rgba(0, 0, 0, 0.17)",
  "shadow-bottom-z-4": "0 20px 40px 0 rgba(0, 0, 0, 0.3)",

  "shadow-top-z-5": "0 17px 17px 0 rgba(0, 0, 0, 0.15)",
  "shadow-bottom-z-5": "0 27px 55px 0 rgba(0, 0, 0, 0.3)",

  "shadow-down-z-1": "inset 0px 1px 2px -1px rgba(0, 0, 0, 0.15)",
  "shadow-down-z-2": "inset 0px 4px 6px -3px rgba(0, 0, 0, 0.25)"
};




/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Checkbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_checkbox__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__ = __webpack_require__(7);






var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$2({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["c" /* viewControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["c" /* viewControl */].createContent(vnode, _extends$2(args, { Icon: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_icon__["a" /* Icon */], IconButton: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__["a" /* IconButton */] }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends$1({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */].createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Checkbox = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_checkbox__["a" /* coreCheckbox */], {
  component: SelectionControl
}));

Checkbox.displayName = "Checkbox";




/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkbox; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core_selection_control__ = __webpack_require__(6);
/* unused harmony reexport vars */
var classes = {
  component: "pe-checkbox-control"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

var iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z\"/></svg>";
var iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z\"/></svg>";

var icons = {
  iconOff: iconOff,
  iconOn: iconOn
};

// Props to be passed to a selection control

var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    icons: icons,
    selectable: attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });
};

var checkbox = Object.freeze({
	createProps: createProps
});





/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return DialogInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Dialog; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_dialog_pane__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_shadow__ = __webpack_require__(4);






var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var menuClasses = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var classes = {
  component: "pe-dialog",

  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",

  // states
  fullScreen: "pe-dialog--full-screen",
  backdrop: "pe-dialog--backdrop",
  open: "pe-dialog--open",

  // lookup
  menuContent: menuClasses.content
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DialogInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["a" /* coreDialogInstance */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["a" /* coreDialogInstance */].createProps(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_shadow__["a" /* Shadow */], DialogPane: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_dialog_pane__["a" /* DialogPane */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["a" /* coreDialogInstance */].createContent(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_shadow__["a" /* Shadow */], DialogPane: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_dialog_pane__["a" /* DialogPane */] }));
  }
}));

DialogInstance.displayName = "DialogInstance";

var options = {
  name: "dialog",
  htmlShowClass: classes.open,
  defaultId: "default_dialog",
  holderSelector: "div." + classes.holder,
  instance: DialogInstance,
  placeholder: "span." + classes.placeholder,
  transitions: __WEBPACK_IMPORTED_MODULE_2_polythene_core_dialog__["b" /* transitions */]
};

var Multiple = Object(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["b" /* Multi */])({ options: options, renderer: __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["d" /* renderer */] });
var Dialog = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Dialog[p] = Multiple[p];
});

Dialog.displayName = "Dialog";




/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dialogInstance; });
/* unused harmony export vars */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transitions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var menuClasses = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var classes = {
  component: "pe-dialog",

  // elements
  placeholder: "pe-dialog__placeholder",
  holder: "pe-dialog__holder",
  content: "pe-dialog__content",

  // states
  fullScreen: "pe-dialog--full-screen",
  backdrop: "pe-dialog--backdrop",
  open: "pe-dialog--open",

  // lookup
  menuContent: menuClasses.content
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var DEFAULT_Z = 3;

var showDialog = function showDialog(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  var id = state.instanceId;
  state.transitioning(true);
  var transitions = attrs.transitions;
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["m" /* show */])(_extends({}, attrs, transitions.show({ el: state.el, showDuration: attrs.showDuration, showDelay: attrs.showDelay }))).then(function () {
    if (attrs.multipleDidShow) {
      attrs.multipleDidShow(id); // this will call attrs.didShow
    }
    state.transitioning(false);
  });
};

var hideDialog = function hideDialog(state, attrs) {
  if (state.transitioning()) {
    return Promise.resolve();
  }
  var id = state.instanceId;
  state.transitioning(true);
  var transitions = attrs.transitions;
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["e" /* hide */])(_extends({}, attrs, transitions.hide({ el: state.el, hideDuration: attrs.hideDuration, hideDelay: attrs.hideDelay }))).then(function () {
    if (attrs.multipleDidHide) {
      attrs.multipleDidHide(id); // this will call attrs.didHide
    }
    state.transitioning(false);
  });
};

var getInitialState = function getInitialState(vnode, createStream) {
  var transitioning = createStream(false);
  return {
    cleanUp: undefined,
    el: undefined,
    transitioning: transitioning
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.el = vnode.dom;

  var handleEscape = function handleEscape(e) {
    if (attrs.fullScreen || attrs.modal) return;
    if (e.key === "Escape") {
      hideDialog(state, _extends({}, attrs, {
        hideDelay: 0
      }));
    }
  };

  state.cleanUp = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["p" /* unsubscribe */])("keydown", handleEscape);
  };

  Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["n" /* subscribe */])("keydown", handleEscape);

  if (attrs.showInstance) {
    showDialog(state, attrs);
  }
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.cleanUp();
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  _defineProperty({
    className: [classes.component, attrs.fullScreen ? classes.fullScreen : null, attrs.backdrop ? classes.backdrop : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, k.onclick, function (e) {
    if (e.target !== state.el) {
      return;
    }
    if (attrs.modal) {
      // not allowed
      return;
    }
    hideDialog(state, _extends({}, attrs, {
      hideDelay: 0
    }));
  }), attrs.formOptions ? attrs.formOptions : null);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      Shadow = _ref2.Shadow,
      DialogPane = _ref2.DialogPane;

  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.hideInstance) {
    hideDialog(state, attrs);
  }
  var pane = attrs.panes && attrs.panes.length ? attrs.panes[0] : h(DialogPane, {
    title: attrs.title,
    header: attrs.header,
    body: attrs.content || attrs.body || attrs.menu,
    footer: attrs.footer,
    footerButtons: attrs.footerButtons,
    className: attrs.className,
    style: attrs.style,
    fullBleed: attrs.fullBleed
  });
  return h("div", {
    className: [classes.content, attrs.menu ? classes.menuContent : null].join(" ")
  }, [attrs.fullScreen ? null : h(Shadow, {
    z: attrs.z !== undefined ? attrs.z : DEFAULT_Z,
    animated: true
  }), pane]);
};

var dialogInstance = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  border_radius: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_block_border_radius,
  padding_vertical: 3 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  padding_horizontal: 5 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component,
  color_light_backdrop_background: "rgba(0, 0, 0, .4)",
  color_dark_backdrop_background: "rgba(0, 0, 0, .5)",

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background),

  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_regular)
};

var ANIMATION_DURATION = .220;

var show$1 = function show$$1(_ref) {
  var el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;
  return {
    el: el,
    showDuration: showDuration || ANIMATION_DURATION,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      return el.style.opacity = 0;
    },
    show: function show$$1() {
      return el.style.opacity = 1;
    }
  };
};

var hide$1 = function hide$$1(_ref2) {
  var el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;
  return {
    el: el,
    hideDuration: hideDuration || ANIMATION_DURATION,
    hideDelay: hideDelay || 0,
    hide: function hide$$1() {
      return el.style.opacity = 0;
    }
  };
};

var transitions = {
  show: show$1,
  hide: hide$1
};




/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return dialogPane; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-dialog-pane",

  // elements
  actions: "pe-dialog-pane__actions",
  body: "pe-dialog-pane__body",
  content: "pe-dialog-pane__content",
  footer: "pe-dialog-pane__footer",
  header: "pe-dialog-pane__header",
  title: "pe-dialog-pane__title",

  // states
  withHeader: "pe-dialog-pane--header",
  withFooter: "pe-dialog-pane--footer",
  headerWithTitle: "pe-dialog-pane__header--title",
  footerWithButtons: "pe-dialog-pane__footer--buttons",
  footerHigh: "pe-dialog-pane__footer--high",
  borderBottom: "pe-dialog-pane--border-bottom",
  borderTop: "pe-dialog-pane--border-top",
  fullBleed: "pe-dialog-pane--body-full-bleed"
};

var buttonClasses = {
  base: "pe-button",
  component: "pe-button pe-text-button",
  row: "pe-button-row",

  // elements
  content: "pe-button__content",
  focus: "pe-button__focus",
  label: "pe-button__label",
  wash: "pe-button__wash",

  // states
  borders: "pe-button--borders",
  disabled: "pe-button--disabled",
  focused: "pe-button--focus",
  inactive: "pe-button--inactive",
  selected: "pe-button--selected"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "form";
};

var SCROLL_WATCH_END_TIMER = 150;

var updateScrollOverflowState = function updateScrollOverflowState(vnode) {
  var state = vnode.state;
  var scroller = state.scrollEl();
  if (!scroller) {
    return;
  }
  state.topOverflow(scroller.scrollTop > 0);
  state.bottomOverflow(scroller.scrollHeight - (scroller.scrollTop + scroller.getBoundingClientRect().height) > 0);
};

var updateFooterState = function updateFooterState(vnode) {
  var state = vnode.state;
  var footerEl = state.footerEl();
  if (!footerEl) {
    return;
  }
  var style = window.getComputedStyle(footerEl);
  var height = footerEl.getBoundingClientRect().height;
  var minHeight = parseInt(style.minHeight, 10);
  if (height > minHeight) {
    footerEl.classList.add(classes.footerHigh);
  } else {
    footerEl.classList.remove(classes.footerHigh);
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var bottomOverflow = createStream(false);
  var footerEl = createStream(null);
  var headerEl = createStream(null);
  var isScrolling = createStream(false);
  var scrollEl = createStream(null);
  var topOverflow = createStream(false);
  var el = createStream(null);

  return {
    cleanUp: undefined,
    bottomOverflow: bottomOverflow,
    el: el,
    footerEl: footerEl,
    headerEl: headerEl,
    isScrolling: isScrolling,
    scrollEl: scrollEl,
    scrollWatchId: undefined,
    topOverflow: topOverflow,
    redrawOnUpdate: createStream.merge([topOverflow, bottomOverflow, isScrolling])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var state = vnode.state;
  state.el(dom);

  state.scrollEl(dom.querySelector("." + classes.body));
  state.footerEl(dom.querySelector("." + classes.footer));
  state.headerEl(dom.querySelector("." + classes.title));

  state.isScrolling.map(function () {
    return updateScrollOverflowState(vnode);
  });

  var update = function update() {
    updateScrollOverflowState(vnode);
    updateFooterState(vnode);
  };

  state.cleanUp = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["p" /* unsubscribe */])("resize", update);
  };

  // resize: update scroll state ("overflow" borders)
  Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["n" /* subscribe */])("resize", update);

  updateScrollOverflowState(vnode);
};

var onUnMount = function onUnMount(vnode) {
  return vnode.state.cleanUp();
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var state = vnode.state;
  var attrs = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["o" /* unpackAttrs */])(vnode.attrs);
  var borders = attrs.borders || "overflow";
  var showTopBorder = borders === "always" || borders === "overflow" && state.topOverflow();
  var showBottomBorder = borders === "always" || borders === "overflow" && state.bottomOverflow();
  var withHeader = attrs.header !== undefined || attrs.title !== undefined;
  var withFooter = attrs.footer !== undefined || attrs.footerButtons !== undefined;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs, { remove: ["style"] }), // style set in content, and set by show/hide transition
  {
    className: [classes.component, attrs.fullBleed ? classes.fullBleed : null, showTopBorder ? classes.borderTop : null, showBottomBorder ? classes.borderBottom : null, withHeader ? classes.withHeader : null, withFooter ? classes.withFooter : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.formOptions);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      k = _ref2.keys;

  var state = vnode.state;
  var attrs = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["o" /* unpackAttrs */])(vnode.attrs);

  return h("div", {
    className: [classes.content, attrs.menu ? classes.menuContent : null].join(" "),
    style: attrs.style
  }, [attrs.header ? attrs.header : attrs.title ? h("div", {
    className: [classes.header, classes.headerWithTitle].join(" "),
    key: "title"
  }, h("div", { className: classes.title }, attrs.title)) : null, h("div", _defineProperty({
    className: classes.body,
    key: "body"
  }, k.onscroll, function () {
    state.isScrolling(true);
    clearTimeout(state.scrollWatchId);
    state.scrollWatchId = setTimeout(function () {
      state.isScrolling(false);
    }, SCROLL_WATCH_END_TIMER);
  }), attrs.content || attrs.body || attrs.menu), attrs.footer ? h("div", {
    className: classes.footer,
    key: "footer"
  }, attrs.footer) : attrs.footerButtons ? h("div", {
    className: [classes.footer, classes.footerWithButtons, buttonClasses.row].join(" "),
    key: "footer"
  }, h("div", { className: classes.actions }, attrs.footerButtons)) : null]);
};

var dialogPane = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  max_width: 7 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_menu, // 56   
  side_padding_mobile: 6 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit, // 48
  padding: 3 * __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component, // 24
  header_bottom: 20,
  header_height: 60,
  footer_height: 52,

  border_width: 1,

  color_light_title_text: "inherit",
  color_light_body_text: "inherit",
  color_light_body_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_background: "inherit",

  color_dark_title_text: "inherit",
  color_dark_body_text: "inherit",
  color_dark_body_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_background: "inherit"
};




/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FAB; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_fab__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_raised_button__ = __webpack_require__(21);





var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var FAB = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_fab__["a" /* coreFAB */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_fab__["a" /* coreFAB */].createProps(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_fab__["a" /* coreFAB */].createContent(vnode, _extends(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */] }));
  },
  component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_raised_button__["a" /* RaisedButton */]
}));

FAB.displayName = "FAB";




/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return fab; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);


var classes = {
  component: "pe-fab",

  // elements
  content: "pe-fab__content",

  // states
  mini: "pe-fab--mini"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped raised button component (set in polythene-xxx-fab)

// Props to be passed to a raised button, including 'content'
var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys,
      h = _ref.renderer,
      Icon = _ref.Icon;

  var attrs = vnode.attrs;
  var content = attrs.content ? attrs.content : attrs.icon ? h(Icon, attrs.icon) : attrs.children || vnode.children;
  return _extends({}, {
    content: h("div", { className: classes.content }, content),
    parentClassName: [classes.component, attrs.mini ? classes.mini : null, attrs.className || attrs[k.class]].join(" "),
    // defaults
    ripple: {
      center: true,
      opacityDecayVelocity: 0.24
    },
    shadow: { increase: 5 },
    ink: true,
    wash: true,
    animateOnTap: attrs.animateOnTap !== undefined ? attrs.animateOnTap : true
  }, attrs);
};

var createContent = function createContent() {
  return null;
};

var fab = Object.freeze({
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  size_regular: 7 * __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_component,
  size_mini: 5 * __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_component,
  padding_regular: 2 * __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_component,

  color_light: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary_foreground),
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_background_hover),

  color_light_focus_opacity: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_background_hover_medium, // same as button
  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),

  color_dark: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary_foreground),
  color_dark_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_background_hover), // same as button
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary)
};




/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return raisedButton; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-button pe-text-button pe-raised-button"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'getElement': it will be the wrapped button component (set in polythene-xxx-raised-button)

var MAX_Z = 5;

var tapStart = void 0;
var tapEndAll = function tapEndAll() {};
var downButtons = [];

Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["n" /* subscribe */])(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["i" /* pointerEndEvent */], function () {
  return tapEndAll();
});

var animateZ = function animateZ(which, vnode) {
  var zBase = vnode.state.zBase;
  var increase = vnode.attrs.increase || 1;
  var z = vnode.state.z();
  var newZ = which === "down" && zBase < MAX_Z ? Math.min(zBase + increase, MAX_Z) : which === "up" ? Math.max(z - increase, zBase) : z;
  if (newZ !== z) {
    vnode.state.z(newZ);
  }
};

var tapHandler = function tapHandler(which, vnode) {
  if (which === "down") {
    downButtons.push(_extends({}, vnode));
  }
  var animateOnTap = vnode.attrs.animateOnTap !== false ? true : false;
  if (animateOnTap) {
    animateZ(which, vnode);
  }
};

var initTapEvents = function initTapEvents(vnode) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) return;
  tapStart = function tapStart() {
    return tapHandler("down", vnode);
  };
  tapEndAll = function tapEndAll() {
    downButtons.map(function (buttonVnode) {
      return tapHandler("up", buttonVnode);
    });
    downButtons = [];
  };
  vnode.dom.addEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["l" /* pointerStartMoveEvent */], tapStart);
};

var clearTapEvents = function clearTapEvents(vnode) {
  return vnode.dom.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["l" /* pointerStartMoveEvent */], tapStart);
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var zBase = attrs.z !== undefined ? attrs.z : 1;
  var z = createStream(zBase);
  var tapEventsInited = createStream(false);
  return {
    zBase: zBase,
    z: z,
    tapEventsInited: tapEventsInited,
    redrawOnUpdate: createStream.merge([z])
  };
};

var onMount = function onMount(vnode) {
  var state = vnode.state;
  if (vnode.dom && !state.tapEventsInited()) {
    initTapEvents(vnode);
    state.tapEventsInited(true);
  }
};

var onUnMount = function onUnMount(vnode) {
  if (vnode.state.tapEventsInited()) {
    clearTapEvents(vnode);
  }
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      Shadow = _ref.Shadow;

  var attrs = vnode.attrs;
  var state = vnode.state;
  var children = attrs.children || vnode.children || [];
  return _extends({}, {
    parentClassName: [attrs.parentClassName || classes.component].join(" "),
    animateOnTap: false,
    shadowComponent: h(Shadow, {
      z: attrs.disabled ? 0 : state.z,
      animated: true
    }),
    children: children
  }, attrs);
};

var createContent = function createContent() {
  return null;
};

var raisedButton = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  color_light_background: "#fff",
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_hover_background: "transparent",
  color_light_focus_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover),
  color_light_active_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_hover), // same as hover
  color_light_disabled_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_background_disabled),
  color_light_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_hover_background: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary_active,
  color_dark_focus_background: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary_active,
  color_dark_active_background: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary_dark,
  color_dark_disabled_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_background_disabled),
  color_dark_disabled_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled)
};




/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IOSSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_ios_spinner__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__ = __webpack_require__(13);





var classes = {
  component: "pe-ios-spinner",

  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var baseSpinnerClasses = {
  component: "pe-spinner",

  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",

  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_ios_spinner__["a" /* coreIOSSpinner */], { component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__["a" /* BaseSpinner */] }));

var SpinnerToggle = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["a" /* Conditional */]);
SpinnerToggle.displayName = "IOSSpinnerToggle";

var IOSSpinner = {
  view: function view(vnode) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["d" /* renderer */])(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: SpinnerInstance
    }));
  }
};

IOSSpinner.classes = classes;
IOSSpinner.displayName = "IOSSpinner";




/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spinner; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);


var classes = {
  component: "pe-ios-spinner",

  // elements
  blades: "pe-ios-spinner__blades",
  blade: "pe-ios-spinner__blade"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var blade = function blade(num, h) {
  return h("div", {
    key: "blade-" + num,
    className: classes.blade
  });
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  state.content = state.content || h("div", {
    key: "content",
    className: classes.blades
  }, [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(function (num) {
    return blade(num, h);
  }));
  return _extends({}, attrs, {
    className: [classes.component, attrs.className].join(" "),
    content: state.content
  });
};

var spinner = Object.freeze({
	createProps: createProps
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  animation_duration: 1, // seconds

  color_light: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground),
  color_dark: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_dark_foreground)
};




/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return List; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_list__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_list_tile__ = __webpack_require__(11);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var List = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_list__["a" /* coreList */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_list__["a" /* coreList */].createProps(vnode, _extends(args, { ListTile: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_list_tile__["a" /* ListTile */] }));
  },
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_list__["a" /* coreList */].createContent(vnode, _extends(args, { ListTile: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_list_tile__["a" /* ListTile */] }));
  }
}));

List.displayName = "List";




/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return list; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var classes = {
  component: "pe-list",

  // states
  borders: "pe-list--borders",
  compact: "pe-list--compact",
  hasHeader: "pe-list--header",
  indentedBorders: "pe-list--indented-borders",
  padding: "pe-list--padding",
  paddingTop: "pe-list--padding-top",
  paddingBottom: "pe-list--padding-bottom",

  // lookup
  header: listTileClasses.header
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var paddingClasses = {
  both: classes.padding,
  bottom: classes.paddingBottom,
  top: classes.paddingTop,
  none: null
};

var paddingClass = function paddingClass() {
  var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "both";
  return paddingClasses[attr];
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.borders ? classes.borders : null, attrs.indentedBorders ? classes.indentedBorders : null, attrs.header ? classes.hasHeader : null, attrs.compact ? classes.compact : null, paddingClass(attrs.padding), attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      requiresKeys = _ref2.requiresKeys,
      k = _ref2.keys,
      ListTile = _ref2.ListTile;

  var attrs = vnode.attrs;
  var headerOpts = void 0;
  if (attrs.header) {
    headerOpts = _extends({}, attrs.header);
    headerOpts[k.class] = [classes.header, headerOpts[k.class] || null].join(" ");
  }
  var tiles = attrs.tiles ? attrs.tiles : attrs.content ? attrs.content : attrs.children || vnode.children;
  return [headerOpts ? h(ListTile, _extends({}, requiresKeys ? { key: "header" } : null, attrs.all, headerOpts, {
    header: true
  })) : null, attrs.all ? tiles.map(function (tileOpts) {
    return h(ListTile, _extends({}, attrs.all, tileOpts));
  }) : tiles];
};

var list = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  padding: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component, // vertical padding
  padding_compact: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 3 / 4,
  border_width_stacked: 1,
  border_width_bordered: 1,

  color_light_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_dark_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_border_light)

  // background color may be set in theme; disabled by default
  // color_light_background: "inherit",
  // color_dark_background:  "inherit"
};




/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDesignProgressSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_material_design_progress_spinner__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__ = __webpack_require__(13);





var classes = {
  component: "pe-md-progress-spinner",

  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var baseSpinnerClasses = {
  component: "pe-spinner",

  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",

  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_material_design_progress_spinner__["a" /* coreMaterialDesignProgressSpinner */], { component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__["a" /* BaseSpinner */] }));

var SpinnerToggle = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["a" /* Conditional */]);
SpinnerToggle.displayName = "MaterialDesignProgressSpinnerToggle";

var MaterialDesignProgressSpinner = {
  view: function view(vnode) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["d" /* renderer */])(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: SpinnerInstance
    }));
  }
};

MaterialDesignProgressSpinner.classes = classes;
MaterialDesignProgressSpinner.displayName = "MaterialDesignProgressSpinner";




/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spinner; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__ = __webpack_require__(14);





var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var themeVars = _extends$1({}, __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["b" /* vars */], {
  border_width_small: __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["b" /* vars */].size_small / __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["b" /* vars */].size_regular * 3,
  border_width_regular: 3,
  border_width_medium: __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["b" /* vars */].size_medium / __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["b" /* vars */].size_regular * 3,
  border_width_large: __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["b" /* vars */].size_large / __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["b" /* vars */].size_regular * 3,
  border_width_fab: __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["b" /* vars */].size_fab / __WEBPACK_IMPORTED_MODULE_3_polythene_core_base_spinner__["b" /* vars */].size_regular * 3,
  animation_duration: "1.5s",

  color_light: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary),
  color_dark: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary)
});

var classes = {
  component: "pe-md-progress-spinner",

  // elements
  animation: "pe-md-progress-spinner__animation",
  circle: "pe-md-progress-spinner__circle",
  circleRight: "pe-md-progress-spinner__circle-right",
  circleLeft: "pe-md-progress-spinner__circle-left"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var DEFAULT_UPDATE_DURATION = .8;

var sizeFromName = function sizeFromName() {
  var size = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "regular";
  return themeVars["size_" + size];
};

var percentageValue = function percentageValue(min, max) {
  var percentage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
  return min + (max - min) * percentage;
};

var rotateCircle = function rotateCircle(el, min, max, percentage) {
  var style = el.style;
  style["transform"] = style["-webkit-transform"] = style["-moz-transform"] = style["-ms-transform"] = style["-o-transform"] = "rotate(" + percentageValue(min, max, percentage) + "deg)";
};

var animate = function animate(stateEl, size, percentage) {
  var animationEl = stateEl.querySelector("." + classes.animation);
  var animationElStyle = animationEl.style;
  if (percentage < 0.5) {
    animationElStyle.clip = "rect(0px, " + size + "px, " + size + "px, " + size / 2 + "px)";
  } else {
    animationElStyle.clip = "rect(auto, auto, auto, auto)";
  }
  var leftCircle = stateEl.querySelector("." + classes.circleLeft);
  var rightCircle = stateEl.querySelector("." + classes.circleRight);
  leftCircle.style.clip = rightCircle.style.clip = "rect(0px, " + size / 2 + "px, " + size + "px, " + "0px)";
  rotateCircle(rightCircle, 0, 180, Math.min(1, percentage * 2));
  rotateCircle(leftCircle, 0, 360, percentage);
};

var handlePercentage = function handlePercentage(percentage, state, size, attrs) {
  if (!state.dom()) {
    return;
  }
  if (state.animating()) {
    return;
  }
  var previousPercentage = state.percentage();
  if (attrs.animated && previousPercentage !== percentage) {
    var animationDuration = (attrs.updateDuration || DEFAULT_UPDATE_DURATION) * 1000;
    var el = state.dom();
    var start = null;
    var step = function step(timestamp) {
      if (!start) start = timestamp;
      var progress = timestamp - start;
      var stepPercentage = 1.0 / animationDuration * progress;
      var newPercentage = previousPercentage + stepPercentage * (percentage - previousPercentage);
      animate(el, size, __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__["b" /* easing */].easeInOutQuad(newPercentage));
      if (start && progress < animationDuration) {
        window.requestAnimationFrame(step);
      } else {
        start = null;
        state.percentage(percentage);
        state.animating(false);
      }
    };
    state.animating(true);
    window.requestAnimationFrame(step);
  } else {
    animate(state.dom(), size, percentage);
    state.percentage(percentage);
  }
};

var notifyState = function notifyState(state, attrs, size) {
  if (attrs.percentage !== undefined) {
    var percentage = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["o" /* unpackAttrs */])(attrs.percentage);
    handlePercentage(percentage, state, size, attrs);
  }
};

var getSize = function getSize(attrs) {
  var rawSize = sizeFromName(attrs.size);

  var _themeVars$raisedSize = themeVars.raisedSize(rawSize),
      padding = _themeVars$raisedSize.padding,
      paddedSize = _themeVars$raisedSize.paddedSize;

  return attrs.raised ? paddedSize - 2 * padding : rawSize;
};

var getInitialState = function getInitialState(vnode, createStream) {
  var percentage = createStream(0);
  var dom = createStream(null);
  var animating = createStream(false);
  return {
    dom: dom,
    percentage: percentage,
    animating: animating
  };
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);
  var size = getSize(attrs);
  notifyState(state, attrs, size);
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var size = getSize(attrs);
  notifyState(state, attrs, size);

  var content = h("div", {
    key: "content",
    className: classes.animation,
    style: {
      width: size + "px",
      height: size + "px"
    }
  }, [h("div", {
    key: "left",
    className: [classes.circle, classes.circleLeft].join(" ")
  }), h("div", {
    key: "right",
    className: [classes.circle, classes.circleRight].join(" ")
  })]);

  return _extends({}, attrs, {
    className: [classes.component, attrs.className].join(" "),
    content: content
  });
};

var spinner = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps
});




/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MaterialDesignSpinner; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_material_design_spinner__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__ = __webpack_require__(13);





var classes = {
  component: "pe-md-spinner",

  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};

var baseSpinnerClasses = {
  component: "pe-spinner",

  // elements
  animation: "pe-spinner__animation",
  placeholder: "pe-spinner__placeholder",

  // states
  animated: "pe-spinner--animated",
  fab: "pe-spinner--fab",
  large: "pe-spinner--large",
  medium: "pe-spinner--medium",
  permanent: "pe-spinner--permanent",
  raised: "pe-spinner--raised",
  regular: "pe-spinner--regular",
  singleColor: "pe-spinner--single-color",
  small: "pe-spinner--small",
  visible: "pe-spinner--visible"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SpinnerInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_material_design_spinner__["a" /* coreMaterialDesignSpinner */], { component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_base_spinner__["a" /* BaseSpinner */] }));

var SpinnerToggle = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["a" /* Conditional */]);
SpinnerToggle.displayName = "MaterialDesignSpinnerToggle";

var MaterialDesignSpinner = {
  view: function view(vnode) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["d" /* renderer */])(SpinnerToggle, _extends({}, vnode.attrs, {
      placeholderClassName: baseSpinnerClasses.placeholder,
      instance: SpinnerInstance
    }));
  }
};

MaterialDesignSpinner.classes = classes;
MaterialDesignSpinner.displayName = "MaterialDesignSpinner";




/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return spinner; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__ = __webpack_require__(14);



var classes = {
  component: "pe-md-spinner",

  // elements
  animation: "pe-md-spinner__animation",
  circle: "pe-md-spinner__circle",
  circleClipper: "pe-md-spinner__circle-clipper",
  circleClipperLeft: "pe-md-spinner__circle-clipper-left",
  circleClipperRight: "pe-md-spinner__circle-clipper-right",
  gapPatch: "pe-md-spinner__gap-patch",
  layer: "pe-md-spinner__layer",
  layerN: "pe-md-spinner__layer-"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var layer = function layer(num, h) {
  return h("div", {
    key: num,
    className: [classes.layer, classes.layerN + num].join(" ")
  }, [h("div", {
    key: "clipper-left",
    className: [classes.circleClipper, classes.circleClipperLeft].join(" ")
  }, h("div", {
    key: "circle",
    className: classes.circle
  })), h("div", {
    key: "gap-patch",
    className: classes.gapPatch
  }, h("div", { className: classes.circle })), h("div", {
    key: "clipper-right",
    className: [classes.circleClipper, classes.circleClipperRight].join(" ")
  }, h("div", { className: classes.circle }))]);
};

var createProps = function createProps(vnode, _ref) {
  var h = _ref.renderer;

  var state = vnode.state;
  var attrs = vnode.attrs;
  state.content = state.content || h("div", {
    key: "content",
    className: classes.animation
  }, [1, 2, 3, 4].map(function (num) {
    return layer(num, h);
  }));
  return _extends({}, attrs, {
    className: [classes.component, attrs.className].join(" "),
    content: state.content
  });
};

var spinner = Object.freeze({
	createProps: createProps
});

/*
Derived from https://github.com/PolymerElements/paper-spinner

@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var arc_size = 270; // degrees - amount of circle the arc takes up
var arc_time = 1.333; // s - time it takes to expand and contract arc
var arc_start_degrees = 360 / 5 * 3; // degrees - how much the start location of the arc should rotate each time, 216 gives us a 5 pointed star shape (it"s 360/5 * 3). For a 7 pointed star, we might do 360/7 * 3 = 154.286.
var rotation_duration = 360 * arc_time / (arc_start_degrees + (360 - arc_size)); // 1.568s

var blue400 = "#42a5f5";
var red500 = "#f44336";
var yellow600 = "#fdd835";
var green500 = "#4caf50";

var vars$2 = {
  border_width_small: __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["b" /* vars */].size_small / __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["b" /* vars */].size_regular * 3,
  border_width_regular: 3,
  border_width_medium: __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["b" /* vars */].size_medium / __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["b" /* vars */].size_regular * 3,
  border_width_large: __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["b" /* vars */].size_large / __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["b" /* vars */].size_regular * 3,
  border_width_fab: __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["b" /* vars */].size_fab / __WEBPACK_IMPORTED_MODULE_1_polythene_core_base_spinner__["b" /* vars */].size_regular * 3,
  rotation_duration: rotation_duration,
  arc_size: arc_size,
  arc_time: arc_time,
  arc_start_degrees: arc_start_degrees,

  color_light_single: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_light_1: blue400,
  color_light_2: red500,
  color_light_3: yellow600,
  color_light_4: green500,

  color_dark_single: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_dark_1: blue400,
  color_dark_2: red500,
  color_dark_3: yellow600,
  color_dark_4: green500
};




/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Menu; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_menu__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__ = __webpack_require__(4);





var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var classes = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var MenuInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_menu__["a" /* coreMenu */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_menu__["a" /* coreMenu */].createContent(vnode, _extends(args, { Shadow: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__["a" /* Shadow */] }));
  }
}));

var MenuToggle = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["a" /* Conditional */]);
MenuToggle.displayName = "MenuToggle";

var Menu = {
  view: function view(vnode) {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["d" /* renderer */])(MenuToggle, _extends({}, vnode.attrs, {
      placeholderClassName: classes.placeholder,
      instance: MenuInstance
    }));
  }
};

Menu.displayName = "Menu";




/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return menu; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var listTileClasses = {
  component: "pe-list-tile",

  // elements
  content: "pe-list-tile__content",
  highSubtitle: "pe-list-tile__high-subtitle",
  primary: "pe-list-tile__primary",
  secondary: "pe-list-tile__secondary",
  subtitle: "pe-list-tile__subtitle",
  title: "pe-list-tile__title",
  contentFront: "pe-list-tile__content-front",

  // states
  compact: "pe-list-tile--compact",
  compactFront: "pe-list-tile--compact-front",
  disabled: "pe-list-tile--disabled",
  hasFront: "pe-list-tile--front",
  hasHighSubtitle: "pe-list-tile--high-subtitle",
  hasSubtitle: "pe-list-tile--subtitle",
  header: "pe-list-tile--header",
  hoverable: "pe-list-tile--hoverable",
  selectable: "pe-list-tile--selectable",
  selected: "pe-list-tile--selected",
  highlight: "pe-list-tile--highlight",
  sticky: "pe-list-tile--sticky"
};

var classes = {
  component: "pe-menu",

  // elements
  content: "pe-menu__content",
  placeholder: "pe-menu__placeholder",
  target: "pe-menu__target",

  // states
  permanent: "pe-menu--permanent",
  visible: "pe-menu--visible",
  width_auto: "pe-menu--width-auto",
  width_n: "pe-menu--width-",

  // lookup
  listTile: listTileClasses.component,
  selectedListTile: listTileClasses.selected
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var SHADOW_Z = 1;
var OFFSET_V = -8;
var DEFAULT_OFFSET_H = 0;
var MIN_SIZE = 1.5;

var positionMenu = function positionMenu(state, attrs) {
  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["g" /* isServer */]) {
    return;
  }
  var targetEl = document.querySelector(attrs.target);
  if (!targetEl) {
    return;
  }
  var offsetH = attrs.offset !== undefined ? attrs.offset : DEFAULT_OFFSET_H;
  var menuEl = state.dom();
  if (!menuEl) {
    return;
  }
  var contentEl = state.dom().querySelector("." + classes.content);
  var origin = attrs.origin || "top-left";
  var positionOffset = 0;
  if (attrs.reposition) {
    var firstItem = contentEl.querySelectorAll("." + classes.listTile)[0];
    var selectedItem = contentEl.querySelector("." + classes.selectedListTile);
    if (firstItem && selectedItem) {
      // calculate v position: menu should shift upward relative to the first item
      var firstItemRect = firstItem.getBoundingClientRect();
      var selectedItemRect = selectedItem.getBoundingClientRect();
      positionOffset = selectedItemRect.top - firstItemRect.top;
    }
    // align to middle of target
    var alignEl = selectedItem || firstItem;
    var alignRect = alignEl.getBoundingClientRect();
    var _targetRect = targetEl.getBoundingClientRect();
    var heightDiff = alignRect.height - _targetRect.height;
    positionOffset += heightDiff / 2;
  }
  var targetRect = targetEl.getBoundingClientRect();
  if (menuEl.parentNode) {
    var parentRect = menuEl.parentNode.getBoundingClientRect();
    var alignLeft = function alignLeft() {
      return menuEl.style.left = targetRect.left - parentRect.left + offsetH + "px";
    };
    var alignRight = function alignRight() {
      return menuEl.style.right = targetRect.right - parentRect.right + offsetH + "px";
    };
    var alignTop = function alignTop() {
      return menuEl.style.top = targetRect.top - parentRect.top - positionOffset + OFFSET_V + "px";
    };
    var alignBottom = function alignBottom() {
      return menuEl.style.bottom = targetRect.bottom - parentRect.bottom - positionOffset + "px";
    };
    var alignFn = {
      "top-left": function topLeft() {
        return alignTop() && alignLeft();
      },
      "top-right": function topRight() {
        return alignTop() && alignRight();
      },
      "bottom-left": function bottomLeft() {
        return alignBottom() && alignLeft();
      },
      "bottom-right": function bottomRight() {
        return alignBottom() && alignRight();
      }
    };
    alignFn[origin].call();
  }
};

var showMenu = function showMenu(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: false, transitioning: true });
  }
  positionMenu(state, attrs);
  var transitions = attrs.transitions;
  var el = state.dom();
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["m" /* show */])(_extends({}, attrs, transitions ? transitions.show(el, attrs) : {
    el: el,
    showClass: classes.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: true, transitioning: false });
    }
    if (attrs.didShow) {
      attrs.didShow(attrs.id);
    }
    state.visible(false);
  });
};

var hideMenu = function hideMenu(state, attrs) {
  if (attrs.onChange) {
    attrs.onChange({ visible: true, transitioning: true });
  }
  var transitions = attrs.transitions;
  var el = state.dom();
  return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["e" /* hide */])(_extends({}, attrs, transitions ? transitions.hide(el, attrs) : {
    el: el,
    showClass: classes.visible
  })).then(function () {
    if (attrs.onChange) {
      attrs.onChange({ visible: false, transitioning: false });
    }
    if (attrs.didHide) {
      attrs.didHide(attrs.id);
    }
    state.visible(false);
  });
};

var unifySize = function unifySize(size) {
  return size < MIN_SIZE ? MIN_SIZE : size;
};

var widthClass = function widthClass(size) {
  return classes.width_n + size.toString().replace(".", "-");
};

var handleSubscriptions = function handleSubscriptions(vnode, which) {
  var state = vnode.state;
  var attrs = vnode.attrs;

  if (which === "mount") {
    Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["n" /* subscribe */])("resize", state.update);
    Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["n" /* subscribe */])("keydown", state.handleEscape);
    setTimeout(function () {
      state.activateDismissTap();
      showMenu(state, attrs);
    }, 0);
  } else {
    Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["p" /* unsubscribe */])("resize", state.update);
    Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["p" /* unsubscribe */])("keydown", state.handleEscape);
    state.deActivateDismissTap();
  }
};

var onMount = function onMount(vnode) {
  if (!vnode.dom) {
    return;
  }
  var state = vnode.state;
  var attrs = vnode.attrs;
  state.dom(vnode.dom);

  if (!attrs.permanent) {
    state.handleDismissTap = function (e) {
      if (e.target === state.dom()) {
        return;
      }
      if (e.defaultPrevented) {
        // clicked on .pe-menu__content
        hideMenu(state, attrs);
      } else {
        hideMenu(state, _extends({}, attrs, {
          hideDelay: 0
        }));
      }
    };

    state.update = function () {
      positionMenu(state, attrs);
    };

    state.activateDismissTap = function () {
      if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["h" /* isTouch */]) {
        document.addEventListener("touchstart", state.handleDismissTap);
      } else {
        document.addEventListener("click", state.handleDismissTap);
      }
    };

    state.deActivateDismissTap = function () {
      if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["h" /* isTouch */]) {
        document.removeEventListener("touchstart", state.handleDismissTap);
      } else {
        document.removeEventListener("click", state.handleDismissTap);
      }
    };

    state.handleEscape = function (e) {
      if (e.key === "Escape" || e.key === "Esc") {
        hideMenu(state, _extends({}, attrs, { hideDelay: 0 }));
      }
    };

    handleSubscriptions(vnode, "mount");
  }
};

var onUnMount = function onUnMount(vnode) {
  var attrs = vnode.attrs;
  if (!attrs.permanent) {
    handleSubscriptions(vnode, "unmount");
  }
};

var getInitialState = function getInitialState(vnode, createStream) {
  var dom = createStream(null);
  var visible = createStream(false);
  return {
    dom: dom,
    visible: visible,
    activateDismissTap: undefined, // set in onMount
    deActivateDismissTap: undefined, // set in onMount
    handleDismissTap: undefined, // set in onMount
    handleEscape: undefined, // set in onMount
    update: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([visible])
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.permanent ? classes.permanent : null, attrs.target ? classes.target : null, attrs.size ? widthClass(unifySize(attrs.size)) : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var _h;

  var h = _ref2.renderer,
      k = _ref2.keys,
      Shadow = _ref2.Shadow;

  var attrs = vnode.attrs;
  var z = attrs.z !== undefined ? attrs.z : SHADOW_Z;
  return h("div", (_h = {
    className: classes.content
  }, _defineProperty(_h, k.onclick, function (e) {
    return e.preventDefault();
  }), _defineProperty(_h, "style", attrs.style), _h), [z > 0 && h(Shadow, {
    z: z,
    animated: true
  }), attrs.content ? attrs.content : vnode.children]);
};

var menu = Object.freeze({
	getElement: getElement,
	onMount: onMount,
	onUnMount: onUnMount,
	getInitialState: getInitialState,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$1 = {
  sizes: [1, 1.5, 2, 3, 4, 5, 6, 7],
  min_size: 1.5,
  max_size_small_screen: 5,
  size_factor: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_menu,
  border_radius: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_block_border_radius,

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background)
  // text colors are set by content, usually list tiles
};




/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return NotificationInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Notification; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_notification__ = __webpack_require__(22);




var classes = {
  component: "pe-notification",

  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",

  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical"
};

var NotificationInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_2_polythene_core_notification__["a" /* coreNotificationInstance */]);

NotificationInstance.displayName = "NotificationInstance";

var options = {
  name: "notification",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_notification",
  holderSelector: "." + classes.holder,
  instance: NotificationInstance,
  placeholder: "span." + classes.placeholder,
  queue: true,
  transitions: __WEBPACK_IMPORTED_MODULE_2_polythene_core_notification__["b" /* transitions */]
};

var Multiple = Object(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["b" /* Multi */])({ options: options, renderer: __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["d" /* renderer */] });
var Notification = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Notification[p] = Multiple[p];
});

Notification.displayName = "Notification";




/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return radioButton; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core_selection_control__ = __webpack_require__(6);
/* unused harmony reexport vars */
var classes = {
  component: "pe-radio-control"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

var iconOn = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 7c-2.76 0-5 2.24-5 5s2.24 5 5 5 5-2.24 5-5-2.24-5-5-5zm0-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";
var iconOff = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z\"/></svg>";

var icons = {
  iconOff: iconOff,
  iconOn: iconOn
};

// Props to be passed to a selection control

var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    icons: icons,
    selectable: attrs.selectable || function (selected) {
      return !selected;
    }, // default: only selectable when not checked
    instanceClass: classes.component,
    type: "radio"
  });
};

var radioButton = Object.freeze({
	createProps: createProps
});





/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RadioGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_radio_group__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_radio_button__ = __webpack_require__(23);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var RadioGroup = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_radio_group__["a" /* coreRadioGroup */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_radio_group__["a" /* coreRadioGroup */].createContent(vnode, _extends(args, { RadioButton: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_radio_button__["a" /* RadioButton */] }));
  }
}));

RadioGroup.displayName = "RadioGroup";




/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return radioGroup; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);


var classes = {
  component: "pe-radio-group"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var getInitialState = function getInitialState(vnode, createStream) {
  var checkedValue = createStream(null);
  return {
    checkedValue: checkedValue,
    redrawOnUpdate: createStream.merge([checkedValue])
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      RadioButton = _ref2.RadioButton;

  var attrs = vnode.attrs;
  var state = vnode.state;
  var checkedValue = state.checkedValue();

  var buttons = attrs.content ? attrs.content : attrs.buttons ? attrs.buttons : attrs.children || vnode.children || [];

  return buttons.length ? buttons.map(function (buttonOpts) {
    if (!buttonOpts) {
      return null;
    }
    // Only set defaultChecked the first time when no value has been stored yet
    var isDefaultChecked = (buttonOpts.defaultChecked || buttonOpts.checked) && checkedValue === null;
    if (buttonOpts.value === undefined) {
      console.error("Option 'value' not set for radio button"); // eslint-disable-line no-console
    }
    var isChecked = isDefaultChecked || buttonOpts.checked || checkedValue === buttonOpts.value;
    return h(RadioButton, _extends({}, {
      /* group attributes that may be overwritten by individual buttons */
      name: attrs.name,
      key: buttonOpts.value
    }, attrs.all,
    /* individual button options */
    buttonOpts, {
      /* this component's options */
      onChange: function onChange(newState) {
        return state.checkedValue(newState.value), attrs.onChange && attrs.onChange({ value: newState.value });
      },
      checked: isChecked
    }));
  }) : null;
};

var radioGroup = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	createProps: createProps,
	createContent: createContent
});




/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Search; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_search__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_textfield__ = __webpack_require__(24);




var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Search = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_search__["a" /* coreSearch */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_search__["a" /* coreSearch */].createContent(vnode, _extends(args, { TextField: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_textfield__["a" /* TextField */] }));
  }
}));

Search.displayName = "Search";




/***/ }),
/* 63 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return search; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-search",

  // elements
  content: "pe-search__content",

  // states
  searchFullWidth: "pe-search--full-width",
  searchInset: "pe-search--inset"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var getNameOfState = function getNameOfState(state) {
  return state.focus && state.dirty ? "focus_dirty" : state.focus ? "focus" : state.dirty ? "dirty" : "none";
};

var getInitialState = function getInitialState(vnode, createStream) {
  var searchState = createStream({});
  return {
    searchState: searchState
  };
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.fullWidth ? classes.searchFullWidth : classes.searchInset, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode, _ref2) {
  var h = _ref2.renderer,
      TextField = _ref2.TextField;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var searchState = getNameOfState(state.searchState());
  var buttons = (attrs.buttons || {})[searchState] || {};
  var textfieldAttrs = attrs.textfield || {};
  return h("div", { className: classes.content }, [buttons.before, h(TextField, _extends({}, textfieldAttrs, {
    key: "input",
    onChange: function onChange(newState) {
      state.searchState(newState);
      if (textfieldAttrs.onChange) {
        textfieldAttrs.onChange(newState);
      }
    }
  })), buttons.after]);
};

var search = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var insetSideMargin = 8;
var line_height_input = 20;
var font_size_input = 20;
var inset_height = 48;
var inset_input_indent = 16;
var inset_input_right_padding = 0;
var inset_side_padding = 0;
var inset_border_radius = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_block_border_radius;
var full_width_side_margin = 0;
var full_width_height = 56;
var full_width_side_padding = insetSideMargin;
var full_width_input_right_padding = 0;
var full_width_border_radius = 0;

var vars$1 = {
  font_size_input: font_size_input,
  line_height_input: line_height_input,

  inset_height: inset_height,
  inset_input_indent: inset_input_indent,
  inset_side_padding: inset_side_padding,
  inset_input_right_padding: inset_input_right_padding,
  inset_border_radius: inset_border_radius,

  full_width_height: full_width_height,
  full_width_side_margin: full_width_side_margin,
  full_width_side_padding: full_width_side_padding,
  full_width_input_right_padding: full_width_input_right_padding,
  full_width_border_radius: full_width_border_radius,

  color_light_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_input_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background),

  color_dark_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_input_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background)
};




/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return textfield; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {
  component: "pe-textfield",

  // elements
  counter: "pe-textfield__counter",
  error: "pe-textfield__error",
  errorPlaceholder: "pe-textfield__error-placeholder",
  focusHelp: "pe-textfield__help-focus",
  help: "pe-textfield__help",
  input: "pe-textfield__input",
  inputArea: "pe-textfield__input-area",
  label: "pe-textfield__label",
  optionalIndicator: "pe-textfield__optional-indicator",
  requiredIndicator: "pe-textfield__required-indicator",

  // states
  hasCounter: "pe-textfield--counter",
  hasFloatingLabel: "pe-textfield--floating-label",
  hasFullWidth: "pe-textfield--full-width",
  hideClear: "pe-textfield--hide-clear",
  hideSpinner: "pe-textfield--hide-spinner",
  hideValidation: "pe-textfield--hide-validation",
  isDense: "pe-textfield--dense",
  isRequired: "pe-textfield--required",
  stateDirty: "pe-textfield--dirty",
  stateDisabled: "pe-textfield--disabled",
  stateFocused: "pe-textfield--focused",
  stateInvalid: "pe-textfield--invalid",
  stateReadonly: "pe-textfield--readonly"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var DEFAULT_VALID_STATE = {
  invalid: false,
  message: undefined
};

var validateCustom = function validateCustom(state, attrs) {
  var el = state.inputEl();
  if (!el) {
    return DEFAULT_VALID_STATE;
  }
  var validState = attrs.validate(state.inputEl().value);
  return {
    invalid: validState && !validState.valid,
    message: validState && validState.error
  };
};

var validateCounter = function validateCounter(state, attrs) {
  return {
    invalid: state.inputEl().value.length > attrs.counter,
    message: attrs.error
  };
};

var validateHTML = function validateHTML(state, attrs) {
  return {
    invalid: !state.inputEl().checkValidity(),
    message: attrs.error
  };
};

var getValidStatus = function getValidStatus(state, attrs) {
  var status = DEFAULT_VALID_STATE;

  // attrs.validateResetOnClear: reset validation when field is cleared
  if (state.isTouched() && state.isInvalid() && state.inputEl().value.length === 0 && attrs.validateResetOnClear) {
    state.isTouched(false);
    state.isInvalid(false);
    state.error(undefined);
  }
  if (!status.invalid && attrs.counter) {
    status = validateCounter(state, attrs);
  }
  if (!status.invalid && state.inputEl() && state.inputEl().checkValidity) {
    status = validateHTML(state, attrs);
  }
  if (!status.invalid && attrs.validate) {
    status = validateCustom(state, attrs);
  }
  return status;
};

var checkValidity = function checkValidity(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  // default

  var status = attrs.valid !== undefined ? {
    invalid: !attrs.valid,
    message: attrs.error
  } : !state.isTouched() && !attrs.validateAtStart ? DEFAULT_VALID_STATE : getValidStatus(state, attrs);
  var previousInvalid = state.isInvalid();
  state.error(status.message);

  if (status.invalid !== previousInvalid) {
    state.isInvalid(status.invalid);
  }
  if (!status.invalid) {
    state.error(undefined);
  }
};

var notifyState = function notifyState(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.onChange) {
    var status = getValidStatus(state, attrs);
    attrs.onChange({
      focus: state.hasFocus(),
      dirty: state.isDirty(),
      el: state.inputEl(),
      invalid: status.invalid,
      error: status.error,
      value: state.inputEl().value,
      setInputState: function setInputState(newState) {
        return state.setInputState(newState);
      }
    });
  }
};

var ignoreEvent = function ignoreEvent(attrs, name) {
  return attrs.ignoreEvents && attrs.ignoreEvents.indexOf(name) !== -1;
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;

  var defaultValue = attrs.defaultValue !== undefined && attrs.defaultValue !== null ? attrs.defaultValue.toString() : attrs.value !== undefined && attrs.value !== null ? attrs.value.toString() : "";

  var el = createStream(null);
  var inputEl = createStream(null);
  var setInputState = createStream({});
  var error = createStream(attrs.error);
  var hasFocus = createStream(false);
  var isTouched = createStream(false); // true when any change is made
  var isDirty = createStream(defaultValue !== ""); // true for any input
  var isInvalid = createStream(false);
  var previousValue = createStream(undefined);
  var didSetFocusTime = 0;

  return {
    defaultValue: defaultValue,
    didSetFocusTime: didSetFocusTime,
    el: el,
    error: error,
    hasFocus: hasFocus,
    inputEl: inputEl,
    isDirty: isDirty,
    isInvalid: isInvalid,
    isTouched: isTouched,
    previousValue: previousValue,
    setInputState: setInputState,
    redrawOnUpdate: createStream.merge([inputEl, isInvalid, isDirty])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;

  state.el(dom);
  var inputType = attrs.multiLine ? "textarea" : "input";
  var inputEl = dom.querySelector(inputType);
  vnode.state.inputEl(inputEl);
  state.inputEl().value = state.defaultValue;

  state.setInputState.map(function (_ref) {
    var type = _ref.type,
        focus = _ref.focus,
        value = _ref.value;
    return value !== undefined ? state.inputEl().value = value : null, focus !== undefined && (state.hasFocus(focus), focus ? state.inputEl().focus() : state.inputEl().blur()), type === "input" && (attrs.validateOnInput || attrs.counter) && state.isTouched(state.inputEl().value !== state.defaultValue), type !== "input" && state.isTouched(state.inputEl().value !== state.defaultValue), type === "onblur" && state.isTouched(true), state.isDirty(state.inputEl().value !== ""), checkValidity(vnode), notifyState(vnode), state.previousValue(state.inputEl().value);
  });

  notifyState(vnode);
};

var onUpdate = function onUpdate(vnode) {
  var state = vnode.state;
  var attrs = vnode.attrs;
  checkValidity(vnode);

  var inputEl = state.inputEl();
  var value = attrs.value !== undefined && attrs.value !== null ? attrs.value : inputEl ? inputEl.value : state.previousValue();
  var valueStr = value === undefined || value === null ? "" : value.toString();

  if (inputEl && state.previousValue() !== valueStr) {
    inputEl.value = valueStr;
    state.previousValue(valueStr);
    state.setInputState({ type: "input" });
  }
};

var createProps = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var isInvalid = state.isInvalid();

  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, isInvalid ? classes.stateInvalid : "", state.hasFocus() ? classes.stateFocused : "", state.isDirty() ? classes.stateDirty : "", attrs.floatingLabel ? classes.hasFloatingLabel : "", attrs.disabled ? classes.stateDisabled : "", attrs.readonly ? classes.stateReadonly : "", attrs.dense ? classes.isDense : "", attrs.required ? classes.isRequired : "", attrs.fullWidth ? classes.hasFullWidth : "", attrs.counter ? classes.hasCounter : "", attrs.hideSpinner !== false && attrs.hideSpinner !== undefined ? classes.hideSpinner : "", attrs.hideClear !== false && attrs.hideClear !== undefined ? classes.hideClear : "", attrs.hideValidation ? classes.hideValidation : "", attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      k = _ref3.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var inputEl = state.inputEl();
  var error = attrs.error || state.error();
  var isInvalid = state.isInvalid();
  var inputType = attrs.multiLine ? "textarea" : "input";
  var type = attrs.multiLine ? null : !attrs.type || attrs.type === "submit" || attrs.type === "search" ? "text" : attrs.type;
  var showError = isInvalid && error !== undefined;

  var validates = !!(attrs.valid !== undefined || attrs.validate || attrs.min || attrs.max || attrs[k.minlength] || attrs[k.maxlength] || attrs.required || attrs.pattern);
  var inactive = attrs.disabled || attrs[k.readonly];

  var requiredIndicator = attrs.required && attrs.requiredIndicator !== "" ? h("span", {
    key: "required",
    className: classes.requiredIndicator
  }, attrs.requiredIndicator || "*") : null;
  var optionalIndicator = !attrs.required && attrs.optionalIndicator ? h("span", {
    key: "optional",
    className: classes.optionalIndicator
  }, attrs.optionalIndicator) : null;
  var label = attrs.label ? [attrs.label, requiredIndicator, optionalIndicator] : null;

  return [h("div", {
    className: classes.inputArea,
    key: "input-area"
  }, [label ? h("label", {
    key: "label",
    className: classes.label
  }, label) : null, h(inputType, _extends({}, {
    key: "input",
    className: classes.input,
    disabled: attrs.disabled
  }, type ? { type: type } : null, attrs.name ? { name: attrs.name } : null, !ignoreEvent(attrs, k.onclick) ? _defineProperty({}, k.onclick, function () {
    if (inactive) {
      return;
    }
    // in case the browser does not give the field focus,
    // for instance when the user tapped to the current field off screen
    state.setInputState({ focus: true });
    notifyState(vnode);
  }) : null, !ignoreEvent(attrs, k.onfocus) ? _defineProperty({}, k.onfocus, function () {
    if (inactive) {
      return;
    }
    state.setInputState({ focus: true });

    // set CSS class manually in case field gets focus but is off screen
    // and no redraw is triggered
    // at the next redraw state.hasFocus() will be read and the focus class be set
    // in the props.class statement
    if (state.el()) {
      state.el().classList.add(classes.stateFocused);
    }
    notifyState(vnode);
  }) : null, !ignoreEvent(attrs, k.onblur) ? _defineProperty({}, k.onblur, function () {
    state.setInputState({ type: "onblur", focus: false });
    // same principle as onfocus
    state.el().classList.remove(classes.stateFocused);
  }) : null, !ignoreEvent(attrs, k.oninput) ? _defineProperty({}, k.oninput, function () {
    // default input event
    // may be overwritten by attrs.events
    state.setInputState({ type: "input" });
  }) : null, !ignoreEvent(attrs, k.onkeydown) ? _defineProperty({}, k.onkeydown, function (e) {
    if (e.key === "Enter") {
      state.isTouched(true);
    } else if (e.key === "Escape" || e.key === "Esc") {
      state.setInputState({ focus: false });
    }
  }) : null, attrs.events ? attrs.events : null, // NOTE: may overwrite oninput
  attrs.required !== undefined && !!attrs.required ? { required: true } : null, attrs[k.readonly] !== undefined && !!attrs[k.readonly] ? _defineProperty({}, k.readonly, true) : null, attrs.pattern !== undefined ? { pattern: attrs.pattern } : null, attrs[k.maxlength] !== undefined ? _defineProperty({}, k.maxlength, attrs[k.maxlength]) : null, attrs[k.minlength] !== undefined ? _defineProperty({}, k.minlength, attrs[k.minlength]) : null, attrs.max !== undefined ? { max: attrs.max } : null, attrs.min !== undefined ? { min: attrs.min } : null, attrs[k.autofocus] !== undefined ? _defineProperty({}, k.autofocus, attrs[k.autofocus]) : null, attrs[k.tabindex] !== undefined ? _defineProperty({}, k.tabindex, attrs[k.tabindex]) : null, attrs.rows !== undefined ? { rows: attrs.rows } : null))]), attrs.counter ? h("div", {
    key: "counter",
    className: classes.counter
  }, (inputEl && inputEl.value.length || 0) + " / " + attrs.counter) : null, attrs.help && !showError ? h("div", {
    key: "help",
    className: [classes.help, attrs.focusHelp ? classes.focusHelp : null].join(" ")
  }, attrs.help) : null, showError ? h("div", {
    key: "error",
    className: classes.error
  }, error) : validates && !attrs.help ? h("div", {
    key: "error-placeholder",
    className: classes.errorPlaceholder
  }) : null];
};

var textfield = Object.freeze({
	getElement: getElement,
	getInitialState: getInitialState,
	onMount: onMount,
	onUpdate: onUpdate,
	createProps: createProps,
	createContent: createContent
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var line_height_input = 20;
var input_padding_v = 7;

var vars$1 = {
  vertical_spacing_top: 6, // 8 minus natural label height padding (1)
  vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  input_focus_border_width: 2,
  input_focus_border_animation_duration: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration,

  floating_label_vertical_spacing_top: 30, // 16 + 8 + 8 minus natural label height padding (2)
  floating_label_vertical_spacing_bottom: 7, // 8 minus natural label height padding (1)
  floating_label_top: 14,
  floating_label_animation_duration: ".12s",

  input_padding_h: 0,
  input_padding_v: input_padding_v,
  input_border_width: 1,
  margin_top_error_message: 6,
  font_size_input: 16,
  font_size_error: 12,
  font_size_floating_label: 12,

  line_height_input: line_height_input,

  dense_floating_label_vertical_spacing_top: 23, // 12 + 8 + 4 minus natural label height padding (1)
  dense_floating_label_vertical_spacing_bottom: 4, // 8 minus natural label height padding (1)
  dense_floating_label_top: 10,
  dense_font_size_input: 13,
  dense_font_size_floating_label: 13,

  full_width_input_padding_h: 20,
  full_width_input_padding_v: 18, // 20 minus natural label height padding (2)

  dense_full_width_input_padding_h: 16,
  dense_full_width_input_padding_v: 15, // 16 minus natural label height padding (1)
  dense_full_width_font_size_input: 13,

  color_light_input_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_input_background: "transparent", // only used to "remove" autofill color
  color_light_highlight_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_light_input_bottom_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_border_light),
  color_light_input_error_text: rgba("221, 44, 0"),
  color_light_input_error_border: rgba("221, 44, 0"),
  color_light_input_placeholder: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_disabled_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_readonly_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_help_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_tertiary),
  color_light_required_symbol: rgba("221, 44, 0"),
  color_light_focus_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_light_counter_ok_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),

  color_dark_input_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_input_background: "transparent", // only used to "remove" autofill color
  color_dark_highlight_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),
  color_dark_input_bottom_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_border_light),
  color_dark_input_error_text: rgba("222, 50, 38"),
  color_dark_input_error_border: rgba("222, 50, 38"),
  color_dark_input_placeholder: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_disabled_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_readonly_label_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_help_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_tertiary),
  color_dark_required_symbol: rgba("221, 44, 0"),
  color_dark_focus_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary),
  color_dark_counter_ok_border: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary)
};




/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Slider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_slider__ = __webpack_require__(66);



var Slider = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_slider__["a" /* coreSlider */]);

Slider.displayName = "Slider";




/***/ }),
/* 66 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return slider; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var lightForeground = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground;
var darkForeground = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground;
var activeColor = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_primary; // or override in CSS by setting 'color' property on '.pe-slider'
var thumb_size = 12;
var thumb_touch_size = Math.max(40, thumb_size);
var thumb_border_width = 2;
var active_thumb_scale = 3 / 2;
var disabled_thumb_scale = 1 / 2;
var active_pin_thumb_scale = 2 / 6;
var largestThumbSize = active_thumb_scale * thumb_size;
var largestElement = Math.max(thumb_touch_size, largestThumbSize);
var height = Math.max(52, largestThumbSize);
var side_spacing = Math.max(10, largestElement / 2 - thumb_size / 2);
var horizontal_layout_side_spacing = side_spacing + 4; // optimization for horizontal layout

var themeVars = {
  height: height,
  side_spacing: side_spacing,
  horizontal_layout_side_spacing: horizontal_layout_side_spacing,
  thumb_size: thumb_size,
  thumb_touch_size: thumb_touch_size,
  track_height: height,
  bar_height: 2,
  thumb_border_width: thumb_border_width,
  active_thumb_scale: active_thumb_scale,
  animation_duration: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration,
  disabled_thumb_scale: disabled_thumb_scale,
  active_pin_thumb_scale: active_pin_thumb_scale,

  step_width: 2,
  pin_height: 32,
  pin_width: 26,
  pin_font_size: 10,

  color_light_track_active: rgba(lightForeground, .38),
  color_light_track_inactive: rgba(lightForeground, .26),
  color_light_track_value: rgba(activeColor),
  // background color may be set in theme; disabled by default
  // color_light_thumb_background:        undefined,
  color_light_thumb_off: rgba(lightForeground, .26),
  color_light_thumb_off_focus: rgba(lightForeground),
  color_light_thumb_off_focus_opacity: .08,
  color_light_thumb_on: rgba(activeColor),
  color_light_thumb_on_focus_opacity: .11,
  color_light_thumb_inactive: rgba(lightForeground, .26),
  color_light_tick: rgba(lightForeground, 1),
  color_light_icon: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled_icon: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),
  color_light_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_secondary),
  color_light_disabled_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_disabled),

  color_dark_track_active: rgba(darkForeground, .3),
  color_dark_track_inactive: rgba(darkForeground, .2),
  color_dark_track_value: rgba(activeColor),
  // background color may be set in theme; disabled by default
  // color_dark_thumb_background:         undefined,
  color_dark_thumb_off: rgba(darkForeground, .2),
  color_dark_thumb_off_focus: rgba(darkForeground),
  color_dark_thumb_off_focus_opacity: .08,
  color_dark_thumb_on: rgba(activeColor),
  color_dark_thumb_on_focus_opacity: .11,
  color_dark_thumb_inactive: rgba(darkForeground, .2),
  color_dark_tick: rgba(darkForeground, 1),
  color_dark_icon: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled_icon: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled),
  color_dark_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_secondary),
  color_dark_disabled_label: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_disabled)
};

var classes = {
  component: "pe-slider",

  // elements
  control: "pe-slider__control",
  label: "pe-slider__label",
  pin: "pe-slider__pin",
  thumb: "pe-slider__thumb",
  tick: "pe-slider__ticks-tick",
  ticks: "pe-slider__ticks",
  track: "pe-slider__track",
  trackBar: "pe-slider__track-bar",
  trackBarValue: "pe-slider__track-bar-value",
  trackPart: "pe-slider__track-part",
  trackPartRest: "pe-slider__track-rest",
  trackPartValue: "pe-slider__track-value",

  // states
  hasFocus: "pe-slider--focus",
  hasPin: "pe-slider--pin",
  hasTicks: "pe-slider--ticks",
  hasTrack: "pe-slider--track",
  isActive: "pe-slider--active",
  isAtMin: "pe-slider--min",
  isDisabled: "pe-slider--disabled"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var MAX_TICKS = 100;
var focusElement = void 0;

var deFocus = function deFocus(state) {
  if (focusElement) {
    focusElement.blur();
  }
  focusElement = undefined;
  state.hasFocus(false);
};

var focus = function focus(state, el) {
  deFocus(state);
  focusElement = el;
  state.hasFocus(true);
};

var positionFromEvent = function positionFromEvent(e, isVertical) {
  return (
    // isVertical not yet implemented
    __WEBPACK_IMPORTED_MODULE_0_polythene_core__["h" /* isTouch */] && e.touches ? isVertical ? e.touches[0].pageY : e.touches[0].pageX : isVertical ? e.pageY : e.pageX
  );
};

var updatePinPosition = function updatePinPosition(state) {
  if (state.controlEl && state.pinEl) {
    var left = state.fraction() * state.rangeWidth;
    state.pinEl.style.left = left + "px";
  }
};

var updateValue = function updateValue(state, value) {
  state.setValue(value, true);
  updatePinPosition(state);
};

var generateTickMarks = function generateTickMarks(h, stepCount) {
  var items = [];
  var s = stepCount + 1;
  while (s > 0) {
    items.push(h("div", {
      className: classes.tick,
      key: "tick-" + s
    }));
    s--;
  }
  return items;
};

var readRangeData = function readRangeData(state) {
  if (state.controlEl && __WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    // range is from the far left to the far right minus the thumb width (max x is at the left side of the thumb)
    state.controlWidth = themeVars.thumb_size;
    state.rangeWidth = state.trackEl.getBoundingClientRect().width - state.controlWidth;
    var styles = window.getComputedStyle(state.trackEl);
    state.rangeOffset = parseFloat(styles.marginLeft);
  }
};

var calculateClickOffset = function calculateClickOffset(state) {
  var controlOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

  state.clickOffset = state.trackEl.getBoundingClientRect().left - (state.rangeOffset - state.controlWidth / 2) + controlOffset;
};

var initControlEvent = function initControlEvent(state, e) {
  var controlPos = state.controlEl.getBoundingClientRect().left;
  var eventPos = positionFromEvent(e);
  var controlOffset = eventPos - controlPos - state.controlWidth / 2;
  calculateClickOffset(state, controlOffset);
};

var initTrackEvent = function initTrackEvent(state) {
  return calculateClickOffset(state, 0);
};

var handlePosEvent = function handlePosEvent(state, e) {
  var pos = positionFromEvent(e) - state.clickOffset;
  var value = state.min + (pos - state.rangeOffset) / state.rangeWidth * (state.max - state.min);
  updateValue(state, value);
};

var startDrag = function startDrag(state, attrs, e) {
  if (state.isDragging()) return;
  e.preventDefault();
  state.isDragging(true);
  state.isActive(true);
  deFocus(state);

  var drag = function drag(e) {
    if (!state.isDragging()) return;
    handlePosEvent(state, e);
  };

  var endDrag = function endDrag() {
    if (!state.isDragging()) return;
    deFocus(state);
    if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
      window.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["k" /* pointerMoveEvent */], drag);
      window.removeEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["j" /* pointerEndMoveEvent */], endDrag);
    }
    state.isDragging(false);
    state.isActive(false);
  };

  if (__WEBPACK_IMPORTED_MODULE_0_polythene_core__["f" /* isClient */]) {
    window.addEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["k" /* pointerMoveEvent */], drag);
    window.addEventListener(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["j" /* pointerEndMoveEvent */], endDrag);
  }
  readRangeData(state);

  if (attrs.pin) {
    updatePinPosition(state);
  }
};

var startTrack = function startTrack(state, attrs, e) {
  e.preventDefault();
  if (state.isDragging()) {
    return;
  }
  readRangeData(state);
  initTrackEvent(state);
  handlePosEvent(state, e);
  startDrag(state, attrs, e);
};

var createSlider = function createSlider(vnode, _ref) {
  var _ref3;

  var h = _ref.h,
      k = _ref.k,
      hasTicks = _ref.hasTicks,
      interactiveTrack = _ref.interactiveTrack;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var fraction = state.fraction();
  var range = state.max - state.min;
  var stepCount = Math.min(MAX_TICKS, parseInt(range / state.stepSize, 10));

  var onStartTrack = function onStartTrack(e) {
    return startTrack(state, attrs, e);
  };

  var onInitDrag = function onInitDrag(e) {
    readRangeData(state);
    initControlEvent(state, e);
    startDrag(state, attrs, e);
  };

  var flexValueCss = fraction + " 1 0%";
  var flexRestValue = 1 - fraction;
  var flexRestCss = flexRestValue + " 1 0%";

  return h("div", _extends({}, { className: classes.track }, interactiveTrack && !attrs.disabled && _defineProperty({}, k["on" + __WEBPACK_IMPORTED_MODULE_0_polythene_core__["l" /* pointerStartMoveEvent */]], onStartTrack)), [h("div", {
    className: classes.trackPart + " " + classes.trackPartValue,
    key: "trackPartValue",
    style: {
      flex: flexValueCss,
      msFlex: flexValueCss,
      WebkitFlex: flexValueCss
    }
  }, h("div", { className: classes.trackBar }, h("div", { className: classes.trackBarValue }))), h("div", _extends({}, {
    className: classes.control,
    key: "control"
  }, attrs.disabled ? { disabled: true } : (_ref3 = {}, _defineProperty(_ref3, k.tabindex, attrs[k.tabindex] || 0), _defineProperty(_ref3, k.onfocus, function () {
    return focus(state, state.controlEl);
  }), _defineProperty(_ref3, k.onblur, function () {
    return deFocus(state);
  }), _defineProperty(_ref3, k.onkeydown, function (e) {
    if (e.key !== "Tab") {
      e.preventDefault();
    }
    if (e.key === "Escape" || e.key === "Esc") {
      state.controlEl.blur(e);
    } else if (e.key === "ArrowLeft" || e.key === "ArrowDown" || e.key === "Left" || e.key === "Down") {
      state.decrement(state, e.shiftKey);
    } else if (e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "Right" || e.key === "Up") {
      state.increment(state, e.shiftKey);
    } else if (e.key === "Home") {
      updateValue(state, state.min);
    } else if (e.key === "End") {
      updateValue(state, state.max);
    } else if (e.key === "PageDown") {
      state.decrement(state, true);
    } else if (e.key === "PageUp") {
      state.increment(state, true);
    }
    readRangeData(state);
    updatePinPosition(state);
  }), _ref3), !attrs.disabled && _defineProperty({}, k["on" + __WEBPACK_IMPORTED_MODULE_0_polythene_core__["l" /* pointerStartMoveEvent */]], onInitDrag), attrs.events ? attrs.events : null, hasTicks ? { step: stepCount } : null), attrs.icon ? h("div", {
    className: classes.thumb,
    key: "icon"
  }, attrs.icon) : null), h("div", {
    className: classes.trackPart + " " + classes.trackPartRest,
    key: "trackPartRest",
    style: {
      flex: flexRestCss,
      msFlex: flexRestCss,
      WebkitFlex: flexRestCss,
      maxWidth: flexRestValue * 100 + "%" // for IE Edge
    }
  }, h("div", { className: classes.trackBar }, h("div", { className: classes.trackBarValue }))), hasTicks && !attrs.disabled ? h("div", {
    className: classes.ticks,
    key: "ticks"
  }, generateTickMarks(h, stepCount)) : null, hasTicks && attrs.pin && !attrs.disabled ? h("div", {
    className: classes.pin,
    key: "pin",
    value: state.value()
  }) : null]);
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;

  var min = attrs.min !== undefined ? attrs.min : 0;
  var max = attrs.max !== undefined ? attrs.max : 100;
  var range = max - min;
  var stepSize = attrs.stepSize !== undefined ? attrs.stepSize : 1;
  var defaultValue = attrs.defaultValue !== undefined ? attrs.defaultValue : attrs.value !== undefined ? attrs.value : 0;
  var previousValue = createStream(undefined);
  var isActive = createStream(false);
  var hasFocus = createStream(false);
  var isDragging = createStream(false);
  var fraction = createStream(min);
  var value = createStream(0);
  var normalizeFactor = 1 / stepSize;

  var setValue = function setValue(v) {
    var shouldNotify = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (v < min) v = min;
    if (v > max) v = max;
    value(stepSize ? Math.round(v * normalizeFactor) / normalizeFactor : v);
    fraction((value() - min) / range);
    if (shouldNotify && attrs.onChange) {
      attrs.onChange({
        value: value()
      });
    }
    previousValue(v);
  };

  var increment = function increment(state, useLargeStep) {
    return updateValue(state, value() + (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  var decrement = function decrement(state, useLargeStep) {
    return updateValue(state, value() - (useLargeStep ? 10 : 1) * (stepSize || 1));
  };

  setValue(defaultValue);

  return {
    min: min,
    max: max,
    stepSize: stepSize,
    fraction: fraction,
    // DOM elements
    trackEl: null,
    controlEl: null,
    pinEl: null,
    // functions
    setValue: setValue,
    increment: increment,
    decrement: decrement,
    // streams
    isDragging: isDragging,
    isActive: isActive,
    value: value,
    previousValue: previousValue,
    hasFocus: hasFocus,
    // coordinates
    controlWidth: 0,
    rangeWidth: 0,
    rangeOffset: 0,
    clickOffset: 0,
    redrawOnUpdate: createStream.merge([isActive, value])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;

  state.trackEl = dom.querySelector("." + classes.track);
  state.controlEl = dom.querySelector("." + classes.control);
  state.pinEl = dom.querySelector("." + classes.pin);

  readRangeData(state);

  if (attrs.pin) {
    setTimeout(function () {
      updateValue(state, state.value());
    }, 0);
  }
};

var createProps = function createProps(vnode, _ref5) {
  var k = _ref5.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  if (attrs.value !== undefined) {
    if (state.previousValue() !== attrs.value) {
      state.previousValue(attrs.value);
      setTimeout(function () {
        return state.setValue(state.previousValue());
      }, 0); // perform in next tick to play nice with React
    }
  }
  var hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  var interactiveTrack = attrs.interactiveTrack !== undefined ? attrs.interactiveTrack : true;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.disabled ? classes.isDisabled : null, attrs.pin ? classes.hasPin : null, interactiveTrack ? classes.hasTrack : null, state.isActive() ? classes.isActive : null, state.hasFocus() ? classes.hasFocus : null, state.fraction() === 0 ? classes.isAtMin : null, hasTicks ? classes.hasTicks : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref6) {
  var h = _ref6.renderer,
      k = _ref6.keys;

  var attrs = vnode.attrs;
  var hasTicks = attrs.ticks !== undefined && attrs.ticks !== false;
  var interactiveTrack = attrs.interactiveTrack !== undefined ? attrs.interactiveTrack : true;
  return createSlider(vnode, { h: h, k: k, hasTicks: hasTicks, interactiveTrack: interactiveTrack });
};

var slider = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	createProps: createProps,
	createContent: createContent
});




/***/ }),
/* 67 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return SnackbarInstance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Snackbar; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_snackbar__ = __webpack_require__(68);




var notificationClasses = {
  component: "pe-notification",

  // elements
  action: "pe-notification__action",
  content: "pe-notification__content",
  holder: "pe-notification__holder",
  placeholder: "pe-notification__placeholder",
  title: "pe-notification__title",

  // states
  hasContainer: "pe-notification--container",
  horizontal: "pe-notification--horizontal",
  multilineTitle: "pe-notification__title--multi-line",
  vertical: "pe-notification--vertical"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var classes = _extends({}, notificationClasses, {
  component: "pe-notification pe-snackbar",

  // elements
  holder: "pe-snackbar__holder",
  placeholder: "pe-snackbar__placeholder",

  // states
  open: "pe-snackbar--open"
});

var SnackbarInstance = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(__WEBPACK_IMPORTED_MODULE_2_polythene_core_snackbar__["a" /* coreSnackbarInstance */]);

SnackbarInstance.displayName = "SnackbarInstance";

var options = {
  name: "snackbar",
  className: classes.component,
  htmlShowClass: classes.open,
  defaultId: "default_snackbar",
  holderSelector: "." + classes.holder,
  instance: SnackbarInstance,
  placeholder: "span." + classes.placeholder,
  queue: true,
  transitions: __WEBPACK_IMPORTED_MODULE_2_polythene_core_snackbar__["b" /* transitions */]
};

var Multiple = Object(__WEBPACK_IMPORTED_MODULE_1_polythene_core__["b" /* Multi */])({ options: options, renderer: __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["d" /* renderer */] });
var Snackbar = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(Multiple);
Object.getOwnPropertyNames(Multiple).forEach(function (p) {
  return Snackbar[p] = Multiple[p];
});

Snackbar.displayName = "Snackbar";




/***/ }),
/* 68 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return coreSnackbarInstance; });
/* unused harmony export vars */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return transitions; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core_notification__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var coreSnackbarInstance = _extends({}, __WEBPACK_IMPORTED_MODULE_0_polythene_core_notification__["a" /* coreNotificationInstance */]);

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var vars$2 = _extends$1({}, __WEBPACK_IMPORTED_MODULE_0_polythene_core_notification__["c" /* vars */], {
  border_radius: 0,
  min_width: 288,
  max_width: 568,
  min_height: 0,

  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background)
});

var show = function show(_ref) {
  var containerEl = _ref.containerEl,
      el = _ref.el,
      showDuration = _ref.showDuration,
      showDelay = _ref.showDelay;

  return {
    el: containerEl,
    showDuration: showDuration || .4,
    showDelay: showDelay || 0,
    beforeShow: function beforeShow() {
      el.style.display = "block";
      var height = el.getBoundingClientRect().height;
      containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    show: function show() {
      return containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var hide = function hide(_ref2) {
  var containerEl = _ref2.containerEl,
      el = _ref2.el,
      hideDuration = _ref2.hideDuration,
      hideDelay = _ref2.hideDelay;

  return {
    el: containerEl,
    hideDuration: hideDuration || .4,
    hideDelay: hideDelay || 0,
    hide: function hide() {
      var height = el.getBoundingClientRect().height;
      containerEl.style.transform = "translate3d(0, " + height + "px, 0)";
    },
    // reset to original position to counter the removal of the snackbar instance
    afterHide: function afterHide() {
      // prevent a "bounce back"
      el.style.display = "none";
      containerEl.style.transitionDuration = "0ms";
      containerEl.style.transform = "translate3d(0, 0px, 0)";
    }
  };
};

var transitions = {
  show: show,
  hide: hide
};




/***/ }),
/* 69 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Switch; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_switch__ = __webpack_require__(70);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__ = __webpack_require__(7);






var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ViewControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$2({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_switch__["b" /* viewControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_switch__["b" /* viewControl */].createContent(vnode, _extends$2(args, { Shadow: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_shadow__["a" /* Shadow */], IconButton: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__["a" /* IconButton */] }));
  }
}));

ViewControl.displayName = "ViewControl";

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var SelectionControl = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends$1({}, __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_2_polythene_core_selection_control__["a" /* coreSelectionControl */].createContent(vnode, _extends$1(args, { ViewControl: ViewControl }));
  }
}));

SelectionControl.displayName = "SelectionControl";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Switch = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_switch__["a" /* coreSwitch */], {
  component: SelectionControl
}));

Switch.displayName = "Switch";




/***/ }),
/* 70 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _switch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return viewControl; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_selection_control__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_core_icon_button__ = __webpack_require__(12);




var classes = {
  component: "pe-switch-control",

  // elements
  knob: "pe-switch-control__knob",
  thumb: "pe-switch-control__thumb",
  track: "pe-switch-control__track"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

// Don't export 'element': it will be the wrapped selection control component (set in polythene-xxx-checkbox)

// Props to be passed to a selection control

var createProps = function createProps(vnode) {
  var attrs = vnode.attrs;
  return _extends({}, attrs, {
    selectable: attrs.selectable || function () {
      return true;
    }, // default: always selectable, regardless of the checked state
    instanceClass: classes.component,
    type: "checkbox"
  });
};

var _switch = Object.freeze({
	createProps: createProps
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createContent = function createContent(vnode, _ref) {
  var h = _ref.renderer,
      Shadow = _ref.Shadow,
      IconButton = _ref.IconButton;

  var attrs = vnode.attrs;

  var zOff = attrs.zOff !== undefined ? attrs.zOff : 1;
  var zOn = attrs.zOn !== undefined ? attrs.zOn : 2;
  var z = attrs.checked ? zOn : zOff;
  var raised = attrs.disabled ? false : attrs.raised !== undefined ? attrs.raised : true;

  return [h("div", {
    className: classes.track,
    key: "track"
  }), h(IconButton, _extends$1({}, {
    className: classes.thumb,
    key: "button",
    content: h("div", { className: classes.knob }, [attrs.icon ? attrs.icon : null, raised ? h(Shadow, {
      z: z,
      animated: true
    }) : null]),
    style: attrs.style,
    disabled: attrs.disabled,
    events: attrs.events,
    ink: attrs.ink || false,
    inactive: attrs.inactive
  }, attrs.iconButton))];
};

var viewControl = Object.freeze({
	getElement: getElement,
	createContent: createContent
});

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var hit_area_padding = (__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_icon_button - __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].unit_icon_size) / 2; // 12

var vars$3 = _extends$2({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_selection_control__["b" /* vars */], {
  track_height: 14,
  track_length: 36,
  thumb_size: 20,
  padding: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].grid_unit_component,
  icon_button_padding: __WEBPACK_IMPORTED_MODULE_2_polythene_core_icon_button__["b" /* vars */].padding,
  hit_area_padding: hit_area_padding,

  animation_duration: __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].animation_duration,

  color_light_thumb_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_light_thumb_off: "#f1f1f1",
  color_light_thumb_disabled: "#bdbdbd",
  color_light_wash_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_light_wash_off: __WEBPACK_IMPORTED_MODULE_2_polythene_core_icon_button__["b" /* vars */].color_light_wash,

  color_light_track_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary_faded),
  color_light_track_on_opacity: .55,
  color_light_track_off: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_text_regular),
  color_light_track_off_opacity: .55,
  color_light_track_disabled: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_light_background_disabled),
  color_light_track_disabled_opacity: 1,

  // icon color may be set in theme; default "currentcolor"
  // color_light_icon_on:                   "currentcolor",
  // color_light_icon_off:                  "currentcolor",

  // color_light_focus_on and so on taken from selectionControlVars

  color_dark_thumb_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_dark_thumb_off: "#bdbdbd",
  color_dark_thumb_disabled: "#555",
  color_dark_wash_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary),
  color_dark_wash_off: __WEBPACK_IMPORTED_MODULE_2_polythene_core_icon_button__["b" /* vars */].color_dark_wash,

  color_dark_track_on: rgba(__WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].color_primary_faded, __WEBPACK_IMPORTED_MODULE_0_polythene_theme__["a" /* vars */].blend_dark_text_tertiary), // or "#5a7f7c"
  color_dark_track_on_opacity: 9,
  color_dark_track_off: "#717171",
  color_dark_track_off_opacity: .55,
  color_dark_track_disabled: "#717171",
  color_dark_track_disabled_opacity: .3

  // icon color may be set in theme; default "currentcolor"
  // color_dark_icon_on:                    "currentcolor"
  // color_dark_icon_off:                   "currentcolor"

  // color_dark_focus_on and so on taken from selectionControlVars
});




/***/ }),
/* 71 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Tabs; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_button__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__ = __webpack_require__(7);






var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tab = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$1({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__["b" /* coreTab */], {
  createProps: function createProps(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__["b" /* coreTab */].createProps(vnode, _extends$1(args, { Icon: __WEBPACK_IMPORTED_MODULE_2_polythene_mithril_icon__["a" /* Icon */] }));
  },
  component: __WEBPACK_IMPORTED_MODULE_3_polythene_mithril_button__["a" /* Button */]
}));

Tab.displayName = "Tab";

var _extends$2 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var ScrollButton = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(_extends$2({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__["a" /* coreScrollButton */], {
  component: __WEBPACK_IMPORTED_MODULE_4_polythene_mithril_icon_button__["a" /* IconButton */]
}));

ScrollButton.displayName = "ScrollButton";

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Tabs = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["a" /* StateComponent */])(_extends({}, __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__["c" /* coreTabs */], {
  createContent: function createContent(vnode, args) {
    return __WEBPACK_IMPORTED_MODULE_1_polythene_core_tabs__["c" /* coreTabs */].createContent(vnode, _extends(args, { Tab: Tab, ScrollButton: ScrollButton }));
  }
}));

Tabs.displayName = "Tabs";




/***/ }),
/* 72 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return tabs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return tab; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return scrollButton; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_utilities__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_polythene_theme__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_polythene_core_button__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_polythene_core_icon_button__ = __webpack_require__(12);






var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var fontSize = __WEBPACK_IMPORTED_MODULE_3_polythene_core_button__["b" /* vars */].font_size;
var tab_label_line_height = 1.1 * fontSize;

var vars$3 = {
  tab_min_width: 72,
  tab_min_width_tablet: 160,
  tab_max_width: "initial",
  tab_height: 48,
  label_max_width: 264,
  menu_tab_height: 44,
  menu_tab_icon_label_height: 44,
  tab_icon_label_height: 72,
  tab_icon_label_icon_spacing: 7,
  indicator_slide_speed: 600, // px per second
  indicator_slide_min_duration: .250,
  tabs_indent: __WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].unit_indent,
  tabs_scroll_speed: 600, // px per second
  tabs_scroll_delay: .15,
  tabs_scroll_min_duration: .5,
  scroll_button_fade_duration: .2,
  scroll_button_fade_delay: .25,
  tab_content_padding_v: 12,
  tab_menu_content_padding_v: 6,
  tab_indicator_height: 2,
  scrollbar_offset: 20,
  scroll_button_opacity: .7,
  label_opacity: .7,

  tab_label_line_height: tab_label_line_height,
  tab_label_vertical_offset: tab_label_line_height - fontSize,
  tab_label_transition_property: "opacity, color, backgroundColor",

  color_light: "inherit",
  color_light_selected: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary),
  color_light_selected_background: "transparent",
  color_light_tab_indicator: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary),
  color_light_icon: __WEBPACK_IMPORTED_MODULE_4_polythene_core_icon_button__["b" /* vars */].color_light,

  color_dark: "inherit",
  color_dark_selected: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary),
  color_dark_selected_background: "transparent",
  color_dark_tab_indicator: rgba(__WEBPACK_IMPORTED_MODULE_2_polythene_theme__["a" /* vars */].color_primary),
  color_dark_icon: __WEBPACK_IMPORTED_MODULE_4_polythene_core_icon_button__["b" /* vars */].color_dark
};

var buttonClasses = {
  base: "pe-button",
  component: "pe-button pe-text-button",
  row: "pe-button-row",

  // elements
  content: "pe-button__content",
  focus: "pe-button__focus",
  label: "pe-button__label",
  wash: "pe-button__wash",

  // states
  borders: "pe-button--borders",
  disabled: "pe-button--disabled",
  focused: "pe-button--focus",
  inactive: "pe-button--inactive",
  selected: "pe-button--selected"
};

var classes = {
  component: "pe-tabs",

  // elements
  indicator: "pe-tabs__indicator",
  scrollButton: "pe-tabs__scroll-button",
  scrollButtonAtEnd: "pe-tabs__scroll-button-end",
  scrollButtonAtStart: "pe-tabs__scroll-button-start",
  scrollButtonOffset: "pe-tabs__scroll-button-offset",
  tab: "pe-tabs__tab",
  tabContent: "pe-tabs__tab-content",
  tabRow: "pe-tabs__row",

  // states
  activeSelectable: "pe-tabs__active--selectable",
  isAtEnd: "pe-tabs--end",
  isAtStart: "pe-tabs--start",
  isAutofit: "pe-tabs--autofit",
  isMenu: "pe-tabs--menu",
  scrollable: "pe-tabs--scrollable",
  compactTabs: "pe-tabs--compact",
  tabHasIcon: "pe-tabs__tab---icon",
  tabRowCentered: "pe-tabs__row--centered",
  tabRowIndent: "pe-tabs__row--indent",

  // lookup
  label: buttonClasses.label
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var whenCreateDone = function whenCreateDone() {
  return Promise.resolve();
};

var getNewIndex = function getNewIndex(index, tabs) {
  var minTabIndex = 0;
  var maxTabIndex = tabs.length - 1;
  return {
    backward: Math.max(index - 1, minTabIndex),
    forward: Math.min(index + 1, maxTabIndex)
  };
};

var handleScrollButtonClick = function handleScrollButtonClick(state, attrs, e, direction) {
  e.stopPropagation();
  e.preventDefault();
  var currentTabIndex = state.selectedTabIndex();
  var newIndex = getNewIndex(currentTabIndex, state.tabs)[direction];
  if (newIndex !== currentTabIndex) {
    setSelectedTab(state, attrs, newIndex, true);
  } else {
    scrollToTab(state, newIndex);
  }
};

/*
Moves the first tab to the left so that the text label is as position 0. 
*/
var alignToTitle = function alignToTitle(state) {
  var firstTab = state.tabs[0].dom;
  var firstInnerLabel = firstTab.querySelector("." + classes.label + " span");
  var firstOuterLabelWidth = firstTab.getBoundingClientRect().width;
  var firstInnerLabelWidth = firstInnerLabel.getBoundingClientRect().width;
  var firstTabOffset = (firstOuterLabelWidth - firstInnerLabelWidth) / 2;
  firstTab.style.marginLeft = -firstTabOffset + "px";
};

var createRightButtonOffset = function createRightButtonOffset(state) {
  // add padding to right so that last item is not hidden behind scroll button
  var scrollButtonAtEndWidth = state.scrollButtons["end"].getBoundingClientRect().width;
  var scrollButtonOffsetEl = state.tabsEl.querySelector("." + classes.scrollButtonOffset);
  scrollButtonOffsetEl.style.width = scrollButtonAtEndWidth + "px";
};

var scrollToTab = function scrollToTab(state, tabIndex) {
  var tabs = state.tabs;
  var scroller = state.scrollerEl;
  // Scroll to position of selected tab
  var tabLeft = tabs.slice(0, tabIndex).reduce(function (totalWidth, tabData) {
    return totalWidth + tabData.dom.getBoundingClientRect().width;
  }, 0);
  // Tabs at the far right will not fully move to the left
  // because the scrollable row will stick to the right 
  // to get the max scroll left, we subtract the visible viewport from the scroll width
  var scrollerWidth = scroller.getBoundingClientRect().width; // frame width
  var scrollingWidth = scroller.scrollWidth;
  var maxScroll = scrollingWidth - scrollerWidth;
  var left = Math.min(tabLeft, maxScroll);
  var currentLeft = scroller.scrollLeft;
  if (currentLeft !== left) {
    var duration = Math.abs(currentLeft - left) / vars$3.tabs_scroll_speed;
    var delaySeconds = vars$3.tabs_scroll_delay || 0;
    setTimeout(function () {
      Object(__WEBPACK_IMPORTED_MODULE_1_polythene_utilities__["c" /* scrollTo */])({
        element: scroller,
        to: left,
        duration: Math.max(vars$3.tabs_scroll_min_duration, duration),
        direction: "horizontal"
      }).then(function () {
        return updateScrollButtons(state);
      });
    }, delaySeconds * 1000);
  }
};

var updateScrollButtons = function updateScrollButtons(state) {
  var scrollerEl = state.scrollerEl;
  var scrollLeft = scrollerEl.scrollLeft;
  var currentTabIndex = state.selectedTabIndex();
  var tabsEl = state.tabsEl;
  var minTabIndex = 0;
  var maxTabIndex = state.tabs.length - 1;
  var isAtStart = scrollerEl.scrollLeft === 0 && currentTabIndex === minTabIndex;
  var isAtEnd = scrollLeft >= scrollerEl.scrollWidth - tabsEl.getBoundingClientRect().width - 1 && currentTabIndex === maxTabIndex;
  state.scrollButtonAtStart(isAtStart);
  state.scrollButtonAtEnd(isAtEnd);
};

var animateIndicator = function animateIndicator(selectedTabEl, animate, state) {
  var parentRect = state.tabsEl.getBoundingClientRect();
  var rect = selectedTabEl.getBoundingClientRect();
  var style = state.tabIndicatorEl.style;
  var translateX = rect.left - parentRect.left + state.scrollerEl.scrollLeft;
  var scaleX = 1 / parentRect.width * rect.width;
  var transformCmd = "translate(" + translateX + "px, 0) scaleX(" + scaleX + ")";
  var duration = animate ? vars$3.indicator_slide_min_duration : 0;
  style["transition-duration"] = duration + "s";
  style.transform = transformCmd;
};

var setSelectedTab = function setSelectedTab(state, attrs, index, animate) {
  state.selectedTabIndex(index);
  if (!state.tabs.length) return;
  var selectedTabEl = state.tabs[index].dom;
  if (selectedTabEl && state.tabIndicatorEl && state.tabsEl) {
    animateIndicator(selectedTabEl, animate, state);
  }
  if (state.managesScroll) {
    updateScrollButtons(state);
  }
  scrollToTab(state, index);
  if (attrs.onChange) {
    attrs.onChange({
      index: index,
      options: state.tabs[index].attrs,
      el: selectedTabEl
    });
  }
};

var sortByLargestWidth = function sortByLargestWidth(a, b) {
  return a < b ? 1 : a > b ? -1 : 0;
};

var getInitialState = function getInitialState(vnode, createStream) {
  var attrs = vnode.attrs;
  var selectedTabIndex = createStream(vnode.attrs.selectedTab || 0);
  var scrollButtonAtStart = createStream(true);
  var scrollButtonAtEnd = createStream(true);
  var registerTabButton = function registerTabButton(state) {
    return function (index, data) {
      return state.tabs[index] = data;
    };
  };
  var registerScrollButton = function registerScrollButton(state) {
    return function (position, dom) {
      return state.scrollButtons[position] = dom;
    };
  };
  return {
    tabsEl: undefined,
    scrollerEl: undefined,
    tabs: [], // {data, el}
    tabRow: undefined,
    tabIndicatorEl: undefined,
    selectedTabIndex: selectedTabIndex,
    previousSelectedTab: undefined,
    managesScroll: attrs.scrollable && !__WEBPACK_IMPORTED_MODULE_0_polythene_core__["h" /* isTouch */],
    scrollButtonAtStart: scrollButtonAtStart,
    scrollButtonAtEnd: scrollButtonAtEnd,
    scrollButtons: {
      start: undefined,
      end: undefined
    },
    registerTabButton: registerTabButton,
    registerScrollButton: registerScrollButton,
    cleanUp: undefined, // set in onMount
    redrawOnUpdate: createStream.merge([selectedTabIndex, scrollButtonAtStart, scrollButtonAtEnd])
  };
};

var onMount = function onMount(vnode) {
  var dom = vnode.dom;
  var state = vnode.state;
  var attrs = vnode.attrs;

  state.tabsEl = dom;
  if (!attrs.hideIndicator) {
    state.tabIndicatorEl = dom.querySelector("." + classes.indicator);
  }
  state.scrollerEl = dom.querySelector("." + classes.tabRow);

  // A promise can't resolve during the oncreate loop
  // The Mithril draw loop is synchronous - there is no delay between one this oncreate and the tab button's oncreate
  whenCreateDone().then(function () {
    if (state.tabs && attrs.largestWidth) {
      var widths = state.tabs.map(function (tabData) {
        return tabData.dom.getBoundingClientRect().width;
      });
      var largest = widths.sort(sortByLargestWidth)[0];
      state.tabs.forEach(function (tabData) {
        return tabData.dom.style.width = largest + "px";
      });
    }
    // Align first scrollable tab to title
    if (attrs.scrollable) {
      alignToTitle(state);
    }
    // Handle scroll
    if (state.managesScroll) {
      createRightButtonOffset(state);
    }
    setSelectedTab(state, attrs, state.selectedTabIndex(), false);
  });

  var onResize = function onResize() {
    return setSelectedTab(state, attrs, state.selectedTabIndex(), false);
  };

  Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["n" /* subscribe */])("resize", onResize), state.cleanUp = function () {
    return Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["p" /* unsubscribe */])("resize", onResize);
  };
};

var onUnMount = function onUnMount(_ref) {
  var state = _ref.state;
  return state.cleanUp();
};

var createProps = function createProps(vnode, _ref2) {
  var k = _ref2.keys;

  var state = vnode.state;
  var attrs = vnode.attrs;
  var autofit = attrs.scrollable || attrs.centered ? false : attrs.autofit ? true : false;

  // Keep selected tab up to date
  if (attrs.selectedTab !== undefined && state.previousSelectedTab !== attrs.selectedTab) {
    setSelectedTab(state, attrs, attrs.selectedTab, true);
  }
  state.previousSelectedTab = attrs.selectedTab;

  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.scrollable ? classes.scrollable : null, state.scrollButtonAtStart() ? classes.isAtStart : null, state.scrollButtonAtEnd() ? classes.isAtEnd : null, attrs.activeSelected ? classes.activeSelectable : null, autofit ? classes.isAutofit : null, attrs.compact ? classes.compactTabs : null, attrs.menu ? classes.isMenu : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  });
};

var createContent = function createContent(vnode, _ref3) {
  var h = _ref3.renderer,
      k = _ref3.keys,
      Tab = _ref3.Tab,
      ScrollButton = _ref3.ScrollButton;

  var state = vnode.state;
  var attrs = vnode.attrs;

  var buttons = attrs.content ? attrs.content : attrs.tabs ? attrs.tabs : attrs.children || vnode.children || [];

  if (buttons.length === 0) {
    console.error("No tabs specified"); // eslint-disable-line no-console
  }

  var tabRowButtons = buttons.map(function () {
    var buttonOpts = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var index = arguments[1];

    var buttonOptsCombined = _extends({}, buttonOpts, {
      // These options can be overridden by `all`
      selected: index === state.selectedTabIndex(),
      animateOnTap: attrs.animateOnTap !== false ? true : false
    }, attrs.all, {
      // Internal options, should not get overridden
      index: index,
      key: "tab-" + index,
      register: state.registerTabButton(state),
      onSelect: function onSelect() {
        return setSelectedTab(state, attrs, index, attrs.noIndicatorSlide ? false : true);
      }
    });
    return h(Tab, buttonOptsCombined);
  });

  var tabRow = attrs.scrollable ? tabRowButtons.concat([
  // offset for right scroll button
  h("div", {
    key: "offset",
    className: classes.scrollButtonOffset
  })]) : tabRowButtons;

  var scrollButtonAtStart = void 0,
      scrollButtonAtEnd = void 0;
  if (attrs.scrollable) {
    scrollButtonAtStart = h(ScrollButton, _extends({}, {
      key: "backward",
      icon: attrs.scrollIconBackward,
      className: classes.scrollButtonAtStart,
      position: "start",
      register: state.registerScrollButton(state),
      events: _defineProperty({}, k.onclick, function (e) {
        return handleScrollButtonClick(state, attrs, e, "backward");
      })
    }));
    scrollButtonAtEnd = h(ScrollButton, _extends({}, {
      key: "forward",
      icon: attrs.scrollIconForward,
      className: classes.scrollButtonAtEnd,
      position: "end",
      register: state.registerScrollButton(state),
      events: _defineProperty({}, k.onclick, function (e) {
        return handleScrollButtonClick(state, attrs, e, "forward");
      })
    }));
  }

  var tabIndicator = attrs.hideIndicator ? null : h("div", {
    key: "indicator",
    className: classes.indicator
  });

  return [attrs.scrollable ? scrollButtonAtStart : null, h("div", {
    key: "tabrow",
    className: [classes.tabRow, attrs.centered ? classes.tabRowCentered : null, attrs.scrollable ? classes.tabRowIndent : null].join(" ")
  }, [tabRow, tabIndicator]), attrs.scrollable ? scrollButtonAtEnd : null];
};

var tabs = Object.freeze({
	getInitialState: getInitialState,
	onMount: onMount,
	onUnMount: onUnMount,
	createProps: createProps,
	createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty$1(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

// Don't export 'element': it will be the wrapped Button component (set in polythene-xxx-tabs/tab)

var onMount$1 = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var attrs = vnode.attrs;
  attrs.register(attrs.index, {
    attrs: attrs,
    dom: dom
  });
};

var createProps$1 = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      k = _ref.keys,
      Icon = _ref.Icon;

  var attrs = vnode.attrs;
  // Let internal onclick function co-exist with passed button option
  attrs.events = attrs.events || {};
  attrs.events[k.onclick] = attrs.events[k.onclick] || function () {};
  return _extends$1({}, attrs, {
    content: h("div", { className: classes.tabContent }, [attrs.icon ? h(Icon, attrs.icon) : null, attrs.label ? h("div", { className: classes.label }, h("span", attrs.label)) : null]),
    className: [classes.tab, attrs.icon && attrs.label ? classes.tabHasIcon : null, attrs.className || attrs[k.class]].join(" "),
    selected: attrs.selected,
    wash: false,
    ripple: true,
    events: _extends$1({}, attrs.events, _defineProperty$1({}, k.onclick, function (e) {
      attrs.onSelect();
      attrs.events[k.onclick](e);
    }))
  });
};

var createContent$1 = function createContent() {
  return null;
};

var tab = Object.freeze({
	onMount: onMount$1,
	createProps: createProps$1,
	createContent: createContent$1
});

// Don't export 'element': it will be the wrapped IconButton component (set in polythene-xxx-tabs/scroll-button)

var arrowBackward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z\"/></svg>";
var arrowForward = "<svg width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>";

var onMount$2 = function onMount(vnode) {
  var dom = vnode.dom;
  if (!dom) {
    return;
  }
  var attrs = vnode.attrs;
  attrs.register(attrs.position, dom);
};

var createProps$2 = function createProps(vnode, _ref) {
  var h = _ref.renderer,
      k = _ref.keys;

  var attrs = vnode.attrs;
  var icon = attrs.position === "start" ? attrs.icon || { svg: { content: h.trust(arrowBackward) } } : attrs.icon || { svg: { content: h.trust(arrowForward) } };
  return {
    className: [classes.scrollButton, attrs.className || attrs[k.class]].join(" "),
    icon: icon,
    ripple: { center: true },
    events: attrs.events
  };
};

var scrollButton = Object.freeze({
	onMount: onMount$2,
	createProps: createProps$2
});




/***/ }),
/* 73 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ToolbarTitle; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_core_toolbar__ = __webpack_require__(74);



var Toolbar = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_toolbar__["a" /* coreToolbar */]);

Toolbar.displayName = "Toolbar";

var ToolbarTitle = Object(__WEBPACK_IMPORTED_MODULE_0_polythene_mithril_base__["b" /* ViewComponent */])(__WEBPACK_IMPORTED_MODULE_1_polythene_core_toolbar__["b" /* coreToolbarTitle */]);

ToolbarTitle.displayName = "ToolbarTitle";




/***/ }),
/* 74 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return toolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return toolbarTitle; });
/* unused harmony export vars */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_polythene_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_polythene_theme__ = __webpack_require__(2);



var classes = {

  // Toolbar

  component: "pe-toolbar",

  // states
  compact: "pe-toolbar--compact",

  // Toolbar title

  // elements
  title: "pe-toolbar__title",

  // states
  centeredTitle: "pe-toolbar__title--center",
  indentedTitle: "pe-toolbar__title--indent"
};

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.component, attrs.compact ? classes.compact : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.content ? attrs.content : attrs.children || vnode.children;
};

var toolbar = Object.freeze({
	getElement: getElement,
	createProps: createProps,
	createContent: createContent
});

var _extends$1 = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var getElement$1 = function getElement(vnode) {
  return vnode.attrs.element || "div";
};

var createProps$1 = function createProps(vnode, _ref) {
  var k = _ref.keys;

  var attrs = vnode.attrs;
  return _extends$1({}, Object(__WEBPACK_IMPORTED_MODULE_0_polythene_core__["c" /* filterSupportedAttributes */])(attrs), {
    className: [classes.title, attrs.indent ? classes.indentedTitle : null, attrs.center ? classes.centeredTitle : null, attrs.tone === "dark" ? "pe-dark-tone" : null, attrs.tone === "light" ? "pe-light-tone" : null, attrs.className || attrs[k.class]].join(" ")
  }, attrs.events);
};

var createContent$1 = function createContent(vnode) {
  var attrs = vnode.attrs;
  return attrs.text ? attrs.text : attrs.content ? attrs.content : attrs.children || vnode.children || attrs;
};

var toolbarTitle = Object.freeze({
	getElement: getElement$1,
	createProps: createProps$1,
	createContent: createContent$1
});

var rgba = function rgba(colorStr) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
  return "rgba(" + colorStr + ", " + opacity + ")";
};

var padding_side = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 2 - 12; // 16 - 12 = 4
var padding_side_large = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 3 - 12; // 24 - 12 = 12
var title_padding = 12; // icon padding
var title_after_icon_padding = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 9 - __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 6 - padding_side; // 72 - 48 - 4 = 20
var height = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 7; // 56
var height_compact = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 6; // 48
var height_large = __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].grid_unit_component * 8; // 64

var vars$1 = {
  padding_side: padding_side,
  padding_side_large: padding_side_large,
  height: height,
  height_compact: height_compact,
  height_large: height_large,

  // title vars
  title_padding: title_padding,
  title_after_icon_padding: title_after_icon_padding,
  indent: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].unit_indent,
  transition_duration: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].animation_duration,
  font_size: 18,
  line_height: __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].line_height,

  // color vars
  color_light_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_light_text_primary),
  color_dark_text: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_foreground, __WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].blend_dark_text_primary),

  color_light_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_light_background),
  color_dark_background: rgba(__WEBPACK_IMPORTED_MODULE_1_polythene_theme__["a" /* vars */].color_dark_background)
};




/***/ }),
/* 75 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 76 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(78)


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

/* eslint-disable */
;(function() {
"use strict"
/* eslint-enable */

var guid = 0, HALT = {}
function createStream() {
	function stream() {
		if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0])
		return stream._state.value
	}
	initStream(stream)

	if (arguments.length > 0 && arguments[0] !== HALT) updateStream(stream, arguments[0])

	return stream
}
function initStream(stream) {
	stream.constructor = createStream
	stream._state = {id: guid++, value: undefined, state: 0, derive: undefined, recover: undefined, deps: {}, parents: [], endStream: undefined, unregister: undefined}
	stream.map = stream["fantasy-land/map"] = map, stream["fantasy-land/ap"] = ap, stream["fantasy-land/of"] = createStream
	stream.valueOf = valueOf, stream.toJSON = toJSON, stream.toString = valueOf

	Object.defineProperties(stream, {
		end: {get: function() {
			if (!stream._state.endStream) {
				var endStream = createStream()
				endStream.map(function(value) {
					if (value === true) {
						unregisterStream(stream)
						endStream._state.unregister = function(){unregisterStream(endStream)}
					}
					return value
				})
				stream._state.endStream = endStream
			}
			return stream._state.endStream
		}}
	})
}
function updateStream(stream, value) {
	updateState(stream, value)
	for (var id in stream._state.deps) updateDependency(stream._state.deps[id], false)
	if (stream._state.unregister != null) stream._state.unregister()
	finalize(stream)
}
function updateState(stream, value) {
	stream._state.value = value
	stream._state.changed = true
	if (stream._state.state !== 2) stream._state.state = 1
}
function updateDependency(stream, mustSync) {
	var state = stream._state, parents = state.parents
	if (parents.length > 0 && parents.every(active) && (mustSync || parents.some(changed))) {
		var value = stream._state.derive()
		if (value === HALT) return false
		updateState(stream, value)
	}
}
function finalize(stream) {
	stream._state.changed = false
	for (var id in stream._state.deps) stream._state.deps[id]._state.changed = false
}

function combine(fn, streams) {
	if (!streams.every(valid)) throw new Error("Ensure that each item passed to stream.combine/stream.merge is a stream")
	return initDependency(createStream(), streams, function() {
		return fn.apply(this, streams.concat([streams.filter(changed)]))
	})
}

function initDependency(dep, streams, derive) {
	var state = dep._state
	state.derive = derive
	state.parents = streams.filter(notEnded)

	registerDependency(dep, state.parents)
	updateDependency(dep, true)

	return dep
}
function registerDependency(stream, parents) {
	for (var i = 0; i < parents.length; i++) {
		parents[i]._state.deps[stream._state.id] = stream
		registerDependency(stream, parents[i]._state.parents)
	}
}
function unregisterStream(stream) {
	for (var i = 0; i < stream._state.parents.length; i++) {
		var parent = stream._state.parents[i]
		delete parent._state.deps[stream._state.id]
	}
	for (var id in stream._state.deps) {
		var dependent = stream._state.deps[id]
		var index = dependent._state.parents.indexOf(stream)
		if (index > -1) dependent._state.parents.splice(index, 1)
	}
	stream._state.state = 2 //ended
	stream._state.deps = {}
}

function map(fn) {return combine(function(stream) {return fn(stream())}, [this])}
function ap(stream) {return combine(function(s1, s2) {return s1()(s2())}, [stream, this])}
function valueOf() {return this._state.value}
function toJSON() {return this._state.value != null && typeof this._state.value.toJSON === "function" ? this._state.value.toJSON() : this._state.value}

function valid(stream) {return stream._state }
function active(stream) {return stream._state.state === 1}
function changed(stream) {return stream._state.changed}
function notEnded(stream) {return stream._state.state !== 2}

function merge(streams) {
	return combine(function() {
		return streams.map(function(s) {return s()})
	}, streams)
}

function scan(reducer, seed, stream) {
	var newStream = combine(function (s) {
		return seed = reducer(seed, s._state.value)
	}, [stream])

	if (newStream._state.state === 0) newStream(seed)

	return newStream
}

function scanMerge(tuples, seed) {
	var streams = tuples.map(function(tuple) {
		var stream = tuple[0]
		if (stream._state.state === 0) stream(undefined)
		return stream
	})

	var newStream = combine(function() {
		var changed = arguments[arguments.length - 1]

		streams.forEach(function(stream, idx) {
			if (changed.indexOf(stream) > -1) {
				seed = tuples[idx][1](seed, stream._state.value)
			}
		})

		return seed
	}, streams)

	return newStream
}

createStream["fantasy-land/of"] = createStream
createStream.merge = merge
createStream.combine = combine
createStream.scan = scan
createStream.scanMerge = scanMerge
createStream.HALT = HALT

if (true) module["exports"] = createStream
else if (typeof window.m === "function" && !("stream" in window.m)) window.m.stream = createStream
else window.m = {stream : createStream}

}());


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function StopValidationError() {
  this.stack = new Error().stack;
}

function ValidationError(msg) {
  this.message = msg;
  this.stack = new Error(msg).stack;
}

var clone = function clone(data) {
  if (!data) return data;
  return JSON.parse(JSON.stringify(data));
};

var isEqual = function isEqual(val1, val2) {
  return JSON.stringify(val1) === JSON.stringify(val2);
};

var Field = function () {
  function Field() {
    var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

    _classCallCheck(this, Field);

    this.error = undefined;
    this.previousValue = undefined;
    this.currentValue = undefined;
    this.initialValue = undefined;

    this.config = config;
    this.defaultValue = this.initialValue = !config || config.default === undefined || config.default === null ? undefined : clone(config.default);
    // will call onChange callback if exists
    this.setData(this.defaultValue, true);
    this.makePrestine();
  }

  _createClass(Field, [{
    key: "clean",
    value: function clean(newVal) {
      return newVal;
    }
  }, {
    key: "modify",
    value: function modify(newVal, preVal) {
      return newVal;
    }
  }, {
    key: "triggerOnError",
    value: function triggerOnError() {
      var callback = this.config.onError;
      callback && callback(clone(this.getError()), this);

      if (this.parent) this.parent.triggerOnError();
    }
  }, {
    key: "triggerOnChange",
    value: function triggerOnChange() {
      var callback = this.config.onChange;
      callback && callback(clone(this.currentValue), this);

      this.parent && this.parent.triggerOnChange();
    }
  }, {
    key: "setData",
    value: function setData(value, skipTrigger) {
      if (isEqual(this.currentValue, value)) return;
      this.previousValue = clone(this.currentValue);

      this.currentValue = this.modify(clone(value), clone(this.previousValue));

      if (skipTrigger) return;
      var debounce = this.config.debounce;
      if (debounce) {
        this.timer && clearTimeout(this.timer);
        this.timer = setTimeout(this.triggerOnChange.bind(this), debounce);
      } else {
        this.triggerOnChange();
      }
    }
  }, {
    key: "getData",
    value: function getData() {
      return clone(this.currentValue);
    }
  }, {
    key: "getCleanData",
    value: function getCleanData() {
      return this.clean(this.getData());
    }
  }, {
    key: "isValid",
    value: function isValid(skipAttachError) {
      var error = void 0;
      try {
        this.validate(this.currentValue, this.parent && this.parent.getData(), this.fieldName);
        error = undefined;
      } catch (err) {
        if (err instanceof ValidationError) {
          error = err.message;
        } else {
          throw err;
        }
      }
      !skipAttachError && this.setError(error);
      return !error;
    }
  }, {
    key: "setError",
    value: function setError(error, skipTrigger) {
      if (this.error === error) return;
      this.error = error || undefined;

      if (skipTrigger) return;
      this.triggerOnError();
    }
  }, {
    key: "getError",
    value: function getError() {
      return this.error;
    }
  }, {
    key: "isDirty",
    value: function isDirty() {
      return this.previousValue !== this.currentValue;
    }
  }, {
    key: "makePrestine",
    value: function makePrestine() {
      this.previousValue = clone(this.currentValue);
      this.initialValue = clone(this.currentValue);
      this.setError(undefined);
    }
  }, {
    key: "reset",
    value: function reset() {
      this.setData(clone(this.initialValue));
      this.makePrestine();
    }
  }, {
    key: "setAndValidate",
    value: function setAndValidate(value) {
      this.setData(value);
      this.isValid();
      return this.getError();
    }
  }], [{
    key: "new",
    value: function _new(config) {
      return new this(config);
    }
  }]);

  return Field;
}();

var Form = function () {
  function Form() {
    _classCallCheck(this, Form);
  }

  _createClass(Form, [{
    key: "toggleGetNotified",
    value: function toggleGetNotified() {
      this.getNotified = !this.getNotified;
    }
  }, {
    key: "setData",
    value: function setData(data, skipTrigger) {
      this.toggleGetNotified();
      for (var prop in data) {
        if (this._fields.indexOf(prop) !== -1) {
          this[prop].setData(data[prop], skipTrigger);
        }
      }
      this.toggleGetNotified();
      if (skipTrigger) return;
      this.triggerOnChange();
    }
  }, {
    key: "triggerOnChange",
    value: function triggerOnChange() {
      var callback = this.config.onChange;
      this.getNotified && callback && callback(this.getData(), this);
    }
  }, {
    key: "triggerOnError",
    value: function triggerOnError() {
      var callback = this.config.onError;
      this.getNotified && callback && callback(this.getError(), this);
    }
  }, {
    key: "getData",
    value: function getData() {
      var _this = this;

      return this._fields.reduce(function (acc, fieldName) {
        acc[fieldName] = _this[fieldName].getCleanData();
        return acc;
      }, {});
    }
  }, {
    key: "getUpdates",
    value: function getUpdates() {
      var _this2 = this;

      return this._fields.reduce(function (acc, fieldName) {
        if (_this2[fieldName].isDirty()) {
          acc[fieldName] = _this2[fieldName].getData();
        }
        return acc;
      }, {});
    }
  }, {
    key: "setError",
    value: function setError(errors, skipTrigger) {
      this.toggleGetNotified();
      for (var field in errors) {
        if (this._fields.indexOf(field) !== -1) {
          this[field].setError(errors[field], skipTrigger);
        }
      }
      this.toggleGetNotified();

      if (skipTrigger) return;
      this.triggerOnError();
    }
  }, {
    key: "getError",
    value: function getError() {
      var _this3 = this;

      return this._fields.reduce(function (acc, fieldName) {
        acc[fieldName] = _this3[fieldName].getError();
        return acc;
      }, {});
    }
  }, {
    key: "isDirty",
    value: function isDirty() {
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = this._fields[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var field = _step.value;

          if (this[field].isDirty()) return true;
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return false;
    }
  }, {
    key: "makePrestine",
    value: function makePrestine() {
      var _this4 = this;

      this.toggleGetNotified();
      this._fields.forEach(function (field) {
        _this4[field].makePrestine();
      });
      this.toggleGetNotified();
      this.triggerOnError();
    }
  }, {
    key: "reset",
    value: function reset() {
      var _this5 = this;

      this.toggleGetNotified();
      this._fields.forEach(function (field) {
        _this5[field].reset();
      });
      this.toggleGetNotified();
      this.triggerOnError();
      this.triggerOnChange();
    }
  }, {
    key: "isValid",
    value: function isValid(skipAttachError) {
      var _this6 = this;

      var status = void 0;
      this.toggleGetNotified();

      try {
        status = this._fields.reduce(function (acc, field) {
          var validity = _this6[field].isValid(skipAttachError);
          if (!validity && _this6.config.stopOnError) {
            throw new StopValidationError();
          }
          return validity && acc;
        }, true);
      } catch (err) {
        if (err instanceof StopValidationError) {
          status = false;
        } else {
          throw err;
        }
      }

      this.toggleGetNotified();
      !skipAttachError && this.triggerOnError();
      return status;
    }
  }], [{
    key: "new",
    value: function _new() {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var form = new this();
      form._fields = [];
      form.config = config;
      form.getNotified = true;

      for (var fieldName in form) {
        var field = form[fieldName];
        var index = field.index;
        if (field instanceof Field) {
          field.parent = form;
          field.fieldName = fieldName;

          if (index) {
            form._fields[index] = fieldName;
          } else {
            form._fields.push(fieldName);
          }
        }
      }

      config.data && form.setData(config.data, true);
      return form;
    }
  }]);

  return Form;
}();

module.exports = {
  Form: Form,
  Field: Field,
  ValidationError: ValidationError
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// src/models/User.js
var m = __webpack_require__(5);

var crashersJson = "\n{\n\t\"crashers\": [\n\t\t{\n\t\t    \"id\": 2,\n\t\t    \"key\": 2,\n\t\t\t\"forum\": \"Ilona\",\n\t\t\t\"name\": \"Ilona Ciunaite\",\n\t\t\t\"role\": \"guide\",\n\t\t\t\"color\": \"red\",\n\t\t\t\"location\": \"Playa del Carmen, Quintana Roo, Mexico\",\n\t\t\t\"distance\": 5000,\n\t\t\t\"geo\": {\n\t\t\t     \"latitude\": 20.6296,\n\t\t\t     \"longitude\": -87.0739\n\t\t\t     }\n\t\t},\n\t\t{\n\t\t    \"id\": 48,\n\t\t    \"key\": 48,\n\t\t\t\"forum\": \"jjm109\",\n\t\t\t\"name\": \"James Myers\",\n\t\t\t\"role\": \"crasher\",\n\t\t\t\"color\": \"blue\",\n\t\t\t\"location\": \"Paradise, CA, USA\",\n\t\t\t\"distance\": 0,\n\t\t\t\"geo\": {\n    \t\t\t\"latitude\": 39.7596,\n\t       \t\t\"longitude\": -121.6219\n\t       \t\t}\n\t\t},\n        {\n            \"id\": 10851,\n            \"key\": 10851,\n            \"forum\": \"forgetmenot\",\n            \"name\": \"Kay Nieminen\",\n            \"role\": \"guide\",\n            \"color\": \"red\",\n            \"location\": \"Australia\",\n            \"distance\": 15000,\n            \"geo\": {\n                \"latitude\": -25.27,\n                \"longitude\": 133.77\n                }\n        }\n\t],\n\t\"description\": \"LU Crashers.\",\n\t\"name\": \"LU Crashers\"\n}\n";
var Users = {
  list: [],
  error: null,
  searchAttrs: {},
  loadSearchUser: '/app.php/mapusers/xhr/searchUser',
  loadSearchLocation: '/app.php/mapusers/xhr/searchLocation',
  searchUsers: function searchUsers(attrs) {
    var data = {};
    var url = null;

    if (!attrs) {
      attrs = {};
    }

    if (attrs.radius !== undefined) {
      data.radius = String(attrs.radius);
    }

    if (attrs.limit !== undefined) {
      data.limit = String(attrs.limit);
    }

    if (!attrs.location) {
      if (attrs.user !== undefined) {
        data.name = attrs.user;
      }

      url = this.loadSearchUser;
    } else {
      data.location = attrs.location;
      url = this.loadSearchLocation;
    }

    console.log("searchUsers qs=", data);
    return m.request({
      method: "GET",
      url: url,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      },
      data: data
    }).then(function (result) {
      console.log("searchUser: ", result);
      Users.list = result; // console.log('Users.list = ', Users.list)
    }).catch(function (e) {
      Users.error = e.message;
      console.log("search get error: ", Users.error);
      Users.list = JSON.parse(crashersJson).crashers;
      console.log('Mock Users.list = ', Users.list);
      return Promise.resolve(Users.list);
    });
  }
};
module.exports = Users;

/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {"GLASS":"M61.164-57.743q0 1.26-1.548 2.808l-22.752 22.752v27.648h11.52q.936 0 1.62.684t.684 1.62-.684 1.62-1.62.684h-32.256q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h11.52v-27.648l-22.752-22.752q-1.548-1.548-1.548-2.808 0-.828.648-1.314t1.368-.63 1.548-.144h50.688q.828 0 1.548.144t1.368.63.648 1.314z","MUSIC":"M55.296-56.375v40.32q0 1.8-1.224 3.204t-3.096 2.178-3.726 1.152-3.474.378-3.474-.378-3.726-1.152-3.096-2.178-1.224-3.204 1.224-3.204 3.096-2.178 3.726-1.152 3.474-.378q3.78 0 6.912 1.404v-19.332l-27.648 8.532v25.524q0 1.8-1.224 3.204t-3.096 2.178-3.726 1.152-3.474.378-3.474-.378-3.726-1.152-3.096-2.178-1.224-3.204 1.224-3.204 3.096-2.178 3.726-1.152 3.474-.378q3.78 0 6.912 1.404v-34.812q0-1.116.684-2.034t1.764-1.278l29.952-9.216q.432-.144 1.008-.144 1.44 0 2.448 1.008t1.008 2.448z","SEARCH":"M41.472-34.487q0-6.66-4.734-11.394t-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734 11.394-4.734 4.734-11.394zm18.432 29.952q0 1.872-1.368 3.24t-3.24 1.368q-1.944 0-3.24-1.368l-12.348-12.312q-6.444 4.464-14.364 4.464-5.148 0-9.846-1.998t-8.1-5.4-5.4-8.1-1.998-9.846 1.998-9.846 5.4-8.1 8.1-5.4 9.846-1.998 9.846 1.998 8.1 5.4 5.4 8.1 1.998 9.846q0 7.92-4.464 14.364l12.348 12.348q1.332 1.332 1.332 3.24z","ENVELOPE_O":"M59.904-10.295v-27.648q-1.152 1.296-2.484 2.376-9.648 7.416-15.336 12.168-1.836 1.548-2.988 2.412t-3.114 1.746-3.69.882h-.072q-1.728 0-3.69-.882t-3.114-1.746-2.988-2.412q-5.688-4.752-15.336-12.168-1.332-1.08-2.484-2.376v27.648q0 .468.342.81t.81.342h52.992q.468 0 .81-.342t.342-.81zm0-37.836v-.882l-.018-.468-.108-.45-.198-.324-.324-.27-.504-.09h-52.992q-.468 0-.81.342t-.342.81q0 6.048 5.292 10.224 6.948 5.472 14.436 11.412.216.18 1.26 1.062t1.656 1.35 1.602 1.134 1.818.99 1.548.324h.072q.72 0 1.548-.324t1.818-.99 1.602-1.134 1.656-1.35 1.26-1.062q7.488-5.94 14.436-11.412 1.944-1.548 3.618-4.158t1.674-4.734zm4.608-1.332v39.168q0 2.376-1.692 4.068t-4.068 1.692h-52.992q-2.376 0-4.068-1.692t-1.692-4.068v-39.168q0-2.376 1.692-4.068t4.068-1.692h52.992q2.376 0 4.068 1.692t1.692 4.068z","HEART":"M32.256-4.535q-.936 0-1.584-.648l-22.464-21.672q-.36-.288-.99-.936t-1.998-2.358-2.448-3.51-1.926-4.356-.846-4.968q0-7.92 4.572-12.384t12.636-4.464q2.232 0 4.554.774t4.32 2.088 3.438 2.466 2.736 2.448q1.296-1.296 2.736-2.448t3.438-2.466 4.32-2.088 4.554-.774q8.064 0 12.636 4.464t4.572 12.384q0 7.956-8.244 16.2l-22.428 21.6q-.648.648-1.584.648z","STAR":"M59.904-41.147q0 .792-.936 1.728l-13.068 12.744 3.096 18q.036.252.036.72 0 .756-.378 1.278t-1.098.522q-.684 0-1.44-.432l-16.164-8.496-16.164 8.496q-.792.432-1.44.432-.756 0-1.134-.522t-.378-1.278q0-.216.072-.72l3.096-18-13.104-12.744q-.9-.972-.9-1.728 0-1.332 2.016-1.656l18.072-2.628 8.1-16.38q.684-1.476 1.764-1.476t1.764 1.476l8.1 16.38 18.072 2.628q2.016.324 2.016 1.656z","STAR_O":"M40.932-28.295l11.016-10.692-15.192-2.232-6.804-13.752-6.804 13.752-15.192 2.232 11.016 10.692-2.628 15.156 13.608-7.164 13.572 7.164zm18.972-12.852q0 .792-.936 1.728l-13.068 12.744 3.096 18q.036.252.036.72 0 1.8-1.476 1.8-.684 0-1.44-.432l-16.164-8.496-16.164 8.496q-.792.432-1.44.432-.756 0-1.134-.522t-.378-1.278q0-.216.072-.72l3.096-18-13.104-12.744q-.9-.972-.9-1.728 0-1.332 2.016-1.656l18.072-2.628 8.1-16.38q.684-1.476 1.764-1.476t1.764 1.476l8.1 16.38 18.072 2.628q2.016.324 2.016 1.656z","USER":"M50.688-13.859q0 4.32-2.628 6.822t-6.984 2.502h-31.464q-4.356 0-6.984-2.502t-2.628-6.822q0-1.908.126-3.726t.504-3.924.954-3.906 1.548-3.51 2.232-2.916 3.078-1.926 4.014-.72q.324 0 1.512.774t2.682 1.728 3.888 1.728 4.806.774 4.806-.774 3.888-1.728 2.682-1.728 1.512-.774q2.196 0 4.014.72t3.078 1.926 2.232 2.916 1.548 3.51.954 3.906.504 3.924.126 3.726zm-11.52-32.148q0 5.724-4.05 9.774t-9.774 4.05-9.774-4.05-4.05-9.774 4.05-9.774 9.774-4.05 9.774 4.05 4.05 9.774z","FILM":"M13.824-6.839v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm0-13.824v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm0-13.824v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm36.864 27.648v-18.432q0-.936-.684-1.62t-1.62-.684h-27.648q-.936 0-1.62.684t-.684 1.62v18.432q0 .936.684 1.62t1.62.684h27.648q.936 0 1.62-.684t.684-1.62zm-36.864-41.472v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm50.688 41.472v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm-13.824-27.648v-18.432q0-.936-.684-1.62t-1.62-.684h-27.648q-.936 0-1.62.684t-.684 1.62v18.432q0 .936.684 1.62t1.62.684h27.648q.936 0 1.62-.684t.684-1.62zm13.824 13.824v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm0-13.824v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm0-13.824v-4.608q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm4.608-5.76v48.384q0 2.376-1.692 4.068t-4.068 1.692h-57.6q-2.376 0-4.068-1.692t-1.692-4.068v-48.384q0-2.376 1.692-4.068t4.068-1.692h57.6q2.376 0 4.068 1.692t1.692 4.068z","TH_LARGE":"M27.648-27.575v13.824q0 1.872-1.368 3.24t-3.24 1.368h-18.432q-1.872 0-3.24-1.368t-1.368-3.24v-13.824q0-1.872 1.368-3.24t3.24-1.368h18.432q1.872 0 3.24 1.368t1.368 3.24zm0-27.648v13.824q0 1.872-1.368 3.24t-3.24 1.368h-18.432q-1.872 0-3.24-1.368t-1.368-3.24v-13.824q0-1.872 1.368-3.24t3.24-1.368h18.432q1.872 0 3.24 1.368t1.368 3.24zm32.256 27.648v13.824q0 1.872-1.368 3.24t-3.24 1.368h-18.432q-1.872 0-3.24-1.368t-1.368-3.24v-13.824q0-1.872 1.368-3.24t3.24-1.368h18.432q1.872 0 3.24 1.368t1.368 3.24zm0-27.648v13.824q0 1.872-1.368 3.24t-3.24 1.368h-18.432q-1.872 0-3.24-1.368t-1.368-3.24v-13.824q0-1.872 1.368-3.24t3.24-1.368h18.432q1.872 0 3.24 1.368t1.368 3.24z","TH":"M18.432-19.511v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm0-18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm23.04 18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm-23.04-36.864v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm23.04 18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm23.04 18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm-23.04-36.864v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm23.04 18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm0-18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448z","TH_LIST":"M18.432-19.511v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm0-18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm46.08 18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-34.56q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h34.56q1.44 0 2.448 1.008t1.008 2.448zm-46.08-36.864v6.912q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448zm46.08 18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-34.56q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h34.56q1.44 0 2.448 1.008t1.008 2.448zm0-18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-34.56q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h34.56q1.44 0 2.448 1.008t1.008 2.448z","CHECK":"M60.156-44.063q0 1.44-1.008 2.448l-26.064 26.064-4.896 4.896q-1.008 1.008-2.448 1.008t-2.448-1.008l-4.896-4.896-13.032-13.032q-1.008-1.008-1.008-2.448t1.008-2.448l4.896-4.896q1.008-1.008 2.448-1.008t2.448 1.008l10.584 10.62 23.616-23.652q1.008-1.008 2.448-1.008t2.448 1.008l4.896 4.896q1.008 1.008 1.008 2.448z","TIMES":"M46.728-16.847q0 1.44-1.008 2.448l-4.896 4.896q-1.008 1.008-2.448 1.008t-2.448-1.008l-10.584-10.584-10.584 10.584q-1.008 1.008-2.448 1.008t-2.448-1.008l-4.896-4.896q-1.008-1.008-1.008-2.448t1.008-2.448l10.584-10.584-10.584-10.584q-1.008-1.008-1.008-2.448t1.008-2.448l4.896-4.896q1.008-1.008 2.448-1.008t2.448 1.008l10.584 10.584 10.584-10.584q1.008-1.008 2.448-1.008t2.448 1.008l4.896 4.896q1.008 1.008 1.008 2.448t-1.008 2.448l-10.584 10.584 10.584 10.584q1.008 1.008 1.008 2.448z","SEARCH_PLUS":"M36.864-35.639v2.304q0 .468-.342.81t-.81.342h-8.064v8.064q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-8.064h-8.064q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h8.064v-8.064q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81v8.064h8.064q.468 0 .81.342t.342.81zm4.608 1.152q0-6.66-4.734-11.394t-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734 11.394-4.734 4.734-11.394zm18.432 29.952q0 1.908-1.35 3.258t-3.258 1.35q-1.944 0-3.24-1.368l-12.348-12.312q-6.444 4.464-14.364 4.464-5.148 0-9.846-1.998t-8.1-5.4-5.4-8.1-1.998-9.846 1.998-9.846 5.4-8.1 8.1-5.4 9.846-1.998 9.846 1.998 8.1 5.4 5.4 8.1 1.998 9.846q0 7.92-4.464 14.364l12.348 12.348q1.332 1.332 1.332 3.24z","SEARCH_MINUS":"M36.864-35.639v2.304q0 .468-.342.81t-.81.342h-20.736q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h20.736q.468 0 .81.342t.342.81zm4.608 1.152q0-6.66-4.734-11.394t-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734 11.394-4.734 4.734-11.394zm18.432 29.952q0 1.908-1.35 3.258t-3.258 1.35q-1.944 0-3.24-1.368l-12.348-12.312q-6.444 4.464-14.364 4.464-5.148 0-9.846-1.998t-8.1-5.4-5.4-8.1-1.998-9.846 1.998-9.846 5.4-8.1 8.1-5.4 9.846-1.998 9.846 1.998 8.1 5.4 5.4 8.1 1.998 9.846q0 7.92-4.464 14.364l12.348 12.348q1.332 1.332 1.332 3.24z","POWER_OFF":"M55.296-32.183q0 5.616-2.196 10.728t-5.904 8.82-8.82 5.904-10.728 2.196-10.728-2.196-8.82-5.904-5.904-8.82-2.196-10.728q0-6.552 2.898-12.348t8.154-9.72q1.548-1.152 3.438-.9t3.006 1.8q1.152 1.512.882 3.402t-1.782 3.042q-3.528 2.664-5.454 6.516t-1.926 8.208q0 3.744 1.458 7.146t3.942 5.886 5.886 3.942 7.146 1.458 7.146-1.458 5.886-3.942 3.942-5.886 1.458-7.146q0-4.356-1.926-8.208t-5.454-6.516q-1.512-1.152-1.782-3.042t.882-3.402q1.116-1.548 3.024-1.8t3.42.9q5.256 3.924 8.154 9.72t2.898 12.348zm-23.04-27.648v23.04q0 1.872-1.368 3.24t-3.24 1.368-3.24-1.368-1.368-3.24v-23.04q0-1.872 1.368-3.24t3.24-1.368 3.24 1.368 1.368 3.24z","SIGNAL":"M9.216-12.599v6.912q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm13.824-4.608v11.52q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-11.52q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm13.824-9.216v20.736q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-20.736q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm13.824-13.824v34.56q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-34.56q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm13.824-18.432v52.992q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-52.992q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828z","GEAR":"M36.864-32.183q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516 2.7 6.516 6.516 2.7 6.516-2.7 2.7-6.516zm18.432-3.924v7.992q0 .432-.288.828t-.72.468l-6.66 1.008q-.684 1.944-1.404 3.276 1.26 1.8 3.852 4.968.36.432.36.9t-.324.828q-.972 1.332-3.564 3.888t-3.384 2.556q-.432 0-.936-.324l-4.968-3.888q-1.584.828-3.276 1.368-.576 4.896-1.044 6.696-.252 1.008-1.296 1.008h-7.992q-.504 0-.882-.306t-.414-.774l-1.008-6.624q-1.764-.576-3.24-1.332l-5.076 3.852q-.36.324-.9.324-.504 0-.9-.396-4.536-4.104-5.94-6.048-.252-.36-.252-.828 0-.432.288-.828.54-.756 1.836-2.394t1.944-2.538q-.972-1.8-1.476-3.564l-6.588-.972q-.468-.072-.756-.45t-.288-.846v-7.992q0-.432.288-.828t.684-.468l6.696-1.008q.504-1.656 1.404-3.312-1.44-2.052-3.852-4.968-.36-.432-.36-.864 0-.36.324-.828.936-1.296 3.546-3.87t3.402-2.574q.468 0 .936.36l4.968 3.852q1.584-.828 3.276-1.368.576-4.896 1.044-6.696.252-1.008 1.296-1.008h7.992q.504 0 .882.306t.414.774l1.008 6.624q1.764.576 3.24 1.332l5.112-3.852q.324-.324.864-.324.468 0 .9.36 4.644 4.284 5.94 6.12.252.288.252.792 0 .432-.288.828-.54.756-1.836 2.394t-1.944 2.538q.936 1.8 1.476 3.528l6.588 1.008q.468.072.756.45t.288.846z","TRASH_O":"M18.432-37.943v20.736q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-20.736q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828zm9.216 0v20.736q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-20.736q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828zm9.216 0v20.736q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-20.736q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828zm4.608 26.064v-34.128h-32.256v34.128q0 .792.252 1.458t.522.972.378.306h29.952q.108 0 .378-.306t.522-.972.252-1.458zm-24.192-38.736h16.128l-1.728-4.212q-.252-.324-.612-.396h-11.412q-.36.072-.612.396zm33.408 1.152v2.304q0 .504-.324.828t-.828.324h-3.456v34.128q0 2.988-1.692 5.166t-4.068 2.178h-29.952q-2.376 0-4.068-2.106t-1.692-5.094v-34.272h-3.456q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h11.124l2.52-6.012q.54-1.332 1.944-2.268t2.844-.936h11.52q1.44 0 2.844.936t1.944 2.268l2.52 6.012h11.124q.504 0 .828.324t.324.828z","HOME":"M50.688-28.727v17.28q0 .936-.684 1.62t-1.62.684h-13.824v-13.824h-9.216v13.824h-13.824q-.936 0-1.62-.684t-.684-1.62v-17.28l.018-.108.018-.108 20.7-17.064 20.7 17.064q.036.072.036.216zm8.028-2.484l-2.232 2.664q-.288.324-.756.396h-.108q-.468 0-.756-.252l-24.912-20.772-24.912 20.772q-.432.288-.864.252-.468-.072-.756-.396l-2.232-2.664q-.288-.36-.252-.846t.396-.774l25.884-21.564q1.152-.936 2.736-.936t2.736.936l8.784 7.344v-7.02q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v14.688l7.884 6.552q.36.288.396.774t-.252.846z","FILE_O":"M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08z","CLOCK_O":"M32.256-44.855v16.128q0 .504-.324.828t-.828.324h-11.52q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h8.064v-12.672q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828zm14.976 12.672q0-5.328-2.628-9.828t-7.128-7.128-9.828-2.628-9.828 2.628-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828zm8.064 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","ROAD":"M39.996-28.583v-.144l-.864-11.52q-.036-.468-.396-.81t-.828-.342h-6.696q-.468 0-.828.342t-.396.81l-.864 11.52v.144q-.036.432.288.72t.756.288h8.784q.432 0 .756-.288t.288-.72zm27.324 16.812q0 2.628-1.656 2.628h-25.344q.468 0 .792-.342t.288-.81l-.72-9.216q-.036-.468-.396-.81t-.828-.342h-9.792q-.468 0-.828.342t-.396.81l-.72 9.216q-.036.468.288.81t.792.342h-25.344q-1.656 0-1.656-2.628 0-1.944.936-4.176l15.012-37.584q.288-.684.936-1.188t1.368-.504h12.204q-.468 0-.828.342t-.396.81l-.54 6.912q-.036.504.288.828t.792.324h5.976q.468 0 .792-.324t.288-.828l-.54-6.912q-.036-.468-.396-.81t-.828-.342h12.204q.72 0 1.368.504t.936 1.188l15.012 37.584q.936 2.232.936 4.176z","DOWNLOAD":"M46.08-16.055q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm9.216 0q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm4.608-8.064v11.52q0 1.44-1.008 2.448t-2.448 1.008h-52.992q-1.44 0-2.448-1.008t-1.008-2.448v-11.52q0-1.44 1.008-2.448t2.448-1.008h16.74l4.86 4.896q2.088 2.016 4.896 2.016t4.896-2.016l4.896-4.896h16.704q1.44 0 2.448 1.008t1.008 2.448zm-11.7-20.484q.612 1.476-.504 2.52l-16.128 16.128q-.648.684-1.62.684t-1.62-.684l-16.128-16.128q-1.116-1.044-.504-2.52.612-1.404 2.124-1.404h9.216v-16.128q0-.936.684-1.62t1.62-.684h9.216q.936 0 1.62.684t.684 1.62v16.128h9.216q1.512 0 2.124 1.404z","ARROW_CIRCLE_O_DOWN":"M40.32-31.031q0 .432-.36.864l-11.484 11.484q-.396.324-.828.324t-.828-.324l-11.52-11.52q-.54-.576-.252-1.26.288-.72 1.08-.72h6.912v-12.672q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v12.672h6.912q.504 0 .828.324t.324.828zm-12.672-20.736q-5.328 0-9.828 2.628t-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828-2.628-9.828-7.128-7.128-9.828-2.628zm27.648 19.584q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","ARROW_CIRCLE_O_UP":"M40.248-32.903q-.288.72-1.08.72h-6.912v12.672q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-12.672h-6.912q-.504 0-.828-.324t-.324-.828q0-.432.36-.864l11.484-11.484q.396-.324.828-.324t.828.324l11.52 11.52q.54.576.252 1.26zm-12.6-18.864q-5.328 0-9.828 2.628t-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828-2.628-9.828-7.128-7.128-9.828-2.628zm27.648 19.584q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","INBOX":"M36.828-29.879h11.376l-.09-.288-.09-.288-7.632-17.856h-25.488l-7.632 17.856-.09.288-.09.288h11.376l3.42 6.912h11.52zm18.468 1.08v17.352q0 .936-.684 1.62t-1.62.684h-50.688q-.936 0-1.62-.684t-.684-1.62v-17.352q0-2.232.9-4.428l8.568-19.872q.36-.9 1.314-1.512t1.89-.612h29.952q.936 0 1.89.612t1.314 1.512l8.568 19.872q.9 2.196.9 4.428z","PLAY_CIRCLE_O":"M42.624-32.183q0 1.332-1.152 1.98l-19.584 11.52q-.54.324-1.152.324-.576 0-1.152-.288-1.152-.684-1.152-2.016v-23.04q0-1.332 1.152-2.016 1.188-.648 2.304.036l19.584 11.52q1.152.648 1.152 1.98zm4.608 0q0-5.328-2.628-9.828t-7.128-7.128-9.828-2.628-9.828 2.628-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828zm8.064 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","ROTATE_RIGHT":"M55.296-55.223v16.128q0 .936-.684 1.62t-1.62.684h-16.128q-1.512 0-2.124-1.44-.612-1.404.504-2.484l4.968-4.968q-5.328-4.932-12.564-4.932-3.744 0-7.146 1.458t-5.886 3.942-3.942 5.886-1.458 7.146 1.458 7.146 3.942 5.886 5.886 3.942 7.146 1.458q4.284 0 8.1-1.872t6.444-5.292q.252-.36.828-.432.504 0 .9.324l4.932 4.968q.324.288.342.738t-.27.81q-3.924 4.752-9.504 7.362t-11.772 2.61q-5.616 0-10.728-2.196t-8.82-5.904-5.904-8.82-2.196-10.728 2.196-10.728 5.904-8.82 8.82-5.904 10.728-2.196q5.292 0 10.242 1.998t8.802 5.634l4.68-4.644q1.044-1.116 2.52-.504 1.404.612 1.404 2.124z","REFRESH":"M54.396-26.423q0 .18-.036.252-2.304 9.648-9.648 15.642t-17.208 5.994q-5.256 0-10.17-1.98t-8.766-5.652l-4.644 4.644q-.684.684-1.62.684t-1.62-.684-.684-1.62v-16.128q0-.936.684-1.62t1.62-.684h16.128q.936 0 1.62.684t.684 1.62-.684 1.62l-4.932 4.932q2.556 2.376 5.796 3.672t6.732 1.296q4.824 0 9-2.34t6.696-6.444q.396-.612 1.908-4.212.288-.828 1.08-.828h6.912q.468 0 .81.342t.342.81zm.9-28.8v16.128q0 .936-.684 1.62t-1.62.684h-16.128q-.936 0-1.62-.684t-.684-1.62.684-1.62l4.968-4.968q-5.328-4.932-12.564-4.932-4.824 0-9 2.34t-6.696 6.444q-.396.612-1.908 4.212-.288.828-1.08.828h-7.164q-.468 0-.81-.342t-.342-.81v-.252q2.34-9.648 9.72-15.642t17.28-5.994q5.256 0 10.224 1.998t8.82 5.634l4.68-4.644q.684-.684 1.62-.684t1.62.684.684 1.62z","LIST_ALT":"M13.824-21.815v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm0-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm0-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm41.472 18.432v2.304q0 .468-.342.81t-.81.342h-34.56q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h34.56q.468 0 .81.342t.342.81zm0-9.216v2.304q0 .468-.342.81t-.81.342h-34.56q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h34.56q.468 0 .81.342t.342.81zm0-9.216v2.304q0 .468-.342.81t-.81.342h-34.56q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h34.56q.468 0 .81.342t.342.81zm4.608 25.344v-29.952q0-.468-.342-.81t-.81-.342h-52.992q-.468 0-.81.342t-.342.81v29.952q0 .468.342.81t.81.342h52.992q.468 0 .81-.342t.342-.81zm4.608-39.168v39.168q0 2.376-1.692 4.068t-4.068 1.692h-52.992q-2.376 0-4.068-1.692t-1.692-4.068v-39.168q0-2.376 1.692-4.068t4.068-1.692h52.992q2.376 0 4.068 1.692t1.692 4.068z","LOCK":"M11.52-36.791h18.432v-6.912q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516v6.912zm29.952 3.456v20.736q0 1.44-1.008 2.448t-2.448 1.008h-34.56q-1.44 0-2.448-1.008t-1.008-2.448v-20.736q0-1.44 1.008-2.448t2.448-1.008h1.152v-6.912q0-6.624 4.752-11.376t11.376-4.752 11.376 4.752 4.752 11.376v6.912h1.152q1.44 0 2.448 1.008t1.008 2.448z","FLAG":"M11.52-55.223q0 2.592-2.304 3.96v45.576q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-45.576q-2.304-1.368-2.304-3.96 0-1.908 1.35-3.258t3.258-1.35 3.258 1.35 1.35 3.258zm52.992 2.304v27.468q0 .9-.45 1.386t-1.422.99q-7.74 4.176-13.284 4.176-2.196 0-4.446-.792t-3.906-1.728-4.158-1.728-5.13-.792q-6.912 0-16.704 5.256-.612.324-1.188.324-.936 0-1.62-.684t-.684-1.62v-26.712q0-1.152 1.116-1.98.756-.504 2.844-1.548 8.496-4.32 15.156-4.32 3.852 0 7.2 1.044t7.884 3.168q1.368.684 3.168.684 1.944 0 4.23-.756t3.96-1.692 3.168-1.692 1.962-.756q.936 0 1.62.684t.684 1.62z","HEADPHONES":"M59.904-32.543q0 5.976-2.16 11.304l-.72 1.764-6.66 1.188q-.792 2.988-3.258 4.914t-5.634 1.926v1.152q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-20.736q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828v1.152q2.556 0 4.68 1.278t3.348 3.438l2.448-.432q1.044-3.42 1.044-6.948 0-5.328-3.168-10.044t-8.514-7.524-11.358-2.808-11.358 2.808-8.514 7.524-3.168 10.044q0 3.528 1.044 6.948l2.448.432q1.224-2.16 3.348-3.438t4.68-1.278v-1.152q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828v20.736q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-1.152q-3.168 0-5.634-1.926t-3.258-4.914l-6.66-1.188-.72-1.764q-2.16-5.328-2.16-11.304 0-5.436 2.412-10.476t6.444-8.73 9.576-5.886 11.52-2.196 11.52 2.196 9.576 5.886 6.444 8.73 2.412 10.476z","VOLUME_OFF":"M27.648-51.767v39.168q0 .936-.684 1.62t-1.62.684-1.62-.684l-11.988-11.988h-9.432q-.936 0-1.62-.684t-.684-1.62v-13.824q0-.936.684-1.62t1.62-.684h9.432l11.988-11.988q.684-.684 1.62-.684t1.62.684.684 1.62z","VOLUME_DOWN":"M27.648-51.767v39.168q0 .936-.684 1.62t-1.62.684-1.62-.684l-11.988-11.988h-9.432q-.936 0-1.62-.684t-.684-1.62v-13.824q0-.936.684-1.62t1.62-.684h9.432l11.988-11.988q.684-.684 1.62-.684t1.62.684.684 1.62zm13.824 19.584q0 2.736-1.53 5.094t-4.05 3.366q-.36.18-.9.18-.936 0-1.62-.666t-.684-1.638q0-.756.432-1.278t1.044-.9 1.224-.828 1.044-1.278.432-2.052-.432-2.052-1.044-1.278-1.224-.828-1.044-.9-.432-1.278q0-.972.684-1.638t1.62-.666q.54 0 .9.18 2.52.972 4.05 3.348t1.53 5.112z","VOLUME_UP":"M27.648-51.767v39.168q0 .936-.684 1.62t-1.62.684-1.62-.684l-11.988-11.988h-9.432q-.936 0-1.62-.684t-.684-1.62v-13.824q0-.936.684-1.62t1.62-.684h9.432l11.988-11.988q.684-.684 1.62-.684t1.62.684.684 1.62zm13.824 19.584q0 2.736-1.53 5.094t-4.05 3.366q-.36.18-.9.18-.936 0-1.62-.666t-.684-1.638q0-.756.432-1.278t1.044-.9 1.224-.828 1.044-1.278.432-2.052-.432-2.052-1.044-1.278-1.224-.828-1.044-.9-.432-1.278q0-.972.684-1.638t1.62-.666q.54 0 .9.18 2.52.972 4.05 3.348t1.53 5.112zm9.216 0q0 5.508-3.06 10.17t-8.1 6.786q-.468.18-.9.18-.972 0-1.656-.684t-.684-1.62q0-1.404 1.404-2.124 2.016-1.044 2.736-1.584 2.664-1.944 4.158-4.878t1.494-6.246-1.494-6.246-4.158-4.878q-.72-.54-2.736-1.584-1.404-.72-1.404-2.124 0-.936.684-1.62t1.62-.684q.468 0 .936.18 5.04 2.124 8.1 6.786t3.06 10.17zm9.216 0q0 8.28-4.572 15.21t-12.168 10.206q-.468.18-.936.18-.936 0-1.62-.684t-.684-1.62q0-1.296 1.404-2.124.252-.144.81-.378t.81-.378q1.656-.9 2.952-1.836 4.428-3.276 6.912-8.172t2.484-10.404-2.484-10.404-6.912-8.172q-1.296-.936-2.952-1.836-.252-.144-.81-.378t-.81-.378q-1.404-.828-1.404-2.124 0-.936.684-1.62t1.62-.684q.468 0 .936.18 7.596 3.276 12.168 10.206t4.572 15.21z","QRCODE":"M13.824-22.967v4.608h-4.608v-4.608h4.608zm0-27.648v4.608h-4.608v-4.608h4.608zm27.648 0v4.608h-4.608v-4.608h4.608zm-36.864 36.828h13.824v-13.788h-13.824v13.788zm0-27.612h13.824v-13.824h-13.824v13.824zm27.648 0h13.824v-13.824h-13.824v13.824zm-9.216 9.216v23.04h-23.04v-23.04h23.04zm18.432 18.432v4.608h-4.608v-4.608h4.608zm9.216 0v4.608h-4.608v-4.608h4.608zm0-18.432v13.824h-13.824v-4.608h-4.608v13.824h-4.608v-23.04h13.824v4.608h4.608v-4.608h4.608zm-27.648-27.648v23.04h-23.04v-23.04h23.04zm27.648 0v23.04h-23.04v-23.04h23.04z","BARCODE":"M2.268-9.143h-2.268v-50.688h2.268v50.688zm2.268-.036h-1.152v-50.652h1.152v50.652zm3.384 0h-1.116v-50.652h1.116v50.652zm5.652 0h-1.116v-50.652h1.116v50.652zm5.652 0h-2.232v-50.652h2.232v50.652zm4.536 0h-1.116v-50.652h1.116v50.652zm2.268 0h-1.116v-50.652h1.116v50.652zm2.268 0h-1.116v-50.652h1.116v50.652zm5.652 0h-2.268v-50.652h2.268v50.652zm5.652 0h-2.268v-50.652h2.268v50.652zm4.536 0h-2.268v-50.652h2.268v50.652zm4.536 0h-2.268v-50.652h2.268v50.652zm3.384 0h-2.268v-50.652h2.268v50.652zm6.804 0h-3.384v-50.652h3.384v50.652zm2.268 0h-1.152v-50.652h1.152v50.652zm3.384.036h-2.268v-50.688h2.268v50.688z","TAG":"M16.128-48.311q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm38.412 20.736q0 1.908-1.332 3.24l-17.676 17.712q-1.404 1.332-3.276 1.332-1.908 0-3.24-1.332l-25.74-25.776q-1.368-1.332-2.322-3.636t-.954-4.212v-14.976q0-1.872 1.368-3.24t3.24-1.368h14.976q1.908 0 4.212.954t3.672 2.322l25.74 25.704q1.332 1.404 1.332 3.276z","TAGS":"M16.128-48.311q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm38.412 20.736q0 1.908-1.332 3.24l-17.676 17.712q-1.404 1.332-3.276 1.332-1.908 0-3.24-1.332l-25.74-25.776q-1.368-1.332-2.322-3.636t-.954-4.212v-14.976q0-1.872 1.368-3.24t3.24-1.368h14.976q1.908 0 4.212.954t3.672 2.322l25.74 25.704q1.332 1.404 1.332 3.276zm13.824 0q0 1.908-1.332 3.24l-17.676 17.712q-1.404 1.332-3.276 1.332-1.296 0-2.124-.504t-1.908-1.62l16.92-16.92q1.332-1.332 1.332-3.24 0-1.872-1.332-3.276l-25.74-25.704q-1.368-1.368-3.672-2.322t-4.212-.954h8.064q1.908 0 4.212.954t3.672 2.322l25.74 25.704q1.332 1.404 1.332 3.276z","BOOK":"M59.004-47.231q1.44 2.052.648 4.644l-9.9 32.616q-.684 2.304-2.754 3.87t-4.41 1.566h-33.228q-2.772 0-5.346-1.926t-3.582-4.734q-.864-2.412-.072-4.572 0-.144.108-.972t.144-1.332q.036-.288-.108-.774t-.108-.702q.072-.396.288-.756t.594-.846.594-.846q.828-1.368 1.62-3.294t1.08-3.294q.108-.36.018-1.08t-.018-1.008q.108-.396.612-1.008t.612-.828q.756-1.296 1.512-3.312t.9-3.24q.036-.324-.09-1.152t.018-1.008q.144-.468.792-1.098t.792-.81q.684-.936 1.53-3.042t.99-3.474q.036-.288-.108-.918t-.072-.954q.072-.288.324-.648t.648-.828.612-.756q.288-.432.594-1.098t.54-1.26.576-1.296.702-1.152.954-.846 1.296-.414 1.71.198l-.036.108q1.368-.324 1.836-.324h27.396q2.664 0 4.104 2.016t.648 4.68l-9.864 32.616q-1.296 4.284-2.574 5.526t-4.626 1.242h-31.284q-.972 0-1.368.54-.396.576-.036 1.548.864 2.52 5.184 2.52h33.228q1.044 0 2.016-.558t1.26-1.494l10.8-35.532q.252-.792.18-2.052 1.368.54 2.124 1.548zm-38.304.072q-.144.468.072.81t.72.342h21.888q.468 0 .918-.342t.594-.81l.756-2.304q.144-.468-.072-.81t-.72-.342h-21.888q-.468 0-.918.342t-.594.81zm-2.988 9.216q-.144.468.072.81t.72.342h21.888q.468 0 .918-.342t.594-.81l.756-2.304q.144-.468-.072-.81t-.72-.342h-21.888q-.468 0-.918.342t-.594.81z","BOOKMARK":"M41.904-59.831q.828 0 1.584.324 1.188.468 1.89 1.476t.702 2.232v46.404q0 1.224-.702 2.232t-1.89 1.476q-.684.288-1.584.288-1.728 0-2.988-1.152l-15.876-15.264-15.876 15.264q-1.296 1.188-2.988 1.188-.828 0-1.584-.324-1.188-.468-1.89-1.476t-.702-2.232v-46.404q0-1.224.702-2.232t1.89-1.476q.756-.324 1.584-.324h37.728z","PRINT":"M13.824-9.143h32.256v-9.216h-32.256v9.216zm0-23.04h32.256v-13.824h-5.76q-1.44 0-2.448-1.008t-1.008-2.448v-5.76h-23.04v23.04zm41.472 2.304q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm4.608 0v14.976q0 .468-.342.81t-.81.342h-8.064v5.76q0 1.44-1.008 2.448t-2.448 1.008h-34.56q-1.44 0-2.448-1.008t-1.008-2.448v-5.76h-8.064q-.468 0-.81-.342t-.342-.81v-14.976q0-2.844 2.034-4.878t4.878-2.034h2.304v-19.584q0-1.44 1.008-2.448t2.448-1.008h24.192q1.44 0 3.168.72t2.736 1.728l5.472 5.472q1.008 1.008 1.728 2.736t.72 3.168v9.216h2.304q2.844 0 4.878 2.034t2.034 4.878z","CAMERA":"M34.56-40.247q4.284 0 7.326 3.042t3.042 7.326-3.042 7.326-7.326 3.042-7.326-3.042-3.042-7.326 3.042-7.326 7.326-3.042zm25.344-14.976q3.816 0 6.516 2.7t2.7 6.516v32.256q0 3.816-2.7 6.516t-6.516 2.7h-50.688q-3.816 0-6.516-2.7t-2.7-6.516v-32.256q0-3.816 2.7-6.516t6.516-2.7h8.064l1.836-4.896q.684-1.764 2.502-3.042t3.726-1.278h18.432q1.908 0 3.726 1.278t2.502 3.042l1.836 4.896h8.064zm-25.344 41.472q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734z","FONT":"M26.1-44.315l-6.12 16.2q1.188 0 4.914.072t5.778.072q.684 0 2.052-.072-3.132-9.108-6.624-16.272zm-26.1 39.78l.072-2.844q.828-.252 2.016-.45t2.052-.378 1.782-.522 1.602-1.044 1.116-1.818l8.532-22.176 10.08-26.064h4.6080000000000005q.288.504.396.756l7.38 17.28q1.188 2.808 3.816 9.27t4.104 9.882q.54 1.224 2.088 5.202t2.592 6.066q.72 1.62 1.26 2.052.684.54 3.168 1.062t3.024.738q.216 1.368.216 2.052l-.018.468-.018.468q-2.268 0-6.84-.288t-6.876-.288q-2.736 0-7.74.252t-6.408.288q0-1.548.144-2.808l4.716-1.008q.036 0 .45-.09t.558-.126.522-.162.54-.234.396-.288.324-.396.09-.504q0-.576-1.116-3.474t-2.592-6.39-1.512-3.6l-16.2-.072q-.936 2.088-2.754 7.038t-1.818 5.85q0 .792.504 1.35t1.566.882 1.746.486 2.052.306 1.476.144q.036.684.036 2.088 0 .324-.072.972-2.088 0-6.282-.36t-6.282-.36q-.288 0-.954.144t-.774.144q-2.88.504-6.768.504z","BOLD":"M19.98-9.683q2.664 1.152 5.04 1.152 13.536 0 13.536-12.06 0-4.104-1.476-6.48-.972-1.584-2.214-2.664t-2.43-1.674-2.898-.9-3.024-.378-3.402-.072q-2.628 0-3.636.36 0 1.908-.018 5.724t-.018 5.688q0 .288-.036 2.43t-.018 3.474.162 3.006.432 2.394zm-.504-26.856q1.512.252 3.924.252 2.952 0 5.148-.468t3.96-1.602 2.682-3.222.918-5.112q0-2.52-1.044-4.41t-2.844-2.952-3.888-1.566-4.464-.504q-1.8 0-4.68.468 0 1.8.144 5.436t.144 5.472q0 .972-.018 2.88t-.018 2.844q0 1.656.036 2.484zm-19.476 32.004l.072-3.384q.54-.144 3.06-.576t3.816-.972q.252-.432.45-.972t.306-1.206.198-1.17.108-1.35.018-1.224v-2.358q0-35.352-.792-36.9-.144-.288-.792-.522t-1.602-.396-1.782-.252-1.746-.162-1.098-.108l-.144-2.988q3.528-.072 12.24-.414t13.428-.342q.828 0 2.466.018t2.43.018q2.52 0 4.914.468t4.626 1.512 3.888 2.556 2.664 3.762 1.008 4.95q0 1.872-.594 3.438t-1.404 2.592-2.322 2.07-2.628 1.62-3.024 1.44q5.544 1.26 9.234 4.824t3.69 8.928q0 3.6-1.26 6.462t-3.366 4.698-4.968 3.078-5.886 1.746-6.336.504q-1.584 0-4.752-.108t-4.752-.108q-3.816 0-11.052.396t-8.316.432z","ITALIC":"M0-4.607l.612-3.06q.216-.072 2.934-.774t4.014-1.35q1.008-1.26 1.476-3.636.036-.252 2.232-10.404t4.104-19.566 1.872-10.674v-.9q-.864-.468-1.962-.666t-2.502-.288-2.088-.198l.684-3.708q1.188.072 4.32.234t5.382.252 4.338.09q1.728 0 3.546-.09t4.356-.252 3.546-.234q-.18 1.404-.684 3.204-1.08.36-3.654 1.026t-3.906 1.206q-.288.684-.504 1.53t-.324 1.44-.27 1.638-.234 1.512q-.972 5.328-3.15 15.102t-2.79 12.798q-.072.324-.468 2.088t-.72 3.24-.576 3.006-.216 2.07l.036.648q.612.144 6.66 1.116-.108 1.584-.576 3.564-.396 0-1.17.054t-1.17.054q-1.044 0-3.132-.36t-3.096-.36q-4.968-.072-7.416-.072-1.836 0-5.148.324t-4.356.396z","TEXT_HEIGHT":"M62.784-13.751q1.188 0 1.512.666t-.396 1.602l-4.536 5.832q-.72.936-1.764.936t-1.764-.936l-4.536-5.832q-.72-.936-.396-1.602t1.512-.666h2.88v-36.864h-2.88q-1.188 0-1.512-.666t.396-1.602l4.536-5.832q.72-.936 1.764-.936t1.764.936l4.536 5.832q.72.936.396 1.602t-1.512.666h-2.88v36.864h2.88zm-59.868-46.044l1.944.972q.432.18 7.596.18 1.584 0 4.752-.072t4.752-.072q1.296 0 3.87.018t3.87.018h10.548q.216 0 .756.018t.738 0 .576-.108.63-.324.54-.63l1.512-.036.504.018.504.018q.072 4.032.072 12.096 0 2.88-.18 3.924-1.404.504-2.448.648-.9-1.584-1.944-4.608-.108-.324-.396-1.728t-.522-2.646-.27-1.278q-.216-.288-.432-.45t-.558-.216-.468-.09-.648-.018-.594.018q-.612 0-2.394-.018t-2.682-.018-2.304.072-2.556.216q-.324 2.916-.288 4.896 0 3.384.072 13.968t.072 16.38q0 .576-.09 2.574t0 3.294.45 2.484q1.44.756 4.464 1.53t4.32 1.35q.18 1.44.18 1.8 0 .504-.108 1.044l-1.224.036q-2.736.072-7.848-.288t-7.452-.36q-1.8 0-5.436.324t-5.472.324l-.108-1.872v-.324q.612-.972 2.214-1.548t3.546-1.044 2.808-.972q.684-1.512.684-13.788 0-3.636-.108-10.908t-.108-10.908v-4.212q0-.072.018-.558t.018-.9-.036-.918-.108-.864-.18-.504q-.396-.432-5.832-.432-1.188 0-3.348.432t-2.88.936q-.684.468-1.224 2.61t-1.134 3.996-1.53 1.926q-1.512-.936-2.016-1.584v-13.788z","TEXT_WIDTH":"M2.916-59.795l1.944.972q.432.18 7.596.18 1.584 0 4.752-.072t4.752-.072q2.52 0 8.874-.036t10.962-.018 8.892.162q1.188.036 2.016-1.116l1.512-.036.504.018.504.018q.072 4.032.072 12.096 0 2.88-.18 3.924-1.404.504-2.448.648-.9-1.584-1.944-4.608-.108-.324-.396-1.71t-.54-2.646-.252-1.296q-.36-.468-.972-.684-.18-.072-2.376-.072-1.08 0-3.348-.036t-3.708-.036-3.384.072-3.456.252q-.324 2.916-.288 4.896l.036 5.472v-1.872q0 1.98.036 5.544t.054 6.48.018 5.508q0 .576-.09 2.574t0 3.294.45 2.484q1.44.756 4.464 1.53t4.32 1.35q.18 1.44.18 1.8 0 .504-.108 1.044l-1.224.036q-2.736.072-7.848-.288t-7.452-.36q-1.8 0-5.436.324t-5.472.324l-.108-1.872v-.324q.612-.972 2.214-1.548t3.546-1.044 2.808-.972q.252-.576.414-2.664t.216-5.238.054-5.58-.018-5.526-.018-3.204q0-.252-.09-.774t-.09-.81q0-.252.018-1.584t.036-2.628 0-2.754-.108-2.43-.234-1.152q-.396-.432-5.832-.432-1.476 0-5.868.486t-4.968.882q-.684.432-1.224 2.574t-1.134 4.014-1.53 1.944q-1.512-.936-2.016-1.584v-13.788zm44.244 46.152q.432 0 1.512.702t2.07 1.494 2.142 1.764 1.296 1.08q.936.756.936 1.764t-.936 1.764q-.144.108-1.296 1.08t-2.142 1.764-2.07 1.494-1.512.702q-.468 0-.738-.378t-.36-1.026-.09-1.206.054-1.188.054-.702h-36.864q0 .072.054.702t.054 1.188-.09 1.206-.36 1.026-.738.378q-.432 0-1.512-.702t-2.07-1.494-2.142-1.764-1.296-1.08q-.936-.756-.936-1.764t.936-1.764q.144-.108 1.296-1.08t2.142-1.764 2.07-1.494 1.512-.702q.468 0 .738.378t.36 1.026.09 1.206-.054 1.188-.054.702h36.864q0-.072-.054-.702t-.054-1.188.09-1.206.36-1.026.738-.378z","ALIGN_LEFT":"M64.512-16.055v4.608q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h59.904q.936 0 1.62.684t.684 1.62zm-13.824-13.824v4.608q0 .936-.684 1.62t-1.62.684h-46.08q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h46.08q.936 0 1.62.684t.684 1.62zm9.216-13.824v4.608q0 .936-.684 1.62t-1.62.684h-55.296q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h55.296q.936 0 1.62.684t.684 1.62zm-13.824-13.824v4.608q0 .936-.684 1.62t-1.62.684h-41.472q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h41.472q.936 0 1.62.684t.684 1.62z","ALIGN_CENTER":"M64.512-16.055v4.608q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h59.904q.936 0 1.62.684t.684 1.62zm-13.824-13.824v4.608q0 .936-.684 1.62t-1.62.684h-32.256q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h32.256q.936 0 1.62.684t.684 1.62zm9.216-13.824v4.608q0 .936-.684 1.62t-1.62.684h-50.688q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h50.688q.936 0 1.62.684t.684 1.62zm-13.824-13.824v4.608q0 .936-.684 1.62t-1.62.684h-23.04q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h23.04q.936 0 1.62.684t.684 1.62z","ALIGN_RIGHT":"M64.512-16.055v4.608q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h59.904q.936 0 1.62.684t.684 1.62zm0-13.824v4.608q0 .936-.684 1.62t-1.62.684h-46.08q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h46.08q.936 0 1.62.684t.684 1.62zm0-13.824v4.608q0 .936-.684 1.62t-1.62.684h-55.296q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h55.296q.936 0 1.62.684t.684 1.62zm0-13.824v4.608q0 .936-.684 1.62t-1.62.684h-41.472q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h41.472q.936 0 1.62.684t.684 1.62z","ALIGN_JUSTIFY":"M64.512-16.055v4.608q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h59.904q.936 0 1.62.684t.684 1.62zm0-13.824v4.608q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h59.904q.936 0 1.62.684t.684 1.62zm0-13.824v4.608q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h59.904q.936 0 1.62.684t.684 1.62zm0-13.824v4.608q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h59.904q.936 0 1.62.684t.684 1.62z","LIST":"M9.216-17.207v6.912q0 .468-.342.81t-.81.342h-6.912q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h6.912q.468 0 .81.342t.342.81zm0-13.824v6.912q0 .468-.342.81t-.81.342h-6.912q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h6.912q.468 0 .81.342t.342.81zm0-13.824v6.912q0 .468-.342.81t-.81.342h-6.912q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h6.912q.468 0 .81.342t.342.81zm55.296 27.648v6.912q0 .468-.342.81t-.81.342h-48.384q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h48.384q.468 0 .81.342t.342.81zm-55.296-41.472v6.912q0 .468-.342.81t-.81.342h-6.912q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h6.912q.468 0 .81.342t.342.81zm55.296 27.648v6.912q0 .468-.342.81t-.81.342h-48.384q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h48.384q.468 0 .81.342t.342.81zm0-13.824v6.912q0 .468-.342.81t-.81.342h-48.384q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h48.384q.468 0 .81.342t.342.81zm0-13.824v6.912q0 .468-.342.81t-.81.342h-48.384q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h48.384q.468 0 .81.342t.342.81z","OUTDENT":"M13.824-44.855v20.736q0 .468-.342.81t-.81.342q-.504 0-.828-.324l-10.368-10.368q-.324-.324-.324-.828t.324-.828l10.368-10.368q.324-.324.828-.324.468 0 .81.342t.342.81zm50.688 27.648v6.912q0 .468-.342.81t-.81.342h-62.208q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h62.208q.468 0 .81.342t.342.81zm0-13.824v6.912q0 .468-.342.81t-.81.342h-39.168q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h39.168q.468 0 .81.342t.342.81zm0-13.824v6.912q0 .468-.342.81t-.81.342h-39.168q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h39.168q.468 0 .81.342t.342.81zm0-13.824v6.912q0 .468-.342.81t-.81.342h-62.208q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h62.208q.468 0 .81.342t.342.81z","INDENT":"M12.672-34.487q0 .504-.324.828l-10.368 10.368q-.324.324-.828.324-.468 0-.81-.342t-.342-.81v-20.736q0-.468.342-.81t.81-.342q.504 0 .828.324l10.368 10.368q.324.324.324.828zm51.84 17.28v6.912q0 .468-.342.81t-.81.342h-62.208q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h62.208q.468 0 .81.342t.342.81zm0-13.824v6.912q0 .468-.342.81t-.81.342h-39.168q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h39.168q.468 0 .81.342t.342.81zm0-13.824v6.912q0 .468-.342.81t-.81.342h-39.168q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h39.168q.468 0 .81.342t.342.81zm0-13.824v6.912q0 .468-.342.81t-.81.342h-62.208q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h62.208q.468 0 .81.342t.342.81z","VIDEO_CAMERA":"M64.512-51.767v39.168q0 1.512-1.404 2.124-.468.18-.9.18-.972 0-1.62-.684l-14.508-14.508v5.976q0 4.284-3.042 7.326t-7.326 3.042h-25.344q-4.284 0-7.326-3.042t-3.042-7.326v-25.344q0-4.284 3.042-7.326t7.326-3.042h25.344q4.284 0 7.326 3.042t3.042 7.326v5.94l14.508-14.472q.648-.684 1.62-.684.432 0 .9.18 1.404.612 1.404 2.124z","PICTURE_O":"M23.04-43.703q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm36.864 13.824v16.128h-50.688v-6.912l11.52-11.52 5.76 5.76 18.432-18.432zm3.456-25.344h-57.6q-.468 0-.81.342t-.342.81v43.776q0 .468.342.81t.81.342h57.6q.468 0 .81-.342t.342-.81v-43.776q0-.468-.342-.81t-.81-.342zm5.76 1.152v43.776q0 2.376-1.692 4.068t-4.068 1.692h-57.6q-2.376 0-4.068-1.692t-1.692-4.068v-43.776q0-2.376 1.692-4.068t4.068-1.692h57.6q2.376 0 4.068 1.692t1.692 4.068z","PENCIL":"M13.068-9.143l3.276-3.276-8.46-8.46-3.276 3.276v3.852h4.608v4.608h3.852zm18.828-33.408q0-.792-.792-.792-.36 0-.612.252l-19.512 19.512q-.252.252-.252.612 0 .792.792.792.36 0 .612-.252l19.512-19.512q.252-.252.252-.612zm-1.944-6.912l14.976 14.976-29.952 29.952h-14.976v-14.976zm24.588 3.456q0 1.908-1.332 3.24l-5.976 5.976-14.976-14.976 5.976-5.94q1.296-1.368 3.24-1.368 1.908 0 3.276 1.368l8.46 8.424q1.332 1.404 1.332 3.276z","MAP_MARKER":"M27.648-41.399q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516 2.7 6.516 6.516 2.7 6.516-2.7 2.7-6.516zm9.216 0q0 3.924-1.188 6.444l-13.104 27.864q-.576 1.188-1.71 1.872t-2.43.684-2.43-.684-1.674-1.872l-13.14-27.864q-1.188-2.52-1.188-6.444 0-7.632 5.4-13.032t13.032-5.4 13.032 5.4 5.4 13.032z","ADJUST":"M27.648-12.599v-39.168q-5.328 0-9.828 2.628t-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628zm27.648-19.584q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","TINT":"M18.432-22.967q0-1.296-.72-2.484-.036-.036-.558-.81t-.918-1.368-.9-1.584-.756-1.818q-.144-.576-.756-.576t-.756.576q-.252.828-.756 1.818t-.9 1.584-.918 1.368-.558.81q-.72 1.188-.72 2.484 0 1.908 1.35 3.258t3.258 1.35 3.258-1.35 1.35-3.258zm18.432-4.608q0 7.632-5.4 13.032t-13.032 5.4-13.032-5.4-5.4-13.032q0-5.22 2.916-9.9.216-.324 2.25-3.258t3.636-5.436 3.582-6.408 2.988-7.254q.324-1.08 1.224-1.692t1.836-.612 1.854.612 1.206 1.692q1.008 3.348 2.988 7.254t3.582 6.408 3.636 5.436 2.25 3.258q2.916 4.572 2.916 9.9z","PENCIL_SQUARE_O":"M31.968-21.815l4.176-4.176-5.472-5.472-4.176 4.176v2.016h3.456v3.456h2.016zm15.84-25.92q-.576-.576-1.188.036l-12.6 12.6q-.612.612-.036 1.188t1.188-.036l12.6-12.6q.612-.612.036-1.188zm2.88 21.384v6.84q0 4.284-3.042 7.326t-7.326 3.042h-29.952q-4.284 0-7.326-3.042t-3.042-7.326v-29.952q0-4.284 3.042-7.326t7.326-3.042h29.952q2.268 0 4.212.9.54.252.648.828.108.612-.324 1.044l-1.764 1.764q-.504.504-1.152.288-.828-.216-1.62-.216h-29.952q-2.376 0-4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068-1.692t1.692-4.068v-4.536q0-.468.324-.792l2.304-2.304q.54-.54 1.26-.252t.72 1.044zm-3.456-26.568l10.368 10.368-24.192 24.192h-10.368v-10.368zm15.984 4.752l-3.312 3.312-10.368-10.368 3.312-3.312q1.008-1.008 2.448-1.008t2.448 1.008l5.472 5.472q1.008 1.008 1.008 2.448t-1.008 2.448z","SHARE_SQUARE_O":"M50.688-28.835v9.324q0 4.284-3.042 7.326t-7.326 3.042h-29.952q-4.284 0-7.326-3.042t-3.042-7.326v-29.952q0-4.284 3.042-7.326t7.326-3.042h9.18q.468 0 .81.342t.342.81q0 .972-.936 1.152-2.772.936-4.788 2.16-.36.144-.576.144h-4.032q-2.376 0-4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068-1.692t1.692-4.068v-7.704q0-.684.648-1.044 1.008-.468 1.944-1.332.576-.576 1.26-.288.756.324.756 1.044zm8.532-17.856l-13.824 13.824q-.648.684-1.62.684-.432 0-.9-.18-1.404-.612-1.404-2.124v-6.912h-5.76q-11.628 0-15.768 4.716-4.284 4.932-2.664 17.028.108.828-.72 1.224-.288.072-.432.072-.576 0-.936-.468-.36-.504-.756-1.116t-1.422-2.466-1.782-3.582-1.386-4.104-.63-4.392q0-1.764.126-3.276t.504-3.24 1.008-3.168 1.692-2.934 2.466-2.664 3.402-2.214 4.482-1.746 5.742-1.098 7.074-.396h5.76v-6.912q0-1.512 1.404-2.124.468-.18.9-.18.936 0 1.62.684l13.824 13.824q.684.684.684 1.62t-.684 1.62z","CHECK_SQUARE_O":"M50.688-30.959v11.448q0 4.284-3.042 7.326t-7.326 3.042h-29.952q-4.284 0-7.326-3.042t-3.042-7.326v-29.952q0-4.284 3.042-7.326t7.326-3.042h29.952q2.268 0 4.212.9.54.252.648.828.108.612-.324 1.044l-1.764 1.764q-.36.36-.828.36-.108 0-.324-.072-.828-.216-1.62-.216h-29.952q-2.376 0-4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068-1.692t1.692-4.068v-9.144q0-.468.324-.792l2.304-2.304q.36-.36.828-.36.216 0 .432.108.72.288.72 1.044zm8.316-17.604l-29.304 29.304q-.864.864-2.052.864t-2.052-.864l-15.48-15.48q-.864-.864-.864-2.052t.864-2.052l3.96-3.96q.864-.864 2.052-.864t2.052.864l9.468 9.468 23.292-23.292q.864-.864 2.052-.864t2.052.864l3.96 3.96q.864.864.864 2.052t-.864 2.052z","ARROWS":"M64.512-32.183q0 .936-.684 1.62l-9.216 9.216q-.684.684-1.62.684t-1.62-.684-.684-1.62v-4.608h-13.824v13.824h4.608q.936 0 1.62.684t.684 1.62-.684 1.62l-9.216 9.216q-.684.684-1.62.684t-1.62-.684l-9.216-9.216q-.684-.684-.684-1.62t.684-1.62 1.62-.684h4.608v-13.824h-13.824v4.608q0 .936-.684 1.62t-1.62.684-1.62-.684l-9.216-9.216q-.684-.684-.684-1.62t.684-1.62l9.216-9.216q.684-.684 1.62-.684t1.62.684.684 1.62v4.608h13.824v-13.824h-4.608q-.936 0-1.62-.684t-.684-1.62.684-1.62l9.216-9.216q.684-.684 1.62-.684t1.62.684l9.216 9.216q.684.684.684 1.62t-.684 1.62-1.62.684h-4.608v13.824h13.824v-4.608q0-.936.684-1.62t1.62-.684 1.62.684l9.216 9.216q.684.684.684 1.62z","STEP_BACKWARD":"M35.244-59.363q.684-.684 1.152-.468t.468 1.152v52.992q0 .936-.468 1.152t-1.152-.468l-25.56-25.56q-.324-.324-.468-.684v24.408q0 .936-.684 1.62t-1.62.684h-4.608q-.936 0-1.62-.684t-.684-1.62v-50.688q0-.936.684-1.62t1.62-.684h4.608q.936 0 1.62.684t.684 1.62v24.408q.144-.396.468-.684z","FAST_BACKWARD":"M62.892-59.363q.684-.684 1.152-.468t.468 1.152v52.992q0 .936-.468 1.152t-1.152-.468l-25.56-25.56q-.324-.324-.468-.684v25.56q0 .936-.468 1.152t-1.152-.468l-25.56-25.56q-.324-.324-.468-.684v24.408q0 .936-.684 1.62t-1.62.684h-4.608q-.936 0-1.62-.684t-.684-1.62v-50.688q0-.936.684-1.62t1.62-.684h4.608q.936 0 1.62.684t.684 1.62v24.408q.144-.396.468-.684l25.56-25.56q.684-.684 1.152-.468t.468 1.152v25.56q.144-.396.468-.684z","BACKWARD":"M58.284-59.363q.684-.684 1.152-.468t.468 1.152v52.992q0 .936-.468 1.152t-1.152-.468l-25.56-25.56q-.288-.324-.468-.684v25.56q0 .936-.468 1.152t-1.152-.468l-25.56-25.56q-.684-.684-.684-1.62t.684-1.62l25.56-25.56q.684-.684 1.152-.468t.468 1.152v25.56q.18-.396.468-.684z","PLAY":"M49.824-31.067l-47.808 26.568q-.828.468-1.422.108t-.594-1.296v-52.992q0-.936.594-1.296t1.422.108l47.808 26.568q.828.468.828 1.116t-.828 1.116z","PAUSE":"M55.296-57.527v50.688q0 .936-.684 1.62t-1.62.684h-18.432q-.936 0-1.62-.684t-.684-1.62v-50.688q0-.936.684-1.62t1.62-.684h18.432q.936 0 1.62.684t.684 1.62zm-32.256 0v50.688q0 .936-.684 1.62t-1.62.684h-18.432q-.936 0-1.62-.684t-.684-1.62v-50.688q0-.936.684-1.62t1.62-.684h18.432q.936 0 1.62.684t.684 1.62z","STOP":"M55.296-57.527v50.688q0 .936-.684 1.62t-1.62.684h-50.688q-.936 0-1.62-.684t-.684-1.62v-50.688q0-.936.684-1.62t1.62-.684h50.688q.936 0 1.62.684t.684 1.62z","FORWARD":"M1.62-5.003q-.684.684-1.152.468t-.468-1.152v-52.992q0-.936.468-1.152t1.152.468l25.56 25.56q.288.288.468.684v-25.56q0-.936.468-1.152t1.152.468l25.56 25.56q.684.684.684 1.62t-.684 1.62l-25.56 25.56q-.684.684-1.152.468t-.468-1.152v-25.56q-.18.36-.468.684z","FAST_FORWARD":"M1.62-5.003q-.684.684-1.152.468t-.468-1.152v-52.992q0-.936.468-1.152t1.152.468l25.56 25.56q.288.288.468.684v-25.56q0-.936.468-1.152t1.152.468l25.56 25.56q.288.288.468.684v-24.408q0-.936.684-1.62t1.62-.684h4.608q.936 0 1.62.684t.684 1.62v50.688q0 .936-.684 1.62t-1.62.684h-4.608q-.936 0-1.62-.684t-.684-1.62v-24.408q-.18.36-.468.684l-25.56 25.56q-.684.684-1.152.468t-.468-1.152v-25.56q-.18.36-.468.684z","STEP_FORWARD":"M1.62-5.003q-.684.684-1.152.468t-.468-1.152v-52.992q0-.936.468-1.152t1.152.468l25.56 25.56q.288.288.468.684v-24.408q0-.936.684-1.62t1.62-.684h4.608q.936 0 1.62.684t.684 1.62v50.688q0 .936-.684 1.62t-1.62.684h-4.608q-.936 0-1.62-.684t-.684-1.62v-24.408q-.18.36-.468.684z","EJECT":"M.504-29.195l25.56-25.56q.684-.684 1.62-.684t1.62.684l25.56 25.56q.684.684.468 1.152t-1.152.468h-52.992q-.936 0-1.152-.468t.468-1.152zm52.524 20.052h-50.688q-.936 0-1.62-.684t-.684-1.62v-9.216q0-.936.684-1.62t1.62-.684h50.688q.936 0 1.62.684t.684 1.62v9.216q0 .936-.684 1.62t-1.62.684z","CHEVRON_LEFT":"M42.156-53.603l-19.116 19.116 19.116 19.116q.684.684.684 1.62t-.684 1.62l-5.976 5.976q-.684.684-1.62.684t-1.62-.684l-26.712-26.712q-.684-.684-.684-1.62t.684-1.62l26.712-26.712q.684-.684 1.62-.684t1.62.684l5.976 5.976q.684.684.684 1.62t-.684 1.62z","CHEVRON_RIGHT":"M39.852-32.867l-26.712 26.712q-.684.684-1.62.684t-1.62-.684l-5.976-5.976q-.684-.684-.684-1.62t.684-1.62l19.116-19.116-19.116-19.116q-.684-.684-.684-1.62t.684-1.62l5.976-5.976q.684-.684 1.62-.684t1.62.684l26.712 26.712q.684.684.684 1.62t-.684 1.62z","PLUS_CIRCLE":"M43.776-29.879v-4.608q0-.936-.684-1.62t-1.62-.684h-9.216v-9.216q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v9.216h-9.216q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h9.216v9.216q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62v-9.216h9.216q.936 0 1.62-.684t.684-1.62zm11.52-2.304q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","MINUS_CIRCLE":"M43.776-29.879v-4.608q0-.936-.684-1.62t-1.62-.684h-27.648q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h27.648q.936 0 1.62-.684t.684-1.62zm11.52-2.304q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","TIMES_CIRCLE":"M41.364-24.047q0-.936-.684-1.62l-6.516-6.516 6.516-6.516q.684-.684.684-1.62 0-.972-.684-1.656l-3.24-3.24q-.684-.684-1.656-.684-.936 0-1.62.684l-6.516 6.516-6.516-6.516q-.684-.684-1.62-.684-.972 0-1.656.684l-3.24 3.24q-.684.684-.684 1.656 0 .936.684 1.62l6.516 6.516-6.516 6.516q-.684.684-.684 1.62 0 .972.684 1.656l3.24 3.24q.684.684 1.656.684.936 0 1.62-.684l6.516-6.516 6.516 6.516q.684.684 1.62.684.972 0 1.656-.684l3.24-3.24q.684-.684.684-1.656zm13.932-8.136q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","CHECK_CIRCLE":"M46.224-38.015q0-1.008-.648-1.656l-3.276-3.24q-.684-.684-1.62-.684t-1.62.684l-14.688 14.652-8.136-8.136q-.684-.684-1.62-.684t-1.62.684l-3.276 3.24q-.648.648-.648 1.656 0 .972.648 1.62l13.032 13.032q.684.684 1.62.684.972 0 1.656-.684l19.548-19.548q.648-.648.648-1.62zm9.072 5.832q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","QUESTION_CIRCLE":"M32.256-14.903v-6.912q0-.504-.324-.828t-.828-.324h-6.912q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h6.912q.504 0 .828-.324t.324-.828zm9.216-24.192q0-3.168-1.998-5.868t-4.986-4.176-6.12-1.476q-8.748 0-13.356 7.668-.54.864.288 1.512l4.752 3.6q.252.216.684.216.576 0 .9-.432 1.908-2.448 3.096-3.312 1.224-.864 3.096-.864 1.728 0 3.078.936t1.35 2.124q0 1.368-.72 2.196t-2.448 1.62q-2.268 1.008-4.158 3.114t-1.89 4.518v1.296q0 .504.324.828t.828.324h6.912q.504 0 .828-.324t.324-.828q0-.684.774-1.782t1.962-1.782q1.152-.648 1.764-1.026t1.656-1.26 1.602-1.728 1.008-2.178.45-2.916zm13.824 6.912q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","INFO_CIRCLE":"M36.864-14.903v-5.76q0-.504-.324-.828t-.828-.324h-3.456v-18.432q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v5.76q0 .504.324.828t.828.324h3.456v11.52h-3.456q-.504 0-.828.324t-.324.828v5.76q0 .504.324.828t.828.324h16.128q.504 0 .828-.324t.324-.828zm-4.608-32.256v-5.76q0-.504-.324-.828t-.828-.324h-6.912q-.504 0-.828.324t-.324.828v5.76q0 .504.324.828t.828.324h6.912q.504 0 .828-.324t.324-.828zm23.04 14.976q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","CROSSHAIRS":"M43.092-27.575h-3.924q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h3.924q-1.152-3.888-4.05-6.786t-6.786-4.05v3.924q0 .936-.684 1.62t-1.62.684h-4.608q-.936 0-1.62-.684t-.684-1.62v-3.924q-3.888 1.152-6.786 4.05t-4.05 6.786h3.924q.936 0 1.62.684t.684 1.62v4.608q0 .936-.684 1.62t-1.62.684h-3.924q1.152 3.888 4.05 6.786t6.786 4.05v-3.924q0-.936.684-1.62t1.62-.684h4.608q.936 0 1.62.684t.684 1.62v3.924q3.888-1.152 6.786-4.05t4.05-6.786zm12.204-6.912v4.608q0 .936-.684 1.62t-1.62.684h-5.148q-1.332 5.796-5.562 10.026t-10.026 5.562v5.148q0 .936-.684 1.62t-1.62.684h-4.608q-.936 0-1.62-.684t-.684-1.62v-5.148q-5.796-1.332-10.026-5.562t-5.562-10.026h-5.148q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h5.148q1.332-5.796 5.562-10.026t10.026-5.562v-5.148q0-.936.684-1.62t1.62-.684h4.608q.936 0 1.62.684t.684 1.62v5.148q5.796 1.332 10.026 5.562t5.562 10.026h5.148q.936 0 1.62.684t.684 1.62z","TIMES_CIRCLE_O":"M39.492-25.595l-5.256 5.256q-.36.36-.828.36t-.828-.36l-4.932-4.932-4.932 4.932q-.36.36-.828.36t-.828-.36l-5.256-5.256q-.36-.36-.36-.828t.36-.828l4.932-4.932-4.932-4.932q-.36-.36-.36-.828t.36-.828l5.256-5.256q.36-.36.828-.36t.828.36l4.932 4.932 4.932-4.932q.36-.36.828-.36t.828.36l5.256 5.256q.36.36.36.828t-.36.828l-4.932 4.932 4.932 4.932q.36.36.36.828t-.36.828zm7.74-6.588q0-5.328-2.628-9.828t-7.128-7.128-9.828-2.628-9.828 2.628-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828zm8.064 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","CHECK_CIRCLE_O":"M42.156-35.171l-15.192 15.192q-.684.684-1.62.684t-1.62-.684l-10.584-10.584q-.684-.684-.684-1.62t.684-1.62l3.672-3.672q.684-.684 1.62-.684t1.62.684l5.292 5.292 9.9-9.9q.684-.684 1.62-.684t1.62.684l3.672 3.672q.684.684.684 1.62t-.684 1.62zm5.076 2.988q0-5.328-2.628-9.828t-7.128-7.128-9.828-2.628-9.828 2.628-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828zm8.064 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","BAN":"M47.232-32.291q0-5.796-3.132-10.62l-27.144 27.108q4.932 3.204 10.692 3.204 3.996 0 7.614-1.566t6.246-4.194 4.176-6.282 1.548-7.65zm-35.964 10.764l27.18-27.144q-4.86-3.276-10.8-3.276-5.328 0-9.828 2.628t-7.128 7.164-2.628 9.864q0 5.832 3.204 10.764zm44.028-10.764q0 5.652-2.196 10.8t-5.886 8.856-8.82 5.904-10.746 2.196-10.746-2.196-8.82-5.904-5.886-8.856-2.196-10.8 2.196-10.782 5.886-8.838 8.82-5.904 10.746-2.196 10.746 2.196 8.82 5.904 5.886 8.838 2.196 10.782z","ARROW_LEFT":"M55.296-32.183v4.608q0 1.908-1.17 3.258t-3.042 1.35h-25.344l10.548 10.584q1.368 1.296 1.368 3.24t-1.368 3.24l-2.7 2.736q-1.332 1.332-3.24 1.332-1.872 0-3.276-1.332l-23.436-23.472q-1.332-1.332-1.332-3.24 0-1.872 1.332-3.276l23.436-23.4q1.368-1.368 3.276-1.368 1.872 0 3.24 1.368l2.7 2.664q1.368 1.368 1.368 3.276t-1.368 3.276l-10.548 10.548h25.344q1.872 0 3.042 1.35t1.17 3.258z","ARROW_RIGHT":"M52.992-29.879q0 1.944-1.332 3.276l-23.436 23.436q-1.404 1.332-3.276 1.332-1.836 0-3.24-1.332l-2.7-2.7q-1.368-1.368-1.368-3.276t1.368-3.276l10.548-10.548h-25.344q-1.872 0-3.042-1.35t-1.17-3.258v-4.608q0-1.908 1.17-3.258t3.042-1.35h25.344l-10.548-10.584q-1.368-1.296-1.368-3.24t1.368-3.24l2.7-2.7q1.368-1.368 3.24-1.368 1.908 0 3.276 1.368l23.436 23.436q1.332 1.26 1.332 3.24z","ARROW_UP":"M57.996-29.483q0 1.836-1.332 3.24l-2.7 2.7q-1.368 1.368-3.276 1.368-1.944 0-3.24-1.368l-10.584-10.548v25.344q0 1.872-1.35 3.042t-3.258 1.17h-4.608q-1.908 0-3.258-1.17t-1.35-3.042v-25.344l-10.584 10.548q-1.296 1.368-3.24 1.368t-3.24-1.368l-2.7-2.7q-1.368-1.368-1.368-3.24 0-1.908 1.368-3.276l23.436-23.436q1.26-1.332 3.24-1.332 1.944 0 3.276 1.332l23.436 23.436q1.332 1.404 1.332 3.276z","ARROW_DOWN":"M57.996-34.487q0 1.908-1.332 3.24l-23.436 23.472q-1.404 1.332-3.276 1.332-1.908 0-3.24-1.332l-23.436-23.472q-1.368-1.296-1.368-3.24 0-1.908 1.368-3.276l2.664-2.7q1.404-1.332 3.276-1.332 1.908 0 3.24 1.332l10.584 10.584v-25.344q0-1.872 1.368-3.24t3.24-1.368h4.608q1.872 0 3.24 1.368t1.368 3.24v25.344l10.584-10.584q1.332-1.332 3.24-1.332 1.872 0 3.276 1.332l2.7 2.7q1.332 1.404 1.332 3.276z","SHARE":"M64.512-41.399q0 .936-.684 1.62l-18.432 18.432q-.684.684-1.62.684t-1.62-.684-.684-1.62v-9.216h-8.064q-3.528 0-6.318.216t-5.544.774-4.788 1.53-3.798 2.502-2.88 3.636-1.746 4.986-.63 6.516q0 1.98.18 4.428 0 .216.09.846t.09.954q0 .54-.306.9t-.846.36q-.576 0-1.008-.612-.252-.324-.468-.792t-.486-1.08-.378-.864q-4.572-10.26-4.572-16.236 0-7.164 1.908-11.988 5.832-14.508 31.5-14.508h8.064v-9.216q0-.936.684-1.62t1.62-.684 1.62.684l18.432 18.432q.684.684.684 1.62z","EXPAND":"M27.18-26.423q0 .468-.36.828l-11.952 11.952 5.184 5.184q.684.684.684 1.62t-.684 1.62-1.62.684h-16.128q-.936 0-1.62-.684t-.684-1.62v-16.128q0-.936.684-1.62t1.62-.684 1.62.684l5.184 5.184 11.952-11.952q.36-.36.828-.36t.828.36l4.104 4.104q.36.36.36.828zm28.116-31.104v16.128q0 .936-.684 1.62t-1.62.684-1.62-.684l-5.184-5.184-11.952 11.952q-.36.36-.828.36t-.828-.36l-4.104-4.104q-.36-.36-.36-.828t.36-.828l11.952-11.952-5.184-5.184q-.684-.684-.684-1.62t.684-1.62 1.62-.684h16.128q.936 0 1.62.684t.684 1.62z","COMPRESS":"M27.648-29.879v16.128q0 .936-.684 1.62t-1.62.684-1.62-.684l-5.184-5.184-11.952 11.952q-.36.36-.828.36t-.828-.36l-4.104-4.104q-.36-.36-.36-.828t.36-.828l11.952-11.952-5.184-5.184q-.684-.684-.684-1.62t.684-1.62 1.62-.684h16.128q.936 0 1.62.684t.684 1.62zm27.18-24.192q0 .468-.36.828l-11.952 11.952 5.184 5.184q.684.684.684 1.62t-.684 1.62-1.62.684h-16.128q-.936 0-1.62-.684t-.684-1.62v-16.128q0-.936.684-1.62t1.62-.684 1.62.684l5.184 5.184 11.952-11.952q.36-.36.828-.36t.828.36l4.104 4.104q.36.36.36.828z","PLUS":"M50.688-37.943v6.912q0 1.44-1.008 2.448t-2.448 1.008h-14.976v14.976q0 1.44-1.008 2.448t-2.448 1.008h-6.912q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h14.976v-14.976q0-1.44 1.008-2.448t2.448-1.008h6.912q1.44 0 2.448 1.008t1.008 2.448v14.976h14.976q1.44 0 2.448 1.008t1.008 2.448z","MINUS":"M50.688-37.943v6.912q0 1.44-1.008 2.448t-2.448 1.008h-43.776q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h43.776q1.44 0 2.448 1.008t1.008 2.448z","ASTERISK":"M53.352-26.639q1.656.936 2.142 2.79t-.45 3.51l-2.304 3.96q-.936 1.656-2.79 2.142t-3.51-.45l-9.576-5.508v11.052q0 1.872-1.368 3.24t-3.24 1.368h-4.608q-1.872 0-3.24-1.368t-1.368-3.24v-11.052l-9.576 5.508q-1.656.936-3.51.45t-2.79-2.142l-2.304-3.96q-.936-1.656-.45-3.51t2.142-2.79l9.576-5.544-9.576-5.544q-1.656-.936-2.142-2.79t.45-3.51l2.304-3.96q.936-1.656 2.79-2.142t3.51.45l9.576 5.508v-11.052q0-1.872 1.368-3.24t3.24-1.368h4.608q1.872 0 3.24 1.368t1.368 3.24v11.052l9.576-5.508q1.656-.936 3.51-.45t2.79 2.142l2.304 3.96q.936 1.656.45 3.51t-2.142 2.79l-9.576 5.544z","EXCLAMATION_CIRCLE":"M27.648-59.831q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878-3.708 13.878-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708zm4.608 44.892v-6.84q0-.504-.324-.846t-.792-.342h-6.912q-.468 0-.828.36t-.36.828v6.84q0 .468.36.828t.828.36h6.912q.468 0 .792-.342t.324-.846zm-.072-12.384l.648-22.356q0-.432-.36-.648-.36-.288-.864-.288h-7.92q-.504 0-.864.288-.36.216-.36.648l.612 22.356q0 .36.36.63t.864.27h6.66q.504 0 .846-.27t.378-.63z","GIFT":"M33.408-15.623v-25.775999999999996h-11.52v25.775999999999996q0 .9.648 1.386t1.656.486h6.912q1.008 0 1.656-.486t.648-1.386zm-16.416-30.384h7.02l-4.536-5.796q-.936-1.116-2.484-1.116-1.44 0-2.448 1.008t-1.008 2.448 1.008 2.448 2.448 1.008zm24.768-3.456q0-1.44-1.008-2.448t-2.448-1.008q-1.548 0-2.484 1.116l-4.5 5.796h6.984q1.44 0 2.448-1.008t1.008-2.448zm13.536 9.216v11.52q0 .504-.324.828t-.828.324h-3.456v14.976q0 1.44-1.008 2.448t-2.448 1.008h-39.168q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-3.456q-.504 0-.828-.324t-.324-.828v-11.52q0-.504.324-.828t.828-.324h15.84q-3.348 0-5.706-2.358t-2.358-5.706 2.358-5.706 5.706-2.358q3.852 0 6.048 2.772l4.608 5.94 4.608-5.94q2.196-2.772 6.048-2.772 3.348 0 5.706 2.358t2.358 5.706-2.358 5.706-5.706 2.358h15.84q.504 0 .828.324t.324.828z","LEAF":"M46.08-39.095q0-.936-.684-1.62t-1.62-.684q-6.192 0-11.448 1.782t-9.342 4.824-8.478 7.902q-.684.756-.684 1.62 0 .936.684 1.62t1.62.684q.864 0 1.62-.684.972-.864 2.664-2.556t2.412-2.376q4.932-4.464 9.666-6.336t11.286-1.872q.936 0 1.62-.684t.684-1.62zm18.432-7.128q0 3.42-.72 6.948-1.656 8.064-6.642 13.788t-12.87 9.648q-7.704 3.888-15.768 3.888-5.328 0-10.296-1.692-.54-.18-3.168-1.512t-3.456-1.332q-.576 0-1.422 1.152t-1.62 2.52-1.89 2.52-2.16 1.152q-1.08 0-1.836-.396t-1.116-.864-.972-1.512l-.216-.396-.198-.36-.108-.342-.054-.486q0-1.26 1.116-2.646t2.448-2.358 2.448-2.016 1.116-1.728q0-.144-.504-1.368t-.576-1.584q-.324-1.836-.324-3.744 0-4.14 1.566-7.92t4.284-6.642 6.138-5.004 7.344-3.438q1.98-.648 5.22-.918t6.462-.324 6.426-.216 5.886-.864 4.086-2.034l1.062-1.062 1.062-1.008.972-.72 1.314-.576 1.566-.162q1.404 0 2.538 1.656t1.71 4.032.864 4.464.288 3.456z","FIRE":"M50.688-3.383v2.304q0 .468-.342.81t-.81.342h-48.384q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h48.384q.468 0 .81.342t.342.81zm-9.216-38.016q0 2.808-.882 5.184t-2.304 4.05-3.15 3.168-3.456 2.79-3.15 2.592-2.304 2.934-.882 3.474q0 3.456 2.412 8.064l-.144-.036.036.036q-3.24-1.476-5.76-2.988t-4.986-3.6-4.086-4.41-2.61-5.418-.99-6.624q0-2.808.882-5.184t2.304-4.05 3.15-3.168 3.456-2.79 3.15-2.592 2.304-2.934.882-3.474q0-3.384-2.376-8.064l.108.036-.036-.036q3.24 1.476 5.76 2.988t4.986 3.6 4.086 4.41 2.61 5.418.99 6.624z","EYE":"M59.904-29.879q-5.472-8.496-13.716-12.708 2.196 3.744 2.196 8.1 0 6.66-4.734 11.394t-11.394 4.734-11.394-4.734-4.734-11.394q0-4.356 2.196-8.1-8.244 4.212-13.716 12.708 4.788 7.38 12.006 11.754t15.642 4.374 15.642-4.374 12.006-11.754zm-25.92-13.824q0-.72-.504-1.224t-1.224-.504q-4.5 0-7.722 3.222t-3.222 7.722q0 .72.504 1.224t1.224.504 1.224-.504.504-1.224q0-3.096 2.196-5.292t5.292-2.196q.72 0 1.224-.504t.504-1.224zm30.528 13.824q0 1.224-.72 2.484-5.04 8.28-13.554 13.266t-17.982 4.986-17.982-5.004-13.554-13.248q-.72-1.26-.72-2.484t.72-2.484q5.04-8.244 13.554-13.248t17.982-5.004 17.982 5.004 13.554 13.248q.72 1.26.72 2.484z","EYE_SLASH":"M19.98-16.379l2.808-5.076q-3.132-2.268-4.896-5.724t-1.764-7.308q0-4.356 2.196-8.1-8.244 4.212-13.716 12.708 6.012 9.288 15.372 13.5zm14.004-27.324q0-.72-.504-1.224t-1.224-.504q-4.5 0-7.722 3.222t-3.222 7.722q0 .72.504 1.224t1.224.504 1.224-.504.504-1.224q0-3.096 2.196-5.292t5.292-2.196q.72 0 1.224-.504t.504-1.224zm13.068-6.876q0 .252-.036.324-3.78 6.768-11.34 20.376t-11.376 20.412l-1.764 3.204q-.36.576-1.008.576-.432 0-4.824-2.52-.576-.36-.576-1.008 0-.432 1.584-3.132-5.148-2.34-9.486-6.228t-7.506-8.82q-.72-1.116-.72-2.484t.72-2.484q5.508-8.46 13.68-13.356t17.856-4.896q3.204 0 6.48.612l1.944-3.492q.36-.576 1.008-.576.18 0 .648.216t1.116.558 1.188.666 1.134.666.702.414q.576.36.576.972zm1.332 16.092q0 5.004-2.844 9.126t-7.524 5.922l10.08-18.072q.288 1.62.288 3.024zm16.128 4.608q0 1.26-.72 2.484-1.404 2.304-3.924 5.22-5.4 6.192-12.51 9.612t-15.102 3.42l2.664-4.752q7.632-.648 14.13-4.932t10.854-11.052q-4.14-6.444-10.152-10.584l2.268-4.032q3.42 2.304 6.57 5.508t5.202 6.624q.72 1.224.72 2.484z","WARNING":"M36.864-14.939v-6.84q0-.504-.342-.846t-.81-.342h-6.912q-.468 0-.81.342t-.342.846v6.84q0 .504.342.846t.81.342h6.912q.468 0 .81-.342t.342-.846zm-.072-13.464l.648-16.524q0-.432-.36-.684-.468-.396-.864-.396h-7.92q-.396 0-.864.396-.36.252-.36.756l.612 16.452q0 .36.36.594t.864.234h6.66q.504 0 .846-.234t.378-.594zm-.504-33.624l27.648 50.688q1.26 2.268-.072 4.536-.612 1.044-1.674 1.656t-2.286.612h-55.296q-1.224 0-2.286-.612t-1.674-1.656q-1.332-2.268-.072-4.536l27.648-50.688q.612-1.116 1.692-1.764t2.34-.648 2.34.648 1.692 1.764z","PLANE":"M49.536-58.679q1.584 1.872.432 5.328t-3.888 6.192l-5.796 5.796 5.76 25.056q.18.684-.432 1.188l-4.608 3.456q-.252.216-.684.216-.144 0-.252-.036-.54-.108-.756-.576l-10.044-18.288-9.324 9.324 1.908 6.984q.18.612-.288 1.116l-3.456 3.456q-.324.324-.828.324h-.072q-.54-.072-.864-.468l-6.804-9.072-9.072-6.804q-.396-.252-.468-.828-.036-.468.324-.9l3.456-3.492q.324-.324.828-.324.216 0 .288.036l6.984 1.908 9.324-9.324-18.288-10.044q-.504-.288-.612-.864-.072-.576.324-.972l4.608-4.608q.504-.468 1.08-.288l23.94 5.724 5.76-5.76q2.736-2.736 6.192-3.888t5.328.432z","CALENDAR":"M4.608-4.535h10.368v-10.368h-10.368v10.368zm12.672 0h11.52v-10.368h-11.52v10.368zm-12.672-12.672h10.368v-11.52h-10.368v11.52zm12.672 0h11.52v-11.52h-11.52v11.52zm-12.672-13.824h10.368v-10.368h-10.368v10.368zm26.496 26.496h11.52v-10.368h-11.52v10.368zm-13.824-26.496h11.52v-10.368h-11.52v10.368zm27.648 26.496h10.368v-10.368h-10.368v10.368zm-13.824-12.672h11.52v-11.52h-11.52v11.52zm-12.672-31.104v-10.368q0-.468-.342-.81t-.81-.342h-2.304q-.468 0-.81.342t-.342.81v10.368q0 .468.342.81t.81.342h2.304q.468 0 .81-.342t.342-.81zm26.496 31.104h10.368v-11.52h-10.368v11.52zm-13.824-13.824h11.52v-10.368h-11.52v10.368zm13.824 0h10.368v-10.368h-10.368v10.368zm1.152-17.28v-10.368q0-.468-.342-.81t-.81-.342h-2.304q-.468 0-.81.342t-.342.81v10.368q0 .468.342.81t.81.342h2.304q.468 0 .81-.342t.342-.81zm13.824-2.304v46.08q0 1.872-1.368 3.24t-3.24 1.368h-50.688q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h4.608v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h13.824v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h4.608q1.872 0 3.24 1.368t1.368 3.24z","RANDOM":"M23.976-47.123q-2.16 3.312-4.932 9.828-.792-1.62-1.332-2.61t-1.458-2.286-1.836-2.034-2.268-1.26-2.934-.522h-8.064q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h8.064q9 0 14.76 8.1zm40.536 28.764q0 .504-.324.828l-11.52 11.52q-.324.324-.828.324-.468 0-.81-.342t-.342-.81v-6.912q-1.152 0-3.06.018t-2.916.036-2.628-.036-2.556-.18-2.304-.378-2.268-.666-2.088-1.026-2.124-1.44-1.98-1.926-2.016-2.502q2.124-3.348 4.896-9.828.792 1.62 1.332 2.61t1.458 2.286 1.836 2.034 2.268 1.26 2.934.522h9.216v-6.912q0-.504.324-.828t.828-.324q.432 0 .864.36l11.484 11.484q.324.324.324.828zm0-32.256q0 .504-.324.828l-11.52 11.52q-.324.324-.828.324-.468 0-.81-.342t-.342-.81v-6.912h-9.216q-1.728 0-3.132.54t-2.484 1.62-1.836 2.214-1.62 2.79q-1.152 2.232-2.808 6.156-1.044 2.376-1.782 3.996t-1.944 3.78-2.304 3.6-2.664 2.988-3.24 2.466-3.834 1.512-4.608.594h-8.064q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h8.064q1.728 0 3.132-.54t2.484-1.62 1.836-2.214 1.62-2.79q1.152-2.232 2.808-6.156 1.044-2.376 1.782-3.996t1.944-3.78 2.304-3.6 2.664-2.988 3.24-2.466 3.834-1.512 4.608-.594h9.216v-6.912q0-.504.324-.828t.828-.324q.432 0 .864.36l11.484 11.484q.324.324.324.828z","COMMENT":"M64.512-32.183q0 6.264-4.32 11.574t-11.736 8.388-16.2 3.078q-2.52 0-5.22-.288-7.128 6.3-16.56 8.712-1.764.504-4.104.792-.612.072-1.098-.324t-.63-1.044v-.036q-.108-.144-.018-.432t.072-.36.162-.342l.216-.324.252-.306.288-.324q.252-.288 1.116-1.242t1.242-1.368 1.116-1.422 1.17-1.836.972-2.124.936-2.736q-5.652-3.204-8.91-7.92t-3.258-10.116q0-4.68 2.556-8.946t6.876-7.362 10.296-4.914 12.528-1.818q8.784 0 16.2 3.078t11.736 8.388 4.32 11.574z","MAGNET":"M55.296-34.487v4.608q0 7.236-3.546 13.032t-9.864 9.054-14.238 3.258-14.238-3.258-9.864-9.054-3.546-13.032v-4.608q0-.936.684-1.62t1.62-.684h13.824q.936 0 1.62.684t.684 1.62v4.608q0 1.872.846 3.24t1.926 2.052 2.556 1.08 2.304.468 1.584.072 1.584-.072 2.304-.468 2.556-1.08 1.926-2.052.846-3.24v-4.608q0-.936.684-1.62t1.62-.684h13.824q.936 0 1.62.684t.684 1.62zm-36.864-23.04v13.824q0 .936-.684 1.62t-1.62.684h-13.824q-.936 0-1.62-.684t-.684-1.62v-13.824q0-.936.684-1.62t1.62-.684h13.824q.936 0 1.62.684t.684 1.62zm36.864 0v13.824q0 .936-.684 1.62t-1.62.684h-13.824q-.936 0-1.62-.684t-.684-1.62v-13.824q0-.936.684-1.62t1.62-.684h13.824q.936 0 1.62.684t.684 1.62z","CHEVRON_UP":"M60.588-16.523l-5.976 5.94q-.684.684-1.62.684t-1.62-.684l-19.116-19.116-19.116 19.116q-.684.684-1.62.684t-1.62-.684l-5.976-5.94q-.684-.684-.684-1.638t.684-1.638l26.712-26.676q.684-.684 1.62-.684t1.62.684l26.712 26.676q.684.684.684 1.638t-.684 1.638z","CHEVRON_DOWN":"M60.588-35.351l-26.712 26.676q-.684.684-1.62.684t-1.62-.684l-26.712-26.676q-.684-.684-.684-1.638t.684-1.638l5.976-5.94q.684-.684 1.62-.684t1.62.684l19.116 19.116 19.116-19.116q.684-.684 1.62-.684t1.62.684l5.976 5.94q.684.684.684 1.638t-.684 1.638z","RETWEET":"M46.08-10.295q0 .468-.342.81t-.81.342h-34.56q-.288 0-.486-.072t-.324-.252-.198-.288-.108-.414-.036-.414v-21.6h-6.912q-.936 0-1.62-.684t-.684-1.62q0-.864.54-1.476l11.52-13.824q.684-.792 1.764-.792t1.764.792l11.52 13.824q.54.612.54 1.476 0 .936-.684 1.62t-1.62.684h-6.912v13.824h20.736q.576 0 .9.396l5.76 6.912q.252.396.252.756zm23.04-14.976q0 .864-.54 1.476l-11.52 13.824q-.72.828-1.764.828t-1.764-.828l-11.52-13.824q-.54-.612-.54-1.476 0-.936.684-1.62t1.62-.684h6.912v-13.824h-20.736q-.576 0-.9-.432l-5.76-6.912q-.252-.324-.252-.72 0-.468.342-.81t.81-.342h34.56q.288 0 .486.072t.324.252.198.288.108.414.036.414v21.6h6.912q.936 0 1.62.684t.684 1.62z","SHOPPING_CART":"M23.04-9.143q0 1.872-1.368 3.24t-3.24 1.368-3.24-1.368-1.368-3.24 1.368-3.24 3.24-1.368 3.24 1.368 1.368 3.24zm32.256 0q0 1.872-1.368 3.24t-3.24 1.368-3.24-1.368-1.368-3.24 1.368-3.24 3.24-1.368 3.24 1.368 1.368 3.24zm4.608-39.168v18.432q0 .864-.594 1.53t-1.458.774l-37.584 4.392q.468 2.16.468 2.52 0 .576-.864 2.304h33.12q.936 0 1.62.684t.684 1.62-.684 1.62-1.62.684h-36.864q-.936 0-1.62-.684t-.684-1.62q0-.396.288-1.134t.576-1.296.774-1.44.558-1.062l-6.372-29.628h-7.344q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h9.216q.576 0 1.026.234t.702.558.468.882.288.936.198 1.062.162.936h43.236q.936 0 1.62.684t.684 1.62z","FOLDER":"M59.904-42.551v25.344q0 3.312-2.376 5.688t-5.688 2.376h-43.776q-3.312 0-5.688-2.376t-2.376-5.688v-34.56q0-3.312 2.376-5.688t5.688-2.376h11.52q3.312 0 5.688 2.376t2.376 5.688v1.152h24.192q3.312 0 5.688 2.376t2.376 5.688z","FOLDER_OPEN":"M67.644-30.167q0 1.116-1.116 2.376l-12.096 14.256q-1.548 1.836-4.338 3.114t-5.166 1.278h-39.168q-1.224 0-2.178-.468t-.954-1.548q0-1.116 1.116-2.376l12.096-14.256q1.548-1.836 4.338-3.114t5.166-1.278h39.168q1.224 0 2.178.468t.954 1.548zm-12.348-12.384v5.76h-29.952q-3.384 0-7.092 1.71t-5.904 4.302l-12.132 14.256-.18.216-.018-.45-.018-.45v-34.56q0-3.312 2.376-5.688t5.688-2.376h11.52q3.312 0 5.688 2.376t2.376 5.688v1.152h19.584q3.312 0 5.688 2.376t2.376 5.688z","ARROWS_V":"M25.344-52.919q0 .936-.684 1.62t-1.62.684h-4.608v36.864h4.608q.936 0 1.62.684t.684 1.62-.684 1.62l-9.216 9.216q-.684.684-1.62.684t-1.62-.684l-9.216-9.216q-.684-.684-.684-1.62t.684-1.62 1.62-.684h4.608v-36.864h-4.608q-.936 0-1.62-.684t-.684-1.62.684-1.62l9.216-9.216q.684-.684 1.62-.684t1.62.684l9.216 9.216q.684.684.684 1.62z","ARROWS_H":"M64.512-32.183q0 .936-.684 1.62l-9.216 9.216q-.684.684-1.62.684t-1.62-.684-.684-1.62v-4.608h-36.864v4.608q0 .936-.684 1.62t-1.62.684-1.62-.684l-9.216-9.216q-.684-.684-.684-1.62t.684-1.62l9.216-9.216q.684-.684 1.62-.684t1.62.684.684 1.62v4.608h36.864v-4.608q0-.936.684-1.62t1.62-.684 1.62.684l9.216 9.216q.684.684.684 1.62z","BAR_CHART_O":"M23.04-32.183v18.432h-9.216v-18.432h9.216zm13.824-18.432v36.864h-9.216v-36.864h9.216zm36.864 41.472v4.608h-73.728v-55.296h4.608v50.688h69.12zm-23.04-32.256v27.648h-9.216v-27.648h9.216zm13.824-13.824v41.472h-9.216v-41.472h9.216z","TWITTER_SQUARE":"M46.08-42.479q-2.016.9-4.356 1.224 2.448-1.44 3.348-4.212-2.34 1.368-4.824 1.836-2.196-2.376-5.508-2.376-3.132 0-5.346 2.214t-2.214 5.346q0 1.044.18 1.728-4.644-.252-8.712-2.34t-6.912-5.58q-1.044 1.8-1.044 3.816 0 4.104 3.276 6.3-1.692-.036-3.6-.936v.072q0 2.7 1.8 4.806t4.428 2.61q-1.044.288-1.836.288-.468 0-1.404-.144.756 2.268 2.682 3.744t4.374 1.512q-4.176 3.24-9.396 3.24-.936 0-1.8-.108 5.328 3.384 11.592 3.384 4.032 0 7.56-1.278t6.048-3.42 4.338-4.932 2.7-5.832.882-6.066q0-.648-.036-.972 2.268-1.62 3.78-3.924zm9.216-6.984v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","FACEBOOK_SQUARE":"M44.928-59.831q4.284 0 7.326 3.042t3.042 7.326v34.56q0 4.284-3.042 7.326t-7.326 3.042h-6.768v-21.42h7.164l1.08-8.352h-8.244v-5.328q0-2.016.846-3.024t3.294-1.008l4.392-.036v-7.452q-2.268-.324-6.408-.324-4.896 0-7.83 2.88t-2.934 8.136v6.156h-7.2v8.352h7.2v21.42h-19.152q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56z","CAMERA_RETRO":"M33.408-34.487q0-.504-.324-.828t-.828-.324q-2.376 0-4.068 1.692t-1.692 4.068q0 .504.324.828t.828.324.828-.324.324-.828q0-1.44 1.008-2.448t2.448-1.008q.504 0 .828-.324t.324-.828zm8.064 4.68q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516 2.7-6.516 6.516-2.7 6.516 2.7 2.7 6.516zm-36.864 20.664h55.296v-4.608h-55.296v4.608zm41.472-20.664q0-5.724-4.05-9.774t-9.774-4.05-9.774 4.05-4.05 9.774 4.05 9.774 9.774 4.05 9.774-4.05 4.05-9.774zm-36.864-23.112h13.824v-4.608h-13.824v4.608zm-4.608 6.912h55.296v-9.216000000000001h-29.808l-2.304 4.608h-23.184v4.608zm59.904-9.216v46.08q0 1.908-1.35 3.258t-3.258 1.35h-55.296q-1.908 0-3.258-1.35t-1.35-3.258v-46.08q0-1.908 1.35-3.258t3.258-1.35h55.296q1.908 0 3.258 1.35t1.35 3.258z","KEY":"M29.952-46.007q0-2.88-2.016-4.896t-4.896-2.016-4.896 2.016-2.016 4.896q0 1.512.684 2.988-1.476-.684-2.988-.684-2.88 0-4.896 2.016t-2.016 4.896 2.016 4.896 4.896 2.016 4.896-2.016 2.016-4.896q0-1.512-.684-2.988 1.476.684 2.988.684 2.88 0 4.896-2.016t2.016-4.896zm30.636 25.344q0 .612-1.764 2.376t-2.376 1.764q-.324 0-1.026-.576t-1.314-1.188-1.386-1.44-.882-.936l-3.456 3.456 7.92 7.92q1.008 1.008 1.008 2.448 0 1.512-1.404 2.916t-2.916 1.404q-1.44 0-2.448-1.008l-24.156-24.156q-6.336 4.716-13.14 4.716-5.868 0-9.558-3.69t-3.69-9.558q0-5.76 3.42-11.268t8.928-8.928 11.268-3.42q5.868 0 9.558 3.69t3.69 9.558q0 6.804-4.716 13.14l12.78 12.78 3.456-3.456q-.108-.108-.936-.882t-1.44-1.386-1.188-1.314-.576-1.026q0-.612 1.764-2.376t2.376-1.764q.468 0 .828.36.216.216 1.656 1.602t2.952 2.862 3.114 3.096 2.628 2.808 1.026 1.476z","GEARS":"M32.256-32.183q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516 2.7 6.516 6.516 2.7 6.516-2.7 2.7-6.516zm27.648 18.432q0-1.872-1.368-3.24t-3.24-1.368-3.24 1.368-1.368 3.24q0 1.908 1.35 3.258t3.258 1.35 3.258-1.35 1.35-3.258zm0-36.864q0-1.872-1.368-3.24t-3.24-1.368-3.24 1.368-1.368 3.24q0 1.908 1.35 3.258t3.258 1.35 3.258-1.35 1.35-3.258zm-13.824 15.156v6.66q0 .36-.252.702t-.576.378l-5.58.864q-.396 1.26-1.152 2.736 1.224 1.728 3.24 4.14.252.36.252.72 0 .432-.252.684-.828 1.08-2.97 3.222t-2.826 2.142q-.396 0-.756-.252l-4.14-3.24q-1.332.684-2.772 1.116-.396 3.888-.828 5.58-.252.864-1.08.864h-6.696q-.396 0-.72-.27t-.36-.63l-.828-5.508q-1.224-.36-2.7-1.116l-4.248 3.204q-.252.252-.72.252-.396 0-.756-.288-5.184-4.788-5.184-5.76 0-.324.252-.684.36-.504 1.476-1.908t1.692-2.196q-.828-1.584-1.26-2.952l-5.472-.864q-.36-.036-.612-.342t-.252-.702v-6.66q0-.36.252-.702t.576-.378l5.58-.864q.396-1.26 1.152-2.736-1.224-1.728-3.24-4.14-.252-.396-.252-.72 0-.432.252-.72.792-1.08 2.952-3.204t2.844-2.124q.396 0 .756.252l4.14 3.24q1.224-.648 2.772-1.152.396-3.888.828-5.544.252-.864 1.08-.864h6.696q.396 0 .72.27t.36.63l.828 5.508q1.224.36 2.7 1.116l4.248-3.204q.288-.252.72-.252.396 0 .756.288 5.184 4.788 5.184 5.76 0 .324-.252.684-.432.576-1.512 1.944t-1.62 2.16q.828 1.728 1.224 2.952l5.472.828q.36.072.612.378t.252.702zm23.04 19.188v5.04q0 .576-5.364 1.116-.432.972-1.08 1.872 1.836 4.068 1.836 4.968 0 .144-.144.252-4.392 2.556-4.464 2.556-.288 0-1.656-1.692t-1.872-2.448q-.72.072-1.08.072t-1.08-.072q-.504.756-1.872 2.448t-1.656 1.692q-.072 0-4.464-2.556-.144-.108-.144-.252 0-.9 1.836-4.968-.648-.9-1.08-1.872-5.364-.54-5.364-1.116v-5.04q0-.576 5.364-1.116.468-1.044 1.08-1.872-1.836-4.068-1.836-4.968 0-.144.144-.252.144-.072 1.26-.72t2.124-1.224 1.08-.576q.288 0 1.656 1.674t1.872 2.43q.72-.072 1.08-.072t1.08.072q1.836-2.556 3.312-4.032l.216-.072q.144 0 4.464 2.52.144.108.144.252 0 .9-1.836 4.968.612.828 1.08 1.872 5.364.54 5.364 1.116zm0-36.864v5.04q0 .576-5.364 1.116-.432.972-1.08 1.872 1.836 4.068 1.836 4.968 0 .144-.144.252-4.392 2.556-4.464 2.556-.288 0-1.656-1.692t-1.872-2.448q-.72.072-1.08.072t-1.08-.072q-.504.756-1.872 2.448t-1.656 1.692q-.072 0-4.464-2.556-.144-.108-.144-.252 0-.9 1.836-4.968-.648-.9-1.08-1.872-5.364-.54-5.364-1.116v-5.04q0-.576 5.364-1.116.468-1.044 1.08-1.872-1.836-4.068-1.836-4.968 0-.144.144-.252.144-.072 1.26-.72t2.124-1.224 1.08-.576q.288 0 1.656 1.674t1.872 2.43q.72-.072 1.08-.072t1.08.072q1.836-2.556 3.312-4.032l.216-.072q.144 0 4.464 2.52.144.108.144.252 0 .9-1.836 4.968.612.828 1.08 1.872 5.364.54 5.364 1.116z","COMMENTS":"M50.688-36.791q0 5.004-3.384 9.252t-9.234 6.714-12.726 2.466q-3.096 0-6.336-.576-4.464 3.168-10.008 4.608-1.296.324-3.096.576h-.108q-.396 0-.738-.288t-.414-.756q-.036-.108-.036-.234t.018-.234.072-.216l.09-.18.126-.198.144-.18.162-.18.144-.162q.18-.216.828-.9t.936-1.062.81-1.044.9-1.386.738-1.584q-4.464-2.592-7.02-6.372t-2.556-8.064q0-5.004 3.384-9.252t9.234-6.714 12.726-2.466 12.726 2.466 9.234 6.714 3.384 9.252zm13.824 9.216q0 4.32-2.556 8.082t-7.02 6.354q.36.864.738 1.584t.9 1.386.81 1.044.936 1.062.828.9l.144.162.162.18.144.18.126.198.09.18.072.216.018.234-.036.234q-.108.504-.468.792t-.792.252q-1.8-.252-3.096-.576-5.544-1.44-10.008-4.608-3.24.576-6.336.576-9.756 0-16.992-4.752 2.088.144 3.168.144 5.796 0 11.124-1.62t9.504-4.644q4.5-3.312 6.912-7.632t2.412-9.144q0-2.772-.828-5.472 4.644 2.556 7.344 6.408t2.7 8.28z","THUMBS_O_UP":"M9.216-16.055q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm41.472-20.736q0-1.836-1.404-3.222t-3.204-1.386h-12.672q0-2.088 1.728-5.742t1.728-5.778q0-3.528-1.152-5.22t-4.608-1.692q-.936.936-1.368 3.06t-1.098 4.518-2.142 3.942q-.792.828-2.772 3.276-.144.18-.828 1.08t-1.134 1.476-1.242 1.53-1.44 1.584-1.386 1.278-1.44.972-1.278.324h-1.152v23.04h1.152q.468 0 1.134.108t1.188.234 1.368.396 1.26.414 1.278.45 1.044.378q7.596 2.628 12.312 2.628h4.356q6.912 0 6.912-6.012 0-.936-.18-2.016 1.08-.576 1.71-1.89t.63-2.646-.648-2.484q1.908-1.8 1.908-4.284 0-.9-.36-1.998t-.9-1.71q1.152-.036 1.926-1.692t.774-2.916zm4.608-.036q0 3.204-1.764 5.868.324 1.188.324 2.484 0 2.772-1.368 5.184.108.756.108 1.548 0 3.636-2.16 6.408.036 5.004-3.06 7.902t-8.172 2.898h-4.644q-3.456 0-6.822-.81t-7.794-2.358q-4.176-1.44-4.968-1.44h-10.368q-1.908 0-3.258-1.35t-1.35-3.258v-23.04q0-1.908 1.35-3.258t3.258-1.35h9.864q1.296-.864 4.932-5.58 2.088-2.7 3.852-4.608.864-.9 1.278-3.078t1.098-4.554 2.232-3.888q1.404-1.332 3.24-1.332 3.024 0 5.436 1.17t3.672 3.654 1.26 6.696q0 3.348-1.728 6.912h6.336q3.744 0 6.48 2.736t2.736 6.444z","THUMBS_O_DOWN":"M9.216-48.311q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm41.472 20.736q0-1.26-.774-2.916t-1.926-1.692q.54-.612.9-1.71t.36-1.998q0-2.484-1.908-4.284.648-1.152.648-2.484t-.63-2.646-1.71-1.89q.18-1.08.18-2.016 0-3.06-1.764-4.536t-4.896-1.476h-4.608q-4.716 0-12.312 2.628-.18.072-1.044.378t-1.278.45-1.26.414-1.368.396-1.188.234-1.134.108h-1.152v23.04h1.152q.576 0 1.278.324t1.44.972 1.386 1.278 1.44 1.584 1.242 1.53 1.134 1.476.828 1.08q1.98 2.448 2.772 3.276 1.476 1.548 2.142 3.942t1.098 4.518 1.368 3.06q3.456 0 4.608-1.692t1.152-5.22q0-2.124-1.728-5.778t-1.728-5.742h12.672q1.8 0 3.204-1.386t1.404-3.222zm4.608.036q0 3.708-2.736 6.444t-6.48 2.736h-6.336q1.728 3.564 1.728 6.912 0 4.248-1.26 6.696-1.26 2.484-3.672 3.654t-5.436 1.17q-1.836 0-3.24-1.332-1.224-1.188-1.944-2.952t-.918-3.258-.63-3.042-1.116-2.304q-1.728-1.8-3.852-4.572-3.636-4.716-4.932-5.58h-9.864q-1.908 0-3.258-1.35t-1.35-3.258v-23.04q0-1.908 1.35-3.258t3.258-1.35h10.368q.792 0 4.968-1.44 4.608-1.584 8.028-2.376t7.2-.792h4.032q5.04 0 8.154 2.844t3.078 7.776v.18q2.16 2.772 2.16 6.408 0 .792-.108 1.548 1.368 2.412 1.368 5.184 0 1.296-.324 2.484 1.764 2.664 1.764 5.868z","STAR_HALF":"M29.952-63.287v48.204l-16.164 8.496q-.792.432-1.44.432-.756 0-1.134-.522t-.378-1.278q0-.216.072-.72l3.096-18-13.104-12.744q-.9-.972-.9-1.728 0-1.332 2.016-1.656l18.072-2.628 8.1-16.38q.684-1.476 1.764-1.476z","HEART_O":"M59.904-42.983q0-2.916-.774-5.148t-1.98-3.546-2.934-2.142-3.384-1.116-3.528-.288-4.032.918-3.978 2.304-3.114 2.592-2.16 2.214q-.648.792-1.764.792t-1.764-.792q-.864-1.008-2.16-2.214t-3.114-2.592-3.978-2.304-4.032-.918-3.528.288-3.384 1.116-2.934 2.142-1.98 3.546-.774 5.148q0 6.048 6.732 12.78l20.916 20.16 20.88-20.124q6.768-6.768 6.768-12.816zm4.608 0q0 7.956-8.244 16.2l-22.428 21.6q-.648.648-1.584.648t-1.584-.648l-22.464-21.672q-.36-.288-.99-.936t-1.998-2.358-2.448-3.51-1.926-4.356-.846-4.968q0-7.92 4.572-12.384t12.636-4.464q2.232 0 4.554.774t4.32 2.088 3.438 2.466 2.736 2.448q1.296-1.296 2.736-2.448t3.438-2.466 4.32-2.088 4.554-.774q8.064 0 12.636 4.464t4.572 12.384z","SIGN_OUT":"M23.04-12.599q0 .144.036.72t.018.954-.108.846-.36.702-.738.234h-11.52q-4.284 0-7.326-3.042t-3.042-7.326v-25.344q0-4.284 3.042-7.326t7.326-3.042h11.52q.468 0 .81.342t.342.81q0 .144.036.72t.018.954-.108.846-.36.702-.738.234h-11.52q-2.376 0-4.068 1.692t-1.692 4.068v25.344q0 2.376 1.692 4.068t4.068 1.692h11.232000000000001l.414.036.414.108.288.198.252.324.072.486zm33.408-19.584q0 .936-.684 1.62l-19.584 19.584q-.684.684-1.62.684t-1.62-.684-.684-1.62v-10.368h-16.128q-.936 0-1.62-.684t-.684-1.62v-13.824q0-.936.684-1.62t1.62-.684h16.128v-10.368q0-.936.684-1.62t1.62-.684 1.62.684l19.584 19.584q.684.684.684 1.62z","LINKEDIN_SQUARE":"M8.532-13.535h8.316v-24.984h-8.316v24.984zm8.856-32.688q-.036-1.872-1.296-3.096t-3.348-1.224-3.402 1.224-1.314 3.096q0 1.836 1.278 3.078t3.33 1.242h.036q2.124 0 3.42-1.242t1.296-3.078zm21.06 32.688h8.316v-14.328q0-5.544-2.628-8.388t-6.948-2.844q-4.896 0-7.524 4.212h.072v-3.636h-8.316q.108 2.376 0 24.984h8.316v-13.968q0-1.368.252-2.016.54-1.26 1.62-2.142t2.664-.882q4.176 0 4.176 5.652v13.356zm16.848-35.928v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","THUMB_TACK":"M17.28-33.335v-16.128q0-.504-.324-.828t-.828-.324-.828.324-.324.828v16.128q0 .504.324.828t.828.324.828-.324.324-.828zm24.192 12.672q0 .936-.684 1.62t-1.62.684h-15.444l-1.836 17.388q-.072.432-.378.738t-.738.306h-.036q-.972 0-1.152-.972l-2.736-17.46h-14.544q-.936 0-1.62-.684t-.684-1.62q0-4.428 2.826-7.974t6.39-3.546v-18.432q-1.872 0-3.24-1.368t-1.368-3.24 1.368-3.24 3.24-1.368h23.04q1.872 0 3.24 1.368t1.368 3.24-1.368 3.24-3.24 1.368v18.432q3.564 0 6.39 3.546t2.826 7.974z","EXTERNAL_LINK":"M50.688-31.031v11.52q0 4.284-3.042 7.326t-7.326 3.042h-29.952q-4.284 0-7.326-3.042t-3.042-7.326v-29.952q0-4.284 3.042-7.326t7.326-3.042h25.344q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-25.344q-2.376 0-4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068-1.692t1.692-4.068v-11.52q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828zm13.824-31.104v18.432q0 .936-.684 1.62t-1.62.684-1.62-.684l-6.336-6.336-23.472 23.472q-.36.36-.828.36t-.828-.36l-4.104-4.104q-.36-.36-.36-.828t.36-.828l23.472-23.472-6.336-6.336q-.684-.684-.684-1.62t.684-1.62 1.62-.684h18.432q.936 0 1.62.684t.684 1.62z","SIGN_IN":"M42.624-32.183q0 .936-.684 1.62l-19.584 19.584q-.684.684-1.62.684t-1.62-.684-.684-1.62v-10.368h-16.128q-.936 0-1.62-.684t-.684-1.62v-13.824q0-.936.684-1.62t1.62-.684h16.128v-10.368q0-.936.684-1.62t1.62-.684 1.62.684l19.584 19.584q.684.684.684 1.62zm12.672-12.672v25.344q0 4.284-3.042 7.326t-7.326 3.042h-11.52q-.468 0-.81-.342t-.342-.81q0-.144-.036-.72t-.018-.954.108-.846.36-.702.738-.234h11.52q2.376 0 4.068-1.692t1.692-4.068v-25.344q0-2.376-1.692-4.068t-4.068-1.692h-11.232000000000001l-.414-.036-.414-.108-.288-.198-.252-.324-.072-.486q0-.144-.036-.72t-.018-.954.108-.846.36-.702.738-.234h11.52q4.284 0 7.326 3.042t3.042 7.326z","TROPHY":"M16.488-32.651q-2.664-5.832-2.664-13.356h-9.216v3.456q0 2.808 3.402 5.832t8.478 4.068zm38.808-9.9v-3.456h-9.216q0 7.524-2.664 13.356 5.076-1.044 8.478-4.068t3.402-5.832zm4.608-4.608v4.608q0 2.556-1.494 5.148t-4.032 4.68-6.228 3.51-7.758 1.602q-1.512 1.944-3.42 3.42-1.368 1.224-1.89 2.61t-.522 3.222q0 1.944 1.098 3.276t3.51 1.332q2.7 0 4.806 1.638t2.106 4.122v2.304q0 .504-.324.828t-.828.324h-29.952q-.504 0-.828-.324t-.324-.828v-2.304q0-2.484 2.106-4.122t4.806-1.638q2.412 0 3.51-1.332t1.098-3.276q0-1.836-.522-3.222t-1.89-2.61q-1.908-1.476-3.42-3.42-4.068-.18-7.758-1.602t-6.228-3.51-4.032-4.68-1.494-5.148v-4.608q0-1.44 1.008-2.448t2.448-1.008h10.368v-3.456q0-2.376 1.692-4.068t4.068-1.692h20.736q2.376 0 4.068 1.692t1.692 4.068v3.456h10.368q1.44 0 2.448 1.008t1.008 2.448z","GITHUB_SQUARE":"M18.684-21.239q.144-.216-.108-.468-.324-.252-.504-.072-.144.216.108.468.324.252.504.072zm-1.008-1.476q-.18-.252-.432-.144-.216.144 0 .432.252.288.432.18.216-.144 0-.468zm-1.476-1.44q.072-.144-.18-.288-.252-.072-.288.072-.108.18.144.288.288.072.324-.072zm.756.828q.072-.036.054-.162t-.126-.198q-.216-.252-.36-.108t.036.396q.216.216.396.072zm3.096 2.7q.072-.252-.324-.396-.324-.108-.468.144-.072.252.324.396.324.108.468-.144zm1.512.108q0-.288-.432-.288-.36 0-.36.288t.396.288.396-.288zm1.404-.252q-.072-.252-.468-.18t-.324.324q.072.288.432.216t.36-.36zm23.112-11.412q0-7.632-5.4-13.032t-13.032-5.4-13.032 5.4-5.4 13.032q0 6.012 3.528 10.818t9.072 6.678q.648.108.954-.18t.306-.72q0-1.872-.036-3.42-.216.036-.558.09t-1.278.072-1.728-.144-1.566-.72-1.062-1.494q-.828-2.124-2.052-2.664l-.162-.126-.288-.288-.252-.342.144-.27.702-.126q.216 0 .54.072t1.08.558 1.188 1.278q.576 1.008 1.35 1.512t1.566.504 1.368-.126 1.08-.342q.252-1.692 1.188-2.484-1.764-.216-3.096-.666t-2.628-1.404-1.998-2.736-.702-4.302q0-2.844 1.908-4.932-.864-2.232.18-4.896.684-.216 1.962.27t2.178 1.062l.936.576q2.088-.612 4.608-.612t4.608.612q.396-.252 1.026-.648t1.998-.936 2.052-.324q1.044 2.664.18 4.896 1.908 2.088 1.908 4.932 0 2.052-.504 3.618t-1.278 2.52-1.926 1.602-2.25.936-2.466.432q1.26 1.116 1.26 3.42 0 1.44-.018 3.204t-.018 1.836q0 .432.306.72t.954.18q5.544-1.872 9.072-6.678t3.528-10.818zm9.216-17.28v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","UPLOAD":"M46.08-11.447q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm9.216 0q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm4.608-8.064v11.52q0 1.44-1.008 2.448t-2.448 1.008h-52.992q-1.44 0-2.448-1.008t-1.008-2.448v-11.52q0-1.44 1.008-2.448t2.448-1.008h15.372q.756 2.016 2.538 3.312t3.978 1.296h9.216q2.196 0 3.978-1.296t2.538-3.312h15.372q1.44 0 2.448 1.008t1.008 2.448zm-11.7-23.328q-.612 1.44-2.124 1.44h-9.216v16.128q0 .936-.684 1.62t-1.62.684h-9.216q-.936 0-1.62-.684t-.684-1.62v-16.128h-9.216q-1.512 0-2.124-1.44-.612-1.404.504-2.484l16.128-16.128q.648-.684 1.62-.684t1.62.684l16.128 16.128q1.116 1.08.504 2.484z","LEMON_O":"M50.652-34.703q0-1.584-.252-4.086t-.648-3.474q-.432-1.08-.612-1.584t-.324-1.314-.144-1.746q0-.828.18-2.466t.18-2.43q0-1.332-.36-1.98-.144-.036-.468-.036-.684 0-2.088.162t-2.124.162q-2.16 0-6.336-.864t-6.3-.864q-1.548 0-3.402.414t-3.06.846-3.222 1.224q-4.932 1.944-7.272 3.708-3.456 2.628-5.742 6.822t-3.168 8.496-.882 8.946q0 1.44.45 4.32t.45 4.356q0 .828-.396 2.394t-.396 2.358.432 1.314 1.224.522q.864 0 2.61-.396t2.646-.396q2.052 0 6.102.558t6.102.558q6.516 0 10.224-1.296 4.644-1.62 8.478-5.49t5.976-8.838 2.142-9.9zm4.608-.072q0 5.94-2.52 11.79t-7.056 10.368-10.116 6.498q-4.464 1.584-11.736 1.584-2.052 0-6.12-.522t-6.084-.522q-.864 0-2.61.522t-2.646.522q-2.628 0-4.446-1.998t-1.818-4.626q0-.864.396-2.448t.396-2.412q0-1.44-.45-4.338t-.45-4.374q0-3.996.648-7.83t1.962-7.542 3.618-6.984 5.4-5.616q2.808-2.124 8.352-4.32 6.984-2.808 11.376-2.808 2.16 0 6.318.864t6.246.864q.684 0 2.052-.18t2.088-.18q2.916 0 4.248 1.818t1.332 4.842q0 .828-.18 2.448t-.18 2.448q0 .36.036.666t.108.612.144.486.234.576.234.612q.576 1.44.9 4.266t.324 4.914z","PHONE":"M50.688-19.799q0 .972-.36 2.538t-.756 2.466q-.756 1.8-4.392 3.816-3.384 1.836-6.696 1.836-.972 0-1.89-.126t-2.07-.45-1.71-.522-1.998-.738-1.764-.648q-3.528-1.26-6.3-2.988-4.608-2.844-9.522-7.758t-7.758-9.522q-1.728-2.772-2.988-6.3-.108-.324-.648-1.764t-.738-1.998-.522-1.71-.45-2.07-.126-1.89q0-3.312 1.836-6.696 2.016-3.636 3.816-4.392.9-.396 2.466-.756t2.538-.36q.504 0 .756.108.648.216 1.908 2.736.396.684 1.08 1.944t1.26 2.286 1.116 1.926q.108.144.63.9t.774 1.278.252 1.026q0 .72-1.026 1.8t-2.232 1.98-2.232 1.908-1.026 1.656q0 .324.18.81t.306.738.504.864.414.684q2.736 4.932 6.264 8.46t8.46 6.264q.072.036.684.414t.864.504.738.306.81.18q.648 0 1.656-1.026t1.908-2.232 1.98-2.232 1.8-1.026q.504 0 1.026.252t1.278.774.9.63q.9.54 1.926 1.116t2.286 1.26 1.944 1.08q2.52 1.26 2.736 1.908.108.252.108.756z","SQUARE_O":"M40.32-55.223h-29.952q-2.376 0-4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068-1.692t1.692-4.068v-29.952q0-2.376-1.692-4.068t-4.068-1.692zm10.368 5.76v29.952q0 4.284-3.042 7.326t-7.326 3.042h-29.952q-4.284 0-7.326-3.042t-3.042-7.326v-29.952q0-4.284 3.042-7.326t7.326-3.042h29.952q4.284 0 7.326 3.042t3.042 7.326z","BOOKMARK_O":"M41.472-55.223h-36.864v44.712l15.228-14.616 3.204-3.06 3.204 3.06 15.228 14.616v-44.712zm.432-4.608q.828 0 1.584.324 1.188.468 1.89 1.476t.702 2.232v46.404q0 1.224-.702 2.232t-1.89 1.476q-.684.288-1.584.288-1.728 0-2.988-1.152l-15.876-15.264-15.876 15.264q-1.296 1.188-2.988 1.188-.828 0-1.584-.324-1.188-.468-1.89-1.476t-.702-2.232v-46.404q0-1.224.702-2.232t1.89-1.476q.756-.324 1.584-.324h37.728z","PHONE_SQUARE":"M46.08-21.491q0-.396-.072-.576-.108-.288-1.386-1.062t-3.186-1.782l-1.908-1.044q-.18-.108-.684-.468t-.9-.54-.756-.18q-.648 0-1.692 1.17t-2.052 2.358-1.584 1.188q-.252 0-.594-.126t-.558-.234-.612-.342-.504-.306q-3.564-1.98-6.138-4.554t-4.554-6.138q-.072-.108-.306-.504t-.342-.612-.234-.558-.126-.594q0-.468.738-1.206t1.62-1.386 1.62-1.422.738-1.314q0-.36-.18-.756t-.54-.9-.468-.684q-.108-.216-.54-1.026t-.9-1.638-.954-1.71-.9-1.458-.594-.648-.576-.072q-1.728 0-3.636.792-1.656.756-2.88 3.402t-1.224 4.698q0 .576.09 1.224t.18 1.098.324 1.188.36 1.062.45 1.188.396 1.08q2.16 5.904 7.794 11.538t11.538 7.794q.216.072 1.08.396t1.188.45 1.062.36 1.188.324 1.098.18 1.224.09q2.052 0 4.698-1.224t3.402-2.88q.792-1.908.792-3.636zm9.216-27.972v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","TWITTER":"M58.32-49.751q-2.412 3.528-5.832 6.012.036.504.036 1.512 0 4.68-1.368 9.342t-4.158 8.946-6.642 7.578-9.288 5.256-11.628 1.962q-9.756 0-17.856-5.22 1.26.144 2.808.144 8.1 0 14.436-4.968-3.78-.072-6.768-2.322t-4.104-5.742q1.188.18 2.196.18 1.548 0 3.06-.396-4.032-.828-6.678-4.014t-2.646-7.398v-.144q2.448 1.368 5.256 1.476-2.376-1.584-3.78-4.14t-1.404-5.544q0-3.168 1.584-5.868 4.356 5.364 10.602 8.586t13.374 3.582q-.288-1.368-.288-2.664 0-4.824 3.402-8.226t8.226-3.402q5.04 0 8.496 3.672 3.924-.756 7.38-2.808-1.332 4.14-5.112 6.408 3.348-.36 6.696-1.8z","FACEBOOK_F":"M34.524-64.007v9.504h-5.652q-3.096 0-4.176 1.296t-1.08 3.888v6.804h10.548l-1.404 10.656h-9.144v27.324h-11.016v-27.324h-9.18v-10.656h9.18v-7.848q0-6.696 3.744-10.386t9.972-3.69q5.292 0 8.208.432z","GITHUB":"M27.648-59.831q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878q0 9.036-5.274 16.254t-13.626 9.99q-.972.18-1.44-.252t-.468-1.08q0-.108.018-2.754t.018-4.842q0-3.492-1.872-5.112 2.052-.216 3.69-.648t3.384-1.404 2.916-2.394 1.908-3.78.738-5.418q0-4.284-2.844-7.416 1.332-3.276-.288-7.344-1.008-.324-2.916.396t-3.312 1.584l-1.368.864q-3.348-.936-6.912-.936t-6.912.936q-.576-.396-1.53-.972t-3.006-1.386-3.06-.486q-1.62 4.068-.288 7.344-2.844 3.132-2.844 7.416 0 3.06.738 5.4t1.89 3.78 2.898 2.412 3.384 1.404 3.69.648q-1.404 1.296-1.764 3.708-.756.36-1.62.54t-2.052.18-2.358-.774-1.998-2.25q-.684-1.152-1.746-1.872t-1.782-.864l-.72-.108q-.756 0-1.044.162t-.18.414.324.504.468.432l.252.18q.792.36 1.566 1.368t1.134 1.836l.36.828q.468 1.368 1.584 2.214t2.412 1.08 2.502.252 1.998-.126l.828-.144q0 1.368.018 3.186t.018 1.962q0 .648-.468 1.08t-1.44.252q-8.352-2.772-13.626-9.99t-5.274-16.254q0-7.524 3.708-13.878t10.062-10.062 13.878-3.708zm-17.172 39.708q.108-.252-.252-.432-.36-.108-.468.072-.108.252.252.432.324.216.468-.072zm1.116 1.224q.252-.18-.072-.576-.36-.324-.576-.108-.252.18.072.576.36.36.576.108zm1.08 1.62q.324-.252 0-.684-.288-.468-.612-.216-.324.18 0 .648t.612.252zm1.512 1.512q.288-.288-.144-.684-.432-.432-.72-.108-.324.288.144.684.432.432.72.108zm2.052.9q.108-.396-.468-.576-.54-.144-.684.252t.468.54q.54.216.684-.216zm2.268.18q0-.468-.612-.396-.576 0-.576.396 0 .468.612.396.576 0 .576-.396zm2.088-.36q-.072-.396-.648-.324-.576.108-.504.54t.648.288.504-.504z","UNLOCK":"M59.904-43.703v9.216q0 .936-.684 1.62t-1.62.684h-2.304q-.936 0-1.62-.684t-.684-1.62v-9.216q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516v6.912h3.456q1.44 0 2.448 1.008t1.008 2.448v20.736q0 1.44-1.008 2.448t-2.448 1.008h-34.56q-1.44 0-2.448-1.008t-1.008-2.448v-20.736q0-1.44 1.008-2.448t2.448-1.008h24.192v-6.912q0-6.66 4.734-11.394t11.394-4.734 11.394 4.734 4.734 11.394z","CREDIT_CARD":"M63.36-59.831q2.376 0 4.068 1.692t1.692 4.068v43.776q0 2.376-1.692 4.068t-4.068 1.692h-57.6q-2.376 0-4.068-1.692t-1.692-4.068v-43.776q0-2.376 1.692-4.068t4.068-1.692h57.6zm-57.6 4.608q-.468 0-.81.342t-.342.81v8.064h59.904v-8.064q0-.468-.342-.81t-.81-.342h-57.6zm57.6 46.08q.468 0 .81-.342t.342-.81v-21.888h-59.904v21.888q0 .468.342.81t.81.342h57.6zm-54.144-4.608v-4.608h9.216v4.608h-9.216zm13.824 0v-4.608h13.824v4.608h-13.824z","RSS":"M13.824-16.055q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm18.432 4.428q.072 1.008-.612 1.728-.648.756-1.692.756h-4.86q-.9 0-1.548-.594t-.72-1.494q-.792-8.244-6.642-14.094t-14.094-6.642q-.9-.072-1.494-.72t-.594-1.548v-4.86q0-1.044.756-1.692.612-.612 1.548-.612h.18q5.76.468 11.016 2.898t9.324 6.534q4.104 4.068 6.534 9.324t2.898 11.016zm18.432.072q.072.972-.648 1.692-.648.72-1.656.72h-5.148q-.936 0-1.602-.63t-.702-1.53q-.432-7.74-3.636-14.706t-8.334-12.096-12.096-8.334-14.706-3.672q-.9-.036-1.53-.702t-.63-1.566v-5.148q0-1.008.72-1.656.648-.648 1.584-.648h.108q9.432.468 18.054 4.32t15.318 10.584q6.732 6.696 10.584 15.318t4.32 18.054z","HDD_O":"M37.44-20.663q0 1.188-.846 2.034t-2.034.846-2.034-.846-.846-2.034.846-2.034 2.034-.846 2.034.846.846 2.034zm9.216 0q0 1.188-.846 2.034t-2.034.846-2.034-.846-.846-2.034.846-2.034 2.034-.846 2.034.846.846 2.034zm4.032 5.76v-11.52q0-.468-.342-.81t-.81-.342h-43.776q-.468 0-.81.342t-.342.81v11.52q0 .468.342.81t.81.342h43.776q.468 0 .81-.342t.342-.81zm-44.28-17.28h42.48l-5.652-17.352q-.144-.468-.576-.774t-.936-.306h-28.152q-.504 0-.936.306t-.576.774zm48.888 5.76v11.52q0 2.376-1.692 4.068t-4.068 1.692h-43.776q-2.376 0-4.068-1.692t-1.692-4.068v-11.52q0-.9.576-2.7l7.092-21.816q.612-1.908 2.268-3.096t3.636-1.188h28.152q1.98 0 3.636 1.188t2.268 3.096l7.092 21.816q.576 1.8.576 2.7z","BULLHORN":"M59.904-41.399q1.908 0 3.258 1.35t1.35 3.258-1.35 3.258-3.258 1.35v13.824q0 1.872-1.368 3.24t-3.24 1.368q-15.012-12.492-29.232-13.68-2.088.684-3.276 2.376t-1.116 3.618 1.44 3.33q-.72 1.188-.828 2.358t.216 2.088 1.206 1.98 1.728 1.8 2.214 1.818q-1.044 2.088-4.014 2.988t-6.066.414-4.752-1.998q-.252-.828-1.062-3.15t-1.152-3.402-.828-3.204-.54-3.636.126-3.546.792-3.978h-4.392q-2.376 0-4.068-1.692t-1.692-4.068v-6.912q0-2.376 1.692-4.068t4.068-1.692h17.28q15.66 0 32.256-13.824 1.872 0 3.24 1.368t1.368 3.24v13.824zm-4.608 21.744v-34.344q-14.184 10.872-27.648 12.348v9.72q13.572 1.512 27.648 12.276z","BELL_O":"M32.832-3.383q0-.576-.576-.576-2.124 0-3.654-1.53t-1.53-3.654q0-.576-.576-.576t-.576.576q0 2.628 1.854 4.482t4.482 1.854q.576 0 .576-.576zm-23.976-10.368h46.8q-9.576-10.8-9.576-29.952 0-1.836-.864-3.78t-2.484-3.708-4.374-2.898-6.102-1.134-6.102 1.134-4.374 2.898-2.484 3.708-.864 3.78q0 19.152-9.576 29.952zm53.352 0q0 1.872-1.368 3.24t-3.24 1.368h-16.128q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516h-16.128q-1.872 0-3.24-1.368t-1.368-3.24q1.8-1.512 3.276-3.168t3.06-4.302 2.682-5.706 1.8-7.416.702-9.36q0-5.472 4.212-10.17t11.052-5.706q-.288-.684-.288-1.404 0-1.44 1.008-2.448t2.448-1.008 2.448 1.008 1.008 2.448q0 .72-.288 1.404 6.84 1.008 11.052 5.706t4.212 10.17q0 5.004.702 9.36t1.8 7.416 2.682 5.706 3.06 4.302 3.276 3.168z","CERTIFICATE":"M49.536-32.183l4.968 4.86q1.08 1.008.72 2.52-.432 1.476-1.872 1.836l-6.768 1.728 1.908 6.696q.432 1.476-.684 2.52-1.044 1.116-2.52.684l-6.696-1.908-1.728 6.768q-.36 1.44-1.836 1.872-.432.072-.684.072-1.116 0-1.836-.792l-4.86-4.968-4.86 4.968q-1.008 1.08-2.52.72-1.476-.396-1.836-1.872l-1.728-6.768-6.696 1.908q-1.476.432-2.52-.684-1.116-1.044-.684-2.52l1.908-6.696-6.768-1.728q-1.44-.36-1.872-1.836-.36-1.512.72-2.52l4.968-4.86-4.968-4.86q-1.08-1.008-.72-2.52.432-1.476 1.872-1.836l6.768-1.728-1.908-6.696q-.432-1.476.684-2.52 1.044-1.116 2.52-.684l6.696 1.908 1.728-6.768q.36-1.476 1.836-1.836 1.476-.432 2.52.684l4.86 5.004 4.86-5.004q1.044-1.08 2.52-.684 1.476.36 1.836 1.836l1.728 6.768 6.696-1.908q1.476-.432 2.52.684 1.116 1.044.684 2.52l-1.908 6.696 6.768 1.728q1.44.36 1.872 1.836.36 1.512-.72 2.52z","HAND_O_RIGHT":"M9.216-16.055q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm50.688-20.736q0-1.836-1.404-3.222t-3.204-1.386h-20.736q0-.72.54-1.746t1.188-1.98 1.188-2.448.54-3.042q0-2.412-1.602-3.51t-4.158-1.098q-.864 0-3.24 5.004-.864 1.584-1.332 2.34-1.44 2.304-4.032 5.22-2.556 2.916-3.636 3.816-2.484 2.052-5.04 2.052h-1.152v23.04h1.152q2.592 0 6.012 1.152t6.966 2.304 6.462 1.152q6.804 0 6.804-6.012 0-.936-.18-2.016 1.08-.576 1.71-1.89t.63-2.646-.648-2.484q1.908-1.8 1.908-4.284 0-.9-.36-1.998t-.9-1.71h11.916q1.872 0 3.24-1.368t1.368-3.24zm4.608-.036q0 3.78-2.718 6.516t-6.498 2.736h-6.084q-.144 2.232-1.332 4.284.108.756.108 1.548 0 3.636-2.16 6.408.036 5.004-3.06 7.902t-8.172 2.898q-4.788 0-11.592-2.484-5.904-2.124-8.028-2.124h-10.368q-1.908 0-3.258-1.35t-1.35-3.258v-23.04q0-1.908 1.35-3.258t3.258-1.35h10.368q.36 0 .774-.162t.846-.504.81-.648.864-.81.738-.774.684-.774.504-.612q2.34-2.664 3.6-4.644.468-.756 1.188-2.232t1.332-2.592 1.458-2.268 1.98-1.782 2.502-.63q4.5 0 7.434 2.412t2.934 6.804q0 2.448-.792 4.608h13.464q3.744 0 6.48 2.736t2.736 6.444z","HAND_O_LEFT":"M49.536-13.751h1.152v-23.04h-1.152q-1.26 0-2.43-.432t-2.25-1.332-1.8-1.656-1.764-1.944l-.126-.162-.144-.162-.162-.18q-2.592-2.916-4.032-5.22-.504-.792-1.368-2.448-.036-.108-.378-.81t-.666-1.296-.72-1.278-.774-1.098-.666-.414q-2.556 0-4.158 1.098t-1.602 3.51q0 1.548.54 3.042t1.188 2.448 1.188 1.98.54 1.746h-20.736q-1.8 0-3.204 1.386t-1.404 3.222q0 1.872 1.368 3.24t3.24 1.368h11.916q-.54.612-.9 1.71t-.36 1.998q0 2.484 1.908 4.284-.648 1.152-.648 2.484t.63 2.646 1.71 1.89q-.144.864-.144 2.016 0 3.06 1.746 4.536t4.878 1.476q3.024 0 6.588-1.152t6.984-2.304 6.012-1.152zm10.368-2.304q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm4.608-20.736v23.04q0 1.908-1.35 3.258t-3.258 1.35h-10.368q-2.124 0-8.028 2.124-6.84 2.484-11.412 2.484-5.112 0-8.28-2.79t-3.132-7.83l.036-.18q-2.196-2.736-2.196-6.408 0-.792.108-1.548-1.188-2.052-1.332-4.284h-6.084q-3.78 0-6.498-2.736t-2.718-6.516q0-3.708 2.736-6.444t6.48-2.736h13.464q-.792-2.16-.792-4.608 0-4.392 2.934-6.804t7.434-2.412q1.368 0 2.502.63t1.98 1.782 1.458 2.268 1.332 2.592 1.188 2.232q1.26 1.98 3.6 4.644.072.108.504.612t.684.774.738.774.864.81.81.648.846.504.774.162h10.368q1.908 0 3.258 1.35t1.35 3.258z","HAND_O_UP":"M46.08-6.839q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm4.608-27.504q0-6.804-6.012-6.804-.936 0-2.016.18-.576-1.08-1.89-1.71t-2.646-.63-2.484.648q-1.8-1.908-4.284-1.908-.9 0-1.998.36t-1.71.9v-11.916q0-1.872-1.368-3.24t-3.24-1.368q-1.836 0-3.222 1.404t-1.386 3.204v20.736q-.72 0-1.746-.54t-1.98-1.188-2.448-1.188-3.042-.54q-2.412 0-3.51 1.602t-1.098 4.158q0 .864 5.004 3.24 1.584.864 2.34 1.332 2.304 1.44 5.22 4.032 2.916 2.556 3.816 3.636 2.052 2.484 2.052 5.04v1.152h23.04v-1.152q0-2.592 1.152-6.012t2.304-6.966 1.152-6.462zm4.608-.18q0 4.788-2.484 11.592-2.124 5.904-2.124 8.028v10.368q0 1.908-1.35 3.258t-3.258 1.35h-23.04q-1.908 0-3.258-1.35t-1.35-3.258v-10.368q0-.36-.162-.774t-.504-.846-.648-.81-.81-.864-.774-.738-.774-.684-.612-.504q-2.664-2.34-4.644-3.6-.756-.468-2.232-1.188t-2.592-1.332-2.268-1.458-1.782-1.98-.63-2.502q0-4.5 2.412-7.434t6.804-2.934q2.448 0 4.608.792v-13.464q0-3.744 2.736-6.48t6.444-2.736q3.78 0 6.516 2.718t2.736 6.498v6.084q2.232.144 4.284 1.332.756-.108 1.548-.108 3.636 0 6.408 2.16 5.004-.036 7.902 3.06t2.898 8.172z","HAND_O_DOWN":"M50.688-29.879q0-3.024-1.152-6.588t-2.304-6.984-1.152-6.012v-1.152h-23.04v1.152q0 1.26-.432 2.43t-1.332 2.25-1.656 1.8-1.944 1.764q-.324.288-.504.432-2.916 2.592-5.22 4.032-.792.504-2.448 1.368-.108.036-.81.378t-1.296.666-1.278.72-1.098.774-.414.666q0 2.556 1.098 4.158t3.51 1.602q1.548 0 3.042-.54t2.448-1.188 1.98-1.188 1.746-.54v20.736q0 1.8 1.386 3.204t3.222 1.404q1.872 0 3.24-1.368t1.368-3.24v-11.916q1.656 1.26 3.708 1.26 2.484 0 4.284-1.908 1.152.648 2.484.648t2.646-.63 1.89-1.71q.864.144 2.016.144 3.06 0 4.536-1.746t1.476-4.878zm-4.608-27.648q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm9.216 27.504q0 5.112-2.79 8.28t-7.83 3.132l-.18-.036q-2.736 2.196-6.408 2.196-.792 0-1.548-.108-1.944 1.08-4.284 1.332v6.084q0 3.78-2.736 6.498t-6.516 2.718q-3.708 0-6.444-2.736t-2.736-6.48v-13.464q-1.944.792-4.608.792-4.356 0-6.786-2.934t-2.43-7.434q0-1.368.63-2.502t1.782-1.98 2.268-1.458 2.592-1.332 2.232-1.188q1.98-1.26 4.644-3.6.108-.072.612-.504t.774-.684.774-.738.81-.864.648-.81.504-.846.162-.774v-10.368q0-1.908 1.35-3.258t3.258-1.35h23.04q1.908 0 3.258 1.35t1.35 3.258v10.368q0 2.124 2.124 8.028 2.484 6.84 2.484 11.412z","ARROW_CIRCLE_LEFT":"M46.08-29.879v-4.608q0-.936-.684-1.62t-1.62-.684h-18.072l6.804-6.804q.684-.684.684-1.62t-.684-1.62l-3.276-3.276q-.648-.648-1.62-.648t-1.62.648l-13.032 13.032-3.276 3.276q-.648.648-.648 1.62t.648 1.62l3.276 3.276 13.032 13.032q.648.648 1.62.648t1.62-.648l3.276-3.276q.648-.648.648-1.62t-.648-1.62l-6.804-6.804h18.072q.936 0 1.62-.684t.684-1.62zm9.216-2.304q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","ARROW_CIRCLE_RIGHT":"M46.26-32.183q0-.972-.648-1.62l-3.276-3.276-13.032-13.032q-.648-.648-1.62-.648t-1.62.648l-3.276 3.276q-.648.648-.648 1.62t.648 1.62l6.804 6.804h-18.072q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h18.072l-6.804 6.804q-.684.684-.684 1.62t.684 1.62l3.276 3.276q.648.648 1.62.648t1.62-.648l13.032-13.032 3.276-3.276q.648-.648.648-1.62zm9.036 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","ARROW_CIRCLE_UP":"M46.224-32.219q0-.972-.648-1.62l-13.032-13.032-3.276-3.276q-.648-.648-1.62-.648t-1.62.648l-3.276 3.276-13.032 13.032q-.648.648-.648 1.62t.648 1.62l3.276 3.276q.648.648 1.62.648t1.62-.648l6.804-6.804v18.072q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62v-18.072l6.804 6.804q.684.684 1.62.684t1.62-.684l3.276-3.276q.648-.648.648-1.62zm9.072.036q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","ARROW_CIRCLE_DOWN":"M46.224-32.147q0-.972-.648-1.62l-3.276-3.276q-.648-.648-1.62-.648t-1.62.648l-6.804 6.804v-18.072q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v18.072l-6.804-6.804q-.684-.684-1.62-.684t-1.62.684l-3.276 3.276q-.648.648-.648 1.62t.648 1.62l13.032 13.032 3.276 3.276q.648.648 1.62.648t1.62-.648l3.276-3.276 13.032-13.032q.648-.648.648-1.62zm9.072-.036q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","GLOBE":"M27.648-59.831q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878-3.708 13.878-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708zm9.864 18.756q-.072.036-.342.342t-.486.342q.072 0 .162-.18t.18-.396.126-.252q.216-.252.792-.54.504-.216 1.872-.432 1.224-.288 1.836.396-.072-.072.342-.468t.522-.432q.108-.072.54-.162t.54-.27l.072-.792q-.432.036-.63-.252t-.234-.756q0 .072-.216.288 0-.252-.162-.288t-.414.036-.324.036q-.36-.108-.54-.27t-.288-.594-.144-.54q-.072-.18-.342-.378t-.342-.378l-.09-.198-.108-.234-.144-.198-.198-.09-.252.18-.27.36-.162.18q-.108-.072-.216-.054t-.162.036-.162.108-.18.126q-.108.072-.306.108t-.306.072q.54-.18-.036-.396-.36-.144-.576-.108.324-.144.27-.432t-.306-.504h.18q-.036-.144-.306-.306t-.63-.306-.468-.216q-.288-.18-1.224-.342t-1.188-.018q-.18.216-.162.378t.144.504.126.45q.036.216-.198.468t-.234.432q0 .252.504.558t.36.774q-.108.288-.576.576t-.576.432q-.18.288-.054.666t.378.594q.072.072.054.144t-.126.162-.198.144-.234.126l-.108.072q-.396.18-.738-.216t-.486-.936q-.252-.9-.576-1.08-.828-.288-1.044.036-.18-.468-1.476-.936-.9-.324-2.088-.144.216-.036 0-.54-.252-.54-.684-.432.108-.216.144-.63t.036-.486q.108-.468.432-.828.036-.036.252-.306t.342-.486.018-.216q1.26.144 1.8-.396.18-.18.414-.612t.378-.612q.324-.216.504-.198t.522.198.522.18q.504.036.558-.396t-.27-.72q.432.036.108-.612-.18-.252-.288-.324-.432-.144-.972.18-.288.144.072.288-.036-.036-.342.378t-.594.63-.576-.18q-.036-.036-.198-.486t-.342-.486q-.288 0-.576.54.108-.288-.396-.54t-.864-.288q.684-.432-.288-.972-.252-.144-.738-.18t-.702.144q-.18.252-.198.414t.18.288.378.198.414.144.306.108q.504.36.288.504l-.306.126-.414.162-.216.144q-.108.144 0 .504t-.072.504q-.18-.18-.324-.63t-.252-.594q.252.324-.9.216l-.36-.036q-.144 0-.576.072t-.738.036-.486-.288q-.144-.288 0-.72.036-.144.144-.072-.144-.108-.396-.342t-.36-.306q-1.656.54-3.384 1.476.216.036.432-.036.18-.072.468-.234t.36-.198q1.224-.504 1.512-.252l.18-.18q.504.576.72.9-.252-.144-1.08-.036-.72.216-.792.432.252.432.18.648-.144-.108-.414-.36t-.522-.396-.54-.18q-.576 0-.792.036-5.256 2.88-8.46 7.992.252.252.432.288.144.036.18.324t.09.396.414-.108q.324.288.108.684.036-.036 1.584.972.684.612.756.756.108.396-.36.648-.036-.072-.324-.324t-.324-.144q-.108.18.018.666t.378.45q-.252 0-.342.576t-.09 1.278-.036.846l.072.036q-.108.432.198 1.242t.774.702q-.468.108.72 1.548.216.288.288.324.108.072.432.27t.54.36.36.378q.144.18.36.81t.504.846q-.072.216.342.72t.378.828l-.09.036-.09.036q.108.252.558.504t.558.468q.036.108.072.36t.108.396.288.072q.072-.72-.864-2.232-.54-.9-.612-1.044-.108-.18-.198-.558t-.162-.522q.072 0 .216.054t.306.126.27.144.072.108q-.108.252.072.63t.432.666.612.684.432.468q.216.216.504.702t0 .486q.324 0 .72.36t.612.72q.18.288.288.936t.18.864q.072.252.306.486t.45.342l.576.288.468.252q.18.072.666.378t.774.414q.36.144.576.144t.522-.09.486-.126q.54-.072 1.044.54t.756.756q1.296.684 1.98.396-.072.036.018.27t.288.558.324.522.198.306q.18.216.648.54t.648.54q.216-.144.252-.324-.108.288.252.72t.648.36q.504-.108.504-1.152-1.116.54-1.764-.648l-.09-.198-.144-.306-.09-.306v-.27l.18-.108q.324 0 .36-.126t-.072-.45-.144-.468q-.036-.288-.396-.72t-.432-.54q-.18.324-.576.288t-.576-.324l-.054.198-.054.234q-.468 0-.54-.036.036-.108.09-.63t.126-.81q.036-.144.198-.432t.27-.522.144-.45-.162-.342-.63-.09q-.684.036-.936.72-.036.108-.108.378t-.18.414-.324.252q-.252.108-.864.072t-.864-.18q-.468-.288-.81-1.044t-.342-1.332q0-.36.09-.954t.108-.9-.198-.882q.108-.072.324-.342t.36-.378l.162-.054h.162l.144-.054.108-.216-.144-.108-.144-.108q.252.108 1.026-.054t.99.054q.54.396.792-.072 0-.036-.09-.342t-.018-.486q.18.972 1.044.324.108.108.558.18t.63.18l.252.198.198.162.18-.018.306-.234q.36.504.432.864.396 1.44.684 1.584.252.108.396.072t.162-.342 0-.504-.054-.45l-.036-.288v-.648l-.036-.288q-.54-.108-.666-.432t.054-.666.54-.666q.036-.036.288-.126t.558-.234.45-.288q.756-.684.54-1.26.252 0 .396-.324l-.18-.108-.27-.18-.162-.072q.324-.18.072-.576.18-.108.27-.396t.27-.36q.324.432.756.072.252-.288.036-.576.18-.252.738-.378t.666-.342q.252.072.288-.072t.036-.432.108-.432q.144-.18.54-.324t.468-.18l.612-.396q.108-.144 0-.144.648.072 1.116-.396.36-.396-.216-.72.108-.216-.108-.342t-.54-.198q.108-.036.414-.018t.378-.054q.54-.36-.252-.576-.612-.18-1.548.432zm-5.868 31.572q7.416-1.296 12.636-6.804-.108-.108-.45-.162t-.45-.126q-.648-.252-.864-.288.036-.252-.09-.468t-.288-.324-.45-.288-.396-.252l-.252-.216-.252-.198-.27-.162-.306-.072-.36.036-.108.036-.198.09-.198.108-.144.108v.09q-.756-.612-1.296-.792-.18-.036-.396-.198t-.378-.252-.36-.054-.414.252q-.18.18-.216.54t-.072.468q-.252-.18 0-.63t.072-.666q-.108-.216-.378-.162t-.432.162-.414.306-.324.234-.306.198-.306.27q-.108.144-.216.432t-.18.396q-.072-.144-.414-.234t-.342-.198q.072.36.144 1.26t.18 1.368q.252 1.116-.432 1.728-.972.9-1.044 1.44-.144.792.432.936 0 .252-.288.738t-.252.774q0 .216.072.576z","WRENCH":"M13.824-11.447q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm23.184-15.12l-24.552 24.552q-1.332 1.332-3.24 1.332-1.872 0-3.276-1.332l-3.816-3.888q-1.368-1.296-1.368-3.24 0-1.908 1.368-3.276l24.516-24.516q1.404 3.528 4.122 6.246t6.246 4.122zm22.824-15.66q0 1.404-.828 3.816-1.692 4.824-5.922 7.83t-9.306 3.006q-6.66 0-11.394-4.734t-4.734-11.394 4.734-11.394 11.394-4.734q2.088 0 4.374.594t3.87 1.674q.576.396.576 1.008t-.576 1.008l-10.548 6.084v8.064l6.948 3.852q.18-.108 2.844-1.746t4.878-2.916 2.538-1.278q.54 0 .846.36t.306.9z","TASKS":"M36.864-13.751h23.04v-4.608h-23.04v4.608zm-13.824-18.432h36.864v-4.608h-36.864v4.608zm23.04-18.432h13.824v-4.608h-13.824v4.608zm18.432 29.952v9.216q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-9.216q0-.936.684-1.62t1.62-.684h59.904q.936 0 1.62.684t.684 1.62zm0-18.432v9.216q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-9.216q0-.936.684-1.62t1.62-.684h59.904q.936 0 1.62.684t.684 1.62zm0-18.432v9.216q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-9.216q0-.936.684-1.62t1.62-.684h59.904q.936 0 1.62.684t.684 1.62z","FILTER":"M50.508-53.819q.612 1.476-.504 2.52l-17.748 17.748v26.712q0 1.512-1.404 2.124-.468.18-.9.18-.972 0-1.62-.684l-9.216-9.216q-.684-.684-.684-1.62v-17.496l-17.748-17.748q-1.116-1.044-.504-2.52.612-1.404 2.124-1.404h46.08q1.512 0 2.124 1.404z","BRIEFCASE":"M23.04-55.223h18.432v-4.608h-18.432v4.608zm41.472 23.04v17.28q0 2.376-1.692 4.068t-4.068 1.692h-52.992q-2.376 0-4.068-1.692t-1.692-4.068v-17.28h24.192v5.76q0 .936.684 1.62t1.62.684h11.52q.936 0 1.62-.684t.684-1.62v-5.76h24.192zm-27.648 0v4.608h-9.216v-4.608h9.216zm27.648-17.28v13.824h-64.512v-13.824q0-2.376 1.692-4.068t4.068-1.692h12.672v-5.76q0-1.44 1.008-2.448t2.448-1.008h20.736q1.44 0 2.448 1.008t1.008 2.448v5.76h12.672q2.376 0 4.068 1.692t1.692 4.068z","ARROWS_ALT":"M46.188-44.963l-12.78 12.78 12.78 12.78 5.184-5.184q1.044-1.116 2.52-.504 1.404.612 1.404 2.124v16.128q0 .936-.684 1.62t-1.62.684h-16.128q-1.512 0-2.124-1.44-.612-1.404.504-2.484l5.184-5.184-12.78-12.78-12.78 12.78 5.184 5.184q1.116 1.08.504 2.484-.612 1.44-2.124 1.44h-16.128q-.936 0-1.62-.684t-.684-1.62v-16.128q0-1.512 1.44-2.124 1.404-.612 2.484.504l5.184 5.184 12.78-12.78-12.78-12.78-5.184 5.184q-.684.684-1.62.684-.432 0-.864-.18-1.44-.612-1.44-2.124v-16.128q0-.936.684-1.62t1.62-.684h16.128q1.512 0 2.124 1.44.612 1.404-.504 2.484l-5.184 5.184 12.78 12.78 12.78-12.78-5.184-5.184q-1.116-1.08-.504-2.484.612-1.44 2.124-1.44h16.128q.936 0 1.62.684t.684 1.62v16.128q0 1.512-1.404 2.124-.468.18-.9.18-.936 0-1.62-.684z","USERS":"M21.348-32.183q-5.832.18-9.54 4.608h-4.824q-2.952 0-4.968-1.458t-2.016-4.266q0-12.708 4.464-12.708.216 0 1.566.756t3.51 1.53 4.284.774q2.412 0 4.788-.828-.18 1.332-.18 2.376 0 5.004 2.916 9.216zm38.556 22.932q0 4.32-2.628 6.822t-6.984 2.502h-31.464q-4.356 0-6.984-2.502t-2.628-6.822q0-1.908.126-3.726t.504-3.924.954-3.906 1.548-3.51 2.232-2.916 3.078-1.926 4.014-.72q.36 0 1.548.774t2.628 1.728 3.852 1.728 4.86.774 4.86-.774 3.852-1.728 2.628-1.728 1.548-.774q2.196 0 4.014.72t3.078 1.926 2.232 2.916 1.548 3.51.954 3.906.504 3.924.126 3.726zm-36.864-45.972q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516 2.7-6.516 6.516-2.7 6.516 2.7 2.7 6.516zm25.344 13.824q0 5.724-4.05 9.774t-9.774 4.05-9.774-4.05-4.05-9.774 4.05-9.774 9.774-4.05 9.774 4.05 4.05 9.774zm20.736 8.1q0 2.808-2.016 4.266t-4.968 1.458h-4.824q-3.708-4.428-9.54-4.608 2.916-4.212 2.916-9.216 0-1.044-.18-2.376 2.376.828 4.788.828 2.124 0 4.284-.774t3.51-1.53 1.566-.756q4.464 0 4.464 12.708zm-4.608-21.924q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516 2.7-6.516 6.516-2.7 6.516 2.7 2.7 6.516z","LINK":"M52.416-20.663q0-1.44-1.008-2.448l-7.488-7.488q-1.008-1.008-2.448-1.008-1.512 0-2.592 1.152.108.108.684.666t.774.774.54.684.468.918.126.99q0 1.44-1.008 2.448t-2.448 1.008q-.54 0-.99-.126t-.918-.468-.684-.54-.774-.774-.666-.684q-1.188 1.116-1.188 2.628 0 1.44 1.008 2.448l7.416 7.452q.972.972 2.448.972 1.44 0 2.448-.936l5.292-5.256q1.008-1.008 1.008-2.412zm-25.308-25.38q0-1.44-1.008-2.448l-7.416-7.452q-1.008-1.008-2.448-1.008-1.404 0-2.448.972l-5.292 5.256q-1.008 1.008-1.008 2.412 0 1.44 1.008 2.448l7.488 7.488q.972.972 2.448.972 1.512 0 2.592-1.116-.108-.108-.684-.666t-.774-.774-.54-.684-.468-.918-.126-.99q0-1.44 1.008-2.448t2.448-1.008q.54 0 .99.126t.918.468.684.54.774.774.666.684q1.188-1.116 1.188-2.628zm32.22 25.38q0 4.32-3.06 7.308l-5.292 5.256q-2.988 2.988-7.308 2.988-4.356 0-7.344-3.06l-7.416-7.452q-2.988-2.988-2.988-7.308 0-4.428 3.168-7.524l-3.168-3.168q-3.096 3.168-7.488 3.168-4.32 0-7.344-3.024l-7.488-7.488q-3.024-3.024-3.024-7.344t3.06-7.308l5.292-5.256q2.988-2.988 7.308-2.988 4.356 0 7.344 3.06l7.416 7.452q2.988 2.988 2.988 7.308 0 4.428-3.168 7.524l3.168 3.168q3.096-3.168 7.488-3.168 4.32 0 7.344 3.024l7.488 7.488q3.024 3.024 3.024 7.344z","CLOUD":"M69.12-22.967q0 5.724-4.05 9.774t-9.774 4.05h-39.168q-6.66 0-11.394-4.734t-4.734-11.394q0-4.752 2.556-8.694t6.732-5.886q-.072-1.008-.072-1.548 0-7.632 5.4-13.032t13.032-5.4q5.688 0 10.314 3.168t6.75 8.28q2.52-2.232 5.976-2.232 3.816 0 6.516 2.7t2.7 6.516q0 2.7-1.476 4.968 4.644 1.08 7.668 4.842t3.024 8.622z","FLASK":"M54.972-12.311q2.016 3.204.774 5.49t-5.058 2.286h-41.472q-3.816 0-5.058-2.286t.774-5.49l18.108-28.548v-14.364h-2.304q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h18.432q.936 0 1.62.684t.684 1.62-.684 1.62-1.62.684h-2.304v14.364zm-28.044-26.1l-9.792 15.444h25.632l-9.792-15.444-.72-1.116v-15.696000000000002h-4.608v15.696000000000002z","SCISSORS":"M34.56-32.183q.936 0 1.62.684t.684 1.62-.684 1.62-1.62.684-1.62-.684-.684-1.62.684-1.62 1.62-.684zm10.8 2.304l18.252 14.328q1.008.72.9 2.016-.18 1.26-1.26 1.836l-4.608 2.304q-.468.252-1.044.252-.612 0-1.116-.288l-24.84-13.932-3.96 2.376q-.288.144-.432.18.504 1.764.36 3.492-.252 2.772-2.016 5.31t-4.752 4.446q-4.752 3.024-9.972 3.024-4.896 0-7.992-2.808-3.24-3.024-2.844-7.452.252-2.736 2.016-5.292t4.716-4.464q4.752-3.024 10.008-3.024 2.988 0 5.436 1.116.324-.468.792-.792l4.392-2.628-4.392-2.628q-.468-.324-.792-.792-2.448 1.116-5.436 1.116-5.256 0-10.008-3.024-2.952-1.908-4.716-4.464t-2.016-5.292q-.18-2.124.558-4.068t2.286-3.348q3.06-2.844 7.992-2.844 5.22 0 9.972 3.024 2.988 1.872 4.752 4.428t2.016 5.328q.144 1.728-.36 3.492.144.036.432.18l3.96 2.376 24.84-13.932q.504-.288 1.116-.288.576 0 1.044.252l4.608 2.304q1.08.576 1.26 1.836.108 1.296-.9 2.016zm-24.516-9.36q1.656-1.512.756-3.888t-3.816-4.212q-3.312-2.124-6.912-2.124-2.664 0-4.068 1.296-1.656 1.512-.756 3.888t3.816 4.212q3.312 2.124 6.912 2.124 2.664 0 4.068-1.296zm-3.06 26.82q2.916-1.836 3.816-4.212t-.756-3.888q-1.404-1.296-4.068-1.296-3.6 0-6.912 2.124-2.916 1.836-3.816 4.212t.756 3.888q1.404 1.296 4.068 1.296 3.6 0 6.912-2.124zm6.408-22.068l3.456 2.088v-.396q0-1.296 1.188-2.016l.504-.288-2.844-1.692-.936.936q-.108.108-.36.396t-.432.432l-.144.126-.108.09zm8.064 8.064l3.456 1.152 26.496-20.736-4.608-2.304-27.648 15.516v4.068l-5.76 3.456.324.288.252.216q.144.144.396.432t.396.432l.936.936zm25.344 14.976l4.608-2.304-18.72-14.688-6.372 4.968q-.072.108-.468.252z","FILES_O":"M61.056-50.615q1.44 0 2.448 1.008t1.008 2.448v43.776q0 1.44-1.008 2.448t-2.448 1.008h-34.56q-1.44 0-2.448-1.008t-1.008-2.448v-10.368h-19.584q-1.44 0-2.448-1.008t-1.008-2.448v-24.192q0-1.44.72-3.168t1.728-2.736l14.688-14.688q1.008-1.008 2.736-1.728t3.168-.72h14.976q1.44 0 2.448 1.008t1.008 2.448v11.808q2.448-1.44 4.608-1.44h14.976zm-19.584 7.668l-10.764 10.764h10.764v-10.764zm-23.04-13.824l-10.764 10.764h10.764v-10.764zm7.056 23.292l11.376-11.376v-14.976h-13.824v14.976q0 1.44-1.008 2.448t-2.448 1.008h-14.976v23.04h18.432v-9.216q0-1.44.72-3.168t1.728-2.736zm34.416 28.944v-41.472h-13.824v14.976q0 1.44-1.008 2.448t-2.448 1.008h-14.976v23.04h32.256z","PAPERCLIP":"M50.544-14.579q0 4.212-2.844 7.056t-7.056 2.844q-4.86 0-8.46-3.6l-27.972-27.936q-4.068-4.14-4.068-9.756 0-5.724 3.96-9.72t9.684-3.996q5.688 0 9.828 4.068l21.78 21.816q.36.36.36.792 0 .576-1.098 1.674t-1.674 1.098q-.468 0-.828-.36l-21.816-21.852q-2.844-2.772-6.516-2.772-3.816 0-6.444 2.7t-2.628 6.516q0 3.78 2.736 6.516l27.936 27.972q2.268 2.268 5.22 2.268 2.304 0 3.816-1.512t1.512-3.816q0-2.952-2.268-5.22l-20.916-20.916q-.936-.864-2.16-.864-1.044 0-1.728.684t-.684 1.728q0 1.152.9 2.124l14.76 14.76q.36.36.36.792 0 .576-1.116 1.692t-1.692 1.116q-.432 0-.792-.36l-14.76-14.76q-2.268-2.196-2.268-5.364 0-2.952 2.052-5.004t5.004-2.052q3.168 0 5.364 2.268l20.916 20.916q3.6 3.528 3.6 8.46z","SAVE":"M13.824-9.143h27.648v-13.824h-27.648v13.824zm32.256 0h4.608v-32.256q0-.504-.36-1.386t-.72-1.242l-10.116-10.116q-.36-.36-1.224-.72t-1.404-.36v14.976q0 1.44-1.008 2.448t-2.448 1.008h-20.736q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-4.608v46.08h4.608v-14.976q0-1.44 1.008-2.448t2.448-1.008h29.952q1.44 0 2.448 1.008t1.008 2.448v14.976zm-13.824-33.408v-11.52q0-.468-.342-.81t-.81-.342h-6.912q-.468 0-.81.342t-.342.81v11.52q0 .468.342.81t.81.342h6.912q.468 0 .81-.342t.342-.81zm23.04 1.152v33.408q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-48.384q0-1.44 1.008-2.448t2.448-1.008h33.408q1.44 0 3.168.72t2.736 1.728l10.08 10.08q1.008 1.008 1.728 2.736t.72 3.168z","SQUARE":"M55.296-49.463v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","REORDER":"M55.296-16.055v4.608q0 .936-.684 1.62t-1.62.684h-50.688q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h50.688q.936 0 1.62.684t.684 1.62zm0-18.432v4.608q0 .936-.684 1.62t-1.62.684h-50.688q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h50.688q.936 0 1.62.684t.684 1.62zm0-18.432v4.608q0 .936-.684 1.62t-1.62.684h-50.688q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h50.688q.936 0 1.62.684t.684 1.62z","LIST_UL":"M13.824-13.751q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm0-18.432q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm50.688 14.976v6.912q0 .468-.342.81t-.81.342h-43.776q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h43.776q.468 0 .81.342t.342.81zm-50.688-33.408q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm50.688 14.976v6.912q0 .468-.342.81t-.81.342h-43.776q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h43.776q.468 0 .81.342t.342.81zm0-18.432v6.912q0 .468-.342.81t-.81.342h-43.776q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h43.776q.468 0 .81.342t.342.81z","LIST_OL":"M13.716-6.119q0 2.88-1.962 4.536t-4.878 1.656q-3.816 0-6.192-2.376l2.052-3.168q1.764 1.62 3.816 1.62 1.044 0 1.818-.522t.774-1.53q0-2.304-3.78-2.016l-.936-2.016q.288-.36 1.17-1.566t1.53-1.944 1.332-1.386v-.036q-.576 0-1.746.036t-1.746.036v1.908h-3.816v-5.472h11.988v3.168l-3.42 4.14q1.836.432 2.916 1.764t1.08 3.168zm.072-22.572v5.724h-13.032q-.216-1.296-.216-1.944 0-1.836.846-3.348t2.034-2.448 2.376-1.71 2.034-1.566.846-1.62q0-.9-.522-1.386t-1.422-.486q-1.656 0-2.916 2.088l-3.06-2.124q.864-1.836 2.574-2.862t3.798-1.026q2.628 0 4.428 1.494t1.8 4.05q0 1.8-1.224 3.294t-2.7 2.322-2.718 1.818-1.278 1.89h4.572v-2.16h3.78zm50.724 11.484v6.912q0 .468-.342.81t-.81.342h-43.776q-.468 0-.81-.342t-.342-.81v-6.912q0-.504.324-.828t.828-.324h43.776q.468 0 .81.342t.342.81zm-50.688-32.364v3.564h-12.06v-3.564h3.852q0-1.476.018-4.392t.018-4.356v-.432h-.072q-.288.612-1.8 1.944l-2.556-2.736 4.896-4.572h3.816v14.544h3.888zm50.688 13.932v6.912q0 .468-.342.81t-.81.342h-43.776q-.468 0-.81-.342t-.342-.81v-6.912q0-.504.324-.828t.828-.324h43.776q.468 0 .81.342t.342.81zm0-18.432v6.912q0 .468-.342.81t-.81.342h-43.776q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h43.776q.468 0 .81.342t.342.81z","STRIKETHROUGH":"M63.36-32.183q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-62.208q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h62.208zm-45.972-2.304q-1.008-1.26-1.836-2.88-1.728-3.492-1.728-6.768 0-6.516 4.824-11.124 4.788-4.572 14.148-4.572 1.8 0 6.012.684 2.376.432 6.372 1.728.36 1.368.756 4.248.504 4.428.504 6.588 0 .648-.18 1.62l-.432.108-3.024-.216-.504-.072q-1.8-5.364-3.708-7.38-3.168-3.276-7.56-3.276-4.104 0-6.552 2.124-2.412 2.088-2.412 5.256 0 2.628 2.376 5.04t10.044 4.644q2.484.72 6.228 2.376 2.088 1.008 3.42 1.872h-26.748zm18.252 9.216h14.796q.252 1.404.252 3.312 0 3.996-1.476 7.632-.828 1.98-2.556 3.744-1.332 1.26-3.924 2.916-2.88 1.728-5.508 2.376-2.88.756-7.308.756-4.104 0-7.02-.828l-5.04-1.44q-2.052-.576-2.592-1.008-.288-.288-.288-.792v-.468q0-3.888-.072-5.616-.036-1.08 0-2.448l.072-1.332v-1.584l3.672-.072q.54 1.224 1.08 2.556t.81 2.016.45.972q1.26 2.052 2.88 3.384 1.548 1.296 3.78 2.052 2.124.792 4.752.792 2.304 0 5.004-.972 2.772-.936 4.392-3.096 1.692-2.196 1.692-4.644 0-3.024-2.916-5.652-1.224-1.044-4.932-2.556z","UNDERLINE":"M1.728-56.411q-1.332-.072-1.62-.144l-.108-3.168q.468-.036 1.44-.036 2.16 0 4.032.144 4.752.252 5.976.252 3.096 0 6.048-.108 4.176-.144 5.256-.18 2.016 0 3.096-.072l-.036.504.072 2.304v.324q-2.16.324-4.464.324-2.16 0-2.844.9-.468.504-.468 4.752 0 .468.018 1.17t.018.918l.036 8.244.504 10.08q.216 4.464 1.836 7.272 1.26 2.124 3.456 3.312 3.168 1.692 6.372 1.692 3.744 0 6.876-1.008 2.016-.648 3.564-1.836 1.728-1.296 2.34-2.304 1.296-2.016 1.908-4.104.756-2.628.756-8.244 0-2.844-.126-4.608t-.396-4.41-.486-5.742l-.144-2.124q-.18-2.412-.864-3.168-1.224-1.26-2.772-1.224l-3.6.072-.504-.108.072-3.096h3.024l7.38.36q2.736.108 7.056-.36l.648.072q.216 1.368.216 1.836 0 .252-.144 1.116-1.62.432-3.024.468-2.628.396-2.844.612-.54.54-.54 1.476 0 .252.054.972t.054 1.116q.288.684.792 14.256.216 7.02-.54 10.944-.54 2.736-1.476 4.392-1.368 2.34-4.032 4.428-2.7 2.052-6.552 3.204-3.924 1.188-9.18 1.188-6.012 0-10.224-1.656-4.284-1.692-6.444-4.392-2.196-2.736-2.988-7.02-.576-2.88-.576-8.532v-11.988q0-6.768-.612-7.668-.9-1.296-5.292-1.404zm53.568 50.724v-2.304q0-.504-.324-.828t-.828-.324h-52.992q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h52.992q.504 0 .828-.324t.324-.828z","TABLE":"M18.432-14.903v-6.912q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h11.52q.504 0 .828-.324t.324-.828zm0-13.824v-6.912q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h11.52q.504 0 .828-.324t.324-.828zm18.432 13.824v-6.912q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h11.52q.504 0 .828-.324t.324-.828zm-18.432-27.648v-6.912q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h11.52q.504 0 .828-.324t.324-.828zm18.432 13.824v-6.912q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h11.52q.504 0 .828-.324t.324-.828zm18.432 13.824v-6.912q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h11.52q.504 0 .828-.324t.324-.828zm-18.432-27.648v-6.912q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h11.52q.504 0 .828-.324t.324-.828zm18.432 13.824v-6.912q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h11.52q.504 0 .828-.324t.324-.828zm0-13.824v-6.912q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h11.52q.504 0 .828-.324t.324-.828zm4.608-11.52v39.168q0 2.376-1.692 4.068t-4.068 1.692h-48.384q-2.376 0-4.068-1.692t-1.692-4.068v-39.168q0-2.376 1.692-4.068t4.068-1.692h48.384q2.376 0 4.068 1.692t1.692 4.068z","MAGIC":"M42.84-43.523l10.548-10.548-3.852-3.852-10.548 10.548zm16.092-10.548q0 .972-.648 1.62l-46.296 46.296q-.648.648-1.62.648t-1.62-.648l-7.128-7.128q-.648-.648-.648-1.62t.648-1.62l46.296-46.296q.648-.648 1.62-.648t1.62.648l7.128 7.128q.648.648.648 1.62zm-48.636-6.84l3.528 1.08-3.528 1.08-1.08 3.528-1.08-3.528-3.528-1.08 3.528-1.08 1.08-3.528zm12.6 5.832l7.056 2.16-7.056 2.16-2.16 7.056-2.16-7.056-7.056-2.16 7.056-2.16 2.16-7.056zm33.48 17.208l3.528 1.08-3.528 1.08-1.08 3.528-1.08-3.528-3.528-1.08 3.528-1.08 1.08-3.528zm-23.04-23.04l3.528 1.08-3.528 1.08-1.08 3.528-1.08-3.528-3.528-1.08 3.528-1.08 1.08-3.528z","TRUCK":"M23.04-13.751q0-1.872-1.368-3.24t-3.24-1.368-3.24 1.368-1.368 3.24 1.368 3.24 3.24 1.368 3.24-1.368 1.368-3.24zm-13.824-18.432h13.824v-9.216h-5.688q-.468 0-.792.324l-7.02 7.02q-.324.324-.324.792v1.08zm46.08 18.432q0-1.872-1.368-3.24t-3.24-1.368-3.24 1.368-1.368 3.24 1.368 3.24 3.24 1.368 3.24-1.368 1.368-3.24zm9.216-39.168v36.864q0 .54-.144.954t-.486.666-.594.414-.846.216-.81.072-.918 0-.81-.018q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516h-13.824q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516h-2.304q-.108 0-.81.018t-.918 0-.81-.072-.846-.216-.594-.414-.486-.666-.144-.954q0-.936.684-1.62t1.62-.684v-11.52q0-.288-.018-1.26t0-1.368.09-1.242.234-1.332.504-1.098.81-1.08l7.128-7.128q.684-.684 1.818-1.152t2.106-.468h5.76v-6.912q0-.936.684-1.62t1.62-.684h36.864q.936 0 1.62.684t.684 1.62z","PINTEREST":"M55.296-32.183q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708q-3.996 0-7.848-1.152 2.124-3.348 2.808-5.904.324-1.224 1.944-7.596.72 1.404 2.628 2.43t4.104 1.026q4.356 0 7.776-2.466t5.292-6.786 1.872-9.72q0-4.104-2.142-7.704t-6.21-5.868-9.18-2.268q-3.78 0-7.056 1.044t-5.562 2.772-3.924 3.978-2.412 4.662-.774 4.824q0 3.744 1.44 6.588t4.212 3.996q1.08.432 1.368-.72.072-.252.288-1.116t.288-1.08q.216-.828-.396-1.548-1.836-2.196-1.836-5.436 0-5.436 3.762-9.342t9.846-3.906q5.436 0 8.478 2.952t3.042 7.668q0 6.12-2.466 10.404t-6.318 4.284q-2.196 0-3.528-1.566t-.828-3.762q.288-1.26.954-3.366t1.08-3.708.414-2.718q0-1.8-.972-2.988t-2.772-1.188q-2.232 0-3.78 2.052t-1.548 5.112q0 2.628.9 4.392l-3.564 15.048q-.612 2.52-.468 6.372-7.416-3.276-11.988-10.116t-4.572-15.228q0-7.524 3.708-13.878t10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","PINTEREST_SQUARE":"M44.928-59.831q4.284 0 7.326 3.042t3.042 7.326v34.56q0 4.284-3.042 7.326t-7.326 3.042h-26.1q3.06-4.392 3.888-7.56.324-1.224 1.908-7.524.756 1.404 2.646 2.412t4.05 1.008q6.516 0 10.638-5.31t4.122-13.446q0-3.024-1.26-5.85t-3.474-5.004-5.49-3.492-7.092-1.314q-3.744 0-7.002 1.026t-5.508 2.754-3.87 3.942-2.394 4.608-.774 4.77q0 3.672 1.422 6.48t4.194 3.96q.468.18.846 0t.522-.684q.36-1.584.54-2.196.216-.828-.396-1.512-1.8-2.232-1.8-5.4 0-5.4 3.726-9.234t9.738-3.834q5.364 0 8.37 2.916t3.006 7.56q0 6.048-2.43 10.296t-6.246 4.248q-2.16 0-3.492-1.566t-.828-3.726q.288-1.224.954-3.33t1.062-3.672.396-2.682q0-1.764-.954-2.934t-2.718-1.17q-2.196 0-3.726 2.034t-1.53 5.022q0 2.592.864 4.356l-3.528 14.904q-.864 3.6-.252 9.144h-6.588q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56z","GOOGLE_PLUS_SQUARE":"M33.012-31.859q0-.936-.216-2.304h-13.032v4.752h7.812q-.108.864-.594 1.8t-1.35 1.908-2.394 1.602-3.474.63q-3.564 0-6.084-2.556t-2.52-6.156 2.52-6.156 6.084-2.556q3.312 0 5.508 2.124l3.744-3.636q-3.888-3.6-9.252-3.6-5.76 0-9.792 4.05t-4.032 9.774 4.032 9.774 9.792 4.05q5.94 0 9.594-3.78t3.654-9.72zm12.42 1.656h3.924v-3.96h-3.924v-3.96h-3.96v3.96h-3.96v3.96h3.96v3.96h3.96v-3.96zm9.864-19.26v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","GOOGLE_PLUS":"M51.732-31.571q0 7.488-3.132 13.338t-8.928 9.144-13.284 3.294q-5.364 0-10.26-2.088t-8.424-5.616-5.616-8.424-2.088-10.26 2.088-10.26 5.616-8.424 8.424-5.616 10.26-2.088q10.296 0 17.676 6.912l-7.164 6.876q-4.212-4.068-10.512-4.068-4.428 0-8.19 2.232t-5.958 6.066-2.196 8.37 2.196 8.37 5.958 6.066 8.19 2.232q2.988 0 5.49-.828t4.122-2.07 2.826-2.826 1.764-2.988.774-2.664h-14.976v-9.072h24.912q.432 2.268.432 4.392zm31.212-4.392v7.56h-7.524v7.524h-7.56v-7.524h-7.524v-7.56h7.524v-7.524h7.56v7.524h7.524z","MONEY":"M27.648-22.967h13.824v-3.456h-4.608v-16.128h-4.104l-5.328 4.932 2.772 2.88q1.512-1.332 1.98-2.052h.072v10.368h-4.608v3.456zm18.432-9.216q0 2.52-.756 5.112t-2.142 4.824-3.654 3.636-4.968 1.404-4.968-1.404-3.654-3.636-2.142-4.824-.756-5.112.756-5.112 2.142-4.824 3.654-3.636 4.968-1.404 4.968 1.404 3.654 3.636 2.142 4.824.756 5.112zm18.432 9.216v-18.432q-3.816 0-6.516-2.7t-2.7-6.516h-41.472q0 3.816-2.7 6.516t-6.516 2.7v18.432q3.816 0 6.516 2.7t2.7 6.516h41.472q0-3.816 2.7-6.516t6.516-2.7zm4.608-29.952v41.472q0 .936-.684 1.62t-1.62.684h-64.512q-.936 0-1.62-.684t-.684-1.62v-41.472q0-.936.684-1.62t1.62-.684h64.512q.936 0 1.62.684t.684 1.62z","CARET_DOWN":"M36.864-39.095q0 .936-.684 1.62l-16.128 16.128q-.684.684-1.62.684t-1.62-.684l-16.128-16.128q-.684-.684-.684-1.62t.684-1.62 1.62-.684h32.256q.936 0 1.62.684t.684 1.62z","CARET_UP":"M36.864-20.663q0 .936-.684 1.62t-1.62.684h-32.256q-.936 0-1.62-.684t-.684-1.62.684-1.62l16.128-16.128q.684-.684 1.62-.684t1.62.684l16.128 16.128q.684.684.684 1.62z","CARET_LEFT":"M23.04-48.311v32.256q0 .936-.684 1.62t-1.62.684-1.62-.684l-16.128-16.128q-.684-.684-.684-1.62t.684-1.62l16.128-16.128q.684-.684 1.62-.684t1.62.684.684 1.62z","CARET_RIGHT":"M20.736-32.183q0 .936-.684 1.62l-16.128 16.128q-.684.684-1.62.684t-1.62-.684-.684-1.62v-32.256q0-.936.684-1.62t1.62-.684 1.62.684l16.128 16.128q.684.684.684 1.62z","COLUMNS":"M5.76-9.143h21.888v-41.472h-23.04v40.32q0 .468.342.81t.81.342zm49.536-1.152v-40.32h-23.04v41.472h21.888q.468 0 .81-.342t.342-.81zm4.608-43.776v43.776q0 2.376-1.692 4.068t-4.068 1.692h-48.384q-2.376 0-4.068-1.692t-1.692-4.068v-43.776q0-2.376 1.692-4.068t4.068-1.692h48.384q2.376 0 4.068 1.692t1.692 4.068z","UNSORTED":"M36.864-25.271q0 .936-.684 1.62l-16.128 16.128q-.684.684-1.62.684t-1.62-.684l-16.128-16.128q-.684-.684-.684-1.62t.684-1.62 1.62-.684h32.256q.936 0 1.62.684t.684 1.62zm0-13.824q0 .936-.684 1.62t-1.62.684h-32.256q-.936 0-1.62-.684t-.684-1.62.684-1.62l16.128-16.128q.684-.684 1.62-.684t1.62.684l16.128 16.128q.684.684.684 1.62z","SORT_DOWN":"M36.864-25.271q0 .936-.684 1.62l-16.128 16.128q-.684.684-1.62.684t-1.62-.684l-16.128-16.128q-.684-.684-.684-1.62t.684-1.62 1.62-.684h32.256q.936 0 1.62.684t.684 1.62z","SORT_UP":"M36.864-39.095q0 .936-.684 1.62t-1.62.684h-32.256q-.936 0-1.62-.684t-.684-1.62.684-1.62l16.128-16.128q.684-.684 1.62-.684t1.62.684l16.128 16.128q.684.684.684 1.62z","ENVELOPE":"M64.512-38.879v28.584q0 2.376-1.692 4.068t-4.068 1.692h-52.992q-2.376 0-4.068-1.692t-1.692-4.068v-28.584q1.584 1.764 3.636 3.132 13.032 8.856 17.892 12.42 2.052 1.512 3.33 2.358t3.402 1.728 3.96.882h.072q1.836 0 3.96-.882t3.402-1.728 3.33-2.358q6.12-4.428 17.928-12.42 2.052-1.404 3.6-3.132zm0-10.584q0 2.844-1.764 5.436t-4.392 4.428q-13.536 9.396-16.848 11.7-.36.252-1.53 1.098t-1.944 1.368-1.872 1.17-2.07.972-1.8.324h-.072q-.828 0-1.8-.324t-2.07-.972-1.872-1.17-1.944-1.368-1.53-1.098q-3.276-2.304-9.432-6.57t-7.38-5.13q-2.232-1.512-4.212-4.158t-1.98-4.914q0-2.808 1.494-4.68t4.266-1.872h52.992q2.34 0 4.05 1.692t1.71 4.068z","LINKEDIN":"M12.564-41.939v35.676h-11.88v-35.676h11.88zm.756-11.016q.036 2.628-1.818 4.392t-4.878 1.764h-.072q-2.952 0-4.752-1.764t-1.8-4.392q0-2.664 1.854-4.41t4.842-1.746 4.788 1.746 1.836 4.41zm41.976 26.244v20.448h-11.844v-19.08q0-3.78-1.458-5.922t-4.554-2.142q-2.268 0-3.798 1.242t-2.286 3.078q-.396 1.08-.396 2.916v19.908h-11.844q.072-14.364.072-23.292t-.036-10.656l-.036-1.728h11.844v5.184h-.072q.72-1.152 1.476-2.016t2.034-1.872 3.132-1.566 4.122-.558q6.156 0 9.9 4.086t3.744 11.97z","UNDO":"M55.296-32.183q0 5.616-2.196 10.728t-5.904 8.82-8.82 5.904-10.728 2.196q-6.192 0-11.772-2.61t-9.504-7.362q-.252-.36-.234-.81t.306-.738l4.932-4.968q.36-.324.9-.324.576.072.828.432 2.628 3.42 6.444 5.292t8.1 1.872q3.744 0 7.146-1.458t5.886-3.942 3.942-5.886 1.458-7.146-1.458-7.146-3.942-5.886-5.886-3.942-7.146-1.458q-3.528 0-6.768 1.278t-5.76 3.654l4.932 4.968q1.116 1.08.504 2.484-.612 1.44-2.124 1.44h-16.128q-.936 0-1.62-.684t-.684-1.62v-16.128q0-1.512 1.44-2.124 1.404-.612 2.484.504l4.68 4.644q3.852-3.636 8.802-5.634t10.242-1.998q5.616 0 10.728 2.196t8.82 5.904 5.904 8.82 2.196 10.728z","LEGAL":"M63.756-9.143q0 1.908-1.332 3.24l-3.852 3.888q-1.404 1.332-3.276 1.332-1.908 0-3.24-1.332l-13.068-13.104q-1.368-1.296-1.368-3.24 0-1.908 1.548-3.456l-9.216-9.216-4.536 4.536q-.504.504-1.224.504t-1.224-.504q.072.072.45.432t.45.468.36.414.36.486.216.486.198.594.054.648q0 1.368-1.008 2.448-.108.108-.594.648t-.684.738-.666.594-.792.558-.792.324-.936.162q-1.44 0-2.448-1.008l-14.688-14.688q-1.008-1.008-1.008-2.448 0-.468.162-.936t.324-.792.558-.792.594-.666.738-.684.648-.594q1.08-1.008 2.448-1.008.36 0 .648.054t.594.198.486.216.486.36.414.36.468.45.432.45q-.504-.504-.504-1.224t.504-1.224l12.528-12.528q.504-.504 1.224-.504t1.224.504q-.072-.072-.45-.432t-.45-.468-.36-.414-.36-.486-.216-.486-.198-.594-.054-.648q0-1.368 1.008-2.448.108-.108.594-.648t.684-.738.666-.594.792-.558.792-.324.936-.162q1.44 0 2.448 1.008l14.688 14.688q1.008 1.008 1.008 2.448 0 .468-.162.936t-.324.792-.558.792-.594.666-.738.684-.648.594q-1.08 1.008-2.448 1.008-.36 0-.648-.054t-.594-.198-.486-.216-.486-.36-.414-.36-.468-.45-.432-.45q.504.504.504 1.224t-.504 1.224l-4.536 4.536 9.216 9.216q1.548-1.548 3.456-1.548 1.872 0 3.276 1.332l13.068 13.068q1.332 1.404 1.332 3.276z","TACHOMETER":"M13.824-22.967q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm6.912-16.128q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm15.408 17.316l3.636-13.752q.216-.936-.27-1.746t-1.386-1.062-1.728.234-1.08 1.422l-3.636 13.752q-2.16.18-3.852 1.566t-2.268 3.546q-.72 2.772.72 5.256t4.212 3.204 5.256-.72 3.204-4.212q.576-2.16-.216-4.212t-2.592-3.276zm23.76-1.188q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm-23.04-23.04q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm16.128 6.912q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm11.52 16.128q0 9.396-5.076 17.388-.684 1.044-1.944 1.044h-50.472q-1.26 0-1.944-1.044-5.076-7.956-5.076-17.388 0-6.552 2.556-12.528t6.876-10.296 10.296-6.876 12.528-2.556 12.528 2.556 10.296 6.876 6.876 10.296 2.556 12.528z","COMMENT_O":"M32.256-50.615q-7.344 0-13.734 2.502t-10.152 6.75-3.762 9.18q0 4.032 2.574 7.686t7.254 6.318l3.132 1.8-.972 3.456q-.864 3.276-2.52 6.192 5.472-2.268 9.9-6.156l1.548-1.368 2.052.216q2.484.288 4.68.288 7.344 0 13.734-2.502t10.152-6.75 3.762-9.18-3.762-9.18-10.152-6.75-13.734-2.502zm32.256 18.432q0 6.264-4.32 11.574t-11.736 8.388-16.2 3.078q-2.52 0-5.22-.288-7.128 6.3-16.56 8.712-1.764.504-4.104.792h-.18q-.54 0-.972-.378t-.576-.99v-.036q-.108-.144-.018-.432t.072-.36.162-.342l.216-.324.252-.306.288-.324q.252-.288 1.116-1.242t1.242-1.368 1.116-1.422 1.17-1.836.972-2.124.936-2.736q-5.652-3.204-8.91-7.92t-3.258-10.116q0-6.264 4.32-11.574t11.736-8.388 16.2-3.078 16.2 3.078 11.736 8.388 4.32 11.574z","COMMENTS_O":"M25.344-50.615q-5.508 0-10.296 1.872t-7.614 5.076-2.826 6.876q0 2.952 1.908 5.688t5.364 4.752l3.492 2.016-1.26 3.024q1.224-.72 2.232-1.404l1.584-1.116 1.908.36q2.808.504 5.508.504 5.508 0 10.296-1.872t7.614-5.076 2.826-6.876-2.826-6.876-7.614-5.076-10.296-1.872zm0-4.608q6.876 0 12.726 2.466t9.234 6.714 3.384 9.252-3.384 9.252-9.234 6.714-12.726 2.466q-3.096 0-6.336-.576-4.464 3.168-10.008 4.608-1.296.324-3.096.576h-.108q-.396 0-.738-.288t-.414-.756q-.036-.108-.036-.234t.018-.234.072-.216l.09-.18.126-.198.144-.18.162-.18.144-.162q.18-.216.828-.9t.936-1.062.81-1.044.9-1.386.738-1.584q-4.464-2.592-7.02-6.372t-2.556-8.064q0-5.004 3.384-9.252t9.234-6.714 12.726-2.466zm29.592 42.084q.36.864.738 1.584t.9 1.386.81 1.044.936 1.062.828.9l.144.162.162.18.144.18.126.198.09.18.072.216.018.234-.036.234q-.108.504-.468.792t-.792.252q-1.8-.252-3.096-.576-5.544-1.44-10.008-4.608-3.24.576-6.336.576-9.756 0-16.992-4.752 2.088.144 3.168.144 5.796 0 11.124-1.62t9.504-4.644q4.5-3.312 6.912-7.632t2.412-9.144q0-2.772-.828-5.472 4.644 2.556 7.344 6.408t2.7 8.28q0 4.32-2.556 8.082t-7.02 6.354z","FLASH":"M31.86-44.063q.648.72.252 1.584l-19.44 41.652q-.468.9-1.512.9-.144 0-.504-.072-.612-.18-.918-.684t-.162-1.08l7.092-29.088-14.616 3.636q-.144.036-.432.036-.648 0-1.116-.396-.648-.54-.468-1.404l7.236-29.7q.144-.504.576-.828t1.008-.324h11.808q.684 0 1.152.45t.468 1.062q0 .288-.18.648l-6.156 16.668 14.256-3.528q.288-.072.432-.072.684 0 1.224.54z","SITEMAP":"M64.512-19.511v11.52q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-11.52q0-1.44 1.008-2.448t2.448-1.008h3.456v-6.912h-18.432v6.912h3.456q1.44 0 2.448 1.008t1.008 2.448v11.52q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-11.52q0-1.44 1.008-2.448t2.448-1.008h3.456v-6.912h-18.432v6.912h3.456q1.44 0 2.448 1.008t1.008 2.448v11.52q0 1.44-1.008 2.448t-2.448 1.008h-11.52q-1.44 0-2.448-1.008t-1.008-2.448v-11.52q0-1.44 1.008-2.448t2.448-1.008h3.456v-6.912q0-1.872 1.368-3.24t3.24-1.368h18.432v-6.912h-3.456q-1.44 0-2.448-1.008t-1.008-2.448v-11.52q0-1.44 1.008-2.448t2.448-1.008h11.52q1.44 0 2.448 1.008t1.008 2.448v11.52q0 1.44-1.008 2.448t-2.448 1.008h-3.456v6.912h18.432q1.872 0 3.24 1.368t1.368 3.24v6.912h3.456q1.44 0 2.448 1.008t1.008 2.448z","UMBRELLA":"M32.256-34.631v20.88q0 3.744-2.736 6.48t-6.48 2.736-6.48-2.736-2.736-6.48q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62q0 1.8 1.404 3.204t3.204 1.404 3.204-1.404 1.404-3.204v-20.88q1.188-.396 2.304-.396t2.304.396zm27.648.972q0 .468-.342.81t-.81.342q-.396 0-.828-.36-1.764-1.656-3.348-2.484t-3.672-.828q-2.448 0-4.608 1.332t-3.708 3.492q-.252.36-.63 1.008t-.522.864q-.396.612-1.008.612-.648 0-1.044-.612-.144-.216-.522-.864t-.63-1.008q-1.548-2.16-3.69-3.492t-4.59-1.332-4.59 1.332-3.69 3.492q-.252.36-.63 1.008t-.522.864q-.396.612-1.044.612-.612 0-1.008-.612-.144-.216-.522-.864t-.63-1.008q-1.548-2.16-3.708-3.492t-4.608-1.332q-2.088 0-3.672.828t-3.348 2.484q-.432.36-.828.36-.468 0-.81-.342t-.342-.81q0-.18.036-.252 1.62-6.588 6.21-11.502t10.728-7.362 12.978-2.448q5.04 0 9.882 1.44t8.874 4.086 7.002 6.732 4.158 9.054q.036.072.036.252zm-27.648-26.172v3.528q-1.512-.072-2.304-.072t-2.304.072v-3.528q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62z","PASTE":"M27.648-4.535h32.256v-23.04h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-13.824v41.472zm9.216-51.84v-2.304q0-.468-.342-.81t-.81-.342h-25.344q-.468 0-.81.342t-.342.81v2.304q0 .468.342.81t.81.342h25.344q.468 0 .81-.342t.342-.81zm9.216 24.192h10.764l-10.764-10.764v10.764zm18.432 4.608v24.192q0 1.44-1.008 2.448t-2.448 1.008h-34.56q-1.44 0-2.448-1.008t-1.008-2.448v-5.76h-19.584q-1.44 0-2.448-1.008t-1.008-2.448v-48.384q0-1.44 1.008-2.448t2.448-1.008h39.168q1.44 0 2.448 1.008t1.008 2.448v11.808q.756.468 1.296 1.008l14.688 14.688q1.008 1.008 1.728 2.736t.72 3.168z","LIGHTBULB_O":"M26.496-43.703q0 .468-.342.81t-.81.342-.81-.342-.342-.81q0-1.656-1.944-2.556t-3.816-.9q-.468 0-.81-.342t-.342-.81.342-.81.81-.342q1.8 0 3.582.576t3.132 1.944 1.35 3.24zm5.76 0q0-2.592-1.242-4.824t-3.24-3.654-4.428-2.232-4.914-.81-4.914.81-4.428 2.232-3.24 3.654-1.242 4.824q0 3.636 2.448 6.48.36.396 1.098 1.188t1.098 1.188q4.608 5.508 5.076 10.728h8.208q.468-5.22 5.076-10.728.36-.396 1.098-1.188t1.098-1.188q2.448-2.844 2.448-6.48zm4.608 0q0 5.58-3.708 9.648-1.62 1.764-2.682 3.132t-2.142 3.438-1.224 3.87q1.692 1.008 1.692 2.952 0 1.332-.9 2.304.9.972.9 2.304 0 1.872-1.62 2.916.468.828.468 1.692 0 1.656-1.134 2.556t-2.79.9q-.72 1.584-2.16 2.52t-3.132.936-3.132-.936-2.16-2.52q-1.656 0-2.79-.9t-1.134-2.556q0-.864.468-1.692-1.62-1.044-1.62-2.916 0-1.332.9-2.304-.9-.972-.9-2.304 0-1.944 1.692-2.952-.144-1.8-1.224-3.87t-2.142-3.438-2.682-3.132q-3.708-4.068-3.708-9.648 0-3.564 1.602-6.642t4.212-5.112 5.904-3.204 6.714-1.17 6.714 1.17 5.904 3.204 4.212 5.112 1.602 6.642z","EXCHANGE":"M64.512-21.815v6.912q0 .468-.342.81t-.81.342h-49.536v6.912q0 .468-.342.81t-.81.342q-.432 0-.864-.36l-11.484-11.52q-.324-.324-.324-.792 0-.504.324-.828l11.52-11.52q.324-.324.828-.324.468 0 .81.342t.342.81v6.912h49.536q.468 0 .81.342t.342.81zm0-19.584q0 .504-.324.828l-11.52 11.52q-.324.324-.828.324-.468 0-.81-.342t-.342-.81v-6.912h-49.536q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h49.536v-6.912q0-.504.324-.828t.828-.324q.432 0 .864.36l11.484 11.484q.324.324.324.828z","CLOUD_DOWNLOAD":"M46.08-31.031q0-.504-.324-.828t-.828-.324h-8.064v-12.672q0-.468-.342-.81t-.81-.342h-6.912q-.468 0-.81.342t-.342.81v12.672h-8.064q-.468 0-.81.342t-.342.81q0 .504.324.828l12.672 12.672q.324.324.828.324t.828-.324l12.636-12.636q.36-.432.36-.864zm23.04 8.064q0 5.724-4.05 9.774t-9.774 4.05h-39.168q-6.66 0-11.394-4.734t-4.734-11.394q0-4.68 2.52-8.64t6.768-5.94q-.072-1.08-.072-1.548 0-7.632 5.4-13.032t13.032-5.4q5.616 0 10.278 3.132t6.786 8.316q2.556-2.232 5.976-2.232 3.816 0 6.516 2.7t2.7 6.516q0 2.736-1.476 4.968 4.68 1.116 7.686 4.878t3.006 8.586z","CLOUD_UPLOAD":"M46.08-33.335q0-.504-.324-.828l-12.672-12.672q-.324-.324-.828-.324t-.828.324l-12.636 12.636q-.36.432-.36.864 0 .504.324.828t.828.324h8.064v12.672q0 .468.342.81t.81.342h6.912q.468 0 .81-.342t.342-.81v-12.672h8.064q.468 0 .81-.342t.342-.81zm23.04 10.368q0 5.724-4.05 9.774t-9.774 4.05h-39.168q-6.66 0-11.394-4.734t-4.734-11.394q0-4.68 2.52-8.64t6.768-5.94q-.072-1.08-.072-1.548 0-7.632 5.4-13.032t13.032-5.4q5.616 0 10.278 3.132t6.786 8.316q2.556-2.232 5.976-2.232 3.816 0 6.516 2.7t2.7 6.516q0 2.736-1.476 4.968 4.68 1.116 7.686 4.878t3.006 8.586z","USER_MD":"M13.824-16.055q0 .936-.684 1.62t-1.62.684-1.62-.684-.684-1.62.684-1.62 1.62-.684 1.62.684.684 1.62zm36.864 2.196q0 4.356-2.628 6.84t-6.984 2.484h-31.464q-4.356 0-6.984-2.484t-2.628-6.84q0-2.448.198-4.716t.864-4.968 1.71-4.77 2.916-3.708 4.32-2.178q-.792 1.872-.792 4.32v7.308q-2.088.72-3.348 2.52t-1.26 3.996q0 2.88 2.016 4.896t4.896 2.016 4.896-2.016 2.016-4.896q0-2.196-1.278-3.996t-3.33-2.52v-7.308q0-2.232.9-3.348 4.752 3.744 10.62 3.744t10.62-3.744q.9 1.116.9 3.348v2.304q-3.816 0-6.516 2.7t-2.7 6.516v3.204q-1.152 1.044-1.152 2.556 0 1.44 1.008 2.448t2.448 1.008 2.448-1.008 1.008-2.448q0-1.512-1.152-2.556v-3.204q0-1.872 1.368-3.24t3.24-1.368 3.24 1.368 1.368 3.24v3.204q-1.152 1.044-1.152 2.556 0 1.44 1.008 2.448t2.448 1.008 2.448-1.008 1.008-2.448q0-1.512-1.152-2.556v-3.204q0-2.448-1.242-4.59t-3.366-3.366q0-.36.018-1.53t0-1.728-.09-1.494-.252-1.692-.468-1.44q2.448.54 4.32 2.178t2.916 3.708 1.71 4.77.864 4.968.198 4.716zm-11.52-32.148q0 5.724-4.05 9.774t-9.774 4.05-9.774-4.05-4.05-9.774 4.05-9.774 9.774-4.05 9.774 4.05 4.05 9.774z","STETHOSCOPE":"M46.08-39.095q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm4.608 0q0 2.232-1.278 3.996t-3.33 2.52v14.22q0 5.724-4.734 9.774t-11.394 4.05-11.394-4.05-4.734-9.774v-4.752q-5.904-.72-9.864-4.608t-3.96-9.072v-18.432q0-.936.684-1.62t1.62-.684q.216 0 .576.072.612-1.08 1.692-1.728t2.34-.648q1.908 0 3.258 1.35t1.35 3.258-1.35 3.258-3.258 1.35q-1.188 0-2.304-.648v14.472q0 3.816 3.384 6.516t8.136 2.7 8.136-2.7 3.384-6.516v-14.472q-1.116.648-2.304.648-1.908 0-3.258-1.35t-1.35-3.258 1.35-3.258 3.258-1.35q1.26 0 2.34.648t1.692 1.728q.36-.072.576-.072.936 0 1.62.684t.684 1.62v18.432q0 5.184-3.96 9.072t-9.864 4.608v4.752q0 3.816 3.384 6.516t8.136 2.7 8.136-2.7 3.384-6.516v-14.22q-2.052-.756-3.33-2.52t-1.278-3.996q0-2.88 2.016-4.896t4.896-2.016 4.896 2.016 2.016 4.896z","SUITCASE":"M23.04-50.615h18.432v-4.608h-18.432v4.608zm-12.672 0v46.08h-2.304q-3.312 0-5.688-2.376t-2.376-5.688v-29.952q0-3.312 2.376-5.688t5.688-2.376h2.304zm40.32 0v46.08h-36.864v-46.08h4.608v-5.76q0-1.44 1.008-2.448t2.448-1.008h20.736q1.44 0 2.448 1.008t1.008 2.448v5.76h4.608zm13.824 8.064v29.952q0 3.312-2.376 5.688t-5.688 2.376h-2.304v-46.08h2.304q3.312 0 5.688 2.376t2.376 5.688z","BELL":"M32.832-3.383q0-.576-.576-.576-2.124 0-3.654-1.53t-1.53-3.654q0-.576-.576-.576t-.576.576q0 2.628 1.854 4.482t4.482 1.854q.576 0 .576-.576zm29.376-10.368q0 1.872-1.368 3.24t-3.24 1.368h-16.128q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516h-16.128q-1.872 0-3.24-1.368t-1.368-3.24q1.8-1.512 3.276-3.168t3.06-4.302 2.682-5.706 1.8-7.416.702-9.36q0-5.472 4.212-10.17t11.052-5.706q-.288-.684-.288-1.404 0-1.44 1.008-2.448t2.448-1.008 2.448 1.008 1.008 2.448q0 .72-.288 1.404 6.84 1.008 11.052 5.706t4.212 10.17q0 5.004.702 9.36t1.8 7.416 2.682 5.706 3.06 4.302 3.276 3.168z","COFFEE":"M59.904-41.399q0-2.88-2.016-4.896t-4.896-2.016h-2.304v13.824h2.304q2.88 0 4.896-2.016t2.016-4.896zm-59.904 27.648h64.512q0 3.816-2.7 6.516t-6.516 2.7h-46.08q-3.816 0-6.516-2.7t-2.7-6.516zm66.816-27.648q0 5.724-4.05 9.774t-9.774 4.05h-2.304v1.152q0 3.312-2.376 5.688t-5.688 2.376h-25.344q-3.312 0-5.688-2.376t-2.376-5.688v-26.496q0-.936.684-1.62t1.62-.684h41.472q5.724 0 9.774 4.05t4.05 9.774z","CUTLERY":"M23.04-62.135v23.04q0 2.196-1.278 3.996t-3.33 2.52v28.044q0 1.872-1.368 3.24t-3.24 1.368h-4.608q-1.872 0-3.24-1.368t-1.368-3.24v-28.044q-2.052-.72-3.33-2.52t-1.278-3.996v-23.04q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62v14.976q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62v-14.976q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62v14.976q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62v-14.976q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62zm27.648 0v57.6q0 1.872-1.368 3.24t-3.24 1.368h-4.608q-1.872 0-3.24-1.368t-1.368-3.24v-18.432h-8.064q-.468 0-.81-.342t-.342-.81v-28.8q0-4.752 3.384-8.136t8.136-3.384h9.216q.936 0 1.62.684t.684 1.62z","FILE_TEXT_O":"M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08zm-36.864-31.104q0-.504.324-.828t.828-.324h25.344q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-25.344q-.504 0-.828-.324t-.324-.828v-2.304zm26.496 8.064q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-25.344q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h25.344zm0 9.216q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-25.344q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h25.344z","BUILDING_O":"M13.824-17.207v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm0-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm9.216 0v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm27.648 18.432v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm27.648 18.432v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm27.648 18.432v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm18.432 9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm9.216 0v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216 49.536h13.824v-55.296h-41.472v55.296h13.824v-8.064q0-.468.342-.81t.81-.342h11.52q.468 0 .81.342t.342.81v8.064zm18.432-57.6v59.904q0 .936-.684 1.62t-1.62.684h-46.08q-.936 0-1.62-.684t-.684-1.62v-59.904q0-.936.684-1.62t1.62-.684h46.08q.936 0 1.62.684t.684 1.62z","HOSPITAL_O":"M13.824-17.207v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm0-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm9.216 0v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm27.648 18.432v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm18.432 9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216-9.216v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm9.216 0v2.304q0 .468-.342.81t-.81.342h-2.304q-.468 0-.81-.342t-.342-.81v-2.304q0-.468.342-.81t.81-.342h2.304q.468 0 .81.342t.342.81zm-9.216 31.104h13.824v-41.472h-9.216v1.152q0 1.44-1.008 2.448t-2.448 1.008h-16.128q-1.44 0-2.448-1.008t-1.008-2.448v-1.152h-9.216v41.472h13.824v-8.064q0-.468.342-.81t.81-.342h11.52q.468 0 .81.342t.342.81v8.064zm0-42.624v-11.52q0-.468-.342-.81t-.81-.342h-2.304q-.468 0-.81.342t-.342.81v3.456h-4.608v-3.456q0-.468-.342-.81t-.81-.342h-2.304q-.468 0-.81.342t-.342.81v11.52q0 .468.342.81t.81.342h2.304q.468 0 .81-.342t.342-.81v-3.456h4.608v3.456q0 .468.342.81t.81.342h2.304q.468 0 .81-.342t.342-.81zm18.432-1.152v46.08q0 .936-.684 1.62t-1.62.684h-46.08q-.936 0-1.62-.684t-.684-1.62v-46.08q0-.936.684-1.62t1.62-.684h11.52v-10.368q0-1.44 1.008-2.448t2.448-1.008h16.128q1.44 0 2.448 1.008t1.008 2.448v10.368h11.52q.936 0 1.62.684t.684 1.62z","AMBULANCE":"M23.04-13.751q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm-13.824-18.432h13.824v-9.216h-5.688q-.504.072-.792.324l-7.02 7.02q-.252.432-.324.792v1.08zm46.08 18.432q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm4.608-24.192v-6.912q0-.504-.324-.828t-.828-.324h-8.064v-8.064q0-.504-.324-.828t-.828-.324h-6.912q-.504 0-.828.324t-.324.828v8.064h-8.064q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h8.064v8.064q0 .504.324.828t.828.324h6.912q.504 0 .828-.324t.324-.828v-8.064h8.064q.504 0 .828-.324t.324-.828zm9.216-19.584v41.472q0 .936-.684 1.62t-1.62.684h-6.912q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516h-13.824q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516h-4.608q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684v-14.976q0-.936.468-2.088t1.152-1.836l7.128-7.128q.684-.684 1.836-1.152t2.088-.468h5.76v-11.52q0-.936.684-1.62t1.62-.684h41.472q.936 0 1.62.684t.684 1.62z","MEDKIT":"M46.08-24.119v-6.912q0-.504-.324-.828t-.828-.324h-8.064v-8.064q0-.504-.324-.828t-.828-.324h-6.912q-.504 0-.828.324t-.324.828v8.064h-8.064q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h8.064v8.064q0 .504.324.828t.828.324h6.912q.504 0 .828-.324t.324-.828v-8.064h8.064q.504 0 .828-.324t.324-.828zm-23.04-26.496h18.432v-4.608h-18.432v4.608zm-13.824 0v46.08h-1.152q-3.312 0-5.688-2.376t-2.376-5.688v-29.952q0-3.312 2.376-5.688t5.688-2.376h1.152zm42.624 0v46.08h-39.168v-46.08h5.76v-5.76q0-1.44 1.008-2.448t2.448-1.008h20.736q1.44 0 2.448 1.008t1.008 2.448v5.76h5.76zm12.672 8.064v29.952q0 3.312-2.376 5.688t-5.688 2.376h-1.152v-46.08h1.152q3.312 0 5.688 2.376t2.376 5.688z","FIGHTER_JET":"M69.12-29.879q-.036 1.152-10.368 3.456l-12.672 1.152-8.064 2.304h-2.304l-10.548 12.672h2.484q.936 0 1.62.162t.684.414-.684.414-1.62.162h-11.52v-1.152h2.304v-14.976h-5.76l-6.912 8.064h-3.456l-1.152-1.152v-6.912h1.152v-1.152h4.608v-.288l-6.912-.864v-4.608l6.912-.864v-.288h-4.608v-1.152h-1.152v-6.912l1.152-1.152h3.456l6.912 8.064h5.76v-14.976h-2.304v-1.152h11.52q.936 0 1.62.162t.684.414-.684.414-1.62.162h-2.484l10.548 12.672h2.304l8.064 2.304 12.672 1.152q9.396 2.088 10.332 3.348z","BEER":"M23.04-32.183v-13.824h-9.216v9.216q0 1.908 1.35 3.258t3.258 1.35h4.608zm36.864 16.128v6.912h-41.472v-6.912l4.608-6.912h-4.608q-5.724 0-9.774-4.05t-4.05-9.774v-11.52l-2.304-2.304 1.152-4.608h17.28l1.152-4.608h34.56l1.152 6.912-2.304 1.152v28.8z","H_SQUARE":"M46.08-16.055v-32.256q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v11.52h-18.432v-11.52q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v32.256q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62v-11.52h18.432v11.52q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62zm9.216-33.408v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","PLUS_SQUARE":"M46.08-29.879v-4.608q0-.936-.684-1.62t-1.62-.684h-11.52v-11.52q0-.936-.684-1.62t-1.62-.684h-4.608q-.936 0-1.62.684t-.684 1.62v11.52h-11.52q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h11.52v11.52q0 .936.684 1.62t1.62.684h4.608q.936 0 1.62-.684t.684-1.62v-11.52h11.52q.936 0 1.62-.684t.684-1.62zm9.216-19.584v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","ANGLE_DOUBLE_LEFT":"M22.572-14.903q0 .468-.36.828l-1.8 1.8q-.36.36-.828.36t-.828-.36l-16.776-16.776q-.36-.36-.36-.828t.36-.828l16.776-16.776q.36-.36.828-.36t.828.36l1.8 1.8q.36.36.36.828t-.36.828l-14.148 14.148 14.148 14.148q.36.36.36.828zm13.824 0q0 .468-.36.828l-1.8 1.8q-.36.36-.828.36t-.828-.36l-16.776-16.776q-.36-.36-.36-.828t.36-.828l16.776-16.776q.36-.36.828-.36t.828.36l1.8 1.8q.36.36.36.828t-.36.828l-14.148 14.148 14.148 14.148q.36.36.36.828z","ANGLE_DOUBLE_RIGHT":"M21.42-29.879q0 .468-.36.828l-16.776 16.776q-.36.36-.828.36t-.828-.36l-1.8-1.8q-.36-.36-.36-.828t.36-.828l14.148-14.148-14.148-14.148q-.36-.36-.36-.828t.36-.828l1.8-1.8q.36-.36.828-.36t.828.36l16.776 16.776q.36.36.36.828zm13.824 0q0 .468-.36.828l-16.776 16.776q-.36.36-.828.36t-.828-.36l-1.8-1.8q-.36-.36-.36-.828t.36-.828l14.148-14.148-14.148-14.148q-.36-.36-.36-.828t.36-.828l1.8-1.8q.36-.36.828-.36t.828.36l16.776 16.776q.36.36.36.828z","ANGLE_DOUBLE_UP":"M38.7-17.207q0 .468-.36.828l-1.8 1.8q-.36.36-.828.36t-.828-.36l-14.148-14.148-14.148 14.148q-.36.36-.828.36t-.828-.36l-1.8-1.8q-.36-.36-.36-.828t.36-.828l16.776-16.776q.36-.36.828-.36t.828.36l16.776 16.776q.36.36.36.828zm0-13.824q0 .468-.36.828l-1.8 1.8q-.36.36-.828.36t-.828-.36l-14.148-14.148-14.148 14.148q-.36.36-.828.36t-.828-.36l-1.8-1.8q-.36-.36-.36-.828t.36-.828l16.776-16.776q.36-.36.828-.36t.828.36l16.776 16.776q.36.36.36.828z","ANGLE_DOUBLE_DOWN":"M38.7-33.335q0 .468-.36.828l-16.776 16.776q-.36.36-.828.36t-.828-.36l-16.776-16.776q-.36-.36-.36-.828t.36-.828l1.8-1.8q.36-.36.828-.36t.828.36l14.148 14.148 14.148-14.148q.36-.36.828-.36t.828.36l1.8 1.8q.36.36.36.828zm0-13.824q0 .468-.36.828l-16.776 16.776q-.36.36-.828.36t-.828-.36l-16.776-16.776q-.36-.36-.36-.828t.36-.828l1.8-1.8q.36-.36.828-.36t.828.36l14.148 14.148 14.148-14.148q.36-.36.828-.36t.828.36l1.8 1.8q.36.36.36.828z","ANGLE_LEFT":"M22.572-44.855q0 .468-.36.828l-14.148 14.148 14.148 14.148q.36.36.36.828t-.36.828l-1.8 1.8q-.36.36-.828.36t-.828-.36l-16.776-16.776q-.36-.36-.36-.828t.36-.828l16.776-16.776q.36-.36.828-.36t.828.36l1.8 1.8q.36.36.36.828z","ANGLE_RIGHT":"M21.42-29.879q0 .468-.36.828l-16.776 16.776q-.36.36-.828.36t-.828-.36l-1.8-1.8q-.36-.36-.36-.828t.36-.828l14.148-14.148-14.148-14.148q-.36-.36-.36-.828t.36-.828l1.8-1.8q.36-.36.828-.36t.828.36l16.776 16.776q.36.36.36.828z","ANGLE_UP":"M38.7-21.815q0 .468-.36.828l-1.8 1.8q-.36.36-.828.36t-.828-.36l-14.148-14.148-14.148 14.148q-.36.36-.828.36t-.828-.36l-1.8-1.8q-.36-.36-.36-.828t.36-.828l16.776-16.776q.36-.36.828-.36t.828.36l16.776 16.776q.36.36.36.828z","ANGLE_DOWN":"M38.7-37.943q0 .468-.36.828l-16.776 16.776q-.36.36-.828.36t-.828-.36l-16.776-16.776q-.36-.36-.36-.828t.36-.828l1.8-1.8q.36-.36.828-.36t.828.36l14.148 14.148 14.148-14.148q.36-.36.828-.36t.828.36l1.8 1.8q.36.36.36.828z","DESKTOP":"M64.512-28.727v-29.952q0-.468-.342-.81t-.81-.342h-57.6q-.468 0-.81.342t-.342.81v29.952q0 .468.342.81t.81.342h57.6q.468 0 .81-.342t.342-.81zm4.608-29.952v39.168q0 2.376-1.692 4.068t-4.068 1.692h-19.584q0 1.332.576 2.79t1.152 2.556.576 1.566q0 .936-.684 1.62t-1.62.684h-18.432q-.936 0-1.62-.684t-.684-1.62q0-.504.576-1.584t1.152-2.52.576-2.808h-19.584q-2.376 0-4.068-1.692t-1.692-4.068v-39.168q0-2.376 1.692-4.068t4.068-1.692h57.6q2.376 0 4.068 1.692t1.692 4.068z","LAPTOP":"M14.976-18.359q-2.376 0-4.068-1.692t-1.692-4.068v-25.344q0-2.376 1.692-4.068t4.068-1.692h39.168q2.376 0 4.068 1.692t1.692 4.068v25.344q0 2.376-1.692 4.068t-4.068 1.692h-39.168zm-1.152-31.104v25.344q0 .468.342.81t.81.342h39.168q.468 0 .81-.342t.342-.81v-25.344q0-.468-.342-.81t-.81-.342h-39.168q-.468 0-.81.342t-.342.81zm49.536 33.408h5.76v3.456q0 1.44-1.692 2.448t-4.068 1.008h-57.6q-2.376 0-4.068-1.008t-1.692-2.448v-3.456h63.36zm-25.92 3.456q.576 0 .576-.576t-.576-.576h-5.76q-.576 0-.576.576t.576.576h5.76z","TABLET":"M23.04-13.751q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm13.824-5.76v-34.56q0-.468-.342-.81t-.81-.342h-29.952q-.468 0-.81.342t-.342.81v34.56q0 .468.342.81t.81.342h29.952q.468 0 .81-.342t.342-.81zm4.608-34.56v39.168q0 2.376-1.692 4.068t-4.068 1.692h-29.952q-2.376 0-4.068-1.692t-1.692-4.068v-39.168q0-2.376 1.692-4.068t4.068-1.692h29.952q2.376 0 4.068 1.692t1.692 4.068z","MOBILE_PHONE":"M16.704-13.751q0-1.188-.846-2.034t-2.034-.846-2.034.846-.846 2.034.846 2.034 2.034.846 2.034-.846.846-2.034zm7.488-5.76v-25.344q0-.468-.342-.81t-.81-.342h-18.432q-.468 0-.81.342t-.342.81v25.344q0 .468.342.81t.81.342h18.432q.468 0 .81-.342t.342-.81zm-6.912-30.528q0-.576-.576-.576h-5.76q-.576 0-.576.576t.576.576h5.76q.576 0 .576-.576zm10.368-.576v36.864q0 1.872-1.368 3.24t-3.24 1.368h-18.432q-1.872 0-3.24-1.368t-1.368-3.24v-36.864q0-1.872 1.368-3.24t3.24-1.368h18.432q1.872 0 3.24 1.368t1.368 3.24z","CIRCLE_O":"M27.648-51.767q-5.328 0-9.828 2.628t-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828-2.628-9.828-7.128-7.128-9.828-2.628zm27.648 19.584q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","QUOTE_LEFT":"M27.648-29.879v13.824q0 2.88-2.016 4.896t-4.896 2.016h-13.824q-2.88 0-4.896-2.016t-2.016-4.896v-25.344q0-3.744 1.458-7.146t3.942-5.886 5.886-3.942 7.146-1.458h2.304q.936 0 1.62.684t.684 1.62v4.608q0 .936-.684 1.62t-1.62.684h-2.304q-3.816 0-6.516 2.7t-2.7 6.516v1.152q0 1.44 1.008 2.448t2.448 1.008h8.064q2.88 0 4.896 2.016t2.016 4.896zm32.256 0v13.824q0 2.88-2.016 4.896t-4.896 2.016h-13.824q-2.88 0-4.896-2.016t-2.016-4.896v-25.344q0-3.744 1.458-7.146t3.942-5.886 5.886-3.942 7.146-1.458h2.304q.936 0 1.62.684t.684 1.62v4.608q0 .936-.684 1.62t-1.62.684h-2.304q-3.816 0-6.516 2.7t-2.7 6.516v1.152q0 1.44 1.008 2.448t2.448 1.008h8.064q2.88 0 4.896 2.016t2.016 4.896z","QUOTE_RIGHT":"M27.648-52.919v25.344q0 3.744-1.458 7.146t-3.942 5.886-5.886 3.942-7.146 1.458h-2.304q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h2.304q3.816 0 6.516-2.7t2.7-6.516v-1.152q0-1.44-1.008-2.448t-2.448-1.008h-8.064q-2.88 0-4.896-2.016t-2.016-4.896v-13.824q0-2.88 2.016-4.896t4.896-2.016h13.824q2.88 0 4.896 2.016t2.016 4.896zm32.256 0v25.344q0 3.744-1.458 7.146t-3.942 5.886-5.886 3.942-7.146 1.458h-2.304q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h2.304q3.816 0 6.516-2.7t2.7-6.516v-1.152q0-1.44-1.008-2.448t-2.448-1.008h-8.064q-2.88 0-4.896-2.016t-2.016-4.896v-13.824q0-2.88 2.016-4.896t4.896-2.016h13.824q2.88 0 4.896 2.016t2.016 4.896z","SPINNER":"M18.936-14.255q0 1.908-1.35 3.258t-3.258 1.35q-1.872 0-3.24-1.368t-1.368-3.24q0-1.908 1.35-3.258t3.258-1.35 3.258 1.35 1.35 3.258zm17.928 7.416q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm-25.344-25.344q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm43.272 17.928q0 1.872-1.368 3.24t-3.24 1.368q-1.908 0-3.258-1.35t-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm-34.704-35.856q0 2.376-1.692 4.068t-4.068 1.692-4.068-1.692-1.692-4.068 1.692-4.068 4.068-1.692 4.068 1.692 1.692 4.068zm42.12 17.928q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm-23.04-25.344q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm19.08 7.416q0 3.348-2.376 5.706t-5.688 2.358q-3.348 0-5.706-2.358t-2.358-5.706q0-3.312 2.358-5.688t5.706-2.376q3.312 0 5.688 2.376t2.376 5.688z","CIRCLE":"M55.296-32.183q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","REPLY":"M64.512-24.119q0 5.976-4.572 16.236-.108.252-.378.864t-.486 1.08-.468.792q-.432.612-1.008.612-.54 0-.846-.36t-.306-.9q0-.324.09-.954t.09-.846q.18-2.448.18-4.428 0-3.636-.63-6.516t-1.746-4.986-2.88-3.636-3.798-2.502-4.788-1.53-5.544-.774-6.318-.216h-8.064v9.216q0 .936-.684 1.62t-1.62.684-1.62-.684l-18.432-18.432q-.684-.684-.684-1.62t.684-1.62l18.432-18.432q.684-.684 1.62-.684t1.62.684.684 1.62v9.216h8.064q25.668 0 31.5 14.508 1.908 4.824 1.908 11.988z","GITHUB_ALT":"M23.04-20.663q0 1.44-.45 2.952t-1.548 2.736-2.61 1.224-2.61-1.224-1.548-2.736-.45-2.952.45-2.952 1.548-2.736 2.61-1.224 2.61 1.224 1.548 2.736.45 2.952zm23.04 0q0 1.44-.45 2.952t-1.548 2.736-2.61 1.224-2.61-1.224-1.548-2.736-.45-2.952.45-2.952 1.548-2.736 2.61-1.224 2.61 1.224 1.548 2.736.45 2.952zm5.76 0q0-4.32-2.484-7.344t-6.732-3.024q-1.476 0-7.02.756-2.556.396-5.652.396t-5.652-.396q-5.472-.756-7.02-.756-4.248 0-6.732 3.024t-2.484 7.344q0 3.168 1.152 5.526t2.916 3.708 4.392 2.16 5.04 1.062 5.364.252h6.048q2.952 0 5.364-.252t5.04-1.062 4.392-2.16 2.916-3.708 1.152-5.526zm8.064-6.336q0 7.452-2.196 11.916-1.368 2.772-3.798 4.788t-5.076 3.096-6.12 1.71-6.174.792-6.012.162q-2.808 0-5.112-.108t-5.31-.45-5.49-1.08-4.932-1.854-4.356-2.916-3.096-4.14q-2.232-4.428-2.232-11.916 0-8.532 4.896-14.256-.972-2.952-.972-6.12 0-4.176 1.836-7.848 3.888 0 6.84 1.422t6.804 4.446q5.292-1.26 11.124-1.26 5.328 0 10.08 1.152 3.78-2.952 6.732-4.356t6.804-1.404q1.836 3.672 1.836 7.848 0 3.132-.972 6.048 4.896 5.76 4.896 14.328z","FOLDER_O":"M55.296-17.207v-25.344q0-1.44-1.008-2.448t-2.448-1.008h-25.344q-1.44 0-2.448-1.008t-1.008-2.448v-2.304q0-1.44-1.008-2.448t-2.448-1.008h-11.52q-1.44 0-2.448 1.008t-1.008 2.448v34.56q0 1.44 1.008 2.448t2.448 1.008h43.776q1.44 0 2.448-1.008t1.008-2.448zm4.608-25.344v25.344q0 3.312-2.376 5.688t-5.688 2.376h-43.776q-3.312 0-5.688-2.376t-2.376-5.688v-34.56q0-3.312 2.376-5.688t5.688-2.376h11.52q3.312 0 5.688 2.376t2.376 5.688v1.152h24.192q3.312 0 5.688 2.376t2.376 5.688z","FOLDER_OPEN_O":"M64.116-30.923q0-1.26-1.908-1.26h-39.168q-1.44 0-3.078.774t-2.574 1.89l-10.584 13.068q-.648.864-.648 1.44 0 1.26 1.908 1.26h39.168q1.44 0 3.096-.792t2.556-1.908l10.584-13.068q.648-.792.648-1.404zm-41.076-5.868h27.648v-5.76q0-1.44-1.008-2.448t-2.448-1.008h-20.736q-1.44 0-2.448-1.008t-1.008-2.448v-2.304q0-1.44-1.008-2.448t-2.448-1.008h-11.52q-1.44 0-2.448 1.008t-1.008 2.448v30.708l9.216-11.34q1.584-1.908 4.176-3.15t5.04-1.242zm45.684 5.868q0 2.232-1.656 4.32l-10.62 13.068q-1.548 1.908-4.176 3.15t-5.04 1.242h-39.168q-3.312 0-5.688-2.376t-2.376-5.688v-34.56q0-3.312 2.376-5.688t5.688-2.376h11.52q3.312 0 5.688 2.376t2.376 5.688v1.152h19.584q3.312 0 5.688 2.376t2.376 5.688v5.76h6.912q1.944 0 3.564.882t2.412 2.538q.54 1.152.54 2.448z","SMILE_O":"M40.824-25.739q-1.332 4.356-4.968 7.02t-8.208 2.664-8.208-2.664-4.968-7.02q-.288-.9.144-1.746t1.368-1.134q.9-.288 1.746.144t1.134 1.368q.9 2.88 3.33 4.662t5.454 1.782 5.454-1.782 3.33-4.662q.288-.936 1.152-1.368t1.764-.144 1.332 1.134.144 1.746zm-17.784-15.66q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm18.432 0q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm9.216 9.216q0-4.68-1.836-8.946t-4.914-7.344-7.344-4.914-8.946-1.836-8.946 1.836-7.344 4.914-4.914 7.344-1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946-1.836 7.344-4.914 4.914-7.344 1.836-8.946zm4.608 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","FROWN_O":"M40.824-20.195q.288.9-.144 1.746t-1.332 1.134-1.764-.144-1.152-1.368q-.9-2.88-3.33-4.662t-5.454-1.782-5.454 1.782-3.33 4.662q-.288.936-1.134 1.368t-1.746.144q-.936-.288-1.368-1.134t-.144-1.746q1.332-4.356 4.968-7.02t8.208-2.664 8.208 2.664 4.968 7.02zm-17.784-21.204q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm18.432 0q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm9.216 9.216q0-4.68-1.836-8.946t-4.914-7.344-7.344-4.914-8.946-1.836-8.946 1.836-7.344 4.914-4.914 7.344-1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946-1.836 7.344-4.914 4.914-7.344 1.836-8.946zm4.608 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","MEH_O":"M41.472-25.271q0 .936-.684 1.62t-1.62.684h-23.04q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h23.04q.936 0 1.62.684t.684 1.62zm-18.432-16.128q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm18.432 0q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm9.216 9.216q0-4.68-1.836-8.946t-4.914-7.344-7.344-4.914-8.946-1.836-8.946 1.836-7.344 4.914-4.914 7.344-1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946-1.836 7.344-4.914 4.914-7.344 1.836-8.946zm4.608 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","GAMEPAD":"M29.952-25.271v-4.608q0-.504-.324-.828t-.828-.324h-6.912v-6.912q0-.504-.324-.828t-.828-.324h-4.608q-.504 0-.828.324t-.324.828v6.912h-6.912q-.504 0-.828.324t-.324.828v4.608q0 .504.324.828t.828.324h6.912v6.912q0 .504.324.828t.828.324h4.608q.504 0 .828-.324t.324-.828v-6.912h6.912q.504 0 .828-.324t.324-.828zm20.736 2.304q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm9.216-9.216q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm9.216 4.608q0 7.632-5.4 13.032t-13.032 5.4q-6.912 0-12.168-4.608h-7.92q-5.256 4.608-12.168 4.608-7.632 0-13.032-5.4t-5.4-13.032 5.4-13.032 13.032-5.4h32.256q7.632 0 13.032 5.4t5.4 13.032z","KEYBOARD_O":"M13.824-22.391v3.456q0 .576-.576.576h-3.456q-.576 0-.576-.576v-3.456q0-.576.576-.576h3.456q.576 0 .576.576zm4.608-9.216v3.456q0 .576-.576.576h-8.064q-.576 0-.576-.576v-3.456q0-.576.576-.576h8.064q.576 0 .576.576zm-4.608-9.216v3.456q0 .576-.576.576h-3.456q-.576 0-.576-.576v-3.456q0-.576.576-.576h3.456q.576 0 .576.576zm36.864 18.432v3.456q0 .576-.576.576h-31.104q-.576 0-.576-.576v-3.456q0-.576.576-.576h31.104q.576 0 .576.576zm-23.04-9.216v3.456q0 .576-.576.576h-3.456q-.576 0-.576-.576v-3.456q0-.576.576-.576h3.456q.576 0 .576.576zm-4.608-9.216v3.456q0 .576-.576.576h-3.456q-.576 0-.576-.576v-3.456q0-.576.576-.576h3.456q.576 0 .576.576zm13.824 9.216v3.456q0 .576-.576.576h-3.456q-.576 0-.576-.576v-3.456q0-.576.576-.576h3.456q.576 0 .576.576zm-4.608-9.216v3.456q0 .576-.576.576h-3.456q-.576 0-.576-.576v-3.456q0-.576.576-.576h3.456q.576 0 .576.576zm13.824 9.216v3.456q0 .576-.576.576h-3.456q-.576 0-.576-.576v-3.456q0-.576.576-.576h3.456q.576 0 .576.576zm13.824 9.216v3.456q0 .576-.576.576h-3.456q-.576 0-.576-.576v-3.456q0-.576.576-.576h3.456q.576 0 .576.576zm-18.432-18.432v3.456q0 .576-.576.576h-3.456q-.576 0-.576-.576v-3.456q0-.576.576-.576h3.456q.576 0 .576.576zm9.216 0v3.456q0 .576-.576.576h-3.456q-.576 0-.576-.576v-3.456q0-.576.576-.576h3.456q.576 0 .576.576zm9.216 0v12.672q0 .576-.576.576h-8.064q-.576 0-.576-.576v-3.456q0-.576.576-.576h4.032v-8.64q0-.576.576-.576h3.456q.576 0 .576.576zm4.608 27.072v-32.256h-59.904v32.256h59.904zm4.608-32.256v32.256q0 1.908-1.35 3.258t-3.258 1.35h-59.904q-1.908 0-3.258-1.35t-1.35-3.258v-32.256q0-1.908 1.35-3.258t3.258-1.35h59.904q1.908 0 3.258 1.35t1.35 3.258z","FLAG_O":"M59.904-26.819v-22.176q-6.084 3.276-11.016 3.276-2.952 0-5.22-1.152-3.6-1.764-6.624-2.754t-6.408-.99q-6.228 0-14.508 4.572v21.564q8.82-4.068 15.588-4.068 1.98 0 3.726.27t3.528.936 2.772 1.116 2.97 1.422l1.008.504q1.584.792 3.636.792 4.32 0 10.548-3.312zm-48.384-28.404q0 1.26-.63 2.304t-1.674 1.656v45.576q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-45.576q-1.044-.612-1.674-1.656t-.63-2.304q0-1.908 1.35-3.258t3.258-1.35 3.258 1.35 1.35 3.258zm52.992 2.304v27.468q0 1.404-1.26 2.052-.36.18-.612.324-7.848 4.176-13.284 4.176-3.168 0-5.688-1.26l-1.008-.504q-2.304-1.188-3.564-1.728t-3.276-1.044-4.104-.504q-3.672 0-8.478 1.584t-8.226 3.672q-.54.324-1.188.324-.576 0-1.152-.288-1.152-.684-1.152-2.016v-26.712q0-1.26 1.116-1.98 1.26-.756 2.826-1.53t4.104-1.872 5.49-1.782 5.58-.684q4.032 0 7.524 1.116t7.524 3.096q1.368.684 3.204.684 4.392 0 11.16-4.032l1.116-.612q1.116-.576 2.232.072 1.116.72 1.116 1.98z","FLAG_CHECKERED":"M29.952-28.439v-6.912q-6.516.576-13.824 4.212v6.66q7.38-3.456 13.824-3.96zm0-15.048v-7.092q-6.192.288-13.824 4.536v6.804q7.74-3.996 13.824-4.248zm29.952 16.668v-6.624q-8.46 4.176-13.824 2.556v-8.064q-.72-.216-1.404-.54-.18-.108-1.188-.612t-1.242-.612-1.134-.54-1.242-.558-1.17-.468-1.296-.45-1.26-.306-1.422-.27-1.422-.144-1.584-.072q-.828 0-1.764.108v7.992h.684q3.672 0 6.93 1.044t7.11 2.952q.684.324 1.404.54v6.768q1.512.612 3.276.612 4.32 0 10.548-3.312zm0-15.372v-6.804q-6.084 3.276-11.016 3.276-1.62 0-2.808-.288v7.056q5.328 1.512 13.824-3.24zm-48.384-13.032q0 1.26-.63 2.304t-1.674 1.656v45.576q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-45.576q-1.044-.612-1.674-1.656t-.63-2.304q0-1.908 1.35-3.258t3.258-1.35 3.258 1.35 1.35 3.258zm52.992 2.304v27.468q0 1.404-1.26 2.052-.36.18-.612.324-7.848 4.176-13.284 4.176-3.168 0-5.688-1.26l-1.008-.504q-2.304-1.188-3.564-1.728t-3.276-1.044-4.104-.504q-3.672 0-8.478 1.584t-8.226 3.672q-.54.324-1.188.324-.576 0-1.152-.288-1.152-.684-1.152-2.016v-26.712q0-1.26 1.116-1.98 1.26-.756 2.826-1.53t4.104-1.872 5.49-1.782 5.58-.684q4.032 0 7.524 1.116t7.524 3.096q1.368.684 3.204.684 4.392 0 11.16-4.032l1.116-.612q1.116-.576 2.232.072 1.116.72 1.116 1.98z","TERMINAL":"M21.06-29.051l-16.776 16.776q-.36.36-.828.36t-.828-.36l-1.8-1.8q-.36-.36-.36-.828t.36-.828l14.148-14.148-14.148-14.148q-.36-.36-.36-.828t.36-.828l1.8-1.8q.36-.36.828-.36t.828.36l16.776 16.776q.36.36.36.828t-.36.828zm38.844 16.452v2.304q0 .504-.324.828t-.828.324h-34.56q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h34.56q.504 0 .828.324t.324.828z","CODE":"M22.212-14.075l-1.8 1.8q-.36.36-.828.36t-.828-.36l-16.776-16.776q-.36-.36-.36-.828t.36-.828l16.776-16.776q.36-.36.828-.36t.828.36l1.8 1.8q.36.36.36.828t-.36.828l-14.148 14.148 14.148 14.148q.36.36.36.828t-.36.828zm21.276-38.412l-13.428 46.476q-.144.468-.558.702t-.846.09l-2.232-.612q-.468-.144-.702-.558t-.09-.882l13.428-46.476q.144-.468.558-.702t.846-.09l2.232.612q.468.144.702.558t.09.882zm23.652 23.436l-16.776 16.776q-.36.36-.828.36t-.828-.36l-1.8-1.8q-.36-.36-.36-.828t.36-.828l14.148-14.148-14.148-14.148q-.36-.36-.36-.828t.36-.828l1.8-1.8q.36-.36.828-.36t.828.36l16.776 16.776q.36.36.36.828t-.36.828z","REPLY_ALL":"M23.04-25.487v2.52q0 1.512-1.404 2.124-.468.18-.9.18-.972 0-1.62-.684l-18.432-18.432q-.684-.684-.684-1.62t.684-1.62l18.432-18.432q1.044-1.116 2.52-.504 1.404.612 1.404 2.124v2.484l-14.292 14.328q-.684.684-.684 1.62t.684 1.62zm41.472 1.368q0 2.088-.612 4.806t-1.386 4.968-1.728 4.5-1.458 3.258l-.72 1.44q-.288.612-1.008.612-.216 0-.324-.036-.9-.288-.828-1.224 1.548-14.4-3.816-20.34-2.304-2.556-6.138-3.978t-9.63-1.89v9.036q0 1.512-1.404 2.124-.468.18-.9.18-.972 0-1.62-.684l-18.432-18.432q-.684-.684-.684-1.62t.684-1.62l18.432-18.432q1.044-1.116 2.52-.504 1.404.612 1.404 2.124v9.432q14.796 1.008 21.564 7.956 6.084 6.228 6.084 18.324z","STAR_HALF_O":"M42.696-29.987l9.252-9-12.816-1.872-2.376-.36-1.08-2.16-5.724-11.592v34.668l2.124 1.116 11.448 6.048-2.16-12.78-.432-2.376zm16.272-9.432l-13.068 12.744 3.096 18q.18 1.188-.216 1.854t-1.224.666q-.612 0-1.44-.432l-16.164-8.496-16.164 8.496q-.828.432-1.44.432-.828 0-1.224-.666t-.216-1.854l3.096-18-13.104-12.744q-1.152-1.152-.828-2.142t1.944-1.242l18.072-2.628 8.1-16.38q.72-1.476 1.764-1.476 1.008 0 1.764 1.476l8.1 16.38 18.072 2.628q1.62.252 1.944 1.242t-.864 2.142z","LOCATION_ARROW":"M50.436-51.875l-23.04 46.08q-.612 1.26-2.052 1.26-.18 0-.54-.072-.792-.18-1.278-.81t-.486-1.422v-20.736h-20.736q-.792 0-1.422-.486t-.81-1.278.144-1.512 1.044-1.08l46.08-23.04q.468-.252 1.044-.252.972 0 1.62.684.54.504.666 1.242t-.234 1.422z","CROP":"M20.052-18.359h21.42v-21.42zm-1.62-1.62l21.42-21.42h-21.42v21.42zm41.472 2.772v6.912q0 .504-.324.828t-.828.324h-8.064v8.064q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-8.064h-31.104q-.504 0-.828-.324t-.324-.828v-31.104h-8.064q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h8.064v-8.064q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v8.064h30.636l8.856-8.892q.36-.324.828-.324t.828.324q.324.36.324.828t-.324.828l-8.892 8.856v30.636h8.064q.504 0 .828.324t.324.828z","CODE_FORK":"M10.368-11.447q0-1.44-1.008-2.448t-2.448-1.008-2.448 1.008-1.008 2.448 1.008 2.448 2.448 1.008 2.448-1.008 1.008-2.448zm0-41.472q0-1.44-1.008-2.448t-2.448-1.008-2.448 1.008-1.008 2.448 1.008 2.448 2.448 1.008 2.448-1.008 1.008-2.448zm23.04 4.608q0-1.44-1.008-2.448t-2.448-1.008-2.448 1.008-1.008 2.448 1.008 2.448 2.448 1.008 2.448-1.008 1.008-2.448zm3.456 0q0 1.872-.936 3.474t-2.52 2.502q-.072 10.332-8.136 14.904-2.448 1.368-7.308 2.916-4.608 1.44-6.102 2.556t-1.494 3.6v.936q1.584.9 2.52 2.502t.936 3.474q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896q0-1.872.936-3.474t2.52-2.502v-29.52q-1.584-.9-2.52-2.502t-.936-3.474q0-2.88 2.016-4.896t4.896-2.016 4.896 2.016 2.016 4.896q0 1.872-.936 3.474t-2.52 2.502v17.892q1.944-.936 5.544-2.052 1.98-.612 3.15-1.062t2.538-1.116 2.124-1.422 1.458-1.836 1.008-2.502.306-3.294q-1.584-.9-2.52-2.502t-.936-3.474q0-2.88 2.016-4.896t4.896-2.016 4.896 2.016 2.016 4.896z","UNLINK":"M15.804-18.683l-9.216 9.216q-.36.324-.828.324-.432 0-.828-.324-.324-.36-.324-.828t.324-.828l9.216-9.216q.36-.324.828-.324t.828.324q.324.36.324.828t-.324.828zm6.084 1.476v11.52q0 .504-.324.828t-.828.324-.828-.324-.324-.828v-11.52q0-.504.324-.828t.828-.324.828.324.324.828zm-8.064-8.064q0 .504-.324.828t-.828.324h-11.52q-.504 0-.828-.324t-.324-.828.324-.828.828-.324h11.52q.504 0 .828.324t.324.828zm45.504 4.608q0 4.32-3.06 7.308l-5.292 5.256q-2.988 2.988-7.308 2.988-4.356 0-7.344-3.06l-12.024-12.06q-.756-.756-1.512-2.016l8.604-.648 9.828 9.864q.972.972 2.448.99t2.448-.954l5.292-5.256q1.008-1.008 1.008-2.412 0-1.44-1.008-2.448l-9.864-9.9.648-8.604q1.26.756 2.016 1.512l12.096 12.096q3.024 3.096 3.024 7.344zm-22.212-26.064l-8.604.648-9.828-9.864q-1.008-1.008-2.448-1.008-1.404 0-2.448.972l-5.292 5.256q-1.008 1.008-1.008 2.412 0 1.44 1.008 2.448l9.864 9.864-.648 8.64q-1.26-.756-2.016-1.512l-12.096-12.096q-3.024-3.096-3.024-7.344 0-4.32 3.06-7.308l5.292-5.256q2.988-2.988 7.308-2.988 4.356 0 7.344 3.06l12.024 12.06q.756.756 1.512 2.016zm22.788 3.024q0 .504-.324.828t-.828.324h-11.52q-.504 0-.828-.324t-.324-.828.324-.828.828-.324h11.52q.504 0 .828.324t.324.828zm-19.584-19.584v11.52q0 .504-.324.828t-.828.324-.828-.324-.324-.828v-11.52q0-.504.324-.828t.828-.324.828.324.324.828zm14.652 5.436l-9.216 9.216q-.396.324-.828.324t-.828-.324q-.324-.36-.324-.828t.324-.828l9.216-9.216q.36-.324.828-.324t.828.324q.324.36.324.828t-.324.828z","QUESTION":"M25.344-19.223v8.64q0 .576-.432 1.008t-1.008.432h-8.64q-.576 0-1.008-.432t-.432-1.008v-8.64q0-.576.432-1.008t1.008-.432h8.64q.576 0 1.008.432t.432 1.008zm11.376-21.6q0 1.944-.558 3.636t-1.26 2.754-1.98 2.142-2.07 1.566-2.196 1.278q-1.476.828-2.466 2.34t-.99 2.412q0 .612-.432 1.17t-1.008.558h-8.64q-.54 0-.918-.666t-.378-1.35v-1.62q0-2.988 2.34-5.634t5.148-3.906q2.124-.972 3.024-2.016t.9-2.736q0-1.512-1.674-2.664t-3.87-1.152q-2.34 0-3.888 1.044-1.26.9-3.852 4.14-.468.576-1.116.576-.432 0-.9-.288l-5.904-4.5q-.468-.36-.558-.9t.198-1.008q5.76-9.576 16.704-9.576 2.88 0 5.796 1.116t5.256 2.988 3.816 4.59 1.476 5.706z","INFO":"M23.04-16.055v4.608q0 .936-.684 1.62t-1.62.684h-18.432q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h2.304v-13.824h-2.304q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h13.824q.936 0 1.62.684t.684 1.62v20.736h2.304q.936 0 1.62.684t.684 1.62zm-4.608-41.472v6.912q0 .936-.684 1.62t-1.62.684h-9.216q-.936 0-1.62-.684t-.684-1.62v-6.912q0-.936.684-1.62t1.62-.684h9.216q.936 0 1.62.684t.684 1.62z","EXCLAMATION":"M18.432-19.511v8.064q0 .936-.684 1.62t-1.62.684h-9.216q-.936 0-1.62-.684t-.684-1.62v-8.064q0-.936.684-1.62t1.62-.684h9.216q.936 0 1.62.684t.684 1.62zm1.08-38.016l-1.008 27.648q-.036.936-.738 1.62t-1.638.684h-9.216q-.936 0-1.638-.684t-.738-1.62l-1.008-27.648q-.036-.936.63-1.62t1.602-.684h11.52q.936 0 1.602.684t.63 1.62z","SUPERSCRIPT":"M32.292-15.155v6.012h-8.928l-5.724-9.072-.864-1.512q-.288-.324-.396-.756h-.108l-.324.756q-.36.72-.9 1.584l-5.58 9h-9.288v-6.012h4.608l7.092-10.476-6.66-9.792h-4.932v-6.048h9.936l5.004 8.208q.072.144.828 1.512.288.324.396.756h.108q.108-.324.396-.756l.9-1.512 5.04-8.208h9.252v6.048h-4.5l-6.624 9.612 7.344 10.656h3.924zm22.932-24.444v7.416h-18.504l-.108-.972q-.144-1.008-.144-1.656 0-2.304.936-4.212t2.34-3.114 3.024-2.34 3.024-1.962 2.34-1.944.936-2.304q0-1.368-1.062-2.25t-2.538-.882q-1.836 0-3.492 1.404-.504.396-1.296 1.368l-3.78-3.312q.936-1.332 2.268-2.376 2.988-2.34 6.768-2.34 3.96 0 6.408 2.142t2.448 5.706q0 2.016-.882 3.708t-2.232 2.754-2.934 2.106-2.952 1.818-2.358 1.854-1.098 2.268h8.352v-2.88h4.536z","SUBSCRIPT":"M32.292-15.155v6.012h-8.928l-5.724-9.072-.864-1.512q-.288-.324-.396-.756h-.108l-.324.756q-.36.72-.9 1.584l-5.58 9h-9.288v-6.012h4.608l7.092-10.476-6.66-9.792h-4.932v-6.048h9.936l5.004 8.208q.072.144.828 1.512.288.324.396.756h.108q.108-.324.396-.756l.9-1.512 5.04-8.208h9.252v6.048h-4.5l-6.624 9.612 7.344 10.656h3.924zm23.004 7.812v7.416h-18.504l-.144-.972-.108-1.656q0-2.304.936-4.212t2.34-3.114 3.024-2.34 3.024-1.962 2.34-1.944.936-2.304q0-1.368-1.062-2.25t-2.538-.882q-1.836 0-3.492 1.404-.504.396-1.296 1.368l-3.78-3.312q.936-1.332 2.268-2.376 2.88-2.34 6.768-2.34 3.96 0 6.408 2.142t2.448 5.706q0 2.376-1.242 4.266t-3.024 3.096-3.582 2.25-3.132 2.268-1.476 2.628h8.352v-2.88h4.536z","ERASER":"M32.256-13.751l12.096-13.824h-27.648l-12.096 13.824h27.648zm36.468-38.772q.54 1.224.342 2.574t-1.098 2.358l-32.256 36.864q-1.368 1.584-3.456 1.584h-27.648q-1.368 0-2.502-.738t-1.71-1.962q-.54-1.224-.342-2.574t1.098-2.358l32.256-36.864q1.368-1.584 3.456-1.584h27.648q1.368 0 2.502.738t1.71 1.962z","PUZZLE_PIECE":"M59.904-24.911q0 2.916-1.602 4.86t-4.446 1.944q-1.476 0-2.79-.63t-2.124-1.368-2.034-1.368-2.556-.63q-3.96 0-3.96 4.464 0 1.404.576 4.14t.54 4.14v.18q-.792 0-1.188.036-1.224.108-3.51.414t-4.158.486-3.528.18q-2.196 0-3.708-.954t-1.512-3.006q0-1.332.63-2.556t1.368-2.034 1.368-2.124.63-2.79q0-2.844-1.944-4.446t-4.86-1.602q-3.024 0-5.148 1.638t-2.124 4.59q0 1.548.54 2.988t1.206 2.322 1.206 1.908.54 1.818q0 1.62-1.656 3.204-1.332 1.26-4.212 1.26-3.42 0-8.82-.864-.324-.072-.99-.144t-.99-.144l-.468-.072-.108-.036-.072-.036v-36.864q.072.036.63.126t1.224.18.774.126q5.4.864 8.82.864 2.88 0 4.212-1.26 1.656-1.584 1.656-3.204 0-.792-.54-1.818t-1.206-1.908-1.206-2.322-.54-2.988q0-2.952 2.124-4.59t5.184-1.638q2.88 0 4.824 1.602t1.944 4.446q0 1.476-.63 2.79t-1.368 2.124-1.368 2.034-.63 2.556q0 2.052 1.512 3.006t3.708.954q2.304 0 6.48-.54t5.868-.612v.072q-.036.072-.126.63t-.18 1.224-.126.774q-.864 5.4-.864 8.82 0 2.88 1.26 4.212 1.584 1.656 3.204 1.656.792 0 1.818-.54t1.908-1.206 2.322-1.206 2.988-.54q2.952 0 4.59 2.124t1.638 5.148z","MICROPHONE":"M41.472-39.095v4.608q0 7.956-5.31 13.842t-13.122 6.75v4.752h9.216q.936 0 1.62.684t.684 1.62-.684 1.62-1.62.684h-23.04q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h9.216v-4.752q-7.812-.864-13.122-6.75t-5.31-13.842v-4.608q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62v4.608q0 6.66 4.734 11.394t11.394 4.734 11.394-4.734 4.734-11.394v-4.608q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62zm-9.216-13.824v18.432q0 4.752-3.384 8.136t-8.136 3.384-8.136-3.384-3.384-8.136v-18.432q0-4.752 3.384-8.136t8.136-3.384 8.136 3.384 3.384 8.136z","MICROPHONE_SLASH":"M9.756-30.419l-3.636 3.636q-1.512-3.708-1.512-7.704v-4.608q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62v4.608q0 1.908.54 4.068zm40.104-21.672l-12.996 12.996v4.608q0 4.752-3.384 8.136t-8.136 3.384q-1.98 0-3.924-.684l-3.456 3.456q3.492 1.836 7.38 1.836 6.66 0 11.394-4.734t4.734-11.394v-4.608q0-.936.684-1.62t1.62-.684 1.62.684.684 1.62v4.608q0 7.956-5.31 13.842t-13.122 6.75v4.752h9.216q.936 0 1.62.684t.684 1.62-.684 1.62-1.62.684h-23.04q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h9.216v-4.752q-4.5-.468-8.46-2.916l-9.144 9.144q-.36.36-.828.36t-.828-.36l-2.952-2.952q-.36-.36-.36-.828t.36-.828l44.424-44.424q.36-.36.828-.36t.828.36l2.952 2.952q.36.36.36.828t-.36.828zm-13.68-4.752l-22.356 22.356v-18.432q0-4.752 3.384-8.136t8.136-3.384q3.672 0 6.642 2.124t4.194 5.472z","SHIELD":"M39.168-29.879v-23.04h-16.128v40.932q4.284-2.268 7.668-4.932 8.46-6.624 8.46-12.96zm6.912-27.648v27.648q0 3.096-1.206 6.138t-2.988 5.4-4.248 4.59-4.554 3.708-4.356 2.79-3.222 1.782-1.53.72q-.432.216-.936.216t-.936-.216q-.576-.252-1.53-.72t-3.222-1.782-4.356-2.79-4.554-3.708-4.248-4.59-2.988-5.4-1.206-6.138v-27.648q0-.936.684-1.62t1.62-.684h41.472q.936 0 1.62.684t.684 1.62z","CALENDAR_O":"M4.608-4.535h50.688v-36.864h-50.688v36.864zm13.824-43.776v-10.368q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v10.368q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm27.648 0v-10.368q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v10.368q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm13.824-2.304v46.08q0 1.872-1.368 3.24t-3.24 1.368h-50.688q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h4.608v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h13.824v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h4.608q1.872 0 3.24 1.368t1.368 3.24z","FIRE_EXTINGUISHER":"M18.432-57.527q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm32.256-1.152v11.52q0 .576-.432.9-.288.252-.72.252-.144 0-.252-.036l-16.128-3.456q-.396-.072-.648-.396t-.252-.72h-9.216v3.672q3.996.828 6.606 3.996t2.61 7.308v28.8q0 .936-.684 1.62t-1.62.684h-18.432q-.936 0-1.62-.684t-.684-1.62v-28.8q0-3.816 2.25-6.858t5.814-4.122v-3.996h-1.152q-2.124 0-4.14.846t-3.294 1.908-2.376 2.394-1.458 1.926-.504.882q-.612 1.26-2.052 1.26-.576 0-1.044-.252-.828-.432-1.134-1.332t.126-1.764q.18-.36.522-.936t1.35-1.926 2.178-2.52 3.06-2.412 3.906-1.89q-.9-1.512-.9-3.096 0-2.376 1.692-4.068t4.068-1.692 4.068 1.692 1.692 4.068q0 1.188-.504 2.304h10.872q0-.396.252-.72t.648-.396l16.128-3.456q.108-.036.252-.036.432 0 .72.252.432.324.432.9z","ROCKET":"M51.84-48.311q0-1.44-1.008-2.448t-2.448-1.008-2.448 1.008-1.008 2.448 1.008 2.448 2.448 1.008 2.448-1.008 1.008-2.448zm8.064-10.368q0 8.964-2.718 15.498t-9.126 12.978q-2.916 2.88-7.02 6.336l-.72 13.644q-.072.576-.576.936l-13.824 8.064q-.252.144-.576.144-.432 0-.828-.324l-2.304-2.304q-.468-.504-.288-1.152l3.06-9.936-10.116-10.116-9.936 3.06q-.108.036-.324.036-.504 0-.828-.324l-2.304-2.304q-.612-.684-.18-1.404l8.064-13.824q.36-.504.936-.576l13.644-.72q3.456-4.104 6.336-7.02 6.768-6.732 12.888-9.288t15.516-2.556q.504 0 .864.342t.36.81z","MAXCDN":"M62.82-36.611l-5.904 27.468h-12.024l6.408-29.952q.468-2.016-.54-3.168-.972-1.188-2.988-1.188h-6.084l-7.344 34.308h-12.024l7.344-34.308h-10.296l-7.344 34.308h-12.024l7.344-34.308-5.508-11.772h45.936q3.636 0 6.822 1.458t5.31 4.086q2.16 2.628 2.916 6.066t0 7.002z","CHEVRON_CIRCLE_LEFT":"M32.724-14.219l3.672-3.672q.684-.684.684-1.62t-.684-1.62l-11.052-11.052 11.052-11.052q.684-.684.684-1.62t-.684-1.62l-3.672-3.672q-.684-.684-1.62-.684t-1.62.684l-16.344 16.344q-.684.684-.684 1.62t.684 1.62l16.344 16.344q.684.684 1.62.684t1.62-.684zm22.572-17.964q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","CHEVRON_CIRCLE_RIGHT":"M25.812-14.219l16.344-16.344q.684-.684.684-1.62t-.684-1.62l-16.344-16.344q-.684-.684-1.62-.684t-1.62.684l-3.672 3.672q-.684.684-.684 1.62t.684 1.62l11.052 11.052-11.052 11.052q-.684.684-.684 1.62t.684 1.62l3.672 3.672q.684.684 1.62.684t1.62-.684zm29.484-17.964q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","CHEVRON_CIRCLE_UP":"M41.94-23.435l3.672-3.672q.684-.684.684-1.62t-.684-1.62l-16.344-16.344q-.684-.684-1.62-.684t-1.62.684l-16.344 16.344q-.684.684-.684 1.62t.684 1.62l3.672 3.672q.684.684 1.62.684t1.62-.684l11.052-11.052 11.052 11.052q.684.684 1.62.684t1.62-.684zm13.356-8.748q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","CHEVRON_CIRCLE_DOWN":"M29.268-17.675l16.344-16.344q.684-.684.684-1.62t-.684-1.62l-3.672-3.672q-.684-.684-1.62-.684t-1.62.684l-11.052 11.052-11.052-11.052q-.684-.684-1.62-.684t-1.62.684l-3.672 3.672q-.684.684-.684 1.62t.684 1.62l16.344 16.344q.684.684 1.62.684t1.62-.684zm26.028-14.508q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","HTML5":"M40.68-42.947l.576-6.3h-31.824l1.692 19.224h22.032l-.792 8.208-7.092 1.908-7.056-1.908-.468-5.04h-6.3l.792 10.008 13.032 3.6h.144v-.036l12.924-3.564 1.8-19.584h-23.184l-.54-6.516h24.264zm-40.68-16.884h50.688l-4.608 51.768-20.808 5.832-20.664-5.832z","CSS3":"M9.9-59.831h54.18l-9.576 47.988-28.944 9.612-25.128-9.612 2.556-12.816h10.692l-1.044 5.292 15.192 5.796 17.496-5.796 2.448-12.204h-43.488l2.088-10.692h43.524l1.368-6.876h-43.488z","ANCHOR":"M34.56-55.223q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62.684 1.62 1.62.684 1.62-.684.684-1.62zm29.952 33.408v12.672q0 .792-.72 1.08-.288.072-.432.072-.468 0-.828-.324l-3.348-3.348q-4.284 5.148-11.466 8.154t-15.462 3.006-15.462-3.006-11.466-8.154l-3.348 3.348q-.324.324-.828.324-.144 0-.432-.072-.72-.288-.72-1.08v-12.672q0-.504.324-.828t.828-.324h12.672q.792 0 1.08.72.288.684-.252 1.26l-3.6 3.6q2.412 3.276 6.822 5.526t9.774 2.97v-23.292h-6.912q-.936 0-1.62-.684t-.684-1.62v-4.608q0-.936.684-1.62t1.62-.684h6.912v-5.868q-2.088-1.224-3.348-3.33t-1.26-4.626q0-3.816 2.7-6.516t6.516-2.7 6.516 2.7 2.7 6.516q0 2.52-1.26 4.626t-3.348 3.33v5.868h6.912q.936 0 1.62.684t.684 1.62v4.608q0 .936-.684 1.62t-1.62.684h-6.912v23.292q5.364-.72 9.774-2.97t6.822-5.526l-3.6-3.6q-.54-.576-.252-1.26.288-.72 1.08-.72h12.672q.504 0 .828.324t.324.828z","UNLOCK_ALT":"M38.016-36.791q1.44 0 2.448 1.008t1.008 2.448v20.736q0 1.44-1.008 2.448t-2.448 1.008h-34.56q-1.44 0-2.448-1.008t-1.008-2.448v-20.736q0-1.44 1.008-2.448t2.448-1.008h1.152v-11.52q0-6.66 4.734-11.394t11.394-4.734 11.394 4.734 4.734 11.394q0 .936-.684 1.62t-1.62.684h-2.304q-.936 0-1.62-.684t-.684-1.62q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516v11.52h26.496z","BULLSEYE":"M36.864-32.183q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516 2.7-6.516 6.516-2.7 6.516 2.7 2.7 6.516zm4.608 0q0-5.724-4.05-9.774t-9.774-4.05-9.774 4.05-4.05 9.774 4.05 9.774 9.774 4.05 9.774-4.05 4.05-9.774zm4.608 0q0 7.632-5.4 13.032t-13.032 5.4-13.032-5.4-5.4-13.032 5.4-13.032 13.032-5.4 13.032 5.4 5.4 13.032zm4.608 0q0-4.68-1.836-8.946t-4.914-7.344-7.344-4.914-8.946-1.836-8.946 1.836-7.344 4.914-4.914 7.344-1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946-1.836 7.344-4.914 4.914-7.344 1.836-8.946zm4.608 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","ELLIPSIS_H":"M13.824-37.943v6.912q0 1.44-1.008 2.448t-2.448 1.008h-6.912q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h6.912q1.44 0 2.448 1.008t1.008 2.448zm18.432 0v6.912q0 1.44-1.008 2.448t-2.448 1.008h-6.912q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h6.912q1.44 0 2.448 1.008t1.008 2.448zm18.432 0v6.912q0 1.44-1.008 2.448t-2.448 1.008h-6.912q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h6.912q1.44 0 2.448 1.008t1.008 2.448z","ELLIPSIS_V":"M13.824-19.511v6.912q0 1.44-1.008 2.448t-2.448 1.008h-6.912q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h6.912q1.44 0 2.448 1.008t1.008 2.448zm0-18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-6.912q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h6.912q1.44 0 2.448 1.008t1.008 2.448zm0-18.432v6.912q0 1.44-1.008 2.448t-2.448 1.008h-6.912q-1.44 0-2.448-1.008t-1.008-2.448v-6.912q0-1.44 1.008-2.448t2.448-1.008h6.912q1.44 0 2.448 1.008t1.008 2.448z","RSS_SQUARE":"M18.432-18.359q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm12.636 3.384q-.468-8.352-6.372-14.256t-14.256-6.372q-.504-.036-.864.324t-.36.828v4.608q0 .468.306.792t.774.36q5.544.396 9.504 4.356t4.356 9.504q.036.468.36.774t.792.306h4.608q.468 0 .828-.36t.324-.864zm13.824.036q-.18-5.544-2.016-10.71t-5.022-9.36-7.38-7.38-9.36-5.022-10.71-2.016q-.504-.036-.828.324-.36.36-.36.828v4.608q0 .468.324.792t.792.36q7.344.252 13.608 4.014t10.026 10.026 4.014 13.608q.036.468.36.792t.792.324h4.608q.468 0 .828-.36.396-.324.324-.828zm10.404-34.524v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","PLAY_CIRCLE":"M27.648-59.831q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878-3.708 13.878-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708zm13.824 29.628q1.152-.648 1.152-1.98t-1.152-1.98l-19.584-11.52q-1.116-.684-2.304-.036-1.152.684-1.152 2.016v23.04q0 1.332 1.152 2.016.576.288 1.152.288.612 0 1.152-.324z","TICKET":"M36.864-48.167l11.376 11.376-20.592 20.592-11.376-11.376zm-7.596 35.244l22.248-22.248q.684-.684.684-1.62t-.684-1.62l-13.032-13.032q-.648-.648-1.62-.648t-1.62.648l-22.248 22.248q-.684.684-.684 1.62t.684 1.62l13.032 13.032q.648.648 1.62.648t1.62-.648zm32.004-22.932l-32.652 32.688q-1.332 1.332-3.258 1.332t-3.258-1.332l-4.536-4.536q2.016-2.016 2.016-4.896t-2.016-4.896-4.896-2.016-4.896 2.016l-4.5-4.536q-1.332-1.332-1.332-3.258t1.332-3.258l32.652-32.616q1.332-1.332 3.258-1.332t3.258 1.332l4.5 4.5q-2.016 2.016-2.016 4.896t2.016 4.896 4.896 2.016 4.896-2.016l4.536 4.5q1.332 1.332 1.332 3.258t-1.332 3.258z","MINUS_SQUARE":"M46.08-29.879v-4.608q0-.936-.684-1.62t-1.62-.684h-32.256q-.936 0-1.62.684t-.684 1.62v4.608q0 .936.684 1.62t1.62.684h32.256q.936 0 1.62-.684t.684-1.62zm9.216-19.584v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","MINUS_SQUARE_O":"M41.472-35.639v2.304q0 .504-.324.828t-.828.324h-29.952q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h29.952q.504 0 .828.324t.324.828zm4.608 16.128v-29.952q0-2.376-1.692-4.068t-4.068-1.692h-29.952q-2.376 0-4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068-1.692t1.692-4.068zm4.608-29.952v29.952q0 4.284-3.042 7.326t-7.326 3.042h-29.952q-4.284 0-7.326-3.042t-3.042-7.326v-29.952q0-4.284 3.042-7.326t7.326-3.042h29.952q4.284 0 7.326 3.042t3.042 7.326z","LEVEL_UP":"M36.648-42.731q-.648 1.332-2.088 1.332h-6.912v31.104q0 .504-.324.828t-.828.324h-25.344q-.756 0-1.044-.648-.288-.72.144-1.26l5.76-6.912q.324-.396.9-.396h11.52v-23.04h-6.912q-1.44 0-2.088-1.332-.612-1.332.324-2.448l11.52-13.824q.648-.792 1.764-.792t1.764.792l11.52 13.824q.972 1.152.324 2.448z","LEVEL_DOWN":"M1.152-55.223h25.344q.468 0 .81.342t.342.846v31.068h6.912q1.44 0 2.088 1.332t-.324 2.484l-11.52 13.824q-.648.792-1.764.792t-1.764-.792l-11.52-13.824q-.936-1.116-.324-2.484.648-1.332 2.088-1.332h6.912v-23.04h-11.52q-.504 0-.9-.396l-5.76-6.912q-.468-.504-.144-1.224.324-.684 1.044-.684z","CHECK_SQUARE":"M24.66-17.675l22.104-22.104q.684-.684.684-1.62t-.684-1.62l-3.672-3.672q-.684-.684-1.62-.684t-1.62.684l-16.812 16.812-7.596-7.596q-.684-.684-1.62-.684t-1.62.684l-3.672 3.672q-.684.684-.684 1.62t.684 1.62l12.888 12.888q.684.684 1.62.684t1.62-.684zm30.636-31.788v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","PENCIL_SQUARE":"M14.544-24.551l5.472 5.472-1.872 1.872h-2.016v-3.456h-3.456v-2.016zm14.904-14.04q.504.468-.108 1.08l-10.476 10.476q-.612.612-1.08.108-.504-.468.108-1.08l10.476-10.476q.612-.612 1.08-.108zm-9.864 24.84l19.584-19.584-10.368-10.368-19.584 19.584v10.368h10.368zm21.888-21.888l3.312-3.312q1.008-1.008 1.008-2.448t-1.008-2.448l-5.472-5.472q-1.008-1.008-2.448-1.008t-2.448 1.008l-3.312 3.312zm13.824-13.824v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","EXTERNAL_LINK_SQUARE":"M46.08-31.031v-17.28q0-.936-.684-1.62t-1.62-.684h-17.28q-1.512 0-2.124 1.404-.612 1.476.504 2.52l5.184 5.184-19.224 19.224q-.684.684-.684 1.62t.684 1.62l3.672 3.672q.684.684 1.62.684t1.62-.684l19.224-19.224 5.184 5.184q.648.684 1.62.684.432 0 .9-.18 1.404-.612 1.404-2.124zm9.216-18.432v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","SHARE_SQUARE":"M36.18-24.803l12.672-12.672q.684-.684.684-1.62t-.684-1.62l-12.672-12.672q-1.08-1.116-2.484-.504-1.44.612-1.44 2.124v5.76q-4.284 0-7.776.702t-5.85 1.836-4.104 2.844-2.754 3.438-1.602 3.924-.774 4.014-.18 3.978q0 6.516 6.012 14.544.36.432.9.432.252 0 .468-.108.792-.324.684-1.188-1.584-12.744 2.232-17.028 1.656-1.872 4.68-2.718t8.064-.846v5.76q0 1.512 1.44 2.124.432.18.864.18.936 0 1.62-.684zm19.116-24.66v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","COMPASS":"M23.04-25.271l9.216-4.608-9.216-4.608v9.216zm13.824-21.276v19.512l-18.432 9.216v-19.512zm10.368 14.364q0-5.328-2.628-9.828t-7.128-7.128-9.828-2.628-9.828 2.628-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828zm8.064 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","TOGGLE_DOWN":"M41.22-40.139q.648 1.26-.18 2.376l-11.52 16.128q-.684.972-1.872.972t-1.872-.972l-11.52-16.128q-.828-1.116-.18-2.376.612-1.26 2.052-1.26h23.04q1.44 0 2.052 1.26zm4.86 25.236v-34.56q0-.468-.342-.81t-.81-.342h-34.56q-.468 0-.81.342t-.342.81v34.56q0 .468.342.81t.81.342h34.56q.468 0 .81-.342t.342-.81zm9.216-34.56v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","TOGGLE_UP":"M41.22-24.227q-.612 1.26-2.052 1.26h-23.04q-1.44 0-2.052-1.26-.648-1.26.18-2.376l11.52-16.128q.684-.972 1.872-.972t1.872.972l11.52 16.128q.828 1.116.18 2.376zm4.86 9.324v-34.56q0-.468-.342-.81t-.81-.342h-34.56q-.468 0-.81.342t-.342.81v34.56q0 .468.342.81t.81.342h34.56q.468 0 .81-.342t.342-.81zm9.216-34.56v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","TOGGLE_RIGHT":"M39.168-32.183q0 1.188-.972 1.872l-16.128 11.52q-1.116.828-2.376.18-1.26-.612-1.26-2.052v-23.04q0-1.44 1.26-2.052 1.26-.648 2.376.18l16.128 11.52q.972.684.972 1.872zm6.912 17.28v-34.56q0-.504-.324-.828t-.828-.324h-34.56q-.504 0-.828.324t-.324.828v34.56q0 .504.324.828t.828.324h34.56q.504 0 .828-.324t.324-.828zm9.216-34.56v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","EURO":"M35.136-17.387l1.26 5.724q.108.432-.108.81t-.612.522l-.18.036q-.144.072-.378.126t-.576.162-.774.198-.918.18-1.08.18-1.206.162-1.314.108-1.386.036q-8.424 0-14.724-4.698t-8.568-12.654h-3.42q-.468 0-.81-.342t-.342-.81v-4.068q0-.468.342-.81t.81-.342h2.376q-.072-2.052.036-3.78h-2.412q-.504 0-.828-.324t-.324-.828v-4.104q0-.504.324-.828t.828-.324h3.528q2.412-7.56 8.766-12.168t14.418-4.608q3.672 0 6.984.828.396.108.72.54.216.396.108.864l-1.548 5.724q-.108.468-.504.702t-.864.09l-.144-.036-.414-.09-.63-.126-.81-.126-.936-.108-1.044-.09-1.062-.036q-4.536 0-8.136 2.304t-5.4 6.336h16.848q.576 0 .9.432.36.432.252.936l-.864 4.104q-.18.936-1.152.936h-17.568q-.108 1.332 0 3.78h16.524q.54 0 .9.432.324.432.216.972l-.864 4.032q-.072.396-.396.666t-.72.27h-13.932q1.728 4.212 5.382 6.678t8.226 2.466q.648 0 1.296-.054t1.206-.126 1.062-.162.882-.18.666-.162l.432-.108.18-.072q.468-.18.936.072.432.252.54.756z","GBP":"M36.72-23.507v13.212q0 .504-.324.828t-.828.324h-34.416q-.504 0-.828-.324t-.324-.828v-5.4q0-.468.342-.81t.81-.342h3.492v-13.788h-3.42q-.504 0-.828-.342t-.324-.81v-4.716q0-.504.324-.828t.828-.324h3.42v-8.028q0-6.156 4.446-10.152t11.322-3.996q6.66 0 12.06 4.5.324.288.36.738t-.252.81l-3.708 4.572q-.324.396-.792.432-.468.072-.828-.252-.18-.18-.936-.684t-2.484-1.152-3.348-.648q-3.06 0-4.932 1.692t-1.872 4.428v7.74h10.98q.468 0 .81.324t.342.828v4.716q0 .468-.342.81t-.81.342h-10.98v13.644h14.904v-6.516q0-.468.324-.81t.828-.342h5.832q.504 0 .828.342t.324.81z","USD":"M35.208-21.779q0 5.508-3.582 9.486t-9.306 4.914v6.3q0 .504-.324.828t-.828.324h-4.86q-.468 0-.81-.342t-.342-.81v-6.3q-2.376-.324-4.59-1.116t-3.654-1.602-2.664-1.728-1.674-1.35-.63-.648q-.612-.756-.072-1.476l3.708-4.86q.252-.36.828-.432.54-.072.864.324l.072.072q4.068 3.564 8.748 4.5 1.332.288 2.664.288 2.916 0 5.13-1.548t2.214-4.392q0-1.008-.54-1.908t-1.206-1.512-2.106-1.35-2.376-1.152-2.88-1.17q-1.404-.576-2.214-.9t-2.214-.954-2.25-1.116-2.034-1.278-1.926-1.53-1.566-1.764-1.278-2.088-.756-2.394-.306-2.808q0-4.968 3.528-8.712t9.18-4.824v-6.48q0-.468.342-.81t.81-.342h4.86q.504 0 .828.324t.324.828v6.336q2.052.216 3.978.828t3.132 1.206 2.286 1.35 1.404 1.044.54.504q.612.648.18 1.368l-2.916 5.256q-.288.54-.828.576-.504.108-.972-.252-.108-.108-.522-.432t-1.404-.954-2.106-1.152-2.682-.936-3.078-.414q-3.42 0-5.58 1.548t-2.16 3.996q0 .936.306 1.728t1.062 1.494 1.422 1.188 2.016 1.116 2.178.972 2.52.99q1.908.72 2.916 1.134t2.736 1.26 2.718 1.53 2.232 1.8 1.908 2.286 1.134 2.754.468 3.384z","RUPEE":"M32.328-47.519v3.672q0 .504-.324.828t-.828.324h-6.048q-.828 5.184-4.644 8.424t-9.936 3.96q6.012 6.408 16.524 19.296.504.576.144 1.224-.288.648-1.044.648h-7.02q-.576 0-.9-.432-11.016-13.212-17.928-20.556-.324-.324-.324-.792v-4.572q0-.468.342-.81t.81-.342h4.032q4.752 0 7.65-1.548t3.69-4.5h-15.372q-.504 0-.828-.324t-.324-.828v-3.672q0-.504.324-.828t.828-.324h14.868q-2.052-4.068-9.648-4.068h-5.22q-.468 0-.81-.342t-.342-.81v-4.788q0-.504.324-.828t.828-.324h29.952q.504 0 .828.324t.324.828v3.672q0 .504-.324.828t-.828.324h-8.388q1.692 2.196 2.304 5.184h6.156q.504 0 .828.324t.324.828z","YEN":"M21.708-9.143h-6.192q-.468 0-.81-.324t-.342-.828v-11.88h-10.368q-.468 0-.81-.324t-.342-.828v-3.708q0-.468.342-.81t.81-.342h10.368v-3.06h-10.368q-.468 0-.81-.324t-.342-.828v-3.744q0-.468.342-.81t.81-.342h7.704l-11.556-20.808q-.288-.576 0-1.152.36-.576 1.008-.576h6.984q.684 0 1.044.648l7.74 15.3q.684 1.368 2.016 4.5.36-.864 1.098-2.448t.99-2.196l6.876-15.12q.288-.684 1.044-.684h6.876q.612 0 .972.576.324.504.036 1.116l-11.268 20.844h7.74q.468 0 .81.342t.342.81v3.744q0 .504-.342.828t-.81.324h-10.44v3.06h10.44q.468 0 .81.342t.342.81v3.708q0 .504-.342.828t-.81.324h-10.44v11.88q0 .468-.342.81t-.81.342z","RUBLE":"M37.548-44.099q0-3.6-2.34-5.832t-6.156-2.232h-11.52v16.128h11.52q3.816 0 6.156-2.232t2.34-5.832zm8.532 0q0 6.948-4.554 11.34t-11.754 4.392h-12.24v4.248h18.18q.504 0 .828.324t.324.828v4.608q0 .504-.324.828t-.828.324h-18.18v6.912q0 .504-.342.828t-.81.324h-6.012q-.504 0-.828-.324t-.324-.828v-6.912h-8.064q-.504 0-.828-.324t-.324-.828v-4.608q0-.504.324-.828t.828-.324h8.064v-4.248h-8.064q-.504 0-.828-.324t-.324-.828v-5.364q0-.468.324-.81t.828-.342h8.064v-22.644q0-.504.324-.828t.828-.324h19.404q7.2 0 11.754 4.392t4.554 11.34z","WON":"M18.504-21.419l2.916-10.764h-5.724l2.7 10.8.036.108.036.108.018-.126.018-.126zm4.176-15.372l1.26-4.608h-10.512l1.152 4.608h8.1zm6.912 0h5.004l-1.26-4.608h-2.52zm16.164 15.408l2.808-10.8h-5.832l2.916 10.764.018.126.054.126.018-.108.018-.108zm3.996-15.408l1.188-4.608h-10.692l1.224 4.608h8.28zm14.76 1.152v2.304q0 .504-.324.828t-.828.324h-7.668l-5.904 22.176q-.252.864-1.116.864h-5.724q-.864 0-1.116-.864l-5.976-22.176h-7.524l-6.012 22.176q-.252.864-1.116.864h-5.724q-.396 0-.702-.252t-.378-.612l-5.76-22.176h-7.488q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h6.3l-1.188-4.608h-5.112q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h3.924l-3.204-12.384q-.18-.54.18-1.008.36-.432.936-.432h4.932q.936 0 1.116.864l3.24 12.96h12.924l3.492-12.96q.252-.864 1.116-.864h4.536q.864 0 1.116.864l3.528 12.96h13.14l3.348-12.96q.18-.864 1.116-.864h4.932q.576 0 .936.432.36.468.18 1.008l-3.276 12.384h3.996q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-5.22l-1.224 4.608h6.444q.504 0 .828.324t.324.828z","BTC":"M42.012-41.399q.648 6.552-4.716 9.288 4.212 1.008 6.3 3.708t1.62 7.704q-.252 2.556-1.17 4.5t-2.322 3.204-3.492 2.106-4.374 1.242-5.238.54v9.18h-5.544v-9.036q-2.88 0-4.392-.036v9.072h-5.544v-9.18q-.648 0-1.944-.018t-1.98-.018h-7.2l1.116-6.588h3.996q1.8 0 2.088-1.836v-14.472h.576q-.216-.036-.576-.036v-10.332q-.468-2.448-3.204-2.448h-3.996v-5.904l7.632.036q2.304 0 3.492-.036v-9.072h5.544v8.892q2.952-.072 4.392-.072v-8.82h5.544v9.072q2.844.252 5.04.81t4.068 1.62 2.97 2.808 1.314 4.122zm-7.74 19.62q0-1.296-.54-2.304t-1.332-1.656-2.07-1.098-2.358-.666-2.664-.324-2.484-.108-2.322.036-1.71.036v12.168q.288 0 1.332.018t1.728.018 1.908-.054 2.106-.144 2.052-.306 1.998-.504 1.71-.756 1.422-1.08.882-1.44.342-1.836zm-2.556-17.136q0-1.188-.45-2.106t-1.098-1.512-1.728-1.008-1.98-.594-2.214-.288-2.088-.09-1.944.036-1.422.018v11.052q.18 0 1.242.018t1.674 0 1.8-.072 1.98-.198 1.854-.396 1.746-.666 1.332-.972.972-1.386.324-1.836z","FILE":"M36.864-46.007v-16.992q.792.504 1.296 1.008l14.688 14.688q.504.504 1.008 1.296h-16.992zm-4.608 1.152q0 1.44 1.008 2.448t2.448 1.008h19.584v38.016q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h28.8v19.584z","FILE_TEXT":"M52.848-47.303q.504.504 1.008 1.296h-16.992v-16.992q.792.504 1.296 1.008zm-17.136 5.904h19.584v38.016q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h28.8v19.584q0 1.44 1.008 2.448t2.448 1.008zm5.76 26.496v-2.304q0-.504-.324-.828t-.828-.324h-25.344q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h25.344q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-25.344q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h25.344q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-25.344q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h25.344q.504 0 .828-.324t.324-.828z","SORT_ALPHA_ASC":"M42.876-49.751h6.372l-2.592-7.848-.432-1.692q-.072-.576-.072-.72h-.144l-.108.72q0 .036-.126.648t-.27 1.044zm-16.38 37.152q0 .432-.36.864l-11.484 11.484q-.36.324-.828.324-.432 0-.828-.324l-11.52-11.52q-.54-.576-.252-1.26.288-.72 1.08-.72h6.912v-49.536q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v49.536h6.912q.504 0 .828.324t.324.828zm30.096 4.284v8.388h-21.024v-3.24l13.284-19.044q.432-.648.756-.972l.396-.324v-.108l-.234.018-.27.018q-.432.108-1.08.108h-8.352v4.14h-4.32v-8.244h20.412v3.204l-13.284 19.08q-.216.288-.756.936l-.396.396v.072l.504-.072q.324-.072 1.08-.072h8.928v-4.284h4.356zm3.204-32.292v3.816h-10.368v-3.816h2.7l-1.692-5.184h-8.748l-1.692 5.184h2.7v3.816h-10.332v-3.816h2.52l8.28-23.832h5.832l8.28 23.832h2.52z","SORT_ALPHA_DESC":"M42.876-12.887h6.372l-2.592-7.848-.432-1.692q-.072-.576-.072-.72h-.144l-.108.72q0 .036-.126.648t-.27 1.044zm-16.38.288q0 .432-.36.864l-11.484 11.484q-.36.324-.828.324-.432 0-.828-.324l-11.52-11.52q-.54-.576-.252-1.26.288-.72 1.08-.72h6.912v-49.536q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v49.536h6.912q.504 0 .828.324t.324.828zm33.3 8.856v3.816h-10.368v-3.816h2.7l-1.692-5.184h-8.748l-1.692 5.184h2.7v3.816h-10.332v-3.816h2.52l8.28-23.832h5.832l8.28 23.832h2.52zm-3.204-41.436v8.388h-21.024v-3.24l13.284-19.044q.432-.648.756-.972l.396-.324v-.108l-.234.018-.27.018q-.432.108-1.08.108h-8.352v4.14h-4.32v-8.244h20.412v3.204l-13.284 19.08q-.216.288-.756.936l-.396.36v.108l.504-.108q.324-.036 1.08-.036h8.928v-4.284h4.356z","SORT_AMOUNT_ASC":"M26.496-12.599q0 .432-.36.864l-11.484 11.484q-.36.324-.828.324-.432 0-.828-.324l-11.52-11.52q-.54-.576-.252-1.26.288-.72 1.08-.72h6.912v-49.536q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v49.536h6.912q.504 0 .828.324t.324.828zm38.016 4.608v6.912q0 .504-.324.828t-.828.324h-29.952q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h29.952q.504 0 .828.324t.324.828zm-6.912-18.432v6.912q0 .504-.324.828t-.828.324h-23.04q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h23.04q.504 0 .828.324t.324.828zm-6.912-18.432v6.912q0 .504-.324.828t-.828.324h-16.128q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h16.128q.504 0 .828.324t.324.828zm-6.912-18.432v6.912q0 .504-.324.828t-.828.324h-9.216q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h9.216q.504 0 .828.324t.324.828z","SORT_AMOUNT_DESC":"M43.776-7.991v6.912q0 .504-.324.828t-.828.324h-9.216q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h9.216q.504 0 .828.324t.324.828zm-17.28-4.608q0 .432-.36.864l-11.484 11.484q-.36.324-.828.324-.432 0-.828-.324l-11.52-11.52q-.54-.576-.252-1.26.288-.72 1.08-.72h6.912v-49.536q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v49.536h6.912q.504 0 .828.324t.324.828zm24.192-13.824v6.912q0 .504-.324.828t-.828.324h-16.128q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h16.128q.504 0 .828.324t.324.828zm6.912-18.432v6.912q0 .504-.324.828t-.828.324h-23.04q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h23.04q.504 0 .828.324t.324.828zm6.912-18.432v6.912q0 .504-.324.828t-.828.324h-29.952q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h29.952q.504 0 .828.324t.324.828z","SORT_NUMERIC_ASC":"M48.456-17.171q0-2.268-1.584-4.176t-3.708-1.908q-1.872 0-2.988 1.332t-1.116 3.384 1.314 3.42 3.762 1.368q1.8 0 3.06-.972t1.26-2.448zm-21.96 4.572q0 .432-.36.864l-11.484 11.484q-.36.324-.828.324-.432 0-.828-.324l-11.52-11.52q-.54-.576-.252-1.26.288-.72 1.08-.72h6.912v-49.536q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v49.536h6.912q.504 0 .828.324t.324.828zm27-2.484q0 2.232-.468 4.374t-1.476 4.104-2.448 3.438-3.546 2.358-4.59.882q-2.232 0-3.888-.576-.864-.288-1.512-.54l1.404-4.068q.54.252 1.116.396 1.332.468 2.7.468 3.024 0 4.842-2.106t2.394-5.238h-.072q-.756.828-2.214 1.332t-3.042.504q-3.816 0-6.228-2.574t-2.412-6.21q0-3.78 2.592-6.408t6.516-2.628q4.428 0 7.38 3.402t2.952 9.09zm-1.08-25.812v4.104h-16.884v-4.104h6.012v-15.552l.018-.684.018-.612v-.576h-.072l-.252.432q-.288.468-.936 1.116l-2.232 2.088-2.952-3.096 6.912-6.66h4.428v23.544h5.94z","SORT_NUMERIC_DESC":"M48.456-54.035q0-2.268-1.584-4.176t-3.708-1.908q-1.872 0-2.988 1.332t-1.116 3.384 1.314 3.42 3.762 1.368q1.8 0 3.06-.972t1.26-2.448zm-21.96 41.436q0 .432-.36.864l-11.484 11.484q-.36.324-.828.324-.432 0-.828-.324l-11.52-11.52q-.54-.576-.252-1.26.288-.72 1.08-.72h6.912v-49.536q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v49.536h6.912q.504 0 .828.324t.324.828zm25.92 8.568v4.104h-16.884v-4.104h6.012v-15.552l.018-.684.018-.612v-.576h-.072l-.252.432q-.288.468-.936 1.116l-2.232 2.088-2.952-3.096 6.912-6.66h4.428v23.544h5.94zm1.08-47.916q0 2.232-.468 4.374t-1.476 4.104-2.448 3.438-3.546 2.358-4.59.882q-2.232 0-3.888-.576-.864-.288-1.512-.54l1.404-4.068q.54.252 1.116.396 1.332.468 2.7.468 3.024 0 4.842-2.106t2.394-5.238h-.072q-.756.828-2.214 1.332t-3.042.504q-3.816 0-6.228-2.574t-2.412-6.21q0-3.78 2.592-6.408t6.516-2.628q4.428 0 7.38 3.402t2.952 9.09z","THUMBS_UP":"M9.216-16.055q0-.936-.684-1.62t-1.62-.684q-.972 0-1.638.684t-.666 1.62q0 .972.666 1.638t1.638.666q.936 0 1.62-.666t.684-1.638zm5.76-18.432v23.04q0 .936-.684 1.62t-1.62.684h-10.368q-.936 0-1.62-.684t-.684-1.62v-23.04q0-.936.684-1.62t1.62-.684h10.368q.936 0 1.62.684t.684 1.62zm42.624 0q0 3.096-1.98 5.364.54 1.584.54 2.736.108 2.736-1.548 4.932.612 2.016 0 4.212-.54 2.052-1.944 3.384.324 4.032-1.764 6.516-2.304 2.736-7.092 2.808h-4.644q-2.376 0-5.184-.558t-4.374-1.044-4.338-1.422q-4.428-1.548-5.688-1.584-.936-.036-1.62-.702t-.684-1.602v-23.076q0-.9.648-1.566t1.548-.738q.864-.072 2.736-2.124t3.636-4.356q2.448-3.132 3.636-4.32.648-.648 1.116-1.728t.63-1.746.486-2.178q.252-1.404.45-2.196t.702-1.872 1.224-1.8q.684-.684 1.62-.684 1.656 0 2.97.378t2.16.936 1.44 1.458.864 1.62.432 1.8.18 1.62.018 1.404q0 1.368-.342 2.736t-.684 2.16-.99 2.016q-.108.216-.36.648t-.396.792-.288.864h9.972q2.808 0 4.86 2.052t2.052 4.86z","THUMBS_DOWN":"M9.216-43.703q0 .936-.684 1.62t-1.62.684q-.972 0-1.638-.684t-.666-1.62q0-.972.666-1.638t1.638-.666q.936 0 1.62.666t.684 1.638zm5.76 18.432v-23.04q0-.936-.684-1.62t-1.62-.684h-10.368q-.936 0-1.62.684t-.684 1.62v23.04q0 .936.684 1.62t1.62.684h10.368q.936 0 1.62-.684t.684-1.62zm40.644-5.364q1.98 2.196 1.98 5.364-.036 2.808-2.07 4.86t-4.842 2.052h-9.972q.144.504.288.864t.396.792.36.648q.648 1.332.972 2.052t.684 2.106.36 2.754q0 .864-.018 1.404t-.18 1.62-.432 1.8-.864 1.62-1.44 1.458-2.16.936-2.97.378q-.936 0-1.62-.684-.72-.72-1.224-1.8t-.702-1.872-.45-2.196q-.324-1.512-.486-2.178t-.63-1.746-1.116-1.728q-1.188-1.188-3.636-4.32-1.764-2.304-3.636-4.356t-2.736-2.124q-.9-.072-1.548-.738t-.648-1.566v-23.076q0-.936.684-1.602t1.62-.702q1.26-.036 5.688-1.584 2.772-.936 4.338-1.422t4.374-1.044 5.184-.558h4.644q4.788.072 7.092 2.808 2.088 2.484 1.764 6.516 1.404 1.332 1.944 3.384.612 2.196 0 4.212 1.656 2.196 1.548 4.932 0 1.152-.54 2.736z","YOUTUBE_SQUARE":"M33.084-17.531v-5.652q0-1.8-1.044-1.8-.612 0-1.188.576v8.064q.576.576 1.188.576 1.044 0 1.044-1.764zm6.624-4.392h2.376v-1.224q0-1.836-1.188-1.836t-1.188 1.836v1.224zm-20.556-9.576v2.52h-2.88v15.228h-2.664v-15.228h-2.808v-2.52h8.352zm7.236 4.536v13.212h-2.412v-1.44q-1.404 1.62-2.736 1.62-1.188 0-1.512-1.008-.216-.576-.216-1.944v-10.44h2.376v9.72q0 .864.036.936.036.54.54.54.72 0 1.512-1.116v-10.08h2.412zm9.072 3.996v5.256q0 1.872-.252 2.628-.432 1.512-1.908 1.512-1.26 0-2.448-1.476v1.296h-2.412v-17.748h2.412v5.796q1.152-1.44 2.448-1.44 1.476 0 1.908 1.512.252.756.252 2.664zm9.036 4.644v.324q0 1.044-.072 1.548-.108.792-.54 1.44-.972 1.44-2.88 1.44-1.872 0-2.916-1.368-.756-.972-.756-3.096v-4.644q0-2.124.72-3.096 1.044-1.368 2.88-1.368t2.808 1.368q.756 1.008.756 3.096v2.736h-4.788v2.34q0 1.836 1.224 1.836.864 0 1.08-.936 0-.036.018-.252t.018-.594v-.774h2.448zm-16.236-29.664v5.616q0 1.836-1.152 1.836t-1.152-1.836v-5.616q0-1.872 1.152-1.872t1.152 1.872zm19.188 25.668q0-6.372-.684-9.36-.36-1.584-1.548-2.646t-2.736-1.242q-4.896-.54-14.832-.54-9.9 0-14.796.54-1.584.18-2.754 1.242t-1.53 2.646q-.72 3.132-.72 9.36 0 6.336.72 9.36.36 1.548 1.53 2.628t2.718 1.26q4.932.54 14.832.54t14.832-.54q1.548-.18 2.718-1.26t1.53-2.628q.72-3.024.72-9.36zm-27.18-23.436l3.24-10.656h-2.7l-1.836 7.02-1.908-7.02h-2.808l.864 2.484.828 2.484q1.26 3.708 1.656 5.688v7.236h2.664v-7.236zm10.404 2.916v-4.68q0-2.088-.756-3.132-1.044-1.368-2.808-1.368-1.836 0-2.808 1.368-.756 1.044-.756 3.132v4.68q0 2.088.756 3.132.972 1.368 2.808 1.368 1.764 0 2.808-1.368.756-.972.756-3.132zm6.516 4.32h2.412v-13.32h-2.412v10.188q-.792 1.116-1.512 1.116-.54 0-.576-.576-.036-.072-.036-.936v-9.792h-2.412v10.548q0 1.332.216 1.98.396.972 1.548.972 1.296 0 2.772-1.62v1.44zm18.108-10.944v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","YOUTUBE":"M34.956-19.655v7.596q0 2.412-1.404 2.412-.828 0-1.62-.792v-10.836q.792-.792 1.62-.792 1.404 0 1.404 2.412zm12.168.036v1.656h-3.24v-1.656q0-2.448 1.62-2.448t1.62 2.448zm-34.776-7.848h3.852v-3.384h-11.232v3.384h3.78v20.484h3.6v-20.484zm10.368 20.484h3.204v-17.784h-3.204v13.608q-1.08 1.512-2.052 1.512-.648 0-.756-.756-.036-.108-.036-1.26v-13.104h-3.204v14.076q0 1.764.288 2.628.432 1.332 2.088 1.332 1.728 0 3.672-2.196v1.944zm15.444-5.328v-7.092q0-2.628-.324-3.564-.612-2.016-2.556-2.016-1.8 0-3.348 1.944v-7.812h-3.204v23.868h3.204v-1.728q1.62 1.98 3.348 1.98 1.944 0 2.556-1.98.324-.972.324-3.6zm12.168-.36v-.468h-3.276q0 1.836-.072 2.196-.252 1.296-1.44 1.296-1.656 0-1.656-2.484v-3.132h6.444v-3.708q0-2.844-.972-4.176-1.404-1.836-3.816-1.836-2.448 0-3.852 1.836-1.008 1.332-1.008 4.176v6.228q0 2.844 1.044 4.176 1.404 1.836 3.888 1.836 2.592 0 3.888-1.908.648-.972.756-1.944.072-.324.072-2.088zm-21.888-32.868v-7.56q0-2.484-1.548-2.484t-1.548 2.484v7.56q0 2.52 1.548 2.52t1.548-2.52zm25.884 27.036q0 8.424-.936 12.6-.504 2.124-2.088 3.564t-3.672 1.656q-6.624.756-19.98.756t-19.98-.756q-2.088-.216-3.69-1.656t-2.07-3.564q-.936-4.032-.936-12.6 0-8.424.936-12.6.504-2.124 2.088-3.564t3.708-1.692q6.588-.72 19.944-.72t19.98.72q2.088.252 3.69 1.692t2.07 3.564q.936 4.032.936 12.6zm-35.928-45.936h3.672l-4.356 14.364v9.756h-3.6v-9.756q-.504-2.664-2.196-7.632-1.332-3.708-2.34-6.732h3.816l2.556 9.468zm13.32 11.988v6.3q0 2.916-1.008 4.248-1.332 1.836-3.816 1.836-2.412 0-3.78-1.836-1.008-1.368-1.008-4.248v-6.3q0-2.88 1.008-4.212 1.368-1.836 3.78-1.836 2.484 0 3.816 1.836 1.008 1.332 1.008 4.212zm12.06-5.832v17.964h-3.276v-1.98q-1.908 2.232-3.708 2.232-1.656 0-2.124-1.332-.288-.864-.288-2.7v-14.184h3.276v13.212q0 1.188.036 1.26.108.792.756.792.972 0 2.052-1.548v-13.716h3.276z","XING":"M21.492-40.427q-.36.648-9.252 16.416-.972 1.656-2.34 1.656h-8.604q-.756 0-1.116-.612t0-1.296l9.108-16.128v-.036l-5.796-10.044q-.432-.792-.036-1.332.324-.54 1.152-.54h8.604q1.44 0 2.376 1.62zm29.016-23.112q.396.576 0 1.332l-19.008 33.624v.036l12.096 22.14q.396.72.036 1.332-.36.54-1.152.54h-8.604q-1.512 0-2.376-1.62l-12.204-22.392q.648-1.152 19.116-33.912.9-1.62 2.304-1.62h8.676q.792 0 1.116.54z","XING_SQUARE":"M24.66-36.899q0-.036-4.536-7.992-.756-1.224-1.872-1.224h-6.624q-.648 0-.936.396-.252.432.036 1.044l4.5 7.776v.036l-7.056 12.456q-.324.504 0 1.008.288.468.864.468h6.66q1.116 0 1.8-1.296zm22.464-17.892q-.252-.432-.864-.432h-6.732q-1.08 0-1.764 1.26l-14.796 26.244q.036.072 9.432 17.316.72 1.26 1.872 1.26h6.624q.648 0 .9-.432.288-.468-.036-1.008l-9.36-17.136v-.036l14.724-26.028q.288-.576 0-1.008zm8.172 5.328v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","YOUTUBE_PLAY":"M46.08-32.183q0-1.332-1.08-1.944l-18.432-11.52q-1.116-.72-2.34-.072-1.188.648-1.188 2.016v23.04q0 1.368 1.188 2.016.576.288 1.116.288.72 0 1.224-.36l18.432-11.52q1.08-.612 1.08-1.944zm18.432 0q0 3.456-.036 5.4t-.306 4.914-.81 5.31q-.576 2.628-2.484 4.428t-4.464 2.088q-7.992.9-24.156.9t-24.156-.9q-2.556-.288-4.482-2.088t-2.502-4.428q-.504-2.34-.774-5.31t-.306-4.914-.036-5.4.036-5.4.306-4.914.81-5.31q.576-2.628 2.484-4.428t4.464-2.088q7.992-.9 24.156-.9t24.156.9q2.556.288 4.482 2.088t2.502 4.428q.504 2.34.774 5.31t.306 4.914.036 5.4z","DROPBOX":"M14.472-38.987l17.784 10.98-12.312 10.26-17.64-11.484zm35.496 19.98v3.888l-17.64 10.548v.036l-.036-.036-.036.036v-.036l-17.604-10.548v-3.888l5.292 3.456 12.312-10.224v-.072l.036.036.036-.036v.072l12.348 10.224zm-30.024-41.184l12.312 10.26-17.784 10.944-12.168-9.72zm30.096 21.204l12.168 9.756-17.604 11.484-12.348-10.26zm-5.436-21.204l17.604 11.484-12.168 9.72-17.784-10.944z","STACK_OVERFLOW":"M46.404-5.687h-40.248v-17.28h-5.76v23.04h51.768v-23.04h-5.76v17.28zm-33.912-18.864l1.188-5.652 28.188 5.94-1.188 5.616zm3.708-13.464l2.412-5.256 26.1 12.204-2.412 5.22zm7.236-12.816l3.672-4.428 22.104 18.468-3.672 4.428zm14.292-13.608l17.172 23.076-4.608 3.456-17.172-23.076zm-25.848 52.956v-5.724h28.8v5.724h-28.8z","INSTAGRAM":"M49.032-13.103v-23.328h-4.86q.72 2.268.72 4.716 0 4.536-2.304 8.37t-6.264 6.066-8.64 2.232q-7.092 0-12.132-4.878t-5.04-11.79q0-2.448.72-4.716h-5.076v23.328q0 .936.63 1.566t1.566.63h38.484q.9 0 1.548-.63t.648-1.566zm-10.224-19.188q0-4.464-3.258-7.614t-7.866-3.15q-4.572 0-7.83 3.15t-3.258 7.614 3.258 7.614 7.83 3.15q4.608 0 7.866-3.15t3.258-7.614zm10.224-12.96v-5.94q0-1.008-.72-1.746t-1.764-.738h-6.264q-1.044 0-1.764.738t-.72 1.746v5.94q0 1.044.72 1.764t1.764.72h6.264q1.044 0 1.764-.72t.72-1.764zm6.264-7.488v41.112q0 2.916-2.088 5.004t-5.004 2.088h-41.112q-2.916 0-5.004-2.088t-2.088-5.004v-41.112q0-2.916 2.088-5.004t5.004-2.088h41.112q2.916 0 5.004 2.088t2.088 5.004z","FLICKR":"M44.928-59.831q4.284 0 7.326 3.042t3.042 7.326v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56zm-19.8 27.648q0-3.168-2.232-5.4t-5.4-2.232-5.4 2.232-2.232 5.4 2.232 5.4 5.4 2.232 5.4-2.232 2.232-5.4zm20.304 0q0-3.168-2.232-5.4t-5.4-2.232-5.4 2.232-2.232 5.4 2.232 5.4 5.4 2.232 5.4-2.232 2.232-5.4z","ADN":"M27.648-42.047l7.236 11.016h-14.472zm13.14 19.08h3.384l-16.524-24.876-16.524 24.876h3.384l3.744-5.76h18.792zm14.508-9.216q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","BITBUCKET":"M29.34-33.515q.288 2.268-1.818 3.636t-4.014.216q-1.404-.612-1.926-2.088t-.018-2.952 1.872-2.088q1.296-.648 2.61-.432t2.304 1.278.99 2.43zm3.996-.756q-.504-3.852-4.068-5.904t-7.092-.468q-2.268 1.008-3.618 3.186t-1.242 4.662q.144 3.276 2.79 5.58t5.958 2.016q3.276-.288 5.472-3.024t1.8-6.048zm8.604-19.512q-.72-.972-2.016-1.602t-2.088-.792-2.556-.45q-10.476-1.692-20.376.072-1.548.252-2.376.432t-1.98.792-1.8 1.548q1.08 1.008 2.736 1.638t2.646.792 3.15.414q8.208 1.044 16.128.036 2.268-.288 3.222-.432t2.61-.774 2.7-1.674zm2.052 37.26q-.288.936-.558 2.754t-.504 3.024-1.026 2.52-2.088 2.034q-3.096 1.728-6.822 2.574t-7.272.792-7.254-.666q-1.656-.288-2.934-.648t-2.754-.972-2.628-1.566-1.872-2.214q-.9-3.456-2.052-10.512l.216-.576.648-.324q8.028 5.328 18.234 5.328t18.27-5.328q.756.216.864.828t-.18 1.62-.288 1.332zm6.516-34.596q-.936 6.012-3.996 23.58-.18 1.08-.972 2.016t-1.566 1.44-1.962 1.116q-9.072 4.536-21.96 3.168-8.928-.972-14.184-5.004-.54-.432-.918-.954t-.612-1.26-.324-1.224-.216-1.422-.198-1.26q-.324-1.8-.954-5.4t-1.008-5.814-.846-5.31-.792-5.688q.108-.936.63-1.746t1.134-1.35 1.62-1.08 1.656-.81 1.728-.666q4.5-1.656 11.268-2.304 13.644-1.332 24.336 1.8 5.58 1.656 7.74 4.392.576.72.594 1.836t-.198 1.944z","BITBUCKET_SQUARE":"M30.528-33.119q0-1.548-1.476-2.376t-2.772-.036q-1.548.72-1.53 2.61t1.566 2.538q1.404.828 2.916-.144t1.296-2.592zm2.88-.576q.288 2.376-1.296 4.356t-3.96 2.196-4.284-1.44-2.016-4.068q-.072-1.764.918-3.348t2.61-2.304q2.52-1.116 5.094.36t2.934 4.248zm6.192-14.076q-.72.756-1.926 1.224t-1.908.576-2.286.288q-5.58.72-11.664 0-1.584-.216-2.268-.342t-1.89-.576-1.962-1.17q.468-.684 1.296-1.116t1.44-.558 1.692-.306q7.128-1.26 14.688-.036 1.188.18 1.836.306t1.548.576 1.404 1.134zm1.512 26.856q0-.252.198-.954t.108-1.152-.63-.594q-5.796 3.816-13.14 3.816t-13.176-3.816l-.432.216-.18.432q.936 5.544 1.476 7.56 1.692 2.916 7.344 3.888 8.964 1.656 15.408-1.908 1.224-.684 1.764-1.854t.81-3.078.45-2.556zm4.68-24.948q.324-1.908-.288-2.7-1.548-1.98-5.58-3.168-7.776-2.268-17.532-1.296-4.752.432-8.136 1.656-1.368.54-2.142.9t-1.692 1.224-1.062 1.944q.288 2.448.684 4.968t1.044 6.156.864 4.932q.036.18.18 1.116t.252 1.296.432.972.792 1.008q3.78 2.88 10.224 3.6 9.324 1.008 15.84-2.268.864-.468 1.422-.828t1.116-1.044.702-1.44q1.728-9.612 2.88-17.028zm9.504-3.6v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","TUMBLR":"M33.984-16.595l2.88 8.532q-.828 1.26-3.996 2.376t-6.372 1.152q-3.744.072-6.858-.936t-5.13-2.664-3.42-3.816-1.998-4.32-.594-4.248v-19.584h-6.048v-7.74q2.592-.936 4.644-2.502t3.276-3.24 2.088-3.672 1.224-3.564.54-3.186q.036-.18.162-.306t.27-.126h8.784v15.264h11.988v9.072h-12.024v18.648q0 1.08.234 2.016t.81 1.89 1.782 1.494 2.934.504q2.808-.072 4.824-1.044z","TUMBLR_SQUARE":"M40.896-11.843l-2.232-6.588q-1.584.792-3.708.792-1.296.036-2.232-.378t-1.386-1.134-.63-1.458-.18-1.566v-14.328h9.252v-6.984h-9.216v-11.736h-6.768q-.288 0-.324.36-.18 1.584-.63 3.132t-1.404 3.42-2.772 3.42-4.266 2.448v5.94h4.68v15.048q0 2.052.774 4.14t2.34 3.996 4.356 3.078 6.354 1.098q2.484-.036 4.914-.9t3.078-1.8zm14.4-37.62v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","LONG_ARROW_DOWN":"M27.54-17.675q.288.684-.18 1.26l-12.6 13.824q-.36.36-.828.36-.504 0-.864-.36l-12.78-13.824q-.468-.576-.18-1.26.324-.684 1.044-.684h8.064v-44.928q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v44.928h8.064q.756 0 1.044.684z","LONG_ARROW_UP":"M27.54-46.691q-.324.684-1.044.684h-8.064v44.928q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-44.928h-8.064q-.756 0-1.044-.684t.18-1.26l12.6-13.824q.36-.36.828-.36.504 0 .864.36l12.78 13.824q.468.576.18 1.26z","LONG_ARROW_LEFT":"M64.512-35.639v6.912q0 .504-.324.828t-.828.324h-44.928v8.064q0 .756-.684 1.044t-1.26-.18l-13.824-12.6q-.36-.36-.36-.828 0-.504.36-.864l13.824-12.744q.576-.504 1.26-.216.684.324.684 1.044v8.064h44.928q.504 0 .828.324t.324.828z","LONG_ARROW_RIGHT":"M62.208-32.291q0 .504-.36.864l-13.824 12.744q-.576.504-1.26.216-.684-.324-.684-1.044v-8.064h-44.928q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h44.928v-8.064q0-.756.684-1.044t1.26.18l13.824 12.6q.36.36.36.828z","APPLE":"M50.148-20.699q-1.404 4.5-4.428 9-4.644 7.056-9.252 7.056-1.764 0-5.04-1.152-3.096-1.152-5.436-1.152-2.196 0-5.112 1.188-2.916 1.224-4.752 1.224-5.472 0-10.836-9.324-5.292-9.396-5.292-18.108 0-8.208 4.068-13.464 4.032-5.184 10.224-5.184 2.592 0 6.372 1.08 3.744 1.08 4.968 1.08 1.62 0 5.148-1.224 3.672-1.224 6.228-1.224 4.284 0 7.668 2.34 1.872 1.296 3.744 3.6-2.844 2.412-4.104 4.248-2.34 3.384-2.34 7.452 0 4.464 2.484 8.028t5.688 4.536zm-13.536-42.228q0 2.196-1.044 4.896-1.08 2.7-3.348 4.968-1.944 1.944-3.888 2.592-1.332.396-3.744.612.108-5.364 2.808-9.252 2.664-3.852 9-5.328l.09.396.09.396.018.36.018.36z","WINDOWS":"M24.552-28.223v23.436l-24.552-3.384v-20.052h24.552zm0-26.748v23.724h-24.552v-20.34zm35.352 26.748v28.296l-32.652-4.5v-23.796h32.652zm0-31.608v28.584h-32.652v-24.084z","ANDROID":"M17.748-47.051q.576 0 .99-.414t.414-.99-.414-.99-.99-.414-.972.414-.396.99.396.99.972.414zm15.192 0q.576 0 .972-.414t.396-.99-.396-.99-.972-.414-.99.414-.414.99.414.99.99.414zm-29.232 6.624q1.512 0 2.592 1.08t1.08 2.592v15.48q0 1.548-1.062 2.628t-2.61 1.08-2.628-1.08-1.08-2.628v-15.48q0-1.512 1.08-2.592t2.628-1.08zm38.16.684v23.976q0 1.656-1.152 2.808t-2.772 1.152h-2.7v8.172q0 1.548-1.08 2.628t-2.628 1.08-2.628-1.08-1.08-2.628v-8.172h-4.968v8.172q0 1.548-1.08 2.628t-2.628 1.08q-1.512 0-2.592-1.08t-1.08-2.628l-.036-8.172h-2.664q-1.656 0-2.808-1.152t-1.152-2.808v-23.976h33.048zm-8.352-14.58q3.852 1.98 6.156 5.526t2.304 7.758h-33.3q0-4.212 2.304-7.758t6.192-5.526l-2.556-4.716q-.252-.468.18-.72.468-.216.72.216l2.592 4.752q3.42-1.512 7.236-1.512t7.236 1.512l2.592-4.752q.252-.432.72-.216.432.252.18.72zm17.172 17.568v15.48q0 1.548-1.08 2.628t-2.628 1.08q-1.512 0-2.592-1.08t-1.08-2.628v-15.48q0-1.548 1.08-2.61t2.592-1.062q1.548 0 2.628 1.062t1.08 2.61z","LINUX":"M23.868-49.643q-.396.036-.558.378t-.306.342q-.18.036-.18-.18 0-.432.684-.54h.36zm3.132.504q-.144.036-.414-.234t-.63-.162q.864-.396 1.152.072.108.216-.108.324zm-12.636 15.372q-.144-.036-.216.108t-.162.45-.198.486-.36.468q-.252.36-.036.432.144.036.45-.252t.45-.648l.072-.252.072-.216.054-.162.018-.144v-.108l-.036-.09-.108-.072zm30.78 12.924q0-.648-1.98-1.512.144-.54.27-.99t.18-.936.108-.774.018-.81-.036-.702-.126-.792-.144-.738-.18-.9-.198-.954q-.36-1.728-1.692-3.708t-2.592-2.7q.864.72 2.052 2.988 3.132 5.832 1.944 10.008-.396 1.44-1.8 1.512-1.116.144-1.386-.666t-.288-3.006-.414-3.852q-.324-1.404-.702-2.484t-.702-1.638-.558-.882-.468-.54-.27-.252q-.504-2.232-1.116-3.708t-1.062-2.016-.846-1.188-.54-1.44q-.144-.756.216-1.926t.162-1.782-1.602-.9q-.54-.108-1.602-.648t-1.278-.576q-.288-.036-.396-.936t.288-1.836 1.296-.972q1.332-.108 1.836 1.08t.144 2.088q-.396.684-.072.954t1.08.018q.468-.144.468-1.296v-1.332q-.18-1.08-.486-1.8t-.756-1.098-.846-.54-.972-.27q-3.852.288-3.204 4.824 0 .54-.036.54-.324-.324-1.062-.378t-1.188.018-.558-.18q.036-2.052-.576-3.24t-1.62-1.224q-.972-.036-1.494.99t-.594 2.142q-.036.54.126 1.332t.468 1.35.558.486q.36-.108.576-.504.144-.324-.252-.288-.252 0-.558-.522t-.342-1.206q-.036-.792.324-1.332t1.224-.504q.612 0 .972.756t.342 1.404-.054.792q-.792.54-1.116 1.044-.288.432-.99.846t-.738.45q-.468.504-.558.972t.27.648q.504.288.9.702t.576.684.666.468 1.278.234q1.692.072 3.672-.54.072-.036.828-.252t1.242-.378 1.062-.468.756-.63q.324-.504.72-.288.18.108.234.306t-.108.432-.594.342q-.72.216-2.034.774t-1.638.702q-1.584.684-2.52.828-.9.18-2.844-.072-.36-.072-.324.072t.612.684q.9.828 2.412.792.612-.036 1.296-.252t1.296-.504 1.206-.63 1.08-.612.882-.432.63-.09.306.396q0 .072-.036.162t-.144.18-.216.162-.306.18-.324.162-.36.18-.342.162q-1.008.504-2.43 1.584t-2.394 1.548-1.764.036q-.756-.396-2.268-2.628-.792-1.116-.9-.792-.036.108-.036.36 0 .9-.54 2.034t-1.062 1.998-.756 2.088.414 2.268q-.828.216-2.25 3.24t-1.71 5.076q-.072.648-.054 2.484t-.198 2.124q-.288.864-1.044.108-1.152-1.116-1.296-3.384-.072-1.008.144-2.016.144-.684-.036-.648l-.144.18q-1.296 2.34.36 5.976.18.432.9 1.008t.864.72q.72.828 3.744 3.258t3.348 2.754q.576.54.63 1.368t-.504 1.548-1.638.828q.288.54 1.044 1.602t1.008 1.944.252 2.538q1.656-.864.252-3.312-.144-.288-.378-.576t-.342-.432-.072-.216q.108-.18.468-.342t.72.09q1.656 1.872 5.976 1.296 4.788-.54 6.372-3.132.828-1.368 1.224-1.08.432.216.36 1.872-.036.9-.828 3.312-.324.828-.216 1.35t.864.558q.108-.684.522-2.772t.486-3.24q.072-.756-.234-2.646t-.27-3.492.828-2.538q.54-.648 1.836-.648.036-1.332 1.242-1.908t2.61-.378 2.16.81zm-22.608-29.772q.108-.612-.09-1.08t-.414-.54q-.324-.072-.324.252.072.18.18.216.36 0 .252.54-.108.72.288.72.108 0 .108-.108zm15.084 7.092q-.072-.288-.234-.414t-.468-.18-.522-.198q-.18-.108-.342-.288t-.252-.288-.198-.234-.144-.144-.144.054q-.504.576.252 1.566t1.404 1.134q.324.036.522-.288t.126-.72zm-6.408-7.668q0-.396-.18-.702t-.396-.45-.324-.108q-.504.036-.252.252l.144.072q.504.144.648 1.116 0 .108.288-.072zm1.944-8.388q0-.072-.09-.18t-.324-.252-.342-.216q-.54-.54-.864-.54-.324.036-.414.27t-.036.468-.018.45q-.036.144-.216.378t-.216.324.108.306q.144.108.288 0t.396-.324.54-.324q.036-.036.324-.036t.54-.072.324-.252zm20.34 48.276q.72.432 1.116.882t.432.864-.09.81-.558.792-.846.702-1.08.666-1.134.594-1.152.558-.972.468q-1.368.684-3.078 2.016t-2.718 2.304q-.612.576-2.448.702t-3.204-.522q-.648-.324-1.062-.846t-.594-.918-.792-.702-1.692-.342q-1.584-.036-4.68-.036-.684 0-2.052.054t-2.088.09q-1.584.036-2.862.54t-1.926 1.08-1.566 1.026-1.926.414q-1.044-.036-3.996-1.116t-5.256-1.548q-.684-.144-1.836-.342t-1.8-.324-1.422-.342-1.206-.522-.612-.702q-.36-.828.252-2.394t.648-1.962q.036-.576-.144-1.44t-.36-1.53-.162-1.314.378-.972q.504-.432 2.052-.504t2.16-.432q1.08-.648 1.512-1.26t.432-1.836q.756 2.628-1.152 3.816-1.152.72-2.988.54-1.224-.108-1.548.36-.468.54.18 2.052.072.216.288.648t.306.648.162.612.036.792q0 .54-.612 1.764t-.504 1.728q.108.612 1.332.936.72.216 3.042.666t3.582.738q.864.216 2.664.792t2.97.828 1.998.144q1.548-.216 2.322-1.008t.828-1.728-.27-2.106-.684-1.872-.72-1.314q-4.356-6.84-6.084-8.712-2.448-2.664-4.068-1.44-.396.324-.54-.54-.108-.576-.072-1.368.036-1.044.36-1.872t.864-1.692.792-1.512q.288-.756.954-2.592t1.062-2.808 1.08-2.196 1.404-1.944q3.96-5.148 4.464-7.02-.432-4.032-.576-11.16-.072-3.24.864-5.454t3.816-3.762q1.404-.756 3.744-.756 1.908-.036 3.816.486t3.204 1.494q2.052 1.512 3.294 4.374t1.062 5.31q-.18 3.42 1.08 7.704 1.224 4.068 4.788 7.848 1.98 2.124 3.582 5.868t2.142 6.876q.288 1.764.18 3.042t-.432 1.998-.72.792q-.36.072-.846.684t-.972 1.278-1.458 1.206-2.196.504q-.648-.036-1.134-.18t-.81-.486-.486-.558-.414-.738-.324-.702q-.792-1.332-1.476-1.08t-1.008 1.764.252 3.492q.72 2.52.036 7.02-.36 2.34.648 3.618t2.628 1.188 3.06-1.278q2.124-1.764 3.222-2.394t3.726-1.53q1.908-.648 2.772-1.314t.666-1.242-.9-1.026-1.854-.846q-1.188-.396-1.782-1.728t-.54-2.61.558-1.71q.036 1.116.288 2.034t.522 1.458.738 1.026.756.684.774.468.594.342z","DRIBBBLE":"M36.864-10.439q-1.512-8.676-5.04-17.928h-.072l-.072.036q-.576.216-1.548.594t-3.636 1.764-4.932 2.952-4.716 4.122-3.708 5.328l-.54-.396q6.624 5.4 15.048 5.4 4.752 0 9.216-1.872zm-6.66-21.852q-.756-1.764-1.908-3.996-11.196 3.348-24.228 3.348-.036.252-.036.756 0 4.464 1.584 8.514t4.464 7.254q1.8-3.204 4.446-5.994t5.13-4.482 4.698-2.916 3.582-1.728l1.332-.468q.144-.036.468-.126t.468-.162zm-3.852-7.632q-4.32-7.668-8.784-13.608-4.968 2.34-8.424 6.696t-4.608 9.792q10.872 0 21.816-2.88zm24.624 11.484q-7.56-2.16-14.724-1.044 3.132 8.604 4.608 16.884 3.996-2.7 6.66-6.822t3.456-9.018zm-28.98-26.676l-.072.036.072-.036zm21.24 5.22q-6.66-5.904-15.588-5.904-2.736 0-5.58.684 4.716 6.12 8.856 13.752 2.484-.936 4.68-2.178t3.474-2.214 2.358-2.052 1.35-1.458zm8.028 17.46q-.108-8.352-5.364-14.76l-.036.036q-.324.432-.684.882t-1.566 1.602-2.556 2.178-3.6 2.34-4.734 2.322q.9 1.908 1.584 3.42.072.216.234.63t.27.594q1.296-.18 2.682-.252t2.646-.072 2.484.054 2.304.144 2.034.198 1.728.234 1.314.216.9.162zm4.032.252q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","SKYPE":"M42.228-26.171q0-1.8-.702-3.294t-1.746-2.466-2.628-1.764-2.97-1.224-3.15-.828l-3.744-.864q-1.08-.252-1.584-.378t-1.26-.414-1.08-.576-.594-.756-.27-1.08q0-2.772 5.184-2.772 1.548 0 2.772.432t1.944 1.026 1.368 1.206 1.44 1.044 1.728.432q1.692 0 2.718-1.152t1.026-2.772q0-1.98-2.016-3.582t-5.112-2.43-6.552-.828q-2.448 0-4.752.558t-4.302 1.692-3.204 3.132-1.206 4.626q0 2.196.684 3.834t2.016 2.718 2.88 1.746 3.708 1.17l5.256 1.296q3.24.792 4.032 1.296 1.152.72 1.152 2.16 0 1.404-1.44 2.322t-3.78.918q-1.836 0-3.294-.576t-2.34-1.386-1.638-1.62-1.656-1.386-1.944-.576q-1.8 0-2.718 1.08t-.918 2.7q0 3.312 4.392 5.67t10.476 2.358q2.628 0 5.04-.666t4.41-1.926 3.186-3.366 1.188-4.734zm13.068 7.812q0 5.724-4.05 9.774t-9.774 4.05q-4.68 0-8.424-2.88-2.772.576-5.4.576-5.148 0-9.846-1.998t-8.1-5.4-5.4-8.1-1.998-9.846q0-2.628.576-5.4-2.88-3.744-2.88-8.424 0-5.724 4.05-9.774t9.774-4.05q4.68 0 8.424 2.88 2.772-.576 5.4-.576 5.148 0 9.846 1.998t8.1 5.4 5.4 8.1 1.998 9.846q0 2.628-.576 5.4 2.88 3.744 2.88 8.424z","FOURSQUARE":"M36-48.815l1.332-6.984q.18-.828-.324-1.44t-1.26-.612h-25.632q-.828 0-1.386.612t-.558 1.332v39.636q0 .252.216.036l10.476-12.672q.828-.936 1.368-1.206t1.728-.27h8.604q.792 0 1.332-.522t.648-1.062q.864-4.68 1.332-6.876.144-.756-.414-1.44t-1.314-.684h-10.584q-1.044 0-1.728-.684t-.684-1.728v-1.512q0-1.044.684-1.71t1.728-.666h12.456q.648 0 1.26-.486t.72-1.062zm8.172-7.992q-.54 2.628-1.926 9.594t-2.502 12.6-1.26 6.246q-.216.792-.324 1.17t-.504 1.17-.882 1.188-1.386.756-2.088.36h-9.756q-.468 0-.792.36-.288.324-15.336 17.784-.792.9-2.106 1.026t-1.746-.198q-1.98-.792-1.98-3.528v-50.76q0-1.98 1.368-3.69t4.32-1.71h31.968q3.42 0 4.572 1.908t.36 5.724zm0 0l-5.688 28.44q.144-.612 1.26-6.246t2.502-12.6 1.926-9.594z","TRELLO":"M25.344-16.055v-36.864q0-.504-.324-.828t-.828-.324h-17.28q-.504 0-.828.324t-.324.828v36.864q0 .504.324.828t.828.324h17.28q.504 0 .828-.324t.324-.828zm24.192-13.824v-23.04q0-.504-.324-.828t-.828-.324h-17.28q-.504 0-.828.324t-.324.828v23.04q0 .504.324.828t.828.324h17.28q.504 0 .828-.324t.324-.828zm5.76-27.648v50.688q0 .936-.684 1.62t-1.62.684h-50.688q-.936 0-1.62-.684t-.684-1.62v-50.688q0-.936.684-1.62t1.62-.684h50.688q.936 0 1.62.684t.684 1.62z","FEMALE":"M46.08-26.423q0 1.44-1.008 2.448t-2.448 1.008q-1.836 0-2.88-1.548l-8.172-12.276h-1.62v4.752l8.892 14.796q.324.54.324 1.188 0 .936-.684 1.62t-1.62.684h-6.912v9.792q0 1.656-1.188 2.844t-2.844 1.188h-5.76q-1.656 0-2.844-1.188t-1.188-2.844v-9.792h-6.912q-.936 0-1.62-.684t-.684-1.62q0-.648.324-1.188l8.892-14.796v-4.752h-1.62l-8.172 12.276q-1.044 1.548-2.88 1.548-1.44 0-2.448-1.008t-1.008-2.448q0-1.044.576-1.908l9.216-13.824q2.628-3.852 6.336-3.852h13.824q3.708 0 6.336 3.852l9.216 13.824q.576.864.576 1.908zm-14.976-28.8q0 3.348-2.358 5.706t-5.706 2.358-5.706-2.358-2.358-5.706 2.358-5.706 5.706-2.358 5.706 2.358 2.358 5.706z","MALE":"M36.864-39.095v14.976q0 1.44-1.008 2.448t-2.448 1.008-2.448-1.008-1.008-2.448v-12.672h-2.304v32.832q0 1.656-1.188 2.844t-2.844 1.188-2.844-1.188-1.188-2.844v-16.704h-2.304v16.704q0 1.656-1.188 2.844t-2.844 1.188-2.844-1.188-1.188-2.844v-32.832h-2.304v12.672q0 1.44-1.008 2.448t-2.448 1.008-2.448-1.008-1.008-2.448v-14.976q0-2.88 2.016-4.896t4.896-2.016h23.04q2.88 0 4.896 2.016t2.016 4.896zm-10.368-16.128q0 3.348-2.358 5.706t-5.706 2.358-5.706-2.358-2.358-5.706 2.358-5.706 5.706-2.358 5.706 2.358 2.358 5.706z","GRATIPAY":"M27.828-17.567l12.6-17.028q.576-.792.882-2.124t-.216-3.06-2.214-2.844q-1.44-.936-2.988-.918t-2.646.63-1.962 1.62q-1.296 1.44-3.456 1.44-2.124 0-3.42-1.44-.864-1.008-1.962-1.62t-2.646-.63-3.024.918q-1.656 1.116-2.178 2.844t-.216 3.06.882 2.124zm27.468-14.616q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","SUN_O":"M52.992-32.183q0-4.212-1.638-8.046t-4.428-6.624-6.624-4.428-8.046-1.638-8.046 1.638-6.624 4.428-4.428 6.624-1.638 8.046 1.638 8.046 4.428 6.624 6.624 4.428 8.046 1.638 8.046-1.638 6.624-4.428 4.428-6.624 1.638-8.046zm9.936 9.972q-.144.54-.72.72l-10.512 3.456v11.016q0 .576-.468.936-.54.36-1.044.144l-10.512-3.384-6.48 8.928q-.36.468-.936.468t-.936-.468l-6.48-8.928-10.512 3.384q-.504.216-1.044-.144-.468-.36-.468-.936v-11.016l-10.512-3.456q-.576-.18-.72-.72-.18-.612.144-1.044l6.48-8.928-6.48-8.928q-.324-.468-.144-1.044.144-.54.72-.72l10.512-3.456v-11.016q0-.576.468-.936.54-.36 1.044-.144l10.512 3.384 6.48-8.928q.324-.432.936-.432t.936.432l6.48 8.928 10.512-3.384q.504-.216 1.044.144.468.36.468.936v11.016l10.512 3.456q.576.18.72.72.18.576-.144 1.044l-6.48 8.928 6.48 8.928q.324.432.144 1.044z","MOON_O":"M45.432-17.531q-1.944.324-3.96.324-6.552 0-12.132-3.24t-8.82-8.82-3.24-12.132q0-6.912 3.744-12.852-7.236 2.16-11.826 8.244t-4.59 13.824q0 4.68 1.836 8.946t4.914 7.344 7.344 4.914 8.946 1.836q5.184 0 9.846-2.214t7.938-6.174zm7.308-3.06q-3.384 7.308-10.206 11.682t-14.886 4.374q-5.616 0-10.728-2.196t-8.82-5.904-5.904-8.82-2.196-10.728q0-5.508 2.07-10.53t5.616-8.694 8.478-5.922 10.44-2.466q1.584-.072 2.196 1.404.648 1.476-.54 2.592-3.096 2.808-4.734 6.534t-1.638 7.866q0 5.328 2.628 9.828t7.128 7.128 9.828 2.628q4.248 0 8.208-1.836 1.476-.648 2.592.468.504.504.63 1.224t-.162 1.368z","ARCHIVE":"M39.168-34.487q0-.936-.684-1.62t-1.62-.684h-9.216q-.936 0-1.62.684t-.684 1.62.684 1.62 1.62.684h9.216q.936 0 1.62-.684t.684-1.62zm20.736-6.912v34.56q0 .936-.684 1.62t-1.62.684h-50.688q-.936 0-1.62-.684t-.684-1.62v-34.56q0-.936.684-1.62t1.62-.684h50.688q.936 0 1.62.684t.684 1.62zm2.304-16.128v9.216q0 .936-.684 1.62t-1.62.684h-55.296q-.936 0-1.62-.684t-.684-1.62v-9.216q0-.936.684-1.62t1.62-.684h55.296q.936 0 1.62.684t.684 1.62z","BUG":"M58.752-29.879q0 .936-.684 1.62t-1.62.684h-8.064q0 6.156-2.412 10.44l7.488 7.524q.684.684.684 1.62t-.684 1.62q-.648.684-1.62.684t-1.62-.684l-7.128-7.092q-.18.18-.54.468t-1.512 1.026-2.34 1.314-2.952 1.044-3.492.468v-32.256h-4.608v32.256q-1.836 0-3.654-.486t-3.132-1.188-2.376-1.404-1.566-1.17l-.54-.504-6.588 7.452q-.72.756-1.728.756-.864 0-1.548-.576-.684-.648-.738-1.602t.558-1.674l7.272-8.172q-2.088-4.104-2.088-9.864h-8.064q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h8.064v-10.584l-6.228-6.228q-.684-.684-.684-1.62t.684-1.62 1.62-.684 1.62.684l6.228 6.228h30.384l6.228-6.228q.684-.684 1.62-.684t1.62.684.684 1.62-.684 1.62l-6.228 6.228v10.584h8.064q.936 0 1.62.684t.684 1.62zm-17.28-20.736h-23.04q0-4.788 3.366-8.154t8.154-3.366 8.154 3.366 3.366 8.154z","VK":"M69.012-45.719q.828 2.304-5.4 10.584-.864 1.152-2.34 3.06-2.808 3.6-3.24 4.716-.612 1.476.504 2.916.612.756 2.916 2.952h.036l.036.036.036.036.072.072q5.076 4.716 6.876 7.956.108.18.234.45t.252.954-.018 1.224-.9.99-2.124.45l-9.216.144q-.864.18-2.016-.18t-1.872-.792l-.72-.432q-1.08-.756-2.52-2.304t-2.466-2.79-2.196-2.088-2.034-.558q-.108.036-.288.126t-.612.522-.774 1.062-.612 1.872-.234 2.79q0 .54-.126.99t-.27.666l-.144.18q-.648.684-1.908.792h-4.14q-2.556.144-5.256-.594t-4.734-1.908-3.708-2.376-2.538-2.07l-.9-.864q-.36-.36-.99-1.08t-2.574-3.276-3.816-5.436-4.41-7.596-4.698-9.792q-.216-.576-.216-.972t.108-.576l.144-.216q.54-.684 2.052-.684l9.864-.072q.432.072.828.234t.576.306l.18.108q.576.396.864 1.152.72 1.8 1.656 3.726t1.476 2.934l.576 1.044q1.044 2.16 2.016 3.744t1.746 2.466 1.494 1.386 1.224.504.972-.18q.072-.036.18-.18t.432-.792.486-1.692.342-2.916 0-4.5q-.072-1.44-.324-2.628t-.504-1.656l-.216-.432q-.9-1.224-3.06-1.548-.468-.072.18-.864.612-.684 1.368-1.08 1.908-.936 8.604-.864 2.952.036 4.86.468.72.18 1.206.486t.738.864.378 1.152.126 1.638-.036 1.98-.09 2.538-.054 2.97q0 .396-.036 1.512t-.018 1.728.126 1.458.414 1.404.81.882q.288.072.612.144t.936-.396 1.368-1.242 1.872-2.412 2.448-3.87q2.16-3.744 3.852-8.1.144-.36.36-.63t.396-.378l.144-.108.18-.09.468-.108.72-.018 10.368-.072q1.404-.18 2.304.09t1.116.594z","WEIBO":"M24.3-18.215q.756-1.224.396-2.484t-1.62-1.8q-1.224-.504-2.628-.036t-2.16 1.656q-.792 1.224-.468 2.466t1.548 1.818 2.682.09 2.25-1.71zm3.384-4.356q.288-.468.126-.954t-.63-.666q-.504-.18-1.026.018t-.774.666q-.612 1.116.468 1.62.504.18 1.044-.018t.792-.666zm6.264 3.852q-1.62 3.672-5.688 5.4t-8.064.432q-3.852-1.224-5.31-4.554t.234-6.75q1.692-3.348 5.454-5.004t7.578-.684q3.996 1.044 5.706 4.302t.09 6.858zm11.232-5.76q-.324-3.456-3.204-6.12t-7.506-3.924-9.882-.756q-8.028.828-13.302 5.094t-4.77 9.522q.324 3.456 3.204 6.12t7.506 3.924 9.882.756q8.028-.828 13.302-5.094t4.77-9.522zm11.088.144q0 2.448-1.332 5.022t-3.924 4.932-6.066 4.23-8.136 2.988-9.738 1.116-9.9-1.206-8.658-3.348-6.174-5.436-2.34-7.182q0-4.14 2.502-8.82t7.11-9.288q6.084-6.084 12.294-8.496t8.874.252q2.34 2.304.72 7.524-.144.504-.036.72t.36.252.522-.018.486-.126l.216-.072q5.004-2.124 8.856-2.124t5.508 2.196q1.62 2.268 0 6.408-.072.468-.162.72t.162.45.432.27.612.216q2.052.648 3.708 1.692t2.88 2.934 1.224 4.194zm-2.664-22.464q1.512 1.692 1.962 3.906t-.234 4.23q-.288.828-1.062 1.224t-1.602.144q-.828-.288-1.224-1.062t-.144-1.602q.72-2.268-.864-3.996t-3.852-1.26q-.864.18-1.62-.288t-.9-1.332q-.18-.864.288-1.602t1.332-.918q2.16-.468 4.284.198t3.636 2.358zm6.516-5.868q3.132 3.456 4.05 8.01t-.486 8.694q-.324.972-1.224 1.44t-1.872.144-1.44-1.224-.18-1.872q1.008-2.952.36-6.192t-2.88-5.688q-2.232-2.484-5.328-3.438t-6.228-.306q-1.008.216-1.872-.342t-1.08-1.566.342-1.854 1.566-1.062q4.428-.936 8.784.414t7.488 4.842z","RENREN":"M40.788-7.919q-6.156 3.384-13.248 3.384-7.056 0-13.212-3.384 4.968-3.132 8.478-7.596t4.734-9.648q1.26 5.184 4.77 9.648t8.478 7.596zm-17.82-51.408v17.46q0 9.072-4.554 16.542t-11.898 11.034q-6.516-7.74-6.516-17.82 0-6.732 3.006-12.582t8.262-9.702 11.7-4.932zm32.328 27.216q0 10.08-6.516 17.82-7.344-3.564-11.898-11.034t-4.554-16.542v-17.46q6.444 1.08 11.7 4.932t8.262 9.702 3.006 12.582z","PAGELINES":"M50.472-24.731q-1.152 2.88-2.736 4.968t-3.276 3.186-3.564 1.674-3.654.522-3.474-.306-3.114-.792-2.502-.99-1.656-.81l-.612-.36q-4.068 8.208-10.422 12.942t-13.842 4.77q-.684 0-1.152-.468t-.468-1.152.468-1.134 1.152-.45q6.228-.036 11.61-3.87t9.054-10.602q-1.296.504-2.592.828t-2.988.468-3.276-.09-3.348-1.026-3.312-2.124-3.042-3.6-2.682-5.256q4.104-1.692 7.704-2.052t6.03.27 4.482 2.034 3.186 2.772 2.034 2.952q1.908-4.716 2.844-10.476-.252.036-.648.09t-1.674.09-2.502-.018-2.934-.36-3.186-.828-3.024-1.53-2.7-2.34-1.962-3.402-1.026-4.59q2.52-1.008 4.806-1.314t4.05.036 3.312 1.08 2.646 1.8 2.016 2.196 1.512 2.268.99 2.016.576 1.422l.144.576q.432-4.392.432-7.02-.288-.216-.774-.576t-1.764-1.602-2.286-2.574-1.944-3.348-1.188-4.05.432-4.572 2.52-4.986q2.628.9 4.59 2.214t3.042 2.754 1.728 3.06.738 3.204-.018 3.078-.468 2.754-.684 2.232-.612 1.512l-.252.54q.036.18.036 1.818t-.036 2.574q.108-.252.36-.666t1.098-1.548 1.818-2.088 2.556-1.998 3.294-1.602 4.032-.522 4.77.864q-.072 2.808-.774 5.094t-1.8 3.762-2.502 2.574-2.934 1.638-3.042.864-2.88.342-2.43-.036-1.674-.162l-.612-.108q-.828 5.292-2.628 10.188.216-.252.648-.666t1.782-1.476 2.79-1.89 3.582-1.512 4.23-.72 4.644.846 4.932 2.79z","STACK_EXCHANGE":"M45.324-19.331v2.376q0 3.06-2.07 5.202t-4.986 2.142h-2.052l-9.36 9.684v-9.684h-19.044q-2.916 0-4.986-2.142t-2.07-5.202v-2.376h44.568zm0-11.736v9.18h-44.568v-9.18h44.568zm0-11.808v9.18h-44.568v-9.18h44.568zm0-5.04v2.412h-44.568v-2.412q0-3.024 2.07-5.166t4.986-2.142h30.456q2.916 0 4.986 2.142t2.07 5.166z","ARROW_CIRCLE_O_RIGHT":"M41.472-32.183q0 .504-.324.828l-11.52 11.52q-.324.324-.828.324-.468 0-.81-.342t-.342-.81v-6.912h-12.672q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h12.672v-6.912q0-.504.324-.828t.828-.324q.432 0 .864.36l11.484 11.484q.324.324.324.828zm5.76 0q0-5.328-2.628-9.828t-7.128-7.128-9.828-2.628-9.828 2.628-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828zm8.064 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","ARROW_CIRCLE_O_LEFT":"M41.472-35.639v6.912q0 .468-.342.81t-.81.342h-12.672v6.912q0 .504-.324.828t-.828.324q-.432 0-.864-.36l-11.484-11.484q-.324-.324-.324-.828t.324-.828l11.52-11.52q.324-.324.828-.324.468 0 .81.342t.342.81v6.912h12.672q.468 0 .81.342t.342.81zm5.76 3.456q0-5.328-2.628-9.828t-7.128-7.128-9.828-2.628-9.828 2.628-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828zm8.064 0q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","TOGGLE_LEFT":"M36.864-43.703v23.04q0 .936-.684 1.62t-1.62.684q-.72 0-1.332-.432l-16.128-11.52q-.972-.684-.972-1.872t.972-1.872l16.128-11.52q.612-.432 1.332-.432.936 0 1.62.684t.684 1.62zm9.216 28.8v-34.56q0-.468-.342-.81t-.81-.342h-34.56q-.468 0-.81.342t-.342.81v34.56q0 .468.342.81t.81.342h34.56q.468 0 .81-.342t.342-.81zm9.216-34.56v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","DOT_CIRCLE_O":"M36.864-32.183q0 3.816-2.7 6.516t-6.516 2.7-6.516-2.7-2.7-6.516 2.7-6.516 6.516-2.7 6.516 2.7 2.7 6.516zm-9.216-19.584q-5.328 0-9.828 2.628t-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628 9.828-2.628 7.128-7.128 2.628-9.828-2.628-9.828-7.128-7.128-9.828-2.628zm27.648 19.584q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","WHEELCHAIR":"M36.828-21.707l3.672 7.344q-2.088 6.444-7.56 10.44t-12.204 3.996q-5.616 0-10.386-2.79t-7.56-7.56-2.79-10.386q0-6.516 3.762-11.88t9.882-7.596l.612 4.716q-4.392 1.944-7.02 5.958t-2.628 8.802q0 6.66 4.734 11.394t11.394 4.734q4.536 0 8.37-2.34t5.94-6.318 1.782-8.514zm19.728 3.6l2.088 4.104-9.216 4.608q-.468.252-1.044.252-1.44 0-2.052-1.26l-8.604-17.172h-16.992q-.864 0-1.53-.594t-.774-1.458l-3.456-28.044q-.072-.576.216-1.512.504-1.836 2.052-2.97t3.492-1.134q2.376 0 4.068 1.692t1.692 4.068q0 2.484-1.872 4.23t-4.32 1.494l1.332 10.404h15.228v4.608h-14.652l.576 4.608h16.38q1.44 0 2.052 1.26l8.208 16.38z","VIMEO_SQUARE":"M46.512-41.471q.36-7.776-5.796-7.992-8.316-.288-11.232 9.396 1.584-.684 2.952-.684 3.06 0 2.664 3.456-.144 2.052-2.664 6.012t-3.78 3.96q-1.548 0-2.952-6.084-.468-1.944-1.62-9.18-1.08-6.804-5.76-6.372-2.124.252-5.904 3.6l-2.916 2.592-2.916 2.592 1.872 2.412q2.736-1.872 3.132-1.872 2.052 0 3.852 6.444.54 1.98 1.62 5.922t1.62 5.922q2.448 6.444 5.904 6.444 5.652 0 13.788-10.584 7.92-10.188 8.136-15.984zm8.784-7.992v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","TURKISH_LIRA":"M41.472-34.487q0 6.876-3.402 12.708t-9.234 9.234-12.708 3.402h-5.76q-.504 0-.828-.324t-.324-.828v-21.996l-7.74 2.376q-.108.036-.324.036-.36 0-.684-.216-.468-.36-.468-.936v-4.608q0-.828.828-1.116l8.388-2.556v-3.348l-7.74 2.376q-.108.036-.324.036-.36 0-.684-.216-.468-.36-.468-.936v-4.608q0-.828.828-1.116l8.388-2.556v-9q0-.504.324-.828t.828-.324h5.76q.504 0 .828.324t.324.828v6.516l13.5-4.176q.54-.18 1.008.18t.468.936v4.608q0 .828-.828 1.116l-14.148 4.356v3.348l13.5-4.176q.54-.18 1.008.18t.468.936v4.608q0 .828-.828 1.116l-14.148 4.356v17.532q6.768-.468 11.448-5.436t4.68-11.808q0-.504.324-.828t.828-.324h5.76q.504 0 .828.324t.324.828z","PLUS_SQUARE_O":"M41.472-35.639v2.304q0 .504-.324.828t-.828.324h-12.672v12.672q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-12.672h-12.672q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h12.672v-12.672q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828v12.672h12.672q.504 0 .828.324t.324.828zm4.608 16.128v-29.952q0-2.376-1.692-4.068t-4.068-1.692h-29.952q-2.376 0-4.068 1.692t-1.692 4.068v29.952q0 2.376 1.692 4.068t4.068 1.692h29.952q2.376 0 4.068-1.692t1.692-4.068zm4.608-29.952v29.952q0 4.284-3.042 7.326t-7.326 3.042h-29.952q-4.284 0-7.326-3.042t-3.042-7.326v-29.952q0-4.284 3.042-7.326t7.326-3.042h29.952q4.284 0 7.326 3.042t3.042 7.326z","SPACE_SHUTTLE":"M22.32-24.119q-3.96 2.304-9.648 2.304h-4.608v-2.304h-2.304q-.468 0-.81-.846t-.342-2.034q0-.864.252-1.764-2.088-.072-3.474-.378t-1.386-.738 1.386-.738 3.474-.378q-.252-.9-.252-1.764 0-1.188.342-2.034t.81-.846h2.304v-2.304h4.608q5.688 0 9.648 2.304h40.068q1.512.252 3.834.648t2.898.504q3.204.54 5.4 1.458t3.006 1.71.81 1.44-.81 1.44-3.006 1.71-5.4 1.458q-.576.108-2.898.504t-3.834.648h-40.068zm40.284-9.072q1.908 1.296 1.908 3.312t-1.908 3.312l2.916 1.08q2.448-1.728 2.448-4.392t-2.448-4.392zm-40.104 9.648h36.54q-7.812 1.368-16.416 2.88-2.052 0-4.068.864t-2.988 1.728l-1.008.864-10.368 10.368q-.936.936-2.538 1.62t-3.222.684h-3.456l-3.348-16.704h1.044q5.652 0 9.828-2.304zm-9.828-14.976h-1.044l3.348-16.704h3.456q1.656 0 3.24.684t2.52 1.62l10.368 10.368q.144.144.396.378t1.098.828 1.746 1.044 2.214.828 2.61.378l16.416 2.88h-36.54q-4.176-2.304-9.828-2.304z","SLACK":"M54.684-36.503q2.232 0 3.726 1.458t1.494 3.654q0 3.492-3.348 4.68l-6.192 2.124 2.016 6.012q.252.756.252 1.692 0 2.124-1.512 3.672t-3.636 1.548q-1.692 0-3.078-.972t-1.926-2.592l-1.98-5.94-11.16 3.816 1.98 5.904q.288.864.288 1.692 0 2.124-1.512 3.672t-3.672 1.548q-1.692 0-3.06-.972t-1.908-2.592l-1.98-5.868-5.508 1.908q-1.044.324-1.8.324-2.196 0-3.654-1.44t-1.458-3.636q0-1.692.99-3.06t2.574-1.908l5.616-1.908-3.78-11.268-5.616 1.944q-.936.288-1.728.288-2.16 0-3.636-1.458t-1.476-3.618q0-1.692.99-3.06t2.574-1.908l5.652-1.908-1.908-5.724q-.288-.864-.288-1.692 0-2.16 1.512-3.69t3.672-1.53q1.692 0 3.06.972t1.908 2.592l1.944 5.76 11.16-3.78-1.944-5.76q-.288-.864-.288-1.692 0-2.124 1.53-3.672t3.654-1.548q1.692 0 3.078.99t1.926 2.574l1.908 5.796 5.832-1.98q.756-.216 1.548-.216 2.16 0 3.69 1.422t1.53 3.546q0 1.62-1.08 2.934t-2.664 1.854l-5.652 1.944 3.78 11.376 5.904-2.016q.864-.288 1.656-.288zm-28.584 9.432l11.16-3.78-3.78-11.34-11.16 3.852z","ENVELOPE_SQUARE":"M44.928-59.831q4.284 0 7.326 3.042t3.042 7.326v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56zm1.152 38.016v-15.696q-1.116 1.26-2.304 1.98-1.224.792-4.77 3.06t-5.454 3.564q-3.528 2.484-5.904 2.484t-5.904-2.484q-1.656-1.152-5.094-3.33t-5.13-3.33q-.432-.288-1.188-.972t-1.116-.972v15.696q0 1.44 1.008 2.448t2.448 1.008h29.952q1.44 0 2.448-1.008t1.008-2.448zm0-20.628q0-1.476-.99-2.52t-2.466-1.044h-29.952q-1.44 0-2.448 1.008t-1.008 2.448q0 1.332 1.098 2.754t2.43 2.322q1.692 1.152 4.95 3.204t4.662 2.988l.612.414.756.504.756.468.846.468.774.342.81.27.738.09.738-.09.81-.27.774-.342.846-.468.756-.468.756-.504.612-.414 9.612-6.264q1.26-.828 2.394-2.25t1.134-2.646z","WORDPRESS":"M4.572-32.183q0-5.868 2.412-11.268l13.212 36.18q-7.056-3.42-11.34-10.116t-4.284-14.796zm46.368-1.404q0 .684-.09 1.386t-.36 1.782-.414 1.584-.63 2.124-.63 2.088l-2.736 9.216-10.008-29.736q1.656-.108 3.168-.288.684-.072.936-.666t-.09-1.116-1.026-.486l-7.38.36q-2.7-.036-7.272-.36-.432-.036-.738.18t-.414.54-.054.666.324.594.702.288l2.88.288 4.32 11.808-6.048 18.144-10.08-29.952q1.656-.108 3.168-.288.684-.072.936-.666t-.09-1.116-1.026-.486l-7.38.36-.828-.018-.936-.018q3.78-5.76 9.882-9.126t13.23-3.366q5.292 0 10.098 1.908t8.586 5.364h-.36q-1.98 0-3.312 1.458t-1.332 3.438q0 .432.072.864t.144.774.288.828.324.756.432.81.45.756.522.864.504.828q2.268 3.852 2.268 7.632zm-18.216 3.816l8.532 23.292q.036.216.18.396-4.536 1.584-9.18 1.584-4.032 0-7.812-1.152zm23.796-15.696q3.42 6.264 3.42 13.284 0 7.524-3.744 13.878t-10.044 10.026l8.46-24.408q2.124-6.084 2.124-9.936 0-1.512-.216-2.844zm-24.264-18.972q6.552 0 12.528 2.556t10.296 6.876 6.876 10.296 2.556 12.528-2.556 12.528-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556zm0 63.036q6.228 0 11.934-2.448t9.828-6.57 6.57-9.828 2.448-11.934-2.448-11.934-6.57-9.828-9.828-6.57-11.934-2.448-11.934 2.448-9.828 6.57-6.57 9.828-2.448 11.934 2.448 11.934 6.57 9.828 9.828 6.57 11.934 2.448z","OPENID":"M39.096-64.439v55.296l-9.792 4.608q-8.208-.72-14.904-3.672t-10.548-7.506-3.852-9.81q0-5.04 3.618-9.486t9.9-7.398 14.094-3.888v6.192q-7.812 1.368-12.834 5.4t-5.022 9.18q0 5.472 5.562 9.612t13.986 5.22v-48.96zm24.084 20.952l1.332 14.04-18.9-4.104 5.292-2.988q-4.284-2.52-10.08-3.564v-6.192q9.972 1.188 17.316 5.652z","UNIVERSITY":"M34.56-64.439l34.56 13.824v4.608h-4.608q0 .936-.738 1.62t-1.746.684h-54.936q-1.008 0-1.746-.684t-.738-1.62h-4.608v-4.608zm-25.344 23.04h9.216v27.648h4.608v-27.648h9.216v27.648h4.608v-27.648h9.216v27.648h4.608v-27.648h9.216v27.648h2.124q1.008 0 1.746.684t.738 1.62v2.304h-59.904v-2.304q0-.936.738-1.62t1.746-.684h2.124v-27.648zm57.42 34.56q1.008 0 1.746.684t.738 1.62v4.608h-69.12v-4.608q0-.936.738-1.62t1.746-.684h64.152z","MORTAR_BOARD":"M63.864-34.343l.648 11.376q.144 2.484-2.952 4.608t-8.46 3.366-11.628 1.242-11.628-1.242-8.46-3.366-2.952-4.608l.648-11.376 20.664 6.516q.792.252 1.728.252t1.728-.252zm19.08-11.664q0 .828-.792 1.116l-40.32 12.672q-.144.036-.36.036t-.36-.036l-23.472-7.416q-1.548 1.224-2.556 4.014t-1.224 6.426q2.268 1.296 2.268 3.924 0 2.484-2.088 3.852l2.088 15.588q.072.504-.288.9-.324.396-.864.396h-6.912q-.54 0-.864-.396-.36-.396-.288-.9l2.088-15.588q-2.088-1.368-2.088-3.852 0-2.628 2.34-3.996.396-7.452 3.528-11.88l-11.988-3.744q-.792-.288-.792-1.116t.792-1.116l40.32-12.672q.144-.036.36-.036t.36.036l40.32 12.672q.792.288.792 1.116z","YAHOO":"M30.924-29.987l.468 25.452q-2.232-.396-3.78-.396-1.476 0-3.78.396l.468-25.452q-1.44-2.484-6.066-10.638t-7.794-13.482-6.516-10.332q2.088.54 3.888.54 1.548 0 3.996-.54 2.268 3.996 4.806 8.262t6.012 9.954 4.986 8.172q1.332-2.196 3.942-6.39t4.23-6.84 3.78-6.336 3.852-6.822q1.944.504 3.852.504 2.016 0 4.104-.504-1.008 1.404-2.16 3.186t-1.782 2.826-2.034 3.456-1.764 3.024q-5.256 8.928-12.708 21.96z","GOOGLE":"M27.648-36.143h26.1q.432 2.412.432 4.608 0 7.812-3.276 13.95t-9.342 9.594-13.914 3.456q-5.652 0-10.764-2.178t-8.82-5.886-5.886-8.82-2.178-10.764 2.178-10.764 5.886-8.82 8.82-5.886 10.764-2.178q10.8 0 18.54 7.236l-7.524 7.236q-4.428-4.284-11.016-4.284-4.644 0-8.586 2.34t-6.246 6.354-2.304 8.766 2.304 8.766 6.246 6.354 8.586 2.34q3.132 0 5.76-.864t4.32-2.16 2.952-2.952 1.854-3.132.81-2.808h-15.696v-9.504z","REDDIT":"M39.42-22.427q.576.576 0 1.116-2.232 2.232-7.164 2.232t-7.164-2.232q-.576-.54 0-1.116.216-.216.54-.216t.54.216q1.728 1.764 6.084 1.764 4.32 0 6.084-1.764.216-.216.54-.216t.54.216zm-11.052-6.516q0 1.332-.936 2.268t-2.268.936-2.286-.936-.954-2.268q0-1.368.954-2.304t2.286-.936 2.268.954.936 2.286zm14.22 0q0 1.332-.954 2.268t-2.286.936-2.268-.936-.936-2.268.936-2.286 2.268-.954 2.286.936.954 2.304zm9.036-4.32q0-1.764-1.26-3.024t-3.06-1.26-3.096 1.296q-4.68-3.24-11.196-3.456l2.268-10.188 7.2 1.62q0 1.332.936 2.268t2.268.936 2.286-.954.954-2.286-.954-2.286-2.286-.954q-1.944 0-2.88 1.8l-7.956-1.764q-.684-.18-.9.576l-2.484 11.232q-6.48.252-11.124 3.492-1.26-1.332-3.132-1.332-1.8 0-3.06 1.26t-1.26 3.024q0 1.26.666 2.304t1.782 1.584q-.216.972-.216 2.016 0 5.112 5.04 8.748t12.132 3.636q7.128 0 12.168-3.636t5.04-8.748q0-1.152-.252-2.052 1.08-.54 1.728-1.566t.648-2.286zm12.888 1.08q0 6.552-2.556 12.528t-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556 12.528 2.556 10.296 6.876 6.876 10.296 2.556 12.528z","REDDIT_SQUARE":"M33.804-23.795q.468.468 0 .936-1.908 1.908-6.156 1.908t-6.156-1.908q-.468-.468 0-.936.18-.216.468-.216t.468.216q1.512 1.512 5.22 1.512t5.22-1.512q.18-.216.468-.216t.468.216zm-9.468-5.616q0 1.116-.828 1.944t-1.944.828-1.944-.828-.828-1.944q0-1.152.81-1.962t1.962-.81 1.962.81.81 1.962zm12.168 0q0 1.116-.828 1.944t-1.944.828-1.944-.828-.828-1.944q0-1.152.81-1.962t1.962-.81 1.962.81.81 1.962zm7.74-3.708q0-1.512-1.08-2.592t-2.628-1.08q-1.512 0-2.628 1.116-4.068-2.808-9.612-2.952l1.944-8.748 6.156 1.404q.036 1.152.846 1.944t1.926.792q1.152 0 1.962-.81t.81-1.962-.81-1.962-1.962-.81q-1.728 0-2.484 1.548l-6.804-1.512q-.612-.18-.756.468l-2.16 9.648q-5.544.216-9.54 2.988-1.08-1.152-2.664-1.152-1.548 0-2.628 1.08t-1.08 2.592q0 1.08.576 1.98t1.512 1.368q-.18.9-.18 1.728 0 4.392 4.32 7.506t10.404 3.114q6.12 0 10.44-3.114t4.32-7.506q0-.9-.216-1.764.9-.468 1.458-1.35t.558-1.962zm11.052-16.344v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","STUMBLEUPON_CIRCLE":"M31.176-34.235l3.24-.972v-2.232q0-2.844-2.088-4.86t-4.968-2.016-4.968 1.998-2.088 4.842v10.188q0 .72-.504 1.206t-1.188.486-1.17-.486-.486-1.206v-4.32h-5.436v4.392q0 2.952 2.07 5.004t5.022 2.052q2.916 0 4.986-2.034t2.07-4.914v-10.08q0-.684.486-1.188t1.206-.504q.684 0 1.17.504t.486 1.188v1.944zm11.988 7.02v-4.392h-5.4v4.536q0 .72-.486 1.206t-1.206.486q-.684 0-1.17-.504t-.486-1.188v-4.428l-3.24.936-2.16-1.008v4.428q0 2.88 2.088 4.932t5.004 2.052 4.986-2.052 2.07-5.004zm12.132-4.968q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","STUMBLEUPON":"M38.232-38.807v-4.248q0-1.512-1.08-2.592t-2.592-1.08-2.592 1.08-1.08 2.592v22.032q0 6.3-4.536 10.764t-10.908 4.464q-6.408 0-10.926-4.518t-4.518-10.926v-9.576h11.808v9.432q0 1.548 1.08 2.61t2.592 1.062 2.592-1.062 1.08-2.61v-22.32q0-6.156 4.554-10.512t10.854-4.356q6.336 0 10.872 4.392t4.536 10.584v4.896l-7.02 2.088zm19.08 7.992h11.808v9.576q0 6.408-4.518 10.926t-10.926 4.518q-6.372 0-10.908-4.482t-4.536-10.818v-9.648l4.716 2.196 7.02-2.088v9.72q0 1.512 1.08 2.574t2.592 1.062 2.592-1.062 1.08-2.574v-9.9z","DELICIOUS":"M52.992-14.903v-17.28h-25.344v-25.344h-17.28q-3.348 0-5.706 2.358t-2.358 5.706v17.28h25.344v25.344h17.28q3.348 0 5.706-2.358t2.358-5.706zm2.304-34.56v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","DIGG":"M11.808-54.287h7.344v35.388h-19.152v-25.092h11.808v-10.296zm0 29.484v-13.284h-4.428v13.284h4.428zm10.296-19.188v25.092h7.38v-25.092h-7.38zm0-10.296v7.344h7.38v-7.344h-7.38zm10.332 10.296h19.188v33.912h-19.188v-5.868h11.808v-2.952h-11.808v-25.092zm11.808 19.188v-13.284h-4.428v13.284h4.428zm10.332-19.188h19.152v33.912h-19.152v-5.868h11.772v-2.952h-11.772v-25.092zm11.772 19.188v-13.284h-4.428v13.284h4.428z","PIED_PIPER":"M37.656-27.719q0 2.304-1.368 3.924t-3.276 1.62q-1.548 0-2.52-.54v-9.972q1.008-.612 2.52-.612 1.908 0 3.276 1.638t1.368 3.942zm-12.348-15.408q0 2.304-1.368 3.942t-3.276 1.638q-1.548 0-2.52-.54v-9.972q1.008-.612 2.52-.612 1.908 0 3.276 1.62t1.368 3.924zm20.232 15.516q0-4.824-3.168-8.244t-7.668-3.42q-.72 0-1.404.108-.828 2.808-2.808 4.896-3.132 3.42-7.596 3.636v22.896l7.596-1.476v-7.416q1.836.684 4.212.684 4.5 0 7.668-3.42t3.168-8.244zm-12.348-15.372q0-4.824-3.186-8.244t-7.686-3.42q-2.664 0-5.076 1.296h-6.696v30.24l7.596-1.476v-7.416q1.98.684 4.176.684 4.5 0 7.686-3.42t3.186-8.244zm22.104-6.48v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","PIED_PIPER_ALT":"M43.992-30.995q2.7-.108 5.166.738t4.248 2.106 3.636 3.402 3.024 3.888 2.718 4.338q1.188 2.016 2.826 3.924t2.718 2.898 3.564 3.186q-1.728 1.08-3.906 2.07t-4.986 2.124-4.104 1.71q-1.584-1.332-2.664-4.14t-1.566-5.922-1.188-6.498-1.53-6.066-2.61-4.428-4.41-1.746l-.36.072-.216.144q.144.18.468.504.216.18 1.008.846t.918.792.684.648.648.738.414.756.378.99.162 1.116.144 1.458l.036 1.188q.036.936-.09 2.07t-.27 1.872-.45 2.106-.414 1.908q-1.26-.036-3.636.342t-3.528.378q-1.404 0-2.592-.36-.072-.576-.072-1.692 0-2.664.108-3.456.072-.468 1.134-1.494t2.052-2.124.954-1.854q-.864-.072-1.548.864-1.296 1.908-4.014 3.582t-4.914 1.674q-.9 0-2.718-2.268t-3.834-5.022-3.024-3.474q-.216-.144-.972-1.08-17.352 4.032-18.468 4.032-.576 0-1.008-.396t-.432-.972q0-.54.306-.954t.81-.522l17.496-3.816q-.288-.504-.288-.9t.198-.63.576-.414.72-.252.828-.162.666-.162q.144-.036.558-.27t.63-.234q.54 0 1.008.576t.72 1.188q5.868-1.332 6.192-1.332.612 0 1.062.396t.45 1.008q0 .54-.306.936t-.846.504l-6.552 1.44-.036.576q-.036.936 2.934 4.23t3.762 3.294q1.692 0 4.284-2.88t2.592-4.644q0-1.296-.846-1.908t-1.836-.666-1.836-.414-.846-1.224q0-.576.36-1.224l-2.448-.684q1.548-1.584 1.548-4.212 0-.936-.18-2.088 2.952-.576 5.184-.576 1.584 0 2.574.054t1.746.306 1.116.486.738.882.558 1.206.612 1.71.864 2.16l1.8-.9q-.108 1.44-.828 2.16t-1.53.756-1.44.234-.594.738zm2.16-8.46q-.18-.18-.486-.558t-.432-.522-.378-.414-.36-.378l-.288-.288-.306-.27-.288-.18-.306-.162q-.252-.108-.522-.18t-.738-.09-.792-.018h-2.52q-4.536 0-7.812 1.548.576-1.08 1.296-1.674t1.944-1.062 2.358-1.296 1.656-1.314 1.8-1.98 1.566-1.818q.432.324 1.008 1.134t1.152 1.314 1.368.468l.432-.036v2.736l.792.036q8.892-3.42 13.356-6.84 1.008-.756 1.8-1.404t1.53-1.35 1.188-1.116 1.062-1.224.864-1.116.882-1.332.828-1.368.972-1.71 1.062-1.908l.252-.324q-.072 1.908-1.548 5.004-2.844 5.94-7.38 9.504t-11.016 5.112q-.504.108-1.512.27t-1.8.342-1.404.504q.108.684.882 1.656t.774 1.224q0 .396-.936 1.08zm-7.956 33.156q1.404-.936 4.734-1.71t5.274-.774q.324 0 .81.558t1.008 1.53.936 1.8.864 1.836.522 1.188q-4.356 1.62-8.784 1.62-2.196 0-4.5-.396zm-8.604-23.292l1.728-.432 3.924 6.372-2.628 1.728zm18.036 18.612l.108.576q0 .252-.63.522t-1.656.468-1.944.342-1.926.27-1.152.162l-.252-1.548q.756-.072 2.178-.306t2.592-.36 2.178-.126h.504zm-16.452-22.608l-3.456.72-.216-.612q.36-.036 1.17-.252t1.242-.216q.684 0 1.26.36zm7.02 22.824h1.116l.36 2.988-1.476.432v-3.42zm32.004-53.64v0zm0 0l-.036.18-.072.072.036-.108zm0 0l.036-.036z","DRUPAL":"M42.012-7.343q-.18-.684-.864-.18-1.08.792-3.132 1.404t-4.716.612q-4.644 0-6.948-1.764-.18-.144-.468-.144-.396 0-.936.432-.252.216-.27.576t.27.72q1.224 1.152 3.15 1.656t3.69.45 3.564-.162q1.476-.144 3.042-.738t2.34-1.08 1.026-.738q.432-.432.252-1.044zm-1.404-4.14q-.684-1.692-1.404-2.196-.828-.54-2.736-.54-1.692 0-2.556.36-1.044.432-2.808 2.016-.936.864-.432 1.584.324.288.63.162t1.134-.846q.108-.072.378-.306t.378-.306.36-.252.414-.252.45-.18.54-.162.594-.09.738-.036q.972 0 1.602.27t.828.522.486.792q.36.612.45.72t.45-.036q.828-.432.504-1.224zm12.78-10.116q0-.792-.18-1.602t-.594-1.62-1.224-1.314-1.89-.504q-1.188 0-3.492 1.494t-4.644 3.006-3.636 1.512q-.972.036-2.286-.684t-2.736-1.764-3.006-2.088-3.6-1.764-3.996-.684q-4.14.036-7.092 2.826t-3.024 6.426q-.072 4.032 2.664 5.904 1.044.72 2.25 1.026t3.726.306q2.052 0 4.752-1.17t4.824-2.556 4.32-2.538 3.348-1.116q.936.036 2.34 1.134t2.574 2.412 2.448 2.43 1.998 1.152q1.26.108 2.106-.504t1.998-2.268q1.008-1.476 1.53-3.636t.522-3.816zm1.908-5.76q0 5.904-2.232 10.962t-5.976 8.496-8.73 5.382-10.458 1.944-10.548-2.07-8.91-5.652-6.138-8.694-2.304-10.872q0-3.204.702-6.21t1.764-5.238 2.538-4.266 2.826-3.384 2.826-2.502 2.322-1.674 1.53-.882q.504-.288 1.836-.954t1.962-1.026 1.728-1.08 2.178-1.584q1.296-1.008 2.088-2.61t1.08-4.518q4.644 5.58 6.696 6.948 1.584 1.044 4.68 2.448t4.644 2.376q.756.468 1.404.9t2.178 1.674 2.736 2.538 2.7 3.42 2.484 4.392 1.692 5.346.702 6.39z","JOOMLA":"M38.52-25.811l-5.76 5.76-5.436 5.472-1.08 1.08q-2.34 2.304-5.454 3.132t-6.174.072q-.576 2.52-2.592 4.14t-4.644 1.62q-3.06 0-5.22-2.178t-2.16-5.238q0-2.592 1.602-4.608t4.086-2.592q-.792-3.096.036-6.228t3.168-5.472l.432-.432 5.436 5.472-.396.396q-1.332 1.332-1.332 3.204t1.332 3.24q1.332 1.332 3.204 1.332t3.204-1.332l1.08-1.08 5.436-5.472 5.796-5.76zm-12.276-24.552l.432.432-5.472 5.472-.432-.432q-1.332-1.332-3.204-1.332t-3.204 1.332-1.332 3.222 1.332 3.222l1.044 1.044 5.472 5.472 5.76 5.76-5.436 5.472-5.796-5.76-5.436-5.472-1.08-1.08q-2.448-2.412-3.24-5.742t.18-6.462q-2.52-.54-4.14-2.556t-1.62-4.644q0-3.06 2.16-5.238t5.22-2.178q2.736 0 4.806 1.764t2.502 4.428q3.024-.72 6.102.126t5.382 3.15zm29.052 38.412q0 3.06-2.16 5.238t-5.22 2.178q-2.664 0-4.716-1.692t-2.556-4.248q-3.096 1.008-6.462.216t-5.814-3.24l-.396-.432 5.436-5.472.432.432q1.332 1.332 3.204 1.332t3.204-1.332 1.332-3.204-1.332-3.204l-1.08-1.08-5.472-5.472-5.76-5.76 5.472-5.472 5.76 5.76 5.472 5.472 1.044 1.08q2.304 2.304 3.15 5.418t.09 6.174q2.736.396 4.554 2.466t1.818 4.842zm-.072-40.464q0 2.772-1.836 4.86t-4.572 2.484q.936 3.06.108 6.354t-3.24 5.706l-.432.432-5.436-5.472.432-.432q1.332-1.332 1.332-3.204t-1.332-3.204-3.204-1.332-3.204 1.332l-1.08 1.08-5.472 5.472-5.76 5.76-5.472-5.472 5.796-5.76 5.472-5.472 1.044-1.08q2.412-2.412 5.724-3.222t6.408.126q.396-2.7 2.466-4.536t4.878-1.836q3.06 0 5.22 2.178t2.16 5.238z","LANGUAGE":"M23.544-25.631q-.036.108-.45-.018t-1.134-.414l-.72-.324q-1.584-.72-3.132-1.764-.252-.18-1.476-1.134t-1.368-1.026q-2.412 3.708-4.824 6.516-2.916 3.42-3.78 3.96-.144.072-.702.144t-.666 0q.216-.144 2.952-3.312.756-.864 3.078-4.14t2.826-4.248q.612-1.08 1.836-3.546t1.296-2.79q-.288-.036-3.96 1.188-.288.072-.99.27t-1.242.342-.612.18q-.072.072-.072.378t-.036.342q-.18.36-1.116.54-.828.252-1.692 0-.648-.144-1.008-.756-.144-.216-.18-.828.216-.072.882-.18t1.062-.216q2.088-.576 3.78-1.152 3.6-1.26 3.672-1.26.36-.072 1.548-.702t1.584-.774q.324-.108.774-.288t.522-.198.216.018q.072.432-.036 1.188 0 .072-.45.972t-.954 1.926-.612 1.206q-.9 1.8-2.772 4.716l2.304 1.008q.432.216 2.682 1.152t2.43 1.008q.144.036.378.918t.162 1.098zm-7.38-17.496q.108.54-.144 1.008-.432.828-1.8 1.368-1.08.432-2.16.432-.936-.108-1.764-.936-.504-.54-.648-1.476l.036-.108q.108.108.702.18t.954 0 2.088-.576q1.296-.432 1.98-.504.612 0 .756.612zm25.128 4.644l2.268 8.172-5.004-1.512zm-39.888 28.8l24.984-8.352v-37.152l-24.984 8.388v37.116zm44.676-11.412l3.672 1.116-6.516-23.652-3.6-1.116-7.776 19.296 3.672 1.116 1.62-3.96 7.596 2.34zm-18.108-34.632l20.628 6.624v-13.68zm11.196 47.628l5.688.468-1.944 5.76-1.44-2.376q-4.68 2.988-9.936 3.888-2.088.432-3.276.432h-3.024q-2.844 0-7.182-1.404t-6.606-3.06q-.288-.252-.288-.576 0-.288.18-.486t.468-.198q.144 0 .648.27t1.098.594.738.396q2.628 1.332 5.742 2.214t5.67.882q3.42 0 6.012-.522t5.652-1.818q.54-.252 1.098-.558t1.224-.684 1.026-.594zm16.128-38.844v38.844l-27.864-8.856q-.504.216-13.5 4.59t-13.248 4.374q-.468 0-.648-.468l-.036-.108v-38.808q.108-.324.144-.36.18-.216.72-.396 3.816-1.26 5.364-1.8v-13.824l20.088 7.128q.072 0 5.778-1.98t11.376-3.906 5.814-1.926q.72 0 .72.756v15.048z","FAX":"M10.368-50.615q2.376 0 4.068 1.692t1.692 4.068v39.168q0 2.376-1.692 4.068t-4.068 1.692h-4.608q-2.376 0-4.068-1.692t-1.692-4.068v-39.168q0-2.376 1.692-4.068t4.068-1.692h4.608zm49.536 5.868q2.088 1.224 3.348 3.348t1.26 4.608v27.648q0 3.816-2.7 6.516t-6.516 2.7h-31.104q-2.376 0-4.068-1.692t-1.692-4.068v-55.296q0-1.44 1.008-2.448t2.448-1.008h24.192q1.44 0 3.168.72t2.736 1.728l5.472 5.472q1.008 1.008 1.728 2.736t.72 3.168v5.868zm-26.496 35.604v-4.608q0-.504-.324-.828t-.828-.324h-4.608q-.504 0-.828.324t-.324.828v4.608q0 .504.324.828t.828.324h4.608q.504 0 .828-.324t.324-.828zm0-9.216v-4.608q0-.504-.324-.828t-.828-.324h-4.608q-.504 0-.828.324t-.324.828v4.608q0 .504.324.828t.828.324h4.608q.504 0 .828-.324t.324-.828zm0-9.216v-4.608q0-.504-.324-.828t-.828-.324h-4.608q-.504 0-.828.324t-.324.828v4.608q0 .504.324.828t.828.324h4.608q.504 0 .828-.324t.324-.828zm9.216 18.432v-4.608q0-.504-.324-.828t-.828-.324h-4.608q-.504 0-.828.324t-.324.828v4.608q0 .504.324.828t.828.324h4.608q.504 0 .828-.324t.324-.828zm0-9.216v-4.608q0-.504-.324-.828t-.828-.324h-4.608q-.504 0-.828.324t-.324.828v4.608q0 .504.324.828t.828.324h4.608q.504 0 .828-.324t.324-.828zm0-9.216v-4.608q0-.504-.324-.828t-.828-.324h-4.608q-.504 0-.828.324t-.324.828v4.608q0 .504.324.828t.828.324h4.608q.504 0 .828-.324t.324-.828zm9.216 18.432v-4.608q0-.504-.324-.828t-.828-.324h-4.608q-.504 0-.828.324t-.324.828v4.608q0 .504.324.828t.828.324h4.608q.504 0 .828-.324t.324-.828zm0-9.216v-4.608q0-.504-.324-.828t-.828-.324h-4.608q-.504 0-.828.324t-.324.828v4.608q0 .504.324.828t.828.324h4.608q.504 0 .828-.324t.324-.828zm0-9.216v-4.608q0-.504-.324-.828t-.828-.324h-4.608q-.504 0-.828.324t-.324.828v4.608q0 .504.324.828t.828.324h4.608q.504 0 .828-.324t.324-.828zm3.456-13.824v-9.216h-5.76q-1.44 0-2.448-1.008t-1.008-2.448v-5.76h-23.04v18.432h32.256z","BUILDING":"M48.384-64.439q.936 0 1.62.684t.684 1.62v59.904q0 .936-.684 1.62t-1.62.684h-46.08q-.936 0-1.62-.684t-.684-1.62v-59.904q0-.936.684-1.62t1.62-.684h46.08zm-29.952 10.368v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828zm0 9.216v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828zm0 9.216v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828zm0 9.216v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828zm-4.608 11.52v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm18.432 46.08v-6.912q0-.504-.324-.828t-.828-.324h-11.52q-.504 0-.828.324t-.324.828v6.912q0 .504.324.828t.828.324h11.52q.504 0 .828-.324t.324-.828zm0-18.432v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm9.216 36.864v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm0-9.216v-2.304q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v2.304q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828z","CHILD":"M42.768-44.711l-10.512 10.512v29.664q0 1.656-1.188 2.844t-2.844 1.188-2.844-1.188-1.188-2.844v-13.824h-2.304v13.824q0 1.656-1.188 2.844t-2.844 1.188-2.844-1.188-1.188-2.844v-29.664l-10.512-10.512q-1.008-1.008-1.008-2.448t1.008-2.448 2.448-1.008 2.448 1.008l8.208 8.208h13.248l8.208-8.208q1.008-1.008 2.448-1.008t2.448 1.008 1.008 2.448-1.008 2.448zm-11.664-5.904q0 3.348-2.358 5.706t-5.706 2.358-5.706-2.358-2.358-5.706 2.358-5.706 5.706-2.358 5.706 2.358 2.358 5.706z","PAW":"M28.08-47.447q0 2.16-.684 4.086t-2.268 3.33-3.78 1.404q-2.736 0-4.968-2.07t-3.312-4.878-1.08-5.436q0-2.16.684-4.086t2.268-3.33 3.78-1.404q2.772 0 4.986 2.07t3.294 4.86 1.08 5.454zm-12.312 17.388q0 2.88-1.512 5.004t-4.284 2.124q-2.736 0-5.094-1.998t-3.618-4.806-1.26-5.472q0-2.88 1.512-5.022t4.284-2.142q2.736 0 5.094 1.998t3.618 4.824 1.26 5.49zm14.184-.972q4.248 0 9.18 3.51t8.244 8.532 3.312 9.162q0 1.656-.612 2.754t-1.746 1.62-2.322.72-2.736.198q-2.448 0-6.75-1.62t-6.57-1.62q-2.376 0-6.93 1.602t-7.218 1.602q-6.588 0-6.588-5.256 0-3.096 2.016-6.894t5.022-6.93 6.75-5.256 6.948-2.124zm8.604-7.596q-2.196 0-3.78-1.404t-2.268-3.33-.684-4.086q0-2.664 1.08-5.454t3.294-4.86 4.986-2.07q2.196 0 3.78 1.404t2.268 3.33.684 4.086q0 2.628-1.08 5.436t-3.312 4.878-4.968 2.07zm15.552-3.744q2.772 0 4.284 2.142t1.512 5.022q0 2.664-1.26 5.472t-3.618 4.806-5.094 1.998q-2.772 0-4.284-2.124t-1.512-5.004q0-2.664 1.26-5.49t3.618-4.824 5.094-1.998z","SPOON":"M25.344-45.431q0 5.22-2.052 8.766t-5.472 4.878l1.62 29.556q.072.936-.576 1.62t-1.584.684h-6.912q-.936 0-1.584-.684t-.576-1.62l1.62-29.556q-3.42-1.332-5.472-4.878t-2.052-8.766q0-4.608 1.53-8.982t4.23-7.2 5.76-2.826 5.76 2.826 4.23 7.2 1.53 8.982z","CUBE":"M32.256-5.795l23.04-12.564v-22.896l-23.04 8.388v27.072zm-2.304-31.14l25.128-9.144-25.128-9.144-25.128 9.144zm29.952-9.072v27.648q0 1.26-.648 2.34t-1.764 1.692l-25.344 13.824q-1.008.576-2.196.576t-2.196-.576l-25.344-13.824q-1.116-.612-1.764-1.692t-.648-2.34v-27.648q0-1.44.828-2.628t2.196-1.692l25.344-9.216q.792-.288 1.584-.288t1.584.288l25.344 9.216q1.368.504 2.196 1.692t.828 2.628z","CUBES":"M23.04-5.687l13.824-6.912v-11.304l-13.824 5.904v12.312zm-2.304-16.344l14.544-6.228-14.544-6.228-14.544 6.228zm39.168 16.344l13.824-6.912v-11.304l-13.824 5.904v12.312zm-2.304-16.344l14.544-6.228-14.544-6.228-14.544 6.228zm-16.128-10.548l13.824-5.94v-9.576l-13.824 5.904v9.612zm-2.304-13.644l15.876-6.804-15.876-6.804-15.876 6.804zm39.168 18.648v14.976q0 1.296-.684 2.412t-1.872 1.692l-16.128 8.064q-.9.504-2.052.504t-2.052-.504l-16.128-8.064q-.18-.072-.252-.144-.072.072-.252.144l-16.128 8.064q-.9.504-2.052.504t-2.052-.504l-16.128-8.064q-1.188-.576-1.872-1.692t-.684-2.412v-14.976q0-1.368.774-2.52t2.034-1.728l15.624-6.696v-14.4q0-1.368.774-2.52t2.034-1.728l16.128-6.912q.828-.36 1.8-.36t1.8.36l16.128 6.912q1.26.576 2.034 1.728t.774 2.52v14.4l15.624 6.696q1.296.576 2.052 1.728t.756 2.52z","BEHANCE":"M66.528-52.235h-18.396v4.464h18.396v-4.464zm-9.072 15.336q-3.24 0-5.256 1.89t-2.232 5.13h14.688q-.648-7.02-7.2-7.02zm.576 21.06q2.268 0 4.392-1.152t2.736-3.132h7.956q-3.6 11.052-15.372 11.052-7.704 0-12.258-4.752t-4.554-12.492q0-7.488 4.698-12.438t12.114-4.95q4.968 0 8.658 2.448t5.508 6.444 1.818 8.928q0 .612-.072 1.692h-23.688q0 3.996 2.07 6.174t5.994 2.178zm-48.06-1.8h10.656q7.38 0 7.38-6.012 0-6.48-7.164-6.48h-10.872v12.492zm0-19.332h10.116q2.808 0 4.446-1.314t1.638-4.086q0-5.184-6.84-5.184h-9.36v10.584zm-9.972-18.324h21.384q3.132 0 5.58.504t4.554 1.71 3.24 3.474 1.134 5.544q0 6.516-6.192 9.468 4.104 1.152 6.192 4.14t2.088 7.344q0 2.7-.882 4.914t-2.376 3.726-3.546 2.556-4.356 1.512-4.824.468h-21.996v-45.36z","BEHANCE_SQUARE":"M44.928-59.831q4.284 0 7.326 3.042t3.042 7.326v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56zm-26.964 13.212h-13.356v28.332h13.752q4.212 0 7.092-2.07t2.88-6.138q0-5.688-5.148-7.2 3.852-1.872 3.852-5.904 0-2.052-.702-3.474t-2.034-2.178-2.844-1.062-3.492-.306zm-.792 11.448h-6.336v-6.624h5.868q4.284 0 4.284 3.24 0 3.384-3.816 3.384zm.324 12.06h-6.66v-7.812h6.804q4.464 0 4.464 4.068 0 3.744-4.608 3.744zm23.4 1.152q-2.448 0-3.744-1.368t-1.296-3.852h14.796q.036-.36.036-1.08 0-4.752-2.682-7.938t-7.326-3.186q-4.608 0-7.56 3.096t-2.952 7.776q0 4.86 2.844 7.812t7.668 2.952q7.38 0 9.612-6.876h-4.968q-.396 1.224-1.71 1.944t-2.718.72zm-.36-13.176q4.068 0 4.464 4.392h-9.144q.144-2.016 1.404-3.204t3.276-1.188zm-5.832-9.576h11.484v2.772h-11.484v-2.772z","STEAM":"M56.952-43.487q0 3.636-2.574 6.21t-6.21 2.574-6.21-2.574-2.574-6.21 2.574-6.21 6.21-2.574 6.21 2.574 2.574 6.21zm-27.72 26.712q0-3.744-2.628-6.372t-6.372-2.628q-.972 0-1.944.216l3.744 1.512q2.772 1.116 3.942 3.834t.054 5.454q-1.116 2.772-3.852 3.924t-5.472.036q-.756-.288-2.232-.882t-2.196-.882q1.152 2.16 3.276 3.474t4.68 1.314q3.744 0 6.372-2.628t2.628-6.372zm29.88-26.676q0-4.536-3.222-7.758t-7.758-3.222q-4.572 0-7.794 3.222t-3.222 7.758q0 4.572 3.222 7.776t7.794 3.204q4.536 0 7.758-3.204t3.222-7.776zm5.4 0q0 6.804-4.806 11.592t-11.574 4.788l-15.732 11.484q-.432 4.644-3.924 7.848t-8.244 3.204q-4.356 0-7.704-2.736t-4.248-6.912l-8.28-3.312v-15.444l14.004 5.652q2.844-1.728 6.228-1.728.468 0 1.26.072l10.224-14.652q.072-6.732 4.878-11.484t11.538-4.752q6.768 0 11.574 4.806t4.806 11.574z","STEAM_SQUARE":"M44.712-41.147q0-2.88-2.052-4.914t-4.932-2.034-4.914 2.052-2.034 4.896q0 2.88 2.034 4.914t4.914 2.034 4.932-2.034 2.052-4.914zm-21.96 21.168q0 2.988-2.088 5.058t-5.04 2.07q-2.016 0-3.708-1.044t-2.592-2.772q1.872.72 3.528 1.44 2.16.864 4.32-.054t3.06-3.114q.864-2.16-.054-4.32t-3.114-3.024l-2.952-1.188q.792-.18 1.512-.18 2.952 0 5.04 2.07t2.088 5.058zm32.544-29.484v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-5.508l6.192 2.484q.72 3.312 3.366 5.472t6.066 2.16q3.744 0 6.516-2.52t3.132-6.228l12.42-9.072q5.4 0 9.198-3.798t3.798-9.162q0-5.4-3.798-9.198t-9.198-3.798q-5.328 0-9.108 3.762t-3.852 9.09l-8.1 11.592q-.324-.036-1.008-.036-2.7 0-4.932 1.332l-10.692-4.284v-16.848q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326zm-8.892 8.388q0 3.6-2.556 6.138t-6.156 2.538-6.138-2.538-2.538-6.138 2.538-6.156 6.138-2.556q3.636 0 6.174 2.538t2.538 6.174z","RECYCLE":"M30.096-22.355l-.54 13.248-.072.792-15.12-1.044q-1.296-.108-2.412-1.134t-1.692-2.358q-.396-.972-.522-1.98t.144-2.34.432-1.98.774-2.304.684-1.908q2.808.432 18.324 1.008zm-13.932-21.096l6.48 13.644-5.292-3.312q-2.268 2.592-4.014 5.202t-2.61 4.5-1.422 3.402-.666 2.268l-.144.756-6.84-12.852q-.612-.936-.648-2.016t.216-1.692l.288-.648q1.26-2.268 4.104-6.768l-5.04-3.096zm44.316 18.612l-6.768 12.924q-.432 1.044-1.314 1.674t-1.566.738l-.648.144q-2.556.252-7.884.432l.288 5.904-8.28-13.212 7.596-13.032.252 6.228q6.12.576 10.188.18t6.12-1.188zm-28.26-33.264q-1.692 2.268-9.54 15.66l-11.412-6.732-.684-.432 8.1-12.816q.72-1.116 2.16-1.62t2.88-.36q.864.072 1.746.432t1.512.756 1.494 1.188 1.296 1.242 1.296 1.422 1.152 1.26zm23.58 11.052l7.632 13.068q.648 1.332.45 2.736t-.99 2.664q-.468.72-1.188 1.332t-1.368 1.008-1.746.792-1.692.576-1.854.504-1.656.432q-1.224-2.592-9.54-15.696l11.268-7.02zm-5.148-8.136l5.112-2.988-7.92 13.428-15.084-.72 5.436-3.096q-1.224-3.204-2.7-5.976t-2.718-4.446-2.322-2.88-1.692-1.674l-.612-.468 14.58.036q1.116-.108 2.088.378t1.404 1.026l.396.54q1.404 2.196 4.032 6.84z","CAR":"M17.28-25.271q0-2.376-1.692-4.068t-4.068-1.692-4.068 1.692-1.692 4.068 1.692 4.068 4.068 1.692 4.068-1.692 1.692-4.068zm1.296-11.52h36.576l-3.204-12.852q-.072-.288-.504-.63t-.756-.342h-27.648q-.324 0-.756.342t-.504.63zm49.392 11.52q0-2.376-1.692-4.068t-4.068-1.692-4.068 1.692-1.692 4.068 1.692 4.068 4.068 1.692 4.068-1.692 1.692-4.068zm5.76-3.456v13.824q0 .504-.324.828t-.828.324h-3.456v4.608q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896v-4.608h-36.864v4.608q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896v-4.608h-3.456q-.504 0-.828-.324t-.324-.828v-13.824q0-3.348 2.358-5.706t5.706-2.358h1.008l3.78-15.084q.828-3.384 3.744-5.67t6.444-2.286h27.648q3.528 0 6.444 2.286t3.744 5.67l3.78 15.084h1.008q3.348 0 5.706 2.358t2.358 5.706z","TAXI":"M65.664-32.183q3.348 0 5.706 2.358t2.358 5.706v13.824q0 .504-.324.828t-.828.324h-3.456v2.304q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896v-2.304h-36.864v2.304q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896v-2.304h-3.456q-.504 0-.828-.324t-.324-.828v-13.824q0-3.348 2.358-5.706t5.706-2.358h1.008l3.78-15.084q.828-3.384 3.744-5.67t6.444-2.286h4.608v-8.064q0-.504.324-.828t.828-.324h16.128q.504 0 .828.324t.324.828v8.064h4.608q3.528 0 6.444 2.286t3.744 5.67l3.78 15.084h1.008zm-54.144 17.28q2.376 0 4.068-1.692t1.692-4.068-1.692-4.068-4.068-1.692-4.068 1.692-1.692 4.068 1.692 4.068 4.068 1.692zm7.056-17.28h36.576l-3.204-12.852q-.072-.288-.504-.63t-.756-.342h-27.648q-.324 0-.756.342t-.504.63zm43.632 17.28q2.376 0 4.068-1.692t1.692-4.068-1.692-4.068-4.068-1.692-4.068 1.692-1.692 4.068 1.692 4.068 4.068 1.692z","TREE":"M54.144-11.447q0 .936-.684 1.62t-1.62.684h-16.632q.036.612.216 3.15t.18 3.906q0 .9-.648 1.53t-1.548.63h-11.52q-.9 0-1.548-.63t-.648-1.53q0-1.368.18-3.906t.216-3.15h-16.632q-.936 0-1.62-.684t-.684-1.62.684-1.62l14.472-14.508h-8.244q-.936 0-1.62-.684t-.684-1.62.684-1.62l14.472-14.508h-7.092q-.936 0-1.62-.684t-.684-1.62.684-1.62l13.824-13.824q.684-.684 1.62-.684t1.62.684l13.824 13.824q.684.684.684 1.62t-.684 1.62-1.62.684h-7.092l14.472 14.508q.684.684.684 1.62t-.684 1.62-1.62.684h-8.244l14.472 14.508q.684.684.684 1.62z","SPOTIFY":"M40.572-20.879q0-1.152-1.08-1.836-6.948-4.14-16.092-4.14-4.788 0-10.332 1.224-1.512.324-1.512 1.872 0 .72.486 1.242t1.278.522q.18 0 1.332-.288 4.752-.972 8.748-.972 8.136 0 14.292 3.708.684.396 1.188.396.684 0 1.188-.486t.504-1.242zm3.456-7.74q0-1.44-1.26-2.196-8.532-5.076-19.728-5.076-5.508 0-10.908 1.512-1.728.468-1.728 2.304 0 .9.63 1.53t1.53.63q.252 0 1.332-.288 4.392-1.188 9.036-1.188 10.044 0 17.568 4.464.864.468 1.368.468.9 0 1.53-.63t.63-1.53zm3.888-8.928q0-1.692-1.44-2.52-4.536-2.628-10.548-3.978t-12.348-1.35q-7.344 0-13.104 1.692-.828.252-1.386.918t-.558 1.746q0 1.116.738 1.872t1.854.756q.396 0 1.44-.288 4.788-1.332 11.052-1.332 5.724 0 11.142 1.224t9.126 3.42q.756.432 1.44.432 1.044 0 1.818-.738t.774-1.854zm7.38 5.364q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","DEVIANTART":"M36.864-53.531l-10.908 20.952.864 1.116h10.044v14.94h-18.252l-1.584 1.08-5.112 9.828-1.08 1.08h-10.836v-10.908l10.908-20.988-.864-1.08h-10.044v-14.94h18.252l1.584-1.08 5.112-9.828 1.08-1.08h10.836v10.908z","SOUNDCLOUD":"M28.224-15.047l.576-8.676-.576-18.828q-.036-.36-.27-.612t-.594-.252q-.324 0-.576.252t-.252.612l-.504 18.828.504 8.676q.036.36.27.594t.558.234q.792 0 .864-.828zm10.656-1.044l.396-7.596-.432-21.096q0-.576-.468-.864-.288-.18-.576-.18t-.576.18q-.468.288-.468.864l-.036.216-.36 20.844q0 .036.396 8.496v.036q0 .36.216.612.324.396.828.396.396 0 .72-.324.324-.252.324-.72zm-37.62-12.24l.72 4.608-.72 4.536q-.072.324-.324.324t-.324-.324l-.612-4.536.612-4.608q.072-.324.324-.324t.324.324zm3.096-2.844l.936 7.452-.936 7.308q-.072.324-.36.324-.324 0-.324-.36l-.828-7.272.828-7.452q0-.324.324-.324.288 0 .36.324zm10.08 16.308zm-6.768-17.676l.9 8.82-.9 8.532q0 .396-.396.396-.36 0-.432-.396l-.756-8.532.756-8.82q.072-.432.432-.432.396 0 .396.432zm3.384-.252l.828 9.072-.828 8.784q-.072.468-.504.468-.468 0-.468-.468l-.756-8.784.756-9.072q0-.468.468-.468.432 0 .504.468zm3.384.648l.756 8.424-.756 8.856q-.072.576-.576.576-.216 0-.378-.162t-.162-.414l-.72-8.856.72-8.424q0-.216.162-.378t.378-.162q.504 0 .576.54zm13.788 17.1zm-10.404-22.356l.756 13.68-.756 8.856q0 .252-.18.45t-.432.198q-.576 0-.648-.648l-.648-8.856.648-13.68q.072-.648.648-.648.252 0 .432.198t.18.45zm3.384-3.096l.684 16.848-.684 8.784q0 .288-.198.486t-.486.198q-.648 0-.72-.684l-.576-8.784.576-16.848q.072-.684.72-.684.288 0 .486.198t.198.486zm3.528-1.44l.648 18.216-.648 8.712q-.072.756-.792.756-.684 0-.756-.756l-.576-8.712.576-18.216q0-.324.234-.558t.522-.234q.324 0 .54.234t.252.558zm14.112 26.712zm-7.128-26.856l.54 18.36-.54 8.604q0 .36-.27.63t-.63.27-.612-.252-.288-.648l-.504-8.604.504-18.36q0-.396.27-.648t.63-.252.63.252.27.648zm3.564.684l.504 17.712-.504 8.496q0 .396-.288.684t-.684.288-.684-.288-.324-.684l-.432-8.496.432-17.712q.036-.432.324-.72t.684-.288.666.288.306.72zm7.632 17.712l-.504 8.316q0 .468-.324.792t-.792.324-.792-.324-.36-.792l-.216-4.104-.216-4.212.432-22.896v-.108q.072-.54.432-.864.324-.252.72-.252.288 0 .54.18.504.288.576.936zm40.032-.684q0 4.212-2.988 7.182t-7.2 2.97h-28.296q-.468-.072-.792-.396t-.324-.792v-32.364q0-.828 1.008-1.188 3.06-1.224 6.516-1.224 7.02 0 12.168 4.734t5.76 11.646q1.908-.792 3.96-.792 4.212 0 7.2 2.988t2.988 7.236z","DATABASE":"M27.648-36.791q8.532 0 15.948-1.548t11.7-4.572v6.12q0 2.484-3.708 4.608t-10.08 3.366-13.86 1.242-13.86-1.242-10.08-3.366-3.708-4.608v-6.12q4.284 3.024 11.7 4.572t15.948 1.548zm0 27.648q8.532 0 15.948-1.548t11.7-4.572v6.12q0 2.484-3.708 4.608t-10.08 3.366-13.86 1.242-13.86-1.242-10.08-3.366-3.708-4.608v-6.12q4.284 3.024 11.7 4.572t15.948 1.548zm0-13.824q8.532 0 15.948-1.548t11.7-4.572v6.12q0 2.484-3.708 4.608t-10.08 3.366-13.86 1.242-13.86-1.242-10.08-3.366-3.708-4.608v-6.12q4.284 3.024 11.7 4.572t15.948 1.548zm0-41.472q7.488 0 13.86 1.242t10.08 3.366 3.708 4.608v4.608q0 2.484-3.708 4.608t-10.08 3.366-13.86 1.242-13.86-1.242-10.08-3.366-3.708-4.608v-4.608q0-2.484 3.708-4.608t10.08-3.366 13.86-1.242z","FILE_PDF_O":"M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08zm-18.504-21.348q1.188.936 3.024 2.016 2.124-.252 4.212-.252 5.292 0 6.372 1.764.576.792.072 1.872l-.036.072-.072.072v.036q-.216 1.368-2.556 1.368-1.728 0-4.14-.72t-4.68-1.908q-7.956.864-14.112 2.988-5.508 9.432-8.712 9.432-.54 0-1.008-.252l-.864-.432-.216-.18q-.36-.36-.216-1.296.324-1.44 2.016-3.294t4.752-3.474q.504-.324.828.216.072.072.072.144 1.872-3.06 3.852-7.092 2.448-4.896 3.744-9.432-.864-2.952-1.098-5.742t.234-4.59q.396-1.44 1.512-1.44h.792q.828 0 1.26.54.648.756.324 2.448-.072.216-.144.288.036.108.036.288v1.08q-.072 4.428-.504 6.912 1.98 5.904 5.256 8.568zm-20.736 14.796q1.872-.864 4.932-5.688-1.836 1.44-3.15 3.024t-1.782 2.664zm14.328-33.12q-.54 1.512-.072 4.752.036-.252.252-1.584 0-.108.252-1.548.036-.144.144-.288l-.036-.072-.018-.054-.018-.054q-.036-.792-.468-1.296l-.036.072v.072zm-4.464 23.796q4.86-1.944 10.224-2.916-.072-.036-.468-.342t-.576-.486q-2.736-2.412-4.572-6.336-.972 3.096-2.988 7.092-1.08 2.016-1.62 2.988zm23.256-.576q-.864-.864-5.04-.864 2.736 1.008 4.464 1.008.504 0 .648-.036l-.072-.108z","FILE_WORD_O":"M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08zm-42.3-32.256v3.852h2.52l5.904 23.796h5.724l4.608-17.46q.252-.72.36-1.656.072-.576.072-.864h.144l.108.864q.036.108.126.72t.198.936l4.608 17.46h5.724l5.904-23.796h2.52v-3.852h-10.8v3.852h3.24l-3.564 15.768q-.18.72-.252 1.656l-.072.756h-.144l-.108-.756q-.036-.18-.144-.756t-.18-.9l-5.184-19.62h-4.104l-5.184 19.62q-.072.324-.162.882t-.126.774l-.144.756h-.144l-.072-.756q-.072-.936-.252-1.656l-3.564-15.768h3.24v-3.852h-10.8z","FILE_EXCEL_O":"M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08zm-35.244-8.424v3.816h10.116v-3.816h-2.7l3.708-5.796q.18-.252.36-.594t.27-.486.126-.144h.072q.036.144.18.36.072.144.162.27t.216.288.234.306l3.852 5.796h-2.736v3.816h10.476v-3.816h-2.448l-6.912-9.828 7.02-10.152h2.412v-3.852h-10.044v3.852h2.664l-3.708 5.724q-.144.252-.36.594t-.324.486l-.072.108h-.072q-.036-.144-.18-.36-.216-.396-.612-.828l-3.816-5.724h2.736v-3.852h-10.44v3.852h2.448l6.804 9.792-6.984 10.188h-2.448z","FILE_POWERPOINT_O":"M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08zm-35.712-8.424v3.816h11.772v-3.816h-3.348v-6.012h4.932q2.736 0 4.248-.54 2.412-.828 3.834-3.132t1.422-5.256q0-2.916-1.332-5.076t-3.6-3.132q-1.728-.684-4.68-.684h-13.248v3.852h3.312v19.98h-3.312zm12.708-10.08h-4.284v-9.648h4.32q1.872 0 2.988.648 2.016 1.188 2.016 4.14 0 3.204-2.232 4.32-1.116.54-2.808.54z","FILE_PICTURE_O":"M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08zm-4.608-16.128v11.52h-36.864v-6.912l6.912-6.912 4.608 4.608 13.824-13.824zm-29.952-6.912q-2.88 0-4.896-2.016t-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896-2.016 4.896-4.896 2.016z","FILE_ZIP_O":"M23.04-50.615v-4.608h-4.608v4.608h4.608zm4.608 4.608v-4.608h-4.608v4.608h4.608zm-4.608 4.608v-4.608h-4.608v4.608h4.608zm4.608 4.608v-4.608h-4.608v4.608h4.608zm25.2-13.968q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-4.608v4.608h-4.608v-4.608h-18.432v55.296h46.08zm-22.572-25.956l3.852 12.564q.288.972.288 1.872 0 2.988-2.61 4.95t-6.606 1.962-6.606-1.962-2.61-4.95q0-.9.288-1.872.756-2.268 4.32-14.256v-4.608h4.608v4.608h2.844q.792 0 1.404.468t.828 1.224zm-5.076 16.74q1.908 0 3.258-.684t1.35-1.62-1.35-1.62-3.258-.684-3.258.684-1.35 1.62 1.35 1.62 3.258.684z","FILE_SOUND_O":"M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08zm-28.368-29.304q.72.288.72 1.08v19.584q0 .792-.72 1.08-.288.072-.432.072-.432 0-.828-.324l-5.976-6.012h-4.716q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h4.716l5.976-6.012q.576-.54 1.26-.252zm15.012 24.804q1.116 0 1.8-.864 4.644-5.724 4.644-13.068t-4.644-13.068q-.576-.756-1.548-.864t-1.692.504q-.756.612-.846 1.566t.522 1.71q3.6 4.428 3.6 10.152t-3.6 10.152q-.612.756-.522 1.71t.846 1.53q.648.54 1.44.54zm-7.596-5.328q.972 0 1.692-.72 3.132-3.348 3.132-7.884t-3.132-7.884q-.648-.684-1.62-.72t-1.656.612-.72 1.602.648 1.674q1.872 2.052 1.872 4.716t-1.872 4.716q-.684.72-.648 1.674t.72 1.602q.72.612 1.584.612z","FILE_VIDEO_O":"M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08zm-23.04-32.256q1.872 0 3.24 1.368t1.368 3.24v13.824q0 1.872-1.368 3.24t-3.24 1.368h-13.824q-1.872 0-3.24-1.368t-1.368-3.24v-13.824q0-1.872 1.368-3.24t3.24-1.368h13.824zm17.712.072q.72.288.72 1.08v20.736q0 .792-.72 1.08-.288.072-.432.072-.504 0-.828-.324l-9.54-9.576v-3.24l9.54-9.576q.324-.324.828-.324.144 0 .432.072z","FILE_CODE_O":"M52.848-50.759q1.008 1.008 1.728 2.736t.72 3.168v41.472q0 1.44-1.008 2.448t-2.448 1.008h-48.384q-1.44 0-2.448-1.008t-1.008-2.448v-57.6q0-1.44 1.008-2.448t2.448-1.008h32.256q1.44 0 3.168.72t2.736 1.728zm-15.984-8.784v13.536h13.536q-.36-1.044-.792-1.476l-11.268-11.268q-.432-.432-1.476-.792zm13.824 55.008v-36.864h-14.976q-1.44 0-2.448-1.008t-1.008-2.448v-14.976h-27.648v55.296h46.08zm-33.408-32.256q.288-.396.756-.45t.864.234l1.836 1.368q.396.288.45.756t-.234.864l-6.552 8.748 6.552 8.748q.288.396.234.864t-.45.756l-1.836 1.368q-.396.288-.864.234t-.756-.45l-8.136-10.836q-.504-.684 0-1.368zm28.872 10.836q.504.684 0 1.368l-8.136 10.836q-.288.396-.756.45t-.864-.234l-1.836-1.368q-.396-.288-.45-.756t.234-.864l6.552-8.748-6.552-8.748q-.288-.396-.234-.864t.45-.756l1.836-1.368q.396-.288.864-.234t.756.45zm-22.32 16.596q-.468-.072-.738-.468t-.198-.864l4.968-29.916q.072-.468.468-.738t.864-.198l2.268.36q.468.072.738.468t.198.864l-4.968 29.916q-.072.468-.468.738t-.864.198z","VINE":"M53.892-34.667v7.128q-3.636.828-7.128.828-2.34 4.896-5.958 9.756t-6.534 7.758-4.608 3.834q-2.88 1.62-5.832-.108-1.008-.612-2.178-1.566t-3.06-3.006-3.69-4.626-3.87-6.624-3.798-8.784-3.294-11.322-2.538-14.04h10.188q.936 7.848 2.52 14.346t3.762 11.412 4.374 8.478 5.04 7.02q6.084-6.084 10.332-14.616-5.112-2.592-8.028-7.92t-2.916-11.988q0-6.912 3.744-11.322t10.224-4.41q6.408 0 9.828 3.798t3.42 10.71q0 5.724-2.088 10.296-.252.036-.702.108t-1.656.072-2.268-.216-2.232-.918-1.818-1.854q1.116-3.708 1.116-6.624 0-3.132-1.044-4.752t-2.844-1.62q-1.908 0-3.06 1.782t-1.152 5.058q0 6.696 3.78 10.566t9.612 3.87q2.232 0 4.356-.504z","CODEPEN":"M7.776-22.355l21.708 14.472v-12.924l-12.024-8.028zm-2.232-5.184l6.948-4.644-6.948-4.644v9.288zm29.484 19.656l21.708-14.472-9.684-6.48-12.024 8.028v12.924zm-2.772-17.748l9.792-6.552-9.792-6.552-9.792 6.552zm-14.796-9.9l12.024-8.028v-12.924l-21.708 14.472zm34.56 3.348l6.948 4.644v-9.288zm-4.968-3.348l9.684-6.48-21.708-14.472v12.924zm17.46-6.48v19.656q0 1.476-1.224 2.304l-29.484 19.656q-.756.468-1.548.468t-1.548-.468l-29.484-19.656q-1.224-.828-1.224-2.304v-19.656q0-1.476 1.224-2.304l29.484-19.656q.756-.468 1.548-.468t1.548.468l29.484 19.656q1.224.828 1.224 2.304z","JSFIDDLE":"M64.8-36.647q3.996 1.656 6.462 5.238t2.466 7.974q0 5.904-4.248 10.098t-10.26 4.194l-.414-.018-.378-.018h-43.812000000000005q-6.12-.36-10.368-4.518t-4.248-10.098q0-3.96 1.98-7.308t5.292-5.292q-.432-1.404-.432-2.952 0-4.14 2.952-7.056t7.164-2.916q3.42 0 6.192 2.088 2.7-5.544 8.01-8.928t11.754-3.384q5.976 0 11.016 2.898t7.974 7.866 2.934 10.836l-.018.648-.018.648zm-47.952 9.576q0 4.392 3.024 6.948t7.488 2.556q4.932 0 8.64-3.564-.576-.72-1.71-2.034t-1.566-1.818q-2.412 2.34-5.184 2.34-1.98 0-3.366-1.206t-1.386-3.15q0-1.908 1.386-3.132t3.294-1.224q1.584 0 3.042.756t2.628 1.98 2.34 2.7 2.484 2.952 2.772 2.7 3.492 1.98 4.374.756q4.356 0 7.362-2.574t3.006-6.858q0-4.356-3.024-6.912t-7.452-2.556q-5.148 0-8.676 3.492.504.576 1.062 1.224t1.242 1.44 1.044 1.224q2.376-2.304 5.112-2.304 1.872 0 3.312 1.188t1.44 3.024q0 2.052-1.332 3.294t-3.384 1.242q-1.548 0-2.97-.756t-2.592-1.98-2.358-2.7-2.502-2.952-2.79-2.7-3.474-1.98-4.266-.756q-4.392 0-7.452 2.538t-3.06 6.822z","SUPPORT":"M32.256-64.439q6.552 0 12.528 2.556t10.296 6.876 6.876 10.296 2.556 12.528-2.556 12.528-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556zm0 4.608q-6.84 0-12.996 3.24l6.984 6.984q2.952-1.008 6.012-1.008t6.012 1.008l6.984-6.984q-6.156-3.24-12.996-3.24zm-24.408 40.644l6.984-6.984q-1.008-2.952-1.008-6.012t1.008-6.012l-6.984-6.984q-3.24 6.156-3.24 12.996t3.24 12.996zm24.408 14.652q6.84 0 12.996-3.24l-6.984-6.984q-2.952 1.008-6.012 1.008t-6.012-1.008l-6.984 6.984q6.156 3.24 12.996 3.24zm0-13.824q5.724 0 9.774-4.05t4.05-9.774-4.05-9.774-9.774-4.05-9.774 4.05-4.05 9.774 4.05 9.774 9.774 4.05zm17.424-7.812l6.984 6.984q3.24-6.156 3.24-12.996t-3.24-12.996l-6.984 6.984q1.008 2.952 1.008 6.012t-1.008 6.012z","CIRCLE_O_NOTCH":"M63.36-32.183q0 6.336-2.466 12.096t-6.624 9.918-9.918 6.624-12.096 2.466-12.096-2.466-9.918-6.624-6.624-9.918-2.466-12.096q0-7.668 3.492-14.346t9.54-10.998 13.464-5.436v8.208q-7.956 1.62-13.194 7.956t-5.238 14.616q0 4.68 1.836 8.946t4.914 7.344 7.344 4.914 8.946 1.836 8.946-1.836 7.344-4.914 4.914-7.344 1.836-8.946q0-8.28-5.238-14.616t-13.194-7.956v-8.208q7.416 1.116 13.464 5.436t9.54 10.998 3.492 14.346z","REBEL":"M.684-32.975q.288-7.812 4.176-14.616t10.98-11.448h.18l-.036.108q-.288.288-1.008 1.206t-1.872 2.754-2.16 3.978-1.602 4.878-.504 5.418 1.404 5.67 3.906 5.544q1.8 1.8 3.672 2.502t3.258.414 2.502-.846 1.692-1.17l.576-.576q1.404-1.836 1.908-4.194t.234-4.41-.756-3.852-.954-2.88l-.504-1.044q-.36-.9-1.098-1.782t-1.548-1.476-1.566-1.062-1.26-.684l-.468-.216 3.744-4.14q1.404.612 2.808 1.872t2.124 2.196l.684.972q.036-1.728-.666-3.726t-1.458-3.15l-.72-1.116 5.796-6.588 5.76 6.516q-1.188 1.656-1.89 3.69t-.81 3.258l-.144 1.188q.792-1.332 2.214-2.61t2.43-1.89l1.008-.612 3.708 4.14q-1.584.504-3.06 1.8t-2.16 2.34l-.684 1.044q-1.116 2.016-1.728 4.806t-.252 6.12 2.052 5.634q1.188 1.62 2.79 2.178t3.06.198 2.736-.954 2.07-1.206l.756-.576q2.16-1.908 3.474-4.14t1.746-4.374.36-4.374-.648-4.248-1.332-3.87-1.638-3.348-1.62-2.592-1.242-1.71l-.468-.612q-.504-.468-.252-.468l.36.108q1.44 1.044 2.25 1.656t2.232 1.8 2.304 2.088 2.106 2.34 1.998 2.772 1.638 3.168 1.368 3.708.846 4.212.378 4.896q.108 9.324-3.888 16.74t-11.232 11.556-16.416 4.14q-6.66 0-12.636-2.664t-10.206-7.128-6.624-10.548-2.178-12.708z","GE":"M31.464-5.471v2.376q-7.488-.216-13.86-3.942t-10.188-9.918l2.088-1.224q1.044 1.764 2.628 3.564l2.34-2.052q5.328 6.048 13.248 7.632l-.612 3.096q2.34.432 4.356.468zm-21.528-19.08l-2.988 1.008q.792 2.16 1.764 4.032l-2.052 1.188q-3.528-6.48-3.528-13.86t3.528-13.86l2.052 1.188q-1.08 2.016-1.764 4.032l2.952 1.008q-1.26 3.6-1.26 7.632 0 3.924 1.296 7.632zm45.072 6.372l2.088 1.224q-3.816 6.192-10.188 9.918t-13.86 3.942v-2.376q2.016-.036 4.356-.468l-.612-3.096q7.92-1.584 13.248-7.632l2.34 2.052q1.584-1.8 2.628-3.564zm-5.436-19.944l-8.388 2.88q.504 1.512.504 3.06t-.504 3.06l8.352 2.88q-1.116 3.312-3.528 6.084l-6.66-5.832q-2.052 2.412-5.292 3.06l1.728 8.676q-1.872.36-3.528.36t-3.528-.36l1.728-8.676q-3.24-.648-5.292-3.06l-6.66 5.832q-2.412-2.772-3.528-6.084l8.352-2.88q-.504-1.512-.504-3.06t.504-3.06l-8.388-2.88q1.188-3.348 3.564-6.084l6.66 5.832q2.124-2.448 5.292-3.096l-1.728-8.64q1.584-.36 3.528-.36t3.528.36l-1.728 8.64q3.168.648 5.292 3.096l6.66-5.832q2.376 2.736 3.564 6.084zm-18.108-23.148v2.376q-2.34.072-4.356.468l.612 3.096q-7.92 1.512-13.248 7.596l-2.34-2.016q-1.368 1.512-2.628 3.528l-2.052-1.188q3.816-6.192 10.152-9.918t13.86-3.942zm29.916 29.088q0 7.38-3.528 13.86l-2.052-1.188q.972-1.872 1.764-4.032l-2.988-1.008q1.296-3.708 1.296-7.632 0-4.032-1.26-7.632l2.952-1.008q-.684-2.016-1.764-4.032l2.052-1.188q3.528 6.48 3.528 13.86zm-4.32-15.228l-2.052 1.188q-1.26-2.016-2.628-3.528l-2.34 2.016q-5.328-6.084-13.248-7.596l.612-3.096q-2.016-.396-4.356-.468v-2.376q7.524.216 13.86 3.942t10.152 9.918zm5.868 15.228q0-6.228-2.43-11.916t-6.534-9.792-9.792-6.534-11.916-2.43-11.916 2.43-9.792 6.534-6.534 9.792-2.43 11.916 2.43 11.916 6.534 9.792 9.792 6.534 11.916 2.43 11.916-2.43 9.792-6.534 6.534-9.792 2.43-11.916zm1.584 0q0 6.552-2.556 12.528t-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556 12.528 2.556 10.296 6.876 6.876 10.296 2.556 12.528z","GIT_SQUARE":"M20.952-17.351q0 2.376-3.348 2.376-3.852 0-3.852-2.268 0-2.304 3.528-2.304 3.672 0 3.672 2.196zm-1.296-16.776q0 3.06-2.664 3.06-2.772 0-2.772-3.024 0-3.24 2.772-3.24 1.296 0 1.98.918t.684 2.286zm5.976-2.7v-4.5q-2.808 1.044-4.86 1.044-1.8-1.044-3.96-1.044-3.096 0-5.22 2.052t-2.124 5.148q0 1.8 1.062 3.672t2.646 2.412v.108q-1.368.612-1.368 3.06 0 1.908 1.476 2.772v.108q-4.068 1.332-4.068 5.004 0 1.62.72 2.826t1.944 1.836 2.592.918 2.916.288q8.064 0 8.064-6.768 0-2.412-1.728-3.564t-4.536-1.656q-.972-.18-1.854-.738t-.882-1.422q0-1.584 1.764-1.872 2.772-.54 4.392-2.52t1.62-4.824q0-.864-.36-1.872 1.332-.324 1.764-.468zm2.124 15.084h4.932q-.072-.972-.072-2.952v-13.932q0-1.656.072-2.484h-4.932q.108.828.108 2.556v14.112q0 1.8-.108 2.7zm18.324-.576v-4.356q-1.08.756-2.448.756-1.908 0-1.908-2.952v-8.1h1.872q.324 0 .954.036t.954.036v-4.212h-3.78q0-2.952.108-3.672h-5.04q.144.864.144 1.98v1.692h-2.16v4.212l1.332-.108.396.018.432.018v.072h-.072v7.812q0 1.332.09 2.304t.414 2.034.882 1.746 1.566 1.116 2.376.432q2.304 0 3.888-.864zm-12.816-25.416q0-1.296-.864-2.286t-2.16-.99-2.178.972-.882 2.304q0 1.296.9 2.25t2.16.954 2.142-.972.882-2.232zm22.032-1.728v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","GIT":"M21.42-9.935q0-3.6-5.94-3.6-5.688 0-5.688 3.744 0 3.636 6.192 3.636 5.436 0 5.436-3.78zm-2.124-27.18q0-2.196-1.08-3.672t-3.204-1.476q-4.464 0-4.464 5.22 0 4.86 4.464 4.86 4.284 0 4.284-4.932zm9.684-11.664v7.272q-1.296.432-2.844.792.576 1.548.576 3.024 0 4.572-2.628 7.794t-7.092 4.05q-1.44.288-2.142.972t-.702 2.088q0 1.116.81 1.854t2.088 1.152 2.826.792 3.096.918 2.826 1.35 2.088 2.304.81 3.546q0 10.944-13.068 10.944-2.484 0-4.68-.45t-4.176-1.476-3.15-2.952-1.17-4.59q0-5.94 6.552-8.1v-.144q-2.412-1.476-2.412-4.536 0-3.924 2.268-4.932v-.144q-2.592-.864-4.302-3.906t-1.71-5.958q0-5.004 3.42-8.334t8.46-3.33q3.456 0 6.408 1.692 3.528 0 7.848-1.692zm11.448 31.716h-7.992q.144-1.62.144-4.824v-21.924q0-3.384-.144-4.608h7.992q-.144 1.188-.144 4.464v22.068q0 3.204.144 4.824zm21.636-7.992v7.056q-2.556 1.404-6.264 1.404-2.232 0-3.852-.72t-2.52-1.8-1.422-2.808-.666-3.312-.144-3.708v-12.636h.072v-.144q-.252 0-.684-.036t-.648-.036q-.756 0-2.124.216v-6.84h3.456v-2.736q0-1.944-.216-3.204h8.172q-.216 1.476-.216 5.94h6.156v6.84q-.54 0-1.566-.072t-1.53-.072h-3.06v13.14q0 4.716 3.132 4.716 2.196 0 3.924-1.188zm-20.736-34.092q0 2.088-1.404 3.654t-3.456 1.566q-2.088 0-3.528-1.566t-1.44-3.654q0-2.124 1.422-3.708t3.546-1.584q2.088 0 3.474 1.602t1.386 3.69z","YC_SQUARE":"M29.124-28.295l9.576-17.964h-4.032l-5.652 11.232q-.864 1.728-1.584 3.312l-1.512-3.312-5.58-11.232h-4.32l9.468 17.748v11.664h3.636v-11.448zm26.172-21.168v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","TENCENT_WEIBO":"M30.312-43.847q0 2.88-2.052 4.914t-4.896 2.034q-2.16 0-3.996-1.26-2.232 2.412-4.14 5.256-8.892 13.356-7.272 30.924.036.792-.45 1.386t-1.242.666h-.18q-.72 0-1.26-.486t-.612-1.206q-.504-4.536-.126-8.91t1.062-7.812 1.944-6.696 2.484-5.598 2.664-4.5q2.196-3.24 4.752-5.94-.576-1.26-.576-2.772 0-2.88 2.034-4.914t4.914-2.034 4.914 2.034 2.034 4.914zm13.716.396q0 5.688-2.808 10.512t-7.65 7.632-10.53 2.808q-2.304 0-4.716-.504-.756-.18-1.17-.846t-.234-1.422q.18-.72.828-1.134t1.404-.27q1.836.468 3.888.468 3.492 0 6.696-1.368t5.508-3.672 3.672-5.508 1.368-6.696-1.368-6.696-3.672-5.508-5.508-3.672-6.696-1.368-6.696 1.368-5.508 3.672-3.672 5.508-1.368 6.696q0 4.104 1.872 7.848.36.72.126 1.44t-.918 1.08-1.422.108-1.098-.936q-2.304-4.428-2.304-9.54 0-4.284 1.674-8.172t4.482-6.696 6.696-4.464 8.136-1.656q5.688 0 10.53 2.808t7.65 7.65 2.808 10.53z","QQ":"M9.72-35.423q-.288-.684-.288-1.872 0-.72.396-1.764t.864-1.62q-.036-.792.27-1.908t.81-1.548q0-5.004 3.33-10.386t7.83-7.542q5.004-2.376 11.664-2.376 4.788 0 9.576 1.98 1.764.756 3.24 1.728t2.556 2.016 1.98 2.448 1.512 2.664 1.17 3.042.918 3.222.792 3.528l.036.18q1.98 2.988 1.98 5.4 0 .504-.324 1.44t-.324 1.368l.054.126.126.18.072.126q2.772 4.104 4.338 7.722t1.566 7.506q0 1.548-.702 3.6t-1.998 2.052q-.324 0-.702-.27t-.684-.63-.684-.936-.576-.954-.486-.936-.324-.63l-.108-.036-.18.144q-2.124 5.544-4.752 8.028.72.72 2.214 1.386t2.484 1.494 1.278 2.34q-.072.144-.144.576t-.252.648q-2.304 3.492-10.872 3.492-1.908 0-3.978-.324t-3.528-.72-3.762-1.08q-.54-.18-.828-.252-.504-.144-1.656-.162t-1.44-.054q-1.476 1.62-4.59 2.34t-6.066.72q-1.26 0-2.484-.054t-3.348-.324-3.636-.738-2.682-1.44-1.17-2.304q0-1.44.36-2.142t1.476-1.746q.396-.072 1.458-.468t1.782-.432q.144 0 .504-.072.072-.072.072-.144l-.072-.108q-1.728-.396-3.888-3.798t-2.628-5.634l-.18-.108q-.144 0-.432.72-.648 1.476-1.962 2.682t-2.79 1.35h-.036q-.144 0-.216-.162t-.18-.198q-.828-1.944-.828-3.6 0-9.9 9.072-16.776z","WEIXIN":"M20.88-47.843q0-1.476-.9-2.376t-2.376-.9q-1.548 0-2.736.918t-1.188 2.358q0 1.404 1.188 2.322t2.736.918q1.476 0 2.376-.882t.9-2.358zm26.748 18.252q0-1.008-.918-1.8t-2.358-.792q-.972 0-1.782.81t-.81 1.782q0 1.008.81 1.818t1.782.81q1.44 0 2.358-.792t.918-1.836zm-8.496-18.252q0-1.476-.882-2.376t-2.358-.9q-1.548 0-2.736.918t-1.188 2.358q0 1.404 1.188 2.322t2.736.918q1.476 0 2.358-.882t.882-2.358zm22.86 18.252q0-1.008-.936-1.8t-2.34-.792q-.972 0-1.782.81t-.81 1.782q0 1.008.81 1.818t1.782.81q1.404 0 2.34-.792t.936-1.836zm-9.576-14.292q-1.116-.144-2.52-.144-6.084 0-11.196 2.772t-8.046 7.506-2.934 10.35q0 2.808.828 5.472-1.26.108-2.448.108-.936 0-1.8-.054t-1.98-.234-1.602-.252-1.962-.378-1.8-.378l-9.108 4.572 2.592-7.848q-10.44-7.308-10.44-17.64 0-6.084 3.51-11.196t9.504-8.046 13.086-2.934q6.336 0 11.97 2.376t9.432 6.57 4.914 9.378zm21.312 20.196q0 4.212-2.466 8.046t-6.678 6.966l1.98 6.516-7.164-3.924q-5.4 1.332-7.848 1.332-6.084 0-11.196-2.538t-8.046-6.894-2.934-9.504 2.934-9.504 8.046-6.894 11.196-2.538q5.796 0 10.908 2.538t8.19 6.912 3.078 9.486z","SEND":"M63.504-64.043q1.188.864.972 2.304l-9.216 55.296q-.18 1.044-1.152 1.62-.504.288-1.116.288-.396 0-.864-.18l-16.308-6.66-8.712 10.62q-.648.828-1.764.828-.468 0-.792-.144-.684-.252-1.098-.846t-.414-1.314v-12.564l31.104-38.124-38.484 33.3-14.22-5.832q-1.332-.504-1.44-1.98-.072-1.44 1.152-2.124l59.904-34.56q.54-.324 1.152-.324.72 0 1.296.396z","SEND_O":"M63.504-64.043q1.188.864.972 2.304l-9.216 55.296q-.18 1.044-1.152 1.62-.504.288-1.116.288-.396 0-.864-.18l-18.972-7.74-10.728 11.772q-.648.756-1.692.756-.504 0-.828-.144-.684-.252-1.08-.846t-.396-1.314v-16.272l-16.992-6.948q-1.332-.504-1.44-1.98-.108-1.404 1.152-2.124l59.904-34.56q1.26-.756 2.448.072zm-12.312 53.964l7.956-47.628-51.624 29.772 12.096 4.932 31.068-23.004-17.208 28.692z","HISTORY":"M55.296-32.183q0 5.616-2.196 10.728t-5.904 8.82-8.82 5.904-10.728 2.196q-6.192 0-11.772-2.61t-9.504-7.362q-.252-.36-.234-.81t.306-.738l4.932-4.968q.36-.324.9-.324.576.072.828.432 2.628 3.42 6.444 5.292t8.1 1.872q3.744 0 7.146-1.458t5.886-3.942 3.942-5.886 1.458-7.146-1.458-7.146-3.942-5.886-5.886-3.942-7.146-1.458q-3.528 0-6.768 1.278t-5.76 3.654l4.932 4.968q1.116 1.08.504 2.484-.612 1.44-2.124 1.44h-16.128q-.936 0-1.62-.684t-.684-1.62v-16.128q0-1.512 1.44-2.124 1.404-.612 2.484.504l4.68 4.644q3.852-3.636 8.802-5.634t10.242-1.998q5.616 0 10.728 2.196t8.82 5.904 5.904 8.82 2.196 10.728zm-23.04-10.368v16.128q0 .504-.324.828t-.828.324h-11.52q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h8.064v-12.672q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828z","CIRCLE_THIN":"M27.648-55.223q-4.68 0-8.946 1.836t-7.344 4.914-4.914 7.344-1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946-1.836 7.344-4.914 4.914-7.344 1.836-8.946-1.836-8.946-4.914-7.344-7.344-4.914-8.946-1.836zm27.648 23.04q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","HEADER":"M60.552-4.535q-1.584 0-4.77-.126t-4.806-.126q-1.584 0-4.752.126t-4.752.126q-.864 0-1.332-.738t-.468-1.638q0-1.116.612-1.656t1.404-.612 1.836-.252 1.62-.54q1.188-.756 1.188-5.04l-.036-14.076q0-.756-.036-1.116-.468-.144-1.8-.144h-24.3q-1.368 0-1.836.144-.036.36-.036 1.116l-.036 13.356q0 5.112 1.332 5.904.576.36 1.728.468t2.052.126 1.62.54.72 1.638q0 .936-.45 1.728t-1.314.792q-1.692 0-5.022-.126t-4.986-.126q-1.548 0-4.608.126t-4.572.126q-.828 0-1.278-.756t-.45-1.62q0-1.08.558-1.62t1.296-.63 1.71-.27 1.512-.54q1.188-.828 1.188-5.148l-.036-2.052v-29.268q0-.108.018-.936t0-1.314-.054-1.386-.126-1.512-.234-1.314-.396-1.134-.576-.648q-.54-.36-1.62-.432t-1.908-.072-1.476-.504-.648-1.62q0-.936.432-1.728t1.296-.792q1.656 0 4.986.126t4.986.126q1.512 0 4.554-.126t4.554-.126q.9 0 1.35.792t.45 1.728q0 1.08-.612 1.566t-1.386.522-1.782.144-1.548.468q-1.26.756-1.26 5.76l.036 11.52q0 .756.036 1.152.468.108 1.404.108h25.164q.9 0 1.368-.108.036-.396.036-1.152l.036-11.52q0-5.004-1.26-5.76-.648-.396-2.106-.45t-2.376-.468-.918-1.782q0-.936.45-1.728t1.35-.792q1.584 0 4.752.126t4.752.126q1.548 0 4.644-.126t4.644-.126q.9 0 1.35.792t.45 1.728q0 1.08-.63 1.584t-1.44.522-1.854.108-1.584.45q-1.26.828-1.26 5.796l.036 33.948q0 4.284 1.224 5.04.576.36 1.656.486t1.926.162 1.494.558.648 1.602q0 .936-.432 1.728t-1.296.792z","PARAGRAPH":"M46.008-57.635v2.628q0 1.044-.666 2.196t-1.53 1.152q-1.8 0-1.944.036-.936.216-1.152 1.116-.108.396-.108 2.304v41.472q0 .9-.648 1.548t-1.548.648h-3.888q-.9 0-1.548-.648t-.648-1.548v-43.848h-5.148v43.848q0 .9-.63 1.548t-1.566.648h-3.888q-.936 0-1.566-.648t-.63-1.548v-17.856q-5.292-.432-8.82-2.124-4.536-2.088-6.912-6.444-2.304-4.212-2.304-9.324 0-5.976 3.168-10.296 3.168-4.248 7.524-5.724 3.996-1.332 15.012-1.332h17.244q.9 0 1.548.648t.648 1.548z","SLIDERS":"M12.672-13.751v4.608h-12.672v-4.608h12.672zm12.672-4.608q.936 0 1.62.684t.684 1.62v9.216q0 .936-.684 1.62t-1.62.684h-9.216q-.936 0-1.62-.684t-.684-1.62v-9.216q0-.936.684-1.62t1.62-.684h9.216zm5.76-13.824v4.608h-31.104v-4.608h31.104zm-23.04-18.432v4.608h-8.064v-4.608h8.064zm47.232 36.864v4.608h-26.496v-4.608h26.496zm-34.56-41.472q.936 0 1.62.684t.684 1.62v9.216q0 .936-.684 1.62t-1.62.684h-9.216q-.936 0-1.62-.684t-.684-1.62v-9.216q0-.936.684-1.62t1.62-.684h9.216zm23.04 18.432q.936 0 1.62.684t.684 1.62v9.216q0 .936-.684 1.62t-1.62.684h-9.216q-.936 0-1.62-.684t-.684-1.62v-9.216q0-.936.684-1.62t1.62-.684h9.216zm11.52 4.608v4.608h-8.064v-4.608h8.064zm0-18.432v4.608h-31.104v-4.608h31.104z","SHARE_ALT":"M43.776-27.575q4.788 0 8.154 3.366t3.366 8.154-3.366 8.154-8.154 3.366-8.154-3.366-3.366-8.154q0-.432.072-1.224l-12.96-6.48q-3.312 3.096-7.848 3.096-4.788 0-8.154-3.366t-3.366-8.154 3.366-8.154 8.154-3.366q4.536 0 7.848 3.096l12.96-6.48q-.072-.792-.072-1.224 0-4.788 3.366-8.154t8.154-3.366 8.154 3.366 3.366 8.154-3.366 8.154-8.154 3.366q-4.536 0-7.848-3.096l-12.96 6.48q.072.792.072 1.224t-.072 1.224l12.96 6.48q3.312-3.096 7.848-3.096z","SHARE_ALT_SQUARE":"M46.08-21.419q0-3.168-2.25-5.436t-5.418-2.268q-3.024 0-5.22 2.088l-8.676-4.32q.072-.576.072-.828t-.072-.828l8.676-4.32q2.196 2.088 5.22 2.088 3.168 0 5.418-2.268t2.25-5.436-2.25-5.418-5.418-2.25-5.436 2.25-2.268 5.418q0 .252.072.828l-8.676 4.32q-2.232-2.052-5.22-2.052-3.168 0-5.418 2.25t-2.25 5.418 2.25 5.418 5.418 2.25q2.988 0 5.22-2.052l8.676 4.32q-.072.576-.072.828 0 3.168 2.268 5.418t5.436 2.25 5.418-2.25 2.25-5.418zm9.216-28.044v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","BOMB":"M20.556-43.235q-.36-.9-1.224-1.26t-1.764 0q-3.888 1.584-6.876 4.572t-4.572 6.876q-.36.9 0 1.764t1.26 1.224q.468.18.864.18 1.512 0 2.16-1.44 1.224-3.024 3.546-5.346t5.346-3.546q.9-.396 1.26-1.26t0-1.764zm33.912-12.816l1.656 1.656-8.784 8.748 2.448 2.448q.684.684.684 1.638t-.684 1.638l-2.304 2.304q3.204 5.796 3.204 12.348 0 5.148-1.998 9.846t-5.4 8.1-8.1 5.4-9.846 1.998-9.846-1.998-8.1-5.4-5.4-8.1-1.998-9.846 1.998-9.846 5.4-8.1 8.1-5.4 9.846-1.998q6.552 0 12.348 3.204l2.304-2.304q.684-.684 1.638-.684t1.638.684l2.448 2.448zm.288-2.016q-.36.36-.792.36-.468 0-.828-.36l-3.276-3.24q-.324-.36-.324-.828t.324-.828q.36-.324.828-.324t.828.324l3.24 3.276q.36.324.36.81t-.36.81zm8.28 8.28q-.396.324-.828.324t-.828-.324l-3.24-3.276q-.36-.324-.36-.81t.36-.81q.324-.36.81-.36t.81.36l3.276 3.24q.324.36.324.828t-.324.828zm1.476-6.588q0 .504-.324.828t-.828.324h-3.456q-.504 0-.828-.324t-.324-.828.324-.828.828-.324h3.456q.504 0 .828.324t.324.828zm-6.912-6.912v3.456q0 .504-.324.828t-.828.324-.828-.324-.324-.828v-3.456q0-.504.324-.828t.828-.324.828.324.324.828zm5.436 1.98l-3.276 3.24q-.36.36-.792.36-.468 0-.828-.36-.36-.324-.36-.81t.36-.81l3.24-3.276q.36-.324.828-.324t.828.324q.324.36.324.828t-.324.828z","SOCCER_BALL_O":"M21.924-35.063l10.332-7.488 10.332 7.488-3.924 12.096h-12.78zm10.332-29.376q6.552 0 12.528 2.556t10.296 6.876 6.876 10.296 2.556 12.528-2.556 12.528-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556zm22.284 48.6q5.364-7.308 5.364-16.344v-.108l-3.672 3.204-8.64-8.064 2.268-11.628 4.824.432q-5.4-7.416-14.004-10.152l1.908 4.464-10.332 5.724-10.332-5.724 1.908-4.464q-8.604 2.736-14.004 10.152l4.86-.432 2.232 11.628-8.64 8.064-3.672-3.204v.108q0 9.036 5.364 16.344l1.08-4.752 11.736 1.44 5.004 10.728-4.176 2.484q4.212 1.404 8.64 1.404t8.64-1.404l-4.176-2.484 5.004-10.728 11.736-1.44z","TTY":"M16.128-17.207v6.912q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm-6.912-13.824v6.912q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm20.736 13.824v6.912q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm-6.912-13.824v6.912q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm-20.664-5.76q-1.008 0-1.692-.684t-.684-1.656v-4.644h18.504v4.644q0 .972-.684 1.656t-1.656.684h-13.788zm41.4 19.584v6.912q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm-6.912-13.824v6.912q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm20.736 13.824v6.912q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm-6.912-13.824v6.912q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm13.824-14.688v.468h-18.504v-.36q0-3.744-13.752-3.672-13.752.036-13.752 3.672v.36h-18.504v-.468q0-.612.306-1.548t1.224-2.304 2.358-2.718 3.978-2.736 5.76-2.43 8.064-1.71 10.566-.666 10.548.666 8.064 1.71 5.778 2.43 3.978 2.736 2.358 2.718 1.224 2.304.306 1.548zm0 14.688v6.912q0 .504-.324.828t-.828.324h-6.912q-.504 0-.828-.324t-.324-.828v-6.912q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828zm0-12.744v4.644q0 .972-.684 1.656t-1.656.684h-13.824q-.972 0-1.656-.684t-.684-1.656v-4.644h18.504z","BINOCULARS":"M25.344-52.919v27.648q0 .936-.684 1.62t-1.62.684v20.736q0 .936-.684 1.62t-1.62.684h-18.432q-.936 0-1.62-.684t-.684-1.62v-18.432l8.964-31.428q.252-.828 1.116-.828h15.264zm11.52 0v25.344h-9.216v-25.344h9.216zm27.648 32.256v18.432q0 .936-.684 1.62t-1.62.684h-18.432q-.936 0-1.62-.684t-.684-1.62v-20.736q-.936 0-1.62-.684t-.684-1.62v-27.648h15.264q.864 0 1.116.828zm-38.016-42.624v8.064h-12.672v-8.064q0-.504.324-.828t.828-.324h10.368q.504 0 .828.324t.324.828zm24.192 0v8.064h-12.672v-8.064q0-.504.324-.828t.828-.324h10.368q.504 0 .828.324t.324.828z","PLUG":"M63.18-48.131q1.332 1.332 1.332 3.24t-1.332 3.276l-14.436 14.4 5.4 5.4-5.76 5.76q-5.868 5.868-14.022 6.714t-14.814-3.618l-13.032 13.032h-6.516v-6.516l13.032-13.032q-4.464-6.66-3.618-14.814t6.714-14.022l5.76-5.76 5.4 5.4 14.4-14.436q1.368-1.332 3.276-1.332t3.24 1.332 1.332 3.258-1.332 3.258l-14.4 14.436 8.424 8.424 14.436-14.4q1.368-1.332 3.276-1.332t3.24 1.332z","SLIDESHARE":"M31.428-37.799q0 2.988-2.286 5.13t-5.49 2.142-5.49-2.142-2.286-5.13q0-3.024 2.286-5.148t5.49-2.124 5.49 2.124 2.286 5.148zm18.072 0q0 2.988-2.268 5.13t-5.508 2.142q-3.204 0-5.49-2.142t-2.286-5.13q0-3.024 2.286-5.148t5.49-2.124q3.24 0 5.508 2.124t2.268 5.148zm8.1 6.48v-24.012q0-3.132-1.152-4.446t-3.996-1.314h-40.032q-2.988 0-4.05 1.224t-1.062 4.536v24.228q1.548.828 3.186 1.44t2.916 1.008 2.916.666 2.556.396 2.52.144 2.106.018 2.034-.072 1.602-.072q2.448-.036 3.42.972.216.216.36.324.936.9 2.196 1.836.252-3.276 4.248-3.132.18 0 1.314.054t1.548.072 1.638.036 1.908-.036 1.962-.162 2.196-.306 2.232-.486 2.412-.702 2.43-.972 2.592-1.242zm5.868-.18q-4.356 5.364-13.392 9.072 3.024 10.26-.828 16.74-2.376 4.068-6.588 5.328-3.744 1.152-6.552-.54-3.096-1.836-2.952-5.904l-.036-11.736v-.036q-.288-.072-.882-.216t-.846-.18l-.036 12.168q.144 4.104-2.988 5.904-2.844 1.692-6.588.54-4.212-1.296-6.552-5.4-3.78-6.48-.792-16.668-9.036-3.708-13.392-9.072-.9-1.332-.144-2.268t2.16.036q.108.072.396.252t.396.288v-24.984q0-2.592 1.692-4.428t4.104-1.836h45.252q2.412 0 4.104 1.836t1.692 4.428v24.984l.756-.54q1.404-.972 2.16-.036t-.144 2.268z","TWITCH":"M32.256-48.815v15.624h-5.22v-15.624h5.22zm14.328 0v15.624h-5.22v-15.624h5.22zm0 27.36l9.108-9.144v-28.62h-42.984v37.764h11.736v7.812l7.812-7.812h14.328zm14.328-42.984v36.468l-15.624 15.624h-11.736l-7.812 7.812h-7.812v-7.812h-14.328v-41.688l3.924-10.404h53.388z","YELP":"M27.828-16.955v4.572q-.036 10.512-.216 10.98-.432 1.152-1.836 1.44-1.944.324-6.534-1.368t-5.85-3.204q-.468-.54-.612-1.296-.036-.432.144-.936.144-.36 1.224-1.692t6.516-7.776q.036 0 2.16-2.52.54-.684 1.422-.882t1.782.126q.864.36 1.35 1.044t.45 1.512zm-5.364-9.036q-.108 1.98-1.872 2.52l-4.32 1.404q-9.9 3.168-10.512 3.168-1.26-.072-1.944-1.296-.432-.9-.612-2.7-.288-2.736.036-5.994t1.08-4.482 2.016-1.152q.468 0 7.272 2.772 2.52 1.044 4.14 1.692l3.024 1.224q.828.324 1.278 1.098t.414 1.746zm29.736 10.692q-.252 1.944-3.294 5.796t-4.878 4.572q-1.332.504-2.268-.252-.504-.36-6.624-10.332l-1.692-2.772q-.504-.756-.414-1.656t.702-1.656q1.26-1.548 2.988-.936.036.036 4.284 1.44 7.308 2.376 8.712 2.862t1.692.738q1.008.792.792 2.196zm-24.192-22.752q.18 3.672-1.944 4.392-2.088.612-4.104-2.556l-13.608-21.528q-.288-1.26.684-2.232 1.476-1.548 7.47-3.222t8.082-1.134q1.44.36 1.764 1.62.108.648.792 10.998t.864 13.662zm23.832 3.888q.108 1.404-.936 2.124-.54.36-11.844 3.096-2.412.54-3.276.828l.036-.072q-.828.216-1.656-.144t-1.332-1.152q-1.08-1.692 0-3.132.036-.036 2.7-3.672 4.5-6.156 5.4-7.344t1.224-1.404q1.008-.684 2.34-.072 1.728.828 4.428 4.806t2.916 6.03v.108z","NEWSPAPER_O":"M36.864-46.007h-13.824v13.824h13.824v-13.824zm4.608 23.04v4.608h-23.04v-4.608h23.04zm0-27.648v23.04h-23.04v-23.04h23.04zm23.04 27.648v4.608h-18.432v-4.608h18.432zm0-9.216v4.608h-18.432v-4.608h18.432zm0-9.216v4.608h-18.432v-4.608h18.432zm0-9.216v4.608h-18.432v-4.608h18.432zm-55.296 34.56v-34.56h-4.608v34.56q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62zm59.904 0v-39.168h-55.296v39.168q0 1.188-.396 2.304h53.388q.936 0 1.62-.684t.684-1.62zm4.608-43.776v43.776q0 2.88-2.016 4.896t-4.896 2.016h-59.904q-2.88 0-4.896-2.016t-2.016-4.896v-39.168h9.216v-4.608h64.512z","WIFI":"M36.864-9.611q-.72 0-3.348-2.646t-2.628-3.366q0-1.152 2.25-1.944t3.726-.792 3.726.792 2.25 1.944q0 .72-2.628 3.366t-3.348 2.646zm9.72-9.756q-.072 0-1.44-.9t-3.654-1.8-4.626-.9-4.626.9-3.636 1.8-1.458.9q-.648 0-3.366-2.7t-2.718-3.348q0-.468.36-.828 2.808-2.772 7.056-4.356t8.388-1.584 8.388 1.584 7.056 4.356q.36.36.36.828 0 .648-2.718 3.348t-3.366 2.7zm9.828-9.792q-.396 0-.828-.288-4.896-3.78-9.072-5.562t-9.648-1.782q-3.06 0-6.138.792t-5.364 1.908-4.086 2.232-2.844 1.908-1.116.792q-.612 0-3.312-2.7t-2.7-3.348q0-.432.36-.792 4.752-4.752 11.52-7.38t13.68-2.628 13.68 2.628 11.52 7.38q.36.36.36.792 0 .648-2.7 3.348t-3.312 2.7zm9.756-9.756q-.396 0-.792-.324-6.444-5.652-13.374-8.514t-15.138-2.862-15.138 2.862-13.374 8.514q-.396.324-.792.324-.612 0-3.33-2.7t-2.718-3.348q0-.468.36-.828 6.732-6.696 16.02-10.368t18.972-3.672 18.972 3.672 16.02 10.368q.36.36.36.828 0 .648-2.718 3.348t-3.33 2.7z","CALCULATOR":"M13.824-9.143q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm13.824 0q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm-13.824-13.824q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm27.648 13.824q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm-13.824-13.824q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm-13.824-13.824q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm27.648 13.824q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm-13.824-13.824q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm27.648 27.648v-13.824q0-1.872-1.368-3.24t-3.24-1.368-3.24 1.368-1.368 3.24v13.824q0 1.872 1.368 3.24t3.24 1.368 3.24-1.368 1.368-3.24zm-13.824-27.648q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm13.824-11.52v-9.216q0-.936-.684-1.62t-1.62-.684h-46.08q-.936 0-1.62.684t-.684 1.62v9.216q0 .936.684 1.62t1.62.684h46.08q.936 0 1.62-.684t.684-1.62zm0 11.52q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm4.608-23.04v55.296q0 1.872-1.368 3.24t-3.24 1.368h-50.688q-1.872 0-3.24-1.368t-1.368-3.24v-55.296q0-1.872 1.368-3.24t3.24-1.368h50.688q1.872 0 3.24 1.368t1.368 3.24z","PAYPAL":"M54.684-41.183q.648 3.024-.144 7.344-3.132 15.984-20.34 15.984h-1.584q-.9 0-1.584.594t-.864 1.53l-.144.684-1.98 12.456-.072.54q-.18.936-.882 1.53t-1.602.594h-9.036q-.756 0-1.188-.54t-.324-1.296q.324-2.016.954-6.048t.954-6.048.972-6.03.972-6.03q.18-1.332 1.548-1.332h4.716q4.788.072 8.496-.756 6.3-1.404 10.332-5.184 3.672-3.42 5.58-8.856.864-2.52 1.26-4.788.036-.216.09-.27t.126-.036.216.126q2.844 2.124 3.528 5.832zm-6.192-10.152q0 3.852-1.656 8.496-2.88 8.388-10.872 11.34-4.068 1.44-9.072 1.512 0 .036-3.24.036l-3.24-.036q-3.6 0-4.248 3.456-.072.288-3.06 19.08-.036.36-.432.36h-10.62q-.792 0-1.314-.594t-.414-1.386l8.352-52.956q.18-1.044.99-1.728t1.854-.684h21.528q1.224 0 3.51.468t4.014 1.152q3.852 1.476 5.886 4.428t2.034 7.056z","GOOGLE_WALLET":"M15.876-40.247q1.152 0 1.872.936 9.576 13.104 13.032 27.864h-16.056q-4.572-15.876-13.212-26.964-.432-.576-.108-1.206t1.044-.63h13.428zm20.124 12.852q-1.764 7.164-4.5 14.148-2.844-11.16-9.216-21.384 1.44-7.956 1.584-16.164 7.596 12.24 12.132 23.4zm3.564-25.524q8.46 11.664 13.842 25.146t6.642 27.846h-16.236q-1.476-23.94-19.908-52.992h15.66zm24.948 20.736q0 15.264-3.636 29.232-2.412-20.16-12.924-38.988-.9-10.836-3.816-21.024-.144-.576.198-1.026t.918-.45h12.924q.756 0 1.386.468t.81 1.188q4.14 14.724 4.14 30.6z","CC_VISA":"M71.1-28.799h-4.968q.504-1.332 2.376-6.444l.108-.324q.144-.36.36-.936t.324-.936l.432 1.98zm-51.984-2.34l-2.088-10.62q-.396-1.944-2.7-1.944h-9.648l-.072.468q11.196 2.844 14.508 12.096zm6.444-12.564l-5.832 15.768-.612-3.204q-.936-2.52-3.06-4.662t-4.716-3.186l4.86 18.36h6.3l9.396-23.076h-6.336zm5.004 23.112h5.976l3.744-23.112h-5.976zm27.648-22.536q-2.484-.972-5.364-.972-4.428 0-7.236 2.124t-2.844 5.508q-.036 3.672 5.22 6.264 1.728.828 2.412 1.476t.684 1.404q0 1.08-1.08 1.656t-2.484.576q-3.096 0-5.616-1.188l-.792-.396-.828 5.184q2.664 1.224 6.66 1.224 4.68.036 7.506-2.124t2.898-5.76q0-3.816-5.04-6.264-1.764-.9-2.556-1.512t-.792-1.368q0-.792.882-1.386t2.538-.594q2.52-.036 4.464.864l.54.288zm15.3-.576h-4.608q-2.34 0-3.132 1.944l-8.856 21.168h6.264l1.26-3.456h7.632q.18.792.72 3.456h5.544zm9.432-11.52v46.08q0 1.872-1.368 3.24t-3.24 1.368h-73.728q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h73.728q1.872 0 3.24 1.368t1.368 3.24z","CC_MASTERCARD":"M24.156-30.851h-.468q-1.692 0-1.692 1.152 0 .792.72.792.612 0 1.008-.54t.432-1.404zm14.22-1.296h2.232v-.108q.036-.144.018-.234t-.036-.252-.072-.288-.162-.234-.27-.18-.414-.072q-1.008 0-1.296 1.368zm19.44 1.296h-.432q-1.728 0-1.728 1.152 0 .792.72.792.612 0 1.008-.54t.432-1.404zm11.484-.936q0-1.476-1.08-1.476-.684 0-1.116.72t-.432 1.836q0 1.512 1.008 1.512.72 0 1.17-.72t.45-1.872zm-52.02-5.076h3.132l-1.584 9.432h-2.016l1.152-7.236-2.556 7.236h-1.404l-.144-7.2-1.224 7.2h-1.908l1.584-9.432h2.916l.072 5.868zm9.108 3.852q0 .216-.144 1.512-.576 3.636-.612 4.068h-1.692l.036-.792q-.72.936-2.088.936-.828 0-1.35-.576t-.522-1.512q0-1.404.936-2.178t2.628-.774q.504 0 .828.036l.018-.198.036-.162.018-.108q0-.72-1.296-.72-1.044 0-2.124.36 0-.144.252-1.728 1.368-.396 2.412-.396 2.664 0 2.664 2.232zm5.616-2.088l-.288 1.764q-.792-.108-1.476-.108-.972 0-.972.612 0 .288.162.432t.774.396q1.44.684 1.44 2.16 0 2.592-3.132 2.556-1.224 0-2.088-.216 0-.072.252-1.764 1.044.288 1.836.288 1.152 0 1.152-.684 0-.252-.162-.414t-.774-.45q-1.548-.72-1.548-2.124 0-2.592 3.024-2.592 1.08 0 1.8.144zm3.168 0h1.008l-.252 1.872h-1.044q-.072.612-.234 1.458t-.252 1.386-.09.648q0 .576.684.576.288 0 .576-.072l-.288 1.692q-.756.252-1.44.252-1.548 0-1.62-1.692 0-.432.288-2.016.108-.72.9-5.256h1.98zm7.308 2.628q0 .828-.252 1.872h-3.996q-.108.792.36 1.188t1.368.396q1.08 0 2.088-.504l-.324 1.944q-1.08.288-2.052.288-3.42 0-3.42-3.42 0-1.98.99-3.258t2.502-1.278q1.26 0 1.998.756t.738 2.016zm5.004-2.664q-.468.828-.792 2.232-.792-.072-1.116.864t-.9 4.608h-2.016l.108-.504q.792-4.68 1.044-7.164h1.836l-.108 1.188q.504-.756.918-1.062t1.026-.162zm6.732-1.476l-.324 2.052q-1.008-.504-1.8-.504-1.116 0-1.836.99t-.72 2.538q0 1.08.486 1.692t1.386.612q.756 0 1.728-.468l-.36 2.124q-1.008.288-1.8.288-1.62 0-2.574-1.098t-.954-2.97q0-2.52 1.278-4.122t3.294-1.602q.936 0 2.196.468zm5.832 3.6q0 .648-.144 1.512-.468 2.844-.612 4.068h-1.656l.036-.792q-.72.936-2.124.936-.828 0-1.332-.576t-.504-1.512q0-1.404.918-2.178t2.61-.774q.54 0 .828.036.072-.252.072-.468 0-.72-1.296-.72-1.044 0-2.124.36 0-.144.288-1.728 1.368-.396 2.412-.396 2.628 0 2.628 2.232zm5.076-2.124q-.504.864-.756 2.232-.828-.072-1.134.828t-.918 4.644h-2.016l.108-.504q.684-3.744 1.044-7.164h1.872q0 .396-.144 1.188.54-.756.954-1.062t.99-.162zm5.076-1.728h2.016l-1.548 9.432h-1.908l.108-.684q-.828.828-1.872.828-1.116 0-1.782-.864t-.666-2.304q0-1.908.99-3.312t2.322-1.404q1.116 0 1.908 1.044zm3.996 4.68q0-5.328-2.61-9.828t-7.128-7.128-9.846-2.628q-6.516 0-11.808 3.96 4.572 4.176 6.156 10.224h-1.8q-1.584-5.4-5.688-9.108-4.104 3.708-5.688 9.108h-1.8q1.584-6.048 6.156-10.224-5.292-3.96-11.808-3.96-5.328 0-9.846 2.628t-7.128 7.128-2.61 9.828 2.61 9.828 7.128 7.128 9.846 2.628q6.516 0 11.808-3.96-4.32-3.996-5.94-9.504h1.8q1.656 4.968 5.472 8.388 3.816-3.42 5.472-8.388h1.8q-1.62 5.508-5.94 9.504 5.292 3.96 11.808 3.96 5.328 0 9.846-2.628t7.128-7.128 2.61-9.828zm8.748-23.04v46.08q0 1.872-1.368 3.24t-3.24 1.368h-73.728q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h73.728q1.872 0 3.24 1.368t1.368 3.24z","CC_DISCOVER":"M11.268-36.467q0 1.836-1.296 3.024-1.044.936-3.204.936h-.612v-7.92h.612q2.196 0 3.204.972 1.296 1.116 1.296 2.988zm63.936-2.34q0 1.872-2.304 1.872h-.684v-3.636h.72q2.268 0 2.268 1.764zm-61.524 2.34q0-2.664-1.8-4.338t-4.644-1.674h-3.42v11.988h3.42q2.664 0 4.284-1.368 2.16-1.836 2.16-4.608zm1.08 5.976h2.34v-11.988h-2.34v11.988zm11.52-3.636q0-1.44-.738-2.232t-2.718-1.512q-1.044-.36-1.422-.684t-.378-.828q0-.576.486-.954t1.242-.378q1.044 0 1.908.972l1.224-1.584q-1.476-1.332-3.528-1.332-1.584 0-2.664.99t-1.08 2.43q0 1.26.648 1.998t2.304 1.314q1.332.468 1.62.684.684.432.684 1.224 0 .72-.504 1.206t-1.296.486q-1.728 0-2.556-1.584l-1.512 1.44q1.584 2.304 4.14 2.304 1.836 0 2.988-1.098t1.152-2.862zm10.008 3.24v-2.772q-1.332 1.332-2.808 1.332-1.764 0-2.898-1.17t-1.134-2.97q0-1.728 1.134-2.934t2.79-1.206q1.548 0 2.916 1.368v-2.772q-1.44-.72-2.88-.72-2.664 0-4.518 1.818t-1.854 4.446 1.836 4.446 4.5 1.818q1.512 0 2.916-.684zm44.352 21.744v-18.972q-2.34 1.44-5.202 3.024t-8.55 4.212-11.862 4.95-15.03 4.842-18.144 4.248h56.484q.936 0 1.62-.684t.684-1.62zm-30.636-27.252q0-2.7-1.908-4.608t-4.608-1.908-4.608 1.908-1.908 4.608 1.908 4.608 4.608 1.908 4.608-1.908 1.908-4.608zm5.472 6.228l5.184-12.312h-2.556l-3.24 8.064-3.204-8.064h-2.556l5.112 12.312h1.26zm6.228-.324h6.624v-2.016h-4.284v-3.24h4.14v-2.016h-4.14v-2.664h4.284v-2.052h-6.624v11.988zm14.076 0h2.88l-3.78-5.04q2.736-.576 2.736-3.384 0-1.692-1.116-2.628t-3.132-.936h-3.492v11.988h2.34v-4.788h.324zm7.164-24.516v45.648q0 2.016-1.386 3.42t-3.366 1.404h-73.44q-1.98 0-3.366-1.404t-1.386-3.42v-45.648q0-2.016 1.386-3.42t3.366-1.404h73.44q1.98 0 3.366 1.404t1.386 3.42z","CC_AMEX":"M4.284-39.887h3.204l-1.62-3.888zm22.356 18.936l2.664-2.844-2.52-2.844h-5.868v1.764h5.112v1.98h-5.112v1.944h5.724zm5.688-2.808l3.564 3.96v-7.812zm10.368-1.692q0-1.188-1.44-1.188h-3.024v2.484h2.988q1.476 0 1.476-1.296zm10.404-.144q0-1.044-1.512-1.044h-2.952v2.196h2.916q1.548 0 1.548-1.152zm-10.008-16.776q0-1.044-1.512-1.044h-2.952v2.16h2.916q1.548 0 1.548-1.116zm16.524 2.484h3.204l-1.584-3.888zm-34.452-5.58v9.756h-2.376v-7.632l-3.384 7.632h-2.052l-3.384-7.632v7.632h-4.752l-.9-2.16h-4.86l-.9 2.16h-2.52l4.176-9.756h3.456l3.96 9.252v-9.252h3.816l3.06 6.624 2.772-6.624h3.888zm20.016 20.016q0 .72-.198 1.26t-.504.9-.81.594-.936.36-1.134.162-1.134.036-1.17-.018-1.062-.018v3.276h-4.536l-2.88-3.24-2.988 3.24h-9.216v-9.756h9.36l2.88 3.204 2.952-3.204h7.452q3.924 0 3.924 3.204zm-10.476-12.276v2.016h-7.812v-9.756h7.812v2.052h-5.472v1.764h5.328v1.98h-5.328v1.944h5.472zm48.24 20.124v8.244q0 1.98-1.386 3.402t-3.366 1.422h-73.44q-1.98 0-3.366-1.422t-1.386-3.402v-24.408h3.996l.9-2.196h1.98l.9 2.196h7.848v-1.656l.684 1.656h4.068l.72-1.692v1.692h19.476v-3.564l.36-.036q.36 0 .36.504v3.096h10.044v-.828q.828.432 1.98.648t1.89.234 2.268-.018 1.854-.036l.9-2.196h2.016l.9 2.196h8.172v-2.088l1.224 2.088h6.552v-13.608h-6.48v1.584l-.9-1.584h-6.66v1.584l-.828-1.584h-8.964q-2.484 0-3.924.792v-.792h-6.192v.792q-.864-.792-2.628-.792h-22.608l-1.548 3.492-1.548-3.492h-7.128v1.584l-.792-1.584h-6.084l-2.808 6.444v-14.076q0-1.98 1.386-3.402t3.366-1.422h73.44q1.98 0 3.366 1.422t1.386 3.402v24.408h-4.32q-1.836 0-2.916.792v-.792h-6.372q-1.98 0-2.808.792v-.792h-11.376v.792q-1.116-.792-3.132-.792h-7.524v.792q-.828-.792-3.276-.792h-8.424l-1.944 2.088-1.8-2.088h-12.564v13.608h12.348l1.98-2.124 1.872 2.124h7.596v-3.204h.756q2.124 0 3.24-.468v3.672h6.264v-3.564h.288q.288 0 .36.072t.072.36v3.132h19.044q2.052 0 3.168-.864v.864h6.048q2.16 0 3.42-.612zm-27.288-8.424q0 .828-.432 1.548t-1.224 1.044q.9.324 1.224.936t.324 1.656v1.944h-2.34v-1.62q0-1.188-.432-1.566t-1.656-.378h-2.484v3.564h-2.34v-9.756h5.544q1.728 0 2.772.54t1.044 2.088zm-9.972-16.812q0 .864-.45 1.584t-1.206 1.044q.936.324 1.242.918t.306 1.674v1.908h-2.34q0-.324.018-.954t0-.9-.108-.666-.306-.576-.63-.306-1.062-.126h-2.52v3.528h-2.304v-9.756l5.508.036q1.764 0 2.808.522t1.044 2.07zm19.044 21.924v2.016h-7.776v-9.756h7.776v2.016h-5.436v1.764h5.328v1.98h-5.328v1.944zm-15.336-24.552v9.756h-2.376v-9.756h2.376zm24.948 23.472q0 3.096-3.672 3.096h-4.536v-2.088h4.536q1.224 0 1.224-.9 0-.576-.612-.756t-1.494-.18-1.782-.126-1.512-.81-.612-1.98q0-1.404.936-2.16t2.376-.756h4.68v2.052h-4.284q-1.296 0-1.296.9 0 .576.63.738t1.512.144 1.764.09 1.512.774.63 1.962zm8.604-1.8v3.636q-.864 1.26-3.168 1.26h-4.5v-2.088h4.5q1.188 0 1.188-.9 0-.468-.45-.684t-1.116-.198-1.44-.072-1.44-.288-1.116-.864-.45-1.746q0-1.404.954-2.16t2.394-.756h4.644v2.052h-4.248q-1.296 0-1.296.9 0 .72 1.044.792t2.466.18 2.034.936zm-5.94-21.636v9.72h-3.312l-4.392-7.308v7.308h-4.752l-.936-2.16h-4.824l-.9 2.16h-2.7q-4.644 0-4.644-4.788 0-4.968 4.788-4.968h2.268v2.124q-.252 0-1.008-.036t-1.026-.018-.828.072-.774.234-.522.486-.414.828-.108 1.206q0 1.368.486 2.088t1.782.72h1.044l3.312-7.668h3.492l3.924 9.216v-9.216h3.564l4.104 6.768v-6.768h2.376z","CC_PAYPAL":"M26.82-31.823q0 1.332-.918 2.214t-2.25.882q-1.044 0-1.674-.576t-.63-1.584q0-1.332.9-2.25t2.232-.918q1.008 0 1.674.594t.666 1.638zm28.26-5.364q0 1.512-.792 2.052t-2.376.54l-1.152.036.612-3.852q.072-.396.468-.396h.648q.792 0 1.26.072t.9.45.432 1.098zm12.636 5.364q0 1.296-.918 2.196t-2.214.9q-1.044 0-1.692-.576t-.648-1.584q0-1.332.9-2.25t2.232-.918q1.008 0 1.674.594t.666 1.638zm-49.248-6.156q0-2.124-1.386-3.078t-3.618-.954h-5.76q-.684 0-.756.684l-2.34 14.688q-.036.216.108.396t.36.18h2.736q.72 0 .792-.684l.648-3.96q.036-.288.252-.468t.54-.234.612-.054.684.036.504.036q3.096 0 4.86-1.746t1.764-4.842zm11.124 11.232l1.476-9.396q.036-.216-.108-.396t-.36-.18h-2.736q-.504 0-.612 1.188-.972-1.44-3.42-1.44-2.592 0-4.41 1.944t-1.818 4.572q0 2.124 1.242 3.384t3.33 1.26q1.008 0 2.088-.432t1.728-1.152q-.144.432-.144.756 0 .576.468.576h2.484q.684 0 .792-.684zm16.092-9.468q0-.18-.144-.342t-.324-.162h-2.772q-.396 0-.648.36l-3.816 5.616-1.584-5.4q-.18-.576-.792-.576h-2.7q-.18 0-.324.162t-.144.342q0 .072.702 2.124t1.512 4.428.846 2.52q-2.952 4.032-2.952 4.32 0 .468.468.468h2.772q.396 0 .648-.36l9.18-13.248q.072-.072.072-.252zm13.68-1.764q0-2.124-1.386-3.078t-3.618-.954h-5.724q-.72 0-.792.684l-2.34 14.688q-.036.216.108.396t.36.18h2.952q.432 0 .576-.468l.648-4.176q.036-.288.252-.468t.54-.234.612-.054.684.036.504.036q3.096 0 4.86-1.746t1.764-4.842zm11.124 11.232l1.476-9.396q.036-.216-.108-.396t-.36-.18h-2.736q-.504 0-.612 1.188-.936-1.44-3.42-1.44-2.592 0-4.41 1.944t-1.818 4.572q0 2.124 1.242 3.384t3.33 1.26q1.044 0 2.124-.432t1.692-1.152q0 .036-.072.324t-.072.432q0 .576.468.576h2.484q.684 0 .792-.684zm7.848-14.724v-.036q0-.504-.468-.504h-2.664q-.396 0-.468.396l-2.34 14.976-.036.072q0 .18.144.342t.36.162h2.376q.684 0 .756-.684zm-64.224 4.824q-.18 1.26-.936 1.656t-2.16.396l-1.188.036.612-3.852q.072-.396.468-.396h.684q1.44 0 2.088.414t.432 1.746zm68.832-18.576v46.08q0 1.872-1.368 3.24t-3.24 1.368h-73.728q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h73.728q1.872 0 3.24 1.368t1.368 3.24z","CC_STRIPE":"M57.492-31.931q0 2.484-.756 3.816-.684 1.26-1.872 1.26-.828 0-1.476-.324v-8.064q1.044-1.08 2.052-1.08 2.052 0 2.052 4.392zm15.768-1.296h-3.96q.216-3.528 2.016-3.528 1.836 0 1.944 3.528zm-56.124 4.86q0-2.124-1.188-3.294t-3.636-2.07q-1.296-.468-1.872-.864t-.576-.9q0-.936 1.368-.936 2.088 0 4.464 1.188l.648-4.032q-2.412-1.152-5.364-1.152-2.772 0-4.428 1.368-1.728 1.404-1.728 3.924 0 2.088 1.17 3.258t3.582 2.034q1.404.504 1.962.918t.558.99q0 1.116-1.728 1.116-1.044 0-2.52-.45t-2.592-1.098l-.648 4.068q2.592 1.476 6.048 1.476 2.916 0 4.644-1.332 1.836-1.476 1.836-4.212zm10.62-7.74l.684-3.996h-3.456v-4.86l-4.644.756-.648 4.104-1.656.288-.612 3.708h2.232v7.884q0 3.024 1.584 4.32 1.368 1.08 3.996 1.08 1.152 0 2.844-.396v-4.248q-1.152.252-1.584.252-1.512 0-1.512-1.8v-7.092h2.772zm11.376.9v-5.004q-.54-.108-1.008-.108-1.152 0-1.998.576t-1.206 1.656l-.36-2.016h-4.716v16.956h5.4v-11.016q.936-1.116 2.952-1.116.576 0 .936.072zm1.332 12.06h5.4v-16.956h-5.4v16.956zm22.392-8.964q0-4.392-1.62-6.444-1.44-1.872-3.996-1.872-2.304 0-4.212 2.016l-.288-1.692h-4.752v23.22l5.4-.9v-5.436q1.296.396 2.448.396 2.988 0 4.824-2.016 2.196-2.34 2.196-7.272zm-16.848-12.528q0-1.188-.828-2.016t-2.016-.828-2.016.828-.828 2.016.828 2.034 2.016.846 2.016-.846.828-2.034zm32.328 12.852q0-4.068-1.728-6.336-1.8-2.304-5.184-2.304-3.456 0-5.454 2.376t-1.998 6.48q0 4.608 2.268 6.768 1.98 1.98 5.796 1.98 3.636 0 5.76-1.44l-.576-3.708q-2.052 1.116-4.608 1.116-1.548 0-2.268-.684-.828-.684-1.008-2.376h8.928q.072-.504.072-1.872zm4.608-23.436v46.08q0 1.872-1.368 3.24t-3.24 1.368h-73.728q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h73.728q1.872 0 3.24 1.368t1.368 3.24z","BELL_SLASH":"M56.088-33.767q2.196 12.816 10.728 20.016 0 1.872-1.368 3.24t-3.24 1.368h-16.128q0 3.816-2.7 6.516t-6.516 2.7-6.498-2.682-2.718-6.498zm-19.224 30.96q.576 0 .576-.576t-.576-.576q-2.124 0-3.654-1.53t-1.53-3.654q0-.576-.576-.576t-.576.576q0 2.628 1.854 4.482t4.482 1.854zm36.072-57.6q.288.36.27.846t-.378.81l-67.392 58.392q-.36.288-.846.252t-.774-.396l-3.024-3.456q-.288-.36-.27-.846t.378-.774l6.696-5.796q-.684-1.152-.684-2.376 1.8-1.512 3.276-3.168t3.06-4.302 2.682-5.706 1.8-7.416.702-9.36q0-5.472 4.212-10.17t11.052-5.706q-.288-.684-.288-1.404 0-1.44 1.008-2.448t2.448-1.008 2.448 1.008 1.008 2.448q0 .72-.288 1.404 4.464.648 7.884 2.97t5.328 5.67l15.048-13.068q.36-.288.846-.252t.774.396z","BELL_SLASH_O":"M37.44-3.383q0-.576-.576-.576-2.124 0-3.654-1.53t-1.53-3.654q0-.576-.576-.576t-.576.576q0 2.628 1.854 4.482t4.482 1.854q.576 0 .576-.576zm-19.332-17.1l31.572-27.36q-1.512-3.168-4.77-5.274t-8.046-2.106q-3.348 0-6.102 1.134t-4.374 2.898-2.484 3.708-.864 3.78q0 13.824-4.932 23.22zm48.708 6.732q0 1.872-1.368 3.24t-3.24 1.368h-16.128q0 3.816-2.7 6.516t-6.516 2.7-6.498-2.682-2.718-6.498l5.364-4.644h27.252q-5.976-6.732-8.172-16.524l3.996-3.492q2.196 12.816 10.728 20.016zm3.096-50.112l3.024 3.456q.288.36.27.846t-.378.81l-67.392 58.392q-.36.288-.846.252t-.774-.396l-3.024-3.456q-.288-.36-.27-.846t.378-.774l6.696-5.796q-.684-1.152-.684-2.376 1.8-1.512 3.276-3.168t3.06-4.302 2.682-5.706 1.8-7.416.702-9.36q0-5.472 4.212-10.17t11.052-5.706q-.288-.684-.288-1.404 0-1.44 1.008-2.448t2.448-1.008 2.448 1.008 1.008 2.448q0 .72-.288 1.404 4.464.648 7.884 2.97t5.328 5.67l15.048-13.068q.36-.288.846-.252t.774.396z","TRASH":"M18.432-14.903v-25.344q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v25.344q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm9.216 0v-25.344q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v25.344q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm9.216 0v-25.344q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v25.344q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm-19.584-35.712h16.128l-1.728-4.212q-.252-.324-.612-.396h-11.412q-.36.072-.612.396zm33.408 1.152v2.304q0 .504-.324.828t-.828.324h-3.456v34.128q0 2.988-1.692 5.166t-4.068 2.178h-29.952q-2.376 0-4.068-2.106t-1.692-5.094v-34.272h-3.456q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h11.124l2.52-6.012q.54-1.332 1.944-2.268t2.844-.936h11.52q1.44 0 2.844.936t1.944 2.268l2.52 6.012h11.124q.504 0 .828.324t.324.828z","COPYRIGHT":"M41.4-25.775v3.924q0 1.8-1.314 3.204t-3.384 2.178-4.248 1.17-4.23.396q-7.38 0-12.33-5.004t-4.95-12.456q0-7.308 4.896-12.204t12.204-4.896q1.224 0 2.718.162t3.348.648 3.33 1.224 2.484 2.034 1.008 2.916v3.924q0 .576-.576.576h-4.248q-.576 0-.576-.576v-2.52q0-1.548-2.358-2.43t-4.95-.882q-5.04 0-8.226 3.294t-3.186 8.55q0 5.436 3.294 8.982t8.406 3.546q2.448 0 4.968-.864t2.52-2.376v-2.52q0-.252.162-.414t.378-.162h4.284q.216 0 .396.162t.18.414zm-13.752-29.448q-4.68 0-8.946 1.836t-7.344 4.914-4.914 7.344-1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946-1.836 7.344-4.914 4.914-7.344 1.836-8.946-1.836-8.946-4.914-7.344-7.344-4.914-8.946-1.836zm27.648 23.04q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","AT":"M34.992-36.539q0-3.888-1.926-6.084t-5.31-2.196q-2.268 0-4.464 1.098t-3.96 3.042-2.862 4.932-1.098 6.48q0 4.032 1.926 6.228t5.418 2.196q3.456 0 6.336-2.394t4.41-5.976 1.53-7.326zm20.304 4.356q0 3.996-1.332 7.092t-3.546 4.86-4.734 2.682-5.22.99l-.558.018-.594.018q-3.42 0-5.112-1.908-1.008-1.188-1.188-2.988-1.872 2.376-4.734 3.96t-6.246 1.584q-5.796 0-8.982-3.438t-3.186-9.702q0-5.652 2.376-10.44t6.444-7.578 8.856-2.79q3.132 0 5.58 1.278t3.816 3.582l.072-.684.396-2.016q.036-.216.198-.432t.342-.216h4.248q.18 0 .468.396.18.18.108.576l-4.32 22.104q-.18.864-.18 1.728 0 1.404.45 1.872t1.602.468q1.008-.036 2.052-.198t2.628-.864 2.772-1.8 2.052-3.222.864-4.932q0-10.512-6.264-16.776t-16.776-6.264q-4.68 0-8.946 1.836t-7.344 4.914-4.914 7.344-1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836q8.208 0 14.58-5.184.396-.324.864-.288t.756.432l1.476 1.764q.288.432.252.864-.072.468-.432.792-3.672 2.988-8.19 4.608t-9.306 1.62q-5.616 0-10.728-2.196t-8.82-5.904-5.904-8.82-2.196-10.728 2.196-10.728 5.904-8.82 8.82-5.904 10.728-2.196q12.384 0 20.016 7.632t7.632 20.016z","EYEDROPPER":"M61.128-61.055q3.384 3.384 3.384 8.154t-3.384 8.118l-8.1 8.028 3.744 3.744q.36.36.36.828t-.36.828l-7.56 7.56q-.36.36-.828.36t-.828-.36l-3.78-3.78-21.708 21.708q-1.332 1.332-3.24 1.332h-7.308l-9.216 4.608-2.304-2.304 4.608-9.216v-7.308q0-1.908 1.332-3.24l21.708-21.708-3.78-3.78q-.36-.36-.36-.828t.36-.828l7.56-7.56q.36-.36.828-.36t.828.36l3.744 3.744 8.028-8.1q3.348-3.384 8.118-3.384t8.154 3.384zm-42.696 49.608l20.736-20.736-6.912-6.912-20.736 20.736v6.912h6.912z","PAINT_BRUSH":"M58.14-64.439q2.52 0 4.41 1.674t1.89 4.194q0 2.268-1.62 5.436-11.952 22.644-16.74 27.072-3.492 3.276-7.848 3.276-4.536 0-7.794-3.33t-3.258-7.902q0-4.608 3.312-7.632l22.968-20.844q2.124-1.944 4.68-1.944zm-32.724 37.224q1.404 2.736 3.834 4.68t5.418 2.736l.036 2.556q.144 7.668-4.662 12.492t-12.546 4.824q-4.428 0-7.848-1.674t-5.49-4.59-3.114-6.588-1.044-7.92q.252.18 1.476 1.08t2.232 1.602 2.124 1.314 1.656.612q1.476 0 1.98-1.332.9-2.376 2.07-4.05t2.502-2.736 3.168-1.71 3.708-.918 4.5-.378z","BIRTHDAY_CAKE":"M64.512-13.751v13.824h-64.512v-13.824q1.62 0 3.06-.504t2.124-.99 1.692-1.35q1.08-.972 1.854-1.368t2.034-.396 1.998.396 1.89 1.368q1.044.9 1.692 1.368t2.088.972 3.096.504q1.62 0 3.06-.522t2.088-.972 1.728-1.35q.756-.684 1.17-.972t1.116-.54 1.566-.252q1.26 0 2.034.396t1.854 1.368q1.008.864 1.692 1.35t2.124.99 3.06.504 3.06-.504 2.124-.99 1.692-1.35q1.08-.972 1.854-1.368t2.034-.396q1.224 0 1.998.396t1.854 1.368q1.008.864 1.692 1.35t2.124.99 3.06.504zm0-11.52v6.912q-1.26 0-1.998-.396t-1.89-1.368q-1.044-.9-1.692-1.368t-2.088-.972-3.06-.504q-1.656 0-3.096.504t-2.088.972-1.692 1.368q-.792.684-1.188.972t-1.116.54-1.584.252q-1.26 0-2.034-.396t-1.854-1.368q-1.044-.9-1.692-1.368t-2.088-.972-3.096-.504q-1.62 0-3.06.522t-2.088.972-1.728 1.35q-.756.684-1.17.972t-1.116.54-1.566.252q-1.26 0-2.034-.396t-1.854-1.368q-1.008-.864-1.692-1.35t-2.124-.99-3.06-.504q-1.656 0-3.096.504t-2.088.972-1.692 1.368q-1.08.972-1.854 1.368t-2.034.396v-6.912q0-2.88 2.016-4.896t4.896-2.016h2.304v-16.128h9.216v16.128h9.216v-16.128h9.216v16.128h9.216v-16.128h9.216v16.128h2.304q2.88 0 4.896 2.016t2.016 4.896zm-46.08-31.104q0 2.772-1.296 4.266t-3.312 1.494q-1.908 0-3.258-1.35t-1.35-3.258q0-1.044.342-1.836t.846-1.224 1.116-1.008 1.116-1.134.846-1.602.342-2.412q1.368 0 2.988 2.664t1.62 5.4zm18.432 0q0 2.772-1.296 4.266t-3.312 1.494q-1.908 0-3.258-1.35t-1.35-3.258q0-1.044.342-1.836t.846-1.224 1.116-1.008 1.116-1.134.846-1.602.342-2.412q1.368 0 2.988 2.664t1.62 5.4zm18.432 0q0 2.772-1.296 4.266t-3.312 1.494q-1.908 0-3.258-1.35t-1.35-3.258q0-1.044.342-1.836t.846-1.224 1.116-1.008 1.116-1.134.846-1.602.342-2.412q1.368 0 2.988 2.664t1.62 5.4z","AREA_CHART":"M73.728-9.143v4.608h-73.728v-55.296h4.608v50.688h69.12zm-13.824-36.864l9.216 32.256h-59.904v-20.736l16.128-20.736 20.736 20.736z","PIE_CHART":"M27.648-32.399l19.656 19.656q-3.816 3.888-8.91 6.048t-10.746 2.16q-7.524 0-13.878-3.708t-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708v27.432zm6.732.216h27.828q0 5.652-2.16 10.746t-6.048 8.91zm25.524-4.608h-27.648v-27.648q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878z","LINE_CHART":"M73.728-9.143v4.608h-73.728v-55.296h4.608v50.688h69.12zm-4.608-44.928v15.66q0 .756-.702 1.062t-1.278-.27l-4.356-4.356-22.788 22.788q-.36.36-.828.36t-.828-.36l-8.388-8.388-14.976 14.976-6.912-6.912 21.06-21.06q.36-.36.828-.36t.828.36l8.388 8.388 16.704-16.704-4.356-4.356q-.576-.576-.27-1.278t1.062-.702h15.66q.504 0 .828.324t.324.828z","LASTFM":"M46.512-39.095q0 .216.36 1.476.36 1.044.9 1.782t1.476 1.224 1.584.72 1.98.594q11.7 3.276 11.7 11.952 0 5.256-3.798 8.73t-9.162 3.474q-2.124 0-4.014-.666t-3.294-1.638-2.772-2.682-2.268-3.15-1.926-3.726-1.566-3.708-1.422-3.834-1.278-3.42q-1.152-2.916-2.214-4.806t-2.646-3.474-3.744-2.304-5.112-.72q-3.456 0-6.588 1.998t-4.968 5.202-1.836 6.66q0 5.76 3.834 10.062t9.486 4.302q6.372 0 9.288-3.42 2.016-2.268 2.988-4.176l3.024 5.472q-.54 1.224-1.584 2.52l.036.036q-4.716 5.472-13.968 5.472-5.292 0-9.702-2.844t-6.858-7.47-2.448-9.882q0-3.78 1.566-7.416t4.176-6.354 6.192-4.374 7.362-1.656q3.132 0 5.724.684t4.446 1.8 3.42 2.88 2.61 3.564 2.106 4.212 1.818 4.482 1.8 4.698 1.98 4.572q3.456 7.2 8.388 7.2 2.916 0 4.986-1.746t2.07-4.626q0-1.512-.684-2.592t-1.818-1.656-2.61-1.134-3.042-.972-3.15-1.224-2.916-1.872-2.34-2.952-1.404-4.41q-.108-.576-.108-1.188 0-3.96 3.15-6.912t7.146-2.808q2.808.108 4.338.522t3.258 1.926h-.036q.432.396.828.882t.936 1.296.684.99l-4.644 3.564q-.936-1.764-1.944-2.52v-.036q-.828-.756-3.492-.756-1.764 0-3.024 1.188t-1.26 2.988z","LASTFM_SQUARE":"M51.552-26.567q0-6.228-8.424-8.604-1.26-.36-1.908-.594t-1.368-.9-1.044-1.674q0-.072-.072-.306t-.108-.432-.036-.27q0-1.296.882-2.142t2.178-.846q1.944 0 2.556.54h-.036q.72.54 1.404 1.836l3.348-2.556q-1.404-1.944-1.764-2.304-1.188-1.044-2.43-1.404t-3.078-.36q-2.88 0-5.112 2.07t-2.232 4.95q0 .252.072.828.576 3.456 2.322 5.04t5.346 2.628q1.044.288 1.764.558t1.62.774 1.386 1.242.486 1.674v.18q.036 2.088-1.458 3.348t-3.618 1.26q-3.492 0-6.012-5.184-.828-1.692-1.854-4.374t-1.728-4.518-1.944-3.978-2.664-3.438-3.726-2.178-5.292-.882q-3.636 0-6.912 2.016t-5.184 5.328-1.8 6.912v.036q.144 3.888 1.818 7.164t4.806 5.31 7.056 2.034q6.696 0 10.044-3.96.72-.972 1.116-1.836l-2.16-3.924q-1.512 2.88-3.564 4.176t-5.256 1.296q-4.14 0-6.876-3.132t-2.736-7.344q0-3.78 2.952-6.804t6.696-3.024q4.032 0 6.12 1.926t3.744 6.21q.288.756.918 2.466t1.026 2.754 1.134 2.682 1.386 2.664 1.638 2.25 1.998 1.926 2.376 1.188 2.88.486q3.852 0 6.588-2.502t2.736-6.282zm3.744-22.896v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","TOGGLE_OFF":"M41.472-32.183q0-3.744-1.458-7.146t-3.942-5.886-5.886-3.942-7.146-1.458-7.146 1.458-5.886 3.942-3.942 5.886-1.458 7.146 1.458 7.146 3.942 5.886 5.886 3.942 7.146 1.458 7.146-1.458 5.886-3.942 3.942-5.886 1.458-7.146zm27.648 0q0-3.744-1.458-7.146t-3.942-5.886-5.886-3.942-7.146-1.458h-13.896q4.284 3.24 6.786 8.064t2.502 10.368-2.502 10.368-6.786 8.064h13.896q3.744 0 7.146-1.458t5.886-3.942 3.942-5.886 1.458-7.146zm4.608 0q0 4.68-1.836 8.946t-4.914 7.344-7.344 4.914-8.946 1.836h-27.648q-4.68 0-8.946-1.836t-7.344-4.914-4.914-7.344-1.836-8.946 1.836-8.946 4.914-7.344 7.344-4.914 8.946-1.836h27.648q4.68 0 8.946 1.836t7.344 4.914 4.914 7.344 1.836 8.946z","TOGGLE_ON":"M0-32.183q0-4.68 1.836-8.946t4.914-7.344 7.344-4.914 8.946-1.836h27.648q4.68 0 8.946 1.836t7.344 4.914 4.914 7.344 1.836 8.946-1.836 8.946-4.914 7.344-7.344 4.914-8.946 1.836h-27.648q-4.68 0-8.946-1.836t-7.344-4.914-4.914-7.344-1.836-8.946zm50.688 18.432q3.744 0 7.146-1.458t5.886-3.942 3.942-5.886 1.458-7.146-1.458-7.146-3.942-5.886-5.886-3.942-7.146-1.458-7.146 1.458-5.886 3.942-3.942 5.886-1.458 7.146 1.458 7.146 3.942 5.886 5.886 3.942 7.146 1.458z","BICYCLE":"M27.432-22.967h-11.304q-1.44 0-2.07-1.26t.234-2.412l6.768-9.036q-2.34-1.116-4.932-1.116-4.752 0-8.136 3.384t-3.384 8.136 3.384 8.136 8.136 3.384q4.14 0 7.308-2.61t3.996-6.606zm-6.696-4.608h6.696q-.648-3.06-2.7-5.328zm17.28 0l10.368-13.824h-17.28l-3.564 4.752q3.78 3.708 4.536 9.072h5.94zm40.32 2.304q0-4.752-3.384-8.136t-8.136-3.384q-2.16 0-4.356.864l6.264 9.36q.54.828.36 1.764t-.972 1.44q-.54.396-1.296.396-1.26 0-1.908-1.044l-6.264-9.36q-3.348 3.42-3.348 8.1 0 4.752 3.384 8.136t8.136 3.384 8.136-3.384 3.384-8.136zm4.608 0q0 6.66-4.734 11.394t-11.394 4.734-11.394-4.734-4.734-11.394q0-3.492 1.422-6.606t3.942-5.382l-2.34-3.528-12.708 16.884q-.648.936-1.836.936h-7.092q-.828 5.904-5.364 9.864t-10.584 3.96q-6.66 0-11.394-4.734t-4.734-11.394 4.734-11.394 11.394-4.734q4.104 0 7.74 1.98l4.932-6.588h-8.064q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h13.824v4.608h15.66l-3.06-4.608h-7.992q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h9.216q1.188 0 1.908 1.008l9.612 14.4q3.276-1.584 6.912-1.584 6.66 0 11.394 4.734t4.734 11.394z","BUS":"M13.824-20.663q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm36.864 0q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm-1.656-14.256l-2.592-13.824q-.18-.828-.81-1.35t-1.458-.522h-33.048q-.828 0-1.458.522t-.81 1.35l-2.592 13.824q-.18 1.08.504 1.908t1.764.828h38.232q1.08 0 1.764-.828t.504-1.908zm-8.136-22.032q0-.72-.504-1.224t-1.224-.504h-23.04q-.72 0-1.224.504t-.504 1.224.504 1.224 1.224.504h23.04q.72 0 1.224-.504t.504-1.224zm14.4 26.1v21.708h-4.608v4.608q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258v-4.608h-27.648v4.608q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258v-4.608h-4.608v-21.708q0-4.032.9-8.028l3.708-16.344q.324-2.808 3.51-4.932t8.28-3.204 11.25-1.08 11.25 1.08 8.28 3.204 3.51 4.932l3.78 16.344q.828 3.672.828 8.028z","IOXHOST":"M52.668-34.487q0 1.26-.9 2.178t-2.196.918h-25.272q-1.296 0-2.196-.918t-.9-2.178.9-2.178 2.196-.918h25.272q1.296 0 2.196.918t.9 2.178zm7.704 0q0-3.096-.828-6.12h-35.352q-1.296 0-2.196-.9t-.9-2.16q0-1.296.9-2.196t2.196-.9h32.688q-3.168-5.148-8.46-8.172t-11.52-3.024q-6.372 0-11.79 3.15t-8.568 8.55-3.15 11.772q0 3.096.828 6.12h35.352q1.296 0 2.196.9t.9 2.16q0 1.296-.9 2.196t-2.196.9h-32.688q3.168 5.148 8.478 8.172t11.538 3.024q4.752 0 9.108-1.854t7.488-5.004 5.004-7.488 1.872-9.126zm13.356-9.18q0 1.26-.9 2.16t-2.196.9h-4.716q.612 3.06.612 6.12 0 6.012-2.358 11.502t-6.318 9.468-9.45 6.336-11.502 2.358q-8.856 0-16.146-4.788t-10.854-12.6h-6.804q-1.296 0-2.196-.9t-.9-2.196q0-1.26.9-2.16t2.196-.9h4.752q-.612-3.06-.612-6.12 0-6.012 2.358-11.502t6.318-9.468 9.45-6.336 11.538-2.358q8.82 0 16.11 4.788t10.854 12.6h6.768q1.296 0 2.196.9t.9 2.196z","ANGELLIST":"M34.308-50.831l-4.104 11.808 4.212.756q5.94-16.236 5.94-18.648 0-2.016-1.368-2.016-2.052 0-4.68 8.1zm-10.764 24.732l1.188 3.168q1.332-1.512 2.556-2.412l-1.188-.198-1.386-.252-1.17-.306zm-10.512-32.256q0 3.528 5.724 18.756.648-.36 1.764-.36.54 0 2.7.18l-4.356-12.636q-2.7-7.92-4.428-7.92-.684 0-1.044.63t-.36 1.35zm-2.844 27.324q0 1.296 1.854 4.284t4.23 5.508 3.6 2.52q.504 0 .918-.468t.414-.972q0-.864-1.152-3.672-.468-1.152-1.152-2.592t-1.71-3.204-2.214-2.916-2.232-1.152q-.72 0-1.638.972t-.918 1.692zm-5.688 12.06q0 1.476.9 3.744 2.124 5.22 6.606 8.172t10.134 2.952q8.172 0 13.752-6.12 5.472-6.084 5.472-15.372 0-1.548-.036-2.412t-.414-2.232-1.098-2.016q-2.016-1.764-7.614-2.718t-9.738-.954q-1.332 0-1.764.396-.432.18-.432 1.26 0 1.224.774 2.16t1.998 1.44 2.79.846 3.15.414 3.06.144 2.52 0h.828q.864 0 1.44.684.54.684.684 1.98-1.008 1.008-3.456 1.944-2.196.792-3.348 1.656-2.304 1.656-3.906 4.104t-1.602 4.932q0 1.116.666 3.186t.666 3.15l-.108.432q-.144.432-.144.504-4.932-.36-5.256-7.776-.288.072-1.476.072.072.252.072.756 0 1.908-1.458 3.222t-3.402 1.314q-2.952 0-5.994-2.808t-3.042-5.724q0-1.224 1.188-2.412 1.872 2.304 2.16 2.736 2.772 3.744 4.788 3.744.432 0 .954-.306t.522-.738q0-1.224-3.15-5.22t-4.194-3.996q-1.548 0-2.52 1.602t-.972 3.258zm-4.104.324q0-3.636 1.53-5.868t4.914-3.168q-1.008-2.664-1.008-3.744 0-2.232 2.196-4.428t4.392-2.196q1.044 0 2.52.54-5.868-16.632-5.868-20.412 0-2.88 1.476-4.698t4.284-1.818q4.716 0 11.7 20.916l.288.828q.216-.576 1.044-2.862t1.566-4.266 1.944-4.59 2.322-4.428 2.538-3.114 2.754-1.296q2.556 0 4.032 1.764t1.476 4.392q0 3.888-5.724 19.8 2.196.54 3.618 1.656t2.106 2.808.936 3.366.252 3.978q0 5.4-1.692 10.08t-4.752 8.1-7.596 5.4-10.008 1.98q-3.996 0-8.028-1.512-5.364-2.052-9.288-6.894t-3.924-10.314z","CC":"M28.26-28.151h7.452q-.504 5.688-3.546 8.946t-7.722 3.258q-5.832 0-9.162-4.176t-3.33-11.376q0-6.984 3.348-11.214t8.388-4.23q5.328 0 8.352 3.132t3.492 8.892h-7.308q-.18-2.304-1.278-3.564t-2.934-1.26q-2.052 0-3.186 2.178t-1.134 6.39q0 1.728.18 3.024t.648 2.502 1.44 1.854 2.376.648q3.42 0 3.924-5.004zm25.632 0h7.416q-.504 5.688-3.528 8.946t-7.704 3.258q-5.832 0-9.162-4.176t-3.33-11.376q0-6.984 3.348-11.214t8.388-4.23q5.328 0 8.352 3.132t3.492 8.892h-7.344q-.144-2.304-1.26-3.564t-2.916-1.26q-2.052 0-3.186 2.178t-1.134 6.39q0 1.728.18 3.024t.648 2.502 1.422 1.854 2.358.648q1.764 0 2.754-1.368t1.206-3.636zm12.924-4.284q0-7.452-.558-11.052t-2.178-5.796q-.216-.288-.486-.504t-.774-.54-.576-.396q-3.096-2.268-25.092-2.268-22.5 0-25.56 2.268-.18.144-.63.414t-.756.504-.522.522q-1.62 2.16-2.16 5.742t-.54 11.106q0 7.488.54 11.07t2.16 5.778q.216.288.54.54t.738.504.63.432q1.584 1.188 8.622 1.764t16.938.576q21.96 0 25.092-2.34.18-.144.612-.396t.738-.504.486-.576q1.656-2.16 2.196-5.724t.54-11.124zm6.912-27.396v55.296h-73.728v-55.296h73.728z","SHEQEL":"M35.712-41.975v17.856q0 .504-.324.828t-.828.324h-5.76q-.504 0-.828-.324t-.324-.828v-17.856q0-4.032-2.88-6.912t-6.912-2.88h-9.792v41.472q0 .504-.324.828t-.828.324h-5.76q-.504 0-.828-.324t-.324-.828v-48.384q0-.504.324-.828t.828-.324h16.704q4.86 0 8.964 2.394t6.498 6.498 2.394 8.964zm13.824-16.704v31.68q0 4.86-2.394 8.964t-6.498 6.498-8.964 2.394h-16.704q-.504 0-.828-.324t-.324-.828v-34.56q0-.504.324-.828t.828-.324h5.76q.504 0 .828.324t.324.828v27.648h9.792q4.032 0 6.912-2.88t2.88-6.912v-31.68q0-.504.324-.828t.828-.324h5.76q.504 0 .828.324t.324.828z","MEANPATH":"M47.196-34.127v4.104q0 .864-.486 1.368t-1.35.504h-7.272q-.864 0-1.368-.504t-.504-1.368v-4.104q0-.864.504-1.368t1.368-.504h7.272q.864 0 1.35.504t.486 1.368zm-17.64 8.28v-9q0-1.908-1.17-3.078t-3.078-1.17h-4.788q-2.448 0-3.456 1.872-1.008-1.872-3.456-1.872h-4.68q-1.908 0-3.078 1.17t-1.17 3.078v9q0 .792.756.792h1.98q.792 0 .792-.792v-8.28q0-.864.486-1.368t1.386-.504h3.384q.864 0 1.368.504t.504 1.368v8.28q0 .792.756.792h1.944q.792 0 .792-.792v-8.28q0-.864.504-1.368t1.368-.504h3.492q.864 0 1.35.504t.486 1.368v8.28q0 .792.792.792h1.98q.756 0 .756-.792zm21.204-3.456v-5.544q0-1.908-1.188-3.078t-3.096-1.17h-9.504q-1.908 0-3.096 1.17t-1.188 3.078v14.76q0 .756.792.756h1.98q.756 0 .756-.756v-6.48q1.116 1.512 3.384 1.512h6.876q1.908 0 3.096-1.17t1.188-3.078zm4.536-22.176v38.592q0 3.456-2.448 5.904t-5.904 2.448h-38.592q-3.456 0-5.904-2.448t-2.448-5.904v-38.592q0-3.456 2.448-5.904t5.904-2.448h38.592q3.456 0 5.904 2.448t2.448 5.904z","BUYSELLADS":"M32.94-25.343h-10.584l5.292-19.836zm3.096 11.592h11.196l-11.664-36.864h-15.84l-11.664 36.864h11.196l13.788-11.304zm19.26-35.712v34.56q0 4.248-3.06 7.308t-7.308 3.06h-34.56q-4.248 0-7.308-3.06t-3.06-7.308v-34.56q0-4.248 3.06-7.308t7.308-3.06h34.56q4.248 0 7.308 3.06t3.06 7.308z","CONNECTDEVELOP":"M73.728-32.219q0 .756-.468 1.314t-1.188.702l-7.38 12.816q.108.324.108.648 0 .72-.45 1.278t-1.17.702l-6.948 12.132q.108.288.108.576 0 .828-.594 1.44t-1.458.612q-.9 0-1.476-.648h-14.4q-.612.72-1.548.72t-1.548-.72h-14.364q-.612.72-1.548.72-.828 0-1.44-.594t-.612-1.458q0-.288.144-.72l-6.948-12.06q-.72-.144-1.17-.702t-.45-1.278q0-.324.108-.648l-7.416-12.816q-.72-.18-1.17-.738t-.45-1.278q0-.756.486-1.314t1.206-.702l7.164-12.384-.018-.108-.018-.108q0-1.296 1.224-1.836l7.524-13.068q-.144-.36-.144-.648 0-.864.612-1.458t1.44-.594q.936 0 1.584.756h14.256q.576-.756 1.548-.756t1.548.756h14.328q.648-.756 1.584-.756.828 0 1.44.594t.612 1.458q0 .216-.144.648l7.452 12.888q.828.036 1.404.63t.576 1.386q0 .468-.252.972l6.732 11.664q.684.144 1.134.702t.45 1.278zm-35.46 28.764h14.004l-12.312-12.744h-5.148l-12.312 12.744h12.96q.648-.576 1.404-.576t1.404.576zm-34.236-29.232q.036.144.036.468 0 .36-.072.54l7.488 12.96.162.036.198.09.18.09 6.768-7.164v-12.492l-6.732-6.984q-.468.288-1.044.36zm31.464-28.224h-13.968l6.84 7.2 19.944-7.2h-10.08q-.576.576-1.368.576t-1.368-.576zm25.308 43.632q.036-.216.18-.396l-2.304-2.448-.612 2.844h2.736zm-3.816 0l.792-3.78-9.072-9.576-10.656 11.052 2.268 2.304h16.668zm-3.168 13.248l.576-1.008 2.34-11.16h-15.372l11.988 12.348q.288-.144.468-.18zm-33.012.576h.18l12.312-12.744h-13.428v12.06l.144.216q.504.18.792.468zm-.936-13.824h14.472l2.304-2.376-11.124-11.556-5.652 5.976v7.956zm-6.948 0h5.868v-6.804l-6.048 6.372q.144.288.18.432zm-.036-29.7l.018.072.018.072q0 .576-.288 1.044l6.156 6.372v-9.684zm6.984-2.52v11.196l5.508 5.652 10.692-11.304-8.028-8.496zm.144-10.944l-.144.288v9.504l7.38-2.664-6.876-7.236-.36.108zm32.076-.468h-.576l-22.356 8.064 7.668 8.1zm-15.264 17.712l-10.692 11.34 11.196 11.484 10.656-11.052zm-12.06 11.232l-4.896-5.076v10.224zm12.6 13.104l-1.512 1.584h3.06zm12.096-12.528l8.568 9.036 4.752-22.464-.108-.18-.036-.036zm12.384-14.4q-.288-.468-.288-1.044v-.072l-7.776-13.536q-.18-.036-.468-.18l-15.732 16.668 11.16 11.772zm-43.056-4.464v-8.028l-5.868 10.152zm0 34.056h-5.868l5.868 10.188v-10.188zm39.06 0l-1.728 8.172 4.68-8.172h-2.952zm4.392-2.52l7.452-12.996q-.072-.36-.072-.504l.108-.576-6.156-10.656-4.644 22.032 2.772 2.952q.18-.108.54-.252z","DASHCUBE":"M0-39.959q0-4.716 3.294-8.154t8.01-3.438h26.712l12.672-12.888v52.92q0 4.752-3.294 8.172t-8.01 3.42h-28.08q-4.716 0-8.01-3.42t-3.294-8.172v-28.44zm44.352 27.144l-6.336-6.48v-15.3q0-1.656-1.152-2.844t-2.808-1.188h-17.424q-1.656 0-2.808 1.188t-1.152 2.844v17.712q0 1.656 1.17 2.862t2.79 1.206h27.72z","FORUMBEE":"M33.624-59.039q-11.412 4.356-20.016 13.05t-12.888 20.178q-.72-3.204-.72-6.336 0-7.488 3.69-13.842t10.026-10.044 13.824-3.69q2.952 0 6.084.684zm9.684 4.284q3.348 2.34 5.904 5.58-14.004 4.068-24.282 14.418t-14.274 24.354q-3.348-2.592-5.58-5.832 4.032-13.896 14.22-24.156t24.012-14.364zm-26.388 48.024q4.14-12.816 13.662-22.392t22.302-13.824q1.44 3.312 1.944 7.02-10.512 4.32-18.576 12.42t-12.348 18.648q-3.708-.504-6.984-1.872zm38.376 2.088q-6.948-1.8-13.212-4.14-4.86 3.024-10.44 3.852 3.924-7.38 9.864-13.338t13.284-9.918q-.756 5.472-3.636 10.224 2.34 6.3 4.14 13.32z","LEANPUB":"M68.148-50.327l5.58 45.792q-4.716 0-9.252-2.052-7.2-3.276-14.148-3.276-8.136 0-13.464 5.328-5.328-5.328-13.464-5.328-6.948 0-14.148 3.276-4.608 2.052-9.072 2.052h-.18l5.58-45.792q8.064-4.572 17.352-4.572 8.388 0 13.932 3.816 5.544-3.816 13.932-3.816 9.288 0 17.352 4.572zm-17.82 35.532q4.644 0 8.352 1.026t9.36 3.366l-4.464-36.756q-6.156-2.808-13.248-2.808-8.064 0-13.464 5.076-5.4-5.076-13.464-5.076-7.092 0-13.248 2.808l-4.464 36.756q3.78-1.548 5.958-2.34t5.346-1.422 6.408-.63q7.272 0 13.464 3.888 6.192-3.888 13.464-3.888zm1.44-1.224l-1.98-32.652q-7.596.144-12.924 5.58-5.472-5.58-13.464-5.58-6.336 0-12.096 2.376l-4.104 33.876q4.464-1.836 8.226-2.736t7.974-.9q7.524 0 13.464 3.672 6.192-3.852 13.464-3.672z","SELLSY":"M54-15.083v-26.388q0-.756-.54-1.296t-1.26-.54h-3.348q-.72 0-1.26.54t-.54 1.296v26.388q0 .72.54 1.26t1.26.54h3.348q.72 0 1.26-.54t.54-1.26zm-10.224 0v-19.116q0-.72-.54-1.26t-1.26-.54h-3.636q-.72 0-1.26.54t-.54 1.26v19.116q0 .72.54 1.26t1.26.54h3.636q.72 0 1.26-.54t.54-1.26zm-10.512 0v-15.444q0-.72-.54-1.26t-1.26-.54h-3.636q-.72 0-1.26.54t-.54 1.26v15.444q0 .72.54 1.26t1.26.54h3.636q.72 0 1.26-.54t.54-1.26zm-10.512 0v-13.032q0-.72-.54-1.26t-1.26-.54h-3.636q-.72 0-1.26.54t-.54 1.26v13.032q0 .72.54 1.26t1.26.54h3.636q.72 0 1.26-.54t.54-1.26zm50.976-5.256q0 5.976-4.248 10.224t-10.224 4.248h-44.784q-5.976 0-10.224-4.248t-4.248-10.224q0-4.176 2.268-7.722t6.048-5.346q-.36-1.224-.36-2.628 0-4.068 2.898-6.966t6.966-2.898q3.672 0 6.48 2.412 1.62-6.588 6.984-10.8t12.168-4.212q5.364 0 9.9 2.646t7.182 7.182 2.646 9.9q0 2.376-.504 4.392 4.86 1.188 7.956 5.13t3.096 8.91z","SHIRTSINBULK":"M0-64.439h55.296v50.112l-27.936 12.168-27.36-12.168v-50.112zm51.696 47.772v-33.336h-48.096v33.336l23.796 10.584zm0-36.936v-7.236h-48.096v7.236h48.096zm-45.18 10.728v4.14h-1.332v-4.14h1.332zm0 5.328v4.14h-1.332v-4.14h1.332zm0 5.328v4.14h-1.332v-4.14h1.332zm0 5.328v4.14h-1.332v-4.14h1.332zm0 5.328v4.14h-1.332v-4.14h1.332zm.936 5.148l.54-1.224 3.78 1.692-.54 1.188zm4.896 2.16l.54-1.224 3.78 1.656-.54 1.224zm4.86 2.16l.54-1.224 3.78 1.656-.54 1.224zm4.896 2.124l.54-1.188 3.744 1.656-.54 1.224zm6.588.468l3.78-1.656.54 1.188-3.78 1.692zm4.86-2.16l3.78-1.656.54 1.224-3.78 1.656zm4.896-2.16l3.78-1.656.54 1.224-3.78 1.656zm4.86-2.124l3.78-1.692.54 1.224-3.78 1.656zm-33.984-43.2v1.296h-4.104v-1.296h4.104zm5.832 0v1.296h-4.14v-1.296h4.14zm5.832 0v1.296h-4.14v-1.296h4.14zm5.796 0v1.296h-4.104v-1.296h4.104zm5.832 0v1.296h-4.104v-1.296h4.104zm5.832 0v1.296h-4.14v-1.296h4.14zm5.832 0v1.296h-4.14v-1.296h4.14zm5.796 0v1.296h-4.104v-1.296h4.104zm-43.56 12.24v2.844h-1.332v-4.14h4.14v1.296h-2.808zm8.64-1.296v1.296h-4.14v-1.296h4.14zm5.832 0v1.296h-4.14v-1.296h4.14zm5.796 0v1.296h-4.104v-1.296h4.104zm5.832 0v1.296h-4.104v-1.296h4.104zm5.832 0v1.296h-4.14v-1.296h4.14zm5.832 0v1.296h-4.14v-1.296h4.14zm4.5 4.14v-2.844h-2.808v-1.296h4.14v4.14h-1.332zm0 5.328v-4.14h1.332v4.14h-1.332zm0 5.328v-4.14h1.332v4.14h-1.332zm0 5.328v-4.14h1.332v4.14h-1.332zm0 5.328v-4.14h1.332v4.14h-1.332zm0 5.328v-4.14h1.332v4.14h-1.332zm-21.42-1.26q-4.644 0-7.956-3.294t-3.312-7.974q0-4.644 3.312-7.956t7.956-3.312q4.68 0 7.974 3.312t3.294 7.956q0 4.68-3.294 7.974t-7.974 3.294zm-5.94-13.716q0 1.296.702 2.034t1.782.9 2.304.252 2.304.072 1.782.324.702 1.098q0 1.764-4.032 1.764-3.492 0-4.428-1.836h-.108l-1.116 2.268q2.412 1.512 5.832 1.512 1.044 0 2.034-.18t1.998-.576 1.638-1.188.63-1.908q0-1.656-.99-2.502t-2.43-.972-2.862-.108-2.412-.18-.99-.918q0-.756.738-1.188t1.458-.54 1.476-.108q1.224 0 2.538.396t1.854 1.224h.108l1.08-2.088q-.108-.036-.756-.306t-.81-.324-.702-.252-.792-.252-.72-.162-.864-.144-.828-.036q-1.044 0-2.034.18t-1.944.594-1.548 1.224-.594 1.926z","SIMPLYBUILT":"M31.068-27.287q0-4.032-2.862-6.894t-6.894-2.862-6.876 2.862-2.844 6.894 2.844 6.876 6.876 2.844 6.894-2.844 2.862-6.876zm31.068-.036q0-4.032-2.844-6.876t-6.876-2.844-6.894 2.844-2.862 6.876q0 4.068 2.862 6.912t6.894 2.844 6.876-2.862 2.844-6.894zm11.592-29.124v48.528q0 1.584-1.134 2.718t-2.754 1.134h-65.952q-1.62 0-2.754-1.134t-1.134-2.718v-48.528q0-1.584 1.134-2.718t2.754-1.134h15.516q1.584 0 2.736 1.134t1.152 2.718v5.796h27.144v-5.796q0-1.584 1.152-2.718t2.736-1.134h15.516q1.62 0 2.754 1.134t1.134 2.718z","SKYATLAS":"M51.48-43.451zm9.36 7.344q5.328 0 9.108 3.546t3.78 8.802q0 5.652-3.924 9.414t-9.612 3.762q-3.06 0-5.832-.99t-4.968-2.646-4.248-3.816-3.924-4.554-3.726-4.77-3.906-4.536-4.212-3.816-4.896-2.646-5.724-.99q-5.544 0-9.054 3.294t-3.51 8.802q0 5.652 3.744 9t9.468 3.348q3.6 0 7.488-1.35t6.948-3.546q.18-.144.756-.666t1.08-.864.792-.342q.504 0 .882.378t.378.882q0 .864-2.16 2.772-3.636 3.168-8.442 5.112t-9.378 1.944q-4.788 0-8.838-2.088t-6.48-5.94-2.43-8.676q0-7.38 5.094-12.276t12.51-4.896q4.32 0 8.154 1.566t6.678 4.068 5.454 5.508 5.004 6.03 4.806 5.526 5.382 4.068 6.21 1.566q3.672 0 6.066-2.214t2.394-5.85q0-3.42-2.322-5.724t-5.742-2.304q-1.08 0-2.934.666t-2.466.666q-.72 0-1.278-.54t-.558-1.26q0-.648.306-2.052t.306-2.124q0-5.724-3.87-9.468t-9.594-3.744q-2.088 0-4.014.666t-3.024 1.458-1.998 1.458-1.188.666q-.54 0-.918-.378t-.378-.918q0-.684.9-1.656 2.124-2.412 5.292-3.726t6.552-1.314q6.876 0 11.448 4.518t4.572 11.358q0 1.332-.144 2.376 2.052-.54 4.14-.54z","CART_PLUS":"M43.776-39.095q0-.936-.684-1.62t-1.62-.684h-4.608v-4.608q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62v4.608h-4.608q-.936 0-1.62.684t-.684 1.62.684 1.62 1.62.684h4.608v4.608q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62v-4.608h4.608q.936 0 1.62-.684t.684-1.62zm-20.736 29.952q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm32.256 0q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm4.608-39.168v18.432q0 .864-.576 1.53t-1.476.774l-37.584 4.392q.036.252.162.774t.216.954.09.792q0 .576-.864 2.304h33.12q.936 0 1.62.684t.684 1.62-.684 1.62-1.62.684h-36.864q-.936 0-1.62-.684t-.684-1.62q0-.504.396-1.422t1.062-2.142.738-1.368l-6.372-29.628h-7.344q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h9.216q.576 0 1.026.234t.72.558.468.882.27.954.198 1.062.162.918h43.236q.936 0 1.62.684t.684 1.62z","CART_ARROW_DOWN":"M46.08-39.095q0-.936-.684-1.62t-1.62-.684-1.62.684l-5.292 5.256v-10.548q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62v10.548l-5.292-5.256q-.684-.684-1.62-.684t-1.62.684-.684 1.62.684 1.62l9.216 9.216q.684.684 1.62.684t1.62-.684l9.216-9.216q.684-.684.684-1.62zm-23.04 29.952q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm32.256 0q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm4.608-39.168v18.432q0 .864-.576 1.53t-1.476.774l-37.584 4.392q.036.252.162.774t.216.954.09.792q0 .576-.864 2.304h33.12q.936 0 1.62.684t.684 1.62-.684 1.62-1.62.684h-36.864q-.936 0-1.62-.684t-.684-1.62q0-.504.396-1.422t1.062-2.142.738-1.368l-6.372-29.628h-7.344q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h9.216q.576 0 1.026.234t.72.558.468.882.27.954.198 1.062.162.918h43.236q.936 0 1.62.684t.684 1.62z","DIAMOND":"M7.632-36.791l22.428 23.94-10.8-23.94h-11.628zm29.232 27.792l12.564-27.792h-25.128zm-17.496-32.4l7.344-13.824h-9.432l-10.368 13.824h12.456zm24.3 28.548l22.428-23.94h-11.628zm-19.08-28.548h24.552l-7.344-13.824h-9.864zm29.772 0h12.456l-10.368-13.824h-9.432zm5.076-17.496l13.824 18.432q.504.648.468 1.494t-.612 1.458l-34.56 36.864q-.648.72-1.692.72t-1.692-.72l-34.56-36.864q-.576-.612-.612-1.458t.468-1.494l13.824-18.432q.648-.936 1.836-.936h41.472q1.188 0 1.836.936z","SHIP":"M65.196-8.459q.684-.684 1.62-.684t1.62.684l4.608 4.608-3.24 3.24-2.988-2.988-2.988 2.988q-.648.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-4.608-4.608 3.24-3.24 2.988 2.988 2.988-2.988q.684-.684 1.62-.684t1.62.684l2.988 2.988 2.988-2.988q.684-.684 1.62-.684t1.62.684l2.988 2.988 2.988-2.988q.684-.684 1.62-.684t1.62.684l2.988 2.988 2.988-2.988q.684-.684 1.62-.684t1.62.684l2.988 2.988 2.988-2.988q.684-.684 1.62-.684t1.62.684l2.988 2.988 2.988-2.988q.684-.684 1.62-.684t1.62.684l2.988 2.988zm-56.664-1.368q-.684.684-1.62.684t-1.62-.684l-4.608-4.608 3.24-3.24 2.988 2.952 2.988-2.952q.684-.684 1.62-.684t1.62.684l2.988 2.952 2.304-2.304v-10.548l-7.56-11.304q-.612-.936-.252-2.034t1.44-1.458l6.372-2.088v-10.764h4.608v-4.608h9.216v-4.608h9.216v4.608h9.216v4.608h4.608v10.764l6.372 2.088q1.08.36 1.44 1.458t-.252 2.034l-7.56 11.304v10.548l.684-.648q.684-.684 1.62-.684t1.62.684l2.988 2.952 2.988-2.952q.684-.684 1.62-.684t1.62.684l4.608 4.608-3.24 3.24-2.988-2.988-2.988 2.988q-.648.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-2.988-2.988-2.988 2.988q-.684.684-1.62.684t-1.62-.684l-2.988-2.988zm14.508-40.788v4.608l13.824-4.608 13.824 4.608v-4.608h-4.608v-4.608h-18.432v4.608h-4.608z","USER_SECRET":"M20.736-9.143l3.456-16.128-3.456-4.608-4.608-2.304zm9.216 0l4.608-23.04-4.608 2.304-3.456 4.608zm5.76-36.36q-.072-.144-.144-.216-.36-.288-3.456-.288-2.52 0-6.012.684-.252.072-.756.072t-.756-.072q-3.492-.684-6.012-.684-3.096 0-3.456.288-.072.072-.144.216.072.648.144.972.072.108.27.234t.27.378q.072.144.27.738t.252.738.27.612.306.612.324.504.432.486.504.342.63.288.738.144.882.072q1.296 0 2.124-.45t1.17-1.08.522-1.242.414-1.062.63-.45h.432q.396 0 .63.45t.414 1.062.522 1.242 1.17 1.08 2.124.45q.468 0 .882-.072t.738-.144.63-.288.504-.342.432-.486.324-.504.306-.612.27-.612.252-.738.27-.738q.072-.252.27-.378t.27-.234q.072-.324.144-.972zm14.976 31.644q0 4.356-2.628 6.84t-6.984 2.484h-31.464q-4.356 0-6.984-2.484t-2.628-6.84q0-2.196.162-4.248t.684-4.518 1.35-4.446 2.286-3.726 3.366-2.682l-3.24-7.92h7.704q-.792-2.304-.792-4.608 0-.432.072-1.152-6.984-1.44-6.984-3.456 0-2.052 7.56-3.564.612-2.232 1.854-4.824t2.538-4.104q1.152-1.332 2.736-1.332 1.08 0 3.024 1.116t3.024 1.116 3.024-1.116 3.024-1.116q1.584 0 2.736 1.332 1.296 1.512 2.538 4.104t1.854 4.824q7.56 1.512 7.56 3.564 0 2.016-6.984 3.456.252 2.916-.72 5.76h7.704l-2.952 8.1q2.268 1.188 3.87 3.474t2.358 5.166 1.044 5.454.288 5.346z","MOTORCYCLE":"M82.836-27.143q.432 3.708-.792 7.146t-3.564 5.886-5.706 3.816-7.074 1.116q-5.796-.396-10.062-4.5t-4.842-9.864q-.432-3.996.99-7.578t4.266-6.138l-2.556-3.852q-3.456 2.88-5.436 6.984t-1.98 8.784q0 .972-.666 1.674t-1.638.702h-11.7q-.828 5.904-5.364 9.864t-10.584 3.96q-6.66 0-11.394-4.734t-4.734-11.394 4.734-11.394 11.394-4.734q2.736 0 5.472.972l.864-1.62q-4.428-3.96-10.944-3.96h-2.304q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684h4.608q2.808 0 5.22.486t4.194 1.386 2.574 1.422 1.836 1.314h22.572l-3.06-4.608h-7.992q-1.08 0-1.764-.81t-.504-1.89q.144-.828.828-1.368t1.548-.54h9.108q1.188 0 1.908 1.008l2.52 3.78 4.104-4.104q.684-.684 1.656-.684h3.636q.936 0 1.62.684t.684 1.62v4.608q0 .936-.684 1.62t-1.62.684h-6.444l4.14 6.192q4.716-2.268 9.9-1.296 5.148.936 8.784 4.842t4.248 9.126zm-66.708 13.392q4.14 0 7.308-2.61t3.996-6.606h-11.304q-1.26 0-1.98-1.116-.648-1.152-.036-2.268l5.292-9.972q-1.692-.468-3.276-.468-4.752 0-8.136 3.384t-3.384 8.136 3.384 8.136 8.136 3.384zm50.688 0q4.752 0 8.136-3.384t3.384-8.136-3.384-8.136-8.136-3.384q-2.16 0-4.356.864l6.264 9.36q.54.828.36 1.764t-.972 1.44q-.54.396-1.296.396-1.26 0-1.908-1.044l-6.264-9.36q-3.348 3.42-3.348 8.1 0 4.752 3.384 8.136t8.136 3.384z","STREET_VIEW":"M50.688-9.143q0 2.268-2.214 4.086t-5.904 2.916-8.1 1.656-9.126.558-9.126-.558-8.1-1.656-5.904-2.916-2.214-4.086q0-1.764 1.188-3.186t3.276-2.394 4.248-1.602 4.716-1.062q.936-.18 1.728.378t.936 1.494q.18.936-.378 1.728t-1.494.936q-2.088.36-3.816.846t-2.754.918-1.746.846-.99.702-.306.432q.108.396.972.954t2.628 1.188 4.104 1.17 5.778.9 7.254.36 7.254-.36 5.778-.9 4.104-1.188 2.628-1.206.972-.99q-.036-.144-.306-.396t-.99-.684-1.746-.846-2.754-.9-3.816-.846q-.936-.144-1.494-.936t-.378-1.728q.144-.936.936-1.494t1.728-.378q2.556.432 4.716 1.062t4.248 1.602 3.276 2.394 1.188 3.186zm-13.824-32.256v13.824q0 .936-.684 1.62t-1.62.684h-2.304v13.824q0 .936-.684 1.62t-1.62.684h-9.216q-.936 0-1.62-.684t-.684-1.62v-13.824h-2.304q-.936 0-1.62-.684t-.684-1.62v-13.824q0-1.908 1.35-3.258t3.258-1.35h13.824q1.908 0 3.258 1.35t1.35 3.258zm-3.456-13.824q0 3.348-2.358 5.706t-5.706 2.358-5.706-2.358-2.358-5.706 2.358-5.706 5.706-2.358 5.706 2.358 2.358 5.706z","HEARTBEAT":"M46.08-27.575h10.98q-.18.216-.36.378t-.324.27l-.108.144-22.428 21.6q-.648.648-1.584.648t-1.584-.648l-22.464-21.672q-.18-.072-.756-.72h13.284q.792 0 1.422-.486t.81-1.242l2.52-10.116 6.84 24.012q.216.72.828 1.188t1.404.468q.756 0 1.368-.468t.828-1.188l5.256-17.46 2.016 4.032q.648 1.26 2.052 1.26zm18.432-15.408q0 5.22-3.708 10.8h-13.284l-3.996-7.956q-.288-.612-.918-.972t-1.314-.288q-1.62.18-2.016 1.656l-4.644 15.48-7.056-24.696q-.216-.72-.846-1.188t-1.422-.468-1.404.486-.792 1.242l-4.176 16.704h-15.228q-3.708-5.58-3.708-10.8 0-7.92 4.572-12.384t12.636-4.464q2.232 0 4.554.774t4.32 2.088 3.438 2.466 2.736 2.448q1.296-1.296 2.736-2.448t3.438-2.466 4.32-2.088 4.554-.774q8.064 0 12.636 4.464t4.572 12.384z","VENUS":"M41.472-43.703q0 7.956-5.31 13.842t-13.122 6.75v9.36h8.064q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-8.064v8.064q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-8.064h-8.064q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h8.064v-9.36q-5.4-.576-9.774-3.708t-6.696-8.064-1.89-10.512q.396-4.824 2.898-8.964t6.552-6.768 8.838-3.168q6.12-.684 11.484 1.944t8.496 7.632 3.132 11.016zm-36.864 0q0 6.66 4.734 11.394t11.394 4.734 11.394-4.734 4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394z","MARS":"M52.992-59.831q.936 0 1.62.684t.684 1.62v14.976q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-9.432l-13.752 13.788q4.536 5.616 4.536 12.924 0 4.212-1.638 8.046t-4.428 6.624-6.624 4.428-8.046 1.638-8.046-1.638-6.624-4.428-4.428-6.624-1.638-8.046 1.638-8.046 4.428-6.624 6.624-4.428 8.046-1.638q7.308 0 12.924 4.536l13.752-13.752h-9.396q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h14.976zm-32.256 50.688q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734z","MERCURY":"M29.88-53.063q5.22 2.592 8.406 7.578t3.186 10.998q0 7.956-5.31 13.842t-13.122 6.75v4.752h3.456q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-3.456v3.456q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-3.456h-3.456q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h3.456v-4.752q-7.812-.864-13.122-6.75t-5.31-13.842q0-6.012 3.186-10.998t8.406-7.578q-5.94-3.456-8.208-9.828-.216-.576.126-1.062t.954-.486h2.484q.756 0 1.044.72 1.584 3.816 5.04 6.156t7.704 2.34 7.704-2.34 5.04-6.156q.288-.72 1.332-.72h2.196q.612 0 .954.486t.126 1.062q-2.268 6.372-8.208 9.828zm-9.144 34.704q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734z","TRANSGENDER":"M36.864-63.287q0-.504.324-.828t.828-.324h10.368q.936 0 1.62.684t.684 1.62v10.368q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-4.824l-9.144 9.18q4.536 5.688 4.536 12.924 0 7.956-5.31 13.842t-13.122 6.75v4.752h3.456q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-3.456v3.456q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-3.456h-3.456q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h3.456v-4.752q-5.364-.576-9.738-3.708t-6.714-8.046-1.908-10.494q.576-7.344 5.76-12.726t12.492-6.21q4.248-.504 8.208.684t7.128 3.708l9.18-9.144h-4.824q-.504 0-.828-.324t-.324-.828v-2.304zm-16.128 44.928q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734z","TRANSGENDER_ALT":"M46.08-63.287q0-.504.324-.828t.828-.324h10.368q.936 0 1.62.684t.684 1.62v10.368q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-4.824l-9.144 9.18q4.536 5.688 4.536 12.924 0 7.956-5.31 13.842t-13.122 6.75v4.752h3.456q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-3.456v3.456q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-3.456h-3.456q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h3.456v-4.752q-7.812-.864-13.122-6.75t-5.31-13.842q0-7.236 4.536-12.924l-1.872-1.908-3.636 3.996q-.324.36-.792.378t-.828-.27l-1.728-1.584q-.36-.288-.378-.774t.306-.846l3.78-4.14-3.996-4.032v4.824q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-10.368q0-.936.684-1.62t1.62-.684h10.368q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-4.788l3.816 3.852 3.096-3.384q.324-.36.792-.378t.828.27l1.728 1.584q.36.288.378.774t-.306.846l-3.24 3.564 2.052 2.016q5.688-4.536 12.924-4.536t12.924 4.536l9.18-9.144h-4.824q-.504 0-.828-.324t-.324-.828v-2.304zm-16.128 44.928q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734z","VENUS_DOUBLE":"M64.44-45.395q.432 5.58-1.89 10.512t-6.696 8.064-9.774 3.708v9.36h8.064q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-8.064v8.064q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-8.064h-18.432v8.064q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-8.064h-8.064q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h8.064v-9.36q-5.4-.576-9.774-3.708t-6.696-8.064-1.89-10.512q.612-7.416 5.922-12.834t12.69-6.102q7.416-.756 13.572 3.384 6.156-4.14 13.572-3.384 7.38.684 12.69 6.102t5.922 12.834zm-32.184 12.96q4.608-4.716 4.608-11.268t-4.608-11.268q-4.608 4.716-4.608 11.268t4.608 11.268zm-11.52 4.86q4.14 0 7.848-2.052-5.544-5.94-5.544-14.076 0-8.064 5.544-14.076-3.708-2.052-7.848-2.052-6.66 0-11.394 4.734t-4.734 11.394 4.734 11.394 11.394 4.734zm20.736 13.824v-9.36q-4.932-.54-9.216-3.384-4.284 2.844-9.216 3.384v9.36h18.432zm2.304-13.824q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734q-4.14 0-7.848 2.052 5.544 6.012 5.544 14.076 0 8.136-5.544 14.076 3.708 2.052 7.848 2.052z","MARS_DOUBLE":"M55.296-49.463q0-.504.324-.828t.828-.324h10.368q.936 0 1.62.684t.684 1.62v10.368q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-4.824l-9.144 9.18q2.736 3.42 3.87 7.704t.342 8.892q-1.116 6.552-5.976 11.232t-11.448 5.616q-7.56 1.044-13.842-2.88t-8.694-10.8q-4.212-.216-7.956-2.07t-6.39-4.788-4.086-6.93-1.152-8.28q.324-4.86 2.808-9.072t6.552-6.894 8.928-3.222q4.248-.504 8.19.684t7.146 3.708l9.18-9.144h-4.824q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h10.368q.936 0 1.62.684t.684 1.62v10.368q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-4.824l-9.144 9.18q2.124 2.664 3.348 6.084 6.552.324 11.808 4.464l9.18-9.144h-4.824q-.504 0-.828-.324t-.324-.828v-2.304zm-18.432 14.976q0-.72-.144-2.088-5.832.9-9.756 5.4t-3.924 10.512q0 .72.144 2.088 5.832-.9 9.756-5.4t3.924-10.512zm-32.256 0q0 6.048 3.996 10.584t9.936 5.364q-.108-1.044-.108-2.124 0-7.56 4.86-13.302t12.168-7.074q-1.908-4.32-5.886-6.948t-8.838-2.628q-6.66 0-11.394 4.734t-4.734 11.394zm34.56 29.952q6.66 0 11.394-4.734t4.734-11.394q0-6.048-3.996-10.584t-9.936-5.364q.108 1.044.108 2.124 0 7.56-4.86 13.302t-12.168 7.074q1.908 4.32 5.886 6.948t8.838 2.628z","VENUS_MARS":"M59.904-63.287q0-.504.324-.828t.828-.324h10.368q.936 0 1.62.684t.684 1.62v10.368q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-4.824l-9.144 9.18q2.736 3.42 3.87 7.704t.342 8.892q-1.152 6.48-5.922 11.16t-11.286 5.652q-8.028 1.224-14.724-3.24-4.212 2.808-9.216 3.348v4.752h3.456q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-3.456v3.456q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-3.456h-3.456q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h3.456v-4.752q-5.58-.612-10.062-3.942t-6.732-8.55-1.422-11.052q.9-6.732 5.742-11.61t11.538-5.922q8.064-1.224 14.76 3.24 5.256-3.492 11.52-3.492 7.236 0 12.924 4.536l9.18-9.144h-4.824q-.504 0-.828-.324t-.324-.828v-2.304zm-27.648 40.068q4.608-4.716 4.608-11.268t-4.608-11.268q-4.608 4.716-4.608 11.268t4.608 11.268zm-27.648-11.268q0 6.66 4.734 11.394t11.394 4.734q4.212 0 7.848-2.052-5.544-6.012-5.544-14.076t5.544-14.076q-3.636-2.052-7.848-2.052-6.66 0-11.394 4.734t-4.734 11.394zm39.168 16.128q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734q-4.212 0-7.848 2.052 5.544 6.012 5.544 14.076t-5.544 14.076q3.636 2.052 7.848 2.052z","MARS_STROKE":"M52.992-59.831q.936 0 1.62.684t.684 1.62v14.976q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-9.432l-7.668 7.704 5.04 5.04q.324.36.324.828t-.324.792l-1.656 1.656q-.324.324-.792.324t-.828-.324l-5.04-5.076-2.808 2.844q4.536 5.616 4.536 12.924 0 4.212-1.638 8.046t-4.428 6.624-6.624 4.428-8.046 1.638-8.046-1.638-6.624-4.428-4.428-6.624-1.638-8.046 1.638-8.046 4.428-6.624 6.624-4.428 8.046-1.638q7.308 0 12.924 4.536l2.808-2.808-6.192-6.192q-.324-.36-.324-.828t.324-.792l1.656-1.656q.324-.324.792-.324t.828.324l6.192 6.192 7.668-7.668h-9.396q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h14.976zm-32.256 50.688q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734z","MARS_STROKE_V":"M23.04-41.255q7.812.864 13.122 6.75t5.31 13.842q0 6.012-3.132 11.016t-8.496 7.632-11.484 1.944q-4.788-.54-8.838-3.168t-6.552-6.768-2.898-8.964q-.432-5.58 1.89-10.512t6.696-8.064 9.774-3.708v-4.752h-5.76q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h5.76v-5.94l-3.312 3.312q-.36.324-.828.324t-.792-.324l-1.656-1.656q-.324-.324-.324-.792t.324-.828l7.272-7.236q.684-.684 1.62-.684t1.62.684l7.272 7.236q.324.36.324.828t-.324.792l-1.656 1.656q-.324.324-.792.324t-.828-.324l-3.312-3.312v5.94h5.76q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-5.76v4.752zm-2.304 36.72q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734z","MARS_STROKE_H":"M68.436-31.499q.684.684.684 1.62t-.684 1.62l-10.584 10.584q-.324.36-.81.36t-.81-.36l-1.62-1.62q-.36-.324-.36-.81t.36-.81l6.66-6.66h-10.584v8.064q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-8.064h-4.752q-.864 7.812-6.75 13.122t-13.842 5.31q-6.012 0-11.016-3.132t-7.632-8.496-1.944-11.484q.54-4.788 3.168-8.838t6.768-6.552 8.964-2.898q5.58-.432 10.512 1.89t8.064 6.696 3.708 9.774h4.752v-8.064q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828v8.064h10.584l-6.66-6.66q-.36-.324-.36-.81t.36-.81l1.62-1.62q.324-.36.81-.36t.81.36zm-47.7 17.748q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734z","NEUTER":"M41.472-43.703q0 7.956-5.31 13.842t-13.122 6.75v22.032q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-22.032q-7.812-.864-13.122-6.75t-5.31-13.842q0-4.212 1.638-8.046t4.428-6.624 6.624-4.428 8.046-1.638 8.046 1.638 6.624 4.428 4.428 6.624 1.638 8.046zm-20.736 16.128q6.66 0 11.394-4.734t4.734-11.394-4.734-11.394-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734z","GENDERLESS":"M36.864-29.879q0-6.66-4.734-11.394t-11.394-4.734-11.394 4.734-4.734 11.394 4.734 11.394 11.394 4.734 11.394-4.734 4.734-11.394zm4.608 0q0 4.212-1.638 8.046t-4.428 6.624-6.624 4.428-8.046 1.638-8.046-1.638-6.624-4.428-4.428-6.624-1.638-8.046 1.638-8.046 4.428-6.624 6.624-4.428 8.046-1.638 8.046 1.638 6.624 4.428 4.428 6.624 1.638 8.046z","FACEBOOK_OFFICIAL":"M52.236-59.831q1.26 0 2.16.9t.9 2.16v49.176q0 1.26-.9 2.16t-2.16.9h-14.076v-21.42h7.164l1.08-8.352h-8.244v-5.328q0-2.016.846-3.024t3.294-1.008l4.392-.036v-7.452q-2.268-.324-6.408-.324-4.896 0-7.83 2.88t-2.934 8.136v6.156h-7.2v8.352h7.2v21.42h-26.46q-1.26 0-2.16-.9t-.9-2.16v-49.176q0-1.26.9-2.16t2.16-.9h49.176z","PINTEREST_P":"M0-42.947q0-3.888 1.35-7.326t3.726-5.994 5.472-4.428 6.66-2.808 7.272-.936q5.688 0 10.584 2.394t7.956 6.966 3.06 10.332q0 3.456-.684 6.768t-2.16 6.372-3.6 5.382-5.22 3.708-6.804 1.386q-2.448 0-4.86-1.152t-3.456-3.168q-.36 1.404-1.008 4.05t-.846 3.42-.738 2.556-.936 2.556-1.152 2.25-1.656 2.79-2.232 3.114l-.504.18-.324-.36q-.54-5.652-.54-6.768 0-3.312.774-7.434t2.394-10.35 1.872-7.308q-1.152-2.34-1.152-6.084 0-2.988 1.872-5.616t4.752-2.628q2.196 0 3.42 1.458t1.224 3.69q0 2.376-1.584 6.876t-1.584 6.732q0 2.268 1.62 3.762t3.924 1.494q1.98 0 3.672-.9t2.826-2.448 2.016-3.42 1.368-3.978.72-3.996.234-3.582q0-6.228-3.942-9.702t-10.278-3.474q-7.2 0-12.024 4.662t-4.824 11.826q0 1.584.45 3.06t.972 2.34.972 1.638.45 1.098q0 1.008-.54 2.628t-1.332 1.62q-.072 0-.612-.108-1.836-.54-3.258-2.016t-2.196-3.402-1.17-3.888-.396-3.834z","WHATSAPP":"M35.46-29.375q.468 0 3.51 1.584t3.222 1.908q.072.18.072.54 0 1.188-.612 2.736-.576 1.404-2.556 2.358t-3.672.954q-2.052 0-6.84-2.232-3.528-1.62-6.12-4.248t-5.328-6.66q-2.592-3.852-2.556-6.984v-.288q.108-3.276 2.664-5.688.864-.792 1.872-.792.216 0 .648.054t.684.054q.684 0 .954.234t.558.99q.288.72 1.188 3.168t.9 2.7q0 .756-1.242 2.07t-1.242 1.674q0 .252.18.54 1.224 2.628 3.672 4.932 2.016 1.908 5.436 3.636.432.252.792.252.54 0 1.944-1.746t1.872-1.746zm-7.308 19.08q4.572 0 8.766-1.8t7.218-4.824 4.824-7.218 1.8-8.766-1.8-8.766-4.824-7.218-7.218-4.824-8.766-1.8-8.766 1.8-7.218 4.824-4.824 7.218-1.8 8.766q0 7.308 4.32 13.248l-2.844 8.388 8.712-2.772q5.688 3.744 12.42 3.744zm0-49.752q5.508 0 10.53 2.16t8.658 5.796 5.796 8.658 2.16 10.53-2.16 10.53-5.796 8.658-8.658 5.796-10.53 2.16q-7.02 0-13.14-3.384l-15.012 4.824 4.896-14.58q-3.888-6.408-3.888-14.004 0-5.508 2.16-10.53t5.796-8.658 8.658-5.796 10.53-2.16z","SERVER":"M4.608-13.751h36.864v-4.608h-36.864v4.608zm0-18.432h36.864v-4.608h-36.864v4.608zm56.448 16.128q0-1.44-1.008-2.448t-2.448-1.008-2.448 1.008-1.008 2.448 1.008 2.448 2.448 1.008 2.448-1.008 1.008-2.448zm-56.448-34.56h36.864v-4.608h-36.864v4.608zm56.448 16.128q0-1.44-1.008-2.448t-2.448-1.008-2.448 1.008-1.008 2.448 1.008 2.448 2.448 1.008 2.448-1.008 1.008-2.448zm0-18.432q0-1.44-1.008-2.448t-2.448-1.008-2.448 1.008-1.008 2.448 1.008 2.448 2.448 1.008 2.448-1.008 1.008-2.448zm3.456 29.952v13.824h-64.512v-13.824h64.512zm0-18.432v13.824h-64.512v-13.824h64.512zm0-18.432v13.824h-64.512v-13.824h64.512z","USER_PLUS":"M25.344-32.183q-5.724 0-9.774-4.05t-4.05-9.774 4.05-9.774 9.774-4.05 9.774 4.05 4.05 9.774-4.05 9.774-9.774 4.05zm34.56 4.608h12.672q.468 0 .81.342t.342.81v6.912q0 .468-.342.81t-.81.342h-12.672v12.672q0 .468-.342.81t-.81.342h-6.912q-.468 0-.81-.342t-.342-.81v-12.672h-12.672q-.468 0-.81-.342t-.342-.81v-6.912q0-.468.342-.81t.81-.342h12.672v-12.672q0-.468.342-.81t.81-.342h6.912q.468 0 .81.342t.342.81v12.672zm-26.496 8.064q0 1.872 1.368 3.24t3.24 1.368h9.216v8.568q-2.448 1.8-6.156 1.8h-31.464q-4.356 0-6.984-2.484t-2.628-6.84q0-1.908.126-3.726t.504-3.924.954-3.906 1.548-3.51 2.232-2.916 3.078-1.926 4.014-.72q.684 0 1.404.612 2.844 2.196 5.562 3.294t5.922 1.098 5.922-1.098 5.562-3.294q.72-.612 1.404-.612 4.752 0 7.812 3.456h-8.028q-1.872 0-3.24 1.368t-1.368 3.24v6.912z","USER_TIMES":"M25.344-32.183q-5.724 0-9.774-4.05t-4.05-9.774 4.05-9.774 9.774-4.05 9.774 4.05 4.05 9.774-4.05 9.774-9.774 4.05zm38.772 11.52l8.964 8.964q.324.324.324.828 0 .468-.324.792l-4.896 4.896q-.324.324-.792.324-.504 0-.828-.324l-8.964-8.964-8.964 8.964q-.324.324-.828.324-.468 0-.792-.324l-4.896-4.896q-.324-.324-.324-.792 0-.504.324-.828l8.964-8.964-8.964-8.964q-.324-.324-.324-.828 0-.468.324-.792l4.896-4.896q.324-.324.792-.324.504 0 .828.324l8.964 8.964 8.964-8.964q.324-.324.828-.324.468 0 .792.324l4.896 4.896q.324.324.324.792 0 .504-.324.828zm-17.928 0l-6.516 6.516q-1.332 1.332-1.332 3.276 0 1.908 1.332 3.24l2.988 2.988q-.756.108-1.584.108h-31.464q-4.356 0-6.984-2.484t-2.628-6.84q0-1.908.126-3.726t.504-3.924.954-3.906 1.548-3.51 2.232-2.916 3.078-1.926 4.014-.72q.684 0 1.404.612 5.544 4.392 11.484 4.392t11.484-4.392q.72-.612 1.404-.612 1.008 0 2.052.216-1.008.972-1.476 1.8t-.468 2.016q0 1.944 1.332 3.276z","HOTEL":"M9.216-27.575h62.208q.936 0 1.62.684t.684 1.62v16.128h-9.216v-9.216h-55.296v9.216h-9.216v-43.776q0-.936.684-1.62t1.62-.684h4.608q.936 0 1.62.684t.684 1.62v25.344zm20.736-11.52q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516 2.7 6.516 6.516 2.7 6.516-2.7 2.7-6.516zm43.776 9.216v-2.304q0-5.724-4.05-9.774t-9.774-4.05h-25.344q-.936 0-1.62.684t-.684 1.62v13.824h41.472z","VIACOIN":"M55.296-64.439l-6.912 16.128h6.912v6.912h-9.864l-1.98 4.608h11.844v6.912h-14.796l-12.852 29.952-12.852-29.952h-14.796v-6.912h11.844l-1.98-4.608h-9.864v-6.912h6.912l-6.912-16.128h9.216l11.628 27.648h13.608l11.628-27.648h9.216zm-27.648 43.776l3.888-9.216h-7.776z","TRAIN":"M39.168-64.439q6.66 0 11.394 3.366t4.734 8.154v32.256q0 4.68-4.518 7.992t-10.998 3.492l7.668 7.272q.576.54.288 1.26t-1.08.72h-38.016q-.792 0-1.08-.72t.288-1.26l7.668-7.272q-6.48-.18-10.998-3.492t-4.518-7.992v-32.256q0-4.788 4.734-8.154t11.394-3.366h23.04zm-11.52 48.384q2.88 0 4.896-2.016t2.016-4.896-2.016-4.896-4.896-2.016-4.896 2.016-2.016 4.896 2.016 4.896 4.896 2.016zm20.736-20.736v-18.432h-41.472v18.432h41.472z","SUBWAY":"M39.168-64.439q6.66 0 11.394 3.366t4.734 8.154v32.256q0 4.68-4.518 7.992t-10.998 3.492l7.668 7.272q.576.54.288 1.26t-1.08.72h-38.016q-.792 0-1.08-.72t.288-1.26l7.668-7.272q-6.48-.18-10.998-3.492t-4.518-7.992v-32.256q0-4.788 4.734-8.154t11.394-3.366h23.04zm-28.8 47.232q2.376 0 4.068-1.692t1.692-4.068-1.692-4.068-4.068-1.692-4.068 1.692-1.692 4.068 1.692 4.068 4.068 1.692zm14.976-19.584v-18.432h-19.584v18.432h19.584zm19.584 19.584q2.376 0 4.068-1.692t1.692-4.068-1.692-4.068-4.068-1.692-4.068 1.692-1.692 4.068 1.692 4.068 4.068 1.692zm5.76-19.584v-18.432h-20.736v18.432h20.736z","MEDIUM":"M21.492-49.283v42.228q0 .9-.45 1.53t-1.314.63q-.612 0-1.188-.288l-16.74-8.388q-.756-.36-1.278-1.206t-.522-1.674v-41.04q0-.72.36-1.224t1.044-.504q.504 0 1.584.54l18.396 9.216q.108.108.108.18zm2.304 3.636l19.224 31.176-19.224-9.576v-21.6zm40.716.648v37.944q0 .9-.504 1.458t-1.368.558-1.692-.468l-15.876-7.92zm-.108-4.32q0 .108-9.234 15.102t-10.818 17.55l-14.04-22.824 11.664-18.972q.612-1.008 1.872-1.008.504 0 .936.216l19.476 9.72q.144.072.144.216z","YC":"M29.124-28.295l9.576-17.964h-4.032l-5.652 11.232q-.864 1.728-1.584 3.312l-1.512-3.312-5.58-11.232h-4.32l9.468 17.748v11.664h3.636v-11.448zm26.172-31.536v55.296h-55.296v-55.296h55.296z","OPTIN_MONSTER":"M17.208-4.139q-.288.576-.972 1.242t-1.332.918q-.9.324-1.854-.126t-1.026-1.134q-.036-.792 1.44-1.98t2.448-1.368q.828-.144 1.224.774t.072 1.674zm48.276 0q.252.576.936 1.242t1.368.918q.9.324 1.854-.126t.99-1.134q.072-.792-1.422-1.98t-2.466-1.368q-.792-.144-1.188.774t-.072 1.674zm1.728-3.924q.468.972 2.034 2.142t2.79 1.494q1.62.468 2.952-.162t1.332-1.818q0-1.656-2.43-3.618t-4.158-2.142q-1.44-.18-2.286 1.35t-.234 2.754zm-51.804 0q-.468.972-2.016 2.142t-2.772 1.494q-1.62.468-2.952-.162t-1.332-1.818q0-1.656 2.43-3.618t4.158-2.142q1.44-.18 2.268 1.35t.216 2.754zm26.28-40.464h.036q-1.476 0-2.736.54.972.288 1.584 1.098t.612 1.782q0 1.26-.972 2.16t-2.34.9q-1.872 0-2.88-1.548-.18.828-.18 1.512 0 2.664 2.016 4.554t4.86 1.89q2.88 0 4.896-1.89t2.016-4.554-2.016-4.554-4.896-1.89zm10.944-7.848q-3.564-3.924-7.938-4.734t-8.838 1.602q.972-2.16 2.97-3.474t4.248-1.422 4.374.612 3.582 2.682 1.602 4.734zm27 44.604q.288.396-.396 1.512.252.828.252 1.44.036 2.016-1.602 4.05t-3.942 3.294-4.248 1.332q-1.728.072-3.312-.774t-2.376-2.358q-24.732.9-45.324 0-.828 1.476-2.394 2.34t-3.33.792q-3.096-.108-6.462-2.898t-3.33-5.778q.072-.792.252-1.44-.684-1.116-.396-1.512.216-.36 1.116-.036.504-.792 1.476-1.836-.252-1.044.072-1.368.396-.36 1.404.144 1.044-.72 2.124-1.224 0-1.044.468-1.332.828-.432 1.836.576 1.26-.18 2.196.072.648.144 1.368.684v-2.628q-.396 0-.648-.072-1.908-.36-3.492-1.602t-1.98-3.15q-.324-1.368 0-2.916.54-2.232 3.348-3.42.072-.612.684-1.278t1.296-.846 1.188.27.684 1.098h.468q1.656.18 2.16.828.108.108.18.252.36-.036 1.098-.126t1.098-.126q-.54-.396-1.08-.612-.828-1.44-3.276-1.548 0-.216.036-.36-2.232-.072-4.266-.666t-3.042-1.71q-1.152-1.296-1.53-3.312t-.09-4.032q.576-4.536 3.24-6.444.828-.576 1.872-.162t1.152 1.458l.054.504.09.756.108.72.198.684.306.36q.972.504 2.736.432 1.728-1.656 3.528-2.664-1.44-.144-5.832.504l1.692-1.656q2.196-2.088 5.868-3.996 5.22-2.628 10.152-3.096-.72-.288-1.476-.558t-1.692-.504-1.53-.378-1.71-.396-1.548-.36q21.42-4.536 32.544 5.004 3.528 3.024 5.688 7.992 3.06.36 4.356-.324h.036q.18-.108.306-.36t.198-.684.108-.702.108-.774l.036-.504q.108-1.008 1.152-1.44t1.872.18q2.628 1.872 3.276 6.408.252 2.052-.126 4.068t-1.53 3.276q-1.008 1.152-3.006 1.746t-4.158.666v.36q-2.556.072-3.42 1.548-.504.18-1.116.612.396.036 1.152.126t1.08.126q.036-.144.18-.288.576-.648 2.16-.828h.468q.18-.648.684-1.08t1.188-.288 1.296.828.684 1.296q2.844 1.152 3.348 3.42.324 1.44.036 2.916-.432 1.908-2.016 3.168t-3.492 1.584q-.36.072-.612.072 0 1.764-.036 2.628.72-.54 1.368-.684.936-.252 2.196-.072 1.008-1.008 1.836-.576.504.324.504 1.332 1.188.576 2.124 1.224.972-.468 1.368-.144.36.36.072 1.368 1.008 1.08 1.476 1.836.828-.288 1.116.036zm-9.9-34.272q0 1.044-.324 1.944 2.952 1.152 4.032 4.752.144-1.332-.342-3.546t-1.494-3.258q-.72-.684-1.296-.612t-.576.72zm-2.808 3.6q1.26 1.512 1.71 3.906t-.018 4.482q2.412-.468 3.492-1.62.468-.504.648-1.008-.108-2.304-1.116-4.122t-2.844-2.394q-.54.54-1.872.756zm-1.332.144q-1.08 0-1.584-.036 1.512 4.14 1.908 8.604.756 0 1.548-.108.576-2.448.036-4.86t-1.908-3.6zm-56.304 2.952q1.08-3.6 4.032-4.752-.324-.9-.324-1.944 0-.648-.594-.72t-1.278.612q-1.008 1.044-1.494 3.258t-.342 3.546zm1.296 3.672q1.044 1.116 3.492 1.62-.468-2.088-.018-4.482t1.71-3.906q-1.332-.216-1.872-.756-1.836.576-2.826 2.376t-1.134 4.14q.324.612.648 1.008zm6.372 1.944q.504-4.464 2.628-8.46-.684.144-1.98.648l-1.62.684v-.036q-1.656 3.204-.72 7.056.9.108 1.692.108zm34.668 1.404q.288 1.368.594 3.906t.414 3.222q.108.648.342.774t.846-.162q1.44-.72 2.232-3.078t.828-4.518q-.864-.072-5.256-.144zm-10.152-23.076q-4.176 0-7.164 2.97t-2.988 7.146q0 4.212 2.988 7.182t7.164 2.97 7.164-2.97 2.988-7.182q0-4.176-2.988-7.146t-7.164-2.97zm8.208 23.004q-3.816-.072-7.596 0v-.036q-.036.972.09 3.096t.486 2.376q1.044.504 3.366.522t3.438-.378q.324-.108.396-1.404t-.018-2.502-.162-1.674zm-9.648 7.164q.288-.144.342-1.728t-.018-3.168-.144-2.268v-.036q-7.632.108-7.704.108-.144.72-.252 2.232t0 2.988.504 1.656q1.224.54 3.636.576t3.636-.36zm-14.184-6.804q-.576 2.124.162 4.266t2.79 3.042q.54.288.864.18t.432-.756q.108-.576.288-3.24t.36-3.708q-2.484.072-4.896.216zm-4.572 4.536q.108.828-1.224 1.296 4.752 5.076 9.774 8.64t10.998 5.544q6.192-1.764 11.178-5.256t10.566-9q-1.188-.468-1.08-1.224l.108-.324v0q-.612-.072-1.8-.198t-1.728-.162q-.936 3.24-2.952 4.752-1.836 1.368-2.952-.036-.18-.216-.324-.504-.252-.468-.612-2.232-.072.18-.18.324t-.27.252-.288.198-.342.144l-.36.09-.432.072-.432.054-.486.036-.486.018q-3.816.324-5.868-.396-.144.612-.36.954t-.756.54-.828.252-1.296.126l-.108.018-.108.018h-.108q-6.444.612-7.308-1.44-.072 2.268-2.016 1.944-1.692-.288-3.276-1.944-.432-.468-.72-.936-.612-1.044-.936-2.34-2.088.216-3.132.36l.144.36zm-3.024 22.608q.108-.504.108-1.08-.612-2.556-1.836-4.68t-2.628-2.52q-1.476-.432-3.654.522t-3.762 2.88-1.404 3.87q1.26 1.908 3.6 3.348t4.284 1.512q1.836.072 3.384-1.008t1.908-2.844zm.108-6.156q.828 2.268.972 4.284 7.02-4.068 14.112-6.264-3.528-1.872-6.498-4.32t-6.462-5.94q-.216.144-1.044.468l-.036.18-.036.144q1.116.648.792 1.332-.432.828-2.016 1.224-.36.468-1.044.864h-.036q-.072 2.988.036 5.4.684 1.224 1.26 2.628zm2.484 5.976q19.152.756 41.22 0-9.144-5.292-15.408-7.056-2.736 1.26-5.616 2.052-.288.108-.576 0-2.34-.756-4.644-1.764-7.488 2.16-14.976 6.768h-.036v.036l.036-.036zm42.624-1.656q.144-1.944 1.008-4.32.504-1.368 1.188-2.556l-.036.036q.108-2.772.108-5.508-.54-.288-1.08-.9-1.512-.324-2.016-1.188-.324-.72.792-1.368-.072-.144-.072-.324-.576-.144-1.008-.432-7.344 6.84-13.788 10.224 7.128 2.124 14.904 6.336zm14.112.828q.18-1.944-1.404-3.87t-3.744-2.88-3.672-.522q-1.368.396-2.61 2.538t-1.854 4.662q0 .576.108 1.08.36 1.764 1.908 2.844t3.384 1.008q1.944-.072 4.284-1.512t3.6-3.348z","OPENCART":"M54.864-8.243q0 2.448-1.728 4.176t-4.176 1.728-4.194-1.728-1.746-4.176 1.746-4.194 4.194-1.746 4.176 1.746 1.728 4.194zm-26.964 0q0 2.448-1.746 4.176t-4.194 1.728-4.176-1.728-1.728-4.176 1.728-4.194 4.176-1.746 4.194 1.746 1.746 4.194zm-27.9-53.784q2.052 2.16 3.978 3.762t4.356 2.952 4.896 2.268 5.976 1.638 7.2 1.134 9 .666 10.944.342 13.41.09q5.004 0 8.802.18t6.516.594 4.464.99 2.556 1.422.864 1.854-.702 2.304-2.034 2.754-3.222 3.276-4.176 3.762-5.004 4.284q-6.66 5.652-10.296 8.892 1.044-1.836 2.754-3.924t3.384-3.798 3.402-3.546 2.988-3.294 1.944-2.898.468-2.52-1.638-1.998-4.194-1.476-7.344-.846-10.944-.18q-6.048.072-11.304-.216t-9.216-.828-7.362-1.476-5.742-1.854-4.41-2.25-3.294-2.394-2.448-2.574-1.818-2.502-1.44-2.448-1.314-2.142z","EXPEDITEDSSL":"M32.256-62.135q-6.084 0-11.628 2.376t-9.558 6.39-6.39 9.558-2.376 11.628 2.376 11.628 6.39 9.558 9.558 6.39 11.628 2.376 11.628-2.376 9.558-6.39 6.39-9.558 2.376-11.628-2.376-11.628-6.39-9.558-9.558-6.39-11.628-2.376zm0-2.304q6.552 0 12.528 2.556t10.296 6.876 6.876 10.296 2.556 12.528-2.556 12.528-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556zm-14.4 29.952q.576 0 .576.576v17.28q0 .576-.576.576h-1.152q-.576 0-.576-.576v-17.28q0-.576.576-.576h1.152zm14.4 2.304q1.908 0 3.258 1.35t1.35 3.258q0 1.26-.63 2.304t-1.674 1.656v4.104q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-4.104q-1.044-.612-1.674-1.656t-.63-2.304q0-1.908 1.35-3.258t3.258-1.35zm0-27.648q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878-3.708 13.878-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708zm-12.672 17.28v3.456q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828v-3.456q0-3.348 2.358-5.706t5.706-2.358 5.706 2.358 2.358 5.706v3.456q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828v-3.456q0-5.256-3.708-8.964t-8.964-3.708-8.964 3.708-3.708 8.964zm31.104 26.496v-18.432q0-.936-.684-1.62t-1.62-.684h-32.256q-.936 0-1.62.684t-.684 1.62v18.432q0 .936.684 1.62t1.62.684h32.256q.936 0 1.62-.684t.684-1.62z","BATTERY_FULL":"M69.12-46.007v27.648h-59.904v-27.648h59.904zm4.608 20.736h4.608v-13.824h-4.608v-10.368q0-.504-.324-.828t-.828-.324h-66.816q-.504 0-.828.324t-.324.828v34.56q0 .504.324.828t.828.324h66.816q.504 0 .828-.324t.324-.828v-10.368zm9.216-13.824v13.824q0 1.908-1.35 3.258t-3.258 1.35v5.76q0 2.376-1.692 4.068t-4.068 1.692h-66.816q-2.376 0-4.068-1.692t-1.692-4.068v-34.56q0-2.376 1.692-4.068t4.068-1.692h66.816q2.376 0 4.068 1.692t1.692 4.068v5.76q1.908 0 3.258 1.35t1.35 3.258z","BATTERY_THREE_QUARTERS":"M9.216-18.359v-27.648h46.08v27.648h-46.08zm69.12-25.344q1.908 0 3.258 1.35t1.35 3.258v13.824q0 1.908-1.35 3.258t-3.258 1.35v5.76q0 2.376-1.692 4.068t-4.068 1.692h-66.816q-2.376 0-4.068-1.692t-1.692-4.068v-34.56q0-2.376 1.692-4.068t4.068-1.692h66.816q2.376 0 4.068 1.692t1.692 4.068v5.76zm0 18.432v-13.824h-4.608v-10.368q0-.504-.324-.828t-.828-.324h-66.816q-.504 0-.828.324t-.324.828v34.56q0 .504.324.828t.828.324h66.816q.504 0 .828-.324t.324-.828v-10.368h4.608z","BATTERY_HALF":"M9.216-18.359v-27.648h32.256v27.648h-32.256zm69.12-25.344q1.908 0 3.258 1.35t1.35 3.258v13.824q0 1.908-1.35 3.258t-3.258 1.35v5.76q0 2.376-1.692 4.068t-4.068 1.692h-66.816q-2.376 0-4.068-1.692t-1.692-4.068v-34.56q0-2.376 1.692-4.068t4.068-1.692h66.816q2.376 0 4.068 1.692t1.692 4.068v5.76zm0 18.432v-13.824h-4.608v-10.368q0-.504-.324-.828t-.828-.324h-66.816q-.504 0-.828.324t-.324.828v34.56q0 .504.324.828t.828.324h66.816q.504 0 .828-.324t.324-.828v-10.368h4.608z","BATTERY_QUARTER":"M9.216-18.359v-27.648h18.432v27.648h-18.432zm69.12-25.344q1.908 0 3.258 1.35t1.35 3.258v13.824q0 1.908-1.35 3.258t-3.258 1.35v5.76q0 2.376-1.692 4.068t-4.068 1.692h-66.816q-2.376 0-4.068-1.692t-1.692-4.068v-34.56q0-2.376 1.692-4.068t4.068-1.692h66.816q2.376 0 4.068 1.692t1.692 4.068v5.76zm0 18.432v-13.824h-4.608v-10.368q0-.504-.324-.828t-.828-.324h-66.816q-.504 0-.828.324t-.324.828v34.56q0 .504.324.828t.828.324h66.816q.504 0 .828-.324t.324-.828v-10.368h4.608z","BATTERY_EMPTY":"M78.336-43.703q1.908 0 3.258 1.35t1.35 3.258v13.824q0 1.908-1.35 3.258t-3.258 1.35v5.76q0 2.376-1.692 4.068t-4.068 1.692h-66.816q-2.376 0-4.068-1.692t-1.692-4.068v-34.56q0-2.376 1.692-4.068t4.068-1.692h66.816q2.376 0 4.068 1.692t1.692 4.068v5.76zm0 18.432v-13.824h-4.608v-10.368q0-.504-.324-.828t-.828-.324h-66.816q-.504 0-.828.324t-.324.828v34.56q0 .504.324.828t.828.324h66.816q.504 0 .828-.324t.324-.828v-10.368h4.608z","MOUSE_POINTER":"M40.788-26.891q1.116 1.08.504 2.484-.612 1.44-2.124 1.44h-13.752l7.236 17.136q.36.9 0 1.764t-1.224 1.26l-6.372 2.7q-.9.36-1.764 0t-1.26-1.224l-6.876-16.272-11.232 11.232q-.684.684-1.62.684-.432 0-.864-.18-1.44-.612-1.44-2.124v-54.144q0-1.512 1.44-2.124.432-.18.864-.18.972 0 1.62.684z","I_CURSOR":"M29.952-59.831q-11.52 0-11.52 8.064v14.976h4.608v4.608h-4.608v19.584q0 8.064 11.52 8.064h2.304v4.608h-2.304q-9.792 0-13.824-5.256-4.032 5.256-13.824 5.256h-2.304v-4.608h2.304q11.52 0 11.52-8.064v-19.584h-4.608v-4.608h4.608v-14.976q0-8.064-11.52-8.064h-2.304v-4.608h2.304q9.792 0 13.824 5.256 4.032-5.256 13.824-5.256h2.304v4.608h-2.304z","OBJECT_GROUP":"M73.728-50.615h-4.608v36.864h4.608v13.824h-13.824v-4.608h-46.08v4.608h-13.824v-13.824h4.608v-36.864h-4.608v-13.824h13.824v4.608h46.08v-4.608h13.824v13.824zm-9.216-9.216v4.608h4.608v-4.608h-4.608zm-59.904 0v4.608h4.608v-4.608h-4.608zm4.608 55.296v-4.608h-4.608v4.608h4.608zm50.688-4.608v-4.608h4.608v-36.864h-4.608v-4.608h-46.08v4.608h-4.608v36.864h4.608v4.608h46.08zm9.216 4.608v-4.608h-4.608v4.608h4.608zm-23.04-36.864h13.824v27.648h-32.256v-9.216h-13.824v-27.648h32.256v9.216zm-27.648 13.824h23.04v-18.432h-23.04v18.432zm36.864 9.216v-18.432h-9.216v13.824h-13.824v4.608h23.04z","OBJECT_UNGROUP":"M82.944-36.791h-4.608v23.04h4.608v13.824h-13.824v-4.608h-32.256v4.608h-13.824v-13.824h4.608v-4.608h-13.824v4.608h-13.824v-13.824h4.608v-23.04h-4.608v-13.824h13.824v4.608h32.256v-4.608h13.824v13.824h-4.608v4.608h13.824v-4.608h13.824v13.824zm-9.216-9.216v4.608h4.608v-4.608h-4.608zm-23.04-13.824v4.608h4.608v-4.608h-4.608zm-46.08 0v4.608h4.608v-4.608h-4.608zm4.608 41.472v-4.608h-4.608v4.608h4.608zm46.08-4.608h-4.608v4.608h4.608v-4.608zm-41.472 0h32.256v-4.608h4.608v-23.04h-4.608v-4.608h-32.256v4.608h-4.608v23.04h4.608v4.608zm18.432 18.432v-4.608h-4.608v4.608h4.608zm46.08 0v-4.608h-4.608v4.608h4.608zm-4.608-9.216v-23.04h-4.608v-4.608h-13.824v13.824h4.608v13.824h-13.824v-4.608h-13.824v4.608h4.608v4.608h32.256v-4.608h4.608z","STICKY_NOTE":"M36.864-19.511v14.976h-33.408q-1.44 0-2.448-1.008t-1.008-2.448v-48.384q0-1.44 1.008-2.448t2.448-1.008h48.384q1.44 0 2.448 1.008t1.008 2.448v33.408h-14.976q-1.44 0-2.448 1.008t-1.008 2.448zm4.608 1.152h13.716q-.54 2.952-2.34 4.752l-6.624 6.624q-1.8 1.8-4.752 2.34v-13.716z","STICKY_NOTE_O":"M50.4-18.359h-8.928v8.928q1.044-.36 1.476-.792l6.66-6.66q.432-.432.792-1.476zm-10.08-4.608h10.368v-32.256h-46.08v46.08h32.256v-10.368q0-1.44 1.008-2.448t2.448-1.008zm14.976-33.408v36.864q0 1.44-.72 3.168t-1.728 2.736l-6.624 6.624q-1.008 1.008-2.736 1.728t-3.168.72h-36.864q-1.44 0-2.448-1.008t-1.008-2.448v-48.384q0-1.44 1.008-2.448t2.448-1.008h48.384q1.44 0 2.448 1.008t1.008 2.448z","CC_JCB":"M70.236-28.511q0 .936-.558 1.602t-1.386.846q-.288.072-.648.072h-5.508v-5.04h5.508q.36 0 .648.072.828.18 1.386.846t.558 1.602zm-.648-7.668q0 .9-.54 1.512t-1.368.756q-.108.036-.54.036h-5.004v-4.644h5.004l.306.018.234.018q.828.144 1.368.774t.54 1.53zm-43.38 5.904v-11.088h-8.208v11.088q0 2.088-1.368 3.402t-3.78 1.314q-3.888 0-8.244-2.124v4.032q1.908.54 4.356.828t3.924.324l1.512.036q11.808 0 11.808-7.812zm25.704 6.624v-4.068q-3.564 1.872-7.2 2.124-3.888.288-6.084-1.476t-2.196-5.112 2.196-5.112 6.084-1.476q3.636.252 7.2 2.088v-4.032q-1.728-.432-3.6-.702t-2.88-.342l-1.008-.072q-4.572-.216-7.866.504t-5.058 2.16-2.556 3.168-.792 3.816.792 3.816 2.556 3.168 5.058 2.16 7.866.504q3.636-.144 7.488-1.116zm26.424-4.14q0-1.944-1.548-3.186t-3.924-1.422v-.108q2.052-.288 3.204-1.494t1.152-2.862q0-1.98-1.476-3.168t-3.852-1.296l-.432-.018-.504-.018h-16.38v18.36h17.676q2.664 0 4.374-1.314t1.71-3.474zm4.608-27.432v46.08q0 1.872-1.368 3.24t-3.24 1.368h-73.728q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h73.728q1.872 0 3.24 1.368t1.368 3.24z","CC_DINERS_CLUB":"M30.888-19.763v-24.948q-3.816 1.476-6.192 4.878t-2.376 7.614 2.376 7.614 6.192 4.842zm18.144-12.456q0-4.212-2.376-7.614t-6.192-4.878v24.984q3.816-1.476 6.192-4.878t2.376-7.614zm7.74 0q0 5.724-2.826 10.584t-7.686 7.686-10.584 2.826q-4.284 0-8.19-1.674t-6.732-4.5-4.5-6.732-1.674-8.19q0-5.724 2.826-10.584t7.686-7.686 10.584-2.826 10.584 2.826 7.686 7.686 2.826 10.584zm13.788.252q0-5.004-1.998-9.414t-5.31-7.398-7.686-4.716-9.09-1.728h-10.836q-6.336 0-11.646 2.916t-8.46 8.28-3.15 12.06q0 6.156 3.132 11.43t8.496 8.334 11.628 3.06h10.836q4.644 0 9.054-1.818t7.722-4.86 5.31-7.29 1.998-8.856zm12.384-23.256v46.08q0 1.872-1.368 3.24t-3.24 1.368h-73.728q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h73.728q1.872 0 3.24 1.368t1.368 3.24z","CLONE":"M59.904-5.687v-39.168q0-.468-.342-.81t-.81-.342h-39.168q-.468 0-.81.342t-.342.81v39.168q0 .468.342.81t.81.342h39.168q.468 0 .81-.342t.342-.81zm4.608-39.168v39.168q0 2.376-1.692 4.068t-4.068 1.692h-39.168q-2.376 0-4.068-1.692t-1.692-4.068v-39.168q0-2.376 1.692-4.068t4.068-1.692h39.168q2.376 0 4.068 1.692t1.692 4.068zm-13.824-13.824v5.76h-4.608v-5.76q0-.468-.342-.81t-.81-.342h-39.168q-.468 0-.81.342t-.342.81v39.168q0 .468.342.81t.81.342h5.76v4.608h-5.76q-2.376 0-4.068-1.692t-1.692-4.068v-39.168q0-2.376 1.692-4.068t4.068-1.692h39.168q2.376 0 4.068 1.692t1.692 4.068z","BALANCE_SCALE":"M62.208-48.311l-13.824 25.344h27.648zm-46.08 0l-13.824 25.344h27.648zm29.556-6.912q-.504 1.44-1.638 2.574t-2.574 1.638v46.476h21.888q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-48.384q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h21.888v-46.476q-1.44-.504-2.574-1.638t-1.638-2.574h-17.676q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h17.676q.756-2.052 2.52-3.33t3.996-1.278 3.996 1.278 2.52 3.33h17.676q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-17.676zm-6.516.576q1.188 0 2.034-.846t.846-2.034-.846-2.034-2.034-.846-2.034.846-.846 2.034.846 2.034 2.034.846zm39.168 31.68q0 2.628-1.674 4.716t-4.23 3.276-5.202 1.782-5.022.594-5.022-.594-5.202-1.782-4.23-3.276-1.674-4.716q0-.396 1.26-2.916t3.312-6.282 3.852-7.038 3.672-6.624 2.016-3.6q.648-1.188 2.016-1.188t2.016 1.188q.144.252 2.016 3.6t3.672 6.624 3.852 7.038 3.312 6.282 1.26 2.916zm-46.08 0q0 2.628-1.674 4.716t-4.23 3.276-5.202 1.782-5.022.594-5.022-.594-5.202-1.782-4.23-3.276-1.674-4.716q0-.396 1.26-2.916t3.312-6.282 3.852-7.038 3.672-6.624 2.016-3.6q.648-1.188 2.016-1.188t2.016 1.188q.144.252 2.016 3.6t3.672 6.624 3.852 7.038 3.312 6.282 1.26 2.916z","HOURGLASS_O":"M50.688-59.831q0 9.396-3.834 16.614t-9.594 11.034q5.76 3.816 9.594 11.034t3.834 16.614h3.456q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-52.992q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h3.456q0-9.396 3.834-16.614t9.594-11.034q-5.76-3.816-9.594-11.034t-3.834-16.614h-3.456q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h52.992q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-3.456zm-19.224 25.488q2.772-1.044 5.364-3.33t4.662-5.49 3.33-7.56 1.26-9.108h-36.864q0 4.752 1.26 9.108t3.33 7.56 4.662 5.49 5.364 3.33q.684.252 1.098.846t.414 1.314-.414 1.314-1.098.846q-2.772 1.044-5.364 3.33t-4.662 5.49-3.33 7.56-1.26 9.108h36.864q0-4.752-1.26-9.108t-3.33-7.56-4.662-5.49-5.364-3.33q-.684-.252-1.098-.846t-.414-1.314.414-1.314 1.098-.846z","HOURGLASS_START":"M50.688-59.831q0 9.396-3.834 16.614t-9.594 11.034q5.76 3.816 9.594 11.034t3.834 16.614h3.456q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-52.992q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h3.456q0-9.396 3.834-16.614t9.594-11.034q-5.76-3.816-9.594-11.034t-3.834-16.614h-3.456q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h52.992q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-3.456zm-4.608 0h-36.864q0 2.376.324 4.608h36.216q.324-2.196.324-4.608zm0 55.296q0-4.68-1.224-8.982t-3.258-7.488-4.554-5.472-5.256-3.402h-8.28q-2.736 1.116-5.256 3.402t-4.554 5.472-3.258 7.488-1.224 8.982h36.864z","HOURGLASS_HALF":"M50.688-59.831q0 9.396-3.834 16.614t-9.594 11.034q5.76 3.816 9.594 11.034t3.834 16.614h3.456q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-52.992q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h3.456q0-9.396 3.834-16.614t9.594-11.034q-5.76-3.816-9.594-11.034t-3.834-16.614h-3.456q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h52.992q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-3.456zm-4.608 0h-36.864q0 7.416 3.06 13.824h30.744q3.06-6.408 3.06-13.824zm-2.052 43.776q-1.944-5.076-5.238-8.694t-7.002-5.13h-8.28q-3.708 1.512-7.002 5.13t-5.238 8.694h32.76z","HOURGLASS_END":"M50.688-59.831q0 9.396-3.834 16.614t-9.594 11.034q5.76 3.816 9.594 11.034t3.834 16.614h3.456q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-52.992q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h3.456q0-9.396 3.834-16.614t9.594-11.034q-5.76-3.816-9.594-11.034t-3.834-16.614h-3.456q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h52.992q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-3.456zm-19.224 25.488q2.772-1.044 5.364-3.33t4.662-5.49 3.33-7.56 1.26-9.108h-36.864q0 4.752 1.26 9.108t3.33 7.56 4.662 5.49 5.364 3.33q.684.252 1.098.846t.414 1.314-.414 1.314-1.098.846q-4.932 1.836-8.784 7.056h25.2q-3.852-5.22-8.784-7.056-.684-.252-1.098-.846t-.414-1.314.414-1.314 1.098-.846z","HOURGLASS":"M54.144-6.839q.504 0 .828.324t.324.828v4.608q0 .504-.324.828t-.828.324h-52.992q-.504 0-.828-.324t-.324-.828v-4.608q0-.504.324-.828t.828-.324h52.992zm-49.464-2.304q.108-1.98.576-3.852t1.08-3.42 1.656-3.132 1.926-2.736 2.322-2.502 2.376-2.16 2.538-1.98 2.394-1.71 2.34-1.548q-1.548-1.008-2.34-1.548t-2.394-1.71-2.538-1.98-2.376-2.16-2.322-2.502-1.926-2.736-1.656-3.132-1.08-3.42-.576-3.852h45.936q-.108 1.98-.576 3.852t-1.08 3.42-1.656 3.132-1.926 2.736-2.322 2.502-2.376 2.16-2.538 1.98-2.394 1.71-2.34 1.548q1.548 1.008 2.34 1.548t2.394 1.71 2.538 1.98 2.376 2.16 2.322 2.502 1.926 2.736 1.656 3.132 1.08 3.42.576 3.852h-45.936zm49.464-55.296q.504 0 .828.324t.324.828v4.608q0 .504-.324.828t-.828.324h-52.992q-.504 0-.828-.324t-.324-.828v-4.608q0-.504.324-.828t.828-.324h52.992z","HAND_ROCK_O":"M27.648-50.615q-1.908 0-3.258 1.35t-1.35 3.258v4.608h-1.152v-3.348q0-1.728-1.152-2.934t-2.88-1.206q-1.656 0-2.844 1.188t-1.188 2.844v15.444l-1.152-1.08v-6.192q0-1.728-1.152-2.934t-2.88-1.206q-1.656 0-2.844 1.188t-1.188 2.844v8.064q0 1.692 1.26 2.952l11.16 10.656q1.404 1.404 1.404 3.672 0 .936.684 1.62t1.62.684h23.04q.936 0 1.62-.684t.684-1.62v-.9q0-1.476.36-2.772l3.888-15.696q.36-1.296.36-2.772v-8.856q0-1.728-1.152-2.934t-2.88-1.206q-1.656 0-2.844 1.188t-1.188 2.844v1.152h-1.152v-4.5q0-1.44-.9-2.61t-2.304-1.458q-.504-.072-.828-.072-1.656 0-2.844 1.188t-1.188 2.844v4.608h-1.152v-4.392q0-1.836-1.17-3.222t-2.97-1.566q-.18-.036-.468-.036zm0-4.608q3.024 0 5.364 1.8 2.052-1.224 4.428-1.224 2.124 0 3.996.972t3.096 2.736q.972-.252 2.124-.252 3.6 0 6.12 2.574t2.52 6.174v8.856q0 1.836-.468 3.888l-3.924 15.696q-.216.864-.216 2.556 0 2.88-2.016 4.896t-4.896 2.016h-23.04q-3.024 0-4.968-2.106t-1.944-5.13l-11.088-10.656q-2.736-2.628-2.736-6.3v-8.064q0-3.564 2.538-6.102t6.102-2.538q.396 0 .576.036.216-3.42 2.718-5.76t5.922-2.34q1.872 0 3.528.756 2.592-2.484 6.264-2.484z","HAND_STOP_O":"M31.68-59.831q-1.656 0-2.844 1.188t-1.188 2.844v23.616h-1.152v-19.008q0-1.656-1.188-2.844t-2.844-1.188-2.844 1.188-1.188 2.844v28.223999999999997l-5.544-7.38q-1.368-1.836-3.672-1.836-1.908 0-3.258 1.35t-1.35 3.258q0 1.548.936 2.772l13.824 18.432q1.368 1.836 3.672 1.836h24.768q1.224 0 2.196-.792t1.224-2.016l2.736-14.58q.18-1.152.18-2.124v-17.928q0-1.656-1.188-2.844t-2.844-1.188-2.844 1.188-1.188 2.844v9.792h-1.152v-19.008q0-1.656-1.188-2.844t-2.844-1.188-2.844 1.188-1.188 2.844v19.008h-1.152v-23.616q0-1.656-1.188-2.844t-2.844-1.188zm0-4.608q2.448 0 4.518 1.278t3.186 3.474q.684-.144 1.512-.144 3.564 0 6.102 2.538t2.538 6.102v.612q3.78-.216 6.498 2.304t2.718 6.3v17.928q0 1.44-.288 2.988l-2.736 14.544q-.504 2.844-2.754 4.716t-5.166 1.872h-24.768q-2.16 0-4.122-.99t-3.258-2.682l-13.824-18.432q-1.836-2.448-1.836-5.544 0-3.816 2.7-6.516t6.516-2.7q2.808 0 4.608 1.224v-15.624q0-3.564 2.538-6.102t6.102-2.538q.828 0 1.512.144 1.116-2.196 3.186-3.474t4.518-1.278z","HAND_SCISSORS_O":"M38.628-4.535h-6.372q-5.868 0-8.136-5.076-.828-1.764-.828-3.672v-.18q-2.232-1.08-3.546-3.186t-1.314-4.59q0-1.368.18-1.728h-9.396q-3.816 0-6.516-2.7t-2.7-6.516 2.7-6.516 6.516-2.7h4.068l-1.584-.612q-2.664-1.008-4.302-3.366t-1.638-5.238q0-3.816 2.7-6.516t6.516-2.7q1.656 0 3.276.612l22.608 8.604h14.436q3.816 0 6.516 2.7t2.7 6.516v24.048q0 3.168-1.944 5.67t-5.04 3.258l-12.204 3.06q-3.312.828-6.696.828zm-1.764-25.596l-5.58 2.556-5.868 2.664q-1.08.504-1.728 1.494t-.648 2.178q0 1.656 1.188 2.844t2.844 1.188q.936 0 1.656-.36l12.168-5.544q-1.764-.36-2.898-1.8t-1.134-3.24v-1.98zm11.52 11.196q0-1.656-1.188-2.844t-2.844-1.188q-.936 0-1.656.36l-10.44 4.752q-1.008.468-1.332.612t-1.098.612-1.062.846-.576 1.044-.288 1.458q0 1.8 1.134 2.952t2.934 1.152q.72 0 1.368-.324l12.672-5.76q1.08-.504 1.728-1.494t.648-2.178zm-8.352-27.072l-23.4-8.928q-.864-.288-1.656-.288-1.908 0-3.258 1.35t-1.35 3.258q0 1.44.81 2.628t2.142 1.692l18.936 7.2v2.304h-23.04q-1.908 0-3.258 1.35t-1.35 3.258 1.35 3.258 3.258 1.35h19.26l8.388-3.816v-7.128q0-2.268 1.656-3.816l3.996-3.672h-2.484zm-1.404 36.864q2.952 0 5.58-.684l12.204-3.06q1.548-.396 2.52-1.638t.972-2.826v-24.048q0-1.908-1.35-3.258t-3.258-1.35h-11.088l-4.896 4.536q-1.296 1.188-1.296 2.952v10.656q0 1.656 1.188 2.772t2.844 1.116 2.844-1.26 1.188-2.916v-7.488h1.152v7.488q0 2.52-2.052 4.104 1.872.288 3.114 1.746t1.242 3.366q0 1.512-.828 2.808t-2.196 1.908l-11.16 5.076h3.276z","HAND_LIZARD_O":"M41.436-64.439q2.196 0 4.176 1.008t3.276 2.772l20.592 28.116q4.248 5.724 4.248 12.924v12.78q0 2.88-2.016 4.896t-4.896 2.016h-13.824q-2.88 0-4.896-2.016t-2.016-4.896v-6.372l-10.296-5.148h-19.656q-2.88 0-4.896-2.016t-2.016-4.896v-1.152q0-4.284 3.042-7.326t7.326-3.042h15.12l1.512-4.608h-24.696q-3.6 0-6.246-2.43t-2.934-5.994q-2.34-2.844-2.34-6.552v-1.152q0-2.88 2.016-4.896t4.896-2.016h34.524zm27.684 57.6v-12.78q0-5.652-3.348-10.224l-20.628-28.116q-1.404-1.872-3.708-1.872h-34.524q-.936 0-1.62.684t-.684 1.62q0 1.152.054 1.782t.342 1.458.9 1.548q.36-1.116 1.278-1.8t2.034-.684h29.952v1.152h-29.952q-.936 0-1.62.684t-.684 1.62q0 1.584.108 2.088.288 1.584 1.584 2.628t2.916 1.044h26.316q1.44 0 2.448 1.008t1.008 2.448q0 .54-.18 1.08l-2.304 6.912q-.36 1.044-1.26 1.71t-2.016.666h-15.948q-2.376 0-4.068 1.692t-1.692 4.068v1.152q0 .936.684 1.62t1.62.684h20.196q.576 0 1.044.252l11.412 5.688q.864.468 1.386 1.296t.522 1.8v7.092q0 .936.684 1.62t1.62.684h13.824q.936 0 1.62-.684t.684-1.62z","HAND_SPOCK_O":"M29.376-59.831q-1.728 0-2.862 1.224t-1.134 2.952q0 .504.108 1.008l5.4 22.464h-.936l-4.176-17.352q-.324-1.368-1.422-2.232t-2.502-.864q-1.692 0-2.844 1.224t-1.152 2.916q0 .396.144 1.044.108.468 1.404 5.796t2.448 10.152 1.152 4.968v8.172l-11.052-8.28q-1.224-.936-2.772-.936-1.872 0-3.222 1.314t-1.35 3.186q0 2.412 2.016 3.96l18.252 13.644q1.224.936 2.736.936h24.984q1.188 0 2.124-.738t1.224-1.89l3.6-14.436q.288-1.08.36-3.168t.324-3.096l4.176-17.208q.108-.432.108-.936 0-1.656-1.188-2.844t-2.88-1.188q-1.368 0-2.484.918t-1.44 2.25l-3.564 14.688h-.936l4.752-19.692q.108-.504.108-1.008 0-1.692-1.152-2.88t-2.88-1.188q-1.368 0-2.466.864t-1.422 2.232l-5.22 21.672h-4.572l-5.904-24.552q-.324-1.368-1.422-2.232t-2.466-.864zm23.22 59.904h-24.984q-3.06 0-5.508-1.836l-18.252-13.68q-1.8-1.368-2.826-3.384t-1.026-4.248q0-3.78 2.7-6.444t6.48-2.664q.9 0 1.782.198t1.494.396 1.476.738 1.26.828 1.386 1.062 1.35 1.026l-4.428-18.432q-.252-1.26-.252-2.124 0-3.348 2.16-5.832t5.472-2.844q.504-3.132 2.898-5.202t5.598-2.07q2.988 0 5.328 1.854t3.06 4.77l3.708 15.408 2.988-12.528q.72-2.916 3.06-4.77t5.328-1.854q3.132 0 5.49 1.944t2.97 5.004q3.348.36 5.58 2.808t2.232 5.796q0 1.08-.252 2.052l-4.176 17.172q-.18.792-.18 2.412 0 1.836-.468 3.888l-3.636 14.436q-.684 2.7-2.862 4.41t-4.95 1.71z","HAND_POINTER_O":"M23.04-59.831q-1.908 0-3.258 1.35t-1.35 3.258v32.256l-5.436-7.272q-1.476-1.944-3.852-1.944-1.872 0-3.204 1.368t-1.332 3.24q0 1.548.936 2.772l13.824 18.432q1.368 1.836 3.672 1.836h25.848q.792 0 1.422-.486t.81-1.242l3.312-13.248q.864-3.456.864-6.984v-7.812q0-1.476-1.008-2.556t-2.448-1.08-2.448 1.008-1.008 2.448h-1.152v-2.196q0-1.728-1.152-2.934t-2.88-1.206q-1.656 0-2.844 1.188t-1.188 2.844v2.304h-1.152v-3.24q0-1.98-1.332-3.402t-3.276-1.422q-1.908 0-3.258 1.35t-1.35 3.258v3.456h-1.152v-20.52q0-1.98-1.332-3.402t-3.276-1.422zm0-4.608q3.852 0 6.534 2.79t2.682 6.642v7.92q.792-.072 1.152-.072 3.564 0 6.228 2.484 1.692-.756 3.564-.756 4.068 0 6.624 3.132.972-.252 2.016-.252 3.384 0 5.724 2.43t2.34 5.814v7.812q0 4.176-1.008 8.1l-3.312 13.248q-.576 2.304-2.448 3.762t-4.248 1.458h-25.848q-2.16 0-4.122-.99t-3.258-2.682l-13.824-18.432q-1.836-2.448-1.836-5.544 0-3.78 2.682-6.498t6.462-2.718q2.556 0 4.68 1.26v-19.692q0-3.816 2.7-6.516t6.516-2.7zm4.608 50.688v-13.824h-1.152v13.824h1.152zm9.216 0v-13.824h-1.152v13.824h1.152zm9.216 0v-13.824h-1.152v13.824h1.152z","HAND_PEACE_O":"M46.368-41.147q2.16 0 3.852.828 5.076 2.268 5.076 8.136v6.372q0 3.384-.828 6.696l-3.06 12.204q-.756 3.096-3.258 5.04t-5.67 1.944h-24.048q-3.816 0-6.516-2.7t-2.7-6.516v-14.436l-8.604-22.608q-.612-1.62-.612-3.276 0-3.816 2.7-6.516t6.516-2.7q2.88 0 5.238 1.638t3.366 4.302l.612 1.584v-4.068q0-3.816 2.7-6.516t6.516-2.7 6.516 2.7 2.7 6.516v9.396q.972-.18 1.728-.18 2.484 0 4.59 1.314t3.186 3.546zm-7.776-.252q-1.188 0-2.178.648t-1.494 1.728l-2.664 5.868-2.556 5.58h1.98q1.8 0 3.24 1.134t1.8 2.898l5.544-12.168q.36-.72.36-1.656 0-1.656-1.188-2.844t-2.844-1.188zm7.956 4.86q-.792 0-1.458.288t-1.044.576-.846 1.062-.612 1.098-.612 1.332l-4.752 10.44q-.36.72-.36 1.656 0 1.656 1.188 2.844t2.844 1.188q1.188 0 2.178-.648t1.494-1.728l5.76-12.672q.324-.648.324-1.368 0-1.8-1.152-2.934t-2.952-1.134zm-41.94-12.924q0 .792.288 1.656l8.928 23.4v2.484l3.672-3.996q1.548-1.656 3.816-1.656h7.128l3.816-8.388v-19.26q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258v23.04h-2.304l-7.2-18.936q-.504-1.332-1.692-2.142t-2.628-.81q-1.908 0-3.258 1.35t-1.35 3.258zm37.872 44.928q1.584 0 2.826-.972t1.638-2.52l3.06-12.204q.684-2.628.684-5.58v-3.276l-5.076 11.16q-.612 1.368-1.908 2.196t-2.808.828q-1.908 0-3.366-1.242t-1.746-3.114q-1.584 2.052-4.104 2.052h-7.488v-1.152h7.488q1.656 0 2.916-1.188t1.26-2.844-1.116-2.844-2.772-1.188h-10.656q-1.764 0-2.952 1.296l-4.536 4.896v11.088q0 1.908 1.35 3.258t3.258 1.35h24.048z","TRADEMARK":"M30.852-44.855v4.212q0 .468-.342.792t-.81.324h-10.728v29.232q0 .468-.324.81t-.792.342h-4.86q-.468 0-.81-.324t-.342-.828v-29.232h-10.692q-.468 0-.81-.324t-.342-.792v-4.212q0-.504.324-.828t.828-.324h28.548q.468 0 .81.342t.342.81zm37.368-.108l2.772 34.596q.036.468-.288.864-.36.36-.828.36h-4.824q-.432 0-.756-.306t-.36-.738l-1.656-21.168-6.804 15.3q-.288.684-1.044.684h-4.32q-.72 0-1.044-.684l-6.768-15.372-1.62 21.24q-.036.432-.36.738t-.756.306h-4.86q-.468 0-.828-.36-.324-.36-.324-.864l2.808-34.596q.036-.432.36-.738t.756-.306h5.112q.72 0 1.044.684l7.92 18.72q.36.864.72 1.836.108-.252.342-.882t.378-.954l7.956-18.72q.324-.684 1.044-.684h5.076q.468 0 .792.306t.36.738z","REGISTERED":"M37.512-39.131q0-3.168-2.16-4.356-1.188-.648-4.212-.648h-4.428v10.116h5.832q2.376 0 3.672-1.332t1.296-3.78zm1.872 10.26l7.38 13.428q.288.612-.036 1.116-.288.576-.972.576h-5.472q-.72 0-1.008-.612l-6.984-13.14h-5.58v12.6q0 .504-.324.828t-.828.324h-4.824q-.504 0-.828-.324t-.324-.828v-34.56q0-.504.324-.828t.828-.324h10.584q4.608 0 6.84.864 3.06 1.116 4.824 3.924t1.764 6.48q0 3.312-1.53 5.958t-4.158 3.942q.216.36.324.576zm-7.128-29.808q-5.4 0-10.296 2.106t-8.442 5.652-5.652 8.442-2.106 10.296 2.106 10.296 5.652 8.442 8.442 5.652 10.296 2.106 10.296-2.106 8.442-5.652 5.652-8.442 2.106-10.296-2.106-10.296-5.652-8.442-8.442-5.652-10.296-2.106zm32.256 26.496q0 6.552-2.556 12.528t-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556 12.528 2.556 10.296 6.876 6.876 10.296 2.556 12.528z","CREATIVE_COMMONS":"M21.78-20.051q5.508 0 9.252-3.744.504-.648.108-1.296l-1.62-2.952q-.216-.468-.864-.612-.576-.072-.972.396l-.144.108q-.144.144-.414.36t-.63.468-.846.522-1.026.486-1.206.342-1.35.126q-2.736 0-4.5-1.8t-1.764-4.572q0-2.736 1.728-4.518t4.392-1.782q1.332 0 2.574.504t1.818 1.008l.576.504q.396.396.936.36.576-.072.864-.504l1.908-2.808q.468-.72-.072-1.404-.108-.144-.396-.432t-1.08-.846-1.746-1.008-2.43-.81-3.096-.36q-5.328 0-8.856 3.474t-3.528 8.658q0 5.256 3.492 8.694t8.892 3.438zm22.68 0q5.508 0 9.252-3.744.504-.648.144-1.296l-1.62-2.952q-.288-.504-.9-.612-.576-.072-.972.396l-.144.108q-.144.144-.414.36t-.63.468-.846.522-1.026.486-1.206.342-1.35.126q-2.736 0-4.5-1.8t-1.764-4.572q0-2.736 1.728-4.518t4.392-1.782q1.332 0 2.574.504t1.818 1.008l.576.504q.396.396.936.36.576-.072.864-.504l1.908-2.808q.468-.72-.072-1.404-.108-.144-.396-.432t-1.08-.846-1.746-1.008-2.43-.81-3.096-.36q-5.292 0-8.838 3.474t-3.546 8.658q0 5.256 3.492 8.694t8.892 3.438zm-12.204-38.628q-5.4 0-10.296 2.106t-8.442 5.652-5.652 8.442-2.106 10.296 2.106 10.296 5.652 8.442 8.442 5.652 10.296 2.106 10.296-2.106 8.442-5.652 5.652-8.442 2.106-10.296-2.106-10.296-5.652-8.442-8.442-5.652-10.296-2.106zm0-5.76q6.552 0 12.528 2.556t10.296 6.876 6.876 10.296 2.556 12.528-2.556 12.528-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556z","GG":"M26.496-35.639l13.824 13.824-13.824 13.824-24.192-24.192 24.192-24.192 6.048 6.048-3.456 3.456-2.592-2.592-17.28 17.28 17.28 17.28 6.948-6.948-10.404-10.332zm20.736-20.736l24.192 24.192-24.192 24.192-6.048-6.048 3.456-3.456 2.592 2.592 17.28-17.28-17.28-17.28-6.948 6.948 10.404 10.332-3.456 3.456-13.824-13.824z","GG_CIRCLE":"M25.812-15.695l9.756-9.756-10.044-10.044-3.168 3.168 6.912 6.876-3.456 3.456-10.044-10.044 10.044-10.044 1.44 1.44 3.132-3.132-4.572-4.608-16.344 16.344zm12.888-.288l16.344-16.344-16.344-16.344-9.756 9.756 10.044 10.044 3.168-3.168-6.912-6.876 3.456-3.456 10.044 10.044-10.044 10.044-1.44-1.44-3.132 3.168zm25.812-16.2q0 6.552-2.556 12.528t-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556 12.528 2.556 10.296 6.876 6.876 10.296 2.556 12.528z","TRIPADVISOR":"M23.436-28.547q0 1.404-.99 2.394t-2.358.99q-1.404 0-2.394-.99t-.99-2.394q0-1.368.99-2.358t2.394-.99q1.368 0 2.358.99t.99 2.358zm41.544-.036q0 1.404-.99 2.394t-2.394.99-2.394-.99-.99-2.394.99-2.376 2.394-.972 2.394.972.99 2.376zm-37.44.036q0-2.844-2.034-4.896t-4.914-2.052-4.914 2.034-2.034 4.914 2.034 4.914 4.914 2.034 4.914-2.034 2.034-4.914zm41.508-.036q0-2.88-2.034-4.914t-4.914-2.034q-2.844 0-4.896 2.034t-2.052 4.914 2.034 4.914 4.914 2.034 4.914-2.034 2.034-4.914zm-38.448.036q0 4.176-2.934 7.11t-7.074 2.934q-4.176 0-7.11-2.952t-2.934-7.092 2.952-7.074 7.092-2.934 7.074 2.934 2.934 7.074zm41.544-.036q0 4.14-2.934 7.074t-7.11 2.934q-4.14 0-7.074-2.934t-2.934-7.074 2.934-7.074 7.074-2.934q4.176 0 7.11 2.934t2.934 7.074zm-34.704.108q0-6.876-4.878-11.754t-11.754-4.878q-4.5 0-8.316 2.232t-6.048 6.066-2.232 8.334 2.232 8.334 6.048 6.066 8.316 2.232q6.876 0 11.754-4.878t4.878-11.754zm24.048-20.628q-9.144-3.996-20.016-3.996-11.484 0-20.628 3.96 4.212 0 8.028 1.638t6.57 4.41 4.392 6.588 1.638 8.028q0-4.14 1.566-7.902t4.248-6.498 6.39-4.428 7.812-1.8zm17.244 20.628q0-6.876-4.86-11.754t-11.736-4.878-11.754 4.878-4.878 11.754 4.878 11.754 11.754 4.878 11.736-4.878 4.86-11.754zm-9.576-20.376h13.788q-1.584 1.836-2.7 4.122t-1.44 4.122q3.96 5.436 3.96 12.132 0 5.616-2.772 10.368t-7.524 7.506-10.332 2.754q-4.788 0-8.964-2.016t-7.056-5.58q-1.692 2.016-4.644 6.444-.396-.792-1.926-2.97t-2.682-3.51q-2.88 3.564-7.074 5.598t-8.982 2.034q-5.58 0-10.332-2.754t-7.524-7.506-2.772-10.368q0-6.696 3.96-12.132-.324-1.836-1.44-4.122t-2.7-4.122h13.14q5.364-3.6 12.78-5.634t15.552-2.034q8.064 0 15.156 2.016t12.528 5.652z","ODNOKLASSNIKI":"M23.04-31.787q-6.768 0-11.556-4.788t-4.788-11.52q0-6.768 4.788-11.556t11.556-4.788 11.556 4.788 4.788 11.556q0 6.732-4.788 11.52t-11.556 4.788zm0-24.372q-3.312 0-5.67 2.358t-2.358 5.706q0 3.312 2.358 5.67t5.67 2.358 5.67-2.358 2.358-5.67q0-3.348-2.358-5.706t-5.67-2.358zm18.828 26.352q.468.972.54 1.782t-.162 1.458-.954 1.386-1.53 1.332-2.214 1.494q-4.14 2.628-11.34 3.384l2.628 2.592 9.612 9.612q1.08 1.116 1.08 2.664t-1.08 2.628l-.432.468q-1.116 1.08-2.664 1.08t-2.664-1.08q-2.412-2.448-9.612-9.648l-9.612 9.648q-1.116 1.08-2.664 1.08t-2.628-1.08l-.432-.468q-1.116-1.08-1.116-2.628t1.116-2.664l9.612-9.612 2.592-2.592q-7.308-.756-11.412-3.384-1.404-.9-2.214-1.494t-1.53-1.332-.954-1.386-.162-1.458.54-1.782q.36-.72 1.008-1.26t1.512-.792 2.016.072 2.34 1.26q.18.144.54.396t1.548.882 2.484 1.098 3.312.864 4.068.396q3.276 0 6.264-.918t4.32-1.818l1.368-.9q1.188-.936 2.34-1.26t2.016-.072 1.512.792 1.008 1.26z","ODNOKLASSNIKI_SQUARE":"M33.372-43.559q0 2.376-1.674 4.05t-4.05 1.674-4.05-1.674-1.674-4.05 1.674-4.05 4.05-1.674 4.05 1.674 1.674 4.05zm7.704 13.068q-.36-.72-1.008-1.152t-1.71-.342-2.178.99q-.36.288-1.044.72t-2.916 1.152-4.572.72-4.464-.648-3.096-1.296l-.972-.648q-1.116-.9-2.178-.99t-1.71.342-1.008 1.152q-.792 1.62-.072 2.682t3.132 2.646q2.988 1.908 8.136 2.412l-1.836 1.872q-5.112 5.112-6.876 6.84-.792.792-.792 1.89t.792 1.89l.324.324q.792.792 1.89.792t1.89-.792l6.876-6.876q4.104 4.14 6.876 6.876.792.792 1.89.792t1.89-.792l.324-.324q.792-.792.792-1.89t-.792-1.89l-6.876-6.84-1.872-1.872q5.076-.504 8.1-2.412 2.412-1.584 3.132-2.646t-.072-2.682zm-1.764-13.068q0-4.824-3.42-8.244t-8.244-3.42-8.244 3.42-3.42 8.244 3.42 8.244 8.244 3.42 8.244-3.42 3.42-8.244zm15.984-5.904v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","GET_POCKET":"M56.34-59.831q2.34 0 3.96 1.638t1.62 3.978v18.684q0 6.336-2.448 12.096t-6.57 9.9-9.864 6.57-12.042 2.43q-6.336 0-12.078-2.43t-9.882-6.57-6.588-9.9-2.448-12.096v-18.684q0-2.304 1.656-3.96t3.96-1.656h50.724zm-25.344 38.304q1.692 0 2.952-1.188l14.544-13.968q1.332-1.26 1.332-3.06 0-1.764-1.242-3.006t-3.006-1.242q-1.692 0-2.952 1.188l-11.628 11.16-11.628-11.16q-1.26-1.188-2.916-1.188-1.764 0-3.006 1.242t-1.242 3.006q0 1.836 1.296 3.06l14.58 13.968q1.188 1.188 2.916 1.188z","WIKIPEDIA_W":"M53.784-5.435l-10.62-25.02q-.9 1.764-5.706 10.998t-7.146 14.022q-.036.036-.99.018t-.954-.054q-2.952-6.948-9.198-21.132t-9.342-21.456q-.756-1.8-2.394-3.87t-3.726-3.618-3.672-1.548l-.018-.864-.018-.972h20.988v1.8q-1.404.072-2.862.576t-2.394 1.548-.36 2.304q.936 2.124 7.794 17.964t8.478 19.44q1.116-2.196 5.04-9.594t4.716-8.91q-.684-1.404-4.536-10.116t-4.896-10.62q-1.368-2.484-7.236-2.556v-1.8l18.468.036v1.692q-2.16.072-3.366.9t-.45 2.484q1.188 2.52 3.132 6.822t3.096 6.75q3.96-7.704 6.228-13.068.864-1.98-.36-2.862t-4.644-.954q.036-.252.036-.9v-.864q2.304 0 6.138-.018t6.48-.036 3.33-.018v1.764q-2.232.072-4.284 1.188t-3.24 2.916l-7.668 15.912q.468 1.188 4.59 10.44t4.374 9.864l15.876-36.612q-.504-1.368-1.782-2.25t-2.34-1.134-1.998-.288v-1.8l16.56.144.036.072-.036 1.584q-5.004.144-7.236 5.22-18.936 43.776-20.124 46.476h-1.764z","SAFARI":"M34.164-32.291q0 .936-.594 1.62t-1.494.684q-.936 0-1.62-.594t-.684-1.494q0-.936.612-1.62t1.512-.684 1.584.594.684 1.494zm.54 2.088l12.6-20.916q-.324.288-2.43 2.25t-4.518 4.194-4.914 4.572-4.212 3.978-1.818 1.854l-12.564 20.88q.252-.252 2.412-2.232t4.536-4.194 4.896-4.572 4.212-3.996 1.8-1.818zm23.292-1.98q0 7.236-3.744 13.356-.108-.072-.612-.396t-.954-.594-.594-.27q-.468 0-.468.468 0 .36 2.124 1.584-2.664 4.032-6.642 6.858t-8.694 3.978l-.576-2.412q-.036-.36-.54-.36-.18 0-.288.198t-.072.342l.576 2.448q-2.592.54-5.256.54-7.164 0-13.392-3.78.036-.072.468-.738t.774-1.206.342-.684q0-.468-.468-.468-.216 0-.612.522t-.81 1.242-.486.828q-4.068-2.7-6.912-6.75t-3.96-8.802l2.484-.54q.36-.108.36-.54 0-.18-.198-.288t-.378-.072l-2.448.54q-.504-2.592-.504-5.004 0-7.416 3.924-13.644.072.036.666.432t1.08.684.63.288q.468 0 .468-.432 0-.216-.45-.558t-1.17-.774l-.72-.432q2.772-4.032 6.804-6.804t8.784-3.852l.54 2.412q.072.36.54.36.18 0 .288-.198t.072-.378l-.54-2.376q2.556-.468 4.824-.468 7.344 0 13.644 3.924-1.404 2.016-1.404 2.34 0 .468.432.468.396 0 1.728-2.304 3.996 2.7 6.75 6.696t3.87 8.676l-2.016.432q-.36.072-.36.576 0 .18.198.288t.342.072l2.052-.468q.504 2.592.504 5.04zm3.06 0q0-5.868-2.286-11.196t-6.138-9.18-9.18-6.138-11.196-2.286-11.196 2.286-9.18 6.138-6.138 9.18-2.286 11.196 2.286 11.196 6.138 9.18 9.18 6.138 11.196 2.286 11.196-2.286 9.18-6.138 6.138-9.18 2.286-11.196zm3.456 0q0 6.552-2.556 12.528t-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556 12.528 2.556 10.296 6.876 6.876 10.296 2.556 12.528z","CHROME":"M32.148-64.439q8.64-.072 16.236 4.32 8.352 4.824 12.672 13.392l-26.712-1.404q-5.76-.324-10.584 2.682t-6.66 8.262l-9.936-15.264q4.608-5.724 11.196-8.838t13.788-3.15zm-26.892 14.58l12.132 23.868q2.592 5.148 7.596 7.812t10.548 1.62l-8.28 16.236q-7.632-1.188-13.86-5.67t-9.81-11.376-3.582-14.814q0-9.612 5.256-17.676zm57.096 6.084q2.088 5.4 2.142 11.178t-1.746 11.016-5.508 9.792-8.856 7.542q-8.28 4.788-17.928 4.284l14.58-22.428q3.168-4.716 2.97-10.458t-3.834-9.99zm-30.096.72q4.5 0 7.686 3.186t3.186 7.686-3.186 7.686-7.686 3.186-7.686-3.186-3.186-7.686 3.186-7.686 7.686-3.186z","FIREFOX":"M32.508.073q-10.188 0-18.162-5.418t-11.862-14.346q-2.088-4.716-2.412-10.836t.936-11.97 3.996-11.232 6.444-8.73l-.396 10.116q.396-.504 2.448-.558t2.52.558q1.512-2.916 5.778-4.968t8.442-2.124q-1.944 1.62-4.302 5.346t-2.106 5.886q.9.288 2.25.486t2.268.27 2.448.144 1.818.108q.54.18.342 1.638t-1.098 2.718q-.18.252-.594.666t-2.034 1.278-3.636 1.224l.54 6.804-5.004-2.412q-.648 1.548-.27 2.934t1.296 2.394 2.358 1.494 2.916.234q1.836-.324 3.528-1.242t3.006-1.62 2.646-.63q2.196.144 3.222 1.188t.702 2.34q-.036.072-.09.198t-.306.45-.648.558-1.134.378-1.674.036q-2.16 3.42-5.202 4.878t-7.542 1.062q2.664 2.196 5.85 2.97t6.066.216 5.562-1.872 4.608-3.15 2.898-3.744q1.548-3.276 1.404-6.93t-1.35-6.786-2.826-4.5q3.132 1.368 4.932 2.862t2.772 4.05q.54-6.12-2.07-12.348t-7.542-10.224q9.54 2.772 14.832 10.062t5.436 18.63q.072 4.572-1.458 9.18t-4.446 8.568-6.804 7.056-8.91 4.878-10.386 1.782z","OPERA":"M53.748-56.231q-5.94-3.96-12.924-3.96-5.58 0-10.548 2.628t-8.64 7.2q-2.7 3.348-4.302 7.848t-1.746 9.576v1.512q.144 5.076 1.746 9.576t4.302 7.848q3.672 4.572 8.64 7.2t10.548 2.628q6.984 0 12.924-3.96-4.356 3.888-9.882 6.048t-11.61 2.16q-1.044 0-1.548-.036-6.3-.288-11.988-2.952t-9.792-6.948-6.516-10.116-2.412-12.204q0-6.552 2.556-12.528t6.876-10.296 10.296-6.876 12.528-2.556h.108q6.048.036 11.538 2.178t9.846 6.03zm10.764 24.048q0 6.912-2.772 13.05t-7.668 10.674q-3.744 2.268-7.992 2.268-4.932 0-9.18-3.024 5.544-2.016 9.126-8.388t3.582-14.58q0-8.172-3.564-14.544t-9.108-8.424q4.284-2.988 9.144-2.988 4.284 0 8.136 2.34 4.86 4.5 7.578 10.62t2.718 12.996z","INTERNET_EXPLORER":"M64.512-30.707q0 2.016-.252 3.744h-41.436q0 5.256 3.942 8.802t9.27 3.546q3.564 0 6.678-1.674t4.914-4.698h15.228q-2.016 5.724-6.138 10.116t-9.63 6.786-11.556 2.394q-6.732 0-12.816-2.988-8.208 4.176-14.184 4.176-8.532 0-8.532-9.468 0-4.14 1.62-9.9.612-2.16 3.924-8.244 7.164-12.96 17.1-21.816-6.624 2.844-15.372 12.744 2.268-9.864 10.206-16.182t18.054-6.318q1.08 0 1.62.036 9.18-4.212 15.588-4.212 2.304 0 4.176.468t3.402 1.458 2.394 2.754.864 4.14q0 4.176-2.7 10.296 3.636 6.552 3.636 14.04zm-2.52-23.04q0-2.988-1.908-4.752t-4.932-1.764q-3.888 0-9.144 2.52 4.356 1.692 8.01 4.734t6.138 7.038q1.836-4.86 1.836-7.776zm-57.384 44.532q0 3.096 1.746 4.77t4.842 1.674q4.14 0 9.576-2.988-4.392-2.592-7.686-6.588t-4.95-8.82q-3.528 7.38-3.528 11.952zm18.144-25.668h26.208q-.18-5.112-4.068-8.532t-9.036-3.42q-5.184 0-9.054 3.42t-4.05 8.532z","TV":"M64.512-19.511v-34.56q0-.468-.342-.81t-.81-.342h-57.6q-.468 0-.81.342t-.342.81v34.56q0 .468.342.81t.81.342h57.6q.468 0 .81-.342t.342-.81zm4.608-34.56v34.56q0 2.376-1.692 4.068t-4.068 1.692h-26.496v4.608h12.672q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-29.952q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h12.672v-4.608h-26.496q-2.376 0-4.068-1.692t-1.692-4.068v-34.56q0-2.376 1.692-4.068t4.068-1.692h57.6q2.376 0 4.068 1.692t1.692 4.068z","CONTAO":"M4.968-59.831h7.092q-2.52 2.304-4.536 5.364-1.296 2.016-2.124 4.14t-1.08 4.518-.306 4.32.378 4.752.756 4.536 1.008 4.914l.216 1.008q1.836 8.568 2.916 11.844 2.052 6.156 5.472 9.9h-9.792q-1.728 0-2.952-1.224t-1.224-2.952v-46.944q0-1.728 1.224-2.952t2.952-1.224zm43.488 0h11.088q1.728 0 2.952 1.224t1.224 2.952v46.944q0 1.728-1.224 2.952t-2.952 1.224h-6.408q7.632-7.56 7.056-20.34l-16.884 3.636q-.072 1.62-.432 2.952t-1.116 2.592-2.142 2.142-3.366 1.314q-4.428.936-7.164-1.44-1.152-.972-1.908-2.196t-1.854-4.644-2.322-9.288q-1.26-5.868-1.638-9.468t-.198-5.004.828-2.772q.72-1.476 2.25-2.628t3.69-1.62q1.62-.432 3.006-.234t2.412.612 1.944 1.26 1.548 1.728 1.242 2.034l16.848-3.6q-2.448-6.3-6.48-10.332z","500PX":"M50.436-8.747l-.216.216q-4.068 4.104-9.324 6.3-5.544 2.304-11.412 2.304-5.94 0-11.412-2.304-5.328-2.268-9.324-6.3-4.068-4.032-6.3-9.288-1.512-3.708-1.944-6.804-.144-1.008 1.728-1.296 1.836-.288 2.016.72l.036.144q.648 3.24 1.656 5.724 1.8 4.464 5.472 8.136 3.528 3.528 8.136 5.472 4.752 2.016 9.936 2.016 5.148 0 9.936-2.016 4.608-1.98 8.1-5.472l.216-.216q.36-.36.9-.216.432.108 1.188.792 1.296 1.332.612 2.088zm-16.992-22.14l-2.376 2.376 2.268 2.268q.756.756-.252 1.764-.612.612-1.152.612-.36 0-.684-.36l-2.232-2.196-2.376 2.376q-.18.18-.54.18-.54 0-1.116-.576l-.072-.072q-.648-.54-.648-1.044 0-.252.288-.612l2.376-2.34-2.376-2.376q-.576-.576.504-1.62.648-.648 1.116-.648.216 0 .468.18l2.34 2.376 2.34-2.34q.648-.612 1.728.468.972.972.396 1.584zm16.956 2.052q0 4.248-1.656 8.208-1.62 3.78-4.536 6.696-2.88 2.88-6.732 4.536t-8.208 1.656-8.208-1.656-6.732-4.536q-2.952-2.952-4.5-6.696-.54-1.152-.54-1.44h-.036q-.324-.972 1.548-1.584 1.8-.576 2.16.432 1.332 3.564 3.492 6.012h.036v-12.276q.108-4.896 3.672-8.352 3.78-3.708 9.108-3.708 5.292 0 9.036 3.708t3.744 8.964q0 5.292-3.762 9.036t-9.018 3.744q-2.088 0-4.032-.576-1.008-.396-.468-2.196.576-1.836 1.584-1.548l.504.108q.504.108 1.17.216t1.098.108q3.744 0 6.336-2.574t2.592-6.282q0-3.636-2.592-6.156-2.556-2.556-6.3-2.556-3.852 0-6.408 2.88-2.304 2.592-2.304 5.76v14.868q3.96 2.412 8.712 2.412 3.456 0 6.66-1.314t5.616-3.726 3.726-5.58 1.314-6.588q0-7.128-5.076-12.204-5.04-5.04-12.204-5.04-7.2 0-12.24 5.04-1.908 1.908-2.772 3.132l-.072.072q-.288.396-.468.558t-.774.342-1.386-.108q-.756-.18-1.314-.594t-.558-.954v-24.48q0-.54.378-.954t.99-.414h31.572q1.08 0 1.08 1.98t-1.08 1.98h-29.196v17.388h.036q1.44-1.512 3.672-3.024t3.888-2.196q3.924-1.656 8.316-1.656 4.356 0 8.208 1.656t6.732 4.536q2.916 2.916 4.536 6.696 1.656 4.032 1.656 8.244zm-1.116-20.916q.324.288.324.648t-.198.648-.594.756q-.936.936-1.404.936-.324 0-.576-.252-3.816-3.276-7.452-4.788-4.608-2.016-9.936-2.016-4.788 0-9.432 1.764-.972.36-1.62-1.332-.324-.9-.288-1.368.108-.576.576-.72 4.68-2.052 10.764-2.052 5.904 0 11.376 2.304 4.932 2.088 8.46 5.472z","AMAZON":"M55.836-11.303q.54-.216.936-.108t.396.63-.54 1.206q-.468.576-1.584 1.566t-3.438 2.448-5.076 2.664-6.768 2.088-8.262.882q-4.284 0-8.568-1.116t-7.524-2.754-6.21-3.744-4.77-3.78-3.024-3.15q-.288-.324-.36-.594t.036-.432.288-.252.414-.072.414.162q6.912 4.212 10.8 5.976 14.004 6.336 28.764 3.24 6.84-1.44 14.076-4.86zm7.452-4.14q.396.576.09 2.502t-1.026 3.69q-1.224 2.988-3.06 4.464-.612.504-.936.324t0-.864q.756-1.62 1.602-4.374t.234-3.546q-.18-.252-.558-.414t-.972-.216-1.062-.09-1.26 0-1.134.072-1.116.108-.81.072q-.216.036-.468.054t-.396.036-.306.036-.252.018h-.36l-.108-.018-.072-.054-.054-.108q-.216-.576 1.692-1.44t3.708-1.08q1.656-.252 3.888-.036t2.736.864zm-14.184-15.948q0 1.116.486 2.304t1.152 2.088 1.35 1.656 1.188 1.152l.468.396-8.172 8.064q-1.44-1.332-2.844-2.718t-2.088-2.106l-.684-.72q-.396-.396-.9-1.188-1.368 2.124-3.51 3.69t-4.59 2.286-5.04.828-4.95-.756-4.23-2.358-2.988-4.068-1.116-5.85q0-3.024 1.008-5.544t2.592-4.194 3.834-2.988 4.41-2.052 4.68-1.242 4.302-.666 3.582-.234v-4.572q0-2.34-.756-3.492-1.224-1.908-4.356-1.908-.216 0-.594.036t-1.458.432-2.016 1.062-2.016 2.142-1.728 3.456l-10.584-.972q0-2.16.792-4.284t2.412-4.068 3.888-3.42 5.454-2.358 6.858-.882q3.6 0 6.516.9t4.662 2.214 2.916 2.988 1.62 3.096.45 2.646v21.204zm-24.192.756q0 3.096 2.52 4.788 2.376 1.584 5.004.792 3.024-.9 4.104-4.428.504-1.62.504-3.636v-5.832q-2.124.072-3.996.432t-3.834 1.206-3.132 2.556-1.17 4.122z","CALENDAR_PLUS_O":"M55.296-55.223q1.872 0 3.24 1.368t1.368 3.24v46.08q0 1.872-1.368 3.24t-3.24 1.368h-50.688q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h4.608v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h13.824v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h4.608zm-13.824-3.456v10.368q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828v-10.368q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828zm-27.648 0v10.368q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828v-10.368q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828zm41.472 54.144v-36.864h-50.688v36.864h50.688zm-23.04-20.736h8.064q.504 0 .828.324t.324.828v2.304q0 .504-.324.828t-.828.324h-8.064v8.064q0 .504-.324.828t-.828.324h-2.304q-.504 0-.828-.324t-.324-.828v-8.064h-8.064q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h8.064v-8.064q0-.504.324-.828t.828-.324h2.304q.504 0 .828.324t.324.828v8.064z","CALENDAR_MINUS_O":"M41.472-24.119v2.304q0 .504-.324.828t-.828.324h-20.736q-.504 0-.828-.324t-.324-.828v-2.304q0-.504.324-.828t.828-.324h20.736q.504 0 .828.324t.324.828zm-36.864 19.584h50.688v-36.864h-50.688v36.864zm13.824-43.776v-10.368q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v10.368q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm27.648 0v-10.368q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v10.368q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm13.824-2.304v46.08q0 1.872-1.368 3.24t-3.24 1.368h-50.688q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h4.608v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h13.824v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h4.608q1.872 0 3.24 1.368t1.368 3.24z","CALENDAR_TIMES_O":"M39.996-14.579l-1.656 1.656q-.324.324-.792.324t-.828-.324l-6.768-6.804-6.768 6.804q-.36.324-.828.324t-.792-.324l-1.656-1.656q-.324-.324-.324-.792t.324-.828l6.804-6.768-6.804-6.768q-.324-.36-.324-.828t.324-.792l1.656-1.656q.324-.324.792-.324t.828.324l6.768 6.768 6.768-6.768q.36-.324.828-.324t.792.324l1.656 1.656q.324.324.324.792t-.324.828l-6.768 6.768 6.768 6.768q.324.36.324.828t-.324.792zm-35.388 10.044h50.688v-36.864h-50.688v36.864zm13.824-43.776v-10.368q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v10.368q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm27.648 0v-10.368q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v10.368q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm13.824-2.304v46.08q0 1.872-1.368 3.24t-3.24 1.368h-50.688q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h4.608v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h13.824v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h4.608q1.872 0 3.24 1.368t1.368 3.24z","CALENDAR_CHECK_O":"M46.908-29.735l-18.432 18.432q-.36.324-.828.324t-.828-.324l-10.368-10.368q-.324-.36-.324-.828t.324-.792l1.656-1.656q.324-.324.792-.324t.828.324l7.92 7.92 15.984-15.984q.36-.324.828-.324t.792.324l1.656 1.656q.324.324.324.792t-.324.828zm-42.3 25.2h50.688v-36.864h-50.688v36.864zm13.824-43.776v-10.368q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v10.368q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm27.648 0v-10.368q0-.504-.324-.828t-.828-.324h-2.304q-.504 0-.828.324t-.324.828v10.368q0 .504.324.828t.828.324h2.304q.504 0 .828-.324t.324-.828zm13.824-2.304v46.08q0 1.872-1.368 3.24t-3.24 1.368h-50.688q-1.872 0-3.24-1.368t-1.368-3.24v-46.08q0-1.872 1.368-3.24t3.24-1.368h4.608v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h13.824v-3.456q0-2.376 1.692-4.068t4.068-1.692h2.304q2.376 0 4.068 1.692t1.692 4.068v3.456h4.608q1.872 0 3.24 1.368t1.368 3.24z","INDUSTRY":"M16.128-64.439q.936 0 1.62.684t.684 1.62v32.076l19.296-15.444q.612-.504 1.44-.504.936 0 1.62.684t.684 1.62v13.644l19.296-15.444q.612-.504 1.44-.504.936 0 1.62.684t.684 1.62v41.472q0 .936-.684 1.62t-1.62.684h-59.904q-.936 0-1.62-.684t-.684-1.62v-59.904q0-.936.684-1.62t1.62-.684h13.824z","MAP_PIN":"M18.432-25.271q2.376 0 4.608-.54v23.58q0 .936-.684 1.62t-1.62.684h-4.608q-.936 0-1.62-.684t-.684-1.62v-23.58q2.196.54 4.608.54zm0-39.168q7.632 0 13.032 5.4t5.4 13.032-5.4 13.032-13.032 5.4-13.032-5.4-5.4-13.032 5.4-13.032 13.032-5.4zm0 8.064q.504 0 .828-.324t.324-.828-.324-.828-.828-.324q-5.256 0-8.964 3.708t-3.708 8.964q0 .504.324.828t.828.324.828-.324.324-.828q0-4.284 3.042-7.326t7.326-3.042z","MAP_SIGNS":"M62.82-53.747q.36.36.36.828t-.36.828l-5.076 5.076q-1.008 1.008-2.448 1.008h-48.384q-.936 0-1.62-.684t-.684-1.62v-9.216q0-.936.684-1.62t1.62-.684h20.736v-2.304q0-.936.684-1.62t1.62-.684h4.608q.936 0 1.62.684t.684 1.62v2.304h18.432q1.44 0 2.448 1.008zm-35.172 33.084h9.216v18.432q0 .936-.684 1.62t-1.62.684h-4.608q-.936 0-1.62-.684t-.684-1.62v-18.432zm29.952-16.128q.936 0 1.62.684t.684 1.62v9.216q0 .936-.684 1.62t-1.62.684h-48.384q-1.44 0-2.448-1.008l-5.076-5.076q-.36-.36-.36-.828t.36-.828l5.076-5.076q1.008-1.008 2.448-1.008h18.432v-6.912h9.216v6.912h20.736z","MAP_O":"M72.72-64.043q1.008.72 1.008 1.908v50.688q0 .72-.396 1.296t-1.044.828l-23.04 9.216q-.864.396-1.728 0l-22.176-8.856-22.176 8.856q-.36.18-.864.18-.684 0-1.296-.396-1.008-.72-1.008-1.908v-50.688q0-.72.396-1.296t1.044-.828l23.04-9.216q.864-.396 1.728 0l22.176 8.856 22.176-8.856q1.152-.468 2.16.216zm-46.224 4.86v45.72l20.736 8.28v-45.72zm-21.888 7.812v45.72l19.584-7.812v-45.72zm64.512 38.376v-45.72l-19.584 7.812v45.72z","MAP":"M18.432-64.439q.468 0 .81.342t.342.81v52.992q0 .72-.612 1.008l-17.28 9.216q-.252.144-.54.144-.468 0-.81-.342t-.342-.81v-52.992q0-.72.612-1.008l17.28-9.216q.252-.144.54-.144zm44.928 0q.468 0 .81.342t.342.81v52.992q0 .72-.612 1.008l-17.28 9.216q-.252.144-.54.144-.468 0-.81-.342t-.342-.81v-52.992q0-.72.612-1.008l17.28-9.216q.252-.144.54-.144zm-40.32 0q.288 0 .504.108l18.432 9.216q.648.36.648 1.044v52.992q0 .468-.342.81t-.81.342q-.288 0-.504-.108l-18.432-9.216q-.648-.36-.648-1.044v-52.992q0-.468.342-.81t.81-.342z","COMMENTING":"M23.04-32.183q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm13.824 0q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm13.824 0q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm13.824 0q0 6.264-4.32 11.574t-11.736 8.388-16.2 3.078q-3.96 0-7.596-.648-6.228 6.228-15.66 8.244-1.872.36-3.096.468-.432.036-.792-.216t-.468-.648q-.144-.54.72-1.332.18-.18.846-.774t.918-.846.846-.918.864-1.134.738-1.332.72-1.728.522-2.07.45-2.61q-5.256-3.24-8.262-7.794t-3.006-9.702q0-6.264 4.32-11.574t11.736-8.388 16.2-3.078 16.2 3.078 11.736 8.388 4.32 11.574z","COMMENTING_O":"M23.04-32.183q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm13.824 0q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm13.824 0q0 1.908-1.35 3.258t-3.258 1.35-3.258-1.35-1.35-3.258 1.35-3.258 3.258-1.35 3.258 1.35 1.35 3.258zm-18.432-18.432q-7.344 0-13.734 2.502t-10.152 6.75-3.762 9.18q0 4.032 2.574 7.686t7.254 6.318l3.132 1.8-.972 3.456q-.864 3.276-2.52 6.192 5.472-2.268 9.9-6.156l1.548-1.368 2.052.216q2.484.288 4.68.288 7.344 0 13.734-2.502t10.152-6.75 3.762-9.18-3.762-9.18-10.152-6.75-13.734-2.502zm32.256 18.432q0 6.264-4.32 11.574t-11.736 8.388-16.2 3.078q-2.52 0-5.22-.288-7.128 6.3-16.56 8.712-1.764.504-4.104.792h-.18q-.54 0-.972-.378t-.576-.99v-.036q-.108-.144-.018-.432t.072-.36.162-.342l.216-.324.252-.306.288-.324q.252-.288 1.116-1.242t1.242-1.368 1.116-1.422 1.17-1.836.972-2.124.936-2.736q-5.652-3.204-8.91-7.92t-3.258-10.116q0-4.68 2.556-8.946t6.876-7.362 10.296-4.914 12.528-1.818 12.528 1.818 10.296 4.914 6.876 7.362 2.556 8.946z","HOUZZ":"M18.432-21.563l18.432-10.62v21.276l-18.432 10.656v-21.312zm-18.432-10.62v21.276l18.432-10.656zm18.432-31.932v21.276l-18.432 10.656v-21.276zm0 21.276l18.432-10.62v21.276z","VIMEO":"M61.524-45.791q-.36 8.496-11.952 23.436-11.988 15.516-20.232 15.516-5.112 0-8.64-9.468-1.584-5.76-4.752-17.352-2.592-9.432-5.652-9.432-.648 0-4.572 2.736l-2.772-3.528q.864-.756 3.888-3.474t4.68-4.158q5.616-4.968 8.676-5.256 3.42-.324 5.508 1.998t2.916 7.326q1.584 10.332 2.376 13.428 1.98 8.964 4.32 8.964 1.836 0 5.544-5.796 3.636-5.796 3.924-8.856.468-5.004-3.924-5.004-2.052 0-4.356.936 4.32-14.148 16.524-13.752 9.036.288 8.496 11.736z","BLACK_TIE":"M0-59.831h55.296v55.296h-55.296v-55.296zm39.06 40.14l-7.956-22.716 7.956-10.692h-22.824l7.956 10.692-7.956 22.716 11.412 10.944z","FONTICONS":"M0-59.831h55.296v55.296h-55.296v-55.296zm32.688 11.52l-.432 1.188 2.7 2.988-1.116 4.104.9.9 3.852-2.052 3.852 2.052.9-.9-1.116-4.104 2.7-2.988-.432-1.188h-3.42l-1.908-3.456h-1.152l-1.908 3.456h-3.42zm-9.612 5.868q1.152 0 1.602.576t.414 2.268l6.264-.756q0-1.98-.63-3.33t-1.818-2.016-2.484-.918-3.06-.252q-4.788 0-7.164 2.07t-2.376 6.57v2.592h-3.456v4.608h2.736q.72 0 .72.288v13.752q0 .504-.18.72t-.648.252l-2.628.252v3.168h16.128v-3.096l-5.364-.504q-.216-.036-.306-.054t-.126-.09-.018-.144.036-.252.018-.36v-13.932h6.876l1.368-4.608h-8.316q-.216 0-.072-.216t.144-.324v-2.88q0-.972.054-1.458t.27-1.008.702-.72 1.314-.198zm21.852 29.844v-3.096l-1.944-.324q-.252-.036-.342-.09t-.09-.108.036-.27.036-.432v-18.72h-9.9l-.828 3.636 2.988.792q.828.252.828.972v13.32q0 .504-.216.666t-.72.234l-2.52.324v3.096h12.672z","REDDIT_ALIEN":"M64.512-33.983q0 2.088-1.062 3.798t-2.862 2.61q.432 1.656.432 3.456 0 5.58-3.834 10.332t-10.458 7.506-14.4 2.754-14.382-2.754-10.44-7.506-3.834-10.332q0-1.692.396-3.384-1.836-.9-2.952-2.646t-1.116-3.834q0-2.952 2.088-5.058t5.076-2.106q3.06 0 5.22 2.268 7.848-5.472 18.54-5.832l4.176-18.756q.108-.468.54-.756t.936-.18l13.284 2.916q.648-1.332 1.944-2.142t2.844-.81q2.232 0 3.816 1.566t1.584 3.798-1.584 3.816-3.816 1.584-3.798-1.566-1.566-3.798l-12.024-2.664-3.744 16.992q10.8.324 18.684 5.76 2.088-2.196 5.148-2.196 2.988 0 5.076 2.106t2.088 5.058zm-49.464 7.164q0 2.232 1.566 3.816t3.798 1.584 3.816-1.584 1.584-3.816-1.584-3.798-3.816-1.566q-2.196 0-3.78 1.584t-1.584 3.78zm29.16 12.78q.396-.396.396-.936t-.396-.936q-.36-.36-.9-.36t-.936.36q-1.476 1.512-4.356 2.232t-5.76.72-5.76-.72-4.356-2.232q-.396-.36-.936-.36t-.9.36q-.396.36-.396.918t.396.954q1.548 1.548 4.266 2.448t4.41 1.062 3.276.162 3.276-.162 4.41-1.062 4.266-2.448zm-.108-7.38q2.232 0 3.798-1.584t1.566-3.816q0-2.196-1.584-3.78t-3.78-1.584q-2.232 0-3.816 1.566t-1.584 3.798 1.584 3.816 3.816 1.584z","EDGE":"M2.484-35.819h.036q.576-4.536 2.106-8.694t4.14-7.812 6.03-6.336 8.046-4.23 9.954-1.548q8.316 0 14.904 3.798t10.584 10.926q3.744 6.732 3.744 15.912v6.768h-40.5q.036 3.996 1.926 6.93t4.914 4.41 6.822 2.052 7.668.108 7.488-1.674 6.246-3.042v13.572q-3.312 1.98-8.262 3.312t-11.25 1.368-11.376-1.908q-6.804-2.628-11.214-8.964t-4.482-13.392q-.108-8.712 3.996-14.832t11.7-9.648q-1.728 2.16-2.808 4.518t-1.656 5.742h22.86q.288-2.772-.288-5.04t-1.692-3.654-2.538-2.394-2.898-1.476-2.7-.738-2.016-.306l-.792-.036q-4.86.18-9.342 1.602t-8.046 3.762-6.336 5.058-4.968 5.886z","CREDIT_CARD_ALT":"M0-10.295v-21.888h82.944v21.888q0 2.376-1.692 4.068t-4.068 1.692h-71.424q-2.376 0-4.068-1.692t-1.692-4.068zm23.04-8.064v4.608h13.824v-4.608h-13.824zm-13.824 0v4.608h9.216v-4.608h-9.216zm67.968-41.472q2.376 0 4.068 1.692t1.692 4.068v8.064h-82.944v-8.064q0-2.376 1.692-4.068t4.068-1.692h71.424z","CODIEPIE":"M55.764-39.995q1.98 0 3.078 1.026t1.098 3.006-1.224 2.952-3.276.972h-4.896v6.372h-.9v-14.328h6.12zm5.796 21.24l-.144.396-.18.36q-4.068 8.28-11.898 13.176t-17.082 4.896q-6.552 0-12.528-2.556t-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556q8.784 0 16.362 4.464t11.862 12.168l.072.144.288.576q-1.08.54-4.914 2.466t-5.886 3.042q-.216.108-17.244 9.648 13.824 6.588 28.764 13.176zm-29.304 18.036q9 0 16.65-4.77t11.61-12.87l-10.332-4.644q-2.592 5.04-7.416 7.992t-10.512 2.952q-5.436 0-10.08-2.7t-7.344-7.344-2.7-10.08 2.7-10.08 7.344-7.344 10.08-2.7 10.08 2.646 7.344 7.362l10.08-5.148q-4.176-7.488-11.556-11.844t-15.948-4.356q-4.284 0-8.37 1.134t-7.524 3.15-6.354 4.932-4.932 6.354-3.15 7.524-1.134 8.37 1.134 8.37 3.15 7.524 4.932 6.354 6.354 4.932 7.524 3.15 8.37 1.134z","MODX":"M51.372-38.915l-22.104-13.896 3.312-5.436h30.78zm-36.792 9.54l-6.624-4.176v-30.888l42.588 26.748zm36.684-4.86l5.292 3.42v30.888l-19.152-12.06zm-1.332-.756l-18 28.872h-30.78l12.816-20.556z","FORT_AWESOME":"M23.04-28.151v-8.064q0-.576-.576-.576h-3.456q-.576 0-.576.576v8.064q0 .576.576.576h3.456q.576 0 .576-.576zm18.432 0v-8.064q0-.576-.576-.576h-3.456q-.576 0-.576.576v8.064q0 .576.576.576h3.456q.576 0 .576-.576zm18.432 1.152v27.072h-23.04v-11.52q0-2.88-2.016-4.896t-4.896-2.016-4.896 2.016-2.016 4.896v11.52h-23.04v-27.072q0-.576.576-.576h3.456q.576 0 .576.576v4.032h4.608v-22.464q0-.576.576-.576h3.456q.576 0 .576.576v4.032h4.608v-4.032q0-.576.576-.576h3.456q.576 0 .576.576v4.032h4.608v-4.032q0-.576.576-.576h.576v-14.148q-1.152-.684-1.152-1.98 0-.936.684-1.62t1.62-.684 1.62.684.684 1.62q0 1.296-1.152 1.98v.324h9.792q.576 0 .576.576v8.064q0 .576-.576.576h-9.792v4.608h.576q.576 0 .576.576v4.032h4.608v-4.032q0-.576.576-.576h3.456q.576 0 .576.576v4.032h4.608v-4.032q0-.576.576-.576h3.456q.576 0 .576.576v22.464h4.608v-4.032q0-.576.576-.576h3.456q.576 0 .576.576z","USB":"M82.368-35.459q.576.288.576.972t-.576.972l-11.52 6.912q-.288.18-.576.18-.324 0-.576-.144-.576-.36-.576-1.008v-4.608h-30.888q1.332 2.088 2.988 5.94.576 1.332.882 1.98t.864 1.764.972 1.692.972 1.224 1.134.936 1.188.288h3.456v-3.456q0-.504.324-.828t.828-.324h11.52q.504 0 .828.324t.324.828v11.52q0 .504-.324.828t-.828.324h-11.52q-.504 0-.828-.324t-.324-.828v-3.456h-3.456q-1.152 0-2.196-.36t-1.836-.846-1.62-1.458-1.332-1.656-1.206-2.052-1.026-2.07-1.008-2.178q-.828-1.908-1.332-2.934t-1.296-2.34-1.602-1.926-1.674-.612h-12.96q-.792 3.024-3.276 4.968t-5.652 1.944q-3.816 0-6.516-2.7t-2.7-6.516 2.7-6.516 6.516-2.7q3.168 0 5.652 1.944t3.276 4.968h3.744q.864 0 1.674-.612t1.602-1.926 1.296-2.34 1.332-2.934q.684-1.476 1.008-2.178t1.026-2.07 1.206-2.052 1.332-1.656 1.62-1.458 1.836-.846 2.196-.36h3.852q.756-2.052 2.52-3.33t3.996-1.278q2.88 0 4.896 2.016t2.016 4.896-2.016 4.896-4.896 2.016q-2.232 0-3.996-1.278t-2.52-3.33h-3.852q-.612 0-1.188.288t-1.134.936-.972 1.224-.972 1.692-.864 1.764-.882 1.98q-1.656 3.852-2.988 5.94h40.104v-4.608q0-.648.576-1.008t1.152.036z","PRODUCT_HUNT":"M41.4-37.007q0 2.016-1.422 3.42t-3.438 1.404h-9.108v-9.684h9.108q2.016 0 3.438 1.422t1.422 3.438zm6.444 0q0-4.68-3.294-7.992t-8.01-3.312h-15.588v32.256h6.48v-9.684h9.108q4.68 0 7.992-3.294t3.312-7.974zm16.668 4.824q0 6.552-2.556 12.528t-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556 12.528 2.556 10.296 6.876 6.876 10.296 2.556 12.528z","MIXCLOUD":"M59.22-24.911q0-2.124-1.224-3.834t-3.132-2.466q-.252 1.62-.828 3.312-.252.864-.99 1.368t-1.602.504q-.432 0-.864-.108-1.116-.36-1.62-1.386t-.144-2.106q.828-2.556.828-5.148 0-4.428-2.196-8.19t-5.976-5.958-8.208-2.196q-4.824 0-8.892 2.628t-6.012 6.984q3.888 1.008 6.768 3.816.792.828.792 1.98t-.792 1.944-1.944.792-1.98-.792q-2.7-2.7-6.48-2.7-3.816 0-6.516 2.682t-2.7 6.498 2.7 6.498 6.516 2.682h37.656q2.844 0 4.842-1.998t1.998-4.806zm5.508 0q0 5.112-3.618 8.712t-8.73 3.6h-37.656q-6.084 0-10.404-4.302t-4.32-10.386q0-5.508 3.6-9.612t8.964-4.896q2.232-6.624 7.956-10.728t12.744-4.104q8.46 0 14.706 5.706t7.074 14.022q4.176.9 6.93 4.266t2.754 7.722zm9 0q0 6.3-3.492 11.484-.828 1.188-2.304 1.188-.864 0-1.548-.468-.936-.612-1.152-1.746t.432-2.07q2.556-3.744 2.556-8.388t-2.556-8.388q-.648-.936-.432-2.052t1.152-1.764 2.07-.414 1.782 1.17q3.492 5.112 3.492 11.448zm9.216 0q0 8.784-4.824 15.948-.828 1.224-2.304 1.224-.828 0-1.512-.468-.936-.648-1.17-1.764t.414-2.052q3.888-5.904 3.888-12.888 0-7.02-3.888-12.852-.648-.936-.414-2.07t1.17-1.746q.936-.648 2.052-.432t1.764 1.188q4.824 7.128 4.824 15.912z","SCRIBD":"M54-8.675q0 3.204-2.268 5.49t-5.508 2.286-5.526-2.286-2.286-5.49q0-3.24 2.286-5.526t5.526-2.286 5.508 2.286 2.268 5.526zm-8.388-10.116q-4.14.54-6.93 3.69t-2.79 7.398q0 2.664 1.188 4.968-5.256 2.808-13.644 2.808-3.924 0-7.236-.756t-5.526-1.962-3.978-2.754-2.736-3.06-1.602-2.988-.846-2.394-.216-1.422q0-.684.162-1.53t.666-2.016 1.314-2.088 2.304-1.566 3.402-.648 3.384.63 2.268 1.476 1.278 1.908.63 1.764.144 1.206q0 1.224-.828 2.916 1.008.972 2.952 1.512t3.348.612l1.44.036q4.14 0 6.84-1.836t2.7-4.788q0-.936-.324-1.746t-1.134-1.602-1.782-1.476-2.664-1.584-3.366-1.71-4.302-2.034l-1.548-.72q-4.176-1.98-6.732-3.6t-4.41-3.672-2.592-4.518-.738-5.85q0-2.808.738-5.4t2.376-4.95 4.05-4.104 5.994-2.772 7.974-1.026q4.32 0 7.92.936t5.922 2.412 3.942 3.384 2.304 3.798.684 3.726q0 1.656-.54 2.97t-1.314 2.088-1.746 1.296-1.764.702-1.404.18h-1.44l-1.404-.18-1.584-.504-1.476-1.008-1.332-1.656-.864-2.538-.36-3.51q-.54-.576-2.124-.918t-2.916-.378l-1.332-.036q-2.448 0-4.23 1.116t-2.538 2.52-.756 2.736q0 .864.18 1.548t.864 1.656 1.908 1.836 3.492 1.926 5.4 2.106q2.736.9 4.986 1.926t3.924 1.998 2.988 2.124 2.178 2.142 1.476 2.25.954 2.232.522 2.286.216 2.232.036 2.25z","PAUSE_CIRCLE":"M25.344-21.815v-20.736q0-.504-.324-.828t-.828-.324h-9.216q-.504 0-.828.324t-.324.828v20.736q0 .504.324.828t.828.324h9.216q.504 0 .828-.324t.324-.828zm16.128 0v-20.736q0-.504-.324-.828t-.828-.324h-9.216q-.504 0-.828.324t-.324.828v20.736q0 .504.324.828t.828.324h9.216q.504 0 .828-.324t.324-.828zm13.824-10.368q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","PAUSE_CIRCLE_O":"M27.648-59.831q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878-3.708 13.878-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708zm0 47.232q5.328 0 9.828-2.628t7.128-7.128 2.628-9.828-2.628-9.828-7.128-7.128-9.828-2.628-9.828 2.628-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628zm3.456-8.064q-.504 0-.828-.324t-.324-.828v-20.736q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v20.736q0 .504-.324.828t-.828.324h-6.912zm-13.824 0q-.504 0-.828-.324t-.324-.828v-20.736q0-.504.324-.828t.828-.324h6.912q.504 0 .828.324t.324.828v20.736q0 .504-.324.828t-.828.324h-6.912z","STOP_CIRCLE":"M39.168-21.815v-20.736q0-.504-.324-.828t-.828-.324h-20.736q-.504 0-.828.324t-.324.828v20.736q0 .504.324.828t.828.324h20.736q.504 0 .828-.324t.324-.828zm16.128-10.368q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","STOP_CIRCLE_O":"M27.648-59.831q7.524 0 13.878 3.708t10.062 10.062 3.708 13.878-3.708 13.878-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708zm0 47.232q5.328 0 9.828-2.628t7.128-7.128 2.628-9.828-2.628-9.828-7.128-7.128-9.828-2.628-9.828 2.628-7.128 7.128-2.628 9.828 2.628 9.828 7.128 7.128 9.828 2.628zm-10.368-8.064q-.504 0-.828-.324t-.324-.828v-20.736q0-.504.324-.828t.828-.324h20.736q.504 0 .828.324t.324.828v20.736q0 .504-.324.828t-.828.324h-20.736z","SHOPPING_BAG":"M63.252-13.751l1.26 11.268q.108 1.008-.576 1.8-.684.756-1.728.756h-59.904q-1.044 0-1.728-.756-.684-.792-.576-1.8l1.26-11.268h61.992zm-3.348-30.204l3.096 27.9h-61.488l3.096-27.9q.108-.864.756-1.458t1.548-.594h9.216v4.608q0 1.908 1.35 3.258t3.258 1.35 3.258-1.35 1.35-3.258v-4.608h13.824v4.608q0 1.908 1.35 3.258t3.258 1.35 3.258-1.35 1.35-3.258v-4.608h9.216q.9 0 1.548.594t.756 1.458zm-13.824-6.66v9.216q0 .936-.684 1.62t-1.62.684-1.62-.684-.684-1.62v-9.216q0-3.816-2.7-6.516t-6.516-2.7-6.516 2.7-2.7 6.516v9.216q0 .936-.684 1.62t-1.62.684-1.62-.684-.684-1.62v-9.216q0-5.724 4.05-9.774t9.774-4.05 9.774 4.05 4.05 9.774z","SHOPPING_BASKET":"M69.12-36.791q1.908 0 3.258 1.35t1.35 3.258-1.35 3.258-3.258 1.35h-.54l-4.14 23.832q-.288 1.656-1.584 2.736t-2.952 1.08h-46.08q-1.656 0-2.952-1.08t-1.584-2.736l-4.14-23.832h-.54q-1.908 0-3.258-1.35t-1.35-3.258 1.35-3.258 3.258-1.35h64.512zm-51.66 28.8q.936-.072 1.566-.81t.558-1.674l-1.152-14.976q-.072-.936-.81-1.566t-1.674-.558-1.566.81-.558 1.674l1.152 14.976q.072.9.738 1.512t1.566.612h.18zm14.796-2.304v-14.976q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62v14.976q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62zm13.824 0v-14.976q0-.936-.684-1.62t-1.62-.684-1.62.684-.684 1.62v14.976q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62zm12.672.18l1.152-14.976q.072-.936-.558-1.674t-1.566-.81-1.674.558-.81 1.566l-1.152 14.976q-.072.936.558 1.674t1.566.81h.18q.9 0 1.566-.612t.738-1.512zm-41.616-43.812l-3.348 14.832h-4.752l3.636-15.876q.684-3.168 3.204-5.166t5.76-1.998h6.012q0-.936.684-1.62t1.62-.684h13.824q.936 0 1.62.684t.684 1.62h6.012q3.24 0 5.76 1.998t3.204 5.166l3.636 15.876h-4.752l-3.348-14.832q-.396-1.584-1.638-2.592t-2.862-1.008h-6.012q0 .936-.684 1.62t-1.62.684h-13.824q-.936 0-1.62-.684t-.684-1.62h-6.012q-1.62 0-2.862 1.008t-1.638 2.592z","HASHTAG":"M35.676-27.575l2.304-9.216h-9.144l-2.304 9.216h9.144zm27.648-18.144l-2.016 8.064q-.252.864-1.116.864h-11.772l-2.304 9.216h11.196q.54 0 .9.432.36.504.216 1.008l-2.016 8.064q-.18.864-1.116.864h-11.772l-2.916 11.808q-.252.864-1.116.864h-8.064q-.576 0-.936-.432-.324-.432-.216-1.008l2.808-11.232h-9.144l-2.916 11.808q-.252.864-1.116.864h-8.1q-.54 0-.9-.432-.324-.432-.216-1.008l2.808-11.232h-11.196q-.54 0-.9-.432-.324-.432-.216-1.008l2.016-8.064q.252-.864 1.116-.864h11.772l2.304-9.216h-11.196q-.54 0-.9-.432-.36-.504-.216-1.008l2.016-8.064q.18-.864 1.116-.864h11.772l2.916-11.808q.252-.864 1.152-.864h8.064q.54 0 .9.432.324.432.216 1.008l-2.808 11.232h9.144l2.916-11.808q.252-.864 1.152-.864h8.064q.54 0 .9.432.324.432.216 1.008l-2.808 11.232h11.196q.54 0 .9.432.324.432.216 1.008z","BLUETOOTH":"M30.276-26.531l5.328 5.328-5.364 5.364zm-.036-21.996l5.364 5.364-5.328 5.328zm-4.68 44.064l16.704-16.704-11.016-11.016 11.016-11.016-16.704-16.704v21.996l-9.18-9.18-3.348 3.348 11.52 11.556-11.52 11.556 3.348 3.348 9.18-9.18v21.996zm25.884-27.72q0 7.524-1.152 13.158t-3.15 9.252-5.058 5.85-6.534 3.114-7.902.882-7.902-.882-6.534-3.114-5.058-5.85-3.15-9.252-1.152-13.158 1.152-13.158 3.15-9.252 5.058-5.85 6.534-3.114 7.902-.882 7.902.882 6.534 3.114 5.058 5.85 3.15 9.252 1.152 13.158z","BLUETOOTH_B":"M21.456-13.211l6.228-6.192-6.228-6.192v12.384zm0-25.56l6.228-6.192-6.228-6.192v12.384zm1.152 6.588l12.816 12.816-19.404 19.44v-25.596l-10.692 10.656-3.888-3.888 13.392-13.428-13.392-13.428 3.888-3.888 10.692 10.656v-25.596l19.404 19.44z","PERCENT":"M46.08-18.359q0-1.872-1.368-3.24t-3.24-1.368-3.24 1.368-1.368 3.24 1.368 3.24 3.24 1.368 3.24-1.368 1.368-3.24zm-27.648-27.648q0-1.872-1.368-3.24t-3.24-1.368-3.24 1.368-1.368 3.24 1.368 3.24 3.24 1.368 3.24-1.368 1.368-3.24zm36.864 27.648q0 5.724-4.05 9.774t-9.774 4.05-9.774-4.05-4.05-9.774 4.05-9.774 9.774-4.05 9.774 4.05 4.05 9.774zm-3.456-39.168q0 .72-.468 1.368l-38.016 50.688q-.684.936-1.836.936h-5.76q-.936 0-1.62-.684t-.684-1.62q0-.72.468-1.368l38.016-50.688q.684-.936 1.836-.936h5.76q.936 0 1.62.684t.684 1.62zm-24.192 11.52q0 5.724-4.05 9.774t-9.774 4.05-9.774-4.05-4.05-9.774 4.05-9.774 9.774-4.05 9.774 4.05 4.05 9.774z","GITLAB":"M3.744-39.023l28.512 36.54-31.248-22.68q-.648-.468-.9-1.242t0-1.53l3.636-11.088zm16.632 0h23.76l-11.88 36.54zm-7.128-22.032l7.128 22.032h-16.632l7.128-22.032q.288-.828 1.188-.828t1.188.828zm47.52 22.032l3.636 11.088q.252.756 0 1.53t-.9 1.242l-31.248 22.68 28.512-36.54zm0 0h-16.632l7.128-22.032q.288-.828 1.188-.828t1.188.828z","WPBEGINNER":"M13.824-34.487h5.76v-8.064h-5.76v8.064zm30.132 11.952v-3.312q-3.744 1.296-8.748 1.368-4.86.036-9.342-1.674t-7.938-4.41l.036 3.456q3.168 2.88 7.632 4.626t9.792 1.71q4.644 0 8.568-1.764zm-20.916-11.952h23.04v-8.064h-23.04v8.064zm41.472-1.152q0 6.732-3.564 12.672 3.204 3.672 3.204 8.244 0 5.652-4.662 9.648t-11.286 3.996q-4.392 0-8.1-1.89t-5.796-5.058q-.684.036-2.052.036t-2.052-.036q-2.088 3.168-5.796 5.058t-8.1 1.89q-6.624 0-11.286-3.996t-4.662-9.648q0-4.572 3.204-8.244-3.564-5.94-3.564-12.672 0-7.524 4.32-13.878t11.754-10.062 16.182-3.708 16.182 3.708 11.754 10.062 4.32 13.878z","WPFORMS":"M18.54-31.643v4.608h-9.072v-4.608h9.072zm0-9.18v4.572h-9.072v-4.572h9.072zm27.288 18.396v4.608h-12.276v-4.608h12.276zm0-9.216v4.608h-24.192v-4.608h24.192zm0-9.18v4.572h-24.192v-4.572h24.192zm4.86 30.96v-44.64q0-.288-.216-.504t-.504-.216h-1.152l-13.608 9.216-7.56-6.156-7.56 6.156-13.608-9.216h-1.152q-.288 0-.504.216t-.216.504v44.64q0 .288.216.504t.504.216h44.64q.288 0 .504-.216t.216-.504zm-30.78-39.96l6.66-5.4h-14.616zm15.48 0l7.956-5.4h-14.616zm19.908-4.68v44.64q0 2.232-1.548 3.78t-3.78 1.548h-44.64q-2.232 0-3.78-1.548t-1.548-3.78v-44.64q0-2.232 1.548-3.78t3.78-1.548h44.64q2.232 0 3.78 1.548t1.548 3.78z","ENVIRA":"M32.256-35.063q-3.744-7.056-5.76-10.008-5.004-7.272-12.492-11.448-1.224-.684-2.52-1.296-3.204-1.44-3.384-1.152t1.224 1.368l1.404 1.116q2.232 1.548 4.05 3.366t3.402 4.194 2.538 4.068 2.538 4.716q.324.612.468.9 1.584 3.024 3.024 5.508t3.528 5.544 4.158 5.4 4.716 4.446 5.346 3.258q5.508 2.376 5.544 2.16.036-.108-1.764-1.332-1.908-1.296-2.916-2.052-2.772-2.088-6.444-7.596t-6.66-11.16zm-12.492 19.548q-2.736-2.16-4.77-4.5t-3.528-5.166-2.556-5.562-2.106-6.696-1.872-7.524-2.178-9.072-2.754-10.404q9.828 0 17.91 1.296t13.644 3.312 9.756 5.202 6.678 6.21 3.96 7.146 2.016 7.182.45 7.146-.342 6.228-.72 5.166-.468 3.852l11.628 11.772h-3.744l-10.116-10.26q-.792.072-3.294.504t-4.374.684-4.968.216-5.778-.612-6.03-2.124-6.444-3.996z","UNIVERSAL_ACCESS":"M49.464-40.787q-.216-.936-1.026-1.422t-1.746-.27q-9.396 2.232-14.436 2.232t-14.436-2.232q-.936-.216-1.746.27t-1.026 1.422.27 1.746 1.422 1.026q6.984 1.656 10.908 2.088-.072 5.688-.558 9.684t-.954 5.598-1.476 4.158l-.324.756q-.36.9.036 1.764t1.296 1.224q.324.144.828.144 1.584 0 2.16-1.476l.288-.72q1.944-5.004 2.556-9.324h1.512q.612 4.32 2.556 9.324l.288.72q.576 1.476 2.16 1.476.504 0 .828-.144.9-.36 1.296-1.224t.036-1.764l-.324-.756q-1.008-2.556-1.476-4.158t-.954-5.598-.558-9.684q3.924-.432 10.908-2.088.936-.216 1.422-1.026t.27-1.746zm-12.6-5.22q0-1.908-1.35-3.258t-3.258-1.35-3.258 1.35-1.35 3.258 1.35 3.258 3.258 1.35 3.258-1.35 1.35-3.258zm20.736 13.824q0 5.148-1.998 9.846t-5.4 8.1-8.1 5.4-9.846 1.998-9.846-1.998-8.1-5.4-5.4-8.1-1.998-9.846 1.998-9.846 5.4-8.1 8.1-5.4 9.846-1.998 9.846 1.998 8.1 5.4 5.4 8.1 1.998 9.846zm-25.344-27.648q-5.616 0-10.728 2.196t-8.82 5.904-5.904 8.82-2.196 10.728 2.196 10.728 5.904 8.82 8.82 5.904 10.728 2.196 10.728-2.196 8.82-5.904 5.904-8.82 2.196-10.728-2.196-10.728-5.904-8.82-8.82-5.904-10.728-2.196zm32.256 27.648q0 6.552-2.556 12.528t-6.876 10.296-10.296 6.876-12.528 2.556-12.528-2.556-10.296-6.876-6.876-10.296-2.556-12.528 2.556-12.528 6.876-10.296 10.296-6.876 12.528-2.556 12.528 2.556 10.296 6.876 6.876 10.296 2.556 12.528z","WHEELCHAIR_ALT":"M51.768-35.171q1.224 1.26 1.044 2.952l-1.584 19.836q-.144 1.512-1.242 2.52t-2.574 1.008q-.216 0-.324-.036-1.584-.108-2.61-1.314t-.918-2.79l1.26-15.444-5.148.288q1.98 4.068 1.98 8.64 0 7.776-5.328 13.392l-4.932-4.932q3.276-3.636 3.276-8.46 0-5.22-3.69-8.928t-8.91-3.708q-4.824 0-8.496 3.312l-4.932-4.968q4.32-4.104 10.224-5.076l9.504-10.8-5.364-3.132-6.516 5.796q-1.188 1.08-2.772.99t-2.628-1.278-.954-2.772 1.242-2.628l8.604-7.668q.936-.828 2.16-.954t2.304.522l17.568 10.188q1.296.756 1.728 2.448.612 2.412-.936 4.212l-7.38 8.352 13.356-.72q1.764-.108 2.988 1.152zm-7.128-16.452q-2.664 0-4.536-1.872t-1.872-4.536 1.872-4.536 4.536-1.872 4.554 1.872 1.89 4.536-1.89 4.536-4.554 1.872zm-22.572 44.712q3.816 0 7.056-2.196l5.004 5.004q-5.256 4.176-12.06 4.176-5.328 0-9.846-2.628t-7.146-7.128-2.628-9.828q0-6.768 4.176-12.096l5.004 5.004q-2.16 3.168-2.16 7.092 0 5.22 3.69 8.91t8.91 3.69z","QUESTION_CIRCLE_O":"M31.68-21.239v5.76q0 .504-.324.828t-.828.324h-5.76q-.504 0-.828-.324t-.324-.828v-5.76q0-.504.324-.828t.828-.324h5.76q.504 0 .828.324t.324.828zm9.216-17.856q0 1.8-.54 3.24t-1.638 2.484-1.872 1.584-2.142 1.296q-1.152.648-1.674 1.008t-.936.864-.414 1.044v1.152q0 .504-.324.828t-.828.324h-5.76q-.504 0-.828-.324t-.324-.828v-2.448q0-1.26.378-2.322t.864-1.71 1.404-1.278 1.476-.918 1.602-.756q1.908-.9 2.7-1.548t.792-1.764q0-1.512-1.566-2.574t-3.438-1.062q-2.016 0-3.42.972-1.044.72-2.88 2.988-.324.432-.9.432-.396 0-.684-.216l-3.888-2.952q-.36-.252-.432-.72t.18-.828q4.392-6.912 12.564-6.912 4.644 0 8.586 3.222t3.942 7.722zm-13.248-16.128q-4.68 0-8.946 1.836t-7.344 4.914-4.914 7.344-1.836 8.946 1.836 8.946 4.914 7.344 7.344 4.914 8.946 1.836 8.946-1.836 7.344-4.914 4.914-7.344 1.836-8.946-1.836-8.946-4.914-7.344-7.344-4.914-8.946-1.836zm27.648 23.04q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","BLIND":"M13.176-53.243q-2.304 0-3.96-1.638t-1.656-3.978q0-2.304 1.656-3.942t3.96-1.638 3.942 1.638 1.638 3.942q0 2.34-1.638 3.978t-3.942 1.638zm19.836 23.112q0 1.8-1.08 2.43t-2.286.234-1.71-1.224l-13.212-15.768q-.252-.432-.504-.558t-.396-.054l-.108.108q-.252.288.144.756l4.392 5.004.036 12.744-5.796 16.452q-2.412 6.912-3.312 8.424-.576.936-1.008 1.152-1.8.936-3.708.036-1.044-.468-1.494-1.548t-.342-2.052q.072-.612 7.092-22.248l.18-14.976-3.06 5.904 1.26 7.992q.144.864-.036 1.512t-.504.99-.684.576-.612.27l-.252.072q-.684.108-1.242-.108t-.864-.576-.504-.792-.27-.702-.072-.342l-1.656-10.764 7.596-13.716q.828-1.224 4.068-1.224 2.7 0 3.852 1.44l15.264 18.756q.252.18.504.612l.108.108-.036.036q.252.468.252 1.044zm-14.508 5.4q1.548 4.068 3.186 8.1t2.502 6.048l.864 1.98q1.296 3.348 1.512 4.5.396 2.52-1.296 3.492-1.26.792-2.376.576t-1.836-.792-1.044-1.26h-.036q-.216-.576-.288-.9l-4.464-12.636zm29.664 21.312q1.116 1.764 1.116 2.052 0 .18-.108.252-.324.18-.522-.018t-.558-.936-.576-1.098q-4.104-6.192-15.228-23.796.108.036.252-.036t.252-.144l.108-.072q.396-.324.396-.612z","AUDIO_DESCRIPTION":"M18.144-28.655h6.156l-.036-9.54zm36.936-3.564q0-3.132-1.818-5.04t-5.274-1.908h-1.944v13.968h1.872q3.276 0 5.22-2.052t1.944-4.968zm-20.664-13.572l.036 27.216q0 .504-.342.864t-.846.36h-7.776q-.504 0-.846-.36t-.342-.864v-2.232h-10.476l-1.98 2.916q-.36.54-1.008.54h-9.612q-.756 0-1.098-.648t.126-1.26l20.016-27.252q.324-.504.972-.504h11.952q.504 0 .864.36t.36.864zm29.772 13.572q0 6.948-4.518 10.908t-11.682 3.96h-9.72q-.504 0-.864-.36t-.36-.864v-27.216q0-.504.36-.864t.864-.36h9.648q7.2 0 11.736 3.924t4.536 10.872zm5.616.036q0 .396-.018 1.044t-.288 2.574-.774 3.672-1.602 3.888-2.646 3.69h-1.836q1.368-1.62 2.394-3.762t1.494-4.032.756-3.528.324-2.61l.036-.972q0-.288-.018-.81t-.27-2.16-.72-3.294-1.476-4.014-2.376-4.482h1.548q1.476 1.692 2.592 3.852t1.638 4.014.828 3.456.378 2.538zm6.624 0q0 .396-.018 1.044t-.288 2.574-.774 3.672-1.62 3.888-2.664 3.69h-1.836q1.368-1.62 2.394-3.762t1.494-4.032.756-3.528.324-2.61l.036-.972q0-.288-.018-.81t-.27-2.16-.702-3.294-1.458-4.014-2.376-4.482h1.548q1.476 1.692 2.592 3.852t1.638 4.014.828 3.456.378 2.538zm6.516 0q0 .396-.018 1.044t-.288 2.574-.774 3.672-1.602 3.888-2.646 3.69h-1.836q1.368-1.62 2.376-3.762t1.476-4.032.756-3.528.324-2.61l.036-.972q0-.288-.018-.81t-.27-2.16-.702-3.294-1.458-4.014-2.376-4.482h1.548q1.476 1.692 2.592 3.852t1.638 4.014.828 3.456.342 2.538z","VOLUME_CONTROL_PHONE":"M22.212-3.635q0-.396-.468-2.088t-1.116-3.852-.72-2.484q-.036-.144-.18-.954t-.306-1.296-.486-.774q-.54-.504-1.836-.504-.828 0-2.52.198t-2.556.198q-1.224 0-1.692-.396-.216-.18-.396-.558t-.27-.72-.234-.864-.18-.666q-1.332-4.608-1.332-9.18t1.332-9.18l.18-.666.234-.864.27-.72.396-.558q.468-.396 1.692-.396.864 0 2.556.198t2.52.198q1.296 0 1.836-.504.324-.288.486-.774t.306-1.296.18-.954q.072-.324.72-2.484t1.116-3.852.468-2.088q0-.792-1.566-1.89t-2.718-1.53q-.72-.288-1.62-.288-1.224 0-3.528.648-2.052.612-3.474 1.458t-2.556 2.376-1.656 2.52-1.638 3.402q-.216.432-.324.684-1.764 3.852-2.448 7.776t-.684 8.784.684 8.784 2.448 7.776q2.016 4.392 2.988 5.796 2.268 3.276 6.444 4.572l.216.072q2.304.648 3.528.648.9 0 1.62-.288 1.152-.432 2.718-1.53t1.566-1.89zm5.724-32.868q-.936 0-1.62-.684t-.684-1.638.684-1.638q1.332-1.332 1.332-3.24 0-1.872-1.332-3.276-.684-.684-.684-1.62t.684-1.62 1.62-.684 1.62.684q2.7 2.7 2.7 6.516t-2.7 6.516q-.756.684-1.62.684zm6.516 6.516q-.972 0-1.62-.684-.684-.684-.684-1.62t.684-1.62q4.032-4.104 4.032-9.792t-4.032-9.792q-.684-.684-.684-1.62t.684-1.62 1.62-.684 1.62.684q5.4 5.4 5.4 13.032t-5.4 13.032q-.648.684-1.62.684zm6.516 6.516q-.972 0-1.62-.684-.684-.684-.684-1.62t.684-1.62q3.24-3.276 4.986-7.488t1.746-8.82-1.746-8.82-4.986-7.488q-.684-.684-.684-1.62t.684-1.62 1.62-.684 1.62.684q3.924 3.924 6.012 8.964t2.088 10.584-2.088 10.584-6.012 8.964q-.648.684-1.62.684z","BRAILLE":"M6.912-21.815q-2.376 0-4.068 1.692t-1.692 4.068 1.692 4.068 4.068 1.692 4.068-1.692 1.692-4.068-1.692-4.068-4.068-1.692zm18.432 0q-2.376 0-4.068 1.692t-1.692 4.068 1.692 4.068 4.068 1.692 4.068-1.692 1.692-4.068-1.692-4.068-4.068-1.692zm0-18.432q-2.376 0-4.068 1.692t-1.692 4.068 1.692 4.068 4.068 1.692 4.068-1.692 1.692-4.068-1.692-4.068-4.068-1.692zm27.648 18.432q-2.376 0-4.068 1.692t-1.692 4.068 1.692 4.068 4.068 1.692 4.068-1.692 1.692-4.068-1.692-4.068-4.068-1.692zm18.432 0q-2.376 0-4.068 1.692t-1.692 4.068 1.692 4.068 4.068 1.692 4.068-1.692 1.692-4.068-1.692-4.068-4.068-1.692zm-18.432-18.432q-2.376 0-4.068 1.692t-1.692 4.068 1.692 4.068 4.068 1.692 4.068-1.692 1.692-4.068-1.692-4.068-4.068-1.692zm18.432 0q-2.376 0-4.068 1.692t-1.692 4.068 1.692 4.068 4.068 1.692 4.068-1.692 1.692-4.068-1.692-4.068-4.068-1.692zm0-18.432q-2.376 0-4.068 1.692t-1.692 4.068 1.692 4.068 4.068 1.692 4.068-1.692 1.692-4.068-1.692-4.068-4.068-1.692zm-57.6 42.624q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm18.432 0q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm-18.432-18.432q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm18.432 0q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm-18.432-18.432q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm46.08 36.864q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm-27.648-36.864q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm46.08 36.864q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm-18.432-18.432q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm18.432 0q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm-18.432-18.432q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896zm18.432 0q0 2.88-2.016 4.896t-4.896 2.016-4.896-2.016-2.016-4.896 2.016-4.896 4.896-2.016 4.896 2.016 2.016 4.896z","ASSISTIVE_LISTENING_SYSTEMS":"M4.608-2.231q0 .936-.684 1.62t-1.62.684-1.62-.684-.684-1.62.684-1.62 1.62-.684 1.62.684.684 1.62zm6.912-6.912q0 .936-.684 1.62t-1.62.684-1.62-.684-.684-1.62.684-1.62 1.62-.684 1.62.684.684 1.62zm1.62-13.14l9.216 9.216-3.24 3.24-9.216-9.216zm12.204-.684q0 .936-.684 1.62t-1.62.684-1.62-.684-.684-1.62.684-1.62 1.62-.684 1.62.684.684 1.62zm25.452-11.52q0 2.124-.414 3.906t-1.35 3.366-1.584 2.43-1.908 2.322q-1.116 1.26-1.638 1.944t-1.206 1.8-.954 2.304-.27 2.664q0 5.724-4.05 9.774t-9.774 4.05q-.936 0-1.62-.684t-.684-1.62.684-1.62 1.62-.684q3.816 0 6.516-2.7t2.7-6.516q0-2.052.414-3.798t1.332-3.276 1.566-2.394 1.872-2.268q1.44-1.656 2.142-2.592t1.35-2.682.648-3.726q0-6.66-4.734-11.394t-11.394-4.734-11.394 4.734-4.734 11.394q0 .936-.684 1.62t-1.62.684-1.62-.684-.684-1.62q0-4.212 1.638-8.046t4.428-6.624 6.624-4.428 8.046-1.638 8.046 1.638 6.624 4.428 4.428 6.624 1.638 8.046zm-18.54 4.608q0 .936-.684 1.62t-1.62.684-1.62-.684-.684-1.62.684-1.62 1.62-.684 1.62.684.684 1.62zm10.368-4.608q0 .936-.684 1.62t-1.62.684-1.62-.684-.684-1.62q0-3.348-2.358-5.706t-5.706-2.358q-3.312 0-5.688 2.358t-2.376 5.706q0 .936-.684 1.62t-1.62.684-1.62-.684-.684-1.62q0-5.256 3.708-8.964t8.964-3.708 8.964 3.708 3.708 8.964zm14.184-10.404q.36.9-.036 1.764t-1.296 1.224q-.324.144-.828.144-.684 0-1.278-.396t-.846-1.08q-2.448-6.408-8.064-10.62-.756-.576-.9-1.512t.432-1.692q.612-.756 1.548-.9t1.692.432q6.588 4.932 9.576 12.636zm7.56-2.916q.324.9-.054 1.764t-1.278 1.224q-.396.144-.828.144-1.584 0-2.16-1.476-3.312-8.568-10.692-14.148-.792-.576-.918-1.512t.45-1.692q.576-.792 1.512-.918t1.692.45q8.46 6.3 12.276 16.164z","ASL_INTERPRETING":"M37.152-29.879q-2.124-.072-3.024-1.98-.612-1.224-1.728-1.926t-2.448-.702q-1.908 0-3.258 1.35t-1.35 3.258q0 2.016 1.296 3.204l.36.288q1.224 1.116 2.952 1.116 1.332 0 2.448-.702t1.728-1.926q.9-1.908 3.024-1.98zm20.448-4.608q0-2.016-1.296-3.204l-.36-.288q-1.224-1.116-2.952-1.116-1.332 0-2.448.702t-1.728 1.926q-.9 1.908-3.024 1.98 2.124.072 3.024 1.98.612 1.224 1.728 1.926t2.448.702q1.908 0 3.258-1.35t1.35-3.258zm-15.336-7.956q-.612 1.26-1.98 1.728t-2.628-.144q-2.232-1.116-4.824-1.116-1.836 0-3.564.612l.342-.018.342-.018q3.312 0 6.138 1.8t4.266 4.788q.612 1.296.126 2.646t-1.782 1.962q-.648.324-1.404.324.756 0 1.404.324 1.296.612 1.782 1.962t-.126 2.646q-1.44 2.988-4.266 4.788t-6.138 1.8h-.216q-.576-.072-1.584-.144l-10.44-.972-8.604 4.32q-.504.252-1.044.252-1.44 0-2.052-1.26l-5.76-11.52q-.396-.828-.144-1.71t1.044-1.35l7.524-4.284 5.328-9.612q.612-5.58 3.294-10.494t7.038-8.514q1.116-.9 2.538-.774t2.322 1.242.774 2.52-1.242 2.34q-2.52 2.124-4.212 4.608 4.428-3.024 9.612-3.636 1.44-.18 2.574.684t1.278 2.304q.18 1.44-.684 2.574t-2.304 1.278q-3.024.36-5.724 1.98 1.656-.36 3.564-.36 4.14 0 7.848 1.8 1.296.648 1.764 1.998t-.18 2.646zm34.668-5.76l5.76 11.52q.396.828.144 1.71t-1.044 1.35l-7.524 4.284-5.328 9.612q-.612 5.58-3.294 10.494t-7.038 8.514q-.936.792-2.196.792-1.62 0-2.664-1.26-.9-1.116-.774-2.52t1.242-2.34q2.52-2.124 4.212-4.608-4.428 3.024-9.612 3.636-.144.036-.432.036-1.296 0-2.286-.864t-1.134-2.16q-.18-1.44.684-2.574t2.304-1.278q3.024-.36 5.724-1.98-1.656.36-3.564.36-4.14 0-7.848-1.8-1.296-.648-1.764-1.998t.18-2.646q.612-1.26 1.98-1.728t2.628.144q2.232 1.116 4.824 1.116 1.836 0 3.564-.612l-.342.018-.342.018q-3.312 0-6.138-1.8t-4.266-4.788q-.612-1.296-.126-2.646t1.782-1.962q.648-.324 1.404-.324-.756 0-1.404-.324-1.296-.612-1.782-1.962t.126-2.646q1.44-2.988 4.266-4.788t6.138-1.8h.252q.504.072 1.512.144l10.476.972 8.604-4.32q.504-.252 1.044-.252 1.44 0 2.052 1.26z","HARD_OF_HEARING":"M38.016-34.487q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62q0-5.256-3.708-8.964t-8.964-3.708-8.964 3.708-3.708 8.964q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62q0-3.348 2.376-5.706t5.688-2.358 5.688 2.358 2.376 5.706zm-7.956-20.736q-4.212 0-8.046 1.638t-6.624 4.428-4.428 6.624-1.638 8.046q0 .936.684 1.62t1.62.684 1.62-.684.684-1.62q0-6.66 4.734-11.394t11.394-4.734 11.394 4.734 4.734 11.394q0 1.98-.648 3.726t-1.35 2.682-2.142 2.592q-1.224 1.404-1.872 2.268t-1.566 2.394-1.332 3.276-.414 3.798q0 3.816-2.7 6.516t-6.516 2.7q-.936 0-1.62.684t-.684 1.62.684 1.62 1.62.684q5.724 0 9.774-4.05t4.05-9.774q0-1.476.27-2.664t.954-2.304 1.206-1.8 1.638-1.944q1.26-1.476 1.908-2.322t1.584-2.43 1.35-3.366.414-3.906q0-4.212-1.638-8.046t-4.428-6.624-6.624-4.428-8.046-1.638zm-8.784 25.884l8.136 8.136-20.844 20.844q-.432.432-1.044.432t-1.044-.432l-6.048-6.048q-.432-.432-.432-1.044t.432-1.044zm36.756-34.668l6.048 6.048q.432.432.432 1.044t-.432 1.08l-8.388 8.388-.936.9-2.556 2.556q-2.376-5.508-7.02-9.288l3.276-3.276 7.452-7.452q.468-.432 1.08-.432t1.044.432z","GLIDE":"M31.176-45.899q0 .972-.468 3.384-.396 1.8-1.134 5.4t-1.098 5.4q-.072.396-.162.45t-.486.09q-.72.072-1.116.072-2.088 0-3.024-1.782t-.936-4.086q0-3.168 1.26-6.264t3.708-4.464q1.008-.504 1.836-.504 1.008 0 1.314.594t.306 1.71zm17.496 15.264q0-.504-1.404-2.718t-1.872-2.394q-.756-.288-1.224-.288-3.276 0-8.136 2.772l-.072-.072q.108-.792.99-4.86t.882-6.408q0-8.388-8.712-8.388-.864 0-2.448.216-3.384.612-6.066 3.222t-4.014 5.994-1.332 6.804q0 5.256 2.898 8.1t8.19 2.844q.9 0 .9.108t-.036.18q-.144 1.224-.936 4.212-.504 1.872-1.854 3.636t-2.97 1.764q-1.512 0-1.512-1.692 0-.864.378-1.71t.9-1.422 1.062-1.026.936-.72.396-.306q0-.108-.252-.36-.864-.792-2.106-1.314t-2.358-.522q-1.26 0-2.286 1.224t-1.476 2.7-.45 2.7q0 3.168 1.854 5.112t4.986 1.944q2.952 0 5.58-1.908t4.23-4.536 2.358-5.508q.216-.792.558-2.394t.522-2.394q.108-.432.504-.648 4.248-2.16 8.172-2.16 1.728 0 4.572.648l.144.036q.18 0 .342-.162t.162-.306zm6.624-18.828v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","GLIDE_G":"M26.784-53.459q0-.864-.072-1.386t-.306-1.08-.756-.828-1.35-.27q-1.404 0-2.808.828-3.78 2.088-5.724 6.858t-1.944 9.702q0 1.584.306 3.078t.954 2.898 1.89 2.25 2.934.846q.144 0 .648.018t.72 0 .576-.108.54-.306.252-.576q.576-2.772 1.728-8.334t1.728-8.334q.684-3.276.684-5.256zm27.144 23.616q0 .252-.27.486t-.558.234l-.216-.036q-.792-.108-2.232-.396t-2.592-.45-2.268-.162q-6.012 0-12.636 3.348-.54.288-.756.972-.36 1.296-.882 3.798t-.81 3.618q-.828 3.276-2.52 6.462t-4.05 5.922-5.562 4.428-6.66 1.692q-4.86 0-7.722-3.006t-2.862-7.902q0-1.908.702-4.212t2.268-4.194 3.51-1.89q1.368 0 4.32 1.206t2.988 2.214q0 .036-.594.45t-1.422 1.116-1.656 1.602-1.404 2.196-.576 2.664q0 1.188.594 1.908t1.746.72q1.62 0 3.06-1.134t2.394-2.808 1.728-3.798 1.17-3.852.576-3.24v-.324q0-.072-.126-.126t-.306-.054h-.36l-.36.018-.216.018q-8.172 0-12.672-4.41t-4.5-12.546q0-3.888 1.242-7.956t3.456-7.56 5.616-6.03 7.362-3.222q1.872-.324 3.816-.324 13.464 0 13.464 12.96 0 3.528-1.368 9.828t-1.548 7.596l.108.108q3.636-2.052 6.57-3.168t6.03-1.116q.792 0 1.908.468.684.252 2.88 3.69t2.196 4.194z","SIGNING":"M29.916-40.211q1.152 0 2.124.648l7.992 5.328q2.196 1.44 3.96 3.492l5.256 6.12q1.44 1.656 1.044 3.816l-2.592 14.868q-.216 1.152-1.062 1.926t-1.998.918l-18.972 2.016-12.672 1.152h-.324q-1.404 0-2.43-1.008t-1.026-2.448q0-1.332.972-2.304t2.34-1.152l9.36-1.152h-16.128q-1.476 0-2.502-1.08t-.954-2.556q.072-1.404 1.152-2.34t2.484-.936l15.912-.036-18.756-2.304q-1.476-.18-2.376-1.332t-.684-2.628q.216-1.26 1.242-2.07t2.358-.81h.36l17.316 2.16-12.636-3.384q-1.368-.36-2.232-1.494t-.648-2.466q.216-1.296 1.188-2.106t2.232-.81q.216 0 .72.072l16.128 3.456 7.812 1.332.108.018.108.018q.828 0 1.098-.828t-.45-1.296l-6.696-4.5q-1.26-.828-1.512-2.286t.648-2.646q.972-1.368 2.736-1.368zm-2.52 7.272l6.696 4.5-7.848-1.332-.18-.072-1.296-1.368-8.568-9.432-.09-.126-.09-.126q-.864-1.116-.666-2.52t1.35-2.304q1.116-.828 2.448-.63t2.304 1.206l5.112 5.292-.144.144-.18.144q-1.152 1.62-.828 3.564t1.98 3.06zm31.932-16.344l.54 9.576q.144 2.628-.396 5.292l-1.728 7.884q-.432 2.124-2.412 3.132l-3.816 1.944q.072-2.232-1.404-3.924l-5.256-6.12q-1.908-2.196-4.212-3.708l-7.992-5.328q-1.224-.828-2.736-.828-1.836 0-3.168 1.332l-8.46-11.232q-.9-1.188-.648-2.646t1.476-2.286q1.188-.792 2.574-.504t2.25 1.44l9.576 12.672-9.432-16.38q-.756-1.26-.378-2.7t1.71-2.124q1.26-.648 2.61-.216t2.07 1.656l8.676 15.12-4.896-12.132q-.54-1.26-.162-2.664t1.602-2.016q1.332-.684 2.736-.216t2.016 1.836l6.948 14.94 3.636 7.056q.288.54.828.63t.972-.27.396-.936l-.432-8.064q-.072-1.476.936-2.556t2.484-1.116q1.404 0 2.412 1.026t1.08 2.43z","LOW_VISION":"M12.06-15.623q-.072 0-.216-.072-3.096-2.052-6.066-5.22t-5.022-6.48q-.756-1.08-.756-2.484 0-.324.072-.684t.144-.648.252-.648.306-.576.378-.612.36-.54.432-.558.396-.522q6.624-9.036 16.272-13.14-3.96-7.128-3.96-7.596 0-.684.612-1.044 4.176-2.304 4.608-2.304.648 0 1.008.576l4.464 8.244q3.312-.684 6.912-.684 9.576 0 17.91 4.95t13.626 13.302q.72 1.116.72 2.484t-.72 2.484q-3.276 5.112-7.866 9.126t-10.026 6.318q3.96 7.128 3.96 7.596 0 .72-.612 1.044-4.176 2.304-4.572 2.304-.684 0-1.044-.576l-4.464-8.244-2.304-4.284-15.984-29.52.252-.252q-2.088.864-3.564 1.692.108.18 4.572 8.424t8.748 16.164 4.284 8.028q0 .252-.324.324-.468.108-2.592.108-2.052 0-2.16-.252l-16.416-30.276q-1.404 1.008-2.952 2.448.864 1.548 7.704 14.166t6.84 12.762q0 .36-.396.36-.504 0-2.97-.792t-2.61-1.008l-3.816-7.092-8.064-14.868q-1.584 1.908-2.808 3.816.072.108.648.9t.828 1.224l6.336 11.772q0 .36-.36.36zm29.88-3.672l1.764 3.276q9.828-3.996 16.2-13.86-6.48-9.972-16.524-14.004 2.412 2.304 3.708 5.346t1.296 6.354q0 3.816-1.692 7.218t-4.752 5.67zm-11.412-22.104q0 .72.504 1.224t1.224.504q3.096 0 5.292 2.196t2.196 5.292q0 .72.504 1.224t1.224.504 1.224-.504.504-1.224q0-4.536-3.204-7.74t-7.74-3.204q-.72 0-1.224.504t-.504 1.224zm13.176-2.34l-.324-.144.252.252z","VIADEO":"M37.8-24.623q0 7.74-5.292 13.464-5.328 5.796-13.608 5.796-8.352 0-13.608-5.796-5.292-5.724-5.292-13.464 0-5.292 2.448-9.738t6.804-7.074 9.648-2.628q3.456 0 6.552 1.116-1.152 2.232-1.404 4.536-2.376-1.008-5.148-1.008-6.012 0-10.098 4.428t-4.086 10.476q0 6.12 4.05 10.386t10.134 4.266 10.116-4.266 4.032-10.386q0-3.204-1.152-5.976 2.376-.468 4.428-1.764 1.476 3.528 1.476 7.632zm-7.344-6.804q0 6.912-2.862 12.42t-8.586 9.108l-.504.036q-1.044 0-2.232-.18 2.988-1.152 5.274-3.69t3.582-5.562 2.106-6.804 1.08-6.93.27-6.426q0-2.484-.108-3.708 1.98 5.76 1.98 11.736zm-1.98-11.808v.072q-2.628-7.704-7.416-15.84 3.168 2.124 5.13 6.714t2.286 9.054zm8.784 7.308q-2.988 0-5.76-2.7 7.848-4.32 10.44-8.892.684-1.332.756-2.016-1.512 3.384-5.022 5.994t-7.362 3.51q-1.26-1.944-1.26-4.068 0-1.332.612-2.844t1.548-2.448q1.656-1.584 5.652-2.664 2.124-.576 3.816-2.106t2.664-3.618q2.664 3.78 2.664 9.108 0 3.924-.864 6.12-1.152 2.772-3.186 4.698t-4.698 1.926z","VIADEO_SQUARE":"M37.8-26.963q0-2.808-1.008-5.292-1.476.9-3.06 1.224.792 1.8.792 4.104 0 4.212-2.772 7.146t-6.948 2.934-6.966-2.934-2.79-7.146q0-4.14 2.808-7.182t6.948-3.042q1.908 0 3.528.684.144-1.548.972-3.132-2.16-.756-4.5-.756-5.544 0-9.27 3.906t-3.726 9.486 3.726 9.396 9.27 3.816 9.27-3.834 3.726-9.378zm-6.408-12.78q.072.864.072 2.556 0 2.268-.18 4.428t-.738 4.77-1.458 4.68-2.466 3.816-3.618 2.538q.756.108 1.512.108h.36q7.884-5.004 7.884-14.796 0-4.176-1.368-8.1zm0 0q-.144-2.88-1.584-6.174t-3.528-4.698q3.312 5.616 5.112 10.872zm12.06-3.78q0-3.672-1.836-6.264-1.476 3.096-4.464 3.924-2.484.684-3.924 1.926t-1.44 3.582q0 1.44.864 2.772 2.664-.612 5.058-2.412t3.438-4.14q-.144 1.872-2.682 4.014t-4.986 3.51q1.872 1.872 3.96 1.872 1.836 0 3.24-1.332t2.16-3.24q.612-1.548.612-4.212zm11.844-5.94v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z","SNAPCHAT":"M46.044-23.111q0-.792-.792-.972-2.412-.54-4.248-2.124t-2.88-3.888q-.252-.684-.252-.9 0-.54.702-.936t1.548-.612 1.548-.738.702-1.314q0-.684-.666-1.134t-1.386-.45q-.432 0-1.152.288t-1.116.288q-.144 0-.432-.072.18-3.42.18-4.104 0-2.844-.612-4.104-1.296-2.808-3.708-4.374t-5.472-1.566q-7.164 0-9.9 5.94-.612 1.26-.612 4.104 0 .684.18 4.104-.144.072-.504.072-.432 0-1.152-.27t-1.08-.27q-.756 0-1.386.432t-.63 1.152q0 .756.702 1.278t1.548.738 1.548.612.702.936q0 .216-.252.9-2.304 4.968-7.128 6.012-.792.18-.792.972 0 1.656 4.932 2.448.072.18.216.936t.414 1.098.846.342q.432 0 1.35-.162t1.422-.162q1.26 0 2.412.54t1.944 1.17 2.07 1.17 2.754.54q1.548 0 2.844-.54t2.07-1.17 1.926-1.17 2.412-.54q.504 0 1.422.144t1.386.144q.576 0 .828-.36t.396-1.08.216-.9q4.932-.792 4.932-2.448zm9.252-9.072q0 7.524-3.708 13.878t-10.062 10.062-13.878 3.708-13.878-3.708-10.062-10.062-3.708-13.878 3.708-13.878 10.062-10.062 13.878-3.708 13.878 3.708 10.062 10.062 3.708 13.878z","SNAPCHAT_GHOST":"M30.528-59.831q4.824-.036 8.658 2.466t5.886 6.93q.972 2.088.972 6.444 0 1.692-.324 6.876.504.252 1.008.252.648 0 1.836-.486t1.836-.486q1.044 0 2.016.648t.972 1.656q0 1.152-1.134 1.944t-2.484 1.134-2.484 1.044-1.134 1.71q0 .54.432 1.548 1.332 2.952 3.69 5.4t5.202 3.636q1.008.432 2.88.828 1.008.216 1.008 1.26 0 2.52-7.884 3.708-.252.396-.396 1.404t-.504 1.674-1.188.666q-.72 0-2.232-.234t-2.304-.234q-1.332 0-2.232.18-1.152.18-2.268.81t-2.088 1.368-2.088 1.458-2.736 1.206-3.564.486q-1.872 0-3.474-.486t-2.7-1.206-2.07-1.458-2.088-1.368-2.232-.81q-.936-.18-2.268-.18-.864 0-2.358.27t-2.106.27q-.9 0-1.26-.666t-.504-1.71-.396-1.44q-7.884-1.188-7.884-3.708 0-1.044 1.008-1.26 1.872-.396 2.88-.828 2.808-1.152 5.202-3.636t3.69-5.4q.432-1.008.432-1.548 0-1.008-1.134-1.71t-2.502-1.062-2.502-1.134-1.134-1.89q0-.972.936-1.638t1.98-.666q.54 0 1.728.468t1.908.468q.648 0 1.152-.252-.324-5.112-.324-6.84 0-4.392.972-6.48 2.304-4.932 6.192-7.128t9.504-2.268z","SNAPCHAT_SQUARE":"M46.08-23.111q0-.792-.792-.972-2.412-.504-4.248-2.088t-2.88-3.924q-.252-.504-.252-.9 0-.54.702-.936t1.53-.612 1.53-.738.702-1.314q0-.684-.666-1.134t-1.386-.45q-.396 0-1.116.288t-1.152.288q-.144 0-.432-.072.18-2.268.18-4.14 0-2.808-.612-4.104-1.296-2.808-3.69-4.374t-5.49-1.566q-7.128 0-9.9 5.94-.648 1.368-.648 4.14 0 1.368.216 4.104-.36.072-.54.072-.396 0-1.134-.288t-1.098-.288q-.72 0-1.35.45t-.63 1.17q0 .756.702 1.278t1.53.738 1.53.612.702.936q0 .396-.252.9-2.304 4.968-7.128 6.012-.792.18-.792.972 0 1.692 4.968 2.484.072.18.216.936t.396 1.098.828.342q.468 0 1.386-.18t1.386-.18q1.26 0 2.43.54t1.962 1.17 2.07 1.17 2.754.54q1.548 0 2.844-.54t2.07-1.17 1.944-1.17 2.43-.54q.468 0 1.404.162t1.404.162q.54 0 .81-.342t.414-1.116.18-.882q4.968-.792 4.968-2.484zm9.216-26.352v34.56q0 4.284-3.042 7.326t-7.326 3.042h-34.56q-4.284 0-7.326-3.042t-3.042-7.326v-34.56q0-4.284 3.042-7.326t7.326-3.042h34.56q4.284 0 7.326 3.042t3.042 7.326z"}

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map