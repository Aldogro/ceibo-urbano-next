webpackHotUpdate_N_E("pages/products",{

/***/ "./pages/products/index.js":
/*!*********************************!*\
  !*** ./pages/products/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _services_Auth_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/Auth.context */ "./services/Auth.context.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Card */ "./node_modules/@material-ui/core/esm/Card/index.js");
/* harmony import */ var _material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/CardActionArea */ "./node_modules/@material-ui/core/esm/CardActionArea/index.js");
/* harmony import */ var _material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CardMedia */ "./node_modules/@material-ui/core/esm/CardMedia/index.js");
/* harmony import */ var _material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/CardContent */ "./node_modules/@material-ui/core/esm/CardContent/index.js");
/* harmony import */ var _material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CardActions */ "./node_modules/@material-ui/core/esm/CardActions/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _modules_components_Dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../modules/components/Dialog */ "./modules/components/Dialog.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @material-ui/icons/Edit */ "./node_modules/@material-ui/icons/Edit.js");
/* harmony import */ var _material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @material-ui/icons/DeleteForever */ "./node_modules/@material-ui/icons/DeleteForever.js");
/* harmony import */ var _material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");
/* harmony import */ var _services_Product_context__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../services/Product.context */ "./services/Product.context.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\products\\index.js",
    _this = undefined,
    _s = $RefreshSig$();






















var ListProductPage = function ListProductPage() {
  _s();

  var classes = useStyles();

  var _useAuth = Object(_services_Auth_context__WEBPACK_IMPORTED_MODULE_4__["useAuth"])(),
      _useAuth2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useAuth, 2),
      auth = _useAuth2[0],
      authDispatch = _useAuth2[1];

  var _useProduct = Object(_services_Product_context__WEBPACK_IMPORTED_MODULE_21__["useProduct"])(),
      _useProduct2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useProduct, 2),
      productState = _useProduct2[0],
      productDispatch = _useProduct2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      dialogOpen = _useState[0],
      setDialogOpen = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(null),
      selectedId = _useState2[0],
      setSelectedId = _useState2[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    if (!auth.user.email) {
      router.push('/login');
    }

    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_20__["default"].firestore().collection('products').get().then(function (snapshot) {
      return productDispatch({
        type: _services_Product_context__WEBPACK_IMPORTED_MODULE_21__["ActionType"].SET_PRODUCTS,
        payload: snapshot.docs.map(function (doc) {
          return doc.data();
        })
      });
    });
  }, []);

  var handleDelete = function handleDelete(id) {
    setDialogOpen(true);
    setSelectedId(id);
  };

  var confirmDelete = function confirmDelete() {
    productDispatch({
      type: _services_Product_context__WEBPACK_IMPORTED_MODULE_21__["ActionType"].DELETE_PRODUCT,
      payload: selectedId
    });
    setDialogOpen(false);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_19__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_14__["default"], {
      maxWidth: "lg",
      className: classes.marginTop,
      children: auth.user.email ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: classes.root,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
          className: classes.title,
          variant: "h4",
          children: ["Listado de productos", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_11__["default"], {
            color: "primary",
            className: classes.floatRight,
            onClick: function onClick() {
              return router.push('/products/add');
            },
            children: "Agregar Producto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 66,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 64,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_components_Dialog__WEBPACK_IMPORTED_MODULE_16__["default"], {
          isOpen: dialogOpen,
          handleConfirm: function handleConfirm() {
            return confirmDelete();
          },
          handleClose: function handleClose() {
            return setDialogOpen(false);
          },
          question: "\xBFSeguro quer\xE9s borrar este producto?"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
          container: true,
          spacing: 2,
          children: productState === null || productState === void 0 ? void 0 : productState.products.map(function (product) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_15__["default"], {
              item: true,
              xs: 12,
              lg: +product.cols,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActionArea__WEBPACK_IMPORTED_MODULE_7__["default"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardMedia__WEBPACK_IMPORTED_MODULE_8__["default"], {
                    className: classes.media,
                    image: product.picture,
                    title: product.name
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardContent__WEBPACK_IMPORTED_MODULE_9__["default"], {
                    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
                      gutterBottom: true,
                      variant: "h5",
                      component: "h2",
                      children: product.name
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 87,
                      columnNumber: 25
                    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_13__["default"], {
                      variant: "body2",
                      color: "textSecondary",
                      component: "p",
                      children: product.description
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 90,
                      columnNumber: 25
                    }, _this)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 86,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 80,
                  columnNumber: 21
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CardActions__WEBPACK_IMPORTED_MODULE_10__["default"], {
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    size: "small",
                    color: "primary",
                    onClick: function onClick() {
                      return router.push("/products/".concat(product.id, "/edit"));
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_Edit__WEBPACK_IMPORTED_MODULE_17___default.a, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 97,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 96,
                    columnNumber: 23
                  }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                    size: "small",
                    color: "primary",
                    onClick: function onClick() {
                      return handleDelete(product.id);
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_icons_DeleteForever__WEBPACK_IMPORTED_MODULE_18___default.a, {}, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 100,
                      columnNumber: 25
                    }, _this)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 23
                  }, _this)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 95,
                  columnNumber: 21
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, _this)
            }, product.id, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 17
            }, _this);
          })
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 11
      }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 108,
        columnNumber: 13
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 59,
    columnNumber: 5
  }, _this);
};

