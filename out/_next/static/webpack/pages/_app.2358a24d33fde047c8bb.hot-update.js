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

        dispatch({
          type: ActionType.SET_SETTINGS,
          payload: snapshot.data()
        });
        localStorage.setItem('ceibo-urbano-settings', JSON.stringify(snapshot.data()));
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
    lineNumber: 66,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc2VydmljZXMvQ29uZmlnLmNvbnRleHQuanMiXSwibmFtZXMiOlsiQ29uZmlnU3RhdGVDb250ZXh0IiwiUmVhY3QiLCJjcmVhdGVDb250ZXh0IiwiaW5pdGlhbFN0YXRlIiwibWFpbkltYWdlIiwiaWNvbiIsInBob25lIiwiQWN0aW9uVHlwZSIsIlNFVF9TRVRUSU5HUyIsInJlZHVjZXIiLCJzdGF0ZSIsImFjdGlvbiIsInR5cGUiLCJwYXlsb2FkIiwiRXJyb3IiLCJDb25maWdQcm92aWRlciIsImNoaWxkcmVuIiwidXNlUmVkdWNlciIsImRpc3BhdGNoIiwidXNlU25hY2tiYXIiLCJlbnF1ZXVlU25hY2tiYXIiLCJjbG9zZVNuYWNrYmFyIiwidXNlRWZmZWN0IiwiZ2V0U2V0dGluZ3MiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiSlNPTiIsInBhcnNlIiwiY29sbGVjdGlvbiIsImlkIiwidGhlbiIsInNuYXBzaG90IiwiZGF0YSIsImNyZWF0ZVNldHRpbmdzIiwic2V0dGluZ3MiLCJ2YXJpYW50IiwiZXJyb3IiLCJzZXRJdGVtIiwic3RyaW5naWZ5IiwidXNlQ29uZmlnIiwidXNlQ29udGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUdPLElBQU1BLGtCQUFrQixnQkFBR0MsNENBQUssQ0FBQ0MsYUFBTixDQUFvQixFQUFwQixDQUEzQjtBQUVQLElBQU1DLFlBQVksR0FBRztBQUNuQkMsV0FBUyxFQUFFLEVBRFE7QUFFbkJDLE1BQUksRUFBRSxFQUZhO0FBR25CQyxPQUFLLEVBQUU7QUFIWSxDQUFyQjtBQU1PLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsY0FBWSxFQUFFO0FBRFUsQ0FBbkI7O0FBSVAsSUFBTUMsT0FBTyxHQUFHLFNBQVZBLE9BQVUsQ0FBQ0MsS0FBRCxFQUFRQyxNQUFSLEVBQW1CO0FBQ2pDLFVBQVFBLE1BQU0sQ0FBQ0MsSUFBZjtBQUNFLFNBQUtMLFVBQVUsQ0FBQ0MsWUFBaEI7QUFDRSwrQkFDS0csTUFBTSxDQUFDRSxPQURaOztBQUdGO0FBQ0UsWUFBTSxJQUFJQyxLQUFKLGtDQUFvQ0gsTUFBTSxDQUFDQyxJQUEzQyxFQUFOO0FBTko7QUFRRCxDQVREOztBQVdPLElBQU1HLGNBQWMsR0FBRyxTQUFqQkEsY0FBaUIsT0FBa0I7QUFBQTs7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsb0JBQ3BCQyx3REFBVSxDQUFDUixPQUFELEVBQVVOLFlBQVYsQ0FEVTtBQUFBLE1BQ3ZDTyxLQUR1QztBQUFBLE1BQ2hDUSxRQURnQzs7QUFBQSxxQkFHSEMsNkRBQVcsRUFIUjtBQUFBLE1BR3RDQyxlQUhzQyxnQkFHdENBLGVBSHNDO0FBQUEsTUFHckJDLGFBSHFCLGdCQUdyQkEsYUFIcUI7O0FBSzlDQyx5REFBUyxDQUFDLFlBQU07QUFDZEMsZUFBVztBQUNaLEdBRlEsRUFFTixFQUZNLENBQVQ7O0FBSUEsTUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixRQUFJQyxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsdUJBQXJCLENBQUosRUFBbUQ7QUFDakRQLGNBQVEsQ0FBQztBQUNQTixZQUFJLEVBQUVMLFVBQVUsQ0FBQ0MsWUFEVjtBQUVQSyxlQUFPLEVBQUVhLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxZQUFZLENBQUNDLE9BQWIsQ0FBcUIsdUJBQXJCLENBQVg7QUFGRixPQUFELENBQVI7QUFJQTtBQUNELEtBTkQsTUFNTztBQUNMQSwrRUFBTyxDQUFDO0FBQUVHLGtCQUFVLEVBQUUsVUFBZDtBQUEwQkMsVUFBRSxFQUFFO0FBQTlCLE9BQUQsQ0FBUCxDQUNHQyxJQURILENBQ1EsVUFBQUMsUUFBUSxFQUFJO0FBQ2hCLFlBQUksQ0FBQ0EsUUFBUSxDQUFDQyxJQUFULEVBQUwsRUFBc0I7QUFDcEJDLDBGQUFjLENBQUM7QUFBRUMsb0JBQVEsRUFBUkE7QUFBRixXQUFELENBQWQsQ0FDR0osSUFESCxDQUNRLFlBQU07QUFDVlYsMkJBQWUsQ0FBQyx3Q0FBRCxFQUEyQztBQUFFZSxxQkFBTyxFQUFFO0FBQVgsYUFBM0MsQ0FBZjtBQUNELFdBSEgsV0FJUyxVQUFDQyxLQUFEO0FBQUEsbUJBQVdoQixlQUFlLENBQUMsc0JBQUQsRUFBeUI7QUFBRWUscUJBQU8sRUFBRTtBQUFYLGFBQXpCLENBQTFCO0FBQUEsV0FKVDtBQUtEOztBQUNEakIsZ0JBQVEsQ0FBQztBQUNQTixjQUFJLEVBQUVMLFVBQVUsQ0FBQ0MsWUFEVjtBQUVQSyxpQkFBTyxFQUFFa0IsUUFBUSxDQUFDQyxJQUFUO0FBRkYsU0FBRCxDQUFSO0FBSUFSLG9CQUFZLENBQUNhLE9BQWIsQ0FBcUIsdUJBQXJCLEVBQThDWCxJQUFJLENBQUNZLFNBQUwsQ0FBZVAsUUFBUSxDQUFDQyxJQUFULEVBQWYsQ0FBOUM7QUFDQVosdUJBQWUsQ0FBQyx3REFBRCxFQUEyRDtBQUFFZSxpQkFBTyxFQUFFO0FBQVgsU0FBM0QsQ0FBZjtBQUNELE9BZkg7QUFnQkQ7QUFDRixHQXpCRDs7QUEyQkEsc0JBQ0UscUVBQUMsa0JBQUQsQ0FBb0IsUUFBcEI7QUFBNkIsU0FBSyxFQUFFLENBQUN6QixLQUFELEVBQVFRLFFBQVIsQ0FBcEM7QUFBQSxjQUNHRjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQUtELENBekNNOztHQUFNRCxjO1VBR2dDSSxxRDs7O0tBSGhDSixjO0FBMkNOLElBQU13QixTQUFTLEdBQUcsU0FBWkEsU0FBWTtBQUFBOztBQUFBLFNBQU1DLHdEQUFVLENBQUN4QyxrQkFBRCxDQUFoQjtBQUFBLENBQWxCOztJQUFNdUMsUyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLjIzNThhMjRkMzNmZGUwNDdjOGJiLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VSZWR1Y2VyIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBhcHAsIHsgY3JlYXRlU2V0dGluZ3MsIGdldEl0ZW0sIGVkaXRJdGVtIH0gZnJvbSAnLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjaydcclxuXHJcblxyXG5leHBvcnQgY29uc3QgQ29uZmlnU3RhdGVDb250ZXh0ID0gUmVhY3QuY3JlYXRlQ29udGV4dCh7fSlcclxuXHJcbmNvbnN0IGluaXRpYWxTdGF0ZSA9IHtcclxuICBtYWluSW1hZ2U6ICcnLFxyXG4gIGljb246ICcnLFxyXG4gIHBob25lOiAnJ1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgQWN0aW9uVHlwZSA9IHtcclxuICBTRVRfU0VUVElOR1M6ICdTRVRfU0VUVElOR1MnLFxyXG59XHJcblxyXG5jb25zdCByZWR1Y2VyID0gKHN0YXRlLCBhY3Rpb24pID0+IHtcclxuICBzd2l0Y2ggKGFjdGlvbi50eXBlKSB7XHJcbiAgICBjYXNlIEFjdGlvblR5cGUuU0VUX1NFVFRJTkdTOlxyXG4gICAgICByZXR1cm4ge1xyXG4gICAgICAgIC4uLmFjdGlvbi5wYXlsb2FkLFxyXG4gICAgICB9XHJcbiAgICBkZWZhdWx0OlxyXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuaGFuZGxlZCBhY3Rpb24gdHlwZTogJHthY3Rpb24udHlwZX1gKVxyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IENvbmZpZ1Byb3ZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xyXG4gIGNvbnN0IFtzdGF0ZSwgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihyZWR1Y2VyLCBpbml0aWFsU3RhdGUpXHJcblxyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyLCBjbG9zZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXRTZXR0aW5ncygpXHJcbiAgfSwgW10pXHJcblxyXG4gIGNvbnN0IGdldFNldHRpbmdzID0gKCkgPT4ge1xyXG4gICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjZWliby11cmJhbm8tc2V0dGluZ3MnKSkge1xyXG4gICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgdHlwZTogQWN0aW9uVHlwZS5TRVRfU0VUVElOR1MsXHJcbiAgICAgICAgcGF5bG9hZDogSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2VpYm8tdXJiYW5vLXNldHRpbmdzJykpXHJcbiAgICAgIH0pXHJcbiAgICAgIHJldHVyblxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgZ2V0SXRlbSh7IGNvbGxlY3Rpb246ICdzZXR0aW5ncycsIGlkOiAnc2V0dGluZ3MnIH0pXHJcbiAgICAgICAgLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgICAgICAgaWYgKCFzbmFwc2hvdC5kYXRhKCkpIHtcclxuICAgICAgICAgICAgY3JlYXRlU2V0dGluZ3MoeyBzZXR0aW5ncyB9KVxyXG4gICAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGVucXVldWVTbmFja2JhcignU2UgaGEgY3JlYWRvIGVsIHByb2R1Y3RvIGNvcnJlY3RhbWVudGUnLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJ30pXHJcbiAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlbnF1ZXVlU25hY2tiYXIoJ0hhIG9jdXJyaWRvIHVuIGVycm9yJywgeyB2YXJpYW50OiAnZXJyb3InfSkpXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICBkaXNwYXRjaCh7XHJcbiAgICAgICAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VUX1NFVFRJTkdTLFxyXG4gICAgICAgICAgICBwYXlsb2FkOiBzbmFwc2hvdC5kYXRhKClcclxuICAgICAgICAgIH0pXHJcbiAgICAgICAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnY2VpYm8tdXJiYW5vLXNldHRpbmdzJywgSlNPTi5zdHJpbmdpZnkoc25hcHNob3QuZGF0YSgpKSlcclxuICAgICAgICAgIGVucXVldWVTbmFja2JhcignU2UgY2FyZ2Fyb24gY29ycmVjdGFtZW50ZSBsYXMgY29uZmlndXJhY2lvbmVzIGFjdHVhbGVzJywgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbmZpZ1N0YXRlQ29udGV4dC5Qcm92aWRlciB2YWx1ZT17W3N0YXRlLCBkaXNwYXRjaF19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NvbmZpZ1N0YXRlQ29udGV4dC5Qcm92aWRlcj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1c2VDb25maWcgPSAoKSA9PiB1c2VDb250ZXh0KENvbmZpZ1N0YXRlQ29udGV4dCkiXSwic291cmNlUm9vdCI6IiJ9