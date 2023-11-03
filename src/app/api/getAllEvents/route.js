import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

export async function GET(req) {
    // console.log("entering getAllEvents route");
    connectSql();

    const events = await connection.promise().query("SELECT * FROM events").then(([data,fields]) => {
        // console.log(data);
        return data;
        
    }).catch((err) => {
        console.log(err);
    }
    );

    return NextResponse.json(
        {result:events},
        {status:200},
    );
}