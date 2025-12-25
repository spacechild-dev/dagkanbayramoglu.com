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
    <div className="container max-w-3xl py-12">
      <div className="flex flex-col gap-16">
        <div className="px-2 flex flex-col gap-4 border-b border-accent-teal/20 pb-8">
          <Link
            href="/blog"
            className="text-sm font-bold uppercase tracking-widest text-accent-teal/80 hover:text-accent-teal mb-4 inline-block transition-colors"
          >
            ← Back to Archive
          </Link>
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Tagged with <span className="text-accent-teal italic">#{decodedTag}</span>
          </h1>
        </div>

        <div className="flex flex-col gap-16 px-2">
          {posts.map((post) => (
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
                {post.tags.map((t) => (
                  <Link
                    key={t}
                    href={`/blog/tags/${encodeURIComponent(t)}`}
                    className={`inline-block bg-white dark:bg-zinc-900 px-2.5 py-0.5 text-[10px] font-bold italic border rounded-md transition-all ${
                      t.toLowerCase() === decodedTag.toLowerCase()
                        ? "text-accent-teal border-accent-teal/40 shadow-sm"
                        : "text-accent-teal/80 border-accent-teal/10 hover:border-accent-teal/30"
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
