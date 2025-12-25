import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"
import { StickerIcon, Newspaper, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
} from "@/registry/default/ui/minimal-card"
import { Card } from "@/components/ui/card"

export const metadata = {
  title: "Blog",
  description: "Sharing my thoughts, projects, and what I've learned",
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="container max-w-3xl py-12">
      <div className="flex flex-col gap-16">
        <div className="px-2 flex flex-col gap-4 border-b border-accent-teal/20 pb-8">
          <h1 className="text-4xl font-bold tracking-tight text-accent-teal">Archive</h1>
          <p className="text-muted-foreground text-lg leading-relaxed">
            A collection of thoughts, notes, and experiments.
          </p>
        </div>

        <div className="flex flex-col gap-16 px-2">
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <article key={post.slug} className="group relative flex flex-col items-start">
                <h2 className="text-2xl font-bold tracking-tight text-foreground group-hover:text-accent-teal transition-colors mb-3">
                  <Link href={`/blog/${post.slug}`}>
                    <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                    <span className="relative z-10">{post.title}</span>
                  </Link>
                </h2>
                <time className="relative z-10 order-first mb-3 flex items-center text-sm font-mono font-bold text-muted-foreground/60 uppercase tracking-widest pl-3.5" dateTime={post.date}>
                  <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <span className="h-4 w-0.5 rounded-full bg-accent-teal/40" />
                  </span>
                  {new Date(post.date).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </time>
                <p className="relative z-10 mt-2 text-base leading-relaxed text-muted-foreground line-clamp-3 font-normal">
                  {post.description}
                </p>
                <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                  {post.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="inline-block bg-white dark:bg-zinc-900 px-2.5 py-0.5 text-[10px] font-bold italic text-accent-teal/80 border border-accent-teal/10 rounded-md">#{tag}</span>
                  ))}
                </div>
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
