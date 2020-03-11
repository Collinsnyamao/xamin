import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _cfd50c42 = () => interopDefault(import('../pages/about-1/index.vue' /* webpackChunkName: "pages/about-1/index" */))
const _2cfa2ca0 = () => interopDefault(import('../pages/about-2/index.vue' /* webpackChunkName: "pages/about-2/index" */))
const _3ca8a620 = () => interopDefault(import('../pages/artificial-intelligence/index.vue' /* webpackChunkName: "pages/artificial-intelligence/index" */))
const _262f74fc = () => interopDefault(import('../pages/big-data-services/index.vue' /* webpackChunkName: "pages/big-data-services/index" */))
const _64fe59ec = () => interopDefault(import('../pages/blog/index.vue' /* webpackChunkName: "pages/blog/index" */))
const _34b6bb3f = () => interopDefault(import('../pages/blog-details/index.vue' /* webpackChunkName: "pages/blog-details/index" */))
const _167798be = () => interopDefault(import('../pages/blog-left-sidebar-grid-1/index.vue' /* webpackChunkName: "pages/blog-left-sidebar-grid-1/index" */))
const _a9476902 = () => interopDefault(import('../pages/blog-left-sidebar-grid-2/index.vue' /* webpackChunkName: "pages/blog-left-sidebar-grid-2/index" */))
const _1401271a = () => interopDefault(import('../pages/blog-one-column-grid/index.vue' /* webpackChunkName: "pages/blog-one-column-grid/index" */))
const _ee9bbc76 = () => interopDefault(import('../pages/blog-right-sidebar-grid-1/index.vue' /* webpackChunkName: "pages/blog-right-sidebar-grid-1/index" */))
const _1d96d486 = () => interopDefault(import('../pages/blog-right-sidebar-grid-2/index.vue' /* webpackChunkName: "pages/blog-right-sidebar-grid-2/index" */))
const _4882cdaa = () => interopDefault(import('../pages/blog-three-column-grid/index.vue' /* webpackChunkName: "pages/blog-three-column-grid/index" */))
const _4ceeefd9 = () => interopDefault(import('../pages/blog-two-column-grid/index.vue' /* webpackChunkName: "pages/blog-two-column-grid/index" */))
const _3487309a = () => interopDefault(import('../pages/business-intelligence/index.vue' /* webpackChunkName: "pages/business-intelligence/index" */))
const _789178ba = () => interopDefault(import('../pages/careers/index.vue' /* webpackChunkName: "pages/careers/index" */))
const _8378d594 = () => interopDefault(import('../pages/clients/index.vue' /* webpackChunkName: "pages/clients/index" */))
const _664e645a = () => interopDefault(import('../pages/contact-us/index.vue' /* webpackChunkName: "pages/contact-us/index" */))
const _cb8909ea = () => interopDefault(import('../pages/data-analytics/index.vue' /* webpackChunkName: "pages/data-analytics/index" */))
const _5a3cfcf4 = () => interopDefault(import('../pages/data-management/index.vue' /* webpackChunkName: "pages/data-management/index" */))
const _07f02330 = () => interopDefault(import('../pages/data-science-consulting/index.vue' /* webpackChunkName: "pages/data-science-consulting/index" */))
const _75848229 = () => interopDefault(import('../pages/data-visualization/index.vue' /* webpackChunkName: "pages/data-visualization/index" */))
const _56fe9351 = () => interopDefault(import('../pages/landing-page-1/index.vue' /* webpackChunkName: "pages/landing-page-1/index" */))
const _c5ab7456 = () => interopDefault(import('../pages/landing-page-10/index.vue' /* webpackChunkName: "pages/landing-page-10/index" */))
const _320ef896 = () => interopDefault(import('../pages/landing-page-11/index.vue' /* webpackChunkName: "pages/landing-page-11/index" */))
const _283973dc = () => interopDefault(import('../pages/landing-page-2/index.vue' /* webpackChunkName: "pages/landing-page-2/index" */))
const _fe700e5a = () => interopDefault(import('../pages/landing-page-3/index.vue' /* webpackChunkName: "pages/landing-page-3/index" */))
const _15acab94 = () => interopDefault(import('../pages/landing-page-4/index.vue' /* webpackChunkName: "pages/landing-page-4/index" */))
const _aadd4356 = () => interopDefault(import('../pages/landing-page-5/index.vue' /* webpackChunkName: "pages/landing-page-5/index" */))
const _3f761116 = () => interopDefault(import('../pages/landing-page-6/index.vue' /* webpackChunkName: "pages/landing-page-6/index" */))
const _574a7852 = () => interopDefault(import('../pages/landing-page-7/index.vue' /* webpackChunkName: "pages/landing-page-7/index" */))
const _693f7698 = () => interopDefault(import('../pages/landing-page-8/index.vue' /* webpackChunkName: "pages/landing-page-8/index" */))
const _03b7ad4e = () => interopDefault(import('../pages/landing-page-9/index.vue' /* webpackChunkName: "pages/landing-page-9/index" */))
const _1c1c3b74 = () => interopDefault(import('../pages/managed-analytics/index.vue' /* webpackChunkName: "pages/managed-analytics/index" */))
const _39447a98 = () => interopDefault(import('../pages/masonry-2/index.vue' /* webpackChunkName: "pages/masonry-2/index" */))
const _63ada54e = () => interopDefault(import('../pages/masonry-3/index.vue' /* webpackChunkName: "pages/masonry-3/index" */))
const _374d006a = () => interopDefault(import('../pages/masonry-no-space/index.vue' /* webpackChunkName: "pages/masonry-no-space/index" */))
const _9a0673b4 = () => interopDefault(import('../pages/our-team/index.vue' /* webpackChunkName: "pages/our-team/index" */))
const _7c710c5b = () => interopDefault(import('../pages/portfolio-2/index.vue' /* webpackChunkName: "pages/portfolio-2/index" */))
const _1155bf1c = () => interopDefault(import('../pages/portfolio-3/index.vue' /* webpackChunkName: "pages/portfolio-3/index" */))
const _b38b1c46 = () => interopDefault(import('../pages/portfolio-4/index.vue' /* webpackChunkName: "pages/portfolio-4/index" */))
const _3b1f249e = () => interopDefault(import('../pages/portfolio-5/index.vue' /* webpackChunkName: "pages/portfolio-5/index" */))
const _52315b5e = () => interopDefault(import('../pages/portfolio-detail/index.vue' /* webpackChunkName: "pages/portfolio-detail/index" */))
const _14df0572 = () => interopDefault(import('../pages/portfolio-no-space/index.vue' /* webpackChunkName: "pages/portfolio-no-space/index" */))
const _64ccca46 = () => interopDefault(import('../pages/services/index.vue' /* webpackChunkName: "pages/services/index" */))
const _7f3b8f80 = () => interopDefault(import('../pages/about-2/about-2.vue' /* webpackChunkName: "pages/about-2/about-2" */))
const _7ad99f30 = () => interopDefault(import('../pages/landing-page-1/about-1.vue' /* webpackChunkName: "pages/landing-page-1/about-1" */))
const _7ae7b6b1 = () => interopDefault(import('../pages/landing-page-1/about-2.vue' /* webpackChunkName: "pages/landing-page-1/about-2" */))
const _1e16f77d = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _2f565291 = () => interopDefault(import('../pages/_theme/about-1.vue' /* webpackChunkName: "pages/_theme/about-1" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'current-menu-item',
  linkExactActiveClass: 'current-menu-item',
  scrollBehavior,

  routes: [{
    path: "/about-1",
    component: _cfd50c42,
    name: "about-1"
  }, {
    path: "/about-2",
    component: _2cfa2ca0,
    name: "about-2"
  }, {
    path: "/artificial-intelligence",
    component: _3ca8a620,
    name: "artificial-intelligence"
  }, {
    path: "/big-data-services",
    component: _262f74fc,
    name: "big-data-services"
  }, {
    path: "/blog",
    component: _64fe59ec,
    name: "blog"
  }, {
    path: "/blog-details",
    component: _34b6bb3f,
    name: "blog-details"
  }, {
    path: "/blog-left-sidebar-grid-1",
    component: _167798be,
    name: "blog-left-sidebar-grid-1"
  }, {
    path: "/blog-left-sidebar-grid-2",
    component: _a9476902,
    name: "blog-left-sidebar-grid-2"
  }, {
    path: "/blog-one-column-grid",
    component: _1401271a,
    name: "blog-one-column-grid"
  }, {
    path: "/blog-right-sidebar-grid-1",
    component: _ee9bbc76,
    name: "blog-right-sidebar-grid-1"
  }, {
    path: "/blog-right-sidebar-grid-2",
    component: _1d96d486,
    name: "blog-right-sidebar-grid-2"
  }, {
    path: "/blog-three-column-grid",
    component: _4882cdaa,
    name: "blog-three-column-grid"
  }, {
    path: "/blog-two-column-grid",
    component: _4ceeefd9,
    name: "blog-two-column-grid"
  }, {
    path: "/business-intelligence",
    component: _3487309a,
    name: "business-intelligence"
  }, {
    path: "/careers",
    component: _789178ba,
    name: "careers"
  }, {
    path: "/clients",
    component: _8378d594,
    name: "clients"
  }, {
    path: "/contact-us",
    component: _664e645a,
    name: "contact-us"
  }, {
    path: "/data-analytics",
    component: _cb8909ea,
    name: "data-analytics"
  }, {
    path: "/data-management",
    component: _5a3cfcf4,
    name: "data-management"
  }, {
    path: "/data-science-consulting",
    component: _07f02330,
    name: "data-science-consulting"
  }, {
    path: "/data-visualization",
    component: _75848229,
    name: "data-visualization"
  }, {
    path: "/landing-page-1",
    component: _56fe9351,
    name: "landing-page-1"
  }, {
    path: "/landing-page-10",
    component: _c5ab7456,
    name: "landing-page-10"
  }, {
    path: "/landing-page-11",
    component: _320ef896,
    name: "landing-page-11"
  }, {
    path: "/landing-page-2",
    component: _283973dc,
    name: "landing-page-2"
  }, {
    path: "/landing-page-3",
    component: _fe700e5a,
    name: "landing-page-3"
  }, {
    path: "/landing-page-4",
    component: _15acab94,
    name: "landing-page-4"
  }, {
    path: "/landing-page-5",
    component: _aadd4356,
    name: "landing-page-5"
  }, {
    path: "/landing-page-6",
    component: _3f761116,
    name: "landing-page-6"
  }, {
    path: "/landing-page-7",
    component: _574a7852,
    name: "landing-page-7"
  }, {
    path: "/landing-page-8",
    component: _693f7698,
    name: "landing-page-8"
  }, {
    path: "/landing-page-9",
    component: _03b7ad4e,
    name: "landing-page-9"
  }, {
    path: "/managed-analytics",
    component: _1c1c3b74,
    name: "managed-analytics"
  }, {
    path: "/masonry-2",
    component: _39447a98,
    name: "masonry-2"
  }, {
    path: "/masonry-3",
    component: _63ada54e,
    name: "masonry-3"
  }, {
    path: "/masonry-no-space",
    component: _374d006a,
    name: "masonry-no-space"
  }, {
    path: "/our-team",
    component: _9a0673b4,
    name: "our-team"
  }, {
    path: "/portfolio-2",
    component: _7c710c5b,
    name: "portfolio-2"
  }, {
    path: "/portfolio-3",
    component: _1155bf1c,
    name: "portfolio-3"
  }, {
    path: "/portfolio-4",
    component: _b38b1c46,
    name: "portfolio-4"
  }, {
    path: "/portfolio-5",
    component: _3b1f249e,
    name: "portfolio-5"
  }, {
    path: "/portfolio-detail",
    component: _52315b5e,
    name: "portfolio-detail"
  }, {
    path: "/portfolio-no-space",
    component: _14df0572,
    name: "portfolio-no-space"
  }, {
    path: "/services",
    component: _64ccca46,
    name: "services"
  }, {
    path: "/about-2/about-2",
    component: _7f3b8f80,
    name: "about-2-about-2"
  }, {
    path: "/landing-page-1/about-1",
    component: _7ad99f30,
    name: "landing-page-1-about-1"
  }, {
    path: "/landing-page-1/about-2",
    component: _7ae7b6b1,
    name: "landing-page-1-about-2"
  }, {
    path: "/",
    component: _1e16f77d,
    name: "index"
  }, {
    path: "/:theme/about-1",
    component: _2f565291,
    name: "theme-about-1"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
