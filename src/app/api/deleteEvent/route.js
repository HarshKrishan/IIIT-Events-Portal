import { revalidatePath } from "next/cache";
import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Entering deleteEvent route");

  const data = await req.formData();
//   console.log("data", data);

  const id = data.get("eventId");
  
  connectSql();
  const query = `DELETE FROM events WHERE eventId = '${id}';`;

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
