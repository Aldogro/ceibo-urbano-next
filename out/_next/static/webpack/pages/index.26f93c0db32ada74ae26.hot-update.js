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
/* harmony import */ var _services_Config_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../services/Config.context */ "./services/Config.context.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\ProductHero.js",
    _s = $RefreshSig$();











function ProductHero(props) {
  _s();

  var classes = props.classes;

  var _usePromo = Object(_services_Promo_context__WEBPACK_IMPORTED_MODULE_10__["usePromo"])(),
      _usePromo2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_usePromo, 2),
      promoState = _usePromo2[0],
      promoDispatch = _usePromo2[1];

  var _useConfig = Object(_services_Config_context__WEBPACK_IMPORTED_MODULE_11__["useConfig"])(),
      _useConfig2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useConfig, 2),
      config = _useConfig2[0],
      configDispatch = _useConfig2[1];

  var backgroundImage = '/greenhouse.jpg';
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_ProductHeroLayout__WEBPACK_IMPORTED_MODULE_8__["default"], {
    backgroundClassName: classes.background,
    styles: {
      background: "url(".concat(config.mainImage, ")")
    },
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      style: {
        display: 'none'
      },
      src: backgroundImage,
      alt: "increase priority"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      color: "inherit",
      align: "center",
      variant: "h2",
      marked: "center",
      className: classes.h2,
      children: "\xA1Embellec\xE9 tu jard\xEDn!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
        lineNumber: 26,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
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
      lineNumber: 30,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, this);
}

