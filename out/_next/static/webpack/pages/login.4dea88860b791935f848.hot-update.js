webpackHotUpdate_N_E("pages/login",{

/***/ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/react-firebase-hooks/auth/dist/index.esm.js ***!
  \******************************************************************/
/*! exports provided: useAuthState, useSignInWithEmailAndPassword, useCreateUserWithEmailAndPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuthState", function() { return useAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSignInWithEmailAndPassword", function() { return useSignInWithEmailAndPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useCreateUserWithEmailAndPassword", function() { return useCreateUserWithEmailAndPassword; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

var defaultState = function (defaultValue) {
    return {
        loading: defaultValue === undefined || defaultValue === null,
        value: defaultValue,
    };
};
var reducer = function () { return function (state, action) {
    switch (action.type) {
        case 'error':
            return __assign({}, state, { error: action.error, loading: false, value: undefined });
        case 'reset':
            return defaultState(action.defaultValue);
        case 'value':
            return __assign({}, state, { error: undefined, loading: false, value: action.value });
        default:
            return state;
    }
}; };
var useLoadingValue = (function (getDefaultValue) {
    var defaultValue = getDefaultValue ? getDefaultValue() : undefined;
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useReducer"])(reducer(), defaultState(defaultValue)), state = _a[0], dispatch = _a[1];
    var reset = function () {
        var defaultValue = getDefaultValue ? getDefaultValue() : undefined;
        dispatch({ type: 'reset', defaultValue: defaultValue });
    };
    var setError = function (error) {
        dispatch({ type: 'error', error: error });
    };
    var setValue = function (value) {
        dispatch({ type: 'value', value: value });
    };
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return ({
        error: state.error,
        loading: state.loading,
        reset: reset,
        setError: setError,
        setValue: setValue,
        value: state.value,
    }); }, [state.error, state.loading, reset, setError, setValue, state.value]);
});

var useAuthState = (function (auth) {
    var _a = useLoadingValue(function () { return auth.currentUser; }), error = _a.error, loading = _a.loading, setError = _a.setError, setValue = _a.setValue, value = _a.value;
    Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
        var listener = auth.onAuthStateChanged(setValue, setError);
        return function () {
            listener();
        };
    }, [auth]);
    var resArray = [value, loading, error];
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return resArray; }, resArray);
});

var _this = undefined;
var useSignInWithEmailAndPassword = (function (auth) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(), error = _a[0], setError = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(), loggedInUser = _b[0], setLoggedInUser = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), loading = _c[0], setLoading = _c[1];
    var signInWithEmailAndPassword = function (email, password) { return __awaiter(_this, void 0, void 0, function () {
        var user, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4 /*yield*/, auth.signInWithEmailAndPassword(email, password)];
                case 2:
                    user = _a.sent();
                    setLoggedInUser(user);
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 3:
                    err_1 = _a.sent();
                    setError(err_1);
                    setLoading(false);
                    return [3 /*break*/, 4];
                case 4: return [2 /*return*/];
            }
        });
    }); };
    var resArray = [
        signInWithEmailAndPassword,
        loggedInUser,
        loading,
        error,
    ];
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return resArray; }, resArray);
});

var _this$1 = undefined;
var useCreateUserWithEmailAndPassword = (function (auth, options) {
    var _a = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(), error = _a[0], setError = _a[1];
    var _b = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(), registeredUser = _b[0], setRegisteredUser = _b[1];
    var _c = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false), loading = _c[0], setLoading = _c[1];
    var createUserWithEmailAndPassword = function (email, password) { return __awaiter(_this$1, void 0, void 0, function () {
        var user, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    setLoading(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 5, , 6]);
                    return [4 /*yield*/, auth.createUserWithEmailAndPassword(email, password)];
                case 2:
                    user = _a.sent();
                    if (!(options && options.sendEmailVerification && user.user)) return [3 /*break*/, 4];
                    return [4 /*yield*/, user.user.sendEmailVerification(options.emailVerificationOptions)];
                case 3:
                    _a.sent();
                    _a.label = 4;
                case 4:
                    setRegisteredUser(user);
                    setLoading(false);
                    return [3 /*break*/, 6];
                case 5:
                    error_1 = _a.sent();
                    setError(error_1);
                    setLoading(false);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    var resArray = [
        createUserWithEmailAndPassword,
        registeredUser,
        loading,
        error,
    ];
    return Object(react__WEBPACK_IMPORTED_MODULE_0__["useMemo"])(function () { return resArray; }, resArray);
});




/***/ }),

