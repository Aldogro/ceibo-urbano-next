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
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\Stepper.js",
    _s = $RefreshSig$();









function getSteps() {
  return ['Seleccioná los productos o promociones', 'Seleccioná las cantidades', 'Hacé el pedido a través de whatsapp con un solo click', 'Pagá cuando recibís tu pedido'];
}

function VerticalLinearStepper() {
  _s();

  var classes = useStyles();
  var steps = getSteps();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_Timeline__WEBPACK_IMPORTED_MODULE_3__["default"], {
      align: "alternate",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_lab_TimelineItem__WEBPACK_IMPORTED_MODULE_4__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TimelineSeparator, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TimelineDot, {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(FastfoodIcon, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TimelineConnector, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(TimelineContent, {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Typography, {
            variant: "h6",
            component: "h1",
            children: "Eat"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 35,
            columnNumber: 13
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Typography, {
            children: "Because you need strength"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
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

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItem.js":
/*!************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItem.js ***!
  \************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/utils */ "./node_modules/@material-ui/core/esm/utils/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _Timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Timeline/TimelineContext */ "./node_modules/@material-ui/lab/esm/Timeline/TimelineContext.js");
/* harmony import */ var _TimelineItemContext__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./TimelineItemContext */ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItemContext.js");









var styles = function styles() {
  return {
    /* Styles applied to the root element. */
    root: {
      listStyle: 'none',
      display: 'flex',
      position: 'relative',
      minHeight: 70
    },

    /* Styles applied to the root element if `align="left"`. */
    alignLeft: {},

    /* Styles applied to the root element if `align="right"`. */
    alignRight: {
      flexDirection: 'row-reverse'
    },

    /* Styles applied to the root element if `align="alternate"`. */
    alignAlternate: {
      '&:nth-child(even)': {
        flexDirection: 'row-reverse',
        '& $content': {
          textAlign: 'right'
        },
        '& $oppositeContent': {
          textAlign: 'left'
        }
      }
    },

    /* Styles applied to the root element if no there isn't TimelineOppositeContent provided. */
    missingOppositeContent: {
      '&:before': {
        content: '""',
        flex: 1,
        padding: '6px 16px'
      }
    },

    /* Styles applied to the timeline content node. */
    content: {},

    /* Styles applied to the timeline opposite content node. */
    oppositeContent: {}
  };
};
var TimelineItem = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function TimelineItem(props, ref) {
  var classes = props.classes,
      className = props.className,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["classes", "className"]);

  var _React$useContext = react__WEBPACK_IMPORTED_MODULE_2__["useContext"](_Timeline_TimelineContext__WEBPACK_IMPORTED_MODULE_7__["default"]),
      _React$useContext$ali = _React$useContext.align,
      align = _React$useContext$ali === void 0 ? 'left' : _React$useContext$ali;

  var hasOppositeContent = false;
  react__WEBPACK_IMPORTED_MODULE_2__["Children"].forEach(props.children, function (child) {
    if (Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["isMuiElement"])(child, ['TimelineOppositeContent'])) {
      hasOppositeContent = true;
    }
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_TimelineItemContext__WEBPACK_IMPORTED_MODULE_8__["default"].Provider, {
    value: {
      classes: {
        content: classes.content,
        oppositeContent: classes.oppositeContent
      }
    }
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("li", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes["align".concat(Object(_material_ui_core_utils__WEBPACK_IMPORTED_MODULE_5__["capitalize"])(align))], className, !hasOppositeContent && classes.missingOppositeContent),
    ref: ref
  }, other)));
});
 true ? TimelineItem.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content of the component.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles, {
  name: 'MuiTimelineItem'
})(TimelineItem));

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItemContext.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItemContext.js ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * @ignore - internal component.
 */

var TimelineItemContext = react__WEBPACK_IMPORTED_MODULE_0__["createContext"]({});

if (true) {
  TimelineItemContext.displayName = 'TimelineItemContext';
}

/* harmony default export */ __webpack_exports__["default"] = (TimelineItemContext);

/***/ }),

