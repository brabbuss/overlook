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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss ***!
  \**********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/hotel-lobby-mod1.jpg */ "./src/images/hotel-lobby-mod1.jpg"));

// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml, body {\n  font-family: 'Poppins', sans-serif;\n  background: white;\n  margin: 0;\n  width: 100%;\n  margin: 0px;\n  display: flex; }\n\nbody {\n  flex-direction: row; }\n\nmain {\n  display: flex;\n  flex-direction: column; }\n\n#main_header {\n  height: 10vh;\n  display: flex;\n  width: 100%;\n  background-color: white;\n  flex: 1;\n  align-items: center;\n  box-shadow: -11px -3px 20px 0px black;\n  padding: 0 3em;\n  color: gray; }\n  #main_header svg {\n    cursor: pointer;\n    height: 3em;\n    width: auto;\n    fill: gray;\n    transition: all .35s ease-in-out;\n    opacity: 1; }\n    #main_header svg:hover {\n      fill: #00fff2; }\n  #main_header nav {\n    flex: 1; }\n  #main_header .profile-container {\n    display: flex;\n    flex: 1; }\n\n.dashboard_view {\n  overflow-y: scroll;\n  height: 90vh;\n  -ms-overflow-style: none; }\n  .dashboard_view::-webkit-scrollbar {\n    display: none; }\n\n.dashboard_view-logged_in {\n  overflow-y: scroll;\n  height: 80vh;\n  -ms-overflow-style: none; }\n  .dashboard_view-logged_in::-webkit-scrollbar {\n    display: none; }\n\n#main-content {\n  width: 100%;\n  height: 100vh; }\n\n.booking-toolbar {\n  height: 10vh;\n  display: flex;\n  width: 100%;\n  background-color: #00504c17;\n  flex: 1;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  padding: 0 2em;\n  color: #3F3F3F;\n  width: 100%; }\n  .booking-toolbar div:nth-child(1) {\n    display: flex;\n    font-size: 1em;\n    line-height: 1.3em;\n    padding: 0 2em; }\n  .booking-toolbar div:nth-child(2) {\n    display: flex;\n    font-size: 1em;\n    line-height: 1.3em; }\n  .booking-toolbar div:nth-child(3) {\n    display: flex;\n    font-size: 1em;\n    line-height: 1.3em;\n    flex: 1; }\n  .booking-toolbar div:nth-child(4) {\n    height: 2em;\n    border-radius: 3px;\n    border: 1px solid #3F3F3F;\n    display: flex;\n    flex-direction: column;\n    margin-right: 3em;\n    padding: 1em;\n    font-size: 1.3em;\n    justify-content: center;\n    transition: all ease-in-out .2s;\n    cursor: pointer; }\n    .booking-toolbar div:nth-child(4):hover {\n      font-size: 1.3em;\n      background-color: #00fff2;\n      color: white; }\n\n.toolbar-input {\n  padding-left: 2.7em;\n  font-family: 'Poppins';\n  font-weight: 500;\n  font-size: 1em;\n  border: none;\n  color: #3F3F3F;\n  background-color: #00504c00;\n  border-bottom: 1px solid black; }\n\n.toolbar_text {\n  padding: 0 .35em;\n  font-size: 1.5em;\n  text-decoration: none; }\n\n.toolbar_input:hover {\n  cursor: pointer !important; }\n\n.nav-links {\n  display: flex;\n  justify-content: space-around;\n  list-style: none; }\n  .nav-links .nav-link {\n    cursor: pointer;\n    color: gray;\n    transition: all .35s ease-in-out;\n    padding: 0 .35em;\n    font-size: 1.5em;\n    text-decoration: none; }\n    .nav-links .nav-link:hover {\n      background-color: #00fff2; }\n\n.active_nav {\n  background-color: #00fff2;\n  color: white !important;\n  font-weight: 700; }\n\n.login {\n  display: flex;\n  flex-direction: column;\n  backdrop-filter: blur(3px);\n  box-shadow: 0 0 15px #000000a1;\n  color: #3F3F3F;\n  height: content;\n  width: content;\n  position: absolute;\n  top: 3em;\n  left: 3em;\n  padding: 2em;\n  border-radius: 5px;\n  transition: all ease-in-out .3s; }\n  .login div {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: .5em; }\n    .login div p {\n      padding: 1em 0; }\n\n.main-intro {\n  display: flex; }\n\n.main_card {\n  display: flex;\n  margin: 2em 0;\n  align-items: center; }\n\n.main_image-wrapper {\n  overflow: hidden;\n  object-fit: cover; }\n\n.main_image {\n  width: 100%;\n  min-width: 350px;\n  position: relative; }\n\n.main_card-text-wrapper {\n  padding: 2em;\n  min-width: 50%; }\n  .main_card-text-wrapper h2 {\n    padding-bottom: 1em;\n    font-size: 4em;\n    font-weight: 700; }\n  .main_card-text-wrapper p {\n    font-size: 1.3em;\n    line-height: 1.8em;\n    font-weight: 200; }\n  .main_card-text-wrapper div {\n    width: content;\n    height: 1em;\n    transition: all ease-in-out .5s; }\n    .main_card-text-wrapper div .main-card_text-link {\n      z-index: 10;\n      font-weight: 600;\n      cursor: pointer;\n      transition: all ease-in-out .3s; }\n      .main_card-text-wrapper div .main-card_text-link:hover {\n        color: white;\n        z-index: 0;\n        background-color: #00fff2; }\n\n.result_text-wrapper {\n  padding: 2em;\n  padding-left: 3.3em;\n  min-width: 50%; }\n  .result_text-wrapper h2 {\n    padding-bottom: 1em;\n    font-size: 2em;\n    font-weight: 600; }\n  .result_text-wrapper p {\n    font-size: 1.3em;\n    line-height: 1.8em;\n    font-weight: 200; }\n  .result_text-wrapper div {\n    display: flex;\n    width: content; }\n    .result_text-wrapper div p:nth-child(1) {\n      font-size: 2em;\n      font-weight: 500; }\n    .result_text-wrapper div p:nth-child(2) {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      margin-left: 1em;\n      font-size: .8em;\n      line-height: 1.2em;\n      font-weight: 300; }\n  .result_text-wrapper .result_book-room-link {\n    text-align: center;\n    margin-top: 1em;\n    z-index: 10;\n    font-weight: 400;\n    transition: all ease-in-out .3s;\n    width: 15em;\n    padding: .5em 1em;\n    border-radius: 3px;\n    border: 1px solid #3F3F3F;\n    cursor: pointer; }\n    .result_text-wrapper .result_book-room-link:hover {\n      background-color: #00fff2;\n      color: white; }\n\n.main-intro {\n  display: flex; }\n\n.result_card {\n  display: flex;\n  margin: 2em 0;\n  align-items: center; }\n\n.result_image-wrapper {\n  overflow: hidden;\n  object-fit: cover;\n  height: 22em; }\n\n.result_image {\n  width: 100%;\n  min-width: 300px; }\n\n.my_booking-text_wrapper {\n  display: flex;\n  flex-direction: row;\n  padding: 2em;\n  padding-left: 3.3em;\n  min-width: 50%; }\n  .my_booking-text_wrapper div p:nth-child(1) {\n    text-decoration: underline;\n    padding-bottom: 1em;\n    font-size: 1.2em;\n    font-weight: 300; }\n  .my_booking-text_wrapper div p:nth-child(2) {\n    font-size: 1em;\n    line-height: 1.8em;\n    font-weight: 200; }\n  .my_booking-text_wrapper div p:nth-child(3) {\n    font-size: 1em;\n    line-height: 1.8em;\n    font-weight: 200; }\n  .my_booking-text_wrapper div p:nth-child(4) {\n    padding-bottom: .5em;\n    font-size: 1em;\n    line-height: 1.8em;\n    font-weight: 200; }\n  .my_booking-text_wrapper div:nth-child(2) {\n    padding: 0 1em; }\n  .my_booking-text_wrapper div:nth-child(3) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-weight: 500;\n    font-size: 1.6em;\n    align-items: center; }\n    .my_booking-text_wrapper div:nth-child(3) p {\n      text-decoration: none;\n      color: #3F3F3F; }\n    .my_booking-text_wrapper div:nth-child(3) p:nth-child(2) {\n      color: #3F3F3F;\n      text-align: center;\n      font-weight: 700;\n      line-height: 1em;\n      padding: 5px;\n      border: 1px solid #3F3F3F;\n      border-radius: 3px;\n      transition: all ease-in-out .5s; }\n      .my_booking-text_wrapper div:nth-child(3) p:nth-child(2):hover {\n        background-color: red;\n        color: white;\n        cursor: pointer; }\n\n.main-intro {\n  display: flex; }\n\n.my-booking_card {\n  display: flex;\n  margin: 2em 0;\n  align-items: center; }\n\n.my-booking_image-wrapper {\n  overflow: hidden;\n  object-fit: cover;\n  height: 22em; }\n\n.my-booking_image {\n  width: 100%;\n  min-width: 300px; }\n\n#hero-image {\n  background-position: 0em -28em;\n  background-size: 100%;\n  border: none;\n  height: 15vw;\n  width: 100%;\n  background-repeat: no-repeat;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + "); }\n\n#sidebar {\n  min-width: 20em;\n  max-width: 20em;\n  color: #cacaca;\n  flex: 1;\n  background-color: #3F3F3F;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 24px 0px 20px 20px #000000a6;\n  height: 100vh; }\n  #sidebar #sidebar_hotel-info-block {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    height: 10em;\n    margin-left: 1.5em; }\n    #sidebar #sidebar_hotel-info-block p {\n      margin-top: .5em;\n      align-self: center;\n      font-size: 1.3em;\n      font-weight: 400;\n      line-height: 1.3em; }\n    #sidebar #sidebar_hotel-info-block p:nth-child(2) {\n      font-size: 1em;\n      font-weight: 100;\n      margin-top: .5em;\n      align-self: center; }\n\n#sidebar_customer_stats #customer_stat_title_wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 600;\n  font-size: 2em; }\n  #sidebar_customer_stats #customer_stat_title_wrapper #customer_stat_title {\n    text-decoration: underline;\n    padding-top: 0;\n    padding-bottom: 1em;\n    margin: 0; }\n  #sidebar_customer_stats #customer_stat_title_wrapper #customer_stat_title_date {\n    text-align: center;\n    line-height: 1.2em; }\n\n.manager_stat_wrapper, .customer_stat_wrapper {\n  display: flex;\n  flex-direction: row;\n  padding: 1.5em 1em;\n  justify-content: space-between;\n  border-bottom: 1px solid #00fff2;\n  margin: 0 20px; }\n  .manager_stat_wrapper p, .customer_stat_wrapper p {\n    font-weight: 600; }\n  .manager_stat_wrapper p:nth-child(2), .customer_stat_wrapper p:nth-child(2) {\n    font-weight: 200; }\n\n#sidebar_manager_stats, #sidebar_customer_stats {\n  display: flex;\n  flex-direction: column; }\n  #sidebar_manager_stats #manager_stat_title_wrapper, #sidebar_customer_stats #manager_stat_title_wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-weight: 600;\n    font-size: 2em; }\n  #sidebar_manager_stats #manager_stat_customer_total_wrapper, #sidebar_customer_stats #manager_stat_customer_total_wrapper {\n    border: none; }\n\n.stat_gold {\n  color: gold; }\n\n.pattern_block {\n  align-self: flex-end;\n  height: 100%;\n  width: 40%;\n  color: #00fff2;\n  background: repeating-linear-gradient(-60deg, #00fff2, #00fff2 10px, #3F3F3F 10px, #3F3F3F 20px); }\n\n#manager_welcome-wrapper {\n  width: 100%;\n  height: 100vh;\n  padding: 10vh 20vw;\n  display: flex;\n  margin: 2em 0; }\n  #manager_welcome-wrapper p {\n    font-size: 2em;\n    text-align: center; }\n\n#sorry_message-wrapper {\n  width: 100%;\n  height: 100vh;\n  padding: 10vh 20vw;\n  display: flex;\n  margin: 2em 0; }\n  #sorry_message-wrapper p {\n    font-size: 2em;\n    text-align: center; }\n\n.pulse_info {\n  animation: pulse ease 1s;\n  animation-iteration-count: 8;\n  animation-direction: alternate; }\n\n@keyframes pulse {\n  0% {\n    color: inherit; }\n  100% {\n    color: #ff69b4; } }\n\n.fade-in-pageLoad {\n  animation: longFadeIn ease 3s; }\n\n@keyframes longFadeIn {\n  0% {\n    filter: blur(10px); }\n  100% {\n    filter: blur(0px); } }\n\n.fade-in {\n  animation: fadeIn ease 1s;\n  -webkit-animation: fadeIn ease 1s;\n  -moz-animation: fadeIn ease 1s;\n  -o-animation: fadeIn ease 1s;\n  -ms-animation: fadeIn ease 1s; }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    filter: blur(5px); }\n  100% {\n    opacity: 1;\n    filter: blur(0px); } }\n\n@-moz-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-o-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-ms-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.hidden {\n  display: none !important; }\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return '@media ' + item[2] + '{' + content + '}';
      } else {
        return content;
      }
    }).join('');
  }; // import a list of modules into the list


  list.i = function (modules, mediaQuery) {
    if (typeof modules === 'string') {
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    for (var i = 0; i < this.length; i++) {
      var id = this[i][0];

      if (id != null) {
        alreadyImportedModules[id] = true;
      }
    }

    for (i = 0; i < modules.length; i++) {
      var item = modules[i]; // skip already imported module
      // this implementation is not 100% perfect for weird media query combinations
      // when a module is imported multiple times with different media queries.
      // I hope this will never occur (Hey this way we have smaller bundles)

      if (item[0] == null || !alreadyImportedModules[item[0]]) {
        if (mediaQuery && !item[2]) {
          item[2] = mediaQuery;
        } else if (mediaQuery) {
          item[2] = '(' + item[2] + ') and (' + mediaQuery + ')';
        }

        list.push(item);
      }
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || '';
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */';
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;
  return '/*# ' + data + ' */';
}

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/url-escape.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/url-escape.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function escape(url, needQuotes) {
  if (typeof url !== 'string') {
    return url;
  } // If url is already wrapped in quotes, remove them


  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]/.test(url) || needQuotes) {
    return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"';
  }

  return url;
};

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/classes/Booking.js":
/*!********************************!*\
  !*** ./src/classes/Booking.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Booking; });
class Booking {
  constructor(bookingData) {
    this.id = bookingData.id;
    this.userID = bookingData.userID;
    this.date = bookingData.date;
    this.roomNumber = bookingData.roomNumber;
    this.roomServiceCharges = bookingData.roomServiceCharges || [];
  }
}


/***/ }),

/***/ "./src/classes/Manager.js":
/*!********************************!*\
  !*** ./src/classes/Manager.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _Booking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Booking */ "./src/classes/Booking.js");
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./User */ "./src/classes/User.js");
/* harmony import */ var _apiRequest__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./apiRequest */ "./src/classes/apiRequest.js");




class Manager extends _User__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(userData) {
    super(userData)
    this.id = 0;
    this.name = 'MANAGER'
  }

  totalAvailableRooms(bookingData, roomData, date) {
    return this.viewAvailableRooms(bookingData, roomData, date).length
  }

  totalRevenue(bookingData, roomData, date) {
    return Number(this.viewUnavailableRooms(bookingData, roomData, date)
    .reduce((totalRevenue, room, i) => {
      totalRevenue += room.costPerNight;
      return totalRevenue
    }, 0).toFixed(2))
  }

  totalPercentOccupied(bookingData, roomData, date) {
    return (this.viewUnavailableRooms(bookingData, roomData, date).length /
    roomData.length).toFixed(2)
  }

  viewCustomer(userData, name) {
    return new _User__WEBPACK_IMPORTED_MODULE_1__["default"](userData.find(user => user.name === name))
  }

  viewCustomerBookings(bookingData, userData, name) {
    let customer = this.viewCustomer(userData, name);
    return customer.viewMyBookings(bookingData);
  }

  viewCustomerInfo(bookingData, roomData, userData, name) {
    let customer = this.viewCustomer(userData, name);
    let bookings = customer.viewMyBookings(bookingData);
    let total = customer.viewMyTotal(bookingData, roomData);
    return {id: customer.id, name: customer.name, bookingHistory: bookings, totalSpent: total}
  }

  addCustomerBooking(userData, name, date, roomNumber, onSuccess) { //TDD see if API call is made
    let customer = this.viewCustomer(userData, name);
    return customer.bookMyRoom(date, roomNumber, onSuccess);
  }

  deleteCustomerBooking(bookingData, bookingID, onSuccess) {
    let booking =
      {
        "id": Number(bookingID)
      }
    _apiRequest__WEBPACK_IMPORTED_MODULE_2__["apiRequest"].deleteBooking(booking, onSuccess);
  }

  getDate() {
    let newDate = new Date();
    let month = newDate.getMonth()+1;
    let date = newDate.getDate();

    if (date.toString().length < 2) {
      date = '0' + date
    }
    if (month.toString().length < 2) {
      month = '0' + month
    }
    return `${newDate.getFullYear()}/${month}/${date}`
  }
}


/***/ }),

/***/ "./src/classes/User.js":
/*!*****************************!*\
  !*** ./src/classes/User.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return User; });
/* harmony import */ var _Booking__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Booking */ "./src/classes/Booking.js");
/* harmony import */ var _apiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiRequest */ "./src/classes/apiRequest.js");



class User {
  constructor(userData = {}) {
    this.id = userData.id || 777;
    this.name = userData.name || 'GUEST';
  }

  bookMyRoom(date, roomNumber, onSuccess) {
    let booking =
    {
      "userID": this.id,
      "date": date,
      "roomNumber": roomNumber
    }
    _apiRequest__WEBPACK_IMPORTED_MODULE_1__["apiRequest"].createBooking(booking, onSuccess)
  }

  viewMyBookings(bookingData) {
    let myBookings = bookingData.filter(booking => {
      return booking.userID === this.id
    });
    return myBookings.sort((a,b) => {
      return a.date < b.date ? -1 : 1;
    })
  }

  viewMyTotal(bookingData, roomData) {
    let grandTotal = this.viewMyBookings(bookingData).reduce((myGrandTotal, myBooking) => {
      let matchedRoom = roomData.find(room => room.number === myBooking.roomNumber)
      myGrandTotal += matchedRoom.costPerNight
      return myGrandTotal;
    }, 0).toFixed(2);
    return Number(grandTotal)
  }

  viewUnavailableRooms(bookingData, roomData, date) {
    return bookingData.reduce((bookedRooms, booking) => {
      if (booking.date === date) {
        bookedRooms.push(roomData.find(room => room.number === booking.roomNumber))
      }
      return bookedRooms
    }, []);
  }

  viewAvailableRooms(bookingData, roomData, date) {
    let unavailableRooms = this.viewUnavailableRooms(bookingData, roomData, date);
    return roomData.filter(room => !unavailableRooms.includes(room)); // not empathetic consider rewriting
  }

