import React from 'react'
import './BottomPlayer.css';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';

function BottomPlayer() {
  return (
      <div className='bottom-player-con'>
        <div className='bottom-player'>
        <div className='bottom-progress-bar'>
            <div className='bottom-progress-status'></div>
            <div className='bottom-progress-live'>
                <div className='bottom-progress-bound'></div>
                <div className='bottom-progress-txt'>live</div>
            </div>
        </div>
        <div className='bottom-player-area'>
            <div className='current-music'>
                <div className='current-music-img'>
                    <a href='#'>
                    <img src={"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9d/cb/77/9dcb7707-fe4b-bcda-6514-349b8a56769d/cover_4050215701229.jpg/1200x1200bf-60.jpg"} alt="görsel yok" />
                    </a>
                </div>
                <div className='current-music-detail'>
                    <div className='current-music-artist'>
                        TheFatRat
                    </div>
                    <div className='current-music-name'>
                        Unity
                    </div>
                </div>
               
            </div>
            <div className='bottom-player-buttons'>
                <div className='play-button'>
                <PlayCircleIcon className='playIcon'/>
                </div>
                <div className='voice-button'>
                <VolumeUpIcon className='voiceIcon'/>
                </div>
            </div>
            
            <div className='next-music'>
                <div className='next-music-img'>
                    <a href='#'>
                        <img src={"https://is1-ssl.mzstatic.com/image/thumb/Music114/v4/9d/cb/77/9dcb7707-fe4b-bcda-6514-349b8a56769d/cover_4050215701229.jpg/1200x1200bf-60.jpg"} alt="görsel yok" />
                    </a>
                </div>
                <div className='next-music-detail'>
                    <div className='next-music-header'>
                        Sıradaki şarkı
                    </div>
                    <div className='next-music-artist'>
                        TheFatRat
                    </div>
                    <div className='next-music-name'>
                        Unity
                    </div>
                </div>
               
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default BottomPlayer