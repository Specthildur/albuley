"use client";
import { useStore } from "@/app/lib/store";
import { searchFunction } from "@/app/services/searchFunction";
import { useRef } from "react";
import { redirect } from "next/navigation";
import Link from "next/link";
import debounce from "@/app/services/debounce.js";

export default function Header({ base }) {
  const setResults = useStore((state) => state.setResults, true);
  const reset = useStore((state) => state.reset, true);
  const input = useRef();

  async function handleSearch(e) {
    if (!e.target.value) {
      setResults([]);
    } else {
      const input = e.target.value;
      const response = await searchFunction(input, "album");
      setResults(response);
    }
  }

  const debouncedSearch = debounce(handleSearch, 2000);
  return (
    <header className="mb-4 sm:font-small md:font-medium h-[96px]">
      <div className="flex border-b-2 border-b-gray-400 pb-4 pt-5 h-full px-5 items-center font-medium">
        <div className="w-2/7">
          <Link href="/">
            <p className="text-lg">Logo</p>
          </Link>
        </div>
        <div className={base ? "w-4/7 flex" : "w-4/7 flex"}>
          {base && (
            <input
              ref={input}
              onChange={debouncedSearch}
              placeholder="Search for your favourite album!"
              className="p-4 border-2 rounded-md focus:outline-0 focus:border-stone-600 hover:border-2 hover:border-stone-600 hover:rounded-md  w-[50%] transition-all"
            />
          )}
        </div>

        <div className="w-1/6 flex grow content-stretch">
          <div className="grow">My Albums</div>
          <div className="grow">Log Out</div>
        </div>
      </div>
    </header>
  );
}
