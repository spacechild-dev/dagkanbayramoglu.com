"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import {
    Flex,
    Text,
    Row,
    MegaMenu,
} from "@once-ui-system/core";
import { social } from "@/resources/once-ui.config";
import { FaCoffee } from "react-icons/fa";
import { Code } from "lucide-react";

export const Header = () => {
    const pathname = usePathname();
    
    return (
        <Flex
            as="header"
            fillWidth
            paddingTop="16"
            paddingX="24"
            horizontal="center"
            style={{
                position: 'fixed',
                top: 0,
                zIndex: 100,
                pointerEvents: 'none'
            }}
        >
            <Flex 
                fillWidth 
                horizontal="between" 
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
                            <Code size={16} className="text-brand-strong" />
                        </Flex>
                    </Link>

                    <MegaMenu
                        menuGroups={[
                            {
                                id: "home",
                                label: "Home",
                                href: "/"
                            },
                            {
                                id: "blog",
                                label: "Blog",
                                sections: [
                                    {
                                        title: "Topics",
                                        links: [
                                            {
                                                label: "All Posts",
                                                href: "/blog",
                                                icon: "document",
                                                description: "Read everything",
                                            },
                                            {
                                                label: "Digital Marketing",
                                                href: "/blog?tag=marketing",
                                                icon: "target",
                                                description: "Performance & Strategy",
                                            },
                                            {
                                                label: "Tracking",
                                                href: "/blog?tag=tracking",
                                                icon: "chart",
                                                description: "Analytics & Data",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "projects",
                                label: "Projects",
                                sections: [
                                    {
                                        title: "Explore",
                                        links: [
                                            {
                                                label: "All Projects",
                                                href: "/projects",
                                                icon: "layers",
                                                description: "View all case studies",
                                            },
                                            {
                                                label: "Web Apps",
                                                href: "/projects?type=web",
                                                icon: "globe",
                                                description: "Next.js & React apps",
                                            },
                                            {
                                                label: "Docker Apps",
                                                href: "/projects?type=docker",
                                                icon: "cube",
                                                description: "Self-hosted solutions",
                                            },
                                            {
                                                label: "Chrome Apps",
                                                href: "/projects?type=chrome",
                                                icon: "puzzle",
                                                description: "Browser extensions",
                                            },
                                        ],
                                    },
                                ],
                            },
                            {
                                id: "career",
                                label: "Career",
                                sections: [
                                    {
                                        title: "Professional",
                                        links: [
                                            {
                                                label: "Experience",
                                                href: "/resume#experience",
                                                icon: "briefcase",
                                                description: "Work history",
                                            },
                                            {
                                                label: "Certificates",
                                                href: "/resume#certificates",
                                                icon: "book",
                                                description: "Skills & Badges",
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
                        href={social.buyMeACoffee} 
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
                    >
                        <Row vertical="center" gap="4">
                            <FaCoffee size={12} />
                            <span className="hidden sm:inline">Support</span>
                        </Row>
                    </a>
                </Row>
            </Flex>
        </Flex>
    );
};