"use client";
import Link from "next/link";
import passwordValidator from "@/app/utils/checker";
import { useState } from "react";
import { signUp } from "@/app/utils/sign-up";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function ContactForm() {
    const [isPending, setIsPending] = useState(false);
    const router = useRouter();

    async function handleSubmit(formData) {
        const result = await passwordValidator(
            formData.get("password"),
            formData.get("confirm-password")
        );
        if (result.error) {
            toast.error(`${result.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: false,
                progress: undefined,
                theme: "light",
                position: "top-center",
            });
            return;
        }

        const response = await signUp(formData);
        if (response.message === "User already exists") {
            toast.error(response.message || "Failed to sign up", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
            router.push("/sign-up");
        } else if (response.message) {
            toast.error(response.message || "Failed to sign up", {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            });
        } else {
            router.push("dashboard");
        }
    }

    return (
        <>
            <ToastContainer />
            <form
                className="flex flex-col gap-2 text-sm/6 text-gray-500"
                action={(e) => {
                    handleSubmit(e);
                }}
            >
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-start">
                        <label
                            htmlFor="full-name"
                            className="text-gray-800 font-medium"
                        >
                            Full Name
                        </label>
                    </div>
                    <div className="flex flex-col mt-2">
                        <input
                            id="full-name"
                            required
                            name="full-name"
                            placeholder="Full Name"
                            disabled={isPending}
                            className="text-center border-1 py-2 px-4 rounded-md focus:outline-offset-1 focus:border-black text-gray-900"
                        />
                    </div>
                </div>
                <div className="flex flex-col space-y-2">
                    <div className="flex justify-start">
                        <label
                            htmlFor="name"
                            className="text-gray-800 font-medium"
                        >
                            Email Address
                        </label>
                    </div>
                    <div className="flex flex-col mt-2">
                        <input
                            id="email"
                            required
                            name="email"
                            placeholder="Email"
                            disabled={isPending}
                            className="text-center border-1 py-2 px-4 rounded-md focus:outline-offset-1 focus:border-black text-gray-900"
                        />
                    </div>
                </div>
                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <label
                            htmlFor="name"
                            className="text-gray-800 font-medium"
                        >
                            Password
                        </label>
                    </div>
                    <div className={`flex flex-col mt-2`}>
                        <input
                            id="password"
                            required
                            name="password"
                            type="password"
                            placeholder="Password"
                            disabled={isPending}
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
                        disabled={isPending}
                        className="text-center border-1 py-2 mt-1 px-4 rounded-md focus:outline-offset-1 focus:border-black text-gray-900"
                    />
                </div>
                <div>
                    <button
                        type="submit"
                        className="flex w-full justify-center rounded-md bg-black px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-gray-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400 cursor-pointer"
                        disabled={isPending}
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
        </>
    );
}
