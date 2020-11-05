import {
  ref,
  useContext,
  computed
} from '@nuxtjs/composition-api'

export const useCompLogin = () => {
  const email = ref('')
  const password = ref('')
  const { app: { router } } = useContext()
  const submit = () => {
    console.log('email', email)
    console.log('password', password)
    router?.push('/')
  }
  const info = computed(() => {
    return email.value + ' ' + password.value
  })

  return { email, password, info, submit }
}

export const useCompLoginMethod = () => {
  const { app: { router } } = useContext()
  const gotoForgot = () => {
    router?.push('forgot-password')
  }

  return { gotoForgot }
}
