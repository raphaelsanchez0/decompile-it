import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import React from "react";

export default function ProblemSidebar() {
  return (
    <Sidebar>
      <SidebarContent />
      <SidebarGroup>
        <SidebarGroupLabel>Fundamental Problems</SidebarGroupLabel>
      </SidebarGroup>
    </Sidebar>
  );
}
