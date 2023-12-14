import AuthorizationWrapper from "~/components/Authorization/AuthorizationWrapper";
import SignUpPage from "~/pages/SignUpPage";
import type { ActionArgs } from "@remix-run/node";
import { json } from "@remix-run/node";
import { register } from "~/services/AuthService";
import { ZodError } from "zod";
import { useActionData } from "@remix-run/react";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const [fullName, email, password] = [
    String(formData.get("fullName")),
    String(formData.get("email")),
    String(formData.get("password")),
  ];

  try {
    return await register({ fullName, email, password });
  } catch (error) {
    if (error instanceof ZodError) {
      return json({ error: error.issues }, { status: 400 });
    }
    return json({ error: `Invalid Form Data` }, { status: 400 });
  }
}

export default function SignUp() {
  const errors = useActionData();

  return <AuthorizationWrapper children={<SignUpPage errors={errors} />} />;
}
