import React from 'react';
import Tree from 'react-d3-tree';

// This is a simplified example of an org chart with a depth of 2.
// Note how deeper levels are defined recursively via the `children` property.
const orgChart = {
  name: 'Data Structure',
  children: [
    {
      children: [
        {
          name: 'Arrays',
        },
        {
          name: 'Linked List',
          children: [
            {
              name: 'Class and object',
            },
            {
                name:'Memory Allocation'
            }
          ],
        },
        {
            name:'Stack'
        },
        {
            name:'Queue'
        },
        {
            name:'Tree',
            children:[
                {
                    name:'Recursion'
                }
            ]
        },{
            name:"Binary Search Tree",
            children:[
                {
                    name:"Recursion"
                }
            ]
        }
      ],
    },
  ],
};

export default function OrgChartTree() {
  return (
    // `<Tree />` will fill width/height of its container; in this case `#treeWrapper`.
    <div>
        <div id="treeWrapper" style={{ width: '80em', height: '80em' }} className=' text-white bg-white flex items-center justify-center  mt-20 h-[100%] mx-auto'>
        <Tree data={orgChart} />
        </div>
    </div>
  );
}