import { Badge } from "@/components/ui/badge";
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
  leadership,
  siteConfig,
  skills,
} from "@/content/profile";
import AboutNarrative from "../../../content/about.mdx";

export const metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <div className="px-4 pb-16 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8">
        <section className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
          <Card className="bg-card/90">
            <CardHeader className="gap-4 p-8 sm:p-10">
              <Badge variant="accent" className="w-fit">
                About
              </Badge>
              <h1 className="font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
                Building AI-assisted software with calm execution
              </h1>
              <p className="max-w-3xl text-lg leading-8 text-muted-foreground">
                This is the longer story behind the portfolio: how I work, what
                I optimize for, and the internships and communities that shaped
                that approach.
              </p>
              <div className="flex flex-wrap gap-3 text-sm text-muted-foreground">
                <span>{siteConfig.location}</span>
                <span>•</span>
                <span>{education[0].degree}</span>
                <span>•</span>
                <span>{education[0].period}</span>
              </div>
            </CardHeader>
          </Card>

          <Card className="bg-card/85">
            <CardHeader className="p-8">
              <AboutNarrative />
            </CardHeader>
          </Card>
        </section>

        <section className="grid gap-6">
          {experience.map((item) => (
            <Card key={item.company} className="bg-card/85">
              <CardHeader className="gap-3 p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div>
                    <CardTitle className="text-3xl">{item.company}</CardTitle>
                    <CardDescription className="text-base">
                      {item.role}
                    </CardDescription>
                  </div>
                  <Badge>{item.period}</Badge>
                </div>
              </CardHeader>
              <CardContent className="grid gap-4 p-8 pt-0 md:grid-cols-3">
                {item.accomplishments.map((entry) => (
                  <div
                    key={entry}
                    className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5 text-sm leading-7 text-muted-foreground"
                  >
                    {entry}
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </section>

        <section className="grid gap-6 lg:grid-cols-2">
          <Card className="bg-card/85">
            <CardHeader className="p-8">
              <CardTitle>Education</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-8 pt-0">
              {education.map((item) => (
                <div
                  key={item.school}
                  className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5"
                >
                  <div className="flex flex-wrap gap-2">
                    <Badge>{item.period}</Badge>
                    <Badge>{item.gpa}</Badge>
                  </div>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
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

          <Card className="bg-card/85">
            <CardHeader className="p-8">
              <CardTitle>Leadership</CardTitle>
            </CardHeader>
            <CardContent className="grid gap-4 p-8 pt-0">
              {leadership.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5"
                >
                  <Badge>{item.period}</Badge>
                  <h3 className="mt-4 font-serif text-xl font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>

        <section>
          <Card className="bg-card/85">
            <CardHeader className="p-8">
              <CardTitle>Technical stack</CardTitle>
              <CardDescription>
                The tools and systems I reach for most across product
                engineering, ML workflows, and cloud delivery.
              </CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 p-8 pt-0 md:grid-cols-2">
              {skills.map((group) => (
                <div
                  key={group.title}
                  className="rounded-[1.5rem] border border-border/70 bg-background/60 p-5"
                >
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {group.title}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <Badge key={item}>{item}</Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
