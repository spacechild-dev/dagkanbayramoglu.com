import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { getAllBlogPosts } from "@/lib/blog"
import { getAllProjects } from "@/lib/projects"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { ExternalLink, ShieldCheck, StickerIcon, Flame, Newspaper, Zap, ArrowUpRight } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
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
  const primaryBtnClass = "inline-flex items-center justify-center whitespace-nowrap text-sm font-bold disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-accent-teal text-white shadow-xs hover:bg-accent-teal/90 h-8 gap-1.5 px-4 has-[>svg]:px-2.5 rounded-xl transition-all"

  return (
    <div className="isolate min-h-screen overflow-hidden pb-8 sm:pb-12">
      <div className="container relative py-12 md:pt-24 max-w-3xl">
        {/* Hero Section */}
        <section className="flex flex-col items-start gap-8 text-left">
          <div className="mr-auto max-w-4xl space-y-6 md:space-y-8">
            <p className="text-left text-sm leading-relaxed text-foreground md:text-base font-medium">
              I’m Dağkan (sounds like “DAH-kahn”). I don’t really consider myself a developer, but I love exploring and experimenting with different topics—especially anything related to <span className="text-accent-teal font-bold">data-driven performance marketing</span>, <span className="text-accent-teal font-bold">analytics</span>, and <span className="text-accent-teal font-bold">martech</span>.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-start gap-4 py-4 md:pb-2">
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
        <section className="mt-32 space-y-12">
          <div className="flex items-center justify-between px-2 border-b border-accent-teal/20 pb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold tracking-tight text-accent-teal">Recent Writing</h2>
            </div>
            <Link href="/blog" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-accent-teal transition-colors">View Archive</Link>
          </div>

          <div className="space-y-12 px-2">
            {recentPosts.length === 0 ? (
              <p className="text-center text-muted-foreground">No blog posts yet.</p>
            ) : (
              recentPosts.map((post) => (
                <article key={post.slug} className="group relative flex flex-col items-start">
                  <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-accent-teal transition-colors mb-2">
                    <Link href={`/blog/${post.slug}`}>
                      <span className="absolute -inset-x-4 -inset-y-6 z-20 sm:-inset-x-6 sm:rounded-2xl" />
                      <span className="relative z-10">{post.title}</span>
                    </Link>
                  </h3>
                  <time className="relative z-10 order-first mb-3 flex items-center text-xs font-mono font-bold text-muted-foreground/60 uppercase tracking-widest pl-3.5" dateTime={post.date}>
                    <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                      <span className="h-4 w-0.5 rounded-full bg-accent-teal/40" />
                    </span>
                    {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                  </time>
                  <p className="relative z-10 mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {post.description}
                  </p>
                  <div className="relative z-10 mt-6 flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map(tag => (
                      <span key={tag} className="inline-block bg-white dark:bg-zinc-900 px-2.5 py-0.5 text-[10px] font-bold italic text-accent-teal/80 border border-accent-teal/10 rounded-md">#{tag}</span>
                    ))}
                  </div>
                </article>
              ))
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-32 space-y-8">
          <div className="flex items-center justify-between px-2 border-b border-accent-teal/20 pb-4">
            <div className="flex items-center gap-3">
              <h2 className="text-xl font-bold tracking-tight text-accent-teal">Featured Projects</h2>
            </div>
            <Link href="/projects" className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-accent-teal transition-colors">View All Projects</Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 px-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block no-underline group h-full">
                <MinimalCard className="relative p-2 no-underline shadow-sm transition-colors bg-card/50 hover:bg-accent-teal/5 text-left h-full flex flex-col min-h-[320px] border-accent-teal/5">
                  <div className={cn(
                    "relative aspect-[16/10] w-full overflow-hidden rounded-[18px] shrink-0",
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
                      <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center overflow-hidden">
                        <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
                          <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <pattern id="project-pattern-main" width="10" height="10" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r="1" fill="currentColor" />
                            </pattern>
                            <rect width="100" height="100" fill="url(#project-pattern-main)" />
                          </svg>
                        </div>
                        {project.slug === 'flow-otp' ? (
                          <div className="relative flex flex-col items-center gap-4 py-8 scale-75">
                            <div className="relative">
                              <div className="absolute -inset-4 bg-accent-teal/20 rounded-full blur-2xl animate-pulse" />
                              <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-800 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <ShieldCheck className="h-10 w-10 text-accent-teal" />
                              </div>
                            </div>
                            <div className="flex flex-col items-center gap-1">
                              <span className="text-[10px] font-mono font-bold text-zinc-500 tracking-widest uppercase">Secure Auth</span>
                              <div className="flex gap-1">
                                {[1,2,3,4,5,6].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />)}
                              </div>
                            </div>
                          </div>
                        ) : (
                          <Zap className="h-12 w-12 text-zinc-300 dark:text-zinc-700" />
                        )}
                      </div>
                    )}
                    <div className="absolute inset-0 rounded-[16px] pointer-events-none shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)] dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]" />
                  </div>
                  <div className="px-2 pt-6 pb-6 flex-grow flex flex-col gap-3">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-muted/50 border border-zinc-200/50 dark:border-zinc-800/50 shadow-sm">
                        {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="h-4 w-4 text-green-500" /> : <ShieldCheck className="h-4 w-4 text-accent-teal" />}
                      </div>
                      <MinimalCardTitle className="text-lg font-bold leading-tight group-hover:text-accent-teal transition-colors">
                        {project.title}
                      </MinimalCardTitle>
                    </div>
                    <MinimalCardDescription className="text-xs sm:text-sm text-muted-foreground leading-relaxed font-normal line-clamp-4">
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
