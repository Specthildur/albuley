"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { searchFunction } from "../services/searchFunction";
import { useState } from "react";

export default function QueryProvider({ children }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            queryFn: searchFunction,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
