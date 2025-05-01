"use client";

import { useStore } from "@/app/lib/store";
import { useShallow } from "zustand/react/shallow";
import { notFound } from "next/navigation";

export default function Details({ resultId }) {
  const results = useStore(
    useShallow((state) => state.results.map((result) => result))
  );
  const searchRes = results.some((o) => o.id === resultId);
  if (!searchRes) {
    notFound();
  }

  return <div>{resultId}</div>;
}
