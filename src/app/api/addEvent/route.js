import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";
import { useEffect } from "react";

export async function POST(req) {
  console.log("entering addEvent route");
  const {imageId, eventId, imageUri} = await req.json();
  
  connectSql();
    const query = `INSERT INTO images (imageId, imageData, Events_eventId) VALUES (${imageId}, load_file(${FR}), ${eventId})`;
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
