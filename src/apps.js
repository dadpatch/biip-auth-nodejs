const Crud = require('./crud')

class Apps extends Crud {
  endpoint = '/api/apps'

  getUsersApp() {
    return this.request.get(`${this.endpoint}/users`)
  }
}

module.exports = Apps