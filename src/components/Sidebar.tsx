import React, { ReactNode } from "react";

type SidebarProps = {
  label: string;
  children?: ReactNode;
  className?: string;
  isVisible?: boolean;
  size?: "small" | "medium" | "large";
};

export function Sidebar({
  label,
  children,
  className,
  isVisible = false,
  size = "medium",
}: SidebarProps) {
  return (
    <aside
      aria-label={label}
      className={
        `tu:overflow-y-scroll tu:shrink-0 tu:flex-col tu:justify-between tu:text-sm tu:absolute tu:md:static tu:top-0 
        tu:h-full tu:md:h-auto tu:left-0 tu:bg-white tu:md:flex tu:shadow-lg tu:md:shadow-none tu:z-10
        ${isVisible ? "tu:flex" : "tu:hidden"} ${size === "small" ? "tu:w-48" : size === "medium" ? "tu:w-64" : "tu:w-96"
        }` +
        " " +
        className
      }
    >
      {children}
    </aside>
  );
}

type SidebarItemsProps = { children?: ReactNode };

export function SidebarItems({ children }: SidebarItemsProps) {
  return <ul className="">{children}</ul>;
}

export function SidebarDivider() {
  return <li className="tu:h-px tu:bg-gray-200"></li>;
}

type SidebarLinkItemProps = { children?: ReactNode; href: string };

export function SidebarLinkItem({ children, href }: SidebarLinkItemProps) {
  return (
    <li className="">
      <a
        href={href}
        className="tu:px-4 tu:py-2 tu:w-full tu:h-full tu:block tu:hover:bg-gray-100 tu:cursor-pointer"
      >
        {children}
      </a>
    </li>
  );
}

type SidebarButtonItemProps = { children?: ReactNode; onClick: () => void };

export function SidebarButtonItem({
  children,
  onClick,
}: SidebarButtonItemProps) {
  return (
    <li className="">
      <button
        onClick={onClick}
        className="tu:px-4 tu:py-2 tu:w-full tu:hover:bg-gray-100 tu:text-left tu:cursor-pointer"
      >
        {children}
      </button>
    </li>
  );
}

type SidebarTextItemProps = { children?: ReactNode };

export function SidebarTextItem({ children }: SidebarTextItemProps) {
  return <li className="tu:px-4 tu:py-2 tu:w-full ">{children}</li>;
}
