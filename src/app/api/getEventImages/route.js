import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

export async function POST(req) {
    // console.log("entering getAllEvents route");


    const {eventId} = await req.json();


    //for local sql
    // connectSql();
    // const query = `select * from images where Events_eventId = '${eventId}'`;
    // const images = await connection.promise().query(query).then(([data,fields]) => {
    //     // console.log(data);
    //     return data;
        
    // }).catch((err) => {
    //     console.log(err);
    // }
    // );

    // return NextResponse.json(
    //     {result:images},
    //     {status:200},
    // );

    //for vercel sql
    const client = createClient();
    await client.connect();

    try {
        const { rows, fields } = await client.sql`select * from images where Events_eventId = ${eventId};`;
        return NextResponse.json({ result: rows }, { status: 200 });

    } catch (error) {
        console.log("error connecting sql", error)
    }
    finally {
        await client.end();
    }

    return NextResponse.json({ result: "Error getting images" }, { status: 200 });
}