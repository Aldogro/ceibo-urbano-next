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

  var handleOnSubmit = function handleOnSubmit() {
    signInWithEmailAndPassword(email, password);
    console.log(error);

    if (user) {
      router.push('/');
    }

    if (error) {
      setOpenErrorSnackbar(true);
    }
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
              lineNumber: 65,
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
                lineNumber: 69,
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
                lineNumber: 78,
                columnNumber: 19
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_10__["default"], {
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
                lineNumber: 87,
                columnNumber: 19
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 17
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
              align: "center",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_5__["default"], {
                underline: "always",
                href: "/",
                children: "Volver al inicio"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 99,
                columnNumber: 17
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 98,
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
              lineNumber: 103,
              columnNumber: 15
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 64,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 63,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 62,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 60,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvZm9ybS9Gb3JtU2lnbkluLmpzIl0sIm5hbWVzIjpbIkZvcm1TaWduSW4iLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlU3RhdGUiLCJvcGVuRXJyb3JTbmFja2JhciIsInNldE9wZW5FcnJvclNuYWNrYmFyIiwiZW1haWwiLCJzZXRFbWFpbCIsInBhc3N3b3JkIiwic2V0UGFzc3dvcmQiLCJ1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsImFwcCIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInVzZXIiLCJsb2FkaW5nIiwiZXJyb3IiLCJoYW5kbGVDbG9zZVNuYWNrYmFyIiwiaGFuZGxlT25TdWJtaXQiLCJjb25zb2xlIiwibG9nIiwicHVzaCIsImNvbnRhaW5lciIsInBhcGVyIiwiZm9ybSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiaGVpZ2h0IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsInNlY29uZGFyeSIsIm1haW4iLCJwYWRkaW5nIiwic3BhY2luZyIsImJyZWFrcG9pbnRzIiwidXAiLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0NBRUE7O0FBQ0E7O0FBRUEsU0FBU0EsVUFBVCxHQUFzQjtBQUFBOztBQUNwQixNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUZvQixrQkFHOEJDLHNEQUFRLENBQUMsS0FBRCxDQUh0QztBQUFBLE1BR2JDLGlCQUhhO0FBQUEsTUFHTUMs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LEtBQUssQ0FBQ0csT0FBTixDQUFjQyxTQUFkLENBQXdCQyxJQUR0QztBQUVIQyxhQUFPLEVBQUVOLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakI7QUFGTixPQUdGUCxLQUFLLENBQUNRLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSEUsRUFHMkI7QUFDNUJILGFBQU8sRUFBRU4sS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZCxFQUFpQixFQUFqQjtBQURtQixLQUgzQixDQUprQztBQVd2Q2QsUUFBSSxFQUFFO0FBQ0ppQixlQUFTLEVBQUVWLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQ7QUFEUCxLQVhpQztBQWN2Q1gsVUFBTSxFQUFFO0FBQ05jLGVBQVMsRUFBRVYsS0FBSyxDQUFDTyxPQUFOLENBQWMsQ0FBZCxDQURMO0FBRU5JLGtCQUFZLEVBQUVYLEtBQUssQ0FBQ08sT0FBTixDQUFjLENBQWQ7QUFGUjtBQWQrQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQW9CZXhDLHlFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmM3MzQxZDQ0N2EyOTVmYmMyOTQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IFBhcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1BhcGVyJ1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuLy8gaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGguY29udGV4dCdcclxuaW1wb3J0IHsgdXNlU2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgfSBmcm9tICdyZWFjdC1maXJlYmFzZS1ob29rcy9hdXRoJ1xyXG5cclxuZnVuY3Rpb24gRm9ybVNpZ25JbigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtvcGVuRXJyb3JTbmFja2Jhciwgc2V0T3BlbkVycm9yU25hY2tiYXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2VtYWlsLCBzZXRFbWFpbF0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcGFzc3dvcmQsIHNldFBhc3N3b3JkXSA9IHVzZVN0YXRlKCcnKVxyXG4gIC8vIGNvbnN0IFthdXRoU3RhdGUsIGF1dGhEaXNwYXRjaF0gPSB1c2VBdXRoKClcclxuICBjb25zdCBbXHJcbiAgICBzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCxcclxuICAgIHVzZXIsXHJcbiAgICBsb2FkaW5nLFxyXG4gICAgZXJyb3IsXHJcbiAgXSA9IHVzZVNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGFwcC5hdXRoKCkpO1xyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZVNuYWNrYmFyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkVycm9yU25hY2tiYXIoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9ICgpID0+IHtcclxuICAgIHNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgIGNvbnNvbGUubG9nKGVycm9yKVxyXG4gICAgaWYgKHVzZXIpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfVxyXG4gICAgaWYgKGVycm9yKSB7XHJcbiAgICAgIHNldE9wZW5FcnJvclNuYWNrYmFyKHRydWUpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuLyogICBjb25zdCBvblN1Ym1pdCA9IGFzeW5jICh7IGVtYWlsLCBwYXNzd29yZH0pID0+IHtcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXBwLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIGF1dGhEaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogJ3NldEF1dGhEZXRhaWxzJyxcclxuICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICB1c2VyOiByZXNwb25zZS51c2VyLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pXHJcbiAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikge3NldE9wZW5FcnJvclNuYWNrYmFyKHRydWUpfVxyXG4gIH0gKi9cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0+XHJcbiAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW5lcn0gY29udGFpbmVyIGp1c3RpZnk9XCJjZW50ZXJcIiBhbGlnbkl0ZW1zPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9ID5cclxuICAgICAgICAgICAgPFBhcGVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5wYXBlcn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgZ3V0dGVyQm90dG9tIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICBJbmdyZXNhclxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlPXtlbWFpbH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldEVtYWlsKHRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17cGFzc3dvcmR9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRQYXNzd29yZCh0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgICBzaXplPVwic21hbGxcIlxyXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gaGFuZGxlT25TdWJtaXQoKX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEVudHJhclxyXG4gICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgPExpbmsgdW5kZXJsaW5lPVwiYWx3YXlzXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgVm9sdmVyIGFsIGluaWNpb1xyXG4gICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8U25hY2tiYXJcclxuICAgICAgICAgICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgb3Blbj17b3BlbkVycm9yU25hY2tiYXJ9XHJcbiAgICAgICAgICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZVNuYWNrYmFyfVxyXG4gICAgICAgICAgICAgICAgbWVzc2FnZT1cIkVsIGVtYWlsIHkvbyBsYSBjb250cmFzZcOxYSBzb24gaW5jb3JyZWN0b3NcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9HcmlkPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIGhlaWdodDogJzEwMHZoJyxcclxuICB9LFxyXG4gIHBhcGVyOiB7XHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuc2Vjb25kYXJ5Lm1haW4sXHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDIpLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMsIDEwKSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBmb3JtOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1TaWduSW4iXSwic291cmNlUm9vdCI6IiJ9