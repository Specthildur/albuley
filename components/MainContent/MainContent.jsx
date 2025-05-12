"use client";
import ResultItem from "./results/ResultItem";
import { useQuery } from "@tanstack/react-query";

export default function MainContent() {
  const { data } = useQuery({
    queryKey: ["results"],
    queryFn: () => searchFunction(),
    enabled: false,
  });

  return (
    <div className="text-center mt-5 h-max grow w-full flex flex-col">
      <p className="block">Search Results</p>
      <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mt-8 gap-5 m-auto">
        {data && data.map((data, i) => <ResultItem key={i} data={data} />)}
      </div>
    </div>
  );
}
