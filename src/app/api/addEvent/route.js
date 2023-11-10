import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("entering addEvent route");
    const [eName, eDate, eOrgEmail] = req.body;

    console.log(eName, eDate, eOrgEmail);
  connectSql();
    const query = `INSERT INTO events (eName, eDate, eOrgEmail) VALUES ('${eName}', '${eDate}', '${eOrgEmail}')`;
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
