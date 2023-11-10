"use client";
import React from "react";
import { useState } from "react";
const AddUser = ({ visible, handleCLick }) => {
  if (!visible) return null;
  // bg-black  bg-opacity-20 backdrop-blur-sm
  const [userName, setUserName] = useState("");
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("active");


  const handleSubmit=() => {
    const data = {
      userName: userName,
      role: role,
      email: email,
      status: status,
    };
    console.log(data);
    fetch("http://localhost:3000/api/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        console.log(response);
        handleCLick();
      })
      .then((json) => console.log(json));
  };
  return (
    <div className="fixed inset-x-72 inset-y-5 bg-slate-200">
      <div className=" flex justify-center items-center">
        <div className=" w-4/5 flex-col items-center">
          <h1 className="text-black text-2xl font-bold my-10">Add User</h1>

          <div>
            <div className="flex flex-col items-center gap-y-2">
              <label className="text-black w-3/5">User Name</label>
              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="text"
                placeholder="User Name"
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
              />

              <label className="text-black w-3/5">Role</label>

              <select className="m-2 rounded-md p-1 w-3/5"
              value={role}
              onChange={(e) => {
                setRole(e.target.value);
              }}
              >
                <option value="admin">Admin</option>
                <option value="co-admin">Co-Admin</option>
              </select>
              <label className="text-black w-3/5">Email</label>

              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="email"
                placeholder="xyz@gmail.com"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <label className="text-black w-3/5">Status</label>

              <select className="m-2 rounded-md p-1 w-3/5"
              value={status}
              onChange={(e) => {
                setStatus(e.target.value);
              }}
              >
                <option value="admin">Active</option>
                <option value="co-admin">Not-Active</option>
              </select>

              <div className="flex justify-between w-3/5 mt-3">
                <button
                  className="text-black bg-teal-400 rounded-md p-1 w-1/3 hover:bg-teal-500"
                  onClick={() => {
                    handleCLick();
                  }}
                >
                  Add User
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

export default AddUser;
