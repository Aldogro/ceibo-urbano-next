webpackHotUpdate_N_E("pages/promos/add",{

/***/ "./firebase/firebase.config.js":
/*!*************************************!*\
  !*** ./firebase/firebase.config.js ***!
  \*************************************/
/*! exports provided: publishPromo, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishPromo", function() { return publishPromo; });
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

var publishPromo = function publishPromo(_ref) {
  var id = _ref.id,
      publish = _ref.publish,
      collection = _ref.collection;
  return firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection(collection).doc(id).update({
    publish: !publish
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsInB1Ymxpc2hQcm9tbyIsImlkIiwicHVibGlzaCIsImNvbGxlY3Rpb24iLCJmaXJlc3RvcmUiLCJkb2MiLCJ1cGRhdGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsSUFBTUEsTUFBTSxHQUFHO0FBQ2JDLFFBQU0sRUFBRUMseUNBREs7QUFFYkMsWUFBVSxFQUFFRCw4QkFGQztBQUdiRSxXQUFTLEVBQUVGLGNBSEU7QUFJYkcsZUFBYSxFQUFFSCwwQkFKRjtBQUtiSSxtQkFBaUIsRUFBRUosY0FMTjtBQU1iSyxPQUFLLEVBQUVMLDJDQU5NO0FBT2JNLGVBQWEsRUFBRU4sY0FBeUJNO0FBUDNCLENBQWY7O0FBVUEsSUFBSSxDQUFDQyxvREFBUSxDQUFDQyxJQUFULENBQWNDLE1BQW5CLEVBQTJCO0FBQ3pCRixzREFBUSxDQUFDRyxhQUFULENBQXVCWixNQUF2QjtBQUNEOztBQUVNLElBQU1hLFlBQVksR0FBRyxTQUFmQSxZQUFlO0FBQUEsTUFBR0MsRUFBSCxRQUFHQSxFQUFIO0FBQUEsTUFBT0MsT0FBUCxRQUFPQSxPQUFQO0FBQUEsTUFBZ0JDLFVBQWhCLFFBQWdCQSxVQUFoQjtBQUFBLFNBQWlDUCxvREFBUSxDQUFDUSxTQUFULEdBQXFCRCxVQUFyQixDQUFnQ0EsVUFBaEMsRUFBNENFLEdBQTVDLENBQWdESixFQUFoRCxFQUFvREssTUFBcEQsQ0FBMkQ7QUFBRUosV0FBTyxFQUFFLENBQUNBO0FBQVosR0FBM0QsQ0FBakM7QUFBQSxDQUFyQjtBQUVRTixtSEFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9tb3MvYWRkLmRkOTY1YTkzMDAzYWIyNzQ2NmQyLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmViYXNlLXN0b3JhZ2UnXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5hcGlLZXksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuYXV0aERvbWFpbixcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LnByb2plY3RJZCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5zdG9yYWdlQnVja2V0LFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5tZXNzYWdpbmdTZW5kZXJJZCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuYXBwSWQsXHJcbiAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYubWVhc3VyZW1lbnRJZCwgIFxyXG59XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwdWJsaXNoUHJvbW8gPSAoeyBpZCwgcHVibGlzaCwgY29sbGVjdGlvbiB9KSA9PiBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmRvYyhpZCkudXBkYXRlKHsgcHVibGlzaDogIXB1Ymxpc2ggfSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==