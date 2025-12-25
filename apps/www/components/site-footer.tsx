import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons" // Import Icons

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-accent-teal/5">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with{" "}
          <a
            href="https://github.com/nolly-studio/cult-ui"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline underline-offset-4 hover:text-accent-teal transition-colors"
          >
            cult-ui
          </a>
          . Managed by{" "}
          <a
            href="https://dagkanbayramoglu.com"
            target="_blank"
            rel="noreferrer"
            className="font-bold underline underline-offset-4 hover:text-accent-teal transition-colors"
          >
            Dagkan
          </a>
          .
        </p>
        <div className="flex items-center gap-0.5">
          <Link href="https://www.linkedin.com/in/dagkanbayramoglu/" target="_blank" rel="noreferrer">
            <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0 hover:text-accent-teal hover:bg-accent-teal/5")}>
              <Icons.linkedin className="size-4" />
              <span className="sr-only">LinkedIn</span>
            </div>
          </Link>
          <Link href="https://open.spotify.com/user/az7ds62ok9xtg09ua7cs7ym9i" target="_blank" rel="noreferrer">
            <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0 hover:text-accent-teal hover:bg-accent-teal/5")}>
              <Icons.spotify className="size-4" />
              <span className="sr-only">Spotify</span>
            </div>
          </Link>
          <Link href="https://www.last.fm/user/dagkan/listening-report/year" target="_blank" rel="noreferrer">
            <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0 hover:text-accent-teal hover:bg-accent-teal/5")}>
              <Icons.lastfm className="size-4" />
              <span className="sr-only">Last.fm</span>
            </div>
          </Link>
          <Link href={siteConfig.links.github} target="_blank" rel="noreferrer">
            <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0 hover:text-accent-teal hover:bg-accent-teal/5")}>
              <Icons.gitHub className="size-4" />
              <span className="sr-only">GitHub</span>
            </div>
          </Link>
          <Link href="mailto:hello@dagkanbayramoglu.com">
            <div className={cn(buttonVariants({ variant: "ghost" }), "w-9 px-0 hover:text-accent-teal hover:bg-accent-teal/5")}>
              <Icons.mail className="size-4" />
              <span className="sr-only">Mail</span>
            </div>
          </Link>
        </div>
      </div>
    </footer>
  )
}
