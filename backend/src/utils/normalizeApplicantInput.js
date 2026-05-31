function firstPresent(...values) {
  return values.find((value) => value !== undefined && value !== null && value !== "");
}

function buildIntroduction(body) {
  const providedIntroduction = firstPresent(body.introduction, body.selfIntroduction);

  if (providedIntroduction) {
    return providedIntroduction;
  }

  const lines = [];

  if (body.major) {
    lines.push(`Major: ${body.major}`);
  }

  if (body.part) {
    lines.push(`Part: ${body.part}`);
  }

  if (body.projects) {
    lines.push(`Project experience: ${body.projects}`);
  }

  if (body.portfolio) {
    lines.push(`Portfolio: ${body.portfolio}`);
  }

  return lines.join("\n");
}

function normalizeApplicantInput(body) {
  return {
    studentNumber: firstPresent(body.studentNumber, body.student_number, body.studentId),
    name: body.name,
    phone: body.phone,
    email: body.email,
    motivation: body.motivation,
    introduction: buildIntroduction(body)
  };
}

module.exports = {
  normalizeApplicantInput
};
