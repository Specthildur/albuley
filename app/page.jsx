import "./globals.css";
import Filter from "@/app/components/MainContent/Filter";
import Header from "@/app/components/header/Header";
import MainContent from "@/app/components/MainContent/MainContent";

export default function HomePage() {
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
