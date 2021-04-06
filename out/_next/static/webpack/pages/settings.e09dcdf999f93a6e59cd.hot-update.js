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
      lineNumber: 89,
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
              lineNumber: 94,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
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
              lineNumber: 103,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 102,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 91,
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
              lineNumber: 118,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 117,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.imageContainer,
            item: true,
            xs: 12,
            lg: 3,
            children: !settings.mainImage && loading.mainImage ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 130,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: settings.mainImage,
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 131,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 127,
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
              children: [console.log(config.mainImage, settings.mainImage), "Guardar"]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 115,
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
              lineNumber: 151,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 150,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_10__["default"], {
            className: classes.imageContainer,
            item: true,
            xs: 12,
            lg: 3,
            children: !settings.icon && loading.icon ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 163,
              columnNumber: 19
            }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              src: settings.icon,
              width: "100%"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 164,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
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
              lineNumber: 168,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 167,
            columnNumber: 13
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 149,
          columnNumber: 11
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 148,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 90,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 88,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvc2V0dGluZ3MvaW5kZXguanMiXSwibmFtZXMiOlsiTGlzdFByb2R1Y3RQYWdlIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInVzZUF1dGgiLCJhdXRoIiwiYXV0aERpc3BhdGNoIiwidXNlQ29uZmlnIiwiY29uZmlnIiwiY29uZmlnRGlzcGF0Y2giLCJ1c2VTdGF0ZSIsIm1haW5JbWFnZSIsImljb24iLCJwaG9uZSIsInNldHRpbmdzIiwic2V0U2V0dGluZ3MiLCJsb2FkaW5nIiwic2V0TG9hZGluZyIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInVzZUVmZmVjdCIsInVzZXIiLCJlbWFpbCIsInJvdXRlciIsInB1c2giLCJnZXRTZXR0aW5ncyIsImdldEl0ZW0iLCJjb2xsZWN0aW9uIiwiaWQiLCJ0aGVuIiwic25hcHNob3QiLCJkYXRhIiwiY3JlYXRlU2V0dGluZ3MiLCJ2YXJpYW50IiwiZXJyb3IiLCJvbk1haW5JbWFnZUNoYW5nZXMiLCJmaWxlcyIsImxlbmd0aCIsImFwcCIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsIm5hbWUiLCJwdXQiLCJtZXRhZGF0YSIsImZ1bGxQYXRoIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJvbkljb25DaGFuZ2VzIiwiaGFuZGxlT25TdWJtaXQiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZWRpdEl0ZW0iLCJtYXJnaW5Ub3AiLCJzdHJpcHBlZCIsImZ1bGxXaWR0aCIsInRhcmdldCIsInZhbHVlIiwiYWN0aW9ucyIsImltYWdlQ29udGFpbmVyIiwiY29uc29sZSIsImxvZyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInJvb3QiLCJvdmVyZmxvdyIsImJhY2tncm91bmRDb2xvciIsInBhbGV0dGUiLCJiYWNrZ3JvdW5kIiwicGFwZXIiLCJtYXJnaW4iLCJzcGFjaW5nIiwiZGlzcGxheSIsImdhcCIsImZsZXhEaXJlY3Rpb24iLCJwYWRkaW5nIiwibGlnaHRHcmVlbiIsIm1haW4iLCJ3aWR0aCIsIm1heEhlaWd0aCIsIm9iamVjdEZpdCIsIm1hcmdpbkJvdHRvbSIsInRleHRBbGlnbiIsImFsaWduSXRlbXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUEsSUFBTUEsZUFBZSxHQUFHLFNBQWxCQSxlQUFrQixHQUFNO0FBQUE7O0FBQzVCLE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6Qjs7QUFENEIsaUJBRUNDLHNFQUFPLEVBRlI7QUFBQTtBQUFBLE1BRXJCQyxJQUZxQjtBQUFBLE1BRWZDLFlBRmU7O0FBQUEsbUJBR0tDLDBFQUFTLEVBSGQ7QUFBQTtBQUFBLE1BR3JCQyxNQUhxQjtBQUFBLE1BR2JDLGNBSGE7O0FBQUEsa0JBSUlDLHNEQUFRLENBQUM7QUFBRUMsYUFBUyxFQUFFLEVBQWI7QUFBaUJDLFFBQUksRUFBRSxFQUF2QjtBQUEyQkMsU0FBSyxFQUFFO0FBQWxDLEdBQUQsQ0FKWjtBQUFBLE1BSXJCQyxRQUpxQjtBQUFBLE1BSVhDLFdBSlc7O0FBQUEsbUJBS0VMLHNEQUFRLENBQUM7QUFBRUUsUUFBSSxFQUFFLEtBQVI7QUFBZUQsYUFBUyxFQUFFO0FBQTFCLEdBQUQsQ0FMVjtBQUFBLE1BS3JCSyxPQUxxQjtBQUFBLE1BS1pDLFVBTFk7O0FBQUEscUJBT2VDLDZEQUFXLEVBUDFCO0FBQUEsTUFPcEJDLGVBUG9CLGdCQU9wQkEsZUFQb0I7QUFBQSxNQU9IQyxhQVBHLGdCQU9IQSxhQVBHOztBQVM1QkMseURBQVMsQ0FBQyxZQUFNO0FBQ2QsUUFBSSxDQUFDaEIsSUFBSSxDQUFDaUIsSUFBTCxDQUFVQyxLQUFmLEVBQXNCO0FBQ3BCQyxZQUFNLENBQUNDLElBQVAsQ0FBWSxRQUFaO0FBQ0Q7O0FBQ0RDLGVBQVc7QUFDWixHQUxRLEVBS04sRUFMTSxD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QixhQUFTLEVBQUU7QUFDVHVCLFdBQUssRUFBRSxNQURFO0FBRVRDLGVBQVMsRUFBRSxNQUZGO0FBR1RDLGVBQVMsRUFBRTtBQUhGLEtBakI0QjtBQXNCdkNyQixrQkFBYyxFQUFFO0FBQ2ROLGVBQVMsRUFBRSxNQURHO0FBRWQ0QixrQkFBWSxFQUFFLE1BRkE7QUFHZEMsZUFBUyxFQUFFO0FBSEcsS0F0QnVCO0FBMkJ2Q3hCLFdBQU8sRUFBRTtBQUNQWSxZQUFNLEVBQUVQLEtBQUssQ0FBQ1EsT0FBTixDQUFjLE1BQWQsRUFBc0IsTUFBdEIsQ0FERDtBQUVQQyxhQUFPLEVBQUUsTUFGRjtBQUdQVyxnQkFBVSxFQUFFO0FBSEw7QUEzQjhCLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3NldHRpbmdzLmUwOWRjZGY5OTlmOTNhNmU1OWNkLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VBdXRoIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvQXV0aC5jb250ZXh0J1xyXG5pbXBvcnQgeyB1c2VDb25maWcgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Db25maWcuY29udGV4dCdcclxuaW1wb3J0IHsgdXNlU25hY2tiYXIgfSBmcm9tICdub3Rpc3RhY2snXHJcblxyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgeyBEcm9wem9uZUFyZWEgfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcclxuXHJcbmltcG9ydCBBcHBBcHBCYXIgZnJvbSAnLi4vLi4vbW9kdWxlcy92aWV3cy9BcHBBcHBCYXInXHJcblxyXG5pbXBvcnQgYXBwLCB7IGNyZWF0ZVNldHRpbmdzLCBnZXRJdGVtLCBlZGl0SXRlbSB9IGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmNvbnN0IExpc3RQcm9kdWN0UGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCBbYXV0aCwgYXV0aERpc3BhdGNoXSA9IHVzZUF1dGgoKVxyXG4gIGNvbnN0IFtjb25maWcsIGNvbmZpZ0Rpc3BhdGNoXSA9IHVzZUNvbmZpZygpXHJcbiAgY29uc3QgW3NldHRpbmdzLCBzZXRTZXR0aW5nc10gPSB1c2VTdGF0ZSh7IG1haW5JbWFnZTogJycsIGljb246ICcnLCBwaG9uZTogJycgfSlcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZSh7IGljb246IGZhbHNlLCBtYWluSW1hZ2U6IGZhbHNlfSlcclxuXHJcbiAgY29uc3QgeyBlbnF1ZXVlU25hY2tiYXIsIGNsb3NlU25hY2tiYXIgfSA9IHVzZVNuYWNrYmFyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghYXV0aC51c2VyLmVtYWlsKSB7XHJcbiAgICAgIHJvdXRlci5wdXNoKCcvbG9naW4nKVxyXG4gICAgfVxyXG4gICAgZ2V0U2V0dGluZ3MoKVxyXG4gIH0sIFtdKVxyXG4gIFxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRTZXR0aW5ncyh7IG1haW5JbWFnZTogY29uZmlnLm1haW5JbWFnZSwgaWNvbjogY29uZmlnLmljb24sIHBob25lOiBjb25maWcucGhvbmUgfSlcclxuICB9LCBbY29uZmlnXSlcclxuXHJcbiAgY29uc3QgZ2V0U2V0dGluZ3MgPSAoKSA9PiB7XHJcbiAgICBnZXRJdGVtKHsgY29sbGVjdGlvbjogJ3NldHRpbmdzJywgaWQ6ICdzZXR0aW5ncycgfSlcclxuICAgICAgLnRoZW4oc25hcHNob3QgPT4ge1xyXG4gICAgICAgIGlmICghc25hcHNob3QuZGF0YSgpKSB7XHJcbiAgICAgICAgICBjcmVhdGVTZXR0aW5ncyh7IHNldHRpbmdzIH0pXHJcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ1NlIGhhIGNyZWFkbyBlbCBwcm9kdWN0byBjb3JyZWN0YW1lbnRlJywgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiBlbnF1ZXVlU25hY2tiYXIoJ0hhIG9jdXJyaWRvIHVuIGVycm9yJywgeyB2YXJpYW50OiAnZXJyb3InfSkpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldFNldHRpbmdzKHNuYXBzaG90LmRhdGEoKSlcclxuICAgICAgICBlbnF1ZXVlU25hY2tiYXIoJ1NlIGNhcmdhcm9uIGNvcnJlY3RhbWVudGUgbGFzIGNvbmZpZ3VyYWNpb25lcyBhY3R1YWxlcycsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcclxuICAgICAgfSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uTWFpbkltYWdlQ2hhbmdlcyA9IChmaWxlcykgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBtYWluSW1hZ2U6ICcnIH0pXHJcbiAgICAgIHNldExvYWRpbmcoeyAuLi5sb2FkaW5nLCBtYWluSW1hZ2U6IHRydWUgfSlcclxuICAgICAgYXBwLnN0b3JhZ2UoKS5yZWYoKS5jaGlsZCgnL2ltYWdlcycpLmNoaWxkKGZpbGVzWzBdLm5hbWUpLnB1dChmaWxlc1swXSlcclxuICAgICAgICAudGhlbihzbmFwc2hvdCA9PiBhcHAuc3RvcmFnZSgpLnJlZihzbmFwc2hvdC5tZXRhZGF0YS5mdWxsUGF0aCkuZ2V0RG93bmxvYWRVUkwoKSlcclxuICAgICAgICAudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgc2V0TG9hZGluZyh7Li4ubG9hZGluZywgbWFpbkltYWdlOiBmYWxzZSB9KVxyXG4gICAgICAgICAgc2V0U2V0dGluZ3MoeyAuLi5zZXR0aW5ncywgbWFpbkltYWdlOiB1cmwgfSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25JY29uQ2hhbmdlcyA9IChmaWxlcykgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBpY29uOiAnJyB9KVxyXG4gICAgICBzZXRMb2FkaW5nKHsgLi4ubG9hZGluZywgaWNvbjogdHJ1ZSB9KVxyXG4gICAgICBhcHAuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCcvaW1hZ2VzJykuY2hpbGQoZmlsZXNbMF0ubmFtZSkucHV0KGZpbGVzWzBdKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IGFwcC5zdG9yYWdlKCkucmVmKHNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoKS5nZXREb3dubG9hZFVSTCgpKVxyXG4gICAgICAgIC50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICBzZXRMb2FkaW5nKHsgLi4ubG9hZGluZywgaWNvbjogZmFsc2UgfSlcclxuICAgICAgICAgIHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIGljb246IHVybCB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKVxyXG4gICAgZWRpdEl0ZW0oeyBjb2xsZWN0aW9uOiAnc2V0dGluZ3MnLCBpZDogJ3NldHRpbmdzJywgZGF0YTogc2V0dGluZ3MgfSlcclxuICAgICAgLnRoZW4oKCkgPT4gZW5xdWV1ZVNuYWNrYmFyKCdTZSBoYSBlZGl0YWRvIGxhIGNvbmZpZ3VyYWNpw7NuJywgeyB2YXJpYW50OiAnc3VjY2Vzcyd9KSApXHJcbiAgICAgIC5jYXRjaCgoZXJyb3IpID0+IGVucXVldWVTbmFja2JhcignSGEgb2N1cnJpZG8gdW4gZXJyb3InLCB7IHZhcmlhbnQ6ICdlcnJvcid9KSlcclxuICB9XHJcblxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICA8QXBwQXBwQmFyIC8+XHJcbiAgICAgIDxDb250YWluZXIgbWF4V2lkdGg9XCJsZ1wiIGNsYXNzTmFtZT17Y2xhc3Nlcy5tYXJnaW5Ub3B9PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5zdHJpcHBlZH0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVPblN1Ym1pdChkYXRhKX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjb2xzPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs5fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJUZWzDqWZvbm9cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJUZWzDqWZvbm8gKHNpbiBndWlvbmVzLCAwIG5pIDE1LiBFajogMzQxMzIxNjU0OSlcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3NldHRpbmdzLnBob25lfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBwaG9uZTogdGFyZ2V0LnZhbHVlIH0pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXszfSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWQ9e3NldHRpbmdzLnBob25lID09PSBjb25maWcucGhvbmUgfHwgIXNldHRpbmdzLnBob25lfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMuc3RyaXBwZWR9IG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiSW1hZ2VuIHByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpbGVzKSA9PiBvbk1haW5JbWFnZUNoYW5nZXMoZmlsZXMpfVxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHNldFNldHRpbmdzKHsgLi4uc2V0dGluZ3MsIG1haW5JbWFnZTogJycgfSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VDb250YWluZXJ9IGl0ZW0geHM9ezEyfSBsZz17M30+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgIXNldHRpbmdzLm1haW5JbWFnZSAmJiBsb2FkaW5nLm1haW5JbWFnZVxyXG4gICAgICAgICAgICAgICAgPyA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICAgICAgOiA8aW1nIHNyYz17c2V0dGluZ3MubWFpbkltYWdlfSB3aWR0aD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezN9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZD17c2V0dGluZ3MubWFpbkltYWdlID09PSBjb25maWcubWFpbkltYWdlIHx8ICFzZXR0aW5ncy5tYWluSW1hZ2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge2NvbnNvbGUubG9nKGNvbmZpZy5tYWluSW1hZ2UsIHNldHRpbmdzLm1haW5JbWFnZSl9XHJcbiAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnN0cmlwcGVkfSBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU9uU3VibWl0KGRhdGEpfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNvbHM9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIsONY29ub1wiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpbGVzKSA9PiBvbkljb25DaGFuZ2VzKGZpbGVzKX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBzZXRTZXR0aW5ncyh7IC4uLnNldHRpbmdzLCBpY29uOiAnJ30pfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQ29udGFpbmVyfSBpdGVtIHhzPXsxMn0gbGc9ezN9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAhc2V0dGluZ3MuaWNvbiAmJiBsb2FkaW5nLmljb25cclxuICAgICAgICAgICAgICAgID8gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICAgICAgIDogPGltZyBzcmM9e3NldHRpbmdzLmljb259IHdpZHRoPVwiMTAwJVwiIC8+XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17M30gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgIGRpc2FibGVkPXtzZXR0aW5ncy5pY29uID09PSBjb25maWcuaWNvbiB8fCAhc2V0dGluZ3MuaWNvbn1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICAgIDwvQ29udGFpbmVyPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IExpc3RQcm9kdWN0UGFnZVxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgb3ZlcmZsb3c6ICdoaWRkZW4nLFxyXG4gICAgYmFja2dyb3VuZENvbG9yOiB0aGVtZS5wYWxldHRlLmJhY2tncm91bmQucGFwZXIsXHJcbiAgfSxcclxuICBtYXJnaW5Ub3A6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnNzBweCcsICdhdXRvJyksXHJcbiAgICBkaXNwbGF5OiAnZ3JpZCcsXHJcbiAgICBnYXA6IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICB9LFxyXG4gIHN0cmlwcGVkOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgJyY6bnRoLWNoaWxkKG9kZCknOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUubGlnaHRHcmVlbi5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1heEhlaWd0aDogJzEwMCUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY29udGFpbicsXHJcbiAgfSxcclxuICBpbWFnZUNvbnRhaW5lcjoge1xyXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcidcclxuICB9LFxyXG4gIGFjdGlvbnM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnMjBweCcsICdhdXRvJyksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBhbGlnbkl0ZW1zOiAnZmxleC1lbmQnLFxyXG4gIH0sXHJcbn0pKTtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==