webpackHotUpdate_N_E("pages/index",{

/***/ "./modules/components/Stepper.js":
/*!***************************************!*\
  !*** ./modules/components/Stepper.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return VerticalLinearStepper; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @material-ui/core/styles */ "./node_modules/@material-ui/core/esm/styles/index.js");
/* harmony import */ var _material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @material-ui/core/Stepper */ "./node_modules/@material-ui/core/esm/Stepper/index.js");
/* harmony import */ var _material_ui_core_Step__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/Step */ "./node_modules/@material-ui/core/esm/Step/index.js");
/* harmony import */ var _material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @material-ui/core/StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/index.js");
/* harmony import */ var _material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @material-ui/core/StepContent */ "./node_modules/@material-ui/core/esm/StepContent/index.js");
/* harmony import */ var _material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @material-ui/core/Button */ "./node_modules/@material-ui/core/esm/Button/index.js");
/* harmony import */ var _material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @material-ui/core/Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @material-ui/core/Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");



var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\modules\\components\\Stepper.js",
    _s = $RefreshSig$();










var useStyles = Object(_material_ui_core_styles__WEBPACK_IMPORTED_MODULE_3__["makeStyles"])(function (theme) {
  return {
    root: {
      width: '100%'
    },
    button: {
      marginTop: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    actionsContainer: {
      marginBottom: theme.spacing(2)
    },
    resetContainer: {
      padding: theme.spacing(3)
    }
  };
});

function getSteps() {
  return ['Select campaign settings', 'Create an ad group', 'Create an ad'];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return "For each ad campaign that you create, you can control how much\n              you're willing to spend on clicks and conversions, which networks\n              and geographical locations you want your ads to show on, and more.";

    case 1:
      return 'An ad group contains one or more ads which target a shared set of keywords.';

    case 2:
      return "Try out different ad text to see what brings in the most customers,\n              and learn how to enhance your ads using features like ad extensions.\n              If you run into any problems with your ads, find out how to tell if\n              they're running and how to resolve approval issues.";

    default:
      return 'Unknown step';
  }
}

function VerticalLinearStepper() {
  _s();

  var _this = this;

  var classes = useStyles();

  var _React$useState = react__WEBPACK_IMPORTED_MODULE_2___default.a.useState(0),
      _React$useState2 = Object(C_Users_user_Desktop_Proyectos_React_ceibo_urbano_node_modules_next_node_modules_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_React$useState, 2),
      activeStep = _React$useState2[0],
      setActiveStep = _React$useState2[1];

  var steps = getSteps();

  var handleNext = function handleNext() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep + 1;
    });
  };

  var handleBack = function handleBack() {
    setActiveStep(function (prevActiveStep) {
      return prevActiveStep - 1;
    });
  };

  var handleReset = function handleReset() {
    setActiveStep(0);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: classes.root,
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Stepper__WEBPACK_IMPORTED_MODULE_4__["default"], {
      activeStep: activeStep,
      orientation: "vertical",
      children: steps.map(function (label, index) {
        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Step__WEBPACK_IMPORTED_MODULE_5__["default"], {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_StepLabel__WEBPACK_IMPORTED_MODULE_6__["default"], {
            children: label
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 13
          }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_StepContent__WEBPACK_IMPORTED_MODULE_7__["default"], {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
              children: getStepContent(index)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 15
            }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: classes.actionsContainer,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  disabled: activeStep === 0,
                  onClick: handleBack,
                  className: classes.button,
                  children: "Back"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 76,
                  columnNumber: 19
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
                  variant: "contained",
                  color: "primary",
                  onClick: handleNext,
                  className: classes.button,
                  children: activeStep === steps.length - 1 ? 'Finish' : 'Next'
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 83,
                  columnNumber: 19
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 75,
                columnNumber: 17
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 15
            }, _this)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 72,
            columnNumber: 13
          }, _this)]
        }, label, true, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 11
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, this), activeStep === steps.length && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Paper__WEBPACK_IMPORTED_MODULE_9__["default"], {
      square: true,
      elevation: 0,
      className: classes.resetContainer,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Typography__WEBPACK_IMPORTED_MODULE_10__["default"], {
        children: "All steps completed - you're finished"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 99,
        columnNumber: 11
      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_material_ui_core_Button__WEBPACK_IMPORTED_MODULE_8__["default"], {
        onClick: handleReset,
        className: classes.button,
        children: "Reset"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 100,
        columnNumber: 11
      }, this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 98,
      columnNumber: 9
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 67,
    columnNumber: 5
  }, this);
}

_s(VerticalLinearStepper, "5/ANSN4aidVPv0P4apAyeUUfwXQ=", false, function () {
  return [useStyles];
});

_c = VerticalLinearStepper;

var _c;

$RefreshReg$(_c, "VerticalLinearStepper");

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

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Collapse/Collapse.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Collapse/Collapse.js ***!
  \*****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime/helpers/esm/slicedToArray.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_transition_group__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-transition-group */ "./node_modules/react-transition-group/esm/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _styles_transitions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../styles/transitions */ "./node_modules/@material-ui/core/esm/styles/transitions.js");
/* harmony import */ var _transitions_utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../transitions/utils */ "./node_modules/@material-ui/core/esm/transitions/utils.js");
/* harmony import */ var _styles_useTheme__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../styles/useTheme */ "./node_modules/@material-ui/core/esm/styles/useTheme.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils */ "./node_modules/@material-ui/core/esm/utils/index.js");












var styles = function styles(theme) {
  return {
    /* Styles applied to the container element. */
    container: {
      height: 0,
      overflow: 'hidden',
      transition: theme.transitions.create('height')
    },

    /* Styles applied to the container element when the transition has entered. */
    entered: {
      height: 'auto',
      overflow: 'visible'
    },

    /* Styles applied to the container element when the transition has exited and `collapsedHeight` != 0px. */
    hidden: {
      visibility: 'hidden'
    },

    /* Styles applied to the outer wrapper element. */
    wrapper: {
      // Hack to get children with a negative margin to not falsify the height computation.
      display: 'flex'
    },

    /* Styles applied to the inner wrapper element. */
    wrapperInner: {
      width: '100%'
    }
  };
};
/**
 * The Collapse transition is used by the
 * [Vertical Stepper](/components/steppers/#vertical-stepper) StepContent component.
 * It uses [react-transition-group](https://github.com/reactjs/react-transition-group) internally.
 */

var Collapse = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["forwardRef"](function Collapse(props, ref) {
  var children = props.children,
      classes = props.classes,
      className = props.className,
      _props$collapsedHeigh = props.collapsedHeight,
      collapsedHeightProp = _props$collapsedHeigh === void 0 ? '0px' : _props$collapsedHeigh,
      _props$component = props.component,
      Component = _props$component === void 0 ? 'div' : _props$component,
      _props$disableStrictM = props.disableStrictModeCompat,
      disableStrictModeCompat = _props$disableStrictM === void 0 ? false : _props$disableStrictM,
      inProp = props.in,
      onEnter = props.onEnter,
      onEntered = props.onEntered,
      onEntering = props.onEntering,
      onExit = props.onExit,
      onExited = props.onExited,
      onExiting = props.onExiting,
      style = props.style,
      _props$timeout = props.timeout,
      timeout = _props$timeout === void 0 ? _styles_transitions__WEBPACK_IMPORTED_MODULE_8__["duration"].standard : _props$timeout,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? react_transition_group__WEBPACK_IMPORTED_MODULE_6__["Transition"] : _props$TransitionComp,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__["default"])(props, ["children", "classes", "className", "collapsedHeight", "component", "disableStrictModeCompat", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"]);

  var theme = Object(_styles_useTheme__WEBPACK_IMPORTED_MODULE_10__["default"])();
  var timer = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var wrapperRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var autoTransitionDuration = react__WEBPACK_IMPORTED_MODULE_3__["useRef"]();
  var collapsedHeight = typeof collapsedHeightProp === 'number' ? "".concat(collapsedHeightProp, "px") : collapsedHeightProp;
  react__WEBPACK_IMPORTED_MODULE_3__["useEffect"](function () {
    return function () {
      clearTimeout(timer.current);
    };
  }, []);
  var enableStrictModeCompat = theme.unstable_strictMode && !disableStrictModeCompat;
  var nodeRef = react__WEBPACK_IMPORTED_MODULE_3__["useRef"](null);
  var handleRef = Object(_utils__WEBPACK_IMPORTED_MODULE_11__["useForkRef"])(ref, enableStrictModeCompat ? nodeRef : undefined);

  var normalizedTransitionCallback = function normalizedTransitionCallback(callback) {
    return function (nodeOrAppearing, maybeAppearing) {
      if (callback) {
        var _ref = enableStrictModeCompat ? [nodeRef.current, nodeOrAppearing] : [nodeOrAppearing, maybeAppearing],
            _ref2 = Object(_babel_runtime_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, 2),
            node = _ref2[0],
            isAppearing = _ref2[1]; // onEnterXxx and onExitXxx callbacks have a different arguments.length value.


        if (isAppearing === undefined) {
          callback(node);
        } else {
          callback(node, isAppearing);
        }
      }
    };
  };

  var handleEnter = normalizedTransitionCallback(function (node, isAppearing) {
    node.style.height = collapsedHeight;

    if (onEnter) {
      onEnter(node, isAppearing);
    }
  });
  var handleEntering = normalizedTransitionCallback(function (node, isAppearing) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    var _getTransitionProps = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_9__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'enter'
    }),
        transitionDuration = _getTransitionProps.duration;

    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }

    node.style.height = "".concat(wrapperHeight, "px");

    if (onEntering) {
      onEntering(node, isAppearing);
    }
  });
  var handleEntered = normalizedTransitionCallback(function (node, isAppearing) {
    node.style.height = 'auto';

    if (onEntered) {
      onEntered(node, isAppearing);
    }
  });
  var handleExit = normalizedTransitionCallback(function (node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;
    node.style.height = "".concat(wrapperHeight, "px");

    if (onExit) {
      onExit(node);
    }
  });
  var handleExited = normalizedTransitionCallback(onExited);
  var handleExiting = normalizedTransitionCallback(function (node) {
    var wrapperHeight = wrapperRef.current ? wrapperRef.current.clientHeight : 0;

    var _getTransitionProps2 = Object(_transitions_utils__WEBPACK_IMPORTED_MODULE_9__["getTransitionProps"])({
      style: style,
      timeout: timeout
    }, {
      mode: 'exit'
    }),
        transitionDuration = _getTransitionProps2.duration;

    if (timeout === 'auto') {
      var duration2 = theme.transitions.getAutoHeightDuration(wrapperHeight);
      node.style.transitionDuration = "".concat(duration2, "ms");
      autoTransitionDuration.current = duration2;
    } else {
      node.style.transitionDuration = typeof transitionDuration === 'string' ? transitionDuration : "".concat(transitionDuration, "ms");
    }

    node.style.height = collapsedHeight;

    if (onExiting) {
      onExiting(node);
    }
  });

  var addEndListener = function addEndListener(nodeOrNext, maybeNext) {
    var next = enableStrictModeCompat ? nodeOrNext : maybeNext;

    if (timeout === 'auto') {
      timer.current = setTimeout(next, autoTransitionDuration.current || 0);
    }
  };

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    in: inProp,
    onEnter: handleEnter,
    onEntered: handleEntered,
    onEntering: handleEntering,
    onExit: handleExit,
    onExited: handleExited,
    onExiting: handleExiting,
    addEndListener: addEndListener,
    nodeRef: enableStrictModeCompat ? nodeRef : undefined,
    timeout: timeout === 'auto' ? null : timeout
  }, other), function (state, childProps) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"](Component, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.container, className, {
        'entered': classes.entered,
        'exited': !inProp && collapsedHeight === '0px' && classes.hidden
      }[state]),
      style: Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
        minHeight: collapsedHeight
      }, style),
      ref: handleRef
    }, childProps), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: classes.wrapper,
      ref: wrapperRef
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_3__["createElement"]("div", {
      className: classes.wrapperInner
    }, children)));
  });
});
 true ? Collapse.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * The content node to be collapsed.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string,

  /**
   * The height of the container when collapsed.
   */
  collapsedHeight: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.string]),

  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a
  /* @typescript-to-proptypes-ignore */
  .elementType,

  /**
   * Enable this prop if you encounter 'Function components cannot be given refs',
   * use `unstable_createStrictModeTheme`,
   * and can't forward the ref in the passed `Component`.
   */
  disableStrictModeCompat: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * If `true`, the component will transition in.
   */
  in: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.bool,

  /**
   * @ignore
   */
  onEnter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onEntered: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onEntering: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onExit: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onExited: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  onExiting: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.func,

  /**
   * @ignore
   */
  style: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.object,

  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  timeout: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_5___default.a.number
  })])
} : undefined;
Collapse.muiSupportAuto = true;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_7__["default"])(styles, {
  name: 'MuiCollapse'
})(Collapse));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Collapse/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Collapse/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Collapse */ "./node_modules/@material-ui/core/esm/Collapse/Collapse.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Collapse__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Step/Step.js":
/*!*********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Step/Step.js ***!
  \*********************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-is */ "./node_modules/react-is/index.js");
/* harmony import */ var react_is__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_is__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = {
  /* Styles applied to the root element. */
  root: {},

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    paddingLeft: 8,
    paddingRight: 8
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {},

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    flex: 1,
    position: 'relative'
  },

  /* Pseudo-class applied to the root element if `completed={true}`. */
  completed: {}
};
var Step = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Step(props, ref) {
  var _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$completed = props.completed,
      completed = _props$completed === void 0 ? false : _props$completed,
      connectorProp = props.connector,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$expanded = props.expanded,
      expanded = _props$expanded === void 0 ? false : _props$expanded,
      index = props.index,
      last = props.last,
      orientation = props.orientation,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "connector", "disabled", "expanded", "index", "last", "orientation"]);

  var connector = connectorProp ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](connectorProp, {
    orientation: orientation,
    alternativeLabel: alternativeLabel,
    index: index,
    active: active,
    completed: completed,
    disabled: disabled
  }) : null;
  var newChildren = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_5__["default"])(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel, completed && classes.completed),
    ref: ref
  }, other), connector && alternativeLabel && index !== 0 ? connector : null, react__WEBPACK_IMPORTED_MODULE_2__["Children"].map(children, function (child) {
    if (! /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](child)) {
      return null;
    }

    if (true) {
      if (Object(react_is__WEBPACK_IMPORTED_MODULE_3__["isFragment"])(child)) {
        console.error(["Material-UI: The Step component doesn't accept a Fragment as a child.", 'Consider providing an array instead.'].join('\n'));
      }
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](child, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      active: active,
      alternativeLabel: alternativeLabel,
      completed: completed,
      disabled: disabled,
      expanded: expanded,
      last: last,
      icon: index + 1,
      orientation: orientation
    }, child.props));
  }));

  if (connector && !alternativeLabel && index !== 0) {
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](react__WEBPACK_IMPORTED_MODULE_2__["Fragment"], null, connector, newChildren);
  }

  return newChildren;
});
 true ? Step.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Sets the step as active. Is passed to child components.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Should be `Step` sub-components such as `StepLabel`, `StepContent`.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.string,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Mark the step as disabled, will also disable the button if
   * `StepButton` is a child of `Step`. Is passed to child components.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool,

  /**
   * Expand the step.
   */
  expanded: prop_types__WEBPACK_IMPORTED_MODULE_4___default.a.bool
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiStep'
})(Step));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Step/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Step/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Step__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Step */ "./node_modules/@material-ui/core/esm/Step/Step.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Step__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/StepConnector/StepConnector.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/StepConnector/StepConnector.js ***!
  \***************************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");






