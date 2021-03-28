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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/lab/Timeline */ "./node_modules/@material-ui/lab/esm/Timeline/index.js");
/* harmony import */ var _material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/TimelineItem */ "./node_modules/@material-ui/lab/esm/TimelineItem/index.js");
/* harmony import */ var _material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/TimelineSeparator */ "./node_modules/@material-ui/lab/esm/TimelineSeparator/index.js");
/* harmony import */ var _material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/TimelineDot */ "./node_modules/@material-ui/lab/esm/TimelineDot/index.js");
/* harmony import */ var _material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/TimelineContent */ "./node_modules/@material-ui/lab/esm/TimelineContent/index.js");
/* harmony import */ var _material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/TimelineConnector */ "./node_modules/@material-ui/lab/esm/TimelineConnector/index.js");
/* harmony import */ var _material_ui_icons_Fastfood__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Fastfood */ "./node_modules/@material-ui/icons/Fastfood.js");
/* harmony import */ var _material_ui_icons_Fastfood__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Fastfood__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\Stepper.js",
    _s = $RefreshSig$();















function getSteps() {
  return [{
    title: 'Elegí',
    text: 'Seleccioná los productos o promociones',
    icon: 'FastFood'
  }, {
    title: 'Agregá',
    text: 'Seleccioná las cantidades de los productos o promociones',
    icon: 'FastFood'
  }, {
    title: 'Seleccioná',
    text: 'Elegí el medio de pago',
    icon: 'FastFood'
  }, {
    title: 'Pedí',
    text: 'Hacé el pedido a través de whatsapp con un solo click',
    icon: 'FastFood'
  }, {
    title: 'Recibí',
    text: '¡Te lo llevamos hasta tu casa!',
    icon: 'FastFood'
  }];
}

