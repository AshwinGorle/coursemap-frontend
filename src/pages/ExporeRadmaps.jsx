import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Autocomplete } from "@mui/material";
import SearchBar from "../components/SearchBar";

const ExploreRoadmaps = () => {
  const [allRoadMaps, setAllRoadMaps] = useState([]);
  const navigate = useNavigate();

  const fetchAllRoadMaps = async () => {
    try {
      const response = await fetch(
        "https://coursemap-backend.vercel.app/nodes",{
          headers : {'Content-Type':'application/json'}
        }
      );
      const data = await response.json();
      setAllRoadMaps(data);
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

  //this is roadmap div

  return (
<div>
  {/* search bar */}


    <div className="flex justify-center text-3xl text-white">
        Explore Roadmaps :
      </div>
      
    <div className="grid grid-cols-3 gap-4 p-4">
      
  {allRoadMaps.map((roadmap) => (
    <div
      key={roadmap._id}
      className="flex justify-center text-center bg-pink-600 rounded-2xl m-2 p-2 py-12 text-2xl text-white cursor-pointer"
      id={roadmap._id}
      onClick={() => handleGoToRoadMap(roadmap._id)}
    >
      <h1>{roadmap.title}</h1>
    </div>
  ))}
</div>
</div>

  );
};

export default ExploreRoadmaps;
