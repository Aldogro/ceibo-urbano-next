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
      maxHeight: '80%',
      display: 'flex',
      flexDirection: 'column'
    }),
    image: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      width: '100%'
    }, theme.breakpoints.up('sm'), {})
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy92aWV3cy9DYXJvdXNlbC5qcyJdLCJuYW1lcyI6WyJJbWFnZUNhcm91c2VsIiwib3BlbiIsInNldE9wZW4iLCJpbWFnZXMiLCJjbGFzc2VzIiwidXNlU3R5bGVzIiwiYmFja2Ryb3AiLCJjYXJvdXNlbCIsIm1hcCIsImltYWdlIiwibWFrZVN0eWxlcyIsInRoZW1lIiwiekluZGV4IiwiZHJhd2VyIiwiY29sb3IiLCJ3aWR0aCIsImJyZWFrcG9pbnRzIiwidXAiLCJtYXhIZWlnaHQiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixPQUErQjtBQUFBOztBQUFBLE1BQTVCQyxJQUE0QixRQUE1QkEsSUFBNEI7QUFBQSxNQUF0QkMsT0FBc0IsUUFBdEJBLE9BQXNCO0FBQUEsTUFBYkMsTUFBYSxRQUFiQSxNQUFhO0FBQ25ELE1BQU1DLE9BQU8sR0FBR0MsU0FBUyxFQUF6QjtBQUVBLHNCQUNFLHFFQUFDLDBEQUFEO0FBQVUsYUFBUyxFQUFFRCxPQUFPLENBQUNFLFFBQTdCO0FBQXVDLFFBQUksRUFBRUwsSUFBN0M7QUFBbUQsV0FBTyxFQUFFO0FBQUEsYUFBTUMsT0FBTyxDQUFDLEtBQUQsQ0FBYjtBQUFBLEtBQTVEO0FBQUEsMkJBQ0UscUVBQUMsaUVBQUQ7QUFBVSxlQUFTLEVBQUVFLE9BQU8sQ0FBQ0csUUFBN0I7QUFBQSxnQkFDR0osTUFBTSxHQUVMQSxNQUFNLENBQUNLLEdBQVAsQ0FBVyxVQUFBQyxLQUFLO0FBQUEsNEJBQ2Q7QUFBSyxtQkFBUyxFQUFFTCxPQUFPLENBQUNLLEtBQXhCO0FBQStCLGFBQUcsRUFBRUE7QUFBcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFEYztBQUFBLE9BQWhCLENBRkssR0FLSDtBQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFhRCxDQWhCRDs7R0FBTVQsYTtVQUNZSyxTOzs7S0FEWkwsYTtBQWtCU0EsNEVBQWY7QUFFQSxJQUFNSyxTQUFTLEdBQUdLLDJFQUFVLENBQUMsVUFBQ0MsS0FBRDtBQUFBLFNBQVk7QUFDdkNMLFlBQVEsRUFBRTtBQUNSTSxZQUFNLEVBQUVELEtBQUssQ0FBQ0MsTUFBTixDQUFhQyxNQUFiLEdBQXNCLENBRHRCO0FBRVJDLFdBQUssRUFBRTtBQUZDLEtBRDZCO0FBS3ZDUCxZQUFRLEVBQUU7QUFDUlEsV0FBSyxFQUFFO0FBREQsT0FFTEosS0FBSyxDQUFDSyxXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUZLLEVBRXdCO0FBQzVCRixXQUFLLEVBQUUsS0FEcUI7QUFFNUJHLGVBQVMsRUFBRSxLQUZpQjtBQUc1QkMsYUFBTyxFQUFFLE1BSG1CO0FBSTVCQyxtQkFBYSxFQUFFO0FBSmEsS0FGeEIsQ0FMK0I7QUFjdkNYLFNBQUssRUFBRTtBQUNMTSxXQUFLLEVBQUU7QUFESixPQUVGSixLQUFLLENBQUNLLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBRkUsRUFFMkIsRUFGM0I7QUFka0MsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguOWIzM2FjZjNmMDk1ODFhZDRlNDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IENhcm91c2VsIGZyb20gJ3JlYWN0LW1hdGVyaWFsLXVpLWNhcm91c2VsJ1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyBCYWNrZHJvcCB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgSW1hZ2VDYXJvdXNlbCA9ICh7IG9wZW4sIHNldE9wZW4sIGltYWdlcyB9KSA9PiB7XHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8QmFja2Ryb3AgY2xhc3NOYW1lPXtjbGFzc2VzLmJhY2tkcm9wfSBvcGVuPXtvcGVufSBvbkNsaWNrPXsoKSA9PiBzZXRPcGVuKGZhbHNlKX0+XHJcbiAgICAgIDxDYXJvdXNlbCBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWx9PlxyXG4gICAgICAgIHtpbWFnZXNcclxuICAgICAgICAgID9cclxuICAgICAgICAgIGltYWdlcy5tYXAoaW1hZ2UgPT4gKFxyXG4gICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gc3JjPXtpbWFnZX0gLz5cclxuICAgICAgICAgICkpXHJcbiAgICAgICAgICA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgIDwvQ2Fyb3VzZWw+XHJcbiAgICA8L0JhY2tkcm9wPlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VDYXJvdXNlbFxyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYmFja2Ryb3A6IHtcclxuICAgIHpJbmRleDogdGhlbWUuekluZGV4LmRyYXdlciArIDEsXHJcbiAgICBjb2xvcjogJyNmZmYnLFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWw6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHdpZHRoOiAnNjAlJyxcclxuICAgICAgbWF4SGVpZ2h0OiAnODAlJyxcclxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gICAgICBmbGV4RGlyZWN0aW9uOiAnY29sdW1uJ1xyXG4gICAgfSxcclxuICB9LFxyXG4gIGltYWdlOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgfSxcclxuICB9XHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=