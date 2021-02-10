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
/* harmony import */ var _firebase_client__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../firebase/client */ "./firebase/client.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _services_Auth_context__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../services/Auth.context */ "./services/Auth.context.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\SignIn.js",
    _s = $RefreshSig$();

 // --- Post bootstrap -----














function SignIn() {
  _s();

  var _this = this;

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_3___default.a.useState(false),
      _React$useState2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      sent = _React$useState2[0],
      setSent = _React$useState2[1];

  var _useAuth = Object(_services_Auth_context__WEBPACK_IMPORTED_MODULE_14__["useAuth"])(),
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
    _firebase_client__WEBPACK_IMPORTED_MODULE_12__["firebase"].auth().signInWithEmailAndPassword(email, password).then(function (response) {
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
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_views_AppForm__WEBPACK_IMPORTED_MODULE_8__["default"], {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
          variant: "h3",
          gutterBottom: true,
          marked: "center",
          align: "center",
          children: "Ingresar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 52,
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
              lineNumber: 60,
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
              lineNumber: 72,
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
              lineNumber: 84,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 59,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          underline: "always",
          href: "/",
          children: "Volver al inicio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 97,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 96,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 50,
    columnNumber: 5
  }, this);
}

_s(SignIn, "PRlsTQ9OrAwwfh5V33TIojdxbS0=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"], _services_Auth_context__WEBPACK_IMPORTED_MODULE_14__["useAuth"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TaWduSW4uanMiXSwibmFtZXMiOlsiU2lnbkluIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZW50Iiwic2V0U2VudCIsInVzZUF1dGgiLCJhdXRoU3RhdGUiLCJhdXRoRGlzcGF0Y2giLCJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsInJlcXVpcmVkIiwiZW1haWwiLCJlbWFpbEVycm9yIiwib25TdWJtaXQiLCJwYXNzd29yZCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwidHlwZSIsInBheWxvYWQiLCJ1c2VyIiwicHVzaCIsImVycm9yIiwiY29uc29sZSIsImxvZyIsInN1Ym1pdHRpbmciLCJoYW5kbGVTdWJtaXQiLCJmb3JtIiwiUkZUZXh0RmllbGQiLCJidXR0b24iLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwid2l0aFJvb3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0NBQ0E7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLFNBQVNBLE1BQVQsR0FBa0I7QUFBQTs7QUFBQTs7QUFDaEIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw4REFBUyxFQUF4Qjs7QUFGZ0Isd0JBR1FDLDRDQUFLLENBQUNDLFFBQU4sQ0FBZSxLQUFmLENBSFI7QUFBQTtBQUFBLE1BR1RDLElBSFM7QUFBQSxNQUdIQyxPQUhHOztBQUFBLGlCQUlrQkMsdUVBQU8sRUFKekI7QUFBQTtBQUFBLE1BSVRDLFNBSlM7QUFBQSxNQUlFQyxZQUpGOztBQU1oQixNQUFN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ZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLmZkYWIzZmQyMjVhYTUzNWQ5NjFiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJvb3QgZnJvbSAnLi93aXRoUm9vdCdcclxuLy8gLS0tIFBvc3QgYm9vdHN0cmFwIC0tLS0tXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmllbGQsIEZvcm0gfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IEFwcEZvcm0gZnJvbSAnLi92aWV3cy9BcHBGb3JtJ1xyXG5pbXBvcnQgeyBlbWFpbCwgcmVxdWlyZWQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS92YWxpZGF0aW9uJ1xyXG5pbXBvcnQgUkZUZXh0RmllbGQgZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vUkZUZXh0RmllbGQnXHJcbmltcG9ydCBGb3JtQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL0Zvcm1CdXR0b24nXHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vZmlyZWJhc2UvY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL3NlcnZpY2VzL0F1dGguY29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtzZW50LCBzZXRTZW50XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFthdXRoU3RhdGUsIGF1dGhEaXNwYXRjaF0gPSB1c2VBdXRoKClcclxuXHJcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSByZXF1aXJlZChbJ2VtYWlsJywgJ3Bhc3N3b3JkJ10sIHZhbHVlcylcclxuXHJcbiAgICBpZiAoIWVycm9ycy5lbWFpbCkge1xyXG4gICAgICBjb25zdCBlbWFpbEVycm9yID0gZW1haWwodmFsdWVzLmVtYWlsLCB2YWx1ZXMpXHJcbiAgICAgIGlmIChlbWFpbEVycm9yKSB7XHJcbiAgICAgICAgZXJyb3JzLmVtYWlsID0gZW1haWwodmFsdWVzLmVtYWlsLCB2YWx1ZXMpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXJyb3JzXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9ICh7IGVtYWlsLCBwYXNzd29yZH0pID0+IHtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXHJcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICBhdXRoRGlzcGF0Y2goe1xyXG4gICAgICAgICAgdHlwZTogJ3NldEF1dGhEZXRhaWxzJyxcclxuICAgICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgICAgdXNlcjogcmVzcG9uc2UudXNlcixcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgfSlcclxuICAgICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiBjb25zb2xlLmxvZyhlcnJvcikpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8QXBwRm9ybT5cclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDNcIiBndXR0ZXJCb3R0b20gbWFya2VkPVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgICAgSW5ncmVzYXJcclxuICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxGb3JtIG9uU3VibWl0PXtvblN1Ym1pdH0gc3Vic2NyaXB0aW9uPXt7IHN1Ym1pdHRpbmc6IHRydWUgfX0gdmFsaWRhdGU9e3ZhbGlkYXRlfT5cclxuICAgICAgICAgIHsoeyBoYW5kbGVTdWJtaXQsIHN1Ym1pdHRpbmcgfSkgPT4gKFxyXG4gICAgICAgICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e2NsYXNzZXMuZm9ybX0gbm9WYWxpZGF0ZT5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Gb2N1c1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtSRlRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IHNlbnR9XHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8RmllbGRcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UkZUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBzZW50fVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJjdXJyZW50LXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29udHJhc2XDsWFcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIG1hcmdpbj1cIm5vcm1hbFwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8Rm9ybUJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IHNlbnR9XHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3N1Ym1pdHRpbmcgfHwgc2VudCA/ICdQcm9jZXNhbmRv4oCmJyA6ICdFbnRyYXInfVxyXG4gICAgICAgICAgICAgIDwvRm9ybUJ1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgKX1cclxuICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgPFR5cG9ncmFwaHkgYWxpZ249XCJjZW50ZXJcIj5cclxuICAgICAgICAgIDxMaW5rIHVuZGVybGluZT1cImFsd2F5c1wiIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgIFZvbHZlciBhbCBpbmljaW9cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDwvQXBwRm9ybT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBmb3JtOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoNiksXHJcbiAgfSxcclxuICBidXR0b246IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygzKSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb290KFNpZ25JbikiXSwic291cmNlUm9vdCI6IiJ9