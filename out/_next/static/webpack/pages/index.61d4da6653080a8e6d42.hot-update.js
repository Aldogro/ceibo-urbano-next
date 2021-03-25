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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/icons/AddCircle */ "./node_modules/@material-ui/icons/AddCircle.js");
/* harmony import */ var _material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");




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
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_20__["default"].firestore().collection('products').get().then(function (snapshot) {
      return productDispatch({
        type: _services_Product_context__WEBPACK_IMPORTED_MODULE_5__["ActionType"].SET_PRODUCTS,
        payload: snapshot.docs.map(function (doc) {
          return doc.data();
        })
      });
    });
  }, []);

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_16__["default"], {
    className: classes.root,
    component: "section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
      variant: "h4",
      marked: "center",
      align: "center",
      component: "h2",
      children: "\xA1Aprovech\xE1 todas nuestros productos!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.images,
      children: productState.products.map(function (product) {
        return product.publish ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: true,
          xs: 12,
          lg: +product.cols,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_9__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: classes.media,
                image: product.picture,
                title: product.name
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_12__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
                  gutterBottom: true,
                  variant: "h5",
                  component: "h2",
                  children: product.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_17__["default"], {
                  variant: "body2",
                  color: "textSecondary",
                  component: "p",
                  children: product.description
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 70,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_13__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_14__["default"], {
                size: "small",
                color: "primary",
                onClick: function onClick() {
                  return handlePublish(product);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_AddCircle__WEBPACK_IMPORTED_MODULE_15___default.a, {
                  color: "primary"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 19
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)
        }, product.id, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, _this) : null;
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(ProductCategories, "LgyNsPlB9lPmQwc9nfiGTDhu6nA=", false, function () {
  return [_services_Product_context__WEBPACK_IMPORTED_MODULE_5__["useProduct"], _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["useCart"]];
});

_c = ProductCategories;
ProductCategories.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_19___default.a.object.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0Q2F0ZWdvcmllcy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Q2F0ZWdvcmllcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb2R1Y3QiLCJwcm9kdWN0U3RhdGUiLCJwcm9kdWN0RGlzcGF0Y2giLCJ1c2VDYXJ0IiwiY2FydFN0YXRlIiwiY2FydERpc3BhdGNoIiwidXNlRWZmZWN0IiwiYXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsInR5cGUiLCJQcm9kdWN0QWN0aW9uVHlwZSIsIlNFVF9QUk9EVUNUUyIsInBheWxvYWQiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsImhhbmRsZU9uQWRkVG9DYXJ0IiwicHJvZHVjdCIsIkNhcnRBY3Rpb25UeXBlIiwiQUREX0lURU0iLCJnZXRDYXJ0SXRlbXMiLCJpdGVtIiwiaXRlbXMiLCJmaWx0ZXIiLCJpZCIsImFtb3VudCIsInJvb3QiLCJpbWFnZXMiLCJwcm9kdWN0cyIsInB1Ymxpc2giLCJjb2xzIiwibWVkaWEiLCJwaWN0dXJlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwiaGFuZGxlUHVibGlzaCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHlsZXMiLCJ0aGVtZSIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJkaXNwbGF5IiwiZmxleFdyYXAiLCJpbWFnZVdyYXBwZXIiLCJwb3NpdGlvbiIsInBhZGRpbmciLCJib3JkZXJSYWRpdXMiLCJoZWlnaHQiLCJicmVha3BvaW50cyIsImRvd24iLCJ3aWR0aCIsInpJbmRleCIsIm9wYWNpdHkiLCJib3JkZXIiLCJpbWFnZUJ1dHRvbiIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImltYWdlU3JjIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJpbWFnZUJhY2tkcm9wIiwiYmFja2dyb3VuZCIsImJsYWNrIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwiaW1hZ2VUaXRsZSIsImltYWdlTWFya2VkIiwiY2hpcCIsIm1hcmdpbkxlZnQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLGlCQUFULENBQTJCQyxLQUEzQixFQUFrQztBQUFBOztBQUFBOztBQUFBLE1BQ3hCQyxPQUR3QixHQUNaRCxLQURZLENBQ3hCQyxPQUR3Qjs7QUFBQSxvQkFFUUMsNEVBQVUsRUFGbEI7QUFBQTtBQUFBLE1BRXpCQyxZQUZ5QjtBQUFBLE1BRVhDLGVBRlc7O0FBQUEsaUJBR0VDLHNFQUFPLEVBSFQ7QUFBQTtBQUFBLE1BR3pCQyxTQUh5QjtBQUFBLE1BR2RDLFlBSGM7O0FBS2hDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsc0VBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsVUFBM0IsRUFDQ0MsR0FERCxHQUVDQyxJQUZELENBRU0sVUFBQUMsUUFBUTtBQUFBLGFBQUlWLGVBQWUsQ0FBQztBQUNoQ1csWUFBSSxFQUFFQyxvRUFBaUIsQ0FBQ0MsWUFEUTtBQUVoQ0MsZUFBTyxFQUFFSixRQUFRLENBQUNLLElBQVQsQ0FBY0MsR0FBZCxDQUFrQixVQUFBQyxHQUFHO0FBQUEsaUJBQUlBLEdBQUcsQ0FBQ0MsSUFBSixFQUFKO0FBQUEsU0FBckI7QUFGdUIsT0FBRCxDQUFuQjtBQUFBLEtBRmQ7QUFNRCxHQVBRLEVBT04sRUFQTSxDQUFUOztB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RztBQUVYRyxXQUFLLEVBQUUsRUFGSTtBQUdYb0IsZ0JBQVUsRUFBRWpDLEtBQUssQ0FBQzBCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FIdEI7QUFJWHJCLGNBQVEsRUFBRSxVQUpDO0FBS1hjLFlBQU0sRUFBRSxDQUFDLENBTEU7QUFNWEgsVUFBSSxFQUFFLGlCQU5LO0FBT1hpQixnQkFBVSxFQUFFbkMsS0FBSyxDQUFDb0MsV0FBTixDQUFrQkMsTUFBbEIsQ0FBeUIsU0FBekI7QUFQRCxLQXBFWTtBQTZFekJHLFFBQUksRUFBRTtBQUNKQyxnQkFBVSxFQUFFekMsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQURSO0FBN0VtQixHQUFaO0FBQUEsQ0FBZjs7QUFtRmV3QywwSUFBVSxDQUFDM0MsTUFBRCxDQUFWLENBQW1CaEQsaUJBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNjFkNGRhNjY1MzA4MGE4ZTZkNDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUHJvZHVjdCwgQWN0aW9uVHlwZSBhcyBQcm9kdWN0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb2R1Y3QuY29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSBhcyBDYXJ0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcblxyXG5pbXBvcnQgQ2FyZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkJ1xyXG5pbXBvcnQgQ2FyZEFjdGlvbkFyZWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbkFyZWEnXHJcbmltcG9ydCBDYXJkTWVkaWEgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZE1lZGlhJ1xyXG5pbXBvcnQgQ2FyZENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZENvbnRlbnQnXHJcbmltcG9ydCBDYXJkQWN0aW9ucyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9ucydcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IEFkZENpcmNsZUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0FkZENpcmNsZSc7XHJcblxyXG5cclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDYXRlZ29yaWVzKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IFtwcm9kdWN0U3RhdGUsIHByb2R1Y3REaXNwYXRjaF0gPSB1c2VQcm9kdWN0KClcclxuICBjb25zdCBbY2FydFN0YXRlLCBjYXJ0RGlzcGF0Y2hdID0gdXNlQ2FydCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvZHVjdHMnKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbihzbmFwc2hvdCA9PiBwcm9kdWN0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBQcm9kdWN0QWN0aW9uVHlwZS5TRVRfUFJPRFVDVFMsXHJcbiAgICAgIHBheWxvYWQ6IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKSxcclxuICAgIH0pKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkFkZFRvQ2FydCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZS5BRERfSVRFTSxcclxuICAgICAgcGF5bG9hZDogcHJvZHVjdCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDYXJ0SXRlbXMgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IGNhcnRTdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9kdWN0LmlkKVxyXG4gICAgcmV0dXJuIGl0ZW1bMF0/LmFtb3VudFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGNvbXBvbmVudD1cInNlY3Rpb25cIj5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgbWFya2VkPVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgIMKhQXByb3ZlY2jDoSB0b2RhcyBudWVzdHJvcyBwcm9kdWN0b3MhXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VzfT5cclxuICAgICAgICB7cHJvZHVjdFN0YXRlLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgcHJvZHVjdC5wdWJsaXNoXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9eytwcm9kdWN0LmNvbHN9IGtleT17cHJvZHVjdC5pZH0+XHJcbiAgICAgICAgICAgIDxDYXJkPlxyXG4gICAgICAgICAgICAgIDxDYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICAgIDxDYXJkTWVkaWFcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLm1lZGlhfVxyXG4gICAgICAgICAgICAgICAgICBpbWFnZT17cHJvZHVjdC5waWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICB0aXRsZT17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxDYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgZ3V0dGVyQm90dG9tIHZhcmlhbnQ9XCJoNVwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiYm9keTJcIiBjb2xvcj1cInRleHRTZWNvbmRhcnlcIiBjb21wb25lbnQ9XCJwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAge3Byb2R1Y3QuZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDwvQ2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgPC9DYXJkQWN0aW9uQXJlYT5cclxuICAgICAgICAgICAgICA8Q2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBzaXplPVwic21hbGxcIiBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVQdWJsaXNoKHByb2R1Y3QpfT5cclxuICAgICAgICAgICAgICAgICAgPEFkZENpcmNsZUljb24gY29sb3I9XCJwcmltYXJ5XCIgLz5cclxuICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICA8L0NhcmQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA6IG51bGxcclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcblByb2R1Y3RDYXRlZ29yaWVzLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICBpbWFnZXM6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgfSxcclxuICBpbWFnZVdyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICBoZWlnaHQ6ICc0MHZoJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogJzEwMCUgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgIH0sXHJcbiAgICAnJjpob3ZlciAkaW1hZ2VCYWNrZHJvcCc6IHtcclxuICAgICAgb3BhY2l0eTogMC4xNSxcclxuICAgIH0sXHJcbiAgICAnJjpob3ZlciAkaW1hZ2VNYXJrZWQnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXIgJGltYWdlVGl0bGUnOiB7XHJcbiAgICAgIGJvcmRlcjogJzRweCBzb2xpZCBjdXJyZW50Q29sb3InLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlQnV0dG9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBpbWFnZVNyYzoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciA0MCUnLFxyXG4gIH0sXHJcbiAgaW1hZ2VCYWNrZHJvcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gIH0sXHJcbiAgaW1hZ2VUaXRsZToge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nKDIpfXB4ICR7dGhlbWUuc3BhY2luZyg0KX1weCAxNHB4YCxcclxuICAgIG1hcmdpbkJvdHRvbTogJzEycHgnXHJcbiAgfSxcclxuICBpbWFnZU1hcmtlZDoge1xyXG4gICAgaGVpZ2h0OiAzLFxyXG4gICAgd2lkdGg6IDE4LFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogLTIsXHJcbiAgICBsZWZ0OiAnY2FsYyg1MCUgLSA5cHgpJyxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3RDYXRlZ29yaWVzKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9