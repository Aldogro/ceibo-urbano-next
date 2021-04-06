webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/views/ProductHero.js":
/*!**************************************!*\
  !*** ./modules/views/ProductHero.js ***!
  \**************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ "./modules/components/Button.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _ProductHeroLayout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ProductHeroLayout */ "./modules/views/ProductHeroLayout.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _services_Promo_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/Promo.context */ "./services/Promo.context.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\ProductHero.js",
    _s = $RefreshSig$();










function ProductHero(props) {
  _s();

  var classes = props.classes;

  var _usePromo = Object(_services_Promo_context__WEBPACK_IMPORTED_MODULE_10__["usePromo"])(),
      _usePromo2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_usePromo, 2),
      promoState = _usePromo2[0],
      promoDispatch = _usePromo2[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ProductHeroLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundClassName: classes.background,
    children: [console.log(classes.background), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "inherit",
      align: "center",
      variant: "h2",
      marked: "center",
      className: classes.h2,
      children: "\xA1Embellec\xE9 tu jard\xEDn!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_9__["default"], {
      "in": !!promoState.maxDiscount,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        color: "inherit",
        align: "center",
        variant: "h5",
        className: classes.h5,
        children: promoState.maxDiscount > 0 ? "Disfrut\xE1 de nuestras ofertas ahorrando hasta un ".concat(promoState.maxDiscount, "%") : ''
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "secondary",
      variant: "contained",
      size: "large",
      className: classes.button,
      component: "a",
      href: "#footer-ceibo",
      children: "Comunicate con nosotros"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, this);
}

_s(ProductHero, "/UvoK4dSsjLopjfFEKpPvry99UY=", false, function () {
  return [_services_Promo_context__WEBPACK_IMPORTED_MODULE_10__["usePromo"]];
});

_c = ProductHero;
ProductHero.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};
var backgroundImage = '/greenhouse.jpg';

var styles = function styles(theme) {
  return {
    background: {
      backgroundImage: "url(".concat(backgroundImage, ")"),
      backgroundColor: '#7fc7d9',
      // Average color of the background image.
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover'
    },
    button: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      minWidth: 200,
      textAlign: 'center',
      fontSize: '12px'
    }, theme.breakpoints.up('sm'), {
      fontSize: '20px'
    }),
    h2: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginTop: '30px',
      fontSize: '30px'
    }, theme.breakpoints.up('sm'), {
      fontSize: '50px'
    }),
    h5: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      marginBottom: theme.spacing(4),
      marginTop: theme.spacing(4),
      fontSize: '20px'
    }, theme.breakpoints.up('sm'), {
      marginTop: theme.spacing(10),
      fontSize: '35px'
    }),
    more: {
      marginTop: theme.spacing(5)
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(ProductHero));

var _c;

