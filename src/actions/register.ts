"use server";

//server actions

import * as z from "zod";
import { registerSchema } from "@/schemas/index";

import db from "@/database/index";

import bycrypt from "bcrypt"; //lib para criptografia
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof registerSchema>) => {
  try {
    const validatedFields = registerSchema.safeParse(values);

    if (!validatedFields.success) {
      return {
        error: "Invalid email or password",
      };
    }

    const { email, name, password } = validatedFields.data;

    const hashedPassword = bycrypt.hashSync(password, 10); //variavel que contem senha criptografada

    const existingEmail = await getUserByEmail(email);

    if (existingEmail) {
      return {
        error: "Email already in use",
      };
    }

    await db.user.create({
      data: {
        email,
        name,
        password: hashedPassword,
      },
    });

    return { success: "User registered" };
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: Error | any) {
    return {
      error: "something went wrong",
      err,
    };
  }
};
