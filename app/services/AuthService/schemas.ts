import { z } from "zod";

export const registerUserSchema = z.object({
  fullName: z.string().min(5),
  email: z.string().min(5),
  password: z.string().min(8),
});

export type RegisterUserForm = z.infer<typeof registerUserSchema>;
