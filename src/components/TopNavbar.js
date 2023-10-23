import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

function TopNavbar() {
  return (
    <>
      <div className="flex ">
        <div className="w-20  flex-col">
          <div className="bg-blue-300 h-20 p-3 border-white border-b-2 border-r-2">
            <h1 className="text-2xl font-bold my-2 mb-20 text-white">IIITD</h1>
          </div>
          <div className="p-3 bg-slate-600 h-screen">
            <Image
              className="my-3 ml-1"
              src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
              width={40}
              height={40}
              alt="user"
            />
            <div className="my-10  rounded-md bg-teal-300 w-fit h-fit p-4">
              <Image
                className=""
                src="https://img.icons8.com/external-kmg-design-basic-outline-kmg-design/32/external-dashboard-ui-essential-kmg-design-basic-outline-kmg-design.png"
                width={34}
                height={34}
                alt="dashboard"
              />
            </div>

            <Image
              className="my-10 mr-2"
              src="https://img.icons8.com/pastel-glyph/64/user-settings.png"
              width={64}
              height={64}
              alt="employee"
            />
            <div>
            <Link href={"/"}>
              <Image
                className="bottom-0 absolute mb-10 ml-1"
                src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/24/external-logout-social-media-interface-anggara-basic-outline-anggara-putra.png"
                width={34}
                height={34}
                alt="logout"
              />
              </Link>
            </div>
          </div>
        </div>
        <div className="w-screen">
          <div className="flex justify-between p-5 h-20 bg-blue-300">
            <Image
              src="https://img.icons8.com/ios-glyphs/30/000000/menu--v1.png"
              width={30}
              height={30}
              alt="menu"
            />
            <div className="flex space-x-5">
              <Image
                src="https://img.icons8.com/ios/50/user-male-circle--v1.png"
                width={36}
                height={20}
                alt="user"
              />
              <h1 className="text-xl">Welcome Admin</h1>
            </div>
          </div>
          <div className="pt-5 px-16 w-full">
            <h1 className="text-xl">Events</h1>
            <div className="mt-20 w-full flex justify-center ">
              <table class="table-auto border border-slate-300 w-full">
                <thead>
                  <tr>
                    <th className="border border-slate-300">S NO.</th>
                    <th className="border border-slate-300">Event Name</th>
                    <th className="border border-slate-300">Date</th>
                    <th className="border border-slate-300">Event Organiser</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-300">1.</td>
                    <td className="border border-slate-300">Pitch Cafe</td>
                    <td className="border border-slate-300">22-10-2023</td>
                    <td className="border border-slate-300">E-Cell</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 bg-teal-300">2.</td>
                    <td className="border border-slate-300 bg-teal-300">
                      Pitch Cafe
                    </td>
                    <td className="border border-slate-300 bg-teal-300">
                      22-10-2023
                    </td>
                    <td className="border border-slate-300 bg-teal-300">
                      E-Cell
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300">3.</td>
                    <td className="border border-slate-300">Pitch Cafe</td>
                    <td className="border border-slate-300">22-10-2023</td>
                    <td className="border border-slate-300">E-Cell</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-300 bg-teal-300">4.</td>
                    <td className="border border-slate-300 bg-teal-300">
                      Pitch Cafe
                    </td>
                    <td className="border border-slate-300 bg-teal-300">
                      22-10-2023
                    </td>
                    <td className="border border-slate-300 bg-teal-300">
                      E-Cell
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default TopNavbar