webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/components/Cart.js":
/*!************************************!*\
  !*** ./modules/components/Cart.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Cart.context */ "./services/Cart.context.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/icons/WhatsApp */ "./node_modules/@material-ui/icons/WhatsApp.js");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9__);



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\Cart.js",
    _this = undefined,
    _s = $RefreshSig$();










var Cart = function Cart() {
  _s();

  var classes = useStyles();

  var _useCart = Object(_services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["useCart"])(),
      _useCart2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useCart, 2),
      cartState = _useCart2[0],
      cartDispatch = _useCart2[1];

  var onAmountChange = function onAmountChange(e) {
    console.log(e.target.value);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.alignCenter,
    children: [cartState.items.length > 0 ? cartState.items.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.cartItem,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 24,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["$", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          value: item.amount,
          className: classes.input,
          onChange: function onChange() {
            return onAmountChange(item.amount);
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 15
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 13
      }, _this);
    }) : 'El carrito está vacío', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h4",
      gutterBottom: true,
      marked: "center",
      align: "center",
      children: "Total: $5555"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "primary",
      variant: "contained",
      className: classes.send,
      children: ["Hacer pedido", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.wapp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 19,
    columnNumber: 5
  }, _this);
};

_s(Cart, "DkxsFNs38eKtK4XVbb2FpPkfvjE=", false, function () {
  return [useStyles, _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["useCart"]];
});

_c = Cart;
/* harmony default export */ __webpack_exports__["default"] = (Cart);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    alignCenter: {
      textAlign: 'center',
      fontSize: 14
    },
    cartItem: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    input: {
      width: '25%'
    },
    send: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%'
    },
    wapp: {
      marginLeft: 5
    }
  };
});

var _c;

