import React, { ReactNode } from "react";

export function Tooltip({ children }: { children: ReactNode }) {
  return <div className="tu:relative tu:group">{children}</div>;
}

type TooltipContentProps = { children: ReactNode, position: "top" | "bottom" | "left" | "right", isVisible?: boolean }

export function TooltipContent({ children, position, isVisible = false }: TooltipContentProps) {
  return (
    <div
      className={`
        tu:group-hover:block
        ${isVisible ? "tu:block" : "tu:hidden"}
        tu:absolute tu:bg-gray-800 tu:text-white tu:p-2 tu:z-20 tu:text-xs tu:after:content-[''] 
        tu:after:absolute tu:after:w-2 tu:after:h-2 tu:after:bg-gray-800 tu:after:rotate-45 
        tu:after:transform tu:whitespace-nowrap
        ${position === "top" ?
          `tu:-top-full tu:left-1/2 tu:-translate-x-1/2 tu:after:top-full tu:after:left-1/2 tu:after:-translate-x-1/2 tu:after:-translate-y-1/2` :
          ""}
        ${position === "bottom" ?
          `tu:-bottom-full tu:left-1/2 tu:-translate-x-1/2 tu:after:bottom-full tu:after:left-1/2 tu:after:-translate-x-1/2 tu:after:translate-y-1/2 ` :
          ""}
        ${position === "left" ?
          `tu:-left-full tu:top-1/2 tu:-translate-y-1/2 tu:after:left-full tu:after:top-1/2 tu:after:-translate-y-1/2 tu:after:-translate-x-1/2` :
          ""}
        ${position === "right" ?
          `tu:-right-full tu:top-1/2 tu:-translate-y-1/2 tu:after:right-full tu:after:top-1/2 tu:after:-translate-y-1/2 tu:after:translate-x-1/2` :
          ""}
      `}
    >
      {children}
    </div>
  );
}
