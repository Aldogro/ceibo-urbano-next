webpackHotUpdate_N_E("pages/index",{

/***/ "./services/Auth.context.js":
/*!**********************************!*\
  !*** ./services/Auth.context.js ***!
  \**********************************/
/*! exports provided: AuthStateContext, AuthProvider, useAuth */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthStateContext", function() { return AuthStateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthProvider", function() { return AuthProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useAuth", function() { return useAuth; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\services\\Auth.context.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();


var AuthStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default.a.createContext({});
var initialState = {
  user: {}
};
var ActionType = {
  SetDetails: 'setAuthDetails',
  RemoveDetails: 'removeAuthDetails'
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.SetDetails:
      return {
        user: action.payload.user
      };

    case ActionType.RemoveDetails:
      return {
        user: initialState.user
      };

    default:
      throw new Error("Unhandled action type: ".concat(action.type));
  }
};

var AuthProvider = function AuthProvider(_ref) {
  _s();

  var children = _ref.children;
  var localState = null;

  if (typeof localStorage !== 'undefined' && localStorage.getItem('userInfo')) {
    localState = JSON.parse(localStorage.getItem('userInfo') || '');
  }

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(reducer, localState || initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  if (typeof localStorage !== 'undefined') {
    Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
      localStorage.setItem('userInfo', JSON.stringify(state));
    }, [state]);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(AuthStateContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 40,
    columnNumber: 5
  }, _this);
}; // useContext hook - export here to keep code for global auth state
// together in this file, allowing user info to be accessed and updated
// in any functional component using the hook

_s(AuthProvider, "hIJqd2Z7TViwRPCwSE8PSo9kW88=");

_c = AuthProvider;
var useAuth = function useAuth() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_1__["useContext"])(AuthStateContext);
};

_s2(useAuth, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "AuthProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQXV0aC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiQWN0aW9uVHlwZSIsIlNldERldGFpbHMiLCJSZW1vdmVEZXRhaWxzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJFcnJvciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwibG9jYWxTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXNlQXV0aCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGdCQUFnQixnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUF6QjtBQUVQLElBQU1DLFlBQVksR0FBRztBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUFyQjtBQUVBLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsWUFBVSxFQUFFLGdCQURLO0FBRWpCQyxlQUFhLEVBQUU7QUFGRSxDQUFuQjs7QUFLQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS04sVUFBVSxDQUFDQyxVQUFoQjtBQUNFLGFBQU87QUFDTEYsWUFBSSxFQUFFTSxNQUFNLENBQUNFLE9BQVAsQ0FBZVI7QUFEaEIsT0FBUDs7QUFHRixTQUFLQyxVQUFVLENBQUNFLGFBQWhCO0FBQ0UsYUFBTztBQUNMSCxZQUFJLEVBQUVELFlBQVksQ0FBQ0M7QUFEZCxPQUFQOztBQUdGO0FBQ0UsWUFBTSxJQUFJUyxLQUFKLGtDQUFvQ0gsTUFBTSxDQUFDQyxJQUEzQyxFQUFOO0FBVko7QUFZRCxDQWJEOztBQWVPLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzVDLE1BQUlDLFVBQVUsR0FBRyxJQUFqQjs7QUFDQSxNQUFJLE9BQU9DLFlBQVAsS0FBd0IsV0FBeEIsSUFBdUNBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUEzQyxFQUE2RTtBQUMzRUYsY0FBVSxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEtBQW9DLEVBQS9DLENBQWI7QUFDRDs7QUFKMkMsb0JBS2xCRyx3REFBVSxDQUFDYixPQUFELEVBQVVRLFVBQVUsSUFBSWIsWUFBeEIsQ0FMUTtBQUFBLE1BS3JDTSxLQUxxQztBQUFBLE1BSzlCYSxRQUw4Qjs7QUFPNUMsTUFBSSxPQUFPTCxZQUFQLEtBQXdCLFdBQTVCLEVBQXlDO0FBQ3ZDTSwyREFBUyxDQUFDLFlBQU07QUFDZE4sa0JBQVksQ0FBQ08sT0FBYixDQUFxQixVQUFyQixFQUFpQ0wsSUFBSSxDQUFDTSxTQUFMLENBQWVoQixLQUFmLENBQWpDO0FBQ0QsS0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUO0FBR0Q7O0FBQ0Qsc0JBQ0UscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFLENBQUNBLEtBQUQsRUFBUWEsUUFBUixDQUFsQztBQUFBLGNBQ0dQO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FqQk0sQyxDQW1CUDtBQUNBO0FBQ0E7O0dBckJhRCxZOztLQUFBQSxZO0FBc0JOLElBQU1ZLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQzNCLGdCQUFELENBQWhCO0FBQUEsQ0FBaEI7O0lBQU0wQixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmIzODlkZDg5MjkwOWRlNTZkMzkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFN0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7IHVzZXI6IHt9IH1cclxuXHJcbmNvbnN0IEFjdGlvblR5cGUgPSB7XHJcbiAgU2V0RGV0YWlsczogJ3NldEF1dGhEZXRhaWxzJyxcclxuICBSZW1vdmVEZXRhaWxzOiAncmVtb3ZlQXV0aERldGFpbHMnXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZS5TZXREZXRhaWxzOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXJcclxuICAgICAgfTtcclxuICAgIGNhc2UgQWN0aW9uVHlwZS5SZW1vdmVEZXRhaWxzOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IGluaXRpYWxTdGF0ZS51c2VyXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX1gKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGxldCBsb2NhbFN0YXRlID0gbnVsbDtcclxuICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJbmZvJykpIHtcclxuICAgIGxvY2FsU3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mbycpIHx8ICcnKTtcclxuICB9XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGxvY2FsU3RhdGUgfHwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG4gICAgfSwgW3N0YXRlXSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIHVzZUNvbnRleHQgaG9vayAtIGV4cG9ydCBoZXJlIHRvIGtlZXAgY29kZSBmb3IgZ2xvYmFsIGF1dGggc3RhdGVcclxuLy8gdG9nZXRoZXIgaW4gdGhpcyBmaWxlLCBhbGxvd2luZyB1c2VyIGluZm8gdG8gYmUgYWNjZXNzZWQgYW5kIHVwZGF0ZWRcclxuLy8gaW4gYW55IGZ1bmN0aW9uYWwgY29tcG9uZW50IHVzaW5nIHRoZSBob29rXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoU3RhdGVDb250ZXh0KTsiXSwic291cmNlUm9vdCI6IiJ9