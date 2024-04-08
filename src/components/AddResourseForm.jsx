import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../../constant';

const AddResourceForm = ({targetId, setTargetId,  action, setAction}) => {
  const [resourseName, setResourseName] = useState('');
  const [resourseUrl, setResourseUrl] = useState('');
  const [resourseDescription, setResourseDescription] = useState('');
  const [error, setError] = useState("");
  const [targetNode, setTargetNode] = useState(null);
  
  useEffect(()=>{
      const getNodeById = async ()=>{
        try{
        const response = await fetch(`${BASE_URL}/nodes/${targetId}`);
        const data = await response.json();
        console.log("fetched node data  " , data);
        setTargetNode(data);
        }catch(err){
            console.log("node getting error ",targetId);
            console.log("node getting error");
        }
      }

      getNodeById();

  },[targetId])

  const handleSubmit = async(e) => {
    e.preventDefault();
    const response = await fetch(`${BASE_URL}/nodes/addResourses/${targetId}`, {
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json'
        },
        body : JSON.stringify({resourseName, resourseUrl, resourseDescription})  
    });
    const data = await response.json();
    console.log("the resourse adding response",data)
    setError(data.message)
  };

  return (
    <form onSubmit={handleSubmit} className="m-4 bg-black rounded-lg p-6">
        {targetNode && <h1 ml-auto mr-auto className=' text-2xl '>{`Selected Node : ${targetNode.title}` }</h1>}
      <div className="mb-4">
        <label htmlFor="resourceName" className="block text-sm font-semibold text-white">Resource Name:</label>
        <input
          type="text"
          id="resourceName"
          value={resourseName}
          onChange={(e) => setResourseName(e.target.value)}
          className="block w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="resourceUrl" className="block text-sm font-semibold text-white">Resource URL:</label>
        <input
          type="url"
          id="resourceUrl"
          value={resourseUrl}
          onChange={(e) => setResourseUrl(e.target.value)}
          className="block w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>
      <div className="mb-4">
        <label htmlFor="resourceUrl" className="block text-sm font-semibold text-white">Description:</label>
        <textarea
          type="textArea"
          id="resourceUrl"
          value={resourseDescription}
          onChange={(e) => setResourseDescription(e.target.value)}
          className="block w-full px-4 py-2 mt-1 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:border-blue-500"
          required
        />
      </div>

        {error && <p className='text-green-500'>{error}</p>}

      <button onClick={(e)=>handleSubmit(e)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Add Resource
      </button>
    </form>
  );
};

export default AddResourceForm;
