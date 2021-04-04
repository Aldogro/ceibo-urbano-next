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
      console.log(files);
      var temp = [];
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

  var onRemoveCarouselImage = function onRemoveCarouselImage(index) {
    setProducts(carousel.filter(function (_product) {
      return _product !== product;
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
              lineNumber: 127,
              columnNumber: 19
            }, _this),
            label: "Publicar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 125,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 124,
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
            lineNumber: 137,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 136,
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
            lineNumber: 147,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 146,
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
            lineNumber: 157,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 156,
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
            lineNumber: 165,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 164,
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
            lineNumber: 175,
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
                  lineNumber: 179,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 178,
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
                  lineNumber: 188,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 187,
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
                    lineNumber: 198,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 197,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 19
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 177,
              columnNumber: 17
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: classes.addProduct,
            color: "primary",
            onClick: addProduct,
            children: "Agregar Producto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 203,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 174,
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
            lineNumber: 206,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 205,
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
              lineNumber: 218,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 217,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 216,
          columnNumber: 17
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 225,
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
            lineNumber: 228,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 227,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 12,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
            children: "Im\xE1genes del carrusel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 237,
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
                  lineNumber: 243,
                  columnNumber: 25
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 242,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: classes.carouselImage,
                src: image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 245,
                columnNumber: 23
              }, _this)]
            }, image, true, {
              fileName: _jsxFileName,
              lineNumber: 241,
              columnNumber: 21
            }, _this);
          }) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 236,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 123,
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
          lineNumber: 254,
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
          lineNumber: 262,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 253,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 122,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 121,
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
      width: '100px'
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

/***/ }),

