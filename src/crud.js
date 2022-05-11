class Crud {
  constructor(request) {
    this.request = request
  }

  getOne(id, query) {
    return this.request.get(`${this.endpoint}/${id}`, query)
  }

  create(data) {
    return this.request.post(`${this.endpoint}`, data)
  }

  update(id, data) {
    return this.request.patch(`${this.endpoint}/${id}`, data)
  }

  get(data) {
    return this.request.get(`${this.endpoint}`, data)
  }
}

module.exports = Crud