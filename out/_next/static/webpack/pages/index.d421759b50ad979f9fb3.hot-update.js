webpackHotUpdate_N_E("pages/index",{

/***/ "./services/Promo.context.js":
/*!***********************************!*\
  !*** ./services/Promo.context.js ***!
  \***********************************/
/*! exports provided: PromoStateContext, ActionType, PromoProvider, usePromo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoStateContext", function() { return PromoStateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoProvider", function() { return PromoProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePromo", function() { return usePromo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/firebase.config */ "./firebase/firebase.config.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\services\\Promo.context.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var PromoStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var initialState = {
  promo: {},
  promos: []
};
var ActionType = {
  CREATE_PROMO: 'CREATE_PROMO',
  SET_PROMO: 'SET_PROMO',
  SET_PROMOS: 'SET_PROMOS',
  GET_MAX_DISCOUNT: 'GET_MAX_DISCOUNT'
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.CREATE_PROMO:
      var id = new Date().getTime().toString();
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection('promos').doc(id).set(_objectSpread(_objectSpread({}, action.payload), {}, {
        id: id
      })).then(function () {
        return console.log('promo agregada');
      })["catch"](function (error) {
        return console.log('error al agregar una promo');
      });
      return;

    case ActionType.SET_PROMO:
      return _objectSpread(_objectSpread({}, state), {}, {
        promo: action.payload
      });

    case ActionType.SET_PROMOS:
      return _objectSpread(_objectSpread({}, state), {}, {
        promos: action.payload || []
      });

    default:
      throw new Error("Unhandled action type: ".concat(action.type));
  }
};

var PromoProvider = function PromoProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PromoStateContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 46,
    columnNumber: 5
  }, _this);
};

_s(PromoProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = PromoProvider;
var usePromo = function usePromo() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(PromoStateContext);
};

_s2(usePromo, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "PromoProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvUHJvbW8uY29udGV4dC5qcyJdLCJuYW1lcyI6WyJQcm9tb1N0YXRlQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInByb21vIiwicHJvbW9zIiwiQWN0aW9uVHlwZSIsIkNSRUFURV9QUk9NTyIsIlNFVF9QUk9NTyIsIlNFVF9QUk9NT1MiLCJHRVRfTUFYX0RJU0NPVU5UIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImlkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsImFwcCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJzZXQiLCJwYXlsb2FkIiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJlcnJvciIsIkVycm9yIiwiUHJvbW9Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlUHJvbW8iLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQTFCO0FBRVAsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsRUFEWTtBQUVuQkMsUUFBTSxFQUFFO0FBRlcsQ0FBckI7QUFLTyxJQUFNQyxVQUFVLEdBQUc7QUFDeEJDLGNBQVksRUFBRSxjQURVO0FBRXhCQyxXQUFTLEVBQUUsV0FGYTtBQUd4QkMsWUFBVSxFQUFFLFlBSFk7QUFJeEJDLGtCQUFnQixFQUFFO0FBSk0sQ0FBbkI7O0FBUVAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtSLFVBQVUsQ0FBQ0MsWUFBaEI7QUFDRSxVQUFNUSxFQUFFLEdBQUcsSUFBSUMsSUFBSixHQUFXQyxPQUFYLEdBQXFCQyxRQUFyQixFQUFYO0FBQ0FDLHVFQUFHLENBQUNDLFNBQUosR0FBZ0JDLFVBQWhCLENBQTJCLFFBQTNCLEVBQXFDQyxHQUFyQyxDQUF5Q1AsRUFBekMsRUFBNkNRLEdBQTdDLGlDQUFzRFYsTUFBTSxDQUFDVyxPQUE3RDtBQUFzRVQsVUFBRSxFQUFGQTtBQUF0RSxVQUNHVSxJQURILENBQ1E7QUFBQSxlQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWixDQUFOO0FBQUEsT0FEUixXQUVTLFVBQUNDLEtBQUQ7QUFBQSxlQUFXRixPQUFPLENBQUNDLEdBQVIsQ0FBWSw0QkFBWixDQUFYO0FBQUEsT0FGVDtBQUdBOztBQUNGLFNBQUtyQixVQUFVLENBQUNFLFNBQWhCO0FBQ0UsNkNBQ0tJLEtBREw7QUFFRVIsYUFBSyxFQUFFUyxNQUFNLENBQUNXO0FBRmhCOztBQUlGLFNBQUtsQixVQUFVLENBQUNHLFVBQWhCO0FBQ0UsNkNBQ0tHLEtBREw7QUFFRVAsY0FBTSxFQUFFUSxNQUFNLENBQUNXLE9BQVAsSUFBa0I7QUFGNUI7O0FBSUY7QUFDRSxZQUFNLElBQUlLLEtBQUosa0NBQW9DaEIsTUFBTSxDQUFDQyxJQUEzQyxFQUFOO0FBbEJKO0FBb0JELENBckJEOztBQXVCTyxJQUFNZ0IsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDbkJDLHdEQUFVLENBQUNyQixPQUFELEVBQVVSLFlBQVYsQ0FEUztBQUFBLE1BQ3RDUyxLQURzQztBQUFBLE1BQy9CcUIsUUFEK0I7O0FBRzdDLHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQTRCLFNBQUssRUFBRSxDQUFDckIsS0FBRCxFQUFRcUIsUUFBUixDQUFuQztBQUFBLGNBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FSTTs7R0FBTUQsYTs7S0FBQUEsYTtBQVVOLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQ25DLGlCQUFELENBQWhCO0FBQUEsQ0FBakI7O0lBQU1rQyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmQ0MjE3NTliNTBhZDk3OWY5ZmIzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXBwIGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9tb1N0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvbW86IHt9LFxyXG4gIHByb21vczogW10sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY3Rpb25UeXBlID0ge1xyXG4gIENSRUFURV9QUk9NTzogJ0NSRUFURV9QUk9NTycsXHJcbiAgU0VUX1BST01POiAnU0VUX1BST01PJyxcclxuICBTRVRfUFJPTU9TOiAnU0VUX1BST01PUycsXHJcbiAgR0VUX01BWF9ESVNDT1VOVDogJ0dFVF9NQVhfRElTQ09VTlQnLCBcclxufVxyXG5cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZS5DUkVBVEVfUFJPTU86XHJcbiAgICAgIGNvbnN0IGlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKVxyXG4gICAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvbW9zJykuZG9jKGlkKS5zZXQoeyAuLi5hY3Rpb24ucGF5bG9hZCwgaWQgfSlcclxuICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygncHJvbW8gYWdyZWdhZGEnKSlcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZygnZXJyb3IgYWwgYWdyZWdhciB1bmEgcHJvbW8nKSlcclxuICAgICAgcmV0dXJuXHJcbiAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1BST01POlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb21vOiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1BST01PUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9tb3M6IGFjdGlvbi5wYXlsb2FkIHx8IFtdLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb21vUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9tb1N0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1Byb21vU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVByb21vID0gKCkgPT4gdXNlQ29udGV4dChQcm9tb1N0YXRlQ29udGV4dCkiXSwic291cmNlUm9vdCI6IiJ9