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
      lineNumber: 66,
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
              lineNumber: 71,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
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
              lineNumber: 80,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 79,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 68,
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
              lineNumber: 95,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.imageContainer,
            item: true,
            xs: 12,
            lg: 3,
            children: !settings.icon && loading.icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 107,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: settings.icon,
              alt: "logo",
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 108,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 104,
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
              lineNumber: 112,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 93,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 92,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 65,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiTGlzdFByb2R1Y3RQYWdlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUF1dGgiLCJhdXRoIiwiYXV0aERpc3BhdGNoIiwidXNlQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1haW5JbWFnZSIsImljb24iLCJwaG9uZSIsInNldHRpbmdzIiwic2V0U2V0dGluZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInVzZUVmZmVjdCIsInVzZXIiLCJlbWFpbCIsInJvdXRlciIsInB1c2giLCJvbkljb25DaGFuZ2VzIiwiZmlsZXMiLCJsZW5ndGgiLCJhcHAiLCJzdG9yYWdlIiwicmVmIiwiY2hpbGQiLCJuYW1lIiwicHV0IiwidGhlbiIsInNuYXBzaG90IiwibWV0YWRhdGEiLCJmdWxsUGF0aCIsImdldERvd25sb2FkVVJMIiwidXJsIiwiaGFuZGxlT25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZWRpdEl0ZW0iLCJjb2xsZWN0aW9uIiwiaWQiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YXJpYW50IiwiZXJyb3IiLCJtYXJnaW5Ub3AiLCJzdHJpcHBlZCIsImZ1bGxXaWR0aCIsInRhcmdldCIsInZhbHVlIiwiYWN0aW9ucyIsImltYWdlQ29udGFpbmVyIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm1hcmdpbiIsInNwYWNpbmciLCJkaXNwbGF5IiwiZ2FwIiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmciLCJsaWdodEdyZWVuIiwibWFpbiIsIndpZHRoIiwibWF4SGVpZ3RoIiwib2JqZWN0Rml0IiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwiYWxpZ25JdGVtcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTs7QUFFQSxJQUFNQSxlQUFlLEdBQUcsU0FBbEJBLGVBQWtCLEdBQU07QUFBQTs7QUFDNUIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCOztBQUQ0QixpQkFFQ0Msc0VBQU8sRUFGUjtBQUFBO0FBQUEsTUFFckJDLElBRnFCO0FBQUEsTUFFZkMsWUFGZTs7QUFBQSxtQkFHS0MsMEVBQVMsRUFIZDtBQUFBO0FBQUEsTUFHckJDLE1BSHFCO0FBQUEsTUFHYkMsY0FIYTs7QUFBQSxrQkFJSUMsc0RBQVEsQ0FBQztBQUFFQyxhQUFTLEVBQUUsRUFBYjtBQUFpQkMsUUFBSSxFQUFFLEVBQXZCO0FBQTJCQyxTQUFLLEVBQUU7QUFBbEMsR0FBRCxDQUpaO0FBQUEsTUFJckJDLFFBSnFCO0FBQUEsTUFJWEMsV0FKVzs7QUFBQSxtQkFLRUwsc0RBQVEsQ0FBQztBQUFFRSxRQUFJLEVBQUU7QUFBUixHQUFELENBTFY7QUFBQSxNQUtyQkksT0FMcUI7QUFBQSxNQUtaQyxVQUxZOztBQUFBLHFCQU9lQyw2REFBVyxFQVAxQjtBQUFBLE1BT3BCQyxlQVBvQixnQkFPcEJBLGVBUG9CO0FBQUEsTUFPSEMsYUFQRyxnQkFPSEEsYUFQRzs7QUFTNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ2hCLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUMsS0FBZixFQUFzQjtBQUNwQkMsWUFBTSxDQUFDQyxJQUFQLENBQVksUUFBWjtBQUNEO0FBQ0YsR0FKUSxFQUlOLEVBSk0sQ0FBVDtBQU1BSix5REFBUyxDQUFDLFlBQU07QUFDZE4sZUFBVyxDQUFDO0FBQ1ZILFVBQUksRUFBRUosTUFBTSxDQUFD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RUFBRSxNQURFO0FBRVRDLGVBQVMsRUFBRSxNQUZGO0FBR1RDLGVBQVMsRUFBRTtBQUhGLEtBakI0QjtBQXNCdkNuQixrQkFBYyxFQUFFO0FBQ2ROLGVBQVMsRUFBRSxNQURHO0FBRWQwQixrQkFBWSxFQUFFLE1BRkE7QUFHZEMsZUFBUyxFQUFFO0FBSEcsS0F0QnVCO0FBMkJ2Q3RCLFdBQU8sRUFBRTtBQUNQVSxZQUFNLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjLE1BQWQsRUFBc0IsTUFBdEIsQ0FERDtBQUVQQyxhQUFPLEVBQUUsTUFGRjtBQUdQVyxnQkFBVSxFQUFFO0FBSEw7QUEzQjhCLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLmUzYWI2ZjE5NWIxZjhjMDBlM2U4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aC5jb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Db25maWcuY29udGV4dCdcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snXHJcblxyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgeyBEcm9wem9uZUFyZWEgfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcclxuXHJcbmltcG9ydCBBcHBBcHBCYXIgZnJvbSAnLi4vLi4vbW9kdWxlcy92aWV3cy9BcHBBcHBCYXInXHJcblxyXG5pbXBvcnQgYXBwLCB7IGVkaXRJdGVtIH0gZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuY29uc3QgTGlzdFByb2R1Y3RQYWdlID0gKCkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IFthdXRoLCBhdXRoRGlzcGF0Y2hdID0gdXNlQXV0aCgpXHJcbiAgY29uc3QgW2NvbmZpZywgY29uZmlnRGlzcGF0Y2hdID0gdXNlQ29uZmlnKClcclxuICBjb25zdCBbc2V0dGluZ3MsIHNldFNldHRpbmdzXSA9IHVzZVN0YXRlKHsgbWFpbkltYWdlOiAnJywgaWNvbjogJycsIHBob25lOiAnJyB9KVxyXG4gIGNvbnN0IFtsb2FkaW5nLCBzZXRMb2FkaW5nXSA9IHVzZVN0YXRlKHsgaWNvbjogZmFsc2UgfSlcclxuXHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIsIGNsb3NlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYXV0aC51c2VyLmVtYWlsKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTZXR0aW5ncyh7XHJcbiAgICAgIGljb246IGNvbmZpZy5pY29uLFxyXG4gICAgICBwaG9uZTogY29uZmlnLnBob25lLFxyXG4gICAgfSlcclxuICB9LCBbY29uZmlnXSlcclxuXHJcbiAgY29uc3Qgb25JY29uQ2hhbmdlcyA9IChmaWxlcykgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBpY29uOiAnJyB9KVxyXG4gICAgICBzZXRMb2FkaW5nKHsgLi4ubG9hZGluZywgaWNvbjogdHJ1ZSB9KVxyXG4gICAgICBhcHAuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCcvaW1hZ2VzJykuY2hpbGQoZmlsZXNbMF0ubmFtZSkucHV0KGZpbGVzWzBdKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IGFwcC5zdG9yYWdlKCkucmVmKHNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoKS5nZXREb3dubG9hZFVSTCgpKVxyXG4gICAgICAgIC50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHsgLi4ubG9hZGluZywgaWNvbjogZmFsc2UgfSlcclxuICAgICAgICAgIHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIGljb246IHVybCB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgZWRpdEl0ZW0oeyBjb2xsZWN0aW9uOiAnc2V0dGluZ3MnLCBpZDogJ3NldHRpbmdzJywgZGF0YTogc2V0dGluZ3MgfSlcclxuICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjZWliby11cmJhbm8tc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpXHJcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdTZSBoYSBlZGl0YWRvIGxhIGNvbmZpZ3VyYWNpw7NuJywgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KVxyXG4gICAgICB9KVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBlbnF1ZXVlU25hY2tiYXIoJ0hhIG9jdXJyaWRvIHVuIGVycm9yJywgeyB2YXJpYW50OiAnZXJyb3InfSkpXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEFwcEJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2luVG9wfT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc3RyaXBwZWR9IG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17OX0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiVGVsw6lmb25vXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGVsw6lmb25vIChzaW4gZ3Vpb25lcywgMCBuaSAxNS4gRWo6IDM0MTMyMTY1NDkpXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5waG9uZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgcGhvbmU6IHRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZXR0aW5ncy5waG9uZSA9PT0gY29uZmlnLnBob25lIHx8ICFzZXR0aW5ncy5waG9uZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnN0cmlwcGVkfSBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU9uU3VibWl0KGRhdGEpfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNvbHM9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIsONY29ub1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpbGVzKSA9PiBvbkljb25DaGFuZ2VzKGZpbGVzKX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBpY29uOiAnJ30pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQ29udGFpbmVyfSBpdGVtIHhzPXsxMn0gbGc9ezN9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhc2V0dGluZ3MuaWNvbiAmJiBsb2FkaW5nLmljb25cclxuICAgICAgICAgICAgICAgID8gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICAgICAgIDogPGltZyBzcmM9e3NldHRpbmdzLmljb259IGFsdD1cImxvZ29cIiB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2V0dGluZ3MuaWNvbiA9PT0gY29uZmlnLmljb24gfHwgIXNldHRpbmdzLmljb259XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UHJvZHVjdFBhZ2VcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgbWFyZ2luVG9wOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzcwcHgnLCAnYXV0bycpLFxyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZ2FwOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBzdHJpcHBlZDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICcmOm50aC1jaGlsZChvZGQpJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmxpZ2h0R3JlZW4ubWFpbixcclxuICAgIH0sXHJcbiAgfSxcclxuICBmdWxsV2lkdGg6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXhIZWlndGg6ICcxMDAlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxyXG4gIH0sXHJcbiAgaW1hZ2VDb250YWluZXI6IHtcclxuICAgIG1hcmdpblRvcDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzIwcHgnLCAnYXV0bycpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICB9LFxyXG59KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=