import { Download, ExternalLink } from "lucide-react";
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
  projects,
  publications,
  siteConfig,
} from "@/content/profile";
import ResumeNarrative from "../../../content/resume.mdx";

export const metadata = {
  title: "Resume",
};

const resumeSignals = [
  {
    label: "Experience",
    value: "2 internships",
    detail: "Baker Hughes and Juniper Networks",
  },
  {
    label: "Publications",
    value: `${publications.length} papers`,
    detail: "IEEE Access, ICCCNT, ICWIHI, and applied AI venues",
  },
  {
    label: "Focus",
    value: "Full stack + ML",
    detail: "Systems, data modeling, cloud delivery, and applied AI",
  },
];

export default function ResumePage() {
  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Card className="bg-card/90">
            <CardHeader className="gap-4 p-8 sm:p-10">
              <Badge variant="accent" className="w-fit">
                Resume
              </Badge>
              <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                A recruiter-friendly snapshot of current work
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                The summary below is backed by a server-rendered PDF generated
                from the same typed content that powers the rest of the site.
              </p>
              <div className="flex flex-wrap gap-3">
                <Button asChild size="lg">
                  <a href="/resume.pdf" target="_blank" rel="noreferrer">
                    Download PDF
                    <Download className="size-4" />
                  </a>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <a
                    href={siteConfig.socialLinks[0].href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                    <ExternalLink className="size-4" />
                  </a>
                </Button>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-card/85">
            <CardHeader className="p-8">
              <ResumeNarrative />
            </CardHeader>
          </Card>
        </section>

        <section className="grid gap-4 md:grid-cols-3">
          {resumeSignals.map((item) => (
            <Card key={item.label} className="bg-card/80">
              <CardHeader className="p-6">
                <CardDescription>{item.label}</CardDescription>
                <CardTitle className="text-2xl">{item.value}</CardTitle>
              </CardHeader>
              <CardContent className="p-6 pt-0 text-sm leading-7 text-muted-foreground">
                {item.detail}
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <Card className="bg-card/85">
            <CardHeader className="p-8">
              <CardTitle>Quick summary</CardTitle>
              <CardDescription>
                The important story, without making someone dig through the PDF.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 p-8 pt-0">
              <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Experience
                </h3>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                  {experience.map((item) => (
                    <li key={item.company}>
                      <span className="font-semibold text-foreground">
                        {item.company}
                      </span>{" "}
                      - {item.accomplishments[0]}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Projects
                </h3>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                  {projects.map((item) => (
                    <li key={item.name}>
                      <span className="font-semibold text-foreground">
                        {item.name}
                      </span>{" "}
                      - {item.summary}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5">
                <h3 className="font-serif text-xl font-semibold text-foreground">
                  Academics and research
                </h3>
                <ul className="mt-3 space-y-3 text-sm leading-7 text-muted-foreground">
                  <li>
                    <span className="font-semibold text-foreground">
                      {education[0].school}
                    </span>{" "}
                    - {education[0].degree}, {education[0].gpa}
                  </li>
                  <li>
                    Co-authored {publications.length} peer-reviewed papers
                    across applied AI, health monitoring, and network security.
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card className="overflow-hidden bg-card/85">
            <CardHeader className="p-8">
              <CardTitle>Inline preview</CardTitle>
              <CardDescription>
                Scroll the live PDF below or open it in a new tab for a cleaner
                reading experience.
              </CardDescription>
            </CardHeader>
            <CardContent className="p-0">
              <iframe
                src="/resume.pdf"
                title={`${siteConfig.name} resume preview`}
                className="min-h-[760px] w-full border-0"
              />
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
