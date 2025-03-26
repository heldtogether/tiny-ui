import React, { ReactNode } from "react";

/**
 * Content component that wraps the non-header content of the page. The content is a flex row with a scrollable overflow.
 * It typically contains sidebar(s) and a portal. The sidebar is the &lt;aside&gt; content of the page. The portal is the &lt;main&gt; content of the page.
 */
export function Content({ children }: { children: ReactNode }) {
  return (
    <div className="tu:flex-1 tu:overflow-y-auto tu:w-full tu:flex tu:flex-row tu:relative">{children}</div>
  );
}