  viewAvailableRoomsByType(bookingData, roomData, date, roomType) {
    let availableRooms = this.viewAvailableRooms(bookingData, roomData, date);
    if (!roomType) {
      return availableRooms;
    }
    return availableRooms.filter(room => room.roomType === roomType);
  }
}


/***/ }),

/***/ "./src/classes/apiRequest.js":
/*!***********************************!*\
  !*** ./src/classes/apiRequest.js ***!
  \***********************************/
/*! exports provided: apiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRequest", function() { return apiRequest; });
const apiRequest = {
  getUserData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/users/users')
      .then(response => response.json())
      .catch(error => console.log(error, "Encountered an error"));
  },

  getRoomData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/rooms/rooms')
      .then(response => response.json())
      .catch(error => console.log(error, "Encountered an error"));
  },

  getBookingData() {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings')
      .then(response => response.json())
      .catch(error => console.log(error, "Encountered an error"));
  },

  createBooking(booking, onSuccess) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking),
    })
      .then(response => response.json())
      .then(response => {
        onSuccess()
        console.log("Booking successfully CREATED")
      })
      .catch(error => console.log(error, "Encountered an error"))
  },

  deleteBooking(booking, onSuccess) {
    return fetch('https://fe-apps.herokuapp.com/api/v1/overlook/1904/bookings/bookings', {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(booking),
    })
      .then(response => response.json())
      .then(response => {
        onSuccess()
        console.log("Booking successfully DELETED")
      })
      .catch(error => console.log(error, "Encountered an error"))
  }
};


/***/ }),

/***/ "./src/classes/domObject.js":
/*!**********************************!*\
  !*** ./src/classes/domObject.js ***!
  \**********************************/
/*! exports provided: domObject, profileIcon, loginBox, loginButton, usernameInput, passwordInput, navBooking, navRooms, navContact, navManagerHotel, navManagerBooking, navManagerHistory, navCustomerFindRooms, navCustomerAccount, navCustomerHotel, homeNavLinks, managerNavLinks, customerNavLinks, mainRoomTypes, mainIntro, calendar, calendarInput, managerUserSearch, bookingToolbar, logoutButton, dashboardCustomer, managerDashboard, mainContentContainer, managerUserSearchInput, dashboardHeader, toolbarSubmit, roomTypeDropdown, customerStats */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "domObject", function() { return domObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "profileIcon", function() { return profileIcon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginBox", function() { return loginBox; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginButton", function() { return loginButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usernameInput", function() { return usernameInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordInput", function() { return passwordInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navBooking", function() { return navBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navRooms", function() { return navRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navContact", function() { return navContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navManagerHotel", function() { return navManagerHotel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navManagerBooking", function() { return navManagerBooking; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navManagerHistory", function() { return navManagerHistory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navCustomerFindRooms", function() { return navCustomerFindRooms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navCustomerAccount", function() { return navCustomerAccount; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "navCustomerHotel", function() { return navCustomerHotel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "homeNavLinks", function() { return homeNavLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerNavLinks", function() { return managerNavLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerNavLinks", function() { return customerNavLinks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainRoomTypes", function() { return mainRoomTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainIntro", function() { return mainIntro; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendar", function() { return calendar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calendarInput", function() { return calendarInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerUserSearch", function() { return managerUserSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bookingToolbar", function() { return bookingToolbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logoutButton", function() { return logoutButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardCustomer", function() { return dashboardCustomer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerDashboard", function() { return managerDashboard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mainContentContainer", function() { return mainContentContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "managerUserSearchInput", function() { return managerUserSearchInput; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dashboardHeader", function() { return dashboardHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolbarSubmit", function() { return toolbarSubmit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomTypeDropdown", function() { return roomTypeDropdown; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "customerStats", function() { return customerStats; });
const domObject = {
  showLogin() {
    if (event.target.id === 'Layer_1' || event.target === 'svg' || event.target.classList.contains('main-card_text-link')) {
      usernameInput.value = '';
      passwordInput.value = '';
      loginBox.classList.contains('hidden') ? loginBox.classList.remove('hidden') : loginBox.classList.add('hidden');
    }
  },

  showToolbar(boolean) {
    boolean === true ? domObject.showElement(managerUserSearch) : domObject.hideElement(managerUserSearch);
    boolean === true ? domObject.showElement(bookingToolbar) : domObject.hideElement(bookingToolbar);
  },

  showToolbarCustomerHistory() {
    domObject.showToolbar(true);
    domObject.hideElement(document.querySelector('#toolbar_submit_button_wrapper'))
    domObject.hideElement(roomTypeDropdown)
    domObject.hideElement(calendar)
  },

  showDashboardHeader(boolean) {
    boolean === true ? domObject.showElement(dashboardHeader) : domObject.hideElement(dashboardHeader);
  },

  showHomePageManager() {
    domObject.hideHomeView(false);
    domObject.hideManagerView(true);
    domObject.hideCustomerView(true);
  },

  showCustomerDashboard(boolean) {
    boolean === true ? domObject.hideHomeView(true) : domObject.hideHomeView(false);
    boolean === true ? domObject.hideCustomerView(false) : domObject.hideCustomerView(true);
  },

  hideHomeView(boolean) {
    boolean === true ? domObject.hideElement(homeNavLinks) : domObject.showElement(homeNavLinks);
    boolean === true ? domObject.hideElement(mainContentContainer) : domObject.showElement(mainContentContainer);
    domObject.hideCustomerView(true);
    domObject.showDashboardHeader(false);
  },

  hideCustomerView(boolean) {
    boolean === true ? domObject.hideElement(customerNavLinks) : domObject.showElement(customerNavLinks)
    boolean === true ? domObject.hideElement(dashboardCustomer) : domObject.showElement(dashboardCustomer)
  },

  hideManagerView(boolean) {
    boolean === true ? domObject.hideElement(managerNavLinks) : domObject.showElement(managerNavLinks);
    !boolean === true ? domObject.hideElement(customerNavLinks) : domObject.showElement(customerNavLinks)
    boolean === true ? domObject.hideElement(managerDashboard) : domObject.showElement(managerDashboard)
  },

  showElement(element) {
    element.classList.remove('hidden')
  },

  hideElement(element) {
    element.classList.add('hidden')
  }
};

const profileIcon = document.querySelector('#Layer_1');
const loginBox = document.querySelector('.login');
const loginButton = document.querySelector('#submit-login')
const usernameInput = document.querySelector('#username')
const passwordInput = document.querySelector('#password')
const navBooking  = document.querySelector('#nav-booking')
const navRooms = document.querySelector('#nav-rooms')
const navContact = document.querySelector('#nav-contact')
const navManagerHotel = document.querySelector('#nav-manager-hotel')
const navManagerBooking = document.querySelector('#nav-manager-booking')
const navManagerHistory = document.querySelector('#nav-manager-history')
const navCustomerFindRooms = document.querySelector('#nav-customer-find-rooms')
const navCustomerAccount = document.querySelector('#nav-customer-account')
const navCustomerHotel = document.querySelector('#nav-customer-hotel')
const homeNavLinks = document.querySelector('#home-nav-links')
const managerNavLinks = document.querySelector('#manager-nav-links')
const customerNavLinks = document.querySelector('#customer-nav-links')
const mainRoomTypes = document.querySelector('#main_room-types')
const mainIntro = document.querySelector('#main_intro')
const calendar = document.querySelector('#calendar')
const calendarInput = document.querySelector('#calendar-input')
const managerUserSearch = document.querySelector('#manager-lookup-bar')
const bookingToolbar = document.querySelector('#booking-toolbar')
const logoutButton = document.querySelector('#logout-button')
const dashboardCustomer = document.querySelector('#dashboard-customer')
const managerDashboard = document.querySelector('#dashboard-manager')
const mainContentContainer = document.querySelector('#main-content-container')
const managerUserSearchInput = document.querySelector('#manager-search-user-input')
const dashboardHeader = document.querySelector('#dashboard_header')
const toolbarSubmit = document.querySelector('#toolbar_submit_button')
const roomTypeDropdown = document.querySelector('#room-type-dropdown-container')
const customerStats = document.querySelector('#sidebar_customer_stats')


/***/ }),

/***/ "./src/css/base.scss":
/*!***************************!*\
  !*** ./src/css/base.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/lib/loader.js!./base.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/lib/loader.js!./src/css/base.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/images/hotel-exterior.jpg":
/*!***************************************!*\
  !*** ./src/images/hotel-exterior.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/hotel-exterior.jpg";

/***/ }),

/***/ "./src/images/hotel-lobby-mod1.jpg":
/*!*****************************************!*\
  !*** ./src/images/hotel-lobby-mod1.jpg ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/hotel-lobby-mod1.jpg";

/***/ }),

/***/ "./src/images/hotel-rooftop.jpg":
/*!**************************************!*\
  !*** ./src/images/hotel-rooftop.jpg ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/hotel-rooftop.jpg";

/***/ }),

/***/ "./src/images/image-assets.js":
/*!************************************!*\
  !*** ./src/images/image-assets.js ***!
  \************************************/
/*! exports provided: roomImages, bathroomImages, lobbyImages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "roomImages", function() { return roomImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "bathroomImages", function() { return bathroomImages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lobbyImages", function() { return lobbyImages; });
const roomImages = [
  './images/room-gaudy.jpg',
  './images/room-kingly.jpg',
  './images/room-kinfolk.jpg',
  './images/room-modish.jpg',
  './images/room-small.jpg',
  './images/room-sparse.jpg',
  './images/room-suite.jpg',
  './images/room-xtrasmall.jpg',
  './images/room-xtrasmall2.jpg',
]

const bathroomImages = [
  './images/room-bath-fancy.jpg',
  './images/room-bath-fancy2.jpg',
]

const lobbyImages = [
  './images/hotel-lobby-mod1.jpg',
  './images/hotel-lobby-mod2.jpg',
  './images/hotel-lobby-mod3.jpg'
]


/***/ }),

/***/ "./src/images/room-gaudy.jpg":
/*!***********************************!*\
  !*** ./src/images/room-gaudy.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room-gaudy.jpg";

/***/ }),

/***/ "./src/images/room-kinfolk.jpg":
/*!*************************************!*\
  !*** ./src/images/room-kinfolk.jpg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room-kinfolk.jpg";

/***/ }),

/***/ "./src/images/room-kingly.jpg":
/*!************************************!*\
  !*** ./src/images/room-kingly.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room-kingly.jpg";

/***/ }),

/***/ "./src/images/room-modish.jpg":
/*!************************************!*\
  !*** ./src/images/room-modish.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room-modish.jpg";

/***/ }),

/***/ "./src/images/room-small.jpg":
/*!***********************************!*\
  !*** ./src/images/room-small.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room-small.jpg";

/***/ }),

/***/ "./src/images/room-sparse.jpg":
/*!************************************!*\
  !*** ./src/images/room-sparse.jpg ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room-sparse.jpg";

/***/ }),

/***/ "./src/images/room-suite.jpg":
/*!***********************************!*\
  !*** ./src/images/room-suite.jpg ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room-suite.jpg";

/***/ }),

/***/ "./src/images/room-xtrasmall.jpg":
/*!***************************************!*\
  !*** ./src/images/room-xtrasmall.jpg ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room-xtrasmall.jpg";

/***/ }),

/***/ "./src/images/room-xtrasmall2.jpg":
/*!****************************************!*\
  !*** ./src/images/room-xtrasmall2.jpg ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/room-xtrasmall2.jpg";

/***/ }),

/***/ "./src/images/user-profile.svg":
/*!*************************************!*\
  !*** ./src/images/user-profile.svg ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "images/user-profile.svg";

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/base.scss */ "./src/css/base.scss");
/* harmony import */ var _css_base_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_base_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_hotel_exterior_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./images/hotel-exterior.jpg */ "./src/images/hotel-exterior.jpg");
/* harmony import */ var _images_hotel_exterior_jpg__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_hotel_exterior_jpg__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_user_profile_svg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./images/user-profile.svg */ "./src/images/user-profile.svg");
/* harmony import */ var _images_user_profile_svg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_user_profile_svg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_hotel_rooftop_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./images/hotel-rooftop.jpg */ "./src/images/hotel-rooftop.jpg");
/* harmony import */ var _images_hotel_rooftop_jpg__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_hotel_rooftop_jpg__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_room_gaudy_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./images/room-gaudy.jpg */ "./src/images/room-gaudy.jpg");
/* harmony import */ var _images_room_gaudy_jpg__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_room_gaudy_jpg__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_room_kingly_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./images/room-kingly.jpg */ "./src/images/room-kingly.jpg");
/* harmony import */ var _images_room_kingly_jpg__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_room_kingly_jpg__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_room_kinfolk_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./images/room-kinfolk.jpg */ "./src/images/room-kinfolk.jpg");
/* harmony import */ var _images_room_kinfolk_jpg__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_room_kinfolk_jpg__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _images_room_modish_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./images/room-modish.jpg */ "./src/images/room-modish.jpg");
/* harmony import */ var _images_room_modish_jpg__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_images_room_modish_jpg__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _images_room_small_jpg__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./images/room-small.jpg */ "./src/images/room-small.jpg");
/* harmony import */ var _images_room_small_jpg__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_images_room_small_jpg__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _images_room_sparse_jpg__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./images/room-sparse.jpg */ "./src/images/room-sparse.jpg");
/* harmony import */ var _images_room_sparse_jpg__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_images_room_sparse_jpg__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _images_room_suite_jpg__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./images/room-suite.jpg */ "./src/images/room-suite.jpg");
/* harmony import */ var _images_room_suite_jpg__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_images_room_suite_jpg__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _images_room_xtrasmall_jpg__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./images/room-xtrasmall.jpg */ "./src/images/room-xtrasmall.jpg");
/* harmony import */ var _images_room_xtrasmall_jpg__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_images_room_xtrasmall_jpg__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _images_room_xtrasmall2_jpg__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./images/room-xtrasmall2.jpg */ "./src/images/room-xtrasmall2.jpg");
/* harmony import */ var _images_room_xtrasmall2_jpg__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_images_room_xtrasmall2_jpg__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _images_image_assets__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./images/image-assets */ "./src/images/image-assets.js");
/* harmony import */ var _classes_domObject__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./classes/domObject */ "./src/classes/domObject.js");
/* harmony import */ var _classes_User__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./classes/User */ "./src/classes/User.js");
/* harmony import */ var _classes_Manager__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./classes/Manager */ "./src/classes/Manager.js");
/* harmony import */ var _classes_Booking__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/Booking */ "./src/classes/Booking.js");
/* harmony import */ var _classes_apiRequest__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./classes/apiRequest */ "./src/classes/apiRequest.js");


















let userData;
let bookingData;
let roomData;
let user;
let date = getFormattedDate();

let fetchedUserData = _classes_apiRequest__WEBPACK_IMPORTED_MODULE_18__["apiRequest"].getUserData();
let fetchedBookingData = _classes_apiRequest__WEBPACK_IMPORTED_MODULE_18__["apiRequest"].getBookingData();
let fetchedRoomData = _classes_apiRequest__WEBPACK_IMPORTED_MODULE_18__["apiRequest"].getRoomData();







// ------------------ event listeners ------------------

document.addEventListener('click', ()=> console.log(event.target.id));

_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["profileIcon"].addEventListener('keypress', _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showLogin);
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["loginButton"].addEventListener('click', checkLogin);
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["logoutButton"].addEventListener('click', refreshPage)
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["navBooking"].addEventListener('click', showCustomerDashboard);
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].addEventListener('keypress', returnUserInfo);
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["navCustomerHotel"].addEventListener('click', showHomePage);
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["navCustomerAccount"].addEventListener('click', showMyBookings);
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["navCustomerFindRooms"].addEventListener('click', showCustomerDashboard)
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["dashboardCustomer"].addEventListener('click', bookRoom)
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerDashboard"].addEventListener('click', managerDashboardClickHandler)
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["toolbarSubmit"].addEventListener('click', sortByRoomType)
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerNavLinks"].addEventListener('click', managerNavHandler)
document.querySelector('#booking-toolbar').addEventListener('click', highlightLink)
document.querySelector('nav').addEventListener('click', highlightLink)
document.addEventListener('click', _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showLogin);
document.querySelector('#nav-contact').addEventListener('click', highlightHotelInfo);

// ------------------ General functions ---------------------

Promise.all([fetchedUserData, fetchedBookingData, fetchedRoomData])
  .then(value => {
    userData = value[0]['users'];
    bookingData = value[1]['bookings'];
    roomData = value[2]['rooms'];
    loadApp();
  })
  .catch(error => console.log(error))

function checkLogin() {
  let usernamePre = _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["usernameInput"].value.split('').slice(0,8).join('').toLowerCase()
  let userID = username.value.split('').slice(8).join('')
  let password = _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["passwordInput"].value.toString()
  if (password === 'overlook2020' && usernamePre === 'customer' && userID.length > 0 && userID < 51 && userID > 0) {
    user = new _classes_User__WEBPACK_IMPORTED_MODULE_15__["default"](userData[userID-1])
    showCustomerDashboard()
  } else if (password === 'overlook2020' && _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["usernameInput"].value.toLowerCase() === 'manager') {
    user = new _classes_Manager__WEBPACK_IMPORTED_MODULE_16__["default"]()
    showManagerDashboard()
  } else {
    alert('Invalid login information')
  }
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].hideElement(_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["loginBox"]);
  event.preventDefault();
}

function loadApp() {
  let calDate = date.replaceAll('/','-');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["calendarInput"].setAttribute('min', calDate);
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["calendarInput"].setAttribute('value', calDate);
}

function refreshPage() {
  window.location.reload();
}

function getCalendarDate() {
  return _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["calendarInput"].value.replaceAll('-','/')
}

function getFormattedDate() {
  let newDate = new Date();
  let month = newDate.getMonth()+1;
  let date = newDate.getDate();

  if (date.toString().length < 2) {
    date = '0' + date
  }
  if (month.toString().length < 2) {
    month = '0' + month
  }
  return `${newDate.getFullYear()}/${month}/${date}`
}

// -------------- Nav links and click handlers ----------------

function managerDashboardClickHandler() {
  if (event.target.classList.contains('delete_booking_button')) {
    managerDeleteBooking(event.target.getAttribute('value'), event.target.nextElementSibling.innerText)
  } else if (event.target.classList.contains('result_book-room-link')) {
    bookRoomManager()
  }
}

function managerNavHandler () {
  if (event.target.id === 'nav-manager-history') {
    returnUserInfo()
  } else if (event.target.id === 'nav-manager-booking') {
    showManagerBookForCustomer();
    loadAvailableRooms(date);
  } else if (event.target.id === 'nav-manager-history') {
    showManagerDashboard()
  }
}

function highlightLink() {
  document.querySelectorAll('.highlightable_link').forEach(node => {
    node.classList.remove('active_nav')
  });
  if (event.target.classList.contains('highlightable_link')) {
    event.target.classList.add('active_nav');
  }
}

