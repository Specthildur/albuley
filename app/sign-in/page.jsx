"use server";

import SignInForm from "@/components/form/SignInForm";

export default async function Page() {
  return (
    <>
      <div className="mt-40 h-auto flex justify-center w-full">
        <div className="sm:w-[45%] md:w-[25%] lg:w-[25%] xl:w-[25%]">
          <div className="flex justify-center mb-5 text-2xl font-bold">
            <h1>Login</h1>
          </div>
          <SignInForm></SignInForm>
        </div>
      </div>
    </>
  );
}
