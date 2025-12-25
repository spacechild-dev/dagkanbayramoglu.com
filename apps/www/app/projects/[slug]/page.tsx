import { notFound } from "next/navigation"
import { getAllProjects, getProject } from "@/lib/projects"
import { MDXRemote } from "next-mdx-remote/rsc"
import Link from "next/link"
import Image from "next/image"
import { components } from "@/components/blog-mdx-components"
import rehypePrettyCode from "rehype-pretty-code"
import { Icons } from "@/components/icons"
import { ExternalLink, Github } from "lucide-react"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"

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
    <div className="container max-w-3xl py-12">
      <Link
        href="/projects"
        className="text-muted-foreground hover:text-foreground mb-8 inline-block"
      >
        ← Back to Projects
      </Link>

      <article className="prose prose-neutral dark:prose-invert max-w-none">
        <header className="mb-8 not-prose">
          {project.img && (
            <div className="relative aspect-video w-full overflow-hidden rounded-xl border mb-8">
              <Image 
                src={project.img} 
                alt={project.title} 
                fill 
                className="object-cover"
              />
            </div>
          )}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4">
            <h1 className="text-4xl font-bold tracking-tight">
              {project.title}
            </h1>
            <div className="flex gap-2">
              <Link
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className={btnClass}
              >
                <Icons.gitHub className="size-4" />
                <span>GitHub</span>
              </Link>
              <Link
                href={project.href}
                target="_blank"
                rel="noreferrer"
                className={btnClass}
              >
                <ExternalLink className="size-4" />
                <span>Visit</span>
              </Link>
            </div>
          </div>
          <p className="text-muted-foreground text-lg mb-4">{project.description}</p>
          
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/projects/tags/${encodeURIComponent(tag)}`}
                  className="inline-flex items-center rounded-md bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground border border-border hover:bg-accent transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          )}
        </header>

        <div className="mt-8 border-t pt-8">
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
      </article>
    </div>
  )
}
