webpackHotUpdate_N_E("pages/promos/[id]/edit",{

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
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Radio */ "./node_modules/@material-ui/core/esm/Radio/index.js");
/* harmony import */ var _material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/RadioGroup */ "./node_modules/@material-ui/core/esm/RadioGroup/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/WhatsApp */ "./node_modules/@material-ui/icons/WhatsApp.js");
/* harmony import */ var _material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/RemoveCircleOutline */ "./node_modules/@material-ui/icons/RemoveCircleOutline.js");
/* harmony import */ var _material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "./node_modules/@material-ui/icons/AddCircleOutline.js");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15__);



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

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_5__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

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

  var generateTextForWhatsapp = function generateTextForWhatsapp() {
    var temp = '¡Hola!, mi pedido:%0A%0A';
    cartState.items.forEach(function (item) {
      temp += "_*".concat(item.name, "*_: $").concat(item.price, " x").concat(item.amount, " - _*$").concat(item.price * item.amount, "*_%0A");
    });
    temp += "%0AM\xE9todo de pago: *".concat(cartState.paymentMethod, "*%0A%0A*Precio TOTAL $").concat(getTotal(), "*");
    return temp;
  };

  var generateTextForEmail = function generateTextForEmail() {
    var temp = '¡Hola!, mi pedido:\n\n';
    cartState.items.forEach(function (item) {
      temp += "".concat(item.name, ": $").concat(item.price, " x").concat(item.amount, " - $").concat(item.price * item.amount, "\n");
    });
    temp += "\nM\xE9todo de pago: ".concat(cartState.paymentMethod, "\n\nPrecio TOTAL $").concat(getTotal());
    return temp;
  };

  var handlePaymentMethodChange = function handlePaymentMethodChange(e) {
    cartDispatch({
      type: _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["ActionType"].SET_PAYMENT_METHOD,
      payload: e.target.value
    });
  };

  var copyToClipboard = function copyToClipboard() {
    navigator.clipboard.writeText(generateTextForEmail()).then(function () {
      return enqueueSnackbar('Se ha copiado correctamente el contenido del carrito', {
        variant: 'success'
      });
    })["catch"](function () {
      return enqueueSnackbar('Ocurrió un error al intentar copiar el contenido del carrito', {
        variant: 'error'
      });
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
          lineNumber: 89,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["$", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 90,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onClick: function onClick() {
              return onAmountRemove(item);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 92,
            columnNumber: 17
          }, _this), item.amount, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
            onClick: function onClick() {
              return onAmountAdd(item);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_15___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 97,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 96,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 91,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onClick: function onClick() {
            return onRemoveItem(item);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 100,
          columnNumber: 15
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 88,
        columnNumber: 13
      }, _this);
    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "El carrito est\xE1 vac\xEDo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      variant: "h4",
      gutterBottom: true,
      marked: "center",
      align: "center",
      children: ["Total: $", getTotal()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_RadioGroup__WEBPACK_IMPORTED_MODULE_8__["default"], {
      "aria-label": "quiz",
      color: "primary",
      name: "quiz",
      value: cartState.paymentMethod,
      onChange: handlePaymentMethodChange,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: "Mercado Pago",
        control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 112,
          columnNumber: 57
        }, _this),
        label: "Mercado Pago"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
        value: "Efectivo",
        control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 53
        }, _this),
        label: "Efectivo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 113,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this), "* Selecciona alg\xFAn m\xE9todo de pago para poder realizar el pedido.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 116,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 117,
      columnNumber: 7
    }, _this), "Env\xEDos gratis en Rosario con tu compra superior a $500 \uD83C\uDF89\uD83D\uDE9B\uD83D\uDE80", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      color: "primary",
      variant: "contained",
      className: classes.send,
      disabled: cartState.items.length < 1 || !cartState.paymentMethod,
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://api.whatsapp.com/send?phone=+5493416871302&text=".concat(generateTextForWhatsapp()),
      children: ["Hacer pedido", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_10___default.a, {
        className: classes.wapp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 130,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 120,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 132,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 133,
      columnNumber: 7
    }, _this), "* Si no ten\xE9s whatsapp, no te preocupes, pod\xE9s copiar el contenido del Carrito para enviarlo por email haciendo", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
      disabled: cartState.items.length < 1 || !cartState.paymentMethod,
      onClick: copyToClipboard,
      children: "click aqu\xED"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 135,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 84,
    columnNumber: 5
  }, _this);
};

