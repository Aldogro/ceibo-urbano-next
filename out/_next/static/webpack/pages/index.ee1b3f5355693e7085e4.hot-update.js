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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [selectedPromo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_views_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      open: openCarousel,
      setOpen: setOpenCarousel,
      images: selectedPromo.carousel
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 11
    }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
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
          lineNumber: 49,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
          component: "h3",
          variant: "h6",
          color: "inherit",
          className: classes.imageTitle,
          children: promo.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: classes.price,
          component: "h3",
          variant: "h6",
          color: "inherit",
          children: ["$", promo.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, _this), promo.carousel ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
          color: "secondary",
          variant: "outlined",
          onClick: function onClick() {
            setSelectedPromo(promo);
            setOpenCarousel(true);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_15___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 62,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 17
        }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
          className: classes.discount,
          children: [promo.discount, "% OFF"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 67,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.products,
          children: [promo.products.map(function (product) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
              className: classes.product,
              children: [product.name, " - $", product.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this);
          }), promo.partialPrice ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
            className: classes.partialPrice,
            children: ["\xA1Ahorr\xE1s ", promo.partialPrice - promo.price, "!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 17
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
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
            lineNumber: 89,
            columnNumber: 17
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 85,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 9
      }, _this)
    }, promo.name, false, {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0l0ZW0uanMiXSwibmFtZXMiOlsiUHJvbW9JdGVtIiwicHJvbW8iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidXNlQ2FydCIsImNhcnRTdGF0ZSIsImNhcnREaXNwYXRjaCIsInVzZVN0YXRlIiwib3BlbkNhcm91c2VsIiwic2V0T3BlbkNhcm91c2VsIiwic2VsZWN0ZWRQcm9tbyIsInNldFNlbGVjdGVkUHJvbW8iLCJoYW5kbGVPbkFkZFRvQ2FydCIsInR5cGUiLCJDYXJ0QWN0aW9uVHlwZSIsIkFERF9JVEVNIiwicGF5bG9hZCIsImdldENhcnRJdGVtcyIsIml0ZW0iLCJpdGVtcyIsImZpbHRlciIsImlkIiwiYW1vdW50IiwiY2Fyb3VzZWwiLCJjb2xzIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwaWN0dXJlIiwiYmFja2Ryb3AiLCJpbWFnZVRpdGxlIiwibmFtZSIsInByaWNlIiwiZGlzY291bnQiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJwYXJ0aWFsUHJpY2UiLCJjaGlwIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3BhY2l0eSIsImNvbG9yIiwidGV4dEFsaWduIiwiekluZGV4IiwibWFyZ2luIiwicmlnaHQiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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QUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkLENBRkM7QUFHWnVCLFlBQU0sRUFBRSxDQUhJO0FBSVpELGVBQVMsRUFBRSxRQUpDO0FBS1puQixjQUFRLEVBQUU7QUFMRSxLQWpFeUI7QUF3RXZDUixRQUFJLEVBQUU7QUFDSmUsY0FBUSxFQUFFLFVBRE47QUFFSmUsV0FBSyxFQUFFLENBQUMsRUFGSjtBQUdKZCxTQUFHLEVBQUUsQ0FBQyxFQUhGO0FBSUplLGdCQUFVLEVBQUU3QixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBSlI7QUF4RWlDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmVlMWIzZjUzNTU2OTNlNzA4NWU0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VQcm9tbywgQWN0aW9uVHlwZSBhcyBQcm9tb0FjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Qcm9tby5jb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VDYXJ0LCBBY3Rpb25UeXBlIGFzIENhcnRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQ2FydC5jb250ZXh0J1xyXG5cclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi92aWV3cy9DYXJvdXNlbCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nXHJcblxyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHknXHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuY29uc3QgUHJvbW9JdGVtID0gKHsgcHJvbW8gfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IFtjYXJ0U3RhdGUsIGNhcnREaXNwYXRjaF0gPSB1c2VDYXJ0KClcclxuICBcclxuICBjb25zdCBbb3BlbkNhcm91c2VsLCBzZXRPcGVuQ2Fyb3VzZWxdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2VsZWN0ZWRQcm9tbywgc2V0U2VsZWN0ZWRQcm9tb10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkFkZFRvQ2FydCA9IChwcm9tbykgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGUuQUREX0lURU0sXHJcbiAgICAgIHBheWxvYWQ6IHByb21vLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENhcnRJdGVtcyA9IChwcm9tbykgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IGNhcnRTdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9tby5pZClcclxuICAgIHJldHVybiBpdGVtWzBdPy5hbW91bnRcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICB7XHJcbiAgICAgICAgc2VsZWN0ZWRQcm9tb1xyXG4gICAgICAgID8gPENhcm91c2VsIG9wZW49e29wZW5DYXJvdXNlbH0gc2V0T3Blbj17c2V0T3BlbkNhcm91c2VsfSBpbWFnZXM9e3NlbGVjdGVkUHJvbW8uY2Fyb3VzZWx9IC8+XHJcbiAgICAgICAgOiAnJ1xyXG4gICAgICB9XHJcbiAgICAgIDxHcmlkIGtleT17cHJvbW8ubmFtZX0gaXRlbSB4cz17MTJ9IG1kPXsrcHJvbW8uY29sc30+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb21vLnBpY3R1cmV9KWB9fT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfT48L2Rpdj5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9ID5cclxuICAgICAgICAgICAge3Byb21vLm5hbWV9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucHJpY2V9IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgICR7cHJvbW8ucHJpY2V9XHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIHtwcm9tby5jYXJvdXNlbFxyXG4gICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICBzZXRTZWxlY3RlZFByb21vKHByb21vKVxyXG4gICAgICAgICAgICAgICAgICBzZXRPcGVuQ2Fyb3VzZWwodHJ1ZSlcclxuICAgICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgICA8VmlzaWJpbGl0eUljb24gLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZGlzY291bnR9PlxyXG4gICAgICAgICAgICB7cHJvbW8uZGlzY291bnR9JSBPRkZcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RzfT5cclxuICAgICAgICAgICAge3Byb21vLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0fT5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBwcm9tby5wYXJ0aWFsUHJpY2VcclxuICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFydGlhbFByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgwqFBaG9ycsOhcyB7cHJvbW8ucGFydGlhbFByaWNlIC0gcHJvbW8ucHJpY2V9IVxyXG4gICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPbkFkZFRvQ2FydChwcm9tbyl9PlxyXG4gICAgICAgICAgICBBZ3JlZ2FyIGFsIGNhcnJpdG9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGdldENhcnRJdGVtcyhwcm9tbylcclxuICAgICAgICAgICAgICA/IDxDaGlwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwfSBjb2xvcj1cInByaW1hcnlcIiBsYWJlbD17Z2V0Q2FydEl0ZW1zKHByb21vKX0gLz5cclxuICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvbW9JdGVtXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICBiYWNrZHJvcDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMDU1JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICB9LFxyXG4gIGltYWdlU3JjOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDApLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMC45LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlVGl0bGU6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDQpfXB4IDE0cHhgLFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgZGlzY291bnQ6IHtcclxuICAgIGZvbnRTaXplOiAnMjVweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcHJvZHVjdHM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwKSxcclxuICAgIHpJbmRleDogMyxcclxuICB9LFxyXG4gIHByb2R1Y3Q6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcGFydGlhbFByaWNlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIHpJbmRleDogMyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICByaWdodDogLTIwLFxyXG4gICAgdG9wOiAtMjAsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH1cclxufSkpIl0sInNvdXJjZVJvb3QiOiIifQ==