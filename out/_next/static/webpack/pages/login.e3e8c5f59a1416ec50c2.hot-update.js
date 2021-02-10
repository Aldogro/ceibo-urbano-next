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
      /* authDispatch({
        type: 'setAuthDetails',
        payload: {
          user: res.body.user,
        },
      }) */
      console.log(response.user.email);
      router.push('/');
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
          lineNumber: 52,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
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
              lineNumber: 59,
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
              lineNumber: 71,
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
              lineNumber: 83,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 58,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 56,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          underline: "always",
          href: "/",
          children: "Volver al inicio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 96,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 95,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 49,
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
    },
    feedback: {
      marginTop: theme.spacing(2)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TaWduSW4uanMiXSwibmFtZXMiOlsiU2lnbkluIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZW50Iiwic2V0U2VudCIsInVzZUF1dGgiLCJhdXRoU3RhdGUiLCJhdXRoRGlzcGF0Y2giLCJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsInJlcXVpcmVkIiwiZW1haWwiLCJlbWFpbEVycm9yIiwib25TdWJtaXQiLCJwYXNzd29yZCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwiY29uc29sZSIsImxvZyIsInVzZXIiLCJwdXNoIiwic3VibWl0dGluZyIsImhhbmRsZVN1Ym1pdCIsImZvcm0iLCJSRlRleHRGaWVsZCIsImJ1dHRvbiIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpblRvcCIsInNwYWNpbmciLCJtYXJnaW5Cb3R0b20iLCJmZWVkYmFjayIsIndpdGhSb290Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztDQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxTQUFTQSxNQUFULEdBQWtCO0FBQUE7O0FBQUE7O0FBQ2hCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUNBLE1BQU1DLE1BQU0sR0FBR0MsOERBQVMsRUFBeEI7O0FBRmdCLHdCQUdRQyw0Q0FBSyxDQUFDQyxRQUFOLENBQWUsS0FBZixDQUhSO0FBQUE7QUFBQSxNQUdUQyxJQUhTO0FBQUEsTUFHSEMsT0FIRzs7QUFBQSxpQkFJa0JDLHVFQUFPLEVBSnpCO0FBQUE7QUFBQSxNQUlUQyxTQUpTO0FBQUEsTUFJRUMsWUFKRjs7QUFNaEIsTUFBTUMsUUFBUSxHQUFHLFNB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L2xvZ2luLmUzZThjNWY1OWExNDE2ZWM1MGMyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgd2l0aFJvb3QgZnJvbSAnLi93aXRoUm9vdCdcclxuLy8gLS0tIFBvc3QgYm9vdHN0cmFwIC0tLS0tXHJcbmltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgRmllbGQsIEZvcm0gfSBmcm9tICdyZWFjdC1maW5hbC1mb3JtJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgTGluayBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9MaW5rJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IEFwcEZvcm0gZnJvbSAnLi92aWV3cy9BcHBGb3JtJ1xyXG5pbXBvcnQgeyBlbWFpbCwgcmVxdWlyZWQgfSBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS92YWxpZGF0aW9uJ1xyXG5pbXBvcnQgUkZUZXh0RmllbGQgZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vUkZUZXh0RmllbGQnXHJcbmltcG9ydCBGb3JtQnV0dG9uIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL0Zvcm1CdXR0b24nXHJcbmltcG9ydCB7IGZpcmViYXNlIH0gZnJvbSAnLi4vZmlyZWJhc2UvY2xpZW50J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uL3NlcnZpY2VzL0F1dGguY29udGV4dCdcclxuXHJcbmZ1bmN0aW9uIFNpZ25JbigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG4gIGNvbnN0IFtzZW50LCBzZXRTZW50XSA9IFJlYWN0LnVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFthdXRoU3RhdGUsIGF1dGhEaXNwYXRjaF0gPSB1c2VBdXRoKClcclxuXHJcbiAgY29uc3QgdmFsaWRhdGUgPSAodmFsdWVzKSA9PiB7XHJcbiAgICBjb25zdCBlcnJvcnMgPSByZXF1aXJlZChbJ2VtYWlsJywgJ3Bhc3N3b3JkJ10sIHZhbHVlcylcclxuXHJcbiAgICBpZiAoIWVycm9ycy5lbWFpbCkge1xyXG4gICAgICBjb25zdCBlbWFpbEVycm9yID0gZW1haWwodmFsdWVzLmVtYWlsLCB2YWx1ZXMpXHJcbiAgICAgIGlmIChlbWFpbEVycm9yKSB7XHJcbiAgICAgICAgZXJyb3JzLmVtYWlsID0gZW1haWwodmFsdWVzLmVtYWlsLCB2YWx1ZXMpXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gZXJyb3JzXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblN1Ym1pdCA9ICh7IGVtYWlsLCBwYXNzd29yZH0pID0+IHtcclxuICAgIGZpcmViYXNlLmF1dGgoKS5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAvKiBhdXRoRGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6ICdzZXRBdXRoRGV0YWlscycsXHJcbiAgICAgICAgcGF5bG9hZDoge1xyXG4gICAgICAgICAgdXNlcjogcmVzLmJvZHkudXNlcixcclxuICAgICAgICB9LFxyXG4gICAgICB9KSAqL1xyXG4gICAgICBjb25zb2xlLmxvZyhyZXNwb25zZS51c2VyLmVtYWlsKVxyXG4gICAgICByb3V0ZXIucHVzaCgnLycpXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEZvcm0+XHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImgzXCIgZ3V0dGVyQm90dG9tIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICAgIEluZ3Jlc2FyXHJcbiAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Rm9ybSBvblN1Ym1pdD17b25TdWJtaXR9IHN1YnNjcmlwdGlvbj17eyBzdWJtaXR0aW5nOiB0cnVlIH19IHZhbGlkYXRlPXt2YWxpZGF0ZX0+XHJcbiAgICAgICAgICB7KHsgaGFuZGxlU3VibWl0LCBzdWJtaXR0aW5nIH0pID0+IChcclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZVN1Ym1pdH0gY2xhc3NOYW1lPXtjbGFzc2VzLmZvcm19IG5vVmFsaWRhdGU+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBhdXRvQ29tcGxldGU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBhdXRvRm9jdXNcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD17UkZUZXh0RmllbGR9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBzZW50fVxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkUtbWFpbFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgICAgbmFtZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZpZWxkXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JGVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgc2VudH1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiY3VycmVudC1wYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbnRyYXNlw7FhXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICBtYXJnaW49XCJub3JtYWxcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPEZvcm1CdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5idXR0b259XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c3VibWl0dGluZyB8fCBzZW50fVxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtzdWJtaXR0aW5nIHx8IHNlbnQgPyAnUHJvY2VzYW5kb+KApicgOiAnRW50cmFyJ31cclxuICAgICAgICAgICAgICA8L0Zvcm1CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgIDxUeXBvZ3JhcGh5IGFsaWduPVwiY2VudGVyXCI+XHJcbiAgICAgICAgICA8TGluayB1bmRlcmxpbmU9XCJhbHdheXNcIiBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICBWb2x2ZXIgYWwgaW5pY2lvXHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8L0FwcEZvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgZm9ybToge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDYpLFxyXG4gIH0sXHJcbiAgYnV0dG9uOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICBmZWVkYmFjazoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbn0pKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFJvb3QoU2lnbkluKSJdLCJzb3VyY2VSb290IjoiIn0=