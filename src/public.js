const Crud = require('./crud')

class PublicEndpoints extends Crud {
  endpoint = '/public'

  getUsersInGroup(groupId) {
    return this.request.get(`${this.endpoint}/groups/${groupId}/users`)
  }
}

module.exports = PublicEndpoints