"use client";
import AddEvent from "@/components/AddEvent";
import TopNavbar from "@/components/Navbar";
import React, { useState, useEffect } from "react";
import EventTableRow from "@/components/EventTableRow";
function Page() {
  const [visible, setVisible] = useState(false);

  

  const handleCLick = () => {
    setVisible(false);
  };
  
  const [events, setEvents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/getAllEvents")
      .then((res) => res.json())
      .then((json) => {
        setEvents(json.result);
      });
  },[]);



  return (
    <div>
      <TopNavbar>
        <div className="pt-5 px-16 w-full">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Events</h1>
            <button
              className="bg-teal-400 rounded-md p-1 hover:bg-teal-500"
              onClick={() => {
                setVisible(true);
              }}
            >
              Add Event
            </button>
          </div>
          <div className="mt-20 w-full flex justify-center ">
            <table className="table-auto border-4 border-slate-300 w-full">
              <thead>
                <tr>
                  <th className="border-4 border-slate-300">S NO.</th>
                  <th className="border-4 border-slate-300">Event Name</th>
                  <th className="border-4 border-slate-300">Date</th>
                  <th className="border-4 border-slate-300">Event Organiser</th>
                </tr>
              </thead>
              <tbody>
                

                {events.map((event, index) => (
                  
                  <EventTableRow
                    key={event.eventId}
                    id={index + 1}
                    name={event.eName}
                    date={(()=>{
                      const date = new Date(event.eDate);
                      return date.toISOString().split('T')[0];
                    })()}
                    organiser={event.eOrgEmail}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <AddEvent visible={visible} handleCLick={handleCLick} />
      </TopNavbar>
    </div>
  );
}

export default Page;
