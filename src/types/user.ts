import { z } from "zod";

export type User = {
  id: number;
  name: string;
  email: string;
  age: number;
};

export const userSchema = z.object({
  name: z.string().min(2, "Please enter a valid name"),
  email: z.string().email("Please enter a valid email"),
  age: z
    .number()
    .int()
    .min(1)
    .max(80, "You are over 80? Please do your family a favor and just ki..."),
});

export type UserFormData = z.infer<typeof userSchema>;