var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      flex: '1 1 auto'
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {
      marginLeft: 12,
      // half icon
      padding: '0 0 8px'
    },

    /* Styles applied to the root element if `alternativeLabel={true}`. */
    alternativeLabel: {
      position: 'absolute',
      top: 8 + 4,
      left: 'calc(-50% + 20px)',
      right: 'calc(50% + 20px)'
    },

    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the line element. */
    line: {
      display: 'block',
      borderColor: theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600]
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    lineHorizontal: {
      borderTopStyle: 'solid',
      borderTopWidth: 1
    },

    /* Styles applied to the root element if `orientation="vertical"`. */
    lineVertical: {
      borderLeftStyle: 'solid',
      borderLeftWidth: 1,
      minHeight: 24
    }
  };
};
var StepConnector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function StepConnector(props, ref) {
  var active = props.active,
      _props$alternativeLab = props.alternativeLabel,
      alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab,
      classes = props.classes,
      className = props.className,
      completed = props.completed,
      disabled = props.disabled,
      index = props.index,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["active", "alternativeLabel", "classes", "className", "completed", "disabled", "index", "orientation"]);

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel, active && classes.active, completed && classes.completed, disabled && classes.disabled),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.line, {
      'horizontal': classes.lineHorizontal,
      'vertical': classes.lineVertical
    }[orientation])
  }));
});
 true ? StepConnector.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiStepConnector'
})(StepConnector));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/StepConnector/index.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/StepConnector/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepConnector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/StepConnector.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StepConnector__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/StepContent/StepContent.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/StepContent/StepContent.js ***!
  \***********************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _Collapse__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Collapse */ "./node_modules/@material-ui/core/esm/Collapse/index.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      marginTop: 8,
      marginLeft: 12,
      // half icon
      paddingLeft: 8 + 12,
      // margin + half icon
      paddingRight: 8,
      borderLeft: "1px solid ".concat(theme.palette.type === 'light' ? theme.palette.grey[400] : theme.palette.grey[600])
    },

    /* Styles applied to the root element if `last={true}` (controlled by `Step`). */
    last: {
      borderLeft: 'none'
    },

    /* Styles applied to the Transition component. */
    transition: {}
  };
};
var StepContent = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function StepContent(props, ref) {
  var active = props.active,
      alternativeLabel = props.alternativeLabel,
      children = props.children,
      classes = props.classes,
      className = props.className,
      completed = props.completed,
      expanded = props.expanded,
      last = props.last,
      optional = props.optional,
      orientation = props.orientation,
      _props$TransitionComp = props.TransitionComponent,
      TransitionComponent = _props$TransitionComp === void 0 ? _Collapse__WEBPACK_IMPORTED_MODULE_5__["default"] : _props$TransitionComp,
      _props$transitionDura = props.transitionDuration,
      transitionDurationProp = _props$transitionDura === void 0 ? 'auto' : _props$transitionDura,
      TransitionProps = props.TransitionProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "expanded", "last", "optional", "orientation", "TransitionComponent", "transitionDuration", "TransitionProps"]);

  if (true) {
    if (orientation !== 'vertical') {
      console.error('Material-UI: <StepContent /> is only designed for use with the vertical stepper.');
    }
  }

  var transitionDuration = transitionDurationProp;

  if (transitionDurationProp === 'auto' && !TransitionComponent.muiSupportAuto) {
    transitionDuration = undefined;
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("div", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, className, last && classes.last),
    ref: ref
  }, other), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](TransitionComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    in: active || expanded,
    className: classes.transition,
    timeout: transitionDuration,
    unmountOnExit: true
  }, TransitionProps), children));
});
 true ? StepContent.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Step content.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * The component used for the transition.
   * [Follow this guide](/components/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   */
  TransitionComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Adjust the duration of the content expand transition.
   * Passed as a prop to the transition component.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   */
  transitionDuration: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOfType([prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['auto']), prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number, prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.shape({
    appear: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    enter: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
    exit: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number
  })]),

  /**
   * Props applied to the [`Transition`](http://reactcommunity.org/react-transition-group/transition#Transition-props) element.
   */
  TransitionProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_6__["default"])(styles, {
  name: 'MuiStepContent'
})(StepContent));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/StepContent/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/StepContent/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepContent__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepContent */ "./node_modules/@material-ui/core/esm/StepContent/StepContent.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StepContent__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/StepIcon/StepIcon.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/StepIcon/StepIcon.js ***!
  \*****************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _internal_svg_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../internal/svg-icons/CheckCircle */ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckCircle.js");
/* harmony import */ var _internal_svg_icons_Warning__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../internal/svg-icons/Warning */ "./node_modules/@material-ui/core/esm/internal/svg-icons/Warning.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _SvgIcon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../SvgIcon */ "./node_modules/@material-ui/core/esm/SvgIcon/index.js");







var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'block',
      color: theme.palette.text.disabled,
      '&$completed': {
        color: theme.palette.primary.main
      },
      '&$active': {
        color: theme.palette.primary.main
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Styles applied to the SVG text element. */
    text: {
      fill: theme.palette.primary.contrastText,
      fontSize: theme.typography.caption.fontSize,
      fontFamily: theme.typography.fontFamily
    },

    /* Pseudo-class applied to the root element if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the root element if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element if `error={true}`. */
    error: {}
  };
};

var _ref = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("circle", {
  cx: "12",
  cy: "12",
  r: "12"
});

var StepIcon = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["forwardRef"](function StepIcon(props, ref) {
  var _props$completed = props.completed,
      completed = _props$completed === void 0 ? false : _props$completed,
      icon = props.icon,
      _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      classes = props.classes;

  if (typeof icon === 'number' || typeof icon === 'string') {
    var className = Object(clsx__WEBPACK_IMPORTED_MODULE_2__["default"])(classes.root, active && classes.active, error && classes.error, completed && classes.completed);

    if (error) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_internal_svg_icons_Warning__WEBPACK_IMPORTED_MODULE_4__["default"], {
        className: className,
        ref: ref
      });
    }

    if (completed) {
      return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_internal_svg_icons_CheckCircle__WEBPACK_IMPORTED_MODULE_3__["default"], {
        className: className,
        ref: ref
      });
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_SvgIcon__WEBPACK_IMPORTED_MODULE_6__["default"], {
      className: className,
      ref: ref
    }, _ref, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("text", {
      className: classes.text,
      x: "12",
      y: "16",
      textAnchor: "middle"
    }, icon));
  }

  return icon;
});
 true ? StepIcon.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Whether this step is active.
   */
  active: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.object,

  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * Mark the step as failed.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.bool,

  /**
   * The label displayed in the step icon.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiStepIcon'
})(StepIcon));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/StepIcon/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/StepIcon/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepIcon__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepIcon */ "./node_modules/@material-ui/core/esm/StepIcon/StepIcon.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StepIcon__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/StepLabel/StepLabel.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/StepLabel/StepLabel.js ***!
  \*******************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Typography__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Typography */ "./node_modules/@material-ui/core/esm/Typography/index.js");
/* harmony import */ var _StepIcon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../StepIcon */ "./node_modules/@material-ui/core/esm/StepIcon/index.js");








var styles = function styles(theme) {
  return {
    /* Styles applied to the root element. */
    root: {
      display: 'flex',
      alignItems: 'center',
      '&$alternativeLabel': {
        flexDirection: 'column'
      },
      '&$disabled': {
        cursor: 'default'
      }
    },

    /* Styles applied to the root element if `orientation="horizontal"`. */
    horizontal: {},

    /* Styles applied to the root element if `orientation="vertical"`. */
    vertical: {},

    /* Styles applied to the `Typography` component which wraps `children`. */
    label: {
      color: theme.palette.text.secondary,
      '&$active': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$completed': {
        color: theme.palette.text.primary,
        fontWeight: 500
      },
      '&$alternativeLabel': {
        textAlign: 'center',
        marginTop: 16
      },
      '&$error': {
        color: theme.palette.error.main
      }
    },

    /* Pseudo-class applied to the `Typography` component if `active={true}`. */
    active: {},

    /* Pseudo-class applied to the `Typography` component if `completed={true}`. */
    completed: {},

    /* Pseudo-class applied to the root element and `Typography` component if `error={true}`. */
    error: {},

    /* Pseudo-class applied to the root element and `Typography` component if `disabled={true}`. */
    disabled: {},

    /* Styles applied to the `icon` container element. */
    iconContainer: {
      flexShrink: 0,
      // Fix IE 11 issue
      display: 'flex',
      paddingRight: 8,
      '&$alternativeLabel': {
        paddingRight: 0
      }
    },

    /* Pseudo-class applied to the root and icon container and `Typography` if `alternativeLabel={true}`. */
    alternativeLabel: {},

    /* Styles applied to the container element which wraps `Typography` and `optional`. */
    labelContainer: {
      width: '100%'
    }
  };
};
var StepLabel = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function StepLabel(props, ref) {
  var _props$active = props.active,
      active = _props$active === void 0 ? false : _props$active,
      _props$alternativeLab = props.alternativeLabel,
      alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$completed = props.completed,
      completed = _props$completed === void 0 ? false : _props$completed,
      _props$disabled = props.disabled,
      disabled = _props$disabled === void 0 ? false : _props$disabled,
      _props$error = props.error,
      error = _props$error === void 0 ? false : _props$error,
      expanded = props.expanded,
      icon = props.icon,
      last = props.last,
      optional = props.optional,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      StepIconComponentProp = props.StepIconComponent,
      StepIconProps = props.StepIconProps,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["active", "alternativeLabel", "children", "classes", "className", "completed", "disabled", "error", "expanded", "icon", "last", "optional", "orientation", "StepIconComponent", "StepIconProps"]);

  var StepIconComponent = StepIconComponentProp;

  if (icon && !StepIconComponent) {
    StepIconComponent = _StepIcon__WEBPACK_IMPORTED_MODULE_7__["default"];
  }

  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes[orientation], className, disabled && classes.disabled, alternativeLabel && classes.alternativeLabel, error && classes.error),
    ref: ref
  }, other), icon || StepIconComponent ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.iconContainer, alternativeLabel && classes.alternativeLabel)
  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](StepIconComponent, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    completed: completed,
    active: active,
    error: error,
    icon: icon
  }, StepIconProps))) : null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"]("span", {
    className: classes.labelContainer
  }, children ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Typography__WEBPACK_IMPORTED_MODULE_6__["default"], {
    variant: "body2",
    component: "span",
    display: "block",
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.label, alternativeLabel && classes.alternativeLabel, completed && classes.completed, active && classes.active, error && classes.error)
  }, children) : null, optional));
});
 true ? StepLabel.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * In most cases will simply be a string containing a title for the label.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * Mark the step as disabled, will also disable the button if
   * `StepLabelButton` is a child of `StepLabel`. Is passed to child components.
   */
  disabled: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Mark the step as failed.
   */
  error: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Override the default label of the step icon.
   */
  icon: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The optional node to display.
   */
  optional: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * The component to render in place of the [`StepIcon`](/api/step-icon/).
   */
  StepIconComponent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.elementType,

  /**
   * Props applied to the [`StepIcon`](/api/step-icon/) element.
   */
  StepIconProps: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object
} : undefined;
StepLabel.muiName = 'StepLabel';
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiStepLabel'
})(StepLabel));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/StepLabel/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/StepLabel/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StepLabel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StepLabel */ "./node_modules/@material-ui/core/esm/StepLabel/StepLabel.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _StepLabel__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Stepper/Stepper.js":
/*!***************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Stepper/Stepper.js ***!
  \***************************************************************/
/*! exports provided: styles, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");
/* harmony import */ var _styles_withStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/withStyles */ "./node_modules/@material-ui/core/esm/styles/withStyles.js");
/* harmony import */ var _Paper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Paper */ "./node_modules/@material-ui/core/esm/Paper/index.js");
/* harmony import */ var _StepConnector__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../StepConnector */ "./node_modules/@material-ui/core/esm/StepConnector/index.js");








var styles = {
  /* Styles applied to the root element. */
  root: {
    display: 'flex',
    padding: 24
  },

  /* Styles applied to the root element if `orientation="horizontal"`. */
  horizontal: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  /* Styles applied to the root element if `orientation="vertical"`. */
  vertical: {
    flexDirection: 'column'
  },

  /* Styles applied to the root element if `alternativeLabel={true}`. */
  alternativeLabel: {
    alignItems: 'flex-start'
  }
};
var defaultConnector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_StepConnector__WEBPACK_IMPORTED_MODULE_7__["default"], null);
var Stepper = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["forwardRef"](function Stepper(props, ref) {
  var _props$activeStep = props.activeStep,
      activeStep = _props$activeStep === void 0 ? 0 : _props$activeStep,
      _props$alternativeLab = props.alternativeLabel,
      alternativeLabel = _props$alternativeLab === void 0 ? false : _props$alternativeLab,
      children = props.children,
      classes = props.classes,
      className = props.className,
      _props$connector = props.connector,
      connectorProp = _props$connector === void 0 ? defaultConnector : _props$connector,
      _props$nonLinear = props.nonLinear,
      nonLinear = _props$nonLinear === void 0 ? false : _props$nonLinear,
      _props$orientation = props.orientation,
      orientation = _props$orientation === void 0 ? 'horizontal' : _props$orientation,
      other = Object(_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(props, ["activeStep", "alternativeLabel", "children", "classes", "className", "connector", "nonLinear", "orientation"]);

  var connector = /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["isValidElement"](connectorProp) ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](connectorProp, {
    orientation: orientation
  }) : null;
  var childrenArray = react__WEBPACK_IMPORTED_MODULE_2__["Children"].toArray(children);
  var steps = childrenArray.map(function (step, index) {
    var state = {
      index: index,
      active: false,
      completed: false,
      disabled: false
    };

    if (activeStep === index) {
      state.active = true;
    } else if (!nonLinear && activeStep > index) {
      state.completed = true;
    } else if (!nonLinear && activeStep < index) {
      state.disabled = true;
    }

    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["cloneElement"](step, Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
      alternativeLabel: alternativeLabel,
      connector: connector,
      last: index + 1 === childrenArray.length,
      orientation: orientation
    }, state, step.props));
  });
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2__["createElement"](_Paper__WEBPACK_IMPORTED_MODULE_6__["default"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
    square: true,
    elevation: 0,
    className: Object(clsx__WEBPACK_IMPORTED_MODULE_4__["default"])(classes.root, classes[orientation], className, alternativeLabel && classes.alternativeLabel),
    ref: ref
  }, other), steps);
});
 true ? Stepper.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------

  /**
   * Set the active step (zero based index).
   * Set to -1 to disable all the steps.
   */
  activeStep: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,

  /**
   * If set to 'true' and orientation is horizontal,
   * then the step label will be positioned under the icon.
   */
  alternativeLabel: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * Two or more `<Step />` components.
   */
  children: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.node,

  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object,

  /**
   * @ignore
   */
  className: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,

  /**
   * An element to be placed between each step.
   */
  connector: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.element,

  /**
   * If set the `Stepper` will not assist in controlling steps for linear flow.
   */
  nonLinear: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,

  /**
   * The stepper orientation (layout flow direction).
   */
  orientation: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.oneOf(['horizontal', 'vertical'])
} : undefined;
/* harmony default export */ __webpack_exports__["default"] = (Object(_styles_withStyles__WEBPACK_IMPORTED_MODULE_5__["default"])(styles, {
  name: 'MuiStepper'
})(Stepper));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/Stepper/index.js":
/*!*************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/Stepper/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Stepper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Stepper */ "./node_modules/@material-ui/core/esm/Stepper/Stepper.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _Stepper__WEBPACK_IMPORTED_MODULE_0__["default"]; });



/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/CheckCircle.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/CheckCircle.js ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M12 0a12 12 0 1 0 0 24 12 12 0 0 0 0-24zm-2 17l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"
}), 'CheckCircle'));

/***/ }),

/***/ "./node_modules/@material-ui/core/esm/internal/svg-icons/Warning.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@material-ui/core/esm/internal/svg-icons/Warning.js ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/createSvgIcon */ "./node_modules/@material-ui/core/esm/utils/createSvgIcon.js");


