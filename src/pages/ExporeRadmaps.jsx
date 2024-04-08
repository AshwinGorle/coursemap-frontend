import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constant";

const ExploreRoadmaps = () => {
  const [allRoadMaps, setAllRoadMaps] = useState([]);
  const [filteredMaps, setFilteredMaps] = useState([]);
  const [searchQery, setSearchQery] = useState([]);
  const navigate = useNavigate();

  const fetchAllRoadMaps = async () => {
    try {
      const response = await fetch(
        `${BASE_URL}/nodes`,
        {
          headers: { "Content-Type": "application/json" },
        }
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
  }, []);

  const handleGoToRoadMap = (nodeId) => {
    console.log("Navigating to roadmap with ID:", nodeId);
    navigate(`/road-maps/${nodeId}`);
  };

  const handleGoToEditor = (nodeId) => {
    console.log("Navigating to roadmap with ID:", nodeId);
    navigate(`/road-maps-editor/${nodeId}`);
  };
  const handleSearch = ()=>{
    if(searchQery === ""){
        setFilteredMaps(allRoadMaps)
    }else{
    setFilteredMaps(allRoadMaps.filter((roadMap)=>roadMap.title.toUpperCase().includes(searchQery.toUpperCase())));
}
}
  //this is roadmap div

  return (
    <div>
      <div className=" flex justify-between sticky top-0 bg-black w-full p-4">
        <h1 className=" ml-2 text-2xl sticky  top-0">Search RoadMaps</h1>
        <div className="flex text-2xl gap-2">
          <h1>search : </h1>
          <input className="rounded-md bg-gray-700 p-2" type="text" value={searchQery} onChange={(e)=>{setSearchQery(e.target.value) ; handleSearch()}} />
        </div>
        </div>

      <div className="flex justify-center text-3xl text-white font-Michroma mt-14">
        Explore Roadmaps Here :
      </div>

      <div className="grid grid-cols-3  gap-4 p-4">
        {filteredMaps && filteredMaps.map((roadmap) => (
          <div
            key={roadmap._id}
            className="flex justify-center text-center font-Inconsolata font-bold hover:bg-white hover:text-black bg-pink-600 rounded-2xl m-2 p-2 py-12 text-2xl text-white cursor-pointer"
            id={roadmap._id}
           
          >
            <div className="flex flex-col ">
              <div className="flex justify-center">
            <h1 className="text-4xl m-2">{roadmap.title}</h1>
            </div>
            <div className="flex gap-2">
            <button
              className="bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-1 px-2 rounded"
              
              onClick={() => handleGoToRoadMap(roadmap._id)}
            >
              Explore
            </button>
            <button
              className="bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-1 px-2 rounded"
              
              onClick={(e) => handleGoToEditor(roadmap._id)}
            >
              Edit
            </button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreRoadmaps;
