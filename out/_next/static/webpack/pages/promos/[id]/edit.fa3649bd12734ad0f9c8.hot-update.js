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
              lineNumber: 126,
              columnNumber: 19
            }, _this),
            label: "Publicar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 124,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 123,
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
            lineNumber: 136,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 135,
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
            lineNumber: 146,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
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
            lineNumber: 156,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 155,
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
            lineNumber: 164,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 163,
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
            lineNumber: 174,
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
                  lineNumber: 178,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 177,
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
                  lineNumber: 187,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 186,
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
                    lineNumber: 197,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 196,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 195,
                columnNumber: 19
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 176,
              columnNumber: 17
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: classes.addProduct,
            color: "primary",
            onClick: addProduct,
            children: "Agregar Producto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 202,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 173,
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
            lineNumber: 205,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
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
              lineNumber: 217,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 216,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 215,
          columnNumber: 17
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
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
            lineNumber: 227,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 226,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          md: 12,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Typography"], {
            children: "Im\xE1genes del carrusel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
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
                  lineNumber: 242,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 241,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: classes.carouselImage,
                src: image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 244,
                columnNumber: 23
              }, _this)]
            }, image, true, {
              fileName: _jsxFileName,
              lineNumber: 240,
              columnNumber: 21
            }, _this);
          }) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 235,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 122,
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
          lineNumber: 253,
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
          lineNumber: 261,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 252,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 121,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 120,
    columnNumber: 5
  }, _this);
};

