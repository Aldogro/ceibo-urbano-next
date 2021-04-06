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
      lineNumber: 95,
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
              lineNumber: 100,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
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
              lineNumber: 109,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 97,
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
              lineNumber: 124,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.imageContainer,
            item: true,
            xs: 12,
            lg: 3,
            children: !settings.mainImage && loading.mainImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 136,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: settings.mainImage,
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 137,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
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
              lineNumber: 141,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 140,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 122,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 121,
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
              lineNumber: 156,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 155,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.imageContainer,
            item: true,
            xs: 12,
            lg: 3,
            children: !settings.icon && loading.icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 168,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: settings.icon,
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 169,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 165,
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
              lineNumber: 173,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 172,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 154,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 153,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 94,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiTGlzdFByb2R1Y3RQYWdlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUF1dGgiLCJhdXRoIiwiYXV0aERpc3BhdGNoIiwidXNlQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1haW5JbWFnZSIsImljb24iLCJwaG9uZSIsInNldHRpbmdzIiwic2V0U2V0dGluZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInVzZUVmZmVjdCIsInVzZXIiLCJlbWFpbCIsInJvdXRlciIsInB1c2giLCJnZXRTZXR0aW5ncyIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwiY29sbGVjdGlvbiIsImlkIiwidGhlbiIsInNuYXBzaG90IiwiZGF0YSIsImNyZWF0ZVNldHRpbmdzIiwidmFyaWFudCIsImVycm9yIiwic2V0SXRlbSIsInN0cmluZ2lmeSIsIm9uTWFpbkltYWdlQ2hhbmdlcyIsImZpbGVzIiwibGVuZ3RoIiwiYXBwIiwic3RvcmFnZSIsInJlZiIsImNoaWxkIiwibmFtZSIsInB1dCIsIm1ldGFkYXRhIiwiZnVsbFBhdGgiLCJnZXREb3dubG9hZFVSTCIsInVybCIsIm9uSWNvbkNoYW5nZXMiLCJoYW5kbGVPblN1Ym1pdCIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJlZGl0SXRlbSIsIm1hcmdpblRvcCIsInN0cmlwcGVkIiwiZnVsbFdpZHRoIiwidGFyZ2V0IiwidmFsdWUiLCJhY3Rpb25zIiwiaW1hZ2VDb250YWluZXIiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwib3ZlcmZsb3ciLCJiYWNrZ3JvdW5kQ29sb3IiLCJwYWxldHRlIiwiYmFja2dyb3VuZCIsInBhcGVyIiwibWFyZ2luIiwic3BhY2luZyIsImRpc3BsYXkiLCJnYXAiLCJmbGV4RGlyZWN0aW9uIiwicGFkZGluZyIsImxpZ2h0R3JlZW4iLCJtYWluIiwid2lkdGgiLCJtYXhIZWlndGgiLCJvYmplY3RGaXQiLCJtYXJnaW5Cb3R0b20iLCJ0ZXh0QWxpZ24iLCJhbGlnbkl0ZW1zIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBLElBQU1BLGVBQWUsR0FBRyxTQUFsQkEsZUFBa0IsR0FBTTtBQUFBOztBQUM1QixNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7O0FBRDRCLGlCQUVDQyxzRUFBTyxFQUZSO0FBQUE7QUFBQSxNQUVyQkMsSUFGcUI7QUFBQSxNQUVmQyxZQUZlOztBQUFBLG1CQUdLQywwRUFBUyxFQUhkO0FBQUE7QUFBQSxNQUdyQkMsTUFIcUI7QUFBQSxNQUdiQyxjQUhhOztBQUFBLGtCQUlJQyxzREFBUSxDQUFDO0FBQUVDLGFBQVMsRUFBRSxFQUFiO0FBQWlCQyxRQUFJLEVBQUUsRUFBdkI7QUFBMkJDLFNBQUssRUFBRTtBQUFsQyxHQUFELENBSlo7QUFBQSxNQUlyQkMsUUFKcUI7QUFBQSxNQUlYQyxXQUpXOztBQUFBLG1CQUtFTCxzREFBUSxDQUFDO0FBQUVFLFFBQUksRUFBRSxLQUFSO0FBQWVELGFBQVMsRUFBRTtBQUExQixHQUFELENBTFY7QUFBQSxNQUtyQkssT0FMcUI7QUFBQSxNQUtaQyxVQUxZOztBQUFBLHFCQU9lQyw2REFBVyxFQVAxQjtBQUFBLE1BT3BCQyxlQVBvQixnQkFPcEJBLGVBUG9CO0FBQUEsTUFPSEMsYUFQRyxnQkFPSEEsYUFQRzs7QUFTNUJDLHlEQUFTLENBQUMsWUFBTTtBQUNkLFFBQUksQ0FBQ2hCLElBQUksQ0FBQ2lCLElBQUwsQ0FBVUMsS0FBZixFQUFzQjtBQUNwQkMsWUFBTSxDQUFDQyxJ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LEVBQUU7QUFDUm1CLGFBQU8sRUFBRVosS0FBSyxDQUFDUSxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVIsMEJBQW9CO0FBQ2xCSCxrQkFBVSxFQUFFTCxLQUFLLENBQUNJLE9BQU4sQ0FBY1MsVUFBZCxDQUF5QkM7QUFEbkI7QUFGWixLQVg2QjtBQWlCdkNwQixhQUFTLEVBQUU7QUFDVHFCLFdBQUssRUFBRSxNQURFO0FBRVRDLGVBQVMsRUFBRSxNQUZGO0FBR1RDLGVBQVMsRUFBRTtBQUhGLEtBakI0QjtBQXNCdkNuQixrQkFBYyxFQUFFO0FBQ2ROLGVBQVMsRUFBRSxNQURHO0FBRWQwQixrQkFBWSxFQUFFLE1BRkE7QUFHZEMsZUFBUyxFQUFFO0FBSEcsS0F0QnVCO0FBMkJ2Q3RCLFdBQU8sRUFBRTtBQUNQVSxZQUFNLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjLE1BQWQsRUFBc0IsTUFBdEIsQ0FERDtBQUVQQyxhQUFPLEVBQUUsTUFGRjtBQUdQVyxnQkFBVSxFQUFFO0FBSEw7QUEzQjhCLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLjMzY2NjYjdkOTNlZWY5MzY1NDI2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aC5jb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Db25maWcuY29udGV4dCdcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snXHJcblxyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgeyBEcm9wem9uZUFyZWEgfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcclxuXHJcbmltcG9ydCBBcHBBcHBCYXIgZnJvbSAnLi4vLi4vbW9kdWxlcy92aWV3cy9BcHBBcHBCYXInXHJcblxyXG5pbXBvcnQgYXBwLCB7IGNyZWF0ZVNldHRpbmdzLCBnZXRJdGVtLCBlZGl0SXRlbSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmNvbnN0IExpc3RQcm9kdWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBbYXV0aCwgYXV0aERpc3BhdGNoXSA9IHVzZUF1dGgoKVxyXG4gIGNvbnN0IFtjb25maWcsIGNvbmZpZ0Rpc3BhdGNoXSA9IHVzZUNvbmZpZygpXHJcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZSh7IG1haW5JbWFnZTogJycsIGljb246ICcnLCBwaG9uZTogJycgfSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh7IGljb246IGZhbHNlLCBtYWluSW1hZ2U6IGZhbHNlfSlcclxuXHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIsIGNsb3NlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYXV0aC51c2VyLmVtYWlsKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfVxyXG4gICAgZ2V0U2V0dGluZ3MoKVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTZXR0aW5ncyh7XHJcbiAgICAgIG1haW5JbWFnZTogY29uZmlnLm1haW5JbWFnZSxcclxuICAgICAgaWNvbjogY29uZmlnLmljb24sXHJcbiAgICAgIHBob25lOiBjb25maWcucGhvbmUsXHJcbiAgICB9KVxyXG4gIH0sIFtjb25maWddKVxyXG5cclxuICBjb25zdCBnZXRTZXR0aW5ncyA9ICgpID0+IHtcclxuICAgIGNvbnNvbGUubG9nKEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2NlaWJvLXVyYmFuby1zZXR0aW5ncycpKSlcclxuICAgIGdldEl0ZW0oeyBjb2xsZWN0aW9uOiAnc2V0dGluZ3MnLCBpZDogJ3NldHRpbmdzJyB9KVxyXG4gICAgICAudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgaWYgKCFzbmFwc2hvdC5kYXRhKCkpIHtcclxuICAgICAgICAgIGNyZWF0ZVNldHRpbmdzKHsgc2V0dGluZ3MgfSlcclxuICAgICAgICAgICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgIGVucXVldWVTbmFja2JhcignU2UgaGEgY3JlYWRvIGVsIHByb2R1Y3RvIGNvcnJlY3RhbWVudGUnLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJ30pXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVucXVldWVTbmFja2JhcignSGEgb2N1cnJpZG8gdW4gZXJyb3InLCB7IHZhcmlhbnQ6ICdlcnJvcid9KSlcclxuICAgICAgICB9XHJcbiAgICAgICAgc2V0U2V0dGluZ3Moc25hcHNob3QuZGF0YSgpKVxyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdjZWliby11cmJhbm8tc2V0dGluZ3MnLCBKU09OLnN0cmluZ2lmeShzZXR0aW5ncykpXHJcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyKCdTZSBjYXJnYXJvbiBjb3JyZWN0YW1lbnRlIGxhcyBjb25maWd1cmFjaW9uZXMgYWN0dWFsZXMnLCB7IHZhcmlhbnQ6ICdzdWNjZXNzJ30pXHJcbiAgICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbk1haW5JbWFnZUNoYW5nZXMgPSAoZmlsZXMpID0+IHtcclxuICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgbWFpbkltYWdlOiAnJyB9KVxyXG4gICAgICBzZXRMb2FkaW5nKHsgLi4ubG9hZGluZywgbWFpbkltYWdlOiB0cnVlIH0pXHJcbiAgICAgIGFwcC5zdG9yYWdlKCkucmVmKCkuY2hpbGQoJy9pbWFnZXMnKS5jaGlsZChmaWxlc1swXS5uYW1lKS5wdXQoZmlsZXNbMF0pXHJcbiAgICAgICAgLnRoZW4oc25hcHNob3QgPT4gYXBwLnN0b3JhZ2UoKS5yZWYoc25hcHNob3QubWV0YWRhdGEuZnVsbFBhdGgpLmdldERvd25sb2FkVVJMKCkpXHJcbiAgICAgICAgLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgIHNldExvYWRpbmcoey4uLmxvYWRpbmcsIG1haW5JbWFnZTogZmFsc2UgfSlcclxuICAgICAgICAgIHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIG1haW5JbWFnZTogdXJsIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IG9uSWNvbkNoYW5nZXMgPSAoZmlsZXMpID0+IHtcclxuICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgaWNvbjogJycgfSlcclxuICAgICAgc2V0TG9hZGluZyh7IC4uLmxvYWRpbmcsIGljb246IHRydWUgfSlcclxuICAgICAgYXBwLnN0b3JhZ2UoKS5yZWYoKS5jaGlsZCgnL2ltYWdlcycpLmNoaWxkKGZpbGVzWzBdLm5hbWUpLnB1dChmaWxlc1swXSlcclxuICAgICAgICAudGhlbihzbmFwc2hvdCA9PiBhcHAuc3RvcmFnZSgpLnJlZihzbmFwc2hvdC5tZXRhZGF0YS5mdWxsUGF0aCkuZ2V0RG93bmxvYWRVUkwoKSlcclxuICAgICAgICAudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyh7IC4uLmxvYWRpbmcsIGljb246IGZhbHNlIH0pXHJcbiAgICAgICAgICBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBpY29uOiB1cmwgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KClcclxuICAgIGVkaXRJdGVtKHsgY29sbGVjdGlvbjogJ3NldHRpbmdzJywgaWQ6ICdzZXR0aW5ncycsIGRhdGE6IHNldHRpbmdzIH0pXHJcbiAgICAgIC50aGVuKCgpID0+IGVucXVldWVTbmFja2JhcignU2UgaGEgZWRpdGFkbyBsYSBjb25maWd1cmFjacOzbicsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSkgKVxyXG4gICAgICAuY2F0Y2goKGVycm9yKSA9PiBlbnF1ZXVlU25hY2tiYXIoJ0hhIG9jdXJyaWRvIHVuIGVycm9yJywgeyB2YXJpYW50OiAnZXJyb3InfSkpXHJcbiAgfVxyXG5cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgPEFwcEFwcEJhciAvPlxyXG4gICAgICA8Q29udGFpbmVyIG1heFdpZHRoPVwibGdcIiBjbGFzc05hbWU9e2NsYXNzZXMubWFyZ2luVG9wfT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc3RyaXBwZWR9IG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17OX0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiVGVsw6lmb25vXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiVGVsw6lmb25vIChzaW4gZ3Vpb25lcywgMCBuaSAxNS4gRWo6IDM0MTMyMTY1NDkpXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtzZXR0aW5ncy5waG9uZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgcGhvbmU6IHRhcmdldC52YWx1ZSB9KX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZXR0aW5ncy5waG9uZSA9PT0gY29uZmlnLnBob25lIHx8ICFzZXR0aW5ncy5waG9uZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnN0cmlwcGVkfSBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU9uU3VibWl0KGRhdGEpfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNvbHM9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIkltYWdlbiBwcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25NYWluSW1hZ2VDaGFuZ2VzKGZpbGVzKX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBtYWluSW1hZ2U6ICcnIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQ29udGFpbmVyfSBpdGVtIHhzPXsxMn0gbGc9ezN9PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFzZXR0aW5ncy5tYWluSW1hZ2UgJiYgbG9hZGluZy5tYWluSW1hZ2VcclxuICAgICAgICAgICAgICAgID8gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICAgICAgIDogPGltZyBzcmM9e3NldHRpbmdzLm1haW5JbWFnZX0gd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXszfSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NldHRpbmdzLm1haW5JbWFnZSA9PT0gY29uZmlnLm1haW5JbWFnZSB8fCAhc2V0dGluZ3MubWFpbkltYWdlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc3RyaXBwZWR9IG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiw41jb25vXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uSWNvbkNoYW5nZXMoZmlsZXMpfVxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIGljb246ICcnfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VDb250YWluZXJ9IGl0ZW0geHM9ezEyfSBsZz17M30+XHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICFzZXR0aW5ncy5pY29uICYmIGxvYWRpbmcuaWNvblxyXG4gICAgICAgICAgICAgICAgPyA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17c2V0dGluZ3MuaWNvbn0gd2lkdGg9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXszfSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NldHRpbmdzLmljb24gPT09IGNvbmZpZy5pY29uIHx8ICFzZXR0aW5ncy5pY29ufVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgPC9Db250YWluZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTGlzdFByb2R1Y3RQYWdlXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBvdmVyZmxvdzogJ2hpZGRlbicsXHJcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IHRoZW1lLnBhbGV0dGUuYmFja2dyb3VuZC5wYXBlcixcclxuICB9LFxyXG4gIG1hcmdpblRvcDoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCc3MHB4JywgJ2F1dG8nKSxcclxuICAgIGRpc3BsYXk6ICdncmlkJyxcclxuICAgIGdhcDogdGhlbWUuc3BhY2luZyg0KSxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gIH0sXHJcbiAgc3RyaXBwZWQ6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICAnJjpudGgtY2hpbGQob2RkKSc6IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5saWdodEdyZWVuLm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgZnVsbFdpZHRoOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWF4SGVpZ3RoOiAnMTAwJScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb250YWluJyxcclxuICB9LFxyXG4gIGltYWdlQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJ1xyXG4gIH0sXHJcbiAgYWN0aW9uczoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCcyMHB4JywgJ2F1dG8nKSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGFsaWduSXRlbXM6ICdmbGV4LWVuZCcsXHJcbiAgfSxcclxufSkpO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9