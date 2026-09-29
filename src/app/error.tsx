"use client";

import { useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// Next.js requires the default export of `error.tsx` to be named `Error`, which
// necessarily shadows the global. The prop is destructured to `caughtError`.
// biome-ignore lint/suspicious/noShadowRestrictedNames: mandated by Next.js
export default function Error({
  error: caughtError,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(caughtError);
  }, [caughtError]);

  return (
    <div className="page-shell pb-12 pt-20">
      <div className="flex flex-col gap-6">
        <section>
          <Card className="bg-card/90">
            <CardHeader className="gap-4 p-6 sm:p-8">
              <Badge variant="accent" className="w-fit">
                Error
              </Badge>
              <CardTitle className="font-serif text-2xl font-semibold tracking-tight sm:text-3xl">
                Something went wrong
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 pt-0 sm:p-8 sm:pt-0">
              <p className="text-base leading-7 text-muted-foreground">
                An unexpected error occurred while loading this page.
              </p>
              <Button variant="outline" className="mt-6" onClick={reset}>
                Try again
              </Button>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
}
