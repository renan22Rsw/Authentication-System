import { getUserByCredentials } from "@/data/user";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: {
          label: "Email",
        },
        password: {
          label: "Password",
        },
      },
      authorize: async (credentials) => {
        //logica de autenticação

        //procura usuario com credentials
        const user = await getUserByCredentials(
          credentials.email as string,
          credentials.password as string,
        );

        return user;
      },
    }),
  ],
  secret: process.env.AUTH_SECRET,
});
