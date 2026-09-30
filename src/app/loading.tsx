import { cn } from "@/lib/utils";

const block =
  "animate-pulse border border-border bg-card motion-reduce:animate-none";

export default function Loading() {
  return (
    <div className="pb-8 pt-24 sm:pt-28" role="status">
      <span className="sr-only">Loading…</span>
      <div className="page-shell flex flex-col gap-5">
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)]">
          <div className={cn("h-[26rem] rounded-2xl", block)} />
          <div className={cn("h-[26rem] rounded-2xl", block)} />
        </div>
        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {["role", "papers", "recognition", "education"].map((key) => (
            <div key={key} className={cn("h-32 rounded-xl", block)} />
          ))}
        </div>
      </div>
    </div>
  );
}
