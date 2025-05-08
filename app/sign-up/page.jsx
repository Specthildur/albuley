"use client";
import { redirect } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { authClient } from "@/app/utils/auth-client";

export default function Page() {
  const [loading, setLoading] = useState(false);
  async function createUser(formData) {
    const { data, error } = await authClient.signUp.email(
      {
        email: formData.get("email"),
        password: formData.get("password"),
        name: formData.get("full-name"),
        image: null,
      },
      {
        onRequest: (ctx) => {
          setLoading(true);
        },
        onSuccess: (ctx) => {
          setLoading(true);
          redirect("/dashboard");
        },
        onError: (ctx) => {
          alert(ctx.error.message);
        },
      }
    );
  }
  return (
    <div className="mt-40 h-auto flex justify-center w-full">
      <div className="sm:w-[45%] md:w-[25%] lg:w-[25%] xl:w-[25%]">
        <div className="flex justify-center mb-5 text-2xl font-bold">
          <h1>Sign Up</h1>
        </div>
        <form
          className="flex flex-col gap-4 text-sm/6 text-gray-500"
          action={(e) => createUser(e)}
        >
          <div className="flex flex-col space-y-2">
            <div className="flex justify-start">
              <label htmlFor="full-name" className="text-gray-800 font-medium">
                Full Name
              </label>
            </div>
            <div className="flex flex-col mt-2">
              <input
                id="full-name"
                required
                name="full-name"
                placeholder="Full Name"
                className="text-center border-1 py-2 px-4 rounded-md focus:outline-offset-1 focus:border-black text-gray-900"
              />
            </div>
          </div>
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
          <div className="flex flex-col space-y-1">
            <div className="flex justify-between">
              <label htmlFor="name" className="text-gray-800 font-medium">
                Password
              </label>
            </div>
            <div className={`flex flex-col mt-2 mb-1`}>
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
              type="password"
              placeholder="Retype Password"
              className="text-center border-1 py-2 mt-1 px-4 rounded-md focus:outline-offset-1 focus:border-black text-gray-900"
            />
          </div>
          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 cursor-pointer"
              disabled={loading}
            >
              Sign up
            </button>
          </div>
        </form>
        <div className="flex w-full gap-3 justify-center text-sm/6 text-gray-500 mt-4">
          <p>Already have an account?</p>
          <Link href={"/sign-in"}>
            <button
              type="submit"
              className="cursor-pointer hover:text-blue-500"
            >
              Sign in!
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
