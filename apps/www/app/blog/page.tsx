import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"
import { StickerIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
        <div className="flex items-center gap-2 px-2">
          <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
          <Badge variant="outline" className="rounded-full px-2 py-0 h-5 border-black/10 text-[10px]">
            <StickerIcon className="mr-1 size-2.5 fill-[#D2F583] stroke-1" /> New Posts
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-6 px-2">
          {posts.length === 0 ? (
            <p className="text-muted-foreground text-center py-12">No blog posts yet.</p>
          ) : (
            posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block no-underline group">
                <MinimalCard className="bg-card/50 backdrop-blur-sm border-zinc-200/50 shadow-sm transition-all hover:shadow-md p-6">
                  <div className="flex flex-col gap-3 text-left">
                    <MinimalCardTitle className="text-xl group-hover:text-primary transition-colors">
                      {post.title}
                    </MinimalCardTitle>
                    <MinimalCardDescription className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {post.description}
                    </MinimalCardDescription>
                    <div className="flex items-center justify-between mt-2">
                      <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                        <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
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
