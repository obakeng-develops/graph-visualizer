import React, { useState } from 'react'
import Node from '../atoms/Node'

function Grid() {
  
  let [nodes, setNode] = useState([]);

  

  return (
    <div>
      <Node/>
    </div>
  )
}

export default Grid