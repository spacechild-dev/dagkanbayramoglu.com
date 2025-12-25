import Link from "next/link"
import { siteConfig } from "@/config/site"
import { Icons } from "@/components/icons" // Import Icons

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 md:flex-row">
        <p className="text-balance text-center text-sm leading-loose text-muted-foreground md:text-left">
          Built with{" "}
          <a
            href="https://github.com/nolly-studio/cult-ui"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            cult-ui
          </a>
          . Managed by{" "}
          <a
            href="https://dagkanbayramoglu.com"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            Dagkan
          </a>
          .
        </p>
        <div className="flex items-center gap-4">
          <Link href="https://www.linkedin.com/in/dagkanbayramoglu/" target="_blank" rel="noreferrer">
            <Icons.linkedin className="size-5" />
          </Link>
          <Link href="https://open.spotify.com/user/az7ds62ok9xtg09ua7cs7ym9i" target="_blank" rel="noreferrer">
            <Icons.spotify className="size-5" />
          </Link>
          <Link href="https://www.last.fm/user/dagkan/listening-report/year" target="_blank" rel="noreferrer">
            <Icons.lastfm className="size-5" />
          </Link>
          <Link href="https://www.discogs.com/user/dagkanbayramoglu/collection" target="_blank" rel="noreferrer">
            <Icons.discogs className="size-5" />
          </Link>
          <Link href="mailto:hello@dagkanbayramoglu.com">
            <Icons.mail className="size-5" />
          </Link>
        </div>
      </div>
    </footer>
  )
}
