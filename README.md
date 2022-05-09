**Auth Module BIIP Node.js SDK**

# Table of Contents
- [Instalation](#instalation)
- [Usage](#usage)
  * [Login with password](#login)
  * [Evartai](#evartai)
    + [Initiate login](#initiate-login)
    + [Login with ticket](#login-with-ticket)
  * [User](#user)
    + [Me](#me)
    + [Logout](#logout)

# Instalation 

## Setup

1. Update `package.json`
```json
{
  ...
  "dependencies": {
    ...
    "@dadpatch/biip-auth-nodejs": "github:DadPatch/biip-auth-nodejs"
  }
  ...
}
```

2. Run
```bash
npm i # or yarn
```

# Usage

## Login

```js
const auth = require("@dadpatch/biip-auth-nodejs");

await auth("api_key").login(
  "your@email.com",
  "password",
  false // generate refresh token? false by default
)
```

## Evartai

### Initiate login

```js
const auth = require("@dadpatch/biip-auth-nodejs");

await auth("api_key").evartai.sign(
  "https://www.website.com" // used to redirect after successful login
)
```

### Login with ticket 

```js
const auth = require("@dadpatch/biip-auth-nodejs");

await auth("api_key").evartai.login(
  "ticket" // ticket id after successful login (from url params)
)
```

## User

### Me

```js
const auth = require("@dadpatch/biip-auth-nodejs");

await auth("api_key").setUser("token").me()
```

### Logout

```js
const auth = require("@dadpatch/biip-auth-nodejs");

await auth("api_key").setUser("token").logout()
```