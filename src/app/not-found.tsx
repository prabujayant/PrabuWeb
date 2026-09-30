import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function NotFound() {
  return (
    <div className="page-shell pb-16 pt-28">
      <Card className="mx-auto max-w-xl p-6 sm:p-8">
        <Badge variant="accent">404</Badge>
        <h1 className="mt-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
          That page doesn&apos;t exist
        </h1>
        <p className="mt-3 text-base leading-7 text-muted-foreground">
          The link may be out of date, or the page may have moved.
        </p>
        <Button asChild variant="outline" className="mt-6">
          <Link href="/">Back to home</Link>
        </Button>
      </Card>
    </div>
  );
}
