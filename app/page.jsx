import Filter from "@/components/MainContent/Filter";
import MainContent from "@/components/MainContent/MainContent";

export default function HomePage() {
    return (
        <div className="mx-[8%] h-max flex">
            <Filter></Filter>
            <MainContent></MainContent>
        </div>
    );
}
