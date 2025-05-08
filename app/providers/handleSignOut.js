export default async function handleSignOut() {
  console.log("signing out...");
  await authClient.signOut({
    fetchOptions: {
      onSuccess: () => {
        console.log("signed out!");
        redirect("/api/sign-up");
      },
    },
  });
}
