const dotenv = require("dotenv");

dotenv.config();

function numberFromEnv(name, fallback) {
  const value = process.env[name];

  if (value === undefined || value === "") {
    return fallback;
  }

  const parsed = Number(value);

  if (!Number.isFinite(parsed)) {
    throw new Error(`${name} must be a number`);
  }

  return parsed;
}

const config = {
  nodeEnv: process.env.NODE_ENV || "development",
  port: numberFromEnv("PORT", 3000),
  corsOrigin: process.env.CORS_ORIGIN || "*",
  db: {
    host: process.env.DB_HOST || "127.0.0.1",
    port: numberFromEnv("DB_PORT", 13306),
    user: process.env.DB_USER || "user",
    password: process.env.DB_PASSWORD || "qwe123!@#",
    database: process.env.DB_NAME || "web",
    connectionLimit: numberFromEnv("DB_CONNECTION_LIMIT", 10)
  }
};

module.exports = {
  config
};
