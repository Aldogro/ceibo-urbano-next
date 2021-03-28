webpackHotUpdate_N_E("pages/promos/[id]/edit",{

/***/ "./pages/promos/[id]/edit.js":
/*!***********************************!*\
  !*** ./pages/promos/[id]/edit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_Promo_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/Promo.context */ "./services/Promo.context.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _modules_components_form_FormPromo__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/components/form/FormPromo */ "./modules/components/form/FormPromo.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../firebase/firebase.config */ "./firebase/firebase.config.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\promos\\[id]\\edit.js",
    _this = undefined,
    _s = $RefreshSig$();











var EditPromoPage = function EditPromoPage() {
  _s();

  var _usePromo = Object(_services_Promo_context__WEBPACK_IMPORTED_MODULE_4__["usePromo"])(),
      _usePromo2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_usePromo, 2),
      promoState = _usePromo2[0],
      promoDispatch = _usePromo2[1];

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var id = router.query.id;

    if (router.query.id) {
      getPromo(id);
    }
  }, [router.query]);

  var getPromo = function getPromo(id) {
    Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_10__["getItem"])({
      collection: 'promos',
      id: id
    }).then(function (snapshot) {
      promoDispatch({
        type: _services_Promo_context__WEBPACK_IMPORTED_MODULE_4__["ActionType"].SET_PROMO,
        payload: snapshot.data()
      });
    });
  };

  var updatePromo = function updatePromo(data) {
    Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_10__["editItem"])({
      collection: 'promos',
      id: router.query.id,
      data: data
    }).then(function () {
      return router.push('/promos');
    }) // FIX ME agregar toast que avise que se editó correctamente
    ["catch"](function (error) {
      return console.log(error);
    }); // toast que avise que algo salió mal
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
        className: classes.title,
        variant: "h4",
        children: "Editar Promos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 9
      }, _this), promoState !== null && promoState !== void 0 && promoState.promo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_components_form_FormPromo__WEBPACK_IMPORTED_MODULE_7__["default"], {
        onSubmit: function onSubmit(data) {
          return updatePromo(data);
        },
        promo: promoState.promo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 13
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 42,
    columnNumber: 5
  }, _this);
};

_s(EditPromoPage, "ZMm/JJocXt6GQPbjiJS+HoEix8Q=", false, function () {
  return [_services_Promo_context__WEBPACK_IMPORTED_MODULE_4__["usePromo"], useStyles, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"]];
});

_c = EditPromoPage;
/* harmony default export */ __webpack_exports__["default"] = (EditPromoPage);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    container: {
      margin: theme.spacing('70px', 'auto')
    },
    title: {
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  };
});

var _c;

