webpackHotUpdate("static/development/pages/index.js",{

/***/ "./src/pages/index.tsx":
/*!*****************************!*\
  !*** ./src/pages/index.tsx ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var grommet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! grommet */ "./node_modules/grommet/es6/index.js");
/* harmony import */ var grommet_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! grommet-icons */ "./node_modules/grommet-icons/es6/index.js");


var _this = undefined,
    _jsxFileName = "/Users/mb99n/Desktop/layki.net/src/pages/index.tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




var Frame = function Frame(props) {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({
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

var social = [{
  onClick: function onClick() {
    return window.location.href = "https://www.facebook.com/tenninox";
  },
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["FacebookOption"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 83
    }
  })
}, {
  onClick: function onClick() {
    return window.location.href = "https://www.instagram.com/my99.n/";
  },
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Instagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 82
    }
  })
}, {
  onClick: function onClick() {
    return window.location.href = "https://github.com/vzsky";
  },
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Github"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 73
    }
  })
}, {
  onClick: function onClick() {
    return window.location.href = "mailto:talay@layki.net";
  },
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Mail"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 71
    }
  })
}, {
  onClick: function onClick() {
    return window.location.href = "https://www.linkedin.com/in/touchs/";
  },
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["LinkedinOption"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 84
    }
  })
}, {
  onClick: function onClick() {
    return window.location.href = "https://t.me/my99n";
  },
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Send"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 67
    }
  })
}];

var Head = function Head() {
  return __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Header"], {
    direction: "row",
    background: "dark-1",
    overflow: "hidden",
    pad: {
      left: 'medium',
      right: 'medium'
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35,
      columnNumber: 5
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Button"], {
    label: "Home.",
    plain: true,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41,
      columnNumber: 9
    }
  }), __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Menu"], {
    items: social,
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42,
      columnNumber: 9
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, null, __jsx(Frame, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50,
      columnNumber: 13
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Grid"], {
    fill: true,
    columns: ["xxsmall", ['xxsmall', 'flex'], ['small', 'large'], ['xxsmall', 'xsmall']],
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
      lineNumber: 51,
      columnNumber: 17
    }
  }, __jsx(Head, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 21
    }
  }), __jsx(Holder, {
    gridArea: "mid1",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 21
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Heading"], {
    color: "#EEE",
    responsive: true,
    size: "medium",
    margin: "xsmall",
    textAlign: "end",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 25
    }
  }, "Touch Sungkawichai"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    color: "#EEE",
    size: "medium",
    margin: "xsmall",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66,
      columnNumber: 25
    }
  }, "KVIS 4 | Coder | Photograph | Thinker")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    gap: "large",
    gridArea: "side",
    background: "light-1",
    overflow: "hidden",
    justify: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70,
      columnNumber: 21
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    style: {
      transform: "rotate(-90deg)"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 25
    }
  }, "layki.net")))));
});

/***/ })

})
//# sourceMappingURL=index.js.b3753cad7409b30ce576.hot-update.js.map