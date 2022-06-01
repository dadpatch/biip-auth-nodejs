const Crud = require('./crud')

class Permissions extends Crud {
  endpoint = '/api/permissions'
}

module.exports = Permissions