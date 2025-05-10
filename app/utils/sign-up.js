"use server";
import { auth } from "@/app/utils/auth";
import createUserData from "./create-user-data";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

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
    const createdData = await createUserData();
    console.log(createdData);

    if (!createdData) {
      throw new Error("User is already created");
    }
    return { error: null };
  } catch (err) {
    if (err.body) {
      return err.body;
    } else {
      return err;
    }
  }
}
