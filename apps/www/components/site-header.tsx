"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Flex,
    Text,
    Row,
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
            paddingTop="16"
            paddingX="24"
            justifyContent="center"
            style={{
                position: 'fixed',
                top: 0,
                zIndex: 100,
                pointerEvents: 'none'
            }}
        >
            <Flex 
                fillWidth 
                justifyContent="space-between" 
                vertical="center"
                paddingX="12"
                radius="full"
                style={{
                    background: 'var(--neutral-background-medium)',
                    backdropFilter: 'blur(16px)',
                    height: '48px',
                    width: 'fit-content',
                    minWidth: '320px',
                    border: '1px solid var(--neutral-alpha-weak)',
                    boxShadow: 'var(--shadow-elevation-dark-two)',
                    pointerEvents: 'auto'
                }}
            >
                <Row vertical="center" gap="8">
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Flex padding="8" radius="full" background="brand-alpha-weak">
                            <Code className="size-4 text-brand-strong" />
                        </Flex>
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
                                style={{
                                    padding: '6px 12px',
                                    fontSize: '10px'
                                }}
                            >
                                {item.title}
                            </Link>
                        ))}
                    </Row>
                </Row>

                <Row vertical="center" gap="8">
                    <a 
                        href={siteConfig.links.buyMeACoffee} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                            background: '#FFDD00',
                            color: 'black',
                            padding: '6px 12px',
                            borderRadius: '9999px',
                            fontSize: '9px',
                            fontWeight: 900,
                            textTransform: 'uppercase',
                            fontStyle: 'italic',
                            letterSpacing: '0.02em',
                            textDecoration: 'none',
                            boxShadow: '0 2px 8px 0 rgba(255, 221, 0, 0.2)',
                            transition: 'all 0.2s ease'
                        }}
                        className="hover:scale-105 active:scale-95"
                    >
                        <Row vertical="center" gap="4">
                            <Icons.coffee className="size-3" />
                            <span className="hidden sm:inline">Support</span>
                        </Row>
                    </a>
                    
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden w-8 h-8 flex items-center justify-center text-foreground rounded-full hover:bg-accent transition-colors border-none bg-transparent cursor-pointer"
                    >
                        {isMenuOpen ? <X className="size-4" /> : <Menu className="size-4" />}
                    </button>
                </Row>

                {/* Mobile Dropdown */}
                {isMenuOpen && (
                    <div className="absolute top-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-[280px] bg-background/95 backdrop-blur-xl border border-border/50 rounded-2xl shadow-2xl p-4 flex flex-col gap-2 md:hidden">
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
                    </div>
                )}
            </Flex>
        </Flex>
    );
};
