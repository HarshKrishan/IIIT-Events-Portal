"use client";
import Image from 'next/image'
import Link from "next/link";
import { useDispatch } from 'react-redux';
import { setRole } from '@/store/slices/userSlice';
import {useRouter} from 'next/navigation';
import { useState } from 'react';
import connectVercelDb from './api/connectVercelDb/route';
// import connectSql from './api/connectDb/router';
export default function Home() {
  const dispatch = useDispatch();
  const router = useRouter();
  const [user,setUser]= useState("admin");

  // connectSql();
  const handleLogin = () => {
    dispatch(setRole(user));
    router.push('/dashboardAdmin')

  }
  return (
    <div className="w-screen">
      <div className="flex justify-center items-center h-screen main"></div>
      <div className="absolute z-10 top-0 p-2">
        <Image src="/logo.jpg" width={150} height={150} alt="logo" />
      </div>
      <div className="flex bg-black justify-center items-center absolute z-10 top-1/3 left-1/3 w-1/3 bg-opacity-40 rounded-lg pb-10">
        <div className="  flex flex-col rounded-xl w-full items-center ">
          <h1 className="text-center font-bold text-4xl  text-white mt-4 mb-6">
            Log In
          </h1>

          <input
            className="m-2 rounded-md p-1 w-3/5"
            type="text"
            placeholder="Username"
            onChange={(e) => setUser(e.target.value)}
          />
          <input
            className="m-2 rounded-md p-1 w-3/5"
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-center w-3/5 my-3">
            
              <button
                // href="/dashboardAdmin"
                onClick={handleLogin}
                className="text-black bg-teal-400 rounded-md p-1 w-1/3 text-center"
              >
                Login
              </button>
          </div>
          <div className="w-3/5 flex justify-center">
            <button className="text-teal-400">Forgot Password?</button>
          </div>
        </div>
      </div>
    </div>
  );
}
