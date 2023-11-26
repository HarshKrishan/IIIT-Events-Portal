"use client";
import AddEvent from "@/components/AddEvent";
import TopNavbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import EventTableRow from "@/components/EventTableRow";
import ShowEvent from "@/components/ShowEvent";
function Page() {
  const [visible, setVisible] = useState(false);

  const [visibleShowEvent, setVisibleShowEvent] = useState(false);

  const [eventDataToShow, setEventDataToShow] = useState({
    eventId:"",
    name: "",
    date: "",
    description: "",
    organiser: "",
    link: "",
    image: [],
    fundedBy: "",
    fund: "",
  });

  const handleCLickShowEvent = () => {
    setEventDataToShow({eventId:"",name:"",date:"",description:"",organiser:"",link:"",image:"",fundedBy:"",fund:""});
    setVisibleShowEvent(false);
  };

  const markShowEventTrue = ({eventId,name,date,description,organiser,link,image,fundedBy,fund}) => {
    setEventDataToShow({eventId,name,date,description,organiser,link,image,fundedBy,fund});
    setVisibleShowEvent(true);
  };

  const handleCLick = () => {
    setVisible(false);
  };
  
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
  },[visible]);

  console.log("events",events);

  return (
    <div>
      <TopNavbar>
        <div className="pt-5 px-16 w-full">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Events</h1>
            <button
              className="bg-teal-400 rounded-md p-2 hover:bg-teal-500"
              onClick={() => {
                setVisible(true);
              }}
            >
              Add Event
            </button>
          </div>
          <div className="mt-20 w-full flex justify-center overflow-y-auto">
            <table className="table-auto border-4 border-slate-300 w-full">
              <thead>
                <tr>
                  <th className="border-4 border-slate-300">S NO.</th>
                  <th className="border-4 border-slate-300">Event Name</th>
                  <th className="border-4 border-slate-300">Date</th>
                  <th className="border-4 border-slate-300">Event Organiser</th>
                  <th className="border-4 border-slate-300">View</th>
                  <th className="border-4 border-slate-300">Edit</th>
                </tr>
              </thead>
              <tbody>
                

                {events.map((event, index) => (
                  
                  <EventTableRow
                  //for local sql
                    // key={event.eventId}
                    // eventId={event.eventId}
                    // id={index + 1}
                    // name={event.eName}
                    // date={(()=>{
                      
                    //   const date = new Date(event.eDate);

                    
                    // return date.toISOString().split('T')[0];
                    // })()}
                    // organiser={event.eOrgEmail}
                    // fundedBy = {event.fundedBy}
                    // fund = {event.fund}
                    // link={event.links}
                    markShowEventTrue={markShowEventTrue}
                    setEventDataToShow={setEventDataToShow}


                    //for vercel sql
                    key={event.eventid}
                    eventId={event.eventid}
                    id={index + 1}
                    name={event.ename}
                    date={(()=>{
                      
                      const date = new Date(event.edate);
                      
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
                    })()}
                    organiser={event.eorgemail}
                    fundedBy = {event.fundedby}
                    fund = {event.fund}
                    link={event.links}


                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <AddEvent visible={visible} handleCLick={handleCLick} />
        <ShowEvent visible={visibleShowEvent} handleCLick={handleCLickShowEvent} data={eventDataToShow}/>
      </TopNavbar>
    </div>
  );
}

export default Page;
