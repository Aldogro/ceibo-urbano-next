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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvUHJvZHVjdC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIlByb2R1Y3RTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJwcm9kdWN0IiwicHJvZHVjdHMiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFX1BST0RVQ1QiLCJHRVRfUFJPRFVDVCIsIkdFVF9QUk9EVUNUUyIsIlNFVF9QUk9EVUNUIiwiU0VUX1BST0RVQ1RTIiwiREVMRVRFX1BST0RVQ1QiLCJVUERBVEVfUFJPRFVDVCIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInR5cGUiLCJpZCIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZG9jIiwic2V0IiwicGF5bG9hZCIsInRoZW4iLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJ2YXJpYW50IiwiRXJyb3IiLCJQcm9kdWN0UHJvdmlkZXIiLCJjaGlsZHJlbiIsInVzZVJlZHVjZXIiLCJkaXNwYXRjaCIsInVzZVByb2R1Y3QiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUVPLElBQU1BLG1CQUFtQixnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUE1QjtBQUVQLElBQU1DLFlBQVksR0FBRztBQUNuQkMsU0FBTyxFQUFFLEVBRFU7QUFFbkJDLFVBQVEsRUFBRTtBQUZTLENBQXJCO0FBS08sSUFBTUMsVUFBVSxHQUFHO0FBQ3hCQyxnQkFBYyxFQUFFLGdCQURRO0FBRXhCQyxhQUFXLEVBQUUsYUFGVztBQUd4QkMsY0FBWSxFQUFFLGNBSFU7QUFJeEJDLGFBQVcsRUFBRSxhQUpXO0FBS3hCQyxjQUFZLEVBQUUsY0FMVTtBQU14QkMsZ0JBQWMsRUFBRSxnQkFOUTtBQU94QkMsZ0JBQWMsRUFBRTtBQVBRLENBQW5COztBQVVQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUFBOztBQUFBLHFCQUNVQyw2REFBVyxFQURyQjtBQUFBLE1BQ3pCQyxlQUR5QixnQkFDekJBLGVBRHlCO0FBQUEsTUFDUkMsYUFEUSxnQkFDUkEsYUFEUTs7QUFFakMsVUFBUUgsTUFBTSxDQUFDSSxJQUFmO0FBQ0UsU0FBS2QsVUFBVSxDQUFDQyxjQUFoQjtBQUNFLFVBQU1jLEVBQUUsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsR0FBcUJDLFFBQXJCLEVBQVg7QUFDQUMsdUVBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsVUFBM0IsRUFBdUNDLEdBQXZDLENBQTJDUCxFQUEzQyxFQUErQ1EsR0FBL0MsaUNBQXdEYixNQUFNLENBQUNjLE9BQS9EO0FBQXdFVCxVQUFFLEVBQUZBO0FBQXhFLFVBQ0dVLElBREgsQ0FDUTtBQUFBLGVBQU1DLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLENBQU47QUFBQSxPQURSLEVBQzhDO0FBRDlDLGdCQUVTLFVBQUNDLEtBQUQ7QUFBQSxlQUFXRixPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWixDQUFYO0FBQUEsT0FGVCxFQUZGLENBSTBDOztBQUN4Qzs7QUFDRixTQUFLNUIsVUFBVSxDQUFDSSxXQUFoQjtBQUNFLDZDQUNLSyxLQURMO0FBRUVYLGVBQU8sRUFBRVksTUFBTSxDQUFDYztBQUZsQjs7QUFJRixTQUFLeEIsVUFBVSxDQUFDSyxZQUFoQjtBQUNFLDZDQUNLSSxLQURMO0FBRUVWLGdCQUFRLEVBQUVXLE1BQU0sQ0FBQ2M7QUFGbkI7O0FBSUYsU0FBS3hCLFVBQVUsQ0FBQ00sY0FBaEI7QUFDRWEsdUVBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsVUFBM0IsRUFBdUNDLEdBQXZDLENBQTJDWixNQUFNLENBQUNjLE9BQVAsQ0FBZU4sUUFBZixFQUEzQyxjQUNHTyxJQURILENBQ1E7QUFBQSxlQUFNYixlQUFlLENBQUMsZ0NBQUQsRUFBbUM7QUFBRWlCLGlCQUFPLEVBQUU7QUFBWCxTQUFuQyxDQUFyQjtBQUFBLE9BRFIsRUFDd0Y7QUFEeEYsZ0JBRVMsVUFBQ0QsS0FBRDtBQUFBLGVBQVdGLE9BQU8sQ0FBQ0MsR0FBUixDQUFZQyxLQUFaLENBQVg7QUFBQSxPQUZULEVBREYsQ0FHMEM7O0FBQ3hDOztBQUNGO0FBQ0UsWUFBTSxJQUFJRSxLQUFKLGtDQUFvQ3BCLE1BQU0sQ0FBQ0ksSUFBM0MsRUFBTjtBQXZCSjtBQXlCRCxDQTNCRDs7R0FBTU4sTztVQUN1Q0cscUQ7OztBQTRCdEMsSUFBTW9CLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ3JCQyx3REFBVSxDQUFDekIsT0FBRCxFQUFVWCxZQUFWLENBRFc7QUFBQSxNQUN4Q1ksS0FEd0M7QUFBQSxNQUNqQ3lCLFFBRGlDOztBQUcvQyxzQkFDRSxxRUFBQyxtQkFBRCxDQUFxQixRQUFyQjtBQUE4QixTQUFLLEVBQUUsQ0FBQ3pCLEtBQUQsRUFBUXlCLFFBQVIsQ0FBckM7QUFBQSxjQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBUk07O0lBQU1ELGU7O0tBQUFBLGU7QUFVTixJQUFNSSxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBOztBQUFBLFNBQU1DLHdEQUFVLENBQUMxQyxtQkFBRCxDQUFoQjtBQUFBLENBQW5COztJQUFNeUMsVSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmEzNTA2YmExMTBkZDVlNjAwNzMxLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjaydcclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb2R1Y3RTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHByb2R1Y3Q6IHt9LFxyXG4gIHByb2R1Y3RzOiBbXSxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGUgPSB7XHJcbiAgQ1JFQVRFX1BST0RVQ1Q6ICdDUkVBVEVfUFJPRFVDVCcsXHJcbiAgR0VUX1BST0RVQ1Q6ICdHRVRfUFJPRFVDVCcsXHJcbiAgR0VUX1BST0RVQ1RTOiAnR0VUX1BST0RVQ1RTJyxcclxuICBTRVRfUFJPRFVDVDogJ1NFVF9QUk9EVUNUJyxcclxuICBTRVRfUFJPRFVDVFM6ICdTRVRfUFJPRFVDVFMnLFxyXG4gIERFTEVURV9QUk9EVUNUOiAnREVMRVRFX1BST0RVQ1QnLFxyXG4gIFVQREFURV9QUk9EVUNUOiAnVVBEQVRFX1BST0RVQ1QnLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciwgY2xvc2VTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKVxyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZS5DUkVBVEVfUFJPRFVDVDpcclxuICAgICAgY29uc3QgaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpXHJcbiAgICAgIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9kdWN0cycpLmRvYyhpZCkuc2V0KHsgLi4uYWN0aW9uLnBheWxvYWQsIGlkIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ3Byb2R1Y3RvIGNyZWFkbycpKSAvLyBGSVggTUUgQWdyZWdhciBhY8OhIHVuIHRvYXN0IHF1ZSBhdmlzZSBxdWUgc2UgY3Jlw7MgY29ycmVjdGFtZW50ZVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKGVycm9yKSkgLy8gdG9hc3QgcXVlIGF2aXNlIHF1ZSBhbGdvIHNhbGnDsyBtYWxcclxuICAgICAgcmV0dXJuXHJcbiAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1BST0RVQ1Q6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvZHVjdDogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9QUk9EVUNUUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9kdWN0czogYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5ERUxFVEVfUFJPRFVDVDpcclxuICAgICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJykuZG9jKGFjdGlvbi5wYXlsb2FkLnRvU3RyaW5nKCkpLmRlbGV0ZSgpXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gZW5xdWV1ZVNuYWNrYmFyKCdQcm9kdWN0byBCb3JyYWRvIGNvcnJlY3RhbWVudGUnLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJ30pKSAvLyBGSVggTUUgQWdyZWdhciBhY8OhIHVuIHRvYXN0IHF1ZSBhdmlzZSBxdWUgc2UgYm9ycsOzXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coZXJyb3IpKSAvLyB0b2FzdCBxdWUgYXZpc2UgcXVlIGFsZ28gc2FsacOzIG1hbFxyXG4gICAgICByZXR1cm5cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgUHJvZHVjdFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZHVjdFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1Byb2R1Y3RTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlUHJvZHVjdCA9ICgpID0+IHVzZUNvbnRleHQoUHJvZHVjdFN0YXRlQ29udGV4dCkiXSwic291cmNlUm9vdCI6IiJ9