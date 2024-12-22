"use server";

//server actionss

import * as z from "zod";
import { loginSchema } from "@/schemas/index";

export const login = async (values: z.infer<typeof loginSchema>) => {
  const validatedFields = loginSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid email or password",
    };
  }

  return { success: "email sent!" };
};