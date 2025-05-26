import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
} from "@/components/ui/sidebar";
import React from "react";

export default function ProblemSidebar() {
  return (
    // <Sidebar variant="inset" >
    <Sidebar side="left" className="sticky" collapsible="none">
      <SidebarContent />
      <SidebarGroup>
        <SidebarGroupLabel>Fundamental</SidebarGroupLabel>
      </SidebarGroup>
    </Sidebar>
  );
}
