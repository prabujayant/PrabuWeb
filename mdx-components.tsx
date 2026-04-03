import type { MDXComponents } from "mdx/types";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h2: ({ className, ...props }) => (
      <h2
        className={[
          "font-serif text-2xl font-semibold tracking-tight text-foreground sm:text-3xl",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    p: ({ className, ...props }) => (
      <p
        className={[
          "text-base leading-8 text-muted-foreground sm:text-lg",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    ul: ({ className, ...props }) => (
      <ul
        className={[
          "ml-6 list-disc space-y-3 text-base leading-8 text-muted-foreground sm:text-lg",
          className,
        ]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    strong: ({ className, ...props }) => (
      <strong
        className={["font-semibold text-foreground", className]
          .filter(Boolean)
          .join(" ")}
        {...props}
      />
    ),
    ...components,
  };
}
