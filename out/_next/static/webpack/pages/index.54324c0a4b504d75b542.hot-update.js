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
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ButtonBase */ "./node_modules/@material-ui/core/esm/ButtonBase/index.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _components_Typography__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Typography */ "./modules/components/Typography.js");
/* harmony import */ var _services_Product_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../services/Product.context */ "./services/Product.context.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../firebase/firebase.config */ "./firebase/firebase.config.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\ProductCategories.js",
    _s = $RefreshSig$();











function ProductCategories(props) {
  _s();

  var _this = this;

  var classes = props.classes;

  var _useProduct = Object(_services_Product_context__WEBPACK_IMPORTED_MODULE_10__["useProduct"])(),
      _useProduct2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useProduct, 2),
      productState = _useProduct2[0],
      productDispatch = _useProduct2[1];

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__["default"].firestore().collection('products').get().then(function (snapshot) {
      return productDispatch({
        type: _services_Product_context__WEBPACK_IMPORTED_MODULE_10__["ActionType"].SET_PRODUCTS,
        payload: snapshot.docs.map(function (doc) {
          return doc.data();
        })
      });
    });
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_8__["default"], {
    className: classes.root,
    component: "section",
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
      variant: "h4",
      marked: "center",
      align: "center",
      component: "h2",
      children: "\xA1Aprovech\xE1 todas nuestras promociones!"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
      className: classes.images,
      children: productState.products.map(function (product) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_7__["default"], {
          className: classes.imageWrapper,
          style: {
            width: '33.333%'
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.imageSrc,
            style: {
              backgroundImage: "url(".concat(product.picture, ")")
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.imageBackdrop
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.imageButton,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
              component: "h3",
              variant: "h6",
              color: "inherit",
              className: classes.imageTitle,
              children: [product.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
                className: classes.imageMarked
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 53,
                columnNumber: 17
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 46,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_components_Typography__WEBPACK_IMPORTED_MODULE_9__["default"], {
              component: "h3",
              variant: "h6",
              color: "inherit",
              children: ["$", product.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 55,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
              color: "secondary",
              children: "Agregar al carrito"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 45,
            columnNumber: 13
          }, _this)]
        }, product.name, true, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(ProductCategories, "qHvHsXFNbdvZC7Zb7ZOl+BDeupQ=", false, function () {
  return [_services_Product_context__WEBPACK_IMPORTED_MODULE_10__["useProduct"]];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0Q2F0ZWdvcmllcy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Q2F0ZWdvcmllcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb2R1Y3QiLCJwcm9kdWN0U3RhdGUiLCJwcm9kdWN0RGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIkFjdGlvblR5cGUiLCJTRVRfUFJPRFVDVFMiLCJwYXlsb2FkIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJyb290IiwiaW1hZ2VzIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiaW1hZ2VXcmFwcGVyIiwid2lkdGgiLCJpbWFnZVNyYyIsImJhY2tncm91bmRJbWFnZSIsInBpY3R1cmUiLCJpbWFnZUJhY2tkcm9wIiwiaW1hZ2VCdXR0b24iLCJpbWFnZVRpdGxlIiwibmFtZSIsImltYWdlTWFya2VkIiwicHJpY2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImZsZXhXcmFwIiwicG9zaXRpb24iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4Iiwib3BhY2l0eSIsImJvcmRlciIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZCIsImJsYWNrIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRl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QUFXLEVBQUU7QUFDWGdCLFlBQU0sRUFBRSxDQURHO0FBRVh4QixXQUFLLEVBQUUsRUFGSTtBQUdYMkMsZ0JBQVUsRUFBRTVCLEtBQUssQ0FBQ3VCLE9BQU4sQ0FBY0MsTUFBZCxDQUFxQkMsS0FIdEI7QUFJWG5CLGNBQVEsRUFBRSxVQUpDO0FBS1hZLFlBQU0sRUFBRSxDQUFDLENBTEU7QUFNWEgsVUFBSSxFQUFFLGlCQU5LO0FBT1hlLGdCQUFVLEVBQUU5QixLQUFLLENBQUMrQixXQUFOLENBQWtCQyxNQUFsQixDQUF5QixTQUF6QjtBQVBEO0FBcEVZLEdBQVo7QUFBQSxDQUFmOztBQWdGZUMsMElBQVUsQ0FBQ2xDLE1BQUQsQ0FBVixDQUFtQnhDLGlCQUFuQixDQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0MzI0YzBhNGI1MDRkNzViNTQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcydcclxuaW1wb3J0IHsgd2l0aFN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBCdXR0b25CYXNlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbkJhc2UnXHJcbmltcG9ydCBDb250YWluZXIgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQ29udGFpbmVyJ1xyXG5pbXBvcnQgVHlwb2dyYXBoeSBmcm9tICcuLi9jb21wb25lbnRzL1R5cG9ncmFwaHknXHJcbmltcG9ydCB7IHVzZVByb2R1Y3QsIEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi9zZXJ2aWNlcy9Qcm9kdWN0LmNvbnRleHQnXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuZnVuY3Rpb24gUHJvZHVjdENhdGVnb3JpZXMocHJvcHMpIHtcclxuICBjb25zdCB7IGNsYXNzZXMgfSA9IHByb3BzXHJcbiAgY29uc3QgW3Byb2R1Y3RTdGF0ZSwgcHJvZHVjdERpc3BhdGNoXSA9IHVzZVByb2R1Y3QoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgYXBwLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oJ3Byb2R1Y3RzJylcclxuICAgIC5nZXQoKVxyXG4gICAgLnRoZW4oc25hcHNob3QgPT4gcHJvZHVjdERpc3BhdGNoKHtcclxuICAgICAgdHlwZTogQWN0aW9uVHlwZS5TRVRfUFJPRFVDVFMsXHJcbiAgICAgIHBheWxvYWQ6IHNuYXBzaG90LmRvY3MubWFwKGRvYyA9PiBkb2MuZGF0YSgpKSxcclxuICAgIH0pKVxyXG4gIH0sIFtdKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gY29tcG9uZW50PVwic2VjdGlvblwiPlxyXG4gICAgICA8VHlwb2dyYXBoeSB2YXJpYW50PVwiaDRcIiBtYXJrZWQ9XCJjZW50ZXJcIiBhbGlnbj1cImNlbnRlclwiIGNvbXBvbmVudD1cImgyXCI+XHJcbiAgICAgICAgwqFBcHJvdmVjaMOhIHRvZGFzIG51ZXN0cmFzIHByb21vY2lvbmVzIVxyXG4gICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlc30+XHJcbiAgICAgICAge3Byb2R1Y3RTdGF0ZS5wcm9kdWN0cy5tYXAoKHByb2R1Y3QpID0+IChcclxuICAgICAgICAgIDxCdXR0b25CYXNlXHJcbiAgICAgICAgICAgIGtleT17cHJvZHVjdC5uYW1lfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VXcmFwcGVyfVxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHdpZHRoOiAnMzMuMzMzJScsXHJcbiAgICAgICAgICAgIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VTcmN9XHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmRJbWFnZTogYHVybCgke3Byb2R1Y3QucGljdHVyZX0pYCxcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJhY2tkcm9wfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZUJ1dHRvbn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlVGl0bGV9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlTWFya2VkfSAvPlxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeVxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50PVwiaDNcIlxyXG4gICAgICAgICAgICAgICAgdmFyaWFudD1cImg2XCJcclxuICAgICAgICAgICAgICAgIGNvbG9yPVwiaW5oZXJpdFwiXHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgJHtwcm9kdWN0LnByaWNlfVxyXG4gICAgICAgICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNvbG9yPVwic2Vjb25kYXJ5XCI+QWdyZWdhciBhbCBjYXJyaXRvPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9CdXR0b25CYXNlPlxyXG4gICAgICAgICkpfVxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvQ29udGFpbmVyPlxyXG4gIClcclxufVxyXG5cclxuUHJvZHVjdENhdGVnb3JpZXMucHJvcFR5cGVzID0ge1xyXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QuaXNSZXF1aXJlZCxcclxufVxyXG5cclxuY29uc3Qgc3R5bGVzID0gKHRoZW1lKSA9PiAoe1xyXG4gIHJvb3Q6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZyg4KSxcclxuICAgIG1hcmdpbkJvdHRvbTogdGhlbWUuc3BhY2luZyg0KSxcclxuICB9LFxyXG4gIGltYWdlczoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleFdyYXA6ICd3cmFwJyxcclxuICB9LFxyXG4gIGltYWdlV3JhcHBlcjoge1xyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgICBkaXNwbGF5OiAnYmxvY2snLFxyXG4gICAgcGFkZGluZzogMCxcclxuICAgIGJvcmRlclJhZGl1czogMCxcclxuICAgIGhlaWdodDogJzQwdmgnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLmRvd24oJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJSAhaW1wb3J0YW50JyxcclxuICAgIH0sXHJcbiAgICAnJjpob3Zlcic6IHtcclxuICAgICAgekluZGV4OiAxLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyICRpbWFnZUJhY2tkcm9wJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLjE1LFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyICRpbWFnZU1hcmtlZCc6IHtcclxuICAgICAgb3BhY2l0eTogMCxcclxuICAgIH0sXHJcbiAgICAnJjpob3ZlciAkaW1hZ2VUaXRsZSc6IHtcclxuICAgICAgYm9yZGVyOiAnNHB4IHNvbGlkIGN1cnJlbnRDb2xvcicsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2VCdXR0b246IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgZmxleERpcmVjdGlvbjogJ2NvbHVtbicsXHJcbiAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcclxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJyxcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICB9LFxyXG4gIGltYWdlU3JjOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmRTaXplOiAnY292ZXInLFxyXG4gICAgYmFja2dyb3VuZFBvc2l0aW9uOiAnY2VudGVyIDQwJScsXHJcbiAgfSxcclxuICBpbWFnZUJhY2tkcm9wOiB7XHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIGxlZnQ6IDAsXHJcbiAgICByaWdodDogMCxcclxuICAgIHRvcDogMCxcclxuICAgIGJvdHRvbTogMCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuY29tbW9uLmJsYWNrLFxyXG4gICAgb3BhY2l0eTogMC41LFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgfSxcclxuICBpbWFnZVRpdGxlOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIHBhZGRpbmc6IGAke3RoZW1lLnNwYWNpbmcoMil9cHggJHt0aGVtZS5zcGFjaW5nKDQpfXB4IDE0cHhgLFxyXG4gICAgbWFyZ2luQm90dG9tOiAnMTJweCdcclxuICB9LFxyXG4gIGltYWdlTWFya2VkOiB7XHJcbiAgICBoZWlnaHQ6IDMsXHJcbiAgICB3aWR0aDogMTgsXHJcbiAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmNvbW1vbi53aGl0ZSxcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgYm90dG9tOiAtMixcclxuICAgIGxlZnQ6ICdjYWxjKDUwJSAtIDlweCknLFxyXG4gICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKCdvcGFjaXR5JyksXHJcbiAgfSxcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcykoUHJvZHVjdENhdGVnb3JpZXMpXHJcbiJdLCJzb3VyY2VSb290IjoiIn0=