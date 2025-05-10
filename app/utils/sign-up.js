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
        const createdData = await createUserData(signedUpUser.user.id);

        if (!createdData) {
            throw new Error("Unable to create user data");
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
