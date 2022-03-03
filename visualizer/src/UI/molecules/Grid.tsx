import React from 'react'
import Node from '../atoms/Node'

function Grid() {

  let matrix:number[][] = [];

  for (let i = 0; i < 20; i++) {
    let elements:number[] = [];
    for (let j = 0; j < 10; j++) {
      elements.push(0);
    }
    matrix.push(elements);
  }

  return (
    <div className='w-80 h-96 flex flex-wrap'>
      {
        matrix.map((row, rowIdx) => {
          return <>
           {row.map((node, nodeIdx) => <div key={rowIdx + nodeIdx}><Node></Node></div>)}
          </>
        })
      }
    </div>
  )
}

export default Grid