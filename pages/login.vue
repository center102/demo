<template>
  <div class="container">
    <div class="form-title">
      Login form
    </div>
    <el-form ref="form" class="login-form" :model="form" label-width="120px">
      <el-form-item label="Email">
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="Password">
        <el-input v-model="form.password" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">
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
import Vue from 'vue'

export default Vue.extend({
  layout: 'auth',
  data () {
    return {
      form: {
        email: '',
        pass: ''
      }
    }
  },
  methods: {
    onSubmit () {
      this.$router.push('/')
    },
    gotoForgot () {
      this.$router.push('forgot-password')
    }
  }
})
</script>
