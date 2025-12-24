import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { getAllBlogPosts } from "@/lib/blog"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"

export default function HomePage() {
  const recentPosts = getAllBlogPosts().slice(0, 3)

  return (
    <div className="isolate min-h-screen overflow-hidden pb-8 sm:pb-12">
      <div className="container relative py-12 md:pt-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 text-center">
          <div className="py-2">
            <h1 className="text-center text-3xl font-semibold leading-tight tracking-tighter md:text-4xl lg:text-5xl lg:leading-[1.1]">
              Hi, It's Dağkan
            </h1>
          </div>
          <div className="mx-auto max-w-3xl space-y-6 md:space-y-8">
            <p className="text-center text-lg leading-relaxed text-foreground md:text-xl ">
              I'm not a software engineer, but I play one on the internet. Here, I showcase my 'barely working' projects—a chaotic mix of ambition, caffeine, and code that somehow runs. Welcome to my digital playground!
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-4 py-4 md:pb-2">
            <Link
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-xl transition-all"
              )}
              href="/blog"
            >
              Blog Posts
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-xl transition-all hover:bg-muted/50"
              )}
              href={siteConfig.links.github}
            >
              <Icons.gitHub className="mr-2 size-5" /> GitHub
            </Link>
            
            {/* Social Icons integrated into the same row */}
            <div className="flex items-center gap-3 px-2">
              <Link href="https://www.linkedin.com/in/dagkanbayramoglu/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icons.linkedin className="size-5" />
              </Link>
              <Link href="https://open.spotify.com/user/az7ds62ok9xtg09ua7cs7ym9i" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icons.spotify className="size-5" />
              </Link>
              <Link href="https://www.last.fm/user/dagkan/listening-report/year" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icons.lastfm className="size-5" />
              </Link>
              <Link href="https://www.discogs.com/user/dagkanbayramoglu/collection" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icons.discogs className="size-5" />
              </Link>
              <Link href="mailto:hello@dagkanbayramoglu.com" className="text-muted-foreground hover:text-foreground transition-colors">
                <Icons.mail className="size-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mt-24 space-y-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-3xl font-bold">Recent Posts</h2>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View All →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 px-2">
            {recentPosts.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground">
                No blog posts yet.
              </p>
            ) : (
              recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-3 rounded-xl border bg-card p-6 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>

        {/* Skills/Tech Stack */}
        <section className="mt-24 space-y-6 max-w-3xl mx-auto text-center px-2">
          <h2 className="text-3xl font-bold">Skills / Tech Stack</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Git",
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-muted px-4 py-2 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
