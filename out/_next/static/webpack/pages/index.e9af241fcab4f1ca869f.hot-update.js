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
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_17__["default"].firestore().collection('promos').get().then(function (snapshot) {
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_11__["default"], {
    className: classes.root,
    component: "section",
    children: [selectedPromo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_views_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      open: openCarousel,
      setOpen: setOpenCarousel,
      images: selectedPromo.carousel
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 11
    }, this) : '', /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_12__["default"], {
      className: classes.title,
      variant: "h4",
      marked: "center",
      align: "center",
      component: "h2",
      children: "\xA1Aprovech\xE1 todas nuestras promociones!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 57,
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
            lineNumber: 65,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            variant: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            width: "60%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 68,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 69,
            columnNumber: 15
          }, _this)]
        }, skeleton, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, _this);
      }) : promoState.promos.map(function (promo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(PromoItem, {
          promo: promo
        }, promo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 74,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(PromoCategories, "XUex18J1evy1bwkYihD70xp6X3Y=", false, function () {
  return [_services_Promo_context__WEBPACK_IMPORTED_MODULE_5__["usePromo"], _services_Cart_context__WEBPACK_IMPORTED_MODULE_6__["useCart"]];
});

_c = PromoCategories;
PromoCategories.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_16___default.a.object.isRequired
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiUHJvbW9DYXRlZ29yaWVzIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUHJvbW8iLCJwcm9tb1N0YXRlIiwicHJvbW9EaXNwYXRjaCIsInVzZUNhcnQiLCJjYXJ0U3RhdGUiLCJjYXJ0RGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm9wZW5DYXJvdXNlbCIsInNldE9wZW5DYXJvdXNlbCIsInNlbGVjdGVkUHJvbW8iLCJzZXRTZWxlY3RlZFByb21vIiwic2tlbGV0b25zIiwidXNlRWZmZWN0IiwiYXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsInR5cGUiLCJQcm9tb0FjdGlvblR5cGUiLCJTRVRfUFJPTU9TIiwicGF5bG9hZCIsImRvY3MiLCJtYXAiLCJkb2MiLCJkYXRhIiwiaGFuZGxlT25BZGRUb0NhcnQiLCJwcm9tbyIsIkNhcnRBY3Rpb25UeXBlIiwiQUREX0lURU0iLCJnZXRDYXJ0SXRlbXMiLCJpdGVtIiwiaXRlbXMiLCJmaWx0ZXIiLCJpZCIsImFtb3VudCIsInJvb3QiLCJjYXJvdXNlbCIsInRpdGxlIiwicHJvbW9zIiwibGVuZ3RoIiwic2tlbGV0b24iLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYnJlYWtwb2ludHMiLCJ1cCIsImJhY2tkcm9wIiwid2lkdGgiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwb3NpdGlvbiIsInRvcCIsImxlZnQiLCJpbWFnZVNyYyIsInBhZGRpbmciLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50Iiwib3BhY2l0eSIsImltYWdlVGl0bGUiLCJjb2xvciIsInRleHRBbGlnbiIsInByaWNlIiwiekluZGV4IiwiZGlzY291bnQiLCJwcm9kdWN0cyIsIm1hcmdpbiIsInByb2R1Y3QiLCJwYXJ0aWFsUHJpY2UiLCJjaGlwIiwicmlnaHQiLCJtYXJnaW5MZWZ0Iiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQ3RCQyxPQURzQixHQUNWRCxLQURVLENBQ3RCQyxPQURzQjs7QUFBQSxrQkFFTUMsd0VBQVEsRUFGZDtBQUFBO0FBQUEsTUFFdkJDLFVBRnVCO0FBQUEsTUFFWEMsYUFGVzs7QUFBQSxpQkFHSUMsc0VBQU8sRUFIWDtBQUFBO0FBQUEsTUFHdkJDLFNBSHVCO0FBQUEsTUFHWkMsWUFIWTs7QUFBQSxrQkFJVUMsc0RBQVEsQ0FBQyxJQUFELENBSmxCO0FBQUEsTUFJdkJDLFlBSnVCO0FBQUEsTUFJVEMsZUFKUzs7QUFBQSxtQkFLWUYsc0RBQVEsQ0FBQyxJQUFELENBTHBCO0FBQUEsTUFLdkJHLGFBTHVCO0FBQUEsTUFLUkMsZ0JBTFE7O0FBTzlCLE1BQU1DLFNBQVMsR0FBRyxDQUFDLEdBQUQsRUFBTSxHQUFOLEVBQVcsR0FBWCxDQUFsQjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsc0VBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsUUFBM0IsRUFDQ0MsR0FERCxHQUVDQyxJQUZELENBRU0sVUFBQUMsUUFBUTtBQUFBLGFBQUloQixhQUFhLENBQUM7QUFDOUJpQixZQUFJLEVBQUVDLGtFQUFlLENBQUNDLFVBRFE7QUFFOUJDLGVBQU8sRUFBRUosUUFBUSxDQUFDSyxJQUFULENBQWNDLEdBQWQsQ0FBa0IsVUFBQUMsR0FBRztBQUFBLGlCQUFJQSxHQUFHLENBQUNDLElBQUosRUFBSjtBQUFBLFNBQXJCO0FBRnFCLE9BQUQsQ0FBakI7QUFBQSxLQUZkO0FBTUQsR0FQUSxFQU9OLEVBUE0sQ0FBVDs7QUFTQSxNQUFNQyxpQkFBaUIsR0FBRyxTQUFwQkEsaUJBQW9CLENBQUNDLEtBQUQsRUFBVztBQUNuQ3ZCLGdCQUFZLENBQUM7QUFDWGMsVUFBSSxFQUFFVSxpRUFBYyxDQUFDQyxRQURWO0FBRVhSLGFBQU8sRUFBRU07QUFGRSxLQUFELENBQVo7QUFJRCxHQUxEOztBQU9BLE1BQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLENBQUNILEtBQUQsRUFBVztBQUFBOztBQUM5QixRQUFNSSxJQUFJLEdBQUc1QixTQUFTLENBQUM2QixLQUFWLENBQWdCQyxNQUFoQixDQUF1QixVQUFBRixJQUFJO0FBQUEsYUFBSUEsSUFBSSxDQUFDRyxFQUFMLEtBQVlQLEtBQUssQ0FBQ08sRUFBdEI7QUFBQSxLQUEzQixDQUFiO0FBQ0EscUJBQU9ILElBQUksQ0FBQyxDQUFELENBQVgsMkNBQU8sT0FBU0ksTUFBaEI7QUFDRCxHQUhEOztBQUtBLHNCQUNFLHFFQUFDLG9FQUFEO0FBQVcsYUFBUyxFQUFFckMsT0FBTyxDQUFDc0MsSUFBOUI7QUFBb0MsYUFBUyxFQUFDLFNBQTlDO0FBQUEsZUFFSTVCLGFBQWEsZ0JBQ1gscUVBQUMsdURBQUQ7QUFBVSxVQUFJLEVBQUVGLFlBQWhCO0FBQThCLGFBQU8sRUFBRUMsZUFBdkM7QUFBd0QsWUFBTSxFQUFFQyxhQUFhLENBQUM2QjtBQUE5RTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRFcsR0FFWCxFQUpOLGVBTUUscUVBQUMsK0RBQUQ7QUFBWSxlQUFTLEVBQUV2QyxPQUFPLENBQUN3QyxLQUEvQjtBQUFzQyxhQUFPLEVBQUMsSUFBOUM7QUFBbUQsWUFBTSxFQUFDLFFBQTFEO0FBQW1FLFdBQUssRUFBQyxRQUF6RTtBQUFrRixlQUFTLEVBQUMsSUFBNUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORixlQVNFLHFFQUFDLDhEQUFEO0FBQU0sZUFBUyxNQUFmO0FBQUEsZ0JBQ0csQ0FBQ3RDLFVBQVUsQ0FBQ3VDLE1BQVgsQ0FBa0JDLE1BQW5CLEdBRUM5QixTQUFTLENBQUNhLEdBQVYsQ0FBYyxVQUFDa0IsUUFBRDtBQUFBLDRCQUNaLHFFQUFDLDhEQUFEO0FBQU0sY0FBSSxNQUFWO0FBQVcsWUFBRSxFQUFFLEVBQWY7QUFBbUIsWUFBRSxFQUFFLENBQXZCO0FBQUEsa0NBQ0UscUVBQUMsaUVBQUQ7QUFBVSxtQkFBTyxFQUFDLE1BQWxCO0FBQXlCLGlCQUFLLEVBQUUsTUFBaEM7QUFBd0Msa0JBQU0sRUFBRTtBQUFoRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGLGVBRUUscUVBQUMsaUVBQUQ7QUFBVSxtQkFBTyxFQUFDO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFHRSxxRUFBQyxpRUFBRDtBQUFVLGlCQUFLLEVBQUM7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFIRixlQUlFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGO0FBQUEsV0FBK0JBLFFBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRFk7QUFBQSxPQUFkLENBRkQsR0FZQ3pDLFVBQVUsQ0FBQ3VDLE1BQVgsQ0FBa0JoQixHQUFsQixDQUFzQixVQUFDSSxLQUFEO0FBQUEsNEJBQ3BCLHFFQUFDLFNBQUQ7QUFBVyxlQUFLLEVBQUVBO0FBQWxCLFdBQThCQSxLQUFLLENBQUNPLEVBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRG9CO0FBQUEsT0FBdEI7QUFiSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE4QkQ7O0dBNURRdEMsZTtVQUU2QkcsZ0UsRUFDRkcsOEQ7OztLQUgzQk4sZTtBQThEVEEsZUFBZSxDQUFDOEMsU0FBaEIsR0FBNEI7QUFDMUI1QyxTQUFPLEVBQUU2QyxrREFBUyxDQUFDQyxNQUFWLENBQWlCQztBQURBLENBQTVCOztBQUlBLElBQU1DLE1BQU0sR0FBRyxTQUFUQSxNQUFTLENBQUNDLEtBQUQ7QUFBQTs7QUFBQSxTQUFZO0FBQ3pCWCxRQUFJLEVBQUU7QUFDSlksZUFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBRFA7QUFFSkMsa0JBQVksRUFBRUgsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQUZWLEtBRG1CO0FBS3pCWCxTQUFLO0FBQ0hhLGNBQVEsRUFBRSxNQURQO0FBRUhDLGdCQUFVLEVBQUU7QUFGVCx5TEFHRkwsS0FBSyxDQUFDTSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUhFLEVBRzJCO0FBQzVCSCxjQUFRLEVBQUU7QUFEa0IsS0FIM0IscU1BTVdKLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FOWCxVQUxvQjtBQWF6Qk0sWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRSxNQURDO0FBRVJDLFlBQU0sRUFBRSxNQUZBO0FBR1JDLHFCQUFlLEVBQUUsV0FIVDtBQUlSQyxjQUFRLEVBQUUsVUFKRjtBQUtSQyxTQUFHLEVBQUUsQ0FMRztBQU1SQyxVQUFJLEVBQUU7QUFORSxLQWJlO0FBcUJ6QkMsWUFBUSxFQUFFO0FBQ1JOLFdBQUssRUFBRSxNQURDO0FBRVJDLFlBQU0sRUFBRSxNQUZBO0FBR1JNLGFBQU8sRUFBRWhCLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FIRDtBQUlSZSxvQkFBYyxFQUFFLE9BSlI7QUFLUkMsd0JBQWtCLEVBQUUsZUFMWjtBQU1SQyxhQUFPLEVBQUUsTUFORDtBQU9SQyxtQkFBYSxFQUFFLFFBUFA7QUFRUkMsZ0JBQVUsRUFBRSxRQVJKO0FBU1JDLG9CQUFjLEVBQUUsZUFUUjtBQVVSVixjQUFRLEVBQUUsVUFWRjtBQVdSLGlCQUFXO0FBQ1RXLGVBQU8sRUFBRTtBQURBO0FBWEgsS0FyQmU7QUFvQ3pCQyxjQUFVLEVBQUU7QUFDVlosY0FBUSxFQUFFLFVBREE7QUFFVmEsV0FBSyxFQUFFLE9BRkc7QUFHVmhCLFdBQUssRUFBRSxNQUhHO0FBSVZpQixlQUFTLEVBQUUsUUFKRDtBQUtWVixhQUFPLFlBQUtoQixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBQUwsZ0JBQTJCRixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBQTNCO0FBTEcsS0FwQ2E7QUEyQ3pCeUIsU0FBSyxFQUFFO0FBQ0x2QixjQUFRLEVBQUUsTUFETDtBQUVMcUIsV0FBSyxFQUFFLE9BRkY7QUFHTGhCLFdBQUssRUFBRSxNQUhGO0FBSUxpQixlQUFTLEVBQUUsUUFKTjtBQUtMRSxZQUFNLEVBQUU7QUFMSCxLQTNDa0I7QUFrRHpCQyxZQUFRLEVBQUU7QUFDUnpCLGNBQVEsRUFBRSxNQURGO0FBRVJxQixXQUFLLEVBQUUsT0FGQztBQUdSaEIsV0FBSyxFQUFFLE1BSEM7QUFJUmlCLGVBQVMsRUFBRSxRQUpIO0FBS1JFLFlBQU0sRUFBRTtBQUxBLEtBbERlO0FBeUR6QkUsWUFBUSxFQUFFO0FBQ1JDLFlBQU0sRUFBRS9CLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FEQTtBQUVSMEIsWUFBTSxFQUFFO0FBRkEsS0F6RGU7QUE2RHpCSSxXQUFPLEVBQUU7QUFDUFAsV0FBSyxFQUFFLE9BREE7QUFFUEcsWUFBTSxFQUFFO0FBRkQsS0E3RGdCO0FBaUV6QkssZ0JBQVksRUFBRTtBQUNaUixXQUFLLEVBQUUsT0FESztBQUVaeEIsZUFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBRkM7QUFHWjBCLFlBQU0sRUFBRSxDQUhJO0FBSVpGLGVBQVMsRUFBRSxRQUpDO0FBS1p0QixjQUFRLEVBQUU7QUFMRSxLQWpFVztBQXdFekI4QixRQUFJLEVBQUU7QUFDSnRCLGNBQVEsRUFBRSxVQUROO0FBRUp1QixXQUFLLEVBQUUsQ0FBQyxFQUZKO0FBR0p0QixTQUFHLEVBQUUsQ0FBQyxFQUhGO0FBSUp1QixnQkFBVSxFQUFFcEMsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQUpSO0FBeEVtQixHQUFaO0FBQUEsQ0FBZjs7QUFpRmVtQywwSUFBVSxDQUFDdEMsTUFBRCxDQUFWLENBQW1CbEQsZUFBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC5lOWFmMjQxZmNhYjRmMWNhODY5Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUHJvbW8sIEFjdGlvblR5cGUgYXMgUHJvbW9BY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvbW8uY29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ2FydCwgQWN0aW9uVHlwZSBhcyBDYXJ0QWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NhcnQuY29udGV4dCdcclxuXHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJ1xyXG5pbXBvcnQgQ2Fyb3VzZWwgZnJvbSAnLi4vdmlld3MvQ2Fyb3VzZWwnXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgQ2hpcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaGlwJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5cclxuaW1wb3J0IFZpc2liaWxpdHlJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9WaXNpYmlsaXR5J1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmZ1bmN0aW9uIFByb21vQ2F0ZWdvcmllcyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHNcclxuICBjb25zdCBbcHJvbW9TdGF0ZSwgcHJvbW9EaXNwYXRjaF0gPSB1c2VQcm9tbygpXHJcbiAgY29uc3QgW2NhcnRTdGF0ZSwgY2FydERpc3BhdGNoXSA9IHVzZUNhcnQoKVxyXG4gIGNvbnN0IFtvcGVuQ2Fyb3VzZWwsIHNldE9wZW5DYXJvdXNlbF0gPSB1c2VTdGF0ZSh0cnVlKVxyXG4gIGNvbnN0IFtzZWxlY3RlZFByb21vLCBzZXRTZWxlY3RlZFByb21vXSA9IHVzZVN0YXRlKG51bGwpXHJcblxyXG4gIGNvbnN0IHNrZWxldG9ucyA9IFsnYScsICdiJywgJ2MnXVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb21vcycpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKHNuYXBzaG90ID0+IHByb21vRGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBQcm9tb0FjdGlvblR5cGUuU0VUX1BST01PUyxcclxuICAgICAgcGF5bG9hZDogc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpLFxyXG4gICAgfSkpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uQWRkVG9DYXJ0ID0gKHByb21vKSA9PiB7XHJcbiAgICBjYXJ0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBDYXJ0QWN0aW9uVHlwZS5BRERfSVRFTSxcclxuICAgICAgcGF5bG9hZDogcHJvbW8sXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0Q2FydEl0ZW1zID0gKHByb21vKSA9PiB7XHJcbiAgICBjb25zdCBpdGVtID0gY2FydFN0YXRlLml0ZW1zLmZpbHRlcihpdGVtID0+IGl0ZW0uaWQgPT09IHByb21vLmlkKVxyXG4gICAgcmV0dXJuIGl0ZW1bMF0/LmFtb3VudFxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGNvbXBvbmVudD1cInNlY3Rpb25cIj5cclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdGVkUHJvbW9cclxuICAgICAgICA/IDxDYXJvdXNlbCBvcGVuPXtvcGVuQ2Fyb3VzZWx9IHNldE9wZW49e3NldE9wZW5DYXJvdXNlbH0gaW1hZ2VzPXtzZWxlY3RlZFByb21vLmNhcm91c2VsfSAvPlxyXG4gICAgICAgIDogJydcclxuICAgICAgfVxyXG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNFwiIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICDCoUFwcm92ZWNow6EgdG9kYXMgbnVlc3RyYXMgcHJvbW9jaW9uZXMhXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgIHshcHJvbW9TdGF0ZS5wcm9tb3MubGVuZ3RoXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICBza2VsZXRvbnMubWFwKChza2VsZXRvbikgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9IGtleT17c2tlbGV0b259PlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicmVjdFwiIHdpZHRoPXsnMTAwJSd9IGhlaWdodD17MTE4fSAvPlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiNjAlXCIgLz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgcHJvbW9TdGF0ZS5wcm9tb3MubWFwKChwcm9tbykgPT4gKFxyXG4gICAgICAgICAgICA8UHJvbW9JdGVtIHByb21vPXtwcm9tb30ga2V5PXtwcm9tby5pZH0vPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuUHJvbW9DYXRlZ29yaWVzLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICBiYWNrZHJvcDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMDU1JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICB9LFxyXG4gIGltYWdlU3JjOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDApLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMC45LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlVGl0bGU6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDQpfXB4IDE0cHhgLFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgZGlzY291bnQ6IHtcclxuICAgIGZvbnRTaXplOiAnMjVweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcHJvZHVjdHM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwKSxcclxuICAgIHpJbmRleDogMyxcclxuICB9LFxyXG4gIHByb2R1Y3Q6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcGFydGlhbFByaWNlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIHpJbmRleDogMyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICByaWdodDogLTIwLFxyXG4gICAgdG9wOiAtMjAsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUHJvbW9DYXRlZ29yaWVzKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9