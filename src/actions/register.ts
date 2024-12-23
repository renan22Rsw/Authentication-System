"use server";

//server actionss

import * as z from "zod";
import { registerSchema } from "@/schemas/index";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid email or password",
    };
  }

  return { success: "email sent!" };
};