function highlightHotelInfo() {
  document.querySelector('#sidebar_hotel-info-block').classList.add('pulse_info')
}

// ------------- Dashboard Display ------------------

function showHomePage() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].hideHomeView(false);
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showToolbar(false);
  document.querySelector('#sidebar_hotel-info-block').classList.remove('pulse_info');
}

function showMyBookings() {
  loadUserAccountInfo(bookingData);
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showToolbar(false);
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showDashboardHeader(true);
  showDashboardMessage();
}

function showDashboardMessage() {
  let bookingTotal = user.viewMyBookings(bookingData).length;
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["dashboardHeader"].innerHTML = '';
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["dashboardHeader"].insertAdjacentHTML('beforeend',
  `
  <p>Thanks for your continued support ${user.name}. You have ${bookingTotal > 1 ? bookingTotal + ' bookings' : bookingTotal + ' booking'} on record with us${bookingTotal > 20 ? '. WHOA!' : '!'}</p>
  `)
}

function showCustomerDashboard() {
  if (user instanceof _classes_User__WEBPACK_IMPORTED_MODULE_15__["default"]) {
    _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showCustomerDashboard(true);
    _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showToolbar(true);
    _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].hideElement(_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearch"]);
    _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showDashboardHeader(false);
    updateCustomerStats();
    loadAvailableRooms(date);
    _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["navCustomerFindRooms"].classList.add('active_nav')
  } else {
    alert('Please log in to view available rooms')
  }
}

function updateCustomerStats() {
  document.querySelector('#sidebar_customer_stats').classList.remove('hidden');
  document.querySelector('#customer_stat_title_date').innerText = `${user.name}`
  document.querySelector('#customer_stat_total_spent').innerText = `$${user.viewMyTotal(bookingData, roomData).toFixed()}`
  document.querySelector('#customer_stat_total_stays').innerText = `${user.viewMyBookings(bookingData).length}`
  document.querySelector('#customer_stat_loyalty_wrapper').innerHTML = '';
  document.querySelector('#customer_stat_loyalty_wrapper').insertAdjacentHTML('beforeend', `
    <p>LOYALTY LEVEL</p>
    <p id='customer_stat_loyalty' class='stat_gold'>${getLoyaltyStatus()}</p>
  `);
}

function getLoyaltyStatus() {
  let total = Number(user.viewMyTotal(bookingData, roomData));
  if (total < 1000) {
    return 'Associate'
  } else if (total > 1000 && total < 5000) {
    return 'Premier'
  } else if (total > 5000 && total < 10000) {
    return 'Executive'
  } else if (total > 10000 && total < 15000) {
    return 'Royalty'
  } else if (total > 15000) {
    return 'Venerated'
  }
}

function showManagerDashboard() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].hideElement(_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["customerStats"])
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].hideHomeView(true);
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].hideManagerView(false);
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showToolbarCustomerHistory();
  showManagerWelcomeMessage()
  updateManagerStats()
}

