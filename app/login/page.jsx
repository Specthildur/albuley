"use client";
import Link from "next/link";
import { useState } from "react";

export default function Page() {
  const [signinState, setSignState] = useState(true);

  function handleChange() {
    setSignState(!signinState);
  }

  return (
    <div className="mt-40 h-auto flex justify-center w-full">
      <div className="sm:w-[45%] md:w-[25%] lg:w-[25%] xl:w-[25%]">
        <div className="flex justify-center mb-5 text-2xl font-bold">
          <h1>{signinState ? "Sign Up" : "Login"}</h1>
        </div>
        <form className="flex flex-col gap-4 text-sm/6 text-gray-500">
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
          <div className="flex flex-col space-y-2">
            <div className="flex justify-between">
              <label htmlFor="name" className="text-gray-800 font-medium">
                Password
              </label>
              <Link
                href="/reset-password"
                className={`${signinState && "hidden"}`}
              >
                Reset Password
              </Link>
            </div>
            <div className={`flex flex-col mt-2 ${!signinState && "mb-4"}`}>
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
          {signinState && (
            <div className="flex flex-col space-y-2 mb-4">
              <label
                htmlFor="confirm-password"
                className="text-gray-800 font-medium"
              >
                Confirm Password
              </label>
              <input
                id="confirm-password"
                required
                name="confirm-password"
                placeholder="Retype Password"
                className="text-center border-1 py-2 mt-1 px-4 rounded-md focus:outline-offset-1 focus:border-black text-gray-900"
              />
            </div>
          )}
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400"
            >
              Sign in
            </button>
          </div>
        </form>
        <div className="flex w-full gap-3 justify-center text-sm/6 text-gray-500 mt-4">
          {signinState ? (
            <>
              <p>Already have an account?</p>
              <button onClick={handleChange}>Sign in!</button>
            </>
          ) : (
            <>
              <p>Don't have an account?</p>
              <button onClick={handleChange}>Sign up!</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
