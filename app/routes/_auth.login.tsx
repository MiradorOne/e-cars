import LoginPage from "~/pages/LoginPage";
import AuthorizationWrapper from "~/components/Authorization/AuthorizationWrapper";
import type { ActionArgs } from "@remix-run/node";
import { signIn } from "~/services/AuthService";
import { useActionData } from "@remix-run/react";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const [login, password] = [
    String(formData.get("login")),
    String(formData.get("password")),
  ];

  try {
    return await signIn(login, password);
  } catch (errors) {}
}

export default function Login() {
  const errors = useActionData();

  return (
    <div>
      <AuthorizationWrapper children={<LoginPage errors={errors} />} />
    </div>
  );
}
