import React, { useState } from 'react'
import Node from '../atoms/Node'

function Grid() {
  
  let [nodes, setNode] = useState([]);

  let matrix:number[][] = [];

  for (let i = 0; i < 5; i++) {
    let elements:number[] = [];
    for (let j = 0; j < 5; j++) {
      elements.push(0);
    }
    matrix.push(elements);
  }

  return (
    <div>
      {
        matrix.map((row, rowIdx) => {
          return (
            <div key={rowIdx}>
              <Node></Node>
            </div>
          )
        })
      }
    </div>
  )
}

export default Grid