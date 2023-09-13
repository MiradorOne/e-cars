import AuthorizationWrapper from "~/components/Authorization/AuthorizationWrapper";
import ForgotPage from "~/pages/ForgotPage";

export default function SignUp() {
  return <AuthorizationWrapper children={<ForgotPage />} />;
}
