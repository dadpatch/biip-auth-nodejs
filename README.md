**Auth Module BIIP Node.js SDK**

# Table of Contents
- [Instalation](#instalation)
- [Usage](#usage)
  * [Initialize in project](#initialize)
  * [Login with password](#login)
  * [Evartai](#evartai)
    + [Initiate login](#initiate-login)
    + [Login with ticket](#login-with-ticket)
  * [Authenticated](#authenticated)
    + [Set Token](#set-token)
    + [CRUD](#crud)
    + [Logout](#logout)

# Instalation 
## Setup

1. Update `package.json`
```json
{
  "dependencies": {
    "biip-auth-nodejs": "github:DadPatch/biip-auth-nodejs",
  }
}
```

2. Run
```bash
npm i # or yarn
```

# Usage

## Initialize

```js
import authModule from "biip-auth-nodejs"
const auth = authModule("api_key")
```

## Login

```js
await auth.login(
  "your@email.com",
  "password",
  false // generate refresh token? false by default
)
```

## Evartai

### Initiate login

```js
await auth.evartai.sign(
  "https://www.website.com" // used to redirect after successful login
)
```

### Login with ticket 

```js
await auth.evartai.login(
  "ticket" // ticket id after successful login (from url params)
)
```

## Authenticated

### Set Token

```js
const authWithToken = auth.setToken("token")
```
### CRUD users

```js
await authWithToken.users.get() // list of users with params
await authWithToken.users.getOne(id) // one id
await authWithToken.users.create() // one id
await authWithToken.users.update(id) // update by id
```
### CRUD groups

```js
await authWithToken.groups.get() // list of users with params
await authWithToken.groups.getOne(id) // one id
await authWithToken.groups.create() // one id
await authWithToken.groups.update(id) // update by id
```

### Logout

```js
await authWithToken.users.logout()
```