/**
 * @ignore - internal component.
 */

/* harmony default export */ __webpack_exports__["default"] = (Object(_utils_createSvgIcon__WEBPACK_IMPORTED_MODULE_1__["default"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("path", {
  d: "M1 21h22L12 2 1 21zm12-3h-2v-2h2v2zm0-4h-2v-4h2v4z"
}), 'Warning'));

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../modules/views/AppAppBar */ "./modules/views/AppAppBar.js");
/* harmony import */ var _modules_views_ProductHero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../modules/views/ProductHero */ "./modules/views/ProductHero.js");
/* harmony import */ var _modules_views_ProductValues__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../modules/views/ProductValues */ "./modules/views/ProductValues.js");
/* harmony import */ var _modules_views_ProductCategories__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../modules/views/ProductCategories */ "./modules/views/ProductCategories.js");
/* harmony import */ var _modules_views_ProductHowItWorks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../modules/views/ProductHowItWorks */ "./modules/views/ProductHowItWorks.js");
/* harmony import */ var _modules_views_ProductCTA__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../modules/views/ProductCTA */ "./modules/views/ProductCTA.js");
/* harmony import */ var _modules_components_Stepper__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../modules/components/Stepper */ "./modules/components/Stepper.js");
/* harmony import */ var _modules_views_ProductSmokingHero__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../modules/views/ProductSmokingHero */ "./modules/views/ProductSmokingHero.js");
/* harmony import */ var _modules_views_AppFooter__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../modules/views/AppFooter */ "./modules/views/AppFooter.js");

var _jsxFileName = "C:\\Users\\user\\Desktop\\Proyectos\\React\\ceibo-urbano\\pages\\index.js";










function Index() {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppAppBar__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_ProductHero__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_ProductValues__WEBPACK_IMPORTED_MODULE_4__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 17,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_ProductCategories__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_ProductHowItWorks__WEBPACK_IMPORTED_MODULE_6__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 19,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_components_Stepper__WEBPACK_IMPORTED_MODULE_8__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_ProductSmokingHero__WEBPACK_IMPORTED_MODULE_9__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 7
    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_modules_views_AppFooter__WEBPACK_IMPORTED_MODULE_10__["default"], {}, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 23,
      columnNumber: 7
    }, this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 14,
    columnNumber: 5
  }, this);
}
_c = Index;

var _c;

