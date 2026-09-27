"use client";

import { useEffect } from "react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
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
