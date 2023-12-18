// import NextAuth from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";
// import { authConfig } from "./tauthConfig";
// import { connecDB } from "./lib/connection";
// import UserModel from "./lib/models/user.model";
// import bcrypt from "bcryptjs";

// const login = async (credentials: any) => {
//   try {
//     connecDB();

//     const user = await UserModel.findOne({ username: "bruce" });
//     if (!user) throw null;
//     return user;
//   } catch (error) {
//     console.log(error);
//     throw new Error("Failed to Login");
//   }
// };

// export const { signIn, signOut, auth } = NextAuth({
//   ...authConfig,
//   providers: [
//     CredentialsProvider({
//       name: "Credentials",
//       credentials: {},
//       async authorize(credentials) {
//         try {
//           const user = await login(credentials);
//           return user;
//         } catch (error) {
//           return { error: "wrong" };
//         }
//       },
//     }),
//   ],
//   callbacks: {
//     async jwt({ token, user }: any) {
//       if (user) {
//         token.username = user.username;
//         token.img = user.img;
//       }
//       return token;
//     },
//     async session({ session, token }: any) {
//       if (token) {
//         session.user.username = token.username;
//         session.user.img = token.img;
//       }
//       return session;
//     },
//     async redirect({ url, baseUrl }) {
//       console.log({ url, baseUrl });
//       return baseUrl + "/dashboard";
//     },
//   },
// });
