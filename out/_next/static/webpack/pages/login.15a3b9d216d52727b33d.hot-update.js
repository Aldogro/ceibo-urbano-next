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
        vertical: 'bottom',
        horizontal: 'left'
      },
      open: true,
      autoHideDuration: 6000,
      message: "Note archived",
      action: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(Button, {
          color: "secondary",
          size: "small",
          onClick: handleClose,
          children: "UNDO"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 113,
          columnNumber: 13
        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(IconButton, {
          size: "small",
          "aria-label": "close",
          color: "inherit",
          onClick: handleClose,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(CloseIcon, {
            fontSize: "small"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 15
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 13
        }, this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 112,
        columnNumber: 11
      }, this)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TaWduSW4uanMiXSwibmFtZXMiOlsiU2lnbkluIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZW50Iiwic2V0U2VudCIsInVzZUF1dGgiLCJhdXRoU3RhdGUiLCJhdXRoRGlzcGF0Y2giLCJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsInJlcXVpcmVkIiwiZW1haWwiLCJlbWFpbEVycm9yIiwib25TdWJtaXQiLCJwYXNzd29yZCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwidHlwZSIsInBheWxvYWQiLCJ1c2VyIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdHRpbmciLCJoYW5kbGVTdWJtaXQiLCJmb3JtIiwiUkZUZXh0RmllbGQiLCJidXR0b24iLCJ2ZXJ0aWNhbCIsImhvcml6b250YWwiLCJoYW5kbGVDbG9zZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJ3aXRoUm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNoQixNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUZnQix3QkFHUUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FIUjtBQUFBO0FBQUEsTUFHVEMsSUFIUztBQUFBLE1BR0hDLE9BSEc7O0FBQUEsaUJBSWtCQyx1RUFBTyxFQUp6QjtBQUFB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QUFqQjtBQUF5Qix3QkFBVyxPQUFwQztBQUE0QyxlQUFLLEVBQUMsU0FBbEQ7QUFBNEQsaUJBQU8sRUFBRUEsV0FBckU7QUFBQSxpQ0FDRSxxRUFBQyxTQUFEO0FBQVcsb0JBQVEsRUFBQztBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxnQkFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBcERGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBMEVEOztHQTNHUXZDLE07VUFDU0UsUyxFQUNERSxzRCxFQUVtQkssK0Q7OztLQUozQlQsTTtBQTZHVCxJQUFNRSxTQUFTLEdBQUdzQywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDUCxRQUFJLEVBQUU7QUFDSlEsZUFBUyxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRFAsS0FEaUM7QUFJdkNQLFVBQU0sRUFBRTtBQUNOTSxlQUFTLEVBQUVELEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FETDtBQUVOQyxrQkFBWSxFQUFFSCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkO0FBRlI7QUFKK0IsR0FBWjtBQUFBLENBQUQsQ0FBNUI7QUFVZSxxRUFBQUUseURBQVEsQ0FBQzdDLE1BQUQsQ0FBdkIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uMTVhM2I5ZDIxNmQ1MjcyN2IzM2QuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB3aXRoUm9vdCBmcm9tICcuL3dpdGhSb290J1xyXG4vLyAtLS0gUG9zdCBib290c3RyYXAgLS0tLS1cclxuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBGaWVsZCwgRm9ybSB9IGZyb20gJ3JlYWN0LWZpbmFsLWZvcm0nXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBMaW5rIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0xpbmsnXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgQXBwRm9ybSBmcm9tICcuL3ZpZXdzL0FwcEZvcm0nXHJcbmltcG9ydCB7IGVtYWlsLCByZXF1aXJlZCB9IGZyb20gJy4vY29tcG9uZW50cy9mb3JtL3ZhbGlkYXRpb24nXHJcbmltcG9ydCBSRlRleHRGaWVsZCBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS9SRlRleHRGaWVsZCdcclxuaW1wb3J0IEZvcm1CdXR0b24gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vRm9ybUJ1dHRvbidcclxuaW1wb3J0IFNuYWNrYmFyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NuYWNrYmFyJ1xyXG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gJy4uL2ZpcmViYXNlL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9zZXJ2aWNlcy9BdXRoLmNvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbc2VudCwgc2V0U2VudF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYXV0aFN0YXRlLCBhdXRoRGlzcGF0Y2hdID0gdXNlQXV0aCgpXHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JzID0gcmVxdWlyZWQoWydlbWFpbCcsICdwYXNzd29yZCddLCB2YWx1ZXMpXHJcblxyXG4gICAgaWYgKCFlcnJvcnMuZW1haWwpIHtcclxuICAgICAgY29uc3QgZW1haWxFcnJvciA9IGVtYWlsKHZhbHVlcy5lbWFpbCwgdmFsdWVzKVxyXG4gICAgICBpZiAoZW1haWxFcnJvcikge1xyXG4gICAgICAgIGVycm9ycy5lbWFpbCA9IGVtYWlsKHZhbHVlcy5lbWFpbCwgdmFsdWVzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVycm9yc1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoeyBlbWFpbCwgcGFzc3dvcmR9KSA9PiB7XHJcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKVxyXG4gICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgYXV0aERpc3BhdGNoKHtcclxuICAgICAgICAgIHR5cGU6ICdzZXRBdXRoRGV0YWlscycsXHJcbiAgICAgICAgICBwYXlsb2FkOiB7XHJcbiAgICAgICAgICAgIHVzZXI6IHJlc3BvbnNlLnVzZXIsXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goZXJyb3IgPT4gY29uc29sZS5sb2coZXJyb3IpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEZvcm0+XHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIEluZ3Jlc2FyXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN1YnNjcmlwdGlvbj17eyBzdWJtaXR0aW5nOiB0cnVlIH19IHZhbGlkYXRlPXt2YWxpZGF0ZX0+XHJcbiAgICAgICAgICB7KHsgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UkZUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBzZW50fVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JGVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgc2VudH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm1CdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBzZW50fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzdWJtaXR0aW5nIHx8IHNlbnQgPyAnUHJvY2VzYW5kb+KApicgOiAnRW50cmFyJ31cclxuICAgICAgICAgICAgICA8L0Zvcm1CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8TGluayB1bmRlcmxpbmU9XCJhbHdheXNcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICBWb2x2ZXIgYWwgaW5pY2lvXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0FwcEZvcm0+XHJcbiAgICAgIDxTbmFja2JhclxyXG4gICAgICAgIGFuY2hvck9yaWdpbj17e1xyXG4gICAgICAgICAgdmVydGljYWw6ICdib3R0b20nLFxyXG4gICAgICAgICAgaG9yaXpvbnRhbDogJ2xlZnQnLFxyXG4gICAgICAgIH19XHJcbiAgICAgICAgb3Blbj17dHJ1ZX1cclxuICAgICAgICBhdXRvSGlkZUR1cmF0aW9uPXs2MDAwfVxyXG4gICAgICAgIG1lc3NhZ2U9XCJOb3RlIGFyY2hpdmVkXCJcclxuICAgICAgICBhY3Rpb249e1xyXG4gICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCIgc2l6ZT1cInNtYWxsXCIgb25DbGljaz17aGFuZGxlQ2xvc2V9PlxyXG4gICAgICAgICAgICAgIFVORE9cclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxJY29uQnV0dG9uIHNpemU9XCJzbWFsbFwiIGFyaWEtbGFiZWw9XCJjbG9zZVwiIGNvbG9yPVwiaW5oZXJpdFwiIG9uQ2xpY2s9e2hhbmRsZUNsb3NlfT5cclxuICAgICAgICAgICAgICA8Q2xvc2VJY29uIGZvbnRTaXplPVwic21hbGxcIiAvPlxyXG4gICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIH1cclxuICAgICAgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb3JtOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb290KFNpZ25JbikiXSwic291cmNlUm9vdCI6IiJ9