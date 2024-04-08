import React, { useState, useEffect } from 'react';
import axios from 'axios';
 
const Roadmap = ({ topic }) => {
  const [roadmap, setRoadmap] = useState([]);
 
  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await axios.get(`https://coursemap-backend.vercel.app/nodes/${topic}`);
        setRoadmap(response.data);
      } catch (error) {
        console.error('Error fetching roadmap:', error);
      }
    };
 
    fetchRoadmap();
  }, [topic]);
 
  return (
    <div>
      <h2>Roadmap for {topic}</h2>
      <ul>
        {roadmap.map((node, index) => (
          <li key={index}>{node.title}</li>
        ))}
      </ul>
    </div>
  );
};
 
export default Roadmap;