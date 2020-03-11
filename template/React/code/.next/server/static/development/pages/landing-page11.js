module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/home-section/landing-page11/benefit-section/index.js":
/*!*************************************************************************!*\
  !*** ./components/home-section/landing-page11/benefit-section/index.js ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page11/benefit-section/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: [{
        title: "Google Analytics",
        text: "There are many variations of passages of Lorem Ipsum available, in",
        fancy_img: "./static/assets/images/fancybox/7-5.png"
      }, {
        title: "Marketing Tracking",
        text: "There are many variations of passages of Lorem Ipsum available, in",
        fancy_img: "./static/assets/images/fancybox/7-6.png"
      }, {
        title: "Services and Solutions",
        text: "There are many variations of passages of Lorem Ipsum available, in",
        fancy_img: "./static/assets/images/fancybox/7-7.png"
      }, {
        title: "Conversion Optimization",
        text: "There are many variations of passages of Lorem Ipsum available, in",
        fancy_img: "./static/assets/images/fancybox/7-8.png"
      }]
    };
  }

  render() {
    let {
      value
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "col-sm-12 wow fadeInUp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
      link: "OUR SERVICES",
      title: "Marketing Analytics Services",
      className: "title-box wow fadeInUp  text-center",
      spanclass: "title-design",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }))), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, value.map((item, index) => __jsx("div", {
      key: index,
      className: "col-lg-6 col-md-6 col-sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["CardStyle18"], {
      title: item.title,
      text: item.text,
      fancy_img: item.fancy_img,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/home-section/landing-page11/blog/index.js":
/*!**************************************************************!*\
  !*** ./components/home-section/landing-page11/blog/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page11/blog/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Blog = props => {
  const bloglist = props.bloglist;
  return bloglist.map((blog, index) => __jsx("div", {
    key: index,
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "iq-blog-box mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "iq-blog-image clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    alt: "#",
    className: "img-fluid center-block",
    src: blog.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("ul", {
    className: "iq-blogtag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, blog.linkname)))), __jsx("div", {
    className: "iq-blog-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("div", {
    className: "iq-blog-meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("time", {
    className: "entry-date published updated",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, blog.time))))), __jsx("div", {
    className: "blog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, blog.title))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, blog.desc), __jsx("div", {
    className: "blog-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: undefined
  }, __jsx("a", {
    className: "button-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, "Read More", __jsx("i", {
    className: "fa fa-angle-right",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }))))))));
};

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [{
        img: "./static/assets/images/about-us/04.png",
        linkname: "HTML",
        time: "September 26, 2019 ",
        title: "Build Construction",
        desc: "“They bring to you a host of beautifully created infographics that contain the latest digital marketing "
      }, {
        img: "./static/assets/images/about-us/04.png",
        linkname: "Design",
        time: "September 26, 2019 ",
        title: "Life Lack Meaning",
        desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing."
      }, {
        img: "./static/assets/images/about-us/04.png",
        linkname: "HTML",
        time: "September 26, 2019 ",
        title: "Construction industry",
        desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing"
      }, {
        img: "./static/assets/images/about-us/04.png",
        linkname: "CSS",
        time: "September 26, 2019 ",
        title: "Content Marketing",
        desc: "They bring to you a host of beautifully created infographics that contain the latest digital marketing."
      }]
    };
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      className: "pt-0",
      id: "blog",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("div", {
      className: "row layer-fly-one",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_2__["SectionTitle"], {
      link: "BLOG",
      className: "title-box wow fadeInUp text-center",
      title: "Recent Blog",
      spanclass: "title-design",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }), __jsx("div", {
      className: "xamin-recentblog v1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
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
      "data-autoplay": "true",
      "data-loop": "true",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    }, __jsx(Blog, {
      bloglist: this.state.cardData,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 105
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/home-section/landing-page11/footer/index.js":
/*!****************************************************************!*\
  !*** ./components/home-section/landing-page11/footer/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page11/footer/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      footerText: [{
        icon: true,
        iconClass: 'fa fa-phone',
        text: '+0123456789'
      }, {
        icon: true,
        iconClass: 'fa fa-envelope',
        text: 'support@iqnonicthemes.com'
      }, {
        icon: true,
        iconClass: 'fa fa-home',
        text: '1234 North Avenue Luke Lane, South Bend, IN 360001'
      }],
      footerHome: [{
        section: [{
          href: '#',
          title: 'Home'
        }, {
          href: '#',
          title: 'Blog'
        }, {
          href: '#',
          title: 'Careers'
        }, {
          href: '#',
          title: 'Clients'
        }, {
          href: '#',
          title: 'Service'
        }]
      }],
      footerAbout: [{
        section: [{
          href: '#',
          title: 'Home'
        }, {
          href: '#',
          title: 'Blog'
        }, {
          href: '#',
          title: 'Careers'
        }, {
          href: '#',
          title: 'Clients'
        }, {
          href: '#',
          title: 'Service'
        }]
      }]
    };
  }

  render() {
    const {
      footerText,
      footerHome,
      footerAbout
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_2__["FooterMain"], {
      className: "footer-one iq-bg-dark iq-over-dark-90",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 91
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 92
      },
      __self: this
    }, __jsx("div", {
      className: "footer-top",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 93
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_2__["SubScriber"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_2__["FooterLogo"], {
      sectionImage: './static/assets/images/logo.png',
      sectionText: "It is a long established fact that a reader will be distracted by the readable content.",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    })), __jsx("div", {
      className: "col-lg-2 col-md-6 col-sm-6 mt-4 mt-lg-0 mt-md-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 103
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_2__["FooterLinks"], {
      title: "Menu",
      content: footerHome,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 104
      },
      __self: this
    })), __jsx("div", {
      className: "col-lg-2 col-md-6 col-sm-6 mt-lg-0 mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_2__["FooterLinks"], {
      title: "About us",
      content: footerAbout,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    })), __jsx("div", {
      className: "col-lg-4 col-md-6 col-sm-6 mt-lg-0 mt-4",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 112
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_2__["FooterAddress"], {
      addressContent: footerText,
      addressTitle: "Contact Us",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }))))), __jsx("footer", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 118
      },
      __self: this
    }, __jsx("div", {
      className: "copyright-footer",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }, __jsx("div", {
      className: "pt-3 pb-3",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 120
      },
      __self: this
    }, __jsx("div", {
      className: "row flex-row-reverse justify-content-between",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 121
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-12 col-md-12 text-lg-center text-md-center text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, " ", __jsx("span", {
      className: "copyright",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Copyright 2019 ", __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: "/landing-page1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Xamin")), " All Rights Reserved."), " ")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/home-section/landing-page11/howworks/index.js":
/*!******************************************************************!*\
  !*** ./components/home-section/landing-page11/howworks/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page11/howworks/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [{
        media: "./static/assets/images/services/01.png",
        title: "Data for all your people",
        text: "it is a long established fact that a reader will be distracted by the of readable",
        class: "xamin-process xamin-circle right wow fadeInUp  text-center"
      }, {
        media: "./static/assets/images/services/02.png",
        title: "A new breed of AI",
        text: "it is a long established fact that a reader will be distracted by the of readable",
        class: "xamin-process xamin-circle right wow fadeInUp  text-center"
      }, {
        media: "./static/assets/images/services/03.png",
        title: "Analytics business",
        text: "it is a long established fact that a reader will be distracted by the of readable",
        class: "xamin-process xamin-circle  wow fadeInUp  text-center"
      }]
    };
  }

  render() {
    const {
      items
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
      link: "PROCESS",
      title: "What you can do with marketing analytics",
      className: "title-box wow fadeInUp text-center",
      spanclass: "title-design",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }))), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, items.map((item, index) => __jsx("div", {
      key: index,
      className: "col-md-4 col-sm-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, __jsx("div", {
      className: item.class,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["CardStyle1"], {
      media: item.media,
      title: item.title,
      text: item.text,
      imgClass: "circle-effect",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/home-section/landing-page11/projects/index.js":
/*!******************************************************************!*\
  !*** ./components/home-section/landing-page11/projects/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");
/* harmony import */ var _constants_portfolio_item__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../constants/portfolio-item */ "./constants/portfolio-item.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page11/projects/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const tabActive = id => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.tab-content').find('.active').removeClass('active');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.nav-item').find('.active1').removeClass('active1');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#' + id).addClass('active');
};

const List = props => {
  const listItems = props.tabs;
  const list = listItems.map((item, index) => __jsx("li", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("a", {
    id: item.id,
    className: item.active ? "nav-link show active " : "nav-link",
    "data-toggle": "tab",
    href: '#' + item.href,
    role: "tab",
    "aria-selected": "true",
    onClick: () => {
      tabActive(item.href);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, item.title, __jsx("span", {
    className: "post_no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, item.count))));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    className: "nav  justify-content-center",
    id: "myTab",
    role: "tablist",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, list));
};

class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
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
      }],
      item: _constants_portfolio_item__WEBPACK_IMPORTED_MODULE_3__["Item"]
    };
  }

  render() {
    const {
      tabs,
      item
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 94
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 95
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 97
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_2__["SectionTitle"], {
      link: "OUR PROJECTS",
      title: "Projects in Different Domain of Industry",
      className: "title-box wow fadeInUp text-center",
      spanclass: "title-design",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 98
      },
      __self: this
    })), __jsx("div", {
      className: "col-md-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    }, __jsx("div", {
      id: "features",
      className: "iq-amazing-tab wow fadeInUp",
      "data-wow-delay": "1s",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 107
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-12",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 109
      },
      __self: this
    }, __jsx(List, {
      tabs: tabs,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 110
      },
      __self: this
    }))), __jsx("div", {
      className: "tab-content ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 113
      },
      __self: this
    }, tabs.map((tab, index) => __jsx("div", {
      key: index,
      className: tab.active ? "tab-pane show active " : "tab-pane",
      id: tab.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 115
      },
      __self: this
    }, __jsx("div", {
      className: "row flex-row-reverse",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 116
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-12 text-left align-self-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 117
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
        lineNumber: 118
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_2__["PortfolioItem"], {
      filterdata: tab.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 123
      },
      __self: this
    })))))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/home-section/landing-page11/revslider/index.js":
