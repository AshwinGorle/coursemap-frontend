import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constant";

const ShowResourseBox = ({ resource }) => {
   
  

  return (
    <div className="m-2 gap-4 bg-black rounded-lg p-4 border border-gray-500 ">
       <h1 className="text-2xl font-bold">Name : {resource.resourseName}</h1>
       <h1 className="text-blue-500 my-2 text-xl" ><a  href={`${resource?.resourseUrl}`} target="_blank"  ><span className=" text-2xl font-bold text-gray-400"> Link : </span> {resource?.resourseUrl?.slice(0,50) + "..." }</a></h1>
       <div className="bg-gray-700 p-3 rounded-md text-xl">
          <p>
             {resource?.resourseDescription && resource?.resourseDescription }
          </p>
       </div>
    </div>
  );
};

export default ShowResourseBox;
