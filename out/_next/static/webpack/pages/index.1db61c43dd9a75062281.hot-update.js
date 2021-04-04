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
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/icons/HighlightOff */ "./node_modules/@material-ui/icons/HighlightOff.js");
/* harmony import */ var _material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_7__);



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
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_6__["default"], {
      classes: classes.closeBackdrop,
      onClick: function onClick() {
        return setOpen(false);
      },
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_HighlightOff__WEBPACK_IMPORTED_MODULE_7___default.a, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_3___default.a, {
      className: classes.carousel,
      children: images ? images.map(function (image) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
          className: classes.image,
          src: image
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 21,
          columnNumber: 13
        }, _this);
      }) : null
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
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
    closeBackdrop: {
      position: 'absolute',
      top: theme.spacing(3),
      right: theme.spacing(3)
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
      height: '400px',
      objectFit: 'contain'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNhcm91c2VsIiwib3BlbiIsInNldE9wZW4iLCJpbWFnZXMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiYmFja2Ryb3AiLCJjbG9zZUJhY2tkcm9wIiwiY2Fyb3VzZWwiLCJtYXAiLCJpbWFnZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInpJbmRleCIsImRyYXdlciIsImNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJzcGFjaW5nIiwicmlnaHQiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwidXAiLCJoZWlnaHQiLCJvYmplY3RGaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDbkQsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBVSxhQUFTLEVBQUVELE9BQU8sQ0FBQ0UsUUFBN0I7QUFBdUMsUUFBSSxFQUFFTCxJQUE3QztBQUFBLDRCQUNFLHFFQUFDLG9FQUFEO0FBQVksYUFBTyxFQUFFRyxPQUFPLENBQUNHLGFBQTdCO0FBQTRDLGFBQU8sRUFBRTtBQUFBLGVBQU1MLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQSxPQUFyRDtBQUFBLDZCQUNFLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxxRUFBQyxpRUFBRDtBQUFVLGVBQVMsRUFBRUUsT0FBTyxDQUFDSSxRQUE3QjtBQUFBLGdCQUNHTCxNQUFNLEdBRUxBLE1BQU0sQ0FBQ00sR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSw0QkFDZDtBQUFLLG1CQUFTLEVBQUVOLE9BQU8sQ0FBQ00sS0FBeEI7QUFBK0IsYUFBRyxFQUFFQTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBaEIsQ0FGSyxHQUtIO0FBTk47QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBZ0JELENBbkJEOztHQUFNVixhO1VBQ1lLLFM7OztLQURaTCxhO0FBcUJTQSw0RUFBZjtBQUVBLElBQU1LLFNBQVMsR0FBR00sMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q04sWUFBUSxFQUFFO0FBQ1JPLFlBQU0sRUFBRUQsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE1BQWIsR0FBc0IsQ0FEdEI7QUFFUkMsV0FBSyxFQUFFO0FBRkMsS0FENkI7QUFLdkNSLGlCQUFhLEVBQUU7QUFDYlMsY0FBUSxFQUFFLFVBREc7QUFFYkMsU0FBRyxFQUFFTCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkLENBRlE7QUFHYkMsV0FBSyxFQUFFUCxLQUFLLENBQUNNLE9BQU4sQ0FBYyxDQUFkO0FBSE0sS0FMd0I7QUFVdkNWLFlBQVEsRUFBRTtBQUNSWSxXQUFLLEVBQUU7QUFERCxPQUVMUixLQUFLLENBQUNTLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBRkssRUFFd0I7QUFDNUJGLFdBQUssRUFBRSxLQURxQjtBQUU1QkcsWUFBTSxFQUFFO0FBRm9CLEtBRnhCLENBVitCO0FBaUJ2Q2IsU0FBSyxFQUFFO0FBQ0xVLFdBQUssRUFBRTtBQURKLE9BRUZSLEtBQUssQ0FBQ1MsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FGRSxFQUUyQjtBQUM1QkYsV0FBSyxFQUFFLE1BRHFCO0FBRTVCRyxZQUFNLEVBQUUsT0FGb0I7QUFHNUJDLGVBQVMsRUFBRTtBQUhpQixLQUYzQjtBQWpCa0MsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguMWRiNjFjNDNkZDlhNzUwNjIyODEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IEhpZ2hsaWdodE9mZkljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0hpZ2hsaWdodE9mZic7XHJcblxyXG5jb25zdCBJbWFnZUNhcm91c2VsID0gKHsgb3Blbiwgc2V0T3BlbiwgaW1hZ2VzIH0pID0+IHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxCYWNrZHJvcCBjbGFzc05hbWU9e2NsYXNzZXMuYmFja2Ryb3B9IG9wZW49e29wZW59PlxyXG4gICAgICA8SWNvbkJ1dHRvbiBjbGFzc2VzPXtjbGFzc2VzLmNsb3NlQmFja2Ryb3B9IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfSA+XHJcbiAgICAgICAgPEhpZ2hsaWdodE9mZkljb24gLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8Q2Fyb3VzZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsfT5cclxuICAgICAgICB7aW1hZ2VzXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICBpbWFnZXMubWFwKGltYWdlID0+IChcclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9CYWNrZHJvcD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2Fyb3VzZWxcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGJhY2tkcm9wOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICB9LFxyXG4gIGNsb3NlQmFja2Ryb3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiB0aGVtZS5zcGFjaW5nKDMpLFxyXG4gICAgcmlnaHQ6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgfSxcclxuICBjYXJvdXNlbDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgd2lkdGg6ICc2MCUnLFxyXG4gICAgICBoZWlnaHQ6ICc0MDBweCcsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgaW1hZ2U6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICAgIGhlaWdodDogJzQwMHB4JyxcclxuICAgICAgb2JqZWN0Rml0OiAnY29udGFpbidcclxuICAgIH0sXHJcbiAgfVxyXG59KSkiXSwic291cmNlUm9vdCI6IiJ9