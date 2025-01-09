"use server";

import { updateUsername } from "@/schemas";
import { z } from "zod";
import { auth } from "../../auth";
import db from "@/database";

export const updateUser = async (values: z.infer<typeof updateUsername>) => {
  const session = await auth();

  if (!session?.user?.id) {
    return {
      error: "No authorized",
      data: null,
    };
  }

  await db.user.update({
    where: {
      id: session.user.id,
    },

    data: {
      name: values.username,
    },
  });
};
