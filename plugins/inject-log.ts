import { Plugin } from '@nuxt/types'
import moment from 'moment'

declare module 'vue/types/vue' {
    // this.$logger inside Vue components
    interface Vue {
      $logger(...args: any): void
    }
}

declare module '@nuxt/types' {
    // nuxtContext.app.$logger inside asyncData, fetch, plugins, middleware, nuxtServerInit
    interface NuxtAppOptions {
      $logger(...args: any): void
    }
    // nuxtContext.$logger
    interface Context {
      $logger(...args: any): void
    }
}

declare module 'vuex/types/index' {
    // this.$logger inside Vuex stores
    interface Store<S> {
      $logger(...args: any): void
    }
}

const logPlugin: Plugin = (_, inject) => {
  inject('logger', (...args: any) => {
    if (process.env.NODE_ENV !== 'production') {
      console.log(moment().format('YYYY-MM-DD HH:mm:ss'), args)
    }
  })
}

export default logPlugin
