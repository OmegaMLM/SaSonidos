import NextAuth from "next-auth";
import Google from "next-auth/providers/google";

const allowedEmails = [
    "mateomarchesin@iresm.edu.ar",
    "mateo.marchesinlujan@gmail.com"
];


export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [Google],
  callbacks: {
    async signIn({ user }) {
      if (!user.email) return false;

      // ✔ Solo permitir si el email está en la lista blanca
      if (!allowedEmails.includes(user.email)) {
        return false;
      }

      return true;
    },
    async session({ session }) {
      return session;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
  },
  session: {
    strategy: "jwt",
  },
});