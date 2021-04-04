webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/views/PromoCategories.js":
/*!******************************************!*\
  !*** ./modules/views/PromoCategories.js ***!
  \******************************************/
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
/* harmony import */ var _views_PromoItem__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../views/PromoItem */ "./modules/views/PromoItem.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @material-ui/icons/Visibility */ "./node_modules/@material-ui/icons/Visibility.js");
/* harmony import */ var _material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Visibility__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\PromoCategories.js",
    _s = $RefreshSig$();


















function PromoCategories(props) {
  _s();

  var _this = this;

  var classes = props.classes;

  var _usePromo = Object(_services_Promo_context__WEBPACK_IMPORTED_MODULE_5__["usePromo"])(),
      _usePromo2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_usePromo, 2),
      promoState = _usePromo2[0],
      promoDispatch = _usePromo2[1];

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

  var skeletons = ['a', 'b', 'c'];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_18__["default"].firestore().collection('promos').get().then(function (snapshot) {
      return promoDispatch({
        type: _services_Promo_context__WEBPACK_IMPORTED_MODULE_5__["ActionType"].SET_PROMOS,
        payload: snapshot.docs.map(function (doc) {
          return doc.data();
        })
      });
    });
  }, []);

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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.root,
    component: "section",
    children: [selectedPromo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_views_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      open: openCarousel,
      setOpen: setOpenCarousel,
      images: selectedPromo.carousel
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 11
    }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
      className: classes.title,
      variant: "h4",
      marked: "center",
      align: "center",
      component: "h2",
      children: "\xA1Aprovech\xE1 todas nuestras promociones!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 58,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
      container: true,
      children: !promoState.promos.length ? skeletons.map(function (skeleton) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            variant: "rect",
            width: '100%',
            height: 118
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            variant: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            width: "60%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this)]
        }, skeleton, true, {
          fileName: _jsxFileName,
          lineNumber: 65,
          columnNumber: 13
        }, _this);
      }) : promoState.promos.map(function (promo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_views_PromoItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          promo: promo
        }, promo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 75,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_s(PromoCategories, "XUex18J1evy1bwkYihD70xp6X3Y=", false, function () {
  return [_services_Promo_context__WEBPACK_IMPORTED_MODULE_5__["usePromo"], _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["useCart"]];
});

_c = PromoCategories;
PromoCategories.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_17___default.a.object.isRequired
};

var styles = function styles(theme) {
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
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(PromoCategories));

var _c;

$RefreshReg$(_c, "PromoCategories");

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

