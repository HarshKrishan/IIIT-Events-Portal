import NextAuth from "next-auth";
import CrediantialsProvider from "next-auth/providers/credentials";
import { createClient } from "@vercel/postgres";

const authOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CrediantialsProvider({
      name: "credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials, req) {

        //for local sql
        console.log(credentials)
        // connectSql();
        // const rows = await connection
        //   .promise()
        //   .query(`SELECT * FROM users WHERE emailId='${credentials.email}'`)
        //   .then(([data, fields]) => {
        //     // console.log(data);
        //     return data;
        //   })
        //   .catch((err) => {
        //     console.log(err);
        //   });
        // console.log(rows);
        // const user = rows[0];
        // // console.log(user)
        // if (user && user.pwd === credentials.password) {
        //   // console.log("user found")

        //   return {
        //     fname: user.fName,
        //     lname: user.lName,
        //     email: user.emailId,
        //     role: user.role,
        //     status: user.status,
        //   };
        // }
        // return null;

        //for vercel sql

        try {

          const client = createClient();
          await client.connect();

          const {rows,fields} = await client.sql`SELECT * FROM users WHERE emailid=${credentials.email};`;

          // const response =
          //   await sql`SELECT * FROM users WHERE emailid = '${credentials.email}'`;
          const user = rows[0];
          console.log(user)
          if (user && user.pwd === credentials.password) {
            console.log("user found");

            return {
              fname: user.fname,
              lname: user.lname,
              email: user.emailid,
              role: user.role,
              status: user.status,
            };
          }
          return null;
          
        } catch (error) {
          console.log(error,"authentication error")
          return null;
        }
        
      },
    }),
  ],
  callbacks: {
    async jwt({token, user, session}) {
    //   console.log(user);
      //passing user info to token
      if (user) {
        return {
          ...token,
          user: user,
        };
      }
      return token;
    },
    async session({session, token, user}) {
      //   session.user = token.user;
      return {
        ...session,
        user: token.user,
      };
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
