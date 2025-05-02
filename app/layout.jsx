import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v15-appRouter";
import QueryProvider from "./providers/QueryProvider";
import { Fira_Sans } from "next/font/google";

const firaSans = Fira_Sans({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500"],
});

export default function RootLayout({ children }) {
  return (
    <html>
      <body className={`${firaSans.className} bg-gray-100 h-dvh`}>
        <QueryProvider>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