function VerticalLinearStepper() {
  _s();

  var _this = this;

  var classes = useStyles();
  var steps = getSteps();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      align: "alternate",
      children: steps.map(function (step, index) {
        /*#__PURE__*/
        Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Fastfood__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
              variant: "h6",
              component: "h1",
              children: step.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: step.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this)]
        }, step.name + index, true, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(VerticalLinearStepper, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = VerticalLinearStepper;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_2__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%',
      display: 'flex',
      justifyContent: 'center'
    },
    stepText: {
      fontSize: '20px',
      marginLeft: theme.spacing(2)
    }
  };
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiZ2V0U3RlcHMiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwiVmVydGljYWxMaW5lYXJTdGVwcGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInN0ZXBzIiwicm9vdCIsIm1hcCIsInN0ZXAiLCJpbmRleCIsIm5hbWUiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN0ZXBUZXh0IiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsU0FBTyxDQUNMO0FBQ0VDLFNBQUssRUFBRSxPQURUO0FBRUVDLFFBQUksRUFBRSx3Q0FGUjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQURLLEVBTUw7QUFDRUYsU0FBSyxFQUFFLFFBRFQ7QUFFRUMsUUFBSSxFQUFFLDBEQUZSO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBTkssRUFXTDtBQUNFRixTQUFLLEVBQUUsWUFEVDtBQUVFQyxRQUFJLEVBQUUsd0JBRlI7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FYSyxFQWdCTDtBQUNFRixTQUFLLEVBQUUsTUFEVDtBQUVFQyxRQUFJLEVBQUUsdURBRlI7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FoQkssRUFzQkw7QUFDRUYsU0FBSyxFQUFFLFFBRFQ7QUFFRUMsUUFBSSxFQUFFLGdDQUZSO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBdEJLLENBQVA7QUE0QkQ7O0FBRWMsU0FBU0MscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFDOUMsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHUCxRQUFRLEVBQXRCO0FBRUEsc0JBQ0U7QUFBSyxhQUFTLEVBQUVLLE9BQU8sQ0FBQ0csSUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFVLFdBQUssRUFBQyxXQUFoQjtBQUFBLGdCQUNHRCxLQUFLLENBQUNFLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVAsRUFBaUI7QUFDMUI7QUFBQSw2RUFBQyxxRUFBRDtBQUFBLGtDQUNFLHFFQUFDLDBFQUFEO0FBQUEsb0NBQ0UscUVBQUMsb0VBQUQ7QUFBQSxxQ0FDRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBT0UscUVBQUMsd0VBQUQ7QUFBQSxvQ0FDRSxxRUFBQyxxRUFBRDtBQUFZLHFCQUFPLEVBQUMsSUFBcEI7QUFBeUIsdUJBQVMsRUFBQyxJQUFuQztBQUFBLHdCQUNHRCxJQUFJLENBQUNUO0FBRFI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQUlFLHFFQUFDLHFFQUFEO0FBQUEsd0JBQWFTLElBQUksQ0FBQ1I7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEY7QUFBQSxXQUFtQlEsSUFBSSxDQUFDRSxJQUFMLEdBQVlELEtBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFjRCxPQWZBO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWlDRDs7R0FyQ3VCUCxxQjtVQUNORSxTOzs7S0FETUYscUI7QUF1Q3hCLElBQU1FLFNBQVMsR0FBR08sMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q04sUUFBSSxFQUFFO0FBQ0pPLFdBQUssRUFBRSxNQURIO0FBRUpDLGFBQU8sRUFBRSxNQUZMO0FBR0pDLG9CQUFjLEVBQUU7QUFIWixLQURpQztBQU12Q0MsWUFBUSxFQUFFO0FBQ1JDLGNBQVEsRUFBRSxNQURGO0FBRVJDLGdCQUFVLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQ7QUFGSjtBQU42QixHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43YTcwMDMzZWU3YjM1MjU1OTdjZi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmltcG9ydCBUaW1lbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lJ1xyXG5pbXBvcnQgVGltZWxpbmVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVJdGVtJ1xyXG5pbXBvcnQgVGltZWxpbmVTZXBhcmF0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZVNlcGFyYXRvcidcclxuaW1wb3J0IFRpbWVsaW5lRG90IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVEb3QnXHJcbmltcG9ydCBUaW1lbGluZUNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUNvbnRlbnQnXHJcbmltcG9ydCBUaW1lbGluZUNvbm5lY3RvciBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lQ29ubmVjdG9yJ1xyXG5cclxuaW1wb3J0IEZhc3Rmb29kSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRmFzdGZvb2QnXHJcblxyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5cclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwcygpIHtcclxuICByZXR1cm4gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0VsZWfDrScsXHJcbiAgICAgIHRleHQ6ICdTZWxlY2Npb27DoSBsb3MgcHJvZHVjdG9zIG8gcHJvbW9jaW9uZXMnLFxyXG4gICAgICBpY29uOiAnRmFzdEZvb2QnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdBZ3JlZ8OhJyxcclxuICAgICAgdGV4dDogJ1NlbGVjY2lvbsOhIGxhcyBjYW50aWRhZGVzIGRlIGxvcyBwcm9kdWN0b3MgbyBwcm9tb2Npb25lcycsXHJcbiAgICAgIGljb246ICdGYXN0Rm9vZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1NlbGVjY2lvbsOhJyxcclxuICAgICAgdGV4dDogJ0VsZWfDrSBlbCBtZWRpbyBkZSBwYWdvJyxcclxuICAgICAgaWNvbjogJ0Zhc3RGb29kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUGVkw60nLFxyXG4gICAgICB0ZXh0OiAnSGFjw6kgZWwgcGVkaWRvIGEgdHJhdsOpcyBkZSB3aGF0c2FwcCBjb24gdW4gc29sbyBjbGljaycsXHJcbiAgICAgIGljb246ICdGYXN0Rm9vZCcsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUmVjaWLDrScsXHJcbiAgICAgIHRleHQ6ICfCoVRlIGxvIGxsZXZhbW9zIGhhc3RhIHR1IGNhc2EhJyxcclxuICAgICAgaWNvbjogJ0Zhc3RGb29kJyxcclxuICAgIH0sXHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVydGljYWxMaW5lYXJTdGVwcGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBzdGVwcyA9IGdldFN0ZXBzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFRpbWVsaW5lIGFsaWduPVwiYWx0ZXJuYXRlXCI+XHJcbiAgICAgICAge3N0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IHtcclxuICAgICAgICAgIDxUaW1lbGluZUl0ZW0ga2V5PXtzdGVwLm5hbWUgKyBpbmRleH0+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgICA8VGltZWxpbmVEb3Q+XHJcbiAgICAgICAgICAgICAgICA8RmFzdGZvb2RJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9UaW1lbGluZURvdD5cclxuICAgICAgICAgICAgICA8VGltZWxpbmVDb25uZWN0b3IgLz5cclxuICAgICAgICAgICAgPC9UaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgPFRpbWVsaW5lQ29udGVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMVwiPlxyXG4gICAgICAgICAgICAgICAge3N0ZXAudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntzdGVwLnRleHR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L1RpbWVsaW5lQ29udGVudD5cclxuICAgICAgICAgIDwvVGltZWxpbmVJdGVtPlxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1RpbWVsaW5lPlxyXG4gICAgICB7LyogPFN0ZXBwZXIgYWN0aXZlU3RlcD17c3RlcHMubGVuZ3RofSBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAge3N0ZXBzLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U3RlcCBrZXk9e2xhYmVsfT5cclxuICAgICAgICAgICAgPFN0ZXBMYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGVwVGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3RlcExhYmVsPlxyXG4gICAgICAgICAgPC9TdGVwPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N0ZXBwZXI+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHN0ZXBUZXh0OiB7XHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9XHJcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9