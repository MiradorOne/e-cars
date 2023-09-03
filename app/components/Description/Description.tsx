import React, { ComponentPropsWithoutRef } from "react";
import Benefits from "~/components/Description/Benefits";
import SvgSupport from "~/components/IconComponents/Support";
import SvgProtection from "~/components/IconComponents/Protection";
import SvgReviews from "~/components/IconComponents/Reviews";
import { cva, VariantProps } from "class-variance-authority";

interface DescriptionProps
  extends ComponentPropsWithoutRef<"div">,
    VariantProps<typeof DescriptionVariant> {}

const DescriptionVariant = cva("w-full flex justify-between ", {
  variants: {
    intent: {
      //todo rename intents
      homepage: [
        "max-w-[1224px]",
        "justify-between",
        "lg:p-10",
        "md:py-10",
        "md:px-8",
        "lg:shadow-3xl",
        "lg:rounded-2xl",
        "min-[320px]:flex-col",
        "md:flex-row",
        "min-[320px]:py-8",
        "min-[320px]:px-4",
      ],
      aboutUs: [
        "max-w-[1016px]",
        "min-[320px]:flex-col",
        "min-[320px]:items-center",
        "md:flex-row",
      ],
      howItWorks: [
        "max-w-[1224px]",
        "lg:flex",
        "lg:flex-row",
        "md:grid",
        "md:grid-cols-2",
        "md:justify-items-center",
        "gap-y-6",
        "gap-x-4",
        "min-[320px]:flex",
        "min-[320px]:flex-col",
        "items-center",
      ],
    },
  },
});

const Description = ({ className, intent }: DescriptionProps) => {
  const text: string =
    "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.";
  return (
    <div className={DescriptionVariant({ intent, className })}>
      <Benefits
        intent={intent}
        heading={
          intent === "howItWorks"
            ? "Find a car"
            : "Professional approach to clients"
        }
        text={text}
        children={intent === "howItWorks" ? "1" : <SvgSupport />}
      />
      <Benefits
        intent={intent}
        heading={
          intent === "howItWorks"
            ? "Extensive inspection"
            : "Protect all payments"
        }
        text={text}
        children={intent === "howItWorks" ? "2" : <SvgProtection />}
      />
      <Benefits
        intent={intent}
        heading={
          intent === "howItWorks" ? "Extensive inspection" : "Safe Buying"
        }
        text={text}
        children={intent === "howItWorks" ? "3" : <SvgReviews />}
      />
      {intent === "howItWorks" ? (
        <Benefits
          intent={intent}
          heading="Delivery and support"
          text={text}
          children={"4"}
        />
      ) : null}
    </div>
  );
};

export default Description;
