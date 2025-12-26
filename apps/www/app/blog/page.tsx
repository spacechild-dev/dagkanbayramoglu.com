"use client";

import React from "react";
import Link from "next/link";
import {
  Heading,
  Text,
  Column,
  Flex,
} from "@once-ui-system/core";
import { getAllBlogPosts } from "@/lib/blog";

export default function BlogPage() {
  const posts = getAllBlogPosts();

  return (
    <Column fillWidth horizontal="center" paddingY="128" paddingX="l" style={{ minHeight: "100vh" }}>
      <Column maxWidth="m" fillWidth gap="l">
        <Column gap="12" marginBottom="32">
          <Heading variant="display-strong-s">Blog</Heading>
          <Text variant="body-default-l" onBackground="neutral-weak">
            Sharing my thoughts, projects, and what I've learned
          </Text>
        </Column>

        <Flex direction="column" gap="16">
          {posts.length === 0 ? (
            <Text onBackground="neutral-weak">No blog posts yet.</Text>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} style={{ textDecoration: 'none', width: '100%' }}>
                <Flex 
                  fillWidth 
                  padding="24" 
                  radius="l" 
                  background="surface" 
                  border="neutral-alpha-weak" 
                  direction="column" 
                  gap="8"
                  style={{ transition: 'all 0.2s ease' }}
                >
                  <Text variant="code-default-s" onBackground="neutral-weak">
                    {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                  </Text>
                  <Heading variant="heading-strong-m">{post.title}</Heading>
                  <Text variant="body-default-m" onBackground="neutral-weak" lineClamp={3}>
                    {post.description}
                  </Text>
                  <Flex gap="8" wrap marginTop="8">
                    {post.tags.map((tag) => (
                      <Flex key={tag} paddingX="8" paddingY="4" radius="m" background="neutral-alpha-weak">
                        <Text variant="code-default-xs">#{tag}</Text>
                      </Flex>
                    ))}
                  </Flex>
                </Flex>
              </Link>
            ))
          )}
        </Flex>
      </Column>
    </Column>
  );
}