webpackHotUpdate_N_E("pages/_app",{

/***/ "./firebase/firebase.config.js":
/*!*************************************!*\
  !*** ./firebase/firebase.config.js ***!
  \*************************************/
/*! exports provided: getItem, createItem, editItem, publishItem, deleteItem, getCollection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getItem", function() { return getItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createItem", function() { return createItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "editItem", function() { return editItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "publishItem", function() { return publishItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteItem", function() { return deleteItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCollection", function() { return getCollection; });
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var firebase_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/app */ "./node_modules/firebase/app/dist/index.esm.js");
/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! firebase/firestore */ "./node_modules/firebase/firestore/dist/index.esm.js");
/* harmony import */ var firebase_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! firebase/auth */ "./node_modules/firebase/auth/dist/index.esm.js");
/* harmony import */ var firebase_firebase_storage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! firebase/firebase-storage */ "./node_modules/firebase/firebase-storage.js");
/* harmony import */ var firebase_firebase_storage__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(firebase_firebase_storage__WEBPACK_IMPORTED_MODULE_4__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }





var config = {
  apiKey: "AIzaSyArHS6KZ4FQPQ9_Suwuso-ZGLwV-KO0ws8",
  authDomain: "ceibo-urbano.firebaseapp.com",
  projectId: "ceibo-urbano",
  storageBucket: "ceibo-urbano.appspot.com",
  messagingSenderId: "511642331150",
  appId: "1:511642331150:web:31f6a1b6a11621d18d745f",
  measurementId: "G-RNDGBQMLN2"
};

if (!firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].apps.length) {
  firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].initializeApp(config);
}

