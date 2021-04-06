webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/views/ProductHeroLayout.js":
/*!********************************************!*\
  !*** ./modules/views/ProductHeroLayout.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\ProductHeroLayout.js";






function ProductHeroLayout(props) {
  var backgroundClassName = props.backgroundClassName,
      children = props.children,
      classes = props.classes;
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.container,
      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.backdrop
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.background, backgroundClassName),
        style: {
          background: 'url(/greenhouse.jpg)'
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, this);
}

_c = ProductHeroLayout;
ProductHeroLayout.propTypes = {
  backgroundClassName: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

var styles = function styles(theme) {
  return {
    root: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: theme.palette.common.white,
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }, theme.breakpoints.up('sm'), {
      height: '80vh',
      minHeight: 500,
      maxHeight: 1300
    }),
    container: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(10),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    },
    backdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundColor: theme.palette.common.black,
      opacity: 0.5,
      zIndex: -1
    },
    background: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      zIndex: -2
    },
    arrowDown: {
      position: 'absolute',
      bottom: theme.spacing(4)
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(ProductHeroLayout));

var _c;

$RefreshReg$(_c, "ProductHeroLayout");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SGVyb0xheW91dC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SGVyb0xheW91dCIsInByb3BzIiwiYmFja2dyb3VuZENsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xhc3NlcyIsInJvb3QiLCJjb250YWluZXIiLCJiYWNrZHJvcCIsImNsc3giLCJiYWNrZ3JvdW5kIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJvYmplY3QiLCJzdHlsZXMiLCJ0aGVtZSIsImNvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImJyZWFrcG9pbnRzIiwidXAiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZmxleERpcmVjdGlvbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImJsYWNrIiwib3BhY2l0eSIsInpJbmRleCIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiYXJyb3dEb3duIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFBQSxNQUN4QkMsbUJBRHdCLEdBQ21CRCxLQURuQixDQUN4QkMsbUJBRHdCO0FBQUEsTUFDSEMsUUFERyxHQUNtQkYsS0FEbkIsQ0FDSEUsUUFERztBQUFBLE1BQ09DLE9BRFAsR0FDbUJILEtBRG5CLENBQ09HLE9BRFA7QUFHaEMsc0JBQ0U7QUFBUyxhQUFTLEVBQUVBLE9BQU8sQ0FBQ0MsSUFBNUI7QUFBQSwyQkFDRSxxRUFBQyxtRUFBRDtBQUFXLGVBQVMsRUFBRUQsT0FBTyxDQUFDRSxTQUE5QjtBQUFBLGlCQUNHSCxRQURILGVBRUU7QUFBSyxpQkFBUyxFQUFFQyxPQUFPLENBQUNHO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUssaUJBQVMsRUFBRUMsb0RBQUksQ0FBQ0osT0FBTyxDQUFDSyxVQUFULEVBQXFCUCxtQkFBckIsQ0FBcEI7QUFBK0QsYUFBSyxFQUFFO0FBQUVPLG9CQUFVLEVBQUU7QUFBZDtBQUF0RTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0tBWlFULGlCO0FBY1RBLGlCQUFpQixDQUFDVSxTQUFsQixHQUE4QjtBQUM1QlIscUJBQW1CLEVBQUVTLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRFY7QUFFNUJWLFVBQVEsRUFBRVEsaURBQVMsQ0FBQ0csSUFBVixDQUFlRCxVQUZHO0FBRzVCVCxTQUFPLEVBQUVPLGlEQUFTLENBQUNJLE1BQVYsQ0FBaUJGO0FBSEUsQ0FBOUI7O0FBTUEsSUFBTUcsTUFBTSxHQUFHLFNBQVRBLE1BQVMsQ0FBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDekJaLFFBQUksRUFBRTtBQUNKYSxXQUFLLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUQxQjtBQUVGQyxjQUFRLEVBQUUsVUFGUjtBQUdGQyxhQUFPLEVBQUUsTUFIUDtBQUlGQyxnQkFBVSxFQUFFO0FBSlYsT0FLRFAsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUxDLEVBSzRCO0FBQzVCQyxZQUFNLEVBQUUsTUFEb0I7QUFFNUJDLGVBQVMsRUFBRSxHQUZpQjtBQUc1QkMsZUFBUyxFQUFFO0FBSGlCLEtBTDVCLENBRHFCO0FBWXpCdkIsYUFBUyxFQUFFO0FBQ1R3QixlQUFTLEVBQUViLEtBQUssQ0FBQ2MsT0FBTixDQUFjLENBQWQsQ0FERjtBQUVUQyxrQkFBWSxFQUFFZixLQUFLLENBQUNjLE9BQU4sQ0FBYyxFQUFkLENBRkw7QUFHVFIsYUFBTyxFQUFFLE1BSEE7QUFJVFUsbUJBQWEsRUFBRSxRQUpOO0FBS1RULGdCQUFVLEVBQUU7QUFMSCxLQVpjO0FBbUJ6QmpCLFlBQVEsRUFBRTtBQUNSZSxjQUFRLEVBQUUsVUFERjtBQUVSWSxVQUFJLEVBQUUsQ0FGRTtBQUdSQyxXQUFLLEVBQUUsQ0FIQztBQUlSQyxTQUFHLEVBQUUsQ0FKRztBQUtSQyxZQUFNLEVBQUUsQ0FMQTtBQU1SQyxxQkFBZSxFQUFFckIsS0FBSyxDQUFDRSxPQUFOLENBQWNDLE1BQWQsQ0FBcUJtQixLQU45QjtBQU9SQyxhQUFPLEVBQUUsR0FQRDtBQVFSQyxZQUFNLEVBQUUsQ0FBQztBQVJELEtBbkJlO0FBNkJ6QmhDLGNBQVUsRUFBRTtBQUNWYSxjQUFRLEVBQUUsVUFEQTtBQUVWWSxVQUFJLEVBQUUsQ0FGSTtBQUdWQyxXQUFLLEVBQUUsQ0FIRztBQUlWQyxTQUFHLEVBQUUsQ0FKSztBQUtWQyxZQUFNLEVBQUUsQ0FMRTtBQU1WSyx3QkFBa0IsRUFBRSxRQU5WO0FBT1ZDLDBCQUFvQixFQUFFLE9BUFo7QUFRVkMsc0JBQWdCLEVBQUUsV0FSUjtBQVNWQyxvQkFBYyxFQUFFLE9BVE47QUFVVkosWUFBTSxFQUFFLENBQUM7QUFWQyxLQTdCYTtBQXlDekJLLGFBQVMsRUFBRTtBQUNUeEIsY0FBUSxFQUFFLFVBREQ7QUFFVGUsWUFBTSxFQUFFcEIsS0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZDtBQUZDO0FBekNjLEdBQVo7QUFBQSxDQUFmOztBQStDZWdCLDBJQUFVLENBQUMvQixNQUFELENBQVYsQ0FBbUJoQixpQkFBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC43MGMzMzc5Zjg5MzMzMTlhYjhlMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEhlcm9MYXlvdXQocHJvcHMpIHtcclxuICBjb25zdCB7IGJhY2tncm91bmRDbGFzc05hbWUsIGNoaWxkcmVuLCBjbGFzc2VzIH0gPSBwcm9wc1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZHJvcH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmJhY2tncm91bmQsIGJhY2tncm91bmRDbGFzc05hbWUpfSBzdHlsZT17eyBiYWNrZ3JvdW5kOiAndXJsKC9ncmVlbmhvdXNlLmpwZyknfX0vPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvc2VjdGlvbj5cclxuICApXHJcbn1cclxuXHJcblByb2R1Y3RIZXJvTGF5b3V0LnByb3BUeXBlcyA9IHtcclxuICBiYWNrZ3JvdW5kQ2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLmlzUmVxdWlyZWQsXHJcbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLmlzUmVxdWlyZWQsXHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgaGVpZ2h0OiAnODB2aCcsXHJcbiAgICAgIG1pbkhlaWdodDogNTAwLFxyXG4gICAgICBtYXhIZWlnaHQ6IDEzMDAsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGJhY2tkcm9wOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICB6SW5kZXg6IC0xLFxyXG4gIH0sXHJcbiAgYmFja2dyb3VuZDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICdmaXhlZCcsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgekluZGV4OiAtMixcclxuICB9LFxyXG4gIGFycm93RG93bjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0SGVyb0xheW91dClcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==