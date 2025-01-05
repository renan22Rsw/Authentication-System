"use server";

//server actionss

import * as z from "zod";
import { loginSchema } from "@/schemas/index";
import { signIn } from "../../auth";
import { isRedirectError } from "next/dist/client/components/redirect";

export const login = async (values: z.infer<typeof loginSchema>) => {
  try {
    const validatedFields = loginSchema.safeParse(values);

    await signIn("credentials", {
      ...validatedFields.data,
      redirect: true,
      redirectTo: "/welcome",
    });

    return { success: "User logged in" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: Error | any) {
    if (isRedirectError(err)) {
      throw err;
    }

    if (err.type === "CredentialsSignin") {
      return { error: "Invalid email or password" };
    }
  }
};
