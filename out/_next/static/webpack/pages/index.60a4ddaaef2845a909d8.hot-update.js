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
      backgroundImage: "url(".concat(config.mainImage || backgroundImage, ")")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SGVyby5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SGVybyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb21vIiwicHJvbW9TdGF0ZSIsInByb21vRGlzcGF0Y2giLCJ1c2VDb25maWciLCJjb25maWciLCJjb25maWdEaXNwYXRjaCIsImJhY2tncm91bmRJbWFnZSIsImJhY2tncm91bmQiLCJtYWluSW1hZ2UiLCJkaXNwbGF5IiwiaDIiLCJtYXhEaXNjb3VudCIsImg1IiwiYnV0dG9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0eWxlcyIsInRoZW1lIiwiYmFja2dyb3VuZENvbG9yIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZEF0dGFjaG1lbnQiLCJiYWNrZ3JvdW5kUmVwZWF0IiwiYmFja2dyb3VuZFNpemUiLCJtaW5XaWR0aCIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsInNwYWNpbmciLCJtb3JlIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFdBQVQsQ0FBcUJDLEtBQXJCLEVBQTRCO0FBQUE7O0FBQUEsTUFDbEJDLE9BRGtCLEdBQ05ELEtBRE0sQ0FDbEJDLE9BRGtCOztBQUFBLGtCQUVVQyx5RUFBUSxFQUZsQjtBQUFBO0FBQUEsTUFFbkJDLFVBRm1CO0FBQUEsTUFFUEMsYUFGTzs7QUFBQSxtQkFHT0MsMkVBQVMsRUFIaEI7QUFBQTtBQUFBLE1BR25CQyxNQUhtQjtBQUFBLE1BR1hDLGNBSFc7O0FBSzFCLE1BQU1DLGVBQWUsR0FBRyxpQkFBeEI7QUFFQSxzQkFDRSxxRUFBQyww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Q0FKRCxFQUk4QjtBQUM1QkMsZUFBUyxFQUFFWCxLQUFLLENBQUNhLE9BQU4sQ0FBYyxFQUFkLENBRGlCO0FBRTVCTCxjQUFRLEVBQUU7QUFGa0IsS0FKOUIsQ0F2QnVCO0FBZ0N6Qk0sUUFBSSxFQUFFO0FBQ0pILGVBQVMsRUFBRVgsS0FBSyxDQUFDYSxPQUFOLENBQWMsQ0FBZDtBQURQO0FBaENtQixHQUFaO0FBQUEsQ0FBZjs7QUFxQ2VFLDBJQUFVLENBQUNoQixNQUFELENBQVYsQ0FBbUJyQixXQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjYwYTRkZGFhZWYyODQ1YTkwOWQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICcuLi9jb21wb25lbnRzL0J1dHRvbidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgUHJvZHVjdEhlcm9MYXlvdXQgZnJvbSAnLi9Qcm9kdWN0SGVyb0xheW91dCdcclxuaW1wb3J0IENvbGxhcHNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbGxhcHNlJ1xyXG5pbXBvcnQgeyB1c2VQcm9tbywgQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb21vLmNvbnRleHQnXHJcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NvbmZpZy5jb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdEhlcm8ocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzXHJcbiAgY29uc3QgW3Byb21vU3RhdGUsIHByb21vRGlzcGF0Y2hdID0gdXNlUHJvbW8oKVxyXG4gIGNvbnN0IFtjb25maWcsIGNvbmZpZ0Rpc3BhdGNoXSA9IHVzZUNvbmZpZygpXHJcblxyXG4gIGNvbnN0IGJhY2tncm91bmRJbWFnZSA9ICcvZ3JlZW5ob3VzZS5qcGcnXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvZHVjdEhlcm9MYXlvdXQgYmFja2dyb3VuZENsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZ3JvdW5kfSBzdHlsZXM9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7Y29uZmlnLm1haW5JbWFnZSB8fCBiYWNrZ3JvdW5kSW1hZ2V9KWAgfX0+XHJcbiAgICAgIHsvKiBJbmNyZWFzZSB0aGUgbmV0d29yayBsb2FkaW5nIHByaW9yaXR5IG9mIHRoZSBiYWNrZ3JvdW5kIGltYWdlLiAqL31cclxuICAgICAgPGltZyBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0gc3JjPXtiYWNrZ3JvdW5kSW1hZ2V9IGFsdD1cImluY3JlYXNlIHByaW9yaXR5XCIgLz5cclxuICAgICAgPFR5cG9ncmFwaHkgY29sb3I9XCJpbmhlcml0XCIgYWxpZ249XCJjZW50ZXJcIiB2YXJpYW50PVwiaDJcIiBtYXJrZWQ9XCJjZW50ZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaDJ9PlxyXG4gICAgICAgIMKhRW1iZWxsZWPDqSB0dSBqYXJkw61uIVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxDb2xsYXBzZSBpbj17ISFwcm9tb1N0YXRlLm1heERpc2NvdW50fT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb2xvcj1cImluaGVyaXRcIiBhbGlnbj1cImNlbnRlclwiIHZhcmlhbnQ9XCJoNVwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5oNX0+XHJcbiAgICAgICAgICB7cHJvbW9TdGF0ZS5tYXhEaXNjb3VudCA+IDAgPyBgRGlzZnJ1dMOhIGRlIG51ZXN0cmFzIG9mZXJ0YXMgYWhvcnJhbmRvIGhhc3RhIHVuICR7cHJvbW9TdGF0ZS5tYXhEaXNjb3VudH0lYCA6ICcnfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgPEJ1dHRvblxyXG4gICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgY29tcG9uZW50PVwiYVwiXHJcbiAgICAgICAgaHJlZj1cIiNmb290ZXItY2VpYm9cIlxyXG4gICAgICA+XHJcbiAgICAgICAgQ29tdW5pY2F0ZSBjb24gbm9zb3Ryb3NcclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L1Byb2R1Y3RIZXJvTGF5b3V0PlxyXG4gIClcclxufVxyXG5cclxuUHJvZHVjdEhlcm8ucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY29uc3QgYmFja2dyb3VuZEltYWdlID0gJy9ncmVlbmhvdXNlLmpwZydcclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICBiYWNrZ3JvdW5kOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjN2ZjN2Q5JywgLy8gQXZlcmFnZSBjb2xvciBvZiB0aGUgYmFja2dyb3VuZCBpbWFnZS5cclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlcicsXHJcbiAgICBiYWNrZ3JvdW5kQXR0YWNobWVudDogJ2ZpeGVkJyxcclxuICAgIGJhY2tncm91bmRSZXBlYXQ6ICduby1yZXBlYXQnLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIG1pbldpZHRoOiAyMDAsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZm9udFNpemU6ICcxMnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICcyMHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBoMjoge1xyXG4gICAgbWFyZ2luVG9wOiAnMzBweCcsXHJcbiAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBmb250U2l6ZTogJzUwcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGg1OiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMTApLFxyXG4gICAgICBmb250U2l6ZTogJzM1cHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIG1vcmU6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg1KSxcclxuICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3RIZXJvKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9