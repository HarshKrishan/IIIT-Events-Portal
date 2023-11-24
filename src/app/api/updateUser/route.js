import { revalidatePath } from "next/cache";
import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("entering addUser route");
  // console.log(req);
  const { firstName, lastName, password, role, email, status } =
    await req.json();

  console.log(
    "Got this....",
    firstName,
    lastName,
    password,
    role,
    email,
    status
  );
  connectSql();
  const query = `update users set fName='${firstName}',lName = '${lastName}', pwd='${password}',role= '${role}',status='${status}' where emailId='${email}'`;
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
    revalidatePath("manaegeUsers")
  return NextResponse.json({ result: res }, { status: 200 });
}
