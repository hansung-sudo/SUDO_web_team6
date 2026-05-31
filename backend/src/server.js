const { app } = require("./app");
const { config } = require("./config/env");
const { pool } = require("./db/pool");

const server = app.listen(config.port, () => {
  console.log(`SUDO backend listening on port ${config.port}`);
});

function shutdown(signal) {
  console.log(`${signal} received. Closing HTTP server.`);
  server.close(async () => {
    try {
      await pool.end();
    } catch (error) {
      console.error(error);
      process.exit(1);
    }

    process.exit(0);
  });
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));
