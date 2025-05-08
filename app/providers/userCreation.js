"use server";
import { authClient } from "@/app/utils/auth-client";

export default async function userCreation(formData) {
  const { data, error } = await authClient.signUp.email(
    {
      email: formData.get("email"),
      password: formData.get("password"),
      name: formData.get("full-name"),
      image: null,
    },
    {
      onRequest: (ctx) => {},
      onSuccess: (ctx) => {},
      onError: (ctx) => {
        alert(ctx.error.message);
      },
    }
  );
}
