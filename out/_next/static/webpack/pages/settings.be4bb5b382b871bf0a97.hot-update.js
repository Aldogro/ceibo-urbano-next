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

_s(ListProductPage, "uFu94L75lXLIzh/ng2vFTktSQcE=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiTGlzdFByb2R1Y3RQYWdlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUF1dGgiLCJhdXRoIiwiYXV0aERpc3BhdGNoIiwidXNlQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsImljb24iLCJwaG9uZSIsInNldHRpbmdzIiwic2V0U2V0dGluZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInVzZUVmZmVjdCIsInVzZXIiLCJlbWFpbCIsInJvdXRlciIsInB1c2giLCJvbkljb25DaGFuZ2VzIiwiZmlsZXMiLCJsZW5ndGgiLCJhcHAiLCJzdG9yYWdlIiwicmVmIiwiY2hpbGQiLCJuYW1lIiwicHV0IiwidGhlbiIsInNuYXBzaG90IiwibWV0YWRhdGEiLCJmdWxsUGF0aCIsImdldERvd25sb2FkVVJMIiwidXJsIiwiaGFuZGxlT25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZWRpdEl0ZW0iLCJjb2xsZWN0aW9uIiwiaWQiLCJkYXRhIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ2YXJpYW50IiwiZXJyb3IiLCJtYXJnaW5Ub3AiLCJzdHJpcHBlZCIsImZ1bGxXaWR0aCIsInRhcmdldCIsInZhbHVlIiwiYWN0aW9ucyIsImltYWdlQ29udGFpbmVyIiwibWFrZVN0eWxlcyIsInRoZW1lIiwicm9vdCIsIm92ZXJmbG93IiwiYmFja2dyb3VuZENvbG9yIiwicGFsZXR0ZSIsImJhY2tncm91bmQiLCJwYXBlciIsIm1hcmdpbiIsInNwYWNpbmciLCJkaXNwbGF5IiwiZ2FwIiwiZmxleERpcmVjdGlvbiIsInBhZGRpbmciLCJsaWdodEdyZWVuIiwibWFpbiIsIndpZHRoIiwibWF4SGVpZ3RoIiwi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ZUFBUyxFQUFFO0FBSEYsS0FqQjRCO0FBc0J2Q25CLGtCQUFjLEVBQUU7QUFDZE4sZUFBUyxFQUFFLE1BREc7QUFFZDBCLGtCQUFZLEVBQUUsTUFGQTtBQUdkQyxlQUFTLEVBQUU7QUFIRyxLQXRCdUI7QUEyQnZDdEIsV0FBTyxFQUFFO0FBQ1BVLFlBQU0sRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWMsTUFBZCxFQUFzQixNQUF0QixDQUREO0FBRVBDLGFBQU8sRUFBRSxNQUZGO0FBR1BXLGdCQUFVLEVBQUU7QUFITDtBQTNCOEIsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2V0dGluZ3MuYmU0YmI1YjM4MmI4NzFiZjBhOTcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoLmNvbnRleHQnXHJcbmltcG9ydCB7IHVzZUNvbmZpZyB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0NvbmZpZy5jb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjaydcclxuXHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCB7IERyb3B6b25lQXJlYSB9IGZyb20gJ21hdGVyaWFsLXVpLWRyb3B6b25lJ1xyXG5cclxuaW1wb3J0IEFwcEFwcEJhciBmcm9tICcuLi8uLi9tb2R1bGVzL3ZpZXdzL0FwcEFwcEJhcidcclxuXHJcbmltcG9ydCBhcHAsIHsgZWRpdEl0ZW0gfSBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5jb25zdCBMaXN0UHJvZHVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgW2F1dGgsIGF1dGhEaXNwYXRjaF0gPSB1c2VBdXRoKClcclxuICBjb25zdCBbY29uZmlnLCBjb25maWdEaXNwYXRjaF0gPSB1c2VDb25maWcoKVxyXG4gIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGUoeyBpY29uOiAnJywgcGhvbmU6ICcnIH0pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoeyBpY29uOiBmYWxzZSB9KVxyXG5cclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciwgY2xvc2VTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFhdXRoLnVzZXIuZW1haWwpIHtcclxuICAgICAgcm91dGVyLnB1c2goJy9sb2dpbicpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcbiAgXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIHNldFNldHRpbmdzKHtcclxuICAgICAgaWNvbjogY29uZmlnLmljb24sXHJcbiAgICAgIHBob25lOiBjb25maWcucGhvbmUsXHJcbiAgICB9KVxyXG4gIH0sIFtjb25maWddKVxyXG5cclxuICBjb25zdCBvbkljb25DaGFuZ2VzID0gKGZpbGVzKSA9PiB7XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIGljb246ICcnIH0pXHJcbiAgICAgIHNldExvYWRpbmcoeyAuLi5sb2FkaW5nLCBpY29uOiB0cnVlIH0pXHJcbiAgICAgIGFwcC5zdG9yYWdlKCkucmVmKCkuY2hpbGQoJy9pbWFnZXMnKS5jaGlsZChmaWxlc1swXS5uYW1lKS5wdXQoZmlsZXNbMF0pXHJcbiAgICAgICAgLnRoZW4oc25hcHNob3QgPT4gYXBwLnN0b3JhZ2UoKS5yZWYoc25hcHNob3QubWV0YWRhdGEuZnVsbFBhdGgpLmdldERvd25sb2FkVVJMKCkpXHJcbiAgICAgICAgLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoeyAuLi5sb2FkaW5nLCBpY29uOiBmYWxzZSB9KVxyXG4gICAgICAgICAgc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgaWNvbjogdXJsIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBlZGl0SXRlbSh7IGNvbGxlY3Rpb246ICdzZXR0aW5ncycsIGlkOiAnc2V0dGluZ3MnLCBkYXRhOiBzZXR0aW5ncyB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NlaWJvLXVyYmFuby1zZXR0aW5ncycsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKSlcclxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ1NlIGhhIGVkaXRhZG8gbGEgY29uZmlndXJhY2nDs24nLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJ30pXHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVucXVldWVTbmFja2JhcignSGEgb2N1cnJpZG8gdW4gZXJyb3InLCB7IHZhcmlhbnQ6ICdlcnJvcid9KSlcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8QXBwQXBwQmFyIC8+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW5Ub3B9PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHJpcHBlZH0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVPblN1Ym1pdChkYXRhKX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjb2xzPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs5fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJUZWzDqWZvbm9cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUZWzDqWZvbm8gKHNpbiBndWlvbmVzLCAwIG5pIDE1LiBFajogMzQxMzIxNjU0OSlcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLnBob25lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBwaG9uZTogdGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXszfSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NldHRpbmdzLnBob25lID09PSBjb25maWcucGhvbmUgfHwgIXNldHRpbmdzLnBob25lfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc3RyaXBwZWR9IG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiw41jb25vXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uSWNvbkNoYW5nZXMoZmlsZXMpfVxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIGljb246ICcnfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VDb250YWluZXJ9IGl0ZW0geHM9ezEyfSBsZz17M30+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFzZXR0aW5ncy5pY29uICYmIGxvYWRpbmcuaWNvblxyXG4gICAgICAgICAgICAgICAgPyA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17c2V0dGluZ3MuaWNvbn0gYWx0PVwibG9nb1wiIHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZXR0aW5ncy5pY29uID09PSBjb25maWcuaWNvbiB8fCAhc2V0dGluZ3MuaWNvbn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQcm9kdWN0UGFnZVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBtYXJnaW5Ub3A6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnNzBweCcsICdhdXRvJyksXHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBnYXA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIHN0cmlwcGVkOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgJyY6bnRoLWNoaWxkKG9kZCknOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUubGlnaHRHcmVlbi5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1heEhlaWd0aDogJzEwMCUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY29udGFpbicsXHJcbiAgfSxcclxuICBpbWFnZUNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9LFxyXG4gIGFjdGlvbnM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnMjBweCcsICdhdXRvJyksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==