webpackHotUpdate_N_E("pages/products",{

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
  GET_PRODUCT: 'GET_PRODUCT',
  GET_PRODUCTS: 'GET_PRODUCTS',
  SET_PRODUCT: 'SET_PRODUCT',
  SET_PRODUCTS: 'SET_PRODUCTS',
  DELETE_PRODUCT: 'DELETE_PRODUCT',
  UPDATE_PRODUCT: 'UPDATE_PRODUCT'
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

    case ActionType.DELETE_PRODUCT:
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection('products').doc(action.payload.toString())["delete"]().then(function () {
        return console.log('elemento borrado');
      }) // FIX ME Agregar acá un toast que avise que se borró
      ["catch"](function (error) {
        return console.log(error);
      }); // toast que avise que algo salió mal

      return;

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
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvUHJvZHVjdC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFX1BST0RVQ1QiLCJHRVRfUFJPRFVDVCIsIkdFVF9QUk9EVUNUUyIsIlNFVF9QUk9EVUNUIiwiU0VUX1BST0RVQ1RTIiwiREVMRVRFX1BST0RVQ1QiLCJVUERBVEVfUFJPRFVDVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJpZCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwic2V0IiwicGF5bG9hZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJFcnJvciIsIlByb2R1Y3RQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlUHJvZHVjdCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFFTyxJQUFNQSxtQkFBbUIsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsRUFBcEIsQ0FBNUI7QUFFUCxJQUFNQyxZQUFZLEdBQUc7QUFDbkJDLFNBQU8sRUFBRSxFQURVO0FBRW5CQyxVQUFRLEVBQUU7QUFGUyxDQUFyQjtBQUtPLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsZ0JBQWMsRUFBRSxnQkFEUTtBQUV4QkMsYUFBVyxFQUFFLGFBRlc7QUFHeEJDLGNBQVksRUFBRSxjQUhVO0FBSXhCQyxhQUFXLEVBQUUsYUFKVztBQUt4QkMsY0FBWSxFQUFFLGNBTFU7QUFNeEJDLGdCQUFjLEVBQUUsZ0JBTlE7QUFPeEJDLGdCQUFjLEVBQUU7QUFQUSxDQUFuQjs7QUFVUCxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS1gsVUFBVSxDQUFDQyxjQUFoQjtBQUNFLFVBQU1XLEVBQUUsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsR0FBcUJDLFFBQXJCLEVBQVg7QUFDQUMsdUVBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsVUFBM0IsRUFBdUNDLEdBQXZDLENBQTJDUCxFQUEzQyxFQUErQ1EsR0FBL0MsaUNBQXdEVixNQUFNLENBQUNXLE9BQS9EO0FBQXdFVCxVQUFFLEVBQUZBO0FBQXhFLFVBQ0dVLElBREgsQ0FDUTtBQUFBLGVBQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLENBQU47QUFBQSxPQURSLEVBQzhDO0FBRDlDLGdCQUVTLFVBQUNDLEtBQUQ7QUFBQSxlQUFXRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWixDQUFYO0FBQUEsT0FGVCxFQUZGLENBSTBDOztBQUN4Qzs7QUFDRixTQUFLekIsVUFBVSxDQUFDSSxXQUFoQjtBQUNFLDZDQUNLSyxLQURMO0FBRUVYLGVBQU8sRUFBRVksTUFBTSxDQUFDVztBQUZsQjs7QUFJRixTQUFLckIsVUFBVSxDQUFDSyxZQUFoQjtBQUNFLDZDQUNLSSxLQURMO0FBRUVWLGdCQUFRLEVBQUVXLE1BQU0sQ0FBQ1c7QUFGbkI7O0FBSUYsU0FBS3JCLFVBQVUsQ0FBQ00sY0FBaEI7QUFDRVUsdUVBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsVUFBM0IsRUFBdUNDLEdBQXZDLENBQTJDVCxNQUFNLENBQUNXLE9BQVAsQ0FBZU4sUUFBZixFQUEzQyxjQUNHTyxJQURILENBQ1E7QUFBQSxlQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixDQUFOO0FBQUEsT0FEUixFQUMrQztBQUQvQyxnQkFFUyxVQUFDQyxLQUFEO0FBQUEsZUFBV0YsT0FBTyxDQUFDQyxHQUFSLENBQVlDLEtBQVosQ0FBWDtBQUFBLE9BRlQsRUFERixDQUcwQzs7QUFDeEM7O0FBQ0Y7QUFDRSxZQUFNLElBQUlDLEtBQUosa0NBQW9DaEIsTUFBTSxDQUFDQyxJQUEzQyxFQUFOO0FBdkJKO0FBeUJELENBMUJEOztBQTRCTyxJQUFNZ0IsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDckJDLHdEQUFVLENBQUNyQixPQUFELEVBQVVYLFlBQVYsQ0FEVztBQUFBLE1BQ3hDWSxLQUR3QztBQUFBLE1BQ2pDcUIsUUFEaUM7O0FBRy9DLHNCQUNFLHFFQUFDLG1CQUFELENBQXFCLFFBQXJCO0FBQThCLFNBQUssRUFBRSxDQUFDckIsS0FBRCxFQUFRcUIsUUFBUixDQUFyQztBQUFBLGNBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FSTTs7R0FBTUQsZTs7S0FBQUEsZTtBQVVOLElBQU1JLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQ3RDLG1CQUFELENBQWhCO0FBQUEsQ0FBbkI7O0lBQU1xQyxVIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjQxZjA1YjEzMmQ2ZDU2ZTJhYzc4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IGFwcCBmcm9tICcuLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgcHJvZHVjdDoge30sXHJcbiAgcHJvZHVjdHM6IFtdLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aW9uVHlwZSA9IHtcclxuICBDUkVBVEVfUFJPRFVDVDogJ0NSRUFURV9QUk9EVUNUJyxcclxuICBHRVRfUFJPRFVDVDogJ0dFVF9QUk9EVUNUJyxcclxuICBHRVRfUFJPRFVDVFM6ICdHRVRfUFJPRFVDVFMnLFxyXG4gIFNFVF9QUk9EVUNUOiAnU0VUX1BST0RVQ1QnLFxyXG4gIFNFVF9QUk9EVUNUUzogJ1NFVF9QUk9EVUNUUycsXHJcbiAgREVMRVRFX1BST0RVQ1Q6ICdERUxFVEVfUFJPRFVDVCcsXHJcbiAgVVBEQVRFX1BST0RVQ1Q6ICdVUERBVEVfUFJPRFVDVCcsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZS5DUkVBVEVfUFJPRFVDVDpcclxuICAgICAgY29uc3QgaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpXHJcbiAgICAgIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9kdWN0cycpLmRvYyhpZCkuc2V0KHsgLi4uYWN0aW9uLnBheWxvYWQsIGlkIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ3Byb2R1Y3RvIGNyZWFkbycpKSAvLyBGSVggTUUgQWdyZWdhciBhY8OhIHVuIHRvYXN0IHF1ZSBhdmlzZSBxdWUgc2UgY3Jlw7MgY29ycmVjdGFtZW50ZVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSkgLy8gdG9hc3QgcXVlIGF2aXNlIHF1ZSBhbGdvIHNhbGnDsyBtYWxcclxuICAgICAgcmV0dXJuXHJcbiAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1BST0RVQ1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5ERUxFVEVfUFJPRFVDVDpcclxuICAgICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJykuZG9jKGFjdGlvbi5wYXlsb2FkLnRvU3RyaW5nKCkpLmRlbGV0ZSgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ2VsZW1lbnRvIGJvcnJhZG8nKSkgLy8gRklYIE1FIEFncmVnYXIgYWPDoSB1biB0b2FzdCBxdWUgYXZpc2UgcXVlIHNlIGJvcnLDs1xyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSkgLy8gdG9hc3QgcXVlIGF2aXNlIHF1ZSBhbGdvIHNhbGnDsyBtYWxcclxuICAgICAgcmV0dXJuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2R1Y3RTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Qcm9kdWN0U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVByb2R1Y3QgPSAoKSA9PiB1c2VDb250ZXh0KFByb2R1Y3RTdGF0ZUNvbnRleHQpIl0sInNvdXJjZVJvb3QiOiIifQ==