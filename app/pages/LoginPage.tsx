import React, { useState } from "react";
import FormInput from "~/components/Authorization/FormInput";
import { Button } from "~/components/Button";
import { Link } from "@remix-run/react";
import GoogleAuth from "~/components/Authorization/GoogleAuth";
import Heading from "~/components/Heading";

const LoginPage = () => {
  const [errorMessages, setErrorMessages] = useState({});
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const onChangeLoginHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onChangePasswordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      <Heading className="min-[320px]:mb-6 lg:mb-8">Login</Heading>
      <form>
        <FormInput
          placeholder="Your email"
          onInput={onChangeLoginHandler}
          label="Email address"
          type="email"
        />
        <FormInput
          placeholder="Your password"
          onInput={onChangePasswordHandler}
          label="Password"
          type="password"
          contentAfterLabel={
            <Link className="text-green-800" to="/forgot">
              Forgot your password?
            </Link>
          }
        />
        <Button intent="primary" width="full" size="medium">
          Login
        </Button>
      </form>
      <div className=" mt-6 text-center	text-sm font-semibold">
        <p className="mb-6">
          Don’t have an account?
          <span className="text-green-800"> Sign Up</span>
        </p>
      </div>
      <GoogleAuth />
    </>
  );
};
export default LoginPage;
