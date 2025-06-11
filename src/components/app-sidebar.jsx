import * as React from "react";
import { ChevronRight } from "lucide-react";

import { SearchForm } from "@/components/search-form";
import { VersionSwitcher } from "@/components/version-switcher";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

// This is sample data.
const data = {
  versions: ["1.0.1", "1.1.0-alpha", "2.0.0-beta1"],
  navMain: [
    {
      title: "Dashboard",
      url: "/",
      // items: [
      //   {
      //     title: "Installation",
      //     url: "#",
      //   },
      //   {
      //     title: "Project Structure",
      //     url: "#",
      //   },
      // ],
    },
    {
      title: "Member",
      url: "#",
      items: [
        {
          title: "List Member",
          url: "list-member",
        },
        // {
        //   title: "Tambah Pengguna",
        //   url: "tambah-pengguna",
        // },
      ],
    },
    {
      title: "Buku",
      url: "#",
      items: [
        {
          title: "List Buku",
          url: "list-buku",
        },
        {
          title: "Peminjaman",
          url: "peminjaman",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }) {
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <VersionSwitcher
          versions={data.versions}
          defaultVersion={data.versions[0]}
        />
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        {data.navMain.map((item) =>
          item.items && item.items.length > 0 ? (
            <Collapsible
              key={item.title}
              title={item.title}
              defaultOpen
              className="group/collapsible"
            >
              <SidebarGroup>
                <SidebarGroupLabel
                  asChild
                  className="group/label text-sidebar-foreground hover:bg-sidebar-accent hover:text-sidebar-accent-foreground text-sm"
                >
                  <CollapsibleTrigger>
                    {item.title}
                    <ChevronRight className="ml-auto transition-transform group-data-[state=open]/collapsible:rotate-90" />
                  </CollapsibleTrigger>
                </SidebarGroupLabel>
                <CollapsibleContent>
                  <SidebarGroupContent>
                    <SidebarMenu>
                      {item.items.map((child) => (
                        <SidebarMenuItem
                          key={child.title}
                          className="sidebar-no-marker"
                        >
                          <SidebarMenuButton asChild isActive={child.isActive}>
                            <Link to={child.url}>{child.title}</Link>
                          </SidebarMenuButton>
                        </SidebarMenuItem>
                      ))}
                    </SidebarMenu>
                  </SidebarGroupContent>
                </CollapsibleContent>
              </SidebarGroup>
            </Collapsible>
          ) : (
            <SidebarGroup key={item.title}>
              <SidebarMenuItem className="sidebar-no-marker">
                <SidebarMenuButton
                  asChild
                  isActive={item.isActive}
                  className="font-semibold"
                >
                  <Link to={item.url}>{item.title}</Link>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarGroup>
          )
        )}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
