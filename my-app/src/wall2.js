import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './SpotTheDifference.css';
import './wall2.css';

function Wall2() {
  return (

    <div>


      <Popup trigger=
        {<div className='invisible-button popup-tablet'></div>}
        modal nested>
        {
          close => (
            <div className='modal'>
              <button className='close' onClick={close}>
                &times;
              </button>
              <div className='image-container'>
                <img
                  src='path/to/your/image1.jpg'
                  alt='Image 1'
                  className='popup-image'
                />
                <img
                  src='path/to/your/image2.jpg'
                  alt='Image 2'
                  className='popup-image'
                />
              </div>
            </div>
          )
        }
      </Popup>

      <Popup trigger=
        {<div className='invisible-button popup-computer'></div>}
        modal nested>
        {
          close => (
            <div className='modal'>
              <button className='close' onClick={close}>
                &times;
              </button>
              <div className='image-container'>
                <img
                  src='path/to/your/image1.jpg'
                  alt='Image 1'
                  className='popup-image'
                />
                <img
                  src='path/to/your/image2.jpg'
                  alt='Image 2'
                  className='popup-image'
                />
              </div>
            </div>
          )
        }
      </Popup>

    <div className="wall2-background">
      <div className="wall2-content">
        <h1>Wall2</h1>
      </div>

    </div>
    </div>
  );
}

export default Wall2;