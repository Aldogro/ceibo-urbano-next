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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      activeStep: activeStep,
      orientation: "vertical",
      children: steps.map(function (label, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: getStepContent(index)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
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
                  lineNumber: 58,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  variant: "contained",
                  color: "primary",
                  onClick: handleNext,
                  className: classes.button,
                  children: activeStep === steps.length - 1 ? 'Finish' : 'Next'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 57,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this)]
        }, label, true, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsidXNlU3R5bGVzIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIndpZHRoIiwiYnV0dG9uIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpblJpZ2h0IiwiYWN0aW9uc0NvbnRhaW5lciIsIm1hcmdpbkJvdHRvbSIsInJlc2V0Q29udGFpbmVyIiwicGFkZGluZyIsImdldFN0ZXBzIiwiVmVydGljYWxMaW5lYXJTdGVwcGVyIiwiY2xhc3NlcyIsIlJlYWN0IiwidXNlU3RhdGUiLCJhY3RpdmVTdGVwIiwic2V0QWN0aXZlU3RlcCIsInN0ZXBzIiwiaGFuZGxlTmV4dCIsInByZXZBY3RpdmVTdGVwIiwiaGFuZGxlQmFjayIsImhhbmRsZVJlc2V0IiwibWFwIiwibGFiZWwiLCJpbmRleCIsImdldFN0ZXBDb250ZW50IiwibGVuZ3RoIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsU0FBUyxHQUFHQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDQyxRQUFJLEVBQUU7QUFDSkMsV0FBSyxFQUFFO0FBREgsS0FEaUM7QUFJdkNDLFVBQU0sRUFBRTtBQUNOQyxlQUFTLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjLENBQWQsQ0FETDtBQUVOQyxpQkFBVyxFQUFFTixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBRlAsS0FKK0I7QUFRdkNFLG9CQUFnQixFQUFFO0FBQ2hCQyxrQkFBWSxFQUFFUixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBREUsS0FScUI7QUFXdkNJLGtCQUFjLEVBQUU7QUFDZEMsYUFBTyxFQUFFVixLQUFLLENBQUNLLE9BQU4sQ0FBYyxDQUFkO0FBREs7QUFYdUIsR0FBWjtBQUFBLENBQUQsQ0FBNUI7O0FBZ0JBLFNBQVNNLFFBQVQsR0FBb0I7QUFDbEIsU0FBTyxDQUFDLHdDQUFELEVBQTJDLDJCQUEzQyxFQUF3RSx1REFBeEUsQ0FBUDtBQUNEOztBQUVjLFNBQVNDLHFCQUFULEdBQWlDO0FBQUE7O0FBQUE7O0FBQzlDLE1BQU1DLE9BQU8sR0FBR2YsU0FBUyxFQUF6Qjs7QUFEOEMsd0JBRVZnQiw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsQ0FBZixDQUZVO0FBQUE7QUFBQSxNQUV2Q0MsVUFGdUM7QUFBQSxNQUUzQkMsYUFGMkI7O0FBRzlDLE1BQU1DLEtBQUssR0FBR1AsUUFBUSxFQUF0Qjs7QUFFQSxNQUFNUSxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCRixpQkFBYSxDQUFDLFVBQUNHLGNBQUQ7QUFBQSxhQUFvQkEsY0FBYyxHQUFHLENBQXJDO0FBQUEsS0FBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNQyxVQUFVLEdBQUcsU0FBYkEsVUFBYSxHQUFNO0FBQ3ZCSixpQkFBYSxDQUFDLFVBQUNHLGNBQUQ7QUFBQSxhQUFvQkEsY0FBYyxHQUFHLENBQXJDO0FBQUEsS0FBRCxDQUFiO0FBQ0QsR0FGRDs7QUFJQSxNQUFNRSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCTCxpQkFBYSxDQUFDLENBQUQsQ0FBYjtBQUNELEdBRkQ7O0FBSUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVKLE9BQU8sQ0FBQ1osSUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFTLGdCQUFVLEVBQUVlLFVBQXJCO0FBQWlDLGlCQUFXLEVBQUMsVUFBN0M7QUFBQSxnQkFDR0UsS0FBSyxDQUFDSyxHQUFOLENBQVUsVUFBQ0MsS0FBRCxFQUFRQyxLQUFSO0FBQUEsNEJBQ1QscUVBQUMsOERBQUQ7QUFBQSxrQ0FDRSxxRUFBQyxtRUFBRDtBQUFBLHNCQUFZRDtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFFRSxxRUFBQyxxRUFBRDtBQUFBLG9DQUNFLHFFQUFDLHFFQUFEO0FBQUEsd0JBQWFFLGNBQWMsQ0FBQ0QsS0FBRDtBQUEzQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBRUU7QUFBSyx1QkFBUyxFQUFFWixPQUFPLENBQUNOLGdCQUF4QjtBQUFBLHFDQUNFO0FBQUEsd0NBQ0UscUVBQUMsZ0VBQUQ7QUFDRSwwQkFBUSxFQUFFUyxVQUFVLEtBQUssQ0FEM0I7QUFFRSx5QkFBTyxFQUFFSyxVQUZYO0FBR0UsMkJBQVMsRUFBRVIsT0FBTyxDQUFDVixNQUhyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQVFFLHFFQUFDLGdFQUFEO0FBQ0UseUJBQU8sRUFBQyxXQURWO0FBRUUsdUJBQUssRUFBQyxTQUZSO0FBR0UseUJBQU8sRUFBRWdCLFVBSFg7QUFJRSwyQkFBUyxFQUFFTixPQUFPLENBQUNWLE1BSnJCO0FBQUEsNEJBTUdhLFVBQVUsS0FBS0UsS0FBSyxDQUFDUyxNQUFOLEdBQWUsQ0FBOUIsR0FBa0MsUUFBbEMsR0FBNkM7QUFOaEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFGRjtBQUFBLFdBQVdILEtBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBaUNEOztHQWxEdUJaLHFCO1VBQ05kLFM7OztLQURNYyxxQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC40NjliNWFlZTFjZjI4ZjMyYzE2NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXInO1xyXG5pbXBvcnQgU3RlcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwJztcclxuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWwnO1xyXG5pbXBvcnQgU3RlcENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbnRlbnQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBhY3Rpb25zQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICByZXNldENvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwcygpIHtcclxuICByZXR1cm4gWydTZWxlY2Npb27DoSBsb3MgcHJvZHVjdG9zIG8gcHJvbW9jaW9uZXMnLCAnU2VsZWNjaW9uw6EgbGFzIGNhbnRpZGFkZXMnLCAnSGFjw6kgZWwgcGVkaWRvIGEgdHJhdsOpcyBkZSB3aGF0c2FwcCBjb24gdW4gc29sbyBjbGljayddO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWZXJ0aWNhbExpbmVhclN0ZXBwZXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFthY3RpdmVTdGVwLCBzZXRBY3RpdmVTdGVwXSA9IFJlYWN0LnVzZVN0YXRlKDApO1xyXG4gIGNvbnN0IHN0ZXBzID0gZ2V0U3RlcHMoKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTmV4dCA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCArIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZUJhY2sgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmVTdGVwKChwcmV2QWN0aXZlU3RlcCkgPT4gcHJldkFjdGl2ZVN0ZXAgLSAxKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBoYW5kbGVSZXNldCA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVN0ZXAoMCk7XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8U3RlcHBlciBhY3RpdmVTdGVwPXthY3RpdmVTdGVwfSBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAge3N0ZXBzLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U3RlcCBrZXk9e2xhYmVsfT5cclxuICAgICAgICAgICAgPFN0ZXBMYWJlbD57bGFiZWx9PC9TdGVwTGFiZWw+XHJcbiAgICAgICAgICAgIDxTdGVwQ29udGVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57Z2V0U3RlcENvbnRlbnQoaW5kZXgpfTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICBkaXNhYmxlZD17YWN0aXZlU3RlcCA9PT0gMH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVCYWNrfVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBCYWNrXHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVOZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICB7YWN0aXZlU3RlcCA9PT0gc3RlcHMubGVuZ3RoIC0gMSA/ICdGaW5pc2gnIDogJ05leHQnfVxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L1N0ZXBDb250ZW50PlxyXG4gICAgICAgICAgPC9TdGVwPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N0ZXBwZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=