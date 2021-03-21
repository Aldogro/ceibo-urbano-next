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
      className: classes.root,
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
      marginTop: '70px',
      marginBottom: '70px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvbW9zL2FkZC5qcyJdLCJuYW1lcyI6WyJBZGRQcm9tb1BhZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VQcm9tbyIsInByb21vU3RhdGUiLCJwcm9tb0Rpc3BhdGNoIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsImNyZWF0ZVByb21vIiwiZGF0YSIsInR5cGUiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFX1BST01PIiwicGF5bG9hZCIsInB1c2giLCJyb290IiwidGl0bGUiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLFlBQVksR0FBRyxTQUFmQSxZQUFlLEdBQU07QUFBQTs7QUFDekIsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFEeUIsa0JBRVdDLHdFQUFRLENBQUMsRUFBRCxDQUZuQjtBQUFBO0FBQUEsTUFFbEJDLFVBRmtCO0FBQUEsTUFFTkMsYUFGTTs7QUFHekIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCOztBQUVBLE1BQU1DLFdBQVcsR0FBRyxTQUFkQSxXQUFjLENBQUNDLElBQUQsRUFBVTtBQUM1QkosaUJBQWEsQ0FBQztBQUNaSyxVQUFJLEVBQUVDLGtFQUFVLENBQUNDLFlBREw7QUFFWkMsYUFBTyxFQUFFSjtBQUZHLEtBQUQsQ0FBYjtBQUlBUixVQUFNLENBQUNhLElBQVAsQ0FBWSxTQUFaO0FBQ0QsR0FORDs7QUFRQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxtRUFBRDtBQUFXLGNBQVEsRUFBQyxJQUFwQjtBQUF5QixlQUFTLEVBQUVSLE9BQU8sQ0FBQ1MsSUFBNUM7QUFBQSw4QkFDRSxxRUFBQyxvRUFBRDtBQUFZLGlCQUFTLEVBQUVULE9BQU8sQ0FBQ1UsS0FBL0I7QUFBc0MsZUFBTyxFQUFDLElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFJRSxxRUFBQywwRUFBRDtBQUFXLGdCQUFRLEVBQUUsa0JBQUNQLElBQUQ7QUFBQSxpQkFBVUQsV0FBVyxDQUFDQyxJQUFELENBQXJCO0FBQUE7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBV0QsQ0F4QkQ7O0dBQU1ULFk7VUFDV0UscUQsRUFDcUJDLGdFLEVBQ3BCSSxTOzs7S0FIWlAsWTtBQTBCU0EsMkVBQWY7QUFFQSxJQUFNTyxTQUFTLEdBQUdVLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNILFFBQUksRUFBRTtBQUNKSSxlQUFTLEVBQUUsTUFEUDtBQUVKQyxrQkFBWSxFQUFFO0FBRlYsS0FEaUM7QUFLdkNKLFNBQUssRUFBRTtBQUNMRyxlQUFTLEVBQUUsTUFETjtBQUVMQyxrQkFBWSxFQUFFO0FBRlQ7QUFMZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvbW9zL2FkZC4yMzhmNTRiZjZjN2EwNDkyNmMxOS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IEFwcEFwcEJhciBmcm9tICcuLi8uLi9tb2R1bGVzL3ZpZXdzL0FwcEFwcEJhcidcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBGb3JtUHJvbW8gZnJvbSAnLi4vLi4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VQcm9tbywgQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb21vLmNvbnRleHQnXHJcblxyXG5jb25zdCBBZGRQcm9tb1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbcHJvbW9TdGF0ZSwgcHJvbW9EaXNwYXRjaF0gPSB1c2VQcm9tbygnJylcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgY29uc3QgY3JlYXRlUHJvbW8gPSAoZGF0YSkgPT4ge1xyXG4gICAgcHJvbW9EaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuQ1JFQVRFX1BST01PLFxyXG4gICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICB9KVxyXG4gICAgcm91dGVyLnB1c2goJy9wcm9tb3MnKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEFwcEJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDRcIj5cclxuICAgICAgICAgIEFncmVnYXIgUHJvbW9cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPEZvcm1Qcm9tbyBvblN1Ym1pdD17KGRhdGEpID0+IGNyZWF0ZVByb21vKGRhdGEpfSAvPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBBZGRQcm9tb1BhZ2VcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpblRvcDogJzcwcHgnLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnNzBweCcsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luVG9wOiAnMnJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcycmVtJyxcclxuICB9LFxyXG59KSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==