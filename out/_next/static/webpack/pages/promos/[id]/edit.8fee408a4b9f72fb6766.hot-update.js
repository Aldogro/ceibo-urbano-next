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
        maxDiscount: temp
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvUHJvbW8uY29udGV4dC5qcyJdLCJuYW1lcyI6WyJQcm9tb1N0YXRlQ29udGV4dCIsIlJlYWN0IiwiY3JlYXRlQ29udGV4dCIsImluaXRpYWxTdGF0ZSIsInByb21vIiwicHJvbW9zIiwibWF4RGlzY291bnQiLCJBY3Rpb25UeXBlIiwiQ1JFQVRFX1BST01PIiwiU0VUX1BST01PIiwiU0VUX1BST01PUyIsIkdFVF9NQVhfRElTQ09VTlQiLCJyZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJ0eXBlIiwiaWQiLCJEYXRlIiwiZ2V0VGltZSIsInRvU3RyaW5nIiwiYXBwIiwiZmlyZXN0b3JlIiwiY29sbGVjdGlvbiIsImRvYyIsInNldCIsInBheWxvYWQiLCJ0aGVuIiwiY29uc29sZSIsImxvZyIsImVycm9yIiwidGVtcCIsImZvckVhY2giLCJkaXNjb3VudCIsIkVycm9yIiwiUHJvbW9Qcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlUHJvbW8iLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBRU8sSUFBTUEsaUJBQWlCLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQTFCO0FBRVAsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxPQUFLLEVBQUUsRUFEWTtBQUVuQkMsUUFBTSxFQUFFLEVBRlc7QUFHbkJDLGFBQVcsRUFBRTtBQUhNLENBQXJCO0FBTU8sSUFBTUMsVUFBVSxHQUFHO0FBQ3hCQyxjQUFZLEVBQUUsY0FEVTtBQUV4QkMsV0FBUyxFQUFFLFdBRmE7QUFHeEJDLFlBQVUsRUFBRSxZQUhZO0FBSXhCQyxrQkFBZ0IsRUFBRTtBQUpNLENBQW5COztBQVFQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLUixVQUFVLENBQUNDLFlBQWhCO0FBQ0UsVUFBTVEsRUFBRSxHQUFHLElBQUlDLElBQUosR0FBV0MsT0FBWCxHQUFxQkMsUUFBckIsRUFBWDtBQUNBQyx1RUFBRyxDQUFDQyxTQUFKLEdBQWdCQyxVQUFoQixDQUEyQixRQUEzQixFQUFxQ0MsR0FBckMsQ0FBeUNQLEVBQXpDLEVBQTZDUSxHQUE3QyxpQ0FBc0RWLE1BQU0sQ0FBQ1csT0FBN0Q7QUFBc0VULFVBQUUsRUFBRkE7QUFBdEUsVUFDR1UsSUFESCxDQUNRO0FBQUEsZUFBTUMsT0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosQ0FBTjtBQUFBLE9BRFIsV0FFUyxVQUFDQyxLQUFEO0FBQUEsZUFBV0YsT0FBTyxDQUFDQyxHQUFSLENBQVksNEJBQVosQ0FBWDtBQUFBLE9BRlQ7QUFHQTs7QUFDRixTQUFLckIsVUFBVSxDQUFDRSxTQUFoQjtBQUNFLDZDQUNLSSxLQURMO0FBRUVULGFBQUssRUFBRVUsTUFBTSxDQUFDVztBQUZoQjs7QUFJRixTQUFLbEIsVUFBVSxDQUFDRyxVQUFoQjtBQUNFLDZDQUNLRyxLQURMO0FBRUVSLGNBQU0sRUFBRVMsTUFBTSxDQUFDVyxPQUFQLElBQWtCO0FBRjVCOztBQUlGLFNBQUtsQixVQUFVLENBQUNJLGdCQUFoQjtBQUNFLFVBQUltQixJQUFJLEdBQUcsQ0FBWDtBQUNBakIsV0FBSyxDQUFDUixNQUFOLENBQWEwQixPQUFiLENBQXFCLFVBQUEzQixLQUFLO0FBQUEsZUFBSUEsS0FBSyxDQUFDNEIsUUFBTixHQUFpQkYsSUFBakIsR0FBd0JBLElBQUksR0FBRzFCLEtBQUssQ0FBQzRCLFFBQXJDLEdBQWdERixJQUFJLEdBQUdBLElBQTNEO0FBQUEsT0FBMUI7QUFDQSw2Q0FDS2pCLEtBREw7QUFFRVAsbUJBQVcsRUFBRXdCO0FBRmY7O0FBSUY7QUFDRSxZQUFNLElBQUlHLEtBQUosa0NBQW9DbkIsTUFBTSxDQUFDQyxJQUEzQyxFQUFOO0FBekJKO0FBMkJELENBNUJEOztBQThCTyxJQUFNbUIsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUFrQjtBQUFBOztBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxvQkFDbkJDLHdEQUFVLENBQUN4QixPQUFELEVBQVVULFlBQVYsQ0FEUztBQUFBLE1BQ3RDVSxLQURzQztBQUFBLE1BQy9Cd0IsUUFEK0I7O0FBRzdDLHNCQUNFLHFFQUFDLGlCQUFELENBQW1CLFFBQW5CO0FBQTRCLFNBQUssRUFBRSxDQUFDeEIsS0FBRCxFQUFRd0IsUUFBUixDQUFuQztBQUFBLGNBQ0dGO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBS0QsQ0FSTTs7R0FBTUQsYTs7S0FBQUEsYTtBQVVOLElBQU1JLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUE7O0FBQUEsU0FBTUMsd0RBQVUsQ0FBQ3ZDLGlCQUFELENBQWhCO0FBQUEsQ0FBakI7O0lBQU1zQyxRIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb21vcy9baWRdL2VkaXQuOGZlZTQwOGE0YjlmNzJmYjY3NjYuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VDb250ZXh0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuZXhwb3J0IGNvbnN0IFByb21vU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBwcm9tbzoge30sXHJcbiAgcHJvbW9zOiBbXSxcclxuICBtYXhEaXNjb3VudDogMCxcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGUgPSB7XHJcbiAgQ1JFQVRFX1BST01POiAnQ1JFQVRFX1BST01PJyxcclxuICBTRVRfUFJPTU86ICdTRVRfUFJPTU8nLFxyXG4gIFNFVF9QUk9NT1M6ICdTRVRfUFJPTU9TJyxcclxuICBHRVRfTUFYX0RJU0NPVU5UOiAnR0VUX01BWF9ESVNDT1VOVCcsIFxyXG59XHJcblxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlLkNSRUFURV9QUk9NTzpcclxuICAgICAgY29uc3QgaWQgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpXHJcbiAgICAgIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9tb3MnKS5kb2MoaWQpLnNldCh7IC4uLmFjdGlvbi5wYXlsb2FkLCBpZCB9KVxyXG4gICAgICAgIC50aGVuKCgpID0+IGNvbnNvbGUubG9nKCdwcm9tbyBhZ3JlZ2FkYScpKVxyXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGNvbnNvbGUubG9nKCdlcnJvciBhbCBhZ3JlZ2FyIHVuYSBwcm9tbycpKVxyXG4gICAgICByZXR1cm5cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfUFJPTU86XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgcHJvbW86IGFjdGlvbi5wYXlsb2FkXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfUFJPTU9TOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLnN0YXRlLFxyXG4gICAgICAgIHByb21vczogYWN0aW9uLnBheWxvYWQgfHwgW10sXHJcbiAgICAgIH1cclxuICAgIGNhc2UgQWN0aW9uVHlwZS5HRVRfTUFYX0RJU0NPVU5UOlxyXG4gICAgICBsZXQgdGVtcCA9IDBcclxuICAgICAgc3RhdGUucHJvbW9zLmZvckVhY2gocHJvbW8gPT4gcHJvbW8uZGlzY291bnQgPCB0ZW1wID8gdGVtcCA9IHByb21vLmRpc2NvdW50IDogdGVtcCA9IHRlbXApXHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uc3RhdGUsXHJcbiAgICAgICAgbWF4RGlzY291bnQ6IHRlbXBcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBQcm9tb1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UHJvbW9TdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Qcm9tb1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VQcm9tbyA9ICgpID0+IHVzZUNvbnRleHQoUHJvbW9TdGF0ZUNvbnRleHQpIl0sInNvdXJjZVJvb3QiOiIifQ==