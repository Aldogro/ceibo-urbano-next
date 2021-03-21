webpackHotUpdate_N_E("pages/promos/add",{

/***/ "./pages/promos/add.js":
/*!*****************************!*\
  !*** ./pages/promos/add.js ***!
  \*****************************/
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
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _modules_components_form_FormPromo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../modules/components/form/FormPromo */ "./modules/components/form/FormPromo.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _services_Promo_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/Promo.context */ "./services/Promo.context.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\promos\\add.js",
    _this = undefined,
    _s = $RefreshSig$();










var AddPromoPage = function AddPromoPage() {
  _s();

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _usePromo = Object(_services_Promo_context__WEBPACK_IMPORTED_MODULE_9__["usePromo"])(''),
      _usePromo2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_usePromo, 2),
      promoState = _usePromo2[0],
      promoDispatch = _usePromo2[1];

  var classes = useStyles();

  var createPromo = function createPromo(data) {
    promoDispatch({
      type: _services_Promo_context__WEBPACK_IMPORTED_MODULE_9__["ActionType"].CREATE_PROMO,
      payload: data
    });
    router.push('/promos');
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_5__["default"], {
      maxWidth: "lg",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.title,
        variant: "h4",
        children: "Agregar Promo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_components_form_FormPromo__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSubmit: function onSubmit(data) {
          return createPromo(data);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, _this);
};

_s(AddPromoPage, "t8YWH9aurcEtu91GW+8Nx3/E9h4=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], _services_Promo_context__WEBPACK_IMPORTED_MODULE_9__["usePromo"], useStyles];
});

_c = AddPromoPage;
/* harmony default export */ __webpack_exports__["default"] = (AddPromoPage);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_8__["makeStyles"])(function (theme) {
  return {
    root: {
      margin: theme.spacing('40px', 0)
    },
    title: {
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  };
});

var _c;

$RefreshReg$(_c, "AddPromoPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvbW9zL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRQcm9tb1BhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VQcm9tbyIsInByb21vU3RhdGUiLCJwcm9tb0Rpc3BhdGNoIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsImNyZWF0ZVByb21vIiwiZGF0YSIsInR5cGUiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFX1BST01PIiwicGF5bG9hZCIsInB1c2giLCJ0aXRsZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJtYXJnaW4iLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxHQUFNO0FBQUE7O0FBQ3pCLE1BQU1DLE1BQU0sR0FBR0MsNkRBQVMsRUFBeEI7O0FBRHlCLGtCQUVXQyx3RUFBUSxDQUFDLEVBQUQsQ0FGbkI7QUFBQTtBQUFBLE1BRWxCQyxVQUZrQjtBQUFBLE1BRU5DLGFBRk07O0FBR3pCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6Qjs7QUFFQSxNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDNUJKLGlCQUFhLENBQUM7QUFDWkssVUFBSSxFQUFFQyxrRUFBVSxDQUFDQyxZQURMO0FBRVpDLGFBQU8sRUFBRUo7QUFGRyxLQUFELENBQWI7QUFJQVIsVUFBTSxDQUFDYSxJQUFQLENBQVksU0FBWjtBQUNELEdBTkQ7O0FBUUEsc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsbUVBQUQ7QUFBVyxjQUFRLEVBQUMsSUFBcEI7QUFBQSw4QkFDRSxxRUFBQyxvRUFBRDtBQUFZLGlCQUFTLEVBQUVSLE9BQU8sQ0FBQ1MsS0FBL0I7QUFBc0MsZUFBTyxFQUFDLElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQywwRUFBRDtBQUFXLGdCQUFRLEVBQUUsa0JBQUNOLElBQUQ7QUFBQSxpQkFBVUQsV0FBVyxDQUFDQyxJQUFELENBQXJCO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0F4QkQ7O0dBQU1ULFk7VUFDV0UscUQsRUFDcUJDLGdFLEVBQ3BCSSxTOzs7S0FIWlAsWTtBQTBCU0EsMkVBQWY7QUFFQSxJQUFNTyxTQUFTLEdBQUdTLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNDLFFBQUksRUFBRTtBQUNKQyxZQUFNLEVBQUVGLEtBQUssQ0FBQ0csT0FBTixDQUFjLE1BQWQsRUFBc0IsQ0FBdEI7QUFESixLQURpQztBQUl2Q0wsU0FBSyxFQUFFO0FBQ0xNLGVBQVMsRUFBRSxNQUROO0FBRUxDLGtCQUFZLEVBQUU7QUFGVDtBQUpnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9tb3MvYWRkLmE3ZjNlODY3MjQwZmY5MDgzMjdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgQXBwQXBwQmFyIGZyb20gJy4uLy4uL21vZHVsZXMvdmlld3MvQXBwQXBwQmFyJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IEZvcm1Qcm9tbyBmcm9tICcuLi8uLi9tb2R1bGVzL2NvbXBvbmVudHMvZm9ybS9Gb3JtUHJvbW8nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVByb21vLCBBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvbW8uY29udGV4dCdcclxuXHJcbmNvbnN0IEFkZFByb21vUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtwcm9tb1N0YXRlLCBwcm9tb0Rpc3BhdGNoXSA9IHVzZVByb21vKCcnKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICBjb25zdCBjcmVhdGVQcm9tbyA9IChkYXRhKSA9PiB7XHJcbiAgICBwcm9tb0Rpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQWN0aW9uVHlwZS5DUkVBVEVfUFJPTU8sXHJcbiAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgIH0pXHJcbiAgICByb3V0ZXIucHVzaCgnL3Byb21vcycpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8QXBwQXBwQmFyIC8+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImg0XCI+XHJcbiAgICAgICAgICBBZ3JlZ2FyIFByb21vXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxGb3JtUHJvbW8gb25TdWJtaXQ9eyhkYXRhKSA9PiBjcmVhdGVQcm9tbyhkYXRhKX0gLz5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQWRkUHJvbW9QYWdlXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzQwcHgnLCAwKVxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIG1hcmdpblRvcDogJzJyZW0nLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMnJlbScsXHJcbiAgfSxcclxufSkpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=