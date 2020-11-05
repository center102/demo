import BaseService from './base-service'

const makeUserUrl = (url = '') => {
  return 'user/' + url
}

class UserService extends BaseService {
  async getUserList () {
    const response = await this.client.get(makeUserUrl(''))
    return response
  }

  async create () {
    const response = await this.client.get(makeUserUrl(''))
    return response
  }
}

export default UserService
