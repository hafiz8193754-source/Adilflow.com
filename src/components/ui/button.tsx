import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex min-h-11 items-center justify-center gap-2 rounded-full px-5 text-base font-medium transition-colors duration-150 focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        lime: "bg-accent text-ink hover:bg-accent-hover",
        outline:
          "border border-on-ink/35 bg-transparent text-on-ink hover:border-on-ink hover:bg-on-ink/5",
        outlineInk:
          "border border-fg/20 bg-transparent text-fg hover:border-fg hover:bg-fg/5",
        whatsapp: "bg-whatsapp text-whatsapp-ink hover:bg-accent",
      },
      size: {
        md: "h-11",
        lg: "h-12 px-6",
      },
    },
    defaultVariants: {
      variant: "lime",
      size: "md",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />
  );
}
