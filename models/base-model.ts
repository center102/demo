import _ from 'lodash'
class BaseModel {
  getNumberFromKey (data: object, key: string) {
    if (typeof data !== 'object') { return 0 }
    return _.get(data, key, 0)
  }

  getStringFromKey (data: object, key: string) {
    if (typeof data !== 'object') { return '' }
    return _.get(data, key, '')
  }
}

export default BaseModel
