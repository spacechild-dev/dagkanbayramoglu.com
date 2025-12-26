"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Flex,
    Text,
    Row,
    MegaMenu,
} from "@once-ui-system/core";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/icons";
import { Code } from "lucide-react";

export const SiteHeader = () => {
    const pathname = usePathname();

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
                    minWidth: '400px',
                    border: '1px solid var(--neutral-alpha-weak)',
                    boxShadow: 'var(--shadow-elevation-dark-two)',
                    pointerEvents: 'auto'
                }}
            >
                <Row vertical="center" gap="16">
                    <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none' }}>
                        <Flex padding="8" radius="full" background="brand-alpha-weak">
                            <Code className="size-4 text-brand-strong" />
                        </Flex>
                    </Link>

                    <MegaMenu
                        menuGroups={[
                            {
                                id: "navigate",
                                label: "Navigate",
                                sections: [
                                    {
                                        title: "General",
                                        links: [
                                            {
                                                label: "Home",
                                                href: "/",
                                                icon: "home",
                                                description: "Return to overview",
                                            },
                                            {
                                                label: "Career",
                                                href: "/resume",
                                                icon: "briefcase",
                                                description: "Work experience",
                                            },
                                        ],
                                    },
                                    {
                                        title: "Content",
                                        links: [
                                            {
                                                label: "Blog",
                                                href: "/blog",
                                                icon: "document",
                                                description: "Latest writings",
                                            },
                                            {
                                                label: "Projects",
                                                href: "/projects",
                                                icon: "layers",
                                                description: "Case studies",
                                            },
                                        ],
                                    },
                                ],
                            }
                        ]}
                    />
                </Row>

                <Row vertical="center" gap="8">
                    <a 
                        href={siteConfig.links.buyMeACoffee} 
                        target="_blank" 
                        rel="noreferrer"
                        style={{
                            background: '#FFDD00',
                            color: 'black',
                            padding: '6px 16px',
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
                </Row>
            </Flex>
        </Flex>
    );
};