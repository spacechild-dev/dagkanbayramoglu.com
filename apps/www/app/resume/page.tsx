import Link from "next/link"
import { siteConfig } from "@/config/site"

export const metadata = {
  title: "Career",
  description: "Professional experience and skills in digital performance marketing and media management.",
}

export default function ResumePage() {
  return (
    <div className="container max-w-3xl py-12">
      <div className="flex flex-col gap-12">
        {/* Header */}
        <header className="flex flex-col gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Career</h1>
          <p className="text-xl text-muted-foreground leading-tight">
            Digital Performance and Media Account Manager
          </p>
          <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
            <a href="mailto:hello@dagkanbayramoglu.com" className="hover:text-foreground transition-colors">
              hello@dagkanbayramoglu.com
            </a>
            <span>·</span>
            <Link
              href="https://github.com/spacechild-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              GitHub
            </Link>
            <span>·</span>
            <Link
              href="https://www.linkedin.com/in/dagkanbayramoglu/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              LinkedIn
            </Link>
          </div>
        </header>

        {/* Professional Summary */}
        <section>
          <h2 className="text-2xl font-bold mb-4 border-b pb-2">Professional Summary</h2>
          <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">
            Highly accomplished and results-driven Digital Marketing professional with extensive experience in performance marketing, team leadership, and strategic campaign management. Proven ability to drive ROI, optimize media budgets, and coordinate cross-functional teams to achieve operational alignment and business growth. Expertise spans multi-platform campaign execution, analytics, automation, and CRM insights, with a strong focus on mentorship, development, and process improvement.
          </p>
        </section>

        {/* Experience */}
        <section>
          <h2 className="text-2xl font-bold mb-8 border-b pb-2">Experience</h2>
          <div className="flex flex-col gap-12">
            
            {/* OPTDCOM */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-xl font-bold uppercase tracking-widest text-primary">OPTDCOM</h3>
                <span className="text-sm text-muted-foreground italic">Hybrid (Istanbul, Türkiye)</span>
              </div>
              
              <div className="flex flex-col gap-2 ml-1 border-l-2 pl-6 pb-2">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-sm sm:text-base">
                  <h4 className="text-lg font-semibold leading-snug">Digital Performance and Media Account Manager</h4>
                  <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Oct 2025 – Present</span>
                </div>
                <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                  <li>Managing performance and media operations across multiple clients and verticals.</li>
                  <li>Coordinating strategy, reporting, and execution for performance marketing workflows.</li>
                  <li>Collaborating with creative, analytics, and technical teams to ensure operational alignment.</li>
                </ul>
              </div>
            </div>

            {/* ROIPUBLIC */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-xl font-bold uppercase tracking-widest text-primary">ROIPUBLIC</h3>
                <span className="text-sm text-muted-foreground italic">Hybrid (Istanbul, Türkiye)</span>
              </div>
              
              <div className="flex flex-col gap-8 ml-1 border-l-2 pl-6">
                {/* Role 1 */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-sm sm:text-base">
                    <h4 className="text-lg font-semibold leading-snug">Performance Marketing Team Lead</h4>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Nov 2024 – Oct 2025</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                    <li>Led a team of six with focus on mentorship, coordination, and performance marketing execution.</li>
                    <li>Provided hands-on leadership to support, unblock, and upskill the team without micromanaging.</li>
                    <li>Managed multi-platform campaigns (Google Ads, Meta, Criteo, TikTok, LinkedIn) and optimized media budgets.</li>
                    <li>Built dashboards via Looker Studio and delivered CRM insights through automated reporting pipelines.</li>
                    <li>Audited and improved tracking and attribution setups; supported CRM and offline conversion integrations.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-sm sm:text-base">
                    <h4 className="text-lg font-semibold leading-snug">Sr. Performance Marketing Executive</h4>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Feb 2024 – Oct 2024</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                    <li>Owned end-to-end campaign execution and reporting across performance platforms.</li>
                    <li>Provided mentorship and hands-on guidance to junior team members from day one.</li>
                    <li>Supported analytics, automation, and technical teams in measurement workflows.</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* PROFAJ */}
            <div className="flex flex-col gap-6">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline gap-1">
                <h3 className="text-xl font-bold uppercase tracking-widest text-primary">PROFAJ</h3>
                <span className="text-sm text-muted-foreground italic">On-site (Izmir, Türkiye)</span>
              </div>
              
              <div className="flex flex-col gap-8 ml-1 border-l-2 pl-6">
                {/* Role 1 */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-sm sm:text-base">
                    <h4 className="text-lg font-semibold leading-snug">Digital Marketing Team Lead</h4>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Apr 2023 – Feb 2024</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                    <li>Provided strategic direction for a five-person marketing team.</li>
                    <li>Facilitated 1:1s focused on performance, growth, and operational support.</li>
                    <li>Managed workload distribution, performance tracking, and operational efficiency.</li>
                  </ul>
                </div>

                {/* Role 2 */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-sm sm:text-base">
                    <h4 className="text-lg font-semibold leading-snug">Digital Marketing Specialist</h4>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Apr 2023 – Apr 2024</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                    <li>Managed full-funnel campaigns across Google Ads, Meta Ads, Criteo, and LinkedIn.</li>
                    <li>Built automated dashboards in Looker Studio and designed funnel-based campaign structures.</li>
                    <li>Optimized tracking setups such as pixels, tags, and conversion events.</li>
                  </ul>
                </div>

                {/* Role 3 */}
                <div className="flex flex-col gap-2">
                  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 text-sm sm:text-base">
                    <h4 className="text-lg font-semibold italic">Digital Marketing Intern</h4>
                    <span className="text-sm font-medium text-muted-foreground whitespace-nowrap">Mar 2022</span>
                  </div>
                  <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1.5 mt-2 text-sm">
                    <li>Supported campaign reporting and ad setup operations.</li>
                    <li>Assisted with foundational tasks in a fast-paced performance-oriented environment.</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Certifications</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1 text-xs sm:text-sm font-medium">
              <li>Criteo Programmatic Campaign Manager</li>
              <li>Criteo Programmatic Advertising Professional</li>
              <li>Meta Certified Digital Marketing Associate</li>
              <li>Google Ads Search / Display / Video</li>
            </ul>
            <ul className="list-disc list-outside ml-4 text-muted-foreground space-y-1 text-xs sm:text-sm font-medium">
              <li>Google Ads Shopping / App</li>
              <li>Apple Search Ads</li>
            </ul>
          </div>
        </section>

        {/* Skills */}
        <section>
          <h2 className="text-2xl font-bold mb-6 border-b pb-2">Skills & Tools</h2>
          <div className="grid grid-cols-1 gap-8">
            <div>
              <h3 className="font-semibold mb-3">Performance Marketing</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">Google Ads</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">Meta Ads</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">Criteo</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">TikTok Ads</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">LinkedIn Ads</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">Apple Search Ads</span>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-3">Analytics & Automation</h3>
              <div className="flex flex-wrap gap-2">
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">GA4</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">GTM</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">Looker Studio</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">Python</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">JavaScript</span>
                <span className="bg-muted px-2.5 py-1 rounded-md text-xs font-medium border border-border text-foreground">Make / Zapier</span>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}