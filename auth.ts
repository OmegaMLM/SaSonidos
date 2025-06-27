import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      return true;
    },
    async session({ session }) {
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Siempre redirige a la raíz
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt",
  },
});