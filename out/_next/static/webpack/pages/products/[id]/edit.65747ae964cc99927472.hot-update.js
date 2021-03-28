webpackHotUpdate_N_E("pages/products/[id]/edit",{

/***/ "./pages/products/[id]/edit.js":
/*!*************************************!*\
  !*** ./pages/products/[id]/edit.js ***!
  \*************************************/
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
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _services_Product_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../services/Product.context */ "./services/Product.context.js");
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _modules_components_form_FormProduct__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/components/form/FormProduct */ "./modules/components/form/FormProduct.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../firebase/firebase.config */ "./firebase/firebase.config.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\products\\[id]\\edit.js",
    _this = undefined,
    _s = $RefreshSig$();












var EditProductPage = function EditProductPage() {
  _s();

  var _useProduct = Object(_services_Product_context__WEBPACK_IMPORTED_MODULE_6__["useProduct"])(),
      _useProduct2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useProduct, 2),
      productState = _useProduct2[0],
      productDispatch = _useProduct2[1];

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_5__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var id = router.query.id;

    if (router.query.id) {
      Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__["getItem"])({
        collection: 'products',
        id: id
      }).then(function (snapshot) {
        productDispatch({
          type: _services_Product_context__WEBPACK_IMPORTED_MODULE_6__["ActionType"].SET_PRODUCT,
          payload: snapshot.data()
        });
      });
    }
  }, [router.query]);

  var updateProduct = function updateProduct(data) {
    Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__["editItem"])({
      collection: 'products',
      id: router.query.id,
      data: data
    }).then(function () {
      enqueueSnackbar('Se ha editado el producto correctamente', {
        variant: 'success'
      });
      router.push('/products');
    })["catch"](function (error) {
      return enqueueSnackbar('Ha ocurrido un error', {
        variant: 'error'
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 44,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
      maxWidth: "lg",
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
          className: classes.title,
          variant: "h4",
          children: "Editar Productos"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 47,
          columnNumber: 11
        }, _this), productState !== null && productState !== void 0 && productState.product ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_components_form_FormProduct__WEBPACK_IMPORTED_MODULE_8__["default"], {
          onSubmit: function onSubmit(data) {
            return updateProduct(data);
          },
          product: productState.product
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 51,
          columnNumber: 15
        }, _this) : null]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 45,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 43,
    columnNumber: 5
  }, _this);
};

_s(EditProductPage, "Ol9txD2XnGxwjl56v4Zws6Wtv2M=", false, function () {
  return [_services_Product_context__WEBPACK_IMPORTED_MODULE_6__["useProduct"], useStyles, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], notistack__WEBPACK_IMPORTED_MODULE_5__["useSnackbar"]];
});

_c = EditProductPage;
/* harmony default export */ __webpack_exports__["default"] = (EditProductPage);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
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

$RefreshReg$(_c, "EditProductPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvL2VkaXQuanMiXSwibmFtZXMiOlsiRWRpdFByb2R1Y3RQYWdlIiwidXNlUHJvZHVjdCIsInByb2R1Y3RTdGF0ZSIsInByb2R1Y3REaXNwYXRjaCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTbmFja2JhciIsImVucXVldWVTbmFja2JhciIsImNsb3NlU25hY2tiYXIiLCJ1c2VFZmZlY3QiLCJpZCIsInF1ZXJ5IiwiZ2V0SXRlbSIsImNvbGxlY3Rpb24iLCJ0aGVuIiwic25hcHNob3QiLCJ0eXBlIiwiQWN0aW9uVHlwZSIsIlNFVF9QUk9EVUNUIiwicGF5bG9hZCIsImRhdGEiLCJ1cGRhdGVQcm9kdWN0IiwiZWRpdEl0ZW0iLCJ2YXJpYW50IiwicHVzaCIsImVycm9yIiwiY29udGFpbmVyIiwicm9vdCIsInRpdGxlIiwicHJvZHVjdCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm1hcmdpbiIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLG9CQUNZQyw0RUFBVSxFQUR0QjtBQUFBO0FBQUEsTUFDckJDLFlBRHFCO0FBQUEsTUFDUEMsZUFETzs7QUFFNUIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFINEIscUJBSWVDLDZEQUFXLEVBSjFCO0FBQUEsTUFJcEJDLGVBSm9CLGdCQUlwQkEsZUFKb0I7QUFB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QUROO0FBRUxDLGtCQUFZLEVBQUU7QUFGVDtBQVJnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9baWRdL2VkaXQuNjU3NDdhZTk2NGNjOTk5Mjc0NzIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJ1xyXG5pbXBvcnQgeyB1c2VQcm9kdWN0LCBBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvUHJvZHVjdC5jb250ZXh0J1xyXG5cclxuaW1wb3J0IEFwcEFwcEJhciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3ZpZXdzL0FwcEFwcEJhcidcclxuaW1wb3J0IEZvcm1Qcm9kdWN0IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY29tcG9uZW50cy9mb3JtL0Zvcm1Qcm9kdWN0J1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuXHJcbmltcG9ydCB7IGdldEl0ZW0sIGVkaXRJdGVtIH0gZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuY29uc3QgRWRpdFByb2R1Y3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0U3RhdGUsIHByb2R1Y3REaXNwYXRjaF0gPSB1c2VQcm9kdWN0KClcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyLCBjbG9zZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgZ2V0SXRlbSh7IGNvbGxlY3Rpb246ICdwcm9kdWN0cycsIGlkIH0pXHJcbiAgICAgICAgLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgcHJvZHVjdERpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5TRVRfUFJPRFVDVCxcclxuICAgICAgICAgICAgcGF5bG9hZDogc25hcHNob3QuZGF0YSgpLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnldKVxyXG5cclxuICBjb25zdCB1cGRhdGVQcm9kdWN0ID0gKGRhdGEpID0+IHtcclxuICAgIGVkaXRJdGVtKHsgY29sbGVjdGlvbjogJ3Byb2R1Y3RzJywgaWQ6IHJvdXRlci5xdWVyeS5pZCwgZGF0YSB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdTZSBoYSBlZGl0YWRvIGVsIHByb2R1Y3RvIGNvcnJlY3RhbWVudGUnLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJ30pXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9kdWN0cycpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVucXVldWVTbmFja2JhcignSGEgb2N1cnJpZG8gdW4gZXJyb3InLCB7IHZhcmlhbnQ6ICdlcnJvcid9KSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBBcHBCYXIgLz5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNFwiPlxyXG4gICAgICAgICAgICBFZGl0YXIgUHJvZHVjdG9zXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICB7cHJvZHVjdFN0YXRlPy5wcm9kdWN0XHJcbiAgICAgICAgICAgID8gPEZvcm1Qcm9kdWN0IG9uU3VibWl0PXsoZGF0YSkgPT4gdXBkYXRlUHJvZHVjdChkYXRhKX0gcHJvZHVjdD17cHJvZHVjdFN0YXRlLnByb2R1Y3R9Lz5cclxuICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEVkaXRQcm9kdWN0UGFnZVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBjb250YWluZXI6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnNzBweCcsICdhdXRvJyksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luVG9wOiAnMnJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcycmVtJyxcclxuICB9LFxyXG59KSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==