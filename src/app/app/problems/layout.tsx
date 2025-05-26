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
    <SidebarProvider>
      <ProblemSidebar />
      <main>
        {/* <SidebarTrigger /> */}
        {children}
      </main>
      {/* </SidebarInset> */}
    </SidebarProvider>
  );
}
