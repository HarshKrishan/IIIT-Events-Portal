import connectSql,{connection} from "../connectDb/route";
import { NextResponse } from "next/server";

export async function GET(req) {
    // console.log("entering getNumberOfUsers route");
    connectSql();
   
    
    const l = await connection.promise().query(
        "SELECT * FROM users")
        .then(([data,fields]) => {
        // console.log(data);
        return data;
        
    })
    .catch((err) => {
        console.log(err);
    });
    
    return NextResponse.json(
        {result:l.length},
        {status:200},
    );

}