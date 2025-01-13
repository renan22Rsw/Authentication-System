"use server";

import db from "@/database";

export const existingUser = async (id: string) => {
  const IdUser = await db.user.findFirst({
    where: {
      id: id,
    },
  });

  if (!IdUser) {
    return {
      error: "User not found",
    };
  }
  return {
    sucess: "User found",
  };
};
