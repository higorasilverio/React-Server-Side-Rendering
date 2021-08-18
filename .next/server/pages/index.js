(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./pages/Card.js":
/*!***********************!*\
  !*** ./pages/Card.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Card.module.css */ "./pages/Card.module.css");
/* harmony import */ var _Card_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Card_module_css__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\development\\server-side-rendering\\pages\\Card.js";


const Card = props => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
  className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().card),
  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().front),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
      src: "/juice.jpg",
      alt: "Avatar",
      className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().cardImage)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 9
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().container),
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h3", {
        children: ["Vitamin Juice ", /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("span", {
          className: (_Card_module_css__WEBPACK_IMPORTED_MODULE_1___default().price),
          children: "$24.99"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 8,
          columnNumber: 29
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 11
      }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
        children: "Need a jump on your vitamins while drinking? Tired of popping the pills? Drink our vitamin enhanced juice, available in several flavours."
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 7,
      columnNumber: 9
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 7
  }, undefined)
}, void 0, false, {
  fileName: _jsxFileName,
  lineNumber: 4,
  columnNumber: 5
}, undefined);

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Card);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./index.module.css */ "./pages/index.module.css");
/* harmony import */ var _index_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_index_module_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ "./pages/Card.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../store */ "./store.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\development\\server-side-rendering\\pages\\index.js";






const Index = () => {
  const dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_4__.useDispatch)();
  const {
    cards
  } = dispatch((0,_store__WEBPACK_IMPORTED_MODULE_3__.initialCards)());
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().app),
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("header", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().header),
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {
        src: "/logo.png",
        className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().logo),
        alt: "logo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: (_index_module_css__WEBPACK_IMPORTED_MODULE_5___default().grid),
      children: cards.map(card => /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__.default, {}, card.id, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 11
      }, undefined))
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_store__WEBPACK_IMPORTED_MODULE_3__.initStore.withRedux(Index));

/***/ }),

/***/ "./store.js":
/*!******************!*\
  !*** ./store.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "initialCards": () => (/* binding */ initialCards),
/* harmony export */   "addItem": () => (/* binding */ addItem),
/* harmony export */   "reducer": () => (/* binding */ reducer),
/* harmony export */   "initStore": () => (/* binding */ initStore)
/* harmony export */ });
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-redux-wrapper */ "next-redux-wrapper");
/* harmony import */ var next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux */ "redux");
/* harmony import */ var redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(redux__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _pages_API_data_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/API/data.json */ "./pages/API/data.json");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



 // initial state

const startState = {
  cards: []
}; // Actions

const initialCards = () => {
  return {
    type: 'INITIALCARDS',
    cards: _pages_API_data_json__WEBPACK_IMPORTED_MODULE_2__
  };
};
const addItem = item => {
  return {
    type: 'ADD',
    item
  };
}; // reducers

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIALCARDS':
      return {
        cards: action.cards
      };

    case 'ADD':
      return _objectSpread(_objectSpread({}, state), {}, {
        cards: [...state.cards, action.item]
      });

    default:
      return state;
  }
}; // create store

const store = (initialState = startState) => {
  return (0,redux__WEBPACK_IMPORTED_MODULE_1__.createStore)(reducer, initialState);
};

const initStore = (0,next_redux_wrapper__WEBPACK_IMPORTED_MODULE_0__.createWrapper)(store);

/***/ }),

/***/ "./pages/Card.module.css":
/*!*******************************!*\
  !*** ./pages/Card.module.css ***!
  \*******************************/
/***/ ((module) => {

// Exports
module.exports = {
	"card": "Card_card__3fHIv",
	"front": "Card_front__snEHW",
	"price": "Card_price__DzaWq",
	"container": "Card_container__7IDAI",
	"cardImage": "Card_cardImage__2e1ZA"
};


/***/ }),

/***/ "./pages/index.module.css":
/*!********************************!*\
  !*** ./pages/index.module.css ***!
  \********************************/
/***/ ((module) => {

// Exports
module.exports = {
	"app": "index_app__dX5MZ",
	"grid": "index_grid__kOMRE",
	"logo": "index_logo__PpCSR",
	"header": "index_header__1p3mc"
};


/***/ }),

/***/ "next-redux-wrapper":
/*!*************************************!*\
  !*** external "next-redux-wrapper" ***!
  \*************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next-redux-wrapper");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("redux");

/***/ }),

