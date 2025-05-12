export default async function handleSignOut() {
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        redirect("/api/sign-up");
      },
    },
  });
}