/*!*******************************************************************!*\
  !*** ./components/home-section/landing-page11/revslider/index.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page11/revslider/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["RevSlider"], {
      revId: "rev_slider_11_1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, __jsx("rs-slide", {
      "data-key": "rs-4",
      "data-title": "Slide",
      "data-anim": "ei:d;eo:d;s:1000;r:0;t:fade;sl:0;",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, __jsx("img", {
      src: "./static/assets/revslider/assets_slider11/transparent.png",
      "data-bg": "c:#f2f4fe;",
      class: "rev-slidebg",
      "data-no-retina": true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    }), __jsx("rs-layer", {
      id: "slider-4-slide-4-layer-3",
      class: "button blue-btn rev-btn",
      "data-type": "button",
      "data-color": "#ffffff",
      "data-rsp_ch": "on",
      "data-xy": "x:c;xo:263px;y:c;yo:176px;",
      "data-text": "w:normal;s:18;l:35;",
      "data-dim": "minh:0px;",
      "data-padding": "r:25;l:25;",
      "data-border": "bor:25px,25px,25px,25px;",
      "data-frame_0": "sX:0.9;sY:0.9;",
      "data-frame_1": "st:800;sp:1000;sR:800;",
      "data-frame_999": "o:0;st:w;sR:7200;",
      "data-frame_hover": "bgc:#313e5b;bor:25px,25px,25px,25px;bri:120%;",
      style: {
        zIndex: 8,
        backgroundColor: "#007aff",
        fontFamily: "Lato"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }, "Read More"), __jsx("rs-layer", {
      id: "slider-4-slide-4-layer-4",
      "data-type": "text",
      "data-color": "#394562",
      "data-rsp_ch": "on",
      "data-xy": "x:c;xo:212px;y:b;yo:50px;",
      "data-text": "w:normal;s:18;fw:700;",
      "data-frame_1": "st:1980;sR:1980;",
      "data-frame_999": "o:0;st:w;sR:6720;",
      style: {
        zIndex: 9,
        fontFamily: "Lato"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "Facebook"), __jsx("rs-layer", {
      id: "slider-4-slide-4-layer-5",
      "data-type": "text",
      "data-color": "#394562",
      "data-rsp_ch": "on",
      "data-xy": "x:c;xo:338px;y:b;yo:50px;",
      "data-text": "w:normal;s:18;fw:700;",
      "data-frame_1": "st:2340;sR:2340;",
      "data-frame_999": "o:0;st:w;sR:6360;",
      style: {
        zIndex: 9,
        fontFamily: "Lato"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, "Instagram"), __jsx("rs-layer", {
      id: "slider-4-slide-4-layer-6",
      "data-type": "text",
      "data-color": "#394562",
      "data-rsp_ch": "on",
      "data-xy": "x:c;xo:459px;y:b;yo:50px;",
      "data-text": "w:normal;s:18;fw:700;",
      "data-frame_1": "st:2680;sR:2680;",
      "data-frame_999": "o:0;st:w;sR:6020;",
      style: {
        zIndex: 9,
        fontFamily: "Lato"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }, "Dribbble"), __jsx("rs-layer", {
      id: "slider-4-slide-4-layer-8",
      "data-type": "text",
      "data-color": "#394562",
      "data-rsp_ch": "on",
      "data-xy": "x:6px;y:209px;",
      "data-text": "w:normal;s:18;fw:700;",
      "data-btrans": "rZ:-90;",
      "data-frame_0": "x:right;",
      "data-frame_1": "st:3270;sp:1000;",
      "data-frame_999": "o:0;st:w;sR:5430;",
      style: {
        zIndex: 9,
        fontFamily: "Lato"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 68
      },
      __self: this
    }, "#Iqonic Design"), __jsx("rs-layer", {
      id: "slider-4-slide-4-layer-10",
      "data-type": "text",
      "data-color": "#394562",
      "data-rsp_ch": "on",
      "data-xy": "x:r;xo:12px;y:b;yo:120px;",
      "data-text": "w:normal;s:18;fw:700;",
      "data-btrans": "rZ:-90;",
      "data-frame_0": "x:right;",
      "data-frame_1": "st:3270;sp:1000;",
      "data-frame_999": "o:0;st:w;sR:5430;",
      style: {
        zIndex: 9,
        fontFamily: "Lato"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 82
      },
      __self: this
    }, "#Design Inspiration"), __jsx("rs-layer", {
      id: "slider-4-slide-4-layer-13",
      "data-type": "image",
      "data-rsp_ch": "on",
      "data-xy": "y:-22px;",
      "data-text": "w:normal;",
      "data-dim": "w:858px;h:1219px;",
      "data-frame_1": "st:600;sR:600;",
      "data-frame_999": "o:0;st:w;sR:8100;",
      style: {
        zIndex: 5,
        fontFamily: "Roboto"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 96
      },
      __self: this
    }, __jsx("img", {
      src: "./static/assets/revslider/assets_slider11/xamin-d11-02.png",
      width: "858",
      height: "1219",
      "data-no-retina": true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 106
      },
      __self: this
    })), __jsx("rs-layer", {
      id: "slider-4-slide-4-layer-14",
      "data-type": "text",
      "data-color": "#394562",
      "data-rsp_ch": "on",
      "data-xy": "x:968px;y:c;yo:-90px;",
      "data-text": "w:normal;s:70;l:80;fw:900;",
      "data-frame_0": "sX:0.9;sY:0.9;",
      "data-frame_1": "st:800;sp:1000;sR:800;",
      "data-frame_999": "o:0;st:w;sR:7200;",
      style: {
        zIndex: 6,
        fontFamily: "Lato",
        textTransform: "capitalize"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 108
      },
      __self: this
    }, "Best Marketing ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 119
      },
      __self: this
    }), "Analysis"), __jsx("rs-layer", {
      id: "slider-4-slide-4-layer-15",
      "data-type": "text",
      "data-color": "#394562",
      "data-rsp_ch": "on",
      "data-xy": "x:c;xo:397px;y:c;yo:65px;",
      "data-text": "w:normal;s:16;l:30;",
      "data-frame_0": "sX:0.9;sY:0.9;",
      "data-frame_1": "st:800;sp:1000;sR:800;",
      "data-frame_999": "o:0;st:w;sR:7200;",
      style: {
        zIndex: 7,
        fontFamily: "Lato"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 122
      },
      __self: this
    }, "Lorem Ipsum is simply dummy text of the printing and typesetting", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), " industry.Lorem Ipsum has been the industry's standard dummy ", __jsx("br", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 133
      },
      __self: this
    }), " text ever since the 1500s,")))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/home-section/landing-page11/section-three/index.js":
/*!***********************************************************************!*\
  !*** ./components/home-section/landing-page11/section-three/index.js ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page11/section-three/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      checkList: ["Marketing Tracking", "Services and Solutions", "Predicting future", "Reporting on the pas", "Google Analytics", "Analyzing the present"]
    };
  }

  render() {
    let {
      cardData,
      checkList
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "container",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("div", {
      className: "col-lg-6  wow fadeInUp xamin-left-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("img", {
      src: "./static/assets/images/about-us/17.png",
      alt: "about-2",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }), __jsx("div", {
      class: "scroll-effect top blue ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      class: "main-video",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("div", {
      class: "video-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["WaveBox"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }))))), __jsx("div", {
      class: "col-lg-6 wow fadeInUp align-items-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 38
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
      className: "title-box wow fadeInUp text-left",
      title: "About Marketing Analytics",
      subTitle: "Faff about only a quid blower I don’t want no agro bleeding chimney pot burke tosser cras nice one boot fanny.!",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 39
      },
      __self: this
    }), __jsx("div", {
      class: "text-left column-2 mb-5 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }, __jsx("ul", {
      class: "iq-list",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 45
      },
      __self: this
    }, __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, __jsx("i", {
      class: "ion ion-checkmark-round",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 46
      },
      __self: this
    }, "Marketing Tracking")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, __jsx("i", {
      class: "ion ion-checkmark-round",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 47
      },
      __self: this
    }, "Services and Solutions")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, __jsx("i", {
      class: "ion ion-checkmark-round",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 48
      },
      __self: this
    }, "Predicting future")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, __jsx("i", {
      class: "ion ion-checkmark-round",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 49
      },
      __self: this
    }, "Reporting on the pas")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, __jsx("i", {
      class: "ion ion-checkmark-round",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 50
      },
      __self: this
    }, "Google Analytics")), __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, __jsx("i", {
      class: "ion ion-checkmark-round",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }), __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, "Analyzing the present")))), __jsx("div", {
      class: " text-left mt-5 ",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, __jsx("a", {
      class: "button button-icon",
      href: "about-us.html",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, " ", __jsx("span", {
      class: "btn-effect",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "View Details"), " ")))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/home-section/landing-page11/service/index.js":
/*!*****************************************************************!*\
  !*** ./components/home-section/landing-page11/service/index.js ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page11/service/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      cardData: [{
        images: './static/assets/images/testimonials/3.jpg',
        name: "Mark McManus",
        position: "COO",
        description: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” "
      }, {
        images: './static/assets/images/testimonials/2.jpg',
        name: "Jack White",
        position: "CEO",
        description: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” "
      }, {
        images: './static/assets/images/testimonials/3.jpg',
        name: "Jack McManus",
        position: "CTO",
        description: "“Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.” "
      }]
    };
  }

  render() {
    let {
      cardData
    } = this.state;
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["SectionStyle3"], {
      id: "our-service",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: this
    }, __jsx("div", {
      className: "col-sm-12 wow fadeInUp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 43
      },
      __self: this
    }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
      link: "OUR SERVICES",
      className: "title-box wow fadeInUp text-center",
      title: "What Our Clients Say",
      spanclass: "title-design",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 44
      },
      __self: this
    }))), __jsx("div", {
      className: "row",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 52
      },
      __self: this
    }, __jsx("div", {
      className: "col-md-12  wow fadeInUp",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("div", {
      className: "owl-carousel testimonial-style owl-loaded owl-drag",
      "data-dots": "true",
      "data-nav": "false",
      "data-autoplay": "false",
      "data-loop": "true",
      "data-items": "1",
      "data-items-laptop": "1",
      "data-items-tab": "1",
      "data-items-mobile": "1",
      "data-items-mobile-sm": "1",
      "data-margin": "30",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, cardData.map((card, index) => __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["CardStyle13"], {
      key: index,
      image: card.images,
      title: card.name,
      subTitle: card.position,
      description: card.description,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    })))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/Accordion/index.js":
/*!*********************************************!*\
  !*** ./components/xamin/Accordion/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/Accordion/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "iq-accordion-block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "active-faq clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "row align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-md-9 col-sm-12 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, " ", __jsx("a", {
    href: "javascript:void(0)",
    className: "accordion-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.title)), " "), __jsx("div", {
    className: "col-md-3 col-sm-12 text-center text-lg-right text-md-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, " ", __jsx("a", {
    className: "button",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "Apply Now"), " ")))), __jsx("div", {
    className: "accordion-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("div", {
    className: "row mt-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-6 mb-4 mb-lg-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("h4", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, props.subtitle), __jsx("ul", {
    className: "iq-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, "It is a long established fact that a reader will be distracted.")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }, "The point of using Lorem Ipsum is that.")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Many desktop publishing packages and web page.")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "There are many variations of passages.")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "All the Lorem Ipsum generators on the Internet.")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, " It uses a dictionary of over 200 Latin words.")))), __jsx("div", {
    className: "col-lg-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, __jsx("h4", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, props.subtitle2), __jsx("ul", {
    className: "iq-list",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, "Advance Advisory Team")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "Professional Consulting Services")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  }, "24/7 Support Help Center")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: undefined
  }, "Advance Advisory Team")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: undefined
  }, "Professional Consulting Services")), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "24/7 Support Help Center")))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/AdressSection/index.js":
/*!*************************************************!*\
  !*** ./components/xamin/AdressSection/index.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/AdressSection/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    className: props.class,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("i", {
    class: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("span", {
    class: "header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.heading), __jsx("span", {
    class: "content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, ":", props.text))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/BackgroundImage/index.js":
/*!***************************************************!*\
  !*** ./components/xamin/BackgroundImage/index.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/BackgroundImage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = prop => {
  return __jsx("div", {
    className: prop.className,
    style: {
      backgroundImage: `url(` + prop.bgImage + `)`
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: undefined
  }, prop.children);
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/Banner/BannerStyle1/index.js":
/*!*******************************************************!*\
  !*** ./components/xamin/Banner/BannerStyle1/index.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/Banner/BannerStyle1/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = props => {
  let items = props.breadcrumb;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "text-left iq-breadcrumb-one iq-bg-over black ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "row align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-8 col-md-8 text-left align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("nav", {
    "aria-label": "breadcrumb",
    className: "text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("h2", {
    className: "title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.title), __jsx("ol", {
    className: "breadcrumb main-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, items.map((item, index) => __jsx("li", {
    key: index,
    className: "breadcrumb-item " + (item.active ? "active" : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: item.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, item.title))))))), __jsx("div", {
    className: "col-lg-4 col-md-4 col-sm-12 text-right wow fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("img", {
    alt: "banner",
    className: "img-fluid float-right",
    src: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/Carousel/index.js":
/*!********************************************!*\
  !*** ./components/xamin/Carousel/index.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/Carousel/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "clients-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    alt: "#",
    className: props.imgClass,
    src: props.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/Carousel2/index.js":
/*!*********************************************!*\
  !*** ./components/xamin/Carousel2/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/Carousel2/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: props.mainClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: props.img,
    alt: "slider",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    class: "details-box clearfix",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    class: "consult-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.title), __jsx("p", {
    class: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.text)), props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/CheckBoxList/index.js":
/*!************************************************!*\
  !*** ./components/xamin/CheckBoxList/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/CheckBoxList/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  let list = props.items;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: props.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("ul", {
    className: "iq-list " + (props.className ? props.className : ''),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, list.map((item, index) => __jsx("li", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-check-square-o",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), " ", __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, item))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/ContactUs/index.js":
/*!*********************************************!*\
  !*** ./components/xamin/ContactUs/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/ContactUs/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, " ", __jsx("input", {
    type: "text",
    name: "your-name",
    className: "form-control text ",
    placeholder: "Your Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), " "), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, " ", __jsx("input", {
    type: "text",
    name: "your-email",
    className: "form-control text ",
    placeholder: "Your Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), " "), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, " ", __jsx("input", {
    type: "text",
    name: "your-subject",
    className: "form-control text ",
    placeholder: "Subject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), " "), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, " ", __jsx("textarea", {
    name: "your-message",
    cols: "40",
    rows: "10",
    className: "form-control textarea ",
    placeholder: "Your Message",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), " "), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, " ", __jsx("button", {
    id: "submit-4",
    name: "submit",
    type: "submit",
    value: "Send",
    className: "button d-block w-100",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, "Send Message"), " "));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/HeaderStyle/index.js":
/*!***********************************************!*\
  !*** ./components/xamin/HeaderStyle/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _constants_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants/menu */ "./constants/menu.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/HeaderStyle/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const jumpTo = href => {
  jquery__WEBPACK_IMPORTED_MODULE_2___default()('html, body').stop().animate({
    scrollTop: jquery__WEBPACK_IMPORTED_MODULE_2___default()(href).offset().top
  }, 1500);
};

const SingleMenu = props => {
  let activeMenuItem = '';

  if (typeof props.active == "object") {
    for (let i = 0; i < props.active.length; i++) {
      if (props.active[i] == props.href) {
        activeMenuItem = "current-menu-item";
        break;
      }
    }
  }

  if (props.hasOwnProperty('submenu')) {
    let submenu = [];

    for (let i = 0; i < props.submenu.length; i++) {
      if (props.submenu[i].submenu) {
        submenu.push(__jsx(SingleMenu, {
          active: props.active,
          href: props.submenu[i].href,
          key: i,
          title: props.submenu[i].title,
          submenu: props.submenu[i].submenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 26
          },
          __self: undefined
        }));
      } else {
        submenu.push(__jsx(SingleMenu, {
          active: props.active,
          href: props.submenu[i].href,
          key: i,
          title: props.submenu[i].title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 28
          },
          __self: undefined
        }));
      }
    }

    return __jsx("li", {
      className: "menu-item " + activeMenuItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: undefined
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: props.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }, __jsx("a", {
      className: "isubmenu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: undefined
    }, props.title)), __jsx("i", {
      className: "fa fa-angle-down toggledrop",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: undefined
    }), __jsx("ul", {
      className: "sub-menu",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: undefined
    }, submenu));
  } else {
    return __jsx("li", {
      className: "menu-item " + activeMenuItem,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: undefined
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: props.href,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 42
      },
      __self: undefined
    }, props.title)));
  }
};

