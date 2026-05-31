const { createApplicant } = require("../services/applicantService");
const { normalizeApplicantInput } = require("../utils/normalizeApplicantInput");
const { validateApplicant } = require("../validators/applicantValidator");

async function submitApplicant(req, res, next) {
  try {
    const normalizedApplicant = normalizeApplicantInput(req.body);
    const applicant = validateApplicant(normalizedApplicant);
    const createdApplicant = await createApplicant(applicant);

    res.status(201).json({
      success: true,
      data: createdApplicant
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  submitApplicant
};
