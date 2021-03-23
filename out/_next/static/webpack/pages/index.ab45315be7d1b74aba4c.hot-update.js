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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.alignCenter,
    children: [cartState.items.length > 0 ? cartState.items.map(function (item) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.cartItem,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: item.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 18,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["$", item.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
          type: "number",
          className: classes.input
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 15
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 15
        }, _this)]
      }, item.id, true, {
        fileName: _jsxFileName,
        lineNumber: 17,
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
      lineNumber: 29,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
      color: "primary",
      variant: "contained",
      className: classes.send,
      children: ["Hacer pedido", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_WhatsApp__WEBPACK_IMPORTED_MODULE_6___default.a, {
        className: classes.wapp
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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

/***/ }),

/***/ "./modules/views/AppAppBar.js":
/*!************************************!*\
  !*** ./modules/views/AppAppBar.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PersistentDrawerLeft; });
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Drawer */ "./node_modules/@material-ui/core/esm/Drawer/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/AppBar */ "./node_modules/@material-ui/core/esm/AppBar/index.js");
/* harmony import */ var _material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Toolbar */ "./node_modules/@material-ui/core/esm/Toolbar/index.js");
/* harmony import */ var _material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/List */ "./node_modules/@material-ui/core/esm/List/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Menu */ "./node_modules/@material-ui/icons/Menu.js");
/* harmony import */ var _material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/ListItem */ "./node_modules/@material-ui/core/esm/ListItem/index.js");
/* harmony import */ var _material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/ListItemIcon */ "./node_modules/@material-ui/core/esm/ListItemIcon/index.js");
/* harmony import */ var _material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/ListItemText */ "./node_modules/@material-ui/core/esm/ListItemText/index.js");
/* harmony import */ var _components_Cart__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Cart */ "./modules/components/Cart.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/Home */ "./node_modules/@material-ui/icons/Home.js");
/* harmony import */ var _material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @material-ui/icons/List */ "./node_modules/@material-ui/icons/List.js");
/* harmony import */ var _material_ui_icons_List__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @material-ui/icons/Loyalty */ "./node_modules/@material-ui/icons/Loyalty.js");
/* harmony import */ var _material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @material-ui/icons/ShoppingCart */ "./node_modules/@material-ui/icons/ShoppingCart.js");
/* harmony import */ var _material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");
/* harmony import */ var _services_Auth_context__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../services/Auth.context */ "./services/Auth.context.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\AppAppBar.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }























