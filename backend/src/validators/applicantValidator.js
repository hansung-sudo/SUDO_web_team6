const Joi = require("joi");

const applicantSchema = Joi.object({
  studentNumber: Joi.string().trim().min(1).max(20).required().messages({
    "any.required": "studentNumber is required",
    "string.empty": "studentNumber is required",
    "string.max": "studentNumber must be 20 characters or less"
  }),
  name: Joi.string().trim().min(1).max(30).required().messages({
    "any.required": "name is required",
    "string.empty": "name is required",
    "string.max": "name must be 30 characters or less"
  }),
  phone: Joi.string().trim().min(1).max(30).required().messages({
    "any.required": "phone is required",
    "string.empty": "phone is required",
    "string.max": "phone must be 30 characters or less"
  }),
  email: Joi.string().trim().email().max(100).required().messages({
    "any.required": "email is required",
    "string.email": "email must be a valid email address",
    "string.empty": "email is required",
    "string.max": "email must be 100 characters or less"
  }),
  motivation: Joi.string().trim().min(1).required().messages({
    "any.required": "motivation is required",
    "string.empty": "motivation is required"
  }),
  introduction: Joi.string().trim().min(1).required().messages({
    "any.required": "introduction or project/profile fields are required",
    "string.empty": "introduction or project/profile fields are required"
  })
});

function validateApplicant(input) {
  const { value, error } = applicantSchema.validate(input, {
    abortEarly: false,
    stripUnknown: true
  });

  if (!error) {
    return value;
  }

  const details = error.details.map((detail) => ({
    field: detail.path.join("."),
    message: detail.message
  }));

  const validationError = new Error("Invalid applicant payload");
  validationError.statusCode = 400;
  validationError.details = details;

  throw validationError;
}

module.exports = {
  validateApplicant
};
