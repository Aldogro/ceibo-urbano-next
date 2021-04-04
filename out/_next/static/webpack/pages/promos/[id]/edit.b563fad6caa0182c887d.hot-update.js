webpackHotUpdate_N_E("pages/promos/[id]/edit",{

/***/ "./services/Promo.context.js":
/*!***********************************!*\
  !*** ./services/Promo.context.js ***!
  \***********************************/
/*! exports provided: PromoStateContext, ActionType, PromoProvider, usePromo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoStateContext", function() { return PromoStateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PromoProvider", function() { return PromoProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "usePromo", function() { return usePromo; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/firebase.config */ "./firebase/firebase.config.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\services\\Promo.context.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }



var PromoStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var initialState = {
  promo: {},
  promos: [],
  maxDiscount: 0
};
var ActionType = {
  CREATE_PROMO: 'CREATE_PROMO',
  SET_PROMO: 'SET_PROMO',
  SET_PROMOS: 'SET_PROMOS',
  GET_MAX_DISCOUNT: 'GET_MAX_DISCOUNT'
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.CREATE_PROMO:
      var id = new Date().getTime().toString();
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_3__["default"].firestore().collection('promos').doc(id).set(_objectSpread(_objectSpread({}, action.payload), {}, {
        id: id
      })).then(function () {
        return console.log('promo agregada');
      })["catch"](function (error) {
        return console.log('error al agregar una promo');
      });
      return;

    case ActionType.SET_PROMO:
      return _objectSpread(_objectSpread({}, state), {}, {
        promo: action.payload
      });

    case ActionType.SET_PROMOS:
      return _objectSpread(_objectSpread({}, state), {}, {
        promos: action.payload || []
      });

    case ActionType.GET_MAX_DISCOUNT:
      var temp = 0;
      state.promos.forEach(function (promo) {
        return promo.discount < temp ? temp = promo.discount : temp = temp;
      });
      return _objectSpread(_objectSpread({}, state), {}, {
        maxDiscount: 1
      });

    default:
      throw new Error("Unhandled action type: ".concat(action.type));
  }
};

var PromoProvider = function PromoProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(PromoStateContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 54,
    columnNumber: 5
  }, _this);
};

_s(PromoProvider, "6JWkGZ32UPfojeNx+xqn8ZU8A0Q=");

_c = PromoProvider;
var usePromo = function usePromo() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(PromoStateContext);
};

