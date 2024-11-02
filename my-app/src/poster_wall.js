// import React, { useState } from 'react';
// import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import './poster_wall.css';
import './SpotTheDifference.css';
import newspaper from './assets/poster_clippings/newspaper_poster.png'; // Import your image
import youtube from './assets/poster_clippings/youtube_poster.png';     // Import other images as needed
import instagram from './assets/poster_clippings/instapost_poster.png';
import picture from './assets/diff_game_pics/turtle_photo.jpeg';

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

