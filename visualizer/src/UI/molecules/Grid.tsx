import React from 'react'
import Node from '../atoms/Node'

function Grid() {

  let matrix:number[][] = [];

  for (let i = 0; i < 10; i++) {
    let elements:number[] = [];
    for (let j = 0; j < 5; j++) {
      elements.push(0);
    }
    matrix.push(elements);
  }

  return (
    <div className='grid grid-cols-5 grid-rows-5 m-0 absolute'>
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