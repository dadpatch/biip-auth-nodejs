const Crud = require('./crud')

class Public extends Crud {
  endpoint = '/public'

  getUsersInGroup(groupId) {
    return this.request.get(`${this.endpoint}/groups/${groupId}/users`)
  }
}

module.exports = Public