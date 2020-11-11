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

/***/ "./src/classes/Manager.js":
/*!********************************!*\
  !*** ./src/classes/Manager.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Manager; });
/* harmony import */ var _User__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./User */ "./src/classes/User.js");
/* harmony import */ var _apiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./apiRequest */ "./src/classes/apiRequest.js");



class Manager extends _User__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
      .reduce((totalRevenue, room) => {
        totalRevenue += room.costPerNight;
        return totalRevenue
      }, 0).toFixed(2))
  }

  totalPercentOccupied(bookingData, roomData, date) {
    return (this.viewUnavailableRooms(bookingData, roomData, date).length /
    roomData.length).toFixed(2)
  }

  viewCustomer(userData, nameOrId) {
    if (typeof nameOrId === 'string') {
      return new _User__WEBPACK_IMPORTED_MODULE_0__["default"](userData.find(user => user.name === nameOrId))
    } else {
      return new _User__WEBPACK_IMPORTED_MODULE_0__["default"](userData.find(user => user.id === nameOrId))
    }
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
    _apiRequest__WEBPACK_IMPORTED_MODULE_1__["apiRequest"].deleteBooking(booking, onSuccess);
  }

  getDate() {
    let newDate = new Date();
    let month = newDate.getMonth() + 1;
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
/* harmony import */ var _apiRequest__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./apiRequest */ "./src/classes/apiRequest.js");


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
    _apiRequest__WEBPACK_IMPORTED_MODULE_0__["apiRequest"].createBooking(booking, onSuccess)
  }

  viewMyBookings(bookingData) {
    let myBookings = bookingData.filter(booking => {
      return booking.userID === this.id
    });
    return myBookings.sort((a, b) => {
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
/* harmony import */ var _classes_apiRequest__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./classes/apiRequest */ "./src/classes/apiRequest.js");


















let userData;
let bookingData;
let roomData;
let user;
let date = getFormattedDate();

let fetchedUserData = _classes_apiRequest__WEBPACK_IMPORTED_MODULE_17__["apiRequest"].getUserData();
let fetchedBookingData = _classes_apiRequest__WEBPACK_IMPORTED_MODULE_17__["apiRequest"].getBookingData();
let fetchedRoomData = _classes_apiRequest__WEBPACK_IMPORTED_MODULE_17__["apiRequest"].getRoomData();






// ------------------ event listeners ------------------

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
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["bookingToolbar"].addEventListener('click', highlightLink)
_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["navContact"].addEventListener('click', highlightHotelInfo);
document.querySelector('nav').addEventListener('click', highlightLink)
document.addEventListener('click', _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["domObject"].showLogin);

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
  let usernamePre = _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["usernameInput"].value.split('').slice(0, 8).join('').toLowerCase()
  let userID = _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["usernameInput"].value.split('').slice(8).join('')
  let password = _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["passwordInput"].value.toString()
  if (password === 'overlook2020' && usernamePre === 'customer' && userID.length > 0 && userID < 51 && userID > 0) {
    user = new _classes_User__WEBPACK_IMPORTED_MODULE_15__["default"](userData[userID - 1])
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
  let calDate = date.replaceAll('/', '-');
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["calendarInput"].setAttribute('min', calDate);
  _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["calendarInput"].setAttribute('value', calDate);
}

function refreshPage() {
  window.location.reload();
}

function getCalendarDate() {
  return _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["calendarInput"].value.replaceAll('-', '/')
}

function getFormattedDate() {
  let newDate = new Date();
  let month = newDate.getMonth() + 1;
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

function managerNavHandler() {
  if (event.target.id === 'nav-manager-history') {
    returnUserInfo()
  } else if (event.target.id === 'nav-manager-booking') {
    showManagerBookForCustomer();
    loadAvailableRooms(date);
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
  document.querySelector('#manager_stat_total_occupancy').innerText = `${user.totalPercentOccupied(bookingData, roomData, date) * 100}%`;
  if (customerName) {
    document.querySelector('#manager_stat_customer_total_wrapper').innerHTML = '';
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
  }
}

// ------------ Dashboard Data ---------------------

function getCorrectDashAndBooking(bookingData, name) {
  let customerOrManager = user instanceof _classes_Manager__WEBPACK_IMPORTED_MODULE_16__["default"] ? 'manager' : 'customer';
  let dashboard = customerOrManager === 'manager' ? _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerDashboard"] : _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["dashboardCustomer"];
  let bookings = customerOrManager === 'manager' ? user.viewCustomerBookings(bookingData, userData, name) : user.viewMyBookings(bookingData);
  let sortedBookings = bookings.sort((a, b) => new Date(b.date) - new Date(a.date))
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
  fetchedBookingData = _classes_apiRequest__WEBPACK_IMPORTED_MODULE_17__["apiRequest"].getBookingData();
  fetchedBookingData.then(value => {
    bookingData = value['bookings']
  }).then(() => loadUserAccountInfo(bookingData, name)).then(() => {
    updateManagerStats(_classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].value)
  })
}

function getUpdatedAvailableList() {
  fetchedBookingData = _classes_apiRequest__WEBPACK_IMPORTED_MODULE_17__["apiRequest"].getBookingData();
  fetchedBookingData.then(value => {
    bookingData = value['bookings']
  }).then(() => loadAvailableRooms(date)).then(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvdXJsLWVzY2FwZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvYXBpUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9kb21PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/YTIzOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvdGVsLWV4dGVyaW9yLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvdGVsLWxvYmJ5LW1vZDEuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaG90ZWwtcm9vZnRvcC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9pbWFnZS1hc3NldHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLWdhdWR5LmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20ta2luZm9say5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLWtpbmdseS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLW1vZGlzaC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLXNtYWxsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tc3BhcnNlLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20tc3VpdGUuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS14dHJhc21hbGwuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS14dHJhc21hbGwyLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3VzZXItcHJvZmlsZS5zdmciLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7OztBQUdBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSwyQkFBMkIsbUJBQU8sQ0FBQyx3R0FBbUQ7QUFDdEY7QUFDQSxnQkFBZ0IsbUJBQU8sQ0FBQyxzSEFBMEQ7QUFDbEYseUNBQXlDLG1CQUFPLENBQUMseUVBQWdDOztBQUVqRjtBQUNBLGNBQWMsUUFBUyxNQUFNLGNBQWMsZUFBZSwyQkFB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtB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c0I7QUFDM0QsdUJBQXVCLDBFQUFzQjtBQUM3QyxJQUFJLHFFQUFpQjtBQUNyQixHQUFHO0FBQ0gsSUFBSSxxRUFBaUI7QUFDckI7QUFDQSxFQUFFLDZEQUFTO0FBQ1giLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpKGZhbHNlKTtcbi8vIEltcG9ydHNcbnZhciB1cmxFc2NhcGUgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3VybC1lc2NhcGUuanNcIik7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fID0gdXJsRXNjYXBlKHJlcXVpcmUoXCIuLi9pbWFnZXMvaG90ZWwtbG9iYnktbW9kMS5qcGdcIikpO1xuXG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIioge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG5odG1sLCBib2R5IHtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcXG4gIG1hcmdpbjogMDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWFyZ2luOiAwcHg7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuYm9keSB7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93OyB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbiNtYWluX2hlYWRlciB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogLTExcHggLTNweCAyMHB4IDBweCBibGFjaztcXG4gIHBhZGRpbmc6IDAgM2VtO1xcbiAgY29sb3I6IGdyYXk7IH1cXG4gICNtYWluX2hlYWRlciBzdmcge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogM2VtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZmlsbDogZ3JheTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zNXMgZWFzZS1pbi1vdXQ7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgI21haW5faGVhZGVyIHN2Zzpob3ZlciB7XFxuICAgICAgZmlsbDogIzAwZmZmMjsgfVxcbiAgI21haW5faGVhZGVyIG5hdiB7XFxuICAgIGZsZXg6IDE7IH1cXG4gICNtYWluX2hlYWRlciAucHJvZmlsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxOyB9XFxuXFxuLmRhc2hib2FyZF92aWV3IHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogOTB2aDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgfVxcbiAgLmRhc2hib2FyZF92aWV3Ojotd2Via2l0LXNjcm9sbGJhciB7XFxuICAgIGRpc3BsYXk6IG5vbmU7IH1cXG5cXG4uZGFzaGJvYXJkX3ZpZXctbG9nZ2VkX2luIHtcXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gIGhlaWdodDogODB2aDtcXG4gIC1tcy1vdmVyZmxvdy1zdHlsZTogbm9uZTsgfVxcbiAgLmRhc2hib2FyZF92aWV3LWxvZ2dlZF9pbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICBkaXNwbGF5OiBub25lOyB9XFxuXFxuI21haW4tY29udGVudCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG5cXG4uYm9va2luZy10b29sYmFyIHtcXG4gIGhlaWdodDogMTB2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwNGMxNztcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xcbiAgcGFkZGluZzogMCAyZW07XFxuICBjb2xvcjogIzNGM0YzRjtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuICAuYm9va2luZy10b29sYmFyIGRpdjpudGgtY2hpbGQoMSkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuM2VtO1xcbiAgICBwYWRkaW5nOiAwIDJlbTsgfVxcbiAgLmJvb2tpbmctdG9vbGJhciBkaXY6bnRoLWNoaWxkKDIpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTsgfVxcbiAgLmJvb2tpbmctdG9vbGJhciBkaXY6bnRoLWNoaWxkKDMpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG4gICAgZmxleDogMTsgfVxcbiAgLmJvb2tpbmctdG9vbGJhciBkaXY6bnRoLWNoaWxkKDQpIHtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNGM0YzRjtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgbWFyZ2luLXJpZ2h0OiAzZW07XFxuICAgIHBhZGRpbmc6IDFlbTtcXG4gICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuMnM7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAuYm9va2luZy10b29sYmFyIGRpdjpudGgtY2hpbGQoNCk6aG92ZXIge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmMjtcXG4gICAgICBjb2xvcjogd2hpdGU7IH1cXG5cXG4udG9vbGJhci1pbnB1dCB7XFxuICBwYWRkaW5nLWxlZnQ6IDIuN2VtO1xcbiAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlcjogbm9uZTtcXG4gIGNvbG9yOiAjM0YzRjNGO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwNTA0YzAwO1xcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrOyB9XFxuXFxuLnRvb2xiYXJfdGV4dCB7XFxuICBwYWRkaW5nOiAwIC4zNWVtO1xcbiAgZm9udC1zaXplOiAxLjVlbTtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTsgfVxcblxcbi50b29sYmFyX2lucHV0OmhvdmVyIHtcXG4gIGN1cnNvcjogcG9pbnRlciAhaW1wb3J0YW50OyB9XFxuXFxuLm5hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAubmF2LWxpbmtzIC5uYXYtbGluayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xcbiAgICBwYWRkaW5nOiAwIC4zNWVtO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5hdi1saW5rcyAubmF2LWxpbms6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZjI7IH1cXG5cXG4uYWN0aXZlX25hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmYyO1xcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogNzAwOyB9XFxuXFxuLmxvZ2luIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYmFja2Ryb3AtZmlsdGVyOiBibHVyKDNweCk7XFxuICBib3gtc2hhZG93OiAwIDAgMTVweCAjMDAwMDAwYTE7XFxuICBjb2xvcjogIzNGM0YzRjtcXG4gIGhlaWdodDogY29udGVudDtcXG4gIHdpZHRoOiBjb250ZW50O1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAzZW07XFxuICBsZWZ0OiAzZW07XFxuICBwYWRkaW5nOiAyZW07XFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzOyB9XFxuICAubG9naW4gZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgcGFkZGluZy1ib3R0b206IC41ZW07IH1cXG4gICAgLmxvZ2luIGRpdiBwIHtcXG4gICAgICBwYWRkaW5nOiAxZW0gMDsgfVxcblxcbi5tYWluLWludHJvIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4ubWFpbl9jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDJlbSAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5tYWluX2ltYWdlLXdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyOyB9XFxuXFxuLm1haW5faW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDM1MHB4O1xcbiAgcG9zaXRpb246IHJlbGF0aXZlOyB9XFxuXFxuLm1haW5fY2FyZC10ZXh0LXdyYXBwZXIge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWluLXdpZHRoOiA1MCU7IH1cXG4gIC5tYWluX2NhcmQtdGV4dC13cmFwcGVyIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgZm9udC1zaXplOiA0ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7IH1cXG4gIC5tYWluX2NhcmQtdGV4dC13cmFwcGVyIHAge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7IH1cXG4gIC5tYWluX2NhcmQtdGV4dC13cmFwcGVyIGRpdiB7XFxuICAgIHdpZHRoOiBjb250ZW50O1xcbiAgICBoZWlnaHQ6IDFlbTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC41czsgfVxcbiAgICAubWFpbl9jYXJkLXRleHQtd3JhcHBlciBkaXYgLm1haW4tY2FyZF90ZXh0LWxpbmsge1xcbiAgICAgIHotaW5kZXg6IDEwO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuM3M7IH1cXG4gICAgICAubWFpbl9jYXJkLXRleHQtd3JhcHBlciBkaXYgLm1haW4tY2FyZF90ZXh0LWxpbms6aG92ZXIge1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgei1pbmRleDogMDtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZjI7IH1cXG5cXG4ucmVzdWx0X3RleHQtd3JhcHBlciB7XFxuICBwYWRkaW5nOiAyZW07XFxuICBwYWRkaW5nLWxlZnQ6IDMuM2VtO1xcbiAgbWluLXdpZHRoOiA1MCU7IH1cXG4gIC5yZXN1bHRfdGV4dC13cmFwcGVyIGgyIHtcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7IH1cXG4gIC5yZXN1bHRfdGV4dC13cmFwcGVyIHAge1xcbiAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7IH1cXG4gIC5yZXN1bHRfdGV4dC13cmFwcGVyIGRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIHdpZHRoOiBjb250ZW50OyB9XFxuICAgIC5yZXN1bHRfdGV4dC13cmFwcGVyIGRpdiBwOm50aC1jaGlsZCgxKSB7XFxuICAgICAgZm9udC1zaXplOiAyZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDUwMDsgfVxcbiAgICAucmVzdWx0X3RleHQtd3JhcHBlciBkaXYgcDpudGgtY2hpbGQoMikge1xcbiAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgICBtYXJnaW4tbGVmdDogMWVtO1xcbiAgICAgIGZvbnQtc2l6ZTogLjhlbTtcXG4gICAgICBsaW5lLWhlaWdodDogMS4yZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDMwMDsgfVxcbiAgLnJlc3VsdF90ZXh0LXdyYXBwZXIgLnJlc3VsdF9ib29rLXJvb20tbGluayB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgbWFyZ2luLXRvcDogMWVtO1xcbiAgICB6LWluZGV4OiAxMDtcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXG4gICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zcztcXG4gICAgd2lkdGg6IDE1ZW07XFxuICAgIHBhZGRpbmc6IC41ZW0gMWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRjNGM0Y7XFxuICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcbiAgICAucmVzdWx0X3RleHQtd3JhcHBlciAucmVzdWx0X2Jvb2stcm9vbS1saW5rOmhvdmVyIHtcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmYyO1xcbiAgICAgIGNvbG9yOiB3aGl0ZTsgfVxcblxcbi5tYWluLWludHJvIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4ucmVzdWx0X2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMmVtIDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLnJlc3VsdF9pbWFnZS13cmFwcGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGhlaWdodDogMjJlbTsgfVxcblxcbi5yZXN1bHRfaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDMwMHB4OyB9XFxuXFxuLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgcGFkZGluZzogMmVtO1xcbiAgcGFkZGluZy1sZWZ0OiAzLjNlbTtcXG4gIG1pbi13aWR0aDogNTAlOyB9XFxuICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2IHA6bnRoLWNoaWxkKDEpIHtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAzMDA7IH1cXG4gIC5teV9ib29raW5nLXRleHRfd3JhcHBlciBkaXYgcDpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgICBmb250LXdlaWdodDogMjAwOyB9XFxuICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2IHA6bnRoLWNoaWxkKDMpIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgfVxcbiAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdiBwOm50aC1jaGlsZCg0KSB7XFxuICAgIHBhZGRpbmctYm90dG9tOiAuNWVtO1xcbiAgICBmb250LXNpemU6IDFlbTtcXG4gICAgbGluZS1oZWlnaHQ6IDEuOGVtO1xcbiAgICBmb250LXdlaWdodDogMjAwOyB9XFxuICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIHBhZGRpbmc6IDAgMWVtOyB9XFxuICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2Om50aC1jaGlsZCgzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNTAwO1xcbiAgICBmb250LXNpemU6IDEuNmVtO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuICAgIC5teV9ib29raW5nLXRleHRfd3JhcHBlciBkaXY6bnRoLWNoaWxkKDMpIHAge1xcbiAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gICAgICBjb2xvcjogIzNGM0YzRjsgfVxcbiAgICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2Om50aC1jaGlsZCgzKSBwOm50aC1jaGlsZCgyKSB7XFxuICAgICAgY29sb3I6ICMzRjNGM0Y7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XFxuICAgICAgbGluZS1oZWlnaHQ6IDFlbTtcXG4gICAgICBwYWRkaW5nOiA1cHg7XFxuICAgICAgYm9yZGVyOiAxcHggc29saWQgIzNGM0YzRjtcXG4gICAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC41czsgfVxcbiAgICAgIC5teV9ib29raW5nLXRleHRfd3JhcHBlciBkaXY6bnRoLWNoaWxkKDMpIHA6bnRoLWNoaWxkKDIpOmhvdmVyIHtcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjsgfVxcblxcbi5tYWluLWludHJvIHtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4ubXktYm9va2luZ19jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDJlbSAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5teS1ib29raW5nX2ltYWdlLXdyYXBwZXIge1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xcbiAgaGVpZ2h0OiAyMmVtOyB9XFxuXFxuLm15LWJvb2tpbmdfaW1hZ2Uge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtaW4td2lkdGg6IDMwMHB4OyB9XFxuXFxuI2hlcm8taW1hZ2Uge1xcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogMGVtIC0yOGVtO1xcbiAgYmFja2dyb3VuZC1zaXplOiAxMDAlO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgaGVpZ2h0OiAxNXZ3O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiICsgX19fQ1NTX0xPQURFUl9VUkxfX18wX19fICsgXCIpOyB9XFxuXFxuI3NpZGViYXIge1xcbiAgbWluLXdpZHRoOiAyMGVtO1xcbiAgbWF4LXdpZHRoOiAyMGVtO1xcbiAgY29sb3I6ICNjYWNhY2E7XFxuICBmbGV4OiAxO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzNGM0YzRjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYm94LXNoYWRvdzogMjRweCAwcHggMjBweCAyMHB4ICMwMDAwMDBhNjtcXG4gIGhlaWdodDogMTAwdmg7IH1cXG4gICNzaWRlYmFyICNzaWRlYmFyX2hvdGVsLWluZm8tYmxvY2sge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGhlaWdodDogMTBlbTtcXG4gICAgbWFyZ2luLWxlZnQ6IDEuNWVtOyB9XFxuICAgICNzaWRlYmFyICNzaWRlYmFyX2hvdGVsLWluZm8tYmxvY2sgcCB7XFxuICAgICAgbWFyZ2luLXRvcDogLjVlbTtcXG4gICAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgICAgZm9udC1zaXplOiAxLjNlbTtcXG4gICAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTsgfVxcbiAgICAjc2lkZWJhciAjc2lkZWJhcl9ob3RlbC1pbmZvLWJsb2NrIHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgICBmb250LXNpemU6IDFlbTtcXG4gICAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICAgIG1hcmdpbi10b3A6IC41ZW07XFxuICAgICAgYWxpZ24tc2VsZjogY2VudGVyOyB9XFxuXFxuI3NpZGViYXJfY3VzdG9tZXJfc3RhdHMgI2N1c3RvbWVyX3N0YXRfdGl0bGVfd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBmb250LXdlaWdodDogNjAwO1xcbiAgZm9udC1zaXplOiAyZW07IH1cXG4gICNzaWRlYmFyX2N1c3RvbWVyX3N0YXRzICNjdXN0b21lcl9zdGF0X3RpdGxlX3dyYXBwZXIgI2N1c3RvbWVyX3N0YXRfdGl0bGUge1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgcGFkZGluZy10b3A6IDA7XFxuICAgIHBhZGRpbmctYm90dG9tOiAxZW07XFxuICAgIG1hcmdpbjogMDsgfVxcbiAgI3NpZGViYXJfY3VzdG9tZXJfc3RhdHMgI2N1c3RvbWVyX3N0YXRfdGl0bGVfd3JhcHBlciAjY3VzdG9tZXJfc3RhdF90aXRsZV9kYXRlIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBsaW5lLWhlaWdodDogMS4yZW07IH1cXG5cXG4ubWFuYWdlcl9zdGF0X3dyYXBwZXIsIC5jdXN0b21lcl9zdGF0X3dyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBwYWRkaW5nOiAxLjVlbSAxZW07XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwZmZmMjtcXG4gIG1hcmdpbjogMCAyMHB4OyB9XFxuICAubWFuYWdlcl9zdGF0X3dyYXBwZXIgcCwgLmN1c3RvbWVyX3N0YXRfd3JhcHBlciBwIHtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgLm1hbmFnZXJfc3RhdF93cmFwcGVyIHA6bnRoLWNoaWxkKDIpLCAuY3VzdG9tZXJfc3RhdF93cmFwcGVyIHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgfVxcblxcbiNzaWRlYmFyX21hbmFnZXJfc3RhdHMsICNzaWRlYmFyX2N1c3RvbWVyX3N0YXRzIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uOyB9XFxuICAjc2lkZWJhcl9tYW5hZ2VyX3N0YXRzICNtYW5hZ2VyX3N0YXRfdGl0bGVfd3JhcHBlciwgI3NpZGViYXJfY3VzdG9tZXJfc3RhdHMgI21hbmFnZXJfc3RhdF90aXRsZV93cmFwcGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgZm9udC1zaXplOiAyZW07IH1cXG4gICNzaWRlYmFyX21hbmFnZXJfc3RhdHMgI21hbmFnZXJfc3RhdF9jdXN0b21lcl90b3RhbF93cmFwcGVyLCAjc2lkZWJhcl9jdXN0b21lcl9zdGF0cyAjbWFuYWdlcl9zdGF0X2N1c3RvbWVyX3RvdGFsX3dyYXBwZXIge1xcbiAgICBib3JkZXI6IG5vbmU7IH1cXG5cXG4uc3RhdF9nb2xkIHtcXG4gIGNvbG9yOiBnb2xkOyB9XFxuXFxuLnBhdHRlcm5fYmxvY2sge1xcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNDAlO1xcbiAgY29sb3I6ICMwMGZmZjI7XFxuICBiYWNrZ3JvdW5kOiByZXBlYXRpbmctbGluZWFyLWdyYWRpZW50KC02MGRlZywgIzAwZmZmMiwgIzAwZmZmMiAxMHB4LCAjM0YzRjNGIDEwcHgsICMzRjNGM0YgMjBweCk7IH1cXG5cXG4jbWFuYWdlcl93ZWxjb21lLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMTB2aCAyMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMmVtIDA7IH1cXG4gICNtYW5hZ2VyX3dlbGNvbWUtd3JhcHBlciBwIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjsgfVxcblxcbiNzb3JyeV9tZXNzYWdlLXdyYXBwZXIge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgcGFkZGluZzogMTB2aCAyMHZ3O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMmVtIDA7IH1cXG4gICNzb3JyeV9tZXNzYWdlLXdyYXBwZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4ucHVsc2VfaW5mbyB7XFxuICBhbmltYXRpb246IHB1bHNlIGVhc2UgMXM7XFxuICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiA4O1xcbiAgYW5pbWF0aW9uLWRpcmVjdGlvbjogYWx0ZXJuYXRlOyB9XFxuXFxuQGtleWZyYW1lcyBwdWxzZSB7XFxuICAwJSB7XFxuICAgIGNvbG9yOiBpbmhlcml0OyB9XFxuICAxMDAlIHtcXG4gICAgY29sb3I6ICNmZjY5YjQ7IH0gfVxcblxcbi5mYWRlLWluLXBhZ2VMb2FkIHtcXG4gIGFuaW1hdGlvbjogbG9uZ0ZhZGVJbiBlYXNlIDNzOyB9XFxuXFxuQGtleWZyYW1lcyBsb25nRmFkZUluIHtcXG4gIDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDEwcHgpOyB9XFxuICAxMDAlIHtcXG4gICAgZmlsdGVyOiBibHVyKDBweCk7IH0gfVxcblxcbi5mYWRlLWluIHtcXG4gIGFuaW1hdGlvbjogZmFkZUluIGVhc2UgMXM7XFxuICAtd2Via2l0LWFuaW1hdGlvbjogZmFkZUluIGVhc2UgMXM7XFxuICAtbW96LWFuaW1hdGlvbjogZmFkZUluIGVhc2UgMXM7XFxuICAtby1hbmltYXRpb246IGZhZGVJbiBlYXNlIDFzO1xcbiAgLW1zLWFuaW1hdGlvbjogZmFkZUluIGVhc2UgMXM7IH1cXG5cXG5Aa2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIGZpbHRlcjogYmx1cig1cHgpOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTtcXG4gICAgZmlsdGVyOiBibHVyKDBweCk7IH0gfVxcblxcbkAtbW96LWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuQC13ZWJraXQta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5ALW8ta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5ALW1zLWtleWZyYW1lcyBmYWRlSW4ge1xcbiAgMCUge1xcbiAgICBvcGFjaXR5OiAwOyB9XFxuICAxMDAlIHtcXG4gICAgb3BhY2l0eTogMTsgfSB9XFxuXFxuLmhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7IH1cXG5cIiwgXCJcIl0pO1xuXG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gJ0BtZWRpYSAnICsgaXRlbVsyXSArICd7JyArIGNvbnRlbnQgKyAnfSc7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gY29udGVudDtcbiAgICAgIH1cbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5KSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yIChpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpdGVtID0gbW9kdWxlc1tpXTsgLy8gc2tpcCBhbHJlYWR5IGltcG9ydGVkIG1vZHVsZVxuICAgICAgLy8gdGhpcyBpbXBsZW1lbnRhdGlvbiBpcyBub3QgMTAwJSBwZXJmZWN0IGZvciB3ZWlyZCBtZWRpYSBxdWVyeSBjb21iaW5hdGlvbnNcbiAgICAgIC8vIHdoZW4gYSBtb2R1bGUgaXMgaW1wb3J0ZWQgbXVsdGlwbGUgdGltZXMgd2l0aCBkaWZmZXJlbnQgbWVkaWEgcXVlcmllcy5cbiAgICAgIC8vIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblxuICAgICAgaWYgKGl0ZW1bMF0gPT0gbnVsbCB8fCAhYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICBpZiAobWVkaWFRdWVyeSAmJiAhaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2UgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgICBpdGVtWzJdID0gJygnICsgaXRlbVsyXSArICcpIGFuZCAoJyArIG1lZGlhUXVlcnkgKyAnKSc7XG4gICAgICAgIH1cblxuICAgICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgICB9XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLyc7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG4gIHJldHVybiAnLyojICcgKyBkYXRhICsgJyAqLyc7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZXNjYXBlKHVybCwgbmVlZFF1b3Rlcykge1xuICBpZiAodHlwZW9mIHVybCAhPT0gJ3N0cmluZycpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9IC8vIElmIHVybCBpcyBhbHJlYWR5IHdyYXBwZWQgaW4gcXVvdGVzLCByZW1vdmUgdGhlbVxuXG5cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfSAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG5cblxuICBpZiAoL1tcIicoKSBcXHRcXG5dLy50ZXN0KHVybCkgfHwgbmVlZFF1b3Rlcykge1xuICAgIHJldHVybiAnXCInICsgdXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJykgKyAnXCInO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxudmFyIHN0eWxlc0luRG9tID0ge307XG5cbnZhclx0bWVtb2l6ZSA9IGZ1bmN0aW9uIChmbikge1xuXHR2YXIgbWVtbztcblxuXHRyZXR1cm4gZnVuY3Rpb24gKCkge1xuXHRcdGlmICh0eXBlb2YgbWVtbyA9PT0gXCJ1bmRlZmluZWRcIikgbWVtbyA9IGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG5cdFx0cmV0dXJuIG1lbW87XG5cdH07XG59O1xuXG52YXIgaXNPbGRJRSA9IG1lbW9pemUoZnVuY3Rpb24gKCkge1xuXHQvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuXHQvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG5cdC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcblx0Ly8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG5cdC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuXHRyZXR1cm4gd2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2I7XG59KTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uICh0YXJnZXQsIHBhcmVudCkge1xuICBpZiAocGFyZW50KXtcbiAgICByZXR1cm4gcGFyZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcbiAgfVxuICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xufTtcblxudmFyIGdldEVsZW1lbnQgPSAoZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vID0ge307XG5cblx0cmV0dXJuIGZ1bmN0aW9uKHRhcmdldCwgcGFyZW50KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQsIHBhcmVudCk7XG5cdFx0XHQvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXHRcdFx0aWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG5cdFx0XHRcdFx0Ly8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuXHRcdFx0XHR9IGNhdGNoKGUpIHtcblx0XHRcdFx0XHRzdHlsZVRhcmdldCA9IG51bGw7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuXHRcdH1cblx0XHRyZXR1cm4gbWVtb1t0YXJnZXRdXG5cdH07XG59KSgpO1xuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhclx0c2luZ2xldG9uQ291bnRlciA9IDA7XG52YXJcdHN0eWxlc0luc2VydGVkQXRUb3AgPSBbXTtcblxudmFyXHRmaXhVcmxzID0gcmVxdWlyZShcIi4vdXJsc1wiKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbihsaXN0LCBvcHRpb25zKSB7XG5cdGlmICh0eXBlb2YgREVCVUcgIT09IFwidW5kZWZpbmVkXCIgJiYgREVCVUcpIHtcblx0XHRpZiAodHlwZW9mIGRvY3VtZW50ICE9PSBcIm9iamVjdFwiKSB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgc3R5bGUtbG9hZGVyIGNhbm5vdCBiZSB1c2VkIGluIGEgbm9uLWJyb3dzZXIgZW52aXJvbm1lbnRcIik7XG5cdH1cblxuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRvcHRpb25zLmF0dHJzID0gdHlwZW9mIG9wdGlvbnMuYXR0cnMgPT09IFwib2JqZWN0XCIgPyBvcHRpb25zLmF0dHJzIDoge307XG5cblx0Ly8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG5cdC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2Vcblx0aWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09IFwiYm9vbGVhblwiKSBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSA8aGVhZD4gZWxlbWVudFxuICAgICAgICBpZiAoIW9wdGlvbnMuaW5zZXJ0SW50bykgb3B0aW9ucy5pbnNlcnRJbnRvID0gXCJoZWFkXCI7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgYm90dG9tIG9mIHRoZSB0YXJnZXRcblx0aWYgKCFvcHRpb25zLmluc2VydEF0KSBvcHRpb25zLmluc2VydEF0ID0gXCJib3R0b21cIjtcblxuXHR2YXIgc3R5bGVzID0gbGlzdFRvU3R5bGVzKGxpc3QsIG9wdGlvbnMpO1xuXG5cdGFkZFN0eWxlc1RvRG9tKHN0eWxlcywgb3B0aW9ucyk7XG5cblx0cmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZSAobmV3TGlzdCkge1xuXHRcdHZhciBtYXlSZW1vdmUgPSBbXTtcblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0XHRkb21TdHlsZS5yZWZzLS07XG5cdFx0XHRtYXlSZW1vdmUucHVzaChkb21TdHlsZSk7XG5cdFx0fVxuXG5cdFx0aWYobmV3TGlzdCkge1xuXHRcdFx0dmFyIG5ld1N0eWxlcyA9IGxpc3RUb1N0eWxlcyhuZXdMaXN0LCBvcHRpb25zKTtcblx0XHRcdGFkZFN0eWxlc1RvRG9tKG5ld1N0eWxlcywgb3B0aW9ucyk7XG5cdFx0fVxuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXlSZW1vdmUubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBkb21TdHlsZSA9IG1heVJlbW92ZVtpXTtcblxuXHRcdFx0aWYoZG9tU3R5bGUucmVmcyA9PT0gMCkge1xuXHRcdFx0XHRmb3IgKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSBkb21TdHlsZS5wYXJ0c1tqXSgpO1xuXG5cdFx0XHRcdGRlbGV0ZSBzdHlsZXNJbkRvbVtkb21TdHlsZS5pZF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufTtcblxuZnVuY3Rpb24gYWRkU3R5bGVzVG9Eb20gKHN0eWxlcywgb3B0aW9ucykge1xuXHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdHZhciBkb21TdHlsZSA9IHN0eWxlc0luRG9tW2l0ZW0uaWRdO1xuXG5cdFx0aWYoZG9tU3R5bGUpIHtcblx0XHRcdGRvbVN0eWxlLnJlZnMrKztcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGRvbVN0eWxlLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzW2pdKGl0ZW0ucGFydHNbal0pO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3IoOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0dmFyIHBhcnRzID0gW107XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdHBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXG5cdFx0XHRzdHlsZXNJbkRvbVtpdGVtLmlkXSA9IHtpZDogaXRlbS5pZCwgcmVmczogMSwgcGFydHM6IHBhcnRzfTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gbGlzdFRvU3R5bGVzIChsaXN0LCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZXMgPSBbXTtcblx0dmFyIG5ld1N0eWxlcyA9IHt9O1xuXG5cdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBpdGVtID0gbGlzdFtpXTtcblx0XHR2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcblx0XHR2YXIgY3NzID0gaXRlbVsxXTtcblx0XHR2YXIgbWVkaWEgPSBpdGVtWzJdO1xuXHRcdHZhciBzb3VyY2VNYXAgPSBpdGVtWzNdO1xuXHRcdHZhciBwYXJ0ID0ge2NzczogY3NzLCBtZWRpYTogbWVkaWEsIHNvdXJjZU1hcDogc291cmNlTWFwfTtcblxuXHRcdGlmKCFuZXdTdHlsZXNbaWRdKSBzdHlsZXMucHVzaChuZXdTdHlsZXNbaWRdID0ge2lkOiBpZCwgcGFydHM6IFtwYXJ0XX0pO1xuXHRcdGVsc2UgbmV3U3R5bGVzW2lkXS5wYXJ0cy5wdXNoKHBhcnQpO1xuXHR9XG5cblx0cmV0dXJuIHN0eWxlcztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50IChvcHRpb25zLCBzdHlsZSkge1xuXHR2YXIgdGFyZ2V0ID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8pXG5cblx0aWYgKCF0YXJnZXQpIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydEludG8nIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcblx0fVxuXG5cdHZhciBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCA9IHN0eWxlc0luc2VydGVkQXRUb3Bbc3R5bGVzSW5zZXJ0ZWRBdFRvcC5sZW5ndGggLSAxXTtcblxuXHRpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJ0b3BcIikge1xuXHRcdGlmICghbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3ApIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIHRhcmdldC5maXJzdENoaWxkKTtcblx0XHR9IGVsc2UgaWYgKGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZyk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdFx0fVxuXHRcdHN0eWxlc0luc2VydGVkQXRUb3AucHVzaChzdHlsZSk7XG5cdH0gZWxzZSBpZiAob3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJib3R0b21cIikge1xuXHRcdHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG5cdH0gZWxzZSBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwib2JqZWN0XCIgJiYgb3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUpIHtcblx0XHR2YXIgbmV4dFNpYmxpbmcgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlLCB0YXJnZXQpO1xuXHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIG5leHRTaWJsaW5nKTtcblx0fSBlbHNlIHtcblx0XHR0aHJvdyBuZXcgRXJyb3IoXCJbU3R5bGUgTG9hZGVyXVxcblxcbiBJbnZhbGlkIHZhbHVlIGZvciBwYXJhbWV0ZXIgJ2luc2VydEF0JyAoJ29wdGlvbnMuaW5zZXJ0QXQnKSBmb3VuZC5cXG4gTXVzdCBiZSAndG9wJywgJ2JvdHRvbScsIG9yIE9iamVjdC5cXG4gKGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyI2luc2VydGF0KVxcblwiKTtcblx0fVxufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQgKHN0eWxlKSB7XG5cdGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSByZXR1cm4gZmFsc2U7XG5cdHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xuXG5cdHZhciBpZHggPSBzdHlsZXNJbnNlcnRlZEF0VG9wLmluZGV4T2Yoc3R5bGUpO1xuXHRpZihpZHggPj0gMCkge1xuXHRcdHN0eWxlc0luc2VydGVkQXRUb3Auc3BsaWNlKGlkeCwgMSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlU3R5bGVFbGVtZW50IChvcHRpb25zKSB7XG5cdHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXG5cdGlmKG9wdGlvbnMuYXR0cnMubm9uY2UgPT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBub25jZSA9IGdldE5vbmNlKCk7XG5cdFx0aWYgKG5vbmNlKSB7XG5cdFx0XHRvcHRpb25zLmF0dHJzLm5vbmNlID0gbm9uY2U7XG5cdFx0fVxuXHR9XG5cblx0YWRkQXR0cnMoc3R5bGUsIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgc3R5bGUpO1xuXG5cdHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTGlua0VsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRpZihvcHRpb25zLmF0dHJzLnR5cGUgPT09IHVuZGVmaW5lZCkge1xuXHRcdG9wdGlvbnMuYXR0cnMudHlwZSA9IFwidGV4dC9jc3NcIjtcblx0fVxuXHRvcHRpb25zLmF0dHJzLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXG5cdGFkZEF0dHJzKGxpbmssIG9wdGlvbnMuYXR0cnMpO1xuXHRpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucywgbGluayk7XG5cblx0cmV0dXJuIGxpbms7XG59XG5cbmZ1bmN0aW9uIGFkZEF0dHJzIChlbCwgYXR0cnMpIHtcblx0T2JqZWN0LmtleXMoYXR0cnMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdGVsLnNldEF0dHJpYnV0ZShrZXksIGF0dHJzW2tleV0pO1xuXHR9KTtcbn1cblxuZnVuY3Rpb24gZ2V0Tm9uY2UoKSB7XG5cdGlmICh0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gPT09ICd1bmRlZmluZWQnKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblxuXHRyZXR1cm4gX193ZWJwYWNrX25vbmNlX187XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlIChvYmosIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlLCB1cGRhdGUsIHJlbW92ZSwgcmVzdWx0O1xuXG5cdC8vIElmIGEgdHJhbnNmb3JtIGZ1bmN0aW9uIHdhcyBkZWZpbmVkLCBydW4gaXQgb24gdGhlIGNzc1xuXHRpZiAob3B0aW9ucy50cmFuc2Zvcm0gJiYgb2JqLmNzcykge1xuXHQgICAgcmVzdWx0ID0gdHlwZW9mIG9wdGlvbnMudHJhbnNmb3JtID09PSAnZnVuY3Rpb24nXG5cdFx0ID8gb3B0aW9ucy50cmFuc2Zvcm0ob2JqLmNzcykgXG5cdFx0IDogb3B0aW9ucy50cmFuc2Zvcm0uZGVmYXVsdChvYmouY3NzKTtcblxuXHQgICAgaWYgKHJlc3VsdCkge1xuXHQgICAgXHQvLyBJZiB0cmFuc2Zvcm0gcmV0dXJucyBhIHZhbHVlLCB1c2UgdGhhdCBpbnN0ZWFkIG9mIHRoZSBvcmlnaW5hbCBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIHJ1bm5pbmcgcnVudGltZSB0cmFuc2Zvcm1hdGlvbnMgb24gdGhlIGNzcy5cblx0ICAgIFx0b2JqLmNzcyA9IHJlc3VsdDtcblx0ICAgIH0gZWxzZSB7XG5cdCAgICBcdC8vIElmIHRoZSB0cmFuc2Zvcm0gZnVuY3Rpb24gcmV0dXJucyBhIGZhbHN5IHZhbHVlLCBkb24ndCBhZGQgdGhpcyBjc3MuXG5cdCAgICBcdC8vIFRoaXMgYWxsb3dzIGNvbmRpdGlvbmFsIGxvYWRpbmcgb2YgY3NzXG5cdCAgICBcdHJldHVybiBmdW5jdGlvbigpIHtcblx0ICAgIFx0XHQvLyBub29wXG5cdCAgICBcdH07XG5cdCAgICB9XG5cdH1cblxuXHRpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcblx0XHR2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcblxuXHRcdHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuXG5cdFx0dXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG5cdFx0cmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcblxuXHR9IGVsc2UgaWYgKFxuXHRcdG9iai5zb3VyY2VNYXAgJiZcblx0XHR0eXBlb2YgVVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLmNyZWF0ZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIFVSTC5yZXZva2VPYmplY3RVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBCbG9iID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiXG5cdCkge1xuXHRcdHN0eWxlID0gY3JlYXRlTGlua0VsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gdXBkYXRlTGluay5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXG5cdFx0XHRpZihzdHlsZS5ocmVmKSBVUkwucmV2b2tlT2JqZWN0VVJMKHN0eWxlLmhyZWYpO1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG5cdFx0dXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlKTtcblx0XHRyZW1vdmUgPSBmdW5jdGlvbiAoKSB7XG5cdFx0XHRyZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuXHRcdH07XG5cdH1cblxuXHR1cGRhdGUob2JqKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUgKG5ld09iaikge1xuXHRcdGlmIChuZXdPYmopIHtcblx0XHRcdGlmIChcblx0XHRcdFx0bmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJlxuXHRcdFx0XHRuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJlxuXHRcdFx0XHRuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwXG5cdFx0XHQpIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHR1cGRhdGUob2JqID0gbmV3T2JqKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0cmVtb3ZlKCk7XG5cdFx0fVxuXHR9O1xufVxuXG52YXIgcmVwbGFjZVRleHQgPSAoZnVuY3Rpb24gKCkge1xuXHR2YXIgdGV4dFN0b3JlID0gW107XG5cblx0cmV0dXJuIGZ1bmN0aW9uIChpbmRleCwgcmVwbGFjZW1lbnQpIHtcblx0XHR0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG5cblx0XHRyZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcblx0fTtcbn0pKCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcgKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcblx0dmFyIGNzcyA9IHJlbW92ZSA/IFwiXCIgOiBvYmouY3NzO1xuXG5cdGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG5cdH0gZWxzZSB7XG5cdFx0dmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuXHRcdHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuXHRcdGlmIChjaGlsZE5vZGVzW2luZGV4XSkgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG5cdFx0XHRzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcblx0XHR9XG5cdH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyAoc3R5bGUsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuXG5cdGlmKG1lZGlhKSB7XG5cdFx0c3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpXG5cdH1cblxuXHRpZihzdHlsZS5zdHlsZVNoZWV0KSB7XG5cdFx0c3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuXHR9IGVsc2Uge1xuXHRcdHdoaWxlKHN0eWxlLmZpcnN0Q2hpbGQpIHtcblx0XHRcdHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuXHRcdH1cblxuXHRcdHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUxpbmsgKGxpbmssIG9wdGlvbnMsIG9iaikge1xuXHR2YXIgY3NzID0gb2JqLmNzcztcblx0dmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cblx0Lypcblx0XHRJZiBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgaXNuJ3QgZGVmaW5lZCwgYnV0IHNvdXJjZW1hcHMgYXJlIGVuYWJsZWRcblx0XHRhbmQgdGhlcmUgaXMgbm8gcHVibGljUGF0aCBkZWZpbmVkIHRoZW4gbGV0cyB0dXJuIGNvbnZlcnRUb0Fic29sdXRlVXJsc1xuXHRcdG9uIGJ5IGRlZmF1bHQuICBPdGhlcndpc2UgZGVmYXVsdCB0byB0aGUgY29udmVydFRvQWJzb2x1dGVVcmxzIG9wdGlvblxuXHRcdGRpcmVjdGx5XG5cdCovXG5cdHZhciBhdXRvRml4VXJscyA9IG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzID09PSB1bmRlZmluZWQgJiYgc291cmNlTWFwO1xuXG5cdGlmIChvcHRpb25zLmNvbnZlcnRUb0Fic29sdXRlVXJscyB8fCBhdXRvRml4VXJscykge1xuXHRcdGNzcyA9IGZpeFVybHMoY3NzKTtcblx0fVxuXG5cdGlmIChzb3VyY2VNYXApIHtcblx0XHQvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vYS8yNjYwMzg3NVxuXHRcdGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIgKyBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpICsgXCIgKi9cIjtcblx0fVxuXG5cdHZhciBibG9iID0gbmV3IEJsb2IoW2Nzc10sIHsgdHlwZTogXCJ0ZXh0L2Nzc1wiIH0pO1xuXG5cdHZhciBvbGRTcmMgPSBsaW5rLmhyZWY7XG5cblx0bGluay5ocmVmID0gVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcblxuXHRpZihvbGRTcmMpIFVSTC5yZXZva2VPYmplY3RVUkwob2xkU3JjKTtcbn1cbiIsIlxuLyoqXG4gKiBXaGVuIHNvdXJjZSBtYXBzIGFyZSBlbmFibGVkLCBgc3R5bGUtbG9hZGVyYCB1c2VzIGEgbGluayBlbGVtZW50IHdpdGggYSBkYXRhLXVyaSB0b1xuICogZW1iZWQgdGhlIGNzcyBvbiB0aGUgcGFnZS4gVGhpcyBicmVha3MgYWxsIHJlbGF0aXZlIHVybHMgYmVjYXVzZSBub3cgdGhleSBhcmUgcmVsYXRpdmUgdG8gYVxuICogYnVuZGxlIGluc3RlYWQgb2YgdGhlIGN1cnJlbnQgcGFnZS5cbiAqXG4gKiBPbmUgc29sdXRpb24gaXMgdG8gb25seSB1c2UgZnVsbCB1cmxzLCBidXQgdGhhdCBtYXkgYmUgaW1wb3NzaWJsZS5cbiAqXG4gKiBJbnN0ZWFkLCB0aGlzIGZ1bmN0aW9uIFwiZml4ZXNcIiB0aGUgcmVsYXRpdmUgdXJscyB0byBiZSBhYnNvbHV0ZSBhY2NvcmRpbmcgdG8gdGhlIGN1cnJlbnQgcGFnZSBsb2NhdGlvbi5cbiAqXG4gKiBBIHJ1ZGltZW50YXJ5IHRlc3Qgc3VpdGUgaXMgbG9jYXRlZCBhdCBgdGVzdC9maXhVcmxzLmpzYCBhbmQgY2FuIGJlIHJ1biB2aWEgdGhlIGBucG0gdGVzdGAgY29tbWFuZC5cbiAqXG4gKi9cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzKSB7XG4gIC8vIGdldCBjdXJyZW50IGxvY2F0aW9uXG4gIHZhciBsb2NhdGlvbiA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgJiYgd2luZG93LmxvY2F0aW9uO1xuXG4gIGlmICghbG9jYXRpb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJmaXhVcmxzIHJlcXVpcmVzIHdpbmRvdy5sb2NhdGlvblwiKTtcbiAgfVxuXG5cdC8vIGJsYW5rIG9yIG51bGw/XG5cdGlmICghY3NzIHx8IHR5cGVvZiBjc3MgIT09IFwic3RyaW5nXCIpIHtcblx0ICByZXR1cm4gY3NzO1xuICB9XG5cbiAgdmFyIGJhc2VVcmwgPSBsb2NhdGlvbi5wcm90b2NvbCArIFwiLy9cIiArIGxvY2F0aW9uLmhvc3Q7XG4gIHZhciBjdXJyZW50RGlyID0gYmFzZVVybCArIGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL1xcL1teXFwvXSokLywgXCIvXCIpO1xuXG5cdC8vIGNvbnZlcnQgZWFjaCB1cmwoLi4uKVxuXHQvKlxuXHRUaGlzIHJlZ3VsYXIgZXhwcmVzc2lvbiBpcyBqdXN0IGEgd2F5IHRvIHJlY3Vyc2l2ZWx5IG1hdGNoIGJyYWNrZXRzIHdpdGhpblxuXHRhIHN0cmluZy5cblxuXHQgL3VybFxccypcXCggID0gTWF0Y2ggb24gdGhlIHdvcmQgXCJ1cmxcIiB3aXRoIGFueSB3aGl0ZXNwYWNlIGFmdGVyIGl0IGFuZCB0aGVuIGEgcGFyZW5zXG5cdCAgICggID0gU3RhcnQgYSBjYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAoPzogID0gU3RhcnQgYSBub24tY2FwdHVyaW5nIGdyb3VwXG5cdCAgICAgICAgIFteKShdICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgIFxcKCAgPSBNYXRjaCBhIHN0YXJ0IHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAoPzogID0gU3RhcnQgYW5vdGhlciBub24tY2FwdHVyaW5nIGdyb3Vwc1xuXHQgICAgICAgICAgICAgICAgIFteKShdKyAgPSBNYXRjaCBhbnl0aGluZyB0aGF0IGlzbid0IGEgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICB8ICA9IE9SXG5cdCAgICAgICAgICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICAgICAgICAgW14pKF0qICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIFxcKSAgPSBNYXRjaCBhIGVuZCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgKSAgPSBFbmQgR3JvdXBcbiAgICAgICAgICAgICAgKlxcKSA9IE1hdGNoIGFueXRoaW5nIGFuZCB0aGVuIGEgY2xvc2UgcGFyZW5zXG4gICAgICAgICAgKSAgPSBDbG9zZSBub24tY2FwdHVyaW5nIGdyb3VwXG4gICAgICAgICAgKiAgPSBNYXRjaCBhbnl0aGluZ1xuICAgICAgICkgID0gQ2xvc2UgY2FwdHVyaW5nIGdyb3VwXG5cdCBcXCkgID0gTWF0Y2ggYSBjbG9zZSBwYXJlbnNcblxuXHQgL2dpICA9IEdldCBhbGwgbWF0Y2hlcywgbm90IHRoZSBmaXJzdC4gIEJlIGNhc2UgaW5zZW5zaXRpdmUuXG5cdCAqL1xuXHR2YXIgZml4ZWRDc3MgPSBjc3MucmVwbGFjZSgvdXJsXFxzKlxcKCgoPzpbXikoXXxcXCgoPzpbXikoXSt8XFwoW14pKF0qXFwpKSpcXCkpKilcXCkvZ2ksIGZ1bmN0aW9uKGZ1bGxNYXRjaCwgb3JpZ1VybCkge1xuXHRcdC8vIHN0cmlwIHF1b3RlcyAoaWYgdGhleSBleGlzdClcblx0XHR2YXIgdW5xdW90ZWRPcmlnVXJsID0gb3JpZ1VybFxuXHRcdFx0LnRyaW0oKVxuXHRcdFx0LnJlcGxhY2UoL15cIiguKilcIiQvLCBmdW5jdGlvbihvLCAkMSl7IHJldHVybiAkMTsgfSlcblx0XHRcdC5yZXBsYWNlKC9eJyguKiknJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KTtcblxuXHRcdC8vIGFscmVhZHkgYSBmdWxsIHVybD8gbm8gY2hhbmdlXG5cdFx0aWYgKC9eKCN8ZGF0YTp8aHR0cDpcXC9cXC98aHR0cHM6XFwvXFwvfGZpbGU6XFwvXFwvXFwvfFxccyokKS9pLnRlc3QodW5xdW90ZWRPcmlnVXJsKSkge1xuXHRcdCAgcmV0dXJuIGZ1bGxNYXRjaDtcblx0XHR9XG5cblx0XHQvLyBjb252ZXJ0IHRoZSB1cmwgdG8gYSBmdWxsIHVybFxuXHRcdHZhciBuZXdVcmw7XG5cblx0XHRpZiAodW5xdW90ZWRPcmlnVXJsLmluZGV4T2YoXCIvL1wiKSA9PT0gMCkge1xuXHRcdCAgXHQvL1RPRE86IHNob3VsZCB3ZSBhZGQgcHJvdG9jb2w/XG5cdFx0XHRuZXdVcmwgPSB1bnF1b3RlZE9yaWdVcmw7XG5cdFx0fSBlbHNlIGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi9cIikgPT09IDApIHtcblx0XHRcdC8vIHBhdGggc2hvdWxkIGJlIHJlbGF0aXZlIHRvIHRoZSBiYXNlIHVybFxuXHRcdFx0bmV3VXJsID0gYmFzZVVybCArIHVucXVvdGVkT3JpZ1VybDsgLy8gYWxyZWFkeSBzdGFydHMgd2l0aCAnLydcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gY3VycmVudCBkaXJlY3Rvcnlcblx0XHRcdG5ld1VybCA9IGN1cnJlbnREaXIgKyB1bnF1b3RlZE9yaWdVcmwucmVwbGFjZSgvXlxcLlxcLy8sIFwiXCIpOyAvLyBTdHJpcCBsZWFkaW5nICcuLydcblx0XHR9XG5cblx0XHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIHVybCguLi4pXG5cdFx0cmV0dXJuIFwidXJsKFwiICsgSlNPTi5zdHJpbmdpZnkobmV3VXJsKSArIFwiKVwiO1xuXHR9KTtcblxuXHQvLyBzZW5kIGJhY2sgdGhlIGZpeGVkIGNzc1xuXHRyZXR1cm4gZml4ZWRDc3M7XG59O1xuIiwiaW1wb3J0IFVzZXIgZnJvbSAnLi9Vc2VyJztcbmltcG9ydCB7IGFwaVJlcXVlc3QgfSBmcm9tICcuL2FwaVJlcXVlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYW5hZ2VyIGV4dGVuZHMgVXNlciB7XG4gIGNvbnN0cnVjdG9yKHVzZXJEYXRhKSB7XG4gICAgc3VwZXIodXNlckRhdGEpXG4gICAgdGhpcy5pZCA9IDA7XG4gICAgdGhpcy5uYW1lID0gJ01BTkFHRVInXG4gIH1cblxuICB0b3RhbEF2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSkge1xuICAgIHJldHVybiB0aGlzLnZpZXdBdmFpbGFibGVSb29tcyhib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpLmxlbmd0aFxuICB9XG5cbiAgdG90YWxSZXZlbnVlKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSkge1xuICAgIHJldHVybiBOdW1iZXIodGhpcy52aWV3VW5hdmFpbGFibGVSb29tcyhib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpXG4gICAgICAucmVkdWNlKCh0b3RhbFJldmVudWUsIHJvb20pID0+IHtcbiAgICAgICAgdG90YWxSZXZlbnVlICs9IHJvb20uY29zdFBlck5pZ2h0O1xuICAgICAgICByZXR1cm4gdG90YWxSZXZlbnVlXG4gICAgICB9LCAwKS50b0ZpeGVkKDIpKVxuICB9XG5cbiAgdG90YWxQZXJjZW50T2NjdXBpZWQoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKSB7XG4gICAgcmV0dXJuICh0aGlzLnZpZXdVbmF2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSkubGVuZ3RoIC9cbiAgICByb29tRGF0YS5sZW5ndGgpLnRvRml4ZWQoMilcbiAgfVxuXG4gIHZpZXdDdXN0b21lcih1c2VyRGF0YSwgbmFtZU9ySWQpIHtcbiAgICBpZiAodHlwZW9mIG5hbWVPcklkID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyKHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLm5hbWUgPT09IG5hbWVPcklkKSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG5ldyBVc2VyKHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLmlkID09PSBuYW1lT3JJZCkpXG4gICAgfVxuICB9XG5cbiAgdmlld0N1c3RvbWVyQm9va2luZ3MoYm9va2luZ0RhdGEsIHVzZXJEYXRhLCBuYW1lKSB7XG4gICAgbGV0IGN1c3RvbWVyID0gdGhpcy52aWV3Q3VzdG9tZXIodXNlckRhdGEsIG5hbWUpO1xuICAgIHJldHVybiBjdXN0b21lci52aWV3TXlCb29raW5ncyhib29raW5nRGF0YSk7XG4gIH1cblxuICB2aWV3Q3VzdG9tZXJJbmZvKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgdXNlckRhdGEsIG5hbWUpIHtcbiAgICBsZXQgY3VzdG9tZXIgPSB0aGlzLnZpZXdDdXN0b21lcih1c2VyRGF0YSwgbmFtZSk7XG4gICAgbGV0IGJvb2tpbmdzID0gY3VzdG9tZXIudmlld015Qm9va2luZ3MoYm9va2luZ0RhdGEpO1xuICAgIGxldCB0b3RhbCA9IGN1c3RvbWVyLnZpZXdNeVRvdGFsKGJvb2tpbmdEYXRhLCByb29tRGF0YSk7XG4gICAgcmV0dXJuIHtpZDogY3VzdG9tZXIuaWQsIG5hbWU6IGN1c3RvbWVyLm5hbWUsIGJvb2tpbmdIaXN0b3J5OiBib29raW5ncywgdG90YWxTcGVudDogdG90YWx9XG4gIH1cblxuICBhZGRDdXN0b21lckJvb2tpbmcodXNlckRhdGEsIG5hbWUsIGRhdGUsIHJvb21OdW1iZXIsIG9uU3VjY2VzcykgeyAvL1RERCBzZWUgaWYgQVBJIGNhbGwgaXMgbWFkZVxuICAgIGxldCBjdXN0b21lciA9IHRoaXMudmlld0N1c3RvbWVyKHVzZXJEYXRhLCBuYW1lKTtcbiAgICByZXR1cm4gY3VzdG9tZXIuYm9va015Um9vbShkYXRlLCByb29tTnVtYmVyLCBvblN1Y2Nlc3MpO1xuICB9XG5cbiAgZGVsZXRlQ3VzdG9tZXJCb29raW5nKGJvb2tpbmdEYXRhLCBib29raW5nSUQsIG9uU3VjY2Vzcykge1xuICAgIGxldCBib29raW5nID1cbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBOdW1iZXIoYm9va2luZ0lEKVxuICAgICAgfVxuICAgIGFwaVJlcXVlc3QuZGVsZXRlQm9va2luZyhib29raW5nLCBvblN1Y2Nlc3MpO1xuICB9XG5cbiAgZ2V0RGF0ZSgpIHtcbiAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgaWYgKGRhdGUudG9TdHJpbmcoKS5sZW5ndGggPCAyKSB7XG4gICAgICBkYXRlID0gJzAnICsgZGF0ZVxuICAgIH1cbiAgICBpZiAobW9udGgudG9TdHJpbmcoKS5sZW5ndGggPCAyKSB7XG4gICAgICBtb250aCA9ICcwJyArIG1vbnRoXG4gICAgfVxuICAgIHJldHVybiBgJHtuZXdEYXRlLmdldEZ1bGxZZWFyKCl9LyR7bW9udGh9LyR7ZGF0ZX1gXG4gIH1cbn1cbiIsImltcG9ydCB7IGFwaVJlcXVlc3QgfSBmcm9tICcuL2FwaVJlcXVlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEgPSB7fSkge1xuICAgIHRoaXMuaWQgPSB1c2VyRGF0YS5pZCB8fCA3Nzc7XG4gICAgdGhpcy5uYW1lID0gdXNlckRhdGEubmFtZSB8fCAnR1VFU1QnO1xuICB9XG5cbiAgYm9va015Um9vbShkYXRlLCByb29tTnVtYmVyLCBvblN1Y2Nlc3MpIHtcbiAgICBsZXQgYm9va2luZyA9XG4gICAge1xuICAgICAgXCJ1c2VySURcIjogdGhpcy5pZCxcbiAgICAgIFwiZGF0ZVwiOiBkYXRlLFxuICAgICAgXCJyb29tTnVtYmVyXCI6IHJvb21OdW1iZXJcbiAgICB9XG4gICAgYXBpUmVxdWVzdC5jcmVhdGVCb29raW5nKGJvb2tpbmcsIG9uU3VjY2VzcylcbiAgfVxuXG4gIHZpZXdNeUJvb2tpbmdzKGJvb2tpbmdEYXRhKSB7XG4gICAgbGV0IG15Qm9va2luZ3MgPSBib29raW5nRGF0YS5maWx0ZXIoYm9va2luZyA9PiB7XG4gICAgICByZXR1cm4gYm9va2luZy51c2VySUQgPT09IHRoaXMuaWRcbiAgICB9KTtcbiAgICByZXR1cm4gbXlCb29raW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5kYXRlIDwgYi5kYXRlID8gLTEgOiAxO1xuICAgIH0pXG4gIH1cblxuICB2aWV3TXlUb3RhbChib29raW5nRGF0YSwgcm9vbURhdGEpIHtcbiAgICBsZXQgZ3JhbmRUb3RhbCA9IHRoaXMudmlld015Qm9va2luZ3MoYm9va2luZ0RhdGEpLnJlZHVjZSgobXlHcmFuZFRvdGFsLCBteUJvb2tpbmcpID0+IHtcbiAgICAgIGxldCBtYXRjaGVkUm9vbSA9IHJvb21EYXRhLmZpbmQocm9vbSA9PiByb29tLm51bWJlciA9PT0gbXlCb29raW5nLnJvb21OdW1iZXIpXG4gICAgICBteUdyYW5kVG90YWwgKz0gbWF0Y2hlZFJvb20uY29zdFBlck5pZ2h0XG4gICAgICByZXR1cm4gbXlHcmFuZFRvdGFsO1xuICAgIH0sIDApLnRvRml4ZWQoMik7XG4gICAgcmV0dXJuIE51bWJlcihncmFuZFRvdGFsKVxuICB9XG5cbiAgdmlld1VuYXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKSB7XG4gICAgcmV0dXJuIGJvb2tpbmdEYXRhLnJlZHVjZSgoYm9va2VkUm9vbXMsIGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nLmRhdGUgPT09IGRhdGUpIHtcbiAgICAgICAgYm9va2VkUm9vbXMucHVzaChyb29tRGF0YS5maW5kKHJvb20gPT4gcm9vbS5udW1iZXIgPT09IGJvb2tpbmcucm9vbU51bWJlcikpXG4gICAgICB9XG4gICAgICByZXR1cm4gYm9va2VkUm9vbXNcbiAgICB9LCBbXSk7XG4gIH1cblxuICB2aWV3QXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKSB7XG4gICAgbGV0IHVuYXZhaWxhYmxlUm9vbXMgPSB0aGlzLnZpZXdVbmF2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSk7XG4gICAgcmV0dXJuIHJvb21EYXRhLmZpbHRlcihyb29tID0+ICF1bmF2YWlsYWJsZVJvb21zLmluY2x1ZGVzKHJvb20pKTsgLy8gbm90IGVtcGF0aGV0aWMgY29uc2lkZXIgcmV3cml0aW5nXG4gIH1cblxuICB2aWV3QXZhaWxhYmxlUm9vbXNCeVR5cGUoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlLCByb29tVHlwZSkge1xuICAgIGxldCBhdmFpbGFibGVSb29tcyA9IHRoaXMudmlld0F2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSk7XG4gICAgaWYgKCFyb29tVHlwZSkge1xuICAgICAgcmV0dXJuIGF2YWlsYWJsZVJvb21zO1xuICAgIH1cbiAgICByZXR1cm4gYXZhaWxhYmxlUm9vbXMuZmlsdGVyKHJvb20gPT4gcm9vbS5yb29tVHlwZSA9PT0gcm9vbVR5cGUpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgYXBpUmVxdWVzdCA9IHtcbiAgZ2V0VXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC91c2Vycy91c2VycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IsIFwiRW5jb3VudGVyZWQgYW4gZXJyb3JcIikpO1xuICB9LFxuXG4gIGdldFJvb21EYXRhKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvcm9vbXMvcm9vbXMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLCBcIkVuY291bnRlcmVkIGFuIGVycm9yXCIpKTtcbiAgfSxcblxuICBnZXRCb29raW5nRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciwgXCJFbmNvdW50ZXJlZCBhbiBlcnJvclwiKSk7XG4gIH0sXG5cbiAgY3JlYXRlQm9va2luZyhib29raW5nLCBvblN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9va2luZyksXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBvblN1Y2Nlc3MoKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkJvb2tpbmcgc3VjY2Vzc2Z1bGx5IENSRUFURURcIilcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IsIFwiRW5jb3VudGVyZWQgYW4gZXJyb3JcIikpXG4gIH0sXG5cbiAgZGVsZXRlQm9va2luZyhib29raW5nLCBvblN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib29raW5nKSxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIG9uU3VjY2VzcygpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm9va2luZyBzdWNjZXNzZnVsbHkgREVMRVRFRFwiKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciwgXCJFbmNvdW50ZXJlZCBhbiBlcnJvclwiKSlcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBkb21PYmplY3QgPSB7XG4gIHNob3dMb2dpbigpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnTGF5ZXJfMScgfHwgZXZlbnQudGFyZ2V0ID09PSAnc3ZnJyB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWNhcmRfdGV4dC1saW5rJykpIHtcbiAgICAgIHVzZXJuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHBhc3N3b3JkSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGxvZ2luQm94LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPyBsb2dpbkJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSA6IGxvZ2luQm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgfSxcblxuICBzaG93VG9vbGJhcihib29sZWFuKSB7XG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5zaG93RWxlbWVudChtYW5hZ2VyVXNlclNlYXJjaCkgOiBkb21PYmplY3QuaGlkZUVsZW1lbnQobWFuYWdlclVzZXJTZWFyY2gpO1xuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3Quc2hvd0VsZW1lbnQoYm9va2luZ1Rvb2xiYXIpIDogZG9tT2JqZWN0LmhpZGVFbGVtZW50KGJvb2tpbmdUb29sYmFyKTtcbiAgfSxcblxuICBzaG93VG9vbGJhckN1c3RvbWVySGlzdG9yeSgpIHtcbiAgICBkb21PYmplY3Quc2hvd1Rvb2xiYXIodHJ1ZSk7XG4gICAgZG9tT2JqZWN0LmhpZGVFbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b29sYmFyX3N1Ym1pdF9idXR0b25fd3JhcHBlcicpKVxuICAgIGRvbU9iamVjdC5oaWRlRWxlbWVudChyb29tVHlwZURyb3Bkb3duKVxuICAgIGRvbU9iamVjdC5oaWRlRWxlbWVudChjYWxlbmRhcilcbiAgfSxcblxuICBzaG93RGFzaGJvYXJkSGVhZGVyKGJvb2xlYW4pIHtcbiAgICBib29sZWFuID09PSB0cnVlID8gZG9tT2JqZWN0LnNob3dFbGVtZW50KGRhc2hib2FyZEhlYWRlcikgOiBkb21PYmplY3QuaGlkZUVsZW1lbnQoZGFzaGJvYXJkSGVhZGVyKTtcbiAgfSxcblxuICBzaG93SG9tZVBhZ2VNYW5hZ2VyKCkge1xuICAgIGRvbU9iamVjdC5oaWRlSG9tZVZpZXcoZmFsc2UpO1xuICAgIGRvbU9iamVjdC5oaWRlTWFuYWdlclZpZXcodHJ1ZSk7XG4gICAgZG9tT2JqZWN0LmhpZGVDdXN0b21lclZpZXcodHJ1ZSk7XG4gIH0sXG5cbiAgc2hvd0N1c3RvbWVyRGFzaGJvYXJkKGJvb2xlYW4pIHtcbiAgICBib29sZWFuID09PSB0cnVlID8gZG9tT2JqZWN0LmhpZGVIb21lVmlldyh0cnVlKSA6IGRvbU9iamVjdC5oaWRlSG9tZVZpZXcoZmFsc2UpO1xuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUN1c3RvbWVyVmlldyhmYWxzZSkgOiBkb21PYmplY3QuaGlkZUN1c3RvbWVyVmlldyh0cnVlKTtcbiAgfSxcblxuICBoaWRlSG9tZVZpZXcoYm9vbGVhbikge1xuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUVsZW1lbnQoaG9tZU5hdkxpbmtzKSA6IGRvbU9iamVjdC5zaG93RWxlbWVudChob21lTmF2TGlua3MpO1xuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUVsZW1lbnQobWFpbkNvbnRlbnRDb250YWluZXIpIDogZG9tT2JqZWN0LnNob3dFbGVtZW50KG1haW5Db250ZW50Q29udGFpbmVyKTtcbiAgICBkb21PYmplY3QuaGlkZUN1c3RvbWVyVmlldyh0cnVlKTtcbiAgICBkb21PYmplY3Quc2hvd0Rhc2hib2FyZEhlYWRlcihmYWxzZSk7XG4gIH0sXG5cbiAgaGlkZUN1c3RvbWVyVmlldyhib29sZWFuKSB7XG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5oaWRlRWxlbWVudChjdXN0b21lck5hdkxpbmtzKSA6IGRvbU9iamVjdC5zaG93RWxlbWVudChjdXN0b21lck5hdkxpbmtzKVxuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUVsZW1lbnQoZGFzaGJvYXJkQ3VzdG9tZXIpIDogZG9tT2JqZWN0LnNob3dFbGVtZW50KGRhc2hib2FyZEN1c3RvbWVyKVxuICB9LFxuXG4gIGhpZGVNYW5hZ2VyVmlldyhib29sZWFuKSB7XG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5oaWRlRWxlbWVudChtYW5hZ2VyTmF2TGlua3MpIDogZG9tT2JqZWN0LnNob3dFbGVtZW50KG1hbmFnZXJOYXZMaW5rcyk7XG4gICAgIWJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUVsZW1lbnQoY3VzdG9tZXJOYXZMaW5rcykgOiBkb21PYmplY3Quc2hvd0VsZW1lbnQoY3VzdG9tZXJOYXZMaW5rcylcbiAgICBib29sZWFuID09PSB0cnVlID8gZG9tT2JqZWN0LmhpZGVFbGVtZW50KG1hbmFnZXJEYXNoYm9hcmQpIDogZG9tT2JqZWN0LnNob3dFbGVtZW50KG1hbmFnZXJEYXNoYm9hcmQpXG4gIH0sXG5cbiAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfSxcblxuICBoaWRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcHJvZmlsZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTGF5ZXJfMScpO1xuZXhwb3J0IGNvbnN0IGxvZ2luQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luJyk7XG5leHBvcnQgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWxvZ2luJylcbmV4cG9ydCBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJylcbmV4cG9ydCBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJylcbmV4cG9ydCBjb25zdCBuYXZCb29raW5nICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtYm9va2luZycpXG5leHBvcnQgY29uc3QgbmF2Um9vbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LXJvb21zJylcbmV4cG9ydCBjb25zdCBuYXZDb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1jb250YWN0JylcbmV4cG9ydCBjb25zdCBuYXZNYW5hZ2VySG90ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LW1hbmFnZXItaG90ZWwnKVxuZXhwb3J0IGNvbnN0IG5hdk1hbmFnZXJCb29raW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1tYW5hZ2VyLWJvb2tpbmcnKVxuZXhwb3J0IGNvbnN0IG5hdk1hbmFnZXJIaXN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1tYW5hZ2VyLWhpc3RvcnknKVxuZXhwb3J0IGNvbnN0IG5hdkN1c3RvbWVyRmluZFJvb21zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1jdXN0b21lci1maW5kLXJvb21zJylcbmV4cG9ydCBjb25zdCBuYXZDdXN0b21lckFjY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWN1c3RvbWVyLWFjY291bnQnKVxuZXhwb3J0IGNvbnN0IG5hdkN1c3RvbWVySG90ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWN1c3RvbWVyLWhvdGVsJylcbmV4cG9ydCBjb25zdCBob21lTmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1uYXYtbGlua3MnKVxuZXhwb3J0IGNvbnN0IG1hbmFnZXJOYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYW5hZ2VyLW5hdi1saW5rcycpXG5leHBvcnQgY29uc3QgY3VzdG9tZXJOYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b21lci1uYXYtbGlua3MnKVxuZXhwb3J0IGNvbnN0IG1haW5Sb29tVHlwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbl9yb29tLXR5cGVzJylcbmV4cG9ydCBjb25zdCBtYWluSW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbl9pbnRybycpXG5leHBvcnQgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXInKVxuZXhwb3J0IGNvbnN0IGNhbGVuZGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXItaW5wdXQnKVxuZXhwb3J0IGNvbnN0IG1hbmFnZXJVc2VyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXItbG9va3VwLWJhcicpXG5leHBvcnQgY29uc3QgYm9va2luZ1Rvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va2luZy10b29sYmFyJylcbmV4cG9ydCBjb25zdCBsb2dvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nb3V0LWJ1dHRvbicpXG5leHBvcnQgY29uc3QgZGFzaGJvYXJkQ3VzdG9tZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFzaGJvYXJkLWN1c3RvbWVyJylcbmV4cG9ydCBjb25zdCBtYW5hZ2VyRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rhc2hib2FyZC1tYW5hZ2VyJylcbmV4cG9ydCBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRlbnQtY29udGFpbmVyJylcbmV4cG9ydCBjb25zdCBtYW5hZ2VyVXNlclNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXItc2VhcmNoLXVzZXItaW5wdXQnKVxuZXhwb3J0IGNvbnN0IGRhc2hib2FyZEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXNoYm9hcmRfaGVhZGVyJylcbmV4cG9ydCBjb25zdCB0b29sYmFyU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rvb2xiYXJfc3VibWl0X2J1dHRvbicpXG5leHBvcnQgY29uc3Qgcm9vbVR5cGVEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb29tLXR5cGUtZHJvcGRvd24tY29udGFpbmVyJylcbmV4cG9ydCBjb25zdCBjdXN0b21lclN0YXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXJfY3VzdG9tZXJfc3RhdHMnKVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9ob3RlbC1leHRlcmlvci5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2hvdGVsLWxvYmJ5LW1vZDEuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9ob3RlbC1yb29mdG9wLmpwZ1wiOyIsImV4cG9ydCBjb25zdCByb29tSW1hZ2VzID0gW1xuICAnLi9pbWFnZXMvcm9vbS1nYXVkeS5qcGcnLFxuICAnLi9pbWFnZXMvcm9vbS1raW5nbHkuanBnJyxcbiAgJy4vaW1hZ2VzL3Jvb20ta2luZm9say5qcGcnLFxuICAnLi9pbWFnZXMvcm9vbS1tb2Rpc2guanBnJyxcbiAgJy4vaW1hZ2VzL3Jvb20tc21hbGwuanBnJyxcbiAgJy4vaW1hZ2VzL3Jvb20tc3BhcnNlLmpwZycsXG4gICcuL2ltYWdlcy9yb29tLXN1aXRlLmpwZycsXG4gICcuL2ltYWdlcy9yb29tLXh0cmFzbWFsbC5qcGcnLFxuICAnLi9pbWFnZXMvcm9vbS14dHJhc21hbGwyLmpwZycsXG5dXG5cbmV4cG9ydCBjb25zdCBiYXRocm9vbUltYWdlcyA9IFtcbiAgJy4vaW1hZ2VzL3Jvb20tYmF0aC1mYW5jeS5qcGcnLFxuICAnLi9pbWFnZXMvcm9vbS1iYXRoLWZhbmN5Mi5qcGcnLFxuXVxuXG5leHBvcnQgY29uc3QgbG9iYnlJbWFnZXMgPSBbXG4gICcuL2ltYWdlcy9ob3RlbC1sb2JieS1tb2QxLmpwZycsXG4gICcuL2ltYWdlcy9ob3RlbC1sb2JieS1tb2QyLmpwZycsXG4gICcuL2ltYWdlcy9ob3RlbC1sb2JieS1tb2QzLmpwZydcbl1cbiIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbS1nYXVkeS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20ta2luZm9say5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20ta2luZ2x5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbS1tb2Rpc2guanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLXNtYWxsLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbS1zcGFyc2UuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLXN1aXRlLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbS14dHJhc21hbGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLXh0cmFzbWFsbDIuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy91c2VyLXByb2ZpbGUuc3ZnXCI7IiwiaW1wb3J0ICcuL2Nzcy9iYXNlLnNjc3MnO1xuaW1wb3J0ICcuL2ltYWdlcy9ob3RlbC1leHRlcmlvci5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3VzZXItcHJvZmlsZS5zdmcnXG5pbXBvcnQgJy4vaW1hZ2VzL2hvdGVsLXJvb2Z0b3AuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLWdhdWR5LmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS1raW5nbHkuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLWtpbmZvbGsuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLW1vZGlzaC5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tc21hbGwuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLXNwYXJzZS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tc3VpdGUuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLXh0cmFzbWFsbC5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20teHRyYXNtYWxsMi5qcGcnXG5cbmltcG9ydCB7XG4gIHJvb21JbWFnZXNcbn0gZnJvbSAnLi9pbWFnZXMvaW1hZ2UtYXNzZXRzJztcblxuaW1wb3J0IHtcbiAgZG9tT2JqZWN0LFxuICBwcm9maWxlSWNvbixcbiAgbG9naW5Cb3gsXG4gIGxvZ2luQnV0dG9uLFxuICB1c2VybmFtZUlucHV0LFxuICBwYXNzd29yZElucHV0LFxuICBuYXZCb29raW5nLFxuICBuYXZDb250YWN0LFxuICBuYXZNYW5hZ2VySGlzdG9yeSxcbiAgbmF2Q3VzdG9tZXJGaW5kUm9vbXMsXG4gIG5hdkN1c3RvbWVyQWNjb3VudCxcbiAgbmF2Q3VzdG9tZXJIb3RlbCxcbiAgY2FsZW5kYXIsXG4gIGxvZ291dEJ1dHRvbixcbiAgbWFuYWdlclVzZXJTZWFyY2gsXG4gIGJvb2tpbmdUb29sYmFyLFxuICBkYXNoYm9hcmRDdXN0b21lcixcbiAgbWFuYWdlckRhc2hib2FyZCxcbiAgbWFuYWdlclVzZXJTZWFyY2hJbnB1dCxcbiAgY2FsZW5kYXJJbnB1dCxcbiAgZGFzaGJvYXJkSGVhZGVyLFxuICB0b29sYmFyU3VibWl0LFxuICByb29tVHlwZURyb3Bkb3duLFxuICBtYW5hZ2VyTmF2TGlua3MsXG4gIGN1c3RvbWVyU3RhdHNcbn0gZnJvbSAnLi9jbGFzc2VzL2RvbU9iamVjdCc7XG5cbmxldCB1c2VyRGF0YTtcbmxldCBib29raW5nRGF0YTtcbmxldCByb29tRGF0YTtcbmxldCB1c2VyO1xubGV0IGRhdGUgPSBnZXRGb3JtYXR0ZWREYXRlKCk7XG5cbmxldCBmZXRjaGVkVXNlckRhdGEgPSBhcGlSZXF1ZXN0LmdldFVzZXJEYXRhKCk7XG5sZXQgZmV0Y2hlZEJvb2tpbmdEYXRhID0gYXBpUmVxdWVzdC5nZXRCb29raW5nRGF0YSgpO1xubGV0IGZldGNoZWRSb29tRGF0YSA9IGFwaVJlcXVlc3QuZ2V0Um9vbURhdGEoKTtcblxuaW1wb3J0IFVzZXIgZnJvbSAnLi9jbGFzc2VzL1VzZXInO1xuaW1wb3J0IE1hbmFnZXIgZnJvbSAnLi9jbGFzc2VzL01hbmFnZXInO1xuXG5pbXBvcnQge1xuICBhcGlSZXF1ZXN0XG59IGZyb20gJy4vY2xhc3Nlcy9hcGlSZXF1ZXN0JztcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tIGV2ZW50IGxpc3RlbmVycyAtLS0tLS0tLS0tLS0tLS0tLS1cblxucHJvZmlsZUljb24uYWRkRXZlbnRMaXN0ZW5lcigna2V5cHJlc3MnLCBkb21PYmplY3Quc2hvd0xvZ2luKTtcbmxvZ2luQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgY2hlY2tMb2dpbik7XG5sb2dvdXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByZWZyZXNoUGFnZSlcbm5hdkJvb2tpbmcuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q3VzdG9tZXJEYXNoYm9hcmQpO1xubWFuYWdlclVzZXJTZWFyY2hJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIHJldHVyblVzZXJJbmZvKTtcbm5hdkN1c3RvbWVySG90ZWwuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93SG9tZVBhZ2UpO1xubmF2Q3VzdG9tZXJBY2NvdW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc2hvd015Qm9va2luZ3MpO1xubmF2Q3VzdG9tZXJGaW5kUm9vbXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93Q3VzdG9tZXJEYXNoYm9hcmQpXG5kYXNoYm9hcmRDdXN0b21lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGJvb2tSb29tKVxubWFuYWdlckRhc2hib2FyZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1hbmFnZXJEYXNoYm9hcmRDbGlja0hhbmRsZXIpXG50b29sYmFyU3VibWl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgc29ydEJ5Um9vbVR5cGUpXG5tYW5hZ2VyTmF2TGlua3MuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBtYW5hZ2VyTmF2SGFuZGxlcilcbmJvb2tpbmdUb29sYmFyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGlnaGxpZ2h0TGluaylcbm5hdkNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWdobGlnaHRIb3RlbEluZm8pO1xuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignbmF2JykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWdobGlnaHRMaW5rKVxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb21PYmplY3Quc2hvd0xvZ2luKTtcblxuLy8gLS0tLS0tLS0tLS0tLS0tLS0tIEdlbmVyYWwgZnVuY3Rpb25zIC0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG5Qcm9taXNlLmFsbChbZmV0Y2hlZFVzZXJEYXRhLCBmZXRjaGVkQm9va2luZ0RhdGEsIGZldGNoZWRSb29tRGF0YV0pXG4gIC50aGVuKHZhbHVlID0+IHtcbiAgICB1c2VyRGF0YSA9IHZhbHVlWzBdWyd1c2VycyddO1xuICAgIGJvb2tpbmdEYXRhID0gdmFsdWVbMV1bJ2Jvb2tpbmdzJ107XG4gICAgcm9vbURhdGEgPSB2YWx1ZVsyXVsncm9vbXMnXTtcbiAgICBsb2FkQXBwKCk7XG4gIH0pXG4gIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXG5cbmZ1bmN0aW9uIGNoZWNrTG9naW4oKSB7XG4gIGxldCB1c2VybmFtZVByZSA9IHVzZXJuYW1lSW5wdXQudmFsdWUuc3BsaXQoJycpLnNsaWNlKDAsIDgpLmpvaW4oJycpLnRvTG93ZXJDYXNlKClcbiAgbGV0IHVzZXJJRCA9IHVzZXJuYW1lSW5wdXQudmFsdWUuc3BsaXQoJycpLnNsaWNlKDgpLmpvaW4oJycpXG4gIGxldCBwYXNzd29yZCA9IHBhc3N3b3JkSW5wdXQudmFsdWUudG9TdHJpbmcoKVxuICBpZiAocGFzc3dvcmQgPT09ICdvdmVybG9vazIwMjAnICYmIHVzZXJuYW1lUHJlID09PSAnY3VzdG9tZXInICYmIHVzZXJJRC5sZW5ndGggPiAwICYmIHVzZXJJRCA8IDUxICYmIHVzZXJJRCA+IDApIHtcbiAgICB1c2VyID0gbmV3IFVzZXIodXNlckRhdGFbdXNlcklEIC0gMV0pXG4gICAgc2hvd0N1c3RvbWVyRGFzaGJvYXJkKClcbiAgfSBlbHNlIGlmIChwYXNzd29yZCA9PT0gJ292ZXJsb29rMjAyMCcgJiYgdXNlcm5hbWVJbnB1dC52YWx1ZS50b0xvd2VyQ2FzZSgpID09PSAnbWFuYWdlcicpIHtcbiAgICB1c2VyID0gbmV3IE1hbmFnZXIoKVxuICAgIHNob3dNYW5hZ2VyRGFzaGJvYXJkKClcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnSW52YWxpZCBsb2dpbiBpbmZvcm1hdGlvbicpXG4gIH1cbiAgZG9tT2JqZWN0LmhpZGVFbGVtZW50KGxvZ2luQm94KTtcbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuZnVuY3Rpb24gbG9hZEFwcCgpIHtcbiAgbGV0IGNhbERhdGUgPSBkYXRlLnJlcGxhY2VBbGwoJy8nLCAnLScpO1xuICBjYWxlbmRhcklucHV0LnNldEF0dHJpYnV0ZSgnbWluJywgY2FsRGF0ZSk7XG4gIGNhbGVuZGFySW5wdXQuc2V0QXR0cmlidXRlKCd2YWx1ZScsIGNhbERhdGUpO1xufVxuXG5mdW5jdGlvbiByZWZyZXNoUGFnZSgpIHtcbiAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xufVxuXG5mdW5jdGlvbiBnZXRDYWxlbmRhckRhdGUoKSB7XG4gIHJldHVybiBjYWxlbmRhcklucHV0LnZhbHVlLnJlcGxhY2VBbGwoJy0nLCAnLycpXG59XG5cbmZ1bmN0aW9uIGdldEZvcm1hdHRlZERhdGUoKSB7XG4gIGxldCBuZXdEYXRlID0gbmV3IERhdGUoKTtcbiAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcbiAgbGV0IGRhdGUgPSBuZXdEYXRlLmdldERhdGUoKTtcblxuICBpZiAoZGF0ZS50b1N0cmluZygpLmxlbmd0aCA8IDIpIHtcbiAgICBkYXRlID0gJzAnICsgZGF0ZVxuICB9XG4gIGlmIChtb250aC50b1N0cmluZygpLmxlbmd0aCA8IDIpIHtcbiAgICBtb250aCA9ICcwJyArIG1vbnRoXG4gIH1cbiAgcmV0dXJuIGAke25ld0RhdGUuZ2V0RnVsbFllYXIoKX0vJHttb250aH0vJHtkYXRlfWBcbn1cblxuLy8gLS0tLS0tLS0tLS0tLS0gTmF2IGxpbmtzIGFuZCBjbGljayBoYW5kbGVycyAtLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIG1hbmFnZXJEYXNoYm9hcmRDbGlja0hhbmRsZXIoKSB7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdkZWxldGVfYm9va2luZ19idXR0b24nKSkge1xuICAgIG1hbmFnZXJEZWxldGVCb29raW5nKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJyksIGV2ZW50LnRhcmdldC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0KVxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc3VsdF9ib29rLXJvb20tbGluaycpKSB7XG4gICAgYm9va1Jvb21NYW5hZ2VyKClcbiAgfVxufVxuXG5mdW5jdGlvbiBtYW5hZ2VyTmF2SGFuZGxlcigpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ25hdi1tYW5hZ2VyLWhpc3RvcnknKSB7XG4gICAgcmV0dXJuVXNlckluZm8oKVxuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ25hdi1tYW5hZ2VyLWJvb2tpbmcnKSB7XG4gICAgc2hvd01hbmFnZXJCb29rRm9yQ3VzdG9tZXIoKTtcbiAgICBsb2FkQXZhaWxhYmxlUm9vbXMoZGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0TGluaygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmhpZ2hsaWdodGFibGVfbGluaycpLmZvckVhY2gobm9kZSA9PiB7XG4gICAgbm9kZS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmVfbmF2JylcbiAgfSk7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWdobGlnaHRhYmxlX2xpbmsnKSkge1xuICAgIGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfbmF2Jyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaGlnaGxpZ2h0SG90ZWxJbmZvKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcl9ob3RlbC1pbmZvLWJsb2NrJykuY2xhc3NMaXN0LmFkZCgncHVsc2VfaW5mbycpXG59XG5cbi8vIC0tLS0tLS0tLS0tLS0gRGFzaGJvYXJkIERpc3BsYXkgLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIHNob3dIb21lUGFnZSgpIHtcbiAgZG9tT2JqZWN0LmhpZGVIb21lVmlldyhmYWxzZSk7XG4gIGRvbU9iamVjdC5zaG93VG9vbGJhcihmYWxzZSk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyX2hvdGVsLWluZm8tYmxvY2snKS5jbGFzc0xpc3QucmVtb3ZlKCdwdWxzZV9pbmZvJyk7XG59XG5cbmZ1bmN0aW9uIHNob3dNeUJvb2tpbmdzKCkge1xuICBsb2FkVXNlckFjY291bnRJbmZvKGJvb2tpbmdEYXRhKTtcbiAgZG9tT2JqZWN0LnNob3dUb29sYmFyKGZhbHNlKTtcbiAgZG9tT2JqZWN0LnNob3dEYXNoYm9hcmRIZWFkZXIodHJ1ZSk7XG4gIHNob3dEYXNoYm9hcmRNZXNzYWdlKCk7XG59XG5cbmZ1bmN0aW9uIHNob3dEYXNoYm9hcmRNZXNzYWdlKCkge1xuICBsZXQgYm9va2luZ1RvdGFsID0gdXNlci52aWV3TXlCb29raW5ncyhib29raW5nRGF0YSkubGVuZ3RoO1xuICBkYXNoYm9hcmRIZWFkZXIuaW5uZXJIVE1MID0gJyc7XG4gIGRhc2hib2FyZEhlYWRlci5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgYFxuICAgICAgPHA+VGhhbmtzIGZvciB5b3VyIGNvbnRpbnVlZCBzdXBwb3J0ICR7dXNlci5uYW1lfS4gWW91IGhhdmUgJHtib29raW5nVG90YWwgPiAxID8gYm9va2luZ1RvdGFsICsgJyBib29raW5ncycgOiBib29raW5nVG90YWwgKyAnIGJvb2tpbmcnfSBvbiByZWNvcmQgd2l0aCB1cyR7Ym9va2luZ1RvdGFsID4gMjAgPyAnLiBXSE9BIScgOiAnISd9PC9wPlxuICBgKVxufVxuXG5mdW5jdGlvbiBzaG93Q3VzdG9tZXJEYXNoYm9hcmQoKSB7XG4gIGlmICh1c2VyIGluc3RhbmNlb2YgVXNlcikge1xuICAgIGRvbU9iamVjdC5zaG93Q3VzdG9tZXJEYXNoYm9hcmQodHJ1ZSk7XG4gICAgZG9tT2JqZWN0LnNob3dUb29sYmFyKHRydWUpO1xuICAgIGRvbU9iamVjdC5oaWRlRWxlbWVudChtYW5hZ2VyVXNlclNlYXJjaCk7XG4gICAgZG9tT2JqZWN0LnNob3dEYXNoYm9hcmRIZWFkZXIoZmFsc2UpO1xuICAgIHVwZGF0ZUN1c3RvbWVyU3RhdHMoKTtcbiAgICBsb2FkQXZhaWxhYmxlUm9vbXMoZGF0ZSk7XG4gICAgbmF2Q3VzdG9tZXJGaW5kUm9vbXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX25hdicpXG4gIH0gZWxzZSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBsb2cgaW4gdG8gdmlldyBhdmFpbGFibGUgcm9vbXMnKVxuICB9XG59XG5cbmZ1bmN0aW9uIHVwZGF0ZUN1c3RvbWVyU3RhdHMoKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyX2N1c3RvbWVyX3N0YXRzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b21lcl9zdGF0X3RpdGxlX2RhdGUnKS5pbm5lclRleHQgPSBgJHt1c2VyLm5hbWV9YFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VzdG9tZXJfc3RhdF90b3RhbF9zcGVudCcpLmlubmVyVGV4dCA9IGAkJHt1c2VyLnZpZXdNeVRvdGFsKGJvb2tpbmdEYXRhLCByb29tRGF0YSkudG9GaXhlZCgpfWBcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1c3RvbWVyX3N0YXRfdG90YWxfc3RheXMnKS5pbm5lclRleHQgPSBgJHt1c2VyLnZpZXdNeUJvb2tpbmdzKGJvb2tpbmdEYXRhKS5sZW5ndGh9YFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VzdG9tZXJfc3RhdF9sb3lhbHR5X3dyYXBwZXInKS5pbm5lckhUTUwgPSAnJztcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1c3RvbWVyX3N0YXRfbG95YWx0eV93cmFwcGVyJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgPHA+TE9ZQUxUWSBMRVZFTDwvcD5cbiAgICA8cCBpZD0nY3VzdG9tZXJfc3RhdF9sb3lhbHR5JyBjbGFzcz0nc3RhdF9nb2xkJz4ke2dldExveWFsdHlTdGF0dXMoKX08L3A+XG4gIGApO1xufVxuXG5mdW5jdGlvbiBnZXRMb3lhbHR5U3RhdHVzKCkge1xuICBsZXQgdG90YWwgPSBOdW1iZXIodXNlci52aWV3TXlUb3RhbChib29raW5nRGF0YSwgcm9vbURhdGEpKTtcbiAgaWYgKHRvdGFsIDwgMTAwMCkge1xuICAgIHJldHVybiAnQXNzb2NpYXRlJ1xuICB9IGVsc2UgaWYgKHRvdGFsID4gMTAwMCAmJiB0b3RhbCA8IDUwMDApIHtcbiAgICByZXR1cm4gJ1ByZW1pZXInXG4gIH0gZWxzZSBpZiAodG90YWwgPiA1MDAwICYmIHRvdGFsIDwgMTAwMDApIHtcbiAgICByZXR1cm4gJ0V4ZWN1dGl2ZSdcbiAgfSBlbHNlIGlmICh0b3RhbCA+IDEwMDAwICYmIHRvdGFsIDwgMTUwMDApIHtcbiAgICByZXR1cm4gJ1JveWFsdHknXG4gIH0gZWxzZSBpZiAodG90YWwgPiAxNTAwMCkge1xuICAgIHJldHVybiAnVmVuZXJhdGVkJ1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dNYW5hZ2VyRGFzaGJvYXJkKCkge1xuICBkb21PYmplY3QuaGlkZUVsZW1lbnQoY3VzdG9tZXJTdGF0cylcbiAgZG9tT2JqZWN0LmhpZGVIb21lVmlldyh0cnVlKTtcbiAgZG9tT2JqZWN0LmhpZGVNYW5hZ2VyVmlldyhmYWxzZSk7XG4gIGRvbU9iamVjdC5zaG93VG9vbGJhckN1c3RvbWVySGlzdG9yeSgpO1xuICBzaG93TWFuYWdlcldlbGNvbWVNZXNzYWdlKClcbiAgdXBkYXRlTWFuYWdlclN0YXRzKClcbn1cblxuZnVuY3Rpb24gc2hvd01hbmFnZXJXZWxjb21lTWVzc2FnZSgpIHtcbiAgbWFuYWdlckRhc2hib2FyZC5pbm5lckhUTUwgPSAnJ1xuICBsZXQgcm9vbXNUb1JlbnQgPSB1c2VyLnRvdGFsQXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKVxuICBtYW5hZ2VyRGFzaGJvYXJkLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICA8ZGl2IGlkPSdtYW5hZ2VyX3dlbGNvbWUtd3JhcHBlcic+PHAgaWQ9J21hbmFnZXJfd2VsY29tZSc+SGV5IEJvc3MhIFdlJ3ZlIGdvdCAkeyFyb29tc1RvUmVudCA/ICdub3RoaW5nJyA6IHJvb21zVG9SZW50ICsgJyByb29tcyd9IGF2YWlsYWJsZSB0byBib29rIHRvZGF5ITwvcD48L2Rpdj5cbiAgYClcbn1cblxuZnVuY3Rpb24gc2hvd01hbmFnZXJCb29rRm9yQ3VzdG9tZXIoKSB7XG4gIGRvbU9iamVjdC5zaG93RWxlbWVudChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9vbGJhcl9zdWJtaXRfYnV0dG9uX3dyYXBwZXInKSlcbiAgZG9tT2JqZWN0LnNob3dFbGVtZW50KHJvb21UeXBlRHJvcGRvd24pXG4gIGRvbU9iamVjdC5zaG93RWxlbWVudChjYWxlbmRhcilcbn1cblxuZnVuY3Rpb24gdXBkYXRlTWFuYWdlclN0YXRzKGN1c3RvbWVyTmFtZSkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhcl9tYW5hZ2VyX3N0YXRzJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYW5hZ2VyX3N0YXRfdGl0bGVfZGF0ZScpLmlubmVyVGV4dCA9IGAke2RhdGV9YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXJfc3RhdF9hdmFpbGFiaWxpdHknKS5pbm5lclRleHQgPSBgJHt1c2VyLnRvdGFsQXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKX0gdmFjYW5jaWVzYDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXJfc3RhdF90b3RhbF9yZXZlbnVlJykuaW5uZXJUZXh0ID0gYCQke3VzZXIudG90YWxSZXZlbnVlKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSkudG9GaXhlZCgpfWA7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYW5hZ2VyX3N0YXRfdG90YWxfb2NjdXBhbmN5JykuaW5uZXJUZXh0ID0gYCR7dXNlci50b3RhbFBlcmNlbnRPY2N1cGllZChib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpICogMTAwfSVgO1xuICBpZiAoY3VzdG9tZXJOYW1lKSB7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXJfc3RhdF9jdXN0b21lcl90b3RhbF93cmFwcGVyJykuaW5uZXJIVE1MID0gJyc7XG4gICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXJfc3RhdF9jdXN0b21lcl90b3RhbF93cmFwcGVyJykuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgICA8cD5DVVNUT01FUiBUT1RBTDwvcD5cbiAgICAgIDxwIGlkPSdtYW5hZ2VyX3N0YXRfY3VzdG9tZXJfdG90YWwnIGNsYXNzPSdzdGF0X2dvbGQnPiQke3VzZXIudmlld0N1c3RvbWVySW5mbyhib29raW5nRGF0YSwgcm9vbURhdGEsIHVzZXJEYXRhLCBjdXN0b21lck5hbWUpLnRvdGFsU3BlbnQudG9GaXhlZCgpfTwvcD5cbiAgICBgKVxuICB9XG59XG5cbmZ1bmN0aW9uIGxvYWRVc2VyQWNjb3VudEluZm8oYm9va2luZ0RhdGEsIG5hbWUpIHtcbiAgbGV0IGRhc2hib2FyZEFuZEJvb2tpbmdzID0gZ2V0Q29ycmVjdERhc2hBbmRCb29raW5nKGJvb2tpbmdEYXRhLCBuYW1lKTtcbiAgZGFzaGJvYXJkQW5kQm9va2luZ3NbMF0uaW5uZXJIVE1MID0gJyc7XG4gIGRhc2hib2FyZEFuZEJvb2tpbmdzWzFdLmZvckVhY2goKGJvb2tpbmcsIGkpID0+IHtcbiAgICBsZXQgcm9vbSA9IHJvb21EYXRhLmZpbmQocm9vbSA9PiByb29tLm51bWJlciA9PT0gYm9va2luZy5yb29tTnVtYmVyKVxuICAgIGxldCByYW5kb21JbWFnZSA9IHJvb21JbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm9vbUltYWdlcy5sZW5ndGgpXTtcbiAgICBkYXNoYm9hcmRBbmRCb29raW5nc1swXS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICBgXG4gICAgICA8YXJ0aWNsZSBpZD0nbXktYm9va2luZ19jYXJkLSR7aX0nIGNsYXNzPSdteS1ib29raW5nX2NhcmQnPlxuICAgICAgPGRpdiBjbGFzcz0nbXktYm9va2luZ19pbWFnZS13cmFwcGVyJz5cbiAgICAgIDxpbWcgY2xhc3M9J215LWJvb2tpbmdfaW1hZ2UnIHNyYz0ke3JhbmRvbUltYWdlfT5cbiAgICAgIDwvZGl2PlxuICAgICAgPHNlY3Rpb24gY2xhc3M9J215X2Jvb2tpbmctdGV4dF93cmFwcGVyJz5cbiAgICAgIDxkaXY+XG4gICAgICA8cD5yb29tIGRldGFpbHM8L3A+XG4gICAgICA8cD4ke3Jvb20ucm9vbVR5cGV9PC9wPlxuICAgICAgPHA+cm9vbSBubzogJHtyb29tLm51bWJlcn08L3A+XG4gICAgICA8cD4ke3Jvb20ubnVtQmVkc30gJHtyb29tLm51bUJlZHMgPiAxID8gcm9vbS5iZWRTaXplICsgJyBiZWRzJyA6IHJvb20uYmVkU2l6ZSArICcgYmVkJ308L3A+XG4gICAgICA8cD4ke3Jvb20uYmlkZXQgPyAnYW1lbml0aWVzOiA8YnI+YmlkZXQnIDogJyd9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2PlxuICAgICAgPHA+Ym9va2luZyBkZXRhaWxzPC9wPlxuICAgICAgPHA+JHtuYW1lID8gbmFtZSA6IHVzZXIubmFtZX08L3A+XG4gICAgICA8cD5mb3I6ICR7Ym9va2luZy5kYXRlfTwvcD5cbiAgICAgIDxwPmN1c3RvbWVyIGlkOiAke2Jvb2tpbmcudXNlcklEfTwvcD5cbiAgICAgIDxwPmJvb2tpbmcgaWQ6PC9wPlxuICAgICAgPHA+JHtib29raW5nLmlkfTwvcD5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD0nYm9va2luZ190b3RhbF8ke2l9Jz5cbiAgICAgIDxwPiQke3Jvb20uY29zdFBlck5pZ2h0LnRvRml4ZWQoMil9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8L2FydGljbGU+XG4gICAgYCk7XG4gICAgaWYgKHVzZXIgaW5zdGFuY2VvZiBNYW5hZ2VyICYmIGJvb2tpbmcuZGF0ZSA+IGRhdGUpIHtcbiAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCNib29raW5nX3RvdGFsXyR7aX1gKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgICAgPHAgY2xhc3M9J2RlbGV0ZV9ib29raW5nX2J1dHRvbicgdmFsdWU9JHtib29raW5nLmlkfT5ERUxFVEUgPGJyPkJPT0tJTkc8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdoaWRkZW4nPiR7bmFtZX08L3NwYW4+XG4gICAgICBgKVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBdmFpbGFibGVSb29tcyhkYXRlLCByb29tVHlwZSkge1xuICBkYXRlID0gZ2V0Q2FsZW5kYXJEYXRlKClcbiAgbGV0IGRhc2hib2FyZEFuZEJvb2tpbmdzID0gZ2V0Q29ycmVjdERhc2hBbmRCb29raW5nKGJvb2tpbmdEYXRhLCBuYW1lKTtcbiAgbGV0IGJvb2tpbmdBcnJheSA9IHVzZXIudmlld0F2YWlsYWJsZVJvb21zQnlUeXBlKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSwgcm9vbVR5cGUpO1xuICBkYXNoYm9hcmRBbmRCb29raW5nc1swXS5pbm5lckhUTUwgPSAnJ1xuICBpZiAoYm9va2luZ0FycmF5Lmxlbmd0aCA9PT0gMCkge1xuICAgIGRhc2hib2FyZEFuZEJvb2tpbmdzWzBdLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgIDxkaXYgaWQ9J3NvcnJ5X21lc3NhZ2Utd3JhcHBlcic+PHAgaWQ9J3NvcnJ5X21lc3NhZ2UnPlNvcnJ5LCB0aGVyZSBhcmUgbm8gJHshcm9vbVR5cGUgPyAncm9vbScgOiByb29tVHlwZX1zIGF2YWlsYWJpbGUgZm9yIGEgJHtkYXRlfSBib29raW5nPC9wPjwvZGl2PlxuICAgIGApXG4gIH0gZWxzZSB7XG4gICAgYm9va2luZ0FycmF5LmZvckVhY2goKHJvb20sIGkpID0+IHtcbiAgICAgIGxldCByYW5kb21JbWFnZSA9IHJvb21JbWFnZXNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogcm9vbUltYWdlcy5sZW5ndGgpXTtcbiAgICAgIGRhc2hib2FyZEFuZEJvb2tpbmdzWzBdLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgICAgICAgYFxuICAgICAgICA8YXJ0aWNsZSBpZD0ncmVzdWx0X2NhcmQtJHtpfScgY2xhc3M9J3Jlc3VsdF9jYXJkIGZhZGUtaW4nPlxuICAgICAgICA8ZGl2IGNsYXNzPSdyZXN1bHRfaW1hZ2Utd3JhcHBlcic+XG4gICAgICAgIDxpbWcgY2xhc3M9J3Jlc3VsdF9pbWFnZScgc3JjPSR7cmFuZG9tSW1hZ2V9IGFsdD0nQSAke3Jvb20ubnVtQmVkc30gYmVkLCBjYWxtIGFuZCBzZXJlbmUgbW9kZXJuICR7cm9vbS5yb29tVHlwZX0nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9J3Jlc3VsdF90ZXh0LXdyYXBwZXInPlxuICAgICAgICA8aDI+JHtyb29tLnJvb21UeXBlfSAjJHtyb29tLm51bWJlcn08L2gyPlxuICAgICAgICA8cD4ke3Jvb20ubnVtQmVkc30gJHtyb29tLm51bUJlZHMgPiAxID8gcm9vbS5iZWRTaXplICsgJyBiZWRzJyA6IHJvb20uYmVkU2l6ZSArICcgYmVkJ30sIGluY3JlZGlibGUgbW91bnRhaW4gdmlld3MsXG4gICAgICAgIDxicj5hIGZ1bGx5IG1vZGVybiByb29tIGFuZCBiYXRocm9vbSR7cm9vbS5iaWRldCA/ICcgaW5jbHVkaW5nIGEgYmlkZXQhJyA6ICcuJ308L3A+XG4gICAgICAgIDxicj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgPHA+JCR7cm9vbS5jb3N0UGVyTmlnaHQudG9GaXhlZCgyKX08L3A+XG4gICAgICAgIDxwPnBlciBuaWdodDxicj5leGNsdWRpbmcgdGF4ZXMgYW5kIGZlZXM8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8c3Bhbj48cCBpZD0nYm9va19yb29tX2xpbmsnIHZhbHVlPScke3Jvb20ubnVtYmVyfScgY2xhc3M9J3Jlc3VsdF9ib29rLXJvb20tbGluayc+Qk9PSyBUSElTIFJPT008L3A+PC9zcGFuPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIGApO1xuICAgIH0pO1xuICB9XG59XG5cbi8vIC0tLS0tLS0tLS0tLSBEYXNoYm9hcmQgRGF0YSAtLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gZ2V0Q29ycmVjdERhc2hBbmRCb29raW5nKGJvb2tpbmdEYXRhLCBuYW1lKSB7XG4gIGxldCBjdXN0b21lck9yTWFuYWdlciA9IHVzZXIgaW5zdGFuY2VvZiBNYW5hZ2VyID8gJ21hbmFnZXInIDogJ2N1c3RvbWVyJztcbiAgbGV0IGRhc2hib2FyZCA9IGN1c3RvbWVyT3JNYW5hZ2VyID09PSAnbWFuYWdlcicgPyBtYW5hZ2VyRGFzaGJvYXJkIDogZGFzaGJvYXJkQ3VzdG9tZXI7XG4gIGxldCBib29raW5ncyA9IGN1c3RvbWVyT3JNYW5hZ2VyID09PSAnbWFuYWdlcicgPyB1c2VyLnZpZXdDdXN0b21lckJvb2tpbmdzKGJvb2tpbmdEYXRhLCB1c2VyRGF0YSwgbmFtZSkgOiB1c2VyLnZpZXdNeUJvb2tpbmdzKGJvb2tpbmdEYXRhKTtcbiAgbGV0IHNvcnRlZEJvb2tpbmdzID0gYm9va2luZ3Muc29ydCgoYSwgYikgPT4gbmV3IERhdGUoYi5kYXRlKSAtIG5ldyBEYXRlKGEuZGF0ZSkpXG4gIHJldHVybiBbZGFzaGJvYXJkLCBzb3J0ZWRCb29raW5nc11cbn1cblxuZnVuY3Rpb24gYm9va1Jvb20oKSB7XG4gIGRhdGUgPSBnZXRDYWxlbmRhckRhdGUoKVxuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVzdWx0X2Jvb2stcm9vbS1saW5rJykpIHtcbiAgICBsZXQgcm9vbU51bSA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcbiAgICBsZXQgb25TdWNjZXNzID0gKCkgPT4ge1xuICAgICAgZ2V0VXBkYXRlZEF2YWlsYWJsZUxpc3QoKVxuICAgIH1cbiAgICB1c2VyLmJvb2tNeVJvb20oZGF0ZSwgcm9vbU51bSwgb25TdWNjZXNzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBib29rUm9vbU1hbmFnZXIoKSB7XG4gIGRhdGUgPSBnZXRDYWxlbmRhckRhdGUoKVxuICBsZXQgbmFtZSA9IG1hbmFnZXJVc2VyU2VhcmNoSW5wdXQudmFsdWU7XG4gIGlmIChldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZXN1bHRfYm9vay1yb29tLWxpbmsnKSAmJiBuYW1lICE9PSAnJykge1xuICAgIGxldCByb29tTnVtID0gTnVtYmVyKGV2ZW50LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ3ZhbHVlJykpO1xuICAgIGxldCBvblN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICBnZXRVcGRhdGVkQXZhaWxhYmxlTGlzdCgpXG4gICAgfVxuICAgIHVzZXIuYWRkQ3VzdG9tZXJCb29raW5nKHVzZXJEYXRhLCBuYW1lLCBkYXRlLCByb29tTnVtLCBvblN1Y2Nlc3MpO1xuICB9IGVsc2UgaWYgKGV2ZW50LnRhcmdldC5pZCA9PT0gJ2Jvb2tfcm9vbV9saW5rJyAmJiBuYW1lID09PSAnJykge1xuICAgIGFsZXJ0KCdQbGVhc2UgZmlyc3Qgc2VsZWN0IGEgdXNlciBieSB0aGVpciBmaXJzdCBhbmQgbGFzdCBuYW1lIGluIHRoZSB0b29sYmFyJylcbiAgfVxufVxuXG5mdW5jdGlvbiBtYW5hZ2VyRGVsZXRlQm9va2luZyhpZCwgbmFtZSkge1xuICBjb25zb2xlLmxvZyhpZCwgbmFtZSk7XG4gIGlmIChjb25maXJtKGBBcmUgeW91IHN1cmUgeW91IHdhbnQgdG8gZGVsZXRlIGJvb2tpbmcgJHtpZH0/YCkpIHtcbiAgICBsZXQgb25TdWNjZXNzID0gKCkgPT4ge1xuICAgICAgdXBkYXRlTWFuYWdlclVzZXJJbmZvKG5hbWUpXG4gICAgfVxuICAgIHVzZXIuZGVsZXRlQ3VzdG9tZXJCb29raW5nKGJvb2tpbmdEYXRhLCBpZCwgb25TdWNjZXNzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzb3J0QnlSb29tVHlwZSgpIHtcbiAgbGV0IGRyb3Bkb3duID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Jvb20tdHlwZXMnKTtcbiAgbGV0IHJvb21UeXBlID0gZHJvcGRvd24ub3B0aW9uc1tkcm9wZG93bi5zZWxlY3RlZEluZGV4XS52YWx1ZS50b1N0cmluZygpO1xuICBsZXQgc2VsZWN0ZWREYXRlID0gZ2V0Q2FsZW5kYXJEYXRlKCk7XG5cbiAgaWYgKHJvb21UeXBlID09PSAncmVzaWRlbnRpYWwnKSB7XG4gICAgbG9hZEF2YWlsYWJsZVJvb21zKHNlbGVjdGVkRGF0ZSwgJ3Jlc2lkZW50aWFsIHN1aXRlJyk7XG4gIH0gZWxzZSBpZiAocm9vbVR5cGUgPT09ICdzdWl0ZScpIHtcbiAgICBsb2FkQXZhaWxhYmxlUm9vbXMoc2VsZWN0ZWREYXRlLCAnc3VpdGUnKTtcbiAgfSBlbHNlIGlmIChyb29tVHlwZSA9PT0gJ2p1bmlvcicpIHtcbiAgICBsb2FkQXZhaWxhYmxlUm9vbXMoc2VsZWN0ZWREYXRlLCAnanVuaW9yIHN1aXRlJyk7XG4gIH0gZWxzZSBpZiAocm9vbVR5cGUgPT09ICdzaW5nbGUnKSB7XG4gICAgbG9hZEF2YWlsYWJsZVJvb21zKHNlbGVjdGVkRGF0ZSwgJ3NpbmdsZSByb29tJyk7XG4gIH0gZWxzZSBpZiAocm9vbVR5cGUgPT09ICdhbGwnKSB7XG4gICAgbG9hZEF2YWlsYWJsZVJvb21zKHNlbGVjdGVkRGF0ZSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTWFuYWdlclVzZXJJbmZvKG5hbWUpIHtcbiAgZmV0Y2hlZEJvb2tpbmdEYXRhID0gYXBpUmVxdWVzdC5nZXRCb29raW5nRGF0YSgpO1xuICBmZXRjaGVkQm9va2luZ0RhdGEudGhlbih2YWx1ZSA9PiB7XG4gICAgYm9va2luZ0RhdGEgPSB2YWx1ZVsnYm9va2luZ3MnXVxuICB9KS50aGVuKCgpID0+IGxvYWRVc2VyQWNjb3VudEluZm8oYm9va2luZ0RhdGEsIG5hbWUpKS50aGVuKCgpID0+IHtcbiAgICB1cGRhdGVNYW5hZ2VyU3RhdHMobWFuYWdlclVzZXJTZWFyY2hJbnB1dC52YWx1ZSlcbiAgfSlcbn1cblxuZnVuY3Rpb24gZ2V0VXBkYXRlZEF2YWlsYWJsZUxpc3QoKSB7XG4gIGZldGNoZWRCb29raW5nRGF0YSA9IGFwaVJlcXVlc3QuZ2V0Qm9va2luZ0RhdGEoKTtcbiAgZmV0Y2hlZEJvb2tpbmdEYXRhLnRoZW4odmFsdWUgPT4ge1xuICAgIGJvb2tpbmdEYXRhID0gdmFsdWVbJ2Jvb2tpbmdzJ11cbiAgfSkudGhlbigoKSA9PiBsb2FkQXZhaWxhYmxlUm9vbXMoZGF0ZSkpLnRoZW4oKCkgPT4ge1xuICAgIGlmICh1c2VyIGluc3RhbmNlb2YgTWFuYWdlcikge1xuICAgICAgdXBkYXRlTWFuYWdlclN0YXRzKG1hbmFnZXJVc2VyU2VhcmNoSW5wdXQudmFsdWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICB1cGRhdGVDdXN0b21lclN0YXRzKCk7XG4gICAgfVxuICB9KVxufVxuXG5mdW5jdGlvbiByZXR1cm5Vc2VySW5mbygpIHtcbiAgaWYgKGV2ZW50LmtleSA9PT0gJ0VudGVyJykge1xuICAgIGxvYWRVc2VyQWNjb3VudEluZm8oYm9va2luZ0RhdGEsIG1hbmFnZXJVc2VyU2VhcmNoSW5wdXQudmFsdWUpO1xuICAgIHVwZGF0ZU1hbmFnZXJTdGF0cyhtYW5hZ2VyVXNlclNlYXJjaElucHV0LnZhbHVlKVxuICAgIG5hdk1hbmFnZXJIaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9uYXYnKVxuICB9IGVsc2UgaWYgKG1hbmFnZXJVc2VyU2VhcmNoSW5wdXQudmFsdWUpIHtcbiAgICBsb2FkVXNlckFjY291bnRJbmZvKGJvb2tpbmdEYXRhLCBtYW5hZ2VyVXNlclNlYXJjaElucHV0LnZhbHVlKTtcbiAgICB1cGRhdGVNYW5hZ2VyU3RhdHMobWFuYWdlclVzZXJTZWFyY2hJbnB1dC52YWx1ZSlcbiAgICBuYXZNYW5hZ2VySGlzdG9yeS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfbmF2JylcbiAgfSBlbHNlIHtcbiAgICBuYXZNYW5hZ2VySGlzdG9yeS5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfbmF2JylcbiAgfVxuICBkb21PYmplY3Quc2hvd1Rvb2xiYXJDdXN0b21lckhpc3RvcnkoKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=