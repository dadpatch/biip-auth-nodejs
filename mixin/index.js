const auth = require('../index');

module.exports = function authMixin(apiKey, options = {}) {
  const authModule = auth(apiKey, options);
  const appHost = options.appHost || 'https://auth.biip.lt'

  const schema = {
    actions: {
      // groups
      'groups.list': (ctx) => authModule.setToken(ctx.meta.authToken).groups.get(ctx.params),
      'groups.get': (ctx) => authModule.setToken(ctx.meta.authToken).groups.getOne(ctx.params.id, ctx.params),
      'groups.update': (ctx) => authModule.setToken(ctx.meta.authToken).groups.update(ctx.params.id, ctx.params),
      'groups.remove': (ctx) => authModule.setToken(ctx.meta.authToken).groups.delete(ctx.params.id),
      'groups.create': (ctx) => authModule.setToken(ctx.meta.authToken).groups.create(ctx.params),

      // permissions
      'permissions.list': (ctx) => authModule.setToken(ctx.meta.authToken).permissions.get(ctx.params),
      'permissions.get': (ctx) => authModule.setToken(ctx.meta.authToken).permissions.getOne(ctx.params.id, ctx.params),
      'permissions.update': (ctx) => authModule.setToken(ctx.meta.authToken).permissions.update(ctx.params.id, ctx.params),
      'permissions.remove': (ctx) => authModule.setToken(ctx.meta.authToken).permissions.delete(ctx.params.id),
      'permissions.create': (ctx) => authModule.setToken(ctx.meta.authToken).permissions.create(ctx.params),
      'permissions.getMunicipalities': (ctx) => authModule.setToken(ctx.meta.authToken).permissions.getMunicipalities(ctx.params),
      'permissions.createWithMunicipalities': (ctx) => authModule.setToken(ctx.meta.authToken).permissions.createWithMunicipalities(ctx.params),

      // apps
      'apps.list': (ctx) => authModule.setToken(ctx.meta.authToken).apps.get(ctx.params),
      'apps.get': (ctx) => authModule.setToken(ctx.meta.authToken).apps.getOne(ctx.params.id, ctx.params),
      'apps.generateApiKey': (ctx) => authModule.setToken(ctx.meta.authToken).apps.generateApiKey(ctx.params.id),
      'apps.getUsersApp': (ctx) => authModule.setToken(ctx.meta.authToken).apps.getUsersApp(),
      'apps.create': (ctx) => authModule.setToken(ctx.meta.authToken).apps.create(ctx.params),
      'apps.resolveToken': () => authModule.app(),

      // users
      'users.list': (ctx) => authModule.setToken(ctx.meta.authToken).users.get(ctx.params),
      'users.get': (ctx) => authModule.setToken(ctx.meta.authToken).users.getOne(ctx.params.id, ctx.params),
      'users.update': (ctx) => authModule.setToken(ctx.meta.authToken).users.update(ctx.params.id, ctx.params),
      'users.remove': (ctx) => authModule.setToken(ctx.meta.authToken).users.delete(ctx.params.id),
      'users.create': (ctx) => authModule.setToken(ctx.meta.authToken).users.create(ctx.params),
      'users.logout': (ctx) => authModule.setToken(ctx.meta.authToken).users.logout(),
      'users.resolveToken': (ctx) => authModule.setToken(ctx.meta.authToken).users.me(),

      'login': (ctx) => authModule.login(ctx.params.email, ctx.params.password, ctx.params.refresh || false),
      'evartai.sign': () => authModule.evartai.sign(appHost),
      'evartai.login': (ctx) => authModule.evartai.login(ctx.params.ticket, ctx.params.refresh || false),
      'refreshToken': (ctx) => authModule.refreshToken(ctx.params.token),
      'remindPassword': (ctx) => authModule.remindPassword(ctx.params.email),
      'changePasswordVerify': (ctx) => authModule.changePasswordVerify({ h: ctx.params.h, s: ctx.params.s }),
      'changePasswordAccept': (ctx) => authModule.changePasswordAccept({ h: ctx.params.h, s: ctx.params.s, password: ctx.params.password }),
    },
  };

  return schema;
}