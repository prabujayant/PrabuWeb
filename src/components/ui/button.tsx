"use client";

import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  // `shrink-0` on the leading icon is applied at the component level via
  // `[&_svg]:shrink-0` so a stretched button can never squeeze its icon.
  "[&_svg]:shrink-0 inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium transition-colors duration-200 disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "border border-accent bg-accent text-[#180c10] hover:border-[#f2bcc6] hover:bg-[#f2bcc6]",
        outline:
          "border border-accent/50 bg-transparent text-accent hover:border-accent hover:bg-accent/10",
        secondary:
          "border border-border bg-white/[0.04] text-foreground hover:border-accent/40 hover:text-accent",
        ghost: "text-muted-foreground hover:text-accent",
      },
      size: {
        default: "h-11 px-5",
        sm: "h-9 px-3.5 text-[0.8125rem]",
        lg: "h-12 px-6",
        icon: "size-11 rounded-lg",
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
