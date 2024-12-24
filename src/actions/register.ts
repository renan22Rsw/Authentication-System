"use server";

//server actionss

import * as z from "zod";
import { registerSchema } from "@/schemas/index";

import prisma from "@/database/index";

import bycrypt from "bcrypt"; //lib para criptografia
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof registerSchema>) => {
  const validatedFields = registerSchema.safeParse(values);

  if (!validatedFields.success) {
    return {
      error: "Invalid email or password",
    };
  }

  const { email, name, password } = validatedFields.data;

  const hashedPassword = await bycrypt.hash(password, 10); //variavel que contem senha criptografada

  const existingEmail = await getUserByEmail(email);

  if (existingEmail) {
    return {
      error: "Email already exists",
    };
  }

  await prisma.user.create({
    data: {
      email,
      name,
      password: hashedPassword,
    },
  });

  return { success: "User created" };
};
