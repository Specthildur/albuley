"use client";
import Link from "next/link";

export default function Page() {
  return (
    <div className="mt-40 h-full flex justify-center w-full">
      <div className="w-[25%]">
        <form className="flex flex-col gap-6 text-sm/6 text-gray-500">
          <div className="flex flex-col space-y-2">
            <div className="flex justify-start">
              <label htmlFor="name" className="text-gray-800 font-medium">
                Email Address
              </label>
            </div>
            <div className="flex flex-col mt-2">
              <input
                id="email"
                required
                name="email"
                placeholder="Email"
                className="text-center border-1 py-2 px-4 rounded-md focus:outline-offset-1 focus:border-black text-gray-900"
              />
            </div>
          </div>
          <div>
            <div className="flex justify-between">
              <label htmlFor="name" className="text-gray-800 font-medium">
                Password
              </label>
              <Link href="/reset-password" className="">
                Reset Password
              </Link>
            </div>
            <div className="flex flex-col mt-2">
              <input
                id="password"
                required
                name="password"
                type="password"
                placeholder="Password"
                className="text-center border-1 py-2 px-4 rounded-md focus:outline-offset-1 focus:border-black text-gray-900"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            >
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
