import {
  ref,
  useContext
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
  const gotoForgot = () => {
    router?.push('forgot-password')
  }

  return { email, password, submit, gotoForgot }
}
