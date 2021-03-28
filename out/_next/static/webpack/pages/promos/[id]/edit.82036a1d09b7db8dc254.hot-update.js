webpackHotUpdate_N_E("pages/promos/[id]/edit",{

/***/ "./pages/promos/[id]/edit.js":
/*!***********************************!*\
  !*** ./pages/promos/[id]/edit.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _services_Promo_context__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../services/Promo.context */ "./services/Promo.context.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _modules_components_form_FormPromo__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../modules/components/form/FormPromo */ "./modules/components/form/FormPromo.js");
/* harmony import */ var _material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Container */ "./node_modules/@material-ui/core/esm/Container/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../firebase/firebase.config */ "./firebase/firebase.config.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\promos\\[id]\\edit.js",
    _this = undefined,
    _s = $RefreshSig$();












var EditPromoPage = function EditPromoPage() {
  _s();

  var _usePromo = Object(_services_Promo_context__WEBPACK_IMPORTED_MODULE_4__["usePromo"])(),
      _usePromo2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_usePromo, 2),
      promoState = _usePromo2[0],
      promoDispatch = _usePromo2[1];

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"])();

  var _useSnackbar = Object(notistack__WEBPACK_IMPORTED_MODULE_6__["useSnackbar"])(),
      enqueueSnackbar = _useSnackbar.enqueueSnackbar,
      closeSnackbar = _useSnackbar.closeSnackbar;

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var id = router.query.id;

    if (router.query.id) {
      getPromo(id);
    }
  }, [router.query]);

  var getPromo = function getPromo(id) {
    Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__["getItem"])({
      collection: 'promos',
      id: id
    }).then(function (snapshot) {
      promoDispatch({
        type: _services_Promo_context__WEBPACK_IMPORTED_MODULE_4__["ActionType"].SET_PROMO,
        payload: snapshot.data()
      });
    });
  };

  var updatePromo = function updatePromo(data) {
    Object(_firebase_firebase_config__WEBPACK_IMPORTED_MODULE_11__["editItem"])({
      collection: 'promos',
      id: router.query.id,
      data: data
    }).then(function () {
      enqueueSnackbar('Se ha editado la promo correctamente', {
        variant: 'success'
      });
      router.push('/promos');
    })["catch"](function (error) {
      return enqueueSnackbar('Ha ocurrido un error', {
        variant: 'error'
      });
    });
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_7__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Container__WEBPACK_IMPORTED_MODULE_9__["default"], {
      className: classes.container,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        className: classes.title,
        variant: "h4",
        children: "Editar Promos"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 50,
        columnNumber: 9
      }, _this), promoState !== null && promoState !== void 0 && promoState.promo ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_components_form_FormPromo__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onSubmit: function onSubmit(data) {
          return updatePromo(data);
        },
        promo: promoState.promo
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 54,
        columnNumber: 13
      }, _this) : null]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
    columnNumber: 5
  }, _this);
};

_s(EditPromoPage, "53Vq3tfn9dyxwEI0VWA4nYjapgc=", false, function () {
  return [_services_Promo_context__WEBPACK_IMPORTED_MODULE_4__["usePromo"], useStyles, next_router__WEBPACK_IMPORTED_MODULE_3__["useRouter"], notistack__WEBPACK_IMPORTED_MODULE_6__["useSnackbar"]];
});

_c = EditPromoPage;
/* harmony default export */ __webpack_exports__["default"] = (EditPromoPage);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["makeStyles"])(function (theme) {
  return {
    container: {
      margin: theme.spacing('70px', 'auto')
    },
    title: {
      marginTop: '2rem',
      marginBottom: '2rem'
    }
  };
});

var _c;

