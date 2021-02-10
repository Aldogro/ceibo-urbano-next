webpackHotUpdate_N_E("pages/login",{

/***/ "./modules/SignIn.js":
/*!***************************!*\
  !*** ./modules/SignIn.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _withRoot__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./withRoot */ "./modules/withRoot.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_final_form__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-final-form */ "./node_modules/react-final-form/dist/react-final-form.es.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Link */ "./node_modules/@material-ui/core/esm/Link/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _views_AppForm__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./views/AppForm */ "./modules/views/AppForm.js");
/* harmony import */ var _components_form_validation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/form/validation */ "./modules/components/form/validation.js");
/* harmony import */ var _components_form_RFTextField__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/form/RFTextField */ "./modules/components/form/RFTextField.js");
/* harmony import */ var _components_form_FormButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/form/FormButton */ "./modules/components/form/FormButton.js");
/* harmony import */ var _material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Snackbar */ "./node_modules/@material-ui/core/esm/Snackbar/index.js");
/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../firebase/client */ "./firebase/client.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _services_Auth_context__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../services/Auth.context */ "./services/Auth.context.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\SignIn.js",
    _s = $RefreshSig$();

 // --- Post bootstrap -----















function SignIn() {
  _s();

  var _this = this;

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      sent = _React$useState2[0],
      setSent = _React$useState2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      openErrorSnackbar = _useState[0],
      setOpenErrorSnackbar = _useState[1];

  var _useAuth = Object(_services_Auth_context__WEBPACK_IMPORTED_MODULE_15__["useAuth"])(),
      _useAuth2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useAuth, 2),
      authState = _useAuth2[0],
      authDispatch = _useAuth2[1];

  var validate = function validate(values) {
    var errors = Object(_components_form_validation__WEBPACK_IMPORTED_MODULE_9__["required"])(['email', 'password'], values);

    if (!errors.email) {
      var emailError = Object(_components_form_validation__WEBPACK_IMPORTED_MODULE_9__["email"])(values.email, values);

      if (emailError) {
        errors.email = Object(_components_form_validation__WEBPACK_IMPORTED_MODULE_9__["email"])(values.email, values);
      }
    }

    return errors;
  };

  var onSubmit = function onSubmit(_ref) {
    var email = _ref.email,
        password = _ref.password;
    _firebase_client__WEBPACK_IMPORTED_MODULE_13__["firebase"].auth().signInWithEmailAndPassword(email, password).then(function (response) {
      authDispatch({
        type: 'setAuthDetails',
        payload: {
          user: response.user
        }
      });
      router.push('/');
    })["catch"](function (error) {
      return console.log(error);
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_views_AppForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "h3",
          gutterBottom: true,
          marked: "center",
          align: "center",
          children: "Ingresar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 55,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_4__["Form"], {
        onSubmit: onSubmit,
        subscription: {
          submitting: true
        },
        validate: validate,
        children: function children(_ref2) {
          var handleSubmit = _ref2.handleSubmit,
              submitting = _ref2.submitting;
          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
            onSubmit: handleSubmit,
            className: classes.form,
            noValidate: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_4__["Field"], {
              autoComplete: "email",
              autoFocus: true,
              component: _components_form_RFTextField__WEBPACK_IMPORTED_MODULE_10__["default"],
              disabled: submitting || sent,
              fullWidth: true,
              label: "E-mail",
              margin: "normal",
              name: "email",
              required: true,
              size: "large"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_final_form__WEBPACK_IMPORTED_MODULE_4__["Field"], {
              fullWidth: true,
              size: "large",
              component: _components_form_RFTextField__WEBPACK_IMPORTED_MODULE_10__["default"],
              disabled: submitting || sent,
              required: true,
              name: "password",
              autoComplete: "current-password",
              label: "Contrase\xF1a",
              type: "password",
              margin: "normal"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_form_FormButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: classes.button,
              disabled: submitting || sent,
              size: "large",
              color: "secondary",
              fullWidth: true,
              children: submitting || sent ? 'Procesando…' : 'Entrar'
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 59,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          underline: "always",
          href: "/",
          children: "Volver al inicio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 99,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 98,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: openErrorSnackbar,
      autoHideDuration: 5000,
      message: "El email y/o la contrase\xF1a son incorrectos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 104,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 52,
    columnNumber: 5
  }, this);
}

_s(SignIn, "HPOlHyFjL2gUzhpGRsxE6y67oy8=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_14__["useRouter"], _services_Auth_context__WEBPACK_IMPORTED_MODULE_15__["useAuth"]];
});

_c = SignIn;
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    form: {
      marginTop: theme.spacing(6)
    },
    button: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2)
    }
  };
});
/* harmony default export */ __webpack_exports__["default"] = (_c2 = Object(_withRoot__WEBPACK_IMPORTED_MODULE_2__["default"])(SignIn));

var _c, _c2;

