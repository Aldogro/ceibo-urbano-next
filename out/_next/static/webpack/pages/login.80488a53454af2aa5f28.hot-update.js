webpackHotUpdate_N_E("pages/login",{

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQXV0aC5jb250ZXh0LmpzIl0sIm5hbWVzIjpbIkF1dGhTdGF0ZUNvbnRleHQiLCJSZWFjdCIsImNyZWF0ZUNvbnRleHQiLCJpbml0aWFsU3RhdGUiLCJ1c2VyIiwiQWN0aW9uVHlwZSIsIlNldERldGFpbHMiLCJSZW1vdmVEZXRhaWxzIiwicmVkdWNlciIsInN0YXRlIiwiYWN0aW9uIiwidHlwZSIsImNvbnNvbGUiLCJsb2ciLCJwYXlsb2FkIiwiRXJyb3IiLCJBdXRoUHJvdmlkZXIiLCJjaGlsZHJlbiIsImxvY2FsU3RhdGUiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlRWZmZWN0Iiwic2V0SXRlbSIsInN0cmluZ2lmeSIsInVzZUF1dGgiLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFFTyxJQUFNQSxnQkFBZ0IsZ0JBQUdDLDRDQUFLLENBQUNDLGFBQU4sQ0FBb0IsRUFBcEIsQ0FBekI7QUFFUCxJQUFNQyxZQUFZLEdBQUc7QUFBRUMsTUFBSSxFQUFFO0FBQVIsQ0FBckI7QUFFQSxJQUFNQyxVQUFVLEdBQUc7QUFDakJDLFlBQVUsRUFBRSxnQkFESztBQUVqQkMsZUFBYSxFQUFFO0FBRkUsQ0FBbkI7O0FBS0EsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtOLFVBQVUsQ0FBQ0MsVUFBaEI7QUFDRU0sYUFBTyxDQUFDQyxHQUFSLENBQVlILE1BQVo7QUFDQSxhQUFPO0FBQ0xOLFlBQUksRUFBRU0sTUFBTSxDQUFDSSxPQUFQLENBQWVWO0FBRGhCLE9BQVA7O0FBR0YsU0FBS0MsVUFBVSxDQUFDRSxhQUFoQjtBQUNFLGFBQU87QUFDTEgsWUFBSSxFQUFFRCxZQUFZLENBQUNDO0FBRGQsT0FBUDs7QUFHRjtBQUNFLFlBQU0sSUFBSVcsS0FBSixrQ0FBb0NMLE1BQU0sQ0FBQ0MsSUFBM0MsRUFBTjtBQVhKO0FBYUQsQ0FkRDs7QUFnQk8sSUFBTUssWUFBWSxHQUFHLFNBQWZBLFlBQWUsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7QUFDNUMsTUFBSUMsVUFBVSxHQUFHLElBQWpCOztBQUNBLE1BQUksT0FBT0MsWUFBUCxLQUF3QixXQUF4QixJQUF1Q0EsWUFBWSxDQUFDQyxPQUFiLENBQXFCLFVBQXJCLENBQTNDLEVBQTZFO0FBQzNFRixjQUFVLEdBQUdHLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsVUFBckIsS0FBb0MsRUFBL0MsQ0FBYjtBQUNEOztBQUoyQyxvQkFLbEJHLHdEQUFVLENBQUNmLE9BQUQsRUFBVVUsVUFBVSxJQUFJZixZQUF4QixDQUxRO0FBQUEsTUFLckNNLEtBTHFDO0FBQUEsTUFLOUJlLFFBTDhCOztBQU81QyxNQUFJLE9BQU9MLFlBQVAsS0FBd0IsV0FBNUIsRUFBeUM7QUFDdkNNLDJEQUFTLENBQUMsWUFBTTtBQUNkTixrQkFBWSxDQUFDTyxPQUFiLENBQXFCLFVBQXJCLEVBQWlDTCxJQUFJLENBQUNNLFNBQUwsQ0FBZWxCLEtBQWYsQ0FBakM7QUFDRCxLQUZRLEVBRU4sQ0FBQ0EsS0FBRCxDQUZNLENBQVQ7QUFHRDs7QUFDRCxzQkFDRSxxRUFBQyxnQkFBRCxDQUFrQixRQUFsQjtBQUEyQixTQUFLLEVBQUUsQ0FBQ0EsS0FBRCxFQUFRZSxRQUFSLENBQWxDO0FBQUEsY0FDR1A7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQWpCTSxDLENBbUJQO0FBQ0E7QUFDQTs7R0FyQmFELFk7O0tBQUFBLFk7QUFzQk4sSUFBTVksT0FBTyxHQUFHLFNBQVZBLE9BQVU7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDN0IsZ0JBQUQsQ0FBaEI7QUFBQSxDQUFoQjs7SUFBTTRCLE8iLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvbG9naW4uODA0ODhhNTM0NTRhZjJhYTVmMjguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VFZmZlY3QsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuXHJcbmV4cG9ydCBjb25zdCBBdXRoU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHsgdXNlcjoge30gfVxyXG5cclxuY29uc3QgQWN0aW9uVHlwZSA9IHtcclxuICBTZXREZXRhaWxzOiAnc2V0QXV0aERldGFpbHMnLFxyXG4gIFJlbW92ZURldGFpbHM6ICdyZW1vdmVBdXRoRGV0YWlscydcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlNldERldGFpbHM6XHJcbiAgICAgIGNvbnNvbGUubG9nKGFjdGlvbilcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyOiBhY3Rpb24ucGF5bG9hZC51c2VyXHJcbiAgICAgIH07XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuUmVtb3ZlRGV0YWlsczpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICB1c2VyOiBpbml0aWFsU3RhdGUudXNlclxyXG4gICAgICB9O1xyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YCk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IEF1dGhQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBsZXQgbG9jYWxTdGF0ZSA9IG51bGw7XHJcbiAgaWYgKHR5cGVvZiBsb2NhbFN0b3JhZ2UgIT09ICd1bmRlZmluZWQnICYmIGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VySW5mbycpKSB7XHJcbiAgICBsb2NhbFN0YXRlID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlckluZm8nKSB8fCAnJyk7XHJcbiAgfVxyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBsb2NhbFN0YXRlIHx8IGluaXRpYWxTdGF0ZSk7XHJcblxyXG4gIGlmICh0eXBlb2YgbG9jYWxTdG9yYWdlICE9PSAndW5kZWZpbmVkJykge1xyXG4gICAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3VzZXJJbmZvJywgSlNPTi5zdHJpbmdpZnkoc3RhdGUpKTtcclxuICAgIH0sIFtzdGF0ZV0pO1xyXG4gIH1cclxuICByZXR1cm4gKFxyXG4gICAgPEF1dGhTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9BdXRoU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyB1c2VDb250ZXh0IGhvb2sgLSBleHBvcnQgaGVyZSB0byBrZWVwIGNvZGUgZm9yIGdsb2JhbCBhdXRoIHN0YXRlXHJcbi8vIHRvZ2V0aGVyIGluIHRoaXMgZmlsZSwgYWxsb3dpbmcgdXNlciBpbmZvIHRvIGJlIGFjY2Vzc2VkIGFuZCB1cGRhdGVkXHJcbi8vIGluIGFueSBmdW5jdGlvbmFsIGNvbXBvbmVudCB1c2luZyB0aGUgaG9va1xyXG5leHBvcnQgY29uc3QgdXNlQXV0aCA9ICgpID0+IHVzZUNvbnRleHQoQXV0aFN0YXRlQ29udGV4dCk7Il0sInNvdXJjZVJvb3QiOiIifQ==