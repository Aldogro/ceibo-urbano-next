webpackHotUpdate_N_E("pages/settings",{

/***/ "./services/Config.context.js":
/*!************************************!*\
  !*** ./services/Config.context.js ***!
  \************************************/
/*! exports provided: ConfigStateContext, ActionType, ConfigProvider, useConfig */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigStateContext", function() { return ConfigStateContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionType", function() { return ActionType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigProvider", function() { return ConfigProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useConfig", function() { return useConfig; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../firebase/firebase.config */ "./firebase/firebase.config.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\services\\Config.context.js",
    _this = undefined,
    _s = $RefreshSig$(),
    _s2 = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }




var ConfigStateContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createContext({});
var initialState = {
  mainImage: '',
  icon: '',
  phone: ''
};
var ActionType = {
  SET_SETTINGS: 'SET_SETTINGS'
};

var reducer = function reducer(state, action) {
  switch (action.type) {
    case ActionType.SET_SETTINGS:
      return _objectSpread({}, action.payload);

    default:
      throw new Error("Unhandled action type: ".concat(action.type));
  }
};

var ConfigProvider = function ConfigProvider(_ref) {
  _s();

  var children = _ref.children;

  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_2__["useReducer"])(reducer, initialState),
      state = _useReducer[0],
      dispatch = _useReducer[1];

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getSettings();
  }, []);

  var getSettings = function getSettings() {
    if (localStorage.getItem('ceibo-urbano-settings')) {
      dispatch({
        type: ActionType.SET_SETTINGS,
        payload: JSON.parse(localStorage.getItem('ceibo-urbano-settings'))
      });
      return;
    } else {
      Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_3__["getItem"])({
        collection: 'settings',
        id: 'settings'
      }).then(function (snapshot) {
        if (!snapshot.data()) {
          Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_3__["createSettings"])({
            settings: settings
          })["catch"](function (error) {
            return enqueueSnackbar('Ha ocurrido un error', {
              variant: 'error'
            });
          });
        }

        dispatch({
          type: ActionType.SET_SETTINGS,
          payload: snapshot.data()
        });
        localStorage.setItem('ceibo-urbano-settings', JSON.stringify(snapshot.data()));
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ConfigStateContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 62,
    columnNumber: 5
  }, _this);
};

_s(ConfigProvider, "+niBJ31Yfi6IB3altGzfJAoPUlU=", false, function () {
  return [notistack__WEBPACK_IMPORTED_MODULE_4__["useSnackbar"]];
});

_c = ConfigProvider;
var useConfig = function useConfig() {
  _s2();

  return Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(ConfigStateContext);
};

_s2(useConfig, "gDsCjeeItUuvgOWf1v4qoK9RF6k=");

var _c;

