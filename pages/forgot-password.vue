<template>
  <div class="container">
    <div class="form-title">
      Forgot form
    </div>
    <el-form ref="form" class="login-form" :model="form" label-width="120px">
      <el-form-item label="Email">
        <el-input v-model="form.email" />
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="onSubmit">
          Submit
        </el-button>
        <el-button @click="back">
          back
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
        email: ''
      }
    }
  },
  methods: {
    onSubmit () {
      console.log('submit!')
    },
    back () {
      this.$router.back()
    }
  }
})
</script>

<style lang="scss" scoped>

</style>