$RefreshReg$(_c, "EditPromoPage");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvcHJvbW9zLy9lZGl0LmpzIl0sIm5hbWVzIjpbIkVkaXRQcm9tb1BhZ2UiLCJ1c2VQcm9tbyIsInByb21vU3RhdGUiLCJwcm9tb0Rpc3BhdGNoIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsInVzZVNuYWNrYmFyIiwiZW5xdWV1ZVNuYWNrYmFyIiwiY2xvc2VTbmFja2JhciIsInVzZUVmZmVjdCIsImlkIiwicXVlcnkiLCJnZXRQcm9tbyIsImdldEl0ZW0iLCJjb2xsZWN0aW9uIiwidGhlbiIsInNuYXBzaG90IiwidHlwZSIsIkFjdGlvblR5cGUiLCJTRVRfUFJPTU8iLCJwYXlsb2FkIiwiZGF0YSIsInVwZGF0ZVByb21vIiwiZWRpdEl0ZW0iLCJ2YXJpYW50IiwicHVzaCIsImVycm9yIiwiY29udGFpbmVyIiwidGl0bGUiLCJwcm9tbyIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUVBLElBQU1BLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsR0FBTTtBQUFBOztBQUFBLGtCQUNVQyx3RUFBUSxFQURsQjtBQUFBO0FBQUEsTUFDbkJDLFVBRG1CO0FBQUEsTUFDUEMsYUFETzs7QUFFMUIsTUFBTUMsT0FBTyxHQUFHQyxTQUFTLEVBQXpCO0FBQ0EsTUFBTUMsTUFBTSxHQUFHQyw2REFBUyxFQUF4Qjs7QUFIMEIscUJBSWlCQyw2REFBVyxFQUo1QjtBQUFBLE1BSWxCQyxlQUprQixnQkFJbEJBLGVBSmtCO0FBQUEsTUFJREMsYUFKQyxnQkFJREEsYUFKQzs7QUFNMUJDLHlEQUFTLENBQUMsWUFBTTtBQUFBLFFBQ05DLEVBRE0sR0FDQ04sTUFBTSxDQUFDTyxLQURSLENBQ05ELEVBRE07O0FBRWQsUUFBSU4sTUFBTSxDQUFDTyxLQUFQLENBQWFELEVBQWpCLEVBQXFCO0FBQ25CRSxjQUFRLENBQUNGLEVBQUQsQ0FBUjtBQUNEO0FBQ0YsR0FMUSxFQUtOLENBQUNOLE1BQU0sQ0FBQ08sS0FBUixDQUxNLENBQVQ7O0FBT0EsTUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsQ0FBQ0YsRUFBRCxFQUFRO0FBQ3ZCRyw4RUFBTyxDQUFDO0FBQUVDLGdCQUFVLEVBQUUsUUFBZDtBQUF3QkosUUFBRSxFQUFGQTtBQUF4QixLQUFELENBQVAsQ0FDR0ssSUFESCxDQUNRLFVBQUFDLFFBQVEsRUFBSTtBQUNoQmYsbUJBQWEsQ0FBQztBQUNaZ0IsWUFBSSxFQUFFQyxrRUFBVSxDQUFDQyxTQURMO0FBRVpDLGVBQU8sRUFBRUosUUFBUSxDQUFDSyxJQUFUO0FBRkcsT0FBRCxDQUFiO0FBSUQsS0FOSDtBQU9ELEdBUkQ7O0FBVUEsTUFBTUMsV0FBVyxHQUFHLFNBQWRBLFdBQWMsQ0FBQ0QsSUFBRCxFQUFVO0FBQzVCRSwrRUFBUSxDQUFDO0FBQUVULGdCQUFVLEVBQUUsUUFBZDtBQUF3QkosUUFBRSxFQUFFTixNQUFNLENBQUNPLEtBQVAsQ0FBYUQsRUFBekM7QUFBNkNXLFVBQUksRUFBSkE7QUFBN0MsS0FBRCxDQUFSLENBQ0NOLElBREQsQ0FDTSxZQUFNO0FBQ1ZSLHFCQUFlLENBQUMsc0NBQUQsRUFBeUM7QUFBRWlCLGVBQU8sRUFBRTtBQUFYLE9BQXpDLENBQWY7QUFDQXBCLFlBQU0sQ0FBQ3FCLElBQVAsQ0FBWSxTQUFaO0FBQ0QsS0FKRCxXQUtPLFVBQUNDLEtBQUQ7QUFBQSxhQUFXbkIsZUFBZSxDQUFDLHNCQUFELEVBQXlCO0FBQUVpQixlQUFPLEVBQUU7QUFBWCxPQUF6QixDQUExQjtBQUFBLEtBTFA7QUFNRCxHQVBEOztBQVNBLHNCQUNFLHFFQUFDLDRDQUFELENBQU8sUUFBUDtBQUFBLDRCQUNFLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFLHFFQUFDLG1FQUFEO0FBQVcsZUFBUyxFQUFFdEIsT0FBTyxDQUFDeUIsU0FBOUI7QUFBQSw4QkFDRSxxRUFBQyxxRUFBRDtBQUFZLGlCQUFTLEVBQUV6QixPQUFPLENBQUMwQixLQUEvQjtBQUFzQyxlQUFPLEVBQUMsSUFBOUM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixFQUlHNUIsVUFBVSxTQUFWLElBQUFBLFVBQVUsV0FBVixJQUFBQSxVQUFVLENBQUU2QixLQUFaLGdCQUNHLHFFQUFDLDBFQUFEO0FBQVcsZ0JBQVEsRUFBRSxrQkFBQ1IsSUFBRDtBQUFBLGlCQUFVQyxXQUFXLENBQUNELElBQUQsQ0FBckI7QUFBQSxTQUFyQjtBQUFrRCxhQUFLLEVBQUVyQixVQUFVLENBQUM2QjtBQUFwRTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREgsR0FFRyxJQU5OO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBY0QsQ0E5Q0Q7O0dBQU0vQixhO1VBQ2dDQyxnRSxFQUNwQkksUyxFQUNERSxxRCxFQUM0QkMscUQ7OztLQUp2Q1IsYTtBQWdEU0EsNEVBQWY7QUFFQSxJQUFNSyxTQUFTLEdBQUcyQiwyRUFBVSxDQUFDLFVBQUNDLEtBQUQ7QUFBQSxTQUFZO0FBQ3ZDSixhQUFTLEVBQUU7QUFDVEssWUFBTSxFQUFFRCxLQUFLLENBQUNFLE9BQU4sQ0FBYyxNQUFkLEVBQXNCLE1BQXRCO0FBREMsS0FENEI7QUFJdkNMLFNBQUssRUFBRTtBQUNMTSxlQUFTLEVBQUUsTUFETjtBQUVMQyxrQkFBWSxFQUFFO0FBRlQ7QUFKZ0MsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvbW9zL1tpZF0vZWRpdC44MjAzNmExZDA5YjdkYjhkYzI1NC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuaW1wb3J0IHsgdXNlUHJvbW8sIEFjdGlvblR5cGUgfSBmcm9tICcuLi8uLi8uLi9zZXJ2aWNlcy9Qcm9tby5jb250ZXh0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VTbmFja2JhciB9IGZyb20gJ25vdGlzdGFjaydcclxuXHJcbmltcG9ydCBBcHBBcHBCYXIgZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy92aWV3cy9BcHBBcHBCYXInXHJcbmltcG9ydCBGb3JtUHJvbW8gZnJvbSAnLi4vLi4vLi4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vJ1xyXG5pbXBvcnQgQ29udGFpbmVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0NvbnRhaW5lcidcclxuaW1wb3J0IFR5cG9ncmFwaHkgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVHlwb2dyYXBoeSdcclxuXHJcbmltcG9ydCB7IGdldEl0ZW0sIGVkaXRJdGVtIH0gZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5cclxuY29uc3QgRWRpdFByb21vUGFnZSA9ICgpID0+IHtcclxuICBjb25zdCBbcHJvbW9TdGF0ZSwgcHJvbW9EaXNwYXRjaF0gPSB1c2VQcm9tbygpXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuICBjb25zdCB7IGVucXVldWVTbmFja2JhciwgY2xvc2VTbmFja2JhciB9ID0gdXNlU25hY2tiYXIoKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgY29uc3QgeyBpZCB9ID0gcm91dGVyLnF1ZXJ5XHJcbiAgICBpZiAocm91dGVyLnF1ZXJ5LmlkKSB7XHJcbiAgICAgIGdldFByb21vKGlkKVxyXG4gICAgfVxyXG4gIH0sIFtyb3V0ZXIucXVlcnldKVxyXG5cclxuICBjb25zdCBnZXRQcm9tbyA9IChpZCkgPT4ge1xyXG4gICAgZ2V0SXRlbSh7IGNvbGxlY3Rpb246ICdwcm9tb3MnLCBpZCB9KVxyXG4gICAgICAudGhlbihzbmFwc2hvdCA9PiB7XHJcbiAgICAgICAgcHJvbW9EaXNwYXRjaCh7XHJcbiAgICAgICAgICB0eXBlOiBBY3Rpb25UeXBlLlNFVF9QUk9NTyxcclxuICAgICAgICAgIHBheWxvYWQ6IHNuYXBzaG90LmRhdGEoKSxcclxuICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gIH1cclxuXHJcbiAgY29uc3QgdXBkYXRlUHJvbW8gPSAoZGF0YSkgPT4ge1xyXG4gICAgZWRpdEl0ZW0oeyBjb2xsZWN0aW9uOiAncHJvbW9zJywgaWQ6IHJvdXRlci5xdWVyeS5pZCwgZGF0YSB9KVxyXG4gICAgLnRoZW4oKCkgPT4ge1xyXG4gICAgICBlbnF1ZXVlU25hY2tiYXIoJ1NlIGhhIGVkaXRhZG8gbGEgcHJvbW8gY29ycmVjdGFtZW50ZScsIHsgdmFyaWFudDogJ3N1Y2Nlc3MnfSlcclxuICAgICAgcm91dGVyLnB1c2goJy9wcm9tb3MnKVxyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyb3IpID0+IGVucXVldWVTbmFja2JhcignSGEgb2N1cnJpZG8gdW4gZXJyb3InLCB7IHZhcmlhbnQ6ICdlcnJvcid9KSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBBcHBCYXIgLz5cclxuICAgICAgPENvbnRhaW5lciBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbmVyfT5cclxuICAgICAgICA8VHlwb2dyYXBoeSBjbGFzc05hbWU9e2NsYXNzZXMudGl0bGV9IHZhcmlhbnQ9XCJoNFwiPlxyXG4gICAgICAgICAgRWRpdGFyIFByb21vc1xyXG4gICAgICAgIDwvVHlwb2dyYXBoeT5cclxuICAgICAgICB7cHJvbW9TdGF0ZT8ucHJvbW9cclxuICAgICAgICAgID8gPEZvcm1Qcm9tbyBvblN1Ym1pdD17KGRhdGEpID0+IHVwZGF0ZVByb21vKGRhdGEpfSBwcm9tbz17cHJvbW9TdGF0ZS5wcm9tb30vPlxyXG4gICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgICA8L0NvbnRhaW5lcj5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBFZGl0UHJvbW9QYWdlXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBjb250YWluZXI6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnNzBweCcsICdhdXRvJyksXHJcbiAgfSxcclxuICB0aXRsZToge1xyXG4gICAgbWFyZ2luVG9wOiAnMnJlbScsXHJcbiAgICBtYXJnaW5Cb3R0b206ICcycmVtJyxcclxuICB9LFxyXG59KSlcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==