"use server";
import { auth } from "@/app/utils/auth.js";

export default async function userCreation(formData) {
    const { response } = await auth.api.signUpEmail({
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: formData.get("full-name"),
            email: formData.get("email"),
            password: formData.get("password"),
            image: null,
        }),
    });
    return response;
}
