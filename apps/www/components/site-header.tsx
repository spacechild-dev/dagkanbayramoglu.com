"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Flex,
    Text,
    Row,
    Button,
} from "@once-ui-system/core";
import { docsConfig } from "@/config/docs";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { Code, Menu, X } from "lucide-react";
import { useState } from "react";

export const SiteHeader = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
    const isActive = (path: string) => path === "/" ? pathname === "/" : pathname?.startsWith(path);

    return (
        <Flex
            as="header"
            fillWidth
            paddingTop="24"
            paddingX="24"
            justifyContent="center"
            style={{
                position: 'fixed',
                top: 0,
                zIndex: 100,
            }}
        >
            <Flex 
                maxWidth="m" 
                fillWidth 
                justifyContent="space-between" 
                vertical="center"
                paddingX="24"
                radius="2xl"
                border="neutral-alpha-weak"
                style={{
                    background: 'var(--neutral-background-medium)',
                    backdropFilter: 'blur(12px)',
                    height: '64px',
                    boxShadow: 'var(--shadow-elevation-dark-two)'
                }}
            >
                <Row vertical="center" gap="32">
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none' }}>
                        <Flex padding="8" radius="m" background="brand-alpha-weak" border="brand-alpha-weak">
                            <Code className="size-5 text-brand-strong" />
                        </Flex>
                        <Text variant="heading-strong-s" onBackground="neutral-strong">Dağkan</Text>
                    </Link>

                    <Row gap="4" hide="s">
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
                    </Row>
                </Row>

                <Row vertical="center" gap="12">
                    <div className="hidden sm:block">
                        <Button
                            href={siteConfig.links.buyMeACoffee}
                            target="_blank"
                            variant="secondary"
                            size="s"
                            weight="strong"
                        >
                            Support
                        </Button>
                    </div>
                    
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-10 h-10 flex items-center justify-center text-foreground rounded-xl hover:bg-accent transition-colors border-none bg-transparent cursor-pointer"
                    >
                        {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
                    </button>
                </Row>

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
            </Flex>
        </Flex>
    );
};
