import React from 'react';
import DifferenceButtons from './DifferenceButtons';

function DiffGameContainer({FakeImage, RealImage}) {
  return (
    <div className='modal'>
      <div  style={{ display: 'flex', justifyContent: 'center', gap: '10px'}}>
        <img
          src={FakeImage}
          alt='FakeImage'
          style={{ width: '100%', height: 'auto' }}
        />
        <img
          src={RealImage}
          alt='RealImage'
          style={{ width: '100%', height: 'auto' }}
        />
      </div>
      <DifferenceButtons />
    </div>
)
}

export default DiffGameContainer;