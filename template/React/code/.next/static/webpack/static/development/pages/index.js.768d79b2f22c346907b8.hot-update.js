webpackHotUpdate("static/development/pages/index.js",{

/***/ "./components/home-section/landing-page1/howworks/index.js":
/*!*****************************************************************!*\
  !*** ./components/home-section/landing-page1/howworks/index.js ***!
  \*****************************************************************/
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
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");





var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page1/howworks/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      items: [{
        media: "./static/assets/images/services/01.png",
        title: "Data for all your people",
        text: "it is a long established fact that a reader will be distracted by the of readable"
      }, {
        media: "./static/assets/images/services/02.png",
        title: "A new breed of AI",
        text: "it is a long established fact that a reader will be distracted by the of readable"
      }, {
        media: "./static/assets/images/services/03.png",
        title: "Analytics business",
        text: "it is a long established fact that a reader will be distracted by the of readable"
      }]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.state.items;
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("section", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 35
        },
        __self: this
      }, __jsx("div", {
        className: "container",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 36
        },
        __self: this
      }, __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 37
        },
        __self: this
      }, __jsx("div", {
        className: "col-md-12",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_6__["SectionTitle"], {
        link: "How it works ?",
        title: "How Does Xamin Works",
        className: "title-box wow fadeInUp text-center",
        spanclass: "title-design",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }))), __jsx("div", {
        className: "row",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, items.map(function (item, index) {
        return __jsx("div", {
          key: index,
          className: "col-md-4 col-sm-12",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 50
          },
          __self: this
        }, __jsx("div", {
          className: "consult-services xamin-circle wow fadeInUp text-center " + (index < _this2.state.items.length - 1 ? "right" : ''),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 51
          },
          __self: this
        }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_6__["CardStyle1"], {
          media: item.media,
          title: item.title,
          text: item.text,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 52
          },
          __self: this
        })));
      })))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/home-section/landing-page1/revslider/index.js":
/*!******************************************************************!*\
  !*** ./components/home-section/landing-page1/revslider/index.js ***!
  \******************************************************************/
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
/* harmony import */ var _xamin__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../xamin */ "./components/xamin/index.js");





var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/home-section/landing-page1/revslider/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;



