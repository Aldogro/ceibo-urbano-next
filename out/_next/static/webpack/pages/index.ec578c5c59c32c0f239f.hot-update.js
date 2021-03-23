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
/* harmony import */ var _material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/icons/RemoveCircleOutline */ "./node_modules/@material-ui/icons/RemoveCircleOutline.js");
/* harmony import */ var _material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/AddCircleOutline */ "./node_modules/@material-ui/icons/AddCircleOutline.js");
/* harmony import */ var _material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_11__);



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

  var generateText = function generateText() {
    temp = '';
    cartState.items.forEach(function (item) {
      temp += "".concat(item.name, " ").concat(item.price, " ").concat(item.amount, " ").concat(item.price * item.amount, "%0A");
    });
    return temp;
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
          lineNumber: 59,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["$", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
            onClick: function onClick() {
              return onAmountRemove(item);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_RemoveCircleOutline__WEBPACK_IMPORTED_MODULE_10___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 17
          }, _this), item.amount, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
            onClick: function onClick() {
              return onAmountAdd(item);
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_AddCircleOutline__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 17
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onClick: function onClick() {
            return onRemoveItem(item);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_9___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 13
      }, _this);
    }) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "El carrito est\xE1 vac\xEDo"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 11
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
      variant: "h4",
      gutterBottom: true,
      marked: "center",
      align: "center",
      children: ["Total: $", getTotal()]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "primary",
      variant: "contained",
      className: classes.send,
      target: "_blank",
      rel: "noopener noreferrer",
      href: "https://api.whatsapp.com/send?phone=+5493416871302&text=\xA1Hola!, mi pedido:%0A".concat(generateText()),
      children: ["Hacer pedido", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.wapp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 90,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 54,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL0NhcnQuanMiXSwibmFtZXMiOlsiQ2FydCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJ1c2VDYXJ0IiwiY2FydFN0YXRlIiwiY2FydERpc3BhdGNoIiwib25BbW91bnRBZGQiLCJpdGVtIiwidHlwZSIsIkFjdGlvblR5cGUiLCJBRERfSVRFTSIsInBheWxvYWQiLCJvbkFtb3VudFJlbW92ZSIsIlJFTU9WRV9BTU9VTlQiLCJvblJlbW92ZUl0ZW0iLCJSRU1PVkVfSVRFTSIsImdldFRvdGFsIiwidG90YWwiLCJpdGVtcyIsImZvckVhY2giLCJhbW91bnQiLCJwcmljZSIsImdlbmVyYXRlVGV4dCIsInRlbXAiLCJuYW1lIiwiYWxpZ25DZW50ZXIiLCJsZW5ndGgiLCJtYXAiLCJjYXJ0SXRlbSIsImlkIiwic2VuZCIsIndhcHAiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJpbnB1dCIsIndpZHRoIiwibWFyZ2luTGVmdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsSUFBSSxHQUFHLFNBQVBBLElBQU8sR0FBTTtBQUFBOztBQUNqQixNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7O0FBRGlCLGlCQUVpQkMsc0VBQU8sRUFGeEI7QUFBQTtBQUFBLE1BRVZDLFNBRlU7QUFBQSxNQUVDQyxZQUZEOztBQUlqQixNQUFNQyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDNUJGLGdCQUFZLENBQUM7QUFDWEcsVUFBSSxFQUFFQyxpRUFBVSxDQUFDQyxRQUROO0FBRVhDLGFBQU8sRUFBRUo7QUFGRSxLQUFELENBQVo7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QUFFO0FBRFI7QUFuQmlDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVjNTc4YzVjNTljMzJjMGYyMzlmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUNhcnQsIEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9DYXJ0LmNvbnRleHQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgV2hhdHNBcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XaGF0c0FwcCdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGVhcidcclxuaW1wb3J0IFJlbW92ZUNpcmNsZU91dGxpbmVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9SZW1vdmVDaXJjbGVPdXRsaW5lJ1xyXG5pbXBvcnQgQWRkQ2lyY2xlT3V0bGluZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZU91dGxpbmUnXHJcblxyXG5jb25zdCBDYXJ0ID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbY2FydFN0YXRlLCBjYXJ0RGlzcGF0Y2hdID0gdXNlQ2FydCgpXHJcblxyXG4gIGNvbnN0IG9uQW1vdW50QWRkID0gKGl0ZW0pID0+IHtcclxuICAgIGNhcnREaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuQUREX0lURU0sXHJcbiAgICAgIHBheWxvYWQ6IGl0ZW0sXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25BbW91bnRSZW1vdmUgPSAoaXRlbSkgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQWN0aW9uVHlwZS5SRU1PVkVfQU1PVU5ULFxyXG4gICAgICBwYXlsb2FkOiBpdGVtLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlSXRlbSA9IChpdGVtKSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLlJFTU9WRV9JVEVNLFxyXG4gICAgICBwYXlsb2FkOiBpdGVtLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldFRvdGFsID0gKCkgPT4ge1xyXG4gICAgbGV0IHRvdGFsID0gMFxyXG4gICAgY2FydFN0YXRlLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XHJcbiAgICAgIHRvdGFsICs9IGl0ZW0uYW1vdW50ICogaXRlbS5wcmljZVxyXG4gICAgfSlcclxuICAgIHJldHVybiB0b3RhbFxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2VuZXJhdGVUZXh0ID0gKCkgPT4ge1xyXG4gICAgdGVtcCA9ICcnXHJcbiAgICBjYXJ0U3RhdGUuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcclxuICAgICAgdGVtcCArPSBgJHtpdGVtLm5hbWV9ICR7aXRlbS5wcmljZX0gJHtpdGVtLmFtb3VudH0gJHtpdGVtLnByaWNlICogaXRlbS5hbW91bnR9JTBBYFxyXG4gICAgfSlcclxuICAgIHJldHVybiB0ZW1wXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYWxpZ25DZW50ZXJ9PlxyXG4gICAgICB7IGNhcnRTdGF0ZS5pdGVtcy5sZW5ndGggPiAwXHJcbiAgICAgICAgPyBjYXJ0U3RhdGUuaXRlbXMubWFwKChpdGVtKSA9PiB7XHJcbiAgICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ0SXRlbX0ga2V5PXtpdGVtLmlkfT5cclxuICAgICAgICAgICAgICA8cD57aXRlbS5uYW1lfTwvcD5cclxuICAgICAgICAgICAgICA8cD4ke2l0ZW0ucHJpY2V9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17KCkgPT4gb25BbW91bnRSZW1vdmUoaXRlbSl9PlxyXG4gICAgICAgICAgICAgICAgICA8UmVtb3ZlQ2lyY2xlT3V0bGluZUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgIHtpdGVtLmFtb3VudH1cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uQW1vdW50QWRkKGl0ZW0pfT5cclxuICAgICAgICAgICAgICAgICAgPEFkZENpcmNsZU91dGxpbmVJY29uIC8+XHJcbiAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlSXRlbShpdGVtKX0+XHJcbiAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIClcclxuICAgICAgICB9KVxyXG4gICAgICAgIDogPHA+RWwgY2Fycml0byBlc3TDoSB2YWPDrW88L3A+XHJcbiAgICAgIH1cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgVG90YWw6ICR7Z2V0VG90YWwoKX1cclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8QnV0dG9uXHJcbiAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuc2VuZH1cclxuICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxyXG4gICAgICAgIHJlbD1cIm5vb3BlbmVyIG5vcmVmZXJyZXJcIlxyXG4gICAgICAgIGhyZWY9e2BodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD9waG9uZT0rNTQ5MzQxNjg3MTMwMiZ0ZXh0PcKhSG9sYSEsIG1pIHBlZGlkbzolMEEke2dlbmVyYXRlVGV4dCgpfWB9XHJcbiAgICAgID5cclxuICAgICAgICBIYWNlciBwZWRpZG9cclxuICAgICAgICA8V2hhdHNBcHBJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy53YXBwfSAvPlxyXG4gICAgICA8L0J1dHRvbj5cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgQ2FydFxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYWxpZ25DZW50ZXI6IHtcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogMTQsXHJcbiAgfSxcclxuICBjYXJ0SXRlbToge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gIH0sXHJcbiAgaW5wdXQ6IHtcclxuICAgIHdpZHRoOiAnMjUlJyxcclxuICB9LFxyXG4gIHNlbmQ6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIHdhcHA6IHtcclxuICAgIG1hcmdpbkxlZnQ6IDUsXHJcbiAgfVxyXG59KSk7Il0sInNvdXJjZVJvb3QiOiIifQ==