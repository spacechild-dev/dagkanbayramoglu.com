import { notFound } from "next/navigation"
import { getAllBlogPosts, getBlogPost } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"

export async function generateStaticParams() {
  const posts = getAllBlogPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    return {}
  }

  return {
    title: post.title,
    description: post.description,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container max-w-3xl py-12">
      <Link
        href="/blog"
        className="text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        ← Blog'a Dön
      </Link>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <header className="mb-8 not-prose">
          <h1 className="text-4xl font-bold tracking-tight mb-2">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg">{post.description}</p>
          <div className="flex items-center gap-4 mt-4 text-sm text-muted-foreground">
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
            <div className="flex gap-2 mt-4">
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
        </header>

        <MDXRemote source={post.content} />
      </article>
    </div>
  )
}
