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
/* harmony import */ var _material_ui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/TimelineOppositeContent */ "./node_modules/@material-ui/lab/esm/TimelineOppositeContent/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\Stepper.js",
    _s = $RefreshSig$();











function VerticalLinearStepper() {
  _s();

  var _this = this;

  var classes = useStyles();
  var steps = [{
    title: 'Elegí',
    text: 'Seleccioná los productos o promociones',
    connector: true
  }, {
    title: 'Agregá',
    text: 'Seleccioná las cantidades de los productos o promociones',
    icon: 'FastFood',
    connector: true
  }, {
    title: 'Seleccioná',
    text: 'Elegí el medio de pago',
    connector: true
  }, {
    title: 'Pedí',
    text: 'Hacé el pedido a través de whatsapp con un solo click',
    connector: true
  }, {
    title: 'Recibí',
    text: '¡Te lo llevamos hasta tu casa!',
    connector: false
  }];
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      children: steps.map(function (step, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
              variant: "p",
              component: "h4",
              children: step.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 52,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 51,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_5__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_6__["default"], {
              color: "primary",
              className: classes.dot,
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this), step.connector ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: classes.connector
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 33
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
              variant: "p",
              color: "textSecondary",
              children: step.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 59,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this)]
        }, step.title + index, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
      justifyContent: 'flex-start'
    },
    connector: {
      backgroundColor: theme.palette.primary.main
    },
    dot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '30px',
      width: '30px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiVmVydGljYWxMaW5lYXJTdGVwcGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInN0ZXBzIiwidGl0bGUiLCJ0ZXh0IiwiY29ubmVjdG9yIiwiaWNvbiIsInJvb3QiLCJtYXAiLCJzdGVwIiwiaW5kZXgiLCJkb3QiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiIsImFsaWduSXRlbXMiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFDOUMsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsUUFBSSxFQUFFLHdDQUZSO0FBR0VDLGFBQVMsRUFBRTtBQUhiLEdBRFksRUFNWjtBQUNFRixTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsMERBRlI7QUFHRUUsUUFBSSxFQUFFLFVBSFI7QUFJRUQsYUFBUyxFQUFFO0FBSmIsR0FOWSxFQVlaO0FBQ0VGLFNBQUssRUFBRSxZQURUO0FBRUVDLFFBQUksRUFBRSx3QkFGUjtBQUdFQyxhQUFTLEVBQUU7QUFIYixHQVpZLEVBaUJaO0FBQ0VGLFNBQUssRUFBRSxNQURUO0FBRUVDLFFBQUksRUFBRSx1REFGUjtBQUdFQyxhQUFTLEVBQUU7QUFIYixHQWpCWSxFQXVCWjtBQUNFRixTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsZ0NBRlI7QUFHRUMsYUFBUyxFQUFFO0FBSGIsR0F2QlksQ0FBZDtBQThCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUwsT0FBTyxDQUFDTyxJQUF4QjtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQUEsZ0JBQ0dMLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNULHFFQUFDLHFFQUFEO0FBQUEsa0NBQ0UscUVBQUMsZ0ZBQUQ7QUFBQSxtQ0FDRSxxRUFBQyxxRUFBRDtBQUFZLHFCQUFPLEVBQUMsR0FBcEI7QUFBd0IsdUJBQVMsRUFBQyxJQUFsQztBQUFBLHdCQUF3Q0QsSUFBSSxDQUFDTjtBQUE3QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLHFFQUFDLDBFQUFEO0FBQUEsb0NBQ0UscUVBQUMsb0VBQUQ7QUFBYSxtQkFBSyxFQUFDLFNBQW5CO0FBQTZCLHVCQUFTLEVBQUVILE9BQU8sQ0FBQ1csR0FBaEQ7QUFBQSx3QkFBc0RELEtBQUssR0FBRztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdELElBQUksQ0FBQ0osU0FBTCxnQkFBaUIscUVBQUMsMEVBQUQ7QUFBbUIsdUJBQVMsRUFBRUwsT0FBTyxDQUFDSztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFqQixHQUF1RSxJQUYxRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFRRSxxRUFBQyx3RUFBRDtBQUFBLG1DQUNFLHFFQUFDLHFFQUFEO0FBQVkscUJBQU8sRUFBQyxHQUFwQjtBQUF3QixtQkFBSyxFQUFDLGVBQTlCO0FBQUEsd0JBQStDSSxJQUFJLENBQUNMO0FBQXBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUEsV0FBbUJLLElBQUksQ0FBQ04sS0FBTCxHQUFhTyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBcER1QlgscUI7VUFDTkUsUzs7O0tBRE1GLHFCO0FBc0R4QixJQUFNRSxTQUFTLEdBQUdXLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNOLFFBQUksRUFBRTtBQUNKTyxXQUFLLEVBQUUsTUFESDtBQUVKQyxhQUFPLEVBQUUsTUFGTDtBQUdKQyxvQkFBYyxFQUFFO0FBSFosS0FEaUM7QUFNdkNYLGFBQVMsRUFBRTtBQUNUWSxxQkFBZSxFQUFFSixLQUFLLENBQUNLLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkM7QUFEOUIsS0FONEI7QUFTdkNULE9BQUcsRUFBRTtBQUNISSxhQUFPLEVBQUUsTUFETjtBQUVITSxnQkFBVSxFQUFFLFFBRlQ7QUFHSEwsb0JBQWMsRUFBRSxRQUhiO0FBSUhNLFlBQU0sRUFBRSxNQUpMO0FBS0hSLFdBQUssRUFBRTtBQUxKO0FBVGtDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmJjMTRhMzc0MzVjNzEzZjgxMDk4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5pbXBvcnQgVGltZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZSdcclxuaW1wb3J0IFRpbWVsaW5lSXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lSXRlbSdcclxuaW1wb3J0IFRpbWVsaW5lU2VwYXJhdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVTZXBhcmF0b3InXHJcbmltcG9ydCBUaW1lbGluZURvdCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lRG90J1xyXG5pbXBvcnQgVGltZWxpbmVDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVDb250ZW50J1xyXG5pbXBvcnQgVGltZWxpbmVDb25uZWN0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUNvbm5lY3RvcidcclxuaW1wb3J0IFRpbWVsaW5lT3Bwb3NpdGVDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQnXHJcblxyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVydGljYWxMaW5lYXJTdGVwcGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHN0ZXBzID0gW1xyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0VsZWfDrScsXHJcbiAgICAgIHRleHQ6ICdTZWxlY2Npb27DoSBsb3MgcHJvZHVjdG9zIG8gcHJvbW9jaW9uZXMnLFxyXG4gICAgICBjb25uZWN0b3I6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ0FncmVnw6EnLFxyXG4gICAgICB0ZXh0OiAnU2VsZWNjaW9uw6EgbGFzIGNhbnRpZGFkZXMgZGUgbG9zIHByb2R1Y3RvcyBvIHByb21vY2lvbmVzJyxcclxuICAgICAgaWNvbjogJ0Zhc3RGb29kJyxcclxuICAgICAgY29ubmVjdG9yOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdTZWxlY2Npb27DoScsXHJcbiAgICAgIHRleHQ6ICdFbGVnw60gZWwgbWVkaW8gZGUgcGFnbycsXHJcbiAgICAgIGNvbm5lY3RvcjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUGVkw60nLFxyXG4gICAgICB0ZXh0OiAnSGFjw6kgZWwgcGVkaWRvIGEgdHJhdsOpcyBkZSB3aGF0c2FwcCBjb24gdW4gc29sbyBjbGljaycsXHJcbiAgICAgIGNvbm5lY3RvcjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICBcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdSZWNpYsOtJyxcclxuICAgICAgdGV4dDogJ8KhVGUgbG8gbGxldmFtb3MgaGFzdGEgdHUgY2FzYSEnLFxyXG4gICAgICBjb25uZWN0b3I6IGZhbHNlLFxyXG4gICAgfSxcclxuICBdXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFRpbWVsaW5lPlxyXG4gICAgICAgIHtzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8VGltZWxpbmVJdGVtIGtleT17c3RlcC50aXRsZSArIGluZGV4fT5cclxuICAgICAgICAgICAgPFRpbWVsaW5lT3Bwb3NpdGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJwXCIgY29tcG9uZW50PVwiaDRcIj57c3RlcC50aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgICA8VGltZWxpbmVEb3QgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRvdH0+e2luZGV4ICsgMX08L1RpbWVsaW5lRG90PlxyXG4gICAgICAgICAgICAgIHtzdGVwLmNvbm5lY3RvciA/IDxUaW1lbGluZUNvbm5lY3RvciBjbGFzc05hbWU9e2NsYXNzZXMuY29ubmVjdG9yfSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvVGltZWxpbmVTZXBhcmF0b3I+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cInBcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIj57c3RlcC50ZXh0fTwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPC9UaW1lbGluZUNvbnRlbnQ+XHJcbiAgICAgICAgICA8L1RpbWVsaW5lSXRlbT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9UaW1lbGluZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2ZsZXgtc3RhcnQnLFxyXG4gIH0sXHJcbiAgY29ubmVjdG9yOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gIH0sXHJcbiAgZG90OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGhlaWdodDogJzMwcHgnLFxyXG4gICAgd2lkdGg6ICczMHB4JyxcclxuICB9XHJcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9