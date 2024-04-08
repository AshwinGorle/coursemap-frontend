import React from "react";
import { Handle } from "react-flow-renderer";

const Node = ({ node, marginLeft, level, targetId, setTargetId, action, setAction }) => {
  const colors = [
    "#4287f5",
    "#42f56d",
    "#f5e542",
    "#f542b8",
    "#42e3f5",
    "#f54242",
  ];
  const colorIndex = level % colors.length;
  const backgroundColor = colors[colorIndex];

  const handleAddResourse = (nodeId)=>{
    console.log("id in handle add resourse funciton ",nodeId )
    setTargetId(nodeId);
  }

  return (
    <div className={`rounded mb-1 ml-${marginLeft}`}>
      <div
        className="p-2 mb-1 rounded-md border border-gray-300"
        style={{ backgroundColor }}
      >
        <div className="flex justify-between">
          <h2 className="text-lg text-white font-semibold">{node.title}</h2>
          <div className="flex gap-2">
            <button
              className="bg-zinc-900 hover:bg-zinc-950 text-white font-bold py-1 px-2 rounded"
              id={`${node._id}`}
              onClick={(e) => handleAddResourse(e.target.id)}
            >
              Select
            </button>
            
          </div>
        </div>
      </div>
      <div className="ml-4">
        <ul className="list-disc">
          {node.prerequisites.map((childNode) => (
            <li key={childNode._id}>
              <Node
                node={childNode}
                marginLeft={marginLeft + 4}
                level={level + 1}
                targetId={targetId}
                setTargetId={setTargetId}
                action={action}
                setAction={setAction}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const RoadmapRenderer = ({ data, targetId, setTargetId, action, setAction }) => {
  return (
    <div className="mx-auto my-6 max-w-xl p-6">
      <Node node={data} marginLeft={0} level={0} targetId={targetId} setTargetId={setTargetId} action={action} setAction={setAction} />
    </div>
  );
};

export default RoadmapRenderer;

// {node.resources.length > 0 && (
//     <div className="ml-4">
//       <h3 className="font-semibold mb-2">Resources:</h3>
//       <ul className="list-disc">
//         {node.resources.map((resource, index) => (
//           <li key={index}>
//             <a
//               href={resource.resourseUrl}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-blue-600"
//             >
//               {resource.resourseName}
//             </a>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )}
