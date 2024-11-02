import React, { useState } from 'react';
import './door_wall.css';
import Leave from './leave';

function DoorWall({win}) {
  const [isEnd, setIsEnd] = useState(false);
  return (
    <div>
      <h1>DoorWall</h1>
      <Leave win={win} setIsEnd={setIsEnd} />
    </div>
  );
}

export default DoorWall;