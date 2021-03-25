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
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
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
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.images,
      children: productState.products.map(function (product) {
        return product.publish ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          lg: +product.cols,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_8__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_10__["default"], {
                className: classes.media,
                image: product.picture,
                title: product.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 62,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_11__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: product.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 68,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_16__["default"], {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: product.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 71,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_12__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_13__["default"], {
                size: "small",
                color: "primary",
                onClick: function onClick() {
                  return handleOnAddToCart(product);
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_14___default.a, {
                  color: "primary"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 78,
                  columnNumber: 19
                }, _this), getCartItems(product) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_17__["default"], {
                  className: classes.chip,
                  color: "primary",
                  label: getCartItems(product)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 23
                }, _this) : null]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this)
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 11
        }, _this) : null;
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(ProductCategories, "LgyNsPlB9lPmQwc9nfiGTDhu6nA=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0Q2F0ZWdvcmllcy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Q2F0ZWdvcmllcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb2R1Y3QiLCJwcm9kdWN0U3RhdGUiLCJwcm9kdWN0RGlzcGF0Y2giLCJ1c2VDYXJ0IiwiY2FydFN0YXRlIiwiY2FydERpc3BhdGNoIiwidXNlRWZmZWN0IiwiZ2V0UHJvZHVjdHMiLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIlByb2R1Y3RBY3Rpb25UeXBlIiwiU0VUX1BST0RVQ1RTIiwicGF5bG9hZCIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiaGFuZGxlT25BZGRUb0NhcnQiLCJwcm9kdWN0IiwiQ2FydEFjdGlvblR5cGUiLCJBRERfSVRFTSIsImdldENhcnRJdGVtcyIsIml0ZW0iLCJpdGVtcyIsImZpbHRlciIsImlkIiwiYW1vdW50Iiwicm9vdCIsImltYWdlcyIsInByb2R1Y3RzIiwicHVibGlzaCIsImNvbHMiLCJtZWRpYSIsInBpY3R1cmUiLCJuYW1lIiwiZGVzY3JpcHRpb24iLCJjaGlwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0eWxlcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsImltYWdlV3JhcHBlciIsInBvc2l0aW9uIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsIndpZHRoIiwiekluZGV4Iiwib3BhY2l0eSIsImJvcmRlciIsImltYWdlQnV0dG9uIiwibGVmdCIsInJpZ2h0IiwidG9wIiwiYm90dG9tIiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsImNvbG9yIiwicGFsZXR0ZSIsImNvbW1vbiIsIndoaXRlIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImltYWdlQmFja2Ryb3AiLCJiYWNrZ3JvdW5kIiwiYmxhY2siLCJ0cmFuc2l0aW9uIiwidHJhbnNpdGlvbnMiLCJjcmVhdGUiLCJpbWFnZVRpdGxlIiwiaW1hZ2VNYXJrZWQiLCJtYXJnaW5MZWZ0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxpQkFBVCxDQUEyQkMsS0FBM0IsRUFBa0M7QUFBQTs7QUFBQTs7QUFBQSxNQUN4QkMsT0FEd0IsR0FDWkQsS0FEWSxDQUN4QkMsT0FEd0I7O0FBQUEsb0JBRVFDLDRFQUFVLEVBRmxCO0FBQUE7QUFBQSxNQUV6QkMsWUFGeUI7QUFBQSxNQUVYQyxlQUZXOztBQUFBLGlCQUdFQyxzRUFBTyxFQUhUO0FBQUE7QUFBQSxNQUd6QkMsU0FIeUI7QUFBQSxNQUdkQyxZQUhjOztBQUtoQ0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGVBQVc7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEJDLHNFQUFHLENBQUNDLFNBQUosR0FBZ0JDLFVBQWhCLENBQTJCLFVBQTNCLEVBQ0NDLEdBREQsR0FFQ0MsSUFGRCxDQUVNLFVBQUFDLFFBQVE7QUFBQSxhQUFJWCxlQUFlLENBQUM7QUFDaENZLFlBQUksRUFBRUMsb0VBQWlCLENBQUNDLFlBRFE7QUFFaENDLGVBQU8sRUFBRUosUUFBUSxDQUFDSyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsR0FBRztBQUFBLGlCQUFJQSxHQUFHLENBQUNDLElBQUosRUFB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QUFOLENBQWtCQyxNQUFsQixDQUF5QixTQUF6QjtBQVJDLEtBckRVO0FBK0R6QkMsY0FBVSxFQUFFO0FBQ1YvQixjQUFRLEVBQUUsVUFEQTtBQUVWQyxhQUFPLFlBQUtSLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FBTCxnQkFBMkJGLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FBM0IsWUFGRztBQUdWQyxrQkFBWSxFQUFFO0FBSEosS0EvRGE7QUFvRXpCb0MsZUFBVyxFQUFFO0FBQ1g3QixZQUFNLEVBQUUsQ0FERztBQUVYRyxXQUFLLEVBQUUsRUFGSTtBQUdYb0IsZ0JBQVUsRUFBRWpDLEtBQUssQ0FBQzBCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FIdEI7QUFJWHJCLGNBQVEsRUFBRSxVQUpDO0FBS1hjLFlBQU0sRUFBRSxDQUFDLENBTEU7QUFNWEgsVUFBSSxFQUFFLGlCQU5LO0FBT1hpQixnQkFBVSxFQUFFbkMsS0FBSyxDQUFDb0MsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekI7QUFQRCxLQXBFWTtBQTZFekIzQyxRQUFJLEVBQUU7QUFDSjhDLGdCQUFVLEVBQUV4QyxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRFI7QUE3RW1CLEdBQVo7QUFBQSxDQUFmOztBQW1GZXVDLDBJQUFVLENBQUMxQyxNQUFELENBQVYsQ0FBbUJqRCxpQkFBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45MzdmOGFlZGJhNDBlZmUxNmMxNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VQcm9kdWN0LCBBY3Rpb25UeXBlIGFzIFByb2R1Y3RBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvZHVjdC5jb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VDYXJ0LCBBY3Rpb25UeXBlIGFzIENhcnRBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQ2FydC5jb250ZXh0J1xyXG5cclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCdcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJ1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nXHJcbmltcG9ydCBBZGRDaXJjbGVJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9BZGRDaXJjbGUnO1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJ1xyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdENhdGVnb3JpZXMocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzXHJcbiAgY29uc3QgW3Byb2R1Y3RTdGF0ZSwgcHJvZHVjdERpc3BhdGNoXSA9IHVzZVByb2R1Y3QoKVxyXG4gIGNvbnN0IFtjYXJ0U3RhdGUsIGNhcnREaXNwYXRjaF0gPSB1c2VDYXJ0KClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFByb2R1Y3RzKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZ2V0UHJvZHVjdHMgPSAoKSA9PiB7XHJcbiAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvZHVjdHMnKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbihzbmFwc2hvdCA9PiBwcm9kdWN0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBQcm9kdWN0QWN0aW9uVHlwZS5TRVRfUFJPRFVDVFMsXHJcbiAgICAgIHBheWxvYWQ6IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKSxcclxuICAgIH0pKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT25BZGRUb0NhcnQgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGUuQUREX0lURU0sXHJcbiAgICAgIHBheWxvYWQ6IHByb2R1Y3QsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2FydEl0ZW1zID0gKHByb2R1Y3QpID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBjYXJ0U3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcHJvZHVjdC5pZClcclxuICAgIHJldHVybiBpdGVtWzBdPy5hbW91bnRcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICDCoUFwcm92ZWNow6EgdG9kYXMgbnVlc3Ryb3MgcHJvZHVjdG9zIVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlc30+XHJcbiAgICAgICAge3Byb2R1Y3RTdGF0ZS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIHByb2R1Y3QucHVibGlzaFxyXG4gICAgICAgICAgP1xyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXsrcHJvZHVjdC5jb2xzfSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2R1Y3QucGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlT25BZGRUb0NhcnQocHJvZHVjdCl9PlxyXG4gICAgICAgICAgICAgICAgICA8QWRkQ2lyY2xlSWNvbiBjb2xvcj1cInByaW1hcnlcIiAvPlxyXG4gICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0Q2FydEl0ZW1zKHByb2R1Y3QpXHJcbiAgICAgICAgICAgICAgICAgICAgPyA8Q2hpcCBjbGFzc05hbWU9e2NsYXNzZXMuY2hpcH0gY29sb3I9XCJwcmltYXJ5XCIgbGFiZWw9e2dldENhcnRJdGVtcyhwcm9kdWN0KX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuUHJvZHVjdENhdGVnb3JpZXMucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIGltYWdlczoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIGltYWdlV3JhcHBlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGhlaWdodDogJzQwdmgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJSAhaW1wb3J0YW50JyxcclxuICAgIH0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyICRpbWFnZUJhY2tkcm9wJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyICRpbWFnZU1hcmtlZCc6IHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgIH0sXHJcbiAgICAnJjpob3ZlciAkaW1hZ2VUaXRsZSc6IHtcclxuICAgICAgYm9yZGVyOiAnNHB4IHNvbGlkIGN1cnJlbnRDb2xvcicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VCdXR0b246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICB9LFxyXG4gIGltYWdlU3JjOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIDQwJScsXHJcbiAgfSxcclxuICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgb3BhY2l0eTogMC41LFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgfSxcclxuICBpbWFnZVRpdGxlOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDQpfXB4IDE0cHhgLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMTJweCdcclxuICB9LFxyXG4gIGltYWdlTWFya2VkOiB7XHJcbiAgICBoZWlnaHQ6IDMsXHJcbiAgICB3aWR0aDogMTgsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAtMixcclxuICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDlweCknLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgfSxcclxuICBjaGlwOiB7XHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUHJvZHVjdENhdGVnb3JpZXMpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=