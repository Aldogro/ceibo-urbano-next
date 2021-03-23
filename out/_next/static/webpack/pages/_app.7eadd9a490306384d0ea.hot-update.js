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
  REMOVE_AMOUNT: 'REMOVE_AMOUNT',
  REMOVE_ITEM: 'REMOVE_ITEM'
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.ADD_ITEM:
      if (state.items.filter(function (item) {
        return item.id === action.payload.id;
      }).length === 0) {
        return {
          items: [].concat(Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.items), [_objectSpread(_objectSpread({}, action.payload), {}, {
            amount: 1
          })])
        };
      }

      state.items.filter(function (item) {
        return item.id === action.payload.id;
      })[0].amount += 1;
      return {
        items: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.items)
      };

    case ActionType.REMOVE_AMOUNT:
      state.items.filter(function (item) {
        return item.id === action.payload.id;
      })[0].amount -= 1;

      if (state.items.filter(function (item) {
        return item.id === action.payload.id;
      })[0].amount < 1) {
        state.items.splice(0, 1);
      }

      return {
        items: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.items)
      };

    case ActionType.REMOVE_ITEM:
      var index = state.items.indexOf(action.payload);
      state.items.splice(index, 1);
      return {
        items: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(state.items)
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
    lineNumber: 62,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQ2FydC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkNhcnRTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsIkFjdGlvblR5cGUiLCJBRERfSVRFTSIsIlJFTU9WRV9BTU9VTlQiLCJSRU1PVkVfSVRFTSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJmaWx0ZXIiLCJpdGVtIiwiaWQiLCJwYXlsb2FkIiwibGVuZ3RoIiwiYW1vdW50Iiwic3BsaWNlIiwiaW5kZXgiLCJpbmRleE9mIiwiRXJyb3IiLCJDYXJ0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZUNhcnQiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsRUFBcEIsQ0FBekI7QUFFUCxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLE9BQUssRUFBRTtBQURZLENBQXJCO0FBSU8sSUFBTUMsVUFBVSxHQUFHO0FBQ3hCQyxVQUFRLEVBQUUsVUFEYztBQUV4QkMsZUFBYSxFQUFFLGVBRlM7QUFHeEJDLGFBQVcsRUFBRTtBQUhXLENBQW5COztBQU1QLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLUCxVQUFVLENBQUNDLFFBQWhCO0FBQ0UsVUFBSUksS0FBSyxDQUFDTixLQUFOLENBQVlTLE1BQVosQ0FBbUIsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZSixNQUFNLENBQUNLLE9BQVAsQ0FBZUQsRUFBL0I7QUFBQSxPQUF2QixFQUEwREUsTUFBMUQsS0FBcUUsQ0FBekUsRUFBNkU7QUFDM0UsZUFBTztBQUNMYixlQUFLLHlMQUNBTSxLQUFLLENBQUNOLEtBRE4sb0NBR0VPLE1BQU0sQ0FBQ0ssT0FIVDtBQUlERSxrQkFBTSxFQUFFO0FBSlA7QUFEQSxTQUFQO0FBU0Q7O0FBQ0RSLFdBQUssQ0FBQ04sS0FBTixDQUFZUyxNQUFaLENBQW1CLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWUosTUFBTSxDQUFDSyxPQUFQLENBQWVELEVBQS9CO0FBQUEsT0FBdkIsRUFBMEQsQ0FBMUQsRUFBNkRHLE1BQTdELElBQXVFLENBQXZFO0FBQ0EsYUFBTztBQUNMZCxhQUFLLEVBQUUsNktBQ0ZNLEtBQUssQ0FBQ04sS0FETjtBQURBLE9BQVA7O0FBS0YsU0FBS0MsVUFBVSxDQUFDRSxhQUFoQjtBQUNFRyxXQUFLLENBQUNOLEtBQU4sQ0FBWVMsTUFBWixDQUFtQixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlRCxFQUEvQjtBQUFBLE9BQXZCLEVBQTBELENBQTFELEVBQTZERyxNQUE3RCxJQUF1RSxDQUF2RTs7QUFDQSxVQUFJUixLQUFLLENBQUNOLEtBQU4sQ0FBWVMsTUFBWixDQUFtQixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlRCxFQUEvQjtBQUFBLE9BQXZCLEVBQTBELENBQTFELEVBQTZERyxNQUE3RCxHQUFzRSxDQUExRSxFQUE2RTtBQUMzRVIsYUFBSyxDQUFDTixLQUFOLENBQVllLE1BQVosQ0FBbUIsQ0FBbkIsRUFBc0IsQ0FBdEI7QUFDRDs7QUFDRCxhQUFPO0FBQ0xmLGFBQUssRUFBRSw2S0FDRk0sS0FBSyxDQUFDTixLQUROO0FBREEsT0FBUDs7QUFLRixTQUFLQyxVQUFVLENBQUNHLFdBQWhCO0FBQ0UsVUFBTVksS0FBSyxHQUFHVixLQUFLLENBQUNOLEtBQU4sQ0FBWWlCLE9BQVosQ0FBb0JWLE1BQU0sQ0FBQ0ssT0FBM0IsQ0FBZDtBQUNBTixXQUFLLENBQUNOLEtBQU4sQ0FBWWUsTUFBWixDQUFtQkMsS0FBbkIsRUFBMEIsQ0FBMUI7QUFDQSxhQUFPO0FBQ0xoQixhQUFLLEVBQUUsNktBQ0ZNLEtBQUssQ0FBQ04sS0FETjtBQURBLE9BQVA7O0FBS0Y7QUFDRSxZQUFNLElBQUlrQixLQUFKLGtDQUFvQ1gsTUFBTSxDQUFDQyxJQUEzQyxFQUFOO0FBdENKO0FBd0NELENBekNEOztBQTJDTyxJQUFNVyxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDbEJDLHdEQUFVLENBQUNoQixPQUFELEVBQVVOLFlBQVYsQ0FEUTtBQUFBLE1BQ3JDTyxLQURxQztBQUFBLE1BQzlCZ0IsUUFEOEI7O0FBRzVDLHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRSxDQUFDaEIsS0FBRCxFQUFRZ0IsUUFBUixDQUFsQztBQUFBLGNBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FSTTs7R0FBTUQsWTs7S0FBQUEsWTtBQVVOLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQzVCLGdCQUFELENBQWhCO0FBQUEsQ0FBaEI7O0lBQU0yQixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuN2VhZGQ5YTQ5MDMwNjM4NGQwZWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaXRlbXM6IFtdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aW9uVHlwZSA9IHtcclxuICBBRERfSVRFTTogJ0FERF9JVEVNJyxcclxuICBSRU1PVkVfQU1PVU5UOiAnUkVNT1ZFX0FNT1VOVCcsXHJcbiAgUkVNT1ZFX0lURU06ICdSRU1PVkVfSVRFTScsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZS5BRERfSVRFTTpcclxuICAgICAgaWYgKHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKS5sZW5ndGggPT09IDApICB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAgIC4uLnN0YXRlLml0ZW1zLFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgICAgICAgICAgYW1vdW50OiAxXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpWzBdLmFtb3VudCArPSAxXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIC4uLnN0YXRlLml0ZW1zLFxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlJFTU9WRV9BTU9VTlQ6XHJcbiAgICAgIHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVswXS5hbW91bnQgLT0gMVxyXG4gICAgICBpZiAoc3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gYWN0aW9uLnBheWxvYWQuaWQpWzBdLmFtb3VudCA8IDEpIHtcclxuICAgICAgICBzdGF0ZS5pdGVtcy5zcGxpY2UoMCwgMSlcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAuLi5zdGF0ZS5pdGVtcyxcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5SRU1PVkVfSVRFTTpcclxuICAgICAgY29uc3QgaW5kZXggPSBzdGF0ZS5pdGVtcy5pbmRleE9mKGFjdGlvbi5wYXlsb2FkKVxyXG4gICAgICBzdGF0ZS5pdGVtcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgaXRlbXM6IFtcclxuICAgICAgICAgIC4uLnN0YXRlLml0ZW1zLFxyXG4gICAgICAgIF1cclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDYXJ0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQ2FydFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDYXJ0ID0gKCkgPT4gdXNlQ29udGV4dChDYXJ0U3RhdGVDb250ZXh0KSJdLCJzb3VyY2VSb290IjoiIn0=