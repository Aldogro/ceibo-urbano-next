webpackHotUpdate_N_E("pages/_app",{

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
        /* if (!snapshot.data()) {
          
          createSettings({ settings })
            .catch((error) => enqueueSnackbar('Ha ocurrido un error', { variant: 'error' }))
        } */
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQ29uZmlnLmNvbnRleHQuanMiXSwibmFtZXMiOlsiQ29uZmlnU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwiaWNvbiIsInBob25lIiwiQWN0aW9uVHlwZSIsIlNFVF9TRVRUSU5HUyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiRXJyb3IiLCJDb25maWdQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJjbG9zZVNuYWNrYmFyIiwidXNlRWZmZWN0IiwiZ2V0U2V0dGluZ3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY29sbGVjdGlvbiIsImlkIiwidGhlbiIsInNuYXBzaG90IiwiZGF0YSIsInNldEl0ZW0iLCJzdHJpbmdpZnkiLCJ1c2VDb25maWciLCJ1c2VDb250ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBR08sSUFBTUEsa0JBQWtCLGdCQUFHQyw0Q0FBSyxDQUFDQyxhQUFOLENBQW9CLEVBQXBCLENBQTNCO0FBRVAsSUFBTUMsWUFBWSxHQUFHO0FBQ25CQyxNQUFJLEVBQUUsRUFEYTtBQUVuQkMsT0FBSyxFQUFFO0FBRlksQ0FBckI7QUFLTyxJQUFNQyxVQUFVLEdBQUc7QUFDeEJDLGNBQVksRUFBRTtBQURVLENBQW5COztBQUlQLElBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLENBQUNDLEtBQUQsRUFBUUMsTUFBUixFQUFtQjtBQUNqQyxVQUFRQSxNQUFNLENBQUNDLElBQWY7QUFDRSxTQUFLTCxVQUFVLENBQUNDLFlBQWhCO0FBQ0UsK0JBQ0tHLE1BQU0sQ0FBQ0UsT0FEWjs7QUFHRjtBQUNFLFlBQU0sSUFBSUMsS0FBSixrQ0FBb0NILE1BQU0sQ0FBQ0MsSUFBM0MsRUFBTjtBQU5KO0FBUUQsQ0FURDs7QUFXTyxJQUFNRyxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLE9BQWtCO0FBQUE7O0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLG9CQUNwQkMsd0RBQVUsQ0FBQ1IsT0FBRCxFQUFVTCxZQUFWLENBRFU7QUFBQSxNQUN2Q00sS0FEdUM7QUFBQSxNQUNoQ1EsUUFEZ0M7O0FBQUEscUJBR0hDLDZEQUFXLEVBSFI7QUFBQSxNQUd0Q0MsZUFIc0MsZ0JBR3RDQSxlQUhzQztBQUFBLE1BR3JCQyxhQUhxQixnQkFHckJBLGFBSHFCOztBQUs5Q0MseURBQVMsQ0FBQyxZQUFNO0FBQ2RDLGVBQVc7QUFDWixHQUZRLEVBRU4sRUFGTSxDQUFUOztBQUlBLE1BQU1BLFdBQVcsR0FBRyxTQUFkQSxXQUFjLEdBQU07QUFDeEIsUUFBSUMsWUFBWSxDQUFDQyxPQUFiLENBQXFCLHVCQUFyQixDQUFKLEVBQW1EO0FBQ2pEUCxjQUFRLENBQUM7QUFDUE4sWUFBSSxFQUFFTCxVQUFVLENBQUNDLFlBRFY7QUFFUEssZUFBTyxFQUFFYSxJQUFJLENBQUNDLEtBQUwsQ0FBV0gsWUFBWSxDQUFDQyxPQUFiLENBQXFCLHVCQUFyQixDQUFYO0FBRkYsT0FBRCxDQUFSO0FBSUE7QUFDRCxLQU5ELE1BTU87QUFDTEEsK0VBQU8sQ0FBQztBQUFFRyxrQkFBVSxFQUFFLFVBQWQ7QUFBMEJDLFVBQUUsRUFBRTtBQUE5QixPQUFELENBQVAsQ0FDR0MsSUFESCxDQUNRLFVBQUFDLFFBQVEsRUFBSTtBQUNoQjtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ1ViLGdCQUFRLENBQUM7QUFDUE4sY0FBSSxFQUFFTCxVQUFVLENBQUNDLFlBRFY7QUFFUEssaUJBQU8sRUFBRWtCLFFBQVEsQ0FBQ0MsSUFBVDtBQUZGLFNBQUQsQ0FBUjtBQUlBUixvQkFBWSxDQUFDUyxPQUFiLENBQXFCLHVCQUFyQixFQUE4Q1AsSUFBSSxDQUFDUSxTQUFMLENBQWVILFFBQVEsQ0FBQ0MsSUFBVCxFQUFmLENBQTlDO0FBQ0QsT0FaSDtBQWFEO0FBQ0YsR0F0QkQ7O0FBd0JBLHNCQUNFLHFFQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQTZCLFNBQUssRUFBRSxDQUFDdEIsS0FBRCxFQUFRUSxRQUFSLENBQXBDO0FBQUEsY0FDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQXRDTTs7R0FBTUQsYztVQUdnQ0kscUQ7OztLQUhoQ0osYztBQXdDTixJQUFNb0IsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDbkMsa0JBQUQsQ0FBaEI7QUFBQSxDQUFsQjs7SUFBTWtDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC5jZTRkMjNhNjEzZTRkNjQxNWRmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBjcmVhdGVTZXR0aW5ncywgZ2V0SXRlbSB9IGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZ1N0YXRlQ29udGV4dCA9IFJlYWN0LmNyZWF0ZUNvbnRleHQoe30pXHJcblxyXG5jb25zdCBpbml0aWFsU3RhdGUgPSB7XHJcbiAgaWNvbjogJycsXHJcbiAgcGhvbmU6ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY3Rpb25UeXBlID0ge1xyXG4gIFNFVF9TRVRUSU5HUzogJ1NFVF9TRVRUSU5HUycsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfU0VUVElOR1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIsIGNsb3NlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFNldHRpbmdzKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZ2V0U2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NlaWJvLXVyYmFuby1zZXR0aW5ncycpKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9TRVRUSU5HUyxcclxuICAgICAgICBwYXlsb2FkOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjZWliby11cmJhbm8tc2V0dGluZ3MnKSlcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZXRJdGVtKHsgY29sbGVjdGlvbjogJ3NldHRpbmdzJywgaWQ6ICdzZXR0aW5ncycgfSlcclxuICAgICAgICAudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICAvKiBpZiAoIXNuYXBzaG90LmRhdGEoKSkge1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgY3JlYXRlU2V0dGluZ3MoeyBzZXR0aW5ncyB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVucXVldWVTbmFja2JhcignSGEgb2N1cnJpZG8gdW4gZXJyb3InLCB7IHZhcmlhbnQ6ICdlcnJvcicgfSkpXHJcbiAgICAgICAgICB9ICovXHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VUX1NFVFRJTkdTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2VpYm8tdXJiYW5vLXNldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoc25hcHNob3QuZGF0YSgpKSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb25maWdTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db25maWdTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ29uZmlnID0gKCkgPT4gdXNlQ29udGV4dChDb25maWdTdGF0ZUNvbnRleHQpIl0sInNvdXJjZVJvb3QiOiIifQ==