var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index() {
    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    return Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).apply(this, arguments));
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 8
        },
        __self: this
      }, __jsx(_xamin__WEBPACK_IMPORTED_MODULE_6__["RevSlider"], {
        revId: "rev_slider_4_1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 9
        },
        __self: this
      }, __jsx("rs-slide", {
        "data-key": "rs-6",
        "data-title": "Slide",
        "data-anim": "ei:d,d,d,d,d,d,d,d,d;eo:d,d,d,d,d,d,d,d,d;s:1000ms,d,d,d,d,d,d,d,d;r:0,0,0,0,0,0,0,0,0;t:fade,grayscale,blurlight,blurstrong,fade,crossfade,fadethroughlight,fadethroughdark,fadethroughtransparent;sl:d,d,d,d,d,d,d,d,d;",
        "data-firstanim": "t:fade;sl:12;",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 12
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        title: "01",
        width: "1600",
        height: "758",
        "data-lazyload": "./static/assets/revslider/assets/01-2.jpg",
        "data-parallax": "2",
        className: "rev-slidebg",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 15
        },
        __self: this
      }), __jsx("h2", {
        id: "slider-4-slide-6-layer-1",
        className: "rs-layer",
        "data-type": "text",
        "data-color": "#313e5b",
        "data-rsp_ch": "on",
        "data-xy": "x:l,l,l,c;xo:95px,20px,37px,0;yo:221px,141px,40px,46px;",
        "data-text": "s:48,48,50,42;l:65,65,70,55;fw:700;a:inherit,inherit,inherit,center;",
        "data-frame_0": "y:-50;",
        "data-frame_1": "st:600;sp:1000;sR:600;",
        "data-frame_999": "o:0;tp:600;st:w;sR:7400;",
        style: {
          zIndex: 9,
          fontFamily: "Lato",
          textTransform: "capitalize"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, "Applying Data Science", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }), " & Analytics To Life"), __jsx("p", {
        id: "slider-4-slide-6-layer-3",
        className: "rs-layer",
        "data-type": "text",
        "data-color": "#525f81",
        "data-rsp_ch": "on",
        "data-xy": "x:l,l,l,c;xo:95px,15px,40px,0;y:m;yo:94px,15px,-180px,-102px;",
        "data-text": "s:16,16,18,20;l:30;a:inherit,inherit,inherit,center;",
        "data-frame_0": "y:-50;",
        "data-frame_1": "st:900;sp:1000;sR:900;",
        "data-frame_999": "o:0;tp:600;st:w;sR:7100;",
        style: {
          zIndex: 10,
          fontFamily: "Karla"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, "It is a long established fact that a reader will be ", __jsx("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }), " distracted by the readable content."), __jsx("a", {
        id: "slider-4-slide-6-layer-4",
        className: "rs-layer button rev-btn",
        href: "#",
        target: "_self",
        rel: "nofollow",
        "data-type": "button",
        "data-xy": "xo:95px,15px,40px,60px;y:m;yo:184px,95px,-90px,0;",
        "data-text": "s:16,18,20,22;l:24;a:inherit,inherit,inherit,center;",
        "data-wrpcls": "blue-btn",
        "data-padding": "t:15;r:30;b:15;l:30;",
        "data-border": "bor:90px,90px,90px,90px;",
        "data-frame_0": "y:-50;",
        "data-frame_1": "st:1350;sp:500;sR:1350;",
        "data-frame_999": "o:0;tp:600;st:w;sR:7150;",
        "data-frame_hover": "skX:0px;skY:0px;c:#fff;bgc:#313e5b;boc:#000;bor:90px,90px,90px,90px;bos:solid;oX:50;oY:50;sp:0;",
        style: {
          zIndex: 12,
          backgroundColor: "#437eeb",
          fontFamily: "Karla",
          cursor: "pointer",
          outline: "none",
          boxShadow: "none",
          boxSizing: "border-box"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }, "About Us"), __jsx("a", {
        id: "slider-4-slide-6-layer-5",
        className: "rs-layer button blue-btn rev-btn",
        href: "#",
        target: "_self",
        rel: "nofollow",
        "data-type": "button",
        "data-xy": "x:l,l,l,r;xo:241px,161px,196px,60px;y:m;yo:184px,96px,-90px,0;",
        "data-text": "s:16,18,20,22;l:24;a:inherit;",
        "data-padding": "t:15;r:30;b:15;l:30;",
        "data-border": "bor:90px,90px,90px,90px;",
        "data-frame_0": "y:-50;",
        "data-frame_1": "st:1350;sp:500;sR:1350;",
        "data-frame_999": "x:0;y:0;z:0;sX:1;sY:1;o:1;rX:0;rY:0;rZ:0;skX:0;skY:0;st:w;sp:1000;sR:7150;",
        "data-frame_hover": "skX:0px;skY:0px;c:#fff;bgc:#437eeb;boc:#000;bor:90px,90px,90px,90px;bos:solid;oX:50;oY:50;sp:0;",
        style: {
          zIndex: 11,
          backgroundColor: "#313e5b",
          fontFamily: "Karla",
          cursor: "pointer",
          outline: "none",
          boxShadow: "none",
          boxSizing: "border-box"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, "Contact Us"), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-11",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:865px,646px,230px,110px;yo:123px,47px,333px,333px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:494px,361px,338px,234px;h:494px,361px,338px,234px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:1610;sp:1000;sR:1610;",
        "data-frame_999": "o:0;st:w;sR:6390;",
        style: {
          zIndex: 24,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 79
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "445",
        height: "445",
        "data-lazyload": "./static/assets/revslider/assets/01-4.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-12",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:955px,698px,149px,212px;yo:-134px,-135px,275px,335px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:824px,602px,450px,281px;h:818px,598px,447px,279px;",
        "data-frame_1": "e:Power4.easeInOut;sp:1500;",
        "data-frame_999": "o:0;st:w;sR:7500;",
        style: {
          zIndex: 8,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "824",
        height: "818",
        "data-lazyload": "./static/assets/revslider/assets/10-2.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-13",
        className: "rs-pxl-1",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:874px,639px,197px,73px;yo:469px,306px,607px,505px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:129px,94px,93px,58px;h:86px,62px,62px,38px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:2980;sp:1000;sR:2980;",
        "data-frame_999": "o:0;st:w;sR:5020;",
        style: {
          zIndex: 14,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 106
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/03-5.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-14",
        className: "rs-pxl-1",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:842px,615px,181px,58px;yo:463px,301px,600px,496px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:77px,56px,59px,44px;h:51px,37px,39px,29px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:2970;sp:1000;sR:2970;",
        "data-frame_999": "o:0;st:8900;sR:5030;",
        style: {
          zIndex: 16,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/03-5.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-15",
        className: "rs-pxl-1",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:933px,682px,230px,112px;yo:497px,341px,634px,472px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:77px,56px,71px,44px;h:51px,37px,47px,29px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:2980;sp:1000;sR:2980;",
        "data-frame_999": "o:0;st:w;sR:5020;",
        style: {
          zIndex: 15,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 136
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/03-5.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-16",
        className: "rs-pxl-2",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "x:r;xo:294px,212px,397px,263px;y:b;yo:-8px,173px,80px,12px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:110px,80px,81px,63px;h:73px,53px,54px,42px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:3020;sp:1000;sR:3020;",
        "data-frame_999": "o:0;st:w;sR:4980;",
        "data-tloop": "u:true;",
        "data-loop_0": "xR:10px;yR:10px;",
        "data-loop_999": "xR:10px;yR:10px;crd:t;sp:3000;",
        style: {
          zIndex: 17,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "img",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/08-3.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-18",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:1099px,803px,424px,283px;yo:521px,358px,686px,503px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:155px,113px,84px,52px;h:103px,75px,56px,34px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:3130;sp:1000;sR:3130;",
        "data-frame_999": "o:0;st:w;sR:4870;",
        style: {
          zIndex: 18,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 169
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/07-4.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-19",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:1172px,874px,456px,72px;yo:456px,296px,558px,481px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:195px,142px,156px,117px;h:130px,95px,104px,78px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:3270;sp:1000;sR:3270;",
        "data-frame_999": "o:0;st:w;sR:4730;",
        style: {
          zIndex: 19,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/05-4.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-20",
        className: "rs-pxl-3",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:924px,932px,193px,310px;yo:180px,222px,377px,426px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:154px,112px,119px,92px;h:103px,75px,79px,61px;",
        "data-frame_0": "y:-50,-36,-26,-16;",
        "data-frame_1": "st:3960;sp:1000;sR:3960;",
        "data-frame_999": "o:0;st:w;sR:4040;",
        "data-tloop": "u:true;",
        "data-loop_999": "sX:0.8;sY:0.8;sp:2000;e:Power0.easeInOut;yys:t;yyf:t;",
        style: {
          zIndex: 26,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/06-6.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 211
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-21",
        className: "rs-pxl-1",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:765px,559px,128px,42px;yo:323px,199px,434px,444px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:156px,114px,116px,72px;h:104px,76px,77px,48px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:3380;sp:1000;sR:3380;",
        "data-frame_999": "o:0;st:w;sR:4620;",
        style: {
          zIndex: 20,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 214
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "img",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/04-5.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 226
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-22",
        className: "rs-pxl-3",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:886px,648px,363px,237px;yo:267px,158px,631px,530px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:123px,89px,90px,66px;h:82px,59px,60px,44px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:3720;sp:1000;sR:3720;",
        "data-frame_999": "o:0;st:w;sR:4280;",
        "data-tloop": "u:true;",
        "data-loop_0": "y:-10;",
        "data-loop_999": "y:10;crd:t;sp:5000;e:Sine.easeInOut;yym:t;",
        style: {
          zIndex: 22,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 229
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/09-3.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 244
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-23",
        className: "rs-pxl-1",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:1220px,892px,458px,124px;yo:264px,156px,446px,417px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:129px,94px,70px,43px;h:86px,62px,46px,28px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:3480;sp:1000;sR:3480;",
        "data-frame_999": "o:0;st:w;sR:4520;",
        style: {
          zIndex: 21,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 247
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/03-5.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-24",
        className: "rs-pxl-1",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:1279px,935px,491px,136px;yo:312px,191px,473px,398px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:77px,56px,41px,57px;h:51px,37px,27px,38px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:2280;sp:1000;sR:2280;",
        "data-frame_999": "o:0;st:w;sR:5720;",
        style: {
          zIndex: 13,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 262
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "300",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/03-5.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-25",
        className: "rs-pxl-2",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:1111px,923px,452px,271px;yo:130px,85px,308px,338px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:151px,110px,112px,77px;h:151px,110px,112px,77px;",
        "data-frame_0": "y:top;",
        "data-frame_1": "st:4080;sp:1000;sR:4080;",
        "data-frame_999": "o:0;st:w;sR:3920;",
        "data-tloop": "u:true;",
        "data-loop_0": "y:-10;",
        "data-loop_999": "y:10;sp:6000;e:Sine.easeInOut;yym:t;",
        style: {
          zIndex: 23,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "200",
        height: "200",
        "data-lazyload": "./static/assets/revslider/assets/02.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 292
        },
        __self: this
      })), __jsx("rs-layer", {
        id: "slider-4-slide-6-layer-26",
        "data-type": "image",
        "data-rsp_ch": "on",
        "data-xy": "xo:1077px,806px,369px,207px;yo:245px,139px,417px,388px;",
        "data-text": "w:normal;s:20,14,10,6;l:0,18,13,8;",
        "data-dim": "w:120px,87px,96px,69px;h:118px,86px,94px,68px;",
        "data-frame_0": "x:175%;o:1;",
        "data-frame_0_mask": "u:t;x:-100%;",
        "data-frame_1": "e:Power3.easeOut;st:4610;sp:1000;sR:4610;",
        "data-frame_1_mask": "u:t;",
        "data-frame_999": "o:0;st:w;sR:3390;",
        style: {
          zIndex: 25,
          fontFamily: "Roboto"
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      }, __jsx("img", {
        src: "./static/assets/revslider/assets/dummy.png",
        alt: "images",
        width: "172",
        height: "169",
        "data-lazyload": "./static/assets/revslider/assets/11.png",
        "data-no-retina": true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 309
        },
        __self: this
      }))))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/AdressSection/index.js":
false,

/***/ "./components/xamin/BackgroundImage/index.js":
false,

/***/ "./components/xamin/Carousel2/index.js":
false,

/***/ "./components/xamin/CheckBoxList/index.js":
/*!************************************************!*\
  !*** ./components/xamin/CheckBoxList/index.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/CheckBoxList/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index(props) {
  var list = props.items;
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: props.text,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("ul", {
    className: "iq-list " + props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, list.map(function (item, index) {
    return __jsx("li", {
      key: index,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx("i", {
      className: "fa fa-check-square-o",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }), " ", __jsx("span", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, item));
  }))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/ContactUs/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "contact-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, " ", __jsx("input", {
    type: "text",
    name: "your-name",
    className: "form-control text ",
    placeholder: "Your Name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }), " "), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, " ", __jsx("input", {
    type: "text",
    name: "your-email",
    className: "form-control text ",
    placeholder: "Your Email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), " "), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " ", __jsx("input", {
    type: "text",
    name: "your-subject",
    className: "form-control text ",
    placeholder: "Subject",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }), " "), __jsx("div", {
    className: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
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
    __self: this
  }), " "), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
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
    __self: this
  }, "Send Message"), " ")));
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
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _constants_portfolio_item__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../constants/portfolio-item */ "./constants/portfolio-item.js");





var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/Portfolio/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;




var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      items: _constants_portfolio_item__WEBPACK_IMPORTED_MODULE_7__["Item"]
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var items = this.state.items;
      items = items.filter(function (item) {
        if (_this2.props.filterdata == 'all') {
          return true;
        }

        return item.filterClass.includes(_this2.props.filterdata);
      });
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, items.map(function (itemData, index) {
        return __jsx("div", {
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
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
          className: "iq-portfolio-content  text-center",
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
        }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_6___default.a, {
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
          className: "mb-0",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 40
          },
          __self: this
        }, itemData.description))))));
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/PricingCard1/index.js":
false,

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
    className: "ion-ios-upload-outline",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: this
  }), " ")));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/SubScriber/index.js":
false,

/***/ "./components/xamin/TabContent/index.js":
false,

/***/ "./components/xamin/TabStyle/index.js":
false,

/***/ "./components/xamin/cards/CardStyle1/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle1/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle1/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "circle-effect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: props.media,
    alt: "card",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  })), __jsx("h5", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.title), __jsx("p", {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.text));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/CardStyle14/index.js":
