webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/views/PromoItem.js":
/*!************************************!*\
  !*** ./modules/views/PromoItem.js ***!
  \************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _services_Promo_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Promo.context */ "./services/Promo.context.js");
/* harmony import */ var _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/Cart.context */ "./services/Cart.context.js");
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony import */ var _views_Carousel__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/Carousel */ "./modules/views/Carousel.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\PromoItem.js",
    _this = undefined,
    _s = $RefreshSig$();


















var PromoItem = function PromoItem(_ref) {
  _s();

  var promo = _ref.promo;
  var classes = useStyles();

  var _useCart = Object(_services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["useCart"])(),
      _useCart2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useCart, 2),
      cartState = _useCart2[0],
      cartDispatch = _useCart2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(true),
      openCarousel = _useState[0],
      setOpenCarousel = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(null),
      selectedPromo = _useState2[0],
      setSelectedPromo = _useState2[1];

  var handleOnAddToCart = function handleOnAddToCart(promo) {
    cartDispatch({
      type: _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["ActionType"].ADD_ITEM,
      payload: promo
    });
  };

  var getCartItems = function getCartItems(promo) {
    var _item$;

    var item = cartState.items.filter(function (item) {
      return item.id === promo.id;
    });
    return (_item$ = item[0]) === null || _item$ === void 0 ? void 0 : _item$.amount;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    item: true,
    xs: 12,
    md: +promo.cols,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.imageSrc,
      style: {
        backgroundImage: "url(".concat(promo.picture, ")")
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.backdrop
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        component: "h3",
        variant: "h6",
        color: "inherit",
        className: classes.imageTitle,
        children: promo.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 44,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.price,
        component: "h3",
        variant: "h6",
        color: "inherit",
        children: ["$", promo.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, _this), promo.carousel ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
        color: "secondary",
        variant: "outlined",
        onClick: function onClick() {
          setSelectedPromo(promo);
          setOpenCarousel(true);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_15___default.a, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 56,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
        columnNumber: 15
      }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.discount,
        children: [promo.discount, "% OFF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.products,
        children: [promo.products.map(function (product) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
            className: classes.product,
            children: [product.name, " - $", product.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 13
          }, _this);
        }), promo.partialPrice ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: classes.partialPrice,
          children: ["\xA1Ahorr\xE1s ", promo.partialPrice - promo.price, "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 73,
          columnNumber: 15
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 64,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
        color: "secondary",
        variant: "outlined",
        onClick: function onClick() {
          return handleOnAddToCart(promo);
        },
        children: ["Agregar al carrito", getCartItems(promo) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__["default"], {
          className: classes.chip,
          color: "primary",
          label: getCartItems(promo)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 15
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 7
    }, _this)
  }, promo.name, false, {
    fileName: _jsxFileName,
    lineNumber: 41,
    columnNumber: 5
  }, _this);
};

_s(PromoItem, "8pC8dvdb18f5gv/FH/yeP7JAk1g=", false, function () {
  return [useStyles, _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["useCart"]];
});

_c = PromoItem;
/* harmony default export */ __webpack_exports__["default"] = (PromoItem);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  var _title;

  return {
    root: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(4)
    },
    title: (_title = {
      fontSize: '18px',
      fontWeight: 700
    }, Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, theme.breakpoints.up('sm'), {
      fontSize: '30px'
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, "marginBottom", theme.spacing(4)), _title),
    backdrop: {
      width: '100%',
      height: '100%',
      backgroundColor: '#00000055',
      position: 'absolute',
      top: 0,
      left: 0
    },
    imageSrc: {
      width: '100%',
      height: '100%',
      padding: theme.spacing(3, 0),
      backgroundSize: 'cover',
      backgroundPosition: 'center center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
      position: 'relative',
      '&:hover': {
        opacity: 0.9
      }
    },
    imageTitle: {
      position: 'relative',
      color: 'white',
      width: '100%',
      textAlign: 'center',
      padding: "".concat(theme.spacing(2), "px ").concat(theme.spacing(4), "px 14px")
    },
    price: {
      fontSize: '30px',
      color: 'white',
      width: '100%',
      textAlign: 'center',
      zIndex: 3
    },
    discount: {
      fontSize: '25px',
      color: 'white',
      width: '100%',
      textAlign: 'center',
      zIndex: 3
    },
    products: {
      margin: theme.spacing(2, 0),
      zIndex: 3
    },
    product: {
      color: 'white',
      zIndex: 3
    },
    partialPrice: {
      color: 'white',
      marginTop: theme.spacing(3),
      zIndex: 3,
      textAlign: 'center',
      fontSize: '20px'
    },
    chip: {
      position: 'absolute',
      right: -20,
      top: -20,
      marginLeft: theme.spacing(2)
    }
  };
});

var _c;

