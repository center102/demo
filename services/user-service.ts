import BaseService from './base-service'
import UserModel from '~/models/user-model'

const makeUserUrl = (url = '') => {
  return 'user' + url
}

class UserService extends BaseService {
  async getUserList (keyword = '') {
    const response = await this.client.get(makeUserUrl(''), { params: { keyword } })
    return response
  }

  async create (user: UserModel) {
    const response = await this.client.post(makeUserUrl(''), user.makeForm())
    return response
  }

  async update (user: UserModel) {
    const response = await this.client.put(makeUserUrl(`/${user.id}`), user.makeForm())
    return response
  }

  async delete (id: number) {
    const response = await this.client.delete(makeUserUrl(`/${id}`), { data: { id } })
    return response
  }

  async detail (id: number) {
    const response = await this.client.get(makeUserUrl(`/${id}`))
    return response
  }
}

export default UserService
