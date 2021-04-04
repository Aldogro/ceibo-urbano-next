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
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/lab/Timeline */ "./node_modules/@material-ui/lab/esm/Timeline/index.js");
/* harmony import */ var _material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/lab/TimelineItem */ "./node_modules/@material-ui/lab/esm/TimelineItem/index.js");
/* harmony import */ var _material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/TimelineSeparator */ "./node_modules/@material-ui/lab/esm/TimelineSeparator/index.js");
/* harmony import */ var _material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/TimelineDot */ "./node_modules/@material-ui/lab/esm/TimelineDot/index.js");
/* harmony import */ var _material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/lab/TimelineContent */ "./node_modules/@material-ui/lab/esm/TimelineContent/index.js");
/* harmony import */ var _material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/lab/TimelineConnector */ "./node_modules/@material-ui/lab/esm/TimelineConnector/index.js");
/* harmony import */ var _material_ui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/lab/TimelineOppositeContent */ "./node_modules/@material-ui/lab/esm/TimelineOppositeContent/index.js");
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_4__["default"], {
      align: "alternate",
      children: steps.map(function (step, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_TimelineOppositeContent__WEBPACK_IMPORTED_MODULE_10__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: classes.title,
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_TimelineSeparator__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_TimelineDot__WEBPACK_IMPORTED_MODULE_7__["default"], {
              color: "primary",
              className: classes.dot,
              children: index + 1
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this), step.connector ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_TimelineConnector__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_TimelineContent__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: classes.text,
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
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%',
      maringLeft: '-100px',
      fontSize: '12px'
    }, theme.breakpoints.up('sm'), {
      fontSize: '20px'
    }),
    connector: {
      backgroundColor: theme.palette.primary.main
    },
    dot: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '30px',
      width: '30px'
    },
    title: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      fontSize: '12px'
    }, theme.breakpoints.up('sm'), {
      fontSize: '20px'
    })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiVmVydGljYWxMaW5lYXJTdGVwcGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInN0ZXBzIiwidGl0bGUiLCJ0ZXh0IiwiY29ubmVjdG9yIiwiaWNvbiIsInJvb3QiLCJtYXAiLCJzdGVwIiwiaW5kZXgiLCJkb3QiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ3aWR0aCIsIm1hcmluZ0xlZnQiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwidXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFDOUMsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsUUFBSSxFQUFFLHdDQUZSO0FBR0VDLGFBQVMsRUFBRTtBQUhiLEdBRFksRUFNWjtBQUNFRixTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsMERBRlI7QUFHRUUsUUFBSSxFQUFFLFVBSFI7QUFJRUQsYUFBUyxFQUFFO0FBSmIsR0FOWSxFQVlaO0FBQ0VGLFNBQUssRUFBRSxZQURUO0FBRUVDLFFBQUksRUFBRSx3QkFGUjtBQUdFQyxhQUFTLEVBQUU7QUFIYixHQVpZLEVBaUJaO0FBQ0VGLFNBQUssRUFBRSxNQURUO0FBRUVDLFFBQUksRUFBRSx1REFGUjtBQUdFQyxhQUFTLEVBQUU7QUFIYixHQWpCWSxFQXVCWjtBQUNFRixTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsZ0NBRlI7QUFHRUMsYUFBUyxFQUFFO0FBSGIsR0F2QlksQ0FBZDtBQThCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUwsT0FBTyxDQUFDTyxJQUF4QjtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQVUsV0FBSyxFQUFDLFdBQWhCO0FBQUEsZ0JBQ0dMLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNULHFFQUFDLHFFQUFEO0FBQUEsa0NBQ0UscUVBQUMsaUZBQUQ7QUFBQSxtQ0FDRSxxRUFBQyxxRUFBRDtBQUFZLHVCQUFTLEVBQUVWLE9BQU8sQ0FBQ0csS0FBL0I7QUFBc0MsdUJBQVMsRUFBQyxJQUFoRDtBQUFBLHdCQUFzRE0sSUFBSSxDQUFDTjtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLHFFQUFDLDBFQUFEO0FBQUEsb0NBQ0UscUVBQUMsb0VBQUQ7QUFBYSxtQkFBSyxFQUFDLFNBQW5CO0FBQTZCLHVCQUFTLEVBQUVILE9BQU8sQ0FBQ1csR0FBaEQ7QUFBQSx3QkFBc0RELEtBQUssR0FBRztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdELElBQUksQ0FBQ0osU0FBTCxnQkFBaUIscUVBQUMsMEVBQUQ7QUFBbUIsdUJBQVMsRUFBRUwsT0FBTyxDQUFDSztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFqQixHQUF1RSxJQUYxRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFRRSxxRUFBQyx3RUFBRDtBQUFBLG1DQUNFLHFFQUFDLHFFQUFEO0FBQVksdUJBQVMsRUFBRUwsT0FBTyxDQUFDSSxJQUEvQjtBQUFxQyxtQkFBSyxFQUFDLGVBQTNDO0FBQUEsd0JBQTRESyxJQUFJLENBQUNMO0FBQWpFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGO0FBQUEsV0FBbUJLLElBQUksQ0FBQ04sS0FBTCxHQUFhTyxLQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURTO0FBQUEsT0FBVjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFvQkQ7O0dBcER1QlgscUI7VUFDTkUsUzs7O0tBRE1GLHFCO0FBc0R4QixJQUFNRSxTQUFTLEdBQUdXLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNOLFFBQUksRUFBRTtBQUNKTyxXQUFLLEVBQUUsTUFETDtBQUVGQyxnQkFBVSxFQUFFLFFBRlY7QUFHRkMsY0FBUSxFQUFFO0FBSFIsT0FJREgsS0FBSyxDQUFDSSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUpDLEVBSTRCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FKNUIsQ0FEbUM7QUFTdkNYLGFBQVMsRUFBRTtBQUNUYyxxQkFBZSxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBY0MsT0FBZCxDQUFzQkM7QUFEOUIsS0FUNEI7QUFZdkNYLE9BQUcsRUFBRTtBQUNIWSxhQUFPLEVBQUUsTUFETjtBQUVIQyxnQkFBVSxFQUFFLFFBRlQ7QUFHSEMsb0JBQWMsRUFBRSxRQUhiO0FBSUhDLFlBQU0sRUFBRSxNQUpMO0FBS0haLFdBQUssRUFBRTtBQUxKLEtBWmtDO0FBbUJ2Q1gsU0FBSyxFQUFFO0FBQ0xhLGNBQVEsRUFBRTtBQURQLE9BRUZILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGRSxFQUUyQjtBQUM1QkYsY0FBUSxFQUFFO0FBRGtCLEtBRjNCO0FBbkJrQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45M2ZkMjViNTUzZmI5MjBmMGQzYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuaW1wb3J0IFRpbWVsaW5lIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmUnXHJcbmltcG9ydCBUaW1lbGluZUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUl0ZW0nXHJcbmltcG9ydCBUaW1lbGluZVNlcGFyYXRvciBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lU2VwYXJhdG9yJ1xyXG5pbXBvcnQgVGltZWxpbmVEb3QgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZURvdCdcclxuaW1wb3J0IFRpbWVsaW5lQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lQ29udGVudCdcclxuaW1wb3J0IFRpbWVsaW5lQ29ubmVjdG9yIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVDb25uZWN0b3InXHJcbmltcG9ydCBUaW1lbGluZU9wcG9zaXRlQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lT3Bwb3NpdGVDb250ZW50J1xyXG5cclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZlcnRpY2FsTGluZWFyU3RlcHBlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBzdGVwcyA9IFtcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdFbGVnw60nLFxyXG4gICAgICB0ZXh0OiAnU2VsZWNjaW9uw6EgbG9zIHByb2R1Y3RvcyBvIHByb21vY2lvbmVzJyxcclxuICAgICAgY29ubmVjdG9yOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdBZ3JlZ8OhJyxcclxuICAgICAgdGV4dDogJ1NlbGVjY2lvbsOhIGxhcyBjYW50aWRhZGVzIGRlIGxvcyBwcm9kdWN0b3MgbyBwcm9tb2Npb25lcycsXHJcbiAgICAgIGljb246ICdGYXN0Rm9vZCcsXHJcbiAgICAgIGNvbm5lY3RvcjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnU2VsZWNjaW9uw6EnLFxyXG4gICAgICB0ZXh0OiAnRWxlZ8OtIGVsIG1lZGlvIGRlIHBhZ28nLFxyXG4gICAgICBjb25uZWN0b3I6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1BlZMOtJyxcclxuICAgICAgdGV4dDogJ0hhY8OpIGVsIHBlZGlkbyBhIHRyYXbDqXMgZGUgd2hhdHNhcHAgY29uIHVuIHNvbG8gY2xpY2snLFxyXG4gICAgICBjb25uZWN0b3I6IHRydWUsXHJcbiAgICB9LFxyXG4gICAgXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnUmVjaWLDrScsXHJcbiAgICAgIHRleHQ6ICfCoVRlIGxvIGxsZXZhbW9zIGhhc3RhIHR1IGNhc2EhJyxcclxuICAgICAgY29ubmVjdG9yOiBmYWxzZSxcclxuICAgIH0sXHJcbiAgXVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxUaW1lbGluZSBhbGlnbj1cImFsdGVybmF0ZVwiPlxyXG4gICAgICAgIHtzdGVwcy5tYXAoKHN0ZXAsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICA8VGltZWxpbmVJdGVtIGtleT17c3RlcC50aXRsZSArIGluZGV4fT5cclxuICAgICAgICAgICAgPFRpbWVsaW5lT3Bwb3NpdGVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gY29tcG9uZW50PVwiaDRcIj57c3RlcC50aXRsZX08L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgICA8VGltZWxpbmVEb3QgY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmRvdH0+e2luZGV4ICsgMX08L1RpbWVsaW5lRG90PlxyXG4gICAgICAgICAgICAgIHtzdGVwLmNvbm5lY3RvciA/IDxUaW1lbGluZUNvbm5lY3RvciBjbGFzc05hbWU9e2NsYXNzZXMuY29ubmVjdG9yfSAvPiA6IG51bGx9XHJcbiAgICAgICAgICAgIDwvVGltZWxpbmVTZXBhcmF0b3I+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZUNvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRleHR9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntzdGVwLnRleHR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L1RpbWVsaW5lQ29udGVudD5cclxuICAgICAgICAgIDwvVGltZWxpbmVJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1RpbWVsaW5lPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmluZ0xlZnQ6ICctMTAwcHgnLFxyXG4gICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb25uZWN0b3I6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgfSxcclxuICBkb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICB3aWR0aDogJzMwcHgnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9