function showManagerWelcomeMessage() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerDashboard"].innerHTML = ''
  let roomsToRent = user.totalAvailableRooms(bookingData, roomData, date)
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerDashboard"].insertAdjacentHTML('beforeend', `
  <div id='manager_welcome-wrapper'><p id='manager_welcome'>Hey Boss! We've got ${!roomsToRent ? 'nothing' : roomsToRent + ' rooms'} available to book today!</p></div>
  `)
}

function showManagerBookForCustomer() {
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showElement(document.querySelector('#toolbar_submit_button_wrapper'))
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showElement(_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["roomTypeDropdown"])
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showElement(_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["calendar"])
}

function updateManagerStats(customerName) {
  document.querySelector('#sidebar_manager_stats').classList.remove('hidden');
  document.querySelector('#manager_stat_title_date').innerText = `${date}`;
  document.querySelector('#manager_stat_availability').innerText = `${user.totalAvailableRooms(bookingData, roomData, date)} vacancies`;
  document.querySelector('#manager_stat_total_revenue').innerText = `$${user.totalRevenue(bookingData, roomData, date).toFixed()}`;
  document.querySelector('#manager_stat_total_occupancy').innerText = `${user.totalPercentOccupied(bookingData, roomData, date)*100}%`;
  if (customerName) {
    document.querySelector('#manager_stat_customer_total_wrapper').innerHTML ='';
    document.querySelector('#manager_stat_customer_total_wrapper').insertAdjacentHTML('beforeend', `
      <p>CUSTOMER TOTAL</p>
      <p id='manager_stat_customer_total' class='stat_gold'>$${user.viewCustomerInfo(bookingData, roomData, userData, customerName).totalSpent.toFixed()}</p>
    `)
  }
}

function loadUserAccountInfo(bookingData, name) {
  let dashboardAndBookings = getCorrectDashAndBooking(bookingData, name);
  dashboardAndBookings[0].innerHTML = '';
  dashboardAndBookings[1].forEach((booking, i) => {
    let room = roomData.find(room => room.number === booking.roomNumber)
    let randomImage = _images_image_assets__WEBPACK_IMPORTED_MODULE_13__["roomImages"][Math.floor(Math.random() * _images_image_assets__WEBPACK_IMPORTED_MODULE_13__["roomImages"].length)];
    dashboardAndBookings[0].insertAdjacentHTML('beforeend',
    `
    <article id='my-booking_card-${i}' class='my-booking_card'>
    <div class='my-booking_image-wrapper'>
    <img class='my-booking_image' src=${randomImage}>
    </div>
    <section class='my_booking-text_wrapper'>
    <div>
    <p>room details</p>
    <p>${room.roomType}</p>
    <p>room no: ${room.number}</p>
    <p>${room.numBeds} ${room.numBeds > 1 ? room.bedSize + ' beds' : room.bedSize + ' bed'}</p>
    <p>${room.bidet ? 'amenities: <br>bidet' : ''}</p>
    </div>
    <div>
    <p>booking details</p>
    <p>${name ? name : user.name}</p>
    <p>for: ${booking.date}</p>
    <p>customer id: ${booking.userID}</p>
    <p>booking id:</p>
    <p>${booking.id}</p>
    </div>
    <div id='booking_total_${i}'>
    <p>$${room.costPerNight.toFixed(2)}</p>
    </div>
    </section>
    </article>
    `);
    if (user instanceof _classes_Manager__WEBPACK_IMPORTED_MODULE_16__["default"] && booking.date > date) {
      document.querySelector(`#booking_total_${i}`).insertAdjacentHTML('beforeend', `
        <p class='delete_booking_button' value=${booking.id}>DELETE <br>BOOKING</p>
        <span class='hidden'>${name}</span>
      `)
    }
  });
}

function loadAvailableRooms(date, roomType) {
  date = getCalendarDate()
  let dashboardAndBookings = getCorrectDashAndBooking(bookingData, name);
  let bookingArray = user.viewAvailableRoomsByType(bookingData, roomData, date, roomType);
  dashboardAndBookings[0].innerHTML = ''
  if (bookingArray.length === 0) {
    dashboardAndBookings[0].insertAdjacentHTML('beforeend', `
    <div id='sorry_message-wrapper'><p id='sorry_message'>Sorry, there are no ${!roomType ? 'room' : roomType}s availabile for a ${date} booking</p></div>
    `)
  } else {
    bookingArray.forEach((room, i) => {
      let randomImage = _images_image_assets__WEBPACK_IMPORTED_MODULE_13__["roomImages"][Math.floor(Math.random() * _images_image_assets__WEBPACK_IMPORTED_MODULE_13__["roomImages"].length)];
      dashboardAndBookings[0].insertAdjacentHTML('beforeend',
      `
      <article id='result_card-${i}' class='result_card fade-in'>
      <div class='result_image-wrapper'>
      <img class='result_image' src=${randomImage} alt='A ${room.numBeds} bed, calm and serene modern ${room.roomType}'>
      </div>
      <section class='result_text-wrapper'>
      <h2>${room.roomType} #${room.number}</h2>
      <p>${room.numBeds} ${room.numBeds > 1 ? room.bedSize + ' beds' : room.bedSize + ' bed'}, incredible mountain views,
      <br>a fully modern room and bathroom${room.bidet ? ' including a bidet!' : '.'}</p>
      <br>
      <div>
      <p>$${room.costPerNight.toFixed(2)}</p>
      <p>per night<br>excluding taxes and fees</p>
      </div>
      <span><p id='book_room_link' value='${room.number}' class='result_book-room-link'>BOOK THIS ROOM</p></span>
      </section>
      </article>
      `);
    });
  };
}

// ------------ Dashboard Data ---------------------

function getCorrectDashAndBooking(bookingData, name) {
  let customerOrManager = user instanceof _classes_Manager__WEBPACK_IMPORTED_MODULE_16__["default"] ? 'manager' : 'customer';
  let dashboard = customerOrManager === 'manager' ? _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerDashboard"] : _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["dashboardCustomer"];
  let bookings = customerOrManager === 'manager' ? user.viewCustomerBookings(bookingData, userData, name) : user.viewMyBookings(bookingData);
  let sortedBookings = bookings.sort((a,b) => new Date(b.date) - new Date(a.date))
  return [dashboard, sortedBookings]
}

function bookRoom() {
  date = getCalendarDate()
  if (event.target.classList.contains('result_book-room-link')) {
    let roomNum = Number(event.target.getAttribute('value'));
    let onSuccess = () => {
      getUpdatedAvailableList()
    }
    user.bookMyRoom(date, roomNum, onSuccess);
  }
}

function bookRoomManager() {
  date = getCalendarDate()
  let name = _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].value;
  if (event.target.classList.contains('result_book-room-link') && name !== '') {
    let roomNum = Number(event.target.getAttribute('value'));
    let onSuccess = () => {
      getUpdatedAvailableList()
    }
    user.addCustomerBooking(userData, name, date, roomNum, onSuccess);
  } else if (event.target.id === 'book_room_link' && name === '') {
    alert('Please first select a user by their first and last name in the toolbar')
  }
}

function managerDeleteBooking(id, name) {
  console.log(id, name);
  if (confirm(`Are you sure you want to delete booking ${id}?`)) {
    let onSuccess = () => {
      updateManagerUserInfo(name)
    }
    user.deleteCustomerBooking(bookingData, id, onSuccess);
  }
}

function sortByRoomType() {
  let dropdown = document.querySelector('#room-types');
  let roomType = dropdown.options[dropdown.selectedIndex].value.toString();
  let selectedDate = getCalendarDate();

  if (roomType === 'residential') {
    loadAvailableRooms(selectedDate, 'residential suite');
  } else if (roomType === 'suite') {
    loadAvailableRooms(selectedDate, 'suite');
  } else if (roomType === 'junior') {
    loadAvailableRooms(selectedDate, 'junior suite');
  } else if (roomType === 'single') {
    loadAvailableRooms(selectedDate, 'single room');
  } else if (roomType === 'all') {
    loadAvailableRooms(selectedDate);
  }
}

function updateManagerUserInfo(name) {
  fetchedBookingData = _classes_apiRequest__WEBPACK_IMPORTED_MODULE_18__["apiRequest"].getBookingData();
  fetchedBookingData.then(value => {
    bookingData = value['bookings']
  }).then(()=>loadUserAccountInfo(bookingData, name)).then(()=> {
    updateManagerStats(_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].value)
  })
}

function getUpdatedAvailableList() {
  fetchedBookingData = _classes_apiRequest__WEBPACK_IMPORTED_MODULE_18__["apiRequest"].getBookingData();
  fetchedBookingData.then(value => {
    bookingData = value['bookings']
  }).then(()=>loadAvailableRooms(date)).then(()=> {
    if (user instanceof _classes_Manager__WEBPACK_IMPORTED_MODULE_16__["default"]) {
      updateManagerStats(_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].value);
    } else {
      updateCustomerStats();
    }
  })
}

function returnUserInfo() {
  if (event.key === 'Enter') {
    loadUserAccountInfo(bookingData, _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].value);
    updateManagerStats(_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].value)
    _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["navManagerHistory"].classList.add('active_nav')
  } else if (_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].value) {
    loadUserAccountInfo(bookingData, _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].value);
    updateManagerStats(_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].value)
    _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["navManagerHistory"].classList.add('active_nav')
  } else {
    _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["navManagerHistory"].classList.add('active_nav')
  }
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showToolbarCustomerHistory();
}


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9Cb29raW5nLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL01hbmFnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvVXNlci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9hcGlSZXF1ZXN0LmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL2RvbU9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY3NzL2Jhc2Uuc2Nzcz9hMjM4Iiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaG90ZWwtZXh0ZXJpb3IuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaG90ZWwtbG9iYnktbW9kMS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9ob3RlbC1yb29mdG9wLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2ltYWdlLWFzc2V0cy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tZ2F1ZHkuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS1raW5mb2xrLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20ta2luZ2x5LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tbW9kaXNoLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tc21hbGwuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS1zcGFyc2UuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS1zdWl0ZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLXh0cmFzbWFsbC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLXh0cmFzbWFsbDIuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvdXNlci1wcm9maWxlLnN2ZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0Esa0RBQTBDLGdDQUFnQztBQUMxRTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGdFQUF3RCxrQkFBa0I7QUFDMUU7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaURBQXlDLGlDQUFpQztBQUMxRSx3SEFBZ0gsbUJBQW1CLEVBQUU7QUFDckk7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBLDJCQUEyQixtQkFBTyxDQUFDLHdHQUFtRDtBQUN0RjtBQUNBLGdCQUFnQixtQkFBTyxDQUFDLHNIQUEwRDtBQUNsRix5Q0FBeUMsbUJBQU8sQ0FBQyx5RUFBZ0M7O0FB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RUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFDTjtBQUNnQjs7QUFFM0Isc0JBQXNCLDZDQUFJO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxlQUFlLDZDQUFJO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaOztBQUVBLG1FQUFtRTtBQUNuRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQVU7QUFDZDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLHNCQUFzQixHQUFHLE1BQU0sR0FBRyxLQUFLO0FBQ3JEO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN0RUE7QUFBQTtBQUFBO0FBQUE7QUFBZ0M7QUFDVTs7QUFFM0I7QUFDZiwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDMURBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7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Q0FBcUMsMEVBQXNCO0FBQzNELHVCQUF1QiwwRUFBc0I7QUFDN0MsSUFBSSxxRUFBaUI7QUFDckIsR0FBRyxVQUFVLDBFQUFzQjtBQUNuQyxxQ0FBcUMsMEVBQXNCO0FBQzNELHVCQUF1QiwwRUFBc0I7QUFDN0MsSUFBSSxxRUFBaUI7QUFDckIsR0FBRztBQUNILElBQUkscUVBQWlCO0FBQ3JCO0FBQ0EsRUFBRSw2REFBUztBQUNYIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKShmYWxzZSk7XG4vLyBJbXBvcnRzXG52YXIgdXJsRXNjYXBlID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS91cmwtZXNjYXBlLmpzXCIpO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyA9IHVybEVzY2FwZShyZXF1aXJlKFwiLi4vaW1hZ2VzL2hvdGVsLWxvYmJ5LW1vZDEuanBnXCIpKTtcblxuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbmJvZHkge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcblxcbm1haW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG5cXG4jbWFpbl9oZWFkZXIge1xcbiAgaGVpZ2h0OiAxMHZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBmbGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGJveC1zaGFkb3c6IC0xMXB4IC0zcHggMjBweCAwcHggYmxhY2s7XFxuICBwYWRkaW5nOiAwIDNlbTtcXG4gIGNvbG9yOiBncmF5OyB9XFxuICAjbWFpbl9oZWFkZXIgc3ZnIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBoZWlnaHQ6IDNlbTtcXG4gICAgd2lkdGg6IGF1dG87XFxuICAgIGZpbGw6IGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xcbiAgICBvcGFjaXR5OiAxOyB9XFxuICAgICNtYWluX2hlYWRlciBzdmc6aG92ZXIge1xcbiAgICAgIGZpbGw6ICMwMGZmZjI7IH1cXG4gICNtYWluX2hlYWRlciBuYXYge1xcbiAgICBmbGV4OiAxOyB9XFxuICAjbWFpbl9oZWFkZXIgLnByb2ZpbGUtY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleDogMTsgfVxcblxcbi5kYXNoYm9hcmRfdmlldyB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDkwdmg7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IH1cXG4gIC5kYXNoYm9hcmRfdmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuLmRhc2hib2FyZF92aWV3LWxvZ2dlZF9pbiB7XFxuICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICBoZWlnaHQ6IDgwdmg7XFxuICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IH1cXG4gIC5kYXNoYm9hcmRfdmlldy1sb2dnZWRfaW46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gICAgZGlzcGxheTogbm9uZTsgfVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLmJvb2tpbmctdG9vbGJhciB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MDRjMTc7XFxuICBmbGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDAgMmVtO1xcbiAgY29sb3I6ICMzRjNGM0Y7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmJvb2tpbmctdG9vbGJhciBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG4gICAgcGFkZGluZzogMCAyZW07IH1cXG4gIC5ib29raW5nLXRvb2xiYXIgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4zZW07IH1cXG4gIC5ib29raW5nLXRvb2xiYXIgZGl2Om50aC1jaGlsZCgzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XFxuICAgIGZsZXg6IDE7IH1cXG4gIC5ib29raW5nLXRvb2xiYXIgZGl2Om50aC1jaGlsZCg0KSB7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRjNGM0Y7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1yaWdodDogM2VtO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjJzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmJvb2tpbmctdG9vbGJhciBkaXY6bnRoLWNoaWxkKDQpOmhvdmVyIHtcXG4gICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZjI7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLnRvb2xiYXItaW5wdXQge1xcbiAgcGFkZGluZy1sZWZ0OiAyLjdlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzNGM0YzRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwNGMwMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjazsgfVxcblxcbi50b29sYmFyX3RleHQge1xcbiAgcGFkZGluZzogMCAuMzVlbTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4udG9vbGJhcl9pbnB1dDpob3ZlciB7XFxuICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsgfVxcblxcbi5uYXYtbGlua3Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcbiAgLm5hdi1saW5rcyAubmF2LWxpbmsge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiBncmF5O1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjM1cyBlYXNlLWluLW91dDtcXG4gICAgcGFkZGluZzogMCAuMzVlbTtcXG4gICAgZm9udC1zaXplOiAxLjVlbTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lOyB9XFxuICAgIC5uYXYtbGlua3MgLm5hdi1saW5rOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmYyOyB9XFxuXFxuLmFjdGl2ZV9uYXYge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmMjtcXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xcbiAgZm9udC13ZWlnaHQ6IDcwMDsgfVxcblxcbi5sb2dpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJhY2tkcm9wLWZpbHRlcjogYmx1cigzcHgpO1xcbiAgYm94LXNoYWRvdzogMCAwIDE1cHggIzAwMDAwMGExO1xcbiAgY29sb3I6ICMzRjNGM0Y7XFxuICBoZWlnaHQ6IGNvbnRlbnQ7XFxuICB3aWR0aDogY29udGVudDtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogM2VtO1xcbiAgbGVmdDogM2VtO1xcbiAgcGFkZGluZzogMmVtO1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcbiAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zczsgfVxcbiAgLmxvZ2luIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtOyB9XFxuICAgIC5sb2dpbiBkaXYgcCB7XFxuICAgICAgcGFkZGluZzogMWVtIDA7IH1cXG5cXG4ubWFpbi1pbnRybyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLm1haW5fY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAyZW0gMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ubWFpbl9pbWFnZS13cmFwcGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvYmplY3QtZml0OiBjb3ZlcjsgfVxcblxcbi5tYWluX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAzNTBweDtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxcblxcbi5tYWluX2NhcmQtdGV4dC13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIG1pbi13aWR0aDogNTAlOyB9XFxuICAubWFpbl9jYXJkLXRleHQtd3JhcHBlciBoMiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogNGVtO1xcbiAgICBmb250LXdlaWdodDogNzAwOyB9XFxuICAubWFpbl9jYXJkLXRleHQtd3JhcHBlciBwIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgICBmb250LXdlaWdodDogMjAwOyB9XFxuICAubWFpbl9jYXJkLXRleHQtd3JhcHBlciBkaXYge1xcbiAgICB3aWR0aDogY29udGVudDtcXG4gICAgaGVpZ2h0OiAxZW07XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuNXM7IH1cXG4gICAgLm1haW5fY2FyZC10ZXh0LXdyYXBwZXIgZGl2IC5tYWluLWNhcmRfdGV4dC1saW5rIHtcXG4gICAgICB6LWluZGV4OiAxMDtcXG4gICAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzOyB9XFxuICAgICAgLm1haW5fY2FyZC10ZXh0LXdyYXBwZXIgZGl2IC5tYWluLWNhcmRfdGV4dC1saW5rOmhvdmVyIHtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIHotaW5kZXg6IDA7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmYyOyB9XFxuXFxuLnJlc3VsdF90ZXh0LXdyYXBwZXIge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzLjNlbTtcXG4gIG1pbi13aWR0aDogNTAlOyB9XFxuICAucmVzdWx0X3RleHQtd3JhcHBlciBoMiB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICAucmVzdWx0X3RleHQtd3JhcHBlciBwIHtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgICBmb250LXdlaWdodDogMjAwOyB9XFxuICAucmVzdWx0X3RleHQtd3JhcHBlciBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICB3aWR0aDogY29udGVudDsgfVxcbiAgICAucmVzdWx0X3RleHQtd3JhcHBlciBkaXYgcDpudGgtY2hpbGQoMSkge1xcbiAgICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7IH1cXG4gICAgLnJlc3VsdF90ZXh0LXdyYXBwZXIgZGl2IHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgICAgbWFyZ2luLWxlZnQ6IDFlbTtcXG4gICAgICBmb250LXNpemU6IC44ZW07XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuMmVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gIC5yZXN1bHRfdGV4dC13cmFwcGVyIC5yZXN1bHRfYm9vay1yb29tLWxpbmsge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDFlbTtcXG4gICAgei1pbmRleDogMTA7XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuM3M7XFxuICAgIHdpZHRoOiAxNWVtO1xcbiAgICBwYWRkaW5nOiAuNWVtIDFlbTtcXG4gICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjM0YzRjNGO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLnJlc3VsdF90ZXh0LXdyYXBwZXIgLnJlc3VsdF9ib29rLXJvb20tbGluazpob3ZlciB7XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmMjtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4ubWFpbi1pbnRybyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLnJlc3VsdF9jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDJlbSAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5yZXN1bHRfaW1hZ2Utd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBoZWlnaHQ6IDIyZW07IH1cXG5cXG4ucmVzdWx0X2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAzMDBweDsgfVxcblxcbi5teV9ib29raW5nLXRleHRfd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHBhZGRpbmctbGVmdDogMy4zZW07XFxuICBtaW4td2lkdGg6IDUwJTsgfVxcbiAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdiBwOm50aC1jaGlsZCgxKSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2IHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgfVxcbiAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdiBwOm50aC1jaGlsZCgzKSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7IH1cXG4gIC5teV9ib29raW5nLXRleHRfd3JhcHBlciBkaXYgcDpudGgtY2hpbGQoNCkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgfVxcbiAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBwYWRkaW5nOiAwIDFlbTsgfVxcbiAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdjpudGgtY2hpbGQoMykge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxLjZlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2Om50aC1jaGlsZCgzKSBwIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6ICMzRjNGM0Y7IH1cXG4gICAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdjpudGgtY2hpbGQoMykgcDpudGgtY2hpbGQoMikge1xcbiAgICAgIGNvbG9yOiAjM0YzRjNGO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRjNGM0Y7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuNXM7IH1cXG4gICAgICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2Om50aC1jaGlsZCgzKSBwOm50aC1jaGlsZCgyKTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG5cXG4ubWFpbi1pbnRybyB7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuLm15LWJvb2tpbmdfY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAyZW0gMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ubXktYm9va2luZ19pbWFnZS13cmFwcGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGhlaWdodDogMjJlbTsgfVxcblxcbi5teS1ib29raW5nX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAzMDBweDsgfVxcblxcbiNoZXJvLWltYWdlIHtcXG4gIGJhY2tncm91bmQtcG9zaXRpb246IDBlbSAtMjhlbTtcXG4gIGJhY2tncm91bmQtc2l6ZTogMTAwJTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGhlaWdodDogMTV2dztcXG4gIHdpZHRoOiAxMDAlO1xcbiAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX19fMF9fXyArIFwiKTsgfVxcblxcbiNzaWRlYmFyIHtcXG4gIG1pbi13aWR0aDogMjBlbTtcXG4gIG1heC13aWR0aDogMjBlbTtcXG4gIGNvbG9yOiAjY2FjYWNhO1xcbiAgZmxleDogMTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMzRjNGM0Y7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGJveC1zaGFkb3c6IDI0cHggMHB4IDIwcHggMjBweCAjMDAwMDAwYTY7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuICAjc2lkZWJhciAjc2lkZWJhcl9ob3RlbC1pbmZvLWJsb2NrIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgICBoZWlnaHQ6IDEwZW07XFxuICAgIG1hcmdpbi1sZWZ0OiAxLjVlbTsgfVxcbiAgICAjc2lkZWJhciAjc2lkZWJhcl9ob3RlbC1pbmZvLWJsb2NrIHAge1xcbiAgICAgIG1hcmdpbi10b3A6IC41ZW07XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgICBsaW5lLWhlaWdodDogMS4zZW07IH1cXG4gICAgI3NpZGViYXIgI3NpZGViYXJfaG90ZWwtaW5mby1ibG9jayBwOm50aC1jaGlsZCgyKSB7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDEwMDtcXG4gICAgICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgICAgIGFsaWduLXNlbGY6IGNlbnRlcjsgfVxcblxcbiNzaWRlYmFyX2N1c3RvbWVyX3N0YXRzICNjdXN0b21lcl9zdGF0X3RpdGxlX3dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gIGZvbnQtc2l6ZTogMmVtOyB9XFxuICAjc2lkZWJhcl9jdXN0b21lcl9zdGF0cyAjY3VzdG9tZXJfc3RhdF90aXRsZV93cmFwcGVyICNjdXN0b21lcl9zdGF0X3RpdGxlIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHBhZGRpbmctdG9wOiAwO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBtYXJnaW46IDA7IH1cXG4gICNzaWRlYmFyX2N1c3RvbWVyX3N0YXRzICNjdXN0b21lcl9zdGF0X3RpdGxlX3dyYXBwZXIgI2N1c3RvbWVyX3N0YXRfdGl0bGVfZGF0ZSB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbGluZS1oZWlnaHQ6IDEuMmVtOyB9XFxuXFxuLm1hbmFnZXJfc3RhdF93cmFwcGVyLCAuY3VzdG9tZXJfc3RhdF93cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMS41ZW0gMWVtO1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMGZmZjI7XFxuICBtYXJnaW46IDAgMjBweDsgfVxcbiAgLm1hbmFnZXJfc3RhdF93cmFwcGVyIHAsIC5jdXN0b21lcl9zdGF0X3dyYXBwZXIgcCB7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG4gIC5tYW5hZ2VyX3N0YXRfd3JhcHBlciBwOm50aC1jaGlsZCgyKSwgLmN1c3RvbWVyX3N0YXRfd3JhcHBlciBwOm50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7IH1cXG5cXG4jc2lkZWJhcl9tYW5hZ2VyX3N0YXRzLCAjc2lkZWJhcl9jdXN0b21lcl9zdGF0cyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcbiAgI3NpZGViYXJfbWFuYWdlcl9zdGF0cyAjbWFuYWdlcl9zdGF0X3RpdGxlX3dyYXBwZXIsICNzaWRlYmFyX2N1c3RvbWVyX3N0YXRzICNtYW5hZ2VyX3N0YXRfdGl0bGVfd3JhcHBlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgIGZvbnQtc2l6ZTogMmVtOyB9XFxuICAjc2lkZWJhcl9tYW5hZ2VyX3N0YXRzICNtYW5hZ2VyX3N0YXRfY3VzdG9tZXJfdG90YWxfd3JhcHBlciwgI3NpZGViYXJfY3VzdG9tZXJfc3RhdHMgI21hbmFnZXJfc3RhdF9jdXN0b21lcl90b3RhbF93cmFwcGVyIHtcXG4gICAgYm9yZGVyOiBub25lOyB9XFxuXFxuLnN0YXRfZ29sZCB7XFxuICBjb2xvcjogZ29sZDsgfVxcblxcbi5wYXR0ZXJuX2Jsb2NrIHtcXG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDQwJTtcXG4gIGNvbG9yOiAjMDBmZmYyO1xcbiAgYmFja2dyb3VuZDogcmVwZWF0aW5nLWxpbmVhci1ncmFkaWVudCgtNjBkZWcsICMwMGZmZjIsICMwMGZmZjIgMTBweCwgIzNGM0YzRiAxMHB4LCAjM0YzRjNGIDIwcHgpOyB9XFxuXFxuI21hbmFnZXJfd2VsY29tZS13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDEwdmggMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDJlbSAwOyB9XFxuICAjbWFuYWdlcl93ZWxjb21lLXdyYXBwZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4jc29ycnlfbWVzc2FnZS13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDEwdmggMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDJlbSAwOyB9XFxuICAjc29ycnlfbWVzc2FnZS13cmFwcGVyIHAge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuLnB1bHNlX2luZm8ge1xcbiAgYW5pbWF0aW9uOiBwdWxzZSBlYXNlIDFzO1xcbiAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogODtcXG4gIGFuaW1hdGlvbi1kaXJlY3Rpb246IGFsdGVybmF0ZTsgfVxcblxcbkBrZXlmcmFtZXMgcHVsc2Uge1xcbiAgMCUge1xcbiAgICBjb2xvcjogaW5oZXJpdDsgfVxcbiAgMTAwJSB7XFxuICAgIGNvbG9yOiAjZmY2OWI0OyB9IH1cXG5cXG4uZmFkZS1pbi1wYWdlTG9hZCB7XFxuICBhbmltYXRpb246IGxvbmdGYWRlSW4gZWFzZSAzczsgfVxcblxcbkBrZXlmcmFtZXMgbG9uZ0ZhZGVJbiB7XFxuICAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigxMHB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpOyB9IH1cXG5cXG4uZmFkZS1pbiB7XFxuICBhbmltYXRpb246IGZhZGVJbiBlYXNlIDFzO1xcbiAgLXdlYmtpdC1hbmltYXRpb246IGZhZGVJbiBlYXNlIDFzO1xcbiAgLW1vei1hbmltYXRpb246IGZhZGVJbiBlYXNlIDFzO1xcbiAgLW8tYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAxcztcXG4gIC1tcy1hbmltYXRpb246IGZhZGVJbiBlYXNlIDFzOyB9XFxuXFxuQGtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwO1xcbiAgICBmaWx0ZXI6IGJsdXIoNXB4KTsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7XFxuICAgIGZpbHRlcjogYmx1cigwcHgpOyB9IH1cXG5cXG5ALW1vei1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkAtd2Via2l0LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQC1vLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQC1tcy1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbi5oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50OyB9XFxuXCIsIFwiXCJdKTtcblxuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuICdAbWVkaWEgJyArIGl0ZW1bMl0gKyAneycgKyBjb250ZW50ICsgJ30nO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgICB9XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAoaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IG1vZHVsZXNbaV07IC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcbiAgICAgIC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG4gICAgICAvLyB3aGVuIGEgbW9kdWxlIGlzIGltcG9ydGVkIG11bHRpcGxlIHRpbWVzIHdpdGggZGlmZmVyZW50IG1lZGlhIHF1ZXJpZXMuXG4gICAgICAvLyBJIGhvcGUgdGhpcyB3aWxsIG5ldmVyIG9jY3VyIChIZXkgdGhpcyB3YXkgd2UgaGF2ZSBzbWFsbGVyIGJ1bmRsZXMpXG5cbiAgICAgIGlmIChpdGVtWzBdID09IG51bGwgfHwgIWFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgaWYgKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgICAgaXRlbVsyXSA9ICcoJyArIGl0ZW1bMl0gKyAnKSBhbmQgKCcgKyBtZWRpYVF1ZXJ5ICsgJyknO1xuICAgICAgICB9XG5cbiAgICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgICAgfVxuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJztcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gJy8qIyBzb3VyY2VVUkw9JyArIGNzc01hcHBpbmcuc291cmNlUm9vdCArIHNvdXJjZSArICcgKi8nO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9ICdzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCwnICsgYmFzZTY0O1xuICByZXR1cm4gJy8qIyAnICsgZGF0YSArICcgKi8nO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGVzY2FwZSh1cmwsIG5lZWRRdW90ZXMpIHtcbiAgaWYgKHR5cGVvZiB1cmwgIT09ICdzdHJpbmcnKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfSAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXS8udGVzdCh1cmwpIHx8IG5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gJ1wiJyArIHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csICdcXFxcbicpICsgJ1wiJztcbiAgfVxuXG4gIHJldHVybiB1cmw7XG59OyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0LCBwYXJlbnQpIHtcbiAgaWYgKHBhcmVudCl7XG4gICAgcmV0dXJuIHBhcmVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG4gIH1cbiAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbn07XG5cbnZhciBnZXRFbGVtZW50ID0gKGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbyA9IHt9O1xuXG5cdHJldHVybiBmdW5jdGlvbih0YXJnZXQsIHBhcmVudCkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhc3NpbmcgZnVuY3Rpb24gaW4gb3B0aW9ucywgdGhlbiB1c2UgaXQgZm9yIHJlc29sdmUgXCJoZWFkXCIgZWxlbWVudC5cbiAgICAgICAgICAgICAgICAvLyBVc2VmdWwgZm9yIFNoYWRvdyBSb290IHN0eWxlIGkuZVxuICAgICAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgICAgICAvLyAgIGluc2VydEludG86IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjZm9vXCIpLnNoYWRvd1Jvb3QgfVxuICAgICAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRhcmdldCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRhcmdldCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0dmFyIHN0eWxlVGFyZ2V0ID0gZ2V0VGFyZ2V0LmNhbGwodGhpcywgdGFyZ2V0LCBwYXJlbnQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEF0LmJlZm9yZSwgdGFyZ2V0KTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRpZihvcHRpb25zLmF0dHJzLm5vbmNlID09PSB1bmRlZmluZWQpIHtcblx0XHR2YXIgbm9uY2UgPSBnZXROb25jZSgpO1xuXHRcdGlmIChub25jZSkge1xuXHRcdFx0b3B0aW9ucy5hdHRycy5ub25jZSA9IG5vbmNlO1xuXHRcdH1cblx0fVxuXG5cdGFkZEF0dHJzKHN0eWxlLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIHN0eWxlKTtcblxuXHRyZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZUxpbmtFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBsaW5rID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblx0b3B0aW9ucy5hdHRycy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblxuXHRhZGRBdHRycyhsaW5rLCBvcHRpb25zLmF0dHJzKTtcblx0aW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMsIGxpbmspO1xuXG5cdHJldHVybiBsaW5rO1xufVxuXG5mdW5jdGlvbiBhZGRBdHRycyAoZWwsIGF0dHJzKSB7XG5cdE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRlbC5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyc1trZXldKTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGdldE5vbmNlKCkge1xuXHRpZiAodHlwZW9mIF9fd2VicGFja19ub25jZV9fID09PSAndW5kZWZpbmVkJykge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0cmV0dXJuIF9fd2VicGFja19ub25jZV9fO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IHR5cGVvZiBvcHRpb25zLnRyYW5zZm9ybSA9PT0gJ2Z1bmN0aW9uJ1xuXHRcdCA/IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpIFxuXHRcdCA6IG9wdGlvbnMudHJhbnNmb3JtLmRlZmF1bHQob2JqLmNzcyk7XG5cblx0ICAgIGlmIChyZXN1bHQpIHtcblx0ICAgIFx0Ly8gSWYgdHJhbnNmb3JtIHJldHVybnMgYSB2YWx1ZSwgdXNlIHRoYXQgaW5zdGVhZCBvZiB0aGUgb3JpZ2luYWwgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBydW5uaW5nIHJ1bnRpbWUgdHJhbnNmb3JtYXRpb25zIG9uIHRoZSBjc3MuXG5cdCAgICBcdG9iai5jc3MgPSByZXN1bHQ7XG5cdCAgICB9IGVsc2Uge1xuXHQgICAgXHQvLyBJZiB0aGUgdHJhbnNmb3JtIGZ1bmN0aW9uIHJldHVybnMgYSBmYWxzeSB2YWx1ZSwgZG9uJ3QgYWRkIHRoaXMgY3NzLlxuXHQgICAgXHQvLyBUaGlzIGFsbG93cyBjb25kaXRpb25hbCBsb2FkaW5nIG9mIGNzc1xuXHQgICAgXHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdCAgICBcdFx0Ly8gbm9vcFxuXHQgICAgXHR9O1xuXHQgICAgfVxuXHR9XG5cblx0aWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG5cdFx0dmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG5cblx0XHRzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcblxuXHRcdHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuXHRcdHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG5cblx0fSBlbHNlIGlmIChcblx0XHRvYmouc291cmNlTWFwICYmXG5cdFx0dHlwZW9mIFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5jcmVhdGVPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwucmV2b2tlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgQmxvYiA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIlxuXHQpIHtcblx0XHRzdHlsZSA9IGNyZWF0ZUxpbmtFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IHVwZGF0ZUxpbmsuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblxuXHRcdFx0aWYoc3R5bGUuaHJlZikgVVJMLnJldm9rZU9iamVjdFVSTChzdHlsZS5ocmVmKTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdHN0eWxlID0gY3JlYXRlU3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuXHRcdHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSk7XG5cdFx0cmVtb3ZlID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcblx0XHR9O1xuXHR9XG5cblx0dXBkYXRlKG9iaik7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlIChuZXdPYmopIHtcblx0XHRpZiAobmV3T2JqKSB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdG5ld09iai5jc3MgPT09IG9iai5jc3MgJiZcblx0XHRcdFx0bmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiZcblx0XHRcdFx0bmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcFxuXHRcdFx0KSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0dXBkYXRlKG9iaiA9IG5ld09iaik7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHJlbW92ZSgpO1xuXHRcdH1cblx0fTtcbn1cblxudmFyIHJlcGxhY2VUZXh0ID0gKGZ1bmN0aW9uICgpIHtcblx0dmFyIHRleHRTdG9yZSA9IFtdO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG5cdFx0dGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuXG5cdFx0cmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG5cdH07XG59KSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnIChzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG5cdHZhciBjc3MgPSByZW1vdmUgPyBcIlwiIDogb2JqLmNzcztcblxuXHRpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuXHR9IGVsc2Uge1xuXHRcdHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcblx0XHR2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cblx0XHRpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcblxuXHRcdGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuXHRcdFx0c3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0c3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcgKHN0eWxlLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBtZWRpYSA9IG9iai5tZWRpYTtcblxuXHRpZihtZWRpYSkge1xuXHRcdHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKVxuXHR9XG5cblx0aWYoc3R5bGUuc3R5bGVTaGVldCkge1xuXHRcdHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcblx0fSBlbHNlIHtcblx0XHR3aGlsZShzdHlsZS5maXJzdENoaWxkKSB7XG5cdFx0XHRzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcblx0XHR9XG5cblx0XHRzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcblx0fVxufVxuXG5mdW5jdGlvbiB1cGRhdGVMaW5rIChsaW5rLCBvcHRpb25zLCBvYmopIHtcblx0dmFyIGNzcyA9IG9iai5jc3M7XG5cdHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG5cdC8qXG5cdFx0SWYgY29udmVydFRvQWJzb2x1dGVVcmxzIGlzbid0IGRlZmluZWQsIGJ1dCBzb3VyY2VtYXBzIGFyZSBlbmFibGVkXG5cdFx0YW5kIHRoZXJlIGlzIG5vIHB1YmxpY1BhdGggZGVmaW5lZCB0aGVuIGxldHMgdHVybiBjb252ZXJ0VG9BYnNvbHV0ZVVybHNcblx0XHRvbiBieSBkZWZhdWx0LiAgT3RoZXJ3aXNlIGRlZmF1bHQgdG8gdGhlIGNvbnZlcnRUb0Fic29sdXRlVXJscyBvcHRpb25cblx0XHRkaXJlY3RseVxuXHQqL1xuXHR2YXIgYXV0b0ZpeFVybHMgPSBvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyA9PT0gdW5kZWZpbmVkICYmIHNvdXJjZU1hcDtcblxuXHRpZiAob3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgfHwgYXV0b0ZpeFVybHMpIHtcblx0XHRjc3MgPSBmaXhVcmxzKGNzcyk7XG5cdH1cblxuXHRpZiAoc291cmNlTWFwKSB7XG5cdFx0Ly8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL2EvMjY2MDM4NzVcblx0XHRjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiICsgYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSArIFwiICovXCI7XG5cdH1cblxuXHR2YXIgYmxvYiA9IG5ldyBCbG9iKFtjc3NdLCB7IHR5cGU6IFwidGV4dC9jc3NcIiB9KTtcblxuXHR2YXIgb2xkU3JjID0gbGluay5ocmVmO1xuXG5cdGxpbmsuaHJlZiA9IFVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XG5cblx0aWYob2xkU3JjKSBVUkwucmV2b2tlT2JqZWN0VVJMKG9sZFNyYyk7XG59XG4iLCJcbi8qKlxuICogV2hlbiBzb3VyY2UgbWFwcyBhcmUgZW5hYmxlZCwgYHN0eWxlLWxvYWRlcmAgdXNlcyBhIGxpbmsgZWxlbWVudCB3aXRoIGEgZGF0YS11cmkgdG9cbiAqIGVtYmVkIHRoZSBjc3Mgb24gdGhlIHBhZ2UuIFRoaXMgYnJlYWtzIGFsbCByZWxhdGl2ZSB1cmxzIGJlY2F1c2Ugbm93IHRoZXkgYXJlIHJlbGF0aXZlIHRvIGFcbiAqIGJ1bmRsZSBpbnN0ZWFkIG9mIHRoZSBjdXJyZW50IHBhZ2UuXG4gKlxuICogT25lIHNvbHV0aW9uIGlzIHRvIG9ubHkgdXNlIGZ1bGwgdXJscywgYnV0IHRoYXQgbWF5IGJlIGltcG9zc2libGUuXG4gKlxuICogSW5zdGVhZCwgdGhpcyBmdW5jdGlvbiBcImZpeGVzXCIgdGhlIHJlbGF0aXZlIHVybHMgdG8gYmUgYWJzb2x1dGUgYWNjb3JkaW5nIHRvIHRoZSBjdXJyZW50IHBhZ2UgbG9jYXRpb24uXG4gKlxuICogQSBydWRpbWVudGFyeSB0ZXN0IHN1aXRlIGlzIGxvY2F0ZWQgYXQgYHRlc3QvZml4VXJscy5qc2AgYW5kIGNhbiBiZSBydW4gdmlhIHRoZSBgbnBtIHRlc3RgIGNvbW1hbmQuXG4gKlxuICovXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzcykge1xuICAvLyBnZXQgY3VycmVudCBsb2NhdGlvblxuICB2YXIgbG9jYXRpb24gPSB0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiICYmIHdpbmRvdy5sb2NhdGlvbjtcblxuICBpZiAoIWxvY2F0aW9uKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiZml4VXJscyByZXF1aXJlcyB3aW5kb3cubG9jYXRpb25cIik7XG4gIH1cblxuXHQvLyBibGFuayBvciBudWxsP1xuXHRpZiAoIWNzcyB8fCB0eXBlb2YgY3NzICE9PSBcInN0cmluZ1wiKSB7XG5cdCAgcmV0dXJuIGNzcztcbiAgfVxuXG4gIHZhciBiYXNlVXJsID0gbG9jYXRpb24ucHJvdG9jb2wgKyBcIi8vXCIgKyBsb2NhdGlvbi5ob3N0O1xuICB2YXIgY3VycmVudERpciA9IGJhc2VVcmwgKyBsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9cXC9bXlxcL10qJC8sIFwiL1wiKTtcblxuXHQvLyBjb252ZXJ0IGVhY2ggdXJsKC4uLilcblx0Lypcblx0VGhpcyByZWd1bGFyIGV4cHJlc3Npb24gaXMganVzdCBhIHdheSB0byByZWN1cnNpdmVseSBtYXRjaCBicmFja2V0cyB3aXRoaW5cblx0YSBzdHJpbmcuXG5cblx0IC91cmxcXHMqXFwoICA9IE1hdGNoIG9uIHRoZSB3b3JkIFwidXJsXCIgd2l0aCBhbnkgd2hpdGVzcGFjZSBhZnRlciBpdCBhbmQgdGhlbiBhIHBhcmVuc1xuXHQgICAoICA9IFN0YXJ0IGEgY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgKD86ICA9IFN0YXJ0IGEgbm9uLWNhcHR1cmluZyBncm91cFxuXHQgICAgICAgICBbXikoXSAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKD86ICA9IFN0YXJ0IGFub3RoZXIgbm9uLWNhcHR1cmluZyBncm91cHNcblx0ICAgICAgICAgICAgICAgICBbXikoXSsgID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgfCAgPSBPUlxuXHQgICAgICAgICAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgICAgIFteKShdKiAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICBcXCkgID0gTWF0Y2ggYSBlbmQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICkgID0gRW5kIEdyb3VwXG4gICAgICAgICAgICAgICpcXCkgPSBNYXRjaCBhbnl0aGluZyBhbmQgdGhlbiBhIGNsb3NlIHBhcmVuc1xuICAgICAgICAgICkgID0gQ2xvc2Ugbm9uLWNhcHR1cmluZyBncm91cFxuICAgICAgICAgICogID0gTWF0Y2ggYW55dGhpbmdcbiAgICAgICApICA9IENsb3NlIGNhcHR1cmluZyBncm91cFxuXHQgXFwpICA9IE1hdGNoIGEgY2xvc2UgcGFyZW5zXG5cblx0IC9naSAgPSBHZXQgYWxsIG1hdGNoZXMsIG5vdCB0aGUgZmlyc3QuICBCZSBjYXNlIGluc2Vuc2l0aXZlLlxuXHQgKi9cblx0dmFyIGZpeGVkQ3NzID0gY3NzLnJlcGxhY2UoL3VybFxccypcXCgoKD86W14pKF18XFwoKD86W14pKF0rfFxcKFteKShdKlxcKSkqXFwpKSopXFwpL2dpLCBmdW5jdGlvbihmdWxsTWF0Y2gsIG9yaWdVcmwpIHtcblx0XHQvLyBzdHJpcCBxdW90ZXMgKGlmIHRoZXkgZXhpc3QpXG5cdFx0dmFyIHVucXVvdGVkT3JpZ1VybCA9IG9yaWdVcmxcblx0XHRcdC50cmltKClcblx0XHRcdC5yZXBsYWNlKC9eXCIoLiopXCIkLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pXG5cdFx0XHQucmVwbGFjZSgvXicoLiopJyQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSk7XG5cblx0XHQvLyBhbHJlYWR5IGEgZnVsbCB1cmw/IG5vIGNoYW5nZVxuXHRcdGlmICgvXigjfGRhdGE6fGh0dHA6XFwvXFwvfGh0dHBzOlxcL1xcL3xmaWxlOlxcL1xcL1xcL3xcXHMqJCkvaS50ZXN0KHVucXVvdGVkT3JpZ1VybCkpIHtcblx0XHQgIHJldHVybiBmdWxsTWF0Y2g7XG5cdFx0fVxuXG5cdFx0Ly8gY29udmVydCB0aGUgdXJsIHRvIGEgZnVsbCB1cmxcblx0XHR2YXIgbmV3VXJsO1xuXG5cdFx0aWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiLy9cIikgPT09IDApIHtcblx0XHQgIFx0Ly9UT0RPOiBzaG91bGQgd2UgYWRkIHByb3RvY29sP1xuXHRcdFx0bmV3VXJsID0gdW5xdW90ZWRPcmlnVXJsO1xuXHRcdH0gZWxzZSBpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvXCIpID09PSAwKSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byB0aGUgYmFzZSB1cmxcblx0XHRcdG5ld1VybCA9IGJhc2VVcmwgKyB1bnF1b3RlZE9yaWdVcmw7IC8vIGFscmVhZHkgc3RhcnRzIHdpdGggJy8nXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIGN1cnJlbnQgZGlyZWN0b3J5XG5cdFx0XHRuZXdVcmwgPSBjdXJyZW50RGlyICsgdW5xdW90ZWRPcmlnVXJsLnJlcGxhY2UoL15cXC5cXC8vLCBcIlwiKTsgLy8gU3RyaXAgbGVhZGluZyAnLi8nXG5cdFx0fVxuXG5cdFx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCB1cmwoLi4uKVxuXHRcdHJldHVybiBcInVybChcIiArIEpTT04uc3RyaW5naWZ5KG5ld1VybCkgKyBcIilcIjtcblx0fSk7XG5cblx0Ly8gc2VuZCBiYWNrIHRoZSBmaXhlZCBjc3Ncblx0cmV0dXJuIGZpeGVkQ3NzO1xufTtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvb2tpbmcge1xuICBjb25zdHJ1Y3Rvcihib29raW5nRGF0YSkge1xuICAgIHRoaXMuaWQgPSBib29raW5nRGF0YS5pZDtcbiAgICB0aGlzLnVzZXJJRCA9IGJvb2tpbmdEYXRhLnVzZXJJRDtcbiAgICB0aGlzLmRhdGUgPSBib29raW5nRGF0YS5kYXRlO1xuICAgIHRoaXMucm9vbU51bWJlciA9IGJvb2tpbmdEYXRhLnJvb21OdW1iZXI7XG4gICAgdGhpcy5yb29tU2VydmljZUNoYXJnZXMgPSBib29raW5nRGF0YS5yb29tU2VydmljZUNoYXJnZXMgfHwgW107XG4gIH1cbn1cbiIsImltcG9ydCBCb29raW5nIGZyb20gJy4vQm9va2luZyc7XG5pbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHsgYXBpUmVxdWVzdCB9IGZyb20gJy4vYXBpUmVxdWVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEpIHtcbiAgICBzdXBlcih1c2VyRGF0YSlcbiAgICB0aGlzLmlkID0gMDtcbiAgICB0aGlzLm5hbWUgPSAnTUFOQUdFUidcbiAgfVxuXG4gIHRvdGFsQXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMudmlld0F2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSkubGVuZ3RoXG4gIH1cblxuICB0b3RhbFJldmVudWUoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKSB7XG4gICAgcmV0dXJuIE51bWJlcih0aGlzLnZpZXdVbmF2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSlcbiAgICAucmVkdWNlKCh0b3RhbFJldmVudWUsIHJvb20sIGkpID0+IHtcbiAgICAgIHRvdGFsUmV2ZW51ZSArPSByb29tLmNvc3RQZXJOaWdodDtcbiAgICAgIHJldHVybiB0b3RhbFJldmVudWVcbiAgICB9LCAwKS50b0ZpeGVkKDIpKVxuICB9XG5cbiAgdG90YWxQZXJjZW50T2NjdXBpZWQoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKSB7XG4gICAgcmV0dXJuICh0aGlzLnZpZXdVbmF2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSkubGVuZ3RoIC9cbiAgICByb29tRGF0YS5sZW5ndGgpLnRvRml4ZWQoMilcbiAgfVxuXG4gIHZpZXdDdXN0b21lcih1c2VyRGF0YSwgbmFtZSkge1xuICAgIHJldHVybiBuZXcgVXNlcih1c2VyRGF0YS5maW5kKHVzZXIgPT4gdXNlci5uYW1lID09PSBuYW1lKSlcbiAgfVxuXG4gIHZpZXdDdXN0b21lckJvb2tpbmdzKGJvb2tpbmdEYXRhLCB1c2VyRGF0YSwgbmFtZSkge1xuICAgIGxldCBjdXN0b21lciA9IHRoaXMudmlld0N1c3RvbWVyKHVzZXJEYXRhLCBuYW1lKTtcbiAgICByZXR1cm4gY3VzdG9tZXIudmlld015Qm9va2luZ3MoYm9va2luZ0RhdGEpO1xuICB9XG5cbiAgdmlld0N1c3RvbWVySW5mbyhib29raW5nRGF0YSwgcm9vbURhdGEsIHVzZXJEYXRhLCBuYW1lKSB7XG4gICAgbGV0IGN1c3RvbWVyID0gdGhpcy52aWV3Q3VzdG9tZXIodXNlckRhdGEsIG5hbWUpO1xuICAgIGxldCBib29raW5ncyA9IGN1c3RvbWVyLnZpZXdNeUJvb2tpbmdzKGJvb2tpbmdEYXRhKTtcbiAgICBsZXQgdG90YWwgPSBjdXN0b21lci52aWV3TXlUb3RhbChib29raW5nRGF0YSwgcm9vbURhdGEpO1xuICAgIHJldHVybiB7aWQ6IGN1c3RvbWVyLmlkLCBuYW1lOiBjdXN0b21lci5uYW1lLCBib29raW5nSGlzdG9yeTogYm9va2luZ3MsIHRvdGFsU3BlbnQ6IHRvdGFsfVxuICB9XG5cbiAgYWRkQ3VzdG9tZXJCb29raW5nKHVzZXJEYXRhLCBuYW1lLCBkYXRlLCByb29tTnVtYmVyLCBvblN1Y2Nlc3MpIHsgLy9UREQgc2VlIGlmIEFQSSBjYWxsIGlzIG1hZGVcbiAgICBsZXQgY3VzdG9tZXIgPSB0aGlzLnZpZXdDdXN0b21lcih1c2VyRGF0YSwgbmFtZSk7XG4gICAgcmV0dXJuIGN1c3RvbWVyLmJvb2tNeVJvb20oZGF0ZSwgcm9vbU51bWJlciwgb25TdWNjZXNzKTtcbiAgfVxuXG4gIGRlbGV0ZUN1c3RvbWVyQm9va2luZyhib29raW5nRGF0YSwgYm9va2luZ0lELCBvblN1Y2Nlc3MpIHtcbiAgICBsZXQgYm9va2luZyA9XG4gICAgICB7XG4gICAgICAgIFwiaWRcIjogTnVtYmVyKGJvb2tpbmdJRClcbiAgICAgIH1cbiAgICBhcGlSZXF1ZXN0LmRlbGV0ZUJvb2tpbmcoYm9va2luZywgb25TdWNjZXNzKTtcbiAgfVxuXG4gIGdldERhdGUoKSB7XG4gICAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICAgIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSsxO1xuICAgIGxldCBkYXRlID0gbmV3RGF0ZS5nZXREYXRlKCk7XG5cbiAgICBpZiAoZGF0ZS50b1N0cmluZygpLmxlbmd0aCA8IDIpIHtcbiAgICAgIGRhdGUgPSAnMCcgKyBkYXRlXG4gICAgfVxuICAgIGlmIChtb250aC50b1N0cmluZygpLmxlbmd0aCA8IDIpIHtcbiAgICAgIG1vbnRoID0gJzAnICsgbW9udGhcbiAgICB9XG4gICAgcmV0dXJuIGAke25ld0RhdGUuZ2V0RnVsbFllYXIoKX0vJHttb250aH0vJHtkYXRlfWBcbiAgfVxufVxuIiwiaW1wb3J0IEJvb2tpbmcgZnJvbSAnLi9Cb29raW5nJztcbmltcG9ydCB7IGFwaVJlcXVlc3QgfSBmcm9tICcuL2FwaVJlcXVlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEgPSB7fSkge1xuICAgIHRoaXMuaWQgPSB1c2VyRGF0YS5pZCB8fCA3Nzc7XG4gICAgdGhpcy5uYW1lID0gdXNlckRhdGEubmFtZSB8fCAnR1VFU1QnO1xuICB9XG5cbiAgYm9va015Um9vbShkYXRlLCByb29tTnVtYmVyLCBvblN1Y2Nlc3MpIHtcbiAgICBsZXQgYm9va2luZyA9XG4gICAge1xuICAgICAgXCJ1c2VySURcIjogdGhpcy5pZCxcbiAgICAgIFwiZGF0ZVwiOiBkYXRlLFxuICAgICAgXCJyb29tTnVtYmVyXCI6IHJvb21OdW1iZXJcbiAgICB9XG4gICAgYXBpUmVxdWVzdC5jcmVhdGVCb29raW5nKGJvb2tpbmcsIG9uU3VjY2VzcylcbiAgfVxuXG4gIHZpZXdNeUJvb2tpbmdzKGJvb2tpbmdEYXRhKSB7XG4gICAgbGV0IG15Qm9va2luZ3MgPSBib29raW5nRGF0YS5maWx0ZXIoYm9va2luZyA9PiB7XG4gICAgICByZXR1cm4gYm9va2luZy51c2VySUQgPT09IHRoaXMuaWRcbiAgICB9KTtcbiAgICByZXR1cm4gbXlCb29raW5ncy5zb3J0KChhLGIpID0+IHtcbiAgICAgIHJldHVybiBhLmRhdGUgPCBiLmRhdGUgPyAtMSA6IDE7XG4gICAgfSlcbiAgfVxuXG4gIHZpZXdNeVRvdGFsKGJvb2tpbmdEYXRhLCByb29tRGF0YSkge1xuICAgIGxldCBncmFuZFRvdGFsID0gdGhpcy52aWV3TXlCb29raW5ncyhib29raW5nRGF0YSkucmVkdWNlKChteUdyYW5kVG90YWwsIG15Qm9va2luZykgPT4ge1xuICAgICAgbGV0IG1hdGNoZWRSb29tID0gcm9vbURhdGEuZmluZChyb29tID0+IHJvb20ubnVtYmVyID09PSBteUJvb2tpbmcucm9vbU51bWJlcilcbiAgICAgIG15R3JhbmRUb3RhbCArPSBtYXRjaGVkUm9vbS5jb3N0UGVyTmlnaHRcbiAgICAgIHJldHVybiBteUdyYW5kVG90YWw7XG4gICAgfSwgMCkudG9GaXhlZCgyKTtcbiAgICByZXR1cm4gTnVtYmVyKGdyYW5kVG90YWwpXG4gIH1cblxuICB2aWV3VW5hdmFpbGFibGVSb29tcyhib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpIHtcbiAgICByZXR1cm4gYm9va2luZ0RhdGEucmVkdWNlKChib29rZWRSb29tcywgYm9va2luZykgPT4ge1xuICAgICAgaWYgKGJvb2tpbmcuZGF0ZSA9PT0gZGF0ZSkge1xuICAgICAgICBib29rZWRSb29tcy5wdXNoKHJvb21EYXRhLmZpbmQocm9vbSA9PiByb29tLm51bWJlciA9PT0gYm9va2luZy5yb29tTnVtYmVyKSlcbiAgICAgIH1cbiAgICAgIHJldHVybiBib29rZWRSb29tc1xuICAgIH0sIFtdKTtcbiAgfVxuXG4gIHZpZXdBdmFpbGFibGVSb29tcyhib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpIHtcbiAgICBsZXQgdW5hdmFpbGFibGVSb29tcyA9IHRoaXMudmlld1VuYXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKTtcbiAgICByZXR1cm4gcm9vbURhdGEuZmlsdGVyKHJvb20gPT4gIXVuYXZhaWxhYmxlUm9vbXMuaW5jbHVkZXMocm9vbSkpOyAvLyBub3QgZW1wYXRoZXRpYyBjb25zaWRlciByZXdyaXRpbmdcbiAgfVxuXG4gIHZpZXdBdmFpbGFibGVSb29tc0J5VHlwZShib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUsIHJvb21UeXBlKSB7XG4gICAgbGV0IGF2YWlsYWJsZVJvb21zID0gdGhpcy52aWV3QXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKTtcbiAgICBpZiAoIXJvb21UeXBlKSB7XG4gICAgICByZXR1cm4gYXZhaWxhYmxlUm9vbXM7XG4gICAgfVxuICAgIHJldHVybiBhdmFpbGFibGVSb29tcy5maWx0ZXIocm9vbSA9PiByb29tLnJvb21UeXBlID09PSByb29tVHlwZSk7XG4gIH1cbn1cbiIsImV4cG9ydCBjb25zdCBhcGlSZXF1ZXN0ID0ge1xuICBnZXRVc2VyRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L3VzZXJzL3VzZXJzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciwgXCJFbmNvdW50ZXJlZCBhbiBlcnJvclwiKSk7XG4gIH0sXG5cbiAgZ2V0Um9vbURhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC9yb29tcy9yb29tcycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IsIFwiRW5jb3VudGVyZWQgYW4gZXJyb3JcIikpO1xuICB9LFxuXG4gIGdldEJvb2tpbmdEYXRhKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLCBcIkVuY291bnRlcmVkIGFuIGVycm9yXCIpKTtcbiAgfSxcblxuICBjcmVhdGVCb29raW5nKGJvb2tpbmcsIG9uU3VjY2Vzcykge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCB7XG4gICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJvb2tpbmcpLFxuICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIG9uU3VjY2VzcygpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm9va2luZyBzdWNjZXNzZnVsbHkgQ1JFQVRFRFwiKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciwgXCJFbmNvdW50ZXJlZCBhbiBlcnJvclwiKSlcbiAgfSxcblxuICBkZWxldGVCb29raW5nKGJvb2tpbmcsIG9uU3VjY2Vzcykge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvYm9va2luZ3MvYm9va2luZ3MnLCB7XG4gICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9LFxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9va2luZyksXG4gICAgfSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgb25TdWNjZXNzKClcbiAgICAgICAgY29uc29sZS5sb2coXCJCb29raW5nIHN1Y2Nlc3NmdWxseSBERUxFVEVEXCIpXG4gICAgICB9KVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLCBcIkVuY291bnRlcmVkIGFuIGVycm9yXCIpKVxuICB9XG59O1xuIiwiZXhwb3J0IGNvbnN0IGRvbU9iamVjdCA9IHtcbiAgc2hvd0xvZ2luKCkge1xuICAgIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdMYXllcl8xJyB8fCBldmVudC50YXJnZXQgPT09ICdzdmcnIHx8IGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ21haW4tY2FyZF90ZXh0LWxpbmsnKSkge1xuICAgICAgdXNlcm5hbWVJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgcGFzc3dvcmRJbnB1dC52YWx1ZSA9ICcnO1xuICAgICAgbG9naW5Cb3guY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSA/IGxvZ2luQm94LmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpIDogbG9naW5Cb3guY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgfVxuICB9LFxuXG4gIHNob3dUb29sYmFyKGJvb2xlYW4pIHtcbiAgICBib29sZWFuID09PSB0cnVlID8gZG9tT2JqZWN0LnNob3dFbGVtZW50KG1hbmFnZXJVc2VyU2VhcmNoKSA6IGRvbU9iamVjdC5oaWRlRWxlbWVudChtYW5hZ2VyVXNlclNlYXJjaCk7XG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5zaG93RWxlbWVudChib29raW5nVG9vbGJhcikgOiBkb21PYmplY3QuaGlkZUVsZW1lbnQoYm9va2luZ1Rvb2xiYXIpO1xuICB9LFxuXG4gIHNob3dUb29sYmFyQ3VzdG9tZXJIaXN0b3J5KCkge1xuICAgIGRvbU9iamVjdC5zaG93VG9vbGJhcih0cnVlKTtcbiAgICBkb21PYmplY3QuaGlkZUVsZW1lbnQoZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rvb2xiYXJfc3VibWl0X2J1dHRvbl93cmFwcGVyJykpXG4gICAgZG9tT2JqZWN0LmhpZGVFbGVtZW50KHJvb21UeXBlRHJvcGRvd24pXG4gICAgZG9tT2JqZWN0LmhpZGVFbGVtZW50KGNhbGVuZGFyKVxuICB9LFxuXG4gIHNob3dEYXNoYm9hcmRIZWFkZXIoYm9vbGVhbikge1xuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3Quc2hvd0VsZW1lbnQoZGFzaGJvYXJkSGVhZGVyKSA6IGRvbU9iamVjdC5oaWRlRWxlbWVudChkYXNoYm9hcmRIZWFkZXIpO1xuICB9LFxuXG4gIHNob3dIb21lUGFnZU1hbmFnZXIoKSB7XG4gICAgZG9tT2JqZWN0LmhpZGVIb21lVmlldyhmYWxzZSk7XG4gICAgZG9tT2JqZWN0LmhpZGVNYW5hZ2VyVmlldyh0cnVlKTtcbiAgICBkb21PYmplY3QuaGlkZUN1c3RvbWVyVmlldyh0cnVlKTtcbiAgfSxcblxuICBzaG93Q3VzdG9tZXJEYXNoYm9hcmQoYm9vbGVhbikge1xuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUhvbWVWaWV3KHRydWUpIDogZG9tT2JqZWN0LmhpZGVIb21lVmlldyhmYWxzZSk7XG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5oaWRlQ3VzdG9tZXJWaWV3KGZhbHNlKSA6IGRvbU9iamVjdC5oaWRlQ3VzdG9tZXJWaWV3KHRydWUpO1xuICB9LFxuXG4gIGhpZGVIb21lVmlldyhib29sZWFuKSB7XG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5oaWRlRWxlbWVudChob21lTmF2TGlua3MpIDogZG9tT2JqZWN0LnNob3dFbGVtZW50KGhvbWVOYXZMaW5rcyk7XG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5oaWRlRWxlbWVudChtYWluQ29udGVudENvbnRhaW5lcikgOiBkb21PYmplY3Quc2hvd0VsZW1lbnQobWFpbkNvbnRlbnRDb250YWluZXIpO1xuICAgIGRvbU9iamVjdC5oaWRlQ3VzdG9tZXJWaWV3KHRydWUpO1xuICAgIGRvbU9iamVjdC5zaG93RGFzaGJvYXJkSGVhZGVyKGZhbHNlKTtcbiAgfSxcblxuICBoaWRlQ3VzdG9tZXJWaWV3KGJvb2xlYW4pIHtcbiAgICBib29sZWFuID09PSB0cnVlID8gZG9tT2JqZWN0LmhpZGVFbGVtZW50KGN1c3RvbWVyTmF2TGlua3MpIDogZG9tT2JqZWN0LnNob3dFbGVtZW50KGN1c3RvbWVyTmF2TGlua3MpXG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5oaWRlRWxlbWVudChkYXNoYm9hcmRDdXN0b21lcikgOiBkb21PYmplY3Quc2hvd0VsZW1lbnQoZGFzaGJvYXJkQ3VzdG9tZXIpXG4gIH0sXG5cbiAgaGlkZU1hbmFnZXJWaWV3KGJvb2xlYW4pIHtcbiAgICBib29sZWFuID09PSB0cnVlID8gZG9tT2JqZWN0LmhpZGVFbGVtZW50KG1hbmFnZXJOYXZMaW5rcykgOiBkb21PYmplY3Quc2hvd0VsZW1lbnQobWFuYWdlck5hdkxpbmtzKTtcbiAgICAhYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5oaWRlRWxlbWVudChjdXN0b21lck5hdkxpbmtzKSA6IGRvbU9iamVjdC5zaG93RWxlbWVudChjdXN0b21lck5hdkxpbmtzKVxuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUVsZW1lbnQobWFuYWdlckRhc2hib2FyZCkgOiBkb21PYmplY3Quc2hvd0VsZW1lbnQobWFuYWdlckRhc2hib2FyZClcbiAgfSxcblxuICBzaG93RWxlbWVudChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKVxuICB9LFxuXG4gIGhpZGVFbGVtZW50KGVsZW1lbnQpIHtcbiAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpXG4gIH1cbn07XG5cbmV4cG9ydCBjb25zdCBwcm9maWxlSWNvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNMYXllcl8xJyk7XG5leHBvcnQgY29uc3QgbG9naW5Cb3ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubG9naW4nKTtcbmV4cG9ydCBjb25zdCBsb2dpbkJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtbG9naW4nKVxuZXhwb3J0IGNvbnN0IHVzZXJuYW1lSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdXNlcm5hbWUnKVxuZXhwb3J0IGNvbnN0IHBhc3N3b3JkSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcGFzc3dvcmQnKVxuZXhwb3J0IGNvbnN0IG5hdkJvb2tpbmcgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1ib29raW5nJylcbmV4cG9ydCBjb25zdCBuYXZSb29tcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtcm9vbXMnKVxuZXhwb3J0IGNvbnN0IG5hdkNvbnRhY3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWNvbnRhY3QnKVxuZXhwb3J0IGNvbnN0IG5hdk1hbmFnZXJIb3RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtbWFuYWdlci1ob3RlbCcpXG5leHBvcnQgY29uc3QgbmF2TWFuYWdlckJvb2tpbmcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LW1hbmFnZXItYm9va2luZycpXG5leHBvcnQgY29uc3QgbmF2TWFuYWdlckhpc3RvcnkgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LW1hbmFnZXItaGlzdG9yeScpXG5leHBvcnQgY29uc3QgbmF2Q3VzdG9tZXJGaW5kUm9vbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWN1c3RvbWVyLWZpbmQtcm9vbXMnKVxuZXhwb3J0IGNvbnN0IG5hdkN1c3RvbWVyQWNjb3VudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtY3VzdG9tZXItYWNjb3VudCcpXG5leHBvcnQgY29uc3QgbmF2Q3VzdG9tZXJIb3RlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtY3VzdG9tZXItaG90ZWwnKVxuZXhwb3J0IGNvbnN0IGhvbWVOYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNob21lLW5hdi1saW5rcycpXG5leHBvcnQgY29uc3QgbWFuYWdlck5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXItbmF2LWxpbmtzJylcbmV4cG9ydCBjb25zdCBjdXN0b21lck5hdkxpbmtzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1c3RvbWVyLW5hdi1saW5rcycpXG5leHBvcnQgY29uc3QgbWFpblJvb21UeXBlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluX3Jvb20tdHlwZXMnKVxuZXhwb3J0IGNvbnN0IG1haW5JbnRybyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluX2ludHJvJylcbmV4cG9ydCBjb25zdCBjYWxlbmRhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxlbmRhcicpXG5leHBvcnQgY29uc3QgY2FsZW5kYXJJbnB1dCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjYWxlbmRhci1pbnB1dCcpXG5leHBvcnQgY29uc3QgbWFuYWdlclVzZXJTZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFuYWdlci1sb29rdXAtYmFyJylcbmV4cG9ydCBjb25zdCBib29raW5nVG9vbGJhciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29raW5nLXRvb2xiYXInKVxuZXhwb3J0IGNvbnN0IGxvZ291dEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNsb2dvdXQtYnV0dG9uJylcbmV4cG9ydCBjb25zdCBkYXNoYm9hcmRDdXN0b21lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXNoYm9hcmQtY3VzdG9tZXInKVxuZXhwb3J0IGNvbnN0IG1hbmFnZXJEYXNoYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFzaGJvYXJkLW1hbmFnZXInKVxuZXhwb3J0IGNvbnN0IG1haW5Db250ZW50Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4tY29udGVudC1jb250YWluZXInKVxuZXhwb3J0IGNvbnN0IG1hbmFnZXJVc2VyU2VhcmNoSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFuYWdlci1zZWFyY2gtdXNlci1pbnB1dCcpXG5leHBvcnQgY29uc3QgZGFzaGJvYXJkSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rhc2hib2FyZF9oZWFkZXInKVxuZXhwb3J0IGNvbnN0IHRvb2xiYXJTdWJtaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9vbGJhcl9zdWJtaXRfYnV0dG9uJylcbmV4cG9ydCBjb25zdCByb29tVHlwZURyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb20tdHlwZS1kcm9wZG93bi1jb250YWluZXInKVxuZXhwb3J0IGNvbnN0IGN1c3RvbWVyU3RhdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcl9jdXN0b21lcl9zdGF0cycpXG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cbmlmKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuXG52YXIgdHJhbnNmb3JtO1xudmFyIGluc2VydEludG87XG5cblxuXG52YXIgb3B0aW9ucyA9IHtcImhtclwiOnRydWV9XG5cbm9wdGlvbnMudHJhbnNmb3JtID0gdHJhbnNmb3JtXG5vcHRpb25zLmluc2VydEludG8gPSB1bmRlZmluZWQ7XG5cbnZhciB1cGRhdGUgPSByZXF1aXJlKFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL2FkZFN0eWxlcy5qc1wiKShjb250ZW50LCBvcHRpb25zKTtcblxuaWYoY29udGVudC5sb2NhbHMpIG1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHM7XG5cbmlmKG1vZHVsZS5ob3QpIHtcblx0bW9kdWxlLmhvdC5hY2NlcHQoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIsIGZ1bmN0aW9uKCkge1xuXHRcdHZhciBuZXdDb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2xpYi9sb2FkZXIuanMhLi9iYXNlLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2hvdGVsLWV4dGVyaW9yLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvaG90ZWwtbG9iYnktbW9kMS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2hvdGVsLXJvb2Z0b3AuanBnXCI7IiwiZXhwb3J0IGNvbnN0IHJvb21JbWFnZXMgPSBbXG4gICcuL2ltYWdlcy9yb29tLWdhdWR5LmpwZycsXG4gICcuL2ltYWdlcy9yb29tLWtpbmdseS5qcGcnLFxuICAnLi9pbWFnZXMvcm9vbS1raW5mb2xrLmpwZycsXG4gICcuL2ltYWdlcy9yb29tLW1vZGlzaC5qcGcnLFxuICAnLi9pbWFnZXMvcm9vbS1zbWFsbC5qcGcnLFxuICAnLi9pbWFnZXMvcm9vbS1zcGFyc2UuanBnJyxcbiAgJy4vaW1hZ2VzL3Jvb20tc3VpdGUuanBnJyxcbiAgJy4vaW1hZ2VzL3Jvb20teHRyYXNtYWxsLmpwZycsXG4gICcuL2ltYWdlcy9yb29tLXh0cmFzbWFsbDIuanBnJyxcbl1cblxuZXhwb3J0IGNvbnN0IGJhdGhyb29tSW1hZ2VzID0gW1xuICAnLi9pbWFnZXMvcm9vbS1iYXRoLWZhbmN5LmpwZycsXG4gICcuL2ltYWdlcy9yb29tLWJhdGgtZmFuY3kyLmpwZycsXG5dXG5cbmV4cG9ydCBjb25zdCBsb2JieUltYWdlcyA9IFtcbiAgJy4vaW1hZ2VzL2hvdGVsLWxvYmJ5LW1vZDEuanBnJyxcbiAgJy4vaW1hZ2VzL2hvdGVsLWxvYmJ5LW1vZDIuanBnJyxcbiAgJy4vaW1hZ2VzL2hvdGVsLWxvYmJ5LW1vZDMuanBnJ1xuXVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLWdhdWR5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbS1raW5mb2xrLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbS1raW5nbHkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLW1vZGlzaC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20tc21hbGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLXNwYXJzZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20tc3VpdGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLXh0cmFzbWFsbC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20teHRyYXNtYWxsMi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3VzZXItcHJvZmlsZS5zdmdcIjsiLCJpbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2hvdGVsLWV4dGVyaW9yLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvdXNlci1wcm9maWxlLnN2ZydcbmltcG9ydCAnLi9pbWFnZXMvaG90ZWwtcm9vZnRvcC5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tZ2F1ZHkuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLWtpbmdseS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20ta2luZm9say5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tbW9kaXNoLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS1zbWFsbC5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tc3BhcnNlLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS1zdWl0ZS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20teHRyYXNtYWxsLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS14dHJhc21hbGwyLmpwZydcblxuaW1wb3J0IHsgcm9vbUltYWdlcywgYmF0aHJvb21JbWFnZXMsIGxvYmJ5SW1hZ2VzIH0gZnJvbSAnLi9pbWFnZXMvaW1hZ2UtYXNzZXRzJztcblxuaW1wb3J0IHtcbiAgZG9tT2JqZWN0LFxuICBwcm9maWxlSWNvbixcbiAgbG9naW5Cb3gsXG4gIGxvZ2luQnV0dG9uLFxuICB1c2VybmFtZUlucHV0LFxuICBwYXNzd29yZElucHV0LFxuICBuYXZCb29raW5nLFxuICBuYXZSb29tcyxcbiAgbmF2Q29udGFjdCxcbiAgbmF2TWFuYWdlckhvdGVsLFxuICBuYXZNYW5hZ2VyQm9va2luZyxcbiAgbmF2TWFuYWdlckhpc3RvcnksXG4gIG5hdkN1c3RvbWVyRmluZFJvb21zLFxuICBuYXZDdXN0b21lckFjY291bnQsXG4gIG5hdkN1c3RvbWVySG90ZWwsXG4gIGNhbGVuZGFyLFxuICBsb2dvdXRCdXR0b24sXG4gIG1hbmFnZXJVc2VyU2VhcmNoLFxuICBib29raW5nVG9vbGJhcixcbiAgZGFzaGJvYXJkQ3VzdG9tZXIsXG4gIG1hbmFnZXJEYXNoYm9hcmQsXG4gIG1haW5Db250ZW50Q29udGFpbmVyLFxuICBtYW5hZ2VyVXNlclNlYXJjaElucHV0LFxuICBjYWxlbmRhcklucHV0LFxuICBkYXNoYm9hcmRIZWFkZXIsXG4gIHRvb2xiYXJTdWJtaXQsXG4gIHJvb21UeXBlRHJvcGRvd24sXG4gIG1hbmFnZXJOYXZMaW5rcyxcbiAgY3VzdG9tZXJTdGF0c1xufSBmcm9tICcuL2NsYXNzZXMvZG9tT2JqZWN0JztcblxubGV0IHVzZXJEYXRhO1xubGV0IGJvb2tpbmdEYXRhO1xubGV0IHJvb21EYXRhO1xubGV0IHVzZXI7XG5sZXQgZGF0ZSA9IGdldEZvcm1hdHRlZERhdGUoKTtcblxubGV0IGZldGNoZWRVc2VyRGF0YSA9IGFwaVJlcXVlc3QuZ2V0VXNlckRhdGEoKTtcbmxldCBmZXRjaGVkQm9va2luZ0RhdGEgPSBhcGlSZXF1ZXN0LmdldEJvb2tpbmdEYXRhKCk7XG5sZXQgZmV0Y2hlZFJvb21EYXRhID0gYXBpUmVxdWVzdC5nZXRSb29tRGF0YSgpO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuL2NsYXNzZXMvVXNlcic7XG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL2NsYXNzZXMvTWFuYWdlcic7XG5pbXBvcnQgQm9va2luZyBmcm9tICcuL2NsYXNzZXMvQm9va2luZyc7XG5cbmltcG9ydCB7IGFwaVJlcXVlc3QgfSBmcm9tICcuL2NsYXNzZXMvYXBpUmVxdWVzdCc7XG5cbi8vIC0tLS0tLS0tLS0tLS0tLS0tLSBldmVudCBsaXN0ZW5lcnMgLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCk9PiBjb25zb2xlLmxvZyhldmVudC50YXJnZXQuaWQpKTtcblxucHJvZmlsZUljb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBkb21PYmplY3Quc2hvd0xvZ2luKTtcbmxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tMb2dpbik7XG5sb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWZyZXNoUGFnZSlcbm5hdkJvb2tpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q3VzdG9tZXJEYXNoYm9hcmQpO1xubWFuYWdlclVzZXJTZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHJldHVyblVzZXJJbmZvKTtcbm5hdkN1c3RvbWVySG90ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SG9tZVBhZ2UpO1xubmF2Q3VzdG9tZXJBY2NvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd015Qm9va2luZ3MpO1xubmF2Q3VzdG9tZXJGaW5kUm9vbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q3VzdG9tZXJEYXNoYm9hcmQpXG5kYXNoYm9hcmRDdXN0b21lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvb2tSb29tKVxubWFuYWdlckRhc2hib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1hbmFnZXJEYXNoYm9hcmRDbGlja0hhbmRsZXIpXG50b29sYmFyU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc29ydEJ5Um9vbVR5cGUpXG5tYW5hZ2VyTmF2TGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYW5hZ2VyTmF2SGFuZGxlcilcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNib29raW5nLXRvb2xiYXInKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZ2hsaWdodExpbmspXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZ2hsaWdodExpbmspXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbU9iamVjdC5zaG93TG9naW4pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1jb250YWN0JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWdobGlnaHRIb3RlbEluZm8pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0gR2VuZXJhbCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblByb21pc2UuYWxsKFtmZXRjaGVkVXNlckRhdGEsIGZldGNoZWRCb29raW5nRGF0YSwgZmV0Y2hlZFJvb21EYXRhXSlcbiAgLnRoZW4odmFsdWUgPT4ge1xuICAgIHVzZXJEYXRhID0gdmFsdWVbMF1bJ3VzZXJzJ107XG4gICAgYm9va2luZ0RhdGEgPSB2YWx1ZVsxXVsnYm9va2luZ3MnXTtcbiAgICByb29tRGF0YSA9IHZhbHVlWzJdWydyb29tcyddO1xuICAgIGxvYWRBcHAoKTtcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcblxuZnVuY3Rpb24gY2hlY2tMb2dpbigpIHtcbiAgbGV0IHVzZXJuYW1lUHJlID0gdXNlcm5hbWVJbnB1dC52YWx1ZS5zcGxpdCgnJykuc2xpY2UoMCw4KS5qb2luKCcnKS50b0xvd2VyQ2FzZSgpXG4gIGxldCB1c2VySUQgPSB1c2VybmFtZS52YWx1ZS5zcGxpdCgnJykuc2xpY2UoOCkuam9pbignJylcbiAgbGV0IHBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dC52YWx1ZS50b1N0cmluZygpXG4gIGlmIChwYXNzd29yZCA9PT0gJ292ZXJsb29rMjAyMCcgJiYgdXNlcm5hbWVQcmUgPT09ICdjdXN0b21lcicgJiYgdXNlcklELmxlbmd0aCA+IDAgJiYgdXNlcklEIDwgNTEgJiYgdXNlcklEID4gMCkge1xuICAgIHVzZXIgPSBuZXcgVXNlcih1c2VyRGF0YVt1c2VySUQtMV0pXG4gICAgc2hvd0N1c3RvbWVyRGFzaGJvYXJkKClcbiAgfSBlbHNlIGlmIChwYXNzd29yZCA9PT0gJ292ZXJsb29rMjAyMCcgJiYgdXNlcm5hbWVJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnbWFuYWdlcicpIHtcbiAgICB1c2VyID0gbmV3IE1hbmFnZXIoKVxuICAgIHNob3dNYW5hZ2VyRGFzaGJvYXJkKClcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnSW52YWxpZCBsb2dpbiBpbmZvcm1hdGlvbicpXG4gIH1cbiAgZG9tT2JqZWN0LmhpZGVFbGVtZW50KGxvZ2luQm94KTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gbG9hZEFwcCgpIHtcbiAgbGV0IGNhbERhdGUgPSBkYXRlLnJlcGxhY2VBbGwoJy8nLCctJyk7XG4gIGNhbGVuZGFySW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBjYWxEYXRlKTtcbiAgY2FsZW5kYXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY2FsRGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hQYWdlKCkge1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIGdldENhbGVuZGFyRGF0ZSgpIHtcbiAgcmV0dXJuIGNhbGVuZGFySW5wdXQudmFsdWUucmVwbGFjZUFsbCgnLScsJy8nKVxufVxuXG5mdW5jdGlvbiBnZXRGb3JtYXR0ZWREYXRlKCkge1xuICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gIGxldCBtb250aCA9IG5ld0RhdGUuZ2V0TW9udGgoKSsxO1xuICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xuXG4gIGlmIChkYXRlLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikge1xuICAgIGRhdGUgPSAnMCcgKyBkYXRlXG4gIH1cbiAgaWYgKG1vbnRoLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikge1xuICAgIG1vbnRoID0gJzAnICsgbW9udGhcbiAgfVxuICByZXR1cm4gYCR7bmV3RGF0ZS5nZXRGdWxsWWVhcigpfS8ke21vbnRofS8ke2RhdGV9YFxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLSBOYXYgbGlua3MgYW5kIGNsaWNrIGhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbWFuYWdlckRhc2hib2FyZENsaWNrSGFuZGxlcigpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZV9ib29raW5nX2J1dHRvbicpKSB7XG4gICAgbWFuYWdlckRlbGV0ZUJvb2tpbmcoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSwgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5pbm5lclRleHQpXG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVzdWx0X2Jvb2stcm9vbS1saW5rJykpIHtcbiAgICBib29rUm9vbU1hbmFnZXIoKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hbmFnZXJOYXZIYW5kbGVyICgpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ25hdi1tYW5hZ2VyLWhpc3RvcnknKSB7XG4gICAgcmV0dXJuVXNlckluZm8oKVxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ25hdi1tYW5hZ2VyLWJvb2tpbmcnKSB7XG4gICAgc2hvd01hbmFnZXJCb29rRm9yQ3VzdG9tZXIoKTtcbiAgICBsb2FkQXZhaWxhYmxlUm9vbXMoZGF0ZSk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnbmF2LW1hbmFnZXItaGlzdG9yeScpIHtcbiAgICBzaG93TWFuYWdlckRhc2hib2FyZCgpXG4gIH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0TGluaygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodGFibGVfbGluaycpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfbmF2JylcbiAgfSk7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHRhYmxlX2xpbmsnKSkge1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfbmF2Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0SG90ZWxJbmZvKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcl9ob3RlbC1pbmZvLWJsb2NrJykuY2xhc3NMaXN0LmFkZCgncHVsc2VfaW5mbycpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0gRGFzaGJvYXJkIERpc3BsYXkgLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNob3dIb21lUGFnZSgpIHtcbiAgZG9tT2JqZWN0LmhpZGVIb21lVmlldyhmYWxzZSk7XG4gIGRvbU9iamVjdC5zaG93VG9vbGJhcihmYWxzZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyX2hvdGVsLWluZm8tYmxvY2snKS5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZV9pbmZvJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dNeUJvb2tpbmdzKCkge1xuICBsb2FkVXNlckFjY291bnRJbmZvKGJvb2tpbmdEYXRhKTtcbiAgZG9tT2JqZWN0LnNob3dUb29sYmFyKGZhbHNlKTtcbiAgZG9tT2JqZWN0LnNob3dEYXNoYm9hcmRIZWFkZXIodHJ1ZSk7XG4gIHNob3dEYXNoYm9hcmRNZXNzYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dEYXNoYm9hcmRNZXNzYWdlKCkge1xuICBsZXQgYm9va2luZ1RvdGFsID0gdXNlci52aWV3TXlCb29raW5ncyhib29raW5nRGF0YSkubGVuZ3RoO1xuICBkYXNoYm9hcmRIZWFkZXIuaW5uZXJIVE1MID0gJyc7XG4gIGRhc2hib2FyZEhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gIGBcbiAgPHA+VGhhbmtzIGZvciB5b3VyIGNvbnRpbnVlZCBzdXBwb3J0ICR7dXNlci5uYW1lfS4gWW91IGhhdmUgJHtib29raW5nVG90YWwgPiAxID8gYm9va2luZ1RvdGFsICsgJyBib29raW5ncycgOiBib29raW5nVG90YWwgKyAnIGJvb2tpbmcnfSBvbiByZWNvcmQgd2l0aCB1cyR7Ym9va2luZ1RvdGFsID4gMjAgPyAnLiBXSE9BIScgOiAnISd9PC9wPlxuICBgKVxufVxuXG5mdW5jdGlvbiBzaG93Q3VzdG9tZXJEYXNoYm9hcmQoKSB7XG4gIGlmICh1c2VyIGluc3RhbmNlb2YgVXNlcikge1xuICAgIGRvbU9iamVjdC5zaG93Q3VzdG9tZXJEYXNoYm9hcmQodHJ1ZSk7XG4gICAgZG9tT2JqZWN0LnNob3dUb29sYmFyKHRydWUpO1xuICAgIGRvbU9iamVjdC5oaWRlRWxlbWVudChtYW5hZ2VyVXNlclNlYXJjaCk7XG4gICAgZG9tT2JqZWN0LnNob3dEYXNoYm9hcmRIZWFkZXIoZmFsc2UpO1xuICAgIHVwZGF0ZUN1c3RvbWVyU3RhdHMoKTtcbiAgICBsb2FkQXZhaWxhYmxlUm9vbXMoZGF0ZSk7XG4gICAgbmF2Q3VzdG9tZXJGaW5kUm9vbXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX25hdicpXG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBsb2cgaW4gdG8gdmlldyBhdmFpbGFibGUgcm9vbXMnKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1c3RvbWVyU3RhdHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyX2N1c3RvbWVyX3N0YXRzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b21lcl9zdGF0X3RpdGxlX2RhdGUnKS5pbm5lclRleHQgPSBgJHt1c2VyLm5hbWV9YFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VzdG9tZXJfc3RhdF90b3RhbF9zcGVudCcpLmlubmVyVGV4dCA9IGAkJHt1c2VyLnZpZXdNeVRvdGFsKGJvb2tpbmdEYXRhLCByb29tRGF0YSkudG9GaXhlZCgpfWBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1c3RvbWVyX3N0YXRfdG90YWxfc3RheXMnKS5pbm5lclRleHQgPSBgJHt1c2VyLnZpZXdNeUJvb2tpbmdzKGJvb2tpbmdEYXRhKS5sZW5ndGh9YFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VzdG9tZXJfc3RhdF9sb3lhbHR5X3dyYXBwZXInKS5pbm5lckhUTUwgPSAnJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1c3RvbWVyX3N0YXRfbG95YWx0eV93cmFwcGVyJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgPHA+TE9ZQUxUWSBMRVZFTDwvcD5cbiAgICA8cCBpZD0nY3VzdG9tZXJfc3RhdF9sb3lhbHR5JyBjbGFzcz0nc3RhdF9nb2xkJz4ke2dldExveWFsdHlTdGF0dXMoKX08L3A+XG4gIGApO1xufVxuXG5mdW5jdGlvbiBnZXRMb3lhbHR5U3RhdHVzKCkge1xuICBsZXQgdG90YWwgPSBOdW1iZXIodXNlci52aWV3TXlUb3RhbChib29raW5nRGF0YSwgcm9vbURhdGEpKTtcbiAgaWYgKHRvdGFsIDwgMTAwMCkge1xuICAgIHJldHVybiAnQXNzb2NpYXRlJ1xuICB9IGVsc2UgaWYgKHRvdGFsID4gMTAwMCAmJiB0b3RhbCA8IDUwMDApIHtcbiAgICByZXR1cm4gJ1ByZW1pZXInXG4gIH0gZWxzZSBpZiAodG90YWwgPiA1MDAwICYmIHRvdGFsIDwgMTAwMDApIHtcbiAgICByZXR1cm4gJ0V4ZWN1dGl2ZSdcbiAgfSBlbHNlIGlmICh0b3RhbCA+IDEwMDAwICYmIHRvdGFsIDwgMTUwMDApIHtcbiAgICByZXR1cm4gJ1JveWFsdHknXG4gIH0gZWxzZSBpZiAodG90YWwgPiAxNTAwMCkge1xuICAgIHJldHVybiAnVmVuZXJhdGVkJ1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dNYW5hZ2VyRGFzaGJvYXJkKCkge1xuICBkb21PYmplY3QuaGlkZUVsZW1lbnQoY3VzdG9tZXJTdGF0cylcbiAgZG9tT2JqZWN0LmhpZGVIb21lVmlldyh0cnVlKTtcbiAgZG9tT2JqZWN0LmhpZGVNYW5hZ2VyVmlldyhmYWxzZSk7XG4gIGRvbU9iamVjdC5zaG93VG9vbGJhckN1c3RvbWVySGlzdG9yeSgpO1xuICBzaG93TWFuYWdlcldlbGNvbWVNZXNzYWdlKClcbiAgdXBkYXRlTWFuYWdlclN0YXRzKClcbn1cblxuZnVuY3Rpb24gc2hvd01hbmFnZXJXZWxjb21lTWVzc2FnZSgpIHtcbiAgbWFuYWdlckRhc2hib2FyZC5pbm5lckhUTUwgPSAnJ1xuICBsZXQgcm9vbXNUb1JlbnQgPSB1c2VyLnRvdGFsQXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKVxuICBtYW5hZ2VyRGFzaGJvYXJkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICA8ZGl2IGlkPSdtYW5hZ2VyX3dlbGNvbWUtd3JhcHBlcic+PHAgaWQ9J21hbmFnZXJfd2VsY29tZSc+SGV5IEJvc3MhIFdlJ3ZlIGdvdCAkeyFyb29tc1RvUmVudCA/ICdub3RoaW5nJyA6IHJvb21zVG9SZW50ICsgJyByb29tcyd9IGF2YWlsYWJsZSB0byBib29rIHRvZGF5ITwvcD48L2Rpdj5cbiAgYClcbn1cblxuZnVuY3Rpb24gc2hvd01hbmFnZXJCb29rRm9yQ3VzdG9tZXIoKSB7XG4gIGRvbU9iamVjdC5zaG93RWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9vbGJhcl9zdWJtaXRfYnV0dG9uX3dyYXBwZXInKSlcbiAgZG9tT2JqZWN0LnNob3dFbGVtZW50KHJvb21UeXBlRHJvcGRvd24pXG4gIGRvbU9iamVjdC5zaG93RWxlbWVudChjYWxlbmRhcilcbn1cblxuZnVuY3Rpb24gdXBkYXRlTWFuYWdlclN0YXRzKGN1c3RvbWVyTmFtZSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcl9tYW5hZ2VyX3N0YXRzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYW5hZ2VyX3N0YXRfdGl0bGVfZGF0ZScpLmlubmVyVGV4dCA9IGAke2RhdGV9YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXJfc3RhdF9hdmFpbGFiaWxpdHknKS5pbm5lclRleHQgPSBgJHt1c2VyLnRvdGFsQXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKX0gdmFjYW5jaWVzYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXJfc3RhdF90b3RhbF9yZXZlbnVlJykuaW5uZXJUZXh0ID0gYCQke3VzZXIudG90YWxSZXZlbnVlKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSkudG9GaXhlZCgpfWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYW5hZ2VyX3N0YXRfdG90YWxfb2NjdXBhbmN5JykuaW5uZXJUZXh0ID0gYCR7dXNlci50b3RhbFBlcmNlbnRPY2N1cGllZChib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpKjEwMH0lYDtcbiAgaWYgKGN1c3RvbWVyTmFtZSkge1xuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYW5hZ2VyX3N0YXRfY3VzdG9tZXJfdG90YWxfd3JhcHBlcicpLmlubmVySFRNTCA9Jyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXJfc3RhdF9jdXN0b21lcl90b3RhbF93cmFwcGVyJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgICA8cD5DVVNUT01FUiBUT1RBTDwvcD5cbiAgICAgIDxwIGlkPSdtYW5hZ2VyX3N0YXRfY3VzdG9tZXJfdG90YWwnIGNsYXNzPSdzdGF0X2dvbGQnPiQke3VzZXIudmlld0N1c3RvbWVySW5mbyhib29raW5nRGF0YSwgcm9vbURhdGEsIHVzZXJEYXRhLCBjdXN0b21lck5hbWUpLnRvdGFsU3BlbnQudG9GaXhlZCgpfTwvcD5cbiAgICBgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRVc2VyQWNjb3VudEluZm8oYm9va2luZ0RhdGEsIG5hbWUpIHtcbiAgbGV0IGRhc2hib2FyZEFuZEJvb2tpbmdzID0gZ2V0Q29ycmVjdERhc2hBbmRCb29raW5nKGJvb2tpbmdEYXRhLCBuYW1lKTtcbiAgZGFzaGJvYXJkQW5kQm9va2luZ3NbMF0uaW5uZXJIVE1MID0gJyc7XG4gIGRhc2hib2FyZEFuZEJvb2tpbmdzWzFdLmZvckVhY2goKGJvb2tpbmcsIGkpID0+IHtcbiAgICBsZXQgcm9vbSA9IHJvb21EYXRhLmZpbmQocm9vbSA9PiByb29tLm51bWJlciA9PT0gYm9va2luZy5yb29tTnVtYmVyKVxuICAgIGxldCByYW5kb21JbWFnZSA9IHJvb21JbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm9vbUltYWdlcy5sZW5ndGgpXTtcbiAgICBkYXNoYm9hcmRBbmRCb29raW5nc1swXS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgYFxuICAgIDxhcnRpY2xlIGlkPSdteS1ib29raW5nX2NhcmQtJHtpfScgY2xhc3M9J215LWJvb2tpbmdfY2FyZCc+XG4gICAgPGRpdiBjbGFzcz0nbXktYm9va2luZ19pbWFnZS13cmFwcGVyJz5cbiAgICA8aW1nIGNsYXNzPSdteS1ib29raW5nX2ltYWdlJyBzcmM9JHtyYW5kb21JbWFnZX0+XG4gICAgPC9kaXY+XG4gICAgPHNlY3Rpb24gY2xhc3M9J215X2Jvb2tpbmctdGV4dF93cmFwcGVyJz5cbiAgICA8ZGl2PlxuICAgIDxwPnJvb20gZGV0YWlsczwvcD5cbiAgICA8cD4ke3Jvb20ucm9vbVR5cGV9PC9wPlxuICAgIDxwPnJvb20gbm86ICR7cm9vbS5udW1iZXJ9PC9wPlxuICAgIDxwPiR7cm9vbS5udW1CZWRzfSAke3Jvb20ubnVtQmVkcyA+IDEgPyByb29tLmJlZFNpemUgKyAnIGJlZHMnIDogcm9vbS5iZWRTaXplICsgJyBiZWQnfTwvcD5cbiAgICA8cD4ke3Jvb20uYmlkZXQgPyAnYW1lbml0aWVzOiA8YnI+YmlkZXQnIDogJyd9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXY+XG4gICAgPHA+Ym9va2luZyBkZXRhaWxzPC9wPlxuICAgIDxwPiR7bmFtZSA/IG5hbWUgOiB1c2VyLm5hbWV9PC9wPlxuICAgIDxwPmZvcjogJHtib29raW5nLmRhdGV9PC9wPlxuICAgIDxwPmN1c3RvbWVyIGlkOiAke2Jvb2tpbmcudXNlcklEfTwvcD5cbiAgICA8cD5ib29raW5nIGlkOjwvcD5cbiAgICA8cD4ke2Jvb2tpbmcuaWR9PC9wPlxuICAgIDwvZGl2PlxuICAgIDxkaXYgaWQ9J2Jvb2tpbmdfdG90YWxfJHtpfSc+XG4gICAgPHA+JCR7cm9vbS5jb3N0UGVyTmlnaHQudG9GaXhlZCgyKX08L3A+XG4gICAgPC9kaXY+XG4gICAgPC9zZWN0aW9uPlxuICAgIDwvYXJ0aWNsZT5cbiAgICBgKTtcbiAgICBpZiAodXNlciBpbnN0YW5jZW9mIE1hbmFnZXIgJiYgYm9va2luZy5kYXRlID4gZGF0ZSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Jvb2tpbmdfdG90YWxfJHtpfWApLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgICA8cCBjbGFzcz0nZGVsZXRlX2Jvb2tpbmdfYnV0dG9uJyB2YWx1ZT0ke2Jvb2tpbmcuaWR9PkRFTEVURSA8YnI+Qk9PS0lORzwvcD5cbiAgICAgICAgPHNwYW4gY2xhc3M9J2hpZGRlbic+JHtuYW1lfTwvc3Bhbj5cbiAgICAgIGApXG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gbG9hZEF2YWlsYWJsZVJvb21zKGRhdGUsIHJvb21UeXBlKSB7XG4gIGRhdGUgPSBnZXRDYWxlbmRhckRhdGUoKVxuICBsZXQgZGFzaGJvYXJkQW5kQm9va2luZ3MgPSBnZXRDb3JyZWN0RGFzaEFuZEJvb2tpbmcoYm9va2luZ0RhdGEsIG5hbWUpO1xuICBsZXQgYm9va2luZ0FycmF5ID0gdXNlci52aWV3QXZhaWxhYmxlUm9vbXNCeVR5cGUoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlLCByb29tVHlwZSk7XG4gIGRhc2hib2FyZEFuZEJvb2tpbmdzWzBdLmlubmVySFRNTCA9ICcnXG4gIGlmIChib29raW5nQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgZGFzaGJvYXJkQW5kQm9va2luZ3NbMF0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgPGRpdiBpZD0nc29ycnlfbWVzc2FnZS13cmFwcGVyJz48cCBpZD0nc29ycnlfbWVzc2FnZSc+U29ycnksIHRoZXJlIGFyZSBubyAkeyFyb29tVHlwZSA/ICdyb29tJyA6IHJvb21UeXBlfXMgYXZhaWxhYmlsZSBmb3IgYSAke2RhdGV9IGJvb2tpbmc8L3A+PC9kaXY+XG4gICAgYClcbiAgfSBlbHNlIHtcbiAgICBib29raW5nQXJyYXkuZm9yRWFjaCgocm9vbSwgaSkgPT4ge1xuICAgICAgbGV0IHJhbmRvbUltYWdlID0gcm9vbUltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb29tSW1hZ2VzLmxlbmd0aCldO1xuICAgICAgZGFzaGJvYXJkQW5kQm9va2luZ3NbMF0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLFxuICAgICAgYFxuICAgICAgPGFydGljbGUgaWQ9J3Jlc3VsdF9jYXJkLSR7aX0nIGNsYXNzPSdyZXN1bHRfY2FyZCBmYWRlLWluJz5cbiAgICAgIDxkaXYgY2xhc3M9J3Jlc3VsdF9pbWFnZS13cmFwcGVyJz5cbiAgICAgIDxpbWcgY2xhc3M9J3Jlc3VsdF9pbWFnZScgc3JjPSR7cmFuZG9tSW1hZ2V9IGFsdD0nQSAke3Jvb20ubnVtQmVkc30gYmVkLCBjYWxtIGFuZCBzZXJlbmUgbW9kZXJuICR7cm9vbS5yb29tVHlwZX0nPlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzcz0ncmVzdWx0X3RleHQtd3JhcHBlcic+XG4gICAgICA8aDI+JHtyb29tLnJvb21UeXBlfSAjJHtyb29tLm51bWJlcn08L2gyPlxuICAgICAgPHA+JHtyb29tLm51bUJlZHN9ICR7cm9vbS5udW1CZWRzID4gMSA/IHJvb20uYmVkU2l6ZSArICcgYmVkcycgOiByb29tLmJlZFNpemUgKyAnIGJlZCd9LCBpbmNyZWRpYmxlIG1vdW50YWluIHZpZXdzLFxuICAgICAgPGJyPmEgZnVsbHkgbW9kZXJuIHJvb20gYW5kIGJhdGhyb29tJHtyb29tLmJpZGV0ID8gJyBpbmNsdWRpbmcgYSBiaWRldCEnIDogJy4nfTwvcD5cbiAgICAgIDxicj5cbiAgICAgIDxkaXY+XG4gICAgICA8cD4kJHtyb29tLmNvc3RQZXJOaWdodC50b0ZpeGVkKDIpfTwvcD5cbiAgICAgIDxwPnBlciBuaWdodDxicj5leGNsdWRpbmcgdGF4ZXMgYW5kIGZlZXM8L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxzcGFuPjxwIGlkPSdib29rX3Jvb21fbGluaycgdmFsdWU9JyR7cm9vbS5udW1iZXJ9JyBjbGFzcz0ncmVzdWx0X2Jvb2stcm9vbS1saW5rJz5CT09LIFRISVMgUk9PTTwvcD48L3NwYW4+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2FydGljbGU+XG4gICAgICBgKTtcbiAgICB9KTtcbiAgfTtcbn1cblxuLy8gLS0tLS0tLS0tLS0tIERhc2hib2FyZCBEYXRhIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5mdW5jdGlvbiBnZXRDb3JyZWN0RGFzaEFuZEJvb2tpbmcoYm9va2luZ0RhdGEsIG5hbWUpIHtcbiAgbGV0IGN1c3RvbWVyT3JNYW5hZ2VyID0gdXNlciBpbnN0YW5jZW9mIE1hbmFnZXIgPyAnbWFuYWdlcicgOiAnY3VzdG9tZXInO1xuICBsZXQgZGFzaGJvYXJkID0gY3VzdG9tZXJPck1hbmFnZXIgPT09ICdtYW5hZ2VyJyA/IG1hbmFnZXJEYXNoYm9hcmQgOiBkYXNoYm9hcmRDdXN0b21lcjtcbiAgbGV0IGJvb2tpbmdzID0gY3VzdG9tZXJPck1hbmFnZXIgPT09ICdtYW5hZ2VyJyA/IHVzZXIudmlld0N1c3RvbWVyQm9va2luZ3MoYm9va2luZ0RhdGEsIHVzZXJEYXRhLCBuYW1lKSA6IHVzZXIudmlld015Qm9va2luZ3MoYm9va2luZ0RhdGEpO1xuICBsZXQgc29ydGVkQm9va2luZ3MgPSBib29raW5ncy5zb3J0KChhLGIpID0+IG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpKVxuICByZXR1cm4gW2Rhc2hib2FyZCwgc29ydGVkQm9va2luZ3NdXG59XG5cbmZ1bmN0aW9uIGJvb2tSb29tKCkge1xuICBkYXRlID0gZ2V0Q2FsZW5kYXJEYXRlKClcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc3VsdF9ib29rLXJvb20tbGluaycpKSB7XG4gICAgbGV0IHJvb21OdW0gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG4gICAgbGV0IG9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIGdldFVwZGF0ZWRBdmFpbGFibGVMaXN0KClcbiAgICB9XG4gICAgdXNlci5ib29rTXlSb29tKGRhdGUsIHJvb21OdW0sIG9uU3VjY2Vzcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYm9va1Jvb21NYW5hZ2VyKCkge1xuICBkYXRlID0gZ2V0Q2FsZW5kYXJEYXRlKClcbiAgbGV0IG5hbWUgPSBtYW5hZ2VyVXNlclNlYXJjaElucHV0LnZhbHVlO1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVzdWx0X2Jvb2stcm9vbS1saW5rJykgJiYgbmFtZSAhPT0gJycpIHtcbiAgICBsZXQgcm9vbU51bSA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcbiAgICBsZXQgb25TdWNjZXNzID0gKCkgPT4ge1xuICAgICAgZ2V0VXBkYXRlZEF2YWlsYWJsZUxpc3QoKVxuICAgIH1cbiAgICB1c2VyLmFkZEN1c3RvbWVyQm9va2luZyh1c2VyRGF0YSwgbmFtZSwgZGF0ZSwgcm9vbU51bSwgb25TdWNjZXNzKTtcbiAgfSBlbHNlIGlmIChldmVudC50YXJnZXQuaWQgPT09ICdib29rX3Jvb21fbGluaycgJiYgbmFtZSA9PT0gJycpIHtcbiAgICBhbGVydCgnUGxlYXNlIGZpcnN0IHNlbGVjdCBhIHVzZXIgYnkgdGhlaXIgZmlyc3QgYW5kIGxhc3QgbmFtZSBpbiB0aGUgdG9vbGJhcicpXG4gIH1cbn1cblxuZnVuY3Rpb24gbWFuYWdlckRlbGV0ZUJvb2tpbmcoaWQsIG5hbWUpIHtcbiAgY29uc29sZS5sb2coaWQsIG5hbWUpO1xuICBpZiAoY29uZmlybShgQXJlIHlvdSBzdXJlIHlvdSB3YW50IHRvIGRlbGV0ZSBib29raW5nICR7aWR9P2ApKSB7XG4gICAgbGV0IG9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIHVwZGF0ZU1hbmFnZXJVc2VySW5mbyhuYW1lKVxuICAgIH1cbiAgICB1c2VyLmRlbGV0ZUN1c3RvbWVyQm9va2luZyhib29raW5nRGF0YSwgaWQsIG9uU3VjY2Vzcyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gc29ydEJ5Um9vbVR5cGUoKSB7XG4gIGxldCBkcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb29tLXR5cGVzJyk7XG4gIGxldCByb29tVHlwZSA9IGRyb3Bkb3duLm9wdGlvbnNbZHJvcGRvd24uc2VsZWN0ZWRJbmRleF0udmFsdWUudG9TdHJpbmcoKTtcbiAgbGV0IHNlbGVjdGVkRGF0ZSA9IGdldENhbGVuZGFyRGF0ZSgpO1xuXG4gIGlmIChyb29tVHlwZSA9PT0gJ3Jlc2lkZW50aWFsJykge1xuICAgIGxvYWRBdmFpbGFibGVSb29tcyhzZWxlY3RlZERhdGUsICdyZXNpZGVudGlhbCBzdWl0ZScpO1xuICB9IGVsc2UgaWYgKHJvb21UeXBlID09PSAnc3VpdGUnKSB7XG4gICAgbG9hZEF2YWlsYWJsZVJvb21zKHNlbGVjdGVkRGF0ZSwgJ3N1aXRlJyk7XG4gIH0gZWxzZSBpZiAocm9vbVR5cGUgPT09ICdqdW5pb3InKSB7XG4gICAgbG9hZEF2YWlsYWJsZVJvb21zKHNlbGVjdGVkRGF0ZSwgJ2p1bmlvciBzdWl0ZScpO1xuICB9IGVsc2UgaWYgKHJvb21UeXBlID09PSAnc2luZ2xlJykge1xuICAgIGxvYWRBdmFpbGFibGVSb29tcyhzZWxlY3RlZERhdGUsICdzaW5nbGUgcm9vbScpO1xuICB9IGVsc2UgaWYgKHJvb21UeXBlID09PSAnYWxsJykge1xuICAgIGxvYWRBdmFpbGFibGVSb29tcyhzZWxlY3RlZERhdGUpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZU1hbmFnZXJVc2VySW5mbyhuYW1lKSB7XG4gIGZldGNoZWRCb29raW5nRGF0YSA9IGFwaVJlcXVlc3QuZ2V0Qm9va2luZ0RhdGEoKTtcbiAgZmV0Y2hlZEJvb2tpbmdEYXRhLnRoZW4odmFsdWUgPT4ge1xuICAgIGJvb2tpbmdEYXRhID0gdmFsdWVbJ2Jvb2tpbmdzJ11cbiAgfSkudGhlbigoKT0+bG9hZFVzZXJBY2NvdW50SW5mbyhib29raW5nRGF0YSwgbmFtZSkpLnRoZW4oKCk9PiB7XG4gICAgdXBkYXRlTWFuYWdlclN0YXRzKG1hbmFnZXJVc2VyU2VhcmNoSW5wdXQudmFsdWUpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGdldFVwZGF0ZWRBdmFpbGFibGVMaXN0KCkge1xuICBmZXRjaGVkQm9va2luZ0RhdGEgPSBhcGlSZXF1ZXN0LmdldEJvb2tpbmdEYXRhKCk7XG4gIGZldGNoZWRCb29raW5nRGF0YS50aGVuKHZhbHVlID0+IHtcbiAgICBib29raW5nRGF0YSA9IHZhbHVlWydib29raW5ncyddXG4gIH0pLnRoZW4oKCk9PmxvYWRBdmFpbGFibGVSb29tcyhkYXRlKSkudGhlbigoKT0+IHtcbiAgICBpZiAodXNlciBpbnN0YW5jZW9mIE1hbmFnZXIpIHtcbiAgICAgIHVwZGF0ZU1hbmFnZXJTdGF0cyhtYW5hZ2VyVXNlclNlYXJjaElucHV0LnZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdXBkYXRlQ3VzdG9tZXJTdGF0cygpO1xuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gcmV0dXJuVXNlckluZm8oKSB7XG4gIGlmIChldmVudC5rZXkgPT09ICdFbnRlcicpIHtcbiAgICBsb2FkVXNlckFjY291bnRJbmZvKGJvb2tpbmdEYXRhLCBtYW5hZ2VyVXNlclNlYXJjaElucHV0LnZhbHVlKTtcbiAgICB1cGRhdGVNYW5hZ2VyU3RhdHMobWFuYWdlclVzZXJTZWFyY2hJbnB1dC52YWx1ZSlcbiAgICBuYXZNYW5hZ2VySGlzdG9yeS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfbmF2JylcbiAgfSBlbHNlIGlmIChtYW5hZ2VyVXNlclNlYXJjaElucHV0LnZhbHVlKSB7XG4gICAgbG9hZFVzZXJBY2NvdW50SW5mbyhib29raW5nRGF0YSwgbWFuYWdlclVzZXJTZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgdXBkYXRlTWFuYWdlclN0YXRzKG1hbmFnZXJVc2VyU2VhcmNoSW5wdXQudmFsdWUpXG4gICAgbmF2TWFuYWdlckhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX25hdicpXG4gIH0gZWxzZSB7XG4gICAgbmF2TWFuYWdlckhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX25hdicpXG4gIH1cbiAgZG9tT2JqZWN0LnNob3dUb29sYmFyQ3VzdG9tZXJIaXN0b3J5KCk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9