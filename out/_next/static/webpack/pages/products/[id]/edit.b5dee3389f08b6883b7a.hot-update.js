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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _services_Product_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/Product.context */ "./services/Product.context.js");
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _modules_components_form_FormProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/components/form/FormProduct */ "./modules/components/form/FormProduct.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../firebase/firebase.config */ "./firebase/firebase.config.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\products\\[id]\\edit.js",
    _this = undefined,
    _s = $RefreshSig$();












var EditProductPage = function EditProductPage() {
  _s();

  var _useProduct = Object(_services_Product_context__WEBPACK_IMPORTED_MODULE_6__["useProduct"])(),
      _useProduct2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useProduct, 2),
      productState = _useProduct2[0],
      productDispatch = _useProduct2[1];

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_5__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var id = router.query.id;

    if (router.query.id) {
      getProduct(id);
    }
  }, [router.query]);

  var getProduct = function getProduct(id) {
    Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__["getItem"])({
      collection: 'products',
      id: id
    }).then(function (snapshot) {
      productDispatch({
        type: _services_Product_context__WEBPACK_IMPORTED_MODULE_6__["ActionType"].SET_PRODUCT,
        payload: snapshot.data()
      });
    });
  };

  var updateProduct = function updateProduct(data) {
    Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__["editItem"])({
      collection: 'products',
      id: router.query.id,
      data: data
    }).then(function () {
      enqueueSnackbar('Se ha editado el producto correctamente', {
        variant: 'success'
      });
      router.push('/products');
    })["catch"](function (error) {
      return enqueueSnackbar('Ha ocurrido un error', {
        variant: 'error'
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
      maxWidth: "lg",
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: classes.title,
          variant: "h4",
          children: "Editar Productos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), productState !== null && productState !== void 0 && productState.product ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_components_form_FormProduct__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onSubmit: function onSubmit(data) {
            return updateProduct(data);
          },
          product: productState.product
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 15
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(EditProductPage, "Ol9txD2XnGxwjl56v4Zws6Wtv2M=", false, function () {
  return [_services_Product_context__WEBPACK_IMPORTED_MODULE_6__["useProduct"], useStyles, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], notistack__WEBPACK_IMPORTED_MODULE_5__["useSnackbar"]];
});

_c = EditProductPage;
/* harmony default export */ __webpack_exports__["default"] = (EditProductPage);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    container: {
      margin: theme.spacing('70px', 'auto')
    },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvL2VkaXQuanMiXSwibmFtZXMiOlsiRWRpdFByb2R1Y3RQYWdlIiwidXNlUHJvZHVjdCIsInByb2R1Y3RTdGF0ZSIsInByb2R1Y3REaXNwYXRjaCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTbmFja2JhciIsImVucXVldWVTbmFja2JhciIsImNsb3NlU25hY2tiYXIiLCJ1c2VFZmZlY3QiLCJpZCIsInF1ZXJ5IiwiZ2V0UHJvZHVjdCIsImdldEl0ZW0iLCJjb2xsZWN0aW9uIiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIkFjdGlvblR5cGUiLCJTRVRfUFJPRFVDVCIsInBheWxvYWQiLCJkYXRhIiwidXBkYXRlUHJvZHVjdCIsImVkaXRJdGVtIiwidmFyaWFudCIsInB1c2giLCJlcnJvciIsImNvbnRhaW5lciIsInJvb3QiLCJ0aXRsZSIsInByb2R1Y3QiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJtYXJnaW4iLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFBQSxvQkFDWUMsNEVBQVUsRUFEdEI7QUFBQTtBQUFBLE1BQ3JCQyxZQURxQjtBQUFBLE1BQ1BDLGVBRE87O0FBRTVCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBSDRCLHFCQUllQyw2REFBVyxFQUoxQjtBQUFBLE1BSXBCQyxlQUpvQixnQkFJ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QUFDVFcsWUFBTSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxNQUFkLEVBQXNCLE1BQXRCO0FBREMsS0FMNEI7QUFRdkNWLFNBQUssRUFBRTtBQUNMVyxlQUFTLEVBQUUsTUFETjtBQUVMQyxrQkFBWSxFQUFFO0FBRlQ7QUFSZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMvW2lkXS9lZGl0LmI1ZGVlMzM4OWYwOGI2ODgzYjdhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjaydcclxuaW1wb3J0IHsgdXNlUHJvZHVjdCwgQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL1Byb2R1Y3QuY29udGV4dCdcclxuXHJcbmltcG9ydCBBcHBBcHBCYXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy92aWV3cy9BcHBBcHBCYXInXHJcbmltcG9ydCBGb3JtUHJvZHVjdCBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL2NvbXBvbmVudHMvZm9ybS9Gb3JtUHJvZHVjdCdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcblxyXG5pbXBvcnQgeyBnZXRJdGVtLCBlZGl0SXRlbSB9IGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmNvbnN0IEVkaXRQcm9kdWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvZHVjdFN0YXRlLCBwcm9kdWN0RGlzcGF0Y2hdID0gdXNlUHJvZHVjdCgpXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciwgY2xvc2VTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGdldFByb2R1Y3QoaWQpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeV0pXHJcblxyXG4gIGNvbnN0IGdldFByb2R1Y3QgPSAoaWQpID0+IHtcclxuICAgIGdldEl0ZW0oeyBjb2xsZWN0aW9uOiAncHJvZHVjdHMnLCBpZCB9KVxyXG4gICAgICAudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgcHJvZHVjdERpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VUX1BST0RVQ1QsXHJcbiAgICAgICAgICBwYXlsb2FkOiBzbmFwc2hvdC5kYXRhKCksXHJcbiAgICAgICAgfSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IHVwZGF0ZVByb2R1Y3QgPSAoZGF0YSkgPT4ge1xyXG4gICAgZWRpdEl0ZW0oeyBjb2xsZWN0aW9uOiAncHJvZHVjdHMnLCBpZDogcm91dGVyLnF1ZXJ5LmlkLCBkYXRhIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ1NlIGhhIGVkaXRhZG8gZWwgcHJvZHVjdG8gY29ycmVjdGFtZW50ZScsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcclxuICAgICAgICByb3V0ZXIucHVzaCgnL3Byb2R1Y3RzJylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gZW5xdWV1ZVNuYWNrYmFyKCdIYSBvY3VycmlkbyB1biBlcnJvcicsIHsgdmFyaWFudDogJ2Vycm9yJ30pKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEFwcEJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgICAgIEVkaXRhciBQcm9kdWN0b3NcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtwcm9kdWN0U3RhdGU/LnByb2R1Y3RcclxuICAgICAgICAgICAgPyA8Rm9ybVByb2R1Y3Qgb25TdWJtaXQ9eyhkYXRhKSA9PiB1cGRhdGVQcm9kdWN0KGRhdGEpfSBwcm9kdWN0PXtwcm9kdWN0U3RhdGUucHJvZHVjdH0vPlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRWRpdFByb2R1Y3RQYWdlXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCc3MHB4JywgJ2F1dG8nKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcycmVtJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzJyZW0nLFxyXG4gIH0sXHJcbn0pKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9