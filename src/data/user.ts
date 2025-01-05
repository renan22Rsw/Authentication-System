"use server";

import db from "@/database";
import bycrypt from "bcrypt";

export const getUserByEmail = async (email: string) => {
  try {
    const user = await db.user.findUnique({
      where: {
        email: email,
      },
    });
    return user;
  } catch (err) {
    return { error: err };
  }
};

export const getUserByCredentials = async (email: string, password: string) => {
  const user = await db.user.findFirst({
    where: {
      email: email,
    },
  });
  if (!user) {
    return null;
  }

  const isPasswordCorrect = bycrypt.compareSync(
    password,
    user.password as string,
  );

  if (isPasswordCorrect) {
    return { email: user.email, name: user.name };
  }

  return null;
};
