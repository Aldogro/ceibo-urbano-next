webpackHotUpdate_N_E("pages/products/[id]/edit",{

/***/ "./modules/components/form/FormProduct.js":
/*!************************************************!*\
  !*** ./modules/components/form/FormProduct.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var _material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/InputLabel */ "./node_modules/@material-ui/core/esm/InputLabel/index.js");
/* harmony import */ var _material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/MenuItem */ "./node_modules/@material-ui/core/esm/MenuItem/index.js");
/* harmony import */ var _material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Select */ "./node_modules/@material-ui/core/esm/Select/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/CircularProgress */ "./node_modules/@material-ui/core/esm/CircularProgress/index.js");
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! material-ui-dropzone */ "./node_modules/material-ui-dropzone/dist/index.es.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _utils_catalog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../utils/catalog */ "./utils/catalog.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../../firebase/firebase.config */ "./firebase/firebase.config.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\form\\FormProduct.js",
    _this = undefined,
    _s = $RefreshSig$();

















var FormProduct = function FormProduct(_ref) {
  _s();

  var _ref$product = _ref.product,
      product = _ref$product === void 0 ? {} : _ref$product,
      onSubmit = _ref.onSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      description = _useState2[0],
      setDescription = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(0),
      price = _useState3[0],
      setPrice = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      cols = _useState4[0],
      setCols = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      picture = _useState5[0],
      setPicture = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      publish = _useState6[0],
      setPublish = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      type = _useState7[0],
      setType = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      loading = _useState8[0],
      setLoading = _useState8[1];

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"])();
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (Object.keys(product).length !== 0) {
      setName(product.name);
      setDescription(product.description);
      setPrice(+product.price);
      setCols(product.cols);
      setPicture(product.picture);
      setPublish(product.publish);
      setType(product.type);
    }
  }, [product]);

  var handleOnSubmit = function handleOnSubmit(e) {
    e.preventDefault();
    onSubmit({
      name: name,
      description: description,
      price: +price,
      cols: cols,
      picture: picture,
      publish: publish,
      type: type
    });
  };

  var classes = useStyles();

  var onFileChanges = function onFileChanges(files) {
    if (files.length) {
      setLoading(true);
      setPicture('');
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__["default"].storage().ref().child('/images').child(files[0].name).put(files[0]).then(function (snapshot) {
        return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_15__["default"].storage().ref(snapshot.metadata.fullPath).getDownloadURL();
      }).then(function (url) {
        setPicture(url);
        setLoading(false);
      });
    }
  };

  var isValid = function isValid() {
    return picture.length > 0;
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: function onSubmit(data) {
        return handleOnSubmit(data);
      },
      noValidate: true,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        container: true,
        spacing: 3,
        cols: 1,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          lg: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_4__["default"], {
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
              checked: publish,
              onChange: function onChange(_ref2) {
                var target = _ref2.target;
                return setPublish(target.checked);
              },
              color: "primary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 83,
              columnNumber: 19
            }, _this),
            label: "Publicar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 81,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 80,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          lg: 5,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: classes.fullWidth,
            id: "Name",
            label: "Nombre",
            value: name,
            required: true,
            onChange: function onChange(_ref3) {
              var target = _ref3.target;
              return setName(target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 93,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 92,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          lg: 7,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: classes.fullWidth,
            id: "Description",
            label: "Descripci\xF3n",
            value: description,
            onChange: function onChange(_ref4) {
              var target = _ref4.target;
              return setDescription(target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 103,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 102,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: classes.fullWidth,
            id: "cols",
            label: "Columnas",
            type: "number",
            value: cols,
            onChange: function onChange(_ref5) {
              var target = _ref5.target;
              return setCols(target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 112,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 111,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_9__["default"], {
            className: classes.fullWidth,
            id: "Price",
            label: "Precio",
            type: "number",
            value: price,
            onChange: function onChange(_ref6) {
              var target = _ref6.target;
              return setPrice(+target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          lg: 4,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_InputLabel__WEBPACK_IMPORTED_MODULE_5__["default"], {
            id: "demo-simple-select-label",
            children: "Tipo"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Select__WEBPACK_IMPORTED_MODULE_7__["default"], {
            className: classes.fullWidth,
            labelId: "demo-simple-select-label",
            id: "demo-simple-select",
            value: type,
            onChange: function onChange(_ref7) {
              var target = _ref7.target;
              return setType(target.value);
            },
            children: _utils_catalog__WEBPACK_IMPORTED_MODULE_14__["productTypeOptions"].map(function (type) {
              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_MenuItem__WEBPACK_IMPORTED_MODULE_6__["default"], {
                value: type.key,
                children: type.label
              }, type.key, false, {
                fileName: _jsxFileName,
                lineNumber: 141,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 133,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 131,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          lg: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_11__["DropzoneArea"], {
            acceptedFiles: ['image/*'],
            filesLimit: 1,
            maxFileSize: 10000000,
            dropzoneText: "Imagen principal",
            onChange: function onChange(files) {
              return onFileChanges(files);
            },
            onDelete: function onDelete() {
              return setPicture('');
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          lg: 6,
          className: classes.contain,
          children: !picture && loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 19
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: classes.image,
            src: picture,
            alt: "product image",
            height: "100%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 79,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: true,
        xs: 12,
        className: classes.actions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: classes.floatRight,
          disabled: !isValid(),
          variant: "contained",
          type: "submit",
          color: "primary",
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 166,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: classes.floatRight,
          variant: "contained",
          color: "secondary",
          onClick: function onClick() {
            return router.push('/products');
          },
          children: "Cancelar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 165,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 78,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 77,
    columnNumber: 5
  }, _this);
};

_s(FormProduct, "9VyApEs7Y84LJU9ZpHP0l494GMQ=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_13__["useRouter"], useStyles];
});

_c = FormProduct;
/* harmony default export */ __webpack_exports__["default"] = (FormProduct);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_12__["makeStyles"])(function (theme) {
  return {
    actions: {
      margin: theme.spacing('20px', 'auto')
    },
    contain: {
      marginTop: 'auto',
      marginBottom: 'auto',
      textAlign: 'center'
    },
    image: {
      maxHeight: '250px'
    },
    fullWidth: {
      width: '100%'
    },
    floatRight: {
      minWidth: 120,
      "float": 'right',
      marginLeft: 16
    }
  };
});

var _c;

$RefreshReg$(_c, "FormProduct");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb2R1Y3QuanMiXSwibmFtZXMiOlsiRm9ybVByb2R1Y3QiLCJwcm9kdWN0Iiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInByaWNlIiwic2V0UHJpY2UiLCJjb2xzIiwic2V0Q29scyIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJ0eXBlIiwic2V0VHlwZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImhhbmRsZU9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsIm9uRmlsZUNoYW5nZXMiLCJmaWxlcyIsImFwcCIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsInB1dCIsInRoZW4iLCJzbmFwc2hvdCIsIm1ldGFkYXRhIiwiZnVsbFBhdGgiLCJnZXREb3dubG9hZFVSTCIsInVybCIsImlzVmFsaWQiLCJkYXRhIiwidGFyZ2V0IiwiY2hlY2tlZCIsImZ1bGxXaWR0aCIsInZhbHVlIiwicHJvZHVjdFR5cGVPcHRpb25zIiwibWFwIiwia2V5IiwibGFiZWwiLCJjb250YWluIiwiaW1hZ2UiLCJhY3Rpb25zIiwiZmxvYXRSaWdodCIsInB1c2giLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW4iLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJtaW5XaWR0aCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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WTtBQUN2Q0osV0FBTyxFQUFFO0FBQ1BLLFlBQU0sRUFBRUQsS0FBSyxDQUFDRSxPQUFOLENBQWMsTUFBZCxFQUFzQixNQUF0QjtBQURELEtBRDhCO0FBSXZDUixXQUFPLEVBQUU7QUFDUFMsZUFBUyxFQUFFLE1BREo7QUFFUEMsa0JBQVksRUFBRSxNQUZQO0FBR1BDLGVBQVMsRUFBRTtBQUhKLEtBSjhCO0FBU3ZDVixTQUFLLEVBQUU7QUFDTFcsZUFBUyxFQUFFO0FBRE4sS0FUZ0M7QUFZdkNsQixhQUFTLEVBQUU7QUFDVG1CLFdBQUssRUFBRTtBQURFLEtBWjRCO0FBZXZDVixjQUFVLEVBQUU7QUFDVlcsY0FBUSxFQUFFLEdBREE7QUFFVixlQUFPLE9BRkc7QUFHVkMsZ0JBQVUsRUFBRTtBQUhGO0FBZjJCLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb2R1Y3RzL1tpZF0vZWRpdC44YTFiMDg0ZDNiYzhlMmViM2YxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJ1xyXG5pbXBvcnQgSW5wdXRMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JbnB1dExhYmVsJ1xyXG5pbXBvcnQgTWVudUl0ZW0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvTWVudUl0ZW0nXHJcbmltcG9ydCBTZWxlY3QgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU2VsZWN0J1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCdcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCBDaXJjdWxhclByb2dyZXNzIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NpcmN1bGFyUHJvZ3Jlc3MnXHJcbmltcG9ydCB7IERyb3B6b25lQXJlYSB9IGZyb20gJ21hdGVyaWFsLXVpLWRyb3B6b25lJ1xyXG5cclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgeyBwcm9kdWN0VHlwZU9wdGlvbnMgfSBmcm9tICcuLi8uLi8uLi91dGlscy9jYXRhbG9nJ1xyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmNvbnN0IEZvcm1Qcm9kdWN0ID0gKHsgcHJvZHVjdCA9IHt9LCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2Rlc2NyaXB0aW9uLCBzZXREZXNjcmlwdGlvbl0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2NvbHMsIHNldENvbHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3BpY3R1cmUsIHNldFBpY3R1cmVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3B1Ymxpc2gsIHNldFB1Ymxpc2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3R5cGUsIHNldFR5cGVdID0gdXNlU3RhdGUobnVsbClcclxuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSlcclxuXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9kdWN0KS5sZW5ndGggIT09IDApIHtcclxuICAgICAgc2V0TmFtZShwcm9kdWN0Lm5hbWUpXHJcbiAgICAgIHNldERlc2NyaXB0aW9uKHByb2R1Y3QuZGVzY3JpcHRpb24pXHJcbiAgICAgIHNldFByaWNlKCtwcm9kdWN0LnByaWNlKVxyXG4gICAgICBzZXRDb2xzKHByb2R1Y3QuY29scylcclxuICAgICAgc2V0UGljdHVyZShwcm9kdWN0LnBpY3R1cmUpXHJcbiAgICAgIHNldFB1Ymxpc2gocHJvZHVjdC5wdWJsaXNoKVxyXG4gICAgICBzZXRUeXBlKHByb2R1Y3QudHlwZSlcclxuICAgIH1cclxuICB9LCBbcHJvZHVjdF0pXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgb25TdWJtaXQoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgcHJpY2U6ICtwcmljZSxcclxuICAgICAgY29scyxcclxuICAgICAgcGljdHVyZSxcclxuICAgICAgcHVibGlzaCxcclxuICAgICAgdHlwZSxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgY29uc3Qgb25GaWxlQ2hhbmdlcyA9IChmaWxlcykgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIHNldFBpY3R1cmUoJycpXHJcbiAgICAgIGFwcC5zdG9yYWdlKCkucmVmKCkuY2hpbGQoJy9pbWFnZXMnKS5jaGlsZChmaWxlc1swXS5uYW1lKS5wdXQoZmlsZXNbMF0pXHJcbiAgICAgICAgLnRoZW4oc25hcHNob3QgPT4gYXBwLnN0b3JhZ2UoKS5yZWYoc25hcHNob3QubWV0YWRhdGEuZnVsbFBhdGgpLmdldERvd25sb2FkVVJMKCkpXHJcbiAgICAgICAgLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgIHNldFBpY3R1cmUodXJsKVxyXG4gICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgaXNWYWxpZCA9ICgpID0+IHtcclxuICAgIHJldHVybiBwaWN0dXJlLmxlbmd0aCA+IDBcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGZvcm0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVPblN1Ym1pdChkYXRhKX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjb2xzPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHVibGlzaH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFB1Ymxpc2godGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlB1YmxpY2FyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NX0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldE5hbWUodGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17N30+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiRGVzY3JpcHRpb25cIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJEZXNjcmlwY2nDs25cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2Rlc2NyaXB0aW9ufVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXREZXNjcmlwdGlvbih0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs0fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb2xzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29sdW1uYXNcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29sc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0Q29scyh0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs0fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlByZWNpb1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UHJpY2UoK3RhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezR9PlxyXG4gICAgICAgICAgICAgIDxJbnB1dExhYmVsIGlkPVwiZGVtby1zaW1wbGUtc2VsZWN0LWxhYmVsXCI+VGlwbzwvSW5wdXRMYWJlbD5cclxuICAgICAgICAgICAgICA8U2VsZWN0XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgbGFiZWxJZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdFwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17dHlwZX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0VHlwZSh0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0VHlwZU9wdGlvbnMubWFwKHR5cGUgPT4gKFxyXG4gICAgICAgICAgICAgICAgICA8TWVudUl0ZW0ga2V5PXt0eXBlLmtleX0gdmFsdWU9e3R5cGUua2V5fT5cclxuICAgICAgICAgICAgICAgICAgICB7dHlwZS5sYWJlbH1cclxuICAgICAgICAgICAgICAgICAgPC9NZW51SXRlbT5cclxuICAgICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDwvU2VsZWN0PlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiSW1hZ2VuIHByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpbGVzKSA9PiBvbkZpbGVDaGFuZ2VzKGZpbGVzKX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBzZXRQaWN0dXJlKCcnKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17Nn0gY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW59PlxyXG4gICAgICAgICAgICAgIHshcGljdHVyZSAmJiBsb2FkaW5nXHJcbiAgICAgICAgICAgICAgICA/IDxDaXJjdWxhclByb2dyZXNzIC8+XHJcbiAgICAgICAgICAgICAgICA6IDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfSBzcmM9e3BpY3R1cmV9IGFsdD1cInByb2R1Y3QgaW1hZ2VcIiBoZWlnaHQ9XCIxMDAlXCIgLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZsb2F0UmlnaHR9XHJcbiAgICAgICAgICAgICAgZGlzYWJsZWQ9eyFpc1ZhbGlkKCl9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmxvYXRSaWdodH1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9kdWN0cycpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Qcm9kdWN0XHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhY3Rpb25zOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzIwcHgnLCAnYXV0bycpLFxyXG4gIH0sXHJcbiAgY29udGFpbjoge1xyXG4gICAgbWFyZ2luVG9wOiAnYXV0bycsXHJcbiAgICBtYXJnaW5Cb3R0b206ICdhdXRvJyxcclxuICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgbWF4SGVpZ2h0OiAnMjUwcHgnXHJcbiAgfSxcclxuICBmdWxsV2lkdGg6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgfSxcclxuICBmbG9hdFJpZ2h0OiB7XHJcbiAgICBtaW5XaWR0aDogMTIwLFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAxNixcclxuICB9XHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=