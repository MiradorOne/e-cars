import React, { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils/cn";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  isDisabled?: boolean;
  onClick?: () => void;
  type?: "submit" | "reset" | "button";
}

const ButtonVariants = cva(" text-center font-semibold duration-300", {
  variants: {
    intent: {
      primary: [
        "border-none",
        "text-white",
        "rounded-lg",
        "bg-[#3C7D46]",
        "hover:bg-green-700",
        "active:bg-[#3C7D46]",
      ],
      secondary: [
        "place-content-center",
        "border border-[#D1D1D1]",
        "bg-white",
        "hover:bg-gray-200",
        "py-3.5",
        "active:bg-white",
        "flex",
        "items-center",
        "justify-center",
      ],
    },
    width: {
      full: "w-full",
      auto: "w-auto",
    },
    size: {
      small: ["py-1.5", "text-sm", "px-3"],
      medium: ["py-3", "text-base px-6"],
    },
    secondaryRadius: {
      top: "rounded-t-lg",
      bot: "rounded-b-lg",
    },
    height: {
      small: ["h-9"],
      medium: ["h-12"],
    },
    fontSize: {
      small: ["text-sm"],
      medium: ["text-base"],
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "small",
    height: "medium",
    fontSize: "medium",
  },
});
const Button = ({
  className,
  intent,
  size,
  children,
  isDisabled,
  secondaryRadius,
  onClick,
  width,
  type,
  height,
  fontSize,
}: ButtonProps) => (
  <button
    type={type}
    onClick={onClick}
    disabled={isDisabled}
    className={cn(
      ButtonVariants({
        intent,
        size,
        className,
        secondaryRadius,
        width,
        height,
        fontSize,
      })
    )}
  >
    {children}
  </button>
);
export { Button };
