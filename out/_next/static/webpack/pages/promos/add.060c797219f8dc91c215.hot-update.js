webpackHotUpdate_N_E("pages/promos/add",{

/***/ "./modules/components/form/FormPromo.js":
/*!**********************************************!*\
  !*** ./modules/components/form/FormPromo.js ***!
  \**********************************************/
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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! material-ui-dropzone */ "./node_modules/material-ui-dropzone/dist/index.es.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../firebase/firebase.config */ "./firebase/firebase.config.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_8__);


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\form\\FormPromo.js",
    _this = undefined,
    _s = $RefreshSig$();










var FormPromo = function FormPromo(_ref) {
  _s();

  var _ref$promo = _ref.promo,
      promo = _ref$promo === void 0 ? {} : _ref$promo,
      onSubmit = _ref.onSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      description = _useState2[0],
      setDescription = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      price = _useState3[0],
      setPrice = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      cols = _useState4[0],
      setCols = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(''),
      picture = _useState5[0],
      setPicture = _useState5[1];

  var handleNameChange = function handleNameChange(_ref2) {
    var target = _ref2.target;
    return setName(target.value);
  };

  var handleDescriptionChange = function handleDescriptionChange(_ref3) {
    var target = _ref3.target;
    return setDescription(target.value);
  };

  var handlePriceChange = function handlePriceChange(_ref4) {
    var target = _ref4.target;
    return setPrice(target.value);
  };

  var handleColsChange = function handleColsChange(_ref5) {
    var target = _ref5.target;
    return setCols(target.value);
  };

  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"])();

  var handleOnSubmit = function handleOnSubmit(e) {
    e.preventDefault();
    onSubmit({
      name: name,
      description: description,
      price: price,
      cols: cols,
      picture: picture
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    if (Object.keys(promo).length !== 0) {
      setName(promo.name);
      setDescription(promo.description);
      setPrice(promo.price);
      setCols(promo.cols);
      setPicture(promo.picture);
    }
  }, [promo]);
  var classes = useStyles();

  var onFileChanges = function onFileChanges(files) {
    if (files.length) {
      _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_7__["default"].storage().ref().child('/images').child(files[0].name).put(files[0]).then(function (snapshot) {
        return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_7__["default"].storage().ref(snapshot.metadata.fullPath).getDownloadURL();
      }).then(function (url) {
        return setPicture(url);
      });
    }
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      className: classes.root,
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
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classes.fullWidth,
            id: "Name",
            label: "Nombre",
            value: name,
            required: true,
            onChange: handleNameChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 60,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classes.fullWidth,
            id: "Price",
            label: "Precio",
            type: "number",
            value: price,
            onChange: handlePriceChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 70,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 69,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classes.fullWidth,
            id: "cols",
            label: "Columnas",
            type: "number",
            value: cols,
            onChange: handleColsChange
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
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_4__["default"], {
            className: classes.fullWidth,
            id: "Description",
            label: "Descripci\xF3n",
            value: description,
            onChange: handleDescriptionChange
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 90,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 89,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_5__["DropzoneArea"], {
            acceptedFiles: ['image/*'],
            filesLimit: 1,
            onChange: function onChange(files) {
              return onFileChanges(files);
            },
            onDelete: function onDelete() {
              return setPicture('');
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 99,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 98,
          columnNumber: 13
        }, _this), picture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
          item: true,
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: classes.contain,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              className: classes.fullWidth,
              src: picture,
              alt: "promo image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 109,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 108,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 107,
          columnNumber: 17
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 17
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_3__["default"], {
        item: true,
        xs: 12,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: classes.floatRight,
          variant: "contained",
          type: "submit",
          color: "primary",
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_2__["default"], {
          className: classes.floatRight,
          variant: "contained",
          color: "secondary",
          onClick: function onClick() {
            return router.push('/promos');
          },
          children: "Cancelar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 129,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 57,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 56,
    columnNumber: 5
  }, _this);
};

_s(FormPromo, "SX1zof+KxbVAeAa2XKwAhAhQRMA=", false, function () {
  return [next_router__WEBPACK_IMPORTED_MODULE_8__["useRouter"], useStyles];
});

_c = FormPromo;
/* harmony default export */ __webpack_exports__["default"] = (FormPromo);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_6__["makeStyles"])(function (theme) {
  return {
    contain: {
      maxHeight: '250px',
      width: '100%',
      display: 'flex'
    },
    fullWidth: {
      width: '100%',
      maxHeigth: '100%',
      objectFit: 'contain'
    },
    floatRight: {
      minWidth: 120,
      "float": 'right',
      marginLeft: 16
    }
  };
});

var _c;

$RefreshReg$(_c, "FormPromo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vLmpzIl0sIm5hbWVzIjpbIkZvcm1Qcm9tbyIsInByb21vIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwiZGVzY3JpcHRpb24iLCJzZXREZXNjcmlwdGlvbiIsInByaWNlIiwic2V0UHJpY2UiLCJjb2xzIiwic2V0Q29scyIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwiaGFuZGxlTmFtZUNoYW5nZSIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlRGVzY3JpcHRpb25DaGFuZ2UiLCJoYW5kbGVQcmljZUNoYW5nZSIsImhhbmRsZUNvbHNDaGFuZ2UiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwib25GaWxlQ2hhbmdlcyIsImZpbGVzIiwiYXBwIiwic3RvcmFnZSIsInJlZiIsImNoaWxkIiwicHV0IiwidGhlbiIsInNuYXBzaG90IiwibWV0YWRhdGEiLCJmdWxsUGF0aCIsImdldERvd25sb2FkVVJMIiwidXJsIiwicm9vdCIsImRhdGEiLCJmdWxsV2lkdGgiLCJjb250YWluIiwiZmxvYXRSaWdodCIsInB1c2giLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXhIZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXhIZWlndGgiLCJvYmplY3RGaXQiLCJtaW5XaWR0aCIsIm1hcmdpbkxlZnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE4QjtBQUFBOztBQUFBLHdCQUEzQkMsS0FBMkI7QUFBQSxNQUEzQkEsS0FBMkIs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O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFzRkQsQ0FuSUQ7O0dBQU1qRCxTO1VBWVdxQixxRCxFQXVCQ1MsUzs7O0tBbkNaOUIsUztBQXFJU0Esd0VBQWY7QUFFQSxJQUFNOEIsU0FBUyxHQUFHb0IsMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0osV0FBTyxFQUFFO0FBQ1BLLGVBQVMsRUFBRSxPQURKO0FBRVBDLFdBQUssRUFBRSxNQUZBO0FBR1BDLGFBQU8sRUFBRTtBQUhGLEtBRDhCO0FBTXZDUixhQUFTLEVBQUU7QUFDVE8sV0FBSyxFQUFFLE1BREU7QUFFVEUsZUFBUyxFQUFFLE1BRkY7QUFHVEMsZUFBUyxFQUFFO0FBSEYsS0FONEI7QUFXdkNSLGNBQVUsRUFBRTtBQUNWUyxjQUFRLEVBQUUsR0FEQTtBQUVWLGVBQU8sT0FGRztBQUdWQyxnQkFBVSxFQUFFO0FBSEY7QUFYMkIsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvbW9zL2FkZC4wNjBjNzk3MjE5ZjhkYzkxYzIxNS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgeyBEcm9wem9uZUFyZWEgfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuY29uc3QgRm9ybVByb21vID0gKHsgcHJvbW8gPSB7fSwgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkZXNjcmlwdGlvbiwgc2V0RGVzY3JpcHRpb25dID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbY29scywgc2V0Q29sc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcGljdHVyZSwgc2V0UGljdHVyZV0gPSB1c2VTdGF0ZSgnJylcclxuXHJcbiAgY29uc3QgaGFuZGxlTmFtZUNoYW5nZSA9ICh7IHRhcmdldCB9KSA9PiBzZXROYW1lKHRhcmdldC52YWx1ZSlcclxuICBjb25zdCBoYW5kbGVEZXNjcmlwdGlvbkNoYW5nZSA9ICh7IHRhcmdldCB9KSA9PiBzZXREZXNjcmlwdGlvbih0YXJnZXQudmFsdWUpXHJcbiAgY29uc3QgaGFuZGxlUHJpY2VDaGFuZ2UgPSAoeyB0YXJnZXQgfSkgPT4gc2V0UHJpY2UodGFyZ2V0LnZhbHVlKVxyXG4gIGNvbnN0IGhhbmRsZUNvbHNDaGFuZ2UgPSAoeyB0YXJnZXQgfSkgPT4gc2V0Q29scyh0YXJnZXQudmFsdWUpXHJcblxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgb25TdWJtaXQoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBkZXNjcmlwdGlvbixcclxuICAgICAgcHJpY2UsXHJcbiAgICAgIGNvbHMsXHJcbiAgICAgIHBpY3R1cmUsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9tbykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNldE5hbWUocHJvbW8ubmFtZSlcclxuICAgICAgc2V0RGVzY3JpcHRpb24ocHJvbW8uZGVzY3JpcHRpb24pXHJcbiAgICAgIHNldFByaWNlKHByb21vLnByaWNlKVxyXG4gICAgICBzZXRDb2xzKHByb21vLmNvbHMpXHJcbiAgICAgIHNldFBpY3R1cmUocHJvbW8ucGljdHVyZSlcclxuICAgIH1cclxuICB9LCBbcHJvbW9dKVxyXG5cclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgY29uc3Qgb25GaWxlQ2hhbmdlcyA9IChmaWxlcykgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBhcHAuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCcvaW1hZ2VzJykuY2hpbGQoZmlsZXNbMF0ubmFtZSkucHV0KGZpbGVzWzBdKVxyXG4gICAgICAgIC50aGVuKHNuYXBzaG90ID0+IGFwcC5zdG9yYWdlKCkucmVmKHNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoKS5nZXREb3dubG9hZFVSTCgpKVxyXG4gICAgICAgIC50aGVuKHVybCA9PiBzZXRQaWN0dXJlKHVybCkpXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU9uU3VibWl0KGRhdGEpfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNvbHM9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZU5hbWVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJlY2lvXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZVByaWNlQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb2xzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29sdW1uYXNcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29sc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDb2xzQ2hhbmdlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJEZXNjcmlwdGlvblwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkRlc2NyaXBjacOzblwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17ZGVzY3JpcHRpb259XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17aGFuZGxlRGVzY3JpcHRpb25DaGFuZ2V9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uRmlsZUNoYW5nZXMoZmlsZXMpfVxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHNldFBpY3R1cmUoJycpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAge3BpY3R1cmVcclxuICAgICAgICAgICAgICA/IDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9tbyBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgOiA8ZGl2IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmxvYXRSaWdodH1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbG9hdFJpZ2h0fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb21vcycpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Qcm9tb1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgY29udGFpbjoge1xyXG4gICAgbWF4SGVpZ2h0OiAnMjUwcHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1heEhlaWd0aDogJzEwMCUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY29udGFpbicsXHJcbiAgfSxcclxuICBmbG9hdFJpZ2h0OiB7XHJcbiAgICBtaW5XaWR0aDogMTIwLFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAxNixcclxuICB9XHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=