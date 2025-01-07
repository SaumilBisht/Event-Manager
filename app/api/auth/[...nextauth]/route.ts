import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/db";
const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "MoDi" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        

        const username=credentials?.username
        const password=credentials?.password

        const user=await prisma.users.findFirst({
          where:
          {
            username
          }
        })

        if (user && user.password === password) {
          return {
            id: user.id,
            name:user.username
          };
        }
        return null;
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
});

export { handler as GET, handler as POST };
