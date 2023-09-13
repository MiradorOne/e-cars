import React from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "~/utils/cn";

interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof HeadingVariants> {}
const HeadingVariants = cva("font-semibold", {
  variants: {
    intent: {
      maxsize44: [
        "[lg:text-[44px]",
        "lg:leading-[3rem]",
        "min-[320px]:text-4xl",
      ],
      maxsize38: ["lg:text-[38px]", "lg:leading-10", "min-[320px]:text-3xl"],
      maxsize32: [
        "lg:text-[32px]",
        "leading-9",
        "min-[320px]:text-[26px]",
        "min-[320px]:leading-7",
      ],
      maxsize22: [
        "lg:text-[22px]",
        "min-[320px]:text-[19px]",
        "lg:leading-7",
        "min-[320px]:leading-6",
      ],
    },
  },
  defaultVariants: {
    intent: "maxsize38",
  },
});

const Heading = ({ children, className, intent }: HeadingProps) => {
  return (
    <h2 className={cn(HeadingVariants({ intent, className }))}>{children}</h2>
  );
};

export default Heading;
