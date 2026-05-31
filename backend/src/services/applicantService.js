const { pool } = require("../db/pool");

async function createApplicant(applicant) {
  const sql = `
    INSERT INTO applicant (
      student_number,
      name,
      phone,
      email,
      motivation,
      introduction
    )
    VALUES (?, ?, ?, ?, ?, ?)
  `;

  const values = [
    applicant.studentNumber,
    applicant.name,
    applicant.phone,
    applicant.email,
    applicant.motivation,
    applicant.introduction
  ];

  try {
    const [result] = await pool.execute(sql, values);

    return {
      id: result.insertId,
      studentNumber: applicant.studentNumber,
      name: applicant.name,
      email: applicant.email
    };
  } catch (error) {
    if (error.code === "ER_DUP_ENTRY") {
      const duplicateError = new Error("Applicant with the same student number or email already exists");
      duplicateError.statusCode = 409;
      throw duplicateError;
    }

    throw error;
  }
}

module.exports = {
  createApplicant
};
