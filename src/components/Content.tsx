import React, { ReactNode } from "react";

export function Content({ children }: { children: ReactNode }) {
  return (
    <div className="tu:flex-1 tu:overflow-y-auto tu:w-full tu:flex tu:flex-row tu:relative">{children}</div>
  );
}
