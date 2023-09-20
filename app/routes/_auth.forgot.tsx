import AuthorizationWrapper from "~/components/Authorization/AuthorizationWrapper";
import ForgotPage from "~/pages/ForgotPage";
import React, { createContext, useContext, useState } from "react";

type ResetContextType = {
  email: string;
  setEmail: (c: string) => void;
};
export const ResetContext = createContext<ResetContextType>({
  email: "",
  setEmail: () => {},
});
export const useResetContext = () => useContext(ResetContext);

export default function SignUp() {
  const [email, setEmail] = useState<string>("");

  return (
    <ResetContext.Provider value={{ email, setEmail }}>
      <AuthorizationWrapper children={<ForgotPage />} />
    </ResetContext.Provider>
  );
}
