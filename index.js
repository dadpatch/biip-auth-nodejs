"use strict";
const Request = require("./src/request");
const Users = require("./src/users");
const Groups = require("./src/groups");
const Apps = require("./src/apps");
const PublicEndpoints = require("./src/public");
const Permissions = require("./src/permissions");

module.exports = function auth(apiKey, options = {}) {
  if (!apiKey) throw new Error("No API key provided");

  const request = new Request(apiKey, options.host);

  const publicEndpoints = new PublicEndpoints(request);
  return {
    login: (email, password, refresh = false) =>
      request.post("/auth/login", { email, password, refresh }),
    remindPassword: (email) => request.post("/auth/remind", { email }),
    refreshToken: (token) => request.post("/auth/refresh", { token }),
    app: () => request.get("/auth/apps/me"),
    changePasswordVerify: ({ h, s }) =>
      request.post(`/auth/change/verify`, { h, s }),
    changePasswordAccept: ({ h, s, password }) =>
      request.post(`/auth/change/accept`, { h, s, password }),
    getSeedData: () => request.get("/auth/seedData"),
    evartai: {
      login: (ticket, refresh = false) =>
        request.post("/auth/evartai/login", { ticket, refresh }),
      sign: (host) => request.post("/auth/evartai/sign", { host }),
    },
    public: publicEndpoints,
    setToken: (token) => {
      request.setToken(token);

      const users = new Users(request);
      const apps = new Apps(request);
      const groups = new Groups(request);
      const permissions = new Permissions(request);

      return {
        users,
        apps,
        groups,
        permissions,
      };
    },
  };
};