false,

/***/ "./components/xamin/cards/CardStyle15/index.js":
false,

/***/ "./components/xamin/cards/CardStyle16/index.js":
false,

/***/ "./components/xamin/cards/CardStyle17/index.js":
false,

/***/ "./components/xamin/cards/CardStyle18/index.js":
false,

/***/ "./components/xamin/cards/CardStyle19/index.js":
false,

/***/ "./components/xamin/cards/CardStyle3/index.js":
false,

/***/ "./components/xamin/cards/CardStyle4/index.js":
/*!****************************************************!*\
  !*** ./components/xamin/cards/CardStyle4/index.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle4/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "xamin-services  mb-0 wow fadeInUp text-" + props.textClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("div", {
    className: "services-detail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.image ? __jsx("img", {
    src: props.image,
    alt: "img",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }) : '', __jsx("h4", {
    className: "mb-1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.title), __jsx("p", {
    className: "mb-0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.description))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/cards/CardStyle8/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: "service-box p-4 my-4 wow fadeInUp  text-center text-md-left ",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("img", {
    src: props.image,
    alt: "fancybox",
    width: "550",
    height: "360",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }), __jsx("div", {
    className: "service-detail align-self-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("h5", {
    className: "mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
  }, props.description))));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./components/xamin/cards/PartnerCardStyle/index.js":
false,

/***/ "./components/xamin/index.js":
/*!***********************************!*\
  !*** ./components/xamin/index.js ***!
  \***********************************/
