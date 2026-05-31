const cors = require("cors");
const express = require("express");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");

const applicantRoutes = require("./routes/applicants");
const { config } = require("./config/env");
const { errorHandler } = require("./middleware/errorHandler");
const { notFound } = require("./middleware/notFound");
const { pingDatabase } = require("./db/pool");

const app = express();

app.use(helmet());
app.use(cors({ origin: config.corsOrigin === "*" ? true : config.corsOrigin }));
app.use(express.json({ limit: "64kb" }));
app.use(express.urlencoded({ extended: true, limit: "64kb" }));

app.use(
  "/api",
  rateLimit({
    windowMs: 60 * 1000,
    max: 60,
    standardHeaders: true,
    legacyHeaders: false
  })
);

app.get("/health", async (req, res, next) => {
  try {
    await pingDatabase();

    res.json({
      success: true,
      status: "ok",
      database: "ok"
    });
  } catch (error) {
    next(error);
  }
});

app.use("/api/applicants", applicantRoutes);

app.use(notFound);
app.use(errorHandler);

module.exports = {
  app
};
