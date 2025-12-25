import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { getAllBlogPosts } from "@/lib/blog"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons"
import { ExternalLink, ShieldCheck } from "lucide-react"

export default function HomePage() {
  const recentPosts = getAllBlogPosts().slice(0, 3)

  const btnClass = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 rounded-xl transition-all hover:bg-muted/50"
  const primaryBtnClass = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 h-8 gap-1.5 px-3 has-[>svg]:px-2.5 rounded-xl transition-all"

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
              I’m Dağkan (sounds like “DAH-kahn”). I don’t really consider myself a developer, but I love exploring and experimenting with different topics—especially anything related to data-driven performance marketing, analytics, and martech. That’s actually my job, too! This site is both a personal playground and a space where I test things like Google Tag Manager, GA4, server-side GTM, Facebook CAPI, and offline conversions (though, fair warning: I tend to break stuff with my frequent updates and rarely bother to fix it). If you accept cookies here (assuming that’s even working), you’ll help make my experiments more effective—so thanks in advance. Currently, I’m working as Performance Marketing Team Lead at Roipublic, and I’m not taking on any side projects at the moment.
            </p>
          </div>
          <div className="flex w-full flex-wrap items-center justify-center gap-4 py-4 md:pb-2">
            <Link
              className={primaryBtnClass}
              href="/blog"
            >
              Blog Posts
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              className={btnClass}
              href={siteConfig.links.github}
            >
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

        {/* Projects Section */}
        <section className="mt-24 space-y-8 max-w-3xl mx-auto">
          <div className="flex items-center justify-between px-2">
            <h2 className="text-3xl font-bold">Projects</h2>
            <Link
              href="/projects"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              View All →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-1 px-2">
            {/* Spotify MixtapeKit */}
            <div className="group flex flex-col gap-4 rounded-xl border bg-card p-0 overflow-hidden transition-all hover:shadow-md">
              <div className="relative aspect-video w-full overflow-hidden border-b">
                <Image 
                  src="/mixtapekit.png" 
                  alt="Spotify MixtapeKit" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-col gap-4 p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-green-500/10 text-green-500">
                      <Icons.spotify className="h-6 w-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold">Spotify MixtapeKit</h3>
                      <p className="text-sm text-muted-foreground">Web App / Music Tools</p>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Link
                      href="https://github.com/spacechild-dev/spotify-mixtapekit"
                      target="_blank"
                      rel="noreferrer"
                      className={btnClass}
                    >
                      <Icons.gitHub className="h-4 w-4" />
                      <span>GitHub</span>
                    </Link>
                    <Link
                      href="https://mixtapekit.spacechild.dev/"
                      target="_blank"
                      rel="noreferrer"
                      className={btnClass}
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Visit</span>
                    </Link>
                  </div>
                </div>
                <p className="text-muted-foreground">
                  A comprehensive toolkit for Spotify enthusiasts. Create, manage, and analyze your mixtapes with advanced features.
                </p>
                <div className="flex gap-2">
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">React</span>
                  <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Spotify API</span>
                </div>
              </div>
            </div>

            {/* FlowOTP */}
            <div className="group flex flex-col gap-4 rounded-xl border bg-card p-6 transition-all hover:shadow-md">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-500/10 text-blue-500">
                    <ShieldCheck className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">FlowOTP</h3>
                    <p className="text-sm text-muted-foreground">Security / 2FA Tool</p>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Link
                    href="https://github.com/spacechild-dev/FlowOTP"
                    target="_blank"
                    rel="noreferrer"
                    className={btnClass}
                  >
                    <Icons.gitHub className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
              <p className="text-muted-foreground">
                A modern and secure two-factor authentication (2FA) management solution. Simple, clean, and efficient.
              </p>
              <div className="flex gap-2">
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Security</span>
                <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">2FA</span>
              </div>
            </div>
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
