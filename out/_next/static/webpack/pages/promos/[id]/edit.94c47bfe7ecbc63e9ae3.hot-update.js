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
      setLoading(true);
      isPrimary ? setPicture('') : null;
      files.forEach(function (file) {
        _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_14__["default"].storage().ref().child('/images').child(file.name).put(file).then(function (snapshot) {
          return _firebase_firebase_config__WEBPACK_IMPORTED_MODULE_14__["default"].storage().ref(snapshot.metadata.fullPath).getDownloadURL();
        }).then(function (url) {
          if (isPrimary) {
            setPicture(url);
            setLoading(false);
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
              lineNumber: 130,
              columnNumber: 19
            }, _this),
            label: "Publicar"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 128,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 127,
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
            lineNumber: 140,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 139,
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
            lineNumber: 150,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 149,
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
            lineNumber: 160,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
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
            lineNumber: 168,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 167,
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
            lineNumber: 178,
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
                  lineNumber: 182,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 181,
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
                  lineNumber: 191,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 190,
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
                    lineNumber: 201,
                    columnNumber: 23
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 200,
                  columnNumber: 21
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 199,
                columnNumber: 19
              }, _this)]
            }, index, true, {
              fileName: _jsxFileName,
              lineNumber: 180,
              columnNumber: 17
            }, _this);
          }), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_6__["default"], {
            className: classes.addProduct,
            color: "primary",
            onClick: addProduct,
            children: "Agregar Producto"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 206,
            columnNumber: 15
          }, _this)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 177,
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
            lineNumber: 209,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 208,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 6,
          className: classes.contain,
          children: !picture && loading ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(CircularProgress, {}, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 220,
            columnNumber: 19
          }, _this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("img", {
            className: classes.image,
            src: picture,
            alt: "promo image"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 221,
            columnNumber: 19
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 218,
          columnNumber: 13
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
            lineNumber: 225,
            columnNumber: 15
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 224,
          columnNumber: 13
        }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_Grid__WEBPACK_IMPORTED_MODULE_7__["default"], {
          item: true,
          xs: 12,
          md: 12,
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core__WEBPACK_IMPORTED_MODULE_15__["Typography"], {
            children: "Im\xE1genes del carrusel"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 234,
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
        lineNumber: 126,
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
          lineNumber: 251,
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
      lineNumber: 125,
      columnNumber: 9
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 124,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL2Zvcm0vRm9ybVByb21vLmpzIl0sIm5hbWVzIjpbIkZvcm1Qcm9tbyIsInByb21vIiwib25TdWJtaXQiLCJ1c2VTdGF0ZSIsIm5hbWUiLCJzZXROYW1lIiwicHJpY2UiLCJzZXRQcmljZSIsInBhcnRpYWxQcmljZSIsInNldFBhcnRpYWxQcmljZSIsImNvbHMiLCJzZXRDb2xzIiwiZGlzY291bnQiLCJzZXREaXNjb3VudCIsInBpY3R1cmUiLCJzZXRQaWN0dXJlIiwicHVibGlzaCIsInNldFB1Ymxpc2giLCJwcm9kdWN0cyIsInNldFByb2R1Y3RzIiwiY2Fyb3VzZWwiLCJzZXRDYXJvdXNlbCIsImxvYWRpbmciLCJzZXRMb2FkaW5nIiwiY2xhc3NlcyIsInVzZVN0eWxlcyIsInJvdXRlciIsInVzZVJvdXRlciIsImhhbmRsZU9uU3VibWl0IiwiZSIsInByZXZlbnREZWZhdWx0IiwidXNlRWZmZWN0IiwiT2JqZWN0Iiwia2V5cyIsImxlbmd0aCIsImdldERpc2NvdW50IiwiYWRkUHJvZHVjdCIsInByb2R1Y3QiLCJjb25jYXQiLCJvblJlbW92ZVByb2R1Y3QiLCJmaWx0ZXIiLCJfcHJvZHVjdCIsIm9uRmlsZUNoYW5nZXMiLCJmaWxlcyIsImlzUHJpbWFyeSIsInRlbXAiLCJmb3JFYWNoIiwiZmlsZSIsImFwcCIsInN0b3JhZ2UiLCJyZWYiLCJjaGlsZCIsInB1dCIsInRoZW4iLCJzbmFwc2hvdCIsIm1ldGFkYXRhIiwiZnVsbFBhdGgiLCJnZXREb3dubG9hZFVSTCIsInVybCIsInB1c2giLCJwcm9kdWN0TmFtZUNoYW5nZSIsInRhcmdldCIsImluZGV4IiwidmFsdWUiLCJwcm9kdWN0UHJpY2VDaGFuZ2UiLCJNYXRoIiwiY2VpbCIsIm9uUmVtb3ZlQ2Fyb3VzZWxJbWFnZSIsImltYWdlIiwiX2ltYWdlIiwicm9vdCIsImRhdGEiLCJjaGVja2VkIiwiZnVsbFdpZHRoIiwibWFwIiwicHJvZHVjdENvbnRhaW5lciIsInJlbW92ZVByb2R1Y3QiLCJjb250YWluIiwiY2Fyb3VzZWxJbWFnZUNvbnRhaW5lciIsInJlbW92ZUNhcm91c2VsSW1hZ2UiLCJjYXJvdXNlbEltYWdlIiwiYWN0aW9ucyIsImZsb2F0UmlnaHQiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJtYXJnaW4iLCJzcGFjaW5nIiwibWF4SGVpZ2h0Iiwid2lkdGgiLCJkaXNwbGF5IiwibWF4SGVpZ3RoIiwib2JqZWN0Rml0IiwibWluV2lkdGgiLCJtYXJnaW5MZWZ0IiwicGFkZGluZyIsImJhY2tncm91bmQiLCJwYWxldHRlIiwibGlnaHRHcmVlbiIsIm1haW4iLCJtYXJnaW5Ub3AiLCJjb2xvciIsImVycm9yIiwibGlnaHQiLCJwYWRkaW5nUmlnaHQiLCJicmVha3BvaW50cyIsInVwIiwiaGVpZ2h0IiwicG9zaXRpb24iLCJ0b3AiLCJyaWdodCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7O0FBRUEsSUFBTUEsU0FBUyxHQUFHLFNBQVpBLFNBQVksT0FBOEI7QUFBQTs7QUFBQSx3QkFBM0JDLEtBQTJCO0FBQUEsTUFBM0JBLEtBQTJCLDJCQUFuQixFQUFtQjtBQUFBLE1BQWZDLFFBQWUsUUFBZkEsUUFBZTs7QUFBQSxrQkFDdEJDLHNEQUFRLENBQUMsRUFBRCxDQURjO0FBQUEsTUFDdkNDLElBRHVDO0FBQUEsTUFDakNDLE9BRGlDOztBQUFBLG1CQUVwQkYsc0RBQVEsQ0FBQyxDQUFELENBRlk7QUFBQSxNQUV2Q0csS0FGdUM7QUFBQSxNQUVoQ0MsUUFGZ0M7O0FBQUEsbUJBR05KLHNEQUFRLENBQUMsQ0FBRCxDQUhGO0FBQUEsTUFHdkNLLFlBSHVDO0FBQUEsTUFHekJDLGVBSHlCOztBQUFBLG1CQUl0Qk4sc0RBQVEsQ0FBQyxFQUFELENBSmM7QUFBQSxNQUl2Q08sSUFK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QnZDOUQsY0FBVSxFQUFFO0FBQ1YrRCxlQUFTLEVBQUVmLEtBQUssQ0FBQ0UsT0FBTixDQUFjLENBQWQsQ0FERDtBQUVWLGVBQU87QUFGRyxLQXpCMkI7QUE2QnZDVixpQkFBYSxFQUFFO0FBQ2J3QixXQUFLLEVBQUVoQixLQUFLLENBQUNZLE9BQU4sQ0FBY0ssS0FBZCxDQUFvQkMsS0FEaEI7QUFFWCxlQUFPLE9BRkk7QUFHWEMsa0JBQVksRUFBRTtBQUhILE9BSVZuQixLQUFLLENBQUNvQixXQUFOLENBQWtCQyxFQUFsQixDQUFxQixJQUFyQixDQUpVLEVBSW1CO0FBQzVCRixrQkFBWSxFQUFFO0FBRGMsS0FKbkIsQ0E3QjBCO0FBcUN2Q3pCLDBCQUFzQixFQUFFO0FBQ3RCNEIsWUFBTSxFQUFFLE9BRGM7QUFFdEJqQixhQUFPLEVBQUUsY0FGYTtBQUd0QmtCLGNBQVEsRUFBRTtBQUhZLEtBckNlO0FBMEN2QzNCLGlCQUFhLEVBQUU7QUFDYmMsYUFBTyxFQUFFVixLQUFLLENBQUNFLE9BQU4sQ0FBYyxDQUFkLENBREk7QUFFYm9CLFlBQU0sRUFBRTtBQUZLLEtBMUN3QjtBQThDdkMzQix1QkFBbUIsRUFBRTtBQUNuQnFCLFdBQUssRUFBRWhCLEtBQUssQ0FBQ1ksT0FBTixDQUFjSyxLQUFkLENBQW9CSCxJQURSO0FBRW5CUyxjQUFRLEVBQUUsVUFGUztBQUduQkMsU0FBRyxFQUFFLENBSGM7QUFJbkJDLFdBQUssRUFBRTtBQUpZO0FBOUNrQixHQUFaO0FBQUEsQ0FBRCxDQUE1QiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9wcm9tb3MvW2lkXS9lZGl0Ljk0YzQ3YmZlN2VjYmM2M2U5YWUzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJ1xyXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICduZXh0L3JvdXRlcidcclxuXHJcbmltcG9ydCBCdXR0b24gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvQnV0dG9uJ1xyXG5pbXBvcnQgR3JpZCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9HcmlkJ1xyXG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZCdcclxuaW1wb3J0IFN3aXRjaCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Td2l0Y2gnXHJcbmltcG9ydCBGb3JtQ29udHJvbExhYmVsIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0Zvcm1Db250cm9sTGFiZWwnXHJcbmltcG9ydCB7IERyb3B6b25lQXJlYSB9IGZyb20gJ21hdGVyaWFsLXVpLWRyb3B6b25lJ1xyXG5pbXBvcnQgSWNvbkJ1dHRvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9JY29uQnV0dG9uJ1xyXG5pbXBvcnQgQ2xlYXJJY29uIGZyb20gJ0BtYXRlcmlhbC11aS9pY29ucy9DbGVhcidcclxuXHJcbmltcG9ydCBhcHAgZnJvbSAnLi4vLi4vLi4vZmlyZWJhc2UvZmlyZWJhc2UuY29uZmlnJ1xyXG5pbXBvcnQgeyBUeXBvZ3JhcGh5IH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUnXHJcblxyXG5jb25zdCBGb3JtUHJvbW8gPSAoeyBwcm9tbyA9IHt9LCBvblN1Ym1pdCB9KSA9PiB7XHJcbiAgY29uc3QgW25hbWUsIHNldE5hbWVdID0gdXNlU3RhdGUoJycpXHJcbiAgY29uc3QgW3ByaWNlLCBzZXRQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtwYXJ0aWFsUHJpY2UsIHNldFBhcnRpYWxQcmljZV0gPSB1c2VTdGF0ZSgwKVxyXG4gIGNvbnN0IFtjb2xzLCBzZXRDb2xzXSA9IHVzZVN0YXRlKCcnKVxyXG4gIGNvbnN0IFtkaXNjb3VudCwgc2V0RGlzY291bnRdID0gdXNlU3RhdGUoMClcclxuICBjb25zdCBbcGljdHVyZSwgc2V0UGljdHVyZV0gPSB1c2VTdGF0ZSgnJylcclxuICBjb25zdCBbcHVibGlzaCwgc2V0UHVibGlzaF0gPSB1c2VTdGF0ZShmYWxzZSlcclxuICBjb25zdCBbcHJvZHVjdHMsIHNldFByb2R1Y3RzXSA9IHVzZVN0YXRlKFtdKVxyXG4gIGNvbnN0IFtjYXJvdXNlbCwgc2V0Q2Fyb3VzZWxdID0gdXNlU3RhdGUoW10pXHJcbiAgY29uc3QgW2xvYWRpbmcsIHNldExvYWRpbmddID0gdXNlU3RhdGUoZmFsc2UpXHJcbiAgXHJcbiAgY29uc3QgY2xhc3NlcyA9IHVzZVN0eWxlcygpXHJcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKClcclxuXHJcbiAgY29uc3QgaGFuZGxlT25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpXHJcbiAgICBvblN1Ym1pdCh7XHJcbiAgICAgIG5hbWUsXHJcbiAgICAgIHByaWNlOiArcHJpY2UsXHJcbiAgICAgIHBhcnRpYWxQcmljZTogK3BhcnRpYWxQcmljZSxcclxuICAgICAgY29scyxcclxuICAgICAgZGlzY291bnQ6ICtkaXNjb3VudCxcclxuICAgICAgcGljdHVyZSxcclxuICAgICAgcHVibGlzaCxcclxuICAgICAgcHJvZHVjdHMsXHJcbiAgICAgIGNhcm91c2VsLFxyXG4gICAgfSlcclxuICB9XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoT2JqZWN0LmtleXMocHJvbW8pLmxlbmd0aCAhPT0gMCkge1xyXG4gICAgICBzZXROYW1lKHByb21vLm5hbWUpXHJcbiAgICAgIHNldFByaWNlKCtwcm9tby5wcmljZSlcclxuICAgICAgc2V0UGFydGlhbFByaWNlKCtwcm9tby5wYXJ0aWFsUHJpY2UpXHJcbiAgICAgIHNldENvbHMoK3Byb21vLmNvbHMpXHJcbiAgICAgIHNldERpc2NvdW50KCtwcm9tby5kaXNjb3VudClcclxuICAgICAgc2V0UGljdHVyZShwcm9tby5waWN0dXJlKVxyXG4gICAgICBzZXRQdWJsaXNoKHByb21vLnB1Ymxpc2gpXHJcbiAgICAgIHNldFByb2R1Y3RzKHByb21vLnByb2R1Y3RzKVxyXG4gICAgICBzZXRDYXJvdXNlbChwcm9tby5jYXJvdXNlbClcclxuICAgIH1cclxuICB9LCBbcHJvbW9dKVxyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZ2V0RGlzY291bnQoKVxyXG4gIH0sIFtwcmljZSwgcHJvZHVjdHNdKVxyXG5cclxuICBjb25zdCBhZGRQcm9kdWN0ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJvZHVjdCA9IFt7XHJcbiAgICAgIG5hbWU6ICdOb21icmUnLFxyXG4gICAgICBwcmljZTogMCxcclxuICAgIH1dXHJcbiAgICBzZXRQcm9kdWN0cyhwcm9kdWN0cy5jb25jYXQocHJvZHVjdCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblJlbW92ZVByb2R1Y3QgPSAocHJvZHVjdCkgPT4ge1xyXG4gICAgc2V0UHJvZHVjdHMocHJvZHVjdHMuZmlsdGVyKF9wcm9kdWN0ID0+IF9wcm9kdWN0ICE9PSBwcm9kdWN0KSlcclxuICB9XHJcblxyXG4gIGNvbnN0IG9uRmlsZUNoYW5nZXMgPSAoZmlsZXMsIGlzUHJpbWFyeSA9IGZhbHNlKSA9PiB7XHJcbiAgICBpZiAoZmlsZXMubGVuZ3RoKSB7XHJcbiAgICAgIGNvbnN0IHRlbXAgPSBjYXJvdXNlbFxyXG4gICAgICBzZXRMb2FkaW5nKHRydWUpXHJcbiAgICAgIGlzUHJpbWFyeSA/IHNldFBpY3R1cmUoJycpIDogbnVsbFxyXG4gICAgICBmaWxlcy5mb3JFYWNoKGZpbGUgPT4ge1xyXG4gICAgICAgIGFwcC5zdG9yYWdlKCkucmVmKCkuY2hpbGQoJy9pbWFnZXMnKS5jaGlsZChmaWxlLm5hbWUpLnB1dChmaWxlKVxyXG4gICAgICAgICAgLnRoZW4oc25hcHNob3QgPT4gYXBwLnN0b3JhZ2UoKS5yZWYoc25hcHNob3QubWV0YWRhdGEuZnVsbFBhdGgpLmdldERvd25sb2FkVVJMKCkpXHJcbiAgICAgICAgICAudGhlbih1cmwgPT4ge1xyXG4gICAgICAgICAgICBpZiAoaXNQcmltYXJ5KSB7XHJcbiAgICAgICAgICAgICAgc2V0UGljdHVyZSh1cmwpXHJcbiAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICB0ZW1wLnB1c2godXJsKVxyXG4gICAgICAgICAgICAgIHNldENhcm91c2VsKFsuLi5jYXJvdXNlbF0pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIH0pXHJcbiAgICAgIH0pXHJcbiAgICB9XHJcbiAgfVxyXG5cclxuICBjb25zdCBwcm9kdWN0TmFtZUNoYW5nZSA9ICh0YXJnZXQsIGluZGV4KSA9PiB7XHJcbiAgICBsZXQgdGVtcCA9IHByb2R1Y3RzXHJcbiAgICB0ZW1wW2luZGV4XS5uYW1lID0gdGFyZ2V0LnZhbHVlXHJcbiAgICBzZXRQcm9kdWN0cyh0ZW1wKVxyXG4gIH1cclxuXHJcbiAgY29uc3QgcHJvZHVjdFByaWNlQ2hhbmdlID0gKHRhcmdldCwgaW5kZXgpID0+IHtcclxuICAgIGxldCB0ZW1wID0gcHJvZHVjdHNcclxuICAgIHRlbXBbaW5kZXhdLnByaWNlID0gK3RhcmdldC52YWx1ZVxyXG4gICAgc2V0UHJvZHVjdHModGVtcClcclxuICAgIGdldERpc2NvdW50KClcclxuICB9XHJcblxyXG4gIGNvbnN0IGdldERpc2NvdW50ID0gKCkgPT4ge1xyXG4gICAgbGV0IHRlbXAgPSAwXHJcbiAgICBwcm9kdWN0cy5mb3JFYWNoKHByb2R1Y3QgPT4ge1xyXG4gICAgICB0ZW1wICs9IHByb2R1Y3QucHJpY2VcclxuICAgIH0pXHJcbiAgICBzZXREaXNjb3VudChNYXRoLmNlaWwoKChwcmljZSAqIDEwMCkgLyB0ZW1wKSAtIDEwMCkpXHJcbiAgfVxyXG5cclxuICBjb25zdCBvblJlbW92ZUNhcm91c2VsSW1hZ2UgPSAoaW1hZ2UpID0+IHtcclxuICAgIHNldENhcm91c2VsKGNhcm91c2VsLmZpbHRlcihfaW1hZ2UgPT4gX2ltYWdlICE9PSBpbWFnZSkpXHJcbiAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT17Y2xhc3Nlcy5yb290fSBvblN1Ym1pdD17KGRhdGEpID0+IGhhbmRsZU9uU3VibWl0KGRhdGEpfSBub1ZhbGlkYXRlIGF1dG9Db21wbGV0ZT1cIm9mZlwiPlxyXG4gICAgICAgICAgPEdyaWQgY29udGFpbmVyIHNwYWNpbmc9ezN9IGNvbHM9ezF9PlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbGc9ezEyfT5cclxuICAgICAgICAgICAgICA8Rm9ybUNvbnRyb2xMYWJlbFxyXG4gICAgICAgICAgICAgICAgY29udHJvbD17XHJcbiAgICAgICAgICAgICAgICAgIDxTd2l0Y2hcclxuICAgICAgICAgICAgICAgICAgICBjaGVja2VkPXtwdWJsaXNofVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0UHVibGlzaCh0YXJnZXQuY2hlY2tlZCl9XHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJwcmltYXJ5XCJcclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiUHVibGljYXJcIlxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs4fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiTm9tYnJlXCJcclxuICAgICAgICAgICAgICAgIHZhbHVlPXtuYW1lfVxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0TmFtZSh0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJjb2xzXCJcclxuICAgICAgICAgICAgICAgIGxhYmVsPVwiQ29sdW1uYXNcIlxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICB2YWx1ZT17Y29sc31cclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoeyB0YXJnZXQgfSkgPT4gc2V0Q29scyh0YXJnZXQudmFsdWUpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs0fT5cclxuICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgaWQ9XCJkaXNjb3VudFwiXHJcbiAgICAgICAgICAgICAgICBsYWJlbD17YCR7ZGlzY291bnQgPyBkaXNjb3VudCA6ICdEZXNjdWVudG8nfSAlIC0gQXV0b23DoXRpY29gfVxyXG4gICAgICAgICAgICAgICAgZGlzYWJsZWRcclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17NH0+XHJcbiAgICAgICAgICAgICAgPFRleHRGaWVsZFxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZ1bGxXaWR0aH1cclxuICAgICAgICAgICAgICAgIGlkPVwiUHJpY2VcIlxyXG4gICAgICAgICAgICAgICAgbGFiZWw9XCJQcmVjaW9cIlxyXG4gICAgICAgICAgICAgICAgdmFsdWU9e3ByaWNlfVxyXG4gICAgICAgICAgICAgICAgdHlwZT1cIm51bWJlclwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KHsgdGFyZ2V0fSkgPT4gc2V0UHJpY2UoK3RhcmdldC52YWx1ZSl9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezEyfSBjbGFzc05hbWU9e2NsYXNzZXMucHJvZHVjdHN9PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PlByb2R1Y3RvczwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICB7cHJvZHVjdHMubWFwKChwcm9kdWN0LCBpbmRleCkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPEdyaWQgY2xhc3NOYW1lPXtjbGFzc2VzLnByb2R1Y3RDb250YWluZXJ9IGNvbnRhaW5lciBzcGFjaW5nPXsxfSBjb2xzPXsxfSBrZXk9e2luZGV4fT5cclxuICAgICAgICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXs3fT5cclxuICAgICAgICAgICAgICAgICAgICA8VGV4dEZpZWxkXHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzZXMuZnVsbFdpZHRofVxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9kdWN0Lm5hbWUgfHwgJ05vbWJyZSd9XHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyh7dGFyZ2V0fSkgPT4gcHJvZHVjdE5hbWVDaGFuZ2UodGFyZ2V0LCBpbmRleCl9XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPC9HcmlkPlxyXG4gICAgICAgICAgICAgICAgICA8R3JpZCBpdGVtIHhzPXsxMn0gbWQ9ezR9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxUZXh0RmllbGRcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mdWxsV2lkdGh9XHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cIlByaWNlXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGxhYmVsPXtwcm9kdWN0LnByaWNlIHx8ICdQcmVjaW8gJCd9XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwibnVtYmVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoe3RhcmdldH0pID0+IHByb2R1Y3RQcmljZUNoYW5nZSh0YXJnZXQsIGluZGV4KX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17MX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnJlbW92ZVByb2R1Y3R9IG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlUHJvZHVjdChwcm9kdWN0KX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9JY29uQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9e2NsYXNzZXMuYWRkUHJvZHVjdH0gY29sb3I9XCJwcmltYXJ5XCIgb25DbGljaz17YWRkUHJvZHVjdH0+QWdyZWdhciBQcm9kdWN0bzwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezEyfSBtZD17Nn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxfVxyXG4gICAgICAgICAgICAgICAgbWF4RmlsZVNpemU9ezEwMDAwMDAwfVxyXG4gICAgICAgICAgICAgICAgZHJvcHpvbmVUZXh0PVwiSW1hZ2VuIHByaW5jaXBhbFwiXHJcbiAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGZpbGVzKSA9PiBvbkZpbGVDaGFuZ2VzKGZpbGVzLCB0cnVlKX1cclxuICAgICAgICAgICAgICAgIG9uRGVsZXRlPXsoKSA9PiBzZXRQaWN0dXJlKCcnKX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICAgIDxHcmlkIGl0ZW0geHM9ezZ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5jb250YWlufT5cclxuICAgICAgICAgICAgICB7IXBpY3R1cmUgJiYgbG9hZGluZ1xyXG4gICAgICAgICAgICAgICAgPyA8Q2lyY3VsYXJQcm9ncmVzcyAvPlxyXG4gICAgICAgICAgICAgICAgOiA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5pbWFnZX0gc3JjPXtwaWN0dXJlfSBhbHQ9XCJwcm9tbyBpbWFnZVwiLz5cclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPERyb3B6b25lQXJlYVxyXG4gICAgICAgICAgICAgICAgYWNjZXB0ZWRGaWxlcz17WydpbWFnZS8qJ119XHJcbiAgICAgICAgICAgICAgICBmaWxlc0xpbWl0PXsxMH1cclxuICAgICAgICAgICAgICAgIG1heEZpbGVTaXplPXsxMDAwMDAwMH1cclxuICAgICAgICAgICAgICAgIGRyb3B6b25lVGV4dD1cIkltw6FnZW5lcyBwYXJhIGVsIGNhcnJ1c2VsXCJcclxuICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZmlsZXMpID0+IG9uRmlsZUNoYW5nZXMoZmlsZXMpfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IG1kPXsxMn0+XHJcbiAgICAgICAgICAgICAgPFR5cG9ncmFwaHk+SW3DoWdlbmVzIGRlbCBjYXJydXNlbDwvVHlwb2dyYXBoeT5cclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBjYXJvdXNlbFxyXG4gICAgICAgICAgICAgICAgPyBjYXJvdXNlbC5tYXAoaW1hZ2UgPT4gKFxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbWFnZX0gY2xhc3NOYW1lPXtjbGFzc2VzLmNhcm91c2VsSW1hZ2VDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPEljb25CdXR0b24gY2xhc3NOYW1lPXtjbGFzc2VzLnJlbW92ZUNhcm91c2VsSW1hZ2V9IG9uQ2xpY2s9eygpID0+IG9uUmVtb3ZlQ2Fyb3VzZWxJbWFnZShpbWFnZSl9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Q2xlYXJJY29uIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L0ljb25CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT17Y2xhc3Nlcy5jYXJvdXNlbEltYWdlfSBzcmM9e2ltYWdlfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICApKVxyXG4gICAgICAgICAgICAgICAgOiBudWxsXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICA8L0dyaWQ+XHJcbiAgICAgICAgICA8L0dyaWQ+XHJcblxyXG4gICAgICAgICAgPEdyaWQgaXRlbSB4cz17MTJ9IGNsYXNzTmFtZT17Y2xhc3Nlcy5hY3Rpb25zfT5cclxuICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3Nlcy5mbG9hdFJpZ2h0fVxyXG4gICAgICAgICAgICAgIHZhcmlhbnQ9XCJjb250YWluZWRcIlxyXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxyXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBHdWFyZGFyXHJcbiAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICA8QnV0dG9uXHJcbiAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmZsb2F0UmlnaHR9XHJcbiAgICAgICAgICAgICAgdmFyaWFudD1cImNvbnRhaW5lZFwiXHJcbiAgICAgICAgICAgICAgY29sb3I9XCJzZWNvbmRhcnlcIlxyXG4gICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHJvdXRlci5wdXNoKCcvcHJvbW9zJyl9XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICBDYW5jZWxhclxyXG4gICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgIDwvR3JpZD5cclxuICAgICAgICA8L2Zvcm0+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9ybVByb21vXHJcblxyXG5jb25zdCB1c2VTdHlsZXMgPSBtYWtlU3R5bGVzKCh0aGVtZSkgPT4gKHtcclxuICBhY3Rpb25zOiB7XHJcbiAgICBtYXJnaW46IHRoZW1lLnNwYWNpbmcoJzIwcHgnLCAwKSxcclxuICB9LFxyXG4gIGNvbnRhaW46IHtcclxuICAgIG1heEhlaWdodDogJzI1MHB4JyxcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBkaXNwbGF5OiAnZmxleCcsXHJcbiAgfSxcclxuICBmdWxsV2lkdGg6IHtcclxuICAgIHdpZHRoOiAnMTAwJScsXHJcbiAgICBtYXhIZWlndGg6ICcxMDAlJyxcclxuICAgIG9iamVjdEZpdDogJ2NvbnRhaW4nLFxyXG4gIH0sXHJcbiAgZmxvYXRSaWdodDoge1xyXG4gICAgbWluV2lkdGg6IDEyMCxcclxuICAgIGZsb2F0OiAncmlnaHQnLFxyXG4gICAgbWFyZ2luTGVmdDogMTYsXHJcbiAgfSxcclxuICBwcm9kdWN0Q29udGFpbmVyOiB7XHJcbiAgICBwYWRkaW5nOiB0aGVtZS5zcGFjaW5nKDAsIDIpLFxyXG4gICAgJyY6bnRoLWNoaWxkKGV2ZW4pJzoge1xyXG4gICAgICBiYWNrZ3JvdW5kOiB0aGVtZS5wYWxldHRlLmxpZ2h0R3JlZW4ubWFpbixcclxuICAgIH0sXHJcbiAgfSxcclxuICBhZGRQcm9kdWN0OiB7XHJcbiAgICBtYXJnaW5Ub3A6IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgICBmbG9hdDogJ3JpZ2h0JyxcclxuICB9LFxyXG4gIHJlbW92ZVByb2R1Y3Q6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLmxpZ2h0LFxyXG4gICAgZmxvYXQ6ICdyaWdodCcsXHJcbiAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICBbdGhlbWUuYnJlYWtwb2ludHMudXAoJ3NtJyldOiB7XHJcbiAgICAgIHBhZGRpbmdSaWdodDogMSxcclxuICAgIH0sXHJcbiAgfSxcclxuICBjYXJvdXNlbEltYWdlQ29udGFpbmVyOiB7XHJcbiAgICBoZWlnaHQ6ICcxMDBweCcsXHJcbiAgICBkaXNwbGF5OiAnaW5saW5lLWJsb2NrJyxcclxuICAgIHBvc2l0aW9uOiAncmVsYXRpdmUnLFxyXG4gIH0sXHJcbiAgY2Fyb3VzZWxJbWFnZToge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygyKSxcclxuICAgIGhlaWdodDogJzEwMHB4JyxcclxuICB9LFxyXG4gIHJlbW92ZUNhcm91c2VsSW1hZ2U6IHtcclxuICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLmVycm9yLm1haW4sXHJcbiAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcclxuICAgIHRvcDogNSxcclxuICAgIHJpZ2h0OiA1LFxyXG4gIH0sXHJcbn0pKSJdLCJzb3VyY2VSb290IjoiIn0=