/***/ "./node_modules/@material-ui/lab/esm/TimelineItem/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/lab/esm/TimelineItem/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TimelineItem__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TimelineItem */ "./node_modules/@material-ui/lab/esm/TimelineItem/TimelineItem.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _TimelineItem__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9UaW1lbGluZUl0ZW0vVGltZWxpbmVJdGVtLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2xhYi9lc20vVGltZWxpbmVJdGVtL1RpbWVsaW5lSXRlbUNvbnRleHQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvbGFiL2VzbS9UaW1lbGluZUl0ZW0vaW5kZXguanMiXSwibmFtZXMiOlsiZ2V0U3RlcHMiLCJWZXJ0aWNhbExpbmVhclN0ZXBwZXIiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwic3RlcHMiLCJyb290IiwibWFrZVN0eWxlcyIsInRoZW1lIiwid2lkdGgiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJzdGVwVGV4dCIsImZvbnRTaXplIiwibWFyZ2luTGVmdCIsInNwYWNpbmciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFFBQVQsR0FBb0I7QUFDbEIsU0FBTyxDQUNMLHdDQURLLEVBRUwsMkJBRkssRUFHTCx1REFISyxFQUlMLCtCQUpLLENBQVA7QUFNRDs7QUFFYyxTQUFTQyxxQkFBVCxHQUFpQztBQUFBOztBQUM5QyxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFDQSxNQUFNQyxLQUFLLEdBQUdKLFFBQVEsRUFBdEI7QUFFQSxzQkFDRTtBQUFLLGFBQVMsRUFBRUUsT0FBTyxDQUFDRyxJQUF4QjtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQVUsV0FBSyxFQUFDLFdBQWhCO0FBQUEsNkJBQ0UscUVBQUMscUVBQUQ7QUFBQSxnQ0FDRSxxRUFBQyxpQkFBRDtBQUFB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Q1hsQztBQUFBO0FBQUE7QUFBQSIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jOGQzMzQ4NTBlNTQwYTkzMzg0Yi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuXHJcbmltcG9ydCBUaW1lbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1RpbWVsaW5lJ1xyXG5pbXBvcnQgVGltZWxpbmVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvVGltZWxpbmVJdGVtJ1xyXG5cclxuaW1wb3J0IFN0ZXBwZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcHBlcic7XHJcbmltcG9ydCBTdGVwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXAnO1xyXG5pbXBvcnQgU3RlcExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBMYWJlbCc7XHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwcygpIHtcclxuICByZXR1cm4gW1xyXG4gICAgJ1NlbGVjY2lvbsOhIGxvcyBwcm9kdWN0b3MgbyBwcm9tb2Npb25lcycsXHJcbiAgICAnU2VsZWNjaW9uw6EgbGFzIGNhbnRpZGFkZXMnLFxyXG4gICAgJ0hhY8OpIGVsIHBlZGlkbyBhIHRyYXbDqXMgZGUgd2hhdHNhcHAgY29uIHVuIHNvbG8gY2xpY2snLFxyXG4gICAgJ1BhZ8OhIGN1YW5kbyByZWNpYsOtcyB0dSBwZWRpZG8nXHJcbiAgXTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVmVydGljYWxMaW5lYXJTdGVwcGVyKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBzdGVwcyA9IGdldFN0ZXBzKCk7XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPFRpbWVsaW5lIGFsaWduPVwiYWx0ZXJuYXRlXCI+XHJcbiAgICAgICAgPFRpbWVsaW5lSXRlbT5cclxuICAgICAgICAgIDxUaW1lbGluZVNlcGFyYXRvcj5cclxuICAgICAgICAgICAgPFRpbWVsaW5lRG90PlxyXG4gICAgICAgICAgICAgIDxGYXN0Zm9vZEljb24gLz5cclxuICAgICAgICAgICAgPC9UaW1lbGluZURvdD5cclxuICAgICAgICAgICAgPFRpbWVsaW5lQ29ubmVjdG9yIC8+XHJcbiAgICAgICAgICA8L1RpbWVsaW5lU2VwYXJhdG9yPlxyXG4gICAgICAgICAgPFRpbWVsaW5lQ29udGVudD5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg2XCIgY29tcG9uZW50PVwiaDFcIj5cclxuICAgICAgICAgICAgICBFYXRcclxuICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeT5CZWNhdXNlIHlvdSBuZWVkIHN0cmVuZ3RoPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPC9UaW1lbGluZUNvbnRlbnQ+XHJcbiAgICAgICAgPC9UaW1lbGluZUl0ZW0+XHJcbiAgICAgIDwvVGltZWxpbmU+XHJcbiAgICAgIHsvKiA8U3RlcHBlciBhY3RpdmVTdGVwPXtzdGVwcy5sZW5ndGh9IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cclxuICAgICAgICB7c3RlcHMubWFwKChsYWJlbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTdGVwIGtleT17bGFiZWx9PlxyXG4gICAgICAgICAgICA8U3RlcExhYmVsPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnN0ZXBUZXh0fT5cclxuICAgICAgICAgICAgICAgIHtsYWJlbH1cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9TdGVwTGFiZWw+XHJcbiAgICAgICAgICA8L1N0ZXA+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3RlcHBlcj4gKi99XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgc3RlcFRleHQ6IHtcclxuICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH1cclxufSkpOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB7IGNhcGl0YWxpemUsIGlzTXVpRWxlbWVudCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3V0aWxzJztcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnO1xuaW1wb3J0IFRpbWVsaW5lQ29udGV4dCBmcm9tICcuLi9UaW1lbGluZS9UaW1lbGluZUNvbnRleHQnO1xuaW1wb3J0IFRpbWVsaW5lSXRlbUNvbnRleHQgZnJvbSAnLi9UaW1lbGluZUl0ZW1Db250ZXh0JztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKCkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgbGlzdFN0eWxlOiAnbm9uZScsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIG1pbkhlaWdodDogNzBcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJsZWZ0XCJgLiAqL1xuICAgIGFsaWduTGVmdDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhbGlnbj1cInJpZ2h0XCJgLiAqL1xuICAgIGFsaWduUmlnaHQ6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdyb3ctcmV2ZXJzZSdcbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWxpZ249XCJhbHRlcm5hdGVcImAuICovXG4gICAgYWxpZ25BbHRlcm5hdGU6IHtcbiAgICAgICcmOm50aC1jaGlsZChldmVuKSc6IHtcbiAgICAgICAgZmxleERpcmVjdGlvbjogJ3Jvdy1yZXZlcnNlJyxcbiAgICAgICAgJyYgJGNvbnRlbnQnOiB7XG4gICAgICAgICAgdGV4dEFsaWduOiAncmlnaHQnXG4gICAgICAgIH0sXG4gICAgICAgICcmICRvcHBvc2l0ZUNvbnRlbnQnOiB7XG4gICAgICAgICAgdGV4dEFsaWduOiAnbGVmdCdcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIG5vIHRoZXJlIGlzbid0IFRpbWVsaW5lT3Bwb3NpdGVDb250ZW50IHByb3ZpZGVkLiAqL1xuICAgIG1pc3NpbmdPcHBvc2l0ZUNvbnRlbnQ6IHtcbiAgICAgICcmOmJlZm9yZSc6IHtcbiAgICAgICAgY29udGVudDogJ1wiXCInLFxuICAgICAgICBmbGV4OiAxLFxuICAgICAgICBwYWRkaW5nOiAnNnB4IDE2cHgnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSB0aW1lbGluZSBjb250ZW50IG5vZGUuICovXG4gICAgY29udGVudDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgdGltZWxpbmUgb3Bwb3NpdGUgY29udGVudCBub2RlLiAqL1xuICAgIG9wcG9zaXRlQ29udGVudDoge31cbiAgfTtcbn07XG52YXIgVGltZWxpbmVJdGVtID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gVGltZWxpbmVJdGVtKHByb3BzLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIl0pO1xuXG4gIHZhciBfUmVhY3QkdXNlQ29udGV4dCA9IFJlYWN0LnVzZUNvbnRleHQoVGltZWxpbmVDb250ZXh0KSxcbiAgICAgIF9SZWFjdCR1c2VDb250ZXh0JGFsaSA9IF9SZWFjdCR1c2VDb250ZXh0LmFsaWduLFxuICAgICAgYWxpZ24gPSBfUmVhY3QkdXNlQ29udGV4dCRhbGkgPT09IHZvaWQgMCA/ICdsZWZ0JyA6IF9SZWFjdCR1c2VDb250ZXh0JGFsaTtcblxuICB2YXIgaGFzT3Bwb3NpdGVDb250ZW50ID0gZmFsc2U7XG4gIFJlYWN0LkNoaWxkcmVuLmZvckVhY2gocHJvcHMuY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmIChpc011aUVsZW1lbnQoY2hpbGQsIFsnVGltZWxpbmVPcHBvc2l0ZUNvbnRlbnQnXSkpIHtcbiAgICAgIGhhc09wcG9zaXRlQ29udGVudCA9IHRydWU7XG4gICAgfVxuICB9KTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFRpbWVsaW5lSXRlbUNvbnRleHQuUHJvdmlkZXIsIHtcbiAgICB2YWx1ZToge1xuICAgICAgY2xhc3Nlczoge1xuICAgICAgICBjb250ZW50OiBjbGFzc2VzLmNvbnRlbnQsXG4gICAgICAgIG9wcG9zaXRlQ29udGVudDogY2xhc3Nlcy5vcHBvc2l0ZUNvbnRlbnRcbiAgICAgIH1cbiAgICB9XG4gIH0sIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwibGlcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbXCJhbGlnblwiLmNvbmNhdChjYXBpdGFsaXplKGFsaWduKSldLCBjbGFzc05hbWUsICFoYXNPcHBvc2l0ZUNvbnRlbnQgJiYgY2xhc3Nlcy5taXNzaW5nT3Bwb3NpdGVDb250ZW50KSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlcikpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gVGltZWxpbmVJdGVtLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFRoZSBjb250ZW50IG9mIHRoZSBjb21wb25lbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVRpbWVsaW5lSXRlbSdcbn0pKFRpbWVsaW5lSXRlbSk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuLyoqXG4gKiBAaWdub3JlIC0gaW50ZXJuYWwgY29tcG9uZW50LlxuICovXG5cbnZhciBUaW1lbGluZUl0ZW1Db250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIFRpbWVsaW5lSXRlbUNvbnRleHQuZGlzcGxheU5hbWUgPSAnVGltZWxpbmVJdGVtQ29udGV4dCc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFRpbWVsaW5lSXRlbUNvbnRleHQ7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vVGltZWxpbmVJdGVtJzsiXSwic291cmNlUm9vdCI6IiJ9