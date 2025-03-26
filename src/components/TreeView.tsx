import React, { useState } from "react";
import { ChevronRight } from "@carbon/icons-react";
type TreeViewProps = {
  children:
  | React.ReactElement<typeof TreeNode>
  | React.ReactElement<typeof TreeNode>[];
  label?: string;
};

export function TreeView({ children, label }: TreeViewProps) {
  return (
    <div className="tu:w-full tu:h-full tu:overflow-y-auto tu:bg-gray-100">
      {label && <span className="tu:text-sm tu:font-bold tu:p-2">{label}</span>}
      {children}
    </div>
  );
}

type TreeNodeProps = {
  children?:
  | React.ReactElement<typeof TreeNode>
  | React.ReactElement<typeof TreeNode>[];
  label: string;
  isExpanded?: boolean;
  onClick?: () => void;
};

export function TreeNode({
  children,
  label,
  isExpanded = false,
  onClick,
}: TreeNodeProps) {
  const [isOpen, setIsOpen] = useState<boolean>(isExpanded);

  return (
    <div className="">
      <button
        className="tu:block tu:w-full tu:flex tu:flex-row tu:items-center tu:p-2 tu:hover:bg-gray-200"
        onClick={() => {
          if (children) {
            setIsOpen(!isOpen);
          }
          if (onClick) {
            onClick();
          }
        }}
      >
        {children && (
          <span className="tu:mr-2">
            <ChevronRight size={16} className={`${isOpen ? "tu:rotate-90" : ""} tu:transition-transform tu:duration-150`} />
          </span>
        )}
        {!children && <span className="tu:block tu:w-6"></span>}
        <span className="tu:text-sm">{label}</span>
      </button>
      {isOpen && <div className="tu:pl-6">{children}</div>}
    </div>
  );
}
