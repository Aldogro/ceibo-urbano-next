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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9tb0NhdGVnb3JpZXMuanMiXSwibmFtZXMiOlsiUHJvbW9DYXRlZ29yaWVzIiwicHJvcHMiLCJjbGFzc2VzIiwidXNlUHJvbW8iLCJwcm9tb1N0YXRlIiwicHJvbW9EaXNwYXRjaCIsInNrZWxldG9ucyIsInVzZUVmZmVjdCIsImFwcCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJnZXQiLCJ0aGVuIiwic25hcHNob3QiLCJ0eXBlIiwiUHJvbW9BY3Rpb25UeXBlIiwiU0VUX1BST01PUyIsInBheWxvYWQiLCJkb2NzIiwibWFwIiwiZG9jIiwiZGF0YSIsIkdFVF9NQVhfRElTQ09VTlQiLCJyb290IiwidGl0bGUiLCJwcm9tb3MiLCJsZW5ndGgiLCJza2VsZXRvbiIsInByb21vIiwiaWQiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZm9udFNpemUiLCJmb250V2VpZ2h0IiwiYnJlYWtwb2ludHMiLCJ1cCIsIndpdGhTdHlsZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxTQUFTQSxlQUFULENBQXlCQyxLQUF6QixFQUFnQztBQUFBOztBQUFBOztBQUFBLE1BQ3RCQyxPQURzQixHQUNWRCxLQURVLENBQ3RCQyxPQURzQjs7QUFBQSxrQkFFTUMsd0VBQVEsRUFGZDtBQUFBO0FBQUEsTUFFdkJDLFVBRnVCO0FBQUEsTUFFWEMsYUFGVzs7QUFJOUIsTUFBTUMsU0FBUyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxHQUFYLENBQWxCO0FBRUFDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxzRUFBRyxDQUFDQyxTQUFK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LElBQXJCLENBSEUsRUFHMkI7QUFDNUJILGNBQVEsRUFBRTtBQURrQixLQUgzQixxTUFNV0osS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQU5YO0FBTG9CLEdBQVo7QUFBQSxDQUFmOztBQWdCZU0sMElBQVUsQ0FBQ1QsTUFBRCxDQUFWLENBQW1CbEMsZUFBbkIsQ0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xOTYyYTYwZGZlMDc0YmUzOGIwYS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VQcm9tbywgQWN0aW9uVHlwZSBhcyBQcm9tb0FjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Qcm9tby5jb250ZXh0J1xyXG5cclxuaW1wb3J0IFNrZWxldG9uIGZyb20gJ0BtYXRlcmlhbC11aS9sYWIvU2tlbGV0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBQcm9tb0l0ZW0gZnJvbSAnLi4vdmlld3MvUHJvbW9JdGVtJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5cclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmZ1bmN0aW9uIFByb21vQ2F0ZWdvcmllcyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHNcclxuICBjb25zdCBbcHJvbW9TdGF0ZSwgcHJvbW9EaXNwYXRjaF0gPSB1c2VQcm9tbygpXHJcblxyXG4gIGNvbnN0IHNrZWxldG9ucyA9IFsnYScsICdiJywgJ2MnXVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb21vcycpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKHNuYXBzaG90ID0+IHtcclxuICAgICAgcHJvbW9EaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogUHJvbW9BY3Rpb25UeXBlLlNFVF9QUk9NT1MsXHJcbiAgICAgICAgcGF5bG9hZDogc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpLFxyXG4gICAgICB9KVxyXG4gICAgICBwcm9tb0Rpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBQcm9tb0FjdGlvblR5cGUuR0VUX01BWF9ESVNDT1VOVCxcclxuICAgICAgfSlcclxuICAgIH0pXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IGNsYXNzTmFtZT17Y2xhc3Nlcy50aXRsZX0gdmFyaWFudD1cImg0XCIgbWFya2VkPVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgIMKhQXByb3ZlY2jDoSB0b2RhcyBudWVzdHJhcyBwcm9tb2Npb25lcyFcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8R3JpZCBjb250YWluZXI+XHJcbiAgICAgICAgeyFwcm9tb1N0YXRlLnByb21vcy5sZW5ndGhcclxuICAgICAgICAgID9cclxuICAgICAgICAgIHNrZWxldG9ucy5tYXAoKHNrZWxldG9uKSA9PiAoXHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NH0ga2V5PXtza2VsZXRvbn0+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJyZWN0XCIgd2lkdGg9eycxMDAlJ30gaGVpZ2h0PXsxMTh9IC8+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIHZhcmlhbnQ9XCJ0ZXh0XCIgLz5cclxuICAgICAgICAgICAgICA8U2tlbGV0b24gd2lkdGg9XCI2MCVcIiAvPlxyXG4gICAgICAgICAgICAgIDxici8+XHJcbiAgICAgICAgICAgICAgPFNrZWxldG9uIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICA6XHJcbiAgICAgICAgICBwcm9tb1N0YXRlLnByb21vcy5tYXAoKHByb21vKSA9PiAoXHJcbiAgICAgICAgICAgIDxQcm9tb0l0ZW0gcHJvbW89e3Byb21vfSBrZXk9e3Byb21vLmlkfS8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgIH1cclxuICAgICAgPC9HcmlkPlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9tb0NhdGVnb3JpZXMucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBmb250U2l6ZTogJzE4cHgnLFxyXG4gICAgZm9udFdlaWdodDogNzAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBmb250U2l6ZTogJzMwcHgnLFxyXG4gICAgfSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9tb0NhdGVnb3JpZXMpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=