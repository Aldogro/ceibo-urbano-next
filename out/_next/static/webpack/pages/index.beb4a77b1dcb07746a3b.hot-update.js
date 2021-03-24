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
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/icons/WhatsApp */ "./node_modules/@material-ui/icons/WhatsApp.js");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/RemoveCircleOutline */ "./node_modules/@material-ui/icons/RemoveCircleOutline.js");
/* harmony import */ var _material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "./node_modules/@material-ui/icons/AddCircleOutline.js");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14__);



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\Cart.js",
    _this = undefined,
    _s = $RefreshSig$();















var Cart = function Cart() {
  _s();

  var classes = useStyles();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      paymentMethod = _useState[0],
      setPaymentMethod = _useState[1];

  var _useCart = Object(_services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["useCart"])(),
      _useCart2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useCart, 2),
      cartState = _useCart2[0],
      cartDispatch = _useCart2[1];

  var onAmountAdd = function onAmountAdd(item) {
    cartDispatch({
      type: _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["ActionType"].ADD_ITEM,
      payload: item
    });
  };

  var onAmountRemove = function onAmountRemove(item) {
    cartDispatch({
      type: _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["ActionType"].REMOVE_AMOUNT,
      payload: item
    });
  };

  var onRemoveItem = function onRemoveItem(item) {
    cartDispatch({
      type: _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["ActionType"].REMOVE_ITEM,
      payload: item
    });
  };

  var getTotal = function getTotal() {
    var total = 0;
    cartState.items.forEach(function (item) {
      total += item.amount * item.price;
    });
    return total;
  };

  var generateText = function generateText() {
    var temp = '';
    cartState.items.forEach(function (item) {
      temp += "_*".concat(item.name, "*_: $").concat(item.price, " x").concat(item.amount, " - _*$").concat(item.price * item.amount, "*_%0A");
    });
    temp += "%0AM\xE9todo de pago: *".concat(paymentMethod, "*%0A*Precio TOTAL $").concat(getTotal(), "*");
    return temp;
  };

  var handlePaymentMethodChange = function handlePaymentMethodChange(e) {
    cartDispatch({
      type: _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["ActionType"].SET_PAYMENT_METHOD,
      payload: e.target.value
    });
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
          lineNumber: 71,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["$", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onClick: function onClick() {
              return onAmountRemove(item);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 74,
            columnNumber: 17
          }, _this), item.amount, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onClick: function onClick() {
              return onAmountAdd(item);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 78,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: function onClick() {
            return onRemoveItem(item);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 70,
        columnNumber: 13
      }, _this);
    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "El carrito est\xE1 vac\xEDo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 88,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "h4",
      gutterBottom: true,
      marked: "center",
      align: "center",
      children: ["Total: $", getTotal()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_7__["default"], {
      "aria-label": "quiz",
      color: "primary",
      name: "quiz",
      value: cartState.paymentMethod,
      onChange: handlePaymentMethodChange,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: "Mercado Pago",
        control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__["default"], {
          color: "primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 57
        }, _this),
        label: "Mercado Pago"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: "Efectivo",
        control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__["default"], {
          color: "primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 53
        }, _this),
        label: "Efectivo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, _this), "* Selecciona alg\xFAn m\xE9todo de pago para poder realizar el pedido.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 99,
      columnNumber: 7
    }, _this), "Env\xEDos gratis en Rosario con tu compra superior a $500 \uD83C\uDF89\uD83D\uDE9B\uD83D\uDE80", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 101,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "primary",
      variant: "contained",
      className: classes.send,
      disabled: cartState.items.length < 1 || !cartState.paymentMethod,
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://api.whatsapp.com/send?phone=+5493416871302&text=\xA1Hola!, mi pedido:%0A%0A".concat(generateText()),
      children: ["Hacer pedido", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: classes.wapp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, _this);
};

