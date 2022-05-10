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

## Login

```js
const auth = require("biip-auth-nodejs")("api_key");
import authModule from "biip-auth-nodejs"
const auth = authModule("api_key")

await auth.login(
  "your@email.com",
  "password",
  false // generate refresh token? false by default
)
```

## Evartai

### Initiate login

```js
import authModule from "biip-auth-nodejs"
const auth = authModule("api_key")

await auth.evartai.sign(
  "https://www.website.com" // used to redirect after successful login
)
```

### Login with ticket 

```js
import authModule from "biip-auth-nodejs"
const auth = authModule("api_key")

await auth.evartai.login(
  "ticket" // ticket id after successful login (from url params)
)
```

## User

### Me

```js
import authModule from "biip-auth-nodejs"
const auth = authModule("api_key")

await auth.setUser("token").me()
```

### Logout

```js
import authModule from "biip-auth-nodejs"
const auth = authModule("api_key")

await auth.setUser("token").logout()
```