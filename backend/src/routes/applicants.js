const express = require("express");

const { submitApplicant } = require("../controllers/applicantController");

const router = express.Router();

router.post("/", submitApplicant);

module.exports = router;