_s(Cart, "ZXDjjzhSeQkakUZA22EFjwDMfd8=", false, function () {
  return [useStyles, _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["useCart"], notistack__WEBPACK_IMPORTED_MODULE_5__["useSnackbar"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL0NhcnQuanMiXSwibmFtZXMiOlsiQ2FydCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VDYXJ0IiwiY2FydFN0YXRlIiwiY2FydERpc3BhdGNoIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJjbG9zZVNuYWNrYmFyIiwib25BbW91bnRBZGQiLCJpdGVtIiwidHlwZSIsIkFjdGlvblR5cGUiLCJBRERfSVRFTSIsInBheWxvYWQiLCJvbkFtb3VudFJlbW92ZSIsIlJFTU9WRV9BTU9VTlQiLCJvblJlbW92ZUl0ZW0iLCJSRU1PVkVfSVRFTSIsImdldFRvdGFsIiwidG90YWwiLCJpdGVtcyIsImZvckVhY2giLCJhbW91bnQiLCJwcmljZSIsImdlbmVyYXRlVGV4dEZvcldoYXRzYXBwIiwidGVtcCIsIm5hbWUiLCJwYXltZW50TWV0aG9kIiwiZ2VuZXJhdGVUZXh0Rm9yRW1haWwiLCJoYW5kbGVQYXltZW50TWV0aG9kQ2hhbmdlIiwiZSIsIlNFVF9QQVlNRU5UX01FVEhPRCIsInRhcmdldCIsInZhbHVlIiwiY29weVRvQ2xpcGJvYXJkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsInZhcmlhbnQiLCJhbGlnbkNlbnRlciIsImxlbmd0aCIsIm1hcCIsImNhcnRJdGVtIiwiaWQiLCJzZW5kIiwid2FwcCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImlucHV0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJ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Ozs7S0FIdkNOLEk7QUE0SFNBLG1FQUFmO0FBRUEsSUFBTUUsU0FBUyxHQUFHOEMsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q1IsZUFBVyxFQUFFO0FBQ1hTLGVBQVMsRUFBRSxRQURBO0FBRVhDLGNBQVEsRUFBRTtBQUZDLEtBRDBCO0FBS3ZDUCxZQUFRLEVBQUU7QUFDUlEsYUFBTyxFQUFFLE1BREQ7QUFFUkMsb0JBQWMsRUFBRSxlQUZSO0FBR1JDLGdCQUFVLEVBQUU7QUFISixLQUw2QjtBQVV2Q0MsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRTtBQURGLEtBVmdDO0FBYXZDVixRQUFJLEVBQUU7QUFDSk0sYUFBTyxFQUFFLE1BREw7QUFFSkUsZ0JBQVUsRUFBRSxRQUZSO0FBR0pELG9CQUFjLEVBQUUsUUFIWjtBQUlKRyxXQUFLLEVBQUU7QUFKSCxLQWJpQztBQW1CdkNULFFBQUksRUFBRTtBQUNKVSxnQkFBVSxFQUFFO0FBRFI7QUFuQmlDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb21vcy9baWRdL2VkaXQuMzllOTBmNGE1NGJkMjdhOGJkMTkuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUNhcnQsIEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9DYXJ0LmNvbnRleHQnXHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbydcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCdcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCdcclxuaW1wb3J0IFdoYXRzQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2hhdHNBcHAnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IENsZWFySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXInXHJcbmltcG9ydCBSZW1vdmVDaXJjbGVPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlQ2lyY2xlT3V0bGluZSdcclxuaW1wb3J0IEFkZENpcmNsZU91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVPdXRsaW5lJ1xyXG5cclxuY29uc3QgQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2NhcnRTdGF0ZSwgY2FydERpc3BhdGNoXSA9IHVzZUNhcnQoKVxyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyLCBjbG9zZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpXHJcblxyXG4gIGNvbnN0IG9uQW1vdW50QWRkID0gKGl0ZW0pID0+IHtcclxuICAgIGNhcnREaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuQUREX0lURU0sXHJcbiAgICAgIHBheWxvYWQ6IGl0ZW0sXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25BbW91bnRSZW1vdmUgPSAoaXRlbSkgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQWN0aW9uVHlwZS5SRU1PVkVfQU1PVU5ULFxyXG4gICAgICBwYXlsb2FkOiBpdGVtLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLlJFTU9WRV9JVEVNLFxyXG4gICAgICBwYXlsb2FkOiBpdGVtLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFRvdGFsID0gKCkgPT4ge1xyXG4gICAgbGV0IHRvdGFsID0gMFxyXG4gICAgY2FydFN0YXRlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uYW1vdW50ICogaXRlbS5wcmljZVxyXG4gICAgfSlcclxuICAgIHJldHVybiB0b3RhbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVUZXh0Rm9yV2hhdHNhcHAgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9ICfCoUhvbGEhLCBtaSBwZWRpZG86JTBBJTBBJ1xyXG4gICAgY2FydFN0YXRlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRlbXAgKz0gYF8qJHtpdGVtLm5hbWV9Kl86ICQke2l0ZW0ucHJpY2V9IHgke2l0ZW0uYW1vdW50fSAtIF8qJCR7aXRlbS5wcmljZSAqIGl0ZW0uYW1vdW50fSpfJTBBYFxyXG4gICAgfSlcclxuICAgIHRlbXAgKz0gYCUwQU3DqXRvZG8gZGUgcGFnbzogKiR7Y2FydFN0YXRlLnBheW1lbnRNZXRob2R9KiUwQSUwQSpQcmVjaW8gVE9UQUwgJCR7Z2V0VG90YWwoKX0qYFxyXG4gICAgcmV0dXJuIHRlbXBcclxuICB9XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlVGV4dEZvckVtYWlsID0gKCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSAnwqFIb2xhISwgbWkgcGVkaWRvOlxcblxcbidcclxuICAgIGNhcnRTdGF0ZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0ZW1wICs9IGAke2l0ZW0ubmFtZX06ICQke2l0ZW0ucHJpY2V9IHgke2l0ZW0uYW1vdW50fSAtICQke2l0ZW0ucHJpY2UgKiBpdGVtLmFtb3VudH1cXG5gXHJcbiAgICB9KVxyXG4gICAgdGVtcCArPSBgXFxuTcOpdG9kbyBkZSBwYWdvOiAke2NhcnRTdGF0ZS5wYXltZW50TWV0aG9kfVxcblxcblByZWNpbyBUT1RBTCAkJHtnZXRUb3RhbCgpfWBcclxuICAgIHJldHVybiB0ZW1wXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVQYXltZW50TWV0aG9kQ2hhbmdlID0gKGUpID0+IHtcclxuICAgIGNhcnREaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VUX1BBWU1FTlRfTUVUSE9ELFxyXG4gICAgICBwYXlsb2FkOiBlLnRhcmdldC52YWx1ZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjb3B5VG9DbGlwYm9hcmQgPSAoKSA9PiB7XHJcbiAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChnZW5lcmF0ZVRleHRGb3JFbWFpbCgpKVxyXG4gICAgICAudGhlbigoKSA9PiBlbnF1ZXVlU25hY2tiYXIoJ1NlIGhhIGNvcGlhZG8gY29ycmVjdGFtZW50ZSBlbCBjb250ZW5pZG8gZGVsIGNhcnJpdG8nLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJ30pKVxyXG4gICAgICAuY2F0Y2goKCkgPT4gZW5xdWV1ZVNuYWNrYmFyKCdPY3VycmnDsyB1biBlcnJvciBhbCBpbnRlbnRhciBjb3BpYXIgZWwgY29udGVuaWRvIGRlbCBjYXJyaXRvJywgeyB2YXJpYW50OiAnZXJyb3InfSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWxpZ25DZW50ZXJ9PlxyXG4gICAgICB7IGNhcnRTdGF0ZS5pdGVtcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBjYXJ0U3RhdGUuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ0SXRlbX0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8cD57aXRlbS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICA8cD4ke2l0ZW0ucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25BbW91bnRSZW1vdmUoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQW1vdW50QWRkKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgPEFkZENpcmNsZU91dGxpbmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlSXRlbShpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIDogPHA+RWwgY2Fycml0byBlc3TDoSB2YWPDrW88L3A+XHJcbiAgICAgIH1cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgVG90YWw6ICR7Z2V0VG90YWwoKX1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8UmFkaW9Hcm91cCBhcmlhLWxhYmVsPVwicXVpelwiIGNvbG9yPVwicHJpbWFyeVwiIG5hbWU9XCJxdWl6XCIgdmFsdWU9e2NhcnRTdGF0ZS5wYXltZW50TWV0aG9kfSBvbkNoYW5nZT17aGFuZGxlUGF5bWVudE1ldGhvZENoYW5nZX0+XHJcbiAgICAgICAgPEZvcm1Db250cm9sTGFiZWwgdmFsdWU9XCJNZXJjYWRvIFBhZ29cIiBjb250cm9sPXs8UmFkaW8gY29sb3I9XCJwcmltYXJ5XCIgLz59IGxhYmVsPVwiTWVyY2FkbyBQYWdvXCIgLz5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIkVmZWN0aXZvXCIgY29udHJvbD17PFJhZGlvIGNvbG9yPVwicHJpbWFyeVwiIC8+fSBsYWJlbD1cIkVmZWN0aXZvXCIgLz5cclxuICAgICAgPC9SYWRpb0dyb3VwPlxyXG4gICAgICAqIFNlbGVjY2lvbmEgYWxnw7puIG3DqXRvZG8gZGUgcGFnbyBwYXJhIHBvZGVyIHJlYWxpemFyIGVsIHBlZGlkby5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgIDxiciAvPlxyXG4gICAgICBFbnbDrW9zIGdyYXRpcyBlbiBSb3NhcmlvIGNvbiB0dSBjb21wcmEgc3VwZXJpb3IgYSAkNTAwIPCfjonwn5qb8J+agFxyXG4gICAgICA8YnIgLz48YnIvPlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VuZH1cclxuICAgICAgICBkaXNhYmxlZD17Y2FydFN0YXRlLml0ZW1zLmxlbmd0aCA8IDEgfHwgIWNhcnRTdGF0ZS5wYXltZW50TWV0aG9kfVxyXG4gICAgICAgIHRhcmdldD1cIl9ibGFua1wiXHJcbiAgICAgICAgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiXHJcbiAgICAgICAgaHJlZj17YGh0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3Bob25lPSs1NDkzNDE2ODcxMzAyJnRleHQ9JHtnZW5lcmF0ZVRleHRGb3JXaGF0c2FwcCgpfWB9XHJcbiAgICAgID5cclxuICAgICAgICBIYWNlciBwZWRpZG9cclxuICAgICAgICA8V2hhdHNBcHBJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy53YXBwfSAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIDxociAvPlxyXG4gICAgICAqIFNpIG5vIHRlbsOpcyB3aGF0c2FwcCwgbm8gdGUgcHJlb2N1cGVzLCBwb2TDqXMgY29waWFyIGVsIGNvbnRlbmlkbyBkZWwgQ2Fycml0byBwYXJhIGVudmlhcmxvIHBvciBlbWFpbCBoYWNpZW5kb1xyXG4gICAgICA8QnV0dG9uIGRpc2FibGVkPXtjYXJ0U3RhdGUuaXRlbXMubGVuZ3RoIDwgMSB8fCAhY2FydFN0YXRlLnBheW1lbnRNZXRob2R9IG9uQ2xpY2s9e2NvcHlUb0NsaXBib2FyZH0+XHJcbiAgICAgICAgY2xpY2sgYXF1w61cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGFsaWduQ2VudGVyOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gIH0sXHJcbiAgY2FydEl0ZW06IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGlucHV0OiB7XHJcbiAgICB3aWR0aDogJzI1JScsXHJcbiAgfSxcclxuICBzZW5kOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICB3YXBwOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiA1LFxyXG4gIH1cclxufSkpOyJdLCJzb3VyY2VSb290IjoiIn0=