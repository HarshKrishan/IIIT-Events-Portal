"use client";
import AddEvent from "@/components/AddEvent";
import TopNavbar from "@/components/Navbar";
import React, { useState } from "react";
import EventTableRow from "@/components/EventTableRow";
function Page() {
  const [visible, setVisible] = useState(false);

  const events = [
    {
      id: 1,
      name: "Pitch Cafe",
      date: "22-10-2023",
      organiser: "E-Cell",
    },
    {
      id: 2,
      name: "Pitch Cafe",
      date: "22-10-2023",
      organiser: "E-Cell",
    },
    {
      id: 3,
      name: "Pitch Cafe",
      date: "22-10-2023",
      organiser: "E-Cell",
    },
    {
      id: 4,
      name: "Pitch Cafe",
      date: "22-10-2023",
      organiser: "E-Cell",
    },
    {
      id: 5,
      name: "Pitch Cafe",
      date: "25-10-2023",
      organiser: "E-Cell",
    },
  ];

  const handleCLick = () => {
    setVisible(false);
  };
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
                

                {events.map((event) => (
                  <EventTableRow
                    key={event.id}
                    id={event.id}
                    name={event.name}
                    date={event.date}
                    organiser={event.organiser}
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
