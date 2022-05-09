"use strict";

const fetch = require("isomorphic-unfetch");
const serialize = function(obj) {
    var str = [];
    for (var p in obj)
        if (obj.hasOwnProperty(p)) {
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
        }
    const result = str.join("&")
    return result.length > 0 ? ('?' + result) : '';
}

class Request {
  constructor(apiKey, host = 'https://auth.smala.lt') {
    this.apiKey = apiKey
    this.host = host
  }

  getHeaders() {
    const headers = {
      'X-API-Key': `${this.apiKey}`,
      'Content-Type': 'application/json'
    }

    if (this.authToken) {
      return {...headers, ...{
        Authorization: `Bearer ${this.authToken}`,
      }}
    }

    return headers
  }

  setToken(token) {
    this.authToken = token
    return this
  }

  get(url, options = {}) {
    return this.request(`${url}${serialize(options)}`, { method: 'GET' })
  }

  post(url, options) {
    return this.request(`${url}`, { method: 'POST', body: options ? JSON.stringify(options) : null })
  }

  request(endpoint = "", options = {}) {
    const url = this.host + endpoint;

    const config = {
        headers: this.getHeaders(),
        ...options,
    };

    return fetch(url, config).then(res => res.json())
  }
}

module.exports = Request;