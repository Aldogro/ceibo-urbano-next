webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/views/ProductItem.js":
/*!**************************************!*\
  !*** ./modules/views/ProductItem.js ***!
  \**************************************/
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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Backdrop */ "./node_modules/@material-ui/core/esm/Backdrop/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _services_Cart_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../services/Cart.context */ "./services/Cart.context.js");
/* harmony import */ var _utils_catalog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../utils/catalog */ "./utils/catalog.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");





var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\ProductItem.js",
    _this = undefined,
    _s = $RefreshSig$();
















var ProductItem = function ProductItem(_ref) {
  _s();

  var product = _ref.product;
  var classes = useStyles();

  var _useCart = Object(_services_Cart_context__WEBPACK_IMPORTED_MODULE_14__["useCart"])(),
      _useCart2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useCart, 2),
      cartState = _useCart2[0],
      cartDispatch = _useCart2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      selectedImage = _useState[0],
      setSelectedImage = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      fullScreenImage = _useState2[0],
      setFullScreenImage = _useState2[1];

  var getCartItems = function getCartItems(product) {
    var _item$;

    var item = cartState.items.filter(function (item) {
      return item.id === product.id;
    });
    return (_item$ = item[0]) === null || _item$ === void 0 ? void 0 : _item$.amount;
  };

  var handleOnAddToCart = function handleOnAddToCart(product) {
    cartDispatch({
      type: _services_Cart_context__WEBPACK_IMPORTED_MODULE_14__["ActionType"].ADD_ITEM,
      payload: product
    });
  };

  var handleFullSizeImage = function handleFullSizeImage(image) {
    setSelectedImage(image);
    setFullScreenImage(true);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Backdrop__WEBPACK_IMPORTED_MODULE_5__["default"], {
      className: classes.backdrop,
      open: fullScreenImage,
      onClick: function onClick() {
        return setFullScreenImage(false);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
        className: classes.backdropImage,
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          className: classes.backdropImageImg,
          src: selectedImage
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_4__["default"], {
      item: true,
      xs: 12,
      lg: +product.cols,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
        className: classes.card,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
          onClick: function onClick() {
            return handleFullSizeImage(product.picture);
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.media,
            image: product.picture,
            title: product.name
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: classes.price,
              gutterBottom: true,
              variant: "h5",
              component: "h2",
              children: ["$", product.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 58,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: classes.name,
              gutterBottom: true,
              variant: "h5",
              component: "h2",
              children: product.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: classes.productType,
              color: "textSecondary",
              children: _utils_catalog__WEBPACK_IMPORTED_MODULE_15__["productTypes"][product.type]
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              variant: "body2",
              color: "textSecondary",
              component: "p",
              children: product.description
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 11
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__["default"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
            size: "small",
            color: "primary",
            variant: "outlined",
            onClick: function onClick() {
              return handleOnAddToCart(product);
            },
            children: ["Agregar al carrito", getCartItems(product) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_13__["default"], {
              className: classes.chip,
              color: "primary",
              label: getCartItems(product)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 19
            }, _this) : null]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 13
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 72,
          columnNumber: 11
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true);
};

_s(ProductItem, "xqiU9b05QZD7ynWPSTGVYEwG1NI=", false, function () {
  return [useStyles, _services_Cart_context__WEBPACK_IMPORTED_MODULE_14__["useCart"]];
});

_c = ProductItem;
/* harmony default export */ __webpack_exports__["default"] = (ProductItem);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_16__["makeStyles"])(function (theme) {
  var _name;

  return {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    },
    backdropImage: {
      height: '100%',
      width: '100%',
      overflow: 'auto'
    },
    backdropImageImg: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '100%',
      height: '700px',
      objectFit: 'contain'
    }),
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    },
    chip: {
      right: -20,
      top: -20,
      position: 'absolute',
      marginLeft: theme.spacing(2)
    },
    media: {
      height: 140
    },
    price: {
      "float": 'right',
      fontWeight: 700
    },
    name: (_name = {
      width: '70%',
      fontSize: '16px'
    }, Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_name, theme.breakpoints.up('sm'), {
      fontSize: '24px'
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_name, "marginBottom", 0), _name),
    productType: {
      fontSize: 12,
      marginBottom: theme.spacing(1)
    }
  };
});

