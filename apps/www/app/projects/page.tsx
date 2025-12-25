import Link from "next/link"
import Image from "next/image"
import { StickerIcon, ShieldCheck, Flame } from "lucide-react"
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
        <div className="px-2">
          <Badge variant="outline" className="rounded-full px-3 py-1 border-black/10 text-xs bg-white dark:bg-zinc-900 shadow-sm h-8">
            <StickerIcon className="mr-2 size-3.5 fill-[#A3C0E0] stroke-1 text-neutral-800" />
            <span className="font-bold tracking-tight text-neutral-800 dark:text-neutral-200 text-sm">Projects</span>
          </Badge>
          <p className="text-muted-foreground mt-4 max-w-2xl text-base md:text-lg px-1">
            A curated list of my digital experiments and applications.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 px-2">
          {projects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="block no-underline group h-full">
              <MinimalCard className="relative p-2 no-underline shadow-sm transition-colors bg-card hover:bg-muted/50 text-left h-full flex flex-col">
                <div
                  className={cn(
                    "relative aspect-[16/10] w-full overflow-hidden rounded-[18px] shrink-0",
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
                    <div className="absolute inset-0 bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-950 flex items-center justify-center overflow-hidden">
                      <div className="absolute inset-0 opacity-10">
                        <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                          <defs>
                            <pattern id="grid-projects" width="10" height="10" patternUnits="userSpaceOnUse">
                              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5"/>
                            </pattern>
                          </defs>
                          <rect width="100" height="100" fill="url(#grid-projects)" />
                        </svg>
                      </div>
                      {project.slug === 'flow-otp' ? (
                        <div className="relative flex flex-col items-center gap-3 scale-75">
                          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white dark:bg-zinc-950 shadow-xl border border-zinc-200 dark:border-zinc-800">
                            <ShieldCheck className="h-8 w-8 text-blue-500 animate-pulse" />
                          </div>
                          <span className="text-[10px] font-mono font-bold text-zinc-400 tracking-tighter uppercase text-center leading-tight">Secure Token Manager</span>
                        </div>
                      ) : (
                        <Flame className="h-12 w-12 text-zinc-300 dark:text-zinc-700" />
                      )}
                    </div>
                  )}
                  <div className="absolute inset-0 rounded-[16px] pointer-events-none shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)] dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]" />
                </div>

                <div className="px-2 pt-4 pb-4 flex-grow flex flex-col gap-2">
                  <div className="flex items-center gap-2 mb-1">
                    <div className="flex h-6 w-6 items-center justify-center rounded bg-muted/50">
                      {project.slug === 'spotify-mixtapekit' ? <Icons.spotify className="h-3.5 w-3.5 text-green-500" /> : <ShieldCheck className="h-3.5 w-3.5 text-blue-500" />}
                    </div>
                    <MinimalCardTitle className="text-base font-bold leading-tight group-hover:text-primary transition-colors text-left">
                      {project.title}
                    </MinimalCardTitle>
                  </div>
                  <MinimalCardDescription className="text-xs text-muted-foreground leading-relaxed line-clamp-2 text-left">
                    {project.description}
                  </MinimalCardDescription>
                  <div className="flex flex-wrap gap-2 mt-auto pt-2">
                    {project.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md bg-muted/50 px-2 py-0.5 text-[10px] font-medium text-muted-foreground ring-1 ring-inset ring-zinc-200/50"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </MinimalCard>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
