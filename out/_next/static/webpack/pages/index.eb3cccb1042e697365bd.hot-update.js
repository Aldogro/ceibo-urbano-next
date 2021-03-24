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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Chip */ "./node_modules/@material-ui/core/esm/Chip/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");




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

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_12__["default"].firestore().collection('promos').get().then(function (snapshot) {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.root,
    component: "section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "h4",
      marked: "center",
      align: "center",
      component: "h2",
      children: "\xA1Aprovech\xE1 todas nuestras promociones!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.images,
      children: promoState.promos.map(function (promo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
          className: classes.imageWrapper,
          style: {
            width: '33.333%'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.imageSrc,
            style: {
              backgroundImage: "url(".concat(promo.picture, ")")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.imageBackdrop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.imageButton,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
              component: "h3",
              variant: "h6",
              color: "inherit",
              className: classes.imageTitle,
              children: [promo.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: classes.imageMarked
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
              component: "h3",
              variant: "h6",
              color: "inherit",
              children: ["$", promo.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: classes.description,
                children: promo.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 77,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 76,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_7__["default"], {
              color: "secondary",
              onClick: function onClick() {
                return handleOnAddToCart(promo);
              },
              children: ["Agregar al carrito", getCartItems(promo) ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Chip__WEBPACK_IMPORTED_MODULE_10__["default"], {
                className: classes.chip,
                color: "primary",
                label: getCartItems(promo)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 83,
                columnNumber: 21
              }, _this) : null]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 79,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this)]
        }, promo.name, true, {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 39,
    columnNumber: 5
  }, this);
}

_s(PromoCategories, "DSLJpQG0jhK2age9kBZGvLjRXuc=", false, function () {
  return [_services_Promo_context__WEBPACK_IMPORTED_MODULE_5__["usePromo"], _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["useCart"]];
});

_c = PromoCategories;
PromoCategories.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
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
      borderRadius: 0,
      height: 'auto'
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
    description: {
      padding: theme.spacing(0, 2)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiUHJvbW9DYXRlZ29yaWVzIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUHJvbW8iLCJwcm9tb1N0YXRlIiwicHJvbW9EaXNwYXRjaCIsInVzZUNhcnQiLCJjYXJ0U3RhdGUiLCJjYXJ0RGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIlByb21vQWN0aW9uVHlwZSIsIlNFVF9QUk9NT1MiLCJwYXlsb2FkIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJoYW5kbGVPbkFkZFRvQ2FydCIsInByb21vIiwiQ2FydEFjdGlvblR5cGUiLCJBRERfSVRFTSIsImdldENhcnRJdGVtcyIsIml0ZW0iLCJpdGVtcyIsImZpbHRlciIsImlkIiwiYW1vdW50Iiwicm9vdCIsImltYWdlcyIsInByb21vcyIsImltYWdlV3JhcHBlciIsIndpZHRoIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwaWN0dXJlIiwiaW1hZ2VCYWNrZHJvcCIsImltYWdlQnV0dG9uIiwiaW1hZ2VUaXRsZSIsIm5hbWUiLCJpbWFnZU1hcmtlZCIsInByaWNlIiwiZGVzY3JpcHRpb24iLCJjaGlwIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0eWxlcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsInBvc2l0aW9uIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4Iiwib3BhY2l0eSIsImJvcmRlciIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZCIsImJsYWNrIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRlIiwicGFkZGluZyIsIm1hcmdpbkxlZnQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsZUFBVCxDQUF5QkMsS0FBekIsRUFBZ0M7QUFBQTs7QUFBQTs7QUFBQSxNQUN0QkMsT0FEc0IsR0FDVkQsS0FEVSxDQUN0QkMsT0FEc0I7O0FBQUEsa0JBRU1DLHdFQUFRLEVBRmQ7QUFBQTtBQUFBLE1BRXZCQyxVQUZ1QjtBQUFBLE1BRVhDLGFBRlc7O0FBQUEsaUJBR0lDLHNFQUFPLEVBSFg7QUFBQTtBQUFBLE1BR3ZCQyxTQUh1QjtBQUFBLE1BR1pDLFlBSFk7O0FBSzlCQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsc0VBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsUUFBM0IsRUFDQ0MsR0FERCxHQUVDQyxJQUZELENBRU0sVUFBQUMsUUFBUTtBQUFBLGFBQUlWLGFBQWEsQ0FBQztBQUM5QlcsWUFBSSxFQUFFQyxrRUFBZSxDQUFDQyxVQURRO0FBRTlCQyxlQUFPLEVBQUVKLFFBQVEsQ0FBQ0ssSUFBVCxDQUFjQyxHQUFkLENBQWtCLFVBQUFDLEdBQUc7QUFBQSxpQkFBSUEsR0FBRyxDQUFDQyxJQUFKLEVBQUo7QUFBQSxTQUFyQjtBQUZxQixPQUFELENBQWpCO0FBQUEsS0FGZDtBQU1ELEdBUFEsRUFPTixFQVBNLENBQVQ7O0FBU0EsTUFBTUMsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixDQUFDQyxLQUFELEVBQVc7QUFDbkNqQixnQkFBWSxDQUFDO0FBQ1hRLFVBQUksRUFB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QUNFLE9BQU4sQ0FBYyxDQUFkLENBQUwsZ0JBQTJCRixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBQTNCLFlBRkc7QUFHVkMsa0JBQVksRUFBRTtBQUhKLEtBOURhO0FBbUV6QlYsZUFBVyxFQUFFO0FBQ1h1QyxhQUFPLEVBQUVoQyxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBREUsS0FuRVk7QUFzRXpCWCxlQUFXLEVBQUU7QUFDWGlCLFlBQU0sRUFBRSxDQURHO0FBRVh6QixXQUFLLEVBQUUsRUFGSTtBQUdYNEMsZ0JBQVUsRUFBRTNCLEtBQUssQ0FBQ3NCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FIdEI7QUFJWGxCLGNBQVEsRUFBRSxVQUpDO0FBS1hXLFlBQU0sRUFBRSxDQUFDLENBTEU7QUFNWEgsVUFBSSxFQUFFLGlCQU5LO0FBT1hlLGdCQUFVLEVBQUU3QixLQUFLLENBQUM4QixXQUFOLENBQWtCQyxNQUFsQixDQUF5QixTQUF6QjtBQVBELEtBdEVZO0FBK0V6QnJDLFFBQUksRUFBRTtBQUNKdUMsZ0JBQVUsRUFBRWpDLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQ7QUFEUjtBQS9FbUIsR0FBWjtBQUFBLENBQWY7O0FBcUZlZ0MsMElBQVUsQ0FBQ25DLE1BQUQsQ0FBVixDQUFtQnRELGVBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWIzY2NjYjEwNDJlNjk3MzY1YmQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUHJvbW8sIEFjdGlvblR5cGUgYXMgUHJvbW9BY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvbW8uY29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSBhcyBDYXJ0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5mdW5jdGlvbiBQcm9tb0NhdGVnb3JpZXMocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzXHJcbiAgY29uc3QgW3Byb21vU3RhdGUsIHByb21vRGlzcGF0Y2hdID0gdXNlUHJvbW8oKVxyXG4gIGNvbnN0IFtjYXJ0U3RhdGUsIGNhcnREaXNwYXRjaF0gPSB1c2VDYXJ0KClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9tb3MnKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbihzbmFwc2hvdCA9PiBwcm9tb0Rpc3BhdGNoKHtcclxuICAgICAgdHlwZTogUHJvbW9BY3Rpb25UeXBlLlNFVF9QUk9NT1MsXHJcbiAgICAgIHBheWxvYWQ6IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKSxcclxuICAgIH0pKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVPbkFkZFRvQ2FydCA9IChwcm9tbykgPT4ge1xyXG4gICAgY2FydERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQ2FydEFjdGlvblR5cGUuQUREX0lURU0sXHJcbiAgICAgIHBheWxvYWQ6IHByb21vLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldENhcnRJdGVtcyA9IChwcm9tbykgPT4ge1xyXG4gICAgY29uc3QgaXRlbSA9IGNhcnRTdGF0ZS5pdGVtcy5maWx0ZXIoaXRlbSA9PiBpdGVtLmlkID09PSBwcm9tby5pZClcclxuICAgIHJldHVybiBpdGVtWzBdPy5hbW91bnRcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICDCoUFwcm92ZWNow6EgdG9kYXMgbnVlc3RyYXMgcHJvbW9jaW9uZXMhXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VzfT5cclxuICAgICAgICB7cHJvbW9TdGF0ZS5wcm9tb3MubWFwKChwcm9tbykgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e3Byb21vLm5hbWV9XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVdyYXBwZXJ9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgd2lkdGg6ICczMy4zMzMlJyxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVNyY31cclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZEltYWdlOiBgdXJsKCR7cHJvbW8ucGljdHVyZX0pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Byb21vLm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICR7cHJvbW8ucHJpY2V9XHJcbiAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuZGVzY3JpcHRpb259Pntwcm9tby5kZXNjcmlwdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInNlY29uZGFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9uQWRkVG9DYXJ0KHByb21vKX0+XHJcbiAgICAgICAgICAgICAgICBBZ3JlZ2FyIGFsIGNhcnJpdG9cclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgZ2V0Q2FydEl0ZW1zKHByb21vKVxyXG4gICAgICAgICAgICAgICAgICA/IDxDaGlwIGNsYXNzTmFtZT17Y2xhc3Nlcy5jaGlwfSBjb2xvcj1cInByaW1hcnlcIiBsYWJlbD17Z2V0Q2FydEl0ZW1zKHByb21vKX0gLz5cclxuICAgICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9tb0NhdGVnb3JpZXMucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIGltYWdlczoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIGltYWdlV3JhcHBlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgaGVpZ2h0OiAnYXV0bycsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXIgJGltYWdlQmFja2Ryb3AnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXIgJGltYWdlTWFya2VkJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyICRpbWFnZVRpdGxlJzoge1xyXG4gICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gIH0sXHJcbiAgaW1hZ2VTcmM6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgNDAlJyxcclxuICB9LFxyXG4gIGltYWdlQmFja2Ryb3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknKSxcclxuICB9LFxyXG4gIGltYWdlVGl0bGU6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggMTRweGAsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxMnB4J1xyXG4gIH0sXHJcbiAgZGVzY3JpcHRpb246IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgfSxcclxuICBpbWFnZU1hcmtlZDoge1xyXG4gICAgaGVpZ2h0OiAzLFxyXG4gICAgd2lkdGg6IDE4LFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogLTIsXHJcbiAgICBsZWZ0OiAnY2FsYyg1MCUgLSA5cHgpJyxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgbWFyZ2luTGVmdDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9XHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb21vQ2F0ZWdvcmllcylcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==