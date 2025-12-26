"use client";

import React from "react";
import {
  Heading,
  Text,
  Column,
  Flex,
  Row,
  Line,
  Button
} from "@once-ui-system/core";

export default function ResumePage() {
  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="m" fillWidth gap="48">
        {/* Header */}
        <Column gap="16">
          <Heading variant="display-strong-s">Career</Heading>
          <Text variant="heading-default-l" onBackground="neutral-strong">
            Digital Performance and Media Account Manager
          </Text>
          <Flex gap="12" wrap vertical="center">
            <Text variant="body-default-s" onBackground="neutral-weak">hello@dagkanbayramoglu.com</Text>
            <Line vert background="neutral-alpha-weak" height="12" />
            <Button href="https://github.com/spacechild-dev" variant="tertiary" size="s">GitHub</Button>
            <Line vert background="neutral-alpha-weak" height="12" />
            <Button href="https://linkedin.com/in/dagkanbayramoglu" variant="tertiary" size="s">LinkedIn</Button>
          </Flex>
        </Column>

        {/* Professional Summary */}
        <Column gap="16">
          <Heading variant="heading-strong-l">Professional Summary</Heading>
          <Line background="neutral-alpha-weak" />
          <Text variant="body-default-m" onBackground="neutral-weak">
            Highly accomplished and results-driven Digital Marketing professional with extensive experience in performance marketing, team leadership, and strategic campaign management. Proven ability to drive ROI, optimize media budgets, and coordinate cross-functional teams to achieve operational alignment and business growth.
          </Text>
        </Column>

        {/* Experience */}
        <Column gap="32">
          <Heading variant="heading-strong-l">Experience</Heading>
          <Line background="neutral-alpha-weak" />
          
          {/* OPTDCOM */}
          <Column gap="16">
            <Row justifyContent="space-between" vertical="center" wrap>
              <Heading variant="heading-strong-m" onBackground="brand-strong">OPTDCOM</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">Oct 2025 – Present</Text>
            </Row>
            <Column paddingLeft="24" style={{ borderLeft: '2px solid var(--neutral-alpha-weak)' }} gap="8">
              <Text variant="label-strong-m">Digital Performance and Media Account Manager</Text>
              <Text variant="body-default-s" onBackground="neutral-weak">Managing performance and media operations across multiple clients and verticals. Coordinating strategy and execution for performance marketing workflows.</Text>
            </Column>
          </Column>

          {/* ROIPUBLIC */}
          <Column gap="16">
            <Row justifyContent="space-between" vertical="center" wrap>
              <Heading variant="heading-strong-m" onBackground="brand-strong">ROIPUBLIC</Heading>
              <Text variant="body-default-s" onBackground="neutral-weak">Feb 2024 – Oct 2025</Text>
            </Row>
            <Column paddingLeft="24" style={{ borderLeft: '2px solid var(--neutral-alpha-weak)' }} gap="16">
              <Column gap="4">
                <Text variant="label-strong-m">Performance Marketing Team Lead</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">Led a team of six with focus on mentorship, coordination, and performance marketing execution. Managed multi-platform campaigns and optimized media budgets.</Text>
              </Column>
              <Column gap="4">
                <Text variant="label-strong-m">Sr. Performance Marketing Executive</Text>
                <Text variant="body-default-s" onBackground="neutral-weak">Owned end-to-end campaign execution and reporting across performance platforms.</Text>
              </Column>
            </Column>
          </Column>
        </Column>

        {/* Certifications */}
        <Column gap="16">
          <Heading variant="heading-strong-l">Certifications</Heading>
          <Line background="neutral-alpha-weak" />
          <Row gap="32" wrap>
            <Column gap="8">
              <Text variant="body-default-s">• Criteo Programmatic Manager</Text>
              <Text variant="body-default-s">• Meta Certified Associate</Text>
            </Column>
            <Column gap="8">
              <Text variant="body-default-s">• Google Ads Expert</Text>
              <Text variant="body-default-s">• Apple Search Ads</Text>
            </Column>
          </Row>
        </Column>

        {/* Skills */}
        <Column gap="16">
          <Heading variant="heading-strong-l">Skills & Tools</Heading>
          <Line background="neutral-alpha-weak" />
          <Flex gap="12" wrap>
            {['Google Ads', 'Meta Ads', 'GA4', 'GTM', 'Python', 'JavaScript', 'Looker Studio'].map(skill => (
              <Flex key={skill} paddingX="12" paddingY="6" radius="m" background="surface" border="neutral-alpha-weak">
                <Text variant="code-default-xs">{skill}</Text>
              </Flex>
            ))}
          </Flex>
        </Column>
      </Column>
    </Column>
  );
}
