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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "inherit",
      align: "center",
      variant: "h2",
      marked: "center",
      className: classes.h2,
      children: "\xA1Embellec\xE9 tu jard\xEDn!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
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
        lineNumber: 21,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 20,
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
      lineNumber: 25,
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

if (window) {
  console.log(localStorage.getItem('ceibo-urbano-settings'));
}

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SGVyby5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SGVybyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb21vIiwicHJvbW9TdGF0ZSIsInByb21vRGlzcGF0Y2giLCJiYWNrZ3JvdW5kIiwiaDIiLCJtYXhEaXNjb3VudCIsImg1IiwiYnV0dG9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsIndpbmRvdyIsImNvbnNvbGUiLCJsb2ciLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiYmFja2dyb3VuZEltYWdlIiwic3R5bGVzIiwidGhlbWUiLCJiYWNrZ3JvdW5kQ29sb3IiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJiYWNrZ3JvdW5kQXR0YWNobWVudCIsImJhY2tncm91bmRSZXBlYXQiLCJiYWNrZ3JvdW5kU2l6ZSIsIm1pbldpZHRoIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJicmVha3BvaW50cyIsInVwIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwic3BhY2luZyIsIm1vcmUiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsV0FBVCxDQUFxQkMsS0FBckIsRUFBNEI7QUFBQTs7QUFBQSxNQUNsQkMsT0FEa0IsR0FDTkQsS0FETSxDQUNsQkMsT0FEa0I7O0FBQUEsa0JBRVVDLHlFQUFRLEVBRmxCO0FBQUE7QUFBQSxNQUVuQkMsVUFGbUI7QUFBQSxNQUVQQyxhQUZPOztBQUkxQixzQkFDRSxxRUFBQywwREFBRDtBQUFtQix1QkFBbUIsRUFBRUgsT0FBTyxDQUFDSSxVQUFoRDtBQUFBLDRCQUVFLHFFQUFDLDhEQUFEO0FBQVksV0FBSyxFQUFDLFNBQWxCO0FBQTRCLFdBQUssRUFBQyxRQUFsQztB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Q2VFLDBJQUFVLENBQUNoQixNQUFELENBQVYsQ0FBbUJyQixXQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYzMTU0Y2U2MTM3NDczMDcwN2E2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgUHJvZHVjdEhlcm9MYXlvdXQgZnJvbSAnLi9Qcm9kdWN0SGVyb0xheW91dCdcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlJ1xyXG5pbXBvcnQgeyB1c2VQcm9tbywgQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb21vLmNvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0SGVybyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHNcclxuICBjb25zdCBbcHJvbW9TdGF0ZSwgcHJvbW9EaXNwYXRjaF0gPSB1c2VQcm9tbygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZHVjdEhlcm9MYXlvdXQgYmFja2dyb3VuZENsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZ3JvdW5kfT5cclxuICAgICAgey8qIEluY3JlYXNlIHRoZSBuZXR3b3JrIGxvYWRpbmcgcHJpb3JpdHkgb2YgdGhlIGJhY2tncm91bmQgaW1hZ2UuICovfVxyXG4gICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImluaGVyaXRcIiBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJoMlwiIG1hcmtlZD1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+XHJcbiAgICAgICAgwqFFbWJlbGxlY8OpIHR1IGphcmTDrW4hXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPENvbGxhcHNlIGluPXshIXByb21vU3RhdGUubWF4RGlzY291bnR9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiaW5oZXJpdFwiIGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImg1XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmg1fT5cclxuICAgICAgICAgIHtwcm9tb1N0YXRlLm1heERpc2NvdW50ID4gMCA/IGBEaXNmcnV0w6EgZGUgbnVlc3RyYXMgb2ZlcnRhcyBhaG9ycmFuZG8gaGFzdGEgdW4gJHtwcm9tb1N0YXRlLm1heERpc2NvdW50fSVgIDogJyd9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICBocmVmPVwiI2Zvb3Rlci1jZWlib1wiXHJcbiAgICAgID5cclxuICAgICAgICBDb211bmljYXRlIGNvbiBub3NvdHJvc1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvUHJvZHVjdEhlcm9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9kdWN0SGVyby5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5pZiAod2luZG93KSB7XHJcbiAgY29uc29sZS5sb2cobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NlaWJvLXVyYmFuby1zZXR0aW5ncycpKVxyXG59XHJcblxyXG5jb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSAnL2dyZWVuaG91c2UuanBnJ1xyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIGJhY2tncm91bmQ6IHtcclxuICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke2JhY2tncm91bmRJbWFnZX0pYCxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyM3ZmM3ZDknLCAvLyBBdmVyYWdlIGNvbG9yIG9mIHRoZSBiYWNrZ3JvdW5kIGltYWdlLlxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyJyxcclxuICAgIGJhY2tncm91bmRBdHRhY2htZW50OiAnZml4ZWQnLFxyXG4gICAgYmFja2dyb3VuZFJlcGVhdDogJ25vLXJlcGVhdCcsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgbWluV2lkdGg6IDIwMCxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzEycHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGgyOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICczMHB4JyxcclxuICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnNTBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaDU6IHtcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygxMCksXHJcbiAgICAgIGZvbnRTaXplOiAnMzVweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgbW9yZToge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUHJvZHVjdEhlcm8pXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=