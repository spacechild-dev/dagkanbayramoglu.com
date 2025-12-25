"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"
import { MobileNav } from "@/components/mobile-nav"
import { ModeToggle } from "@/components/mode-toggle"

import { DistortedGlass } from "./distorted-glass"

export function SiteHeader() {
  let pathname = usePathname()
  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full",
        pathname?.includes("/docs")
          ? "-mb-12 bg-background backdrop-blur supports-[backdrop-filter]:bg-background/60 dark:bg-[#171517] lg:backdrop-blur-xl"
          : "-mb-14"
      )}
    >
      <div className="flex h-14 items-center  px-2 ">
        <MainNav />
        <MobileNav />
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <nav className="flex items-center gap-0.5">
            <Link href="https://www.linkedin.com/in/dagkanbayramoglu/" target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0 hover:text-accent-teal hover:bg-accent-teal/5")}>
                <Icons.linkedin className="size-4" />
                <span className="sr-only">LinkedIn</span>
              </div>
            </Link>
            <Link href="https://open.spotify.com/user/az7ds62ok9xtg09ua7cs7ym9i" target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0 hover:text-accent-teal hover:bg-accent-teal/5")}>
                <Icons.spotify className="size-4" />
                <span className="sr-only">Spotify</span>
              </div>
            </Link>
            <Link href="https://www.last.fm/user/dagkan/listening-report/year" target="_blank" rel="noreferrer">
              <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0 hover:text-accent-teal hover:bg-accent-teal/5")}>
                <Icons.lastfm className="size-4" />
                <span className="sr-only">Last.fm</span>
              </div>
            </Link>
            <Link
              href={siteConfig.links.github}
              target="_blank"
              rel="noreferrer"
            >
              <div
                className={cn(
                  buttonVariants({
                    variant: "ghost",
                  }),
                  "w-9 px-0 hover:text-accent-teal hover:bg-accent-teal/5"
                )}
              >
                <Icons.gitHub className="size-4" />
                <span className="sr-only">GitHub</span>
              </div>
            </Link>
            {pathname?.includes("/docs") ? <ModeToggle /> : null}
          </nav>
        </div>
      </div>

      {!pathname?.includes("/docs") ? (
        <div className="hidden lg:block lg:w-full -mt-[17px]">
          <DistortedGlass></DistortedGlass>
        </div>
      ) : null}
    </header>
  )
}
