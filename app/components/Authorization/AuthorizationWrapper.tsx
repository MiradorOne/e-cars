import React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthorizationWrapper = ({ children }: Props) => {
  return (
    <div className="lg:max-w[392px] mx-auto w-full px-4 min-[320px]:max-w-[343px] md:max-w-[400px]">
      {children}
    </div>
  );
};

export default AuthorizationWrapper;
