import React, { useState } from 'react';
import Roadmap from './RoadMap';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import RoadmapRenderer from '../components/RoadMapRenderer';
import AddResourceForm from '../components/AddResourseForm';
import SelectRoadmap from '../components/SelectRoadmap';
import ShowResourses from '../components/ShowResourses';
import CreateNodeForm from '../components/CreateNodeForm';
import { BASE_URL } from '../../constant';
const RoadMapEditor = () => {
  const {nodeId} = useParams();
  const [nodeData, setNodeData] = useState(null)
  
  const [targetId, setTargetId] = useState(nodeId);
  const [action , setAction] = useState("resources") // resources, form, nodes

  useEffect(() => {
    if (!nodeId) return;

    // Fetch data from the API
    fetch(`${BASE_URL}/nodes/get-node-with-prerequisite/${nodeId}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        setNodeData(data);
        console.log(data);
      })
      .catch(error => {
        console.log("error from ediitor " ,error.message);
      });
  },[targetId]);


  
  const tempId = '65f8fd95f068b84c42696f5f';
  return (
    <div className="flex flex-col h-screen">
      <div className="bg-black h-auto border-b border-white">
            <Roadmap targetId={targetId} nId= {nodeId} height={"390px"}/>
      </div>


      <div className="flex h-5/6 sm:flex-col md:flex-row">

        <div className="  bg-zinc-900 md:w-1/2 sm:w-full border-r border-white">
              <CreateNodeForm/>
              {nodeData && <RoadmapRenderer data={nodeData} targetId={targetId} setTargetId={setTargetId} action={action} setAction={setAction} />}
        </div>


        <div className="bg-zinc-900 md:w-1/2 sm:w-full overflow-scroll">
          <AddResourceForm targetId={targetId} setTargetId={setTargetId} action={action} setAction={setAction}/>
          <ShowResourses targetId={targetId} setTargetId={setTargetId}/>
          <SelectRoadmap targetId={targetId} setTargetId={setTargetId} action={action} setAction={setAction}/>
        </div>
        
      </div>


    </div>
  );
};

export default RoadMapEditor;
