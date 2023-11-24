import connectSql, { connection } from "../connectDb/route";
import { NextResponse } from "next/server";

import { writeFile,mkdir } from "fs/promises";

export async function POST(req, res) {
  console.log("Entering addEvent route");

  const data = await req.formData();
  console.log("data", data);

  const images = data.getAll("image[]");
//   console.log("images", images);
connectSql();
  // Process each image
  for (const image of images) {
    const byteData = await image.arrayBuffer();
    const buffer = Buffer.from(byteData);

    // Adjust the path or filename as needed
    const currtime = new Date().getTime();
    const eventName = data.get("eventName");
    await mkdir(`./public/uploads/${eventName}`, { recursive: true });
    const path = `./public/uploads/${eventName}/${currtime+".jpg"}`;

    // Write the file
    await writeFile(path, buffer);
    const query = `INSERT INTO images (imageId,Events_eventId) VALUES (${currtime}, ${parseInt(data.get("eventId"))})`;
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
  }


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

  return NextResponse.json({ result: res }, { status: 200 });
}
