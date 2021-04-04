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
        lineNumber: 40,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        component: "h3",
        variant: "h6",
        color: "inherit",
        className: classes.imageTitle,
        children: promo.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 41,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.price,
        component: "h3",
        variant: "h6",
        color: "inherit",
        children: ["$", promo.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 44,
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
          lineNumber: 53,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 15
      }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
        className: classes.discount,
        children: [promo.discount, "% OFF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.products,
        children: [promo.products.map(function (product) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
            className: classes.product,
            children: [product.name, " - $", product.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 13
          }, _this);
        }), promo.partialPrice ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: classes.partialPrice,
          children: ["\xA1Ahorr\xE1s ", promo.partialPrice - promo.price, "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 15
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
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
          lineNumber: 80,
          columnNumber: 15
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 76,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, _this)
  }, promo.name, false, {
    fileName: _jsxFileName,
    lineNumber: 38,
    columnNumber: 5
  }, _this);
};

_s(PromoItem, "DkxsFNs38eKtK4XVbb2FpPkfvjE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0l0ZW0uanMiXSwibmFtZXMiOlsiUHJvbW9JdGVtIiwicHJvbW8iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidXNlQ2FydCIsImNhcnRTdGF0ZSIsImNhcnREaXNwYXRjaCIsImhhbmRsZU9uQWRkVG9DYXJ0IiwidHlwZSIsIkNhcnRBY3Rpb25UeXBlIiwiQUREX0lURU0iLCJwYXlsb2FkIiwiZ2V0Q2FydEl0ZW1zIiwiaXRlbSIsIml0ZW1zIiwiZmlsdGVyIiwiaWQiLCJhbW91bnQiLCJjb2xzIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwaWN0dXJlIiwiYmFja2Ryb3AiLCJpbWFnZVRpdGxlIiwibmFtZSIsInByaWNlIiwiY2Fyb3VzZWwiLCJzZXRTZWxlY3RlZFByb21vIiwic2V0T3BlbkNhcm91c2VsIiwiZGlzY291bnQiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJwYXJ0aWFsUHJpY2UiLCJjaGlwIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3BhY2l0eSIsImNvbG9yIiwidGV4dEFsaWduIiwiekluZGV4IiwibWFyZ2luIiwicmlnaHQiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFD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QU4sQ0FBYyxDQUFkLENBQTNCO0FBTEcsS0FwQzJCO0FBMkN2Q2QsU0FBSyxFQUFFO0FBQ0xpQixjQUFRLEVBQUUsTUFETDtBQUVMa0IsV0FBSyxFQUFFLE9BRkY7QUFHTGQsV0FBSyxFQUFFLE1BSEY7QUFJTGUsZUFBUyxFQUFFLFFBSk47QUFLTEMsWUFBTSxFQUFFO0FBTEgsS0EzQ2dDO0FBa0R2Q2pDLFlBQVEsRUFBRTtBQUNSYSxjQUFRLEVBQUUsTUFERjtBQUVSa0IsV0FBSyxFQUFFLE9BRkM7QUFHUmQsV0FBSyxFQUFFLE1BSEM7QUFJUmUsZUFBUyxFQUFFLFFBSkg7QUFLUkMsWUFBTSxFQUFFO0FBTEEsS0FsRDZCO0FBeUR2Q2hDLFlBQVEsRUFBRTtBQUNSaUMsWUFBTSxFQUFFM0IsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQixDQURBO0FBRVJ1QixZQUFNLEVBQUU7QUFGQSxLQXpENkI7QUE2RHZDOUIsV0FBTyxFQUFFO0FBQ1A0QixXQUFLLEVBQUUsT0FEQTtBQUVQRSxZQUFNLEVBQUU7QUFGRCxLQTdEOEI7QUFpRXZDN0IsZ0JBQVksRUFBRTtBQUNaMkIsV0FBSyxFQUFFLE9BREs7QUFFWnRCLGVBQVMsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZCxDQUZDO0FBR1p1QixZQUFNLEVBQUUsQ0FISTtBQUlaRCxlQUFTLEVBQUUsUUFKQztBQUtabkIsY0FBUSxFQUFFO0FBTEUsS0FqRXlCO0FBd0V2Q1IsUUFBSSxFQUFFO0FBQ0plLGNBQVEsRUFBRSxVQUROO0FBRUplLFdBQUssRUFBRSxDQUFDLEVBRko7QUFHSmQsU0FBRyxFQUFFLENBQUMsRUFIRjtBQUlKZSxnQkFBVSxFQUFFN0IsS0FBSyxDQUFDRyxPQUFOLENBQWMsQ0FBZDtBQUpSO0FBeEVpQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5mMDJmZTM0MTE3M2Q4YTIzZjJkMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUHJvbW8sIEFjdGlvblR5cGUgYXMgUHJvbW9BY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvbW8uY29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSBhcyBDYXJ0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuXHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJ1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vdmlld3MvQ2Fyb3VzZWwnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5cclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5J1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmNvbnN0IFByb21vSXRlbSA9ICh7IHByb21vIH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBbY2FydFN0YXRlLCBjYXJ0RGlzcGF0Y2hdID0gdXNlQ2FydCgpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQWRkVG9DYXJ0ID0gKHByb21vKSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZS5BRERfSVRFTSxcclxuICAgICAgcGF5bG9hZDogcHJvbW8sXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2FydEl0ZW1zID0gKHByb21vKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gY2FydFN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHByb21vLmlkKVxyXG4gICAgcmV0dXJuIGl0ZW1bMF0/LmFtb3VudFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxHcmlkIGtleT17cHJvbW8ubmFtZX0gaXRlbSB4cz17MTJ9IG1kPXsrcHJvbW8uY29sc30+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfSBzdHlsZT17eyBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwcm9tby5waWN0dXJlfSlgfX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2Ryb3B9PjwvZGl2PlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9ID5cclxuICAgICAgICAgIHtwcm9tby5uYW1lfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucHJpY2V9IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAke3Byb21vLnByaWNlfVxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIHtwcm9tby5jYXJvdXNlbFxyXG4gICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFByb21vKHByb21vKVxyXG4gICAgICAgICAgICAgICAgc2V0T3BlbkNhcm91c2VsKHRydWUpXHJcbiAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gLz5cclxuICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXNjb3VudH0+XHJcbiAgICAgICAgICB7cHJvbW8uZGlzY291bnR9JSBPRkZcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdHN9PlxyXG4gICAgICAgICAge3Byb21vLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdH0+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX0gLSAke3Byb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICkpfVxyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBwcm9tby5wYXJ0aWFsUHJpY2VcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJ0aWFsUHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgwqFBaG9ycsOhcyB7cHJvbW8ucGFydGlhbFByaWNlIC0gcHJvbW8ucHJpY2V9IVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9uQWRkVG9DYXJ0KHByb21vKX0+XHJcbiAgICAgICAgICBBZ3JlZ2FyIGFsIGNhcnJpdG9cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgZ2V0Q2FydEl0ZW1zKHByb21vKVxyXG4gICAgICAgICAgICA/IDxDaGlwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwfSBjb2xvcj1cInByaW1hcnlcIiBsYWJlbD17Z2V0Q2FydEl0ZW1zKHByb21vKX0gLz5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9HcmlkPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvbW9JdGVtXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICBiYWNrZHJvcDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMDU1JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICB9LFxyXG4gIGltYWdlU3JjOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDApLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMC45LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlVGl0bGU6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDQpfXB4IDE0cHhgLFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgZGlzY291bnQ6IHtcclxuICAgIGZvbnRTaXplOiAnMjVweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcHJvZHVjdHM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwKSxcclxuICAgIHpJbmRleDogMyxcclxuICB9LFxyXG4gIHByb2R1Y3Q6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcGFydGlhbFByaWNlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIHpJbmRleDogMyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICByaWdodDogLTIwLFxyXG4gICAgdG9wOiAtMjAsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH1cclxufSkpIl0sInNvdXJjZVJvb3QiOiIifQ==