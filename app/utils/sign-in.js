"use server";
import { auth } from "@/app/utils/auth";

export async function signIn(formData) {
  const email = formData.get("email");
  const password = formData.get("password");
  try {
    const response = await auth.api.signInEmail({
      body: {
        email: email,
        password: password,
      },
    });
    return { error: null };
  } catch (err) {
    return err.body;
  }
}
