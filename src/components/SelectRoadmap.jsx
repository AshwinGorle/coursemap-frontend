import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constant";


const SelectRoadmap = ({targetId, setTargetId, action, setAction, reRender, setReRender}) => {
  const [allRoadMaps, setAllRoadMaps] = useState([]);
  const [filteredMaps, setFilteredMaps] = useState([]);
  const [searchQery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = ()=>{
       if(searchQery === ""){
           setFilteredMaps(allRoadMaps)
       }else{
       setFilteredMaps(allRoadMaps.filter((roadMap)=>roadMap.title.toUpperCase().includes(searchQery.toUpperCase())));
  }
}

  const fetchAllRoadMaps = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/nodes`
      );
      const data = await response.json();
      setAllRoadMaps(data);
      setFilteredMaps(data);
    } catch (err) {
      console.log("Error in fetching all roadmaps:", err);
    }
  };

  useEffect(() => {
    fetchAllRoadMaps();
  }, [targetId]);

  const handleGoToRoadMap = (nodeId) => {
    console.log("Navigating to roadmap with ID:", nodeId);
    navigate(`/road-maps/${nodeId}`);
  };

  const handleAddNode = async(nodeId)=>{
    try{
       const response = await fetch(`${BASE_URL}/nodes/addPrerequisite/${targetId}/${nodeId}`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        }
       })
       const data = await response.json();
       console.log("node added response", data);
       setTargetId(targetId);
      //  setReRender((state)=>state+1);
    //    here i want to show a popup toast messgae which is in data.messgae

    }catch(err){
        console.log("node adding error ",err)
    }
  }

  return (
      <div className="flex flex-col p-4 pt-0  bg-black m-4 rounded-lg overflow-scroll h-3/5 overflow-x-hidden">
       <div className=" flex justify-between sticky top-0 bg-black w-full p-4">
        <h1 className=" ml-2 text-2xl sticky  top-0">Add Roadmap</h1>
        <div className="flex text-2xl gap-2">
          <h1>search : </h1>
          <input className="rounded-md bg-gray-700 p-2" type="text" value={searchQery} onChange={(e)=>{setSearchQuery(e.target.value) ; handleSearch()}} />
        </div>
        </div>
      {filteredMaps.map((roadmap) => (
        <div
          key={roadmap._id}
          className="flex justify-between text-center rounded-md bg-gray-700 m-3 p-2 text-2xl text-white"
          id={roadmap._id}
          
        >
            
          <h1>{roadmap.title}</h1>
          <div className=" flex gap-2">
          <button
              className="bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-1 px-2 rounded"
              id={roadmap._id}
              onClick={() => handleGoToRoadMap(roadmap._id)}
            >
              check
            </button>
            <button className="bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-1 px-2 rounded"
                    id={roadmap._id}
                    onClick={(e)=>handleAddNode(e.target.id)}>
              Add+
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SelectRoadmap;
