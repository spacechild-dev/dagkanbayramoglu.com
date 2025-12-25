import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

interface ResumeLayoutProps {
  children: React.ReactNode
}

export default function ResumeLayout({ children }: ResumeLayoutProps) {
  return (
    <>
      <SiteHeader />
      <main className="flex-1">{children}</main>
      <SiteFooter />
    </>
  )
}
