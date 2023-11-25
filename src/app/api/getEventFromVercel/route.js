import { NextResponse } from "next/server";
import { createClient } from "@vercel/postgres";
export async function GET(req) {
    const client = createClient();
    await client.connect();
  try {
    const { rows, fields } = await client.sql`select * from events;`;
    return NextResponse.json({ result: rows }, { status: 200 });
  } catch (error) {
    console.log("error connecting sql", error);
  } finally {
    await client.end();
  }

  return NextResponse.json({ result: "Error getting events" }, { status: 200 });
}
