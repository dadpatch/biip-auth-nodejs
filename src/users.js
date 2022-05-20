const Crud = require('./crud')

class Users extends Crud {
  endpoint = '/api/users'

  me() {
    return this.request.get(`${this.endpoint}/me`)
  }

  logout() {
    return this.request.post(`${this.endpoint}/logout`)
  }

  invite(data) {
    return this.request.post(`${this.endpoint}/invite`, data)
  }
}

module.exports = Users