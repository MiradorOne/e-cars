import React from "react";

interface Props {
  children: React.ReactNode;
}

const AuthorizationWrapper = ({ children }: Props) => {
  return (
    <div className="lg:max-w[392px] mx-auto w-full px-4 min-[320px]:max-w-[343px] min-[320px]:py-8 md:max-w-[400px] md:py-10 lg:px-0 lg:py-12">
      {children}
    </div>
  );
};

export default AuthorizationWrapper;
