import Link from "next/link"
import { getBlogPostsByTag, getAllBlogTags } from "@/lib/blog"
import { notFound } from "next/navigation"

export async function generateStaticParams() {
  const tags = getAllBlogTags()
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)

  return {
    title: `Blog posts tagged with "${decodedTag}"`,
    description: `All blog posts categorized under the tag: ${decodedTag}`,
  }
}

export default async function BlogTagPage({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  const posts = getBlogPostsByTag(decodedTag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col gap-8">
        <div>
          <Link
            href="/blog"
            className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block"
          >
            ← Back to all posts
          </Link>
          <h1 className="text-4xl font-bold tracking-tight">
            Posts tagged with <span className="text-primary italic">#{decodedTag}</span>
          </h1>
        </div>

        <div className="flex flex-col gap-6">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="group flex flex-col gap-3 rounded-xl border bg-card p-6 transition-all hover:shadow-md"
            >
              <Link href={`/blog/${post.slug}`}>
                <h2 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
              </Link>
              <p className="text-muted-foreground">{post.description}</p>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
              <div className="flex flex-wrap gap-2 mt-2">
                {post.tags.map((t) => (
                  <Link
                    key={t}
                    href={`/blog/tags/${encodeURIComponent(t)}`}
                    className={`inline-block px-2 py-1 text-xs rounded hover:bg-primary hover:text-primary-foreground transition-colors ${
                      t.toLowerCase() === decodedTag.toLowerCase()
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted"
                    }`}
                  >
                    #{t}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
