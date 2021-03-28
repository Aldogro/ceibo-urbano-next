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














function VerticalLinearStepper() {
  _s();

  var _this = this;

  var classes = useStyles();
  var steps = [{
    title: 'Elegí',
    text: 'Seleccioná los productos o promociones',
    icon: 'FastFood',
    connector: true
  }, {
    title: 'Agregá',
    text: 'Seleccioná las cantidades de los productos o promociones',
    icon: 'FastFood',
    connector: true
  }, {
    title: 'Seleccioná',
    text: 'Elegí el medio de pago',
    icon: 'FastFood',
    connector: true
  }, {
    title: 'Pedí',
    text: 'Hacé el pedido a través de whatsapp con un solo click',
    icon: 'FastFood',
    connector: true
  }, {
    title: 'Recibí',
    text: '¡Te lo llevamos hasta tu casa!',
    icon: 'FastFood',
    connector: false
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      align: "alternate",
      children: steps.map(function (step, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_6__["default"], {
              color: "primary",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Fastfood__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this), step.connector ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 33
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
              variant: "h6",
              component: "h1",
              children: step.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: step.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 70,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this)]
        }, step.title + index, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiVmVydGljYWxMaW5lYXJTdGVwcGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInN0ZXBzIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsImNvbm5lY3RvciIsInJvb3QiLCJtYXAiLCJzdGVwIiwiaW5kZXgiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsInN0ZXBUZXh0IiwiZm9udFNpemUiLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRWUsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFDOUMsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsUUFBSSxFQUFFLHdDQUZSO0FBR0VDLFFBQUksRUFBRSxVQUhSO0FBSUVDLGFBQVMsRUFBRTtBQUpiLEdBRFksRUFPWjtBQUNFSCxTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsMERBRlI7QUFHRUMsUUFBSSxFQUFFLFVBSFI7QUFJRUMsYUFBUyxFQUFFO0FBSmIsR0FQWSxFQWFaO0FBQ0VILFNBQUssRUFBRSxZQURUO0FBRUVDLFFBQUksRUFBRSx3QkFGUjtBQUdFQyxRQUFJLEVBQUUsVUFIUjtBQUlFQyxhQUFTLEVBQUU7QUFKYixHQWJZLEVBbUJaO0FBQ0VILFNBQUssRUFBRSxNQURUO0FBRUVDLFFBQUksRUFBRSx1REFGUjtBQUdFQyxRQUFJLEVBQUUsVUFIUjtBQUlFQyxhQUFTLEVBQUU7QUFKYixHQW5CWSxFQTBCWjtBQUNFSCxTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsZ0NBRlI7QUFHRUMsUUFBSSxFQUFFLFVBSFI7QUFJRUMsYUFBUyxFQUFFO0FBSmIsR0ExQlksQ0FBZDtBQWtDQSxzQkFDRTtBQUFLLGFBQVMsRUFBRU4sT0FBTyxDQUFDTyxJQUF4QjtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQVUsV0FBSyxFQUFDLFdBQWhCO0FBQUEsZ0JBQ0dMLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNULHFFQUFDLHFFQUFEO0FBQUEsa0NBQ0UscUVBQUMsMEVBQUQ7QUFBQSxvQ0FDRSxxRUFBQyxvRUFBRDtBQUFhLG1CQUFLLEVBQUMsU0FBbkI7QUFBQSxxQ0FDRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQUlHRCxJQUFJLENBQUNILFNBQUwsZ0JBQWlCLHFFQUFDLDBFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBQWpCLEdBQXlDLElBSjVDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FLHFFQUFDLHdFQUFEO0FBQUEsb0NBQ0UscUVBQUMscUVBQUQ7QUFBWSxxQkFBTyxFQUFDLElBQXBCO0FBQXlCLHVCQUFTLEVBQUMsSUFBbkM7QUFBQSx3QkFDR0csSUFBSSxDQUFDTjtBQURSO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFJRSxxRUFBQyxxRUFBRDtBQUFBLHdCQUFhTSxJQUFJLENBQUNMO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBGO0FBQUEsV0FBbUJLLElBQUksQ0FBQ04sS0FBTCxHQUFhTyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFpQ0Q7O0dBckV1QlgscUI7VUFDTkUsUzs7O0tBRE1GLHFCO0FBdUV4QixJQUFNRSxTQUFTLEdBQUdVLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNMLFFBQUksRUFBRTtBQUNKTSxXQUFLLEVBQUUsTUFESDtBQUVKQyxhQUFPLEVBQUUsTUFGTDtBQUdKQyxvQkFBYyxFQUFFO0FBSFosS0FEaUM7QUFNdkNDLFlBQVEsRUFBRTtBQUNSQyxjQUFRLEVBQUUsTUFERjtBQUVSQyxnQkFBVSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBRko7QUFONkIsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTQyNTc1NGZiMzk5OGZiZmEwOTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZSdcclxuaW1wb3J0IFRpbWVsaW5lSXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lSXRlbSdcclxuaW1wb3J0IFRpbWVsaW5lU2VwYXJhdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVTZXBhcmF0b3InXHJcbmltcG9ydCBUaW1lbGluZURvdCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lRG90J1xyXG5pbXBvcnQgVGltZWxpbmVDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVDb250ZW50J1xyXG5pbXBvcnQgVGltZWxpbmVDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUNvbm5lY3RvcidcclxuXHJcbmltcG9ydCBGYXN0Zm9vZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhc3Rmb29kJ1xyXG5cclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuXHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXInO1xyXG5pbXBvcnQgU3RlcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwJztcclxuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWwnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVydGljYWxMaW5lYXJTdGVwcGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHN0ZXBzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0VsZWfDrScsXHJcbiAgICAgIHRleHQ6ICdTZWxlY2Npb27DoSBsb3MgcHJvZHVjdG9zIG8gcHJvbW9jaW9uZXMnLFxyXG4gICAgICBpY29uOiAnRmFzdEZvb2QnLFxyXG4gICAgICBjb25uZWN0b3I6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0FncmVnw6EnLFxyXG4gICAgICB0ZXh0OiAnU2VsZWNjaW9uw6EgbGFzIGNhbnRpZGFkZXMgZGUgbG9zIHByb2R1Y3RvcyBvIHByb21vY2lvbmVzJyxcclxuICAgICAgaWNvbjogJ0Zhc3RGb29kJyxcclxuICAgICAgY29ubmVjdG9yOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdTZWxlY2Npb27DoScsXHJcbiAgICAgIHRleHQ6ICdFbGVnw60gZWwgbWVkaW8gZGUgcGFnbycsXHJcbiAgICAgIGljb246ICdGYXN0Rm9vZCcsXHJcbiAgICAgIGNvbm5lY3RvcjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUGVkw60nLFxyXG4gICAgICB0ZXh0OiAnSGFjw6kgZWwgcGVkaWRvIGEgdHJhdsOpcyBkZSB3aGF0c2FwcCBjb24gdW4gc29sbyBjbGljaycsXHJcbiAgICAgIGljb246ICdGYXN0Rm9vZCcsXHJcbiAgICAgIGNvbm5lY3RvcjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdSZWNpYsOtJyxcclxuICAgICAgdGV4dDogJ8KhVGUgbG8gbGxldmFtb3MgaGFzdGEgdHUgY2FzYSEnLFxyXG4gICAgICBpY29uOiAnRmFzdEZvb2QnLFxyXG4gICAgICBjb25uZWN0b3I6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFRpbWVsaW5lIGFsaWduPVwiYWx0ZXJuYXRlXCI+XHJcbiAgICAgICAge3N0ZXBzLm1hcCgoc3RlcCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxUaW1lbGluZUl0ZW0ga2V5PXtzdGVwLnRpdGxlICsgaW5kZXh9PlxyXG4gICAgICAgICAgICA8VGltZWxpbmVTZXBhcmF0b3I+XHJcbiAgICAgICAgICAgICAgPFRpbWVsaW5lRG90IGNvbG9yPVwicHJpbWFyeVwiPlxyXG4gICAgICAgICAgICAgICAgPEZhc3Rmb29kSWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvVGltZWxpbmVEb3Q+XHJcbiAgICAgICAgICAgICAge3N0ZXAuY29ubmVjdG9yID8gPFRpbWVsaW5lQ29ubmVjdG9yIC8+IDogbnVsbH1cclxuICAgICAgICAgICAgPC9UaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgPFRpbWVsaW5lQ29udGVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDZcIiBjb21wb25lbnQ9XCJoMVwiPlxyXG4gICAgICAgICAgICAgICAge3N0ZXAudGl0bGV9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntzdGVwLnRleHR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L1RpbWVsaW5lQ29udGVudD5cclxuICAgICAgICAgIDwvVGltZWxpbmVJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1RpbWVsaW5lPlxyXG4gICAgICB7LyogPFN0ZXBwZXIgYWN0aXZlU3RlcD17c3RlcHMubGVuZ3RofSBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAge3N0ZXBzLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U3RlcCBrZXk9e2xhYmVsfT5cclxuICAgICAgICAgICAgPFN0ZXBMYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGVwVGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3RlcExhYmVsPlxyXG4gICAgICAgICAgPC9TdGVwPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N0ZXBwZXI+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHN0ZXBUZXh0OiB7XHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9XHJcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9