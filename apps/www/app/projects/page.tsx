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
} from "@/registry/default/ui/minimal-card"
import { getAllProjects } from "@/lib/projects"

export const metadata = {
  title: "Projects",
  description: "A collection of my web apps, tools, and experiments.",
}

export default function ProjectsPage() {
  const projects = getAllProjects()

  return (
    <div className="container max-w-3xl py-12">
      <div className="flex flex-col gap-12">
        <div className="relative w-full space-y-4">
          <Badge
            variant="outline"
            className="rounded-[14px] border border-black/10 text-base mb-4 h-6"
          >
            <StickerIcon className="mr-1 fill-[#A3C0E0] stroke-1 text-neutral-800 size-4" />{" "}
            Project Manifest
          </Badge>
          
          <div>
            <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
            <p className="text-muted-foreground mt-2 max-w-2xl text-base md:text-lg">
              A curated list of my digital experiments and applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="block no-underline">
              <MinimalCard className="relative p-2 no-underline shadow-sm transition-colors bg-card hover:bg-muted/50">
                {/* Image Container with Bezel Effect */}
                <div
                  className={cn(
                    "relative mb-6 aspect-[16/10] w-full overflow-hidden rounded-[20px]",
                    "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]"
                  )}
                >
                  {project.img ? (
                    <Image 
                      src={project.img} 
                      alt={project.title} 
                      fill 
                      className="object-cover transition-transform duration-500 hover:scale-105"
                    />
                  ) : (
                    <div className="absolute inset-0 bg-muted flex items-center justify-center">
                      {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="h-12 w-12 text-green-500/20" /> : <ShieldCheck className="h-12 w-12 text-blue-500/20" />}
                    </div>
                  )}

                  {/* Inner Bezel Shadow */}
                  <div className="absolute inset-0 rounded-[16px] pointer-events-none">
                    <div
                      className={cn(
                        "absolute inset-0 rounded-[16px]",
                        "shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)]",
                        "dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]"
                      )}
                    />
                  </div>
                </div>

                <div className="px-2 pb-4">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-muted/50">
                      {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="h-3.5 w-3.5 text-green-500" /> : <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />}
                    </div>
                    <MinimalCardTitle className="text-base font-bold">
                      {project.title}
                    </MinimalCardTitle>
                  </div>
                  <MinimalCardDescription className="text-xs text-muted-foreground line-clamp-2">
                    {project.description}
                  </MinimalCardDescription>
                </div>
              </MinimalCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
