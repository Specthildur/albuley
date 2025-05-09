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

  if (!session) {
    redirect("/sign-up");
  } else {
    return (
      <>
        <Header base={true}></Header>
        <div className="mx-[8%] h-max flex">
          <Filter></Filter>
          <MainContent></MainContent>
        </div>
      </>
    );
  }
}
