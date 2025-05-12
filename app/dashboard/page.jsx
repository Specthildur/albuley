import "../globals.css";
import Filter from "@/components/MainContent/Filter";
import Header from "@/components/header/Header";
import { auth } from "@/app/utils/auth";
import { headers } from "next/headers";
import MainContent from "@/components/MainContent/MainContent";
import { redirect } from "next/navigation";

export default async function HomePage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  // if (!session) {
  //   redirect("/sign-up");
  // } else {
  return (
    <>
      <Header base={true}></Header>
      <div className="h-max md:flex sm:flex sm:flex-col md:flex-row md:mx-10">
        <Filter></Filter>
        <MainContent></MainContent>
      </div>
    </>
  );
}