$RefreshReg$(_c, "SignIn");
$RefreshReg$(_c2, "%default%");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TaWduSW4uanMiXSwibmFtZXMiOlsiU2lnbkluIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZW50Iiwic2V0U2VudCIsIm9wZW5FcnJvclNuYWNrYmFyIiwic2V0T3BlbkVycm9yU25hY2tiYXIiLCJ1c2VBdXRoIiwiYXV0aFN0YXRlIiwiYXV0aERpc3BhdGNoIiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJyZXF1aXJlZCIsImVtYWlsIiwiZW1haWxFcnJvciIsIm9uU3VibWl0IiwicGFzc3dvcmQiLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInR5cGUiLCJwYXlsb2FkIiwidXNlciIsInB1c2giLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciLCJzdWJtaXR0aW5nIiwiaGFuZGxlU3VibWl0IiwiZm9ybSIsIlJGVGV4dEZpZWxkIiwiYnV0dG9uIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsIndpdGhSb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7O0FBRmdCLHdCQUdRQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUhSO0FBQUE7QUFBQSxNQUdUQyxJQUhTO0FBQUEsTUFHSEMsT0FIRzs7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R21CTywrRDs7O0tBTDNCWCxNO0FBb0dULElBQU1FLFNBQVMsR0FBR3VDLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNOLFFBQUksRUFBRTtBQUNKTyxlQUFTLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQ7QUFEUCxLQURpQztBQUl2Q04sVUFBTSxFQUFFO0FBQ05LLGVBQVMsRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQURMO0FBRU5DLGtCQUFZLEVBQUVILEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQ7QUFGUjtBQUorQixHQUFaO0FBQUEsQ0FBRCxDQUE1QjtBQVVlLHFFQUFBRSx5REFBUSxDQUFDOUMsTUFBRCxDQUF2QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi5mNGM4NTlkYjNjNmM2YjNkOTViMy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpdGhSb290IGZyb20gJy4vd2l0aFJvb3QnXHJcbi8vIC0tLSBQb3N0IGJvb3RzdHJhcCAtLS0tLVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmllbGQsIEZvcm0gfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IEFwcEZvcm0gZnJvbSAnLi92aWV3cy9BcHBGb3JtJ1xyXG5pbXBvcnQgeyBlbWFpbCwgcmVxdWlyZWQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS92YWxpZGF0aW9uJ1xyXG5pbXBvcnQgUkZUZXh0RmllbGQgZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vUkZUZXh0RmllbGQnXHJcbmltcG9ydCBGb3JtQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL0Zvcm1CdXR0b24nXHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhcidcclxuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tICcuLi9maXJlYmFzZS9jbGllbnQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vc2VydmljZXMvQXV0aC5jb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gU2lnbkluKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW3NlbnQsIHNldFNlbnRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW29wZW5FcnJvclNuYWNrYmFyLCBzZXRPcGVuRXJyb3JTbmFja2Jhcl0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYXV0aFN0YXRlLCBhdXRoRGlzcGF0Y2hdID0gdXNlQXV0aCgpXHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JzID0gcmVxdWlyZWQoWydlbWFpbCcsICdwYXNzd29yZCddLCB2YWx1ZXMpXHJcblxyXG4gICAgaWYgKCFlcnJvcnMuZW1haWwpIHtcclxuICAgICAgY29uc3QgZW1haWxFcnJvciA9IGVtYWlsKHZhbHVlcy5lbWFpbCwgdmFsdWVzKVxyXG4gICAgICBpZiAoZW1haWxFcnJvcikge1xyXG4gICAgICAgIGVycm9ycy5lbWFpbCA9IGVtYWlsKHZhbHVlcy5lbWFpbCwgdmFsdWVzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVycm9yc1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoeyBlbWFpbCwgcGFzc3dvcmR9KSA9PiB7XHJcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgYXV0aERpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6ICdzZXRBdXRoRGV0YWlscycsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHJlc3BvbnNlLnVzZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEZvcm0+XHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIEluZ3Jlc2FyXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN1YnNjcmlwdGlvbj17eyBzdWJtaXR0aW5nOiB0cnVlIH19IHZhbGlkYXRlPXt2YWxpZGF0ZX0+XHJcbiAgICAgICAgICB7KHsgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UkZUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBzZW50fVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JGVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgc2VudH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm1CdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBzZW50fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzdWJtaXR0aW5nIHx8IHNlbnQgPyAnUHJvY2VzYW5kb+KApicgOiAnRW50cmFyJ31cclxuICAgICAgICAgICAgICA8L0Zvcm1CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8TGluayB1bmRlcmxpbmU9XCJhbHdheXNcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICBWb2x2ZXIgYWwgaW5pY2lvXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0FwcEZvcm0+XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9wZW49e29wZW5FcnJvclNuYWNrYmFyfVxyXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezUwMDB9XHJcbiAgICAgICAgbWVzc2FnZT1cIkVsIGVtYWlsIHkvbyBsYSBjb250cmFzZcOxYSBzb24gaW5jb3JyZWN0b3NcIlxyXG4gICAgICAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGZvcm06IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg2KSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvb3QoU2lnbkluKSJdLCJzb3VyY2VSb290IjoiIn0=