const Crud = require('./crud')

class Groups extends Crud {
  endpoint = '/groups'
}

module.exports = Groups