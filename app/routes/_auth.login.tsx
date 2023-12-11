import LoginPage from "~/pages/LoginPage";
import AuthorizationWrapper from "~/components/Authorization/AuthorizationWrapper";
import type { ActionArgs } from "@remix-run/node";
import { signIn } from "~/services/AuthService";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();
  const [login, password] = [
    String(formData.get("login")),
    String(formData.get("password")),
  ];

  try {
    return await signIn(login, password);
  } catch (e) {
    console.log("LOGIN ERROR", e);
  }
}

export default function Login() {
  return (
    <div>
      <AuthorizationWrapper children={<LoginPage />} />
    </div>
  );
}
