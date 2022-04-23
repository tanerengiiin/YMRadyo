import React from 'react'
import Track from './Track'
import './GeneralRadioArea.css';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

function TrackList() {
  return (
    <div className='track-list-con'>
        <div className='track-list-header'>
            <div className='list-page-num' id='page-one'>1</div>
            <div className='list-page-num'>2</div>
            <div className='list-page-num'>3</div>
            <div className='track-list-search'>
                <input type={"text"} className="track-list-search" placeholder='Şarkı ara...'/>
                <SearchIcon style={{cursor: "pointer"}}/>
            </div>
            <div className='track-list-refresh'>
                <RefreshIcon className='track-list-refresh-button' />
            </div>
        </div>
        <div className='track-list'>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
            <Track/>
        </div>

    </div>
  )
}

export default TrackList