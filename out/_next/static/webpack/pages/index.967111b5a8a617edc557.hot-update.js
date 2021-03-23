webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/components/Stepper.js":
/*!***************************************!*\
  !*** ./modules/components/Stepper.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VerticalLinearStepper; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/StepContent */ "./node_modules/@material-ui/core/esm/StepContent/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\Stepper.js",
    _s = $RefreshSig$();










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%'
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    }
  };
});

function getSteps() {
  return ['Seleccioná los productos o promociones', 'Seleccioná las cantidades', 'Hacé el pedido a través de whatsapp con un solo click'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more.";

    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';

    case 2:
      return "Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues.";

    default:
      return 'Unknown step';
  }
}

function VerticalLinearStepper() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var steps = getSteps();

  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      activeStep: activeStep,
      orientation: "vertical",
      children: steps.map(function (label, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: getStepContent(index)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classes.actionsContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  disabled: activeStep === 0,
                  onClick: handleBack,
                  className: classes.button,
                  children: "Back"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  variant: "contained",
                  color: "primary",
                  onClick: handleNext,
                  className: classes.button,
                  children: activeStep === steps.length - 1 ? 'Finish' : 'Next'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)]
        }, label, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), activeStep === steps.length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      square: true,
      elevation: 0,
      className: classes.resetContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: "All steps completed - you're finished"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: handleReset,
        className: classes.button,
        children: "Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

_s(VerticalLinearStepper, "5/ANSN4aidVPv0P4apAyeUUfwXQ=", false, function () {
  return [useStyles];
});

_c = VerticalLinearStepper;

var _c;

