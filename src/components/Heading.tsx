import React, { ReactNode } from "react";

export function Heading({ children }: { children: ReactNode }) {
  return <h1 className="tu:text-sm tu:font-bold tu:py-2">{children}</h1>;
}
