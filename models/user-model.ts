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
      this.firstName = this.getStringFromKey(data, 'first_name')
      this.lastName = this.getStringFromKey(data, 'last_name')
      this.address = this.getStringFromKey(data, 'address')
    }

    get fullName () {
      return this.firstName + ' ' + this.lastName
    }

    get birthdayMoment () {
      return moment(this.birthday)
    }

    get genderName () {
      return this.gender ? 'Male' : 'Female'
    }

    makeForm () {
      const form = {
        name: this.name,
        email: this.email,
        first_name: this.firstName,
        last_name: this.lastName,
        birthday: this.birthday,
        address: this.address,
        gender: this.gender
      }
      return form
    }
}

export default UserModel