var getItem = function getItem(_ref) {
  var collection = _ref.collection,
      id = _ref.id;
  return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection(collection).doc(id).get();
};
var createItem = function createItem(_ref2) {
  var collection = _ref2.collection,
      data = _ref2.data;
  var id = new Date().getTime().toString();
  return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection(collection).doc(id).set(_objectSpread(_objectSpread({}, data), {}, {
    id: id
  }));
};
var editItem = function editItem(_ref3) {
  var collection = _ref3.collection,
      id = _ref3.id,
      data = _ref3.data;
  return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection(collection).doc(id).update(data);
};
var publishItem = function publishItem(_ref4) {
  var collection = _ref4.collection,
      id = _ref4.id,
      publish = _ref4.publish;
  return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection(collection).doc(id).update({
    publish: !publish
  });
};
var deleteItem = function deleteItem(_ref5) {
  var collection = _ref5.collection,
      selectedId = _ref5.selectedId;
  return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection(collection).doc(selectedId.toString())["delete"]();
};
var getCollection = function getCollection(collection) {
  return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection(collection).get();
};
/* harmony default export */ __webpack_exports__["default"] = (firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"]);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImdldEl0ZW0iLCJjb2xsZWN0aW9uIiwiaWQiLCJmaXJlc3RvcmUiLCJkb2MiLCJnZXQiLCJjcmVhdGVJdGVtIiwiZGF0YSIsIkRhdGUiLCJnZXRUaW1lIiwidG9TdHJpbmciLCJzZXQiLCJlZGl0SXRlbSIsInVwZGF0ZSIsInB1Ymxpc2hJdGVtIiwicHVibGlzaCIsImRlbGV0ZUl0ZW0iLCJzZWxlY3RlZElkIiwiZ2V0Q29sbGVjdGlvbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRztBQUNiQyxRQUFNLEVBQUVDLHlDQURLO0FBRWJDLFlBQVUsRUFBRUQsOEJBRkM7QUFHYkUsV0FBUyxFQUFFRixjQUhFO0FBSWJHLGVBQWEsRUFBRUgsMEJBSkY7QUFLYkksbUJBQWlCLEVBQUVKLGNBTE47QUFNYkssT0FBSyxFQUFFTCwyQ0FOTTtBQU9iTSxlQUFhLEVBQUVOLGNBQXlCTTtBQVAzQixDQUFmOztBQVVBLElBQUksQ0FBQ0Msb0RBQVEsQ0FBQ0MsSUFBVCxDQUFjQyxNQUFuQixFQUEyQjtBQUN6QkYsc0RBQVEsQ0FBQ0csYUFBVCxDQUF1QlosTUFBdkI7QUFDRDs7QUFFTSxJQUFNYSxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLE1BQUdDLFVBQUgsUUFBR0EsVUFBSDtBQUFBLE1BQWVDLEVBQWYsUUFBZUEsRUFBZjtBQUFBLFNBQXdCTixvREFBUSxDQUFDTyxTQUFULEdBQXFCRixVQUFyQixDQUFnQ0EsVUFBaEMsRUFBNENHLEdBQTVDLENBQWdERixFQUFoRCxFQUFvREcsR0FBcEQsRUFBeEI7QUFBQSxDQUFoQjtBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhLFFBQTBCO0FBQUEsTUFBdkJMLFVBQXVCLFNBQXZCQSxVQUF1QjtBQUFBLE1BQVhNLElBQVcsU0FBWEEsSUFBVztBQUNsRCxNQUFNTCxFQUFFLEdBQUcsSUFBSU0sSUFBSixHQUFXQyxPQUFYLEdBQXFCQyxRQUFyQixFQUFYO0FBQ0EsU0FBT2Qsb0RBQVEsQ0FBQ08sU0FBVCxHQUFxQkYsVUFBckIsQ0FBZ0NBLFVBQWhDLEVBQTRDRyxHQUE1QyxDQUFnREYsRUFBaEQsRUFBb0RTLEdBQXBELGlDQUE2REosSUFBN0Q7QUFBbUVMLE1BQUUsRUFBRkE7QUFBbkUsS0FBUDtBQUNELENBSE07QUFLQSxJQUFNVSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdYLFVBQUgsU0FBR0EsVUFBSDtBQUFBLE1BQWVDLEVBQWYsU0FBZUEsRUFBZjtBQUFBLE1BQW1CSyxJQUFuQixTQUFtQkEsSUFBbkI7QUFBQSxTQUE4Qlgsb0RBQVEsQ0FBQ08sU0FBVCxHQUFxQkYsVUFBckIsQ0FBZ0NBLFVBQWhDLEVBQTRDRyxHQUE1QyxDQUFnREYsRUFBaEQsRUFBb0RXLE1BQXBELENBQTJETixJQUEzRCxDQUE5QjtBQUFBLENBQWpCO0FBRUEsSUFBTU8sV0FBVyxHQUFHLFNBQWRBLFdBQWM7QUFBQSxNQUFHYixVQUFILFNBQUdBLFVBQUg7QUFBQSxNQUFlQyxFQUFmLFNBQWVBLEVBQWY7QUFBQSxNQUFtQmEsT0FBbkIsU0FBbUJBLE9BQW5CO0FBQUEsU0FBaUNuQixvREFBUSxDQUFDTyxTQUFULEdBQXFCRixVQUFyQixDQUFnQ0EsVUFBaEMsRUFBNENHLEdBQTVDLENBQWdERixFQUFoRCxFQUFvRFcsTUFBcEQsQ0FBMkQ7QUFBRUUsV0FBTyxFQUFFLENBQUNBO0FBQVosR0FBM0QsQ0FBakM7QUFBQSxDQUFwQjtBQUVBLElBQU1DLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR2YsVUFBSCxTQUFHQSxVQUFIO0FBQUEsTUFBZWdCLFVBQWYsU0FBZUEsVUFBZjtBQUFBLFNBQWdDckIsb0RBQVEsQ0FBQ08sU0FBVCxHQUFxQkYsVUFBckIsQ0FBZ0NBLFVBQWhDLEVBQTRDRyxHQUE1QyxDQUFnRGEsVUFBVSxDQUFDUCxRQUFYLEVBQWhELGFBQWhDO0FBQUEsQ0FBbkI7QUFFQSxJQUFNUSxhQUFhLEdBQUcsU0FBaEJBLGFBQWdCLENBQUNqQixVQUFEO0FBQUEsU0FBZ0JMLG9EQUFRLENBQUNPLFNBQVQsR0FBcUJGLFVBQXJCLENBQWdDQSxVQUFoQyxFQUE0Q0ksR0FBNUMsRUFBaEI7QUFBQSxDQUF0QjtBQUVRVCxtSEFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9fYXBwLmQxODg3MDBlOWRiOGI4ZGM0MDRlLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmlyZWJhc2UgZnJvbSAnZmlyZWJhc2UvYXBwJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmVzdG9yZSdcclxuaW1wb3J0ICdmaXJlYmFzZS9hdXRoJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2ZpcmViYXNlLXN0b3JhZ2UnXHJcblxyXG5jb25zdCBjb25maWcgPSB7XHJcbiAgYXBpS2V5OiBwcm9jZXNzLmVudi5hcGlLZXksXHJcbiAgYXV0aERvbWFpbjogcHJvY2Vzcy5lbnYuYXV0aERvbWFpbixcclxuICBwcm9qZWN0SWQ6IHByb2Nlc3MuZW52LnByb2plY3RJZCxcclxuICBzdG9yYWdlQnVja2V0OiBwcm9jZXNzLmVudi5zdG9yYWdlQnVja2V0LFxyXG4gIG1lc3NhZ2luZ1NlbmRlcklkOiBwcm9jZXNzLmVudi5tZXNzYWdpbmdTZW5kZXJJZCxcclxuICBhcHBJZDogcHJvY2Vzcy5lbnYuYXBwSWQsXHJcbiAgbWVhc3VyZW1lbnRJZDogcHJvY2Vzcy5lbnYubWVhc3VyZW1lbnRJZCwgIFxyXG59XHJcblxyXG5pZiAoIWZpcmViYXNlLmFwcHMubGVuZ3RoKSB7XHJcbiAgZmlyZWJhc2UuaW5pdGlhbGl6ZUFwcChjb25maWcpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRJdGVtID0gKHsgY29sbGVjdGlvbiwgaWQgfSkgPT4gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5kb2MoaWQpLmdldCgpXHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlSXRlbSA9ICh7IGNvbGxlY3Rpb24sIGRhdGEgfSkgPT4ge1xyXG4gIGNvbnN0IGlkID0gbmV3IERhdGUoKS5nZXRUaW1lKCkudG9TdHJpbmcoKVxyXG4gIHJldHVybiBmaXJlYmFzZS5maXJlc3RvcmUoKS5jb2xsZWN0aW9uKGNvbGxlY3Rpb24pLmRvYyhpZCkuc2V0KHsgLi4uZGF0YSwgaWQgfSlcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGVkaXRJdGVtID0gKHsgY29sbGVjdGlvbiwgaWQsIGRhdGEgfSkgPT4gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5kb2MoaWQpLnVwZGF0ZShkYXRhKVxyXG5cclxuZXhwb3J0IGNvbnN0IHB1Ymxpc2hJdGVtID0gKHsgY29sbGVjdGlvbiwgaWQsIHB1Ymxpc2ggfSkgPT4gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5kb2MoaWQpLnVwZGF0ZSh7IHB1Ymxpc2g6ICFwdWJsaXNoIH0pXHJcblxyXG5leHBvcnQgY29uc3QgZGVsZXRlSXRlbSA9ICh7IGNvbGxlY3Rpb24sIHNlbGVjdGVkSWQgfSkgPT4gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5kb2Moc2VsZWN0ZWRJZC50b1N0cmluZygpKS5kZWxldGUoKVxyXG5cclxuZXhwb3J0IGNvbnN0IGdldENvbGxlY3Rpb24gPSAoY29sbGVjdGlvbikgPT4gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5nZXQoKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZmlyZWJhc2UiXSwic291cmNlUm9vdCI6IiJ9