import NextAuth, { AuthOptions } from "next-auth";
import  {User,Admin}  from "@/mongoose/schema"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { ensureDbConnected } from "@/lib/dbConnect";
import  CredentialsProvider from "next-auth/providers/credentials";
import { Provider } from "next-auth/providers/index";

  

export const authOptions :AuthOptions = {
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
                await ensureDbConnected()
                if (!credentials) {
                    return null;
                }
                const username = credentials.username;
                const password = credentials.password;
                // Add logic here to look up the user from the credentials supplied
                const admin:any = await Admin.findOne({ username });

                if (!admin) {
                    throw new Error('Admin doesnt exist');
                    
                } else {
                    //TODO:: Make this safer, encrypt passwords
                    if (admin.password !== password || admin.username !== username) {
                        throw new Error('Invalid credentials');
                    }
                    // User is authenticated
                    return {
                        id: admin._id,
                        email: admin.username
                    }
                }
            }
        }),CredentialsProvider({ id: "user",
        name: "user Credentials",
        type: "credentials",
        credentials: {
            username: { label: "Username", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
        }, async authorize(credentials, req) {
            await ensureDbConnected()
            if (!credentials) {
                return null;
            }
            const username = credentials.username;
            const password = credentials.password;
            // Add logic here to look up the user from the credentials supplied
            const user:any = await User.findOne({ username });

            if (!user) {
                throw new Error('Admin doesnt exist');
                
            } else {
                //TODO:: Make this safer, encrypt passwords
                if (user.password !== password || user.username !== username) {
                    throw new Error('Invalid credentials');
                }

                // User is authenticated
                return {
                    id: user._id,
                    email: user.username,
                }
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