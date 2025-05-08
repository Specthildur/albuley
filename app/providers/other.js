"use server";

export default async function userCreation(formData) {
    console.log(formData);
    const response = await fetch(
        "http://localhost:3000/api/auth/sign-in/email",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                fullName: formData.get("full-name"),
                email: formData.get("email"),
                password: formData.get("password"),
                image: null,
            }),
            asRespo,
        }
    );
}
