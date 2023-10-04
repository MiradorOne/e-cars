import React from "react";
import Heading from "~/components/Heading";
import Question from "~/components/FAQ/Question";
import { Button } from "~/components/Button";

const FaqPage = () => {
  return (
    <div className="mx-auto w-full max-w-[808px] text-gray-900 min-[320px]:px-4 min-[320px]:py-8 md:px-8 md:py-10 lg:px-0 lg:py-12">
      <Heading intent="maxsize44" className="min-[320px]:mb-6 md:mb-8 lg:mb-10">
        Frequently asked questions
      </Heading>
      <Question question="What are the guarantees?" />
      <Question
        question="How much does shipping cost?"
        answer="Shipping varies depending on the car you are buying as its calculated by the dimensions of each unit. There is RORO and Container so depending on your choice we will be able to give you an estimate, closer to the shipping date we will share an exact quote."
      />
      <Question question="Are you a car dealer?" />
      <Question question="Do I have to buy a car from Dubicars only?" />
      <Question question="How long does it take from the time I sign up to shipping time?" />
      <Question question="How long does the inspection take?" />
      <Question question="What if the inspection fails?" />
      <Question question="Can you help me with Car Repair if needed?" />
      <Question question="I’m buying 2 cars, do I have to pay again for Export Safe?" />
      <Question question="Can I get a refund if I don’t buy a car?" />
      <Question question="What about customs, duty, VAT and clearance?" />
      <Question question="What are the payment Methods?" />
      <div className="flex rounded-lg  p-4 shadow-3xl min-[320px]:mt-6 min-[320px]:flex-col md:mt-8 md:flex-row md:items-center lg:mt-10">
        <div>
          <Heading intent="maxsize22">
            Do you still have questions? Contact us for answers.
          </Heading>
          <p className="min-[320px]:mt-2 lg:mt-3">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
        <Button
          intent="primary"
          size="medium"
          className="w-[135px] min-[320px]:mt-4 md:ml-6 md:mt-0"
        >
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default FaqPage;
