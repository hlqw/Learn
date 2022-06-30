import Vue from 'vue'
import NuxtLoading from './components/nuxt-loading.vue'
import NuxtBuildIndicator from './components/nuxt-build-indicator'

import '../src/global.less'

import '../src/static/reset.css'

import '../src/static/base.less'

import _6f6c098b from '../src/layouts/default.vue'

const layouts = { "_default": _6f6c098b }

export default {
  head: {"title":"‎","meta":[{"name":"viewport","content":"width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no, viewport-fit=cover"},{"charset":"utf-8"},{"name":"apple-mobile-web-app-title","content":"‎"},{"hid":"description","name":"description","content":""},{"http-equiv":"Cache-Control","content":"no-siteapp"},{"http-equiv":"x-dns-prefetch-control","content":"on"},{"name":"apple-mobile-web-app-capable","content":"yes"},{"name":"apple-mobile-web-app-status-bar-style","content":"black-translucent"},{"name":"format-detection","content":"telephone=no,email=no,address=no"},{"name":"renderer","content":"webkit"},{"http-equiv":"X-UA-Compatible","content":"IE=edge,chrome=1"},{"name":"HandheldFriendly","content":"true"},{"name":"MobileOptimized","content":"320"},{"name":"screen-orientation","content":"portrait"},{"name":"x5-orientation","content":"portrait"},{"name":"full-screen","content":"yes"},{"name":"x5-fullscreen","content":"yes"},{"name":"browsermode","content":"application"},{"name":"x5-page-mode","content":"app"},{"name":"msapplication-tap-highlight","content":"no"}],"link":[{"rel":"icon","type":"image\u002Fx-icon","href":"\u002Ffavicon.ico"},{"red":"dns-prefetch","href":"\u002F\u002Fstatic.bugthanos.com"}],"style":[],"script":[{"innerHTML":"!function (a,b){function c(){var b=f.getBoundingClientRect().width;b\u002Fi\u003E540&&(b=540*i);var c=b\u002F10;f.style.fontSize=c+\"px\",k.rem=a.rem=c}var d,e=a.document,f=e.documentElement,g=e.querySelector('meta[name=\"viewport\"]'),h=e.querySelector('meta[name=\"flexible\"]'),i=0,j=0,k=b.flexible||(b.flexible={});if(g){console.warn(\"_meta_\");var l=g.getAttribute(\"content\").match(\u002Finitial-scale=([d.]+)\u002F);l&&(j=parseFloat(l[1]),i=parseInt(1\u002Fj))}else if(h){var m=h.getAttribute(\"content\");if(m){var n=m.match(\u002Finitial-dpr=([d.]+)\u002F),o=m.match(\u002Fmaximum-dpr=([d.]+)\u002F);n&&(i=parseFloat(n[1]),j=parseFloat((1\u002Fi).toFixed(2))),o&&(i=parseFloat(o[1]),j=parseFloat((1\u002Fi).toFixed(2)))}}if(!i&&!j){var p=(a.navigator.appVersion.match(\u002Fandroid\u002Fgi),a.navigator.appVersion.match(\u002Fiphone\u002Fgi)),q=a.devicePixelRatio;i=p?q\u003E=3&&(!i||i\u003E=3)?3:q\u003E=2&&(!i||i\u003E=2)?2:1:1,j=1\u002Fi}if(f.setAttribute(\"data-dpr\",i),!g)if(g=e.createElement(\"meta\"),g.setAttribute(\"name\",\"viewport\"),g.setAttribute(\"content\",\"initial-scale=\"+j+\", maximum-scale=\"+j+\", minimum-scale=\"+j+\", user-scalable=no\"),f.firstElementChild)f.firstElementChild.appendChild(g);else{var r=e.createElement(\"div\");r.appendChild(g),e.write(r.innerHTML)}a.addEventListener(\"resize\",function(){clearTimeout(d),d=setTimeout(c,300)},!1),a.addEventListener(\"pageshow\",function(a){a.persisted&&(clearTimeout(d),d=setTimeout(c,300))},!1),\"complete\"===e.readyState?e.body.style.fontSize=12*i+\"px\":e.addEventListener(\"DOMContentLoaded\",function(){e.body.style.fontSize=12*i+\"px\"},!1),c(),k.dpr=a.dpr=i,k.refreshRem=c,k.rem2px=function(a){var b=parseFloat(a)*this.rem;return\"string\"==typeof a&&a.match(\u002Frem$\u002F)&&(b+=\"px\"),b},k.px2rem=function(a){var b=parseFloat(a)\u002Fthis.rem;return\"string\"==typeof a&&a.match(\u002Fpx$\u002F)&&(b+=\"rem\"),b}}(window,window.lib||(window.lib={}));","type":"text\u002Fjavascript","charset":"utf-8"},{"type":"text\u002Fjavascript","src":"https:\u002F\u002Fstatic.bugthanos.com\u002Fh5\u002Fjs\u002FJSEncrypt.min.v2.3.1.js"}],"__dangerouslyDisableSanitizers":["script"]},

  render(h, props) {
    const loadingEl = h('NuxtLoading', { ref: 'loading' })
    const layoutEl = h(this.layout || 'nuxt')
    const templateEl = h('div', {
      domProps: {
        id: '__layout'
      },
      key: this.layoutName
    }, [ layoutEl ])

    const transitionEl = h('transition', {
      props: {
        name: 'layout',
        mode: 'out-in'
      },
      on: {
        beforeEnter(el) {
          // Ensure to trigger scroll event after calling scrollBehavior
          window.$nuxt.$nextTick(() => {
            window.$nuxt.$emit('triggerScroll')
          })
        }
      }
    }, [ templateEl ])

    return h('div', {
      domProps: {
        id: '__nuxt'
      }
    }, [loadingEl, h(NuxtBuildIndicator), transitionEl])
  },
  data: () => ({
    isOnline: true,
    layout: null,
    layoutName: ''
  }),
  beforeCreate() {
    Vue.util.defineReactive(this, 'nuxt', this.$options.nuxt)
  },
  created() {
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
  },

  mounted() {
    this.$loading = this.$refs.loading
  },
  watch: {
    'nuxt.err': 'errorChanged'
  },

  computed: {
    isOffline() {
      return !this.isOnline
    }
  },
  methods: {
    refreshOnlineStatus() {
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

    errorChanged() {
      if (this.nuxt.err && this.$loading) {
        if (this.$loading.fail) this.$loading.fail()
        if (this.$loading.finish) this.$loading.finish()
      }
    },

    setLayout(layout) {
      if(layout && typeof layout !== 'string') throw new Error('[nuxt] Avoid using non-string value as layout property.')

      if (!layout || !layouts['_' + layout]) {
        layout = 'default'
      }
      this.layoutName = layout
      this.layout = layouts['_' + layout]
      return this.layout
    },
    loadLayout(layout) {
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