$RefreshReg$(_c, "PromoItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0l0ZW0uanMiXSwibmFtZXMiOlsiUHJvbW9JdGVtIiwicHJvbW8iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidXNlQ2FydCIsImNhcnRTdGF0ZSIsImNhcnREaXNwYXRjaCIsInVzZVN0YXRlIiwib3BlbkNhcm91c2VsIiwic2V0T3BlbkNhcm91c2VsIiwic2VsZWN0ZWRQcm9tbyIsInNldFNlbGVjdGVkUHJvbW8iLCJoYW5kbGVPbkFkZFRvQ2FydCIsInR5cGUiLCJDYXJ0QWN0aW9uVHlwZSIsIkFERF9JVEVNIiwicGF5bG9hZCIsImdldENhcnRJdGVtcyIsIml0ZW0iLCJpdGVtcyIsImZpbHRlciIsImlkIiwiYW1vdW50IiwiY29scyIsImltYWdlU3JjIiwiYmFja2dyb3VuZEltYWdlIiwicGljdHVyZSIsImJhY2tkcm9wIiwiaW1hZ2VUaXRsZSIsIm5hbWUiLCJwcmljZSIsImNhcm91c2VsIiwiZGlzY291bnQiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJwYXJ0aWFsUHJpY2UiLCJjaGlwIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3BhY2l0eSIsImNvbG9yIiwidGV4dEFsaWduIiwiekluZGV4IiwibWFyZ2luIiwicmlnaHQiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUUsQ0FBQyxFQUhGO0FBSUplLGdCQUFVLEVBQUU3QixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBSlI7QUF4RWlDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjhlOWQyMjUwODYyYTM3ZmRiMjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VQcm9tbywgQWN0aW9uVHlwZSBhcyBQcm9tb0FjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Qcm9tby5jb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VDYXJ0LCBBY3Rpb25UeXBlIGFzIENhcnRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQ2FydC5jb250ZXh0J1xyXG5cclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi92aWV3cy9DYXJvdXNlbCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nXHJcblxyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHknXHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuY29uc3QgUHJvbW9JdGVtID0gKHsgcHJvbW8gfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IFtjYXJ0U3RhdGUsIGNhcnREaXNwYXRjaF0gPSB1c2VDYXJ0KClcclxuICBcclxuICBjb25zdCBbb3BlbkNhcm91c2VsLCBzZXRPcGVuQ2Fyb3VzZWxdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2VsZWN0ZWRQcm9tbywgc2V0U2VsZWN0ZWRQcm9tb10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkFkZFRvQ2FydCA9IChwcm9tbykgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGUuQUREX0lURU0sXHJcbiAgICAgIHBheWxvYWQ6IHByb21vLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENhcnRJdGVtcyA9IChwcm9tbykgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IGNhcnRTdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9tby5pZClcclxuICAgIHJldHVybiBpdGVtWzBdPy5hbW91bnRcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBrZXk9e3Byb21vLm5hbWV9IGl0ZW0geHM9ezEyfSBtZD17K3Byb21vLmNvbHN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY30gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cHJvbW8ucGljdHVyZX0pYH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfT48L2Rpdj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfSA+XHJcbiAgICAgICAgICB7cHJvbW8ubmFtZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnByaWNlfSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgJHtwcm9tby5wcmljZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7cHJvbW8uY2Fyb3VzZWxcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRQcm9tbyhwcm9tbylcclxuICAgICAgICAgICAgICAgIHNldE9wZW5DYXJvdXNlbCh0cnVlKVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZGlzY291bnR9PlxyXG4gICAgICAgICAge3Byb21vLmRpc2NvdW50fSUgT0ZGXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RzfT5cclxuICAgICAgICAgIHtwcm9tby5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3R9PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvbW8ucGFydGlhbFByaWNlXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFydGlhbFByaWNlfT5cclxuICAgICAgICAgICAgICAgIMKhQWhvcnLDoXMge3Byb21vLnBhcnRpYWxQcmljZSAtIHByb21vLnByaWNlfSFcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPbkFkZFRvQ2FydChwcm9tbyl9PlxyXG4gICAgICAgICAgQWdyZWdhciBhbCBjYXJyaXRvXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldENhcnRJdGVtcyhwcm9tbylcclxuICAgICAgICAgICAgPyA8Q2hpcCBjbGFzc05hbWU9e2NsYXNzZXMuY2hpcH0gY29sb3I9XCJwcmltYXJ5XCIgbGFiZWw9e2dldENhcnRJdGVtcyhwcm9tbyl9IC8+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb21vSXRlbVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgYmFja2Ryb3A6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDA1NScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgfSxcclxuICBpbWFnZVNyYzoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAwKSxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuOSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZVRpdGxlOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nKDIpfXB4ICR7dGhlbWUuc3BhY2luZyg0KX1weCAxNHB4YCxcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHpJbmRleDogMyxcclxuICB9LFxyXG4gIGRpc2NvdW50OiB7XHJcbiAgICBmb250U2l6ZTogJzI1cHgnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHpJbmRleDogMyxcclxuICB9LFxyXG4gIHByb2R1Y3RzOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCksXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBwcm9kdWN0OiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHpJbmRleDogMyxcclxuICB9LFxyXG4gIHBhcnRpYWxQcmljZToge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZm9udFNpemU6ICcyMHB4JyxcclxuICB9LFxyXG4gIGNoaXA6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcmlnaHQ6IC0yMCxcclxuICAgIHRvcDogLTIwLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9XHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=