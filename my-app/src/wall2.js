import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './SpotTheDifference.css';
import './wall2.css';
import RealPic from './assets/diff_game_pics/turtle_photo.jpeg'
import FakePic from './assets/diff_game_pics/fake_turtle_photo.png'
import RealVid from './assets/diff_game_pics/turtle_video.png'
import FakeVid from './assets/diff_game_pics/turtle_video_fake.png'
import DiffGameContainer from './DiffGameContainer';

function Wall2({setWin}) {

  const explanationsTablet = {"difference1": "KI Bilder sind oft sehr schwierig zu erkennen. Aber manchmal haben sie kleine Fehler versteckt, wie zum Beispiel ein Bein zu viel!"}

  const displayTablet = () => {
    return (
      <DiffGameContainer FakeImage={RealPic} RealImage={FakePic} setWin={setWin} id={"game_picture"} numberOfDiffs={3} explanations={explanationsTablet} correctPicture={"left"}/>
    )
  }

  const explanationsPC = {
    "difference1": "Bei Youtube Videos ist es wichtig, darauf zu achten wer ein Video gepostet hat. Ist es ein Kanal dem du vertrauen kannst?",
    "difference2": "Viele dislikes auf einem Video können ein Hinweis darauf sein, das etwas im Video nicht stimmt!",
    "difference3": "Manchmal ist es aus dem Text nicht so einfach zu erkennen, dass die Informationen nicht stimmen. Versuche immer Informationen an verschiedenen Orten zu finden!",
  }

  const displayPC = () => {
    return (
      <DiffGameContainer FakeImage={FakeVid} RealImage={RealVid} setWin={setWin} id={"game_youtube"} numberOfDiffs={5} explanations={explanationsPC} correctPicture={"right"}/>
    )
  }


  return (

    <div>
      <Popup 
        trigger={<div className='invisible-button popup-tablet'></div>}
        onOpen={() => {}}
        modal nested>
          {displayTablet}
      </Popup>

      <Popup trigger=
        {<div className='invisible-button popup-computer'></div>}
        modal nested>
        {displayPC}
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