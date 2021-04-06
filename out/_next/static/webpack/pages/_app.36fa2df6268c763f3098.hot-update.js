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

  var _useSnackbar = useSnackbar(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    getSettings();
  }, []);

  var getSettings = function getSettings() {
    if (localStorage.getItem('ceibo-urbano-settings')) {
      dispatch({
        type: ConfigActionType.SET_SETTINGS,
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
          }).then(function () {
            enqueueSnackbar('Se ha creado el producto correctamente', {
              variant: 'success'
            });
          })["catch"](function (error) {
            return enqueueSnackbar('Ha ocurrido un error', {
              variant: 'error'
            });
          });
        }

        setSettings(snapshot.data());
        localStorage.setItem('ceibo-urbano-settings', JSON.stringify(settings));
        enqueueSnackbar('Se cargaron correctamente las configuraciones actuales', {
          variant: 'success'
        });
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(ConfigStateContext.Provider, {
    value: [state, dispatch],
    children: children
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 61,
    columnNumber: 5
  }, _this);
};

_s(ConfigProvider, "+niBJ31Yfi6IB3altGzfJAoPUlU=", true);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQ29uZmlnLmNvbnRleHQuanMiXSwibmFtZXMiOlsiQ29uZmlnU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwibWFpbkltYWdlIiwiaWNvbiIsInBob25lIiwiQWN0aW9uVHlwZSIsIlNFVF9TRVRUSU5HUyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiRXJyb3IiLCJDb25maWdQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJjbG9zZVNuYWNrYmFyIiwidXNlRWZmZWN0IiwiZ2V0U2V0dGluZ3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiQ29uZmlnQWN0aW9uVHlwZSIsIkpTT04iLCJwYXJzZSIsImNvbGxlY3Rpb24iLCJpZCIsInRoZW4iLCJzbmFwc2hvdCIsImRhdGEiLCJjcmVhdGVTZXR0aW5ncyIsInNldHRpbmdzIiwidmFyaWFudCIsImVycm9yIiwic2V0U2V0dGluZ3MiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXNlQ29uZmlnIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUVPLElBQU1BLGtCQUFrQixnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUEzQjtBQUVQLElBQU1DLFlBQVksR0FBRztBQUNuQkMsV0FBUyxFQUFFLEVBRFE7QUFFbkJDLE1BQUksRUFBRSxFQUZhO0FBR25CQyxPQUFLLEVBQUU7QUFIWSxDQUFyQjtBQU1PLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsY0FBWSxFQUFFO0FBRFUsQ0FBbkI7O0FBSVAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtMLFVBQVUsQ0FBQ0MsWUFBaEI7QUFDRSwrQkFDS0csTUFBTSxDQUFDRSxPQURaOztBQUdGO0FBQ0UsWUFBTSxJQUFJQyxLQUFKLGtDQUFvQ0gsTUFBTSxDQUFDQyxJQUEzQyxFQUFOO0FBTko7QUFRRCxDQVREOztBQVdPLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ3BCQyx3REFBVSxDQUFDUixPQUFELEVBQVVOLFlBQVYsQ0FEVTtBQUFBLE1BQ3ZDTyxLQUR1QztBQUFBLE1BQ2hDUSxRQURnQzs7QUFBQSxxQkFHSEMsV0FBVyxFQUhSO0FBQUEsTUFHdENDLGVBSHNDLGdCQUd0Q0EsZUFIc0M7QUFBQSxNQUdyQkMsYUFIcUIsZ0JBR3JCQSxhQUhxQjs7QUFLOUNDLHlEQUFTLENBQUMsWUFBTTtBQUNkQyxlQUFXO0FBQ1osR0FGUSxFQUVOLEVBRk0sQ0FBVDs7QUFJQSxNQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxHQUFNO0FBQ3hCLFFBQUlDLFlBQVksQ0FBQ0MsT0FBYixDQUFxQix1QkFBckIsQ0FBSixFQUFtRDtBQUNqRFAsY0FBUSxDQUFDO0FBQ1BOLFlBQUksRUFBRWMsZ0JBQWdCLENBQUNsQixZQURoQjtBQUVQSyxlQUFPLEVBQUVjLElBQUksQ0FBQ0MsS0FBTCxDQUFXSixZQUFZLENBQUNDLE9BQWIsQ0FBcUIsdUJBQXJCLENBQVg7QUFGRixPQUFELENBQVI7QUFJQTtBQUNELEtBTkQsTUFNTztBQUNMQSwrRUFBTyxDQUFDO0FBQUVJLGtCQUFVLEVBQUUsVUFBZDtBQUEwQkMsVUFBRSxFQUFFO0FBQTlCLE9BQUQsQ0FBUCxDQUNHQyxJQURILENBQ1EsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCLFlBQUksQ0FBQ0EsUUFBUSxDQUFDQyxJQUFULEVBQUwsRUFBc0I7QUFDcEJDLDBGQUFjLENBQUM7QUFBRUMsb0JBQVEsRUFBUkE7QUFBRixXQUFELENBQWQsQ0FDR0osSUFESCxDQUNRLFlBQU07QUFDVlgsMkJBQWUsQ0FBQyx3Q0FBRCxFQUEyQztBQUFFZ0IscUJBQU8sRUFBRTtBQUFYLGFBQTNDLENBQWY7QUFDRCxXQUhILFdBSVMsVUFBQ0MsS0FBRDtBQUFBLG1CQUFXakIsZUFBZSxDQUFDLHNCQUFELEVBQXlCO0FBQUVnQixxQkFBTyxFQUFFO0FBQVgsYUFBekIsQ0FBMUI7QUFBQSxXQUpUO0FBS0Q7O0FBQ0RFLG1CQUFXLENBQUNOLFFBQVEsQ0FBQ0MsSUFBVCxFQUFELENBQVg7QUFDQVQsb0JBQVksQ0FBQ2UsT0FBYixDQUFxQix1QkFBckIsRUFBOENaLElBQUksQ0FBQ2EsU0FBTCxDQUFlTCxRQUFmLENBQTlDO0FBQ0FmLHVCQUFlLENBQUMsd0RBQUQsRUFBMkQ7QUFBRWdCLGlCQUFPLEVBQUU7QUFBWCxTQUEzRCxDQUFmO0FBQ0QsT0FaSDtBQWFEO0FBQ0YsR0F0QkQ7O0FBd0JBLHNCQUNFLHFFQUFDLGtCQUFELENBQW9CLFFBQXBCO0FBQTZCLFNBQUssRUFBRSxDQUFDMUIsS0FBRCxFQUFRUSxRQUFSLENBQXBDO0FBQUEsY0FDR0Y7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFLRCxDQXRDTTs7R0FBTUQsYzs7S0FBQUEsYztBQXdDTixJQUFNMEIsU0FBUyxHQUFHLFNBQVpBLFNBQVk7QUFBQTs7QUFBQSxTQUFNQyx3REFBVSxDQUFDMUMsa0JBQUQsQ0FBaEI7QUFBQSxDQUFsQjs7SUFBTXlDLFMiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC4zNmZhMmRmNjI2OGM3NjNmMzA5OC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUNvbnRleHQsIHVzZUVmZmVjdCwgdXNlUmVkdWNlciB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgYXBwLCB7IGNyZWF0ZVNldHRpbmdzLCBnZXRJdGVtLCBlZGl0SXRlbSB9IGZyb20gJy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmV4cG9ydCBjb25zdCBDb25maWdTdGF0ZUNvbnRleHQgPSBSZWFjdC5jcmVhdGVDb250ZXh0KHt9KVxyXG5cclxuY29uc3QgaW5pdGlhbFN0YXRlID0ge1xyXG4gIG1haW5JbWFnZTogJycsXHJcbiAgaWNvbjogJycsXHJcbiAgcGhvbmU6ICcnXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBBY3Rpb25UeXBlID0ge1xyXG4gIFNFVF9TRVRUSU5HUzogJ1NFVF9TRVRUSU5HUycsXHJcbn1cclxuXHJcbmNvbnN0IHJlZHVjZXIgPSAoc3RhdGUsIGFjdGlvbikgPT4ge1xyXG4gIHN3aXRjaCAoYWN0aW9uLnR5cGUpIHtcclxuICAgIGNhc2UgQWN0aW9uVHlwZS5TRVRfU0VUVElOR1M6XHJcbiAgICAgIHJldHVybiB7XHJcbiAgICAgICAgLi4uYWN0aW9uLnBheWxvYWQsXHJcbiAgICAgIH1cclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVW5oYW5kbGVkIGFjdGlvbiB0eXBlOiAke2FjdGlvbi50eXBlfWApXHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnUHJvdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgY29uc3QgW3N0YXRlLCBkaXNwYXRjaF0gPSB1c2VSZWR1Y2VyKHJlZHVjZXIsIGluaXRpYWxTdGF0ZSlcclxuXHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIsIGNsb3NlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldFNldHRpbmdzKClcclxuICB9LCBbXSlcclxuXHJcbiAgY29uc3QgZ2V0U2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NlaWJvLXVyYmFuby1zZXR0aW5ncycpKSB7XHJcbiAgICAgIGRpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBDb25maWdBY3Rpb25UeXBlLlNFVF9TRVRUSU5HUyxcclxuICAgICAgICBwYXlsb2FkOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjZWliby11cmJhbm8tc2V0dGluZ3MnKSlcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZXRJdGVtKHsgY29sbGVjdGlvbjogJ3NldHRpbmdzJywgaWQ6ICdzZXR0aW5ncycgfSlcclxuICAgICAgICAudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICBpZiAoIXNuYXBzaG90LmRhdGEoKSkge1xyXG4gICAgICAgICAgICBjcmVhdGVTZXR0aW5ncyh7IHNldHRpbmdzIH0pXHJcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdTZSBoYSBjcmVhZG8gZWwgcHJvZHVjdG8gY29ycmVjdGFtZW50ZScsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVucXVldWVTbmFja2JhcignSGEgb2N1cnJpZG8gdW4gZXJyb3InLCB7IHZhcmlhbnQ6ICdlcnJvcid9KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFNldHRpbmdzKHNuYXBzaG90LmRhdGEoKSlcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjZWliby11cmJhbm8tc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpXHJcbiAgICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ1NlIGNhcmdhcm9uIGNvcnJlY3RhbWVudGUgbGFzIGNvbmZpZ3VyYWNpb25lcyBhY3R1YWxlcycsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb25maWdTdGF0ZUNvbnRleHQuUHJvdmlkZXIgdmFsdWU9e1tzdGF0ZSwgZGlzcGF0Y2hdfT5cclxuICAgICAge2NoaWxkcmVufVxyXG4gICAgPC9Db25maWdTdGF0ZUNvbnRleHQuUHJvdmlkZXI+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgdXNlQ29uZmlnID0gKCkgPT4gdXNlQ29udGV4dChDb25maWdTdGF0ZUNvbnRleHQpIl0sInNvdXJjZVJvb3QiOiIifQ==