export default function Loading() {
  return (
    <div className="px-4 pb-12 pt-6 sm:px-6 lg:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6">
        <div className="h-64 w-full animate-pulse rounded-[1.5rem] border border-border/70 bg-card/70" />
        <div className="grid gap-6 lg:grid-cols-2">
          <div className="h-48 w-full animate-pulse rounded-[1.5rem] border border-border/70 bg-card/60" />
          <div className="h-48 w-full animate-pulse rounded-[1.5rem] border border-border/70 bg-card/60" />
        </div>
      </div>
    </div>
  );
}
