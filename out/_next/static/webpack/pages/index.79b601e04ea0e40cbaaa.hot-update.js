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
      children: productState.products.map(function (product) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_ButtonBase__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
              children: [product.name, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
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
              children: ["$", product.price]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Button, {
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
        }, product.name, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0Q2F0ZWdvcmllcy5qcyJdLCJuYW1lcyI6WyJQcm9kdWN0Q2F0ZWdvcmllcyIsInByb3BzIiwiY2xhc3NlcyIsInVzZVByb2R1Y3QiLCJwcm9kdWN0U3RhdGUiLCJwcm9kdWN0RGlzcGF0Y2giLCJ1c2VFZmZlY3QiLCJhcHAiLCJmaXJlc3RvcmUiLCJjb2xsZWN0aW9uIiwiZ2V0IiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIkFjdGlvblR5cGUiLCJTRVRfUFJPRFVDVFMiLCJwYXlsb2FkIiwiZG9jcyIsIm1hcCIsImRvYyIsImRhdGEiLCJyb290IiwiaW1hZ2VzIiwicHJvZHVjdHMiLCJwcm9kdWN0IiwiaW1hZ2VXcmFwcGVyIiwid2lkdGgiLCJpbWFnZVNyYyIsImJhY2tncm91bmRJbWFnZSIsInBpY3R1cmUiLCJpbWFnZUJhY2tkcm9wIiwiaW1hZ2VCdXR0b24iLCJpbWFnZVRpdGxlIiwibmFtZSIsImltYWdlTWFya2VkIiwicHJpY2UiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJvYmplY3QiLCJpc1JlcXVpcmVkIiwic3R5bGVzIiwidGhlbWUiLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luQm90dG9tIiwiZGlzcGxheSIsImZsZXhXcmFwIiwicG9zaXRpb24iLCJwYWRkaW5nIiwiYm9yZGVyUmFkaXVzIiwiaGVpZ2h0IiwiYnJlYWtwb2ludHMiLCJkb3duIiwiekluZGV4Iiwib3BhY2l0eSIsImJvcmRlciIsImxlZnQiLCJyaWdodCIsInRvcCIsImJvdHRvbSIsImZsZXhEaXJlY3Rpb24iLCJhbGlnbkl0ZW1zIiwianVzdGlmeUNvbnRlbnQiLCJjb2xvciIsInBhbGV0dGUiLCJjb21tb24iLCJ3aGl0ZSIsImJhY2tncm91bmRTaXplIiwiYmFja2dyb3VuZFBvc2l0aW9uIiwiYmFja2dyb3VuZCIsImJsYWNrIiwidHJhbnNpdGlvbiIsInRyYW5zaXRpb25zIiwiY3JlYXRl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REc7QUFFWHhCLFdBQUssRUFBRSxFQUZJO0FBR1gyQyxnQkFBVSxFQUFFNUIsS0FBSyxDQUFDdUIsT0FBTixDQUFjQyxNQUFkLENBQXFCQyxLQUh0QjtBQUlYbkIsY0FBUSxFQUFFLFVBSkM7QUFLWFksWUFBTSxFQUFFLENBQUMsQ0FMRTtBQU1YSCxVQUFJLEVBQUUsaUJBTks7QUFPWGUsZ0JBQVUsRUFBRTlCLEtBQUssQ0FBQytCLFdBQU4sQ0FBa0JDLE1BQWxCLENBQXlCLFNBQXpCO0FBUEQ7QUFwRVksR0FBWjtBQUFBLENBQWY7O0FBZ0ZlQywwSUFBVSxDQUFDbEMsTUFBRCxDQUFWLENBQW1CeEMsaUJBQW5CLENBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNzliNjAxZTA0ZWEwZTQwY2JhYWEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgeyB3aXRoU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgQnV0dG9uQmFzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b25CYXNlJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnLi4vY29tcG9uZW50cy9UeXBvZ3JhcGh5J1xyXG5pbXBvcnQgeyB1c2VQcm9kdWN0LCBBY3Rpb25UeXBlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvUHJvZHVjdC5jb250ZXh0J1xyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuXHJcbmZ1bmN0aW9uIFByb2R1Y3RDYXRlZ29yaWVzKHByb3BzKSB7XHJcbiAgY29uc3QgeyBjbGFzc2VzIH0gPSBwcm9wc1xyXG4gIGNvbnN0IFtwcm9kdWN0U3RhdGUsIHByb2R1Y3REaXNwYXRjaF0gPSB1c2VQcm9kdWN0KClcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGFwcC5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9kdWN0cycpXHJcbiAgICAuZ2V0KClcclxuICAgIC50aGVuKHNuYXBzaG90ID0+IHByb2R1Y3REaXNwYXRjaCh7XHJcbiAgICAgIHR5cGU6IEFjdGlvblR5cGUuU0VUX1BST0RVQ1RTLFxyXG4gICAgICBwYXlsb2FkOiBzbmFwc2hvdC5kb2NzLm1hcChkb2MgPT4gZG9jLmRhdGEoKSksXHJcbiAgICB9KSlcclxuICB9LCBbXSlcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxDb250YWluZXIgY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IGNvbXBvbmVudD1cInNlY3Rpb25cIj5cclxuICAgICAgPFR5cG9ncmFwaHkgdmFyaWFudD1cImg0XCIgbWFya2VkPVwiY2VudGVyXCIgYWxpZ249XCJjZW50ZXJcIiBjb21wb25lbnQ9XCJoMlwiPlxyXG4gICAgICAgIMKhQXByb3ZlY2jDoSB0b2RhcyBudWVzdHJhcyBwcm9tb2Npb25lcyFcclxuICAgICAgPC9UeXBvZ3JhcGh5PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZXN9PlxyXG4gICAgICAgIHtwcm9kdWN0U3RhdGUucHJvZHVjdHMubWFwKChwcm9kdWN0KSA9PiAoXHJcbiAgICAgICAgICA8QnV0dG9uQmFzZVxyXG4gICAgICAgICAgICBrZXk9e3Byb2R1Y3QubmFtZX1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlV3JhcHBlcn1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB3aWR0aDogJzMzLjMzMyUnLFxyXG4gICAgICAgICAgICB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlU3JjfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kSW1hZ2U6IGB1cmwoJHtwcm9kdWN0LnBpY3R1cmV9KWAsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCYWNrZHJvcH0gLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2VCdXR0b259PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ9XCJoM1wiXHJcbiAgICAgICAgICAgICAgICB2YXJpYW50PVwiaDZcIlxyXG4gICAgICAgICAgICAgICAgY29sb3I9XCJpbmhlcml0XCJcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZVRpdGxlfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIHtwcm9kdWN0Lm5hbWV9XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZU1hcmtlZH0gLz5cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHlcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudD1cImgzXCJcclxuICAgICAgICAgICAgICAgIHZhcmlhbnQ9XCJoNlwiXHJcbiAgICAgICAgICAgICAgICBjb2xvcj1cImluaGVyaXRcIlxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICR7cHJvZHVjdC5wcmljZX1cclxuICAgICAgICAgICAgICA8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbj5BZ3JlZ2FyIGFsIGNhcnJpdG88L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L0J1dHRvbkJhc2U+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Db250YWluZXI+XHJcbiAgKVxyXG59XHJcblxyXG5Qcm9kdWN0Q2F0ZWdvcmllcy5wcm9wVHlwZXMgPSB7XHJcbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdC5pc1JlcXVpcmVkLFxyXG59XHJcblxyXG5jb25zdCBzdHlsZXMgPSAodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDgpLFxyXG4gICAgbWFyZ2luQm90dG9tOiB0aGVtZS5zcGFjaW5nKDQpLFxyXG4gIH0sXHJcbiAgaW1hZ2VzOiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoOCksXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4V3JhcDogJ3dyYXAnLFxyXG4gIH0sXHJcbiAgaW1hZ2VXcmFwcGVyOiB7XHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICAgIGRpc3BsYXk6ICdibG9jaycsXHJcbiAgICBwYWRkaW5nOiAwLFxyXG4gICAgYm9yZGVyUmFkaXVzOiAwLFxyXG4gICAgaGVpZ2h0OiAnNDB2aCcsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMuZG93bignc20nKV06IHtcclxuICAgICAgd2lkdGg6ICcxMDAlICFpbXBvcnRhbnQnLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyJzoge1xyXG4gICAgICB6SW5kZXg6IDEsXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXIgJGltYWdlQmFja2Ryb3AnOiB7XHJcbiAgICAgIG9wYWNpdHk6IDAuMTUsXHJcbiAgICB9LFxyXG4gICAgJyY6aG92ZXIgJGltYWdlTWFya2VkJzoge1xyXG4gICAgICBvcGFjaXR5OiAwLFxyXG4gICAgfSxcclxuICAgICcmOmhvdmVyICRpbWFnZVRpdGxlJzoge1xyXG4gICAgICBib3JkZXI6ICc0cHggc29saWQgY3VycmVudENvbG9yJyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZUJ1dHRvbjoge1xyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBsZWZ0OiAwLFxyXG4gICAgcmlnaHQ6IDAsXHJcbiAgICB0b3A6IDAsXHJcbiAgICBib3R0b206IDAsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJyxcclxuICAgIGFsaWduSXRlbXM6ICdjZW50ZXInLFxyXG4gICAganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInLFxyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gIH0sXHJcbiAgaW1hZ2VTcmM6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZFNpemU6ICdjb3ZlcicsXHJcbiAgICBiYWNrZ3JvdW5kUG9zaXRpb246ICdjZW50ZXIgNDAlJyxcclxuICB9LFxyXG4gIGltYWdlQmFja2Ryb3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgbGVmdDogMCxcclxuICAgIHJpZ2h0OiAwLFxyXG4gICAgdG9wOiAwLFxyXG4gICAgYm90dG9tOiAwLFxyXG4gICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5jb21tb24uYmxhY2ssXHJcbiAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknKSxcclxuICB9LFxyXG4gIGltYWdlVGl0bGU6IHtcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gICAgcGFkZGluZzogYCR7dGhlbWUuc3BhY2luZygyKX1weCAke3RoZW1lLnNwYWNpbmcoNCl9cHggMTRweGAsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcxMnB4J1xyXG4gIH0sXHJcbiAgaW1hZ2VNYXJrZWQ6IHtcclxuICAgIGhlaWdodDogMyxcclxuICAgIHdpZHRoOiAxOCxcclxuICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUuY29tbW9uLndoaXRlLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICBib3R0b206IC0yLFxyXG4gICAgbGVmdDogJ2NhbGMoNTAlIC0gOXB4KScsXHJcbiAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ29wYWNpdHknKSxcclxuICB9LFxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzKShQcm9kdWN0Q2F0ZWdvcmllcylcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==