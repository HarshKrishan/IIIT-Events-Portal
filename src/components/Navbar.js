"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { getSession, signOut} from "next-auth/react";

function TopNavbar({ children }) {
  const [show, setShow] = useState(false);
  const [logo, setLogo] = useState("");
  
  const user = useSelector((state) => state.user);
  const [currentUser,setCurrentUser] = useState({
    fname: "",
    lname: "",
    email: "",
    role: "",
    status: ""
  })
  const session = async ()=>{
    const curr = await getSession();
    // console.log(curr);
    const {fname,lname,email,role,status} = curr.user;
    setCurrentUser({
      fname: fname,
      lname: lname,
      email: email,
      role: role,
      status: status
    })
  }
  // console.log(currentUser)
  // console.log(session);
  useEffect(()=>{
    session();
  },[])
  
  return (
    <div className="h-screen">
      {" "}
      {/*added hscreen here*/}
      <div className="flex h-full">
        <div
          className={
            show ? "w-60 flex-col bg-slate-600" : "w-20 flex-col bg-slate-600"
          }
        >
          <div className="bg-teal-500 h-20 p-3 border-white border-b-2 border-r-2">
            <h1 className="text-2xl font-bold  text-white">IIITD</h1>
            <h1 className="text-2xl mb-2 text-white">{logo}</h1>
          </div>
          <div className="p-3">
            {" "}
            {/*added h-full here earlier it was h-screen*/}
            <div className="flex justify-start">
              <Image
                className="mt-3 mb-10 ml-1"
                src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                width={38}
                height={38}
                alt="user"
              />
              <h1 className="mt-5 ml-4 font-bold text-xl text-white">
                {show ? (currentUser.role === "admin" ? "Admin" : "Co-Admin") : ""}
              </h1>
            </div>
            <Link
              className={`flex justify-start overflow-hidden mb-10 hover:shadow-md hover:bg-slate-700 `}
              href="/dashboardAdmin"
            >
              {/* <div className="flex overflow-hidden mb-10 hover:shadow-md hover:bg-slate-700"> */}
              <Image
                className=" ml-3 py-2 flex-2"
                src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/external-dashboard-ui-essential-kmg-design-basic-outline-kmg-design.png"
                width={28}
                height={28}
                alt="dashboard"
                layout="fixed"
              />
              <h2 className=" ml-4 pl-1 mt-3 font-semibold text-xl text-white">
                Dashboard
              </h2>
              {/* </div> */}
            </Link>
            <div className="flex flex-col justify-start">
              {currentUser.role != "admin" ? null : (
                <div>
                  <Link
                    href="/manageUsers"
                    className={`flex overflow-hidden hover:shadow-md hover:bg-slate-700`}
                  >
                    {/* <div className="flex overflow-hidden hover:shadow-md hover:bg-slate-700"> */}
                    <Image
                      className=" mr-2"
                      src="https://img.icons8.com/pastel-glyph/64/user-settings.png"
                      width={48}
                      height={30}
                      alt="employee"
                      layout="fixed"
                    />
                    <h2 className=" ml-3 pl-1 font-semibold text-xl text-white">
                      Manage Users
                    </h2>
                    {/* </div> */}
                  </Link>
                </div>
              )}

              <div>
                <button onClick={()=>{
                  
                  signOut({callbackUrl: 'http://localhost:3000/login'});
                  
                }} className="">
                  <div className="bottom-0 absolute mb-10 ml-1 flex overflow-hidden hover:shadow-md hover:bg-slate-700 ">
                    {/* <div className="flex overflow-hidden hover:shadow-md hover:bg-slate-700"> */}
                    <Image
                      src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-logout-social-media-interface-anggara-basic-outline-anggara-putra.png"
                      width={34}
                      height={34}
                      alt="logout"
                    />
                    <h2 className="ml-5 pl-1 font-semibold text-xl text-white">
                      {show ? "Log out" : " "}
                    </h2>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-screen">
          <div className="flex justify-between p-5 h-20 bg-teal-500">
            <button
              onClick={() => {
                setShow(!show);
                if (show) {
                  setLogo("");
                } else {
                  setLogo("Events Portal");
                }
              }}
            >
              <Image
                src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"
                width={30}
                height={30}
                alt="menu"
              />
            </button>

            <div className="flex space-x-5">
              <Image
                src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                width={36}
                height={20}
                alt="user"
              />
              
                <h1 className="text-xl">{currentUser.fname+" "+currentUser.lname}</h1>
              
             
            </div>
          </div>
          <div className="">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;
