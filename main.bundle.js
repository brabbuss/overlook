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
// Module
exports.push([module.i, "* {\n  margin: 0;\n  padding: 0;\n  box-sizing: border-box; }\n\nhtml, body {\n  font-family: 'Poppins', sans-serif;\n  background: white;\n  margin: 0;\n  width: 100%;\n  margin: 0px;\n  display: flex; }\n\nbody {\n  flex-direction: row; }\n  @media screen and (max-width: 992px) {\n    body {\n      flex-flow: wrap;\n      width: 100%; } }\n  @media screen and (max-width: 600px) {\n    body {\n      flex-flow: wrap;\n      width: 100%; } }\n\nmain {\n  display: flex;\n  flex-direction: column; }\n\n#main_header {\n  height: 10vh;\n  display: flex;\n  width: 100%;\n  background-color: white;\n  flex: 1;\n  align-items: center;\n  box-shadow: -11px -3px 20px 0px black;\n  padding: 0 3em;\n  color: gray; }\n  #main_header svg {\n    cursor: pointer;\n    height: 3em;\n    width: auto;\n    fill: gray;\n    transition: all .35s ease-in-out;\n    opacity: 1; }\n    #main_header svg:hover {\n      fill: #00fff2; }\n  #main_header nav {\n    flex: 1; }\n  #main_header .profile-container {\n    display: flex;\n    flex: 1; }\n\n.nav-links {\n  display: flex;\n  justify-content: space-around;\n  list-style: none; }\n  .nav-links .nav-link {\n    cursor: pointer;\n    color: gray;\n    transition: all .35s ease-in-out;\n    padding: 0 .35em;\n    font-size: 1.5em;\n    text-decoration: none; }\n    .nav-links .nav-link:hover {\n      background-color: #00fff2; }\n\n.active_nav {\n  background-color: #00fff2;\n  color: white !important;\n  font-weight: 700; }\n\n.booking-toolbar {\n  height: 10vh;\n  display: flex;\n  width: 100%;\n  background-color: #00504c17;\n  flex: 1;\n  align-items: center;\n  display: flex;\n  justify-content: space-around;\n  padding: 0 2em;\n  color: #3F3F3F;\n  width: 100%; }\n  .booking-toolbar div:nth-child(1) {\n    display: flex;\n    font-size: 1em;\n    line-height: 1.3em;\n    padding: 0 2em; }\n  .booking-toolbar div:nth-child(2) {\n    display: flex;\n    font-size: 1em;\n    line-height: 1.3em; }\n  .booking-toolbar div:nth-child(3) {\n    display: flex;\n    font-size: 1em;\n    line-height: 1.3em;\n    flex: 1; }\n  .booking-toolbar div:nth-child(4) {\n    height: 2em;\n    border-radius: 3px;\n    border: 1px solid #3F3F3F;\n    display: flex;\n    flex-direction: column;\n    margin-right: 3em;\n    padding: 1em;\n    font-size: 1.3em;\n    justify-content: center;\n    transition: all ease-in-out .2s;\n    cursor: pointer; }\n    .booking-toolbar div:nth-child(4):hover {\n      font-size: 1.3em;\n      background-color: #00fff2;\n      color: white; }\n\n.toolbar-input {\n  padding-left: 2.7em;\n  font-family: 'Poppins';\n  font-weight: 500;\n  font-size: 1em;\n  border: none;\n  color: #3F3F3F;\n  background-color: #00504c00;\n  border-bottom: 1px solid black; }\n  .toolbar-input:hover {\n    cursor: pointer !important; }\n\n.toolbar_text {\n  padding: 0 .35em;\n  font-size: 1.5em;\n  text-decoration: none; }\n\n.login {\n  display: flex;\n  flex-direction: column;\n  backdrop-filter: blur(3px);\n  box-shadow: 0 0 15px #000000a1;\n  color: #3F3F3F;\n  height: content;\n  width: content;\n  position: absolute;\n  top: 3em;\n  left: 3em;\n  padding: 2em;\n  border-radius: 5px;\n  transition: all ease-in-out .3s; }\n  .login div {\n    display: flex;\n    flex-direction: column;\n    padding-bottom: .5em; }\n    .login div p {\n      padding: 1em 0; }\n\n#manager_welcome-wrapper {\n  width: 100%;\n  height: 100vh;\n  padding: 10vh 20vw;\n  display: flex;\n  margin: 2em 0; }\n  #manager_welcome-wrapper p {\n    font-size: 2em;\n    text-align: center; }\n\n#sorry_message-wrapper {\n  width: 100%;\n  height: 100vh;\n  padding: 10vh 20vw;\n  display: flex;\n  margin: 2em 0; }\n  #sorry_message-wrapper p {\n    font-size: 2em;\n    text-align: center; }\n\n@media screen {\n  .dashboard_view {\n    overflow-y: scroll;\n    height: 90vh;\n    -ms-overflow-style: none; }\n    .dashboard_view::-webkit-scrollbar {\n      display: none; } }\n\n@media screen and (max-width: 992px) {\n  .dashboard_view {\n    overflow-y: none;\n    height: 100%; } }\n\n@media screen {\n  .dashboard_view-logged_in {\n    overflow-y: scroll;\n    height: 80vh;\n    -ms-overflow-style: none; }\n    .dashboard_view-logged_in::-webkit-scrollbar {\n      display: none; } }\n\n@media screen and (max-width: 992px) {\n  .dashboard_view-logged_in {\n    overflow-y: none;\n    height: 100%; } }\n\n@media screen and (max-width: 600px) {\n  .dashboard_view-logged_in {\n    flex-flow: wrap;\n    width: 100%; } }\n\n#main-content {\n  width: 100%;\n  height: 100vh; }\n\n.main-intro {\n  display: flex; }\n\n.main_card {\n  display: flex;\n  margin: 2em 0;\n  align-items: center; }\n\n.main_image-wrapper {\n  overflow: hidden;\n  object-fit: cover; }\n\n@media screen {\n  .main_image {\n    width: 100%;\n    min-width: 350px;\n    position: relative; } }\n\n@media screen and (max-width: 992px) {\n  .main_image {\n    min-width: 300px; } }\n\n@media screen and (max-width: 600px) {\n  .main_image {\n    min-width: 150px; } }\n\n.main_card-text-wrapper {\n  padding: 2em;\n  min-width: 50%; }\n  @media screen {\n    .main_card-text-wrapper h2 {\n      padding-bottom: 1em;\n      font-size: 4em;\n      font-weight: 700; } }\n  @media screen and (max-width: 992px) {\n    .main_card-text-wrapper h2 {\n      font-size: 2em;\n      font-weight: 700;\n      line-height: normal; } }\n  @media screen and (max-width: 600px) {\n    .main_card-text-wrapper h2 {\n      font-size: 1.5em;\n      font-weight: 700;\n      line-height: normal; } }\n  @media screen {\n    .main_card-text-wrapper p {\n      font-size: 1.3em;\n      line-height: 1.8em;\n      font-weight: 200; } }\n  @media screen and (max-width: 992px) {\n    .main_card-text-wrapper p {\n      font-size: 1.2em;\n      line-height: 1.4em;\n      font-weight: 200; } }\n  @media screen and (max-width: 600px) {\n    .main_card-text-wrapper p {\n      font-size: 1em;\n      line-height: 1.4em;\n      font-weight: 200; } }\n  .main_card-text-wrapper div {\n    width: content;\n    height: 1em;\n    transition: all ease-in-out .5s; }\n    .main_card-text-wrapper div .main-card_text-link {\n      z-index: 10;\n      font-weight: 600;\n      cursor: pointer;\n      transition: all ease-in-out .3s; }\n      .main_card-text-wrapper div .main-card_text-link:hover {\n        color: white;\n        z-index: 0;\n        background-color: #00fff2; }\n\n.result_text-wrapper {\n  padding: 2em;\n  padding-left: 3.3em;\n  min-width: 50%; }\n  .result_text-wrapper h2 {\n    padding-bottom: 1em;\n    font-size: 2em;\n    font-weight: 600; }\n  .result_text-wrapper p {\n    font-size: 1.3em;\n    line-height: 1.8em;\n    font-weight: 200; }\n  .result_text-wrapper div {\n    display: flex;\n    width: content; }\n    .result_text-wrapper div p:nth-child(1) {\n      font-size: 2em;\n      font-weight: 500; }\n    .result_text-wrapper div p:nth-child(2) {\n      display: flex;\n      flex-direction: column;\n      justify-content: center;\n      margin-left: 1em;\n      font-size: .8em;\n      line-height: 1.2em;\n      font-weight: 300; }\n  .result_text-wrapper .result_book-room-link {\n    text-align: center;\n    margin-top: 1em;\n    z-index: 10;\n    font-weight: 400;\n    transition: all ease-in-out .3s;\n    width: 15em;\n    padding: .5em 1em;\n    border-radius: 3px;\n    border: 1px solid #3F3F3F;\n    cursor: pointer; }\n    .result_text-wrapper .result_book-room-link:hover {\n      background-color: #00fff2;\n      color: white; }\n\n.result_card {\n  display: flex;\n  margin: 2em 0;\n  align-items: center; }\n\n.result_image-wrapper {\n  overflow: hidden;\n  object-fit: cover;\n  height: 22em; }\n\n.result_image {\n  width: 100%;\n  min-width: 300px; }\n\n.my_booking-text_wrapper {\n  display: flex;\n  flex-direction: row;\n  padding: 2em;\n  padding-left: 3.3em;\n  min-width: 50%; }\n  .my_booking-text_wrapper div p:nth-child(1) {\n    text-decoration: underline;\n    padding-bottom: 1em;\n    font-size: 1.2em;\n    font-weight: 300; }\n  .my_booking-text_wrapper div p:nth-child(2) {\n    font-size: 1em;\n    line-height: 1.8em;\n    font-weight: 200; }\n  .my_booking-text_wrapper div p:nth-child(3) {\n    font-size: 1em;\n    line-height: 1.8em;\n    font-weight: 200; }\n  .my_booking-text_wrapper div p:nth-child(4) {\n    padding-bottom: .5em;\n    font-size: 1em;\n    line-height: 1.8em;\n    font-weight: 200; }\n  .my_booking-text_wrapper div:nth-child(2) {\n    padding: 0 1em; }\n  .my_booking-text_wrapper div:nth-child(3) {\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    font-weight: 500;\n    font-size: 1.6em;\n    align-items: center; }\n    .my_booking-text_wrapper div:nth-child(3) p {\n      text-decoration: none;\n      color: #3F3F3F; }\n    .my_booking-text_wrapper div:nth-child(3) p:nth-child(2) {\n      color: #3F3F3F;\n      text-align: center;\n      font-weight: 700;\n      line-height: 1em;\n      padding: 5px;\n      border: 1px solid #3F3F3F;\n      border-radius: 3px;\n      transition: all ease-in-out .5s; }\n      .my_booking-text_wrapper div:nth-child(3) p:nth-child(2):hover {\n        background-color: #ff69b4;\n        color: white;\n        cursor: pointer; }\n\n.my-booking_card {\n  display: flex;\n  margin: 2em 0;\n  align-items: center; }\n\n.my-booking_image-wrapper {\n  overflow: hidden;\n  object-fit: cover;\n  height: 22em; }\n\n.my-booking_image {\n  width: 100%;\n  min-width: 300px; }\n\n@media screen {\n  #sidebar {\n    display: flex;\n    flex-direction: column;\n    min-width: 20em;\n    max-width: 20em;\n    color: #cacaca;\n    flex: 1;\n    background-color: #3F3F3F;\n    box-shadow: 24px 0px 20px 20px #000000a6;\n    height: 100vh; } }\n\n@media screen and (max-width: 992px) {\n  #sidebar {\n    display: flex;\n    flex-direction: row;\n    box-shadow: none;\n    color: #cacaca;\n    flex: 1;\n    background-color: #3F3F3F; } }\n\n@media screen and (max-width: 600px) {\n  #sidebar {\n    flex-flow: wrap;\n    width: 100%; } }\n\n#sidebar #sidebar_hotel-info-block {\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  height: 10em;\n  margin-left: 1.5em; }\n  #sidebar #sidebar_hotel-info-block p {\n    margin-top: .5em;\n    align-self: center;\n    font-size: 1.3em;\n    font-weight: 400;\n    line-height: 1.3em; }\n  #sidebar #sidebar_hotel-info-block p:nth-child(2) {\n    font-size: 1em;\n    font-weight: 100;\n    margin-top: .5em;\n    align-self: center; }\n\n#sidebar_customer_stats #customer_stat_title_wrapper {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  font-weight: 600;\n  font-size: 2em; }\n  #sidebar_customer_stats #customer_stat_title_wrapper #customer_stat_title {\n    text-decoration: underline;\n    padding-top: 0;\n    padding-bottom: 1em;\n    margin: 0; }\n  #sidebar_customer_stats #customer_stat_title_wrapper #customer_stat_title_date {\n    text-align: center;\n    line-height: 1.2em; }\n\n.manager_stat_wrapper, .customer_stat_wrapper {\n  display: flex;\n  flex-direction: row;\n  padding: 1.5em 1em;\n  justify-content: space-between;\n  border-bottom: 1px solid #00fff2;\n  margin: 0 20px; }\n  .manager_stat_wrapper p, .customer_stat_wrapper p {\n    font-weight: 600; }\n  .manager_stat_wrapper p:nth-child(2), .customer_stat_wrapper p:nth-child(2) {\n    font-weight: 200; }\n\n#sidebar_manager_stats, #sidebar_customer_stats {\n  display: flex;\n  flex-direction: column; }\n  #sidebar_manager_stats #manager_stat_title_wrapper, #sidebar_customer_stats #manager_stat_title_wrapper {\n    display: flex;\n    flex-direction: column;\n    align-items: center;\n    font-weight: 600;\n    font-size: 2em; }\n  #sidebar_manager_stats #manager_stat_customer_total_wrapper, #sidebar_customer_stats #manager_stat_customer_total_wrapper {\n    border: none; }\n\n.stat_gold {\n  color: gold; }\n\n.pattern_block {\n  align-self: flex-end;\n  height: 100%;\n  width: 40%;\n  color: #00fff2;\n  background: repeating-linear-gradient(-60deg, #00fff2, #00fff2 10px, #3F3F3F 10px, #3F3F3F 20px); }\n\n.pulse_info {\n  animation: pulse ease 1s;\n  animation-iteration-count: 8;\n  animation-direction: alternate; }\n\n@keyframes pulse {\n  0% {\n    color: inherit; }\n  100% {\n    color: #ff69b4; } }\n\n.fade-in-pageLoad {\n  animation: longFadeIn ease 3s; }\n\n@keyframes longFadeIn {\n  0% {\n    filter: blur(10px); }\n  100% {\n    filter: blur(0px); } }\n\n.fade-in {\n  animation: fadeIn ease 1s;\n  -webkit-animation: fadeIn ease 1s;\n  -moz-animation: fadeIn ease 1s;\n  -o-animation: fadeIn ease 1s;\n  -ms-animation: fadeIn ease 1s; }\n\n@keyframes fadeIn {\n  0% {\n    opacity: 0;\n    filter: blur(5px); }\n  100% {\n    opacity: 1;\n    filter: blur(0px); } }\n\n@-moz-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-webkit-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-o-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n@-ms-keyframes fadeIn {\n  0% {\n    opacity: 0; }\n  100% {\n    opacity: 1; } }\n\n.hidden {\n  display: none !important; }\n", ""]);



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

  viewCustomer(userData, name) {
    return new _User__WEBPACK_IMPORTED_MODULE_0__["default"](userData.find(user => user.name === name))
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
let todaysDate = getFormattedDate();

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
  let calDate = todaysDate.replaceAll('/', '-');
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
    loadAvailableRooms(todaysDate);
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
    loadAvailableRooms(todaysDate);
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
  let roomsToRent = user.totalAvailableRooms(bookingData, roomData, todaysDate)
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
  document.querySelector('#manager_stat_title_date').innerText = `${todaysDate}`;
  document.querySelector('#manager_stat_availability').innerText = `${user.totalAvailableRooms(bookingData, roomData, todaysDate)} vacancies`;
  document.querySelector('#manager_stat_total_revenue').innerText = `$${user.totalRevenue(bookingData, roomData, todaysDate).toFixed()}`;
  document.querySelector('#manager_stat_total_occupancy').innerText = `${user.totalPercentOccupied(bookingData, roomData, todaysDate) * 100}%`;
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
      <section tabindex="0" aria-label='booking information' class='my_booking-text_wrapper'>
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
    if (user instanceof _classes_Manager__WEBPACK_IMPORTED_MODULE_16__["default"] && booking.date > todaysDate) {
      document.querySelector(`#booking_total_${i}`).insertAdjacentHTML('beforeend', `
        <p tabindex="0" aria-label='delete customer booking' class='delete_booking_button' value=${booking.id}>DELETE <br>BOOKING</p>
        <span class='hidden'>${name}</span>
      `)
    }
  });
}

