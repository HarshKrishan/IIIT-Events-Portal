"use client"
import TopNavbar from '@/components/Navbar'
import React,{useState} from 'react'
import AddUser from '@/components/AddUser'

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
            <h1 className="text-xl font-bold">Users</h1>
            <button
              className="bg-teal-400 rounded-md p-1"
              onClick={() => {
                setVisible(true);
              }}
            >
              Add User
            </button>
          </div>
          <div className="mt-20 w-full flex justify-center ">
            <table className="table-auto border-4 border-slate-300 w-full">
              <thead>
                <tr>
                  <th className="border-4 border-slate-300">S NO.</th>
                  <th className="border-4 border-slate-300">Name</th>
                  <th className="border-4 border-slate-300">Role</th>
                  <th className="border-4 border-slate-300">Email</th>
                  <th className="border-4 border-slate-300">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border-r-4 border-slate-300">1.</td>
                  <td className="border-r-4 border-slate-300">Ankit</td>
                  <td className="border-r-4 border-slate-300">Admin</td>
                  <td className="border-r-4 border-slate-300">
                    ankit@gmail.com
                  </td>
                  <td className="border-r-4 border-slate-300">Active</td>
                </tr>
                <tr>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    2.
                  </td>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    Ankit2
                  </td>
                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    Co-Admin
                  </td>

                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    ankit2@gmail.com
                  </td>

                  <td className="border-r-4 border-slate-300 bg-teal-300">
                    Not-Active
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <AddUser visible={visible} handleCLick={handleCLick} />
      </TopNavbar>
    </div>
  );
}

export default Page