import React from 'react'

function EventTableRow(props) {
    const {id,name,date,organiser}=props;
    const oddClass = "border-r-4 border-slate-300";
    const evenClass = "border-r-4 border-slate-300 bg-teal-300";


  return (
    <tr>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{id}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{name}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{date}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{organiser}</td>
    </tr>
  );
}

export default EventTableRow