function loadAvailableRooms(date, roomType) {
  let selectedDate = getCalendarDate()
  let dashboardAndBookings = getCorrectDashAndBooking(bookingData, name);
  let bookingArray = user.viewAvailableRoomsByType(bookingData, roomData, selectedDate, roomType);
  dashboardAndBookings[0].innerHTML = ''
  if (bookingArray.length === 0) {
    dashboardAndBookings[0].insertAdjacentHTML('beforeend', `
    <div id='sorry_message-wrapper'><p id='sorry_message'>Sorry, there are no ${!roomType ? 'room' : roomType}s availabile for a ${selectedDate} booking</p></div>
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
        <section tabindex="0" aria-label='room information' class='result_text-wrapper'>
        <h2>${room.roomType} #${room.number}</h2>
        <p>${room.numBeds} ${room.numBeds > 1 ? room.bedSize + ' beds' : room.bedSize + ' bed'}, incredible mountain views,
        <br>a fully modern room and bathroom${room.bidet ? ' including a bidet!' : '.'}</p>
        <br>
        <div>
        <p>$${room.costPerNight.toFixed(2)}</p>
        <p>per night<br>excluding taxes and fees</p>
        </div>
        <span><p tabindex="0" aria-label='book room button' id='book_room_link' value='${room.number}' class='result_book-room-link'>BOOK THIS ROOM</p></span>
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
  let bookingDate = getCalendarDate();
  if (event.target.classList.contains('result_book-room-link')) {
    let roomNum = Number(event.target.getAttribute('value'));
    let onSuccess = () => {
      getUpdatedAvailableList()
    }
    user.bookMyRoom(bookingDate, roomNum, onSuccess);
  }
}

function bookRoomManager() {
  let bookingDate = getCalendarDate();
  console.log(bookingDate);
  let name = _classes_domObject__WEBPACK_IMPORTED_MODULE_14__["managerUserSearchInput"].value;
  if (event.target.classList.contains('result_book-room-link') && name !== '') {
    let roomNum = Number(event.target.getAttribute('value'));
    let onSuccess = () => {
      getUpdatedAvailableList()
    }
    user.addCustomerBooking(userData, name, bookingDate, roomNum, onSuccess);
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
  }).then(() => loadAvailableRooms(todaysDate)).then(() => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3MiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvdXJscy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9NYW5hZ2VyLmpzIiwid2VicGFjazovLy8uL3NyYy9jbGFzc2VzL1VzZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NsYXNzZXMvYXBpUmVxdWVzdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2xhc3Nlcy9kb21PYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2Nzcy9iYXNlLnNjc3M/YTIzOCIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvdGVsLWV4dGVyaW9yLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL2hvdGVsLXJvb2Z0b3AuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvaW1hZ2UtYXNzZXRzLmpzIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS1nYXVkeS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLWtpbmZvbGsuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS1raW5nbHkuanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS1tb2Rpc2guanBnIiwid2VicGFjazovLy8uL3NyYy9pbWFnZXMvcm9vbS1zbWFsbC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLXNwYXJzZS5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy9yb29tLXN1aXRlLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20teHRyYXNtYWxsLmpwZyIsIndlYnBhY2s6Ly8vLi9zcmMvaW1hZ2VzL3Jvb20teHRyYXNtYWxsMi5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL2ltYWdlcy91c2VyLXByb2ZpbGUuc3ZnIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrREFBMEMsZ0NBQWdDO0FBQzFFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0VBQXdELGtCQUFrQjtBQUMxRTtBQUNBLHlEQUFpRCxjQUFjO0FBQy9EOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpREFBeUMsaUNBQWlDO0FBQzFFLHdIQUFnSCxtQkFBbUIsRUFBRTtBQUNySTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOzs7QUFHQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsMkJBQTJCLG1CQUFPLENBQUMsd0dBQW1EO0FBQ3RGO0FBQ0EsY0FBYyxRQUFTLE1BQU0sY0FBYyxlQUFlLDJCQUEyQixFQUFFLGdCQUFnQix1Q0FBdUMsc0JBQXNCLGNBQWMsZ0JBQWdCLGdCQUFnQixrQkFBa0IsRUFBRSxVQUFVLHdCQUF3QixFQUFFLDBDQUEwQyxZQUFZLHdCQUF3QixvQkFBb0IsRUFBRSxFQUFFLDBDQUEwQyxZQUFZLHdCQUF3QixvQkFBb0IsRUFBRSxFQUFFLFVBQVUsa0JBQWtCLDJCQUEyQixFQUFFLGtCQUFrQixp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QUNBLEVBQUU7QUFDRjtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEVBQUU7QUFDRjs7QUFFQTtBQUNBLEtBQUssS0FBd0MsRUFBRSxFQUU3Qzs7QUFFRixRQUFRLHNCQUFpQjtBQUN6Qjs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBLEVBQUU7QUFDRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx1REFBdUQ7QUFDdkQ7O0FBRUEsNkJBQTZCLG1CQUFtQjs7QUFFaEQ7O0FBRUE7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7OztBQzlZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsV0FBVyxFQUFFO0FBQ3JELHdDQUF3QyxXQUFXLEVBQUU7O0FBRXJEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0Esc0NBQXNDO0FBQ3RDLEdBQUc7QUFDSDtBQUNBLDhEQUE4RDtBQUM5RDs7QUFFQTtBQUNBO0FBQ0EsRUFBRTs7QUFFRjtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBMEI7QUFDZ0I7O0FBRTNCLHNCQUFzQiw2Q0FBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZUFBZSw2Q0FBSTtBQUNuQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVk7QUFDWjs7QUFFQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFVO0FBQ2Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxzQkFBc0IsR0FBRyxNQUFNLEdBQUcsS0FBSztBQUNyRDtBQUNBOzs7Ozs7Ozs7Ozs7O0FDckVBO0FBQUE7QUFBQTtBQUEwQzs7QUFFM0I7QUFDZiwyQkFBMkI7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBVTtBQUNkOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBLHFFQUFxRTtBQUNyRTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDekRBO0FBQUE7QUFBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxHQUFHOztBQUVIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDbERBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFB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QUFDL0IseUJBQXlCLDBFQUFzQjtBQUMvQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLDBFQUFzQjtBQUMzRCx1QkFBdUIsMEVBQXNCO0FBQzdDLElBQUkscUVBQWlCO0FBQ3JCLEdBQUcsVUFBVSwwRUFBc0I7QUFDbkMscUNBQXFDLDBFQUFzQjtBQUMzRCx1QkFBdUIsMEVBQXNCO0FBQzdDLElBQUkscUVBQWlCO0FBQ3JCLEdBQUc7QUFDSCxJQUFJLHFFQUFpQjtBQUNyQjtBQUNBLEVBQUUsNkRBQVM7QUFDWCIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIikoZmFsc2UpO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIqIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuaHRtbCwgYm9keSB7XFxuICBmb250LWZhbWlseTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcbiAgYmFja2dyb3VuZDogd2hpdGU7XFxuICBtYXJnaW46IDA7XFxuICB3aWR0aDogMTAwJTtcXG4gIG1hcmdpbjogMHB4O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbmJvZHkge1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdzsgfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gICAgYm9keSB7XFxuICAgICAgZmxleC1mbG93OiB3cmFwO1xcbiAgICAgIHdpZHRoOiAxMDAlOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxuICAgIGJvZHkge1xcbiAgICAgIGZsZXgtZmxvdzogd3JhcDtcXG4gICAgICB3aWR0aDogMTAwJTsgfSB9XFxuXFxubWFpbiB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjsgfVxcblxcbiNtYWluX2hlYWRlciB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGZsZXg6IDE7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgYm94LXNoYWRvdzogLTExcHggLTNweCAyMHB4IDBweCBibGFjaztcXG4gIHBhZGRpbmc6IDAgM2VtO1xcbiAgY29sb3I6IGdyYXk7IH1cXG4gICNtYWluX2hlYWRlciBzdmcge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGhlaWdodDogM2VtO1xcbiAgICB3aWR0aDogYXV0bztcXG4gICAgZmlsbDogZ3JheTtcXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zNXMgZWFzZS1pbi1vdXQ7XFxuICAgIG9wYWNpdHk6IDE7IH1cXG4gICAgI21haW5faGVhZGVyIHN2Zzpob3ZlciB7XFxuICAgICAgZmlsbDogIzAwZmZmMjsgfVxcbiAgI21haW5faGVhZGVyIG5hdiB7XFxuICAgIGZsZXg6IDE7IH1cXG4gICNtYWluX2hlYWRlciAucHJvZmlsZS1jb250YWluZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4OiAxOyB9XFxuXFxuLm5hdi1saW5rcyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuICAubmF2LWxpbmtzIC5uYXYtbGluayB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgY29sb3I6IGdyYXk7XFxuICAgIHRyYW5zaXRpb246IGFsbCAuMzVzIGVhc2UtaW4tb3V0O1xcbiAgICBwYWRkaW5nOiAwIC4zNWVtO1xcbiAgICBmb250LXNpemU6IDEuNWVtO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG4gICAgLm5hdi1saW5rcyAubmF2LWxpbms6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZjI7IH1cXG5cXG4uYWN0aXZlX25hdiB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDBmZmYyO1xcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XFxuICBmb250LXdlaWdodDogNzAwOyB9XFxuXFxuLmJvb2tpbmctdG9vbGJhciB7XFxuICBoZWlnaHQ6IDEwdmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgd2lkdGg6IDEwMCU7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1MDRjMTc7XFxuICBmbGV4OiAxO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcXG4gIHBhZGRpbmc6IDAgMmVtO1xcbiAgY29sb3I6ICMzRjNGM0Y7XFxuICB3aWR0aDogMTAwJTsgfVxcbiAgLmJvb2tpbmctdG9vbGJhciBkaXY6bnRoLWNoaWxkKDEpIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcXG4gICAgcGFkZGluZzogMCAyZW07IH1cXG4gIC5ib29raW5nLXRvb2xiYXIgZGl2Om50aC1jaGlsZCgyKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4zZW07IH1cXG4gIC5ib29raW5nLXRvb2xiYXIgZGl2Om50aC1jaGlsZCgzKSB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBsaW5lLWhlaWdodDogMS4zZW07XFxuICAgIGZsZXg6IDE7IH1cXG4gIC5ib29raW5nLXRvb2xiYXIgZGl2Om50aC1jaGlsZCg0KSB7XFxuICAgIGhlaWdodDogMmVtO1xcbiAgICBib3JkZXItcmFkaXVzOiAzcHg7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRjNGM0Y7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIG1hcmdpbi1yaWdodDogM2VtO1xcbiAgICBwYWRkaW5nOiAxZW07XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjJzO1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7IH1cXG4gICAgLmJvb2tpbmctdG9vbGJhciBkaXY6bnRoLWNoaWxkKDQpOmhvdmVyIHtcXG4gICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZjI7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLnRvb2xiYXItaW5wdXQge1xcbiAgcGFkZGluZy1sZWZ0OiAyLjdlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XFxuICBmb250LXdlaWdodDogNTAwO1xcbiAgZm9udC1zaXplOiAxZW07XFxuICBib3JkZXI6IG5vbmU7XFxuICBjb2xvcjogIzNGM0YzRjtcXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDUwNGMwMDtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBibGFjazsgfVxcbiAgLnRvb2xiYXItaW5wdXQ6aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXIgIWltcG9ydGFudDsgfVxcblxcbi50b29sYmFyX3RleHQge1xcbiAgcGFkZGluZzogMCAuMzVlbTtcXG4gIGZvbnQtc2l6ZTogMS41ZW07XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7IH1cXG5cXG4ubG9naW4ge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBiYWNrZHJvcC1maWx0ZXI6IGJsdXIoM3B4KTtcXG4gIGJveC1zaGFkb3c6IDAgMCAxNXB4ICMwMDAwMDBhMTtcXG4gIGNvbG9yOiAjM0YzRjNGO1xcbiAgaGVpZ2h0OiBjb250ZW50O1xcbiAgd2lkdGg6IGNvbnRlbnQ7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICB0b3A6IDNlbTtcXG4gIGxlZnQ6IDNlbTtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuM3M7IH1cXG4gIC5sb2dpbiBkaXYge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTsgfVxcbiAgICAubG9naW4gZGl2IHAge1xcbiAgICAgIHBhZGRpbmc6IDFlbSAwOyB9XFxuXFxuI21hbmFnZXJfd2VsY29tZS13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDEwdmggMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDJlbSAwOyB9XFxuICAjbWFuYWdlcl93ZWxjb21lLXdyYXBwZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMmVtO1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4jc29ycnlfbWVzc2FnZS13cmFwcGVyIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHBhZGRpbmc6IDEwdmggMjB2dztcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDJlbSAwOyB9XFxuICAjc29ycnlfbWVzc2FnZS13cmFwcGVyIHAge1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuQG1lZGlhIHNjcmVlbiB7XFxuICAuZGFzaGJvYXJkX3ZpZXcge1xcbiAgICBvdmVyZmxvdy15OiBzY3JvbGw7XFxuICAgIGhlaWdodDogOTB2aDtcXG4gICAgLW1zLW92ZXJmbG93LXN0eWxlOiBub25lOyB9XFxuICAgIC5kYXNoYm9hcmRfdmlldzo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAuZGFzaGJvYXJkX3ZpZXcge1xcbiAgICBvdmVyZmxvdy15OiBub25lO1xcbiAgICBoZWlnaHQ6IDEwMCU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4ge1xcbiAgLmRhc2hib2FyZF92aWV3LWxvZ2dlZF9pbiB7XFxuICAgIG92ZXJmbG93LXk6IHNjcm9sbDtcXG4gICAgaGVpZ2h0OiA4MHZoO1xcbiAgICAtbXMtb3ZlcmZsb3ctc3R5bGU6IG5vbmU7IH1cXG4gICAgLmRhc2hib2FyZF92aWV3LWxvZ2dlZF9pbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgICAgIGRpc3BsYXk6IG5vbmU7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAuZGFzaGJvYXJkX3ZpZXctbG9nZ2VkX2luIHtcXG4gICAgb3ZlcmZsb3cteTogbm9uZTtcXG4gICAgaGVpZ2h0OiAxMDAlOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgLmRhc2hib2FyZF92aWV3LWxvZ2dlZF9pbiB7XFxuICAgIGZsZXgtZmxvdzogd3JhcDtcXG4gICAgd2lkdGg6IDEwMCU7IH0gfVxcblxcbiNtYWluLWNvbnRlbnQge1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMHZoOyB9XFxuXFxuLm1haW4taW50cm8ge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5tYWluX2NhcmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIG1hcmdpbjogMmVtIDA7XFxuICBhbGlnbi1pdGVtczogY2VudGVyOyB9XFxuXFxuLm1haW5faW1hZ2Utd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7IH1cXG5cXG5AbWVkaWEgc2NyZWVuIHtcXG4gIC5tYWluX2ltYWdlIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIG1pbi13aWR0aDogMzUwcHg7XFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTkycHgpIHtcXG4gIC5tYWluX2ltYWdlIHtcXG4gICAgbWluLXdpZHRoOiAzMDBweDsgfSB9XFxuXFxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gIC5tYWluX2ltYWdlIHtcXG4gICAgbWluLXdpZHRoOiAxNTBweDsgfSB9XFxuXFxuLm1haW5fY2FyZC10ZXh0LXdyYXBwZXIge1xcbiAgcGFkZGluZzogMmVtO1xcbiAgbWluLXdpZHRoOiA1MCU7IH1cXG4gIEBtZWRpYSBzY3JlZW4ge1xcbiAgICAubWFpbl9jYXJkLXRleHQtd3JhcHBlciBoMiB7XFxuICAgICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgICBmb250LXNpemU6IDRlbTtcXG4gICAgICBmb250LXdlaWdodDogNzAwOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAgIC5tYWluX2NhcmQtdGV4dC13cmFwcGVyIGgyIHtcXG4gICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiBub3JtYWw7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLm1haW5fY2FyZC10ZXh0LXdyYXBwZXIgaDIge1xcbiAgICAgIGZvbnQtc2l6ZTogMS41ZW07XFxuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gICAgICBsaW5lLWhlaWdodDogbm9ybWFsOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4ge1xcbiAgICAubWFpbl9jYXJkLXRleHQtd3JhcHBlciBwIHtcXG4gICAgICBmb250LXNpemU6IDEuM2VtO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gICAgICBmb250LXdlaWdodDogMjAwOyB9IH1cXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAgIC5tYWluX2NhcmQtdGV4dC13cmFwcGVyIHAge1xcbiAgICAgIGZvbnQtc2l6ZTogMS4yZW07XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7IH0gfVxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcXG4gICAgLm1haW5fY2FyZC10ZXh0LXdyYXBwZXIgcCB7XFxuICAgICAgZm9udC1zaXplOiAxZW07XFxuICAgICAgbGluZS1oZWlnaHQ6IDEuNGVtO1xcbiAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7IH0gfVxcbiAgLm1haW5fY2FyZC10ZXh0LXdyYXBwZXIgZGl2IHtcXG4gICAgd2lkdGg6IGNvbnRlbnQ7XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjVzOyB9XFxuICAgIC5tYWluX2NhcmQtdGV4dC13cmFwcGVyIGRpdiAubWFpbi1jYXJkX3RleHQtbGluayB7XFxuICAgICAgei1pbmRleDogMTA7XFxuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgICAgdHJhbnNpdGlvbjogYWxsIGVhc2UtaW4tb3V0IC4zczsgfVxcbiAgICAgIC5tYWluX2NhcmQtdGV4dC13cmFwcGVyIGRpdiAubWFpbi1jYXJkX3RleHQtbGluazpob3ZlciB7XFxuICAgICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgICB6LWluZGV4OiAwO1xcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwZmZmMjsgfVxcblxcbi5yZXN1bHRfdGV4dC13cmFwcGVyIHtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHBhZGRpbmctbGVmdDogMy4zZW07XFxuICBtaW4td2lkdGg6IDUwJTsgfVxcbiAgLnJlc3VsdF90ZXh0LXdyYXBwZXIgaDIge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDYwMDsgfVxcbiAgLnJlc3VsdF90ZXh0LXdyYXBwZXIgcCB7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgfVxcbiAgLnJlc3VsdF90ZXh0LXdyYXBwZXIgZGl2IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgd2lkdGg6IGNvbnRlbnQ7IH1cXG4gICAgLnJlc3VsdF90ZXh0LXdyYXBwZXIgZGl2IHA6bnRoLWNoaWxkKDEpIHtcXG4gICAgICBmb250LXNpemU6IDJlbTtcXG4gICAgICBmb250LXdlaWdodDogNTAwOyB9XFxuICAgIC5yZXN1bHRfdGV4dC13cmFwcGVyIGRpdiBwOm50aC1jaGlsZCgyKSB7XFxuICAgICAgZGlzcGxheTogZmxleDtcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICAgIG1hcmdpbi1sZWZ0OiAxZW07XFxuICAgICAgZm9udC1zaXplOiAuOGVtO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTtcXG4gICAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAucmVzdWx0X3RleHQtd3JhcHBlciAucmVzdWx0X2Jvb2stcm9vbS1saW5rIHtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiAxZW07XFxuICAgIHotaW5kZXg6IDEwO1xcbiAgICBmb250LXdlaWdodDogNDAwO1xcbiAgICB0cmFuc2l0aW9uOiBhbGwgZWFzZS1pbi1vdXQgLjNzO1xcbiAgICB3aWR0aDogMTVlbTtcXG4gICAgcGFkZGluZzogLjVlbSAxZW07XFxuICAgIGJvcmRlci1yYWRpdXM6IDNweDtcXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzNGM0YzRjtcXG4gICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuICAgIC5yZXN1bHRfdGV4dC13cmFwcGVyIC5yZXN1bHRfYm9vay1yb29tLWxpbms6aG92ZXIge1xcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMGZmZjI7XFxuICAgICAgY29sb3I6IHdoaXRlOyB9XFxuXFxuLnJlc3VsdF9jYXJkIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBtYXJnaW46IDJlbSAwO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbi5yZXN1bHRfaW1hZ2Utd3JhcHBlciB7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxuICBoZWlnaHQ6IDIyZW07IH1cXG5cXG4ucmVzdWx0X2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAzMDBweDsgfVxcblxcbi5teV9ib29raW5nLXRleHRfd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHBhZGRpbmctbGVmdDogMy4zZW07XFxuICBtaW4td2lkdGg6IDUwJTsgfVxcbiAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdiBwOm50aC1jaGlsZCgxKSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwYWRkaW5nLWJvdHRvbTogMWVtO1xcbiAgICBmb250LXNpemU6IDEuMmVtO1xcbiAgICBmb250LXdlaWdodDogMzAwOyB9XFxuICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2IHA6bnRoLWNoaWxkKDIpIHtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgfVxcbiAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdiBwOm50aC1jaGlsZCgzKSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBsaW5lLWhlaWdodDogMS44ZW07XFxuICAgIGZvbnQtd2VpZ2h0OiAyMDA7IH1cXG4gIC5teV9ib29raW5nLXRleHRfd3JhcHBlciBkaXYgcDpudGgtY2hpbGQoNCkge1xcbiAgICBwYWRkaW5nLWJvdHRvbTogLjVlbTtcXG4gICAgZm9udC1zaXplOiAxZW07XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjhlbTtcXG4gICAgZm9udC13ZWlnaHQ6IDIwMDsgfVxcbiAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdjpudGgtY2hpbGQoMikge1xcbiAgICBwYWRkaW5nOiAwIDFlbTsgfVxcbiAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdjpudGgtY2hpbGQoMykge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXG4gICAgZm9udC1zaXplOiAxLjZlbTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcbiAgICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2Om50aC1jaGlsZCgzKSBwIHtcXG4gICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgICAgY29sb3I6ICMzRjNGM0Y7IH1cXG4gICAgLm15X2Jvb2tpbmctdGV4dF93cmFwcGVyIGRpdjpudGgtY2hpbGQoMykgcDpudGgtY2hpbGQoMikge1xcbiAgICAgIGNvbG9yOiAjM0YzRjNGO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgICBmb250LXdlaWdodDogNzAwO1xcbiAgICAgIGxpbmUtaGVpZ2h0OiAxZW07XFxuICAgICAgcGFkZGluZzogNXB4O1xcbiAgICAgIGJvcmRlcjogMXB4IHNvbGlkICMzRjNGM0Y7XFxuICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xcbiAgICAgIHRyYW5zaXRpb246IGFsbCBlYXNlLWluLW91dCAuNXM7IH1cXG4gICAgICAubXlfYm9va2luZy10ZXh0X3dyYXBwZXIgZGl2Om50aC1jaGlsZCgzKSBwOm50aC1jaGlsZCgyKTpob3ZlciB7XFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmY2OWI0O1xcbiAgICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyOyB9XFxuXFxuLm15LWJvb2tpbmdfY2FyZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgbWFyZ2luOiAyZW0gMDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4ubXktYm9va2luZ19pbWFnZS13cmFwcGVyIHtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIGhlaWdodDogMjJlbTsgfVxcblxcbi5teS1ib29raW5nX2ltYWdlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWluLXdpZHRoOiAzMDBweDsgfVxcblxcbkBtZWRpYSBzY3JlZW4ge1xcbiAgI3NpZGViYXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBtaW4td2lkdGg6IDIwZW07XFxuICAgIG1heC13aWR0aDogMjBlbTtcXG4gICAgY29sb3I6ICNjYWNhY2E7XFxuICAgIGZsZXg6IDE7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzRjNGM0Y7XFxuICAgIGJveC1zaGFkb3c6IDI0cHggMHB4IDIwcHggMjBweCAjMDAwMDAwYTY7XFxuICAgIGhlaWdodDogMTAwdmg7IH0gfVxcblxcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk5MnB4KSB7XFxuICAjc2lkZWJhciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICAgIGJveC1zaGFkb3c6IG5vbmU7XFxuICAgIGNvbG9yOiAjY2FjYWNhO1xcbiAgICBmbGV4OiAxO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM0YzRjNGOyB9IH1cXG5cXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xcbiAgI3NpZGViYXIge1xcbiAgICBmbGV4LWZsb3c6IHdyYXA7XFxuICAgIHdpZHRoOiAxMDAlOyB9IH1cXG5cXG4jc2lkZWJhciAjc2lkZWJhcl9ob3RlbC1pbmZvLWJsb2NrIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgaGVpZ2h0OiAxMGVtO1xcbiAgbWFyZ2luLWxlZnQ6IDEuNWVtOyB9XFxuICAjc2lkZWJhciAjc2lkZWJhcl9ob3RlbC1pbmZvLWJsb2NrIHAge1xcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxuICAgIGZvbnQtc2l6ZTogMS4zZW07XFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTsgfVxcbiAgI3NpZGViYXIgI3NpZGViYXJfaG90ZWwtaW5mby1ibG9jayBwOm50aC1jaGlsZCgyKSB7XFxuICAgIGZvbnQtc2l6ZTogMWVtO1xcbiAgICBmb250LXdlaWdodDogMTAwO1xcbiAgICBtYXJnaW4tdG9wOiAuNWVtO1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7IH1cXG5cXG4jc2lkZWJhcl9jdXN0b21lcl9zdGF0cyAjY3VzdG9tZXJfc3RhdF90aXRsZV93cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxuICBmb250LXNpemU6IDJlbTsgfVxcbiAgI3NpZGViYXJfY3VzdG9tZXJfc3RhdHMgI2N1c3RvbWVyX3N0YXRfdGl0bGVfd3JhcHBlciAjY3VzdG9tZXJfc3RhdF90aXRsZSB7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBwYWRkaW5nLXRvcDogMDtcXG4gICAgcGFkZGluZy1ib3R0b206IDFlbTtcXG4gICAgbWFyZ2luOiAwOyB9XFxuICAjc2lkZWJhcl9jdXN0b21lcl9zdGF0cyAjY3VzdG9tZXJfc3RhdF90aXRsZV93cmFwcGVyICNjdXN0b21lcl9zdGF0X3RpdGxlX2RhdGUge1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjJlbTsgfVxcblxcbi5tYW5hZ2VyX3N0YXRfd3JhcHBlciwgLmN1c3RvbWVyX3N0YXRfd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIHBhZGRpbmc6IDEuNWVtIDFlbTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjMDBmZmYyO1xcbiAgbWFyZ2luOiAwIDIwcHg7IH1cXG4gIC5tYW5hZ2VyX3N0YXRfd3JhcHBlciBwLCAuY3VzdG9tZXJfc3RhdF93cmFwcGVyIHAge1xcbiAgICBmb250LXdlaWdodDogNjAwOyB9XFxuICAubWFuYWdlcl9zdGF0X3dyYXBwZXIgcDpudGgtY2hpbGQoMiksIC5jdXN0b21lcl9zdGF0X3dyYXBwZXIgcDpudGgtY2hpbGQoMikge1xcbiAgICBmb250LXdlaWdodDogMjAwOyB9XFxuXFxuI3NpZGViYXJfbWFuYWdlcl9zdGF0cywgI3NpZGViYXJfY3VzdG9tZXJfc3RhdHMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IH1cXG4gICNzaWRlYmFyX21hbmFnZXJfc3RhdHMgI21hbmFnZXJfc3RhdF90aXRsZV93cmFwcGVyLCAjc2lkZWJhcl9jdXN0b21lcl9zdGF0cyAjbWFuYWdlcl9zdGF0X3RpdGxlX3dyYXBwZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBmb250LXdlaWdodDogNjAwO1xcbiAgICBmb250LXNpemU6IDJlbTsgfVxcbiAgI3NpZGViYXJfbWFuYWdlcl9zdGF0cyAjbWFuYWdlcl9zdGF0X2N1c3RvbWVyX3RvdGFsX3dyYXBwZXIsICNzaWRlYmFyX2N1c3RvbWVyX3N0YXRzICNtYW5hZ2VyX3N0YXRfY3VzdG9tZXJfdG90YWxfd3JhcHBlciB7XFxuICAgIGJvcmRlcjogbm9uZTsgfVxcblxcbi5zdGF0X2dvbGQge1xcbiAgY29sb3I6IGdvbGQ7IH1cXG5cXG4ucGF0dGVybl9ibG9jayB7XFxuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA0MCU7XFxuICBjb2xvcjogIzAwZmZmMjtcXG4gIGJhY2tncm91bmQ6IHJlcGVhdGluZy1saW5lYXItZ3JhZGllbnQoLTYwZGVnLCAjMDBmZmYyLCAjMDBmZmYyIDEwcHgsICMzRjNGM0YgMTBweCwgIzNGM0YzRiAyMHB4KTsgfVxcblxcbi5wdWxzZV9pbmZvIHtcXG4gIGFuaW1hdGlvbjogcHVsc2UgZWFzZSAxcztcXG4gIGFuaW1hdGlvbi1pdGVyYXRpb24tY291bnQ6IDg7XFxuICBhbmltYXRpb24tZGlyZWN0aW9uOiBhbHRlcm5hdGU7IH1cXG5cXG5Aa2V5ZnJhbWVzIHB1bHNlIHtcXG4gIDAlIHtcXG4gICAgY29sb3I6IGluaGVyaXQ7IH1cXG4gIDEwMCUge1xcbiAgICBjb2xvcjogI2ZmNjliNDsgfSB9XFxuXFxuLmZhZGUtaW4tcGFnZUxvYWQge1xcbiAgYW5pbWF0aW9uOiBsb25nRmFkZUluIGVhc2UgM3M7IH1cXG5cXG5Aa2V5ZnJhbWVzIGxvbmdGYWRlSW4ge1xcbiAgMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMTBweCk7IH1cXG4gIDEwMCUge1xcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTsgfSB9XFxuXFxuLmZhZGUtaW4ge1xcbiAgYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAxcztcXG4gIC13ZWJraXQtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAxcztcXG4gIC1tb3otYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAxcztcXG4gIC1vLWFuaW1hdGlvbjogZmFkZUluIGVhc2UgMXM7XFxuICAtbXMtYW5pbWF0aW9uOiBmYWRlSW4gZWFzZSAxczsgfVxcblxcbkBrZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDtcXG4gICAgZmlsdGVyOiBibHVyKDVweCk7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxO1xcbiAgICBmaWx0ZXI6IGJsdXIoMHB4KTsgfSB9XFxuXFxuQC1tb3ota2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG5ALXdlYmtpdC1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkAtby1rZXlmcmFtZXMgZmFkZUluIHtcXG4gIDAlIHtcXG4gICAgb3BhY2l0eTogMDsgfVxcbiAgMTAwJSB7XFxuICAgIG9wYWNpdHk6IDE7IH0gfVxcblxcbkAtbXMta2V5ZnJhbWVzIGZhZGVJbiB7XFxuICAwJSB7XFxuICAgIG9wYWNpdHk6IDA7IH1cXG4gIDEwMCUge1xcbiAgICBvcGFjaXR5OiAxOyB9IH1cXG5cXG4uaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDsgfVxcblwiLCBcIlwiXSk7XG5cbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiAnQG1lZGlhICcgKyBpdGVtWzJdICsgJ3snICsgY29udGVudCArICd9JztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBjb250ZW50O1xuICAgICAgfVxuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGl0ZW0gPSBtb2R1bGVzW2ldOyAvLyBza2lwIGFscmVhZHkgaW1wb3J0ZWQgbW9kdWxlXG4gICAgICAvLyB0aGlzIGltcGxlbWVudGF0aW9uIGlzIG5vdCAxMDAlIHBlcmZlY3QgZm9yIHdlaXJkIG1lZGlhIHF1ZXJ5IGNvbWJpbmF0aW9uc1xuICAgICAgLy8gd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuICAgICAgLy8gSSBob3BlIHRoaXMgd2lsbCBuZXZlciBvY2N1ciAoSGV5IHRoaXMgd2F5IHdlIGhhdmUgc21hbGxlciBidW5kbGVzKVxuXG4gICAgICBpZiAoaXRlbVswXSA9PSBudWxsIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGlmIChtZWRpYVF1ZXJ5ICYmICFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSAnKCcgKyBpdGVtWzJdICsgJykgYW5kICgnICsgbWVkaWFRdWVyeSArICcpJztcbiAgICAgICAgfVxuXG4gICAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICAgIH1cbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuICcvKiMgc291cmNlVVJMPScgKyBjc3NNYXBwaW5nLnNvdXJjZVJvb3QgKyBzb3VyY2UgKyAnICovJztcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSAnc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsJyArIGJhc2U2NDtcbiAgcmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn0iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG52YXIgc3R5bGVzSW5Eb20gPSB7fTtcblxudmFyXHRtZW1vaXplID0gZnVuY3Rpb24gKGZuKSB7XG5cdHZhciBtZW1vO1xuXG5cdHJldHVybiBmdW5jdGlvbiAoKSB7XG5cdFx0aWYgKHR5cGVvZiBtZW1vID09PSBcInVuZGVmaW5lZFwiKSBtZW1vID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcblx0XHRyZXR1cm4gbWVtbztcblx0fTtcbn07XG5cbnZhciBpc09sZElFID0gbWVtb2l6ZShmdW5jdGlvbiAoKSB7XG5cdC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG5cdC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcblx0Ly8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuXHQvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcblx0Ly8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG5cdHJldHVybiB3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYjtcbn0pO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gKHRhcmdldCwgcGFyZW50KSB7XG4gIGlmIChwYXJlbnQpe1xuICAgIHJldHVybiBwYXJlbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpO1xuICB9XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0LCBwYXJlbnQpIHtcbiAgICAgICAgICAgICAgICAvLyBJZiBwYXNzaW5nIGZ1bmN0aW9uIGluIG9wdGlvbnMsIHRoZW4gdXNlIGl0IGZvciByZXNvbHZlIFwiaGVhZFwiIGVsZW1lbnQuXG4gICAgICAgICAgICAgICAgLy8gVXNlZnVsIGZvciBTaGFkb3cgUm9vdCBzdHlsZSBpLmVcbiAgICAgICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAgICAgLy8gICBpbnNlcnRJbnRvOiBmdW5jdGlvbiAoKSB7IHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI2Zvb1wiKS5zaGFkb3dSb290IH1cbiAgICAgICAgICAgICAgICAvLyB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0YXJnZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHZhciBzdHlsZVRhcmdldCA9IGdldFRhcmdldC5jYWxsKHRoaXMsIHRhcmdldCwgcGFyZW50KTtcblx0XHRcdC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cdFx0XHRpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0Ly8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcblx0XHRcdFx0XHQvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG5cdFx0XHRcdH0gY2F0Y2goZSkge1xuXHRcdFx0XHRcdHN0eWxlVGFyZ2V0ID0gbnVsbDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0bWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG5cdFx0fVxuXHRcdHJldHVybiBtZW1vW3RhcmdldF1cblx0fTtcbn0pKCk7XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyXHRzaW5nbGV0b25Db3VudGVyID0gMDtcbnZhclx0c3R5bGVzSW5zZXJ0ZWRBdFRvcCA9IFtdO1xuXG52YXJcdGZpeFVybHMgPSByZXF1aXJlKFwiLi91cmxzXCIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uKGxpc3QsIG9wdGlvbnMpIHtcblx0aWYgKHR5cGVvZiBERUJVRyAhPT0gXCJ1bmRlZmluZWRcIiAmJiBERUJVRykge1xuXHRcdGlmICh0eXBlb2YgZG9jdW1lbnQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBFcnJvcihcIlRoZSBzdHlsZS1sb2FkZXIgY2Fubm90IGJlIHVzZWQgaW4gYSBub24tYnJvd3NlciBlbnZpcm9ubWVudFwiKTtcblx0fVxuXG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdG9wdGlvbnMuYXR0cnMgPSB0eXBlb2Ygb3B0aW9ucy5hdHRycyA9PT0gXCJvYmplY3RcIiA/IG9wdGlvbnMuYXR0cnMgOiB7fTtcblxuXHQvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cblx0Ly8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXHRpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gXCJib29sZWFuXCIpIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIDxoZWFkPiBlbGVtZW50XG4gICAgICAgIGlmICghb3B0aW9ucy5pbnNlcnRJbnRvKSBvcHRpb25zLmluc2VydEludG8gPSBcImhlYWRcIjtcblxuXHQvLyBCeSBkZWZhdWx0LCBhZGQgPHN0eWxlPiB0YWdzIHRvIHRoZSBib3R0b20gb2YgdGhlIHRhcmdldFxuXHRpZiAoIW9wdGlvbnMuaW5zZXJ0QXQpIG9wdGlvbnMuaW5zZXJ0QXQgPSBcImJvdHRvbVwiO1xuXG5cdHZhciBzdHlsZXMgPSBsaXN0VG9TdHlsZXMobGlzdCwgb3B0aW9ucyk7XG5cblx0YWRkU3R5bGVzVG9Eb20oc3R5bGVzLCBvcHRpb25zKTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gdXBkYXRlIChuZXdMaXN0KSB7XG5cdFx0dmFyIG1heVJlbW92ZSA9IFtdO1xuXG5cdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gc3R5bGVzW2ldO1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRcdGRvbVN0eWxlLnJlZnMtLTtcblx0XHRcdG1heVJlbW92ZS5wdXNoKGRvbVN0eWxlKTtcblx0XHR9XG5cblx0XHRpZihuZXdMaXN0KSB7XG5cdFx0XHR2YXIgbmV3U3R5bGVzID0gbGlzdFRvU3R5bGVzKG5ld0xpc3QsIG9wdGlvbnMpO1xuXHRcdFx0YWRkU3R5bGVzVG9Eb20obmV3U3R5bGVzLCBvcHRpb25zKTtcblx0XHR9XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1heVJlbW92ZS5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGRvbVN0eWxlID0gbWF5UmVtb3ZlW2ldO1xuXG5cdFx0XHRpZihkb21TdHlsZS5yZWZzID09PSAwKSB7XG5cdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIGRvbVN0eWxlLnBhcnRzW2pdKCk7XG5cblx0XHRcdFx0ZGVsZXRlIHN0eWxlc0luRG9tW2RvbVN0eWxlLmlkXTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG59O1xuXG5mdW5jdGlvbiBhZGRTdHlsZXNUb0RvbSAoc3R5bGVzLCBvcHRpb25zKSB7XG5cdGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0dmFyIGRvbVN0eWxlID0gc3R5bGVzSW5Eb21baXRlbS5pZF07XG5cblx0XHRpZihkb21TdHlsZSkge1xuXHRcdFx0ZG9tU3R5bGUucmVmcysrO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgZG9tU3R5bGUucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHNbal0oaXRlbS5wYXJ0c1tqXSk7XG5cdFx0XHR9XG5cblx0XHRcdGZvcig7IGogPCBpdGVtLnBhcnRzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdGRvbVN0eWxlLnBhcnRzLnB1c2goYWRkU3R5bGUoaXRlbS5wYXJ0c1tqXSwgb3B0aW9ucykpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgcGFydHMgPSBbXTtcblxuXHRcdFx0Zm9yKHZhciBqID0gMDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0cGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cblx0XHRcdHN0eWxlc0luRG9tW2l0ZW0uaWRdID0ge2lkOiBpdGVtLmlkLCByZWZzOiAxLCBwYXJ0czogcGFydHN9O1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBsaXN0VG9TdHlsZXMgKGxpc3QsIG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlcyA9IFtdO1xuXHR2YXIgbmV3U3R5bGVzID0ge307XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGl0ZW0gPSBsaXN0W2ldO1xuXHRcdHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuXHRcdHZhciBjc3MgPSBpdGVtWzFdO1xuXHRcdHZhciBtZWRpYSA9IGl0ZW1bMl07XG5cdFx0dmFyIHNvdXJjZU1hcCA9IGl0ZW1bM107XG5cdFx0dmFyIHBhcnQgPSB7Y3NzOiBjc3MsIG1lZGlhOiBtZWRpYSwgc291cmNlTWFwOiBzb3VyY2VNYXB9O1xuXG5cdFx0aWYoIW5ld1N0eWxlc1tpZF0pIHN0eWxlcy5wdXNoKG5ld1N0eWxlc1tpZF0gPSB7aWQ6IGlkLCBwYXJ0czogW3BhcnRdfSk7XG5cdFx0ZWxzZSBuZXdTdHlsZXNbaWRdLnBhcnRzLnB1c2gocGFydCk7XG5cdH1cblxuXHRyZXR1cm4gc3R5bGVzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQgKG9wdGlvbnMsIHN0eWxlKSB7XG5cdHZhciB0YXJnZXQgPSBnZXRFbGVtZW50KG9wdGlvbnMuaW5zZXJ0SW50bylcblxuXHRpZiAoIXRhcmdldCkge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0SW50bycgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuXHR9XG5cblx0dmFyIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcFtzdHlsZXNJbnNlcnRlZEF0VG9wLmxlbmd0aCAtIDFdO1xuXG5cdGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcInRvcFwiKSB7XG5cdFx0aWYgKCFsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcCkge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgdGFyZ2V0LmZpcnN0Q2hpbGQpO1xuXHRcdH0gZWxzZSBpZiAobGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpIHtcblx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoc3R5bGUsIGxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wLm5leHRTaWJsaW5nKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0XHR9XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5wdXNoKHN0eWxlKTtcblx0fSBlbHNlIGlmIChvcHRpb25zLmluc2VydEF0ID09PSBcImJvdHRvbVwiKSB7XG5cdFx0dGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcblx0fSBlbHNlIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnRBdCA9PT0gXCJvYmplY3RcIiAmJiBvcHRpb25zLmluc2VydEF0LmJlZm9yZSkge1xuXHRcdHZhciBuZXh0U2libGluZyA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRBdC5iZWZvcmUsIHRhcmdldCk7XG5cdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdHRocm93IG5ldyBFcnJvcihcIltTdHlsZSBMb2FkZXJdXFxuXFxuIEludmFsaWQgdmFsdWUgZm9yIHBhcmFtZXRlciAnaW5zZXJ0QXQnICgnb3B0aW9ucy5pbnNlcnRBdCcpIGZvdW5kLlxcbiBNdXN0IGJlICd0b3AnLCAnYm90dG9tJywgb3IgT2JqZWN0LlxcbiAoaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIjaW5zZXJ0YXQpXFxuXCIpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudCAoc3R5bGUpIHtcblx0aWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHJldHVybiBmYWxzZTtcblx0c3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG5cblx0dmFyIGlkeCA9IHN0eWxlc0luc2VydGVkQXRUb3AuaW5kZXhPZihzdHlsZSk7XG5cdGlmKGlkeCA+PSAwKSB7XG5cdFx0c3R5bGVzSW5zZXJ0ZWRBdFRvcC5zcGxpY2UoaWR4LCAxKTtcblx0fVxufVxuXG5mdW5jdGlvbiBjcmVhdGVTdHlsZUVsZW1lbnQgKG9wdGlvbnMpIHtcblx0dmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cblx0aWYob3B0aW9ucy5hdHRycy5ub25jZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIG5vbmNlID0gZ2V0Tm9uY2UoKTtcblx0XHRpZiAobm9uY2UpIHtcblx0XHRcdG9wdGlvbnMuYXR0cnMubm9uY2UgPSBub25jZTtcblx0XHR9XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBnZXROb25jZSgpIHtcblx0aWYgKHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdHJldHVybiBfX3dlYnBhY2tfbm9uY2VfXztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUgKG9iaiwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGUsIHVwZGF0ZSwgcmVtb3ZlLCByZXN1bHQ7XG5cblx0Ly8gSWYgYSB0cmFuc2Zvcm0gZnVuY3Rpb24gd2FzIGRlZmluZWQsIHJ1biBpdCBvbiB0aGUgY3NzXG5cdGlmIChvcHRpb25zLnRyYW5zZm9ybSAmJiBvYmouY3NzKSB7XG5cdCAgICByZXN1bHQgPSB0eXBlb2Ygb3B0aW9ucy50cmFuc2Zvcm0gPT09ICdmdW5jdGlvbidcblx0XHQgPyBvcHRpb25zLnRyYW5zZm9ybShvYmouY3NzKSBcblx0XHQgOiBvcHRpb25zLnRyYW5zZm9ybS5kZWZhdWx0KG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJpbXBvcnQgVXNlciBmcm9tICcuL1VzZXInO1xuaW1wb3J0IHsgYXBpUmVxdWVzdCB9IGZyb20gJy4vYXBpUmVxdWVzdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1hbmFnZXIgZXh0ZW5kcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEpIHtcbiAgICBzdXBlcih1c2VyRGF0YSlcbiAgICB0aGlzLmlkID0gMDtcbiAgICB0aGlzLm5hbWUgPSAnTUFOQUdFUidcbiAgfVxuXG4gIHRvdGFsQXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKSB7XG4gICAgcmV0dXJuIHRoaXMudmlld0F2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSkubGVuZ3RoXG4gIH1cblxuICB0b3RhbFJldmVudWUoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKSB7XG4gICAgcmV0dXJuIE51bWJlcih0aGlzLnZpZXdVbmF2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSlcbiAgICAgIC5yZWR1Y2UoKHRvdGFsUmV2ZW51ZSwgcm9vbSkgPT4ge1xuICAgICAgICB0b3RhbFJldmVudWUgKz0gcm9vbS5jb3N0UGVyTmlnaHQ7XG4gICAgICAgIHJldHVybiB0b3RhbFJldmVudWVcbiAgICAgIH0sIDApLnRvRml4ZWQoMikpXG4gIH1cblxuICB0b3RhbFBlcmNlbnRPY2N1cGllZChib29raW5nRGF0YSwgcm9vbURhdGEsIGRhdGUpIHtcbiAgICByZXR1cm4gKHRoaXMudmlld1VuYXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKS5sZW5ndGggL1xuICAgIHJvb21EYXRhLmxlbmd0aCkudG9GaXhlZCgyKVxuICB9XG5cbiAgdmlld0N1c3RvbWVyKHVzZXJEYXRhLCBuYW1lKSB7XG4gICAgcmV0dXJuIG5ldyBVc2VyKHVzZXJEYXRhLmZpbmQodXNlciA9PiB1c2VyLm5hbWUgPT09IG5hbWUpKVxuICB9XG5cbiAgdmlld0N1c3RvbWVyQm9va2luZ3MoYm9va2luZ0RhdGEsIHVzZXJEYXRhLCBuYW1lKSB7XG4gICAgbGV0IGN1c3RvbWVyID0gdGhpcy52aWV3Q3VzdG9tZXIodXNlckRhdGEsIG5hbWUpO1xuICAgIHJldHVybiBjdXN0b21lci52aWV3TXlCb29raW5ncyhib29raW5nRGF0YSk7XG4gIH1cblxuICB2aWV3Q3VzdG9tZXJJbmZvKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgdXNlckRhdGEsIG5hbWUpIHtcbiAgICBsZXQgY3VzdG9tZXIgPSB0aGlzLnZpZXdDdXN0b21lcih1c2VyRGF0YSwgbmFtZSk7XG4gICAgbGV0IGJvb2tpbmdzID0gY3VzdG9tZXIudmlld015Qm9va2luZ3MoYm9va2luZ0RhdGEpO1xuICAgIGxldCB0b3RhbCA9IGN1c3RvbWVyLnZpZXdNeVRvdGFsKGJvb2tpbmdEYXRhLCByb29tRGF0YSk7XG4gICAgcmV0dXJuIHtpZDogY3VzdG9tZXIuaWQsIG5hbWU6IGN1c3RvbWVyLm5hbWUsIGJvb2tpbmdIaXN0b3J5OiBib29raW5ncywgdG90YWxTcGVudDogdG90YWx9XG4gIH1cblxuICBhZGRDdXN0b21lckJvb2tpbmcodXNlckRhdGEsIG5hbWUsIGRhdGUsIHJvb21OdW1iZXIsIG9uU3VjY2VzcykgeyAvL1RERCBzZWUgaWYgQVBJIGNhbGwgaXMgbWFkZVxuICAgIGxldCBjdXN0b21lciA9IHRoaXMudmlld0N1c3RvbWVyKHVzZXJEYXRhLCBuYW1lKTtcbiAgICByZXR1cm4gY3VzdG9tZXIuYm9va015Um9vbShkYXRlLCByb29tTnVtYmVyLCBvblN1Y2Nlc3MpO1xuICB9XG5cbiAgZGVsZXRlQ3VzdG9tZXJCb29raW5nKGJvb2tpbmdEYXRhLCBib29raW5nSUQsIG9uU3VjY2Vzcykge1xuICAgIGxldCBib29raW5nID1cbiAgICAgIHtcbiAgICAgICAgXCJpZFwiOiBOdW1iZXIoYm9va2luZ0lEKVxuICAgICAgfVxuICAgIGFwaVJlcXVlc3QuZGVsZXRlQm9va2luZyhib29raW5nLCBvblN1Y2Nlc3MpO1xuICB9XG5cbiAgZ2V0RGF0ZSgpIHtcbiAgICBsZXQgbmV3RGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IG1vbnRoID0gbmV3RGF0ZS5nZXRNb250aCgpICsgMTtcbiAgICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xuXG4gICAgaWYgKGRhdGUudG9TdHJpbmcoKS5sZW5ndGggPCAyKSB7XG4gICAgICBkYXRlID0gJzAnICsgZGF0ZVxuICAgIH1cbiAgICBpZiAobW9udGgudG9TdHJpbmcoKS5sZW5ndGggPCAyKSB7XG4gICAgICBtb250aCA9ICcwJyArIG1vbnRoXG4gICAgfVxuICAgIHJldHVybiBgJHtuZXdEYXRlLmdldEZ1bGxZZWFyKCl9LyR7bW9udGh9LyR7ZGF0ZX1gXG4gIH1cbn1cbiIsImltcG9ydCB7IGFwaVJlcXVlc3QgfSBmcm9tICcuL2FwaVJlcXVlc3QnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVc2VyIHtcbiAgY29uc3RydWN0b3IodXNlckRhdGEgPSB7fSkge1xuICAgIHRoaXMuaWQgPSB1c2VyRGF0YS5pZCB8fCA3Nzc7XG4gICAgdGhpcy5uYW1lID0gdXNlckRhdGEubmFtZSB8fCAnR1VFU1QnO1xuICB9XG5cbiAgYm9va015Um9vbShkYXRlLCByb29tTnVtYmVyLCBvblN1Y2Nlc3MpIHtcbiAgICBsZXQgYm9va2luZyA9XG4gICAge1xuICAgICAgXCJ1c2VySURcIjogdGhpcy5pZCxcbiAgICAgIFwiZGF0ZVwiOiBkYXRlLFxuICAgICAgXCJyb29tTnVtYmVyXCI6IHJvb21OdW1iZXJcbiAgICB9XG4gICAgYXBpUmVxdWVzdC5jcmVhdGVCb29raW5nKGJvb2tpbmcsIG9uU3VjY2VzcylcbiAgfVxuXG4gIHZpZXdNeUJvb2tpbmdzKGJvb2tpbmdEYXRhKSB7XG4gICAgbGV0IG15Qm9va2luZ3MgPSBib29raW5nRGF0YS5maWx0ZXIoYm9va2luZyA9PiB7XG4gICAgICByZXR1cm4gYm9va2luZy51c2VySUQgPT09IHRoaXMuaWRcbiAgICB9KTtcbiAgICByZXR1cm4gbXlCb29raW5ncy5zb3J0KChhLCBiKSA9PiB7XG4gICAgICByZXR1cm4gYS5kYXRlIDwgYi5kYXRlID8gLTEgOiAxO1xuICAgIH0pXG4gIH1cblxuICB2aWV3TXlUb3RhbChib29raW5nRGF0YSwgcm9vbURhdGEpIHtcbiAgICBsZXQgZ3JhbmRUb3RhbCA9IHRoaXMudmlld015Qm9va2luZ3MoYm9va2luZ0RhdGEpLnJlZHVjZSgobXlHcmFuZFRvdGFsLCBteUJvb2tpbmcpID0+IHtcbiAgICAgIGxldCBtYXRjaGVkUm9vbSA9IHJvb21EYXRhLmZpbmQocm9vbSA9PiByb29tLm51bWJlciA9PT0gbXlCb29raW5nLnJvb21OdW1iZXIpXG4gICAgICBteUdyYW5kVG90YWwgKz0gbWF0Y2hlZFJvb20uY29zdFBlck5pZ2h0XG4gICAgICByZXR1cm4gbXlHcmFuZFRvdGFsO1xuICAgIH0sIDApLnRvRml4ZWQoMik7XG4gICAgcmV0dXJuIE51bWJlcihncmFuZFRvdGFsKVxuICB9XG5cbiAgdmlld1VuYXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKSB7XG4gICAgcmV0dXJuIGJvb2tpbmdEYXRhLnJlZHVjZSgoYm9va2VkUm9vbXMsIGJvb2tpbmcpID0+IHtcbiAgICAgIGlmIChib29raW5nLmRhdGUgPT09IGRhdGUpIHtcbiAgICAgICAgYm9va2VkUm9vbXMucHVzaChyb29tRGF0YS5maW5kKHJvb20gPT4gcm9vbS5udW1iZXIgPT09IGJvb2tpbmcucm9vbU51bWJlcikpXG4gICAgICB9XG4gICAgICByZXR1cm4gYm9va2VkUm9vbXNcbiAgICB9LCBbXSk7XG4gIH1cblxuICB2aWV3QXZhaWxhYmxlUm9vbXMoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlKSB7XG4gICAgbGV0IHVuYXZhaWxhYmxlUm9vbXMgPSB0aGlzLnZpZXdVbmF2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSk7XG4gICAgcmV0dXJuIHJvb21EYXRhLmZpbHRlcihyb29tID0+ICF1bmF2YWlsYWJsZVJvb21zLmluY2x1ZGVzKHJvb20pKTsgLy8gbm90IGVtcGF0aGV0aWMgY29uc2lkZXIgcmV3cml0aW5nXG4gIH1cblxuICB2aWV3QXZhaWxhYmxlUm9vbXNCeVR5cGUoYm9va2luZ0RhdGEsIHJvb21EYXRhLCBkYXRlLCByb29tVHlwZSkge1xuICAgIGxldCBhdmFpbGFibGVSb29tcyA9IHRoaXMudmlld0F2YWlsYWJsZVJvb21zKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgZGF0ZSk7XG4gICAgaWYgKCFyb29tVHlwZSkge1xuICAgICAgcmV0dXJuIGF2YWlsYWJsZVJvb21zO1xuICAgIH1cbiAgICByZXR1cm4gYXZhaWxhYmxlUm9vbXMuZmlsdGVyKHJvb20gPT4gcm9vbS5yb29tVHlwZSA9PT0gcm9vbVR5cGUpO1xuICB9XG59XG4iLCJleHBvcnQgY29uc3QgYXBpUmVxdWVzdCA9IHtcbiAgZ2V0VXNlckRhdGEoKSB7XG4gICAgcmV0dXJuIGZldGNoKCdodHRwczovL2ZlLWFwcHMuaGVyb2t1YXBwLmNvbS9hcGkvdjEvb3Zlcmxvb2svMTkwNC91c2Vycy91c2VycycpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IsIFwiRW5jb3VudGVyZWQgYW4gZXJyb3JcIikpO1xuICB9LFxuXG4gIGdldFJvb21EYXRhKCkge1xuICAgIHJldHVybiBmZXRjaCgnaHR0cHM6Ly9mZS1hcHBzLmhlcm9rdWFwcC5jb20vYXBpL3YxL292ZXJsb29rLzE5MDQvcm9vbXMvcm9vbXMnKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yLCBcIkVuY291bnRlcmVkIGFuIGVycm9yXCIpKTtcbiAgfSxcblxuICBnZXRCb29raW5nRGF0YSgpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJylcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHJlc3BvbnNlLmpzb24oKSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciwgXCJFbmNvdW50ZXJlZCBhbiBlcnJvclwiKSk7XG4gIH0sXG5cbiAgY3JlYXRlQm9va2luZyhib29raW5nLCBvblN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgfSxcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYm9va2luZyksXG4gICAgICB9KVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4gcmVzcG9uc2UuanNvbigpKVxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICBvblN1Y2Nlc3MoKVxuICAgICAgICBjb25zb2xlLmxvZyhcIkJvb2tpbmcgc3VjY2Vzc2Z1bGx5IENSRUFURURcIilcbiAgICAgIH0pXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IsIFwiRW5jb3VudGVyZWQgYW4gZXJyb3JcIikpXG4gIH0sXG5cbiAgZGVsZXRlQm9va2luZyhib29raW5nLCBvblN1Y2Nlc3MpIHtcbiAgICByZXR1cm4gZmV0Y2goJ2h0dHBzOi8vZmUtYXBwcy5oZXJva3VhcHAuY29tL2FwaS92MS9vdmVybG9vay8xOTA0L2Jvb2tpbmdzL2Jvb2tpbmdzJywge1xuICAgICAgICBtZXRob2Q6ICdERUxFVEUnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShib29raW5nKSxcbiAgICAgIH0pXG4gICAgICAudGhlbihyZXNwb25zZSA9PiByZXNwb25zZS5qc29uKCkpXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XG4gICAgICAgIG9uU3VjY2VzcygpXG4gICAgICAgIGNvbnNvbGUubG9nKFwiQm9va2luZyBzdWNjZXNzZnVsbHkgREVMRVRFRFwiKVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvciwgXCJFbmNvdW50ZXJlZCBhbiBlcnJvclwiKSlcbiAgfVxufTtcbiIsImV4cG9ydCBjb25zdCBkb21PYmplY3QgPSB7XG4gIHNob3dMb2dpbigpIHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnTGF5ZXJfMScgfHwgZXZlbnQudGFyZ2V0ID09PSAnc3ZnJyB8fCBldmVudC50YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdtYWluLWNhcmRfdGV4dC1saW5rJykpIHtcbiAgICAgIHVzZXJuYW1lSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIHBhc3N3b3JkSW5wdXQudmFsdWUgPSAnJztcbiAgICAgIGxvZ2luQm94LmNsYXNzTGlzdC5jb250YWlucygnaGlkZGVuJykgPyBsb2dpbkJveC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKSA6IGxvZ2luQm94LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICAgIH1cbiAgfSxcblxuICBzaG93VG9vbGJhcihib29sZWFuKSB7XG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5zaG93RWxlbWVudChtYW5hZ2VyVXNlclNlYXJjaCkgOiBkb21PYmplY3QuaGlkZUVsZW1lbnQobWFuYWdlclVzZXJTZWFyY2gpO1xuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3Quc2hvd0VsZW1lbnQoYm9va2luZ1Rvb2xiYXIpIDogZG9tT2JqZWN0LmhpZGVFbGVtZW50KGJvb2tpbmdUb29sYmFyKTtcbiAgfSxcblxuICBzaG93VG9vbGJhckN1c3RvbWVySGlzdG9yeSgpIHtcbiAgICBkb21PYmplY3Quc2hvd1Rvb2xiYXIodHJ1ZSk7XG4gICAgZG9tT2JqZWN0LmhpZGVFbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b29sYmFyX3N1Ym1pdF9idXR0b25fd3JhcHBlcicpKVxuICAgIGRvbU9iamVjdC5oaWRlRWxlbWVudChyb29tVHlwZURyb3Bkb3duKVxuICAgIGRvbU9iamVjdC5oaWRlRWxlbWVudChjYWxlbmRhcilcbiAgfSxcblxuICBzaG93RGFzaGJvYXJkSGVhZGVyKGJvb2xlYW4pIHtcbiAgICBib29sZWFuID09PSB0cnVlID8gZG9tT2JqZWN0LnNob3dFbGVtZW50KGRhc2hib2FyZEhlYWRlcikgOiBkb21PYmplY3QuaGlkZUVsZW1lbnQoZGFzaGJvYXJkSGVhZGVyKTtcbiAgfSxcblxuICBzaG93SG9tZVBhZ2VNYW5hZ2VyKCkge1xuICAgIGRvbU9iamVjdC5oaWRlSG9tZVZpZXcoZmFsc2UpO1xuICAgIGRvbU9iamVjdC5oaWRlTWFuYWdlclZpZXcodHJ1ZSk7XG4gICAgZG9tT2JqZWN0LmhpZGVDdXN0b21lclZpZXcodHJ1ZSk7XG4gIH0sXG5cbiAgc2hvd0N1c3RvbWVyRGFzaGJvYXJkKGJvb2xlYW4pIHtcbiAgICBib29sZWFuID09PSB0cnVlID8gZG9tT2JqZWN0LmhpZGVIb21lVmlldyh0cnVlKSA6IGRvbU9iamVjdC5oaWRlSG9tZVZpZXcoZmFsc2UpO1xuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUN1c3RvbWVyVmlldyhmYWxzZSkgOiBkb21PYmplY3QuaGlkZUN1c3RvbWVyVmlldyh0cnVlKTtcbiAgfSxcblxuICBoaWRlSG9tZVZpZXcoYm9vbGVhbikge1xuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUVsZW1lbnQoaG9tZU5hdkxpbmtzKSA6IGRvbU9iamVjdC5zaG93RWxlbWVudChob21lTmF2TGlua3MpO1xuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUVsZW1lbnQobWFpbkNvbnRlbnRDb250YWluZXIpIDogZG9tT2JqZWN0LnNob3dFbGVtZW50KG1haW5Db250ZW50Q29udGFpbmVyKTtcbiAgICBkb21PYmplY3QuaGlkZUN1c3RvbWVyVmlldyh0cnVlKTtcbiAgICBkb21PYmplY3Quc2hvd0Rhc2hib2FyZEhlYWRlcihmYWxzZSk7XG4gIH0sXG5cbiAgaGlkZUN1c3RvbWVyVmlldyhib29sZWFuKSB7XG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5oaWRlRWxlbWVudChjdXN0b21lck5hdkxpbmtzKSA6IGRvbU9iamVjdC5zaG93RWxlbWVudChjdXN0b21lck5hdkxpbmtzKVxuICAgIGJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUVsZW1lbnQoZGFzaGJvYXJkQ3VzdG9tZXIpIDogZG9tT2JqZWN0LnNob3dFbGVtZW50KGRhc2hib2FyZEN1c3RvbWVyKVxuICB9LFxuXG4gIGhpZGVNYW5hZ2VyVmlldyhib29sZWFuKSB7XG4gICAgYm9vbGVhbiA9PT0gdHJ1ZSA/IGRvbU9iamVjdC5oaWRlRWxlbWVudChtYW5hZ2VyTmF2TGlua3MpIDogZG9tT2JqZWN0LnNob3dFbGVtZW50KG1hbmFnZXJOYXZMaW5rcyk7XG4gICAgIWJvb2xlYW4gPT09IHRydWUgPyBkb21PYmplY3QuaGlkZUVsZW1lbnQoY3VzdG9tZXJOYXZMaW5rcykgOiBkb21PYmplY3Quc2hvd0VsZW1lbnQoY3VzdG9tZXJOYXZMaW5rcylcbiAgICBib29sZWFuID09PSB0cnVlID8gZG9tT2JqZWN0LmhpZGVFbGVtZW50KG1hbmFnZXJEYXNoYm9hcmQpIDogZG9tT2JqZWN0LnNob3dFbGVtZW50KG1hbmFnZXJEYXNoYm9hcmQpXG4gIH0sXG5cbiAgc2hvd0VsZW1lbnQoZWxlbWVudCkge1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJylcbiAgfSxcblxuICBoaWRlRWxlbWVudChlbGVtZW50KSB7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKVxuICB9XG59O1xuXG5leHBvcnQgY29uc3QgcHJvZmlsZUljb24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjTGF5ZXJfMScpO1xuZXhwb3J0IGNvbnN0IGxvZ2luQm94ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxvZ2luJyk7XG5leHBvcnQgY29uc3QgbG9naW5CdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWxvZ2luJylcbmV4cG9ydCBjb25zdCB1c2VybmFtZUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3VzZXJuYW1lJylcbmV4cG9ydCBjb25zdCBwYXNzd29yZElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Bhc3N3b3JkJylcbmV4cG9ydCBjb25zdCBuYXZCb29raW5nICA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNuYXYtYm9va2luZycpXG5leHBvcnQgY29uc3QgbmF2Um9vbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LXJvb21zJylcbmV4cG9ydCBjb25zdCBuYXZDb250YWN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1jb250YWN0JylcbmV4cG9ydCBjb25zdCBuYXZNYW5hZ2VySG90ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LW1hbmFnZXItaG90ZWwnKVxuZXhwb3J0IGNvbnN0IG5hdk1hbmFnZXJCb29raW5nID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1tYW5hZ2VyLWJvb2tpbmcnKVxuZXhwb3J0IGNvbnN0IG5hdk1hbmFnZXJIaXN0b3J5ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1tYW5hZ2VyLWhpc3RvcnknKVxuZXhwb3J0IGNvbnN0IG5hdkN1c3RvbWVyRmluZFJvb21zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI25hdi1jdXN0b21lci1maW5kLXJvb21zJylcbmV4cG9ydCBjb25zdCBuYXZDdXN0b21lckFjY291bnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWN1c3RvbWVyLWFjY291bnQnKVxuZXhwb3J0IGNvbnN0IG5hdkN1c3RvbWVySG90ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbmF2LWN1c3RvbWVyLWhvdGVsJylcbmV4cG9ydCBjb25zdCBob21lTmF2TGlua3MgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaG9tZS1uYXYtbGlua3MnKVxuZXhwb3J0IGNvbnN0IG1hbmFnZXJOYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYW5hZ2VyLW5hdi1saW5rcycpXG5leHBvcnQgY29uc3QgY3VzdG9tZXJOYXZMaW5rcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b21lci1uYXYtbGlua3MnKVxuZXhwb3J0IGNvbnN0IG1haW5Sb29tVHlwZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbl9yb29tLXR5cGVzJylcbmV4cG9ydCBjb25zdCBtYWluSW50cm8gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbl9pbnRybycpXG5leHBvcnQgY29uc3QgY2FsZW5kYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXInKVxuZXhwb3J0IGNvbnN0IGNhbGVuZGFySW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY2FsZW5kYXItaW5wdXQnKVxuZXhwb3J0IGNvbnN0IG1hbmFnZXJVc2VyU2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXItbG9va3VwLWJhcicpXG5leHBvcnQgY29uc3QgYm9va2luZ1Rvb2xiYXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9va2luZy10b29sYmFyJylcbmV4cG9ydCBjb25zdCBsb2dvdXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbG9nb3V0LWJ1dHRvbicpXG5leHBvcnQgY29uc3QgZGFzaGJvYXJkQ3VzdG9tZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGFzaGJvYXJkLWN1c3RvbWVyJylcbmV4cG9ydCBjb25zdCBtYW5hZ2VyRGFzaGJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rhc2hib2FyZC1tYW5hZ2VyJylcbmV4cG9ydCBjb25zdCBtYWluQ29udGVudENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNtYWluLWNvbnRlbnQtY29udGFpbmVyJylcbmV4cG9ydCBjb25zdCBtYW5hZ2VyVXNlclNlYXJjaElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXItc2VhcmNoLXVzZXItaW5wdXQnKVxuZXhwb3J0IGNvbnN0IGRhc2hib2FyZEhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNkYXNoYm9hcmRfaGVhZGVyJylcbmV4cG9ydCBjb25zdCB0b29sYmFyU3VibWl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rvb2xiYXJfc3VibWl0X2J1dHRvbicpXG5leHBvcnQgY29uc3Qgcm9vbVR5cGVEcm9wZG93biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyb29tLXR5cGUtZHJvcGRvd24tY29udGFpbmVyJylcbmV4cG9ydCBjb25zdCBjdXN0b21lclN0YXRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXJfY3VzdG9tZXJfc3RhdHMnKVxuIiwiXG52YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5pZih0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcblxudmFyIHRyYW5zZm9ybTtcbnZhciBpbnNlcnRJbnRvO1xuXG5cblxudmFyIG9wdGlvbnMgPSB7XCJobXJcIjp0cnVlfVxuXG5vcHRpb25zLnRyYW5zZm9ybSA9IHRyYW5zZm9ybVxub3B0aW9ucy5pbnNlcnRJbnRvID0gdW5kZWZpbmVkO1xuXG52YXIgdXBkYXRlID0gcmVxdWlyZShcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2xpYi9hZGRTdHlsZXMuanNcIikoY29udGVudCwgb3B0aW9ucyk7XG5cbmlmKGNvbnRlbnQubG9jYWxzKSBtb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzO1xuXG5pZihtb2R1bGUuaG90KSB7XG5cdG1vZHVsZS5ob3QuYWNjZXB0KFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcyEuL2Jhc2Uuc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzIS4vYmFzZS5zY3NzXCIpO1xuXG5cdFx0aWYodHlwZW9mIG5ld0NvbnRlbnQgPT09ICdzdHJpbmcnKSBuZXdDb250ZW50ID0gW1ttb2R1bGUuaWQsIG5ld0NvbnRlbnQsICcnXV07XG5cblx0XHR2YXIgbG9jYWxzID0gKGZ1bmN0aW9uKGEsIGIpIHtcblx0XHRcdHZhciBrZXksIGlkeCA9IDA7XG5cblx0XHRcdGZvcihrZXkgaW4gYSkge1xuXHRcdFx0XHRpZighYiB8fCBhW2tleV0gIT09IGJba2V5XSkgcmV0dXJuIGZhbHNlO1xuXHRcdFx0XHRpZHgrKztcblx0XHRcdH1cblxuXHRcdFx0Zm9yKGtleSBpbiBiKSBpZHgtLTtcblxuXHRcdFx0cmV0dXJuIGlkeCA9PT0gMDtcblx0XHR9KGNvbnRlbnQubG9jYWxzLCBuZXdDb250ZW50LmxvY2FscykpO1xuXG5cdFx0aWYoIWxvY2FscykgdGhyb3cgbmV3IEVycm9yKCdBYm9ydGluZyBDU1MgSE1SIGR1ZSB0byBjaGFuZ2VkIGNzcy1tb2R1bGVzIGxvY2Fscy4nKTtcblxuXHRcdHVwZGF0ZShuZXdDb250ZW50KTtcblx0fSk7XG5cblx0bW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKCkgeyB1cGRhdGUoKTsgfSk7XG59IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9ob3RlbC1leHRlcmlvci5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL2hvdGVsLXJvb2Z0b3AuanBnXCI7IiwiZXhwb3J0IGNvbnN0IHJvb21JbWFnZXMgPSBbXG4gICcuL2ltYWdlcy9yb29tLWdhdWR5LmpwZycsXG4gICcuL2ltYWdlcy9yb29tLWtpbmdseS5qcGcnLFxuICAnLi9pbWFnZXMvcm9vbS1raW5mb2xrLmpwZycsXG4gICcuL2ltYWdlcy9yb29tLW1vZGlzaC5qcGcnLFxuICAnLi9pbWFnZXMvcm9vbS1zbWFsbC5qcGcnLFxuICAnLi9pbWFnZXMvcm9vbS1zcGFyc2UuanBnJyxcbiAgJy4vaW1hZ2VzL3Jvb20tc3VpdGUuanBnJyxcbiAgJy4vaW1hZ2VzL3Jvb20teHRyYXNtYWxsLmpwZycsXG4gICcuL2ltYWdlcy9yb29tLXh0cmFzbWFsbDIuanBnJyxcbl1cblxuZXhwb3J0IGNvbnN0IGJhdGhyb29tSW1hZ2VzID0gW1xuICAnLi9pbWFnZXMvcm9vbS1iYXRoLWZhbmN5LmpwZycsXG4gICcuL2ltYWdlcy9yb29tLWJhdGgtZmFuY3kyLmpwZycsXG5dXG5cbmV4cG9ydCBjb25zdCBsb2JieUltYWdlcyA9IFtcbiAgJy4vaW1hZ2VzL2hvdGVsLWxvYmJ5LW1vZDEuanBnJyxcbiAgJy4vaW1hZ2VzL2hvdGVsLWxvYmJ5LW1vZDIuanBnJyxcbiAgJy4vaW1hZ2VzL2hvdGVsLWxvYmJ5LW1vZDMuanBnJ1xuXVxuIiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLWdhdWR5LmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbS1raW5mb2xrLmpwZ1wiOyIsIm1vZHVsZS5leHBvcnRzID0gXCJpbWFnZXMvcm9vbS1raW5nbHkuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLW1vZGlzaC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20tc21hbGwuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLXNwYXJzZS5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20tc3VpdGUuanBnXCI7IiwibW9kdWxlLmV4cG9ydHMgPSBcImltYWdlcy9yb29tLXh0cmFzbWFsbC5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3Jvb20teHRyYXNtYWxsMi5qcGdcIjsiLCJtb2R1bGUuZXhwb3J0cyA9IFwiaW1hZ2VzL3VzZXItcHJvZmlsZS5zdmdcIjsiLCJpbXBvcnQgJy4vY3NzL2Jhc2Uuc2Nzcyc7XG5pbXBvcnQgJy4vaW1hZ2VzL2hvdGVsLWV4dGVyaW9yLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvdXNlci1wcm9maWxlLnN2ZydcbmltcG9ydCAnLi9pbWFnZXMvaG90ZWwtcm9vZnRvcC5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tZ2F1ZHkuanBnJ1xuaW1wb3J0ICcuL2ltYWdlcy9yb29tLWtpbmdseS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20ta2luZm9say5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tbW9kaXNoLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS1zbWFsbC5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20tc3BhcnNlLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS1zdWl0ZS5qcGcnXG5pbXBvcnQgJy4vaW1hZ2VzL3Jvb20teHRyYXNtYWxsLmpwZydcbmltcG9ydCAnLi9pbWFnZXMvcm9vbS14dHJhc21hbGwyLmpwZydcblxuaW1wb3J0IHtcbiAgcm9vbUltYWdlc1xufSBmcm9tICcuL2ltYWdlcy9pbWFnZS1hc3NldHMnO1xuXG5pbXBvcnQge1xuICBkb21PYmplY3QsXG4gIHByb2ZpbGVJY29uLFxuICBsb2dpbkJveCxcbiAgbG9naW5CdXR0b24sXG4gIHVzZXJuYW1lSW5wdXQsXG4gIHBhc3N3b3JkSW5wdXQsXG4gIG5hdkJvb2tpbmcsXG4gIG5hdkNvbnRhY3QsXG4gIG5hdk1hbmFnZXJIaXN0b3J5LFxuICBuYXZDdXN0b21lckZpbmRSb29tcyxcbiAgbmF2Q3VzdG9tZXJBY2NvdW50LFxuICBuYXZDdXN0b21lckhvdGVsLFxuICBjYWxlbmRhcixcbiAgbG9nb3V0QnV0dG9uLFxuICBtYW5hZ2VyVXNlclNlYXJjaCxcbiAgYm9va2luZ1Rvb2xiYXIsXG4gIGRhc2hib2FyZEN1c3RvbWVyLFxuICBtYW5hZ2VyRGFzaGJvYXJkLFxuICBtYW5hZ2VyVXNlclNlYXJjaElucHV0LFxuICBjYWxlbmRhcklucHV0LFxuICBkYXNoYm9hcmRIZWFkZXIsXG4gIHRvb2xiYXJTdWJtaXQsXG4gIHJvb21UeXBlRHJvcGRvd24sXG4gIG1hbmFnZXJOYXZMaW5rcyxcbiAgY3VzdG9tZXJTdGF0c1xufSBmcm9tICcuL2NsYXNzZXMvZG9tT2JqZWN0JztcblxubGV0IHVzZXJEYXRhO1xubGV0IGJvb2tpbmdEYXRhO1xubGV0IHJvb21EYXRhO1xubGV0IHVzZXI7XG5sZXQgdG9kYXlzRGF0ZSA9IGdldEZvcm1hdHRlZERhdGUoKTtcblxubGV0IGZldGNoZWRVc2VyRGF0YSA9IGFwaVJlcXVlc3QuZ2V0VXNlckRhdGEoKTtcbmxldCBmZXRjaGVkQm9va2luZ0RhdGEgPSBhcGlSZXF1ZXN0LmdldEJvb2tpbmdEYXRhKCk7XG5sZXQgZmV0Y2hlZFJvb21EYXRhID0gYXBpUmVxdWVzdC5nZXRSb29tRGF0YSgpO1xuXG5pbXBvcnQgVXNlciBmcm9tICcuL2NsYXNzZXMvVXNlcic7XG5pbXBvcnQgTWFuYWdlciBmcm9tICcuL2NsYXNzZXMvTWFuYWdlcic7XG5cbmltcG9ydCB7XG4gIGFwaVJlcXVlc3Rcbn0gZnJvbSAnLi9jbGFzc2VzL2FwaVJlcXVlc3QnO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0gZXZlbnQgbGlzdGVuZXJzIC0tLS0tLS0tLS0tLS0tLS0tLVxuXG5wcm9maWxlSWNvbi5hZGRFdmVudExpc3RlbmVyKCdrZXlwcmVzcycsIGRvbU9iamVjdC5zaG93TG9naW4pO1xubG9naW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjaGVja0xvZ2luKTtcbmxvZ291dEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlZnJlc2hQYWdlKVxubmF2Qm9va2luZy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDdXN0b21lckRhc2hib2FyZCk7XG5tYW5hZ2VyVXNlclNlYXJjaElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2tleXByZXNzJywgcmV0dXJuVXNlckluZm8pO1xubmF2Q3VzdG9tZXJIb3RlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dIb21lUGFnZSk7XG5uYXZDdXN0b21lckFjY291bnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzaG93TXlCb29raW5ncyk7XG5uYXZDdXN0b21lckZpbmRSb29tcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHNob3dDdXN0b21lckRhc2hib2FyZClcbmRhc2hib2FyZEN1c3RvbWVyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYm9va1Jvb20pXG5tYW5hZ2VyRGFzaGJvYXJkLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgbWFuYWdlckRhc2hib2FyZENsaWNrSGFuZGxlcilcbnRvb2xiYXJTdWJtaXQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBzb3J0QnlSb29tVHlwZSlcbm1hbmFnZXJOYXZMaW5rcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIG1hbmFnZXJOYXZIYW5kbGVyKVxuYm9va2luZ1Rvb2xiYXIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoaWdobGlnaHRMaW5rKVxubmF2Q29udGFjdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZ2hsaWdodEhvdGVsSW5mbyk7XG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCduYXYnKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGhpZ2hsaWdodExpbmspXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvbU9iamVjdC5zaG93TG9naW4pO1xuXG4vLyAtLS0tLS0tLS0tLS0tLS0tLS0gR2VuZXJhbCBmdW5jdGlvbnMgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cblByb21pc2UuYWxsKFtmZXRjaGVkVXNlckRhdGEsIGZldGNoZWRCb29raW5nRGF0YSwgZmV0Y2hlZFJvb21EYXRhXSlcbiAgLnRoZW4odmFsdWUgPT4ge1xuICAgIHVzZXJEYXRhID0gdmFsdWVbMF1bJ3VzZXJzJ107XG4gICAgYm9va2luZ0RhdGEgPSB2YWx1ZVsxXVsnYm9va2luZ3MnXTtcbiAgICByb29tRGF0YSA9IHZhbHVlWzJdWydyb29tcyddO1xuICAgIGxvYWRBcHAoKTtcbiAgfSlcbiAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcblxuZnVuY3Rpb24gY2hlY2tMb2dpbigpIHtcbiAgbGV0IHVzZXJuYW1lUHJlID0gdXNlcm5hbWVJbnB1dC52YWx1ZS5zcGxpdCgnJykuc2xpY2UoMCwgOCkuam9pbignJykudG9Mb3dlckNhc2UoKVxuICBsZXQgdXNlcklEID0gdXNlcm5hbWVJbnB1dC52YWx1ZS5zcGxpdCgnJykuc2xpY2UoOCkuam9pbignJylcbiAgbGV0IHBhc3N3b3JkID0gcGFzc3dvcmRJbnB1dC52YWx1ZS50b1N0cmluZygpXG4gIGlmIChwYXNzd29yZCA9PT0gJ292ZXJsb29rMjAyMCcgJiYgdXNlcm5hbWVQcmUgPT09ICdjdXN0b21lcicgJiYgdXNlcklELmxlbmd0aCA+IDAgJiYgdXNlcklEIDwgNTEgJiYgdXNlcklEID4gMCkge1xuICAgIHVzZXIgPSBuZXcgVXNlcih1c2VyRGF0YVt1c2VySUQgLSAxXSlcbiAgICBzaG93Q3VzdG9tZXJEYXNoYm9hcmQoKVxuICB9IGVsc2UgaWYgKHBhc3N3b3JkID09PSAnb3Zlcmxvb2syMDIwJyAmJiB1c2VybmFtZUlucHV0LnZhbHVlLnRvTG93ZXJDYXNlKCkgPT09ICdtYW5hZ2VyJykge1xuICAgIHVzZXIgPSBuZXcgTWFuYWdlcigpXG4gICAgc2hvd01hbmFnZXJEYXNoYm9hcmQoKVxuICB9IGVsc2Uge1xuICAgIGFsZXJ0KCdJbnZhbGlkIGxvZ2luIGluZm9ybWF0aW9uJylcbiAgfVxuICBkb21PYmplY3QuaGlkZUVsZW1lbnQobG9naW5Cb3gpO1xuICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xufVxuXG5mdW5jdGlvbiBsb2FkQXBwKCkge1xuICBsZXQgY2FsRGF0ZSA9IHRvZGF5c0RhdGUucmVwbGFjZUFsbCgnLycsICctJyk7XG4gIGNhbGVuZGFySW5wdXQuc2V0QXR0cmlidXRlKCdtaW4nLCBjYWxEYXRlKTtcbiAgY2FsZW5kYXJJbnB1dC5zZXRBdHRyaWJ1dGUoJ3ZhbHVlJywgY2FsRGF0ZSk7XG59XG5cbmZ1bmN0aW9uIHJlZnJlc2hQYWdlKCkge1xuICB3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG59XG5cbmZ1bmN0aW9uIGdldENhbGVuZGFyRGF0ZSgpIHtcbiAgcmV0dXJuIGNhbGVuZGFySW5wdXQudmFsdWUucmVwbGFjZUFsbCgnLScsICcvJylcbn1cblxuZnVuY3Rpb24gZ2V0Rm9ybWF0dGVkRGF0ZSgpIHtcbiAgbGV0IG5ld0RhdGUgPSBuZXcgRGF0ZSgpO1xuICBsZXQgbW9udGggPSBuZXdEYXRlLmdldE1vbnRoKCkgKyAxO1xuICBsZXQgZGF0ZSA9IG5ld0RhdGUuZ2V0RGF0ZSgpO1xuXG4gIGlmIChkYXRlLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikge1xuICAgIGRhdGUgPSAnMCcgKyBkYXRlXG4gIH1cbiAgaWYgKG1vbnRoLnRvU3RyaW5nKCkubGVuZ3RoIDwgMikge1xuICAgIG1vbnRoID0gJzAnICsgbW9udGhcbiAgfVxuICByZXR1cm4gYCR7bmV3RGF0ZS5nZXRGdWxsWWVhcigpfS8ke21vbnRofS8ke2RhdGV9YFxufVxuXG4vLyAtLS0tLS0tLS0tLS0tLSBOYXYgbGlua3MgYW5kIGNsaWNrIGhhbmRsZXJzIC0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gbWFuYWdlckRhc2hib2FyZENsaWNrSGFuZGxlcigpIHtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2RlbGV0ZV9ib29raW5nX2J1dHRvbicpKSB7XG4gICAgbWFuYWdlckRlbGV0ZUJvb2tpbmcoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSwgZXZlbnQudGFyZ2V0Lm5leHRFbGVtZW50U2libGluZy5pbm5lclRleHQpXG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVzdWx0X2Jvb2stcm9vbS1saW5rJykpIHtcbiAgICBib29rUm9vbU1hbmFnZXIoKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hbmFnZXJOYXZIYW5kbGVyKCkge1xuICBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnbmF2LW1hbmFnZXItaGlzdG9yeScpIHtcbiAgICByZXR1cm5Vc2VySW5mbygpXG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnbmF2LW1hbmFnZXItYm9va2luZycpIHtcbiAgICBzaG93TWFuYWdlckJvb2tGb3JDdXN0b21lcigpO1xuICAgIGxvYWRBdmFpbGFibGVSb29tcyh0b2RheXNEYXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRMaW5rKCkge1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuaGlnaGxpZ2h0YWJsZV9saW5rJykuZm9yRWFjaChub2RlID0+IHtcbiAgICBub2RlLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZV9uYXYnKVxuICB9KTtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZ2hsaWdodGFibGVfbGluaycpKSB7XG4gICAgZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9uYXYnKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoaWdobGlnaHRIb3RlbEluZm8oKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyX2hvdGVsLWluZm8tYmxvY2snKS5jbGFzc0xpc3QuYWRkKCdwdWxzZV9pbmZvJylcbn1cblxuLy8gLS0tLS0tLS0tLS0tLSBEYXNoYm9hcmQgRGlzcGxheSAtLS0tLS0tLS0tLS0tLS0tLS1cblxuZnVuY3Rpb24gc2hvd0hvbWVQYWdlKCkge1xuICBkb21PYmplY3QuaGlkZUhvbWVWaWV3KGZhbHNlKTtcbiAgZG9tT2JqZWN0LnNob3dUb29sYmFyKGZhbHNlKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXJfaG90ZWwtaW5mby1ibG9jaycpLmNsYXNzTGlzdC5yZW1vdmUoJ3B1bHNlX2luZm8nKTtcbn1cblxuZnVuY3Rpb24gc2hvd015Qm9va2luZ3MoKSB7XG4gIGxvYWRVc2VyQWNjb3VudEluZm8oYm9va2luZ0RhdGEpO1xuICBkb21PYmplY3Quc2hvd1Rvb2xiYXIoZmFsc2UpO1xuICBkb21PYmplY3Quc2hvd0Rhc2hib2FyZEhlYWRlcih0cnVlKTtcbiAgc2hvd0Rhc2hib2FyZE1lc3NhZ2UoKTtcbn1cblxuZnVuY3Rpb24gc2hvd0Rhc2hib2FyZE1lc3NhZ2UoKSB7XG4gIGxldCBib29raW5nVG90YWwgPSB1c2VyLnZpZXdNeUJvb2tpbmdzKGJvb2tpbmdEYXRhKS5sZW5ndGg7XG4gIGRhc2hib2FyZEhlYWRlci5pbm5lckhUTUwgPSAnJztcbiAgZGFzaGJvYXJkSGVhZGVyLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgICBgXG4gICAgICA8cD5UaGFua3MgZm9yIHlvdXIgY29udGludWVkIHN1cHBvcnQgJHt1c2VyLm5hbWV9LiBZb3UgaGF2ZSAke2Jvb2tpbmdUb3RhbCA+IDEgPyBib29raW5nVG90YWwgKyAnIGJvb2tpbmdzJyA6IGJvb2tpbmdUb3RhbCArICcgYm9va2luZyd9IG9uIHJlY29yZCB3aXRoIHVzJHtib29raW5nVG90YWwgPiAyMCA/ICcuIFdIT0EhJyA6ICchJ308L3A+XG4gIGApXG59XG5cbmZ1bmN0aW9uIHNob3dDdXN0b21lckRhc2hib2FyZCgpIHtcbiAgaWYgKHVzZXIgaW5zdGFuY2VvZiBVc2VyKSB7XG4gICAgZG9tT2JqZWN0LnNob3dDdXN0b21lckRhc2hib2FyZCh0cnVlKTtcbiAgICBkb21PYmplY3Quc2hvd1Rvb2xiYXIodHJ1ZSk7XG4gICAgZG9tT2JqZWN0LmhpZGVFbGVtZW50KG1hbmFnZXJVc2VyU2VhcmNoKTtcbiAgICBkb21PYmplY3Quc2hvd0Rhc2hib2FyZEhlYWRlcihmYWxzZSk7XG4gICAgdXBkYXRlQ3VzdG9tZXJTdGF0cygpO1xuICAgIGxvYWRBdmFpbGFibGVSb29tcyh0b2RheXNEYXRlKTtcbiAgICBuYXZDdXN0b21lckZpbmRSb29tcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmVfbmF2JylcbiAgfSBlbHNlIHtcbiAgICBhbGVydCgnUGxlYXNlIGxvZyBpbiB0byB2aWV3IGF2YWlsYWJsZSByb29tcycpXG4gIH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlQ3VzdG9tZXJTdGF0cygpIHtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXJfY3VzdG9tZXJfc3RhdHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2N1c3RvbWVyX3N0YXRfdGl0bGVfZGF0ZScpLmlubmVyVGV4dCA9IGAke3VzZXIubmFtZX1gXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b21lcl9zdGF0X3RvdGFsX3NwZW50JykuaW5uZXJUZXh0ID0gYCQke3VzZXIudmlld015VG90YWwoYm9va2luZ0RhdGEsIHJvb21EYXRhKS50b0ZpeGVkKCl9YFxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VzdG9tZXJfc3RhdF90b3RhbF9zdGF5cycpLmlubmVyVGV4dCA9IGAke3VzZXIudmlld015Qm9va2luZ3MoYm9va2luZ0RhdGEpLmxlbmd0aH1gXG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b21lcl9zdGF0X2xveWFsdHlfd3JhcHBlcicpLmlubmVySFRNTCA9ICcnO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjY3VzdG9tZXJfc3RhdF9sb3lhbHR5X3dyYXBwZXInKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICA8cD5MT1lBTFRZIExFVkVMPC9wPlxuICAgIDxwIGlkPSdjdXN0b21lcl9zdGF0X2xveWFsdHknIGNsYXNzPSdzdGF0X2dvbGQnPiR7Z2V0TG95YWx0eVN0YXR1cygpfTwvcD5cbiAgYCk7XG59XG5cbmZ1bmN0aW9uIGdldExveWFsdHlTdGF0dXMoKSB7XG4gIGxldCB0b3RhbCA9IE51bWJlcih1c2VyLnZpZXdNeVRvdGFsKGJvb2tpbmdEYXRhLCByb29tRGF0YSkpO1xuICBpZiAodG90YWwgPCAxMDAwKSB7XG4gICAgcmV0dXJuICdBc3NvY2lhdGUnXG4gIH0gZWxzZSBpZiAodG90YWwgPiAxMDAwICYmIHRvdGFsIDwgNTAwMCkge1xuICAgIHJldHVybiAnUHJlbWllcidcbiAgfSBlbHNlIGlmICh0b3RhbCA+IDUwMDAgJiYgdG90YWwgPCAxMDAwMCkge1xuICAgIHJldHVybiAnRXhlY3V0aXZlJ1xuICB9IGVsc2UgaWYgKHRvdGFsID4gMTAwMDAgJiYgdG90YWwgPCAxNTAwMCkge1xuICAgIHJldHVybiAnUm95YWx0eSdcbiAgfSBlbHNlIGlmICh0b3RhbCA+IDE1MDAwKSB7XG4gICAgcmV0dXJuICdWZW5lcmF0ZWQnXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd01hbmFnZXJEYXNoYm9hcmQoKSB7XG4gIGRvbU9iamVjdC5oaWRlRWxlbWVudChjdXN0b21lclN0YXRzKVxuICBkb21PYmplY3QuaGlkZUhvbWVWaWV3KHRydWUpO1xuICBkb21PYmplY3QuaGlkZU1hbmFnZXJWaWV3KGZhbHNlKTtcbiAgZG9tT2JqZWN0LnNob3dUb29sYmFyQ3VzdG9tZXJIaXN0b3J5KCk7XG4gIHNob3dNYW5hZ2VyV2VsY29tZU1lc3NhZ2UoKVxuICB1cGRhdGVNYW5hZ2VyU3RhdHMoKVxufVxuXG5mdW5jdGlvbiBzaG93TWFuYWdlcldlbGNvbWVNZXNzYWdlKCkge1xuICBtYW5hZ2VyRGFzaGJvYXJkLmlubmVySFRNTCA9ICcnXG4gIGxldCByb29tc1RvUmVudCA9IHVzZXIudG90YWxBdmFpbGFibGVSb29tcyhib29raW5nRGF0YSwgcm9vbURhdGEsIHRvZGF5c0RhdGUpXG4gIG1hbmFnZXJEYXNoYm9hcmQuaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gIDxkaXYgaWQ9J21hbmFnZXJfd2VsY29tZS13cmFwcGVyJz48cCBpZD0nbWFuYWdlcl93ZWxjb21lJz5IZXkgQm9zcyEgV2UndmUgZ290ICR7IXJvb21zVG9SZW50ID8gJ25vdGhpbmcnIDogcm9vbXNUb1JlbnQgKyAnIHJvb21zJ30gYXZhaWxhYmxlIHRvIGJvb2sgdG9kYXkhPC9wPjwvZGl2PlxuICBgKVxufVxuXG5mdW5jdGlvbiBzaG93TWFuYWdlckJvb2tGb3JDdXN0b21lcigpIHtcbiAgZG9tT2JqZWN0LnNob3dFbGVtZW50KGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b29sYmFyX3N1Ym1pdF9idXR0b25fd3JhcHBlcicpKVxuICBkb21PYmplY3Quc2hvd0VsZW1lbnQocm9vbVR5cGVEcm9wZG93bilcbiAgZG9tT2JqZWN0LnNob3dFbGVtZW50KGNhbGVuZGFyKVxufVxuXG5mdW5jdGlvbiB1cGRhdGVNYW5hZ2VyU3RhdHMoY3VzdG9tZXJOYW1lKSB7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNzaWRlYmFyX21hbmFnZXJfc3RhdHMnKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXJfc3RhdF90aXRsZV9kYXRlJykuaW5uZXJUZXh0ID0gYCR7dG9kYXlzRGF0ZX1gO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFuYWdlcl9zdGF0X2F2YWlsYWJpbGl0eScpLmlubmVyVGV4dCA9IGAke3VzZXIudG90YWxBdmFpbGFibGVSb29tcyhib29raW5nRGF0YSwgcm9vbURhdGEsIHRvZGF5c0RhdGUpfSB2YWNhbmNpZXNgO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFuYWdlcl9zdGF0X3RvdGFsX3JldmVudWUnKS5pbm5lclRleHQgPSBgJCR7dXNlci50b3RhbFJldmVudWUoYm9va2luZ0RhdGEsIHJvb21EYXRhLCB0b2RheXNEYXRlKS50b0ZpeGVkKCl9YDtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21hbmFnZXJfc3RhdF90b3RhbF9vY2N1cGFuY3knKS5pbm5lclRleHQgPSBgJHt1c2VyLnRvdGFsUGVyY2VudE9jY3VwaWVkKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgdG9kYXlzRGF0ZSkgKiAxMDB9JWA7XG4gIGlmIChjdXN0b21lck5hbWUpIHtcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFuYWdlcl9zdGF0X2N1c3RvbWVyX3RvdGFsX3dyYXBwZXInKS5pbm5lckhUTUwgPSAnJztcbiAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFuYWdlcl9zdGF0X2N1c3RvbWVyX3RvdGFsX3dyYXBwZXInKS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsIGBcbiAgICAgIDxwPkNVU1RPTUVSIFRPVEFMPC9wPlxuICAgICAgPHAgaWQ9J21hbmFnZXJfc3RhdF9jdXN0b21lcl90b3RhbCcgY2xhc3M9J3N0YXRfZ29sZCc+JCR7dXNlci52aWV3Q3VzdG9tZXJJbmZvKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgdXNlckRhdGEsIGN1c3RvbWVyTmFtZSkudG90YWxTcGVudC50b0ZpeGVkKCl9PC9wPlxuICAgIGApXG4gIH1cbn1cblxuZnVuY3Rpb24gbG9hZFVzZXJBY2NvdW50SW5mbyhib29raW5nRGF0YSwgbmFtZSkge1xuICBsZXQgZGFzaGJvYXJkQW5kQm9va2luZ3MgPSBnZXRDb3JyZWN0RGFzaEFuZEJvb2tpbmcoYm9va2luZ0RhdGEsIG5hbWUpO1xuICBkYXNoYm9hcmRBbmRCb29raW5nc1swXS5pbm5lckhUTUwgPSAnJztcbiAgZGFzaGJvYXJkQW5kQm9va2luZ3NbMV0uZm9yRWFjaCgoYm9va2luZywgaSkgPT4ge1xuICAgIGxldCByb29tID0gcm9vbURhdGEuZmluZChyb29tID0+IHJvb20ubnVtYmVyID09PSBib29raW5nLnJvb21OdW1iZXIpXG4gICAgbGV0IHJhbmRvbUltYWdlID0gcm9vbUltYWdlc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiByb29tSW1hZ2VzLmxlbmd0aCldO1xuICAgIGRhc2hib2FyZEFuZEJvb2tpbmdzWzBdLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJyxcbiAgICAgIGBcbiAgICAgIDxhcnRpY2xlIGlkPSdteS1ib29raW5nX2NhcmQtJHtpfScgY2xhc3M9J215LWJvb2tpbmdfY2FyZCc+XG4gICAgICA8ZGl2IGNsYXNzPSdteS1ib29raW5nX2ltYWdlLXdyYXBwZXInPlxuICAgICAgPGltZyBjbGFzcz0nbXktYm9va2luZ19pbWFnZScgc3JjPSR7cmFuZG9tSW1hZ2V9PlxuICAgICAgPC9kaXY+XG4gICAgICA8c2VjdGlvbiB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPSdib29raW5nIGluZm9ybWF0aW9uJyBjbGFzcz0nbXlfYm9va2luZy10ZXh0X3dyYXBwZXInPlxuICAgICAgPGRpdj5cbiAgICAgIDxwPnJvb20gZGV0YWlsczwvcD5cbiAgICAgIDxwPiR7cm9vbS5yb29tVHlwZX08L3A+XG4gICAgICA8cD5yb29tIG5vOiAke3Jvb20ubnVtYmVyfTwvcD5cbiAgICAgIDxwPiR7cm9vbS5udW1CZWRzfSAke3Jvb20ubnVtQmVkcyA+IDEgPyByb29tLmJlZFNpemUgKyAnIGJlZHMnIDogcm9vbS5iZWRTaXplICsgJyBiZWQnfTwvcD5cbiAgICAgIDxwPiR7cm9vbS5iaWRldCA/ICdhbWVuaXRpZXM6IDxicj5iaWRldCcgOiAnJ308L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXY+XG4gICAgICA8cD5ib29raW5nIGRldGFpbHM8L3A+XG4gICAgICA8cD4ke25hbWUgPyBuYW1lIDogdXNlci5uYW1lfTwvcD5cbiAgICAgIDxwPmZvcjogJHtib29raW5nLmRhdGV9PC9wPlxuICAgICAgPHA+Y3VzdG9tZXIgaWQ6ICR7Ym9va2luZy51c2VySUR9PC9wPlxuICAgICAgPHA+Ym9va2luZyBpZDo8L3A+XG4gICAgICA8cD4ke2Jvb2tpbmcuaWR9PC9wPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGlkPSdib29raW5nX3RvdGFsXyR7aX0nPlxuICAgICAgPHA+JCR7cm9vbS5jb3N0UGVyTmlnaHQudG9GaXhlZCgyKX08L3A+XG4gICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICAgIDwvYXJ0aWNsZT5cbiAgICBgKTtcbiAgICBpZiAodXNlciBpbnN0YW5jZW9mIE1hbmFnZXIgJiYgYm9va2luZy5kYXRlID4gdG9kYXlzRGF0ZSkge1xuICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgI2Jvb2tpbmdfdG90YWxfJHtpfWApLmluc2VydEFkamFjZW50SFRNTCgnYmVmb3JlZW5kJywgYFxuICAgICAgICA8cCB0YWJpbmRleD1cIjBcIiBhcmlhLWxhYmVsPSdkZWxldGUgY3VzdG9tZXIgYm9va2luZycgY2xhc3M9J2RlbGV0ZV9ib29raW5nX2J1dHRvbicgdmFsdWU9JHtib29raW5nLmlkfT5ERUxFVEUgPGJyPkJPT0tJTkc8L3A+XG4gICAgICAgIDxzcGFuIGNsYXNzPSdoaWRkZW4nPiR7bmFtZX08L3NwYW4+XG4gICAgICBgKVxuICAgIH1cbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGxvYWRBdmFpbGFibGVSb29tcyhkYXRlLCByb29tVHlwZSkge1xuICBsZXQgc2VsZWN0ZWREYXRlID0gZ2V0Q2FsZW5kYXJEYXRlKClcbiAgbGV0IGRhc2hib2FyZEFuZEJvb2tpbmdzID0gZ2V0Q29ycmVjdERhc2hBbmRCb29raW5nKGJvb2tpbmdEYXRhLCBuYW1lKTtcbiAgbGV0IGJvb2tpbmdBcnJheSA9IHVzZXIudmlld0F2YWlsYWJsZVJvb21zQnlUeXBlKGJvb2tpbmdEYXRhLCByb29tRGF0YSwgc2VsZWN0ZWREYXRlLCByb29tVHlwZSk7XG4gIGRhc2hib2FyZEFuZEJvb2tpbmdzWzBdLmlubmVySFRNTCA9ICcnXG4gIGlmIChib29raW5nQXJyYXkubGVuZ3RoID09PSAwKSB7XG4gICAgZGFzaGJvYXJkQW5kQm9va2luZ3NbMF0uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLCBgXG4gICAgPGRpdiBpZD0nc29ycnlfbWVzc2FnZS13cmFwcGVyJz48cCBpZD0nc29ycnlfbWVzc2FnZSc+U29ycnksIHRoZXJlIGFyZSBubyAkeyFyb29tVHlwZSA/ICdyb29tJyA6IHJvb21UeXBlfXMgYXZhaWxhYmlsZSBmb3IgYSAke3NlbGVjdGVkRGF0ZX0gYm9va2luZzwvcD48L2Rpdj5cbiAgICBgKVxuICB9IGVsc2Uge1xuICAgIGJvb2tpbmdBcnJheS5mb3JFYWNoKChyb29tLCBpKSA9PiB7XG4gICAgICBsZXQgcmFuZG9tSW1hZ2UgPSByb29tSW1hZ2VzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHJvb21JbWFnZXMubGVuZ3RoKV07XG4gICAgICBkYXNoYm9hcmRBbmRCb29raW5nc1swXS5pbnNlcnRBZGphY2VudEhUTUwoJ2JlZm9yZWVuZCcsXG4gICAgICAgIGBcbiAgICAgICAgPGFydGljbGUgaWQ9J3Jlc3VsdF9jYXJkLSR7aX0nIGNsYXNzPSdyZXN1bHRfY2FyZCBmYWRlLWluJz5cbiAgICAgICAgPGRpdiBjbGFzcz0ncmVzdWx0X2ltYWdlLXdyYXBwZXInPlxuICAgICAgICA8aW1nIGNsYXNzPSdyZXN1bHRfaW1hZ2UnIHNyYz0ke3JhbmRvbUltYWdlfSBhbHQ9J0EgJHtyb29tLm51bUJlZHN9IGJlZCwgY2FsbSBhbmQgc2VyZW5lIG1vZGVybiAke3Jvb20ucm9vbVR5cGV9Jz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxzZWN0aW9uIHRhYmluZGV4PVwiMFwiIGFyaWEtbGFiZWw9J3Jvb20gaW5mb3JtYXRpb24nIGNsYXNzPSdyZXN1bHRfdGV4dC13cmFwcGVyJz5cbiAgICAgICAgPGgyPiR7cm9vbS5yb29tVHlwZX0gIyR7cm9vbS5udW1iZXJ9PC9oMj5cbiAgICAgICAgPHA+JHtyb29tLm51bUJlZHN9ICR7cm9vbS5udW1CZWRzID4gMSA/IHJvb20uYmVkU2l6ZSArICcgYmVkcycgOiByb29tLmJlZFNpemUgKyAnIGJlZCd9LCBpbmNyZWRpYmxlIG1vdW50YWluIHZpZXdzLFxuICAgICAgICA8YnI+YSBmdWxseSBtb2Rlcm4gcm9vbSBhbmQgYmF0aHJvb20ke3Jvb20uYmlkZXQgPyAnIGluY2x1ZGluZyBhIGJpZGV0IScgOiAnLid9PC9wPlxuICAgICAgICA8YnI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgIDxwPiQke3Jvb20uY29zdFBlck5pZ2h0LnRvRml4ZWQoMil9PC9wPlxuICAgICAgICA8cD5wZXIgbmlnaHQ8YnI+ZXhjbHVkaW5nIHRheGVzIGFuZCBmZWVzPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPHNwYW4+PHAgdGFiaW5kZXg9XCIwXCIgYXJpYS1sYWJlbD0nYm9vayByb29tIGJ1dHRvbicgaWQ9J2Jvb2tfcm9vbV9saW5rJyB2YWx1ZT0nJHtyb29tLm51bWJlcn0nIGNsYXNzPSdyZXN1bHRfYm9vay1yb29tLWxpbmsnPkJPT0sgVEhJUyBST09NPC9wPjwvc3Bhbj5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICBgKTtcbiAgICB9KTtcbiAgfVxufVxuXG4vLyAtLS0tLS0tLS0tLS0gRGFzaGJvYXJkIERhdGEgLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbmZ1bmN0aW9uIGdldENvcnJlY3REYXNoQW5kQm9va2luZyhib29raW5nRGF0YSwgbmFtZSkge1xuICBsZXQgY3VzdG9tZXJPck1hbmFnZXIgPSB1c2VyIGluc3RhbmNlb2YgTWFuYWdlciA/ICdtYW5hZ2VyJyA6ICdjdXN0b21lcic7XG4gIGxldCBkYXNoYm9hcmQgPSBjdXN0b21lck9yTWFuYWdlciA9PT0gJ21hbmFnZXInID8gbWFuYWdlckRhc2hib2FyZCA6IGRhc2hib2FyZEN1c3RvbWVyO1xuICBsZXQgYm9va2luZ3MgPSBjdXN0b21lck9yTWFuYWdlciA9PT0gJ21hbmFnZXInID8gdXNlci52aWV3Q3VzdG9tZXJCb29raW5ncyhib29raW5nRGF0YSwgdXNlckRhdGEsIG5hbWUpIDogdXNlci52aWV3TXlCb29raW5ncyhib29raW5nRGF0YSk7XG4gIGxldCBzb3J0ZWRCb29raW5ncyA9IGJvb2tpbmdzLnNvcnQoKGEsIGIpID0+IG5ldyBEYXRlKGIuZGF0ZSkgLSBuZXcgRGF0ZShhLmRhdGUpKVxuICByZXR1cm4gW2Rhc2hib2FyZCwgc29ydGVkQm9va2luZ3NdXG59XG5cbmZ1bmN0aW9uIGJvb2tSb29tKCkge1xuICBsZXQgYm9va2luZ0RhdGUgPSBnZXRDYWxlbmRhckRhdGUoKTtcbiAgaWYgKGV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3Jlc3VsdF9ib29rLXJvb20tbGluaycpKSB7XG4gICAgbGV0IHJvb21OdW0gPSBOdW1iZXIoZXZlbnQudGFyZ2V0LmdldEF0dHJpYnV0ZSgndmFsdWUnKSk7XG4gICAgbGV0IG9uU3VjY2VzcyA9ICgpID0+IHtcbiAgICAgIGdldFVwZGF0ZWRBdmFpbGFibGVMaXN0KClcbiAgICB9XG4gICAgdXNlci5ib29rTXlSb29tKGJvb2tpbmdEYXRlLCByb29tTnVtLCBvblN1Y2Nlc3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJvb2tSb29tTWFuYWdlcigpIHtcbiAgbGV0IGJvb2tpbmdEYXRlID0gZ2V0Q2FsZW5kYXJEYXRlKCk7XG4gIGNvbnNvbGUubG9nKGJvb2tpbmdEYXRlKTtcbiAgbGV0IG5hbWUgPSBtYW5hZ2VyVXNlclNlYXJjaElucHV0LnZhbHVlO1xuICBpZiAoZXZlbnQudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncmVzdWx0X2Jvb2stcm9vbS1saW5rJykgJiYgbmFtZSAhPT0gJycpIHtcbiAgICBsZXQgcm9vbU51bSA9IE51bWJlcihldmVudC50YXJnZXQuZ2V0QXR0cmlidXRlKCd2YWx1ZScpKTtcbiAgICBsZXQgb25TdWNjZXNzID0gKCkgPT4ge1xuICAgICAgZ2V0VXBkYXRlZEF2YWlsYWJsZUxpc3QoKVxuICAgIH1cbiAgICB1c2VyLmFkZEN1c3RvbWVyQm9va2luZyh1c2VyRGF0YSwgbmFtZSwgYm9va2luZ0RhdGUsIHJvb21OdW0sIG9uU3VjY2Vzcyk7XG4gIH0gZWxzZSBpZiAoZXZlbnQudGFyZ2V0LmlkID09PSAnYm9va19yb29tX2xpbmsnICYmIG5hbWUgPT09ICcnKSB7XG4gICAgYWxlcnQoJ1BsZWFzZSBmaXJzdCBzZWxlY3QgYSB1c2VyIGJ5IHRoZWlyIGZpcnN0IGFuZCBsYXN0IG5hbWUgaW4gdGhlIHRvb2xiYXInKVxuICB9XG59XG5cbmZ1bmN0aW9uIG1hbmFnZXJEZWxldGVCb29raW5nKGlkLCBuYW1lKSB7XG4gIGNvbnNvbGUubG9nKGlkLCBuYW1lKTtcbiAgaWYgKGNvbmZpcm0oYEFyZSB5b3Ugc3VyZSB5b3Ugd2FudCB0byBkZWxldGUgYm9va2luZyAke2lkfT9gKSkge1xuICAgIGxldCBvblN1Y2Nlc3MgPSAoKSA9PiB7XG4gICAgICB1cGRhdGVNYW5hZ2VyVXNlckluZm8obmFtZSlcbiAgICB9XG4gICAgdXNlci5kZWxldGVDdXN0b21lckJvb2tpbmcoYm9va2luZ0RhdGEsIGlkLCBvblN1Y2Nlc3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNvcnRCeVJvb21UeXBlKCkge1xuICBsZXQgZHJvcGRvd24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vbS10eXBlcycpO1xuICBsZXQgcm9vbVR5cGUgPSBkcm9wZG93bi5vcHRpb25zW2Ryb3Bkb3duLnNlbGVjdGVkSW5kZXhdLnZhbHVlLnRvU3RyaW5nKCk7XG4gIGxldCBzZWxlY3RlZERhdGUgPSBnZXRDYWxlbmRhckRhdGUoKTtcblxuICBpZiAocm9vbVR5cGUgPT09ICdyZXNpZGVudGlhbCcpIHtcbiAgICBsb2FkQXZhaWxhYmxlUm9vbXMoc2VsZWN0ZWREYXRlLCAncmVzaWRlbnRpYWwgc3VpdGUnKTtcbiAgfSBlbHNlIGlmIChyb29tVHlwZSA9PT0gJ3N1aXRlJykge1xuICAgIGxvYWRBdmFpbGFibGVSb29tcyhzZWxlY3RlZERhdGUsICdzdWl0ZScpO1xuICB9IGVsc2UgaWYgKHJvb21UeXBlID09PSAnanVuaW9yJykge1xuICAgIGxvYWRBdmFpbGFibGVSb29tcyhzZWxlY3RlZERhdGUsICdqdW5pb3Igc3VpdGUnKTtcbiAgfSBlbHNlIGlmIChyb29tVHlwZSA9PT0gJ3NpbmdsZScpIHtcbiAgICBsb2FkQXZhaWxhYmxlUm9vbXMoc2VsZWN0ZWREYXRlLCAnc2luZ2xlIHJvb20nKTtcbiAgfSBlbHNlIGlmIChyb29tVHlwZSA9PT0gJ2FsbCcpIHtcbiAgICBsb2FkQXZhaWxhYmxlUm9vbXMoc2VsZWN0ZWREYXRlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1cGRhdGVNYW5hZ2VyVXNlckluZm8obmFtZSkge1xuICBmZXRjaGVkQm9va2luZ0RhdGEgPSBhcGlSZXF1ZXN0LmdldEJvb2tpbmdEYXRhKCk7XG4gIGZldGNoZWRCb29raW5nRGF0YS50aGVuKHZhbHVlID0+IHtcbiAgICBib29raW5nRGF0YSA9IHZhbHVlWydib29raW5ncyddXG4gIH0pLnRoZW4oKCkgPT4gbG9hZFVzZXJBY2NvdW50SW5mbyhib29raW5nRGF0YSwgbmFtZSkpLnRoZW4oKCkgPT4ge1xuICAgIHVwZGF0ZU1hbmFnZXJTdGF0cyhtYW5hZ2VyVXNlclNlYXJjaElucHV0LnZhbHVlKVxuICB9KVxufVxuXG5mdW5jdGlvbiBnZXRVcGRhdGVkQXZhaWxhYmxlTGlzdCgpIHtcbiAgZmV0Y2hlZEJvb2tpbmdEYXRhID0gYXBpUmVxdWVzdC5nZXRCb29raW5nRGF0YSgpO1xuICBmZXRjaGVkQm9va2luZ0RhdGEudGhlbih2YWx1ZSA9PiB7XG4gICAgYm9va2luZ0RhdGEgPSB2YWx1ZVsnYm9va2luZ3MnXVxuICB9KS50aGVuKCgpID0+IGxvYWRBdmFpbGFibGVSb29tcyh0b2RheXNEYXRlKSkudGhlbigoKSA9PiB7XG4gICAgaWYgKHVzZXIgaW5zdGFuY2VvZiBNYW5hZ2VyKSB7XG4gICAgICB1cGRhdGVNYW5hZ2VyU3RhdHMobWFuYWdlclVzZXJTZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHVwZGF0ZUN1c3RvbWVyU3RhdHMoKTtcbiAgICB9XG4gIH0pXG59XG5cbmZ1bmN0aW9uIHJldHVyblVzZXJJbmZvKCkge1xuICBpZiAoZXZlbnQua2V5ID09PSAnRW50ZXInKSB7XG4gICAgbG9hZFVzZXJBY2NvdW50SW5mbyhib29raW5nRGF0YSwgbWFuYWdlclVzZXJTZWFyY2hJbnB1dC52YWx1ZSk7XG4gICAgdXBkYXRlTWFuYWdlclN0YXRzKG1hbmFnZXJVc2VyU2VhcmNoSW5wdXQudmFsdWUpXG4gICAgbmF2TWFuYWdlckhpc3RvcnkuY2xhc3NMaXN0LmFkZCgnYWN0aXZlX25hdicpXG4gIH0gZWxzZSBpZiAobWFuYWdlclVzZXJTZWFyY2hJbnB1dC52YWx1ZSkge1xuICAgIGxvYWRVc2VyQWNjb3VudEluZm8oYm9va2luZ0RhdGEsIG1hbmFnZXJVc2VyU2VhcmNoSW5wdXQudmFsdWUpO1xuICAgIHVwZGF0ZU1hbmFnZXJTdGF0cyhtYW5hZ2VyVXNlclNlYXJjaElucHV0LnZhbHVlKVxuICAgIG5hdk1hbmFnZXJIaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9uYXYnKVxuICB9IGVsc2Uge1xuICAgIG5hdk1hbmFnZXJIaXN0b3J5LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZV9uYXYnKVxuICB9XG4gIGRvbU9iamVjdC5zaG93VG9vbGJhckN1c3RvbWVySGlzdG9yeSgpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==