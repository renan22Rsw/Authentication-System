"use server";

import { updateUsername } from "@/schemas";
import { z } from "zod";
import { auth } from "../../auth";
import db from "@/database";

export const updateUser = async (values: z.infer<typeof updateUsername>) => {
  const session = await auth();

  const userExist = await db.user.findUnique({
    where: {
      id: session?.user?.id,
    },
  });

  if (!userExist) {
    console.log("user not found");
  }

  await db.user.update({
    where: {
      id: session?.user?.id,
    },

    data: {
      name: values.username,
    },
  });
};
