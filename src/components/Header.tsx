import React, { ReactNode } from "react";
import { CarbonIconType, Close, Menu } from "@carbon/icons-react";
import { Tooltip, TooltipContent } from "./Tooltip";

type HeaderProps = { children: React.ReactElement<typeof HeaderTitle | typeof HeaderActions> | React.ReactElement<typeof HeaderTitle | typeof HeaderActions>[]; };

/**
 * Header component that wraps the title and actions of the header. It is always visible at the top of the page.
 */
export function Header({ children }: HeaderProps) {
  return (
    <header className="tu:w-full tu:border-b tu:border-gray-200 tu:flex tu:flex-row tu:justify-between">
      {children}
    </header>
  );
}

type HeaderTitleProps = { children?: ReactNode, onMenuClick?: () => void, isMenuOpen?: boolean };

/**
 * HeaderTitle component that displays the title of the header.
 */
export function HeaderTitle({ children, onMenuClick, isMenuOpen = false }: HeaderTitleProps) {
  return (
    <div className="tu:flex tu:flex-row tu:items-center tu:px-4">
      <button className="tu:p-3 tu:hover:bg-gray-100 tu:block tu:md:hidden" onClick={onMenuClick}>
        {isMenuOpen ? <Close size={20} /> : <Menu size={20} />}
      </button>
      <h1 className="tu:text-lg tu:font-bold">{children}</h1>
    </div>
  );
}

type HeaderActionsProps = { children: React.ReactElement<typeof HeaderAction> | React.ReactElement<typeof HeaderAction>[]; };

/**
 * HeaderActions component that wraps the actions of the header.
 */
export function HeaderActions({ children }: HeaderActionsProps) {
  return <div className={`tu:flex tu:flex-row tu:items-center`}>{children}</div>;
}

type HeaderActionProps = { children?: ReactNode, onClick?: () => void, icon?: CarbonIconType, label: string, tooltip?: boolean };

/**
 * HeaderAction component that displays an action in the header.
 */
export function HeaderAction({ children, onClick, icon: Icon, label, tooltip }: HeaderActionProps) {
  return (
    <Tooltip>
      <button className={`tu:p-3 ${onClick ? "tu:hover:bg-gray-100" : ""} tu:text-xs`} onClick={onClick}>
        {Icon && <Icon size={20} />}
        <span className="tu:sr-only">{label}</span>
        {children}
      </button>
      {tooltip && (
        <TooltipContent position="bottom">
          {label}
        </TooltipContent>
      )}
    </Tooltip>
  );
}
