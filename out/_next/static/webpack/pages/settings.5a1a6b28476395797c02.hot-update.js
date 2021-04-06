webpackHotUpdate_N_E("pages/settings",{

/***/ "./pages/settings/index.js":
/*!*********************************!*\
  !*** ./pages/settings/index.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _services_Auth_context__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/Auth.context */ "./services/Auth.context.js");
/* harmony import */ var _services_Config_context__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../services/Config.context */ "./services/Config.context.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! material-ui-dropzone */ "./node_modules/material-ui-dropzone/dist/index.es.js");
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\settings\\index.js",
    _this = undefined,
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }















var ListProductPage = function ListProductPage() {
  _s();

  var classes = useStyles();

  var _useAuth = Object(_services_Auth_context__WEBPACK_IMPORTED_MODULE_5__["useAuth"])(),
      _useAuth2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useAuth, 2),
      auth = _useAuth2[0],
      authDispatch = _useAuth2[1];

  var _useConfig = Object(_services_Config_context__WEBPACK_IMPORTED_MODULE_6__["useConfig"])(),
      _useConfig2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useConfig, 2),
      config = _useConfig2[0],
      configDispatch = _useConfig2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    mainImage: '',
    icon: '',
    phone: ''
  }),
      settings = _useState[0],
      setSettings = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])({
    icon: false
  }),
      loading = _useState2[0],
      setLoading = _useState2[1];

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_7__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (!auth.user.email) {
      router.push('/login');
    }
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setSettings({
      mainImage: config.mainImage,
      icon: config.icon,
      phone: config.phone
    });
  }, [config]);

  var onIconChanges = function onIconChanges(files) {
    if (files.length) {
      setSettings(_objectSpread(_objectSpread({}, settings), {}, {
        icon: ''
      }));
      setLoading(_objectSpread(_objectSpread({}, loading), {}, {
        icon: true
      }));
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__["default"].storage().ref().child('/images').child(files[0].name).put(files[0]).then(function (snapshot) {
        return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__["default"].storage().ref(snapshot.metadata.fullPath).getDownloadURL();
      }).then(function (url) {
        setLoading(_objectSpread(_objectSpread({}, loading), {}, {
          icon: false
        }));
        setSettings(_objectSpread(_objectSpread({}, settings), {}, {
          icon: url
        }));
      });
    }
  };

  var handleOnSubmit = function handleOnSubmit(event) {
    event.preventDefault();
    Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__["editItem"])({
      collection: 'settings',
      id: 'settings',
      data: settings
    }).then(function () {
      localStorage.setItem('ceibo-urbano-settings', JSON.stringify(settings));
      enqueueSnackbar('Se ha editado la configuración', {
        variant: 'success'
      });
    })["catch"](function (error) {
      return enqueueSnackbar('Ha ocurrido un error', {
        variant: 'error'
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_14__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
      maxWidth: "lg",
      className: classes.marginTop,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.stripped,
        onSubmit: function onSubmit(data) {
          return handleOnSubmit(data);
        },
        noValidate: true,
        autoComplete: "off",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          container: true,
          spacing: 3,
          cols: 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            item: true,
            xs: 12,
            lg: 9,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_11__["default"], {
              className: classes.fullWidth,
              id: "Tel\xE9fono",
              label: "Tel\xE9fono (sin guiones, 0 ni 15. Ej: 3413216549)",
              value: settings.phone,
              onChange: function onChange(_ref) {
                var target = _ref.target;
                return setSettings(_objectSpread(_objectSpread({}, settings), {}, {
                  phone: target.value
                }));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            item: true,
            xs: 12,
            lg: 3,
            className: classes.actions,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
              className: classes.fullWidth,
              variant: "contained",
              disabled: settings.phone === config.phone || !settings.phone,
              type: "submit",
              color: "primary",
              children: "Guardar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 81,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 69,
        columnNumber: 9
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
        className: classes.stripped,
        onSubmit: function onSubmit(data) {
          return handleOnSubmit(data);
        },
        noValidate: true,
        autoComplete: "off",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
          container: true,
          spacing: 3,
          cols: 1,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            item: true,
            xs: 12,
            lg: 6,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_13__["DropzoneArea"], {
              acceptedFiles: ['image/*'],
              filesLimit: 1,
              maxFileSize: 10000000,
              dropzoneText: "\xCDcono",
              onChange: function onChange(files) {
                return onIconChanges(files);
              },
              onDelete: function onDelete() {
                return setSettings(_objectSpread(_objectSpread({}, settings), {}, {
                  icon: ''
                }));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 95,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.imageContainer,
            item: true,
            xs: 12,
            lg: 3,
            children: !settings.icon && loading.icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: settings.icon,
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 105,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            item: true,
            xs: 12,
            lg: 3,
            className: classes.actions,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
              className: classes.fullWidth,
              variant: "contained",
              disabled: settings.icon === config.icon || !settings.icon,
              type: "submit",
              color: "primary",
              children: "Guardar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 113,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 94,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 93,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 66,
    columnNumber: 5
  }, _this);
};

_s(ListProductPage, "tWrSeaie0WSHhzvVt7UNQCYcOHQ=", false, function () {
  return [useStyles, _services_Auth_context__WEBPACK_IMPORTED_MODULE_5__["useAuth"], _services_Config_context__WEBPACK_IMPORTED_MODULE_6__["useConfig"], notistack__WEBPACK_IMPORTED_MODULE_7__["useSnackbar"]];
});

_c = ListProductPage;
/* harmony default export */ __webpack_exports__["default"] = (ListProductPage);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    root: {
      overflow: 'hidden',
      backgroundColor: theme.palette.background.paper
    },
    marginTop: {
      margin: theme.spacing('70px', 'auto'),
      display: 'grid',
      gap: theme.spacing(4),
      flexDirection: 'column'
    },
    stripped: {
      padding: theme.spacing(3),
      '&:nth-child(odd)': {
        background: theme.palette.lightGreen.main
      }
    },
    fullWidth: {
      width: '100%',
      maxHeigth: '100%',
      objectFit: 'contain'
    },
    imageContainer: {
      marginTop: 'auto',
      marginBottom: 'auto',
      textAlign: 'center'
    },
    actions: {
      margin: theme.spacing('20px', 'auto'),
      display: 'flex',
      alignItems: 'flex-end'
    }
  };
});

var _c;

$RefreshReg$(_c, "ListProductPage");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiTGlzdFByb2R1Y3RQYWdlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUF1dGgiLCJhdXRoIiwiYXV0aERpc3BhdGNoIiwidXNlQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1haW5JbWFnZSIsImljb24iLCJwaG9uZSIsInNldHRpbmdzIiwic2V0U2V0dGluZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInVzZUVmZmVjdCIsInVzZXIiLCJlbWFpbCIsInJvdXRlciIsInB1c2giLCJvbkljb25DaGFuZ2VzIiwiZmlsZXMiLCJsZW5ndGgiLCJhcHAiLCJzdG9yYWdlIiwicmVmIiwiY2hpbGQiLCJuYW1lIiwicHV0IiwidGhlbiIsInNuYXBzaG90IiwibWV0YWRhdGEiLCJmdWxsUGF0aCIsImdldERvd25sb2FkVVJMIiwidXJsIiwiaGFuZGxlT25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZWRpdEl0ZW0iLCJjb2xsZWN0aW9uIiwiaWQiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YXJpYW50IiwiZXJyb3IiLCJtYXJnaW5Ub3AiLCJzdHJpcHBlZCIsImZ1bGxXaWR0aCIsInRhcmdldCIsInZhbHVlIiwiYWN0aW9ucyIsImltYWdlQ29udGFpbmVyIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm1hcmdpbiIsInNwYWNpbmciLCJkaXNwbGF5IiwiZ2FwIiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmciLCJsaWdodEdyZWVuIiwibWFpbiIsIndpZHRoIiwibWF4SGVpZ3RoIiwib2JqZWN0Rml0IiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDNUIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCOztBQUQ0QixpQkFFQ0Msc0VBQU8sRUFGUjtBQUFBO0FBQUEsTUFFckJDLElBRnFCO0FBQUEsTUFFZkMsWUFGZTs7QUFBQSxtQkFHS0MsMEVBQVMsRUFIZDtBQUFBO0FBQUEsTUFHckJDLE1BSHFCO0FBQUEsTUFHYkMsY0FIYTs7QUFBQSxrQkFJSUMsc0RBQVEsQ0FBQztBQUFFQyxhQUFTLEVBQUUsRUFBYjtBQUFpQkMsUUFBSSxFQUFFLEVBQXZCO0FBQTJCQyxTQUFLLEVBQUU7QUFBbEMsR0FBRCxDQUpaO0FBQUEsTUFJckJDLFFBSnFCO0FBQUEsTUFJWEMsV0FKVzs7QUFBQSxtQkFLRUwsc0RBQVEsQ0FBQztBQUFFRSxRQUFJLEVBQUU7QUFBUixHQUFELENBTFY7QUFBQSxNQUtyQkksT0FMcUI7QUFBQSxNQUtaQyxVQUxZOztBQUFBLHFCQU9lQyw2REFBVyxFQVAxQjtBQUFBLE1BT3BCQyxlQVBvQixnQkFPcEJBLGVBUG9CO0FBQUEsTUFPSEMsYUFQRyxnQkFPSEEsYUFQRzs7QUFTNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ2hCLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUMsS0FBZixFQUFzQjtBQUNwQkMsWUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BSix5REFBUyxDQUFDLFlBQU07QUFDZE4sZUFBVyxDQUFDO0FBQ1ZKLGVBQVMsRUFBRUgsTUFBTSxDQUFD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Q1RxQixXQUFLLEVBQUUsTUFERTtBQUVUQyxlQUFTLEVBQUUsTUFGRjtBQUdUQyxlQUFTLEVBQUU7QUFIRixLQWpCNEI7QUFzQnZDbkIsa0JBQWMsRUFBRTtBQUNkTixlQUFTLEVBQUUsTUFERztBQUVkMEIsa0JBQVksRUFBRSxNQUZBO0FBR2RDLGVBQVMsRUFBRTtBQUhHLEtBdEJ1QjtBQTJCdkN0QixXQUFPLEVBQUU7QUFDUFUsWUFBTSxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxNQUFkLEVBQXNCLE1BQXRCLENBREQ7QUFFUEMsYUFBTyxFQUFFLE1BRkY7QUFHUFcsZ0JBQVUsRUFBRTtBQUhMO0FBM0I4QixHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy41YTFhNmIyODQ3NjM5NTc5N2MwMi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGguY29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ29uZmlnIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQ29uZmlnLmNvbnRleHQnXHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJ1xyXG5cclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcydcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IHsgRHJvcHpvbmVBcmVhIH0gZnJvbSAnbWF0ZXJpYWwtdWktZHJvcHpvbmUnXHJcblxyXG5pbXBvcnQgQXBwQXBwQmFyIGZyb20gJy4uLy4uL21vZHVsZXMvdmlld3MvQXBwQXBwQmFyJ1xyXG5cclxuaW1wb3J0IGFwcCwgeyBlZGl0SXRlbSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmNvbnN0IExpc3RQcm9kdWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBbYXV0aCwgYXV0aERpc3BhdGNoXSA9IHVzZUF1dGgoKVxyXG4gIGNvbnN0IFtjb25maWcsIGNvbmZpZ0Rpc3BhdGNoXSA9IHVzZUNvbmZpZygpXHJcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZSh7IG1haW5JbWFnZTogJycsIGljb246ICcnLCBwaG9uZTogJycgfSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh7IGljb246IGZhbHNlIH0pXHJcblxyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyLCBjbG9zZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWF1dGgudXNlci5lbWFpbCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH1cclxuICB9LCBbXSlcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U2V0dGluZ3Moe1xyXG4gICAgICBtYWluSW1hZ2U6IGNvbmZpZy5tYWluSW1hZ2UsXHJcbiAgICAgIGljb246IGNvbmZpZy5pY29uLFxyXG4gICAgICBwaG9uZTogY29uZmlnLnBob25lLFxyXG4gICAgfSlcclxuICB9LCBbY29uZmlnXSlcclxuXHJcbiAgY29uc3Qgb25JY29uQ2hhbmdlcyA9IChmaWxlcykgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBpY29uOiAnJyB9KVxyXG4gICAgICBzZXRMb2FkaW5nKHsgLi4ubG9hZGluZywgaWNvbjogdHJ1ZSB9KVxyXG4gICAgICBhcHAuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCcvaW1hZ2VzJykuY2hpbGQoZmlsZXNbMF0ubmFtZSkucHV0KGZpbGVzWzBdKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IGFwcC5zdG9yYWdlKCkucmVmKHNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoKS5nZXREb3dubG9hZFVSTCgpKVxyXG4gICAgICAgIC50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHsgLi4ubG9hZGluZywgaWNvbjogZmFsc2UgfSlcclxuICAgICAgICAgIHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIGljb246IHVybCB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgZWRpdEl0ZW0oeyBjb2xsZWN0aW9uOiAnc2V0dGluZ3MnLCBpZDogJ3NldHRpbmdzJywgZGF0YTogc2V0dGluZ3MgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjZWliby11cmJhbm8tc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpXHJcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdTZSBoYSBlZGl0YWRvIGxhIGNvbmZpZ3VyYWNpw7NuJywgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBlbnF1ZXVlU25hY2tiYXIoJ0hhIG9jdXJyaWRvIHVuIGVycm9yJywgeyB2YXJpYW50OiAnZXJyb3InfSkpXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEFwcEJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2luVG9wfT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc3RyaXBwZWR9IG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17OX0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiVGVsw6lmb25vXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGVsw6lmb25vIChzaW4gZ3Vpb25lcywgMCBuaSAxNS4gRWo6IDM0MTMyMTY1NDkpXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5waG9uZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgcGhvbmU6IHRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZXR0aW5ncy5waG9uZSA9PT0gY29uZmlnLnBob25lIHx8ICFzZXR0aW5ncy5waG9uZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnN0cmlwcGVkfSBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU9uU3VibWl0KGRhdGEpfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNvbHM9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIsONY29ub1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpbGVzKSA9PiBvbkljb25DaGFuZ2VzKGZpbGVzKX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBpY29uOiAnJ30pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQ29udGFpbmVyfSBpdGVtIHhzPXsxMn0gbGc9ezN9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhc2V0dGluZ3MuaWNvbiAmJiBsb2FkaW5nLmljb25cclxuICAgICAgICAgICAgICAgID8gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICAgICAgIDogPGltZyBzcmM9e3NldHRpbmdzLmljb259IHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZXR0aW5ncy5pY29uID09PSBjb25maWcuaWNvbiB8fCAhc2V0dGluZ3MuaWNvbn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQcm9kdWN0UGFnZVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBtYXJnaW5Ub3A6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnNzBweCcsICdhdXRvJyksXHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBnYXA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIHN0cmlwcGVkOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgJyY6bnRoLWNoaWxkKG9kZCknOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUubGlnaHRHcmVlbi5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1heEhlaWd0aDogJzEwMCUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY29udGFpbicsXHJcbiAgfSxcclxuICBpbWFnZUNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9LFxyXG4gIGFjdGlvbnM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnMjBweCcsICdhdXRvJyksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==