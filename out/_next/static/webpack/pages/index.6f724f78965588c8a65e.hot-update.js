webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/views/ProductCategories.js":
/*!********************************************!*\
  !*** ./modules/views/ProductCategories.js ***!
  \********************************************/
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
/* harmony import */ var _services_Product_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Product.context */ "./services/Product.context.js");
/* harmony import */ var _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/Cart.context */ "./services/Cart.context.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\ProductCategories.js",
    _s = $RefreshSig$();



















function ProductCategories(props) {
  _s();

  var _this = this;

  var classes = props.classes;

  var _useProduct = Object(_services_Product_context__WEBPACK_IMPORTED_MODULE_5__["useProduct"])(),
      _useProduct2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useProduct, 2),
      productState = _useProduct2[0],
      productDispatch = _useProduct2[1];

  var _useCart = Object(_services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["useCart"])(),
      _useCart2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useCart, 2),
      cartState = _useCart2[0],
      cartDispatch = _useCart2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      fullScreenImage = _useState[0],
      setFullScreenImage = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getProducts();
  }, []);

  var getProducts = function getProducts() {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_19__["default"].firestore().collection('products').get().then(function (snapshot) {
      return productDispatch({
        type: _services_Product_context__WEBPACK_IMPORTED_MODULE_5__["ActionType"].SET_PRODUCTS,
        payload: snapshot.docs.map(function (doc) {
          return doc.data();
        })
      });
    });
  };

  var handleOnAddToCart = function handleOnAddToCart(product) {
    cartDispatch({
      type: _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["ActionType"].ADD_ITEM,
      payload: product
    });
  };

  var getCartItems = function getCartItems(product) {
    var _item$;

    var item = cartState.items.filter(function (item) {
      return item.id === product.id;
    });
    return (_item$ = item[0]) === null || _item$ === void 0 ? void 0 : _item$.amount;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_15__["default"], {
    className: classes.root,
    component: "section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
      variant: "h4",
      marked: "center",
      align: "center",
      component: "h2",
      children: "\xA1Aprovech\xE1 todas nuestros productos!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      container: true,
      spacing: 2,
      children: productState.products.map(function (product) {
        return product.publish ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          lg: +product.cols,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__["default"], {
              onClick: function onClick() {
                return console.log(product);
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__["default"], {
                className: classes.media,
                image: product.picture,
                title: product.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: product.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 69,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: product.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 72,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 68,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_13__["default"], {
                size: "small",
                color: "primary",
                onClick: function onClick() {
                  return handleOnAddToCart(product);
                },
                children: ["Agregar al carrito", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_14___default.a, {
                  color: "primary",
                  className: classes.chip
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 17
              }, _this), getCartItems(product) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], {
                className: classes.chip,
                color: "primary",
                label: getCartItems(product)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 21
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this)
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 11
        }, _this) : null;
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Backdrop, {
      className: classes.backdrop,
      open: fullScreenImage,
      onClick: function onClick() {
        return setFullScreenImage(false);
      },
      children: "a veeeeeeeeeeeeeeeeeeeeeee"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 93,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_s(ProductCategories, "OT8ps4f1awU0wp9+R3dOuKW7YXs=", false, function () {
  return [_services_Product_context__WEBPACK_IMPORTED_MODULE_5__["useProduct"], _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["useCart"]];
});

_c = ProductCategories;
ProductCategories.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_18___default.a.object.isRequired
};

var styles = function styles(theme) {
  var _imageWrapper;

  return {
    root: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(4)
    },
    images: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexWrap: 'wrap'
    },
    imageWrapper: (_imageWrapper = {
      position: 'relative',
      display: 'block',
      padding: 0,
      borderRadius: 0,
      height: '40vh'
    }, Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageWrapper, theme.breakpoints.down('sm'), {
      width: '100% !important'
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageWrapper, '&:hover', {
      zIndex: 1
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageWrapper, '&:hover $imageBackdrop', {
      opacity: 0.15
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageWrapper, '&:hover $imageMarked', {
      opacity: 0
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageWrapper, '&:hover $imageTitle', {
      border: '4px solid currentColor'
    }), _imageWrapper),
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%'
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: theme.palette.common.black,
      opacity: 0.5,
      transition: theme.transitions.create('opacity')
    },
    imageTitle: {
      position: 'relative',
      padding: "".concat(theme.spacing(2), "px ").concat(theme.spacing(4), "px 14px"),
      marginBottom: '12px'
    },
    imageMarked: {
      height: 3,
      width: 18,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity')
    },
    chip: {
      marginLeft: theme.spacing(2)
    },
    media: {
      height: 140
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(ProductCategories));

var _c;

$RefreshReg$(_c, "ProductCategories");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0Q2F0ZWdvcmllcy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Q2F0ZWdvcmllcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb2R1Y3QiLCJwcm9kdWN0U3RhdGUiLCJwcm9kdWN0RGlzcGF0Y2giLCJ1c2VDYXJ0IiwiY2FydFN0YXRlIiwiY2FydERpc3BhdGNoIiwidXNlU3RhdGUiLCJmdWxsU2NyZWVuSW1hZ2UiLCJzZXRGdWxsU2NyZWVuSW1hZ2UiLCJ1c2VFZmZlY3QiLCJnZXRQcm9kdWN0cyIsImFwcCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJ0eXBlIiwiUHJvZHVjdEFjdGlvblR5cGUiLCJTRVRfUFJPRFVDVFMiLCJwYXlsb2FkIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJoYW5kbGVPbkFkZFRvQ2FydCIsInByb2R1Y3QiLCJDYXJ0QWN0aW9uVHlwZSIsIkFERF9JVEVNIiwiZ2V0Q2FydEl0ZW1zIiwiaXRlbSIsIml0ZW1zIiwiZmlsdGVyIiwiaWQiLCJhbW91bnQiLCJyb290IiwicHJvZHVjdHMiLCJwdWJsaXNoIiwiY29scyIsImNvbnNvbGUiLCJsb2ciLCJtZWRpYSIsInBpY3R1cmUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjaGlwIiwiYmFja2Ryb3AiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiaW1hZ2VzIiwiZGlzcGxheSIsImZsZXhXcmFwIiwiaW1hZ2VXcmFwcGVyIiwicG9zaXRpb24iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwid2lkdGgiLCJ6SW5kZXgiLCJvcGFjaXR5IiwiYm9yZGVyIiwiaW1hZ2VCdXR0b24iLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJpbWFnZVNyYyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiaW1hZ2VCYWNrZHJvcCIsImJhY2tncm91bmQiLCJibGFjayIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIsImltYWdlVGl0bGUiLCJpbWFnZU1hcmtlZCIsIm1hcmdpbkxlZnQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBOztBQUFBOztBQUFBLE1BQ3hCQyxPQUR3QixHQUNaRCxLQURZLENBQ3hCQyxPQUR3Qjs7QUFBQSxvQkFFUUMsNEVBQVUsRUFGbEI7QUFBQTtBQUFBLE1BRXpCQyxZQUZ5QjtBQUFBLE1BRVhDLGVBRlc7O0FBQUEsaUJBR0VDLHNFQUFPLEVBSFQ7QUFBQTtBQUFBLE1BR3pCQyxTQUh5QjtBQUFBLE1BR2RDLFlBSGM7O0FBQUEsa0JBSWNDLHNEQUFRLENBQUMsS0FBRCxDQUp0QjtBQUFBLE1BSXpCQyxlQUp5QjtBQUFBLE1BSVJDLGtCQUpROztBQU1oQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGVBQVc7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLHNFQUFHLENBQUNDLFNBQUosR0FBZ0JDLFVBQWhCLENBQTJCLFVBQTNCLEVBQ0NDLEdBREQsR0FFQ0MsSUFGRCxDQUVNLFVBQUFDLFFBQVE7QUFBQSxhQUFJZCxlQUFlLENBQUM7QUFDaENlLFlBQUksRUFBRUMsb0VBQWlCLENBQUNDLFlBRFE7QUFFaENDLGVBQU8sRUFBRUosUUFBUSxDQUFDSyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsR0FBRztBQUFBLGlCQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLFNBQXJCO0FBRnVCLE9BQUQsQ0FBbkI7QUFBQSxLQUZkO0FBTUQsR0FQRDs7QUFTQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLE9BQUQsRUFBYTtBQUNyQ3JCLGdCQUFZLENBQUM7QUFDWFksVUFBSSxFQUFFVSxpRUFBYyxDQUFDQyxRQURWO0FBRVhSLGFBQU8sRUFBRU07QUFGRSxLQUFELENBQVo7QUFJRCxHQUxEOztBQU9BLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILE9BQUQsRUFBYTtBQUFBOztBQUNoQyxRQUFNSSxJQUFJLEdBQUcxQixTQUFTLENBQUMyQixLQUFWLENBQWdCQyxNQUFoQixDQUF1QixVQUFBRixJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDRyxFQUFMLEtBQVlQLE9BQU8sQ0FBQ08sRUFBeEI7QUFBQSxLQUEzQixDQUFiO0FBQ0EscUJBQU9ILElBQUksQ0FBQyxDQUFELENBQVgsMkNBQU8sT0FBU0ksTUFBaEI7QUFDRCxHQUhEOztBQUtBLHNCQUNFLHFFQUFDLG9FQUFEO0FBQVcsYUFBUyxFQUFFbkMsT0FBTyxDQUFDb0MsSUFBOUI7QUFBb0MsYUFBUyxFQUFDLFNBQTlDO0FBQUEsNEJBQ0UscUVBQUMsK0RBQUQ7QUFBWSxhQUFPLEVBQUMsSUFBcEI7QUFBeUIsWUFBTSxFQUFDLFFBQWhDO0FBQXlDLFdBQUssRUFBQyxRQUEvQztBQUF3RCxlQUFTLEVBQUMsSUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQUlFLHFFQUFDLDhEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQWdCLGFBQU8sRUFBRSxDQUF6QjtBQUFBLGdCQUNHbEMsWUFBWSxDQUFDbUMsUUFBYixDQUFzQmQsR0FBdEIsQ0FBMEIsVUFBQ0ksT0FBRDtBQUFBLGVBQ3pCQSxPQUFPLENBQUNXLE9BQVIsZ0JBRUEscUVBQUMsOERBQUQ7QUFBTSxjQUFJLE1BQVY7QUFBVyxZQUFFLEVBQUUsRUFBZjtBQUFtQixZQUFFLEVBQUUsQ0FBQ1gsT0FBTyxDQUFDWSxJQUFoQztBQUFBLGlDQUNFLHFFQUFDLDhEQUFEO0FBQUEsb0NBQ0UscUVBQUMsd0VBQUQ7QUFBZ0IscUJBQU8sRUFBRTtBQUFBLHVCQUFNQyxPQUFPLENBQUNDLEdBQVIsQ0FBWWQsT0FBWixDQUFOO0FBQUEsZUFBekI7QUFBQSxzQ0FDRSxxRUFBQyxvRUFBRDtBQUNFLHlCQUFTLEVBQUUzQixPQUFPLENBQUMwQyxLQURyQjtBQUVFLHFCQUFLLEVBQUVmLE9BQU8sQ0FBQ2dCLE9BRmpCO0FBR0UscUJBQUssRUFBRWhCLE9BQU8sQ0FBQ2lCO0FBSGpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREYsZUFNRSxxRUFBQyxzRUFBRDtBQUFBLHdDQUNFLHFFQUFDLCtEQUFEO0FBQVksOEJBQVksTUFBeEI7QUFBeUIseUJBQU8sRUFBQyxJQUFqQztBQUFzQywyQkFBUyxFQUFDLElBQWhEO0FBQUEsNEJBQ0dqQixPQUFPLENBQUNpQjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRSxxRUFBQywrREFBRDtBQUFZLHlCQUFPLEVBQUMsT0FBcEI7QUFBNEIsdUJBQUssRUFBQyxlQUFsQztBQUFrRCwyQkFBUyxFQUFDLEdBQTVEO0FBQUEsNEJBQ0dqQixPQUFPLENBQUNrQjtBQURYO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQWdCRSxxRUFBQyxzRUFBRDtBQUFBLHNDQUNFLHFFQUFDLGlFQUFEO0FBQVEsb0JBQUksRUFBQyxPQUFiO0FBQXFCLHFCQUFLLEVBQUMsU0FBM0I7QUFBcUMsdUJBQU8sRUFBRTtBQUFBLHlCQUFNbkIsaUJBQWlCLENBQUNDLE9BQUQsQ0FBdkI7QUFBQSxpQkFBOUM7QUFBQSw4REFFRSxxRUFBQyxvRUFBRDtBQUFlLHVCQUFLLEVBQUMsU0FBckI7QUFBK0IsMkJBQVMsRUFBRTNCLE9BQU8sQ0FBQzhDO0FBQWxEO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURGLEVBTUloQixZQUFZLENBQUNILE9BQUQsQ0FBWixnQkFDRSxxRUFBQywrREFBRDtBQUFNLHlCQUFTLEVBQUUzQixPQUFPLENBQUM4QyxJQUF6QjtBQUErQixxQkFBSyxFQUFDLFNBQXJDO0FBQStDLHFCQUFLLEVBQUVoQixZQUFZLENBQUNILE9BQUQ7QUFBbEU7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixHQUVFLElBUk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixXQUEyQ0EsT0FBTyxDQUFDTyxFQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZBLEdBZ0NFLElBakN1QjtBQUFBLE9BQTFCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQUpGLGVBeUNFLHFFQUFDLFFBQUQ7QUFBVSxlQUFTLEVBQUVsQyxPQUFPLENBQUMrQyxRQUE3QjtBQUF1QyxVQUFJLEVBQUV2QyxlQUE3QztBQUE4RCxhQUFPLEVBQUU7QUFBQSxlQUFNQyxrQkFBa0IsQ0FBQyxLQUFELENBQXhCO0FBQUEsT0FBdkU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUF6Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUErQ0Q7O0dBOUVRWCxpQjtVQUVpQ0csb0UsRUFDTkcsOEQ7OztLQUgzQk4saUI7QUFnRlRBLGlCQUFpQixDQUFDa0QsU0FBbEIsR0FBOEI7QUFDNUJoRCxTQUFPLEVBQUVpRCxrREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURFLENBQTlCOztBQUlBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3pCakIsUUFBSSxFQUFFO0FBQ0prQixlQUFTLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FEUDtBQUVKQyxrQkFBWSxFQUFFSCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRlYsS0FEbUI7QUFLekJFLFVBQU0sRUFBRTtBQUNOSCxlQUFTLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FETDtBQUVORyxhQUFPLEVBQUUsTUFGSDtBQUdOQyxjQUFRLEVBQUU7QUFISixLQUxpQjtBQVV6QkMsZ0JBQVk7QUFDVkMsY0FBUSxFQUFFLFVBREE7QUFFVkgsYUFBTyxFQUFFLE9BRkM7QUFHVkksYUFBTyxFQUFFLENBSEM7QUFJVkMsa0JBQVksRUFBRSxDQUpKO0FBS1ZDLFlBQU0sRUFBRTtBQUxFLGdNQU1UWCxLQUFLLENBQUNZLFdBQU4sQ0FBa0JDLElBQWxCLENBQXVCLElBQXZCLENBTlMsRUFNc0I7QUFDOUJDLFdBQUssRUFBRTtBQUR1QixLQU50Qiw0TEFTVixTQVRVLEVBU0M7QUFDVEMsWUFBTSxFQUFFO0FBREMsS0FURCw0TEFZVix3QkFaVSxFQVlnQjtBQUN4QkMsYUFBTyxFQUFFO0FBRGUsS0FaaEIsNExBZVYsc0JBZlUsRUFlYztBQUN0QkEsYUFBTyxFQUFFO0FBRGEsS0FmZCw0TEFrQlYscUJBbEJVLEVBa0JhO0FBQ3JCQyxZQUFNLEVBQUU7QUFEYSxLQWxCYixpQkFWYTtBQWdDekJDLGVBQVcsRUFBRTtBQUNYVixjQUFRLEVBQUUsVUFEQztBQUVYVyxVQUFJLEVBQUUsQ0FGSztBQUdYQyxXQUFLLEVBQUUsQ0FISTtBQUlYQyxTQUFHLEVBQUUsQ0FKTTtBQUtYQyxZQUFNLEVBQUUsQ0FMRztBQU1YakIsYUFBTyxFQUFFLE1BTkU7QUFPWGtCLG1CQUFhLEVBQUUsUUFQSjtBQVFYQyxnQkFBVSxFQUFFLFFBUkQ7QUFTWEMsb0JBQWMsRUFBRSxRQVRMO0FBVVhDLFdBQUssRUFBRTFCLEtBQUssQ0FBQzJCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkM7QUFWakIsS0FoQ1k7QUE0Q3pCQyxZQUFRLEVBQUU7QUFDUnRCLGNBQVEsRUFBRSxVQURGO0FBRVJXLFVBQUksRUFBRSxDQUZFO0FBR1JDLFdBQUssRUFBRSxDQUhDO0FBSVJDLFNBQUcsRUFBRSxDQUpHO0FBS1JDLFlBQU0sRUFBRSxDQUxBO0FBTVJTLG9CQUFjLEVBQUUsT0FOUjtBQU9SQyx3QkFBa0IsRUFBRTtBQVBaLEtBNUNlO0FBcUR6QkMsaUJBQWEsRUFBRTtBQUNiekIsY0FBUSxFQUFFLFVBREc7QUFFYlcsVUFBSSxFQUFFLENBRk87QUFHYkMsV0FBSyxFQUFFLENBSE07QUFJYkMsU0FBRyxFQUFFLENBSlE7QUFLYkMsWUFBTSxFQUFFLENBTEs7QUFNYlksZ0JBQVUsRUFBRWxDLEtBQUssQ0FBQzJCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQk8sS0FOcEI7QUFPYm5CLGFBQU8sRUFBRSxHQVBJO0FBUWJvQixnQkFBVSxFQUFFcEMsS0FBSyxDQUFDcUMsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekI7QUFSQyxLQXJEVTtBQStEekJDLGNBQVUsRUFBRTtBQUNWL0IsY0FBUSxFQUFFLFVBREE7QUFFVkMsYUFBTyxZQUFLVCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBQUwsZ0JBQTJCRixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBQTNCLFlBRkc7QUFHVkMsa0JBQVksRUFBRTtBQUhKLEtBL0RhO0FBb0V6QnFDLGVBQVcsRUFBRTtBQUNYN0IsWUFBTSxFQUFFLENBREc7QUFFWEcsV0FBSyxFQUFFLEVBRkk7QUFHWG9CLGdCQUFVLEVBQUVsQyxLQUFLLENBQUMyQixPQUFOLENBQWNDLE1BQWQsQ0FBcUJDLEtBSHRCO0FBSVhyQixjQUFRLEVBQUUsVUFKQztBQUtYYyxZQUFNLEVBQUUsQ0FBQyxDQUxFO0FBTVhILFVBQUksRUFBRSxpQkFOSztBQU9YaUIsZ0JBQVUsRUFBRXBDLEtBQUssQ0FBQ3FDLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFNBQXpCO0FBUEQsS0FwRVk7QUE2RXpCN0MsUUFBSSxFQUFFO0FBQ0pnRCxnQkFBVSxFQUFFekMsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQURSLEtBN0VtQjtBQWdGekJiLFNBQUssRUFBRTtBQUNMc0IsWUFBTSxFQUFFO0FBREg7QUFoRmtCLEdBQVo7QUFBQSxDQUFmOztBQXNGZStCLDBJQUFVLENBQUMzQyxNQUFELENBQVYsQ0FBbUJ0RCxpQkFBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC42ZjcyNGY3ODk2NTU4OGM4YTY1ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUHJvZHVjdCwgQWN0aW9uVHlwZSBhcyBQcm9kdWN0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb2R1Y3QuY29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSBhcyBDYXJ0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSdcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnXHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCdcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IEFkZENpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZSc7XHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0Q2F0ZWdvcmllcyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHNcclxuICBjb25zdCBbcHJvZHVjdFN0YXRlLCBwcm9kdWN0RGlzcGF0Y2hdID0gdXNlUHJvZHVjdCgpXHJcbiAgY29uc3QgW2NhcnRTdGF0ZSwgY2FydERpc3BhdGNoXSA9IHVzZUNhcnQoKVxyXG4gIGNvbnN0IFtmdWxsU2NyZWVuSW1hZ2UsIHNldEZ1bGxTY3JlZW5JbWFnZV0gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFByb2R1Y3RzKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvZHVjdHMnKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbihzbmFwc2hvdCA9PiBwcm9kdWN0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBQcm9kdWN0QWN0aW9uVHlwZS5TRVRfUFJPRFVDVFMsXHJcbiAgICAgIHBheWxvYWQ6IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKSxcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT25BZGRUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGUuQUREX0lURU0sXHJcbiAgICAgIHBheWxvYWQ6IHByb2R1Y3QsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2FydEl0ZW1zID0gKHByb2R1Y3QpID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBjYXJ0U3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZClcclxuICAgIHJldHVybiBpdGVtWzBdPy5hbW91bnRcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICDCoUFwcm92ZWNow6EgdG9kYXMgbnVlc3Ryb3MgcHJvZHVjdG9zIVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXsyfT5cclxuICAgICAgICB7cHJvZHVjdFN0YXRlLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgcHJvZHVjdC5wdWJsaXNoXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9eytwcm9kdWN0LmNvbHN9IGtleT17cHJvZHVjdC5pZH0+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYSBvbkNsaWNrPXsoKSA9PiBjb25zb2xlLmxvZyhwcm9kdWN0KX0+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2R1Y3QucGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPEJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPbkFkZFRvQ2FydChwcm9kdWN0KX0+XHJcbiAgICAgICAgICAgICAgICAgIEFncmVnYXIgYWwgY2Fycml0b1xyXG4gICAgICAgICAgICAgICAgICA8QWRkQ2lyY2xlSWNvbiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuY2hpcH0gLz5cclxuICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICBnZXRDYXJ0SXRlbXMocHJvZHVjdClcclxuICAgICAgICAgICAgICAgICAgPyA8Q2hpcCBjbGFzc05hbWU9e2NsYXNzZXMuY2hpcH0gY29sb3I9XCJwcmltYXJ5XCIgbGFiZWw9e2dldENhcnRJdGVtcyhwcm9kdWN0KX0gLz5cclxuICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgICAgPEJhY2tkcm9wIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZHJvcH0gb3Blbj17ZnVsbFNjcmVlbkltYWdlfSBvbkNsaWNrPXsoKSA9PiBzZXRGdWxsU2NyZWVuSW1hZ2UoZmFsc2UpfT5cclxuICAgICAgICBhIHZlZWVlZWVlZWVlZWVlZWVlZWVlZWVlZVxyXG4gICAgICA8L0JhY2tkcm9wPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9kdWN0Q2F0ZWdvcmllcy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgaW1hZ2VzOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gIH0sXHJcbiAgaW1hZ2VXcmFwcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgaGVpZ2h0OiAnNDB2aCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXIgJGltYWdlQmFja2Ryb3AnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXIgJGltYWdlTWFya2VkJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyICRpbWFnZVRpdGxlJzoge1xyXG4gICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gIH0sXHJcbiAgaW1hZ2VTcmM6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgNDAlJyxcclxuICB9LFxyXG4gIGltYWdlQmFja2Ryb3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknKSxcclxuICB9LFxyXG4gIGltYWdlVGl0bGU6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggMTRweGAsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxMnB4J1xyXG4gIH0sXHJcbiAgaW1hZ2VNYXJrZWQ6IHtcclxuICAgIGhlaWdodDogMyxcclxuICAgIHdpZHRoOiAxOCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IC0yLFxyXG4gICAgbGVmdDogJ2NhbGMoNTAlIC0gOXB4KScsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknKSxcclxuICB9LFxyXG4gIGNoaXA6IHtcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBtZWRpYToge1xyXG4gICAgaGVpZ2h0OiAxNDAsXHJcbiAgfSxcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUHJvZHVjdENhdGVnb3JpZXMpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=