_s2(usePromo, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "PromoProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvUHJvbW8uY29udGV4dC5qcyJdLCJuYW1lcyI6WyJQcm9tb1N0YXRlQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInByb21vIiwicHJvbW9zIiwibWF4RGlzY291bnQiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFX1BST01PIiwiU0VUX1BST01PIiwiU0VUX1BST01PUyIsIkdFVF9NQVhfRElTQ09VTlQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaWQiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwiYXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsInBheWxvYWQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGVtcCIsImZvckVhY2giLCJkaXNjb3VudCIsIkVycm9yIiwiUHJvbW9Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlUHJvbW8iLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQTFCO0FBRVAsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsRUFEWTtBQUVuQkMsUUFBTSxFQUFFLEVBRlc7QUFHbkJDLGFBQVcsRUFBRTtBQUhNLENBQXJCO0FBTU8sSUFBTUMsVUFBVSxHQUFHO0FBQ3hCQyxjQUFZLEVBQUUsY0FEVTtBQUV4QkMsV0FBUyxFQUFFLFdBRmE7QUFHeEJDLFlBQVUsRUFBRSxZQUhZO0FBSXhCQyxrQkFBZ0IsRUFBRTtBQUpNLENBQW5COztBQVFQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLUixVQUFVLENBQUNDLFlBQWhCO0FBQ0UsVUFBTVEsRUFBRSxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxHQUFxQkMsUUFBckIsRUFBWDtBQUNBQyx1RUFBRyxDQUFDQyxTQUFKLEdBQWdCQyxVQUFoQixDQUEyQixRQUEzQixFQUFxQ0MsR0FBckMsQ0FBeUNQLEVBQXpDLEVBQTZDUSxHQUE3QyxpQ0FBc0RWLE1BQU0sQ0FBQ1csT0FBN0Q7QUFBc0VULFVBQUUsRUFBRkE7QUFBdEUsVUFDR1UsSUFESCxDQUNRO0FBQUEsZUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosQ0FBTjtBQUFBLE9BRFIsV0FFUyxVQUFDQyxLQUFEO0FBQUEsZUFBV0YsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVosQ0FBWDtBQUFBLE9BRlQ7QUFHQTs7QUFDRixTQUFLckIsVUFBVSxDQUFDRSxTQUFoQjtBQUNFLDZDQUNLSSxLQURMO0FBRUVULGFBQUssRUFBRVUsTUFBTSxDQUFDVztBQUZoQjs7QUFJRixTQUFLbEIsVUFBVSxDQUFDRyxVQUFoQjtBQUNFLDZDQUNLRyxLQURMO0FBRUVSLGNBQU0sRUFBRVMsTUFBTSxDQUFDVyxPQUFQLElBQWtCO0FBRjVCOztBQUlGLFNBQUtsQixVQUFVLENBQUNJLGdCQUFoQjtBQUNFLFVBQUltQixJQUFJLEdBQUcsQ0FBWDtBQUNBakIsV0FBSyxDQUFDUixNQUFOLENBQWEwQixPQUFiLENBQXFCLFVBQUEzQixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDNEIsUUFBTixHQUFpQkYsSUFBakIsR0FBd0JBLElBQUksR0FBRzFCLEtBQUssQ0FBQzRCLFFBQXJDLEdBQWdERixJQUFJLEdBQUdBLElBQTNEO0FBQUEsT0FBMUI7QUFDQSw2Q0FDS2pCLEtBREw7QUFFRVAsbUJBQVcsRUFBRTtBQUZmOztBQUlGO0FBQ0UsWUFBTSxJQUFJMkIsS0FBSixrQ0FBb0NuQixNQUFNLENBQUNDLElBQTNDLEVBQU47QUF6Qko7QUEyQkQsQ0E1QkQ7O0FBOEJPLElBQU1tQixhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG9CQUNuQkMsd0RBQVUsQ0FBQ3hCLE9BQUQsRUFBVVQsWUFBVixDQURTO0FBQUEsTUFDdENVLEtBRHNDO0FBQUEsTUFDL0J3QixRQUQrQjs7QUFHN0Msc0JBQ0UscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFBNEIsU0FBSyxFQUFFLENBQUN4QixLQUFELEVBQVF3QixRQUFSLENBQW5DO0FBQUEsY0FDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQVJNOztHQUFNRCxhOztLQUFBQSxhO0FBVU4sSUFBTUksUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDdkMsaUJBQUQsQ0FBaEI7QUFBQSxDQUFqQjs7SUFBTXNDLFEiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvbW9zL1tpZF0vZWRpdC5iNTYzZmFkNmNhYTAxODJjODg3ZC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZVJlZHVjZXIgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IGFwcCBmcm9tICcuLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5leHBvcnQgY29uc3QgUHJvbW9TdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIHByb21vOiB7fSxcclxuICBwcm9tb3M6IFtdLFxyXG4gIG1heERpc2NvdW50OiAwLFxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aW9uVHlwZSA9IHtcclxuICBDUkVBVEVfUFJPTU86ICdDUkVBVEVfUFJPTU8nLFxyXG4gIFNFVF9QUk9NTzogJ1NFVF9QUk9NTycsXHJcbiAgU0VUX1BST01PUzogJ1NFVF9QUk9NT1MnLFxyXG4gIEdFVF9NQVhfRElTQ09VTlQ6ICdHRVRfTUFYX0RJU0NPVU5UJywgXHJcbn1cclxuXHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuQ1JFQVRFX1BST01POlxyXG4gICAgICBjb25zdCBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKClcclxuICAgICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb21vcycpLmRvYyhpZCkuc2V0KHsgLi4uYWN0aW9uLnBheWxvYWQsIGlkIH0pXHJcbiAgICAgICAgLnRoZW4oKCkgPT4gY29uc29sZS5sb2coJ3Byb21vIGFncmVnYWRhJykpXHJcbiAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gY29uc29sZS5sb2coJ2Vycm9yIGFsIGFncmVnYXIgdW5hIHByb21vJykpXHJcbiAgICAgIHJldHVyblxyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9QUk9NTzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBwcm9tbzogYWN0aW9uLnBheWxvYWRcclxuICAgICAgfVxyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9QUk9NT1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvbW9zOiBhY3Rpb24ucGF5bG9hZCB8fCBbXSxcclxuICAgICAgfVxyXG4gICAgY2FzZSBBY3Rpb25UeXBlLkdFVF9NQVhfRElTQ09VTlQ6XHJcbiAgICAgIGxldCB0ZW1wID0gMFxyXG4gICAgICBzdGF0ZS5wcm9tb3MuZm9yRWFjaChwcm9tbyA9PiBwcm9tby5kaXNjb3VudCA8IHRlbXAgPyB0ZW1wID0gcHJvbW8uZGlzY291bnQgOiB0ZW1wID0gdGVtcClcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5zdGF0ZSxcclxuICAgICAgICBtYXhEaXNjb3VudDogMVxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IFByb21vUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxQcm9tb1N0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L1Byb21vU3RhdGVDb250ZXh0LlByb3ZpZGVyPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHVzZVByb21vID0gKCkgPT4gdXNlQ29udGV4dChQcm9tb1N0YXRlQ29udGV4dCkiXSwic291cmNlUm9vdCI6IiJ9