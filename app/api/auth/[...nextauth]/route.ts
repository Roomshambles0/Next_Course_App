import NextAuth, { AuthOptions } from "next-auth";
import bcrypt from "bcrypt"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import  CredentialsProvider from "next-auth/providers/credentials";
import { Provider } from "next-auth/providers/index";
import { Pclient } from "@/lib/prismadb";
import { Role } from "@prisma/client";
import { PrismaAdapter } from "@auth/prisma-adapter"
  

export const authOptions :AuthOptions = {
    adapter: PrismaAdapter(Pclient),
    providers:[
        GithubProvider({
          clientId: process.env.GITHUB_ID as string,
          clientSecret: process.env.GITHUB_SECRET as string
        }),
        GoogleProvider({
          clientId: process.env.GOOGLE_CLIENT_ID as string,
          clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),  CredentialsProvider({
            id: "admin",
            name: "admin Credentials",
            type: "credentials",
            credentials: {
                username: { label: "Username", type: "text" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials, req) {
                
                if (!credentials) {
                    return null;
                }
                const username = credentials.username;
                const password = credentials.password;
                // Add logic here to look up the user from the credentials supplied
                const hashedpassword = await bcrypt.hash(password, 12);
                const admin = await Pclient.admin.findUnique({
                    where:{
                        email: username
                    }
                })

                if (!admin || admin.hashedpassword) {
                    throw new Error('Admin doesnt exist');
                    
                } else {
                    //TODO:: Make this safer, encrypt passwords
                    if (admin.hashedpassword !== hashedpassword || admin.email !== username) {
                        throw new Error('Invalid credentials');
                    }

                const role =  Role.ADMIN;
                const user = await Pclient.user.findUnique({
                where:{
                    email:username,
                    role
                }
                })
                    return user
                }
            }
        }),CredentialsProvider({ id: "user",
        name: "user Credentials",
        type: "credentials",
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
        }, async authorize(credentials, req) {
            if (!credentials) {
                return null;
            }
            const username = credentials.username;
            const password = credentials.password;
            // Add logic here to look up the user from the credentials supplied
            const hashedpassword = await bcrypt.hash(password, 12);
            const student =  await Pclient.student.findUnique({
              where:{  
                email:username
            }
            })
            if (!student) {
                throw new Error('student doesnt exist');
                
            } else {
                //TODO:: Make this safer, encrypt passwords
                if (student.hashedpassword !== hashedpassword || student.email !== username) {
                    throw new Error('Invalid credentials');
                }

                // User is authenticated
                const role =  Role.USER;
                const user = await Pclient.user.findUnique({
                where:{
                    email:username,
                    role
                }
                })
                    return user
            }
        }}),
    ] as Provider[],
    secret: process.env.NEXTAUTH_SECRET,
    session: {
        strategy: "jwt",
        maxAge: 30 * 24 * 60 * 60, // 30 days
    }
}

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };