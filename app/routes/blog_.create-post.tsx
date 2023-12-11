import React from "react";
import { ZodError } from "zod";
import { useActionData } from "@remix-run/react";
import { json, redirect } from "@remix-run/node";
import type { $Enums } from "@prisma/client";
import type { ActionArgs } from "@remix-run/node";
import { createPost } from "~/services/PostService";
import { Layout } from "~/components/layout";
import CreateArticle from "~/components/BlogPage/CreateArticle";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const [postTitle, category, editorBody, featured, postImage] = [
    String(formData.get("postTitle")),
    formData.get("category") as $Enums.CATEGORY,
    String(formData.get("editorBody")),
    String(formData.get("featured")),
    String(formData.get("postImage")),
  ];

  try {
    const result = await createPost({
      postTitle,
      category,
      editorBody,
      featured: Boolean(featured),
      postImage,
    });
    if (!result) {
      return new Error("Something went wrong");
    }

    return redirect(`/blog/post/${result.id}`);
  } catch (error) {
    if (error instanceof ZodError) {
      return json({ error: error.issues }, { status: 400 });
    }

    throw new Response("Bad Request", {
      status: 400,
    });
  }
}
export default function CreatePost() {
  const errors = useActionData();
  return (
    <Layout>
      <CreateArticle errors={errors} />
    </Layout>
  );
}
