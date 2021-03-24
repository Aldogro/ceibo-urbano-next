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
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\services\\Cart.context.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_2__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }


var CartStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3___default.a.createContext({});
var initialState = {
  items: [],
  paymentMethod: ''
};
var ActionType = {
  ADD_ITEM: 'ADD_ITEM',
  REMOVE_AMOUNT: 'REMOVE_AMOUNT',
  REMOVE_ITEM: 'REMOVE_ITEM',
  SET_PAYMENT_METHOD: 'SET_PAYMENT_METHOD'
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      if (state.items.filter(function (item) {
        return item.id === action.payload.id;
      }).length === 0) {
        return _objectSpread(_objectSpread({}, state), {}, {
          items: [].concat(Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.items), [_objectSpread(_objectSpread({}, action.payload), {}, {
            amount: 1
          })])
        });
      }

      state.items.filter(function (item) {
        return item.id === action.payload.id;
      })[0].amount += 1;
      return _objectSpread(_objectSpread({}, state), {}, {
        items: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.items)
      });

    case ActionType.REMOVE_AMOUNT:
      var idx = state.items.indexOf(action.payload);
      state.items.filter(function (item) {
        return item.id === action.payload.id;
      })[0].amount -= 1;

      if (state.items.filter(function (item) {
        return item.id === action.payload.id;
      })[0].amount < 1) {
        state.items.splice(idx, 1);
      }

      return _objectSpread(_objectSpread({}, state), {}, {
        items: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.items)
      });

    case ActionType.REMOVE_ITEM:
      var index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
      return _objectSpread(_objectSpread({}, state), {}, {
        items: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__["default"])(state.items)
      });

    case ActionType.SET_PAYMENT_METHOD:
      return _objectSpread(_objectSpread({}, state), {}, {
        paymentMethod: action.payload
      });

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
    lineNumber: 74,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQ2FydC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkNhcnRTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsInBheW1lbnRNZXRob2QiLCJBY3Rpb25UeXBlIiwiQUREX0lURU0iLCJSRU1PVkVfQU1PVU5UIiwiUkVNT1ZFX0lURU0iLCJTRVRfUEFZTUVOVF9NRVRIT0QiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiZmlsdGVyIiwiaXRlbSIsImlkIiwicGF5bG9hZCIsImxlbmd0aCIsImFtb3VudCIsImlkeCIsImluZGV4T2YiLCJzcGxpY2UiLCJpbmRleCIsIkVycm9yIiwiQ2FydFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ1c2VDYXJ0IiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRU8sSUFBTUEsZ0JBQWdCLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQXpCO0FBRVAsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsRUFEWTtBQUVuQkMsZUFBYSxFQUFFO0FBRkksQ0FBckI7QUFLTyxJQUFNQyxVQUFVLEdBQUc7QUFDeEJDLFVBQVEsRUFBRSxVQURjO0FBRXhCQyxlQUFhLEVBQUUsZUFGUztBQUd4QkMsYUFBVyxFQUFFLGFBSFc7QUFJeEJDLG9CQUFrQixFQUFFO0FBSkksQ0FBbkI7O0FBT1AsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtSLFVBQVUsQ0FBQ0MsUUFBaEI7QUFDRSxVQUFJSyxLQUFLLENBQUNSLEtBQU4sQ0FBWVcsTUFBWixDQUFtQixVQUFBQyxJ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dGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NzM0Zjc2OTZjYWRkYTMwZjFmMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0U3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBpdGVtczogW10sXHJcbiAgcGF5bWVudE1ldGhvZDogJydcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGUgPSB7XHJcbiAgQUREX0lURU06ICdBRERfSVRFTScsXHJcbiAgUkVNT1ZFX0FNT1VOVDogJ1JFTU9WRV9BTU9VTlQnLFxyXG4gIFJFTU9WRV9JVEVNOiAnUkVNT1ZFX0lURU0nLFxyXG4gIFNFVF9QQVlNRU5UX01FVEhPRDogJ1NFVF9QQVlNRU5UX01FVEhPRCcsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZS5BRERfSVRFTTpcclxuICAgICAgaWYgKHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKS5sZW5ndGggPT09IDApICB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgICAgLi4uc3RhdGUuaXRlbXMsXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgICAgICAgICBhbW91bnQ6IDFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXSxcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpWzBdLmFtb3VudCArPSAxXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIC4uLnN0YXRlLml0ZW1zLFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5SRU1PVkVfQU1PVU5UOlxyXG4gICAgICBjb25zdCBpZHggPSBzdGF0ZS5pdGVtcy5pbmRleE9mKGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICBzdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClbMF0uYW1vdW50IC09IDFcclxuICAgICAgaWYgKHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVswXS5hbW91bnQgPCAxKSB7XHJcbiAgICAgICAgc3RhdGUuaXRlbXMuc3BsaWNlKGlkeCwgMSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAuLi5zdGF0ZS5pdGVtcyxcclxuICAgICAgICBdLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuUkVNT1ZFX0lURU06XHJcbiAgICAgIGNvbnN0IGluZGV4ID0gc3RhdGUuaXRlbXMuaW5kZXhPZihhY3Rpb24ucGF5bG9hZClcclxuICAgICAgc3RhdGUuaXRlbXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAuLi5zdGF0ZS5pdGVtcyxcclxuICAgICAgICBdLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1BBWU1FTlRfTUVUSE9EOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHBheW1lbnRNZXRob2Q6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENhcnRTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9DYXJ0U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZUNhcnQgPSAoKSA9PiB1c2VDb250ZXh0KENhcnRTdGF0ZUNvbnRleHQpIl0sInNvdXJjZVJvb3QiOiIifQ==