function PersistentDrawerLeft(_ref) {
  _s();

  var children = _ref.children;
  var classes = useStyles();
  var theme = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"])();

  var _useAuth = Object(_services_Auth_context__WEBPACK_IMPORTED_MODULE_24__["useAuth"])(),
      _useAuth2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useAuth, 2),
      auth = _useAuth2[0],
      authDispatch = _useAuth2[1];

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState, 2),
      open = _React$useState2[0],
      setOpen = _React$useState2[1];

  var _React$useState3 = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState4 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_React$useState3, 2),
      openCart = _React$useState4[0],
      setOpenCart = _React$useState4[1];

  var handleDrawerOpen = function handleDrawerOpen() {
    setOpen(true);
  };

  var handleDrawerClose = function handleDrawerClose() {
    setOpen(false);
  };

  var handleCartOpen = function handleCartOpen() {
    setOpenCart(true);
  };

  var handleCartClose = function handleCartClose() {
    setOpenCart(false);
  };

  var handleLogout = function handleLogout() {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_23__["default"].auth().signOut();
    authDispatch({
      type: 'removeAuthDetails'
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_AppBar__WEBPACK_IMPORTED_MODULE_8__["default"], {
      position: "fixed",
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.appBar, Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.appBarShift, open)),
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Toolbar__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: classes.bg,
        children: [auth.user.email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          color: "inherit",
          "aria-label": "open drawer",
          onClick: handleDrawerOpen,
          edge: "start",
          className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.menuButton, open && classes.hide),
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Menu__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 75,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 68,
          columnNumber: 13
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          src: "/ceibo-urbano-iso-logo.svg",
          height: "40",
          alt: "logo"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 11
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
          className: classes.brand,
          variant: "h6",
          noWrap: true,
          children: "Ceibo Urbano"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 81,
          columnNumber: 11
        }, this), auth.user.email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.user,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
            noWrap: true,
            className: classes.userName,
            children: auth.user.email
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
            className: classes.logout,
            onClick: handleLogout,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_21___default.a, {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 17
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 86,
          columnNumber: 13
        }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: classes.cartButton,
          "aria-label": "open drawer",
          onClick: handleCartOpen,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_22___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 98,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), auth.user.email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.drawer,
      anchor: "left",
      open: open,
      classes: {
        paper: classes.drawerPaper
      },
      onClose: handleDrawerClose,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.drawerHeader,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          className: classes.drawerBrand,
          src: "/ceibo-urbano-logo-horizontal.svg"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 115,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onClick: handleDrawerClose,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_21___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 114,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_List__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
          className: classes.listItem,
          component: "a",
          href: "/",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Home__WEBPACK_IMPORTED_MODULE_18___default.a, {
              className: classes.listItem
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 122,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16__["default"], {
            primary: "Inicio"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
          className: classes.listItem,
          component: "a",
          href: "/products",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_List__WEBPACK_IMPORTED_MODULE_19___default.a, {
              className: classes.listItem
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 126,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16__["default"], {
            primary: "Productos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItem__WEBPACK_IMPORTED_MODULE_14__["default"], {
          className: classes.listItem,
          component: "a",
          href: "/promos",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItemIcon__WEBPACK_IMPORTED_MODULE_15__["default"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Loyalty__WEBPACK_IMPORTED_MODULE_20___default.a, {
              className: classes.listItem
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 29
            }, this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 130,
            columnNumber: 15
          }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ListItemText__WEBPACK_IMPORTED_MODULE_16__["default"], {
            primary: "Promos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 131,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 105,
      columnNumber: 9
    }, this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Drawer__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: classes.cart,
      anchor: "right",
      open: openCart,
      classes: {
        paper: classes.cart
      },
      onClose: handleCartClose,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.cartHeader,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
          onClick: handleCartClose,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_21___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.cartHeaderTitle,
          children: ["Carrito de compras", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_ShoppingCart__WEBPACK_IMPORTED_MODULE_22___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 152,
            columnNumber: 15
          }, this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 150,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 146,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.cartBody,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Cart__WEBPACK_IMPORTED_MODULE_17__["default"], {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 155,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 137,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("main", {
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.content, Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({}, classes.contentShift, open)),
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.drawerHeader
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 9
      }, this), children]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 159,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, this);
}

_s(PersistentDrawerLeft, "wv6VhZnAlsm8CTMHxOHYXDjx0IM=", false, function () {
  return [useStyles, _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["useTheme"], _services_Auth_context__WEBPACK_IMPORTED_MODULE_24__["useAuth"]];
});

_c = PersistentDrawerLeft;
var drawerWidth = 300;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    bg: {
      backgroundColor: theme.palette.secondary.main,
      height: 100,
      marginBottom: 0
    },
    brand: {
      marginLeft: 16,
      color: theme.palette.primary.main
    },
    mainColor: {
      color: theme.palette.primary.main
    },
    root: {
      display: 'flex'
    },
    appBar: {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      })
    },
    appBarShift: {
      width: "calc(100% - ".concat(drawerWidth, "px)"),
      marginLeft: drawerWidth,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      })
    },
    menuButton: {
      marginRight: theme.spacing(2),
      color: theme.palette.primary.main
    },
    hide: {
      display: 'none'
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0
    },
    drawerBrand: {
      height: 30,
      marginLeft: theme.spacing(5)
    },
    drawerPaper: {
      width: drawerWidth
    },
    cart: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '500px'
    }),
    drawerHeader: _objectSpread(_objectSpread({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar), {}, {
      minHeight: '100px',
      justifyContent: 'space-between'
    }),
    cartHeader: _objectSpread(_objectSpread({
      display: 'flex',
      alignItems: 'center',
      padding: theme.spacing(0, 1)
    }, theme.mixins.toolbar), {}, {
      justifyContent: 'flex-start'
    }),
    cartHeaderTitle: {
      color: theme.palette.primary.main,
      fontSize: '1.3rem',
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-around'
    },
    cartBody: {
      padding: theme.spacing(3)
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen
      }),
      marginLeft: -drawerWidth,
      paddingTop: 0,
      paddingBottom: 0
    },
    contentShift: {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen
      }),
      marginLeft: 0
    },
    gotoLogin: {
      marginLeft: 'auto',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.primary.main
    },
    cartButton: {
      color: theme.palette.primary.main,
      marginLeft: 'auto'
    },
    listItem: {
      color: theme.palette.primary.main,
      fontWeight: 700
    },
    user: {
      display: 'flex',
      alignItems: 'center',
      color: theme.palette.primary.main,
      margin: theme.spacing(0, 'auto')
    },
    userName: {
      fontSize: 10
    }
  };
});

