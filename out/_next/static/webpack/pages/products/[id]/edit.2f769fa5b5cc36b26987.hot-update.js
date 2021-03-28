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
    container: {
      margin: theme.spacing('90px', 'auto')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvL2VkaXQuanMiXSwibmFtZXMiOlsiRWRpdFByb2R1Y3RQYWdlIiwidXNlUHJvZHVjdCIsInByb2R1Y3RTdGF0ZSIsInByb2R1Y3REaXNwYXRjaCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJ1c2VTbmFja2JhciIsImVucXVldWVTbmFja2JhciIsImNsb3NlU25hY2tiYXIiLCJ1c2VFZmZlY3QiLCJpZCIsInF1ZXJ5IiwiYXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsImdldCIsInRoZW4iLCJzbmFwc2hvdCIsInR5cGUiLCJBY3Rpb25UeXBlIiwiU0VUX1BST0RVQ1QiLCJwYXlsb2FkIiwiZGF0YSIsInVwZGF0ZVByb2R1Y3QiLCJ1cGRhdGUiLCJ2YXJpYW50IiwicHVzaCIsImVycm9yIiwiY29udGFpbmVyIiwidGl0bGUiLCJwcm9kdWN0IiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luIiwic3BhY2luZyIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQUEsb0JBQ1lDLDRFQUFVLEVBRHRCO0FBQUE7QUFBQSxNQUNyQkMsWUFEcUI7QUFBQSxNQUNQQyxlQURPOztBQUU1QixNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDZEQUFTLEVBQXhCOztBQUg0QixxQkFJZUMsNkRBQVcsRUFKMUI7QUFBQSxNQUlwQkMsZUFKb0IsZ0JBSXBCQSxlQUpvQjtBQUFBLE1BSUhDLGFBSkcsZ0JBSUhBLGFBSkc7O0FBTTVCQyx5REFBUyxDQUFDLFlBQU07QUFBQSxRQUNOQyxFQURNLEdBQ0NOLE1BQU0sQ0FBQ08sS0FEUixDQUNORCxFQURNOztBQUVkLFFBQUlOLE1BQU0sQ0FBQ08sS0FBUCxDQUFhRCxFQUFqQixFQUFxQjtBQUNuQkUsd0VBQUcsQ0FBQ0MsU0FBSixHQUFnQkMsVUFBaEIsQ0FBMkIsVUFBM0IsRUFBdUNDLEdBQXZDLENBQTJDTCxFQUEzQyxFQUErQ00sR0FBL0MsR0FDR0MsSUFESCxDQUNRLFVBQUFDLFFBQVEsRUFBSTtBQUNoQmpCLHVCQUFlLENBQUM7QUFDZGtCLGNBQUksRUFBRUMsb0VBQVUsQ0FBQ0MsV0FESDtBQUVkQyxpQkFBTyxFQUFFSixRQUFRLENBQUNLLElBQVQ7QUFGSyxTQUFELENBQWY7QUFJRCxPQU5IO0FBT0Q7QUFDRixHQVhRLEVBV04sQ0FBQ25CLE1BQU0sQ0FBQ08sS0FBUixDQVhNLENBQVQ7O0FBYUEsTUFBTWEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDRCxJQUFELEVBQVU7QUFDOUJYLHNFQUFHLENBQUNDLFNBQUosR0FBZ0JDLFVBQWhCLENBQTJCLFVBQTNCLEVBQXVDQyxHQUF2QyxDQUEyQ1gsTUFBTSxDQUFDTyxLQUFQLENBQWFELEVBQXhELEVBQTREZSxNQUE1RCxDQUFtRUYsSUFBbkUsRUFDR04sSUFESCxDQUNRLFlBQU07QUFDVlYscUJBQWUsQ0FBQyx5Q0FBRCxFQUE0QztBQUFFbUIsZUFBTyxFQUFFO0FBQVgsT0FBNUMsQ0FBZjtBQUNBdEIsWUFBTSxDQUFDdUIsSUFBUCxDQUFZLFdBQVo7QUFDRCxLQUpILFdBS1MsVUFBQ0MsS0FBRDtBQUFBLGFBQVdyQixlQUFlLENBQUMsc0JBQUQsRUFBeUI7QUFBRW1CLGVBQU8sRUFBRTtBQUFYLE9BQXpCLENBQTFCO0FBQUEsS0FMVDtBQU1ELEdBUEQ7O0FBU0Esc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsZ0VBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQURGLGVBRUUscUVBQUMsbUVBQUQ7QUFBVyxlQUFTLEVBQUV4QixPQUFPLENBQUMyQixTQUE5QjtBQUFBLDhCQUNFLHFFQUFDLHFFQUFEO0FBQVksaUJBQVMsRUFBRTNCLE9BQU8sQ0FBQzRCLEtBQS9CO0FBQXNDLGVBQU8sRUFBQyxJQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLEVBSUc5QixZQUFZLFNBQVosSUFBQUEsWUFBWSxXQUFaLElBQUFBLFlBQVksQ0FBRStCLE9BQWQsZ0JBQ0cscUVBQUMsNEVBQUQ7QUFBYSxnQkFBUSxFQUFFLGtCQUFDUixJQUFEO0FBQUEsaUJBQVVDLGFBQWEsQ0FBQ0QsSUFBRCxDQUF2QjtBQUFBLFNBQXZCO0FBQXNELGVBQU8sRUFBRXZCLFlBQVksQ0FBQytCO0FBQTVFO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESCxHQUVHLElBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFjRCxDQTFDRDs7R0FBTWpDLGU7VUFDb0NDLG9FLEVBQ3hCSSxTLEVBQ0RFLHFELEVBQzRCQyxxRDs7O0tBSnZDUixlO0FBNENTQSw4RUFBZjtBQUVBLElBQU1LLFNBQVMsR0FBRzZCLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNKLGFBQVMsRUFBRTtBQUNUSyxZQUFNLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLE1BQWQsRUFBc0IsTUFBdEI7QUFEQyxLQUQ0QjtBQUl2Q0wsU0FBSyxFQUFFO0FBQ0xNLGVBQVMsRUFBRSxNQUROO0FBRUxDLGtCQUFZLEVBQUU7QUFGVDtBQUpnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9baWRdL2VkaXQuMmY3NjlmYTViNWNjMzZiMjY5ODcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJ1xyXG5pbXBvcnQgeyB1c2VQcm9kdWN0LCBBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vLi4vc2VydmljZXMvUHJvZHVjdC5jb250ZXh0J1xyXG5cclxuaW1wb3J0IEFwcEFwcEJhciBmcm9tICcuLi8uLi8uLi9tb2R1bGVzL3ZpZXdzL0FwcEFwcEJhcidcclxuaW1wb3J0IEZvcm1Qcm9kdWN0IGZyb20gJy4uLy4uLy4uL21vZHVsZXMvY29tcG9uZW50cy9mb3JtL0Zvcm1Qcm9kdWN0J1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuY29uc3QgRWRpdFByb2R1Y3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtwcm9kdWN0U3RhdGUsIHByb2R1Y3REaXNwYXRjaF0gPSB1c2VQcm9kdWN0KClcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyLCBjbG9zZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBjb25zdCB7IGlkIH0gPSByb3V0ZXIucXVlcnlcclxuICAgIGlmIChyb3V0ZXIucXVlcnkuaWQpIHtcclxuICAgICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJykuZG9jKGlkKS5nZXQoKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IHtcclxuICAgICAgICAgIHByb2R1Y3REaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VUX1BST0RVQ1QsXHJcbiAgICAgICAgICAgIHBheWxvYWQ6IHNuYXBzaG90LmRhdGEoKSxcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9LCBbcm91dGVyLnF1ZXJ5XSlcclxuXHJcbiAgY29uc3QgdXBkYXRlUHJvZHVjdCA9IChkYXRhKSA9PiB7XHJcbiAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvZHVjdHMnKS5kb2Mocm91dGVyLnF1ZXJ5LmlkKS51cGRhdGUoZGF0YSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGVucXVldWVTbmFja2JhcignU2UgaGEgZWRpdGFkbyBlbCBwcm9kdWN0byBjb3JyZWN0YW1lbnRlJywgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvcHJvZHVjdHMnKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBlbnF1ZXVlU25hY2tiYXIoJ0hhIG9jdXJyaWRvIHVuIGVycm9yJywgeyB2YXJpYW50OiAnZXJyb3InfSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8QXBwQXBwQmFyIC8+XHJcbiAgICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDRcIj5cclxuICAgICAgICAgIEVkaXRhciBQcm9kdWN0b3NcclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAge3Byb2R1Y3RTdGF0ZT8ucHJvZHVjdFxyXG4gICAgICAgICAgPyA8Rm9ybVByb2R1Y3Qgb25TdWJtaXQ9eyhkYXRhKSA9PiB1cGRhdGVQcm9kdWN0KGRhdGEpfSBwcm9kdWN0PXtwcm9kdWN0U3RhdGUucHJvZHVjdH0vPlxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvZHVjdFBhZ2VcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCc5MHB4JywgJ2F1dG8nKSxcclxuICB9LFxyXG4gIHRpdGxlOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICcycmVtJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJzJyZW0nLFxyXG4gIH0sXHJcbn0pKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9