import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";
import { createClient } from "@vercel/postgres";
export async function POST(req) {
  console.log("Entering addEvent route");

  const data = await req.formData();
  console.log("data", data);

  const name = data.get("name");
  const date = data.get("date");
  const organiser = data.get("organiser");
  const description = data.get("description");
  const link = data.get("link");
  const fundedBy = data.get("fundedBy");
  const fund = data.get("fund");
  const path = `./public/uploads/${name}`;



  //for local sql
  // connectSql();
  // const query = `INSERT INTO events (eName, eDate, eOrgEmail, fundedBy, fund, links, imageURI, Users_emailId) VALUES ('${name}', '${date}', '${organiser}', '${fundedBy}', '${fund}', '${link}', '${name}', '${organiser}')`;

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
    const { rows, fields } = await client.sql`INSERT INTO events (eName, eDate, eOrgEmail, fundedBy, fund, links, imageURI, Users_emailId) VALUES (${name}, ${date}, ${organiser}, ${fundedBy}, ${fund}, ${link}, ${name}, ${organiser})`;
    return NextResponse.json({ result: rows.result }, { status: 200 });

  }
  catch (error) {
    console.log("error connecting sql", error)
  }

  
  return NextResponse.json({ result: res }, { status: 200 });
}
