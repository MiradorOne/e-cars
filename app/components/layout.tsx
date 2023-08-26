import React from "react";
import Topbar from "~/components/topbar";
import Footer from "~/components/footer";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Topbar />
      {children}
      <Footer />
    </div>
  );
}