$RefreshReg$(_c, "VerticalLinearStepper");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYnV0dG9uIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiYWN0aW9uc0NvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsInJlc2V0Q29udGFpbmVyIiwicGFkZGluZyIsImdldFN0ZXBzIiwiZ2V0U3RlcENvbnRlbnQiLCJzdGVwIiwiVmVydGljYWxMaW5lYXJTdGVwcGVyIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInN0ZXBzIiwiaGFuZGxlTmV4dCIsInByZXZBY3RpdmVTdGVwIiwiaGFuZGxlQmFjayIsImhhbmRsZVJlc2V0IiwibWFwIiwibGFiZWwiLCJpbmRleCIsImxlbmd0aCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLFNBQVMsR0FBR0MsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0MsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRTtBQURILEtBRGlDO0FBSXZDQyxVQUFNLEVBQUU7QUFDTkMsZUFBUyxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkLENBREw7QUFFTkMsaUJBQVcsRUFBRU4sS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQUZQLEtBSitCO0FBUXZDRSxvQkFBZ0IsRUFBRTtBQUNoQkMsa0JBQVksRUFBRVIsS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURFLEtBUnFCO0FBV3ZDSSxrQkFBYyxFQUFFO0FBQ2RDLGFBQU8sRUFBRVYsS0FBSyxDQUFDSyxPQUFOLENBQWMsQ0FBZDtBQURLO0FB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Q0FBekI7QUFBNEIsZUFBUyxFQUFFYixPQUFPLENBQUNOLGNBQS9DO0FBQUEsOEJBQ0UscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FERixlQUVFLHFFQUFDLGdFQUFEO0FBQVEsZUFBTyxFQUFFZSxXQUFqQjtBQUE4QixpQkFBUyxFQUFFVCxPQUFPLENBQUNaLE1BQWpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBL0JKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBeUNEOztHQTFEdUJXLHFCO1VBQ05oQixTOzs7S0FETWdCLHFCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4Ljk2NzExMWI1YThhNjE3ZWRjNTU3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XHJcbmltcG9ydCBTdGVwQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwQ29udGVudCc7XHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJztcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSc7XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgICBtYXJnaW5SaWdodDogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG4gIGFjdGlvbnNDb250YWluZXI6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIHJlc2V0Q29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcbn0pKTtcclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBzKCkge1xyXG4gIHJldHVybiBbJ1NlbGVjY2lvbsOhIGxvcyBwcm9kdWN0b3MgbyBwcm9tb2Npb25lcycsICdTZWxlY2Npb27DoSBsYXMgY2FudGlkYWRlcycsICdIYWPDqSBlbCBwZWRpZG8gYSB0cmF2w6lzIGRlIHdoYXRzYXBwIGNvbiB1biBzb2xvIGNsaWNrJ107XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFN0ZXBDb250ZW50KHN0ZXApIHtcclxuICBzd2l0Y2ggKHN0ZXApIHtcclxuICAgIGNhc2UgMDpcclxuICAgICAgcmV0dXJuIGBGb3IgZWFjaCBhZCBjYW1wYWlnbiB0aGF0IHlvdSBjcmVhdGUsIHlvdSBjYW4gY29udHJvbCBob3cgbXVjaFxyXG4gICAgICAgICAgICAgIHlvdSdyZSB3aWxsaW5nIHRvIHNwZW5kIG9uIGNsaWNrcyBhbmQgY29udmVyc2lvbnMsIHdoaWNoIG5ldHdvcmtzXHJcbiAgICAgICAgICAgICAgYW5kIGdlb2dyYXBoaWNhbCBsb2NhdGlvbnMgeW91IHdhbnQgeW91ciBhZHMgdG8gc2hvdyBvbiwgYW5kIG1vcmUuYDtcclxuICAgIGNhc2UgMTpcclxuICAgICAgcmV0dXJuICdBbiBhZCBncm91cCBjb250YWlucyBvbmUgb3IgbW9yZSBhZHMgd2hpY2ggdGFyZ2V0IGEgc2hhcmVkIHNldCBvZiBrZXl3b3Jkcy4nO1xyXG4gICAgY2FzZSAyOlxyXG4gICAgICByZXR1cm4gYFRyeSBvdXQgZGlmZmVyZW50IGFkIHRleHQgdG8gc2VlIHdoYXQgYnJpbmdzIGluIHRoZSBtb3N0IGN1c3RvbWVycyxcclxuICAgICAgICAgICAgICBhbmQgbGVhcm4gaG93IHRvIGVuaGFuY2UgeW91ciBhZHMgdXNpbmcgZmVhdHVyZXMgbGlrZSBhZCBleHRlbnNpb25zLlxyXG4gICAgICAgICAgICAgIElmIHlvdSBydW4gaW50byBhbnkgcHJvYmxlbXMgd2l0aCB5b3VyIGFkcywgZmluZCBvdXQgaG93IHRvIHRlbGwgaWZcclxuICAgICAgICAgICAgICB0aGV5J3JlIHJ1bm5pbmcgYW5kIGhvdyB0byByZXNvbHZlIGFwcHJvdmFsIGlzc3Vlcy5gO1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgcmV0dXJuICdVbmtub3duIHN0ZXAnO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVydGljYWxMaW5lYXJTdGVwcGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbYWN0aXZlU3RlcCwgc2V0QWN0aXZlU3RlcF0gPSBSZWFjdC51c2VTdGF0ZSgwKTtcclxuICBjb25zdCBzdGVwcyA9IGdldFN0ZXBzKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZU5leHQgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgKyAxKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVCYWNrID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwIC0gMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlUmVzZXQgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTdGVwKDApO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFN0ZXBwZXIgYWN0aXZlU3RlcD17YWN0aXZlU3RlcH0gb3JpZW50YXRpb249XCJ2ZXJ0aWNhbFwiPlxyXG4gICAgICAgIHtzdGVwcy5tYXAoKGxhYmVsLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFN0ZXAga2V5PXtsYWJlbH0+XHJcbiAgICAgICAgICAgIDxTdGVwTGFiZWw+e2xhYmVsfTwvU3RlcExhYmVsPlxyXG4gICAgICAgICAgICA8U3RlcENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e2dldFN0ZXBDb250ZW50KGluZGV4KX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc0NvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgZGlzYWJsZWQ9e2FjdGl2ZVN0ZXAgPT09IDB9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlQmFja31cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgQmFja1xyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17aGFuZGxlTmV4dH1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAtIDEgPyAnRmluaXNoJyA6ICdOZXh0J31cclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TdGVwQ29udGVudD5cclxuICAgICAgICAgIDwvU3RlcD5cclxuICAgICAgICApKX1cclxuICAgICAgPC9TdGVwcGVyPlxyXG4gICAgICB7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoICYmIChcclxuICAgICAgICA8UGFwZXIgc3F1YXJlIGVsZXZhdGlvbj17MH0gY2xhc3NOYW1lPXtjbGFzc2VzLnJlc2V0Q29udGFpbmVyfT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5PkFsbCBzdGVwcyBjb21wbGV0ZWQgLSB5b3UmYXBvcztyZSBmaW5pc2hlZDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxCdXR0b24gb25DbGljaz17aGFuZGxlUmVzZXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259PlxyXG4gICAgICAgICAgICBSZXNldFxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9QYXBlcj5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==