import SignUpForm from "@/components/form/SignUpForm";

export default async function Page() {
  return (
    <div className="mt-40 h-auto flex w-full justify-center align-middle">
      <div className="flex h-full w-full justify-center align-middle">
        <div className="p-5 rounded-2xl bg-white lg:min-w-1/3 md:min-w-2/3 sm:min-w-4/5 xs:min-w-4/5">
          <div className="flex justify-center mb-5 text-2xl font-bold">
            <h1>Sign Up</h1>
          </div>
          <SignUpForm></SignUpForm>
        </div>
      </div>
    </div>
  );
}