_s(FormPromo, "TQYCPY/ObtDC2q47pyZP6bwLKB0=", false, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vLmpzIl0sIm5hbWVzIjpbIkZvcm1Qcm9tbyIsInByb21vIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicHJpY2UiLCJzZXRQcmljZSIsInBhcnRpYWxQcmljZSIsInNldFBhcnRpYWxQcmljZSIsImNvbHMiLCJzZXRDb2xzIiwiZGlzY291bnQiLCJzZXREaXNjb3VudCIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2Fyb3VzZWwiLCJzZXRDYXJvdXNlbCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJnZXREaXNjb3VudCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwiY29uY2F0Iiwib25SZW1vdmVQcm9kdWN0IiwiZmlsdGVyIiwiX3Byb2R1Y3QiLCJvbkZpbGVDaGFuZ2VzIiwiZmlsZXMiLCJpc1ByaW1hcnkiLCJ0ZW1wIiwiZm9yRWFjaCIsImZpbGUiLCJhcHAiLCJzdG9yYWdlIiwicmVmIiwiY2hpbGQiLCJwdXQiLCJ0aGVuIiwic25hcHNob3QiLCJtZXRhZGF0YSIsImZ1bGxQYXRoIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJwdXNoIiwicHJvZHVjdE5hbWVDaGFuZ2UiLCJ0YXJnZXQiLCJpbmRleCIsInZhbHVlIiwicHJvZHVjdFByaWNlQ2hhbmdlIiwiTWF0aCIsImNlaWwiLCJvblJlbW92ZUNhcm91c2VsSW1hZ2UiLCJpbWFnZSIsIl9pbWFnZSIsInJvb3QiLCJkYXRhIiwiY2hlY2tlZCIsImZ1bGxXaWR0aCIsIm1hcCIsInByb2R1Y3RDb250YWluZXIiLCJyZW1vdmVQcm9kdWN0IiwiY29udGFpbiIsImNhcm91c2VsSW1hZ2VDb250YWluZXIiLCJyZW1vdmVDYXJvdXNlbEltYWdlIiwiY2Fyb3VzZWxJbWFnZSIsImFjdGlvbnMiLCJmbG9hdFJpZ2h0IiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luIiwic3BhY2luZyIsIm1heEhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsIm1heEhlaWd0aCIsIm9iamVjdEZpdCIsIm1pbldpZHRoIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwicGFsZXR0ZSIsImxpZ2h0R3JlZW4iLCJtYWluIiwibWFyZ2luVG9wIiwiY29sb3IiLCJlcnJvciIsImxpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiYnJlYWtwb2ludHMiLCJ1cCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQThCO0FBQUE7O0FBQUEsd0JBQTNCQyxLQUEyQjtBQUFBLE1BQTNCQSxLQUEyQiwyQkFBbkIsRUFBbUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ3RCQyxzREFBUSxDQUFDLEVBQUQsQ0FEYztBQUFBLE1BQ3ZDQyxJQUR1QztBQUFBLE1BQ2pDQyxPQURpQzs7QUFBQSxtQkFFcEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZZO0FBQUEsTUFFdkNHLEtBRnVDO0FBQUEsTUFFaENDLFFBRmdDOztBQUFBLG1CQUdOSixzREFBUSxDQUFDLENBQUQsQ0FIRjtBQUFBLE1BR3ZDSyxZQUh1QztBQUFBLE1BR3pCQyxlQUh5Qjs7QUFBQSxtQkFJdEJOLHNEQUFRLENBQUMsRUFBRCxDQUpjO0FBQUEsTUFJdkNPLElBSnVDO0FBQUEsTUFJakNDLE9BSmlDOztB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QUhILE9BSVZuQixLQUFLLENBQUNvQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUpVLEVBSW1CO0FBQzVCRixrQkFBWSxFQUFFO0FBRGMsS0FKbkIsQ0E3QjBCO0FBcUN2Q3pCLDBCQUFzQixFQUFFO0FBQ3RCNEIsWUFBTSxFQUFFLE9BRGM7QUFFdEJqQixhQUFPLEVBQUUsY0FGYTtBQUd0QmtCLGNBQVEsRUFBRTtBQUhZLEtBckNlO0FBMEN2QzNCLGlCQUFhLEVBQUU7QUFDYmMsYUFBTyxFQUFFVixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBREk7QUFFYm9CLFlBQU0sRUFBRTtBQUZLLEtBMUN3QjtBQThDdkMzQix1QkFBbUIsRUFBRTtBQUNuQnFCLFdBQUssRUFBRWhCLEtBQUssQ0FBQ1ksT0FBTixDQUFjSyxLQUFkLENBQW9CSCxJQURSO0FBRW5CUyxjQUFRLEVBQUUsVUFGUztBQUduQkMsU0FBRyxFQUFFLENBSGM7QUFJbkJDLFdBQUssRUFBRTtBQUpZO0FBOUNrQixHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9tb3MvW2lkXS9lZGl0LmZhMzY0OWJkMTI3MzRhZDBmOWM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnXHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnXHJcbmltcG9ydCB7IERyb3B6b25lQXJlYSB9IGZyb20gJ21hdGVyaWFsLXVpLWRyb3B6b25lJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGVhcidcclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCBGb3JtUHJvbW8gPSAoeyBwcm9tbyA9IHt9LCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwYXJ0aWFsUHJpY2UsIHNldFBhcnRpYWxQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtjb2xzLCBzZXRDb2xzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkaXNjb3VudCwgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcGljdHVyZSwgc2V0UGljdHVyZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHVibGlzaCwgc2V0UHVibGlzaF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtjYXJvdXNlbCwgc2V0Q2Fyb3VzZWxdID0gdXNlU3RhdGUoW10pXHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBvblN1Ym1pdCh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlOiArcHJpY2UsXHJcbiAgICAgIHBhcnRpYWxQcmljZTogK3BhcnRpYWxQcmljZSxcclxuICAgICAgY29scyxcclxuICAgICAgZGlzY291bnQ6ICtkaXNjb3VudCxcclxuICAgICAgcGljdHVyZSxcclxuICAgICAgcHVibGlzaCxcclxuICAgICAgcHJvZHVjdHMsXHJcbiAgICAgIGNhcm91c2VsLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvbW8pLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBzZXROYW1lKHByb21vLm5hbWUpXHJcbiAgICAgIHNldFByaWNlKCtwcm9tby5wcmljZSlcclxuICAgICAgc2V0UGFydGlhbFByaWNlKCtwcm9tby5wYXJ0aWFsUHJpY2UpXHJcbiAgICAgIHNldENvbHMoK3Byb21vLmNvbHMpXHJcbiAgICAgIHNldERpc2NvdW50KCtwcm9tby5kaXNjb3VudClcclxuICAgICAgc2V0UGljdHVyZShwcm9tby5waWN0dXJlKVxyXG4gICAgICBzZXRQdWJsaXNoKHByb21vLnB1Ymxpc2gpXHJcbiAgICAgIHNldFByb2R1Y3RzKHByb21vLnByb2R1Y3RzKVxyXG4gICAgICBzZXRDYXJvdXNlbChwcm9tby5jYXJvdXNlbClcclxuICAgIH1cclxuICB9LCBbcHJvbW9dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RGlzY291bnQoKVxyXG4gIH0sIFtwcmljZSwgcHJvZHVjdHNdKVxyXG5cclxuICBjb25zdCBhZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IFt7XHJcbiAgICAgIG5hbWU6ICdOb21icmUnLFxyXG4gICAgICBwcmljZTogMCxcclxuICAgIH1dXHJcbiAgICBzZXRQcm9kdWN0cyhwcm9kdWN0cy5jb25jYXQocHJvZHVjdCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblJlbW92ZVByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKF9wcm9kdWN0ID0+IF9wcm9kdWN0ICE9PSBwcm9kdWN0KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZXMgPSAoZmlsZXMsIGlzUHJpbWFyeSA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBjYXJvdXNlbFxyXG4gICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgIGFwcC5zdG9yYWdlKCkucmVmKCkuY2hpbGQoJy9pbWFnZXMnKS5jaGlsZChmaWxlLm5hbWUpLnB1dChmaWxlKVxyXG4gICAgICAgICAgLnRoZW4oc25hcHNob3QgPT4gYXBwLnN0b3JhZ2UoKS5yZWYoc25hcHNob3QubWV0YWRhdGEuZnVsbFBhdGgpLmdldERvd25sb2FkVVJMKCkpXHJcbiAgICAgICAgICAudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgc2V0UGljdHVyZSh1cmwpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGVtcC5wdXNoKHVybClcclxuICAgICAgICAgICAgICBzZXRDYXJvdXNlbChbLi4uY2Fyb3VzZWxdKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZHVjdE5hbWVDaGFuZ2UgPSAodGFyZ2V0LCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSBwcm9kdWN0c1xyXG4gICAgdGVtcFtpbmRleF0ubmFtZSA9IHRhcmdldC52YWx1ZVxyXG4gICAgc2V0UHJvZHVjdHModGVtcClcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RQcmljZUNoYW5nZSA9ICh0YXJnZXQsIGluZGV4KSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9IHByb2R1Y3RzXHJcbiAgICB0ZW1wW2luZGV4XS5wcmljZSA9ICt0YXJnZXQudmFsdWVcclxuICAgIHNldFByb2R1Y3RzKHRlbXApXHJcbiAgICBnZXREaXNjb3VudCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREaXNjb3VudCA9ICgpID0+IHtcclxuICAgIGxldCB0ZW1wID0gMFxyXG4gICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgdGVtcCArPSBwcm9kdWN0LnByaWNlXHJcbiAgICB9KVxyXG4gICAgc2V0RGlzY291bnQoTWF0aC5jZWlsKCgocHJpY2UgKiAxMDApIC8gdGVtcCkgLSAxMDApKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25SZW1vdmVDYXJvdXNlbEltYWdlID0gKGltYWdlKSA9PiB7XHJcbiAgICBzZXRDYXJvdXNlbChjYXJvdXNlbC5maWx0ZXIoX2ltYWdlID0+IF9pbWFnZSAhPT0gaW1hZ2UpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVPblN1Ym1pdChkYXRhKX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjb2xzPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHVibGlzaH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFB1Ymxpc2godGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlB1YmxpY2FyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldE5hbWUodGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiY29sc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbHVtbmFzXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldENvbHModGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2Ake2Rpc2NvdW50ID8gZGlzY291bnQgOiAnRGVzY3VlbnRvJ30gJSAtIEF1dG9tw6F0aWNvYH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJlY2lvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldH0pID0+IHNldFByaWNlKCt0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RzfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Qcm9kdWN0b3M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0Q29udGFpbmVyfSBjb250YWluZXIgc3BhY2luZz17MX0gY29scz17MX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cHJvZHVjdC5uYW1lIHx8ICdOb21icmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHByb2R1Y3ROYW1lQ2hhbmdlKHRhcmdldCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cHJvZHVjdC5wcmljZSB8fCAnUHJlY2lvICQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXR9KSA9PiBwcm9kdWN0UHJpY2VDaGFuZ2UodGFyZ2V0LCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1vdmVQcm9kdWN0fSBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZVByb2R1Y3QocHJvZHVjdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmFkZFByb2R1Y3R9IGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2FkZFByb2R1Y3R9PkFncmVnYXIgUHJvZHVjdG88L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIkltYWdlbiBwcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25GaWxlQ2hhbmdlcyhmaWxlcywgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gc2V0UGljdHVyZSgnJyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7cGljdHVyZVxyXG4gICAgICAgICAgICAgID8gPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWlufT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInByb21vIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA6IDxkaXYgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmVBcmVhXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlLyonXX1cclxuICAgICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiSW3DoWdlbmVzIHBhcmEgZWwgY2FycnVzZWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25GaWxlQ2hhbmdlcyhmaWxlcyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5JbcOhZ2VuZXMgZGVsIGNhcnJ1c2VsPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICA/IGNhcm91c2VsLm1hcChpbWFnZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWxJbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlQ2Fyb3VzZWxJbWFnZX0gb25DbGljaz17KCkgPT4gb25SZW1vdmVDYXJvdXNlbEltYWdlKGltYWdlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsSW1hZ2V9IHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZsb2F0UmlnaHR9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmxvYXRSaWdodH1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9tb3MnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtUHJvbW9cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGFjdGlvbnM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnMjBweCcsIDApLFxyXG4gIH0sXHJcbiAgY29udGFpbjoge1xyXG4gICAgbWF4SGVpZ2h0OiAnMjUwcHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1heEhlaWd0aDogJzEwMCUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY29udGFpbicsXHJcbiAgfSxcclxuICBmbG9hdFJpZ2h0OiB7XHJcbiAgICBtaW5XaWR0aDogMTIwLFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAxNixcclxuICB9LFxyXG4gIHByb2R1Y3RDb250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICAnJjpudGgtY2hpbGQoZXZlbiknOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUubGlnaHRHcmVlbi5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFkZFByb2R1Y3Q6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gIH0sXHJcbiAgcmVtb3ZlUHJvZHVjdDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubGlnaHQsXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIHBhZGRpbmdSaWdodDogMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcm91c2VsSW1hZ2VDb250YWluZXI6IHtcclxuICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBjYXJvdXNlbEltYWdlOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gIH0sXHJcbiAgcmVtb3ZlQ2Fyb3VzZWxJbWFnZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiA1LFxyXG4gICAgcmlnaHQ6IDUsXHJcbiAgfSxcclxufSkpIl0sInNvdXJjZVJvb3QiOiIifQ==