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
      console.log(action);
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
    lineNumber: 41,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQXV0aC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiQWN0aW9uVHlwZSIsIlNldERldGFpbHMiLCJSZW1vdmVEZXRhaWxzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiRXJyb3IiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImxvY2FsU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlRWZmZWN0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInVzZUF1dGgiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsRUFBcEIsQ0FBekI7QUFFUCxJQUFNQyxZQUFZLEdBQUc7QUFBRUMsTUFBSSxFQUFFO0FBQVIsQ0FBckI7QUFFQSxJQUFNQyxVQUFVLEdBQUc7QUFDakJDLFlBQVUsRUFBRSxnQkFESztBQUVqQkMsZUFBYSxFQUFFO0FBRkUsQ0FBbkI7O0FBS0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtOLFVBQVUsQ0FBQ0MsVUFBaEI7QUFDRU0sYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQSxhQUFPO0FBQ0xOLFlBQUksRUFBRU0sTUFBTSxDQUFDSSxPQUFQLENBQWVWO0FBRGhCLE9BQVA7O0FBR0YsU0FBS0MsVUFBVSxDQUFDRSxhQUFoQjtBQUNFLGFBQU87QUFDTEgsWUFBSSxFQUFFRCxZQUFZLENBQUNDO0FBRGQsT0FBUDs7QUFHRjtBQUNFLFlBQU0sSUFBSVcsS0FBSixrQ0FBb0NMLE1BQU0sQ0FBQ0MsSUFBM0MsRUFBTjtBQVhKO0FBYUQsQ0FkRDs7QUFnQk8sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDNUMsTUFBSUMsVUFBVSxHQUFHLElBQWpCOztBQUNBLE1BQUksT0FBT0MsWUFBUCxLQUF3QixXQUF4QixJQUF1Q0EsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQTNDLEVBQTZFO0FBQzNFRixjQUFVLEdBQUdHLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsS0FBb0MsRUFBL0MsQ0FBYjtBQUNEOztBQUoyQyxvQkFLbEJHLHdEQUFVLENBQUNmLE9BQUQsRUFBVVUsVUFBVSxJQUFJZixZQUF4QixDQUxRO0FBQUEsTUFLckNNLEtBTHFDO0FBQUEsTUFLOUJlLFFBTDhCOztBQU81QyxNQUFJLE9BQU9MLFlBQVAsS0FBd0IsV0FBNUIsRUFBeUM7QUFDdkNNLDJEQUFTLENBQUMsWUFBTTtBQUNkTixrQkFBWSxDQUFDTyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDTCxJQUFJLENBQUNNLFNBQUwsQ0FBZWxCLEtBQWYsQ0FBakM7QUFDRCxLQUZRLEVBRU4sQ0FBQ0EsS0FBRCxDQUZNLENBQVQ7QUFHRDs7QUFDRCxzQkFDRSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUUsQ0FBQ0EsS0FBRCxFQUFRZSxRQUFSLENBQWxDO0FBQUEsY0FDR1A7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQWpCTSxDLENBbUJQO0FBQ0E7QUFDQTs7R0FyQmFELFk7O0tBQUFBLFk7QUFzQk4sSUFBTVksT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDN0IsZ0JBQUQsQ0FBaEI7QUFBQSxDQUFoQjs7SUFBTTRCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC44MDQ4OGE1MzQ1NGFmMmFhNWYyOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0geyB1c2VyOiB7fSB9XHJcblxyXG5jb25zdCBBY3Rpb25UeXBlID0ge1xyXG4gIFNldERldGFpbHM6ICdzZXRBdXRoRGV0YWlscycsXHJcbiAgUmVtb3ZlRGV0YWlsczogJ3JlbW92ZUF1dGhEZXRhaWxzJ1xyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuU2V0RGV0YWlsczpcclxuICAgICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IGFjdGlvbi5wYXlsb2FkLnVzZXJcclxuICAgICAgfTtcclxuICAgIGNhc2UgQWN0aW9uVHlwZS5SZW1vdmVEZXRhaWxzOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIHVzZXI6IGluaXRpYWxTdGF0ZS51c2VyXHJcbiAgICAgIH07XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX1gKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgQXV0aFByb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGxldCBsb2NhbFN0YXRlID0gbnVsbDtcclxuICBpZiAodHlwZW9mIGxvY2FsU3RvcmFnZSAhPT0gJ3VuZGVmaW5lZCcgJiYgbG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3VzZXJJbmZvJykpIHtcclxuICAgIGxvY2FsU3RhdGUgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mbycpIHx8ICcnKTtcclxuICB9XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGxvY2FsU3RhdGUgfHwgaW5pdGlhbFN0YXRlKTtcclxuXHJcbiAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgndXNlckluZm8nLCBKU09OLnN0cmluZ2lmeShzdGF0ZSkpO1xyXG4gICAgfSwgW3N0YXRlXSk7XHJcbiAgfVxyXG4gIHJldHVybiAoXHJcbiAgICA8QXV0aFN0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0F1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIHVzZUNvbnRleHQgaG9vayAtIGV4cG9ydCBoZXJlIHRvIGtlZXAgY29kZSBmb3IgZ2xvYmFsIGF1dGggc3RhdGVcclxuLy8gdG9nZXRoZXIgaW4gdGhpcyBmaWxlLCBhbGxvd2luZyB1c2VyIGluZm8gdG8gYmUgYWNjZXNzZWQgYW5kIHVwZGF0ZWRcclxuLy8gaW4gYW55IGZ1bmN0aW9uYWwgY29tcG9uZW50IHVzaW5nIHRoZSBob29rXHJcbmV4cG9ydCBjb25zdCB1c2VBdXRoID0gKCkgPT4gdXNlQ29udGV4dChBdXRoU3RhdGVDb250ZXh0KTsiXSwic291cmNlUm9vdCI6IiJ9