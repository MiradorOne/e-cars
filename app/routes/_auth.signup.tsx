import AuthorizationWrapper from "~/components/Authorization/AuthorizationWrapper";
import SignUpPage from "~/pages/SignUpPage";

export default function SignUp() {
  return <AuthorizationWrapper children={<SignUpPage />} />;
}
