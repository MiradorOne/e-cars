import React from "react";
import { Layout } from "~/components/layout";
import CreateArticle from "~/components/BlogPage/CreateArticle";
import type { ActionArgs } from "@remix-run/node";
import { createPost } from "~/services/PostService";
import { redirect } from "@remix-run/node";
import type { $Enums } from "@prisma/client";
import { useActionData } from "@remix-run/react";
import { ZodError } from "zod";

export async function action({ request }: ActionArgs) {
  const formData = await request.formData();

  const [title, category, body, featured, postImage] = [
    String(formData.get("postTitle")),
    formData.get("category") as $Enums.CATEGORY,
    String(formData.get("editorBody")),
    String(formData.get("featured")),
    String(formData.get("postImage")),
  ];

  try {
    const result = await createPost({
      title,
      category,
      body,
      featured: Boolean(featured),
      image: postImage,
    });
    if (!result) {
      return new Error("Something went wrong");
    }

    return redirect(`/blog/post/${result.id}`);
  } catch (error) {
    if (error instanceof ZodError) {
      return error.issues;
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
