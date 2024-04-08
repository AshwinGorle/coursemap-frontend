import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../../constant";

const Profile = () => {
  const navigate = useNavigate();

  const user = {
    username: "Akshansh",
    email: "akshansh.gupta13@gmail.com",
    phone: "9981822702",
    avatarUrl: "https://static.thenounproject.com/png/363640-200.png",
  };

  const [activeTab, setActiveTab] = useState("myroadmaps");
  const [allRoadMaps, setAllRoadMaps] = useState([]);
  const [pendingrequests, setPendingRequests] = useState([]);
  const [acceptedrequests, setAcceptedRequests] = useState([]);
  const [rejectedrequests, setRejectedRequests] = useState([]);
  const [show, setShow] = useState(false);
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
      navigate(`/road-maps-editor/${data.data._id}`);
      console.log("created Node --------------------------------", data.data);
    } catch (err) {
      console.log("node creating error ");
    }
  };
  useEffect(() => {
    fetch(`${BASE_URL}/nodes`)
      .then((response) => response.json())
      .then((data) => setAllRoadMaps(data))
      .catch((error) => console.error("Error fetching requests:", error));
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/requests-pending`)
      .then((response) => response.json())
      .then((data) => setPendingRequests(data))
      .catch((error) => console.error("Error fetching requests:", error));
  }, [pendingrequests]);
  useEffect(() => {
    fetch(`${BASE_URL}/requests-accepted`)
      .then((response) => response.json())
      .then((data) => setAcceptedRequests(data))
      .catch((error) => console.error("Error fetching requests:", error));
  }, [pendingrequests]);
  useEffect(() => {
    fetch(`${BASE_URL}/requests-rejected`)
      .then((response) => response.json())
      .then((data) => setRejectedRequests(data))
      .catch((error) => console.error("Error fetching requests:", error));
  }, [pendingrequests]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleGoToRoadMap = (nodeId) => {
    console.log("Navigating to roadmap with ID:", nodeId);
    navigate(`/road-maps/${nodeId}`);
  };

  const handleGoToEditor = (nodeId) => {
    console.log("Navigating to roadmap with ID:", nodeId);
    navigate(`/road-maps-editor/${nodeId}`);
  };

  const handleAccept = async (id) => {
    try {
      console.log(id, "intered in handle Accepts");
      const response = await fetch(`${BASE_URL}/requests-accept/${id}`, {
        method: "PUT",
      });
      const data = await response.json();
      setPendingRequests(pendingrequests.filter((req) => req._id == data._id)); // Here you're using '==' for comparison
      console.log("accepeted ", data);
    } catch (err) {
      console.log(" err in handleAccept : ", err);
    }
  };

  const handleReject = async (id) => {
    try {
      console.log(id, "intered in handle Accepts");
      const response = await fetch(`${BASE_URL}/requests-reject/${id}`, {
        method: "PUT",
      });
      const data = await response.json();
      setPendingRequests(pendingrequests.filter((req) => req._id != data._id)); // Here you're using '!=' for comparison

      console.log("rejected successfull ", data);
    } catch (err) {
      console.log(" err in handleAccept : ", err);
    }
  };
  return (
    <div className=" bg-gray-950 text-white p-8 rounded-lg shadow-md text-center">
      <img
        src={user.avatarUrl}
        alt="User Avatar"
        className="mx-auto bg-white rounded-full w-24 h-24 mb-4"
      />
      <h1 className="text-3xl font-bold mb-2">{user.username}</h1>
      <p className="text-lg mb-2">{user.email}</p>
      <p className="text-sm mb-4">{user.phone}</p>

      <hr className="w-full h-px border-neutral-200" />

      <ul className="group flex flex-wrap items-stretch text-[1.15rem] font-semibold list-none border-b-2 border-transparent border-solid active-assignments">
        <li className="flex mt-2 -mb-[2px]">
          <h1
            aria-controls="myroadmaps"
            className={`py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-myroadmaps:text-primary text-muted hover:border-pink-600 ${
              activeTab === "myroadmaps" ? " text-pink-600 border-pink-600" : ""
            }`}
            href="My Roadmaps"
            onClick={() => handleTabClick("myroadmaps")}
          >
            My Roadmaps
          </h1>
        </li>
        <li className="flex mt-2 -mb-[2px]">
          <h1
            aria-controls="pendingrequests"
            className={`py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-myroadmaps:text-primary text-muted hover:border-pink-600 ${
              activeTab === "pendingrequests"
                ? "text-pink-600 border-pink-600"
                : ""
            }`}
            href="Pending Requests"
            onClick={() => handleTabClick("pendingrequests")}
          >
            Pending Requests
          </h1>
        </li>
        <li className="flex mt-2 -mb-[2px]">
          <h1
            aria-controls="acceptedrequests"
            className={`py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-myroadmaps:text-primary text-muted hover:border-pink-600 ${
              activeTab === "acceptedrequests"
                ? "text-pink-600 border-pink-600"
                : ""
            }`}
            href="Accepted Requests"
            onClick={() => handleTabClick("acceptedrequests")}
          >
            Accepted Requests
          </h1>
        </li>
        <li className="flex mt-2 -mb-[2px]">
          <h1
            aria-controls="rejectedrequests"
            className={`py-5 mr-1 sm:mr-3 lg:mr-10 transition-colors duration-200 ease-in-out border-b-2 border-transparent group-myroadmaps:text-primary text-muted hover:border-pink-600 ${
              activeTab === "rejectedrequests"
                ? "text-pink-600 border-pink-600"
                : ""
            }`}
            href="Rejected Requests"
            onClick={() => handleTabClick("rejectedrequests")}
          >
            Rejected Requests
          </h1>
        </li>
      </ul>

      {activeTab === "myroadmaps" && (
        <div
          style={{ maxHeight: "345px" }}
          className="mt-4 mb-0 overflow-y-scroll grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {allRoadMaps.map((roadmap) => (
            <div
              key={roadmap._id}
              id={roadmap._id}
              className="bg-gray-800 p-4 hover:bg-pink-600 hover:cursor-pointer rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-2">{roadmap.title}</h2>
              <p>{roadmap.body}</p>
              <div className="flex justify-center gap-2">
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
          ))}
        </div>
      )}

      {activeTab === "pendingrequests" && (
        <div style={{ maxHeight: "350px" }} className="mt-4 overflow-y-scroll">
          {pendingrequests.map((pendingrequests) => (
            <div
              key={pendingrequests._id}
              className="bg-yellow-500 text-black p-4 mb-3 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-2">
                {pendingrequests.title}
              </h2>
              <p>{pendingrequests.body}</p>
              <div className="flex justify-center items-center">
                <button
                  onClick={() => handleAccept(pendingrequests._id)}
                  className="p-2 mt-2 mx-2 rounded-lg hover:bg-gray-800 hover:text-gray-300 bg-green-600 font-bold font-mono"
                >
                  Accept
                </button>
                <button
                  onClick={() => handleReject(pendingrequests._id)}
                  className="p-2 mt-2 mx-2 rounded-lg hover:bg-gray-800 hover:text-gray-300 bg-red-600 font-bold font-mono"
                >
                  Reject
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === "acceptedrequests" && (
        <div style={{ maxHeight: "350px" }} className="mt-4 overflow-y-scroll">
          {acceptedrequests.map((acceptedrequests) => (
            <div
              key={acceptedrequests.id}
              className="bg-green-800 p-4 mb-3 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-2">
                {acceptedrequests.title}
              </h2>
              <p>{acceptedrequests.body}</p>
              <button  onClick={(e) => setShow(!show)} className="p-2 mt-2 mx-2 rounded-lg hover:bg-gray-800 hover:text-gray-300 bg-pink-700 font-bold font-mono">
                Create Roadmap
              </button>

              {show && (
                <div className="m-4 bg-black rounded-lg ">
                  <div className=" m-2 flex gap-2 align-middle">
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
                      onChange={(e) => {
                        setTitle(e.target.value);
                        setError(null);
                      }}
                      className="block w-full px-4 py-2   bg-black text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-500 text-xl"
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
          ))}
        </div>
      )}
      {activeTab === "rejectedrequests" && (
        <div style={{ maxHeight: "350px" }} className="mt-4 overflow-y-scroll">
          {rejectedrequests.map((rejectedrequests) => (
            <div
              key={rejectedrequests.id}
              className="bg-red-600 p-4 mb-3 rounded-lg shadow-md"
            >
              <h2 className="text-xl font-bold mb-2">
                {rejectedrequests.title}
              </h2>
              <p>{rejectedrequests.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Profile;