$RefreshReg$(_c, "ProductHero");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SGVyby5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SGVybyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb21vIiwicHJvbW9TdGF0ZSIsInByb21vRGlzcGF0Y2giLCJiYWNrZ3JvdW5kIiwiY29uc29sZSIsImxvZyIsImgyIiwibWF4RGlzY291bnQiLCJoNSIsImJ1dHRvbiIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJzdHlsZXMiLCJ0aGVtZSIsImJhY2tncm91bmRDb2xvciIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmRBdHRhY2htZW50IiwiYmFja2dyb3VuZFJlcGVhdCIsImJhY2tncm91bmRTaXplIiwibWluV2lkdGgiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImJyZWFrcG9pbnRzIiwidXAiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJzcGFjaW5nIiwibW9yZSIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxXQUFULENBQXFCQyxLQUFyQixFQUE0QjtBQUFBOztBQUFBLE1BQ2xCQyxPQURrQixHQUNORCxLQURNLENBQ2xCQyxPQURrQjs7QUFBQSxrQkFFVUMseUVBQVEsRUFGbEI7QUFBQTtBQUFBLE1BRW5CQyxVQUZtQjtBQUFBLE1BRVBDLGFBRk87O0FBSTFCLHNCQUNFLHFFQUFDLDBEQUFEO0FBQW1CLHVCQUFtQixFQUFFSCxPQUFPLENBQUNJLFVBQWhEO0FBQUEsZUFDSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlOLE9BQU8sQ0FBQ0ksVUFBcEIsQ0FESixlQUdFLHFFQUFDLDhEQUFEO0FBQVksV0FBSyxFQUFDLFNBQWxCO0FBQTRCLFdBQUssRUFBQyxRQUFsQztBQUEyQyxhQUFPLEVBQUMsSUFBbkQ7QUFBd0QsWUFBTSxFQUFDLFFBQS9EO0FBQXdFLGVBQVMsRUFBRUosT0FBTyxDQUFDTyxFQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUhGLGVBTUUscUVBQUMsa0VBQUQ7QUFBVSxZQUFJLENBQUMsQ0FBQ0wsVUFBVSxDQUFDTSxXQUEzQjtBQUFBLDZCQUNFLHFFQUFDLDhEQUFEO0FBQVksYUFBSyxFQUFDLFNBQWxCO0FBQTRCLGFBQUssRUFBQyxRQUFsQztBQUEyQyxlQUFPLEVBQUMsSUFBbkQ7QUFBd0QsaUJBQVMsRUFBRVIsT0FBTyxDQUFDUyxFQUEzRTtBQUFBLGtCQUNHUCxVQUFVLENBQUNNLFdBQVgsR0FBeUIsQ0FBekIsZ0VBQWdGTixVQUFVLENBQUNNLFdBQTNGLFNBQTRHO0FBRC9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTkYsZUFXRSxxRUFBQywwREFBRDtBQUNFLFdBQUssRUFBQyxXQURSO0FBRUUsYUFBTyxFQUFDLFdBRlY7QUFHRSxVQUFJLEVBQUMsT0FIUDtBQUlFLGVBQVMsRUFBRVIsT0FBTyxDQUFDVSxNQUpyQjtBQUtFLGVBQVMsRUFBQyxHQUxaO0FBTUUsVUFBSSxFQUFDLGVBTlA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFYRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQXdCRDs7R0E1QlFaLFc7VUFFNkJHLGlFOzs7S0FGN0JILFc7QUE4QlRBLFdBQVcsQ0FBQ2EsU0FBWixHQUF3QjtBQUN0QlgsU0FBTyxFQUFFWSxpREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURKLENBQXhCO0FBSUEsSUFBTUMsZUFBZSxHQUFHLGlCQUF4Qjs7QUFFQSxJQUFNQyxNQUFNLEdBQUcsU0FBVEEsTUFBUyxDQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN6QmIsY0FBVSxFQUFFO0FBQ1ZXLHFCQUFlLGdCQUFTQSxlQUFULE1BREw7QUFFVkcscUJBQWUsRUFBRSxTQUZQO0FBRWtCO0FBQzVCQyx3QkFBa0IsRUFBRSxRQUhWO0FBSVZDLDBCQUFvQixFQUFFLE9BSlo7QUFLVkMsc0JBQWdCLEVBQUUsV0FMUjtBQU1WQyxvQkFBYyxFQUFFO0FBTk4sS0FEYTtBQVN6QlosVUFBTSxFQUFFO0FBQ05hLGNBQVEsRUFBRSxHQUROO0FBRUpDLGVBQVMsRUFBRSxRQUZQO0FBR0pDLGNBQVEsRUFBRTtBQUhOLE9BSUhSLEtBQUssQ0FBQ1MsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FKRyxFQUkwQjtBQUM1QkYsY0FBUSxFQUFFO0FBRGtCLEtBSjFCLENBVG1CO0FBaUJ6QmxCLE1BQUUsRUFBRTtBQUNGcUIsZUFBUyxFQUFFLE1BRFg7QUFFQUgsY0FBUSxFQUFFO0FBRlYsT0FHQ1IsS0FBSyxDQUFDUyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUhELEVBRzhCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FIOUIsQ0FqQnVCO0FBd0J6QmhCLE1BQUUsRUFBRTtBQUNGb0Isa0JBQVksRUFBRVosS0FBSyxDQUFDYSxPQUFOLENBQWMsQ0FBZCxDQURkO0FBRUFGLGVBQVMsRUFBRVgsS0FBSyxDQUFDYSxPQUFOLENBQWMsQ0FBZCxDQUZYO0FBR0FMLGNBQVEsRUFBRTtBQUhWLE9BSUNSLEtBQUssQ0FBQ1MsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FKRCxFQUk4QjtBQUM1QkMsZUFBUyxFQUFFWCxLQUFLLENBQUNhLE9BQU4sQ0FBYyxFQUFkLENBRGlCO0FBRTVCTCxjQUFRLEVBQUU7QUFGa0IsS0FKOUIsQ0F4QnVCO0FBaUN6Qk0sUUFBSSxFQUFFO0FBQ0pILGVBQVMsRUFBRVgsS0FBSyxDQUFDYSxPQUFOLENBQWMsQ0FBZDtBQURQO0FBakNtQixHQUFaO0FBQUEsQ0FBZjs7QUFzQ2VFLDBJQUFVLENBQUNoQixNQUFELENBQVYsQ0FBbUJsQixXQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM5ZjM5ZjZjZmZmNDc1OWZiZjVjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgUHJvZHVjdEhlcm9MYXlvdXQgZnJvbSAnLi9Qcm9kdWN0SGVyb0xheW91dCdcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlJ1xyXG5pbXBvcnQgeyB1c2VQcm9tbywgQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb21vLmNvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0SGVybyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHNcclxuICBjb25zdCBbcHJvbW9TdGF0ZSwgcHJvbW9EaXNwYXRjaF0gPSB1c2VQcm9tbygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZHVjdEhlcm9MYXlvdXQgYmFja2dyb3VuZENsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZ3JvdW5kfT5cclxuICAgICAgeyBjb25zb2xlLmxvZyhjbGFzc2VzLmJhY2tncm91bmQpfVxyXG4gICAgICB7LyogSW5jcmVhc2UgdGhlIG5ldHdvcmsgbG9hZGluZyBwcmlvcml0eSBvZiB0aGUgYmFja2dyb3VuZCBpbWFnZS4gKi99XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiaW5oZXJpdFwiIGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImgyXCIgbWFya2VkPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmgyfT5cclxuICAgICAgICDCoUVtYmVsbGVjw6kgdHUgamFyZMOtbiFcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8Q29sbGFwc2UgaW49eyEhcHJvbW9TdGF0ZS5tYXhEaXNjb3VudH0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJpbmhlcml0XCIgYWxpZ249XCJjZW50ZXJcIiB2YXJpYW50PVwiaDVcIiBjbGFzc05hbWU9e2NsYXNzZXMuaDV9PlxyXG4gICAgICAgICAge3Byb21vU3RhdGUubWF4RGlzY291bnQgPiAwID8gYERpc2ZydXTDoSBkZSBudWVzdHJhcyBvZmVydGFzIGFob3JyYW5kbyBoYXN0YSB1biAke3Byb21vU3RhdGUubWF4RGlzY291bnR9JWAgOiAnJ31cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgIGhyZWY9XCIjZm9vdGVyLWNlaWJvXCJcclxuICAgICAgPlxyXG4gICAgICAgIENvbXVuaWNhdGUgY29uIG5vc290cm9zXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Qcm9kdWN0SGVyb0xheW91dD5cclxuICApXHJcbn1cclxuXHJcblByb2R1Y3RIZXJvLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNvbnN0IGJhY2tncm91bmRJbWFnZSA9ICcvZ3JlZW5ob3VzZS5qcGcnXHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgYmFja2dyb3VuZDoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzdmYzdkOScsIC8vIEF2ZXJhZ2UgY29sb3Igb2YgdGhlIGJhY2tncm91bmQgaW1hZ2UuXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICdmaXhlZCcsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtaW5XaWR0aDogMjAwLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaDI6IHtcclxuICAgIG1hcmdpblRvcDogJzMwcHgnLFxyXG4gICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICc1MHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoNToge1xyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcclxuICAgICAgZm9udFNpemU6ICczNXB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3JlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0SGVybylcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==