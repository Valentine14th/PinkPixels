import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './SpotTheDifference.css';
import './wall2.css';
import FakeArticle from './assets/diff_game_pics/fakenewsarticle2.png'
import RealArticle from './assets/diff_game_pics/newsarticle.png'
import DiffGameContainer from './DiffGameContainer';

function Wall2({setWin}) {

  const explanationsTablet = {"difference1": "yeah that's weird", "difference2": "little lol", "difference3": "lmao"}

  const displayTablet = () => {
    return (
      <DiffGameContainer FakeImage={FakeArticle} RealImage={RealArticle} setWin={setWin} id={"game1"} numberOfDiffs={3} explanations={explanationsTablet} correctPicture={"left"}/>
    )
  }


  return (

    <div>
      <Popup 
        trigger={<div className='invisible-button popup-tablet'></div>}
        modal nested>
          {}
      </Popup>

      <Popup trigger=
        {<div className='invisible-button popup-computer'></div>}
        modal nested>
        {displayTablet}
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