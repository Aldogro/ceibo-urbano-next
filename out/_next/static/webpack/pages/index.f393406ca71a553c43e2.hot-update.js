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
      className: classes.closeBackdrop,
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
      navButtonsAlwaysVisible: true,
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
      color: 'white',
      top: theme.spacing(3),
      right: theme.spacing(3)
    },
    carousel: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '70%',
      height: '700px'
    }),
    image: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%'
    }, theme.breakpoints.up('sm'), {
      width: '100%',
      height: '700px',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNhcm91c2VsIiwib3BlbiIsInNldE9wZW4iLCJpbWFnZXMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiYmFja2Ryb3AiLCJjbG9zZUJhY2tkcm9wIiwiY2Fyb3VzZWwiLCJtYXAiLCJpbWFnZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInpJbmRleCIsImRyYXdlciIsImNvbG9yIiwicG9zaXRpb24iLCJ0b3AiLCJzcGFjaW5nIiwicmlnaHQiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwidXAiLCJoZWlnaHQiLCJvYmplY3RGaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDbkQsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBVSxhQUFTLEVBQUVELE9BQU8sQ0FBQ0UsUUFBN0I7QUFBdUMsUUFBSSxFQUFFTCxJQUE3QztBQUFBLDRCQUNFLHFFQUFDLG9FQUFEO0FBQVksZUFBUyxFQUFFRyxPQUFPLENBQUNHLGFBQS9CO0FBQThDLGFBQU8sRUFBRTtBQUFBLGVBQU1MLE9BQU8sQ0FBQyxLQUFELENBQWI7QUFBQSxPQUF2RDtBQUFBLDZCQUNFLHFFQUFDLHNFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFJRSxxRUFBQyxpRUFBRDtBQUFVLGVBQVMsRUFBRUUsT0FBTyxDQUFDSSxRQUE3QjtBQUF1Qyw2QkFBdUIsTUFBOUQ7QUFBQSxnQkFDR0wsTUFBTSxHQUVMQSxNQUFNLENBQUNNLEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsNEJBQ2Q7QUFBSyxtQkFBUyxFQUFFTixPQUFPLENBQUNNLEtBQXhCO0FBQStCLGFBQUcsRUFBRUE7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWhCLENBRkssR0FLSDtBQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWdCRCxDQW5CRDs7R0FBTVYsYTtVQUNZSyxTOzs7S0FEWkwsYTtBQXFCU0EsNEVBQWY7QUFFQSxJQUFNSyxTQUFTLEdBQUdNLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNOLFlBQVEsRUFBRTtBQUNSTyxZQUFNLEVBQUVELEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxNQUFiLEdBQXNCLENBRHRCO0FBRVJDLFdBQUssRUFBRTtBQUZDLEtBRDZCO0FBS3ZDUixpQkFBYSxFQUFFO0FBQ2JTLGNBQVEsRUFBRSxVQURHO0FBRWJELFdBQUssRUFBRSxPQUZNO0FBR2JFLFNBQUcsRUFBRUwsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZCxDQUhRO0FBSWJDLFdBQUssRUFBRVAsS0FBSyxDQUFDTSxPQUFOLENBQWMsQ0FBZDtBQUpNLEtBTHdCO0FBV3ZDVixZQUFRLEVBQUU7QUFDUlksV0FBSyxFQUFFO0FBREQsT0FFTFIsS0FBSyxDQUFDUyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZLLEVBRXdCO0FBQzVCRixXQUFLLEVBQUUsS0FEcUI7QUFFNUJHLFlBQU0sRUFBRTtBQUZvQixLQUZ4QixDQVgrQjtBQWtCdkNiLFNBQUssRUFBRTtBQUNMVSxXQUFLLEVBQUU7QUFESixPQUVGUixLQUFLLENBQUNTLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBRkUsRUFFMkI7QUFDNUJGLFdBQUssRUFBRSxNQURxQjtBQUU1QkcsWUFBTSxFQUFFLE9BRm9CO0FBRzVCQyxlQUFTLEVBQUU7QUFIaUIsS0FGM0I7QUFsQmtDLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmYzOTM0MDZjYTcxYTU1M2M0M2UyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgQmFja2Ryb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nXHJcbmltcG9ydCBIaWdobGlnaHRPZmZJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9IaWdobGlnaHRPZmYnO1xyXG5cclxuY29uc3QgSW1hZ2VDYXJvdXNlbCA9ICh7IG9wZW4sIHNldE9wZW4sIGltYWdlcyB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QmFja2Ryb3AgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfSBvcGVuPXtvcGVufT5cclxuICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmNsb3NlQmFja2Ryb3B9IG9uQ2xpY2s9eygpID0+IHNldE9wZW4oZmFsc2UpfSA+XHJcbiAgICAgICAgPEhpZ2hsaWdodE9mZkljb24gLz5cclxuICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICA8Q2Fyb3VzZWwgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsfSBuYXZCdXR0b25zQWx3YXlzVmlzaWJsZT5cclxuICAgICAgICB7aW1hZ2VzXHJcbiAgICAgICAgICA/XHJcbiAgICAgICAgICBpbWFnZXMubWFwKGltYWdlID0+IChcclxuICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuaW1hZ2V9IHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgICApKVxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0Nhcm91c2VsPlxyXG4gICAgPC9CYWNrZHJvcD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEltYWdlQ2Fyb3VzZWxcclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGJhY2tkcm9wOiB7XHJcbiAgICB6SW5kZXg6IHRoZW1lLnpJbmRleC5kcmF3ZXIgKyAxLFxyXG4gICAgY29sb3I6ICcjZmZmJyxcclxuICB9LFxyXG4gIGNsb3NlQmFja2Ryb3A6IHtcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgY29sb3I6ICd3aGl0ZScsXHJcbiAgICB0b3A6IHRoZW1lLnNwYWNpbmcoMyksXHJcbiAgICByaWdodDogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG4gIGNhcm91c2VsOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICB3aWR0aDogJzcwJScsXHJcbiAgICAgIGhlaWdodDogJzcwMHB4JyxcclxuICAgIH0sXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgd2lkdGg6ICcxMDAlJyxcclxuICAgICAgaGVpZ2h0OiAnNzAwcHgnLFxyXG4gICAgICBvYmplY3RGaXQ6ICdjb250YWluJ1xyXG4gICAgfSxcclxuICB9XHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=