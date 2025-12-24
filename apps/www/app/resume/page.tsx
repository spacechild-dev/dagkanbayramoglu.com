export const metadata = {
  title: "Resume",
  description: "Profesyonel özgeçmişim ve deneyimlerim",
}

export default function ResumePage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Adınız Soyadınız</h1>
          <p className="text-xl text-muted-foreground">
            Pozisyonunuz / Uzmanlık Alanınız
          </p>
          <div className="flex gap-4 text-sm text-muted-foreground">
            <a href="mailto:email@example.com" className="hover:text-foreground">
              email@example.com
            </a>
            <span>·</span>
            <a href="tel:+90" className="hover:text-foreground">
              +90 XXX XXX XX XX
            </a>
            <span>·</span>
            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              GitHub
            </a>
            <span>·</span>
            <a
              href="https://linkedin.com/in/username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground"
            >
              LinkedIn
            </a>
          </div>
        </header>

        {/* About */}
        <section>
          <h2 className="text-2xl font-bold mb-4">Hakkımda</h2>
          <p className="text-muted-foreground leading-relaxed">
            Buraya kendiniz hakkında kısa bir açıklama yazabilirsiniz. Uzmanlık alanlarınız,
            tutkularınız ve profesyonel hedeflerinizden bahsedin.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Deneyim</h2>
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Pozisyon Adı</h3>
                  <p className="text-muted-foreground">Şirket Adı</p>
                </div>
                <span className="text-sm text-muted-foreground">2020 - Günümüz</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                <li>Başarı veya sorumluluk 1</li>
                <li>Başarı veya sorumluluk 2</li>
                <li>Başarı veya sorumluluk 3</li>
              </ul>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-lg font-semibold">Önceki Pozisyon</h3>
                  <p className="text-muted-foreground">Önceki Şirket</p>
                </div>
                <span className="text-sm text-muted-foreground">2018 - 2020</span>
              </div>
              <ul className="list-disc list-inside text-muted-foreground space-y-1 mt-2">
                <li>Başarı veya sorumluluk 1</li>
                <li>Başarı veya sorumluluk 2</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Eğitim</h2>
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">Bölüm Adı</h3>
                <p className="text-muted-foreground">Üniversite Adı</p>
              </div>
              <span className="text-sm text-muted-foreground">2014 - 2018</span>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Yetenekler</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3">Teknik</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-3 py-1 rounded text-sm">JavaScript</span>
                <span className="bg-muted px-3 py-1 rounded text-sm">TypeScript</span>
                <span className="bg-muted px-3 py-1 rounded text-sm">React</span>
                <span className="bg-muted px-3 py-1 rounded text-sm">Next.js</span>
                <span className="bg-muted px-3 py-1 rounded text-sm">Node.js</span>
                {/* Kendi becerilerinizi ekleyin */}
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Araçlar</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-3 py-1 rounded text-sm">Git</span>
                <span className="bg-muted px-3 py-1 rounded text-sm">Docker</span>
                <span className="bg-muted px-3 py-1 rounded text-sm">VS Code</span>
                <span className="bg-muted px-3 py-1 rounded text-sm">Figma</span>
                {/* Kendi araçlarınızı ekleyin */}
              </div>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Projeler</h2>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Proje Adı</h3>
              <p className="text-muted-foreground">
                Proje açıklaması. Ne yaptınız, hangi teknolojileri kullandınız?
              </p>
              <div className="flex gap-2">
                <a
                  href="https://github.com/username/project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  GitHub
                </a>
                <span className="text-muted-foreground">·</span>
                <a
                  href="https://project-demo.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-primary hover:underline"
                >
                  Demo
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h3 className="text-lg font-semibold">Başka Proje</h3>
              <p className="text-muted-foreground">
                Başka bir proje açıklaması.
              </p>
              <a
                href="https://github.com/username/project2"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-primary hover:underline"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>

        {/* Languages */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Diller</h2>
          <ul className="text-muted-foreground space-y-1">
            <li>Türkçe - Ana dil</li>
            <li>İngilizce - İleri seviye</li>
            <li>Başka bir dil - Seviyesi</li>
          </ul>
        </section>
      </div>
    </div>
  )
}
