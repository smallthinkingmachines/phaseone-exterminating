import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface SectionProps extends HTMLAttributes<HTMLElement> {
  padding?: "none" | "sm" | "md" | "lg" | "xl";
}

export default function Section({
  className,
  padding = "lg",
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(
        {
          "py-0": padding === "none",
          "py-8": padding === "sm",
          "py-12 md:py-16": padding === "md",
          "py-16 md:py-24": padding === "lg",
          "py-24 md:py-32": padding === "xl",
        },
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
