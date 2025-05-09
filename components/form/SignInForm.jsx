"use client";
import Link from "next/link";
//import { authClient } from "@/app/utils/auth-client";
//import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "@/app/utils/sign-in";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const router = useRouter();
  async function handleSignIn(e) {
    const response = await signIn(e);
    if (response.message) {
      toast.error(response.message || "Failed to sign in", {
        position: "bottom-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    } else {
      router.push("dashboard");
    }
  }

  return (
    <>
      <ToastContainer></ToastContainer>
      <form
        className="flex flex-col gap-4 text-sm/6 text-gray-500"
        action={(e) => {
          handleSignIn(e);
        }}
      >
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
            <Link href="/reset-password">Reset Password</Link>
          </div>
          <div className={`flex flex-col mt-2 mb-4`}>
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
            className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 cursor-pointer"
          >
            Sign in
          </button>
        </div>
      </form>
      <div className="flex w-full gap-3 justify-center text-sm/6 text-gray-500 mt-4">
        <p>Don't have an account?</p>
        <Link href={"/sign-up"}>
          <button className="cursor-pointer hover:text-blue-500">
            Sign up!
          </button>
        </Link>
      </div>
    </>
  );
}