$RefreshReg$(_c, "EditPromoPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvbW9zLy9lZGl0LmpzIl0sIm5hbWVzIjpbIkVkaXRQcm9tb1BhZ2UiLCJ1c2VQcm9tbyIsInByb21vU3RhdGUiLCJwcm9tb0Rpc3BhdGNoIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsImlkIiwicXVlcnkiLCJnZXRQcm9tbyIsImdldEl0ZW0iLCJjb2xsZWN0aW9uIiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIkFjdGlvblR5cGUiLCJTRVRfUFJPTU8iLCJwYXlsb2FkIiwiZGF0YSIsInVwZGF0ZVByb21vIiwiZWRpdEl0ZW0iLCJwdXNoIiwiZXJyb3IiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwidGl0bGUiLCJwcm9tbyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyx3RUFBUSxFQURsQjtBQUFBO0FBQUEsTUFDbkJDLFVBRG1CO0FBQUEsTUFDUEMsYUFETzs7QUFFMUIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4QjtBQUVBQyx5REFBUyxDQUFDLFlBQU07QUFBQSxRQUNOQyxFQURNLEdBQ0NILE1BQU0sQ0FBQ0ksS0FEUixDQUNORCxFQURNOztBQUVkLFFBQUlILE1BQU0sQ0FBQ0ksS0FBUCxDQUFhRCxFQUFqQixFQUFxQjtBQUNuQkUsY0FBUSxDQUFDRixFQUFELENBQVI7QUFDRDtBQUNGLEdBTFEsRUFLTixDQUFDSCxNQUFNLENBQUNJLEtBQVIsQ0FMTSxDQUFUOztBQU9BLE1BQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXLENBQUNGLEVBQUQsRUFBUTtBQUN2QkcsOEVBQU8sQ0FBQztBQUFFQyxnQkFBVSxFQUFFLFFBQWQ7QUFBd0JKLFFBQUUsRUFBRkE7QUFBeEIsS0FBRCxDQUFQLENBQ0dLLElBREgsQ0FDUSxVQUFBQyxRQUFRLEVBQUk7QUFDaEJaLG1CQUFhLENBQUM7QUFDWmEsWUFBSSxFQUFFQyxrRUFBVSxDQUFDQyxTQURMO0FBRVpDLGVBQU8sRUFBRUosUUFBUSxDQUFDSyxJQUFUO0FBRkcsT0FBRCxDQUFiO0FBSUQsS0FOSDtBQU9ELEdBUkQ7O0FBVUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsSUFBRCxFQUFVO0FBQzVCRSwrRUFBUSxDQUFDO0FBQUVULGdCQUFVLEVBQUUsUUFBZDtBQUF3QkosUUFBRSxFQUFFSCxNQUFNLENBQUNJLEtBQVAsQ0FBYUQsRUFBekM7QUFBNkNXLFVBQUksRUFBSkE7QUFBN0MsS0FBRCxDQUFSLENBQ0dOLElBREgsQ0FDUTtBQUFBLGFBQU1SLE1BQU0sQ0FBQ2lCLElBQVAsQ0FBWSxTQUFaLENBQU47QUFBQSxLQURSLEVBQ3NDO0FBRHRDLGNBRVMsVUFBQUMsS0FBSztBQUFBLGFBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixLQUFaLENBQUo7QUFBQSxLQUZkLEVBRDRCLENBR1U7QUFDdkMsR0FKRDs7QUFNQSxzQkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSw0QkFDRSxxRUFBQyxnRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRSxxRUFBQyxtRUFBRDtBQUFXLGVBQVMsRUFBRXBCLE9BQU8sQ0FBQ3VCLFNBQTlCO0FBQUEsOEJBQ0UscUVBQUMsb0VBQUQ7QUFBWSxpQkFBUyxFQUFFdkIsT0FBTyxDQUFDd0IsS0FBL0I7QUFBc0MsZUFBTyxFQUFDLElBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsRUFJRzFCLFVBQVUsU0FBVixJQUFBQSxVQUFVLFdBQVYsSUFBQUEsVUFBVSxDQUFFMkIsS0FBWixnQkFDRyxxRUFBQywwRUFBRDtBQUFXLGdCQUFRLEVBQUUsa0JBQUNULElBQUQ7QUFBQSxpQkFBVUMsV0FBVyxDQUFDRCxJQUFELENBQXJCO0FBQUEsU0FBckI7QUFBa0QsYUFBSyxFQUFFbEIsVUFBVSxDQUFDMkI7QUFBcEU7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURILEdBRUcsSUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWNELENBMUNEOztHQUFNN0IsYTtVQUNnQ0MsZ0UsRUFDcEJJLFMsRUFDREUscUQ7OztLQUhYUCxhO0FBNENTQSw0RUFBZjtBQUVBLElBQU1LLFNBQVMsR0FBR3lCLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNKLGFBQVMsRUFBRTtBQUNUSyxZQUFNLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLE1BQWQsRUFBc0IsTUFBdEI7QUFEQyxLQUQ0QjtBQUl2Q0wsU0FBSyxFQUFFO0FBQ0xNLGVBQVMsRUFBRSxNQUROO0FBRUxDLGtCQUFZLEVBQUU7QUFGVDtBQUpnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9tb3MvW2lkXS9lZGl0LjgxMzQxNzQ5NmQxMTc0YWI0OGIwLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VQcm9tbywgQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uLy4uL3NlcnZpY2VzL1Byb21vLmNvbnRleHQnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcblxyXG5pbXBvcnQgQXBwQXBwQmFyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdmlld3MvQXBwQXBwQmFyJ1xyXG5pbXBvcnQgRm9ybVByb21vIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY29tcG9uZW50cy9mb3JtL0Zvcm1Qcm9tbydcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcblxyXG5pbXBvcnQgeyBnZXRJdGVtLCBlZGl0SXRlbSB9IGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmNvbnN0IEVkaXRQcm9tb1BhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb21vU3RhdGUsIHByb21vRGlzcGF0Y2hdID0gdXNlUHJvbW8oKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgZ2V0UHJvbW8oaWQpXHJcbiAgICB9XHJcbiAgfSwgW3JvdXRlci5xdWVyeV0pXHJcblxyXG4gIGNvbnN0IGdldFByb21vID0gKGlkKSA9PiB7XHJcbiAgICBnZXRJdGVtKHsgY29sbGVjdGlvbjogJ3Byb21vcycsIGlkIH0pXHJcbiAgICAgIC50aGVuKHNuYXBzaG90ID0+IHtcclxuICAgICAgICBwcm9tb0Rpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VUX1BST01PLFxyXG4gICAgICAgICAgcGF5bG9hZDogc25hcHNob3QuZGF0YSgpLFxyXG4gICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCB1cGRhdGVQcm9tbyA9IChkYXRhKSA9PiB7XHJcbiAgICBlZGl0SXRlbSh7IGNvbGxlY3Rpb246ICdwcm9tb3MnLCBpZDogcm91dGVyLnF1ZXJ5LmlkLCBkYXRhIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IHJvdXRlci5wdXNoKCcvcHJvbW9zJykpIC8vIEZJWCBNRSBhZ3JlZ2FyIHRvYXN0IHF1ZSBhdmlzZSBxdWUgc2UgZWRpdMOzIGNvcnJlY3RhbWVudGVcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSkgLy8gdG9hc3QgcXVlIGF2aXNlIHF1ZSBhbGdvIHNhbGnDsyBtYWxcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBBcHBCYXIgLz5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNFwiPlxyXG4gICAgICAgICAgRWRpdGFyIFByb21vc1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICB7cHJvbW9TdGF0ZT8ucHJvbW9cclxuICAgICAgICAgID8gPEZvcm1Qcm9tbyBvblN1Ym1pdD17KGRhdGEpID0+IHVwZGF0ZVByb21vKGRhdGEpfSBwcm9tbz17cHJvbW9TdGF0ZS5wcm9tb30vPlxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvbW9QYWdlXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnNzBweCcsICdhdXRvJyksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luVG9wOiAnMnJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcycmVtJyxcclxuICB9LFxyXG59KSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==