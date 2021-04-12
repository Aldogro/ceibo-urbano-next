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












 // import { useAuth } from '../../services/Auth.context'



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
      setPassword = _useState3[1]; // const [authState, authDispatch] = useAuth()


  var _useSignInWithEmailAn = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_15__["useSignInWithEmailAndPassword"])(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_13__["default"].auth()),
      _useSignInWithEmailAn2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useSignInWithEmailAn, 4),
      signInWithEmailAndPassword = _useSignInWithEmailAn2[0],
      user = _useSignInWithEmailAn2[1],
      loading = _useSignInWithEmailAn2[2],
      error = _useSignInWithEmailAn2[3];

  var handleCloseSnackbar = function handleCloseSnackbar() {
    setOpenErrorSnackbar(false);
  };

  var handleOnSubmit = function handleOnSubmit(e) {
    e.preventDefault();
    console.log(user);
    signInWithEmailAndPassword(email, password);
  };
  /*   const onSubmit = async ({ email, password}) => {
      try {
        const response = await app.auth().signInWithEmailAndPassword(email, password)
        authDispatch({
          type: 'setAuthDetails',
          payload: {
            user: response.user,
          },
        })
        router.push('/')
      }
      catch (error) {setOpenErrorSnackbar(true)}
    } */


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
              lineNumber: 60,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
              onSubmit: function onSubmit() {
                return handleOnSubmit();
              },
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
                lineNumber: 64,
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
                lineNumber: 73,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
                type: "submit",
                className: classes.button,
                size: "small",
                variant: "contained",
                color: "primary",
                fullWidth: true,
                children: "Entrar"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 82,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                underline: "always",
                href: "/",
                children: "Volver al inicio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
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
              lineNumber: 98,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 58,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 56,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 55,
    columnNumber: 5
  }, this);
}

_s(FormSignIn, "jfB3FUqTd7n7ePLKtqxWdi6UtN8=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9Gb3JtU2lnbkluLmpzIl0sIm5hbWVzIjpbIkZvcm1TaWduSW4iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJvcGVuRXJyb3JTbmFja2JhciIsInNldE9wZW5FcnJvclNuYWNrYmFyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImFwcCIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVDbG9zZVNuYWNrYmFyIiwiaGFuZGxlT25TdWJtaXQiLCJlIiwicHJldmVudERlZmF1bHQiLCJjb25zb2xlIiwibG9nIiwiY29udGFpbmVyIiwicGFwZXIiLCJmb3JtIiwidGFyZ2V0IiwidmFsdWUiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJoZWlnaHQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwic2Vjb25kYXJ5IiwibWFpbiIsInBhZGRpbmciLCJzcGFjaW5nIiwiYnJlYWtwb2ludHMiLCJ1cCIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Q0FFQTs7QUFDQTs7QUFFQSxTQUFTQSxVQUFULEdBQXNCO0FBQUE7O0FBQ3BCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7O0FBRm9CLGtCQUc4QkMsc0RBQVEsQ0FBQyxLQUFELENBSHRDO0FBQUEsTUFHYkMs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SEMsYUFBTyxFQUFFTixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkLEVBQWlCLENBQWpCO0FBRk4sT0FHRlAsS0FBSyxDQUFDUSxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUhFLEVBRzJCO0FBQzVCSCxhQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsRUFBaUIsRUFBakI7QUFEbUIsS0FIM0IsQ0FKa0M7QUFXdkNkLFFBQUksRUFBRTtBQUNKaUIsZUFBUyxFQUFFVixLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBRFAsS0FYaUM7QUFjdkNYLFVBQU0sRUFBRTtBQUNOYyxlQUFTLEVBQUVWLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsQ0FETDtBQUVOSSxrQkFBWSxFQUFFWCxLQUFLLENBQUNPLE9BQU4sQ0FBYyxDQUFkO0FBRlI7QUFkK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFvQmV6Qyx5RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi43ZDBlN2FiMjZmM2ViOTZhNDA4Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcidcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJ1xyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbi8vIGltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoLmNvbnRleHQnXHJcbmltcG9ydCB7IHVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCdcclxuXHJcbmZ1bmN0aW9uIEZvcm1TaWduSW4oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbb3BlbkVycm9yU25hY2tiYXIsIHNldE9wZW5FcnJvclNuYWNrYmFyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtlbWFpbCwgc2V0RW1haWxdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3Bhc3N3b3JkLCBzZXRQYXNzd29yZF0gPSB1c2VTdGF0ZSgnJylcclxuICAvLyBjb25zdCBbYXV0aFN0YXRlLCBhdXRoRGlzcGF0Y2hdID0gdXNlQXV0aCgpXHJcbiAgY29uc3QgW1xyXG4gICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgICB1c2VyLFxyXG4gICAgbG9hZGluZyxcclxuICAgIGVycm9yLFxyXG4gIF0gPSB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChhcHAuYXV0aCgpKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQ2xvc2VTbmFja2JhciA9ICgpID0+IHtcclxuICAgIHNldE9wZW5FcnJvclNuYWNrYmFyKGZhbHNlKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBjb25zb2xlLmxvZyh1c2VyKVxyXG4gICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gIH1cclxuXHJcbi8qICAgY29uc3Qgb25TdWJtaXQgPSBhc3luYyAoeyBlbWFpbCwgcGFzc3dvcmR9KSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGFwcC5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICBhdXRoRGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdzZXRBdXRoRGV0YWlscycsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdXNlcjogcmVzcG9uc2UudXNlcixcclxuICAgICAgICB9LFxyXG4gICAgICB9KVxyXG4gICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHtzZXRPcGVuRXJyb3JTbmFja2Jhcih0cnVlKX1cclxuICB9ICovXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9PlxyXG4gICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWluZXJ9IGNvbnRhaW5lciBqdXN0aWZ5PVwiY2VudGVyXCIgYWxpZ25JdGVtcz1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fSA+XHJcbiAgICAgICAgICAgIDxQYXBlciBjbGFzc05hbWU9e2NsYXNzZXMucGFwZXJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIGd1dHRlckJvdHRvbSBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgSW5ncmVzYXJcclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17KCkgPT4gaGFuZGxlT25TdWJtaXQoKX0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e2VtYWlsfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0RW1haWwodGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtwYXNzd29yZH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFBhc3N3b3JkKHRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgICAgIHNpemU9XCJzbWFsbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEVudHJhclxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdW5kZXJsaW5lPVwiYWx3YXlzXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgVm9sdmVyIGFsIGluaWNpb1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3BlbkVycm9yU25hY2tiYXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVNuYWNrYmFyfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZT1cIkVsIGVtYWlsIHkvbyBsYSBjb250cmFzZcOxYSBzb24gaW5jb3JyZWN0b3NcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDEwKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1TaWduSW4iXSwic291cmNlUm9vdCI6IiJ9