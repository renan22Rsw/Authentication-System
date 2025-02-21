import { getUserByCredentials, getUserByEmail } from "@/data/user";
import db from "@/database";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

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
        if (!credentials?.email || !credentials?.password) {
          return null;
        }
        //logica de autenticação

        //procura usuario com credentials
        const user = await getUserByCredentials(
          credentials.email as string,
          credentials.password as string,
        );

        if (user) {
          return user;
        }

        return null;
      },
    }),

    GitHub({
      clientId: process.env.AUTH_GITHUB_ID as string,
      clientSecret: process.env.AUTH_GITHUB_SECRET as string,
    }),
    Google({
      clientId: process.env.AUTH_GOOGLE_ID as string,
      clientSecret: process.env.AUTH_GOOGLE_SECRET as string,
    }),
  ],

  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
  },

  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.name = user.name;
        token.email = user.email;
        token.sub = user.id;
      }

      return token;
    },

    async session({ session, token }) {
      if (token) {
        session.user.name = token.name as string;
        session.user.email = token.email as string;
        session.user.id = token.sub as string;
      }
      return session;
    },

    async signIn({ user }) {
      //função cria um user no banco de dados, pegando as informações do github
      const email = user?.email;
      const existingUser = await getUserByEmail(email as string);

      if (!existingUser) {
        await db.user.create({
          data: {
            name: user?.name as string,
            email: user?.email as string,
          },
        });
      }
      return true;
    },
  },
});
