import {
  ArrowUpRight,
  Boxes,
  BrainCircuit,
  Braces,
  Cloud,
  Database,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
} from "lucide-react";
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
  education,
  experience,
  homeMetrics,
  leadership,
  projects,
  publications,
  siteConfig,
  skills,
} from "@/content/profile";
import ProjectsNarrative from "../../content/projects.mdx";
const socialIcons = { GitHub: Github, LinkedIn: Linkedin, Mail } as const;
const skillIcons = {
  backend: Boxes,
  cloud: Cloud,
  data: Database,
  languages: Braces,
  ml: BrainCircuit,
  web: Globe,
} as const;
export default function HomePage() {
  return (
    <div className="pb-8 pt-20">
      <div className="page-shell flex flex-col gap-10 md:gap-12">
        <section
          id="home"
          className="grid scroll-mt-16 grid-cols-1 items-start gap-8 lg:grid-cols-[1.3fr_1fr] lg:gap-12 xl:gap-16"
        >
          <div className="min-w-0">
            <div
              id="about"
              className="scroll-mt-20 rounded-2xl border border-border bg-accent/[0.03] p-6 backdrop-blur-md sm:p-8"
            >
              <h1 className="title-rule-left relative mb-5 pb-2 text-2xl font-bold text-foreground sm:text-3xl">
                About Me
              </h1>
              <p className="mt-1 text-lg text-muted-foreground">
                Software Development Engineer · Baker Hughes
              </p>
              <p className="mt-5 text-base leading-7 text-muted-foreground">
                {siteConfig.intro}
              </p>
              <p className="mt-4 text-base leading-7 text-muted-foreground">
                {siteConfig.summary}
              </p>
              <div className="mt-6 rounded-xl border border-border bg-background/40 px-5 py-4 text-center text-sm font-medium text-accent sm:text-base">
                {siteConfig.tagline}
              </div>
              <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="#experience">
                    Check out my experience <ArrowUpRight className="size-4" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a href="#projects">
                    Check out my projects <ArrowUpRight className="size-4" />
                  </a>
                </Button>
              </div>

              <div className="mt-5 flex flex-wrap gap-2 text-sm text-muted-foreground">
                <span>{siteConfig.location}</span> <span>•</span>
                <a
                  className="break-all transition-colors hover:text-accent"
                  href={siteConfig.emailHref}
                >
                  {siteConfig.email}
                </a>
                <span>•</span>
                <a
                  className="transition-colors hover:text-accent"
                  href={siteConfig.phoneHref}
                >
                  {siteConfig.phone}
                </a>
              </div>
            </div>
          </div>
          <div className="flex w-full max-w-[480px] flex-col items-center justify-center gap-5 justify-self-end rounded-2xl border border-border bg-accent/5 p-6 backdrop-blur-md sm:p-8 lg:min-h-[560px]">
            <h2 className="font-serif text-3xl font-semibold italic text-foreground sm:text-4xl">
              {siteConfig.name}
            </h2>
            <p className="text-lg text-muted-foreground">
              Software Development Engineer
            </p>
            <p className="-mt-3 text-sm text-muted-foreground">
              Baker Hughes · {siteConfig.location}
            </p>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full min-w-0"
            >
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                View Resume <ExternalLink className="size-4" />
              </a>
            </Button>
            <div className="mt-3 flex items-center gap-7">
              {siteConfig.socialLinks.map((link) => {
                const Icon =
                  socialIcons[link.label as keyof typeof socialIcons];
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                    className="text-xl text-foreground transition-colors hover:text-accent"
                  >
                    <Icon aria-hidden="true" />
                  </a>
                );
              })}
              <a
                href={siteConfig.emailHref}
                aria-label="Email"
                className="text-xl text-foreground transition-colors hover:text-accent"
              >
                <Mail aria-hidden="true" />
              </a>
            </div>
          </div>
        </section>
        <section id="skills" className="scroll-mt-16">
          <h2 className="title-rule relative mb-7 mt-0 text-center text-[2rem] font-bold text-foreground">
            Core Tools I Work With
          </h2>
          <p className="mx-auto mb-10 max-w-[600px] text-center text-lg text-muted-foreground">
            The key technologies I rely on to build fast, reliable, and
            impactful applications.
          </p>
          <div className="mx-auto grid max-w-[1200px] gap-6 md:grid-cols-2">
            {skills.map((group) => {
              const Icon = skillIcons[group.icon];
              return (
                <div
                  key={group.title}
                  className="flex items-start gap-5 rounded-2xl border border-border bg-accent/[0.05] p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:bg-accent/[0.08] hover:shadow-[0_10px_30px_rgba(232,160,173,0.1)]"
                >
                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    <Icon className="size-6" aria-hidden="true" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm font-semibold text-foreground">
                      {group.title}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {group.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-2.5">
                      {group.items.map((item) => (
                        <Badge key={item}>{item}</Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
        <section id="experience" className="scroll-mt-16">
          <h2 className="title-rule relative mb-7 mt-0 text-center text-[2rem] font-bold text-foreground">
            Experience Highlights
          </h2>
          <p className="mx-auto mb-8 max-w-[600px] text-center text-lg text-muted-foreground">
            A glimpse of my professional journey, and the problems I was trusted
            to solve.
          </p>
          <ol className="mx-auto max-w-[1000px] space-y-6 sm:space-y-8">
            {experience.map((item) => (
              <li key={item.company}>
              <article
                className="relative overflow-hidden rounded-xl border border-border border-l-2 border-l-accent/70 bg-white/[0.02] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(232,160,173,0.1)] sm:p-8"
              >
                <div className="pl-4 sm:pl-5">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold text-foreground sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm text-accent sm:text-base">
                        {item.company}
                      </p>
                    </div>
                    <Badge>{item.period}</Badge>
                  </div>

                  <details className="mt-4">
                    <summary className="w-fit cursor-pointer text-sm font-medium text-accent underline-offset-4 hover:underline">
                      View achievements
                    </summary>
                    <ul className="mt-4 space-y-3 border-l border-border pl-4">
                    {item.accomplishments.map((entry) => (
                      <li
                        key={entry}
                        className="relative pl-5 text-sm leading-6 text-muted-foreground before:absolute before:left-0 before:top-[3px] before:font-semibold before:text-accent before:content-['•']"
                      >
                        {entry}
                      </li>
                    ))}
                    </ul>
                  </details>
                </div>
              </article>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-8 grid max-w-[1200px] gap-6 lg:grid-cols-2">
            <Card>
              <CardHeader className="p-6 sm:p-8">
                <CardTitle>Education</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 p-6 pt-0 sm:p-8 sm:pt-0">
                {education.map((item) => (
                  <div
                    key={item.school}
                    className="rounded-xl border border-border bg-accent/[0.05] p-5"
                  >
                    <div className="flex flex-wrap gap-2">
                      <Badge>{item.period}</Badge> <Badge>{item.gpa}</Badge>
                    </div>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">
                      {item.school}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.degree}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.coursework.join(", ")}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="p-6 sm:p-8">
                <CardTitle>Leadership</CardTitle>
              </CardHeader>
              <CardContent className="grid gap-4 p-6 pt-0 sm:p-8 sm:pt-0">
                {leadership.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-xl border border-border bg-accent/[0.05] p-5"
                  >
                    <Badge>{item.period}</Badge>
                    <h3 className="mt-4 text-xl font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </section>
        <section id="projects" className="scroll-mt-16">
          <h2 className="title-rule relative mb-7 mt-0 text-center text-[2rem] font-bold text-foreground">
            Projects
          </h2>
          <p className="mx-auto mb-8 max-w-[600px] text-center text-lg text-muted-foreground">
            Each project links to its source, and to a live demo where one is
            deployed. Click through to explore the code.
          </p>
          <div className="grid gap-8 lg:grid-cols-2">
            {projects.map((project) => (
              <div
                key={project.name}
                className="flex h-full flex-col overflow-hidden rounded-xl border border-border bg-white/[0.02] transition-all duration-300 hover:-translate-y-1 hover:border-accent/30 hover:shadow-[0_10px_30px_rgba(232,160,173,0.1)]"
              >
                <div className="flex flex-wrap items-start justify-between gap-4 p-6 sm:p-8">
                  <div className="flex min-w-0 flex-1 flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground">
                      {project.name}
                    </h3>
                  </div>
                  <Badge variant="accent">{project.status}</Badge>
                </div>
                <p className="px-6 text-sm leading-7 text-muted-foreground sm:px-8">
                  {project.summary}
                </p>
                <div className="mt-4 grid gap-3 px-6 sm:px-8">
                  <div className="min-w-0 rounded-lg border border-border bg-accent/[0.05] p-4 text-sm leading-6 text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Problem:
                    </span>
                    {project.goal}
                  </div>
                  <div className="min-w-0 rounded-lg border border-border bg-accent/[0.05] p-4 text-sm leading-6 text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      System work:
                    </span>
                    {project.contribution}
                  </div>
                  <div className="min-w-0 rounded-lg border border-border bg-accent/[0.05] p-4 text-sm leading-6 text-muted-foreground">
                    <span className="font-semibold text-foreground">
                      Outcome:
                    </span>
                    {project.outcome}
                  </div>
                </div>
                <div className="mt-auto flex flex-wrap gap-2 px-6 pb-6 pt-4 sm:px-8 sm:pb-8">
                  {project.href ? (
                    <Button asChild size="sm" variant="outline">
                      <a href={project.href} target="_blank" rel="noopener noreferrer">
                        <Github className="size-3.5" /> GitHub
                      </a>
                    </Button>
                  ) : null}
                  {project.demoHref ? (
                    <Button asChild size="sm">
                      <a href={project.demoHref} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="size-3.5" /> Live demo
                      </a>
                    </Button>
                  ) : null}
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </div>
            ))}
            <Card>
              <CardHeader className="p-6 sm:p-8">
                <ProjectsNarrative />
              </CardHeader>
            </Card>
          </div>
        </section>
        <section id="publications" className="scroll-mt-16">
          <h2 className="title-rule relative mb-7 mt-0 text-center text-[2rem] font-bold text-foreground">
            Publications
          </h2>
          <div className="mx-auto grid max-w-[1200px] gap-4 md:grid-cols-2">
            {publications.map((item) => (
              <Card key={item.title} className="flex flex-col">
                <CardHeader className="p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="accent">{item.venue}</Badge>
                    <Badge>{item.year}</Badge>
                    {item.citedBy ? <Badge>{item.citedBy}</Badge> : null}
                  </div>
                  <CardTitle className="mt-4 break-words text-lg leading-7">
                    {item.title}
                  </CardTitle>
                  {item.authors ? (
                    <CardDescription className="text-xs leading-5">
                      {item.authors}
                    </CardDescription>
                  ) : null}
                </CardHeader>
                <CardContent className="flex-1 p-6 pt-0">
                  <p className="text-sm leading-7 text-muted-foreground">
                    {item.summary}
                  </p>
                  <Button asChild variant="outline" size="sm" className="mt-5">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View publication <ArrowUpRight className="size-3.5" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
        <section id="metrics" className="scroll-mt-16">
          <h2 className="title-rule relative mb-7 mt-0 text-center text-[2rem] font-bold text-foreground">
            At a glance
          </h2>
          <div className="mx-auto grid max-w-[1200px] gap-4 md:grid-cols-2 xl:grid-cols-4">
            {homeMetrics.map((metric) => (
              <Card key={metric.label}>
                <CardHeader className="p-6">
                  <CardDescription>{metric.label}</CardDescription>
                  <CardTitle className="text-2xl sm:text-3xl">
                    {metric.value}
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6 pt-0 text-sm leading-6 text-muted-foreground">
                  {metric.detail}
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
