// import React, { useState } from 'react';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './poster_wall.css';
import './SpotTheDifference.css';
import newspaper from './assets/cut_outs/newspaper.png'; // Import your image
import youtube from './assets/cut_outs/computer.png';     // Import other images as needed
import instagram from './assets/cut_outs/phone.png';
import picture from './assets/cut_outs/tablet.png';

function PosterWall({ win }) {
  const renderItem = (isAvailable, imagePath, altText) => (
    isAvailable ? (
      <img src={imagePath} alt={altText} className="poster-image" />
    ) : (
      <div className="black-box"> ? </div>
    )
  );

  return (
    <div className="posterwall-background">
      <div className="posterwall-content">
        <div className="title-container">
          <h1 className="child-handwriting">Schildkröten</h1 >
        </div>
        <div className="image-container" >
          {/* Access each game's status from the `win` prop */}
          <div className="image-box">
            {renderItem(win.game_newspaper, newspaper, 'Newspaper')}
          </div>
          <div className="image-box">
            {renderItem(win.game_youtube, youtube, 'YouTube')}
          </div>
          <div className="image-box">
            {renderItem(win.game_insta, instagram , 'Instagram')}
          </div>
          <div className="image-box">
            {renderItem(win.game_picture, picture, 'Picture')}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PosterWall;

// function PosterWall() {
//   return (

//     <div>

//       <Popup trigger=
//         {<button className='popup-poster'> Poster </button>} 
//         modal nested>
//         {
//           close => (
//             <div className='modal'>
//               <button className='close' onClick={close}>
//                 &times;
//               </button>
//               <div className='content'>
//                 Poster
//               </div>
//             </div>
//           )
//         }
//       </Popup>

//     <div className="posterwall-background">
//       <div className="posterwall-content">
//         <h1>PosterWall</h1>
//       </div>

//     </div>
//     </div>
//   );
// }

