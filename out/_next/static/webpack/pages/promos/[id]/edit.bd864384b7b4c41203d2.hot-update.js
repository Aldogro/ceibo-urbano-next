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
          children: carousel ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["Fragment"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_14__["Typography"], {
              children: "Im\xE1genes del carousel"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 237,
              columnNumber: 19
            }, _this), "carousel.map(image => (", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
              className: classes.carouselImage,
              src: image
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 239,
              columnNumber: 23
            }, _this), "))"]
          }, void 0, true) : null
        }, void 0, false, {
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
      height: '100px'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vLmpzIl0sIm5hbWVzIjpbIkZvcm1Qcm9tbyIsInByb21vIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicHJpY2UiLCJzZXRQcmljZSIsInBhcnRpYWxQcmljZSIsInNldFBhcnRpYWxQcmljZSIsImNvbHMiLCJzZXRDb2xzIiwiZGlzY291bnQiLCJzZXREaXNjb3VudCIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2Fyb3VzZWwiLCJzZXRDYXJvdXNlbCIsImNsYXNzZXMiLCJ1c2VTdHlsZXMiLCJyb3V0ZXIiLCJ1c2VSb3V0ZXIiLCJoYW5kbGVPblN1Ym1pdCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsInVzZUVmZmVjdCIsIk9iamVjdCIsImtleXMiLCJsZW5ndGgiLCJnZXREaXNjb3VudCIsImFkZFByb2R1Y3QiLCJwcm9kdWN0IiwiY29uY2F0Iiwib25SZW1vdmVQcm9kdWN0IiwiZmlsdGVyIiwiX3Byb2R1Y3QiLCJvbkZpbGVDaGFuZ2VzIiwiZmlsZXMiLCJpc1ByaW1hcnkiLCJjb25zb2xlIiwibG9nIiwidGVtcCIsImZvckVhY2giLCJmaWxlIiwiYXBwIiwic3RvcmFnZSIsInJlZiIsImNoaWxkIiwicHV0IiwidGhlbiIsInNuYXBzaG90IiwibWV0YWRhdGEiLCJmdWxsUGF0aCIsImdldERvd25sb2FkVVJMIiwidXJsIiwicHVzaCIsInByb2R1Y3ROYW1lQ2hhbmdlIiwidGFyZ2V0IiwiaW5kZXgiLCJ2YWx1ZSIsInByb2R1Y3RQcmljZUNoYW5nZSIsIk1hdGgiLCJjZWlsIiwicm9vdCIsImRhdGEiLCJjaGVja2VkIiwiZnVsbFdpZHRoIiwibWFwIiwicHJvZHVjdENvbnRhaW5lciIsInJlbW92ZVByb2R1Y3QiLCJjb250YWluIiwiY2Fyb3VzZWxJbWFnZSIsImltYWdlIiwiYWN0aW9ucyIsImZsb2F0UmlnaHQiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW4iLCJzcGFjaW5nIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwibWF4SGVpZ3RoIiwib2JqZWN0Rml0IiwibWluV2lkdGgiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwibGlnaHRHcmVlbiIsIm1haW4iLCJtYXJnaW5Ub3AiLCJjb2xvciIsImVycm9yIiwibGlnaHQiLCJwYWRkaW5nUmlnaHQiLCJicmVha3BvaW50cyIsInVwIiwiaGVpZ2h0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBOztBQUVBLElBQU1BLFNBQVMsR0FBRyxTQUFaQSxTQUFZLE9BQThCO0FBQUE7O0FBQUEsd0JBQTNCQyxLQUEyQjtBQUFBLE1BQTNCQSxLQUEyQiwyQkFBbkIsRUFBbUI7QUFBQSxNQUFmQyxRQUFlLFFBQWZBLFFBQWU7O0FBQUEsa0JBQ3RCQyxzREFBUSxDQUFDLEVBQUQsQ0FEYztBQUFBLE1BQ3ZDQyxJQUR1QztBQUFBLE1BQ2pDQyxPQURpQzs7QUFBQSxtQkFFcEJGLHNEQUFRLENBQUMsQ0FBRCxDQUZZO0FBQUEsTUFFdkNHLEtBRnVDO0FBQUEsTUFFaENDLFFBRmdDOztBQUFBLG1CQUdOSixzREFBUSxDQUFDLENBQUQsQ0FIRjtBQUFBLE1BR3ZDSyxZQUh1QztBQUFBLE1BR3pCQyxlQUh5Qjs7QUFBQSxtQkFJdEJOLHNEQUFRLENBQUMsRUFBRCxDQUpjO0FBQUEsTUFJdkNPLElBSnVDO0FBQUEsTUFJakNDLE9BSmlDOztBQUFBLG1CQUtkUixzREFBUSxDQUFDLENBQUQsQ0FMTTtBQUFBLE1BS3ZDUyxRQUx1QztBQUFBLE1BSzdCQyxXQUw2Qjs7QUFBQSxtQkFNaEJWLHNEQUFRLENB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QUFPLEVBQUVWLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsRUFBaUIsQ0FBakIsQ0FETztBQUVoQiwyQkFBcUI7QUFDbkJTLGtCQUFVLEVBQUVYLEtBQUssQ0FBQ1ksT0FBTixDQUFjQyxVQUFkLENBQXlCQztBQURsQjtBQUZMLEtBbkJxQjtBQXlCdkM1RCxjQUFVLEVBQUU7QUFDVjZELGVBQVMsRUFBRWYsS0FBSyxDQUFDRSxPQUFOLENBQWMsQ0FBZCxDQUREO0FBRVYsZUFBTztBQUZHLEtBekIyQjtBQTZCdkNULGlCQUFhLEVBQUU7QUFDYnVCLFdBQUssRUFBRWhCLEtBQUssQ0FBQ1ksT0FBTixDQUFjSyxLQUFkLENBQW9CQyxLQURoQjtBQUVYLGVBQU8sT0FGSTtBQUdYQyxrQkFBWSxFQUFFO0FBSEgsT0FJVm5CLEtBQUssQ0FBQ29CLFdBQU4sQ0FBa0JDLEVBQWxCLENBQXFCLElBQXJCLENBSlUsRUFJbUI7QUFDNUJGLGtCQUFZLEVBQUU7QUFEYyxLQUpuQixDQTdCMEI7QUFxQ3ZDeEIsaUJBQWEsRUFBRTtBQUNiZSxhQUFPLEVBQUVWLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FESTtBQUVib0IsWUFBTSxFQUFFO0FBRks7QUFyQ3dCLEdBQVo7QUFBQSxDQUFELENBQTVCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL3Byb21vcy9baWRdL2VkaXQuYmQ4NjQzODRiN2I0YzQxMjAzZDIuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IG1ha2VTdHlsZXMgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gJ25leHQvcm91dGVyJ1xyXG5cclxuaW1wb3J0IEJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9CdXR0b24nXHJcbmltcG9ydCBHcmlkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0dyaWQnXHJcbmltcG9ydCBUZXh0RmllbGQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkJ1xyXG5pbXBvcnQgU3dpdGNoIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N3aXRjaCdcclxuaW1wb3J0IEZvcm1Db250cm9sTGFiZWwgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvRm9ybUNvbnRyb2xMYWJlbCdcclxuaW1wb3J0IHsgRHJvcHpvbmVBcmVhIH0gZnJvbSAnbWF0ZXJpYWwtdWktZHJvcHpvbmUnXHJcbmltcG9ydCBJY29uQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0ljb25CdXR0b24nXHJcbmltcG9ydCBDbGVhckljb24gZnJvbSAnQG1hdGVyaWFsLXVpL2ljb25zL0NsZWFyJ1xyXG5cclxuaW1wb3J0IGFwcCBmcm9tICcuLi8uLi8uLi9maXJlYmFzZS9maXJlYmFzZS5jb25maWcnXHJcbmltcG9ydCB7IFR5cG9ncmFwaHkgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZSdcclxuXHJcbmNvbnN0IEZvcm1Qcm9tbyA9ICh7IHByb21vID0ge30sIG9uU3VibWl0IH0pID0+IHtcclxuICBjb25zdCBbbmFtZSwgc2V0TmFtZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHJpY2UsIHNldFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW3BhcnRpYWxQcmljZSwgc2V0UGFydGlhbFByaWNlXSA9IHVzZVN0YXRlKDApXHJcbiAgY29uc3QgW2NvbHMsIHNldENvbHNdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW2Rpc2NvdW50LCBzZXREaXNjb3VudF0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwaWN0dXJlLCBzZXRQaWN0dXJlXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtwdWJsaXNoLCBzZXRQdWJsaXNoXSA9IHVzZVN0YXRlKGZhbHNlKVxyXG4gIGNvbnN0IFtwcm9kdWN0cywgc2V0UHJvZHVjdHNdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2Nhcm91c2VsLCBzZXRDYXJvdXNlbF0gPSB1c2VTdGF0ZShbXSlcclxuICBcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKClcclxuICBjb25zdCByb3V0ZXIgPSB1c2VSb3V0ZXIoKVxyXG5cclxuICBjb25zdCBoYW5kbGVPblN1Ym1pdCA9IChlKSA9PiB7XHJcbiAgICBlLnByZXZlbnREZWZhdWx0KClcclxuICAgIG9uU3VibWl0KHtcclxuICAgICAgbmFtZSxcclxuICAgICAgcHJpY2U6ICtwcmljZSxcclxuICAgICAgcGFydGlhbFByaWNlOiArcGFydGlhbFByaWNlLFxyXG4gICAgICBjb2xzLFxyXG4gICAgICBkaXNjb3VudDogK2Rpc2NvdW50LFxyXG4gICAgICBwaWN0dXJlLFxyXG4gICAgICBwdWJsaXNoLFxyXG4gICAgICBwcm9kdWN0cyxcclxuICAgICAgY2Fyb3VzZWwsXHJcbiAgICB9KVxyXG4gIH1cclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChPYmplY3Qua2V5cyhwcm9tbykubGVuZ3RoICE9PSAwKSB7XHJcbiAgICAgIHNldE5hbWUocHJvbW8ubmFtZSlcclxuICAgICAgc2V0UHJpY2UoK3Byb21vLnByaWNlKVxyXG4gICAgICBzZXRQYXJ0aWFsUHJpY2UoK3Byb21vLnBhcnRpYWxQcmljZSlcclxuICAgICAgc2V0Q29scygrcHJvbW8uY29scylcclxuICAgICAgc2V0RGlzY291bnQoK3Byb21vLmRpc2NvdW50KVxyXG4gICAgICBzZXRQaWN0dXJlKHByb21vLnBpY3R1cmUpXHJcbiAgICAgIHNldFB1Ymxpc2gocHJvbW8ucHVibGlzaClcclxuICAgICAgc2V0UHJvZHVjdHMocHJvbW8ucHJvZHVjdHMpXHJcbiAgICAgIHNldENhcm91c2VsKHByb21vLmNhcm91c2VsKVxyXG4gICAgfVxyXG4gIH0sIFtwcm9tb10pXHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBnZXREaXNjb3VudCgpXHJcbiAgfSwgW3ByaWNlLCBwcm9kdWN0c10pXHJcblxyXG4gIGNvbnN0IGFkZFByb2R1Y3QgPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcm9kdWN0ID0gW3tcclxuICAgICAgbmFtZTogJ05vbWJyZScsXHJcbiAgICAgIHByaWNlOiAwLFxyXG4gICAgfV1cclxuICAgIHNldFByb2R1Y3RzKHByb2R1Y3RzLmNvbmNhdChwcm9kdWN0KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uUmVtb3ZlUHJvZHVjdCA9IChwcm9kdWN0KSA9PiB7XHJcbiAgICBzZXRQcm9kdWN0cyhwcm9kdWN0cy5maWx0ZXIoX3Byb2R1Y3QgPT4gX3Byb2R1Y3QgIT09IHByb2R1Y3QpKVxyXG4gIH1cclxuXHJcbiAgY29uc3Qgb25GaWxlQ2hhbmdlcyA9IChmaWxlcywgaXNQcmltYXJ5ID0gZmFsc2UpID0+IHtcclxuICAgIGlmIChmaWxlcy5sZW5ndGgpIHtcclxuICAgICAgY29uc29sZS5sb2coZmlsZXMpXHJcbiAgICAgIGNvbnN0IHRlbXAgPSBbXVxyXG4gICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgIGFwcC5zdG9yYWdlKCkucmVmKCkuY2hpbGQoJy9pbWFnZXMnKS5jaGlsZChmaWxlLm5hbWUpLnB1dChmaWxlKVxyXG4gICAgICAgICAgLnRoZW4oc25hcHNob3QgPT4gYXBwLnN0b3JhZ2UoKS5yZWYoc25hcHNob3QubWV0YWRhdGEuZnVsbFBhdGgpLmdldERvd25sb2FkVVJMKCkpXHJcbiAgICAgICAgICAudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgc2V0UGljdHVyZSh1cmwpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgdGVtcC5wdXNoKHVybClcclxuICAgICAgICAgICAgICBzZXRDYXJvdXNlbCh0ZW1wKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICB9KVxyXG4gICAgICB9KVxyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZHVjdE5hbWVDaGFuZ2UgPSAodGFyZ2V0LCBpbmRleCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSBwcm9kdWN0c1xyXG4gICAgdGVtcFtpbmRleF0ubmFtZSA9IHRhcmdldC52YWx1ZVxyXG4gICAgc2V0UHJvZHVjdHModGVtcClcclxuICB9XHJcblxyXG4gIGNvbnN0IHByb2R1Y3RQcmljZUNoYW5nZSA9ICh0YXJnZXQsIGluZGV4KSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9IHByb2R1Y3RzXHJcbiAgICB0ZW1wW2luZGV4XS5wcmljZSA9ICt0YXJnZXQudmFsdWVcclxuICAgIHNldFByb2R1Y3RzKHRlbXApXHJcbiAgICBnZXREaXNjb3VudCgpXHJcbiAgfVxyXG5cclxuICBjb25zdCBnZXREaXNjb3VudCA9ICgpID0+IHtcclxuICAgIGxldCB0ZW1wID0gMFxyXG4gICAgcHJvZHVjdHMuZm9yRWFjaChwcm9kdWN0ID0+IHtcclxuICAgICAgdGVtcCArPSBwcm9kdWN0LnByaWNlXHJcbiAgICB9KVxyXG4gICAgc2V0RGlzY291bnQoTWF0aC5jZWlsKCgocHJpY2UgKiAxMDApIC8gdGVtcCkgLSAxMDApKVxyXG4gIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0gb25TdWJtaXQ9eyhkYXRhKSA9PiBoYW5kbGVPblN1Ym1pdChkYXRhKX0gbm9WYWxpZGF0ZSBhdXRvQ29tcGxldGU9XCJvZmZcIj5cclxuICAgICAgICAgIDxHcmlkIGNvbnRhaW5lciBzcGFjaW5nPXszfSBjb2xzPXsxfT5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGxnPXsxMn0+XHJcbiAgICAgICAgICAgICAgPEZvcm1Db250cm9sTGFiZWxcclxuICAgICAgICAgICAgICAgIGNvbnRyb2w9e1xyXG4gICAgICAgICAgICAgICAgICA8U3dpdGNoXHJcbiAgICAgICAgICAgICAgICAgICAgY2hlY2tlZD17cHVibGlzaH1cclxuICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldFB1Ymxpc2godGFyZ2V0LmNoZWNrZWQpfVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIlB1YmxpY2FyXCJcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17OH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIk5vbWJyZVwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17bmFtZX1cclxuICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldE5hbWUodGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiY29sc1wiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD1cIkNvbHVtbmFzXCJcclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e2NvbHN9XHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0IH0pID0+IHNldENvbHModGFyZ2V0LnZhbHVlKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiZGlzY291bnRcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9e2Ake2Rpc2NvdW50ID8gZGlzY291bnQgOiAnRGVzY3VlbnRvJ30gJSAtIEF1dG9tw6F0aWNvYH1cclxuICAgICAgICAgICAgICAgIGRpc2FibGVkXHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICBpZD1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUHJlY2lvXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtwcmljZX1cclxuICAgICAgICAgICAgICAgIHR5cGU9XCJudW1iZXJcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7IHRhcmdldH0pID0+IHNldFByaWNlKCt0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0gY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RzfT5cclxuICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5Qcm9kdWN0b3M8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICAgICAge3Byb2R1Y3RzLm1hcCgocHJvZHVjdCwgaW5kZXgpID0+IChcclxuICAgICAgICAgICAgICAgIDxHcmlkIGNsYXNzTmFtZT17Y2xhc3Nlcy5wcm9kdWN0Q29udGFpbmVyfSBjb250YWluZXIgc3BhY2luZz17MX0gY29scz17MX0ga2V5PXtpbmRleH0+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17N30+XHJcbiAgICAgICAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwiTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cHJvZHVjdC5uYW1lIHx8ICdOb21icmUnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHByb2R1Y3ROYW1lQ2hhbmdlKHRhcmdldCwgaW5kZXgpfVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJQcmljZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBsYWJlbD17cHJvZHVjdC5wcmljZSB8fCAnUHJlY2lvICQnfVxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHt0YXJnZXR9KSA9PiBwcm9kdWN0UHJpY2VDaGFuZ2UodGFyZ2V0LCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezF9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxJY29uQnV0dG9uIGNsYXNzTmFtZT17Y2xhc3Nlcy5yZW1vdmVQcm9kdWN0fSBvbkNsaWNrPXsoKSA9PiBvblJlbW92ZVByb2R1Y3QocHJvZHVjdCl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPENsZWFySWNvbiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvSWNvbkJ1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLmFkZFByb2R1Y3R9IGNvbG9yPVwicHJpbWFyeVwiIG9uQ2xpY2s9e2FkZFByb2R1Y3R9PkFncmVnYXIgUHJvZHVjdG88L0J1dHRvbj5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezZ9PlxyXG4gICAgICAgICAgICAgIDxEcm9wem9uZUFyZWFcclxuICAgICAgICAgICAgICAgIGFjY2VwdGVkRmlsZXM9e1snaW1hZ2UvKiddfVxyXG4gICAgICAgICAgICAgICAgZmlsZXNMaW1pdD17MX1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIkltYWdlbiBwcmluY2lwYWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25GaWxlQ2hhbmdlcyhmaWxlcywgdHJ1ZSl9XHJcbiAgICAgICAgICAgICAgICBvbkRlbGV0ZT17KCkgPT4gc2V0UGljdHVyZSgnJyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICB7cGljdHVyZVxyXG4gICAgICAgICAgICAgID8gPEdyaWQgaXRlbSB4cz17Nn0+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWlufT5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtwaWN0dXJlfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD1cInByb21vIGltYWdlXCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgICA6IDxkaXYgLz5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICA8RHJvcHpvbmVBcmVhXHJcbiAgICAgICAgICAgICAgICBhY2NlcHRlZEZpbGVzPXtbJ2ltYWdlLyonXX1cclxuICAgICAgICAgICAgICAgIGZpbGVzTGltaXQ9ezEwfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiSW3DoWdlbmVzIHBhcmEgZWwgY2FycnVzZWxcIlxyXG4gICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhmaWxlcykgPT4gb25GaWxlQ2hhbmdlcyhmaWxlcyl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgP1xyXG4gICAgICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SW3DoWdlbmVzIGRlbCBjYXJvdXNlbDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICAgICAgY2Fyb3VzZWwubWFwKGltYWdlID0+IChcclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsSW1hZ2V9IHNyYz17aW1hZ2V9IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKSlcclxuICAgICAgICAgICAgICAgIDwvPlxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbG9hdFJpZ2h0fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZsb2F0UmlnaHR9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHJvbW9zJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVByb21vXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhY3Rpb25zOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzIwcHgnLCAwKSxcclxuICB9LFxyXG4gIGNvbnRhaW46IHtcclxuICAgIG1heEhlaWdodDogJzI1MHB4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICBmdWxsV2lkdGg6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXhIZWlndGg6ICcxMDAlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxyXG4gIH0sXHJcbiAgZmxvYXRSaWdodDoge1xyXG4gICAgbWluV2lkdGg6IDEyMCxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgbWFyZ2luTGVmdDogMTYsXHJcbiAgfSxcclxuICBwcm9kdWN0Q29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgJyY6bnRoLWNoaWxkKGV2ZW4pJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmxpZ2h0R3JlZW4ubWFpbixcclxuICAgIH0sXHJcbiAgfSxcclxuICBhZGRQcm9kdWN0OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICB9LFxyXG4gIHJlbW92ZVByb2R1Y3Q6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmxpZ2h0LFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdSaWdodDogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJvdXNlbEltYWdlOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDIpLFxyXG4gICAgaGVpZ2h0OiAnMTAwcHgnLFxyXG4gIH0sXHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=