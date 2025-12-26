"use client";

import React from "react";
import {
  Heading,
  Text,
  Button,
  Column,
  Badge,
  Flex,
  LetterFx,
} from "@once-ui-system/core";
import { social } from "@/resources/once-ui.config";
import { FaGithub, FaLinkedin, FaSpotify, FaEnvelope } from "react-icons/fa";
import { SiLastdotfm } from "react-icons/si";
import { NowPlaying } from "@/components/NowPlaying";

export default function Home() {
  return (
    <Column fillWidth horizontal="center" paddingY="160" paddingX="l" style={{ minHeight: "100vh" }}>
      {/* Hero Section */}
      <Column maxWidth="s" horizontal="center" gap="l" align="center">
        <Badge
          textVariant="code-default-s"
          border="neutral-alpha-medium"
          onBackground="neutral-medium"
          vertical="center"
          gap="16"
        >
          <Flex vertical="center" gap="8">
            <FaGithub size={14} />
            <Text marginX="4">
              <LetterFx trigger="instant">Open Source Explorer</LetterFx>
            </Text>
          </Flex>
        </Badge>
        <Heading variant="display-strong-xl" align="center" marginTop="24">
          Dağkan
        </Heading>
        <Text
          variant="heading-default-xl"
          onBackground="neutral-weak"
          wrap="balance"
          align="center"
          marginBottom="32"
        >
          I’m Dağkan (sounds like “DAH-kahn”). I don’t really consider myself a developer, but I love exploring and experimenting with different topics—especially anything related to data-driven performance marketing, analytics, and martech.
        </Text>

        <NowPlaying />
        
        <Flex gap="12" wrap horizontal="center" marginTop="32">
          <Button href={social.github} variant="secondary" size="s">
            <Flex gap="8" vertical="center"><FaGithub /> GitHub</Flex>
          </Button>
          <Button href={social.linkedin} variant="secondary" size="s">
            <Flex gap="8" vertical="center"><FaLinkedin /> LinkedIn</Flex>
          </Button>
          <Button href={social.spotify} variant="secondary" size="s">
            <Flex gap="8" vertical="center"><FaSpotify /> Spotify</Flex>
          </Button>
          <Button href={social.lastfm} variant="secondary" size="s">
            <Flex gap="8" vertical="center"><SiLastdotfm /> Last.fm</Flex>
          </Button>
          <Button href="mailto:hello@dagkanbayramoglu.com" variant="primary" size="s">
            <Flex gap="8" vertical="center"><FaEnvelope /> Mail Me</Flex>
          </Button>
        </Flex>
      </Column>
    </Column>
  );
}