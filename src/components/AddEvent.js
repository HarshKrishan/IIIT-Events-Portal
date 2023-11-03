import React from 'react'

const AddEvent = ({ visible, handleCLick }) => {
  if (!visible) return null;
  // bg-black  bg-opacity-20 backdrop-blur-sm
  return (
    <div className="fixed inset-x-72 inset-y-5 bg-slate-200">
      <div className=" flex justify-center items-center">
        <div className=" w-4/5 flex-col items-center">
          <h1 className="text-black text-2xl font-bold my-5 ">Add Event</h1>

          <div>
            <div className="flex flex-col items-center">
              <label className="text-black w-3/5">Event Name</label>
              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="text"
                placeholder="Event Name"
              />

              <label className="text-black w-3/5">Event Date</label>

              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="date"
                placeholder="Event Date"
              />
              <label className="text-black w-3/5">Event Time</label>

              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="time"
                placeholder="Event Time"
              />
              <label className="text-black w-3/5">Event Description</label>

              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="text"
                placeholder="Event Description"
              />
              <label className="text-black w-3/5">Event Organiser</label>

              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="text"
                placeholder="Event Organiser"
              />
              <label className="text-black w-3/5">Event Link</label>

              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="text"
                placeholder="Event Link"
              />

              <label className="text-black w-3/5">Event Image</label>

              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="file"
                placeholder="Event Image"
                multiple={true}
              />
              <div className='flex justify-between w-3/5'>
                <button
                  className="text-black bg-teal-400 rounded-md p-1 w-1/3 hover:bg-teal-500"
                  onClick={() => {
                    handleCLick();
                  }}
                >
                  Add Event
                </button>
                <button 
                className="text-black bg-teal-400 rounded-md p-1 w-1/3 hover:bg-teal-500"
                onClick={() => {
                  handleCLick();
                }}
              >
                Cancel
              </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddEvent