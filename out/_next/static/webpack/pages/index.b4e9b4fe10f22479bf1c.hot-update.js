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
    e.preventDefault();
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
          lineNumber: 25,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["$", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 26,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          value: item.amount,
          className: classes.input,
          onChange: function onChange() {
            return onAmountChange();
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 34,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 33,
          columnNumber: 15
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 24,
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
      lineNumber: 41,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "primary",
      variant: "contained",
      className: classes.send,
      children: ["Hacer pedido", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.wapp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL0NhcnQuanMiXSwibmFtZXMiOlsiQ2FydCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VDYXJ0IiwiY2FydFN0YXRlIiwiY2FydERpc3BhdGNoIiwib25BbW91bnRDaGFuZ2UiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwidGFyZ2V0IiwidmFsdWUiLCJhbGlnbkNlbnRlciIsIml0ZW1zIiwibGVuZ3RoIiwibWFwIiwiaXRlbSIsImNhcnRJdGVtIiwibmFtZSIsInByaWNlIiwiYW1vdW50IiwiaW5wdXQiLCJpZCIsInNlbmQiLCJ3YXBwIiwibWFrZVN0eWxlcyIsInRoZW1lIiwidGV4dEFsaWduIiwiZm9udFNpemUiLCJkaXNwbGF5IiwianVzdGlmeUNvbnRlbnQiLCJhbGlnbkl0ZW1zIiwid2lkdGgiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7O0FBRGlCLGlCQUVpQkMsc0VBQU8sRUFGeEI7QUFBQTtBQUFBLE1BRVZDLFNBRlU7QUFBQSxNQUVDQyxZQUZEOztBQUlqQixNQUFNQyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLENBQUQsRUFBTztBQUM1QkEsS0FBQyxDQUFDQyxjQUFGO0FBQ0FDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZSCxDQUFDLENBQUNJLE1BQUYsQ0FBU0MsS0FBckI7QUFDRCxHQUhEOztBQUtBLHNCQUNFO0FBQUssYUFBUyxFQUFFWCxPQUFPLENBQUNZLFdBQXhCO0FBQUEsZUFDSVQsU0FBUyxDQUFDVSxLQUFWLENBQWdCQyxNQUFoQixHQUF5QixDQUF6QixHQUNFWCxTQUFTLENBQUNVLEtBQVYsQ0FBZ0JFLEdBQWhCLENBQW9CLFVBQUNDLElBQUQsRUFBVTtBQUM5QiwwQkFDRTtBQUFLLGlCQUFTLEVBQUVoQixPQUFPLENBQUNpQixRQUF4QjtBQUFBLGdDQUNFO0FBQUEsb0JBQUlELElBQUksQ0FBQ0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7QUFBQSwwQkFBS0YsSUFBSSxDQUFDRyxLQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFGRixlQUdFO0FBQ0UsY0FBSSxFQUFDLFFBRFA7QUFFRSxlQUFLLEVBQUVILElBQUksQ0FBQ0ksTUFGZDtBQUdFLG1CQUFTLEVBQUVwQixPQUFPLENBQUNxQixLQUhyQjtBQUlFLGtCQUFRLEVBQUU7QUFBQSxtQkFBTWhCLGNBQWMsRUFBcEI7QUFBQTtBQUpaO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBSEYsZUFTRSxxRUFBQyxvRUFBRDtBQUFBLGlDQUNFLHFFQUFDLCtEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRGO0FBQUEsU0FBdUNXLElBQUksQ0FBQ00sRUFBNUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsS0FoQkMsQ0FERixHQWtCRSx1QkFuQk4sZUFxQkUscUVBQUMsOERBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsa0JBQVksTUFBckM7QUFBc0MsWUFBTSxFQUFDLFFBQTdDO0FBQXNELFdBQUssRUFBQyxRQUE1RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXJCRixlQXdCRSxxRUFBQyxnRUFBRDtBQUFRLFdBQUssRUFBQyxTQUFkO0FBQXdCLGFBQU8sRUFBQyxXQUFoQztBQUE0QyxlQUFTLEVBQUV0QixPQUFPLENBQUN1QixJQUEvRDtBQUFBLDhDQUVFLHFFQUFDLGtFQUFEO0FBQWMsaUJBQVMsRUFBRXZCLE9BQU8sQ0FBQ3dCO0FBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUF4QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUErQkQsQ0F4Q0Q7O0dBQU16QixJO1VBQ1lFLFMsRUFDa0JDLDhEOzs7S0FGOUJILEk7QUEwQ1NBLG1FQUFmO0FBRUEsSUFBTUUsU0FBUyxHQUFHd0IsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q2QsZUFBVyxFQUFFO0FBQ1hlLGVBQVMsRUFBRSxRQURBO0FBRVhDLGNBQVEsRUFBRTtBQUZDLEtBRDBCO0FBS3ZDWCxZQUFRLEVBQUU7QUFDUlksYUFBTyxFQUFFLE1BREQ7QUFFUkMsb0JBQWMsRUFBRSxlQUZSO0FBR1JDLGdCQUFVLEVBQUU7QUFISixLQUw2QjtBQVV2Q1YsU0FBSyxFQUFFO0FBQ0xXLFdBQUssRUFBRTtBQURGLEtBVmdDO0FBYXZDVCxRQUFJLEVBQUU7QUFDSk0sYUFBTyxFQUFFLE1BREw7QUFFSkUsZ0JBQVUsRUFBRSxRQUZSO0FBR0pELG9CQUFjLEVBQUUsUUFIWjtBQUlKRSxXQUFLLEVBQUU7QUFKSCxLQWJpQztBQW1CdkNSLFFBQUksRUFBRTtBQUNKUyxnQkFBVSxFQUFFO0FBRFI7QUFuQmlDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmI0ZTliNGZlMTBmMjI0NzliZjFjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUNhcnQsIEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9DYXJ0LmNvbnRleHQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgV2hhdHNBcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XaGF0c0FwcCdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGVhcidcclxuXHJcbmNvbnN0IENhcnQgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFtjYXJ0U3RhdGUsIGNhcnREaXNwYXRjaF0gPSB1c2VDYXJ0KClcclxuXHJcbiAgY29uc3Qgb25BbW91bnRDaGFuZ2UgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC52YWx1ZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbGlnbkNlbnRlcn0+XHJcbiAgICAgIHsgY2FydFN0YXRlLml0ZW1zLmxlbmd0aCA+IDBcclxuICAgICAgICA/IGNhcnRTdGF0ZS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcnRJdGVtfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPiR7aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtpdGVtLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbnB1dH1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoKSA9PiBvbkFtb3VudENoYW5nZSgpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIDogJ0VsIGNhcnJpdG8gZXN0w6EgdmFjw61vJ1xyXG4gICAgICB9XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbSBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIFRvdGFsOiAkNTU1NVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgdmFyaWFudD1cImNvbnRhaW5lZFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZW5kfT5cclxuICAgICAgICBIYWNlciBwZWRpZG9cclxuICAgICAgICA8V2hhdHNBcHBJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy53YXBwfSAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYWxpZ25DZW50ZXI6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgfSxcclxuICBjYXJ0SXRlbToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIHdpZHRoOiAnMjUlJyxcclxuICB9LFxyXG4gIHNlbmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIHdhcHA6IHtcclxuICAgIG1hcmdpbkxlZnQ6IDUsXHJcbiAgfVxyXG59KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==