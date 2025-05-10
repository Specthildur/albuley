"use server";
import { auth } from "@/app/utils/auth";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function signUp(formData) {
    const name = formData.get("full-name");
    const email = formData.get("email");
    const password = formData.get("password");
    try {
        await auth.api.signUpEmail({
            body: {
                name: name,
                email: email,
                password: password,
                role: "user",
            },
        });
        return { error: null };
    } catch (err) {
        return err.body;
    }
}
