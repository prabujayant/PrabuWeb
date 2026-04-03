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
  featuredThemes,
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
        <section className="grid gap-6 lg:grid-cols-[1.3fr_0.7fr]">
          <Card className="overflow-hidden border-accent/10 bg-card/90">
            <CardHeader className="gap-5 p-8 sm:p-10">
              <Badge variant="accent" className="w-fit">
                Available for software engineering roles
              </Badge>
              <div className="space-y-4">
                <h1 className="max-w-4xl font-serif text-4xl font-semibold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  {siteConfig.tagline}
                </h1>
                <p className="max-w-3xl text-lg leading-8 text-muted-foreground sm:text-xl">
                  {siteConfig.intro}
                </p>
                <p className="max-w-3xl text-base leading-8 text-muted-foreground">
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
                <Button asChild size="lg">
                  <a href={siteConfig.emailHref}>
                    Start a conversation
                    <ArrowRight className="size-4" />
                  </a>
                </Button>
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

          <div className="grid gap-6">
            <Card className="border-border/70 bg-card/85">
              <CardHeader className="p-8">
                <CardTitle>Why this portfolio is memorable</CardTitle>
                <CardDescription>
                  Built around proof, clarity, and technical depth.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {featuredThemes.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.4rem] border border-border/70 bg-background/65 px-4 py-4 text-sm leading-7 text-muted-foreground"
                  >
                    {item}
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card className="border-border/70 bg-card/85">
              <CardHeader className="p-8">
                <CardTitle>Best fit</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {fitAreas.map((item) => (
                  <Badge key={item} className="mr-2 inline-flex">
                    {item}
                  </Badge>
                ))}
              </CardContent>
            </Card>
          </div>
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

        <section className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr]">
          <Card className="bg-card/85">
            <CardHeader className="p-8">
              <HomeNarrative />
            </CardHeader>
          </Card>

          <Card className="overflow-hidden border-accent/10 bg-card/90">
            <CardHeader className="gap-4 p-8">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <Badge variant="accent">{featuredProject.context}</Badge>
                  <CardTitle className="mt-4 text-3xl">
                    {featuredProject.name}
                  </CardTitle>
                </div>
                <Button asChild variant="outline" size="sm">
                  <a
                    href={featuredProject.href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Open project
                    <ArrowUpRight className="size-3.5" />
                  </a>
                </Button>
              </div>
              <CardDescription className="text-base">
                {featuredProject.summary}
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 p-8 pt-0">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/65 p-5 text-sm leading-7 text-muted-foreground">
                <span className="font-semibold text-foreground">Problem:</span>{" "}
                {featuredProject.goal}
              </div>
              <div className="rounded-[1.5rem] border border-border/70 bg-background/65 p-5 text-sm leading-7 text-muted-foreground">
                <span className="font-semibold text-foreground">
                  System work:
                </span>{" "}
                {featuredProject.contribution}
              </div>
              <div className="rounded-[1.5rem] border border-border/70 bg-background/65 p-5 text-sm leading-7 text-muted-foreground">
                <span className="font-semibold text-foreground">Outcome:</span>{" "}
                {featuredProject.outcome}
              </div>
              <div className="flex flex-wrap gap-2">
                {featuredProject.stack.map((item) => (
                  <Badge key={item}>{item}</Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
