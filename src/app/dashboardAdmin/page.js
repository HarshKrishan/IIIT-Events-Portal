"use client";
import AddEvent from "@/components/AddEvent";
import TopNavbar from "@/components/Navbar";
import React, { useState } from "react";

function Page() {
  const [visible, setVisible] = useState(false);
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
              className="bg-teal-400 rounded-md p-1"
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
                <tr>
                  <td className="border-r-4 border-slate-300">1.</td>
                  <td className="border-r-4 border-slate-300">Pitch Cafe</td>
                  <td className="border-r-4 border-slate-300">22-10-2023</td>
                  <td className="border-r-4 border-slate-300">E-Cell</td>
                </tr>
                <tr>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    2.
                  </td>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    Pitch Cafe
                  </td>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    22-10-2023
                  </td>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    E-Cell
                  </td>
                </tr>
                <tr>
                  <td className="border-r-4 border-slate-300">3.</td>
                  <td className="border-r-4 border-slate-300">Pitch Cafe</td>
                  <td className="border-r-4 border-slate-300">22-10-2023</td>
                  <td className="border-r-4 border-slate-300">E-Cell</td>
                </tr>
                <tr>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    4.
                  </td>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    Pitch Cafe
                  </td>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    22-10-2023
                  </td>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    E-Cell
                  </td>
                </tr>
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
