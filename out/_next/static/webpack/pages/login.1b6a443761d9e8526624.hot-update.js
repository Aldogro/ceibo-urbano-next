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

  var handleCloseSnackbar = function handleCloseSnackbar() {
    setOpenErrorSnackbar(false);
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
          lineNumber: 59,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
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
              lineNumber: 66,
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
              lineNumber: 78,
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
              lineNumber: 90,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 65,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 63,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          underline: "always",
          href: "/",
          children: "Volver al inicio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 103,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 102,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: openErrorSnackbar,
      onClose: handleClose,
      message: "El email y/o la contrase\xF1a son incorrectos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 108,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 56,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TaWduSW4uanMiXSwibmFtZXMiOlsiU2lnbkluIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZW50Iiwic2V0U2VudCIsIm9wZW5FcnJvclNuYWNrYmFyIiwic2V0T3BlbkVycm9yU25hY2tiYXIiLCJ1c2VBdXRoIiwiYXV0aFN0YXRlIiwiYXV0aERpc3BhdGNoIiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJyZXF1aXJlZCIsImVtYWlsIiwiZW1haWxFcnJvciIsImhhbmRsZUNsb3NlU25hY2tiYXIiLCJvblN1Ym1pdCIsInBhc3N3b3JkIiwiZmlyZWJhc2UiLCJhdXRoIiwic2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQiLCJ0aGVuIiwicmVzcG9uc2UiLCJ0eXBlIiwicGF5bG9hZCIsInVzZXIiLCJwdXNoIiwiZXJyb3IiLCJzdWJtaXR0aW5nIiwiaGFuZGxlU3VibWl0IiwiZm9ybSIsIlJGVGV4dEZpZWxkIiwiYnV0dG9uIiwidmVydGljYWwiLCJob3Jpem9udGFsIiwiaGFuZGxlQ2xvc2UiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwid2l0aFJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDaEIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFGZ0Isd0JBR1FDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSFI7QUFBQTtBQUFBLE1BR1RDLElB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UFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdFRDs7R0F0R1F4QyxNO1VBQ1NFLFMsRUFDREUsc0QsRUFHbUJPLCtEOzs7S0FMM0JYLE07QUF3R1QsSUFBTUUsU0FBUyxHQUFHdUMsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q1AsUUFBSSxFQUFFO0FBQ0pRLGVBQVMsRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQURQLEtBRGlDO0FBSXZDUCxVQUFNLEVBQUU7QUFDTk0sZUFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBREw7QUFFTkMsa0JBQVksRUFBRUgsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQUZSO0FBSitCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBVWUscUVBQUFFLHlEQUFRLENBQUM5QyxNQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjFiNmE0NDM3NjFkOWU4NTI2NjI0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJvb3QgZnJvbSAnLi93aXRoUm9vdCdcclxuLy8gLS0tIFBvc3QgYm9vdHN0cmFwIC0tLS0tXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGaWVsZCwgRm9ybSB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgQXBwRm9ybSBmcm9tICcuL3ZpZXdzL0FwcEZvcm0nXHJcbmltcG9ydCB7IGVtYWlsLCByZXF1aXJlZCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL3ZhbGlkYXRpb24nXHJcbmltcG9ydCBSRlRleHRGaWVsZCBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS9SRlRleHRGaWVsZCdcclxuaW1wb3J0IEZvcm1CdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vRm9ybUJ1dHRvbidcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJ1xyXG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gJy4uL2ZpcmViYXNlL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9zZXJ2aWNlcy9BdXRoLmNvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbc2VudCwgc2V0U2VudF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbb3BlbkVycm9yU25hY2tiYXIsIHNldE9wZW5FcnJvclNuYWNrYmFyXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFthdXRoU3RhdGUsIGF1dGhEaXNwYXRjaF0gPSB1c2VBdXRoKClcclxuXHJcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSByZXF1aXJlZChbJ2VtYWlsJywgJ3Bhc3N3b3JkJ10sIHZhbHVlcylcclxuXHJcbiAgICBpZiAoIWVycm9ycy5lbWFpbCkge1xyXG4gICAgICBjb25zdCBlbWFpbEVycm9yID0gZW1haWwodmFsdWVzLmVtYWlsLCB2YWx1ZXMpXHJcbiAgICAgIGlmIChlbWFpbEVycm9yKSB7XHJcbiAgICAgICAgZXJyb3JzLmVtYWlsID0gZW1haWwodmFsdWVzLmVtYWlsLCB2YWx1ZXMpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXJyb3JzXHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVDbG9zZVNuYWNrYmFyID0gKCkgPT4ge1xyXG4gICAgc2V0T3BlbkVycm9yU25hY2tiYXIoZmFsc2UpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9ICh7IGVtYWlsLCBwYXNzd29yZH0pID0+IHtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBhdXRoRGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogJ3NldEF1dGhEZXRhaWxzJyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdXNlcjogcmVzcG9uc2UudXNlcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBzZXRPcGVuRXJyb3JTbmFja2Jhcih0cnVlKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBGb3JtPlxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGd1dHRlckJvdHRvbSBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICBJbmdyZXNhclxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzdWJzY3JpcHRpb249e3sgc3VibWl0dGluZzogdHJ1ZSB9fSB2YWxpZGF0ZT17dmFsaWRhdGV9PlxyXG4gICAgICAgICAgeyh7IGhhbmRsZVN1Ym1pdCwgc3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JGVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgc2VudH1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtSRlRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IHNlbnR9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgc2VudH1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3VibWl0dGluZyB8fCBzZW50ID8gJ1Byb2Nlc2FuZG/igKYnIDogJ0VudHJhcid9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmsgdW5kZXJsaW5lPVwiYWx3YXlzXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgVm9sdmVyIGFsIGluaWNpb1xyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9BcHBGb3JtPlxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcclxuICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvcGVuPXtvcGVuRXJyb3JTbmFja2Jhcn1cclxuICAgICAgICBvbkNsb3NlPXtoYW5kbGVDbG9zZX1cclxuICAgICAgICBtZXNzYWdlPVwiRWwgZW1haWwgeS9vIGxhIGNvbnRyYXNlw7FhIHNvbiBpbmNvcnJlY3Rvc1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZm9ybToge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm9vdChTaWduSW4pIl0sInNvdXJjZVJvb3QiOiIifQ==