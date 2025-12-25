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
      <div className="container relative py-12 md:pt-24 max-w-3xl">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 text-center">
          <div className="mx-auto max-w-4xl space-y-6 md:space-y-8">
            <p className="text-center text-sm leading-relaxed text-foreground md:text-base font-medium">
              I’m Dağkan (sounds like “DAH-kahn”). I don’t really consider myself a developer, but I love exploring and experimenting with different topics—especially anything related to data-driven performance marketing, analytics, and martech.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-4 py-4 md:pb-2">
            <Link className={primaryBtnClass} href="/blog">Blog Posts</Link>
            <Link target="_blank" rel="noreferrer" className={btnClass} href={siteConfig.links.github}>
              <Icons.gitHub className="size-4" /> GitHub
            </Link>
            
            <div className="flex items-center gap-3 px-2">
              <Link href="https://www.linkedin.com/in/dagkanbayramoglu/" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors transition-all hover:scale-110">
                <Icons.linkedin className="size-5" />
              </Link>
              <Link href="https://open.spotify.com/user/az7ds62ok9xtg09ua7cs7ym9i" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors transition-all hover:scale-110">
                <Icons.spotify className="size-5" />
              </Link>
              <Link href="https://www.last.fm/user/dagkan/listening-report/year" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors transition-all hover:scale-110">
                <Icons.lastfm className="size-5" />
              </Link>
              <Link href="https://www.discogs.com/user/dagkanbayramoglu/collection" target="_blank" rel="noreferrer" className="text-muted-foreground hover:text-foreground transition-colors transition-all hover:scale-110">
                <Icons.discogs className="size-5" />
              </Link>
              <Link href="mailto:hello@dagkanbayramoglu.com" className="text-muted-foreground hover:text-foreground transition-colors transition-all hover:scale-110">
                <Icons.mail className="size-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mt-24 space-y-8">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
              <Badge variant="outline" className="rounded-full px-2 py-0 h-5 border-black/10 text-[10px]">
                <StickerIcon className="mr-1 size-2.5 fill-[#D2F583] stroke-1" /> New
              </Badge>
            </div>
            <Link href="/blog" className="text-sm text-muted-foreground hover:text-foreground transition-colors">View All →</Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 px-2">
            {recentPosts.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground">No blog posts yet.</p>
            ) : (
              recentPosts.map((post) => (
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
        </section>

        {/* Projects Section */}
        <section className="mt-24 space-y-8">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-2">
              <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
              <Badge variant="outline" className="rounded-full px-2 py-0 h-5 border-black/10 text-[10px]">
                <StickerIcon className="mr-1 size-2.5 fill-[#A3C0E0] stroke-1" /> Manifest
              </Badge>
            </div>
            <Link href="/projects" className="text-sm text-muted-foreground hover:text-foreground transition-colors">View All →</Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 px-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block no-underline group">
                <MinimalCard className="relative p-2 no-underline shadow-sm transition-colors bg-card hover:bg-muted/50 text-left">
                  <div className={cn(
                    "relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-[18px]",
                    "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]"
                  )}>
                    {project.img ? (
                      <Image 
                        src={project.img} 
                        alt={project.title} 
                        fill 
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="absolute inset-0 bg-muted flex items-center justify-center">
                        {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="h-8 w-8 text-green-500/20" /> : <ShieldCheck className="h-8 w-8 text-blue-500/20" />}
                      </div>
                    )}
                    <div className="absolute inset-0 rounded-[16px] pointer-events-none">
                      <div className="absolute inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)] dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]" />
                    </div>
                  </div>
                  <div className="px-2 pb-2">
                    <MinimalCardTitle className="text-base font-bold mb-1 leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </MinimalCardTitle>
                    <MinimalCardDescription className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
                      {project.description}
                    </MinimalCardDescription>
                  </div>
                </MinimalCard>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
