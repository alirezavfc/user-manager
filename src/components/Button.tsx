import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  type: "button" | "submit";
  disabled?: boolean;
};

export default function Button({
  children,
  onClick,
  type,
  disabled,
}: ButtonProps) {
  return (
    <button
      disabled={disabled}
      type={type}
      className="
    rounded-lg
    bg-blue-600
    px-4 py-2
    text-white
    font-medium
    transition-colors duration-200
    hover:bg-blue-700
    cursor-pointer
    disabled:cursor-not-allowed
    disabled:opacity-50
  "
      onClick={onClick}
    >
      {children}
    </button>
  );
}
