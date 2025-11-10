const Crud = require('./crud')

class Permissions extends Crud {
  endpoint = '/api/permissions'

  getUsersByAccess(access, data = {}) {
    return this.request.get(`${this.endpoint}/users`, { access, ...data })
  }

  getMunicipalities() {
    return this.request.get(`${this.endpoint}/municipalities`)
  }

  createWithMunicipalities(data) {
    return this.request.post(`${this.endpoint}/municipalities`, data)
  }

  getUsersInMunicipality(id, data) {
    return this.request.get(`${this.endpoint}/municipalities/${id}/users`, data)
  }

  modifyAccessForGroup(id, data) {
    return this.request.get(`${this.endpoint}/modifyAccessForGroup/${id}`, data)
  }
}

module.exports = Permissions
