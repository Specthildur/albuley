"use client";
import ResultItem from "./results/ResultItem";
import { useQuery } from "@tanstack/react-query";

export default function MainContent() {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["results"],
        queryFn: () => searchFunction(),
        enabled: false,
    });

    return (
        <div className="w-2/5 text-center mt-5 h-max grow">
            <p className="block">Search Results</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 mt-8 gap-5">
                {data &&
                    data.map((data, i) => <ResultItem key={i} data={data} />)}
            </div>
        </div>
    );
}
