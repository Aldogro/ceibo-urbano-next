webpackHotUpdate_N_E("pages/promos/[id]/edit",{

/***/ "./modules/components/form/FormPromo.js":
/*!**********************************************!*\
  !*** ./modules/components/form/FormPromo.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! material-ui-dropzone */ "./node_modules/material-ui-dropzone/dist/index.es.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../../firebase/firebase.config */ "./firebase/firebase.config.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");




var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\form\\FormPromo.js",
    _this = undefined,
    _s = $RefreshSig$();















var FormPromo = function FormPromo(_ref) {
  _s();

  var _ref$promo = _ref.promo,
      promo = _ref$promo === void 0 ? {} : _ref$promo,
      onSubmit = _ref.onSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      partialPrice = _useState3[0],
      setPartialPrice = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      cols = _useState4[0],
      setCols = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(0),
      discount = _useState5[0],
      setDiscount = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(''),
      picture = _useState6[0],
      setPicture = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      publish = _useState7[0],
      setPublish = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      products = _useState8[0],
      setProducts = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])([]),
      carousel = _useState9[0],
      setCarousel = _useState9[1];

  var _useState10 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      loading = _useState10[0],
      setLoading = _useState10[1];

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"])();

  var handleOnSubmit = function handleOnSubmit(e) {
    e.preventDefault();
    onSubmit({
      name: name,
      price: +price,
      partialPrice: +partialPrice,
      cols: cols,
      discount: +discount,
      picture: picture,
      publish: publish,
      products: products,
      carousel: carousel
    });
  };

  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    if (Object.keys(promo).length !== 0) {
      setName(promo.name);
      setPrice(+promo.price);
      setPartialPrice(+promo.partialPrice);
      setCols(+promo.cols);
      setDiscount(+promo.discount);
      setPicture(promo.picture);
      setPublish(promo.publish);
      setProducts(promo.products);
      setCarousel(promo.carousel);
    }
  }, [promo]);
  Object(react__WEBPACK_IMPORTED_MODULE_3__["useEffect"])(function () {
    getDiscount();
  }, [price, products]);

  var addProduct = function addProduct() {
    var product = [{
      name: 'Nombre',
      price: 0
    }];
    setProducts(products.concat(product));
  };

  var onRemoveProduct = function onRemoveProduct(product) {
    setProducts(products.filter(function (_product) {
      return _product !== product;
    }));
  };

  var onFileChanges = function onFileChanges(files) {
    var isPrimary = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

    if (files.length) {
      var temp = carousel;
      isPrimary ? setPicture('') : null;
      files.forEach(function (file) {
        _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_14__["default"].storage().ref().child('/images').child(file.name).put(file).then(function (snapshot) {
          return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_14__["default"].storage().ref(snapshot.metadata.fullPath).getDownloadURL();
        }).then(function (url) {
          if (isPrimary) {
            setPicture(url);
          } else {
            temp.push(url);
            setCarousel(Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_toConsumableArray__WEBPACK_IMPORTED_MODULE_2__["default"])(carousel));
          }
        });
      });
    }
  };

  var productNameChange = function productNameChange(target, index) {
    var temp = products;
    temp[index].name = target.value;
    setProducts(temp);
  };

  var productPriceChange = function productPriceChange(target, index) {
    var temp = products;
    temp[index].price = +target.value;
    setProducts(temp);
    getDiscount();
  };

  var getDiscount = function getDiscount() {
    var temp = 0;
    products.forEach(function (product) {
      temp += product.price;
    });
    setDiscount(Math.ceil(price * 100 / temp - 100));
  };

  var onRemoveCarouselImage = function onRemoveCarouselImage(image) {
    setCarousel(carousel.filter(function (_image) {
      return _image !== image;
    }));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_3___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      className: classes.root,
      onSubmit: function onSubmit(data) {
        return handleOnSubmit(data);
      },
      noValidate: true,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        container: true,
        spacing: 3,
        cols: 1,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          lg: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_10__["default"], {
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_9__["default"], {
              checked: publish,
              onChange: function onChange(_ref2) {
                var target = _ref2.target;
                return setPublish(target.checked);
              },
              color: "primary"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 128,
              columnNumber: 19
            }, _this),
            label: "Publicar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 125,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          md: 8,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.fullWidth,
            id: "Name",
            label: "Nombre",
            value: name,
            required: true,
            onChange: function onChange(_ref3) {
              var target = _ref3.target;
              return setName(target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 138,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 137,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.fullWidth,
            id: "cols",
            label: "Columnas",
            type: "number",
            value: cols,
            onChange: function onChange(_ref4) {
              var target = _ref4.target;
              return setCols(target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 148,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 147,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.fullWidth,
            id: "discount",
            label: "".concat(discount ? discount : 'Descuento', " % - Autom\xE1tico"),
            disabled: true
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 158,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 157,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
            className: classes.fullWidth,
            id: "Price",
            label: "Precio",
            value: price,
            type: "number",
            onChange: function onChange(_ref5) {
              var target = _ref5.target;
              return setPrice(+target.value);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 166,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 165,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          md: 12,
          className: classes.products,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Typography"], {
            children: "Productos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 176,
            columnNumber: 15
          }, _this), products.map(function (product, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
              className: classes.productContainer,
              container: true,
              spacing: 1,
              cols: 1,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                item: true,
                xs: 12,
                md: 7,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  className: classes.fullWidth,
                  id: "Name",
                  label: product.name || 'Nombre',
                  required: true,
                  onChange: function onChange(_ref6) {
                    var target = _ref6.target;
                    return productNameChange(target, index);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 180,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 179,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                item: true,
                xs: 12,
                md: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  className: classes.fullWidth,
                  id: "Price",
                  label: product.price || 'Precio $',
                  type: "number",
                  onChange: function onChange(_ref7) {
                    var target = _ref7.target;
                    return productPriceChange(target, index);
                  }
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 189,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 19
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
                item: true,
                xs: 12,
                md: 1,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                  className: classes.removeProduct,
                  onClick: function onClick() {
                    return onRemoveProduct(product);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 199,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 198,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 197,
                columnNumber: 19
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 178,
              columnNumber: 17
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: classes.addProduct,
            color: "primary",
            onClick: addProduct,
            children: "Agregar Producto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 204,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 175,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_11__["DropzoneArea"], {
            acceptedFiles: ['image/*'],
            filesLimit: 1,
            maxFileSize: 10000000,
            dropzoneText: "Imagen principal",
            onChange: function onChange(files) {
              return onFileChanges(files, true);
            },
            onDelete: function onDelete() {
              return setPicture('');
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 207,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 206,
          columnNumber: 13
        }, _this), picture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
            className: classes.contain,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              className: classes.fullWidth,
              src: picture,
              alt: "promo image"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 219,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 218,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 217,
          columnNumber: 17
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 17
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          md: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_11__["DropzoneArea"], {
            acceptedFiles: ['image/*'],
            filesLimit: 10,
            maxFileSize: 10000000,
            dropzoneText: "Im\xE1genes para el carrusel",
            onChange: function onChange(files) {
              return onFileChanges(files);
            }
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 229,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 228,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          md: 12,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Typography"], {
            children: "Im\xE1genes del carrusel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 238,
            columnNumber: 15
          }, _this), carousel ? carousel.map(function (image) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: classes.carouselImageContainer,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_12__["default"], {
                className: classes.removeCarouselImage,
                onClick: function onClick() {
                  return onRemoveCarouselImage(image);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_13___default.a, {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 244,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 243,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: classes.carouselImage,
                src: image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 246,
                columnNumber: 23
              }, _this)]
            }, image, true, {
              fileName: _jsxFileName,
              lineNumber: 242,
              columnNumber: 21
            }, _this);
          }) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 237,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 124,
        columnNumber: 11
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
        item: true,
        xs: 12,
        className: classes.actions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: classes.floatRight,
          variant: "contained",
          type: "submit",
          color: "primary",
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 255,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
          className: classes.floatRight,
          variant: "contained",
          color: "secondary",
          onClick: function onClick() {
            return router.push('/promos');
          },
          children: "Cancelar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 263,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 254,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 123,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 122,
    columnNumber: 5
  }, _this);
};

