"use client";
import React from "react";
import { useState } from "react";
const AddUser = ({ visible, handleCLick }) => {
  
  // bg-black  bg-opacity-20 backdrop-blur-sm
  const [firstName,setFirstName] = useState("");
  const [lastName,setLastName] = useState("");
  const [role, setRole] = useState("admin");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("active");
  const [password, setPassword] = useState("");

  if (!visible) return null;

  const handleSubmit=() => {
    const data = {
      firstName: firstName,
      lastName: lastName,
      password: password,
      role: role,
      email: email,
      status: status,
    };
    console.log(data);
    if (
      firstName === "" ||
      lastName === "" ||
      password === "" ||
      email === "" ||
      status === "" ||
      role === ""
    ) {
      alert("Please fill all the fields");
      return;
    }

    //for local
    // fetch("http://localhost:3000/api/addUser", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    //   headers: {
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => {
    //     console.log(response);
    //     handleCLick();
    //     setFirstName("");
    //     setLastName("");
    //     setPassword("");
    //     setEmail("");
    //     setStatus("active");
    //     setRole("admin");

    //   })
    //   .then((json) => console.log(json));


    //for vercel

    fetch("https://iiit-events-portal.vercel.app/api/addUser", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => {
        console.log(response);
        handleCLick();
        setFirstName("");
        setLastName("");
        setPassword("");
        setEmail("");
        setStatus("active");
        setRole("admin");

      })
      .then((json) => console.log(json));
  };
  return (
    <div className="fixed inset-x-72 inset-y-5 bg-slate-200">
      <div className=" flex justify-center items-center">
        <div className=" w-4/5 flex-col items-center">
          <h1 className="text-black text-2xl font-bold mt-10 mb-3">Add User</h1>

          <div>
            <div className="flex flex-col items-center gap-y-2">
              <label className="text-black w-3/5">First Name</label>
              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="text"
                placeholder="User Name"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
              />

              <label className="text-black w-3/5">Last Name</label>
              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="text"
                placeholder="User Name"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
              />

              <label className="text-black w-3/5">Role</label>

              <select
                className="m-2 rounded-md p-1 w-3/5"
                value={role}
                onChange={(e) => {
                  setRole(e.target.value);
                }}
              >
                <option value="admin">Admin</option>
                <option value="coadmin">Co-Admin</option>
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

              <label className="text-black w-3/5">Password</label>

              <input
                className="m-2 rounded-md p-1 w-3/5"
                type="email"
                placeholder="xyz@gmail.com"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <label className="text-black w-3/5">Status</label>

              <select
                className="m-2 rounded-md p-1 w-3/5"
                value={status}
                onChange={(e) => {
                  setStatus(e.target.value);
                }}
              >
                <option value="active">Active</option>
                <option value="inactive">Not-Active</option>
              </select>

              <div className="flex justify-between w-3/5 mt-3">
                <button
                  className="text-black bg-teal-400 rounded-md p-1 w-1/3 hover:bg-teal-500"
                  onClick={() => {
                    handleSubmit();
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
