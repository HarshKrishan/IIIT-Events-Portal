import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

import { writeFile,mkdir } from "fs/promises";
import { createClient } from "@vercel/postgres";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";
export const revalidate = 0;
export const cache = "no-store";
export async function POST(req, res) {
  console.log("Entering addEvent route");

  const data = await req.formData();
  console.log("data", data);

  const images = data.getAll("image[]");



//   console.log("images", images);

  //for local sql
  // connectSql();
  // // Process each image
  // for (const image of images) {
  //   const byteData = await image.arrayBuffer();
  //   const buffer = Buffer.from(byteData);

  //   // Adjust the path or filename as needed
  //   const currtime = new Date().getTime();
  //   const eventName = data.get("eventName");
  //   await mkdir(`./public/uploads/${eventName}`, { recursive: true });
  //   const path = `./public/uploads/${eventName}/${currtime+".jpg"}`;

  //   // Write the file
  //   await writeFile(path, buffer);
  //   const query = `INSERT INTO images (imageId,Events_eventId) VALUES (${currtime}, ${parseInt(data.get("eventId"))})`;
  //   const res = await connection
  //     .promise()
  //     .query(query)
  //     .then(([data, fields]) => {
  //       // console.log(data);
  //       return data;
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }



  //old code
  // connectSql();
  //   const query = `INSERT INTO images (imageId, imageData, Events_eventId) VALUES (${imageId}, load_file(${FR}), ${eventId})`;
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


  // return NextResponse.json({ result: res }, { status: 200 });



  //for vercel sql
  const client = createClient();
  await client.connect();

  try {
    for (const image of images) {
      const byteData = await image.arrayBuffer();
      const buffer = Buffer.from(byteData);

      // Adjust the path or filename as needed
      const currtime = new Date().getTime();
      const eventName = data.get("eventName");
      await mkdir(`./public/uploads/${eventName}`, { recursive: true });
      const path = `./public/uploads/${eventName}/${currtime + ".jpg"}`;

      // Write the file
      await writeFile(path, buffer);
      const { rows, fields } =
        await client.sql`INSERT INTO images (imageid,events_eventid) VALUES (${currtime}, ${parseInt(
          data.get("eventId")
        )})`;
    }

    return NextResponse.json(
      { result: "successfuly uploaded images" },
      { status: 200 }
    );
  } catch (error) {
    console.log("error connecting sql", error);
  } finally {
    await client.end();
  }
  revalidatePath("https://iiit-events-portal.vercel.app/dashboardAdmin");
  return NextResponse.json({ result: "Error uploading images" }, { status: 200 });
}
