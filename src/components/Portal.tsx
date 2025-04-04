import { ReactNode } from "react";

export function Portal({ children }: { children: ReactNode }) {
  return <main className="tu:flex-1 tu:overflow-y-auto tu:p-4 tu:font-sans">{children}</main>;
}
