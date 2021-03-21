webpackHotUpdate_N_E("pages/products/[id]/edit",{

/***/ "./pages/products/[id]/edit.js":
/*!*************************************!*\
  !*** ./pages/products/[id]/edit.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _modules_components_form_FormProduct__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../modules/components/form/FormProduct */ "./modules/components/form/FormProduct.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _services_Product_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../services/Product.context */ "./services/Product.context.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../firebase/firebase.config */ "./firebase/firebase.config.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\products\\[id]\\edit.js",
    _this = undefined,
    _s = $RefreshSig$();











var EditProductPage = function EditProductPage() {
  _s();

  var _useProduct = Object(_services_Product_context__WEBPACK_IMPORTED_MODULE_9__["useProduct"])(),
      _useProduct2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useProduct, 2),
      productState = _useProduct2[0],
      productDispatch = _useProduct2[1];

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var id = router.query.id;

    if (router.query.id) {
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_10__["default"].firestore().collection('products').doc(id).get().then(function (snapshot) {
        productDispatch({
          type: _services_Product_context__WEBPACK_IMPORTED_MODULE_9__["ActionType"].SET_PRODUCT,
          payload: snapshot.data()
        });
      });
    }
  }, [router.query]);

  var updateProduct = function updateProduct(data) {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_10__["default"].firestore().collection('products').doc(router.query.id).update(data).then(function () {
      return router.push('/products');
    }) // FIX ME agregar toast que avise que se editó correctamente
    ["catch"](function (error) {
      return console.log(error);
    }); // toast que avise que algo salió mal
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 37,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        className: classes.title,
        variant: "h4",
        children: "Editar Productos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 39,
        columnNumber: 9
      }, _this), productState !== null && productState !== void 0 && productState.product ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_components_form_FormProduct__WEBPACK_IMPORTED_MODULE_5__["default"], {
        onSubmit: function onSubmit(data) {
          return updateProduct(data);
        },
        product: productState.product
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 13
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 36,
    columnNumber: 5
  }, _this);
};

