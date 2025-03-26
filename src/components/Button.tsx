import { CarbonIconType } from "@carbon/icons-react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "primary" | "secondary" | "tertiary" | "destructive";
  ghost?: boolean;
  icon?: CarbonIconType;
  iconOnly?: boolean;
};

export function Button({
  children,
  onClick,
  type = "primary",
  ghost = false,
  icon: Icon,
  iconOnly = false,
}: ButtonProps) {
  switch (type) {
    case "primary":
      return (
        <button
          className={`tu:py-2 tu:pl-4 ${iconOnly ? "tu:pr-2" : "tu:pr-12"} tu:flex-1 tu:cursor-pointer tu:flex tu:flex-row tu:items-center ${ghost
            ? "tu:bg-transparent tu:text-blue-600 tu:hover:bg-blue-600 tu:hover:text-white"
            : " tu:bg-blue-600 tu:text-white tu:hover:bg-blue-700 tu:hover:text-white"
            }`}
          onClick={onClick}
        >
          {Icon && <Icon className="tu:mr-2" size={20} />}
          {!iconOnly && children}
        </button>
      );
    case "secondary":
      return (
        <button
          className={`tu:py-2 tu:pl-4 ${iconOnly ? "tu:pr-2" : "tu:pr-12"} tu:flex-1 tu:cursor-pointer tu:flex tu:flex-row tu:items-center ${ghost
            ? "tu:bg-transparent tu:text-gray-700 tu:hover:bg-gray-700 tu:hover:text-gray-100"
            : "tu:bg-gray-700 tu:text-gray-100 tu:hover:bg-gray-900"
            }`}
          onClick={onClick}
        >
          {Icon && <Icon className="tu:mr-2" size={20} />}
          {!iconOnly && children}
        </button>
      );
    case "tertiary":
      return (
        <button
          className={`tu:py-2 tu:pl-4 ${iconOnly ? "tu:pr-2" : "tu:pr-12"} tu:flex-1 tu:cursor-pointer tu:flex tu:flex-row tu:items-center ${ghost
            ? "tu:bg-transparent tu:text-blue-500 tu:hover:border tu:hover:border-blue-500 tu:hover:bg-blue-50"
            : "tu:border tu:border-blue-500 tu:text-blue-500 tu:hover:bg-blue-600 tu:hover:text-white"
            }`}
          onClick={onClick}
        >
          {Icon && <Icon className="tu:mr-2" size={20} />}
          {!iconOnly && children}
        </button>
      );
    case "destructive":
      return (
        <button
          className={`tu:py-2 tu:pl-4 ${iconOnly ? "tu:pr-2" : "tu:pr-12"} tu:flex-1 tu:cursor-pointer tu:flex tu:flex-row tu:items-center ${ghost
            ? "tu:bg-transparent tu:text-red-700 tu:hover:bg-red-800 tu:hover:text-white"
            : "tu:bg-red-700 tu:text-white tu:hover:bg-red-800 tu:hover:text-white"
            }`}
          onClick={onClick}
        >
          {Icon && <Icon className="tu:mr-2" size={20} />}
          {!iconOnly && children}
        </button>
      );
    default:
      return null;
  }
}
