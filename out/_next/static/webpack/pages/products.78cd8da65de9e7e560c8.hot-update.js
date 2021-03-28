webpackHotUpdate_N_E("pages/products",{

/***/ "./firebase/firebase.config.js":
/*!*************************************!*\
  !*** ./firebase/firebase.config.js ***!
  \*************************************/
/*! exports provided: createItem, publishItem, deleteItem, getCollection, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createItem", function() { return createItem; });
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

var createItem = function createItem(_ref) {
  var collection = _ref.collection,
      data = _ref.data;
  var id = new Date().getTime().toString();
  return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection(collection).doc(id).set(_objectSpread(_objectSpread({}, data), {}, {
    id: id
  }));
};
var publishItem = function publishItem(_ref2) {
  var id = _ref2.id,
      publish = _ref2.publish,
      collection = _ref2.collection;
  return firebase_app__WEBPACK_IMPORTED_MODULE_1__["default"].firestore().collection(collection).doc(id).update({
    publish: !publish
  });
};
var deleteItem = function deleteItem(_ref3) {
  var selectedId = _ref3.selectedId,
      collection = _ref3.collection;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnLmpzIl0sIm5hbWVzIjpbImNvbmZpZyIsImFwaUtleSIsInByb2Nlc3MiLCJhdXRoRG9tYWluIiwicHJvamVjdElkIiwic3RvcmFnZUJ1Y2tldCIsIm1lc3NhZ2luZ1NlbmRlcklkIiwiYXBwSWQiLCJtZWFzdXJlbWVudElkIiwiZmlyZWJhc2UiLCJhcHBzIiwibGVuZ3RoIiwiaW5pdGlhbGl6ZUFwcCIsImNyZWF0ZUl0ZW0iLCJjb2xsZWN0aW9uIiwiZGF0YSIsImlkIiwiRGF0ZSIsImdldFRpbWUiLCJ0b1N0cmluZyIsImZpcmVzdG9yZSIsImRvYyIsInNldCIsInB1Ymxpc2hJdGVtIiwicHVibGlzaCIsInVwZGF0ZSIsImRlbGV0ZUl0ZW0iLCJzZWxlY3RlZElkIiwiZ2V0Q29sbGVjdGlvbiIsImdldCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUc7QUFDYkMsUUFBTSxFQUFFQyx5Q0FESztBQUViQyxZQUFVLEVBQUVELDhCQUZDO0FBR2JFLFdBQVMsRUFBRUYsY0FIRTtBQUliRyxlQUFhLEVBQUVILDBCQUpGO0FBS2JJLG1CQUFpQixFQUFFSixjQUxOO0FBTWJLLE9BQUssRUFBRUwsMkNBTk07QUFPYk0sZUFBYSxFQUFFTixjQUF5Qk07QUFQM0IsQ0FBZjs7QUFVQSxJQUFJLENBQUNDLG9EQUFRLENBQUNDLElBQVQsQ0FBY0MsTUFBbkIsRUFBMkI7QUFDekJGLHNEQUFRLENBQUNHLGFBQVQsQ0FBdUJaLE1BQXZCO0FBQ0Q7O0FBRU0sSUFBTWEsVUFBVSxHQUFHLFNBQWJBLFVBQWEsT0FBMEI7QUFBQSxNQUF2QkMsVUFBdUIsUUFBdkJBLFVBQXVCO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ2xELE1BQU1DLEVBQUUsR0FBRyxJQUFJQyxJQUFKLEdBQVdDLE9BQVgsR0FBcUJDLFFBQXJCLEVBQVg7QUFDQSxTQUFPVixvREFBUSxDQUFDVyxTQUFULEdBQXFCTixVQUFyQixDQUFnQ0EsVUFBaEMsRUFBNENPLEdBQTVDLENBQWdETCxFQUFoRCxFQUFvRE0sR0FBcEQsaUNBQTZEUCxJQUE3RDtBQUFtRUMsTUFBRSxFQUFGQTtBQUFuRSxLQUFQO0FBQ0QsQ0FITTtBQUtBLElBQU1PLFdBQVcsR0FBRyxTQUFkQSxXQUFjO0FBQUEsTUFBR1AsRUFBSCxTQUFHQSxFQUFIO0FBQUEsTUFBT1EsT0FBUCxTQUFPQSxPQUFQO0FBQUEsTUFBZ0JWLFVBQWhCLFNBQWdCQSxVQUFoQjtBQUFBLFNBQWlDTCxvREFBUSxDQUFDVyxTQUFULEdBQXFCTixVQUFyQixDQUFnQ0EsVUFBaEMsRUFBNENPLEdBQTVDLENBQWdETCxFQUFoRCxFQUFvRFMsTUFBcEQsQ0FBMkQ7QUFBRUQsV0FBTyxFQUFFLENBQUNBO0FBQVosR0FBM0QsQ0FBakM7QUFBQSxDQUFwQjtBQUVBLElBQU1FLFVBQVUsR0FBRyxTQUFiQSxVQUFhO0FBQUEsTUFBR0MsVUFBSCxTQUFHQSxVQUFIO0FBQUEsTUFBZWIsVUFBZixTQUFlQSxVQUFmO0FBQUEsU0FBZ0NMLG9EQUFRLENBQUNXLFNBQVQsR0FBcUJOLFVBQXJCLENBQWdDQSxVQUFoQyxFQUE0Q08sR0FBNUMsQ0FBZ0RNLFVBQVUsQ0FBQ1IsUUFBWCxFQUFoRCxhQUFoQztBQUFBLENBQW5CO0FBRUEsSUFBTVMsYUFBYSxHQUFHLFNBQWhCQSxhQUFnQixDQUFDZCxVQUFEO0FBQUEsU0FBZ0JMLG9EQUFRLENBQUNXLFNBQVQsR0FBcUJOLFVBQXJCLENBQWdDQSxVQUFoQyxFQUE0Q2UsR0FBNUMsRUFBaEI7QUFBQSxDQUF0QjtBQUVRcEIsbUhBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvZHVjdHMuNzhjZDhkYTY1ZGU5ZTdlNTYwYzguaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBmaXJlYmFzZSBmcm9tICdmaXJlYmFzZS9hcHAnXHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZXN0b3JlJ1xyXG5pbXBvcnQgJ2ZpcmViYXNlL2F1dGgnXHJcbmltcG9ydCAnZmlyZWJhc2UvZmlyZWJhc2Utc3RvcmFnZSdcclxuXHJcbmNvbnN0IGNvbmZpZyA9IHtcclxuICBhcGlLZXk6IHByb2Nlc3MuZW52LmFwaUtleSxcclxuICBhdXRoRG9tYWluOiBwcm9jZXNzLmVudi5hdXRoRG9tYWluLFxyXG4gIHByb2plY3RJZDogcHJvY2Vzcy5lbnYucHJvamVjdElkLFxyXG4gIHN0b3JhZ2VCdWNrZXQ6IHByb2Nlc3MuZW52LnN0b3JhZ2VCdWNrZXQsXHJcbiAgbWVzc2FnaW5nU2VuZGVySWQ6IHByb2Nlc3MuZW52Lm1lc3NhZ2luZ1NlbmRlcklkLFxyXG4gIGFwcElkOiBwcm9jZXNzLmVudi5hcHBJZCxcclxuICBtZWFzdXJlbWVudElkOiBwcm9jZXNzLmVudi5tZWFzdXJlbWVudElkLCAgXHJcbn1cclxuXHJcbmlmICghZmlyZWJhc2UuYXBwcy5sZW5ndGgpIHtcclxuICBmaXJlYmFzZS5pbml0aWFsaXplQXBwKGNvbmZpZylcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUl0ZW0gPSAoeyBjb2xsZWN0aW9uLCBkYXRhIH0pID0+IHtcclxuICBjb25zdCBpZCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpLnRvU3RyaW5nKClcclxuICByZXR1cm4gZmlyZWJhc2UuZmlyZXN0b3JlKCkuY29sbGVjdGlvbihjb2xsZWN0aW9uKS5kb2MoaWQpLnNldCh7IC4uLmRhdGEsIGlkIH0pXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBwdWJsaXNoSXRlbSA9ICh7IGlkLCBwdWJsaXNoLCBjb2xsZWN0aW9uIH0pID0+IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuZG9jKGlkKS51cGRhdGUoeyBwdWJsaXNoOiAhcHVibGlzaCB9KVxyXG5cclxuZXhwb3J0IGNvbnN0IGRlbGV0ZUl0ZW0gPSAoeyBzZWxlY3RlZElkLCBjb2xsZWN0aW9uIH0pID0+IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuZG9jKHNlbGVjdGVkSWQudG9TdHJpbmcoKSkuZGVsZXRlKClcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRDb2xsZWN0aW9uID0gKGNvbGxlY3Rpb24pID0+IGZpcmViYXNlLmZpcmVzdG9yZSgpLmNvbGxlY3Rpb24oY29sbGVjdGlvbikuZ2V0KClcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZpcmViYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==