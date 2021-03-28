webpackHotUpdate_N_E("pages/_app",{

/***/ "./services/Product.context.js":
/*!*************************************!*\
  !*** ./services/Product.context.js ***!
  \*************************************/
/*! exports provided: ProductStateContext, ActionType, ProductProvider, useProduct */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductStateContext", function() { return ProductStateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductProvider", function() { return ProductProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useProduct", function() { return useProduct; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/firebase.config */ "./firebase/firebase.config.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\services\\Product.context.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var ProductStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var initialState = {
  product: {},
  products: []
};
var ActionType = {
  CREATE_PRODUCT: 'CREATE_PRODUCT',
  SET_PRODUCT: 'SET_PRODUCT',
  SET_PRODUCTS: 'SET_PRODUCTS'
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.CREATE_PRODUCT:
      var id = new Date().getTime().toString();
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection('products').doc(id).set(_objectSpread(_objectSpread({}, action.payload), {}, {
        id: id
      })).then(function () {
        return console.log('producto creado');
      }) // FIX ME Agregar acá un toast que avise que se creó correctamente
      ["catch"](function (error) {
        return console.log(error);
      }); // toast que avise que algo salió mal

      return;

    case ActionType.SET_PRODUCT:
      return _objectSpread(_objectSpread({}, state), {}, {
        product: action.payload
      });

    case ActionType.SET_PRODUCTS:
      return _objectSpread(_objectSpread({}, state), {}, {
        products: action.payload
      });

    default:
      throw new Error("Unhandled action type: ".concat(action.type));
  }
};

var ProductProvider = function ProductProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductStateContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, _this);
};

_s(ProductProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = ProductProvider;
var useProduct = function useProduct() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(ProductStateContext);
};

_s2(useProduct, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "ProductProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvUHJvZHVjdC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFX1BST0RVQ1QiLCJTRVRfUFJPRFVDVCIsIlNFVF9QUk9EVUNUUyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwic2V0IiwicGF5bG9hZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJFcnJvciIsIlByb2R1Y3RQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlUHJvZHVjdCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFTyxJQUFNQSxtQkFBbUIsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsRUFBcEIsQ0FBNUI7QUFFUCxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxFQURVO0FBRW5CQyxVQUFRLEVBQUU7QUFGUyxDQUFyQjtBQUtPLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsZ0JBQWMsRUFBRSxnQkFEUTtBQUV4QkMsYUFBVyxFQUFFLGFBRlc7QUFHeEJDLGNBQVksRUFBRTtBQUhVLENBQW5COztBQU1QLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLUCxVQUFVLENBQUNDLGNBQWhCO0FBQ0UsVUFBTU8sRUFBRSxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxHQUFxQkMsUUFBckIsRUFBWDtBQUNBQyx1RUFBRyxDQUFDQyxTQUFKLEdBQWdCQyxVQUFoQixDQUEyQixVQUEzQixFQUF1Q0MsR0FBdkMsQ0FBMkNQLEVBQTNDLEVBQStDUSxHQUEvQyxpQ0FBd0RWLE1BQU0sQ0FBQ1csT0FBL0Q7QUFBd0VULFVBQUUsRUFBRkE7QUFBeEUsVUFDR1UsSUFESCxDQUNRO0FBQUEsZUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosQ0FBTjtBQUFBLE9BRFIsRUFDOEM7QUFEOUMsZ0JBRVMsVUFBQ0MsS0FBRDtBQUFBLGVBQVdGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLENBQVg7QUFBQSxPQUZULEVBRkYsQ0FJMEM7O0FBQ3hDOztBQUNGLFNBQUtyQixVQUFVLENBQUNFLFdBQWhCO0FBQ0UsNkNBQ0tHLEtBREw7QUFFRVAsZUFBTyxFQUFFUSxNQUFNLENBQUNXO0FBRmxCOztBQUlGLFNBQUtqQixVQUFVLENBQUNHLFlBQWhCO0FBQ0UsNkNBQ0tFLEtBREw7QUFFRU4sZ0JBQVEsRUFBRU8sTUFBTSxDQUFDVztBQUZuQjs7QUFJRjtBQUNFLFlBQU0sSUFBSUssS0FBSixrQ0FBb0NoQixNQUFNLENBQUNDLElBQTNDLEVBQU47QUFsQko7QUFvQkQsQ0FyQkQ7O0FBdUJPLElBQU1nQixlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG9CQUNyQkMsd0RBQVUsQ0FBQ3JCLE9BQUQsRUFBVVAsWUFBVixDQURXO0FBQUEsTUFDeENRLEtBRHdDO0FBQUEsTUFDakNxQixRQURpQzs7QUFHL0Msc0JBQ0UscUVBQUMsbUJBQUQsQ0FBcUIsUUFBckI7QUFBOEIsU0FBSyxFQUFFLENBQUNyQixLQUFELEVBQVFxQixRQUFSLENBQXJDO0FBQUEsY0FDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQVJNOztHQUFNRCxlOztLQUFBQSxlO0FBVU4sSUFBTUksVUFBVSxHQUFHLFNBQWJBLFVBQWE7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDbEMsbUJBQUQsQ0FBaEI7QUFBQSxDQUFuQjs7SUFBTWlDLFUiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43YTg3NDFiNThiNjcwMTM5NzcyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHByb2R1Y3Q6IHt9LFxyXG4gIHByb2R1Y3RzOiBbXSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGUgPSB7XHJcbiAgQ1JFQVRFX1BST0RVQ1Q6ICdDUkVBVEVfUFJPRFVDVCcsXHJcbiAgU0VUX1BST0RVQ1Q6ICdTRVRfUFJPRFVDVCcsXHJcbiAgU0VUX1BST0RVQ1RTOiAnU0VUX1BST0RVQ1RTJyxcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlLkNSRUFURV9QUk9EVUNUOlxyXG4gICAgICBjb25zdCBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKClcclxuICAgICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJykuZG9jKGlkKS5zZXQoeyAuLi5hY3Rpb24ucGF5bG9hZCwgaWQgfSlcclxuICAgICAgICAudGhlbigoKSA9PiBjb25zb2xlLmxvZygncHJvZHVjdG8gY3JlYWRvJykpIC8vIEZJWCBNRSBBZ3JlZ2FyIGFjw6EgdW4gdG9hc3QgcXVlIGF2aXNlIHF1ZSBzZSBjcmXDsyBjb3JyZWN0YW1lbnRlXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKSAvLyB0b2FzdCBxdWUgYXZpc2UgcXVlIGFsZ28gc2FsacOzIG1hbFxyXG4gICAgICByZXR1cm5cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfUFJPRFVDVDpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0OiBhY3Rpb24ucGF5bG9hZFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1BST0RVQ1RTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3RzOiBhY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0UHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9kdWN0U3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvUHJvZHVjdFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQcm9kdWN0ID0gKCkgPT4gdXNlQ29udGV4dChQcm9kdWN0U3RhdGVDb250ZXh0KSJdLCJzb3VyY2VSb290IjoiIn0=