var _c;

$RefreshReg$(_c, "PersistentDrawerLeft");

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

/***/ }),

/***/ "./node_modules/@material-ui/icons/ChevronLeft.js":
false,

/***/ "./node_modules/@material-ui/icons/ChevronRight.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL0NhcnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvdmlld3MvQXBwQXBwQmFyLmpzIl0sIm5hbWVzIjpbIkNhcnQiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidXNlQ2FydCIsImNhcnRTdGF0ZSIsImNhcnREaXNwYXRjaCIsImFsaWduQ2VudGVyIiwiaXRlbXMiLCJsZW5ndGgiLCJtYXAiLCJpdGVtIiwiY2FydEl0ZW0iLCJuYW1lIiwicHJpY2UiLCJpbnB1dCIsImlkIiwic2VuZCIsIndhcHAiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ0ZXh0QWxpZ24iLCJmb250U2l6ZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsImFsaWduSXRlbXMiLCJ3aWR0aCIsIm1hcmdpbkxlZnQiLCJQZXJzaXN0ZW50RHJhd2VyTGVmdCIsImNoaWxkcmVuIiwidXNlVGhlbWUiLCJ1c2VBdXRoIiwiYXV0aCIsImF1dGhEaXNwYXRjaCIsIlJlYWN0IiwidXNlU3RhdGUiLCJvcGVuIiwic2V0T3BlbiIsIm9wZW5DYXJ0Iiwic2V0T3BlbkNhcnQiLCJoYW5kbGVEcmF3ZXJPcGVuIiwiaGFuZGxlRHJhd2VyQ2xvc2UiLCJoYW5kbGVDYXJ0T3BlbiIsImhhbmRsZUNhcnRDbG9zZSIsImhhbmRsZUxvZ291dCIsImFwcCIsInNpZ25PdXQiLCJ0eXBlIiwicm9vdCIsImNsc3giLCJhcHBCYXIiLCJhcHBCYXJTaGlmdCIsImJnIiwidXNlciIsImVtYWlsIiwibWVudUJ1dHRvbiIsImhpZGUiLCJicmFuZCIsInVzZXJOYW1lIiwibG9nb3V0IiwiY2FydEJ1dHRvbiIsImRyYXdlciIsInBhcGVyIiwiZHJhd2VyUGFwZXIiLCJkcmF3ZXJIZWFkZXIiLCJkcmF3ZXJCcmFuZCIsImxpc3RJdGVtIiwiY2FydCIsImNhcnRIZWFkZXIiLCJjYXJ0SGVhZGVyVGl0bGUiLCJjYXJ0Qm9keSIsImNvbnRlbnQiLCJjb250ZW50U2hpZnQiLCJkcmF3ZXJXaWR0aCIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJzZWNvbmRhcnkiLCJtYWluIiwiaGVpZ2h0IiwibWFyZ2luQm90dG9tIiwiY29sb3IiLCJwcmltYXJ5IiwibWFpbkNvbG9yIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiZWFzaW5nIiwic2hhcnAiLCJkdXJhdGlvbiIsImxlYXZpbmdTY3JlZW4iLCJlYXNlT3V0IiwiZW50ZXJpbmdTY3JlZW4iLCJtYXJnaW5SaWdodCIsInNwYWNpbmciLCJmbGV4U2hyaW5rIiwiYnJlYWtwb2ludHMiLCJ1cCIsInBhZGRpbmciLCJtaXhpbnMiLCJ0b29sYmFyIiwibWluSGVpZ2h0IiwiZmxleEdyb3ciLCJwYWRkaW5nVG9wIiwicGFkZGluZ0JvdHRvbSIsImdvdG9Mb2dpbiIsImN1cnNvciIsImZvbnRXZWlnaHQiLCJtYXJnaW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLElBQUksR0FBRyxTQUFQQSxJQUFPLEdBQU07QUFBQTs7QUFDakIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCOztBQURpQixpQkFFaUJDLHNFQUFPLEVBRnhCO0FBQUE7QUFBQSxNQUVWQyxTQUZVO0FBQUEsTUFFQ0MsWUFGRDs7QUFHakIsc0JBQ0U7QUFBSyxhQUFTLEVBQUVKLE9BQU8sQ0FBQ0ssV0FBeEI7QUFBQSxlQUNJRixTQUFTLENBQUNHLEtBQVYsQ0FBZ0JDLE1BQWhCLEdBQXlCLENBQXpCLEdBQ0VKLFNBQVMsQ0FBQ0csS0FBVixDQUFnQkUsR0FBaEIsQ0FBb0IsVUFBQ0MsSUFBRCxFQUFVO0FBQzlCLDBCQUNFO0FBQUssaUJBQVMsRUFBRVQsT0FBTyxDQUFDVSxRQUF4QjtBQUFBLGdDQUNFO0FBQUEsb0JBQUlELElBQUksQ0FBQ0U7QUFBVDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBRUU7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LGFBQVMsRUFBRTtBQUNUN0UsZ0JBQVUsRUFBRSxNQURIO0FBRVQ4RSxZQUFNLEVBQUUsU0FGQztBQUdUbEYsYUFBTyxFQUFFLE1BSEE7QUFJVEUsZ0JBQVUsRUFBRSxRQUpIO0FBS1R1RCxXQUFLLEVBQUU1RCxLQUFLLENBQUN1RCxPQUFOLENBQWNNLE9BQWQsQ0FBc0JKO0FBTHBCLEtBbkc0QjtBQTBHdkNqQixjQUFVLEVBQUU7QUFDVm9CLFdBQUssRUFBRTVELEtBQUssQ0FBQ3VELE9BQU4sQ0FBY00sT0FBZCxDQUFzQkosSUFEbkI7QUFFVmxELGdCQUFVLEVBQUU7QUFGRixLQTFHMkI7QUE4R3ZDdUMsWUFBUSxFQUFFO0FBQ1JjLFdBQUssRUFBRTVELEtBQUssQ0FBQ3VELE9BQU4sQ0FBY00sT0FBZCxDQUFzQkosSUFEckI7QUFFUjZCLGdCQUFVLEVBQUU7QUFGSixLQTlHNkI7QUFrSHZDckQsUUFBSSxFQUFFO0FBQ0o5QixhQUFPLEVBQUUsTUFETDtBQUVKRSxnQkFBVSxFQUFFLFFBRlI7QUFHSnVELFdBQUssRUFBRTVELEtBQUssQ0FBQ3VELE9BQU4sQ0FBY00sT0FBZCxDQUFzQkosSUFIekI7QUFJSjhCLFlBQU0sRUFBRXZGLEtBQUssQ0FBQ3lFLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLE1BQWpCO0FBSkosS0FsSGlDO0FBd0h2Q25DLFlBQVEsRUFBRTtBQUNScEMsY0FBUSxFQUFFO0FBREY7QUF4SDZCLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmFiNDUzMTViZTdkMWI3NGFiYTRjLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUNhcnQsIEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9DYXJ0LmNvbnRleHQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgV2hhdHNBcHBJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9XaGF0c0FwcCdcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5cclxuY29uc3QgQ2FydCA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2NhcnRTdGF0ZSwgY2FydERpc3BhdGNoXSA9IHVzZUNhcnQoKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5hbGlnbkNlbnRlcn0+XHJcbiAgICAgIHsgY2FydFN0YXRlLml0ZW1zLmxlbmd0aCA+IDBcclxuICAgICAgICA/IGNhcnRTdGF0ZS5pdGVtcy5tYXAoKGl0ZW0pID0+IHtcclxuICAgICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcnRJdGVtfSBrZXk9e2l0ZW0uaWR9PlxyXG4gICAgICAgICAgICAgIDxwPntpdGVtLm5hbWV9PC9wPlxyXG4gICAgICAgICAgICAgIDxwPiR7aXRlbS5wcmljZX08L3A+XHJcbiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJudW1iZXJcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW5wdXR9IC8+XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24+XHJcblxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApXHJcbiAgICAgICAgfSlcclxuICAgICAgICA6ICdFbCBjYXJyaXRvIGVzdMOhIHZhY8OtbydcclxuICAgICAgfVxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBndXR0ZXJCb3R0b20gbWFya2VkPVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICBUb3RhbDogJDU1NTVcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8QnV0dG9uIGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJjb250YWluZWRcIiBjbGFzc05hbWU9e2NsYXNzZXMuc2VuZH0+XHJcbiAgICAgICAgSGFjZXIgcGVkaWRvXHJcbiAgICAgICAgPFdoYXRzQXBwSWNvbiBjbGFzc05hbWU9e2NsYXNzZXMud2FwcH0gLz5cclxuICAgICAgPC9CdXR0b24+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IENhcnRcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGFsaWduQ2VudGVyOiB7XHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZm9udFNpemU6IDE0LFxyXG4gIH0sXHJcbiAgY2FydEl0ZW06IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGlucHV0OiB7XHJcbiAgICB3aWR0aDogJzI1JScsXHJcbiAgfSxcclxuICBzZW5kOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICB3YXBwOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiA1LFxyXG4gIH1cclxufSkpOyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcywgdXNlVGhlbWUgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBEcmF3ZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRHJhd2VyJ1xyXG5pbXBvcnQgQ3NzQmFzZWxpbmUgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ3NzQmFzZWxpbmUnXHJcbmltcG9ydCBBcHBCYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQXBwQmFyJ1xyXG5pbXBvcnQgVG9vbGJhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Ub29sYmFyJ1xyXG5pbXBvcnQgTGlzdCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0J1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5pbXBvcnQgTWVudUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL01lbnUnXHJcbmltcG9ydCBMaXN0SXRlbSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbSdcclxuaW1wb3J0IExpc3RJdGVtSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaXN0SXRlbUljb24nXHJcbmltcG9ydCBMaXN0SXRlbVRleHQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGlzdEl0ZW1UZXh0J1xyXG5cclxuaW1wb3J0IENhcnQgZnJvbSAnLi4vY29tcG9uZW50cy9DYXJ0J1xyXG5cclxuaW1wb3J0IEhvbWVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9Ib21lJ1xyXG5pbXBvcnQgTGlzdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0xpc3QnXHJcbmltcG9ydCBMb3lhbHR5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvTG95YWx0eSdcclxuaW1wb3J0IENsZWFySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXInXHJcbmltcG9ydCBTaG9wcGluZ0NhcnRJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9TaG9wcGluZ0NhcnQnXHJcblxyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGguY29udGV4dCdcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFBlcnNpc3RlbnREcmF3ZXJMZWZ0KHsgY2hpbGRyZW4gfSkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHRoZW1lID0gdXNlVGhlbWUoKVxyXG4gIGNvbnN0IFthdXRoLCBhdXRoRGlzcGF0Y2hdID0gdXNlQXV0aCgpXHJcbiAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW29wZW5DYXJ0LCBzZXRPcGVuQ2FydF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyT3BlbiA9ICgpID0+IHtcclxuICAgIHNldE9wZW4odHJ1ZSlcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgaGFuZGxlRHJhd2VyQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlQ2FydE9wZW4gPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQ2FydCh0cnVlKVxyXG4gIH1cclxuICBcclxuICBjb25zdCBoYW5kbGVDYXJ0Q2xvc2UgPSAoKSA9PiB7XHJcbiAgICBzZXRPcGVuQ2FydChmYWxzZSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ291dCA9ICgpID0+IHtcclxuICAgIGFwcC5hdXRoKCkuc2lnbk91dCgpXHJcbiAgICBhdXRoRGlzcGF0Y2goeyB0eXBlOiAncmVtb3ZlQXV0aERldGFpbHMnIH0pXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICA8QXBwQmFyXHJcbiAgICAgICAgcG9zaXRpb249XCJmaXhlZFwiXHJcbiAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMuYXBwQmFyLCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5hcHBCYXJTaGlmdF06IG9wZW4sXHJcbiAgICAgICAgfSl9XHJcbiAgICAgID5cclxuICAgICAgICA8VG9vbGJhciBjbGFzc05hbWU9e2NsYXNzZXMuYmd9PlxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBhdXRoLnVzZXIuZW1haWxcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvblxyXG4gICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIm9wZW4gZHJhd2VyXCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXtoYW5kbGVEcmF3ZXJPcGVufVxyXG4gICAgICAgICAgICAgIGVkZ2U9XCJzdGFydFwiXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbHN4KGNsYXNzZXMubWVudUJ1dHRvbiwgb3BlbiAmJiBjbGFzc2VzLmhpZGUpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPE1lbnVJY29uIC8+XHJcbiAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgOlxyXG4gICAgICAgICAgICBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICA8aW1nIHNyYz1cIi9jZWliby11cmJhbm8taXNvLWxvZ28uc3ZnXCIgaGVpZ2h0PVwiNDBcIiBhbHQ9XCJsb2dvXCIgLz5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5icmFuZH0gdmFyaWFudD1cImg2XCIgbm9XcmFwPlxyXG4gICAgICAgICAgICBDZWlibyBVcmJhbm9cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHsgYXV0aC51c2VyLmVtYWlsXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMudXNlcn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgbm9XcmFwIGNsYXNzTmFtZT17Y2xhc3Nlcy51c2VyTmFtZX0+XHJcbiAgICAgICAgICAgICAgICB7YXV0aC51c2VyLmVtYWlsfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMubG9nb3V0fSBvbkNsaWNrPXtoYW5kbGVMb2dvdXR9PlxyXG4gICAgICAgICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgPC8gZGl2PlxyXG4gICAgICAgICAgICA6XHJcbiAgICAgICAgICAgIG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ0QnV0dG9ufSBhcmlhLWxhYmVsPVwib3BlbiBkcmF3ZXJcIiBvbkNsaWNrPXtoYW5kbGVDYXJ0T3Blbn0+XHJcbiAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIC8+XHJcbiAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgPC9Ub29sYmFyPlxyXG4gICAgICA8L0FwcEJhcj5cclxuICAgICAge1xyXG4gICAgICAgIGF1dGgudXNlci5lbWFpbFxyXG4gICAgICAgID9cclxuICAgICAgICA8RHJhd2VyXHJcbiAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VyfVxyXG4gICAgICAgICAgYW5jaG9yPVwibGVmdFwiXHJcbiAgICAgICAgICBvcGVuPXtvcGVufVxyXG4gICAgICAgICAgY2xhc3Nlcz17e1xyXG4gICAgICAgICAgICBwYXBlcjogY2xhc3Nlcy5kcmF3ZXJQYXBlcixcclxuICAgICAgICAgIH19XHJcbiAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVEcmF3ZXJDbG9zZX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5kcmF3ZXJCcmFuZH0gc3JjPVwiL2NlaWJvLXVyYmFuby1sb2dvLWhvcml6b250YWwuc3ZnXCIgLz5cclxuICAgICAgICAgICAgPEljb25CdXR0b24gb25DbGljaz17aGFuZGxlRHJhd2VyQ2xvc2V9PlxyXG4gICAgICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8TGlzdD5cclxuICAgICAgICAgICAgPExpc3RJdGVtIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gY29tcG9uZW50PVwiYVwiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48SG9tZUljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIkluaWNpb1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGNvbXBvbmVudD1cImFcIiBocmVmPVwiL3Byb2R1Y3RzXCI+XHJcbiAgICAgICAgICAgICAgPExpc3RJdGVtSWNvbj48TGlzdEljb24gY2xhc3NOYW1lPXtjbGFzc2VzLmxpc3RJdGVtfSAvPjwvTGlzdEl0ZW1JY29uPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbVRleHQgcHJpbWFyeT1cIlByb2R1Y3Rvc1wiIC8+XHJcbiAgICAgICAgICAgIDwvTGlzdEl0ZW0+XHJcbiAgICAgICAgICAgIDxMaXN0SXRlbSBjbGFzc05hbWU9e2NsYXNzZXMubGlzdEl0ZW19IGNvbXBvbmVudD1cImFcIiBocmVmPVwiL3Byb21vc1wiPlxyXG4gICAgICAgICAgICAgIDxMaXN0SXRlbUljb24+PExveWFsdHlJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5saXN0SXRlbX0gLz48L0xpc3RJdGVtSWNvbj5cclxuICAgICAgICAgICAgICA8TGlzdEl0ZW1UZXh0IHByaW1hcnk9XCJQcm9tb3NcIiAvPlxyXG4gICAgICAgICAgICA8L0xpc3RJdGVtPlxyXG4gICAgICAgICAgPC9MaXN0PlxyXG4gICAgICAgIDwvRHJhd2VyPlxyXG4gICAgICAgIDogbnVsbFxyXG4gICAgICB9XHJcbiAgICAgIDxEcmF3ZXJcclxuICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ0fVxyXG4gICAgICAgICAgYW5jaG9yPVwicmlnaHRcIlxyXG4gICAgICAgICAgb3Blbj17b3BlbkNhcnR9XHJcbiAgICAgICAgICBjbGFzc2VzPXt7XHJcbiAgICAgICAgICAgIHBhcGVyOiBjbGFzc2VzLmNhcnQsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2FydENsb3NlfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcnRIZWFkZXJ9PlxyXG4gICAgICAgICAgICA8SWNvbkJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYXJ0Q2xvc2V9PlxyXG4gICAgICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ0SGVhZGVyVGl0bGV9PlxyXG4gICAgICAgICAgICAgIENhcnJpdG8gZGUgY29tcHJhc1xyXG4gICAgICAgICAgICAgIDxTaG9wcGluZ0NhcnRJY29uIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJ0Qm9keX0+XHJcbiAgICAgICAgICAgIDxDYXJ0IC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L0RyYXdlcj5cclxuICAgICAgPG1haW5cclxuICAgICAgICBjbGFzc05hbWU9e2Nsc3goY2xhc3Nlcy5jb250ZW50LCB7XHJcbiAgICAgICAgICBbY2xhc3Nlcy5jb250ZW50U2hpZnRdOiBvcGVuLFxyXG4gICAgICAgIH0pfVxyXG4gICAgICA+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZHJhd2VySGVhZGVyfSAvPlxyXG4gICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgPC9tYWluPlxyXG4gICAgPC9kaXY+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCBkcmF3ZXJXaWR0aCA9IDMwMFxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYmc6IHtcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5zZWNvbmRhcnkubWFpbixcclxuICAgIGhlaWdodDogMTAwLFxyXG4gICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gIH0sXHJcbiAgYnJhbmQ6IHtcclxuICAgIG1hcmdpbkxlZnQ6IDE2LFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gIH0sXHJcbiAgbWFpbkNvbG9yOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgfSxcclxuICByb290OiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICBhcHBCYXI6IHtcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZShbJ21hcmdpbicsICd3aWR0aCddLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLnNoYXJwLFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24ubGVhdmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gIH0sXHJcbiAgYXBwQmFyU2hpZnQ6IHtcclxuICAgIHdpZHRoOiBgY2FsYygxMDAlIC0gJHtkcmF3ZXJXaWR0aH1weClgLFxyXG4gICAgbWFyZ2luTGVmdDogZHJhd2VyV2lkdGgsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydtYXJnaW4nLCAnd2lkdGgnXSwge1xyXG4gICAgICBlYXNpbmc6IHRoZW1lLnRyYW5zaXRpb25zLmVhc2luZy5lYXNlT3V0LFxyXG4gICAgICBkdXJhdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuZHVyYXRpb24uZW50ZXJpbmdTY3JlZW4sXHJcbiAgICB9KSxcclxuICB9LFxyXG4gIG1lbnVCdXR0b246IHtcclxuICAgIG1hcmdpblJpZ2h0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gIH0sXHJcbiAgaGlkZToge1xyXG4gICAgZGlzcGxheTogJ25vbmUnLFxyXG4gIH0sXHJcbiAgZHJhd2VyOiB7XHJcbiAgICB3aWR0aDogZHJhd2VyV2lkdGgsXHJcbiAgICBmbGV4U2hyaW5rOiAwLFxyXG4gIH0sXHJcbiAgZHJhd2VyQnJhbmQ6IHtcclxuICAgIGhlaWdodDogMzAsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDUpLFxyXG4gIH0sXHJcbiAgZHJhd2VyUGFwZXI6IHtcclxuICAgIHdpZHRoOiBkcmF3ZXJXaWR0aCxcclxuICB9LFxyXG4gIGNhcnQ6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnNTAwcHgnLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGRyYXdlckhlYWRlcjoge1xyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDEpLFxyXG4gICAgLy8gbmVjZXNzYXJ5IGZvciBjb250ZW50IHRvIGJlIGJlbG93IGFwcCBiYXJcclxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gICAgbWluSGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICB9LFxyXG4gIGNhcnRIZWFkZXI6IHtcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAxKSxcclxuICAgIC4uLnRoZW1lLm1peGlucy50b29sYmFyLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdmbGV4LXN0YXJ0JyxcclxuICB9LFxyXG4gIGNhcnRIZWFkZXJUaXRsZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluLFxyXG4gICAgZm9udFNpemU6ICcxLjNyZW0nLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnLFxyXG4gIH0sXHJcbiAgY2FydEJvZHk6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBjb250ZW50OiB7XHJcbiAgICBmbGV4R3JvdzogMSxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ21hcmdpbicsIHtcclxuICAgICAgZWFzaW5nOiB0aGVtZS50cmFuc2l0aW9ucy5lYXNpbmcuc2hhcnAsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5sZWF2aW5nU2NyZWVuLFxyXG4gICAgfSksXHJcbiAgICBtYXJnaW5MZWZ0OiAtZHJhd2VyV2lkdGgsXHJcbiAgICBwYWRkaW5nVG9wOiAwLFxyXG4gICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICB9LFxyXG4gIGNvbnRlbnRTaGlmdDoge1xyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdtYXJnaW4nLCB7XHJcbiAgICAgIGVhc2luZzogdGhlbWUudHJhbnNpdGlvbnMuZWFzaW5nLmVhc2VPdXQsXHJcbiAgICAgIGR1cmF0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5kdXJhdGlvbi5lbnRlcmluZ1NjcmVlbixcclxuICAgIH0pLFxyXG4gICAgbWFyZ2luTGVmdDogMCxcclxuICB9LFxyXG4gIGdvdG9Mb2dpbjoge1xyXG4gICAgbWFyZ2luTGVmdDogJ2F1dG8nLFxyXG4gICAgY3Vyc29yOiAncG9pbnRlcicsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICB9LFxyXG4gIGNhcnRCdXR0b246IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIG1hcmdpbkxlZnQ6ICdhdXRvJyxcclxuICB9LFxyXG4gIGxpc3RJdGVtOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW4sXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgfSxcclxuICB1c2VyOiB7XHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnByaW1hcnkubWFpbixcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygwLCAnYXV0bycpLFxyXG4gIH0sXHJcbiAgdXNlck5hbWU6IHtcclxuICAgIGZvbnRTaXplOiAxMCxcclxuICB9XHJcbn0pKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9