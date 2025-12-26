"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { 
    Flex, 
    Text, 
    Row, 
    Button,
    IconButton
} from "@once-ui-system/core";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Menu, X, Code } from "lucide-react";

export const SiteHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    
    const isActive = (path: string) => path === "/" ? pathname === "/" : pathname?.startsWith(path);

    return (
        <header className="fixed top-0 left-0 right-0 z-50 px-4 py-4">
            <nav className="max-w-6xl mx-auto bg-background/80 backdrop-blur-md border border-border/50 rounded-2xl shadow-lg dark:shadow-black/20 px-4 h-14 flex items-center justify-between relative">
                {/* Left: Brand & Desktop Nav */}
                <div className="flex items-center gap-6">
                    <Link href="/" className="flex items-center gap-2 group no-underline">
                        <div className="w-8 h-8 bg-emerald-500/10 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors border border-emerald-500/20">
                            <Code className="size-5 text-emerald-500" />
                        </div>
                        <Text variant="heading-strong-s" onBackground="neutral-strong">Dağkan</Text>
                    </Link>
                    
                    <div className="hidden md:flex items-center gap-1 ml-4 border-l border-border pl-4">
                        {docsConfig.mainNav.map((item) => (
                            <Link 
                                key={item.href} 
                                href={item.href!}
                                className={cn(
                                    "nav-link no-underline",
                                    isActive(item.href!) ? "active" : ""
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Right: Actions & Mobile Toggle */}
                <div className="flex items-center gap-2">
                    <a 
                        href={siteConfig.links.buyMeACoffee} 
                        target="_blank" 
                        rel="noreferrer"
                        className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FFDD00] text-black hover:bg-[#FFEA00] transition-all font-black uppercase italic tracking-tighter text-[10px] shadow-lg shadow-[#FFDD00]/20 active:scale-95 no-underline"
                    >
                        <Icons.coffee className="size-3" />
                        <span>Buy me a coffee</span>
                    </a>

                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center text-foreground rounded-xl hover:bg-accent transition-colors"
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
                                    "nav-link w-full text-left no-underline",
                                    isActive(item.href!) ? "active" : ""
                                )}
                            >
                                {item.title}
                            </Link>
                        ))}
                        <a 
                            href={siteConfig.links.buyMeACoffee}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#FFDD00] text-black font-black uppercase italic tracking-tighter text-xs mt-2 no-underline"
                        >
                            <Icons.coffee className="size-4" />
                            <span>Buy me a coffee</span>
                        </a>
                    </div>
                )}
            </nav>
        </header>
    );
};
