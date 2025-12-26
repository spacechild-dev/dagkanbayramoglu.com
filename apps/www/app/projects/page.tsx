"use client";

import React from "react";
import Link from "next/link";
import {
  Heading,
  Text,
  Column,
  Flex,
} from "@once-ui-system/core";
import { getAllProjects } from "@/lib/projects";
import { Icons } from "@/components/icons";
import { ShieldCheck } from "lucide-react";

export default function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="m" fillWidth gap="l">
        <Column gap="12" marginBottom="32">
          <Heading variant="display-strong-s">Projects</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            A collection of my web apps, tools, and experiments.
          </Text>
        </Column>

        <Flex gap="24" wrap>
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} style={{ textDecoration: 'none', flex: '1 1 300px' }}>
              <Flex 
                direction="column" 
                padding="24" 
                radius="l" 
                background="surface" 
                border="neutral-alpha-weak" 
                gap="16"
                style={{ height: '100%' }}
              >
                <Flex vertical="center" gap="12">
                  <div style={{ padding: '8px', borderRadius: '8px', background: 'var(--neutral-alpha-weak)' }}>
                    {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="size-5 text-green-500" /> : <ShieldCheck className="size-5 text-blue-500" />}
                  </div>
                  <Heading variant="heading-strong-s">{project.title}</Heading>
                </Flex>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {project.description}
                </Text>
                <Flex gap="8" wrap marginTop="auto">
                  {project.tags.map((tag) => (
                    <Flex key={tag} paddingX="8" paddingY="4" radius="m" background="neutral-alpha-weak">
                      <Text variant="code-default-xs">#{tag}</Text>
                    </Flex>
                  ))}
                </Flex>
              </Flex>
            </Link>
          ))}
        </Flex>
      </Column>
    </Column>
  );
}
