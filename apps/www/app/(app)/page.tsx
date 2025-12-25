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
        <section className="mt-32 space-y-8">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight">Recent Posts</h2>
              <Badge variant="outline" className="rounded-full px-2 py-0 h-6 border-black/10 text-[10px] bg-white dark:bg-zinc-900 shadow-sm">
                <Newspaper className="mr-1 size-3 fill-[#D2F583] stroke-1 text-neutral-800" /> New
              </Badge>
            </div>
            <Link href="/blog" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">View All →</Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-1 px-2">
            {recentPosts.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground">No blog posts yet.</p>
            ) : (
              recentPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block no-underline">
                  <Card className="group h-full overflow-hidden rounded-2xl border-none p-0 shadow-[0px_1px_1px_0px_rgba(0,_0,_0,_0.05),_0px_1px_1px_0px_rgba(255,_252,_240,_0.5)_inset,_0px_0px_0px_1px_hsla(0,_0%,_100%,_0.1)_inset,_0px_0px_1px_0px_rgba(28,_27,_26,_0.5)] transition-all brightness-100 hover:brightness-105 bg-white dark:bg-zinc-900/50">
                    <div className="flex h-full flex-col pt-5 pb-4">
                      <div className="flex-1 px-5">
                        <h3 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                          {post.title}
                        </h3>
                        <div className="mt-2 text-sm leading-relaxed tracking-tight text-muted-foreground line-clamp-2">
                          {post.description}
                        </div>
                      </div>
                      <div className="mt-4 flex items-center justify-between gap-3 px-5 border-t border-zinc-100 dark:border-zinc-800/50 pt-3">
                        <div className="flex items-center gap-3">
                          <span className="text-[10px] font-mono font-bold text-muted-foreground/60 uppercase tracking-widest">
                            {new Date(post.date).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                          </span>
                          <div className="flex gap-1.5">
                            {post.tags.slice(0, 2).map(tag => (
                              <span key={tag} className="text-[10px] text-primary/70 font-bold italic">#{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div className="text-[10px] font-bold text-muted-foreground/40 group-hover:text-primary transition-colors duration-300 ease-out flex items-center gap-1 uppercase tracking-tighter">
                          Read More <ArrowUpRight className="size-3" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              ))
            )}
          </div>
        </section>

        {/* Projects Section */}
        <section className="mt-32 space-y-8">
          <div className="flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <h2 className="text-3xl font-bold tracking-tight">Projects</h2>
              <Badge variant="outline" className="rounded-full px-2 py-0 h-6 border-black/10 text-[10px] bg-white dark:bg-zinc-900 shadow-sm">
                <StickerIcon className="mr-1 size-3 fill-[#A3C0E0] stroke-1 text-neutral-800" /> Manifest
              </Badge>
            </div>
            <Link href="/projects" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">View All →</Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 px-2">
            {projects.map((project) => (
              <Link key={project.slug} href={`/projects/${project.slug}`} className="block no-underline group h-full">
                <MinimalCard className="relative p-2 no-underline shadow-sm transition-colors bg-card hover:bg-muted/50 text-left h-full flex flex-col min-h-[320px]">
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
                            <pattern id="project-pattern" width="10" height="10" patternUnits="userSpaceOnUse">
                              <circle cx="1" cy="1" r="1" fill="currentColor" />
                            </pattern>
                            <rect width="100" height="100" fill="url(#project-pattern)" />
                          </svg>
                        </div>
                        {project.slug === 'flow-otp' ? (
                          <div className="relative flex flex-col items-center gap-4 py-8 scale-75">
                            <div className="relative">
                              <div className="absolute -inset-4 bg-blue-500/20 rounded-full blur-2xl animate-pulse" />
                              <div className="relative flex h-20 w-20 items-center justify-center rounded-3xl bg-white dark:bg-zinc-900 shadow-2xl border border-zinc-200 dark:border-zinc-800 rotate-12 group-hover:rotate-0 transition-transform duration-500">
                                <ShieldCheck className="h-10 w-10 text-blue-500" />
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
                        {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="h-4 w-4 text-green-500" /> : <ShieldCheck className="h-4 w-4 text-blue-500" />}
                      </div>
                      <MinimalCardTitle className="text-lg font-bold leading-tight group-hover:text-primary transition-colors">
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
