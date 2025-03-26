import React from "react";

type ContentSwitcherProps = {
  children: React.ReactElement<typeof ContentSwitcherItem> | React.ReactElement<typeof ContentSwitcherItem>[];
}

export function ContentSwitcher({ children }: ContentSwitcherProps) {
  return (
    <div
      role="tablist"
      className="tu:flex tu:flex-row tu:w-full tu:border tu:border-gray-300 tu:rounded-sm tu:text-sm"
    >
      {children}
    </div>
  );
}

type ContentSwitcherItemProps = {
  children?: React.ReactNode,
  active?: boolean,
  onClick?: () => void,
}

export function ContentSwitcherItem({ children, active = false, onClick }: ContentSwitcherItemProps) {
  return (
    <button
      type="button"
      role="tab"
      tabIndex={0}
      aria-selected={active}
      className="tu:flex-1 tu:py-1 tu:px-4 tu:border-r tu:last:border-r-0 tu:border-gray-300 tu:relative tu:overflow-hidden tu:group tu:bg-white"
      onClick={onClick}
    >
      <span className={`tu:relative tu:z-10 tu:transition-colors tu:duration-100 ${active ? "tu:text-gray-50" : "tu:text-gray-800"}`}>
        {children}
      </span>
      <div
        className={`
          tu:absolute tu:inset-0 
          ${active ? "tu:bg-gray-900" : "tu:bg-gray-200"} 
          ${active ? "tu:translate-y-0" : "tu:translate-y-full tu:group-hover:translate-y-0"}
          tu:transition-all tu:duration-200 tu:ease-in-out
        `}
      ></div>
    </button>
  );
}
