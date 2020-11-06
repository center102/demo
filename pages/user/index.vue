<template>
  <el-table
    :data="fetchUser.results.value"
    style="width: 100%"
    class="user-table"
    stripe
  >
    <el-table-column
      prop="id"
      label="ID"
      width="50"
    />
    <el-table-column
      prop="fullName"
      label="Fullname"
      width="180"
    />
    <el-table-column
      prop="genderName"
      label="Gender"
      width="180"
    />
    <el-table-column
      prop="address"
      label="Address"
    />
    <el-table-column
      label="Operations"
    >
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
        >
          Edit
        </el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >
          <i v-if="actionRow && deleteUser.loading.value" class="el-icon-loading" />
          <span v-else>Delete</span>
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
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
    const { fetchUser, deleteUser } = useCompUser()
    const { $logger, $message, $router } = ctx.root
    onMounted(() => {
      fetchUser.createPromise()
      $logger(fetchUser.results)
    })

    const handleEdit = (_: number, user: UserModel) => {
      $logger('user', user)
      $router.push('/user/' + user.id)
    }

    const actionRow = ref(0)

    const handleDelete = async (index: number, user: UserModel) => {
      actionRow.value = index
      await deleteUser.createPromise(user.id)
      if (!deleteUser.error.value) {
        $message.success('delete successful')
        fetchUser.createPromise()
      } else {
        $message.error('delete fail')
      }
    }

    return { fetchUser, handleEdit, handleDelete, deleteUser, actionRow }
  }
})
</script>

<style lang="scss">
.user-table {
  padding: 50px;
}
</style>
