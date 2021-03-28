webpackHotUpdate_N_E("pages/_app",{

/***/ "./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/ownerDocument */ "./node_modules/@material-ui/core/esm/utils/ownerDocument.js");
/* harmony import */ var _utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/useForkRef */ "./node_modules/@material-ui/core/esm/utils/useForkRef.js");
/* harmony import */ var _utils_useEventCallback__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/useEventCallback */ "./node_modules/@material-ui/core/esm/utils/useEventCallback.js");
/* harmony import */ var _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/utils */ "./node_modules/@material-ui/utils/esm/index.js");








function mapEventPropToEvent(eventProp) {
  return eventProp.substring(2).toLowerCase();
}

function clickedRootScrollbar(event) {
  return document.documentElement.clientWidth < event.clientX || document.documentElement.clientHeight < event.clientY;
}
/**
 * Listen for click events that occur somewhere in the document, outside of the element itself.
 * For instance, if you need to hide a menu when people click anywhere else on your page.
 */


function ClickAwayListener(props) {
  var children = props.children,
      _props$disableReactTr = props.disableReactTree,
      disableReactTree = _props$disableReactTr === void 0 ? false : _props$disableReactTr,
      _props$mouseEvent = props.mouseEvent,
      mouseEvent = _props$mouseEvent === void 0 ? 'onClick' : _props$mouseEvent,
      onClickAway = props.onClickAway,
      _props$touchEvent = props.touchEvent,
      touchEvent = _props$touchEvent === void 0 ? 'onTouchEnd' : _props$touchEvent;
  var movedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](null);
  var activatedRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  var syntheticEventRef = react__WEBPACK_IMPORTED_MODULE_0__["useRef"](false);
  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    // Ensure that this component is not "activated" synchronously.
    // https://github.com/facebook/react/issues/20074
    setTimeout(function () {
      activatedRef.current = true;
    }, 0);
    return function () {
      activatedRef.current = false;
    };
  }, []); // can be removed once we drop support for non ref forwarding class components

  var handleOwnRef = react__WEBPACK_IMPORTED_MODULE_0__["useCallback"](function (instance) {
    // #StrictMode ready
    nodeRef.current = react_dom__WEBPACK_IMPORTED_MODULE_1__["findDOMNode"](instance);
  }, []);
  var handleRef = Object(_utils_useForkRef__WEBPACK_IMPORTED_MODULE_4__["default"])(children.ref, handleOwnRef); // The handler doesn't take event.defaultPrevented into account:
  //
  // event.preventDefault() is meant to stop default behaviours like
  // clicking a checkbox to check it, hitting a button to submit a form,
  // and hitting left arrow to move the cursor in a text input etc.
  // Only special HTML elements have these default behaviors.

  var handleClickAway = Object(_utils_useEventCallback__WEBPACK_IMPORTED_MODULE_5__["default"])(function (event) {
    // Given developers can stop the propagation of the synthetic event,
    // we can only be confident with a positive value.
    var insideReactTree = syntheticEventRef.current;
    syntheticEventRef.current = false; // 1. IE 11 support, which trigger the handleClickAway even after the unbind
    // 2. The child might render null.
    // 3. Behave like a blur listener.

    if (!activatedRef.current || !nodeRef.current || clickedRootScrollbar(event)) {
      return;
    } // Do not act if user performed touchmove


    if (movedRef.current) {
      movedRef.current = false;
      return;
    }

    var insideDOM; // If not enough, can use https://github.com/DieterHolvoet/event-propagation-path/blob/master/propagationPath.js

    if (event.composedPath) {
      insideDOM = event.composedPath().indexOf(nodeRef.current) > -1;
    } else {
      // TODO v6 remove dead logic https://caniuse.com/#search=composedPath.
      var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__["default"])(nodeRef.current);
      insideDOM = !doc.documentElement.contains(event.target) || nodeRef.current.contains(event.target);
    }

    if (!insideDOM && (disableReactTree || !insideReactTree)) {
      onClickAway(event);
    }
  }); // Keep track of mouse/touch events that bubbled up through the portal.

  var createHandleSynthetic = function createHandleSynthetic(handlerName) {
    return function (event) {
      syntheticEventRef.current = true;
      var childrenPropsHandler = children.props[handlerName];

      if (childrenPropsHandler) {
        childrenPropsHandler(event);
      }
    };
  };

  var childrenProps = {
    ref: handleRef
  };

  if (touchEvent !== false) {
    childrenProps[touchEvent] = createHandleSynthetic(touchEvent);
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (touchEvent !== false) {
      var mappedTouchEvent = mapEventPropToEvent(touchEvent);
      var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__["default"])(nodeRef.current);

      var handleTouchMove = function handleTouchMove() {
        movedRef.current = true;
      };

      doc.addEventListener(mappedTouchEvent, handleClickAway);
      doc.addEventListener('touchmove', handleTouchMove);
      return function () {
        doc.removeEventListener(mappedTouchEvent, handleClickAway);
        doc.removeEventListener('touchmove', handleTouchMove);
      };
    }

    return undefined;
  }, [handleClickAway, touchEvent]);

  if (mouseEvent !== false) {
    childrenProps[mouseEvent] = createHandleSynthetic(mouseEvent);
  }

  react__WEBPACK_IMPORTED_MODULE_0__["useEffect"](function () {
    if (mouseEvent !== false) {
      var mappedMouseEvent = mapEventPropToEvent(mouseEvent);
      var doc = Object(_utils_ownerDocument__WEBPACK_IMPORTED_MODULE_3__["default"])(nodeRef.current);
      doc.addEventListener(mappedMouseEvent, handleClickAway);
      return function () {
        doc.removeEventListener(mappedMouseEvent, handleClickAway);
      };
    }

    return undefined;
  }, [handleClickAway, mouseEvent]);
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["cloneElement"](children, childrenProps));
}

 true ? ClickAwayListener.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The wrapped element.
   */
  children: _material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["elementAcceptingRef"].isRequired,

  /**
   * If `true`, the React tree is ignored and only the DOM tree is considered.
   * This prop changes how portaled elements are handled.
   */
  disableReactTree: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.bool,

  /**
   * The mouse event to listen to. You can disable the listener by providing `false`.
   */
  mouseEvent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['onClick', 'onMouseDown', 'onMouseUp', false]),

  /**
   * Callback fired when a "click away" event is detected.
   */
  onClickAway: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,

  /**
   * The touch event to listen to. You can disable the listener by providing `false`.
   */
  touchEvent: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.oneOf(['onTouchEnd', 'onTouchStart', false])
} : undefined;

if (true) {
  // eslint-disable-next-line
  ClickAwayListener['propTypes' + ''] = Object(_material_ui_utils__WEBPACK_IMPORTED_MODULE_6__["exactProp"])(ClickAwayListener.propTypes);
}

/* harmony default export */ __webpack_exports__["default"] = (ClickAwayListener);

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/ClickAwayListener/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ClickAwayListener__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/ClickAwayListener.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _ClickAwayListener__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/notistack/dist/notistack.esm.js":
/*!******************************************************!*\
  !*** ./node_modules/notistack/dist/notistack.esm.js ***!
  \******************************************************/
/*! exports provided: SnackbarContent, SnackbarProvider, useSnackbar, withSnackbar */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarContent", function() { return SnackbarContent$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarProvider", function() { return SnackbarProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "useSnackbar", function() { return useSnackbar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "withSnackbar", function() { return withSnackbar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/Slide */ "./node_modules/@material-ui/core/esm/Slide/index.js");
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");
/* harmony import */ var _material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/ClickAwayListener */ "./node_modules/@material-ui/core/esm/ClickAwayListener/index.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! hoist-non-react-statics */ "./node_modules/hoist-non-react-statics/dist/hoist-non-react-statics.cjs.js");
/* harmony import */ var hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8__);










function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

var SnackbarContext = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createContext();

var allClasses = {
  mui: {
    root: {},
    anchorOriginTopCenter: {},
    anchorOriginBottomCenter: {},
    anchorOriginTopRight: {},
    anchorOriginBottomRight: {},
    anchorOriginTopLeft: {},
    anchorOriginBottomLeft: {}
  },
  container: {
    containerRoot: {},
    containerAnchorOriginTopCenter: {},
    containerAnchorOriginBottomCenter: {},
    containerAnchorOriginTopRight: {},
    containerAnchorOriginBottomRight: {},
    containerAnchorOriginTopLeft: {},
    containerAnchorOriginBottomLeft: {}
  }
};
var MESSAGES = {
  NO_PERSIST_ALL: 'WARNING - notistack: Reached maxSnack while all enqueued snackbars have \'persist\' flag. Notistack will dismiss the oldest snackbar anyway to allow other ones in the queue to be presented.'
};
var SNACKBAR_INDENTS = {
  view: {
    "default": 20,
    dense: 4
  },
  snackbar: {
    "default": 6,
    dense: 2
  }
};
var DEFAULTS = {
  maxSnack: 3,
  dense: false,
  hideIconVariant: false,
  variant: 'default',
  autoHideDuration: 5000,
  anchorOrigin: {
    vertical: 'bottom',
    horizontal: 'left'
  },
  TransitionComponent: _material_ui_core_Slide__WEBPACK_IMPORTED_MODULE_3__["default"],
  transitionDuration: {
    enter: 225,
    exit: 195
  }
};
var capitalise = function capitalise(text) {
  return text.charAt(0).toUpperCase() + text.slice(1);
};
var originKeyExtractor = function originKeyExtractor(anchor) {
  return "" + capitalise(anchor.vertical) + capitalise(anchor.horizontal);
};
/**
 * Omit SnackbarContainer class keys that are not needed for SnackbarItem
 */

var omitContainerKeys = function omitContainerKeys(classes) {
  return (// @ts-ignore
    Object.keys(classes).filter(function (key) {
      return !allClasses.container[key];
    }).reduce(function (obj, key) {
      var _extends2;

      return _extends({}, obj, (_extends2 = {}, _extends2[key] = classes[key], _extends2));
    }, {})
  );
};
var REASONS = {
  TIMEOUT: 'timeout',
  CLICKAWAY: 'clickaway',
  MAXSNACK: 'maxsnack',
  INSTRUCTED: 'instructed'
};
/** Tranforms classes name */

var transformer = {
  toContainerAnchorOrigin: function toContainerAnchorOrigin(origin) {
    return "anchorOrigin" + origin;
  },
  toAnchorOrigin: function toAnchorOrigin(_ref) {
    var vertical = _ref.vertical,
        horizontal = _ref.horizontal;
    return "anchorOrigin" + capitalise(vertical) + capitalise(horizontal);
  },
  toVariant: function toVariant(variant) {
    return "variant" + capitalise(variant);
  }
};
var isDefined = function isDefined(value) {
  return !!value || value === 0;
};

var numberOrNull = function numberOrNull(numberish) {
  return typeof numberish === 'number' || numberish === null;
}; // @ts-ignore


var merge = function merge(options, props, defaults) {
  return function (name) {
    if (name === 'autoHideDuration') {
      if (numberOrNull(options.autoHideDuration)) return options.autoHideDuration;
      if (numberOrNull(props.autoHideDuration)) return props.autoHideDuration;
      return DEFAULTS.autoHideDuration;
    }

    return options[name] || props[name] || defaults[name];
  };
};
function objectMerge(options, props, defaults) {
  if (options === void 0) {
    options = {};
  }

  if (props === void 0) {
    props = {};
  }

  if (defaults === void 0) {
    defaults = {};
  }

  return _extends({}, defaults, {}, props, {}, options);
}

var styles = function styles(theme) {
  var _root;

  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createStyles"])({
    root: (_root = {
      display: 'flex',
      flexWrap: 'wrap',
      flexGrow: 1
    }, _root[theme.breakpoints.up('sm')] = {
      flexGrow: 'initial',
      minWidth: 288
    }, _root)
  });
};

var SnackbarContent = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (_ref, ref) {
  var classes = _ref.classes,
      className = _ref.className,
      props = _objectWithoutPropertiesLoose(_ref, ["classes", "className"]);

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
    ref: ref,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, className)
  }, props));
});
var SnackbarContent$1 = /*#__PURE__*/Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles)(SnackbarContent);

var DIRECTION = {
  right: 'left',
  left: 'right',
  bottom: 'up',
  top: 'down'
};
var getTransitionDirection = function getTransitionDirection(anchorOrigin) {
  if (anchorOrigin.horizontal !== 'center') {
    return DIRECTION[anchorOrigin.horizontal];
  }

  return DIRECTION[anchorOrigin.vertical];
};
/**
 * Omit all class keys except what we need for collapse component
 */

var omitNonCollapseKeys = function omitNonCollapseKeys(classes, dense) {
  return {
    container: classes.collapseContainer,
    wrapper: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.collapseWrapper, dense && classes.collapseWrapperDense),
    wrapperInner: classes.collapseWrapperInner
  };
};

var CheckIcon = function CheckIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41\n        10.59L10 14.17L17.59 6.58L19 8L10 17Z"
  }));
};

var WarningIcon = function WarningIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z"
  }));
};

var ErrorIcon = function ErrorIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,\n        6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,\n        13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z"
  }));
};

var InfoIcon = function InfoIcon(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_SvgIcon__WEBPACK_IMPORTED_MODULE_6__["default"], Object.assign({}, props), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("path", {
    d: "M13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,\n        0 22,12A10,10 0 0,0 12,2Z"
  }));
};

var iconStyles = {
  fontSize: 20,
  marginInlineEnd: 8
};
var defaultIconVariants = {
  "default": undefined,
  success: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(CheckIcon, {
    style: iconStyles
  }),
  warning: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(WarningIcon, {
    style: iconStyles
  }),
  error: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ErrorIcon, {
    style: iconStyles
  }),
  info: /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(InfoIcon, {
    style: iconStyles
  })
};

/**
 * @link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/createChainedFunction.js
 */
function createChainedFunction(funcs, extraArg) {
  return funcs.reduce(function (acc, func) {
    if (func == null) return acc;

    if (true) {
      if (typeof func !== 'function') {
        // eslint-disable-next-line no-console
        console.error('Invalid Argument Type. must only provide functions, undefined, or null.');
      }
    }

    return function chainedFunction() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      var argums = [].concat(args);

      if (extraArg && argums.indexOf(extraArg) === -1) {
        argums.push(extraArg);
      }

      acc.apply(this, argums);
      func.apply(this, argums);
    };
  }, function () {});
}

/**
 * @link https://github.com/mui-org/material-ui/blob/master/packages/material-ui/src/utils/useEventCallback.js
 */
var useEnhancedEffect = typeof window !== 'undefined' ? react__WEBPACK_IMPORTED_MODULE_0__["useLayoutEffect"] : react__WEBPACK_IMPORTED_MODULE_0__["useEffect"];
function useEventCallback(fn) {
  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(fn);
  useEnhancedEffect(function () {
    ref.current = fn;
  });
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    return (ref.current).apply(void 0, arguments);
  }, []);
}

var Snackbar = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"])(function (props, ref) {
  var children = props.children,
      autoHideDuration = props.autoHideDuration,
      ClickAwayListenerProps = props.ClickAwayListenerProps,
      _props$disableWindowB = props.disableWindowBlurListener,
      disableWindowBlurListener = _props$disableWindowB === void 0 ? false : _props$disableWindowB,
      onClose = props.onClose,
      onMouseEnter = props.onMouseEnter,
      onMouseLeave = props.onMouseLeave,
      open = props.open,
      resumeHideDuration = props.resumeHideDuration,
      other = _objectWithoutPropertiesLoose(props, ["children", "autoHideDuration", "ClickAwayListenerProps", "disableWindowBlurListener", "onClose", "onMouseEnter", "onMouseLeave", "open", "resumeHideDuration"]);

  var timerAutoHide = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  var handleClose = useEventCallback(function () {
    if (onClose) {
      onClose.apply(void 0, arguments);
    }
  });
  var setAutoHideTimer = useEventCallback(function (autoHideDurationParam) {
    if (!onClose || autoHideDurationParam == null) {
      return;
    }

    clearTimeout(timerAutoHide.current);
    timerAutoHide.current = setTimeout(function () {
      handleClose(null, REASONS.TIMEOUT);
    }, autoHideDurationParam);
  });
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (open) {
      setAutoHideTimer(autoHideDuration);
    }

    return function () {
      clearTimeout(timerAutoHide.current);
    };
  }, [open, autoHideDuration, setAutoHideTimer]);
  /**
   * Pause the timer when the user is interacting with the Snackbar
   * or when the user hide the window.
   */

  var handlePause = function handlePause() {
    clearTimeout(timerAutoHide.current);
  };
  /**
   * Restart the timer when the user is no longer interacting with the Snackbar
   * or when the window is shown back.
   */


  var handleResume = Object(react__WEBPACK_IMPORTED_MODULE_0__["useCallback"])(function () {
    if (autoHideDuration != null) {
      setAutoHideTimer(resumeHideDuration != null ? resumeHideDuration : autoHideDuration * 0.5);
    }
  }, [autoHideDuration, resumeHideDuration, setAutoHideTimer]);

  var handleMouseEnter = function handleMouseEnter(event) {
    if (onMouseEnter) {
      onMouseEnter(event);
    }

    handlePause();
  };

  var handleMouseLeave = function handleMouseLeave(event) {
    if (onMouseLeave) {
      onMouseLeave(event);
    }

    handleResume();
  };

  var handleClickAway = function handleClickAway(event) {
    if (onClose) {
      onClose(event, REASONS.CLICKAWAY);
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    if (!disableWindowBlurListener && open) {
      window.addEventListener('focus', handleResume);
      window.addEventListener('blur', handlePause);
      return function () {
        window.removeEventListener('focus', handleResume);
        window.removeEventListener('blur', handlePause);
      };
    }

    return undefined;
  }, [disableWindowBlurListener, handleResume, open]);
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_material_ui_core_ClickAwayListener__WEBPACK_IMPORTED_MODULE_7__["default"], _extends({
    onClickAway: handleClickAway
  }, ClickAwayListenerProps), Object(react__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", _extends({
    onMouseEnter: handleMouseEnter,
    onMouseLeave: handleMouseLeave,
    ref: ref
  }, other), children));
});

var styles$1 = function styles(theme) {
  var _collapseContainer;

  // @ts-ignore
  var mode = theme.palette.mode || theme.palette.type;
  var backgroundColor = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["emphasize"])(theme.palette.background["default"], mode === 'light' ? 0.8 : 0.98);
  return Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["createStyles"])(_extends({}, allClasses.mui, {
    lessPadding: {
      paddingLeft: 8 * 2.5
    },
    variantSuccess: {
      backgroundColor: '#43a047 !important',
      color: '#fff !important'
    },
    variantError: {
      backgroundColor: '#d32f2f !important',
      color: '#fff !important'
    },
    variantInfo: {
      backgroundColor: '#2196f3 !important',
      color: '#fff !important'
    },
    variantWarning: {
      backgroundColor: '#ff9800 !important',
      color: '#fff !important'
    },
    contentRoot: _extends({}, theme.typography.body2, {
      backgroundColor: backgroundColor,
      color: theme.palette.getContrastText(backgroundColor),
      alignItems: 'center',
      padding: '6px 16px',
      borderRadius: '4px',
      boxShadow: '0px 3px 5px -1px rgba(0,0,0,0.2),0px 6px 10px 0px rgba(0,0,0,0.14),0px 1px 18px 0px rgba(0,0,0,0.12)'
    }),
    message: {
      display: 'flex',
      alignItems: 'center',
      padding: '8px 0'
    },
    action: {
      display: 'flex',
      alignItems: 'center',
      marginLeft: 'auto',
      paddingLeft: 16,
      marginRight: -8
    },
    wrappedRoot: {
      position: 'relative',
      transform: 'translateX(0)',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    collapseContainer: (_collapseContainer = {}, _collapseContainer[theme.breakpoints.down('xs')] = {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1)
    }, _collapseContainer),
    collapseWrapper: {
      transition: theme.transitions.create(['margin-bottom'], {
        easing: 'ease'
      }),
      marginTop: SNACKBAR_INDENTS.snackbar["default"],
      marginBottom: SNACKBAR_INDENTS.snackbar["default"]
    },
    collapseWrapperDense: {
      marginTop: SNACKBAR_INDENTS.snackbar.dense,
      marginBottom: SNACKBAR_INDENTS.snackbar.dense
    },
    collapseWrapperInner: {
      width: 'auto'
    }
  }));
};

