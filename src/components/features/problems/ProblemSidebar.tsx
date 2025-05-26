import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import React from "react";

import { Info } from "lucide-react";
import Link from "next/link";

const items = [
  {
    title: "Info",
    url: "/app/problems/info",
    icon: Info,
  },
  {
    title: "Problem 1",
    url: "/app/problems/problem-1",
  },
  {
    title: "Problem 2",
    url: "/app/problems/problem-2",
  },
  {
    title: "Problem 3",
    url: "/app/problems/problem-3",
  },
  {
    title: "Problem 4",
    url: "/app/problems/problem-4",
  },
  {
    title: "Problem 5",
    url: "/app/problems/problem-5",
  },
];

export default function ProblemSidebar() {
  return (
    <Sidebar side="left" className="sticky" collapsible="none">
      <SidebarContent />
      <SidebarGroup>
        <SidebarGroupLabel>Fundamental Problems</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            {items.map((item) => (
              <SidebarMenuItem key={item.title}>
                <SidebarMenuButton asChild>
                  {item.icon ? (
                    <Link href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </Link>
                  ) : (
                    <Link href={item.url}>{item.title}</Link>
                  )}
                </SidebarMenuButton>
              </SidebarMenuItem>
            ))}
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </Sidebar>
  );
}
