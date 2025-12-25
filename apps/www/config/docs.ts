import { MainNavItem, SidebarNavItem } from "types/nav"

interface DocsConfig {
  mainNav: MainNavItem[]
  sidebarNav: SidebarNavItem[]
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Playlists",
      href: "/playlists",
    },
    {
      title: "Insights",
      href: "/global-stats",
    },
    {
      title: "Duplicates",
      href: "/global-duplicates",
    },
  ],
  sidebarNav: [],
}
