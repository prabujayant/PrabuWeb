import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <section>
          <Card className="bg-card/90">
            <CardHeader className="gap-4 p-6 sm:p-8">
              <Badge variant="accent" className="w-fit">
                404
              </Badge>
              <CardTitle className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                That page doesn&apos;t exist
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 sm:p-8 sm:pt-0">
              <p className="text-base leading-7 text-muted-foreground">
                The link may be out of date, or the page may have moved.
              </p>
              <Button asChild variant="outline" className="mt-6">
                <Link href="/">Back to home</Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
