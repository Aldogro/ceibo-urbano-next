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
          lineNumber: 54,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
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
              lineNumber: 61,
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
              lineNumber: 73,
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
              lineNumber: 85,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          underline: "always",
          href: "/",
          children: "Volver al inicio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 52,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Snackbar__WEBPACK_IMPORTED_MODULE_12__["default"], {
      anchorOrigin: {
        vertical: 'top',
        horizontal: 'right'
      },
      open: true,
      autoHideDuration: 5000,
      message: "El email y/o la contrase\xF1a son incorrectos"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 103,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 51,
    columnNumber: 5
  }, this);
}

_s(SignIn, "PRlsTQ9OrAwwfh5V33TIojdxbS0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TaWduSW4uanMiXSwibmFtZXMiOlsiU2lnbkluIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZW50Iiwic2V0U2VudCIsInVzZUF1dGgiLCJhdXRoU3RhdGUiLCJhdXRoRGlzcGF0Y2giLCJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsInJlcXVpcmVkIiwiZW1haWwiLCJlbWFpbEVycm9yIiwib25TdWJtaXQiLCJwYXNzd29yZCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwidHlwZSIsInBheWxvYWQiLCJ1c2VyIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdHRpbmciLCJoYW5kbGVTdWJtaXQiLCJmb3JtIiwiUkZUZXh0RmllbGQiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwid2l0aFJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDaEIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFGZ0Isd0JBR1FDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSFI7QUFBQTtBQUFBLE1BR1RDLElBSFM7QUFBQSxNQUdIQyxPQUhHOztBQUFBLGlCQUlrQkMsdUVBQU8sRUFKekI7QUFBQTtBQUFBLE1BSVRDLFNB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QUFDRSxPQUFOLENBQWMsQ0FBZDtBQURQLEtBRGlDO0FBSXZDTixVQUFNLEVBQUU7QUFDTkssZUFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBREw7QUFFTkMsa0JBQVksRUFBRUgsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZDtBQUZSO0FBSitCLEdBQVo7QUFBQSxDQUFELENBQTVCO0FBVWUscUVBQUFFLHlEQUFRLENBQUM1QyxNQUFELENBQXZCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmFmZmQwYmY2YTZhZDNjZTQwNGY0LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJvb3QgZnJvbSAnLi93aXRoUm9vdCdcclxuLy8gLS0tIFBvc3QgYm9vdHN0cmFwIC0tLS0tXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmllbGQsIEZvcm0gfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IEFwcEZvcm0gZnJvbSAnLi92aWV3cy9BcHBGb3JtJ1xyXG5pbXBvcnQgeyBlbWFpbCwgcmVxdWlyZWQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS92YWxpZGF0aW9uJ1xyXG5pbXBvcnQgUkZUZXh0RmllbGQgZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vUkZUZXh0RmllbGQnXHJcbmltcG9ydCBGb3JtQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL0Zvcm1CdXR0b24nXHJcbmltcG9ydCBTbmFja2JhciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TbmFja2JhcidcclxuaW1wb3J0IHsgZmlyZWJhc2UgfSBmcm9tICcuLi9maXJlYmFzZS9jbGllbnQnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vc2VydmljZXMvQXV0aC5jb250ZXh0J1xyXG5cclxuZnVuY3Rpb24gU2lnbkluKCkge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcbiAgY29uc3QgW3NlbnQsIHNldFNlbnRdID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2F1dGhTdGF0ZSwgYXV0aERpc3BhdGNoXSA9IHVzZUF1dGgoKVxyXG5cclxuICBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHJlcXVpcmVkKFsnZW1haWwnLCAncGFzc3dvcmQnXSwgdmFsdWVzKVxyXG5cclxuICAgIGlmICghZXJyb3JzLmVtYWlsKSB7XHJcbiAgICAgIGNvbnN0IGVtYWlsRXJyb3IgPSBlbWFpbCh2YWx1ZXMuZW1haWwsIHZhbHVlcylcclxuICAgICAgaWYgKGVtYWlsRXJyb3IpIHtcclxuICAgICAgICBlcnJvcnMuZW1haWwgPSBlbWFpbCh2YWx1ZXMuZW1haWwsIHZhbHVlcylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnJvcnNcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKHsgZW1haWwsIHBhc3N3b3JkfSkgPT4ge1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGF1dGhEaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiAnc2V0QXV0aERldGFpbHMnLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICB1c2VyOiByZXNwb25zZS51c2VyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IGNvbnNvbGUubG9nKGVycm9yKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBGb3JtPlxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGd1dHRlckJvdHRvbSBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICBJbmdyZXNhclxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzdWJzY3JpcHRpb249e3sgc3VibWl0dGluZzogdHJ1ZSB9fSB2YWxpZGF0ZT17dmFsaWRhdGV9PlxyXG4gICAgICAgICAgeyh7IGhhbmRsZVN1Ym1pdCwgc3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JGVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgc2VudH1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtSRlRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IHNlbnR9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgc2VudH1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3VibWl0dGluZyB8fCBzZW50ID8gJ1Byb2Nlc2FuZG/igKYnIDogJ0VudHJhcid9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmsgdW5kZXJsaW5lPVwiYWx3YXlzXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgVm9sdmVyIGFsIGluaWNpb1xyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9BcHBGb3JtPlxyXG4gICAgICA8U25hY2tiYXJcclxuICAgICAgICBhbmNob3JPcmlnaW49e3tcclxuICAgICAgICAgIHZlcnRpY2FsOiAndG9wJyxcclxuICAgICAgICAgIGhvcml6b250YWw6ICdyaWdodCcsXHJcbiAgICAgICAgfX1cclxuICAgICAgICBvcGVuPXt0cnVlfVxyXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb249ezUwMDB9XHJcbiAgICAgICAgbWVzc2FnZT1cIkVsIGVtYWlsIHkvbyBsYSBjb250cmFzZcOxYSBzb24gaW5jb3JyZWN0b3NcIlxyXG4gICAgICAvPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGZvcm06IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg2KSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvb3QoU2lnbkluKSJdLCJzb3VyY2VSb290IjoiIn0=