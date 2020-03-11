webpackHotUpdate("static/development/pages/landing-page9.js",{

/***/ "./components/xamin/ScrollTop/index.js":
/*!*********************************************!*\
  !*** ./components/xamin/ScrollTop/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/ScrollTop/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var scrollTop = function scrollTop() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('body,html').animate({
    scrollTop: 0
  }, 800);
};

var Index = function Index() {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    id: "back-to-top",
    style: {
      display: 'none'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, __jsx("a", {
    className: "top",
    id: "top",
    href: "#",
    onClick: scrollTop,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }, " ", __jsx("i", {
    className: "fa fa-chevron-up",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

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
var topMenuBarItems = [{
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
var servicesMenu = [{
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


/***/ })

})
//# sourceMappingURL=landing-page9.js.777f482d0c442e8a9089.hot-update.js.map