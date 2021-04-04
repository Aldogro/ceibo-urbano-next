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
      files.forEach(function (file) {
        _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_13__["default"].storage().ref().child('/images').child(file.name).put(file).then(function (snapshot) {
          return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_13__["default"].storage().ref(snapshot.metadata.fullPath).getDownloadURL();
        }).then(function (url) {
          if (isPrimary) {
            setPicture(url);
          } else {
            setCarousel(carousel.push(url));
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
              lineNumber: 124,
              columnNumber: 19
            }, _this),
            label: "Publicar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 122,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 121,
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
            lineNumber: 134,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 133,
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
            lineNumber: 144,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 143,
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
            lineNumber: 154,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 153,
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
            lineNumber: 162,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 161,
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
            lineNumber: 172,
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
                  lineNumber: 176,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 175,
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
                  lineNumber: 185,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
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
                    lineNumber: 195,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 194,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 193,
                columnNumber: 19
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 174,
              columnNumber: 17
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: classes.addProduct,
            color: "primary",
            onClick: addProduct,
            children: "Agregar Producto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 200,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 171,
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
            lineNumber: 203,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 202,
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
              lineNumber: 215,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 214,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 213,
          columnNumber: 17
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 222,
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
            lineNumber: 225,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 12,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
            children: "Im\xE1genes del carrusel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
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
                  lineNumber: 240,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: classes.carouselImage,
                src: image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 23
              }, _this)]
            }, image, true, {
              fileName: _jsxFileName,
              lineNumber: 238,
              columnNumber: 21
            }, _this);
          }) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 233,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 120,
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
          lineNumber: 251,
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
          lineNumber: 259,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 250,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 119,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 118,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vLmpzIl0sIm5hbWVzIjpbIkZvcm1Qcm9tbyIsInByb21vIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicHJpY2UiLCJzZXRQcmljZSIsInBhcnRpYWxQcmljZSIsInNldFBhcnRpYWxQcmljZSIsImNvbHMiLCJzZXRDb2xzIiwiZGlzY291bnQiLCJzZXREaXNjb3VudCIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2Fyb3VzZWwiLCJzZXRDYXJvdXNlbCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJnZXREaXNjb3VudCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwiY29uY2F0Iiwib25SZW1vdmVQcm9kdWN0IiwiZmlsdGVyIiwiX3Byb2R1Y3QiLCJvbkZpbGVDaGFuZ2VzIiwiZmlsZXMiLCJpc1ByaW1hcnkiLCJmb3JFYWNoIiwiZmlsZSIsImFwcCIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsInB1dCIsInRoZW4iLCJzbmFwc2hvdCIsIm1ldGFkYXRhIiwiZnVsbFBhdGgiLCJnZXREb3dubG9hZFVSTCIsInVybCIsInB1c2giLCJwcm9kdWN0TmFtZUNoYW5nZSIsInRhcmdldCIsImluZGV4IiwidGVtcCIsInZhbHVlIiwicHJvZHVjdFByaWNlQ2hhbmdlIiwiTWF0aCIsImNlaWwiLCJvblJlbW92ZUNhcm91c2VsSW1hZ2UiLCJpbWFnZSIsIl9pbWFnZSIsInJvb3QiLCJkYXRhIiwiY2hlY2tlZCIsImZ1bGxXaWR0aCIsIm1hcCIsInByb2R1Y3RDb250YWluZXIiLCJyZW1vdmVQcm9kdWN0IiwiY29udGFpbiIsImNhcm91c2VsSW1hZ2VDb250YWluZXIiLCJyZW1vdmVDYXJvdXNlbEltYWdlIiwiY2Fyb3VzZWxJbWFnZSIsImFjdGlvbnMiLCJmbG9hdFJpZ2h0IiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luIiwic3BhY2luZyIsIm1heEhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsIm1heEhlaWd0aCIsIm9iamVjdEZpdCIsIm1pbldpZHRoIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwicGFsZXR0ZSIsImxpZ2h0R3JlZW4iLCJtYWluIiwibWFyZ2luVG9wIiwiY29sb3IiLCJlcnJvciIsImxpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiYnJlYWtwb2ludHMiLCJ1cCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE4QjtBQUFBOztBQUFBLHdCQUEzQkMsS0FBMkI7QUFBQSxNQUEzQkEsS0FBMkIsMkJBQW5CLEVBQW1CO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUN0QkMsc0RBQVEsQ0FBQyxFQUFELENBRGM7QUFBQSxNQUN2Q0MsSUFEdUM7QUFBQSxNQUNqQ0MsT0FEaUM7O0FBQUEsbUJBRXBCRixzREFBUSxDQUFDLENBQUQsQ0FGWTtBQUFBLE1BRXZDRyxLQUZ1QztBQUFBLE1BRWhDQyxRQUZnQzs7QUFBQSxtQkFHTkosc0RBQVEsQ0FBQyxDQUFELENBSEY7QUFBQSxNQUd2Q0ssWUFIdUM7QUFBQSxNQUd6QkMsZUFIeUI7O0FBQUEsbUJBSXRCTixzREFBUSxDQUFDLEVBQUQsQ0FKYztBQUFBLE1BSXZDTyxJQUp1QztBQUFBLE1BSWpDQyxPQUppQzs7QUFB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SUFBckIsQ0FKVSxFQUltQjtBQUM1QkYsa0JBQVksRUFBRTtBQURjLEtBSm5CLENBN0IwQjtBQXFDdkN6QiwwQkFBc0IsRUFBRTtBQUN0QjRCLFlBQU0sRUFBRSxPQURjO0FBRXRCakIsYUFBTyxFQUFFLGNBRmE7QUFHdEJrQixjQUFRLEVBQUU7QUFIWSxLQXJDZTtBQTBDdkMzQixpQkFBYSxFQUFFO0FBQ2JjLGFBQU8sRUFBRVYsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQURJO0FBRWJvQixZQUFNLEVBQUU7QUFGSyxLQTFDd0I7QUE4Q3ZDM0IsdUJBQW1CLEVBQUU7QUFDbkJxQixXQUFLLEVBQUVoQixLQUFLLENBQUNZLE9BQU4sQ0FBY0ssS0FBZCxDQUFvQkgsSUFEUjtBQUVuQlMsY0FBUSxFQUFFLFVBRlM7QUFHbkJDLFNBQUcsRUFBRSxDQUhjO0FBSW5CQyxXQUFLLEVBQUU7QUFKWTtBQTlDa0IsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvbW9zL1tpZF0vZWRpdC4xODRkMGI5NzcxYzJiMTdmOTgxMC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJ1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJ1xyXG5pbXBvcnQgeyBEcm9wem9uZUFyZWEgfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IENsZWFySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXInXHJcblxyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgRm9ybVByb21vID0gKHsgcHJvbW8gPSB7fSwgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcGFydGlhbFByaWNlLCBzZXRQYXJ0aWFsUHJpY2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbY29scywgc2V0Q29sc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZGlzY291bnQsIHNldERpc2NvdW50XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3BpY3R1cmUsIHNldFBpY3R1cmVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3B1Ymxpc2gsIHNldFB1Ymxpc2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbY2Fyb3VzZWwsIHNldENhcm91c2VsXSA9IHVzZVN0YXRlKFtdKVxyXG4gIFxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgb25TdWJtaXQoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZTogK3ByaWNlLFxyXG4gICAgICBwYXJ0aWFsUHJpY2U6ICtwYXJ0aWFsUHJpY2UsXHJcbiAgICAgIGNvbHMsXHJcbiAgICAgIGRpc2NvdW50OiArZGlzY291bnQsXHJcbiAgICAgIHBpY3R1cmUsXHJcbiAgICAgIHB1Ymxpc2gsXHJcbiAgICAgIHByb2R1Y3RzLFxyXG4gICAgICBjYXJvdXNlbCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHByb21vKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgc2V0TmFtZShwcm9tby5uYW1lKVxyXG4gICAgICBzZXRQcmljZSgrcHJvbW8ucHJpY2UpXHJcbiAgICAgIHNldFBhcnRpYWxQcmljZSgrcHJvbW8ucGFydGlhbFByaWNlKVxyXG4gICAgICBzZXRDb2xzKCtwcm9tby5jb2xzKVxyXG4gICAgICBzZXREaXNjb3VudCgrcHJvbW8uZGlzY291bnQpXHJcbiAgICAgIHNldFBpY3R1cmUocHJvbW8ucGljdHVyZSlcclxuICAgICAgc2V0UHVibGlzaChwcm9tby5wdWJsaXNoKVxyXG4gICAgICBzZXRQcm9kdWN0cyhwcm9tby5wcm9kdWN0cylcclxuICAgICAgc2V0Q2Fyb3VzZWwocHJvbW8uY2Fyb3VzZWwpXHJcbiAgICB9XHJcbiAgfSwgW3Byb21vXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERpc2NvdW50KClcclxuICB9LCBbcHJpY2UsIHByb2R1Y3RzXSlcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBbe1xyXG4gICAgICBuYW1lOiAnTm9tYnJlJyxcclxuICAgICAgcHJpY2U6IDAsXHJcbiAgICB9XVxyXG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMuY29uY2F0KHByb2R1Y3QpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25SZW1vdmVQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzLmZpbHRlcihfcHJvZHVjdCA9PiBfcHJvZHVjdCAhPT0gcHJvZHVjdCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZpbGVDaGFuZ2VzID0gKGZpbGVzLCBpc1ByaW1hcnkgPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgIGFwcC5zdG9yYWdlKCkucmVmKCkuY2hpbGQoJy9pbWFnZXMnKS5jaGlsZChmaWxlLm5hbWUpLnB1dChmaWxlKVxyXG4gICAgICAgICAgLnRoZW4oc25hcHNob3QgPT4gYXBwLnN0b3JhZ2UoKS5yZWYoc25hcHNob3QubWV0YWRhdGEuZnVsbFBhdGgpLmdldERvd25sb2FkVVJMKCkpXHJcbiAgICAgICAgICAudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgc2V0UGljdHVyZSh1cmwpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgc2V0Q2Fyb3VzZWwoY2Fyb3VzZWwucHVzaCh1cmwpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZHVjdE5hbWVDaGFuZ2UgPSAodGFyZ2V0LCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSBwcm9kdWN0c1xyXG4gICAgdGVtcFtpbmRleF0ubmFtZSA9IHRhcmdldC52YWx1ZVxyXG4gICAgc2V0UHJvZHVjdHModGVtcClcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RQcmljZUNoYW5nZSA9ICh0YXJnZXQsIGluZGV4KSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9IHByb2R1Y3RzXHJcbiAgICB0ZW1wW2luZGV4XS5wcmljZSA9ICt0YXJnZXQudmFsdWVcclxuICAgIHNldFByb2R1Y3RzKHRlbXApXHJcbiAgICBnZXREaXNjb3VudCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREaXNjb3VudCA9ICgpID0+IHtcclxuICAgIGxldCB0ZW1wID0gMFxyXG4gICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgdGVtcCArPSBwcm9kdWN0LnByaWNlXHJcbiAgICB9KVxyXG4gICAgc2V0RGlzY291bnQoTWF0aC5jZWlsKCgocHJpY2UgKiAxMDApIC8gdGVtcCkgLSAxMDApKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25SZW1vdmVDYXJvdXNlbEltYWdlID0gKGltYWdlKSA9PiB7XHJcbiAgICBzZXRDYXJvdXNlbChjYXJvdXNlbC5maWx0ZXIoX2ltYWdlID0+IF9pbWFnZSAhPT0gaW1hZ2UpKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVPblN1Ym1pdChkYXRhKX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjb2xzPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHVibGlzaH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFB1Ymxpc2godGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlB1YmxpY2FyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldE5hbWUodGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiY29sc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbHVtbmFzXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldENvbHModGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2Ake2Rpc2NvdW50ID8gZGlzY291bnQgOiAnRGVzY3VlbnRvJ30gJSAtIEF1dG9tw6F0aWNvYH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJlY2lvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldH0pID0+IHNldFByaWNlKCt0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RzfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Qcm9kdWN0b3M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0Q29udGFpbmVyfSBjb250YWluZXIgc3BhY2luZz17MX0gY29scz17MX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cHJvZHVjdC5uYW1lIHx8ICdOb21icmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHByb2R1Y3ROYW1lQ2hhbmdlKHRhcmdldCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cHJvZHVjdC5wcmljZSB8fCAnUHJlY2lvICQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXR9KSA9PiBwcm9kdWN0UHJpY2VDaGFuZ2UodGFyZ2V0LCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1vdmVQcm9kdWN0fSBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZVByb2R1Y3QocHJvZHVjdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmFkZFByb2R1Y3R9IGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2FkZFByb2R1Y3R9PkFncmVnYXIgUHJvZHVjdG88L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIkltYWdlbiBwcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25GaWxlQ2hhbmdlcyhmaWxlcywgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gc2V0UGljdHVyZSgnJyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7cGljdHVyZVxyXG4gICAgICAgICAgICAgID8gPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWlufT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInByb21vIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA6IDxkaXYgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmVBcmVhXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlLyonXX1cclxuICAgICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiSW3DoWdlbmVzIHBhcmEgZWwgY2FycnVzZWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25GaWxlQ2hhbmdlcyhmaWxlcyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5JbcOhZ2VuZXMgZGVsIGNhcnJ1c2VsPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICA/IGNhcm91c2VsLm1hcChpbWFnZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBrZXk9e2ltYWdlfSBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWxJbWFnZUNvbnRhaW5lcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlQ2Fyb3VzZWxJbWFnZX0gb25DbGljaz17KCkgPT4gb25SZW1vdmVDYXJvdXNlbEltYWdlKGltYWdlKX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsSW1hZ2V9IHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZsb2F0UmlnaHR9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmxvYXRSaWdodH1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9tb3MnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtUHJvbW9cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGFjdGlvbnM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnMjBweCcsIDApLFxyXG4gIH0sXHJcbiAgY29udGFpbjoge1xyXG4gICAgbWF4SGVpZ2h0OiAnMjUwcHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1heEhlaWd0aDogJzEwMCUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY29udGFpbicsXHJcbiAgfSxcclxuICBmbG9hdFJpZ2h0OiB7XHJcbiAgICBtaW5XaWR0aDogMTIwLFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAxNixcclxuICB9LFxyXG4gIHByb2R1Y3RDb250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICAnJjpudGgtY2hpbGQoZXZlbiknOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUubGlnaHRHcmVlbi5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFkZFByb2R1Y3Q6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gIH0sXHJcbiAgcmVtb3ZlUHJvZHVjdDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubGlnaHQsXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIHBhZGRpbmdSaWdodDogMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcm91c2VsSW1hZ2VDb250YWluZXI6IHtcclxuICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBjYXJvdXNlbEltYWdlOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gIH0sXHJcbiAgcmVtb3ZlQ2Fyb3VzZWxJbWFnZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxyXG4gICAgdG9wOiA1LFxyXG4gICAgcmlnaHQ6IDUsXHJcbiAgfSxcclxufSkpIl0sInNvdXJjZVJvb3QiOiIifQ==