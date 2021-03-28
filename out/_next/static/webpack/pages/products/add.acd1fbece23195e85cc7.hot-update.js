webpackHotUpdate_N_E("pages/products/add",{

/***/ "./pages/products/add.js":
/*!*******************************!*\
  !*** ./pages/products/add.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _modules_components_form_FormProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../modules/components/form/FormProduct */ "./modules/components/form/FormProduct.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\products\\add.js",
    _this = undefined,
    _s = $RefreshSig$();











var AddProductPage = function AddProductPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"])();
  var classes = useStyles();

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  var createProduct = function createProduct(data) {
    Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_9__["createItem"])({
      collection: 'products',
      data: data
    }).then(function () {
      enqueueSnackbar('Se ha creado el producto correctamente', {
        variant: 'success'
      });
      router.push('/products');
    })["catch"](function (error) {
      return enqueueSnackbar('Ha ocurrido un error', {
        variant: 'error'
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
      maxWidth: "lg",
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: classes.title,
          variant: "h4",
          children: "Agregar producto"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_components_form_FormProduct__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onSubmit: function onSubmit(data) {
            return createProduct(data);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, _this);
};

_s(AddProductPage, "/BVSw3HkJcRwFTELXlFvG/p2Kg4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_2__["useRouter"], useStyles, notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"]];
});

_c = AddProductPage;
/* harmony default export */ __webpack_exports__["default"] = (AddProductPage);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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

$RefreshReg$(_c, "AddProductPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvYWRkLmpzIl0sIm5hbWVzIjpbIkFkZFByb2R1Y3RQYWdlIiwicm91dGVyIiwidXNlUm91dGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsImNyZWF0ZVByb2R1Y3QiLCJkYXRhIiwiY3JlYXRlSXRlbSIsImNvbGxlY3Rpb24iLCJ0aGVuIiwidmFyaWFudCIsInB1c2giLCJlcnJvciIsImNvbnRhaW5lciIsInJvb3QiLCJ0aXRsZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm1hcmdpbiIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFHQSxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLEdBQU07QUFBQTs7QUFDM0IsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUNBLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6Qjs7QUFGMkIscUJBR2dCQyw2REFBVyxFQUgzQjtBQUFBLE1BR25CQyxlQUhtQixnQkFHbkJBLGVBSG1CO0FBQUEsTUFHRkMsYUFIRSxnQkFHRkEsYUFIRTs7QUFLM0IsTUFBTUMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDQyxJQUFELEVBQVU7QUFDOUJDLGdGQUFVLENBQUM7QUFBRUMsZ0JBQVUsRUFBRSxVQUFkO0FBQTBCRixVQUFJLEVBQUpBO0FBQTFCLEtBQUQsQ0FBVixDQUNHRyxJQURILENBQ1EsWUFBTTtBQUNWTixxQkFBZSxDQUFDLHdDQUFELEVBQTJDO0FBQUVPLGVBQU8sRUFBRTtBQUFYLE9BQTNDLENBQWY7QUFDQVosWUFBTSxDQUFDYSxJQUFQLENBQVksV0FBWjtBQUNELEtBSkgsV0FLUyxVQUFDQyxLQUFEO0FBQUEsYUFBV1QsZUFBZSxDQUFDLHNCQUFELEVBQXlCO0FBQUVPLGVBQU8sRUFBRTtBQUFYLE9BQXpCLENBQTFCO0FBQUEsS0FMVDtBQU1ELEdBUEQ7O0FBU0Esc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsbUVBQUQ7QUFBVyxjQUFRLEVBQUMsSUFBcEI7QUFBeUIsZUFBUyxFQUFFVixPQUFPLENBQUNhLFNBQTVDO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFFYixPQUFPLENBQUNjLElBQXhCO0FBQUEsZ0NBQ0UscUVBQUMsb0VBQUQ7QUFBWSxtQkFBUyxFQUFFZCxPQUFPLENBQUNlLEtBQS9CO0FBQXNDLGlCQUFPLEVBQUMsSUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFJRSxxRUFBQyw0RUFBRDtBQUFhLGtCQUFRLEVBQUUsa0JBQUNULElBQUQ7QUFBQSxtQkFBVUQsYUFBYSxDQUFDQyxJQUFELENBQXZCO0FBQUE7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQTNCRDs7R0FBTVQsYztVQUNXRSxxRCxFQUNDRSxTLEVBQzJCQyxxRDs7O0tBSHZDTCxjO0FBNkJTQSw2RUFBZjtBQUVBLElBQU1JLFNBQVMsR0FBR2UsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0gsUUFBSSxFQUFFO0FBQ0pJLGNBQVEsRUFBRSxRQUROO0FBRUpDLHFCQUFlLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjQyxVQUFkLENBQXlCQztBQUZ0QyxLQURpQztBQUt2Q1QsYUFBUyxFQUFFO0FBQ1RVLFlBQU0sRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWMsTUFBZCxFQUFzQixNQUF0QjtBQURDLEtBTDRCO0FBUXZDVCxTQUFLLEVBQUU7QUFDTFUsZUFBUyxFQUFFLE1BRE47QUFFTEMsa0JBQVksRUFBRTtBQUZUO0FBUmdDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL2FkZC5hY2QxZmJlY2UyMzE5NWU4NWNjNy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJ1xyXG5cclxuaW1wb3J0IEFwcEFwcEJhciBmcm9tICcuLi8uLi9tb2R1bGVzL3ZpZXdzL0FwcEFwcEJhcidcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBGb3JtUHJvZHVjdCBmcm9tICcuLi8uLi9tb2R1bGVzL2NvbXBvbmVudHMvZm9ybS9Gb3JtUHJvZHVjdCdcclxuXHJcbmltcG9ydCB7IGNyZWF0ZUl0ZW0gfSBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5cclxuY29uc3QgQWRkUHJvZHVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciwgY2xvc2VTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKVxyXG5cclxuICBjb25zdCBjcmVhdGVQcm9kdWN0ID0gKGRhdGEpID0+IHtcclxuICAgIGNyZWF0ZUl0ZW0oeyBjb2xsZWN0aW9uOiAncHJvZHVjdHMnLCBkYXRhIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ1NlIGhhIGNyZWFkbyBlbCBwcm9kdWN0byBjb3JyZWN0YW1lbnRlJywgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZHVjdHMnKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBlbnF1ZXVlU25hY2tiYXIoJ0hhIG9jdXJyaWRvIHVuIGVycm9yJywgeyB2YXJpYW50OiAnZXJyb3InfSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8QXBwQXBwQmFyIC8+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDRcIj5cclxuICAgICAgICAgICAgQWdyZWdhciBwcm9kdWN0b1xyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPEZvcm1Qcm9kdWN0IG9uU3VibWl0PXsoZGF0YSkgPT4gY3JlYXRlUHJvZHVjdChkYXRhKX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvZHVjdFBhZ2VcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzcwcHgnLCAnYXV0bycpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIG1hcmdpblRvcDogJzJyZW0nLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMnJlbScsXHJcbiAgfSxcclxufSkpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=