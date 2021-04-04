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
              lineNumber: 123,
              columnNumber: 19
            }, _this),
            label: "Publicar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 121,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 120,
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
            lineNumber: 133,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 132,
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
            lineNumber: 143,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 142,
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
            lineNumber: 153,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 152,
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
            lineNumber: 161,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 160,
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
            lineNumber: 171,
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
                  lineNumber: 175,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 174,
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
                  lineNumber: 184,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 183,
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
                    lineNumber: 194,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 193,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 19
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 173,
              columnNumber: 17
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_5__["default"], {
            className: classes.addProduct,
            color: "primary",
            onClick: addProduct,
            children: "Agregar Producto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 199,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 170,
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
            lineNumber: 202,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 201,
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
              lineNumber: 214,
              columnNumber: 19
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 213,
            columnNumber: 17
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 212,
          columnNumber: 17
        }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 221,
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
            lineNumber: 224,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 223,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_6__["default"], {
          item: true,
          xs: 12,
          md: 12,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
            children: "Im\xE1genes del carrusel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 233,
            columnNumber: 15
          }, _this), carousel ? carousel.map(function (image) {
            return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("div", {
              className: classes.carouselImage,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_icons_Clear__WEBPACK_IMPORTED_MODULE_12___default.a, {
                className: classes.removeCarouselImage
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 238,
                columnNumber: 23
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
                className: classes.carouselImage,
                src: image
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 239,
                columnNumber: 23
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 21
            }, _this);
          }) : null]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 232,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 119,
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
          lineNumber: 248,
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
          lineNumber: 256,
          columnNumber: 13
        }, _this)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 247,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 118,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 117,
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
    carouselImage: {
      padding: theme.spacing(2),
      height: '100px',
      position: 'relative'
    },
    removeCarouselImage: {
      color: theme.palette.error.main,
      position: 'fixed',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vLmpzIl0sIm5hbWVzIjpbIkZvcm1Qcm9tbyIsInByb21vIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicHJpY2UiLCJzZXRQcmljZSIsInBhcnRpYWxQcmljZSIsInNldFBhcnRpYWxQcmljZSIsImNvbHMiLCJzZXRDb2xzIiwiZGlzY291bnQiLCJzZXREaXNjb3VudCIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2Fyb3VzZWwiLCJzZXRDYXJvdXNlbCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJnZXREaXNjb3VudCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwiY29uY2F0Iiwib25SZW1vdmVQcm9kdWN0IiwiZmlsdGVyIiwiX3Byb2R1Y3QiLCJvbkZpbGVDaGFuZ2VzIiwiZmlsZXMiLCJpc1ByaW1hcnkiLCJjb25zb2xlIiwibG9nIiwidGVtcCIsImZvckVhY2giLCJmaWxlIiwiYXBwIiwic3RvcmFnZSIsInJlZiIsImNoaWxkIiwicHV0IiwidGhlbiIsInNuYXBzaG90IiwibWV0YWRhdGEiLCJmdWxsUGF0aCIsImdldERvd25sb2FkVVJMIiwidXJsIiwicHVzaCIsInByb2R1Y3ROYW1lQ2hhbmdlIiwidGFyZ2V0IiwiaW5kZXgiLCJ2YWx1ZSIsInByb2R1Y3RQcmljZUNoYW5nZSIsIk1hdGgiLCJjZWlsIiwicm9vdCIsImRhdGEiLCJjaGVja2VkIiwiZnVsbFdpZHRoIiwibWFwIiwicHJvZHVjdENvbnRhaW5lciIsInJlbW92ZVByb2R1Y3QiLCJjb250YWluIiwiaW1hZ2UiLCJjYXJvdXNlbEltYWdlIiwicmVtb3ZlQ2Fyb3VzZWxJbWFnZSIsImFjdGlvbnMiLCJmbG9hdFJpZ2h0IiwibWFrZVN0eWxlcyIsInRoZW1lIiwibWFyZ2luIiwic3BhY2luZyIsIm1heEhlaWdodCIsIndpZHRoIiwiZGlzcGxheSIsIm1heEhlaWd0aCIsIm9iamVjdEZpdCIsIm1pbldpZHRoIiwibWFyZ2luTGVmdCIsInBhZGRpbmciLCJiYWNrZ3JvdW5kIiwicGFsZXR0ZSIsImxpZ2h0R3JlZW4iLCJtYWluIiwibWFyZ2luVG9wIiwiY29sb3IiLCJlcnJvciIsImxpZ2h0IiwicGFkZGluZ1JpZ2h0IiwiYnJlYWtwb2ludHMiLCJ1cCIsImhlaWdodCIsInBvc2l0aW9uIiwidG9wIiwicmlnaHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTs7QUFFQSxJQUFNQSxTQUFTLEdBQUcsU0FBWkEsU0FBWSxPQUE4QjtBQUFBOztBQUFBLHdCQUEzQkMsS0FBMkI7QUFBQSxNQUEzQkEsS0FBMkIsMkJBQW5CLEVBQW1CO0FBQUEsTUFBZkMsUUFBZSxRQUFmQSxRQUFlOztBQUFBLGtCQUN0QkMsc0RBQVEsQ0FBQyxFQUFELENBRGM7QUFBQSxNQUN2Q0MsSUFEdUM7QUFBQSxNQUNqQ0MsT0FEaUM7O0FBQUEsbUJBRXBCRixzREFBUSxDQUFDLENBQUQsQ0FGWTtBQUFBLE1BRXZDRyxLQUZ1QztBQUFBLE1BRWhDQyxRQUZnQzs7QUFBQSxtQkFHTkosc0RBQVEsQ0FBQyxDQUFELENBSEY7QUFBQSxNQUd2Q0ssWUFIdUM7QUFBQSxNQUd6QkMsZUFIeUI7O0FBQUEsbUJBSXRCTixzREFBUSxDQUFDLEVBQUQsQ0FKYztBQUFBLE1BSXZDTyxJQUp1QztBQUFBLE1BSWpDQyxPQUppQzs7QUFBQSxtQkFLZFIsc0RBQVEsQ0FBQyxDQUFELENBTE07QUFBQSxNQUt2Q1Ms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RSxPQUZTO0FBR25CQyxTQUFHLEVBQUUsQ0FIYztBQUluQkMsV0FBSyxFQUFFO0FBSlk7QUExQ2tCLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb21vcy9baWRdL2VkaXQuNGZiY2IyNzYzZWM4MWE2ZTFhMDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCdcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCdcclxuaW1wb3J0IHsgRHJvcHpvbmVBcmVhIH0gZnJvbSAnbWF0ZXJpYWwtdWktZHJvcHpvbmUnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nXHJcbmltcG9ydCBDbGVhckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyJ1xyXG5cclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IEZvcm1Qcm9tbyA9ICh7IHByb21vID0ge30sIG9uU3VibWl0IH0pID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3BhcnRpYWxQcmljZSwgc2V0UGFydGlhbFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2NvbHMsIHNldENvbHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2Rpc2NvdW50LCBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwaWN0dXJlLCBzZXRQaWN0dXJlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwdWJsaXNoLCBzZXRQdWJsaXNoXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2Nhcm91c2VsLCBzZXRDYXJvdXNlbF0gPSB1c2VTdGF0ZShbXSlcclxuICBcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIG9uU3VibWl0KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2U6ICtwcmljZSxcclxuICAgICAgcGFydGlhbFByaWNlOiArcGFydGlhbFByaWNlLFxyXG4gICAgICBjb2xzLFxyXG4gICAgICBkaXNjb3VudDogK2Rpc2NvdW50LFxyXG4gICAgICBwaWN0dXJlLFxyXG4gICAgICBwdWJsaXNoLFxyXG4gICAgICBwcm9kdWN0cyxcclxuICAgICAgY2Fyb3VzZWwsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9tbykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNldE5hbWUocHJvbW8ubmFtZSlcclxuICAgICAgc2V0UHJpY2UoK3Byb21vLnByaWNlKVxyXG4gICAgICBzZXRQYXJ0aWFsUHJpY2UoK3Byb21vLnBhcnRpYWxQcmljZSlcclxuICAgICAgc2V0Q29scygrcHJvbW8uY29scylcclxuICAgICAgc2V0RGlzY291bnQoK3Byb21vLmRpc2NvdW50KVxyXG4gICAgICBzZXRQaWN0dXJlKHByb21vLnBpY3R1cmUpXHJcbiAgICAgIHNldFB1Ymxpc2gocHJvbW8ucHVibGlzaClcclxuICAgICAgc2V0UHJvZHVjdHMocHJvbW8ucHJvZHVjdHMpXHJcbiAgICAgIHNldENhcm91c2VsKHByb21vLmNhcm91c2VsKVxyXG4gICAgfVxyXG4gIH0sIFtwcm9tb10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREaXNjb3VudCgpXHJcbiAgfSwgW3ByaWNlLCBwcm9kdWN0c10pXHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gW3tcclxuICAgICAgbmFtZTogJ05vbWJyZScsXHJcbiAgICAgIHByaWNlOiAwLFxyXG4gICAgfV1cclxuICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzLmNvbmNhdChwcm9kdWN0KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlUHJvZHVjdCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0cyhwcm9kdWN0cy5maWx0ZXIoX3Byb2R1Y3QgPT4gX3Byb2R1Y3QgIT09IHByb2R1Y3QpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25GaWxlQ2hhbmdlcyA9IChmaWxlcywgaXNQcmltYXJ5ID0gZmFsc2UpID0+IHtcclxuICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgY29uc29sZS5sb2coZmlsZXMpXHJcbiAgICAgIGNvbnN0IHRlbXAgPSBbXVxyXG4gICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgIGFwcC5zdG9yYWdlKCkucmVmKCkuY2hpbGQoJy9pbWFnZXMnKS5jaGlsZChmaWxlLm5hbWUpLnB1dChmaWxlKVxyXG4gICAgICAgICAgLnRoZW4oc25hcHNob3QgPT4gYXBwLnN0b3JhZ2UoKS5yZWYoc25hcHNob3QubWV0YWRhdGEuZnVsbFBhdGgpLmdldERvd25sb2FkVVJMKCkpXHJcbiAgICAgICAgICAudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgc2V0UGljdHVyZSh1cmwpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGVtcC5wdXNoKHVybClcclxuICAgICAgICAgICAgICBzZXRDYXJvdXNlbCh0ZW1wKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZHVjdE5hbWVDaGFuZ2UgPSAodGFyZ2V0LCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSBwcm9kdWN0c1xyXG4gICAgdGVtcFtpbmRleF0ubmFtZSA9IHRhcmdldC52YWx1ZVxyXG4gICAgc2V0UHJvZHVjdHModGVtcClcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RQcmljZUNoYW5nZSA9ICh0YXJnZXQsIGluZGV4KSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9IHByb2R1Y3RzXHJcbiAgICB0ZW1wW2luZGV4XS5wcmljZSA9ICt0YXJnZXQudmFsdWVcclxuICAgIHNldFByb2R1Y3RzKHRlbXApXHJcbiAgICBnZXREaXNjb3VudCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREaXNjb3VudCA9ICgpID0+IHtcclxuICAgIGxldCB0ZW1wID0gMFxyXG4gICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgdGVtcCArPSBwcm9kdWN0LnByaWNlXHJcbiAgICB9KVxyXG4gICAgc2V0RGlzY291bnQoTWF0aC5jZWlsKCgocHJpY2UgKiAxMDApIC8gdGVtcCkgLSAxMDApKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVPblN1Ym1pdChkYXRhKX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjb2xzPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHVibGlzaH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFB1Ymxpc2godGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlB1YmxpY2FyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldE5hbWUodGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiY29sc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbHVtbmFzXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldENvbHModGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2Ake2Rpc2NvdW50ID8gZGlzY291bnQgOiAnRGVzY3VlbnRvJ30gJSAtIEF1dG9tw6F0aWNvYH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJlY2lvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldH0pID0+IHNldFByaWNlKCt0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RzfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Qcm9kdWN0b3M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0Q29udGFpbmVyfSBjb250YWluZXIgc3BhY2luZz17MX0gY29scz17MX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cHJvZHVjdC5uYW1lIHx8ICdOb21icmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHByb2R1Y3ROYW1lQ2hhbmdlKHRhcmdldCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cHJvZHVjdC5wcmljZSB8fCAnUHJlY2lvICQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXR9KSA9PiBwcm9kdWN0UHJpY2VDaGFuZ2UodGFyZ2V0LCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1vdmVQcm9kdWN0fSBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZVByb2R1Y3QocHJvZHVjdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmFkZFByb2R1Y3R9IGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2FkZFByb2R1Y3R9PkFncmVnYXIgUHJvZHVjdG88L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIkltYWdlbiBwcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25GaWxlQ2hhbmdlcyhmaWxlcywgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gc2V0UGljdHVyZSgnJyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7cGljdHVyZVxyXG4gICAgICAgICAgICAgID8gPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWlufT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInByb21vIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA6IDxkaXYgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmVBcmVhXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlLyonXX1cclxuICAgICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiSW3DoWdlbmVzIHBhcmEgZWwgY2FycnVzZWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25GaWxlQ2hhbmdlcyhmaWxlcyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5JbcOhZ2VuZXMgZGVsIGNhcnJ1c2VsPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGNhcm91c2VsXHJcbiAgICAgICAgICAgICAgICA/IGNhcm91c2VsLm1hcChpbWFnZSA9PiAoXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWxJbWFnZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1vdmVDYXJvdXNlbEltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9e2NsYXNzZXMuY2Fyb3VzZWxJbWFnZX0gc3JjPXtpbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDogbnVsbFxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG5cclxuICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMuYWN0aW9uc30+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmxvYXRSaWdodH1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgR3VhcmRhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbG9hdFJpZ2h0fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwic2Vjb25kYXJ5XCJcclxuICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiByb3V0ZXIucHVzaCgnL3Byb21vcycpfVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgQ2FuY2VsYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEZvcm1Qcm9tb1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgYWN0aW9uczoge1xyXG4gICAgbWFyZ2luOiB0aGVtZS5zcGFjaW5nKCcyMHB4JywgMCksXHJcbiAgfSxcclxuICBjb250YWluOiB7XHJcbiAgICBtYXhIZWlnaHQ6ICcyNTBweCcsXHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgZGlzcGxheTogJ2ZsZXgnLFxyXG4gIH0sXHJcbiAgZnVsbFdpZHRoOiB7XHJcbiAgICB3aWR0aDogJzEwMCUnLFxyXG4gICAgbWF4SGVpZ3RoOiAnMTAwJScsXHJcbiAgICBvYmplY3RGaXQ6ICdjb250YWluJyxcclxuICB9LFxyXG4gIGZsb2F0UmlnaHQ6IHtcclxuICAgIG1pbldpZHRoOiAxMjAsXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIG1hcmdpbkxlZnQ6IDE2LFxyXG4gIH0sXHJcbiAgcHJvZHVjdENvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygwLCAyKSxcclxuICAgICcmOm50aC1jaGlsZChldmVuKSc6IHtcclxuICAgICAgYmFja2dyb3VuZDogdGhlbWUucGFsZXR0ZS5saWdodEdyZWVuLm1haW4sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgYWRkUHJvZHVjdDoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgfSxcclxuICByZW1vdmVQcm9kdWN0OiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5saWdodCxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgcGFkZGluZ1JpZ2h0OiAwLFxyXG4gICAgW3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXToge1xyXG4gICAgICBwYWRkaW5nUmlnaHQ6IDEsXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWxJbWFnZToge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgcmVtb3ZlQ2Fyb3VzZWxJbWFnZToge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpbixcclxuICAgIHBvc2l0aW9uOiAnZml4ZWQnLFxyXG4gICAgdG9wOiA1LFxyXG4gICAgcmlnaHQ6IDUsXHJcbiAgfSxcclxufSkpIl0sInNvdXJjZVJvb3QiOiIifQ==