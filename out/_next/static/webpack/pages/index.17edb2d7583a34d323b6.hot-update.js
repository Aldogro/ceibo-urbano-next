webpackHotUpdate_N_E("pages/index",{

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
      if (!state.items.find(function (item) {
        return item === action.payload;
      })) {
        return {
          items: [].concat(Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.items), [_objectSpread(_objectSpread({}, action.payload), {}, {
            amount: 1
          })])
        };
      }

      console.log('el item ya existe');
      return {
        items: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.items)
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
    lineNumber: 47,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQ2FydC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkNhcnRTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsIkFjdGlvblR5cGUiLCJBRERfSVRFTSIsIlJFTU9WRV9JVEVNIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImZpbmQiLCJpdGVtIiwicGF5bG9hZCIsImFtb3VudCIsImNvbnNvbGUiLCJsb2ciLCJmaWx0ZXIiLCJpZCIsIkVycm9yIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ1c2VDYXJ0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsZ0JBQWdCLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQXpCO0FBRVAsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUU7QUFEWSxDQUFyQjtBQUlPLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsVUFBUSxFQUFFLFVBRGM7QUFFeEJDLGFBQVcsRUFBRTtBQUZXLENBQW5COztBQUtQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLTixVQUFVLENBQUNDLFFBQWhCO0FBQ0UsVUFBSSxDQUFDRyxLQUFLLENBQUNMLEtBQU4sQ0FBWVEsSUFBWixDQUFpQixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxLQUFLSCxNQUFNLENBQUNJLE9BQXBCO0FBQUEsT0FBckIsQ0FBTCxFQUF3RDtBQUN0RCxlQUFPO0FBQ0xWLGVBQUsseUxBQ0FLLEtBQUssQ0FBQ0wsS0FETixvQ0FHRU0sTUFBTSxDQUFDSSxPQUhUO0FBSURDLGtCQUFNLEVBQUU7QUFKUDtBQURBLFNBQVA7QUFTRDs7QUFDREMsYUFBTyxDQUFDQyxHQUFSLENBQVksbUJBQVo7QUFDQSxhQUFPO0FBQ0xiLGFBQUssRUFBRSw2S0FDRkssS0FBSyxDQUFDTCxLQUROO0FBREEsT0FBUDs7QUFLRixTQUFLQyxVQUFVLENBQUNFLFdBQWhCO0FBQ0UsYUFBTztBQUNMSCxhQUFLLEVBQUVBLEtBQUssQ0FBQ2MsTUFBTixDQUFhLFVBQUFMLElBQUk7QUFBQSxpQkFBSUEsSUFBSSxDQUFDTSxFQUFMLEtBQVlULE1BQU0sQ0FBQ0ksT0FBdkI7QUFBQSxTQUFqQjtBQURGLE9BQVA7O0FBR0Y7QUFDRSxZQUFNLElBQUlNLEtBQUosa0NBQW9DVixNQUFNLENBQUNDLElBQTNDLEVBQU47QUF4Qko7QUEwQkQsQ0EzQkQ7O0FBNkJPLElBQU1VLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG9CQUNsQkMsd0RBQVUsQ0FBQ2YsT0FBRCxFQUFVTCxZQUFWLENBRFE7QUFBQSxNQUNyQ00sS0FEcUM7QUFBQSxNQUM5QmUsUUFEOEI7O0FBRzVDLHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRSxDQUFDZixLQUFELEVBQVFlLFFBQVIsQ0FBbEM7QUFBQSxjQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBUk07O0dBQU1ELFk7O0tBQUFBLFk7QUFVTixJQUFNSSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBOztBQUFBLFNBQU1DLHdEQUFVLENBQUMxQixnQkFBRCxDQUFoQjtBQUFBLENBQWhCOztJQUFNeUIsTyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xN2VkYjJkNzU4M2EzNGQzMjNiNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0U3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY3Rpb25UeXBlID0ge1xyXG4gIEFERF9JVEVNOiAnQUREX0lURU0nLFxyXG4gIFJFTU9WRV9JVEVNOiAnUkVNT1ZFX0lURU0nLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuQUREX0lURU06XHJcbiAgICAgIGlmICghc3RhdGUuaXRlbXMuZmluZChpdGVtID0+IGl0ZW0gPT09IGFjdGlvbi5wYXlsb2FkKSkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS5pdGVtcyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgIGFtb3VudDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIGNvbnNvbGUubG9nKCdlbCBpdGVtIHlhIGV4aXN0ZScpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIC4uLnN0YXRlLml0ZW1zLFxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlJFTU9WRV9JVEVNOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGl0ZW1zOiBpdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkICE9PSBhY3Rpb24ucGF5bG9hZClcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0U3RhdGVDb250ZXh0KSJdLCJzb3VyY2VSb290IjoiIn0=