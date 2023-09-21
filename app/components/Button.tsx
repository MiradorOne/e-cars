import React, { ButtonHTMLAttributes } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  isDisabled?: boolean;
  onClick?: () => void;
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
        "border-2 border-[#D1D1D1]",
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
      medium: ["py-3", "text-base"],
    },
    secondaryRadius: {
      top: "rounded-t-lg",
      bot: "rounded-b-lg",
    },
  },
  defaultVariants: {
    intent: "primary",
    size: "small",
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
}: ButtonProps) => (
  <button
    onClick={onClick}
    disabled={isDisabled}
    className={cn(ButtonVariants({ intent, size, className, secondaryRadius }))}
  >
    {children}
  </button>
);
export { Button };
