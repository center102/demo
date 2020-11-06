<template>
  <div class="container form-container">
    <div class="mb-2">
      Update Form
    </div>
    <el-form label-width="100px" class="user-form" :model="user">
      <el-form-item label="Name">
        <el-input v-model="user.name" />
      </el-form-item>
      <el-form-item label="Email">
        <el-input v-model="user.email" />
      </el-form-item>
      <el-form-item label="Address">
        <el-input v-model="user.address" />
      </el-form-item>
      <el-form-item label="First name">
        <el-input v-model="user.firstName" />
      </el-form-item>
      <el-form-item label="Last name">
        <el-input v-model="user.lastName" />
      </el-form-item>
      <el-form-item label="Birthday">
        <el-date-picker
          v-model="user.birthday"
          type="date"
          value-format="yyyy-MM-dd"
          placeholder="Pick a day"
        />
      </el-form-item>
      <el-form-item label="Gender">
        <el-radio v-model="user.gender" :label="1">
          Male
        </el-radio>
        <el-radio v-model="user.gender" :label="0">
          Female
        </el-radio>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submit">
          Update
        </el-button>
        <el-button @click="goBack">
          Back
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import {
  defineComponent, onMounted,
  ref
} from '@nuxtjs/composition-api'
import { useCompUser } from '@/compositions/use-user'
import UserModel from '~/models/user-model'

export default defineComponent({
  setup (_, ctx) {
    const { updateUser, detailUser } = useCompUser()
    const { $router, $route, $message } = ctx.root
    const user = ref(new UserModel({}))

    onMounted(async () => {
      await detailUser.createPromise($route.params.id)
      user.value = detailUser.results.value as UserModel
    })

    const goBack = () => {
      $router.back()
    }

    const submit = async () => {
      await updateUser.createPromise(user.value)
      if (!updateUser.error.value) {
        $message.success('update user sucessful')
        setTimeout(() => {
          $router.push('/user')
        }, 2000)
      } else {
        $message.error('update user fail')
      }
    }

    return { updateUser, goBack, submit, user }
  }
})
</script>

<style lang="scss">
.user-form {
  width: 400px;
}
.form-container {
  padding-top: 50px;
}
.mb-2 {
  margin-bottom: 20px;
}
</style>
