"use server";
import { auth } from "@/app/utils/auth";

export async function signUp(formData) {
  const name = formData.get("full-name");
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const signedUpUser = await auth.api.signUpEmail({
      body: {
        name: name,
        email: email,
        password: password,
        role: "user",
      },
    });

    console.log(signedUpUser);

    if (!createdData) {
      throw new Error("Unable to create user data");
    }
    return { error: null };
  } catch (err) {
    if (err.body) {
      return err.body;
    } else {
      console.log(err);
      return err;
    }
  }
}