/*! exports provided: Loader, Link, HeaderStyle, ProgressBar, ProgressBarStyle2, Pagination, SearchForm, ReplyForm, ContactUs, SocialIcon, WaveBox, Carousel, Accordion, CheckboxList, SectionLeftImage, SectionRightImage, SectionStyle1, SectionStyle3, SectionTitle, CardStyle1, CardStyle2, CardStyle4, CardStyle5, CardStyle6, CardStyle7, CardStyle8, CardStyle9, CardStyle10, CardStyle11, CardStyle13, CardStyle12, TestimonialStyle1, BannerStyle1, PortfolioItem, MasonryItem, FooterMain, FooterLogo, FooterAddress, FooterLinks, ScrollTop, RevSlider, AboutStyle, AboutStyle2, ProgressStyle2 */
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

/* harmony import */ var _cards_CardStyle4__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./cards/CardStyle4 */ "./components/xamin/cards/CardStyle4/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle4", function() { return _cards_CardStyle4__WEBPACK_IMPORTED_MODULE_18__["default"]; });

/* harmony import */ var _cards_CardStyle5__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./cards/CardStyle5 */ "./components/xamin/cards/CardStyle5/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle5", function() { return _cards_CardStyle5__WEBPACK_IMPORTED_MODULE_19__["default"]; });

