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
    children: [console.log(JSON.parse(localStorage.getItem('ceibo-urbano-settings'))), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
      style: {
        display: 'none'
      },
      src: backgroundImage,
      alt: "increase priority"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
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
      lineNumber: 19,
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
        lineNumber: 23,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
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
      lineNumber: 27,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SGVyby5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SGVybyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb21vIiwicHJvbW9TdGF0ZSIsInByb21vRGlzcGF0Y2giLCJiYWNrZ3JvdW5kIiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJkaXNwbGF5IiwiYmFja2dyb3VuZEltYWdlIiwiaDIiLCJtYXhEaXNjb3VudCIsImg1IiwiYnV0dG9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0eWxlcyIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJtaW5XaWR0aCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInNwYWNpbmciLCJtb3JlIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUEsTUFDbEJDLE9BRGtCLEdBQ05ELEtBRE0sQ0FDbEJDLE9BRGtCOztBQUFBLGtCQUVVQyx5RUFBUSxFQUZsQjtBQUFBO0FBQUEsTUFFbkJDLFVBRm1CO0FBQUEsTUFFUEMsYUFGTzs7QUFJMUIsc0JBQ0UscUVBQUMsMERBQUQ7QUFBbUIsdUJBQW1CLEVBQUVILE9BQU8sQ0FBQ0ksVUFBaEQ7QUFBQSxlQUNHQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsSUFBSSxDQUFDQyxLQUFMLENBQVdDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQix1QkFBckIsQ0FBWCxDQUFaLENBREgsZUFHRTtBQUFLLFdBQUssRUFBRTtBQUFFQyxlQUFPLEVBQUU7QUFBWCxPQUFaO0FBQWlDLFNBQUcsRUFBRUMsZUFBdEM7QUFBdUQsU0FBRyxFQUFDO0FBQTNEO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFIRixlQUlFLHFFQUFDLDhEQUFEO0FBQVksV0FBSyxFQUFDLFNBQWxCO0FBQTRCLFdBQUssRUFBQyxRQUFsQztBQUEyQyxhQUFPLEVBQUMsSUFBbkQ7QUFBd0QsWUFBTSxFQUFDLFFBQS9EO0FBQXdFLGVBQVMsRUFBRVosT0FBTyxDQUFDYSxFQUEzRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBT0UscUVBQUMsa0VBQUQ7QUFBVSxZQUFJLENBQUMsQ0FBQ1gsVUFBVSxDQUFDWSxXQUEzQjtBQUFBLDZCQUNFLHFFQUFDLDhEQUFEO0FBQVksYUFBSyxFQUFDLFNBQWxCO0FBQTRCLGFBQUssRUFBQyxRQUFsQztBQUEyQyxlQUFPLEVBQUMsSUFBbkQ7QUFBd0QsaUJBQVMsRUFBRWQsT0FBTyxDQUFDZSxFQUEzRTtBQUFBLGtCQUNHYixVQUFVLENBQUNZLFdBQVgsR0FBeUIsQ0FBekIsZ0VBQWdGWixVQUFVLENBQUNZLFdBQTNGLFNBQTRHO0FBRC9HO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFZRSxxRUFBQywwREFBRDtBQUNFLFdBQUssRUFBQyxXQURSO0FBRUUsYUFBTyxFQUFDLFdBRlY7QUFHRSxVQUFJLEVBQUMsT0FIUDtBQUlFLGVBQVMsRUFBRWQsT0FBTyxDQUFDZ0IsTUFKckI7QUFLRSxlQUFTLEVBQUMsR0FMWjtBQU1FLFVBQUksRUFBQyxlQU5QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF5QkQ7O0dBN0JRbEIsVztVQUU2QkcsaUU7OztLQUY3QkgsVztBQStCVEEsV0FBVyxDQUFDbUIsU0FBWixHQUF3QjtBQUN0QmpCLFNBQU8sRUFBRWtCLGlEQUFTLENBQUNDLE1BQVYsQ0FBaUJDO0FBREosQ0FBeEI7QUFJQSxJQUFNUixlQUFlLEdBQUcsaUJBQXhCOztBQUlBLElBQU1TLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3pCbEIsY0FBVSxFQUFFO0FBQ1ZRLHFCQUFlLGdCQUFTQSxlQUFULE1BREw7QUFFVlcscUJBQWUsRUFBRSxTQUZQO0FBRWtCO0FBQzVCQyx3QkFBa0IsRUFBRSxRQUhWO0FBSVZDLDBCQUFvQixFQUFFLE9BSlo7QUFLVkMsc0JBQWdCLEVBQUUsV0FMUjtBQU1WQyxvQkFBYyxFQUFFO0FBTk4sS0FEYTtBQVN6QlgsVUFBTSxFQUFFO0FBQ05ZLGNBQVEsRUFBRSxHQUROO0FBRUpDLGVBQVMsRUFBRSxRQUZQO0FBR0pDLGNBQVEsRUFBRTtBQUhOLE9BSUhSLEtBQUssQ0FBQ1MsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FKRyxFQUkwQjtBQUM1QkYsY0FBUSxFQUFFO0FBRGtCLEtBSjFCLENBVG1CO0FBaUJ6QmpCLE1BQUUsRUFBRTtBQUNGb0IsZUFBUyxFQUFFLE1BRFg7QUFFQUgsY0FBUSxFQUFFO0FBRlYsT0FHQ1IsS0FBSyxDQUFDUyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUhELEVBRzhCO0FBQzVCRixjQUFRLEVBQUU7QUFEa0IsS0FIOUIsQ0FqQnVCO0FBd0J6QmYsTUFBRSxFQUFFO0FBQ0ZtQixrQkFBWSxFQUFFWixLQUFLLENBQUNhLE9BQU4sQ0FBYyxDQUFkLENBRGQ7QUFFQUYsZUFBUyxFQUFFWCxLQUFLLENBQUNhLE9BQU4sQ0FBYyxDQUFkLENBRlg7QUFHQUwsY0FBUSxFQUFFO0FBSFYsT0FJQ1IsS0FBSyxDQUFDUyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUpELEVBSThCO0FBQzVCQyxlQUFTLEVBQUVYLEtBQUssQ0FBQ2EsT0FBTixDQUFjLEVBQWQsQ0FEaUI7QUFFNUJMLGNBQVEsRUFBRTtBQUZrQixLQUo5QixDQXhCdUI7QUFpQ3pCTSxRQUFJLEVBQUU7QUFDSkgsZUFBUyxFQUFFWCxLQUFLLENBQUNhLE9BQU4sQ0FBYyxDQUFkO0FBRFA7QUFqQ21CLEdBQVo7QUFBQSxDQUFmOztBQXNDZUUsMElBQVUsQ0FBQ2hCLE1BQUQsQ0FBVixDQUFtQnZCLFdBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmZlZjczZjNlYzQ5MTc1MmVjYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJy4uL2NvbXBvbmVudHMvQnV0dG9uJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBQcm9kdWN0SGVyb0xheW91dCBmcm9tICcuL1Byb2R1Y3RIZXJvTGF5b3V0J1xyXG5pbXBvcnQgQ29sbGFwc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29sbGFwc2UnXHJcbmltcG9ydCB7IHVzZVByb21vLCBBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvbW8uY29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RIZXJvKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IFtwcm9tb1N0YXRlLCBwcm9tb0Rpc3BhdGNoXSA9IHVzZVByb21vKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9kdWN0SGVyb0xheW91dCBiYWNrZ3JvdW5kQ2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tncm91bmR9PlxyXG4gICAgICB7Y29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2VpYm8tdXJiYW5vLXNldHRpbmdzJykpKX1cclxuICAgICAgey8qIEluY3JlYXNlIHRoZSBuZXR3b3JrIGxvYWRpbmcgcHJpb3JpdHkgb2YgdGhlIGJhY2tncm91bmQgaW1hZ2UuICovfVxyXG4gICAgICA8aW1nIHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fSBzcmM9e2JhY2tncm91bmRJbWFnZX0gYWx0PVwiaW5jcmVhc2UgcHJpb3JpdHlcIiAvPlxyXG4gICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImluaGVyaXRcIiBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJoMlwiIG1hcmtlZD1cImNlbnRlclwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oMn0+XHJcbiAgICAgICAgwqFFbWJlbGxlY8OpIHR1IGphcmTDrW4hXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPENvbGxhcHNlIGluPXshIXByb21vU3RhdGUubWF4RGlzY291bnR9PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbG9yPVwiaW5oZXJpdFwiIGFsaWduPVwiY2VudGVyXCIgdmFyaWFudD1cImg1XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmg1fT5cclxuICAgICAgICAgIHtwcm9tb1N0YXRlLm1heERpc2NvdW50ID4gMCA/IGBEaXNmcnV0w6EgZGUgbnVlc3RyYXMgb2ZlcnRhcyBhaG9ycmFuZG8gaGFzdGEgdW4gJHtwcm9tb1N0YXRlLm1heERpc2NvdW50fSVgIDogJyd9XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0NvbGxhcHNlPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICBjb21wb25lbnQ9XCJhXCJcclxuICAgICAgICBocmVmPVwiI2Zvb3Rlci1jZWlib1wiXHJcbiAgICAgID5cclxuICAgICAgICBDb211bmljYXRlIGNvbiBub3NvdHJvc1xyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvUHJvZHVjdEhlcm9MYXlvdXQ+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9kdWN0SGVyby5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBiYWNrZ3JvdW5kSW1hZ2UgPSAnL2dyZWVuaG91c2UuanBnJ1xyXG5cclxuXHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgYmFja2dyb3VuZDoge1xyXG4gICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7YmFja2dyb3VuZEltYWdlfSlgLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzdmYzdkOScsIC8vIEF2ZXJhZ2UgY29sb3Igb2YgdGhlIGJhY2tncm91bmQgaW1hZ2UuXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXInLFxyXG4gICAgYmFja2dyb3VuZEF0dGFjaG1lbnQ6ICdmaXhlZCcsXHJcbiAgICBiYWNrZ3JvdW5kUmVwZWF0OiAnbm8tcmVwZWF0JyxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtaW5XaWR0aDogMjAwLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMTJweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaDI6IHtcclxuICAgIG1hcmdpblRvcDogJzMwcHgnLFxyXG4gICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICc1MHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoNToge1xyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEwKSxcclxuICAgICAgZm9udFNpemU6ICczNXB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBtb3JlOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNSksXHJcbiAgfSxcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0SGVybylcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==