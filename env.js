const fs = require("fs");

const { env: localEnv } = fs.existsSync("./env.local.js") ? require("./env.local.js") : { env: {} };

/** @type {import("./src/types").Env} */
const env = {
    PII_PHONE: process.env.PII_PHONE || localEnv.PII_PHONE || "+36700000000",
    PII_EMAIL: process.env.PII_EMAIL || localEnv.PII_EMAIL || "name@example.com",
    PII_LOCATION: process.env.PII_LOCATION || localEnv.PII_LOCATION || "City, Country",
};

module.exports.env = env;
