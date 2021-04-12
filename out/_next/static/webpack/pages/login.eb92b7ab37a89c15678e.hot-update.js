webpackHotUpdate_N_E("pages/login",{

/***/ "./src/components/form/FormSignIn.js":
/*!*******************************************!*\
  !*** ./src/components/form/FormSignIn.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./src/firebase/firebase.config.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");






var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\src\\components\\form\\FormSignIn.js",
    _s = $RefreshSig$();















function FormSignIn() {
  _s();

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_16__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(false),
      openErrorSnackbar = _useState[0],
      setOpenErrorSnackbar = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_5__["useState"])(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useSignInWithEmailAn = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_17__["useSignInWithEmailAndPassword"])(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__["default"].auth()),
      _useSignInWithEmailAn2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_4__["default"])(_useSignInWithEmailAn, 4),
      signInWithEmailAndPassword = _useSignInWithEmailAn2[0],
      user = _useSignInWithEmailAn2[1],
      loading = _useSignInWithEmailAn2[2],
      error = _useSignInWithEmailAn2[3];

  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (user) router.push('/');
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_5__["useEffect"])(function () {
    if (error) setOpenErrorSnackbar(true);
  }, [error]);

  var handleCloseSnackbar = function handleCloseSnackbar() {
    setOpenErrorSnackbar(false);
  };

  var handleOnSubmit = /*#__PURE__*/function () {
    var _ref = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_3__["default"])( /*#__PURE__*/C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.mark(function _callee() {
      return C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_2___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              signInWithEmailAndPassword(email, password);

            case 1:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function handleOnSubmit() {
      return _ref.apply(this, arguments);
    };
  }();

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
      maxWidth: "lg",
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.container,
        container: true,
        justify: "center",
        alignItems: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          item: true,
          xs: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_13__["default"], {
            className: classes.paper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
              variant: "h4",
              gutterBottom: true,
              marked: "center",
              align: "center",
              children: "Ingresar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 50,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
              className: classes.form,
              noValidate: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                fullWidth: true,
                label: "E-mail",
                margin: "normal",
                name: "email",
                required: true,
                value: email,
                onChange: function onChange(_ref2) {
                  var target = _ref2.target;
                  return setEmail(target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
                fullWidth: true,
                required: true,
                name: "password",
                label: "Contrase\xF1a",
                type: "password",
                value: password,
                onChange: function onChange(_ref3) {
                  var target = _ref3.target;
                  return setPassword(target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
                className: classes.button,
                size: "small",
                variant: "contained",
                color: "primary",
                fullWidth: true,
                onClick: function onClick() {
                  return handleOnSubmit();
                },
                children: "Entrar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 53,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_7__["default"], {
                underline: "always",
                href: "/",
                children: "Volver al inicio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 84,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_14__["default"], {
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
              },
              open: openErrorSnackbar,
              onClose: handleCloseSnackbar,
              message: "El email y/o la contrase\xF1a son incorrectos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 49,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 48,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 47,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 46,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 45,
    columnNumber: 5
  }, this);
}

_s(FormSignIn, "Pdb4Qi1RwZQCuFVyFh+r+FYmvM4=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_16__["useRouter"], react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_17__["useSignInWithEmailAndPassword"]];
});

_c = FormSignIn;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    container: {
      height: '100vh'
    },
    paper: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      backgroundColor: theme.palette.secondary.main,
      padding: theme.spacing(3, 2)
    }, theme.breakpoints.up('sm'), {
      padding: theme.spacing(3, 10)
    }),
    form: {
      marginTop: theme.spacing(3)
    },
    button: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2)
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (FormSignIn);

var _c;

$RefreshReg$(_c, "FormSignIn");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9Gb3JtU2lnbkluLmpzIl0sIm5hbWVzIjpbIkZvcm1TaWduSW4iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJvcGVuRXJyb3JTbmFja2JhciIsInNldE9wZW5FcnJvclNuYWNrYmFyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImFwcCIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJwdXNoIiwiaGFuZGxlQ2xvc2VTbmFja2JhciIsImhhbmRsZU9uU3VibWl0IiwiY29udGFpbmVyIiwicGFwZXIiLCJmb3JtIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsInBhZGRpbmciLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUNwQixNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUZvQixrQkFHOEJDLHNEQUFRLENBQUMsS0FBRCxDQUh0QztBQUFBLE1BR2JDLGlCQUhhO0FBQUEsTUFHTUMs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QUFFO0FBQ1RVLFlBQU0sRUFBRTtBQURDLEtBRDRCO0FBSXZDVCxTQUFLLEVBQUU7QUFDTFUscUJBQWUsRUFBRUYsS0FBSyxDQUFDRyxPQUFOLENBQWNDLFNBQWQsQ0FBd0JDLElBRHRDO0FBRUhDLGFBQU8sRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZCxFQUFpQixDQUFqQjtBQUZOLE9BR0ZQLEtBQUssQ0FBQ1EsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FIRSxFQUcyQjtBQUM1QkgsYUFBTyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLEVBQWpCO0FBRG1CLEtBSDNCLENBSmtDO0FBV3ZDZCxRQUFJLEVBQUU7QUFDSmlCLGVBQVMsRUFBRVYsS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZDtBQURQLEtBWGlDO0FBY3ZDWCxVQUFNLEVBQUU7QUFDTmMsZUFBUyxFQUFFVixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLENBREw7QUFFTkksa0JBQVksRUFBRVgsS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZDtBQUZSO0FBZCtCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBb0JldkMseUVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZWI5MmI3YWIzN2E4OWMxNTY3OGUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcidcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJ1xyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcclxuXHJcbmZ1bmN0aW9uIEZvcm1TaWduSW4oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbb3BlbkVycm9yU25hY2tiYXIsIHNldE9wZW5FcnJvclNuYWNrYmFyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbXHJcbiAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICAgIHVzZXIsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgZXJyb3IsXHJcbiAgXSA9IHVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGFwcC5hdXRoKCkpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAodXNlcikgcm91dGVyLnB1c2goJy8nKVxyXG4gIH0sIFt1c2VyXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlcnJvcikgc2V0T3BlbkVycm9yU25hY2tiYXIodHJ1ZSlcclxuICB9LCBbZXJyb3JdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZVNuYWNrYmFyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkVycm9yU25hY2tiYXIoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IGFzeW5jICgpID0+IHtcclxuICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSA+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbSBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSW5ncmVzYXJcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRFbWFpbCh0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UGFzc3dvcmQodGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9uU3VibWl0KCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBFbnRyYXJcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHVuZGVybGluZT1cImFsd2F5c1wiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIFZvbHZlciBhbCBpbmljaW9cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW5FcnJvclNuYWNrYmFyfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VTbmFja2Jhcn1cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9XCJFbCBlbWFpbCB5L28gbGEgY29udHJhc2XDsWEgc29uIGluY29ycmVjdG9zXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAxMCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtU2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==