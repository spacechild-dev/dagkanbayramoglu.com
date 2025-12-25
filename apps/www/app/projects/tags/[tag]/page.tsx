import Link from "next/link"
import { getProjectsByTag, getAllProjectTags } from "@/lib/projects"
import { notFound } from "next/navigation"
import { StickerIcon, ExternalLink, ShieldCheck } from "lucide-react"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
  MinimalCardImage,
} from "@/components/ui/minimal-card"

export async function generateStaticParams() {
  const tags = getAllProjectTags()
  return tags.map((tag) => ({
    tag: encodeURIComponent(tag),
  }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)

  return {
    title: `Projects tagged with "${decodedTag}"`,
    description: `All projects categorized under the tag: ${decodedTag}`,
  }
}

export default async function ProjectTagPage({
  params,
}: {
  params: Promise<{ tag: string }>
}) {
  const { tag } = await params
  const decodedTag = decodeURIComponent(tag)
  const projects = getProjectsByTag(decodedTag)

  if (projects.length === 0) {
    notFound()
  }

  return (
    <div className="container max-w-5xl py-12">
      <div className="flex flex-col gap-12">
        <div className="relative w-full space-y-4">
          <Link
            href="/projects"
            className="text-sm text-muted-foreground hover:text-foreground mb-4 inline-block"
          >
            ← Back to all projects
          </Link>
          <div className="flex items-center gap-2">
            <h1 className="text-4xl font-bold tracking-tight">
              Projects tagged with <span className="text-primary italic">#{decodedTag}</span>
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.slug} className="flex flex-col gap-4">
              <MinimalCard className="bg-card/50 backdrop-blur-sm border-zinc-200/50 shadow-sm transition-all hover:shadow-md h-full">
                {project.img && (
                  <Link href={`/projects/${project.slug}`}>
                    <MinimalCardImage src={project.img} alt={project.title} />
                  </Link>
                )}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50">
                        {project.slug === 'spotify-mixtapekit' ? (
                          <Icons.spotify className="h-6 w-6 text-green-500" />
                        ) : (
                          <ShieldCheck className="h-6 w-6 text-blue-500" />
                        )}
                      </div>
                      <Link href={`/projects/${project.slug}`}>
                        <MinimalCardTitle className="text-xl hover:text-primary transition-colors">
                          {project.title}
                        </MinimalCardTitle>
                      </Link>
                    </div>
                    <div className="flex gap-2">
                      <Link
                        href={project.github}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                      >
                        <Icons.gitHub className="size-4" />
                        <span className="sr-only">GitHub</span>
                      </Link>
                      <Link
                        href={project.href}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-full hover:bg-muted transition-colors"
                      >
                        <ExternalLink className="size-4" />
                        <span className="sr-only">Visit</span>
                      </Link>
                    </div>
                  </div>
                  <Link href={`/projects/${project.slug}`} className="flex-grow">
                    <MinimalCardDescription className="text-muted-foreground mb-6 line-clamp-2">
                      {project.description}
                    </MinimalCardDescription>
                  </Link>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((t) => (
                      <Link
                        key={t}
                        href={`/projects/tags/${encodeURIComponent(t)}`}
                        className={`inline-flex items-center rounded-md px-2 py-1 text-xs font-medium transition-colors ring-1 ring-inset ${
                          t.toLowerCase() === decodedTag.toLowerCase()
                            ? "bg-primary text-primary-foreground ring-primary/20"
                            : "bg-muted/50 text-muted-foreground ring-zinc-200/50 hover:bg-muted"
                        }`}
                      >
                        #{t}
                      </Link>
                    ))}
                  </div>
                </div>
              </MinimalCard>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
