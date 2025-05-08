"use client";
import { useQuery } from "@tanstack/react-query";
import { searchFunction } from "@/app/services/searchFunction";
import { authClient } from "@/app/utils/auth-client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default function Header({ base }) {
  // const setResults = useStore((state) => state.setResults, true);
  const [searchValue, setSearchValue] = useState("all");

  async function handleSignOut() {
    await authClient.signOut();
  }

  const { refetch, isError } = useQuery({
    queryKey: ["results"],
    queryFn: async () => searchFunction(searchValue, "album"),
  });

  useEffect(() => {
    const delayInputTimeoutId = setTimeout(() => {
      refetch();
    }, 500);
    return () => {
      clearTimeout(delayInputTimeoutId);
    };
  }, [searchValue]);

  function setValue(e) {
    if (!e.target.value) {
      setSearchValue("all");
    } else {
      setSearchValue(e.target.value);
    }
  }

  return (
    <header className="mb-4 sm:font-small md:font-medium h-[96px]">
      <div className="flex border-b-2 border-b-gray-400 pb-4 pt-5 h-full px-5 items-center font-medium">
        <div className="w-2/7">
          <Link href="/dashboard">
            <p className="text-lg">Logo</p>
          </Link>
        </div>
        <div className={base ? "w-4/7 flex" : "w-4/7 flex"}>
          {base && (
            <input
              onChange={(e) => setValue(e)}
              placeholder="Search for your favourite album!"
              className="p-4 border-2 rounded-md focus:outline-0 focus:border-stone-600 hover:border-2 hover:border-stone-600 hover:rounded-md  w-[50%] transition-all"
            />
          )}
        </div>

        <div className="w-1/6 flex grow content-stretch">
          {base && (
            <>
              <div className="grow">My Albums</div>
              <div className="grow">
                <button onClick={handleSignOut} className="cursor-pointer">
                  Log Out
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
