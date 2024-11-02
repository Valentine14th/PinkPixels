import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './SpotTheDifference.css';
import './wall1.css';
import FakeArticle from './assets/diff_game_pics/fakenewsarticle2.png'
import RealArticle from './assets/diff_game_pics/newsarticle.png'
import DiffGameContainer from './DiffGameContainer';

function Wall1({setWin}) {

  const explanationsArticle = {"difference1": "Überprüfe immer ob du die Website kennst, auf der du Informationen nachschaust. SRF ist eine bekannte, schweizer Nachrichtenseite. \"animal-shock.net\" hast du noch nie gehört und daher musst du vorsichtiger sein mit den Informationen, die du dort findest.", "difference2": "Es ist immer gut Informationen an zwei verschiedenen Orten nachzuschauen. Wenn du das mit Schildkröten tust, findest du heraus, dass sie gar nicht klettern können."}

  const displayArticle = () => {
    return (
      <DiffGameContainer FakeImage={FakeArticle} RealImage={RealArticle} setWin={setWin} id={"game_newspaper"} numberOfDiffs={3} explanations={explanationsArticle} correctPicture={"right"}/>
    )
  }

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
        {displayArticle}
          {/* close => (
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
        } */}
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