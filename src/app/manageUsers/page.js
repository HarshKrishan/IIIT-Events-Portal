"use client"
import TopNavbar from '@/components/Navbar'
import React,{useState,useEffect} from 'react'
import AddUser from '@/components/AddUser'
import UserTableRow from '@/components/UserTableRow'
import UpdateUser from '@/components/UpdateUser'



function Page() {
  const [visible, setVisible] = useState(false);

  const [userDataToShow, setUserDataToShow] = useState({
    fName: "",
    lName: "",
    emailId: "",
    password: "",
    role: "",
    status: "",
  });

  const handleCLick = () => {
    setVisible(false);

  };

  const [updateUserVisible, setUpdateUserVisible] = useState(false);
  const handleUpdateUserCLick = () => {

    setUpdateUserVisible(false);
  };

  const markUpdateUserVisibleTrue = ({ name, lname, role, email, status }) => {
    setUserDataToShow({ fName: name, lName: lname, role: role, emailId: email, status: status });
    setUpdateUserVisible(true);
  };

  const [data,setData] = useState([]);
  
  useEffect(()=>{
    fetch('http://localhost:3000/api/getAllUsers')
    .then(res => res.json())
        .then(json =>
          
          // console.log(json),
          setData(json.result)
        )
  },[visible]);
  

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
                  <th className="border-4 border-slate-300 w-20">Modify</th>
                </tr>
              </thead>
              <tbody>
                {data.map((user, index) => (
                  <UserTableRow
                    key={index + 1}
                    id={index + 1}
                    name={user.fName}
                    lname={user.lName}
                    role={user.role}
                    email={user.emailId}
                    status={user.status}
                    markUpdateUserVisibleTrue={markUpdateUserVisibleTrue}
                    
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <AddUser visible={visible} handleCLick={handleCLick} />
        <UpdateUser visible={updateUserVisible} handleCLick={handleUpdateUserCLick} data={userDataToShow}/>
      </TopNavbar>
    </div>
  );
}

export default Page