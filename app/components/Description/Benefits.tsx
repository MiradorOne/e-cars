import React, { ComponentPropsWithoutRef, JSX } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "~/utils/cn";

type Intent = "homepage" | "aboutUs" | "howItWorks";

interface BenefitsProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof BenefitsVariant> {
  children?: JSX.Element | string;
  heading: string;
  text: string;
}

const BenefitsVariant = cva("flex text-sm  lg:mt-0 items-center ", {
  variants: {
    intent: {
      homepage: [
        "lg:max-w-[355px]",
        "items-center",
        "min-[320px]:mt-4",
        "w-[100%]",
      ],
      aboutUs: [
        "flex-col",
        "text-center",
        "max-w-[30%]",
        "flex",
        "justify-start",
        "min-[320px]:mt-6",
        "min-[320px]:max-w-full",
        "md:max-w-[30%]",
      ],
      howItWorks: ["min-[320px]:mt-6", "flex-col", "text-center", "w-10/12"],
    },
  },
});

const Benefits = ({
  children,
  heading,
  text,
  className,
  intent,
}: BenefitsProps) => {
  const getIntentMargin = (intent: Intent) => {
    switch (intent) {
      case "homepage":
        return "ml-2";
      case "aboutUs":
        return "mt-4";
      case "howItWorks":
        return "mt-6";
      default:
        return "m-0";
    }
  };

  return (
    <div className={cn(BenefitsVariant({ intent, className }))}>
      <div
        className={
          'font-semibold" rounded-full bg-orange-mainOrange  p-4 text-lg leading-3 '
        }
      >
        {children}
      </div>
      <div className={getIntentMargin(intent as Intent)}>
        <h3 className={"font-semibold"}>{heading}</h3>
        <p
          className={
            intent === "howItWorks" ? "mx-auto mt-2 w-[78%]" : "mx-auto mt-2"
          }
        >
          {text}
        </p>
      </div>
    </div>
  );
};

export default Benefits;
