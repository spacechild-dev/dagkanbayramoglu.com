import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { Icons } from "@/components/icons"
import { ExternalLink, ShieldCheck } from "lucide-react"

export const metadata = {
  title: "Projects",
  description: "A collection of my web apps, tools, and experiments.",
}

export default function ProjectsPage() {
  const btnClass = "inline-flex items-center justify-center whitespace-nowrap text-sm font-medium disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive border bg-background shadow-xs hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50 h-8 gap-1.5 px-3 rounded-xl transition-all hover:bg-muted/50"

  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col gap-8">
        <div>
          <h1 className="text-4xl font-bold tracking-tight">Projects</h1>
          <p className="text-muted-foreground mt-2">
            A collection of my web apps, tools, and experiments. Some work perfectly, others are just for fun.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-1">
          {/* Spotify MixtapeKit */}
          <div className="group flex flex-col gap-4 rounded-xl border bg-card p-6 transition-all hover:shadow-md">
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
              </div>
            </div>
            <p className="text-muted-foreground">
              A comprehensive toolkit for Spotify enthusiasts. Create, manage, and analyze your mixtapes with advanced features not found in the standard client. Built with modern web technologies.
            </p>
            <div className="flex gap-2">
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">React</span>
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Spotify API</span>
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Tailwind</span>
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
              A modern and secure two-factor authentication (2FA) management solution. Designed for simplicity and efficiency, providing a clean interface for managing your secure tokens.
            </p>
            <div className="flex gap-2">
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">Security</span>
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">2FA</span>
              <span className="inline-flex items-center rounded-md bg-muted px-2 py-1 text-xs font-medium ring-1 ring-inset ring-gray-500/10">TypeScript</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}