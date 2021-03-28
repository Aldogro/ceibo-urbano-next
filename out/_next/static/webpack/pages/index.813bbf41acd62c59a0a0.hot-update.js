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
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/ListAlt */ "./node_modules/@material-ui/icons/ListAlt.js");
/* harmony import */ var _material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ListAlt__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\Stepper.js",
    _s = $RefreshSig$();












function VerticalLinearStepper() {
  _s();

  var _this = this;

  var classes = useStyles();
  var steps = [{
    title: 'Elegí',
    text: 'Seleccioná los productos o promociones',
    icon: 'ListAltIcon',
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
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("component", {
                is: step.icon
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 59,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this), step.connector ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: classes.connector
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 33
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              variant: "h6",
              component: "h1",
              children: step.title
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              children: step.text
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this)]
        }, step.title, true, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 53,
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
    connector: {
      backgroundColor: theme.palette.primary.main
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiVmVydGljYWxMaW5lYXJTdGVwcGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInN0ZXBzIiwidGl0bGUiLCJ0ZXh0IiwiaWNvbiIsImNvbm5lY3RvciIsInJvb3QiLCJtYXAiLCJzdGVwIiwiaW5kZXgiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ3aWR0aCIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJwcmltYXJ5IiwibWFpbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUVlLFNBQVNBLHFCQUFULEdBQWlDO0FBQUE7O0FBQUE7O0FBQzlDLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUNBLE1BQU1DLEtBQUssR0FBRyxDQUNaO0FBQ0VDLFNBQUssRUFBRSxPQURUO0FBRUVDLFFBQUksRUFBRSx3Q0FGUjtBQUdFQyxRQUFJLEVBQUUsYUFIUjtBQUlFQyxhQUFTLEVBQUU7QUFKYixHQURZLEVBT1o7QUFDRUgsU0FBSyxFQUFFLFFBRFQ7QUFFRUMsUUFBSSxFQUFFLDBEQUZSO0FBR0VDLFFBQUksRUFBRSxVQUhSO0FBSUVDLGFBQVMsRUFBRTtBQUpiLEdBUFksRUFhWjtBQUNFSCxTQUFLLEVBQUUsWUFEVDtBQUVFQyxRQUFJLEVBQUUsd0JBRlI7QUFHRUMsUUFBSSxFQUFFLFVBSFI7QUFJRUMsYUFBUyxFQUFFO0FBSmIsR0FiWSxFQW1CWjtBQUNFSCxTQUFLLEVBQUUsTUFEVDtBQUVFQyxRQUFJLEVBQUUsdURBRlI7QUFHRUMsUUFBSSxFQUFFLFVBSFI7QUFJRUMsYUFBUyxFQUFFO0FBSmIsR0FuQlksRUEwQlo7QUFDRUgsU0FBSyxFQUFFLFFBRFQ7QUFFRUMsUUFBSSxFQUFFLGdDQUZSO0FBR0VDLFFBQUksRUFBRSxVQUhSO0FBSUVDLGFBQVMsRUFBRTtBQUpiLEdBMUJZLENBQWQ7QUFrQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUVOLE9BQU8sQ0FBQ08sSUFBeEI7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFVLFdBQUssRUFBQyxXQUFoQjtBQUFBLGdCQUNHTCxLQUFLLENBQUNNLEdBQU4sQ0FBVSxVQUFDQyxJQUFELEVBQU9DLEtBQVA7QUFBQSw0QkFDVCxxRUFBQyxxRUFBRDtBQUFBLGtDQUNFLHFFQUFDLDBFQUFEO0FBQUEsb0NBQ0UscUVBQUMsb0VBQUQ7QUFBYSxtQkFBSyxFQUFDLFNBQW5CO0FBQUEscUNBQ0U7QUFBVyxrQkFBRSxFQUFFRCxJQUFJLENBQUNKO0FBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBSUdJLElBQUksQ0FBQ0gsU0FBTCxnQkFBaUIscUVBQUMsMEVBQUQ7QUFBbUIsdUJBQVMsRUFBRU4sT0FBTyxDQUFDTTtBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFqQixHQUF1RSxJQUoxRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREYsZUFPRSxxRUFBQyx3RUFBRDtBQUFBLG9DQUNFLHFFQUFDLHFFQUFEO0FBQVkscUJBQU8sRUFBQyxJQUFwQjtBQUF5Qix1QkFBUyxFQUFDLElBQW5DO0FBQUEsd0JBQ0dHLElBQUksQ0FBQ047QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUUscUVBQUMscUVBQUQ7QUFBQSx3QkFBYU0sSUFBSSxDQUFDTDtBQUFsQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRjtBQUFBLFdBQW1CSyxJQUFJLENBQUNOLEtBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFM7QUFBQSxPQUFWO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXNCRDs7R0ExRHVCSixxQjtVQUNORSxTOzs7S0FETUYscUI7QUE0RHhCLElBQU1FLFNBQVMsR0FBR1UsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0wsUUFBSSxFQUFFO0FBQ0pNLFdBQUssRUFBRSxNQURIO0FBRUpDLGFBQU8sRUFBRSxNQUZMO0FBR0pDLG9CQUFjLEVBQUU7QUFIWixLQURpQztBQU12Q1QsYUFBUyxFQUFFO0FBQ1RVLHFCQUFlLEVBQUVKLEtBQUssQ0FBQ0ssT0FBTixDQUFjQyxPQUFkLENBQXNCQztBQUQ5QjtBQU40QixHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44MTNiYmY0MWFjZDYyYzU5YTBhMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuaW1wb3J0IFRpbWVsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmUnXHJcbmltcG9ydCBUaW1lbGluZUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUl0ZW0nXHJcbmltcG9ydCBUaW1lbGluZVNlcGFyYXRvciBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lU2VwYXJhdG9yJ1xyXG5pbXBvcnQgVGltZWxpbmVEb3QgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZURvdCdcclxuaW1wb3J0IFRpbWVsaW5lQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lQ29udGVudCdcclxuaW1wb3J0IFRpbWVsaW5lQ29ubmVjdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVDb25uZWN0b3InXHJcblxyXG5pbXBvcnQgRmFzdGZvb2RJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9GYXN0Zm9vZCdcclxuaW1wb3J0IExpc3RBbHRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9MaXN0QWx0J1xyXG5cclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZlcnRpY2FsTGluZWFyU3RlcHBlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBzdGVwcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdFbGVnw60nLFxyXG4gICAgICB0ZXh0OiAnU2VsZWNjaW9uw6EgbG9zIHByb2R1Y3RvcyBvIHByb21vY2lvbmVzJyxcclxuICAgICAgaWNvbjogJ0xpc3RBbHRJY29uJyxcclxuICAgICAgY29ubmVjdG9yOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdBZ3JlZ8OhJyxcclxuICAgICAgdGV4dDogJ1NlbGVjY2lvbsOhIGxhcyBjYW50aWRhZGVzIGRlIGxvcyBwcm9kdWN0b3MgbyBwcm9tb2Npb25lcycsXHJcbiAgICAgIGljb246ICdGYXN0Rm9vZCcsXHJcbiAgICAgIGNvbm5lY3RvcjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnU2VsZWNjaW9uw6EnLFxyXG4gICAgICB0ZXh0OiAnRWxlZ8OtIGVsIG1lZGlvIGRlIHBhZ28nLFxyXG4gICAgICBpY29uOiAnRmFzdEZvb2QnLFxyXG4gICAgICBjb25uZWN0b3I6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1BlZMOtJyxcclxuICAgICAgdGV4dDogJ0hhY8OpIGVsIHBlZGlkbyBhIHRyYXbDqXMgZGUgd2hhdHNhcHAgY29uIHVuIHNvbG8gY2xpY2snLFxyXG4gICAgICBpY29uOiAnRmFzdEZvb2QnLFxyXG4gICAgICBjb25uZWN0b3I6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUmVjaWLDrScsXHJcbiAgICAgIHRleHQ6ICfCoVRlIGxvIGxsZXZhbW9zIGhhc3RhIHR1IGNhc2EhJyxcclxuICAgICAgaWNvbjogJ0Zhc3RGb29kJyxcclxuICAgICAgY29ubmVjdG9yOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxUaW1lbGluZSBhbGlnbj1cImFsdGVybmF0ZVwiPlxyXG4gICAgICAgIHtzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8VGltZWxpbmVJdGVtIGtleT17c3RlcC50aXRsZX0+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgICA8VGltZWxpbmVEb3QgY29sb3I9XCJwcmltYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICA8Y29tcG9uZW50IGlzPXtzdGVwLmljb259IC8+XHJcbiAgICAgICAgICAgICAgPC9UaW1lbGluZURvdD5cclxuICAgICAgICAgICAgICB7c3RlcC5jb25uZWN0b3IgPyA8VGltZWxpbmVDb25uZWN0b3IgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbm5lY3Rvcn0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L1RpbWVsaW5lU2VwYXJhdG9yPlxyXG4gICAgICAgICAgICA8VGltZWxpbmVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNlwiIGNvbXBvbmVudD1cImgxXCI+XHJcbiAgICAgICAgICAgICAgICB7c3RlcC50aXRsZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+e3N0ZXAudGV4dH08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvVGltZWxpbmVDb250ZW50PlxyXG4gICAgICAgICAgPC9UaW1lbGluZUl0ZW0+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvVGltZWxpbmU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgY29ubmVjdG9yOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gIH1cclxufSkpOyJdLCJzb3VyY2VSb290IjoiIn0=