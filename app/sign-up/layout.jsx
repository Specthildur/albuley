import Header from "@/components/header/Header";

export default function LoginLayout({ children }) {
    return (
        <>
            <Header base={false}></Header>
            {children}
        </>
    );
}