_s(FormPromo, "EUz9fGexhS5x7DJrWRroUqxsSQo=", false, function () {
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_5__["useRouter"]];
});

_c = FormPromo;
/* harmony default export */ __webpack_exports__["default"] = (FormPromo);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  return {
    actions: {
      margin: theme.spacing('20px', 0)
    },
    contain: {
      maxHeight: '250px',
      width: '100%',
      display: 'flex'
    },
    fullWidth: {
      width: '100%',
      maxHeigth: '100%',
      objectFit: 'contain'
    },
    floatRight: {
      minWidth: 120,
      "float": 'right',
      marginLeft: 16
    },
    productContainer: {
      padding: theme.spacing(0, 2),
      '&:nth-child(even)': {
        background: theme.palette.lightGreen.main
      }
    },
    addProduct: {
      marginTop: theme.spacing(2),
      "float": 'right'
    },
    removeProduct: Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])({
      color: theme.palette.error.light,
      "float": 'right',
      paddingRight: 0
    }, theme.breakpoints.up('sm'), {
      paddingRight: 1
    }),
    carouselImageContainer: {
      height: '100px',
      display: 'inline-block',
      position: 'relative'
    },
    carouselImage: {
      padding: theme.spacing(2),
      height: '100px'
    },
    removeCarouselImage: {
      color: theme.palette.error.main,
      position: 'absolute',
      top: 5,
      right: 5
    }
  };
});

