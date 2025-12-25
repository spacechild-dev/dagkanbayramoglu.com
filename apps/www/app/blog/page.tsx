import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
} from "@/registry/default/ui/minimal-card"

export const metadata = {
  title: "Blog",
  description: "Sharing my thoughts, projects, and what I've learned",
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="container max-w-3xl py-12">
      <div className="flex flex-col gap-12">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground mt-2 text-base md:text-lg">
            Sharing my thoughts, projects, and what I've learned
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block no-underline">
                <MinimalCard className="bg-card/50 backdrop-blur-sm border-zinc-200/50 shadow-sm transition-all hover:shadow-md p-6">
                  <div className="flex flex-col gap-3">
                    <MinimalCardTitle className="text-2xl group-hover:text-primary transition-colors">
                      {post.title}
                    </MinimalCardTitle>
                    <MinimalCardDescription className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3">
                      {post.description}
                    </MinimalCardDescription>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground font-medium uppercase tracking-wider">
                        <time dateTime={post.date}>
                          {new Date(post.date).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                        {post.author && <span>· {post.author}</span>}
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span
                            key={tag}
                            className="inline-block bg-muted/50 px-2 py-0.5 text-[10px] rounded border border-zinc-200/50"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </MinimalCard>
              </Link>
            ))
          )}
        </div>
      </div>
    </div>
  )
}