class TopMenuBar extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let headMenu = this.props.headMenuItems;
    let menu = [];

    for (let i = 0; i < headMenu.length; i++) {
      if (headMenu[i].submenu) {
        menu.push(__jsx(SingleMenu, {
          active: this.props.active,
          href: headMenu[i].href,
          key: i,
          title: headMenu[i].title,
          submenu: headMenu[i].submenu,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 56
          },
          __self: this
        }));
      } else {
        menu.push(__jsx(SingleMenu, {
          active: this.props.active,
          href: headMenu[i].href,
          key: i,
          title: headMenu[i].title,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 58
          },
          __self: this
        }));
      }
    }

    return __jsx("ul", {
      id: "top-menu",
      className: "navbar-nav ml-auto",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 62
      },
      __self: this
    }, menu);
  }

}

const HeaderStyle1 = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("header", {
    id: "main-header",
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: undefined
  }, __jsx("div", {
    className: "container-fluid sub-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: undefined
  }, __jsx("div", {
    className: "number-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: undefined
  }, __jsx("ul", {
    className: "list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: undefined
  }, __jsx("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: undefined
  }, __jsx("a", {
    href: "mailto:support@iqnonicthemes.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }, " ", __jsx("i", {
    className: "fa fa-envelope",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: undefined
  }), "support@iqnonicthemes.com")), __jsx("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: undefined
  }, __jsx("a", {
    href: "tel:+0123456789",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }, " ", __jsx("i", {
    className: "fa fa-phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: undefined
  }), "+0123456789"))))), __jsx("div", {
    className: "col-auto ml-auto sub-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: undefined
  }, __jsx("div", {
    className: "social-icone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: undefined
  }, __jsx("ul", {
    className: "list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: undefined
  }, __jsx("li", {
    className: "d-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }, " ", __jsx("i", {
    className: "fa fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: undefined
  }), " ")), __jsx("li", {
    className: "d-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }, " ", __jsx("i", {
    className: "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: undefined
  }), " ")), __jsx("li", {
    className: "d-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }, " ", __jsx("i", {
    className: "fa fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: undefined
  }), " "))))))), __jsx("div", {
    className: "container-fluid main-header",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 103
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: undefined
  }, __jsx("nav", {
    className: "navbar navbar-expand-lg navbar-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: undefined
  }, __jsx("a", {
    className: "navbar-brand",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 108
    },
    __self: undefined
  }, __jsx("img", {
    className: "img-fluid logo",
    id: props.styledLogo !== undefined && props.styledLogo ? 'logo_img' : 'new_image',
    src: props.logoImg,
    alt: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: undefined
  })), __jsx("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarSupportedContent",
    "aria-controls": "navbarSupportedContent",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: undefined
  }, __jsx("span", {
    className: "ion-navicon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: undefined
  })), __jsx("div", {
    className: "collapse navbar-collapse",
    id: "navbarSupportedContent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: undefined
  }, __jsx("div", {
    className: "menu-main-menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: undefined
  }, __jsx(TopMenuBar, {
    active: props.activeMenu,
    headMenuItems: _constants_menu__WEBPACK_IMPORTED_MODULE_3__["topMenuBarItems"],
    __source: {
      fileName: _jsxFileName,
      lineNumber: 119
    },
    __self: undefined
  }))), __jsx("div", {
    className: "sub-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: undefined
  }, __jsx("nav", {
    "aria-label": "breadcrumb",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: undefined
  }, props.buttonSection))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderStyle1);

/***/ }),

/***/ "./components/xamin/Link/index.js":
/*!****************************************!*\
  !*** ./components/xamin/Link/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectWithoutProperties */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);


var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/Link/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;




