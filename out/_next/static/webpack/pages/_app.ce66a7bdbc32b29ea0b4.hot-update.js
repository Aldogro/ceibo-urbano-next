webpackHotUpdate_N_E("pages/_app",{

/***/ "./services/Cart.context.js":
/*!**********************************!*\
  !*** ./services/Cart.context.js ***!
  \**********************************/
/*! exports provided: CartStateContext, ActionType, CartProvider, useCart */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartStateContext", function() { return CartStateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartProvider", function() { return CartProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCart", function() { return useCart; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\services\\Cart.context.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var CartStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});
var initialState = {
  items: []
};
var ActionType = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_ITEM: 'REMOVE_ITEM'
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      var amount = 0;
      console.log(state.items.find(function (item) {
        return item !== action.payload;
      }));
      return {
        items: [].concat(Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.items), [_objectSpread(_objectSpread({}, action.payload), {}, {
          amount: amount + 1
        })])
      };

    case ActionType.REMOVE_ITEM:
      return {
        items: items.filter(function (item) {
          return item.id !== action.payload;
        })
      };

    default:
      throw new Error("Unhandled action type: ".concat(action.type));
  }
};

var CartProvider = function CartProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_3__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CartStateContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_s(CartProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = CartProvider;
var useCart = function useCart() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_3__["useContext"])(CartStateContext);
};

_s2(useCart, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "CartProvider");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQ2FydC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkNhcnRTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsIkFjdGlvblR5cGUiLCJBRERfSVRFTSIsIlJFTU9WRV9JVEVNIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImFtb3VudCIsImNvbnNvbGUiLCJsb2ciLCJmaW5kIiwiaXRlbSIsInBheWxvYWQiLCJmaWx0ZXIiLCJpZCIsIkVycm9yIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ1c2VDYXJ0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsZ0JBQWdCLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQXpCO0FBRVAsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUU7QUFEWSxDQUFyQjtBQUlPLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsVUFBUSxFQUFFLFVBRGM7QUFFeEJDLGFBQVcsRUFBRTtBQUZXLENBQW5COztBQUtQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLTixVQUFVLENBQUNDLFFBQWhCO0FBQ0UsVUFBTU0sTUFBTSxHQUFHLENBQWY7QUFDQUMsYUFBTyxDQUFDQyxHQUFSLENBQVlMLEtBQUssQ0FBQ0wsS0FBTixDQUFZVyxJQUFaLENBQWlCLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLEtBQUtOLE1BQU0sQ0FBQ08sT0FBcEI7QUFBQSxPQUFyQixDQUFaO0FBQ0EsYUFBTztBQUNMYixhQUFLLHlMQUNBSyxLQUFLLENBQUNMLEtBRE4sb0NBR0VNLE1BQU0sQ0FBQ08sT0FIVDtBQUlETCxnQkFBTSxFQUFFQSxNQUFNLEdBQUc7QUFKaEI7QUFEQSxPQUFQOztBQVNGLFNBQUtQLFVBQVUsQ0FBQ0UsV0FBaEI7QUFDRSxhQUFPO0FBQ0xILGFBQUssRUFBRUEsS0FBSyxDQUFDYyxNQUFOLENBQWEsVUFBQUYsSUFBSTtBQUFBLGlCQUFJQSxJQUFJLENBQUNHLEVBQUwsS0FBWVQsTUFBTSxDQUFDTyxPQUF2QjtBQUFBLFNBQWpCO0FBREYsT0FBUDs7QUFHRjtBQUNFLFlBQU0sSUFBSUcsS0FBSixrQ0FBb0NWLE1BQU0sQ0FBQ0MsSUFBM0MsRUFBTjtBQWxCSjtBQW9CRCxDQXJCRDs7QUF1Qk8sSUFBTVUsWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ2xCQyx3REFBVSxDQUFDZixPQUFELEVBQVVMLFlBQVYsQ0FEUTtBQUFBLE1BQ3JDTSxLQURxQztBQUFBLE1BQzlCZSxRQUQ4Qjs7QUFHNUMsc0JBQ0UscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFLENBQUNmLEtBQUQsRUFBUWUsUUFBUixDQUFsQztBQUFBLGNBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FSTTs7R0FBTUQsWTs7S0FBQUEsWTtBQVVOLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQzFCLGdCQUFELENBQWhCO0FBQUEsQ0FBaEI7O0lBQU15QixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuY2U2NmE3YmRiYzMyYjI5ZWEwYjQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXRlbXM6IFtdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aW9uVHlwZSA9IHtcclxuICBBRERfSVRFTTogJ0FERF9JVEVNJyxcclxuICBSRU1PVkVfSVRFTTogJ1JFTU9WRV9JVEVNJyxcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlLkFERF9JVEVNOlxyXG4gICAgICBjb25zdCBhbW91bnQgPSAwXHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLml0ZW1zLmZpbmQoaXRlbSA9PiBpdGVtICE9PSBhY3Rpb24ucGF5bG9hZCkpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIC4uLnN0YXRlLml0ZW1zLFxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgYW1vdW50OiBhbW91bnQgKyAxLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5SRU1PVkVfSVRFTTpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpdGVtczogaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCAhPT0gYWN0aW9uLnBheWxvYWQpXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHVzZUNvbnRleHQoQ2FydFN0YXRlQ29udGV4dCkiXSwic291cmNlUm9vdCI6IiJ9