var SnackbarItem = function SnackbarItem(_ref) {
  var classes = _ref.classes,
      props = _objectWithoutPropertiesLoose(_ref, ["classes"]);

  var timeout = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true),
      collapsed = _useState[0],
      setCollapsed = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    return function () {
      if (timeout.current) {
        clearTimeout(timeout.current);
      }
    };
  }, []);
  var handleClose = createChainedFunction([props.snack.onClose, props.onClose], props.snack.key);

  var handleEntered = function handleEntered() {
    if (props.snack.requestClose) {
      handleClose(null, REASONS.INSTRCUTED);
    }
  };

  var handleExitedScreen = function handleExitedScreen() {
    timeout.current = setTimeout(function () {
      setCollapsed(!collapsed);
    }, 125);
  };

  var style = props.style,
      dense = props.dense,
      otherAriaAttributes = props.ariaAttributes,
      otherClassName = props.className,
      hideIconVariant = props.hideIconVariant,
      iconVariant = props.iconVariant,
      snack = props.snack,
      otherAction = props.action,
      otherContent = props.content,
      otherTranComponent = props.TransitionComponent,
      otherTranProps = props.TransitionProps,
      otherTranDuration = props.transitionDuration,
      other = _objectWithoutPropertiesLoose(props, ["style", "dense", "ariaAttributes", "className", "hideIconVariant", "iconVariant", "snack", "action", "content", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]);

  var key = snack.key,
      open = snack.open,
      singleClassName = snack.className,
      variant = snack.variant,
      singleContent = snack.content,
      singleAction = snack.action,
      singleAriaAttributes = snack.ariaAttributes,
      anchorOrigin = snack.anchorOrigin,
      snackMessage = snack.message,
      singleTranComponent = snack.TransitionComponent,
      singleTranProps = snack.TransitionProps,
      singleTranDuration = snack.transitionDuration,
      singleSnackProps = _objectWithoutPropertiesLoose(snack, ["persist", "key", "open", "entered", "requestClose", "className", "variant", "content", "action", "ariaAttributes", "anchorOrigin", "message", "TransitionComponent", "TransitionProps", "transitionDuration", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting"]);

  var icon = _extends({}, defaultIconVariants, {}, iconVariant)[variant];

  var ariaAttributes = _extends({
    'aria-describedby': 'notistack-snackbar'
  }, objectMerge(singleAriaAttributes, otherAriaAttributes));

  var TransitionComponent = singleTranComponent || otherTranComponent || DEFAULTS.TransitionComponent;
  var transitionDuration = objectMerge(singleTranDuration, otherTranDuration, DEFAULTS.transitionDuration);

  var transitionProps = _extends({
    direction: getTransitionDirection(anchorOrigin)
  }, objectMerge(singleTranProps, otherTranProps));

  var action = singleAction || otherAction;

  if (typeof action === 'function') {
    action = action(key);
  }

  var content = singleContent || otherContent;

  if (typeof content === 'function') {
    content = content(key, snack.message);
  }

  var callbacks = ['onEnter', 'onEntering', 'onEntered', 'onExit', 'onExiting', 'onExited'].reduce(function (acc, cbName) {
    var _extends2;

    return _extends({}, acc, (_extends2 = {}, _extends2[cbName] = createChainedFunction([props.snack[cbName], props[cbName]], props.snack.key), _extends2));
  }, {});
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_material_ui_core_Collapse__WEBPACK_IMPORTED_MODULE_5__["default"], {
    unmountOnExit: true,
    timeout: 175,
    "in": collapsed,
    classes: omitNonCollapseKeys(classes, dense),
    onExited: callbacks.onExited
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Snackbar, Object.assign({}, other, singleSnackProps, {
    open: open,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, classes.wrappedRoot, classes[transformer.toAnchorOrigin(anchorOrigin)]),
    onClose: handleClose
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TransitionComponent, Object.assign({
    appear: true,
    "in": open,
    timeout: transitionDuration
  }, transitionProps, {
    onExit: callbacks.onExit,
    onExiting: callbacks.onExiting,
    onExited: handleExitedScreen,
    onEnter: callbacks.onEnter,
    onEntering: callbacks.onEntering,
    // order matters. first callbacks.onEntered to set entered: true,
    // then handleEntered to check if there's a request for closing
    onEntered: createChainedFunction([callbacks.onEntered, handleEntered])
  }), content || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SnackbarContent$1, Object.assign({}, ariaAttributes, {
    role: "alert",
    style: style,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.contentRoot, classes[transformer.toVariant(variant)], otherClassName, singleClassName, !hideIconVariant && icon && classes.lessPadding)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    id: ariaAttributes['aria-describedby'],
    className: classes.message
  }, !hideIconVariant ? icon : null, snackMessage), action && react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: classes.action
  }, action)))));
};

var SnackbarItem$1 = /*#__PURE__*/Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["withStyles"])(styles$1)(SnackbarItem);

var useStyle = /*#__PURE__*/Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_4__["makeStyles"])(function (theme) {
  var _root, _center;

  return {
    root: (_root = {
      boxSizing: 'border-box',
      display: 'flex',
      maxHeight: '100%',
      maxWidth: '100%',
      position: 'fixed',
      flexDirection: 'column',
      zIndex: theme.zIndex.snackbar,
      height: 'auto',
      width: 'auto',
      minWidth: 288,
      transition: theme.transitions.create(['top', 'right', 'bottom', 'left'], {
        easing: 'ease'
      })
    }, _root[theme.breakpoints.down('xs')] = {
      left: '0 !important',
      right: '0 !important',
      width: '100%'
    }, _root),
    reverseColumns: {
      flexDirection: 'column-reverse'
    },
    top: {
      top: SNACKBAR_INDENTS.view["default"] - SNACKBAR_INDENTS.snackbar["default"]
    },
    topDense: {
      top: SNACKBAR_INDENTS.view.dense - SNACKBAR_INDENTS.snackbar.dense
    },
    bottom: {
      bottom: SNACKBAR_INDENTS.view["default"] - SNACKBAR_INDENTS.snackbar["default"]
    },
    bottomDense: {
      bottom: SNACKBAR_INDENTS.view.dense - SNACKBAR_INDENTS.snackbar.dense
    },
    left: {
      left: SNACKBAR_INDENTS.view["default"]
    },
    leftDense: {
      left: SNACKBAR_INDENTS.view.dense
    },
    right: {
      right: SNACKBAR_INDENTS.view["default"]
    },
    rightDense: {
      right: SNACKBAR_INDENTS.view.dense
    },
    center: (_center = {
      left: '50%',
      transform: 'translateX(-50%)'
    }, _center[theme.breakpoints.down('xs')] = {
      transform: 'translateX(0)'
    }, _center)
  };
});

var SnackbarContainer = function SnackbarContainer(props) {
  var classes = useStyle();

  var className = props.className,
      anchorOrigin = props.anchorOrigin,
      dense = props.dense,
      other = _objectWithoutPropertiesLoose(props, ["className", "anchorOrigin", "dense"]);

  var combinedClassname = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, classes[anchorOrigin.vertical], classes[anchorOrigin.horizontal], // @ts-ignore
  classes["" + anchorOrigin.vertical + (dense ? 'Dense' : '')], // @ts-ignore
  classes["" + anchorOrigin.horizontal + (dense ? 'Dense' : '')], className, anchorOrigin.vertical === 'bottom' && classes.reverseColumns);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", Object.assign({
    className: combinedClassname
  }, other));
};

var SnackbarContainer$1 = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.memo(SnackbarContainer);

/* eslint-disable */
var __DEV__ = "development" !== 'production';

var warning = (function (message) {
  if (!__DEV__) return;

  if (typeof console !== 'undefined') {
    console.error(message);
  }

  try {
    throw new Error(message);
  } catch (x) {}
});

var SnackbarProvider = /*#__PURE__*/function (_Component) {
  _inheritsLoose(SnackbarProvider, _Component);

  function SnackbarProvider(props) {
    var _this;

    _this = _Component.call(this, props) || this;
    /**
     * Adds a new snackbar to the queue to be presented.
     * Returns generated or user defined key referencing the new snackbar or null
     */

    _this.enqueueSnackbar = function (message, opts) {
      if (opts === void 0) {
        opts = {};
      }

      var _opts = opts,
          key = _opts.key,
          preventDuplicate = _opts.preventDuplicate,
          options = _objectWithoutPropertiesLoose(_opts, ["key", "preventDuplicate"]);

      var hasSpecifiedKey = isDefined(key);
      var id = hasSpecifiedKey ? key : new Date().getTime() + Math.random();
      var merger = merge(options, _this.props, DEFAULTS);

      var snack = _extends({
        key: id
      }, options, {
        message: message,
        open: true,
        entered: false,
        requestClose: false,
        variant: merger('variant'),
        anchorOrigin: merger('anchorOrigin'),
        autoHideDuration: merger('autoHideDuration')
      });

      if (options.persist) {
        snack.autoHideDuration = undefined;
      }

      _this.setState(function (state) {
        if (preventDuplicate === undefined && _this.props.preventDuplicate || preventDuplicate) {
          var compareFunction = function compareFunction(item) {
            return hasSpecifiedKey ? item.key === key : item.message === message;
          };

          var inQueue = state.queue.findIndex(compareFunction) > -1;
          var inView = state.snacks.findIndex(compareFunction) > -1;

          if (inQueue || inView) {
            return state;
          }
        }

        return _this.handleDisplaySnack(_extends({}, state, {
          queue: [].concat(state.queue, [snack])
        }));
      });

      return id;
    };
    /**
     * Reducer: Display snack if there's space for it. Otherwise, immediately
     * begin dismissing the oldest message to start showing the new one.
     */


    _this.handleDisplaySnack = function (state) {
      var snacks = state.snacks;

      if (snacks.length >= _this.maxSnack) {
        return _this.handleDismissOldest(state);
      }

      return _this.processQueue(state);
    };
    /**
     * Reducer: Display items (notifications) in the queue if there's space for them.
     */


    _this.processQueue = function (state) {
      var queue = state.queue,
          snacks = state.snacks;

      if (queue.length > 0) {
        return _extends({}, state, {
          snacks: [].concat(snacks, [queue[0]]),
          queue: queue.slice(1, queue.length)
        });
      }

      return state;
    };
    /**
     * Reducer: Hide oldest snackbar on the screen because there exists a new one which we have to display.
     * (ignoring the one with 'persist' flag. i.e. explicitly told by user not to get dismissed).
     *
     * Note 1: If there is already a message leaving the screen, no new messages are dismissed.
     * Note 2: If the oldest message has not yet entered the screen, only a request to close the
     *         snackbar is made. Once it entered the screen, it will be immediately dismissed.
     */


    _this.handleDismissOldest = function (state) {
      if (state.snacks.some(function (item) {
        return !item.open || item.requestClose;
      })) {
        return state;
      }

      var popped = false;
      var ignore = false;
      var persistentCount = state.snacks.reduce(function (acc, current) {
        return acc + (current.open && current.persist ? 1 : 0);
      }, 0);

      if (persistentCount === _this.maxSnack) {
         true ? warning(MESSAGES.NO_PERSIST_ALL) : undefined;
        ignore = true;
      }

      var snacks = state.snacks.map(function (item) {
        if (!popped && (!item.persist || ignore)) {
          popped = true;

          if (!item.entered) {
            return _extends({}, item, {
              requestClose: true
            });
          }

          if (item.onClose) item.onClose(null, REASONS.MAXSNACK, item.key);
          if (_this.props.onClose) _this.props.onClose(null, REASONS.MAXSNACK, item.key);
          return _extends({}, item, {
            open: false
          });
        }

        return _extends({}, item);
      });
      return _extends({}, state, {
        snacks: snacks
      });
    };
    /**
     * Set the entered state of the snackbar with the given key.
     */


    _this.handleEnteredSnack = function (node, isAppearing, key) {
      if (!isDefined(key)) {
        throw new Error('handleEnteredSnack Cannot be called with undefined key');
      }

      _this.setState(function (_ref) {
        var snacks = _ref.snacks;
        return {
          snacks: snacks.map(function (item) {
            return item.key === key ? _extends({}, item, {
              entered: true
            }) : _extends({}, item);
          })
        };
      });
    };
    /**
     * Hide a snackbar after its timeout.
     */


    _this.handleCloseSnack = function (event, reason, key) {
      // should not use createChainedFunction for onClose.
      // because this.closeSnackbar called this function
      if (_this.props.onClose) {
        _this.props.onClose(event, reason, key);
      }

      if (reason === REASONS.CLICKAWAY) return;
      var shouldCloseAll = key === undefined;

      _this.setState(function (_ref2) {
        var snacks = _ref2.snacks,
            queue = _ref2.queue;
        return {
          snacks: snacks.map(function (item) {
            if (!shouldCloseAll && item.key !== key) {
              return _extends({}, item);
            }

            return item.entered ? _extends({}, item, {
              open: false
            }) : _extends({}, item, {
              requestClose: true
            });
          }),
          queue: queue.filter(function (item) {
            return item.key !== key;
          })
        };
      });
    };
    /**
     * Close snackbar with the given key
     */


    _this.closeSnackbar = function (key) {
      // call individual snackbar onClose callback passed through options parameter
      var toBeClosed = _this.state.snacks.find(function (item) {
        return item.key === key;
      });

      if (isDefined(key) && toBeClosed && toBeClosed.onClose) {
        toBeClosed.onClose(null, REASONS.INSTRUCTED, key);
      }

      _this.handleCloseSnack(null, REASONS.INSTRUCTED, key);
    };
    /**
     * When we set open attribute of a snackbar to false (i.e. after we hide a snackbar),
     * it leaves the screen and immediately after leaving animation is done, this method
     * gets called. We remove the hidden snackbar from state and then display notifications
     * waiting in the queue (if any). If after this process the queue is not empty, the
     * oldest message is dismissed.
     */
    // @ts-ignore


    _this.handleExitedSnack = function (event, key1, key2) {
      var key = key1 || key2;

      if (!isDefined(key)) {
        throw new Error('handleExitedSnack Cannot be called with undefined key');
      }

      _this.setState(function (state) {
        var newState = _this.processQueue(_extends({}, state, {
          snacks: state.snacks.filter(function (item) {
            return item.key !== key;
          })
        }));

        if (newState.queue.length === 0) {
          return newState;
        }

        return _this.handleDismissOldest(newState);
      });
    };

    _this.state = {
      snacks: [],
      queue: [],
      contextValue: {
        enqueueSnackbar: _this.enqueueSnackbar,
        closeSnackbar: _this.closeSnackbar
      }
    };
    return _this;
  }

  var _proto = SnackbarProvider.prototype;

  _proto.render = function render() {
    var _this2 = this;

    var contextValue = this.state.contextValue;

    var _this$props = this.props,
        iconVariant = _this$props.iconVariant,
        _this$props$dense = _this$props.dense,
        dense = _this$props$dense === void 0 ? DEFAULTS.dense : _this$props$dense,
        _this$props$hideIconV = _this$props.hideIconVariant,
        hideIconVariant = _this$props$hideIconV === void 0 ? DEFAULTS.hideIconVariant : _this$props$hideIconV,
        domRoot = _this$props.domRoot,
        children = _this$props.children,
        _this$props$classes = _this$props.classes,
        classes = _this$props$classes === void 0 ? {} : _this$props$classes,
        props = _objectWithoutPropertiesLoose(_this$props, ["maxSnack", "preventDuplicate", "variant", "anchorOrigin", "iconVariant", "dense", "hideIconVariant", "domRoot", "children", "classes"]);

    var categ = this.state.snacks.reduce(function (acc, current) {
      var _extends2;

      var category = originKeyExtractor(current.anchorOrigin);
      var existingOfCategory = acc[category] || [];
      return _extends({}, acc, (_extends2 = {}, _extends2[category] = [].concat(existingOfCategory, [current]), _extends2));
    }, {});
    var snackbars = Object.keys(categ).map(function (origin) {
      var snacks = categ[origin];
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SnackbarContainer$1, {
        key: origin,
        dense: dense,
        anchorOrigin: snacks[0].anchorOrigin,
        className: Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.containerRoot, classes[transformer.toContainerAnchorOrigin(origin)])
      }, snacks.map(function (snack) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SnackbarItem$1, Object.assign({}, props, {
          key: snack.key,
          snack: snack,
          dense: dense,
          iconVariant: iconVariant,
          hideIconVariant: hideIconVariant,
          classes: omitContainerKeys(classes),
          onClose: _this2.handleCloseSnack,
          onExited: createChainedFunction([_this2.handleExitedSnack, _this2.props.onExited]),
          onEntered: createChainedFunction([_this2.handleEnteredSnack, _this2.props.onEntered])
        }));
      }));
    });
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SnackbarContext.Provider, {
      value: contextValue
    }, children, domRoot ? Object(react_dom__WEBPACK_IMPORTED_MODULE_1__["createPortal"])(snackbars, domRoot) : snackbars);
  };

  _createClass(SnackbarProvider, [{
    key: "maxSnack",
    get: function get() {
      return this.props.maxSnack || DEFAULTS.maxSnack;
    }
  }]);

  return SnackbarProvider;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

// https://github.com/JamesMGreene/Function.name/blob/58b314d4a983110c3682f1228f845d39ccca1817/Function.name.js#L3
var fnNameMatchRegex = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;

var getFunctionName = function getFunctionName(fn) {
  var match = ("" + fn).match(fnNameMatchRegex);
  var name = match && match[1];
  return name || '';
};
/**
 * @param {function} Component
 * @param {string} fallback
 * @returns {string | undefined}
 */


var getFunctionComponentName = function getFunctionComponentName(Component, fallback) {
  if (fallback === void 0) {
    fallback = '';
  }

  return Component.displayName || Component.name || getFunctionName(Component) || fallback;
};

var getWrappedName = function getWrappedName(outerType, innerType, wrapperName) {
  var functionName = getFunctionComponentName(innerType);
  return outerType.displayName || (functionName !== '' ? wrapperName + "(" + functionName + ")" : wrapperName);
};
/** 
 * From react-is
 * @link https://github.com/facebook/react/blob/master/packages/shared/ReactSymbols.js
 */


var ForwardRef = function ForwardRef() {
  var symbolFor = typeof Symbol === 'function' && Symbol["for"];
  return symbolFor ? symbolFor('react.forward_ref') : 0xead0;
};
/**
 * https://github.com/facebook/react/blob/769b1f270e1251d9dbdce0fcbd9e92e502d059b8/packages/shared/getComponentName.js
 *
 * @param {React.ReactType} Component
 * @returns {string | undefined}
 */


var getDisplayName = (function (Component) {
  if (Component == null) {
    return undefined;
  }

  if (typeof Component === 'string') {
    return Component;
  }

  if (typeof Component === 'function') {
    return getFunctionComponentName(Component, 'Component');
  }

  if (typeof Component === 'object') {
    switch (Component.$$typeof) {
      case ForwardRef():
        return getWrappedName(Component, Component.render, 'ForwardRef');

      default:
        return undefined;
    }
  }

  return undefined;
});

var withSnackbar = function withSnackbar(Component) {
  var WrappedComponent = react__WEBPACK_IMPORTED_MODULE_0___default.a.forwardRef(function (props, ref) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(SnackbarContext.Consumer, null, function (context) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Component, _extends({}, props, {
        ref: ref,
        enqueueSnackbar: context.enqueueSnackbar,
        closeSnackbar: context.closeSnackbar
      }));
    });
  });

  if (true) {
    WrappedComponent.displayName = "WithSnackbar(" + getDisplayName(Component) + ")";
  }

  hoist_non_react_statics__WEBPACK_IMPORTED_MODULE_8___default()(WrappedComponent, Component);
  return WrappedComponent;
};

