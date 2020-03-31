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
    background: "dark-1",
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
    overflow: "hidden",
    background: "background"
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
  href: "https://www.facebook.com/tenninox",
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["FacebookOption"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27,
      columnNumber: 55
    }
  })
}, {
  href: "https://www.instagram.com/my99.n/",
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Instagram"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28,
      columnNumber: 54
    }
  })
}, {
  href: "https://github.com/vzsky",
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Github"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 45
    }
  })
}, {
  href: "mailto:talay@layki.net",
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Mail"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30,
      columnNumber: 43
    }
  })
}, {
  href: "https://www.linkedin.com/in/touchs/",
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["LinkedinOption"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 56
    }
  })
}, {
  href: "https://t.me/my99n",
  icon: __jsx(grommet_icons__WEBPACK_IMPORTED_MODULE_3__["Send"], {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32,
      columnNumber: 39
    }
  })
}];
/* harmony default export */ __webpack_exports__["default"] = (function () {
  var size = react__WEBPACK_IMPORTED_MODULE_1___default.a.useContext(grommet__WEBPACK_IMPORTED_MODULE_2__["ResponsiveContext"]);
  return __jsx(Frame, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38,
      columnNumber: 9
    }
  }, __jsx(Holder, {
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39,
      columnNumber: 13
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
      lineNumber: 40,
      columnNumber: 17
    }
  }, "Touch Sungkawichai"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    color: "#EEE",
    size: size,
    margin: "xsmall",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 17
    }
  }, "KVIS 4 | Coder | Photograph | Thinker")), __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Box"], {
    background: "light-1",
    overflow: "hidden",
    alignContent: "center",
    justify: "around",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47,
      columnNumber: 13
    }
  }, __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Text"], {
    color: "brand",
    style: {
      transform: "rotate(-90deg)"
    },
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 17
    }
  }, "layki.net"), __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Nav"], {
    align: "center",
    __self: _this,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51,
      columnNumber: 17
    }
  }, social.map(function (item) {
    return __jsx(grommet__WEBPACK_IMPORTED_MODULE_2__["Anchor"], {
      color: "accent-1",
      href: item.href,
      icon: item.icon,
      __self: _this,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 25
      }
    });
  }))));
});

/***/ })

})
//# sourceMappingURL=index.js.edb34e2757e0f3b85063.hot-update.js.map