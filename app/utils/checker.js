"use server";

import validator from "validator";

export default async function passwordValidator(value, value2) {
  if (value !== value2) {
    return {
      error: true,
      message: "Please ensure both passwords are correct.",
    };
  }

  if (!validator.isStrongPassword(value)) {
    return {
      error: true,
      message:
        "Please ensure your password is strong and meets the requirements",
    };
  }

  const password = validator.trim(value);

  return password;
}
