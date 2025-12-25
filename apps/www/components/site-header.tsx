"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"

import { siteConfig } from "@/config/site"
import { docsConfig } from "@/config/docs"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()
  const isActive = (path: string) => pathname?.startsWith(path)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
      <nav className="max-w-6xl mx-auto bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg dark:shadow-black/20 px-4 h-14 flex items-center justify-between relative">
        {/* Left: Brand & Desktop Nav */}
        <MainNav />

        {/* Right: Actions & Mobile Toggle */}
        <div className="flex items-center gap-2">
          <Link
            href={siteConfig.links.buyMeACoffee}
            target="_blank"
            className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFDD00] text-black hover:bg-[#FFEA00] transition-all font-black uppercase italic tracking-tighter text-[10px] shadow-lg shadow-[#FFDD00]/20 active:scale-95"
          >
            <Icons.coffee className="size-3" />
            <span>Buy me a coffee</span>
          </Link>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden w-10 h-10 flex items-center justify-center text-foreground rounded-xl hover:bg-accent"
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {isMenuOpen && (
          <div className="absolute top-[calc(100%+12px)] left-0 right-0 bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 md:hidden">
            {docsConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href!}
                onClick={() => setIsMenuOpen(false)}
                className={cn(
                  "nav-link w-full text-left",
                  isActive(item.href!) ? "active" : ""
                )}
              >
                {item.title}
              </Link>
            ))}
            <Link
              href={siteConfig.links.buyMeACoffee}
              target="_blank"
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FFDD00] text-black font-black uppercase italic tracking-tighter text-xs mt-2"
            >
              <Icons.coffee className="size-4" />
              <span>Buy me a coffee</span>
            </Link>
          </div>
        )}
      </nav>
    </header>
  )
}
