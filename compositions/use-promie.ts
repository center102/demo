import { ref } from '@nuxtjs/composition-api'

export const usePromise = (executeFunction: Function) => {
  const loading = ref(false)
  const error = ref(null)
  const results = ref(null)
  const createPromise = async (...args: any) => {
    try {
      loading.value = true
      results.value = await executeFunction(...args)
    } catch (_error) {
      error.value = _error
      loading.value = false
    }
  }

  return { error, loading, results, createPromise }
}
