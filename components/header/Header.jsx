"use client";
import { useStore } from "@/app/lib/store";
import { searchFunction } from "@/app/services/searchFunction";
import debounce from "@/app/services/debounce.js";

export default function Header() {
  const setResults = useStore((state) => state.setResults, true);

  async function handleSearch(e) {
    if (!e.target.value) {
      setResults([]);
    } else {
      const input = e.target.value;
      const response = await searchFunction(input, "album");
      console.log(response.album);
      setResults(response.album);
    }
  }

  const debouncedSearch = debounce(handleSearch, 2000);
  return (
    <header className="mb-4 sm:font-small md:font-medium">
      <div className="flex border-b-2 border-b-gray-400 pb-4 pt-5 h-full px-5 items-center font-medium">
        <div className="w-2/7">
          <p className="text-lg">Logo</p>
        </div>
        <div className="w-4/7 flex">
          <input
            onChange={debouncedSearch}
            placeholder="Search for your favourite album!"
            className="p-4 border-2 rounded-md focus:outline-0 focus:border-stone-600 hover:border-2 hover:border-stone-600 hover:rounded-md  w-[50%] transition-all"
          />
        </div>
        <div className="w-1/6 flex grow content-stretch">
          <div className="grow">My Albums</div>
          <div className="grow">Log Out</div>
        </div>
      </div>
    </header>
  );
}
