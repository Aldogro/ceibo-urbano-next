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
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _services_Config_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../services/Config.context */ "./services/Config.context.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\ProductHeroLayout.js",
    _s = $RefreshSig$();








function ProductHeroLayout(props) {
  _s();

  var backgroundClassName = props.backgroundClassName,
      children = props.children,
      classes = props.classes;

  var _useConfig = Object(_services_Config_context__WEBPACK_IMPORTED_MODULE_8__["useConfig"])(),
      _useConfig2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useConfig, 2),
      config = _useConfig2[0],
      configDispatch = _useConfig2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.container,
      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.backdrop
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 17,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.background, backgroundClassName),
        style: {
          background: "url(".concat(config.mainImage, ")")
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}

_s(ProductHeroLayout, "jYPyjjais3JLaZz3DWE0hjZ/zRI=", false, function () {
  return [_services_Config_context__WEBPACK_IMPORTED_MODULE_8__["useConfig"]];
});

_c = ProductHeroLayout;
ProductHeroLayout.propTypes = {
  backgroundClassName: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string.isRequired,
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node.isRequired,
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
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

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["withStyles"])(styles)(ProductHeroLayout));

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SGVyb0xheW91dC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SGVyb0xheW91dCIsInByb3BzIiwiYmFja2dyb3VuZENsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xhc3NlcyIsInVzZUNvbmZpZyIsImNvbmZpZyIsImNvbmZpZ0Rpc3BhdGNoIiwicm9vdCIsImNvbnRhaW5lciIsImJhY2tkcm9wIiwiY2xzeCIsImJhY2tncm91bmQiLCJtYWluSW1hZ2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJzdHJpbmciLCJpc1JlcXVpcmVkIiwibm9kZSIsIm9iamVjdCIsInN0eWxlcyIsInRoZW1lIiwiY29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJwb3NpdGlvbiIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiYnJlYWtwb2ludHMiLCJ1cCIsImhlaWdodCIsIm1pbkhlaWdodCIsIm1heEhlaWdodCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJmbGV4RGlyZWN0aW9uIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiYmFja2dyb3VuZENvbG9yIiwiYmxhY2siLCJvcGFjaXR5IiwiekluZGV4IiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJhcnJvd0Rvd24iLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsaUJBQVQsQ0FBMkJDLEtBQTNCLEVBQWtDO0FBQUE7O0FBQUEsTUFDeEJDLG1CQUR3QixHQUNtQkQsS0FEbkIsQ0FDeEJDLG1CQUR3QjtBQUFBLE1BQ0hDLFFBREcsR0FDbUJGLEtBRG5CLENBQ0hFLFFBREc7QUFBQSxN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RkM7QUF6Q2MsR0FBWjtBQUFBLENBQWY7O0FBK0NlZ0IsMElBQVUsQ0FBQy9CLE1BQUQsQ0FBVixDQUFtQnBCLGlCQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmU3NDViMjEzM2YwMzYyMTgwZTdlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NvbmZpZy5jb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEhlcm9MYXlvdXQocHJvcHMpIHtcclxuICBjb25zdCB7IGJhY2tncm91bmRDbGFzc05hbWUsIGNoaWxkcmVuLCBjbGFzc2VzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IFtjb25maWcsIGNvbmZpZ0Rpc3BhdGNoXSA9IHVzZUNvbmZpZygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICBcclxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICB7Y2hpbGRyZW59XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2Ryb3B9IC8+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5iYWNrZ3JvdW5kLCBiYWNrZ3JvdW5kQ2xhc3NOYW1lKX0gc3R5bGU9e3sgYmFja2dyb3VuZDogYHVybCgke2NvbmZpZy5tYWluSW1hZ2V9KWB9fS8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuUHJvZHVjdEhlcm9MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGJhY2tncm91bmRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBoZWlnaHQ6ICc4MHZoJyxcclxuICAgICAgbWluSGVpZ2h0OiA1MDAsXHJcbiAgICAgIG1heEhlaWdodDogMTMwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgYmFja2Ryb3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgfSxcclxuICBiYWNrZ3JvdW5kOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogJ2ZpeGVkJyxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICB6SW5kZXg6IC0yLFxyXG4gIH0sXHJcbiAgYXJyb3dEb3duOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3RIZXJvTGF5b3V0KVxyXG4iXSwic291cmNlUm9vdCI6IiJ9