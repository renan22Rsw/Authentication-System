"use server";

//server actionss

import * as z from "zod";
import { loginSchema } from "@/schemas/index";
import { signIn } from "../../auth";

export const login = async (values: z.infer<typeof loginSchema>) => {
  try {
    const validatedFields = loginSchema.safeParse(values);

    if (!validatedFields.success) {
      return {
        error: "Invalid email or password",
      };
    }

    await signIn("credentials", {
      ...validatedFields.data,
      redirect: true,
    });

    return { success: "User logged in" };
  } catch (err) {
    console.log(err);
  }
};
