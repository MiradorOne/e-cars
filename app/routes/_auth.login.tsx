import LoginPage from "~/pages/LoginPage";
import AuthorizationWrapper from "~/components/Authorization/AuthorizationWrapper";

export default function Login() {
  return (
    <div>
      <AuthorizationWrapper children={<LoginPage />} />
    </div>
  );
}
