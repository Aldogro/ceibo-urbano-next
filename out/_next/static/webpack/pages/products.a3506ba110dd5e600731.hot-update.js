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
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../firebase/firebase.config */ "./firebase/firebase.config.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\services\\Product.context.js",
    _s = $RefreshSig$(),
    _this = undefined,
    _s2 = $RefreshSig$(),
    _s3 = $RefreshSig$();

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
  _s();

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  switch (action.type) {
    case ActionType.CREATE_PRODUCT:
      var id = new Date().getTime().toString();
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_4__["default"].firestore().collection('products').doc(id).set(_objectSpread(_objectSpread({}, action.payload), {}, {
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
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_4__["default"].firestore().collection('products').doc(action.payload.toString())["delete"]().then(function () {
        return enqueueSnackbar('Producto Borrado correctamente', {
          variant: 'success'
        });
      }) // FIX ME Agregar acá un toast que avise que se borró
      ["catch"](function (error) {
        return console.log(error);
      }); // toast que avise que algo salió mal

      return;

    default:
      throw new Error("Unhandled action type: ".concat(action.type));
  }
};

_s(reducer, "cLw1NvfAu36DUMQTemMFXpkNHzk=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_3__["useSnackbar"]];
});

var ProductProvider = function ProductProvider(_ref) {
  _s2();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ProductStateContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s2(ProductProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = ProductProvider;
var useProduct = function useProduct() {
  _s3();

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(ProductStateContext);
};

_s3(useProduct, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvUHJvZHVjdC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFX1BST0RVQ1QiLCJHRVRfUFJPRFVDVCIsIkdFVF9QUk9EVUNUUyIsIlNFVF9QUk9EVUNUIiwiU0VUX1BST0RVQ1RTIiwiREVMRVRFX1BST0RVQ1QiLCJVUERBVEVfUFJPRFVDVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInR5cGUiLCJpZCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwic2V0IiwicGF5bG9hZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ2YXJpYW50IiwiRXJyb3IiLCJQcm9kdWN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZVByb2R1Y3QiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVPLElBQU1BLG1CQUFtQixnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUE1QjtBQUVQLElBQU1DLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLEVBRFU7QUFFbkJDLFVBQVEsRUFBRTtBQUZTLENBQXJCO0FBS08sSUFBTUMsVUFBVSxHQUFHO0FBQ3hCQyxnQkFBYyxFQUFFLGdCQURRO0FBRXhCQyxhQUFXLEVBQUUsYUFGVztBQUd4QkMsY0FBWSxFQUFFLGNBSFU7QUFJeEJDLGFBQVcsRUFBRSxhQUpXO0FBS3hCQyxjQUFZLEVBQUUsY0FMVTtBQU14QkMsZ0JBQWMsRUFBRSxnQkFOUTtBQU94QkMsZ0JBQWMsRUFBRTtBQVBRLENBQW5COztBQVVQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUFBOztBQUFBLHFCQUNVQyw2REFBVyxFQURyQjtBQUFBLE1BQ3pCQyxlQUR5QixnQkFDekJBLGVBRHlCO0FBQUEsTUFDUkMsYUFEUSxnQkFDUkEsYUFEUTs7QUFFakMsVUFBUUgsTUFBTSxDQUFDSSxJQUFmO0FBQ0UsU0FBS2QsVUFBVSxDQUFDQyxjQUFoQjtBQUNFLFVBQU1jLEVBQUUsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsR0FBcUJDLFFBQXJCLEVBQVg7QUFDQUMsdUVBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsVUFBM0IsRUFBdUNDLEdBQXZDLENBQTJDUCxFQUEzQyxFQUErQ1EsR0FBL0MsaUNBQXdEYixNQUFNLENBQUNjLE9BQS9EO0FBQXdFVCxVQUFFLEVBQUZBO0FBQXhFLFVBQ0dVLElBREgsQ0FDUTtBQUFBLGVBQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLENBQU47QUFBQSxPQURSLEVBQzhDO0FBRDlDLGdCQUVTLFVBQUNDLEtBQUQ7QUFBQSxlQUFXRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWixDQUFYO0FBQUEsT0FGVCxFQUZGLENBSTBDOztBQUN4Qzs7QUFDRixTQUFLNUIsVUFBVSxDQUFDSSxXQUFoQjtBQUNFLDZDQUNLSyxLQURMO0FBRUVYLGVBQU8sRUFBRVksTUFBTSxDQUFDYztBQUZsQjs7QUFJRixTQUFLeEIsVUFBVSxDQUFDSyxZQUFoQjtBQUNFLDZDQUNLSSxLQURMO0FBRUVWLGdCQUFRLEVBQUVXLE1BQU0sQ0FBQ2M7QUFGbkI7O0FBSUYsU0FBS3hCLFVBQVUsQ0FBQ00sY0FBaEI7QUFDRWEsdUVBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsVUFBM0IsRUFBdUNDLEdBQXZDLENBQTJDWixNQUFNLENBQUNjLE9BQVAsQ0FBZU4sUUFBZixFQUEzQyxjQUNHTyxJQURILENBQ1E7QUFBQSxlQUFNYixlQUFlLENBQUMsZ0NBQUQsRUFBbUM7QUFBRWlCLGlCQUFPLEVBQUU7QUFBWCxTQUFuQyxDQUFyQjtBQUFBLE9BRFIsRUFDd0Y7QUFEeEYsZ0JBRVMsVUFBQ0QsS0FBRDtBQUFBLGVBQVdGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLENBQVg7QUFBQSxPQUZULEVBREYsQ0FHMEM7O0FBQ3hDOztBQUNGO0FBQ0UsWUFBTSxJQUFJRSxLQUFKLGtDQUFvQ3BCLE1BQU0sQ0FBQ0ksSUFBM0MsRUFBTjtBQXZCSjtBQXlCRCxDQTNCRDs7R0FBTU4sTztVQUN1Q0cscUQ7OztBQTRCdEMsSUFBTW9CLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ3JCQyx3REFBVSxDQUFDekIsT0FBRCxFQUFVWCxZQUFWLENBRFc7QUFBQSxNQUN4Q1ksS0FEd0M7QUFBQSxNQUNqQ3lCLFFBRGlDOztBQUcvQyxzQkFDRSxxRUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixTQUFLLEVBQUUsQ0FBQ3pCLEtBQUQsRUFBUXlCLFFBQVIsQ0FBckM7QUFBQSxjQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBUk07O0lBQU1ELGU7O0tBQUFBLGU7QUFVTixJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBOztBQUFBLFNBQU1DLHdEQUFVLENBQUMxQyxtQkFBRCxDQUFoQjtBQUFBLENBQW5COztJQUFNeUMsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy5hMzUwNmJhMTEwZGQ1ZTYwMDczMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snXHJcblxyXG5pbXBvcnQgYXBwIGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmV4cG9ydCBjb25zdCBQcm9kdWN0U3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwcm9kdWN0OiB7fSxcclxuICBwcm9kdWN0czogW10sXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY3Rpb25UeXBlID0ge1xyXG4gIENSRUFURV9QUk9EVUNUOiAnQ1JFQVRFX1BST0RVQ1QnLFxyXG4gIEdFVF9QUk9EVUNUOiAnR0VUX1BST0RVQ1QnLFxyXG4gIEdFVF9QUk9EVUNUUzogJ0dFVF9QUk9EVUNUUycsXHJcbiAgU0VUX1BST0RVQ1Q6ICdTRVRfUFJPRFVDVCcsXHJcbiAgU0VUX1BST0RVQ1RTOiAnU0VUX1BST0RVQ1RTJyxcclxuICBERUxFVEVfUFJPRFVDVDogJ0RFTEVURV9QUk9EVUNUJyxcclxuICBVUERBVEVfUFJPRFVDVDogJ1VQREFURV9QUk9EVUNUJyxcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIsIGNsb3NlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKClcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuQ1JFQVRFX1BST0RVQ1Q6XHJcbiAgICAgIGNvbnN0IGlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKVxyXG4gICAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvZHVjdHMnKS5kb2MoaWQpLnNldCh7IC4uLmFjdGlvbi5wYXlsb2FkLCBpZCB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdwcm9kdWN0byBjcmVhZG8nKSkgLy8gRklYIE1FIEFncmVnYXIgYWPDoSB1biB0b2FzdCBxdWUgYXZpc2UgcXVlIHNlIGNyZcOzIGNvcnJlY3RhbWVudGVcclxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBjb25zb2xlLmxvZyhlcnJvcikpIC8vIHRvYXN0IHF1ZSBhdmlzZSBxdWUgYWxnbyBzYWxpw7MgbWFsXHJcbiAgICAgIHJldHVyblxyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9QUk9EVUNUOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb2R1Y3Q6IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfUFJPRFVDVFM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdHM6IGFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuREVMRVRFX1BST0RVQ1Q6XHJcbiAgICAgIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9kdWN0cycpLmRvYyhhY3Rpb24ucGF5bG9hZC50b1N0cmluZygpKS5kZWxldGUoKVxyXG4gICAgICAgIC50aGVuKCgpID0+IGVucXVldWVTbmFja2JhcignUHJvZHVjdG8gQm9ycmFkbyBjb3JyZWN0YW1lbnRlJywgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KSkgLy8gRklYIE1FIEFncmVnYXIgYWPDoSB1biB0b2FzdCBxdWUgYXZpc2UgcXVlIHNlIGJvcnLDs1xyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSkgLy8gdG9hc3QgcXVlIGF2aXNlIHF1ZSBhbGdvIHNhbGnDsyBtYWxcclxuICAgICAgcmV0dXJuXHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2R1Y3RTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Qcm9kdWN0U3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVByb2R1Y3QgPSAoKSA9PiB1c2VDb250ZXh0KFByb2R1Y3RTdGF0ZUNvbnRleHQpIl0sInNvdXJjZVJvb3QiOiIifQ==