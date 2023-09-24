import { z } from "zod";
import { $Enums } from "@prisma/client";

export const createPostInputSchema = z.object({
  title: z.string().min(5),
  body: z.string().min(50),
  tags: z.optional(z.array(z.string())),
  featured: z.optional(z.boolean()),
  category: z.nativeEnum($Enums.CATEGORY),
  image: z.string().min(1, { message: "Select an image" }),
});

export type CreatePostArgs = z.infer<typeof createPostInputSchema>;
