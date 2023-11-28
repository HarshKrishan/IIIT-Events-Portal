"use client"
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Home(){
    const [events, setEvents] = useState([]);

    useEffect(() => {
      //for local
      // fetch("http://localhost:3000/api/getAllEvents")
      //   .then((res) => res.json())
      //   .then((json) => {
      //     setEvents(json.result);
      //   });
      //for vercel
      fetch("https://iiit-events-portal.vercel.app/api/getAllEvents", {
        cache: "no-cache",
      })
        .then((res) => res.json())
        .then((json) => {
          setEvents(json.result);
        });
    }, []);
    // console.log("events", events);

    const getDate = (dte) => {
      const date = new Date(dte);

      const year = date.getFullYear();
      const month = date.toLocaleString("en-US", {
        month: "long",
      });
      const day = date.getDate();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const seconds = date.getSeconds();

      const formattedDate = `${month} ${day}, ${year}`;

      return formattedDate;
    };


    return (
      <div className="w-screen">
        <div className="flex justify-center items-center h-screen main"></div>
        <div className="absolute z-10 top-0 p-2">
          <Image src="/logo.jpg" width={150} height={150} alt="logo" />
        </div>
        <div className="absolute z-10 top-0 p-2 right-5">
          <Link href="/login">
            <button className='text-xl "text-black bg-teal-400 rounded-md px-3 py-2 text-center'>
              Login
            </button>
          </Link>
        </div>
        <div className="flex bg-white justify-center items-center absolute z-10 top-1/3 left-1/4 m-15 w-1/2 bg-opacity-60 rounded-lg">
          <div className="  flex flex-col rounded-xl w-full items-center ">
            <table className="table-auto border-4 border-slate-300 w-full overflow-auto">
              <thead>
                <tr>
                  <th className="border-4 border-black">S NO.</th>
                  <th className="border-4 border-black">Event Name</th>
                  <th className="border-4 border-black">Date</th>
                  <th className="border-4 border-black">Event Organiser</th>
                </tr>
              </thead>
              <tbody>
                {events.map((event, index) => (
                  <tr key={index + 1}>
                    <td className="border-4 border-black text-center">
                      {index + 1}
                    </td>
                    <td className="border-4 border-black text-center">
                      {event.ename}
                    </td>
                    <td className="border-4 border-black text-center">
                      {getDate(event.edate)}
                    </td>
                    <td className="border-4 border-black text-center">
                      {event.eorgemail}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );



}