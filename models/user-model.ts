import moment from 'moment'
import BaseModel from './base-model'

class UserModel extends BaseModel {
    id: number
    name: string
    email: string
    firstName?: string
    lastName?: string
    birthday: string
    address?: string
    gender: number

    constructor (data: {[key: string]: any}) {
      super()
      this.id = this.getNumberFromKey(data, 'id')
      this.name = this.getStringFromKey(data, 'name')
      this.email = this.getStringFromKey(data, 'email')
      this.birthday = this.getStringFromKey(data, 'birthday')
      this.gender = this.getNumberFromKey(data, 'gender')
      this.firstName = this.getStringFromKey(data, 'firstName')
      this.lastName = this.getStringFromKey(data, 'lastName')
    }

    get fullName () {
      return this.firstName + ' ' + this.lastName
    }

    get birthdayMoment () {
      return moment(this.birthday)
    }
}

export default UserModel
