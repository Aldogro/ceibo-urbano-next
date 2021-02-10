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
          lineNumber: 51,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
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
              lineNumber: 58,
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
              lineNumber: 70,
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
              lineNumber: 82,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 57,
            columnNumber: 13
          }, _this);
        }
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 55,
        columnNumber: 9
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_7__["default"], {
        align: "center",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Link__WEBPACK_IMPORTED_MODULE_6__["default"], {
          underline: "always",
          href: "/",
          children: "Volver al inicio"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 95,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 94,
        columnNumber: 9
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 48,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9TaWduSW4uanMiXSwibmFtZXMiOlsiU2lnbkluIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsIlJlYWN0IiwidXNlU3RhdGUiLCJzZW50Iiwic2V0U2VudCIsInVzZUF1dGgiLCJhdXRoU3RhdGUiLCJhdXRoRGlzcGF0Y2giLCJ2YWxpZGF0ZSIsInZhbHVlcyIsImVycm9ycyIsInJlcXVpcmVkIiwiZW1haWwiLCJlbWFpbEVycm9yIiwib25TdWJtaXQiLCJwYXNzd29yZCIsImZpcmViYXNlIiwiYXV0aCIsInNpZ25JbldpdGhFbWFpbEFuZFBhc3N3b3JkIiwidGhlbiIsInJlc3BvbnNlIiwidHlwZSIsInBheWxvYWQiLCJ1c2VyIiwicHVzaCIsInN1Ym1pdHRpbmciLCJoYW5kbGVTdWJtaXQiLCJmb3JtIiwiUkZUZXh0RmllbGQiLCJidXR0b24iLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZmVlZGJhY2siLCJ3aXRoUm9vdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Q0FDQTs7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsU0FBU0EsTUFBVCxHQUFrQjtBQUFBOztBQUFBOztBQUNoQixNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFDQSxNQUFNQyxNQUFNLEdBQUdDLDhEQUFTLEVBQXhCOztBQUZnQix3QkFHUUMsNENBQUssQ0FBQ0MsUUFBTixDQUFlLEtBQWYsQ0FIUjtBQUFBO0FBQUEsTUFHVEMsSUFIUztBQUFBLE1BR0hDLE9BSEc7O0FBQUEsaUJBSWtCQyx1RUFBTyxFQUp6QjtBQUFBO0FBQUEsTUFJVEMsU0FKUztBQUFBLE1BSUVDLFlBSkY7O0FBTWhCLE1BQU1DLFFBQVEsR0FBRyxT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dGF0aWMvd2VicGFjay9wYWdlcy9sb2dpbi44ZDJiMmRiNjgwYzJiNGJmYjcxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHdpdGhSb290IGZyb20gJy4vd2l0aFJvb3QnXHJcbi8vIC0tLSBQb3N0IGJvb3RzdHJhcCAtLS0tLVxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IEZpZWxkLCBGb3JtIH0gZnJvbSAncmVhY3QtZmluYWwtZm9ybSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IExpbmsgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTGluaydcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCBBcHBGb3JtIGZyb20gJy4vdmlld3MvQXBwRm9ybSdcclxuaW1wb3J0IHsgZW1haWwsIHJlcXVpcmVkIH0gZnJvbSAnLi9jb21wb25lbnRzL2Zvcm0vdmFsaWRhdGlvbidcclxuaW1wb3J0IFJGVGV4dEZpZWxkIGZyb20gJy4vY29tcG9uZW50cy9mb3JtL1JGVGV4dEZpZWxkJ1xyXG5pbXBvcnQgRm9ybUJ1dHRvbiBmcm9tICcuL2NvbXBvbmVudHMvZm9ybS9Gb3JtQnV0dG9uJ1xyXG5pbXBvcnQgeyBmaXJlYmFzZSB9IGZyb20gJy4uL2ZpcmViYXNlL2NsaWVudCdcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi9zZXJ2aWNlcy9BdXRoLmNvbnRleHQnXHJcblxyXG5mdW5jdGlvbiBTaWduSW4oKSB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCBbc2VudCwgc2V0U2VudF0gPSBSZWFjdC51c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbYXV0aFN0YXRlLCBhdXRoRGlzcGF0Y2hdID0gdXNlQXV0aCgpXHJcblxyXG4gIGNvbnN0IHZhbGlkYXRlID0gKHZhbHVlcykgPT4ge1xyXG4gICAgY29uc3QgZXJyb3JzID0gcmVxdWlyZWQoWydlbWFpbCcsICdwYXNzd29yZCddLCB2YWx1ZXMpXHJcblxyXG4gICAgaWYgKCFlcnJvcnMuZW1haWwpIHtcclxuICAgICAgY29uc3QgZW1haWxFcnJvciA9IGVtYWlsKHZhbHVlcy5lbWFpbCwgdmFsdWVzKVxyXG4gICAgICBpZiAoZW1haWxFcnJvcikge1xyXG4gICAgICAgIGVycm9ycy5lbWFpbCA9IGVtYWlsKHZhbHVlcy5lbWFpbCwgdmFsdWVzKVxyXG4gICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGVycm9yc1xyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25TdWJtaXQgPSAoeyBlbWFpbCwgcGFzc3dvcmR9KSA9PiB7XHJcbiAgICBmaXJlYmFzZS5hdXRoKCkuc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQoZW1haWwsIHBhc3N3b3JkKS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgYXV0aERpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiAnc2V0QXV0aERldGFpbHMnLFxyXG4gICAgICAgIHBheWxvYWQ6IHtcclxuICAgICAgICAgIHVzZXI6IHJlc3BvbnNlLnVzZXIsXHJcbiAgICAgICAgfSxcclxuICAgICAgfSlcclxuICAgICAgcm91dGVyLnB1c2goJy8nKVxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBGb3JtPlxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoM1wiIGd1dHRlckJvdHRvbSBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgICBJbmdyZXNhclxyXG4gICAgICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPEZvcm0gb25TdWJtaXQ9e29uU3VibWl0fSBzdWJzY3JpcHRpb249e3sgc3VibWl0dGluZzogdHJ1ZSB9fSB2YWxpZGF0ZT17dmFsaWRhdGV9PlxyXG4gICAgICAgICAgeyh7IGhhbmRsZVN1Ym1pdCwgc3VibWl0dGluZyB9KSA9PiAoXHJcbiAgICAgICAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVTdWJtaXR9IGNsYXNzTmFtZT17Y2xhc3Nlcy5mb3JtfSBub1ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgYXV0b0NvbXBsZXRlPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgYXV0b0ZvY3VzXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9e1JGVGV4dEZpZWxkfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgc2VudH1cclxuICAgICAgICAgICAgICAgIGZ1bGxXaWR0aFxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJFLW1haWxcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgc2l6ZT1cImxhcmdlXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGaWVsZFxyXG4gICAgICAgICAgICAgICAgZnVsbFdpZHRoXHJcbiAgICAgICAgICAgICAgICBzaXplPVwibGFyZ2VcIlxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PXtSRlRleHRGaWVsZH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzdWJtaXR0aW5nIHx8IHNlbnR9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgIGF1dG9Db21wbGV0ZT1cImN1cnJlbnQtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb250cmFzZcOxYVwiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgbWFyZ2luPVwibm9ybWFsXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxGb3JtQnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3N1Ym1pdHRpbmcgfHwgc2VudH1cclxuICAgICAgICAgICAgICAgIHNpemU9XCJsYXJnZVwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgICBmdWxsV2lkdGhcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7c3VibWl0dGluZyB8fCBzZW50ID8gJ1Byb2Nlc2FuZG/igKYnIDogJ0VudHJhcid9XHJcbiAgICAgICAgICAgICAgPC9Gb3JtQnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgICApfVxyXG4gICAgICAgIDwvRm9ybT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBhbGlnbj1cImNlbnRlclwiPlxyXG4gICAgICAgICAgPExpbmsgdW5kZXJsaW5lPVwiYWx3YXlzXCIgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgVm9sdmVyIGFsIGluaWNpb1xyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPC9BcHBGb3JtPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGZvcm06IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg2KSxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gIH0sXHJcbiAgZmVlZGJhY2s6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICB9LFxyXG59KSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhSb290KFNpZ25JbikiXSwic291cmNlUm9vdCI6IiJ9