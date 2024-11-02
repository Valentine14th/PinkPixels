import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './SpotTheDifference.css';
import './wall1.css';

function Wall1() {
  return (

    <div>

      <Popup trigger=
        {<div className='invisible-button popup-phone'></div>}
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
        {<div className='invisible-button popup-newspaper'></div>}
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

    <div className="wall1-background">
      <div className="wall1-content">
        <h1>Wall1</h1>
      </div>

    </div>
    </div>
  );
}

export default Wall1;