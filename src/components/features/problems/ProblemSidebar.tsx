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
    url: "/app/problems/fundamentals/info",
    icon: Info,
  },
  {
    title: "Problem 1",
    url: "/app/problems/fundamentals/problem-1",
  },
  {
    title: "Problem 2",
    url: "/app/problems/fundamentals/problem-2",
  },
  {
    title: "Problem 3",
    url: "/app/problems/fundamentals/problem-3",
  },
  {
    title: "Problem 4",
    url: "/app/problems/fundamentals/problem-4",
  },
  {
    title: "Problem 5",
    url: "/app/problems/problem-5",
  },
];

export default function ProblemSidebar() {
  return (
    <Sidebar side="left" className="sticky h-9/10" collapsible="none">
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
      <SidebarGroup>
        <SidebarGroupLabel>AI Generated Problems</SidebarGroupLabel>
        <SidebarGroupContent>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild>
                <Link href="/app/problems/ai-generated/info">
                  <Info />
                  <span>Info</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroupContent>
      </SidebarGroup>
    </Sidebar>
  );
}