_s(Cart, "MaS+pr5EaQz//8himjoLBitvLCU=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL0NhcnQuanMiXSwibmFtZXMiOlsiQ2FydCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VTdGF0ZSIsInBheW1lbnRNZXRob2QiLCJzZXRQYXltZW50TWV0aG9kIiwidXNlQ2FydCIsImNhcnRTdGF0ZSIsImNhcnREaXNwYXRjaCIsIm9uQW1vdW50QWRkIiwiaXRlbSIsInR5cGUiLCJBY3Rpb25UeXBlIiwiQUREX0lURU0iLCJwYXlsb2FkIiwib25BbW91bnRSZW1vdmUiLCJSRU1PVkVfQU1PVU5UIiwib25SZW1vdmVJdGVtIiwiUkVNT1ZFX0lURU0iLCJnZXRUb3RhbCIsInRvdGFsIiwiaXRlbXMiLCJmb3JFYWNoIiwiYW1vdW50IiwicHJpY2UiLCJnZW5lcmF0ZVRleHQiLCJ0ZW1wIiwibmFtZSIsImhhbmRsZVBheW1lbnRNZXRob2RDaGFuZ2UiLCJlIiwiU0VUX1BBWU1FTlRfTUVUSE9EIiwidGFyZ2V0IiwidmFsdWUiLCJhbGlnbkNlbnRlciIsImxlbmd0aCIsIm1hcCIsImNhcnRJdGVtIiwiaWQiLCJzZW5kIiwid2FwcCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImlucHV0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6Qjs7QUFEaUIsa0JBRXlCQyxzREFBUSxDQUFDLEVBQUQsQ0FGakM7QUFBQSxNQUVWQyxhQUZVO0FBQUEsTUFFS0Ms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QUFFLGVBRlI7QUFHUkMsZ0JBQVUsRUFBRTtBQUhKLEtBTDZCO0FBVXZDQyxTQUFLLEVBQUU7QUFDTEMsV0FBSyxFQUFFO0FBREYsS0FWZ0M7QUFhdkNWLFFBQUksRUFBRTtBQUNKTSxhQUFPLEVBQUUsTUFETDtBQUVKRSxnQkFBVSxFQUFFLFFBRlI7QUFHSkQsb0JBQWMsRUFBRSxRQUhaO0FBSUpHLFdBQUssRUFBRTtBQUpILEtBYmlDO0FBbUJ2Q1QsUUFBSSxFQUFFO0FBQ0pVLGdCQUFVLEVBQUU7QUFEUjtBQW5CaUMsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYmViNGE3N2IxZGNiMDc3NDZhM2IuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VDYXJ0LCBBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQ2FydC5jb250ZXh0J1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IFJhZGlvIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1JhZGlvJ1xyXG5pbXBvcnQgUmFkaW9Hcm91cCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpb0dyb3VwJ1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJ1xyXG5pbXBvcnQgV2hhdHNBcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XaGF0c0FwcCdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGVhcidcclxuaW1wb3J0IFJlbW92ZUNpcmNsZU91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVDaXJjbGVPdXRsaW5lJ1xyXG5pbXBvcnQgQWRkQ2lyY2xlT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZU91dGxpbmUnXHJcblxyXG5jb25zdCBDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbcGF5bWVudE1ldGhvZCwgc2V0UGF5bWVudE1ldGhvZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbY2FydFN0YXRlLCBjYXJ0RGlzcGF0Y2hdID0gdXNlQ2FydCgpXHJcblxyXG4gIGNvbnN0IG9uQW1vdW50QWRkID0gKGl0ZW0pID0+IHtcclxuICAgIGNhcnREaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuQUREX0lURU0sXHJcbiAgICAgIHBheWxvYWQ6IGl0ZW0sXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25BbW91bnRSZW1vdmUgPSAoaXRlbSkgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQWN0aW9uVHlwZS5SRU1PVkVfQU1PVU5ULFxyXG4gICAgICBwYXlsb2FkOiBpdGVtLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLlJFTU9WRV9JVEVNLFxyXG4gICAgICBwYXlsb2FkOiBpdGVtLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFRvdGFsID0gKCkgPT4ge1xyXG4gICAgbGV0IHRvdGFsID0gMFxyXG4gICAgY2FydFN0YXRlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uYW1vdW50ICogaXRlbS5wcmljZVxyXG4gICAgfSlcclxuICAgIHJldHVybiB0b3RhbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVUZXh0ID0gKCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSAnJ1xyXG4gICAgY2FydFN0YXRlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRlbXAgKz0gYF8qJHtpdGVtLm5hbWV9Kl86ICQke2l0ZW0ucHJpY2V9IHgke2l0ZW0uYW1vdW50fSAtIF8qJCR7aXRlbS5wcmljZSAqIGl0ZW0uYW1vdW50fSpfJTBBYFxyXG4gICAgfSlcclxuICAgIHRlbXAgKz0gYCUwQU3DqXRvZG8gZGUgcGFnbzogKiR7cGF5bWVudE1ldGhvZH0qJTBBKlByZWNpbyBUT1RBTCAkJHtnZXRUb3RhbCgpfSpgXHJcbiAgICByZXR1cm4gdGVtcFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUGF5bWVudE1ldGhvZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9QQVlNRU5UX01FVEhPRCxcclxuICAgICAgcGF5bG9hZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFsaWduQ2VudGVyfT5cclxuICAgICAgeyBjYXJ0U3RhdGUuaXRlbXMubGVuZ3RoID4gMFxyXG4gICAgICAgID8gY2FydFN0YXRlLml0ZW1zLm1hcCgoaXRlbSkgPT4ge1xyXG4gICAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2FydEl0ZW19IGtleT17aXRlbS5pZH0+XHJcbiAgICAgICAgICAgICAgPHA+e2l0ZW0ubmFtZX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+JHtpdGVtLnByaWNlfTwvcD5cclxuICAgICAgICAgICAgICA8cD5cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQW1vdW50UmVtb3ZlKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgPFJlbW92ZUNpcmNsZU91dGxpbmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICB7aXRlbS5hbW91bnR9XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkFtb3VudEFkZChpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxBZGRDaXJjbGVPdXRsaW5lSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZUl0ZW0oaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgICA6IDxwPkVsIGNhcnJpdG8gZXN0w6EgdmFjw61vPC9wPlxyXG4gICAgICB9XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbSBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgIFRvdGFsOiAke2dldFRvdGFsKCl9XHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPFJhZGlvR3JvdXAgYXJpYS1sYWJlbD1cInF1aXpcIiBjb2xvcj1cInByaW1hcnlcIiBuYW1lPVwicXVpelwiIHZhbHVlPXtjYXJ0U3RhdGUucGF5bWVudE1ldGhvZH0gb25DaGFuZ2U9e2hhbmRsZVBheW1lbnRNZXRob2RDaGFuZ2V9PlxyXG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiTWVyY2FkbyBQYWdvXCIgY29udHJvbD17PFJhZGlvIGNvbG9yPVwicHJpbWFyeVwiIC8+fSBsYWJlbD1cIk1lcmNhZG8gUGFnb1wiIC8+XHJcbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJFZmVjdGl2b1wiIGNvbnRyb2w9ezxSYWRpbyBjb2xvcj1cInByaW1hcnlcIiAvPn0gbGFiZWw9XCJFZmVjdGl2b1wiIC8+XHJcbiAgICAgIDwvUmFkaW9Hcm91cD5cclxuICAgICAgKiBTZWxlY2Npb25hIGFsZ8O6biBtw6l0b2RvIGRlIHBhZ28gcGFyYSBwb2RlciByZWFsaXphciBlbCBwZWRpZG8uXHJcbiAgICAgIDxociAvPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgRW52w61vcyBncmF0aXMgZW4gUm9zYXJpbyBjb24gdHUgY29tcHJhIHN1cGVyaW9yIGEgJDUwMCDwn46J8J+am/CfmoBcclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZW5kfVxyXG4gICAgICAgIGRpc2FibGVkPXtjYXJ0U3RhdGUuaXRlbXMubGVuZ3RoIDwgMSB8fCAhY2FydFN0YXRlLnBheW1lbnRNZXRob2R9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICBocmVmPXtgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9KzU0OTM0MTY4NzEzMDImdGV4dD3CoUhvbGEhLCBtaSBwZWRpZG86JTBBJTBBJHtnZW5lcmF0ZVRleHQoKX1gfVxyXG4gICAgICA+XHJcbiAgICAgICAgSGFjZXIgcGVkaWRvXHJcbiAgICAgICAgPFdoYXRzQXBwSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMud2FwcH0gLz5cclxuICAgICAgPC9CdXR0b24+XHJcblxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhbGlnbkNlbnRlcjoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICB9LFxyXG4gIGNhcnRJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBpbnB1dDoge1xyXG4gICAgd2lkdGg6ICcyNSUnLFxyXG4gIH0sXHJcbiAgc2VuZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgd2FwcDoge1xyXG4gICAgbWFyZ2luTGVmdDogNSxcclxuICB9XHJcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9