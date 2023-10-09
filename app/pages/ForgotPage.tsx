import React from "react";
import { Link } from "@remix-run/react";
import Heading from "~/components/Heading";
import FormInput from "~/components/Authorization/FormInput";
import { Button } from "~/components/Button";
import { LeftArrow } from "~/components/IconComponents";

const ForgotPage = () => {
  const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {};
  return (
    <>
      <Heading intent="maxsize32">Forgot password</Heading>
      <p className="mt-6">No worries, we'll send you reset instructions.</p>
      <FormInput
        placeholder="example@mail.com"
        onInput={onChangeEmailHandler}
        label="Email address"
        type="email"
      />
      <Button intent="primary" size="medium" width="full" className="mt-6">
        Reset password
      </Button>
      <p className=" mt-6 flex items-center justify-center text-green-800">
        <LeftArrow fill="#3C7D46" />
        <Link to={"/login"} className="ml-1">
          Back to login
        </Link>
      </p>
    </>
  );
};

export default ForgotPage;