$RefreshReg$(_c, "Cart");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL0NhcnQuanMiXSwibmFtZXMiOlsiQ2FydCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VDYXJ0IiwiY2FydFN0YXRlIiwiY2FydERpc3BhdGNoIiwib25BbW91bnRDaGFuZ2UiLCJlIiwiY29uc29sZSIsImxvZyIsInRhcmdldCIsInZhbHVlIiwiYWxpZ25DZW50ZXIiLCJpdGVtcyIsImxlbmd0aCIsIm1hcCIsIml0ZW0iLCJjYXJ0SXRlbSIsIm5hbWUiLCJwcmljZSIsImFtb3VudCIsImlucHV0IiwiaWQiLCJzZW5kIiwid2FwcCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsIndpZHRoIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCOztBQURpQixpQkFFaUJDLHNFQUFPLEVBRnhCO0FBQUE7QUFBQSxNQUVWQyxTQUZVO0FBQUEsTUFFQ0MsWUFGRDs7QUFJakIsTUFBTUMsY0FBYyxHQUFHLFNBQWpCQSxjQUFpQixDQUFDQyxDQUFELEVBQU87QUFDNUJDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZRixDQUFDLENBQUNHLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxHQUZEOztBQUlBLHNCQUNFO0FBQUssYUFBUyxFQUFFVixPQUFPLENBQUNXLFdBQXhCO0FBQUEsZUFDSVIsU0FBUyxDQUFDUyxLQUFWLENBQWdCQyxNQUFoQixHQUF5QixDQUF6QixHQUNFVixTQUFTLENBQUNTLEtBQVYsQ0FBZ0JFLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBVTtBQUM5QiwwQkFDRTtBQUFLLGlCQUFTLEVBQUVmLE9BQU8sQ0FBQ2dCLFFBQXhCO0FBQUEsZ0NBQ0U7QUFBQSxvQkFBSUQsSUFBSSxDQUFDRTtBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRTtBQUFBLDBCQUFLRixJQUFJLENBQUNHLEtBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBR0U7QUFDRSxjQUFJLEVBQUMsUUFEUDtBQUVFLGVBQUssRUFBRUgsSUFBSSxDQUFDSSxNQUZkO0FBR0UsbUJBQVMsRUFBRW5CLE9BQU8sQ0FBQ29CLEtBSHJCO0FBSUUsa0JBQVEsRUFBRTtBQUFBLG1CQUFNZixjQUFjLENBQUNVLElBQUksQ0FBQ0ksTUFBTixDQUFwQjtBQUFBO0FBSlo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFIRixlQVNFLHFFQUFDLG9FQUFEO0FBQUEsaUNBQ0UscUVBQUMsK0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBVEY7QUFBQSxTQUF1Q0osSUFBSSxDQUFDTSxFQUE1QztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFlRCxLQWhCQyxDQURGLEdBa0JFLHVCQW5CTixlQXFCRSxxRUFBQyw4REFBRDtBQUFZLGFBQU8sRUFBQyxJQUFwQjtBQUF5QixrQkFBWSxNQUFyQztBQUFzQyxZQUFNLEVBQUMsUUFBN0M7QUFBc0QsV0FBSyxFQUFDLFFBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBckJGLGVBd0JFLHFFQUFDLGdFQUFEO0FBQVEsV0FBSyxFQUFDLFNBQWQ7QUFBd0IsYUFBTyxFQUFDLFdBQWhDO0FBQTRDLGVBQVMsRUFBRXJCLE9BQU8sQ0FBQ3NCLElBQS9EO0FBQUEsOENBRUUscUVBQUMsa0VBQUQ7QUFBYyxpQkFBUyxFQUFFdEIsT0FBTyxDQUFDdUI7QUFBakM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQStCRCxDQXZDRDs7R0FBTXhCLEk7VUFDWUUsUyxFQUNrQkMsOEQ7OztLQUY5QkgsSTtBQXlDU0EsbUVBQWY7QUFFQSxJQUFNRSxTQUFTLEdBQUd1QiwyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDZCxlQUFXLEVBQUU7QUFDWGUsZUFBUyxFQUFFLFFBREE7QUFFWEMsY0FBUSxFQUFFO0FBRkMsS0FEMEI7QUFLdkNYLFlBQVEsRUFBRTtBQUNSWSxhQUFPLEVBQUUsTUFERDtBQUVSQyxvQkFBYyxFQUFFLGVBRlI7QUFHUkMsZ0JBQVUsRUFBRTtBQUhKLEtBTDZCO0FBVXZDVixTQUFLLEVBQUU7QUFDTFcsV0FBSyxFQUFFO0FBREYsS0FWZ0M7QUFhdkNULFFBQUksRUFBRTtBQUNKTSxhQUFPLEVBQUUsTUFETDtBQUVKRSxnQkFBVSxFQUFFLFFBRlI7QUFHSkQsb0JBQWMsRUFBRSxRQUhaO0FBSUpFLFdBQUssRUFBRTtBQUpILEtBYmlDO0FBbUJ2Q1IsUUFBSSxFQUFFO0FBQ0pTLGdCQUFVLEVBQUU7QUFEUjtBQW5CaUMsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMDFiZDFjMDM1ZGRhM2FjY2E1MzUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBXaGF0c0FwcEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1doYXRzQXBwJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nXHJcbmltcG9ydCBDbGVhckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyJ1xyXG5cclxuY29uc3QgQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2NhcnRTdGF0ZSwgY2FydERpc3BhdGNoXSA9IHVzZUNhcnQoKVxyXG5cclxuICBjb25zdCBvbkFtb3VudENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbGlnbkNlbnRlcn0+XHJcbiAgICAgIHsgY2FydFN0YXRlLml0ZW1zLmxlbmd0aCA+IDBcclxuICAgICAgICA/IGNhcnRTdGF0ZS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcnRJdGVtfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPiR7aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkFtb3VudENoYW5nZShpdGVtLmFtb3VudCl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgOiAnRWwgY2Fycml0byBlc3TDoSB2YWPDrW8nXHJcbiAgICAgIH1cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgVG90YWw6ICQ1NTU1XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwiY29udGFpbmVkXCIgY2xhc3NOYW1lPXtjbGFzc2VzLnNlbmR9PlxyXG4gICAgICAgIEhhY2VyIHBlZGlkb1xyXG4gICAgICAgIDxXaGF0c0FwcEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLndhcHB9IC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhbGlnbkNlbnRlcjoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICB9LFxyXG4gIGNhcnRJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBpbnB1dDoge1xyXG4gICAgd2lkdGg6ICcyNSUnLFxyXG4gIH0sXHJcbiAgc2VuZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgd2FwcDoge1xyXG4gICAgbWFyZ2luTGVmdDogNSxcclxuICB9XHJcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9