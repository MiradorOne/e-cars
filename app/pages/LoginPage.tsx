import React from "react";
import FormInput from "~/components/Authorization/FormInput";
import { Form, Link } from "@remix-run/react";
import { Button } from "~/components/Button";
import GoogleAuth from "~/components/Authorization/GoogleAuth";
import Heading from "~/components/Heading";

const LoginPage = () => {
  return (
    <>
      <Heading className="min-[320px]:mb-6 lg:mb-8">Login</Heading>
      <Form method="post">
        <FormInput
          placeholder="Your email"
          label="Email address"
          type="email"
          name="login"
        />
        <FormInput
          placeholder="Your password"
          label="Password"
          type="password"
          name="password"
          contentAfterLabel={
            <Link className="text-green-800" to="/forgot">
              Forgot your password?
            </Link>
          }
        />
        <Button intent="primary" width="full" size="medium" className="mt-6">
          Login
        </Button>
      </Form>
      <div className="mt-6 text-center	text-sm font-semibold">
        <p className="mb-6">
          Don’t have an account?
          <Link to="/signup">
            <span className="text-green-800">&nbsp;Sign Up</span>
          </Link>
        </p>
      </div>
      <GoogleAuth />
    </>
  );
};
export default LoginPage;
