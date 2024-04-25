"use client";

import { QueryClientProvider } from "@tanstack/react-query";

import { queryClient } from "@/lib/react-query";

type AppProviderProps = {
  children: React.ReactNode;
};

export default function AppProvider({ children }: AppProviderProps) {
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
}
