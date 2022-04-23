import React from 'react'
import './GeneralRadioArea.css';
import LastTrack from './LastTrack';

function Last5List() {
  return (
    <div className='last-5list'>
        <div className='last-5list-header'>Çalan son 5 şarkı</div>
        <LastTrack/>
        <LastTrack/>
        <LastTrack/>
        <LastTrack/>
        <LastTrack/>
    </div>
  )
}

export default Last5List