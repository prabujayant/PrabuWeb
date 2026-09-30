"use client";

import { useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

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
    <div className="page-shell pb-16 pt-28">
      <Card className="mx-auto max-w-xl p-6 sm:p-8">
        <Badge variant="accent">Error</Badge>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          Something went wrong
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          An unexpected error occurred while loading this page.
        </p>
        <Button variant="outline" className="mt-6" onClick={reset}>
          Try again
        </Button>
      </Card>
    </div>
  );
}
