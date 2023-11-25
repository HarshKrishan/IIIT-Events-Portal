import { revalidatePath } from "next/cache";
import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";
import { createClient } from "@vercel/postgres";

export async function POST(req) {
  console.log("Entering deleteUser route");

  const data = await req.formData();
  //   console.log("data", data);

  const email = data.get("email");



  // for local sql
  // connectSql();
  // const query = `DELETE FROM users WHERE emailId = '${email}';`;

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
    const { res, fields } =
      await client.sql`DELETE FROM users WHERE emailId = ${email};`;

    return NextResponse.json({ result: res }, { status: 200 });
  } catch (e) {
    console.log(e);
  } finally {
    await client.end();
  }

  return NextResponse.json({ result: "Error deleting user..." }, { status: 200 });
}
