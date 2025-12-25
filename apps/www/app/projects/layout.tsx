import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface ProjectsLayoutProps {
  children: React.ReactNode
}

export default function ProjectsLayout({ children }: ProjectsLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  )
}
