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
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__["default"].firestore().collection('products').doc(id).get().then(function (snapshot) {
        productDispatch({
          type: _services_Product_context__WEBPACK_IMPORTED_MODULE_6__["ActionType"].SET_PRODUCT,
          payload: snapshot.data()
        });
      });
    }
  }, [router.query]);

  var updateProduct = function updateProduct(data) {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__["default"].firestore().collection('products').doc(router.query.id).update(data).then(function () {
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
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.title,
        variant: "h4",
        children: "Editar Productos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 46,
        columnNumber: 9
      }, _this), productState !== null && productState !== void 0 && productState.product ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_components_form_FormProduct__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSubmit: function onSubmit(data) {
          return updateProduct(data);
        },
        product: productState.product
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 13
      }, _this) : null]
    }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvL2VkaXQuanMiXSwibmFtZXMiOlsiRWRpdFByb2R1Y3RQYWdlIiwidXNlUHJvZHVjdCIsInByb2R1Y3RTdGF0ZSIsInByb2R1Y3REaXNwYXRjaCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTbmFja2JhciIsImVucXVldWVTbmFja2JhciIsImNsb3NlU25hY2tiYXIiLCJ1c2VFZmZlY3QiLCJpZCIsInF1ZXJ5IiwiYXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsInR5cGUiLCJBY3Rpb25UeXBlIiwiU0VUX1BST0RVQ1QiLCJwYXlsb2FkIiwiZGF0YSIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGUiLCJ2YXJpYW50IiwicHVzaCIsImVycm9yIiwiY29udGFpbmVyIiwidGl0bGUiLCJwcm9kdWN0IiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm1hcmdpbiIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUFBLG9CQUNZQyw0RUFBVSxFQUR0QjtBQUFBO0FBQUEsTUFDckJDLFlBRHFCO0FBQUEsTUFDUEMsZUFETzs7QUFFNUIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFINEIscUJBSWVDLDZEQUFXLEVBSjFCO0FBQUEsTUFJcEJDLGVBSm9C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QSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL1tpZF0vZWRpdC5lMTZlY2Q2YzRkNDA0MGRhYTE1Ni5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snXHJcbmltcG9ydCB7IHVzZVByb2R1Y3QsIEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9Qcm9kdWN0LmNvbnRleHQnXHJcblxyXG5pbXBvcnQgQXBwQXBwQmFyIGZyb20gJy4uLy4uLy4uL21vZHVsZXMvdmlld3MvQXBwQXBwQmFyJ1xyXG5pbXBvcnQgRm9ybVByb2R1Y3QgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb2R1Y3QnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5cclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5jb25zdCBFZGl0UHJvZHVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgW3Byb2R1Y3RTdGF0ZSwgcHJvZHVjdERpc3BhdGNoXSA9IHVzZVByb2R1Y3QoKVxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIsIGNsb3NlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IHsgaWQgfSA9IHJvdXRlci5xdWVyeVxyXG4gICAgaWYgKHJvdXRlci5xdWVyeS5pZCkge1xyXG4gICAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvZHVjdHMnKS5kb2MoaWQpLmdldCgpXHJcbiAgICAgICAgLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgcHJvZHVjdERpc3BhdGNoKHtcclxuICAgICAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5TRVRfUFJPRFVDVCxcclxuICAgICAgICAgICAgcGF5bG9hZDogc25hcHNob3QuZGF0YSgpLFxyXG4gICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnldKVxyXG5cclxuICBjb25zdCB1cGRhdGVQcm9kdWN0ID0gKGRhdGEpID0+IHtcclxuICAgIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9kdWN0cycpLmRvYyhyb3V0ZXIucXVlcnkuaWQpLnVwZGF0ZShkYXRhKVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdTZSBoYSBlZGl0YWRvIGVsIHByb2R1Y3RvIGNvcnJlY3RhbWVudGUnLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJ30pXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy9wcm9kdWN0cycpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVucXVldWVTbmFja2JhcignSGEgb2N1cnJpZG8gdW4gZXJyb3InLCB7IHZhcmlhbnQ6ICdlcnJvcid9KSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBBcHBCYXIgLz5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDRcIj5cclxuICAgICAgICAgIEVkaXRhciBQcm9kdWN0b3NcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAge3Byb2R1Y3RTdGF0ZT8ucHJvZHVjdFxyXG4gICAgICAgICAgPyA8Rm9ybVByb2R1Y3Qgb25TdWJtaXQ9eyhkYXRhKSA9PiB1cGRhdGVQcm9kdWN0KGRhdGEpfSBwcm9kdWN0PXtwcm9kdWN0U3RhdGUucHJvZHVjdH0vPlxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZHVjdFBhZ2VcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzcwcHgnLCAnYXV0bycpLFxyXG4gIH0sXHJcbiAgdGl0bGU6IHtcclxuICAgIG1hcmdpblRvcDogJzJyZW0nLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMnJlbScsXHJcbiAgfSxcclxufSkpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=