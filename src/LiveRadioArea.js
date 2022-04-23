import React from 'react'
import LiveRadio from './LiveRadio';
import './LiveRadioArea.css';


function LiveRadioArea() {
  return (
    <div className='live-radio-area'>
       <div className='last-music-card-area'>
        <div className='last-music-card'>
          <div className='last-artist-card-name'>
            The Weeknd
          </div>
          <div className='last-music-card-name'>
            Blinding Lights
          </div>
          <div className='last-music-card-header'>
            Önceki şarkı
          </div>
        </div>
      </div>  
      <LiveRadio className="nowPlay"/>
      <div className='next-music-card-area'>
      <div className='next-music-card'>
        <div className='next-music-card-header'>
          Sıradaki şarkı
        </div>
        <div className='next-artist-card-name'>
          The Weeknd
        </div>
        <div className='next-music-card-name'>
          Blinding Lights
        </div>
        </div>
      </div> 
      <a href='#general-body'>
        <div className='scroll-down'></div>
      </a>
    </div>
  )
}

export default LiveRadioArea