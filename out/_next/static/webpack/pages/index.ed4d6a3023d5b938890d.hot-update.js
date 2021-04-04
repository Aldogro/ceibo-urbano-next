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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_12__["default"], {
    className: classes.root,
    component: "section",
    children: [selectedPromo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_views_Carousel__WEBPACK_IMPORTED_MODULE_8__["default"], {
      open: openCarousel,
      setOpen: setOpenCarousel,
      images: selectedPromo.carousel
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 40,
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
      lineNumber: 43,
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
            lineNumber: 51,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            variant: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {
            width: "60%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 55,
            columnNumber: 15
          }, _this)]
        }, skeleton, true, {
          fileName: _jsxFileName,
          lineNumber: 50,
          columnNumber: 13
        }, _this);
      }) : promoState.promos.map(function (promo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_views_PromoItem__WEBPACK_IMPORTED_MODULE_10__["default"], {
          promo: promo
        }, promo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 60,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 37,
    columnNumber: 5
  }, this);
}

_s(PromoCategories, "wIU4Kw1HDFA5kPfh+hswidk0854=", false, function () {
  return [_services_Promo_context__WEBPACK_IMPORTED_MODULE_5__["usePromo"]];
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiUHJvbW9DYXRlZ29yaWVzIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUHJvbW8iLCJwcm9tb1N0YXRlIiwicHJvbW9EaXNwYXRjaCIsInNrZWxldG9ucyIsInVzZUVmZmVjdCIsImFwcCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJ0eXBlIiwiUHJvbW9BY3Rpb25UeXBlIiwiU0VUX1BST01PUyIsInBheWxvYWQiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsInJvb3QiLCJzZWxlY3RlZFByb21vIiwib3BlbkNhcm91c2VsIiwic2V0T3BlbkNhcm91c2VsIiwiY2Fyb3VzZWwiLCJ0aXRsZSIsInByb21vcyIsImxlbmd0aCIsInNrZWxldG9uIiwicHJvbW8iLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHlsZXMiLCJ0aGVtZSIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJicmVha3BvaW50cyIsInVwIiwiYmFja2Ryb3AiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImltYWdlU3JjIiwicGFkZGluZyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJvcGFjaXR5IiwiaW1hZ2VUaXRsZSIsImNvbG9yIiwidGV4dEFsaWduIiwicHJpY2UiLCJ6SW5kZXgiLCJkaXNjb3VudCIsInByb2R1Y3RzIiwibWFyZ2luIiwicHJvZHVjdCIsInBhcnRpYWxQcmljZSIsImNoaXAiLCJyaWdodCIsIm1hcmdpbkxl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Q0FISTtBQUlaRixlQUFTLEVBQUUsUUFKQztBQUtadEIsY0FBUSxFQUFFO0FBTEUsS0FqRVc7QUF3RXpCOEIsUUFBSSxFQUFFO0FBQ0p0QixjQUFRLEVBQUUsVUFETjtBQUVKdUIsV0FBSyxFQUFFLENBQUMsRUFGSjtBQUdKdEIsU0FBRyxFQUFFLENBQUMsRUFIRjtBQUlKdUIsZ0JBQVUsRUFBRXBDLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQ7QUFKUjtBQXhFbUIsR0FBWjtBQUFBLENBQWY7O0FBaUZlbUMsMElBQVUsQ0FBQ3RDLE1BQUQsQ0FBVixDQUFtQnJDLGVBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguZWQ0ZDZhMzAyM2Q1YjkzODg5MGQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVByb21vLCBBY3Rpb25UeXBlIGFzIFByb21vQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb21vLmNvbnRleHQnXHJcbmltcG9ydCB7IHVzZUNhcnQsIEFjdGlvblR5cGUgYXMgQ2FydEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9DYXJ0LmNvbnRleHQnXHJcblxyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvbidcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJy4uL3ZpZXdzL0Nhcm91c2VsJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgUHJvbW9JdGVtIGZyb20gJy4uL3ZpZXdzL1Byb21vSXRlbSdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBDaGlwIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NoaXAnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nXHJcblxyXG5pbXBvcnQgVmlzaWJpbGl0eUljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL1Zpc2liaWxpdHknXHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuZnVuY3Rpb24gUHJvbW9DYXRlZ29yaWVzKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IFtwcm9tb1N0YXRlLCBwcm9tb0Rpc3BhdGNoXSA9IHVzZVByb21vKClcclxuXHJcbiAgY29uc3Qgc2tlbGV0b25zID0gWydhJywgJ2InLCAnYyddXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvbW9zJylcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oc25hcHNob3QgPT4gcHJvbW9EaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFByb21vQWN0aW9uVHlwZS5TRVRfUFJPTU9TLFxyXG4gICAgICBwYXlsb2FkOiBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gZG9jLmRhdGEoKSksXHJcbiAgICB9KSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGNvbXBvbmVudD1cInNlY3Rpb25cIj5cclxuICAgICAge1xyXG4gICAgICAgIHNlbGVjdGVkUHJvbW9cclxuICAgICAgICA/IDxDYXJvdXNlbCBvcGVuPXtvcGVuQ2Fyb3VzZWx9IHNldE9wZW49e3NldE9wZW5DYXJvdXNlbH0gaW1hZ2VzPXtzZWxlY3RlZFByb21vLmNhcm91c2VsfSAvPlxyXG4gICAgICAgIDogJydcclxuICAgICAgfVxyXG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNFwiIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICDCoUFwcm92ZWNow6EgdG9kYXMgbnVlc3RyYXMgcHJvbW9jaW9uZXMhXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyPlxyXG4gICAgICAgIHshcHJvbW9TdGF0ZS5wcm9tb3MubGVuZ3RoXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICBza2VsZXRvbnMubWFwKChza2VsZXRvbikgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9IGtleT17c2tlbGV0b259PlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicmVjdFwiIHdpZHRoPXsnMTAwJSd9IGhlaWdodD17MTE4fSAvPlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiNjAlXCIgLz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgcHJvbW9TdGF0ZS5wcm9tb3MubWFwKChwcm9tbykgPT4gKFxyXG4gICAgICAgICAgICA8UHJvbW9JdGVtIHByb21vPXtwcm9tb30ga2V5PXtwcm9tby5pZH0vPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuUHJvbW9DYXRlZ29yaWVzLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICBiYWNrZHJvcDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiAnIzAwMDAwMDU1JyxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgbGVmdDogMCxcclxuICB9LFxyXG4gIGltYWdlU3JjOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDApLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgY2VudGVyJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ3NwYWNlLWJldHdlZW4nLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgb3BhY2l0eTogMC45LFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlVGl0bGU6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDQpfXB4IDE0cHhgLFxyXG4gIH0sXHJcbiAgcHJpY2U6IHtcclxuICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgZGlzY291bnQ6IHtcclxuICAgIGZvbnRTaXplOiAnMjVweCcsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcHJvZHVjdHM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygyLCAwKSxcclxuICAgIHpJbmRleDogMyxcclxuICB9LFxyXG4gIHByb2R1Y3Q6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcGFydGlhbFByaWNlOiB7XHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIHpJbmRleDogMyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBmb250U2l6ZTogJzIwcHgnLFxyXG4gIH0sXHJcbiAgY2hpcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICByaWdodDogLTIwLFxyXG4gICAgdG9wOiAtMjAsXHJcbiAgICBtYXJnaW5MZWZ0OiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH1cclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUHJvbW9DYXRlZ29yaWVzKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9