_s(ProductHero, "WXAZbiacoFYDtzBeeEBsKrD5Yug=", false, function () {
  return [_services_Promo_context__WEBPACK_IMPORTED_MODULE_10__["usePromo"], _services_Config_context__WEBPACK_IMPORTED_MODULE_11__["useConfig"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SGVyby5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SGVybyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb21vIiwicHJvbW9TdGF0ZSIsInByb21vRGlzcGF0Y2giLCJ1c2VDb25maWciLCJjb25maWciLCJjb25maWdEaXNwYXRjaCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJtYWluSW1hZ2UiLCJkaXNwbGF5IiwiaDIiLCJtYXhEaXNjb3VudCIsImg1IiwiYnV0dG9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0eWxlcyIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJtaW5XaWR0aCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInNwYWNpbmciLCJtb3JlIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUEsTUFDbEJDLE9BRGtCLEdBQ05ELEtBRE0sQ0FDbEJDLE9BRGtCOztBQUFBLGtCQUVVQyx5RUFBUSxFQUZsQjtBQUFBO0FBQUEsTUFFbkJDLFVBRm1CO0FBQUEsTUFFUEMsYUFGTzs7QUFBQSxtQkFHT0MsMkVBQVMsRUFIaEI7QUFBQTtBQUFBLE1BR25CQyxNQUhtQjtBQUFBLE1BR1hDLGNBSFc7O0FBSzFCLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxzQkFDRSxxRUFBQywwREFBRDtBQUFtQix1QkFBbUIsRUFBRVAsT0FBTyxDQUFDUSxVQUFoRDtBQUE0RCxVQUFNLEVBQUU7QUFBRUEsZ0JBQVUsZ0JBQVNILE1BQU0sQ0FBQ0ksU0FBaEI7QUFBWixLQUFwRTtBQUFBLDRCQUVFO0FBQUssV0FBSyxFQUFFO0FBQUVDLGVBQU8sRUFBRTtBQUFYLE9BQVo7QUFBaUMsU0FBRyxFQUFFSCxlQUF0QztBQUF1RCxTQUFHLEVBQUM7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUZGLGVBR0UscUVBQUMsOERBQUQ7QUFBWSxXQUFLLEVBQUMsU0FBbEI7QUFBNEIsV0FBSyxFQUFDLFFBQWxDO0FBQTJDLGFBQU8sRUFBQyxJQUFuRDtBQUF3RCxZQUFNLEVBQUMsUUFBL0Q7QUFBd0UsZUFBUyxFQUFFUCxPQUFPLENBQUNXLEVBQTNGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFNRSxxRUFBQyxrRUFBRDtBQUFVLFlBQUksQ0FBQyxDQUFDVCxVQUFVLENBQUNVLFdBQTNCO0FBQUEsNkJBQ0UscUVBQUMsOERBQUQ7QUFBWSxhQUFLLEVBQUMsU0FBbEI7QUFBNEIsYUFBSyxFQUFDLFFBQWxDO0FBQTJDLGVBQU8sRUFBQyxJQUFuRDtBQUF3RCxpQkFBUyxFQUFFWixPQUFPLENBQUNhLEVBQTNFO0FBQUEsa0JBQ0dYLFVBQVUsQ0FBQ1UsV0FBWCxHQUF5QixDQUF6QixnRUFBZ0ZWLFVBQVUsQ0FBQ1UsV0FBM0YsU0FBNEc7QUFEL0c7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVdFLHFFQUFDLDBEQUFEO0FBQ0UsV0FBSyxFQUFDLFdBRFI7QUFFRSxhQUFPLEVBQUMsV0FGVjtBQUdFLFVBQUksRUFBQyxPQUhQO0FBSUUsZUFBUyxFQUFFWixPQUFPLENBQUNjLE1BSnJCO0FBS0UsZUFBUyxFQUFDLEdBTFo7QUFNRSxVQUFJLEVBQUMsZUFOUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQVhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBd0JEOztHQS9CUWhCLFc7VUFFNkJHLGlFLEVBQ0hHLG1FOzs7S0FIMUJOLFc7QUFpQ1RBLFdBQVcsQ0FBQ2lCLFNBQVosR0FBd0I7QUFDdEJmLFNBQU8sRUFBRWdCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREosQ0FBeEI7QUFJQSxJQUFNWCxlQUFlLEdBQUcsaUJBQXhCOztBQUVBLElBQU1ZLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCWixjQUFVLEVBQUU7QUFDVkQscUJBQWUsZ0JBQVNBLGVBQVQsTUFETDtBQUVWYyxxQkFBZSxFQUFFLFNBRlA7QUFFa0I7QUFDNUJDLHdCQUFrQixFQUFFLFFBSFY7QUFJVkMsMEJBQW9CLEVBQUUsT0FKWjtBQUtWQyxzQkFBZ0IsRUFBRSxXQUxSO0FBTVZDLG9CQUFjLEVBQUU7QUFOTixLQURhO0FBU3pCWCxVQUFNLEVBQUU7QUFDTlksY0FBUSxFQUFFLEdBRE47QUFFSkMsZUFBUyxFQUFFLFFBRlA7QUFHSkMsY0FBUSxFQUFFO0FBSE4sT0FJSFIsS0FBSyxDQUFDUyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUpHLEVBSTBCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FKMUIsQ0FUbUI7QUFpQnpCakIsTUFBRSxFQUFFO0FBQ0ZvQixlQUFTLEVBQUUsTUFEWDtBQUVBSCxjQUFRLEVBQUU7QUFGVixPQUdDUixLQUFLLENBQUNTLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSEQsRUFHOEI7QUFDNUJGLGNBQVEsRUFBRTtBQURrQixLQUg5QixDQWpCdUI7QUF3QnpCZixNQUFFLEVBQUU7QUFDRm1CLGtCQUFZLEVBQUVaLEtBQUssQ0FBQ2EsT0FBTixDQUFjLENBQWQsQ0FEZDtBQUVBRixlQUFTLEVBQUVYLEtBQUssQ0FBQ2EsT0FBTixDQUFjLENBQWQsQ0FGWDtBQUdBTCxjQUFRLEVBQUU7QUFIVixPQUlDUixLQUFLLENBQUNTLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSkQsRUFJOEI7QUFDNUJDLGVBQVMsRUFBRVgsS0FBSyxDQUFDYSxPQUFOLENBQWMsRUFBZCxDQURpQjtBQUU1QkwsY0FBUSxFQUFFO0FBRmtCLEtBSjlCLENBeEJ1QjtBQWlDekJNLFFBQUksRUFBRTtBQUNKSCxlQUFTLEVBQUVYLEtBQUssQ0FBQ2EsT0FBTixDQUFjLENBQWQ7QUFEUDtBQWpDbUIsR0FBWjtBQUFBLENBQWY7O0FBc0NlRSwwSUFBVSxDQUFDaEIsTUFBRCxDQUFWLENBQW1CckIsV0FBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4yNmY5M2MwZGIzMmFkYTc0YWUyNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnLi4vY29tcG9uZW50cy9CdXR0b24nXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IFByb2R1Y3RIZXJvTGF5b3V0IGZyb20gJy4vUHJvZHVjdEhlcm9MYXlvdXQnXHJcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSdcclxuaW1wb3J0IHsgdXNlUHJvbW8sIEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Qcm9tby5jb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Db25maWcuY29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RIZXJvKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IFtwcm9tb1N0YXRlLCBwcm9tb0Rpc3BhdGNoXSA9IHVzZVByb21vKClcclxuICBjb25zdCBbY29uZmlnLCBjb25maWdEaXNwYXRjaF0gPSB1c2VDb25maWcoKVxyXG5cclxuICBjb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSAnL2dyZWVuaG91c2UuanBnJ1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFByb2R1Y3RIZXJvTGF5b3V0IGJhY2tncm91bmRDbGFzc05hbWU9e2NsYXNzZXMuYmFja2dyb3VuZH0gc3R5bGVzPXt7IGJhY2tncm91bmQ6IGB1cmwoJHtjb25maWcubWFpbkltYWdlfSlgIH19PlxyXG4gICAgICB7LyogSW5jcmVhc2UgdGhlIG5ldHdvcmsgbG9hZGluZyBwcmlvcml0eSBvZiB0aGUgYmFja2dyb3VuZCBpbWFnZS4gKi99XHJcbiAgICAgIDxpbWcgc3R5bGU9e3sgZGlzcGxheTogJ25vbmUnIH19IHNyYz17YmFja2dyb3VuZEltYWdlfSBhbHQ9XCJpbmNyZWFzZSBwcmlvcml0eVwiIC8+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiaW5oZXJpdFwiIGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImgyXCIgbWFya2VkPVwiY2VudGVyXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmgyfT5cclxuICAgICAgICDCoUVtYmVsbGVjw6kgdHUgamFyZMOtbiFcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8Q29sbGFwc2UgaW49eyEhcHJvbW9TdGF0ZS5tYXhEaXNjb3VudH0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJpbmhlcml0XCIgYWxpZ249XCJjZW50ZXJcIiB2YXJpYW50PVwiaDVcIiBjbGFzc05hbWU9e2NsYXNzZXMuaDV9PlxyXG4gICAgICAgICAge3Byb21vU3RhdGUubWF4RGlzY291bnQgPiAwID8gYERpc2ZydXTDoSBkZSBudWVzdHJhcyBvZmVydGFzIGFob3JyYW5kbyBoYXN0YSB1biAke3Byb21vU3RhdGUubWF4RGlzY291bnR9JWAgOiAnJ31cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQ29sbGFwc2U+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgIGNvbXBvbmVudD1cImFcIlxyXG4gICAgICAgIGhyZWY9XCIjZm9vdGVyLWNlaWJvXCJcclxuICAgICAgPlxyXG4gICAgICAgIENvbXVuaWNhdGUgY29uIG5vc290cm9zXHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9Qcm9kdWN0SGVyb0xheW91dD5cclxuICApXHJcbn1cclxuXHJcblByb2R1Y3RIZXJvLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNvbnN0IGJhY2tncm91bmRJbWFnZSA9ICcvZ3JlZW5ob3VzZS5qcGcnXHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgYmFja2dyb3VuZDoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzdmYzdkOScsIC8vIEF2ZXJhZ2UgY29sb3Igb2YgdGhlIGJhY2tncm91bmQgaW1hZ2UuXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICdmaXhlZCcsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtaW5XaWR0aDogMjAwLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaDI6IHtcclxuICAgIG1hcmdpblRvcDogJzMwcHgnLFxyXG4gICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICc1MHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoNToge1xyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcclxuICAgICAgZm9udFNpemU6ICczNXB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3JlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0SGVybylcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==