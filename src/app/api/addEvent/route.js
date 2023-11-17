import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

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
  connectSql();
  const query = `INSERT INTO events (eName, eDate, eOrgEmail, fundedBy, fund, links, imageURI, Users_emailId) VALUES ('${name}', '${date}', '${organiser}', ${fundedBy}, ${fund}, '${link}', '${name}', '${organiser}')`;
  
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