/* harmony import */ var _cards_CardStyle6__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./cards/CardStyle6 */ "./components/xamin/cards/CardStyle6/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle6", function() { return _cards_CardStyle6__WEBPACK_IMPORTED_MODULE_20__["default"]; });

/* harmony import */ var _cards_CardStyle7__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cards/CardStyle7 */ "./components/xamin/cards/CardStyle7/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle7", function() { return _cards_CardStyle7__WEBPACK_IMPORTED_MODULE_21__["default"]; });

/* harmony import */ var _cards_CardStyle8__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./cards/CardStyle8 */ "./components/xamin/cards/CardStyle8/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle8", function() { return _cards_CardStyle8__WEBPACK_IMPORTED_MODULE_22__["default"]; });

/* harmony import */ var _cards_CardStyle9__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cards/CardStyle9 */ "./components/xamin/cards/CardStyle9/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle9", function() { return _cards_CardStyle9__WEBPACK_IMPORTED_MODULE_23__["default"]; });

/* harmony import */ var _cards_CardStyle10__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./cards/CardStyle10 */ "./components/xamin/cards/CardStyle10/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle10", function() { return _cards_CardStyle10__WEBPACK_IMPORTED_MODULE_24__["default"]; });

/* harmony import */ var _cards_CardStyle11__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./cards/CardStyle11 */ "./components/xamin/cards/CardStyle11/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle11", function() { return _cards_CardStyle11__WEBPACK_IMPORTED_MODULE_25__["default"]; });

/* harmony import */ var _cards_CardStyle13__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./cards/CardStyle13 */ "./components/xamin/cards/CardStyle13/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle13", function() { return _cards_CardStyle13__WEBPACK_IMPORTED_MODULE_26__["default"]; });

/* harmony import */ var _cards_CardStyle12__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./cards/CardStyle12 */ "./components/xamin/cards/CardStyle12/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CardStyle12", function() { return _cards_CardStyle12__WEBPACK_IMPORTED_MODULE_27__["default"]; });

/* harmony import */ var _TestimonialCards_CardStyle1__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./TestimonialCards/CardStyle1 */ "./components/xamin/TestimonialCards/CardStyle1/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TestimonialStyle1", function() { return _TestimonialCards_CardStyle1__WEBPACK_IMPORTED_MODULE_28__["default"]; });

/* harmony import */ var _Portfolio__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./Portfolio */ "./components/xamin/Portfolio/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PortfolioItem", function() { return _Portfolio__WEBPACK_IMPORTED_MODULE_29__["default"]; });

/* harmony import */ var _MasonryItem__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./MasonryItem */ "./components/xamin/MasonryItem/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MasonryItem", function() { return _MasonryItem__WEBPACK_IMPORTED_MODULE_30__["default"]; });

/* harmony import */ var _ReplyForm__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./ReplyForm */ "./components/xamin/ReplyForm/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ReplyForm", function() { return _ReplyForm__WEBPACK_IMPORTED_MODULE_31__["default"]; });

/* harmony import */ var _ScrollTop__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./ScrollTop */ "./components/xamin/ScrollTop/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ScrollTop", function() { return _ScrollTop__WEBPACK_IMPORTED_MODULE_32__["default"]; });

/* harmony import */ var _ContactUs__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./ContactUs */ "./components/xamin/ContactUs/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ContactUs", function() { return _ContactUs__WEBPACK_IMPORTED_MODULE_33__["default"]; });

/* harmony import */ var _RevolutionSlider__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./RevolutionSlider */ "./components/xamin/RevolutionSlider/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RevSlider", function() { return _RevolutionSlider__WEBPACK_IMPORTED_MODULE_34__["default"]; });

/* harmony import */ var _xamin_partials_footers_FooterMain__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ../xamin/partials/footers/FooterMain */ "./components/xamin/partials/footers/FooterMain/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterMain", function() { return _xamin_partials_footers_FooterMain__WEBPACK_IMPORTED_MODULE_35__["default"]; });

/* harmony import */ var _xamin_footerComponents_FooterLogo__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ../xamin/footerComponents/FooterLogo */ "./components/xamin/footerComponents/FooterLogo/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterLogo", function() { return _xamin_footerComponents_FooterLogo__WEBPACK_IMPORTED_MODULE_36__["default"]; });

/* harmony import */ var _xamin_footerComponents_FooterAddress__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ../xamin/footerComponents/FooterAddress */ "./components/xamin/footerComponents/FooterAddress/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterAddress", function() { return _xamin_footerComponents_FooterAddress__WEBPACK_IMPORTED_MODULE_37__["default"]; });

/* harmony import */ var _xamin_footerComponents_FooterLinks__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! ../xamin/footerComponents/FooterLinks */ "./components/xamin/footerComponents/FooterLinks/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "FooterLinks", function() { return _xamin_footerComponents_FooterLinks__WEBPACK_IMPORTED_MODULE_38__["default"]; });

