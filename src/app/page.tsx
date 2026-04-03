import { ArrowRight, ArrowUpRight, Download } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  fitAreas,
  homeMetrics,
  projects,
  siteConfig,
} from "@/content/profile";
import HomeNarrative from "../../content/home.mdx";

export default function HomePage() {
  const featuredProject = projects[0];

  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section>
          <Card className="overflow-hidden border-accent/10 bg-card/90">
            <CardHeader className="gap-5 p-8 sm:p-10">
              <div className="space-y-4">
                <h1 className="font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {siteConfig.tagline}
                </h1>
                <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
                  {siteConfig.intro}
                </p>
                <p className="text-base leading-8 text-muted-foreground">
                  {siteConfig.summary}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
                <span>{siteConfig.location}</span>
                <span className="hidden sm:inline">•</span>
                <a href={siteConfig.emailHref}>{siteConfig.email}</a>
                <span className="hidden sm:inline">•</span>
                <a href={siteConfig.phoneHref}>{siteConfig.phone}</a>
              </div>
              <div className="flex flex-wrap gap-3">
                <a href="mailto:prabu.jayant2022@gmail.com" className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium h-12 px-6 py-3 text-base bg-accent text-background shadow-sm hover:bg-accent/90 transition-all">
                  Start a conversation
                  <ArrowRight className="size-4" />
                </a>
                <Button asChild variant="outline" size="lg">
                  <Link href="/projects">See selected work</Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    Download resume
                    <Download className="size-4" />
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="border-border/70 bg-card/85">
            <CardHeader className="p-8">
              <CardTitle>Focus areas</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {fitAreas.map((item) => (
                <Badge key={item} className="mr-2 inline-flex">
                  {item}
                </Badge>
              ))}
            </CardContent>
          </Card>

          <Card className="border-border/70 bg-card/85">
            <CardHeader className="p-8">
              <CardTitle>Get in touch</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm leading-7 text-muted-foreground">
                Open to full-stack roles, collaborations, and technical discussions. Interested in AI-assisted products and distributed systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <a href="mailto:prabu.jayant2022@gmail.com" className="inline-flex items-center justify-center gap-2 rounded-full px-4 py-2 text-xs h-9 border border-border bg-background/70 text-foreground hover:bg-muted/80 hover:border-foreground/40 transition-all font-medium">
                  Email me
                  <ArrowRight className="size-3.5" />
                </a>
                <Button asChild size="sm" variant="outline">
                  <a href="https://www.linkedin.com/in/prabu-jayant-6b316b251/" target="_blank" rel="noreferrer">
                    LinkedIn
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {homeMetrics.map((metric) => (
            <Card key={metric.label} className="bg-card/80">
              <CardHeader className="p-6">
                <CardDescription>{metric.label}</CardDescription>
                <CardTitle className="text-2xl">{metric.value}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-sm leading-7 text-muted-foreground">
                {metric.detail}
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[1fr_1fr]">
          <Card className="bg-card/85">
            <CardHeader className="p-8">
              <HomeNarrative />
            </CardHeader>
          </Card>

          <Card className="overflow-hidden border-accent/10 bg-card/90">
            <CardHeader className="gap-3 p-8">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <Badge variant="accent">{featuredProject.context}</Badge>
                  <CardTitle className="mt-3 text-3xl">
                    {featuredProject.name}
                  </CardTitle>
                </div>
                <Button asChild variant="outline" size="sm" className="mt-1">
                  <a
                    href={featuredProject.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
              </div>
              <CardDescription className="text-base">
                {featuredProject.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-3 p-8 pt-0">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/65 p-4 text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">Problem:</span> {featuredProject.goal}
              </div>
              <div className="rounded-[1.5rem] border border-border/70 bg-background/65 p-4 text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">Solution:</span> {featuredProject.contribution}
              </div>
              <div className="rounded-[1.5rem] border border-border/70 bg-background/65 p-4 text-sm leading-6 text-muted-foreground">
                <span className="font-semibold text-foreground">Result:</span> {featuredProject.outcome}
              </div>
              <div className="flex flex-wrap gap-2 pt-2">
                {featuredProject.stack.map((item) => (
                  <Badge key={item} variant="secondary" className="text-xs">{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
