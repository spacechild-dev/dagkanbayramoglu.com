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
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed font-medium mb-8">
            {post.description}
          </p>
          <div className="flex items-center gap-4 mt-8 text-xs font-mono font-bold text-muted-foreground/60 uppercase tracking-widest border-b border-accent-teal/20 pb-8">
            <time dateTime={post.date}>
              {new Date(post.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </time>
            {post.author && (
              <>
                <span className="text-accent-teal/30">/</span>
                <span>{post.author}</span>
              </>
            )}
          </div>
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-8">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tags/${encodeURIComponent(tag)}`}
                  className="inline-block bg-white dark:bg-zinc-900 px-3 py-1 text-xs font-bold italic text-accent-teal/80 hover:text-accent-teal border border-accent-teal/10 hover:border-accent-teal/30 rounded-md transition-all"
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
