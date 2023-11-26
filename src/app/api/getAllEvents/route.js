import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";
import { createClient } from "@vercel/postgres";

import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const cache = "no-store";
export async function GET(req) {
    console.log("entering getAllEvents route");

    //for local sql
    // connectSql();

    // const events = await connection.promise().query("SELECT * FROM events").then(([data,fields]) => {
    //     // console.log(data);
    //     return data;
        
    // }).catch((err) => {
    //     console.log(err);
    // }
    // );

    // return NextResponse.json(
    //     {result:events},
    //     {status:200},
    // );

    //for vercel sql
    const client = createClient();
    await client.connect();

    try {
        const { rows, fields } = await client.sql`select * from events;`;
        return NextResponse.json({ result: rows }, { status: 200 });

    } catch (error) {
        console.log("error connecting sql", error)
    }
    finally {
        await client.end();
    }
    revalidatePath("https://iiit-events-portal.vercel.app/dashboardAdmin");
    return NextResponse.json({ result: "Error getting events" }, { status: 200 });
}