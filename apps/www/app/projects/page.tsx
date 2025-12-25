import Link from "next/link"
import Image from "next/image"
import { StickerIcon, ExternalLink, ShieldCheck } from "lucide-react"
import { cn } from "@/lib/utils"
import { Icons } from "@/components/icons"
import { Badge } from "@/components/ui/badge"
import {
  MinimalCard,
  MinimalCardDescription,
  MinimalCardTitle,
  MinimalCardImage,
} from "@/components/ui/minimal-card"

export const metadata = {
  title: "Projects",
  description: "A collection of my web apps, tools, and experiments.",
}

export default function ProjectsPage() {
  const projects = [
    {
      title: "Spotify MixtapeKit",
      description: "A comprehensive toolkit for Spotify enthusiasts. Create, manage, and analyze your mixtapes with advanced features.",
      href: "https://mixtapekit.spacechild.dev/",
      github: "https://github.com/spacechild-dev/spotify-mixtapekit",
      img: "/mixtapekit.png",
      tags: ["React", "Spotify API", "Tailwind"],
      icon: <Icons.spotify className="h-6 w-6 text-green-500" />
    },
    {
      title: "FlowOTP",
      description: "A modern and secure two-factor authentication (2FA) management solution. Designed for simplicity and efficiency.",
      href: "https://github.com/spacechild-dev/FlowOTP",
      github: "https://github.com/spacechild-dev/FlowOTP",
      tags: ["Security", "2FA", "TypeScript"],
      icon: <ShieldCheck className="h-6 w-6 text-blue-500" />
    }
  ]

  return (
    <div className="container max-w-5xl py-12">
      <div className="flex flex-col gap-12">
        <div className="relative w-full space-y-4">
          <Badge
            variant="outline"
            className="rounded-[14px] border border-black/10 text-base mb-4"
          >
            <StickerIcon className="mr-1 fill-[#A3C0E0] stroke-1 text-neutral-800 size-4" />{" "}
            Project Manifest
          </Badge>
          
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl">
              A curated list of my digital experiments, tools, and applications. From performance marketing utilities to music curation tools.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col gap-4">
              <MinimalCard className="bg-card/50 backdrop-blur-sm border-zinc-200/50 shadow-sm transition-all hover:shadow-md h-full">
                {project.img && (
                  <MinimalCardImage src={project.img} alt={project.title} />
                )}
                <div className="p-6 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted/50">
                        {project.icon}
                      </div>
                      <MinimalCardTitle className="text-xl">
                        {project.title}
                      </MinimalCardTitle>
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
                  <MinimalCardDescription className="text-muted-foreground flex-grow mb-6">
                    {project.description}
                  </MinimalCardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-muted/50 px-2 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-zinc-200/50"
                      >
                        {tag}
                      </span>
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
