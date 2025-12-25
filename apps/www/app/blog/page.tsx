import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog",
  description: "Sharing my thoughts, projects, and what I've learned",
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="container max-w-3xl py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground mt-2 text-base md:text-lg">
            Sharing my thoughts, projects, and what I've learned
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col gap-3 rounded-xl border bg-card p-6 transition-all hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed line-clamp-3">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.author && <span>· {post.author}</span>}
                </div>
                {post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-2">
                    {post.tags.map((tag) => (
                      <Link
                        key={tag}
                        href={`/blog/tags/${encodeURIComponent(tag)}`}
                        className="inline-block bg-muted px-2 py-1 text-xs rounded hover:bg-primary hover:text-primary-foreground transition-colors"
                      >
                        #{tag}
                      </Link>
                    ))}
                  </div>
                )}
              </article>
            ))
          )}
        </div>
      </div>
    </div>
  )
}
