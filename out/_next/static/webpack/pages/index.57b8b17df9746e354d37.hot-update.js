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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }








function ProductHeroLayout(props) {
  _s();

  var backgroundClassName = props.backgroundClassName,
      children = props.children,
      classes = props.classes;

  var _useConfig = Object(_services_Config_context__WEBPACK_IMPORTED_MODULE_8__["useConfig"])(),
      _useConfig2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useConfig, 2),
      config = _useConfig2[0],
      configDispatch = _useConfig2[1];

  var background = {
    background: "url(".concat(config.mainImage, ")"),
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    zIndex: -2
  };
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("section", {
    className: classes.root,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
      className: classes.container,
      children: [children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.backdrop
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.background, backgroundClassName),
        style: _objectSpread({}, background)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 26,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 22,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SGVyb0xheW91dC5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SGVyb0xheW91dCIsInByb3BzIiwiYmFja2dyb3VuZENsYXNzTmFtZSIsImNoaWxkcmVuIiwiY2xhc3NlcyIsInVzZUNvbmZpZyIsImNvbmZpZyIsImNvbmZpZ0Rpc3BhdGNoIiwiYmFja2dyb3VuZCIsIm1haW5JbWFnZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwiekluZGV4Iiwicm9vdCIsImNvbnRhaW5lciIsImJhY2tkcm9wIiwiY2xzeCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsInN0cmluZyIsImlzUmVxdWlyZWQiLCJub2RlIiwib2JqZWN0Iiwic3R5bGVzIiwidGhlbWUiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsInBvc2l0aW9uIiwiZGlzcGxheSIsImFsaWduSXRlbXMiLCJicmVha3BvaW50cyIsInVwIiwiaGVpZ2h0IiwibWluSGVpZ2h0IiwibWF4SGVpZ2h0IiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImZsZXhEaXJlY3Rpb24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJiYWNrZ3JvdW5kQ29sb3IiLCJibGFjayIsIm9wYWNpdHkiLCJhcnJvd0Rvd24iLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBOztBQUFBLE1BQ3hCQyxtQkFEd0IsR0FDbUJELEtBRG5CLENBQ3hCQyxtQkFEd0I7QUFBQSxNQUNIQyxRQURHLEdBQ21CRixLQURuQixDQUNIRSxRQURHO0FBQUEsTUFDT0MsT0FEUCxHQUNtQkgsS0FEbkIsQ0FDT0csT0FEUDs7QUFBQSxtQkFFQ0MsMEVBQVMsRUFGVjtBQUFBO0FBQUEsTUFFekJDLE1BRnlCO0FBQUEsTUFFakJDLGNBRmlCOztBQUloQyxNQUFNQyxVQUFVLEdBQUc7QUFDakJBLGNBQVUsZ0JBQVNGLE1BQU0sQ0FBQ0csU0FBaEIsTUFETztBQUVqQkMsc0JBQWtCLEVBQUUsUUFGSDtBQUdqQkMsd0JBQW9CLEVBQUUsT0FITDtBQUlqQkMsb0JBQWdCLEVBQUUsV0FKRDtBQUtqQkMsa0JBQWMsRUFBRSxPQUxDO0FBTWpCQyxVQUFNLEVBQUUsQ0FBQztBQU5RLEdBQW5CO0FBU0Esc0JBQ0U7QUFBUyxhQUFTLEVBQUVWLE9BQU8sQ0FBQ1csSUFBNUI7QUFBQSwyQkFDRSxxRUFBQyxtRUFBRDtBQUFXLGVBQVMsRUFBRVgsT0FBTyxDQUFDWSxTQUE5QjtBQUFBLGlCQUNHYixRQURILGVBRUU7QUFBSyxpQkFBUyxFQUFFQyxPQUFPLENBQUNhO0FBQXhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FGRixlQUdFO0FBQUssaUJBQVMsRUFBRUMsb0RBQUksQ0FBQ2QsT0FBTyxDQUFDSSxVQUFULEVBQXFCTixtQkFBckIsQ0FBcEI7QUFBK0QsYUFBSyxvQkFBTU0sVUFBTjtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBU0Q7O0dBdEJRUixpQjtVQUUwQkssa0U7OztLQUYxQkwsaUI7QUF3QlRBLGlCQUFpQixDQUFDbUIsU0FBbEIsR0FBOEI7QUFDNUJqQixxQkFBbUIsRUFBRWtCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDLFVBRFY7QUFFNUJuQixVQUFRLEVBQUVpQixpREFBUyxDQUFDRyxJQUFWLENBQWVELFVBRkc7QUFHNUJsQixTQUFPLEVBQUVnQixpREFBUyxDQUFDSSxNQUFWLENBQWlCRjtBQUhFLENBQTlCOztBQU1BLElBQU1HLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCWCxRQUFJLEVBQUU7QUFDSlksV0FBSyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FEMUI7QUFFRkMsY0FBUSxFQUFFLFVBRlI7QUFHRkMsYUFBTyxFQUFFLE1BSFA7QUFJRkMsZ0JBQVUsRUFBRTtBQUpWLE9BS0RQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FMQyxFQUs0QjtBQUM1QkMsWUFBTSxFQUFFLE1BRG9CO0FBRTVCQyxlQUFTLEVBQUUsR0FGaUI7QUFHNUJDLGVBQVMsRUFBRTtBQUhpQixLQUw1QixDQURxQjtBQVl6QnRCLGFBQVMsRUFBRTtBQUNUdUIsZUFBUyxFQUFFYixLQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkLENBREY7QUFFVEMsa0JBQVksRUFBRWYsS0FBSyxDQUFDYyxPQUFOLENBQWMsRUFBZCxDQUZMO0FBR1RSLGFBQU8sRUFBRSxNQUhBO0FBSVRVLG1CQUFhLEVBQUUsUUFKTjtBQUtUVCxnQkFBVSxFQUFFO0FBTEgsS0FaYztBQW1CekJoQixZQUFRLEVBQUU7QUFDUmMsY0FBUSxFQUFFLFVBREY7QUFFUlksVUFBSSxFQUFFLENBRkU7QUFHUkMsV0FBSyxFQUFFLENBSEM7QUFJUkMsU0FBRyxFQUFFLENBSkc7QUFLUkMsWUFBTSxFQUFFLENBTEE7QUFNUkMscUJBQWUsRUFBRXJCLEtBQUssQ0FBQ0UsT0FBTixDQUFjQyxNQUFkLENBQXFCbUIsS0FOOUI7QUFPUkMsYUFBTyxFQUFFLEdBUEQ7QUFRUm5DLFlBQU0sRUFBRSxDQUFDO0FBUkQsS0FuQmU7QUE2QnpCb0MsYUFBUyxFQUFFO0FBQ1RuQixjQUFRLEVBQUUsVUFERDtBQUVUZSxZQUFNLEVBQUVwQixLQUFLLENBQUNjLE9BQU4sQ0FBYyxDQUFkO0FBRkM7QUE3QmMsR0FBWjtBQUFBLENBQWY7O0FBbUNlVywwSUFBVSxDQUFDMUIsTUFBRCxDQUFWLENBQW1CekIsaUJBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTdiOGIxN2RmOTc0NmUzNTRkMzcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQ29uZmlnLmNvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0SGVyb0xheW91dChwcm9wcykge1xyXG4gIGNvbnN0IHsgYmFja2dyb3VuZENsYXNzTmFtZSwgY2hpbGRyZW4sIGNsYXNzZXMgfSA9IHByb3BzXHJcbiAgY29uc3QgW2NvbmZpZywgY29uZmlnRGlzcGF0Y2hdID0gdXNlQ29uZmlnKClcclxuXHJcbiAgY29uc3QgYmFja2dyb3VuZCA9IHtcclxuICAgIGJhY2tncm91bmQ6IGB1cmwoJHtjb25maWcubWFpbkltYWdlfSlgLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiAnZml4ZWQnLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIHpJbmRleDogLTIsXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZHJvcH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xzeChjbGFzc2VzLmJhY2tncm91bmQsIGJhY2tncm91bmRDbGFzc05hbWUpfSBzdHlsZT17ey4uLmJhY2tncm91bmR9fS8+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIClcclxufVxyXG5cclxuUHJvZHVjdEhlcm9MYXlvdXQucHJvcFR5cGVzID0ge1xyXG4gIGJhY2tncm91bmRDbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcuaXNSZXF1aXJlZCxcclxuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUuaXNSZXF1aXJlZCxcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBoZWlnaHQ6ICc4MHZoJyxcclxuICAgICAgbWluSGVpZ2h0OiA1MDAsXHJcbiAgICAgIG1heEhlaWdodDogMTMwMCxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgYmFja2Ryb3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIHpJbmRleDogLTEsXHJcbiAgfSxcclxuICBhcnJvd0Rvd246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUHJvZHVjdEhlcm9MYXlvdXQpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=