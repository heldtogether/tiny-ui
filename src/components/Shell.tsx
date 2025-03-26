import React, { ReactNode } from "react";

type ShellProps = { children?: ReactNode };

export function Shell({ children }: ShellProps) {
  return <div className="tu:flex tu:flex-col tu:h-screen tu:overflow-hidden">{children}</div>;
}
