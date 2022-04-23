import React from 'react'
import Last5List from './Last5List'
import './GeneralRadioArea.css';
import TrackList from './TrackList';
import DiscordArea from './DiscordArea';

function GeneralRadioArea() {
  return (
    <div className='general-radio-area' id="general-body">
        <Last5List className="last5list-area" />
        <TrackList className="tracklist-area"/>
        <DiscordArea className="discord-area"/>
    </div>
  )
}

export default GeneralRadioArea