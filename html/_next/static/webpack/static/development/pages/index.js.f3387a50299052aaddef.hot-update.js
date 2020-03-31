webpackHotUpdate("static/development/pages/index.js",{

/***/ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js":
/*!*****************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectDestructuringEmpty; });
function _objectDestructuringEmpty(obj) {
  if (obj == null) throw new TypeError("Cannot destructure undefined");
}

/***/ }),

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");



var _this = undefined,
    _jsxFileName = "/Users/mb99n/Desktop/layki.net/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Frame = function Frame(props) {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    direction: "row",
    background: "background",
    style: {
      width: '100%',
      height: '100%'
    }
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6,
      columnNumber: 5
    }
  }));
};

var Holder = function Holder(props) {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_1__["default"])({
    align: "end",
    justify: "center",
    pad: "medium",
    wrap: true,
    overflow: "hidden"
  }, props, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 5
    }
  }));
};

var Head = function Head(_ref) {
  Object(_babel_runtime_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Header"], {
    gridArea: "header",
    background: "dark-1",
    overflow: "hidden",
    pad: {
      left: 'medium',
      right: 'medium'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    label: "Home.",
    plain: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 9
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Collapsible"], {
    direction: "horizontal",
    open: collapse,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Nav"], {
    direction: "row",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    href: "https://www.facebook.com/tenninox",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["FacebookOption"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 72
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 17
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    href: "https://www.instagram.com/my99.n/",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Instagram"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 72
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 17
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    href: "https://github.com/vzsky",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Github"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 63
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 17
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    href: "mailto:talay@layki.net",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Mail"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 61
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 17
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    href: "https://www.linkedin.com/in/touchs/",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["LinkedinOption"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 74
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34,
      columnNumber: 17
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Anchor"], {
    href: "https://t.me/my99n",
    icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Send"], {
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35,
        columnNumber: 57
      }
    }),
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 17
    }
  }))), __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Collapsible"], {
    direction: "horizontal",
    open: !collapse,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Menu"], {
    items: [{
      icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["FacebookOption"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 41,
          columnNumber: 29
        }
      }),
      onClick: function onClick() {}
    }, {
      icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Instagram"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 42,
          columnNumber: 29
        }
      }),
      onClick: function onClick() {}
    }, {
      icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Github"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43,
          columnNumber: 29
        }
      }),
      onClick: function onClick() {}
    }, {
      icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Mail"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44,
          columnNumber: 29
        }
      }),
      onClick: function onClick() {}
    }, {
      icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["LinkedinOption"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45,
          columnNumber: 29
        }
      }),
      onClick: function onClick() {}
    }, {
      icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_4__["Send"], {
        __self: _this,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 29
        }
      }),
      onClick: function onClick() {}
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
    }
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      MenuCollapse = _useState[0],
      setMenuCollapse = _useState[1];

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, null, __jsx(Frame, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 13
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Grid"], {
    fill: true,
    columns: ["xxsmall", ['xxsmall', 'flex'], ['medium', 'large'], ['xxsmall', 'xsmall']],
    rows: ['xxsmall', 'flex', 'medium', 'flex'],
    areas: [{
      name: 'header',
      start: [0, 0],
      end: [3, 0]
    }, {
      name: 'mid1',
      start: [2, 2],
      end: [2, 2]
    }, {
      name: 'side',
      start: [0, 1],
      end: [0, 3]
    }],
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 17
    }
  }, __jsx(Head, {
    MenuCollapse: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 21
    }
  }), __jsx(Holder, {
    gridArea: "mid1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72,
      columnNumber: 21
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Heading"], {
    color: "#EEE",
    size: "medium",
    margin: "xsmall",
    textAlign: "end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 25
    }
  }, "Touch Sungkawichai"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    color: "#EEE",
    size: "medium",
    margin: "xsmall",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76,
      columnNumber: 25
    }
  }, "KVIS 4 | Coder | Photograph | Thinker")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Box"], {
    gap: "large",
    gridArea: "side",
    background: "light-1",
    overflow: "hidden",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 21
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_3__["Text"], {
    style: {
      transform: "rotate(-90deg)"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81,
      columnNumber: 25
    }
  }, "layki.net")))));
});

/***/ })

})
//# sourceMappingURL=index.js.f3387a50299052aaddef.hot-update.js.map