/* harmony import */ var _SocialIcon__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! ./SocialIcon */ "./components/xamin/SocialIcon/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocialIcon", function() { return _SocialIcon__WEBPACK_IMPORTED_MODULE_39__["default"]; });

/* harmony import */ var _WaveBox__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! ./WaveBox */ "./components/xamin/WaveBox/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "WaveBox", function() { return _WaveBox__WEBPACK_IMPORTED_MODULE_40__["default"]; });

/* harmony import */ var _Carousel__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! ./Carousel */ "./components/xamin/Carousel/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return _Carousel__WEBPACK_IMPORTED_MODULE_41__["default"]; });

/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! ./Accordion */ "./components/xamin/Accordion/index.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return _Accordion__WEBPACK_IMPORTED_MODULE_42__["default"]; });

// Import All sofbox component here...

 // Helper components for the Header or Navigation...





 // CheckBoxList

 //Sections component








 //Banner Style

 //Card Section












 // Testimonial Card Styles

 // Portfolio





 // Revolution Slider

 //Address











/***/ }),

/***/ "./components/xamin/sections/SectionLeftImage/index.js":
/*!*************************************************************!*\
  !*** ./components/xamin/sections/SectionLeftImage/index.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../index */ "./components/xamin/index.js");
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/sections/SectionLeftImage/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Index = function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("section", {
    className: props.sectionClass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, __jsx("div", {
    className: "row iq-how-it-works",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    },
    __self: this
  }, props.mainTitle || props.mainSubTitle || props.mainDescription ? __jsx("div", {
    className: "col-sm-12",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: this
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
    __self: this
  })) : '', __jsx("div", {
    className: "fadeInUp col-sm-12 col-lg-6 col-md-6 wow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
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
    __self: this
  })), __jsx("div", {
    className: "iq-mb-30 fadeInUp col-sm-12 col-lg-6 col-md-6 wow align-items-center",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: this
  }, props.title || props.subTitle || props.description ? __jsx("div", {
    className: "title-box wow fadeInUp text-left",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("span", {
    className: "title-design",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: this
  }, props.title), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }, props.subTitle), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, props.description)) : '', props.children)))));
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/components/xamin/sections/SectionTitle/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Index = function Index(props) {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, __jsx("div", {
    className: props.className,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, __jsx("span", {
    className: props.spanclass,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, props.link), __jsx("h2", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, props.title), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.subTitle)));
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
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);


var WOW;

if (true) {
  window.$ = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;
  window.jQuery = jquery__WEBPACK_IMPORTED_MODULE_1___default.a;
  __webpack_require__.e(/*! import() */ 6).then(__webpack_require__.t.bind(null, /*! ../static/assets/js/appear */ "./static/assets/js/appear.js", 7));
  __webpack_require__.e(/*! import() */ 3).then(__webpack_require__.t.bind(null, /*! ../static/assets/revslider/js/revolution.tools.min */ "./static/assets/revslider/js/revolution.tools.min.js", 7));
  __webpack_require__.e(/*! import() */ 5).then(__webpack_require__.t.bind(null, /*! ../static/assets/revslider/js/rs6.min */ "./static/assets/revslider/js/rs6.min.js", 7));
  __webpack_require__.e(/*! import() */ 4).then(__webpack_require__.t.bind(null, /*! ../static/assets/js/isotope.pkgd.min */ "./static/assets/js/isotope.pkgd.min.js", 7));
  __webpack_require__.e(/*! import() */ 2).then(__webpack_require__.t.bind(null, /*! ../static/assets/js/Chart.min */ "./static/assets/js/Chart.min.js", 7));
  __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.t.bind(null, /*! ../static/assets/js/Chart.bundle.min */ "./static/assets/js/Chart.bundle.min.js", 7));

  __webpack_require__(/*! popper.js */ "./node_modules/popper.js/dist/esm/popper.js");

  __webpack_require__(/*! bootstrap */ "./node_modules/bootstrap/dist/js/bootstrap.js");

  WOW = __webpack_require__(/*! wowjs */ "./node_modules/wowjs/dist/wow.js");

  __webpack_require__(/*! jarallax/dist/jarallax.min */ "./node_modules/jarallax/dist/jarallax.min.js");

  __webpack_require__(/*! magnific-popup/dist/jquery.magnific-popup.min */ "./node_modules/magnific-popup/dist/jquery.magnific-popup.min.js");

  __webpack_require__(/*! owl.carousel */ "./node_modules/owl.carousel/dist/owl.carousel.js");
}

var index = function index() {
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
}; // Function for the sticky header...


var stickyHeader = function stickyHeader() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on('scroll', function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).scrollTop() > 100) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('header').addClass('menu-sticky');
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('header').removeClass('menu-sticky');
    }
  });
};

var wowInit = function wowInit() {
  var elementExist = checkElement('class', 'wow');

  if (elementExist) {
    new WOW.WOW({
      boxClass: 'wow',
      animateClass: 'animated',
      offset: 0,
      live: false
    }).init();
  }
}; // Function for the Loader...


