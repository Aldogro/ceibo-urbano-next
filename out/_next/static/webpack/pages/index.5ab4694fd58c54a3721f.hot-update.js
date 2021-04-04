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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiUHJvbW9DYXRlZ29yaWVzIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUHJvbW8iLCJwcm9tb1N0YXRlIiwicHJvbW9EaXNwYXRjaCIsInNrZWxldG9ucyIsInVzZUVmZmVjdCIsImFwcCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJ0eXBlIiwiUHJvbW9BY3Rpb25UeXBlIiwiU0VUX1BST01PUyIsInBheWxvYWQiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsInJvb3QiLCJ0aXRsZSIsInByb21vcyIsImxlbmd0aCIsInNrZWxldG9uIiwicHJvbW8iLCJpZCIsInByb3BUeXBlcyIsIlByb3BUeXBlcyIsIm9iamVjdCIsImlzUmVxdWlyZWQiLCJzdHlsZXMiLCJ0aGVtZSIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJmb250U2l6ZSIsImZvbnRXZWlnaHQiLCJicmVha3BvaW50cyIsInVwIiwiYmFja2Ryb3AiLCJ3aWR0aCIsImhlaWdodCIsImJhY2tncm91bmRDb2xvciIsInBvc2l0aW9uIiwidG9wIiwibGVmdCIsImltYWdlU3JjIiwicGFkZGluZyIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiZGlzcGxheSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJvcGFjaXR5IiwiaW1hZ2VUaXRsZSIsImNvbG9yIiwidGV4dEFsaWduIiwid2l0aFN0eWxlcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLFNBQVNBLGVBQVQsQ0FBeUJDLEtBQXpCLEVBQWdDO0FBQUE7O0FBQUE7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QUxHO0FBcENhLEdBQVo7QUFBQSxDQUFmOztBQThDZXlCLDBJQUFVLENBQUM1QixNQUFELENBQVYsQ0FBbUJqQyxlQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjVhYjQ2OTRmZDU4YzU0YTM3MjFmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHdpdGhTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVByb21vLCBBY3Rpb25UeXBlIGFzIFByb21vQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb21vLmNvbnRleHQnXHJcblxyXG5pbXBvcnQgU2tlbGV0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2xhYi9Ta2VsZXRvbidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IFByb21vSXRlbSBmcm9tICcuLi92aWV3cy9Qcm9tb0l0ZW0nXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcblxyXG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuZnVuY3Rpb24gUHJvbW9DYXRlZ29yaWVzKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IFtwcm9tb1N0YXRlLCBwcm9tb0Rpc3BhdGNoXSA9IHVzZVByb21vKClcclxuXHJcbiAgY29uc3Qgc2tlbGV0b25zID0gWydhJywgJ2InLCAnYyddXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvbW9zJylcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oc25hcHNob3QgPT4gcHJvbW9EaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IFByb21vQWN0aW9uVHlwZS5TRVRfUFJPTU9TLFxyXG4gICAgICBwYXlsb2FkOiBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gZG9jLmRhdGEoKSksXHJcbiAgICB9KSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGNvbXBvbmVudD1cInNlY3Rpb25cIj5cclxuICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDRcIiBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgwqFBcHJvdmVjaMOhIHRvZGFzIG51ZXN0cmFzIHByb21vY2lvbmVzIVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxHcmlkIGNvbnRhaW5lcj5cclxuICAgICAgICB7IXByb21vU3RhdGUucHJvbW9zLmxlbmd0aFxyXG4gICAgICAgICAgP1xyXG4gICAgICAgICAgc2tlbGV0b25zLm1hcCgoc2tlbGV0b24pID0+IChcclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs0fSBrZXk9e3NrZWxldG9ufT5cclxuICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cInJlY3RcIiB3aWR0aD17JzEwMCUnfSBoZWlnaHQ9ezExOH0gLz5cclxuICAgICAgICAgICAgICA8U2tlbGV0b24gdmFyaWFudD1cInRleHRcIiAvPlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB3aWR0aD1cIjYwJVwiIC8+XHJcbiAgICAgICAgICAgICAgPGJyLz5cclxuICAgICAgICAgICAgICA8U2tlbGV0b24gLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICAgIDpcclxuICAgICAgICAgIHByb21vU3RhdGUucHJvbW9zLm1hcCgocHJvbW8pID0+IChcclxuICAgICAgICAgICAgPFByb21vSXRlbSBwcm9tbz17cHJvbW99IGtleT17cHJvbW8uaWR9Lz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0dyaWQ+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcblByb21vQ2F0ZWdvcmllcy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIGZvbnRTaXplOiAnMThweCcsXHJcbiAgICBmb250V2VpZ2h0OiA3MDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIGZvbnRTaXplOiAnMzBweCcsXHJcbiAgICB9LFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgYmFja2Ryb3A6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBoZWlnaHQ6ICcxMDAlJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogJyMwMDAwMDA1NScsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogMCxcclxuICAgIGxlZnQ6IDAsXHJcbiAgfSxcclxuICBpbWFnZVNyYzoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGhlaWdodDogJzEwMCUnLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAwKSxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIGNlbnRlcicsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1iZXR3ZWVuJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuOSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZVRpdGxlOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGNvbG9yOiAnd2hpdGUnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nKDIpfXB4ICR7dGhlbWUuc3BhY2luZyg0KX1weCAxNHB4YCxcclxuICB9LFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9tb0NhdGVnb3JpZXMpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=