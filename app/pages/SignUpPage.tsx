import React, { useState } from "react";
import { Form } from "@remix-run/react";
import Heading from "~/components/Heading";
import FormInput from "~/components/Authorization/FormInput";
import { Button } from "~/components/Button";

const SignUpPage = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordsSame, setIsThePasswordsSame] = useState(true);
  const [isPasswordShort, setIsPasswordShort] = useState(false);

  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password.length >= 7) {
      setIsPasswordShort(false);
    }
  };
  const onChangePasswordConfirmHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
  };
  const createUserHandler = () => {
    if (password !== confirmPassword) {
      setIsThePasswordsSame(false);
    } else {
      setIsThePasswordsSame(true);
    }
    if (password.length < 8) {
      setIsPasswordShort(true);
    }
  };
  return (
    <>
      <Heading className="min-[320px]:mb-6 lg:mb-8">Sign Up</Heading>
      <Form method="post">
        <FormInput
          placeholder="John Doe"
          required
          label="Full name"
          type="text"
          name="fullName"
        />
        <FormInput
          placeholder="Your email"
          label="Email address"
          required
          type="email"
          name="email"
        />
        <FormInput
          placeholder="Your password"
          onInput={onChangePasswordHandler}
          label="Password"
          required
          type="password"
          name="password"
        />
        <span
          className={
            isPasswordShort ? "text-xs text-red-500" : "text-xs text-gray-500"
          }
        >
          At least 8 characters
        </span>
        <FormInput
          placeholder="Re-type password"
          onInput={onChangePasswordConfirmHandler}
          label="Confirm password"
          type="password"
        />

        {isPasswordsSame ? null : (
          <span className="text-xs text-red-500">
            The passwords don't match
          </span>
        )}
        <div className=" mt-6">
          <input type="checkbox" required name="policy" />
          <label htmlFor="policy" className=" ml-2 mt-6  text-sm">
            I agree to the
            <span className="text-green-800"> Terms of Service</span> and
            <span className="text-green-800"> Privacy Policy</span>
          </label>
        </div>
        <Button
          className="mt-6"
          intent="primary"
          width="full"
          size="medium"
          type="submit"
          onClick={createUserHandler}
        >
          Sign Up
        </Button>
      </Form>
    </>
  );
};

export default SignUpPage;
