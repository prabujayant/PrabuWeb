import {
  ArrowUpRight,
  Boxes,
  Braces,
  BrainCircuit,
  ChevronDown,
  Cloud,
  Cpu,
  Database,
  ExternalLink,
  Github,
  Globe,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
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

const socialIcons = { GitHub: Github, LinkedIn: Linkedin } as const;
const skillIcons = {
  backend: Boxes,
  cloud: Cloud,
  core: Cpu,
  data: Database,
  languages: Braces,
  ml: BrainCircuit,
  web: Globe,
} as const;

function splitProjectName(name: string) {
  const index = name.indexOf(" - ");
  return index === -1
    ? { title: name, subtitle: null }
    : { title: name.slice(0, index), subtitle: name.slice(index + 3) };
}

function SectionHeading({ title }: { title: string }) {
  return (
    <div className="mb-8 text-center sm:mb-12">
      <h2 className="title-rule relative inline-block text-balance text-3xl font-bold tracking-tight text-foreground sm:text-[2rem]">
        {title}
      </h2>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="pb-8 pt-20 sm:pt-28">
      <div className="page-shell flex flex-col gap-12 sm:gap-16 md:gap-24">
        <div className="flex flex-col gap-4 sm:gap-5">
          <section
            id="home"
            className="grid grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]"
          >
            <div className="flex min-w-0 flex-col rounded-2xl border border-border bg-card p-5 sm:p-8 lg:order-last">
              <Image
                src="/pj-icon.svg"
                alt=""
                width={56}
                height={56}
                className="hidden size-14 sm:block"
                unoptimized
              />
              <h1 className="font-serif text-4xl font-bold leading-tight text-foreground sm:mt-6 sm:text-5xl">
                {siteConfig.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-foreground">
                {siteConfig.role}
              </p>
              <p className="mt-1 text-sm text-muted-foreground">Baker Hughes</p>

              <div className="mt-auto pt-6 sm:pt-7">
                <ul className="space-y-3 border-t border-border pt-5 text-sm text-muted-foreground sm:pt-6">
                  <li className="flex items-center gap-3">
                    <MapPin
                      className="size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    {siteConfig.location}
                  </li>
                  <li className="flex min-w-0 items-center gap-3">
                    <Mail
                      className="size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <a
                      className="min-w-0 break-all transition-colors hover:text-accent"
                      href={siteConfig.emailHref}
                    >
                      {siteConfig.email}
                    </a>
                  </li>
                  <li className="flex items-center gap-3">
                    <Phone
                      className="size-4 shrink-0 text-accent"
                      aria-hidden="true"
                    />
                    <a
                      className="transition-colors hover:text-accent"
                      href={siteConfig.phoneHref}
                    >
                      {siteConfig.phone}
                    </a>
                  </li>
                </ul>

                <div className="mt-6 flex flex-wrap items-center gap-3 sm:mt-7">
                  <Button asChild className="flex-1">
                    <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
                      View Resume{" "}
                      <ExternalLink className="size-4" aria-hidden="true" />
                    </a>
                  </Button>
                  {siteConfig.socialLinks.map((link) => {
                    const Icon =
                      socialIcons[link.label as keyof typeof socialIcons];
                    return (
                      <Button key={link.label} asChild variant="secondary" size="icon">
                        <a
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={link.label}
                        >
                          <Icon className="size-5" aria-hidden="true" />
                        </a>
                      </Button>
                    );
                  })}
                </div>
              </div>
            </div>

            <div
              id="about"
              className="flex min-w-0 flex-col rounded-2xl border border-border bg-card p-5 sm:p-8 lg:p-10"
            >
              <h2 className="title-rule-left relative pb-2 text-3xl font-bold tracking-tight text-foreground">
                About Me
              </h2>
              <p className="mt-6 text-pretty text-lg leading-7 text-zinc-200 sm:mt-8 sm:text-xl sm:leading-9">
                {siteConfig.intro}
              </p>
              <div className="mt-auto flex flex-col gap-3 pt-6 sm:flex-row sm:pt-8">
                <Button asChild size="lg" className="w-full sm:w-auto">
                  <a href="#experience">
                    Check out my experience{" "}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto"
                >
                  <a href="#projects">
                    Check out my projects{" "}
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </Button>
              </div>
            </div>
          </section>

          <section id="metrics">
            <h2 className="sr-only">At a glance</h2>
            <dl className="grid grid-cols-2 gap-3 sm:gap-5 xl:grid-cols-4">
              {homeMetrics.map((metric) => (
                <div
                  key={metric.label}
                  className="min-w-0 rounded-xl border border-border bg-card p-4 sm:p-6"
                >
                  <dt className="text-xs font-medium text-muted-foreground sm:text-sm">
                    {metric.label}
                  </dt>
                  <dd className="mt-1.5 text-xl font-bold tracking-tight text-accent sm:mt-2 sm:text-[1.75rem]">
                    {metric.value}
                  </dd>
                  <dd className="mt-1.5 text-xs leading-5 text-muted-foreground sm:mt-2 sm:text-sm sm:leading-6">
                    {metric.detail}
                  </dd>
                </div>
              ))}
            </dl>
          </section>
        </div>

        <section id="skills">
          <SectionHeading title="Core Tools I Work With" />
          <div className="fill-last grid gap-4 sm:gap-5 md:grid-cols-2 xl:grid-cols-3">
            {skills.map((group) => {
              const Icon = skillIcons[group.icon];
              return (
                <Card key={group.title} className="p-5 sm:p-6">
                  <div className="flex items-center gap-4">
                    <div className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent ring-1 ring-inset ring-accent/20">
                      <Icon className="size-5" aria-hidden="true" />
                    </div>
                    <h3 className="min-w-0 text-base font-semibold text-foreground">
                      {group.title}
                    </h3>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </Card>
              );
            })}
          </div>
        </section>
        <section id="experience">
          <SectionHeading title="Experience Highlights" />
          <ol className="mx-auto max-w-[960px] space-y-4 sm:space-y-6 sm:border-l sm:border-accent/25 sm:pl-10">
            {experience.map((item) => (
              <li key={item.company} className="relative">
                <span
                  aria-hidden="true"
                  className="absolute top-8 hidden size-3 rounded-full border-2 border-accent bg-background sm:-left-[47px] sm:block"
                />
                <Card className="p-5 sm:p-7">
                  <div className="flex flex-wrap items-start justify-between gap-x-4 gap-y-2">
                    <div className="min-w-0">
                      <h3 className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
                        {item.role}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-accent sm:text-base">
                        {item.company}
                      </p>
                    </div>
                    <Badge>{item.period}</Badge>
                  </div>

                  <ul className="mt-4 space-y-3 border-t border-border pt-4 sm:mt-5 sm:pt-5">
                    {item.accomplishments.map((entry) => (
                      <li
                        key={entry}
                        className="relative text-pretty pl-5 text-sm leading-6 text-zinc-300 before:absolute before:left-0 before:top-[0.55rem] before:size-1.5 before:rounded-full before:bg-accent before:content-['']"
                      >
                        {entry}
                      </li>
                    ))}
                  </ul>
                </Card>
              </li>
            ))}
          </ol>
          <div className="mx-auto mt-8 grid max-w-[960px] gap-4 sm:mt-12 sm:gap-5 lg:grid-cols-2">
            <Card className="p-5 sm:p-8">
              <h3 className="title-rule-left relative pb-2 text-xl font-semibold text-foreground">
                Education
              </h3>
              <div className="mt-6 divide-y divide-border sm:mt-7">
                {education.map((item) => (
                  <div key={item.school} className="py-6 first:pt-0 last:pb-0">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="accent">{item.period}</Badge>
                      <Badge>{item.gpa}</Badge>
                    </div>
                    <h4 className="mt-4 text-lg font-semibold text-foreground">
                      {item.school}
                    </h4>
                    <p className="mt-1 text-sm leading-6 text-muted-foreground">
                      {item.degree}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {item.coursework.map((course) => (
                        <Badge key={course}>{course}</Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </Card>
            <Card className="p-5 sm:p-8">
              <h3 className="title-rule-left relative pb-2 text-xl font-semibold text-foreground">
                Leadership
              </h3>
              <div className="mt-6 divide-y divide-border sm:mt-7">
                {leadership.map((item) => (
                  <div key={item.title} className="py-6 first:pt-0 last:pb-0">
                    <Badge variant="accent">{item.period}</Badge>
                    <h4 className="mt-4 text-lg font-semibold text-foreground">
                      {item.title}
                    </h4>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </section>
        <section id="projects">
          <SectionHeading title="Projects" />
          <div className="grid gap-4 sm:gap-5 lg:grid-cols-2">
            {projects.map((project) => {
              const { title, subtitle } = splitProjectName(project.name);
              const shownStack = project.stack.slice(0, 6);
              const moreStack = project.stack.slice(6);
              const details = [
                { label: "Problem", text: project.goal },
                { label: "System work", text: project.contribution },
                { label: "Outcome", text: project.outcome },
                ...(moreStack.length > 0
                  ? [{ label: "Also uses", text: moreStack.join(", ") }]
                  : []),
              ];
              return (
                <Card
                  key={project.name}
                  className="flex h-full flex-col p-5 transition-colors hover:border-accent/30 sm:p-7"
                >
                  <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-2">
                    <p className="text-sm font-medium text-accent">
                      {project.context}
                    </p>
                    <Badge className="gap-1.5">
                      <span
                        aria-hidden="true"
                        className="size-1.5 rounded-full bg-accent"
                      />
                      {project.status}
                    </Badge>
                  </div>
                  <h3 className="mt-3 text-balance text-xl font-semibold tracking-tight text-foreground">
                    {title}
                  </h3>
                  {subtitle ? (
                    <p className="mt-1 text-sm text-muted-foreground">
                      {subtitle}
                    </p>
                  ) : null}
                  <p className="mt-3 text-pretty text-sm leading-6 text-zinc-300 sm:mt-4 sm:text-[0.9375rem] sm:leading-7">
                    {project.summary}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5 sm:mt-5 sm:gap-2">
                    {shownStack.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                    {moreStack.length > 0 ? (
                      <Badge>+{moreStack.length} more</Badge>
                    ) : null}
                  </div>
                  <details className="group mt-4">
                    <summary className="inline-flex min-h-9 list-none items-center gap-1.5 rounded-md text-sm font-medium text-muted-foreground transition-colors hover:text-accent [&::-webkit-details-marker]:hidden">
                      <span className="group-open:hidden">Show details</span>
                      <span className="hidden group-open:inline">
                        Hide details
                      </span>
                      <span className="sr-only"> for {title}</span>
                      <ChevronDown
                        className="size-4 transition-transform group-open:rotate-180"
                        aria-hidden="true"
                      />
                    </summary>
                    <dl className="mt-3 space-y-4 border-t border-border pt-4">
                      {details.map((detail) => (
                        <div
                          key={detail.label}
                          className="grid gap-1 sm:grid-cols-[6.5rem_minmax(0,1fr)] sm:gap-4"
                        >
                          <dt className="text-sm font-semibold text-foreground">
                            {detail.label}
                          </dt>
                          <dd className="text-pretty text-sm leading-6 text-muted-foreground">
                            {detail.text}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  </details>
                  <div className="mt-auto pt-4 sm:pt-6">
                    <div className="flex flex-wrap gap-3 border-t border-border pt-4 sm:pt-5">
                      {project.href ? (
                        <Button asChild size="sm" variant="outline">
                          <a
                            href={project.href}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="size-4" aria-hidden="true" />
                            GitHub
                            <span className="sr-only"> repository for {title}</span>
                          </a>
                        </Button>
                      ) : null}
                      {project.demoHref ? (
                        <Button asChild size="sm">
                          <a
                            href={project.demoHref}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <ExternalLink
                              className="size-4"
                              aria-hidden="true"
                            />
                            Live demo
                            <span className="sr-only"> of {title}</span>
                          </a>
                        </Button>
                      ) : null}
                    </div>
                  </div>
                </Card>
              );
            })}
            <aside className="rounded-xl border border-accent/20 bg-accent/[0.04] p-5 sm:p-8 lg:col-span-2 [&_h2]:font-sans [&_h2]:text-xl [&_h2]:font-semibold sm:[&_h2]:text-2xl [&_p]:mt-3 [&_p]:max-w-[70ch] [&_p]:leading-7 sm:[&_p]:leading-8">
              <ProjectsNarrative />
            </aside>
          </div>
        </section>
        <section id="publications">
          <SectionHeading title="Publications" />
          <Card className="mx-auto max-w-[960px]">
            <ul className="divide-y divide-border">
              {publications.map((item) => (
                <li key={item.title} className="p-4 sm:p-6">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="accent">{item.venue}</Badge>
                    <Badge>{item.year}</Badge>
                    {item.citedBy ? <Badge>{item.citedBy}</Badge> : null}
                  </div>
                  <h3 className="mt-3 text-pretty break-words text-base font-semibold leading-7">
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground transition-colors hover:text-accent"
                    >
                      {item.title}
                      <ArrowUpRight
                        className="ml-1 inline size-4 align-[-0.125em] text-accent"
                        aria-hidden="true"
                      />
                    </a>
                  </h3>
                </li>
              ))}
            </ul>
          </Card>
        </section>
      </div>
    </div>
  );
}
