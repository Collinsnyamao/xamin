import Vue from 'vue'

import {
  getMatchedComponentsInstances,
  promisify,
  globalHandleError
} from './utils'

import NuxtLoading from './components/nuxt-loading.vue'

import '../node_modules/bootstrap/dist/css/bootstrap.css'

import '../node_modules/bootstrap-vue/dist/bootstrap-vue.css'

import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import '../node_modules/@fortawesome/fontawesome-free/css/all.min.css'

import '../node_modules/animate.css/animate.min.css'

import '../assets/app/app.css'

import '../node_modules/animate.css/animate.min.css'

import '../node_modules/owl.carousel/dist/assets/owl.carousel.css'

import '../node_modules/owl.carousel/dist/assets/owl.theme.default.css'

import '../assets/css/Chart.min.css'

import _2f5b4a35 from '../layouts/AboutUs.vue'
import _2d1344b8 from '../layouts/Blog.vue'
import _6f6c098b from '../layouts/default.vue'
import _69661ac1 from '../layouts/LandingPage1.vue'
import _794584e2 from '../layouts/LandingPage10.vue'
import _794584e0 from '../layouts/LandingPage11.vue'
import _69661ac2 from '../layouts/LandingPage2.vue'
import _69661ac3 from '../layouts/LandingPage3.vue'
import _69661ac4 from '../layouts/LandingPage4.vue'
import _69661ac5 from '../layouts/LandingPage5.vue'
import _69661ac6 from '../layouts/LandingPage6.vue'
import _69661ac7 from '../layouts/LandingPage7.vue'
import _69661ac8 from '../layouts/LandingPage8.vue'
import _69661ac9 from '../layouts/LandingPage9.vue'
import _59ca956d from '../layouts/OurCases.vue'
import _76157d6e from '../layouts/Pages.vue'
import _a484ab18 from '../layouts/Services.vue'

const layouts = { "_AboutUs": _2f5b4a35,"_Blog": _2d1344b8,"_default": _6f6c098b,"_LandingPage1": _69661ac1,"_LandingPage10": _794584e2,"_LandingPage11": _794584e0,"_LandingPage2": _69661ac2,"_LandingPage3": _69661ac3,"_LandingPage4": _69661ac4,"_LandingPage5": _69661ac5,"_LandingPage6": _69661ac6,"_LandingPage7": _69661ac7,"_LandingPage8": _69661ac8,"_LandingPage9": _69661ac9,"_OurCases": _59ca956d,"_Pages": _76157d6e,"_Services": _a484ab18 }

export default {
  head: {"title":"xamin-vue","meta":[{"charset":"utf-8"},{"name":"viewport","content":"width=device-width, initial-scale=1"},{"hid":"description","name":"description","content":"Xamin - Data Science & Analytics HTML Template"},{"hid":"mobile-web-app-capable","name":"mobile-web-app-capable","content":"yes"},{"hid":"apple-mobile-web-app-title","name":"apple-mobile-web-app-title","content":"xamin-vue"},{"hid":"author","name":"author","content":"goldenmace"},{"hid":"theme-color","name":"theme-color","content":"#fff"},{"hid":"og:type","name":"og:type","property":"og:type","content":"website"},{"hid":"og:title","name":"og:title","property":"og:title","content":"xamin-vue"},{"hid":"og:site_name","name":"og:site_name","property":"og:site_name","content":"xamin-vue"},{"hid":"og:description","name":"og:description","property":"og:description","content":"Xamin - Data Science & Analytics HTML Template"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"rel":"manifest","href":"\u002F_nuxt\u002Fmanifest.1ac9f215.json"},{"rel":"shortcut icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_64.1dd3e9.png"},{"rel":"apple-touch-icon","href":"\u002F_nuxt\u002Ficons\u002Ficon_512.1dd3e9.png","sizes":"512x512"}],"style":[],"script":[],"htmlAttrs":{"lang":"en"}},

  render (h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })

    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [layoutEl])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter (el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [templateEl])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [
      loadingEl,

      transitionEl
    ])
  },

  data: () => ({
    isOnline: true,

    layout: null,
    layoutName: ''
  }),

  beforeCreate () {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created () {
    // Add this.$nuxt in child instances
    Vue.prototype.$nuxt = this
    // add to window so we can listen when ready
    if (process.client) {
      window.$nuxt = this

      this.refreshOnlineStatus()
      // Setup the listeners
      window.addEventListener('online', this.refreshOnlineStatus)
      window.addEventListener('offline', this.refreshOnlineStatus)
    }
    // Add $nuxt.error()
    this.error = this.nuxt.error
    // Add $nuxt.context
    this.context = this.$options.context
  },

  mounted () {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline () {
      return !this.isOnline
    }
  },

  methods: {
    refreshOnlineStatus () {
      if (process.client) {
        if (typeof window.navigator.onLine === 'undefined') {
          // If the browser doesn't support connection status reports
          // assume that we are online because most apps' only react
          // when they now that the connection has been interrupted
          this.isOnline = true
        } else {
          this.isOnline = window.navigator.onLine
        }
      }
    },

    async refresh () {
      const pages = getMatchedComponentsInstances(this.$route)

      if (!pages.length) {
        return
      }
      this.$loading.start()

      const promises = pages.map((page) => {
        const p = []

        if (page.$options.fetch) {
          p.push(promisify(page.$options.fetch, this.context))
        }

        if (page.$options.asyncData) {
          p.push(
            promisify(page.$options.asyncData, this.context)
              .then((newData) => {
                for (const key in newData) {
                  Vue.set(page.$data, key, newData[key])
                }
              })
          )
        }

        return Promise.all(p)
      })
      try {
        await Promise.all(promises)
      } catch (error) {
        this.$loading.fail()
        globalHandleError(error)
        this.error(error)
      }
      this.$loading.finish()
    },

    errorChanged () {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) {
          this.$loading.fail()
        }
        if (this.$loading.finish) {
          this.$loading.finish()
        }
      }
    },

    setLayout (layout) {
      if(layout && typeof layout !== 'string') {
        throw new Error('[nuxt] Avoid using non-string value as layout property.')
      }

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout (layout) {
      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      return Promise.resolve(layouts['_' + layout])
    }
  },

  components: {
    NuxtLoading
  }
}
