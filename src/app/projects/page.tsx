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

export default function ProjectsPage() {
  return (
    <div className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section className="grid gap-6 lg:grid-cols-[1fr_1fr] lg:items-start">
          <Card className="bg-card/90">
            <CardHeader className="gap-4 p-6 sm:p-8">
              <Badge variant="accent" className="w-fit">
                Projects
              </Badge>
              <h1 className="font-serif text-3xl font-semibold tracking-tight sm:text-4xl">
                Things I've built and papers I've written
              </h1>
              <p className="max-w-3xl text-base leading-7 text-muted-foreground sm:text-lg">
                A plain list of the projects and publications I'm most happy
                to show, with a little context about the problem behind each
                one.
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
                    <CardTitle className="text-2xl">{project.name}</CardTitle>
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
              <CardTitle>Publications</CardTitle>
              <CardDescription>
                {publications.length} peer-reviewed papers, mostly on applied
                AI, network security, and traffic classification.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 p-8 pt-0 md:grid-cols-2">
              {publications.map((item) => (
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
                  {item.authors ? (
                    <p className="mt-2 text-xs leading-5 text-muted-foreground">
                      {item.authors}
                    </p>
                  ) : null}
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
