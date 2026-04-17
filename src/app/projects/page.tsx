import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { projects, publications } from "@/content/profile";
import ProjectsNarrative from "../../../content/projects.mdx";

export const metadata = {
  title: "Projects",
};

const showcasedPublications = [
  {
    title:
      "DefenSys: An Integrated Platform for Malware Detection and Containerized Attack Simulation using Deep Learning",
    venue: "IEEE Conference Publication",
    year: "2025",
    summary:
      "Cybersecurity research on an integrated platform that combines deep-learning-based malware detection with containerized attack simulation for safe threat analysis workflows.",
    href: "https://ieeexplore.ieee.org/document/11459625/",
  },
  ...publications,
];

export default function ProjectsPage() {
  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Card className="bg-card/90">
            <CardHeader className="gap-4 p-8 sm:p-10">
              <Badge variant="accent" className="w-fit">
                Projects
              </Badge>
              <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                Product work, systems thinking, and research evidence
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                This page is the proof layer: projects, architecture choices,
                and publications that reinforce the technical areas where I go
                deep.
              </p>
            </CardHeader>
          </Card>

          <Card className="bg-card/85">
            <CardHeader className="p-8">
              <ProjectsNarrative />
            </CardHeader>
          </Card>
        </section>

        <section className="grid gap-6">
          {projects.map((project) => (
            <Card key={project.name} className="bg-card/85">
              <CardHeader className="gap-4 p-8">
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="accent">{project.context}</Badge>
                      <Badge>{project.status}</Badge>
                    </div>
                    <CardTitle className="text-3xl">{project.name}</CardTitle>
                    <CardDescription className="max-w-4xl text-base">
                      {project.summary}
                    </CardDescription>
                  </div>
                  {project.href ? (
                    <Button asChild variant="outline" size="sm">
                      <a href={project.href} target="_blank" rel="noreferrer">
                        View project
                        <ArrowUpRight className="size-3.5" />
                      </a>
                    </Button>
                  ) : null}
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 p-8 pt-0 lg:grid-cols-3">
                <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5 text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Problem:
                  </span>{" "}
                  {project.goal}
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5 text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    System work:
                  </span>{" "}
                  {project.contribution}
                </div>
                <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5 text-sm leading-7 text-muted-foreground">
                  <span className="font-semibold text-foreground">
                    Outcome:
                  </span>{" "}
                  {project.outcome}
                </div>
                <div className="lg:col-span-3 flex flex-wrap gap-2">
                  {project.stack.map((item) => (
                    <Badge key={item}>{item}</Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </section>

        <section>
          <Card className="bg-card/85">
            <CardHeader className="p-8">
              <CardTitle>Publications as credibility</CardTitle>
              <CardDescription>
                {showcasedPublications.length} peer-reviewed publications that
                reinforce the work in
                applied AI, security, cloud traffic classification, and
                systems-oriented research.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 p-8 pt-0 md:grid-cols-2">
              {showcasedPublications.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5"
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge>{item.venue}</Badge>
                    <Badge>{item.year}</Badge>
                    {item.citedBy ? <Badge>{item.citedBy}</Badge> : null}
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.summary}
                  </p>
                  <Button asChild variant="outline" size="sm" className="mt-5">
                    <a href={item.href} target="_blank" rel="noreferrer">
                      View publication
                      <ArrowUpRight className="size-3.5" />
                    </a>
                  </Button>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
