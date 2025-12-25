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
        <div className="flex items-center gap-2 px-2">
          <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
          <Badge variant="outline" className="rounded-full px-2 py-0 h-5 border-black/10 text-[10px]">
            <StickerIcon className="mr-1 size-2.5 fill-[#A3C0E0] stroke-1" /> Manifest
          </Badge>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 px-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="block no-underline group">
              <MinimalCard className="relative p-2 no-underline shadow-sm transition-colors bg-card hover:bg-muted/50 text-left">
                {/* Image Container with Bezel Effect */}
                <div
                  className={cn(
                    "relative mb-4 aspect-[16/10] w-full overflow-hidden rounded-[18px]",
                    "shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)]"
                  )}
                >
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

                  {/* Inner Bezel Shadow */}
                  <div className="absolute inset-0 rounded-[16px] pointer-events-none">
                    <div className="absolute inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)] dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]" />
                  </div>
                </div>

                <div className="px-2 pb-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-muted/50">
                      {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="h-3.5 w-3.5 text-green-500" /> : <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />}
                    </div>
                    <MinimalCardTitle className="text-base font-bold leading-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </MinimalCardTitle>
                  </div>
                  <MinimalCardDescription className="text-[11px] text-muted-foreground line-clamp-2 leading-relaxed">
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