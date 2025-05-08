"use client";
import ContactForm from "@/components/form/ContactForm";

export default function Page() {
    return (
        <div className="mt-40 h-auto flex justify-center w-full">
            <div className="sm:w-[45%] md:w-[25%] lg:w-[25%] xl:w-[25%]">
                <div className="flex justify-center mb-5 text-2xl font-bold">
                    <h1>Sign Up</h1>
                </div>
                <ContactForm></ContactForm>
            </div>
        </div>
    );
}
