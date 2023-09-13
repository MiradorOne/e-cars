import React from "react";
import { Layout } from "~/components/layout";
import CreateArticle from "~/components/BlogPage/CreateArticle";

export default function Index() {
  return (
    <Layout>
      <CreateArticle />
    </Layout>
  );
}
