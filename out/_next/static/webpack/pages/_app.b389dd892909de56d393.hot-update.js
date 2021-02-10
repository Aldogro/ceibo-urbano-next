webpackHotUpdate_N_E("pages/_app",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQXV0aC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiQWN0aW9uVHlwZSIsIlNldERldGFpbHMiLCJSZW1vdmVEZXRhaWxzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsInBheWxvYWQiLCJFcnJvciIsIkF1dGhQcm92aWRlciIsImNoaWxkcmVuIiwibG9jYWxTdGF0ZSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJKU09OIiwicGFyc2UiLCJ1c2VSZWR1Y2VyIiwiZGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXNlQXV0aCIsInVzZUNvbnRleHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUVPLElBQU1BLGdCQUFnQixnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUF6QjtBQUVQLElBQU1DLFlBQVksR0FBRztBQUFFQyxNQUFJLEVBQUU7QUFBUixDQUFyQjtBQUVBLElBQU1DLFVBQVUsR0FBRztBQUNqQkMsWUFBVSxFQUFFLGdCQURLO0FBRWpCQyxlQUFhLEVBQUU7QUFGRSxDQUFuQjs7QUFLQSxJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVSxDQUFDQyxLQUFELEVBQVFDLE1BQVIsRUFBbUI7QUFDakMsVUFBUUEsTUFBTSxDQUFDQyxJQUFmO0FBQ0UsU0FBS04sVUFBVSxDQUFDQyxVQUFoQjtBQUNFLGFBQU87QUFDTEYsWUFBSSxFQUFFTSxNQUFNLENBQUNFLE9BQVAsQ0FBZVI7QUFEaEIsT0FBUDs7QUFHRixTQUFLQyxVQUFVLENBQUNFLGFBQWhCO0FBQ0UsYUFBTztBQUNMSCxZQUFJLEVBQUVELFlBQVksQ0FBQ0M7QUFEZCxPQUFQOztBQUdGO0FBQ0UsWUFBTSxJQUFJUyxLQUFKLGtDQUFvQ0gsTUFBTSxDQUFDQyxJQUEzQyxFQUFOO0FBVko7QUFZRCxDQWJEOztBQWVPLElBQU1HLFlBQVksR0FBRyxTQUFmQSxZQUFlLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlO0FBQzVDLE1BQUlDLFVBQVUsR0FBRyxJQUFqQjs7QUFDQSxNQUFJLE9BQU9DLFlBQVAsS0FBd0IsV0FBeEIsSUFBdUNBLFlBQVksQ0FBQ0MsT0FBYixDQUFxQixVQUFyQixDQUEzQyxFQUE2RTtBQUMzRUYsY0FBVSxHQUFHRyxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLEtBQW9DLEVBQS9DLENBQWI7QUFDRDs7QUFKMkMsb0JBS2xCRyx3REFBVSxDQUFDYixPQUFELEVBQVVRLFVBQVUsSUFBSWIsWUFBeEIsQ0FMUTtBQUFBLE1BS3JDTSxLQUxxQztBQUFBLE1BSzlCYSxRQUw4Qjs7QUFPNUMsTUFBSSxPQUFPTCxZQUFQLEtBQXdCLFdBQTVCLEVBQXlDO0FBQ3ZDTSwyREFBUyxDQUFDLFlBQU07QUFDZE4sa0JBQVksQ0FBQ08sT0FBYixDQUFxQixVQUFyQixFQUFpQ0wsSUFBSSxDQUFDTSxTQUFMLENBQWVoQixLQUFmLENBQWpDO0FBQ0QsS0FGUSxFQUVOLENBQUNBLEtBQUQsQ0FGTSxDQUFUO0FBR0Q7O0FBQ0Qsc0JBQ0UscUVBQUMsZ0JBQUQsQ0FBa0IsUUFBbEI7QUFBMkIsU0FBSyxFQUFFLENBQUNBLEtBQUQsRUFBUWEsUUFBUixDQUFsQztBQUFBLGNBQ0dQO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FqQk0sQyxDQW1CUDtBQUNBO0FBQ0E7O0dBckJhRCxZOztLQUFBQSxZO0FBc0JOLElBQU1ZLE9BQU8sR0FBRyxTQUFWQSxPQUFVO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQzNCLGdCQUFELENBQWhCO0FBQUEsQ0FBaEI7O0lBQU0wQixPIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuYjM4OWRkODkyOTA5ZGU1NmQzOTMuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdXNlcjoge30gfVxyXG5cclxuY29uc3QgQWN0aW9uVHlwZSA9IHtcclxuICBTZXREZXRhaWxzOiAnc2V0QXV0aERldGFpbHMnLFxyXG4gIFJlbW92ZURldGFpbHM6ICdyZW1vdmVBdXRoRGV0YWlscydcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlNldERldGFpbHM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlcjogYWN0aW9uLnBheWxvYWQudXNlclxyXG4gICAgICB9O1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlJlbW92ZURldGFpbHM6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgdXNlcjogaW5pdGlhbFN0YXRlLnVzZXJcclxuICAgICAgfTtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApO1xyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgbGV0IGxvY2FsU3RhdGUgPSBudWxsO1xyXG4gIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJyAmJiBsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm8nKSkge1xyXG4gICAgbG9jYWxTdGF0ZSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJbmZvJykgfHwgJycpO1xyXG4gIH1cclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgbG9jYWxTdGF0ZSB8fCBpbml0aWFsU3RhdGUpO1xyXG5cclxuICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VySW5mbycsIEpTT04uc3RyaW5naWZ5KHN0YXRlKSk7XHJcbiAgICB9LCBbc3RhdGVdKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxBdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyIHZhbHVlPXtbc3RhdGUsIGRpc3BhdGNoXX0+XHJcbiAgICAgIHtjaGlsZHJlbn1cclxuICAgIDwvQXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59O1xyXG5cclxuLy8gdXNlQ29udGV4dCBob29rIC0gZXhwb3J0IGhlcmUgdG8ga2VlcCBjb2RlIGZvciBnbG9iYWwgYXV0aCBzdGF0ZVxyXG4vLyB0b2dldGhlciBpbiB0aGlzIGZpbGUsIGFsbG93aW5nIHVzZXIgaW5mbyB0byBiZSBhY2Nlc3NlZCBhbmQgdXBkYXRlZFxyXG4vLyBpbiBhbnkgZnVuY3Rpb25hbCBjb21wb25lbnQgdXNpbmcgdGhlIGhvb2tcclxuZXhwb3J0IGNvbnN0IHVzZUF1dGggPSAoKSA9PiB1c2VDb250ZXh0KEF1dGhTdGF0ZUNvbnRleHQpOyJdLCJzb3VyY2VSb290IjoiIn0=