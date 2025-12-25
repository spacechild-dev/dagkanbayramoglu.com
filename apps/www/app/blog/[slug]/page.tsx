import { notFound } from "next/navigation"
import { getAllBlogPosts, getBlogPost } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { components } from "@/components/blog-mdx-components"
import rehypePrettyCode from "rehype-pretty-code"

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
        className="text-sm font-bold uppercase tracking-widest text-accent-teal/80 hover:text-accent-teal mb-12 inline-block transition-colors"
      >
        ← Back to Archive
      </Link>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <header className="mb-12 not-prose">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight text-foreground">
            {post.title}
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed mb-8">
            {post.description}
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.author && (
              <>
                <span>·</span>
                <span>{post.author}</span>
              </>
            )}
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${encodeURIComponent(tag)}`}
                  className="inline-block bg-white dark:bg-zinc-900 px-2.5 py-1 text-xs font-medium text-muted-foreground hover:text-accent-teal border border-accent-teal/5 hover:border-accent-teal/20 rounded-md transition-all shadow-sm"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        <div className="mdx-content">
          <MDXRemote 
            source={post.content} 
            components={components}
            options={{
              mdxOptions: {
                rehypePlugins: [
                  [
                    rehypePrettyCode,
                    {
                      theme: "github-light-default",
                    },
                  ],
                ],
              },
            }}
          />
        </div>
      </article>
    </div>
  )
}
