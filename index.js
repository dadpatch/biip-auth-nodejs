"use strict";
const Request = require('./src/request')
module.exports = function(apiKey, options = {}) {
  if (!apiKey) throw new Error('No API key provided')
  
  const request = new Request(apiKey, options.host)

  return {
    login: (email, password, refresh = false) => request.post('/auth/login', {email, password, refresh}),
    evartai: {
      login: (ticket, refresh = false) => request.post('/auth/evartai/login', {ticket, refresh}),
      sign: (host) => request.post('/auth/evartai/sign', {host})
    },
    setUser: (token) => {
      request.setToken(token)
      return {
        me: () => request.get('/api/users/me'),
        logout: () => request.post('api/users/logout'),
        invite: (personalCode) => request.post('api/users/invite', {personalCode}),
        getUsers: (query) => request.get('/api/users', {query}),
      }
    },
  }
}