var _c;

$RefreshReg$(_c, "FormPromo");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vLmpzIl0sIm5hbWVzIjpbIkZvcm1Qcm9tbyIsInByb21vIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicHJpY2UiLCJzZXRQcmljZSIsInBhcnRpYWxQcmljZSIsInNldFBhcnRpYWxQcmljZSIsImNvbHMiLCJzZXRDb2xzIiwiZGlzY291bnQiLCJzZXREaXNjb3VudCIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2Fyb3VzZWwiLCJzZXRDYXJvdXNlbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZU9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImdldERpc2NvdW50IiwiYWRkUHJvZHVjdCIsInByb2R1Y3QiLCJjb25jYXQiLCJvblJlbW92ZVByb2R1Y3QiLCJmaWx0ZXIiLCJfcHJvZHVjdCIsIm9uRmlsZUNoYW5nZXMiLCJmaWxlcyIsImlzUHJpbWFyeSIsInRlbXAiLCJmb3JFYWNoIiwiZmlsZSIsImFwcCIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsInB1dCIsInRoZW4iLCJzbmFwc2hvdCIsIm1ldGFkYXRhIiwiZnVsbFBhdGgiLCJnZXREb3dubG9hZFVSTCIsInVybCIsInB1c2giLCJwcm9kdWN0TmFtZUNoYW5nZSIsInRhcmdldCIsImluZGV4IiwidmFsdWUiLCJwcm9kdWN0UHJpY2VDaGFuZ2UiLCJNYXRoIiwiY2VpbCIsIm9uUmVtb3ZlQ2Fyb3VzZWxJbWFnZSIsImltYWdlIiwiX2ltYWdlIiwicm9vdCIsImRhdGEiLCJjaGVja2VkIiwiZnVsbFdpZHRoIiwibWFwIiwicHJvZHVjdENvbnRhaW5lciIsInJlbW92ZVByb2R1Y3QiLCJjb250YWluIiwiY2Fyb3VzZWxJbWFnZUNvbnRhaW5lciIsInJlbW92ZUNhcm91c2VsSW1hZ2UiLCJjYXJvdXNlbEltYWdlIiwiYWN0aW9ucyIsImZsb2F0UmlnaHQiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW4iLCJzcGFjaW5nIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwibWF4SGVpZ3RoIiwib2JqZWN0Rml0IiwibWluV2lkdGgiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwibGlnaHRHcmVlbiIsIm1haW4iLCJtYXJnaW5Ub3AiLCJjb2xvciIsImVycm9yIiwibGlnaHQiLCJwYWRkaW5nUmlnaHQiLCJicmVha3BvaW50cyIsInVwIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBOEI7QUFBQTs7QUFBQSx3QkFBM0JDLEtBQTJCO0FBQUEsTUFBM0JBLEtBQTJCLDJCQUFuQixFQUFtQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDdEJDLHNEQUFRLENBQUMsRUFBRCxDQURjO0FBQUEsTUFDdkNDLElBRHVDO0FBQUEsTUFDakNDLE9BRGlDOztBQUFBLG1CQUVwQkYsc0RBQVEsQ0FBQyxDQUFELENBRlk7QUFBQSxNQUV2Q0csS0FGdUM7QUFBQSxNQUVoQ0MsUUFGZ0M7O0FBQUEsbUJBR05KLHNEQUFRLENBQUMsQ0FBRCxDQUhGO0FBQUEsTUFHdkNLLFlBSHVDO0FBQUEsTUFHekJDLGVBSHlCOztBQUFBLG1CQUl0Qk4sc0RBQVEsQ0FBQyxFQUFELENBSmM7QUFBQSxNQUl2Q08sSUFK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QUFjLENBQWQsQ0FERDtBQUVWLGVBQU87QUFGRyxLQXpCMkI7QUE2QnZDVixpQkFBYSxFQUFFO0FBQ2J3QixXQUFLLEVBQUVoQixLQUFLLENBQUNZLE9BQU4sQ0FBY0ssS0FBZCxDQUFvQkMsS0FEaEI7QUFFWCxlQUFPLE9BRkk7QUFHWEMsa0JBQVksRUFBRTtBQUhILE9BSVZuQixLQUFLLENBQUNvQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUpVLEVBSW1CO0FBQzVCRixrQkFBWSxFQUFFO0FBRGMsS0FKbkIsQ0E3QjBCO0FBcUN2Q3pCLDBCQUFzQixFQUFFO0FBQ3RCNEIsWUFBTSxFQUFFLE9BRGM7QUFFdEJqQixhQUFPLEVBQUUsY0FGYTtBQUd0QmtCLGNBQVEsRUFBRTtBQUhZLEtBckNlO0FBMEN2QzNCLGlCQUFhLEVBQUU7QUFDYmMsYUFBTyxFQUFFVixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBREk7QUFFYm9CLFlBQU0sRUFBRTtBQUZLLEtBMUN3QjtBQThDdkMzQix1QkFBbUIsRUFBRTtBQUNuQnFCLFdBQUssRUFBRWhCLEtBQUssQ0FBQ1ksT0FBTixDQUFjSyxLQUFkLENBQW9CSCxJQURSO0FBRW5CUyxjQUFRLEVBQUUsVUFGUztBQUduQkMsU0FBRyxFQUFFLENBSGM7QUFJbkJDLFdBQUssRUFBRTtBQUpZO0FBOUNrQixHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9tb3MvW2lkXS9lZGl0LmE1OWVjZmMxMDI2NWYwZTYyYzA2LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnXHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnXHJcbmltcG9ydCB7IERyb3B6b25lQXJlYSB9IGZyb20gJ21hdGVyaWFsLXVpLWRyb3B6b25lJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGVhcidcclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCBGb3JtUHJvbW8gPSAoeyBwcm9tbyA9IHt9LCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwYXJ0aWFsUHJpY2UsIHNldFBhcnRpYWxQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtjb2xzLCBzZXRDb2xzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkaXNjb3VudCwgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcGljdHVyZSwgc2V0UGljdHVyZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHVibGlzaCwgc2V0UHVibGlzaF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtjYXJvdXNlbCwgc2V0Q2Fyb3VzZWxdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBvblN1Ym1pdCh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlOiArcHJpY2UsXHJcbiAgICAgIHBhcnRpYWxQcmljZTogK3BhcnRpYWxQcmljZSxcclxuICAgICAgY29scyxcclxuICAgICAgZGlzY291bnQ6ICtkaXNjb3VudCxcclxuICAgICAgcGljdHVyZSxcclxuICAgICAgcHVibGlzaCxcclxuICAgICAgcHJvZHVjdHMsXHJcbiAgICAgIGNhcm91c2VsLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvbW8pLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBzZXROYW1lKHByb21vLm5hbWUpXHJcbiAgICAgIHNldFByaWNlKCtwcm9tby5wcmljZSlcclxuICAgICAgc2V0UGFydGlhbFByaWNlKCtwcm9tby5wYXJ0aWFsUHJpY2UpXHJcbiAgICAgIHNldENvbHMoK3Byb21vLmNvbHMpXHJcbiAgICAgIHNldERpc2NvdW50KCtwcm9tby5kaXNjb3VudClcclxuICAgICAgc2V0UGljdHVyZShwcm9tby5waWN0dXJlKVxyXG4gICAgICBzZXRQdWJsaXNoKHByb21vLnB1Ymxpc2gpXHJcbiAgICAgIHNldFByb2R1Y3RzKHByb21vLnByb2R1Y3RzKVxyXG4gICAgICBzZXRDYXJvdXNlbChwcm9tby5jYXJvdXNlbClcclxuICAgIH1cclxuICB9LCBbcHJvbW9dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RGlzY291bnQoKVxyXG4gIH0sIFtwcmljZSwgcHJvZHVjdHNdKVxyXG5cclxuICBjb25zdCBhZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IFt7XHJcbiAgICAgIG5hbWU6ICdOb21icmUnLFxyXG4gICAgICBwcmljZTogMCxcclxuICAgIH1dXHJcbiAgICBzZXRQcm9kdWN0cyhwcm9kdWN0cy5jb25jYXQocHJvZHVjdCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblJlbW92ZVByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKF9wcm9kdWN0ID0+IF9wcm9kdWN0ICE9PSBwcm9kdWN0KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZXMgPSAoZmlsZXMsIGlzUHJpbWFyeSA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBjYXJvdXNlbFxyXG4gICAgICBpc1ByaW1hcnkgPyBzZXRQaWN0dXJlKCcnKSA6IG51bGxcclxuICAgICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICBhcHAuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCcvaW1hZ2VzJykuY2hpbGQoZmlsZS5uYW1lKS5wdXQoZmlsZSlcclxuICAgICAgICAgIC50aGVuKHNuYXBzaG90ID0+IGFwcC5zdG9yYWdlKCkucmVmKHNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoKS5nZXREb3dubG9hZFVSTCgpKVxyXG4gICAgICAgICAgLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICAgIHNldFBpY3R1cmUodXJsKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRlbXAucHVzaCh1cmwpXHJcbiAgICAgICAgICAgICAgc2V0Q2Fyb3VzZWwoWy4uLmNhcm91c2VsXSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2R1Y3ROYW1lQ2hhbmdlID0gKHRhcmdldCwgaW5kZXgpID0+IHtcclxuICAgIGxldCB0ZW1wID0gcHJvZHVjdHNcclxuICAgIHRlbXBbaW5kZXhdLm5hbWUgPSB0YXJnZXQudmFsdWVcclxuICAgIHNldFByb2R1Y3RzKHRlbXApXHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9kdWN0UHJpY2VDaGFuZ2UgPSAodGFyZ2V0LCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSBwcm9kdWN0c1xyXG4gICAgdGVtcFtpbmRleF0ucHJpY2UgPSArdGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRQcm9kdWN0cyh0ZW1wKVxyXG4gICAgZ2V0RGlzY291bnQoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGlzY291bnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9IDBcclxuICAgIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgIHRlbXAgKz0gcHJvZHVjdC5wcmljZVxyXG4gICAgfSlcclxuICAgIHNldERpc2NvdW50KE1hdGguY2VpbCgoKHByaWNlICogMTAwKSAvIHRlbXApIC0gMTAwKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlQ2Fyb3VzZWxJbWFnZSA9IChpbWFnZSkgPT4ge1xyXG4gICAgc2V0Q2Fyb3VzZWwoY2Fyb3VzZWwuZmlsdGVyKF9pbWFnZSA9PiBfaW1hZ2UgIT09IGltYWdlKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3B1Ymxpc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRQdWJsaXNoKHRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQdWJsaWNhclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXROYW1lKHRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cImNvbHNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb2x1bW5hc1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb2xzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRDb2xzKHRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cImRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtgJHtkaXNjb3VudCA/IGRpc2NvdW50IDogJ0Rlc2N1ZW50byd9ICUgLSBBdXRvbcOhdGljb2B9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlByZWNpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXR9KSA9PiBzZXRQcmljZSgrdGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0c30+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+UHJvZHVjdG9zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdENvbnRhaW5lcn0gY29udGFpbmVyIHNwYWNpbmc9ezF9IGNvbHM9ezF9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Byb2R1Y3QubmFtZSB8fCAnTm9tYnJlJ31cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXR9KSA9PiBwcm9kdWN0TmFtZUNoYW5nZSh0YXJnZXQsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Byb2R1Y3QucHJpY2UgfHwgJ1ByZWNpbyAkJ31cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0fSkgPT4gcHJvZHVjdFByaWNlQ2hhbmdlKHRhcmdldCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlUHJvZHVjdH0gb25DbGljaz17KCkgPT4gb25SZW1vdmVQcm9kdWN0KHByb2R1Y3QpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRQcm9kdWN0fSBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXthZGRQcm9kdWN0fT5BZ3JlZ2FyIFByb2R1Y3RvPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmVBcmVhXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlLyonXX1cclxuICAgICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezF9XHJcbiAgICAgICAgICAgICAgICBtYXhGaWxlU2l6ZT17MTAwMDAwMDB9XHJcbiAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9XCJJbWFnZW4gcHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uRmlsZUNoYW5nZXMoZmlsZXMsIHRydWUpfVxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHNldFBpY3R1cmUoJycpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAge3BpY3R1cmVcclxuICAgICAgICAgICAgICA/IDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9tbyBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgOiA8ZGl2IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxMH1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIkltw6FnZW5lcyBwYXJhIGVsIGNhcnJ1c2VsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uRmlsZUNoYW5nZXMoZmlsZXMpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SW3DoWdlbmVzIGRlbCBjYXJydXNlbDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgPyBjYXJvdXNlbC5tYXAoaW1hZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsSW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnJlbW92ZUNhcm91c2VsSW1hZ2V9IG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlQ2Fyb3VzZWxJbWFnZShpbWFnZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbEltYWdlfSBzcmM9e2ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbG9hdFJpZ2h0fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZsb2F0UmlnaHR9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHJvbW9zJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVByb21vXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhY3Rpb25zOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzIwcHgnLCAwKSxcclxuICB9LFxyXG4gIGNvbnRhaW46IHtcclxuICAgIG1heEhlaWdodDogJzI1MHB4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICBmdWxsV2lkdGg6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXhIZWlndGg6ICcxMDAlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxyXG4gIH0sXHJcbiAgZmxvYXRSaWdodDoge1xyXG4gICAgbWluV2lkdGg6IDEyMCxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgbWFyZ2luTGVmdDogMTYsXHJcbiAgfSxcclxuICBwcm9kdWN0Q29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgJyY6bnRoLWNoaWxkKGV2ZW4pJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmxpZ2h0R3JlZW4ubWFpbixcclxuICAgIH0sXHJcbiAgfSxcclxuICBhZGRQcm9kdWN0OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICB9LFxyXG4gIHJlbW92ZVByb2R1Y3Q6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmxpZ2h0LFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdSaWdodDogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJvdXNlbEltYWdlQ29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDBweCcsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWxJbWFnZToge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGhlaWdodDogJzEwMHB4JyxcclxuICB9LFxyXG4gIHJlbW92ZUNhcm91c2VsSW1hZ2U6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogNSxcclxuICAgIHJpZ2h0OiA1LFxyXG4gIH0sXHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=