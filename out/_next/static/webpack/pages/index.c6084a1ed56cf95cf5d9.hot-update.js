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
/* harmony import */ var _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Cart.context */ "./services/Cart.context.js");
/* harmony import */ var _views_Carousel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../views/Carousel */ "./modules/views/Carousel.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");





var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\PromoItem.js",
    _this = undefined,
    _s = $RefreshSig$();












var PromoItem = function PromoItem(_ref) {
  _s();

  var promo = _ref.promo;
  var classes = useStyles();

  var _useCart = Object(_services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["useCart"])(),
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
      type: _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["ActionType"].ADD_ITEM,
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
    children: [selectedPromo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_views_Carousel__WEBPACK_IMPORTED_MODULE_5__["default"], {
      open: openCarousel,
      setOpen: setOpenCarousel,
      images: selectedPromo.carousel
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 11
    }, _this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          component: "h3",
          variant: "h6",
          color: "inherit",
          className: classes.imageTitle,
          children: promo.name
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: classes.price,
          component: "h3",
          variant: "h6",
          color: "inherit",
          children: ["$", promo.price]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), promo.carousel ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_10__["default"], {
          color: "secondary",
          variant: "outlined",
          onClick: function onClick() {
            setSelectedPromo(promo);
            setOpenCarousel(true);
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_11___default.a, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 17
        }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
          className: classes.discount,
          children: [promo.discount, "% OFF"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 61,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.products,
          children: [promo.products.map(function (product) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
              className: classes.product,
              children: [product.name, " - $", product.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, _this);
          }), promo.partialPrice ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.partialPrice,
            children: ["\xA1Ahorr\xE1s ", promo.partialPrice - promo.price, "!"]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 17
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
          color: "secondary",
          variant: "outlined",
          onClick: function onClick() {
            return handleOnAddToCart(promo);
          },
          children: ["Agregar al carrito", getCartItems(promo) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: classes.chip,
            color: "primary",
            label: getCartItems(promo)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 83,
            columnNumber: 17
          }, _this) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 79,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 9
      }, _this)
    }, promo.name, false, {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(PromoItem, "8pC8dvdb18f5gv/FH/yeP7JAk1g=", false, function () {
  return [useStyles, _services_Cart_context__WEBPACK_IMPORTED_MODULE_4__["useCart"]];
});

_c = PromoItem;
/* harmony default export */ __webpack_exports__["default"] = (PromoItem);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0l0ZW0uanMiXSwibmFtZXMiOlsiUHJvbW9JdGVtIiwicHJvbW8iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidXNlQ2FydCIsImNhcnRTdGF0ZSIsImNhcnREaXNwYXRjaCIsInVzZVN0YXRlIiwib3BlbkNhcm91c2VsIiwic2V0T3BlbkNhcm91c2VsIiwic2VsZWN0ZWRQcm9tbyIsInNldFNlbGVjdGVkUHJvbW8iLCJoYW5kbGVPbkFkZFRvQ2FydCIsInR5cGUiLCJDYXJ0QWN0aW9uVHlwZSIsIkFERF9JVEVNIiwicGF5bG9hZCIsImdldENhcnRJdGVtcyIsIml0ZW0iLCJpdGVtcyIsImZpbHRlciIsImlkIiwiYW1vdW50IiwiY2Fyb3VzZWwiLCJjb2xzIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwaWN0dXJlIiwiYmFja2Ryb3AiLCJpbWFnZVRpdGxlIiwibmFtZSIsInByaWNlIiwiZGlzY291bnQiLCJwcm9kdWN0cyIsIm1hcCIsInByb2R1Y3QiLCJwYXJ0aWFsUHJpY2UiLCJjaGlwIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJ0aXRsZSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3BhY2l0eSIsImNvbG9yIiwidGV4dEFsaWduIiwiekluZGV4IiwibWFyZ2luIiwicmlnaHQiLCJtYXJnaW5MZWZ0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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LFlBQU0sRUFBRSxDQUhJO0FBSVpELGVBQVMsRUFBRSxRQUpDO0FBS1puQixjQUFRLEVBQUU7QUFMRSxLQWpFeUI7QUF3RXZDUixRQUFJLEVBQUU7QUFDSmUsY0FBUSxFQUFFLFVBRE47QUFFSmUsV0FBSyxFQUFFLENBQUMsRUFGSjtBQUdKZCxTQUFHLEVBQUUsQ0FBQyxFQUhGO0FBSUplLGdCQUFVLEVBQUU3QixLQUFLLENBQUNHLE9BQU4sQ0FBYyxDQUFkO0FBSlI7QUF4RWlDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmM2MDg0YTFlZDU2Y2Y5NWNmNWQ5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSBhcyBDYXJ0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICcuLi92aWV3cy9DYXJvdXNlbCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuXHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eSdcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCBQcm9tb0l0ZW0gPSAoeyBwcm9tbyB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgW2NhcnRTdGF0ZSwgY2FydERpc3BhdGNoXSA9IHVzZUNhcnQoKVxyXG4gIFxyXG4gIGNvbnN0IFtvcGVuQ2Fyb3VzZWwsIHNldE9wZW5DYXJvdXNlbF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtzZWxlY3RlZFByb21vLCBzZXRTZWxlY3RlZFByb21vXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQWRkVG9DYXJ0ID0gKHByb21vKSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZS5BRERfSVRFTSxcclxuICAgICAgcGF5bG9hZDogcHJvbW8sXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2FydEl0ZW1zID0gKHByb21vKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gY2FydFN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHByb21vLmlkKVxyXG4gICAgcmV0dXJuIGl0ZW1bMF0/LmFtb3VudFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDw+XHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RlZFByb21vXHJcbiAgICAgICAgPyA8Q2Fyb3VzZWwgb3Blbj17b3BlbkNhcm91c2VsfSBzZXRPcGVuPXtzZXRPcGVuQ2Fyb3VzZWx9IGltYWdlcz17c2VsZWN0ZWRQcm9tby5jYXJvdXNlbH0gLz5cclxuICAgICAgICA6ICcnXHJcbiAgICAgIH1cclxuICAgICAgPEdyaWQga2V5PXtwcm9tby5uYW1lfSBpdGVtIHhzPXsxMn0gbWQ9eytwcm9tby5jb2xzfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY30gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cHJvbW8ucGljdHVyZX0pYH19PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2Ryb3B9PjwvZGl2PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgY29tcG9uZW50PVwiaDNcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VUaXRsZX0gPlxyXG4gICAgICAgICAgICB7cHJvbW8ubmFtZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmljZX0gY29tcG9uZW50PVwiaDNcIiB2YXJpYW50PVwiaDZcIiBjb2xvcj1cImluaGVyaXRcIj5cclxuICAgICAgICAgICAgJHtwcm9tby5wcmljZX1cclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAge3Byb21vLmNhcm91c2VsXHJcbiAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHNldFNlbGVjdGVkUHJvbW8ocHJvbW8pXHJcbiAgICAgICAgICAgICAgICAgIHNldE9wZW5DYXJvdXNlbCh0cnVlKVxyXG4gICAgICAgICAgICAgICAgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxWaXNpYmlsaXR5SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5kaXNjb3VudH0+XHJcbiAgICAgICAgICAgIHtwcm9tby5kaXNjb3VudH0lIE9GRlxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdHN9PlxyXG4gICAgICAgICAgICB7cHJvbW8ucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3R9PlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX0gLSAke3Byb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIHByb21vLnBhcnRpYWxQcmljZVxyXG4gICAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXJ0aWFsUHJpY2V9PlxyXG4gICAgICAgICAgICAgICAgICDCoUFob3Jyw6FzIHtwcm9tby5wYXJ0aWFsUHJpY2UgLSBwcm9tby5wcmljZX0hXHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9uQWRkVG9DYXJ0KHByb21vKX0+XHJcbiAgICAgICAgICAgIEFncmVnYXIgYWwgY2Fycml0b1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgZ2V0Q2FydEl0ZW1zKHByb21vKVxyXG4gICAgICAgICAgICAgID8gPENoaXAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoaXB9IGNvbG9yPVwicHJpbWFyeVwiIGxhYmVsPXtnZXRDYXJ0SXRlbXMocHJvbW8pfSAvPlxyXG4gICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC8+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBQcm9tb0l0ZW1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIGJhY2tkcm9wOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwNTUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gIH0sXHJcbiAgaW1hZ2VTcmM6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMCksXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VUaXRsZToge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggMTRweGAsXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBkaXNjb3VudDoge1xyXG4gICAgZm9udFNpemU6ICcyNXB4JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBwcm9kdWN0czoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcHJvZHVjdDoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBwYXJ0aWFsUHJpY2U6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgekluZGV4OiAzLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgfSxcclxuICBjaGlwOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHJpZ2h0OiAtMjAsXHJcbiAgICB0b3A6IC0yMCxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfVxyXG59KSkiXSwic291cmNlUm9vdCI6IiJ9