import { revalidatePath } from "next/cache";
import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";
import { createClient } from "@vercel/postgres";
export async function POST(req) {
  console.log("entering addUser route");
  // console.log(req);
  const { firstName, lastName, password, role, email, status } =
    await req.json();

  // console.log(
  //   "Got this....",
  //   firstName,
  //   lastName,
  //   password,
  //   role,
  //   email,
  //   status
  // );


  //for local sql
  // connectSql();
  // const query = `update users set fName='${firstName}',lName = '${lastName}', pwd='${password}',role= '${role}',status='${status}' where emailId='${email}'`;
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
  //   revalidatePath("manaegeUsers")
  // return NextResponse.json({ result: res }, { status: 200 });



  //for vercel sql

  const client = createClient();
  await client.connect();

  try {
    const { res, fields } =
      await client.sql`update users set fname=${firstName},lname = ${lastName}, pwd=${password},role= ${role},status=${status} where emailid=${email}`;

    return NextResponse.json({ result: res }, { status: 200 });
  } catch (e) {
    console.log("error updating user", e);
  } finally {
    await client.end();
  }

  return NextResponse.json({ result: "Error updating User..." }, { status: 500 });

}