/***/ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/readOnlyError.js":
false

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vLmpzIl0sIm5hbWVzIjpbIkZvcm1Qcm9tbyIsInByb21vIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicHJpY2UiLCJzZXRQcmljZSIsInBhcnRpYWxQcmljZSIsInNldFBhcnRpYWxQcmljZSIsImNvbHMiLCJzZXRDb2xzIiwiZGlzY291bnQiLCJzZXREaXNjb3VudCIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2Fyb3VzZWwiLCJzZXRDYXJvdXNlbCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJnZXREaXNjb3VudCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwiY29uY2F0Iiwib25SZW1vdmVQcm9kdWN0IiwiZmlsdGVyIiwiX3Byb2R1Y3QiLCJvbkZpbGVDaGFuZ2VzIiwiZmlsZXMiLCJpc1ByaW1hcnkiLCJjb25zb2xlIiwibG9nIiwidGVtcCIsImZvckVhY2giLCJmaWxlIiwiYXBwIiwic3RvcmFnZSIsInJlZiIsImNoaWxkIiwicHV0IiwidGhlbiIsInNuYXBzaG90IiwibWV0YWRhdGEiLCJmdWxsUGF0aCIsImdldERvd25sb2FkVVJMIiwidXJsIiwicHVzaCIsInByb2R1Y3ROYW1lQ2hhbmdlIiwidGFyZ2V0IiwiaW5kZXgiLCJ2YWx1ZSIsInByb2R1Y3RQcmljZUNoYW5nZSIsIk1hdGgiLCJjZWlsIiwib25SZW1vdmVDYXJvdXNlbEltYWdlIiwicm9vdCIsImRhdGEiLCJjaGVja2VkIiwiZnVsbFdpZHRoIiwibWFwIiwicHJvZHVjdENvbnRhaW5lciIsInJlbW92ZVByb2R1Y3QiLCJjb250YWluIiwiaW1hZ2UiLCJjYXJvdXNlbEltYWdlQ29udGFpbmVyIiwicmVtb3ZlQ2Fyb3VzZWxJbWFnZSIsImNhcm91c2VsSW1hZ2UiLCJhY3Rpb25zIiwiZmxvYXRSaWdodCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJtYXhIZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXhIZWlndGgiLCJvYmplY3RGaXQiLCJtaW5XaWR0aCIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJsaWdodEdyZWVuIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbG9yIiwiZXJyb3IiLCJsaWdodCIsInBhZGRpbmdSaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBOEI7QUFBQTs7QUFBQSx3QkFBM0JDLEtBQTJCO0FBQUEsTUFBM0JBLEtBQTJCLDJCQUFuQixFQUFtQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDdEJDLHNEQUFRLENBQUMsRUFBRCxDQURjO0FBQUEsTUFDdkNDLElBRHVDO0FBQUEsTUFDakNDLE9BRGlDOztBQUFBLG1CQUVwQkYsc0RBQVEsQ0FBQyxDQUFELENBRlk7QUFBQSxNQUV2Q0csS0FGdUM7QUFBQSxNQUVoQ0MsUUFGZ0M7O0FBQUEsbUJBR05KLHNEQUFRLENBQUMsQ0FBRCxDQUhGO0FBQUEsTUFHdkNLLFlBSHVDO0FBQUEsTUFHekJDLGVBSHlCOztBQUFBLG1CQUl0Qk4sc0RBQVEsQ0FBQyxFQUFELENBSmM7QUFBQSxNQUl2Q08sSUFKdUM7QUFBQSxNQUlqQ0MsT0FK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WCxlQUFPLE9BRkk7QUFHWEMsa0JBQVksRUFBRTtBQUhILE9BSVZuQixLQUFLLENBQUNvQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUpVLEVBSW1CO0FBQzVCRixrQkFBWSxFQUFFO0FBRGMsS0FKbkIsQ0E3QjBCO0FBcUN2Q3pCLDBCQUFzQixFQUFFO0FBQ3RCNEIsWUFBTSxFQUFFLE9BRGM7QUFFdEJqQixhQUFPLEVBQUUsY0FGYTtBQUd0QmtCLGNBQVEsRUFBRTtBQUhZLEtBckNlO0FBMEN2QzNCLGlCQUFhLEVBQUU7QUFDYmMsYUFBTyxFQUFFVixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBREk7QUFFYkUsV0FBSyxFQUFFO0FBRk0sS0ExQ3dCO0FBOEN2Q1QsdUJBQW1CLEVBQUU7QUFDbkJxQixXQUFLLEVBQUVoQixLQUFLLENBQUNZLE9BQU4sQ0FBY0ssS0FBZCxDQUFvQkgsSUFEUjtBQUVuQlMsY0FBUSxFQUFFLFVBRlM7QUFHbkJDLFNBQUcsRUFBRSxDQUhjO0FBSW5CQyxXQUFLLEVBQUU7QUFKWTtBQTlDa0IsR0FBWjtBQUFBLENBQUQsQ0FBNUIiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvcHJvbW9zL1tpZF0vZWRpdC5kYTVkZWY1ZWI0YmFhNmQwODliNi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcydcclxuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbidcclxuaW1wb3J0IEdyaWQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvR3JpZCdcclxuaW1wb3J0IFRleHRGaWVsZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGQnXHJcbmltcG9ydCBTd2l0Y2ggZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3dpdGNoJ1xyXG5pbXBvcnQgRm9ybUNvbnRyb2xMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Gb3JtQ29udHJvbExhYmVsJ1xyXG5pbXBvcnQgeyBEcm9wem9uZUFyZWEgfSBmcm9tICdtYXRlcmlhbC11aS1kcm9wem9uZSdcclxuaW1wb3J0IEljb25CdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvSWNvbkJ1dHRvbidcclxuaW1wb3J0IENsZWFySWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvaWNvbnMvQ2xlYXInXHJcblxyXG5pbXBvcnQgYXBwIGZyb20gJy4uLy4uLy4uL2ZpcmViYXNlL2ZpcmViYXNlLmNvbmZpZydcclxuaW1wb3J0IHsgVHlwb2dyYXBoeSB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlJ1xyXG5cclxuY29uc3QgRm9ybVByb21vID0gKHsgcHJvbW8gPSB7fSwgb25TdWJtaXQgfSkgPT4ge1xyXG4gIGNvbnN0IFtuYW1lLCBzZXROYW1lXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwcmljZSwgc2V0UHJpY2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcGFydGlhbFByaWNlLCBzZXRQYXJ0aWFsUHJpY2VdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbY29scywgc2V0Q29sc10gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbZGlzY291bnQsIHNldERpc2NvdW50XSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3BpY3R1cmUsIHNldFBpY3R1cmVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3B1Ymxpc2gsIHNldFB1Ymxpc2hdID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgY29uc3QgW3Byb2R1Y3RzLCBzZXRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSlcclxuICBjb25zdCBbY2Fyb3VzZWwsIHNldENhcm91c2VsXSA9IHVzZVN0YXRlKFtdKVxyXG4gIFxyXG4gIGNvbnN0IGNsYXNzZXMgPSB1c2VTdHlsZXMoKVxyXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXHJcblxyXG4gIGNvbnN0IGhhbmRsZU9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKVxyXG4gICAgb25TdWJtaXQoe1xyXG4gICAgICBuYW1lLFxyXG4gICAgICBwcmljZTogK3ByaWNlLFxyXG4gICAgICBwYXJ0aWFsUHJpY2U6ICtwYXJ0aWFsUHJpY2UsXHJcbiAgICAgIGNvbHMsXHJcbiAgICAgIGRpc2NvdW50OiArZGlzY291bnQsXHJcbiAgICAgIHBpY3R1cmUsXHJcbiAgICAgIHB1Ymxpc2gsXHJcbiAgICAgIHByb2R1Y3RzLFxyXG4gICAgICBjYXJvdXNlbCxcclxuICAgIH0pXHJcbiAgfVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKE9iamVjdC5rZXlzKHByb21vKS5sZW5ndGggIT09IDApIHtcclxuICAgICAgc2V0TmFtZShwcm9tby5uYW1lKVxyXG4gICAgICBzZXRQcmljZSgrcHJvbW8ucHJpY2UpXHJcbiAgICAgIHNldFBhcnRpYWxQcmljZSgrcHJvbW8ucGFydGlhbFByaWNlKVxyXG4gICAgICBzZXRDb2xzKCtwcm9tby5jb2xzKVxyXG4gICAgICBzZXREaXNjb3VudCgrcHJvbW8uZGlzY291bnQpXHJcbiAgICAgIHNldFBpY3R1cmUocHJvbW8ucGljdHVyZSlcclxuICAgICAgc2V0UHVibGlzaChwcm9tby5wdWJsaXNoKVxyXG4gICAgICBzZXRQcm9kdWN0cyhwcm9tby5wcm9kdWN0cylcclxuICAgICAgc2V0Q2Fyb3VzZWwocHJvbW8uY2Fyb3VzZWwpXHJcbiAgICB9XHJcbiAgfSwgW3Byb21vXSlcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGdldERpc2NvdW50KClcclxuICB9LCBbcHJpY2UsIHByb2R1Y3RzXSlcclxuXHJcbiAgY29uc3QgYWRkUHJvZHVjdCA9ICgpID0+IHtcclxuICAgIGNvbnN0IHByb2R1Y3QgPSBbe1xyXG4gICAgICBuYW1lOiAnTm9tYnJlJyxcclxuICAgICAgcHJpY2U6IDAsXHJcbiAgICB9XVxyXG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMuY29uY2F0KHByb2R1Y3QpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25SZW1vdmVQcm9kdWN0ID0gKHByb2R1Y3QpID0+IHtcclxuICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzLmZpbHRlcihfcHJvZHVjdCA9PiBfcHJvZHVjdCAhPT0gcHJvZHVjdCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvbkZpbGVDaGFuZ2VzID0gKGZpbGVzLCBpc1ByaW1hcnkgPSBmYWxzZSkgPT4ge1xyXG4gICAgaWYgKGZpbGVzLmxlbmd0aCkge1xyXG4gICAgICBjb25zb2xlLmxvZyhmaWxlcylcclxuICAgICAgY29uc3QgdGVtcCA9IFtdXHJcbiAgICAgIGZpbGVzLmZvckVhY2goZmlsZSA9PiB7XHJcbiAgICAgICAgYXBwLnN0b3JhZ2UoKS5yZWYoKS5jaGlsZCgnL2ltYWdlcycpLmNoaWxkKGZpbGUubmFtZSkucHV0KGZpbGUpXHJcbiAgICAgICAgICAudGhlbihzbmFwc2hvdCA9PiBhcHAuc3RvcmFnZSgpLnJlZihzbmFwc2hvdC5tZXRhZGF0YS5mdWxsUGF0aCkuZ2V0RG93bmxvYWRVUkwoKSlcclxuICAgICAgICAgIC50aGVuKHVybCA9PiB7XHJcbiAgICAgICAgICAgIGlmIChpc1ByaW1hcnkpIHtcclxuICAgICAgICAgICAgICBzZXRQaWN0dXJlKHVybClcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0ZW1wLnB1c2godXJsKVxyXG4gICAgICAgICAgICAgIHNldENhcm91c2VsKHRlbXApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9kdWN0TmFtZUNoYW5nZSA9ICh0YXJnZXQsIGluZGV4KSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9IHByb2R1Y3RzXHJcbiAgICB0ZW1wW2luZGV4XS5uYW1lID0gdGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRQcm9kdWN0cyh0ZW1wKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZHVjdFByaWNlQ2hhbmdlID0gKHRhcmdldCwgaW5kZXgpID0+IHtcclxuICAgIGxldCB0ZW1wID0gcHJvZHVjdHNcclxuICAgIHRlbXBbaW5kZXhdLnByaWNlID0gK3RhcmdldC52YWx1ZVxyXG4gICAgc2V0UHJvZHVjdHModGVtcClcclxuICAgIGdldERpc2NvdW50KClcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERpc2NvdW50ID0gKCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSAwXHJcbiAgICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICB0ZW1wICs9IHByb2R1Y3QucHJpY2VcclxuICAgIH0pXHJcbiAgICBzZXREaXNjb3VudChNYXRoLmNlaWwoKChwcmljZSAqIDEwMCkgLyB0ZW1wKSAtIDEwMCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblJlbW92ZUNhcm91c2VsSW1hZ2UgPSAoaW5kZXgpID0+IHtcclxuICAgIHNldFByb2R1Y3RzKGNhcm91c2VsLmZpbHRlcihfcHJvZHVjdCA9PiBfcHJvZHVjdCAhPT0gcHJvZHVjdCkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU9uU3VibWl0KGRhdGEpfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNvbHM9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwdWJsaXNofVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UHVibGlzaCh0YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUHVibGljYXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0TmFtZSh0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb2xzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29sdW1uYXNcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29sc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0Q29scyh0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17YCR7ZGlzY291bnQgPyBkaXNjb3VudCA6ICdEZXNjdWVudG8nfSAlIC0gQXV0b23DoXRpY29gfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQcmVjaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0fSkgPT4gc2V0UHJpY2UoK3RhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdHN9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlByb2R1Y3RvczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RDb250YWluZXJ9IGNvbnRhaW5lciBzcGFjaW5nPXsxfSBjb2xzPXsxfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9kdWN0Lm5hbWUgfHwgJ05vbWJyZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0fSkgPT4gcHJvZHVjdE5hbWVDaGFuZ2UodGFyZ2V0LCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9kdWN0LnByaWNlIHx8ICdQcmVjaW8gJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHByb2R1Y3RQcmljZUNoYW5nZSh0YXJnZXQsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnJlbW92ZVByb2R1Y3R9IG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlUHJvZHVjdChwcm9kdWN0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkUHJvZHVjdH0gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17YWRkUHJvZHVjdH0+QWdyZWdhciBQcm9kdWN0bzwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiSW1hZ2VuIHByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpbGVzKSA9PiBvbkZpbGVDaGFuZ2VzKGZpbGVzLCB0cnVlKX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBzZXRQaWN0dXJlKCcnKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIHtwaWN0dXJlXHJcbiAgICAgICAgICAgICAgPyA8R3JpZCBpdGVtIHhzPXs2fT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNvbnRhaW59PlxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e3BpY3R1cmV9XHJcbiAgICAgICAgICAgICAgICAgICAgYWx0PVwicHJvbW8gaW1hZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgIDogPGRpdiAvPlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MTB9XHJcbiAgICAgICAgICAgICAgICBtYXhGaWxlU2l6ZT17MTAwMDAwMDB9XHJcbiAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9XCJJbcOhZ2VuZXMgcGFyYSBlbCBjYXJydXNlbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpbGVzKSA9PiBvbkZpbGVDaGFuZ2VzKGZpbGVzKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5Pkltw6FnZW5lcyBkZWwgY2FycnVzZWw8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgY2Fyb3VzZWxcclxuICAgICAgICAgICAgICAgID8gY2Fyb3VzZWwubWFwKGltYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW1hZ2V9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbEltYWdlQ29udGFpbmVyfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1vdmVDYXJvdXNlbEltYWdlfSBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZUNhcm91c2VsSW1hZ2UoaW1hZ2UpfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWxJbWFnZX0gc3JjPXtpbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmxvYXRSaWdodH1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbG9hdFJpZ2h0fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb21vcycpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Qcm9tb1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYWN0aW9uczoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCcyMHB4JywgMCksXHJcbiAgfSxcclxuICBjb250YWluOiB7XHJcbiAgICBtYXhIZWlnaHQ6ICcyNTBweCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgZnVsbFdpZHRoOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWF4SGVpZ3RoOiAnMTAwJScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb250YWluJyxcclxuICB9LFxyXG4gIGZsb2F0UmlnaHQ6IHtcclxuICAgIG1pbldpZHRoOiAxMjAsXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIG1hcmdpbkxlZnQ6IDE2LFxyXG4gIH0sXHJcbiAgcHJvZHVjdENvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgICcmOm50aC1jaGlsZChldmVuKSc6IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5saWdodEdyZWVuLm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWRkUHJvZHVjdDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgfSxcclxuICByZW1vdmVQcm9kdWN0OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5saWdodCxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWxJbWFnZUNvbnRhaW5lcjoge1xyXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gICAgZGlzcGxheTogJ2lubGluZS1ibG9jaycsXHJcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcclxuICB9LFxyXG4gIGNhcm91c2VsSW1hZ2U6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICB3aWR0aDogJzEwMHB4JyxcclxuICB9LFxyXG4gIHJlbW92ZUNhcm91c2VsSW1hZ2U6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogNSxcclxuICAgIHJpZ2h0OiA1LFxyXG4gIH0sXHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=