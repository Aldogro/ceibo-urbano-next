webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/views/Carousel.js":
/*!***********************************!*\
  !*** ./modules/views/Carousel.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-material-ui-carousel */ "./node_modules/react-material-ui-carousel/dist/index.js");
/* harmony import */ var react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");


var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\views\\Carousel.js",
    _this = undefined,
    _s = $RefreshSig$();






var ImageCarousel = function ImageCarousel(_ref) {
  _s();

  var open = _ref.open,
      setOpen = _ref.setOpen,
      images = _ref.images;
  var classes = useStyles();
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_4__["Backdrop"], {
    className: classes.backdrop,
    open: open,
    onClick: function onClick() {
      return setOpen(false);
    },
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_material_ui_carousel__WEBPACK_IMPORTED_MODULE_2___default.a, {
      children: images ? images.map(function (image) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
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
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    backdrop: {
      zIndex: theme.zIndex.drawer + 1,
      color: '#fff'
    },
    image: {
      width: '100%'
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNhcm91c2VsIiwib3BlbiIsInNldE9wZW4iLCJpbWFnZXMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiYmFja2Ryb3AiLCJtYXAiLCJpbWFnZSIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsInpJbmRleCIsImRyYXdlciIsImNvbG9yIiwid2lkdGgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLE9BQStCO0FBQUE7O0FBQUEsTUFBNUJDLElBQTRCLFFBQTVCQSxJQUE0QjtBQUFBLE1BQXRCQyxPQUFzQixRQUF0QkEsT0FBc0I7QUFBQSxNQUFiQyxNQUFhLFFBQWJBLE1BQWE7QUFDbkQsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBRUEsc0JBQ0UscUVBQUMsMERBQUQ7QUFBVSxhQUFTLEVBQUVELE9BQU8sQ0FBQ0UsUUFBN0I7QUFBdUMsUUFBSSxFQUFFTCxJQUE3QztBQUFtRCxXQUFPLEVBQUU7QUFBQSxhQUFNQyxPQUFPLENBQUMsS0FBRCxDQUFiO0FBQUEsS0FBNUQ7QUFBQSwyQkFDRSxxRUFBQyxpRUFBRDtBQUFBLGdCQUNHQyxNQUFNLEdBRUxBLE1BQU0sQ0FBQ0ksR0FBUCxDQUFXLFVBQUFDLEtBQUs7QUFBQSw0QkFDZDtBQUFLLG1CQUFTLEVBQUVKLE9BQU8sQ0FBQ0ksS0FBeEI7QUFBK0IsYUFBRyxFQUFFQTtBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURjO0FBQUEsT0FBaEIsQ0FGSyxHQUtIO0FBTk47QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWFELENBaEJEOztHQUFNUixhO1VBQ1lLLFM7OztLQURaTCxhO0FBa0JTQSw0RUFBZjtBQUVBLElBQU1LLFNBQVMsR0FBR0ksMkVBQVUsQ0FBQyxVQUFDQyxLQUFEO0FBQUEsU0FBWTtBQUN2Q0osWUFBUSxFQUFFO0FBQ1JLLFlBQU0sRUFBRUQsS0FBSyxDQUFDQyxNQUFOLENBQWFDLE1BQWIsR0FBc0IsQ0FEdEI7QUFFUkMsV0FBSyxFQUFFO0FBRkMsS0FENkI7QUFLdkNMLFNBQUssRUFBRTtBQUNMTSxXQUFLLEVBQUU7QUFERjtBQUxnQyxHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYTc2NDgwMDhlYjQxNzk4NDZjYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCBDYXJvdXNlbCBmcm9tICdyZWFjdC1tYXRlcmlhbC11aS1jYXJvdXNlbCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgQmFja2Ryb3AgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IEltYWdlQ2Fyb3VzZWwgPSAoeyBvcGVuLCBzZXRPcGVuLCBpbWFnZXMgfSkgPT4ge1xyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPEJhY2tkcm9wIGNsYXNzTmFtZT17Y2xhc3Nlcy5iYWNrZHJvcH0gb3Blbj17b3Blbn0gb25DbGljaz17KCkgPT4gc2V0T3BlbihmYWxzZSl9PlxyXG4gICAgICA8Q2Fyb3VzZWw+XHJcbiAgICAgICAge2ltYWdlc1xyXG4gICAgICAgICAgP1xyXG4gICAgICAgICAgaW1hZ2VzLm1hcChpbWFnZSA9PiAoXHJcbiAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmltYWdlfSBzcmM9e2ltYWdlfSAvPlxyXG4gICAgICAgICAgKSlcclxuICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgIH1cclxuICAgICAgPC9DYXJvdXNlbD5cclxuICAgIDwvQmFja2Ryb3A+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbWFnZUNhcm91c2VsXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBiYWNrZHJvcDoge1xyXG4gICAgekluZGV4OiB0aGVtZS56SW5kZXguZHJhd2VyICsgMSxcclxuICAgIGNvbG9yOiAnI2ZmZicsXHJcbiAgfSxcclxuICBpbWFnZToge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9XHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=