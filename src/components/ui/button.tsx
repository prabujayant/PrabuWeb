"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // `shrink-0` on the leading icon is applied at the component level via
  // `[&_svg]:shrink-0` so a stretched button can never squeeze its icon.
  "[&_svg]:shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "border border-accent bg-accent text-[#0a0a0a] hover:-translate-y-0.5 hover:bg-transparent hover:text-accent hover:shadow-[0_0_15px_rgba(255,182,193,0.3)]",
        outline:
          "border border-accent bg-transparent text-accent hover:-translate-y-0.5 hover:bg-accent hover:text-background hover:shadow-[0_0_15px_rgba(255,182,193,0.3)]",
        secondary:
          "border border-border bg-accent/10 text-muted-foreground hover:-translate-y-0.5 hover:border-accent/30 hover:bg-accent/20 hover:text-accent",
        ghost: "text-muted-foreground hover:text-accent",
      },
      size: {
        default: "h-[42px] px-6 py-2",
        sm: "h-9 px-4 py-2 text-xs",
        lg: "h-[42px] px-6 py-2",
        icon: "h-10 w-10 rounded-lg",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
