import React, { useEffect, useState } from 'react';
import ReactFlow, { Background, Controls } from 'react-flow-renderer';
import { BASE_URL } from '../../constant';
import { useParams } from 'react-router-dom';

const Roadmap = ({nId, height, width, targetId}) => {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [error, setError] = useState(null);
  const { nodeId } = useParams();
  console.log("this is node Id in param",nodeId );
  
  let fetchNodeId = nId;
  if(!nId){
   fetchNodeId = nodeId;
  }
  
  useEffect(() => {
    if (!nodeId) return;

    // Fetch data from the API
    fetch(`${BASE_URL}/nodes/get-node-with-prerequisite/${fetchNodeId}`) /// yha local host ki jgha deployed api url dalna baki db same
      .then(response => {
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        return response.json();
      })
      .then(data => {
        console.log('Fetched data:', data);
        const { nodes, edges } = generateNodesAndEdges(data);
        console.log('Generated nodes:', nodes);
        console.log('Generated edges:', edges);
        setNodes(nodes);
        setEdges(edges);
      })
      .catch(error => {
        setError(error.message);
      });
  },[targetId]);

  const generateNodesAndEdges = (node, level = 0) => {
    if (!node) return { nodes: [], edges: [] };

    const generatedNodes = [];
    const generatedEdges = [];
    const initialX = 100;
    const initialY = 100;
    generateNodeRecursive(node, generatedNodes, generatedEdges, initialX, initialY, level);
    return { nodes: generatedNodes, edges: generatedEdges };
  };

  const generateNodeRecursive = (node, nodeList, edgeList, x, y, level) => {
    if (!node) return;

    const color = getColorForLevel(level);

    const newNode = {
      id: node._id,
      data: { label: node.title },
      position: { x, y },
      style: { background: color, color: '#fff', border: '1px solid #333' }, // Add style for node
      type: 'default',
    };

    nodeList.push(newNode);

    if (node.prerequisites && node.prerequisites.length > 0) {
      const deltaY = 150; // Vertical space between nodes at the same depth
      let newY = y + deltaY;

      node.prerequisites.forEach(prereq => {
        const childNode = {
          id: prereq._id,
          data: { label: prereq.title },
          position: { x: x + 200, y: newY }, // Move child nodes to the right
          style: { background: color, color: '#fff', border: '1px solid #333' }, // Apply the same style as the parent
          type: 'default',
        };
        nodeList.push(childNode);

        // Connect the parent node to the child node
        edgeList.push({ id: `${node._id}-${prereq._id}`, source: node._id, target: prereq._id });

        // Recursive call for child prerequisites
        generateNodeRecursive(prereq, nodeList, edgeList, x + 200, newY, level + 1);
        newY += deltaY; // Update y position for the next child
      });
    }
  };

  const getColorForLevel = (level) => {
    const colors = ['#4287f5', '#42f56d', '#f5e542', '#f542b8', '#42e3f5', '#f54242'];
    return colors[level % colors.length];
  };

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ width: '100%', height: `${height? height : '700px'}` }}>
      <ReactFlow nodes={nodes} edges={edges} style={{ width: '100%', height: '100%' }}>
        <Background />
        <Controls />
      </ReactFlow>
    </div>
  );
};

export default Roadmap;
