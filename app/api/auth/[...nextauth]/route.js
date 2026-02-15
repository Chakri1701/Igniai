import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"
import { getDb } from "@/lib/db"
import { users } from "@/lib/db/schema"
import { eq } from "drizzle-orm"
import bcrypt from "bcryptjs"

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null
        }

        const db = getDb()

        const user = await db.select()
          .from(users)
          .where(eq(users.email, credentials.email))
          .limit(1)

        if (!user || user.length === 0) {
          return null
        }

        const isPasswordValid = await bcrypt.compare(
          credentials.password,
          user[0].password
        )

        if (!isPasswordValid) {
          return null
        }

        // Check if email is verified
        if (!user[0].emailVerified) {
          throw new Error('Please verify your email before logging in')
        }

        return {
          id: user[0].id,
          email: user[0].email,
          name: user[0].name,
        }
      }
    })
  ],
  session: {
    strategy: "jwt"
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id
      }
      return token
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id
      }
      return session
    }
  }
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST }
