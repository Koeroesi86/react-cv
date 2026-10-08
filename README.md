# @koeroesi86/react-cv
[![Publish](https://github.com/Koeroesi86/react-cv/actions/workflows/publish.yml/badge.svg)](https://github.com/Koeroesi86/react-cv/actions/workflows/publish.yml)

### Dependencies
* [NodeJS](https://nodejs.org/en/)
* [npm](https://www.npmjs.com/) (bundled with NodeJS)

### Usage

```shell
npm run build && npm start
```

Open `dist/<name>.pdf`

### Personal details

The phone number, email address and location are not stored in the repository. They are read from the
`PII_PHONE`, `PII_EMAIL` and `PII_LOCATION` environment variables (repository secrets in CI), or from an
untracked `env.local.js`:

```js
module.exports.env = {
  PII_PHONE: "+36700000000",
  PII_EMAIL: "name@example.com",
  PII_LOCATION: "Budapest, HU",
};
```

### Running locally

```shell
npm run dev
```

Open `dist/<name>.pdf`
