"use client";
import Image from "next/image";
import React, { useEffect } from "react";

import { useState } from "react";
const ShowEvent = ({ visible, handleCLick ,data}) => {
  // bg-black  bg-opacity-20 backdrop-blur-sm
  const[images,setImages] = useState([]);

  const [uploadedImages, setUploadedImages] = useState([]);

  

  

  const handleSubmit = () => {
    const formdata = new FormData();
    for (let i = 0; i < images.length; i++) {
      formdata.append("image[]", images[i]);
    }
    formdata.append("eventId", data.eventId);
    console.log("data_id",data.eventId);
    formdata.append("eventName", data.name);
    fetch("http://localhost:3000/api/addEventImages", {
      method: "POST",
      body: formdata,
    })
      .then((response) => {
        console.log(response);
      })
      .then((json) => console.log(json));
  }

  const handleDelete = () => {
    const formdata = new FormData();
    formdata.append("eventId", data.eventId);

    fetch("http://localhost:3000/api/deleteEvent", {
      method: "POST",
      body: formdata,
    })
      .then((response) => {
        console.log(response);
        handleCLick();
      })
      .then((json) => console.log(json));

    handleCLick();
    
  }

  useEffect(() => {

    //for local
    // fetch("http://localhost:3000/api/getEventImages", {
    //   method: "POST",
    //   body: JSON.stringify({
    //     eventId: data.eventId,
    //   }),
    // })
    //   .then(async (response) => await  response.json())
    //   .then((json) => {
    //     console.log(json);
    //     setUploadedImages(json);
    //   });

    //for vercel
    fetch("https://iiit-events-portal.vercel.app/api/getEventImages", {
      method: "POST",
      body: JSON.stringify({
        eventId: data.eventId,
      }),
    })
      .then(async (response) => await  response.json())
      .then((json) => {
        console.log(json);
        setUploadedImages(json);
      });
  }, [visible]);


  if (!visible) return null;
  return (
    <div className="fixed inset-x-72 inset-y-5 bg-slate-200">
      <div className=" flex justify-center items-center">
        <div className=" w-4/5 flex-col items-center">
          <div className="flex justify-between">
            <div>
              <h1 className="text-black text-2xl font-bold mt-10 mb-3">
                {data.name}
              </h1>
            </div>

            <div
              className="mt-10 mb-3 hover:cursor-pointer"
              onClick={() => {
                handleCLick();
              }}
            >
              <Image src="/close.png" height={25} width={30} alt="cross" />
            </div>
          </div>

          <div className="mt-5 overflow-auto">
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis
              officia quidem itaque officiis sapiente aliquid, perspiciatis,
              maxime nulla laboriosam quisquam tempore quod laudantium esse, aut
              id tempora quasi ullam culpa odit explicabo harum accusamus
              provident sit doloribus! At quo illum obcaecati praesentium magnam
              sed similique veniam placeat a, aut officia saepe molestiae
              dolorem facere neque officiis ut cum? Mollitia sunt, corporis
              inventore possimus accusamus earum labore nesciunt atque ipsam at
              similique aperiam. Error, quibusdam repellendus.
            </p>
            <ul className="mt-5">
              <li className="my-1 font-semibold">
                Event Date: <span className="font-normal">{data.date}</span>
              </li>

              <li className="my-1 font-semibold">
                Event Organiser:{" "}
                <span className="font-normal">{data.organiser}</span>
              </li>
              <li className="my-1 font-semibold">
                Event Funded By:{" "}
                <span className="font-normal">{data.fundedBy}</span>
              </li>
              <li className="my-1 font-semibold">
                Event Fund: <span className="font-normal">{data.fund}</span>
              </li>
              <li className="my-1 font-semibold">
                Event Link: <span className="font-normal">{data.link}</span>
              </li>
            </ul>
            <div className="flex gap-x-2 items-center mt-5">
              <h1 className=" font-bold text-xl">Event Images</h1>
              
               
                <input
                  className="m-2 rounded-md p-1 w-3/5"
                  type="file"
                  id="uploadFile"
                  placeholder="Event Image"
                  multiple={true}
                  onChange={async (e) => {
                    setImages(e.target.files );
                    await handleSubmit();
                  }}
                />
              
            </div>
          </div>
          <div className="flex justify-center items-center mt-5">
            <button
              className="bg-red-400 rounded-md p-1 hover:bg-red-500"
              onClick={() => {
                handleDelete();
              }}
            >
              Delete Event
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShowEvent;
