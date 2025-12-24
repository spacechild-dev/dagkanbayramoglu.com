import Link from "next/link"
import { cn } from "@/lib/utils"
import { buttonVariants } from "@/components/ui/button"
import { getAllBlogPosts } from "@/lib/blog"

export default function HomePage() {
  const recentPosts = getAllBlogPosts().slice(0, 3)

  return (
    <div className="isolate min-h-screen overflow-hidden pb-8 sm:pb-12">
      <div className="container relative py-12 md:pt-24">
        {/* Hero Section */}
        <section className="flex flex-col items-center gap-8 text-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              Merhaba, Ben{" "}
              <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Adınız
              </span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground sm:text-xl">
              Full Stack Developer, Designer, ve Creator.
              <br />
              Web teknolojileri ile harika şeyler yapıyorum.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/blog"
              className={cn(
                buttonVariants({ size: "lg" }),
                "rounded-xl transition-all"
              )}
            >
              Blog Yazılarım
            </Link>
            <Link
              href="/resume"
              className={cn(
                buttonVariants({ variant: "outline", size: "lg" }),
                "rounded-xl transition-all hover:bg-muted/50"
              )}
            >
              Resume
            </Link>
            <Link
              href="https://github.com/spacechild-dev"
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ variant: "ghost", size: "lg" }),
                "rounded-xl"
              )}
            >
              GitHub
            </Link>
          </div>
        </section>

        {/* Blog Section */}
        <section className="mt-24 space-y-8">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold">Son Yazılar</h2>
            <Link
              href="/blog"
              className="text-sm text-muted-foreground hover:text-foreground"
            >
              Tümünü Gör →
            </Link>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {recentPosts.length === 0 ? (
              <p className="col-span-full text-center text-muted-foreground">
                Henüz blog yazısı yok.
              </p>
            ) : (
              recentPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="group flex flex-col gap-3 rounded-xl border bg-card p-6 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col gap-2">
                    <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {post.description}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-muted-foreground">
                    <time dateTime={post.date}>
                      {new Date(post.date).toLocaleDateString("tr-TR", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </time>
                  </div>
                </Link>
              ))
            )}
          </div>
        </section>

        {/* About Section */}
        <section className="mt-24 space-y-6">
          <h2 className="text-3xl font-bold">Hakkımda</h2>
          <div className="max-w-3xl space-y-4 text-muted-foreground">
            <p>
              Merhaba! Ben [Adınız], [şehir] merkezli bir [mesleğiniz/rolünüz].
              [Uzmanlık alanlarınız] konusunda tutkulu biriyim.
            </p>
            <p>
              [Yıl] yılından beri [alan] alanında çalışıyorum. [Önemli beceriler
              veya deneyimler] üzerine yoğunlaşıyorum.
            </p>
            <p>
              Boş zamanlarımda [hobiler], [ilgi alanları] ile ilgileniyorum ve
              [topluluk katkıları veya yan projeler] yapıyorum.
            </p>
          </div>
        </section>

        {/* Skills/Tech Stack */}
        <section className="mt-24 space-y-6">
          <h2 className="text-3xl font-bold">Teknolojiler</h2>
          <div className="flex flex-wrap gap-3">
            {[
              "JavaScript",
              "TypeScript",
              "React",
              "Next.js",
              "Node.js",
              "Tailwind CSS",
              "Git",
              // Kendi teknolojilerinizi ekleyin
            ].map((tech) => (
              <span
                key={tech}
                className="rounded-full border bg-muted px-4 py-2 text-sm font-medium"
              >
                {tech}
              </span>
            ))}
          </div>
        </section>

        {/* Contact */}
        <section className="mt-24 space-y-6">
          <h2 className="text-3xl font-bold">İletişim</h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href="mailto:email@example.com"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href="https://twitter.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              Twitter
            </Link>
            <span className="text-muted-foreground">·</span>
            <Link
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </section>
      </div>
    </div>
  )
}
