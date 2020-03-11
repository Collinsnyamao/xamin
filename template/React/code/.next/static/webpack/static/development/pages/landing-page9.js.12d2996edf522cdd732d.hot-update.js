webpackHotUpdate("static/development/pages/landing-page9.js",{

/***/ "./components/home-section/landing-page9/casestudies-section/index.js":
/*!****************************************************************************!*\
  !*** ./components/home-section/landing-page9/casestudies-section/index.js ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");





var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page9/casestudies-section/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var tabActive = function tabActive(id) {
  jquery__WEBPACK_IMPORTED_MODULE_6___default()('.tab-content').find('.active').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_6___default()('.nav-item').find('.active1').removeClass('active1');
  jquery__WEBPACK_IMPORTED_MODULE_6___default()('#' + id).addClass('active');
};

var List = function List(props) {
  var listItems = props.tabs;
  var list = listItems.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("a", {
      id: item.id,
      className: item.active ? "nav-link show active " : "nav-link",
      "data-toggle": "tab",
      href: '#' + item.href,
      role: "tab",
      "aria-selected": "true",
      onClick: function onClick() {
        tabActive(item.href);
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    }, item.title, __jsx("span", {
      className: "post_no",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, item.count)));
  });
  return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("ul", {
    className: "nav  justify-content-center",
    id: "myTab",
    role: "tablist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, list));
};

var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      tabs: [{
        id: 'all-tab',
        href: 'all',
        title: 'All',
        active: true,
        count: 8
      }, {
        id: 'design-tab',
        href: 'design',
        title: 'Design',
        active: false,
        count: 4
      }, {
        id: 'html-tab',
        href: 'html',
        title: 'HTML',
        active: false,
        count: 1
      }, {
        id: 'photography-tab',
        href: 'photography',
        title: 'Photography',
        active: false,
        count: 3
      }, {
        id: 'video-tab',
        href: 'video',
        title: 'Video',
        active: false,
        count: 2
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("section", {
        className: "pt-0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx("div", {
        className: "col-sm-12 fadeInUp  animated",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_7__["SectionTitle"], {
        className: "title-box wow fadeInUp text-center",
        spanclass: "title-design",
        link: "CASE STUDIES",
        title: "Our Latest Case Studies",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), __jsx("div", {
        className: "col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 100
        },
        __self: this
      }, __jsx("div", {
        id: "features",
        className: "iq-amazing-tab wow fadeInUp",
        "data-wow-delay": "1s",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 102
        },
        __self: this
      }, __jsx("div", {
        className: "col-lg-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, __jsx(List, {
        tabs: tabs,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 104
        },
        __self: this
      }))), __jsx("div", {
        className: "tab-content ",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 107
        },
        __self: this
      }, tabs.map(function (tab, index) {
        return __jsx("div", {
          key: index,
          className: tab.active ? "tab-pane show active " : "tab-pane",
          id: tab.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 109
          },
          __self: this
        }, __jsx("div", {
          className: "row flex-row-reverse",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 110
          },
          __self: this
        }, __jsx("div", {
          className: "col-lg-12 text-left align-self-center",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 111
          },
          __self: this
        }, __jsx("div", {
          className: "owl-carousel owl-loaded owl-drag",
          "data-dots": "false",
          "data-nav": "false",
          "data-items": "3",
          "data-items-laptop": "3",
          "data-items-tab": "2",
          "data-items-mobile": "1",
          "data-items-mobile-sm": "1",
          "data-autoplay": "false",
          "data-loop": "true",
          "data-margin": "30",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 112
          },
          __self: this
        }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_7__["PortfolioItem"], {
          filterdata: tab.href,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 117
          },
          __self: this
        })))));
      }))))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=landing-page9.js.12d2996edf522cdd732d.hot-update.js.map