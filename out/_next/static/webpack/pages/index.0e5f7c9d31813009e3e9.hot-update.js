webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/views/Carousel.js":
/*!***********************************!*\
  !*** ./modules/views/Carousel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-material-ui-carousel */ "./node_modules/react-material-ui-carousel/dist/index.js");
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\Carousel.js",
    _this = undefined,
    _s = $RefreshSig$();






var ImageCarousel = function ImageCarousel(_ref) {
  _s();

  var open = _ref.open,
      setOpen = _ref.setOpen,
      images = _ref.images;
  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_5__["Backdrop"], {
    className: classes.backdrop,
    open: open,
    onClick: function onClick() {
      return setOpen(false);
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.carousel,
      children: images ? images.map(function (image) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          className: classes.image,
          src: image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 13
        }, _this);
      }) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_s(ImageCarousel, "8g5FPXexvSEOsxdmU7HicukHGqY=", false, function () {
  return [useStyles];
});

_c = ImageCarousel;
/* harmony default export */ __webpack_exports__["default"] = (ImageCarousel);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    },
    carousel: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '60%',
      height: '400px'
    }),
    image: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '100%',
      height: '100%'
    })
  };
});

var _c;

$RefreshReg$(_c, "ImageCarousel");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNhcm91c2VsIiwib3BlbiIsInNldE9wZW4iLCJpbWFnZXMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiYmFja2Ryb3AiLCJjYXJvdXNlbCIsIm1hcCIsImltYWdlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiekluZGV4IiwiZHJhd2VyIiwiY29sb3IiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwidXAiLCJoZWlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsT0FBK0I7QUFBQTs7QUFBQSxNQUE1QkMsSUFBNEIsUUFBNUJBLElBQTRCO0FBQUEsTUFBdEJDLE9BQXNCLFFBQXRCQSxPQUFzQjtBQUFBLE1BQWJDLE1BQWEsUUFBYkEsTUFBYTtBQUNuRCxNQUFNQyxPQUFPLEdBQUdDLFNBQVMsRUFBekI7QUFFQSxzQkFDRSxxRUFBQywwREFBRDtBQUFVLGFBQVMsRUFBRUQsT0FBTyxDQUFDRSxRQUE3QjtBQUF1QyxRQUFJLEVBQUVMLElBQTdDO0FBQW1ELFdBQU8sRUFBRTtBQUFBLGFBQU1DLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQSxLQUE1RDtBQUFBLDJCQUNFLHFFQUFDLGlFQUFEO0FBQVUsZUFBUyxFQUFFRSxPQUFPLENBQUNHLFFBQTdCO0FBQUEsZ0JBQ0dKLE1BQU0sR0FFTEEsTUFBTSxDQUFDSyxHQUFQLENBQVcsVUFBQUMsS0FBSztBQUFBLDRCQUNkO0FBQUssbUJBQVMsRUFBRUwsT0FBTyxDQUFDSyxLQUF4QjtBQUErQixhQUFHLEVBQUVBO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRGM7QUFBQSxPQUFoQixDQUZLLEdBS0g7QUFOTjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBYUQsQ0FoQkQ7O0dBQU1ULGE7VUFDWUssUzs7O0tBRFpMLGE7QUFrQlNBLDRFQUFmO0FBRUEsSUFBTUssU0FBUyxHQUFHSywyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDTCxZQUFRLEVBQUU7QUFDUk0sWUFBTSxFQUFFRCxLQUFLLENBQUNDLE1BQU4sQ0FBYUMsTUFBYixHQUFzQixDQUR0QjtBQUVSQyxXQUFLLEVBQUU7QUFGQyxLQUQ2QjtBQUt2Q1AsWUFBUSxFQUFFO0FBQ1JRLFdBQUssRUFBRTtBQURELE9BRUxKLEtBQUssQ0FBQ0ssV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGSyxFQUV3QjtBQUM1QkYsV0FBSyxFQUFFLEtBRHFCO0FBRTVCRyxZQUFNLEVBQUU7QUFGb0IsS0FGeEIsQ0FMK0I7QUFZdkNULFNBQUssRUFBRTtBQUNMTSxXQUFLLEVBQUU7QUFESixPQUVGSixLQUFLLENBQUNLLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBRkUsRUFFMkI7QUFDNUJGLFdBQUssRUFBRSxNQURxQjtBQUU1QkcsWUFBTSxFQUFFO0FBRm9CLEtBRjNCO0FBWmtDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjBlNWY3YzlkMzE4MTMwMDllM2U5LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgQmFja2Ryb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IEltYWdlQ2Fyb3VzZWwgPSAoeyBvcGVuLCBzZXRPcGVuLCBpbWFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhY2tkcm9wIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZHJvcH0gb3Blbj17b3Blbn0gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICA8Q2Fyb3VzZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsfT5cclxuICAgICAgICB7aW1hZ2VzXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICBpbWFnZXMubWFwKGltYWdlID0+IChcclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9CYWNrZHJvcD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2Fyb3VzZWxcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGJhY2tkcm9wOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICB9LFxyXG4gIGNhcm91c2VsOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogJzYwJScsXHJcbiAgICAgIGhlaWdodDogJzQwMHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnMTAwJScsXHJcbiAgICB9LFxyXG4gIH1cclxufSkpIl0sInNvdXJjZVJvb3QiOiIifQ==