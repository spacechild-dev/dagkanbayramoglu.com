import { notFound } from "next/navigation"
import { getAllBlogPosts, getBlogPost } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import { components } from "@/components/blog-mdx-components"
import rehypePrettyCode from "rehype-pretty-code"
import { Badge } from "@/components/ui/badge"
import { Newspaper } from "lucide-react"

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
        className="text-sm text-muted-foreground hover:text-foreground mb-8 inline-block transition-colors"
      >
        ← Back to Blog
      </Link>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <header className="mb-8 not-prose">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="outline" className="rounded-full px-4 py-1.5 border-black/10 bg-white dark:bg-zinc-900 shadow-sm">
              <Newspaper className="mr-2 size-4 fill-[#D2F583] stroke-1 text-neutral-800" />
              <h1 className="text-xl md:text-2xl font-bold tracking-tight text-neutral-800 dark:text-neutral-200">
                {post.title}
              </h1>
            </Badge>
          </div>
          <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">{post.description}</p>
          <div className="flex items-center gap-4 mt-6 text-sm text-muted-foreground border-b pb-6">
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
            <div className="flex flex-wrap gap-2 mt-6">
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
