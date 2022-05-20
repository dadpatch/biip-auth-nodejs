const Crud = require('./crud')

class Groups extends Crud {
  endpoint = '/api/groups'
}

module.exports = Groups