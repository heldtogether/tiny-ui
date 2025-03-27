import { ReactNode } from "react";
import { cn } from "../utils/cn";

type ShellProps = { children?: ReactNode; className?: string };

export function Shell({ children, className }: ShellProps) {
  return (
    <div
      className={cn(
        "tu:flex tu:flex-col tu:h-screen tu:overflow-hidden tu:font-space tu:relative",
        className
      )}
    >
      {children}
    </div>
  );
}
