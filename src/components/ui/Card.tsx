import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
}

export default function Card({
  className,
  hover = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-xl bg-zinc-900/50 backdrop-blur-sm border border-white/10",
        hover && "transition-transform duration-300 hover:scale-105",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
