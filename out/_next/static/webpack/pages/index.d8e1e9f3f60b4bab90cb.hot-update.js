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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiXSwibmFtZXMiOlsiVmVydGljYWxMaW5lYXJTdGVwcGVyIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInN0ZXBzIiwidGl0bGUiLCJ0ZXh0IiwiY29ubmVjdG9yIiwiaWNvbiIsInJvb3QiLCJtYXAiLCJzdGVwIiwiaW5kZXgiLCJkb3QiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ3aWR0aCIsIm1hcmluZ0xlZnQiLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwidXAiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwicHJpbWFyeSIsIm1haW4iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRWUsU0FBU0EscUJBQVQsR0FBaUM7QUFBQTs7QUFBQTs7QUFDOUMsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsS0FBSyxHQUFHLENBQ1o7QUFDRUMsU0FBSyxFQUFFLE9BRFQ7QUFFRUMsUUFBSSxFQUFFLHdDQUZSO0FBR0VDLGFBQVMsRUFBRTtBQUhiLEdBRFksRUFNWjtBQUNFRixTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsMERBRlI7QUFHRUUsUUFBSSxFQUFFLFVBSFI7QUFJRUQsYUFBUyxFQUFFO0FBSmIsR0FOWSxFQVlaO0FBQ0VGLFNBQUssRUFBRSxZQURUO0FBRUVDLFFBQUksRUFBRSx3QkFGUjtBQUdFQyxhQUFTLEVBQUU7QUFIYixHQVpZLEVBaUJaO0FBQ0VGLFNBQUssRUFBRSxNQURUO0FBRUVDLFFBQUksRUFBRSx1REFGUjtBQUdFQyxhQUFTLEVBQUU7QUFIYixHQWpCWSxFQXVCWjtBQUNFRixTQUFLLEVBQUUsUUFEVDtBQUVFQyxRQUFJLEVBQUUsZ0NBRlI7QUFHRUMsYUFBUyxFQUFFO0FBSGIsR0F2QlksQ0FBZDtBQThCQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUwsT0FBTyxDQUFDTyxJQUF4QjtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQVUsV0FBSyxFQUFDLFdBQWhCO0FBQUEsZ0JBQ0dMLEtBQUssQ0FBQ00sR0FBTixDQUFVLFVBQUNDLElBQUQsRUFBT0MsS0FBUDtBQUFBLDRCQUNULHFFQUFDLHFFQUFEO0FBQUEsa0NBQ0UscUVBQUMsaUZBQUQ7QUFBQSxtQ0FDRSxxRUFBQyxxRUFBRDtBQUFZLHVCQUFTLEVBQUVWLE9BQU8sQ0FBQ0csS0FBL0I7QUFBc0MsdUJBQVMsRUFBQyxJQUFoRDtBQUFBLHdCQUFzRE0sSUFBSSxDQUFDTjtBQUEzRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUlFLHFFQUFDLDBFQUFEO0FBQUEsb0NBQ0UscUVBQUMsb0VBQUQ7QUFBYSxtQkFBSyxFQUFDLFNBQW5CO0FBQTZCLHVCQUFTLEVBQUVILE9BQU8sQ0FBQ1csR0FBaEQ7QUFBQSx3QkFBc0RELEtBQUssR0FBRztBQUE5RDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLEVBRUdELElBQUksQ0FBQ0osU0FBTCxnQkFBaUIscUVBQUMsMEVBQUQ7QUFBbUIsdUJBQVMsRUFBRUwsT0FBTyxDQUFDSztBQUF0QztBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUFqQixHQUF1RSxJQUYxRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFRRSxxRUFBQyx3RUFBRDtBQUFBLG1DQUNFLHFFQUFDLHFFQUFEO0FBQVksbUJBQUssRUFBQyxlQUFsQjtBQUFBLHdCQUFtQ0ksSUFBSSxDQUFDTDtBQUF4QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRjtBQUFBLFdBQW1CSyxJQUFJLENBQUNOLEtBQUwsR0FBYU8sS0FBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEUztBQUFBLE9BQVY7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBb0JEOztHQXBEdUJYLHFCO1VBQ05FLFM7OztLQURNRixxQjtBQXNEeEIsSUFBTUUsU0FBUyxHQUFHVywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDTixRQUFJLEVBQUU7QUFDSk8sV0FBSyxFQUFFLE1BREw7QUFFRkMsZ0JBQVUsRUFBRSxRQUZWO0FBR0ZDLGNBQVEsRUFBRTtBQUhSLE9BSURILEtBQUssQ0FBQ0ksV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FKQyxFQUk0QjtBQUM1QkYsY0FBUSxFQUFFO0FBRGtCLEtBSjVCLENBRG1DO0FBU3ZDWCxhQUFTLEVBQUU7QUFDVGMscUJBQWUsRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWNDLE9BQWQsQ0FBc0JDO0FBRDlCLEtBVDRCO0FBWXZDWCxPQUFHLEVBQUU7QUFDSFksYUFBTyxFQUFFLE1BRE47QUFFSEMsZ0JBQVUsRUFBRSxRQUZUO0FBR0hDLG9CQUFjLEVBQUUsUUFIYjtBQUlIQyxZQUFNLEVBQUUsTUFKTDtBQUtIWixXQUFLLEVBQUU7QUFMSixLQVprQztBQW1CdkNYLFNBQUssRUFBRTtBQUNMYSxjQUFRLEVBQUU7QUFEUCxPQUVGSCxLQUFLLENBQUNJLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBRkUsRUFFMkI7QUFDNUJGLGNBQVEsRUFBRTtBQURrQixLQUYzQjtBQW5Ca0MsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZDhlMWU5ZjNmNjBiNGJhYjkwY2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmltcG9ydCBUaW1lbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lJ1xyXG5pbXBvcnQgVGltZWxpbmVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVJdGVtJ1xyXG5pbXBvcnQgVGltZWxpbmVTZXBhcmF0b3IgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZVNlcGFyYXRvcidcclxuaW1wb3J0IFRpbWVsaW5lRG90IGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVEb3QnXHJcbmltcG9ydCBUaW1lbGluZUNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZUNvbnRlbnQnXHJcbmltcG9ydCBUaW1lbGluZUNvbm5lY3RvciBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lQ29ubmVjdG9yJ1xyXG5pbXBvcnQgVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9UaW1lbGluZU9wcG9zaXRlQ29udGVudCdcclxuXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBWZXJ0aWNhbExpbmVhclN0ZXBwZXIoKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgc3RlcHMgPSBbXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnRWxlZ8OtJyxcclxuICAgICAgdGV4dDogJ1NlbGVjY2lvbsOhIGxvcyBwcm9kdWN0b3MgbyBwcm9tb2Npb25lcycsXHJcbiAgICAgIGNvbm5lY3RvcjogdHJ1ZSxcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgIHRpdGxlOiAnQWdyZWfDoScsXHJcbiAgICAgIHRleHQ6ICdTZWxlY2Npb27DoSBsYXMgY2FudGlkYWRlcyBkZSBsb3MgcHJvZHVjdG9zIG8gcHJvbW9jaW9uZXMnLFxyXG4gICAgICBpY29uOiAnRmFzdEZvb2QnLFxyXG4gICAgICBjb25uZWN0b3I6IHRydWUsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1NlbGVjY2lvbsOhJyxcclxuICAgICAgdGV4dDogJ0VsZWfDrSBlbCBtZWRpbyBkZSBwYWdvJyxcclxuICAgICAgY29ubmVjdG9yOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgdGl0bGU6ICdQZWTDrScsXHJcbiAgICAgIHRleHQ6ICdIYWPDqSBlbCBwZWRpZG8gYSB0cmF2w6lzIGRlIHdoYXRzYXBwIGNvbiB1biBzb2xvIGNsaWNrJyxcclxuICAgICAgY29ubmVjdG9yOiB0cnVlLFxyXG4gICAgfSxcclxuICAgIFxyXG4gICAge1xyXG4gICAgICB0aXRsZTogJ1JlY2liw60nLFxyXG4gICAgICB0ZXh0OiAnwqFUZSBsbyBsbGV2YW1vcyBoYXN0YSB0dSBjYXNhIScsXHJcbiAgICAgIGNvbm5lY3RvcjogZmFsc2UsXHJcbiAgICB9LFxyXG4gIF1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8VGltZWxpbmUgYWxpZ249XCJhbHRlcm5hdGVcIj5cclxuICAgICAgICB7c3RlcHMubWFwKChzdGVwLCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgPFRpbWVsaW5lSXRlbSBrZXk9e3N0ZXAudGl0bGUgKyBpbmRleH0+XHJcbiAgICAgICAgICAgIDxUaW1lbGluZU9wcG9zaXRlQ29udGVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IGNvbXBvbmVudD1cImg0XCI+e3N0ZXAudGl0bGV9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L1RpbWVsaW5lT3Bwb3NpdGVDb250ZW50PlxyXG4gICAgICAgICAgICA8VGltZWxpbmVTZXBhcmF0b3I+XHJcbiAgICAgICAgICAgICAgPFRpbWVsaW5lRG90IGNvbG9yPVwicHJpbWFyeVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5kb3R9PntpbmRleCArIDF9PC9UaW1lbGluZURvdD5cclxuICAgICAgICAgICAgICB7c3RlcC5jb25uZWN0b3IgPyA8VGltZWxpbmVDb25uZWN0b3IgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbm5lY3Rvcn0gLz4gOiBudWxsfVxyXG4gICAgICAgICAgICA8L1RpbWVsaW5lU2VwYXJhdG9yPlxyXG4gICAgICAgICAgICA8VGltZWxpbmVDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPntzdGVwLnRleHR9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L1RpbWVsaW5lQ29udGVudD5cclxuICAgICAgICAgIDwvVGltZWxpbmVJdGVtPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L1RpbWVsaW5lPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmluZ0xlZnQ6ICctMTAwcHgnLFxyXG4gICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb25uZWN0b3I6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgfSxcclxuICBkb3Q6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgaGVpZ2h0OiAnMzBweCcsXHJcbiAgICB3aWR0aDogJzMwcHgnLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9