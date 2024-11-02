import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './poster_wall.css';
import './SpotTheDifference.css';

function PosterWall() {
  return (

    <div>

      <Popup trigger=
        {<button className='popup-poster'> Poster </button>} 
        modal nested>
        {
          close => (
            <div className='modal'>
              <button className='close' onClick={close}>
                &times;
              </button>
              <div className='content'>
                Poster
              </div>
            </div>
          )
        }
      </Popup>

    <div className="posterwall-background">
      <div className="posterwall-content">
        <h1>PosterWall</h1>
      </div>

    </div>
    </div>
  );
}

export default PosterWall;