var loaderInit = function loaderInit() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#load').fadeOut();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#loading').delay(1000).fadeOut('slow');
};

var initJarallex = function initJarallex() {
  jarallax(document.querySelectorAll('.jarallax'), {
    speed: 0.2
  });
}; // Function for toggle dropdown...


var toggleDropdown = function toggleDropdown() {
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

var owlCarousalInit = function owlCarousalInit() {
  var elementExist = checkElement('class', 'owl-carousel');

  if (elementExist) {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()('.owl-carousel').each(function () {
      var $carousel = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
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

var backToTop = function backToTop() {
  jquery__WEBPACK_IMPORTED_MODULE_1___default()('#back-to-top').fadeOut();
  jquery__WEBPACK_IMPORTED_MODULE_1___default()(window).on("scroll", function () {
    if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).scrollTop() > 250) {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#back-to-top').fadeIn(1400);
    } else {
      jquery__WEBPACK_IMPORTED_MODULE_1___default()('#back-to-top').fadeOut(400);
    }
  });
};

var accordion = function accordion() {
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

var checkElement = function checkElement(type, element) {
  var found = false;
  var elements;

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

var progressBar = function progressBar() {
  var elementExist = checkElement('class', 'iq-progress-bar');

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

var magnific = function magnific() {
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

var counterJs = function counterJs() {
  //-- Plugin implementation
  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn.countTo = function (options) {
    return this.each(function () {
      //-- Arrange
      var FRAME_RATE = 60; // Predefine default frame rate to be 60fps

      var $el = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
      var countFrom = 0;

      var countTo = _babel_runtime_corejs2_core_js_parse_int__WEBPACK_IMPORTED_MODULE_0___default()($el.attr('data-to'));

      var countSpeed = $el.attr('data-speed'); // Number increment per second
      //-- Action

      var rafId;
      var increment;
      var currentCount = countFrom;

      var countAction = function countAction() {
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

var revslider_showDoubleJqueryError = function revslider_showDoubleJqueryError(sliderID) {// var err = "<div class='rs_error_message_box'>";
  // err += "<div class='rs_error_message_oops'>Oops...</div>";
  // err += "<div class='rs_error_message_content'>";
  // err += "You have some jquery.js library include that comes after the Slider Revolution files js inclusion.<br>";
  // err += "To fix this, you can:<br>&nbsp;&nbsp;&nbsp; 1. Set 'Module General Options' ->  'jQuery & OutPut Filters' -> 'Put JS to Body' to on";
  // err += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jQuery.js inclusion and remove it";
  // err += "</div>";
  // err += "</div>";
  // jQuery(sliderID).show().html(err);
};

var initRevSlider = function initRevSlider() {
  var revapi1, tpj;
  tpj = jQuery.noConflict();

  if (tpj("#rev_slider_4_1").revolution == undefined) {
    revslider_showDoubleJqueryError("#rev_slider_4_1");
  } else {
    revapi1 = tpj("#rev_slider_4_1").show().revolution({
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

  var revapi2;

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

  var revapi3;

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
};

var isotope = function isotope() {
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

var chartInit = function chartInit() {
  if (jquery__WEBPACK_IMPORTED_MODULE_1___default()("#data-analytics-pie-chart").length) {
    var data = {
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

var pillTab = function pillTab() {
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
  }]
}, {
  href: '/about-us-1',
  title: 'About'
}, {
  href: '/services',
  title: 'Service',
  submenu: [{
    href: '/data-analytics',
    title: 'Data Analytics'
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
  href: '#',
  title: 'Managed Analytics'
}, {
  href: '#',
  title: 'Big Data Services'
}, {
  href: '#',
  title: 'Data Science Consulting'
}, {
  href: '#',
  title: 'Business Intelligence'
}, {
  href: '#',
  title: 'Data Visualization'
}, {
  href: '#',
  title: 'Data Management'
}, {
  href: '#',
  title: 'Artificial Intelligence'
}];


/***/ }),

/***/ "./constants/portfolio-item.js":
/*!*************************************!*\
  !*** ./constants/portfolio-item.js ***!
  \*************************************/
/*! exports provided: Item */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Item", function() { return Item; });
var Item = [{
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


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
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
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/head */ "./node_modules/next/dist/next-server/lib/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _static_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../static/assets/images/logo.png */ "./static/assets/images/logo.png");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../static/style.css */ "./static/style.css");
/* harmony import */ var _static_style_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_static_style_css__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _config_plugins__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../config/plugins */ "./config/plugins.js");
/* harmony import */ var _components_xamin__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/xamin */ "./components/xamin/index.js");
/* harmony import */ var _components_home_section_landing_page1_revslider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/home-section/landing-page1/revslider */ "./components/home-section/landing-page1/revslider/index.js");
/* harmony import */ var _components_home_section_landing_page1_about__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../components/home-section/landing-page1/about */ "./components/home-section/landing-page1/about/index.js");
/* harmony import */ var _components_home_section_landing_page1_aboutworks__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/home-section/landing-page1/aboutworks */ "./components/home-section/landing-page1/aboutworks/index.js");
/* harmony import */ var _components_home_section_landing_page1_howworks__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/home-section/landing-page1/howworks */ "./components/home-section/landing-page1/howworks/index.js");
/* harmony import */ var _components_home_section_landing_page1_services__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../components/home-section/landing-page1/services */ "./components/home-section/landing-page1/services/index.js");
/* harmony import */ var _components_home_section_landing_page1_projects__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../components/home-section/landing-page1/projects */ "./components/home-section/landing-page1/projects/index.js");
/* harmony import */ var _components_home_section_landing_page1_customers__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../components/home-section/landing-page1/customers */ "./components/home-section/landing-page1/customers/index.js");
/* harmony import */ var _components_home_section_landing_page1_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../components/home-section/landing-page1/service */ "./components/home-section/landing-page1/service/index.js");
/* harmony import */ var _components_home_section_landing_page1_awards__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../components/home-section/landing-page1/awards */ "./components/home-section/landing-page1/awards/index.js");
/* harmony import */ var _components_home_section_landing_page1_blog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../components/home-section/landing-page1/blog */ "./components/home-section/landing-page1/blog/index.js");
/* harmony import */ var _components_home_section_landing_page1_footer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/home-section/landing-page1/footer */ "./components/home-section/landing-page1/footer/index.js");





var _jsxFileName = "/var/www/html/REATProjects_LIVE/xamin-react/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement;

 // Import asset...../

 // Import for custom styles...

 // Import for the custom plugins...

 // Import for the Xamin components...

 //Components













var Index =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Index, _React$Component);

  function Index(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Index);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Index).call(this, props));
    _this.state = {
      activeMenu: ['#iq-home', '/landing-page1']
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Index, [{
    key: "componentDidMount",
    value: function componentDidMount(props) {
      setTimeout(function () {
        Object(_config_plugins__WEBPACK_IMPORTED_MODULE_9__["index"])();
      }, 500);
    }
  }, {
    key: "render",
    value: function render() {
      return __jsx(react__WEBPACK_IMPORTED_MODULE_5___default.a.Fragment, null, __jsx(next_head__WEBPACK_IMPORTED_MODULE_6___default.a, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, __jsx("title", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("meta", {
        name: "keywords",
        content: "HTML5 Template",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 59
        },
        __self: this
      }), __jsx("meta", {
        name: "description",
        content: "Xamin - Data Science & Analytics HTML5 Template",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
        },
        __self: this
      }), __jsx("meta", {
        name: "author",
        content: "http://iqonic.design/",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 61
        },
        __self: this
      }), __jsx("link", {
        rel: "shortcut icon",
        href: "./static/assets/images/favicon.ico",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      })), __jsx(_components_xamin__WEBPACK_IMPORTED_MODULE_10__["Loader"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }), __jsx(_components_xamin__WEBPACK_IMPORTED_MODULE_10__["HeaderStyle"], {
        className: "style-one",
        activeMenu: this.state.activeMenu,
        logoImg: _static_assets_images_logo_png__WEBPACK_IMPORTED_MODULE_7__["default"],
        buttonSection: __jsx("a", {
          className: "button bt-black pull-right",
          href: "#",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 74
          },
          __self: this
        }, "Download"),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 70
        },
        __self: this
      }), __jsx(_components_home_section_landing_page1_revslider__WEBPACK_IMPORTED_MODULE_11__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        },
        __self: this
      }), __jsx("div", {
        className: "main-content",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, __jsx(_components_home_section_landing_page1_about__WEBPACK_IMPORTED_MODULE_12__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), __jsx(_components_home_section_landing_page1_aboutworks__WEBPACK_IMPORTED_MODULE_13__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 82
        },
        __self: this
      }), __jsx(_components_home_section_landing_page1_howworks__WEBPACK_IMPORTED_MODULE_14__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }), __jsx(_components_home_section_landing_page1_services__WEBPACK_IMPORTED_MODULE_15__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }), __jsx(_components_home_section_landing_page1_customers__WEBPACK_IMPORTED_MODULE_17__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }), __jsx(_components_home_section_landing_page1_projects__WEBPACK_IMPORTED_MODULE_16__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }), __jsx(_components_home_section_landing_page1_service__WEBPACK_IMPORTED_MODULE_18__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }), __jsx(_components_home_section_landing_page1_awards__WEBPACK_IMPORTED_MODULE_19__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }), __jsx(_components_home_section_landing_page1_blog__WEBPACK_IMPORTED_MODULE_20__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      })), __jsx(_components_xamin__WEBPACK_IMPORTED_MODULE_10__["ScrollTop"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }), __jsx(_components_home_section_landing_page1_footer__WEBPACK_IMPORTED_MODULE_21__["default"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      }));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ })

})
//# sourceMappingURL=index.js.768d79b2f22c346907b8.hot-update.js.map