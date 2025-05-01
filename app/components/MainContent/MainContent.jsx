"use client";
import { useStore } from "@/app/lib/store";
import { useShallow } from "zustand/react/shallow";
import ResultItem from "../results/ResultItem";
import { useQuery } from "@tanstack/react-query";

export default function MainContent() {
    const { data, isLoading, isError, error, refetch } = useQuery({
        queryKey: ["results"],
        queryFn: () => searchFunction(),
        enabled: false,
    });
    console.log(data);
    const results = useStore(
        useShallow((state) => state.results.map((result) => result))
    );
    return (
        <div className="w-2/5 text-center mt-5 h-max grow">
            <p className="block">Search Results</p>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 mt-8 gap-5">
                {results.length < 0 && (
                    <div className="col-span-6">Loading....</div>
                )}
                {data &&
                    data.map((data, i) => <ResultItem key={i} data={data} />)}
            </div>
        </div>
    );
}
