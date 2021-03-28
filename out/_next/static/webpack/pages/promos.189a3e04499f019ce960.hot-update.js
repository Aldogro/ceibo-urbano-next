webpackHotUpdate_N_E("pages/promos",{

/***/ "./firebase/firebase.config.js":
/*!*************************************!*\
  !*** ./firebase/firebase.config.js ***!
  \*************************************/
/*! exports provided: publish, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publish", function() { return publish; });
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firebase_storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/firebase-storage */ "./node_modules/firebase/firebase-storage.js");
/* harmony import */ var firebase_firebase_storage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_storage__WEBPACK_IMPORTED_MODULE_3__);




var config = {
  apiKey: "AIzaSyArHS6KZ4FQPQ9_Suwuso-ZGLwV-KO0ws8",
  authDomain: "ceibo-urbano.firebaseapp.com",
  projectId: "ceibo-urbano",
  storageBucket: "ceibo-urbano.appspot.com",
  messagingSenderId: "511642331150",
  appId: "1:511642331150:web:31f6a1b6a11621d18d745f",
  measurementId: "G-RNDGBQMLN2"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].initializeApp(config);
}

var publish = function publish(id, _publish) {
  return firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection('promos').doc(id).update({
    publish: !_publish
  });
};
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"]);

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsInB1Ymxpc2giLCJpZCIsImZpcmVzdG9yZSIsImNvbGxlY3Rpb24iLCJkb2MiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRUMseUNBREs7QUFFYkMsWUFBVSxFQUFFRCw4QkFGQztBQUdiRSxXQUFTLEVBQUVGLGNBSEU7QUFJYkcsZUFBYSxFQUFFSCwwQkFKRjtBQUtiSSxtQkFBaUIsRUFBRUosY0FMTjtBQU1iSyxPQUFLLEVBQUVMLDJDQU5NO0FBT2JNLGVBQWEsRUFBRU4sY0FBeUJNO0FBUDNCLENBQWY7O0FBVUEsSUFBSSxDQUFDQyxvREFBUSxDQUFDQyxJQUFULENBQWNDLE1BQW5CLEVBQTJCO0FBQ3pCRixzREFBUSxDQUFDRyxhQUFULENBQXVCWixNQUF2QjtBQUNEOztBQUVNLElBQU1hLE9BQU8sR0FBRyxpQkFBQ0MsRUFBRCxFQUFLRCxRQUFMLEVBQWlCO0FBQ3RDLFNBQU9KLG9EQUFRLENBQUNNLFNBQVQsR0FBcUJDLFVBQXJCLENBQWdDLFFBQWhDLEVBQTBDQyxHQUExQyxDQUE4Q0gsRUFBOUMsRUFBa0RJLE1BQWxELENBQXlEO0FBQUVMLFdBQU8sRUFBRSxDQUFDQTtBQUFaLEdBQXpELENBQVA7QUFDRCxDQUZNO0FBSVFKLG1IQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb21vcy4xODlhM2UwNDQ5OWYwMTljZTk2MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCdcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCdcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlYmFzZS1zdG9yYWdlJ1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuYXBpS2V5LFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LmF1dGhEb21haW4sXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5wcm9qZWN0SWQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuc3RvcmFnZUJ1Y2tldCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYubWVzc2FnaW5nU2VuZGVySWQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LmFwcElkLFxyXG4gIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lm1lYXN1cmVtZW50SWQsICBcclxufVxyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHVibGlzaCA9IChpZCwgcHVibGlzaCkgPT4ge1xyXG4gIHJldHVybiBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKCdwcm9tb3MnKS5kb2MoaWQpLnVwZGF0ZSh7IHB1Ymxpc2g6ICFwdWJsaXNoIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==