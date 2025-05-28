import React from "react";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import ProblemSidebar from "@/components/features/problems/ProblemSidebar";

export default function ProblemsSidebarLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SidebarProvider className="h-15/16">
      <ProblemSidebar />
      <main className="w-full">
        {/* <SidebarTrigger /> */}
        {children}
      </main>
      {/* </SidebarInset> */}
    </SidebarProvider>
  );
}
