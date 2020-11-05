<template>
  <div class="container">
    <div class="form-title">
      Login form
    </div>
    <el-form ref="form" class="login-form" label-width="120px">
      <el-form-item label="Email">
        <el-input v-model="email" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submit">
          Login
        </el-button>
        <el-button @click="gotoForgot">
          Forgot pass
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent
} from '@nuxtjs/composition-api'
import { useCompLogin } from '@/compositions/login'
export default defineComponent({
  layout: 'auth',
  setup () {
    const { email, password, submit, gotoForgot } = useCompLogin()

    return { email, password, submit, gotoForgot }
  }
})
</script>
