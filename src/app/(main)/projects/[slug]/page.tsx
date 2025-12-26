"use client";

import React from "react";
import {
    Heading,
    Text,
    Column,
    Flex,
    Row,
    Line,
} from "@once-ui-system/core";
import { FaSpotify } from "react-icons/fa";
import { HiOutlineCheckCircle } from "react-icons/hi2";

export default function ProjectDetailPage() {
  const project = {
    title: "Spotify MixtapeKit",
    description: "A comprehensive look into building a toolkit for Spotify enthusiasts.",
    tags: ["spotify", "react", "api"]
  };

  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="m" fillWidth gap="64">
        <Row gap="48" vertical="center" wrap>
            <Column flex={1} gap="24" style={{ minWidth: '300px' }}>
                <Column gap="12">
                    <Heading variant="display-strong-m">{project.title}</Heading>
                    <Text variant="body-default-l" onBackground="neutral-weak">{project.description}</Text>
                </Column>
                <Flex gap="8" wrap>
                    {project.tags.map((tag) => (
                        <Flex key={tag} paddingX="8" paddingY="4" radius="m" background="neutral-alpha-weak">
                            <Text variant="code-default-xs">#{tag}</Text>
                        </Flex>
                    ))}
                </Flex>
            </Column>
            <Flex flex={1} style={{ minWidth: '300px' }}>
                <Flex fillWidth style={{ aspectRatio: '16/10' }} background="surface" border="neutral-alpha-weak" radius="l" center>
                    <FaSpotify size={64} className="text-emerald-500/20" />
                </Flex>
            </Flex>
        </Row>

        <Column gap="24">
            <Heading variant="heading-strong-l">Key Features</Heading>
            <Line background="neutral-alpha-weak" />
            <Row gap="24" wrap>
                {['Deep Analysis', 'Curation', 'Export'].map((feature, index) => (
                    <Flex key={index} flex={1} padding="24" radius="l" background="surface" border="neutral-alpha-weak" gap="12" vertical="center">
                        <HiOutlineCheckCircle size={20} className="text-emerald-500 shrink-0" />
                        <Text variant="label-strong-s">{feature}</Text>
                    </Flex>
                ))}
            </Row>
        </Column>
      </Column>
    </Column>
  );
}