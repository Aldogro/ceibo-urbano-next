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
      return;
    } else {
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
    }
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
      localStorage.setItem('ceibo-urbano-settings', settings);
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
      lineNumber: 105,
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
              lineNumber: 110,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
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
              lineNumber: 119,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 108,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 107,
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
              lineNumber: 134,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.imageContainer,
            item: true,
            xs: 12,
            lg: 3,
            children: !settings.mainImage && loading.mainImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 146,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: settings.mainImage,
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 147,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 143,
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
              lineNumber: 151,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 132,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 131,
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
              lineNumber: 166,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.imageContainer,
            item: true,
            xs: 12,
            lg: 3,
            children: !settings.icon && loading.icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: settings.icon,
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 175,
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
              lineNumber: 183,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 182,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 164,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 163,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 106,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 104,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiTGlzdFByb2R1Y3RQYWdlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUF1dGgiLCJhdXRoIiwiYXV0aERpc3BhdGNoIiwidXNlQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1haW5JbWFnZSIsImljb24iLCJwaG9uZSIsInNldHRpbmdzIiwic2V0U2V0dGluZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInVzZUVmZmVjdCIsInVzZXIiLCJlbWFpbCIsInJvdXRlciIsInB1c2giLCJnZXRTZXR0aW5ncyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJ0eXBlIiwiQ29uZmlnQWN0aW9uVHlwZSIsIlNFVF9TRVRUSU5HUyIsInBheWxvYWQiLCJKU09OIiwicGFyc2UiLCJjb2xsZWN0aW9uIiwiaWQiLCJ0aGVuIiwic25hcHNob3QiLCJkYXRhIiwiY3JlYXRlU2V0dGluZ3MiLCJ2YXJpYW50IiwiZXJyb3IiLCJzZXRJdGVtIiwic3RyaW5naWZ5Iiwib25NYWluSW1hZ2VDaGFuZ2VzIiwiZmlsZXMiLCJsZW5ndGgiLCJhcHAiLCJzdG9yYWdlIiwicmVmIiwiY2hpbGQiLCJuYW1lIiwicHV0IiwibWV0YWRhdGEiLCJmdWxsUGF0aCIsImdldERvd25sb2FkVVJMIiwidXJsIiwib25JY29uQ2hhbmdlcyIsImhhbmRsZU9uU3VibWl0IiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImVkaXRJdGVtIiwibWFyZ2luVG9wIiwic3RyaXBwZWQiLCJmdWxsV2lkdGgiLCJ0YXJnZXQiLCJ2YWx1ZSIsImFjdGlvbnMiLCJpbWFnZUNvbnRhaW5lciIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJtYXJnaW4iLCJzcGFjaW5nIiwiZGlzcGxheSIsImdhcCIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwibGlnaHRHcmVlbiIsIm1haW4iLCJ3aWR0aCIsIm1heEhlaWd0aCIsIm9iamVjdEZpdCIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQzVCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6Qjs7QUFENEIsaUJBRUNDLHNFQUFPLEVBRlI7QUFBQTtBQUFBLE1BRXJCQyxJQUZxQjtBQUFBLE1BRWZDLFlBRmU7O0FBQUEsbUJBR0tDLDBFQUFTLEVBSGQ7QUFBQTtBQUFBLE1BR3JCQyxNQUhxQjtBQUFBLE1BR2JDLGNBSGE7O0FBQUEsa0JBSUlDLHNEQUFRLENBQUM7QUFBRUMsYUFBUyxFQUFFLEVBQWI7QUFBaUJDLFFBQUksRUFBRSxFQUF2QjtBQUEyQkMsU0FBSyxFQUFFO0FBQWxDLEdBQUQsQ0FKWjtBQUFBLE1BSXJCQyxRQUpxQjtBQUFBLE1BSVhDLFdBSlc7O0FBQUEsbUJBS0VMLHNEQUFRLENBQUM7QUFBRUUsUUFBSSxFQUFFLEtBQVI7QUFBZUQsYUFBUyxFQUFFO0FBQTFCLEdBQUQsQ0FMVjtBQUFBLE1BS3JCSyxPQUxxQjtBQUFBLE1BS1pDLFVBTFk7O0FBQUEscUJBT2VDLDZEQUFXLEVBUDFCO0FBQUEsTUFPcEJDLGVBUG9CLGdCQU9wQkEsZUFQb0I7QUFBQSxNQU9IQyxhQVBHLGdCQU9IQSxhQVBHOztBQVM1QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDaEIsSUFBSSxDQUFDaUIsSUFBTCxD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TixDQUFjQyxVQUFkLENBQXlCQztBQUZ0QyxLQURpQztBQUt2Q2QsYUFBUyxFQUFFO0FBQ1RlLFlBQU0sRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWMsTUFBZCxFQUFzQixNQUF0QixDQURDO0FBRVRDLGFBQU8sRUFBRSxNQUZBO0FBR1RDLFNBQUcsRUFBRVYsS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZCxDQUhJO0FBSVRHLG1CQUFhLEVBQUU7QUFKTixLQUw0QjtBQVd2Q2xCLFlBQVEsRUFBRTtBQUNSbUIsYUFBTyxFQUFFWixLQUFLLENBQUNRLE9BQU4sQ0FBYyxDQUFkLENBREQ7QUFFUiwwQkFBb0I7QUFDbEJILGtCQUFVLEVBQUVMLEtBQUssQ0FBQ0ksT0FBTixDQUFjUyxVQUFkLENBQXlCQztBQURuQjtBQUZaLEtBWDZCO0FBaUJ2Q3BCLGFBQVMsRUFBRTtBQUNUcUIsV0FBSyxFQUFFLE1BREU7QUFFVEMsZUFBUyxFQUFFLE1BRkY7QUFHVEMsZUFBUyxFQUFFO0FBSEYsS0FqQjRCO0FBc0J2Q25CLGtCQUFjLEVBQUU7QUFDZE4sZUFBUyxFQUFFLE1BREc7QUFFZDBCLGtCQUFZLEVBQUUsTUFGQTtBQUdkQyxlQUFTLEVBQUU7QUFIRyxLQXRCdUI7QUEyQnZDdEIsV0FBTyxFQUFFO0FBQ1BVLFlBQU0sRUFBRVAsS0FBSyxDQUFDUSxPQUFOLENBQWMsTUFBZCxFQUFzQixNQUF0QixDQUREO0FBRVBDLGFBQU8sRUFBRSxNQUZGO0FBR1BXLGdCQUFVLEVBQUU7QUFITDtBQTNCOEIsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvc2V0dGluZ3MuYzlkOTI0YTlhODAzNzAxOGJlZjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZUF1dGggfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9BdXRoLmNvbnRleHQnXHJcbmltcG9ydCB7IHVzZUNvbmZpZywgQWN0aW9uVHlwZSBhcyBDb25maWdBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQ29uZmlnLmNvbnRleHQnXHJcbmltcG9ydCB7IHVzZVNuYWNrYmFyIH0gZnJvbSAnbm90aXN0YWNrJ1xyXG5cclxuaW1wb3J0IENpcmN1bGFyUHJvZ3Jlc3MgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ2lyY3VsYXJQcm9ncmVzcydcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IHsgRHJvcHpvbmVBcmVhIH0gZnJvbSAnbWF0ZXJpYWwtdWktZHJvcHpvbmUnXHJcblxyXG5pbXBvcnQgQXBwQXBwQmFyIGZyb20gJy4uLy4uL21vZHVsZXMvdmlld3MvQXBwQXBwQmFyJ1xyXG5cclxuaW1wb3J0IGFwcCwgeyBjcmVhdGVTZXR0aW5ncywgZ2V0SXRlbSwgZWRpdEl0ZW0gfSBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5jb25zdCBMaXN0UHJvZHVjdFBhZ2UgPSAoKSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3QgW2F1dGgsIGF1dGhEaXNwYXRjaF0gPSB1c2VBdXRoKClcclxuICBjb25zdCBbY29uZmlnLCBjb25maWdEaXNwYXRjaF0gPSB1c2VDb25maWcoKVxyXG4gIGNvbnN0IFtzZXR0aW5ncywgc2V0U2V0dGluZ3NdID0gdXNlU3RhdGUoeyBtYWluSW1hZ2U6ICcnLCBpY29uOiAnJywgcGhvbmU6ICcnIH0pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoeyBpY29uOiBmYWxzZSwgbWFpbkltYWdlOiBmYWxzZX0pXHJcblxyXG4gIGNvbnN0IHsgZW5xdWV1ZVNuYWNrYmFyLCBjbG9zZVNuYWNrYmFyIH0gPSB1c2VTbmFja2JhcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWF1dGgudXNlci5lbWFpbCkge1xyXG4gICAgICByb3V0ZXIucHVzaCgnL2xvZ2luJylcclxuICAgIH1cclxuICAgIGdldFNldHRpbmdzKClcclxuICB9LCBbXSlcclxuICBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgc2V0U2V0dGluZ3Moe1xyXG4gICAgICBtYWluSW1hZ2U6IGNvbmZpZy5tYWluSW1hZ2UsXHJcbiAgICAgIGljb246IGNvbmZpZy5pY29uLFxyXG4gICAgICBwaG9uZTogY29uZmlnLnBob25lLFxyXG4gICAgfSlcclxuICB9LCBbY29uZmlnXSlcclxuXHJcbiAgY29uc3QgZ2V0U2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NlaWJvLXVyYmFuby1zZXR0aW5ncycpKSB7XHJcbiAgICAgIGNvbmZpZ0Rpc3BhdGNoKHtcclxuICAgICAgICB0eXBlOiBDb25maWdBY3Rpb25UeXBlLlNFVF9TRVRUSU5HUyxcclxuICAgICAgICBwYXlsb2FkOiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdjZWliby11cmJhbm8tc2V0dGluZ3MnKSlcclxuICAgICAgfSlcclxuICAgICAgcmV0dXJuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBnZXRJdGVtKHsgY29sbGVjdGlvbjogJ3NldHRpbmdzJywgaWQ6ICdzZXR0aW5ncycgfSlcclxuICAgICAgICAudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgICBpZiAoIXNuYXBzaG90LmRhdGEoKSkge1xyXG4gICAgICAgICAgICBjcmVhdGVTZXR0aW5ncyh7IHNldHRpbmdzIH0pXHJcbiAgICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdTZSBoYSBjcmVhZG8gZWwgcHJvZHVjdG8gY29ycmVjdGFtZW50ZScsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcclxuICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVucXVldWVTbmFja2JhcignSGEgb2N1cnJpZG8gdW4gZXJyb3InLCB7IHZhcmlhbnQ6ICdlcnJvcid9KSlcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHNldFNldHRpbmdzKHNuYXBzaG90LmRhdGEoKSlcclxuICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjZWliby11cmJhbm8tc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpXHJcbiAgICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ1NlIGNhcmdhcm9uIGNvcnJlY3RhbWVudGUgbGFzIGNvbmZpZ3VyYWNpb25lcyBhY3R1YWxlcycsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25NYWluSW1hZ2VDaGFuZ2VzID0gKGZpbGVzKSA9PiB7XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIG1haW5JbWFnZTogJycgfSlcclxuICAgICAgc2V0TG9hZGluZyh7IC4uLmxvYWRpbmcsIG1haW5JbWFnZTogdHJ1ZSB9KVxyXG4gICAgICBhcHAuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCcvaW1hZ2VzJykuY2hpbGQoZmlsZXNbMF0ubmFtZSkucHV0KGZpbGVzWzBdKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IGFwcC5zdG9yYWdlKCkucmVmKHNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoKS5nZXREb3dubG9hZFVSTCgpKVxyXG4gICAgICAgIC50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHsuLi5sb2FkaW5nLCBtYWluSW1hZ2U6IGZhbHNlIH0pXHJcbiAgICAgICAgICBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBtYWluSW1hZ2U6IHVybCB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkljb25DaGFuZ2VzID0gKGZpbGVzKSA9PiB7XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIGljb246ICcnIH0pXHJcbiAgICAgIHNldExvYWRpbmcoeyAuLi5sb2FkaW5nLCBpY29uOiB0cnVlIH0pXHJcbiAgICAgIGFwcC5zdG9yYWdlKCkucmVmKCkuY2hpbGQoJy9pbWFnZXMnKS5jaGlsZChmaWxlc1swXS5uYW1lKS5wdXQoZmlsZXNbMF0pXHJcbiAgICAgICAgLnRoZW4oc25hcHNob3QgPT4gYXBwLnN0b3JhZ2UoKS5yZWYoc25hcHNob3QubWV0YWRhdGEuZnVsbFBhdGgpLmdldERvd25sb2FkVVJMKCkpXHJcbiAgICAgICAgLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoeyAuLi5sb2FkaW5nLCBpY29uOiBmYWxzZSB9KVxyXG4gICAgICAgICAgc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgaWNvbjogdXJsIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBlZGl0SXRlbSh7IGNvbGxlY3Rpb246ICdzZXR0aW5ncycsIGlkOiAnc2V0dGluZ3MnLCBkYXRhOiBzZXR0aW5ncyB9KVxyXG4gICAgICAudGhlbigoKSA9PiB7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ2NlaWJvLXVyYmFuby1zZXR0aW5ncycsIHNldHRpbmdzKVxyXG4gICAgICAgIGVucXVldWVTbmFja2JhcignU2UgaGEgZWRpdGFkbyBsYSBjb25maWd1cmFjacOzbicsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKChlcnJvcikgPT4gZW5xdWV1ZVNuYWNrYmFyKCdIYSBvY3VycmlkbyB1biBlcnJvcicsIHsgdmFyaWFudDogJ2Vycm9yJ30pKVxyXG4gIH1cclxuXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBBcHBCYXIgLz5cclxuICAgICAgPENvbnRhaW5lciBtYXhXaWR0aD1cImxnXCIgY2xhc3NOYW1lPXtjbGFzc2VzLm1hcmdpblRvcH0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnN0cmlwcGVkfSBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU9uU3VibWl0KGRhdGEpfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNvbHM9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezl9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIlRlbMOpZm9ub1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlRlbMOpZm9ubyAoc2luIGd1aW9uZXMsIDAgbmkgMTUuIEVqOiAzNDEzMjE2NTQ5KVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17c2V0dGluZ3MucGhvbmV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIHBob25lOiB0YXJnZXQudmFsdWUgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2V0dGluZ3MucGhvbmUgPT09IGNvbmZpZy5waG9uZSB8fCAhc2V0dGluZ3MucGhvbmV9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHJpcHBlZH0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVPblN1Ym1pdChkYXRhKX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjb2xzPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs2fT5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmVBcmVhXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlLyonXX1cclxuICAgICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezF9XHJcbiAgICAgICAgICAgICAgICBtYXhGaWxlU2l6ZT17MTAwMDAwMDB9XHJcbiAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9XCJJbWFnZW4gcHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uTWFpbkltYWdlQ2hhbmdlcyhmaWxlcyl9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgbWFpbkltYWdlOiAnJyB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUNvbnRhaW5lcn0gaXRlbSB4cz17MTJ9IGxnPXszfT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhc2V0dGluZ3MubWFpbkltYWdlICYmIGxvYWRpbmcubWFpbkltYWdlXHJcbiAgICAgICAgICAgICAgICA/IDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgICAgICAgICA6IDxpbWcgc3JjPXtzZXR0aW5ncy5tYWluSW1hZ2V9IHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZXR0aW5ncy5tYWluSW1hZ2UgPT09IGNvbmZpZy5tYWluSW1hZ2UgfHwgIXNldHRpbmdzLm1haW5JbWFnZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnN0cmlwcGVkfSBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU9uU3VibWl0KGRhdGEpfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNvbHM9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIsONY29ub1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpbGVzKSA9PiBvbkljb25DaGFuZ2VzKGZpbGVzKX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBpY29uOiAnJ30pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQ29udGFpbmVyfSBpdGVtIHhzPXsxMn0gbGc9ezN9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhc2V0dGluZ3MuaWNvbiAmJiBsb2FkaW5nLmljb25cclxuICAgICAgICAgICAgICAgID8gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICAgICAgIDogPGltZyBzcmM9e3NldHRpbmdzLmljb259IHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZXR0aW5ncy5pY29uID09PSBjb25maWcuaWNvbiB8fCAhc2V0dGluZ3MuaWNvbn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQcm9kdWN0UGFnZVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBtYXJnaW5Ub3A6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnNzBweCcsICdhdXRvJyksXHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBnYXA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIHN0cmlwcGVkOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgJyY6bnRoLWNoaWxkKG9kZCknOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUubGlnaHRHcmVlbi5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1heEhlaWd0aDogJzEwMCUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY29udGFpbicsXHJcbiAgfSxcclxuICBpbWFnZUNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9LFxyXG4gIGFjdGlvbnM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnMjBweCcsICdhdXRvJyksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==