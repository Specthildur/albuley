import ResultItem from "@/components/results/ResultItem";

export default function HomePage() {
  return (
    <div className="flex mx-[8%] h-max">
      <div className="flex flex-col w-[30%] mt-20 gap-20">
        <div>Genre & Style</div>
        <div>Age</div>
        <div>Rating</div>
        <div>Rating</div>
      </div>
      <div className="w-[70%] text-center mt-5 h-max">
        <p className="block">Search Results</p>
        <div className="grid grid-cols-4 grid-rows-6 mt-8 gap-5">
          <ResultItem></ResultItem>
          <ResultItem></ResultItem>
          <ResultItem></ResultItem>
          <ResultItem></ResultItem>
          <ResultItem></ResultItem>
        </div>
      </div>
    </div>
  );
}
