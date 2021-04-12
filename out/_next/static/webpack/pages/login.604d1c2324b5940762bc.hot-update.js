webpackHotUpdate_N_E("pages/login",{

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js":
false,

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
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./src/firebase/firebase.config.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\src\\components\\form\\FormSignIn.js",
    _s = $RefreshSig$();















function FormSignIn() {
  _s();

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      openErrorSnackbar = _useState[0],
      setOpenErrorSnackbar = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      password = _useState3[0],
      setPassword = _useState3[1];

  var _useSignInWithEmailAn = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_15__["useSignInWithEmailAndPassword"])(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_13__["default"].auth()),
      _useSignInWithEmailAn2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useSignInWithEmailAn, 4),
      signInWithEmailAndPassword = _useSignInWithEmailAn2[0],
      user = _useSignInWithEmailAn2[1],
      loading = _useSignInWithEmailAn2[2],
      error = _useSignInWithEmailAn2[3];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (localStorage.getItem('cu-user-info')) router.push('/');
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (user) {
      localStorage.setItem('cu-user-info', JSON.stringify(user));
      router.push('/');
    }
  }, [user]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (error) setOpenErrorSnackbar(true);
  }, [error]);

  var handleCloseSnackbar = function handleCloseSnackbar() {
    setOpenErrorSnackbar(false);
  };

  var handleOnSubmit = function handleOnSubmit() {
    signInWithEmailAndPassword(email, password);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_6__["default"], {
      maxWidth: "lg",
      className: classes.container,
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
        className: classes.container,
        container: true,
        justify: "center",
        alignItems: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_8__["default"], {
          item: true,
          xs: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_11__["default"], {
            className: classes.paper,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              variant: "h4",
              gutterBottom: true,
              marked: "center",
              align: "center",
              children: "Ingresar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
              className: classes.form,
              noValidate: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
                fullWidth: true,
                label: "E-mail",
                margin: "normal",
                name: "email",
                required: true,
                value: email,
                onChange: function onChange(_ref) {
                  var target = _ref.target;
                  return setEmail(target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
                fullWidth: true,
                required: true,
                name: "password",
                label: "Contrase\xF1a",
                type: "password",
                value: password,
                onChange: function onChange(_ref2) {
                  var target = _ref2.target;
                  return setPassword(target.value);
                }
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
                className: classes.button,
                size: "small",
                variant: "contained",
                color: "primary",
                fullWidth: true,
                disabled: loading,
                onClick: function onClick() {
                  return handleOnSubmit();
                },
                children: "Entrar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                underline: "always",
                href: "/",
                children: "Volver al inicio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 92,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 91,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
              anchorOrigin: {
                vertical: 'top',
                horizontal: 'right'
              },
              open: openErrorSnackbar,
              onClose: handleCloseSnackbar,
              message: "El email y/o la contrase\xF1a son incorrectos"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 56,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_s(FormSignIn, "Anh9G9cJg+pVFNaLAt6IEKxGQd8=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"], react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_15__["useSignInWithEmailAndPassword"]];
});

_c = FormSignIn;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9Gb3JtU2lnbkluLmpzIl0sIm5hbWVzIjpbIkZvcm1TaWduSW4iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJvcGVuRXJyb3JTbmFja2JhciIsInNldE9wZW5FcnJvclNuYWNrYmFyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImFwcCIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJ1c2VFZmZlY3QiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwicHVzaCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiaGFuZGxlQ2xvc2VTbmFja2JhciIsImhhbmRsZU9uU3VibWl0IiwiY29udGFpbmVyIiwicGFwZXIiLCJmb3JtIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsInBhZGRpbmciLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLFVBQVQsR0FBc0I7QUFBQTs7QUFDcEIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFGb0Isa0JBRzhC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QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUE0REQ7O0dBaEdRMUIsVTtVQUNTRSxTLEVBQ0RFLHNELEVBU1hRLHdGOzs7S0FYR1osVTtBQWtHVCxJQUFNRSxTQUFTLEdBQUdrQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDVCxhQUFTLEVBQUU7QUFDVFUsWUFBTSxFQUFFO0FBREMsS0FENEI7QUFJdkNULFNBQUssRUFBRTtBQUNMVSxxQkFBZSxFQUFFRixLQUFLLENBQUNHLE9BQU4sQ0FBY0MsU0FBZCxDQUF3QkMsSUFEdEM7QUFFSEMsYUFBTyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBRk4sT0FHRlAsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUhFLEVBRzJCO0FBQzVCSCxhQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsRUFBaUIsRUFBakI7QUFEbUIsS0FIM0IsQ0FKa0M7QUFXdkNkLFFBQUksRUFBRTtBQUNKaUIsZUFBUyxFQUFFVixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBRFAsS0FYaUM7QUFjdkNYLFVBQU0sRUFBRTtBQUNOYyxlQUFTLEVBQUVWLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FETDtBQUVOSSxrQkFBWSxFQUFFWCxLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBRlI7QUFkK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFvQmU1Qyx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi42MDRkMWMyMzI0YjU5NDA3NjJiYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xyXG5cclxuZnVuY3Rpb24gRm9ybVNpZ25JbigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtvcGVuRXJyb3JTbmFja2Jhciwgc2V0T3BlbkVycm9yU25hY2tiYXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtcclxuICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkLFxyXG4gICAgdXNlcixcclxuICAgIGxvYWRpbmcsXHJcbiAgICBlcnJvcixcclxuICBdID0gdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoYXBwLmF1dGgoKSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY3UtdXNlci1pbmZvJykpIHJvdXRlci5wdXNoKCcvJylcclxuICB9LCBbXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICh1c2VyKSB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjdS11c2VyLWluZm8nLCBKU09OLnN0cmluZ2lmeSh1c2VyKSlcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gIH0sIFt1c2VyXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChlcnJvcikgc2V0T3BlbkVycm9yU25hY2tiYXIodHJ1ZSlcclxuICB9LCBbZXJyb3JdKVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZVNuYWNrYmFyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkVycm9yU25hY2tiYXIoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9ICgpID0+IHtcclxuICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSA+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbSBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSW5ncmVzYXJcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17ZW1haWx9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRFbWFpbCh0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3Bhc3N3b3JkfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UGFzc3dvcmQodGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZT1cInNtYWxsXCJcclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXtsb2FkaW5nfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IGhhbmRsZU9uU3VibWl0KCl9XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICBFbnRyYXJcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgIDxMaW5rIHVuZGVybGluZT1cImFsd2F5c1wiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgIFZvbHZlciBhbCBpbmljaW9cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgIG9wZW49e29wZW5FcnJvclNuYWNrYmFyfVxyXG4gICAgICAgICAgICAgICAgb25DbG9zZT17aGFuZGxlQ2xvc2VTbmFja2Jhcn1cclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U9XCJFbCBlbWFpbCB5L28gbGEgY29udHJhc2XDsWEgc29uIGluY29ycmVjdG9zXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L1BhcGVyPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvR3JpZD5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDB2aCcsXHJcbiAgfSxcclxuICBwYXBlcjoge1xyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLnNlY29uZGFyeS5tYWluLFxyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAyKSxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzLCAxMCksXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZm9ybToge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtU2lnbkluIl0sInNvdXJjZVJvb3QiOiIifQ==