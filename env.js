const fs = require("fs");

const { env: localEnv } = fs.existsSync("./env.local.js") ? require("./env.local.js") : { env: {} };

/** @type {import("./src/types").Env} */
const env = {
    PII_PHONE: process.env.PII_PHONE || localEnv.PII_PHONE || "+36700000000",
};

module.exports.env = env;