$RefreshReg$(_c, "ConfigProvider");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQ29uZmlnLmNvbnRleHQuanMiXSwibmFtZXMiOlsiQ29uZmlnU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwibWFpbkltYWdlIiwiaWNvbiIsInBob25lIiwiQWN0aW9uVHlwZSIsIlNFVF9TRVRUSU5HUyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiRXJyb3IiLCJDb25maWdQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJjbG9zZVNuYWNrYmFyIiwidXNlRWZmZWN0IiwiZ2V0U2V0dGluZ3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY29sbGVjdGlvbiIsImlkIiwidGhlbiIsInNuYXBzaG90IiwiZGF0YSIsImNyZWF0ZVNldHRpbmdzIiwic2V0dGluZ3MiLCJlcnJvciIsInZhcmlhbnQiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXNlQ29uZmlnIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLGtCQUFrQixnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUEzQjtBQUVQLElBQU1DLFlBQVksR0FBRztBQUNuQkMsV0FBUyxFQUFFLEVBRFE7QUFFbkJDLE1BQUksRUFBRSxFQUZhO0FBR25CQyxPQUFLLEVBQUU7QUFIWSxDQUFyQjtBQU1PLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsY0FBWSxFQUFFO0FBRFUsQ0FBbkI7O0FBSVAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtMLFVBQVUsQ0FBQ0MsWUFBaEI7QUFDRSwrQkFDS0csTUFBTSxDQUFDRSxPQURaOztBQUdGO0FBQ0UsWUFBTSxJQUFJQyxLQUFKLGtDQUFvQ0gsTUFBTSxDQUFDQyxJQUEzQyxFQUFOO0FBTko7QUFRRCxDQVREOztBQVdPLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ3BCQyx3REFBVSxDQUFDUixPQUFELEVBQVVOLFlBQVYsQ0FEVTtBQUFBLE1BQ3ZDTyxLQUR1QztBQUFBLE1BQ2hDUSxRQURnQzs7QUFBQSxxQkFHSEMsNkRBQVcsRUFIUjtBQUFBLE1BR3RDQyxlQUhzQyxnQkFHdENBLGVBSHNDO0FBQUEsTUFHckJDLGFBSHFCLGdCQUdyQkEsYUFIcUI7O0FBSzlDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsZUFBVztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsdUJBQXJCLENBQUosRUFBbUQ7QUFDakRQLGNBQVEsQ0FBQztBQUNQTixZQUFJLEVBQUVMLFVBQVUsQ0FBQ0MsWUFEVjtBQUVQSyxlQUFPLEVBQUVhLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsdUJBQXJCLENBQVg7QUFGRixPQUFELENBQVI7QUFJQTtBQUNELEtBTkQsTUFNTztBQUNMQSwrRUFBTyxDQUFDO0FBQUVHLGtCQUFVLEVBQUUsVUFBZDtBQUEwQkMsVUFBRSxFQUFFO0FBQTlCLE9BQUQsQ0FBUCxDQUNHQyxJQURILENBQ1EsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCLFlBQUksQ0FBQ0EsUUFBUSxDQUFDQyxJQUFULEVBQUwsRUFBc0I7QUFDcEJDLDBGQUFjLENBQUM7QUFBRUMsb0JBQVEsRUFBUkE7QUFBRixXQUFELENBQWQsVUFDUyxVQUFDQyxLQUFEO0FBQUEsbUJBQVdmLGVBQWUsQ0FBQyxzQkFBRCxFQUF5QjtBQUFFZ0IscUJBQU8sRUFBRTtBQUFYLGFBQXpCLENBQTFCO0FBQUEsV0FEVDtBQUVEOztBQUNEbEIsZ0JBQVEsQ0FBQztBQUNQTixjQUFJLEVBQUVMLFVBQVUsQ0FBQ0MsWUFEVjtBQUVQSyxpQkFBTyxFQUFFa0IsUUFBUSxDQUFDQyxJQUFUO0FBRkYsU0FBRCxDQUFSO0FBSUFSLG9CQUFZLENBQUNhLE9BQWIsQ0FBcUIsdUJBQXJCLEVBQThDWCxJQUFJLENBQUNZLFNBQUwsQ0FBZVAsUUFBUSxDQUFDQyxJQUFULEVBQWYsQ0FBOUM7QUFDRCxPQVhIO0FBWUQ7QUFDRixHQXJCRDs7QUF1QkEsc0JBQ0UscUVBQUMsa0JBQUQsQ0FBb0IsUUFBcEI7QUFBNkIsU0FBSyxFQUFFLENBQUN0QixLQUFELEVBQVFRLFFBQVIsQ0FBcEM7QUFBQSxjQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBckNNOztHQUFNRCxjO1VBR2dDSSxxRDs7O0tBSGhDSixjO0FBdUNOLElBQU13QixTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBOztBQUFBLFNBQU1DLHdEQUFVLENBQUN4QyxrQkFBRCxDQUFoQjtBQUFBLENBQWxCOztJQUFNdUMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy44MTJlNTRmZjIwYzkwNjM0MGY5ZS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXBwLCB7IGNyZWF0ZVNldHRpbmdzLCBnZXRJdGVtLCBlZGl0SXRlbSB9IGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZ1N0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgbWFpbkltYWdlOiAnJyxcclxuICBpY29uOiAnJyxcclxuICBwaG9uZTogJydcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IEFjdGlvblR5cGUgPSB7XHJcbiAgU0VUX1NFVFRJTkdTOiAnU0VUX1NFVFRJTkdTJyxcclxufVxyXG5cclxuY29uc3QgcmVkdWNlciA9IChzdGF0ZSwgYWN0aW9uKSA9PiB7XHJcbiAgc3dpdGNoIChhY3Rpb24udHlwZSkge1xyXG4gICAgY2FzZSBBY3Rpb25UeXBlLlNFVF9TRVRUSU5HUzpcclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICAuLi5hY3Rpb24ucGF5bG9hZCxcclxuICAgICAgfVxyXG4gICAgZGVmYXVsdDpcclxuICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmhhbmRsZWQgYWN0aW9uIHR5cGU6ICR7YWN0aW9uLnR5cGV9YClcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBDb25maWdQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcclxuICBjb25zdCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIocmVkdWNlciwgaW5pdGlhbFN0YXRlKVxyXG5cclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciwgY2xvc2VTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0U2V0dGluZ3MoKVxyXG4gIH0sIFtdKVxyXG5cclxuICBjb25zdCBnZXRTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2VpYm8tdXJiYW5vLXNldHRpbmdzJykpIHtcclxuICAgICAgZGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VUX1NFVFRJTkdTLFxyXG4gICAgICAgIHBheWxvYWQ6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NlaWJvLXVyYmFuby1zZXR0aW5ncycpKVxyXG4gICAgICB9KVxyXG4gICAgICByZXR1cm5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIGdldEl0ZW0oeyBjb2xsZWN0aW9uOiAnc2V0dGluZ3MnLCBpZDogJ3NldHRpbmdzJyB9KVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IHtcclxuICAgICAgICAgIGlmICghc25hcHNob3QuZGF0YSgpKSB7XHJcbiAgICAgICAgICAgIGNyZWF0ZVNldHRpbmdzKHsgc2V0dGluZ3MgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlbnF1ZXVlU25hY2tiYXIoJ0hhIG9jdXJyaWRvIHVuIGVycm9yJywgeyB2YXJpYW50OiAnZXJyb3InfSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VUX1NFVFRJTkdTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2VpYm8tdXJiYW5vLXNldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoc25hcHNob3QuZGF0YSgpKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb25maWdTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db25maWdTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ29uZmlnID0gKCkgPT4gdXNlQ29udGV4dChDb25maWdTdGF0ZUNvbnRleHQpIl0sInNvdXJjZVJvb3QiOiIifQ==