import "@/app/globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import Header from "@/components/header/Header";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export default function ResultLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  );
}
