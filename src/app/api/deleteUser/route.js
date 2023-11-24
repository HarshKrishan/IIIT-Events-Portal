import { revalidatePath } from "next/cache";
import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Entering deleteUser route");

  const data = await req.formData();
  //   console.log("data", data);

  const email = data.get("email");

  connectSql();
  const query = `DELETE FROM users WHERE emailId = '${email}';`;

  const res = await connection
    .promise()
    .query(query)
    .then(([data, fields]) => {
      // console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
    revalidatePath("/manageUsers");  // added this line to revalidate the manageUsers page
  return NextResponse.json({ result: res }, { status: 200 });
}
