import { Plugin } from '@nuxt/types'
import UserService from '~/services/user-service'

declare module 'vue/types/vue' {
    // this.$userService inside Vue components
    interface Vue {
      $userService: UserService
    }
}

declare module '@nuxt/types' {
    // nuxtContext.app.$userService inside asyncData, fetch, plugins, middleware, nuxtServerInit
    interface NuxtAppOptions {
      $userService: UserService
    }
    // nuxtContext.$userService
    interface Context {
      $userService: UserService
    }
}

declare module 'vuex/types/index' {
    // this.$userService inside Vuex stores
    interface Store<S> {
      $userService: UserService
    }
}

const servicePlugin: Plugin = ({ $axios }, inject) => {
  inject('userService', new UserService($axios))
}

export default servicePlugin
