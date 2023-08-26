import { Outlet } from "@remix-run/react";
import { Layout } from "~/components/layout";

export default function Auth() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
