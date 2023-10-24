
import Image from 'next/image'
import Link from "next/link";

export default function Home() {
  

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
          />
          <input
            className="m-2 rounded-md p-1 w-3/5"
            type="password"
            placeholder="Password"
          />
          <div className="flex justify-between w-3/5 my-3">
            
              <Link
                href="/dashboardAdmin"
                className="text-black bg-teal-400 rounded-md p-1 w-1/3 text-center"
              >
                Login
              </Link>
            
            <button className="text-black bg-teal-400 rounded-md p-1 w-1/3">
              SignUp
            </button>
          </div>
          <div className="w-3/5">
            <button className="text-teal-400">Forgot Password?</button>
          </div>
        </div>
      </div>
    </div>
  );
}
