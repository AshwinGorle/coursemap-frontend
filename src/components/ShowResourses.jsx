import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constant";
import ShowResourseBox from "./ShowResourseBox";

const ShowResourses = ({ targetId, setTargetId }) => {
  const [resourses, setResourses] = useState([]);
  const [show, setShow] = useState(true);
  useEffect(() => {
    const getNodeById = async () => {
      try {
        const response = await fetch(`${BASE_URL}/nodes/resourses/${targetId}`);
        console.log("resourses fetchind Id : " , targetId);
        const data = await response.json();
        console.log("resourses fetced --------------------------------",data)
        console.log("fetched node data  ", data);
        console.log("resourses fetced array--------------------------------",data.data)
        setResourses(data.data);


      } catch (err) {
        console.log("node getting error ", targetId);
        console.log("node getting error");
      }
    };
    getNodeById();
  },[targetId]);


  return (
    <div className="m-4 bg-black rounded-lg p-6">
      <div className=" flex justify-between sticky top-0 bg-black w-full p-">
        <h1 className=" ml-2 text-2xl sticky  top-0">Resourse List</h1>
        <div className="flex text-2xl gap-2">
        <button onClick={(e)=>setShow(!show)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg">
         {show ? "Hide" : "Show"}
        </button>
        </div>
      </div>

      {show && <div className="flex flex-col flex-col-reverse">
          {resourses?.map((res)=><ShowResourseBox resource={res}/>)}
      </div>
      }

    </div>
  );
};

export default ShowResourses;
