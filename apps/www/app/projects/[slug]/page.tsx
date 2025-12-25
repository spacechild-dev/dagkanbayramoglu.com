import { notFound } from "next/navigation"
import { getAllProjects, getProject } from "@/lib/projects"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import Image from "next/image"
import { components } from "@/components/blog-mdx-components"
import rehypePrettyCode from "rehype-pretty-code"
import { Icons } from "@/components/icons"
import { ExternalLink, CheckCircle2 } from "lucide-react"
import { cn } from "@/lib/utils"

export async function generateStaticParams() {
  const projects = getAllProjects()
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    return {}
  }

  return {
    title: `${project.title} | Projects`,
    description: project.description,
  }
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const project = getProject(slug)

  if (!project) {
    notFound()
  }

  const btnClass = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 rounded-xl transition-all hover:bg-muted/50"

  return (
    <div className="container max-w-6xl py-12 lg:py-20">
      <Link
        href="/projects"
        className="text-sm text-muted-foreground hover:text-foreground mb-12 inline-block transition-colors"
      >
        ← Back to Projects
      </Link>

      <div className="flex flex-col gap-24">
        {/* Top Section: Description & GIF/Image */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          <div className="lg:col-span-5 flex flex-col gap-8 order-2 lg:order-1">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter leading-tight">
                {project.title}
              </h1>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/projects/tags/${encodeURIComponent(tag)}`}
                    className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-[10px] font-mono uppercase tracking-widest text-muted-foreground border border-border hover:bg-accent transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={cn(btnClass, "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/20")}
              >
                <ExternalLink className="size-4" />
                <span>Visit Project</span>
              </Link>
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={btnClass}
              >
                <Icons.gitHub className="size-4" />
                <span>Source Code</span>
              </Link>
            </div>
          </div>
          <div className="lg:col-span-7 relative aspect-video w-full overflow-hidden rounded-[2rem] border bg-muted shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)] dark:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.4)] order-1 lg:order-2 group">
            {project.img ? (
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                priority
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center text-muted-foreground font-medium bg-zinc-100 dark:bg-zinc-900">
                Preview coming soon
              </div>
            )}
          </div>
        </section>

        {/* Middle Section: Key Features */}
        {project.keyFeatures && project.keyFeatures.length > 0 && (
          <section className="space-y-12">
            <div className="space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Key Features</h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto lg:mx-0" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {project.keyFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="flex flex-col gap-4 p-8 rounded-[2rem] border bg-card/30 backdrop-blur-sm shadow-sm hover:shadow-md transition-all hover:-translate-y-1 duration-300"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                    <CheckCircle2 className="size-6" />
                  </div>
                  <p className="text-base font-semibold leading-snug text-foreground/90">
                    {feature}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Content Section (MDX) */}
        <section className="max-w-4xl mx-auto w-full">
          <div className="space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Technical Details</h2>
            <div className="h-1 w-20 bg-primary rounded-full" />
          </div>
          <div className="prose prose-neutral dark:prose-invert max-w-none prose-headings:tracking-tight prose-pre:p-0">
            <MDXRemote 
              source={project.content} 
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
        </section>

        {/* Bottom Section: App Screenshots */}
        {project.screenshots && project.screenshots.length > 0 && (
          <section className="space-y-12">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">App Screenshots</h2>
              <div className="h-1 w-20 bg-primary rounded-full mx-auto" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {project.screenshots.map((screenshot, index) => (
                <div 
                  key={index}
                  className="relative aspect-video w-full overflow-hidden rounded-[2rem] border bg-muted shadow-2xl group"
                >
                  <Image 
                    src={screenshot} 
                    alt={`${project.title} screenshot ${index + 1}`} 
                    fill 
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  )
}
