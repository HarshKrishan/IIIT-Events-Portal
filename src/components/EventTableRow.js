import React from 'react'
import Image from 'next/image';
function EventTableRow(props) {
    const {eventId,id,name,date,organiser,fundedBy,fund,link}=props;
    const oddClass = "border-r-4 border-slate-300";
    const evenClass = "border-r-4 border-slate-300 bg-teal-300";

    const {markShowEventTrue} = props;

    // console.log("key....",key);
    // console.log(id,name,date,organiser,fundedBy,fund,link);
  // console.log("name ",name,"id: ",eventId);
  return (
    <tr key={id}>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{id}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{name}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{date}</td>
      <td className={id % 2 === 0 ? evenClass : oddClass}>{organiser}</td>
      <td
        className={
          id % 2 === 0
            ? evenClass
            : oddClass 
        }
      >
        <div className="flex justify-center hover:cursor-pointer" onClick={()=>{
          markShowEventTrue({eventId,name,date,organiser,fundedBy,fund,link});
        }}>
          <Image src="/view.png" height={25} width={30} alt="view" />
        </div>
      </td>
      <td
        className={
          id % 2 === 0
            ? evenClass
            : oddClass 
        }
      >
        <div className="flex justify-center hover:cursor-pointer">
          <Image src="settings.svg" height={25} width={30} alt="setting" />
        </div>
      </td>
    </tr>
  );
}

export default EventTableRow