var useSnackbar = (function () {
  return Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(SnackbarContext);
});


//# sourceMappingURL=notistack.esm.js.map


/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyApp; });
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/CssBaseline */ "./node_modules/@material-ui/core/esm/CssBaseline/index.js");
/* harmony import */ var _src_theme__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../src/theme */ "./src/theme.js");
/* harmony import */ var _services_Auth_context__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/Auth.context */ "./services/Auth.context.js");
/* harmony import */ var _services_Product_context__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../services/Product.context */ "./services/Product.context.js");
/* harmony import */ var _services_Promo_context__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../services/Promo.context */ "./services/Promo.context.js");
/* harmony import */ var _services_Cart_context__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/Cart.context */ "./services/Cart.context.js");
/* harmony import */ var notistack__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! notistack */ "./node_modules/notistack/dist/notistack.esm.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\_app.js",
    _s = $RefreshSig$();

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }












function MyApp(props) {
  _s();

  var Component = props.Component,
      pageProps = props.pageProps;
  react__WEBPACK_IMPORTED_MODULE_2___default.a.useEffect(function () {
    // Remove the server-side injected CSS.
    var jssStyles = document.querySelector('#jss-server-side');

    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_services_Auth_context__WEBPACK_IMPORTED_MODULE_8__["AuthProvider"], {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_services_Cart_context__WEBPACK_IMPORTED_MODULE_11__["CartProvider"], {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_services_Product_context__WEBPACK_IMPORTED_MODULE_9__["ProductProvider"], {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_services_Promo_context__WEBPACK_IMPORTED_MODULE_10__["PromoProvider"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_4___default.a, {
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("title", {
                children: "Ceibo Urbano"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 31,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("link", {
                rel: "shortcut icon",
                href: "/ceibo-urbano-iso-logo.svg"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 17
              }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])("meta", {
                name: "viewport",
                content: "minimum-scale=1, initial-scale=1, width=device-width"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 33,
                columnNumber: 17
              }, this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 30,
              columnNumber: 15
            }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_5__["ThemeProvider"], {
              theme: _src_theme__WEBPACK_IMPORTED_MODULE_7__["default"],
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(notistack__WEBPACK_IMPORTED_MODULE_12__["SnackbarProvider"], {
                maxSnack: 3,
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(_material_ui_core_CssBaseline__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 21
                }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__["jsxDEV"])(Component, _objectSpread({}, pageProps), void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 39,
                  columnNumber: 21
                }, this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 36,
                columnNumber: 19
              }, this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 35,
              columnNumber: 17
            }, this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 29,
            columnNumber: 13
          }, this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 11
        }, this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 9
      }, this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 7
    }, this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 25,
    columnNumber: 5
  }, this);
}

_s(MyApp, "OD7bBpZva5O2jO+Puf00hKivP7c=");

_c = MyApp;
MyApp.propTypes = {
  Component: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType.isRequired,
  pageProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
};

var _c;

$RefreshReg$(_c, "MyApp");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9DbGlja0F3YXlMaXN0ZW5lci9DbGlja0F3YXlMaXN0ZW5lci5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9DbGlja0F3YXlMaXN0ZW5lci9pbmRleC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25vdGlzdGFjay9kaXN0L25vdGlzdGFjay5lc20uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL19hcHAuanMiXSwibmFtZXMiOlsiTXlBcHAiLCJwcm9wcyIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlJlYWN0IiwidXNlRWZmZWN0IiwianNzU3R5bGVzIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwicGFyZW50RWxlbWVudCIsInJlbW92ZUNoaWxkIiwidGhlbWUiLCJwcm9wVHlwZXMiLCJQcm9wVHlwZXMiLCJlbGVtZW50VHlwZSIsImlzUmVxdWlyZWQiLCJvYmplY3QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQStCO0FBQ087QUFDSDtBQUNnQjtBQUNOO0FBQ1k7QUFDVzs7QUFFcEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsNENBQVk7QUFDN0IsZ0JBQWdCLDRDQUFZO0FBQzVCLHFCQUFxQiw0Q0FBWTtBQUNqQywwQkFBMEIsNENBQVk7QUFDdEMsRUFBRSwrQ0FBZTtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxHQUFHLE1BQU07O0FBRVQscUJBQXFCLGlEQUFpQjtBQUN0QztBQUNB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O0FBQUEsd0JBRkYsZUFHRSxxRUFBQyxTQUFELG9CQUFlUixTQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsd0JBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxvQkFOSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUF3QkQ7O0dBbkN1QkgsSzs7S0FBQUEsSztBQXFDeEJBLEtBQUssQ0FBQ1ksU0FBTixHQUFrQjtBQUNoQlYsV0FBUyxFQUFFVyxpREFBUyxDQUFDQyxXQUFWLENBQXNCQyxVQURqQjtBQUVoQlosV0FBUyxFQUFFVSxpREFBUyxDQUFDRyxNQUFWLENBQWlCRDtBQUZaLENBQWxCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL19hcHAuMmVmMjdmYmRiZGViOWVkNjJhZDcuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCAqIGFzIFJlYWN0RE9NIGZyb20gJ3JlYWN0LWRvbSc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IG93bmVyRG9jdW1lbnQgZnJvbSAnLi4vdXRpbHMvb3duZXJEb2N1bWVudCc7XG5pbXBvcnQgdXNlRm9ya1JlZiBmcm9tICcuLi91dGlscy91c2VGb3JrUmVmJztcbmltcG9ydCB1c2VFdmVudENhbGxiYWNrIGZyb20gJy4uL3V0aWxzL3VzZUV2ZW50Q2FsbGJhY2snO1xuaW1wb3J0IHsgZWxlbWVudEFjY2VwdGluZ1JlZiwgZXhhY3RQcm9wIH0gZnJvbSAnQG1hdGVyaWFsLXVpL3V0aWxzJztcblxuZnVuY3Rpb24gbWFwRXZlbnRQcm9wVG9FdmVudChldmVudFByb3ApIHtcbiAgcmV0dXJuIGV2ZW50UHJvcC5zdWJzdHJpbmcoMikudG9Mb3dlckNhc2UoKTtcbn1cblxuZnVuY3Rpb24gY2xpY2tlZFJvb3RTY3JvbGxiYXIoZXZlbnQpIHtcbiAgcmV0dXJuIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5jbGllbnRXaWR0aCA8IGV2ZW50LmNsaWVudFggfHwgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsaWVudEhlaWdodCA8IGV2ZW50LmNsaWVudFk7XG59XG4vKipcbiAqIExpc3RlbiBmb3IgY2xpY2sgZXZlbnRzIHRoYXQgb2NjdXIgc29tZXdoZXJlIGluIHRoZSBkb2N1bWVudCwgb3V0c2lkZSBvZiB0aGUgZWxlbWVudCBpdHNlbGYuXG4gKiBGb3IgaW5zdGFuY2UsIGlmIHlvdSBuZWVkIHRvIGhpZGUgYSBtZW51IHdoZW4gcGVvcGxlIGNsaWNrIGFueXdoZXJlIGVsc2Ugb24geW91ciBwYWdlLlxuICovXG5cblxuZnVuY3Rpb24gQ2xpY2tBd2F5TGlzdGVuZXIocHJvcHMpIHtcbiAgdmFyIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBfcHJvcHMkZGlzYWJsZVJlYWN0VHIgPSBwcm9wcy5kaXNhYmxlUmVhY3RUcmVlLFxuICAgICAgZGlzYWJsZVJlYWN0VHJlZSA9IF9wcm9wcyRkaXNhYmxlUmVhY3RUciA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVJlYWN0VHIsXG4gICAgICBfcHJvcHMkbW91c2VFdmVudCA9IHByb3BzLm1vdXNlRXZlbnQsXG4gICAgICBtb3VzZUV2ZW50ID0gX3Byb3BzJG1vdXNlRXZlbnQgPT09IHZvaWQgMCA/ICdvbkNsaWNrJyA6IF9wcm9wcyRtb3VzZUV2ZW50LFxuICAgICAgb25DbGlja0F3YXkgPSBwcm9wcy5vbkNsaWNrQXdheSxcbiAgICAgIF9wcm9wcyR0b3VjaEV2ZW50ID0gcHJvcHMudG91Y2hFdmVudCxcbiAgICAgIHRvdWNoRXZlbnQgPSBfcHJvcHMkdG91Y2hFdmVudCA9PT0gdm9pZCAwID8gJ29uVG91Y2hFbmQnIDogX3Byb3BzJHRvdWNoRXZlbnQ7XG4gIHZhciBtb3ZlZFJlZiA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgYWN0aXZhdGVkUmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgdmFyIHN5bnRoZXRpY0V2ZW50UmVmID0gUmVhY3QudXNlUmVmKGZhbHNlKTtcbiAgUmVhY3QudXNlRWZmZWN0KGZ1bmN0aW9uICgpIHtcbiAgICAvLyBFbnN1cmUgdGhhdCB0aGlzIGNvbXBvbmVudCBpcyBub3QgXCJhY3RpdmF0ZWRcIiBzeW5jaHJvbm91c2x5LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9pc3N1ZXMvMjAwNzRcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgIGFjdGl2YXRlZFJlZi5jdXJyZW50ID0gdHJ1ZTtcbiAgICB9LCAwKTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgYWN0aXZhdGVkUmVmLmN1cnJlbnQgPSBmYWxzZTtcbiAgICB9O1xuICB9LCBbXSk7IC8vIGNhbiBiZSByZW1vdmVkIG9uY2Ugd2UgZHJvcCBzdXBwb3J0IGZvciBub24gcmVmIGZvcndhcmRpbmcgY2xhc3MgY29tcG9uZW50c1xuXG4gIHZhciBoYW5kbGVPd25SZWYgPSBSZWFjdC51c2VDYWxsYmFjayhmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAvLyAjU3RyaWN0TW9kZSByZWFkeVxuICAgIG5vZGVSZWYuY3VycmVudCA9IFJlYWN0RE9NLmZpbmRET01Ob2RlKGluc3RhbmNlKTtcbiAgfSwgW10pO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihjaGlsZHJlbi5yZWYsIGhhbmRsZU93blJlZik7IC8vIFRoZSBoYW5kbGVyIGRvZXNuJ3QgdGFrZSBldmVudC5kZWZhdWx0UHJldmVudGVkIGludG8gYWNjb3VudDpcbiAgLy9cbiAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKSBpcyBtZWFudCB0byBzdG9wIGRlZmF1bHQgYmVoYXZpb3VycyBsaWtlXG4gIC8vIGNsaWNraW5nIGEgY2hlY2tib3ggdG8gY2hlY2sgaXQsIGhpdHRpbmcgYSBidXR0b24gdG8gc3VibWl0IGEgZm9ybSxcbiAgLy8gYW5kIGhpdHRpbmcgbGVmdCBhcnJvdyB0byBtb3ZlIHRoZSBjdXJzb3IgaW4gYSB0ZXh0IGlucHV0IGV0Yy5cbiAgLy8gT25seSBzcGVjaWFsIEhUTUwgZWxlbWVudHMgaGF2ZSB0aGVzZSBkZWZhdWx0IGJlaGF2aW9ycy5cblxuICB2YXIgaGFuZGxlQ2xpY2tBd2F5ID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAvLyBHaXZlbiBkZXZlbG9wZXJzIGNhbiBzdG9wIHRoZSBwcm9wYWdhdGlvbiBvZiB0aGUgc3ludGhldGljIGV2ZW50LFxuICAgIC8vIHdlIGNhbiBvbmx5IGJlIGNvbmZpZGVudCB3aXRoIGEgcG9zaXRpdmUgdmFsdWUuXG4gICAgdmFyIGluc2lkZVJlYWN0VHJlZSA9IHN5bnRoZXRpY0V2ZW50UmVmLmN1cnJlbnQ7XG4gICAgc3ludGhldGljRXZlbnRSZWYuY3VycmVudCA9IGZhbHNlOyAvLyAxLiBJRSAxMSBzdXBwb3J0LCB3aGljaCB0cmlnZ2VyIHRoZSBoYW5kbGVDbGlja0F3YXkgZXZlbiBhZnRlciB0aGUgdW5iaW5kXG4gICAgLy8gMi4gVGhlIGNoaWxkIG1pZ2h0IHJlbmRlciBudWxsLlxuICAgIC8vIDMuIEJlaGF2ZSBsaWtlIGEgYmx1ciBsaXN0ZW5lci5cblxuICAgIGlmICghYWN0aXZhdGVkUmVmLmN1cnJlbnQgfHwgIW5vZGVSZWYuY3VycmVudCB8fCBjbGlja2VkUm9vdFNjcm9sbGJhcihldmVudCkpIHtcbiAgICAgIHJldHVybjtcbiAgICB9IC8vIERvIG5vdCBhY3QgaWYgdXNlciBwZXJmb3JtZWQgdG91Y2htb3ZlXG5cblxuICAgIGlmIChtb3ZlZFJlZi5jdXJyZW50KSB7XG4gICAgICBtb3ZlZFJlZi5jdXJyZW50ID0gZmFsc2U7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgdmFyIGluc2lkZURPTTsgLy8gSWYgbm90IGVub3VnaCwgY2FuIHVzZSBodHRwczovL2dpdGh1Yi5jb20vRGlldGVySG9sdm9ldC9ldmVudC1wcm9wYWdhdGlvbi1wYXRoL2Jsb2IvbWFzdGVyL3Byb3BhZ2F0aW9uUGF0aC5qc1xuXG4gICAgaWYgKGV2ZW50LmNvbXBvc2VkUGF0aCkge1xuICAgICAgaW5zaWRlRE9NID0gZXZlbnQuY29tcG9zZWRQYXRoKCkuaW5kZXhPZihub2RlUmVmLmN1cnJlbnQpID4gLTE7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIFRPRE8gdjYgcmVtb3ZlIGRlYWQgbG9naWMgaHR0cHM6Ly9jYW5pdXNlLmNvbS8jc2VhcmNoPWNvbXBvc2VkUGF0aC5cbiAgICAgIHZhciBkb2MgPSBvd25lckRvY3VtZW50KG5vZGVSZWYuY3VycmVudCk7XG4gICAgICBpbnNpZGVET00gPSAhZG9jLmRvY3VtZW50RWxlbWVudC5jb250YWlucyhldmVudC50YXJnZXQpIHx8IG5vZGVSZWYuY3VycmVudC5jb250YWlucyhldmVudC50YXJnZXQpO1xuICAgIH1cblxuICAgIGlmICghaW5zaWRlRE9NICYmIChkaXNhYmxlUmVhY3RUcmVlIHx8ICFpbnNpZGVSZWFjdFRyZWUpKSB7XG4gICAgICBvbkNsaWNrQXdheShldmVudCk7XG4gICAgfVxuICB9KTsgLy8gS2VlcCB0cmFjayBvZiBtb3VzZS90b3VjaCBldmVudHMgdGhhdCBidWJibGVkIHVwIHRocm91Z2ggdGhlIHBvcnRhbC5cblxuICB2YXIgY3JlYXRlSGFuZGxlU3ludGhldGljID0gZnVuY3Rpb24gY3JlYXRlSGFuZGxlU3ludGhldGljKGhhbmRsZXJOYW1lKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgc3ludGhldGljRXZlbnRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICB2YXIgY2hpbGRyZW5Qcm9wc0hhbmRsZXIgPSBjaGlsZHJlbi5wcm9wc1toYW5kbGVyTmFtZV07XG5cbiAgICAgIGlmIChjaGlsZHJlblByb3BzSGFuZGxlcikge1xuICAgICAgICBjaGlsZHJlblByb3BzSGFuZGxlcihldmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICB2YXIgY2hpbGRyZW5Qcm9wcyA9IHtcbiAgICByZWY6IGhhbmRsZVJlZlxuICB9O1xuXG4gIGlmICh0b3VjaEV2ZW50ICE9PSBmYWxzZSkge1xuICAgIGNoaWxkcmVuUHJvcHNbdG91Y2hFdmVudF0gPSBjcmVhdGVIYW5kbGVTeW50aGV0aWModG91Y2hFdmVudCk7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmICh0b3VjaEV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgdmFyIG1hcHBlZFRvdWNoRXZlbnQgPSBtYXBFdmVudFByb3BUb0V2ZW50KHRvdWNoRXZlbnQpO1xuICAgICAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQobm9kZVJlZi5jdXJyZW50KTtcblxuICAgICAgdmFyIGhhbmRsZVRvdWNoTW92ZSA9IGZ1bmN0aW9uIGhhbmRsZVRvdWNoTW92ZSgpIHtcbiAgICAgICAgbW92ZWRSZWYuY3VycmVudCA9IHRydWU7XG4gICAgICB9O1xuXG4gICAgICBkb2MuYWRkRXZlbnRMaXN0ZW5lcihtYXBwZWRUb3VjaEV2ZW50LCBoYW5kbGVDbGlja0F3YXkpO1xuICAgICAgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIGhhbmRsZVRvdWNoTW92ZSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihtYXBwZWRUb3VjaEV2ZW50LCBoYW5kbGVDbGlja0F3YXkpO1xuICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgaGFuZGxlVG91Y2hNb3ZlKTtcbiAgICAgIH07XG4gICAgfVxuXG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfSwgW2hhbmRsZUNsaWNrQXdheSwgdG91Y2hFdmVudF0pO1xuXG4gIGlmIChtb3VzZUV2ZW50ICE9PSBmYWxzZSkge1xuICAgIGNoaWxkcmVuUHJvcHNbbW91c2VFdmVudF0gPSBjcmVhdGVIYW5kbGVTeW50aGV0aWMobW91c2VFdmVudCk7XG4gIH1cblxuICBSZWFjdC51c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChtb3VzZUV2ZW50ICE9PSBmYWxzZSkge1xuICAgICAgdmFyIG1hcHBlZE1vdXNlRXZlbnQgPSBtYXBFdmVudFByb3BUb0V2ZW50KG1vdXNlRXZlbnQpO1xuICAgICAgdmFyIGRvYyA9IG93bmVyRG9jdW1lbnQobm9kZVJlZi5jdXJyZW50KTtcbiAgICAgIGRvYy5hZGRFdmVudExpc3RlbmVyKG1hcHBlZE1vdXNlRXZlbnQsIGhhbmRsZUNsaWNrQXdheSk7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgICBkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lcihtYXBwZWRNb3VzZUV2ZW50LCBoYW5kbGVDbGlja0F3YXkpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LCBbaGFuZGxlQ2xpY2tBd2F5LCBtb3VzZUV2ZW50XSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChSZWFjdC5GcmFnbWVudCwgbnVsbCwgLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZHJlbiwgY2hpbGRyZW5Qcm9wcykpO1xufVxuXG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDbGlja0F3YXlMaXN0ZW5lci5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgd3JhcHBlZCBlbGVtZW50LlxuICAgKi9cbiAgY2hpbGRyZW46IGVsZW1lbnRBY2NlcHRpbmdSZWYuaXNSZXF1aXJlZCxcblxuICAvKipcbiAgICogSWYgYHRydWVgLCB0aGUgUmVhY3QgdHJlZSBpcyBpZ25vcmVkIGFuZCBvbmx5IHRoZSBET00gdHJlZSBpcyBjb25zaWRlcmVkLlxuICAgKiBUaGlzIHByb3AgY2hhbmdlcyBob3cgcG9ydGFsZWQgZWxlbWVudHMgYXJlIGhhbmRsZWQuXG4gICAqL1xuICBkaXNhYmxlUmVhY3RUcmVlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIG1vdXNlIGV2ZW50IHRvIGxpc3RlbiB0by4gWW91IGNhbiBkaXNhYmxlIHRoZSBsaXN0ZW5lciBieSBwcm92aWRpbmcgYGZhbHNlYC5cbiAgICovXG4gIG1vdXNlRXZlbnQ6IFByb3BUeXBlcy5vbmVPZihbJ29uQ2xpY2snLCAnb25Nb3VzZURvd24nLCAnb25Nb3VzZVVwJywgZmFsc2VdKSxcblxuICAvKipcbiAgICogQ2FsbGJhY2sgZmlyZWQgd2hlbiBhIFwiY2xpY2sgYXdheVwiIGV2ZW50IGlzIGRldGVjdGVkLlxuICAgKi9cbiAgb25DbGlja0F3YXk6IFByb3BUeXBlcy5mdW5jLmlzUmVxdWlyZWQsXG5cbiAgLyoqXG4gICAqIFRoZSB0b3VjaCBldmVudCB0byBsaXN0ZW4gdG8uIFlvdSBjYW4gZGlzYWJsZSB0aGUgbGlzdGVuZXIgYnkgcHJvdmlkaW5nIGBmYWxzZWAuXG4gICAqL1xuICB0b3VjaEV2ZW50OiBQcm9wVHlwZXMub25lT2YoWydvblRvdWNoRW5kJywgJ29uVG91Y2hTdGFydCcsIGZhbHNlXSlcbn0gOiB2b2lkIDA7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICBDbGlja0F3YXlMaXN0ZW5lclsncHJvcFR5cGVzJyArICcnXSA9IGV4YWN0UHJvcChDbGlja0F3YXlMaXN0ZW5lci5wcm9wVHlwZXMpO1xufVxuXG5leHBvcnQgZGVmYXVsdCBDbGlja0F3YXlMaXN0ZW5lcjsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9DbGlja0F3YXlMaXN0ZW5lcic7IiwiaW1wb3J0IFJlYWN0X19kZWZhdWx0LCB7IGZvcndhcmRSZWYsIHVzZVJlZiwgdXNlQ2FsbGJhY2ssIHVzZUxheW91dEVmZmVjdCwgdXNlRWZmZWN0LCBjcmVhdGVFbGVtZW50LCB1c2VTdGF0ZSwgQ29tcG9uZW50LCB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgY3JlYXRlUG9ydGFsIH0gZnJvbSAncmVhY3QtZG9tJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IFNsaWRlIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1NsaWRlJztcbmltcG9ydCB7IHdpdGhTdHlsZXMsIGNyZWF0ZVN0eWxlcywgZW1waGFzaXplLCBtYWtlU3R5bGVzIH0gZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvc3R5bGVzJztcbmltcG9ydCBDb2xsYXBzZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Db2xsYXBzZSc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdmdJY29uJztcbmltcG9ydCBDbGlja0F3YXlMaXN0ZW5lciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9DbGlja0F3YXlMaXN0ZW5lcic7XG5pbXBvcnQgaG9pc3ROb25SZWFjdFN0YXRpY3MgZnJvbSAnaG9pc3Qtbm9uLXJlYWN0LXN0YXRpY3MnO1xuXG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyh0YXJnZXQsIHByb3BzKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgZGVzY3JpcHRvciA9IHByb3BzW2ldO1xuICAgIGRlc2NyaXB0b3IuZW51bWVyYWJsZSA9IGRlc2NyaXB0b3IuZW51bWVyYWJsZSB8fCBmYWxzZTtcbiAgICBkZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSA9IHRydWU7XG4gICAgaWYgKFwidmFsdWVcIiBpbiBkZXNjcmlwdG9yKSBkZXNjcmlwdG9yLndyaXRhYmxlID0gdHJ1ZTtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBkZXNjcmlwdG9yLmtleSwgZGVzY3JpcHRvcik7XG4gIH1cbn1cblxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKENvbnN0cnVjdG9yLCBwcm90b1Byb3BzLCBzdGF0aWNQcm9wcykge1xuICBpZiAocHJvdG9Qcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IucHJvdG90eXBlLCBwcm90b1Byb3BzKTtcbiAgaWYgKHN0YXRpY1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvciwgc3RhdGljUHJvcHMpO1xuICByZXR1cm4gQ29uc3RydWN0b3I7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gKHRhcmdldCkge1xuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICBmb3IgKHZhciBrZXkgaW4gc291cmNlKSB7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB7XG4gICAgICAgICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiB0YXJnZXQ7XG4gIH07XG5cbiAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9pbmhlcml0c0xvb3NlKHN1YkNsYXNzLCBzdXBlckNsYXNzKSB7XG4gIHN1YkNsYXNzLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUoc3VwZXJDbGFzcy5wcm90b3R5cGUpO1xuICBzdWJDbGFzcy5wcm90b3R5cGUuY29uc3RydWN0b3IgPSBzdWJDbGFzcztcbiAgc3ViQ2xhc3MuX19wcm90b19fID0gc3VwZXJDbGFzcztcbn1cblxuZnVuY3Rpb24gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc291cmNlLCBleGNsdWRlZCkge1xuICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIgc291cmNlS2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBrZXksIGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbnZhciBTbmFja2JhckNvbnRleHQgPSAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHQuY3JlYXRlQ29udGV4dCgpO1xuXG52YXIgYWxsQ2xhc3NlcyA9IHtcbiAgbXVpOiB7XG4gICAgcm9vdDoge30sXG4gICAgYW5jaG9yT3JpZ2luVG9wQ2VudGVyOiB7fSxcbiAgICBhbmNob3JPcmlnaW5Cb3R0b21DZW50ZXI6IHt9LFxuICAgIGFuY2hvck9yaWdpblRvcFJpZ2h0OiB7fSxcbiAgICBhbmNob3JPcmlnaW5Cb3R0b21SaWdodDoge30sXG4gICAgYW5jaG9yT3JpZ2luVG9wTGVmdDoge30sXG4gICAgYW5jaG9yT3JpZ2luQm90dG9tTGVmdDoge31cbiAgfSxcbiAgY29udGFpbmVyOiB7XG4gICAgY29udGFpbmVyUm9vdDoge30sXG4gICAgY29udGFpbmVyQW5jaG9yT3JpZ2luVG9wQ2VudGVyOiB7fSxcbiAgICBjb250YWluZXJBbmNob3JPcmlnaW5Cb3R0b21DZW50ZXI6IHt9LFxuICAgIGNvbnRhaW5lckFuY2hvck9yaWdpblRvcFJpZ2h0OiB7fSxcbiAgICBjb250YWluZXJBbmNob3JPcmlnaW5Cb3R0b21SaWdodDoge30sXG4gICAgY29udGFpbmVyQW5jaG9yT3JpZ2luVG9wTGVmdDoge30sXG4gICAgY29udGFpbmVyQW5jaG9yT3JpZ2luQm90dG9tTGVmdDoge31cbiAgfVxufTtcbnZhciBNRVNTQUdFUyA9IHtcbiAgTk9fUEVSU0lTVF9BTEw6ICdXQVJOSU5HIC0gbm90aXN0YWNrOiBSZWFjaGVkIG1heFNuYWNrIHdoaWxlIGFsbCBlbnF1ZXVlZCBzbmFja2JhcnMgaGF2ZSBcXCdwZXJzaXN0XFwnIGZsYWcuIE5vdGlzdGFjayB3aWxsIGRpc21pc3MgdGhlIG9sZGVzdCBzbmFja2JhciBhbnl3YXkgdG8gYWxsb3cgb3RoZXIgb25lcyBpbiB0aGUgcXVldWUgdG8gYmUgcHJlc2VudGVkLidcbn07XG52YXIgU05BQ0tCQVJfSU5ERU5UUyA9IHtcbiAgdmlldzoge1xuICAgIFwiZGVmYXVsdFwiOiAyMCxcbiAgICBkZW5zZTogNFxuICB9LFxuICBzbmFja2Jhcjoge1xuICAgIFwiZGVmYXVsdFwiOiA2LFxuICAgIGRlbnNlOiAyXG4gIH1cbn07XG52YXIgREVGQVVMVFMgPSB7XG4gIG1heFNuYWNrOiAzLFxuICBkZW5zZTogZmFsc2UsXG4gIGhpZGVJY29uVmFyaWFudDogZmFsc2UsXG4gIHZhcmlhbnQ6ICdkZWZhdWx0JyxcbiAgYXV0b0hpZGVEdXJhdGlvbjogNTAwMCxcbiAgYW5jaG9yT3JpZ2luOiB7XG4gICAgdmVydGljYWw6ICdib3R0b20nLFxuICAgIGhvcml6b250YWw6ICdsZWZ0J1xuICB9LFxuICBUcmFuc2l0aW9uQ29tcG9uZW50OiBTbGlkZSxcbiAgdHJhbnNpdGlvbkR1cmF0aW9uOiB7XG4gICAgZW50ZXI6IDIyNSxcbiAgICBleGl0OiAxOTVcbiAgfVxufTtcbnZhciBjYXBpdGFsaXNlID0gZnVuY3Rpb24gY2FwaXRhbGlzZSh0ZXh0KSB7XG4gIHJldHVybiB0ZXh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdGV4dC5zbGljZSgxKTtcbn07XG52YXIgb3JpZ2luS2V5RXh0cmFjdG9yID0gZnVuY3Rpb24gb3JpZ2luS2V5RXh0cmFjdG9yKGFuY2hvcikge1xuICByZXR1cm4gXCJcIiArIGNhcGl0YWxpc2UoYW5jaG9yLnZlcnRpY2FsKSArIGNhcGl0YWxpc2UoYW5jaG9yLmhvcml6b250YWwpO1xufTtcbi8qKlxyXG4gKiBPbWl0IFNuYWNrYmFyQ29udGFpbmVyIGNsYXNzIGtleXMgdGhhdCBhcmUgbm90IG5lZWRlZCBmb3IgU25hY2tiYXJJdGVtXHJcbiAqL1xuXG52YXIgb21pdENvbnRhaW5lcktleXMgPSBmdW5jdGlvbiBvbWl0Q29udGFpbmVyS2V5cyhjbGFzc2VzKSB7XG4gIHJldHVybiAoLy8gQHRzLWlnbm9yZVxuICAgIE9iamVjdC5rZXlzKGNsYXNzZXMpLmZpbHRlcihmdW5jdGlvbiAoa2V5KSB7XG4gICAgICByZXR1cm4gIWFsbENsYXNzZXMuY29udGFpbmVyW2tleV07XG4gICAgfSkucmVkdWNlKGZ1bmN0aW9uIChvYmosIGtleSkge1xuICAgICAgdmFyIF9leHRlbmRzMjtcblxuICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBvYmosIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2tleV0gPSBjbGFzc2VzW2tleV0sIF9leHRlbmRzMikpO1xuICAgIH0sIHt9KVxuICApO1xufTtcbnZhciBSRUFTT05TID0ge1xuICBUSU1FT1VUOiAndGltZW91dCcsXG4gIENMSUNLQVdBWTogJ2NsaWNrYXdheScsXG4gIE1BWFNOQUNLOiAnbWF4c25hY2snLFxuICBJTlNUUlVDVEVEOiAnaW5zdHJ1Y3RlZCdcbn07XG4vKiogVHJhbmZvcm1zIGNsYXNzZXMgbmFtZSAqL1xuXG52YXIgdHJhbnNmb3JtZXIgPSB7XG4gIHRvQ29udGFpbmVyQW5jaG9yT3JpZ2luOiBmdW5jdGlvbiB0b0NvbnRhaW5lckFuY2hvck9yaWdpbihvcmlnaW4pIHtcbiAgICByZXR1cm4gXCJhbmNob3JPcmlnaW5cIiArIG9yaWdpbjtcbiAgfSxcbiAgdG9BbmNob3JPcmlnaW46IGZ1bmN0aW9uIHRvQW5jaG9yT3JpZ2luKF9yZWYpIHtcbiAgICB2YXIgdmVydGljYWwgPSBfcmVmLnZlcnRpY2FsLFxuICAgICAgICBob3Jpem9udGFsID0gX3JlZi5ob3Jpem9udGFsO1xuICAgIHJldHVybiBcImFuY2hvck9yaWdpblwiICsgY2FwaXRhbGlzZSh2ZXJ0aWNhbCkgKyBjYXBpdGFsaXNlKGhvcml6b250YWwpO1xuICB9LFxuICB0b1ZhcmlhbnQ6IGZ1bmN0aW9uIHRvVmFyaWFudCh2YXJpYW50KSB7XG4gICAgcmV0dXJuIFwidmFyaWFudFwiICsgY2FwaXRhbGlzZSh2YXJpYW50KTtcbiAgfVxufTtcbnZhciBpc0RlZmluZWQgPSBmdW5jdGlvbiBpc0RlZmluZWQodmFsdWUpIHtcbiAgcmV0dXJuICEhdmFsdWUgfHwgdmFsdWUgPT09IDA7XG59O1xuXG52YXIgbnVtYmVyT3JOdWxsID0gZnVuY3Rpb24gbnVtYmVyT3JOdWxsKG51bWJlcmlzaCkge1xuICByZXR1cm4gdHlwZW9mIG51bWJlcmlzaCA9PT0gJ251bWJlcicgfHwgbnVtYmVyaXNoID09PSBudWxsO1xufTsgLy8gQHRzLWlnbm9yZVxuXG5cbnZhciBtZXJnZSA9IGZ1bmN0aW9uIG1lcmdlKG9wdGlvbnMsIHByb3BzLCBkZWZhdWx0cykge1xuICByZXR1cm4gZnVuY3Rpb24gKG5hbWUpIHtcbiAgICBpZiAobmFtZSA9PT0gJ2F1dG9IaWRlRHVyYXRpb24nKSB7XG4gICAgICBpZiAobnVtYmVyT3JOdWxsKG9wdGlvbnMuYXV0b0hpZGVEdXJhdGlvbikpIHJldHVybiBvcHRpb25zLmF1dG9IaWRlRHVyYXRpb247XG4gICAgICBpZiAobnVtYmVyT3JOdWxsKHByb3BzLmF1dG9IaWRlRHVyYXRpb24pKSByZXR1cm4gcHJvcHMuYXV0b0hpZGVEdXJhdGlvbjtcbiAgICAgIHJldHVybiBERUZBVUxUUy5hdXRvSGlkZUR1cmF0aW9uO1xuICAgIH1cblxuICAgIHJldHVybiBvcHRpb25zW25hbWVdIHx8IHByb3BzW25hbWVdIHx8IGRlZmF1bHRzW25hbWVdO1xuICB9O1xufTtcbmZ1bmN0aW9uIG9iamVjdE1lcmdlKG9wdGlvbnMsIHByb3BzLCBkZWZhdWx0cykge1xuICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKHByb3BzID09PSB2b2lkIDApIHtcbiAgICBwcm9wcyA9IHt9O1xuICB9XG5cbiAgaWYgKGRlZmF1bHRzID09PSB2b2lkIDApIHtcbiAgICBkZWZhdWx0cyA9IHt9O1xuICB9XG5cbiAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZWZhdWx0cywge30sIHByb3BzLCB7fSwgb3B0aW9ucyk7XG59XG5cbnZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgdmFyIF9yb290O1xuXG4gIHJldHVybiBjcmVhdGVTdHlsZXMoe1xuICAgIHJvb3Q6IChfcm9vdCA9IHtcbiAgICAgIGRpc3BsYXk6ICdmbGV4JyxcbiAgICAgIGZsZXhXcmFwOiAnd3JhcCcsXG4gICAgICBmbGV4R3JvdzogMVxuICAgIH0sIF9yb290W3RoZW1lLmJyZWFrcG9pbnRzLnVwKCdzbScpXSA9IHtcbiAgICAgIGZsZXhHcm93OiAnaW5pdGlhbCcsXG4gICAgICBtaW5XaWR0aDogMjg4XG4gICAgfSwgX3Jvb3QpXG4gIH0pO1xufTtcblxudmFyIFNuYWNrYmFyQ29udGVudCA9IC8qI19fUFVSRV9fKi9mb3J3YXJkUmVmKGZ1bmN0aW9uIChfcmVmLCByZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBfcmVmLmNsYXNzZXMsXG4gICAgICBjbGFzc05hbWUgPSBfcmVmLmNsYXNzTmFtZSxcbiAgICAgIHByb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2UoX3JlZiwgW1wiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiXSk7XG5cbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgT2JqZWN0LmFzc2lnbih7XG4gICAgcmVmOiByZWYsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lKVxuICB9LCBwcm9wcykpO1xufSk7XG52YXIgU25hY2tiYXJDb250ZW50JDEgPSAvKiNfX1BVUkVfXyovd2l0aFN0eWxlcyhzdHlsZXMpKFNuYWNrYmFyQ29udGVudCk7XG5cbnZhciBESVJFQ1RJT04gPSB7XG4gIHJpZ2h0OiAnbGVmdCcsXG4gIGxlZnQ6ICdyaWdodCcsXG4gIGJvdHRvbTogJ3VwJyxcbiAgdG9wOiAnZG93bidcbn07XG52YXIgZ2V0VHJhbnNpdGlvbkRpcmVjdGlvbiA9IGZ1bmN0aW9uIGdldFRyYW5zaXRpb25EaXJlY3Rpb24oYW5jaG9yT3JpZ2luKSB7XG4gIGlmIChhbmNob3JPcmlnaW4uaG9yaXpvbnRhbCAhPT0gJ2NlbnRlcicpIHtcbiAgICByZXR1cm4gRElSRUNUSU9OW2FuY2hvck9yaWdpbi5ob3Jpem9udGFsXTtcbiAgfVxuXG4gIHJldHVybiBESVJFQ1RJT05bYW5jaG9yT3JpZ2luLnZlcnRpY2FsXTtcbn07XG4vKipcclxuICogT21pdCBhbGwgY2xhc3Mga2V5cyBleGNlcHQgd2hhdCB3ZSBuZWVkIGZvciBjb2xsYXBzZSBjb21wb25lbnRcclxuICovXG5cbnZhciBvbWl0Tm9uQ29sbGFwc2VLZXlzID0gZnVuY3Rpb24gb21pdE5vbkNvbGxhcHNlS2V5cyhjbGFzc2VzLCBkZW5zZSkge1xuICByZXR1cm4ge1xuICAgIGNvbnRhaW5lcjogY2xhc3Nlcy5jb2xsYXBzZUNvbnRhaW5lcixcbiAgICB3cmFwcGVyOiBjbHN4KGNsYXNzZXMuY29sbGFwc2VXcmFwcGVyLCBkZW5zZSAmJiBjbGFzc2VzLmNvbGxhcHNlV3JhcHBlckRlbnNlKSxcbiAgICB3cmFwcGVySW5uZXI6IGNsYXNzZXMuY29sbGFwc2VXcmFwcGVySW5uZXJcbiAgfTtcbn07XG5cbnZhciBDaGVja0ljb24gPSBmdW5jdGlvbiBDaGVja0ljb24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTIgMkM2LjUgMiAyIDYuNSAyIDEyUzYuNSAyMiAxMiAyMiAyMiAxNy41IDIyIDEyIDE3LjUgMiAxMiAyTTEwIDE3TDUgMTJMNi40MVxcbiAgICAgICAgMTAuNTlMMTAgMTQuMTdMMTcuNTkgNi41OEwxOSA4TDEwIDE3WlwiXG4gIH0pKTtcbn07XG5cbnZhciBXYXJuaW5nSWNvbiA9IGZ1bmN0aW9uIFdhcm5pbmdJY29uKHByb3BzKSB7XG4gIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFN2Z0ljb24sIE9iamVjdC5hc3NpZ24oe30sIHByb3BzKSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcInBhdGhcIiwge1xuICAgIGQ6IFwiTTEzLDE0SDExVjEwSDEzTTEzLDE4SDExVjE2SDEzTTEsMjFIMjNMMTIsMkwxLDIxWlwiXG4gIH0pKTtcbn07XG5cbnZhciBFcnJvckljb24gPSBmdW5jdGlvbiBFcnJvckljb24ocHJvcHMpIHtcbiAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMpLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFwicGF0aFwiLCB7XG4gICAgZDogXCJNMTIsMkMxNy41MywyIDIyLDYuNDcgMjIsMTJDMjIsMTcuNTMgMTcuNTMsMjIgMTIsMjJDNi40NywyMiAyLDE3LjUzIDIsMTJDMixcXG4gICAgICAgIDYuNDcgNi40NywyIDEyLDJNMTUuNTksN0wxMiwxMC41OUw4LjQxLDdMNyw4LjQxTDEwLjU5LDEyTDcsMTUuNTlMOC40MSwxN0wxMixcXG4gICAgICAgIDEzLjQxTDE1LjU5LDE3TDE3LDE1LjU5TDEzLjQxLDEyTDE3LDguNDFMMTUuNTksN1pcIlxuICB9KSk7XG59O1xuXG52YXIgSW5mb0ljb24gPSBmdW5jdGlvbiBJbmZvSWNvbihwcm9wcykge1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTdmdJY29uLCBPYmplY3QuYXNzaWduKHt9LCBwcm9wcyksIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgICBkOiBcIk0xMyw5SDExVjdIMTNNMTMsMTdIMTFWMTFIMTNNMTIsMkExMCwxMCAwIDAsMCAyLDEyQTEwLDEwIDAgMCwwIDEyLDIyQTEwLDEwIDAgMCxcXG4gICAgICAgIDAgMjIsMTJBMTAsMTAgMCAwLDAgMTIsMlpcIlxuICB9KSk7XG59O1xuXG52YXIgaWNvblN0eWxlcyA9IHtcbiAgZm9udFNpemU6IDIwLFxuICBtYXJnaW5JbmxpbmVFbmQ6IDhcbn07XG52YXIgZGVmYXVsdEljb25WYXJpYW50cyA9IHtcbiAgXCJkZWZhdWx0XCI6IHVuZGVmaW5lZCxcbiAgc3VjY2VzczogLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tJY29uLCB7XG4gICAgc3R5bGU6IGljb25TdHlsZXNcbiAgfSksXG4gIHdhcm5pbmc6IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFdhcm5pbmdJY29uLCB7XG4gICAgc3R5bGU6IGljb25TdHlsZXNcbiAgfSksXG4gIGVycm9yOiAvKiNfX1BVUkVfXyovUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChFcnJvckljb24sIHtcbiAgICBzdHlsZTogaWNvblN0eWxlc1xuICB9KSxcbiAgaW5mbzogLyojX19QVVJFX18qL1JlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoSW5mb0ljb24sIHtcbiAgICBzdHlsZTogaWNvblN0eWxlc1xuICB9KVxufTtcblxuLyoqXG4gKiBAbGluayBodHRwczovL2dpdGh1Yi5jb20vbXVpLW9yZy9tYXRlcmlhbC11aS9ibG9iL21hc3Rlci9wYWNrYWdlcy9tYXRlcmlhbC11aS9zcmMvdXRpbHMvY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uLmpzXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNoYWluZWRGdW5jdGlvbihmdW5jcywgZXh0cmFBcmcpIHtcbiAgcmV0dXJuIGZ1bmNzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBmdW5jKSB7XG4gICAgaWYgKGZ1bmMgPT0gbnVsbCkgcmV0dXJuIGFjYztcblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIGZ1bmMgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnNvbGVcbiAgICAgICAgY29uc29sZS5lcnJvcignSW52YWxpZCBBcmd1bWVudCBUeXBlLiBtdXN0IG9ubHkgcHJvdmlkZSBmdW5jdGlvbnMsIHVuZGVmaW5lZCwgb3IgbnVsbC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gY2hhaW5lZEZ1bmN0aW9uKCkge1xuICAgICAgZm9yICh2YXIgX2xlbiA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbiksIF9rZXkgPSAwOyBfa2V5IDwgX2xlbjsgX2tleSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleV0gPSBhcmd1bWVudHNbX2tleV07XG4gICAgICB9XG5cbiAgICAgIHZhciBhcmd1bXMgPSBbXS5jb25jYXQoYXJncyk7XG5cbiAgICAgIGlmIChleHRyYUFyZyAmJiBhcmd1bXMuaW5kZXhPZihleHRyYUFyZykgPT09IC0xKSB7XG4gICAgICAgIGFyZ3Vtcy5wdXNoKGV4dHJhQXJnKTtcbiAgICAgIH1cblxuICAgICAgYWNjLmFwcGx5KHRoaXMsIGFyZ3Vtcyk7XG4gICAgICBmdW5jLmFwcGx5KHRoaXMsIGFyZ3Vtcyk7XG4gICAgfTtcbiAgfSwgZnVuY3Rpb24gKCkge30pO1xufVxuXG4vKipcbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9tdWktb3JnL21hdGVyaWFsLXVpL2Jsb2IvbWFzdGVyL3BhY2thZ2VzL21hdGVyaWFsLXVpL3NyYy91dGlscy91c2VFdmVudENhbGxiYWNrLmpzXG4gKi9cbnZhciB1c2VFbmhhbmNlZEVmZmVjdCA9IHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnID8gdXNlTGF5b3V0RWZmZWN0IDogdXNlRWZmZWN0O1xuZnVuY3Rpb24gdXNlRXZlbnRDYWxsYmFjayhmbikge1xuICB2YXIgcmVmID0gdXNlUmVmKGZuKTtcbiAgdXNlRW5oYW5jZWRFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIHJlZi5jdXJyZW50ID0gZm47XG4gIH0pO1xuICByZXR1cm4gdXNlQ2FsbGJhY2soZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiAocmVmLmN1cnJlbnQpLmFwcGx5KHZvaWQgMCwgYXJndW1lbnRzKTtcbiAgfSwgW10pO1xufVxuXG52YXIgU25hY2tiYXIgPSAvKiNfX1BVUkVfXyovZm9yd2FyZFJlZihmdW5jdGlvbiAocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGF1dG9IaWRlRHVyYXRpb24gPSBwcm9wcy5hdXRvSGlkZUR1cmF0aW9uLFxuICAgICAgQ2xpY2tBd2F5TGlzdGVuZXJQcm9wcyA9IHByb3BzLkNsaWNrQXdheUxpc3RlbmVyUHJvcHMsXG4gICAgICBfcHJvcHMkZGlzYWJsZVdpbmRvd0IgPSBwcm9wcy5kaXNhYmxlV2luZG93Qmx1ckxpc3RlbmVyLFxuICAgICAgZGlzYWJsZVdpbmRvd0JsdXJMaXN0ZW5lciA9IF9wcm9wcyRkaXNhYmxlV2luZG93QiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVdpbmRvd0IsXG4gICAgICBvbkNsb3NlID0gcHJvcHMub25DbG9zZSxcbiAgICAgIG9uTW91c2VFbnRlciA9IHByb3BzLm9uTW91c2VFbnRlcixcbiAgICAgIG9uTW91c2VMZWF2ZSA9IHByb3BzLm9uTW91c2VMZWF2ZSxcbiAgICAgIG9wZW4gPSBwcm9wcy5vcGVuLFxuICAgICAgcmVzdW1lSGlkZUR1cmF0aW9uID0gcHJvcHMucmVzdW1lSGlkZUR1cmF0aW9uLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wiY2hpbGRyZW5cIiwgXCJhdXRvSGlkZUR1cmF0aW9uXCIsIFwiQ2xpY2tBd2F5TGlzdGVuZXJQcm9wc1wiLCBcImRpc2FibGVXaW5kb3dCbHVyTGlzdGVuZXJcIiwgXCJvbkNsb3NlXCIsIFwib25Nb3VzZUVudGVyXCIsIFwib25Nb3VzZUxlYXZlXCIsIFwib3BlblwiLCBcInJlc3VtZUhpZGVEdXJhdGlvblwiXSk7XG5cbiAgdmFyIHRpbWVyQXV0b0hpZGUgPSB1c2VSZWYoKTtcbiAgdmFyIGhhbmRsZUNsb3NlID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoKSB7XG4gICAgaWYgKG9uQ2xvc2UpIHtcbiAgICAgIG9uQ2xvc2UuYXBwbHkodm9pZCAwLCBhcmd1bWVudHMpO1xuICAgIH1cbiAgfSk7XG4gIHZhciBzZXRBdXRvSGlkZVRpbWVyID0gdXNlRXZlbnRDYWxsYmFjayhmdW5jdGlvbiAoYXV0b0hpZGVEdXJhdGlvblBhcmFtKSB7XG4gICAgaWYgKCFvbkNsb3NlIHx8IGF1dG9IaWRlRHVyYXRpb25QYXJhbSA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY2xlYXJUaW1lb3V0KHRpbWVyQXV0b0hpZGUuY3VycmVudCk7XG4gICAgdGltZXJBdXRvSGlkZS5jdXJyZW50ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICBoYW5kbGVDbG9zZShudWxsLCBSRUFTT05TLlRJTUVPVVQpO1xuICAgIH0sIGF1dG9IaWRlRHVyYXRpb25QYXJhbSk7XG4gIH0pO1xuICB1c2VFZmZlY3QoZnVuY3Rpb24gKCkge1xuICAgIGlmIChvcGVuKSB7XG4gICAgICBzZXRBdXRvSGlkZVRpbWVyKGF1dG9IaWRlRHVyYXRpb24pO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXJBdXRvSGlkZS5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbb3BlbiwgYXV0b0hpZGVEdXJhdGlvbiwgc2V0QXV0b0hpZGVUaW1lcl0pO1xuICAvKipcbiAgICogUGF1c2UgdGhlIHRpbWVyIHdoZW4gdGhlIHVzZXIgaXMgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgU25hY2tiYXJcbiAgICogb3Igd2hlbiB0aGUgdXNlciBoaWRlIHRoZSB3aW5kb3cuXG4gICAqL1xuXG4gIHZhciBoYW5kbGVQYXVzZSA9IGZ1bmN0aW9uIGhhbmRsZVBhdXNlKCkge1xuICAgIGNsZWFyVGltZW91dCh0aW1lckF1dG9IaWRlLmN1cnJlbnQpO1xuICB9O1xuICAvKipcbiAgICogUmVzdGFydCB0aGUgdGltZXIgd2hlbiB0aGUgdXNlciBpcyBubyBsb25nZXIgaW50ZXJhY3Rpbmcgd2l0aCB0aGUgU25hY2tiYXJcbiAgICogb3Igd2hlbiB0aGUgd2luZG93IGlzIHNob3duIGJhY2suXG4gICAqL1xuXG5cbiAgdmFyIGhhbmRsZVJlc3VtZSA9IHVzZUNhbGxiYWNrKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoYXV0b0hpZGVEdXJhdGlvbiAhPSBudWxsKSB7XG4gICAgICBzZXRBdXRvSGlkZVRpbWVyKHJlc3VtZUhpZGVEdXJhdGlvbiAhPSBudWxsID8gcmVzdW1lSGlkZUR1cmF0aW9uIDogYXV0b0hpZGVEdXJhdGlvbiAqIDAuNSk7XG4gICAgfVxuICB9LCBbYXV0b0hpZGVEdXJhdGlvbiwgcmVzdW1lSGlkZUR1cmF0aW9uLCBzZXRBdXRvSGlkZVRpbWVyXSk7XG5cbiAgdmFyIGhhbmRsZU1vdXNlRW50ZXIgPSBmdW5jdGlvbiBoYW5kbGVNb3VzZUVudGVyKGV2ZW50KSB7XG4gICAgaWYgKG9uTW91c2VFbnRlcikge1xuICAgICAgb25Nb3VzZUVudGVyKGV2ZW50KTtcbiAgICB9XG5cbiAgICBoYW5kbGVQYXVzZSgpO1xuICB9O1xuXG4gIHZhciBoYW5kbGVNb3VzZUxlYXZlID0gZnVuY3Rpb24gaGFuZGxlTW91c2VMZWF2ZShldmVudCkge1xuICAgIGlmIChvbk1vdXNlTGVhdmUpIHtcbiAgICAgIG9uTW91c2VMZWF2ZShldmVudCk7XG4gICAgfVxuXG4gICAgaGFuZGxlUmVzdW1lKCk7XG4gIH07XG5cbiAgdmFyIGhhbmRsZUNsaWNrQXdheSA9IGZ1bmN0aW9uIGhhbmRsZUNsaWNrQXdheShldmVudCkge1xuICAgIGlmIChvbkNsb3NlKSB7XG4gICAgICBvbkNsb3NlKGV2ZW50LCBSRUFTT05TLkNMSUNLQVdBWSk7XG4gICAgfVxuICB9O1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFkaXNhYmxlV2luZG93Qmx1ckxpc3RlbmVyICYmIG9wZW4pIHtcbiAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZVJlc3VtZSk7XG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsIGhhbmRsZVBhdXNlKTtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIGhhbmRsZVJlc3VtZSk7XG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdibHVyJywgaGFuZGxlUGF1c2UpO1xuICAgICAgfTtcbiAgICB9XG5cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9LCBbZGlzYWJsZVdpbmRvd0JsdXJMaXN0ZW5lciwgaGFuZGxlUmVzdW1lLCBvcGVuXSk7XG4gIHJldHVybiBjcmVhdGVFbGVtZW50KENsaWNrQXdheUxpc3RlbmVyLCBfZXh0ZW5kcyh7XG4gICAgb25DbGlja0F3YXk6IGhhbmRsZUNsaWNrQXdheVxuICB9LCBDbGlja0F3YXlMaXN0ZW5lclByb3BzKSwgY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgb25Nb3VzZUVudGVyOiBoYW5kbGVNb3VzZUVudGVyLFxuICAgIG9uTW91c2VMZWF2ZTogaGFuZGxlTW91c2VMZWF2ZSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGNoaWxkcmVuKSk7XG59KTtcblxudmFyIHN0eWxlcyQxID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHZhciBfY29sbGFwc2VDb250YWluZXI7XG5cbiAgLy8gQHRzLWlnbm9yZVxuICB2YXIgbW9kZSA9IHRoZW1lLnBhbGV0dGUubW9kZSB8fCB0aGVtZS5wYWxldHRlLnR5cGU7XG4gIHZhciBiYWNrZ3JvdW5kQ29sb3IgPSBlbXBoYXNpemUodGhlbWUucGFsZXR0ZS5iYWNrZ3JvdW5kW1wiZGVmYXVsdFwiXSwgbW9kZSA9PT0gJ2xpZ2h0JyA/IDAuOCA6IDAuOTgpO1xuICByZXR1cm4gY3JlYXRlU3R5bGVzKF9leHRlbmRzKHt9LCBhbGxDbGFzc2VzLm11aSwge1xuICAgIGxlc3NQYWRkaW5nOiB7XG4gICAgICBwYWRkaW5nTGVmdDogOCAqIDIuNVxuICAgIH0sXG4gICAgdmFyaWFudFN1Y2Nlc3M6IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyM0M2EwNDcgIWltcG9ydGFudCcsXG4gICAgICBjb2xvcjogJyNmZmYgIWltcG9ydGFudCdcbiAgICB9LFxuICAgIHZhcmlhbnRFcnJvcjoge1xuICAgICAgYmFja2dyb3VuZENvbG9yOiAnI2QzMmYyZiAhaW1wb3J0YW50JyxcbiAgICAgIGNvbG9yOiAnI2ZmZiAhaW1wb3J0YW50J1xuICAgIH0sXG4gICAgdmFyaWFudEluZm86IHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyMTk2ZjMgIWltcG9ydGFudCcsXG4gICAgICBjb2xvcjogJyNmZmYgIWltcG9ydGFudCdcbiAgICB9LFxuICAgIHZhcmlhbnRXYXJuaW5nOiB7XG4gICAgICBiYWNrZ3JvdW5kQ29sb3I6ICcjZmY5ODAwICFpbXBvcnRhbnQnLFxuICAgICAgY29sb3I6ICcjZmZmICFpbXBvcnRhbnQnXG4gICAgfSxcbiAgICBjb250ZW50Um9vdDogX2V4dGVuZHMoe30sIHRoZW1lLnR5cG9ncmFwaHkuYm9keTIsIHtcbiAgICAgIGJhY2tncm91bmRDb2xvcjogYmFja2dyb3VuZENvbG9yLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZ2V0Q29udHJhc3RUZXh0KGJhY2tncm91bmRDb2xvciksXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6ICc2cHggMTZweCcsXG4gICAgICBib3JkZXJSYWRpdXM6ICc0cHgnLFxuICAgICAgYm94U2hhZG93OiAnMHB4IDNweCA1cHggLTFweCByZ2JhKDAsMCwwLDAuMiksMHB4IDZweCAxMHB4IDBweCByZ2JhKDAsMCwwLDAuMTQpLDBweCAxcHggMThweCAwcHggcmdiYSgwLDAsMCwwLjEyKSdcbiAgICB9KSxcbiAgICBtZXNzYWdlOiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgIHBhZGRpbmc6ICc4cHggMCdcbiAgICB9LFxuICAgIGFjdGlvbjoge1xuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICBtYXJnaW5MZWZ0OiAnYXV0bycsXG4gICAgICBwYWRkaW5nTGVmdDogMTYsXG4gICAgICBtYXJnaW5SaWdodDogLThcbiAgICB9LFxuICAgIHdyYXBwZWRSb290OiB7XG4gICAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknLFxuICAgICAgdG9wOiAwLFxuICAgICAgcmlnaHQ6IDAsXG4gICAgICBib3R0b206IDAsXG4gICAgICBsZWZ0OiAwXG4gICAgfSxcbiAgICBjb2xsYXBzZUNvbnRhaW5lcjogKF9jb2xsYXBzZUNvbnRhaW5lciA9IHt9LCBfY29sbGFwc2VDb250YWluZXJbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV0gPSB7XG4gICAgICBwYWRkaW5nTGVmdDogdGhlbWUuc3BhY2luZygxKSxcbiAgICAgIHBhZGRpbmdSaWdodDogdGhlbWUuc3BhY2luZygxKVxuICAgIH0sIF9jb2xsYXBzZUNvbnRhaW5lciksXG4gICAgY29sbGFwc2VXcmFwcGVyOiB7XG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoWydtYXJnaW4tYm90dG9tJ10sIHtcbiAgICAgICAgZWFzaW5nOiAnZWFzZSdcbiAgICAgIH0pLFxuICAgICAgbWFyZ2luVG9wOiBTTkFDS0JBUl9JTkRFTlRTLnNuYWNrYmFyW1wiZGVmYXVsdFwiXSxcbiAgICAgIG1hcmdpbkJvdHRvbTogU05BQ0tCQVJfSU5ERU5UUy5zbmFja2JhcltcImRlZmF1bHRcIl1cbiAgICB9LFxuICAgIGNvbGxhcHNlV3JhcHBlckRlbnNlOiB7XG4gICAgICBtYXJnaW5Ub3A6IFNOQUNLQkFSX0lOREVOVFMuc25hY2tiYXIuZGVuc2UsXG4gICAgICBtYXJnaW5Cb3R0b206IFNOQUNLQkFSX0lOREVOVFMuc25hY2tiYXIuZGVuc2VcbiAgICB9LFxuICAgIGNvbGxhcHNlV3JhcHBlcklubmVyOiB7XG4gICAgICB3aWR0aDogJ2F1dG8nXG4gICAgfVxuICB9KSk7XG59O1xuXG52YXIgU25hY2tiYXJJdGVtID0gZnVuY3Rpb24gU25hY2tiYXJJdGVtKF9yZWYpIHtcbiAgdmFyIGNsYXNzZXMgPSBfcmVmLmNsYXNzZXMsXG4gICAgICBwcm9wcyA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKF9yZWYsIFtcImNsYXNzZXNcIl0pO1xuXG4gIHZhciB0aW1lb3V0ID0gdXNlUmVmKCk7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHRydWUpLFxuICAgICAgY29sbGFwc2VkID0gX3VzZVN0YXRlWzBdLFxuICAgICAgc2V0Q29sbGFwc2VkID0gX3VzZVN0YXRlWzFdO1xuXG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmICh0aW1lb3V0LmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQuY3VycmVudCk7XG4gICAgICB9XG4gICAgfTtcbiAgfSwgW10pO1xuICB2YXIgaGFuZGxlQ2xvc2UgPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oW3Byb3BzLnNuYWNrLm9uQ2xvc2UsIHByb3BzLm9uQ2xvc2VdLCBwcm9wcy5zbmFjay5rZXkpO1xuXG4gIHZhciBoYW5kbGVFbnRlcmVkID0gZnVuY3Rpb24gaGFuZGxlRW50ZXJlZCgpIHtcbiAgICBpZiAocHJvcHMuc25hY2sucmVxdWVzdENsb3NlKSB7XG4gICAgICBoYW5kbGVDbG9zZShudWxsLCBSRUFTT05TLklOU1RSQ1VURUQpO1xuICAgIH1cbiAgfTtcblxuICB2YXIgaGFuZGxlRXhpdGVkU2NyZWVuID0gZnVuY3Rpb24gaGFuZGxlRXhpdGVkU2NyZWVuKCkge1xuICAgIHRpbWVvdXQuY3VycmVudCA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgc2V0Q29sbGFwc2VkKCFjb2xsYXBzZWQpO1xuICAgIH0sIDEyNSk7XG4gIH07XG5cbiAgdmFyIHN0eWxlID0gcHJvcHMuc3R5bGUsXG4gICAgICBkZW5zZSA9IHByb3BzLmRlbnNlLFxuICAgICAgb3RoZXJBcmlhQXR0cmlidXRlcyA9IHByb3BzLmFyaWFBdHRyaWJ1dGVzLFxuICAgICAgb3RoZXJDbGFzc05hbWUgPSBwcm9wcy5jbGFzc05hbWUsXG4gICAgICBoaWRlSWNvblZhcmlhbnQgPSBwcm9wcy5oaWRlSWNvblZhcmlhbnQsXG4gICAgICBpY29uVmFyaWFudCA9IHByb3BzLmljb25WYXJpYW50LFxuICAgICAgc25hY2sgPSBwcm9wcy5zbmFjayxcbiAgICAgIG90aGVyQWN0aW9uID0gcHJvcHMuYWN0aW9uLFxuICAgICAgb3RoZXJDb250ZW50ID0gcHJvcHMuY29udGVudCxcbiAgICAgIG90aGVyVHJhbkNvbXBvbmVudCA9IHByb3BzLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBvdGhlclRyYW5Qcm9wcyA9IHByb3BzLlRyYW5zaXRpb25Qcm9wcyxcbiAgICAgIG90aGVyVHJhbkR1cmF0aW9uID0gcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShwcm9wcywgW1wic3R5bGVcIiwgXCJkZW5zZVwiLCBcImFyaWFBdHRyaWJ1dGVzXCIsIFwiY2xhc3NOYW1lXCIsIFwiaGlkZUljb25WYXJpYW50XCIsIFwiaWNvblZhcmlhbnRcIiwgXCJzbmFja1wiLCBcImFjdGlvblwiLCBcImNvbnRlbnRcIiwgXCJUcmFuc2l0aW9uQ29tcG9uZW50XCIsIFwiVHJhbnNpdGlvblByb3BzXCIsIFwidHJhbnNpdGlvbkR1cmF0aW9uXCIsIFwib25FbnRlclwiLCBcIm9uRW50ZXJlZFwiLCBcIm9uRW50ZXJpbmdcIiwgXCJvbkV4aXRcIiwgXCJvbkV4aXRlZFwiLCBcIm9uRXhpdGluZ1wiXSk7XG5cbiAgdmFyIGtleSA9IHNuYWNrLmtleSxcbiAgICAgIG9wZW4gPSBzbmFjay5vcGVuLFxuICAgICAgc2luZ2xlQ2xhc3NOYW1lID0gc25hY2suY2xhc3NOYW1lLFxuICAgICAgdmFyaWFudCA9IHNuYWNrLnZhcmlhbnQsXG4gICAgICBzaW5nbGVDb250ZW50ID0gc25hY2suY29udGVudCxcbiAgICAgIHNpbmdsZUFjdGlvbiA9IHNuYWNrLmFjdGlvbixcbiAgICAgIHNpbmdsZUFyaWFBdHRyaWJ1dGVzID0gc25hY2suYXJpYUF0dHJpYnV0ZXMsXG4gICAgICBhbmNob3JPcmlnaW4gPSBzbmFjay5hbmNob3JPcmlnaW4sXG4gICAgICBzbmFja01lc3NhZ2UgPSBzbmFjay5tZXNzYWdlLFxuICAgICAgc2luZ2xlVHJhbkNvbXBvbmVudCA9IHNuYWNrLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBzaW5nbGVUcmFuUHJvcHMgPSBzbmFjay5UcmFuc2l0aW9uUHJvcHMsXG4gICAgICBzaW5nbGVUcmFuRHVyYXRpb24gPSBzbmFjay50cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgICBzaW5nbGVTbmFja1Byb3BzID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzTG9vc2Uoc25hY2ssIFtcInBlcnNpc3RcIiwgXCJrZXlcIiwgXCJvcGVuXCIsIFwiZW50ZXJlZFwiLCBcInJlcXVlc3RDbG9zZVwiLCBcImNsYXNzTmFtZVwiLCBcInZhcmlhbnRcIiwgXCJjb250ZW50XCIsIFwiYWN0aW9uXCIsIFwiYXJpYUF0dHJpYnV0ZXNcIiwgXCJhbmNob3JPcmlnaW5cIiwgXCJtZXNzYWdlXCIsIFwiVHJhbnNpdGlvbkNvbXBvbmVudFwiLCBcIlRyYW5zaXRpb25Qcm9wc1wiLCBcInRyYW5zaXRpb25EdXJhdGlvblwiLCBcIm9uRW50ZXJcIiwgXCJvbkVudGVyZWRcIiwgXCJvbkVudGVyaW5nXCIsIFwib25FeGl0XCIsIFwib25FeGl0ZWRcIiwgXCJvbkV4aXRpbmdcIl0pO1xuXG4gIHZhciBpY29uID0gX2V4dGVuZHMoe30sIGRlZmF1bHRJY29uVmFyaWFudHMsIHt9LCBpY29uVmFyaWFudClbdmFyaWFudF07XG5cbiAgdmFyIGFyaWFBdHRyaWJ1dGVzID0gX2V4dGVuZHMoe1xuICAgICdhcmlhLWRlc2NyaWJlZGJ5JzogJ25vdGlzdGFjay1zbmFja2JhcidcbiAgfSwgb2JqZWN0TWVyZ2Uoc2luZ2xlQXJpYUF0dHJpYnV0ZXMsIG90aGVyQXJpYUF0dHJpYnV0ZXMpKTtcblxuICB2YXIgVHJhbnNpdGlvbkNvbXBvbmVudCA9IHNpbmdsZVRyYW5Db21wb25lbnQgfHwgb3RoZXJUcmFuQ29tcG9uZW50IHx8IERFRkFVTFRTLlRyYW5zaXRpb25Db21wb25lbnQ7XG4gIHZhciB0cmFuc2l0aW9uRHVyYXRpb24gPSBvYmplY3RNZXJnZShzaW5nbGVUcmFuRHVyYXRpb24sIG90aGVyVHJhbkR1cmF0aW9uLCBERUZBVUxUUy50cmFuc2l0aW9uRHVyYXRpb24pO1xuXG4gIHZhciB0cmFuc2l0aW9uUHJvcHMgPSBfZXh0ZW5kcyh7XG4gICAgZGlyZWN0aW9uOiBnZXRUcmFuc2l0aW9uRGlyZWN0aW9uKGFuY2hvck9yaWdpbilcbiAgfSwgb2JqZWN0TWVyZ2Uoc2luZ2xlVHJhblByb3BzLCBvdGhlclRyYW5Qcm9wcykpO1xuXG4gIHZhciBhY3Rpb24gPSBzaW5nbGVBY3Rpb24gfHwgb3RoZXJBY3Rpb247XG5cbiAgaWYgKHR5cGVvZiBhY3Rpb24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBhY3Rpb24gPSBhY3Rpb24oa2V5KTtcbiAgfVxuXG4gIHZhciBjb250ZW50ID0gc2luZ2xlQ29udGVudCB8fCBvdGhlckNvbnRlbnQ7XG5cbiAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgY29udGVudCA9IGNvbnRlbnQoa2V5LCBzbmFjay5tZXNzYWdlKTtcbiAgfVxuXG4gIHZhciBjYWxsYmFja3MgPSBbJ29uRW50ZXInLCAnb25FbnRlcmluZycsICdvbkVudGVyZWQnLCAnb25FeGl0JywgJ29uRXhpdGluZycsICdvbkV4aXRlZCddLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjYk5hbWUpIHtcbiAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhY2MsIChfZXh0ZW5kczIgPSB7fSwgX2V4dGVuZHMyW2NiTmFtZV0gPSBjcmVhdGVDaGFpbmVkRnVuY3Rpb24oW3Byb3BzLnNuYWNrW2NiTmFtZV0sIHByb3BzW2NiTmFtZV1dLCBwcm9wcy5zbmFjay5rZXkpLCBfZXh0ZW5kczIpKTtcbiAgfSwge30pO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChDb2xsYXBzZSwge1xuICAgIHVubW91bnRPbkV4aXQ6IHRydWUsXG4gICAgdGltZW91dDogMTc1LFxuICAgIFwiaW5cIjogY29sbGFwc2VkLFxuICAgIGNsYXNzZXM6IG9taXROb25Db2xsYXBzZUtleXMoY2xhc3NlcywgZGVuc2UpLFxuICAgIG9uRXhpdGVkOiBjYWxsYmFja3Mub25FeGl0ZWRcbiAgfSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTbmFja2JhciwgT2JqZWN0LmFzc2lnbih7fSwgb3RoZXIsIHNpbmdsZVNuYWNrUHJvcHMsIHtcbiAgICBvcGVuOiBvcGVuLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXMud3JhcHBlZFJvb3QsIGNsYXNzZXNbdHJhbnNmb3JtZXIudG9BbmNob3JPcmlnaW4oYW5jaG9yT3JpZ2luKV0pLFxuICAgIG9uQ2xvc2U6IGhhbmRsZUNsb3NlXG4gIH0pLCBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFRyYW5zaXRpb25Db21wb25lbnQsIE9iamVjdC5hc3NpZ24oe1xuICAgIGFwcGVhcjogdHJ1ZSxcbiAgICBcImluXCI6IG9wZW4sXG4gICAgdGltZW91dDogdHJhbnNpdGlvbkR1cmF0aW9uXG4gIH0sIHRyYW5zaXRpb25Qcm9wcywge1xuICAgIG9uRXhpdDogY2FsbGJhY2tzLm9uRXhpdCxcbiAgICBvbkV4aXRpbmc6IGNhbGxiYWNrcy5vbkV4aXRpbmcsXG4gICAgb25FeGl0ZWQ6IGhhbmRsZUV4aXRlZFNjcmVlbixcbiAgICBvbkVudGVyOiBjYWxsYmFja3Mub25FbnRlcixcbiAgICBvbkVudGVyaW5nOiBjYWxsYmFja3Mub25FbnRlcmluZyxcbiAgICAvLyBvcmRlciBtYXR0ZXJzLiBmaXJzdCBjYWxsYmFja3Mub25FbnRlcmVkIHRvIHNldCBlbnRlcmVkOiB0cnVlLFxuICAgIC8vIHRoZW4gaGFuZGxlRW50ZXJlZCB0byBjaGVjayBpZiB0aGVyZSdzIGEgcmVxdWVzdCBmb3IgY2xvc2luZ1xuICAgIG9uRW50ZXJlZDogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKFtjYWxsYmFja3Mub25FbnRlcmVkLCBoYW5kbGVFbnRlcmVkXSlcbiAgfSksIGNvbnRlbnQgfHwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTbmFja2JhckNvbnRlbnQkMSwgT2JqZWN0LmFzc2lnbih7fSwgYXJpYUF0dHJpYnV0ZXMsIHtcbiAgICByb2xlOiBcImFsZXJ0XCIsXG4gICAgc3R5bGU6IHN0eWxlLFxuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmNvbnRlbnRSb290LCBjbGFzc2VzW3RyYW5zZm9ybWVyLnRvVmFyaWFudCh2YXJpYW50KV0sIG90aGVyQ2xhc3NOYW1lLCBzaW5nbGVDbGFzc05hbWUsICFoaWRlSWNvblZhcmlhbnQgJiYgaWNvbiAmJiBjbGFzc2VzLmxlc3NQYWRkaW5nKVxuICB9KSwgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgaWQ6IGFyaWFBdHRyaWJ1dGVzWydhcmlhLWRlc2NyaWJlZGJ5J10sXG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLm1lc3NhZ2VcbiAgfSwgIWhpZGVJY29uVmFyaWFudCA/IGljb24gOiBudWxsLCBzbmFja01lc3NhZ2UpLCBhY3Rpb24gJiYgUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBjbGFzc2VzLmFjdGlvblxuICB9LCBhY3Rpb24pKSkpKTtcbn07XG5cbnZhciBTbmFja2Jhckl0ZW0kMSA9IC8qI19fUFVSRV9fKi93aXRoU3R5bGVzKHN0eWxlcyQxKShTbmFja2Jhckl0ZW0pO1xuXG52YXIgdXNlU3R5bGUgPSAvKiNfX1BVUkVfXyovbWFrZVN0eWxlcyhmdW5jdGlvbiAodGhlbWUpIHtcbiAgdmFyIF9yb290LCBfY2VudGVyO1xuXG4gIHJldHVybiB7XG4gICAgcm9vdDogKF9yb290ID0ge1xuICAgICAgYm94U2l6aW5nOiAnYm9yZGVyLWJveCcsXG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBtYXhIZWlnaHQ6ICcxMDAlJyxcbiAgICAgIG1heFdpZHRoOiAnMTAwJScsXG4gICAgICBwb3NpdGlvbjogJ2ZpeGVkJyxcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgekluZGV4OiB0aGVtZS56SW5kZXguc25hY2tiYXIsXG4gICAgICBoZWlnaHQ6ICdhdXRvJyxcbiAgICAgIHdpZHRoOiAnYXV0bycsXG4gICAgICBtaW5XaWR0aDogMjg4LFxuICAgICAgdHJhbnNpdGlvbjogdGhlbWUudHJhbnNpdGlvbnMuY3JlYXRlKFsndG9wJywgJ3JpZ2h0JywgJ2JvdHRvbScsICdsZWZ0J10sIHtcbiAgICAgICAgZWFzaW5nOiAnZWFzZSdcbiAgICAgIH0pXG4gICAgfSwgX3Jvb3RbdGhlbWUuYnJlYWtwb2ludHMuZG93bigneHMnKV0gPSB7XG4gICAgICBsZWZ0OiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIHJpZ2h0OiAnMCAhaW1wb3J0YW50JyxcbiAgICAgIHdpZHRoOiAnMTAwJSdcbiAgICB9LCBfcm9vdCksXG4gICAgcmV2ZXJzZUNvbHVtbnM6IHtcbiAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4tcmV2ZXJzZSdcbiAgICB9LFxuICAgIHRvcDoge1xuICAgICAgdG9wOiBTTkFDS0JBUl9JTkRFTlRTLnZpZXdbXCJkZWZhdWx0XCJdIC0gU05BQ0tCQVJfSU5ERU5UUy5zbmFja2JhcltcImRlZmF1bHRcIl1cbiAgICB9LFxuICAgIHRvcERlbnNlOiB7XG4gICAgICB0b3A6IFNOQUNLQkFSX0lOREVOVFMudmlldy5kZW5zZSAtIFNOQUNLQkFSX0lOREVOVFMuc25hY2tiYXIuZGVuc2VcbiAgICB9LFxuICAgIGJvdHRvbToge1xuICAgICAgYm90dG9tOiBTTkFDS0JBUl9JTkRFTlRTLnZpZXdbXCJkZWZhdWx0XCJdIC0gU05BQ0tCQVJfSU5ERU5UUy5zbmFja2JhcltcImRlZmF1bHRcIl1cbiAgICB9LFxuICAgIGJvdHRvbURlbnNlOiB7XG4gICAgICBib3R0b206IFNOQUNLQkFSX0lOREVOVFMudmlldy5kZW5zZSAtIFNOQUNLQkFSX0lOREVOVFMuc25hY2tiYXIuZGVuc2VcbiAgICB9LFxuICAgIGxlZnQ6IHtcbiAgICAgIGxlZnQ6IFNOQUNLQkFSX0lOREVOVFMudmlld1tcImRlZmF1bHRcIl1cbiAgICB9LFxuICAgIGxlZnREZW5zZToge1xuICAgICAgbGVmdDogU05BQ0tCQVJfSU5ERU5UUy52aWV3LmRlbnNlXG4gICAgfSxcbiAgICByaWdodDoge1xuICAgICAgcmlnaHQ6IFNOQUNLQkFSX0lOREVOVFMudmlld1tcImRlZmF1bHRcIl1cbiAgICB9LFxuICAgIHJpZ2h0RGVuc2U6IHtcbiAgICAgIHJpZ2h0OiBTTkFDS0JBUl9JTkRFTlRTLnZpZXcuZGVuc2VcbiAgICB9LFxuICAgIGNlbnRlcjogKF9jZW50ZXIgPSB7XG4gICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoLTUwJSknXG4gICAgfSwgX2NlbnRlclt0aGVtZS5icmVha3BvaW50cy5kb3duKCd4cycpXSA9IHtcbiAgICAgIHRyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMCknXG4gICAgfSwgX2NlbnRlcilcbiAgfTtcbn0pO1xuXG52YXIgU25hY2tiYXJDb250YWluZXIgPSBmdW5jdGlvbiBTbmFja2JhckNvbnRhaW5lcihwcm9wcykge1xuICB2YXIgY2xhc3NlcyA9IHVzZVN0eWxlKCk7XG5cbiAgdmFyIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGFuY2hvck9yaWdpbiA9IHByb3BzLmFuY2hvck9yaWdpbixcbiAgICAgIGRlbnNlID0gcHJvcHMuZGVuc2UsXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllc0xvb3NlKHByb3BzLCBbXCJjbGFzc05hbWVcIiwgXCJhbmNob3JPcmlnaW5cIiwgXCJkZW5zZVwiXSk7XG5cbiAgdmFyIGNvbWJpbmVkQ2xhc3NuYW1lID0gY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbYW5jaG9yT3JpZ2luLnZlcnRpY2FsXSwgY2xhc3Nlc1thbmNob3JPcmlnaW4uaG9yaXpvbnRhbF0sIC8vIEB0cy1pZ25vcmVcbiAgY2xhc3Nlc1tcIlwiICsgYW5jaG9yT3JpZ2luLnZlcnRpY2FsICsgKGRlbnNlID8gJ0RlbnNlJyA6ICcnKV0sIC8vIEB0cy1pZ25vcmVcbiAgY2xhc3Nlc1tcIlwiICsgYW5jaG9yT3JpZ2luLmhvcml6b250YWwgKyAoZGVuc2UgPyAnRGVuc2UnIDogJycpXSwgY2xhc3NOYW1lLCBhbmNob3JPcmlnaW4udmVydGljYWwgPT09ICdib3R0b20nICYmIGNsYXNzZXMucmV2ZXJzZUNvbHVtbnMpO1xuICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChcImRpdlwiLCBPYmplY3QuYXNzaWduKHtcbiAgICBjbGFzc05hbWU6IGNvbWJpbmVkQ2xhc3NuYW1lXG4gIH0sIG90aGVyKSk7XG59O1xuXG52YXIgU25hY2tiYXJDb250YWluZXIkMSA9IC8qI19fUFVSRV9fKi9SZWFjdF9fZGVmYXVsdC5tZW1vKFNuYWNrYmFyQ29udGFpbmVyKTtcblxuLyogZXNsaW50LWRpc2FibGUgKi9cbnZhciBfX0RFVl9fID0gcHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJztcblxudmFyIHdhcm5pbmcgPSAoZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgaWYgKCFfX0RFVl9fKSByZXR1cm47XG5cbiAgaWYgKHR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJykge1xuICAgIGNvbnNvbGUuZXJyb3IobWVzc2FnZSk7XG4gIH1cblxuICB0cnkge1xuICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKTtcbiAgfSBjYXRjaCAoeCkge31cbn0pO1xuXG52YXIgU25hY2tiYXJQcm92aWRlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoX0NvbXBvbmVudCkge1xuICBfaW5oZXJpdHNMb29zZShTbmFja2JhclByb3ZpZGVyLCBfQ29tcG9uZW50KTtcblxuICBmdW5jdGlvbiBTbmFja2JhclByb3ZpZGVyKHByb3BzKSB7XG4gICAgdmFyIF90aGlzO1xuXG4gICAgX3RoaXMgPSBfQ29tcG9uZW50LmNhbGwodGhpcywgcHJvcHMpIHx8IHRoaXM7XG4gICAgLyoqXHJcbiAgICAgKiBBZGRzIGEgbmV3IHNuYWNrYmFyIHRvIHRoZSBxdWV1ZSB0byBiZSBwcmVzZW50ZWQuXHJcbiAgICAgKiBSZXR1cm5zIGdlbmVyYXRlZCBvciB1c2VyIGRlZmluZWQga2V5IHJlZmVyZW5jaW5nIHRoZSBuZXcgc25hY2tiYXIgb3IgbnVsbFxyXG4gICAgICovXG5cbiAgICBfdGhpcy5lbnF1ZXVlU25hY2tiYXIgPSBmdW5jdGlvbiAobWVzc2FnZSwgb3B0cykge1xuICAgICAgaWYgKG9wdHMgPT09IHZvaWQgMCkge1xuICAgICAgICBvcHRzID0ge307XG4gICAgICB9XG5cbiAgICAgIHZhciBfb3B0cyA9IG9wdHMsXG4gICAgICAgICAga2V5ID0gX29wdHMua2V5LFxuICAgICAgICAgIHByZXZlbnREdXBsaWNhdGUgPSBfb3B0cy5wcmV2ZW50RHVwbGljYXRlLFxuICAgICAgICAgIG9wdGlvbnMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfb3B0cywgW1wia2V5XCIsIFwicHJldmVudER1cGxpY2F0ZVwiXSk7XG5cbiAgICAgIHZhciBoYXNTcGVjaWZpZWRLZXkgPSBpc0RlZmluZWQoa2V5KTtcbiAgICAgIHZhciBpZCA9IGhhc1NwZWNpZmllZEtleSA/IGtleSA6IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgTWF0aC5yYW5kb20oKTtcbiAgICAgIHZhciBtZXJnZXIgPSBtZXJnZShvcHRpb25zLCBfdGhpcy5wcm9wcywgREVGQVVMVFMpO1xuXG4gICAgICB2YXIgc25hY2sgPSBfZXh0ZW5kcyh7XG4gICAgICAgIGtleTogaWRcbiAgICAgIH0sIG9wdGlvbnMsIHtcbiAgICAgICAgbWVzc2FnZTogbWVzc2FnZSxcbiAgICAgICAgb3BlbjogdHJ1ZSxcbiAgICAgICAgZW50ZXJlZDogZmFsc2UsXG4gICAgICAgIHJlcXVlc3RDbG9zZTogZmFsc2UsXG4gICAgICAgIHZhcmlhbnQ6IG1lcmdlcigndmFyaWFudCcpLFxuICAgICAgICBhbmNob3JPcmlnaW46IG1lcmdlcignYW5jaG9yT3JpZ2luJyksXG4gICAgICAgIGF1dG9IaWRlRHVyYXRpb246IG1lcmdlcignYXV0b0hpZGVEdXJhdGlvbicpXG4gICAgICB9KTtcblxuICAgICAgaWYgKG9wdGlvbnMucGVyc2lzdCkge1xuICAgICAgICBzbmFjay5hdXRvSGlkZUR1cmF0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgaWYgKHByZXZlbnREdXBsaWNhdGUgPT09IHVuZGVmaW5lZCAmJiBfdGhpcy5wcm9wcy5wcmV2ZW50RHVwbGljYXRlIHx8IHByZXZlbnREdXBsaWNhdGUpIHtcbiAgICAgICAgICB2YXIgY29tcGFyZUZ1bmN0aW9uID0gZnVuY3Rpb24gY29tcGFyZUZ1bmN0aW9uKGl0ZW0pIHtcbiAgICAgICAgICAgIHJldHVybiBoYXNTcGVjaWZpZWRLZXkgPyBpdGVtLmtleSA9PT0ga2V5IDogaXRlbS5tZXNzYWdlID09PSBtZXNzYWdlO1xuICAgICAgICAgIH07XG5cbiAgICAgICAgICB2YXIgaW5RdWV1ZSA9IHN0YXRlLnF1ZXVlLmZpbmRJbmRleChjb21wYXJlRnVuY3Rpb24pID4gLTE7XG4gICAgICAgICAgdmFyIGluVmlldyA9IHN0YXRlLnNuYWNrcy5maW5kSW5kZXgoY29tcGFyZUZ1bmN0aW9uKSA+IC0xO1xuXG4gICAgICAgICAgaWYgKGluUXVldWUgfHwgaW5WaWV3KSB7XG4gICAgICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZURpc3BsYXlTbmFjayhfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBxdWV1ZTogW10uY29uY2F0KHN0YXRlLnF1ZXVlLCBbc25hY2tdKVxuICAgICAgICB9KSk7XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIGlkO1xuICAgIH07XG4gICAgLyoqXHJcbiAgICAgKiBSZWR1Y2VyOiBEaXNwbGF5IHNuYWNrIGlmIHRoZXJlJ3Mgc3BhY2UgZm9yIGl0LiBPdGhlcndpc2UsIGltbWVkaWF0ZWx5XHJcbiAgICAgKiBiZWdpbiBkaXNtaXNzaW5nIHRoZSBvbGRlc3QgbWVzc2FnZSB0byBzdGFydCBzaG93aW5nIHRoZSBuZXcgb25lLlxyXG4gICAgICovXG5cblxuICAgIF90aGlzLmhhbmRsZURpc3BsYXlTbmFjayA9IGZ1bmN0aW9uIChzdGF0ZSkge1xuICAgICAgdmFyIHNuYWNrcyA9IHN0YXRlLnNuYWNrcztcblxuICAgICAgaWYgKHNuYWNrcy5sZW5ndGggPj0gX3RoaXMubWF4U25hY2spIHtcbiAgICAgICAgcmV0dXJuIF90aGlzLmhhbmRsZURpc21pc3NPbGRlc3Qoc3RhdGUpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gX3RoaXMucHJvY2Vzc1F1ZXVlKHN0YXRlKTtcbiAgICB9O1xuICAgIC8qKlxyXG4gICAgICogUmVkdWNlcjogRGlzcGxheSBpdGVtcyAobm90aWZpY2F0aW9ucykgaW4gdGhlIHF1ZXVlIGlmIHRoZXJlJ3Mgc3BhY2UgZm9yIHRoZW0uXHJcbiAgICAgKi9cblxuXG4gICAgX3RoaXMucHJvY2Vzc1F1ZXVlID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICB2YXIgcXVldWUgPSBzdGF0ZS5xdWV1ZSxcbiAgICAgICAgICBzbmFja3MgPSBzdGF0ZS5zbmFja3M7XG5cbiAgICAgIGlmIChxdWV1ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgc3RhdGUsIHtcbiAgICAgICAgICBzbmFja3M6IFtdLmNvbmNhdChzbmFja3MsIFtxdWV1ZVswXV0pLFxuICAgICAgICAgIHF1ZXVlOiBxdWV1ZS5zbGljZSgxLCBxdWV1ZS5sZW5ndGgpXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gc3RhdGU7XG4gICAgfTtcbiAgICAvKipcclxuICAgICAqIFJlZHVjZXI6IEhpZGUgb2xkZXN0IHNuYWNrYmFyIG9uIHRoZSBzY3JlZW4gYmVjYXVzZSB0aGVyZSBleGlzdHMgYSBuZXcgb25lIHdoaWNoIHdlIGhhdmUgdG8gZGlzcGxheS5cclxuICAgICAqIChpZ25vcmluZyB0aGUgb25lIHdpdGggJ3BlcnNpc3QnIGZsYWcuIGkuZS4gZXhwbGljaXRseSB0b2xkIGJ5IHVzZXIgbm90IHRvIGdldCBkaXNtaXNzZWQpLlxyXG4gICAgICpcclxuICAgICAqIE5vdGUgMTogSWYgdGhlcmUgaXMgYWxyZWFkeSBhIG1lc3NhZ2UgbGVhdmluZyB0aGUgc2NyZWVuLCBubyBuZXcgbWVzc2FnZXMgYXJlIGRpc21pc3NlZC5cclxuICAgICAqIE5vdGUgMjogSWYgdGhlIG9sZGVzdCBtZXNzYWdlIGhhcyBub3QgeWV0IGVudGVyZWQgdGhlIHNjcmVlbiwgb25seSBhIHJlcXVlc3QgdG8gY2xvc2UgdGhlXHJcbiAgICAgKiAgICAgICAgIHNuYWNrYmFyIGlzIG1hZGUuIE9uY2UgaXQgZW50ZXJlZCB0aGUgc2NyZWVuLCBpdCB3aWxsIGJlIGltbWVkaWF0ZWx5IGRpc21pc3NlZC5cclxuICAgICAqL1xuXG5cbiAgICBfdGhpcy5oYW5kbGVEaXNtaXNzT2xkZXN0ID0gZnVuY3Rpb24gKHN0YXRlKSB7XG4gICAgICBpZiAoc3RhdGUuc25hY2tzLnNvbWUoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuICFpdGVtLm9wZW4gfHwgaXRlbS5yZXF1ZXN0Q2xvc2U7XG4gICAgICB9KSkge1xuICAgICAgICByZXR1cm4gc3RhdGU7XG4gICAgICB9XG5cbiAgICAgIHZhciBwb3BwZWQgPSBmYWxzZTtcbiAgICAgIHZhciBpZ25vcmUgPSBmYWxzZTtcbiAgICAgIHZhciBwZXJzaXN0ZW50Q291bnQgPSBzdGF0ZS5zbmFja3MucmVkdWNlKGZ1bmN0aW9uIChhY2MsIGN1cnJlbnQpIHtcbiAgICAgICAgcmV0dXJuIGFjYyArIChjdXJyZW50Lm9wZW4gJiYgY3VycmVudC5wZXJzaXN0ID8gMSA6IDApO1xuICAgICAgfSwgMCk7XG5cbiAgICAgIGlmIChwZXJzaXN0ZW50Q291bnQgPT09IF90aGlzLm1heFNuYWNrKSB7XG4gICAgICAgIHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIiA/IHdhcm5pbmcoTUVTU0FHRVMuTk9fUEVSU0lTVF9BTEwpIDogdm9pZCAwO1xuICAgICAgICBpZ25vcmUgPSB0cnVlO1xuICAgICAgfVxuXG4gICAgICB2YXIgc25hY2tzID0gc3RhdGUuc25hY2tzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICBpZiAoIXBvcHBlZCAmJiAoIWl0ZW0ucGVyc2lzdCB8fCBpZ25vcmUpKSB7XG4gICAgICAgICAgcG9wcGVkID0gdHJ1ZTtcblxuICAgICAgICAgIGlmICghaXRlbS5lbnRlcmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGl0ZW0sIHtcbiAgICAgICAgICAgICAgcmVxdWVzdENsb3NlOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoaXRlbS5vbkNsb3NlKSBpdGVtLm9uQ2xvc2UobnVsbCwgUkVBU09OUy5NQVhTTkFDSywgaXRlbS5rZXkpO1xuICAgICAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNsb3NlKSBfdGhpcy5wcm9wcy5vbkNsb3NlKG51bGwsIFJFQVNPTlMuTUFYU05BQ0ssIGl0ZW0ua2V5KTtcbiAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGl0ZW0sIHtcbiAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGl0ZW0pO1xuICAgICAgfSk7XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIHN0YXRlLCB7XG4gICAgICAgIHNuYWNrczogc25hY2tzXG4gICAgICB9KTtcbiAgICB9O1xuICAgIC8qKlxyXG4gICAgICogU2V0IHRoZSBlbnRlcmVkIHN0YXRlIG9mIHRoZSBzbmFja2JhciB3aXRoIHRoZSBnaXZlbiBrZXkuXHJcbiAgICAgKi9cblxuXG4gICAgX3RoaXMuaGFuZGxlRW50ZXJlZFNuYWNrID0gZnVuY3Rpb24gKG5vZGUsIGlzQXBwZWFyaW5nLCBrZXkpIHtcbiAgICAgIGlmICghaXNEZWZpbmVkKGtleSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoYW5kbGVFbnRlcmVkU25hY2sgQ2Fubm90IGJlIGNhbGxlZCB3aXRoIHVuZGVmaW5lZCBrZXknKTtcbiAgICAgIH1cblxuICAgICAgX3RoaXMuc2V0U3RhdGUoZnVuY3Rpb24gKF9yZWYpIHtcbiAgICAgICAgdmFyIHNuYWNrcyA9IF9yZWYuc25hY2tzO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIHNuYWNrczogc25hY2tzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ua2V5ID09PSBrZXkgPyBfZXh0ZW5kcyh7fSwgaXRlbSwge1xuICAgICAgICAgICAgICBlbnRlcmVkOiB0cnVlXG4gICAgICAgICAgICB9KSA6IF9leHRlbmRzKHt9LCBpdGVtKTtcbiAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgfTtcbiAgICAvKipcclxuICAgICAqIEhpZGUgYSBzbmFja2JhciBhZnRlciBpdHMgdGltZW91dC5cclxuICAgICAqL1xuXG5cbiAgICBfdGhpcy5oYW5kbGVDbG9zZVNuYWNrID0gZnVuY3Rpb24gKGV2ZW50LCByZWFzb24sIGtleSkge1xuICAgICAgLy8gc2hvdWxkIG5vdCB1c2UgY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uIGZvciBvbkNsb3NlLlxuICAgICAgLy8gYmVjYXVzZSB0aGlzLmNsb3NlU25hY2tiYXIgY2FsbGVkIHRoaXMgZnVuY3Rpb25cbiAgICAgIGlmIChfdGhpcy5wcm9wcy5vbkNsb3NlKSB7XG4gICAgICAgIF90aGlzLnByb3BzLm9uQ2xvc2UoZXZlbnQsIHJlYXNvbiwga2V5KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlYXNvbiA9PT0gUkVBU09OUy5DTElDS0FXQVkpIHJldHVybjtcbiAgICAgIHZhciBzaG91bGRDbG9zZUFsbCA9IGtleSA9PT0gdW5kZWZpbmVkO1xuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoX3JlZjIpIHtcbiAgICAgICAgdmFyIHNuYWNrcyA9IF9yZWYyLnNuYWNrcyxcbiAgICAgICAgICAgIHF1ZXVlID0gX3JlZjIucXVldWU7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgc25hY2tzOiBzbmFja3MubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICAgICAgICBpZiAoIXNob3VsZENsb3NlQWxsICYmIGl0ZW0ua2V5ICE9PSBrZXkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBpdGVtKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0uZW50ZXJlZCA/IF9leHRlbmRzKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgIG9wZW46IGZhbHNlXG4gICAgICAgICAgICB9KSA6IF9leHRlbmRzKHt9LCBpdGVtLCB7XG4gICAgICAgICAgICAgIHJlcXVlc3RDbG9zZTogdHJ1ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSksXG4gICAgICAgICAgcXVldWU6IHF1ZXVlLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ua2V5ICE9PSBrZXk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIH07XG4gICAgLyoqXHJcbiAgICAgKiBDbG9zZSBzbmFja2JhciB3aXRoIHRoZSBnaXZlbiBrZXlcclxuICAgICAqL1xuXG5cbiAgICBfdGhpcy5jbG9zZVNuYWNrYmFyID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgLy8gY2FsbCBpbmRpdmlkdWFsIHNuYWNrYmFyIG9uQ2xvc2UgY2FsbGJhY2sgcGFzc2VkIHRocm91Z2ggb3B0aW9ucyBwYXJhbWV0ZXJcbiAgICAgIHZhciB0b0JlQ2xvc2VkID0gX3RoaXMuc3RhdGUuc25hY2tzLmZpbmQoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIGl0ZW0ua2V5ID09PSBrZXk7XG4gICAgICB9KTtcblxuICAgICAgaWYgKGlzRGVmaW5lZChrZXkpICYmIHRvQmVDbG9zZWQgJiYgdG9CZUNsb3NlZC5vbkNsb3NlKSB7XG4gICAgICAgIHRvQmVDbG9zZWQub25DbG9zZShudWxsLCBSRUFTT05TLklOU1RSVUNURUQsIGtleSk7XG4gICAgICB9XG5cbiAgICAgIF90aGlzLmhhbmRsZUNsb3NlU25hY2sobnVsbCwgUkVBU09OUy5JTlNUUlVDVEVELCBrZXkpO1xuICAgIH07XG4gICAgLyoqXHJcbiAgICAgKiBXaGVuIHdlIHNldCBvcGVuIGF0dHJpYnV0ZSBvZiBhIHNuYWNrYmFyIHRvIGZhbHNlIChpLmUuIGFmdGVyIHdlIGhpZGUgYSBzbmFja2JhciksXHJcbiAgICAgKiBpdCBsZWF2ZXMgdGhlIHNjcmVlbiBhbmQgaW1tZWRpYXRlbHkgYWZ0ZXIgbGVhdmluZyBhbmltYXRpb24gaXMgZG9uZSwgdGhpcyBtZXRob2RcclxuICAgICAqIGdldHMgY2FsbGVkLiBXZSByZW1vdmUgdGhlIGhpZGRlbiBzbmFja2JhciBmcm9tIHN0YXRlIGFuZCB0aGVuIGRpc3BsYXkgbm90aWZpY2F0aW9uc1xyXG4gICAgICogd2FpdGluZyBpbiB0aGUgcXVldWUgKGlmIGFueSkuIElmIGFmdGVyIHRoaXMgcHJvY2VzcyB0aGUgcXVldWUgaXMgbm90IGVtcHR5LCB0aGVcclxuICAgICAqIG9sZGVzdCBtZXNzYWdlIGlzIGRpc21pc3NlZC5cclxuICAgICAqL1xuICAgIC8vIEB0cy1pZ25vcmVcblxuXG4gICAgX3RoaXMuaGFuZGxlRXhpdGVkU25hY2sgPSBmdW5jdGlvbiAoZXZlbnQsIGtleTEsIGtleTIpIHtcbiAgICAgIHZhciBrZXkgPSBrZXkxIHx8IGtleTI7XG5cbiAgICAgIGlmICghaXNEZWZpbmVkKGtleSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdoYW5kbGVFeGl0ZWRTbmFjayBDYW5ub3QgYmUgY2FsbGVkIHdpdGggdW5kZWZpbmVkIGtleScpO1xuICAgICAgfVxuXG4gICAgICBfdGhpcy5zZXRTdGF0ZShmdW5jdGlvbiAoc3RhdGUpIHtcbiAgICAgICAgdmFyIG5ld1N0YXRlID0gX3RoaXMucHJvY2Vzc1F1ZXVlKF9leHRlbmRzKHt9LCBzdGF0ZSwge1xuICAgICAgICAgIHNuYWNrczogc3RhdGUuc25hY2tzLmZpbHRlcihmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgICAgICAgcmV0dXJuIGl0ZW0ua2V5ICE9PSBrZXk7XG4gICAgICAgICAgfSlcbiAgICAgICAgfSkpO1xuXG4gICAgICAgIGlmIChuZXdTdGF0ZS5xdWV1ZS5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gbmV3U3RhdGU7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gX3RoaXMuaGFuZGxlRGlzbWlzc09sZGVzdChuZXdTdGF0ZSk7XG4gICAgICB9KTtcbiAgICB9O1xuXG4gICAgX3RoaXMuc3RhdGUgPSB7XG4gICAgICBzbmFja3M6IFtdLFxuICAgICAgcXVldWU6IFtdLFxuICAgICAgY29udGV4dFZhbHVlOiB7XG4gICAgICAgIGVucXVldWVTbmFja2JhcjogX3RoaXMuZW5xdWV1ZVNuYWNrYmFyLFxuICAgICAgICBjbG9zZVNuYWNrYmFyOiBfdGhpcy5jbG9zZVNuYWNrYmFyXG4gICAgICB9XG4gICAgfTtcbiAgICByZXR1cm4gX3RoaXM7XG4gIH1cblxuICB2YXIgX3Byb3RvID0gU25hY2tiYXJQcm92aWRlci5wcm90b3R5cGU7XG5cbiAgX3Byb3RvLnJlbmRlciA9IGZ1bmN0aW9uIHJlbmRlcigpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcblxuICAgIHZhciBjb250ZXh0VmFsdWUgPSB0aGlzLnN0YXRlLmNvbnRleHRWYWx1ZTtcblxuICAgIHZhciBfdGhpcyRwcm9wcyA9IHRoaXMucHJvcHMsXG4gICAgICAgIGljb25WYXJpYW50ID0gX3RoaXMkcHJvcHMuaWNvblZhcmlhbnQsXG4gICAgICAgIF90aGlzJHByb3BzJGRlbnNlID0gX3RoaXMkcHJvcHMuZGVuc2UsXG4gICAgICAgIGRlbnNlID0gX3RoaXMkcHJvcHMkZGVuc2UgPT09IHZvaWQgMCA/IERFRkFVTFRTLmRlbnNlIDogX3RoaXMkcHJvcHMkZGVuc2UsXG4gICAgICAgIF90aGlzJHByb3BzJGhpZGVJY29uViA9IF90aGlzJHByb3BzLmhpZGVJY29uVmFyaWFudCxcbiAgICAgICAgaGlkZUljb25WYXJpYW50ID0gX3RoaXMkcHJvcHMkaGlkZUljb25WID09PSB2b2lkIDAgPyBERUZBVUxUUy5oaWRlSWNvblZhcmlhbnQgOiBfdGhpcyRwcm9wcyRoaWRlSWNvblYsXG4gICAgICAgIGRvbVJvb3QgPSBfdGhpcyRwcm9wcy5kb21Sb290LFxuICAgICAgICBjaGlsZHJlbiA9IF90aGlzJHByb3BzLmNoaWxkcmVuLFxuICAgICAgICBfdGhpcyRwcm9wcyRjbGFzc2VzID0gX3RoaXMkcHJvcHMuY2xhc3NlcyxcbiAgICAgICAgY2xhc3NlcyA9IF90aGlzJHByb3BzJGNsYXNzZXMgPT09IHZvaWQgMCA/IHt9IDogX3RoaXMkcHJvcHMkY2xhc3NlcyxcbiAgICAgICAgcHJvcHMgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXNMb29zZShfdGhpcyRwcm9wcywgW1wibWF4U25hY2tcIiwgXCJwcmV2ZW50RHVwbGljYXRlXCIsIFwidmFyaWFudFwiLCBcImFuY2hvck9yaWdpblwiLCBcImljb25WYXJpYW50XCIsIFwiZGVuc2VcIiwgXCJoaWRlSWNvblZhcmlhbnRcIiwgXCJkb21Sb290XCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCJdKTtcblxuICAgIHZhciBjYXRlZyA9IHRoaXMuc3RhdGUuc25hY2tzLnJlZHVjZShmdW5jdGlvbiAoYWNjLCBjdXJyZW50KSB7XG4gICAgICB2YXIgX2V4dGVuZHMyO1xuXG4gICAgICB2YXIgY2F0ZWdvcnkgPSBvcmlnaW5LZXlFeHRyYWN0b3IoY3VycmVudC5hbmNob3JPcmlnaW4pO1xuICAgICAgdmFyIGV4aXN0aW5nT2ZDYXRlZ29yeSA9IGFjY1tjYXRlZ29yeV0gfHwgW107XG4gICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGFjYywgKF9leHRlbmRzMiA9IHt9LCBfZXh0ZW5kczJbY2F0ZWdvcnldID0gW10uY29uY2F0KGV4aXN0aW5nT2ZDYXRlZ29yeSwgW2N1cnJlbnRdKSwgX2V4dGVuZHMyKSk7XG4gICAgfSwge30pO1xuICAgIHZhciBzbmFja2JhcnMgPSBPYmplY3Qua2V5cyhjYXRlZykubWFwKGZ1bmN0aW9uIChvcmlnaW4pIHtcbiAgICAgIHZhciBzbmFja3MgPSBjYXRlZ1tvcmlnaW5dO1xuICAgICAgcmV0dXJuIFJlYWN0X19kZWZhdWx0LmNyZWF0ZUVsZW1lbnQoU25hY2tiYXJDb250YWluZXIkMSwge1xuICAgICAgICBrZXk6IG9yaWdpbixcbiAgICAgICAgZGVuc2U6IGRlbnNlLFxuICAgICAgICBhbmNob3JPcmlnaW46IHNuYWNrc1swXS5hbmNob3JPcmlnaW4sXG4gICAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmNvbnRhaW5lclJvb3QsIGNsYXNzZXNbdHJhbnNmb3JtZXIudG9Db250YWluZXJBbmNob3JPcmlnaW4ob3JpZ2luKV0pXG4gICAgICB9LCBzbmFja3MubWFwKGZ1bmN0aW9uIChzbmFjaykge1xuICAgICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTbmFja2Jhckl0ZW0kMSwgT2JqZWN0LmFzc2lnbih7fSwgcHJvcHMsIHtcbiAgICAgICAgICBrZXk6IHNuYWNrLmtleSxcbiAgICAgICAgICBzbmFjazogc25hY2ssXG4gICAgICAgICAgZGVuc2U6IGRlbnNlLFxuICAgICAgICAgIGljb25WYXJpYW50OiBpY29uVmFyaWFudCxcbiAgICAgICAgICBoaWRlSWNvblZhcmlhbnQ6IGhpZGVJY29uVmFyaWFudCxcbiAgICAgICAgICBjbGFzc2VzOiBvbWl0Q29udGFpbmVyS2V5cyhjbGFzc2VzKSxcbiAgICAgICAgICBvbkNsb3NlOiBfdGhpczIuaGFuZGxlQ2xvc2VTbmFjayxcbiAgICAgICAgICBvbkV4aXRlZDogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKFtfdGhpczIuaGFuZGxlRXhpdGVkU25hY2ssIF90aGlzMi5wcm9wcy5vbkV4aXRlZF0pLFxuICAgICAgICAgIG9uRW50ZXJlZDogY3JlYXRlQ2hhaW5lZEZ1bmN0aW9uKFtfdGhpczIuaGFuZGxlRW50ZXJlZFNuYWNrLCBfdGhpczIucHJvcHMub25FbnRlcmVkXSlcbiAgICAgICAgfSkpO1xuICAgICAgfSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBSZWFjdF9fZGVmYXVsdC5jcmVhdGVFbGVtZW50KFNuYWNrYmFyQ29udGV4dC5Qcm92aWRlciwge1xuICAgICAgdmFsdWU6IGNvbnRleHRWYWx1ZVxuICAgIH0sIGNoaWxkcmVuLCBkb21Sb290ID8gY3JlYXRlUG9ydGFsKHNuYWNrYmFycywgZG9tUm9vdCkgOiBzbmFja2JhcnMpO1xuICB9O1xuXG4gIF9jcmVhdGVDbGFzcyhTbmFja2JhclByb3ZpZGVyLCBbe1xuICAgIGtleTogXCJtYXhTbmFja1wiLFxuICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgcmV0dXJuIHRoaXMucHJvcHMubWF4U25hY2sgfHwgREVGQVVMVFMubWF4U25hY2s7XG4gICAgfVxuICB9XSk7XG5cbiAgcmV0dXJuIFNuYWNrYmFyUHJvdmlkZXI7XG59KENvbXBvbmVudCk7XG5cbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS9KYW1lc01HcmVlbmUvRnVuY3Rpb24ubmFtZS9ibG9iLzU4YjMxNGQ0YTk4MzExMGMzNjgyZjEyMjhmODQ1ZDM5Y2NjYTE4MTcvRnVuY3Rpb24ubmFtZS5qcyNMM1xudmFyIGZuTmFtZU1hdGNoUmVnZXggPSAvXlxccypmdW5jdGlvbig/Olxcc3xcXHMqXFwvXFwqLipcXCpcXC9cXHMqKSsoW14oXFxzL10qKVxccyovO1xuXG52YXIgZ2V0RnVuY3Rpb25OYW1lID0gZnVuY3Rpb24gZ2V0RnVuY3Rpb25OYW1lKGZuKSB7XG4gIHZhciBtYXRjaCA9IChcIlwiICsgZm4pLm1hdGNoKGZuTmFtZU1hdGNoUmVnZXgpO1xuICB2YXIgbmFtZSA9IG1hdGNoICYmIG1hdGNoWzFdO1xuICByZXR1cm4gbmFtZSB8fCAnJztcbn07XG4vKipcbiAqIEBwYXJhbSB7ZnVuY3Rpb259IENvbXBvbmVudFxuICogQHBhcmFtIHtzdHJpbmd9IGZhbGxiYWNrXG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICovXG5cblxudmFyIGdldEZ1bmN0aW9uQ29tcG9uZW50TmFtZSA9IGZ1bmN0aW9uIGdldEZ1bmN0aW9uQ29tcG9uZW50TmFtZShDb21wb25lbnQsIGZhbGxiYWNrKSB7XG4gIGlmIChmYWxsYmFjayA9PT0gdm9pZCAwKSB7XG4gICAgZmFsbGJhY2sgPSAnJztcbiAgfVxuXG4gIHJldHVybiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgZ2V0RnVuY3Rpb25OYW1lKENvbXBvbmVudCkgfHwgZmFsbGJhY2s7XG59O1xuXG52YXIgZ2V0V3JhcHBlZE5hbWUgPSBmdW5jdGlvbiBnZXRXcmFwcGVkTmFtZShvdXRlclR5cGUsIGlubmVyVHlwZSwgd3JhcHBlck5hbWUpIHtcbiAgdmFyIGZ1bmN0aW9uTmFtZSA9IGdldEZ1bmN0aW9uQ29tcG9uZW50TmFtZShpbm5lclR5cGUpO1xuICByZXR1cm4gb3V0ZXJUeXBlLmRpc3BsYXlOYW1lIHx8IChmdW5jdGlvbk5hbWUgIT09ICcnID8gd3JhcHBlck5hbWUgKyBcIihcIiArIGZ1bmN0aW9uTmFtZSArIFwiKVwiIDogd3JhcHBlck5hbWUpO1xufTtcbi8qKiBcbiAqIEZyb20gcmVhY3QtaXNcbiAqIEBsaW5rIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iL21hc3Rlci9wYWNrYWdlcy9zaGFyZWQvUmVhY3RTeW1ib2xzLmpzXG4gKi9cblxuXG52YXIgRm9yd2FyZFJlZiA9IGZ1bmN0aW9uIEZvcndhcmRSZWYoKSB7XG4gIHZhciBzeW1ib2xGb3IgPSB0eXBlb2YgU3ltYm9sID09PSAnZnVuY3Rpb24nICYmIFN5bWJvbFtcImZvclwiXTtcbiAgcmV0dXJuIHN5bWJvbEZvciA/IHN5bWJvbEZvcigncmVhY3QuZm9yd2FyZF9yZWYnKSA6IDB4ZWFkMDtcbn07XG4vKipcbiAqIGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9vay9yZWFjdC9ibG9iLzc2OWIxZjI3MGUxMjUxZDlkYmRjZTBmY2JkOWU5MmU1MDJkMDU5YjgvcGFja2FnZXMvc2hhcmVkL2dldENvbXBvbmVudE5hbWUuanNcbiAqXG4gKiBAcGFyYW0ge1JlYWN0LlJlYWN0VHlwZX0gQ29tcG9uZW50XG4gKiBAcmV0dXJucyB7c3RyaW5nIHwgdW5kZWZpbmVkfVxuICovXG5cblxudmFyIGdldERpc3BsYXlOYW1lID0gKGZ1bmN0aW9uIChDb21wb25lbnQpIHtcbiAgaWYgKENvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJykge1xuICAgIHJldHVybiBDb21wb25lbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHJldHVybiBnZXRGdW5jdGlvbkNvbXBvbmVudE5hbWUoQ29tcG9uZW50LCAnQ29tcG9uZW50Jyk7XG4gIH1cblxuICBpZiAodHlwZW9mIENvbXBvbmVudCA9PT0gJ29iamVjdCcpIHtcbiAgICBzd2l0Y2ggKENvbXBvbmVudC4kJHR5cGVvZikge1xuICAgICAgY2FzZSBGb3J3YXJkUmVmKCk6XG4gICAgICAgIHJldHVybiBnZXRXcmFwcGVkTmFtZShDb21wb25lbnQsIENvbXBvbmVudC5yZW5kZXIsICdGb3J3YXJkUmVmJyk7XG5cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHVuZGVmaW5lZDtcbn0pO1xuXG52YXIgd2l0aFNuYWNrYmFyID0gZnVuY3Rpb24gd2l0aFNuYWNrYmFyKENvbXBvbmVudCkge1xuICB2YXIgV3JhcHBlZENvbXBvbmVudCA9IFJlYWN0X19kZWZhdWx0LmZvcndhcmRSZWYoZnVuY3Rpb24gKHByb3BzLCByZWYpIHtcbiAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChTbmFja2JhckNvbnRleHQuQ29uc3VtZXIsIG51bGwsIGZ1bmN0aW9uIChjb250ZXh0KSB7XG4gICAgICByZXR1cm4gUmVhY3RfX2RlZmF1bHQuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHt9LCBwcm9wcywge1xuICAgICAgICByZWY6IHJlZixcbiAgICAgICAgZW5xdWV1ZVNuYWNrYmFyOiBjb250ZXh0LmVucXVldWVTbmFja2JhcixcbiAgICAgICAgY2xvc2VTbmFja2JhcjogY29udGV4dC5jbG9zZVNuYWNrYmFyXG4gICAgICB9KSk7XG4gICAgfSk7XG4gIH0pO1xuXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSA9IFwiV2l0aFNuYWNrYmFyKFwiICsgZ2V0RGlzcGxheU5hbWUoQ29tcG9uZW50KSArIFwiKVwiO1xuICB9XG5cbiAgaG9pc3ROb25SZWFjdFN0YXRpY3MoV3JhcHBlZENvbXBvbmVudCwgQ29tcG9uZW50KTtcbiAgcmV0dXJuIFdyYXBwZWRDb21wb25lbnQ7XG59O1xuXG52YXIgdXNlU25hY2tiYXIgPSAoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gdXNlQ29udGV4dChTbmFja2JhckNvbnRleHQpO1xufSk7XG5cbmV4cG9ydCB7IFNuYWNrYmFyQ29udGVudCQxIGFzIFNuYWNrYmFyQ29udGVudCwgU25hY2tiYXJQcm92aWRlciwgdXNlU25hY2tiYXIsIHdpdGhTbmFja2JhciB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bm90aXN0YWNrLmVzbS5qcy5tYXBcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJ1xyXG5pbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXHJcbmltcG9ydCB7IFRoZW1lUHJvdmlkZXIgfSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9zdHlsZXMnXHJcbmltcG9ydCBDc3NCYXNlbGluZSBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9Dc3NCYXNlbGluZSdcclxuaW1wb3J0IHRoZW1lIGZyb20gJy4uL3NyYy90aGVtZSdcclxuaW1wb3J0IHsgQXV0aFByb3ZpZGVyIH0gZnJvbSAnLi4vc2VydmljZXMvQXV0aC5jb250ZXh0J1xyXG5pbXBvcnQgeyBQcm9kdWN0UHJvdmlkZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9Qcm9kdWN0LmNvbnRleHQnXHJcbmltcG9ydCB7IFByb21vUHJvdmlkZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9Qcm9tby5jb250ZXh0J1xyXG5pbXBvcnQgeyBDYXJ0UHJvdmlkZXIgfSBmcm9tICcuLi9zZXJ2aWNlcy9DYXJ0LmNvbnRleHQnXHJcbmltcG9ydCB7IFNuYWNrYmFyUHJvdmlkZXIgfSBmcm9tICdub3Rpc3RhY2snXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeUFwcChwcm9wcykge1xyXG4gIGNvbnN0IHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSA9IHByb3BzXHJcblxyXG4gIFJlYWN0LnVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAvLyBSZW1vdmUgdGhlIHNlcnZlci1zaWRlIGluamVjdGVkIENTUy5cclxuICAgIGNvbnN0IGpzc1N0eWxlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNqc3Mtc2VydmVyLXNpZGUnKVxyXG4gICAgaWYgKGpzc1N0eWxlcykge1xyXG4gICAgICBqc3NTdHlsZXMucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChqc3NTdHlsZXMpXHJcbiAgICB9XHJcbiAgfSwgW10pXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBdXRoUHJvdmlkZXI+XHJcbiAgICAgICAgPENhcnRQcm92aWRlcj5cclxuICAgICAgICAgIDxQcm9kdWN0UHJvdmlkZXI+XHJcbiAgICAgICAgICAgIDxQcm9tb1Byb3ZpZGVyPlxyXG4gICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgPHRpdGxlPkNlaWJvIFVyYmFubzwvdGl0bGU+XHJcbiAgICAgICAgICAgICAgICA8bGluayByZWw9XCJzaG9ydGN1dCBpY29uXCIgaHJlZj1cIi9jZWliby11cmJhbm8taXNvLWxvZ28uc3ZnXCIgLz5cclxuICAgICAgICAgICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJtaW5pbXVtLXNjYWxlPTEsIGluaXRpYWwtc2NhbGU9MSwgd2lkdGg9ZGV2aWNlLXdpZHRoXCIgLz5cclxuICAgICAgICAgICAgICA8L0hlYWQ+XHJcbiAgICAgICAgICAgICAgICA8VGhlbWVQcm92aWRlciB0aGVtZT17dGhlbWV9PlxyXG4gICAgICAgICAgICAgICAgICA8U25hY2tiYXJQcm92aWRlciBtYXhTbmFjaz17M30+XHJcbiAgICAgICAgICAgICAgICAgICAgey8qIENzc0Jhc2VsaW5lIGtpY2tzdGFydCBhbiBlbGVnYW50LCBjb25zaXN0ZW50LCBhbmQgc2ltcGxlIGJhc2VsaW5lIHRvIGJ1aWxkIHVwb24uICovfVxyXG4gICAgICAgICAgICAgICAgICAgIDxDc3NCYXNlbGluZSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgICAgICAgICAgICAgPC9TbmFja2JhclByb3ZpZGVyPlxyXG4gICAgICAgICAgICAgICAgPC9UaGVtZVByb3ZpZGVyPlxyXG4gICAgICAgICAgICA8L1Byb21vUHJvdmlkZXI+XHJcbiAgICAgICAgICA8L1Byb2R1Y3RQcm92aWRlcj5cclxuICAgICAgICA8L0NhcnRQcm92aWRlcj5cclxuICAgICAgPC9BdXRoUHJvdmlkZXI+XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gIClcclxufVxyXG5cclxuTXlBcHAucHJvcFR5cGVzID0ge1xyXG4gIENvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLmlzUmVxdWlyZWQsXHJcbiAgcGFnZVByb3BzOiBQcm9wVHlwZXMub2JqZWN0LmlzUmVxdWlyZWQsXHJcbn0iXSwic291cmNlUm9vdCI6IiJ9