import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

export async function POST(req) {
    // console.log("entering getAllEvents route");
    const {eventId} = await req.json();
    connectSql();
    const query = `select * from images where Events_eventId = '${eventId}'`;
    const images = await connection.promise().query(query).then(([data,fields]) => {
        // console.log(data);
        return data;
        
    }).catch((err) => {
        console.log(err);
    }
    );

    return NextResponse.json(
        {result:images},
        {status:200},
    );
}