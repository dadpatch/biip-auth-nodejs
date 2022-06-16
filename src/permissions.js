const Crud = require('./crud')

class Permissions extends Crud {
  endpoint = '/api/permissions'

  getMunicipalities() {
    return this.request.get(`${this.endpoint}/municipalities`)
  }

  createWithMunicipalities(data) {
    return this.request.post(`${this.endpoint}/municipalities`, data)
  }
}

module.exports = Permissions