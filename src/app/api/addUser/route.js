import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("entering addUser route");
  const[name, role, email, status] = req.body;
  console.log(name, role, email, status);

  connectSql();
    const query = `INSERT INTO users (fName, role, emailId, status) VALUES ('${name}', '${role}', '${email}', '${status}')`;
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

  return NextResponse.json({ result: res }, { status: 200 });
}
