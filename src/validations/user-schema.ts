import { z } from "zod";

export const userSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  status: z.enum(["active", "inactive"]),
});

export type UserSchema = z.infer<typeof userSchema>;
