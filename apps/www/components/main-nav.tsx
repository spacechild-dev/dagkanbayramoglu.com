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
  const isActive = (path: string) => pathname?.startsWith(path)

  return (
    <div className="flex items-center gap-6">
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
          <Icons.disc className="size-5 text-emerald-500" />
        </div>
        <span className="font-bold text-foreground tracking-tight">MixtapeKit</span>
      </Link>
      
      <div className="hidden md:flex items-center gap-1 ml-4 border-l border-border pl-4">
        {docsConfig.mainNav.map((item) => (
          <Link
            key={item.href}
            href={item.href!}
            className={cn(
              "nav-link",
              isActive(item.href!) ? "active" : ""
            )}
          >
            {item.title}
          </Link>
        ))}
      </div>
    </div>
  )
}
