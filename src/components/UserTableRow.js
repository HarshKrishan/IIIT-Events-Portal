"use client";
import React,{useState} from 'react'
import Image from 'next/image';

function UserTableRow(props) {
  const { id, name,lname, role, email, status } = props;
  const oddClass = "border-r-4 border-b-2 border-slate-300 ";
  const evenClass = "border-r-4 border-b-2 border-slate-300 bg-teal-300 ";
  const [show, setShow] = useState(false);
  const handleCLick = () => {
    alert("hi!")
    setShow(false);
  };
  const {markUpdateUserVisibleTrue} = props;
  

  return (
    <>
      <tr key={id}>
        <td className={id % 2 === 0 ? evenClass : oddClass}>
          <div className="flex justify-center">{id}</div>
        </td>
        <td className={id % 2 === 0 ? evenClass : oddClass}>
          <div className="flex justify-center">{name + " " + lname}</div>
        </td>
        <td className={id % 2 === 0 ? evenClass : oddClass}>
          <div className="flex justify-center">{role}</div>
        </td>
        <td className={id % 2 === 0 ? evenClass : oddClass}>
          <div className="flex justify-center">{email}</div>
        </td>
        <td className={id % 2 === 0 ? evenClass : oddClass}>
          <div className="flex justify-center">{status}</div>
        </td>
        <td
          className={
            id % 2 === 0
              ? evenClass 
              : oddClass
          }
          onClick={() => {
            // setVisible(true);
            // setShow(true);
            markUpdateUserVisibleTrue({ name, lname, role, email, status });
          }}
        >
          <div className='flex justify-center hover:cursor-pointer'>
            <Image src="settings.svg" height={25} width={30} alt="modify" />
          </div>
        </td>
      </tr>
    </>
  );
}

export default UserTableRow