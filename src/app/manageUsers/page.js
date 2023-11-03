"use client"
import TopNavbar from '@/components/Navbar'
import React,{useState} from 'react'
import AddUser from '@/components/AddUser'
import UserTableRow from '@/components/UserTableRow'
function Page() {
  const [visible, setVisible] = useState(false);
  const handleCLick = () => {
    setVisible(false);
  };

  const users = [
    {
      id: 1,
      name: "Ankit",
      role: "Admin",
      email: "ankit@gmail.com",
      status: "Active",
    },
    {
      id: 2,
      name: "Ankit2",
      role: "Co-Admin",
      email: "ankit2@gmail.com",
      status: "Not-Active",
    },
  ];

  return (
    <div>
      <TopNavbar>
        <div className="pt-5 px-16 w-full">
          <div className="flex justify-between">
            <h1 className="text-xl font-bold">Users</h1>
            <button
              className="bg-teal-400 rounded-md p-1 hover:bg-teal-500"
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
              
              {users.map((user) => (
                <UserTableRow
                  key={user.id}
                  id={user.id}
                  name={user.name}
                  role={user.role}
                  email={user.email}
                  status={user.status}
                />
              ))}
                
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