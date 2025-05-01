import "./globals.css";
import Filter from "@/components/MainContent/Filter";
import Header from "@/components/header/Header";
import MainContent from "@/components/MainContent/MainContent";

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
