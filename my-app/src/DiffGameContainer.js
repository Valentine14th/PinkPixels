import React from 'react';
import DifferenceButtons from './DifferenceButtons';

function DiffGameContainer({FakeImage, RealImage, setWin, id, numberOfDiffs, explanations, correctPicture}) {
  return (
    <div className='modal'>
      <div>
        <h3>Finde die Unterschiede</h3>
      </div>
      <div  style={{ display: 'flex', justifyContent: 'top', gap: '10px'}}>
        <img
          src={FakeImage}
          alt='FakeImage'
          style={{ width: '100%', height: '100%'}}
        />
        <img
          src={RealImage}
          alt='RealImage'
          style={{ width: '100%', height: '100%'}}
        />
      </div>
      <DifferenceButtons id={id} setWin={setWin} numberOfDiffs={numberOfDiffs} explanations={explanations} correctPicture={correctPicture}/>
    </div>
)
}

export default DiffGameContainer;