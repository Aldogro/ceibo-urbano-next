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
    icon: false,
    mainImage: false
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

    getSettings();
  }, []);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    setSettings({
      mainImage: config.mainImage,
      icon: config.icon,
      phone: config.phone
    });
  }, [config]);

  var getSettings = function getSettings() {
    if (localStorage.getItem('ceibo-urbano-settings')) {
      configDispatch({
        type: _services_Config_context__WEBPACK_IMPORTED_MODULE_6__["ActionType"].SET_SETTINGS,
        payload: JSON.parse(localStorage.getItem('ceibo-urbano-settings'))
      });
    }

    console.log(JSON.parse(localStorage.getItem('ceibo-urbano-settings')));
    Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__["getItem"])({
      collection: 'settings',
      id: 'settings'
    }).then(function (snapshot) {
      if (!snapshot.data()) {
        Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__["createSettings"])({
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
  };

  var onMainImageChanges = function onMainImageChanges(files) {
    if (files.length) {
      setSettings(_objectSpread(_objectSpread({}, settings), {}, {
        mainImage: ''
      }));
      setLoading(_objectSpread(_objectSpread({}, loading), {}, {
        mainImage: true
      }));
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__["default"].storage().ref().child('/images').child(files[0].name).put(files[0]).then(function (snapshot) {
        return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__["default"].storage().ref(snapshot.metadata.fullPath).getDownloadURL();
      }).then(function (url) {
        setLoading(_objectSpread(_objectSpread({}, loading), {}, {
          mainImage: false
        }));
        setSettings(_objectSpread(_objectSpread({}, settings), {}, {
          mainImage: url
        }));
      });
    }
  };

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
      return enqueueSnackbar('Se ha editado la configuración', {
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
      lineNumber: 101,
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
              lineNumber: 106,
              columnNumber: 15
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
              disabled: settings.phone === config.phone || !settings.phone,
              type: "submit",
              color: "primary",
              children: "Guardar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 114,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 104,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 103,
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
              dropzoneText: "Imagen principal",
              onChange: function onChange(files) {
                return onMainImageChanges(files);
              },
              onDelete: function onDelete() {
                return setSettings(_objectSpread(_objectSpread({}, settings), {}, {
                  mainImage: ''
                }));
              }
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 129,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.imageContainer,
            item: true,
            xs: 12,
            lg: 3,
            children: !settings.mainImage && loading.mainImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 142,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: settings.mainImage,
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 143,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 139,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            item: true,
            xs: 12,
            lg: 3,
            className: classes.actions,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_12__["default"], {
              className: classes.fullWidth,
              variant: "contained",
              disabled: settings.mainImage === config.mainImage || !settings.mainImage,
              type: "submit",
              color: "primary",
              children: "Guardar"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 146,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 128,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 127,
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
              lineNumber: 162,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 161,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.imageContainer,
            item: true,
            xs: 12,
            lg: 3,
            children: !settings.icon && loading.icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: settings.icon,
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 171,
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
              lineNumber: 179,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 178,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 160,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 159,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 102,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 100,
    columnNumber: 5
  }, _this);
};

_s(ListProductPage, "/I5oSX9mLbI1NjB5yANTY3NkOcw=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiTGlzdFByb2R1Y3RQYWdlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUF1dGgiLCJhdXRoIiwiYXV0aERpc3BhdGNoIiwidXNlQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1haW5JbWFnZSIsImljb24iLCJwaG9uZSIsInNldHRpbmdzIiwic2V0U2V0dGluZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInVzZUVmZmVjdCIsInVzZXIiLCJlbWFpbCIsInJvdXRlciIsInB1c2giLCJnZXRTZXR0aW5ncyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0eXBlIiwiQ29uZmlnQWN0aW9uVHlwZSIsIlNFVF9TRVRUSU5HUyIsInBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJjb25zb2xlIiwibG9nIiwiY29sbGVjdGlvbiIsImlkIiwidGhlbiIsInNuYXBzaG90IiwiZGF0YSIsImNyZWF0ZVNldHRpbmdzIiwidmFyaWFudCIsImVycm9yIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm9uTWFpbkltYWdlQ2hhbmdlcyIsImZpbGVzIiwibGVuZ3RoIiwiYXBwIiwic3RvcmFnZSIsInJlZiIsImNoaWxkIiwibmFtZSIsInB1dCIsIm1ldGFkYXRhIiwiZnVsbFBhdGgiLCJnZXREb3dubG9hZFVSTCIsInVybCIsIm9uSWNvbkNoYW5nZXMiLCJoYW5kbGVPblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlZGl0SXRlbSIsIm1hcmdpblRvcCIsInN0cmlwcGVkIiwiZnVsbFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiLCJhY3Rpb25zIiwiaW1hZ2VDb250YWluZXIiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsImRpc3BsYXkiLCJnYXAiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsImxpZ2h0R3JlZW4iLCJtYWluIiwid2lkdGgiLCJtYXhIZWlndGgiLCJvYmplY3RGaXQiLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUM1QixNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7O0FBRDRCLGlCQUVDQyxzRUFBTyxFQUZSO0FBQUE7QUFBQSxNQUVyQkMsSUFGcUI7QUFBQSxNQUVmQyxZQUZlOztBQUFBLG1CQUdLQywwRUFBUyxFQUhkO0FBQUE7QUFBQSxNQUdyQkMsTUFIcUI7QUFBQSxNQUdiQyxjQUhhOztBQUFBLGtCQUlJQyxzREFBUSxDQUFDO0FBQUVDLGFBQVMsRUFBRSxFQUFiO0FBQWlCQyxRQUFJLEVBQUUsRUFBdkI7QUFBMkJDLFNBQUssRUFBRTtBQUFsQyxHQUFELENBSlo7QUFBQSxNQUlyQkMsUUFKcUI7QUFBQSxNQUlYQyxXQUpXOztBQUFBLG1CQUtFTCxzREFBUSxDQUFDO0FBQUVFLFFBQUksRUFBRSxLQUFSO0FBQWVELGFBQVMsRUFBRTtBQUExQixHQUFELENBTFY7QUFBQSxNQUtyQkssT0FMcUI7QUFBQSxNQUtaQyxVQUxZOztBQUFBLHFCQU9lQyw2REFBVyxFQVAxQjtBQUFBLE1BT3BCQyxlQVBvQixnQkFPcEJBLGVBUG9CO0FBQUEsTUFPSEMsYUFQRyxnQkFPSEEsYUFQRzs7QUFTNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ2hCLElB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RE47QUFFSkMscUJBQWUsRUFBRUgsS0FBSyxDQUFDSSxPQUFOLENBQWNDLFVBQWQsQ0FBeUJDO0FBRnRDLEtBRGlDO0FBS3ZDZCxhQUFTLEVBQUU7QUFDVGUsWUFBTSxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxNQUFkLEVBQXNCLE1BQXRCLENBREM7QUFFVEMsYUFBTyxFQUFFLE1BRkE7QUFHVEMsU0FBRyxFQUFFVixLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLENBSEk7QUFJVEcsbUJBQWEsRUFBRTtBQUpOLEtBTDRCO0FBV3ZDbEIsWUFBUSxFQUFFO0FBQ1JtQixhQUFPLEVBQUVaLEtBQUssQ0FBQ1EsT0FBTixDQUFjLENBQWQsQ0FERDtBQUVSLDBCQUFvQjtBQUNsQkgsa0JBQVUsRUFBRUwsS0FBSyxDQUFDSSxPQUFOLENBQWNTLFVBQWQsQ0FBeUJDO0FBRG5CO0FBRlosS0FYNkI7QUFpQnZDcEIsYUFBUyxFQUFFO0FBQ1RxQixXQUFLLEVBQUUsTUFERTtBQUVUQyxlQUFTLEVBQUUsTUFGRjtBQUdUQyxlQUFTLEVBQUU7QUFIRixLQWpCNEI7QUFzQnZDbkIsa0JBQWMsRUFBRTtBQUNkTixlQUFTLEVBQUUsTUFERztBQUVkMEIsa0JBQVksRUFBRSxNQUZBO0FBR2RDLGVBQVMsRUFBRTtBQUhHLEtBdEJ1QjtBQTJCdkN0QixXQUFPLEVBQUU7QUFDUFUsWUFBTSxFQUFFUCxLQUFLLENBQUNRLE9BQU4sQ0FBYyxNQUFkLEVBQXNCLE1BQXRCLENBREQ7QUFFUEMsYUFBTyxFQUFFLE1BRkY7QUFHUFcsZ0JBQVUsRUFBRTtBQUhMO0FBM0I4QixHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9zZXR0aW5ncy4zMjJkZmNkZWQ5ZjUzZWIwMGMwOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlQXV0aCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL0F1dGguY29udGV4dCdcclxuaW1wb3J0IHsgdXNlQ29uZmlnLCBBY3Rpb25UeXBlIGFzIENvbmZpZ0FjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Db25maWcuY29udGV4dCdcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snXHJcblxyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgeyBEcm9wem9uZUFyZWEgfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcclxuXHJcbmltcG9ydCBBcHBBcHBCYXIgZnJvbSAnLi4vLi4vbW9kdWxlcy92aWV3cy9BcHBBcHBCYXInXHJcblxyXG5pbXBvcnQgYXBwLCB7IGNyZWF0ZVNldHRpbmdzLCBnZXRJdGVtLCBlZGl0SXRlbSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmNvbnN0IExpc3RQcm9kdWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBbYXV0aCwgYXV0aERpc3BhdGNoXSA9IHVzZUF1dGgoKVxyXG4gIGNvbnN0IFtjb25maWcsIGNvbmZpZ0Rpc3BhdGNoXSA9IHVzZUNvbmZpZygpXHJcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZSh7IG1haW5JbWFnZTogJycsIGljb246ICcnLCBwaG9uZTogJycgfSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh7IGljb246IGZhbHNlLCBtYWluSW1hZ2U6IGZhbHNlfSlcclxuXHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIsIGNsb3NlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYXV0aC51c2VyLmVtYWlsKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfVxyXG4gICAgZ2V0U2V0dGluZ3MoKVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTZXR0aW5ncyh7XHJcbiAgICAgIG1haW5JbWFnZTogY29uZmlnLm1haW5JbWFnZSxcclxuICAgICAgaWNvbjogY29uZmlnLmljb24sXHJcbiAgICAgIHBob25lOiBjb25maWcucGhvbmUsXHJcbiAgICB9KVxyXG4gIH0sIFtjb25maWddKVxyXG5cclxuICBjb25zdCBnZXRTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2VpYm8tdXJiYW5vLXNldHRpbmdzJykpIHtcclxuICAgICAgY29uZmlnRGlzcGF0Y2goe1xyXG4gICAgICAgIHR5cGU6IENvbmZpZ0FjdGlvblR5cGUuU0VUX1NFVFRJTkdTLFxyXG4gICAgICAgIHBheWxvYWQ6IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NlaWJvLXVyYmFuby1zZXR0aW5ncycpKVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gICAgY29uc29sZS5sb2coSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgnY2VpYm8tdXJiYW5vLXNldHRpbmdzJykpKVxyXG4gICAgZ2V0SXRlbSh7IGNvbGxlY3Rpb246ICdzZXR0aW5ncycsIGlkOiAnc2V0dGluZ3MnIH0pXHJcbiAgICAgIC50aGVuKHNuYXBzaG90ID0+IHtcclxuICAgICAgICBpZiAoIXNuYXBzaG90LmRhdGEoKSkge1xyXG4gICAgICAgICAgY3JlYXRlU2V0dGluZ3MoeyBzZXR0aW5ncyB9KVxyXG4gICAgICAgICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdTZSBoYSBjcmVhZG8gZWwgcHJvZHVjdG8gY29ycmVjdGFtZW50ZScsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4gZW5xdWV1ZVNuYWNrYmFyKCdIYSBvY3VycmlkbyB1biBlcnJvcicsIHsgdmFyaWFudDogJ2Vycm9yJ30pKVxyXG4gICAgICAgIH1cclxuICAgICAgICBzZXRTZXR0aW5ncyhzbmFwc2hvdC5kYXRhKCkpXHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NlaWJvLXVyYmFuby1zZXR0aW5ncycsIEpTT04uc3RyaW5naWZ5KHNldHRpbmdzKSlcclxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ1NlIGNhcmdhcm9uIGNvcnJlY3RhbWVudGUgbGFzIGNvbmZpZ3VyYWNpb25lcyBhY3R1YWxlcycsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uTWFpbkltYWdlQ2hhbmdlcyA9IChmaWxlcykgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBtYWluSW1hZ2U6ICcnIH0pXHJcbiAgICAgIHNldExvYWRpbmcoeyAuLi5sb2FkaW5nLCBtYWluSW1hZ2U6IHRydWUgfSlcclxuICAgICAgYXBwLnN0b3JhZ2UoKS5yZWYoKS5jaGlsZCgnL2ltYWdlcycpLmNoaWxkKGZpbGVzWzBdLm5hbWUpLnB1dChmaWxlc1swXSlcclxuICAgICAgICAudGhlbihzbmFwc2hvdCA9PiBhcHAuc3RvcmFnZSgpLnJlZihzbmFwc2hvdC5tZXRhZGF0YS5mdWxsUGF0aCkuZ2V0RG93bmxvYWRVUkwoKSlcclxuICAgICAgICAudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyh7Li4ubG9hZGluZywgbWFpbkltYWdlOiBmYWxzZSB9KVxyXG4gICAgICAgICAgc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgbWFpbkltYWdlOiB1cmwgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25JY29uQ2hhbmdlcyA9IChmaWxlcykgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBpY29uOiAnJyB9KVxyXG4gICAgICBzZXRMb2FkaW5nKHsgLi4ubG9hZGluZywgaWNvbjogdHJ1ZSB9KVxyXG4gICAgICBhcHAuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCcvaW1hZ2VzJykuY2hpbGQoZmlsZXNbMF0ubmFtZSkucHV0KGZpbGVzWzBdKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IGFwcC5zdG9yYWdlKCkucmVmKHNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoKS5nZXREb3dubG9hZFVSTCgpKVxyXG4gICAgICAgIC50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHsgLi4ubG9hZGluZywgaWNvbjogZmFsc2UgfSlcclxuICAgICAgICAgIHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIGljb246IHVybCB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgZWRpdEl0ZW0oeyBjb2xsZWN0aW9uOiAnc2V0dGluZ3MnLCBpZDogJ3NldHRpbmdzJywgZGF0YTogc2V0dGluZ3MgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gZW5xdWV1ZVNuYWNrYmFyKCdTZSBoYSBlZGl0YWRvIGxhIGNvbmZpZ3VyYWNpw7NuJywgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KSApXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVucXVldWVTbmFja2JhcignSGEgb2N1cnJpZG8gdW4gZXJyb3InLCB7IHZhcmlhbnQ6ICdlcnJvcid9KSlcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8QXBwQXBwQmFyIC8+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW5Ub3B9PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHJpcHBlZH0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVPblN1Ym1pdChkYXRhKX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjb2xzPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs5fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJUZWzDqWZvbm9cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUZWzDqWZvbm8gKHNpbiBndWlvbmVzLCAwIG5pIDE1LiBFajogMzQxMzIxNjU0OSlcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLnBob25lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBwaG9uZTogdGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXszfSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NldHRpbmdzLnBob25lID09PSBjb25maWcucGhvbmUgfHwgIXNldHRpbmdzLnBob25lfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc3RyaXBwZWR9IG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiSW1hZ2VuIHByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpbGVzKSA9PiBvbk1haW5JbWFnZUNoYW5nZXMoZmlsZXMpfVxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIG1haW5JbWFnZTogJycgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VDb250YWluZXJ9IGl0ZW0geHM9ezEyfSBsZz17M30+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIXNldHRpbmdzLm1haW5JbWFnZSAmJiBsb2FkaW5nLm1haW5JbWFnZVxyXG4gICAgICAgICAgICAgICAgPyA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17c2V0dGluZ3MubWFpbkltYWdlfSB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2V0dGluZ3MubWFpbkltYWdlID09PSBjb25maWcubWFpbkltYWdlIHx8ICFzZXR0aW5ncy5tYWluSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHJpcHBlZH0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVPblN1Ym1pdChkYXRhKX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjb2xzPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs2fT5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmVBcmVhXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlLyonXX1cclxuICAgICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezF9XHJcbiAgICAgICAgICAgICAgICBtYXhGaWxlU2l6ZT17MTAwMDAwMDB9XHJcbiAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9XCLDjWNvbm9cIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25JY29uQ2hhbmdlcyhmaWxlcyl9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgaWNvbjogJyd9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUNvbnRhaW5lcn0gaXRlbSB4cz17MTJ9IGxnPXszfT5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIXNldHRpbmdzLmljb24gJiYgbG9hZGluZy5pY29uXHJcbiAgICAgICAgICAgICAgICA/IDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtzZXR0aW5ncy5pY29ufSB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2V0dGluZ3MuaWNvbiA9PT0gY29uZmlnLmljb24gfHwgIXNldHRpbmdzLmljb259XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMaXN0UHJvZHVjdFBhZ2VcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG92ZXJmbG93OiAnaGlkZGVuJyxcclxuICAgIGJhY2tncm91bmRDb2xvcjogdGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kLnBhcGVyLFxyXG4gIH0sXHJcbiAgbWFyZ2luVG9wOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzcwcHgnLCAnYXV0bycpLFxyXG4gICAgZGlzcGxheTogJ2dyaWQnLFxyXG4gICAgZ2FwOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgfSxcclxuICBzdHJpcHBlZDoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICAgICcmOm50aC1jaGlsZChvZGQpJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmxpZ2h0R3JlZW4ubWFpbixcclxuICAgIH0sXHJcbiAgfSxcclxuICBmdWxsV2lkdGg6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXhIZWlndGg6ICcxMDAlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxyXG4gIH0sXHJcbiAgaW1hZ2VDb250YWluZXI6IHtcclxuICAgIG1hcmdpblRvcDogJ2F1dG8nLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnYXV0bycsXHJcbiAgICB0ZXh0QWxpZ246ICdjZW50ZXInXHJcbiAgfSxcclxuICBhY3Rpb25zOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzIwcHgnLCAnYXV0bycpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtZW5kJyxcclxuICB9LFxyXG59KSk7XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=