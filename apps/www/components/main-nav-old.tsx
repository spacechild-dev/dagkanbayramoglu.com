"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"

import { siteConfig } from "@/config/site"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"

export function MainNav() {
  const pathname = usePathname()

  return (
    <div className="mr-4 hidden md:flex ">
      <Link href="/" className="mr-4 flex items-center space-x-2">
        <Icons.cultLogoBasic className="size-6 fill-black dark:fill-white " />
        <span className="sr-only">{siteConfig.name}</span>
      </Link>
      <nav className="flex items-center gap-4 text-sm lg:gap-6">
        {docsConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href!}
            className={cn(
              "text-sm font-semibold transition-colors hover:text-foreground/80",
              pathname === item.href ? "text-foreground" : "text-foreground/60"
            )}
          >
            {item.title}
          </Link>
        ))}
      </nav>
    </div>
  )
}