/***/ "./src/pages/login.js":
/*!****************************!*\
  !*** ./src/pages/login.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LogInPage; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _components_form_FormSignIn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/form/FormSignIn */ "./src/components/form/FormSignIn.js");
/* harmony import */ var react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-firebase-hooks/auth */ "./node_modules/react-firebase-hooks/auth/dist/index.esm.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\src\\pages\\login.js",
    _s = $RefreshSig$();



function LogInPage() {
  _s();

  var _useAuthState = Object(react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__["useAuthState"])(auth),
      _useAuthState2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_useAuthState, 3),
      user = _useAuthState2[0],
      loading = _useAuthState2[1],
      error = _useAuthState2[2];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
      children: "Soy pepa la cerdita"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 9,
      columnNumber: 7
    }, this), console.log(user)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 8,
    columnNumber: 5
  }, this);
}

_s(LogInPage, "VbhIZxmY9zZheJ6pmP2vZ+FB3Jc=", false, function () {
  return [react_firebase_hooks_auth__WEBPACK_IMPORTED_MODULE_3__["useAuthState"]];
});

_c = LogInPage;

var _c;

$RefreshReg$(_c, "LogInPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL3JlYWN0LWZpcmViYXNlLWhvb2tzL2F1dGgvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9wYWdlcy9sb2dpbi5qcyJdLCJuYW1lcyI6WyJMb2dJblBhZ2UiLCJ1c2VBdXRoU3RhdGUiLCJhdXRoIiwidXNlciIsImxvYWRpbmciLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBaUU7O0FBRWpFO0FBQ0E7QUFDQSwrREFBK0Q7QUFDL0Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGdEQUFnRCxPQUFPO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxtQ0FBbUMsTUFBTSw2QkFBNkIsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNqRyxrQ0FBa0MsTUFBTSxpQ0FBaUMsRUFBRSxZQUFZLFdBQVcsRUFBRTtBQUNwRywrQkFBK0IsaUVBQWlFLHVCQUF1QixFQUFFLDRCQUE0QjtBQUNySjtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBLGFBQWEsNkJBQTZCLDBCQUEwQixhQUFhLEVBQUUscUJBQXFCO0FBQ3hHLGdCQUFnQixxREFBcUQsb0VBQW9FLGFBQWEsRUFBRTtBQUN4SixzQkFBc0Isc0JBQXNCLHFCQUFxQixHQUFHO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVDQUF1QztBQUN2QyxrQ0FBa0MsU0FBUztBQUMzQyxrQ0FBa0MsV0FBVyxVQUFVO0FBQ3ZELHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0EsNkdBQTZHLE9BQU8sVUFBVTtBQUM5SCxnRkFBZ0YsaUJBQWlCLE9BQU87QUFDeEcsd0RBQXdELGdCQUFnQixRQUFRLE9BQU87QUFDdkYsOENBQThDLGdCQUFnQixnQkFBZ0IsT0FBTztBQUNyRjtBQUNBLGlDQUFpQztBQUNqQztBQUNBO0FBQ0EsU0FBUyxZQUFZLGFBQWEsT0FBTyxFQUFFLFVBQVUsV0FBVztBQUNoRSxtQ0FBbUMsU0FBUztBQUM1QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBO0FBQ0EsOEJBQThCLFVBQVUsd0RBQXdEO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixVQUFVLHdEQUF3RDtBQUNoRztBQUNBO0FBQ0E7QUFDQSxFQUFFO0FBQ0Y7QUFDQTtBQUNBLGFBQWEsd0RBQVU7QUFDdkI7QUFDQTtBQUNBLGtCQUFrQiw0Q0FBNEM7QUFDOUQ7QUFDQTtBQUNBLGtCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQTtBQUNBLGtCQUFrQiw4QkFBOEI7QUFDaEQ7QUFDQSxXQUFXLHFEQUFPLGNBQWM7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSyxFQUFFLEVBQUU7QUFDVCxDQUFDOztBQUVEO0FBQ0EsMENBQTBDLHlCQUF5QixFQUFFO0FBQ3JFLElBQUksdURBQVM7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLFdBQVcscURBQU8sY0FBYyxpQkFBaUIsRUFBRTtBQUNuRCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxhQUFhLHNEQUFRO0FBQ3JCLGFBQWEsc0RBQVE7QUFDckIsYUFBYSxzREFBUTtBQUNyQixpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQU8sY0FBYyxpQkFBaUIsRUFBRTtBQUNuRCxDQUFDOztBQUVEO0FBQ0E7QUFDQSxhQUFhLHNEQUFRO0FBQ3JCLGFBQWEsc0RBQVE7QUFDckIsYUFBYSxzREFBUTtBQUNyQixxRUFBcUU7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUssRUFBRTtBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcscURBQU8sY0FBYyxpQkFBaUIsRUFBRTtBQUNuRCxDQUFDOztBQUV5Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4TTFGO0FBQ0E7QUFFZSxTQUFTQSxTQUFULEdBQXFCO0FBQUE7O0FBQUEsc0JBQ0hDLDhFQUFZLENBQUNDLElBQUQsQ0FEVDtBQUFBO0FBQUEsTUFDM0JDLElBRDJCO0FBQUEsTUFDckJDLE9BRHFCO0FBQUEsTUFDWkMsS0FEWTs7QUFHbEMsc0JBQ0U7QUFBQSw0QkFDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBRUdDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZSixJQUFaLENBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFNRDs7R0FUdUJILFM7VUFDU0Msc0U7OztLQURURCxTIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2xvZ2luLjRkZWE4ODg2MGI3OTE5MzVmODQ4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VNZW1vLCB1c2VSZWR1Y2VyLCB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuXG4vKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG5cclxudmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH07XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufTtcclxuXHJcbmZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxuXG52YXIgZGVmYXVsdFN0YXRlID0gZnVuY3Rpb24gKGRlZmF1bHRWYWx1ZSkge1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBsb2FkaW5nOiBkZWZhdWx0VmFsdWUgPT09IHVuZGVmaW5lZCB8fCBkZWZhdWx0VmFsdWUgPT09IG51bGwsXHJcbiAgICAgICAgdmFsdWU6IGRlZmF1bHRWYWx1ZSxcclxuICAgIH07XHJcbn07XHJcbnZhciByZWR1Y2VyID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gZnVuY3Rpb24gKHN0YXRlLCBhY3Rpb24pIHtcclxuICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgICAgICBjYXNlICdlcnJvcic6XHJcbiAgICAgICAgICAgIHJldHVybiBfX2Fzc2lnbih7fSwgc3RhdGUsIHsgZXJyb3I6IGFjdGlvbi5lcnJvciwgbG9hZGluZzogZmFsc2UsIHZhbHVlOiB1bmRlZmluZWQgfSk7XHJcbiAgICAgICAgY2FzZSAncmVzZXQnOlxyXG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFN0YXRlKGFjdGlvbi5kZWZhdWx0VmFsdWUpO1xyXG4gICAgICAgIGNhc2UgJ3ZhbHVlJzpcclxuICAgICAgICAgICAgcmV0dXJuIF9fYXNzaWduKHt9LCBzdGF0ZSwgeyBlcnJvcjogdW5kZWZpbmVkLCBsb2FkaW5nOiBmYWxzZSwgdmFsdWU6IGFjdGlvbi52YWx1ZSB9KTtcclxuICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XHJcbiAgICB9XHJcbn07IH07XHJcbnZhciB1c2VMb2FkaW5nVmFsdWUgPSAoZnVuY3Rpb24gKGdldERlZmF1bHRWYWx1ZSkge1xyXG4gICAgdmFyIGRlZmF1bHRWYWx1ZSA9IGdldERlZmF1bHRWYWx1ZSA/IGdldERlZmF1bHRWYWx1ZSgpIDogdW5kZWZpbmVkO1xyXG4gICAgdmFyIF9hID0gdXNlUmVkdWNlcihyZWR1Y2VyKCksIGRlZmF1bHRTdGF0ZShkZWZhdWx0VmFsdWUpKSwgc3RhdGUgPSBfYVswXSwgZGlzcGF0Y2ggPSBfYVsxXTtcclxuICAgIHZhciByZXNldCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgZGVmYXVsdFZhbHVlID0gZ2V0RGVmYXVsdFZhbHVlID8gZ2V0RGVmYXVsdFZhbHVlKCkgOiB1bmRlZmluZWQ7XHJcbiAgICAgICAgZGlzcGF0Y2goeyB0eXBlOiAncmVzZXQnLCBkZWZhdWx0VmFsdWU6IGRlZmF1bHRWYWx1ZSB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgc2V0RXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICdlcnJvcicsIGVycm9yOiBlcnJvciB9KTtcclxuICAgIH07XHJcbiAgICB2YXIgc2V0VmFsdWUgPSBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICBkaXNwYXRjaCh7IHR5cGU6ICd2YWx1ZScsIHZhbHVlOiB2YWx1ZSB9KTtcclxuICAgIH07XHJcbiAgICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiAoe1xyXG4gICAgICAgIGVycm9yOiBzdGF0ZS5lcnJvcixcclxuICAgICAgICBsb2FkaW5nOiBzdGF0ZS5sb2FkaW5nLFxyXG4gICAgICAgIHJlc2V0OiByZXNldCxcclxuICAgICAgICBzZXRFcnJvcjogc2V0RXJyb3IsXHJcbiAgICAgICAgc2V0VmFsdWU6IHNldFZhbHVlLFxyXG4gICAgICAgIHZhbHVlOiBzdGF0ZS52YWx1ZSxcclxuICAgIH0pOyB9LCBbc3RhdGUuZXJyb3IsIHN0YXRlLmxvYWRpbmcsIHJlc2V0LCBzZXRFcnJvciwgc2V0VmFsdWUsIHN0YXRlLnZhbHVlXSk7XHJcbn0pO1xuXG52YXIgdXNlQXV0aFN0YXRlID0gKGZ1bmN0aW9uIChhdXRoKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VMb2FkaW5nVmFsdWUoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXV0aC5jdXJyZW50VXNlcjsgfSksIGVycm9yID0gX2EuZXJyb3IsIGxvYWRpbmcgPSBfYS5sb2FkaW5nLCBzZXRFcnJvciA9IF9hLnNldEVycm9yLCBzZXRWYWx1ZSA9IF9hLnNldFZhbHVlLCB2YWx1ZSA9IF9hLnZhbHVlO1xyXG4gICAgdXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcclxuICAgICAgICB2YXIgbGlzdGVuZXIgPSBhdXRoLm9uQXV0aFN0YXRlQ2hhbmdlZChzZXRWYWx1ZSwgc2V0RXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGxpc3RlbmVyKCk7XHJcbiAgICAgICAgfTtcclxuICAgIH0sIFthdXRoXSk7XHJcbiAgICB2YXIgcmVzQXJyYXkgPSBbdmFsdWUsIGxvYWRpbmcsIGVycm9yXTtcclxuICAgIHJldHVybiB1c2VNZW1vKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHJlc0FycmF5OyB9LCByZXNBcnJheSk7XHJcbn0pO1xuXG52YXIgX3RoaXMgPSB1bmRlZmluZWQ7XHJcbnZhciB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCA9IChmdW5jdGlvbiAoYXV0aCkge1xyXG4gICAgdmFyIF9hID0gdXNlU3RhdGUoKSwgZXJyb3IgPSBfYVswXSwgc2V0RXJyb3IgPSBfYVsxXTtcclxuICAgIHZhciBfYiA9IHVzZVN0YXRlKCksIGxvZ2dlZEluVXNlciA9IF9iWzBdLCBzZXRMb2dnZWRJblVzZXIgPSBfYlsxXTtcclxuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZyA9IF9jWzBdLCBzZXRMb2FkaW5nID0gX2NbMV07XHJcbiAgICB2YXIgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQgPSBmdW5jdGlvbiAoZW1haWwsIHBhc3N3b3JkKSB7IHJldHVybiBfX2F3YWl0ZXIoX3RoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHVzZXIsIGVycl8xO1xyXG4gICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcclxuICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOlxyXG4gICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAxO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAxOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnRyeXMucHVzaChbMSwgMywgLCA0XSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgYXV0aC5zaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICB1c2VyID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHNldExvZ2dlZEluVXNlcih1c2VyKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA0XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMzpcclxuICAgICAgICAgICAgICAgICAgICBlcnJfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJfMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IHJldHVybiBbMiAvKnJldHVybiovXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7IH07XHJcbiAgICB2YXIgcmVzQXJyYXkgPSBbXHJcbiAgICAgICAgc2lnbkluV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgICAgICAgbG9nZ2VkSW5Vc2VyLFxyXG4gICAgICAgIGxvYWRpbmcsXHJcbiAgICAgICAgZXJyb3IsXHJcbiAgICBdO1xyXG4gICAgcmV0dXJuIHVzZU1lbW8oZnVuY3Rpb24gKCkgeyByZXR1cm4gcmVzQXJyYXk7IH0sIHJlc0FycmF5KTtcclxufSk7XG5cbnZhciBfdGhpcyQxID0gdW5kZWZpbmVkO1xyXG52YXIgdXNlQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkID0gKGZ1bmN0aW9uIChhdXRoLCBvcHRpb25zKSB7XHJcbiAgICB2YXIgX2EgPSB1c2VTdGF0ZSgpLCBlcnJvciA9IF9hWzBdLCBzZXRFcnJvciA9IF9hWzFdO1xyXG4gICAgdmFyIF9iID0gdXNlU3RhdGUoKSwgcmVnaXN0ZXJlZFVzZXIgPSBfYlswXSwgc2V0UmVnaXN0ZXJlZFVzZXIgPSBfYlsxXTtcclxuICAgIHZhciBfYyA9IHVzZVN0YXRlKGZhbHNlKSwgbG9hZGluZyA9IF9jWzBdLCBzZXRMb2FkaW5nID0gX2NbMV07XHJcbiAgICB2YXIgY3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkID0gZnVuY3Rpb24gKGVtYWlsLCBwYXNzd29yZCkgeyByZXR1cm4gX19hd2FpdGVyKF90aGlzJDEsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgdmFyIHVzZXIsIGVycm9yXzE7XHJcbiAgICAgICAgcmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsIGZ1bmN0aW9uIChfYSkge1xyXG4gICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyh0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDE7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICAgICAgX2EudHJ5cy5wdXNoKFsxLCA1LCAsIDZdKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCBhdXRoLmNyZWF0ZVVzZXJXaXRoRW1haWxBbmRQYXNzd29yZChlbWFpbCwgcGFzc3dvcmQpXTtcclxuICAgICAgICAgICAgICAgIGNhc2UgMjpcclxuICAgICAgICAgICAgICAgICAgICB1c2VyID0gX2Euc2VudCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKG9wdGlvbnMgJiYgb3B0aW9ucy5zZW5kRW1haWxWZXJpZmljYXRpb24gJiYgdXNlci51c2VyKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgNF07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdXNlci51c2VyLnNlbmRFbWFpbFZlcmlmaWNhdGlvbihvcHRpb25zLmVtYWlsVmVyaWZpY2F0aW9uT3B0aW9ucyldO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgICAgIF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDQ7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0UmVnaXN0ZXJlZFVzZXIodXNlcik7XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFszIC8qYnJlYWsqLywgNl07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6XHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JfMSA9IF9hLnNlbnQoKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRFcnJvcihlcnJvcl8xKTtcclxuICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzMgLypicmVhayovLCA2XTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTsgfTtcclxuICAgIHZhciByZXNBcnJheSA9IFtcclxuICAgICAgICBjcmVhdGVVc2VyV2l0aEVtYWlsQW5kUGFzc3dvcmQsXHJcbiAgICAgICAgcmVnaXN0ZXJlZFVzZXIsXHJcbiAgICAgICAgbG9hZGluZyxcclxuICAgICAgICBlcnJvcixcclxuICAgIF07XHJcbiAgICByZXR1cm4gdXNlTWVtbyhmdW5jdGlvbiAoKSB7IHJldHVybiByZXNBcnJheTsgfSwgcmVzQXJyYXkpO1xyXG59KTtcblxuZXhwb3J0IHsgdXNlQXV0aFN0YXRlLCB1c2VTaWduSW5XaXRoRW1haWxBbmRQYXNzd29yZCwgdXNlQ3JlYXRlVXNlcldpdGhFbWFpbEFuZFBhc3N3b3JkIH07XG4iLCJpbXBvcnQgRm9ybVNpZ25JbiBmcm9tICcuLi9jb21wb25lbnRzL2Zvcm0vRm9ybVNpZ25JbidcclxuaW1wb3J0IHsgdXNlQXV0aFN0YXRlIH0gZnJvbSAncmVhY3QtZmlyZWJhc2UtaG9va3MvYXV0aCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dJblBhZ2UoKSB7XHJcbiAgY29uc3QgW3VzZXIsIGxvYWRpbmcsIGVycm9yXSA9IHVzZUF1dGhTdGF0ZShhdXRoKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxwPlNveSBwZXBhIGxhIGNlcmRpdGE8L3A+XHJcbiAgICAgIHtjb25zb2xlLmxvZyh1c2VyKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9