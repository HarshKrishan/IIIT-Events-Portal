import { revalidatePath } from "next/cache";
import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

export async function POST(req) {
  console.log("Entering deleteEvent route");

  const data = await req.formData();
//   console.log("data", data);

  const id = data.get("eventId");
  

  // local database
  // connectSql();
  // const query = `DELETE FROM events WHERE eventId = '${id}';`;

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

  // vercel
  const client = createClient()
  await client.connect()

  try {
    const {res, fields} = await client.sql`DELETE FROM events WHERE eventId = ${id};`

    return NextResponse.json({ result: res }, { status: 200 });
  }
  catch(e) {
    console.log("error deleting event", e)
  }
    
  return NextResponse.json({ result: "Error deleting event" }, { status: 500 });
}