/***/ "./modules/views/PromoItem.js":
/*!************************************!*\
  !*** ./modules/views/PromoItem.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\PromoItem.js",
    _this = undefined;



var PromoItem = function PromoItem() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Grid, {
    item: true,
    xs: 12,
    md: +promo.cols,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: classes.imageSrc,
      style: {
        backgroundImage: "url(".concat(promo.picture, ")")
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.backdrop
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 7,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Typography, {
        component: "h3",
        variant: "h6",
        color: "inherit",
        className: classes.imageTitle,
        children: promo.name
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 8,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Typography, {
        className: classes.price,
        component: "h3",
        variant: "h6",
        color: "inherit",
        children: ["$", promo.price]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 9
      }, _this), promo.carousel ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconButton, {
        color: "secondary",
        variant: "outlined",
        onClick: function onClick() {
          setSelectedPromo(promo);
          setOpenCarousel(true);
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(VisibilityIcon, {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 20,
          columnNumber: 17
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 16,
        columnNumber: 15
      }, _this) : null, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Typography, {
        className: classes.discount,
        children: [promo.discount, "% OFF"]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 25,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.products,
        children: [promo.products.map(function (product) {
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Typography, {
            className: classes.product,
            children: [product.name, " - $", product.price]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 13
          }, _this);
        }), promo.partialPrice ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Typography, {
          className: classes.partialPrice,
          children: ["\xA1Ahorr\xE1s ", promo.partialPrice - promo.price, "!"]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 15
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 28,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
        color: "secondary",
        variant: "outlined",
        onClick: function onClick() {
          return handleOnAddToCart(promo);
        },
        children: ["Agregar al carrito", getCartItems(promo) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Chip, {
          className: classes.chip,
          color: "primary",
          label: getCartItems(promo)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 15
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 7
    }, _this)
  }, promo.name, false, {
    fileName: _jsxFileName,
    lineNumber: 5,
    columnNumber: 5
  }, _this);
};

_c = PromoItem;
/* harmony default export */ __webpack_exports__["default"] = (PromoItem);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0NhdGVnb3JpZXMuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL21vZHVsZXMvdmlld3MvUHJvbW9JdGVtLmpzIl0sIm5hbWVzIjpbIlByb21vQ2F0ZWdvcmllcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb21vIiwicHJvbW9TdGF0ZSIsInByb21vRGlzcGF0Y2giLCJ1c2VDYXJ0IiwiY2FydFN0YXRlIiwiY2FydERpc3BhdGNoIiwidXNlU3RhdGUiLCJvcGVuQ2Fyb3VzZWwiLCJzZXRPcGVuQ2Fyb3VzZWwiLCJzZWxlY3RlZFByb21vIiwic2V0U2VsZWN0ZWRQcm9tbyIsInNrZWxldG9ucyIsInVzZUVmZmVjdCIsImFwcCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJ0eXBlIiwiUHJvbW9BY3Rpb25UeXBlIiwiU0VUX1BST01PUyIsInBheWxvYWQiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsImhhbmRsZU9uQWRkVG9DYXJ0IiwicHJvbW8iLCJDYXJ0QWN0aW9uVHlwZSIsIkFERF9JVEVNIiwiZ2V0Q2FydEl0ZW1zIiwiaXRlbSIsIml0ZW1zIiwiZmlsdGVyIiwiaWQiLCJhbW91bnQiLCJyb290IiwiY2Fyb3VzZWwiLCJ0aXRsZSIsInByb21vcyIsImxlbmd0aCIsInNrZWxldG9uIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0eWxlcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJiYWNrZHJvcCIsIndpZHRoIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJsZWZ0IiwiaW1hZ2VTcmMiLCJwYWRkaW5nIiwiYmFja2dyb3VuZFNpemUiLCJiYWNrZ3JvdW5kUG9zaXRpb24iLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImFsaWduSXRlbXMiLCJqdXN0aWZ5Q29udGVudCIsIm9wYWNpdHkiLCJpbWFnZVRpdGxlIiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJwcmljZSIsInpJbmRleCIsImRpc2NvdW50IiwicHJvZHVjdHMiLCJtYXJnaW4iLCJwcm9kdWN0IiwicGFydGlhbFByaWNlIiwiY2hpcCIsInJpZ2h0IiwibWFyZ2luTGVmdCIsIndpdGhTdHlsZXMiLCJQcm9tb0l0ZW0iLCJjb2xzIiwiYmFja2dyb3VuZEltYWdlIiwicGljdHVyZSIsIm5hbWUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUN0QkMsT0FEc0IsR0FDVkQsS0FEVSxDQUN0QkMsT0FEc0I7O0FBQUEsa0JBRU1DLHdFQUFRLEVBRmQ7QUFBQTtBQUFBLE1BRXZCQyxVQUZ1QjtBQUFBLE1BRVhDLGFBRlc7O0FBQUEsaUJBR0lDLHNFQUFPLEVBSFg7QUFBQTtBQUFBLE1BR3ZCQyxTQUh1QjtBQUFBLE1BR1pDLFlBSFk7O0FBQUEsa0JBSVVDLHNEQUFRLENBQUMsSUFBRCxDQUpsQjtBQUFBLE1BSXZCQyxZQUp1QjtBQUFBLE1BSVRDLGVBSlM7O0FBQUEsbUJBS1lGLHNEQUFRLENBQUMsSUFBRCxDQUxwQjtBQUFBLE1BS3ZCRyxhQUx1QjtBQUFBLE1BS1JDLGdCQUxROztBQU85QixNQUFNQyxTQUFTLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLEdBQVgsQ0FBbEI7QUFFQUMseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLHNFQUFHLENBQUNDLFNBQUosR0FBZ0JDLFVBQWhCLENBQTJCLFFBQTNCLEVB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O0FBQUE7QUFBQSxpQkFGRixHQUtFLElBWk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBdEJGLGVBcUNFLHFFQUFDLE1BQUQ7QUFBUSxhQUFLLEVBQUMsV0FBZDtBQUEwQixlQUFPLEVBQUMsVUFBbEM7QUFBNkMsZUFBTyxFQUFFO0FBQUEsaUJBQU1oRCxpQkFBaUIsQ0FBQ0MsS0FBRCxDQUF2QjtBQUFBLFNBQXREO0FBQUEseUNBR0lHLFlBQVksQ0FBQ0gsS0FBRCxDQUFaLGdCQUNFLHFFQUFDLElBQUQ7QUFBTSxtQkFBUyxFQUFFN0IsT0FBTyxDQUFDbUYsSUFBekI7QUFBK0IsZUFBSyxFQUFDLFNBQXJDO0FBQStDLGVBQUssRUFBRW5ELFlBQVksQ0FBQ0gsS0FBRDtBQUFsRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLEdBRUUsSUFMTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFyQ0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsS0FBV0EsS0FBSyxDQUFDOEQsSUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBa0RELENBbkREOztLQUFNSixTO0FBcURTQSx3RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5jMTAxYzRiMDBlY2YzNTE0MjM1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUHJvbW8sIEFjdGlvblR5cGUgYXMgUHJvbW9BY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvbW8uY29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSBhcyBDYXJ0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuXHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJ1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vdmlld3MvQ2Fyb3VzZWwnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBQcm9tb0l0ZW0gZnJvbSAnLi4vdmlld3MvUHJvbW9JdGVtJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IENoaXAgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2hpcCdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuXHJcbmltcG9ydCBWaXNpYmlsaXR5SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvVmlzaWJpbGl0eSdcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5mdW5jdGlvbiBQcm9tb0NhdGVnb3JpZXMocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzXHJcbiAgY29uc3QgW3Byb21vU3RhdGUsIHByb21vRGlzcGF0Y2hdID0gdXNlUHJvbW8oKVxyXG4gIGNvbnN0IFtjYXJ0U3RhdGUsIGNhcnREaXNwYXRjaF0gPSB1c2VDYXJ0KClcclxuICBjb25zdCBbb3BlbkNhcm91c2VsLCBzZXRPcGVuQ2Fyb3VzZWxdID0gdXNlU3RhdGUodHJ1ZSlcclxuICBjb25zdCBbc2VsZWN0ZWRQcm9tbywgc2V0U2VsZWN0ZWRQcm9tb10gPSB1c2VTdGF0ZShudWxsKVxyXG5cclxuICBjb25zdCBza2VsZXRvbnMgPSBbJ2EnLCAnYicsICdjJ11cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9tb3MnKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbihzbmFwc2hvdCA9PiBwcm9tb0Rpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUHJvbW9BY3Rpb25UeXBlLlNFVF9QUk9NT1MsXHJcbiAgICAgIHBheWxvYWQ6IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKSxcclxuICAgIH0pKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkFkZFRvQ2FydCA9IChwcm9tbykgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGUuQUREX0lURU0sXHJcbiAgICAgIHBheWxvYWQ6IHByb21vLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENhcnRJdGVtcyA9IChwcm9tbykgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IGNhcnRTdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9tby5pZClcclxuICAgIHJldHVybiBpdGVtWzBdPy5hbW91bnRcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XHJcbiAgICAgIHtcclxuICAgICAgICBzZWxlY3RlZFByb21vXHJcbiAgICAgICAgPyA8Q2Fyb3VzZWwgb3Blbj17b3BlbkNhcm91c2VsfSBzZXRPcGVuPXtzZXRPcGVuQ2Fyb3VzZWx9IGltYWdlcz17c2VsZWN0ZWRQcm9tby5jYXJvdXNlbH0gLz5cclxuICAgICAgICA6ICcnXHJcbiAgICAgIH1cclxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDRcIiBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgwqFBcHJvdmVjaMOhIHRvZGFzIG51ZXN0cmFzIHByb21vY2lvbmVzIVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICB7IXByb21vU3RhdGUucHJvbW9zLmxlbmd0aFxyXG4gICAgICAgICAgP1xyXG4gICAgICAgICAgc2tlbGV0b25zLm1hcCgoc2tlbGV0b24pID0+IChcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs0fSBrZXk9e3NrZWxldG9ufT5cclxuICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJlY3RcIiB3aWR0aD17JzEwMCUnfSBoZWlnaHQ9ezExOH0gLz5cclxuICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD1cIjYwJVwiIC8+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8U2tlbGV0b24gLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICAgIDpcclxuICAgICAgICAgIHByb21vU3RhdGUucHJvbW9zLm1hcCgocHJvbW8pID0+IChcclxuICAgICAgICAgICAgPFByb21vSXRlbSBwcm9tbz17cHJvbW99IGtleT17cHJvbW8uaWR9Lz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcblByb21vQ2F0ZWdvcmllcy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgYmFja2Ryb3A6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDA1NScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgfSxcclxuICBpbWFnZVNyYzoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAwKSxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuOSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZVRpdGxlOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nKDIpfXB4ICR7dGhlbWUuc3BhY2luZyg0KX1weCAxNHB4YCxcclxuICB9LFxyXG4gIHByaWNlOiB7XHJcbiAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHpJbmRleDogMyxcclxuICB9LFxyXG4gIGRpc2NvdW50OiB7XHJcbiAgICBmb250U2l6ZTogJzI1cHgnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHpJbmRleDogMyxcclxuICB9LFxyXG4gIHByb2R1Y3RzOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoMiwgMCksXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBwcm9kdWN0OiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHpJbmRleDogMyxcclxuICB9LFxyXG4gIHBhcnRpYWxQcmljZToge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgZm9udFNpemU6ICcyMHB4JyxcclxuICB9LFxyXG4gIGNoaXA6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgcmlnaHQ6IC0yMCxcclxuICAgIHRvcDogLTIwLFxyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb21vQ2F0ZWdvcmllcylcclxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5cclxuY29uc3QgUHJvbW9JdGVtID0gKCkgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8R3JpZCBrZXk9e3Byb21vLm5hbWV9IGl0ZW0geHM9ezEyfSBtZD17K3Byb21vLmNvbHN9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY30gc3R5bGU9e3sgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cHJvbW8ucGljdHVyZX0pYH19PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfT48L2Rpdj5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfSA+XHJcbiAgICAgICAgICB7cHJvbW8ubmFtZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnByaWNlfSBjb21wb25lbnQ9XCJoM1wiIHZhcmlhbnQ9XCJoNlwiIGNvbG9yPVwiaW5oZXJpdFwiPlxyXG4gICAgICAgICAgJHtwcm9tby5wcmljZX1cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7cHJvbW8uY2Fyb3VzZWxcclxuICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgdmFyaWFudD1cIm91dGxpbmVkXCIgb25DbGljaz17KCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgc2V0U2VsZWN0ZWRQcm9tbyhwcm9tbylcclxuICAgICAgICAgICAgICAgIHNldE9wZW5DYXJvdXNlbCh0cnVlKVxyXG4gICAgICAgICAgICAgIH19PlxyXG4gICAgICAgICAgICAgICAgPFZpc2liaWxpdHlJY29uIC8+XHJcbiAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgIH1cclxuICAgICAgICBcclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZGlzY291bnR9PlxyXG4gICAgICAgICAge3Byb21vLmRpc2NvdW50fSUgT0ZGXHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RzfT5cclxuICAgICAgICAgIHtwcm9tby5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3R9PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICApKX1cclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgcHJvbW8ucGFydGlhbFByaWNlXHJcbiAgICAgICAgICAgID9cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFydGlhbFByaWNlfT5cclxuICAgICAgICAgICAgICAgIMKhQWhvcnLDoXMge3Byb21vLnBhcnRpYWxQcmljZSAtIHByb21vLnByaWNlfSFcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPbkFkZFRvQ2FydChwcm9tbyl9PlxyXG4gICAgICAgICAgQWdyZWdhciBhbCBjYXJyaXRvXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGdldENhcnRJdGVtcyhwcm9tbylcclxuICAgICAgICAgICAgPyA8Q2hpcCBjbGFzc05hbWU9e2NsYXNzZXMuY2hpcH0gY29sb3I9XCJwcmltYXJ5XCIgbGFiZWw9e2dldENhcnRJdGVtcyhwcm9tbyl9IC8+XHJcbiAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvR3JpZD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IFByb21vSXRlbSJdLCJzb3VyY2VSb290IjoiIn0=