import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BASE_URL } from '../../constant';
 
const Roadmap = ({ topic }) => {
  const [roadmap, setRoadmap] = useState([]);
 
  useEffect(() => {
    const fetchRoadmap = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/nodes/${topic}`);
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