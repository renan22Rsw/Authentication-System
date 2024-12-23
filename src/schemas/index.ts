import z from "zod";

export const loginSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(1, {
    message: "Password is required",
  }),
});

//obs: é uma boa pratica não limitar o numero de characteres de uma passowrd no login

export const registerSchema = z.object({
  name: z.string().min(3, {
    message: "Name is required",
  }),

  email: z.string().email({
    message: "Email is required",
  }),
  password: z.string().min(6, {
    message: "Minimum 6 characteres required",
  }),
});
