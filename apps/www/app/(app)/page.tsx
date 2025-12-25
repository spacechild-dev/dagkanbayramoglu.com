import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { getAllBlogPosts } from "@/lib/blog"
import { getAllProjects } from "@/lib/projects"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { ExternalLink, ShieldCheck, StickerIcon } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
  MinimalCardImage,
} from "@/registry/default/ui/minimal-card"

export default function HomePage() {
  const recentPosts = getAllBlogPosts().slice(0, 3)
  const projects = getAllProjects().slice(0, 2)

  const btnClass = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 rounded-xl transition-all hover:bg-muted/50"
  const primaryBtnClass = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 rounded-xl transition-all"

  return (
    <div className="isolate min-h-screen overflow-hidden pb-8 sm:pb-12">
      <div className="container relative py-12 md:pt-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 text-center">
          <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
            <p className="text-center text-sm leading-relaxed text-foreground md:text-base">
              I’m Dağkan (sounds like “DAH-kahn”). I don’t really consider myself a developer, but I love exploring and experimenting with different topics—especially anything related to data-driven performance marketing, analytics, and martech.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-4 py-4 md:pb-2">
            <Link className={primaryBtnClass} href="/blog">Blog Posts</Link>
            <Link target="_blank" rel="noreferrer" className={btnClass} href={siteConfig.links.github}>
              <Icons.gitHub className="size-4" /> GitHub
            </Link>
            
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
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground">View All →</Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 px-2">
            {recentPosts.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground">No blog posts yet.</p>
            ) : (
              recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col gap-3 rounded-xl border bg-card p-6 transition-all hover:shadow-md">
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">{post.title}</h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">{post.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <time dateTime={post.date}>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}</time>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-24 space-y-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold">Projects</h2>
              <Badge variant="outline" className="rounded-full px-2 py-0 h-5 border-black/10 text-[10px]">
                <StickerIcon className="mr-1 size-2.5 fill-[#A3C0E0] stroke-1" /> Manifest
              </Badge>
            </div>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground">View All →</Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 px-2">
            {projects.map((project) => (
              <MinimalCard key={project.slug} className="bg-card/50 backdrop-blur-sm border-zinc-200/50 shadow-sm transition-all hover:shadow-md">
                {project.img && (
                  <Link href={`/projects/${project.slug}`}>
                    <MinimalCardImage src={project.img} alt={project.title} />
                  </Link>
                )}
                <div className="p-5 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-md bg-muted/50">
                        {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="h-5 w-5 text-green-500" /> : <ShieldCheck className="h-5 w-5 text-blue-500" />}
                      </div>
                      <Link href={`/projects/${project.slug}`}>
                        <MinimalCardTitle className="text-lg hover:text-primary transition-colors">
                          {project.title}
                        </MinimalCardTitle>
                      </Link>
                    </div>
                  </div>
                  <Link href={`/projects/${project.slug}`}>
                    <MinimalCardDescription className="text-xs text-muted-foreground line-clamp-2 mb-4">
                      {project.description}
                    </MinimalCardDescription>
                  </Link>
                  <div className="flex gap-2 mt-auto">
                    <Link href={project.github} target="_blank" rel="noreferrer" className="text-[10px] text-muted-foreground hover:text-foreground flex items-center gap-1">
                      <Icons.gitHub className="size-3" /> GitHub
                    </Link>
                    <Link href={project.href} target="_blank" rel="noreferrer" className="text-[10px] text-muted-foreground hover:text-foreground flex items-center gap-1">
                      <ExternalLink className="size-3" /> Visit
                    </Link>
                  </div>
                </div>
              </MinimalCard>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
