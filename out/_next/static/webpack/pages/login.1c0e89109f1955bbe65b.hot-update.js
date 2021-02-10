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
      return setOpenErrorSnackbar(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TaWduSW4uanMiXSwibmFtZXMiOlsiU2lnbkluIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZW50Iiwic2V0U2VudCIsIm9wZW5FcnJvclNuYWNrYmFyIiwic2V0T3BlbkVycm9yU25hY2tiYXIiLCJ1c2VBdXRoIiwiYXV0aFN0YXRlIiwiYXV0aERpc3BhdGNoIiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJyZXF1aXJlZCIsImVtYWlsIiwiZW1haWxFcnJvciIsIm9uU3VibWl0IiwicGFzc3dvcmQiLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInR5cGUiLCJwYXlsb2FkIiwidXNlciIsInB1c2giLCJlcnJvciIsInN1Ym1pdHRpbmciLCJoYW5kbGVTdWJtaXQiLCJmb3JtIiwiUkZUZXh0RmllbGQiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwid2l0aFJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDaEIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFGZ0Isd0JBR1FDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSFI7QUFBQTtBQUFBLE1BR1RDLElBSFM7QUFBQSxNQUdIQyxPQUhHOztBQUFBLGtCQUlrQ0Ysc0RB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VSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDTixRQUFJLEVBQUU7QUFDSk8sZUFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRFAsS0FEaUM7QUFJdkNOLFVBQU0sRUFBRTtBQUNOSyxlQUFTLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FETDtBQUVOQyxrQkFBWSxFQUFFSCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRlI7QUFKK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFVZSxxRUFBQUUseURBQVEsQ0FBQzVDLE1BQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMWMwZTg5MTA5ZjE5NTViYmU2NWIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoUm9vdCBmcm9tICcuL3dpdGhSb290J1xyXG4vLyAtLS0gUG9zdCBib290c3RyYXAgLS0tLS1cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZpZWxkLCBGb3JtIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBBcHBGb3JtIGZyb20gJy4vdmlld3MvQXBwRm9ybSdcclxuaW1wb3J0IHsgZW1haWwsIHJlcXVpcmVkIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vdmFsaWRhdGlvbidcclxuaW1wb3J0IFJGVGV4dEZpZWxkIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL1JGVGV4dEZpZWxkJ1xyXG5pbXBvcnQgRm9ybUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS9Gb3JtQnV0dG9uJ1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInXHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vZmlyZWJhc2UvY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL3NlcnZpY2VzL0F1dGguY29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtzZW50LCBzZXRTZW50XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtvcGVuRXJyb3JTbmFja2Jhciwgc2V0T3BlbkVycm9yU25hY2tiYXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2F1dGhTdGF0ZSwgYXV0aERpc3BhdGNoXSA9IHVzZUF1dGgoKVxyXG5cclxuICBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHJlcXVpcmVkKFsnZW1haWwnLCAncGFzc3dvcmQnXSwgdmFsdWVzKVxyXG5cclxuICAgIGlmICghZXJyb3JzLmVtYWlsKSB7XHJcbiAgICAgIGNvbnN0IGVtYWlsRXJyb3IgPSBlbWFpbCh2YWx1ZXMuZW1haWwsIHZhbHVlcylcclxuICAgICAgaWYgKGVtYWlsRXJyb3IpIHtcclxuICAgICAgICBlcnJvcnMuZW1haWwgPSBlbWFpbCh2YWx1ZXMuZW1haWwsIHZhbHVlcylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnJvcnNcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKHsgZW1haWwsIHBhc3N3b3JkfSkgPT4ge1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGF1dGhEaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiAnc2V0QXV0aERldGFpbHMnLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICB1c2VyOiByZXNwb25zZS51c2VyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHNldE9wZW5FcnJvclNuYWNrYmFyKHRydWUpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEZvcm0+XHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIEluZ3Jlc2FyXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN1YnNjcmlwdGlvbj17eyBzdWJtaXR0aW5nOiB0cnVlIH19IHZhbGlkYXRlPXt2YWxpZGF0ZX0+XHJcbiAgICAgICAgICB7KHsgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UkZUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBzZW50fVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JGVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgc2VudH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm1CdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBzZW50fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzdWJtaXR0aW5nIHx8IHNlbnQgPyAnUHJvY2VzYW5kb+KApicgOiAnRW50cmFyJ31cclxuICAgICAgICAgICAgICA8L0Zvcm1CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8TGluayB1bmRlcmxpbmU9XCJhbHdheXNcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICBWb2x2ZXIgYWwgaW5pY2lvXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0FwcEZvcm0+XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgdmVydGljYWw6ICd0b3AnLFxyXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ3JpZ2h0JyxcclxuICAgICAgICB9fVxyXG4gICAgICAgIG9wZW49e29wZW5FcnJvclNuYWNrYmFyfVxyXG4gICAgICAgIG1lc3NhZ2U9XCJFbCBlbWFpbCB5L28gbGEgY29udHJhc2XDsWEgc29uIGluY29ycmVjdG9zXCJcclxuICAgICAgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb3JtOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb290KFNpZ25JbikiXSwic291cmNlUm9vdCI6IiJ9