_s(EditProductPage, "0op7P3mFpOTJtuwKGxRonAFGZFw=", false, function () {
  return [_services_Product_context__WEBPACK_IMPORTED_MODULE_9__["useProduct"], useStyles, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = EditProductPage;
/* harmony default export */ __webpack_exports__["default"] = (EditProductPage);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    title: {
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  };
});

var _c;

$RefreshReg$(_c, "EditProductPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvL2VkaXQuanMiXSwibmFtZXMiOlsiRWRpdFByb2R1Y3RQYWdlIiwidXNlUHJvZHVjdCIsInByb2R1Y3RTdGF0ZSIsInByb2R1Y3REaXNwYXRjaCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VFZmZlY3QiLCJpZCIsInF1ZXJ5IiwiYXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsInR5cGUiLCJBY3Rpb25UeXBlIiwiU0VUX1BST0RVQ1QiLCJwYXlsb2FkIiwiZGF0YSIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGUiLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJwcm9kdWN0IiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxvQkFDWUMsNEVBQVUsRUFEdEI7QUFBQTtBQUFBLE1BQ3JCQyxZQURxQjtBQUFBLE1BQ1BDLGVBRE87O0FBRTVCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQUEsUUFDTkMsRUFETSxHQUNDSCxNQUFNLENBQUNJLEtBRFIsQ0FDTkQsRUFETTs7QUFFZCxRQUFJSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUQsRUFBakIsRUFBcUI7QUFDbkJFLHdFQUFHLENBQUNDLFNBQUosR0FBZ0JDLFVBQWhCLENBQTJCLFVBQTNCLEVBQXVDQyxHQUF2QyxDQUEyQ0wsRUFBM0MsRUFBK0NNLEdBQS9DLEdBQ0dDLElBREgsQ0FDUSxVQUFBQyxRQUFRLEVBQUk7QUFDaEJkLHVCQUFlLENBQUM7QUFDZGUsY0FBSSxFQUFFQyxvRUFBVSxDQUFDQyxXQURIO0FBRWRDLGlCQUFPLEVBQUVKLFFBQVEsQ0FBQ0ssSUFBVDtBQUZLLFNBQUQsQ0FBZjtBQUlELE9BTkg7QUFPRDtBQUNGLEdBWFEsRUFXTixDQUFDaEIsTUFBTSxDQUFDSSxLQUFSLENBWE0sQ0FBVDs7QUFhQSxNQUFNYSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNELElBQUQsRUFBVTtBQUM5Qlgsc0VBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsVUFBM0IsRUFBdUNDLEdBQXZDLENBQTJDUixNQUFNLENBQUNJLEtBQVAsQ0FBYUQsRUFBeEQsRUFBNERlLE1BQTVELENBQW1FRixJQUFuRSxFQUNHTixJQURILENBQ1E7QUFBQSxhQUFNVixNQUFNLENBQUNtQixJQUFQLENBQVksV0FBWixDQUFOO0FBQUEsS0FEUixFQUN3QztBQUR4QyxjQUVTLFVBQUFDLEtBQUs7QUFBQSxhQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsS0FBWixDQUFKO0FBQUEsS0FGZCxFQUQ4QixDQUdRO0FBQ3ZDLEdBSkQ7O0FBTUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsbUVBQUQ7QUFBQSw4QkFDRSxxRUFBQyxvRUFBRDtBQUFZLGlCQUFTLEVBQUV0QixPQUFPLENBQUN5QixLQUEvQjtBQUFzQyxlQUFPLEVBQUMsSUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUlHM0IsWUFBWSxTQUFaLElBQUFBLFlBQVksV0FBWixJQUFBQSxZQUFZLENBQUU0QixPQUFkLGdCQUNHLHFFQUFDLDRFQUFEO0FBQWEsZ0JBQVEsRUFBRSxrQkFBQ1IsSUFBRDtBQUFBLGlCQUFVQyxhQUFhLENBQUNELElBQUQsQ0FBdkI7QUFBQSxTQUF2QjtBQUFzRCxlQUFPLEVBQUVwQixZQUFZLENBQUM0QjtBQUE1RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREgsR0FFRyxJQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0F0Q0Q7O0dBQU05QixlO1VBQ29DQyxvRSxFQUN4QkksUyxFQUNERSxxRDs7O0tBSFhQLGU7QUF3Q1NBLDhFQUFmO0FBRUEsSUFBTUssU0FBUyxHQUFHMEIsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0gsU0FBSyxFQUFFO0FBQ0xJLGVBQVMsRUFBRSxNQUROO0FBRUxDLGtCQUFZLEVBQUU7QUFGVDtBQURnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9baWRdL2VkaXQuMWRjZTMzZjM1NzQxNzBiMDJjNDkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCBBcHBBcHBCYXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy92aWV3cy9BcHBBcHBCYXInXHJcbmltcG9ydCBGb3JtUHJvZHVjdCBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2NvbXBvbmVudHMvZm9ybS9Gb3JtUHJvZHVjdCdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVByb2R1Y3QsIEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9Qcm9kdWN0LmNvbnRleHQnXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuY29uc3QgRWRpdFByb2R1Y3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0U3RhdGUsIHByb2R1Y3REaXNwYXRjaF0gPSB1c2VQcm9kdWN0KClcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9kdWN0cycpLmRvYyhpZCkuZ2V0KClcclxuICAgICAgICAudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICBwcm9kdWN0RGlzcGF0Y2goe1xyXG4gICAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9QUk9EVUNULFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBzbmFwc2hvdC5kYXRhKCksXHJcbiAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeV0pXHJcblxyXG4gIGNvbnN0IHVwZGF0ZVByb2R1Y3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJykuZG9jKHJvdXRlci5xdWVyeS5pZCkudXBkYXRlKGRhdGEpXHJcbiAgICAgIC50aGVuKCgpID0+IHJvdXRlci5wdXNoKCcvcHJvZHVjdHMnKSkgLy8gRklYIE1FIGFncmVnYXIgdG9hc3QgcXVlIGF2aXNlIHF1ZSBzZSBlZGl0w7MgY29ycmVjdGFtZW50ZVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKSAvLyB0b2FzdCBxdWUgYXZpc2UgcXVlIGFsZ28gc2FsacOzIG1hbFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEFwcEJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgICBFZGl0YXIgUHJvZHVjdG9zXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIHtwcm9kdWN0U3RhdGU/LnByb2R1Y3RcclxuICAgICAgICAgID8gPEZvcm1Qcm9kdWN0IG9uU3VibWl0PXsoZGF0YSkgPT4gdXBkYXRlUHJvZHVjdChkYXRhKX0gcHJvZHVjdD17cHJvZHVjdFN0YXRlLnByb2R1Y3R9Lz5cclxuICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3RQYWdlXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luVG9wOiAnMnJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcycmVtJyxcclxuICB9LFxyXG59KSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==