$RefreshReg$(_c, "Index");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vbW9kdWxlcy9jb21wb25lbnRzL1N0ZXBwZXIuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ29sbGFwc2UvQ29sbGFwc2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vQ29sbGFwc2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU3RlcC9TdGVwLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1N0ZXAvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU3RlcENvbm5lY3Rvci9TdGVwQ29ubmVjdG9yLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1N0ZXBDb25uZWN0b3IvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU3RlcENvbnRlbnQvU3RlcENvbnRlbnQuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU3RlcENvbnRlbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU3RlcEljb24vU3RlcEljb24uanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU3RlcEljb24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU3RlcExhYmVsL1N0ZXBMYWJlbC5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL0BtYXRlcmlhbC11aS9jb3JlL2VzbS9TdGVwTGFiZWwvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vU3RlcHBlci9TdGVwcGVyLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL1N0ZXBwZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9AbWF0ZXJpYWwtdWkvY29yZS9lc20vaW50ZXJuYWwvc3ZnLWljb25zL0NoZWNrQ2lyY2xlLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvQG1hdGVyaWFsLXVpL2NvcmUvZXNtL2ludGVybmFsL3N2Zy1pY29ucy9XYXJuaW5nLmpzIiwid2VicGFjazovL19OX0UvLi9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6WyJ1c2VTdHlsZXMiLCJtYWtlU3R5bGVzIiwidGhlbWUiLCJyb290Iiwid2lkdGgiLCJidXR0b24iLCJtYXJnaW5Ub3AiLCJzcGFjaW5nIiwibWFyZ2luUmlnaHQiLCJhY3Rpb25zQ29udGFpbmVyIiwibWFyZ2luQm90dG9tIiwicmVzZXRDb250YWluZXIiLCJwYWRkaW5nIiwiZ2V0U3RlcHMiLCJnZXRTdGVwQ29udGVudCIsInN0ZXAiLCJWZXJ0aWNhbExpbmVhclN0ZXBwZXIiLCJjbGFzc2VzIiwiUmVhY3QiLCJ1c2VTdGF0ZSIsImFjdGl2ZVN0ZXAiLCJzZXRBY3RpdmVTdGVwIiwic3RlcHMiLCJoYW5kbGVOZXh0IiwicHJldkFjdGl2ZVN0ZXAiLCJoYW5kbGVCYWNrIiwiaGFuZGxlUmVzZXQiLCJtYXAiLCJsYWJlbCIsImluZGV4IiwibGVuZ3RoIiwiSW5kZXgiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQSxJ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RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsZUFFRSxxRUFBQyxrRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkYsZUFHRSxxRUFBQyxvRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEYsZUFJRSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSkYsZUFLRSxxRUFBQyx3RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBTEYsZUFPRSxxRUFBQyxtRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUEYsZUFRRSxxRUFBQyx5RUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBUkYsZUFTRSxxRUFBQyxpRUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFhRDtLQWR1QkEsSyIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC41YTdjNDZhMmNjMTU5NjczMGU0Ny5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcclxuaW1wb3J0IHsgbWFrZVN0eWxlcyB9IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL3N0eWxlcyc7XHJcbmltcG9ydCBTdGVwcGVyIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1N0ZXBwZXInO1xyXG5pbXBvcnQgU3RlcCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwJztcclxuaW1wb3J0IFN0ZXBMYWJlbCBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9TdGVwTGFiZWwnO1xyXG5pbXBvcnQgU3RlcENvbnRlbnQgZnJvbSAnQG1hdGVyaWFsLXVpL2NvcmUvU3RlcENvbnRlbnQnO1xyXG5pbXBvcnQgQnV0dG9uIGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL0J1dHRvbic7XHJcbmltcG9ydCBQYXBlciBmcm9tICdAbWF0ZXJpYWwtdWkvY29yZS9QYXBlcic7XHJcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtYXRlcmlhbC11aS9jb3JlL1R5cG9ncmFwaHknO1xyXG5cclxuY29uc3QgdXNlU3R5bGVzID0gbWFrZVN0eWxlcygodGhlbWUpID0+ICh7XHJcbiAgcm9vdDoge1xyXG4gICAgd2lkdGg6ICcxMDAlJyxcclxuICB9LFxyXG4gIGJ1dHRvbjoge1xyXG4gICAgbWFyZ2luVG9wOiB0aGVtZS5zcGFjaW5nKDEpLFxyXG4gICAgbWFyZ2luUmlnaHQ6IHRoZW1lLnNwYWNpbmcoMSksXHJcbiAgfSxcclxuICBhY3Rpb25zQ29udGFpbmVyOiB7XHJcbiAgICBtYXJnaW5Cb3R0b206IHRoZW1lLnNwYWNpbmcoMiksXHJcbiAgfSxcclxuICByZXNldENvbnRhaW5lcjoge1xyXG4gICAgcGFkZGluZzogdGhlbWUuc3BhY2luZygzKSxcclxuICB9LFxyXG59KSk7XHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwcygpIHtcclxuICByZXR1cm4gWydTZWxlY3QgY2FtcGFpZ24gc2V0dGluZ3MnLCAnQ3JlYXRlIGFuIGFkIGdyb3VwJywgJ0NyZWF0ZSBhbiBhZCddO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRTdGVwQ29udGVudChzdGVwKSB7XHJcbiAgc3dpdGNoIChzdGVwKSB7XHJcbiAgICBjYXNlIDA6XHJcbiAgICAgIHJldHVybiBgRm9yIGVhY2ggYWQgY2FtcGFpZ24gdGhhdCB5b3UgY3JlYXRlLCB5b3UgY2FuIGNvbnRyb2wgaG93IG11Y2hcclxuICAgICAgICAgICAgICB5b3UncmUgd2lsbGluZyB0byBzcGVuZCBvbiBjbGlja3MgYW5kIGNvbnZlcnNpb25zLCB3aGljaCBuZXR3b3Jrc1xyXG4gICAgICAgICAgICAgIGFuZCBnZW9ncmFwaGljYWwgbG9jYXRpb25zIHlvdSB3YW50IHlvdXIgYWRzIHRvIHNob3cgb24sIGFuZCBtb3JlLmA7XHJcbiAgICBjYXNlIDE6XHJcbiAgICAgIHJldHVybiAnQW4gYWQgZ3JvdXAgY29udGFpbnMgb25lIG9yIG1vcmUgYWRzIHdoaWNoIHRhcmdldCBhIHNoYXJlZCBzZXQgb2Yga2V5d29yZHMuJztcclxuICAgIGNhc2UgMjpcclxuICAgICAgcmV0dXJuIGBUcnkgb3V0IGRpZmZlcmVudCBhZCB0ZXh0IHRvIHNlZSB3aGF0IGJyaW5ncyBpbiB0aGUgbW9zdCBjdXN0b21lcnMsXHJcbiAgICAgICAgICAgICAgYW5kIGxlYXJuIGhvdyB0byBlbmhhbmNlIHlvdXIgYWRzIHVzaW5nIGZlYXR1cmVzIGxpa2UgYWQgZXh0ZW5zaW9ucy5cclxuICAgICAgICAgICAgICBJZiB5b3UgcnVuIGludG8gYW55IHByb2JsZW1zIHdpdGggeW91ciBhZHMsIGZpbmQgb3V0IGhvdyB0byB0ZWxsIGlmXHJcbiAgICAgICAgICAgICAgdGhleSdyZSBydW5uaW5nIGFuZCBob3cgdG8gcmVzb2x2ZSBhcHByb3ZhbCBpc3N1ZXMuYDtcclxuICAgIGRlZmF1bHQ6XHJcbiAgICAgIHJldHVybiAnVW5rbm93biBzdGVwJztcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFZlcnRpY2FsTGluZWFyU3RlcHBlcigpIHtcclxuICBjb25zdCBjbGFzc2VzID0gdXNlU3R5bGVzKCk7XHJcbiAgY29uc3QgW2FjdGl2ZVN0ZXAsIHNldEFjdGl2ZVN0ZXBdID0gUmVhY3QudXNlU3RhdGUoMCk7XHJcbiAgY29uc3Qgc3RlcHMgPSBnZXRTdGVwcygpO1xyXG5cclxuICBjb25zdCBoYW5kbGVOZXh0ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlU3RlcCgocHJldkFjdGl2ZVN0ZXApID0+IHByZXZBY3RpdmVTdGVwICsgMSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgaGFuZGxlQmFjayA9ICgpID0+IHtcclxuICAgIHNldEFjdGl2ZVN0ZXAoKHByZXZBY3RpdmVTdGVwKSA9PiBwcmV2QWN0aXZlU3RlcCAtIDEpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZVJlc2V0ID0gKCkgPT4ge1xyXG4gICAgc2V0QWN0aXZlU3RlcCgwKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2NsYXNzZXMucm9vdH0+XHJcbiAgICAgIDxTdGVwcGVyIGFjdGl2ZVN0ZXA9e2FjdGl2ZVN0ZXB9IG9yaWVudGF0aW9uPVwidmVydGljYWxcIj5cclxuICAgICAgICB7c3RlcHMubWFwKChsYWJlbCwgaW5kZXgpID0+IChcclxuICAgICAgICAgIDxTdGVwIGtleT17bGFiZWx9PlxyXG4gICAgICAgICAgICA8U3RlcExhYmVsPntsYWJlbH08L1N0ZXBMYWJlbD5cclxuICAgICAgICAgICAgPFN0ZXBDb250ZW50PlxyXG4gICAgICAgICAgICAgIDxUeXBvZ3JhcGh5PntnZXRTdGVwQ29udGVudChpbmRleCl9PC9UeXBvZ3JhcGh5PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtjbGFzc2VzLmFjdGlvbnNDb250YWluZXJ9PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgPEJ1dHRvblxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVkPXthY3RpdmVTdGVwID09PSAwfVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZUJhY2t9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIEJhY2tcclxuICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgIDxCdXR0b25cclxuICAgICAgICAgICAgICAgICAgICB2YXJpYW50PVwiY29udGFpbmVkXCJcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZU5leHR9XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc2VzLmJ1dHRvbn1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIHthY3RpdmVTdGVwID09PSBzdGVwcy5sZW5ndGggLSAxID8gJ0ZpbmlzaCcgOiAnTmV4dCd9XHJcbiAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvU3RlcENvbnRlbnQ+XHJcbiAgICAgICAgICA8L1N0ZXA+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvU3RlcHBlcj5cclxuICAgICAge2FjdGl2ZVN0ZXAgPT09IHN0ZXBzLmxlbmd0aCAmJiAoXHJcbiAgICAgICAgPFBhcGVyIHNxdWFyZSBlbGV2YXRpb249ezB9IGNsYXNzTmFtZT17Y2xhc3Nlcy5yZXNldENvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8VHlwb2dyYXBoeT5BbGwgc3RlcHMgY29tcGxldGVkIC0geW91JmFwb3M7cmUgZmluaXNoZWQ8L1R5cG9ncmFwaHk+XHJcbiAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2hhbmRsZVJlc2V0fSBjbGFzc05hbWU9e2NsYXNzZXMuYnV0dG9ufT5cclxuICAgICAgICAgICAgUmVzZXRcclxuICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgIDwvUGFwZXI+XHJcbiAgICAgICl9XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9zbGljZWRUb0FycmF5IGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9zbGljZWRUb0FycmF5XCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IHsgVHJhbnNpdGlvbiB9IGZyb20gJ3JlYWN0LXRyYW5zaXRpb24tZ3JvdXAnO1xuaW1wb3J0IHdpdGhTdHlsZXMgZnJvbSAnLi4vc3R5bGVzL3dpdGhTdHlsZXMnO1xuaW1wb3J0IHsgZHVyYXRpb24gfSBmcm9tICcuLi9zdHlsZXMvdHJhbnNpdGlvbnMnO1xuaW1wb3J0IHsgZ2V0VHJhbnNpdGlvblByb3BzIH0gZnJvbSAnLi4vdHJhbnNpdGlvbnMvdXRpbHMnO1xuaW1wb3J0IHVzZVRoZW1lIGZyb20gJy4uL3N0eWxlcy91c2VUaGVtZSc7XG5pbXBvcnQgeyB1c2VGb3JrUmVmIH0gZnJvbSAnLi4vdXRpbHMnO1xuZXhwb3J0IHZhciBzdHlsZXMgPSBmdW5jdGlvbiBzdHlsZXModGhlbWUpIHtcbiAgcmV0dXJuIHtcbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQuICovXG4gICAgY29udGFpbmVyOiB7XG4gICAgICBoZWlnaHQ6IDAsXG4gICAgICBvdmVyZmxvdzogJ2hpZGRlbicsXG4gICAgICB0cmFuc2l0aW9uOiB0aGVtZS50cmFuc2l0aW9ucy5jcmVhdGUoJ2hlaWdodCcpXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb250YWluZXIgZWxlbWVudCB3aGVuIHRoZSB0cmFuc2l0aW9uIGhhcyBlbnRlcmVkLiAqL1xuICAgIGVudGVyZWQ6IHtcbiAgICAgIGhlaWdodDogJ2F1dG8nLFxuICAgICAgb3ZlcmZsb3c6ICd2aXNpYmxlJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQgd2hlbiB0aGUgdHJhbnNpdGlvbiBoYXMgZXhpdGVkIGFuZCBgY29sbGFwc2VkSGVpZ2h0YCAhPSAwcHguICovXG4gICAgaGlkZGVuOiB7XG4gICAgICB2aXNpYmlsaXR5OiAnaGlkZGVuJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgb3V0ZXIgd3JhcHBlciBlbGVtZW50LiAqL1xuICAgIHdyYXBwZXI6IHtcbiAgICAgIC8vIEhhY2sgdG8gZ2V0IGNoaWxkcmVuIHdpdGggYSBuZWdhdGl2ZSBtYXJnaW4gdG8gbm90IGZhbHNpZnkgdGhlIGhlaWdodCBjb21wdXRhdGlvbi5cbiAgICAgIGRpc3BsYXk6ICdmbGV4J1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgaW5uZXIgd3JhcHBlciBlbGVtZW50LiAqL1xuICAgIHdyYXBwZXJJbm5lcjoge1xuICAgICAgd2lkdGg6ICcxMDAlJ1xuICAgIH1cbiAgfTtcbn07XG4vKipcbiAqIFRoZSBDb2xsYXBzZSB0cmFuc2l0aW9uIGlzIHVzZWQgYnkgdGhlXG4gKiBbVmVydGljYWwgU3RlcHBlcl0oL2NvbXBvbmVudHMvc3RlcHBlcnMvI3ZlcnRpY2FsLXN0ZXBwZXIpIFN0ZXBDb250ZW50IGNvbXBvbmVudC5cbiAqIEl0IHVzZXMgW3JlYWN0LXRyYW5zaXRpb24tZ3JvdXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9yZWFjdGpzL3JlYWN0LXRyYW5zaXRpb24tZ3JvdXApIGludGVybmFsbHkuXG4gKi9cblxudmFyIENvbGxhcHNlID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gQ29sbGFwc2UocHJvcHMsIHJlZikge1xuICB2YXIgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbGxhcHNlZEhlaWdoID0gcHJvcHMuY29sbGFwc2VkSGVpZ2h0LFxuICAgICAgY29sbGFwc2VkSGVpZ2h0UHJvcCA9IF9wcm9wcyRjb2xsYXBzZWRIZWlnaCA9PT0gdm9pZCAwID8gJzBweCcgOiBfcHJvcHMkY29sbGFwc2VkSGVpZ2gsXG4gICAgICBfcHJvcHMkY29tcG9uZW50ID0gcHJvcHMuY29tcG9uZW50LFxuICAgICAgQ29tcG9uZW50ID0gX3Byb3BzJGNvbXBvbmVudCA9PT0gdm9pZCAwID8gJ2RpdicgOiBfcHJvcHMkY29tcG9uZW50LFxuICAgICAgX3Byb3BzJGRpc2FibGVTdHJpY3RNID0gcHJvcHMuZGlzYWJsZVN0cmljdE1vZGVDb21wYXQsXG4gICAgICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdCA9IF9wcm9wcyRkaXNhYmxlU3RyaWN0TSA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZVN0cmljdE0sXG4gICAgICBpblByb3AgPSBwcm9wcy5pbixcbiAgICAgIG9uRW50ZXIgPSBwcm9wcy5vbkVudGVyLFxuICAgICAgb25FbnRlcmVkID0gcHJvcHMub25FbnRlcmVkLFxuICAgICAgb25FbnRlcmluZyA9IHByb3BzLm9uRW50ZXJpbmcsXG4gICAgICBvbkV4aXQgPSBwcm9wcy5vbkV4aXQsXG4gICAgICBvbkV4aXRlZCA9IHByb3BzLm9uRXhpdGVkLFxuICAgICAgb25FeGl0aW5nID0gcHJvcHMub25FeGl0aW5nLFxuICAgICAgc3R5bGUgPSBwcm9wcy5zdHlsZSxcbiAgICAgIF9wcm9wcyR0aW1lb3V0ID0gcHJvcHMudGltZW91dCxcbiAgICAgIHRpbWVvdXQgPSBfcHJvcHMkdGltZW91dCA9PT0gdm9pZCAwID8gZHVyYXRpb24uc3RhbmRhcmQgOiBfcHJvcHMkdGltZW91dCxcbiAgICAgIF9wcm9wcyRUcmFuc2l0aW9uQ29tcCA9IHByb3BzLlRyYW5zaXRpb25Db21wb25lbnQsXG4gICAgICBUcmFuc2l0aW9uQ29tcG9uZW50ID0gX3Byb3BzJFRyYW5zaXRpb25Db21wID09PSB2b2lkIDAgPyBUcmFuc2l0aW9uIDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbGxhcHNlZEhlaWdodFwiLCBcImNvbXBvbmVudFwiLCBcImRpc2FibGVTdHJpY3RNb2RlQ29tcGF0XCIsIFwiaW5cIiwgXCJvbkVudGVyXCIsIFwib25FbnRlcmVkXCIsIFwib25FbnRlcmluZ1wiLCBcIm9uRXhpdFwiLCBcIm9uRXhpdGVkXCIsIFwib25FeGl0aW5nXCIsIFwic3R5bGVcIiwgXCJ0aW1lb3V0XCIsIFwiVHJhbnNpdGlvbkNvbXBvbmVudFwiXSk7XG5cbiAgdmFyIHRoZW1lID0gdXNlVGhlbWUoKTtcbiAgdmFyIHRpbWVyID0gUmVhY3QudXNlUmVmKCk7XG4gIHZhciB3cmFwcGVyUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgYXV0b1RyYW5zaXRpb25EdXJhdGlvbiA9IFJlYWN0LnVzZVJlZigpO1xuICB2YXIgY29sbGFwc2VkSGVpZ2h0ID0gdHlwZW9mIGNvbGxhcHNlZEhlaWdodFByb3AgPT09ICdudW1iZXInID8gXCJcIi5jb25jYXQoY29sbGFwc2VkSGVpZ2h0UHJvcCwgXCJweFwiKSA6IGNvbGxhcHNlZEhlaWdodFByb3A7XG4gIFJlYWN0LnVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lci5jdXJyZW50KTtcbiAgICB9O1xuICB9LCBbXSk7XG4gIHZhciBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID0gdGhlbWUudW5zdGFibGVfc3RyaWN0TW9kZSAmJiAhZGlzYWJsZVN0cmljdE1vZGVDb21wYXQ7XG4gIHZhciBub2RlUmVmID0gUmVhY3QudXNlUmVmKG51bGwpO1xuICB2YXIgaGFuZGxlUmVmID0gdXNlRm9ya1JlZihyZWYsIGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBub2RlUmVmIDogdW5kZWZpbmVkKTtcblxuICB2YXIgbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayA9IGZ1bmN0aW9uIG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soY2FsbGJhY2spIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKG5vZGVPckFwcGVhcmluZywgbWF5YmVBcHBlYXJpbmcpIHtcbiAgICAgIGlmIChjYWxsYmFjaykge1xuICAgICAgICB2YXIgX3JlZiA9IGVuYWJsZVN0cmljdE1vZGVDb21wYXQgPyBbbm9kZVJlZi5jdXJyZW50LCBub2RlT3JBcHBlYXJpbmddIDogW25vZGVPckFwcGVhcmluZywgbWF5YmVBcHBlYXJpbmddLFxuICAgICAgICAgICAgX3JlZjIgPSBfc2xpY2VkVG9BcnJheShfcmVmLCAyKSxcbiAgICAgICAgICAgIG5vZGUgPSBfcmVmMlswXSxcbiAgICAgICAgICAgIGlzQXBwZWFyaW5nID0gX3JlZjJbMV07IC8vIG9uRW50ZXJYeHggYW5kIG9uRXhpdFh4eCBjYWxsYmFja3MgaGF2ZSBhIGRpZmZlcmVudCBhcmd1bWVudHMubGVuZ3RoIHZhbHVlLlxuXG5cbiAgICAgICAgaWYgKGlzQXBwZWFyaW5nID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBjYWxsYmFjayhub2RlKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjYWxsYmFjayhub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9O1xuXG4gIHZhciBoYW5kbGVFbnRlciA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUsIGlzQXBwZWFyaW5nKSB7XG4gICAgbm9kZS5zdHlsZS5oZWlnaHQgPSBjb2xsYXBzZWRIZWlnaHQ7XG5cbiAgICBpZiAob25FbnRlcikge1xuICAgICAgb25FbnRlcihub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUVudGVyaW5nID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhmdW5jdGlvbiAobm9kZSwgaXNBcHBlYXJpbmcpIHtcbiAgICB2YXIgd3JhcHBlckhlaWdodCA9IHdyYXBwZXJSZWYuY3VycmVudCA/IHdyYXBwZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgOiAwO1xuXG4gICAgdmFyIF9nZXRUcmFuc2l0aW9uUHJvcHMgPSBnZXRUcmFuc2l0aW9uUHJvcHMoe1xuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH0sIHtcbiAgICAgIG1vZGU6ICdlbnRlcidcbiAgICB9KSxcbiAgICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uID0gX2dldFRyYW5zaXRpb25Qcm9wcy5kdXJhdGlvbjtcblxuICAgIGlmICh0aW1lb3V0ID09PSAnYXV0bycpIHtcbiAgICAgIHZhciBkdXJhdGlvbjIgPSB0aGVtZS50cmFuc2l0aW9ucy5nZXRBdXRvSGVpZ2h0RHVyYXRpb24od3JhcHBlckhlaWdodCk7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IFwiXCIuY29uY2F0KGR1cmF0aW9uMiwgXCJtc1wiKTtcbiAgICAgIGF1dG9UcmFuc2l0aW9uRHVyYXRpb24uY3VycmVudCA9IGR1cmF0aW9uMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0eXBlb2YgdHJhbnNpdGlvbkR1cmF0aW9uID09PSAnc3RyaW5nJyA/IHRyYW5zaXRpb25EdXJhdGlvbiA6IFwiXCIuY29uY2F0KHRyYW5zaXRpb25EdXJhdGlvbiwgXCJtc1wiKTtcbiAgICB9XG5cbiAgICBub2RlLnN0eWxlLmhlaWdodCA9IFwiXCIuY29uY2F0KHdyYXBwZXJIZWlnaHQsIFwicHhcIik7XG5cbiAgICBpZiAob25FbnRlcmluZykge1xuICAgICAgb25FbnRlcmluZyhub2RlLCBpc0FwcGVhcmluZyk7XG4gICAgfVxuICB9KTtcbiAgdmFyIGhhbmRsZUVudGVyZWQgPSBub3JtYWxpemVkVHJhbnNpdGlvbkNhbGxiYWNrKGZ1bmN0aW9uIChub2RlLCBpc0FwcGVhcmluZykge1xuICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gJ2F1dG8nO1xuXG4gICAgaWYgKG9uRW50ZXJlZCkge1xuICAgICAgb25FbnRlcmVkKG5vZGUsIGlzQXBwZWFyaW5nKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlRXhpdCA9IG5vcm1hbGl6ZWRUcmFuc2l0aW9uQ2FsbGJhY2soZnVuY3Rpb24gKG5vZGUpIHtcbiAgICB2YXIgd3JhcHBlckhlaWdodCA9IHdyYXBwZXJSZWYuY3VycmVudCA/IHdyYXBwZXJSZWYuY3VycmVudC5jbGllbnRIZWlnaHQgOiAwO1xuICAgIG5vZGUuc3R5bGUuaGVpZ2h0ID0gXCJcIi5jb25jYXQod3JhcHBlckhlaWdodCwgXCJweFwiKTtcblxuICAgIGlmIChvbkV4aXQpIHtcbiAgICAgIG9uRXhpdChub2RlKTtcbiAgICB9XG4gIH0pO1xuICB2YXIgaGFuZGxlRXhpdGVkID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhvbkV4aXRlZCk7XG4gIHZhciBoYW5kbGVFeGl0aW5nID0gbm9ybWFsaXplZFRyYW5zaXRpb25DYWxsYmFjayhmdW5jdGlvbiAobm9kZSkge1xuICAgIHZhciB3cmFwcGVySGVpZ2h0ID0gd3JhcHBlclJlZi5jdXJyZW50ID8gd3JhcHBlclJlZi5jdXJyZW50LmNsaWVudEhlaWdodCA6IDA7XG5cbiAgICB2YXIgX2dldFRyYW5zaXRpb25Qcm9wczIgPSBnZXRUcmFuc2l0aW9uUHJvcHMoe1xuICAgICAgc3R5bGU6IHN0eWxlLFxuICAgICAgdGltZW91dDogdGltZW91dFxuICAgIH0sIHtcbiAgICAgIG1vZGU6ICdleGl0J1xuICAgIH0pLFxuICAgICAgICB0cmFuc2l0aW9uRHVyYXRpb24gPSBfZ2V0VHJhbnNpdGlvblByb3BzMi5kdXJhdGlvbjtcblxuICAgIGlmICh0aW1lb3V0ID09PSAnYXV0bycpIHtcbiAgICAgIHZhciBkdXJhdGlvbjIgPSB0aGVtZS50cmFuc2l0aW9ucy5nZXRBdXRvSGVpZ2h0RHVyYXRpb24od3JhcHBlckhlaWdodCk7XG4gICAgICBub2RlLnN0eWxlLnRyYW5zaXRpb25EdXJhdGlvbiA9IFwiXCIuY29uY2F0KGR1cmF0aW9uMiwgXCJtc1wiKTtcbiAgICAgIGF1dG9UcmFuc2l0aW9uRHVyYXRpb24uY3VycmVudCA9IGR1cmF0aW9uMjtcbiAgICB9IGVsc2Uge1xuICAgICAgbm9kZS5zdHlsZS50cmFuc2l0aW9uRHVyYXRpb24gPSB0eXBlb2YgdHJhbnNpdGlvbkR1cmF0aW9uID09PSAnc3RyaW5nJyA/IHRyYW5zaXRpb25EdXJhdGlvbiA6IFwiXCIuY29uY2F0KHRyYW5zaXRpb25EdXJhdGlvbiwgXCJtc1wiKTtcbiAgICB9XG5cbiAgICBub2RlLnN0eWxlLmhlaWdodCA9IGNvbGxhcHNlZEhlaWdodDtcblxuICAgIGlmIChvbkV4aXRpbmcpIHtcbiAgICAgIG9uRXhpdGluZyhub2RlKTtcbiAgICB9XG4gIH0pO1xuXG4gIHZhciBhZGRFbmRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZEVuZExpc3RlbmVyKG5vZGVPck5leHQsIG1heWJlTmV4dCkge1xuICAgIHZhciBuZXh0ID0gZW5hYmxlU3RyaWN0TW9kZUNvbXBhdCA/IG5vZGVPck5leHQgOiBtYXliZU5leHQ7XG5cbiAgICBpZiAodGltZW91dCA9PT0gJ2F1dG8nKSB7XG4gICAgICB0aW1lci5jdXJyZW50ID0gc2V0VGltZW91dChuZXh0LCBhdXRvVHJhbnNpdGlvbkR1cmF0aW9uLmN1cnJlbnQgfHwgMCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgaW46IGluUHJvcCxcbiAgICBvbkVudGVyOiBoYW5kbGVFbnRlcixcbiAgICBvbkVudGVyZWQ6IGhhbmRsZUVudGVyZWQsXG4gICAgb25FbnRlcmluZzogaGFuZGxlRW50ZXJpbmcsXG4gICAgb25FeGl0OiBoYW5kbGVFeGl0LFxuICAgIG9uRXhpdGVkOiBoYW5kbGVFeGl0ZWQsXG4gICAgb25FeGl0aW5nOiBoYW5kbGVFeGl0aW5nLFxuICAgIGFkZEVuZExpc3RlbmVyOiBhZGRFbmRMaXN0ZW5lcixcbiAgICBub2RlUmVmOiBlbmFibGVTdHJpY3RNb2RlQ29tcGF0ID8gbm9kZVJlZiA6IHVuZGVmaW5lZCxcbiAgICB0aW1lb3V0OiB0aW1lb3V0ID09PSAnYXV0bycgPyBudWxsIDogdGltZW91dFxuICB9LCBvdGhlciksIGZ1bmN0aW9uIChzdGF0ZSwgY2hpbGRQcm9wcykge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChDb21wb25lbnQsIF9leHRlbmRzKHtcbiAgICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmNvbnRhaW5lciwgY2xhc3NOYW1lLCB7XG4gICAgICAgICdlbnRlcmVkJzogY2xhc3Nlcy5lbnRlcmVkLFxuICAgICAgICAnZXhpdGVkJzogIWluUHJvcCAmJiBjb2xsYXBzZWRIZWlnaHQgPT09ICcwcHgnICYmIGNsYXNzZXMuaGlkZGVuXG4gICAgICB9W3N0YXRlXSksXG4gICAgICBzdHlsZTogX2V4dGVuZHMoe1xuICAgICAgICBtaW5IZWlnaHQ6IGNvbGxhcHNlZEhlaWdodFxuICAgICAgfSwgc3R5bGUpLFxuICAgICAgcmVmOiBoYW5kbGVSZWZcbiAgICB9LCBjaGlsZFByb3BzKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc2VzLndyYXBwZXIsXG4gICAgICByZWY6IHdyYXBwZXJSZWZcbiAgICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMud3JhcHBlcklubmVyXG4gICAgfSwgY2hpbGRyZW4pKSk7XG4gIH0pO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBDb2xsYXBzZS5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBUaGUgY29udGVudCBub2RlIHRvIGJlIGNvbGxhcHNlZC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIFRoZSBoZWlnaHQgb2YgdGhlIGNvbnRhaW5lciB3aGVuIGNvbGxhcHNlZC5cbiAgICovXG4gIGNvbGxhcHNlZEhlaWdodDogUHJvcFR5cGVzLm9uZU9mVHlwZShbUHJvcFR5cGVzLm51bWJlciwgUHJvcFR5cGVzLnN0cmluZ10pLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSByb290IG5vZGUuXG4gICAqIEVpdGhlciBhIHN0cmluZyB0byB1c2UgYSBIVE1MIGVsZW1lbnQgb3IgYSBjb21wb25lbnQuXG4gICAqL1xuICBjb21wb25lbnQ6IFByb3BUeXBlc1xuICAvKiBAdHlwZXNjcmlwdC10by1wcm9wdHlwZXMtaWdub3JlICovXG4gIC5lbGVtZW50VHlwZSxcblxuICAvKipcbiAgICogRW5hYmxlIHRoaXMgcHJvcCBpZiB5b3UgZW5jb3VudGVyICdGdW5jdGlvbiBjb21wb25lbnRzIGNhbm5vdCBiZSBnaXZlbiByZWZzJyxcbiAgICogdXNlIGB1bnN0YWJsZV9jcmVhdGVTdHJpY3RNb2RlVGhlbWVgLFxuICAgKiBhbmQgY2FuJ3QgZm9yd2FyZCB0aGUgcmVmIGluIHRoZSBwYXNzZWQgYENvbXBvbmVudGAuXG4gICAqL1xuICBkaXNhYmxlU3RyaWN0TW9kZUNvbXBhdDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIElmIGB0cnVlYCwgdGhlIGNvbXBvbmVudCB3aWxsIHRyYW5zaXRpb24gaW4uXG4gICAqL1xuICBpbjogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIG9uRW50ZXI6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkVudGVyaW5nOiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0OiBQcm9wVHlwZXMuZnVuYyxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgb25FeGl0ZWQ6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBvbkV4aXRpbmc6IFByb3BUeXBlcy5mdW5jLFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBzdHlsZTogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogVGhlIGR1cmF0aW9uIGZvciB0aGUgdHJhbnNpdGlvbiwgaW4gbWlsbGlzZWNvbmRzLlxuICAgKiBZb3UgbWF5IHNwZWNpZnkgYSBzaW5nbGUgdGltZW91dCBmb3IgYWxsIHRyYW5zaXRpb25zLCBvciBpbmRpdmlkdWFsbHkgd2l0aCBhbiBvYmplY3QuXG4gICAqXG4gICAqIFNldCB0byAnYXV0bycgdG8gYXV0b21hdGljYWxseSBjYWxjdWxhdGUgdHJhbnNpdGlvbiB0aW1lIGJhc2VkIG9uIGhlaWdodC5cbiAgICovXG4gIHRpbWVvdXQ6IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKVxufSA6IHZvaWQgMDtcbkNvbGxhcHNlLm11aVN1cHBvcnRBdXRvID0gdHJ1ZTtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlDb2xsYXBzZSdcbn0pKENvbGxhcHNlKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9Db2xsYXBzZSc7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgaXNGcmFnbWVudCB9IGZyb20gJ3JlYWN0LWlzJztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7fSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBvcmllbnRhdGlvbj1cImhvcml6b250YWxcImAuICovXG4gIGhvcml6b250YWw6IHtcbiAgICBwYWRkaW5nTGVmdDogOCxcbiAgICBwYWRkaW5nUmlnaHQ6IDhcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICB2ZXJ0aWNhbDoge30sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWx0ZXJuYXRpdmVMYWJlbD17dHJ1ZX1gLiAqL1xuICBhbHRlcm5hdGl2ZUxhYmVsOiB7XG4gICAgZmxleDogMSxcbiAgICBwb3NpdGlvbjogJ3JlbGF0aXZlJ1xuICB9LFxuXG4gIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGNvbXBsZXRlZD17dHJ1ZX1gLiAqL1xuICBjb21wbGV0ZWQ6IHt9XG59O1xudmFyIFN0ZXAgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTdGVwKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBhY3RpdmUgPSBfcHJvcHMkYWN0aXZlID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhY3RpdmUsXG4gICAgICBhbHRlcm5hdGl2ZUxhYmVsID0gcHJvcHMuYWx0ZXJuYXRpdmVMYWJlbCxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wbGV0ZWQgPSBwcm9wcy5jb21wbGV0ZWQsXG4gICAgICBjb21wbGV0ZWQgPSBfcHJvcHMkY29tcGxldGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRjb21wbGV0ZWQsXG4gICAgICBjb25uZWN0b3JQcm9wID0gcHJvcHMuY29ubmVjdG9yLFxuICAgICAgX3Byb3BzJGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBkaXNhYmxlZCA9IF9wcm9wcyRkaXNhYmxlZCA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkZGlzYWJsZWQsXG4gICAgICBfcHJvcHMkZXhwYW5kZWQgPSBwcm9wcy5leHBhbmRlZCxcbiAgICAgIGV4cGFuZGVkID0gX3Byb3BzJGV4cGFuZGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRleHBhbmRlZCxcbiAgICAgIGluZGV4ID0gcHJvcHMuaW5kZXgsXG4gICAgICBsYXN0ID0gcHJvcHMubGFzdCxcbiAgICAgIG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWN0aXZlXCIsIFwiYWx0ZXJuYXRpdmVMYWJlbFwiLCBcImNoaWxkcmVuXCIsIFwiY2xhc3Nlc1wiLCBcImNsYXNzTmFtZVwiLCBcImNvbXBsZXRlZFwiLCBcImNvbm5lY3RvclwiLCBcImRpc2FibGVkXCIsIFwiZXhwYW5kZWRcIiwgXCJpbmRleFwiLCBcImxhc3RcIiwgXCJvcmllbnRhdGlvblwiXSk7XG5cbiAgdmFyIGNvbm5lY3RvciA9IGNvbm5lY3RvclByb3AgPyAvKiNfX1BVUkVfXyovUmVhY3QuY2xvbmVFbGVtZW50KGNvbm5lY3RvclByb3AsIHtcbiAgICBvcmllbnRhdGlvbjogb3JpZW50YXRpb24sXG4gICAgYWx0ZXJuYXRpdmVMYWJlbDogYWx0ZXJuYXRpdmVMYWJlbCxcbiAgICBpbmRleDogaW5kZXgsXG4gICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgY29tcGxldGVkOiBjb21wbGV0ZWQsXG4gICAgZGlzYWJsZWQ6IGRpc2FibGVkXG4gIH0pIDogbnVsbDtcbiAgdmFyIG5ld0NoaWxkcmVuID0gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbb3JpZW50YXRpb25dLCBjbGFzc05hbWUsIGFsdGVybmF0aXZlTGFiZWwgJiYgY2xhc3Nlcy5hbHRlcm5hdGl2ZUxhYmVsLCBjb21wbGV0ZWQgJiYgY2xhc3Nlcy5jb21wbGV0ZWQpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgY29ubmVjdG9yICYmIGFsdGVybmF0aXZlTGFiZWwgJiYgaW5kZXggIT09IDAgPyBjb25uZWN0b3IgOiBudWxsLCBSZWFjdC5DaGlsZHJlbi5tYXAoY2hpbGRyZW4sIGZ1bmN0aW9uIChjaGlsZCkge1xuICAgIGlmICghIC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjaGlsZCkpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAoaXNGcmFnbWVudChjaGlsZCkpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcihbXCJNYXRlcmlhbC1VSTogVGhlIFN0ZXAgY29tcG9uZW50IGRvZXNuJ3QgYWNjZXB0IGEgRnJhZ21lbnQgYXMgYSBjaGlsZC5cIiwgJ0NvbnNpZGVyIHByb3ZpZGluZyBhbiBhcnJheSBpbnN0ZWFkLiddLmpvaW4oJ1xcbicpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChjaGlsZCwgX2V4dGVuZHMoe1xuICAgICAgYWN0aXZlOiBhY3RpdmUsXG4gICAgICBhbHRlcm5hdGl2ZUxhYmVsOiBhbHRlcm5hdGl2ZUxhYmVsLFxuICAgICAgY29tcGxldGVkOiBjb21wbGV0ZWQsXG4gICAgICBkaXNhYmxlZDogZGlzYWJsZWQsXG4gICAgICBleHBhbmRlZDogZXhwYW5kZWQsXG4gICAgICBsYXN0OiBsYXN0LFxuICAgICAgaWNvbjogaW5kZXggKyAxLFxuICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uXG4gICAgfSwgY2hpbGQucHJvcHMpKTtcbiAgfSkpO1xuXG4gIGlmIChjb25uZWN0b3IgJiYgIWFsdGVybmF0aXZlTGFiZWwgJiYgaW5kZXggIT09IDApIHtcbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIGNvbm5lY3RvciwgbmV3Q2hpbGRyZW4pO1xuICB9XG5cbiAgcmV0dXJuIG5ld0NoaWxkcmVuO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdGVwLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHN0ZXAgYXMgYWN0aXZlLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICovXG4gIGFjdGl2ZTogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIFNob3VsZCBiZSBgU3RlcGAgc3ViLWNvbXBvbmVudHMgc3VjaCBhcyBgU3RlcExhYmVsYCwgYFN0ZXBDb250ZW50YC5cbiAgICovXG4gIGNoaWxkcmVuOiBQcm9wVHlwZXMubm9kZSxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBAaWdub3JlXG4gICAqL1xuICBjbGFzc05hbWU6IFByb3BUeXBlcy5zdHJpbmcsXG5cbiAgLyoqXG4gICAqIE1hcmsgdGhlIHN0ZXAgYXMgY29tcGxldGVkLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICovXG4gIGNvbXBsZXRlZDogUHJvcFR5cGVzLmJvb2wsXG5cbiAgLyoqXG4gICAqIE1hcmsgdGhlIHN0ZXAgYXMgZGlzYWJsZWQsIHdpbGwgYWxzbyBkaXNhYmxlIHRoZSBidXR0b24gaWZcbiAgICogYFN0ZXBCdXR0b25gIGlzIGEgY2hpbGQgb2YgYFN0ZXBgLiBJcyBwYXNzZWQgdG8gY2hpbGQgY29tcG9uZW50cy5cbiAgICovXG4gIGRpc2FibGVkOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogRXhwYW5kIHRoZSBzdGVwLlxuICAgKi9cbiAgZXhwYW5kZWQ6IFByb3BUeXBlcy5ib29sXG59IDogdm9pZCAwO1xuZXhwb3J0IGRlZmF1bHQgd2l0aFN0eWxlcyhzdHlsZXMsIHtcbiAgbmFtZTogJ011aVN0ZXAnXG59KShTdGVwKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TdGVwJzsiLCJpbXBvcnQgX2V4dGVuZHMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2V4dGVuZHNcIjtcbmltcG9ydCBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMgZnJvbSBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzXCI7XG5pbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgUHJvcFR5cGVzIGZyb20gJ3Byb3AtdHlwZXMnO1xuaW1wb3J0IGNsc3ggZnJvbSAnY2xzeCc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5leHBvcnQgdmFyIHN0eWxlcyA9IGZ1bmN0aW9uIHN0eWxlcyh0aGVtZSkge1xuICByZXR1cm4ge1xuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQuICovXG4gICAgcm9vdDoge1xuICAgICAgZmxleDogJzEgMSBhdXRvJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBvcmllbnRhdGlvbj1cImhvcml6b250YWxcImAuICovXG4gICAgaG9yaXpvbnRhbDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICAgIHZlcnRpY2FsOiB7XG4gICAgICBtYXJnaW5MZWZ0OiAxMixcbiAgICAgIC8vIGhhbGYgaWNvblxuICAgICAgcGFkZGluZzogJzAgMCA4cHgnXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGFsdGVybmF0aXZlTGFiZWw9e3RydWV9YC4gKi9cbiAgICBhbHRlcm5hdGl2ZUxhYmVsOiB7XG4gICAgICBwb3NpdGlvbjogJ2Fic29sdXRlJyxcbiAgICAgIHRvcDogOCArIDQsXG4gICAgICBsZWZ0OiAnY2FsYygtNTAlICsgMjBweCknLFxuICAgICAgcmlnaHQ6ICdjYWxjKDUwJSArIDIwcHgpJ1xuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhY3RpdmU9e3RydWV9YC4gKi9cbiAgICBhY3RpdmU6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29tcGxldGVkPXt0cnVlfWAuICovXG4gICAgY29tcGxldGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGRpc2FibGVkPXt0cnVlfWAuICovXG4gICAgZGlzYWJsZWQ6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGxpbmUgZWxlbWVudC4gKi9cbiAgICBsaW5lOiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgYm9yZGVyQ29sb3I6IHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUuZ3JleVs0MDBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzYwMF1cbiAgICB9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJgLiAqL1xuICAgIGxpbmVIb3Jpem9udGFsOiB7XG4gICAgICBib3JkZXJUb3BTdHlsZTogJ3NvbGlkJyxcbiAgICAgIGJvcmRlclRvcFdpZHRoOiAxXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9yaWVudGF0aW9uPVwidmVydGljYWxcImAuICovXG4gICAgbGluZVZlcnRpY2FsOiB7XG4gICAgICBib3JkZXJMZWZ0U3R5bGU6ICdzb2xpZCcsXG4gICAgICBib3JkZXJMZWZ0V2lkdGg6IDEsXG4gICAgICBtaW5IZWlnaHQ6IDI0XG4gICAgfVxuICB9O1xufTtcbnZhciBTdGVwQ29ubmVjdG9yID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU3RlcENvbm5lY3Rvcihwcm9wcywgcmVmKSB7XG4gIHZhciBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBfcHJvcHMkYWx0ZXJuYXRpdmVMYWIgPSBwcm9wcy5hbHRlcm5hdGl2ZUxhYmVsLFxuICAgICAgYWx0ZXJuYXRpdmVMYWJlbCA9IF9wcm9wcyRhbHRlcm5hdGl2ZUxhYiA9PT0gdm9pZCAwID8gZmFsc2UgOiBfcHJvcHMkYWx0ZXJuYXRpdmVMYWIsXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbXBsZXRlZCA9IHByb3BzLmNvbXBsZXRlZCxcbiAgICAgIGRpc2FibGVkID0gcHJvcHMuZGlzYWJsZWQsXG4gICAgICBpbmRleCA9IHByb3BzLmluZGV4LFxuICAgICAgX3Byb3BzJG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICBvcmllbnRhdGlvbiA9IF9wcm9wcyRvcmllbnRhdGlvbiA9PT0gdm9pZCAwID8gJ2hvcml6b250YWwnIDogX3Byb3BzJG9yaWVudGF0aW9uLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFjdGl2ZVwiLCBcImFsdGVybmF0aXZlTGFiZWxcIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcGxldGVkXCIsIFwiZGlzYWJsZWRcIiwgXCJpbmRleFwiLCBcIm9yaWVudGF0aW9uXCJdKTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbb3JpZW50YXRpb25dLCBjbGFzc05hbWUsIGFsdGVybmF0aXZlTGFiZWwgJiYgY2xhc3Nlcy5hbHRlcm5hdGl2ZUxhYmVsLCBhY3RpdmUgJiYgY2xhc3Nlcy5hY3RpdmUsIGNvbXBsZXRlZCAmJiBjbGFzc2VzLmNvbXBsZXRlZCwgZGlzYWJsZWQgJiYgY2xhc3Nlcy5kaXNhYmxlZCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmxpbmUsIHtcbiAgICAgICdob3Jpem9udGFsJzogY2xhc3Nlcy5saW5lSG9yaXpvbnRhbCxcbiAgICAgICd2ZXJ0aWNhbCc6IGNsYXNzZXMubGluZVZlcnRpY2FsXG4gICAgfVtvcmllbnRhdGlvbl0pXG4gIH0pKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3RlcENvbm5lY3Rvci5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZ1xufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTdGVwQ29ubmVjdG9yJ1xufSkoU3RlcENvbm5lY3Rvcik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3RlcENvbm5lY3Rvcic7IiwiaW1wb3J0IF9leHRlbmRzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9leHRlbmRzXCI7XG5pbXBvcnQgX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzIGZyb20gXCJAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9vYmplY3RXaXRob3V0UHJvcGVydGllc1wiO1xuaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IENvbGxhcHNlIGZyb20gJy4uL0NvbGxhcHNlJztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBtYXJnaW5Ub3A6IDgsXG4gICAgICBtYXJnaW5MZWZ0OiAxMixcbiAgICAgIC8vIGhhbGYgaWNvblxuICAgICAgcGFkZGluZ0xlZnQ6IDggKyAxMixcbiAgICAgIC8vIG1hcmdpbiArIGhhbGYgaWNvblxuICAgICAgcGFkZGluZ1JpZ2h0OiA4LFxuICAgICAgYm9yZGVyTGVmdDogXCIxcHggc29saWQgXCIuY29uY2F0KHRoZW1lLnBhbGV0dGUudHlwZSA9PT0gJ2xpZ2h0JyA/IHRoZW1lLnBhbGV0dGUuZ3JleVs0MDBdIDogdGhlbWUucGFsZXR0ZS5ncmV5WzYwMF0pXG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGxhc3Q9e3RydWV9YCAoY29udHJvbGxlZCBieSBgU3RlcGApLiAqL1xuICAgIGxhc3Q6IHtcbiAgICAgIGJvcmRlckxlZnQ6ICdub25lJ1xuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgVHJhbnNpdGlvbiBjb21wb25lbnQuICovXG4gICAgdHJhbnNpdGlvbjoge31cbiAgfTtcbn07XG52YXIgU3RlcENvbnRlbnQgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTdGVwQ29udGVudChwcm9wcywgcmVmKSB7XG4gIHZhciBhY3RpdmUgPSBwcm9wcy5hY3RpdmUsXG4gICAgICBhbHRlcm5hdGl2ZUxhYmVsID0gcHJvcHMuYWx0ZXJuYXRpdmVMYWJlbCxcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIGNvbXBsZXRlZCA9IHByb3BzLmNvbXBsZXRlZCxcbiAgICAgIGV4cGFuZGVkID0gcHJvcHMuZXhwYW5kZWQsXG4gICAgICBsYXN0ID0gcHJvcHMubGFzdCxcbiAgICAgIG9wdGlvbmFsID0gcHJvcHMub3B0aW9uYWwsXG4gICAgICBvcmllbnRhdGlvbiA9IHByb3BzLm9yaWVudGF0aW9uLFxuICAgICAgX3Byb3BzJFRyYW5zaXRpb25Db21wID0gcHJvcHMuVHJhbnNpdGlvbkNvbXBvbmVudCxcbiAgICAgIFRyYW5zaXRpb25Db21wb25lbnQgPSBfcHJvcHMkVHJhbnNpdGlvbkNvbXAgPT09IHZvaWQgMCA/IENvbGxhcHNlIDogX3Byb3BzJFRyYW5zaXRpb25Db21wLFxuICAgICAgX3Byb3BzJHRyYW5zaXRpb25EdXJhID0gcHJvcHMudHJhbnNpdGlvbkR1cmF0aW9uLFxuICAgICAgdHJhbnNpdGlvbkR1cmF0aW9uUHJvcCA9IF9wcm9wcyR0cmFuc2l0aW9uRHVyYSA9PT0gdm9pZCAwID8gJ2F1dG8nIDogX3Byb3BzJHRyYW5zaXRpb25EdXJhLFxuICAgICAgVHJhbnNpdGlvblByb3BzID0gcHJvcHMuVHJhbnNpdGlvblByb3BzLFxuICAgICAgb3RoZXIgPSBfb2JqZWN0V2l0aG91dFByb3BlcnRpZXMocHJvcHMsIFtcImFjdGl2ZVwiLCBcImFsdGVybmF0aXZlTGFiZWxcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb21wbGV0ZWRcIiwgXCJleHBhbmRlZFwiLCBcImxhc3RcIiwgXCJvcHRpb25hbFwiLCBcIm9yaWVudGF0aW9uXCIsIFwiVHJhbnNpdGlvbkNvbXBvbmVudFwiLCBcInRyYW5zaXRpb25EdXJhdGlvblwiLCBcIlRyYW5zaXRpb25Qcm9wc1wiXSk7XG5cbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAob3JpZW50YXRpb24gIT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ01hdGVyaWFsLVVJOiA8U3RlcENvbnRlbnQgLz4gaXMgb25seSBkZXNpZ25lZCBmb3IgdXNlIHdpdGggdGhlIHZlcnRpY2FsIHN0ZXBwZXIuJyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIHRyYW5zaXRpb25EdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvblByb3A7XG5cbiAgaWYgKHRyYW5zaXRpb25EdXJhdGlvblByb3AgPT09ICdhdXRvJyAmJiAhVHJhbnNpdGlvbkNvbXBvbmVudC5tdWlTdXBwb3J0QXV0bykge1xuICAgIHRyYW5zaXRpb25EdXJhdGlvbiA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCBfZXh0ZW5kcyh7XG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3NOYW1lLCBsYXN0ICYmIGNsYXNzZXMubGFzdCksXG4gICAgcmVmOiByZWZcbiAgfSwgb3RoZXIpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUcmFuc2l0aW9uQ29tcG9uZW50LCBfZXh0ZW5kcyh7XG4gICAgaW46IGFjdGl2ZSB8fCBleHBhbmRlZCxcbiAgICBjbGFzc05hbWU6IGNsYXNzZXMudHJhbnNpdGlvbixcbiAgICB0aW1lb3V0OiB0cmFuc2l0aW9uRHVyYXRpb24sXG4gICAgdW5tb3VudE9uRXhpdDogdHJ1ZVxuICB9LCBUcmFuc2l0aW9uUHJvcHMpLCBjaGlsZHJlbikpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdGVwQ29udGVudC5wcm9wVHlwZXMgPSB7XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tIFdhcm5pbmcgLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cbiAgLy8gfCBUaGVzZSBQcm9wVHlwZXMgYXJlIGdlbmVyYXRlZCBmcm9tIHRoZSBUeXBlU2NyaXB0IHR5cGUgZGVmaW5pdGlvbnMgfFxuICAvLyB8ICAgICBUbyB1cGRhdGUgdGhlbSBlZGl0IHRoZSBkLnRzIGZpbGUgYW5kIHJ1biBcInlhcm4gcHJvcHR5cGVzXCIgICAgIHxcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuXG4gIC8qKlxuICAgKiBTdGVwIGNvbnRlbnQuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHVzZWQgZm9yIHRoZSB0cmFuc2l0aW9uLlxuICAgKiBbRm9sbG93IHRoaXMgZ3VpZGVdKC9jb21wb25lbnRzL3RyYW5zaXRpb25zLyN0cmFuc2l0aW9uY29tcG9uZW50LXByb3ApIHRvIGxlYXJuIG1vcmUgYWJvdXQgdGhlIHJlcXVpcmVtZW50cyBmb3IgdGhpcyBjb21wb25lbnQuXG4gICAqL1xuICBUcmFuc2l0aW9uQ29tcG9uZW50OiBQcm9wVHlwZXMuZWxlbWVudFR5cGUsXG5cbiAgLyoqXG4gICAqIEFkanVzdCB0aGUgZHVyYXRpb24gb2YgdGhlIGNvbnRlbnQgZXhwYW5kIHRyYW5zaXRpb24uXG4gICAqIFBhc3NlZCBhcyBhIHByb3AgdG8gdGhlIHRyYW5zaXRpb24gY29tcG9uZW50LlxuICAgKlxuICAgKiBTZXQgdG8gJ2F1dG8nIHRvIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlIHRyYW5zaXRpb24gdGltZSBiYXNlZCBvbiBoZWlnaHQuXG4gICAqL1xuICB0cmFuc2l0aW9uRHVyYXRpb246IFByb3BUeXBlcy5vbmVPZlR5cGUoW1Byb3BUeXBlcy5vbmVPZihbJ2F1dG8nXSksIFByb3BUeXBlcy5udW1iZXIsIFByb3BUeXBlcy5zaGFwZSh7XG4gICAgYXBwZWFyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGVudGVyOiBQcm9wVHlwZXMubnVtYmVyLFxuICAgIGV4aXQ6IFByb3BUeXBlcy5udW1iZXJcbiAgfSldKSxcblxuICAvKipcbiAgICogUHJvcHMgYXBwbGllZCB0byB0aGUgW2BUcmFuc2l0aW9uYF0oaHR0cDovL3JlYWN0Y29tbXVuaXR5Lm9yZy9yZWFjdC10cmFuc2l0aW9uLWdyb3VwL3RyYW5zaXRpb24jVHJhbnNpdGlvbi1wcm9wcykgZWxlbWVudC5cbiAgICovXG4gIFRyYW5zaXRpb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTdGVwQ29udGVudCdcbn0pKFN0ZXBDb250ZW50KTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TdGVwQ29udGVudCc7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFByb3BUeXBlcyBmcm9tICdwcm9wLXR5cGVzJztcbmltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnO1xuaW1wb3J0IENoZWNrQ2lyY2xlIGZyb20gJy4uL2ludGVybmFsL3N2Zy1pY29ucy9DaGVja0NpcmNsZSc7XG5pbXBvcnQgV2FybmluZyBmcm9tICcuLi9pbnRlcm5hbC9zdmctaWNvbnMvV2FybmluZyc7XG5pbXBvcnQgd2l0aFN0eWxlcyBmcm9tICcuLi9zdHlsZXMvd2l0aFN0eWxlcyc7XG5pbXBvcnQgU3ZnSWNvbiBmcm9tICcuLi9TdmdJY29uJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnYmxvY2snLFxuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5kaXNhYmxlZCxcbiAgICAgICcmJGNvbXBsZXRlZCc6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUucHJpbWFyeS5tYWluXG4gICAgICB9LFxuICAgICAgJyYkYWN0aXZlJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS5wcmltYXJ5Lm1haW5cbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgU1ZHIHRleHQgZWxlbWVudC4gKi9cbiAgICB0ZXh0OiB7XG4gICAgICBmaWxsOiB0aGVtZS5wYWxldHRlLnByaW1hcnkuY29udHJhc3RUZXh0LFxuICAgICAgZm9udFNpemU6IHRoZW1lLnR5cG9ncmFwaHkuY2FwdGlvbi5mb250U2l6ZSxcbiAgICAgIGZvbnRGYW1pbHk6IHRoZW1lLnR5cG9ncmFwaHkuZm9udEZhbWlseVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBhY3RpdmU9e3RydWV9YC4gKi9cbiAgICBhY3RpdmU6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgY29tcGxldGVkPXt0cnVlfWAuICovXG4gICAgY29tcGxldGVkOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYGVycm9yPXt0cnVlfWAuICovXG4gICAgZXJyb3I6IHt9XG4gIH07XG59O1xuXG52YXIgX3JlZiA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiY2lyY2xlXCIsIHtcbiAgY3g6IFwiMTJcIixcbiAgY3k6IFwiMTJcIixcbiAgcjogXCIxMlwiXG59KTtcblxudmFyIFN0ZXBJY29uID0gLyojX19QVVJFX18qL1JlYWN0LmZvcndhcmRSZWYoZnVuY3Rpb24gU3RlcEljb24ocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGNvbXBsZXRlZCA9IHByb3BzLmNvbXBsZXRlZCxcbiAgICAgIGNvbXBsZXRlZCA9IF9wcm9wcyRjb21wbGV0ZWQgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGNvbXBsZXRlZCxcbiAgICAgIGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgX3Byb3BzJGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIGFjdGl2ZSA9IF9wcm9wcyRhY3RpdmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGFjdGl2ZSxcbiAgICAgIF9wcm9wcyRlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZXJyb3IgPSBfcHJvcHMkZXJyb3IgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGVycm9yLFxuICAgICAgY2xhc3NlcyA9IHByb3BzLmNsYXNzZXM7XG5cbiAgaWYgKHR5cGVvZiBpY29uID09PSAnbnVtYmVyJyB8fCB0eXBlb2YgaWNvbiA9PT0gJ3N0cmluZycpIHtcbiAgICB2YXIgY2xhc3NOYW1lID0gY2xzeChjbGFzc2VzLnJvb3QsIGFjdGl2ZSAmJiBjbGFzc2VzLmFjdGl2ZSwgZXJyb3IgJiYgY2xhc3Nlcy5lcnJvciwgY29tcGxldGVkICYmIGNsYXNzZXMuY29tcGxldGVkKTtcblxuICAgIGlmIChlcnJvcikge1xuICAgICAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFdhcm5pbmcsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogcmVmXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAoY29tcGxldGVkKSB7XG4gICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQ2hlY2tDaXJjbGUsIHtcbiAgICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICAgIHJlZjogcmVmXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoU3ZnSWNvbiwge1xuICAgICAgY2xhc3NOYW1lOiBjbGFzc05hbWUsXG4gICAgICByZWY6IHJlZlxuICAgIH0sIF9yZWYsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGV4dFwiLCB7XG4gICAgICBjbGFzc05hbWU6IGNsYXNzZXMudGV4dCxcbiAgICAgIHg6IFwiMTJcIixcbiAgICAgIHk6IFwiMTZcIixcbiAgICAgIHRleHRBbmNob3I6IFwibWlkZGxlXCJcbiAgICB9LCBpY29uKSk7XG4gIH1cblxuICByZXR1cm4gaWNvbjtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3RlcEljb24ucHJvcFR5cGVzID0ge1xuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSBXYXJuaW5nIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG4gIC8vIHwgVGhlc2UgUHJvcFR5cGVzIGFyZSBnZW5lcmF0ZWQgZnJvbSB0aGUgVHlwZVNjcmlwdCB0eXBlIGRlZmluaXRpb25zIHxcbiAgLy8gfCAgICAgVG8gdXBkYXRlIHRoZW0gZWRpdCB0aGUgZC50cyBmaWxlIGFuZCBydW4gXCJ5YXJuIHByb3B0eXBlc1wiICAgICB8XG4gIC8vIC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIHN0ZXAgaXMgYWN0aXZlLlxuICAgKi9cbiAgYWN0aXZlOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgb3IgZXh0ZW5kIHRoZSBzdHlsZXMgYXBwbGllZCB0byB0aGUgY29tcG9uZW50LlxuICAgKiBTZWUgW0NTUyBBUEldKCNjc3MpIGJlbG93IGZvciBtb3JlIGRldGFpbHMuXG4gICAqL1xuICBjbGFzc2VzOiBQcm9wVHlwZXMub2JqZWN0LFxuXG4gIC8qKlxuICAgKiBNYXJrIHRoZSBzdGVwIGFzIGNvbXBsZXRlZC4gSXMgcGFzc2VkIHRvIGNoaWxkIGNvbXBvbmVudHMuXG4gICAqL1xuICBjb21wbGV0ZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBNYXJrIHRoZSBzdGVwIGFzIGZhaWxlZC5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIGxhYmVsIGRpc3BsYXllZCBpbiB0aGUgc3RlcCBpY29uLlxuICAgKi9cbiAgaWNvbjogUHJvcFR5cGVzLm5vZGVcbn0gOiB2b2lkIDA7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpU3RlcEljb24nXG59KShTdGVwSWNvbik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3RlcEljb24nOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJy4uL1R5cG9ncmFwaHknO1xuaW1wb3J0IFN0ZXBJY29uIGZyb20gJy4uL1N0ZXBJY29uJztcbmV4cG9ydCB2YXIgc3R5bGVzID0gZnVuY3Rpb24gc3R5bGVzKHRoZW1lKSB7XG4gIHJldHVybiB7XG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudC4gKi9cbiAgICByb290OiB7XG4gICAgICBkaXNwbGF5OiAnZmxleCcsXG4gICAgICBhbGlnbkl0ZW1zOiAnY2VudGVyJyxcbiAgICAgICcmJGFsdGVybmF0aXZlTGFiZWwnOiB7XG4gICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gICAgICB9LFxuICAgICAgJyYkZGlzYWJsZWQnOiB7XG4gICAgICAgIGN1cnNvcjogJ2RlZmF1bHQnXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9yaWVudGF0aW9uPVwiaG9yaXpvbnRhbFwiYC4gKi9cbiAgICBob3Jpem9udGFsOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSByb290IGVsZW1lbnQgaWYgYG9yaWVudGF0aW9uPVwidmVydGljYWxcImAuICovXG4gICAgdmVydGljYWw6IHt9LFxuXG4gICAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIGBUeXBvZ3JhcGh5YCBjb21wb25lbnQgd2hpY2ggd3JhcHMgYGNoaWxkcmVuYC4gKi9cbiAgICBsYWJlbDoge1xuICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUudGV4dC5zZWNvbmRhcnksXG4gICAgICAnJiRhY3RpdmUnOiB7XG4gICAgICAgIGNvbG9yOiB0aGVtZS5wYWxldHRlLnRleHQucHJpbWFyeSxcbiAgICAgICAgZm9udFdlaWdodDogNTAwXG4gICAgICB9LFxuICAgICAgJyYkY29tcGxldGVkJzoge1xuICAgICAgICBjb2xvcjogdGhlbWUucGFsZXR0ZS50ZXh0LnByaW1hcnksXG4gICAgICAgIGZvbnRXZWlnaHQ6IDUwMFxuICAgICAgfSxcbiAgICAgICcmJGFsdGVybmF0aXZlTGFiZWwnOiB7XG4gICAgICAgIHRleHRBbGlnbjogJ2NlbnRlcicsXG4gICAgICAgIG1hcmdpblRvcDogMTZcbiAgICAgIH0sXG4gICAgICAnJiRlcnJvcic6IHtcbiAgICAgICAgY29sb3I6IHRoZW1lLnBhbGV0dGUuZXJyb3IubWFpblxuICAgICAgfVxuICAgIH0sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgYFR5cG9ncmFwaHlgIGNvbXBvbmVudCBpZiBgYWN0aXZlPXt0cnVlfWAuICovXG4gICAgYWN0aXZlOiB7fSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSBgVHlwb2dyYXBoeWAgY29tcG9uZW50IGlmIGBjb21wbGV0ZWQ9e3RydWV9YC4gKi9cbiAgICBjb21wbGV0ZWQ6IHt9LFxuXG4gICAgLyogUHNldWRvLWNsYXNzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBhbmQgYFR5cG9ncmFwaHlgIGNvbXBvbmVudCBpZiBgZXJyb3I9e3RydWV9YC4gKi9cbiAgICBlcnJvcjoge30sXG5cbiAgICAvKiBQc2V1ZG8tY2xhc3MgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGFuZCBgVHlwb2dyYXBoeWAgY29tcG9uZW50IGlmIGBkaXNhYmxlZD17dHJ1ZX1gLiAqL1xuICAgIGRpc2FibGVkOiB7fSxcblxuICAgIC8qIFN0eWxlcyBhcHBsaWVkIHRvIHRoZSBgaWNvbmAgY29udGFpbmVyIGVsZW1lbnQuICovXG4gICAgaWNvbkNvbnRhaW5lcjoge1xuICAgICAgZmxleFNocmluazogMCxcbiAgICAgIC8vIEZpeCBJRSAxMSBpc3N1ZVxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgcGFkZGluZ1JpZ2h0OiA4LFxuICAgICAgJyYkYWx0ZXJuYXRpdmVMYWJlbCc6IHtcbiAgICAgICAgcGFkZGluZ1JpZ2h0OiAwXG4gICAgICB9XG4gICAgfSxcblxuICAgIC8qIFBzZXVkby1jbGFzcyBhcHBsaWVkIHRvIHRoZSByb290IGFuZCBpY29uIGNvbnRhaW5lciBhbmQgYFR5cG9ncmFwaHlgIGlmIGBhbHRlcm5hdGl2ZUxhYmVsPXt0cnVlfWAuICovXG4gICAgYWx0ZXJuYXRpdmVMYWJlbDoge30sXG5cbiAgICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgY29udGFpbmVyIGVsZW1lbnQgd2hpY2ggd3JhcHMgYFR5cG9ncmFwaHlgIGFuZCBgb3B0aW9uYWxgLiAqL1xuICAgIGxhYmVsQ29udGFpbmVyOiB7XG4gICAgICB3aWR0aDogJzEwMCUnXG4gICAgfVxuICB9O1xufTtcbnZhciBTdGVwTGFiZWwgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTdGVwTGFiZWwocHJvcHMsIHJlZikge1xuICB2YXIgX3Byb3BzJGFjdGl2ZSA9IHByb3BzLmFjdGl2ZSxcbiAgICAgIGFjdGl2ZSA9IF9wcm9wcyRhY3RpdmUgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGFjdGl2ZSxcbiAgICAgIF9wcm9wcyRhbHRlcm5hdGl2ZUxhYiA9IHByb3BzLmFsdGVybmF0aXZlTGFiZWwsXG4gICAgICBhbHRlcm5hdGl2ZUxhYmVsID0gX3Byb3BzJGFsdGVybmF0aXZlTGFiID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRhbHRlcm5hdGl2ZUxhYixcbiAgICAgIGNoaWxkcmVuID0gcHJvcHMuY2hpbGRyZW4sXG4gICAgICBjbGFzc2VzID0gcHJvcHMuY2xhc3NlcyxcbiAgICAgIGNsYXNzTmFtZSA9IHByb3BzLmNsYXNzTmFtZSxcbiAgICAgIF9wcm9wcyRjb21wbGV0ZWQgPSBwcm9wcy5jb21wbGV0ZWQsXG4gICAgICBjb21wbGV0ZWQgPSBfcHJvcHMkY29tcGxldGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRjb21wbGV0ZWQsXG4gICAgICBfcHJvcHMkZGlzYWJsZWQgPSBwcm9wcy5kaXNhYmxlZCxcbiAgICAgIGRpc2FibGVkID0gX3Byb3BzJGRpc2FibGVkID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRkaXNhYmxlZCxcbiAgICAgIF9wcm9wcyRlcnJvciA9IHByb3BzLmVycm9yLFxuICAgICAgZXJyb3IgPSBfcHJvcHMkZXJyb3IgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGVycm9yLFxuICAgICAgZXhwYW5kZWQgPSBwcm9wcy5leHBhbmRlZCxcbiAgICAgIGljb24gPSBwcm9wcy5pY29uLFxuICAgICAgbGFzdCA9IHByb3BzLmxhc3QsXG4gICAgICBvcHRpb25hbCA9IHByb3BzLm9wdGlvbmFsLFxuICAgICAgX3Byb3BzJG9yaWVudGF0aW9uID0gcHJvcHMub3JpZW50YXRpb24sXG4gICAgICBvcmllbnRhdGlvbiA9IF9wcm9wcyRvcmllbnRhdGlvbiA9PT0gdm9pZCAwID8gJ2hvcml6b250YWwnIDogX3Byb3BzJG9yaWVudGF0aW9uLFxuICAgICAgU3RlcEljb25Db21wb25lbnRQcm9wID0gcHJvcHMuU3RlcEljb25Db21wb25lbnQsXG4gICAgICBTdGVwSWNvblByb3BzID0gcHJvcHMuU3RlcEljb25Qcm9wcyxcbiAgICAgIG90aGVyID0gX29iamVjdFdpdGhvdXRQcm9wZXJ0aWVzKHByb3BzLCBbXCJhY3RpdmVcIiwgXCJhbHRlcm5hdGl2ZUxhYmVsXCIsIFwiY2hpbGRyZW5cIiwgXCJjbGFzc2VzXCIsIFwiY2xhc3NOYW1lXCIsIFwiY29tcGxldGVkXCIsIFwiZGlzYWJsZWRcIiwgXCJlcnJvclwiLCBcImV4cGFuZGVkXCIsIFwiaWNvblwiLCBcImxhc3RcIiwgXCJvcHRpb25hbFwiLCBcIm9yaWVudGF0aW9uXCIsIFwiU3RlcEljb25Db21wb25lbnRcIiwgXCJTdGVwSWNvblByb3BzXCJdKTtcblxuICB2YXIgU3RlcEljb25Db21wb25lbnQgPSBTdGVwSWNvbkNvbXBvbmVudFByb3A7XG5cbiAgaWYgKGljb24gJiYgIVN0ZXBJY29uQ29tcG9uZW50KSB7XG4gICAgU3RlcEljb25Db21wb25lbnQgPSBTdGVwSWNvbjtcbiAgfVxuXG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwgX2V4dGVuZHMoe1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLnJvb3QsIGNsYXNzZXNbb3JpZW50YXRpb25dLCBjbGFzc05hbWUsIGRpc2FibGVkICYmIGNsYXNzZXMuZGlzYWJsZWQsIGFsdGVybmF0aXZlTGFiZWwgJiYgY2xhc3Nlcy5hbHRlcm5hdGl2ZUxhYmVsLCBlcnJvciAmJiBjbGFzc2VzLmVycm9yKSxcbiAgICByZWY6IHJlZlxuICB9LCBvdGhlciksIGljb24gfHwgU3RlcEljb25Db21wb25lbnQgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xzeChjbGFzc2VzLmljb25Db250YWluZXIsIGFsdGVybmF0aXZlTGFiZWwgJiYgY2xhc3Nlcy5hbHRlcm5hdGl2ZUxhYmVsKVxuICB9LCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChTdGVwSWNvbkNvbXBvbmVudCwgX2V4dGVuZHMoe1xuICAgIGNvbXBsZXRlZDogY29tcGxldGVkLFxuICAgIGFjdGl2ZTogYWN0aXZlLFxuICAgIGVycm9yOiBlcnJvcixcbiAgICBpY29uOiBpY29uXG4gIH0sIFN0ZXBJY29uUHJvcHMpKSkgOiBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInNwYW5cIiwge1xuICAgIGNsYXNzTmFtZTogY2xhc3Nlcy5sYWJlbENvbnRhaW5lclxuICB9LCBjaGlsZHJlbiA/IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFR5cG9ncmFwaHksIHtcbiAgICB2YXJpYW50OiBcImJvZHkyXCIsXG4gICAgY29tcG9uZW50OiBcInNwYW5cIixcbiAgICBkaXNwbGF5OiBcImJsb2NrXCIsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMubGFiZWwsIGFsdGVybmF0aXZlTGFiZWwgJiYgY2xhc3Nlcy5hbHRlcm5hdGl2ZUxhYmVsLCBjb21wbGV0ZWQgJiYgY2xhc3Nlcy5jb21wbGV0ZWQsIGFjdGl2ZSAmJiBjbGFzc2VzLmFjdGl2ZSwgZXJyb3IgJiYgY2xhc3Nlcy5lcnJvcilcbiAgfSwgY2hpbGRyZW4pIDogbnVsbCwgb3B0aW9uYWwpKTtcbn0pO1xucHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09IFwicHJvZHVjdGlvblwiID8gU3RlcExhYmVsLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIEluIG1vc3QgY2FzZXMgd2lsbCBzaW1wbHkgYmUgYSBzdHJpbmcgY29udGFpbmluZyBhIHRpdGxlIGZvciB0aGUgbGFiZWwuXG4gICAqL1xuICBjaGlsZHJlbjogUHJvcFR5cGVzLm5vZGUsXG5cbiAgLyoqXG4gICAqIE92ZXJyaWRlIG9yIGV4dGVuZCB0aGUgc3R5bGVzIGFwcGxpZWQgdG8gdGhlIGNvbXBvbmVudC5cbiAgICogU2VlIFtDU1MgQVBJXSgjY3NzKSBiZWxvdyBmb3IgbW9yZSBkZXRhaWxzLlxuICAgKi9cbiAgY2xhc3NlczogUHJvcFR5cGVzLm9iamVjdCxcblxuICAvKipcbiAgICogQGlnbm9yZVxuICAgKi9cbiAgY2xhc3NOYW1lOiBQcm9wVHlwZXMuc3RyaW5nLFxuXG4gIC8qKlxuICAgKiBNYXJrIHRoZSBzdGVwIGFzIGRpc2FibGVkLCB3aWxsIGFsc28gZGlzYWJsZSB0aGUgYnV0dG9uIGlmXG4gICAqIGBTdGVwTGFiZWxCdXR0b25gIGlzIGEgY2hpbGQgb2YgYFN0ZXBMYWJlbGAuIElzIHBhc3NlZCB0byBjaGlsZCBjb21wb25lbnRzLlxuICAgKi9cbiAgZGlzYWJsZWQ6IFByb3BUeXBlcy5ib29sLFxuXG4gIC8qKlxuICAgKiBNYXJrIHRoZSBzdGVwIGFzIGZhaWxlZC5cbiAgICovXG4gIGVycm9yOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogT3ZlcnJpZGUgdGhlIGRlZmF1bHQgbGFiZWwgb2YgdGhlIHN0ZXAgaWNvbi5cbiAgICovXG4gIGljb246IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgb3B0aW9uYWwgbm9kZSB0byBkaXNwbGF5LlxuICAgKi9cbiAgb3B0aW9uYWw6IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBUaGUgY29tcG9uZW50IHRvIHJlbmRlciBpbiBwbGFjZSBvZiB0aGUgW2BTdGVwSWNvbmBdKC9hcGkvc3RlcC1pY29uLykuXG4gICAqL1xuICBTdGVwSWNvbkNvbXBvbmVudDogUHJvcFR5cGVzLmVsZW1lbnRUeXBlLFxuXG4gIC8qKlxuICAgKiBQcm9wcyBhcHBsaWVkIHRvIHRoZSBbYFN0ZXBJY29uYF0oL2FwaS9zdGVwLWljb24vKSBlbGVtZW50LlxuICAgKi9cbiAgU3RlcEljb25Qcm9wczogUHJvcFR5cGVzLm9iamVjdFxufSA6IHZvaWQgMDtcblN0ZXBMYWJlbC5tdWlOYW1lID0gJ1N0ZXBMYWJlbCc7XG5leHBvcnQgZGVmYXVsdCB3aXRoU3R5bGVzKHN0eWxlcywge1xuICBuYW1lOiAnTXVpU3RlcExhYmVsJ1xufSkoU3RlcExhYmVsKTsiLCJleHBvcnQgeyBkZWZhdWx0IH0gZnJvbSAnLi9TdGVwTGFiZWwnOyIsImltcG9ydCBfZXh0ZW5kcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vZXh0ZW5kc1wiO1xuaW1wb3J0IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vb2JqZWN0V2l0aG91dFByb3BlcnRpZXNcIjtcbmltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBQcm9wVHlwZXMgZnJvbSAncHJvcC10eXBlcyc7XG5pbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcbmltcG9ydCB3aXRoU3R5bGVzIGZyb20gJy4uL3N0eWxlcy93aXRoU3R5bGVzJztcbmltcG9ydCBQYXBlciBmcm9tICcuLi9QYXBlcic7XG5pbXBvcnQgU3RlcENvbm5lY3RvciBmcm9tICcuLi9TdGVwQ29ubmVjdG9yJztcbmV4cG9ydCB2YXIgc3R5bGVzID0ge1xuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50LiAqL1xuICByb290OiB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIHBhZGRpbmc6IDI0XG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgb3JpZW50YXRpb249XCJob3Jpem9udGFsXCJgLiAqL1xuICBob3Jpem9udGFsOiB7XG4gICAgZmxleERpcmVjdGlvbjogJ3JvdycsXG4gICAgYWxpZ25JdGVtczogJ2NlbnRlcidcbiAgfSxcblxuICAvKiBTdHlsZXMgYXBwbGllZCB0byB0aGUgcm9vdCBlbGVtZW50IGlmIGBvcmllbnRhdGlvbj1cInZlcnRpY2FsXCJgLiAqL1xuICB2ZXJ0aWNhbDoge1xuICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nXG4gIH0sXG5cbiAgLyogU3R5bGVzIGFwcGxpZWQgdG8gdGhlIHJvb3QgZWxlbWVudCBpZiBgYWx0ZXJuYXRpdmVMYWJlbD17dHJ1ZX1gLiAqL1xuICBhbHRlcm5hdGl2ZUxhYmVsOiB7XG4gICAgYWxpZ25JdGVtczogJ2ZsZXgtc3RhcnQnXG4gIH1cbn07XG52YXIgZGVmYXVsdENvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFN0ZXBDb25uZWN0b3IsIG51bGwpO1xudmFyIFN0ZXBwZXIgPSAvKiNfX1BVUkVfXyovUmVhY3QuZm9yd2FyZFJlZihmdW5jdGlvbiBTdGVwcGVyKHByb3BzLCByZWYpIHtcbiAgdmFyIF9wcm9wcyRhY3RpdmVTdGVwID0gcHJvcHMuYWN0aXZlU3RlcCxcbiAgICAgIGFjdGl2ZVN0ZXAgPSBfcHJvcHMkYWN0aXZlU3RlcCA9PT0gdm9pZCAwID8gMCA6IF9wcm9wcyRhY3RpdmVTdGVwLFxuICAgICAgX3Byb3BzJGFsdGVybmF0aXZlTGFiID0gcHJvcHMuYWx0ZXJuYXRpdmVMYWJlbCxcbiAgICAgIGFsdGVybmF0aXZlTGFiZWwgPSBfcHJvcHMkYWx0ZXJuYXRpdmVMYWIgPT09IHZvaWQgMCA/IGZhbHNlIDogX3Byb3BzJGFsdGVybmF0aXZlTGFiLFxuICAgICAgY2hpbGRyZW4gPSBwcm9wcy5jaGlsZHJlbixcbiAgICAgIGNsYXNzZXMgPSBwcm9wcy5jbGFzc2VzLFxuICAgICAgY2xhc3NOYW1lID0gcHJvcHMuY2xhc3NOYW1lLFxuICAgICAgX3Byb3BzJGNvbm5lY3RvciA9IHByb3BzLmNvbm5lY3RvcixcbiAgICAgIGNvbm5lY3RvclByb3AgPSBfcHJvcHMkY29ubmVjdG9yID09PSB2b2lkIDAgPyBkZWZhdWx0Q29ubmVjdG9yIDogX3Byb3BzJGNvbm5lY3RvcixcbiAgICAgIF9wcm9wcyRub25MaW5lYXIgPSBwcm9wcy5ub25MaW5lYXIsXG4gICAgICBub25MaW5lYXIgPSBfcHJvcHMkbm9uTGluZWFyID09PSB2b2lkIDAgPyBmYWxzZSA6IF9wcm9wcyRub25MaW5lYXIsXG4gICAgICBfcHJvcHMkb3JpZW50YXRpb24gPSBwcm9wcy5vcmllbnRhdGlvbixcbiAgICAgIG9yaWVudGF0aW9uID0gX3Byb3BzJG9yaWVudGF0aW9uID09PSB2b2lkIDAgPyAnaG9yaXpvbnRhbCcgOiBfcHJvcHMkb3JpZW50YXRpb24sXG4gICAgICBvdGhlciA9IF9vYmplY3RXaXRob3V0UHJvcGVydGllcyhwcm9wcywgW1wiYWN0aXZlU3RlcFwiLCBcImFsdGVybmF0aXZlTGFiZWxcIiwgXCJjaGlsZHJlblwiLCBcImNsYXNzZXNcIiwgXCJjbGFzc05hbWVcIiwgXCJjb25uZWN0b3JcIiwgXCJub25MaW5lYXJcIiwgXCJvcmllbnRhdGlvblwiXSk7XG5cbiAgdmFyIGNvbm5lY3RvciA9IC8qI19fUFVSRV9fKi9SZWFjdC5pc1ZhbGlkRWxlbWVudChjb25uZWN0b3JQcm9wKSA/IC8qI19fUFVSRV9fKi9SZWFjdC5jbG9uZUVsZW1lbnQoY29ubmVjdG9yUHJvcCwge1xuICAgIG9yaWVudGF0aW9uOiBvcmllbnRhdGlvblxuICB9KSA6IG51bGw7XG4gIHZhciBjaGlsZHJlbkFycmF5ID0gUmVhY3QuQ2hpbGRyZW4udG9BcnJheShjaGlsZHJlbik7XG4gIHZhciBzdGVwcyA9IGNoaWxkcmVuQXJyYXkubWFwKGZ1bmN0aW9uIChzdGVwLCBpbmRleCkge1xuICAgIHZhciBzdGF0ZSA9IHtcbiAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgIGFjdGl2ZTogZmFsc2UsXG4gICAgICBjb21wbGV0ZWQ6IGZhbHNlLFxuICAgICAgZGlzYWJsZWQ6IGZhbHNlXG4gICAgfTtcblxuICAgIGlmIChhY3RpdmVTdGVwID09PSBpbmRleCkge1xuICAgICAgc3RhdGUuYWN0aXZlID0gdHJ1ZTtcbiAgICB9IGVsc2UgaWYgKCFub25MaW5lYXIgJiYgYWN0aXZlU3RlcCA+IGluZGV4KSB7XG4gICAgICBzdGF0ZS5jb21wbGV0ZWQgPSB0cnVlO1xuICAgIH0gZWxzZSBpZiAoIW5vbkxpbmVhciAmJiBhY3RpdmVTdGVwIDwgaW5kZXgpIHtcbiAgICAgIHN0YXRlLmRpc2FibGVkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNsb25lRWxlbWVudChzdGVwLCBfZXh0ZW5kcyh7XG4gICAgICBhbHRlcm5hdGl2ZUxhYmVsOiBhbHRlcm5hdGl2ZUxhYmVsLFxuICAgICAgY29ubmVjdG9yOiBjb25uZWN0b3IsXG4gICAgICBsYXN0OiBpbmRleCArIDEgPT09IGNoaWxkcmVuQXJyYXkubGVuZ3RoLFxuICAgICAgb3JpZW50YXRpb246IG9yaWVudGF0aW9uXG4gICAgfSwgc3RhdGUsIHN0ZXAucHJvcHMpKTtcbiAgfSk7XG4gIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChQYXBlciwgX2V4dGVuZHMoe1xuICAgIHNxdWFyZTogdHJ1ZSxcbiAgICBlbGV2YXRpb246IDAsXG4gICAgY2xhc3NOYW1lOiBjbHN4KGNsYXNzZXMucm9vdCwgY2xhc3Nlc1tvcmllbnRhdGlvbl0sIGNsYXNzTmFtZSwgYWx0ZXJuYXRpdmVMYWJlbCAmJiBjbGFzc2VzLmFsdGVybmF0aXZlTGFiZWwpLFxuICAgIHJlZjogcmVmXG4gIH0sIG90aGVyKSwgc3RlcHMpO1xufSk7XG5wcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIgPyBTdGVwcGVyLnByb3BUeXBlcyA9IHtcbiAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gV2FybmluZyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxuICAvLyB8IFRoZXNlIFByb3BUeXBlcyBhcmUgZ2VuZXJhdGVkIGZyb20gdGhlIFR5cGVTY3JpcHQgdHlwZSBkZWZpbml0aW9ucyB8XG4gIC8vIHwgICAgIFRvIHVwZGF0ZSB0aGVtIGVkaXQgdGhlIGQudHMgZmlsZSBhbmQgcnVuIFwieWFybiBwcm9wdHlwZXNcIiAgICAgfFxuICAvLyAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXG5cbiAgLyoqXG4gICAqIFNldCB0aGUgYWN0aXZlIHN0ZXAgKHplcm8gYmFzZWQgaW5kZXgpLlxuICAgKiBTZXQgdG8gLTEgdG8gZGlzYWJsZSBhbGwgdGhlIHN0ZXBzLlxuICAgKi9cbiAgYWN0aXZlU3RlcDogUHJvcFR5cGVzLm51bWJlcixcblxuICAvKipcbiAgICogSWYgc2V0IHRvICd0cnVlJyBhbmQgb3JpZW50YXRpb24gaXMgaG9yaXpvbnRhbCxcbiAgICogdGhlbiB0aGUgc3RlcCBsYWJlbCB3aWxsIGJlIHBvc2l0aW9uZWQgdW5kZXIgdGhlIGljb24uXG4gICAqL1xuICBhbHRlcm5hdGl2ZUxhYmVsOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVHdvIG9yIG1vcmUgYDxTdGVwIC8+YCBjb21wb25lbnRzLlxuICAgKi9cbiAgY2hpbGRyZW46IFByb3BUeXBlcy5ub2RlLFxuXG4gIC8qKlxuICAgKiBPdmVycmlkZSBvciBleHRlbmQgdGhlIHN0eWxlcyBhcHBsaWVkIHRvIHRoZSBjb21wb25lbnQuXG4gICAqIFNlZSBbQ1NTIEFQSV0oI2NzcykgYmVsb3cgZm9yIG1vcmUgZGV0YWlscy5cbiAgICovXG4gIGNsYXNzZXM6IFByb3BUeXBlcy5vYmplY3QsXG5cbiAgLyoqXG4gICAqIEBpZ25vcmVcbiAgICovXG4gIGNsYXNzTmFtZTogUHJvcFR5cGVzLnN0cmluZyxcblxuICAvKipcbiAgICogQW4gZWxlbWVudCB0byBiZSBwbGFjZWQgYmV0d2VlbiBlYWNoIHN0ZXAuXG4gICAqL1xuICBjb25uZWN0b3I6IFByb3BUeXBlcy5lbGVtZW50LFxuXG4gIC8qKlxuICAgKiBJZiBzZXQgdGhlIGBTdGVwcGVyYCB3aWxsIG5vdCBhc3Npc3QgaW4gY29udHJvbGxpbmcgc3RlcHMgZm9yIGxpbmVhciBmbG93LlxuICAgKi9cbiAgbm9uTGluZWFyOiBQcm9wVHlwZXMuYm9vbCxcblxuICAvKipcbiAgICogVGhlIHN0ZXBwZXIgb3JpZW50YXRpb24gKGxheW91dCBmbG93IGRpcmVjdGlvbikuXG4gICAqL1xuICBvcmllbnRhdGlvbjogUHJvcFR5cGVzLm9uZU9mKFsnaG9yaXpvbnRhbCcsICd2ZXJ0aWNhbCddKVxufSA6IHZvaWQgMDtcbmV4cG9ydCBkZWZhdWx0IHdpdGhTdHlsZXMoc3R5bGVzLCB7XG4gIG5hbWU6ICdNdWlTdGVwcGVyJ1xufSkoU3RlcHBlcik7IiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gJy4vU3RlcHBlcic7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMTIgMGExMiAxMiAwIDEgMCAwIDI0IDEyIDEyIDAgMCAwIDAtMjR6bS0yIDE3bC01LTUgMS40LTEuNCAzLjYgMy42IDcuNi03LjZMMTkgOGwtOSA5elwiXG59KSwgJ0NoZWNrQ2lyY2xlJyk7IiwiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IGNyZWF0ZVN2Z0ljb24gZnJvbSAnLi4vLi4vdXRpbHMvY3JlYXRlU3ZnSWNvbic7XG4vKipcbiAqIEBpZ25vcmUgLSBpbnRlcm5hbCBjb21wb25lbnQuXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgY3JlYXRlU3ZnSWNvbiggLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJwYXRoXCIsIHtcbiAgZDogXCJNMSAyMWgyMkwxMiAyIDEgMjF6bTEyLTNoLTJ2LTJoMnYyem0wLTRoLTJ2LTRoMnY0elwiXG59KSwgJ1dhcm5pbmcnKTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCBBcHBBcHBCYXIgZnJvbSAnLi4vbW9kdWxlcy92aWV3cy9BcHBBcHBCYXInXHJcbmltcG9ydCBQcm9kdWN0SGVybyBmcm9tICcuLi9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RIZXJvJ1xyXG5pbXBvcnQgUHJvZHVjdFZhbHVlcyBmcm9tICcuLi9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RWYWx1ZXMnXHJcbmltcG9ydCBQcm9kdWN0Q2F0ZWdvcmllcyBmcm9tICcuLi9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RDYXRlZ29yaWVzJ1xyXG5pbXBvcnQgUHJvZHVjdEhvd0l0V29ya3MgZnJvbSAnLi4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0SG93SXRXb3JrcydcclxuaW1wb3J0IFByb2R1Y3RDVEEgZnJvbSAnLi4vbW9kdWxlcy92aWV3cy9Qcm9kdWN0Q1RBJ1xyXG5pbXBvcnQgU3RlcHBlciBmcm9tICcuLi9tb2R1bGVzL2NvbXBvbmVudHMvU3RlcHBlcidcclxuaW1wb3J0IFByb2R1Y3RTbW9raW5nSGVybyBmcm9tICcuLi9tb2R1bGVzL3ZpZXdzL1Byb2R1Y3RTbW9raW5nSGVybydcclxuaW1wb3J0IEFwcEZvb3RlciBmcm9tICcuLi9tb2R1bGVzL3ZpZXdzL0FwcEZvb3RlcidcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEluZGV4KCkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgIDxBcHBBcHBCYXIgLz5cclxuICAgICAgPFByb2R1Y3RIZXJvIC8+XHJcbiAgICAgIDxQcm9kdWN0VmFsdWVzIC8+XHJcbiAgICAgIDxQcm9kdWN0Q2F0ZWdvcmllcyAvPlxyXG4gICAgICA8UHJvZHVjdEhvd0l0V29ya3MgLz5cclxuICAgICAgey8qIDxQcm9kdWN0Q1RBIC8+ICovfVxyXG4gICAgICA8U3RlcHBlciAvPlxyXG4gICAgICA8UHJvZHVjdFNtb2tpbmdIZXJvIC8+XHJcbiAgICAgIDxBcHBGb290ZXIgLz5cclxuICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgKVxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==