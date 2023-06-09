import userModel from "models/userModel";
import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import decryptPassword from "src/encryption/decrypt";
import dbConnect from "src/lib/dbConnect";

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    Credentials({
      async authorize(credentials, req) {
        dbConnect();
        const { email, password } = credentials;
        try {
          let user = await userModel.findOne({ email: email });
          if (user) {
            let authenucatedUser = await decryptPassword(
              password,
              user.password
            );
            return { name: user.name, email: email };
          }
        } catch (err) {
          throw err;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      dbConnect();
      const data = await userModel.findOneAndUpdate(
        { email: user.email },
        { name: user.name, email: user.email },
        { upsert: true }
      );

      return true; // Continue with the sign-in process
    },
  },
});
