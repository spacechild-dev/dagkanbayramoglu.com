import Link from "next/link"
import { getAllBlogPosts } from "@/lib/blog"
import { StickerIcon, Newspaper } from "lucide-react"
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
        <div className="px-2">
          <Badge variant="outline" className="rounded-full px-3 py-1 border-black/10 text-xs bg-white dark:bg-zinc-900 shadow-sm h-8">
            <Newspaper className="mr-2 size-3.5 fill-[#D2F583] stroke-1 text-neutral-800" />
            <span className="font-bold tracking-tight text-neutral-800 dark:text-neutral-200 text-sm">Blog</span>
          </Badge>
          <p className="text-muted-foreground mt-4 text-base md:text-lg px-1">
            Sharing my thoughts, projects, and what I've learned
          </p>
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
                    <div className="flex items-center gap-2 text-[10px] text-muted-foreground uppercase tracking-widest font-bold">
                      <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</time>
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