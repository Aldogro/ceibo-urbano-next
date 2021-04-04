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
/* harmony import */ var _material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/lab/Skeleton */ "./node_modules/@material-ui/lab/esm/Skeleton/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _views_PromoItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../views/PromoItem */ "./modules/views/PromoItem.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
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

  var skeletons = ['a', 'b', 'c'];
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
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
    className: classes.root,
    component: "section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
      className: classes.title,
      variant: "h4",
      marked: "center",
      align: "center",
      component: "h2",
      children: "\xA1Aprovech\xE1 todas nuestras promociones!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      container: true,
      children: !promoState.promos.length ? skeletons.map(function (skeleton) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "rect",
            width: '100%',
            height: 118
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 39,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 40,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            width: "60%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 42,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 15
          }, _this)]
        }, skeleton, true, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 13
        }, _this);
      }) : promoState.promos.map(function (promo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_views_PromoItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          promo: promo
        }, promo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 5
  }, this);
}

_s(PromoCategories, "wIU4Kw1HDFA5kPfh+hswidk0854=", false, function () {
  return [_services_Promo_context__WEBPACK_IMPORTED_MODULE_5__["usePromo"]];
});

_c = PromoCategories;
PromoCategories.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_11___default.a.object.isRequired
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiUHJvbW9DYXRlZ29yaWVzIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUHJvbW8iLCJwcm9tb1N0YXRlIiwicHJvbW9EaXNwYXRjaCIsInNrZWxldG9ucyIsInVzZUVmZmVjdCIsImFwcCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJ0eXBlIiwiUHJvbW9BY3Rpb25UeXBlIiwiU0VUX1BST01PUyIsInBheWxvYWQiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsInJvb3QiLCJ0aXRsZSIsInByb21vcyIsImxlbmd0aCIsInNrZWxldG9uIiwicHJvbW8iLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHlsZXMiLCJ0aGVtZSIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJicmVha3BvaW50cyIsInVwIiwiYmFja2Ryb3AiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImltYWdlU3JjIiwicGFkZGluZyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJvcGFjaXR5IiwiaW1hZ2VUaXRsZSIsImNvbG9yIiwidGV4dEFsaWduIiwicHJpY2UiLCJ6SW5kZXgiLCJkaXNjb3VudCIsInByb2R1Y3RzIiwibWFyZ2luIiwicHJvZHVjdCIsInBhcnRpYWxQcmljZSIsImNoaXAiLCJyaWdodCIsIm1hcmdpbkxlZnQiLCJ3aXRoU3R5bGVzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7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dEMsTUFBRCxDQUFWLENBQW1CakMsZUFBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC44NzE3ZTMzMTk2OTM5NjFiYjcxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VQcm9tbywgQWN0aW9uVHlwZSBhcyBQcm9tb0FjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Qcm9tby5jb250ZXh0J1xyXG5cclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBQcm9tb0l0ZW0gZnJvbSAnLi4vdmlld3MvUHJvbW9JdGVtJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmZ1bmN0aW9uIFByb21vQ2F0ZWdvcmllcyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHNcclxuICBjb25zdCBbcHJvbW9TdGF0ZSwgcHJvbW9EaXNwYXRjaF0gPSB1c2VQcm9tbygpXHJcblxyXG4gIGNvbnN0IHNrZWxldG9ucyA9IFsnYScsICdiJywgJ2MnXVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb21vcycpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKHNuYXBzaG90ID0+IHByb21vRGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBQcm9tb0FjdGlvblR5cGUuU0VUX1BST01PUyxcclxuICAgICAgcGF5bG9hZDogc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpLFxyXG4gICAgfSkpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImg0XCIgbWFya2VkPVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgIMKhQXByb3ZlY2jDoSB0b2RhcyBudWVzdHJhcyBwcm9tb2Npb25lcyFcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgeyFwcm9tb1N0YXRlLnByb21vcy5sZW5ndGhcclxuICAgICAgICAgID9cclxuICAgICAgICAgIHNrZWxldG9ucy5tYXAoKHNrZWxldG9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NH0ga2V5PXtza2VsZXRvbn0+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWN0XCIgd2lkdGg9eycxMDAlJ30gaGVpZ2h0PXsxMTh9IC8+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICA8U2tlbGV0b24gd2lkdGg9XCI2MCVcIiAvPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICBwcm9tb1N0YXRlLnByb21vcy5tYXAoKHByb21vKSA9PiAoXHJcbiAgICAgICAgICAgIDxQcm9tb0l0ZW0gcHJvbW89e3Byb21vfSBrZXk9e3Byb21vLmlkfS8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9tb0NhdGVnb3JpZXMucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIGJhY2tkcm9wOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjMDAwMDAwNTUnLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBsZWZ0OiAwLFxyXG4gIH0sXHJcbiAgaW1hZ2VTcmM6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMywgMCksXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciBjZW50ZXInLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnc3BhY2UtYmV0d2VlbicsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VUaXRsZToge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBjb2xvcjogJ3doaXRlJyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggMTRweGAsXHJcbiAgfSxcclxuICBwcmljZToge1xyXG4gICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBkaXNjb3VudDoge1xyXG4gICAgZm9udFNpemU6ICcyNXB4JyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBwcm9kdWN0czoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKDIsIDApLFxyXG4gICAgekluZGV4OiAzLFxyXG4gIH0sXHJcbiAgcHJvZHVjdDoge1xyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB6SW5kZXg6IDMsXHJcbiAgfSxcclxuICBwYXJ0aWFsUHJpY2U6IHtcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgekluZGV4OiAzLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICAgIGZvbnRTaXplOiAnMjBweCcsXHJcbiAgfSxcclxuICBjaGlwOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHJpZ2h0OiAtMjAsXHJcbiAgICB0b3A6IC0yMCxcclxuICAgIG1hcmdpbkxlZnQ6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9tb0NhdGVnb3JpZXMpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=