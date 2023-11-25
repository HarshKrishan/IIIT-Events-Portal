// import { revalidatePath } from "next/cache";
// import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";
import { createClient } from '@vercel/postgres'

export async function POST(req) {
  console.log("entering addUser route");
  // console.log(req);
  const {firstName,lastName,password, role, email, status} = await req.json();



  //for local sql
  // console.log("Got this....",firstName,lastName,password, role, email, status);
  // connectSql();
  //   const query = `INSERT INTO users (fName,lname,pwd, role, emailId, status) VALUES ('${firstName}','${lastName}','${password}', '${role}', '${email}', '${status}')`;
  // const res = await connection
  //   .promise()
  //   .query(query)
  //   .then(([data, fields]) => {
  //     // console.log(data);
  //     return data;
  //   })
  //   .catch((err) => {
  //     console.log(err);
  //   });

  


  //for vercel sql
  const client = createClient();
  await client.connect();

  try {
    const {res, fields} = await client.sql`INSERT INTO users (fName,lname,pwd, role, emailId, status) VALUES (${firstName},${lastName},${password}, ${role}, ${email}, ${status})`;

    return NextResponse.json({ result: res }, { status: 200 });
  }
  catch(e) {
    console.log("error adding user", e);
  }
  
  return NextResponse.json({ result: "Error adding User..." }, { status: 500 });
}


