const Crud = require('./crud')

class Apps extends Crud {
  endpoint = '/api/apps'

  generateApiKey(id) {
    return this.request.post(`${this.endpoint}/${id}/generate`)
  }
}

module.exports = Apps