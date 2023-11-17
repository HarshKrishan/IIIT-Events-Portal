"use client";
import React,{useState} from 'react'
import Image from 'next/image';
import UpdateUser from './UpdateUser';
function UserTableRow(props) {
  const { id, name,lname, role, email, status } = props;
  const oddClass = "border-r-4 border-slate-300 ";
  const evenClass = "border-r-4 border-slate-300 bg-teal-300 ";
  const [show, setShow] = useState(false);
  const handleCLick = () => {
    alert("hi!")
    setShow(false);
  };
  const {markUpdateUserVisibleTrue} = props;
  

  return (
    <>
    
    <tr key={id}>

      <td className={id % 2 === 0 ? evenClass : oddClass}>{id}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{name+" "+lname}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{role}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{email}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{status}</td>
      <td
        className={
          id % 2 === 0
            ? evenClass + "flex justify-center hover:cursor-pointer"
            : oddClass + "flex justify-center hover:cursor-pointer"
        }
        onClick={() => {
          // setVisible(true);
          // setShow(true);
          markUpdateUserVisibleTrue({name,lname,role,email,status});
        }}
      >
        <Image src="settings.svg" height={25} width={30} alt="modify" />
        
      </td>
    </tr>
    </>
  );
}

export default UserTableRow