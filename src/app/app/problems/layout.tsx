import React from "react";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

export default function ProblemsSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <SidebarProvider></SidebarProvider>;
}
