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

  var generateTextForWhatsapp = function generateTextForWhatsapp() {
    var temp = '¡Hola!, mi pedido:%0A%0A';
    cartState.items.forEach(function (item) {
      temp += "_*".concat(item.name, "*_: $").concat(item.price, " x").concat(item.amount, " - _*$").concat(item.price * item.amount, "*_%0A");
    });
    temp += "%0AM\xE9todo de pago: *".concat(cartState.paymentMethod, "*\n*Precio TOTAL $").concat(getTotal(), "*");
    return temp;
  };

  var generateTextForEmail = function generateTextForEmail() {
    var temp = '¡Hola!, mi pedido:\npirula gomez';
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
      return console.log('Se copió al portapapeles');
    }) // #FIX ME --> Agregar toast o notificación avisando que salió todo bien
    ["catch"](function () {
      return console.log('Algo salió mal');
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
          lineNumber: 81,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["$", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 82,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onClick: function onClick() {
              return onAmountRemove(item);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 85,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 84,
            columnNumber: 17
          }, _this), item.amount, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
            onClick: function onClick() {
              return onAmountAdd(item);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_14___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 89,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
          onClick: function onClick() {
            return onRemoveItem(item);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 15
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 80,
        columnNumber: 13
      }, _this);
    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "El carrito est\xE1 vac\xEDo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      variant: "h4",
      gutterBottom: true,
      marked: "center",
      align: "center",
      children: ["Total: $", getTotal()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 100,
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
          lineNumber: 104,
          columnNumber: 57
        }, _this),
        label: "Mercado Pago"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 104,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_8__["default"], {
        value: "Efectivo",
        control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Radio__WEBPACK_IMPORTED_MODULE_6__["default"], {
          color: "primary"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 105,
          columnNumber: 53
        }, _this),
        label: "Efectivo"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, _this), "* Selecciona alg\xFAn m\xE9todo de pago para poder realizar el pedido.", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 109,
      columnNumber: 7
    }, _this), "Env\xEDos gratis en Rosario con tu compra superior a $500 \uD83C\uDF89\uD83D\uDE9B\uD83D\uDE80", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 111,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "primary",
      variant: "contained",
      className: classes.send,
      disabled: cartState.items.length < 1 || !cartState.paymentMethod,
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://api.whatsapp.com/send?phone=+5493416871302&text=".concat(generateTextForWhatsapp()),
      children: ["Hacer pedido", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_9___default.a, {
        className: classes.wapp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 122,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 112,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("br", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 124,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 125,
      columnNumber: 7
    }, _this), "* Si no ten\xE9s whatsapp, no te preocupes, pod\xE9s copiar el contenido del Carrito para enviarlo por email haciendo ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      onClick: copyToClipboard,
      children: "click aqu\xED"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 126,
      columnNumber: 119
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL0NhcnQuanMiXSwibmFtZXMiOlsiQ2FydCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VDYXJ0IiwiY2FydFN0YXRlIiwiY2FydERpc3BhdGNoIiwib25BbW91bnRBZGQiLCJpdGVtIiwidHlwZSIsIkFjdGlvblR5cGUiLCJBRERfSVRFTSIsInBheWxvYWQiLCJvbkFtb3VudFJlbW92ZSIsIlJFTU9WRV9BTU9VTlQiLCJvblJlbW92ZUl0ZW0iLCJSRU1PVkVfSVRFTSIsImdldFRvdGFsIiwidG90YWwiLCJpdGVtcyIsImZvckVhY2giLCJhbW91bnQiLCJwcmljZSIsImdlbmVyYXRlVGV4dEZvcldoYXRzYXBwIiwidGVtcCIsIm5hbWUiLCJwYXltZW50TWV0aG9kIiwiZ2VuZXJhdGVUZXh0Rm9yRW1haWwiLCJoYW5kbGVQYXltZW50TWV0aG9kQ2hhbmdlIiwiZSIsIlNFVF9QQVlNRU5UX01FVEhPRCIsInRhcmdldCIsInZhbHVlIiwiY29weVRvQ2xpcGJvYXJkIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwidGhlbiIsImNvbnNvbGUiLCJsb2ciLCJhbGlnbkNlbnRlciIsImxlbmd0aCIsIm1hcCIsImNhcnRJdGVtIiwiaWQiLCJzZW5kIiwid2FwcCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInRleHRBbGlnbiIsImZvbnRTaXplIiwiZGlzcGxheSIsImp1c3RpZnlDb250ZW50IiwiYWxpZ25JdGVtcyIsImlucHV0Iiwid2lkdGgiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxHQUFNO0FBQUE7O0FBQ2pCLE1BQU1DLE9BQU8s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QUFJLG9FQUE2REgsdUJBQXVCLEVBQXBGLENBUE47QUFBQSw4Q0FVRSxxRUFBQyxrRUFBRDtBQUFjLGlCQUFTLEVBQUVyQixPQUFPLENBQUM0QztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGVBVkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBcENGLGVBZ0RFO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFoREYsZUFpREU7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWpERix5SUFrRGtILHFFQUFDLGdFQUFEO0FBQVEsYUFBTyxFQUFFYixlQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQWxEbEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzREQsQ0FsSEQ7O0dBQU1oQyxJO1VBQ1lFLFMsRUFDa0JDLDhEOzs7S0FGOUJILEk7QUFvSFNBLG1FQUFmO0FBRUEsSUFBTUUsU0FBUyxHQUFHNEMsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q1IsZUFBVyxFQUFFO0FBQ1hTLGVBQVMsRUFBRSxRQURBO0FBRVhDLGNBQVEsRUFBRTtBQUZDLEtBRDBCO0FBS3ZDUCxZQUFRLEVBQUU7QUFDUlEsYUFBTyxFQUFFLE1BREQ7QUFFUkMsb0JBQWMsRUFBRSxlQUZSO0FBR1JDLGdCQUFVLEVBQUU7QUFISixLQUw2QjtBQVV2Q0MsU0FBSyxFQUFFO0FBQ0xDLFdBQUssRUFBRTtBQURGLEtBVmdDO0FBYXZDVixRQUFJLEVBQUU7QUFDSk0sYUFBTyxFQUFFLE1BREw7QUFFSkUsZ0JBQVUsRUFBRSxRQUZSO0FBR0pELG9CQUFjLEVBQUUsUUFIWjtBQUlKRyxXQUFLLEVBQUU7QUFKSCxLQWJpQztBQW1CdkNULFFBQUksRUFBRTtBQUNKVSxnQkFBVSxFQUFFO0FBRFI7QUFuQmlDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVhODg3MDU2N2M1M2Y4ZjhiN2UzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBSYWRpbyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9SYWRpbydcclxuaW1wb3J0IFJhZGlvR3JvdXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvUmFkaW9Hcm91cCdcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCdcclxuaW1wb3J0IFdoYXRzQXBwSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvV2hhdHNBcHAnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IENsZWFySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXInXHJcbmltcG9ydCBSZW1vdmVDaXJjbGVPdXRsaW5lSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvUmVtb3ZlQ2lyY2xlT3V0bGluZSdcclxuaW1wb3J0IEFkZENpcmNsZU91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGVPdXRsaW5lJ1xyXG5cclxuY29uc3QgQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2NhcnRTdGF0ZSwgY2FydERpc3BhdGNoXSA9IHVzZUNhcnQoKVxyXG5cclxuICBjb25zdCBvbkFtb3VudEFkZCA9IChpdGVtKSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLkFERF9JVEVNLFxyXG4gICAgICBwYXlsb2FkOiBpdGVtLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uQW1vdW50UmVtb3ZlID0gKGl0ZW0pID0+IHtcclxuICAgIGNhcnREaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuUkVNT1ZFX0FNT1VOVCxcclxuICAgICAgcGF5bG9hZDogaXRlbSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblJlbW92ZUl0ZW0gPSAoaXRlbSkgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQWN0aW9uVHlwZS5SRU1PVkVfSVRFTSxcclxuICAgICAgcGF5bG9hZDogaXRlbSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRUb3RhbCA9ICgpID0+IHtcclxuICAgIGxldCB0b3RhbCA9IDBcclxuICAgIGNhcnRTdGF0ZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0b3RhbCArPSBpdGVtLmFtb3VudCAqIGl0ZW0ucHJpY2VcclxuICAgIH0pXHJcbiAgICByZXR1cm4gdG90YWxcclxuICB9XHJcblxyXG4gIGNvbnN0IGdlbmVyYXRlVGV4dEZvcldoYXRzYXBwID0gKCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSAnwqFIb2xhISwgbWkgcGVkaWRvOiUwQSUwQSdcclxuICAgIGNhcnRTdGF0ZS5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xyXG4gICAgICB0ZW1wICs9IGBfKiR7aXRlbS5uYW1lfSpfOiAkJHtpdGVtLnByaWNlfSB4JHtpdGVtLmFtb3VudH0gLSBfKiQke2l0ZW0ucHJpY2UgKiBpdGVtLmFtb3VudH0qXyUwQWBcclxuICAgIH0pXHJcbiAgICB0ZW1wICs9IGAlMEFNw6l0b2RvIGRlIHBhZ286ICoke2NhcnRTdGF0ZS5wYXltZW50TWV0aG9kfSpcXG4qUHJlY2lvIFRPVEFMICQke2dldFRvdGFsKCl9KmBcclxuICAgIHJldHVybiB0ZW1wXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZW5lcmF0ZVRleHRGb3JFbWFpbCA9ICgpID0+IHtcclxuICAgIGxldCB0ZW1wID0gJ8KhSG9sYSEsIG1pIHBlZGlkbzpcXG5waXJ1bGEgZ29tZXonXHJcbiAgICByZXR1cm4gdGVtcFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlUGF5bWVudE1ldGhvZENoYW5nZSA9IChlKSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9QQVlNRU5UX01FVEhPRCxcclxuICAgICAgcGF5bG9hZDogZS50YXJnZXQudmFsdWUsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY29weVRvQ2xpcGJvYXJkID0gKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoZ2VuZXJhdGVUZXh0Rm9yRW1haWwoKSlcclxuICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ1NlIGNvcGnDsyBhbCBwb3J0YXBhcGVsZXMnKSkgLy8gI0ZJWCBNRSAtLT4gQWdyZWdhciB0b2FzdCBvIG5vdGlmaWNhY2nDs24gYXZpc2FuZG8gcXVlIHNhbGnDsyB0b2RvIGJpZW5cclxuICAgICAgLmNhdGNoKCgpID0+IGNvbnNvbGUubG9nKCdBbGdvIHNhbGnDsyBtYWwnKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbGlnbkNlbnRlcn0+XHJcbiAgICAgIHsgY2FydFN0YXRlLml0ZW1zLmxlbmd0aCA+IDBcclxuICAgICAgICA/IGNhcnRTdGF0ZS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcnRJdGVtfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPiR7aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgPHA+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBvbkFtb3VudFJlbW92ZShpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICAgIDxSZW1vdmVDaXJjbGVPdXRsaW5lSWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge2l0ZW0uYW1vdW50fVxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25BbW91bnRBZGQoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICA8QWRkQ2lyY2xlT3V0bGluZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25SZW1vdmVJdGVtKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgOiA8cD5FbCBjYXJyaXRvIGVzdMOhIHZhY8OtbzwvcD5cclxuICAgICAgfVxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20gbWFya2VkPVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICBUb3RhbDogJHtnZXRUb3RhbCgpfVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxSYWRpb0dyb3VwIGFyaWEtbGFiZWw9XCJxdWl6XCIgY29sb3I9XCJwcmltYXJ5XCIgbmFtZT1cInF1aXpcIiB2YWx1ZT17Y2FydFN0YXRlLnBheW1lbnRNZXRob2R9IG9uQ2hhbmdlPXtoYW5kbGVQYXltZW50TWV0aG9kQ2hhbmdlfT5cclxuICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbCB2YWx1ZT1cIk1lcmNhZG8gUGFnb1wiIGNvbnRyb2w9ezxSYWRpbyBjb2xvcj1cInByaW1hcnlcIiAvPn0gbGFiZWw9XCJNZXJjYWRvIFBhZ29cIiAvPlxyXG4gICAgICAgIDxGb3JtQ29udHJvbExhYmVsIHZhbHVlPVwiRWZlY3Rpdm9cIiBjb250cm9sPXs8UmFkaW8gY29sb3I9XCJwcmltYXJ5XCIgLz59IGxhYmVsPVwiRWZlY3Rpdm9cIiAvPlxyXG4gICAgICA8L1JhZGlvR3JvdXA+XHJcbiAgICAgICogU2VsZWNjaW9uYSBhbGfDum4gbcOpdG9kbyBkZSBwYWdvIHBhcmEgcG9kZXIgcmVhbGl6YXIgZWwgcGVkaWRvLlxyXG4gICAgICA8aHIgLz5cclxuICAgICAgPGJyIC8+XHJcbiAgICAgIEVudsOtb3MgZ3JhdGlzIGVuIFJvc2FyaW8gY29uIHR1IGNvbXByYSBzdXBlcmlvciBhICQ1MDAg8J+OifCfmpvwn5qAXHJcbiAgICAgIDxiciAvPjxici8+XHJcbiAgICAgIDxCdXR0b25cclxuICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5zZW5kfVxyXG4gICAgICAgIGRpc2FibGVkPXtjYXJ0U3RhdGUuaXRlbXMubGVuZ3RoIDwgMSB8fCAhY2FydFN0YXRlLnBheW1lbnRNZXRob2R9XHJcbiAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcclxuICAgICAgICByZWw9XCJub29wZW5lciBub3JlZmVycmVyXCJcclxuICAgICAgICBocmVmPXtgaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/cGhvbmU9KzU0OTM0MTY4NzEzMDImdGV4dD0ke2dlbmVyYXRlVGV4dEZvcldoYXRzYXBwKCl9YH1cclxuICAgICAgPlxyXG4gICAgICAgIEhhY2VyIHBlZGlkb1xyXG4gICAgICAgIDxXaGF0c0FwcEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLndhcHB9IC8+XHJcbiAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8YnIgLz5cclxuICAgICAgPGhyIC8+XHJcbiAgICAgICogU2kgbm8gdGVuw6lzIHdoYXRzYXBwLCBubyB0ZSBwcmVvY3VwZXMsIHBvZMOpcyBjb3BpYXIgZWwgY29udGVuaWRvIGRlbCBDYXJyaXRvIHBhcmEgZW52aWFybG8gcG9yIGVtYWlsIGhhY2llbmRvIDxCdXR0b24gb25DbGljaz17Y29weVRvQ2xpcGJvYXJkfT5jbGljayBhcXXDrTwvQnV0dG9uPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBDYXJ0XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhbGlnbkNlbnRlcjoge1xyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAxNCxcclxuICB9LFxyXG4gIGNhcnRJdGVtOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBpbnB1dDoge1xyXG4gICAgd2lkdGg6ICcyNSUnLFxyXG4gIH0sXHJcbiAgc2VuZDoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gIH0sXHJcbiAgd2FwcDoge1xyXG4gICAgbWFyZ2luTGVmdDogNSxcclxuICB9XHJcbn0pKTsiXSwic291cmNlUm9vdCI6IiJ9