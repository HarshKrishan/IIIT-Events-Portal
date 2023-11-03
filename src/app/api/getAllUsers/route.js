import connectSql,{connection} from "../connectDb/route";
import { NextResponse } from "next/server";

export async function GET(req) {
    // console.log("entering getAllUsers route");
    connectSql();
   
    
    const rows = await connection.promise().query("SELECT * FROM users").then(([data,fields]) => {
        // console.log(data);
        return data;
        
    }).catch((err) => {
        console.log(err);
    });
    
    return NextResponse.json(
        {result:rows},
        {status:200},
    );

}