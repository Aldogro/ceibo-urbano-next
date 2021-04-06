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
          backgroundImage: 'url(/greenhouse.jpg)'
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
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SGVyb0xheW91dC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SGVyb0xheW91dCIsInByb3BzIiwiYmFja2dyb3VuZENsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xhc3NlcyIsInJvb3QiLCJjb250YWluZXIiLCJiYWNrZHJvcCIsImNsc3giLCJiYWNrZ3JvdW5kIiwiYmFja2dyb3VuZEltYWdlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwic3RyaW5nIiwiaXNSZXF1aXJlZCIsIm5vZGUiLCJvYmplY3QiLCJzdHlsZXMiLCJ0aGVtZSIsImNvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwicG9zaXRpb24iLCJkaXNwbGF5IiwiYWxpZ25JdGVtcyIsImJyZWFrcG9pbnRzIiwidXAiLCJoZWlnaHQiLCJtaW5IZWlnaHQiLCJtYXhIZWlnaHQiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZmxleERpcmVjdGlvbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImJhY2tncm91bmRDb2xvciIsImJsYWNrIiwib3BhY2l0eSIsInpJbmRleCIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFJlcGVhdCIsImFycm93RG93biIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQUEsTUFDeEJDLG1CQUR3QixHQUNtQkQsS0FEbkIsQ0FDeEJDLG1CQUR3QjtBQUFBLE1BQ0hDLFFBREcsR0FDbUJGLEtBRG5CLENBQ0hFLFFBREc7QUFBQSxNQUNPQyxPQURQLEdBQ21CSCxLQURuQixDQUNPRyxPQURQO0FBR2hDLHNCQUNFO0FBQVMsYUFBUyxFQUFFQSxPQUFPLENBQUNDLElBQTVCO0FBQUEsMkJBQ0UscUVBQUMsbUVBQUQ7QUFBVyxlQUFTLEVBQUVELE9BQU8sQ0FBQ0UsU0FBOUI7QUFBQSxpQkFDR0gsUUFESCxlQUVFO0FBQUssaUJBQVMsRUFBRUMsT0FBTyxDQUFDRztBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUVDLG9EQUFJLENBQUNKLE9BQU8sQ0FBQ0ssVUFBVCxFQUFxQlAsbUJBQXJCLENBQXBCO0FBQStELGFBQUssRUFBRTtBQUFFUSx5QkFBZSxFQUFFO0FBQW5CO0FBQXRFO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFTRDs7S0FaUVYsaUI7QUFjVEEsaUJBQWlCLENBQUNXLFNBQWxCLEdBQThCO0FBQzVCVCxxQkFBbUIsRUFBRVUsaURBQVMsQ0FBQ0MsTUFBVixDQUFpQkMsVUFEVjtBQUU1QlgsVUFBUSxFQUFFUyxpREFBUyxDQUFDRyxJQUFWLENBQWVELFVBRkc7QUFHNUJWLFNBQU8sRUFBRVEsaURBQVMsQ0FBQ0ksTUFBVixDQUFpQkY7QUFIRSxDQUE5Qjs7QUFNQSxJQUFNRyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QmIsUUFBSSxFQUFFO0FBQ0pjLFdBQUssRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWNDLE1BQWQsQ0FBcUJDLEtBRDFCO0FBRUZDLGNBQVEsRUFBRSxVQUZSO0FBR0ZDLGFBQU8sRUFBRSxNQUhQO0FBSUZDLGdCQUFVLEVBQUU7QUFKVixPQUtEUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBTEMsRUFLNEI7QUFDNUJDLFlBQU0sRUFBRSxNQURvQjtBQUU1QkMsZUFBUyxFQUFFLEdBRmlCO0FBRzVCQyxlQUFTLEVBQUU7QUFIaUIsS0FMNUIsQ0FEcUI7QUFZekJ4QixhQUFTLEVBQUU7QUFDVHlCLGVBQVMsRUFBRWIsS0FBSyxDQUFDYyxPQUFOLENBQWMsQ0FBZCxDQURGO0FBRVRDLGtCQUFZLEVBQUVmLEtBQUssQ0FBQ2MsT0FBTixDQUFjLEVBQWQsQ0FGTDtBQUdUUixhQUFPLEVBQUUsTUFIQTtBQUlUVSxtQkFBYSxFQUFFLFFBSk47QUFLVFQsZ0JBQVUsRUFBRTtBQUxILEtBWmM7QUFtQnpCbEIsWUFBUSxFQUFFO0FBQ1JnQixjQUFRLEVBQUUsVUFERjtBQUVSWSxVQUFJLEVBQUUsQ0FGRTtBQUdSQyxXQUFLLEVBQUUsQ0FIQztBQUlSQyxTQUFHLEVBQUUsQ0FKRztBQUtSQyxZQUFNLEVBQUUsQ0FMQTtBQU1SQyxxQkFBZSxFQUFFckIsS0FBSyxDQUFDRSxPQUFOLENBQWNDLE1BQWQsQ0FBcUJtQixLQU45QjtBQU9SQyxhQUFPLEVBQUUsR0FQRDtBQVFSQyxZQUFNLEVBQUUsQ0FBQztBQVJELEtBbkJlO0FBNkJ6QmpDLGNBQVUsRUFBRTtBQUNWYyxjQUFRLEVBQUUsVUFEQTtBQUVWWSxVQUFJLEVBQUUsQ0FGSTtBQUdWQyxXQUFLLEVBQUUsQ0FIRztBQUlWQyxTQUFHLEVBQUUsQ0FKSztBQUtWQyxZQUFNLEVBQUUsQ0FMRTtBQU1WSyxvQkFBYyxFQUFFLE9BTk47QUFPVkMsc0JBQWdCLEVBQUUsV0FQUjtBQVFWRixZQUFNLEVBQUUsQ0FBQztBQVJDLEtBN0JhO0FBdUN6QkcsYUFBUyxFQUFFO0FBQ1R0QixjQUFRLEVBQUUsVUFERDtBQUVUZSxZQUFNLEVBQUVwQixLQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkO0FBRkM7QUF2Q2MsR0FBWjtBQUFBLENBQWY7O0FBNkNlYywwSUFBVSxDQUFDN0IsTUFBRCxDQUFWLENBQW1CakIsaUJBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTExZjc4ZmM5Mzg4MGFmM2RhNGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RIZXJvTGF5b3V0KHByb3BzKSB7XHJcbiAgY29uc3QgeyBiYWNrZ3JvdW5kQ2xhc3NOYW1lLCBjaGlsZHJlbiwgY2xhc3NlcyB9ID0gcHJvcHNcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2Ryb3B9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5iYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kQ2xhc3NOYW1lKX0gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiAndXJsKC9ncmVlbmhvdXNlLmpwZyknIH19IC8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuUHJvZHVjdEhlcm9MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGJhY2tncm91bmRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBoZWlnaHQ6ICc4MHZoJyxcclxuICAgICAgbWluSGVpZ2h0OiA1MDAsXHJcbiAgICAgIG1heEhlaWdodDogMTMwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgYmFja2Ryb3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICB6SW5kZXg6IC0yLFxyXG4gIH0sXHJcbiAgYXJyb3dEb3duOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3RIZXJvTGF5b3V0KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9