webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/views/ProductCategories.js":
/*!********************************************!*\
  !*** ./modules/views/ProductCategories.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _services_Product_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../services/Product.context */ "./services/Product.context.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\ProductCategories.js",
    _s = $RefreshSig$();










function ProductCategories(props) {
  _s();

  var _this = this;

  var classes = props.classes;

  var _useProduct = Object(_services_Product_context__WEBPACK_IMPORTED_MODULE_9__["useProduct"])(),
      _useProduct2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useProduct, 2),
      productState = _useProduct2[0],
      productDispatch = _useProduct2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_10__["default"].firestore().collection('products').get().then(function (snapshot) {
      return productDispatch({
        type: _services_Product_context__WEBPACK_IMPORTED_MODULE_9__["ActionType"].SET_PRODUCTS,
        payload: snapshot.docs.map(function (doc) {
          return doc.data();
        })
      });
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_7__["default"], {
    className: classes.root,
    component: "section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
      variant: "h4",
      marked: "center",
      align: "center",
      component: "h2",
      children: "\xA1Aprovech\xE1 todas nuestras promociones!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.images,
      children: productState.products.map(function (image) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: classes.imageWrapper,
          style: {
            width: '33.333%'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.imageSrc,
            style: {
              backgroundImage: "url(".concat(image.picture, ")")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.imageBackdrop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 43,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.imageButton,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
              component: "h3",
              variant: "h6",
              color: "inherit",
              className: classes.imageTitle,
              children: [image.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: classes.imageMarked
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 52,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_8__["default"], {
              component: "h3",
              variant: "h6",
              color: "inherit",
              children: ["$", image.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
              children: "Agregar al carrito"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 61,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this)]
        }, image.name, true, {
          fileName: _jsxFileName,
          lineNumber: 30,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 24,
    columnNumber: 5
  }, this);
}

_s(ProductCategories, "qHvHsXFNbdvZC7Zb7ZOl+BDeupQ=", false, function () {
  return [_services_Product_context__WEBPACK_IMPORTED_MODULE_9__["useProduct"]];
});

_c = ProductCategories;
ProductCategories.propTypes = {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object.isRequired
};

var styles = function styles(theme) {
  var _imageWrapper;

  return {
    root: {
      marginTop: theme.spacing(8),
      marginBottom: theme.spacing(4)
    },
    images: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexWrap: 'wrap'
    },
    imageWrapper: (_imageWrapper = {
      position: 'relative',
      display: 'block',
      padding: 0,
      borderRadius: 0,
      height: '40vh'
    }, Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageWrapper, theme.breakpoints.down('sm'), {
      width: '100% !important'
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageWrapper, '&:hover', {
      zIndex: 1
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageWrapper, '&:hover $imageBackdrop', {
      opacity: 0.15
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageWrapper, '&:hover $imageMarked', {
      opacity: 0
    }), Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(_imageWrapper, '&:hover $imageTitle', {
      border: '4px solid currentColor'
    }), _imageWrapper),
    imageButton: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      color: theme.palette.common.white
    },
    imageSrc: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      backgroundSize: 'cover',
      backgroundPosition: 'center 40%'
    },
    imageBackdrop: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      background: theme.palette.common.black,
      opacity: 0.5,
      transition: theme.transitions.create('opacity')
    },
    imageTitle: {
      position: 'relative',
      padding: "".concat(theme.spacing(2), "px ").concat(theme.spacing(4), "px 14px"),
      marginBottom: '12px'
    },
    imageMarked: {
      height: 3,
      width: 18,
      background: theme.palette.common.white,
      position: 'absolute',
      bottom: -2,
      left: 'calc(50% - 9px)',
      transition: theme.transitions.create('opacity')
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["withStyles"])(styles)(ProductCategories));

var _c;

$RefreshReg$(_c, "ProductCategories");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0Q2F0ZWdvcmllcy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Q2F0ZWdvcmllcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb2R1Y3QiLCJwcm9kdWN0U3RhdGUiLCJwcm9kdWN0RGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIkFjdGlvblR5cGUiLCJTRVRfUFJPRFVDVFMiLCJwYXlsb2FkIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJyb290IiwiaW1hZ2VzIiwicHJvZHVjdHMiLCJpbWFnZSIsImltYWdlV3JhcHBlciIsIndpZHRoIiwiaW1hZ2VTcmMiLCJiYWNrZ3JvdW5kSW1hZ2UiLCJwaWN0dXJlIiwiaW1hZ2VCYWNrZHJvcCIsImltYWdlQnV0dG9uIiwiaW1hZ2VUaXRsZSIsIm5hbWUiLCJpbWFnZU1hcmtlZCIsInByaWNlIiwicHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwib2JqZWN0IiwiaXNSZXF1aXJlZCIsInN0eWxlcyIsInRoZW1lIiwibWFyZ2luVG9wIiwic3BhY2luZyIsIm1hcmdpbkJvdHRvbSIsImRpc3BsYXkiLCJmbGV4V3JhcCIsInBvc2l0aW9uIiwicGFkZGluZyIsImJvcmRlclJhZGl1cyIsImhlaWdodCIsImJyZWFrcG9pbnRzIiwiZG93biIsInpJbmRleCIsIm9wYWNpdHkiLCJib3JkZXIiLCJsZWZ0IiwicmlnaHQiLCJ0b3AiLCJib3R0b20iLCJmbGV4RGlyZWN0aW9uIiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwiY29sb3IiLCJwYWxldHRlIiwiY29tbW9uIiwid2hpdGUiLCJiYWNrZ3JvdW5kU2l6ZSIsImJhY2tncm91bmRQb3NpdGlvbiIsImJhY2tncm91bmQiLCJibGFjayIsInRyYW5zaXRpb24iLCJ0cmFuc2l0aW9ucyIsImNyZWF0ZSIs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O0FBRVh4QixXQUFLLEVBQUUsRUFGSTtBQUdYMkMsZ0JBQVUsRUFBRTVCLEtBQUssQ0FBQ3VCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FIdEI7QUFJWG5CLGNBQVEsRUFBRSxVQUpDO0FBS1hZLFlBQU0sRUFBRSxDQUFDLENBTEU7QUFNWEgsVUFBSSxFQUFFLGlCQU5LO0FBT1hlLGdCQUFVLEVBQUU5QixLQUFLLENBQUMrQixXQUFOLENBQWtCQyxNQUFsQixDQUF5QixTQUF6QjtBQVBEO0FBcEVZLEdBQVo7QUFBQSxDQUFmOztBQWdGZUMsMElBQVUsQ0FBQ2xDLE1BQUQsQ0FBVixDQUFtQnhDLGlCQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmUxZWMzNzhhMjFjNDliYTY2ZDBhLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IEJ1dHRvbkJhc2UgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uQmFzZSdcclxuaW1wb3J0IENvbnRhaW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db250YWluZXInXHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL2NvbXBvbmVudHMvVHlwb2dyYXBoeSdcclxuaW1wb3J0IHsgdXNlUHJvZHVjdCwgQWN0aW9uVHlwZSB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL1Byb2R1Y3QuY29udGV4dCdcclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcblxyXG5mdW5jdGlvbiBQcm9kdWN0Q2F0ZWdvcmllcyhwcm9wcykge1xyXG4gIGNvbnN0IHsgY2xhc3NlcyB9ID0gcHJvcHNcclxuICBjb25zdCBbcHJvZHVjdFN0YXRlLCBwcm9kdWN0RGlzcGF0Y2hdID0gdXNlUHJvZHVjdCgpXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBhcHAuZmlyZXN0b3JlKCkuY29sbGVjdGlvbigncHJvZHVjdHMnKVxyXG4gICAgLmdldCgpXHJcbiAgICAudGhlbihzbmFwc2hvdCA9PiBwcm9kdWN0RGlzcGF0Y2goe1xyXG4gICAgICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9QUk9EVUNUUyxcclxuICAgICAgcGF5bG9hZDogc25hcHNob3QuZG9jcy5tYXAoZG9jID0+IGRvYy5kYXRhKCkpLFxyXG4gICAgfSkpXHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Q29udGFpbmVyIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBjb21wb25lbnQ9XCJzZWN0aW9uXCI+XHJcbiAgICAgIDxUeXBvZ3JhcGh5IHZhcmlhbnQ9XCJoNFwiIG1hcmtlZD1cImNlbnRlclwiIGFsaWduPVwiY2VudGVyXCIgY29tcG9uZW50PVwiaDJcIj5cclxuICAgICAgICDCoUFwcm92ZWNow6EgdG9kYXMgbnVlc3RyYXMgcHJvbW9jaW9uZXMhXHJcbiAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VzfT5cclxuICAgICAgICB7cHJvZHVjdFN0YXRlLnByb2R1Y3RzLm1hcCgoaW1hZ2UpID0+IChcclxuICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgIGtleT17aW1hZ2UubmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlV3JhcHBlcn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogJzMzLjMzMyUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtpbWFnZS5waWN0dXJlfSlgLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQmFja2Ryb3B9IC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlQnV0dG9ufT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VUaXRsZX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7aW1hZ2UubmFtZX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlTWFya2VkfSAvPlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJHtpbWFnZS5wcmljZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbkJhc2U+QWdyZWdhciBhbCBjYXJyaXRvPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvQnV0dG9uQmFzZT5cclxuICAgICAgICApKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L0NvbnRhaW5lcj5cclxuICApXHJcbn1cclxuXHJcblByb2R1Y3RDYXRlZ29yaWVzLnByb3BUeXBlcyA9IHtcclxuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn1cclxuXHJcbmNvbnN0IHN0eWxlcyA9ICh0aGVtZSkgPT4gKHtcclxuICByb290OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoNCksXHJcbiAgfSxcclxuICBpbWFnZXM6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhXcmFwOiAnd3JhcCcsXHJcbiAgfSxcclxuICBpbWFnZVdyYXBwZXI6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgZGlzcGxheTogJ2Jsb2NrJyxcclxuICAgIHBhZGRpbmc6IDAsXHJcbiAgICBib3JkZXJSYWRpdXM6IDAsXHJcbiAgICBoZWlnaHQ6ICc0MHZoJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy5kb3duKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogJzEwMCUgIWltcG9ydGFudCcsXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXInOiB7XHJcbiAgICAgIHpJbmRleDogMSxcclxuICAgIH0sXHJcbiAgICAnJjpob3ZlciAkaW1hZ2VCYWNrZHJvcCc6IHtcclxuICAgICAgb3BhY2l0eTogMC4xNSxcclxuICAgIH0sXHJcbiAgICAnJjpob3ZlciAkaW1hZ2VNYXJrZWQnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAsXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXIgJGltYWdlVGl0bGUnOiB7XHJcbiAgICAgIGJvcmRlcjogJzRweCBzb2xpZCBjdXJyZW50Q29sb3InLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlQnV0dG9uOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxyXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXHJcbiAgICBqdXN0aWZ5Q29udGVudDogJ2NlbnRlcicsXHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgfSxcclxuICBpbWFnZVNyYzoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBiYWNrZ3JvdW5kU2l6ZTogJ2NvdmVyJyxcclxuICAgIGJhY2tncm91bmRQb3NpdGlvbjogJ2NlbnRlciA0MCUnLFxyXG4gIH0sXHJcbiAgaW1hZ2VCYWNrZHJvcDoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi5ibGFjayxcclxuICAgIG9wYWNpdHk6IDAuNSxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gIH0sXHJcbiAgaW1hZ2VUaXRsZToge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBwYWRkaW5nOiBgJHt0aGVtZS5zcGFjaW5nKDIpfXB4ICR7dGhlbWUuc3BhY2luZyg0KX1weCAxNHB4YCxcclxuICAgIG1hcmdpbkJvdHRvbTogJzEycHgnXHJcbiAgfSxcclxuICBpbWFnZU1hcmtlZDoge1xyXG4gICAgaGVpZ2h0OiAzLFxyXG4gICAgd2lkdGg6IDE4LFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24ud2hpdGUsXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGJvdHRvbTogLTIsXHJcbiAgICBsZWZ0OiAnY2FsYyg1MCUgLSA5cHgpJyxcclxuICAgIHRyYW5zaXRpb246IHRoZW1lLnRyYW5zaXRpb25zLmNyZWF0ZSgnb3BhY2l0eScpLFxyXG4gIH0sXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMpKFByb2R1Y3RDYXRlZ29yaWVzKVxyXG4iXSwic291cmNlUm9vdCI6IiJ9