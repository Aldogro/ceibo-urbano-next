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
      console.log(state.items.indexOf(action.payload));
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
    lineNumber: 61,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQ2FydC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkNhcnRTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJpdGVtcyIsIkFjdGlvblR5cGUiLCJBRERfSVRFTSIsIlJFTU9WRV9BTU9VTlQiLCJSRU1PVkVfSVRFTSIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJmaWx0ZXIiLCJpdGVtIiwiaWQiLCJwYXlsb2FkIiwibGVuZ3RoIiwiYW1vdW50Iiwic3BsaWNlIiwiY29uc29sZSIsImxvZyIsImluZGV4T2YiLCJFcnJvciIsIkNhcnRQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlQ2FydCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGdCQUFnQixnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUF6QjtBQUVQLElBQU1DLFlBQVksR0FBRztBQUNuQkMsT0FBSyxFQUFFO0FBRFksQ0FBckI7QUFJTyxJQUFNQyxVQUFVLEdBQUc7QUFDeEJDLFVBQVEsRUFBRSxVQURjO0FBRXhCQyxlQUFhLEVBQUUsZUFGUztBQUd4QkMsYUFBVyxFQUFFO0FBSFcsQ0FBbkI7O0FBTVAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtQLFVBQVUsQ0FBQ0MsUUFBaEI7QUFDRSxVQUFJSSxLQUFLLENBQUNOLEtBQU4sQ0FBWVMsTUFBWixDQUFtQixVQUFBQyxJQUFJO0FBQUEsZUFBSUEsSUFBSSxDQUFDQyxFQUFMLEtBQVlKLE1BQU0sQ0FBQ0ssT0FBUCxDQUFlRCxFQUEvQjtBQUFBLE9BQXZCLEVBQTBERSxNQUExRCxLQUFxRSxDQUF6RSxFQUE2RTtBQUMzRSxlQUFPO0FBQ0xiLGVBQUsseUxBQ0FNLEtBQUssQ0FBQ04sS0FETixvQ0FHRU8sTUFBTSxDQUFDSyxPQUhUO0FBSURFLGtCQUFNLEVBQUU7QUFKUDtBQURBLFNBQVA7QUFTRDs7QUFDRFIsV0FBSyxDQUFDTixLQUFOLENBQVlTLE1BQVosQ0FBbUIsVUFBQUMsSUFBSTtBQUFBLGVBQUlBLElBQUksQ0FBQ0MsRUFBTCxLQUFZSixNQUFNLENBQUNLLE9BQVAsQ0FBZUQsRUFBL0I7QUFBQSxPQUF2QixFQUEwRCxDQUExRCxFQUE2REcsTUFBN0QsSUFBdUUsQ0FBdkU7QUFDQSxhQUFPO0FBQ0xkLGFBQUssRUFBRSw2S0FDRk0sS0FBSyxDQUFDTixLQUROO0FBREEsT0FBUDs7QUFLRixTQUFLQyxVQUFVLENBQUNFLGFBQWhCO0FBQ0VHLFdBQUssQ0FBQ04sS0FBTixDQUFZUyxNQUFaLENBQW1CLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWUosTUFBTSxDQUFDSyxPQUFQLENBQWVELEVBQS9CO0FBQUEsT0FBdkIsRUFBMEQsQ0FBMUQsRUFBNkRHLE1BQTdELElBQXVFLENBQXZFOztBQUNBLFVBQUlSLEtBQUssQ0FBQ04sS0FBTixDQUFZUyxNQUFaLENBQW1CLFVBQUFDLElBQUk7QUFBQSxlQUFJQSxJQUFJLENBQUNDLEVBQUwsS0FBWUosTUFBTSxDQUFDSyxPQUFQLENBQWVELEVBQS9CO0FBQUEsT0FBdkIsRUFBMEQsQ0FBMUQsRUFBNkRHLE1BQTdELEdBQXNFLENBQTFFLEVBQTZFO0FBQzNFUixhQUFLLENBQUNOLEtBQU4sQ0FBWWUsTUFBWixDQUFtQixDQUFuQixFQUFzQixDQUF0QjtBQUNEOztBQUNELGFBQU87QUFDTGYsYUFBSyxFQUFFLDZLQUNGTSxLQUFLLENBQUNOLEtBRE47QUFEQSxPQUFQOztBQUtGLFNBQUtDLFVBQVUsQ0FBQ0csV0FBaEI7QUFDRVksYUFBTyxDQUFDQyxHQUFSLENBQVlYLEtBQUssQ0FBQ04sS0FBTixDQUFZa0IsT0FBWixDQUFvQlgsTUFBTSxDQUFDSyxPQUEzQixDQUFaO0FBQ0EsYUFBTztBQUNMWixhQUFLLEVBQUUsNktBQ0ZNLEtBQUssQ0FBQ04sS0FETjtBQURBLE9BQVA7O0FBS0Y7QUFDRSxZQUFNLElBQUltQixLQUFKLGtDQUFvQ1osTUFBTSxDQUFDQyxJQUEzQyxFQUFOO0FBckNKO0FBdUNELENBeENEOztBQTBDTyxJQUFNWSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDbEJDLHdEQUFVLENBQUNqQixPQUFELEVBQVVOLFlBQVYsQ0FEUTtBQUFBLE1BQ3JDTyxLQURxQztBQUFBLE1BQzlCaUIsUUFEOEI7O0FBRzVDLHNCQUNFLHFFQUFDLGdCQUFELENBQWtCLFFBQWxCO0FBQTJCLFNBQUssRUFBRSxDQUFDakIsS0FBRCxFQUFRaUIsUUFBUixDQUFsQztBQUFBLGNBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FSTTs7R0FBTUQsWTs7S0FBQUEsWTtBQVVOLElBQU1JLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQzdCLGdCQUFELENBQWhCO0FBQUEsQ0FBaEI7O0lBQU00QixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQzN2FiYTY3MTllNDg0N2JjZWRkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IENhcnRTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIGl0ZW1zOiBbXSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGUgPSB7XHJcbiAgQUREX0lURU06ICdBRERfSVRFTScsXHJcbiAgUkVNT1ZFX0FNT1VOVDogJ1JFTU9WRV9BTU9VTlQnLFxyXG4gIFJFTU9WRV9JVEVNOiAnUkVNT1ZFX0lURU0nLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuQUREX0lURU06XHJcbiAgICAgIGlmIChzdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZCkubGVuZ3RoID09PSAwKSAge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgICAuLi5zdGF0ZS5pdGVtcyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICAgICAgICAgIGFtb3VudDogMVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVswXS5hbW91bnQgKz0gMVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAuLi5zdGF0ZS5pdGVtcyxcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5SRU1PVkVfQU1PVU5UOlxyXG4gICAgICBzdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBhY3Rpb24ucGF5bG9hZC5pZClbMF0uYW1vdW50IC09IDFcclxuICAgICAgaWYgKHN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IGFjdGlvbi5wYXlsb2FkLmlkKVswXS5hbW91bnQgPCAxKSB7XHJcbiAgICAgICAgc3RhdGUuaXRlbXMuc3BsaWNlKDAsIDEpXHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBpdGVtczogW1xyXG4gICAgICAgICAgLi4uc3RhdGUuaXRlbXMsXHJcbiAgICAgICAgXVxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuUkVNT1ZFX0lURU06XHJcbiAgICAgIGNvbnNvbGUubG9nKHN0YXRlLml0ZW1zLmluZGV4T2YoYWN0aW9uLnBheWxvYWQpKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIGl0ZW1zOiBbXHJcbiAgICAgICAgICAuLi5zdGF0ZS5pdGVtcyxcclxuICAgICAgICBdXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q2FydFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ2FydCA9ICgpID0+IHVzZUNvbnRleHQoQ2FydFN0YXRlQ29udGV4dCkiXSwic291cmNlUm9vdCI6IiJ9