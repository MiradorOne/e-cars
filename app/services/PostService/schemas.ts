import { z } from "zod";
import { $Enums } from "@prisma/client";

export const createPostInputSchema = z.object({
  postTitle: z.string().min(5),
  editorBody: z.string().min(50),
  tags: z.optional(z.array(z.string())),
  featured: z.optional(z.boolean()),
  category: z.nativeEnum($Enums.CATEGORY),
  postImage: z.string().min(1, { message: "Select an image" }),
});

export type CreatePostArgs = z.infer<typeof createPostInputSchema>;
