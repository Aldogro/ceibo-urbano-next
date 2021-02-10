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
      return _this.setOpenErrorSnackbar(true);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TaWduSW4uanMiXSwibmFtZXMiOlsiU2lnbkluIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZW50Iiwic2V0U2VudCIsIm9wZW5FcnJvclNuYWNrYmFyIiwic2V0T3BlbkVycm9yU25hY2tiYXIiLCJ1c2VBdXRoIiwiYXV0aFN0YXRlIiwiYXV0aERpc3BhdGNoIiwidmFsaWRhdGUiLCJ2YWx1ZXMiLCJlcnJvcnMiLCJyZXF1aXJlZCIsImVtYWlsIiwiZW1haWxFcnJvciIsIm9uU3VibWl0IiwicGFzc3dvcmQiLCJmaXJlYmFzZSIsImF1dGgiLCJzaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCIsInRoZW4iLCJyZXNwb25zZSIsInR5cGUiLCJwYXlsb2FkIiwidXNlciIsInB1c2giLCJlcnJvciIsInN1Ym1pdHRpbmciLCJoYW5kbGVTdWJtaXQiLCJmb3JtIiwiUkZUZXh0RmllbGQiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwid2l0aFJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDaEIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFGZ0Isd0JBR1FDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSFI7QUFBQTtBQUFBLE1BR1RDLElBSFM7QUFBQSxNQUdIQyxPQUhHOztBQUFBLGtCQUlrQ0Ysc0RBQVEsQ0FBQyxLQUFELENBSjFDO0FBQUEsTUFJVEcsaUJBSlM7QUFBQSxNQUlVQyxvQkFKVjs7QUFBQSxpQkFLa0JDLHVFQUFPLEVBTHpCO0FBQUE7QUFBQSxNQUtUQyxTQUxTO0FBQUEsTUFLRUMsWUFMRjs7QUFPaEIsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0MsTUFBRCxFQUFZO0FBQzNCLFFBQU1DLE1BQU0sR0FBR0MsNEVBQVEsQ0FBQyxDQUFDLE9BQUQsRUFBVSxVQUFWLENBQUQsRUFBd0JGLE1BQXhCLENBQXZCOztBQUVBLFFBQUksQ0FBQ0MsTUFBTSxDQUFDRSxLQUFaLEVBQW1CO0FBQ2pCLFVBQU1DLFVBQVUsR0FBR0QseUVBQUssQ0FBQ0gsTUFBTSxDQUFDRyxLQUFSLEVBQWVILE1BQWYsQ0FBeEI7O0FBQ0EsVUFBSUksVUFBSixFQUFnQjtBQUNkSCxjQUFNLENBQUNFLEtBQVAsR0FBZUEseUVBQUssQ0FBQ0gsTUFBTSxDQUFDRyxLQUFSLEVBQWVILE1BQWYsQ0FBcEI7QUFDRDtBQUNGOztBQUVELFdBQU9DLE1BQVA7QUFDRCxHQVhEOztBQWFBLE1BQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXLE9BQXdCO0FBQUEsUUFBckJGLEtBQXFCLFFBQXJCQSxLQUFxQjtBQUFBLFFBQWRHLFFBQWMsUUFBZEEsUUFBYztBQUN2Q0MsOERBQVEsQ0FBQ0MsSUFBVCxHQUFnQkMsMEJBQWhCLENBQTJDTixLQUEzQyxFQUFrREcsUUFBbEQsRUFDR0ksSUFESCxDQUNRLFVBQUFDLFFBQVEsRUFBSTtBQUNoQmIsa0JBQVksQ0FBQztBQUNYYyxZQUFJLEVBQUUsZ0JBREs7QUFFWEMsZUFBTyxFQUFFO0FBQ1BDLGNBQUksRUFBRUgsUUFBUSxDQUFDRztBQURSO0FBRkUsT0FBRCxDQUFaO0FBTUExQixZQUFNLENBQUMyQixJQUFQLENBQVksR0FBWjtBQUNELEtBVEgsV0FVUyxVQUFBQyxLQUFLO0FBQUEsYUFBSSxLQUFJLENBQUNyQixvQkFBTCxDQUEwQixJQUExQixDQUFKO0FBQUEsS0FWZDtBQVdELEdBWkQ7O0FBY0Esc0JBQ0UscUVBQUMsNENBQUQsQ0FBTyxRQUFQO0FBQUEsNEJBQ0UscUVBQUMsc0RBQUQ7QUFBQSw4QkFDRSxxRUFBQyw0Q0FBRCxDQUFPLFFBQVA7QUFBQSwrQkFDRSxxRUFBQyw4REFBRDtBQUFZLGlCQUFPLEVBQUMsSUFBcEI7QUFBeUIsc0JBQVksTUFBckM7QUFBc0MsZ0JBQU0sRUFBQyxRQUE3QztBQUFzRCxlQUFLLEVBQUMsUUFBNUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFNRSxxRUFBQyxxREFBRDtBQUFNLGdCQUFRLEVBQUVVLFFBQWhCO0FBQTBCLG9CQUFZLEVBQUU7QUFBRVksb0JBQVUsRUFBRTtBQUFkLFNBQXhDO0FBQThELGdCQUFRLEVBQUVsQixRQUF4RTtBQUFBLGtCQUNHO0FBQUEsY0FBR21CLFlBQUgsU0FBR0EsWUFBSDtBQUFBLGNBQWlCRCxVQUFqQixTQUFpQkEsVUFBakI7QUFBQSw4QkFDQztBQUFNLG9CQUFRLEVBQUVDLFlBQWhCO0FBQThCLHFCQUFTLEVBQUVoQyxPQUFPLENBQUNpQyxJQUFqRDtBQUF1RCxzQkFBVSxNQUFqRTtBQUFBLG9DQUNFLHFFQUFDLHNEQUFEO0FBQ0UsMEJBQVksRUFBQyxPQURmO0FBRUUsdUJBQVMsTUFGWDtBQUdFLHVCQUFTLEVBQUVDLHFFQUhiO0FBSUUsc0JBQVEsRUFBRUgsVUFBVSxJQUFJekIsSUFKMUI7QUFLRSx1QkFBUyxNQUxYO0FBTUUsbUJBQUssRUFBQyxRQU5SO0FBT0Usb0JBQU0sRUFBQyxRQVBUO0FBUUUsa0JBQUksRUFBQyxPQVJQO0FBU0Usc0JBQVEsTUFUVjtBQVVFLGtCQUFJLEVBQUM7QUFWUDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBYUUscUVBQUMsc0RBQUQ7QUFDRSx1QkFBUyxNQURYO0FBRUUsa0JBQUksRUFBQyxPQUZQO0FBR0UsdUJBQVMsRUFBRTRCLHFFQUhiO0FBSUUsc0JBQVEsRUFBRUgsVUFBVSxJQUFJekIsSUFKMUI7QUFLRSxzQkFBUSxNQUxWO0FBTUUsa0JBQUksRUFBQyxVQU5QO0FBT0UsMEJBQVksRUFBQyxrQkFQZjtBQVFFLG1CQUFLLEVBQUMsZUFSUjtBQVNFLGtCQUFJLEVBQUMsVUFUUDtBQVVFLG9CQUFNLEVBQUM7QUFWVDtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGLGVBeUJFLHFFQUFDLG9FQUFEO0FBQ0UsdUJBQVMsRUFBRU4sT0FBTyxDQUFDbUMsTUFEckI7QUFFRSxzQkFBUSxFQUFFSixVQUFVLElBQUl6QixJQUYxQjtBQUdFLGtCQUFJLEVBQUMsT0FIUDtBQUlFLG1CQUFLLEVBQUMsV0FKUjtBQUtFLHVCQUFTLE1BTFg7QUFBQSx3QkFPR3lCLFVBQVUsSUFBSXpCLElBQWQsR0FBcUIsYUFBckIsR0FBcUM7QUFQeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkF6QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUREO0FBQUE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBTkYsZUE2Q0UscUVBQUMsOERBQUQ7QUFBWSxhQUFLLEVBQUMsUUFBbEI7QUFBQSwrQkFDRSxxRUFBQyw4REFBRDtBQUFNLG1CQUFTLEVBQUMsUUFBaEI7QUFBeUIsY0FBSSxFQUFDLEdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQTdDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFERixlQW9ERSxxRUFBQyxtRUFBRDtBQUNFLGtCQUFZLEVBQUU7QUFDWjhCLGdCQUFRLEVBQUUsS0FERTtBQUVaQyxrQkFBVSxFQUFFO0FBRkEsT0FEaEI7QUFLRSxVQUFJLEVBQUU3QixpQkFMUjtBQU1FLHNCQUFnQixFQUFFLElBTnBCO0FBT0UsYUFBTyxFQUFDO0FBUFY7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQXBERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQWdFRDs7R0FsR1FULE07VUFDU0UsUyxFQUNERSxzRCxFQUdtQk8sK0Q7OztLQUwzQlgsTTtBQW9HVCxJQUFNRSxTQUFTLEdBQUdxQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDTixRQUFJLEVBQUU7QUFDSk8sZUFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRFAsS0FEaUM7QUFJdkNOLFVBQU0sRUFBRTtBQUNOSyxlQUFTLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FETDtBQUVOQyxrQkFBWSxFQUFFSCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRlI7QUFKK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFVZSxxRUFBQUUseURBQVEsQ0FBQzVDLE1BQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uZGRjYmFmY2QwMTNiOWY1YzRkZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoUm9vdCBmcm9tICcuL3dpdGhSb290J1xyXG4vLyAtLS0gUG9zdCBib290c3RyYXAgLS0tLS1cclxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZpZWxkLCBGb3JtIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBBcHBGb3JtIGZyb20gJy4vdmlld3MvQXBwRm9ybSdcclxuaW1wb3J0IHsgZW1haWwsIHJlcXVpcmVkIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vdmFsaWRhdGlvbidcclxuaW1wb3J0IFJGVGV4dEZpZWxkIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL1JGVGV4dEZpZWxkJ1xyXG5pbXBvcnQgRm9ybUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS9Gb3JtQnV0dG9uJ1xyXG5pbXBvcnQgU25hY2tiYXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU25hY2tiYXInXHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vZmlyZWJhc2UvY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL3NlcnZpY2VzL0F1dGguY29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtzZW50LCBzZXRTZW50XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtvcGVuRXJyb3JTbmFja2Jhciwgc2V0T3BlbkVycm9yU25hY2tiYXJdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW2F1dGhTdGF0ZSwgYXV0aERpc3BhdGNoXSA9IHVzZUF1dGgoKVxyXG5cclxuICBjb25zdCB2YWxpZGF0ZSA9ICh2YWx1ZXMpID0+IHtcclxuICAgIGNvbnN0IGVycm9ycyA9IHJlcXVpcmVkKFsnZW1haWwnLCAncGFzc3dvcmQnXSwgdmFsdWVzKVxyXG5cclxuICAgIGlmICghZXJyb3JzLmVtYWlsKSB7XHJcbiAgICAgIGNvbnN0IGVtYWlsRXJyb3IgPSBlbWFpbCh2YWx1ZXMuZW1haWwsIHZhbHVlcylcclxuICAgICAgaWYgKGVtYWlsRXJyb3IpIHtcclxuICAgICAgICBlcnJvcnMuZW1haWwgPSBlbWFpbCh2YWx1ZXMuZW1haWwsIHZhbHVlcylcclxuICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBlcnJvcnNcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uU3VibWl0ID0gKHsgZW1haWwsIHBhc3N3b3JkfSkgPT4ge1xyXG4gICAgZmlyZWJhc2UuYXV0aCgpLnNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkKGVtYWlsLCBwYXNzd29yZClcclxuICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIGF1dGhEaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiAnc2V0QXV0aERldGFpbHMnLFxyXG4gICAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgICB1c2VyOiByZXNwb25zZS51c2VyLFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJvdXRlci5wdXNoKCcvJylcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHRoaXMuc2V0T3BlbkVycm9yU25hY2tiYXIodHJ1ZSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8QXBwRm9ybT5cclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBndXR0ZXJCb3R0b20gbWFya2VkPVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgSW5ncmVzYXJcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gc3Vic2NyaXB0aW9uPXt7IHN1Ym1pdHRpbmc6IHRydWUgfX0gdmFsaWRhdGU9e3ZhbGlkYXRlfT5cclxuICAgICAgICAgIHsoeyBoYW5kbGVTdWJtaXQsIHN1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtSRlRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IHNlbnR9XHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UkZUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBzZW50fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IHNlbnR9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3N1Ym1pdHRpbmcgfHwgc2VudCA/ICdQcm9jZXNhbmRv4oCmJyA6ICdFbnRyYXInfVxyXG4gICAgICAgICAgICAgIDwvRm9ybUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIHVuZGVybGluZT1cImFsd2F5c1wiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIFZvbHZlciBhbCBpbmljaW9cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQXBwRm9ybT5cclxuICAgICAgPFNuYWNrYmFyXHJcbiAgICAgICAgYW5jaG9yT3JpZ2luPXt7XHJcbiAgICAgICAgICB2ZXJ0aWNhbDogJ3RvcCcsXHJcbiAgICAgICAgICBob3Jpem9udGFsOiAncmlnaHQnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb3Blbj17b3BlbkVycm9yU25hY2tiYXJ9XHJcbiAgICAgICAgYXV0b0hpZGVEdXJhdGlvbj17NTAwMH1cclxuICAgICAgICBtZXNzYWdlPVwiRWwgZW1haWwgeS9vIGxhIGNvbnRyYXNlw7FhIHNvbiBpbmNvcnJlY3Rvc1wiXHJcbiAgICAgIC8+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZm9ybToge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxufSkpXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoUm9vdChTaWduSW4pIl0sInNvdXJjZVJvb3QiOiIifQ==