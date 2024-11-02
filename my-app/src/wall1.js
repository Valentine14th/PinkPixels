import React, { useState } from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './SpotTheDifference.css';
import './wall1.css';
import FakeArticle from './assets/diff_game_pics/fakenewsarticle2.png'
import RealArticle from './assets/diff_game_pics/newsarticle.png'
import FakePhone from './assets/diff_game_pics/fake_turtle_insta.jpg'
import RealPhone from './assets/diff_game_pics/turtle_insta.jpg'
import DiffGameContainer from './DiffGameContainer';

function Wall1({setWin}) {

  const explanationsArticle = {"difference1": "Überprüfe immer ob du die Website kennst, auf der du Informationen nachschaust. SRF ist eine bekannte, schweizer Nachrichtenseite. \"animal-shock.net\" hast du noch nie gehört und daher musst du vorsichtiger sein mit den Informationen, die du dort findest.", "difference2": "Es ist immer gut Informationen an zwei verschiedenen Orten nachzuschauen. Wenn du das mit Schildkröten tust, findest du heraus, dass sie gar nicht klettern können."}

  const displayArticle = () => {
    return (
      <DiffGameContainer FakeImage={FakeArticle} RealImage={RealArticle} setWin={setWin} id={"game_newspaper"} numberOfDiffs={3} explanations={explanationsArticle} correctPicture={"right"}/>
    )
  }

  const explanationsPhone = {"difference1": "Falls dir der Name des Instagramaccount unbekannt vorkommt oder nicht nach einer Firma klingt, die du kennst, kann es sein, dass die Informationen, die sie zeigen nicht stimmen. Vergleiche grundsätzlich die Informationen von Instagram immer mit der Informationen von anderen Orten."}

  const displayPhone = () => {
    return (
      <DiffGameContainer FakeImage={RealPhone} RealImage={FakePhone} setWin={setWin} id={"game_insta"} numberOfDiffs={4} explanations={explanationsPhone} correctPicture={"right"}/>
    )
  }

  return (

    <div>

      <Popup trigger=
        {<div className='invisible-button popup-phone'></div>}
        modal nested>
        {displayPhone}
      </Popup>

      <Popup trigger=
        {<div className='invisible-button popup-newspaper'></div>}
        modal nested>
        {displayArticle}
    </Popup>

    <div className="wall1-background">
      <div className="wall1-content">
      </div>

    </div>
    </div>
  );
}

export default Wall1;