var _c;

$RefreshReg$(_c, "ProductItem");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SXRlbS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SXRlbSIsInByb2R1Y3QiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidXNlQ2FydCIsImNhcnRTdGF0ZSIsImNhcnREaXNwYXRjaCIsInVzZVN0YXRlIiwic2VsZWN0ZWRJbWFnZSIsInNldFNlbGVjdGVkSW1hZ2UiLCJmdWxsU2NyZWVuSW1hZ2UiLCJzZXRGdWxsU2NyZWVuSW1hZ2UiLCJnZXRDYXJ0SXRlbXMiLCJpdGVtIiwiaXRlbXMiLCJmaWx0ZXIiLCJpZCIsImFtb3VudCIsImhhbmRsZU9uQWRkVG9DYXJ0IiwidHlwZSIsIkNhcnRBY3Rpb25UeXBlIiwiQUREX0lURU0iLCJwYXlsb2FkIiwiaGFuZGxlRnVsbFNpemVJbWFnZSIsImltYWdlIiwiYmFja2Ryb3AiLCJiYWNrZHJvcEltYWdlIiwiYmFja2Ryb3BJbWFnZUltZyIsImNvbHMiLCJjYXJkIiwicGljdHVyZSIsIm1lZGlhIiwibmFtZSIsInByaWNlIiwicHJvZHVjdFR5cGUiLCJwcm9kdWN0VHlwZXMiLCJkZXNjcmlwdGlvbiIsImNoaXAiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwib3ZlcmZsb3ciLCJicmVha3BvaW50cyIsInVwIiwib2JqZWN0Rml0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInJpZ2h0IiwidG9wIiwicG9zaXRpb24iLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFFQTs7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Z0M7QUFpQ3ZDVixTQUFLLEVBQUU7QUFDTCxlQUFPLE9BREY7QUFFTHdCLGdCQUFVLEVBQUU7QUFGUCxLQWpDZ0M7QUFxQ3ZDekIsUUFBSTtBQUNGWSxXQUFLLEVBQUUsS0FETDtBQUVGYyxjQUFRLEVBQUU7QUFGUix3TEFHRG5CLEtBQUssQ0FBQ08sV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FIQyxFQUc0QjtBQUM1QlcsY0FBUSxFQUFFO0FBRGtCLEtBSDVCLG9NQU1ZLENBTlosU0FyQ21DO0FBNkN2Q3hCLGVBQVcsRUFBRTtBQUNYd0IsY0FBUSxFQUFFLEVBREM7QUFFWEMsa0JBQVksRUFBRXBCLEtBQUssQ0FBQ2lCLE9BQU4sQ0FBYyxDQUFkO0FBRkg7QUE3QzBCLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjZhMTkyODY1YWQ2MzgwNTg3Y2Y1LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0JhY2tkcm9wJ1xyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJ1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnXHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJ1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucydcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnXHJcblxyXG5pbXBvcnQgeyB1c2VDYXJ0LCBBY3Rpb25UeXBlIGFzIENhcnRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQ2FydC5jb250ZXh0J1xyXG5cclxuaW1wb3J0IHsgcHJvZHVjdFR5cGVzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY2F0YWxvZydcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5jb25zdCBQcm9kdWN0SXRlbSA9ICh7IHByb2R1Y3QgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IFtjYXJ0U3RhdGUsIGNhcnREaXNwYXRjaF0gPSB1c2VDYXJ0KClcclxuICBjb25zdCBbc2VsZWN0ZWRJbWFnZSwgc2V0U2VsZWN0ZWRJbWFnZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZnVsbFNjcmVlbkltYWdlLCBzZXRGdWxsU2NyZWVuSW1hZ2VdID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IGdldENhcnRJdGVtcyA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gY2FydFN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHByb2R1Y3QuaWQpXHJcbiAgICByZXR1cm4gaXRlbVswXT8uYW1vdW50XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZS5BRERfSVRFTSxcclxuICAgICAgcGF5bG9hZDogcHJvZHVjdCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVGdWxsU2l6ZUltYWdlID0gKGltYWdlKSA9PiB7XHJcbiAgICBzZXRTZWxlY3RlZEltYWdlKGltYWdlKVxyXG4gICAgc2V0RnVsbFNjcmVlbkltYWdlKHRydWUpXHJcbiAgfVxyXG5cclxuICByZXR1cm4oXHJcbiAgICA8PlxyXG4gICAgICA8QmFja2Ryb3AgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfSBvcGVuPXtmdWxsU2NyZWVuSW1hZ2V9IG9uQ2xpY2s9eygpID0+IHNldEZ1bGxTY3JlZW5JbWFnZShmYWxzZSl9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wSW1hZ2V9PlxyXG4gICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2Ryb3BJbWFnZUltZ30gc3JjPXtzZWxlY3RlZEltYWdlfSAvPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0JhY2tkcm9wPlxyXG4gICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9eytwcm9kdWN0LmNvbHN9PlxyXG4gICAgICAgIDxDYXJkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJkfT5cclxuICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYSBvbkNsaWNrPXsoKSA9PiBoYW5kbGVGdWxsU2l6ZUltYWdlKHByb2R1Y3QucGljdHVyZSl9PlxyXG4gICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgIGltYWdlPXtwcm9kdWN0LnBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcmljZX0gZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAke3Byb2R1Y3QucHJpY2V9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5uYW1lfSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0VHlwZX0gY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgIHtwcm9kdWN0VHlwZXNbcHJvZHVjdC50eXBlXX1cclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICA8QnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIHZhcmlhbnQ9XCJvdXRsaW5lZFwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9uQWRkVG9DYXJ0KHByb2R1Y3QpfT5cclxuICAgICAgICAgICAgICBBZ3JlZ2FyIGFsIGNhcnJpdG9cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBnZXRDYXJ0SXRlbXMocHJvZHVjdClcclxuICAgICAgICAgICAgICAgID8gPENoaXAgY2xhc3NOYW1lPXtjbGFzc2VzLmNoaXB9IGNvbG9yPVwicHJpbWFyeVwiIGxhYmVsPXtnZXRDYXJ0SXRlbXMocHJvZHVjdCl9IC8+XHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICA8L0NhcmQ+XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgUHJvZHVjdEl0ZW1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGJhY2tkcm9wOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICB9LFxyXG4gIGJhY2tkcm9wSW1hZ2U6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG92ZXJmbG93OiAnYXV0bycsXHJcbiAgfSxcclxuICBiYWNrZHJvcEltYWdlSW1nOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgICBoZWlnaHQ6ICc3MDBweCcsXHJcbiAgICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nXHJcbiAgICB9XHJcbiAgfSxcclxuICBjYXJkOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICB9LFxyXG4gIGNoaXA6IHtcclxuICAgIHJpZ2h0OiAtMjAsXHJcbiAgICB0b3A6IC0yMCxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IDE0MCxcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICB9LFxyXG4gIG5hbWU6IHtcclxuICAgIHdpZHRoOiAnNzAlJyxcclxuICAgIGZvbnRTaXplOiAnMTZweCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMjRweCcsXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luQm90dG9tOiAwLFxyXG4gIH0sXHJcbiAgcHJvZHVjdFR5cGU6IHtcclxuICAgIGZvbnRTaXplOiAxMixcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygxKSxcclxuICB9LFxyXG59KSkiXSwic291cmNlUm9vdCI6IiJ9