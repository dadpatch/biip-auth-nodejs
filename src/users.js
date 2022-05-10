import Crud from './crud'

class Users extends Crud {
  endpoint = '/users'

  me() {
    return this.request.get(`${this.endpoint}/me`)
  }

  logout() {
    return this.request.post(`${this.endpoint}/logout`)
  }
}

module.exports = Users