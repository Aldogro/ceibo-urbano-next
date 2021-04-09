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
      promoDispatch({
        type: _services_Promo_context__WEBPACK_IMPORTED_MODULE_5__["ActionType"].SET_PROMOS,
        payload: snapshot.docs.map(function (doc) {
          return doc.data();
        })
      });
      promoDispatch({
        type: _services_Promo_context__WEBPACK_IMPORTED_MODULE_5__["ActionType"].GET_MAX_DISCOUNT
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
      lineNumber: 36,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
      container: true,
      spacing: 2,
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
            lineNumber: 44,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            variant: "text"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {
            width: "60%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 46,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("br", {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_lab_Skeleton__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 48,
            columnNumber: 15
          }, _this)]
        }, skeleton, true, {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 13
        }, _this);
      }) : promoState.promos.map(function (promo) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_views_PromoItem__WEBPACK_IMPORTED_MODULE_8__["default"], {
          promo: promo
        }, promo.id, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 35,
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
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_title, "marginBottom", theme.spacing(4)), _title)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiUHJvbW9DYXRlZ29yaWVzIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUHJvbW8iLCJwcm9tb1N0YXRlIiwicHJvbW9EaXNwYXRjaCIsInNrZWxldG9ucyIsInVzZUVmZmVjdCIsImFwcCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJ0eXBlIiwiUHJvbW9BY3Rpb25UeXBlIiwiU0VUX1BST01PUyIsInBheWxvYWQiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsIkdFVF9NQVhfRElTQ09VTlQiLCJyb290IiwidGl0bGUiLCJwcm9tb3MiLCJsZW5ndGgiLCJza2VsZXRvbiIsInByb21vIiwiaWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYnJlYWtwb2ludHMiLCJ1cCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQ3RCQyxPQURzQixHQUNWRCxLQURVLENBQ3RCQyxPQURzQjs7QUFBQSxrQkFFTUMsd0VBQVEsRUFGZDtBQUFBO0FBQUEsTUFFdkJDLFVBRnVCO0FBQUEsTUFFWEMsYUFGVzs7QUFJOUIsTUFBTUMsU0FBUyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWxCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxzRUFBRyxDQUFDQyxTQUFK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QUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUhFLEVBRzJCO0FBQzVCSCxjQUFRLEVBQUU7QUFEa0IsS0FIM0IscU1BTVdKLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FOWDtBQUxvQixHQUFaO0FBQUEsQ0FBZjs7QUFnQmVNLDBJQUFVLENBQUNULE1BQUQsQ0FBVixDQUFtQmxDLGVBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMmM4YjUyYTEwNmZiOTA3ZGZkMDYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUHJvbW8sIEFjdGlvblR5cGUgYXMgUHJvbW9BY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvbW8uY29udGV4dCdcclxuXHJcbmltcG9ydCBTa2VsZXRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvbGFiL1NrZWxldG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgUHJvbW9JdGVtIGZyb20gJy4uL3ZpZXdzL1Byb21vSXRlbSdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5mdW5jdGlvbiBQcm9tb0NhdGVnb3JpZXMocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzXHJcbiAgY29uc3QgW3Byb21vU3RhdGUsIHByb21vRGlzcGF0Y2hdID0gdXNlUHJvbW8oKVxyXG5cclxuICBjb25zdCBza2VsZXRvbnMgPSBbJ2EnLCAnYicsICdjJ11cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9tb3MnKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgIHByb21vRGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IFByb21vQWN0aW9uVHlwZS5TRVRfUFJPTU9TLFxyXG4gICAgICAgIHBheWxvYWQ6IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKSxcclxuICAgICAgfSlcclxuICAgICAgcHJvbW9EaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogUHJvbW9BY3Rpb25UeXBlLkdFVF9NQVhfRElTQ09VTlQsXHJcbiAgICAgIH0pXHJcbiAgICB9KVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gY29tcG9uZW50PVwic2VjdGlvblwiPlxyXG4gICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNFwiIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICDCoUFwcm92ZWNow6EgdG9kYXMgbnVlc3RyYXMgcHJvbW9jaW9uZXMhXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgIHshcHJvbW9TdGF0ZS5wcm9tb3MubGVuZ3RoXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICBza2VsZXRvbnMubWFwKChza2VsZXRvbikgPT4gKFxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9IGtleT17c2tlbGV0b259PlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwicmVjdFwiIHdpZHRoPXsnMTAwJSd9IGhlaWdodD17MTE4fSAvPlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiB2YXJpYW50PVwidGV4dFwiIC8+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIHdpZHRoPVwiNjAlXCIgLz5cclxuICAgICAgICAgICAgICA8YnIvPlxyXG4gICAgICAgICAgICAgIDxTa2VsZXRvbiAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgOlxyXG4gICAgICAgICAgcHJvbW9TdGF0ZS5wcm9tb3MubWFwKChwcm9tbykgPT4gKFxyXG4gICAgICAgICAgICA8UHJvbW9JdGVtIHByb21vPXtwcm9tb30ga2V5PXtwcm9tby5pZH0vPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICB9XHJcbiAgICAgIDwvR3JpZD5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuUHJvbW9DYXRlZ29yaWVzLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgZm9udFNpemU6ICcxOHB4JyxcclxuICAgIGZvbnRXZWlnaHQ6IDcwMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgZm9udFNpemU6ICczMHB4JyxcclxuICAgIH0sXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUHJvbW9DYXRlZ29yaWVzKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9