const ActiveLink = (_ref) => {
  let {
    router,
    children
  } = _ref,
      props = Object(_babel_runtime_corejs2_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__["default"])(_ref, ["router", "children"]);

  const child = react__WEBPACK_IMPORTED_MODULE_4__["Children"].only(children);
  let className = child.props.className || null;

  if (router.pathname === props.href && props.activeClassName) {
    className = `${className !== null ? className : ''} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;
  return __jsx(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }), react__WEBPACK_IMPORTED_MODULE_4___default.a.cloneElement(child, {
    className
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Object(next_router__WEBPACK_IMPORTED_MODULE_2__["withRouter"])(ActiveLink));

/***/ }),

/***/ "./components/xamin/Loader/index.js":
/*!******************************************!*\
  !*** ./components/xamin/Loader/index.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/Loader/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = () => __jsx("div", {
  id: "loading",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  id: "loading-center",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("img", {
  src: "./static/assets/images/loader.gif",
  alt: "loader",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/MasonryItem/index.js":
/*!***********************************************!*\
  !*** ./components/xamin/MasonryItem/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _constants_masonry_items__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../constants/masonry-items */ "./constants/masonry-items.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/MasonryItem/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: _constants_masonry_items__WEBPACK_IMPORTED_MODULE_1__["MasonryItem"]
    };
  }

  render() {
    let items = this.state.items;
    items = items.filter(item => {
      if (this.props.filterdata == 'all') {
        return true;
      }

      return item.filterClass.includes(this.props.filterdata);
    });
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, items.map((itemData, index) => __jsx("div", {
      key: index,
      className: "iq-masonry-item item " + itemData.filterClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 24
      },
      __self: this
    }, __jsx("div", {
      className: "iq-portfolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("a", {
      href: itemData.link,
      className: "iq-portfolio-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx("img", {
      width: "1260",
      height: "954",
      src: itemData.image,
      className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    })), __jsx("div", {
      className: "iq-portfolio-content  text-center",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }, __jsx("div", {
      className: "details-box clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, __jsx("div", {
      className: "consult-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, __jsx("a", {
      href: itemData.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("h5", {
      className: "text-hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, itemData.title)), __jsx("p", {
      className: "mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, itemData.description))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/Pagination/index.js":
/*!**********************************************!*\
  !*** ./components/xamin/Pagination/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/Pagination/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-12 col-md-12 col-sm-12 wow fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "pagination justify-content-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("nav", {
    "aria-label": "Page navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("ul", {
    className: "page-numbers",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, " ", __jsx("span", {
    "aria-current": "page",
    className: "page-numbers current",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "1"), " "), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, " ", __jsx("a", {
    className: "page-numbers",
    href: "#?paged=2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "2"), " "), __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, " ", __jsx("a", {
    className: "next page-numbers",
    href: "#?paged=2'",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, " ", __jsx("span", {
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "Next page"), " "), " ")))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/Portfolio/index.js":
/*!*********************************************!*\
  !*** ./components/xamin/Portfolio/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _constants_portfolio_item__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../constants/portfolio-item */ "./constants/portfolio-item.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/Portfolio/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: _constants_portfolio_item__WEBPACK_IMPORTED_MODULE_2__["Item1"]
    };
  }

  render() {
    let items = this.state.items;
    items = items.filter(item => {
      if (this.props.filterdata == 'all') {
        return true;
      }

      return item.filterClass.includes(this.props.filterdata);
    });
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, items.map((itemData, index) => __jsx("div", {
      key: index,
      className: "iq-masonry-item item " + itemData.filterClass,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 25
      },
      __self: this
    }, __jsx("div", {
      className: "iq-portfolio",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 26
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: itemData.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 27
      },
      __self: this
    }, __jsx("a", {
      className: "iq-portfolio-img",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, __jsx("img", {
      width: "1260",
      height: "954",
      src: itemData.image,
      className: "attachment-post-thumbnail size-post-thumbnail wp-post-image",
      alt: "",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 29
      },
      __self: this
    }))), __jsx("div", {
      className: "iq-portfolio-content  text-left",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, __jsx("div", {
      className: "details-box clearfix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, __jsx("div", {
      className: "consult-details",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
      href: itemData.link,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }, __jsx("a", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, __jsx("h5", {
      className: "text-hover",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 37
      },
      __self: this
    }, itemData.title))), __jsx("p", {
      className: "desc mb-0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 40
      },
      __self: this
    }, itemData.description), __jsx("div", {
      class: "mb-0 portfolio-tag",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, __jsx("ul", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, " ", __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Html"), " ", __jsx("li", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 41
      },
      __self: this
    }, "Video"))))))))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/PricingCard1/index.js":
/*!************************************************!*\
  !*** ./components/xamin/PricingCard1/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/PricingCard1/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: "iq-pricing ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    class: "priceing-title ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.price, __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, "/Month")), __jsx("p", {
    class: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("div", {
    class: "priceing-description ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("h4", {
    class: "title mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.heading), __jsx("h5", {
    class: "subtitle mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, props.subheading), props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/ProgressBar/index.js":
/*!***********************************************!*\
  !*** ./components/xamin/ProgressBar/index.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/ProgressBar/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.heading), __jsx("span", {
    className: "progress-value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.percentage, "%"), __jsx("div", {
    className: "iq-progress-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("span", {
    className: "position-relative",
    "data-percent": props.percentage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, " "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/ProgressStyle2/index.js":
/*!**************************************************!*\
  !*** ./components/xamin/ProgressStyle2/index.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/ProgressStyle2/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "progress-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "progress-value",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.percentage, "%"), __jsx("div", {
    className: "progress-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "progress-main",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h6", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.heading)), __jsx("div", {
    className: "iq-progress-bar",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("span", {
    className: "position-relative",
    "data-percent": props.percentage,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/ReplyForm/index.js":
/*!*********************************************!*\
  !*** ./components/xamin/ReplyForm/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/ReplyForm/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "comments",
    className: "comments-area wow fadeInUp",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    id: "respond",
    className: "comment-respond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h3", {
    id: "reply-title",
    className: "comment-reply-title mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Leave a Reply ", __jsx("small", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    rel: "nofollow",
    id: "cancel-comment-reply-link",
    href: "index.html#respond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Cancel reply"))), __jsx("form", {
    action: "#",
    method: "post",
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "contact-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, "Comment"), __jsx("textarea", {
    name: "your-message",
    cols: "40",
    rows: "10",
    className: "form-control textarea ",
    placeholder: "Comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, "Your Name"), __jsx("input", {
    type: "text",
    name: "your-name",
    className: "form-control text ",
    placeholder: "Your Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, "Your Email"), __jsx("input", {
    type: "text",
    name: "your-email",
    className: "form-control text ",
    placeholder: "Your Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-lg-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("label", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, "Website"), __jsx("input", {
    type: "text",
    name: "your-website",
    className: "form-control text ",
    placeholder: "Website",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  })), __jsx("div", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, __jsx("input", {
    type: "submit",
    className: "btn btn-primary mb-4 mb-lg-0",
    value: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/RevolutionSlider/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/RevolutionSlider/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/RevolutionSlider/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render(props) {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
      className: "rs-p-wp-fix",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 14
      },
      __self: this
    }), __jsx("rs-module-wrap", {
      id: this.props.revId + '_wrapper',
      "data-alias": "xamin",
      "data-source": "gallery",
      style: {
        background: "transparent",
        padding: 0,
        margin: "0px auto",
        marginTop: 0,
        marginBottom: 0
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, __jsx("rs-module", {
      id: this.props.revId,
      className: " rs-ov-hidden" // style={{display:"none"}}
      ,
      "data-version": "6.1.0",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }, __jsx("rs-slides", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 28
      },
      __self: this
    }, this.props.children), __jsx("rs-static-layers", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }), __jsx("rs-progress", {
      className: "rs-bottom",
      style: {
        visibility: "hidden !important"
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/ScrollTop/index.js":
/*!*********************************************!*\
  !*** ./components/xamin/ScrollTop/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/ScrollTop/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const scrollTop = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('body,html').animate({
    scrollTop: 0
  }, 800);
};

const Index = () => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "back-to-top",
    style: {
      display: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    className: "top",
    id: "top",
    href: "#",
    onClick: scrollTop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, " ", __jsx("i", {
    className: "fa fa-chevron-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/SearchForm/index.js":
/*!**********************************************!*\
  !*** ./components/xamin/SearchForm/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/SearchForm/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "search-2",
    className: "widget widget_search wow fadeInRight",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("form", {
    method: "get",
    className: "search-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("label", {
    for: "search-form-5de637b4605ec",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, " "), __jsx("input", {
    type: "search",
    id: "search-form-5de637b4605ec",
    class: props.className,
    placeholder: "Search",
    value: "",
    name: "s",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("button", {
    type: "submit",
    className: "search-submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-search",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), " "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/SocialIcon/index.js":
/*!**********************************************!*\
  !*** ./components/xamin/SocialIcon/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/SocialIcon/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "contact-box d-flex",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("i", {
    "aria-hidden": "true",
    className: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }), __jsx("div", {
    className: "service-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h4", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.title), props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/SubScriber/index.js":
/*!**********************************************!*\
  !*** ./components/xamin/SubScriber/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/SubScriber/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: "row algin-self-center footer_top_block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    class: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("h4", {
    class: "footer-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, "Subscribe for Newsletter")), __jsx("div", {
    class: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    class: "mc4wp-form-fields",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("input", {
    type: "email",
    name: "EMAIL",
    placeholder: "Your Email",
    required: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("input", {
    type: "submit",
    value: "Sign up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/TabContent/index.js":
/*!**********************************************!*\
  !*** ./components/xamin/TabContent/index.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/TabContent/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.text), __jsx("div", {
    class: " text-left  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    class: "button button-icon",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("span", {
    class: "btn-effect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, " ", props.buttonname))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/TabStyle/index.js":
/*!********************************************!*\
  !*** ./components/xamin/TabStyle/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./components/xamin/TestimonialCards/CardStyle1/index.js":
/*!***************************************************************!*\
  !*** ./components/xamin/TestimonialCards/CardStyle1/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/TestimonialCards/CardStyle1/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "iq-team",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "iq-team-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    src: props.image,
    className: "img-fluid",
    alt: "#1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("div", {
    className: "iq-share",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    className: "slideouticons",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("label", {
    className: "mainlabel",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-share-alt",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  })), __jsx("div", {
    className: "iconswrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, props.share.map((item, index) => __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: item.link,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("i", {
    className: item.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }))))))))), __jsx("div", {
    className: "iq-team-info text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, " ", __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, props.title), " "), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, props.subtitle))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/WaveBox/index.js":
/*!*******************************************!*\
  !*** ./components/xamin/WaveBox/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/WaveBox/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "consult-video video-btn",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, __jsx("div", {
    className: "btn-waves",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "waves wave-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    className: "waves wave-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("div", {
    className: "waves wave-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("a", {
    href: "http://www.youtube.com/watch?v=0O2aH4XLbto",
    className: "iq-video popup-youtube",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-play",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/about/AboutStyle/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/about/AboutStyle/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/about/AboutStyle/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "row iq-how-it-works",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "fadeInUp col-sm-12 col-lg-6 col-md-6 wow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("img", {
    alt: "",
    className: "single_image-img attachment-full",
    height: "954",
    src: props.img,
    width: "1260",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  })), props.children))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/about/AboutStyle2/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/about/AboutStyle2/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/about/AboutStyle2/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "row row-fluid row-has-fill iq-how-it-works",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "iq-mb-30 fadeInUp wow col-sm-12 col-lg-5 col-md-12 align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    link: "About us",
    title: "Human Behaviour, Data Science",
    subTitle: "It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout. ",
    className: "title-box wow fadeInUp text-left",
    spanclass: "title-design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("div", {
    className: "services-content wow fadeInUp progress-style text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["ProgressBarStyle2"], {
    percentage: "50",
    heading: "Big Data Services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }), __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["ProgressBarStyle2"], {
    percentage: "90",
    heading: "Big Data Services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx(_xamin__WEBPACK_IMPORTED_MODULE_1__["ProgressBarStyle2"], {
    percentage: "60",
    heading: "Big Data Services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }))), props.children))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle1/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle1/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle1/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: props.imgClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: props.media,
    alt: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })), __jsx("h5", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.title), __jsx("p", {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle10/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/cards/CardStyle10/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle10/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "testimonial-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.desc), __jsx("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    alt: "#",
    className: "img-fluid rounded-circle",
    src: props.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    className: "testimonial-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.name), __jsx("span", {
    className: "sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.position)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle11/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/cards/CardStyle11/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle11/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("li", {
    class: props.liClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.link), __jsx("span", {
    class: props.spanClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, " ", props.count, " "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle12/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/cards/CardStyle12/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle12/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "col-sm-4",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "consult-services wow fadeInUp contact-detail text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "circle-effect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, " ", __jsx("i", {
    "aria-hidden": "true",
    className: "fa fa-map-marker",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), " "), __jsx("h4", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.location), __jsx("p", {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.text))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle13/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/cards/CardStyle13/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle13/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "item text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "iq-testimonial",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "testimonial-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    alt: "#",
    className: "img-fluid rounded-circle",
    src: props.image,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    className: "testimonial-name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.title), __jsx("span", {
    className: "sub-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.subTitle))), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, props.description, " "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle14/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/cards/CardStyle14/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle14/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "col-md-6",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: props.mainClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("i", {
    "aria-hidden": "true",
    className: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("div", {
    className: "service-detail align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("h4", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.desc)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle15/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/cards/CardStyle15/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle15/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: "col-lg-4 col-md-6 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    class: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    class: "service-box-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    src: props.images,
    alt: "fancybox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("div", {
    class: "service-box-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("h4", {
    class: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.name), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, props.description)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle16/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/cards/CardStyle16/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle16/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: "col-lg col-md-6 ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    class: "fancybox-userbehavior wow fadeInUp  text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("h6", {
    class: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.title), __jsx("div", {
    class: "analytics-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, " ", __jsx("i", {
    "aria-hidden": "true",
    class: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), " "))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle17/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/cards/CardStyle17/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle17/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: "fancy_service wow fadeInUp  text-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    class: "hover-effect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), __jsx("div", {
    class: "fancy-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("img", {
    src: props.img,
    alt: "fancybox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }), __jsx("h4", {
    class: "mt-4 mb-3 title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.title), __jsx("p", {
    class: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.text), __jsx("a", {
    class: "link-btn",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("span", {
    class: "btn-effect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, " Read More", __jsx("i", {
    class: "fa fa-angle-right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle18/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/cards/CardStyle18/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle18/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: "fancy_service style2 wow fadeInUp  text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    class: "bg_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    class: "bg_img-img",
    src: "./static/assets/images/fancybox/bg-7-2.png",
    alt: "fancybox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  })), __jsx("div", {
    class: "fancy_block",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("div", {
    class: "fancy-info",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("h4", {
    class: "mt-4 mb-3 title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, props.title), __jsx("p", {
    class: "text-dark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, props.text), __jsx("a", {
    class: "button blue-btn",
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("span", {
    class: "btn-effect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, " Find Out More"))), __jsx("div", {
    class: "fancy_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("img", {
    src: props.fancy_img,
    alt: "fancybox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle19/index.js":
/*!*****************************************************!*\
  !*** ./components/xamin/cards/CardStyle19/index.js ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle19/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: "consult-services  xamin-square wow fadeInUp  text-left" + props.mainClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.mainClass ? __jsx("div", {
    class: "arrow_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    class: "arrow-img",
    src: "./static/assets/images/fancybox/arrow-7.png",
    alt: "fancybox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })) : '', __jsx("div", {
    class: "square-effect bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("img", {
    src: props.img,
    alt: "fancybox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }), __jsx("div", {
    class: "arrowbg_img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("img", {
    src: "./static/assets/images/fancybox/bg-7-1.png",
    alt: "fancybox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }))), __jsx("h5", {
    class: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, props.title), __jsx("p", {
    class: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, props.text)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle2/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle2/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle2/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "service-box d-inherit p-4 my-3 wow fadeInUp text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: props.media,
    className: "fancy-list-img",
    alt: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    className: "service-detail align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle3/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle3/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle3/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: props.mainClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    class: "iq-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: props.img,
    alt: "fancybox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })), __jsx("div", {
    class: "timer-details ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle4/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle4/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle4/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "xamin-services  mb-0 wow fadeInUp text-" + props.textClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "services-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.icon ? __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, " ", __jsx("i", {
    "aria-hidden": "true",
    className: props.icon,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }), " ") : '', props.image ? __jsx("img", {
    src: props.image,
    alt: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }) : '', props.titleTag == 'h5' ? __jsx("h5", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.title) : __jsx("h4", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.title), __jsx("p", {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle5/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle5/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle5/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "xamin-history row row-eq-height align-items-center wow fadeInUp ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-sm-4 col-lg-2 col-md-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    alt: "",
    className: "attachment-full",
    height: "360",
    src: props.image,
    width: "550",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })), __jsx("div", {
    className: "text-lg-center text-left col-sm-12 col-lg-2 col-md-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h4", {
    className: "pt-3 pb-1 pt-lg-0 pb-lg-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.title)), __jsx("div", {
    className: "col-sm-12 col-lg-8 col-md-7",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("p", {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, props.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle6/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle6/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle6/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "service-box d-inherit p-4 my-3 wow fadeInUp text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: props.image,
    alt: "fancybox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    className: "service-detail align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h4", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.title)), __jsx("div", {
    className: "mb-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.description)), props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle7/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle7/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle7/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: props.colClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: props.mainclass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "iq-blog-box " + props.blogBoxClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "iq-blog-image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("img", {
    alt: "#",
    src: props.img,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }), __jsx("ul", {
    className: "iq-blogtag",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.linkname)))), __jsx("div", {
    className: "iq-blog-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: undefined
  }, __jsx("div", {
    className: "iq-blog-meta",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, " ", __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("time", {
    className: "entry-date published updated",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, props.time))))), __jsx("div", {
    className: "blog-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("h4", {
    className: "entry-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, props.title))), __jsx("div", {
    className: "blog-content",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, props.desc), props.children), __jsx("div", {
    className: "blog-button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("a", {
    className: "button-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Read More", __jsx("i", {
    className: "fa fa-angle-right",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  })))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle8/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle8/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle8/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "service-box p-4 my-4 wow fadeInUp " + (props.className ? props.className : 'text-center text-md-left '),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    src: props.image,
    alt: "fancybox",
    width: "550",
    height: "360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("div", {
    className: "service-detail align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("h5", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, props.description), props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle9/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle9/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle9/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "post-img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("img", {
    width: "150",
    height: "150",
    src: props.img,
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }), __jsx("div", {
    className: "post-blog",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("div", {
    className: "blog-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("ul", {
    className: "list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, __jsx("li", {
    className: "list-inline-item  mr-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, " ", __jsx("i", {
    class: "fa fa-calendar mr-2",
    "aria-hidden": "true",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }), props.time)), " ")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/blog-details",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("a", {
    className: "new-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, __jsx("h5", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, props.title))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/PartnerCardStyle/index.js":
/*!**********************************************************!*\
  !*** ./components/xamin/cards/PartnerCardStyle/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/PartnerCardStyle/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    class: props.mainClass + " wow fadeInUp",
    style: {
      visibility: "visible",
      animationName: "fadeInUp"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    class: props.imgClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("img", {
    src: props.img,
    alt: "fancybox",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  })), __jsx("div", {
    class: props.detailClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("h6", {
    class: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.heading), __jsx("p", {
    class: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.text))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/footerComponents/FooterAddress/index.js":
/*!******************************************************************!*\
  !*** ./components/xamin/footerComponents/FooterAddress/index.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/footerComponents/FooterAddress/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const List = props => {
  const list = props.list;
  const listing = list.map((item, index) => __jsx("li", {
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("a", {
    href: "tel:+0123456789",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("i", {
    className: item.iconClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }), __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, item.text))));
  return __jsx("ul", {
    className: props.addressClass + ' iq-contact',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, " ", listing, " ");
};

const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "contact-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, __jsx("h4", {
    className: "footer-title iq-rmt-30",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  }, props.addressTitle), __jsx(List, {
    addressClass: props.addressClass,
    list: props.addressContent,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/footerComponents/FooterLinks/index.js":
/*!****************************************************************!*\
  !*** ./components/xamin/footerComponents/FooterLinks/index.js ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/footerComponents/FooterLinks/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const MainList = props => {
  const content = props.content;
  return content.map((item, index) => __jsx("div", {
    key: index,
    className: "menu-footer-menu-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx(List, {
    section: item.section,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  })));
};

const List = props => {
  const content = props.section;
  const list = content.map((list, index) => __jsx("li", {
    className: "menu-item",
    key: index,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, __jsx("a", {
    href: list.href,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  }, list.title)));
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("ul", {
    className: "menu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, list));
};

const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("h4", {
    className: "footer-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: undefined
  }, props.title), __jsx(MainList, {
    content: props.content,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/footerComponents/FooterLogo/index.js":
/*!***************************************************************!*\
  !*** ./components/xamin/footerComponents/FooterLogo/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/footerComponents/FooterLogo/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("p", {
    className: "footer-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("img", {
    alt: "img",
    src: props.sectionImage,
    width: "160",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  })), __jsx("p", {
    className: "footer-logo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.sectionText), __jsx("ul", {
    className: "info-share d-inline list-inline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-facebook-f",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }))), __jsx("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-twitter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }))), __jsx("li", {
    className: "list-inline-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("a", {
    href: "#",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, __jsx("i", {
    className: "fa fa-instagram",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/index.js":
/*!***********************************!*\
  !*** ./components/xamin/index.js ***!
  \***********************************/
/*! exports provided: Loader, Link, HeaderStyle, ProgressBar, ProgressBarStyle2, Pagination, SearchForm, ReplyForm, ContactUs, SocialIcon, WaveBox, Carousel, Carousel2, Accordion, TabStyle, SubScriber, CheckboxList, SectionLeftImage, SectionRightImage, SectionStyle1, SectionStyle3, SectionTitle, CardStyle1, CardStyle2, CardStyle3, CardStyle4, CardStyle5, CardStyle6, CardStyle7, CardStyle8, CardStyle9, CardStyle10, CardStyle11, CardStyle13, CardStyle12, CardStyle14, CardStyle15, CardStyle16, CardStyle17, CardStyle18, CardStyle19, PricingCard1, AdressSection, TestimonialStyle1, PartnerCardStyle, TabContent, BackgroundImage, BannerStyle1, PortfolioItem, MasonryItem, FooterMain, FooterLogo, FooterAddress, FooterLinks, ScrollTop, RevSlider, AboutStyle, AboutStyle2, ProgressStyle2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader */ "./components/xamin/Loader/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Loader", function() { return _Loader__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _Link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Link */ "./components/xamin/Link/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Link", function() { return _Link__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _HeaderStyle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./HeaderStyle */ "./components/xamin/HeaderStyle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "HeaderStyle", function() { return _HeaderStyle__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _ProgressBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ProgressBar */ "./components/xamin/ProgressBar/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return _ProgressBar__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _ProgressStyle2__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ProgressStyle2 */ "./components/xamin/ProgressStyle2/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressBarStyle2", function() { return _ProgressStyle2__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _Pagination__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Pagination */ "./components/xamin/Pagination/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return _Pagination__WEBPACK_IMPORTED_MODULE_5__["default"]; });

/* harmony import */ var _SearchForm__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchForm */ "./components/xamin/SearchForm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SearchForm", function() { return _SearchForm__WEBPACK_IMPORTED_MODULE_6__["default"]; });

/* harmony import */ var _CheckBoxList__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./CheckBoxList */ "./components/xamin/CheckBoxList/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CheckboxList", function() { return _CheckBoxList__WEBPACK_IMPORTED_MODULE_7__["default"]; });

/* harmony import */ var _sections_SectionLeftImage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sections/SectionLeftImage */ "./components/xamin/sections/SectionLeftImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionLeftImage", function() { return _sections_SectionLeftImage__WEBPACK_IMPORTED_MODULE_8__["default"]; });

/* harmony import */ var _sections_SectionRightImage__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./sections/SectionRightImage */ "./components/xamin/sections/SectionRightImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionRightImage", function() { return _sections_SectionRightImage__WEBPACK_IMPORTED_MODULE_9__["default"]; });

/* harmony import */ var _sections_SectionStyle1__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/SectionStyle1 */ "./components/xamin/sections/SectionStyle1/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionStyle1", function() { return _sections_SectionStyle1__WEBPACK_IMPORTED_MODULE_10__["default"]; });

/* harmony import */ var _sections_SectionStyle3__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sections/SectionStyle3 */ "./components/xamin/sections/SectionStyle3/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionStyle3", function() { return _sections_SectionStyle3__WEBPACK_IMPORTED_MODULE_11__["default"]; });

/* harmony import */ var _sections_SectionTitle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./sections/SectionTitle */ "./components/xamin/sections/SectionTitle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SectionTitle", function() { return _sections_SectionTitle__WEBPACK_IMPORTED_MODULE_12__["default"]; });

/* harmony import */ var _about_AboutStyle__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./about/AboutStyle */ "./components/xamin/about/AboutStyle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutStyle", function() { return _about_AboutStyle__WEBPACK_IMPORTED_MODULE_13__["default"]; });

/* harmony import */ var _about_AboutStyle2__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./about/AboutStyle2 */ "./components/xamin/about/AboutStyle2/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AboutStyle2", function() { return _about_AboutStyle2__WEBPACK_IMPORTED_MODULE_14__["default"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ProgressStyle2", function() { return _ProgressStyle2__WEBPACK_IMPORTED_MODULE_4__["default"]; });

/* harmony import */ var _xamin_Banner_BannerStyle1__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../xamin/Banner/BannerStyle1 */ "./components/xamin/Banner/BannerStyle1/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BannerStyle1", function() { return _xamin_Banner_BannerStyle1__WEBPACK_IMPORTED_MODULE_15__["default"]; });

/* harmony import */ var _cards_CardStyle1__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cards/CardStyle1 */ "./components/xamin/cards/CardStyle1/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle1", function() { return _cards_CardStyle1__WEBPACK_IMPORTED_MODULE_16__["default"]; });

/* harmony import */ var _cards_CardStyle2__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./cards/CardStyle2 */ "./components/xamin/cards/CardStyle2/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle2", function() { return _cards_CardStyle2__WEBPACK_IMPORTED_MODULE_17__["default"]; });

/* harmony import */ var _cards_CardStyle3__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cards/CardStyle3 */ "./components/xamin/cards/CardStyle3/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle3", function() { return _cards_CardStyle3__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _cards_CardStyle4__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cards/CardStyle4 */ "./components/xamin/cards/CardStyle4/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle4", function() { return _cards_CardStyle4__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _cards_CardStyle5__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cards/CardStyle5 */ "./components/xamin/cards/CardStyle5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle5", function() { return _cards_CardStyle5__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _cards_CardStyle6__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cards/CardStyle6 */ "./components/xamin/cards/CardStyle6/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle6", function() { return _cards_CardStyle6__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _cards_CardStyle7__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cards/CardStyle7 */ "./components/xamin/cards/CardStyle7/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle7", function() { return _cards_CardStyle7__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _cards_CardStyle8__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cards/CardStyle8 */ "./components/xamin/cards/CardStyle8/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle8", function() { return _cards_CardStyle8__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _cards_CardStyle9__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cards/CardStyle9 */ "./components/xamin/cards/CardStyle9/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle9", function() { return _cards_CardStyle9__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _cards_CardStyle10__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cards/CardStyle10 */ "./components/xamin/cards/CardStyle10/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle10", function() { return _cards_CardStyle10__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _cards_CardStyle11__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cards/CardStyle11 */ "./components/xamin/cards/CardStyle11/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle11", function() { return _cards_CardStyle11__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _cards_CardStyle13__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cards/CardStyle13 */ "./components/xamin/cards/CardStyle13/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle13", function() { return _cards_CardStyle13__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _cards_CardStyle12__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./cards/CardStyle12 */ "./components/xamin/cards/CardStyle12/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle12", function() { return _cards_CardStyle12__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _cards_CardStyle14__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./cards/CardStyle14 */ "./components/xamin/cards/CardStyle14/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle14", function() { return _cards_CardStyle14__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _cards_CardStyle15__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./cards/CardStyle15 */ "./components/xamin/cards/CardStyle15/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle15", function() { return _cards_CardStyle15__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _cards_CardStyle16__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./cards/CardStyle16 */ "./components/xamin/cards/CardStyle16/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle16", function() { return _cards_CardStyle16__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _cards_CardStyle17__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cards/CardStyle17 */ "./components/xamin/cards/CardStyle17/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle17", function() { return _cards_CardStyle17__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _cards_CardStyle18__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./cards/CardStyle18 */ "./components/xamin/cards/CardStyle18/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle18", function() { return _cards_CardStyle18__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _cards_CardStyle19__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./cards/CardStyle19 */ "./components/xamin/cards/CardStyle19/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle19", function() { return _cards_CardStyle19__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _cards_PartnerCardStyle__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./cards/PartnerCardStyle */ "./components/xamin/cards/PartnerCardStyle/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PartnerCardStyle", function() { return _cards_PartnerCardStyle__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _TestimonialCards_CardStyle1__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./TestimonialCards/CardStyle1 */ "./components/xamin/TestimonialCards/CardStyle1/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestimonialStyle1", function() { return _TestimonialCards_CardStyle1__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./Portfolio */ "./components/xamin/Portfolio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortfolioItem", function() { return _Portfolio__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _MasonryItem__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ./MasonryItem */ "./components/xamin/MasonryItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasonryItem", function() { return _MasonryItem__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _ReplyForm__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./ReplyForm */ "./components/xamin/ReplyForm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplyForm", function() { return _ReplyForm__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _ScrollTop__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./ScrollTop */ "./components/xamin/ScrollTop/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollTop", function() { return _ScrollTop__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _ContactUs__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./ContactUs */ "./components/xamin/ContactUs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return _ContactUs__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _TabStyle__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./TabStyle */ "./components/xamin/TabStyle/index.js");
/* harmony import */ var _TabStyle__WEBPACK_IMPORTED_MODULE_42___default = /*#__PURE__*/__webpack_require__.n(_TabStyle__WEBPACK_IMPORTED_MODULE_42__);
/* harmony reexport (default from non-harmony) */ __webpack_require__.d(__webpack_exports__, "TabStyle", function() { return _TabStyle__WEBPACK_IMPORTED_MODULE_42___default.a; });
/* harmony import */ var _TabContent__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! ./TabContent */ "./components/xamin/TabContent/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return _TabContent__WEBPACK_IMPORTED_MODULE_43__["default"]; });

/* harmony import */ var _BackgroundImage__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(/*! ./BackgroundImage */ "./components/xamin/BackgroundImage/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "BackgroundImage", function() { return _BackgroundImage__WEBPACK_IMPORTED_MODULE_44__["default"]; });

/* harmony import */ var _RevolutionSlider__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(/*! ./RevolutionSlider */ "./components/xamin/RevolutionSlider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RevSlider", function() { return _RevolutionSlider__WEBPACK_IMPORTED_MODULE_45__["default"]; });

/* harmony import */ var _xamin_partials_footers_FooterMain__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(/*! ../xamin/partials/footers/FooterMain */ "./components/xamin/partials/footers/FooterMain/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterMain", function() { return _xamin_partials_footers_FooterMain__WEBPACK_IMPORTED_MODULE_46__["default"]; });

/* harmony import */ var _xamin_footerComponents_FooterLogo__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(/*! ../xamin/footerComponents/FooterLogo */ "./components/xamin/footerComponents/FooterLogo/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterLogo", function() { return _xamin_footerComponents_FooterLogo__WEBPACK_IMPORTED_MODULE_47__["default"]; });

/* harmony import */ var _xamin_footerComponents_FooterAddress__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(/*! ../xamin/footerComponents/FooterAddress */ "./components/xamin/footerComponents/FooterAddress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterAddress", function() { return _xamin_footerComponents_FooterAddress__WEBPACK_IMPORTED_MODULE_48__["default"]; });

/* harmony import */ var _xamin_footerComponents_FooterLinks__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(/*! ../xamin/footerComponents/FooterLinks */ "./components/xamin/footerComponents/FooterLinks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterLinks", function() { return _xamin_footerComponents_FooterLinks__WEBPACK_IMPORTED_MODULE_49__["default"]; });

/* harmony import */ var _SocialIcon__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(/*! ./SocialIcon */ "./components/xamin/SocialIcon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialIcon", function() { return _SocialIcon__WEBPACK_IMPORTED_MODULE_50__["default"]; });

/* harmony import */ var _WaveBox__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(/*! ./WaveBox */ "./components/xamin/WaveBox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaveBox", function() { return _WaveBox__WEBPACK_IMPORTED_MODULE_51__["default"]; });

/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(/*! ./Carousel */ "./components/xamin/Carousel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _Carousel__WEBPACK_IMPORTED_MODULE_52__["default"]; });

/* harmony import */ var _Carousel2__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(/*! ./Carousel2 */ "./components/xamin/Carousel2/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel2", function() { return _Carousel2__WEBPACK_IMPORTED_MODULE_53__["default"]; });

/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(/*! ./Accordion */ "./components/xamin/Accordion/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _Accordion__WEBPACK_IMPORTED_MODULE_54__["default"]; });

/* harmony import */ var _PricingCard1__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(/*! ./PricingCard1 */ "./components/xamin/PricingCard1/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PricingCard1", function() { return _PricingCard1__WEBPACK_IMPORTED_MODULE_55__["default"]; });

/* harmony import */ var _SubScriber__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(/*! ./SubScriber */ "./components/xamin/SubScriber/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SubScriber", function() { return _SubScriber__WEBPACK_IMPORTED_MODULE_56__["default"]; });

/* harmony import */ var _AdressSection__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(/*! ./AdressSection */ "./components/xamin/AdressSection/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "AdressSection", function() { return _AdressSection__WEBPACK_IMPORTED_MODULE_57__["default"]; });

// Import All sofbox component here...

 // Helper components for the Header or Navigation...





 // CheckBoxList

 //Sections component








 //Banner Style

 //Card Section




















 // Testimonial Card Styles

 // Portfolio







 //BackgroundImage

 // Revolution Slider

 //Address















/***/ }),

/***/ "./components/xamin/partials/footers/FooterMain/index.js":
/*!***************************************************************!*\
  !*** ./components/xamin/partials/footers/FooterMain/index.js ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/partials/footers/FooterMain/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("footer", {
    id: "contact",
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/sections/SectionLeftImage/index.js":
/*!*************************************************************!*\
  !*** ./components/xamin/sections/SectionLeftImage/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./components/xamin/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/sections/SectionLeftImage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: props.sectionClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "row ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, props.mainTitle || props.mainSubTitle || props.mainDescription ? __jsx("div", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx(_index__WEBPACK_IMPORTED_MODULE_1__["SectionTitle"], {
    className: "title-box wow fadeInUp text-center",
    spanclass: "title-design",
    link: props.mainTitle,
    title: props.mainSubTitle,
    subTitle: props.mainDescription,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  })) : '', __jsx("div", {
    className: "fadeInUp col-sm-12 col-lg-6 col-md-6 wow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, __jsx("img", {
    alt: "",
    className: "single_image-img attachment-full",
    height: "954",
    src: props.image,
    width: "1260",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  })), __jsx("div", {
    className: "iq-mb-30 fadeInUp col-sm-12 col-lg-6 col-md-6 wow align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, props.title || props.subTitle || props.description ? __jsx("div", {
    className: "title-box wow fadeInUp text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, __jsx("span", {
    className: "title-design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, props.title), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, props.subTitle), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, props.description)) : '', props.children)))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/sections/SectionRightImage/index.js":
/*!**************************************************************!*\
  !*** ./components/xamin/sections/SectionRightImage/index.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/sections/SectionRightImage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    id: "how-it-works",
    className: props.class,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "row iq-how-it-works",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, __jsx("div", {
    className: "col-lg-6 col-md-12 mb-0 fadeInUp wow align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: undefined
  }, __jsx("div", {
    className: "title-box wow fadeInUp text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, __jsx("span", {
    className: "title-design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, props.title), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, props.subTitle), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, props.description)), props.children), __jsx("div", {
    className: "fadeInUp col-lg-6  col-md-12  ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    },
    __self: undefined
  }, __jsx("img", {
    width: "1260",
    height: "954",
    src: props.image,
    className: "single_image-img attachment-full",
    alt: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/sections/SectionStyle1/index.js":
/*!**********************************************************!*\
  !*** ./components/xamin/sections/SectionStyle1/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/sections/SectionStyle1/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "position-relative " + props.className,
    id: "how-it-works",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, __jsx("div", {
    className: "row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.children))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/sections/SectionStyle3/index.js":
/*!**********************************************************!*\
  !*** ./components/xamin/sections/SectionStyle3/index.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/sections/SectionStyle3/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: "xamin-custom-bg",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.children)));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/sections/SectionTitle/index.js":
/*!*********************************************************!*\
  !*** ./components/xamin/sections/SectionTitle/index.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/sections/SectionTitle/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const Index = props => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: undefined
  }, props.link ? __jsx("span", {
    className: props.spanclass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: undefined
  }, props.link) : '', __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: undefined
  }, props.title), props.subTitle ? __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: undefined
  }, props.subTitle) : '', props.img ? __jsx("img", {
    src: props.img,
    width: "600",
    height: "360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }) : ''));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./config/plugins.js":
/*!***************************!*\
  !*** ./config/plugins.js ***!
  \***************************/
/*! exports provided: index */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "index", function() { return index; });
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/parse-int */ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


let WOW;

if (false) {}

const index = () => {
  loaderInit();
  stickyHeader();
  toggleDropdown();
  pillTab();
  backToTop();
  initJarallex();
  accordion();
  wowInit();
  magnific();
  counterJs();
  progressBar();
  owlCarousalInit();
  initRevSlider();
  isotope();
  chartInit();
  chart();
  bigdataserviceChart();
  dataScienceChart();
  dataVisualizationChart();
  artificialIntelligenceChart();
}; // Function for the sticky header...


const stickyHeader = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('scroll', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).scrollTop() > 100) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('header').addClass('menu-sticky');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('header').removeClass('menu-sticky');
    }
  });
};

const wowInit = () => {
  const elementExist = checkElement('class', 'wow');

  if (elementExist) {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      live: false
    }).init();
  }
}; // Function for the Loader...


const loaderInit = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#load').fadeOut();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading').delay(1000).fadeOut('slow');
};

const initJarallex = () => {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
  });
}; // Function for toggle dropdown...


const toggleDropdown = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()("#main-header .menu-item .toggledrop").off("click");

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width() < 992) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('#main-header .menu-item .toggledrop').on('click', function (e) {
      e.preventDefault();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('li').find('.sub-menu').toggle('d-block');
    });
  }

  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('resize', function () {
    "use strict";

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.widget .fa.fa-angle-down, #main .fa.fa-angle-down').on('click', function () {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('li').find('.sub-menu').toggle('d-block');
    });
    jquery__WEBPACK_IMPORTED_MODULE_1___default()("#main-header .menu-item .toggledrop").off("click");

    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).width() < 992) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#main-header .menu-item .toggledrop').on('click', function (e) {
        e.preventDefault();
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).closest('li').find('.sub-menu').toggle('d-block');
      });
    }
  });
};

const owlCarousalInit = () => {
  const elementExist = checkElement('class', 'owl-carousel');

  if (elementExist) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.owl-carousel').each(function () {
      const $carousel = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
      $carousel.owlCarousel({
        items: $carousel.data('items'),
        loop: $carousel.data('loop'),
        margin: $carousel.data('margin'),
        nav: $carousel.data('nav'),
        dots: $carousel.data('dots'),
        autoplay: $carousel.data('autoplay'),
        autoplayTimeout: $carousel.data('autoplay-timeout'),
        navText: ['<i class="fa fa-angle-left fa-2x" />', '<i class="fa fa-angle-right fa-2x" />'],
        responsiveClass: true,
        responsive: {
          // breakpoint from 0 up
          0: {
            items: $carousel.data('items-mobile-sm')
          },
          // breakpoint from 480 up
          480: {
            items: $carousel.data('items-mobile')
          },
          // breakpoint from 786 up
          786: {
            items: $carousel.data('items-tab')
          },
          // breakpoint from 1023 up
          1023: {
            items: $carousel.data('items-laptop')
          },
          1199: {
            items: $carousel.data('items')
          }
        }
      });
    });
  }
};

const backToTop = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#back-to-top').fadeOut();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on("scroll", function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).scrollTop() > 250) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#back-to-top').fadeIn(1400);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#back-to-top').fadeOut(400);
    }
  });
};

const accordion = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iq-accordion .iq-accordion-block .accordion-details').hide();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iq-accordion .iq-accordion-block:first').addClass('accordion-active').children().slideDown('slow');
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iq-accordion .iq-accordion-block').on('click', function (e) {
    e.preventDefault();

    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).children('div.accordion-details').is(':hidden')) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iq-accordion .iq-accordion-block').removeClass('accordion-active').children('div.accordion-details ').slideUp('slow');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).toggleClass('accordion-active').children('div.accordion-details').slideDown('slow');
    }
  });
};

const checkElement = (type, element) => {
  let found = false;
  let elements;

  switch (type) {
    case 'class':
      elements = document.getElementsByClassName(element);

      if (elements !== undefined && elements !== null && elements.length > 0) {
        found = true;
      }

      break;

    case 'id':
      elements = document.getElementById(element);

      if (elements !== undefined && elements !== null) {
        found = true;
      }

      break;
  }

  return found;
};

const progressBar = () => {
  const elementExist = checkElement('class', 'iq-progress-bar');

  if (elementExist) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iq-progress-bar > span').each(function () {
      var $this = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
      var width = $this.data('percent');
      $this.css({
        'transition': 'width 2s'
      });
      setTimeout(function () {
        $this.appear(function () {
          $this.css('width', width + '%');
        });
      }, 500);
    });
  }
};

const magnific = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.popup-gallery').magnificPopup({
    delegate: 'a.popup-img',
    tLoading: 'Loading image #%curr%...',
    type: 'image',
    mainClass: 'mfp-img-mobile',
    gallery: {
      navigateByImgClick: true,
      enabled: true,
      preload: [0, 1]
    },
    image: {
      tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    }
  });
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
    type: 'iframe',
    disableOn: 700,
    mainClass: 'mfp-fade',
    preloader: false,
    removalDelay: 160,
    fixedContentPos: false
  });
};

const counterJs = () => {
  //-- Plugin implementation
  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn.countTo = function (options) {
    return this.each(function () {
      //-- Arrange
      let FRAME_RATE = 60; // Predefine default frame rate to be 60fps

      let $el = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
      let countFrom = 0;

      let countTo = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()($el.attr('data-to'));

      let countSpeed = $el.attr('data-speed'); // Number increment per second
      //-- Action

      let rafId;
      let increment;
      let currentCount = countFrom;

      let countAction = function () {
        // Self looping local function via requestAnimationFrame
        if (currentCount < countTo) {
          // Perform number incremeant
          $el.text(Math.floor(currentCount)); // Update HTML display

          increment = countSpeed / FRAME_RATE; // Calculate increment step

          currentCount += increment; // Increment counter

          rafId = requestAnimationFrame(countAction);
        } else {
          // Terminate animation once it reaches the target count number
          $el.text(countTo); // Set to the final value before everything stops
          //cancelAnimationFrame(rafId);
        }
      };

      rafId = requestAnimationFrame(countAction); // Initiates the looping function
    });
  };

  jquery__WEBPACK_IMPORTED_MODULE_1___default()('.timer').countTo();
};

const revslider_showDoubleJqueryError = sliderID => {// var err = "<div class='rs_error_message_box'>";
  // err += "<div class='rs_error_message_oops'>Oops...</div>";
  // err += "<div class='rs_error_message_content'>";
  // err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
  // err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
  // err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
  // err += "</div>";
  // err += "</div>";
  // jQuery(sliderID).show().html(err);
};

const initRevSlider = () => {
  let revapi1, tpj;
  tpj = jQuery.noConflict();

  if (tpj("#rev_slider_0_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_0_1");
  } else {
    revapi1 = tpj("#rev_slider_0_1").show().revolution({
      jsFileLocation: "../static/assets/revslider/js/",
      sliderType: "standard",
      sliderLayout: "fullwidth",
      visibilityLevels: [1240, 1024, 778, 480],
      gridwidth: [1400, 1024, 767, 479],
      gridheight: [600, 600, 800, 600],
      minHeight: "",
      autoHeight: true,
      lazyType: "smart",
      spinner: "spinner0",
      editorheight: [600, 600, 800, 600],
      responsiveLevels: [1240, 1024, 778, 480],
      disableProgressBar: "on",
      navigation: {
        mouseScrollNavigation: false,
        touch: {
          touchenabled: true
        }
      },
      parallax: {
        levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        type: "mouse"
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
    });
  }

  let revapi2;

  if (tpj("#rev_slider_1_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_1_1");
  } else {
    revapi2 = tpj("#rev_slider_1_1").show().revolution({
      jsFileLocation: "../static/assets/revslider/js/",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1240,1240,480",
      gridwidth: "1400,1400,1400,479",
      gridheight: "700,700,700,600",
      minHeight: "",
      autoHeight: true,
      lazyType: "smart",
      spinner: "spinner0",
      editorheight: "700,768,400,600",
      responsiveLevels: "1240,1240,1240,480",
      disableProgressBar: "on",
      navigation: {
        mouseScrollNavigation: false,
        touch: {
          touchenabled: true
        }
      },
      parallax: {
        levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        type: "mouse"
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
    });
  }

  let revapi3;

  if (tpj("#rev_slider_3_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_3_1");
  } else {
    revapi3 = tpj("#rev_slider_3_1").show().revolution({
      jsFileLocation: "../static/assets/revslider/js/",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,778,480",
      gridwidth: "1400,1024,767,479",
      gridheight: "700,600,800,600",
      minHeight: "",
      autoHeight: true,
      lazyType: "smart",
      spinner: "spinner0",
      editorheight: "700,600,800,600",
      responsiveLevels: "1240,1024,778,480",
      disableProgressBar: "on",
      navigation: {
        mouseScrollNavigation: false,
        touch: {
          touchenabled: true
        }
      },
      parallax: {
        levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        type: "mouse"
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
    });
  }

  let revapi4;

  if (tpj("#rev_slider_4_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_4_1");
  } else {
    revapi4 = tpj("#rev_slider_4_1").show().revolution({
      jsFileLocation: "js/",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,778,480",
      gridwidth: "1400,1024,778,479",
      gridheight: "800,768,600,600",
      minHeight: "",
      autoHeight: true,
      lazyType: "smart",
      spinner: "spinner0",
      editorheight: "800,768,600,600",
      responsiveLevels: "1240,1024,778,480",
      disableProgressBar: "on",
      navigation: {
        mouseScrollNavigation: false,
        touch: {
          touchenabled: true
        }
      },
      parallax: {
        levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        type: "mouse"
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
    });
  }

  var revapi5;

  if (tpj("#rev_slider_5_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_5_1");
  } else {
    revapi5 = tpj("#rev_slider_5_1").show().revolution({
      jsFileLocation: "js/",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,778,480",
      gridwidth: "1400,1024,778,479",
      gridheight: "900,900,600,600",
      minHeight: "",
      autoHeight: true,
      lazyType: "smart",
      spinner: "spinner0",
      editorheight: "900,900,600,600",
      responsiveLevels: "1240,1024,778,480",
      disableProgressBar: "on",
      navigation: {
        mouseScrollNavigation: false,
        touch: {
          touchenabled: true
        }
      },
      parallax: {
        levels: [1, 2, 3, 4, 5, 30, 35, 40, 45, 46, 47, 48, 49, 50, 51, 55],
        type: "mouse"
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
    });
  }

  let revapi6;

  if (tpj("#rev_slider_6_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_6_1");
  } else {
    revapi6 = tpj("#rev_slider_6_1").show().revolution({
      sliderType: "hero",
      jsFileLocation: "js/",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,778,480",
      gridwidth: 1600,
      gridheight: 900,
      minHeight: "",
      spinner: "spinner0",
      editorheight: "900,768,960,720",
      responsiveLevels: "1240,1024,778,480",
      disableProgressBar: "on",
      navigation: {
        onHoverStop: false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
    });
  }

  var revapi7;

  if (tpj("#rev_slider_7_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_7_1");
  } else {
    revapi7 = tpj("#rev_slider_7_1").show().revolution({
      jsFileLocation: "js/",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,778,480",
      gridwidth: "1400,1024,778,480",
      gridheight: "800,650,650,500",
      minHeight: "",
      autoHeight: true,
      spinner: "spinner0",
      editorheight: "800,650,650,500",
      responsiveLevels: "1240,1024,778,480",
      disableProgressBar: "on",
      navigation: {
        onHoverStop: false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
    });
  }

  var revapi9;
  jQuery(function () {
    tpj = jQuery;

    if (tpj("#rev_slider_9_1").revolution == undefined) {
      revslider_showDoubleJqueryError("#rev_slider_9_1");
    } else {
      revapi9 = tpj("#rev_slider_9_1").show().revolution({
        sliderType: "hero",
        jsFileLocation: "js/",
        sliderLayout: "fullwidth",
        visibilityLevels: "1240,1024,778,480",
        gridwidth: 1600,
        gridheight: 750,
        minHeight: "",
        spinner: "spinner0",
        editorheight: "750,768,960,720",
        responsiveLevels: "1240,1024,778,480",
        disableProgressBar: "on",
        navigation: {
          onHoverStop: false
        },
        fallbacks: {
          allowHTML5AutoPlayOnAndroid: true
        }
      });
    }
  });
  var revapi10;

  if (tpj("#rev_slider_10_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_10_1");
  } else {
    revapi10 = tpj("#rev_slider_10_1").show().revolution({
      sliderType: "hero",
      jsFileLocation: "js/",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,778,480",
      gridwidth: 1600,
      gridheight: 900,
      minHeight: "",
      spinner: "spinner0",
      editorheight: "900,768,960,720",
      responsiveLevels: "1240,1024,778,480",
      disableProgressBar: "on",
      navigation: {
        onHoverStop: false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
    });
  }

  var revapi11;

  if (tpj("#rev_slider_11_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_11_1");
  } else {
    revapi11 = tpj("#rev_slider_11_1").show().revolution({
      sliderType: "hero",
      jsFileLocation: "js/",
      sliderLayout: "fullwidth",
      visibilityLevels: "1240,1024,778,480",
      gridwidth: 1600,
      gridheight: 800,
      minHeight: "",
      spinner: "spinner0",
      editorheight: "800,768,960,720",
      responsiveLevels: "1240,1024,778,480",
      disableProgressBar: "on",
      navigation: {
        onHoverStop: false
      },
      fallbacks: {
        allowHTML5AutoPlayOnAndroid: true
      }
    });
  }
};

const isotope = () => {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(".isotope").length) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.isotope').isotope({
      itemSelector: '.iq-grid-item'
    }); // filter items on button click

    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.isotope-filters').on('click', 'button', function () {
      var filterValue = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-filter');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.isotope').isotope({
        resizable: true,
        filter: filterValue
      });
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('.isotope-filters button').removeClass('active');
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');
    });
  }

  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(".iq-masonry-block").length) {
    var $msnry = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iq-masonry-block .iq-masonry');

    if ($msnry) {
      var $filter = jquery__WEBPACK_IMPORTED_MODULE_1___default()('.iq-masonry-block .isotope-filters');
      $msnry.isotope({
        percentPosition: true,
        resizable: true,
        itemSelector: '.iq-masonry-block .iq-masonry-item',
        masonry: {
          gutterWidth: 0
        }
      }); // bind filter button click

      $filter.on('click', 'button', function () {
        var filterValue = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).attr('data-filter');
        $msnry.isotope({
          filter: filterValue
        });
      });
      $filter.each(function (i, buttonGroup) {
        var $buttonGroup = jquery__WEBPACK_IMPORTED_MODULE_1___default()(buttonGroup);
        $buttonGroup.on('click', 'button', function () {
          $buttonGroup.find('.active').removeClass('active');
          jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).addClass('active');
        });
      });
    }
  }
};

const chartInit = () => {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("#data-analytics-pie-chart").length) {
    const data = {
      datasets: [{
        data: [60, 40, 40],
        backgroundColor: ["#f7be68", "#fe6c61", "#5471d2"]
      }],
      labels: ['One', 'Two', 'Three']
    };
    var ctx = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#data-analytics-pie-chart');
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    });
    document.getElementById('js-legend').innerHTML = myPieChart.generateLegend();
  }
};

const chart = () => {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("#managed-data-analytics").length) {
    const data = {
      labels: ["JAN", " FEB", " MAR", " APR", " MAY", " JUN", " JUL", " AUG"],
      datasets: [{
        label: "One",
        fillColor: "rgba(84, 114, 210, 0.1)",
        strokeColor: "#5472d2",
        pointColor: "#5472d2",
        pointStrokeColor: "#5472d2",
        highlightFill: "#3c5ecc",
        highlightStroke: "#3c5ecc",
        pointHighlightFill: "#3c5ecc",
        pointHighlightStroke: "#3c5ecc",
        data: [10, 15, 20, 25, 27, 25, 23, 25],
        borderColor: "#5471d2",
        backgroundColor: "rgba(84,113,210,0.2)",
        pointBackgroundColor: 'rgba(84,113,210,1)',
        pointRadius: 5
      }, {
        label: "Two",
        fill: true,
        fillColor: "rgba(254,108,97,0.1)",
        strokeColor: "#fe6c61",
        pointColor: "#fe6c61",
        pointStrokeColor: "#fe6c61",
        highlightFill: "#fe5043",
        highlightStroke: "#fe5043",
        pointHighlightFill: "#fe5043",
        pointHighlightStroke: "#fe5043",
        data: [25, 18, 16, 17, 20, 25, 30, 35],
        borderColor: "#fe6c61",
        backgroundColor: "rgba(254,108,97,0.2)",
        pointBackgroundColor: 'rgba(254,108,97,1)',
        pointRadius: 5
      }]
    };
    var ctx = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#managed-data-analytics');
    var lineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        legend: {
          display: false
        }
      }
    });
    document.getElementById('js-legend').innerHTML = lineChart.generateLegend();
  }
};

const bigdataserviceChart = () => {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("#big-data-service").length) {
    const data = {
      datasets: [{
        data: [60, 40],
        backgroundColor: ["#fe6c61", "#5471d2"]
      }],
      labels: ['One', 'Two']
    };
    var ctx = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#big-data-service');
    var myPieChart = new Chart(ctx, {
      type: 'pie',
      data: data,
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    });
    document.getElementById('js-legend').innerHTML = myPieChart.generateLegend();
  }
};

const dataScienceChart = () => {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("#data-science-chart").length) {
    const data = {
      datasets: [{
        data: [60, 40, 40],
        backgroundColor: ["#f7be68", "#fe6c61", "#5471d2"]
      }],
      labels: ['One', 'Two', 'Three']
    };
    var ctx = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#data-science-chart');
    var myPieChart = new Chart(ctx, {
      type: 'doughnut',
      data: data,
      options: {
        maintainAspectRatio: false,
        legend: {
          display: false
        }
      }
    });
    document.getElementById('js-legend').innerHTML = myPieChart.generateLegend();
  }
};

const artificialIntelligenceChart = () => {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("#artificial-intelligence").length) {
    const data = {
      "labels": ["JAN", " FEB", " MAR", " APR", " MAY", " JUN", " JUL", " AUG"],
      "datasets": [{
        label: "One",
        backgroundColor: "rgba(254,108,97,0.2)",
        borderColor: "#fe6c61",
        pointColor: "#fe6c61",
        pointStrokeColor: "#fe6c61",
        highlightFill: "#fe5043",
        highlightStroke: "#fe5043",
        pointHighlightFill: "#fe5043",
        pointHighlightStroke: "#fe5043",
        data: ["25", " 18", " 16", " 17", " 20", " 25", " 30", " 35"]
      }, {
        label: "Two",
        backgroundColor: "rgba(84,114,210,0.2)",
        borderColor: "#5472d2",
        pointColor: "#5472d2",
        pointStrokeColor: "#5472d2",
        highlightFill: "#3c5ecc",
        highlightStroke: "#3c5ecc",
        pointHighlightFill: "#3c5ecc",
        pointHighlightStroke: "#3c5ecc",
        data: ["10", " 15", " 20", " 25", " 27", " 25", " 23", " 25"]
      }]
    };
    var ctx = jQuery('#artificial-intelligence');
    var myLineChart = new Chart(ctx, {
      type: 'line',
      data: data,
      options: {
        // maintainAspectRatio: false,
        legend: {}
      }
    });
  }
};

const dataVisualizationChart = () => {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("#data-visualization").length) {
    const data = {
      labels: ["JAN", " FEB", " MAR", " APR", " MAY", " JUN", " JUL", " AUG"],
      datasets: [{
        label: "One",
        data: [20, 28, 20, 25, 27, 25, 23, 25],
        fillColor: "#5472d2",
        strokeColor: "#5472d2",
        pointColor: "#5472d2",
        pointStrokeColor: "#5472d2",
        highlightFill: "#3c5ecc",
        highlightStroke: "#3c5ecc",
        pointHighlightFill: "#3c5ecc",
        pointHighlightStroke: "#3c5ecc",
        backgroundColor: "#5471d2"
      }, {
        label: "Two",
        data: [25, 18, 16, 17, 20, 25, 30, 38],
        fillColor: "#fe6c61",
        strokeColor: "#fe6c61",
        pointColor: "#fe6c61",
        pointStrokeColor: "#fe6c61",
        highlightFill: "#fe5043",
        highlightStroke: "#fe5043",
        pointHighlightFill: "#fe5043",
        pointHighlightStroke: "#fe5043",
        backgroundColor: "#fe6c61"
      }]
    };
    var ctx = jquery__WEBPACK_IMPORTED_MODULE_1___default()('#data-visualization');
    var myPieChart = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: {
        scaleBeginAtZero: true,
        legend: {
          display: false
        }
      }
    });
    document.getElementById('js-legend').innerHTML = myPieChart.generateLegend();
  }
};

const pillTab = () => {
  var nav = jQuery('#pills-tab');

  if (nav.length) {
    jQuery(window).on('scroll', function (e) {
      var contentNav = nav.offset().top - window.outerHeight;

      if (jQuery(window).scrollTop() >= contentNav) {
        event.preventDefault();
        jQuery('#pills-tab li a').removeClass('active');
        jQuery('#pills-tab li a[aria-selected=true]').addClass('active');
      }
    });
  }
};



/***/ }),

/***/ "./constants/masonry-items.js":
/*!************************************!*\
  !*** ./constants/masonry-items.js ***!
  \************************************/
/*! exports provided: MasonryItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MasonryItem", function() { return MasonryItem; });
const MasonryItem = [{
  filterClass: 'video',
  link: '#',
  image: './static/assets/images/about-us/08.png',
  title: 'Business Growth',
  description: 'Video'
}, {
  filterClass: 'html',
  link: '#',
  image: './static/assets/images/about-us/02.png',
  title: 'Business Growth',
  description: 'HTML'
}, {
  filterClass: 'html',
  link: '#',
  image: './static/assets/images/about-us/03.png',
  title: 'Business Growth',
  description: 'HTML'
}, {
  filterClass: 'photography',
  link: '#',
  image: './static/assets/images/about-us/08.png',
  title: 'Business Growth',
  description: 'Photography'
}, {
  filterClass: 'photography',
  link: '#',
  image: './static/assets/images/about-us/03.png',
  title: 'Business Growth',
  description: 'Photography'
}, {
  filterClass: 'design ',
  link: '#',
  image: './static/assets/images/about-us/08.png',
  title: 'Business Growth',
  description: 'Design'
}, {
  filterClass: 'design ',
  link: '#',
  image: './static/assets/images/about-us/02.png',
  title: 'Business Growth',
  description: 'Design'
}, {
  filterClass: 'design',
  link: '#',
  image: './static/assets/images/about-us/08.png',
  title: 'Business Growth',
  description: 'Design'
}];


/***/ }),

/***/ "./constants/menu.js":
/*!***************************!*\
  !*** ./constants/menu.js ***!
  \***************************/
/*! exports provided: servicesMenu, topMenuBarItems */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "servicesMenu", function() { return servicesMenu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "topMenuBarItems", function() { return topMenuBarItems; });
const topMenuBarItems = [{
  href: '#iq-home',
  title: 'Home  ',
  submenu: [{
    href: '/landing-page1',
    title: 'Home One'
  }, {
    href: '/landing-page2',
    title: 'Home Two'
  }, {
    href: '/landing-page3',
    title: 'Home Three'
  }, {
    href: '/landing-page4',
    title: 'User Analysis'
  }, {
    href: '/landing-page5',
    title: 'Business Intelligence'
  }, {
    href: '/landing-page6',
    title: 'Predictive Analytics'
  }, {
    href: '/landing-page7',
    title: 'Sentiment Analytics'
  }, {
    href: '/landing-page8',
    title: 'User Behaviour Analysis'
  }, {
    href: '/landing-page9',
    title: 'Data Scientist'
  }, {
    href: '/landing-page10',
    title: 'Data Visualization Service'
  }, {
    href: '/landing-page11',
    title: 'Best Marketing Analysis'
  }]
}, {
  href: '#iq-about',
  title: 'About Us ',
  submenu: [{
    href: '/about-us-1',
    title: 'About Us One'
  }, {
    href: '/about-us-2',
    title: 'About Us Two'
  }]
}, {
  href: '/services',
  title: 'Service',
  submenu: [{
    href: '/data-analytics',
    title: 'Data Analytics'
  }, {
    href: '/managed-analytics',
    title: 'Managed Analytics'
  }, {
    href: '/big-data-services',
    title: 'Big Data Services'
  }, {
    href: '/data-science-consulting',
    title: 'Data Science Consulting'
  }, {
    href: '/business-intelligence',
    title: 'Business Intelligence'
  }, {
    href: '/data-visualization-services',
    title: 'Data Visualization'
  }, {
    href: '/data-management',
    title: 'Data Management'
  }, {
    href: '/artificial-intelligence',
    title: 'Artificial Intelligence'
  }]
}, {
  href: '#our-cases',
  title: 'Our Cases',
  submenu: [{
    href: '#portfolio',
    title: 'Portfolio',
    submenu: [{
      href: '/portfolio-2-columns',
      title: 'Portfolio 2 Columns'
    }, {
      href: '/portfolio-3-columns',
      title: 'Portfolio 3 Columns'
    }, {
      href: '/portfolio-4-columns',
      title: 'Portfolio 4 Columns'
    }, {
      href: '/portfolio-5-columns',
      title: 'Portfolio 5 Columns'
    }, {
      href: '/portfolio-no-space',
      title: 'Portfolio No Space'
    }]
  }, {
    href: '/masonry-2-portfolio',
    title: 'Masonry 2 Portfolio'
  }, {
    href: '/masonry-3-portfolio',
    title: 'Masonry 3 Portfolio'
  }, {
    href: '/masonry-no-space',
    title: 'Masonry No Space'
  }]
}, {
  href: '#blog',
  title: 'Blog',
  submenu: [{
    href: '/blog',
    title: 'Blog'
  }, {
    href: '#blog-grid',
    title: 'Blog Grid',
    submenu: [{
      href: '/blog-one-column-grid',
      title: 'One Column Blog'
    }, {
      href: '/blog-two-column-grid',
      title: 'Two Column Blog'
    }, {
      href: '/blog-three-column-grid',
      title: 'Three Column Blog'
    }]
  }, {
    href: '#blog-right-sidebar-grid',
    title: 'Right SideBar Grid',
    submenu: [{
      href: '/blog-right-sidebar-grid-1',
      title: 'Right Sidebar Grid 1'
    }, {
      href: '/blog-right-sidebar-grid-2',
      title: 'Right Sidebar Grid 2'
    }]
  }, {
    href: '#blog-left-sidebar-grid',
    title: 'Left SideBar Grid',
    submenu: [{
      href: '/blog-left-sidebar-grid-1',
      title: 'Left Sidebar Grid 1'
    }, {
      href: '/blog-left-sidebar-grid-2',
      title: 'Left Sidebar Grid 1'
    }]
  }, {
    href: '/blog-details',
    title: 'Blog Details'
  }]
}, {
  href: '#contact',
  title: 'Pages',
  submenu: [{
    href: '/pages',
    title: 'Our Team'
  }, {
    href: '/client',
    title: 'Clients'
  }, {
    href: '/career',
    title: 'Careers'
  }, {
    href: '/contactus',
    title: 'Contact Us'
  }]
}];
const servicesMenu = [{
  href: '/data-analytics',
  title: 'Data Analytics'
}, {
  href: '/managed-analytics',
  title: 'Managed Analytics'
}, {
  href: '/big-data-services',
  title: 'Big Data Services'
}, {
  href: '/data-science-consulting',
  title: 'Data Science Consulting'
}, {
  href: '/business-intelligence',
  title: 'Business Intelligence'
}, {
  href: '/data-visualization-services',
  title: 'Data Visualization'
}, {
  href: '/data-management',
  title: 'Data Management'
}, {
  href: '/artificial-intelligence',
  title: 'Artificial Intelligence'
}];


/***/ }),

/***/ "./constants/portfolio-item.js":
/*!*************************************!*\
  !*** ./constants/portfolio-item.js ***!
  \*************************************/
/*! exports provided: Item, Item1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item1", function() { return Item1; });
const Item = [{
  filterClass: 'video',
  link: '#',
  image: './static/assets/images/about-us/01.png',
  title: 'Business Growth',
  description: 'Video'
}, {
  filterClass: 'html',
  link: '#',
  image: './static/assets/images/about-us/02.png',
  title: 'Business Growth',
  description: 'HTML'
}, {
  filterClass: 'design video',
  link: '#',
  image: './static/assets/images/about-us/03.png',
  title: 'Business Growth',
  description: 'Design, Video'
}, {
  filterClass: 'photography',
  link: '#',
  image: './static/assets/images/about-us/04.png',
  title: 'Business Growth',
  description: 'Photography'
}, {
  filterClass: 'design photography',
  link: '#',
  image: './static/assets/images/about-us/01.png',
  title: 'Business Growth',
  description: 'Design, Photography'
}, {
  filterClass: 'design photography',
  link: '#',
  image: './static/assets/images/about-us/02.png',
  title: 'Business Growth',
  description: 'Design, Photography'
}, {
  filterClass: 'design',
  link: '#',
  image: './static/assets/images/about-us/03.png',
  title: 'Business Growth',
  description: 'Design'
}];
const Item1 = [{
  filterClass: 'video',
  link: '#',
  image: './static/assets/images/about-us/01.png',
  title: 'Business Growth',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking '
}, {
  filterClass: 'html',
  link: '#',
  image: './static/assets/images/about-us/02.png',
  title: 'Business Growth',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking '
}, {
  filterClass: 'design video',
  link: '#',
  image: './static/assets/images/about-us/03.png',
  title: 'Business Growth',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking '
}, {
  filterClass: 'photography',
  link: '#',
  image: './static/assets/images/about-us/04.png',
  title: 'Business Growth',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking '
}, {
  filterClass: 'design photography',
  link: '#',
  image: './static/assets/images/about-us/01.png',
  title: 'Business Growth',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking '
}, {
  filterClass: 'design photography',
  link: '#',
  image: './static/assets/images/about-us/02.png',
  title: 'Business Growth',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking '
}, {
  filterClass: 'design',
  link: '#',
  image: './static/assets/images/about-us/03.png',
  title: 'Business Growth',
  description: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking '
}];


/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js":
/*!****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-symbols */ "core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/parse-int.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/parse-int.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/parse-int */ "core-js/library/fn/parse-int");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
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

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutProperties.js ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutProperties; });
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-own-property-symbols */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-symbols.js");
/* harmony import */ var _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./objectWithoutPropertiesLoose */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js");


function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};
  var target = Object(_objectWithoutPropertiesLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(source, excluded);
  var key, i;

  if (_core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default.a) {
    var sourceSymbolKeys = _core_js_object_get_own_property_symbols__WEBPACK_IMPORTED_MODULE_0___default()(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js":
/*!*****************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/objectWithoutPropertiesLoose.js ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _objectWithoutPropertiesLoose; });
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");
/* harmony import */ var _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_keys__WEBPACK_IMPORTED_MODULE_0__);

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};

  var sourceKeys = _core_js_object_keys__WEBPACK_IMPORTED_MODULE_0___default()(source);

  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
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

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  if (obj != null) {
    var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

        if (desc && (desc.get || desc.set)) {
          _Object$defineProperty(newObj, key, desc);
        } else {
          newObj[key] = obj[key];
        }
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const rr = route_regex_1.getRouteRegex(route);
        const routeMatch = route_matcher_1.getRouteMatcher(rr)(asPathname);

        if (!routeMatch) {
          const error = 'The provided `as` value is incompatible with the `href` value. This is invalid. https://err.sh/zeit/next.js/incompatible-href-as';

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const m = routeMatch[groups[slugName]];

      if (m !== undefined) {
        params[slugName] = m.indexOf('/') !== -1 ? m.split('/').map(entry => decodeURIComponent(entry)) : decodeURIComponent(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => (groups[$1 // Un-escape key
  .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
  ] = groupIndex++, $1.indexOf('\\.\\.\\.') === 0 ? '/(.+?)' : '/([^/]+?)'));
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/landing-page11/index.js":
/*!***************************************!*\
  !*** ./pages/landing-page11/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _static_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../static/assets/images/logo.png */ "./static/assets/images/logo.png");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _config_plugins__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config/plugins */ "./config/plugins.js");
/* harmony import */ var _components_xamin__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../components/xamin */ "./components/xamin/index.js");
/* harmony import */ var _components_home_section_landing_page11_revslider__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../components/home-section/landing-page11/revslider */ "./components/home-section/landing-page11/revslider/index.js");
/* harmony import */ var _components_home_section_landing_page11_footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/home-section/landing-page11/footer */ "./components/home-section/landing-page11/footer/index.js");
/* harmony import */ var _components_home_section_landing_page11_benefit_section__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../components/home-section/landing-page11/benefit-section */ "./components/home-section/landing-page11/benefit-section/index.js");
/* harmony import */ var _components_home_section_landing_page11_blog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/home-section/landing-page11/blog */ "./components/home-section/landing-page11/blog/index.js");
/* harmony import */ var _components_home_section_landing_page11_howworks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../components/home-section/landing-page11/howworks */ "./components/home-section/landing-page11/howworks/index.js");
/* harmony import */ var _components_home_section_landing_page11_projects__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../components/home-section/landing-page11/projects */ "./components/home-section/landing-page11/projects/index.js");
/* harmony import */ var _components_home_section_landing_page11_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../components/home-section/landing-page11/service */ "./components/home-section/landing-page11/service/index.js");
/* harmony import */ var _components_home_section_landing_page11_section_three__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/home-section/landing-page11/section-three */ "./components/home-section/landing-page11/section-three/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/pages/landing-page11/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // Import asset...

 // Import for custom styles...

 // Import for the custom plugins...

 // Import for the Xamin components...

 //Components










class Index extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeMenu: ['#iq-home', '/landing-page8']
    };
  }

  componentDidMount(props) {
    setTimeout(() => {
      Object(_config_plugins__WEBPACK_IMPORTED_MODULE_4__["index"])();
    }, 3000);
  }

  render() {
    return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 53
      },
      __self: this
    }, __jsx("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 54
      },
      __self: this
    }, "Xamin - Data Science & Analytics HTML5 Template"), __jsx("meta", {
      name: "keywords",
      content: "HTML5 Template",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }), __jsx("meta", {
      name: "description",
      content: "Xamin - Data Science & Analytics HTML5 Template",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 56
      },
      __self: this
    }), __jsx("meta", {
      name: "author",
      content: "http://iqonic.design/",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 57
      },
      __self: this
    }), __jsx("link", {
      rel: "shortcut icon",
      href: "./static/assets/images/favicon.ico",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 59
      },
      __self: this
    })), __jsx(_components_xamin__WEBPACK_IMPORTED_MODULE_5__["Loader"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 63
      },
      __self: this
    }), __jsx(_components_xamin__WEBPACK_IMPORTED_MODULE_5__["HeaderStyle"], {
      className: "style-one",
      logoImg: _static_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      buttonSection: __jsx("div", {
        className: "blue-btn button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, " ", __jsx("a", {
        href: "#",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }, "Get Started"), " "),
      activeMenu: this.state.activeMenu,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 67
      },
      __self: this
    }), __jsx(_components_home_section_landing_page11_revslider__WEBPACK_IMPORTED_MODULE_6__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 73
      },
      __self: this
    }), __jsx("div", {
      className: "main-content",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 74
      },
      __self: this
    }, __jsx(_components_home_section_landing_page11_howworks__WEBPACK_IMPORTED_MODULE_10__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 75
      },
      __self: this
    }), __jsx(_components_home_section_landing_page11_section_three__WEBPACK_IMPORTED_MODULE_13__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 76
      },
      __self: this
    }), __jsx(_components_home_section_landing_page11_benefit_section__WEBPACK_IMPORTED_MODULE_8__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 77
      },
      __self: this
    }), __jsx(_components_home_section_landing_page11_projects__WEBPACK_IMPORTED_MODULE_11__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 78
      },
      __self: this
    }), __jsx(_components_home_section_landing_page11_service__WEBPACK_IMPORTED_MODULE_12__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 79
      },
      __self: this
    }), __jsx(_components_home_section_landing_page11_blog__WEBPACK_IMPORTED_MODULE_9__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 80
      },
      __self: this
    })), __jsx(_components_xamin__WEBPACK_IMPORTED_MODULE_5__["ScrollTop"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 83
      },
      __self: this
    }), __jsx(_components_home_section_landing_page11_footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./static/assets/images/logo.png":
/*!***************************************!*\
  !*** ./static/assets/images/logo.png ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAD+CAYAAADmvHsGAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA3ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDoyMjNhYTkxMS1hNTBmLWE4NDAtOGRhNS1hYmVjZDQyMzU0NjUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6ODdGQ0IzMEZGNTdCMTFFOUE1MzhFMkZDOTIwM0IyRkQiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6ODdGQ0IzMEVGNTdCMTFFOUE1MzhFMkZDOTIwM0IyRkQiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKFdpbmRvd3MpIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NTQwMDYwN2ItNTIyYy1hOTQyLTkyZjEtMDk1OWI2ODI0YmM0IiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjIyM2FhOTExLWE1MGYtYTg0MC04ZGE1LWFiZWNkNDIzNTQ2NSIv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");

/***/ }),

/***/ "./static/style.css":
/*!**************************!*\
  !*** ./static/style.css ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 6:
/*!*********************************************!*\
  !*** multi ./pages/landing-page11/index.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /var/www/html/REATProjects_LIVE/xamin-react/pages/landing-page11/index.js */"./pages/landing-page11/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-symbols":
/*!*********************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-symbols" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-symbols");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/parse-int":
/*!***********************************************!*\
  !*** external "core-js/library/fn/parse-int" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/parse-int");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "jquery":
/*!*************************!*\
  !*** external "jquery" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("jquery");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=landing-page11.js.map