import React, { useEffect, useState } from "react";
import { BASE_URL } from "../../constant";
import ShowResourseBox from "./ShowResourseBox";

const CreateNodeForm = ({ targetId, setTargetId }) => {
  const [show, setShow] = useState(true);
  const [title, setTitle] = useState("");
  const [error, setError] = useState("");

  const handleCreateNode = async () => {
   
    if (title === "") return setError("Please enter a title for the node.");
    try {
      const response = await fetch(`${BASE_URL}/nodes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ title: title }),
      });

      const data = await response.json();
      setError(data.message);
      console.log("created Node --------------------------------", data.data);
    } catch (err) {
      console.log("node creating error ");
    }
  };

  return (
    <div className="m-4 bg-black rounded-lg p-1 ">
      <div className=" flex justify-between sticky top-0 bg-black w-full p-1 ">
        <h1 className=" ml-2 text-2xl sticky  top-0">Add New</h1>
        <div className="flex text-2xl gap-2">
          <button
            onClick={(e) => setShow(!show)}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded text-lg"
          >
            {show ? "Hide" : "Show"}
          </button>
        </div>
      </div>

      {show && (
        <div  className="m-4 bg-black rounded-lg ">
          
          <div className="mb-4 flex gap-2 align-middle">
            <label
              htmlFor="resourceName"
              className="block text-2xl font-semibold my-auto text-gray-400"
            >
              Tittle: 
            </label>
            <input
              type="text"
              id="resourceName"
              value={title}
              onChange={(e) => {setTitle(e.target.value) ; setError(null)}}
              className="block w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 text-xl"
              required
            />
             <button
            onClick={(e) => handleCreateNode(e)}
            className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          >
            Create
          </button>
          </div>
          
          {error && <p className="text-green-500">{error}</p>}

         
        </div>
      )}
    </div>
  );
};

export default CreateNodeForm;


