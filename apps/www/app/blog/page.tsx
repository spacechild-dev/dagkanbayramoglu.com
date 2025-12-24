import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"

export const metadata = {
  title: "Blog",
  description: "Düşünceler, projeler ve öğrendiklerim",
}

export default function BlogPage() {
  const posts = getAllBlogPosts()

  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-muted-foreground mt-2">
            Düşüncelerim, projelerim ve öğrendiklerimi paylaşıyorum
          </p>
        </div>

        <div className="flex flex-col gap-6">
          {posts.length === 0 ? (
            <p className="text-muted-foreground">Henüz blog yazısı yok.</p>
          ) : (
            posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col gap-2 border-b pb-6"
              >
                <Link href={`/blog/${post.slug}`}>
                  <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-muted-foreground">{post.description}</p>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <time dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("tr-TR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                  {post.author && <span>· {post.author}</span>}
                </div>
                {post.tags.length > 0 && (
                  <div className="flex gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block bg-muted px-2 py-1 text-xs rounded"
                      >
                        {tag}
                      </span>
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
