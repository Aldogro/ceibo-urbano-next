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
              className: classes.carouselImageContainer,
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

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vLmpzIl0sIm5hbWVzIjpbIkZvcm1Qcm9tbyIsInByb21vIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicHJpY2UiLCJzZXRQcmljZSIsInBhcnRpYWxQcmljZSIsInNldFBhcnRpYWxQcmljZSIsImNvbHMiLCJzZXRDb2xzIiwiZGlzY291bnQiLCJzZXREaXNjb3VudCIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2Fyb3VzZWwiLCJzZXRDYXJvdXNlbCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJnZXREaXNjb3VudCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwiY29uY2F0Iiwib25SZW1vdmVQcm9kdWN0IiwiZmlsdGVyIiwiX3Byb2R1Y3QiLCJvbkZpbGVDaGFuZ2VzIiwiZmlsZXMiLCJpc1ByaW1hcnkiLCJjb25zb2xlIiwibG9nIiwidGVtcCIsImZvckVhY2giLCJmaWxlIiwiYXBwIiwic3RvcmFnZSIsInJlZiIsImNoaWxkIiwicHV0IiwidGhlbiIsInNuYXBzaG90IiwibWV0YWRhdGEiLCJmdWxsUGF0aCIsImdldERvd25sb2FkVVJMIiwidXJsIiwicHVzaCIsInByb2R1Y3ROYW1lQ2hhbmdlIiwidGFyZ2V0IiwiaW5kZXgiLCJ2YWx1ZSIsInByb2R1Y3RQcmljZUNoYW5nZSIsIk1hdGgiLCJjZWlsIiwicm9vdCIsImRhdGEiLCJjaGVja2VkIiwiZnVsbFdpZHRoIiwibWFwIiwicHJvZHVjdENvbnRhaW5lciIsInJlbW92ZVByb2R1Y3QiLCJjb250YWluIiwiaW1hZ2UiLCJjYXJvdXNlbEltYWdlQ29udGFpbmVyIiwicmVtb3ZlQ2Fyb3VzZWxJbWFnZSIsImNhcm91c2VsSW1hZ2UiLCJhY3Rpb25zIiwiZmxvYXRSaWdodCIsIm1ha2VTdHlsZXMiLCJ0aGVtZSIsIm1hcmdpbiIsInNwYWNpbmciLCJtYXhIZWlnaHQiLCJ3aWR0aCIsImRpc3BsYXkiLCJtYXhIZWlndGgiLCJvYmplY3RGaXQiLCJtaW5XaWR0aCIsIm1hcmdpbkxlZnQiLCJwYWRkaW5nIiwiYmFja2dyb3VuZCIsInBhbGV0dGUiLCJsaWdodEdyZWVuIiwibWFpbiIsIm1hcmdpblRvcCIsImNvbG9yIiwiZXJyb3IiLCJsaWdodCIsInBhZGRpbmdSaWdodCIsImJyZWFrcG9pbnRzIiwidXAiLCJoZWlnaHQiLCJwb3NpdGlvbiIsInRvcCIsInJpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBOEI7QUFBQTs7QUFBQSx3QkFBM0JDLEtBQTJCO0FBQUEsTUFBM0JBLEtBQTJCLDJCQUFuQixFQUFtQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDdEJDLHNEQUFRLENBQUMsRUFBRCxDQURjO0FBQUEsTUFDdkNDLElBRHVDO0FBQUEsTUFDakNDLE9BRGlDOztBQUFBLG1CQUVwQkYsc0RBQVEsQ0FBQyxDQUFELENBRlk7QUFBQSxNQUV2Q0csS0FGdUM7QUFBQSxNQUVoQ0MsUUFGZ0M7O0FBQUEsbUJBR05KLHNEQUFRLENBQUMsQ0FBRCxDQUhGO0FBQUEsTUFHdkNLLFlBSHVDO0FBQUEsTUFHekJDLGVBSHlCOztBQUFBLG1CQUl0Qk4sc0RBQVEsQ0FBQyxFQUFELENBSmM7QUFBQSxNQUl2Q08sSUFKdUM7QUFBQSxNQUlqQ0MsT0FKaUM7O0FBQUEsbUJBS2RSLHNEQUFRLENB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QTFDd0I7QUE4Q3ZDVCx1QkFBbUIsRUFBRTtBQUNuQnFCLFdBQUssRUFBRWhCLEtBQUssQ0FBQ1ksT0FBTixDQUFjSyxLQUFkLENBQW9CSCxJQURSO0FBRW5CUyxjQUFRLEVBQUUsVUFGUztBQUduQkMsU0FBRyxFQUFFLENBSGM7QUFJbkJDLFdBQUssRUFBRTtBQUpZO0FBOUNrQixHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9tb3MvW2lkXS9lZGl0LmUyMGUwMzFhYzVjZGU4N2I4MzY3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnXHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnXHJcbmltcG9ydCB7IERyb3B6b25lQXJlYSB9IGZyb20gJ21hdGVyaWFsLXVpLWRyb3B6b25lJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGVhcidcclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCBGb3JtUHJvbW8gPSAoeyBwcm9tbyA9IHt9LCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwYXJ0aWFsUHJpY2UsIHNldFBhcnRpYWxQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtjb2xzLCBzZXRDb2xzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkaXNjb3VudCwgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcGljdHVyZSwgc2V0UGljdHVyZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHVibGlzaCwgc2V0UHVibGlzaF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtjYXJvdXNlbCwgc2V0Q2Fyb3VzZWxdID0gdXNlU3RhdGUoW10pXHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBvblN1Ym1pdCh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlOiArcHJpY2UsXHJcbiAgICAgIHBhcnRpYWxQcmljZTogK3BhcnRpYWxQcmljZSxcclxuICAgICAgY29scyxcclxuICAgICAgZGlzY291bnQ6ICtkaXNjb3VudCxcclxuICAgICAgcGljdHVyZSxcclxuICAgICAgcHVibGlzaCxcclxuICAgICAgcHJvZHVjdHMsXHJcbiAgICAgIGNhcm91c2VsLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvbW8pLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBzZXROYW1lKHByb21vLm5hbWUpXHJcbiAgICAgIHNldFByaWNlKCtwcm9tby5wcmljZSlcclxuICAgICAgc2V0UGFydGlhbFByaWNlKCtwcm9tby5wYXJ0aWFsUHJpY2UpXHJcbiAgICAgIHNldENvbHMoK3Byb21vLmNvbHMpXHJcbiAgICAgIHNldERpc2NvdW50KCtwcm9tby5kaXNjb3VudClcclxuICAgICAgc2V0UGljdHVyZShwcm9tby5waWN0dXJlKVxyXG4gICAgICBzZXRQdWJsaXNoKHByb21vLnB1Ymxpc2gpXHJcbiAgICAgIHNldFByb2R1Y3RzKHByb21vLnByb2R1Y3RzKVxyXG4gICAgICBzZXRDYXJvdXNlbChwcm9tby5jYXJvdXNlbClcclxuICAgIH1cclxuICB9LCBbcHJvbW9dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RGlzY291bnQoKVxyXG4gIH0sIFtwcmljZSwgcHJvZHVjdHNdKVxyXG5cclxuICBjb25zdCBhZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IFt7XHJcbiAgICAgIG5hbWU6ICdOb21icmUnLFxyXG4gICAgICBwcmljZTogMCxcclxuICAgIH1dXHJcbiAgICBzZXRQcm9kdWN0cyhwcm9kdWN0cy5jb25jYXQocHJvZHVjdCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblJlbW92ZVByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKF9wcm9kdWN0ID0+IF9wcm9kdWN0ICE9PSBwcm9kdWN0KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZXMgPSAoZmlsZXMsIGlzUHJpbWFyeSA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZpbGVzKVxyXG4gICAgICBjb25zdCB0ZW1wID0gW11cclxuICAgICAgZmlsZXMuZm9yRWFjaChmaWxlID0+IHtcclxuICAgICAgICBhcHAuc3RvcmFnZSgpLnJlZigpLmNoaWxkKCcvaW1hZ2VzJykuY2hpbGQoZmlsZS5uYW1lKS5wdXQoZmlsZSlcclxuICAgICAgICAgIC50aGVuKHNuYXBzaG90ID0+IGFwcC5zdG9yYWdlKCkucmVmKHNuYXBzaG90Lm1ldGFkYXRhLmZ1bGxQYXRoKS5nZXREb3dubG9hZFVSTCgpKVxyXG4gICAgICAgICAgLnRoZW4odXJsID0+IHtcclxuICAgICAgICAgICAgaWYgKGlzUHJpbWFyeSkge1xyXG4gICAgICAgICAgICAgIHNldFBpY3R1cmUodXJsKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgIHRlbXAucHVzaCh1cmwpXHJcbiAgICAgICAgICAgICAgc2V0Q2Fyb3VzZWwodGVtcClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgfSlcclxuICAgICAgfSlcclxuICAgIH1cclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2R1Y3ROYW1lQ2hhbmdlID0gKHRhcmdldCwgaW5kZXgpID0+IHtcclxuICAgIGxldCB0ZW1wID0gcHJvZHVjdHNcclxuICAgIHRlbXBbaW5kZXhdLm5hbWUgPSB0YXJnZXQudmFsdWVcclxuICAgIHNldFByb2R1Y3RzKHRlbXApXHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9kdWN0UHJpY2VDaGFuZ2UgPSAodGFyZ2V0LCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSBwcm9kdWN0c1xyXG4gICAgdGVtcFtpbmRleF0ucHJpY2UgPSArdGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRQcm9kdWN0cyh0ZW1wKVxyXG4gICAgZ2V0RGlzY291bnQoKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgZ2V0RGlzY291bnQgPSAoKSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9IDBcclxuICAgIHByb2R1Y3RzLmZvckVhY2gocHJvZHVjdCA9PiB7XHJcbiAgICAgIHRlbXAgKz0gcHJvZHVjdC5wcmljZVxyXG4gICAgfSlcclxuICAgIHNldERpc2NvdW50KE1hdGguY2VpbCgoKHByaWNlICogMTAwKSAvIHRlbXApIC0gMTAwKSlcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPXtjbGFzc2VzLnJvb3R9IG9uU3VibWl0PXsoZGF0YSkgPT4gaGFuZGxlT25TdWJtaXQoZGF0YSl9IG5vVmFsaWRhdGUgYXV0b0NvbXBsZXRlPVwib2ZmXCI+XHJcbiAgICAgICAgICA8R3JpZCBjb250YWluZXIgc3BhY2luZz17M30gY29scz17MX0+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBsZz17MTJ9PlxyXG4gICAgICAgICAgICAgIDxGb3JtQ29udHJvbExhYmVsXHJcbiAgICAgICAgICAgICAgICBjb250cm9sPXtcclxuICAgICAgICAgICAgICAgICAgPFN3aXRjaFxyXG4gICAgICAgICAgICAgICAgICAgIGNoZWNrZWQ9e3B1Ymxpc2h9XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRQdWJsaXNoKHRhcmdldC5jaGVja2VkKX1cclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQdWJsaWNhclwiXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezh9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJOb21icmVcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e25hbWV9XHJcbiAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXROYW1lKHRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cImNvbHNcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJDb2x1bW5hc1wiXHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtjb2xzfVxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldCB9KSA9PiBzZXRDb2xzKHRhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cImRpc2NvdW50XCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPXtgJHtkaXNjb3VudCA/IGRpc2NvdW50IDogJ0Rlc2N1ZW50byd9ICUgLSBBdXRvbcOhdGljb2B9XHJcbiAgICAgICAgICAgICAgICBkaXNhYmxlZFxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlByZWNpb1wiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17cHJpY2V9XHJcbiAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXR9KSA9PiBzZXRQcmljZSgrdGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0c30+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+UHJvZHVjdG9zPC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIHtwcm9kdWN0cy5tYXAoKHByb2R1Y3QsIGluZGV4KSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8R3JpZCBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdENvbnRhaW5lcn0gY29udGFpbmVyIHNwYWNpbmc9ezF9IGNvbHM9ezF9IGtleT17aW5kZXh9PlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezd9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIk5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Byb2R1Y3QubmFtZSB8fCAnTm9tYnJlJ31cclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXR9KSA9PiBwcm9kdWN0TmFtZUNoYW5nZSh0YXJnZXQsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbGFiZWw9e3Byb2R1Y3QucHJpY2UgfHwgJ1ByZWNpbyAkJ31cclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0fSkgPT4gcHJvZHVjdFByaWNlQ2hhbmdlKHRhcmdldCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxfT5cclxuICAgICAgICAgICAgICAgICAgICA8SWNvbkJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlUHJvZHVjdH0gb25DbGljaz17KCkgPT4gb25SZW1vdmVQcm9kdWN0KHByb2R1Y3QpfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxDbGVhckljb24gLz5cclxuICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICApKX1cclxuICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5hZGRQcm9kdWN0fSBjb2xvcj1cInByaW1hcnlcIiBvbkNsaWNrPXthZGRQcm9kdWN0fT5BZ3JlZ2FyIFByb2R1Y3RvPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs2fT5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmVBcmVhXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlLyonXX1cclxuICAgICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezF9XHJcbiAgICAgICAgICAgICAgICBtYXhGaWxlU2l6ZT17MTAwMDAwMDB9XHJcbiAgICAgICAgICAgICAgICBkcm9wem9uZVRleHQ9XCJJbWFnZW4gcHJpbmNpcGFsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uRmlsZUNoYW5nZXMoZmlsZXMsIHRydWUpfVxyXG4gICAgICAgICAgICAgICAgb25EZWxldGU9eygpID0+IHNldFBpY3R1cmUoJycpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAge3BpY3R1cmVcclxuICAgICAgICAgICAgICA/IDxHcmlkIGl0ZW0geHM9ezZ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMuY29udGFpbn0+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgIHNyYz17cGljdHVyZX1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9XCJwcm9tbyBpbWFnZVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgOiA8ZGl2IC8+XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxMH1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIkltw6FnZW5lcyBwYXJhIGVsIGNhcnJ1c2VsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uRmlsZUNoYW5nZXMoZmlsZXMpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SW3DoWdlbmVzIGRlbCBjYXJydXNlbDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgPyBjYXJvdXNlbC5tYXAoaW1hZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsSW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsZWFySWNvbiBjbGFzc05hbWU9e2NsYXNzZXMucmVtb3ZlQ2Fyb3VzZWxJbWFnZX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsSW1hZ2V9IHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICkpXHJcbiAgICAgICAgICAgICAgICA6IG51bGxcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgIDwvR3JpZD5cclxuXHJcbiAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnN9PlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZsb2F0UmlnaHR9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIEd1YXJkYXJcclxuICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZmxvYXRSaWdodH1cclxuICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInNlY29uZGFyeVwiXHJcbiAgICAgICAgICAgICAgb25DbGljaz17KCkgPT4gcm91dGVyLnB1c2goJy9wcm9tb3MnKX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIENhbmNlbGFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgIDwvZm9ybT5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGb3JtUHJvbW9cclxuXHJcbmNvbnN0IHVzZVN0eWxlcyA9IG1ha2VTdHlsZXMoKHRoZW1lKSA9PiAoe1xyXG4gIGFjdGlvbnM6IHtcclxuICAgIG1hcmdpbjogdGhlbWUuc3BhY2luZygnMjBweCcsIDApLFxyXG4gIH0sXHJcbiAgY29udGFpbjoge1xyXG4gICAgbWF4SGVpZ2h0OiAnMjUwcHgnLFxyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIGRpc3BsYXk6ICdmbGV4JyxcclxuICB9LFxyXG4gIGZ1bGxXaWR0aDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICAgIG1heEhlaWd0aDogJzEwMCUnLFxyXG4gICAgb2JqZWN0Rml0OiAnY29udGFpbicsXHJcbiAgfSxcclxuICBmbG9hdFJpZ2h0OiB7XHJcbiAgICBtaW5XaWR0aDogMTIwLFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBtYXJnaW5MZWZ0OiAxNixcclxuICB9LFxyXG4gIHByb2R1Y3RDb250YWluZXI6IHtcclxuICAgIHBhZGRpbmc6IHRoZW1lLnNwYWNpbmcoMCwgMiksXHJcbiAgICAnJjpudGgtY2hpbGQoZXZlbiknOiB7XHJcbiAgICAgIGJhY2tncm91bmQ6IHRoZW1lLnBhbGV0dGUubGlnaHRHcmVlbi5tYWluLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGFkZFByb2R1Y3Q6IHtcclxuICAgIG1hcmdpblRvcDogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gIH0sXHJcbiAgcmVtb3ZlUHJvZHVjdDoge1xyXG4gICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubGlnaHQsXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICAgIHBhZGRpbmdSaWdodDogMCxcclxuICAgIFt0aGVtZS5icmVha3BvaW50cy51cCgnc20nKV06IHtcclxuICAgICAgcGFkZGluZ1JpZ2h0OiAxLFxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNhcm91c2VsSW1hZ2VDb250YWluZXI6IHtcclxuICAgIGhlaWdodDogJzEwMHB4JyxcclxuICAgIGRpc3BsYXk6ICdpbmxpbmUtYmxvY2snLFxyXG4gICAgcG9zaXRpb246ICdyZWxhdGl2ZScsXHJcbiAgfSxcclxuICBjYXJvdXNlbEltYWdlOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgd2lkdGg6ICcxMDBweCcsXHJcbiAgfSxcclxuICByZW1vdmVDYXJvdXNlbEltYWdlOiB7XHJcbiAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5lcnJvci5tYWluLFxyXG4gICAgcG9zaXRpb246ICdhYnNvbHV0ZScsXHJcbiAgICB0b3A6IDUsXHJcbiAgICByaWdodDogNSxcclxuICB9LFxyXG59KSkiXSwic291cmNlUm9vdCI6IiJ9