/***/ "./pages/API/data.json":
/*!*****************************!*\
  !*** ./pages/API/data.json ***!
  \*****************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('[{"id":0,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":1,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":2,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":3,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":4,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":5,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":6,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":7,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":8,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":9,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":10,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":11,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":12,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":13,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":14,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":15,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":16,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."},{"id":17,"animation":"card","description":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc suscipit ut dolor non ultrices. Fusce lacus magna, efficitur non imperdiet vel, accumsan sit amet quam. Fusce tincidunt metus purus, ac mollis odio bibendum a. Phasellus lacinia venenatis dolor, vel aliquet eros lacinia sed. Cras tortor ipsum, condimentum eu purus quis, feugiat porttitor dui. Duis id pulvinar diam. Donec vel velit at massa iaculis iaculis sit amet ac nibh. Sed ac augue mollis, ultrices tellus ut, porta lectus. Nulla ac feugiat libero. Nullam accumsan eu libero eu consectetur. Aliquam erat volutpat. Cras eget ipsum enim. Maecenas aliquet nisi at arcu iaculis, id hendrerit dui viverra."}]');

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxLQUFQO0FBVmI7QUFZSCxDQWJNLEVBZ0JQOztBQUNBLE1BQU1HLEtBQUssR0FBRyxDQUFDRixZQUFZLEdBQUdMLFVBQWhCLEtBQStCO0FBQ3pDLFNBQU9GLGtEQUFXLENBQUNLLE9BQUQsRUFBVUUsWUFBVixDQUFsQjtBQUNILENBRkQ7O0FBSU8sTUFBTXRCLFNBQVMsR0FBR2MsaUVBQWEsQ0FBQ1UsS0FBRCxDQUEvQjs7Ozs7Ozs7OztBQzlDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL3NlcnZlci1zaWRlLXJlbmRlcmluZy8uL3BhZ2VzL0NhcmQuanMiLCJ3ZWJwYWNrOi8vc2VydmVyLXNpZGUtcmVuZGVyaW5nLy4vcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vc2VydmVyLXNpZGUtcmVuZGVyaW5nLy4vc3RvcmUuanMiLCJ3ZWJwYWNrOi8vc2VydmVyLXNpZGUtcmVuZGVyaW5nLy4vcGFnZXMvQ2FyZC5tb2R1bGUuY3NzIiwid2VicGFjazovL3NlcnZlci1zaWRlLXJlbmRlcmluZy8uL3BhZ2VzL2luZGV4Lm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vc2VydmVyLXNpZGUtcmVuZGVyaW5nL2V4dGVybmFsIFwibmV4dC1yZWR1eC13cmFwcGVyXCIiLCJ3ZWJwYWNrOi8vc2VydmVyLXNpZGUtcmVuZGVyaW5nL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly9zZXJ2ZXItc2lkZS1yZW5kZXJpbmcvZXh0ZXJuYWwgXCJyZWFjdC1yZWR1eFwiIiwid2VicGFjazovL3NlcnZlci1zaWRlLXJlbmRlcmluZy9leHRlcm5hbCBcInJlYWN0L2pzeC1kZXYtcnVudGltZVwiIiwid2VicGFjazovL3NlcnZlci1zaWRlLXJlbmRlcmluZy9leHRlcm5hbCBcInJlZHV4XCIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNhcmRzdHlsZXMgZnJvbSAnLi9DYXJkLm1vZHVsZS5jc3MnO1xuXG5jb25zdCBDYXJkID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2NhcmRzdHlsZXMuY2FyZH0+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2FyZHN0eWxlcy5mcm9udH0+XG4gICAgICAgIDxpbWcgc3JjPVwiL2p1aWNlLmpwZ1wiIGFsdD1cIkF2YXRhclwiIGNsYXNzTmFtZT17Y2FyZHN0eWxlcy5jYXJkSW1hZ2V9IC8+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjYXJkc3R5bGVzLmNvbnRhaW5lcn0+XG4gICAgICAgICAgPGgzPlZpdGFtaW4gSnVpY2UgPHNwYW4gY2xhc3NOYW1lPXtjYXJkc3R5bGVzLnByaWNlfT4kMjQuOTk8L3NwYW4+PC9oMz4gXG4gICAgICAgICAgPHA+TmVlZCBhIGp1bXAgb24geW91ciB2aXRhbWlucyB3aGlsZSBkcmlua2luZz8gVGlyZWQgb2YgcG9wcGluZyB0aGUgcGlsbHM/IFxuICAgICAgICAgICAgRHJpbmsgb3VyIHZpdGFtaW4gZW5oYW5jZWQganVpY2UsIGF2YWlsYWJsZSBpbiBzZXZlcmFsIGZsYXZvdXJzLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZDtcbiIsImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIlxyXG5pbXBvcnQgc3R5bGVzIGZyb20gXCIuL2luZGV4Lm1vZHVsZS5jc3NcIlxyXG5pbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCJcclxuaW1wb3J0IHsgaW5pdFN0b3JlLCBpbml0aWFsQ2FyZHMsIGFkZEl0ZW0gfSBmcm9tIFwiLi4vc3RvcmVcIlxyXG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiXHJcblxyXG5jb25zdCBJbmRleCA9ICgpID0+IHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZURpc3BhdGNoKClcclxuICBjb25zdCB7IGNhcmRzIH0gPSBkaXNwYXRjaChpbml0aWFsQ2FyZHMoKSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXBwfT5cclxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxyXG4gICAgICAgIDxpbWcgc3JjPVwiL2xvZ28ucG5nXCIgY2xhc3NOYW1lPXtzdHlsZXMubG9nb30gYWx0PVwibG9nb1wiIC8+XHJcbiAgICAgIDwvaGVhZGVyPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmdyaWR9PlxyXG4gICAgICAgIHtjYXJkcy5tYXAoKGNhcmQpID0+IChcclxuICAgICAgICAgIDxDYXJkIGtleT17Y2FyZC5pZH0gLz5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIHsvKiA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IGRpc3BhdGNoKGFkZEl0ZW0oKSl9PjwvYnV0dG9uPiAqL31cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgaW5pdFN0b3JlLndpdGhSZWR1eChJbmRleCk7XHJcbiIsImltcG9ydCB7IGNyZWF0ZVdyYXBwZXIgfSBmcm9tICduZXh0LXJlZHV4LXdyYXBwZXInO1xyXG5pbXBvcnQgeyBjcmVhdGVTdG9yZSB9IGZyb20gJ3JlZHV4JztcclxuaW1wb3J0IGRhdGEgZnJvbSAnLi9wYWdlcy9BUEkvZGF0YS5qc29uJztcclxuXHJcbi8vIGluaXRpYWwgc3RhdGVcclxuY29uc3Qgc3RhcnRTdGF0ZSA9IHtcclxuICAgIGNhcmRzOiBbXVxyXG59O1xyXG5cclxuLy8gQWN0aW9uc1xyXG5leHBvcnQgY29uc3QgaW5pdGlhbENhcmRzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnSU5JVElBTENBUkRTJyxcclxuICAgICAgICBjYXJkczogZGF0YVxyXG4gICAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFkZEl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICB0eXBlOiAnQUREJyxcclxuICAgICAgICBpdGVtXHJcbiAgICB9XHJcbn07XHJcblxyXG4vLyByZWR1Y2Vyc1xyXG5leHBvcnQgY29uc3QgcmVkdWNlciA9IChzdGF0ZSA9IGluaXRpYWxTdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICAgICAgY2FzZSAnSU5JVElBTENBUkRTJzpcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIGNhcmRzOiBhY3Rpb24uY2FyZHMsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBjYXNlICdBREQnOlxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgICAgICAgICBjYXJkczogWy4uLnN0YXRlLmNhcmRzLCBhY3Rpb24uaXRlbV0sXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBkZWZhdWx0OiByZXR1cm4gc3RhdGVcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi8vIGNyZWF0ZSBzdG9yZVxyXG5jb25zdCBzdG9yZSA9IChpbml0aWFsU3RhdGUgPSBzdGFydFN0YXRlKSA9PiB7XHJcbiAgICByZXR1cm4gY3JlYXRlU3RvcmUocmVkdWNlciwgaW5pdGlhbFN0YXRlKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBpbml0U3RvcmUgPSBjcmVhdGVXcmFwcGVyKHN0b3JlKTtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiY2FyZFwiOiBcIkNhcmRfY2FyZF9fM2ZISXZcIixcblx0XCJmcm9udFwiOiBcIkNhcmRfZnJvbnRfX3NuRUhXXCIsXG5cdFwicHJpY2VcIjogXCJDYXJkX3ByaWNlX19EemFXcVwiLFxuXHRcImNvbnRhaW5lclwiOiBcIkNhcmRfY29udGFpbmVyX183SURBSVwiLFxuXHRcImNhcmRJbWFnZVwiOiBcIkNhcmRfY2FyZEltYWdlX18yZTFaQVwiXG59O1xuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwiYXBwXCI6IFwiaW5kZXhfYXBwX19kWDVNWlwiLFxuXHRcImdyaWRcIjogXCJpbmRleF9ncmlkX19rT01SRVwiLFxuXHRcImxvZ29cIjogXCJpbmRleF9sb2dvX19QcENTUlwiLFxuXHRcImhlYWRlclwiOiBcImluZGV4X2hlYWRlcl9fMXAzbWNcIlxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQtcmVkdXgtd3JhcHBlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZWR1eFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVkdXhcIik7Il0sIm5hbWVzIjpbImNhcmRzdHlsZXMiLCJDYXJkIiwicHJvcHMiLCJjYXJkIiwiZnJvbnQiLCJjYXJkSW1hZ2UiLCJjb250YWluZXIiLCJwcmljZSIsIlJlYWN0Iiwic3R5bGVzIiwiaW5pdFN0b3JlIiwiaW5pdGlhbENhcmRzIiwiYWRkSXRlbSIsInVzZURpc3BhdGNoIiwiSW5kZXgiLCJkaXNwYXRjaCIsImNhcmRzIiwiYXBwIiwiaGVhZGVyIiwibG9nbyIsImdyaWQiLCJtYXAiLCJpZCIsIndpdGhSZWR1eCIsImNyZWF0ZVdyYXBwZXIiLCJjcmVhdGVTdG9yZSIsImRhdGEiLCJzdGFydFN0YXRlIiwidHlwZSIsIml0ZW0iLCJyZWR1Y2VyIiwic3RhdGUiLCJpbml0aWFsU3RhdGUiLCJhY3Rpb24iLCJzdG9yZSJdLCJzb3VyY2VSb290IjoiIn0=