_s(ListProductPage, "2zGFh9E7lHorQqCp03mPj2+WhvI=", false, function () {
  return [useStyles, _services_Auth_context__WEBPACK_IMPORTED_MODULE_4__["useAuth"], _services_Product_context__WEBPACK_IMPORTED_MODULE_21__["useProduct"], next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = ListProductPage;
/* harmony default export */ __webpack_exports__["default"] = (ListProductPage);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    floatRight: {
      "float": 'right'
    },
    gridList: {
      width: 1200,
      height: 'auto'
    },
    media: {
      height: 140
    },
    marginTop: {
      margin: theme.spacing('70px', 'auto')
    },
    icon: {
      color: 'rgba(255, 255, 255, 0.54)'
    },
    title: {
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  };
});

var _c;

$RefreshReg$(_c, "ListProductPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiTGlzdFByb2R1Y3RQYWdlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUF1dGgiLCJhdXRoIiwiYXV0aERpc3BhdGNoIiwidXNlUHJvZHVjdCIsInByb2R1Y3RTdGF0ZSIsInByb2R1Y3REaXNwYXRjaCIsInVzZVN0YXRlIiwiZGlhbG9nT3BlbiIsInNldERpYWxvZ09wZW4iLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZXIiLCJlbWFpbCIsInB1c2giLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIkFjdGlvblR5cGUiLCJTRVRfUFJPRFVDVFMiLCJwYXlsb2FkIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJoYW5kbGVEZWxldGUiLCJpZCIsImNvbmZpcm1EZWxldGUiLCJERUxFVEVfUFJPRFVDVCIsIm1hcmdpblRvcCIsInJvb3QiLCJ0aXRsZSIsImZsb2F0UmlnaHQiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJjb2xzIiwibWVkaWEiLCJwaWN0dXJlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFrZVN0eWxlcyIsInRoZW1lIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiZ3JpZExpc3QiLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInNwYWNpbmciLCJpY29uIiwiY29sb3IiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVB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S3ZDZCxjQUFVLEVBQUU7QUFDVixlQUFPO0FBREcsS0FMMkI7QUFRdkNlLFlBQVEsRUFBRTtBQUNSQyxXQUFLLEVBQUUsSUFEQztBQUVSQyxZQUFNLEVBQUU7QUFGQSxLQVI2QjtBQVl2Q2IsU0FBSyxFQUFFO0FBQ0xhLFlBQU0sRUFBRTtBQURILEtBWmdDO0FBZXZDcEIsYUFBUyxFQUFFO0FBQ1RxQixZQUFNLEVBQUVULEtBQUssQ0FBQ1UsT0FBTixDQUFjLE1BQWQsRUFBc0IsTUFBdEI7QUFEQyxLQWY0QjtBQWtCdkNDLFFBQUksRUFBRTtBQUNKQyxXQUFLLEVBQUU7QUFESCxLQWxCaUM7QUFxQnZDdEIsU0FBSyxFQUFFO0FBQ0xGLGVBQVMsRUFBRSxNQUROO0FBRUx5QixrQkFBWSxFQUFFO0FBRlQ7QUFyQmdDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzLjMzMDJkNTkxYWQ5YjY4YjRhOGI5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aC5jb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBDYXJkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmQnXHJcbmltcG9ydCBDYXJkQWN0aW9uQXJlYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQWN0aW9uQXJlYSdcclxuaW1wb3J0IENhcmRNZWRpYSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkTWVkaWEnXHJcbmltcG9ydCBDYXJkQ29udGVudCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DYXJkQ29udGVudCdcclxuaW1wb3J0IENhcmRBY3Rpb25zIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25zJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgRGlhbG9nIGZyb20gJy4uLy4uL21vZHVsZXMvY29tcG9uZW50cy9EaWFsb2cnXHJcblxyXG5pbXBvcnQgRWRpdEljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0VkaXQnXHJcbmltcG9ydCBEZWxldGVGb3JldmVySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRGVsZXRlRm9yZXZlcidcclxuXHJcbmltcG9ydCBBcHBBcHBCYXIgZnJvbSAnLi4vLi4vbW9kdWxlcy92aWV3cy9BcHBBcHBCYXInXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5pbXBvcnQgeyB1c2VQcm9kdWN0LCBBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvZHVjdC5jb250ZXh0J1xyXG5cclxuY29uc3QgTGlzdFByb2R1Y3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKTtcclxuICBjb25zdCBbYXV0aCwgYXV0aERpc3BhdGNoXSA9IHVzZUF1dGgoKVxyXG4gIGNvbnN0IFtwcm9kdWN0U3RhdGUsIHByb2R1Y3REaXNwYXRjaF0gPSB1c2VQcm9kdWN0KClcclxuICBjb25zdCBbZGlhbG9nT3Blbiwgc2V0RGlhbG9nT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbc2VsZWN0ZWRJZCwgc2V0U2VsZWN0ZWRJZF0gPSB1c2VTdGF0ZShudWxsKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYXV0aC51c2VyLmVtYWlsKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfVxyXG4gICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJylcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oc25hcHNob3QgPT4gcHJvZHVjdERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQWN0aW9uVHlwZS5TRVRfUFJPRFVDVFMsXHJcbiAgICAgIHBheWxvYWQ6IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKSxcclxuICAgIH0pKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBoYW5kbGVEZWxldGUgPSAoaWQpID0+IHtcclxuICAgIHNldERpYWxvZ09wZW4odHJ1ZSlcclxuICAgIHNldFNlbGVjdGVkSWQoaWQpXHJcbiAgfVxyXG4gIFxyXG4gIGNvbnN0IGNvbmZpcm1EZWxldGUgPSAoKSA9PiB7XHJcbiAgICBwcm9kdWN0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLkRFTEVURV9QUk9EVUNULFxyXG4gICAgICBwYXlsb2FkOiBzZWxlY3RlZElkXHJcbiAgICB9KVxyXG4gICAgc2V0RGlhbG9nT3BlbihmYWxzZSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBBcHBCYXIgLz5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpblRvcH0+XHJcbiAgICAgICAge2F1dGgudXNlci5lbWFpbCA/XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fT5cclxuICAgICAgICAgICAgPFR5cG9ncmFwaHkgY2xhc3NOYW1lPXtjbGFzc2VzLnRpdGxlfSB2YXJpYW50PVwiaDRcIj5cclxuICAgICAgICAgICAgICBMaXN0YWRvIGRlIHByb2R1Y3Rvc1xyXG4gICAgICAgICAgICAgIDxCdXR0b24gY29sb3I9XCJwcmltYXJ5XCIgY2xhc3NOYW1lPXtjbGFzc2VzLmZsb2F0UmlnaHR9IG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHJvZHVjdHMvYWRkJyl9PlxyXG4gICAgICAgICAgICAgICAgQWdyZWdhciBQcm9kdWN0b1xyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgIDxEaWFsb2dcclxuICAgICAgICAgICAgICBpc09wZW49e2RpYWxvZ09wZW59XHJcbiAgICAgICAgICAgICAgaGFuZGxlQ29uZmlybT17KCkgPT4gY29uZmlybURlbGV0ZSgpfVxyXG4gICAgICAgICAgICAgIGhhbmRsZUNsb3NlPXsoKSA9PiBzZXREaWFsb2dPcGVuKGZhbHNlKX1cclxuICAgICAgICAgICAgICBxdWVzdGlvbj1cIsK/U2VndXJvIHF1ZXLDqXMgYm9ycmFyIGVzdGUgcHJvZHVjdG8/XCJcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezJ9PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0U3RhdGU/LnByb2R1Y3RzLm1hcChwcm9kdWN0ID0+IChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17K3Byb2R1Y3QuY29sc30ga2V5PXtwcm9kdWN0LmlkfT5cclxuICAgICAgICAgICAgICAgICAgPENhcmQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRNZWRpYVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMubWVkaWF9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltYWdlPXtwcm9kdWN0LnBpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlPXtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBndXR0ZXJCb3R0b20gdmFyaWFudD1cImg1XCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJib2R5MlwiIGNvbG9yPVwidGV4dFNlY29uZGFyeVwiIGNvbXBvbmVudD1cInBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7cHJvZHVjdC5kZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9DYXJkQ29udGVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L0NhcmRBY3Rpb25BcmVhPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKGAvcHJvZHVjdHMvJHtwcm9kdWN0LmlkfS9lZGl0YCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8RWRpdEljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9eygpID0+IGhhbmRsZURlbGV0ZShwcm9kdWN0LmlkKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEZWxldGVGb3JldmVySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbnM+XHJcbiAgICAgICAgICAgICAgICAgIDwvQ2FyZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA6IDxkaXY+PC9kaXY+XHJcbiAgICAgICAgfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UHJvZHVjdFBhZ2VcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgZmxvYXRSaWdodDoge1xyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgfSxcclxuICBncmlkTGlzdDoge1xyXG4gICAgd2lkdGg6IDEyMDAsXHJcbiAgICBoZWlnaHQ6ICdhdXRvJyxcclxuICB9LFxyXG4gIG1lZGlhOiB7XHJcbiAgICBoZWlnaHQ6IDE0MCxcclxuICB9LFxyXG4gIG1hcmdpblRvcDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCc3MHB4JywgJ2F1dG8nKSxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luVG9wOiAnMnJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcycmVtJyxcclxuICB9LFxyXG59KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=