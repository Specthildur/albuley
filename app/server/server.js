"use server";
import { auth } from "@/app/utils/auth.js";

export default async function userCreation(formData) {
    fetch("http://localhost:3000/api/auth/sign-up/email", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: formData.get("full-name"),
            email: formData.get("email"),
            password: formData.get("password"),
            callbackURL: "",
        }),
    });
}
