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

  var classes = useStyles();
  var steps = getSteps();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      align: "alternate",
      children: steps.map(function (step, index) {
        {
          step.title;
        }
        {
          /* <TimelineItem key={step.title + index}>
           <TimelineSeparator>
             <TimelineDot>
               <FastfoodIcon />
             </TimelineDot>
             <TimelineConnector />
           </TimelineSeparator>
           <TimelineContent>
             <Typography variant="h6" component="h1">
               {step.title}
             </Typography>
             <Typography>{step.text}</Typography>
           </TimelineContent>
          </TimelineItem> */
        }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiZ2V0U3RlcHMiLCJ0aXRsZSIsInRleHQiLCJpY29uIiwiVmVydGljYWxMaW5lYXJTdGVwcGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInN0ZXBzIiwicm9vdCIsIm1hcCIsInN0ZXAiLCJpbmRleCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIndpZHRoIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50Iiwic3RlcFRleHQiLCJmb250U2l6ZSIsIm1hcmdpbkxlZnQiLCJzcGFjaW5nIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsUUFBVCxHQUFvQjtBQUNsQixTQUFPLENBQ0w7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsUUFBSSxFQUFFLHdDQUZSO0FBR0VDLFFBQUksRUFBRTtBQUhSLEdBREssRUFNTDtBQUNFRixTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsMERBRlI7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0FOSyxFQVdMO0FBQ0VGLFNBQUssRUFBRSxZQURUO0FBRUVDLFFBQUksRUFBRSx3QkFGUjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQVhLLEVBZ0JMO0FBQ0VGLFNBQUssRUFBRSxNQURUO0FBRUVDLFFBQUksRUFBRSx1REFGUjtBQUdFQyxRQUFJLEVBQUU7QUFIUixHQWhCSyxFQXNCTDtBQUNFRixTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsZ0NBRlI7QUFHRUMsUUFBSSxFQUFFO0FBSFIsR0F0QkssQ0FBUDtBQTRCRDs7QUFFYyxTQUFTQyxxQkFBVCxHQUFpQztBQUFBOztBQUM5QyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFDQSxNQUFNQyxLQUFLLEdBQUdQLFFBQVEsRUFBdEI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUssT0FBTyxDQUFDRyxJQUF4QjtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQVUsV0FBSyxFQUFDLFdBQWhCO0FBQUEsZ0JBQ0dELEtBQUssQ0FBQ0UsR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUMxQjtBQUFDRCxjQUFJLENBQUNULEtBQUw7QUFBVztBQUNaO0FBQUM7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUE2QjtBQUNwQixPQWhCQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFrQ0Q7O0dBdEN1QkcscUI7VUFDTkUsUzs7O0tBRE1GLHFCO0FBd0N4QixJQUFNRSxTQUFTLEdBQUdNLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNMLFFBQUksRUFBRTtBQUNKTSxXQUFLLEVBQUUsTUFESDtBQUVKQyxhQUFPLEVBQUUsTUFGTDtBQUdKQyxvQkFBYyxFQUFFO0FBSFosS0FEaUM7QUFNdkNDLFlBQVEsRUFBRTtBQUNSQyxjQUFRLEVBQUUsTUFERjtBQUVSQyxnQkFBVSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBRko7QUFONkIsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmYzNDQxODY1MTBmMDVhYjM0NmIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZSdcclxuaW1wb3J0IFRpbWVsaW5lSXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lSXRlbSdcclxuaW1wb3J0IFRpbWVsaW5lU2VwYXJhdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVTZXBhcmF0b3InXHJcbmltcG9ydCBUaW1lbGluZURvdCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lRG90J1xyXG5pbXBvcnQgVGltZWxpbmVDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVDb250ZW50J1xyXG5pbXBvcnQgVGltZWxpbmVDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUNvbm5lY3RvcidcclxuXHJcbmltcG9ydCBGYXN0Zm9vZEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0Zhc3Rmb29kJ1xyXG5cclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuXHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXInO1xyXG5pbXBvcnQgU3RlcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwJztcclxuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWwnO1xyXG5cclxuZnVuY3Rpb24gZ2V0U3RlcHMoKSB7XHJcbiAgcmV0dXJuIFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdFbGVnw60nLFxyXG4gICAgICB0ZXh0OiAnU2VsZWNjaW9uw6EgbG9zIHByb2R1Y3RvcyBvIHByb21vY2lvbmVzJyxcclxuICAgICAgaWNvbjogJ0Zhc3RGb29kJyxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnQWdyZWfDoScsXHJcbiAgICAgIHRleHQ6ICdTZWxlY2Npb27DoSBsYXMgY2FudGlkYWRlcyBkZSBsb3MgcHJvZHVjdG9zIG8gcHJvbW9jaW9uZXMnLFxyXG4gICAgICBpY29uOiAnRmFzdEZvb2QnLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdTZWxlY2Npb27DoScsXHJcbiAgICAgIHRleHQ6ICdFbGVnw60gZWwgbWVkaW8gZGUgcGFnbycsXHJcbiAgICAgIGljb246ICdGYXN0Rm9vZCcsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1BlZMOtJyxcclxuICAgICAgdGV4dDogJ0hhY8OpIGVsIHBlZGlkbyBhIHRyYXbDqXMgZGUgd2hhdHNhcHAgY29uIHVuIHNvbG8gY2xpY2snLFxyXG4gICAgICBpY29uOiAnRmFzdEZvb2QnLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1JlY2liw60nLFxyXG4gICAgICB0ZXh0OiAnwqFUZSBsbyBsbGV2YW1vcyBoYXN0YSB0dSBjYXNhIScsXHJcbiAgICAgIGljb246ICdGYXN0Rm9vZCcsXHJcbiAgICB9LFxyXG4gIF07XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZlcnRpY2FsTGluZWFyU3RlcHBlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxUaW1lbGluZSBhbGlnbj1cImFsdGVybmF0ZVwiPlxyXG4gICAgICAgIHtzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiB7XHJcbiAgICAgICAgICB7c3RlcC50aXRsZX1cclxuICAgICAgICAgIHsvKiA8VGltZWxpbmVJdGVtIGtleT17c3RlcC50aXRsZSArIGluZGV4fT5cclxuICAgICAgICAgICAgPFRpbWVsaW5lU2VwYXJhdG9yPlxyXG4gICAgICAgICAgICAgIDxUaW1lbGluZURvdD5cclxuICAgICAgICAgICAgICAgIDxGYXN0Zm9vZEljb24gLz5cclxuICAgICAgICAgICAgICA8L1RpbWVsaW5lRG90PlxyXG4gICAgICAgICAgICAgIDxUaW1lbGluZUNvbm5lY3RvciAvPlxyXG4gICAgICAgICAgICA8L1RpbWVsaW5lU2VwYXJhdG9yPlxyXG4gICAgICAgICAgICA8VGltZWxpbmVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgxXCI+XHJcbiAgICAgICAgICAgICAgICB7c3RlcC50aXRsZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3N0ZXAudGV4dH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvVGltZWxpbmVDb250ZW50PlxyXG4gICAgICAgICAgPC9UaW1lbGluZUl0ZW0+ICovfVxyXG4gICAgICAgIH0pfVxyXG4gICAgICA8L1RpbWVsaW5lPlxyXG4gICAgICB7LyogPFN0ZXBwZXIgYWN0aXZlU3RlcD17c3RlcHMubGVuZ3RofSBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCI+XHJcbiAgICAgICAge3N0ZXBzLm1hcCgobGFiZWwsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8U3RlcCBrZXk9e2xhYmVsfT5cclxuICAgICAgICAgICAgPFN0ZXBMYWJlbD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5zdGVwVGV4dH0+XHJcbiAgICAgICAgICAgICAgICB7bGFiZWx9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3RlcExhYmVsPlxyXG4gICAgICAgICAgPC9TdGVwPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1N0ZXBwZXI+ICovfVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICB9LFxyXG4gIHN0ZXBUZXh0OiB7XHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9XHJcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9