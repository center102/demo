import { useContext } from '@nuxtjs/composition-api'
import _ from 'lodash'
import { usePromise } from './use-promise'
import UserModel from '~/models/user-model'

export const useCompUser = () => {
  const { $userService, $logger } = useContext()

  const fetchUser = usePromise(async (keyword: string) => {
    const response = await $userService.getUserList(keyword)
    const tmp: UserModel[] = []
    _.forEach(response.data, (item) => {
      tmp.push(new UserModel(item))
    })
    return tmp
  })

  const updateUser = usePromise(async (user: UserModel) => {
    $logger('update', user.makeForm())
    const response = await $userService.update(user)
    return new UserModel(response)
  })

  const createUser = usePromise(async (user: UserModel) => {
    const response = await $userService.create(user)
    return new UserModel(response.data)
  })

  const deleteUser = usePromise(async (id: number) => {
    const response = await $userService.delete(id)
    return response.data
  })

  const detailUser = usePromise(async (id: number) => {
    const response = await $userService.detail(id)
    return new UserModel(response.data)
  })

  return { fetchUser, updateUser, createUser, deleteUser, detailUser }
}
