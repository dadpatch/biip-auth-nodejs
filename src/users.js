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

  assignToGroup(id, groupId, role = 'USER') {
    return this.request.post(`${this.endpoint}/${id}/groups/${groupId}/assign`, { role })
  }

  unassignFromGroup(id, groupId) {
    return this.request.post(`${this.endpoint}/${id}/groups/${groupId}/unassign`)
  }
}

module.exports = Users