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
      marginTop: '30px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvZHVjdHMvaW5kZXguanMiXSwibmFtZXMiOlsiTGlzdFByb2R1Y3RQYWdlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUF1dGgiLCJhdXRoIiwiYXV0aERpc3BhdGNoIiwidXNlUHJvZHVjdCIsInByb2R1Y3RTdGF0ZSIsInByb2R1Y3REaXNwYXRjaCIsInVzZVN0YXRlIiwiZGlhbG9nT3BlbiIsInNldERpYWxvZ09wZW4iLCJzZWxlY3RlZElkIiwic2V0U2VsZWN0ZWRJZCIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZUVmZmVjdCIsInVzZXIiLCJlbWFpbCIsInB1c2giLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIkFjdGlvblR5cGUiLCJTRVRfUFJPRFVDVFMiLCJwYXlsb2FkIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJoYW5kbGVEZWxldGUiLCJpZCIsImNvbmZpcm1EZWxldGUiLCJERUxFVEVfUFJPRFVDVCIsIm1hcmdpblRvcCIsInJvb3QiLCJ0aXRsZSIsImZsb2F0UmlnaHQiLCJwcm9kdWN0cyIsInByb2R1Y3QiLCJjb2xzIiwibWVkaWEiLCJwaWN0dXJlIiwibmFtZSIsImRlc2NyaXB0aW9uIiwibWFrZVN0eWxlcyIsInRoZW1lIiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwiZ3JpZExpc3QiLCJ3aWR0aCIsImhlaWdodCIsImljb24iLCJjb2xvciIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBQ0E7QUFD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LGVBQU87QUFERyxLQUwyQjtBQVF2Q2UsWUFBUSxFQUFFO0FBQ1JDLFdBQUssRUFBRSxJQURDO0FBRVJDLFlBQU0sRUFBRTtBQUZBLEtBUjZCO0FBWXZDYixTQUFLLEVBQUU7QUFDTGEsWUFBTSxFQUFFO0FBREgsS0FaZ0M7QUFldkNwQixhQUFTLEVBQUU7QUFDVEEsZUFBUyxFQUFFO0FBREYsS0FmNEI7QUFrQnZDcUIsUUFBSSxFQUFFO0FBQ0pDLFdBQUssRUFBRTtBQURILEtBbEJpQztBQXFCdkNwQixTQUFLLEVBQUU7QUFDTEYsZUFBUyxFQUFFLE1BRE47QUFFTHVCLGtCQUFZLEVBQUU7QUFGVDtBQXJCZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuNzM3ZjE5NWFmY2NmNzYxYjkxNmMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoLmNvbnRleHQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IENhcmQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZCdcclxuaW1wb3J0IENhcmRBY3Rpb25BcmVhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRBY3Rpb25BcmVhJ1xyXG5pbXBvcnQgQ2FyZE1lZGlhIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRNZWRpYSdcclxuaW1wb3J0IENhcmRDb250ZW50IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NhcmRDb250ZW50J1xyXG5pbXBvcnQgQ2FyZEFjdGlvbnMgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2FyZEFjdGlvbnMnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJztcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi4vLi4vbW9kdWxlcy9jb21wb25lbnRzL0RpYWxvZydcclxuXHJcbmltcG9ydCBFZGl0SWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvRWRpdCdcclxuaW1wb3J0IERlbGV0ZUZvcmV2ZXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9EZWxldGVGb3JldmVyJ1xyXG5cclxuaW1wb3J0IEFwcEFwcEJhciBmcm9tICcuLi8uLi9tb2R1bGVzL3ZpZXdzL0FwcEFwcEJhcidcclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcbmltcG9ydCB7IHVzZVByb2R1Y3QsIEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Qcm9kdWN0LmNvbnRleHQnXHJcblxyXG5jb25zdCBMaXN0UHJvZHVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpO1xyXG4gIGNvbnN0IFthdXRoLCBhdXRoRGlzcGF0Y2hdID0gdXNlQXV0aCgpXHJcbiAgY29uc3QgW3Byb2R1Y3RTdGF0ZSwgcHJvZHVjdERpc3BhdGNoXSA9IHVzZVByb2R1Y3QoKVxyXG4gIGNvbnN0IFtkaWFsb2dPcGVuLCBzZXREaWFsb2dPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtzZWxlY3RlZElkLCBzZXRTZWxlY3RlZElkXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhdXRoLnVzZXIuZW1haWwpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICB9XHJcbiAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvZHVjdHMnKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbihzbmFwc2hvdCA9PiBwcm9kdWN0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9QUk9EVUNUUyxcclxuICAgICAgcGF5bG9hZDogc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpLFxyXG4gICAgfSkpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGhhbmRsZURlbGV0ZSA9IChpZCkgPT4ge1xyXG4gICAgc2V0RGlhbG9nT3Blbih0cnVlKVxyXG4gICAgc2V0U2VsZWN0ZWRJZChpZClcclxuICB9XHJcbiAgXHJcbiAgY29uc3QgY29uZmlybURlbGV0ZSA9ICgpID0+IHtcclxuICAgIHByb2R1Y3REaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuREVMRVRFX1BST0RVQ1QsXHJcbiAgICAgIHBheWxvYWQ6IHNlbGVjdGVkSWRcclxuICAgIH0pXHJcbiAgICBzZXREaWFsb2dPcGVuKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEFwcEJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2luVG9wfT5cclxuICAgICAgICB7YXV0aC51c2VyLmVtYWlsID9cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9PlxyXG4gICAgICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNFwiPlxyXG4gICAgICAgICAgICAgIExpc3RhZG8gZGUgcHJvZHVjdG9zXHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjb2xvcj1cInByaW1hcnlcIiBjbGFzc05hbWU9e2NsYXNzZXMuZmxvYXRSaWdodH0gb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9kdWN0cy9hZGQnKX0+XHJcbiAgICAgICAgICAgICAgICBBZ3JlZ2FyIFByb2R1Y3RvXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgPERpYWxvZ1xyXG4gICAgICAgICAgICAgIGlzT3Blbj17ZGlhbG9nT3Blbn1cclxuICAgICAgICAgICAgICBoYW5kbGVDb25maXJtPXsoKSA9PiBjb25maXJtRGVsZXRlKCl9XHJcbiAgICAgICAgICAgICAgaGFuZGxlQ2xvc2U9eygpID0+IHNldERpYWxvZ09wZW4oZmFsc2UpfVxyXG4gICAgICAgICAgICAgIHF1ZXN0aW9uPVwiwr9TZWd1cm8gcXVlcsOpcyBib3JyYXIgZXN0ZSBwcm9kdWN0bz9cIlxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17Mn0+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RTdGF0ZT8ucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXsrcHJvZHVjdC5jb2xzfSBrZXk9e3Byb2R1Y3QuaWR9PlxyXG4gICAgICAgICAgICAgICAgICA8Q2FyZD5cclxuICAgICAgICAgICAgICAgICAgICA8Q2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZE1lZGlhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5tZWRpYX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1hZ2U9e3Byb2R1Y3QucGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2FyZENvbnRlbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IGd1dHRlckJvdHRvbSB2YXJpYW50PVwiaDVcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImJvZHkyXCIgY29sb3I9XCJ0ZXh0U2Vjb25kYXJ5XCIgY29tcG9uZW50PVwicFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9kdWN0LmRlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0NhcmRDb250ZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvQ2FyZEFjdGlvbkFyZWE+XHJcbiAgICAgICAgICAgICAgICAgICAgPENhcmRBY3Rpb25zPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goYC9wcm9kdWN0cy8ke3Byb2R1Y3QuaWR9L2VkaXRgKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxFZGl0SWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gc2l6ZT1cInNtYWxsXCIgY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17KCkgPT4gaGFuZGxlRGVsZXRlKHByb2R1Y3QuaWQpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPERlbGV0ZUZvcmV2ZXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9DYXJkQWN0aW9ucz5cclxuICAgICAgICAgICAgICAgICAgPC9DYXJkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDogPGRpdj48L2Rpdj5cclxuICAgICAgICB9XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQcm9kdWN0UGFnZVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBmbG9hdFJpZ2h0OiB7XHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICB9LFxyXG4gIGdyaWRMaXN0OiB7XHJcbiAgICB3aWR0aDogMTIwMCxcclxuICAgIGhlaWdodDogJ2F1dG8nLFxyXG4gIH0sXHJcbiAgbWVkaWE6IHtcclxuICAgIGhlaWdodDogMTQwLFxyXG4gIH0sXHJcbiAgbWFyZ2luVG9wOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICczMHB4JyxcclxuICB9LFxyXG4gIGljb246IHtcclxuICAgIGNvbG9yOiAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjU0KScsXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luVG9wOiAnMnJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcycmVtJyxcclxuICB9LFxyXG59KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=