import { Layout } from "~/components/layout";
import HomePage from "~/pages/HomePage";
import React from "react";
import BlogPage from "~/pages/BlogPage";

export default function Index() {
  return (
    <Layout>
      <HomePage />
      {/*<BlogPage />*/}
    </Layout>
  );
}
