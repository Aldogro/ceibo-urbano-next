webpackHotUpdate_N_E("pages/promos/add",{

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/Grid */ "./node_modules/@material-ui/core/esm/Grid/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/esm/TextField/index.js");
/* harmony import */ var _material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Switch */ "./node_modules/@material-ui/core/esm/Switch/index.js");
/* harmony import */ var _material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/FormControlLabel */ "./node_modules/@material-ui/core/esm/FormControlLabel/index.js");
/* harmony import */ var material_ui_dropzone__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! material-ui-dropzone */ "./node_modules/material-ui-dropzone/dist/index.es.js");
/* harmony import */ var _material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @material-ui/core/IconButton */ "./node_modules/@material-ui/core/esm/IconButton/index.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @material-ui/icons/Clear */ "./node_modules/@material-ui/icons/Clear.js");
/* harmony import */ var _material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../firebase/firebase.config */ "./firebase/firebase.config.js");
/* harmony import */ var _material_ui_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @material-ui/core */ "./node_modules/@material-ui/core/esm/index.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\form\\FormPromo.js",
    _this = undefined,
    _s = $RefreshSig$();















var FormPromo = function FormPromo(_ref) {
  _s();

  var _ref$promo = _ref.promo,
      promo = _ref$promo === void 0 ? {} : _ref$promo,
      onSubmit = _ref.onSubmit;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      name = _useState[0],
      setName = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      price = _useState2[0],
      setPrice = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      partialPrice = _useState3[0],
      setPartialPrice = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      cols = _useState4[0],
      setCols = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      discount = _useState5[0],
      setDiscount = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(''),
      picture = _useState6[0],
      setPicture = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      publish = _useState7[0],
      setPublish = _useState7[1];

  var _useState8 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      products = _useState8[0],
      setProducts = _useState8[1];

  var _useState9 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]),
      carousel = _useState9[0],
      setCarousel = _useState9[1];

  var classes = useStyles();
  var router = Object(next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"])();

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

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
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
        _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_13__["default"].storage().ref().child('/images').child(file.name).put(file).then(function (snapshot) {
          return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_13__["default"].storage().ref(snapshot.metadata.fullPath).getDownloadURL();
        }).then(function (url) {
          if (isPrimary) {
            setPicture(url);
          } else {
            temp.push(url);
            setCarousel(temp);
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

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("form", {
      className: classes.root,
      onSubmit: function onSubmit(data) {
        return handleOnSubmit(data);
      },
      noValidate: true,
      autoComplete: "off",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        container: true,
        spacing: 3,
        cols: 1,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          lg: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_FormControlLabel__WEBPACK_IMPORTED_MODULE_9__["default"], {
            control: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Switch__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 8,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 4,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 12,
          className: classes.products,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
            children: "Productos"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 174,
            columnNumber: 15
          }, _this), products.map(function (product, index) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
              className: classes.productContainer,
              container: true,
              spacing: 1,
              cols: 1,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
                item: true,
                xs: 12,
                md: 7,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
                item: true,
                xs: 12,
                md: 4,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_7__["default"], {
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
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
                item: true,
                xs: 12,
                md: 1,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                  className: classes.removeProduct,
                  onClick: function onClick() {
                    return onRemoveProduct(product);
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
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
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 6,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_10__["DropzoneArea"], {
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
        }, _this), picture ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 12,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(material_ui_dropzone__WEBPACK_IMPORTED_MODULE_10__["DropzoneArea"], {
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
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 12,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
            children: "Im\xE1genes del carrusel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 236,
            columnNumber: 15
          }, _this), carousel ? carousel.map(function (image) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: classes.carouselImageContainer,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_IconButton__WEBPACK_IMPORTED_MODULE_11__["default"], {
                className: classes.removeCarouselImage,
                onClick: function onClick() {
                  return onRemoveCarouselImage(image);
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12___default.a, {}, void 0, false, {
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
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
        item: true,
        xs: 12,
        className: classes.actions,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
          className: classes.floatRight,
          variant: "contained",
          type: "submit",
          color: "primary",
          children: "Guardar"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
  return [useStyles, next_router__WEBPACK_IMPORTED_MODULE_4__["useRouter"]];
});

_c = FormPromo;
/* harmony default export */ __webpack_exports__["default"] = (FormPromo);
var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vLmpzIl0sIm5hbWVzIjpbIkZvcm1Qcm9tbyIsInByb21vIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicHJpY2UiLCJzZXRQcmljZSIsInBhcnRpYWxQcmljZSIsInNldFBhcnRpYWxQcmljZSIsImNvbHMiLCJzZXRDb2xzIiwiZGlzY291bnQiLCJzZXREaXNjb3VudCIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2Fyb3VzZWwiLCJzZXRDYXJvdXNlbCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJnZXREaXNjb3VudCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwiY29uY2F0Iiwib25SZW1vdmVQcm9kdWN0IiwiZmlsdGVyIiwiX3Byb2R1Y3QiLCJvbkZpbGVDaGFuZ2VzIiwiZmlsZXMiLCJpc1ByaW1hcnkiLCJ0ZW1wIiwiZm9yRWFjaCIsImZpbGUiLCJhcHAiLCJzdG9yYWdlIiwicmVmIiwiY2hpbGQiLCJwdXQiLCJ0aGVuIiwic25hcHNob3QiLCJtZXRhZGF0YSIsImZ1bGxQYXRoIiwiZ2V0RG93bmxvYWRVUkwiLCJ1cmwiLCJwdXNoIiwicHJvZHVjdE5hbWVDaGFuZ2UiLCJ0YXJnZXQiLCJpbmRleCIsInZhbHVlIiwicHJvZHVjdFByaWNlQ2hhbmdlIiwiTWF0aCIsImNlaWwiLCJvblJlbW92ZUNhcm91c2VsSW1hZ2UiLCJpbWFnZSIsIl9pbWFnZSIsInJvb3QiLCJkYXRhIiwiY2hlY2tlZCIsImZ1bGxXaWR0aCIsIm1hcCIsInByb2R1Y3RDb250YWluZXIiLCJyZW1vdmVQcm9kdWN0IiwiY29udGFpbiIsImNhcm91c2VsSW1hZ2VDb250YWluZXIiLCJyZW1vdmVDYXJvdXNlbEltYWdlIiwiY2Fyb3VzZWxJbWFnZSIsImFjdGlvbnMiLCJmbG9hdFJpZ2h0IiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luIiwic3BhY2luZyIsIm1heEhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsIm1heEhlaWd0aCIsIm9iamVjdEZpdCIsIm1pbldpZHRoIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwicGFsZXR0ZSIsImxpZ2h0R3JlZW4iLCJtYWluIiwibWFyZ2luVG9wIiwiY29sb3IiLCJlcnJvciIsImxpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiYnJlYWtwb2ludHMiLCJ1cCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE4QjtBQUFBOztBQUFBLHdCQUEzQkMsS0FBMkI7QUFBQSxNQUEzQkEsS0FBMkIsMkJBQW5CLEVBQW1CO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUN0QkMsc0RBQVEsQ0FBQyxFQUFELENBRGM7QUFBQSxNQUN2Q0MsSUFEdUM7QUFBQSxNQUNqQ0MsT0FEaUM7O0FBQUEsbUJBRXBCRixzREFBUSxDQUFDLENBQUQsQ0FGWTtBQUFBLE1BRXZDRyxLQUZ1QztBQUFBLE1BRWhDQyxRQUZnQzs7QUFBQSxtQkFHTkosc0RBQVEsQ0FBQyxDQUFELENBSEY7QUFBQSxNQUd2Q0ssWUFIdUM7QUFBQSxNQUd6QkMsZUFIeUI7O0FBQUEsbUJBSXRCTixzREFBUSxDQUFDLEVBQUQsQ0FKYztBQUFBLE1BSXZDTyxJQUp1QztBQUFBLE1BSWpDQyxPQUppQzs7QUFB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bkIsS0FBSyxDQUFDb0IsV0FBTixDQUFrQkMsRUFBbEIsQ0FBcUIsSUFBckIsQ0FKVSxFQUltQjtBQUM1QkYsa0JBQVksRUFBRTtBQURjLEtBSm5CLENBN0IwQjtBQXFDdkN6QiwwQkFBc0IsRUFBRTtBQUN0QjRCLFlBQU0sRUFBRSxPQURjO0FBRXRCakIsYUFBTyxFQUFFLGNBRmE7QUFHdEJrQixjQUFRLEVBQUU7QUFIWSxLQXJDZTtBQTBDdkMzQixpQkFBYSxFQUFFO0FBQ2JjLGFBQU8sRUFBRVYsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQURJO0FBRWJvQixZQUFNLEVBQUU7QUFGSyxLQTFDd0I7QUE4Q3ZDM0IsdUJBQW1CLEVBQUU7QUFDbkJxQixXQUFLLEVBQUVoQixLQUFLLENBQUNZLE9BQU4sQ0FBY0ssS0FBZCxDQUFvQkgsSUFEUjtBQUVuQlMsY0FBUSxFQUFFLFVBRlM7QUFHbkJDLFNBQUcsRUFBRSxDQUhjO0FBSW5CQyxXQUFLLEVBQUU7QUFKWTtBQTlDa0IsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvbW9zL2FkZC45YTcyY2MxNTQzZmNjNjMyMmMxYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJ1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJ1xyXG5pbXBvcnQgeyBEcm9wem9uZUFyZWEgfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IENsZWFySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXInXHJcblxyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgRm9ybVByb21vID0gKHsgcHJvbW8gPSB7fSwgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcGFydGlhbFByaWNlLCBzZXRQYXJ0aWFsUHJpY2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbY29scywgc2V0Q29sc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZGlzY291bnQsIHNldERpc2NvdW50XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3BpY3R1cmUsIHNldFBpY3R1cmVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3B1Ymxpc2gsIHNldFB1Ymxpc2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbY2Fyb3VzZWwsIHNldENhcm91c2VsXSA9IHVzZVN0YXRlKFtdKVxyXG4gIFxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgb25TdWJtaXQoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZTogK3ByaWNlLFxyXG4gICAgICBwYXJ0aWFsUHJpY2U6ICtwYXJ0aWFsUHJpY2UsXHJcbiAgICAgIGNvbHMsXHJcbiAgICAgIGRpc2NvdW50OiArZGlzY291bnQsXHJcbiAgICAgIHBpY3R1cmUsXHJcbiAgICAgIHB1Ymxpc2gsXHJcbiAgICAgIHByb2R1Y3RzLFxyXG4gICAgICBjYXJvdXNlbCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHByb21vKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgc2V0TmFtZShwcm9tby5uYW1lKVxyXG4gICAgICBzZXRQcmljZSgrcHJvbW8ucHJpY2UpXHJcbiAgICAgIHNldFBhcnRpYWxQcmljZSgrcHJvbW8ucGFydGlhbFByaWNlKVxyXG4gICAgICBzZXRDb2xzKCtwcm9tby5jb2xzKVxyXG4gICAgICBzZXREaXNjb3VudCgrcHJvbW8uZGlzY291bnQpXHJcbiAgICAgIHNldFBpY3R1cmUocHJvbW8ucGljdHVyZSlcclxuICAgICAgc2V0UHVibGlzaChwcm9tby5wdWJsaXNoKVxyXG4gICAgICBzZXRQcm9kdWN0cyhwcm9tby5wcm9kdWN0cylcclxuICAgICAgc2V0Q2Fyb3VzZWwocHJvbW8uY2Fyb3VzZWwpXHJcbiAgICB9XHJcbiAgfSwgW3Byb21vXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERpc2NvdW50KClcclxuICB9LCBbcHJpY2UsIHByb2R1Y3RzXSlcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBbe1xyXG4gICAgICBuYW1lOiAnTm9tYnJlJyxcclxuICAgICAgcHJpY2U6IDAsXHJcbiAgICB9XVxyXG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMuY29uY2F0KHByb2R1Y3QpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25SZW1vdmVQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzLmZpbHRlcihfcHJvZHVjdCA9PiBfcHJvZHVjdCAhPT0gcHJvZHVjdCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZpbGVDaGFuZ2VzID0gKGZpbGVzLCBpc1ByaW1hcnkgPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBjb25zdCB0ZW1wID0gY2Fyb3VzZWxcclxuICAgICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICBhcHAuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCcvaW1hZ2VzJykuY2hpbGQoZmlsZS5uYW1lKS5wdXQoZmlsZSlcclxuICAgICAgICAgIC50aGVuKHNuYXBzaG90ID0+IGFwcC5zdG9yYWdlKCkucmVmKHNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoKS5nZXREb3dubG9hZFVSTCgpKVxyXG4gICAgICAgICAgLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICAgIHNldFBpY3R1cmUodXJsKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRlbXAucHVzaCh1cmwpXHJcbiAgICAgICAgICAgICAgc2V0Q2Fyb3VzZWwodGVtcClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2R1Y3ROYW1lQ2hhbmdlID0gKHRhcmdldCwgaW5kZXgpID0+IHtcclxuICAgIGxldCB0ZW1wID0gcHJvZHVjdHNcclxuICAgIHRlbXBbaW5kZXhdLm5hbWUgPSB0YXJnZXQudmFsdWVcclxuICAgIHNldFByb2R1Y3RzKHRlbXApXHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9kdWN0UHJpY2VDaGFuZ2UgPSAodGFyZ2V0LCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSBwcm9kdWN0c1xyXG4gICAgdGVtcFtpbmRleF0ucHJpY2UgPSArdGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRQcm9kdWN0cyh0ZW1wKVxyXG4gICAgZ2V0RGlzY291bnQoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGlzY291bnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9IDBcclxuICAgIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgIHRlbXAgKz0gcHJvZHVjdC5wcmljZVxyXG4gICAgfSlcclxuICAgIHNldERpc2NvdW50KE1hdGguY2VpbCgoKHByaWNlICogMTAwKSAvIHRlbXApIC0gMTAwKSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlQ2Fyb3VzZWxJbWFnZSA9IChpbWFnZSkgPT4ge1xyXG4gICAgc2V0Q2Fyb3VzZWwoY2Fyb3VzZWwuZmlsdGVyKF9pbWFnZSA9PiBfaW1hZ2UgIT09IGltYWdlKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3B1Ymxpc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRQdWJsaXNoKHRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQdWJsaWNhclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXROYW1lKHRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cImNvbHNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb2x1bW5hc1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb2xzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRDb2xzKHRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cImRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtgJHtkaXNjb3VudCA/IGRpc2NvdW50IDogJ0Rlc2N1ZW50byd9ICUgLSBBdXRvbcOhdGljb2B9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlByZWNpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXR9KSA9PiBzZXRQcmljZSgrdGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0c30+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+UHJvZHVjdG9zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdENvbnRhaW5lcn0gY29udGFpbmVyIHNwYWNpbmc9ezF9IGNvbHM9ezF9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Byb2R1Y3QubmFtZSB8fCAnTm9tYnJlJ31cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXR9KSA9PiBwcm9kdWN0TmFtZUNoYW5nZSh0YXJnZXQsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Byb2R1Y3QucHJpY2UgfHwgJ1ByZWNpbyAkJ31cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0fSkgPT4gcHJvZHVjdFByaWNlQ2hhbmdlKHRhcmdldCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlUHJvZHVjdH0gb25DbGljaz17KCkgPT4gb25SZW1vdmVQcm9kdWN0KHByb2R1Y3QpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRQcm9kdWN0fSBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXthZGRQcm9kdWN0fT5BZ3JlZ2FyIFByb2R1Y3RvPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmVBcmVhXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlLyonXX1cclxuICAgICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezF9XHJcbiAgICAgICAgICAgICAgICBtYXhGaWxlU2l6ZT17MTAwMDAwMDB9XHJcbiAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9XCJJbWFnZW4gcHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uRmlsZUNoYW5nZXMoZmlsZXMsIHRydWUpfVxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHNldFBpY3R1cmUoJycpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAge3BpY3R1cmVcclxuICAgICAgICAgICAgICA/IDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9tbyBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgOiA8ZGl2IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxMH1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIkltw6FnZW5lcyBwYXJhIGVsIGNhcnJ1c2VsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uRmlsZUNoYW5nZXMoZmlsZXMpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SW3DoWdlbmVzIGRlbCBjYXJydXNlbDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgPyBjYXJvdXNlbC5tYXAoaW1hZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsSW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnJlbW92ZUNhcm91c2VsSW1hZ2V9IG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlQ2Fyb3VzZWxJbWFnZShpbWFnZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbEltYWdlfSBzcmM9e2ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbG9hdFJpZ2h0fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZsb2F0UmlnaHR9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHJvbW9zJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVByb21vXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhY3Rpb25zOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzIwcHgnLCAwKSxcclxuICB9LFxyXG4gIGNvbnRhaW46IHtcclxuICAgIG1heEhlaWdodDogJzI1MHB4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICBmdWxsV2lkdGg6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXhIZWlndGg6ICcxMDAlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxyXG4gIH0sXHJcbiAgZmxvYXRSaWdodDoge1xyXG4gICAgbWluV2lkdGg6IDEyMCxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgbWFyZ2luTGVmdDogMTYsXHJcbiAgfSxcclxuICBwcm9kdWN0Q29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgJyY6bnRoLWNoaWxkKGV2ZW4pJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmxpZ2h0R3JlZW4ubWFpbixcclxuICAgIH0sXHJcbiAgfSxcclxuICBhZGRQcm9kdWN0OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICB9LFxyXG4gIHJlbW92ZVByb2R1Y3Q6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmxpZ2h0LFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdSaWdodDogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJvdXNlbEltYWdlQ29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDBweCcsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWxJbWFnZToge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGhlaWdodDogJzEwMHB4JyxcclxuICB9LFxyXG4gIHJlbW92ZUNhcm91c2VsSW1hZ2U6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogNSxcclxuICAgIHJpZ2h0OiA1LFxyXG4gIH0sXHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=