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
              lineNumber: 82,
              columnNumber: 19
            }, _this),
            label: "Publicar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 80,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 79,
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
            lineNumber: 92,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 91,
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
            lineNumber: 102,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 101,
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
            lineNumber: 111,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 110,
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
            lineNumber: 121,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
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
            lineNumber: 131,
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
                lineNumber: 140,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 132,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 130,
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
            lineNumber: 147,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          lg: 6,
          className: classes.contain,
          children: !picture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_CircularProgress__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 19
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            className: classes.image,
            src: picture,
            alt: "product image",
            height: "100%"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 159,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 78,
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
          lineNumber: 165,
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
          lineNumber: 174,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 164,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 76,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb2R1Y3QuanMiXSwibmFtZXMiOlsiRm9ybVByb2R1Y3QiLCJwcm9kdWN0Iiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInByaWNlIiwic2V0UHJpY2UiLCJjb2xzIiwic2V0Q29scyIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJ0eXBlIiwic2V0VHlwZSIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwicm91dGVyIiwidXNlUm91dGVyIiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImhhbmRsZU9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsIm9uRmlsZUNoYW5nZXMiLCJmaWxlcyIsImFwcCIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsInB1dCIsInRoZW4iLCJzbmFwc2hvdCIsIm1ldGFkYXRhIiwiZnVsbFBhdGgiLCJnZXREb3dubG9hZFVSTCIsInVybCIsImlzVmFsaWQiLCJkYXRhIiwidGFyZ2V0IiwiY2hlY2tlZCIsImZ1bGxXaWR0aCIsInZhbHVlIiwicHJvZHVjdFR5cGVPcHRpb25zIiwibWFwIiwia2V5IiwibGFiZWwiLCJjb250YWluIiwiaW1hZ2UiLCJhY3Rpb25zIiwiZmxvYXRSaWdodCIsInB1c2giLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW4iLCJzcGFjaW5nIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwidGV4dEFsaWduIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJtaW5XaWR0aCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUssQ0FBQ0UsT0FBTixDQUFjLE1BQWQsRUFBc0IsTUFBdEI7QUFERCxLQUQ4QjtBQUl2Q1IsV0FBTyxFQUFFO0FBQ1BTLGVBQVMsRUFBRSxNQURKO0FBRVBDLGtCQUFZLEVBQUUsTUFGUDtBQUdQQyxlQUFTLEVBQUU7QUFISixLQUo4QjtBQVN2Q1YsU0FBSyxFQUFFO0FBQ0xXLGVBQVMsRUFBRTtBQUROLEtBVGdDO0FBWXZDbEIsYUFBUyxFQUFFO0FBQ1RtQixXQUFLLEVBQUU7QUFERSxLQVo0QjtBQWV2Q1YsY0FBVSxFQUFFO0FBQ1ZXLGNBQVEsRUFBRSxHQURBO0FBRVYsZUFBTyxPQUZHO0FBR1ZDLGdCQUFVLEVBQUU7QUFIRjtBQWYyQixHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9kdWN0cy9baWRdL2VkaXQuOWUyNzlkMDk1MGRmNTJhNDY3MTUuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCdcclxuaW1wb3J0IElucHV0TGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSW5wdXRMYWJlbCdcclxuaW1wb3J0IE1lbnVJdGVtIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL01lbnVJdGVtJ1xyXG5pbXBvcnQgU2VsZWN0IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NlbGVjdCdcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgQ2lyY3VsYXJQcm9ncmVzcyBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DaXJjdWxhclByb2dyZXNzJ1xyXG5pbXBvcnQgeyBEcm9wem9uZUFyZWEgfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcclxuXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IHsgcHJvZHVjdFR5cGVPcHRpb25zIH0gZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2F0YWxvZydcclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5jb25zdCBGb3JtUHJvZHVjdCA9ICh7IHByb2R1Y3QgPSB7fSwgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtjb2xzLCBzZXRDb2xzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwaWN0dXJlLCBzZXRQaWN0dXJlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwdWJsaXNoLCBzZXRQdWJsaXNoXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFt0eXBlLCBzZXRUeXBlXSA9IHVzZVN0YXRlKG51bGwpXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvZHVjdCkubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNldE5hbWUocHJvZHVjdC5uYW1lKVxyXG4gICAgICBzZXREZXNjcmlwdGlvbihwcm9kdWN0LmRlc2NyaXB0aW9uKVxyXG4gICAgICBzZXRQcmljZSgrcHJvZHVjdC5wcmljZSlcclxuICAgICAgc2V0Q29scyhwcm9kdWN0LmNvbHMpXHJcbiAgICAgIHNldFBpY3R1cmUocHJvZHVjdC5waWN0dXJlKVxyXG4gICAgICBzZXRQdWJsaXNoKHByb2R1Y3QucHVibGlzaClcclxuICAgICAgc2V0VHlwZShwcm9kdWN0LnR5cGUpXHJcbiAgICB9XHJcbiAgfSwgW3Byb2R1Y3RdKVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIG9uU3VibWl0KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgZGVzY3JpcHRpb24sXHJcbiAgICAgIHByaWNlOiArcHJpY2UsXHJcbiAgICAgIGNvbHMsXHJcbiAgICAgIHBpY3R1cmUsXHJcbiAgICAgIHB1Ymxpc2gsXHJcbiAgICAgIHR5cGUsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZXMgPSAoZmlsZXMpID0+IHtcclxuICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgc2V0TG9hZGluZyh0cnVlKVxyXG4gICAgICBhcHAuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCcvaW1hZ2VzJykuY2hpbGQoZmlsZXNbMF0ubmFtZSkucHV0KGZpbGVzWzBdKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IGFwcC5zdG9yYWdlKCkucmVmKHNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoKS5nZXREb3dubG9hZFVSTCgpKVxyXG4gICAgICAgIC50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICBzZXRQaWN0dXJlKHVybClcclxuICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpXHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IGlzVmFsaWQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gcGljdHVyZS5sZW5ndGggPiAwXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3B1Ymxpc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRQdWJsaXNoKHRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQdWJsaWNhclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezV9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXROYW1lKHRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezd9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIkRlc2NyaXB0aW9uXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiRGVzY3JpcGNpw7NuXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtkZXNjcmlwdGlvbn1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0RGVzY3JpcHRpb24odGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiY29sc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbHVtbmFzXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldENvbHModGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQcmVjaW9cIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFByaWNlKCt0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXs0fT5cclxuICAgICAgICAgICAgICA8SW5wdXRMYWJlbCBpZD1cImRlbW8tc2ltcGxlLXNlbGVjdC1sYWJlbFwiPlRpcG88L0lucHV0TGFiZWw+XHJcbiAgICAgICAgICAgICAgPFNlbGVjdFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGxhYmVsSWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3QtbGFiZWxcIlxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkZW1vLXNpbXBsZS1zZWxlY3RcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3R5cGV9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFR5cGUodGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7cHJvZHVjdFR5cGVPcHRpb25zLm1hcCh0eXBlID0+IChcclxuICAgICAgICAgICAgICAgICAgPE1lbnVJdGVtIGtleT17dHlwZS5rZXl9IHZhbHVlPXt0eXBlLmtleX0+XHJcbiAgICAgICAgICAgICAgICAgICAge3R5cGUubGFiZWx9XHJcbiAgICAgICAgICAgICAgICAgIDwvTWVudUl0ZW0+XHJcbiAgICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8L1NlbGVjdD5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIkltYWdlbiBwcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25GaWxlQ2hhbmdlcyhmaWxlcyl9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gc2V0UGljdHVyZSgnJyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWlufT5cclxuICAgICAgICAgICAgICB7IXBpY3R1cmVcclxuICAgICAgICAgICAgICAgID8gPENpcmN1bGFyUHJvZ3Jlc3MgLz5cclxuICAgICAgICAgICAgICAgIDogPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IHNyYz17cGljdHVyZX0gYWx0PVwicHJvZHVjdCBpbWFnZVwiIGhlaWdodD1cIjEwMCVcIiAvPlxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmxvYXRSaWdodH1cclxuICAgICAgICAgICAgICBkaXNhYmxlZD17IWlzVmFsaWQoKX1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbG9hdFJpZ2h0fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb2R1Y3RzJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVByb2R1Y3RcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGFjdGlvbnM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnMjBweCcsICdhdXRvJyksXHJcbiAgfSxcclxuICBjb250YWluOiB7XHJcbiAgICBtYXJnaW5Ub3A6ICdhdXRvJyxcclxuICAgIG1hcmdpbkJvdHRvbTogJ2F1dG8nLFxyXG4gICAgdGV4dEFsaWduOiAnY2VudGVyJyxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICBtYXhIZWlnaHQ6ICcyNTBweCdcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGZsb2F0UmlnaHQ6IHtcclxuICAgIG1pbldpZHRoOiAxMjAsXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIG1hcmdpbkxlZnQ6IDE2LFxyXG4gIH1cclxufSkpIl0sInNvdXJjZVJvb3QiOiIifQ==