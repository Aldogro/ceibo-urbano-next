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
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");




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

  var skeletons = ['a', 'b', 'c'];
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_14__["default"].firestore().collection('promos').get().then(function (snapshot) {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_10__["default"], {
    className: classes.root,
    component: "section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
      className: classes.title,
      variant: "h4",
      marked: "center",
      align: "center",
      component: "h2",
      children: "\xA1Aprovech\xE1 todas nuestras promociones!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
      container: true,
      children: !promoState.promos.length ? skeletons.map(function (skeleton) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            variant: "rect",
            width: '100%',
            height: 118
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            variant: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            width: "60%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 15
          }, _this)]
        }, skeleton, true, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, _this);
      }) : promoState.promos.map(function (promo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: true,
          xs: 12,
          md: promo.cols,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.imageSrc,
            style: {
              backgroundImage: "url(".concat(promo.picture, ")")
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: classes.backdrop
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              component: "h3",
              variant: "h6",
              color: "inherit",
              className: classes.imageTitle,
              children: promo.name
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: classes.price,
              component: "h3",
              variant: "h6",
              color: "inherit",
              children: ["$", promo.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: classes.discount,
              children: [promo.discount, "% OFF"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: classes.products,
              children: [promo.products.map(function (product) {
                return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  className: classes.product,
                  children: [product.name, " - $", product.price]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 77,
                  columnNumber: 21
                }, _this);
              }), promo.partialPrice ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: classes.partialPrice,
                children: ["\xA1Ahorr\xE1s ", promo.partialPrice - promo.price, "!"]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 23
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 17
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_9__["default"], {
              color: "secondary",
              variant: "outlined",
              onClick: function onClick() {
                return handleOnAddToCart(promo);
              },
              children: ["Agregar al carrito", getCartItems(promo) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_12__["default"], {
                className: classes.chip,
                color: "primary",
                label: getCartItems(promo)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 23
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 17
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 15
          }, _this)
        }, promo.name, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(PromoCategories, "DSLJpQG0jhK2age9kBZGvLjRXuc=", false, function () {
  return [_services_Promo_context__WEBPACK_IMPORTED_MODULE_5__["usePromo"], _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["useCart"]];
});

_c = PromoCategories;
PromoCategories.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_13___default.a.object.isRequired
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
      position: 'absolute'
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
      justifyContent: 'center',
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiUHJvbW9DYXRlZ29yaWVzIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUHJvbW8iLCJwcm9tb1N0YXRlIiwicHJvbW9EaXNwYXRjaCIsInVzZUNhcnQiLCJjYXJ0U3RhdGUiLCJjYXJ0RGlzcGF0Y2giLCJza2VsZXRvbnMiLCJ1c2VFZmZlY3QiLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIlByb21vQWN0aW9uVHlwZSIsIlNFVF9QUk9NT1MiLCJwYXlsb2FkIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJoYW5kbGVPbkFkZFRvQ2FydCIsInByb21vIiwiQ2FydEFjdGlvblR5cGUiLCJBRERfSVRFTSIsImdldENhcnRJdGVtcyIsIml0ZW0iLCJpdGVtcyIsImZpbHRlciIsImlkIiwiYW1vdW50Iiwicm9vdCIsInRpdGxlIiwicHJvbW9zIiwibGVuZ3RoIiwic2tlbGV0b24iLCJjb2xzIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwaWN0dXJlIiwiYmFja2Ryb3AiLCJpbWFnZVRpdGxlIiwibmFtZSIsInByaWNlIiwiZGlzY291bnQiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJwYXJ0aWFsUHJpY2UiLCJjaGlwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0eWxlcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImZvbnRTaXplIiwiZm9udFdlaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwicGFkZGluZyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJvcGFjaXR5IiwiY29sb3IiLCJ0ZXh0QWxpZ24iLCJ6SW5kZXgiLCJtYXJnaW4iLCJyaWdodCIsInRvcCIsIm1hcmdpbkxlZnQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUN0QkMsT0FEc0IsR0FDVkQsS0FEVSxDQUN0QkMsT0FEc0I7O0FBQUEsa0JBRU1DLHdFQUFRLEVBRmQ7QUFBQTtBQUFBLE1BRXZCQyxVQUZ1QjtBQUFBLE1BRVhDLGFBRlc7O0FBQUEsaUJBR0lDLHNFQUFPLEVBSFg7QUFBQTtBQUFBLE1BR3ZCQyxTQUh1QjtBQUFBLE1BR1pDLFlBSFk7O0FBSzlCLE1BQU1DLFNBQVMsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFsQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsc0VBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsUUFBM0IsRUFDQ0MsR0FERCxHQUVDQyxJQUZELENBRU0sVUFBQUMsUUFBUTtBQUFBLGFBQUlYLGFBQWEsQ0FBQztBQUM5QlksWUFBSSxFQUFFQyxrRUFBZSxDQUFDQyxVQURRO0FBRTlCQyxlQUFPLEVBQUVKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUFDLEdBQUc7QUFBQSxpQkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxTQUFyQjtBQUZxQixPQUFELENBQWpCO0FBQUEsS0FGZDtBQU1ELEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFDbkNsQixnQkFBWSxD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UEUsWUFBTSxFQUFFO0FBRkQsS0EzRGdCO0FBK0R6QjdCLGdCQUFZLEVBQUU7QUFDWjJCLFdBQUssRUFBRSxPQURLO0FBRVpuQixlQUFTLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FGQztBQUdab0IsWUFBTSxFQUFFLENBSEk7QUFJWkQsZUFBUyxFQUFFLFFBSkM7QUFLWmpCLGNBQVEsRUFBRTtBQUxFLEtBL0RXO0FBc0V6QlYsUUFBSSxFQUFFO0FBQ0ppQixjQUFRLEVBQUUsVUFETjtBQUVKYSxXQUFLLEVBQUUsQ0FBQyxFQUZKO0FBR0pDLFNBQUcsRUFBRSxDQUFDLEVBSEY7QUFJSkMsZ0JBQVUsRUFBRTFCLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQ7QUFKUjtBQXRFbUIsR0FBWjtBQUFBLENBQWY7O0FBK0VleUIsMElBQVUsQ0FBQzVCLE1BQUQsQ0FBVixDQUFtQnpELGVBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNDAzZWUzOWZkMTEyNDhhMGRlYTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUHJvbW8sIEFjdGlvblR5cGUgYXMgUHJvbW9BY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvbW8uY29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSBhcyBDYXJ0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuXHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJ1xyXG5cclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5mdW5jdGlvbiBQcm9tb0NhdGVnb3JpZXMocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzXHJcbiAgY29uc3QgW3Byb21vU3RhdGUsIHByb21vRGlzcGF0Y2hdID0gdXNlUHJvbW8oKVxyXG4gIGNvbnN0IFtjYXJ0U3RhdGUsIGNhcnREaXNwYXRjaF0gPSB1c2VDYXJ0KClcclxuXHJcbiAgY29uc3Qgc2tlbGV0b25zID0gWydhJywgJ2InLCAnYyddXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvbW9zJylcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oc25hcHNob3QgPT4gcHJvbW9EaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFByb21vQWN0aW9uVHlwZS5TRVRfUFJPTU9TLFxyXG4gICAgICBwYXlsb2FkOiBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gZG9jLmRhdGEoKSksXHJcbiAgICB9KSlcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgaGFuZGxlT25BZGRUb0NhcnQgPSAocHJvbW8pID0+IHtcclxuICAgIGNhcnREaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IENhcnRBY3Rpb25UeXBlLkFERF9JVEVNLFxyXG4gICAgICBwYXlsb2FkOiBwcm9tbyxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXRDYXJ0SXRlbXMgPSAocHJvbW8pID0+IHtcclxuICAgIGNvbnN0IGl0ZW0gPSBjYXJ0U3RhdGUuaXRlbXMuZmlsdGVyKGl0ZW0gPT4gaXRlbS5pZCA9PT0gcHJvbW8uaWQpXHJcbiAgICByZXR1cm4gaXRlbVswXT8uYW1vdW50XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gY29tcG9uZW50PVwic2VjdGlvblwiPlxyXG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNFwiIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICDCoUFwcm92ZWNow6EgdG9kYXMgbnVlc3RyYXMgcHJvbW9jaW9uZXMhXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgIHshcHJvbW9TdGF0ZS5wcm9tb3MubGVuZ3RoXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICBza2VsZXRvbnMubWFwKChza2VsZXRvbikgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9IGtleT17c2tlbGV0b259PlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicmVjdFwiIHdpZHRoPXsnMTAwJSd9IGhlaWdodD17MTE4fSAvPlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiNjAlXCIgLz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgcHJvbW9TdGF0ZS5wcm9tb3MubWFwKChwcm9tbykgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBrZXk9e3Byb21vLm5hbWV9IGl0ZW0geHM9ezEyfSBtZD17cHJvbW8uY29sc30+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9IHN0eWxlPXt7IGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb21vLnBpY3R1cmV9KWB9fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9ID5cclxuICAgICAgICAgICAgICAgICAge3Byb21vLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucHJpY2V9IGNvbXBvbmVudD1cImgzXCIgdmFyaWFudD1cImg2XCIgY29sb3I9XCJpbmhlcml0XCI+XHJcbiAgICAgICAgICAgICAgICAgICR7cHJvbW8ucHJpY2V9XHJcbiAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMuZGlzY291bnR9PlxyXG4gICAgICAgICAgICAgICAgICB7cHJvbW8uZGlzY291bnR9JSBPRkZcclxuICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RzfT5cclxuICAgICAgICAgICAgICAgICAge3Byb21vLnByb2R1Y3RzLm1hcCgocHJvZHVjdCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0fT5cclxuICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9IC0gJHtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9tby5wYXJ0aWFsUHJpY2VcclxuICAgICAgICAgICAgICAgICAgICA/XHJcbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMucGFydGlhbFByaWNlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgwqFBaG9ycsOhcyB7cHJvbW8ucGFydGlhbFByaWNlIC0gcHJvbW8ucHJpY2V9IVxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJzZWNvbmRhcnlcIiB2YXJpYW50PVwib3V0bGluZWRcIiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVPbkFkZFRvQ2FydChwcm9tbyl9PlxyXG4gICAgICAgICAgICAgICAgICBBZ3JlZ2FyIGFsIGNhcnJpdG9cclxuICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldENhcnRJdGVtcyhwcm9tbylcclxuICAgICAgICAgICAgICAgICAgICA/IDxDaGlwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwfSBjb2xvcj1cInByaW1hcnlcIiBsYWJlbD17Z2V0Q2FydEl0ZW1zKHByb21vKX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcblByb21vQ2F0ZWdvcmllcy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgYmFja2Ryb3A6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDA1NScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICB9LFxyXG4gIGltYWdlU3JjOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDApLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VUaXRsZToge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggMTRweGAsXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBkaXNjb3VudDoge1xyXG4gICAgZm9udFNpemU6ICcyNXB4JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBwcm9kdWN0czoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcHJvZHVjdDoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBwYXJ0aWFsUHJpY2U6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgekluZGV4OiAzLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgfSxcclxuICBjaGlwOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHJpZ2h0OiAtMjAsXHJcbiAgICB0b3A6IC0yMCxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9tb0NhdGVnb3JpZXMpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=