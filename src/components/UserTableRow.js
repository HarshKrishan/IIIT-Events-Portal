import React from 'react'

function UserTableRow(props) {
    const {id,name,role,email,status}=props;
    const oddClass = "border-r-4 border-slate-300";
    const evenClass = "border-r-4 border-slate-300 bg-teal-300";
  return (
    <tr>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{id}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{name}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{role}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{email}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{status}</td>
    </tr>
  );
}

export default UserTableRow