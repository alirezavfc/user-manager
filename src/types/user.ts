import { z } from "zod";

export type User = {
  id: number;
  name: string;
  email: string;
};

export const userSchema = z.object({
  name: z.string().min(2, "Please enter a valid name"),
  email: z.string().email("Please enter a valid email"),
});

export type UserFormData = z.infer<typeof userSchema>;
