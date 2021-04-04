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
      width: '100%',
      margin: '0 auto'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SXRlbS5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0SXRlbSIsInByb2R1Y3QiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwidXNlQ2FydCIsImNhcnRTdGF0ZSIsImNhcnREaXNwYXRjaCIsInVzZVN0YXRlIiwic2VsZWN0ZWRJbWFnZSIsInNldFNlbGVjdGVkSW1hZ2UiLCJmdWxsU2NyZWVuSW1hZ2UiLCJzZXRGdWxsU2NyZWVuSW1hZ2UiLCJnZXRDYXJ0SXRlbXMiLCJpdGVtIiwiaXRlbXMiLCJmaWx0ZXIiLCJpZCIsImFtb3VudCIsImhhbmRsZU9uQWRkVG9DYXJ0IiwidHlwZSIsIkNhcnRBY3Rpb25UeXBlIiwiQUREX0lURU0iLCJwYXlsb2FkIiwiaGFuZGxlRnVsbFNpemVJbWFnZSIsImltYWdlIiwiYmFja2Ryb3AiLCJiYWNrZHJvcEltYWdlIiwiYmFja2Ryb3BJbWFnZUltZyIsImNvbHMiLCJjYXJkIiwicGljdHVyZSIsIm1lZGlhIiwibmFtZSIsInByaWNlIiwicHJvZHVjdFR5cGUiLCJwcm9kdWN0VHlwZXMiLCJkZXNjcmlwdGlvbiIsImNoaXAiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJ6SW5kZXgiLCJkcmF3ZXIiLCJjb2xvciIsImhlaWdodCIsIndpZHRoIiwib3ZlcmZsb3ciLCJtYXJnaW4iLCJicmVha3BvaW50cyIsInVwIiwib2JqZWN0Rml0IiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJqdXN0aWZ5Q29udGVudCIsInJpZ2h0IiwidG9wIiwicG9zaXRpb24iLCJtYXJnaW5MZWZ0Iiwic3BhY2luZyIsImZvbnRXZWlnaHQiLCJmb250U2l6ZSIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FB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LEVBQUU7QUFDTFksWUFBTSxFQUFFO0FBREgsS0EvQmdDO0FBa0N2Q1YsU0FBSyxFQUFFO0FBQ0wsZUFBTyxPQURGO0FBRUx5QixnQkFBVSxFQUFFO0FBRlAsS0FsQ2dDO0FBc0N2QzFCLFFBQUk7QUFDRlksV0FBSyxFQUFFLEtBREw7QUFFRmUsY0FBUSxFQUFFO0FBRlIsd0xBR0RwQixLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSEMsRUFHNEI7QUFDNUJXLGNBQVEsRUFBRTtBQURrQixLQUg1QixvTUFNWSxDQU5aLFNBdENtQztBQThDdkN6QixlQUFXLEVBQUU7QUFDWHlCLGNBQVEsRUFBRSxFQURDO0FBRVhDLGtCQUFZLEVBQUVyQixLQUFLLENBQUNrQixPQUFOLENBQWMsQ0FBZDtBQUZIO0FBOUMwQixHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lMTM1MmU4N2YyYjYxODdmYTUxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBCYWNrZHJvcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CYWNrZHJvcCdcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCdcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJ1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJ1xyXG5cclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSBhcyBDYXJ0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuXHJcbmltcG9ydCB7IHByb2R1Y3RUeXBlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NhdGFsb2cnXHJcblxyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5cclxuY29uc3QgUHJvZHVjdEl0ZW0gPSAoeyBwcm9kdWN0IH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBbY2FydFN0YXRlLCBjYXJ0RGlzcGF0Y2hdID0gdXNlQ2FydCgpXHJcbiAgY29uc3QgW3NlbGVjdGVkSW1hZ2UsIHNldFNlbGVjdGVkSW1hZ2VdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2Z1bGxTY3JlZW5JbWFnZSwgc2V0RnVsbFNjcmVlbkltYWdlXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG5cclxuICBjb25zdCBnZXRDYXJ0SXRlbXMgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IGNhcnRTdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKVxyXG4gICAgcmV0dXJuIGl0ZW1bMF0/LmFtb3VudFxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT25BZGRUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGUuQUREX0lURU0sXHJcbiAgICAgIHBheWxvYWQ6IHByb2R1Y3QsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlRnVsbFNpemVJbWFnZSA9IChpbWFnZSkgPT4ge1xyXG4gICAgc2V0U2VsZWN0ZWRJbWFnZShpbWFnZSlcclxuICAgIHNldEZ1bGxTY3JlZW5JbWFnZSh0cnVlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuKFxyXG4gICAgPD5cclxuICAgICAgPEJhY2tkcm9wIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZHJvcH0gb3Blbj17ZnVsbFNjcmVlbkltYWdlfSBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsU2NyZWVuSW1hZ2UoZmFsc2UpfT5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZHJvcEltYWdlfT5cclxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wSW1hZ2VJbWd9IHNyYz17c2VsZWN0ZWRJbWFnZX0gLz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9CYWNrZHJvcD5cclxuICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXsrcHJvZHVjdC5jb2xzfT5cclxuICAgICAgICA8Q2FyZCBjbGFzc05hbWU9e2NsYXNzZXMuY2FyZH0+XHJcbiAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWEgb25DbGljaz17KCkgPT4gaGFuZGxlRnVsbFNpemVJbWFnZShwcm9kdWN0LnBpY3R1cmUpfT5cclxuICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICBpbWFnZT17cHJvZHVjdC5waWN0dXJlfVxyXG4gICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucHJpY2V9IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgJHtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMubmFtZX0gZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdFR5cGV9IGNvbG9yPVwidGV4dFNlY29uZGFyeVwiPlxyXG4gICAgICAgICAgICAgICAgICB7cHJvZHVjdFR5cGVzW3Byb2R1Y3QudHlwZV19XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPbkFkZFRvQ2FydChwcm9kdWN0KX0+XHJcbiAgICAgICAgICAgICAgQWdyZWdhciBhbCBjYXJyaXRvXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgZ2V0Q2FydEl0ZW1zKHByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICA/IDxDaGlwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwfSBjb2xvcj1cInByaW1hcnlcIiBsYWJlbD17Z2V0Q2FydEl0ZW1zKHByb2R1Y3QpfSAvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgPC9DYXJkPlxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8Lz5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb2R1Y3RJdGVtXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBiYWNrZHJvcDoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgfSxcclxuICBiYWNrZHJvcEltYWdlOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBvdmVyZmxvdzogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgYmFja2Ryb3BJbWFnZUltZzoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1hcmdpbjogJzAgYXV0bycsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzcwMHB4JyxcclxuICAgICAgb2JqZWN0Rml0OiAnY29udGFpbidcclxuICAgIH1cclxuICB9LFxyXG4gIGNhcmQ6IHtcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgcmlnaHQ6IC0yMCxcclxuICAgIHRvcDogLTIwLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIGhlaWdodDogMTQwLFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gIH0sXHJcbiAgbmFtZToge1xyXG4gICAgd2lkdGg6ICc3MCUnLFxyXG4gICAgZm9udFNpemU6ICcxNnB4JyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICcyNHB4JyxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgfSxcclxuICBwcm9kdWN0VHlwZToge1xyXG4gICAgZm9udFNpemU6IDEyLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gIH0sXHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=