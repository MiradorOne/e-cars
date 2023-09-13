import React, { useState } from "react";
import Heading from "~/components/Heading";
import FormInput from "~/components/Authorization/FormInput";
import { Button } from "~/components/Button";

const SignUpPage = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordsSame, setIsThePasswordsSame] = useState(true);
  const [isPasswordShort, setIsPasswordShort] = useState(false);

  const onChangeNameHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onChangeEmailHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    if (password.length >= 7) {
      setIsPasswordShort(false);
    }
    console.log(password);
    console.log(isPasswordShort);
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
      <form>
        <FormInput
          placeholder="John Doe"
          onInput={onChangeNameHandler}
          label="Full name"
          type="text"
        />
        <FormInput
          placeholder="Your email"
          onInput={onChangeEmailHandler}
          label="Email address"
          type="email"
        />
        <FormInput
          placeholder="Your password"
          onInput={onChangePasswordHandler}
          label="Password"
          type="password"
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
        <div className="mb-6 mt-6">
          <input type="checkbox" name="policy" />
          <label htmlFor="policy" className=" ml-2 mt-6  text-sm">
            I agree to the
            <span className="text-green-800"> Terms of Service</span> and
            <span className="text-green-800"> Privacy Policy</span>
          </label>
        </div>
        <Button
          intent="primary"
          width="full"
          size="medium"
          type="button"
          onClick={createUserHandler}
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};

export default SignUpPage;
