import React, { useState } from 'react';
import './door_wall.css';
import Leave from './leave';

function DoorWall({win}) {
  const [isEnd, setIsEnd] = useState(false);
  return (

    <div>

        <div className="doorwall-background">
            <div className="doorwall-content">
                
                <h1></h1>
                <Leave win={win} setIsEnd={setIsEnd} />
            </div>

        </div>
    </div>
  );
}

export default DoorWall;
