
import { NuxtAxiosInstance } from '@nuxtjs/axios'

class BaseService {
    client: NuxtAxiosInstance

    constructor (client: NuxtAxiosInstance) {
      this.client = client
    }
}

export default BaseService
