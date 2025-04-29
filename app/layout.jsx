import "./globals.css";
import Provider from "./provider";
import Header from "@/components/Header";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

console.log("server");

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${firaSans.className} bg-gray-100  h-300`}>
        <Header></Header>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
