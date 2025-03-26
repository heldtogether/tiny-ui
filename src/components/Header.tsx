import React, { ReactNode } from "react";
import { CarbonIconType, Close, Menu } from "@carbon/icons-react";
import { Tooltip, TooltipContent } from "./Tooltip";

export function Header({ children }: { children?: ReactNode }) {
  return (
    <header className="tu:w-full tu:border-b tu:border-gray-200 tu:flex tu:flex-row tu:justify-between">
      {children}
    </header>
  );
}

type HeaderTitleProps = { children?: ReactNode, onMenuClick?: () => void, isMenuOpen?: boolean };

export function HeaderTitle({ children, onMenuClick, isMenuOpen = false }: HeaderTitleProps) {
  return (
    <div className="tu:flex tu:flex-row tu:items-center">
      <button className="tu:p-3 tu:hover:bg-gray-100 tu:block tu:md:hidden" onClick={onMenuClick}>
        {isMenuOpen ? <Close size={20} /> : <Menu size={20} />}
      </button>
      <h1 className="tu:text-lg tu:font-bold">{children}</h1>
    </div>
  );
}

export function HeaderActions({ children }: { children?: ReactNode }) {
  return <div className="tu:flex tu:flex-row tu:items-center">{children}</div>;
}

type HeaderActionProps = { children?: ReactNode, onClick?: () => void, icon?: CarbonIconType, tooltip?: string };

export function HeaderAction({ children, onClick, icon: Icon, tooltip }: HeaderActionProps) {
  return (
    <Tooltip>
      <button className={`tu:p-3 ${onClick ? "tu:hover:bg-gray-100" : ""} tu:text-xs`} onClick={onClick}>
        {Icon && <Icon size={20} />}
        {children}
      </button>
      {tooltip && (
        <TooltipContent position="bottom">
          {tooltip}
        </TooltipContent>
      )}
    </Tooltip>
  );
}
