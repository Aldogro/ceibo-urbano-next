webpackHotUpdate_N_E("pages/_app",{

/***/ "./firebase/firebase.config.js":
/*!*************************************!*\
  !*** ./firebase/firebase.config.js ***!
  \*************************************/
/*! exports provided: publishItem, deleteItem, getCollection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishItem", function() { return publishItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return getCollection; });
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

var publishItem = function publishItem(_ref) {
  var id = _ref.id,
      publish = _ref.publish,
      collection = _ref.collection;
  return firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection(collection).doc(id).update({
    publish: !publish
  });
};
var deleteItem = function deleteItem(_ref2) {
  var id = _ref2.id,
      collection = _ref2.collection;
  return firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection(collection).doc(id.toString())["delete"]();
};
var getCollection = function getCollection(collection) {
  return firebase_app__WEBPACK_IMPORTED_MODULE_0__["default"].firestore().collection(collection).get();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsInB1Ymxpc2hJdGVtIiwiaWQiLCJwdWJsaXNoIiwiY29sbGVjdGlvbiIsImZpcmVzdG9yZSIsImRvYyIsInVwZGF0ZSIsImRlbGV0ZUl0ZW0iLCJ0b1N0cmluZyIsImdldENvbGxlY3Rpb24iLCJnZXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUVDLHlDQURLO0FBRWJDLFlBQVUsRUFBRUQsOEJBRkM7QUFHYkUsV0FBUyxFQUFFRixjQUhFO0FBSWJHLGVBQWEsRUFBRUgsMEJBSkY7QUFLYkksbUJBQWlCLEVBQUVKLGNBTE47QUFNYkssT0FBSyxFQUFFTCwyQ0FOTTtBQU9iTSxlQUFhLEVBQUVOLGNBQXlCTTtBQVAzQixDQUFmOztBQVVBLElBQUksQ0FBQ0Msb0RBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFuQixFQUEyQjtBQUN6QkYsc0RBQVEsQ0FBQ0csYUFBVCxDQUF1QlosTUFBdkI7QUFDRDs7QUFFTSxJQUFNYSxXQUFXLEdBQUcsU0FBZEEsV0FBYztBQUFBLE1BQUdDLEVBQUgsUUFBR0EsRUFBSDtBQUFBLE1BQU9DLE9BQVAsUUFBT0EsT0FBUDtBQUFBLE1BQWdCQyxVQUFoQixRQUFnQkEsVUFBaEI7QUFBQSxTQUFpQ1Asb0RBQVEsQ0FBQ1EsU0FBVCxHQUFxQkQsVUFBckIsQ0FBZ0NBLFVBQWhDLEVBQTRDRSxHQUE1QyxDQUFnREosRUFBaEQsRUFBb0RLLE1BQXBELENBQTJEO0FBQUVKLFdBQU8sRUFBRSxDQUFDQTtBQUFaLEdBQTNELENBQWpDO0FBQUEsQ0FBcEI7QUFFQSxJQUFNSyxVQUFVLEdBQUcsU0FBYkEsVUFBYTtBQUFBLE1BQUdOLEVBQUgsU0FBR0EsRUFBSDtBQUFBLE1BQU9FLFVBQVAsU0FBT0EsVUFBUDtBQUFBLFNBQXdCUCxvREFBUSxDQUFDUSxTQUFULEdBQXFCRCxVQUFyQixDQUFnQ0EsVUFBaEMsRUFBNENFLEdBQTVDLENBQWdESixFQUFFLENBQUNPLFFBQUgsRUFBaEQsYUFBeEI7QUFBQSxDQUFuQjtBQUVBLElBQU1DLGFBQWEsR0FBRyxTQUFoQkEsYUFBZ0IsQ0FBQ04sVUFBRDtBQUFBLFNBQWdCUCxvREFBUSxDQUFDUSxTQUFULEdBQXFCRCxVQUFyQixDQUFnQ0EsVUFBaEMsRUFBNENPLEdBQTVDLEVBQWhCO0FBQUEsQ0FBdEI7QUFFUWQsbUhBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvX2FwcC43ZDJiMjk0Zjk0ZGQyYmYzM2I2Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZpcmViYXNlIGZyb20gJ2ZpcmViYXNlL2FwcCdcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlc3RvcmUnXHJcbmltcG9ydCAnZmlyZWJhc2UvYXV0aCdcclxuaW1wb3J0ICdmaXJlYmFzZS9maXJlYmFzZS1zdG9yYWdlJ1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gIGFwaUtleTogcHJvY2Vzcy5lbnYuYXBpS2V5LFxyXG4gIGF1dGhEb21haW46IHByb2Nlc3MuZW52LmF1dGhEb21haW4sXHJcbiAgcHJvamVjdElkOiBwcm9jZXNzLmVudi5wcm9qZWN0SWQsXHJcbiAgc3RvcmFnZUJ1Y2tldDogcHJvY2Vzcy5lbnYuc3RvcmFnZUJ1Y2tldCxcclxuICBtZXNzYWdpbmdTZW5kZXJJZDogcHJvY2Vzcy5lbnYubWVzc2FnaW5nU2VuZGVySWQsXHJcbiAgYXBwSWQ6IHByb2Nlc3MuZW52LmFwcElkLFxyXG4gIG1lYXN1cmVtZW50SWQ6IHByb2Nlc3MuZW52Lm1lYXN1cmVtZW50SWQsICBcclxufVxyXG5cclxuaWYgKCFmaXJlYmFzZS5hcHBzLmxlbmd0aCkge1xyXG4gIGZpcmViYXNlLmluaXRpYWxpemVBcHAoY29uZmlnKVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHVibGlzaEl0ZW0gPSAoeyBpZCwgcHVibGlzaCwgY29sbGVjdGlvbiB9KSA9PiBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmRvYyhpZCkudXBkYXRlKHsgcHVibGlzaDogIXB1Ymxpc2ggfSlcclxuXHJcbmV4cG9ydCBjb25zdCBkZWxldGVJdGVtID0gKHsgaWQsIGNvbGxlY3Rpb24gfSkgPT4gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5kb2MoaWQudG9TdHJpbmcoKSkuZGVsZXRlKClcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb2xsZWN0aW9uID0gKGNvbGxlY3Rpb24pID0+IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuZ2V0KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==